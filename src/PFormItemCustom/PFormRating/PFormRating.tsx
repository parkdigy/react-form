import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { Rating } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useForwardRef } from '@pdg/react-hook';
import { empty, ifUndefined } from '@pdg/compare';
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

  const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);

  const updateValue = useCallback(
    (newValue: Props['value'] | null) => {
      const finalValue = _setValue(newValue);

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [_setValue, error, name, onChange, onValueChange, validate]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (ratingRef.current) {
      inputRef.current = ratingRef.current.querySelector('input') || undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      isDisabled: () => !!disabledRef.current,
      setDisabled,
      isHidden: () => !!hiddenRef.current,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
        setErrorErrorHelperText(error, error ? errorHelperText : undefined),
    }),
    [
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      getFinalValue,
      hiddenRef,
      initValue,
      name,
      setData,
      setDisabled,
      setErrorErrorHelperText,
      setHidden,
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
