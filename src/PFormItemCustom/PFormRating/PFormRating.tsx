import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { Rating } from '@mui/material';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
import { empty } from '@pdg/compare';
import { PFormRatingProps as Props, PFormRatingCommands, PFormRatingValue } from './PFormRating.types';
import PFormItemBase from '../PFormItemBase';
import { useFormState } from '../../PFormContext';
import { PIcon } from '@pdg/react-component';

const PFormRating = ({
  ref,
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  //----------------------------------------------------------------------------------------------------------------
  precision = 1,
  highlightSelectedOnly,
  icon,
  emptyIcon,
  max,
  hidden: initHidden,
  //----------------------------------------------------------------------------------------------------------------
  name,
  labelIcon,
  label,
  readOnly,
  required,
  disabled: initDisabled,
  error: initError,
  helperText,
  value: initValue = 0,
  data: initData,
  exceptValue,
  onChange,
  onValidate,
  onValue,
  //----------------------------------------------------------------------------------------------------------------
  className,
  style: initStyle,
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
  } = useFormState<PFormRatingValue, false>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const inputRef = useRef<HTMLInputElement>(undefined);

  /********************************************************************************************************************
   * State - focused
   * ******************************************************************************************************************/

  const finalInitFocused = initFocused ?? formFocused;

  const [focused, setFocused] = useState(finalInitFocused);
  useChanged(finalInitFocused) && setFocused(finalInitFocused);

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
   * State - width, height
   * ******************************************************************************************************************/

  const { ref: ratingRef, width, height } = useResizeDetector();

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
    function (value: PFormRatingValue) {
      if (required && (empty(value) || value === 0)) {
        setErrorErrorHelperText(true, '필수 선택 항목입니다.');
        return false;
      }

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
    [required, onValidate, setErrorErrorHelperText]
  );

  /********************************************************************************************************************
   * State - value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (value: Props['value'] | null) => {
      const finalValue = value || 0;
      return onValue ? onValue(finalValue) : finalValue;
    },
    [onValue]
  );

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value'] | null) => {
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

  const commands = useMemo<PFormRatingCommands>(
    () => ({
      getType: () => 'PFormRating',
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
    useCallback((commands: PFormRatingCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (e: React.SyntheticEvent, value: number | null) => {
      if (readOnly) {
        e.preventDefault();
      } else {
        const finalValue = updateValue(value);
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

  return (
    <PFormItemBase
      variant={variant}
      size={size}
      color={color}
      focused={focused}
      className={classNames(className, 'PFormValueItem', 'PFormRating')}
      labelIcon={labelIcon}
      label={label}
      error={error}
      fullWidth={false}
      required={required}
      helperText={error ? errorHelperText : helperText}
      helperTextProps={{ style: { marginLeft: 5 } }}
      style={{ width: width || 100, ...initStyle }}
      sx={sx}
      hidden={hidden}
      autoSize
      controlHeight={height || (size === 'small' ? 21 : 26)}
      controlVerticalCenter
      control={
        <Rating
          ref={(ref) => {
            ratingRef.current = ref;
            inputRef.current = ref?.querySelector('input') || undefined;
          }}
          size={size === 'medium' ? 'large' : 'medium'}
          name={name}
          precision={precision}
          highlightSelectedOnly={highlightSelectedOnly}
          value={value}
          disabled={disabled || readOnly}
          max={max}
          icon={
            <PIcon color={color} size='inherit'>
              {icon ? icon : 'Star'}
            </PIcon>
          }
          emptyIcon={<PIcon size='inherit'>{emptyIcon ? emptyIcon : 'StarBorder'}</PIcon>}
          onChange={handleChange}
          onFocus={() => setFocused(initFocused || true)}
          onBlur={() => setFocused(initFocused || false)}
        />
      }
    />
  );
};

export default PFormRating;
