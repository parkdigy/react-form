import React, { useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { FormControlLabel, Checkbox, Typography, ButtonBaseActions, useTheme } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { useAutoUpdateRefState, useAutoUpdateState } from '@pdg/react-hook';
import { FormCheckboxProps as Props, FormCheckboxCommands, FormCheckboxValue } from './FormCheckbox.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import { ifUndefined, nextTick } from '@pdg/util';

const FormCheckbox = React.forwardRef<FormCheckboxCommands, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      fullWidth: initFullWidth,
      //----------------------------------------------------------------------------------------------------------------
      name,
      labelIcon,
      label,
      checked: initChecked = false,
      inputRef: initInputRef,
      action: initAction,
      readOnly,
      disabled: initDisabled,
      hidden: initHidden,
      text,
      error: initError,
      helperText,
      value: initValue = 1,
      data: initData,
      uncheckedValue: initUncheckedValue = 0,
      exceptValue,
      onChange,
      onValidate,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();

    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      fullWidth: formFullWidth,
      disabled: formDisabled,
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
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const inputRef = useRef<HTMLInputElement>(null);
    const actionRef = useRef<ButtonBaseActions>(null);

    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/

    const { ref: labelRef, width, height } = useResizeDetector();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);
    const [uncheckedValueRef, , setUncheckedValue] = useAutoUpdateRefState<FormCheckboxValue, Props['uncheckedValue']>(
      initUncheckedValue,
      useCallback((newUncheckedValue) => (newUncheckedValue == null ? 0 : newUncheckedValue), [])
    );
    const [valueRef, , setValue] = useAutoUpdateRefState<FormCheckboxValue, Props['value']>(
      initValue,
      useCallback((newValue) => (newValue == null ? 0 : newValue), [])
    );

    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/

    const setErrorErrorHelperText = useCallback(
      function (error: Props['error'], errorHelperText: Props['helperText']) {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/

    const validate = useCallback(
      function (checked: boolean) {
        if (onValidate) {
          const onValidateResult = onValidate(checked);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorErrorHelperText(false, undefined);

        return true;
      },
      [onValidate, setErrorErrorHelperText]
    );

    /********************************************************************************************************************
     * State - checked
     * ******************************************************************************************************************/

    const [checkedRef, checked, _setChecked] = useAutoUpdateRefState<boolean, Props['checked']>(
      initChecked,
      useCallback((newChecked) => !!newChecked, [])
    );

    const updateChecked = useCallback(
      (newChecked: boolean, notFireOnChange = false) => {
        const finalChecked = _setChecked(newChecked);

        if (error) validate(finalChecked);
        if (!notFireOnChange && onChange) onChange(finalChecked);
        onValueChange(name, finalChecked);

        return finalChecked;
      },
      [_setChecked, error, name, onChange, onValueChange, validate]
    );

    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/

    const focus = useCallback(
      function () {
        if (initInputRef) {
          initInputRef.current?.focus();
        } else {
          inputRef.current?.focus();
        }
        if (initAction) {
          initAction.current?.focusVisible();
        } else {
          actionRef.current?.focusVisible();
        }
      },
      [initInputRef, inputRef, initAction, actionRef]
    );

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      const commands: FormCheckboxCommands = {
        getType: () => 'FormCheckbox',
        getName: () => name,
        getReset: () => initChecked,
        reset: () => updateChecked(initChecked),
        getValue: () => valueRef.current,
        setValue,
        getData: () => dataRef.current,
        setData,
        getUncheckedValue: () => uncheckedValueRef.current,
        setUncheckedValue,
        getChecked: () => checkedRef.current,
        setChecked: updateChecked,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(checkedRef.current),
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
      checkedRef,
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      hiddenRef,
      id,
      initChecked,
      name,
      onAddValueItem,
      onRemoveValueItem,
      ref,
      setData,
      setDisabled,
      setErrorErrorHelperText,
      setHidden,
      setUncheckedValue,
      setValue,
      uncheckedValueRef,
      updateChecked,
      validate,
      valueRef,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          updateChecked(checked);
          nextTick(() => {
            onValueChangeByUser(name, checked);
            onRequestSearchSubmit(name, checked);
          });
        }
      },
      [readOnly, updateChecked, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormItemBase
        variant={variant}
        size={size}
        color={color}
        focused={focused}
        className={classNames(className, 'FormValueItem', 'FormCheckbox')}
        labelIcon={labelIcon}
        label={label}
        error={error}
        fullWidth={fullWidth}
        helperText={error ? errorHelperText : helperText}
        helperTextProps={{ style: { marginLeft: 2 } }}
        style={{ width: fullWidth ? '100%' : width || 100, paddingLeft: 3, ...initStyle }}
        sx={sx}
        hidden={hidden}
        autoSize
        controlHeight={height || (size === 'small' ? 35 : 39)}
        controlVerticalCenter
        control={
          <FormControlLabel
            ref={(ref) => {
              labelRef.current = ref;
            }}
            control={
              <Checkbox
                name={name}
                color={color}
                size={size}
                slotProps={{ input: { ref: initInputRef ? initInputRef : inputRef } }}
                action={initAction ? initAction : actionRef}
                checked={checked}
                checkedIcon={<CheckBox color={error ? 'error' : undefined} />}
                icon={<CheckBoxOutlineBlank color={error ? 'error' : undefined} />}
                onChange={handleChange}
                disabled={disabled || readOnly}
                {...props}
              />
            }
            label={
              <Typography
                color={error ? 'error' : readOnly || disabled ? theme.palette.text.disabled : undefined}
                whiteSpace='nowrap'
              >
                {text}
              </Typography>
            }
          />
        }
      />
    );
  }
);

FormCheckbox.displayName = 'FormCheckbox';

export default FormCheckbox;
