import React, { ReactNode, useEffect, useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  DesktopDatePicker,
  DateValidationError,
  DesktopDatePickerProps,
} from '@mui/x-date-pickers';
import { ClickAwayListener, InputAdornment, InputProps, FormHelperText, InputLabelProps } from '@mui/material';
import { PIcon, PIconText } from '@pdg/react-component';
import {
  PrivateDatePickerProps as Props,
  PrivateDatePickerCommands,
  PrivateDatePickerValue,
} from './PrivateDatePicker.types';
import { useFormState } from '../../PFormContext';
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
import {
  PrivateStaticDatePicker,
  PrivateStaticDatePickerCommands,
  PrivateStaticDatePickerUnit,
} from '../PrivateStaticDatePicker';
import { PrivateStyledTooltip } from '../PrivateStyledTooltip';
import { InputBaseProps } from '@mui/material/InputBase';
import './PrivateDatePicker.scss';
import { empty, ifUndefined, notEmpty } from '@pdg/compare';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';

const PrivateDatePicker = ({
  ref,
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
  format,
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
  enableKeyboardInput,
  hidden: initHidden,
  showDaysOutsideCurrentMonth = true,
  onChange,
  onValidate: initOnValidate,
  //--------------------------------------------------------------------------------------------------------------------
  className,
  style: initStyle,
  sx,
  ...otherProps
}: Props) => {
  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const privateStaticDatePickerRef = useRef<PrivateStaticDatePickerCommands>(null);
  const textFieldInputRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);
  const datePickerErrorRef = useRef<DateValidationError>(null);

  const onValidateRef = useAutoUpdateRef(initOnValidate);

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
  } = useFormState<PrivateDatePickerValue, false>();

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
   * State - isOpen
   * ******************************************************************************************************************/

  const [isOpen, setIsOpen] = useState(false);

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

  const [timeError, setTimeError] = useState<DateValidationError>(null);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const availableDate = useMemo(
    () => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture),
    [disableFuture, disablePast, maxDate, minDate]
  );

  /********************************************************************************************************************
   * Function - setErrorErrorHelperText
   * ******************************************************************************************************************/

  const setErrorErrorHelperText = useCallback(
    (error: boolean, helperText: ReactNode) => {
      setError(error);
      setErrorHelperText(helperText);
    },
    [setError]
  );

  /********************************************************************************************************************
   * Function - validate
   * ******************************************************************************************************************/

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
  const validateRef = useAutoUpdateRef(validate);

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, setValue] = useState(initValue);
  useChanged(initValue) && setValue(initValue);

  const valueRef = useAutoUpdateRef(value);

  const [inputValue, setInputValue] = useState<PrivateDatePickerValue>(value);
  useChanged(value) && setInputValue(value);

  const [openValue, setOpenValue] = useState<PrivateDatePickerValue>(null);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: PrivateDatePickerValue) => {
      const finalValue = newValue;
      setValue(finalValue);

      valueRef.current = finalValue;

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      if (type !== 'time' && time && finalValue && (availableDate[0] || availableDate[1])) {
        const availableDateVal = getAvailableDateVal(availableDate, type, time);
        const valueVal = getDateValForAvailableDate(finalValue, type, time);
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

      return finalValue;
    },
    [availableDate, error, name, onChange, onValueChange, time, type, validate, valueRef]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const firstSkipRef = useRef(true);
    useEffect(() => {
      if (firstSkipRef) {
        firstSkipRef.current = false;
      } else {
        if (error && !timeError) {
          validateRef.current(valueRef.current);
        }
      }
    }, [error, timeError, validateRef, valueRef]);
  }

  if (useChanged(isOpen)) {
    if (isOpen) {
      setOpenValue(value);
    } else {
      if (openValue !== value) {
        let runOnRequestSearchSubmit;
        if (openValue && value) {
          runOnRequestSearchSubmit = !openValue.isSame(value, 'second');
        } else {
          runOnRequestSearchSubmit = true;
        }

        if (runOnRequestSearchSubmit) {
          onRequestSearchSubmit(name, value);
        }
      }
    }
  }

  /********************************************************************************************************************
   * Function - focus
   * ******************************************************************************************************************/

  const focus = useCallback(() => {
    textFieldInputRef.current?.focus();
  }, [textFieldInputRef]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PrivateDatePickerCommands>(
    () => ({
      getType: () => 'default',
      getName: () => name,
      getReset: () => initValue,
      reset: () => updateValue(initValue),
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
      setError: (error: boolean, errorText: ReactNode | undefined) =>
        setErrorErrorHelperText(error, error ? errorText : undefined),
      getFormValueFormat: () => (initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time)),
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      hidden,
      initFormValueFormat,
      initValue,
      name,
      setErrorErrorHelperText,
      time,
      type,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    (commands: PrivateDatePickerCommands) => onAddValueItem(id, commands),
    () => onRemoveValueItem(id)
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (unit: PrivateStaticDatePickerUnit, newValue: PrivateDatePickerValue, keyboardInputValue?: string) => {
      let isUpdateValue = true;
      if (notEmpty(keyboardInputValue)) {
        if (newValue) {
          if (!newValue.isValid()) {
            isUpdateValue = false;
          }
        }
      }

      let finalValue = newValue;

      if (isUpdateValue) {
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
            runOnRequestSearchSubmit = !isOpen; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
            setIsOpen(false);
          }
        } else if (time) {
          if (time === unit) setIsOpen(false);
        } else {
          setIsOpen(false);
        }
        updateValue(finalValue);

        setTimeout(() => {
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
    [setInputValue, type, time, updateValue, availableDate, isOpen, onValueChangeByUser, name, onRequestSearchSubmit]
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
        setIsOpen(false);
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

  const slotProps = useMemo<DesktopDatePickerProps['slotProps']>(() => {
    const textFieldInputLabelProps: Partial<InputLabelProps> = {};
    if (labelShrink) {
      textFieldInputLabelProps.shrink = labelShrink;
    }

    const readOnly = !enableKeyboardInput;
    const inputProps: InputBaseProps['inputProps'] = {
      readOnly,
    };
    if (readOnly) {
      inputProps.tabIndex = -1;
    }

    const muiInputProps: InputProps = { endAdornment: undefined };
    if (startAdornment || icon || muiInputProps.startAdornment) {
      muiInputProps.startAdornment = (
        <>
          {icon && (
            <InputAdornment position='start'>
              <PIcon size='small'>{icon}</PIcon>
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
        inputRef: textFieldInputRef,
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
        style: width != null ? { ...initStyle, width } : initStyle,
        sx,
        onFocus: () => {
          setIsOpen(true);
        },
        onClick: () => {
          setIsOpen(true);
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
    initStyle,
    labelShrink,
    enableKeyboardInput,
    required,
    size,
    startAdornment,
    sx,
    timeError,
    variant,
    width,
  ]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setIsOpen(false)}>
        <div
          className={classNames(className, 'PrivateDatePicker')}
          style={{
            display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
            flex: fullWidth ? 1 : undefined,
          }}
          onMouseDown={handleContainerMouseDown}
          onFocus={handleContainerFocus}
          onBlur={handleContainerBlur}
        >
          <PrivateStyledTooltip
            open={disabled || readOnly ? false : isOpen}
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
                showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
                onChange={handleChange}
                onAccept={() => !time && setIsOpen(false)}
                onClose={() => setIsOpen(false)}
              />
            }
          >
            <div style={{ display: fullWidth ? 'block' : 'inline-block' }}>
              <DesktopDatePicker
                value={inputValue}
                label={labelIcon ? <PIconText icon={labelIcon}>{initLabel}</PIconText> : initLabel}
                open={false}
                format={format ? format : getDateTimeFormat(type, time)}
                disabled={disabled}
                readOnly={readOnly}
                minDate={minDate}
                maxDate={maxDate}
                disablePast={disablePast}
                disableFuture={disableFuture}
                onClose={() => setIsOpen(false)}
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
};
export default PrivateDatePicker;
