import React, { useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Box, Checkbox, Chip, CircularProgress, MenuItem } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { AutoTypeForwardRef, ToForwardRefExoticComponent } from '../../@util.private';
import { empty, notEmpty, equal, ifUndefined } from '@pdg/util';
import {
  FormSelectProps,
  FormSelectExtraCommands,
  FormSelectCommands,
  FormSelectSingleValue,
} from './FormSelect.types';
import { useFormState } from '../../FormContext';
import FormContextProvider from '../../FormContextProvider';
import './FormSelect.scss';
import FormTextField, { FormTextFieldProps } from '../FormTextField';

interface ItemValueLabelMap {
  [key: string]: ReactNode;
}

const FormSelect = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends FormSelectSingleValue, Multiple extends boolean | undefined>(
    {
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
      InputLabelProps: initInputLabelProps,
      SelectProps: initSelectProps,
      formValueSeparator = ',',
      formValueSort,
      width,
      minWidth = 120,
      loading: initLoading,
      onChange,
      onValue,
      ...props
    }: FormSelectProps<T, Multiple>,
    ref: React.ForwardedRef<FormSelectCommands<T, Multiple>>
  ) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/

    type Props = FormSelectProps<T, Multiple>;
    type Commands = FormSelectCommands<T, Multiple>;

    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const { fullWidth: formFullWidth, onAddValueItem, onValueChange, ...otherFormState } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [emptyValue] = useState([]);
    const [itemValueLabels, setItemValueLabels] = useState<ItemValueLabelMap>({});
    const [hasEmptyValue, setHasEmptyValue] = useState<boolean>(false);
    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);
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

    /********************************************************************************************************************
     * State - items
     * ******************************************************************************************************************/

    const [items, setItems] = useAutoUpdateState<Props['items']>(initItems);

    useEffect(() => {
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
    }, [items]);

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
     * inputLabelProps
     * ******************************************************************************************************************/

    const inputLabelProps = useMemo(() => {
      if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
        return { ...initInputLabelProps, shrink: true };
      } else {
        return initInputLabelProps;
      }
    }, [hasEmptyValue, initInputLabelProps, placeholder]);

    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      (newValue?: any): any => {
        let finalValue: any = newValue == null ? '' : newValue;
        if (multiple) {
          if (!Array.isArray(finalValue)) {
            if (empty(finalValue)) {
              finalValue = [];
            } else {
              if (typeof finalValue === 'string') {
                finalValue = Array.from(new Set(finalValue.split(formValueSeparator)));
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

        return equal(newValue, finalValue) ? newValue : finalValue;
      },
      [multiple, formValueSeparator, itemsValues, onValue]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const [valueRef, value, setValue] = useAutoUpdateRefState(initValue, getFinalValue);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
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

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const isSelectedPlaceholder = useMemo(
      () => notEmpty(items) && empty(value) && !!placeholder && !hasEmptyValue,
      [hasEmptyValue, items, placeholder, value]
    );

    const selectProps = useMemo(() => {
      const finalSelectProps: FormTextFieldProps['SelectProps'] = {
        ...initSelectProps,
        displayEmpty: true,
        multiple: !!multiple,
        value,
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
        className: classNames(finalSelectProps.MenuProps?.className, 'FormSelect-Menu-Popover'),
      };

      return finalSelectProps;
    }, [initSelectProps, isSelectedPlaceholder, itemValueLabels, minWidth, multiple, placeholder, value, width]);

    /********************************************************************************************************************
     * Function - getExtraCommands
     * ******************************************************************************************************************/

    const getBaseCommands = useCallback((): Partial<Commands> => {
      return {
        getReset: () => getFinalValue(initValue),
        reset: () => setValue(initValue),
        getValue: () => valueRef.current,
        setValue: (value: Props['value']) => setValue(value),
      };
    }, [getFinalValue, initValue, setValue, valueRef]);

    const getExtraCommands = useCallback((): FormSelectExtraCommands<any> => {
      let lastItems = items;
      let lastLoading = loading;

      return {
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
    }, [items, loading, formValueSeparator, formValueSort, setItems, multiple]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleRef = useCallback(
      (commands: Commands | null) => {
        if (ref) {
          const finalCommands: Commands | null = commands
            ? {
                ...commands,
                ...getBaseCommands(),
                ...getExtraCommands(),
              }
            : null;

          if (typeof ref === 'function') {
            return ref(finalCommands);
          } else {
            ref.current = finalCommands;
          }
        }
      },
      [ref, getBaseCommands, getExtraCommands]
    );

    const handleAddValueItem = useCallback(
      (id: string, commands: Commands) => {
        onAddValueItem(id, {
          ...commands,
          ...getBaseCommands(),
          ...getExtraCommands(),
        });
      },
      [onAddValueItem, getBaseCommands, getExtraCommands]
    );

    const handleChange = (newValue: any) => {
      setValue(newValue);
    };

    const handleValue = useCallback(
      (value: any) => {
        return getFinalValue(value);
      },
      [getFinalValue]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const finalValue = useMemo(() => {
      let newFinalValue;
      if (notEmpty(items)) {
        newFinalValue = value;
      } else {
        newFinalValue = multiple ? emptyValue : '';
      }

      selectProps.value = newFinalValue;

      if (multiple) {
        if (selectProps.value != null && !Array.isArray(selectProps.value)) {
          selectProps.value = [selectProps.value];
        }
        if (newFinalValue !== undefined && !Array.isArray(newFinalValue)) {
          newFinalValue = [newFinalValue];
        }
      } else {
        if (Array.isArray(selectProps.value)) {
          selectProps.value = selectProps.value[0];
        }
        if (Array.isArray(newFinalValue)) {
          newFinalValue = newFinalValue[0];
        }

        newFinalValue = ifUndefined(newFinalValue, '');
      }
      return newFinalValue;
    }, [emptyValue, items, multiple, selectProps, value]);

    return (
      <FormContextProvider
        value={{
          fullWidth: formFullWidth,
          onAddValueItem: handleAddValueItem,
          // eslint-disable-next-line
          onValueChange: () => {},
          ...otherFormState,
        }}
      >
        <FormTextField<any>
          select
          ref={handleRef}
          name={name}
          className={classNames(className, 'FormSelect', isSelectedPlaceholder && 'is-selected-placeholder')}
          fullWidth={fullWidth}
          {...props}
          startAdornment={startAdornment}
          value={finalValue}
          clear={false}
          readOnly={readOnly || empty(items)}
          InputLabelProps={inputLabelProps}
          SelectProps={selectProps}
          onChange={handleChange}
          onValue={handleValue}
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
                {multiple && checkbox && Array.isArray(value) && <Checkbox checked={value.includes(itemValue)} />}
                {itemLabel}
              </MenuItem>
            ))
          ) : (
            <MenuItem value='' />
          )}
        </FormTextField>
      </FormContextProvider>
    );
  })
);

export default FormSelect;
