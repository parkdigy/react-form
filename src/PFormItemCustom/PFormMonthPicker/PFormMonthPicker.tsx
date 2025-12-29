import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText } from '@mui/material';
import { useAutoUpdateRef, useFirstSkipChanged, useFirstSkipEffect, useForwardRef } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util.private';
import { empty } from '@pdg/compare';
import {
  PFormMonthPickerProps as Props,
  PFormMonthPickerCommands,
  PFormMonthPickerValue,
  PFormMonthPickerBaseValue,
} from './PFormMonthPicker.types';
import { useFormState } from '../../PFormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PrivateInputDatePicker, PrivateMonthPicker, PrivateStyledTooltip } from '../../@private';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { dateToValue, getFinalValue, valueToDate, valueToYm } from './PFormMonthPicker.function.private';

const DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1,
};
const DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12,
};

const PFormMonthPicker = ({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  /********************************************************************************************************************/
  hidden: initHidden,
  /********************************************************************************************************************/
  name,
  labelIcon,
  label,
  readOnly,
  required,
  fullWidth: initFullWidth,
  disabled: initDisabled,
  error: initError,
  helperText,
  value: initValue,
  data: initData,
  exceptValue,
  onChange,
  onValidate,
  /********************************************************************************************************************/
  icon,
  format = 'YYYY년 MM월',
  labelShrink: initLabelShrink,
  disablePast,
  disableFuture,
  minValue = DEFAULT_MIN_VALUE,
  maxValue = DEFAULT_MAX_VALUE,
  inputWidth,
  enableKeyboardInput,
  startAdornment,
  endAdornment,
  formValueYearNameSuffix = '_year',
  formValueMonthNameSuffix = '_month',
  /********************************************************************************************************************/
  className,
  style: initStyle,
  sx,
}: Props) => {
  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();

  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const {
    variant: formVariant,
    size: formSize,
    color: formColor,
    focused: formFocused,
    labelShrink: formLabelShrink,
    fullWidth: formFullWidth,
    disabled: formDisabled,
    formColWithHelperText,
    onAddValueItem,
    onRemoveValueItem,
    onValueChange,
    onValueChangeByUser,
    onRequestSearchSubmit,
  } = useFormState<PFormMonthPickerValue, false>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const ratingRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);
  const inputDatePickerErrorRef = useRef<DateValidationError>(null);
  const openValueRef = useRef<PFormMonthPickerValue>(undefined);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [open, setOpen] = useState(false);

  /** error */
  const [error, _setError] = useState(initError);
  useFirstSkipChanged(() => _setError(initError), [initError]);
  const errorRef = useAutoUpdateRef(error);
  const setError = useCallback(
    (value: React.SetStateAction<typeof error>) => {
      _setError((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    },
    [errorRef]
  );

  /** data */
  const [data, _setData] = useState(initData);
  useFirstSkipChanged(() => _setData(initData), [initData]);
  const dataRef = useAutoUpdateRef(data);
  const setData = useCallback(
    (value: React.SetStateAction<typeof data>) => {
      _setData((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        dataRef.current = newValue;
        return newValue;
      });
    },
    [dataRef]
  );

  /** disabled */
  const finalInitDisabled = initDisabled ?? formDisabled;
  const [disabled, setDisabled] = useState(finalInitDisabled);
  useFirstSkipChanged(() => setDisabled(finalInitDisabled), [finalInitDisabled]);

  /** hidden */
  const [hidden, setHidden] = useState(initHidden);
  useFirstSkipChanged(() => setHidden(initHidden), [initHidden]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    function (error: Props['error'], errorHelperText: Props['helperText']) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
  const validate = useCallback(
    function (value: PFormMonthPickerValue) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, '필수 선택 항목입니다.');
        return false;
      }

      if (inputDatePickerErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
        return false;
      }

      if (onValidateRef.current) {
        const onValidateResult = onValidateRef.current(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [onValidateRef, required, setErrorErrorHelperText]
  );

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<ReturnType<typeof getFinalValue>>) => {
      _setValue((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        valueRef.current = newValue;
        return newValue;
      });
    },
    [valueRef]
  );

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value']) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);

      if (error) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, name, onChangeRef, onValueChange, setValue, validate]
  );

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const dateInfo = useMemo(() => {
    const nowDate = dayjs();
    const nowValue = dateToValue(nowDate);
    const nowYm = valueToYm(nowValue);

    const minDate = valueToDate(minValue);
    const maxDate = valueToDate(maxValue);

    let minAvailableValue: { year: number; month: number };
    if (disablePast) {
      const minYm = valueToYm(minValue);
      minAvailableValue = nowYm > minYm ? nowValue : minValue;
    } else {
      minAvailableValue = minValue;
    }
    const minAvailableYm = valueToYm(minAvailableValue);

    let maxAvailableValue: { year: number; month: number };
    if (disableFuture) {
      const maxYm = valueToYm(maxValue);
      maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
    } else {
      maxAvailableValue = maxValue;
    }
    const maxAvailableYm = valueToYm(maxAvailableValue);

    return {
      minDate,
      maxDate,
      minAvailableYm,
      maxAvailableYm,
    };
  }, [disableFuture, disablePast, maxValue, minValue]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (ratingRef.current) {
      inputRef.current = ratingRef.current.querySelector('input') || undefined;
    }
  }, []);

  useFirstSkipEffect(() => {
    if (open) {
      openValueRef.current = valueRef.current;
    } else {
      if (openValueRef.current !== valueRef.current) {
        let runOnRequestSearchSubmit;
        if (openValueRef.current && valueRef.current) {
          runOnRequestSearchSubmit =
            openValueRef.current.year !== valueRef.current.year ||
            openValueRef.current.month !== valueRef.current.month;
        } else {
          runOnRequestSearchSubmit = true;
        }

        if (runOnRequestSearchSubmit) {
          onRequestSearchSubmit(name, valueRef.current);
        }
      }
    }
  }, [open]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const focus = useCallback(function () {
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.blur();
    });
  }, []);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormMonthPickerCommands>(
    () => ({
      getType: () => 'PFormMonthPicker',
      getName: () => name,
      getReset: () => getFinalValue(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      getYear: () => (valueRef.current ? valueRef.current.year : null),
      setYear: (year: number | null) => {
        updateValue(
          year === null
            ? null
            : valueRef.current
              ? { year, month: valueRef.current.month }
              : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 }
        );
      },
      getMonth: () => (valueRef.current ? valueRef.current.month : null),
      setMonth: (month: number | null) => {
        updateValue(
          month === null
            ? null
            : valueRef.current
              ? { year: valueRef.current.year, month }
              : { year: new Date().getFullYear(), month }
        );
      },
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled,
      isHidden: () => !!hidden,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: setErrorErrorHelperText,
      getFormValueYearNameSuffix: () => formValueYearNameSuffix,
      getFormValueMonthNameSuffix: () => formValueMonthNameSuffix,
      getFormValueYearName: () => {
        return `${name}${formValueYearNameSuffix}`;
      },
      getFormValueMonthName: () => {
        return `${name}${formValueMonthNameSuffix}`;
      },
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      formValueMonthNameSuffix,
      formValueYearNameSuffix,
      hidden,
      initValueRef,
      name,
      setData,
      setErrorErrorHelperText,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    useCallback((commands: PFormMonthPickerCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleContainerMouseDown */
  const handleContainerMouseDown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
    mouseDownTimeRef.current = new Date().getTime();
  }, []);

  /** handleContainerFocus */
  const handleContainerFocus = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
  }, []);

  /** handleContainerBlur */
  const handleContainerBlur = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }

    if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
      closeTimeoutRef.current = setTimeout(() => {
        closeTimeoutRef.current = undefined;
        setOpen(false);
      }, 10);
    }
  }, []);

  /** handleContainerChange */
  const handleContainerChange = useCallback(
    (newValue: PFormMonthPickerBaseValue, isMonthSelect: boolean) => {
      updateValue(newValue);
      if (isMonthSelect) setOpen(false);

      setTimeout(() => {
        onValueChangeByUser(name, newValue);
      });
    },
    [name, onValueChangeByUser, updateValue]
  );

  /** handleInputDatePickerFocus */
  const handleInputDatePickerFocus = useCallback(() => {
    if (readOnly || disabled) return;

    setOpen(true);
  }, [readOnly, disabled]);

  /** handleInputDatePickerShouldDisableYear */
  const handleInputDatePickerShouldDisableYear = useCallback(
    (date: Dayjs) => {
      const dateYm = Number(date.format('YYYYMM'));
      return dateYm < dateInfo.minAvailableYm || dateYm > dateInfo.maxAvailableYm;
    },
    [dateInfo]
  );

  /********************************************************************************************************************
   * Variables
   * ******************************************************************************************************************/

  const valueDate = useMemo(() => (value ? valueToDate(value) : null), [value]);

  const inputDatePickerProps = useMemo(
    () => ({
      variant,
      size,
      color,
      labelShrink,
      fullWidth,
      disabled,
      format,
      minDate: dateInfo.minDate,
      maxDate: dateInfo.maxDate,
    }),
    [color, dateInfo.maxDate, dateInfo.minDate, disabled, format, fullWidth, labelShrink, size, variant]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
        <div
          className={classNames(className, 'PFormMonthPicker')}
          style={{
            display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
            flex: fullWidth ? 1 : undefined,
          }}
          onMouseDown={handleContainerMouseDown}
          onFocus={handleContainerFocus}
          onBlur={handleContainerBlur}
        >
          <PrivateStyledTooltip
            open={open}
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, error && errorHelperText ? 8 : -14],
                    },
                  },
                ],
              },
            }}
            title={
              <div style={{ display: 'flex' }}>
                <PrivateMonthPicker
                  minValue={minValue}
                  maxValue={maxValue}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  value={value}
                  onChange={handleContainerChange}
                />
              </div>
            }
          >
            <div>
              <PrivateInputDatePicker
                {...inputDatePickerProps}
                style={
                  inputWidth != null
                    ? { width: inputWidth, ...initStyle }
                    : { width: fullWidth ? undefined : 150, ...initStyle }
                }
                sx={sx}
                value={valueDate}
                label={label}
                labelIcon={labelIcon}
                error={error}
                focused={focused}
                required={required}
                readOnly={readOnly}
                enableKeyboardInput={enableKeyboardInput}
                icon={icon}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                inputRef={inputRef}
                onChange={(v) => updateValue(v ? dateToValue(v) : v)}
                onFocus={handleInputDatePickerFocus}
                onError={(reason) => (inputDatePickerErrorRef.current = reason)}
                shouldDisableYear={handleInputDatePickerShouldDisableYear}
              />
            </div>
          </PrivateStyledTooltip>
          {!formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (
            <FormHelperText error={error} style={{ marginLeft: variant === 'standard' ? 0 : 14 }}>
              {error ? errorHelperText : helperText}
            </FormHelperText>
          )}
        </div>
      </ClickAwayListener>
    </LocalizationProvider>
  );
};

export default PFormMonthPicker;
