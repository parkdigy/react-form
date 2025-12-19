import React, { useEffect, useState, useCallback, ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { Autocomplete, AutocompleteRenderInputParams, Chip, InputLabelProps } from '@mui/material';
import { PFormTagProps as Props, PFormTagExtraCommands, PFormTagValue } from './PFormTag.types';
import { PFormTextCommands } from '../PFormText';
import { empty, equal, notEmpty } from '@pdg/compare';
import { useFormState } from '../../PFormContext';
import PFormContextProvider from '../../PFormContextProvider';
import { PFormTagText, PFormTagTextProps } from './PFormTagText';
import { PFormValueItemCommands } from '../../@types';
import { useAutoUpdateRef, useChanged } from '@pdg/react-hook';

const _emptyValue: string[] = [];

const PFormTag = ({
  ref,
  variant: initVariant,
  size: initSize,
  //----------------------------------------------------------------------------------------------------------------
  className,
  name,
  value: initValue = _emptyValue,
  exceptValue,
  clear = true,
  required,
  readOnly,
  maxLength,
  disabled: initDisabled,
  fullWidth: initFullWidth,
  error: initError,
  helperText,
  formValueSeparator = ',',
  formValueSort,
  limitTags,
  getLimitTagsText,
  allowSpace,
  slotProps,
  onAppendTag,
  onRemoveTag,
  onTagClick,
  onValidate,
  onChange,
  onValue,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const {
    variant: formVariant,
    size: formSize,
    fullWidth: formFullWidth,
    disabled: formDisabled,
    onAddValueItem,
    onValueChange,
    onValueChangeByUser,
    onRequestSearchSubmit,
    ...otherFormState
  } = useFormState<PFormTagValue, false>();

  /********************************************************************************************************************
   * FormState - Variables
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * State - error
   * ******************************************************************************************************************/

  const [error, setError] = useState(initError);
  useChanged(initError) && setError(initError);

  /********************************************************************************************************************
   * State - disabled
   * ******************************************************************************************************************/

  const finalInitDisabled = initDisabled ?? formDisabled;

  const [disabled, setDisabled] = useState(finalInitDisabled);
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

  /********************************************************************************************************************
   * Function - setErrorErrorHelperText
   * ******************************************************************************************************************/

  const setErrorErrorHelperText = useCallback(
    function (error: boolean, errorHelperText: ReactNode) {
      setError(error);
      setErrorHelperText(errorHelperText);
    },
    [setError]
  );

  /********************************************************************************************************************
   * Function - validate
   * ******************************************************************************************************************/

  const validate = useCallback(
    (value: PFormTagValue) => {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, '필수 입력 항목입니다.');
        return false;
      }

      if (onValidate) {
        const onValidateResult = onValidate(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [required, onValidate, setErrorErrorHelperText]
  );

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  type GetFinalValueParam = PFormTagValue | Set<string> | undefined;

  const getFinalValue = useCallback(
    (value: GetFinalValueParam): PFormTagValue => {
      let finalValue = value === undefined ? [] : value;

      if (finalValue instanceof Set) {
        finalValue = Array.from(finalValue);
      } else {
        const finalValueSet = new Set<string>();
        (finalValue || []).forEach((finalValue) => finalValueSet.add(finalValue));
        finalValue = Array.from(finalValueSet);
      }

      return onValue ? onValue(finalValue) : finalValue;
    },
    [onValue]
  );

  const [value, setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && setValue(getFinalValue(initValue));

  const valueRef = useAutoUpdateRef(value);
  const [valueSet, setValueSet] = useState(new Set(value));

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: GetFinalValueParam) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, getFinalValue, name, onChange, onValueChange, validate, valueRef]
  );

  /** valueSet에 아이템 추가 */
  const appendValueSet = useCallback((v: string) => {
    setValueSet((prev) => {
      const newValueSet = new Set(prev);
      newValueSet.add(v);
      return newValueSet;
    });
  }, []);

  /** valueSet에 아이템 제거 */
  const removeValueSet = useCallback((v: string) => {
    setValueSet((prev) => {
      const newValueSet = new Set(prev);
      newValueSet.delete(v);
      return newValueSet;
    });
  }, []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  const firstValueRef = useRef(value);
  const firstNameRef = useRef(name);
  const firstInitValueRef = useRef(initValue);
  const firstOnChangeRef = useRef(onChange);
  const firstOnValueChangeRef = useRef(onValueChange);
  useEffect(() => {
    if (!equal(firstValueRef.current, firstInitValueRef.current)) {
      firstOnChangeRef.current?.(firstValueRef.current);
      firstOnValueChangeRef.current(firstNameRef.current, firstValueRef.current);
    }
  }, []);

  /********************************************************************************************************************
   * Function - getExtraCommands
   * ******************************************************************************************************************/

  const getExtraCommands = useCallback((): PFormTagExtraCommands => {
    return {
      isFormValueSort: () => !!formValueSort,
      getFormValueSeparator: () => formValueSeparator,
    };
  }, [formValueSort, formValueSeparator]);

  /********************************************************************************************************************
   * Function - getCommands
   * ******************************************************************************************************************/

  const getCommands = useCallback(
    (baseCommands: PFormTextCommands) => {
      return {
        ...baseCommands,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: (newValue: PFormTagValue) => {
          updateValue(newValue);
        },
        validate: () => validate(valueRef.current),
        ...getExtraCommands(),
      };
    },
    [getExtraCommands, getFinalValue, initValue, updateValue, valueRef, validate]
  );

  /********************************************************************************************************************
   * Function - appendTag, removeTag
   * ******************************************************************************************************************/

  const appendTag = useCallback(
    (tag: string) => {
      const finalTag = tag.trim();
      if (notEmpty(finalTag) && !valueSet.has(finalTag)) {
        if (onAppendTag && !onAppendTag(finalTag)) return;

        appendValueSet(finalTag);

        const finalValue = updateValue(valueSet);
        setTimeout(() => {
          onValueChangeByUser(name, finalValue);
          onRequestSearchSubmit(name, finalValue);
        });
      }
    },
    [valueSet, onAppendTag, appendValueSet, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]
  );

  const removeTag = useCallback(
    (tag: string) => {
      if (valueSet.has(tag)) {
        if (onRemoveTag && !onRemoveTag(tag)) return;

        removeValueSet(tag);

        const finalValue = updateValue(valueSet);
        setTimeout(() => {
          onValueChangeByUser(name, finalValue);
          onRequestSearchSubmit(name, finalValue);
        });
      }
    },
    [valueSet, onRemoveTag, removeValueSet, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<PFormTagValue, false>) => {
      onAddValueItem(id, commands);
    },
    [onAddValueItem]
  );

  const handleRef = useCallback(
    (commands: PFormTextCommands) => {
      if (ref) {
        const finalCommands = getCommands(commands);

        if (typeof ref === 'function') {
          ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    },
    [ref, getCommands]
  );

  const handleRenderValue = useCallback(
    (tags: string[]) => {
      return tags.map((tag) => (
        <Chip
          className='MuiAutocomplete-tag'
          key={tag}
          label={tag}
          size='small'
          style={variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined}
          disabled={readOnly || disabled}
          onDelete={readOnly || disabled ? undefined : () => removeTag(tag)}
          onClick={() => onTagClick?.(tag)}
        />
      ));
    },
    [disabled, onTagClick, readOnly, removeTag, size, variant]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const handleRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => {
      const htmlInputProps = {
        ...params.inputProps,
        className: classNames('PFormTag-Input', readOnly && 'Mui-disabled'),
        readOnly,
        tabIndex: readOnly ? -1 : undefined,
        maxLength,
      };

      delete htmlInputProps.onChange;
      delete htmlInputProps.value;

      const renderProps: PFormTagTextProps = {
        name,
        clear,
        size,
        className: classNames(className, 'PFormValueItem', 'PFormTag'),
        error,
        disabled,
        fullWidth,
        required,
        exceptValue,
        slotProps: {
          ...slotProps,
          inputLabel: {
            ...slotProps?.inputLabel,
            htmlFor: (params.InputLabelProps as InputLabelProps).htmlFor,
            id: params.InputLabelProps.id,
          },
          input: {
            ...slotProps?.input,
            style: {
              ...(slotProps?.input as any)?.style,
              ...(variant === 'outlined' && size === 'small'
                ? { paddingTop: 7, paddingBottom: 6, marginTop: -2 }
                : undefined),
            },
            className: params.InputProps.className,
            ref: params.InputProps.ref,
            startAdornment: params.InputProps.startAdornment,
          },
          htmlInput: {
            ...slotProps?.htmlInput,
            ...htmlInputProps,
            style: {
              ...(slotProps?.htmlInput as any)?.style,
              ...htmlInputProps.style,
              ...(variant === 'outlined' && size === 'small' ? { marginTop: 4, paddingBottom: 2 } : undefined),
            },
          },
        },
        helperText: error ? errorHelperText : helperText,
        allowSpace,
        onAppendTag: appendTag,
        ...props,
      };

      return <PFormTagText ref={handleRef} {...renderProps} />;
    },
    [
      allowSpace,
      appendTag,
      className,
      clear,
      disabled,
      error,
      errorHelperText,
      exceptValue,
      fullWidth,
      handleRef,
      helperText,
      maxLength,
      name,
      props,
      readOnly,
      required,
      size,
      slotProps,
      variant,
    ]
  );

  return (
    <PFormContextProvider
      value={{
        ...otherFormState,
        variant: formVariant,
        size: formSize,
        fullWidth: formFullWidth,
        onAddValueItem: handleAddValueItem,
        onValueChange: () => {},
        onValueChangeByUser: () => {},
        onRequestSearchSubmit: () => {},
      }}
    >
      <Autocomplete
        options={[]}
        multiple
        freeSolo
        value={value}
        readOnly={readOnly}
        disableClearable
        limitTags={limitTags}
        getLimitTagsText={getLimitTagsText}
        disabled={disabled}
        renderValue={handleRenderValue}
        style={{ display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }}
        renderInput={handleRenderInput}
      />
    </PFormContextProvider>
  );
};

export default PFormTag;
