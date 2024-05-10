import React, { useEffect, useState, useCallback, useId, ReactNode, useLayoutEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { ToggleButtonGroup, ToggleButton, useTheme, CircularProgress, Icon } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { ToForwardRefExoticComponent, AutoTypeForwardRef } from '../../@util.private';
import { empty, nextTick, notEmpty, equal } from '@pdg/util';
import { PartialPick } from '../../@types';
import {
  FormToggleButtonGroupProps,
  FormToggleButtonGroupCommands,
  FormToggleButtonGroupSingleValue,
} from './FormToggleButtonGroup.types';
import { useFormState } from '../../FormContext';
import FormItemBase, { FormItemBaseProps } from '../FormItemBase';
import './FormToggleButtonGroup.scss';

const FormToggleButtonGroup = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends FormToggleButtonGroupSingleValue, Multiple extends boolean | undefined>(
    {
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
      //----------------------------------------------------------------------------------------------------------------
      onChange,
      onValue,
      onValidate,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    }: FormToggleButtonGroupProps<T, Multiple>,
    ref: React.ForwardedRef<FormToggleButtonGroupCommands<T, Multiple>>
  ) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/

    type Props = FormToggleButtonGroupProps<T, Multiple>;
    type Commands = FormToggleButtonGroupCommands<T, Multiple>;

    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();
    const labelId = useId();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const refForResizeWidthDetect = useRef<HTMLDivElement>(null);
    const refForButtonResizeHeightDetect = useRef<HTMLButtonElement>(null);
    const refForLoadingResizeHeightDetect = useRef<HTMLDivElement>(null);

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
    } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const fullWidth = useMemo(
      () => (type === 'checkbox' || type === 'radio' ? true : initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth, type]
    );

    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/

    const [focused, setFocused] = useAutoUpdateState<Props['focused']>(initFocused == null ? formFocused : initFocused);

    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * State - width (ResizeDetector)
     * ******************************************************************************************************************/

    const [width, setWidth] = useState<number>();

    useResizeDetector({
      targetRef: refForResizeWidthDetect,
      handleWidth: true,
      onResize() {
        setWidth(refForResizeWidthDetect.current?.getBoundingClientRect()?.width);
      },
    });

    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/

    const [height, setHeight] = useState<number>();

    useResizeDetector({
      targetRef: refForButtonResizeHeightDetect,
      handleHeight: true,
      onResize() {
        setHeight(refForButtonResizeHeightDetect.current?.getBoundingClientRect()?.height);
      },
    });
    useResizeDetector({
      targetRef: refForLoadingResizeHeightDetect,
      handleHeight: true,
      onResize() {
        setHeight(refForLoadingResizeHeightDetect.current?.getBoundingClientRect()?.height);
      },
    });

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);
    const [loadingRef, loading, setLoading] = useAutoUpdateRefState(initLoading);
    const [itemsRef, items, setItems] = useAutoUpdateRefState(initItems);

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
      (value: any) => {
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

    const [valueRef, value, setValue] = useAutoUpdateRefState<Props['value'], any>(initValue, getFinalValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    useFirstSkipEffect(() => {
      setValue(valueRef.current);
    }, [multiple]);

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
            setValue((multiple ? [items[0].value] : items[0].value) as Props['value']);
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, value, multiple, notAllowEmptyValue]);

    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/

    const focus = useCallback(() => {
      refForButtonResizeHeightDetect.current?.focus();
    }, [refForButtonResizeHeightDetect]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      if (ref || onAddValueItem) {
        const commands: Commands = {
          getType: () => 'FormToggleButtonGroup',
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
          setError: (error: boolean, errorText: ReactNode | undefined) =>
            setErrorErrorHelperText(error, error ? errorText : undefined),
          getFormValueSeparator: () => formValueSeparator,
          isFormValueSort: () => !!formValueSort,
          getItems: () => itemsRef.current,
          setItems,
          isMultiple: () => !!multiple,
          getLoading: () => !!loadingRef.current,
          setLoading,
        };

        if (ref) {
          if (typeof ref === 'function') {
            ref(commands);
          } else {
            ref.current = commands;
          }
        }

        if (onAddValueItem) onAddValueItem(id, commands);

        return () => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(null);
            } else {
              ref.current = null;
            }
          }

          if (onRemoveValueItem) onRemoveValueItem(id);
        };
      }
    }, [
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      formValueSeparator,
      formValueSort,
      getFinalValue,
      hiddenRef,
      id,
      initValue,
      itemsRef,
      loadingRef,
      multiple,
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
          finalValue = getFinalValue(finalValue);
          if (!equal(valueRef.current, finalValue)) {
            setValue(finalValue, true);
            nextTick(() => {
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
        valueRef,
        multiple,
        setValue,
        onValueChangeByUser,
        name,
        onRequestSearchSubmit,
      ]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const formControlBaseProps: PartialPick<FormItemBaseProps, 'focused'> = {};
    if (focused) {
      formControlBaseProps.focused = true;
    }

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
              ref={idx === 0 ? refForButtonResizeHeightDetect : undefined}
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
      setFocused,
      size,
      theme.palette.error.main,
      type,
    ]);

    return (
      <FormItemBase
        {...formControlBaseProps}
        className={classNames(
          className,
          'FormValueItem',
          'FormToggleButtonGroup',
          `variant-${variant}`,
          `size-${size}`,
          !!label && 'with-label',
          !!fullWidth && 'full-width',
          `type-${type}`
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
        controlHeight={height || 0}
        controlVerticalCenter={isOnGetItemLoading || loading}
        control={
          isOnGetItemLoading || loading ? (
            <div style={{ opacity: 0.54 }} ref={refForLoadingResizeHeightDetect}>
              <CircularProgress size={16} color='inherit' />
            </div>
          ) : (
            <>
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
                className='ToggleButtonGroup'
                exclusive={!multiple}
                fullWidth={fullWidth}
                value={value == null ? null : value}
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
            </>
          )
        }
      />
    );
  })
);

FormToggleButtonGroup.displayName = 'FormToggleButtonGroup';

export default FormToggleButtonGroup;
