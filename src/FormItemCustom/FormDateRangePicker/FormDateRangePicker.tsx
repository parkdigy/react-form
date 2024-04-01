import React, { ReactNode, useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  FormDateRangePickerProps as Props,
  FormDateRangePickerDefaultProps,
  FormDateRangePickerValue,
  FormDateRangePickerDateValue,
  FormDateRangePickerCalendarCount,
  FormDateRangePickerCommands,
} from './FormDateRangePicker.types';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { PrivateInputDatePicker, PrivateInputDatePickerValue, PrivateStyledTooltip } from '../../@private';

import {
  FormDateRangePickerTooltipPickerContainer,
  FormDateRangePickerTooltipPickerContainerCommands,
  FormDateRangePickerTooltipPickerContainerMonths,
} from './FormDateRangePickerTooltipPickerContainer';
import {
  FormDateRangePickerTooltipPickerDateValue,
  FormDateRangePickerTooltipPickerSelectType,
  FormDateRangePickerTooltipPickerValue,
} from './FormDateRangePickerTooltipPickerContainer/FormDateRangePickerTooltipPicker';
import dayjs, { Dayjs } from 'dayjs';
import { useFormState } from '../../FormContext';
import { getDateValidationErrorText } from '../../@util';
import { nextTick, notEmpty } from '@pdg/util';
import { DateValidationError } from '@mui/x-date-pickers';

const DEFAULT_VALUE: FormDateRangePickerValue = [null, null];
const DEFAULT_FORMAT = 'YYYY-MM-DD';

