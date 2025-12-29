import React, { ReactNode, useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  PFormDateRangePickerProps as Props,
  PFormDateRangePickerValue,
  PFormDateRangePickerDateValue,
  PFormDateRangePickerCommands,
} from './PFormDateRangePicker.types';
import { useAutoUpdateRef, useFirstSkipChanged, useFirstSkipEffect, useForwardRef } from '@pdg/react-hook';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { PrivateInputDatePicker, PrivateInputDatePickerValue, PrivateStyledTooltip } from '../../@private';
import {
  PFormDateRangePickerTooltipPickerContainer,
  PFormDateRangePickerTooltipPickerContainerCommands,
  PFormDateRangePickerTooltipPickerContainerMonths,
  PFormDateRangePickerTooltipPickerDateValue,
  PFormDateRangePickerTooltipPickerSelectType,
  PFormDateRangePickerTooltipPickerValue,
} from './PFormDateRangePickerTooltipPickerContainer';
import dayjs, { Dayjs } from 'dayjs';
import { useFormState } from '../../PFormContext';
import { getDateValidationErrorText } from '../../@util.private';
import { notEmpty } from '@pdg/compare';
import { DateValidationError } from '@mui/x-date-pickers';
import { getFinalValue } from './PFormDateRangePicker.function.private';

const DEFAULT_FORMAT = 'YYYY-MM-DD';

