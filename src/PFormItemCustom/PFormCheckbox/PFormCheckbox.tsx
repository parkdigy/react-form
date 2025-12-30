import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { FormControlLabel, Checkbox, Typography, ButtonBaseActions, useTheme } from '@mui/material';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { useAutoUpdateRef, useFirstSkipChanged, useForwardRef } from '@pdg/react-hook';
import { PFormCheckboxProps as Props, PFormCheckboxCommands, PFormCheckboxValue } from './PFormCheckbox.types';
import PFormItemBase from '../PFormItemBase';
import { useFormState } from '../../PFormContext';

const PFormCheckbox = ({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  fullWidth: initFullWidth,
  /********************************************************************************************************************/
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
  /********************************************************************************************************************/
  className,
  style: initStyle,
  sx,
  ...props
}: Props) => {
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
  } = useFormState<PFormCheckboxValue, false>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initCheckedRef = useAutoUpdateRef(initChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const actionRef = useRef<ButtonBaseActions>(null);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: labelRef, width, height } = useResizeDetector();

  /** error */
  const [error, _setError] = useState(initError);
  useFirstSkipChanged(() => _setError(initError), [initError]);
  const errorRef = useAutoUpdateRef(error);
  const setError = useCallback(
    (newValue: typeof error) => {
      _setError(newValue);
      errorRef.current = newValue;
    },
    [errorRef]
  );

  /** data */
  const [data, _setData] = useState(initData);
  useFirstSkipChanged(() => _setData(initData), [initData]);
  const dataRef = useAutoUpdateRef(data);
  const setData = useCallback(
    (newValue: typeof data) => {
      _setData(newValue);
      dataRef.current = newValue;
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
   * State - uncheckedValue
   * ******************************************************************************************************************/

  const finalInitUncheckedValue = initUncheckedValue ?? 0;
  const [uncheckedValue, _setUncheckedValue] = useState(finalInitUncheckedValue);
  useFirstSkipChanged(() => _setUncheckedValue(finalInitUncheckedValue), [finalInitUncheckedValue]);
  const uncheckedValueRef = useAutoUpdateRef(uncheckedValue);
  const setUncheckedValue = useCallback(
    (newValue: typeof uncheckedValue) => {
      _setUncheckedValue(newValue);
      uncheckedValueRef.current = newValue;
    },
    [uncheckedValueRef]
  );

  /********************************************************************************************************************
   * State - value
   * ******************************************************************************************************************/

  const finalInitValue = initValue ?? 0;
  const [value, setValue] = useState(finalInitValue);
  useFirstSkipChanged(() => setValue(finalInitValue), [finalInitValue]);
  const valueRef = useAutoUpdateRef(value);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

  /********************************************************************************************************************
   * Function - setErrorErrorHelperText
   * ******************************************************************************************************************/

  const setErrorErrorHelperText = useCallback(
    function (error: Props['error'], errorHelperText: Props['helperText']) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /********************************************************************************************************************
   * Function - validate
   * ******************************************************************************************************************/

  const validate = useCallback(
    function (checked: boolean) {
      if (onValidateRef.current) {
        const onValidateResult = onValidateRef.current(checked);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [onValidateRef, setErrorErrorHelperText]
  );

  /********************************************************************************************************************
   * State - checked
   * ******************************************************************************************************************/

  const [checked, setChecked] = useState(initChecked);
  useFirstSkipChanged(() => setChecked(initChecked), [initChecked]);
  const checkedRef = useAutoUpdateRef(checked);

  /** checked 변경 함수 */
  const updateChecked = useCallback(
    (newChecked: boolean, notFireOnChange = false) => {
      setChecked(newChecked);
      checkedRef.current = newChecked;

      if (error) validate(newChecked);
      if (!notFireOnChange && onChangeRef.current) onChangeRef.current(newChecked);
      onValueChange(name, newChecked);

      return newChecked;
    },
    [checkedRef, error, name, onChangeRef, onValueChange, validate]
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

  const commands = useMemo<PFormCheckboxCommands>(
    () => ({
      getType: () => 'PFormCheckbox',
      getName: () => name,
      getReset: () => initCheckedRef.current,
      reset: () => updateChecked(initCheckedRef.current),
      getValue: () => valueRef.current,
      setValue,
      getData: () => dataRef.current,
      setData,
      getUncheckedValue: () => uncheckedValueRef.current,
      setUncheckedValue,
      getChecked: () => checkedRef.current,
      setChecked: updateChecked,
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled,
      isHidden: () => !!hidden,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(checkedRef.current),
      setError: setErrorErrorHelperText,
    }),
    [
      checkedRef,
      dataRef,
      disabled,
      exceptValue,
      focus,
      hidden,
      initCheckedRef,
      name,
      setData,
      setErrorErrorHelperText,
      setUncheckedValue,
      uncheckedValueRef,
      updateChecked,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    useCallback((commands: PFormCheckboxCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (readOnly) {
        e.preventDefault();
      } else {
        updateChecked(checked);
        setTimeout(() => {
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
    <PFormItemBase
      variant={variant}
      size={size}
      color={color}
      focused={focused}
      className={classNames(className, 'PFormValueItem', 'PFormCheckbox')}
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
};

export default PFormCheckbox;
