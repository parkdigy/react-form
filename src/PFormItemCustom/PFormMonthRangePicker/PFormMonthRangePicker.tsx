import React, { ReactNode, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util.private';
import {
  PFormMonthRangePickerProps as Props,
  PFormMonthRangePickerCommands,
  PFormMonthRangePickerValue,
  PFormMonthRangePickerBaseValue,
} from './PFormMonthRangePicker.types';
import { useFormState } from '../../PFormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  PrivateInputDatePicker,
  PrivateInputDatePickerValue,
  PrivateMonthRangePicker,
  PrivateMonthRangePickerSelectType,
  PrivateStyledTooltip,
  PrivateYearRangePickerSelectType,
} from '../../@private';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { dateToValue, getFinalValue, valueToDate, valueToYm } from './PFormMonthRangePicker.function.private';

const DEFAULT_FORMAT = 'YYYY년 MM월';
const DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1,
};
const DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12,
};

const PFormMonthRangePicker = ({
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
  format = DEFAULT_FORMAT,
  labelShrink: initLabelShrink,
  disablePast,
  disableFuture,
  minValue = DEFAULT_MIN_VALUE,
  maxValue = DEFAULT_MAX_VALUE,
  inputWidth,
  enableKeyboardInput,
  startAdornment,
  endAdornment,
  formValueFromYearNameSuffix = '_from_year',
  formValueFromMonthNameSuffix = '_from_month',
  formValueToYearNameSuffix = '_to_year',
  formValueToMonthNameSuffix = '_to_month',
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
  } = useFormState<PFormMonthRangePickerValue, false, any, PFormMonthRangePickerBaseValue>();

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
  const openValueRef = useRef<PFormMonthRangePickerValue>(undefined);

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
    function (value: PFormMonthRangePickerValue) {
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
    const nowDate = dayjs();
    const nowValue = dateToValue(nowDate);
    const nowYm = valueToYm(nowValue);

    const minDate = minValue ? valueToDate(minValue) : undefined;
    const maxDate = maxValue ? valueToDate(maxValue) : undefined;

    let minAvailableValue: { year: number; month: number };
    if (disablePast) {
      const minYm = valueToYm(minValue);
      minAvailableValue = nowYm > minYm ? nowValue : minValue;
    } else {
      minAvailableValue = minValue;
    }
    const minAvailableYm = valueToYm(minAvailableValue);

    let maxAvailableValue: { year: number; month: number };
    if (disableFuture) {
      const maxYm = valueToYm(maxValue);
      maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
    } else {
      maxAvailableValue = maxValue;
    }
    const maxAvailableYm = valueToYm(maxAvailableValue);

    return {
      minDate,
      maxDate,
      minAvailableYm,
      maxAvailableYm,
    };
  }, [disableFuture, disablePast, maxValue, minValue]);

  /********************************************************************************************************************
   * Change
   * ******************************************************************************************************************/

  const firstSkipRef = useRef(true);
  const nameRef = useAutoUpdateRef(name);
  const onRequestSearchSubmitRef = useAutoUpdateRef(onRequestSearchSubmit);
  useEffect(() => {
    if (firstSkipRef.current) {
      firstSkipRef.current = false;
    } else {
      if (open) {
        openValueRef.current = valueRef.current;
      } else {
        if (openValueRef.current !== valueRef.current) {
          let runOnRequestSearchSubmit;
          if (openValueRef.current && valueRef.current) {
            runOnRequestSearchSubmit = openValueRef.current !== valueRef.current;
          } else {
            runOnRequestSearchSubmit = true;
          }

          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmitRef.current(nameRef.current, valueRef.current);
          }
        }
      }
    }
  }, [nameRef, onRequestSearchSubmitRef, open, valueRef]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const focus = useCallback(function () {
    startInputRef.current?.focus();
  }, []);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormMonthRangePickerCommands>(
    () => ({
      getType: () => 'PFormMonthRangePicker',
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
      getFromYear: () => (valueRef.current[0] ? valueRef.current[0].year : null),
      setFromYear: (year: number | null) => {
        updateValue([
          year === null
            ? null
            : valueRef.current[0]
              ? { year, month: valueRef.current[0].month }
              : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 },
          valueRef.current[1],
        ]);
      },
      getFromMonth: () => (valueRef.current[0] ? valueRef.current[0].month : null),
      setFromMonth: (month: number | null) => {
        updateValue([
          month === null
            ? null
            : valueRef.current[0]
              ? { year: valueRef.current[0].year, month }
              : { year: new Date().getFullYear(), month },
          valueRef.current[1],
        ]);
      },
      getToYear: () => (valueRef.current[1] ? valueRef.current[1].year : null),
      setToYear: (year: number | null) => {
        updateValue([
          valueRef.current[0],
          year === null
            ? null
            : valueRef.current[1]
              ? { year, month: valueRef.current[1].month }
              : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 },
        ]);
      },
      getToMonth: () => (valueRef.current[1] ? valueRef.current[1].month : null),
      setToMonth: (month: number | null) => {
        updateValue([
          valueRef.current[0],
          month === null
            ? null
            : valueRef.current[1]
              ? { year: valueRef.current[1].year, month }
              : { year: new Date().getFullYear(), month },
        ]);
      },
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
      getFormValueFromYearNameSuffix: () => formValueFromYearNameSuffix,
      getFormValueFromMonthNameSuffix: () => formValueFromMonthNameSuffix,
      getFormValueToYearNameSuffix: () => formValueToYearNameSuffix,
      getFormValueToMonthNameSuffix: () => formValueToMonthNameSuffix,
      getFormValueFromYearName: () => {
        return `${name}${formValueFromYearNameSuffix}`;
      },
      getFormValueFromMonthName: () => {
        return `${name}${formValueFromMonthNameSuffix}`;
      },
      getFormValueToYearName: () => {
        return `${name}${formValueToYearNameSuffix}`;
      },
      getFormValueToMonthName: () => {
        return `${name}${formValueToMonthNameSuffix}`;
      },
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      formValueFromMonthNameSuffix,
      formValueFromYearNameSuffix,
      formValueToMonthNameSuffix,
      formValueToYearNameSuffix,
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
    useCallback((commands: PFormMonthRangePickerCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleContainerChange = useCallback(
    (newValue: PFormMonthRangePickerValue, selectType: PrivateMonthRangePickerSelectType, isMonthSelect: boolean) => {
      updateValue(newValue);
      if (selectType === 'start' && isMonthSelect) {
        setTimeout(() => {
          endInputRef.current?.focus();
        });
      } else if (selectType === 'end' && isMonthSelect) {
        setOpen(false);
      }

      setTimeout(() => {
        onValueChangeByUser(name, newValue);
      });
    },
    [name, onValueChangeByUser, updateValue]
  );

  const handleInputDatePickerChange = useCallback(
    (selectType: PrivateYearRangePickerSelectType, date: PrivateInputDatePickerValue) => {
      if (date == null || date.isValid()) {
        if (selectType === 'start') {
          const newValue: PFormMonthRangePickerValue = [date ? dateToValue(date) : null, valueRef.current[1]];
          if (
            newValue[0] !== null &&
            valueToYm(newValue[0]) >= dateInfo.minAvailableYm &&
            valueToYm(newValue[0]) <= dateInfo.maxAvailableYm
          ) {
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
          const newValue: PFormMonthRangePickerValue = [valueRef.current[0], date ? dateToValue(date) : null];
          if (
            newValue[1] !== null &&
            valueToYm(newValue[1]) >= dateInfo.minAvailableYm &&
            valueToYm(newValue[1]) <= dateInfo.maxAvailableYm
          ) {
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
    [valueRef, dateInfo, fromError, updateValue, validate, onValueChangeByUser, name, toError]
  );

  const handleInputDatePickerFocus = useCallback(
    (selectType: PrivateYearRangePickerSelectType) => {
      if (readOnly || disabled) return;

      if (selectType === 'end' && value[0] == null) {
        startInputRef.current?.focus();
      } else {
        setOpen(true);
      }
    },
    [readOnly, disabled, value]
  );

  const handleInputDatePickerShouldDisableYear = useCallback(
    (dt: Dayjs) => {
      const ym = dt.year() * 100 + (dt.month() + 1);
      return ym < dateInfo.minAvailableYm || ym > dateInfo.maxAvailableYm;
    },
    [dateInfo]
  );

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const valueDate = [
    !!value && !!value[0] ? valueToDate(value[0]) : null,
    !!value && !!value[1] ? valueToDate(value[1]) : null,
  ];

  const inputDatePickerProps = {
    align,
    variant,
    size,
    color,
    labelShrink,
    fullWidth,
    disabled,
    format,
    minDate: dateInfo.minDate,
    maxDate: dateInfo.maxDate,
  };

  const inputStyle =
    inputWidth != null ? { width: inputWidth, ...initStyle } : { width: fullWidth ? undefined : 150, ...initStyle };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
      <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
        <div
          className={classNames(className, 'PFormMonthRangePicker')}
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
                <PrivateMonthRangePicker
                  minValue={minValue}
                  maxValue={maxValue}
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
                  {...inputDatePickerProps}
                  style={inputStyle}
                  sx={sx}
                  value={valueDate[0]}
                  label={fromLabel}
                  labelIcon={fromLabelIcon}
                  error={error || fromError}
                  focused={focused || open}
                  required={required}
                  readOnly={readOnly}
                  enableKeyboardInput={enableKeyboardInput}
                  icon={icon}
                  startAdornment={startAdornment}
                  endAdornment={endAdornment}
                  inputRef={startInputRef}
                  onChange={(v) => handleInputDatePickerChange('start', v)}
                  onFocus={() => handleInputDatePickerFocus('start')}
                  onError={(reason) => (startInputDatePickerErrorRef.current = reason)}
                  shouldDisableYear={handleInputDatePickerShouldDisableYear}
                />
              </Grid>
              <Grid sx={{ px: 1 }}>~</Grid>
              <Grid flex={1}>
                <PrivateInputDatePicker
                  {...inputDatePickerProps}
                  style={inputStyle}
                  sx={sx}
                  value={valueDate[1]}
                  label={toLabel}
                  labelIcon={toLabelIcon}
                  error={error || toError}
                  focused={focused || open}
                  required={required}
                  readOnly={readOnly}
                  enableKeyboardInput={enableKeyboardInput}
                  icon={icon}
                  startAdornment={startAdornment}
                  endAdornment={endAdornment}
                  inputRef={endInputRef}
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

export default PFormMonthRangePicker;
