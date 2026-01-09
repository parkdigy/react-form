import React, { useRef, type FormEvent, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { notEmpty } from '@pdg/compare';
import { type PFormProps as Props, type PFormCommands, type PFormInvalidItems } from './PForm.types';
import PFormContextProvider from '../PFormContextProvider';
import { type PFormContextValue, useFormState } from '../PFormContext';
import {
  type PFormValue,
  type PFormValueItemBaseCommands,
  type PFormValueItemCommands,
  type PFormValueItemCommandsMap,
  type PFormValueMap,
  type PFormYearMonthValue,
  type PFormYearMonthValueItemNameCommands,
  type PFormRangeValueItemNameCommands,
  type PFormYearMonthRangeValueItemNameCommands,
} from '../@types';
import { appendFormValueData, getItemFormValue } from './PForm.function.private';
import { useAutoUpdateRef, useForwardRef } from '@pdg/react-hook';

const PForm = ({
  ref,
  className,
  children,
  style: initStyle,
  sx,
  /********************************************************************************************************************/
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
  /********************************************************************************************************************/
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

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const spacing = initSpacing ?? formSpacing;
  const formColGap = initFormColGap ?? formFormColGap;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth ?? true;
  const fullHeight = initFullHeight ?? formFullHeight ?? false;
  const submitWhenReturnKey = initSubmitWhenReturnKey ?? formSubmitWhenReturnKey ?? false;
  const disabled = initDisabled ?? formDisabled ?? false;
  const disabledRef = useAutoUpdateRef(disabled);

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
   * Function
   * ******************************************************************************************************************/

  /** submit */
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
      onSubmitRef.current?.(data);
    } else {
      onInvalidRef.current?.(invalidItems);
      setTimeout(() => {
        valueItems.current[firstInvalidItemId]?.focusValidate();
      });
    }
  }, [onSubmitRef, onInvalidRef]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  /** findValueItem */
  const findValueItem = useCallback(function <
    T extends PFormValueItemBaseCommands<any, true> = PFormValueItemCommands<any>,
  >(name: string): T | undefined {
    return Object.values(valueItems.current).find((itemCommands) => {
      if (itemCommands) {
        if (itemCommands.getName() === name) {
          return true;
        }
        switch (itemCommands.getType()) {
          case 'PFormDateRangePicker':
          case 'PFormYearRangePicker':
            return (
              name === (itemCommands as PFormRangeValueItemNameCommands).getFormValueFromName() ||
              name === (itemCommands as PFormRangeValueItemNameCommands).getFormValueToName()
            );
          case 'PFormMonthPicker':
            return (
              name === (itemCommands as PFormYearMonthValueItemNameCommands).getFormValueYearName() ||
              name === (itemCommands as PFormYearMonthValueItemNameCommands).getFormValueMonthName()
            );
          case 'PFormMonthRangePicker':
            return (
              name === (itemCommands as PFormYearMonthRangeValueItemNameCommands).getFormValueFromYearName() ||
              name === (itemCommands as PFormYearMonthRangeValueItemNameCommands).getFormValueFromMonthName() ||
              name === (itemCommands as PFormYearMonthRangeValueItemNameCommands).getFormValueToYearName() ||
              name === (itemCommands as PFormYearMonthRangeValueItemNameCommands).getFormValueToMonthName()
            );
        }
      }
    }) as any;
  }, []);

  /** getFormValue */
  const getFormValue = useCallback(
    (name: string, subKey?: string, isReset?: boolean) => {
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
    },
    [findValueItem]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo((): PFormCommands => {
    return {
      submit,
      getAllFormValue() {
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
      resetAll() {
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
  }, [findValueItem, getFormValue, submit]);

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!disabledRef.current) {
        submit();
      }
    },
    [disabledRef, submit]
  );

  /********************************************************************************************************************
   * FormContextValue
   * ******************************************************************************************************************/

  /** handleAddValueItem */
  const handleAddValueItem = useCallback(
    (id: string, item: any) => {
      valueItems.current[id] = item;
      formAddValueItem?.(id, item);
    },
    [formAddValueItem]
  );

  /** handleRemoveValueItem */
  const handleRemoveValueItem = useCallback(
    (id: string) => {
      valueItems.current[id] = undefined;
      formRemoveValueItem?.(id);
    },
    [formRemoveValueItem]
  );

  /** handleValueChange */
  const handleValueChange = useCallback(
    (name: string, value: PFormValue) => {
      if (onValueChangeRef.current) onValueChangeRef.current(name, value);
      formValueChange?.(name, value);
    },
    [formValueChange, onValueChangeRef]
  );

  /** handleValueChangeByUser */
  const handleValueChangeByUser = useCallback(
    (name: string, value: any) => {
      if (onValueChangeByUserRef.current) onValueChangeByUserRef.current(name, value);
      formValueChangeByUser?.(name, value);
    },
    [formValueChangeByUser, onValueChangeByUserRef]
  );

  /** handleRequestSubmit */
  const handleRequestSubmit = useCallback(
    (name: string, value: any) => {
      if (!disabledRef.current) submit();
      formRequestSubmit?.(name, value);
    },
    [disabledRef, formRequestSubmit, submit]
  );

  /** formContextValue */
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
        onAddValueItem: handleAddValueItem,
        onRemoveValueItem: handleRemoveValueItem,
        onValueChange: handleValueChange,
        onValueChangeByUser: handleValueChangeByUser,
        onRequestSubmit: handleRequestSubmit,
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
      handleAddValueItem,
      handleRemoveValueItem,
      handleValueChange,
      handleValueChangeByUser,
      handleRequestSubmit,
      formRequestSearchSubmit,
      formColAutoXs,
      formColWidth,
      onAddFormCol,
      onRemoveFormCol,
      formColXs,
      formColWithLabel,
      formColWithHelperText,
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
