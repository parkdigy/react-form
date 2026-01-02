import React, { useState, useCallback, useId, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { ToggleButtonGroup, ToggleButton, useTheme, CircularProgress, Icon } from '@mui/material';
import {
  useAutoUpdateRef,
  useEventEffect,
  useFirstSkipChanged,
  useFirstSkipEffect,
  useForwardRef,
} from '@pdg/react-hook';
import { empty, notEmpty, equal } from '@pdg/compare';
import { PartialPick } from '../../@types';
import {
  PFormToggleButtonGroupProps,
  PFormToggleButtonGroupCommands,
  PFormToggleButtonGroupSingleValue,
  PFormToggleButtonGroupValue,
  PFormToggleButtonGroupItem,
  PFormToggleButtonGroupItems,
} from './PFormToggleButtonGroup.types';
import { useFormState } from '../../PFormContext';
import PFormItemBase, { PFormItemBaseProps } from '../PFormItemBase';
import './PFormToggleButtonGroup.scss';

function PFormToggleButtonGroup<
  T extends PFormToggleButtonGroupSingleValue,
  Multiple extends boolean | undefined = undefined,
  Items extends PFormToggleButtonGroupItems<T> = PFormToggleButtonGroupItems<T>,
>({
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
  type = 'button',
  loading: initLoading,
  items: initItems,
  value: initValue,
  data: initData,
  error: initError,
  helperText,
  disabled: initDisabled,
  readOnly,
  required,
  notAllowEmptyValue,
  exceptValue,
  width: initWidth,
  multiple,
  formValueSeparator = ',',
  formValueSort,
  hidden: initHidden,
  itemWidth,
  onLoadItems,
  startAdornment,
  endAdornment,
  /********************************************************************************************************************/
  onChange,
  onValue,
  onValidate,
  /********************************************************************************************************************/
  className,
  style: initStyle,
  sx,
}: PFormToggleButtonGroupProps<T, Multiple, Items>) {
  /********************************************************************************************************************
   * type
   * ******************************************************************************************************************/

  type Props = PFormToggleButtonGroupProps<T, Multiple, Items>;
  type Commands = PFormToggleButtonGroupCommands<T, Multiple>;
  type Value = PFormToggleButtonGroupValue<T, Multiple>;

  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();
  const labelId = useId();

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
    formColWidth,
    onAddValueItem,
    onRemoveValueItem,
    onValueChange,
    onValueChangeByUser,
    onRequestSearchSubmit,
  } = useFormState<Value, true, PFormToggleButtonGroupItem<T>>();

  /********************************************************************************************************************
   * Variables - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const fullWidth = type === 'checkbox' || type === 'radio' ? true : (initFullWidth ?? formFullWidth);

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  /** focused */
  const [focused, setFocused] = useState(initFocused ?? formFocused);
  if ((initFocused ?? formFocused) !== focused) {
    setFocused(initFocused ?? formFocused);
  }

  /********************************************************************************************************************
   * Theme
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * SResizeDetector
   * ******************************************************************************************************************/

  const { ref: refForResizeWidthDetect, width } = useResizeDetector({ handleHeight: false });
  const { ref: refForButtonResizeHeightDetect, height: buttonHeight } = useResizeDetector({ handleWidth: false });
  const { ref: refForButtonsResizeHeightDetect, height: realHeight } = useResizeDetector({ handleWidth: false });
  const { ref: refForLoadingResizeHeightDetect, height: loadingHeight } = useResizeDetector({ handleWidth: false });

  const height = buttonHeight ?? loadingHeight;

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(!!onLoadItems);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

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

  /** loading */
  const [loading, _setLoading] = useState(initLoading);
  useFirstSkipChanged(() => _setLoading(initLoading), [initLoading]);
  const loadingRef = useAutoUpdateRef(loading);
  const setLoading = useCallback(
    (newValue: typeof loading) => {
      _setLoading(newValue);
      loadingRef.current = newValue;
    },
    [loadingRef]
  );

  /** items */
  const [items, _setItems] = useState(initItems);
  useFirstSkipChanged(() => _setItems(initItems), [initItems]);

  const itemsRef = useAutoUpdateRef(items);

  const setItems = useCallback((newItems: PFormToggleButtonGroupItems<T> | undefined) => {
    _setItems(newItems as Props['items']);
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const itemsValues = useMemo(() => {
    if (items) {
      return items.reduce<Record<string, string | number | boolean>>((res, { value }) => {
        res[`${value}`] = value;
        return res;
      }, {});
    } else {
      return {};
    }
  }, [items]);

  const style = useMemo(() => {
    let finalWidth;
    if (initWidth) {
      finalWidth = initWidth;
    } else {
      if (isOnGetItemLoading) {
        finalWidth = 16;
      } else if (fullWidth) {
        finalWidth = '100%';
      } else {
        finalWidth = width || 0;
        if (formColWidth) {
          if (finalWidth > formColWidth) {
            finalWidth = formColWidth;
          }
        }
      }
    }

    return { width: finalWidth, ...initStyle };
  }, [formColWidth, fullWidth, initStyle, initWidth, isOnGetItemLoading, width]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    (error: boolean, errorHelperText: ReactNode) => {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
  const validate = useCallback(
    (value: Props['value']) => {
      if (required && empty(value)) {
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
  const focus = useCallback(() => {
    refForButtonResizeHeightDetect.current?.focus();
  }, [refForButtonResizeHeightDetect]);

  /********************************************************************************************************************
   * State - value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (value: Props['value']) => {
      let finalValue = value;
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          if (finalValue != null && notEmpty(finalValue)) {
            if (typeof finalValue === 'string') {
              finalValue = Array.from(new Set(finalValue.split(formValueSeparator))) as Props['value'];
            } else {
              finalValue = [finalValue] as unknown as Props['value'];
            }
          } else {
            finalValue = [] as unknown as Props['value'];
          }
        }
      } else {
        if (Array.isArray(finalValue)) {
          if (notEmpty(finalValue)) {
            finalValue = finalValue[0] as Props['value'];
          } else {
            finalValue = undefined;
          }
        }
      }

      if (notEmpty(itemsValues)) {
        if (finalValue != null && notEmpty(finalValue)) {
          if (multiple) {
            if (Array.isArray(finalValue)) {
              finalValue = finalValue.map((v) => {
                const realValue = itemsValues[`${v}`];
                return realValue != null ? realValue : v;
              }) as Props['value'];
            }
          } else {
            const realValue = itemsValues[`${finalValue}`];
            if (realValue != null && finalValue !== realValue) {
              finalValue = realValue as Props['value'];
            }
          }
        }
      }

      finalValue = onValue ? onValue(finalValue) : finalValue;

      return equal(value, finalValue) ? value : finalValue;
    },
    [multiple, formValueSeparator, itemsValues, onValue]
  );
  const getFinalValueRef = useAutoUpdateRef(getFinalValue);

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (newValue: ReturnType<typeof getFinalValue>) => {
      _setValue(newValue);
      valueRef.current = newValue;
    },
    [valueRef]
  );

  const updateValue = useCallback(
    (newValue: Props['value'], skipGetFinalValue = false) => {
      const finalValue = skipGetFinalValue ? newValue : getFinalValueRef.current(newValue);
      setValue(finalValue);

      if (error) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, getFinalValueRef, name, onChangeRef, onValueChange, setValue, validate]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
    if (onLoadItemsRef.current) {
      onLoadItemsRef.current().then((items) => {
        setItems(items);
        setIsOnGetItemLoading(false);
      });
    }
  }, []);

  useFirstSkipEffect(() => {
    updateValue(valueRef.current);
  }, [multiple]);

  useEventEffect(() => {
    if (notAllowEmptyValue) {
      if (items && notEmpty(items)) {
        let setFirstItem = false;

        if (Array.isArray(value)) {
          if (empty(value)) {
            setFirstItem = true;
          }
        } else {
          if (value == null) {
            setFirstItem = true;
          }
        }

        if (setFirstItem) {
          updateValue((multiple ? [items[0].value] : items[0].value) as Props['value']);
        }
      }
    }
  }, [multiple, items, value, notAllowEmptyValue]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<Commands>(() => {
    return {
      getType: () => 'PFormToggleButtonGroup',
      getName: () => name,
      getReset: () => getFinalValueRef.current(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current,
      setValue: (v) => {
        valueRef.current = updateValue(v);
      },
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
      getFormValueSeparator: () => formValueSeparator,
      isFormValueSort: () => !!formValueSort,
      getItems: () => itemsRef.current,
      setItems,
      isMultiple: () => !!multiple,
      getLoading: () => !!loadingRef.current,
      setLoading,
      reloadItems: () => {
        if (onLoadItemsRef.current) {
          setIsOnGetItemLoading(true);
          onLoadItemsRef.current().then((items) => {
            setItems(items);
            setIsOnGetItemLoading(false);
          });
        }
      },
    };
  }, [
    dataRef,
    disabled,
    exceptValue,
    focus,
    formValueSeparator,
    formValueSort,
    getFinalValueRef,
    hidden,
    initValueRef,
    itemsRef,
    loadingRef,
    multiple,
    name,
    onLoadItemsRef,
    setData,
    setErrorErrorHelperText,
    setItems,
    setLoading,
    updateValue,
    validate,
    valueRef,
  ]);

  useForwardRef(
    ref as any,
    commands,
    useCallback((commands: Commands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (e: React.MouseEvent<HTMLElement>, newValue: Props['value']) => {
      if (readOnly) {
        e.preventDefault();
      } else {
        let finalValue = newValue;
        if (notAllowEmptyValue) {
          if (multiple) {
            if (empty(finalValue)) {
              if (Array.isArray(valueRef.current) && valueRef.current.length > 0) {
                finalValue = [valueRef.current[0]] as Props['value'];
              }
            }
          } else {
            if (finalValue == null) {
              finalValue = valueRef.current;
            }
          }
        }
        finalValue = getFinalValueRef.current(finalValue);
        if (!equal(valueRef.current, finalValue)) {
          valueRef.current = updateValue(finalValue, true);
          setTimeout(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      }
    },
    [
      readOnly,
      notAllowEmptyValue,
      getFinalValueRef,
      valueRef,
      multiple,
      updateValue,
      onValueChangeByUser,
      name,
      onRequestSearchSubmit,
    ]
  );

  /********************************************************************************************************************
   * Render Variable
   * ******************************************************************************************************************/

  /** formControlBaseProps */
  const formControlBaseProps: PartialPick<PFormItemBaseProps, 'focused'> = {};
  if (focused) {
    formControlBaseProps.focused = true;
  }

  /** buttons */
  const buttons = useMemo(() => {
    let finalItemWidth: number | string | undefined = undefined;
    if (type === 'button' && !fullWidth) {
      finalItemWidth = 'auto';
    } else if (!fullWidth || type === 'radio' || type === 'checkbox') {
      finalItemWidth = itemWidth || 'auto';
    }

    const buttonStyle = {
      borderColor: error ? theme.palette.error.main : '',
      color: error ? theme.palette.error.main : '',
      width: finalItemWidth,
    };

    return (
      items &&
      items.map(({ value, label, disabled: itemDisabled, color: itemColor }, idx) => {
        return (
          <ToggleButton
            ref={(ref) => {
              if (idx === 0) {
                refForButtonResizeHeightDetect.current = ref;
              }
            }}
            key={idx}
            size={size}
            className='ToggleButton'
            value={value}
            color={itemColor || color}
            disabled={disabled || readOnly || itemDisabled}
            style={buttonStyle}
            onFocus={() => setFocused(initFocused || true)}
            onBlur={() => setFocused(initFocused || false)}
          >
            {type === 'checkbox' ? (
              <>
                <Icon className='__checkbox-unchecked__'>check_box_outline_blank</Icon>
                <Icon className='__checkbox-checked__'>check_box</Icon>
              </>
            ) : (
              type === 'radio' && (
                <>
                  <>
                    <Icon className='__checkbox-unchecked__'>radio_button_unchecked</Icon>
                    <Icon className='__checkbox-checked__'>radio_button_checked</Icon>
                  </>
                </>
              )
            )}
            <span className='__label__'>{label}</span>
          </ToggleButton>
        );
      })
    );
  }, [
    color,
    disabled,
    error,
    fullWidth,
    initFocused,
    itemWidth,
    items,
    readOnly,
    refForButtonResizeHeightDetect,
    setFocused,
    size,
    theme.palette.error.main,
    type,
  ]);

  /** realValue */
  const realValue = useMemo(() => {
    let newRealValue: T | T[] | null = value == null ? null : value;
    if (items && value != null) {
      if (Array.isArray(newRealValue)) {
        const stringRealValues = newRealValue.map((v) => v.toString());
        if (multiple) {
          const foundItems = items.filter((v) => stringRealValues.includes(v.value.toString()));
          newRealValue = foundItems.map((v) => v.value);
        }
      } else if (newRealValue != null) {
        const stringRealValue = newRealValue.toString();
        const foundItem = items.find((v) => v.value.toString() === stringRealValue);
        if (foundItem) {
          newRealValue = foundItem.value;
        }
      }
    }
    return newRealValue;
  }, [items, multiple, value]);

  /** control */
  const control = useMemo(() => {
    return isOnGetItemLoading || loading ? (
      <div style={{ opacity: 0.54 }} ref={refForLoadingResizeHeightDetect}>
        <CircularProgress size={16} color='inherit' />
      </div>
    ) : (
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: fullWidth ? '100%' : undefined }}
      >
        {startAdornment && <div>{startAdornment}</div>}
        <div style={{ flex: 1 }}>
          {!fullWidth && !isOnGetItemLoading && !loading && items && (
            <div
              ref={refForResizeWidthDetect}
              style={{
                display: 'grid',
                position: 'absolute',
                whiteSpace: 'nowrap',
                visibility: 'hidden',
              }}
            >
              <ToggleButtonGroup className='ToggleButtonGroup' exclusive={!multiple}>
                {buttons}
              </ToggleButtonGroup>
            </div>
          )}
          <ToggleButtonGroup
            ref={refForButtonsResizeHeightDetect}
            className='ToggleButtonGroup'
            exclusive={!multiple}
            fullWidth={fullWidth}
            value={realValue}
            onChange={handleChange}
            style={{
              width:
                !fullWidth && formColWidth && typeof width === 'number' && width > formColWidth
                  ? formColWidth
                  : undefined,
              flexWrap: type === 'checkbox' || type === 'radio' ? 'wrap' : 'nowrap',
            }}
            aria-labelledby={notEmpty(label) ? labelId : undefined}
          >
            {isOnGetItemLoading || loading || !items || empty(items) ? (
              <ToggleButton
                ref={refForButtonResizeHeightDetect}
                size={size}
                className='ToggleButton'
                disabled={disabled || readOnly}
                value=''
                style={{ visibility: 'hidden' }}
              />
            ) : (
              buttons
            )}
          </ToggleButtonGroup>
        </div>
        {endAdornment && <div>{endAdornment}</div>}
      </div>
    );
  }, [
    buttons,
    disabled,
    endAdornment,
    formColWidth,
    fullWidth,
    handleChange,
    isOnGetItemLoading,
    items,
    label,
    labelId,
    loading,
    multiple,
    readOnly,
    realValue,
    refForButtonResizeHeightDetect,
    refForButtonsResizeHeightDetect,
    refForLoadingResizeHeightDetect,
    refForResizeWidthDetect,
    size,
    startAdornment,
    type,
    width,
  ]);

  const controlHeight = height || 0;
  const isMultiline = controlHeight <= (realHeight ?? 0);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormItemBase
      {...formControlBaseProps}
      className={classNames(
        className,
        'PFormValueItem',
        'PFormToggleButtonGroup',
        `variant-${variant}`,
        `size-${size}`,
        !!label && 'with-label',
        !!fullWidth && 'full-width',
        `type-${type}`,
        (isOnGetItemLoading || loading) && 'loading'
      )}
      variant={variant}
      size={size}
      color={color}
      labelIcon={labelIcon}
      label={label}
      required={required}
      fullWidth={fullWidth}
      error={error}
      helperText={error ? errorHelperText : helperText}
      helperTextProps={{ style: { marginLeft: 2 } }}
      errorHelperText={errorHelperText}
      errorHelperTextProps={{ style: { marginLeft: 2 } }}
      style={style}
      sx={sx}
      hidden={hidden}
      autoSize
      controlHeight={realHeight ? realHeight + (isMultiline ? 13 : 0) : controlHeight}
      controlVerticalCenter={isMultiline ? false : isOnGetItemLoading || loading}
      control={control}
    />
  );
}

export default PFormToggleButtonGroup;
