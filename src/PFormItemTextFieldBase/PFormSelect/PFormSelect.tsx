import React, { useState, useEffect, ReactNode, useCallback, useMemo, useEffectEvent } from 'react';
import classNames from 'classnames';
import { Box, Checkbox, Chip, CircularProgress, MenuItem, SelectProps } from '@mui/material';
import { empty, notEmpty, equal } from '@pdg/compare';
import {
  PFormSelectProps,
  PFormSelectExtraCommands,
  PFormSelectCommands,
  PFormSelectSingleValue,
  PFormSelectValue,
  PFormSelectItem,
  PFormSelectItems,
} from './PFormSelect.types';
import { useFormState } from '../../PFormContext';
import PFormContextProvider from '../../PFormContextProvider';
import PFormTextField, { PFormTextFieldCommands } from '../PFormTextField';
import './PFormSelect.scss';
import { PFormValueItemCommands } from '../../@types';
import { useAutoUpdateRef, useChanged } from '@pdg/react-hook';

interface ItemValueLabelMap {
  [key: string]: ReactNode;
}

function PFormSelect<
  T extends PFormSelectSingleValue,
  Multiple extends boolean | undefined = undefined,
  Items extends PFormSelectItems<T> = PFormSelectItems<T>,
>({
  ref,
  className,
  name,
  items: initItems,
  fullWidth: initFullWidth,
  onLoadItems,
  readOnly,
  multiple,
  checkbox,
  placeholder,
  startAdornment: initStartAdornment,
  value: initValue,
  slotProps: initSlotProps,
  formValueSeparator = ',',
  formValueSort,
  width,
  minWidth = 120,
  loading: initLoading,
  onChange,
  onValue,
  ...props
}: PFormSelectProps<T, Multiple, Items>) {
  /********************************************************************************************************************
   * type
   * ******************************************************************************************************************/

  type Props = PFormSelectProps<T, Multiple, Items>;
  type Commands = PFormSelectCommands<T, Multiple>;
  type Value = PFormSelectValue<T, Multiple>;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  const onChangeRef = useAutoUpdateRef(onChange);

  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const {
    fullWidth: formFullWidth,
    onAddValueItem,
    onValueChange,
    ...otherFormState
  } = useFormState<Value, false, PFormSelectItem<T>>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [emptyValue] = useState([]);
  const [itemValueLabels, setItemValueLabels] = useState<ItemValueLabelMap>({});
  const [hasEmptyValue, setHasEmptyValue] = useState<boolean>(false);
  const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(!!onLoadItems);
  const [loading, setLoading] = useState<boolean | undefined>(initLoading);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const startAdornment = useMemo(() => {
    if (isOnGetItemLoading || loading) {
      return (
        <>
          {initStartAdornment}
          {(isOnGetItemLoading || loading) && (
            <CircularProgress
              size={16}
              color='inherit'
              style={{ verticalAlign: 'middle', marginLeft: initStartAdornment ? 8 : 0 }}
            />
          )}
        </>
      );
    } else {
      return initStartAdornment;
    }
  }, [initStartAdornment, isOnGetItemLoading, loading]);

  /** items */
  const [items, setItems] = useState(initItems);
  useChanged(initItems) && setItems(initItems);

  if (useChanged(items, true)) {
    if (items) {
      setItemValueLabels(
        items.reduce<ItemValueLabelMap>((res, item) => {
          res[`${item.value}`] = item.label;
          return res;
        }, {})
      );
      setHasEmptyValue(!!items.find(({ value }) => value === ''));
    } else {
      setItemValueLabels({});
      setHasEmptyValue(false);
    }
  }

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

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (newValue: Props['value']): Value => {
      let finalValue: any = newValue == null ? '' : newValue;
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          if (empty(finalValue)) {
            finalValue = [];
          } else {
            if (typeof finalValue === 'string') {
              finalValue = Array.from(new Set((finalValue as string).split(formValueSeparator)));
            } else {
              finalValue = [finalValue];
            }
          }
        }
      } else {
        if (Array.isArray(finalValue)) {
          finalValue = empty(finalValue) ? '' : finalValue[0];
        } else {
          if (empty(finalValue)) {
            finalValue = '';
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
              });
            }
          } else {
            const realValue = itemsValues[`${finalValue}`];
            if (realValue != null && finalValue !== realValue) {
              finalValue = realValue;
            }
          }
        }
      }

      finalValue = onValue ? onValue(finalValue) : finalValue;

      return (equal(newValue, finalValue) ? newValue : finalValue) as Value;
    },
    [multiple, formValueSeparator, itemsValues, onValue]
  );

  const [value, _setValue] = useState<Props['value']>(getFinalValue(initValue));
  useChanged(initValue) && _setValue(getFinalValue(initValue));
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<Props['value']>) => {
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
      const finalValue = skipGetFinalValue ? newValue : getFinalValue(newValue);
      setValue(finalValue);

      onChangeRef.current?.(finalValue as any);
      onValueChange(name, finalValue as any);

      return finalValue;
    },
    [getFinalValue, name, onChangeRef, onValueChange, setValue]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/
  {
    const effectEvent = useEffectEvent(() => updateValue(valueRef.current));
    const firstSkipRef = React.useRef(true);
    useEffect(() => {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    }, []);
  }

  useEffect(() => {
    if (onLoadItemsRef.current) {
      onLoadItemsRef.current().then((items) => {
        setItems(items);
        setIsOnGetItemLoading(false);
      });
    }
  }, [onLoadItemsRef]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const isSelectedPlaceholder = notEmpty(items) && empty(value) && !!placeholder && !hasEmptyValue;

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** getBaseCommands */
  const getBaseCommands = useCallback((): Partial<Commands> => {
    return {
      getReset: () => getFinalValue(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current as any,
      setValue: (value: Props['value']) => updateValue(value),
    };
  }, [getFinalValue, initValueRef, updateValue, valueRef]);

  /** getExtraCommands */
  const getExtraCommands = useCallback((): PFormSelectExtraCommands<T> => {
    let lastItems = items;
    let lastLoading = loading;

    return {
      getFormValueSeparator: () => formValueSeparator,
      isFormValueSort: () => !!formValueSort,
      getItems: () => lastItems,
      setItems: (items) => {
        lastItems = items as any;
        setItems(lastItems);
      },
      isMultiple: () => !!multiple,
      getLoading: () => !!lastLoading,
      setLoading: (loading) => {
        lastLoading = loading;
        setLoading(lastLoading);
      },
      reloadItems: () => {
        if (onLoadItems) {
          setIsOnGetItemLoading(true);
          onLoadItems().then((items) => {
            setItems(items);
            setIsOnGetItemLoading(false);
          });
        }
      },
    };
  }, [items, loading, formValueSeparator, formValueSort, setItems, multiple, onLoadItems]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleRef */
  const handleRef = useCallback(
    (commands: PFormTextFieldCommands<Value, false> | null) => {
      if (ref) {
        const finalCommands: Commands | null = commands
          ? {
              ...commands,
              ...getBaseCommands(),
              ...getExtraCommands(),
            }
          : null;

        if (typeof ref === 'function') {
          return ref(finalCommands as any);
        } else {
          ref.current = finalCommands as any;
        }
      }
    },
    [ref, getBaseCommands, getExtraCommands]
  );

  /** handleAddValueItem */
  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<Value, false, T>) => {
      onAddValueItem(id, {
        ...commands,
        ...getBaseCommands(),
        ...getExtraCommands(),
      });
    },
    [onAddValueItem, getBaseCommands, getExtraCommands]
  );

  /********************************************************************************************************************
   * Render Variable
   * ******************************************************************************************************************/

  /** finalValue */
  const finalValue = useMemo(() => {
    let newFinalValue;
    if (notEmpty(items)) {
      newFinalValue = value;
    } else {
      newFinalValue = multiple ? emptyValue : '';
    }

    if (multiple) {
      if (newFinalValue != null && !Array.isArray(newFinalValue)) {
        newFinalValue = [newFinalValue];
      }
    } else {
      if (Array.isArray(newFinalValue)) {
        newFinalValue = newFinalValue[0];
      }

      newFinalValue = newFinalValue ?? '';
    }
    return newFinalValue;
  }, [emptyValue, items, multiple, value]);

  /** selectProps */
  const selectProps = useMemo(() => {
    const finalSelectProps: SelectProps = {
      displayEmpty: true,
      multiple: !!multiple,
      value: finalValue,
    };
    if (multiple) {
      finalSelectProps.renderValue = (selected) => {
        if (isSelectedPlaceholder) {
          return placeholder;
        } else {
          return (
            <Box className='selected-list' sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {Array.isArray(selected) &&
                selected.map((selectedValue) => {
                  if (isSelectedPlaceholder) {
                    return <Chip key={selectedValue || '$$$EmptyValuePlaceholder$$$'} label='hahaha' size='small' />;
                  } else {
                    return <Chip key={selectedValue} label={itemValueLabels[`${selectedValue}`]} size='small' />;
                  }
                })}
            </Box>
          );
        }
      };
    }
    finalSelectProps.style = { ...finalSelectProps.style, minWidth: width || minWidth };
    finalSelectProps.MenuProps = {
      ...finalSelectProps.MenuProps,
      className: classNames(finalSelectProps.MenuProps?.className, 'PFormSelect-Menu-Popover'),
    };

    return finalSelectProps;
  }, [finalValue, isSelectedPlaceholder, itemValueLabels, minWidth, multiple, placeholder, width]);

  /** slotProps */
  const slotProps = useMemo(() => {
    const inputLabelAdditionalProps: { shrink?: boolean } = {};
    if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
      inputLabelAdditionalProps.shrink = true;
    }

    return {
      inputLabel: {
        ...initSlotProps?.inputLabel,
        ...inputLabelAdditionalProps,
      },
      select: {
        ...initSlotProps?.select,
        ...selectProps,
      },
    } as PFormSelectProps<T>['slotProps'];
  }, [hasEmptyValue, initSlotProps?.inputLabel, initSlotProps?.select, placeholder, selectProps]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormContextProvider
      value={{
        ...otherFormState,
        fullWidth: formFullWidth,
        labelShrink: true,
        onAddValueItem: handleAddValueItem,
        onValueChange: () => {},
      }}
    >
      <PFormTextField<Value, false>
        select
        ref={handleRef}
        name={name}
        className={classNames(className, 'PFormSelect', isSelectedPlaceholder && 'is-selected-placeholder')}
        fullWidth={fullWidth}
        {...props}
        startAdornment={startAdornment}
        value={finalValue as any}
        clear={false}
        readOnly={readOnly || empty(items)}
        slotProps={slotProps}
        onChange={updateValue}
        onValue={getFinalValue}
      >
        {isSelectedPlaceholder && (
          <MenuItem key={'$$$EmptyValuePlaceholder$$$'} value='' disabled sx={{ display: 'none' }}>
            {placeholder}
          </MenuItem>
        )}

        {items && notEmpty(items) ? (
          items.map(({ label: itemLabel, value: itemValue, disabled }) => (
            <MenuItem
              key={empty(itemValue) ? '$$$EmptyValue$$$' : `${itemValue}`}
              value={typeof itemValue === 'boolean' ? `${itemValue}` : itemValue}
              disabled={disabled}
            >
              {multiple && checkbox && Array.isArray(value) && <Checkbox checked={value.includes(itemValue as any)} />}
              {itemLabel}
            </MenuItem>
          ))
        ) : (
          <MenuItem value='' />
        )}
      </PFormTextField>
    </PFormContextProvider>
  );
}

export default PFormSelect;
