import React, { useEffect, useState, useCallback, useId, ReactNode, useLayoutEffect, useRef, useMemo } from 'react';
import classNames from 'classnames';
import {
  Autocomplete,
  Chip,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
  CircularProgress,
} from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { ToForwardRefExoticComponent, AutoTypeForwardRef } from '../../@util.private';
import { empty, nextTick, notEmpty, equal, Dict, ifUndefined } from '@pdg/util';
import {
  FormAutocompleteProps,
  FormAutocompleteCommands,
  FormAutocompleteItem,
  FormAutocompleteComponentValue,
  FormAutocompleteSingleValue,
} from './FormAutocomplete.types';
import { useFormState } from '../../FormContext';
import { FormTextField, FormTextFieldCommands } from '../../FormItemTextFieldBase';

const FormAutocomplete = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends FormAutocompleteSingleValue, Multiple extends boolean | undefined>(
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
      data: initData,
      error: initError,
      helperText,
      disabled: initDisabled,
      readOnly,
      required,
      exceptValue,
      width,
      placeholder,
      multiple,
      formValueSeparator = ',',
      formValueSort,
      disablePortal,
      noOptionsText = '항목이 없습니다',
      loadingText,
      limitTags,
      getLimitTagsText,
      openOnFocus,
      disableClearable,
      async,
      hidden: initHidden,
      onLoadItems,
      onAsyncLoadValueItem,
      onRenderItem,
      onRenderTag,
      onAddItem,
      getOptionDisabled,
      //----------------------------------------------------------------------------------------------------------------
      onChange,
      onValue,
      onValidate,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    }: FormAutocompleteProps<T, Multiple>,
    ref: React.ForwardedRef<FormAutocompleteCommands<T, Multiple>>
  ) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/

    type Props = FormAutocompleteProps<T, Multiple>;
    type Commands = FormAutocompleteCommands<T, Multiple>;
    type ComponentValue = FormAutocompleteComponentValue<T, Multiple>;

    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const textFieldRef = useRef<FormTextFieldCommands>(null);
    const asyncTimerRef = useRef<NodeJS.Timeout | null>(null);
    const oldComponentValueRef = useRef<ComponentValue>(null);

    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      labelShrink: formLabelShrink,
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
    const labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

    const [inputValue, setInputValue] = useState<string | undefined>(undefined);

    const [dataRef, , setData] = useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
      useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
    );
    const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);
    const [loadingRef, loading, setLoading] = useAutoUpdateRefState(initLoading);
    const [itemsRef, items, setItems] = useAutoUpdateRefState<Props['items']>(initItems);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const itemsValues = useMemo(() => {
      if (items) {
        return items.reduce<Record<string, any>>((res, { value }) => {
          res[value.toString()] = value;
          return res;
        }, {});
      } else {
        return {};
      }
    }, [items]);

    const itemsInfos = useMemo(() => {
      if (items) {
        return items.reduce(
          (res, info) => {
            res[info.value.toString()] = info;
            return res;
          },
          {} as Dict<FormAutocompleteItem<T>>
        );
      } else {
        return {};
      }
    }, [items]);

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

    const [valueRef, value, setValue] = useAutoUpdateRefState(initValue, getFinalValue);
    const [valueItem, setValueItem] = useState<ComponentValue>(null);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    useFirstSkipEffect(() => {
      setValue(getFinalValue(valueRef.current));
    }, [multiple]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const componentValue = useMemo(() => {
      let finalValue: Props['value'] = value;
      if (finalValue != null) {
        if (multiple) {
          if (!Array.isArray(finalValue)) {
            finalValue = [finalValue] as unknown as Props['value'];
          }
        } else {
          if (Array.isArray(finalValue)) {
            finalValue = finalValue[0] as Props['value'];
          }
        }
      } else {
        finalValue = (multiple ? [] : undefined) as Props['value'];
      }

      let newComponentValue: ComponentValue = (multiple ? [] : null) as ComponentValue;

      if (notEmpty(finalValue)) {
        if (items) {
          if (Array.isArray(finalValue)) {
            finalValue.forEach((v) => {
              const key = v.toString();
              if (itemsInfos[key]) {
                newComponentValue && newComponentValue.push(itemsInfos[key]);
              }
            });
          } else {
            newComponentValue = (items.find((info) => info.value === value) ||
              (multiple ? [] : null)) as ComponentValue;
          }
        }
        if (empty(newComponentValue) && valueItem) {
          if (Array.isArray(finalValue)) {
            if (Array.isArray(valueItem)) {
              newComponentValue = valueItem.filter(
                (info) => Array.isArray(finalValue) && finalValue.includes(info.value)
              ) as ComponentValue;
            }
          } else {
            if (!Array.isArray(valueItem) && finalValue === valueItem.value) {
              newComponentValue = valueItem;
            }
          }
        }
      }

      if (oldComponentValueRef.current && newComponentValue && equal(oldComponentValueRef.current, newComponentValue)) {
        return oldComponentValueRef.current;
      } else {
        oldComponentValueRef.current = newComponentValue;
        return newComponentValue;
      }
    }, [value, multiple, items, valueItem, itemsInfos]);

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

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const showOnGetItemLoading = useCallback(() => {
      setIsOnGetItemLoading(true);
    }, []);

    const hideOnGetItemLoading = useCallback(() => {
      setIsOnGetItemLoading(false);
    }, []);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
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

    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/

    const focus = useCallback(() => {
      textFieldRef.current?.focus();
    }, [textFieldRef]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo(
      () =>
        ({
          getType: () => 'FormAutocomplete',
          getName: () => name,
          getReset: () => getFinalValue(initValue),
          reset: () => setValue(initValue),
          getValue: () => valueRef.current,
          setValue: (newValue) => setValue(newValue),
          getData: () => dataRef.current,
          setData: (data) => setData(data),
          isExceptValue: () => !!exceptValue,
          isDisabled: () => !!disabledRef.current,
          setDisabled: (disabled) => setDisabled(disabled),
          isHidden: () => !!hiddenRef.current,
          setHidden: (hidden) => setHidden(hidden),
          focus,
          focusValidate: focus,
          validate: () => validate(valueRef.current),
          setError: (error: boolean, errorText: ReactNode | undefined) =>
            setErrorErrorHelperText(error, error ? errorText : undefined),
          getFormValueSeparator: () => formValueSeparator,
          isFormValueSort: () => !!formValueSort,
          getItems: () => itemsRef.current,
          setItems: (items) => setItems(items),
          isMultiple: () => !!multiple,
          getLoading: () => !!loadingRef.current,
          setLoading: (loading) => setLoading(loading),
        }) as Commands,
      [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueSeparator,
        formValueSort,
        getFinalValue,
        hiddenRef,
        initValue,
        itemsRef,
        loadingRef,
        multiple,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        setValue,
        validate,
        valueRef,
      ]
    );

    useLayoutEffect(() => {
      if (ref || onAddValueItem) {
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
    }, [commands, id, onAddValueItem, onRemoveValueItem, ref]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (
        componentValue: ComponentValue,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<FormAutocompleteItem<T>>
      ) => {
        const go = () => {
          let newValue: Props['value'] = undefined;

          if (componentValue) {
            if (componentValue) {
              if (Array.isArray(componentValue)) {
                newValue = componentValue.map((item) => item.value) as Props['value'];
              } else {
                newValue = componentValue.value as Props['value'];
              }
            }
          }

          const finalValue = getFinalValue(newValue);
          if (!equal(valueRef.current, finalValue)) {
            setValue(finalValue, true);
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
      [multiple, getFinalValue, valueRef, setValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]
    );

    const handleGetOptionDisabled = useCallback(
      (option: FormAutocompleteItem<T>) => {
        if (getOptionDisabled) {
          return option.disabled || getOptionDisabled(option);
        } else {
          return !!option.disabled;
        }
      },
      [getOptionDisabled]
    );

    /********************************************************************************************************************
     * Render - Variables
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

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
        value={componentValue as any}
        style={style}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        getOptionDisabled={handleGetOptionDisabled}
        disabled={disabled}
        readOnly={readOnly}
        loading={loading || isOnGetItemLoading}
        loadingText={loadingText}
        limitTags={limitTags}
        getLimitTagsText={getLimitTagsText}
        onChange={(e, value, reason, details) => handleChange(value as any, reason, details)}
        renderOption={(props, option) => (
          <li {...props} key={`${option.value}`}>
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
        renderValue={(value, getItemProps) => {
          if (Array.isArray(value)) {
            return value.map((option, index) => (
              <Chip
                size='small'
                label={onRenderTag ? onRenderTag(option) : option.label}
                {...getItemProps({ index })}
              />
            ));
          } else {
            return (
              <Chip
                size='small'
                label={onRenderTag ? onRenderTag(value) : value.label}
                {...getItemProps({ index: 0 })}
              />
            );
          }
        }}
        renderInput={(params) => {
          const slotProps = {
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading || isOnGetItemLoading ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
            htmlInput: {
              ...params.inputProps,
              tabIndex: readOnly || disabled ? -1 : undefined,
            },
          };
          return (
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
              readOnly={readOnly}
              helperText={error ? errorHelperText : helperText}
              slotProps={slotProps}
              placeholder={placeholder}
              noFormValueItem
            />
          );
        }}
      />
    );
  })
);

FormAutocomplete.displayName = 'FormAutocomplete';

export default FormAutocomplete;
