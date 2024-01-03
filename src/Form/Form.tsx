import React, { useState, useRef, useLayoutEffect, FormEvent, useCallback, useMemo, CSSProperties } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { empty, notEmpty, nextTick } from '../@util';
import { FormProps as Props, FormDefaultProps, FormCommands, FormInvalidItems } from './Form.types';
import FormContextProvider from '../FormContextProvider';
import { useFormState } from '../FormContext';
import {
  FormRangeValueItemCommands,
  FormDateValueItemCommands,
  FormValue,
  FormValueItemBaseCommands,
  FormValueItemCommands,
  FormValueItemCommandsMap,
  FormValueMap,
  FormYearMonthValue,
  FormYearMonthValueItemCommands,
} from '../@types';
import { FormCheckboxCommands } from '../FormItemCustom';
import dayjs, { Dayjs } from 'dayjs';

const Form = React.forwardRef<FormCommands, Props>(
  (
    {
      className,
      children,
      style: initStyle,
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
      fullHeight,
      //----------------------------------------------------------------------------------------------------------------
      onSubmit,
      onInvalid,
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

    // Memo - FormState ------------------------------------------------------------------------------------------------

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const spacing = useMemo(() => initSpacing || formSpacing, [initSpacing, formSpacing]);
    const formColGap = useMemo(
      () => (initFormColGap == null ? formFormColGap : initFormColGap),
      [initFormColGap, formFormColGap]
    );
    const focused = useMemo(() => (initFocused == null ? formFocused : initFocused), [initFocused, formFocused]);
    const labelShrink = useMemo(
      () => (initLabelShrink == null ? formLabelShrink : initLabelShrink),
      [initLabelShrink, formLabelShrink]
    );
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    // Ref -------------------------------------------------------------------------------------------------------------

    const formRef = useRef(null);

    // State -----------------------------------------------------------------------------------------------------------

    const [valueItems] = useState<FormValueItemCommandsMap<any>>({});

    // Function - getItemFormValue -----------------------------------------------------------------------------------------

    const getItemFormValue = useCallback(
      (commands: FormValueItemCommands<any>, reset?: boolean): FormValue | FormValue[] | FormYearMonthValue => {
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
          case 'FormMonthPicker':
            {
              value = reset ? commands.getReset() : commands.getValue();
              value = { year: value ? value.year : '', month: value ? value.month : '' };
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
          case 'FormYearRangePicker':
            {
              const startValue = value[0];
              const endValue = value[1];
              value = [startValue ? startValue : '', endValue ? endValue : ''];
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
      (data: FormValueMap, itemCommands: FormValueItemCommands<any>) => {
        switch (itemCommands.getType()) {
          case 'FormMonthPicker':
            {
              const value = getItemFormValue(itemCommands) as FormYearMonthValue;
              data[(itemCommands as FormYearMonthValueItemCommands).getFormValueYearName()] = value.year;
              data[(itemCommands as FormYearMonthValueItemCommands).getFormValueMonthName()] = value.month;
            }
            break;
          case 'FormDateRangePicker':
            {
              const value = getItemFormValue(itemCommands) as FormValue[];
              data[(itemCommands as FormRangeValueItemCommands<Dayjs>).getFormValueStartName()] = value[0];
              data[(itemCommands as FormRangeValueItemCommands<Dayjs>).getFormValueEndName()] = value[1];
            }
            break;
          case 'FormYearRangePicker':
            {
              const value = getItemFormValue(itemCommands) as FormValue[];
              data[(itemCommands as FormRangeValueItemCommands<number>).getFormValueStartName()] = value[0];
              data[(itemCommands as FormRangeValueItemCommands<number>).getFormValueEndName()] = value[1];
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
    }, [valueItems, appendFormValueData]);

    // Function - submit -----------------------------------------------------------------------------------------------

    const submit = useCallback(() => {
      let isAllValid = true;
      let firstInvalidItemId: string;

      const data: FormValueMap = {};
      const invalidItems: FormInvalidItems = [];

      Object.keys(valueItems).forEach((id) => {
        const itemCommands = valueItems[id];
        if (itemCommands) {
          if (!itemCommands.isDisabled()) {
            if (itemCommands.validate()) {
              if (!itemCommands.isExceptValue()) {
                appendFormValueData(data, itemCommands);
              }
            } else {
              invalidItems.push({ name: itemCommands.getName(), commands: itemCommands });

              if (isAllValid) {
                isAllValid = false;
                firstInvalidItemId = id;
              }
            }
          }
        }
      });

      if (isAllValid) {
        onSubmit && onSubmit(data);
      } else {
        onInvalid && onInvalid(invalidItems);
        nextTick(() => {
          valueItems[firstInvalidItemId]?.focusValidate();
        });
      }
    }, [valueItems, appendFormValueData, onSubmit, onInvalid]);

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        const findValueItem = function <T extends FormValueItemBaseCommands<any, true> = FormValueItemCommands<any>>(
          name: string
        ): T | undefined {
          return Object.values(valueItems).find((commands) => {
            if (commands) {
              if (commands.getName() === name) {
                return true;
              }
              if (commands.getType() === 'FormDateRangePicker') {
                return (
                  name === (commands as FormRangeValueItemCommands<Dayjs>).getFormValueStartName() ||
                  name === (commands as FormRangeValueItemCommands<Dayjs>).getFormValueEndName()
                );
              }
            }
          }) as T;
        };

        const commands: FormCommands = {
          submit,
          getAllFormValue,
          resetAll,
          getItem<T extends FormValueItemBaseCommands<any, true> = FormValueItemCommands<any>>(name: string) {
            return findValueItem<T>(name);
          },
          exists(name) {
            return !!findValueItem(name);
          },
          getReset(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.getReset();
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          getFormReset(name, subKey) {
            const valueItem = findValueItem(name);
            if (valueItem) {
              if (valueItem.getType() === 'FormDateRangePicker') {
                const value = getItemFormValue(valueItem, true) as FormValue[];
                if (notEmpty(subKey)) {
                  if (subKey === (valueItem as FormRangeValueItemCommands<Dayjs>).getFormValueStartNameSuffix()) {
                    return value[0];
                  } else if (subKey === (valueItem as FormRangeValueItemCommands<Dayjs>).getFormValueEndNameSuffix()) {
                    return value[1];
                  } else {
                    throw new Error(`Form::getFormReset - FormDateRangePicker 의 subKey 값을 찾을 수 없습니다.`);
                  }
                } else {
                  throw new Error(
                    `Form::getFormReset - FormDateRangePicker 의 값을 가져오려면 subKey 를 지정해야 합니다.`
                  );
                }
              } else {
                return getItemFormValue(valueItem, true) as FormValue;
              }
            } else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          reset(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.reset();
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          getValue(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.getValue();
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          getFormValue(name, subKey) {
            const valueItem = findValueItem(name);
            if (valueItem) {
              if (valueItem.getType() === 'FormDateRangePicker') {
                const value = getItemFormValue(valueItem) as FormValue[];
                if (notEmpty(subKey)) {
                  if (subKey === (valueItem as FormRangeValueItemCommands<Dayjs>).getFormValueStartNameSuffix()) {
                    return value[0];
                  } else if (subKey === (valueItem as FormRangeValueItemCommands<Dayjs>).getFormValueEndNameSuffix()) {
                    return value[1];
                  } else {
                    throw new Error(`Form::getFormValue - FormDateRangePicker 의 subKey 값을 찾을 수 없습니다.`);
                  }
                } else {
                  throw new Error(
                    `Form::getFormValue - FormDateRangePicker 의 값을 가져오려면 subKey 를 지정해야 합니다.`
                  );
                }
              } else {
                return getItemFormValue(valueItem) as FormValue;
              }
            } else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          setValue(name, value) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.setValue(value);
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          isExceptValue(name: string) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.isExceptValue();
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          isDisabled(name: string) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.isDisabled();
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          setDisabled(name: string, disabled: boolean) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.setDisabled(disabled);
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          focus(name) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.focus();
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          validate(name) {
            const valueItem = findValueItem(name);
            if (valueItem) return valueItem.validate();
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
          },
          setError(name, error, helperText) {
            const valueItem = findValueItem(name);
            if (valueItem) valueItem.setError(error, helperText);
            else throw new Error(`'${name}' 이 존재하지 않습니다.`);
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

    const style = useMemo(() => {
      return fullHeight ? { ...initStyle, flex: 1, height: '100%' } : initStyle;
    }, [initStyle, fullHeight]);

    const contentWrapStyle: CSSProperties = useMemo(
      () => ({
        display: 'flex',
        flexDirection: 'column',
        height: fullHeight ? '100%' : undefined,
      }),
      [fullHeight]
    );

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
          fullHeight,
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
          className={classNames('Form', `Form-variant-${variant}`, fullHeight && 'full-height', className)}
          component='form'
          ref={formRef}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          style={style}
          sx={sx}
        >
          <div style={contentWrapStyle}>{children}</div>
        </Box>
      </FormContextProvider>
    );
  }
);

Form.displayName = 'Form';
Form.defaultProps = FormDefaultProps;

export default Form;
