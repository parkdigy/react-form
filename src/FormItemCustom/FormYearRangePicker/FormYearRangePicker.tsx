import React, { ReactNode, useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { getDateValidationErrorText } from '../../@util.private';
import { ifUndefined, nextTick } from '@pdg/util';
import {
  FormYearRangePickerProps as Props,
  FormYearRangePickerCommands,
  FormYearRangePickerValue,
  FormYearRangePickerBaseValue,
} from './FormYearRangePicker.types';
import { useFormState } from '../../FormContext';
import { LocalizationProvider, DateValidationError } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  PrivateInputDatePicker,
  PrivateInputDatePickerProps,
  PrivateInputDatePickerValue,
  PrivateStyledTooltip,
  PrivateYearRangePicker,
  PrivateYearRangePickerSelectType,
} from '../../@private';
import dayjs, { Dayjs } from 'dayjs';

const DEFAULT_VALUE: FormYearRangePickerValue = [null, null];

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
      format = 'YYYY년',
      labelShrink: initLabelShrink,
      disablePast,
      disableFuture,
      minYear = 2020,
      maxYear = 2050,
      inputWidth,
      readOnlyInput,
      startAdornment,
      endAdornment,
      formValueFromNameSuffix = '_from',
      formValueToNameSuffix = '_to',
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

    const formState = useMemo(
      () => ({
        variant: ifUndefined(initVariant, formVariant),
        size: ifUndefined(initSize, formSize),
        color: ifUndefined(initColor, formColor),
        focused: ifUndefined(initFocused, formFocused),
        labelShrink: ifUndefined(initLabelShrink, formLabelShrink),
        fullWidth: ifUndefined(initFullWidth, formFullWidth),
      }),
      [
        formColor,
        formFocused,
        formFullWidth,
        formLabelShrink,
        formSize,
        formVariant,
        initColor,
        initFocused,
        initFullWidth,
        initLabelShrink,
        initSize,
        initVariant,
      ]
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
    const [open, setOpen] = useState(false);
    const [selectType, setSelectType] = useState<PrivateYearRangePickerSelectType>('start');

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
     * State - value
     * ******************************************************************************************************************/

    const getFinalValue = useCallback((value: FormYearRangePickerValue | undefined): FormYearRangePickerValue => {
      return value || DEFAULT_VALUE;
    }, []);

    const [valueRef, value, setValue] = useAutoUpdateRefState(initValue, getFinalValue);

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

    const minDate = useMemo(() => valueToDate(minYear), [minYear, valueToDate]);
    const maxDate = useMemo(() => valueToDate(maxYear), [maxYear, valueToDate]);

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
      const commands: FormYearRangePickerCommands = {
        getType: () => 'FormYearRangePicker',
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
        getFormValueFromNameSuffix: () => formValueFromNameSuffix,
        getFormValueToNameSuffix: () => formValueToNameSuffix,
        getFormValueFromName: () => {
          return `${name}${formValueFromNameSuffix}`;
        },
        getFormValueToName: () => {
          return `${name}${formValueToNameSuffix}`;
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
      formValueFromNameSuffix,
      formValueToNameSuffix,
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
      [setValue, name, onValueChangeByUser]
    );

    const handleInputDatePickerChange = useCallback(
      (selectType: PrivateYearRangePickerSelectType, date: PrivateInputDatePickerValue) => {
        if (date == null || date.isValid()) {
          if (selectType === 'start') {
            const newValue: FormYearRangePickerValue = [date ? dateToValue(date) : null, valueRef.current[1]];
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

            setValue(newValue);
          } else {
            const newValue: FormYearRangePickerValue = [valueRef.current[0], date ? dateToValue(date) : null];
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

            setValue(newValue);
          }
        }
      },
      [dateToValue, valueRef, minYear, maxYear, fromError, setValue, validate, onValueChangeByUser, name, toError]
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
        return (!!disablePast && year.year() < nowYear) || (!!disableFuture && year.year() > nowYear);
      },
      [disableFuture, disablePast, nowYear]
    );

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const privateInputDatePickerProps = {
      ...formState,
      align,
      disabled,
      format,
      minDate,
      maxDate,
      style: inputWidth != null ? { width: inputWidth } : { width: formState.fullWidth ? undefined : 150 },
      sx,
      required,
      readOnly,
      readOnlyInput,
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
            className={classNames(className, 'FormYearRangePicker')}
            style={{
              display: hidden ? 'none' : formState.fullWidth ? 'block' : 'inline-block',
              flex: formState.fullWidth ? 1 : undefined,
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
                <Grid item flex={1}>
                  <PrivateInputDatePicker
                    {...privateInputDatePickerProps}
                    inputRef={startInputRef}
                    value={valueDate[0]}
                    label={fromLabel}
                    labelIcon={fromLabelIcon}
                    error={error || fromError}
                    focused={formState.focused || (open && selectType === 'start')}
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
                    {...privateInputDatePickerProps}
                    inputRef={endInputRef}
                    value={valueDate[1]}
                    label={toLabel}
                    labelIcon={toLabelIcon}
                    error={error || toError}
                    focused={formState.focused || (open && selectType === 'end')}
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
                  style={{ marginLeft: formState.variant === 'standard' ? 0 : 14 }}
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

export default FormYearRangePicker;
