import React, { useEffect, useState, useCallback, ReactNode, useEffectEvent } from 'react';
import classNames from 'classnames';
import { Autocomplete, AutocompleteRenderInputParams, Chip, InputLabelProps } from '@mui/material';
import { PFormTagProps as Props, PFormTagExtraCommands, PFormTagValue, PFormTagCommands } from './PFormTag.types';
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
  /********************************************************************************************************************/

  variant: initVariant,
  size: initSize,
  /********************************************************************************************************************/
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
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();

  /** error */
  const [error, setError] = useState(initError);
  useChanged(initError) && setError(initError);

  /** disabled */
  const finalInitDisabled = initDisabled ?? formDisabled;
  const [disabled, setDisabled] = useState(finalInitDisabled);
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    function (error: boolean, errorHelperText: ReactNode) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
  const validate = useCallback(
    (value: PFormTagValue) => {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, '필수 입력 항목입니다.');
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

  const [value, _setValue] = useState(getFinalValue(initValue));
  useChanged(initValue) && _setValue(getFinalValue(initValue));
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<ReturnType<typeof getFinalValue>>) => {
      _setValue((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        valueRef.current = newValue;
        return newValue;
      });
    },
    [valueRef]
  );

  const [valueSet] = useState(new Set(value));

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: GetFinalValueParam) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);

      if (error) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, getFinalValue, name, onChangeRef, onValueChange, setValue, validate]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      if (!equal(valueRef.current, initValueRef.current)) {
        onChangeRef.current?.(valueRef.current);
        onValueChange(name, valueRef.current);
      }
    });
    useEffect(() => effectEvent(), []);
  }

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** getExtraCommands */
  const getExtraCommands = useCallback((): PFormTagExtraCommands => {
    return {
      isFormValueSort: () => !!formValueSort,
      getFormValueSeparator: () => formValueSeparator,
    };
  }, [formValueSort, formValueSeparator]);

  /** getCommands */
  const getCommands = useCallback(
    (baseCommands: PFormTextCommands): PFormTagCommands => {
      return {
        ...baseCommands,
        getReset: () => getFinalValue(initValueRef.current),
        reset: () => updateValue(initValueRef.current),
        getValue: () => valueRef.current,
        setValue: (newValue: PFormTagValue) => {
          updateValue(newValue);
        },
        validate: () => validate(valueRef.current),
        ...getExtraCommands(),
      };
    },
    [getExtraCommands, getFinalValue, initValueRef, updateValue, valueRef, validate]
  );

  /** appendTag */
  const appendTag = useCallback(
    (tag: string) => {
      const finalTag = tag.trim();
      if (notEmpty(finalTag) && !valueSet.has(finalTag)) {
        if (onAppendTag && !onAppendTag(finalTag)) return;

        valueSet.add(finalTag);

        const finalValue = updateValue(valueSet);
        setTimeout(() => {
          onValueChangeByUser(name, finalValue);
          onRequestSearchSubmit(name, finalValue);
        });
      }
    },
    [valueSet, onAppendTag, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]
  );

  /** removeTag */
  const removeTag = useCallback(
    (tag: string) => {
      if (valueSet.has(tag)) {
        if (onRemoveTag && !onRemoveTag(tag)) return;

        valueSet.delete(tag);

        const finalValue = updateValue(valueSet);
        setTimeout(() => {
          onValueChangeByUser(name, finalValue);
          onRequestSearchSubmit(name, finalValue);
        });
      }
    },
    [valueSet, onRemoveTag, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleAddValueItem */
  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<PFormTagValue, false>) => {
      onAddValueItem(id, getCommands(commands as unknown as PFormTextCommands));
    },
    [getCommands, onAddValueItem]
  );

  /** handleRef */
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

  /** handleRenderValue */
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

  /** handleRenderInput */
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

      const tagTextProps: PFormTagTextProps = {
        name,
        clear,
        size,
        className: classNames(className, 'PFormValueItem', 'PFormTag'),
        error,
        disabled,
        fullWidth,
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

      return <PFormTagText ref={handleRef} {...tagTextProps} />;
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
      size,
      slotProps,
      variant,
    ]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

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
