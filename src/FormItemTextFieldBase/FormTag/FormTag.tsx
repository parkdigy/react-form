import React, { useEffect, useState, useCallback, ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { Autocomplete, AutocompleteRenderInputParams, Chip, InputLabelProps } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { FormTagProps, FormTagExtraCommands, FormTagCommands, FormTagValue } from './FormTag.types';
import FormText, { FormTextCommands } from '../FormText';
import { empty, nextTick, notEmpty, equal, ifUndefined } from '@pdg/util';
import { useFormState } from '../../FormContext';
import FormContextProvider from '../../FormContextProvider';
import './FormTag.scss';
import { FormTextFieldProps } from '../FormTextField';

const FormTag = React.forwardRef<FormTagCommands, FormTagProps>(
  (
    {
      className,
      name,
      value: initValue = [],
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
      onAppendTag,
      onRemoveTag,
      onValidate,
      onKeyDown,
      onChange,
      onValue,
      onBlur,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const {
      fullWidth: formFullWidth,
      disabled: formDisabled,
      onAddValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
      ...otherFormState
    } = useFormState();

    /********************************************************************************************************************
     * FormState - Variables
     * ******************************************************************************************************************/

    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useAutoUpdateState<FormTagProps['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<FormTagProps['helperText']>();
    const [disabled] = useAutoUpdateState<FormTextFieldProps['disabled']>(
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
      (value: FormTagValue) => {
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

    type GetFinalValueParam = FormTagValue | Set<string> | undefined;

    const getFinalValue = useCallback(
      (value: GetFinalValueParam): FormTagValue => {
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

    const [valueRef, value, setValue] = useAutoUpdateRefState<FormTagValue, GetFinalValueParam>(
      initValue,
      getFinalValue
    );
    const valueSet = useMemo(() => new Set(value), [value]);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

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

    const getExtraCommands = useCallback((): FormTagExtraCommands => {
      return {
        isFormValueSort: () => !!formValueSort,
        getFormValueSeparator: () => formValueSeparator,
      };
    }, [formValueSort, formValueSeparator]);

    /********************************************************************************************************************
     * Function - getCommands
     * ******************************************************************************************************************/

    const getCommands = useCallback(
      (baseCommands: FormTextCommands) => {
        return {
          ...baseCommands,
          getReset: () => getFinalValue(initValue),
          reset: () => setValue(initValue),
          getValue: () => valueRef.current,
          setValue: (newValue: FormTagValue) => setValue(newValue),
          validate: () => validate(valueRef.current),
          ...getExtraCommands(),
        };
      },
      [getExtraCommands, getFinalValue, initValue, setValue, valueRef, validate]
    );

    /********************************************************************************************************************
     * Function - appendTag, removeTag
     * ******************************************************************************************************************/

    const appendTag = useCallback(
      (tag: string) => {
        if (valueSet.has(tag)) {
          setInputValue('');
        } else {
          if (onAppendTag && !onAppendTag(tag)) return;

          valueSet.add(tag);
          const finalValue = setValue(valueSet);
          nextTick(() => {
            setInputValue('');
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [valueSet, onAppendTag, setValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    const removeTag = useCallback(
      (tag: string) => {
        if (valueSet.has(tag)) {
          if (onRemoveTag && !onRemoveTag(tag)) return;

          valueSet.delete(tag);
          const finalValue = setValue(valueSet);
          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [valueSet, onRemoveTag, setValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleAddValueItem = useCallback(
      (id: string, commands: FormTextCommands) => {
        onAddValueItem(id, getCommands(commands));
      },
      [onAddValueItem, getCommands]
    );

    const handleRef = useCallback(
      (commands: FormTextCommands) => {
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

    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ([' ', ',', 'Enter'].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();

          if (notEmpty(inputValue)) {
            appendTag(inputValue);
          }
        } else {
          if (onKeyDown) onKeyDown(e);
        }
      },
      [inputValue, appendTag, onKeyDown]
    );

    const handleInputChange = useCallback((value: string) => {
      setInputValue(value.replace(/ /g, '').replace(/,/g, ''));
      setInputValue(value);
    }, []);

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (notEmpty(inputValue)) {
          appendTag(inputValue);
        }
        if (onBlur) onBlur(e);
      },
      [appendTag, inputValue, onBlur]
    );

    const handleRenderTags = useCallback(
      (tags: string[]) => {
        return tags.map((tag) => (
          <Chip
            className='MuiAutocomplete-tag'
            key={tag}
            label={tag}
            size='small'
            disabled={readOnly || disabled}
            onDelete={readOnly || disabled ? undefined : () => removeTag(tag)}
          />
        ));
      },
      [disabled, readOnly, removeTag]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const handleRenderInput = useCallback(
      (params: AutocompleteRenderInputParams) => {
        const renderProps = { clear, ...props };

        renderProps.InputLabelProps = {
          ...renderProps.InputLabelProps,
          htmlFor: (params.InputLabelProps as InputLabelProps).htmlFor,
          id: params.InputLabelProps.id,
        };
        renderProps.InputProps = {
          ...renderProps.InputProps,
          className: classNames(renderProps.InputProps?.className, params.InputProps.className),
          ref: params.InputProps.ref,
        };
        if (notEmpty(params.InputProps.startAdornment)) {
          renderProps.InputProps.startAdornment = (
            <>
              {renderProps.InputProps.startAdornment}
              {params.InputProps.startAdornment}
            </>
          );
        }
        renderProps.inputProps = { ...renderProps.inputProps, ...params.inputProps };
        renderProps.inputProps.className = classNames(renderProps.inputProps.className, 'FormTag-Input');

        renderProps.inputProps.readOnly = readOnly;
        if (readOnly) {
          renderProps.inputProps.tabIndex = -1;
        }

        renderProps.inputProps.maxLength = maxLength;
        if (readOnly) {
          renderProps.inputProps.className = classNames(renderProps.inputProps.className, 'Mui-disabled');
        }

        delete renderProps.inputProps.onChange;
        delete renderProps.inputProps.value;

        return (
          <FormText
            {...renderProps}
            ref={handleRef}
            name={name}
            className={classNames(className, 'FormValueItem', 'FormTag')}
            error={error}
            disabled={disabled}
            fullWidth={fullWidth}
            required={required}
            value={inputValue}
            exceptValue={exceptValue}
            helperText={error ? errorHelperText : helperText}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        );
      },
      [
        className,
        clear,
        disabled,
        error,
        errorHelperText,
        exceptValue,
        fullWidth,
        handleBlur,
        handleInputChange,
        handleInputKeyDown,
        handleRef,
        helperText,
        inputValue,
        maxLength,
        name,
        props,
        readOnly,
        required,
      ]
    );

    return (
      <FormContextProvider
        value={{
          ...otherFormState,
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
          renderTags={handleRenderTags}
          inputValue={inputValue}
          style={{ display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }}
          renderInput={handleRenderInput}
        />
      </FormContextProvider>
    );
  }
);

FormTag.displayName = 'FormTag';

export default FormTag;
