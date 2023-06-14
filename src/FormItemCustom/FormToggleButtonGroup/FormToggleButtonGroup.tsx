import React, { useEffect, useState, useCallback, useId, ReactNode, useLayoutEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { ToggleButtonGroup, ToggleButton, useTheme, CircularProgress, Icon } from '@mui/material';
import { useAutoUpdateLayoutState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, nextTick, notEmpty, isSame } from '../../@util';
import { PartialPick } from '../../@types';
import {
  FormToggleButtonGroupProps as Props,
  FormToggleButtonGroupDefaultProps,
  FormToggleButtonGroupCommands,
} from './FormToggleButtonGroup.types';
import { useFormState } from '../../FormContext';
import FormItemBase, { FormItemBaseProps } from '../FormItemBase';
import './FormToggleButtonGroup.scss';

const FormToggleButtonGroup = React.forwardRef<FormToggleButtonGroupCommands, Props>(
  (
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
      type,
      loading: initLoading,
      items: initItems,
      value: initValue,
      error: initError,
      helperText: initHelperText,
      disabled: initDisabled,
      readOnly,
      required,
      notAllowEmptyValue,
      exceptValue,
      width: initWidth,
      multiple,
      formValueSeparator,
      formValueSort,
      onLoadItems,
      //----------------------------------------------------------------------------------------------------------------
      onChange,
      onValue,
      onValidate,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();
    const labelId = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      fullWidth: formFullWidth,
      formColWidth,
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
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    // State - FormState -----------------------------------------------------------------------------------------------

    const [focused, setFocused] = useAutoUpdateLayoutState<Props['focused']>(
      initFocused == null ? formFocused : initFocused
    );

    // Theme -----------------------------------------------------------------------------------------------------------

    const theme = useTheme();

    // State - width (ResizeDetector) ----------------------------------------------------------------------------------

    const [width, setWidth] = useState<number>();

    const { ref: resizeWidthDetectorRef } = useResizeDetector({
      handleWidth: true,
      onResize() {
        setWidth(resizeWidthDetectorRef.current.getBoundingClientRect().width);
      },
    });

    // State - height (ResizeDetector) ---------------------------------------------------------------------------------

    const [height, setHeight] = useState<number>();

    const { ref: resizeHeightDetectorRef } = useResizeDetector({
      handleHeight: true,
      onResize() {
        setHeight(resizeHeightDetectorRef.current.getBoundingClientRect().height);
      },
    });

    // State -----------------------------------------------------------------------------------------------------------

    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);

    const [items, setItems] = useAutoUpdateLayoutState<Props['items']>(initItems);
    const [error, setError] = useAutoUpdateLayoutState<Props['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateLayoutState<Props['helperText']>(initHelperText);
    const [loading, setLoading] = useAutoUpdateLayoutState<Props['loading']>(initLoading);
    const [disabled, setDisabled] = useAutoUpdateLayoutState<Props['disabled']>(initDisabled);

    // Memo --------------------------------------------------------------------------------------------------------------

    const itemsValues = useMemo(() => {
      if (items) {
        return items.reduce<Record<string, string | number>>((res, { value }) => {
          res[value.toString()] = value;
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

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback(
      (value: Props['value']): Props['value'] => {
        let finalValue = value;
        if (multiple) {
          if (!Array.isArray(finalValue)) {
            if (finalValue != null && notEmpty(finalValue)) {
              if (typeof finalValue === 'string') {
                finalValue = Array.from(new Set(finalValue.split(formValueSeparator || ',')));
              } else {
                finalValue = [finalValue];
              }
            } else {
              finalValue = [];
            }
          }
        } else {
          if (Array.isArray(finalValue)) {
            if (notEmpty(finalValue)) {
              finalValue = finalValue[0];
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
                  const realValue = itemsValues[v.toString()];
                  return realValue != null ? realValue : v;
                });
              }
            } else {
              const realValue = itemsValues[finalValue.toString()];
              if (realValue != null && finalValue !== realValue) {
                finalValue = realValue;
              }
            }
          }
        }

        return onValue ? onValue(finalValue) : finalValue;
      },
      [multiple, formValueSeparator, itemsValues, onValue]
    );

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateLayoutState<Props['value']>(initValue, getFinalValue);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }

      if (onLoadItems) {
        setIsOnGetItemLoading(true);
        onLoadItems().then((items) => {
          setItems(items);
          setIsOnGetItemLoading(false);
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

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
            setValue(multiple ? [items[0].value] : items[0].value);
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, value, multiple, notAllowEmptyValue]);

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(() => {
      if (resizeHeightDetectorRef.current) resizeHeightDetectorRef.current.focus();
    }, [resizeHeightDetectorRef]);

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback(
      (error: boolean, helperText: ReactNode) => {
        setError(error);
        setHelperText(helperText);
      },
      [setError, setHelperText]
    );

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      (value: Props['value']) => {
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
      if (ref || onAddValueItem) {
        let lastValue = value;
        let lastItems = items;
        let lastLoading = loading;
        let lastDisabled = !!disabled;

        const commands: FormToggleButtonGroupCommands = {
          getType: () => 'FormToggleButtonGroup',
          getName: () => name,
          getReset: () => getFinalValue(initValue),
          reset: () => {
            lastValue = getFinalValue(initValue);
            setValue(lastValue);
          },
          getValue: () => lastValue,
          setValue: (value) => {
            lastValue = getFinalValue(value);
            setValue(lastValue);
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
          setError: (error: boolean, errorText: ReactNode | undefined) =>
            setErrorHelperText(error, error ? errorText : initHelperText),
          getFormValueSeparator: () => formValueSeparator,
          isFormValueSort: () => !!formValueSort,
          getItems: () => lastItems,
          setItems: (items) => {
            lastItems = items;
            setItems(lastItems);
          },
          isMultiple: () => !!multiple,
          getLoading: () => !!lastLoading,
          setLoading: (loading) => {
            lastLoading = loading;
            setLoading(lastLoading);
          },
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
      name,
      initValue,
      value,
      getFinalValue,
      exceptValue,
      disabled,
      multiple,
      focus,
      validate,
      formValueSeparator,
      formValueSort,
      items,
      ref,
      onAddValueItem,
      onRemoveValueItem,
      loading,
      id,
      setValue,
      setDisabled,
      setErrorHelperText,
      initHelperText,
      setItems,
      setLoading,
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

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
                  finalValue = [value[0]];
                }
              }
            } else {
              if (finalValue == null) {
                finalValue = value;
              }
            }
          }
          finalValue = getFinalValue(finalValue);
          if (!isSame(value, finalValue)) {
            setValue(finalValue);
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
        value,
        multiple,
        setValue,
        onValueChangeByUser,
        name,
        onRequestSearchSubmit,
      ]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    const formControlBaseProps: PartialPick<FormItemBaseProps, 'focused'> = {};
    if (focused) {
      formControlBaseProps.focused = true;
    }

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
        helperText={helperText}
        helperTextProps={{ style: { marginLeft: 2 } }}
        style={style}
        sx={sx}
        controlHeight={height || 0}
        controlVerticalCenter={isOnGetItemLoading || loading}
        control={
          isOnGetItemLoading || loading ? (
            <div style={{ opacity: 0.54 }} ref={resizeHeightDetectorRef}>
              <CircularProgress size={16} color='inherit' />
            </div>
          ) : (
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
                  <ToggleButtonGroup className='ToggleButtonGroup' exclusive={!multiple}>
                    {items &&
                      items.map(({ value, label, disabled: itemDisabled, color: itemColor }, idx) => (
                        <ToggleButton
                          ref={idx === 0 ? resizeHeightDetectorRef : null}
                          key={idx}
                          size={size}
                          className='ToggleButton'
                          value={value}
                          color={itemColor || color}
                          disabled={disabled || readOnly || itemDisabled}
                          style={{
                            borderColor: error ? theme.palette.error.main : '',
                            color: error ? theme.palette.error.main : '',
                          }}
                          onFocus={() => setFocused(initFocused || true)}
                          onBlur={() => setFocused(initFocused || false)}
                        >
                          {label}
                        </ToggleButton>
                      ))}
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
                  flexWrap: type === 'checkbox' ? 'wrap' : 'nowrap',
                }}
                aria-labelledby={notEmpty(label) ? labelId : undefined}
              >
                {isOnGetItemLoading || loading || !items || empty(items) ? (
                  <ToggleButton
                    ref={resizeHeightDetectorRef}
                    size={size}
                    className='ToggleButton'
                    disabled={disabled || readOnly}
                    value=''
                    style={{ visibility: 'hidden' }}
                  />
                ) : (
                  items.map(({ value, label, disabled: itemDisabled, color: itemColor }, idx) => (
                    <ToggleButton
                      ref={idx === 0 ? resizeHeightDetectorRef : undefined}
                      key={idx}
                      size={size}
                      className='ToggleButton'
                      value={value}
                      color={itemColor || color}
                      disabled={disabled || readOnly || itemDisabled}
                      style={{
                        borderColor: error ? theme.palette.error.main : '',
                        color: error ? theme.palette.error.main : '',
                        width: type === 'checkbox' ? 'auto' : undefined,
                      }}
                      onFocus={() => setFocused(initFocused || true)}
                      onBlur={() => setFocused(initFocused || false)}
                    >
                      {type === 'checkbox' && (
                        <>
                          <Icon className='__checkbox-unchecked__'>check_box_outline_blank</Icon>
                          <Icon className='__checkbox-checked__'>check_box</Icon>
                        </>
                      )}
                      {label}
                    </ToggleButton>
                  ))
                )}
              </ToggleButtonGroup>
            </>
          )
        }
      />
    );
  }
);

FormToggleButtonGroup.displayName = 'FormToggleButtonGroup';
FormToggleButtonGroup.defaultProps = FormToggleButtonGroupDefaultProps;

export default FormToggleButtonGroup;
