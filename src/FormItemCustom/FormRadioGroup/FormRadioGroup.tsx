import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactNode,
  useId,
  ChangeEvent,
  useLayoutEffect,
  useMemo,
} from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { RadioGroup, FormControlLabel, Radio, useTheme, CircularProgress } from '@mui/material';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { AutoTypeForwardRef, ToForwardRefExoticComponent } from '../../@util.private';
import { empty, ifUndefined, nextTick } from '@pdg/util';
import {
  FormRadioGroupProps,
  FormRadioGroupCommands,
  FormRadioGroupValue,
  FormRadioGroupSingleValue,
} from './FormRadioGroup.types';
import { useFormState } from '../../FormContext';
import FormItemBase from '../FormItemBase';

const PADDING_LEFT = 3;

const FormRadioGroup = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends FormRadioGroupSingleValue>(
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      fullWidth: initFullWidth,
      hidden: initHidden,
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
    }: FormRadioGroupProps<T>,
    ref: React.ForwardedRef<FormRadioGroupCommands<T>>
  ) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/

    type Props = FormRadioGroupProps<T>;
    type Commands = FormRadioGroupCommands<T>;
    type Value = FormRadioGroupValue<T>;

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
    } = useFormState();

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

    const { ref: resizeWidthDetectorRef } = useResizeDetector<HTMLDivElement>({
      handleWidth: true,
      handleHeight: false,
      onResize() {
        setRadioGroupNoWrapRect(resizeWidthDetectorRef.current?.getBoundingClientRect());
      },
    });

    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/

    const { height, ref: resizeHeightDetectorRef } = useResizeDetector<HTMLDivElement>();
    const { height: realHeight, ref: resizeRealHeightDetectorRef } = useResizeDetector<HTMLDivElement>();

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
      function (value: Value) {
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
      (value: any) => {
        return onValue ? onValue(value) : value;
      },
      [onValue]
    );

    const [valueRef, value, setValue] = useAutoUpdateRefState<Value, any>(initValue, getFinalValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

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

    useLayoutEffect(() => {
      const commands: Commands = {
        getType: () => 'FormRadioGroup',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => setValue(initValue),
        getValue: () => valueRef.current,
        setValue,
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
        setItems,
        getLoading: () => !!loadingRef.current,
        setLoading,
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
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      getFinalValue,
      hiddenRef,
      id,
      initValue,
      itemsRef,
      loadingRef,
      name,
      onAddValueItem,
      onRemoveValueItem,
      ref,
      setData,
      setDisabled,
      setErrorErrorHelperText,
      setHidden,
      setItems,
      setLoading,
      setValue,
      validate,
      valueRef,
    ]);

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

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          let finalValue: Value = e.target.value as Value;
          if (items) {
            const item = items.find(({ value }) => value.toString() === finalValue);
            if (item) {
              finalValue = item.value;
            }
          }
          finalValue = getFinalValue(finalValue);
          if (value !== finalValue) {
            setValue(finalValue, true);
            nextTick(() => {
              onValueChangeByUser(name, finalValue);
              onRequestSearchSubmit(name, finalValue);
            });
          }
        }
      },
      [readOnly, items, getFinalValue, value, setValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const singleHeight = height || (size === 'small' ? 35 : 39);
    const isMultiline = singleHeight <= ifUndefined(realHeight, 0);

    return (
      <FormItemBase
        focused={focused}
        ref={baseRef}
        className={classNames(className, 'FormValueItem', 'FormRadioGroup')}
        variant={variant}
        size={size}
        color={color}
        labelIcon={labelIcon}
        label={label}
        fullWidth={fullWidth}
        required={required}
        error={error}
        helperText={error ? errorHelperText : helperText}
        helperTextProps={{ style: { marginLeft: 2, marginTop: isMultiline ? 20 : 0 } }}
        style={{ width, paddingLeft: PADDING_LEFT, ...initStyle }}
        sx={sx}
        hidden={hidden}
        autoSize
        controlHeight={realHeight ? realHeight : singleHeight}
        controlContainerStyle={{
          paddingTop: isMultiline && size === 'medium' ? 4 : undefined,
        }}
        controlVerticalCenter={!isMultiline}
        control={
          <>
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
                  {items.map(({ value, label, disabled: itemDisabled }, idx) => (
                    <FormControlLabel
                      ref={idx === 0 ? resizeHeightDetectorRef : null}
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
                ref={resizeRealHeightDetectorRef}
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
                              inputRef={idx === 0 ? firstInputRef : null}
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
          </>
        }
      />
    );
  })
);

FormRadioGroup.displayName = 'FormRadioGroup';

export default FormRadioGroup;
