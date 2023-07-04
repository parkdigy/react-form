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
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, nextTick } from '../../@util';
import {
  FormRadioGroupProps as Props,
  FormRadioGroupDefaultProps,
  FormRadioGroupCommands,
  FormRadioGroupValue,
} from './FormRadioGroup.types';
import { useFormState } from '../../FormContext';
import FormItemBase from '../FormItemBase';

const PADDING_LEFT = 3;

const FormRadioGroup = React.forwardRef<FormRadioGroupCommands, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      fullWidth: initFullWidth,
      hidden,
      //----------------------------------------------------------------------------------------------------------------
      name,
      width: initWidth,
      labelIcon,
      label,
      inline,
      loading: initLoading,
      nowrap,
      items: initItems,
      value: initValue,
      data: initData,
      error: initError,
      helperText: initHelperText,
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
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      fullWidth: formFullWidth,
      onAddValueItem,
      onRemoveValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
    } = useFormState();

    // Memo - FormState ------------------------------------------------------------------------------------------------

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const focused = useMemo(() => (initFocused == null ? formFocused : initFocused), [initFocused, formFocused]);

    // State - FormState -----------------------------------------------------------------------------------------------

    const [fullWidth, setFullWidth] = useAutoUpdateState<Props['fullWidth']>(
      initFullWidth == null ? formFullWidth : initFullWidth
    );

    // Theme -----------------------------------------------------------------------------------------------------------

    const theme = useTheme();

    // Ref -------------------------------------------------------------------------------------------------------------

    const baseRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLInputElement>(null);

    // State -----------------------------------------------------------------------------------------------------------

    const [items, setItems] = useAutoUpdateState<Props['items']>(initItems);
    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateState<Props['helperText']>(initHelperText);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);
    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);
    const [loading, setLoading] = useAutoUpdateState<Props['loading']>(initLoading);
    const [width, setWidth] = useAutoUpdateState<Props['width']>(initWidth || '100%');
    const [formColWrapRect, setFormColWrapRect] = useState<DOMRect>();
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);

    // State - radioGroupNoWrapRect (ResizeDetector) -------------------------------------------------------------------

    const [radioGroupNoWrapRect, setRadioGroupNoWrapRect] = useState<DOMRect>();

    const { ref: resizeWidthDetectorRef } = useResizeDetector<HTMLDivElement>({
      handleWidth: true,
      handleHeight: false,
      onResize() {
        setRadioGroupNoWrapRect(resizeWidthDetectorRef.current?.getBoundingClientRect());
      },
    });

    // State - height (ResizeDetector) ---------------------------------------------------------------------------------

    const { height, ref: resizeHeightDetectorRef } = useResizeDetector<HTMLDivElement>();

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback(
      (value: Props['value']): Props['value'] => {
        return onValue ? onValue(value) : value;
      },
      [onValue]
    );

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateState<Props['value']>(initValue, getFinalValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      if (onValueChange) onValueChange(name, value);
    }, [value]);

    // Memo --------------------------------------------------------------------------------------------------------------

    const style = useMemo(() => ({ width, paddingLeft: PADDING_LEFT, ...initStyle }), [initStyle, width]);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        if (onValueChange) onValueChange(name, value);
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

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(function () {
      firstInputRef.current?.focus();
    }, []);

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback(
      function (error: boolean, helperText: ReactNode) {
        setError(error);
        setHelperText(helperText);
      },
      [setError, setHelperText]
    );

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      function (value: FormRadioGroupValue) {
        if (required && empty(value)) {
          setErrorHelperText(true, '필수 선택 항목입니다.');
          return false;
        }
        if (onValidate) {
          const onValidateResult = onValidate(value);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorHelperText(false, initHelperText);

        return true;
      },
      [required, onValidate, setErrorHelperText, initHelperText]
    );

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastItems = items;
      let lastLoading = loading;
      let lastDisabled = !!disabled;

      const commands: FormRadioGroupCommands = {
        getType: () => 'FormRadioGroup',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => {
          lastValue = getFinalValue(initValue);
          setValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value: Props['value']) => {
          lastValue = getFinalValue(value);
          setValue(lastValue);
        },
        getData: () => lastData,
        setData: (data) => {
          lastData = data;
          setData(data);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(value),
        setError: (error: boolean, helperText: ReactNode) =>
          setErrorHelperText(error, error ? helperText : initHelperText),
        getItems: () => lastItems,
        setItems: (items: Props['items']) => {
          lastItems = items;
          setItems(lastItems);
        },
        getLoading: () => !!lastLoading,
        setLoading: (loading: boolean) => {
          lastLoading = loading;
          setLoading(lastLoading);
        },
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
      name,
      initValue,
      value,
      getFinalValue,
      exceptValue,
      disabled,
      focus,
      validate,
      items,
      loading,
      ref,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setValue,
      setDisabled,
      setErrorHelperText,
      initHelperText,
      setItems,
      setLoading,
      data,
      setData,
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

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          let finalValue: Props['value'] = e.target.value;
          if (items) {
            const item = items.find(({ value }) => value.toString() === finalValue);
            if (item) {
              finalValue = item.value;
            }
          }
          finalValue = getFinalValue(finalValue);
          if (value !== finalValue) {
            setValue(finalValue);
            nextTick(() => {
              onValueChangeByUser(name, finalValue);
              onRequestSearchSubmit(name, finalValue);
            });
          }
        }
      },
      [readOnly, items, getFinalValue, value, setValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    // Render ----------------------------------------------------------------------------------------------------------

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
        helperText={helperText}
        helperTextProps={{ style: { marginLeft: 2 } }}
        style={style}
        sx={sx}
        hidden={hidden}
        controlHeight={height || (size === 'small' ? 35 : 39)}
        controlVerticalCenter
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
                  style={{ marginTop: 10, display: 'inline-flex', flexWrap: 'nowrap' }}
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
                      style={{ color: error ? theme.palette.error.main : '', marginTop: -10, whiteSpace: 'nowrap' }}
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
                style={{
                  marginTop: 10,
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
                      ref={resizeHeightDetectorRef}
                      label=''
                      control={<Radio color={color} size={size} />}
                      style={{ marginTop: -10, visibility: 'hidden' }}
                    />
                    <div style={{ position: 'absolute', left: 0, top: 1, opacity: 0.54 }}>
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
                          style={{ color: error ? theme.palette.error.main : '', marginTop: -10, whiteSpace: 'nowrap' }}
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
  }
);

FormRadioGroup.displayName = 'FormRadioGroup';
FormRadioGroup.defaultProps = FormRadioGroupDefaultProps;

export default FormRadioGroup;
