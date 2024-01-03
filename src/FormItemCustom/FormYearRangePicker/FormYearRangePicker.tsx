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
      hidden,
      //----------------------------------------------------------------------------------------------------------------
      name,
      startLabel,
      startLabelIcon,
      endLabel,
      endLabelIcon,
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
      formValueStartName,
      formValueEndName,
      formValueStartNameSuffix,
      formValueEndNameSuffix,
      align,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      labelShrink: formLabelShrink,
      fullWidth: formFullWidth,
      formColWithHelperText,
      onAddValueItem,
      onRemoveValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
    } = useFormState();

    // Memo - FormState ------------------------------------------------------------------------------------------------

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

    // Ref -------------------------------------------------------------------------------------------------------------

    const startInputRef = useRef<HTMLInputElement>();
    const endInputRef = useRef<HTMLInputElement>();
    const startInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const endInputDatePickerErrorRef = useRef<DateValidationError>(null);
    const openValueRef = useRef<FormYearRangePickerValue>();

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [startError, setStartError] = useState(false);
    const [startErrorHelperText, setStartErrorHelperText] = useState<Props['helperText']>();
    const [endError, setEndError] = useState(false);
    const [endErrorHelperText, setEndErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);
    const [open, setOpen] = useState(false);
    const [selectType, setSelectType] = useState<PrivateYearRangePickerSelectType>('start');

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback((value: FormYearRangePickerValue | undefined): FormYearRangePickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateState<FormYearRangePickerValue>(
      useCallback(() => {
        return initValue || DEFAULT_VALUE;
      }, [initValue])
    );

    useFirstSkipEffect(() => {
      if (error || startError || endError) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    // Function ----------------------------------------------------------------------------------------------------------

    const valueToDate = useCallback((v: FormYearRangePickerBaseValue) => dayjs(`${v}-01-01`), []);
    const dateToValue = useCallback((v: Dayjs) => v.year(), []);

    // Memo --------------------------------------------------------------------------------------------------------------

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

    // Memo --------------------------------------------------------------------------------------------------------------

    const format = useMemo(() => initFormat || DEFAULT_FORMAT, [initFormat]);

    // Effect ----------------------------------------------------------------------------------------------------------

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

    // Function --------------------------------------------------------------------------------------------------------

    const focus = useCallback(function () {
      startInputRef.current?.focus();
    }, []);

    const setStartErrorErrorHelperText = useCallback((error: boolean, startErrorHelperText: ReactNode) => {
      setStartError(error);
      setStartErrorHelperText(startErrorHelperText);
    }, []);

    const setEndErrorErrorHelperText = useCallback((error: boolean, endErrorHelperText: ReactNode) => {
      setEndError(error);
      setEndErrorHelperText(endErrorHelperText);
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
            setStartErrorErrorHelperText(true, '필수 입력 항목입니다.');
          } else {
            setEndErrorErrorHelperText(true, '필수 입력 항목입니다.');
          }
          return false;
        }

        if (startInputDatePickerErrorRef.current) {
          setStartErrorErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
          return false;
        }
        if (endInputDatePickerErrorRef.current) {
          setEndErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
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
        setStartErrorErrorHelperText(false, undefined);
        setEndErrorErrorHelperText(false, undefined);

        return true;
      },
      [onValidate, required, setEndErrorErrorHelperText, setErrorErrorHelperText, setStartErrorErrorHelperText]
    );

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;

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
        getStartValue: () => lastValue[0],
        setStartValue: (value) => {
          lastValue = [value, lastValue[1]];
          setValue(lastValue);
        },
        getEndValue: () => lastValue[1],
        setEndValue: (value) => {
          lastValue = [lastValue[0], value];
          setValue(lastValue);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(value),
        setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
          setErrorErrorHelperText(error, error ? errorHelperText : undefined),
        getFormValueStartNameSuffix: () =>
          formValueStartNameSuffix || FormDateRangePickerDefaultProps.formValueStartNameSuffix,
        getFormValueEndNameSuffix: () =>
          formValueEndNameSuffix || FormDateRangePickerDefaultProps.formValueEndNameSuffix,
        getFormValueStartName: () => {
          return (
            formValueStartName ||
            `${name}${formValueStartNameSuffix || FormDateRangePickerDefaultProps.formValueStartNameSuffix}`
          );
        },
        getFormValueEndName: () => {
          return (
            formValueEndName ||
            `${name}${formValueEndNameSuffix || FormDateRangePickerDefaultProps.formValueEndNameSuffix}`
          );
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
      formValueStartNameSuffix,
      formValueEndNameSuffix,
      formValueStartName,
      formValueEndName,
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

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

              if (startError) {
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
              if (endError) {
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
      [dateToValue, endError, maxYear, minYear, name, onValueChangeByUser, setValue, startError, validate]
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

    // Memo --------------------------------------------------------------------------------------------------------------

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

    // Render ----------------------------------------------------------------------------------------------------------

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
                    label={startLabel}
                    labelIcon={startLabelIcon}
                    error={error || startError}
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
                    label={endLabel}
                    labelIcon={endLabelIcon}
                    error={error || endError}
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
                (startError && startErrorHelperText) ||
                (endError && endErrorHelperText)) && (
                <FormHelperText
                  error={error || startError || endError}
                  style={{ marginLeft: variant === 'standard' ? 0 : 14 }}
                >
                  {error
                    ? errorHelperText
                    : startError
                    ? startErrorHelperText
                    : endError
                    ? endErrorHelperText
                    : helperText}
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
