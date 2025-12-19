import React, { useEffect, useState, useCallback, useId, ReactNode, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { ToggleButtonGroup, ToggleButton, useTheme, CircularProgress, Icon } from '@mui/material';
import { useAutoUpdateRef, useChanged, useForwardRef } from '@pdg/react-hook';
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
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  fullWidth: initFullWidth,
  //----------------------------------------------------------------------------------------------------------------
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
  //----------------------------------------------------------------------------------------------------------------
  onChange,
  onValue,
  onValidate,
  //----------------------------------------------------------------------------------------------------------------
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
   * Props Changed
   * ******************************************************************************************************************/

  const isMultipleChanged = useChanged(multiple);
  const isNotAllowEmptyValueChanged = useChanged(notAllowEmptyValue);

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
   * State - FormState
   * ******************************************************************************************************************/

  const [focused, setFocused] = useState(initFocused ?? formFocused);
  if ((initFocused ?? formFocused) !== focused) {
    setFocused(initFocused ?? formFocused);
  }

  /********************************************************************************************************************
   * Theme
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * State - width (ResizeDetector)
   * ******************************************************************************************************************/

  const { ref: refForResizeWidthDetect, width } = useResizeDetector({ handleHeight: false });

  /********************************************************************************************************************
   * State - height (ResizeDetector)
   * ******************************************************************************************************************/

  const { ref: refForButtonResizeHeightDetect, height: buttonHeight } = useResizeDetector({ handleWidth: false });
  const { ref: refForButtonsResizeHeightDetect, height: realHeight } = useResizeDetector({ handleWidth: false });
  const { ref: refForLoadingResizeHeightDetect, height: loadingHeight } = useResizeDetector({ handleWidth: false });

  const height = buttonHeight ?? loadingHeight;

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
   * State - loading
   * ******************************************************************************************************************/

  const [loading, setLoading] = useState(initLoading);
  useChanged(initLoading) && setLoading(initLoading);

  const loadingRef = useAutoUpdateRef(loading);

  /********************************************************************************************************************
   * State - items
   * ******************************************************************************************************************/

  const [items, _setItems] = useState(initItems);
  useChanged(initItems) && _setItems(initItems);

  const itemsRef = useAutoUpdateRef(items);

  const setItems = useCallback((newItems: PFormToggleButtonGroupItems<T> | undefined) => {
    _setItems(newItems as Props['items']);
  }, []);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(!!onLoadItems);

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

  useEffect(() => {}, [initData]);

  /********************************************************************************************************************
   * State Function
   * ******************************************************************************************************************/

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
   * Function - setErrorErrorHelperText
   * ******************************************************************************************************************/

  const setErrorErrorHelperText = useCallback(
    (error: boolean, errorHelperText: ReactNode) => {
      setError(error);
      setErrorHelperText(errorHelperText);
    },
    [setError]
  );

  /********************************************************************************************************************
   * Function - validate
   * ******************************************************************************************************************/

  const validate = useCallback(
    (value: Props['value']) => {
      if (required && empty(value)) {
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

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);

  const updateValue = useCallback(
    (newValue: Props['value'], skipGetFinalValue = false) => {
      const finalValue = skipGetFinalValue ? newValue : getFinalValue(newValue);
      setValue(finalValue);

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, getFinalValue, name, onChange, onValueChange, validate]
  );
  const updateValueRef = useAutoUpdateRef(updateValue);

  /********************************************************************************************************************
   * multiple 변경 시 value 업데이트
   * ******************************************************************************************************************/

  useEffect(() => {
    updateValueRef.current(valueRef.current);
  }, [multiple, updateValueRef, valueRef]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  const firstOnLoadItems = useRef(onLoadItems);
  const firstSetItems = useRef(setItems);
  useEffect(() => {
    if (firstOnLoadItems.current) {
      firstOnLoadItems.current().then((items) => {
        firstSetItems.current(items);
        setIsOnGetItemLoading(false);
      });
    }
  }, []);

  const isItemsChanged = useChanged(items);
  const isValueChanged = useChanged(value);
  if (isMultipleChanged || isItemsChanged || isValueChanged || isNotAllowEmptyValueChanged) {
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
  }

  /********************************************************************************************************************
   * Function - focus
   * ******************************************************************************************************************/

  const focus = useCallback(() => {
    refForButtonResizeHeightDetect.current?.focus();
  }, [refForButtonResizeHeightDetect]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<Commands>(() => {
    return {
      getType: () => 'PFormToggleButtonGroup',
      getName: () => name,
      getReset: () => getFinalValue(initValue),
      reset: () => updateValue(initValue),
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
      setError: (error: boolean, errorText: ReactNode | undefined) =>
        setErrorErrorHelperText(error, error ? errorText : undefined),
      getFormValueSeparator: () => formValueSeparator,
      isFormValueSort: () => !!formValueSort,
      getItems: () => itemsRef.current,
      setItems,
      isMultiple: () => !!multiple,
      getLoading: () => !!loadingRef.current,
      setLoading,
      reloadItems: () => {
        if (onLoadItems) {
          setIsOnGetItemLoading(true);
          onLoadItems().then((items) => {
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
    getFinalValue,
    hidden,
    initValue,
    itemsRef,
    loadingRef,
    multiple,
    name,
    onLoadItems,
    setErrorErrorHelperText,
    setItems,
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
              if (Array.isArray(value) && value.length > 0) {
                finalValue = [value[0]] as Props['value'];
              }
            }
          } else {
            if (finalValue == null) {
              finalValue = value;
            }
          }
        }
        finalValue = getFinalValue(finalValue);
        if (!equal(value, finalValue)) {
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
      getFinalValue,
      value,
      multiple,
      valueRef,
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
