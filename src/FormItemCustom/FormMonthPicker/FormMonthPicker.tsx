import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util';
import { empty, equal, nextTick } from '@pdg/util';
import {
  FormMonthPickerProps as Props,
  FormMonthPickerDefaultProps,
  FormMonthPickerCommands,
  FormMonthPickerValue,
  FormMonthPickerBaseValue,
} from './FormMonthPicker.types';
import { useFormState } from '../../FormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PrivateInputDatePicker, PrivateMonthPicker, PrivateStyledTooltip } from '../../@private';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

const DEFAULT_VALUE = null;
const DEFAULT_FORMAT = 'YYYY년 MM월';

const FormMonthPicker = React.forwardRef<FormMonthPickerCommands, Props>(
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
      labelIcon,
      label,
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
      minValue: initMinValue,
      maxValue: initMaxValue,
      inputWidth,
      readOnlyInput,
      startAdornment,
      endAdornment,
      formValueYearNameSuffix,
      formValueMonthNameSuffix,
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

    const ratingRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>();
    const closeTimeoutRef = useRef<NodeJS.Timeout>();
    const mouseDownTimeRef = useRef<number>();
    const inputDatePickerErrorRef = useRef<DateValidationError>(null);
    const openValueRef = useRef<FormMonthPickerValue>();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );
    const [hidden, setHidden] = useAutoUpdateState<Props['hidden']>(initHidden);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);
    const [open, setOpen] = useState(false);

    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/

    const getFinalValue = useCallback((value: FormMonthPickerValue | undefined): FormMonthPickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const setErrorErrorHelperText = useCallback(
      function (error: Props['error'], errorHelperText: Props['helperText']) {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    const validate = useCallback(
      function (value: FormMonthPickerValue) {
        if (required && empty(value)) {
          setErrorErrorHelperText(true, '필수 선택 항목입니다.');
          return false;
        }

        if (inputDatePickerErrorRef.current) {
          setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
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
      [onValidate, required, setErrorErrorHelperText]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const [value, setValue] = useState<FormMonthPickerValue>(() => getFinalValue(initValue));

    const changeValue = useCallback(
      (newValue: FormMonthPickerValue) => {
        if (!equal(value, newValue)) {
          setValue(newValue);
          nextTick(() => {
            if (error) validate(newValue);
            if (onChange) onChange(newValue);
            onValueChange(name, newValue);
          });
        }
      },
      [error, name, onChange, onValueChange, validate, value]
    );

    useFirstSkipEffect(() => {
      changeValue(getFinalValue(initValue));
    }, [initValue]);

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

    const valueDate = useMemo(() => (value ? valueToDate(value) : null), [value, valueToDate]);

    const minValue = useMemo(() => initMinValue || FormMonthPickerDefaultProps.minValue, [initMinValue]);
    const maxValue = useMemo(() => initMaxValue || FormMonthPickerDefaultProps.maxValue, [initMaxValue]);

    const minDate = useMemo(() => valueToDate(minValue), [minValue, valueToDate]);
    const maxDate = useMemo(() => valueToDate(maxValue), [maxValue, valueToDate]);

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
     * Memo
     * ******************************************************************************************************************/

    const format = useMemo(() => initFormat || DEFAULT_FORMAT, [initFormat]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (ratingRef.current) {
        inputRef.current = ratingRef.current.querySelector('input') || undefined;
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
            runOnRequestSearchSubmit =
              openValueRef.current.year !== value.year || openValueRef.current.month !== value.month;
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
      inputRef.current?.focus();
      setTimeout(() => {
        inputRef.current?.blur();
      });
    }, []);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;
      let lastHidden = !!hidden;

      const commands: FormMonthPickerCommands = {
        getType: () => 'FormMonthPicker',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => {
          lastValue = getFinalValue(initValue);
          changeValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value) => {
          lastValue = getFinalValue(value);
          changeValue(lastValue);
        },
        getData: () => lastData,
        setData: (data) => {
          lastData = data;
          setData(data);
        },
        getYear: () => (lastValue ? lastValue.year : null),
        setYear: (year: number | null) => {
          lastValue = getFinalValue(
            year === null
              ? null
              : lastValue
                ? { year, month: lastValue.month }
                : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 }
          );
          changeValue(lastValue);
        },
        getMonth: () => (lastValue ? lastValue.month : null),
        setMonth: (month: number | null) => {
          lastValue = getFinalValue(
            month === null
              ? null
              : lastValue
                ? { year: lastValue.year, month }
                : { year: new Date().getFullYear(), month }
          );
          changeValue(lastValue);
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
        getFormValueYearNameSuffix: () =>
          formValueYearNameSuffix || FormMonthPickerDefaultProps.formValueYearNameSuffix,
        getFormValueMonthNameSuffix: () =>
          formValueMonthNameSuffix || FormMonthPickerDefaultProps.formValueMonthNameSuffix,
        getFormValueYearName: () => {
          return `${name}${formValueYearNameSuffix || FormMonthPickerDefaultProps.formValueYearNameSuffix}`;
        },
        getFormValueMonthName: () => {
          return `${name}${formValueMonthNameSuffix || FormMonthPickerDefaultProps.formValueMonthNameSuffix}`;
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
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
      formValueYearNameSuffix,
      formValueMonthNameSuffix,
      hidden,
      setHidden,
      changeValue,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleContainerMouseDown = useCallback(() => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    }, []);

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
          setOpen(false);
        }, 10);
      }
    }, []);

    const handleContainerChange = useCallback(
      (newValue: FormMonthPickerBaseValue, isMonthSelect: boolean) => {
        changeValue(newValue);
        if (isMonthSelect) setOpen(false);

        nextTick(() => {
          onValueChangeByUser(name, newValue);
        });
      },
      [changeValue, name, onValueChangeByUser]
    );

    const handleInputDatePickerFocus = useCallback(() => {
      if (readOnly || disabled) return;

      setOpen(true);
    }, [readOnly, disabled]);

    const handleInputDatePickerShouldDisableYear = useCallback(
      (date: Dayjs) => {
        const dateYm = Number(date.format('YYYYMM'));
        return dateYm < minAvailableYm || dateYm > maxAvailableYm;
      },
      [maxAvailableYm, minAvailableYm]
    );

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const inputDatePickerProps = useMemo(
      () => ({
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
      [variant, size, color, labelShrink, fullWidth, disabled, format, minDate, maxDate]
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
          <div
            className={classNames(className, 'FormMonthPicker')}
            style={wrapStyle}
            onMouseDown={handleContainerMouseDown}
            onFocus={handleContainerFocus}
            onBlur={handleContainerBlur}
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
                  <PrivateMonthPicker
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
              <div>
                <PrivateInputDatePicker
                  {...inputDatePickerProps}
                  style={inputStyle}
                  sx={sx}
                  value={valueDate}
                  label={label}
                  labelIcon={labelIcon}
                  error={error}
                  focused={focused}
                  required={required}
                  readOnly={readOnly}
                  readOnlyInput={readOnlyInput}
                  icon={icon}
                  startAdornment={startAdornment}
                  endAdornment={endAdornment}
                  inputRef={inputRef}
                  onChange={(v) => changeValue(v ? dateToValue(v) : v)}
                  onFocus={handleInputDatePickerFocus}
                  onError={(reason) => (inputDatePickerErrorRef.current = reason)}
                  shouldDisableYear={handleInputDatePickerShouldDisableYear}
                />
              </div>
            </PrivateStyledTooltip>
            {!formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (
              <FormHelperText error={error} style={{ marginLeft: variant === 'standard' ? 0 : 14 }}>
                {error ? errorHelperText : helperText}
              </FormHelperText>
            )}
          </div>
        </ClickAwayListener>
      </LocalizationProvider>
    );
  }
);

FormMonthPicker.displayName = 'FormMonthPicker';
FormMonthPicker.defaultProps = FormMonthPickerDefaultProps;

export default FormMonthPicker;
