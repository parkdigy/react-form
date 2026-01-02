import React, { useState, useCallback, useRef, ReactNode, useId, ChangeEvent, useMemo } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { RadioGroup, FormControlLabel, Radio, useTheme, CircularProgress } from '@mui/material';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import {
  useAutoUpdateRef,
  useEventEffect,
  useFirstSkipChanged,
  useFirstSkipEffect,
  useForwardRef,
} from '@pdg/react-hook';
import { empty, notEmpty } from '@pdg/compare';
import {
  PFormRadioGroupProps,
  PFormRadioGroupCommands,
  PFormRadioGroupValue,
  PFormRadioGroupSingleValue,
  PFormRadioGroupItem,
  PFormRadioGroupItems,
} from './PFormRadioGroup.types';
import { useFormState } from '../../PFormContext';
import PFormItemBase from '../PFormItemBase';

const PADDING_LEFT = 3;

function PFormRadioGroup<
  BaseValue extends PFormRadioGroupSingleValue,
  Items extends PFormRadioGroupItems<BaseValue> = PFormRadioGroupItems<BaseValue>,
>({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  fullWidth: initFullWidth,
  hidden: initHidden,
  startAdornment,
  endAdornment,
  /********************************************************************************************************************/
  name,
  width: initWidth,
  labelIcon,
  label,
  inline = true,
  loading: initLoading,
  nowrap,
  items: initItems,
  value: initValue,
  data: initData,
  error: initError,
  helperText,
  disabled: initDisabled,
  readOnly,
  required,
  exceptValue,
  onLoadItems,
  onChange,
  onValue,
  onValidate,
  /********************************************************************************************************************/
  className,
  style: initStyle,
  sx,
  /********************************************************************************************************************/
  ...props
}: PFormRadioGroupProps<BaseValue, Items>) {
  /********************************************************************************************************************
   * type
   * ******************************************************************************************************************/

  type Props = PFormRadioGroupProps<BaseValue, Items>;
  type Commands = PFormRadioGroupCommands<BaseValue>;

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
    fullWidth: formFullWidth,
    disabled: formDisabled,
    onAddValueItem,
    onRemoveValueItem,
    onValueChange,
    onValueChangeByUser,
    onRequestSearchSubmit,
  } = useFormState<PFormRadioGroupValue<BaseValue>, true, PFormRadioGroupItem<BaseValue>>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;

  /********************************************************************************************************************
   * Theme
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const baseRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(!!onLoadItems);
  const [formColWrapRect, setFormColWrapRect] = useState<DOMRect>();
  const [radioGroupNoWrapRect, setRadioGroupNoWrapRect] = useState<DOMRect>();

  /** fullWidth */
  const finalInitFullWidth = initFullWidth ?? formFullWidth;
  const [fullWidth, setFullWidth] = useState(finalInitFullWidth);
  useFirstSkipChanged(() => setFullWidth(finalInitFullWidth), [finalInitFullWidth]);

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

  /** width */
  const finalInitWidth = initWidth || '100%';
  const [width, setWidth] = useState<Props['width']>(finalInitWidth);
  useFirstSkipChanged(() => setWidth(finalInitWidth), [finalInitWidth]);

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
  const setItems = useCallback(
    (newValue: typeof items) => {
      _setItems(newValue);
      itemsRef.current = newValue;
    },
    [itemsRef]
  );

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: resizeWidthDetectorRef } = useResizeDetector({
    handleWidth: true,
    handleHeight: false,
    onResize() {
      setRadioGroupNoWrapRect(resizeWidthDetectorRef.current?.getBoundingClientRect());
    },
  });

  const { height, ref: resizeHeightDetectorRef } = useResizeDetector();

  const { height: realHeight, ref: resizeRealHeightDetectorRef } = useResizeDetector();

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    function (error: boolean, errorHelperText: ReactNode) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
  const validate = useCallback(
    function (value: PFormRadioGroupValue<BaseValue>) {
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

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (value: PFormRadioGroupValue<BaseValue>) => {
      return onValue ? onValue(value) : value;
    },
    [onValue]
  );
  const getFinalValueRef = useAutoUpdateRef(getFinalValue);

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (newValue: Props['value']) => {
      _setValue(newValue);
      valueRef.current = newValue;
    },
    [valueRef]
  );

  /** value 변경 함수 */
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

  /** focus */
  const focus = useCallback(function () {
    firstInputRef.current?.focus();
  }, []);

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

  useEventEffect(() => {
    if (!fullWidth || initWidth) {
      const findParentByClassName = (element: HTMLElement, className: string): HTMLElement | undefined | null => {
        const parent = element.parentElement;
        if (parent) {
          if ((parent.className || '').includes(className)) {
            return parent;
          } else {
            return findParentByClassName(parent, className);
          }
        }
      };

      const wrap = baseRef.current && findParentByClassName(baseRef.current, 'FormCol-Children-Wrap');
      if (wrap) {
        const resize = () => {
          if (resizeWidthDetectorRef.current) {
            setRadioGroupNoWrapRect(resizeWidthDetectorRef.current.getBoundingClientRect());
          }
          setFormColWrapRect(wrap.getBoundingClientRect());
        };
        window.addEventListener('resize', resize);
        resize();

        return () => {
          window.removeEventListener('resize', resize);
        };
      }
    }
  }, [fullWidth, initWidth]);

  useFirstSkipEffect(() => {
    let width: number | string | undefined;

    let fullWidth = initFullWidth == null ? formFullWidth : initFullWidth;

    if (initWidth) {
      width = initWidth;
    } else if (fullWidth) {
      width = '100%';
    } else {
      if (radioGroupNoWrapRect?.width) {
        width = radioGroupNoWrapRect.width + PADDING_LEFT;
      }
    }

    const formColWrapPaddingLeft =
      radioGroupNoWrapRect && formColWrapRect ? radioGroupNoWrapRect.left - formColWrapRect.left : 0;

    if ((!fullWidth || !!initWidth) && width && formColWrapRect?.width) {
      if (typeof width === 'number' && width > formColWrapRect.width - formColWrapPaddingLeft) {
        width = formColWrapRect.width - formColWrapPaddingLeft;
        fullWidth = false;
      }
    }

    setWidth(width);
    setFullWidth(fullWidth);
  }, [initWidth, formFullWidth, initFullWidth, formColWrapRect, radioGroupNoWrapRect]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<Commands>(
    () => ({
      getType: () => 'PFormRadioGroup',
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
      getItems: () => itemsRef.current,
      setItems: (v) => setItems(v as Props['items']),
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
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      getFinalValueRef,
      hidden,
      initValueRef,
      itemsRef,
      loadingRef,
      name,
      onLoadItemsRef,
      setData,
      setErrorErrorHelperText,
      setItems,
      setLoading,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref as any,
    commands,
    useCallback((commands: Commands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleChange */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (readOnly) {
        e.preventDefault();
      } else {
        let finalValue = e.target.value as PFormRadioGroupValue<BaseValue>;
        if (items) {
          const item = items.find(({ value }) => value.toString() === finalValue);
          if (item) {
            finalValue = item.value;
          }
        }
        finalValue = getFinalValueRef.current(finalValue);
        if (valueRef.current !== finalValue) {
          updateValue(finalValue, true);
          setTimeout(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      }
    },
    [readOnly, items, getFinalValueRef, valueRef, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]
  );

  /********************************************************************************************************************
   * Render - Variable
   * ******************************************************************************************************************/

  /** hiddenItemsControl */
  const hiddenItemsControl = useMemo(
    () =>
      items?.map(({ value, label, disabled: itemDisabled }, idx) => (
        <FormControlLabel
          ref={
            idx === 0
              ? (ref) => {
                  resizeHeightDetectorRef.current = ref as HTMLElement;
                }
              : null
          }
          key={idx}
          control={
            <Radio
              icon={<RadioButtonUnchecked color={error ? 'error' : undefined} />}
              checkedIcon={<RadioButtonChecked color={error ? 'error' : undefined} />}
              color={color}
              size={size}
            />
          }
          label={label}
          style={{
            color: error ? theme.palette.error.main : '',
            marginTop: -5,
            marginBottom: -5,
            whiteSpace: 'nowrap',
          }}
          value={value}
          disabled={disabled || readOnly || itemDisabled}
        />
      )),
    [color, disabled, error, items, readOnly, resizeHeightDetectorRef, size, theme.palette.error.main]
  );

  /** itemsControl */
  const itemsControl = useMemo(
    () =>
      items?.map(({ value, label, disabled: itemDisabled }, idx) => (
        <FormControlLabel
          key={idx}
          control={
            <Radio
              icon={<RadioButtonUnchecked color={error ? 'error' : undefined} />}
              checkedIcon={<RadioButtonChecked color={error ? 'error' : undefined} />}
              color={color}
              size={size}
              slotProps={idx === 0 ? { input: { ref: firstInputRef } } : undefined}
            />
          }
          label={label}
          style={{
            color: error ? theme.palette.error.main : '',
            whiteSpace: 'nowrap',
            marginTop: -5,
            marginBottom: -5,
          }}
          value={value}
          disabled={disabled || readOnly || itemDisabled}
        />
      )),
    [color, disabled, error, items, readOnly, size, theme.palette.error.main]
  );

  /** control */
  const control = useMemo(() => {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: fullWidth ? '100%' : undefined }}
      >
        {startAdornment && <div>{startAdornment}</div>}
        <div style={{ flex: 1 }}>
          {!fullWidth && !isOnGetItemLoading && !loading && items && (
            <div
              ref={resizeWidthDetectorRef}
              style={{
                display: 'grid',
                position: 'absolute',
                whiteSpace: 'nowrap',
                visibility: 'hidden',
              }}
            >
              <RadioGroup
                {...props}
                style={{ display: 'inline-flex', flexWrap: 'nowrap' }}
                name={name}
                row={inline}
                value={value === undefined ? null : value}
                onChange={handleChange}
              >
                {hiddenItemsControl}
              </RadioGroup>
            </div>
          )}
          <div>
            <RadioGroup
              {...props}
              ref={(ref) => {
                resizeRealHeightDetectorRef.current = ref as HTMLElement;
              }}
              style={{
                display: 'inline-flex',
                visibility: width == null ? 'hidden' : undefined,
                position: width == null ? 'absolute' : undefined,
                flexWrap: nowrap ? 'nowrap' : undefined,
              }}
              name={name}
              row={inline}
              value={value === undefined ? null : value}
              onChange={handleChange}
            >
              {isOnGetItemLoading || loading ? (
                <div style={{ position: 'relative' }}>
                  <FormControlLabel
                    label=''
                    control={<Radio color={color} size={size} />}
                    style={{ visibility: 'hidden' }}
                  />
                  <div style={{ position: 'absolute', left: 0, top: 11, opacity: 0.54 }}>
                    <CircularProgress size={size === 'small' ? 12 : 16} color='inherit' />
                  </div>
                </div>
              ) : (
                itemsControl
              )}
            </RadioGroup>
          </div>
        </div>
        {endAdornment && <div>{endAdornment}</div>}
      </div>
    );
  }, [
    color,
    endAdornment,
    fullWidth,
    handleChange,
    hiddenItemsControl,
    inline,
    isOnGetItemLoading,
    items,
    itemsControl,
    loading,
    name,
    nowrap,
    props,
    resizeRealHeightDetectorRef,
    resizeWidthDetectorRef,
    size,
    startAdornment,
    value,
    width,
  ]);

  const singleHeight = height || (size === 'small' ? 35 : 39);
  const isMultiline = singleHeight <= (realHeight ?? 0);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormItemBase
      focused={focused}
      ref={baseRef}
      className={classNames(className, 'PFormValueItem', 'PFormRadioGroup')}
      variant={variant}
      size={size}
      color={color}
      labelIcon={labelIcon}
      label={label}
      fullWidth={fullWidth}
      required={required}
      error={error}
      helperText={helperText}
      helperTextProps={{ style: { marginLeft: 2, marginTop: isMultiline && notEmpty(label) ? 20 : 0 } }}
      errorHelperText={errorHelperText}
      errorHelperTextProps={{ style: { marginLeft: 2, marginTop: isMultiline && notEmpty(label) ? 20 : 0 } }}
      style={{ width, paddingLeft: PADDING_LEFT, ...initStyle }}
      sx={sx}
      hidden={hidden}
      autoSize
      controlHeight={realHeight ? realHeight : singleHeight}
      controlContainerStyle={{
        paddingTop: isMultiline && size === 'medium' ? 4 : undefined,
      }}
      controlVerticalCenter={!isMultiline}
      control={control}
    />
  );
}

export default PFormRadioGroup;
