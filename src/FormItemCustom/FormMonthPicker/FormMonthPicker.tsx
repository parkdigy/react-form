import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util.private';
import { empty, ifUndefined, nextTick } from '@pdg/util';
import {
  FormMonthPickerProps as Props,
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
import { dateToValue, getFinalValue, valueToDate, valueToYm } from './FormMonthPicker.function.private';

const DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1,
};
const DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12,
};

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
      format = 'YYYY년 MM월',
      labelShrink: initLabelShrink,
      disablePast,
      disableFuture,
      minValue = DEFAULT_MIN_VALUE,
      maxValue = DEFAULT_MAX_VALUE,
      inputWidth,
      readOnlyInput,
      startAdornment,
      endAdornment,
      formValueYearNameSuffix = '_year',
      formValueMonthNameSuffix = '_month',
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

    const variant = ifUndefined(initVariant, formVariant);
    const size = ifUndefined(initSize, formSize);
    const color = ifUndefined(initColor, formColor);
    const focused = ifUndefined(initFocused, formFocused);
    const labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

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
    const [open, setOpen] = useState(false);

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);

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
     * value
     * ******************************************************************************************************************/

    const [valueRef, value, setValue] = useAutoUpdateRefState(initValue, getFinalValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const dateInfo = useMemo(() => {
      const nowDate = dayjs();
      const nowValue = dateToValue(nowDate);
      const nowYm = valueToYm(nowValue);

      const minDate = valueToDate(minValue);
      const maxDate = valueToDate(maxValue);

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
      const commands: FormMonthPickerCommands = {
        getType: () => 'FormMonthPicker',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => setValue(initValue),
        getValue: () => valueRef.current,
        setValue,
        getData: () => dataRef.current,
        setData,
        getYear: () => (valueRef.current ? valueRef.current.year : null),
        setYear: (year: number | null) => {
          setValue(
            year === null
              ? null
              : valueRef.current
                ? { year, month: valueRef.current.month }
                : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 }
          );
        },
        getMonth: () => (valueRef.current ? valueRef.current.month : null),
        setMonth: (month: number | null) => {
          setValue(
            month === null
              ? null
              : valueRef.current
                ? { year: valueRef.current.year, month }
                : { year: new Date().getFullYear(), month }
          );
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
        getFormValueYearNameSuffix: () => formValueYearNameSuffix,
        getFormValueMonthNameSuffix: () => formValueMonthNameSuffix,
        getFormValueYearName: () => {
          return `${name}${formValueYearNameSuffix}`;
        },
        getFormValueMonthName: () => {
          return `${name}${formValueMonthNameSuffix}`;
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
      formValueMonthNameSuffix,
      formValueYearNameSuffix,
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
        setValue(newValue);
        if (isMonthSelect) setOpen(false);

        nextTick(() => {
          onValueChangeByUser(name, newValue);
        });
      },
      [name, onValueChangeByUser, setValue]
    );

    const handleInputDatePickerFocus = useCallback(() => {
      if (readOnly || disabled) return;

      setOpen(true);
    }, [readOnly, disabled]);

    const handleInputDatePickerShouldDisableYear = useCallback(
      (date: Dayjs) => {
        const dateYm = Number(date.format('YYYYMM'));
        return dateYm < dateInfo.minAvailableYm || dateYm > dateInfo.maxAvailableYm;
      },
      [dateInfo]
    );

    /********************************************************************************************************************
     * Variables
     * ******************************************************************************************************************/

    const valueDate = value ? valueToDate(value) : null;

    const inputDatePickerProps = {
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

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
        <ClickAwayListener mouseEvent='onMouseDown' touchEvent='onTouchStart' onClickAway={() => setOpen(false)}>
          <div
            className={classNames(className, 'FormMonthPicker')}
            style={{
              display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
              flex: fullWidth ? 1 : undefined,
            }}
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
                  style={
                    inputWidth != null
                      ? { width: inputWidth, ...initStyle }
                      : { width: fullWidth ? undefined : 150, ...initStyle }
                  }
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
                  onChange={(v) => setValue(v ? dateToValue(v) : v)}
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

export default FormMonthPicker;
