import React, { useId, useRef, useState, useCallback, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { Box, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useForwardRef } from '@pdg/react-hook';
import { empty, ifUndefined, notEmpty } from '@pdg/compare';
import { PFormTextFieldProps, PFormTextFieldCommands, PFormTextFieldValue } from './PFormTextField.types';
import { useFormState } from '../../PFormContext';
import { PIcon } from '@pdg/react-component';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';
import './PFormTextField.scss';

type inputSlotProps = StandardInputProps;

function PFormTextField<T = PFormTextFieldValue, AllowUndefinedValue extends boolean = true>({
  ref,
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  labelShrink: initLabelShrink,
  fullWidth: initFullWidth,
  submitWhenReturnKey: initSubmitWhenReturnKey,
  //----------------------------------------------------------------------------------------------------------------
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
  //----------------------------------------------------------------------------------------------------------------
  onChange,
  onValue,
  onValidate,
  onBlur,
  onKeyDown,
  //----------------------------------------------------------------------------------------------------------------
  className,
  style: initStyle,
  //----------------------------------------------------------------------------------------------------------------
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
   * Ref
   * ******************************************************************************************************************/

  const inputRef = useRef<HTMLInputElement>(null);

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

  const variant = ifUndefined(initVariant, formVariant);
  const size = ifUndefined(initSize, formSize);
  const color = ifUndefined(initColor, formColor);
  const focused = ifUndefined(initFocused, formFocused);
  const labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
  const fullWidth = ifUndefined(initFullWidth, formFullWidth);
  const submitWhenReturnKey = ifUndefined(initSubmitWhenReturnKey, formSubmitWhenReturnKey);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [error, setError] = useAutoUpdateState<PFormTextFieldProps['error']>(initError);
  const [errorHelperText, setErrorHelperText] = useState<PFormTextFieldProps['helperText']>();

  const [dataRef, , setData] = useAutoUpdateRefState<PFormTextFieldProps['data']>(initData);
  const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState<PFormTextFieldProps['disabled']>(
    useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
  );
  const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState<PFormTextFieldProps['hidden']>(initHidden);

  /********************************************************************************************************************
   * Function - setErrorErrorHelperText
   * ******************************************************************************************************************/

  const setErrorErrorHelperText = useCallback(
    function (error: boolean, errorHelperText: ReactNode) {
      setError(error);
      setErrorHelperText(errorHelperText);
    },
    [setError]
  );

  /********************************************************************************************************************
   * Function - validate
   * ******************************************************************************************************************/

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
      if (onValidate) {
        const validateResult = onValidate(value);
        if (validateResult != null && validateResult !== true) {
          setErrorErrorHelperText(true, validateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [required, validPattern, invalidPattern, onValidate, setErrorErrorHelperText]
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

  const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);

  const updateValue = useCallback(
    (newValue: PFormTextFieldProps['value']) => {
      const finalValue = _setValue(newValue);

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      if (!noFormValueItem) {
        onValueChange(name, finalValue);
      }

      return finalValue;
    },
    [_setValue, error, name, noFormValueItem, onChange, onValueChange, validate]
  );

  /********************************************************************************************************************
   * Variables
   * ******************************************************************************************************************/

  const showClear = clear ? notEmpty(value) : false;

  /********************************************************************************************************************
   * Function - focus
   * ******************************************************************************************************************/

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
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo(
    (): Commands => ({
      getType: () => 'default',
      getName: () => name,
      getReset: () => getFinalValue(initValue),
      reset: () => updateValue(initValue),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabledRef.current,
      setDisabled,
      isHidden: () => !!hiddenRef.current,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: (error: boolean, errorText: ReactNode | undefined) =>
        setErrorErrorHelperText(error, error ? errorText : undefined),
    }),
    [
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      getFinalValue,
      hiddenRef,
      initValue,
      name,
      setData,
      setDisabled,
      setErrorErrorHelperText,
      setHidden,
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

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (error) validate(valueRef.current);
      if (onBlur) onBlur(e);
    },
    [error, validate, valueRef, onBlur]
  );

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
      if (onKeyDown) onKeyDown(e);
    },
    [
      select,
      multiline,
      disableReturnKey,
      noFormValueItem,
      onKeyDown,
      submitWhenReturnKey,
      onRequestSearchSubmit,
      name,
      valueRef,
      onRequestSubmit,
    ]
  );

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  // style
  const style = { ...initStyle };
  if (width != null) {
    style.width = width;
  }
  if (hidden) {
    style.display = 'none';
  }

  /********************************************************************************************************************
   * Memo - slotProps
   * ******************************************************************************************************************/

  const inputSlotProps: inputSlotProps = useMemo(() => {
    const newProps: inputSlotProps = { ...initSlotProps?.input };

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
