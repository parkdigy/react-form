import React, { useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Box, Checkbox, Chip, CircularProgress, MenuItem } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, notEmpty, isSame } from '../../@util';
import { FormValueItemBaseCommands, FormValueItemCommands } from '../../@types';
import {
  FormSelectItem,
  FormSelectProps as Props,
  FormSelectDefaultProps,
  FormSelectValue,
  FormSelectExtraCommands,
} from './FormSelect.types';
import FormText from '../FormText';
import { useFormState } from '../../FormContext';
import FormContextProvider from '../../FormContextProvider';
import './FormSelect.scss';

interface ItemValueLabelMap {
  [key: string]: ReactNode;
}

const FormSelect = React.forwardRef<FormValueItemCommands<FormSelectItem>, Props>(
  (
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
      formValueSeparator,
      formValueSort,
      width,
      minWidth,
      loading: initLoading,
      onChange,
      onValue,
      ...props
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const { fullWidth: formFullWidth, onAddValueItem, onValueChange, ...otherFormState } = useFormState();

    // Memo - FormState ------------------------------------------------------------------------------------------------

    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    // State -----------------------------------------------------------------------------------------------------------

    const [emptyValue] = useState([]);
    const [itemValueLabels, setItemValueLabels] = useState<ItemValueLabelMap>({});
    const [hasEmptyValue, setHasEmptyValue] = useState<boolean>(false);
    const [isOnGetItemLoading, setIsOnGetItemLoading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean | undefined>(initLoading);

    // Memo --------------------------------------------------------------------------------------------------------------

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

    // State - items ---------------------------------------------------------------------------------------------------

    const [items, setItems] = useAutoUpdateState<Props['items']>(initItems);

    useEffect(() => {
      if (items) {
        setItemValueLabels(
          items.reduce<ItemValueLabelMap>((res, item) => {
            res[item.value] = item.label;
            return res;
          }, {})
        );
        setHasEmptyValue(!!items.find(({ value }) => value === ''));
      } else {
        setItemValueLabels({});
        setHasEmptyValue(false);
      }
    }, [items]);

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

    // State - inputLabelProps -----------------------------------------------------------------------------------------

    const [inputLabelProps] = useAutoUpdateState<Props['InputLabelProps']>(
      useCallback(() => {
        if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
          return { ...initInputLabelProps, shrink: true };
        } else {
          return initInputLabelProps;
        }
      }, [initInputLabelProps, hasEmptyValue, placeholder])
    );

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback(
      (value?: FormSelectValue): FormSelectValue => {
        let finalValue: FormSelectValue = value == null ? '' : value;
        if (multiple) {
          if (!Array.isArray(finalValue)) {
            if (empty(finalValue)) {
              finalValue = [];
            } else {
              if (typeof finalValue === 'string') {
                finalValue = Array.from(new Set(finalValue.split(formValueSeparator || ',')));
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
                  const realValue = itemsValues[v.toString()];
                  return realValue != null ? realValue : v;
                }) as FormSelectValue;
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

    const [value, setValue] = useAutoUpdateState(initValue, getFinalValue);

    useFirstSkipEffect(() => {
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    // State - isSelectedPlaceholder -----------------------------------------------------------------------------------

    const [isSelectedPlaceholder] = useAutoUpdateState<boolean>(
      useCallback(() => {
        return notEmpty(items) && empty(value) && !!placeholder && !hasEmptyValue;
      }, [items, value, placeholder, hasEmptyValue])
    );

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (!isSame(value, initValue)) {
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

    // Memo --------------------------------------------------------------------------------------------------------------

    const selectProps = useMemo(() => {
      const finalSelectProps = { ...initSelectProps, displayEmpty: true, multiple: !!multiple };
      if (multiple) {
        finalSelectProps.renderValue = (selected) => {
          if (isSelectedPlaceholder) {
            return placeholder;
          } else {
            return (
              <Box className='selected-list' sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {Array.isArray(selected) &&
                  selected.map((value) => {
                    if (isSelectedPlaceholder) {
                      return <Chip key={value || '$$$EmptyValuePlaceholder$$$'} label='hahaha' size='small' />;
                    } else {
                      return <Chip key={value} label={itemValueLabels[value]} size='small' />;
                    }
                  })}
              </Box>
            );
          }
        };
      }
      if (minWidth != null) {
        finalSelectProps.style = { ...finalSelectProps.style, minWidth: width || minWidth };
      }
      finalSelectProps.MenuProps = {
        ...finalSelectProps.MenuProps,
        className: classNames(finalSelectProps.MenuProps?.className, 'FormSelect-Menu-Popover'),
      };

      return finalSelectProps;
    }, [initSelectProps, isSelectedPlaceholder, itemValueLabels, minWidth, multiple, placeholder, width]);

    // Function - getExtraCommands -------------------------------------------------------------------------------------

    const getBaseCommands = useCallback((): Partial<FormValueItemBaseCommands> => {
      let lastValue = value;

      return {
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
      };
    }, [value, getFinalValue, initValue, setValue]);

    const getExtraCommands = useCallback((): FormSelectExtraCommands => {
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

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleRef = useCallback(
      (commands: FormValueItemBaseCommands | null) => {
        if (ref) {
          const finalCommands: FormValueItemCommands | null = commands
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
      (id: string, commands: FormValueItemBaseCommands) => {
        onAddValueItem(id, {
          ...commands,
          ...getBaseCommands(),
          ...getExtraCommands(),
        });
      },
      [onAddValueItem, getBaseCommands, getExtraCommands]
    );

    const handleChange = (newValue: FormSelectValue) => {
      setValue(newValue);
    };

    const handleValue = useCallback(
      (value: FormSelectValue) => {
        return getFinalValue(value);
      },
      [getFinalValue]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    let finalValue;
    if (notEmpty(items)) {
      finalValue = value;
    } else {
      finalValue = multiple ? emptyValue : '';
    }

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
        <FormText
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
              <MenuItem key={empty(itemValue) ? '$$$EmptyValue$$$' : itemValue} value={itemValue} disabled={disabled}>
                {multiple && checkbox && Array.isArray(value) && <Checkbox checked={value.includes(itemValue)} />}
                {itemLabel}
              </MenuItem>
            ))
          ) : (
            <MenuItem value='' />
          )}
        </FormText>
      </FormContextProvider>
    );
  }
);

FormSelect.displayName = 'FormSelect';
FormSelect.defaultProps = FormSelectDefaultProps;

export default FormSelect;
