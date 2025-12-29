import React, { useState, useCallback, useId, ReactNode, useRef, useMemo, FocusEvent } from 'react';
import classNames from 'classnames';
import {
  Autocomplete,
  Chip,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
  CircularProgress,
} from '@mui/material';
import {
  clearTimeoutRef,
  useAutoUpdateRef,
  useChanged,
  useEventEffect,
  useFirstSkipChanged,
  useFirstSkipEffect,
  useForwardRef,
  useTimeoutRef,
} from '@pdg/react-hook';
import { Dict } from '@pdg/types';
import { empty, notEmpty, equal } from '@pdg/compare';
import {
  PFormAutocompleteProps,
  PFormAutocompleteCommands,
  PFormAutocompleteItem,
  PFormAutocompleteComponentValue,
  PFormAutocompleteSingleValue,
  PFormAutocompleteItems,
} from './PFormAutocomplete.types';
import { useFormState } from '../../PFormContext';
import { PFormTextField, PFormTextFieldCommands } from '../../PFormItemTextFieldBase';

function PFormAutocomplete<
  T extends PFormAutocompleteSingleValue,
  Multiple extends boolean | undefined = undefined,
  Items extends PFormAutocompleteItems<T> = PFormAutocompleteItems<T>,
>({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  labelShrink: initLabelShrink,
  fullWidth: initFullWidth,
  /********************************************************************************************************************/
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
  autoFocus,
  hidden: initHidden,
  onLoadItems,
  onAsyncLoadValueItem,
  onRenderItem,
  onRenderTag,
  onAddItem,
  getOptionDisabled,
  /********************************************************************************************************************/
  onChange,
  onValue,
  onValidate,
  onFocus,
  onBlur,
  /********************************************************************************************************************/
  className,
  style: initStyle,
  sx,
}: PFormAutocompleteProps<T, Multiple, Items>) {
  /********************************************************************************************************************
   * type
   * ******************************************************************************************************************/

  type Props = PFormAutocompleteProps<T, Multiple, Items>;
  type Commands = PFormAutocompleteCommands<T, Multiple>;
  type ComponentValue = PFormAutocompleteComponentValue<T, Multiple>;

  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();

  /********************************************************************************************************************
   * TimeoutRef
   * ******************************************************************************************************************/

  const [asyncTimeoutRef, setAsyncTimeout] = useTimeoutRef();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const textFieldRef = useRef<PFormTextFieldCommands>(null);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);
  const onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  const onAsyncLoadValueItemRef = useAutoUpdateRef(onAsyncLoadValueItem);
  const onFocusRef = useAutoUpdateRef(onFocus);
  const onBlurRef = useAutoUpdateRef(onBlur);

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
  } = useFormState<T, true, PFormAutocompleteItem<T>>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth;

  /** error */
  const [error, _setError] = useState(initError);
  useFirstSkipChanged(() => _setError(initError), [initError]);
  const errorRef = useAutoUpdateRef(error);
  const setError = useCallback(
    (value: React.SetStateAction<typeof error>) => {
      _setError((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    },
    [errorRef]
  );

  /** data */
  const [data, _setData] = useState(initData);
  useFirstSkipChanged(() => _setData(initData), [initData]);
  const dataRef = useAutoUpdateRef(data);
  const setData = useCallback(
    (value: React.SetStateAction<typeof data>) => {
      _setData((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        dataRef.current = newValue;
        return newValue;
      });
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
    (value: React.SetStateAction<typeof loading>) => {
      _setLoading((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        loadingRef.current = newValue;
        return newValue;
      });
    },
    [loadingRef]
  );

  /** items */
  const [items, _setItems] = useState(initItems);
  useFirstSkipChanged(() => _setItems(initItems), [initItems]);
  const itemsRef = useAutoUpdateRef(items);
  const setItems = useCallback(
    (newItems: PFormAutocompleteItems<T> | undefined) => {
      _setItems(newItems as Props['items']);
      itemsRef.current = newItems as Props['items'];
    },
    [itemsRef]
  );

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);

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
        {} as Dict<PFormAutocompleteItem<T>>
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
      setErrorHelperText(error ? errorHelperText : undefined);
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
   * State - value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (value?: Props['value']): Props['value'] => {
      let finalValue: any = value;
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          if (finalValue != null) {
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

      return onValue ? onValue(finalValue) : (finalValue as Props['value']);
    },
    [multiple, itemsValues, onValue, formValueSeparator]
  );
  const getFinalValueRef = useAutoUpdateRef(getFinalValue);

  const [valueItem, setValueItem] = useState<ComponentValue | null>(null);

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<ReturnType<typeof getFinalValue>>) => {
      _setValue((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        valueRef.current = newValue;
        return newValue;
      });
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
      onValueChange(name, finalValue as any);

      return finalValue;
    },
    [error, getFinalValueRef, name, onChangeRef, onValueChange, setValue, validate]
  );

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const computedComponentValue = useMemo(() => {
    let finalValue = value;
    if (finalValue != null) {
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          finalValue = [finalValue] as unknown as Props['value'];
        }
      } else {
        if (Array.isArray(finalValue)) {
          finalValue = finalValue[0] as unknown as Props['value'];
        }
      }
    } else {
      finalValue = (multiple ? [] : undefined) as Props['value'];
    }

    let computedComponentValue: ComponentValue = (multiple ? [] : null) as ComponentValue;

    if (finalValue != null) {
      if (items) {
        if (Array.isArray(finalValue)) {
          finalValue.forEach((v) => {
            const key = v.toString();
            if (itemsInfos[key]) {
              computedComponentValue && computedComponentValue.push(itemsInfos[key]);
            }
          });
        } else {
          computedComponentValue = (items.find((info) => info.value === finalValue) ||
            (multiple ? [] : null)) as ComponentValue;
        }
      }
      if (empty(computedComponentValue) && valueItem) {
        if (Array.isArray(finalValue)) {
          if (Array.isArray(valueItem)) {
            computedComponentValue = valueItem.filter(
              (info) => Array.isArray(finalValue) && finalValue.includes(info.value)
            ) as ComponentValue;
          }
        } else {
          if (!Array.isArray(valueItem) && finalValue.toString() === valueItem.value.toString()) {
            computedComponentValue = valueItem;
          }
        }
      }
    }

    return computedComponentValue;
  }, [value, multiple, items, valueItem, itemsInfos]);

  /** componentValue */
  const [componentValue, setComponentValue] = useState(computedComponentValue);
  useChanged(() => {
    if (componentValue && computedComponentValue && equal(componentValue, computedComponentValue)) {
      // do nothing
    } else {
      setComponentValue(computedComponentValue);
    }
  }, [computedComponentValue]);

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

  useEventEffect(() => {
    if (!async && onLoadItemsRef.current) {
      showOnGetItemLoading();
      onLoadItemsRef.current().then((items) => {
        setItems(items);
        hideOnGetItemLoading();
      });
    }
  }, []);

  useFirstSkipEffect(() => {
    updateValue(getFinalValueRef.current(valueRef.current));
  }, [multiple]);

  useEventEffect(() => {
    if (async && onAsyncLoadValueItemRef.current) {
      if (value != null) {
        if (!valueItem) {
          onAsyncLoadValueItemRef.current(value).then((valueItem) => {
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
  }, [async, value, valueItem]);

  useEventEffect(() => {
    if (async && onLoadItems) {
      clearTimeoutRef(asyncTimeoutRef);

      if (inputValue != null) {
        showOnGetItemLoading();

        setAsyncTimeout(() => {
          onLoadItems?.(inputValue)
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
      }
    }
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

  const commands = useMemo<Commands>(
    () => ({
      getType: () => 'PFormAutocomplete',
      getName: () => name,
      getReset: () => getFinalValueRef.current(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current,
      setValue: (newValue) => updateValue(newValue),
      getData: () => dataRef.current,
      setData: (data) => setData(data),
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled: (disabled) => setDisabled(disabled),
      isHidden: () => !!hidden,
      setHidden: (hidden) => setHidden(hidden),
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
      setLoading: (loading) => setLoading(loading),
      reloadItems: () => {
        if (!async && onLoadItemsRef.current) {
          showOnGetItemLoading();
          onLoadItemsRef
            .current()
            .then((items) => {
              setItems(items);
            })
            .finally(() => {
              hideOnGetItemLoading();
            });
        }
      },
      setInputValue,
    }),
    [
      async,
      dataRef,
      disabled,
      exceptValue,
      focus,
      formValueSeparator,
      formValueSort,
      getFinalValueRef,
      hidden,
      hideOnGetItemLoading,
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
      showOnGetItemLoading,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    useCallback((commands: Commands) => onAddValueItem(id, commands as any), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (
      componentValue: ComponentValue,
      reason: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<PFormAutocompleteItem<T>>
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

        const finalValue = getFinalValueRef.current(newValue);
        if (!equal(valueRef.current, finalValue)) {
          updateValue(finalValue, true);
          setValueItem(componentValue);
          setTimeout(() => {
            onValueChangeByUser(name, finalValue as any);
            onRequestSearchSubmit(name, finalValue as any);
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
    [multiple, getFinalValueRef, valueRef, updateValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]
  );

  const handleGetOptionDisabled = useCallback(
    (option: PFormAutocompleteItem<T>) => {
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
      className={classNames(className, 'PFormValueItem', 'PFormAutocomplete')}
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
      renderValue={
        multiple
          ? (value, getItemProps) => {
              if (Array.isArray(value)) {
                return value.map((option, index) => (
                  <Chip
                    key={index}
                    size='small'
                    style={variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined}
                    label={onRenderTag ? onRenderTag(option) : option.label}
                    {...getItemProps({ index })}
                  />
                ));
              } else {
                return (
                  <Chip
                    size='small'
                    style={variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined}
                    label={onRenderTag ? onRenderTag(value) : value.label}
                    {...getItemProps({ index: 0 })}
                  />
                );
              }
            }
          : undefined
      }
      renderInput={(params) => {
        const slotProps = {
          input: {
            ...params.InputProps,
            autoFocus,
            style: {
              paddingTop: variant === 'outlined' && size === 'small' ? 7 : undefined,
              paddingBottom: variant === 'outlined' && size === 'small' ? 5 : undefined,
              marginTop: variant === 'outlined' && size === 'small' ? -1 : undefined,
            },
            endAdornment: (
              <>
                {loading || isOnGetItemLoading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          },
          htmlInput: {
            ...params.inputProps,
            style: {
              ...params.inputProps?.style,
              ...(variant === 'outlined' && size === 'small' ? { marginTop: 1 } : undefined),
            },
            tabIndex: readOnly || disabled ? -1 : undefined,
            onFocus: (e: FocusEvent<HTMLInputElement>) => {
              onFocusRef.current?.(e);
              params?.inputProps.onFocus?.(e);
            },
            onBlur: (e: FocusEvent<HTMLInputElement>) => {
              onBlurRef.current?.(e);
              params?.inputProps.onBlur?.(e);
            },
          },
        };

        return (
          <PFormTextField
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
}

export default PFormAutocomplete;
