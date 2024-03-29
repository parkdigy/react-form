import React, { useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { FormControlLabel, Checkbox, Typography, ButtonBaseActions, useTheme } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import {
  FormCheckboxProps as Props,
  FormCheckboxDefaultProps,
  FormCheckboxCommands,
  FormCheckboxValue,
} from './FormCheckbox.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import { nextTick } from '@pdg/util';

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
      hidden: initHidden,
      text,
      error: initError,
      helperText,
      value: initValue,
      data: initData,
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

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const focused = useMemo(() => (initFocused == null ? formFocused : initFocused), [initFocused, formFocused]);
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const inputRef = useRef<HTMLInputElement>(null);
    const actionRef = useRef<ButtonBaseActions>(null);
    const labelRef = useRef<HTMLLabelElement>(null);

    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/

    const { width, height } = useResizeDetector({
      targetRef: labelRef,
      handleWidth: true,
      handleHeight: true,
    });

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [value, setValue] = useAutoUpdateState<Props['value']>(initValue);
    const [uncheckedValue, setUncheckedValue] = useAutoUpdateState<Props['uncheckedValue']>(initUncheckedValue);
    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );
    const [hidden, setHidden] = useAutoUpdateState<Props['hidden']>(initHidden);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);

    /********************************************************************************************************************
     * State - checked
     * ******************************************************************************************************************/

    const [checked, setChecked] = useAutoUpdateState<boolean>(!!initChecked);

    useFirstSkipEffect(() => {
      if (error) validate(checked);
      if (onChange) onChange(checked);
      onValueChange(name, checked);
    }, [checked]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const style = useMemo(
      () => ({ width: fullWidth ? '100%' : width || 100, paddingLeft: 3, ...initStyle }),
      [initStyle, fullWidth, width]
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
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      let lastChecked: boolean = checked;
      let lastValue: FormCheckboxValue = value == null ? 1 : value;
      let lastData = data;
      let lastUncheckedValue: FormCheckboxValue = uncheckedValue == null ? 0 : uncheckedValue;
      let lastDisabled = !!disabled;
      let lastHidden = !!hidden;

      const commands: FormCheckboxCommands = {
        getType: () => 'FormCheckbox',
        getName: () => name,
        getReset: () => !!initChecked,
        reset: () => {
          lastChecked = !!initChecked;
          setChecked(lastChecked);
        },
        getValue: () => lastValue,
        setValue: (value) => {
          lastValue = value;
          setValue(value);
        },
        getData: () => lastData,
        setData: (data) => {
          lastData = data;
          setData(data);
        },
        getUncheckedValue: () => lastUncheckedValue,
        setUncheckedValue: (uncheckedValue) => {
          lastUncheckedValue = uncheckedValue;
          setUncheckedValue(lastUncheckedValue);
        },
        getChecked: () => lastChecked,
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
        isHidden: () => lastHidden,
        setHidden: (hidden) => {
          lastHidden = hidden;
          setHidden(hidden);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(checked),
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
      id,
      setChecked,
      setValue,
      setUncheckedValue,
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
      hidden,
      setHidden,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

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
      [readOnly, setChecked, onValueChangeByUser, name, onRequestSearchSubmit]
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
        style={style}
        sx={sx}
        hidden={hidden}
        autoSize
        controlHeight={height || (size === 'small' ? 35 : 39)}
        controlVerticalCenter
        control={
          <FormControlLabel
            ref={labelRef}
            control={
              <Checkbox
                name={name}
                color={color}
                size={size}
                inputRef={initInputRef ? initInputRef : inputRef}
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
FormCheckbox.defaultProps = FormCheckboxDefaultProps;

export default FormCheckbox;
