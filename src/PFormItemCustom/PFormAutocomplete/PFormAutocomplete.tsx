import React, { useEffect, useState, useCallback, useId, ReactNode, useRef, useMemo, FocusEvent } from 'react';
import classNames from 'classnames';
import {
  Autocomplete,
  Chip,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
  CircularProgress,
} from '@mui/material';
import { clearTimeoutRef, useAutoUpdateRef, useChanged, useForwardRef, useTimeoutRef } from '@pdg/react-hook';
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
  autoFocus,
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
  onFocus,
  onBlur,
  //----------------------------------------------------------------------------------------------------------------
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
   * Props Changed
   * ******************************************************************************************************************/

  const isAsyncChanged = useChanged(async);

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

  const textFieldRef = useRef<PFormTextFieldCommands>(null);
  // const oldComponentValue = useRef<ComponentValue>(null);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);
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

  /** items 변경 함수 */
  const setItems = useCallback((newItems: PFormAutocompleteItems<T> | undefined) => {
    _setItems(newItems as Props['items']);
  }, []);

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

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value'], skipGetFinalValue = false) => {
      const finalValue = skipGetFinalValue ? newValue : getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;

      if (error) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue as any);

      return finalValue;
    },
    [error, getFinalValue, name, onChangeRef, onValueChange, validate, valueRef]
  );
  const updateValueRef = useAutoUpdateRef(updateValue);

  /********************************************************************************************************************
   * Change
   * ******************************************************************************************************************/

  const firstSkipRef = useRef(true);
  useEffect(() => {
    if (firstSkipRef.current) {
      firstSkipRef.current = false;
    } else {
      updateValueRef.current(getFinalValueRef.current(valueRef.current));
    }
  }, [getFinalValueRef, multiple, updateValueRef, valueRef]);

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
  if (useChanged(computedComponentValue)) {
    if (componentValue && computedComponentValue && equal(componentValue, computedComponentValue)) {
      // do nothing
    } else {
      setComponentValue(computedComponentValue);
    }
  }

  /** async value, valueItem 변경 시 처리 */
  const isValueChanged = useChanged(value);
  const isValueItemChanged = useChanged(valueItem);
  if (isAsyncChanged || isValueChanged || isValueItemChanged) {
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
  }

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

  const [initialized, setInitialized] = useState(false);
  if (!initialized) {
    setInitialized(true);

    if (!async && onLoadItems) {
      showOnGetItemLoading();
      onLoadItems().then((items) => {
        setItems(items);
        hideOnGetItemLoading();
      });
    }
  }

  const isInputValueChanged = useChanged(inputValue);
  if (isAsyncChanged || isInputValueChanged) {
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
        hideOnGetItemLoading();
      }
    }
  }

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
      getReset: () => getFinalValue(initValue),
      reset: () => updateValue(initValue),
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
      setError: (error: boolean, errorText: ReactNode | undefined) =>
        setErrorErrorHelperText(error, error ? errorText : undefined),
      getFormValueSeparator: () => formValueSeparator,
      isFormValueSort: () => !!formValueSort,
      getItems: () => itemsRef.current,
      setItems,
      isMultiple: () => !!multiple,
      getLoading: () => !!loadingRef.current,
      setLoading: (loading) => setLoading(loading),
      reloadItems: () => {
        if (!async && onLoadItems) {
          showOnGetItemLoading();
          onLoadItems().then((items) => {
            setItems(items);
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
      getFinalValue,
      hidden,
      hideOnGetItemLoading,
      initValue,
      itemsRef,
      loadingRef,
      multiple,
      name,
      onLoadItems,
      setErrorErrorHelperText,
      setItems,
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

        const finalValue = getFinalValue(newValue);
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
    [multiple, getFinalValue, valueRef, updateValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]
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
