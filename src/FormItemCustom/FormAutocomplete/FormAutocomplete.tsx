import React, { useEffect, useState, useCallback, useId, ReactNode, useLayoutEffect, useRef, useMemo } from 'react';
import classNames from 'classnames';
import { Autocomplete, Chip } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, nextTick, notEmpty, isSame } from '../../@util';
import {
  FormAutocompleteProps as Props,
  FormAutocompleteDefaultProps,
  FormAutocompleteCommands,
  FormAutocompleteItem,
  FormAutocompleteValue,
  FormAutocompleteComponentValue,
} from './FormAutocomplete.types';
import { useFormState } from '../../FormContext';
import { FormTextField, FormTextFieldCommands } from '../../FormItemTextFieldBase';
import CircularProgress from '@mui/material/CircularProgress';
import { AutocompleteChangeDetails, AutocompleteChangeReason } from '@mui/base/AutocompleteUnstyled/useAutocomplete';

const FormAutocomplete = React.forwardRef<FormAutocompleteCommands, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      labelShrink: initLabelShrink,
      fullWidth: initFullWidth,
      //----------------------------------------------------------------------------------------------------------------
      name,
      labelIcon,
      label,
      loading: initLoading,
      items: initItems,
      value: initValue,
      error: initError,
      helperText: initHelperText,
      disabled: initDisabled,
      readOnly,
      required,
      exceptValue,
      width,
      placeholder,
      multiple,
      formValueSeparator,
      formValueSort,
      disablePortal,
      noOptionsText,
      loadingText,
      limitTags,
      openOnFocus,
      disableClearable,
      async,
      hidden,
      onLoadItems,
      onAsyncLoadValueItem,
      onRenderItem,
      onRenderTag,
      onAddItem,
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

    // Ref -------------------------------------------------------------------------------------------------------------

    const textFieldRef = useRef<FormTextFieldCommands>(null);
    const asyncTimerRef = useRef<NodeJS.Timeout | null>(null);
    const oldComponentValueRef = useRef<FormAutocompleteComponentValue>(null);

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      labelShrink: formLabelShrink,
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
    const labelShrink = useMemo(
      () => (initLabelShrink == null ? formLabelShrink : initLabelShrink),
      [initLabelShrink, formLabelShrink]
    );
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    // State -----------------------------------------------------------------------------------------------------------

    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);

    const [items, setItems] = useAutoUpdateState<Props['items']>(initItems);
    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateState<Props['helperText']>(initHelperText);
    const [loading, setLoading] = useAutoUpdateState<Props['loading']>(initLoading);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);

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
      const style: Props['style'] = {
        minWidth: 120,
        ...initStyle,
      };
      if (hidden) {
        style.display = 'none';
      }
      if (width != null) {
        style.width = width;
      }
      return style;
    }, [initStyle, width, hidden]);

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

    const [value, setValue] = useAutoUpdateState<Props['value']>(initValue, getFinalValue);
    const [valueItem, setValueItem] = useState<FormAutocompleteComponentValue>(null);

    const componentValue = useMemo(() => {
      let finalValue: Props['value'] = value;
      if (finalValue != null) {
        if (multiple) {
          if (!Array.isArray(finalValue)) {
            finalValue = [finalValue];
          }
        } else {
          if (Array.isArray(finalValue)) {
            finalValue = finalValue[0];
          }
        }
      } else {
        finalValue = multiple ? [] : undefined;
      }

      let newComponentValue: FormAutocompleteComponentValue = multiple ? [] : null;

      if (notEmpty(finalValue)) {
        if (items) {
          if (Array.isArray(finalValue)) {
            newComponentValue = items.filter(
              (info) => Array.isArray(finalValue) && finalValue.includes(info.value)
            ) as FormAutocompleteComponentValue;
          } else {
            newComponentValue = items.find((info) => info.value === value) || (multiple ? [] : null);
          }
        }
        if (empty(newComponentValue) && valueItem) {
          if (Array.isArray(finalValue)) {
            if (Array.isArray(valueItem)) {
              newComponentValue = valueItem.filter(
                (info) => Array.isArray(finalValue) && finalValue.includes(info.value)
              ) as FormAutocompleteComponentValue;
            }
          } else {
            if (!Array.isArray(valueItem) && finalValue === valueItem.value) {
              newComponentValue = valueItem;
            }
          }
        }
      }

      if ((oldComponentValueRef.current, newComponentValue, isSame(oldComponentValueRef.current, newComponentValue))) {
        return oldComponentValueRef.current;
      } else {
        oldComponentValueRef.current = newComponentValue;
        return newComponentValue;
      }
    }, [value, multiple, items, valueItem]);

    useEffect(() => {
      if (async && onAsyncLoadValueItem) {
        if (value != null) {
          if (!valueItem) {
            onAsyncLoadValueItem(value).then((valueItem) => {
              setValueItem(valueItem);
              if (valueItem) {
                if (Array.isArray(valueItem)) {
                  setItems(valueItem);
                } else {
                  setItems([valueItem]);
                }
              }
            });
          }
        } else {
          setValueItem(null);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [async, value, valueItem]);

    // Function ----------------------------------------------------------------------------------------------------------

    const showOnGetItemLoading = useCallback(() => {
      setIsOnGetItemLoading(true);
    }, []);

    const hideOnGetItemLoading = useCallback(() => {
      setIsOnGetItemLoading(false);
    }, []);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }

      if (!async && onLoadItems) {
        showOnGetItemLoading();
        onLoadItems().then((items) => {
          setItems(items);
          hideOnGetItemLoading();
        });
      }

      return () => {
        if (asyncTimerRef.current) {
          clearTimeout(asyncTimerRef.current);
          asyncTimerRef.current = null;
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    useEffect(() => {
      if (async && onLoadItems) {
        if (asyncTimerRef.current) {
          clearTimeout(asyncTimerRef.current);
          asyncTimerRef.current = null;
        }

        if (inputValue != null) {
          showOnGetItemLoading();

          asyncTimerRef.current = setTimeout(() => {
            asyncTimerRef.current = null;

            onLoadItems(inputValue)
              .then((items) => {
                if (componentValue) {
                  if (Array.isArray(componentValue)) {
                    const exceptValues = componentValue.map((info) => info.value);
                    setItems([...componentValue, ...items.filter((info) => !exceptValues.includes(info.value))]);
                  } else {
                    const exceptValue = componentValue.value;
                    setItems([componentValue, ...items.filter((info) => info.value !== exceptValue)]);
                  }
                } else {
                  setItems(items);
                }
              })
              .finally(() => {
                hideOnGetItemLoading();
              });
          }, 300);
        } else {
          if (Array.isArray(componentValue)) {
            setItems(componentValue);
          } else {
            if (componentValue) {
              setItems([componentValue]);
            } else {
              setItems([]);
            }
          }
          hideOnGetItemLoading();
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [async, inputValue]);

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(() => {
      textFieldRef.current?.focus();
    }, [textFieldRef]);

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

        const commands: FormAutocompleteCommands = {
          getType: () => 'FormAutocomplete',
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
      (
        componentValue: FormAutocompleteItem | FormAutocompleteItem[] | null,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<FormAutocompleteItem>
      ) => {
        const go = () => {
          let newValue: FormAutocompleteValue;

          if (componentValue) {
            if (componentValue) {
              if (Array.isArray(componentValue)) {
                newValue = componentValue.map((item) => item.value);
              } else {
                newValue = componentValue.value;
              }
            }
          }

          const finalValue = getFinalValue(newValue);
          if (!isSame(value, finalValue)) {
            setValue(finalValue);
            setValueItem(componentValue);
            nextTick(() => {
              onValueChangeByUser(name, finalValue);
              onRequestSearchSubmit(name, finalValue);
            });
          }
        };

        if (multiple && details && ['createOption', 'selectOption'].includes(reason)) {
          if (onAddItem) {
            const result = onAddItem(details.option);
            if (result instanceof Promise) {
              result.then((add) => {
                if (add) go();
              });
            } else if (result) {
              go();
            }
          } else {
            go();
          }
        } else {
          go();
        }
      },
      [multiple, getFinalValue, value, setValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Autocomplete
        options={items || []}
        className={classNames(className, 'FormValueItem', 'FormAutocomplete')}
        sx={sx}
        multiple={multiple}
        fullWidth={!width && fullWidth}
        openOnFocus={openOnFocus}
        disableClearable={disableClearable}
        disablePortal={disablePortal}
        noOptionsText={noOptionsText}
        value={componentValue}
        style={style}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        disabled={disabled}
        readOnly={readOnly}
        loading={loading || isOnGetItemLoading}
        loadingText={loadingText}
        limitTags={limitTags}
        onChange={(e, value, reason, details) => handleChange(value, reason, details)}
        renderOption={(props, option) => (
          <li {...props} key={option.value}>
            {onRenderItem ? onRenderItem(option) : option.label}
          </li>
        )}
        onInputChange={(event, newInputValue, reason) => {
          if (reason === 'input') {
            setInputValue(newInputValue);
          } else if (reason === 'reset') {
            setInputValue(undefined);
          }
        }}
        renderTags={(value: FormAutocompleteItem[], getTagProps) =>
          value.map((option, index) => (
            <Chip size='small' label={onRenderTag ? onRenderTag(option) : option.label} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <FormTextField
            {...params}
            ref={textFieldRef}
            name={name}
            variant={variant}
            size={size}
            color={color}
            labelIcon={labelIcon}
            label={label}
            labelShrink={labelShrink}
            required={required}
            focused={focused}
            error={error}
            helperText={helperText}
            placeholder={placeholder}
            noFormValueItem
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading || isOnGetItemLoading ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            inputProps={readOnly || disabled ? { ...params.inputProps, tabIndex: -1 } : params.inputProps}
          />
        )}
      />
    );
  }
);

FormAutocomplete.displayName = 'FormAutocomplete';
FormAutocomplete.defaultProps = FormAutocompleteDefaultProps;

export default FormAutocomplete;
