import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText } from '@mui/material';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
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
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  //----------------------------------------------------------------------------------------------------------------
  hidden: initHidden,
  //----------------------------------------------------------------------------------------------------------------
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
  // -------------------------------------------------------------------------------------------------------------------
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
  //----------------------------------------------------------------------------------------------------------------
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

  const ratingRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);
  const inputDatePickerErrorRef = useRef<DateValidationError>(null);
  const openValueRef = useRef<PFormMonthPickerValue>(undefined);

  /********************************************************************************************************************
   * State - error
   * ******************************************************************************************************************/

  const [error, setError] = useState(initError);
  useChanged(initError) && setError(initError);

  /********************************************************************************************************************
   * State - data
   * ******************************************************************************************************************/

  const [data, setData] = useState(initData);
  useChanged(initData) && setData(initData);

  const dataRef = useAutoUpdateRef(data);

  /********************************************************************************************************************
   * State - disabled
   * ******************************************************************************************************************/

  const finalInitDisabled = initDisabled ?? formDisabled;

  const [disabled, setDisabled] = useState(finalInitDisabled);
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);

  /********************************************************************************************************************
   * State - hidden
   * ******************************************************************************************************************/

  const [hidden, setHidden] = useState(initHidden);
  useChanged(initHidden) && setHidden(initHidden);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [open, setOpen] = useState(false);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const setErrorErrorHelperText = useCallback(
    function (error: Props['error'], errorHelperText: Props['helperText']) {
      setError(error);
      setErrorHelperText(errorHelperText);
    },
    [setError]
  );

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

      if (onValidate) {
        const onValidateResult = onValidate(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [onValidate, required, setErrorErrorHelperText]
  );

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  // const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value']) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, name, onChange, onValueChange, validate, valueRef]
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

  /********************************************************************************************************************
   * Change
   * ******************************************************************************************************************/

  const firstSkipRef = useRef(true);
  const nameRef = useAutoUpdateRef(name);
  const onRequestSearchSubmitRef = useAutoUpdateRef(onRequestSearchSubmit);
  useEffect(() => {
    if (firstSkipRef.current) {
      firstSkipRef.current = false;
    } else {
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
            onRequestSearchSubmitRef.current(nameRef.current, valueRef.current);
          }
        }
      }
    }
  }, [nameRef, onRequestSearchSubmit, onRequestSearchSubmitRef, open, valueRef]);

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
      getReset: () => getFinalValue(initValue),
      reset: () => updateValue(initValue),
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
      setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
        setErrorErrorHelperText(error, error ? errorHelperText : undefined),
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
      initValue,
      name,
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

  const handleContainerMouseDown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
    mouseDownTimeRef.current = new Date().getTime();
  }, []);

  const handleContainerFocus = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
  }, []);

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

  const handleInputDatePickerFocus = useCallback(() => {
    if (readOnly || disabled) return;

    setOpen(true);
  }, [readOnly, disabled]);

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

  const valueDate = value ? valueToDate(value) : null;

  const inputDatePickerProps = {
    variant,
    size,
    color,
    labelShrink,
    fullWidth,
    disabled,
    format,
    minDate: dateInfo.minDate,
    maxDate: dateInfo.maxDate,
  };

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
            PopperProps={{
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, error && errorHelperText ? 8 : -14],
                  },
                },
              ],
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
