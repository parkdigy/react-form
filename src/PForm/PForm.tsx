import React, { useRef, FormEvent, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { ifUndefined, notEmpty } from '@pdg/compare';
import { PFormProps as Props, PFormCommands, PFormInvalidItems } from './PForm.types';
import PFormContextProvider from '../PFormContextProvider';
import { PFormContextValue, useFormState } from '../PFormContext';
import {
  PFormValue,
  PFormValueItemBaseCommands,
  PFormValueItemCommands,
  PFormValueItemCommandsMap,
  PFormValueMap,
  PFormYearMonthValue,
  PFormYearMonthValueItemNameCommands,
  PFormRangeValueItemNameCommands,
  PFormYearMonthRangeValueItemNameCommands,
} from '../@types';
import { appendFormValueData, getItemFormValue } from './PForm.function.private';
import { useAutoUpdateRef, useForwardRef } from '@pdg/react-hook';

const PForm = ({
  ref,
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
  submitWhenReturnKey: initSubmitWhenReturnKey,
  //----------------------------------------------------------------------------------------------------------------
  onSubmit: initOnSubmit,
  onInvalid: initOnValid,
  onValueChange: initOnValueChange,
  onValueChangeByUser: initOnValueChangeByUser,
}: Props) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const {
    id: formId,
    variant: formVariant,
    size: formSize,
    color: formColor,
    disabled: formDisabled,
    submitWhenReturnKey: formSubmitWhenReturnKey,
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
    onRequestSubmit: formRequestSubmit,
    onRequestSearchSubmit: formRequestSearchSubmit,
  } = useFormState();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = ifUndefined(initVariant, formVariant);
  const size = ifUndefined(initSize, formSize);
  const color = ifUndefined(initColor, formColor);
  const spacing = ifUndefined(initSpacing, formSpacing);
  const formColGap = ifUndefined(initFormColGap, formFormColGap);
  const focused = ifUndefined(initFocused, formFocused);
  const labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
  const fullWidth = ifUndefined(ifUndefined(initFullWidth, formFullWidth), true);
  const fullHeight = ifUndefined(ifUndefined(initFullHeight, formFullHeight), false);
  const disabled = ifUndefined(ifUndefined(initDisabled, formDisabled), false);
  const submitWhenReturnKey = ifUndefined(ifUndefined(initSubmitWhenReturnKey, formSubmitWhenReturnKey), false);

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<HTMLFormElement>(null);
  const valueItems = useRef<PFormValueItemCommandsMap<any>>({});
  const onSubmitRef = useAutoUpdateRef(initOnSubmit);
  const onInvalidRef = useAutoUpdateRef(initOnValid);
  const onValueChangeRef = useAutoUpdateRef(initOnValueChange);
  const onValueChangeByUserRef = useAutoUpdateRef(initOnValueChangeByUser);

  /********************************************************************************************************************
   * Function - submit
   * ******************************************************************************************************************/

  const submit = useCallback(() => {
    let isAllValid = true;
    let firstInvalidItemId: string;

    const data: PFormValueMap = {};
    const invalidItems: PFormInvalidItems = [];

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
      setTimeout(() => {
        valueItems.current[firstInvalidItemId]?.focusValidate();
      });
    }
  }, [onSubmitRef, onInvalidRef]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormCommands>(() => {
    const findValueItem = function <T extends PFormValueItemBaseCommands<any, true> = PFormValueItemCommands<any>>(
      name: string
    ): T | undefined {
      return Object.values(valueItems.current).find((commands) => {
        if (commands) {
          if (commands.getName() === name) {
            return true;
          }
          switch (commands.getType()) {
            case 'PFormDateRangePicker':
            case 'PFormYearRangePicker':
              return (
                name === (commands as PFormRangeValueItemNameCommands).getFormValueFromName() ||
                name === (commands as PFormRangeValueItemNameCommands).getFormValueToName()
              );
            case 'PFormMonthPicker':
              return (
                name === (commands as PFormYearMonthValueItemNameCommands).getFormValueYearName() ||
                name === (commands as PFormYearMonthValueItemNameCommands).getFormValueMonthName()
              );
            case 'PFormMonthRangePicker':
              return (
                name === (commands as PFormYearMonthRangeValueItemNameCommands).getFormValueFromYearName() ||
                name === (commands as PFormYearMonthRangeValueItemNameCommands).getFormValueFromMonthName() ||
                name === (commands as PFormYearMonthRangeValueItemNameCommands).getFormValueToYearName() ||
                name === (commands as PFormYearMonthRangeValueItemNameCommands).getFormValueToMonthName()
              );
          }
        }
      }) as T;
    };

    const getFormValue = (name: string, subKey?: string, isReset?: boolean) => {
      const valueItem = findValueItem(name);
      if (valueItem) {
        switch (valueItem.getType()) {
          case 'PFormDateRangePicker':
          case 'PFormYearRangePicker': {
            const commands = valueItem as PFormRangeValueItemNameCommands;
            const value = getItemFormValue(valueItem, !!isReset) as PFormValue[];
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
          case 'PFormMonthPicker': {
            const commands = valueItem as PFormYearMonthValueItemNameCommands;
            const value = getItemFormValue(valueItem, !!isReset) as PFormYearMonthValue;
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
          case 'PFormMonthRangePicker': {
            const commands = valueItem as PFormYearMonthRangeValueItemNameCommands;
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
            return getItemFormValue(valueItem, !!isReset) as PFormValue;
        }
      } else throw new Error(`'${name}' 이 존재하지 않습니다.`);
    };

    return {
      submit,
      getAllFormValue: () => {
        const data: PFormValueMap = {};

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
      getItem<T extends PFormValueItemBaseCommands<any, true> = PFormValueItemCommands<any>>(name: string) {
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
    };
  }, [submit]);

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!disabled) {
        submit();
      }
    },
    [disabled, submit]
  );

  /********************************************************************************************************************
   * FormContextValue
   * ******************************************************************************************************************/

  const formContextValue = useMemo(
    () =>
      ({
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
        disabled,
        submitWhenReturnKey,
        onAddValueItem(id, item) {
          valueItems.current[id] = item;
          if (formAddValueItem) formAddValueItem(id, item);
        },
        onRemoveValueItem(id) {
          valueItems.current[id] = undefined;
          if (formRemoveValueItem) formRemoveValueItem(id);
        },
        onValueChange(name: string, value: PFormValue) {
          if (onValueChangeRef.current) onValueChangeRef.current(name, value);
          if (formValueChange) formValueChange(name, value);
        },
        onValueChangeByUser(name, value) {
          if (onValueChangeByUserRef.current) onValueChangeByUserRef.current(name, value);
          if (formValueChangeByUser) formValueChangeByUser(name, value);
        },
        onRequestSubmit(name: string, value: any) {
          if (!disabled) submit();
          if (formRequestSubmit) formRequestSubmit(name, value);
        },
        onRequestSearchSubmit: formRequestSearchSubmit,
        formColAutoXs,
        formColWidth,
        onAddFormCol,
        onRemoveFormCol,
        formColXs,
        formColWithLabel,
        formColWithHelperText,
      }) as PFormContextValue,
    [
      formId,
      variant,
      size,
      color,
      spacing,
      formColGap,
      focused,
      labelShrink,
      fullWidth,
      fullHeight,
      disabled,
      submitWhenReturnKey,
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
      submit,
      formRequestSubmit,
    ]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormContextProvider value={formContextValue}>
      <Box
        className={classNames('PForm', `PForm-variant-${variant}`, fullHeight && 'full-height', className)}
        component='form'
        ref={formRef}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
        style={fullHeight ? { ...initStyle, flex: 1, height: '100%' } : initStyle}
        sx={sx}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: fullHeight ? '100%' : undefined,
          }}
        >
          {children}
        </div>
      </Box>
    </PFormContextProvider>
  );
};

export default PForm;