const FormDateRangePicker = React.forwardRef<FormDateRangePickerCommands, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      labelShrink: initLabelShrink,
      fullWidth: initFullWidth,
      //--------------------------------------------------------------------------------------------------------------------
      name,
      value: initValue,
      data: initData,
      fromLabel,
      fromLabelIcon,
      toLabel,
      toLabelIcon,
      calendarCount: initCalendarCount,
      format: initFormat,
      formValueFormat,
      allowSingleSelect,
      required,
      requiredStart,
      requiredEnd,
      readOnly,
      readOnlyStart,
      readOnlyEnd,
      readOnlyInput,
      disabled: initDisabled,
      inputWidth,
      exceptValue,
      error: initError,
      helperText,
      formValueFromNameSuffix,
      formValueToNameSuffix,
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
      align,
      onGetActionButtons,
      onChange,
      onValidate,
      // -------------------------------------------------------------------------------------------------------------------
      className,
    },
    ref
  ) => {
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
    } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const focused = useMemo(() => (initFocused == null ? formFocused : initFocused), [initFocused, formFocused]);
    const labelShrink = useMemo(
      () => (initLabelShrink == null ? formLabelShrink : initLabelShrink),
      [initLabelShrink, formLabelShrink]
    );
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const containerRef = useRef<FormDateRangePickerTooltipPickerContainerCommands>(null);
    const startDateTextFieldRef = useRef<HTMLInputElement>();
    const endDateTextFieldRef = useRef<HTMLInputElement>();
    const closeTimeoutRef = useRef<NodeJS.Timeout>();
    const mouseDownTimeRef = useRef<number>();
    const startInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const endInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const openValueRef = useRef<FormDateRangePickerValue>();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [fromError, setFromError] = useState(false);
    const [fromErrorHelperText, setFromErrorHelperText] = useState<Props['helperText']>();
    const [toError, setToError] = useState(false);
    const [toErrorHelperText, setToErrorHelperText] = useState<Props['helperText']>();

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const format = useMemo(() => initFormat || DEFAULT_FORMAT, [initFormat]);

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
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/

    const setErrorErrorHelperText = useCallback(
      (error: boolean, errorHelperText: ReactNode) => {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    const setFromErrorErrorHelperText = useCallback((error: boolean, fromErrorHelperText: ReactNode) => {
      setFromError(error);
      setFromErrorHelperText(fromErrorHelperText);
    }, []);

    const setToErrorErrorHelperText = useCallback((error: boolean, toErrorHelperText: ReactNode) => {
      setToError(error);
      setToErrorHelperText(toErrorHelperText);
    }, []);

    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/

    const validate = useCallback(
      (value: FormDateRangePickerValue) => {
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

        if (onValidate) {
          const onValidateResult = onValidate(value);
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
        onValidate,
        setErrorErrorHelperText,
        setFromErrorErrorHelperText,
        setToErrorErrorHelperText,
      ]
    );

    /********************************************************************************************************************
     * Function - activeMonth
     * ******************************************************************************************************************/

    const activeMonth = useCallback(
      (month: Dayjs) => {
        setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
        containerRef.current?.activeMonth(month);
      },
      [containerRef]
    );

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [open, setOpen] = useState(false);
    const [selectType, setSelectType] = useState<FormDateRangePickerTooltipPickerSelectType>('start');
    const [calendarCount] = useAutoUpdateState<FormDateRangePickerCalendarCount>(initCalendarCount || 2);
    const [months, setMonths] = useState<FormDateRangePickerTooltipPickerContainerMonths>(() => {
      const now = dayjs();
      return [now, now.add(1, 'month'), now.add(2, 'month')];
    });

    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/

    const getFinalValue = useCallback((value: FormDateRangePickerValue | undefined): FormDateRangePickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    const [valueRef, value, setValue] = useAutoUpdateRefState<FormDateRangePickerValue, Props['value']>(
      initValue,
      getFinalValue
    );

    useFirstSkipEffect(() => {
      if (error || fromError || toError) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const inputDatePickerProps = useMemo(
      () => ({
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
      }),
      [
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
      ]
    );

    const inputStyle = useMemo(
      () => (inputWidth != null ? { width: inputWidth } : { width: fullWidth ? undefined : 150 }),
      [inputWidth, fullWidth]
    );

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
      if (open) {
        openValueRef.current = value;
      } else {
        if (openValueRef.current) {
          const openStartDate = openValueRef.current[0];
          const openEndDate = openValueRef.current[1];
          const startDate = value[0];
          const endDate = value[1];

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
              onRequestSearchSubmit(name, value);
            }
          }
        }
      }
    }, [open]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const wrapStyle = useMemo(
      () => ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
      }),
      [hidden, fullWidth]
    );

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (newValue: FormDateRangePickerTooltipPickerValue) => {
        setValue(newValue);
        setOpen(false);
        setFromErrorErrorHelperText(false, undefined);
        setToErrorErrorHelperText(false, undefined);
      },
      [setFromErrorErrorHelperText, setToErrorErrorHelperText, setValue]
    );

    const handleValueChange = useCallback(
      (
        selectType: FormDateRangePickerTooltipPickerSelectType,
        newValue: FormDateRangePickerTooltipPickerDateValue,
        fromInput?: boolean
      ) => {
        let finalValue: Props['value'];
        switch (selectType) {
          case 'start':
            if (value[1]?.isBefore(newValue)) {
              finalValue = [newValue, null];
              if (!fromInput) {
                nextTick(() => {
                  endDateTextFieldRef.current?.focus();
                });
              }
            } else {
              finalValue = [newValue, value[1]];
              if (!fromInput) {
                if (value[0] == null && newValue != null && value[1] != null) {
                  setOpen(false);
                } else {
                  nextTick(() => {
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
                setOpen(false);

                if (fromInput && !open) {
                  nextTick(() => {
                    onRequestSearchSubmit(name, finalValue);
                  });
                }
              } else {
                nextTick(() => {
                  startDateTextFieldRef.current?.focus();
                });
              }
              setToErrorErrorHelperText(false, undefined);
            }
            break;
        }

        setValue(finalValue);

        nextTick(() => {
          onValueChangeByUser(name, finalValue);
        });
      },
      [
        setValue,
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

    const handleInputDatePickerChange = useCallback(
      (selectType: FormDateRangePickerTooltipPickerSelectType, newValue: FormDateRangePickerDateValue) => {
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

    const handleContainerMouseDown = useCallback(() => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    }, []);

    const handleInputDatePickerFocus = useCallback(
      (selectType: FormDateRangePickerTooltipPickerSelectType) => {
        if (readOnly || disabled) return;

        const startValue = valueRef.current[0];
        const endValue = valueRef.current[1];
        setOpen(true);
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

    useLayoutEffect(() => {
      if (ref || onAddValueItem) {
        const commands: FormDateRangePickerCommands = {
          getType: () => 'FormDateRangePicker',
          getName: () => name,
          getReset: () => getFinalValue(initValue),
          reset: () => setValue(initValue),
          getValue: () => valueRef.current,
          setValue,
          getData: () => dataRef.current,
          setData,
          getFromValue: () => valueRef.current[0],
          setFromValue: (value) => setValue([value, valueRef.current[1]]),
          getToValue: () => valueRef.current[1],
          setToValue: (value) => setValue([valueRef.current[0], value]),
          isExceptValue: () => !!exceptValue,
          isDisabled: () => !!disabledRef.current,
          setDisabled,
          isHidden: () => !!hiddenRef.current,
          setHidden,
          focus,
          focusValidate,
          validate: () => validate(valueRef.current),
          setError: (error: boolean, errorText: ReactNode | undefined) =>
            setErrorErrorHelperText(error, error ? errorText : undefined),
          getFormValueFormat: () => formValueFormat || FormDateRangePickerDefaultProps.format,
          getFormValueFromNameSuffix: () =>
            formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix,
          getFormValueToNameSuffix: () =>
            formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix,
          getFormValueFromName: () => {
            return `${name}${formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix}`;
          },
          getFormValueToName: () => {
            return `${name}${formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix}`;
          },
        };

        if (ref) {
          if (typeof ref === 'function') {
            ref(commands);
          } else {
            ref.current = commands;
          }
        }

        if (onAddValueItem) onAddValueItem(id, commands);

        return () => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(null);
            } else {
              ref.current = null;
            }
          }

          if (onRemoveValueItem) onRemoveValueItem(id);
        };
      }
    }, [
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      focusValidate,
      formValueFormat,
      formValueFromNameSuffix,
      formValueToNameSuffix,
      getFinalValue,
      hiddenRef,
      id,
      initValue,
      name,
      onAddValueItem,
      onRemoveValueItem,
      ref,
      setData,
      setDisabled,
      setErrorErrorHelperText,
      setHidden,
      setValue,
      validate,
      valueRef,
    ]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div
            className={classNames(className, 'FormDateRangePicker')}
            style={wrapStyle}
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
              }}
              title={
                <div style={{ display: 'flex' }}>
                  <FormDateRangePickerTooltipPickerContainer
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
                <Grid item flex={1}>
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
                    readOnlyInput={readOnlyInput}
                    icon={startIcon || icon}
                    startAdornment={startStartAdornment || startAdornment}
                    endAdornment={startEndAdornment || endAdornment}
                    inputRef={startDateTextFieldRef}
                    onChange={(newValue: PrivateInputDatePickerValue) => handleInputDatePickerChange('start', newValue)}
                    onFocus={() => handleInputDatePickerFocus('start')}
                    onError={(reason) => (startInputDatePickerErrorRef.current = reason)}
                  />
                </Grid>
                <Grid item sx={{ px: 1 }}>
                  ~
                </Grid>
                <Grid item flex={1}>
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
                    readOnlyInput={readOnlyInput}
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
  }
);

FormDateRangePicker.displayName = 'FormDateRangePicker';
FormDateRangePicker.defaultProps = FormDateRangePickerDefaultProps;

export default FormDateRangePicker;
