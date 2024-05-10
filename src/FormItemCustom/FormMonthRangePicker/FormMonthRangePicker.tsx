import React, { ReactNode, useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util.private';
import { nextTick } from '@pdg/util';
import {
  FormMonthRangePickerProps as Props,
  FormMonthRangePickerCommands,
  FormMonthRangePickerValue,
} from './FormMonthRangePicker.types';
import { useFormState } from '../../FormContext';
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
import { FormMonthPickerBaseValue } from '../FormMonthPicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

const DEFAULT_VALUE: FormMonthRangePickerValue = [null, null];
const DEFAULT_FORMAT = 'YYYY년 MM월';
const DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1,
};
const DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12,
};

const FormMonthRangePicker = React.forwardRef<FormMonthRangePickerCommands, Props>(
  (
    {
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
      readOnlyInput,
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
    },
    ref
  ) => {
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
    } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const startInputRef = useRef<HTMLInputElement>();
    const endInputRef = useRef<HTMLInputElement>();
    const startInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const endInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const openValueRef = useRef<FormMonthRangePickerValue>();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [fromError, setFromError] = useState(false);
    const [fromErrorHelperText, setFromErrorHelperText] = useState<Props['helperText']>();
    const [toError, setToError] = useState(false);
    const [toErrorHelperText, setToErrorHelperText] = useState<Props['helperText']>();
    const [open, setOpen] = useState(false);

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);

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
      function (value: FormMonthRangePickerValue) {
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

    const getFinalValue = useCallback((value: FormMonthRangePickerValue | undefined): FormMonthRangePickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    const [valueRef, value, setValue] = useAutoUpdateRefState<FormMonthRangePickerValue, Props['value']>(
      initValue,
      getFinalValue
    );

    useFirstSkipEffect(() => {
      if (error || fromError || toError) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const valueToDate = useCallback((v: FormMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`), []);
    const valueToYm = useCallback((v: FormMonthPickerBaseValue) => v.year * 100 + v.month, []);
    const dateToValue = useCallback((v: Dayjs) => ({ year: v.year(), month: v.month() + 1 }), []);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const nowDate = useMemo(() => dayjs(), []);
    const nowValue = useMemo(() => dateToValue(nowDate), [dateToValue, nowDate]);
    const nowYm = useMemo(() => valueToYm(nowValue), [nowValue, valueToYm]);

    const valueDate = useMemo(
      () => [
        !!value && !!value[0] ? valueToDate(value[0]) : null,
        !!value && !!value[1] ? valueToDate(value[1]) : null,
      ],
      [value, valueToDate]
    );

    const minDate = useMemo(() => (minValue ? valueToDate(minValue) : undefined), [minValue, valueToDate]);
    const maxDate = useMemo(() => (maxValue ? valueToDate(maxValue) : undefined), [maxValue, valueToDate]);

    const minAvailableValue = useMemo(() => {
      if (disablePast) {
        const minYm = valueToYm(minValue);
        return nowYm > minYm ? nowValue : minValue;
      } else {
        return minValue;
      }
    }, [disablePast, valueToYm, minValue, nowYm, nowValue]);
    const minAvailableYm = useMemo(() => valueToYm(minAvailableValue), [minAvailableValue, valueToYm]);

    const maxAvailableValue = useMemo(() => {
      if (disableFuture) {
        const maxYm = valueToYm(maxValue);
        return nowYm < maxYm ? nowValue : maxValue;
      } else {
        return maxValue;
      }
    }, [disableFuture, valueToYm, maxValue, nowYm, nowValue]);
    const maxAvailableYm = useMemo(() => valueToYm(maxAvailableValue), [maxAvailableValue, valueToYm]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
      if (open) {
        openValueRef.current = value;
      } else {
        if (openValueRef.current !== value) {
          let runOnRequestSearchSubmit;
          if (openValueRef.current && value) {
            runOnRequestSearchSubmit = openValueRef.current !== value;
          } else {
            runOnRequestSearchSubmit = true;
          }

          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, value);
          }
        }
      }
    }, [open]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const focus = useCallback(function () {
      startInputRef.current?.focus();
    }, []);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      const commands: FormMonthRangePickerCommands = {
        getType: () => 'FormMonthRangePicker',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => setValue(initValue),
        getValue: () => valueRef.current,
        setValue,
        getData: () => dataRef.current,
        setData,
        getFromValue: () => valueRef.current[0],
        setFromValue: (value) => setValue([value, valueRef.current[1]]),
        getToValue: () => valueRef.current[1],
        setToValue: (value) => setValue([valueRef.current[0], value]),
        getFromYear: () => (valueRef.current[0] ? valueRef.current[0].year : null),
        setFromYear: (year: number | null) => {
          setValue([
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
          setValue([
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
          setValue([
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
          setValue([
            valueRef.current[0],
            month === null
              ? null
              : valueRef.current[1]
                ? { year: valueRef.current[1].year, month }
                : { year: new Date().getFullYear(), month },
          ]);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
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
      };

      onAddValueItem(id, commands);

      if (ref) {
        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }

      return () => {
        onRemoveValueItem(id);

        if (ref) {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        }
      };
    }, [
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      formValueFromMonthNameSuffix,
      formValueFromYearNameSuffix,
      formValueToMonthNameSuffix,
      formValueToYearNameSuffix,
      getFinalValue,
      hiddenRef,
      id,
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
      validate,
      valueRef,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleContainerChange = useCallback(
      (newValue: FormMonthRangePickerValue, selectType: PrivateMonthRangePickerSelectType, isMonthSelect: boolean) => {
        setValue(newValue);
        if (selectType === 'start' && isMonthSelect) {
          nextTick(() => {
            endInputRef.current?.focus();
          });
        } else if (selectType === 'end' && isMonthSelect) {
          setOpen(false);
        }

        nextTick(() => {
          onValueChangeByUser(name, newValue);
        });
      },
      [name, onValueChangeByUser, setValue]
    );

    const handleInputDatePickerChange = useCallback(
      (selectType: PrivateYearRangePickerSelectType, date: PrivateInputDatePickerValue) => {
        if (date == null || date.isValid()) {
          if (selectType === 'start') {
            const newValue: FormMonthRangePickerValue = [date ? dateToValue(date) : null, valueRef.current[1]];
            if (
              newValue[0] !== null &&
              valueToYm(newValue[0]) >= minAvailableYm &&
              valueToYm(newValue[0]) <= maxAvailableYm
            ) {
              if (newValue[1] !== null && newValue[1] < newValue[0]) {
                newValue[1] = newValue[0];
              }
            }

            if (fromError) {
              validate(newValue);
            }
            nextTick(() => {
              onValueChangeByUser(name, newValue);
            });
            setValue(newValue);
          } else {
            const newValue: FormMonthRangePickerValue = [valueRef.current[0], date ? dateToValue(date) : null];
            if (
              newValue[1] !== null &&
              valueToYm(newValue[1]) >= minAvailableYm &&
              valueToYm(newValue[1]) <= maxAvailableYm
            ) {
              if (newValue[0] !== null && newValue[0] > newValue[1]) {
                newValue[0] = newValue[1];
              }
            }
            if (toError) {
              validate(newValue);
            }
            nextTick(() => {
              onValueChangeByUser(name, newValue);
            });
            setValue(newValue);
          }
        }
      },
      [
        dateToValue,
        valueRef,
        valueToYm,
        minAvailableYm,
        maxAvailableYm,
        fromError,
        setValue,
        validate,
        onValueChangeByUser,
        name,
        toError,
      ]
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
        return ym < minAvailableYm || ym > maxAvailableYm;
      },
      [maxAvailableYm, minAvailableYm]
    );

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const inputDatePickerProps = useMemo(
      () => ({
        align,
        variant,
        size,
        color,
        labelShrink,
        fullWidth,
        disabled,
        format,
        minDate,
        maxDate,
      }),
      [align, variant, size, color, labelShrink, fullWidth, disabled, format, minDate, maxDate]
    );

    const inputStyle = useMemo(
      () => (inputWidth != null ? { width: inputWidth } : { width: fullWidth ? undefined : 150, ...initStyle }),
      [inputWidth, fullWidth, initStyle]
    );

    const wrapStyle = useMemo(
      () => ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
      }),
      [hidden, fullWidth]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div className={classNames(className, 'FormMonthRangePicker')} style={wrapStyle}>
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
                <Grid item flex={1}>
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
                    readOnlyInput={readOnlyInput}
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
                <Grid item sx={{ px: 1 }}>
                  ~
                </Grid>
                <Grid item flex={1}>
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
                    readOnlyInput={readOnlyInput}
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
  }
);

FormMonthRangePicker.displayName = 'FormMonthRangePicker';

export default FormMonthRangePicker;
