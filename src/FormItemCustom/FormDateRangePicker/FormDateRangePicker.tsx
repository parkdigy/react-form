import React, { ReactNode, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import {
  FormDateRangePickerProps as Props,
  FormDateRangePickerDefaultProps,
  FormDateRangePickerValue,
  FormDateRangePickerDateValue,
  FormDateRangePickerCalendarCount,
  FormDateRangePickerCommands,
} from './FormDateRangePicker.types';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjsLocale from 'dayjs/locale/ko';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { PrivateStyledTooltip } from '../../@private';

import {
  CustomDatePickerContainer,
  CustomDatePickerContainerCommands,
  CustomDatePickerContainerMonths,
} from './CustomDatePickerContainer';
import {
  CustomDatePickerDateValue,
  CustomDatePickerSelectType,
  CustomDatePickerValue,
} from './CustomDatePickerContainer/CustomDatePicker';
import InputDatePicker, { InputDatePickerProps, InputDatePickerValue } from './InputDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useFormState } from '../../FormContext';
import { getDateValidationErrorText, nextTick, notEmpty } from '../../@util';
import { DateValidationError } from '@mui/x-date-pickers/internals';

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
      startLabel,
      startLabelIcon,
      endLabel,
      endLabelIcon,
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
      helperText: initHelperText,
      formValueStartNameSuffix,
      formValueEndNameSuffix,
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
      onChange,
      onValidate,
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      labelShrink: formLabelShrink,
      fullWidth: formFullWidth,
      formColWithHelperText,
      onAddValueItem,
      onRemoveValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
    } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [focused] = useAutoUpdateState<Props['focused']>(initFocused || formFocused);
    const [labelShrink] = useAutoUpdateState<Props['labelShrink']>(initLabelShrink || formLabelShrink);
    const [fullWidth] = useAutoUpdateState<Props['fullWidth']>(initFullWidth == null ? formFullWidth : initFullWidth);

    // Ref -------------------------------------------------------------------------------------------------------------

    const containerRef = useRef<CustomDatePickerContainerCommands>(null);
    const startDateTextFieldRef = useRef<HTMLInputElement>();
    const endDateTextFieldRef = useRef<HTMLInputElement>();
    const closeTimeoutRef = useRef<NodeJS.Timeout>();
    const mouseDownTimeRef = useRef<number>();
    const startInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const endInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const openValueRef = useRef<FormDateRangePickerValue>();

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [startError, setStartError] = useState(false);
    const [endError, setEndError] = useState(false);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback((value: FormDateRangePickerValue | undefined): FormDateRangePickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(() => {
      startDateTextFieldRef.current?.focus();
    }, [startDateTextFieldRef]);

    const focusValidate = useCallback(() => {
      if (endError) {
        endDateTextFieldRef.current?.focus();
      } else {
        startDateTextFieldRef.current?.focus();
      }
    }, [error, startError, endError, startDateTextFieldRef, endDateTextFieldRef]);

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      (value: FormDateRangePickerValue) => {
        if (required && (value[0] == null || value[1] == null)) {
          if (value[0] == null && value[1] == null) {
            setErrorHelperText(true, '?????? ?????? ???????????????.');
          } else if (value[0] == null) {
            setStartErrorHelperText(true, '?????? ?????? ???????????????.');
          } else {
            setEndErrorHelperText(true, '?????? ?????? ???????????????.');
          }
          return false;
        }
        if (requiredStart && value[0] == null) {
          setStartErrorHelperText(true, '?????? ?????? ???????????????.');
          return false;
        }
        if (requiredEnd && value[1] == null) {
          setEndErrorHelperText(true, '?????? ?????? ???????????????.');
          return false;
        }
        if (!allowSingleSelect && (value[0] || value[1]) && (value[0] == null || value[1] == null)) {
          if (value[0] == null) {
            setStartErrorHelperText(true, '?????? ?????? ???????????????.');
          } else {
            setEndErrorHelperText(true, '?????? ?????? ???????????????.');
          }
          return false;
        }

        const startInputValue = startDateTextFieldRef.current?.value || '';
        const endInputValue = endDateTextFieldRef.current?.value || '';

        if (notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
          setStartErrorHelperText(true, '????????? ???????????? ????????????.');
          return false;
        }
        if (notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
          setEndErrorHelperText(true, '????????? ???????????? ????????????.');
          return false;
        }
        if (startInputDatePickerErrorRef.current) {
          setStartErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
          return false;
        }
        if (endInputDatePickerErrorRef.current) {
          setEndErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
          return false;
        }

        if (onValidate) {
          const onValidateResult = onValidate(value);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorHelperText(false, initHelperText);
        setStartError(false);
        setEndError(false);

        return true;
      },
      [required, requiredStart, requiredEnd, startError, endError, allowSingleSelect, onValidate, initHelperText]
    );

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback((error: boolean, helperText: ReactNode) => {
      setError(error);
      setHelperText(helperText);
    }, []);

    const setStartErrorHelperText = useCallback((error: boolean, helperText: ReactNode) => {
      setStartError(error);
      setHelperText(helperText);
    }, []);

    const setEndErrorHelperText = useCallback((error: boolean, helperText: ReactNode) => {
      setEndError(error);
      setHelperText(helperText);
    }, []);

    // Function activeMonth --------------------------------------------------------------------------------------------

    const activeMonth = useCallback(
      (month: Dayjs) => {
        setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
        containerRef.current?.activeMonth(month);
      },
      [containerRef]
    );

    // State -----------------------------------------------------------------------------------------------------------

    const [open, setOpen] = useState(false);
    const [selectType, setSelectType] = useState<CustomDatePickerSelectType>('start');
    const [value, setValue] = useAutoUpdateState<FormDateRangePickerValue>(
      useCallback(() => {
        return initValue || DEFAULT_VALUE;
      }, [initValue])
    );

    const [format] = useAutoUpdateState<string>(
      useCallback(() => {
        return initFormat || DEFAULT_FORMAT;
      }, [initFormat])
    );
    const [calendarCount] = useAutoUpdateState<FormDateRangePickerCalendarCount>(initCalendarCount || 2);
    const [helperText, setHelperText] = useAutoUpdateState<Props['helperText']>(initHelperText);
    const [months, setMonths] = useState<CustomDatePickerContainerMonths>(() => {
      const now = dayjs();
      return [now, now.add(1, 'month'), now.add(2, 'month')];
    });
    const [inputDatePickerProps] = useAutoUpdateState<
      Pick<
        InputDatePickerProps,
        | 'variant'
        | 'size'
        | 'color'
        | 'labelShrink'
        | 'fullWidth'
        | 'disabled'
        | 'format'
        | 'disablePast'
        | 'disableFuture'
        | 'minDate'
        | 'maxDate'
      >
    >(
      useCallback(() => {
        return {
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
      }, [variant, size, color, labelShrink, fullWidth, disabled, format, disablePast, disableFuture, minDate, maxDate])
    );

    // State - inputStyle ----------------------------------------------------------------------------------------------

    const [inputStyle] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        if (inputWidth != null) {
          return { width: inputWidth };
        } else {
          return { width: fullWidth ? undefined : 150 };
        }
      }, [inputWidth, fullWidth])
    );

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }
    }, []);

    useFirstSkipEffect(() => {
      if (error || startError || endError) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

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

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback((newValue: CustomDatePickerValue) => {
      setValue(newValue);
      setOpen(false);
      setStartErrorHelperText(false, initHelperText);
      setEndErrorHelperText(false, initHelperText);
    }, []);

    const handleValueChange = useCallback(
      (selectType: CustomDatePickerSelectType, newValue: CustomDatePickerDateValue, fromInput?: boolean) => {
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
            setStartErrorHelperText(false, initHelperText);
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
              setStartErrorHelperText(false, initHelperText);
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
              setEndErrorHelperText(false, initHelperText);
            }
            break;
        }

        setValue(finalValue);

        nextTick(() => {
          onValueChangeByUser(name, finalValue);
        });
      },
      [
        name,
        value,
        activeMonth,
        setStartErrorHelperText,
        setEndErrorHelperText,
        initHelperText,
        allowSingleSelect,
        open,
      ]
    );

    const handleInputDatePickerChange = useCallback(
      (selectType: CustomDatePickerSelectType, newValue: FormDateRangePickerDateValue) => {
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
            setStartError(error);
            break;
          case 'end':
            setEndError(error);
            break;
        }
      },
      [handleValueChange]
    );

    // Event Handler - Container ---------------------------------------------------------------------------------------

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
      (selectType: CustomDatePickerSelectType) => {
        if (readOnly || disabled) return;

        const startValue = value[0];
        const endValue = value[1];
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
      [value, calendarCount, activeMonth, readOnly, disabled]
    );

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref || onAddValueItem) {
        let lastValue = value;
        let lastDisabled = !!disabled;

        const commands: FormDateRangePickerCommands = {
          getType: () => 'FormDateRangePicker',
          getName: () => name,
          getReset: () => getFinalValue(initValue),
          reset: () => {
            lastValue = getFinalValue(initValue);
            setValue(lastValue);
          },
          getValue: () => lastValue,
          setValue: (value) => {
            lastValue = getFinalValue(value);
            setValue(lastValue);
          },
          getStartValue: () => lastValue[0],
          setStartValue: (value) => {
            lastValue = [value, lastValue[1]];
            setValue(lastValue);
          },
          getEndValue: () => lastValue[1],
          setEndValue: (value) => {
            lastValue = [lastValue[0], value];
            setValue(lastValue);
          },
          isExceptValue: () => !!exceptValue,
          isDisabled: () => lastDisabled,
          setDisabled: (disabled) => {
            lastDisabled = disabled;
            setDisabled(disabled);
          },
          focus,
          focusValidate,
          validate: () => validate(value),
          setError: (error: boolean, errorText: ReactNode | undefined) =>
            setErrorHelperText(error, error ? errorText : initHelperText),
          getFormValueFormat: () => formValueFormat || FormDateRangePickerDefaultProps.format,
          getFormValueStartNameSuffix: () =>
            formValueStartNameSuffix || FormDateRangePickerDefaultProps.formValueStartNameSuffix,
          getFormValueEndNameSuffix: () =>
            formValueEndNameSuffix || FormDateRangePickerDefaultProps.formValueEndNameSuffix,
          getFormValueStartName: () => {
            return `${name}${formValueStartNameSuffix || FormDateRangePickerDefaultProps.formValueStartNameSuffix}`;
          },
          getFormValueEndName: () => {
            return `${name}${formValueEndNameSuffix || FormDateRangePickerDefaultProps.formValueEndNameSuffix}`;
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
      name,
      initValue,
      value,
      getFinalValue,
      exceptValue,
      disabled,
      focus,
      focusValidate,
      validate,
      formValueFormat,
      formValueStartNameSuffix,
      formValueEndNameSuffix,
      ref,
      onAddValueItem,
      onRemoveValueItem,
    ]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjsLocale}>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div
            style={{
              display: fullWidth ? 'block' : 'inline-block',
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
                      offset: [0, (error || startError || endError) && helperText ? 8 : -14],
                    },
                  },
                ],
              }}
              title={
                <div style={{ display: 'flex' }}>
                  <CustomDatePickerContainer
                    ref={containerRef}
                    calendarCount={calendarCount}
                    selectType={selectType}
                    value={value}
                    months={months}
                    disablePast={disablePast}
                    disableFuture={disableFuture}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={handleChange}
                    onValueChange={handleValueChange}
                    onMonthsChange={setMonths}
                  />
                </div>
              }
            >
              <Grid container alignItems='center'>
                <Grid item flex={1}>
                  <InputDatePicker
                    {...inputDatePickerProps}
                    style={inputStyle}
                    value={value[0]}
                    label={startLabel}
                    labelIcon={startLabelIcon}
                    error={error || startError}
                    focused={focused || (open && selectType === 'start')}
                    required={required || requiredStart}
                    readOnly={readOnly || readOnlyStart}
                    readOnlyInput={readOnlyInput}
                    icon={startIcon || icon}
                    startAdornment={startStartAdornment || startAdornment}
                    endAdornment={startEndAdornment || endAdornment}
                    inputRef={startDateTextFieldRef}
                    onChange={(newValue: InputDatePickerValue) => handleInputDatePickerChange('start', newValue)}
                    onFocus={() => handleInputDatePickerFocus('start')}
                    onError={(reason) => (startInputDatePickerErrorRef.current = reason)}
                  />
                </Grid>
                <Grid item sx={{ px: 1 }}>
                  ~
                </Grid>
                <Grid item flex={1}>
                  <InputDatePicker
                    {...inputDatePickerProps}
                    style={inputStyle}
                    value={value[1]}
                    label={endLabel}
                    labelIcon={endLabelIcon}
                    error={error || endError}
                    focused={focused || (open && selectType === 'end')}
                    required={required || requiredEnd}
                    readOnly={readOnly || readOnlyEnd}
                    readOnlyInput={readOnlyInput}
                    icon={endIcon || icon}
                    startAdornment={endStartAdornment || startAdornment}
                    endAdornment={endEndAdornment || endAdornment}
                    inputRef={endDateTextFieldRef}
                    onChange={(newValue: InputDatePickerValue) => handleInputDatePickerChange('end', newValue)}
                    onFocus={() => handleInputDatePickerFocus('end')}
                    onError={(reason) => (endInputDatePickerErrorRef.current = reason)}
                  />
                </Grid>
              </Grid>
            </PrivateStyledTooltip>
            {!formColWithHelperText && helperText && (
              <FormHelperText
                error={error || startError || endError}
                style={{ marginLeft: variant === 'standard' ? 0 : 14 }}
              >
                {helperText}
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
