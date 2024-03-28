import React, { useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { FormControlLabel, Switch } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { equal, nextTick } from '@pdg/util';
import { FormSwitchProps as Props, FormSwitchDefaultProps, FormSwitchCommands } from './FormSwitch.types';
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

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);

    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/

    const [focused, setFocused] = useAutoUpdateState<Props['focused']>(initFocused == null ? formFocused : initFocused);

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const inputRef = useRef<HTMLInputElement>();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );
    const [hidden, setHidden] = useAutoUpdateState<Props['hidden']>(initHidden);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);

    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      (value: boolean): boolean => {
        return onValue ? onValue(value) : value;
      },
      [onValue]
    );

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

    const [value, setValue] = useState<boolean>(() => getFinalValue(initValue || false));

    const changeValue = useCallback(
      (newValue: boolean) => {
        if (!equal(value, newValue)) {
          setValue(newValue);
          nextTick(() => {
            if (error) validate(newValue);
            if (onChange) onChange(newValue);
            onValueChange(name, newValue);
          });
        }
      },
      [error, name, onChange, onValueChange, validate, value]
    );

    useFirstSkipEffect(() => {
      changeValue(getFinalValue(initValue || false));
    }, [initValue]);

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
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;
      let lastHidden = !!hidden;

      const commands: FormSwitchCommands = {
        getType: () => 'FormSwitch',
        getName: () => name,
        getReset: () => getFinalValue(initValue || false),
        reset: () => {
          lastValue = getFinalValue(initValue || false);
          changeValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value: boolean) => {
          lastValue = getFinalValue(value);
          changeValue(lastValue);
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
        validate: () => validate(value),
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
      name,
      initValue,
      value,
      getFinalValue,
      exceptValue,
      disabled,
      focus,
      validate,
      ref,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
      hidden,
      setHidden,
      changeValue,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.SyntheticEvent, checked: boolean) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          const finalValue = getFinalValue(checked);
          changeValue(finalValue);
          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [readOnly, getFinalValue, changeValue, onValueChangeByUser, name, onRequestSearchSubmit]
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
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setFocused(initFocused || true)}
          onBlur={() => setFocused(initFocused || false)}
        />
      ),
      [disabled, handleChange, initFocused, name, setFocused, size, value]
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
        controlHeight={size === 'small' ? 21 : 26}
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
FormSwitch.defaultProps = FormSwitchDefaultProps;

export default FormSwitch;
