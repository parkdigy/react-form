import React, { ReactNode, useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DesktopDatePicker, DateValidationError } from '@mui/x-date-pickers';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { ClickAwayListener, InputAdornment, InputProps, FormHelperText, InputLabelProps } from '@mui/material';
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
import './PrivateDatePicker.scss';
import { DesktopDatePickerSlotsComponentsProps } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.types';
import { Dayjs } from 'dayjs';

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
      data: initData,
      label: initLabel,
      labelIcon,
      format: initFormat,
      formValueFormat: initFormValueFormat,
      required,
      readOnly,
      disabled: initDisabled,
      width,
      error: initError,
      helperText,
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
      hidden,
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

    // Memo - FormState ------------------------------------------------------------------------------------------------

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

    // State - open ----------------------------------------------------------------------------------------------------

    const [open, setOpen] = useState(false);

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [timeError, setTimeError] = useState<DateValidationError>(null);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);

    // Memo --------------------------------------------------------------------------------------------------------------

    const label = useMemo(() => {
      if (labelIcon) {
        return <IconText icon={labelIcon}>{initLabel}</IconText>;
      } else {
        return initLabel;
      }
    }, [initLabel, labelIcon]);

    const format = useMemo(() => {
      if (initFormat) {
        return initFormat;
      } else {
        return getDateTimeFormat(type, time);
      }
    }, [initFormat, time, type]);

    const formValueFormat = useMemo(() => {
      if (initFormValueFormat) {
        return initFormValueFormat;
      } else {
        return getDateTimeFormValueFormat(type, time);
      }
    }, [initFormValueFormat, time, type]);

    const availableDate = useMemo(
      () => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture),
      [disableFuture, disablePast, maxDate, minDate]
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

    const [value, setValue] = useAutoUpdateState<PrivateDatePickerValue>(initValue || null, getFinalValue);
    const [inputValue, setInputValue] = useState<PrivateDatePickerValue>(null);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      if (type !== 'time' && time && value && (availableDate[0] || availableDate[1])) {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // Memo --------------------------------------------------------------------------------------------------------------

    const wrapStyle = useMemo(
      () => ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
      }),
      [hidden, fullWidth]
    );

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(() => {
      textFieldInputRef.current?.focus();
    }, [textFieldInputRef]);

    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------

    const setErrorErrorHelperText = useCallback(
      (error: boolean, helperText: ReactNode) => {
        setError(error);
        setErrorHelperText(helperText);
      },
      [setError]
    );

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      (value: PrivateDatePickerValue) => {
        if (required && empty(value)) {
          setErrorErrorHelperText(true, '필수 입력 항목입니다.');
          return false;
        }
        if (value && !value.isValid()) {
          setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
          return false;
        }
        if (datePickerErrorRef.current) {
          setErrorErrorHelperText(true, getDateValidationErrorText(datePickerErrorRef.current));
          return false;
        }
        if (timeError) {
          setErrorErrorHelperText(true, getDateValidationErrorText(timeError));
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
      [required, timeError, onValidate, setErrorErrorHelperText]
    );

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref || onAddValueItem) {
        let lastValue = value;
        let lastData = data;
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
          getData: () => lastData,
          setData: (data) => {
            lastData = data;
            setData(data);
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
            setErrorErrorHelperText(error, error ? errorText : undefined),
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
      id,
      setValue,
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
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
          if (type !== 'time' && finalValue != null && keyboardInputValue == null) {
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
                  // privateStaticDatePickerRef.current?.timeSelectScrollToDate(finalValue);
                  break;
                case 'hour':
                  // privateStaticDatePickerRef.current?.timeSelectScrollToDate(finalValue, ['minute', 'second']);
                  break;
                case 'minute':
                  // privateStaticDatePickerRef.current?.timeSelectScrollToDate(finalValue, ['second']);
                  break;
              }
            }
          }
        }

        setInputValue(finalValue);
      },
      [type, time, setValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]
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

    // Memo --------------------------------------------------------------------------------------------------------------

    const slotProps = useMemo<DesktopDatePickerSlotsComponentsProps<Dayjs>>(() => {
      const textFieldInputLabelProps: Partial<InputLabelProps> = {};
      if (labelShrink) {
        textFieldInputLabelProps.shrink = labelShrink;
      }

      const readOnly = readOnlyInput;
      const inputProps: InputBaseProps['inputProps'] = {
        readOnly,
      };
      if (readOnly) {
        inputProps.tabIndex = -1;
        inputProps.className = classNames(inputProps.className, 'Mui-disabled');
      }

      const muiInputProps: InputProps = { endAdornment: undefined };
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

      return {
        textField: {
          className: classNames('input-text-field', `align-${align}`),
          inputRef: (ref) => {
            textFieldInputRef.current = ref;
          },
          variant,
          size,
          color,
          focused,
          InputLabelProps: textFieldInputLabelProps,
          InputProps: muiInputProps,
          inputProps,
          required,
          fullWidth,
          helperText: undefined,
          error: !!error || !!timeError,
          style,
          sx,
          onFocus: () => {
            setOpen(true);
          },
          onClick: () => {
            setOpen(true);
          },
        },
      };
    }, [
      align,
      color,
      endAdornment,
      error,
      focused,
      fullWidth,
      icon,
      labelShrink,
      readOnlyInput,
      required,
      size,
      startAdornment,
      style,
      sx,
      timeError,
      variant,
    ]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div
            className={classNames(className, 'PrivateDatePicker')}
            style={wrapStyle}
            onMouseDown={handleContainerMouseDown}
            onFocus={handleContainerFocus}
            onBlur={handleContainerBlur}
          >
            <PrivateStyledTooltip
              open={disabled || readOnly ? false : open}
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
                  format={format}
                  disabled={disabled}
                  readOnly={readOnly}
                  minDate={minDate}
                  maxDate={maxDate}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  onClose={() => setOpen(false)}
                  onError={(reason) => (datePickerErrorRef.current = reason)}
                  onChange={(newValue) => handleChange('date', newValue)}
                  slotProps={slotProps}
                  {...otherProps}
                />
              </div>
            </PrivateStyledTooltip>
            {!formColWithHelperText && (helperText || (error && errorHelperText)) && (
              <FormHelperText error={error} style={{ marginLeft: variant === 'standard' ? 0 : 14 }}>
                {error ? errorHelperText : helperText}
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
