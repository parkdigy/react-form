import React, { ReactNode, useCallback, useEffect, useEffectEvent, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  DateTimeValidationError,
  DesktopDateTimePicker,
  DesktopDateTimePickerProps,
} from '@mui/x-date-pickers';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
import { ClickAwayListener, InputAdornment, InputProps, FormHelperText, TooltipSlotsAndSlotProps } from '@mui/material';
import { PIcon, PIconText } from '@pdg/react-component';
import {
  PrivateDateTimePickerProps as Props,
  PrivateDateTimePickerCommands,
  PrivateDateTimePickerValue,
} from './PrivateDateTimePicker.types';
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
import { PrivateStaticDateTimePickerCommands, PrivateStaticDateTimePickerUnit } from '../PrivateStaticDateTimePicker';
import { PrivateStyledTooltip } from '../PrivateStyledTooltip';
import PrivateStaticDateTimePicker from '../PrivateStaticDateTimePicker';
import { empty, notEmpty } from '@pdg/compare';
import { getFinalValue } from './PrivateDateTimePicker.function.private';
import { PrivateDatePickerValue } from '../PrivateDatePicker';
import './PrivateDateTimePicker.scss';
import dayjs from 'dayjs';

const PrivateDateTimePicker = ({
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
  enableKeyboardInput,
  hidden: initHidden,
  showDaysOutsideCurrentMonth = true,
  onChange,
  onValidate,
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

  const privateStaticDateTimePickerRef = useRef<PrivateStaticDateTimePickerCommands>(null);
  const textFieldInputRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);
  const openValueRef = useRef<PrivateDatePickerValue | undefined>(undefined);
  const onValidateRef = useAutoUpdateRef(onValidate);
  const onChangeRef = useAutoUpdateRef(onChange);
  const initValueRef = useAutoUpdateRef(initValue);

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
  } = useFormState<PrivateDateTimePickerValue, false>();

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
  const [timeError, setTimeError] = useState<DateTimeValidationError>(null);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [datePickerError, setDatePickerError] = useState<DateTimeValidationError>(null);

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
   * Variable
   * ******************************************************************************************************************/

  const format = initFormat ? initFormat : getDateTimeFormat(type, time);

  const availableDate = makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);

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

  /** validate */
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
      if (datePickerError) {
        setErrorErrorHelperText(true, getDateValidationErrorText(datePickerError));
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
    [required, datePickerError, timeError, onValidateRef, setErrorErrorHelperText]
  );
  const validateRef = useAutoUpdateRef(validate);

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, _setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && _setValue(getFinalValue(initValue));
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
    (newValue: PrivateDateTimePickerValue) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);

      if (error) validateRef.current(finalValue);
      onChangeRef.current?.(finalValue);

      onValueChange(name, finalValue);

      if (type !== 'time' && time && finalValue && (availableDate[0] || availableDate[1])) {
        const availableDateVal = getAvailableDateVal(availableDate, type, time);
        const valueVal = getDateValForAvailableDate(finalValue, type, time);
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

      return finalValue;
    },
    [availableDate, error, name, onChangeRef, onValueChange, setValue, time, type, validateRef]
  );

  /********************************************************************************************************************
   * inputValue
   * ******************************************************************************************************************/

  const [inputValue, setInputValue] = useState(value);
  useChanged(value) && setInputValue(value);

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
        openValueRef.current = valueRef.current;
      } else {
        if (openValueRef.current !== valueRef.current) {
          let runOnRequestSearchSubmit;
          if (openValueRef.current && valueRef.current) {
            runOnRequestSearchSubmit = !openValueRef.current.isSame(valueRef.current, 'second');
          } else {
            runOnRequestSearchSubmit = true;
          }

          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, valueRef.current);
          }
        }
      }
    });
    useEffect(() => {
      effectEvent();
    }, [isOpen]);
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

  const commands = useMemo<PrivateDateTimePickerCommands>(
    () => ({
      getType: () => 'default',
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
      validate: () => validateRef.current(valueRef.current),
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
    useCallback((commands: PrivateDateTimePickerCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleChange */
  const handleChange = useCallback(
    (unit: PrivateStaticDateTimePickerUnit, newValue: PrivateDateTimePickerValue, keyboardInputValue?: string) => {
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
   * slotProps
   * ******************************************************************************************************************/

  /** slotPropsInputRef */
  const slotPropsInputRef = useCallback((ref: any) => {
    textFieldInputRef.current = ref;
  }, []);

  /** slotPropsMuiInputProps */
  const slotPropsMuiInputProps = useMemo(() => {
    const muiInputProps: InputProps = { endAdornment: undefined };
    if (startAdornment || icon) {
      muiInputProps.startAdornment = (
        <>
          {icon && (
            <InputAdornment position='start'>
              <PIcon size='small'>{icon}</PIcon>
            </InputAdornment>
          )}
          {startAdornment && <InputAdornment position='start'>{startAdornment}</InputAdornment>}
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
  const slotProps = useMemo<DesktopDateTimePickerProps['slotProps']>(() => {
    const readOnly = !enableKeyboardInput;

    return {
      textField: {
        className: classNames('input-text-field', `align-${align}`),
        inputRef: slotPropsInputRef,
        variant,
        size,
        color,
        focused,
        InputLabelProps: labelShrink ? { shrink: true } : undefined,
        InputProps: slotPropsMuiInputProps,
        inputProps: {
          readOnly,
          tabIndex: readOnly ? -1 : undefined,
        },
        required,
        fullWidth,
        helperText: undefined,
        error: !!error || !!timeError,
        style: width != null ? { ...initStyle, width } : initStyle,
        sx,
        onFocus: () => setIsOpen(true),
        onClick: () => setIsOpen(true),
      },
    };
  }, [
    labelShrink,
    enableKeyboardInput,
    align,
    slotPropsInputRef,
    variant,
    size,
    color,
    focused,
    slotPropsMuiInputProps,
    required,
    fullWidth,
    error,
    timeError,
    width,
    initStyle,
    sx,
  ]);

  /** tooltipSlotProps */
  const tooltipSlotProps: TooltipSlotsAndSlotProps['slotProps'] = useMemo(
    () => ({
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, error && helperText ? 8 : -14],
            },
          },
        ],
      },
    }),
    [error, helperText]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setIsOpen(false)}>
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
            open={disabled || readOnly ? false : isOpen}
            slotProps={tooltipSlotProps}
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
                onAccept={() => !time && setIsOpen(false)}
                onClose={() => setIsOpen(false)}
              />
            }
          >
            <div style={{ display: fullWidth ? 'block' : 'inline-block' }}>
              <DesktopDateTimePicker
                value={inputValue}
                label={labelIcon ? <PIconText icon={labelIcon}>{initLabel}</PIconText> : initLabel}
                open={false}
                format={format}
                disabled={disabled}
                readOnly={readOnly}
                minDate={minDate}
                maxDate={maxDate}
                view={'minutes'}
                disablePast={disablePast}
                disableFuture={disableFuture}
                onClose={() => setIsOpen(false)}
                onError={(reason, v) => {
                  if (disablePast) {
                    let formatStr: string;
                    switch (time) {
                      case 'hour':
                        formatStr = 'YYYY-MM-DD HH';
                        break;
                      case 'minute':
                        formatStr = 'YYYY-MM-DD HH:mm';
                        break;
                      case 'second':
                        formatStr = 'YYYY-MM-DD HH:mm:ss';
                        break;
                    }
                    if (dayjs(v).format(formatStr) !== inputValue?.format(formatStr)) {
                      setDatePickerError(reason);
                    }
                  } else {
                    setDatePickerError(reason);
                  }
                }}
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

export default PrivateDateTimePicker;
