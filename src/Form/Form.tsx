import React, { useState, useRef, useLayoutEffect, FormEvent, useCallback } from 'react';
import classNames from 'classnames';
import { Box, Grid } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';
import { empty, notEmpty, nextTick } from '../@util';
import { FormProps as Props, FormDefaultProps, FormCommands } from './Form.types';
import FormContextProvider from '../FormContextProvider';
import { useFormState } from '../FormContext';
import {
  FormDateRangeValueItemCommands,
  FormDateValueItemCommands,
  FormValue,
  FormValueItemBaseCommands,
  FormValueItemCommands,
  FormValueItemCommandsMap,
  FormValueMap,
} from '../@types';
import { FormCheckboxCommands } from '../FormItemCustom';
import dayjs from 'dayjs';

const Form = React.forwardRef<FormCommands, Props>(
  (
    {
      className,
      children,
      style,
      sx,
      //--------------------------------------------------------------------------------------------------------------------
      variant: initVariant,
      size: initSize,
      color: initColor,
      spacing: initSpacing,
      formColGap: initFormColGap,
      focused: initFocused,
      labelShrink: initLabelShrink,
      fullWidth: initFullWidth,
      //----------------------------------------------------------------------------------------------------------------
      onSubmit,
      onValueChange,
      onValueChangeByUser,
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const {
      id: formId,
      variant: formVariant,
      size: formSize,
      color: formColor,
      spacing: formSpacing,
      formColGap: formFormColGap,
      focused: formFocused,
      labelShrink: formLabelShrink,
      fullWidth: formFullWidth,
      onAddValueItem: formAddValueItem,
      onRemoveValueItem: formRemoveValueItem,
      onValueChange: formValueChange,
      onValueChangeByUser: formValueChangeByUser,
      ...otherFormState
    } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [spacing] = useAutoUpdateState<Props['spacing']>(initSpacing == null ? formSpacing : initSpacing);
    const [formColGap] = useAutoUpdateState<Props['formColGap']>(
      initFormColGap == null ? formFormColGap : initFormColGap
    );
    const [focused] = useAutoUpdateState<Props['focused']>(initFocused || formFocused);
    const [labelShrink] = useAutoUpdateState<Props['labelShrink']>(initLabelShrink || formLabelShrink);
    const [fullWidth] = useAutoUpdateState<Props['fullWidth']>(initFullWidth == null ? formFullWidth : initFullWidth);

    // Ref -------------------------------------------------------------------------------------------------------------

    const formRef = useRef(null);

    // State -----------------------------------------------------------------------------------------------------------

    const [valueItems] = useState<FormValueItemCommandsMap>({});

    // Function - getItemFormValue -----------------------------------------------------------------------------------------

    const getItemFormValue = useCallback(
      (commands: FormValueItemCommands, reset?: boolean): FormValue | FormValue[] => {
        const type = commands.getType();

        let value;
        switch (type) {
          case 'FormCheckbox':
            {
              const itemCommands = commands as FormCheckboxCommands;
              const checked = reset ? itemCommands.getReset() : itemCommands.getChecked();
              value = checked ? itemCommands.getValue() : itemCommands.getUncheckedValue();
            }
            break;
          case 'FormDatePicker':
          case 'FormDateTimePicker':
          case 'FormTimePicker':
            {
              value = reset ? commands.getReset() : commands.getValue();
              if (value) {
                value = dayjs(value).format((commands as FormDateValueItemCommands).getFormValueFormat());
              }
            }
            break;
          default:
            value = reset ? commands.getReset() : commands.getValue();
        }

        switch (type) {
          case 'FormDateRangePicker':
            {
              const startValue = value[0];
              const endValue = value[1];
              const format = (commands as FormDateValueItemCommands).getFormValueFormat();
              value = [startValue ? startValue.format(format) : '', endValue ? endValue.format(format) : ''];
            }
            break;
          default:
            if (empty(value)) {
              value = '';
            } else if (Array.isArray(value)) {
              if (commands.isFormValueSort && commands.isFormValueSort()) {
                value = [...value];
                (value as Array<string | number>).sort();
              }
              value = (value as Array<string | number>).join(
                commands.getFormValueSeparator ? commands.getFormValueSeparator() : ','
              );
            }
            break;
        }

        return value;
      },
      []
    );

    // Function - resetAll ---------------------------------------------------------------------------------------------

    const resetAll = useCallback(() => {
      Object.keys(valueItems).forEach((id) => {
        valueItems[id]?.reset();
      });
    }, [valueItems]);

    const appendFormValueData = useCallback(
      (data: FormValueMap, itemCommands: FormValueItemCommands) => {
        switch (itemCommands.getType()) {
          case 'FormDateRangePicker':
            {
              const value = getItemFormValue(itemCommands) as FormValue[];
              data[(itemCommands as FormDateRangeValueItemCommands).getFormValueStartName()] = value[0];
              data[(itemCommands as FormDateRangeValueItemCommands).getFormValueEndName()] = value[1];
            }
            break;
          default:
            {
              const name = itemCommands.getName();
              const value = getItemFormValue(itemCommands) as FormValue;

              data[name] = value == null ? '' : value;
            }
            break;
        }
      },
      [getItemFormValue]
    );

    const getAllFormValue = useCallback(() => {
      const data: FormValueMap = {};

      Object.keys(valueItems).forEach((id) => {
        const itemCommands = valueItems[id];
        if (itemCommands) {
          if (!itemCommands.isDisabled() && !itemCommands.isExceptValue()) {
            appendFormValueData(data, itemCommands);
          }
        }
      });

      return data;
    }, [valueItems, getItemFormValue]);

    // Function - submit -----------------------------------------------------------------------------------------------

    const submit = useCallback(() => {
      let isAllValid = true;
      let firstInvalidItemId: string;

      const data: FormValueMap = {};

      Object.keys(valueItems).forEach((id) => {
        const itemCommands = valueItems[id];
        if (itemCommands) {
          if (!itemCommands.isDisabled()) {
            if (itemCommands.validate()) {
              if (!itemCommands.isExceptValue()) {
                appendFormValueData(data, itemCommands);
              }
            } else {
              if (isAllValid) {
                isAllValid = false;
                firstInvalidItemId = id;
              }
            }
          }
        }
      });

      if (isAllValid) {
        if (onSubmit) onSubmit(data);
      } else {
        nextTick(() => {
          valueItems[firstInvalidItemId]?.focusValidate();
        });
      }
    }, [valueItems, appendFormValueData, onSubmit]);

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        const findValueItem = function <T extends FormValueItemBaseCommands = FormValueItemCommands>(
          name: string
        ): T | undefined {
          return Object.values(valueItems).find((commands) => {
            if (commands) {
              if (commands.getName() === name) {
                return true;
              }
              if (commands.getType() === 'FormDateRangePicker') {
                return (
                  name === (commands as FormDateRangeValueItemCommands).getFormValueStartName() ||
                  name === (commands as FormDateRangeValueItemCommands).getFormValueEndName()
                );
              }
            }
          }) as T;
        };

        const commands: FormCommands = {
          submit,
          getAllFormValue,
          resetAll,
          getItem<T extends FormValueItemBaseCommands = FormValueItemCommands>(name: string) {
            return findValueItem<T>(name);
          },
          exists(name) {
            return !!findValueItem(name);
          },
          getReset(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.getReset();
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          getFormReset(name, subKey) {
            const valueItem = findValueItem(name);
            if (valueItem) {
              if (valueItem.getType() === 'FormDateRangePicker') {
                const value = getItemFormValue(valueItem, true) as FormValue[];
                if (notEmpty(subKey)) {
                  if (subKey === (valueItem as FormDateRangeValueItemCommands).getFormValueStartNameSuffix()) {
                    return value[0];
                  } else if (subKey === (valueItem as FormDateRangeValueItemCommands).getFormValueEndNameSuffix()) {
                    return value[1];
                  } else {
                    throw new Error(`Form::getFormReset - FormDateRangePicker ??? subKey ?????? ?????? ??? ????????????.`);
                  }
                } else {
                  throw new Error(
                    `Form::getFormReset - FormDateRangePicker ??? ?????? ??????????????? subKey ??? ???????????? ?????????.`
                  );
                }
              } else {
                return getItemFormValue(valueItem, true) as FormValue;
              }
            } else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          reset(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.reset();
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          getValue(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.getValue();
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          getFormValue(name, subKey) {
            const valueItem = findValueItem(name);
            if (valueItem) {
              if (valueItem.getType() === 'FormDateRangePicker') {
                const value = getItemFormValue(valueItem) as FormValue[];
                if (notEmpty(subKey)) {
                  if (subKey === (valueItem as FormDateRangeValueItemCommands).getFormValueStartNameSuffix()) {
                    return value[0];
                  } else if (subKey === (valueItem as FormDateRangeValueItemCommands).getFormValueEndNameSuffix()) {
                    return value[1];
                  } else {
                    throw new Error(`Form::getFormValue - FormDateRangePicker ??? subKey ?????? ?????? ??? ????????????.`);
                  }
                } else {
                  throw new Error(
                    `Form::getFormValue - FormDateRangePicker ??? ?????? ??????????????? subKey ??? ???????????? ?????????.`
                  );
                }
              } else {
                return getItemFormValue(valueItem) as FormValue;
              }
            } else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          setValue(name, value) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.setValue(value);
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          isExceptValue(name: string) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.isExceptValue();
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          isDisabled(name: string) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.isDisabled();
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          setDisabled(name: string, disabled: boolean) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.setDisabled(disabled);
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          focus(name) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.focus();
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          validate(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.validate();
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
          setError(name, error, helperText) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.setError(error, helperText);
            else throw new Error(`'${name}' ??? ???????????? ????????????.`);
          },
        };

        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
        return () => {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        };
      }
    }, [ref, valueItems, submit, resetAll, getAllFormValue, getItemFormValue]);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        submit();
      },
      [submit]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormContextProvider
        value={{
          id: formId || 'form',
          variant,
          size,
          color,
          spacing,
          formColGap,
          focused,
          labelShrink,
          fullWidth,
          onAddValueItem(id, item) {
            valueItems[id] = item;
            if (formAddValueItem) formAddValueItem(id, item);
          },
          onRemoveValueItem(id) {
            valueItems[id] = undefined;
            if (formRemoveValueItem) formRemoveValueItem(id);
          },
          onValueChange(name: string, value: FormValue) {
            if (onValueChange) onValueChange(name, value);
            if (formValueChange) formValueChange(name, value);
          },
          onValueChangeByUser(name, value) {
            if (onValueChangeByUser) onValueChangeByUser(name, value);
            if (formValueChangeByUser) formValueChangeByUser(name, value);
          },
          ...otherFormState,
        }}
      >
        <Box
          className={classNames('Form', `Form-variant-${variant}`, className)}
          component='form'
          ref={formRef}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          style={style}
          sx={sx}
        >
          <Grid container spacing={spacing} direction='column'>
            {children}
          </Grid>
        </Box>
      </FormContextProvider>
    );
  }
);

Form.displayName = 'Form';
Form.defaultProps = FormDefaultProps;

export default Form;
