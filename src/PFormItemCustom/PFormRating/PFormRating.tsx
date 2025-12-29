import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { Rating } from '@mui/material';
import { useAutoUpdateRef, useFirstSkipChanged, useForwardRef } from '@pdg/react-hook';
import { empty } from '@pdg/compare';
import { PFormRatingProps as Props, PFormRatingCommands, PFormRatingValue } from './PFormRating.types';
import PFormItemBase from '../PFormItemBase';
import { useFormState } from '../../PFormContext';
import { PIcon } from '@pdg/react-component';

const PFormRating = ({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  /********************************************************************************************************************/
  precision = 1,
  highlightSelectedOnly,
  icon,
  emptyIcon,
  max,
  hidden: initHidden,
  /********************************************************************************************************************/
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
  /********************************************************************************************************************/
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

  const initValueRef = useAutoUpdateRef(initValue);
  const inputRef = useRef<HTMLInputElement>(undefined);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

  /** focused */
  const finalInitFocused = initFocused ?? formFocused;
  const [focused, setFocused] = useState(finalInitFocused);
  useFirstSkipChanged(() => setFocused(finalInitFocused), [finalInitFocused]);

  /** error */
  const [error, _setError] = useState(initError);
  useFirstSkipChanged(() => _setError(initError), [initError]);
  const errorRef = useAutoUpdateRef(error);
  const setError = useCallback(
    (value: React.SetStateAction<typeof error>) => {
      _setError((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    },
    [errorRef]
  );

  /** data */
  const [data, _setData] = useState(initData);
  useFirstSkipChanged(() => _setData(initData), [initData]);
  const dataRef = useAutoUpdateRef(data);
  const setData = useCallback(
    (value: React.SetStateAction<typeof data>) => {
      _setData((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        dataRef.current = newValue;
        return newValue;
      });
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
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: ratingRef, width, height } = useResizeDetector();

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    function (error: Props['error'], errorHelperText: Props['helperText']) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
  const validate = useCallback(
    function (value: PFormRatingValue) {
      if (required && (empty(value) || value === 0)) {
        setErrorErrorHelperText(true, '필수 선택 항목입니다.');
        return false;
      }

      if (onValidateRef.current) {
        const onValidateResult = onValidateRef.current(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [required, onValidateRef, setErrorErrorHelperText]
  );

  /** focus */
  const focus = useCallback(function () {
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.blur();
    });
  }, []);

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (value: Props['value'] | null) => {
      const finalValue = value || 0;
      return onValue ? onValue(finalValue) : finalValue;
    },
    [onValue]
  );
  const getFinalValueRef = useAutoUpdateRef(getFinalValue);

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<ReturnType<typeof getFinalValue>>) => {
      _setValue((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        valueRef.current = newValue;
        return newValue;
      });
    },
    [valueRef]
  );

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value'] | null) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);

      if (error) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, getFinalValue, name, onChangeRef, onValueChange, setValue, validate]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormRatingCommands>(
    () => ({
      getType: () => 'PFormRating',
      getName: () => name,
      getReset: () => getFinalValueRef.current(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
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
      setError: setErrorErrorHelperText,
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      getFinalValueRef,
      hidden,
      initValueRef,
      name,
      setData,
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
