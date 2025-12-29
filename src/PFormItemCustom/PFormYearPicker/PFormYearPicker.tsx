import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText } from '@mui/material';
import { useAutoUpdateRef, useFirstSkipChanged, useFirstSkipEffect, useForwardRef } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util.private';
import { empty } from '@pdg/compare';
import {
  PFormYearPickerProps as Props,
  PFormYearPickerCommands,
  PFormYearPickerValue,
  PFormYearPickerBaseValue,
} from './PFormYearPicker.types';
import { useFormState } from '../../PFormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  PrivateDatePickerValue,
  PrivateInputDatePicker,
  PrivateStyledTooltip,
  PrivateYearPicker,
  PrivateYearPickerValue,
} from '../../@private';
import { Dayjs } from 'dayjs';
import { dateToValue, getFinalValue, valueToDate } from './PFormYearPicker.function.private';

const DEFAULT_FORMAT = 'YYYY년';

const PFormYearPicker = ({
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
  format = DEFAULT_FORMAT,
  labelShrink: initLabelShrink,
  disablePast,
  disableFuture,
  minYear = 2020,
  maxYear = 2050,
  inputWidth,
  enableKeyboardInput,
  startAdornment,
  endAdornment,
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
  } = useFormState<PrivateYearPickerValue, false>();

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
  const inputRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);
  const inputDatePickerErrorRef = useRef<DateValidationError>(null);
  const openValueRef = useRef<PFormYearPickerValue>(undefined);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  /** error */
  const [error, _setError] = useState(initError);
  useFirstSkipChanged(() => _setError(initError), [initError]);
  const errorRef = useAutoUpdateRef(error);
  const setError = useCallback(
    (newValue: typeof error) => {
      _setError(newValue);
      errorRef.current = newValue;
    },
    [errorRef]
  );

  /** data */
  const [data, _setData] = useState(initData);
  useFirstSkipChanged(() => _setData(initData), [initData]);
  const dataRef = useAutoUpdateRef(data);
  const setData = useCallback(
    (newValue: typeof data) => {
      _setData(newValue);
      dataRef.current = newValue;
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
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [open, setOpen] = useState(false);

  /********************************************************************************************************************
   * Function - getFinalValue
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
    function (value: PFormYearPickerValue) {
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

  /** focus */
  const focus = useCallback(function () {
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.blur();
    });
  }, []);

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (newValue: ReturnType<typeof getFinalValue>) => {
      _setValue(newValue);
      valueRef.current = newValue;
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
    const nowYear = new Date().getFullYear();
    const minDate = minYear ? valueToDate(minYear) : undefined;
    const maxDate = maxYear ? valueToDate(maxYear) : undefined;
    return { nowYear, min: minDate, max: maxDate };
  }, [maxYear, minYear]);

  /********************************************************************************************************************
   * Change
   * ******************************************************************************************************************/

  useFirstSkipEffect(() => {
    if (open) {
      openValueRef.current = valueRef.current;
    } else {
      if (openValueRef.current !== valueRef.current) {
        let runOnRequestSearchSubmit;
        if (openValueRef.current && valueRef.current) {
          runOnRequestSearchSubmit = openValueRef.current !== valueRef.current;
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
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormYearPickerCommands>(
    () => ({
      getType: () => 'PFormYearPicker',
      getName: () => name,
      getReset: () => getFinalValue(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled,
      isHidden: () => !!hidden,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: setErrorErrorHelperText,
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
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
    useCallback((commands: PFormYearPickerCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
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
    (newValue: PFormYearPickerBaseValue, isClick: boolean) => {
      updateValue(newValue);
      if (isClick) setOpen(false);

      setTimeout(() => {
        onValueChangeByUser(name, newValue);
      });
    },
    [name, onValueChangeByUser, updateValue]
  );

  /** handleInputDatePickerChange */
  const handleInputDatePickerChange = useCallback(
    (v: PrivateDatePickerValue) => {
      const newValue = v ? dateToValue(v) : v;
      updateValue(newValue);
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
    (year: Dayjs) => {
      return (!!disablePast && year.year() < dateInfo.nowYear) || (!!disableFuture && year.year() > dateInfo.nowYear);
    },
    [disableFuture, disablePast, dateInfo.nowYear]
  );

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const valueDate = value ? valueToDate(value) : null;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
        <div
          className={classNames(className, 'PFormYearPicker')}
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
                <PrivateYearPicker
                  minYear={minYear}
                  maxYear={maxYear}
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
                variant={variant}
                size={size}
                color={color}
                focused={focused}
                labelShrink={labelShrink}
                fullWidth={fullWidth}
                disabled={disabled}
                format={format}
                minDate={dateInfo.min}
                maxDate={dateInfo.max}
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
                required={required}
                readOnly={readOnly}
                enableKeyboardInput={enableKeyboardInput}
                icon={icon}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                inputRef={inputRef}
                onChange={handleInputDatePickerChange}
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

export default PFormYearPicker;
