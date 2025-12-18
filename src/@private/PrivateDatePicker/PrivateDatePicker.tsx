import React, { ReactNode, useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  DesktopDatePicker,
  DateValidationError,
  DesktopDatePickerProps,
} from '@mui/x-date-pickers';
import { useAutoUpdateRefState, useAutoUpdateState, useForwardRef } from '@pdg/react-hook';
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
import { Dayjs } from 'dayjs';
import { empty, ifUndefined, notEmpty } from '@pdg/compare';
import './PrivateDatePicker.scss';

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

  const privateStaticDatePickerRef = useRef<PrivateStaticDatePickerCommands>(null);
  const textFieldInputRef = useRef<HTMLInputElement>(null);
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
   * State - open
   * ******************************************************************************************************************/

  const [open, setOpen] = useState(false);
  const [openValue, setOpenValue] = useState<PrivateDatePickerValue | undefined>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [error, setError] = useAutoUpdateState<Props['error']>(initError);
  const [timeError, setTimeError] = useState<DateValidationError>(null);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [datePickerError, setDatePickerError] = useState<DateValidationError>(null);

  const [dataRef, , setData] = useAutoUpdateRefState(initData);
  const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
    useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
  );
  const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const availableDate = makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);

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
    [datePickerError, onValidate, required, setErrorErrorHelperText, timeError]
  );

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue);
  const [inputValue, setInputValue] = useAutoUpdateState<PrivateDatePickerValue>(value);

  const updateValue = useCallback(
    (newValue: PrivateDatePickerValue) => {
      const finalValue = _setValue(newValue);

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
    [_setValue, availableDate, error, name, onChange, onValueChange, time, type, validate]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  const [prevTimeError, setPrevTimeError] = useState(timeError);
  if (timeError !== prevTimeError) {
    setPrevTimeError(timeError);
    if (error && !timeError) {
      validate(value);
    }
  }

  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);

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

  const focus = () => {
    textFieldInputRef.current?.focus();
  };

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo(
    (): PrivateDatePickerCommands => ({
      getType: () => 'default',
      getName: () => name,
      getReset: () => initValue,
      reset: () => updateValue(initValue),
      getValue: () => valueRef.current,
      setValue: updateValue,
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
      getFormValueFormat: () => (initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time)),
    }),
    [
      dataRef,
      disabledRef,
      exceptValue,
      hiddenRef,
      initFormValueFormat,
      initValue,
      name,
      setData,
      setDisabled,
      setErrorErrorHelperText,
      setHidden,
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
    (cmd) => onAddValueItem(id, cmd),
    () => onRemoveValueItem(id)
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleChange */
  const handleChange = (
    unit: PrivateStaticDatePickerUnit,
    newValue: PrivateDatePickerValue,
    keyboardInputValue?: string
  ) => {
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
  };

  /** handleContainerFocus */
  const handleContainerFocus = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
  };

  /** handleContainerBlur */
  const handleContainerBlur = () => {
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
  };

  /** handleContainerMouseDown */
  const handleContainerMouseDown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
    mouseDownTimeRef.current = new Date().getTime();
  };

  /********************************************************************************************************************
   * slotProps
   * ******************************************************************************************************************/

  /** slotPropsInputRef */
  const slotPropsInputRef = useCallback((ref: any) => {
    textFieldInputRef.current = ref;
  }, []);

  const slotPropsMuiInputProps = useMemo(() => {
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
  const slotProps: DesktopDatePickerProps<Dayjs>['slotProps'] = useMemo(() => {
    const textFieldInputLabelProps: Partial<InputLabelProps> = {};
    if (labelShrink) {
      textFieldInputLabelProps.shrink = labelShrink;
    }

    const readOnly = !enableKeyboardInput;

    return {
      textField: {
        className: classNames('input-text-field', `align-${align}`),
        inputRef: slotPropsInputRef,
        variant,
        size,
        color,
        focused,
        InputLabelProps: textFieldInputLabelProps,
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
    enableKeyboardInput,
    error,
    focused,
    fullWidth,
    initStyle,
    labelShrink,
    required,
    size,
    slotPropsInputRef,
    slotPropsMuiInputProps,
    sx,
    timeError,
    variant,
    width,
  ]);

  /** popperProps */
  const popperProps = useMemo(
    () => ({
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, error && errorHelperText ? 8 : -14],
          },
        },
      ],
    }),
    [error, errorHelperText]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
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
            open={disabled || readOnly ? false : open}
            PopperProps={popperProps}
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
                onAccept={() => !time && setOpen(false)}
                onClose={() => setOpen(false)}
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

export default PrivateDatePicker;
