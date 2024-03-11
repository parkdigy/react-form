import React, { ReactNode, useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { getDateValidationErrorText, nextTick } from '../../@util';
import {
  FormYearRangePickerProps as Props,
  FormYearRangePickerDefaultProps,
  FormYearRangePickerCommands,
  FormYearRangePickerValue,
  FormYearRangePickerBaseValue,
} from './FormYearRangePicker.types';
import { useFormState } from '../../FormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  PrivateInputDatePicker,
  PrivateInputDatePickerValue,
  PrivateStyledTooltip,
  PrivateYearRangePicker,
  PrivateYearRangePickerSelectType,
} from '../../@private';
import dayjs, { Dayjs } from 'dayjs';
import { FormDateRangePickerDefaultProps } from '../FormDateRangePicker';

const DEFAULT_VALUE: FormYearRangePickerValue = [null, null];
const DEFAULT_FORMAT = 'YYYY년 MM월';

const FormYearRangePicker = React.forwardRef<FormYearRangePickerCommands, Props>(
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
      format: initFormat,
      labelShrink: initLabelShrink,
      disablePast,
      disableFuture,
      minYear: initMinYear,
      maxYear: initMaxYear,
      inputWidth,
      readOnlyInput,
      startAdornment,
      endAdornment,
      formValueFromNameSuffix,
      formValueToNameSuffix,
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
    const openValueRef = useRef<FormYearRangePickerValue>();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [fromError, setFromError] = useState(false);
    const [fromErrorHelperText, setFromErrorHelperText] = useState<Props['helperText']>();
    const [toError, setToError] = useState(false);
    const [toErrorHelperText, setToErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );
    const [hidden, setHidden] = useAutoUpdateState<Props['hidden']>(initHidden);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);
    const [open, setOpen] = useState(false);
    const [selectType, setSelectType] = useState<PrivateYearRangePickerSelectType>('start');

    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/

    const getFinalValue = useCallback((value: FormYearRangePickerValue | undefined): FormYearRangePickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const [value, setValue] = useAutoUpdateState<FormYearRangePickerValue>(
      useCallback(() => {
        return initValue || DEFAULT_VALUE;
      }, [initValue])
    );

    useFirstSkipEffect(() => {
      if (error || fromError || toError) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const valueToDate = useCallback((v: FormYearRangePickerBaseValue) => dayjs(`${v}-01-01`), []);
    const dateToValue = useCallback((v: Dayjs) => v.year(), []);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const nowYear = useMemo(() => new Date().getFullYear(), []);

    const valueDate = useMemo(
      () => [
        !!value && !!value[0] ? valueToDate(value[0]) : null,
        !!value && !!value[1] ? valueToDate(value[1]) : null,
      ],
      [value, valueToDate]
    );

    const minYear = useMemo(
      () => Math.max(initMinYear || FormYearRangePickerDefaultProps.minYear, FormYearRangePickerDefaultProps.minYear),
      [initMinYear]
    );
    const maxYear = useMemo(
      () => Math.min(initMaxYear || FormYearRangePickerDefaultProps.maxYear, FormYearRangePickerDefaultProps.maxYear),
      [initMaxYear]
    );

    const minDate = useMemo(() => (minYear ? valueToDate(minYear) : undefined), [minYear, valueToDate]);
    const maxDate = useMemo(() => (maxYear ? valueToDate(maxYear) : undefined), [maxYear, valueToDate]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const format = useMemo(() => initFormat || DEFAULT_FORMAT, [initFormat]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
      function (value: FormYearRangePickerValue) {
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
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;
      let lastHidden = !!hidden;

      const commands: FormYearRangePickerCommands = {
        getType: () => 'FormYearRangePicker',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => {
          lastValue = getFinalValue(initValue);
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
        getFromValue: () => lastValue[0],
        setFromValue: (value) => {
          lastValue = [value, lastValue[1]];
          setValue(lastValue);
        },
        getToValue: () => lastValue[1],
        setToValue: (value) => {
          lastValue = [lastValue[0], value];
          setValue(lastValue);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        isHidden: () => lastHidden,
        setHidden: (hidden) => {
          lastHidden = hidden;
          setHidden(hidden);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(value),
        setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
          setErrorErrorHelperText(error, error ? errorHelperText : undefined),
        getFormValueFromNameSuffix: () =>
          formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix,
        getFormValueToNameSuffix: () => formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix,
        getFormValueFromName: () => {
          return `${name}${formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix}`;
        },
        getFormValueToName: () => {
          return `${name}${formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix}`;
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
      name,
      initValue,
      value,
      getFinalValue,
      exceptValue,
      disabled,
      focus,
      validate,
      ref,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setValue,
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
      formValueFromNameSuffix,
      formValueToNameSuffix,
      hidden,
      setHidden,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleContainerChange = useCallback(
      (newValue: FormYearRangePickerValue, selectType: PrivateYearRangePickerSelectType) => {
        setValue(newValue);
        if (selectType === 'start') {
          nextTick(() => {
            setSelectType('end');
            endInputRef.current?.focus();
          });
        } else if (selectType === 'end') {
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
            setValue((old) => {
              const newValue: FormYearRangePickerValue = [date ? dateToValue(date) : null, old[1]];
              if (newValue[0] !== null && newValue[0] >= minYear && newValue[0] <= maxYear) {
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
              return newValue;
            });
          } else {
            setValue((old) => {
              const newValue: FormYearRangePickerValue = [old[0], date ? dateToValue(date) : null];
              if (newValue[1] !== null && newValue[1] >= minYear && newValue[1] <= maxYear) {
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
              return newValue;
            });
          }
        }
      },
      [dateToValue, toError, maxYear, minYear, name, onValueChangeByUser, setValue, fromError, validate]
    );

    const handleInputDatePickerFocus = useCallback(
      (selectType: PrivateYearRangePickerSelectType) => {
        if (readOnly || disabled) return;

        if (selectType === 'end' && value[0] == null) {
          startInputRef.current?.focus();
        } else {
          setSelectType(selectType);
          setOpen(true);
        }
      },
      [readOnly, disabled, value]
    );

    const handleInputDatePickerShouldDisableYear = useCallback(
      (year: Dayjs) => {
        return (!!disablePast && year.year() < nowYear) || (!!disableFuture && year.year() > nowYear);
      },
      [disableFuture, disablePast, nowYear]
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div className={classNames(className, 'FormYearRangePicker')} style={wrapStyle}>
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
                <Grid item flex={1}>
                  <PrivateInputDatePicker
                    {...inputDatePickerProps}
                    style={inputStyle}
                    sx={sx}
                    value={valueDate[0]}
                    label={fromLabel}
                    labelIcon={fromLabelIcon}
                    error={error || fromError}
                    focused={focused || (open && selectType === 'start')}
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
                    focused={focused || (open && selectType === 'end')}
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

FormYearRangePicker.displayName = 'FormYearRangePicker';
FormYearRangePicker.defaultProps = FormYearRangePickerDefaultProps;

export default FormYearRangePicker;
