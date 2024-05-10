import React, { ReactNode, useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  DateTimeValidationError,
  DesktopDateTimePicker,
  DesktopDateTimePickerSlotsComponentsProps,
} from '@mui/x-date-pickers';
import { useAutoUpdateLayoutRef, useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { ClickAwayListener, InputAdornment, InputProps, FormHelperText, InputLabelProps } from '@mui/material';
import { PdgIcon, PdgIconText } from '@pdg/react-component';
import {
  PrivateDateTimePickerProps as Props,
  PrivateDateTimePickerCommands,
  PrivateDateTimePickerValue,
} from './PrivateDateTimePicker.types';
import { useFormState } from '../../FormContext';
import {
  checkDateAvailable,
  getAvailableDate,
  getAvailableDateVal,
  getDateTimeFormat,
  getDateTimeFormValueFormat,
  getDateValForAvailableDate,
  getDateValidationErrorText,
  makeAvailableDate,
} from '../../@util.private';
import { PrivateStaticDateTimePickerCommands, PrivateStaticDateTimePickerUnit } from '../PrivateStaticDateTimePicker';
import { PrivateStyledTooltip } from '../PrivateStyledTooltip';
import { InputBaseProps } from '@mui/material/InputBase';
import './PrivateDateTimePicker.scss';
import { Dayjs } from 'dayjs';
import PrivateStaticDateTimePicker from '../PrivateStaticDateTimePicker';
import { empty, ifUndefined, nextTick, notEmpty } from '@pdg/util';

const PrivateDateTimePicker = React.forwardRef<PrivateDateTimePickerCommands, Props>(
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
      value: initValue = null,
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
      align = 'center',
      hours,
      minutes,
      seconds,
      minuteInterval,
      secondInterval,
      readOnlyInput,
      hidden: initHidden,
      showDaysOutsideCurrentMonth = true,
      onChange,
      onValidate: initOnValidate,
      //--------------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
      ...otherProps
    },
    ref
  ) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const privateStaticDateTimePickerRef = useRef<PrivateStaticDateTimePickerCommands>(null);
    const textFieldInputRef = useRef<HTMLInputElement>();
    const closeTimeoutRef = useRef<NodeJS.Timeout>();
    const mouseDownTimeRef = useRef<number>();
    const datePickerErrorRef = useRef<DateTimeValidationError>(null);
    const openValueRef = useRef<PrivateDateTimePickerValue>(null);
    const onValidateRef = useAutoUpdateLayoutRef(initOnValidate);

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
     * Value
     * ******************************************************************************************************************/

    const variant = ifUndefined(initVariant, formVariant);
    const size = ifUndefined(initSize, formSize);
    const color = ifUndefined(initColor, formColor);
    const focused = ifUndefined(initFocused, formFocused);
    const labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

    /********************************************************************************************************************
     * State - open
     * ******************************************************************************************************************/

    const [open, setOpen] = useState(false);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [timeError, setTimeError] = useState<DateTimeValidationError>(null);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const format = useMemo(() => (initFormat ? initFormat : getDateTimeFormat(type, time)), [initFormat, time, type]);
    const availableDate = useMemo(
      () => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture),
      [disableFuture, disablePast, maxDate, minDate]
    );
    const style = useMemo(() => (width != null ? { ...initStyle, width } : initStyle), [initStyle, width]);

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

    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/

    const validate = useCallback(
      (value: PrivateDateTimePickerValue) => {
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
      [required, timeError, onValidateRef, setErrorErrorHelperText]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const getFinalValue = useCallback((value: Props['value']): PrivateDateTimePickerValue => {
      return value || null;
    }, []);

    const [valueRef, value, setValue] = useAutoUpdateRefState(initValue, getFinalValue);
    const [inputValue, setInputValue] = useAutoUpdateState<PrivateDateTimePickerValue>(value);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

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
        let timeError: DateTimeValidationError = null;

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

    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/

    const focus = useCallback(() => {
      textFieldInputRef.current?.focus();
    }, [textFieldInputRef]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      if (ref || onAddValueItem) {
        const commands: PrivateDateTimePickerCommands = {
          getType: () => 'default',
          getName: () => name,
          getReset: () => getFinalValue(initValue),
          reset: () => setValue(initValue),
          getValue: () => valueRef.current,
          setValue,
          getData: () => dataRef.current,
          setData,
          isExceptValue: () => !!exceptValue,
          isDisabled: () => !!disabledRef.current,
          setDisabled,
          isHidden: () => !!hiddenRef.current,
          setHidden,
          focus,
          focusValidate: focus,
          validate: () => validate(valueRef.current),
          setError: (error: boolean, errorText: ReactNode | undefined) =>
            setErrorErrorHelperText(error, error ? errorText : undefined),
          getFormValueFormat: () =>
            initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time),
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
      getFinalValue,
      hiddenRef,
      id,
      initFormValueFormat,
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
      time,
      type,
      validate,
      valueRef,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (unit: PrivateStaticDateTimePickerUnit, newValue: PrivateDateTimePickerValue, keyboardInputValue?: string) => {
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
                  privateStaticDateTimePickerRef.current?.timeSelectScrollToDate(finalValue);
                  break;
                case 'hour':
                  privateStaticDateTimePickerRef.current?.timeSelectScrollToDate(finalValue, ['minute', 'second']);
                  break;
                case 'minute':
                  privateStaticDateTimePickerRef.current?.timeSelectScrollToDate(finalValue, ['second']);
                  break;
              }
            }
          }
        }

        setInputValue(finalValue);
      },
      [setInputValue, type, time, setValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]
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

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const slotProps = useMemo<DesktopDateTimePickerSlotsComponentsProps<Dayjs>>(() => {
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
                <PdgIcon size='small'>{icon}</PdgIcon>
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

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div
            className={classNames(className, 'PrivateDateTimePicker')}
            style={{
              display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
              flex: fullWidth ? 1 : undefined,
            }}
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
                      offset: [0, error && helperText ? 8 : -14],
                    },
                  },
                ],
              }}
              title={
                <PrivateStaticDateTimePicker
                  {...otherProps}
                  ref={privateStaticDateTimePickerRef}
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
                  showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
                  onChange={handleChange}
                  onAccept={() => !time && setOpen(false)}
                  onClose={() => setOpen(false)}
                />
              }
            >
              <div style={{ display: fullWidth ? 'block' : 'inline-block' }}>
                <DesktopDateTimePicker
                  value={inputValue}
                  label={labelIcon ? <PdgIconText icon={labelIcon}>{initLabel}</PdgIconText> : initLabel}
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
                  showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
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

export default PrivateDateTimePicker;
