import React, { useCallback, useId, useLayoutEffect, useRef } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { FormControlLabel, Checkbox, Typography, ButtonBaseActions } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { FormCheckboxProps as Props, FormCheckboxDefaultProps, FormCheckboxCommands } from './FormCheckbox.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import { nextTick } from '../../@util';
import { FormItemValue } from '../../@types';

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
      checked: initChecked,
      inputRef: initInputRef,
      action: initAction,
      readOnly,
      disabled: initDisabled,
      text,
      error: initError,
      helperText: initHelperText,
      value: initValue,
      uncheckedValue: initUncheckedValue,
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
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      fullWidth: formFullWidth,
      onAddValueItem,
      onRemoveValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
    } = useFormState();

    // State - FormState ------------------------------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [focused] = useAutoUpdateState<Props['focused']>(initFocused || formFocused);
    const [fullWidth] = useAutoUpdateState<Props['fullWidth']>(initFullWidth == null ? formFullWidth : initFullWidth);

    // Ref -------------------------------------------------------------------------------------------------------------

    const inputRef = useRef<HTMLInputElement>(null);
    const actionRef = useRef<ButtonBaseActions>(null);

    // ResizeDetector --------------------------------------------------------------------------------------------------

    const { width, height, ref: resizeDetectorRef } = useResizeDetector();

    // State -----------------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateState<Props['value']>(initValue);
    const [uncheckedValue, setUncheckedValue] = useAutoUpdateState<Props['uncheckedValue']>(initUncheckedValue);
    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateState<Props['helperText']>(initHelperText);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);

    // State - checked -------------------------------------------------------------------------------------------------

    const [checked, setChecked] = useAutoUpdateState<Props['checked']>(initChecked);

    useFirstSkipEffect(() => {
      if (error) validate(checked);
      if (onChange) onChange(!!checked);
      onValueChange(name, !!checked);
    }, [checked]);

    // State - style ---------------------------------------------------------------------------------------------------

    const [style] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        return { width: fullWidth ? '100%' : width || 100, paddingLeft: 3, ...initStyle };
      }, [initStyle, fullWidth, width])
    );

    // Function - focus ------------------------------------------------------------------------------------------------

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

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      function (checked: Props['checked']) {
        if (onValidate) {
          const onValidateResult = onValidate(checked);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorHelperText(false, initHelperText);

        return true;
      },
      [onValidate, initHelperText]
    );

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback(function (error: Props['error'], helperText: Props['helperText']) {
      setError(error);
      setHelperText(helperText);
    }, []);

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastChecked: Props['checked'] = checked;
      let lastValue: FormItemValue = value;
      let lastUncheckedValue: FormItemValue = uncheckedValue;
      let lastDisabled = !!disabled;

      const commands: FormCheckboxCommands = {
        getType: () => 'FormCheckbox',
        getName: () => name,
        getReset: () => initChecked,
        reset: () => {
          lastChecked = initChecked;
          setChecked(lastChecked);
        },
        getValue: () => lastValue,
        setValue: (value) => {
          lastValue = value;
          setValue(value);
        },
        getUncheckedValue: () => lastUncheckedValue,
        setUncheckedValue: (uncheckedValue) => {
          lastUncheckedValue = uncheckedValue;
          setUncheckedValue(lastUncheckedValue);
        },
        getChecked: () => !!lastChecked,
        setChecked: (checked: boolean) => {
          lastChecked = checked;
          setChecked(lastChecked);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled: boolean) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(checked),
        setError: (error: Props['error'], helperText: Props['helperText']) =>
          setErrorHelperText(error, error ? helperText : initHelperText),
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
      ref,
      onAddValueItem,
      onRemoveValueItem,
      focus,
      name,
      initChecked,
      checked,
      value,
      uncheckedValue,
      exceptValue,
      disabled,
      validate,
      initHelperText,
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          setChecked(checked);
          nextTick(() => {
            onValueChangeByUser(name, checked);
            onRequestSearchSubmit(name, checked);
          });
        }
      },
      [readOnly, name, onValueChangeByUser, onRequestSearchSubmit]
    );

    // Render ----------------------------------------------------------------------------------------------------------

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
        helperText={helperText}
        helperTextProps={{ style: { marginLeft: 2 } }}
        style={style}
        sx={sx}
        controlHeight={height || (size === 'small' ? 35 : 39)}
        controlVerticalCenter
        control={
          <FormControlLabel
            ref={resizeDetectorRef}
            control={
              <Checkbox
                name={name}
                color={color}
                size={size}
                inputRef={initInputRef ? initInputRef : inputRef}
                action={initAction ? initAction : actionRef}
                checked={!!checked}
                checkedIcon={<CheckBox color={error ? 'error' : undefined} />}
                icon={<CheckBoxOutlineBlank color={error ? 'error' : undefined} />}
                onChange={handleChange}
                disabled={disabled || readOnly}
                {...props}
              />
            }
            label={
              <Typography color={error ? 'error' : undefined} whiteSpace='nowrap'>
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
FormCheckbox.defaultProps = FormCheckboxDefaultProps;

export default FormCheckbox;
