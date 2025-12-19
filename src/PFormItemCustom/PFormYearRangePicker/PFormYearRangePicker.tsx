import React, { ReactNode, useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util.private';
import {
  PFormYearRangePickerProps as Props,
  PFormYearRangePickerCommands,
  PFormYearRangePickerValue,
  PFormYearRangePickerBaseValue,
} from './PFormYearRangePicker.types';
import { useFormState } from '../../PFormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  PrivateInputDatePicker,
  PrivateInputDatePickerValue,
  PrivateStyledTooltip,
  PrivateYearRangePicker,
  PrivateYearRangePickerSelectType,
} from '../../@private';
import { Dayjs } from 'dayjs';
import { dateToValue, getFinalValue, valueToDate } from './PFormYearRangePicker.function.private';

const PFormYearRangePicker = ({
  ref,
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  //----------------------------------------------------------------------------------------------------------------
  hidden: initHidden,
  //----------------------------------------------------------------------------------------------------------------
  name,
  fromLabel,
  fromLabelIcon,
  toLabel,
  toLabelIcon,
  readOnly,
  required,
  fullWidth: initFullWidth,
  disabled: initDisabled,
  error: initError,
  helperText,
  value: initValue,
  data: initData,
  exceptValue,
  onChange,
  onValidate,
  // -------------------------------------------------------------------------------------------------------------------
  icon,
  format = 'YYYY년',
  labelShrink: initLabelShrink,
  disablePast,
  disableFuture,
  minYear = 2020,
  maxYear = 2050,
  inputWidth,
  enableKeyboardInput,
  startAdornment,
  endAdornment,
  formValueFromNameSuffix = '_from',
  formValueToNameSuffix = '_to',
  align,
  //----------------------------------------------------------------------------------------------------------------
  className,
  style: initStyle,
  sx,
}: Props) => {
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
  } = useFormState<PFormYearRangePickerValue, false, any, PFormYearRangePickerBaseValue>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const startInputRef = useRef<HTMLInputElement>(undefined);
  const endInputRef = useRef<HTMLInputElement>(undefined);
  const startInputDatePickerErrorRef = useRef<DateValidationError>(null);
  const endInputDatePickerErrorRef = useRef<DateValidationError>(null);

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

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [fromError, setFromError] = useState(false);
  const [fromErrorHelperText, setFromErrorHelperText] = useState<Props['helperText']>();
  const [toError, setToError] = useState(false);
  const [toErrorHelperText, setToErrorHelperText] = useState<Props['helperText']>();
  const [open, setOpen] = useState(false);
  const [selectType, setSelectType] = useState<PrivateYearRangePickerSelectType>('start');
  const [openValue, setOpenValue] = useState<PFormYearRangePickerValue>();

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const setFromErrorErrorHelperText = useCallback((error: boolean, fromErrorHelperText: ReactNode) => {
    setFromError(error);
    setFromErrorHelperText(fromErrorHelperText);
  }, []);

  const setToErrorErrorHelperText = useCallback((error: boolean, toErrorHelperText: ReactNode) => {
    setToError(error);
    setToErrorHelperText(toErrorHelperText);
  }, []);

  const setErrorErrorHelperText = useCallback(
    function (error: Props['error'], errorHelperText: Props['helperText']) {
      setError(error);
      setErrorHelperText(errorHelperText);
    },
    [setError]
  );

  const validate = useCallback(
    function (value: PFormYearRangePickerValue) {
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

      if (startInputDatePickerErrorRef.current) {
        setFromErrorErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
        if (endInputDatePickerErrorRef.current) {
          setToErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
        }
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
      setFromErrorErrorHelperText(false, undefined);
      setToErrorErrorHelperText(false, undefined);

      return true;
    },
    [onValidate, required, setToErrorErrorHelperText, setErrorErrorHelperText, setFromErrorErrorHelperText]
  );

  /********************************************************************************************************************
   * State - value
   * ******************************************************************************************************************/

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value']) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;

      if (error || fromError || toError) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, fromError, name, onChange, onValueChange, toError, validate, valueRef]
  );

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const dateInfo = useMemo(() => {
    const nowYear = new Date().getFullYear();
    const minDate = valueToDate(minYear);
    const maxDate = valueToDate(maxYear);
    return { nowYear: nowYear, min: minDate, max: maxDate };
  }, [maxYear, minYear]);

  /********************************************************************************************************************
   * Open 변경 시 처리
   * ******************************************************************************************************************/

  if (useChanged(open)) {
    if (open) {
      setOpenValue(value);
    } else {
      if (openValue !== value) {
        let runOnRequestSearchSubmit;
        if (openValue && value) {
          runOnRequestSearchSubmit = openValue !== value;
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
   * Function
   * ******************************************************************************************************************/

  const focus = useCallback(function () {
    startInputRef.current?.focus();
  }, []);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormYearRangePickerCommands>(
    () => ({
      getType: () => 'PFormYearRangePicker',
      getName: () => name,
      getReset: () => getFinalValue(initValue),
      reset: () => updateValue(initValue),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      getFromValue: () => valueRef.current[0],
      setFromValue: (value) => updateValue([value, valueRef.current[1]]),
      getToValue: () => valueRef.current[1],
      setToValue: (value) => updateValue([valueRef.current[0], value]),
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled,
      isHidden: () => !!hidden,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
        setErrorErrorHelperText(error, error ? errorHelperText : undefined),
      getFormValueFromNameSuffix: () => formValueFromNameSuffix,
      getFormValueToNameSuffix: () => formValueToNameSuffix,
      getFormValueFromName: () => {
        return `${name}${formValueFromNameSuffix}`;
      },
      getFormValueToName: () => {
        return `${name}${formValueToNameSuffix}`;
      },
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      formValueFromNameSuffix,
      formValueToNameSuffix,
      hidden,
      initValue,
      name,
      setErrorErrorHelperText,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    useCallback((commands: PFormYearRangePickerCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleContainerChange = useCallback(
    (newValue: PFormYearRangePickerValue, selectType: PrivateYearRangePickerSelectType) => {
      updateValue(newValue);
      if (selectType === 'start') {
        setTimeout(() => {
          setSelectType('end');
          endInputRef.current?.focus();
        });
      } else if (selectType === 'end') {
        setOpen(false);
      }

      setTimeout(() => {
        onValueChangeByUser(name, newValue);
      });
    },
    [updateValue, name, onValueChangeByUser]
  );

  const handleInputDatePickerChange = useCallback(
    (selectType: PrivateYearRangePickerSelectType, date: PrivateInputDatePickerValue) => {
      if (date == null || date.isValid()) {
        if (selectType === 'start') {
          const newValue: PFormYearRangePickerValue = [date ? dateToValue(date) : null, valueRef.current[1]];
          if (newValue[0] !== null && newValue[0] >= minYear && newValue[0] <= maxYear) {
            if (newValue[1] !== null && newValue[1] < newValue[0]) {
              newValue[1] = newValue[0];
            }
          }

          if (fromError) {
            validate(newValue);
          }
          setTimeout(() => {
            onValueChangeByUser(name, newValue);
          });

          updateValue(newValue);
        } else {
          const newValue: PFormYearRangePickerValue = [valueRef.current[0], date ? dateToValue(date) : null];
          if (newValue[1] !== null && newValue[1] >= minYear && newValue[1] <= maxYear) {
            if (newValue[0] !== null && newValue[0] > newValue[1]) {
              newValue[0] = newValue[1];
            }
          }
          if (toError) {
            validate(newValue);
          }
          setTimeout(() => {
            onValueChangeByUser(name, newValue);
          });

          updateValue(newValue);
        }
      }
    },
    [valueRef, minYear, maxYear, fromError, updateValue, validate, onValueChangeByUser, name, toError]
  );

  const handleInputDatePickerFocus = useCallback(
    (selectType: PrivateYearRangePickerSelectType) => {
      if (readOnly || disabled) return;

      if (selectType === 'end' && valueRef.current[0] == null) {
        startInputRef.current?.focus();
      } else {
        setSelectType(selectType);
        setOpen(true);
      }
    },
    [readOnly, disabled, valueRef]
  );

  const handleInputDatePickerShouldDisableYear = useCallback(
    (year: Dayjs) => {
      return (!!disablePast && year.year() < dateInfo.nowYear) || (!!disableFuture && year.year() > dateInfo.nowYear);
    },
    [disableFuture, disablePast, dateInfo.nowYear]
  );

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const valueDate = [
    !!value && !!value[0] ? valueToDate(value[0]) : null,
    !!value && !!value[1] ? valueToDate(value[1]) : null,
  ];

  const privateInputDatePickerProps = {
    variant,
    size,
    color,
    focused,
    labelShrink,
    fullWidth,
    align,
    disabled,
    format,
    minDate: dateInfo.min,
    maxDate: dateInfo.max,
    style:
      inputWidth != null ? { width: inputWidth, ...initStyle } : { width: fullWidth ? undefined : 150, ...initStyle },
    sx,
    required,
    readOnly,
    enableKeyboardInput,
    icon,
    startAdornment,
    endAdornment,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
        <div
          className={classNames(className, 'PFormYearRangePicker')}
          style={{
            display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
            flex: fullWidth ? 1 : undefined,
          }}
        >
          <PrivateStyledTooltip
            open={open}
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
              <div style={{ display: 'flex' }}>
                <PrivateYearRangePicker
                  selectType={selectType}
                  minYear={minYear}
                  maxYear={maxYear}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  value={value}
                  onChange={handleContainerChange}
                />
              </div>
            }
          >
            <Grid container alignItems='center'>
              <Grid flex={1}>
                <PrivateInputDatePicker
                  {...privateInputDatePickerProps}
                  inputRef={startInputRef}
                  value={valueDate[0]}
                  label={fromLabel}
                  labelIcon={fromLabelIcon}
                  error={error || fromError}
                  focused={focused || (open && selectType === 'start')}
                  onChange={(v) => handleInputDatePickerChange('start', v)}
                  onFocus={() => handleInputDatePickerFocus('start')}
                  onError={(reason) => (startInputDatePickerErrorRef.current = reason)}
                  shouldDisableYear={handleInputDatePickerShouldDisableYear}
                />
              </Grid>
              <Grid sx={{ px: 1 }}>~</Grid>
              <Grid flex={1}>
                <PrivateInputDatePicker
                  {...privateInputDatePickerProps}
                  inputRef={endInputRef}
                  value={valueDate[1]}
                  label={toLabel}
                  labelIcon={toLabelIcon}
                  error={error || toError}
                  focused={focused || (open && selectType === 'end')}
                  onChange={(v) => handleInputDatePickerChange('end', v)}
                  onFocus={() => handleInputDatePickerFocus('end')}
                  onError={(reason) => (endInputDatePickerErrorRef.current = reason)}
                  shouldDisableYear={handleInputDatePickerShouldDisableYear}
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
};

export default PFormYearRangePicker;
