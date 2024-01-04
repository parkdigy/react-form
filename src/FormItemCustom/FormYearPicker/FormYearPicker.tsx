import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, getDateValidationErrorText, nextTick } from '../../@util';
import {
  FormYearPickerProps as Props,
  FormYearPickerDefaultProps,
  FormYearPickerCommands,
  FormYearPickerValue,
  FormYearPickerBaseValue,
} from './FormYearPicker.types';
import { useFormState } from '../../FormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  PrivateDatePickerValue,
  PrivateInputDatePicker,
  PrivateStyledTooltip,
  PrivateYearPicker,
} from '../../@private';
import dayjs, { Dayjs } from 'dayjs';

const DEFAULT_VALUE = null;
const DEFAULT_FORMAT = 'YYYY년 MM월';

const FormYearPicker = React.forwardRef<FormYearPickerCommands, Props>(
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
      minYear,
      maxYear,
      inputWidth,
      readOnlyInput,
      startAdornment,
      endAdornment,
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

    const ratingRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>();
    const closeTimeoutRef = useRef<NodeJS.Timeout>();
    const mouseDownTimeRef = useRef<number>();
    const inputDatePickerErrorRef = useRef<DateValidationError>(null);
    const openValueRef = useRef<FormYearPickerValue>();

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);
    const [open, setOpen] = useState(false);

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback((value: FormYearPickerValue | undefined): FormYearPickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateState<FormYearPickerValue>(
      useCallback(() => {
        return initValue || DEFAULT_VALUE;
      }, [initValue])
    );

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    // Function ----------------------------------------------------------------------------------------------------------

    const valueToDate = useCallback((v: FormYearPickerBaseValue) => dayjs(`${v}-01-01`), []);
    const dateToValue = useCallback((v: Dayjs) => v.year(), []);

    // Memo --------------------------------------------------------------------------------------------------------------

    const nowYear = useMemo(() => new Date().getFullYear(), []);
    const valueDate = useMemo(() => (value ? valueToDate(value) : null), [value, valueToDate]);
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
      inputRef.current?.focus();
      setTimeout(() => {
        inputRef.current?.blur();
      });
    }, []);

    const setErrorErrorHelperText = useCallback(
      function (error: Props['error'], errorHelperText: Props['helperText']) {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    const validate = useCallback(
      function (value: FormYearPickerValue) {
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

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;

      const commands: FormYearPickerCommands = {
        getType: () => 'FormYearPicker',
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
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

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
      (newValue: FormYearPickerBaseValue, isClick: boolean) => {
        setValue(newValue);
        if (isClick) setOpen(false);

        nextTick(() => {
          onValueChangeByUser(name, newValue);
        });
      },
      [name, onValueChangeByUser, setValue]
    );

    const handleInputDatePickerChange = useCallback(
      (v: PrivateDatePickerValue) => {
        const newValue = v ? dateToValue(v) : v;
        setValue(newValue);
        nextTick(() => {
          onValueChangeByUser(name, newValue);
        });
      },
      [dateToValue, name, onValueChangeByUser, setValue]
    );

    const handleInputDatePickerFocus = useCallback(() => {
      if (readOnly || disabled) return;

      setOpen(true);
    }, [readOnly, disabled]);

    const handleInputDatePickerShouldDisableYear = useCallback(
      (year: Dayjs) => {
        return (!!disablePast && year.year() < nowYear) || (!!disableFuture && year.year() > nowYear);
      },
      [disableFuture, disablePast, nowYear]
    );

    // Memo --------------------------------------------------------------------------------------------------------------

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

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div
            className={classNames(className, 'FormYearPicker')}
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
                  <PrivateYearPicker
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
                  onChange={handleInputDatePickerChange}
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

FormYearPicker.displayName = 'FormYearPicker';
FormYearPicker.defaultProps = FormYearPickerDefaultProps;

export default FormYearPicker;