import React, { ReactNode, useEffect, useCallback, useId, useMemo, useRef, useState, useEffectEvent } from 'react';
import classNames from 'classnames';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  DesktopDatePicker,
  DateValidationError,
  DesktopDatePickerProps,
} from '@mui/x-date-pickers';
import { ClickAwayListener, InputAdornment, InputProps, FormHelperText } from '@mui/material';
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
import { empty, notEmpty } from '@pdg/compare';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
import { Dayjs } from 'dayjs';

const PrivateDatePicker = ({
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
  /********************************************************************************************************************/
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

  const initValueRef = useAutoUpdateRef(initValue);
  const privateStaticDatePickerRef = useRef<PrivateStaticDatePickerCommands>(null);
  const textFieldInputRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);
  const datePickerErrorRef = useRef<DateValidationError>(null);
  const openValueRef = useRef<PrivateDatePickerValue | null>(null);
  const onValidateRef = useAutoUpdateRef(initOnValidate);
  const onChangeRef = useAutoUpdateRef(onChange);

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

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isOpen, setIsOpen] = useState(false);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

  /** timeError */
  const [timeError, _setTimeError] = useState<DateValidationError>(null);
  const timeErrorRef = useAutoUpdateRef(timeError);
  const setTimeError = useCallback(
    (value: React.SetStateAction<typeof timeError>) => {
      _setTimeError((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        timeErrorRef.current = newValue;
        return newValue;
      });
    },
    [timeErrorRef]
  );

  /** error */
  const [error, _setError] = useState(initError);
  useChanged(initError) && _setError(initError);
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
  useChanged(initData) && _setData(initData);
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
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);

  /** hidden */
  const [hidden, setHidden] = useState(initHidden);
  useChanged(initHidden) && setHidden(initHidden);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const availableDate = useMemo(
    () => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture),
    [disableFuture, disablePast, maxDate, minDate]
  );

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    (error: boolean, helperText: ReactNode) => {
      setError(error);
      setErrorHelperText(error ? helperText : undefined);
    },
    [setError]
  );

  /** validate */
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
      if (timeErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(timeErrorRef.current));
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
    [required, timeErrorRef, onValidateRef, setErrorErrorHelperText]
  );
  const validateRef = useAutoUpdateRef(validate);

  /** focus */
  const focus = useCallback(() => {
    textFieldInputRef.current?.focus();
  }, [textFieldInputRef]);

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, _setValue] = useState(initValue);
  useChanged(initValue) && _setValue(initValue);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<Dayjs | null>) => {
      _setValue((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        valueRef.current = newValue;
        return newValue;
      });
    },
    [valueRef]
  );

  const [inputValue, setInputValue] = useState<PrivateDatePickerValue>(value);
  useChanged(value) && setInputValue(value);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: PrivateDatePickerValue) => {
      const finalValue = newValue;
      setValue(finalValue);

      if (errorRef.current) validateRef.current(finalValue);
      onChangeRef.current?.(finalValue);
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
    [availableDate, errorRef, name, onChangeRef, onValueChange, setTimeError, setValue, time, type, validateRef]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => validateRef.current(valueRef.current));

    useEffect(() => {
      if (error && !timeError) {
        effectEvent();
      }
    }, [error, timeError]);
  }

  {
    const effectEvent = useEffectEvent(() => {
      if (isOpen) {
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
    });

    useEffect(() => effectEvent(), [isOpen]);
  }

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PrivateDatePickerCommands>(
    () => ({
      getType: () => 'default',
      getName: () => name,
      getReset: () => initValueRef.current,
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
      validate: () => validateRef.current(valueRef.current),
      setError: setErrorErrorHelperText,
      getFormValueFormat: () => (initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time)),
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      hidden,
      initFormValueFormat,
      initValueRef,
      name,
      setData,
      setErrorErrorHelperText,
      time,
      type,
      updateValue,
      validateRef,
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

  /** handleChange */
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
        setIsOpen(false);
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

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  /** slotInputProps */
  const slotInputProps = useMemo(() => {
    const readOnly = !enableKeyboardInput;
    const inputProps: InputBaseProps['inputProps'] = {
      readOnly,
    };
    if (readOnly) {
      inputProps.tabIndex = -1;
    }
    return inputProps;
  }, [enableKeyboardInput]);

  /** slotMuiInputProps */
  const slotMuiInputProps = useMemo(() => {
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
    return muiInputProps;
  }, [endAdornment, icon, startAdornment]);

  /** slotProps */
  const slotProps = useMemo((): DesktopDatePickerProps['slotProps'] => {
    return {
      textField: {
        className: classNames('input-text-field', `align-${align}`),
        inputRef: textFieldInputRef,
        variant,
        size,
        color,
        focused,
        InputLabelProps: labelShrink ? { shrink: labelShrink } : undefined,
        InputProps: slotMuiInputProps,
        inputProps: slotInputProps,
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
    variant,
    size,
    color,
    focused,
    labelShrink,
    slotMuiInputProps,
    slotInputProps,
    required,
    fullWidth,
    error,
    timeError,
    width,
    initStyle,
    sx,
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
