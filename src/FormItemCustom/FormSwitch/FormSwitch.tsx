import React, { useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { FormControlLabel, Switch } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState } from '@pdg/react-hook';
import { ifUndefined } from '@pdg/compare';
import { FormSwitchProps as Props, FormSwitchCommands } from './FormSwitch.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';

const FormSwitch = React.forwardRef<FormSwitchCommands, Props>(
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
      disabled: initDisabled,
      error: initError,
      helperText,
      value: initValue,
      data: initData,
      exceptValue,
      onChange,
      onValidate,
      onValue,
      //----------------------------------------------------------------------------------------------------------------
      switchLabel,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style,
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

    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/

    const [focused, setFocused] = useAutoUpdateState<Props['focused']>(initFocused == null ? formFocused : initFocused);

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const inputRef = useRef<HTMLInputElement>(undefined);

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
      function (value: boolean) {
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
      [onValidate, setErrorErrorHelperText]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      (value: Props['value']) => {
        const finalValue = value || false;
        return onValue ? onValue(finalValue) : finalValue;
      },
      [onValue]
    );

    const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);

    const updateValue = useCallback(
      (newValue: Props['value']) => {
        const finalValue = _setValue(newValue);

        if (error) validate(finalValue);
        if (onChange) onChange(finalValue);
        onValueChange(name, finalValue);

        return finalValue;
      },
      [_setValue, error, name, onChange, onValueChange, validate]
    );

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
      const commands: FormSwitchCommands = {
        getType: () => 'FormSwitch',
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
      dataRef,
      disabledRef,
      exceptValue,
      focus,
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
      updateValue,
      validate,
      valueRef,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.SyntheticEvent, checked: boolean) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          const finalValue = updateValue(checked);
          setTimeout(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [readOnly, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const switchControl = useMemo(
      () => (
        <Switch
          size={size}
          name={name}
          checked={value}
          color={color}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setFocused(initFocused || true)}
          onBlur={() => setFocused(initFocused || false)}
        />
      ),
      [color, disabled, handleChange, initFocused, name, setFocused, size, value]
    );

    return (
      <FormItemBase
        variant={variant}
        size={size}
        color={color}
        focused={focused}
        className={classNames(className, 'FormValueItem', 'FormSwitch')}
        labelIcon={labelIcon}
        label={label}
        error={error}
        fullWidth={false}
        helperText={error ? errorHelperText : helperText}
        helperTextProps={{ style: { marginLeft: 5 } }}
        style={style}
        sx={sx}
        hidden={hidden}
        autoSize
        controlHeight={size === 'small' ? 24 : 38}
        controlVerticalCenter
        control={
          switchLabel ? (
            <FormControlLabel control={switchControl} label={switchLabel} disabled={disabled} />
          ) : (
            switchControl
          )
        }
      />
    );
  }
);

FormSwitch.displayName = 'FormSwitch';

export default FormSwitch;