const PFormDateRangePicker = ({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  labelShrink: initLabelShrink,
  fullWidth: initFullWidth,
  /********************************************************************************************************************/
  name,
  value: initValue,
  data: initData,
  fromLabel,
  fromLabelIcon,
  toLabel,
  toLabelIcon,
  calendarCount = 2,
  format = DEFAULT_FORMAT,
  formValueFormat = DEFAULT_FORMAT,
  allowSingleSelect,
  required,
  requiredStart,
  requiredEnd,
  readOnly,
  readOnlyStart,
  readOnlyEnd,
  enableKeyboardInput,
  disabled: initDisabled,
  inputWidth,
  exceptValue,
  error: initError,
  helperText,
  formValueFromNameSuffix = '_from',
  formValueToNameSuffix = '_to',
  icon,
  startIcon,
  endIcon,
  startAdornment,
  startStartAdornment,
  endStartAdornment,
  endAdornment,
  startEndAdornment,
  endEndAdornment,
  disablePast,
  disableFuture,
  minDate,
  maxDate,
  hidden: initHidden,
  align = 'center',
  onGetActionButtons,
  onChange,
  onValidate,
  /********************************************************************************************************************/
  className,
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
  } = useFormState<PFormDateRangePickerValue, false, any, PFormDateRangePickerDateValue>();

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
  const containerRef = useRef<PFormDateRangePickerTooltipPickerContainerCommands>(null);
  const startDateTextFieldRef = useRef<HTMLInputElement>(undefined);
  const endDateTextFieldRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);
  const startInputDatePickerErrorRef = useRef<DateValidationError>(null);
  const endInputDatePickerErrorRef = useRef<DateValidationError>(null);
  const openValueRef = useRef<PFormDateRangePickerValue>(undefined);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [fromError, setFromError] = useState(false);
  const [fromErrorHelperText, setFromErrorHelperText] = useState<Props['helperText']>();
  const [toError, setToError] = useState(false);
  const [toErrorHelperText, setToErrorHelperText] = useState<Props['helperText']>();
  const [open, setopen] = useState(false);
  const [selectType, setSelectType] = useState<PFormDateRangePickerTooltipPickerSelectType>('start');
  const [months, setMonths] = useState<PFormDateRangePickerTooltipPickerContainerMonths>(() => {
    const now = dayjs();
    return [now, now.add(1, 'month'), now.add(2, 'month')];
  });

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
   * Function - focus
   * ******************************************************************************************************************/

  const focus = useCallback(() => {
    startDateTextFieldRef.current?.focus();
  }, [startDateTextFieldRef]);

  const focusValidate = useCallback(() => {
    if (toError) {
      endDateTextFieldRef.current?.focus();
    } else {
      startDateTextFieldRef.current?.focus();
    }
  }, [toError, startDateTextFieldRef, endDateTextFieldRef]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    (error: boolean, errorHelperText: ReactNode) => {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** setFromErrorErrorHelperText */
  const setFromErrorErrorHelperText = useCallback((error: boolean, fromErrorHelperText: ReactNode) => {
    setFromError(error);
    setFromErrorHelperText(fromErrorHelperText);
  }, []);

  /** setToErrorErrorHelperText */
  const setToErrorErrorHelperText = useCallback((error: boolean, toErrorHelperText: ReactNode) => {
    setToError(error);
    setToErrorHelperText(toErrorHelperText);
  }, []);

  /** validate */
  const validate = useCallback(
    (value: PFormDateRangePickerValue) => {
      if (required && (value[0] == null || value[1] == null)) {
        if (value[0] == null && value[1] == null) {
          setErrorErrorHelperText(true, '필수 입력 항목입니다.');
        } else if (value[0] == null) {
          setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
        } else {
          setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
        }
        return false;
      }
      if (requiredStart && value[0] == null) {
        setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
        return false;
      }
      if (requiredEnd && value[1] == null) {
        setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
        return false;
      }
      if (!allowSingleSelect && (value[0] || value[1]) && (value[0] == null || value[1] == null)) {
        if (value[0] == null) {
          setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
        } else {
          setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
        }
        return false;
      }

      const startInputValue = startDateTextFieldRef.current?.value || '';
      const endInputValue = endDateTextFieldRef.current?.value || '';

      if (notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
        setFromErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
        return false;
      }
      if (notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
        setToErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
        return false;
      }
      if (startInputDatePickerErrorRef.current) {
        setFromErrorErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
        return false;
      }
      if (endInputDatePickerErrorRef.current) {
        setToErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
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
      setFromError(false);
      setToError(false);

      return true;
    },
    [
      required,
      requiredStart,
      requiredEnd,
      allowSingleSelect,
      format,
      onValidateRef,
      setErrorErrorHelperText,
      setFromErrorErrorHelperText,
      setToErrorErrorHelperText,
    ]
  );

  /** activeMonth */
  const activeMonth = useCallback(
    (month: Dayjs) => {
      setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
      containerRef.current?.activeMonth(month);
    },
    [containerRef]
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

      if (error || fromError || toError) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, fromError, name, onChangeRef, onValueChange, setValue, toError, validate]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useFirstSkipEffect(() => {
    if (open) {
      openValueRef.current = valueRef.current;
    } else {
      if (openValueRef.current) {
        const openStartDate = openValueRef.current[0];
        const openEndDate = openValueRef.current[1];
        const startDate = valueRef.current[0];
        const endDate = valueRef.current[1];

        if (allowSingleSelect || (startDate != null && endDate != null)) {
          let runOnRequestSearchSubmit = false;
          if (openStartDate !== startDate) {
            if (openStartDate && startDate) {
              runOnRequestSearchSubmit = !openStartDate.isSame(startDate, 'date');
            } else {
              runOnRequestSearchSubmit = true;
            }
          }
          if (!runOnRequestSearchSubmit && openEndDate !== endDate) {
            if (openEndDate && endDate) {
              runOnRequestSearchSubmit = !openEndDate.isSame(endDate, 'date');
            } else {
              runOnRequestSearchSubmit = true;
            }
          }

          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, valueRef.current);
          }
        }
      }
    }
  }, [open]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleChange */
  const handleChange = useCallback(
    (newValue: PFormDateRangePickerTooltipPickerValue) => {
      updateValue(newValue);
      setopen(false);
      setFromErrorErrorHelperText(false, undefined);
      setToErrorErrorHelperText(false, undefined);
    },
    [setFromErrorErrorHelperText, setToErrorErrorHelperText, updateValue]
  );

  /** handleValueChange */
  const handleValueChange = useCallback(
    (
      selectType: PFormDateRangePickerTooltipPickerSelectType,
      newValue: PFormDateRangePickerTooltipPickerDateValue,
      fromInput?: boolean
    ) => {
      let finalValue: Props['value'];
      switch (selectType) {
        case 'start':
          if (value[1]?.isBefore(newValue)) {
            finalValue = [newValue, null];
            if (!fromInput) {
              setTimeout(() => {
                endDateTextFieldRef.current?.focus();
              });
            }
          } else {
            finalValue = [newValue, value[1]];
            if (!fromInput) {
              if (value[0] == null && newValue != null && value[1] != null) {
                setopen(false);
              } else {
                setTimeout(() => {
                  endDateTextFieldRef.current?.focus();
                });
              }
            }
          }
          setFromErrorErrorHelperText(false, undefined);
          if (fromInput && newValue) {
            activeMonth(newValue);
          }
          break;
        case 'end':
          if (newValue?.isBefore(value[0])) {
            finalValue = [newValue, null];
            if (fromInput && newValue) {
              activeMonth(newValue.subtract(calendarCount - 1, 'month'));
            }
            setFromErrorErrorHelperText(false, undefined);
          } else {
            finalValue = [value[0], newValue];
            if (fromInput && newValue) {
              activeMonth(newValue.subtract(calendarCount - 1, 'month'));
            }
            if (value[0]) {
              setopen(false);

              if (fromInput && !open) {
                setTimeout(() => {
                  onRequestSearchSubmit(name, finalValue!);
                });
              }
            } else {
              setTimeout(() => {
                startDateTextFieldRef.current?.focus();
              });
            }
            setToErrorErrorHelperText(false, undefined);
          }
          break;
      }

      updateValue(finalValue);

      setTimeout(() => {
        onValueChangeByUser(name, finalValue!);
      });
    },
    [
      updateValue,
      value,
      setFromErrorErrorHelperText,
      activeMonth,
      calendarCount,
      setToErrorErrorHelperText,
      open,
      onRequestSearchSubmit,
      name,
      onValueChangeByUser,
    ]
  );

  /** handleInputDatePickerChange */
  const handleInputDatePickerChange = useCallback(
    (selectType: PFormDateRangePickerTooltipPickerSelectType, newValue: PFormDateRangePickerDateValue) => {
      let error = false;
      if (newValue) {
        if (newValue.isValid()) {
          handleValueChange(selectType, newValue, true);
        } else {
          error = true;
        }
      } else {
        handleValueChange(selectType, newValue, true);
      }

      switch (selectType) {
        case 'start':
          setFromError(error);
          break;
        case 'end':
          setToError(error);
          break;
      }
    },
    [handleValueChange]
  );

  /********************************************************************************************************************
   * Event Handler - Container
   * ******************************************************************************************************************/

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
        setopen(false);
      }, 10);
    }
  }, []);

  /** handleContainerMouseDown */
  const handleContainerMouseDown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
    mouseDownTimeRef.current = new Date().getTime();
  }, []);

  /** handleInputDatePickerFocus */
  const handleInputDatePickerFocus = useCallback(
    (selectType: PFormDateRangePickerTooltipPickerSelectType) => {
      if (readOnly || disabled) return;

      const startValue = valueRef.current[0];
      const endValue = valueRef.current[1];
      setopen(true);
      setSelectType(selectType);
      if (startValue && endValue) {
        switch (selectType) {
          case 'start':
            activeMonth(startValue);
            break;
          case 'end':
            if (startValue.isSame(endValue, 'month')) {
              activeMonth(startValue);
            } else {
              if (endValue.diff(startValue, 'month') > calendarCount - 1) {
                activeMonth(endValue.subtract(calendarCount - 1, 'month'));
              } else {
                activeMonth(startValue);
              }
            }
            break;
        }
      } else if (startValue) {
        activeMonth(startValue);
      } else if (endValue) {
        activeMonth(endValue);
      }
    },
    [readOnly, disabled, valueRef, activeMonth, calendarCount]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormDateRangePickerCommands>(
    () => ({
      getType: () => 'PFormDateRangePicker',
      getName: () => name,
      getReset: () => getFinalValue(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      getFromValue: () => valueRef.current[0],
      setFromValue: (value) => updateValue([value, valueRef.current[1]]),
      getToValue: () => valueRef.current[1],
      setToValue: (value) => updateValue([valueRef.current[0], value]),
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled,
      isHidden: () => !!hidden,
      setHidden,
      focus,
      focusValidate,
      validate: () => validate(valueRef.current),
      setError: setErrorErrorHelperText,
      getFormValueFormat: () => formValueFormat,
      getFormValueFromNameSuffix: () => formValueFromNameSuffix,
      getFormValueToNameSuffix: () => formValueToNameSuffix,
      getFormValueFromName: () => {
        return `${name}${formValueFromNameSuffix}`;
      },
      getFormValueToName: () => {
        return `${name}${formValueToNameSuffix}`;
      },
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      focusValidate,
      formValueFormat,
      formValueFromNameSuffix,
      formValueToNameSuffix,
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
    useCallback((commands: PFormDateRangePickerCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const inputDatePickerProps = {
    align,
    variant,
    size,
    color,
    labelShrink,
    fullWidth,
    disabled,
    format,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
  };

  const inputStyle = inputWidth != null ? { width: inputWidth } : { width: fullWidth ? undefined : 150 };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setopen(false)}>
        <div
          className={classNames(className, 'PFormDateRangePicker')}
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
                      offset: [
                        0,
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)
                          ? 8
                          : -14,
                      ],
                    },
                  },
                ],
              },
            }}
            title={
              <div style={{ display: 'flex' }}>
                <PFormDateRangePickerTooltipPickerContainer
                  ref={containerRef}
                  calendarCount={calendarCount}
                  selectType={selectType}
                  value={value}
                  months={months}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  minDate={minDate}
                  maxDate={maxDate}
                  onGetActionButtons={onGetActionButtons}
                  onChange={handleChange}
                  onValueChange={handleValueChange}
                  onMonthsChange={setMonths}
                />
              </div>
            }
          >
            <Grid container alignItems='center'>
              <Grid flex={1}>
                <PrivateInputDatePicker
                  {...inputDatePickerProps}
                  style={inputStyle}
                  value={value[0]}
                  label={fromLabel}
                  labelIcon={fromLabelIcon}
                  error={error || fromError}
                  focused={focused || (open && selectType === 'start')}
                  required={required || requiredStart}
                  readOnly={readOnly || readOnlyStart}
                  enableKeyboardInput={enableKeyboardInput}
                  icon={startIcon || icon}
                  startAdornment={startStartAdornment || startAdornment}
                  endAdornment={startEndAdornment || endAdornment}
                  inputRef={startDateTextFieldRef}
                  onChange={(newValue: PrivateInputDatePickerValue) => handleInputDatePickerChange('start', newValue)}
                  onFocus={() => handleInputDatePickerFocus('start')}
                  onError={(reason) => (startInputDatePickerErrorRef.current = reason)}
                />
              </Grid>
              <Grid sx={{ px: 1 }}>~</Grid>
              <Grid flex={1}>
                <PrivateInputDatePicker
                  {...inputDatePickerProps}
                  style={inputStyle}
                  value={value[1]}
                  label={toLabel}
                  labelIcon={toLabelIcon}
                  error={error || toError}
                  focused={focused || (open && selectType === 'end')}
                  required={required || requiredEnd}
                  readOnly={readOnly || readOnlyEnd}
                  enableKeyboardInput={enableKeyboardInput}
                  icon={endIcon || icon}
                  startAdornment={endStartAdornment || startAdornment}
                  endAdornment={endEndAdornment || endAdornment}
                  inputRef={endDateTextFieldRef}
                  onChange={(newValue: PrivateInputDatePickerValue) => handleInputDatePickerChange('end', newValue)}
                  onFocus={() => handleInputDatePickerFocus('end')}
                  onError={(reason) => (endInputDatePickerErrorRef.current = reason)}
                />
              </Grid>
            </Grid>
          </PrivateStyledTooltip>
          {!formColWithHelperText &&
            (helperText ||
              (error && errorHelperText) ||
              (fromError && fromErrorHelperText) ||
              (toError && toErrorHelperText)) && (
              <FormHelperText
                error={error || fromError || toError}
                style={{ marginLeft: variant === 'standard' ? 0 : 14 }}
              >
                {error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText}
              </FormHelperText>
            )}
        </div>
      </ClickAwayListener>
    </LocalizationProvider>
  );
};

export default PFormDateRangePicker;
