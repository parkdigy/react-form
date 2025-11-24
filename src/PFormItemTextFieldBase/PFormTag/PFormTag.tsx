import React, { useEffect, useState, useCallback, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { Autocomplete, AutocompleteRenderInputParams, Chip, InputLabelProps } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState } from '@pdg/react-hook';
import { PFormTagProps, PFormTagExtraCommands, PFormTagCommands, PFormTagValue } from './PFormTag.types';
import { PFormTextCommands } from '../PFormText';
import { empty, equal, ifUndefined, notEmpty } from '@pdg/compare';
import { useFormState } from '../../PFormContext';
import PFormContextProvider from '../../PFormContextProvider';
import { PFormTextFieldProps } from '../PFormTextField';
import { PFormTagText, PFormTagTextProps } from './PFormTagText';
import { PFormValueItemCommands } from '../../@types';

const _emptyValue: string[] = [];

const PFormTag = React.forwardRef<PFormTagCommands, PFormTagProps>(
  (
    {
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
    },
    ref
  ) => {
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

    const variant = ifUndefined(initVariant, formVariant);
    const size = ifUndefined(initSize, formSize);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<PFormTagProps['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<PFormTagProps['helperText']>();
    const [disabled] = useAutoUpdateState<PFormTextFieldProps['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );

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

    const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);
    const valueSet = useMemo(() => new Set(value), [value]);

    const updateValue = useCallback(
      (newValue: GetFinalValueParam) => {
        const finalValue = _setValue(newValue);

        if (error) validate(finalValue);
        if (onChange) onChange(finalValue);
        onValueChange(name, finalValue);

        return finalValue;
      },
      [_setValue, error, name, onChange, onValueChange, validate]
    );

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (!equal(value, initValue)) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }
);

PFormTag.displayName = 'PFormTag';

export default PFormTag;
