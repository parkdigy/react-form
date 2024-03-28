import React, { useId, useRef, useState, useEffect, useCallback, ReactNode, useLayoutEffect, useMemo } from 'react';
import classNames from 'classnames';
import { IconButton, InputAdornment, InputProps, TextField } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, nextTick, notEmpty } from '@pdg/util';
import {
  FormTextFieldProps,
  FormTextFieldDefaultProps,
  FormTextFieldCommands,
  FormTextFieldValue,
} from './FormTextField.types';
import { useFormState } from '../../FormContext';
import './FormTextField.scss';
import { PdgIcon } from '@pdg/react-component';

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
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<FormTextFieldProps['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<FormTextFieldProps['helperText']>();
    const [showClear, setShowClear] = useState<boolean>(false);
    const [disabled, setDisabled] = useAutoUpdateState<FormTextFieldProps['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );
    const [hidden, setHidden] = useAutoUpdateState<FormTextFieldProps['hidden']>(initHidden);
    const [data, setData] = useAutoUpdateState<FormTextFieldProps['data']>(initData);

    /********************************************************************************************************************
     * Memo - muiInputLabelProps
     * ******************************************************************************************************************/

    const muiInputLabelProps = useMemo(() => {
      if (labelShrink || placeholder) {
        return {
          ...initMuiInputLabelProps,
          shrink: true,
        };
      } else {
        return initMuiInputLabelProps;
      }
    }, [initMuiInputLabelProps, labelShrink, placeholder]);

    /********************************************************************************************************************
     * Memo - inputProps
     * ******************************************************************************************************************/

    const inputProps = useMemo(() => {
      if (readOnly != null || maxLength != null) {
        const finalInputProps = {
          ...initInputProps,
          readOnly: readOnly,
          maxLength: maxLength,
        };

        if (readOnly) {
          finalInputProps.tabIndex = -1;
          finalInputProps.className = classNames(finalInputProps.className, 'Mui-disabled');
        } else {
          finalInputProps.tabIndex = tabIndex;
        }

        return finalInputProps;
      } else {
        return initInputProps;
      }
    }, [initInputProps, readOnly, tabIndex, maxLength]);

    /********************************************************************************************************************
     * Memo - style
     * ******************************************************************************************************************/

    const style = useMemo(() => {
      const newStyle = { ...initStyle };
      if (width != null) {
        newStyle.width = width;
      }
      if (hidden) {
        newStyle.display = 'none';
      }
      return newStyle;
    }, [initStyle, width, hidden]);

    /********************************************************************************************************************
     * Memo - label
     * ******************************************************************************************************************/

    const label = useMemo(() => {
      return labelIcon ? (
        <>
          <PdgIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PdgIcon>
          <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
        </>
      ) : (
        initLabel
      );
    }, [initLabel, labelIcon]);

    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      function (value: FormTextFieldProps['value']): FormTextFieldProps['value'] {
        return onValue ? onValue(value) : value;
      },
      [onValue]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const [value, setValue] = useAutoUpdateState<FormTextFieldProps['value']>(initValue, getFinalValue);

    useEffect(() => {
      setShowClear(clear ? notEmpty(value) : false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      if (!noFormValueItem) {
        onValueChange(name, value);
      }
    }, [value]);

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
     * Memo - muiInputProps
     * ******************************************************************************************************************/

    const muiInputProps = useMemo(() => {
      const muiInputProps: InputProps = { ...initMuiInputProps };
      if (startAdornment || icon || muiInputProps.startAdornment) {
        muiInputProps.startAdornment = (
          <>
            {icon && (
              <InputAdornment position='start'>
                <PdgIcon fontSize='small'>{icon}</PdgIcon>
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
                    const finalValue = getFinalValue('');
                    setValue(finalValue);
                    focus();
                    if (!noFormValueItem) {
                      nextTick(() => {
                        onValueChangeByUser(name, finalValue);
                        onRequestSearchSubmit(name, finalValue);
                      });
                    }
                  }}
                >
                  <PdgIcon fontSize='inherit'>ClearRounded</PdgIcon>
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
      getFinalValue,
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
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      if (ref || (!noFormValueItem && onAddValueItem)) {
        let lastValue = value;
        let lastData = data;
        let lastDisabled = !!disabled;
        let lastHidden = !!hidden;

        const commands: FormTextFieldCommands = {
          getType: () => 'default',
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
          isHidden: () => lastHidden,
          setHidden: (hidden) => {
            lastHidden = hidden;
            setHidden(hidden);
          },
          focus,
          focusValidate: focus,
          validate: () => validate(lastValue),
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
      name,
      initValue,
      value,
      data,
      getFinalValue,
      exceptValue,
      disabled,
      focus,
      validate,
      ref,
      noFormValueItem,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setValue,
      setDisabled,
      setErrorErrorHelperText,
      setData,
      hidden,
      setHidden,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const finalValue = getFinalValue(e.target.value);
        setValue(finalValue);
        if (!noFormValueItem) {
          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            if (select) {
              onRequestSearchSubmit(name, finalValue);
            }
          });
        }
      },
      [getFinalValue, setValue, noFormValueItem, onValueChangeByUser, name, select, onRequestSearchSubmit]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (error) validate(value);
        if (onBlur) onBlur(e);
      },
      [error, value, validate, onBlur]
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
          onRequestSearchSubmit(name, value);
        }
        if (onKeyDown) onKeyDown(e);
      },
      [select, multiline, disableReturnKey, noFormValueItem, onKeyDown, onRequestSearchSubmit, name, value]
    );

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
        label={label}
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

FormTextField.displayName = 'FormText';
FormTextField.defaultProps = FormTextFieldDefaultProps;

export default FormTextField;
