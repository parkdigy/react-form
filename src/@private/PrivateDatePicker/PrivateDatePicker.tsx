import React, { ReactNode, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { useAutoUpdateLayoutState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { ClickAwayListener, InputAdornment, InputProps, TextField, FormHelperText } from '@mui/material';
import { DateValidationError } from '@mui/x-date-pickers/internals';
import dayjsLocale from 'dayjs/locale/ko';
import { IconText } from '@pdg/react-component';
import {
  PrivateDatePickerProps as Props,
  PrivateDatePickerDefaultProps,
  PrivateDatePickerCommands,
  PrivateDatePickerValue,
} from './PrivateDatePicker.types';
import { useFormState } from '../../FormContext';
import {
  checkDateAvailable,
  empty,
  getAvailableDate,
  getAvailableDateVal,
  getDateTimeFormat,
  getDateTimeFormValueFormat,
  getDateValForAvailableDate,
  getDateValidationErrorText,
  makeAvailableDate,
  nextTick,
  notEmpty,
} from '../../@util';
import {
  PrivateStaticDatePicker,
  PrivateStaticDatePickerCommands,
  PrivateStaticDatePickerUnit,
} from '../PrivateStaticDatePicker';
import { PrivateStyledTooltip } from '../PrivateStyledTooltip';
import { FormIcon } from '../../FormCommon';
import { InputBaseProps } from '@mui/material/InputBase';
import { FormAvailableDate } from '../@types';
import './PrivateDatePicker.scss';

const PrivateDatePicker = React.forwardRef<PrivateDatePickerCommands, Props>(
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
      type,
      time,
      value: initValue,
      label: initLabel,
      labelIcon,
      format: initFormat,
      formValueFormat: initFormValueFormat,
      required,
      readOnly,
      disabled: initDisabled,
      width,
      error: initError,
      helperText: initHelperText,
      minDate,
      maxDate,
      disableFuture,
      disablePast,
      exceptValue,
      icon,
      startAdornment,
      endAdornment,
      align,
      hours,
      minutes,
      seconds,
      minuteInterval,
      secondInterval,
      readOnlyInput,
      onChange,
      onValidate,
      //--------------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
      ...otherProps
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // Ref -------------------------------------------------------------------------------------------------------------

    const privateStaticDatePickerRef = useRef<PrivateStaticDatePickerCommands>(null);
    const textFieldInputRef = useRef<HTMLInputElement>();
    const closeTimeoutRef = useRef<NodeJS.Timeout>();
    const mouseDownTimeRef = useRef<number>();
    const datePickerErrorRef = useRef<DateValidationError>(null);
    const openValueRef = useRef<PrivateDatePickerValue>(null);

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

    // State - open ----------------------------------------------------------------------------------------------------

    const [open, setOpen] = useState(false);

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [timeError, setTimeError] = useState<DateValidationError>(null);
    const [helperText, setHelperText] = useAutoUpdateState<Props['helperText']>(initHelperText);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);

    const [label] = useAutoUpdateState<Props['label']>(
      useCallback(() => {
        if (labelIcon) {
          return <IconText icon={labelIcon}>{initLabel}</IconText>;
        } else {
          return initLabel;
        }
      }, [initLabel, labelIcon])
    );
    const [format] = useAutoUpdateState<string>(
      useCallback(() => {
        if (initFormat) {
          return initFormat;
        } else {
          return getDateTimeFormat(type, time);
        }
      }, [type, time, initFormat])
    );
    const [formValueFormat] = useAutoUpdateState<string>(
      useCallback(() => {
        if (initFormValueFormat) {
          return initFormValueFormat;
        } else {
          return getDateTimeFormValueFormat(type, time);
        }
      }, [time, initFormValueFormat])
    );
    const [availableDate] = useAutoUpdateState<FormAvailableDate>(
      useCallback((): FormAvailableDate => {
        return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
      }, [minDate, maxDate, disablePast, disableFuture])
    );

    // State - style ---------------------------------------------------------------------------------------------------

    const [style] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        if (width != null) {
          return { ...initStyle, width };
        } else {
          return initStyle;
        }
      }, [initStyle, width])
    );

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback((value: PrivateDatePickerValue): PrivateDatePickerValue => {
      return value;
    }, []);

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateLayoutState<PrivateDatePickerValue>(initValue || null, getFinalValue);
    const [inputValue, setInputValue] = useState<PrivateDatePickerValue>(null);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }
    }, []);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    useFirstSkipEffect(() => {
      if (error && !timeError) validate(value);
    }, [timeError]);

    useFirstSkipEffect(() => {
      if (open) {
        openValueRef.current = value;
      } else {
        if (openValueRef.current !== value) {
          let runOnRequestSearchSubmit;
          if (openValueRef.current && value) {
            runOnRequestSearchSubmit = !openValueRef.current.isSame(value, 'second');
          } else {
            runOnRequestSearchSubmit = true;
          }

          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, value);
          }
        }
      }
    }, [open]);

    useEffect(() => {
      if (time && value && (availableDate[0] || availableDate[1])) {
        const availableDateVal = getAvailableDateVal(availableDate, type, time);
        const valueVal = getDateValForAvailableDate(value, type, time);
        let timeError: DateValidationError = null;

        if (availableDateVal[0] && valueVal < availableDateVal[0]) {
          timeError = 'minDate';
        }
        if (timeError == null && availableDateVal[1] && valueVal > availableDateVal[1]) {
          timeError = 'maxDate';
        }

        setTimeError(timeError);
      } else {
        setTimeError(null);
      }
    }, [value]);

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(() => {
      textFieldInputRef.current?.focus();
    }, [textFieldInputRef]);

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      (value: PrivateDatePickerValue) => {
        if (required && empty(value)) {
          setErrorHelperText(true, '필수 입력 항목입니다.');
          return false;
        }
        if (value && !value.isValid()) {
          setErrorHelperText(true, '형식이 일치하지 않습니다.');
          return false;
        }
        if (datePickerErrorRef.current) {
          setErrorHelperText(true, getDateValidationErrorText(datePickerErrorRef.current));
          return false;
        }
        if (timeError) {
          setErrorHelperText(true, getDateValidationErrorText(timeError));
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

        return true;
      },
      [required, onValidate, initHelperText, datePickerErrorRef, timeError]
    );

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback((error: boolean, helperText: ReactNode) => {
      setError(error);
      setHelperText(helperText);
    }, []);

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref || onAddValueItem) {
        let lastValue = value;
        let lastDisabled = !!disabled;

        const commands: PrivateDatePickerCommands = {
          getType: () => 'default',
          getName: () => name,
          getReset: () => getFinalValue(initValue || null),
          reset: () => {
            lastValue = getFinalValue(initValue || null);
            setValue(lastValue);
          },
          getValue: () => lastValue,
          setValue: (value) => {
            lastValue = getFinalValue(value);
            setValue(lastValue);
          },
          isExceptValue: () => !!exceptValue,
          isDisabled: () => lastDisabled,
          setDisabled: (disabled) => {
            lastDisabled = disabled;
            setDisabled(disabled);
          },
          focus,
          focusValidate: focus,
          validate: () => validate(value),
          setError: (error: boolean, errorText: ReactNode | undefined) =>
            setErrorHelperText(error, error ? errorText : initHelperText),
          getFormValueFormat: () => formValueFormat,
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
      validate,
      formValueFormat,
      ref,
      onAddValueItem,
      onRemoveValueItem,
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback(
      (unit: PrivateStaticDatePickerUnit, newValue: PrivateDatePickerValue, keyboardInputValue?: string) => {
        let updateValue = true;
        if (notEmpty(keyboardInputValue)) {
          if (newValue) {
            if (!newValue.isValid()) {
              updateValue = false;
            }
          }
        }

        let finalValue = newValue;

        if (updateValue) {
          if (finalValue != null && keyboardInputValue == null) {
            const checkResult = checkDateAvailable(finalValue, availableDate, type, time);
            if (checkResult !== 'available') {
              const availableDateDate = getAvailableDate(availableDate, type, time);
              if (checkResult === 'min') {
                if (availableDateDate[0]) finalValue = availableDateDate[0];
              } else if (checkResult === 'max') {
                if (availableDateDate[1]) finalValue = availableDateDate[1];
              }
            }
          }

          let runOnRequestSearchSubmit = false;

          if (notEmpty(keyboardInputValue)) {
            if (!time || unit !== 'action_date') {
              runOnRequestSearchSubmit = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
              setOpen(false);
            }
          } else if (time) {
            if (time === unit) setOpen(false);
          }
          setValue(finalValue);

          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            if (runOnRequestSearchSubmit) {
              onRequestSearchSubmit(name, finalValue);
            }
          });

          if (time) {
            if (finalValue) {
              switch (unit) {
                case 'date':
                case 'action_date':
                  privateStaticDatePickerRef.current?.timeSelectScrollToDate(finalValue);
                  break;
                case 'hour':
                  privateStaticDatePickerRef.current?.timeSelectScrollToDate(finalValue, ['minute', 'second']);
                  break;
                case 'minute':
                  privateStaticDatePickerRef.current?.timeSelectScrollToDate(finalValue, ['second']);
                  break;
              }
            }
          }
        }

        setInputValue(finalValue);
      },
      [name, type, time, availableDate, open, value]
    );

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

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjsLocale}>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div
            className={classNames(className, 'PrivateDatePicker')}
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
                      offset: [0, error && helperText ? 8 : -14],
                    },
                  },
                ],
              }}
              title={
                <PrivateStaticDatePicker
                  {...otherProps}
                  ref={privateStaticDatePickerRef}
                  type={type}
                  time={time}
                  value={value}
                  availableDate={availableDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  hours={hours}
                  minutes={minutes}
                  seconds={seconds}
                  minuteInterval={minuteInterval}
                  secondInterval={secondInterval}
                  onChange={handleChange}
                  onAccept={() => !time && setOpen(false)}
                  onClose={() => setOpen(false)}
                />
              }
            >
              <div style={{ display: fullWidth ? 'block' : 'inline-block' }}>
                <DesktopDatePicker
                  value={inputValue}
                  label={label}
                  open={false}
                  inputFormat={format}
                  disabled={disabled}
                  readOnly={readOnly}
                  minDate={minDate}
                  maxDate={maxDate}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  onClose={() => setOpen(false)}
                  onError={(reason) => (datePickerErrorRef.current = reason)}
                  onChange={(newValue, keyboardInputValue) => handleChange('date', newValue, keyboardInputValue)}
                  renderInput={({
                    className: initClassName,
                    focused: initFocused,
                    error: initError,
                    style: initStyle,
                    inputProps: initInputProps,
                    InputProps: initMuiInputProps,
                    InputLabelProps,
                    ...params
                  }) => {
                    const textFieldInputLabelProps = {
                      ...InputLabelProps,
                      shrink: labelShrink ? true : InputLabelProps?.shrink,
                    };

                    const inputProps: InputBaseProps['inputProps'] = {
                      ...initInputProps,
                      readOnly: initInputProps?.readOnly || readOnlyInput,
                    };

                    const muiInputProps: InputProps = { ...initMuiInputProps, endAdornment: undefined };
                    if (startAdornment || icon || muiInputProps.startAdornment) {
                      muiInputProps.startAdornment = (
                        <>
                          {icon && (
                            <InputAdornment position='start'>
                              <FormIcon fontSize='small'>{icon}</FormIcon>
                            </InputAdornment>
                          )}
                          {startAdornment && <InputAdornment position='start'>{startAdornment}</InputAdornment>}
                          {muiInputProps.startAdornment}
                        </>
                      );
                    }
                    if (endAdornment) {
                      muiInputProps.endAdornment = (
                        <>{endAdornment && <InputAdornment position='end'>{endAdornment}</InputAdornment>}</>
                      );
                    }

                    return (
                      <TextField
                        {...params}
                        className={classNames(initClassName, 'input-text-field', `align-${align}`)}
                        inputRef={(ref) => {
                          if (params.inputRef) {
                            if (typeof params.inputRef === 'function') {
                              params.inputRef(ref);
                            }
                          }
                          textFieldInputRef.current = ref;
                        }}
                        variant={variant}
                        size={size}
                        color={color}
                        focused={focused || initFocused}
                        InputLabelProps={textFieldInputLabelProps}
                        InputProps={muiInputProps}
                        inputProps={inputProps}
                        required={required}
                        fullWidth={fullWidth}
                        helperText={undefined}
                        error={!!error || !!initError || !!timeError}
                        style={{ ...style, ...initStyle }}
                        sx={sx}
                        onFocus={() => {
                          setOpen(true);
                        }}
                        onClick={() => {
                          setOpen(true);
                        }}
                      />
                    );
                  }}
                  {...otherProps}
                />
              </div>
            </PrivateStyledTooltip>
            {!formColWithHelperText && helperText && (
              <FormHelperText error={error} style={{ marginLeft: variant === 'standard' ? 0 : 14 }}>
                {helperText}
              </FormHelperText>
            )}
          </div>
        </ClickAwayListener>
      </LocalizationProvider>
    );
  }
);

PrivateDatePicker.displayName = 'PrivateDatePicker';
PrivateDatePicker.defaultProps = PrivateDatePickerDefaultProps;

export default PrivateDatePicker;
