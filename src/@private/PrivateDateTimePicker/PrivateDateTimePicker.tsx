import React, { ReactNode, useCallback, useId, useMemo, useRef, useState } from 'react';
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
import { Dayjs } from 'dayjs';
import PrivateStaticDateTimePicker from '../PrivateStaticDateTimePicker';
import { empty, notEmpty } from '@pdg/compare';
import { getFinalValue } from './PrivateDateTimePicker.function.private';
import { PrivateDatePickerValue } from '../PrivateDatePicker';
import './PrivateDateTimePicker.scss';

const PrivateDateTimePicker = ({
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

  const privateStaticDateTimePickerRef = useRef<PrivateStaticDateTimePickerCommands>(null);
  const textFieldInputRef = useRef<HTMLInputElement>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mouseDownTimeRef = useRef<number>(undefined);

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
   * State - open
   * ******************************************************************************************************************/

  const [open, setOpen] = useState(false);
  const [openValue, setOpenValue] = useState<PrivateDatePickerValue | undefined>(undefined);

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

  const [timeError, setTimeError] = useState<DateTimeValidationError>(null);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [datePickerError, setDatePickerError] = useState<DateTimeValidationError>(null);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const format = initFormat ? initFormat : getDateTimeFormat(type, time);

  const availableDate = makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);

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
      if (datePickerError) {
        setErrorErrorHelperText(true, getDateValidationErrorText(datePickerError));
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
    [required, datePickerError, timeError, onValidate, setErrorErrorHelperText]
  );

  /********************************************************************************************************************
   * State - value
   * ******************************************************************************************************************/

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: PrivateDateTimePickerValue) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
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
    [availableDate, error, name, onChange, onValueChange, time, type, validate, valueRef]
  );

  /********************************************************************************************************************
   * State - inputValue
   * ******************************************************************************************************************/

  const [inputValue, setInputValue] = useState(value);
  useChanged(value) && setInputValue(value);

  /********************************************************************************************************************
   * timeError 변경 시 validate 실행
   * ******************************************************************************************************************/

  if (useChanged(timeError)) {
    if (error && !timeError) {
      validate(value);
    }
  }

  /********************************************************************************************************************
   * open 변경 시 처리
   * ******************************************************************************************************************/

  if (useChanged(open)) {
    if (open) {
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

  const commands = useMemo<PrivateDateTimePickerCommands>(
    () => ({
      getType: () => 'default',
      getName: () => name,
      getReset: () => getFinalValue(initValue),
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
            runOnRequestSearchSubmit = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
            setOpen(false);
          }
        } else if (time) {
          if (time === unit) setOpen(false);
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
    [setInputValue, type, time, updateValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]
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
        setOpen(false);
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
  const slotProps = useMemo<DesktopDateTimePickerProps<Dayjs>['slotProps']>(() => {
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
        onFocus: () => setOpen(true),
        onClick: () => setOpen(true),
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
                onAccept={() => !time && setOpen(false)}
                onClose={() => setOpen(false)}
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
                disablePast={disablePast}
                disableFuture={disableFuture}
                onClose={() => setOpen(false)}
                onError={(reason) => setDatePickerError(reason)}
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
