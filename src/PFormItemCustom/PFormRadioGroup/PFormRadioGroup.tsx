import React, { useEffect, useState, useCallback, useRef, ReactNode, useId, ChangeEvent, useMemo } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { RadioGroup, FormControlLabel, Radio, useTheme, CircularProgress } from '@mui/material';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { useAutoUpdateRefState, useAutoUpdateState, useForwardLayoutRef } from '@pdg/react-hook';
import { AutoTypeForwardRef, ToForwardRefExoticComponent } from '../../@util.private';
import { empty, ifUndefined, notEmpty } from '@pdg/compare';
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

const PFormRadioGroup = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <
    BaseValue extends PFormRadioGroupSingleValue,
    Items extends PFormRadioGroupItems<BaseValue> = PFormRadioGroupItems<BaseValue>,
    Value extends Items[number]['value'] = Items[number]['value'],
  >(
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      fullWidth: initFullWidth,
      hidden: initHidden,
      startAdornment,
      endAdornment,
      //----------------------------------------------------------------------------------------------------------------
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
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
      //----------------------------------------------------------------------------------------------------------------
      ...props
    }: PFormRadioGroupProps<BaseValue, Items>,
    ref: React.ForwardedRef<PFormRadioGroupCommands<Value>>
  ) {
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

    const variant = ifUndefined(initVariant, formVariant);
    const size = ifUndefined(initSize, formSize);
    const color = ifUndefined(initColor, formColor);
    const focused = ifUndefined(initFocused, formFocused);

    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/

    const [fullWidth, setFullWidth] = useAutoUpdateState<Props['fullWidth']>(
      initFullWidth == null ? formFullWidth : initFullWidth
    );

    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const baseRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLInputElement>(null);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);
    const [width, setWidth] = useAutoUpdateState<Props['width']>(initWidth || '100%');
    const [formColWrapRect, setFormColWrapRect] = useState<DOMRect>();

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);
    const [loadingRef, loading, setLoading] = useAutoUpdateRefState(initLoading);
    const [itemsRef, items, setItems] = useAutoUpdateRefState(initItems);

    /********************************************************************************************************************
     * State - radioGroupNoWrapRect (ResizeDetector)
     * ******************************************************************************************************************/

    const [radioGroupNoWrapRect, setRadioGroupNoWrapRect] = useState<DOMRect>();

    const { ref: resizeWidthDetectorRef } = useResizeDetector({
      handleWidth: true,
      handleHeight: false,
      onResize() {
        setRadioGroupNoWrapRect(resizeWidthDetectorRef.current?.getBoundingClientRect());
      },
    });

    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/

    const { height, ref: resizeHeightDetectorRef } = useResizeDetector();
    const { height: realHeight, ref: resizeRealHeightDetectorRef } = useResizeDetector();

    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/

    const setErrorErrorHelperText = useCallback(
      function (error: boolean, errorHelperText: ReactNode) {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/

    const validate = useCallback(
      function (value: PFormRadioGroupValue<BaseValue>) {
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
      (value: PFormRadioGroupValue<BaseValue>) => {
        return onValue ? onValue(value) : value;
      },
      [onValue]
    );

    const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);

    const updateValue = useCallback(
      (newValue: Props['value'], skipCallback = false) => {
        const finalValue = _setValue(newValue, skipCallback);

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
      if (onLoadItems) {
        setIsOnGetItemLoading(true);
        onLoadItems().then((items) => {
          setItems(items);
          setIsOnGetItemLoading(false);
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullWidth, initWidth]);

    useEffect(() => {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initWidth, formFullWidth, initFullWidth, formColWrapRect, radioGroupNoWrapRect]);

    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/

    const focus = useCallback(function () {
      firstInputRef.current?.focus();
    }, []);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<Commands>(
      () => ({
        getType: () => 'PFormRadioGroup',
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
        setError: (error: boolean, errorHelperText: ReactNode) =>
          setErrorErrorHelperText(error, error ? errorHelperText : undefined),
        getItems: () => itemsRef.current,
        setItems: (v) => setItems(v as Props['items']),
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
      }),
      [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        initValue,
        itemsRef,
        loadingRef,
        name,
        onLoadItems,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        updateValue,
        validate,
        valueRef,
      ]
    );

    useForwardLayoutRef(
      ref as any,
      commands,
      useCallback((commands: Commands) => onAddValueItem(id, commands), [id, onAddValueItem]),
      useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
    );

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

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
          finalValue = getFinalValue(finalValue);
          if (value !== finalValue) {
            updateValue(finalValue, true);
            setTimeout(() => {
              onValueChangeByUser(name, finalValue);
              onRequestSearchSubmit(name, finalValue);
            });
          }
        }
      },
      [readOnly, items, getFinalValue, value, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const control = useMemo(() => {
      return (
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: fullWidth ? '100%' : undefined }}
        >
          {startAdornment && <div>{startAdornment}</div>}
          <div style={{ flex: 1 }}>
            {!fullWidth && !isOnGetItemLoading && !loading && items && (
              <div
                ref={(ref) => {
                  resizeWidthDetectorRef.current = ref;
                }}
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
                  {items.map(({ value, label, disabled: itemDisabled }, idx) => (
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
                  ))}
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
                  <>
                    {items &&
                      items.map(({ value, label, disabled: itemDisabled }, idx) => (
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
                      ))}
                  </>
                )}
              </RadioGroup>
            </div>
          </div>
          {endAdornment && <div>{endAdornment}</div>}
        </div>
      );
    }, [
      color,
      disabled,
      endAdornment,
      error,
      fullWidth,
      handleChange,
      inline,
      isOnGetItemLoading,
      items,
      loading,
      name,
      nowrap,
      props,
      readOnly,
      resizeHeightDetectorRef,
      resizeRealHeightDetectorRef,
      resizeWidthDetectorRef,
      size,
      startAdornment,
      theme.palette.error.main,
      value,
      width,
    ]);

    const singleHeight = height || (size === 'small' ? 35 : 39);
    const isMultiline = singleHeight <= ifUndefined(realHeight, 0);

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
        helperText={error ? errorHelperText : helperText}
        helperTextProps={{ style: { marginLeft: 2, marginTop: isMultiline && notEmpty(label) ? 20 : 0 } }}
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
  })
);

PFormRadioGroup.displayName = 'PFormRadioGroup';

export default PFormRadioGroup;
