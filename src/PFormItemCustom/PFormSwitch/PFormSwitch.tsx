import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { FormControlLabel, Switch } from '@mui/material';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
import { PFormSwitchProps as Props, PFormSwitchCommands } from './PFormSwitch.types';
import PFormItemBase from '../PFormItemBase';
import { useFormState } from '../../PFormContext';

const PFormSwitch = ({
  ref,
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
    disabled: formDisabled,
    onAddValueItem,
    onRemoveValueItem,
    onValueChange,
    onValueChangeByUser,
    onRequestSearchSubmit,
  } = useFormState<boolean, false>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;

  /********************************************************************************************************************
   * State - focused
   * ******************************************************************************************************************/

  const finalInitFocused = initFocused ?? formFocused;

  const [focused, setFocused] = useState(finalInitFocused);
  useChanged(finalInitFocused) && setFocused(finalInitFocused);

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const inputRef = useRef<HTMLInputElement>(undefined);

  /********************************************************************************************************************
   * State - error
   * ******************************************************************************************************************/

  const [error, setError] = useState(initError);
  useChanged(initError) && setError(initError);

  /********************************************************************************************************************
   * State - data
   * ******************************************************************************************************************/

  const [data, setData] = useState(initData);
  useChanged(initData) && setData(initData);

  const dataRef = useAutoUpdateRef(data);

  /********************************************************************************************************************
   * State - disabled
   * ******************************************************************************************************************/

  const finalInitDisabled = initDisabled ?? formDisabled;

  const [disabled, setDisabled] = useState(finalInitDisabled);
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);

  /********************************************************************************************************************
   * State - hidden
   * ******************************************************************************************************************/

  const [hidden, setHidden] = useState(initHidden);
  useChanged(initHidden) && setHidden(initHidden);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

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

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value']) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, getFinalValue, name, onChange, onValueChange, validate, valueRef]
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

  const commands = useMemo<PFormSwitchCommands>(
    () => ({
      getType: () => 'PFormSwitch',
      getName: () => name,
      getReset: () => getFinalValue(initValue),
      reset: () => updateValue(initValue),
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
      setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
        setErrorErrorHelperText(error, error ? errorHelperText : undefined),
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      getFinalValue,
      hidden,
      initValue,
      name,
      setErrorErrorHelperText,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    useCallback((commands: PFormSwitchCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

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
    <PFormItemBase
      variant={variant}
      size={size}
      color={color}
      focused={focused}
      className={classNames(className, 'PFormValueItem', 'PFormSwitch')}
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
};

export default PFormSwitch;
