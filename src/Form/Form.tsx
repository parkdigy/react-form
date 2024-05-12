import React, { useRef, useLayoutEffect, FormEvent, useCallback, useMemo, useEffect } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { ifUndefined, nextTick, notEmpty } from '@pdg/util';
import { FormProps as Props, FormCommands, FormInvalidItems } from './Form.types';
import FormContextProvider from '../FormContextProvider';
import { FormContextValue, useFormState } from '../FormContext';
import {
  FormValue,
  FormValueItemBaseCommands,
  FormValueItemCommands,
  FormValueItemCommandsMap,
  FormValueMap,
  FormYearMonthValue,
  FormYearMonthValueItemNameCommands,
  FormRangeValueItemNameCommands,
  FormYearMonthRangeValueItemNameCommands,
} from '../@types';
import { appendFormValueData, getItemFormValue } from './Form.function.private';
import { useAutoUpdateLayoutRef } from '@pdg/react-hook';

const Form = React.forwardRef<FormCommands, Props>(
  (
    {
      className,
      children,
      style: initStyle,
      sx,
      //--------------------------------------------------------------------------------------------------------------------
      variant: initVariant = 'outlined',
      size: initSize = 'medium',
      color: initColor = 'primary',
      spacing: initSpacing = 2,
      formColGap: initFormColGap = 1.5,
      focused: initFocused,
      labelShrink: initLabelShrink,
      fullWidth: initFullWidth,
      fullHeight: initFullHeight,
      disabled: initDisabled,
      //----------------------------------------------------------------------------------------------------------------
      onSubmit: initOnSubmit,
      onInvalid: initOnValid,
      onValueChange: initOnValueChange,
      onValueChangeByUser: initOnValueChangeByUser,
    },
    ref
  ) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const {
      id: formId,
      variant: formVariant,
      size: formSize,
      color: formColor,
      disabled: formDisabled,
      spacing: formSpacing,
      formColGap: formFormColGap,
      focused: formFocused,
      labelShrink: formLabelShrink,
      fullWidth: formFullWidth,
      fullHeight: formFullHeight,
      formColAutoXs,
      formColWidth,
      onAddFormCol,
      onRemoveFormCol,
      formColXs,
      formColWithLabel,
      formColWithHelperText,
      onAddValueItem: formAddValueItem,
      onRemoveValueItem: formRemoveValueItem,
      onValueChange: formValueChange,
      onValueChangeByUser: formValueChangeByUser,
      onRequestSearchSubmit: formRequestSearchSubmit,
    } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const formState = useMemo(
      () => ({
        variant: ifUndefined(initVariant, formVariant),
        size: ifUndefined(initSize, formSize),
        color: ifUndefined(initColor, formColor),
        spacing: ifUndefined(initSpacing, formSpacing),
        formColGap: ifUndefined(initFormColGap, formFormColGap),
        focused: ifUndefined(initFocused, formFocused),
        labelShrink: ifUndefined(initLabelShrink, formLabelShrink),
        fullWidth: ifUndefined(ifUndefined(initFullWidth, formFullWidth), true),
        fullHeight: ifUndefined(ifUndefined(initFullHeight, formFullHeight), false),
        disabled: ifUndefined(ifUndefined(initDisabled, formDisabled), false),
      }),
      [
        formColor,
        formDisabled,
        formFocused,
        formFormColGap,
        formFullHeight,
        formFullWidth,
        formLabelShrink,
        formSize,
        formSpacing,
        formVariant,
        initColor,
        initDisabled,
        initFocused,
        initFormColGap,
        initFullHeight,
        initFullWidth,
        initLabelShrink,
        initSize,
        initSpacing,
        initVariant,
      ]
    );

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const formRef = useRef(null);
    const valueItems = useRef<FormValueItemCommandsMap<any>>({});
    const onSubmitRef = useAutoUpdateLayoutRef(initOnSubmit);
    const onInvalidRef = useAutoUpdateLayoutRef(initOnValid);
    const onValueChangeRef = useAutoUpdateLayoutRef(initOnValueChange);
    const onValueChangeByUserRef = useAutoUpdateLayoutRef(initOnValueChangeByUser);

    /********************************************************************************************************************
     * Function - submit
     * ******************************************************************************************************************/

    const submit = useCallback(() => {
      let isAllValid = true;
      let firstInvalidItemId: string;

      const data: FormValueMap = {};
      const invalidItems: FormInvalidItems = [];

      Object.keys(valueItems.current).forEach((id) => {
        const itemCommands = valueItems.current[id];
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
        onSubmitRef.current && onSubmitRef.current(data);
      } else {
        onInvalidRef.current && onInvalidRef.current(invalidItems);
        nextTick(() => {
          valueItems.current[firstInvalidItemId]?.focusValidate();
        });
      }
    }, [onSubmitRef, onInvalidRef]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo(() => {
      const findValueItem = function <T extends FormValueItemBaseCommands<any, true> = FormValueItemCommands<any>>(
        name: string
      ): T | undefined {
        return Object.values(valueItems.current).find((commands) => {
          if (commands) {
            if (commands.getName() === name) {
              return true;
            }
            switch (commands.getType()) {
              case 'FormDateRangePicker':
              case 'FormYearRangePicker':
                return (
                  name === (commands as FormRangeValueItemNameCommands).getFormValueFromName() ||
                  name === (commands as FormRangeValueItemNameCommands).getFormValueToName()
                );
              case 'FormMonthPicker':
                return (
                  name === (commands as FormYearMonthValueItemNameCommands).getFormValueYearName() ||
                  name === (commands as FormYearMonthValueItemNameCommands).getFormValueMonthName()
                );
              case 'FormMonthRangePicker':
                return (
                  name === (commands as FormYearMonthRangeValueItemNameCommands).getFormValueFromYearName() ||
                  name === (commands as FormYearMonthRangeValueItemNameCommands).getFormValueFromMonthName() ||
                  name === (commands as FormYearMonthRangeValueItemNameCommands).getFormValueToYearName() ||
                  name === (commands as FormYearMonthRangeValueItemNameCommands).getFormValueToMonthName()
                );
            }
          }
        }) as T;
      };

      const getFormValue = (name: string, subKey?: string, isReset?: boolean) => {
        const valueItem = findValueItem(name);
        if (valueItem) {
          switch (valueItem.getType()) {
            case 'FormDateRangePicker':
            case 'FormYearRangePicker': {
              const commands = valueItem as FormRangeValueItemNameCommands;
              const value = getItemFormValue(valueItem, !!isReset) as FormValue[];
              if (notEmpty(subKey)) {
                if (subKey === commands.getFormValueFromNameSuffix()) {
                  return value[0];
                } else if (subKey === commands.getFormValueToNameSuffix()) {
                  return value[1];
                } else {
                  throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 subKey 값을 찾을 수 없습니다.`);
                }
              } else {
                throw new Error(
                  `Form::getFormReset - ${valueItem.getType()} 의 값을 가져오려면 subKey 를 지정해야 합니다.`
                );
              }
            }
            case 'FormMonthPicker': {
              const commands = valueItem as FormYearMonthValueItemNameCommands;
              const value = getItemFormValue(valueItem, !!isReset) as FormYearMonthValue;
              if (notEmpty(subKey)) {
                if (subKey === commands.getFormValueYearNameSuffix()) {
                  return value.year;
                } else if (subKey === commands.getFormValueMonthNameSuffix()) {
                  return value.month;
                } else {
                  throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 subKey 값을 찾을 수 없습니다.`);
                }
              } else {
                throw new Error(
                  `Form::getFormReset - ${valueItem.getType()} 의 값을 가져오려면 subKey 를 지정해야 합니다.`
                );
              }
            }
            case 'FormMonthRangePicker': {
              const commands = valueItem as FormYearMonthRangeValueItemNameCommands;
              const value = getItemFormValue(valueItem, !!isReset) as { year: number | ''; month: number | '' }[];
              if (notEmpty(subKey)) {
                if (subKey === commands.getFormValueFromYearNameSuffix()) {
                  return value[0].year;
                } else if (subKey === commands.getFormValueFromMonthNameSuffix()) {
                  return value[0].month;
                } else if (subKey === commands.getFormValueToYearNameSuffix()) {
                  return value[1].year;
                } else if (subKey === commands.getFormValueToMonthNameSuffix()) {
                  return value[1].month;
                } else {
                  throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 subKey 값을 찾을 수 없습니다.`);
                }
              } else {
                throw new Error(
                  `Form::getFormReset - ${valueItem.getType()} 의 값을 가져오려면 subKey 를 지정해야 합니다.`
                );
              }
            }
            default:
              return getItemFormValue(valueItem, !!isReset) as FormValue;
          }
        } else throw new Error(`'${name}' 이 존재하지 않습니다.`);
      };

      return {
        submit,
        getAllFormValue: () => {
          const data: FormValueMap = {};

          Object.keys(valueItems.current).forEach((id) => {
            const itemCommands = valueItems.current[id];
            if (itemCommands) {
              if (!itemCommands.isDisabled() && !itemCommands.isExceptValue()) {
                appendFormValueData(data, itemCommands);
              }
            }
          });

          return data;
        },
        resetAll: () => {
          Object.keys(valueItems.current).forEach((id) => {
            valueItems.current[id]?.reset();
          });
        },
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
          return getFormValue(name, subKey, true);
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
          return getFormValue(name, subKey, false);
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
        isHidden(name: string) {
          const valueItem = findValueItem(name);
          if (valueItem) return valueItem.isHidden();
          else throw new Error(`'${name}' 이 존재하지 않습니다.`);
        },
        setHidden(name: string, hidden: boolean) {
          const valueItem = findValueItem(name);
          if (valueItem) valueItem.setHidden(hidden);
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
      } as FormCommands;
    }, [submit]);

    useLayoutEffect(() => {
      if (ref) {
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
    }, [commands, ref]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formState.disabled) {
          submit();
        }
      },
      [formState.disabled, submit]
    );

    /********************************************************************************************************************
     * FormContextValue
     * ******************************************************************************************************************/

    const formContextValue = useMemo(
      () =>
        ({
          id: formId || 'form',
          ...formState,
          onAddValueItem(id, item) {
            valueItems.current[id] = item;
            if (formAddValueItem) formAddValueItem(id, item);
          },
          onRemoveValueItem(id) {
            valueItems.current[id] = undefined;
            if (formRemoveValueItem) formRemoveValueItem(id);
          },
          onValueChange(name: string, value: FormValue) {
            if (onValueChangeRef.current) onValueChangeRef.current(name, value);
            if (formValueChange) formValueChange(name, value);
          },
          onValueChangeByUser(name, value) {
            if (onValueChangeByUserRef.current) onValueChangeByUserRef.current(name, value);
            if (formValueChangeByUser) formValueChangeByUser(name, value);
          },
          onRequestSearchSubmit: formRequestSearchSubmit,
          formColAutoXs,
          formColWidth,
          onAddFormCol,
          onRemoveFormCol,
          formColXs,
          formColWithLabel,
          formColWithHelperText,
        }) as FormContextValue,
      [
        formId,
        formState,
        formRequestSearchSubmit,
        formColAutoXs,
        formColWidth,
        onAddFormCol,
        onRemoveFormCol,
        formColXs,
        formColWithLabel,
        formColWithHelperText,
        formAddValueItem,
        formRemoveValueItem,
        onValueChangeRef,
        formValueChange,
        onValueChangeByUserRef,
        formValueChangeByUser,
      ]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormContextProvider value={formContextValue}>
        <Box
          className={classNames(
            'Form',
            `Form-variant-${formState.variant}`,
            formState.fullHeight && 'full-height',
            className
          )}
          component='form'
          ref={formRef}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          style={formState.fullHeight ? { ...initStyle, flex: 1, height: '100%' } : initStyle}
          sx={sx}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: formState.fullHeight ? '100%' : undefined,
            }}
          >
            {children}
          </div>
        </Box>
      </FormContextProvider>
    );
  }
);

export default Form;
