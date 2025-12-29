import React, { useId, useRef, useState, useCallback, ReactNode, useMemo, CSSProperties } from 'react';
import classNames from 'classnames';
import { Box, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useAutoUpdateRef, useFirstSkipChanged, useForwardRef } from '@pdg/react-hook';
import { empty, notEmpty } from '@pdg/compare';
import { PFormTextFieldProps, PFormTextFieldCommands, PFormTextFieldValue } from './PFormTextField.types';
import { useFormState } from '../../PFormContext';
import { PIcon } from '@pdg/react-component';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';
import './PFormTextField.scss';

type InputSlotProps = StandardInputProps;

function PFormTextField<T = PFormTextFieldValue, AllowUndefinedValue extends boolean = true>({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  labelShrink: initLabelShrink,
  fullWidth: initFullWidth,
  submitWhenReturnKey: initSubmitWhenReturnKey,
  /********************************************************************************************************************/
  name,
  required,
  value: initValue,
  data: initData,
  icon,
  labelIcon,
  label: initLabel,
  error: initError,
  helperText,
  exceptValue,
  readOnly,
  tabIndex,
  disabled: initDisabled,
  placeholder,
  maxLength,
  clear,
  width,
  slotProps: initSlotProps,
  inputRef: initInputRef,
  select,
  multiline,
  validPattern,
  invalidPattern,
  startAdornment,
  endAdornment,
  noFormValueItem,
  hidden: initHidden,
  disableReturnKey,
  /********************************************************************************************************************/
  onChange,
  onValue,
  onValidate,
  onBlur,
  onKeyDown,
  /********************************************************************************************************************/
  className,
  style: initStyle,
  /********************************************************************************************************************/
  ...props
}: PFormTextFieldProps<T, AllowUndefinedValue>) {
  /********************************************************************************************************************
   * Type
   * ******************************************************************************************************************/

  type Commands = PFormTextFieldCommands<T, AllowUndefinedValue>;

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
    submitWhenReturnKey: formSubmitWhenReturnKey,
    formColWithHelperText,
    onAddValueItem,
    onRemoveValueItem,
    onValueChange,
    onValueChangeByUser,
    onRequestSubmit,
    onRequestSearchSubmit,
  } = useFormState<T, AllowUndefinedValue>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth;
  const submitWhenReturnKey = initSubmitWhenReturnKey ?? formSubmitWhenReturnKey;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);
  const onBlurRef = useAutoUpdateRef(onBlur);
  const onKeyDownRef = useAutoUpdateRef(onKeyDown);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<PFormTextFieldProps['helperText']>();

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

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    function (error: boolean, errorHelperText: ReactNode) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
  const validate = useCallback(
    (value: PFormTextFieldValue) => {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, '필수 입력 항목입니다.');
        return false;
      }

      if (notEmpty(value) && validPattern) {
        if (!new RegExp(validPattern).test(value)) {
          setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
          return false;
        }
      }
      if (notEmpty(value) && invalidPattern) {
        if (new RegExp(invalidPattern).test(value)) {
          setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
          return false;
        }
      }
      if (onValidateRef.current) {
        const validateResult = onValidateRef.current(value);
        if (validateResult != null && validateResult !== true) {
          setErrorErrorHelperText(true, validateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [required, validPattern, invalidPattern, onValidateRef, setErrorErrorHelperText]
  );

  /** focus */
  const focus = useCallback(
    function () {
      if (initInputRef) {
        (initInputRef as React.RefObject<HTMLInputElement>).current?.focus();
      } else {
        inputRef.current?.focus();
      }
    },
    [initInputRef, inputRef]
  );

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    function (newValue: PFormTextFieldProps['value']): PFormTextFieldProps['value'] {
      return onValue ? onValue(newValue) : newValue;
    },
    [onValue]
  );

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(initValue), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<ReturnType<typeof getFinalValue>>) => {
      _setValue((prev: any) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        valueRef.current = newValue;
        return newValue;
      });
    },
    [valueRef]
  );

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: PFormTextFieldProps['value']) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);

      if (error) validate(finalValue);
      onChangeRef.current?.(finalValue);
      if (!noFormValueItem) {
        onValueChange(name, finalValue);
      }

      return finalValue;
    },
    [error, getFinalValue, name, noFormValueItem, onChangeRef, onValueChange, setValue, validate]
  );

  /********************************************************************************************************************
   * Variables
   * ******************************************************************************************************************/

  const showClear = clear ? notEmpty(value) : false;

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo(
    (): Commands => ({
      getType: () => 'default',
      getName: () => name,
      getReset: () => getFinalValue(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled,
      isHidden: () => !!hidden,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: setErrorErrorHelperText,
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      getFinalValue,
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

  const handleCommandSet = useCallback((commands: Commands) => onAddValueItem(id, commands), [id, onAddValueItem]);

  const handleCommandUnset = useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]);

  useForwardRef(
    ref,
    commands,
    !noFormValueItem ? handleCommandSet : undefined,
    !noFormValueItem ? handleCommandUnset : undefined
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleChange */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const finalValue = updateValue(e.target.value);
      if (!noFormValueItem) {
        setTimeout(() => {
          onValueChangeByUser(name, finalValue);
          if (select) {
            onRequestSearchSubmit(name, finalValue);
          }
        });
      }
    },
    [updateValue, noFormValueItem, onValueChangeByUser, name, select, onRequestSearchSubmit]
  );

  /** handleBlur */
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (error) validate(valueRef.current);
      onBlurRef.current?.(e);
    },
    [error, validate, valueRef, onBlurRef]
  );

  /** handleKeyDown */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (['Enter'].includes(e.key) && !select && (!multiline || (multiline && disableReturnKey)) && !noFormValueItem) {
        e.preventDefault();
        e.stopPropagation();
        if (submitWhenReturnKey) {
          onRequestSubmit(name, valueRef.current);
        }
        onRequestSearchSubmit(name, valueRef.current);
      }
      onKeyDownRef.current?.(e);
    },
    [
      select,
      multiline,
      disableReturnKey,
      noFormValueItem,
      onKeyDownRef,
      submitWhenReturnKey,
      onRequestSearchSubmit,
      name,
      valueRef,
      onRequestSubmit,
    ]
  );

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  /** style */
  const style = useMemo(() => {
    const newStyle: CSSProperties = { ...initStyle };
    if (width != null) {
      newStyle.width = width;
    }
    if (hidden) {
      newStyle.display = 'none';
    }
    return newStyle;
  }, [hidden, initStyle, width]);

  /** inputSlotProps */
  const inputSlotProps: InputSlotProps = useMemo(() => {
    const newProps: InputSlotProps = { ...initSlotProps?.input };

    if (startAdornment || icon || newProps.startAdornment) {
      newProps.startAdornment = (
        <>
          {icon && (
            <InputAdornment position='start'>
              <PIcon size='small'>{icon}</PIcon>
            </InputAdornment>
          )}
          {startAdornment && <InputAdornment position='start'>{startAdornment}</InputAdornment>}
          {newProps.startAdornment}
        </>
      );
    }
    if (endAdornment || newProps.endAdornment || (clear && !readOnly && !disabled)) {
      newProps.endAdornment = (
        <>
          {clear && !readOnly && !disabled && (
            <InputAdornment className={classNames('clear-icon-button-wrap', showClear && 'show')} position='end'>
              <IconButton
                className={'clear-icon-button'}
                size='small'
                tabIndex={-1}
                onClick={() => {
                  const finalValue = updateValue('');
                  focus();
                  if (!noFormValueItem) {
                    setTimeout(() => {
                      onValueChangeByUser(name, finalValue);
                      onRequestSearchSubmit(name, finalValue);
                    });
                  }
                }}
              >
                <PIcon size='inherit'>ClearRounded</PIcon>
              </IconButton>
            </InputAdornment>
          )}
          {newProps.endAdornment}
          {endAdornment && <InputAdornment position='end'>{endAdornment}</InputAdornment>}
        </>
      );
    }

    return newProps;
  }, [
    clear,
    disabled,
    endAdornment,
    focus,
    icon,
    initSlotProps?.input,
    name,
    noFormValueItem,
    onRequestSearchSubmit,
    onValueChangeByUser,
    readOnly,
    showClear,
    startAdornment,
    updateValue,
  ]);

  /** slotProps */
  const slotProps = useMemo(() => {
    const newSlotProps: TextFieldProps['slotProps'] = {
      ...initSlotProps,
      formHelperText: { component: 'div' },
    };

    // input
    newSlotProps.input = { ...initSlotProps?.input, ...inputSlotProps };

    // inputLabel
    newSlotProps.inputLabel =
      labelShrink || placeholder
        ? {
            ...initSlotProps?.inputLabel,
            shrink: true,
          }
        : initSlotProps?.inputLabel;

    // htmlInput
    const initHtmlInputProps: React.InputHTMLAttributes<HTMLInputElement> | undefined =
      initSlotProps?.htmlInput as React.InputHTMLAttributes<HTMLInputElement>;

    if ((!initHtmlInputProps?.className?.includes('PFormTag-Input') && readOnly != null) || maxLength != null) {
      newSlotProps.htmlInput = {
        ...initHtmlInputProps,
        readOnly: readOnly,
        maxLength: maxLength,
      };

      if (readOnly) {
        newSlotProps.htmlInput.tabIndex = -1;
        newSlotProps.htmlInput.className = classNames(newSlotProps.htmlInput.className, 'Mui-disabled');
      } else {
        newSlotProps.htmlInput.tabIndex = tabIndex;
      }
    }

    return newSlotProps;
  }, [initSlotProps, inputSlotProps, labelShrink, maxLength, placeholder, readOnly, tabIndex]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <TextField
      {...props}
      variant={variant}
      size={size}
      color={color}
      focused={focused || undefined}
      name={name}
      label={
        labelIcon ? (
          <>
            <PIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PIcon>
            <Box component='span' style={{ verticalAlign: 'middle' }}>
              {initLabel}
            </Box>
          </>
        ) : (
          initLabel
        )
      }
      placeholder={placeholder}
      className={classNames(className, 'PFormValueItem', 'PFormTextField', `variant-${variant}`)}
      inputRef={initInputRef ? initInputRef : inputRef}
      value={value}
      required={required}
      fullWidth={!width && fullWidth}
      error={error}
      helperText={formColWithHelperText ? undefined : error ? errorHelperText : helperText}
      slotProps={slotProps}
      disabled={disabled}
      style={style}
      select={select}
      multiline={multiline}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}

export default PFormTextField;
