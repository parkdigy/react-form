import React, { useId, useRef, useState, useCallback, ReactNode, useLayoutEffect, useMemo } from 'react';
import classNames from 'classnames';
import { IconButton, InputAdornment, InputProps, TextField } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, ifUndefined, nextTick, notEmpty } from '@pdg/util';
import { FormTextFieldProps, FormTextFieldCommands, FormTextFieldValue } from './FormTextField.types';
import { useFormState } from '../../FormContext';
import { PdgIcon } from '@pdg/react-component';
import './FormTextField.scss';
import { FormTextProps } from '../FormText';

interface WithForwardRefType<T = FormTextFieldValue, AllowUndefinedValue extends boolean = true>
  extends React.FC<FormTextFieldProps<T, AllowUndefinedValue>> {
  <T = FormTextFieldValue, AllowUndefinedValue extends boolean = true>(
    props: FormTextFieldProps<T, AllowUndefinedValue> &
      React.RefAttributes<FormTextFieldCommands<T, AllowUndefinedValue>>
  ): ReturnType<React.FC<FormTextFieldProps<T, AllowUndefinedValue>>>;
}

const FormTextField: WithForwardRefType = React.forwardRef<FormTextFieldCommands, FormTextFieldProps>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      labelShrink: initLabelShrink,
      fullWidth: initFullWidth,
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
      InputProps: initMuiInputProps,
      InputLabelProps: initMuiInputLabelProps,
      inputProps: initInputProps,
      inputRef: initInputRef,
      select,
      SelectProps,
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
    },
    ref
  ) => {
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
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<FormTextFieldProps['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<FormTextFieldProps['helperText']>();

    const [dataRef, , setData] = useAutoUpdateRefState<FormTextFieldProps['data']>(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState<FormTextFieldProps['disabled']>(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState<FormTextFieldProps['hidden']>(initHidden);

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
      (value: FormTextFieldValue) => {
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
     * State - value
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      function (newValue: FormTextFieldProps['value']): FormTextFieldProps['value'] {
        return onValue ? onValue(newValue) : newValue;
      },
      [onValue]
    );

    const [valueRef, value, setValue] = useAutoUpdateRefState<FormTextFieldProps['value']>(initValue, getFinalValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      if (!noFormValueItem) {
        onValueChange(name, value);
      }
    }, [value]);

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
     * Memo - muiInputProps
     * ******************************************************************************************************************/

    const muiInputProps = useMemo(() => {
      const muiInputProps: InputProps = { ...initMuiInputProps };
      if (startAdornment || icon || muiInputProps.startAdornment) {
        muiInputProps.startAdornment = (
          <>
            {icon && (
              <InputAdornment position='start'>
                <PdgIcon size='small'>{icon}</PdgIcon>
              </InputAdornment>
            )}
            {startAdornment && <InputAdornment position='start'>{startAdornment}</InputAdornment>}
            {muiInputProps.startAdornment}
          </>
        );
      }
      if (endAdornment || muiInputProps.endAdornment || (clear && !readOnly && !disabled)) {
        muiInputProps.endAdornment = (
          <>
            {clear && !readOnly && !disabled && (
              <InputAdornment className={classNames('clear-icon-button-wrap', showClear && 'show')} position='end'>
                <IconButton
                  className={'clear-icon-button'}
                  size='small'
                  tabIndex={-1}
                  onClick={() => {
                    const finalValue = setValue('');
                    focus();
                    if (!noFormValueItem) {
                      nextTick(() => {
                        onValueChangeByUser(name, finalValue);
                        onRequestSearchSubmit(name, finalValue);
                      });
                    }
                  }}
                >
                  <PdgIcon size='inherit'>ClearRounded</PdgIcon>
                </IconButton>
              </InputAdornment>
            )}
            {muiInputProps.endAdornment}
            {endAdornment && <InputAdornment position='end'>{endAdornment}</InputAdornment>}
          </>
        );
      }

      return muiInputProps;
    }, [
      clear,
      disabled,
      endAdornment,
      focus,
      icon,
      initMuiInputProps,
      name,
      noFormValueItem,
      onRequestSearchSubmit,
      onValueChangeByUser,
      readOnly,
      setValue,
      showClear,
      startAdornment,
    ]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      if (ref || (!noFormValueItem && onAddValueItem)) {
        const commands: FormTextFieldCommands = {
          getType: () => 'default',
          getName: () => name,
          getReset: () => getFinalValue(initValue),
          reset: () => setValue(initValue),
          getValue: () => valueRef.current,
          setValue,
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
        };

        if (ref) {
          if (typeof ref === 'function') {
            ref(commands);
          } else {
            ref.current = commands;
          }
        }

        if (!noFormValueItem && onAddValueItem) onAddValueItem(id, commands);

        return () => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(null);
            } else {
              ref.current = null;
            }
          }

          if (!noFormValueItem && onRemoveValueItem) onRemoveValueItem(id);
        };
      }
    }, [
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      getFinalValue,
      hiddenRef,
      id,
      initValue,
      name,
      noFormValueItem,
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

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const finalValue = setValue(e.target.value);
        if (!noFormValueItem) {
          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            if (select) {
              onRequestSearchSubmit(name, finalValue);
            }
          });
        }
      },
      [setValue, noFormValueItem, onValueChangeByUser, name, select, onRequestSearchSubmit]
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
        if (
          ['Enter'].includes(e.key) &&
          !select &&
          (!multiline || (multiline && disableReturnKey)) &&
          !noFormValueItem
        ) {
          e.preventDefault();
          e.stopPropagation();
          onRequestSearchSubmit(name, valueRef.current);
        }
        if (onKeyDown) onKeyDown(e);
      },
      [select, multiline, disableReturnKey, noFormValueItem, onKeyDown, onRequestSearchSubmit, name, valueRef]
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

    // muiInputLabelProps
    const muiInputLabelProps =
      labelShrink || placeholder
        ? {
            ...initMuiInputLabelProps,
            shrink: true,
          }
        : initMuiInputLabelProps;

    // inputProps
    let inputProps: FormTextProps['inputProps'] = initInputProps;
    if ((!initInputProps?.className?.includes('FormTag-Input') && readOnly != null) || maxLength != null) {
      inputProps = {
        ...initInputProps,
        readOnly: readOnly,
        maxLength: maxLength,
      };

      if (readOnly) {
        inputProps.tabIndex = -1;
        inputProps.className = classNames(inputProps.className, 'Mui-disabled');
      } else {
        inputProps.tabIndex = tabIndex;
      }
    }

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
              <PdgIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PdgIcon>
              <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
            </>
          ) : (
            initLabel
          )
        }
        placeholder={placeholder}
        className={classNames(className, 'FormValueItem', 'FormTextField', `variant-${variant}`)}
        inputRef={initInputRef ? initInputRef : inputRef}
        value={value}
        required={required}
        fullWidth={!width && fullWidth}
        error={error}
        helperText={formColWithHelperText ? undefined : error ? errorHelperText : helperText}
        FormHelperTextProps={{ component: 'div' } as any}
        disabled={disabled}
        InputProps={muiInputProps}
        InputLabelProps={muiInputLabelProps}
        inputProps={initInputProps?.className?.includes('FormTag-Input') ? initInputProps : inputProps}
        style={style}
        select={select}
        SelectProps={SelectProps}
        multiline={multiline}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    );
  }
);

FormTextField.displayName = 'FormTextField';

export default FormTextField;
