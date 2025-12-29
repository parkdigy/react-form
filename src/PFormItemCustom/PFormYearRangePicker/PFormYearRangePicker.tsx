import React, { ReactNode, useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { ClickAwayListener, FormHelperText, Grid } from '@mui/material';
import { useAutoUpdateRef, useFirstSkipChanged, useFirstSkipEffect, useForwardRef } from '@pdg/react-hook';
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
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  /********************************************************************************************************************/
  hidden: initHidden,
  /********************************************************************************************************************/
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
  /********************************************************************************************************************/
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
  /********************************************************************************************************************/
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

  const initValueRef = useAutoUpdateRef(initValue);
  const startInputRef = useRef<HTMLInputElement>(undefined);
  const endInputRef = useRef<HTMLInputElement>(undefined);
  const startInputDatePickerErrorRef = useRef<DateValidationError>(null);
  const endInputDatePickerErrorRef = useRef<DateValidationError>(null);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

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

  /** error */
  const [error, _setError] = useState(initError);
  useFirstSkipChanged(() => _setError(initError), [initError]);
  const errorRef = useAutoUpdateRef(error);
  const setError = useCallback(
    (value: React.SetStateAction<typeof error>) => {
      _setError((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    },
    [errorRef]
  );

  /** data */
  const [data, _setData] = useState(initData);
  useFirstSkipChanged(() => _setData(initData), [initData]);
  const dataRef = useAutoUpdateRef(data);
  const setData = useCallback(
    (value: React.SetStateAction<typeof data>) => {
      _setData((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        dataRef.current = newValue;
        return newValue;
      });
    },
    [dataRef]
  );

  /** disabled */
  const finalInitDisabled = initDisabled ?? formDisabled;
  const [disabled, setDisabled] = useState(finalInitDisabled);
  useFirstSkipChanged(() => setDisabled(finalInitDisabled), [finalInitDisabled]);

  /** hidden */
  const [hidden, setHidden] = useState(initHidden);
  useFirstSkipChanged(() => setHidden(initHidden), [initHidden]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setFromErrorErrorHelperText */
  const setFromErrorErrorHelperText = useCallback((error: boolean, fromErrorHelperText: ReactNode) => {
    setFromError(error);
    setFromErrorHelperText(fromErrorHelperText);
  }, []);

  /** setToErrorErrorHelperText */
  const setToErrorErrorHelperText = useCallback((error: boolean, toErrorHelperText: ReactNode) => {
    setToError(error);
    setToErrorHelperText(toErrorHelperText);
  }, []);

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    function (error: Props['error'], errorHelperText: Props['helperText']) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
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

      if (onValidateRef.current) {
        const onValidateResult = onValidateRef.current(value);
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
    [required, onValidateRef, setErrorErrorHelperText, setFromErrorErrorHelperText, setToErrorErrorHelperText]
  );

  /** focus */
  const focus = useCallback(function () {
    startInputRef.current?.focus();
  }, []);

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<ReturnType<typeof getFinalValue>>) => {
      _setValue((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        valueRef.current = newValue;
        return newValue;
      });
    },
    [valueRef]
  );

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value']) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);

      if (error || fromError || toError) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, fromError, name, onChangeRef, onValueChange, setValue, toError, validate]
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

  useFirstSkipEffect(() => {
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
  }, [open]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormYearRangePickerCommands>(
    () => ({
      getType: () => 'PFormYearRangePicker',
      getName: () => name,
      getReset: () => getFinalValue(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
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
      setError: setErrorErrorHelperText,
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
      initValueRef,
      name,
      setData,
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

  /** handleContainerChange */
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

  /** handleInputDatePickerChange */
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

  /** handleInputDatePickerFocus */
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

  /** handleInputDatePickerShouldDisableYear */
  const handleInputDatePickerShouldDisableYear = useCallback(
    (year: Dayjs) => {
      return (!!disablePast && year.year() < dateInfo.nowYear) || (!!disableFuture && year.year() > dateInfo.nowYear);
    },
    [disableFuture, disablePast, dateInfo.nowYear]
  );

  /********************************************************************************************************************
   * Render - Variable
   * ******************************************************************************************************************/

  const valueDate = useMemo(
    () => [!!value && !!value[0] ? valueToDate(value[0]) : null, !!value && !!value[1] ? valueToDate(value[1]) : null],
    [value]
  );

  const privateInputDatePickerProps = useMemo(
    () => ({
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
    }),
    [
      align,
      color,
      dateInfo.max,
      dateInfo.min,
      disabled,
      enableKeyboardInput,
      endAdornment,
      focused,
      format,
      fullWidth,
      icon,
      initStyle,
      inputWidth,
      labelShrink,
      readOnly,
      required,
      size,
      startAdornment,
      sx,
      variant,
    ]
  );

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
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, error && errorHelperText ? 8 : -14],
                    },
                  },
                ],
              },
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
