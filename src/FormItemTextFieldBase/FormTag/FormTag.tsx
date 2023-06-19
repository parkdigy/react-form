import React, { useEffect, useState, useCallback, ReactNode } from 'react';
import classNames from 'classnames';
import { Autocomplete, Chip, InputLabelProps } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { FormTagProps, FormTagDefaultProps, FormTagExtraCommands, FormTagCommands } from './FormTag.types';
import FormText from '../FormText';
import { FormItemValue, FormValueItemBaseCommands } from '../../@types';
import { empty, nextTick, notEmpty, isSame } from '../../@util';
import { useFormState } from '../../FormContext';
import FormContextProvider from '../../FormContextProvider';
import './FormTag.scss';

const FormTag = React.forwardRef<FormTagCommands, FormTagProps>(
  (
    {
      className,
      name,
      value: initValue,
      exceptValue,
      required,
      readOnly,
      maxLength,
      disabled,
      fullWidth: initFullWidth,
      error: initError,
      helperText: initHelperText,
      formValueSeparator,
      formValueSort,
      onValidate,
      onKeyDown,
      onChange,
      onValue,
      onBlur,
      ...props
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const {
      fullWidth: formFullWidth,
      onAddValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
      ...otherFormState
    } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [fullWidth] = useAutoUpdateState<FormTagProps['fullWidth']>(
      initFullWidth == null ? formFullWidth : initFullWidth
    );

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback(
      (value: FormTagProps['value'] | Set<string>): FormTagProps['value'] => {
        let finalValue;

        if (value instanceof Set) {
          finalValue = Array.from(value);
        } else {
          const valueSet = new Set();
          (value || []).forEach((value) => valueSet.add(value));
          finalValue = Array.from(valueSet);
        }

        return onValue ? onValue(finalValue) : finalValue;
      },
      [onValue]
    );

    // State - value ---------------------------------------------------------------------------------------------------

    const [valueSet, setValueSet] = useState<Set<string>>(() => {
      return new Set<string>(getFinalValue(initValue));
    });
    const [value, setValue] = useAutoUpdateState<FormTagProps['value']>(initValue, getFinalValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    //------------------------------------------------------------------------------------------------------------------

    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useAutoUpdateState<FormTagProps['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateState<FormTagProps['helperText']>(initHelperText);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (!isSame(value, initValue)) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback(
      function (error: boolean, helperText: ReactNode) {
        setError(error);
        setHelperText(helperText);
      },
      [setError, setHelperText]
    );

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      (value: FormTagProps['value']) => {
        if (required && empty(value)) {
          setErrorHelperText(true, '필수 입력 항목입니다.');
          return false;
        }

        if (onValidate) {
          const onValidateResult = onValidate(value);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorHelperText(false, initHelperText);

        return true;
      },
      [required, onValidate, setErrorHelperText, initHelperText]
    );

    // Function - getExtraCommands -------------------------------------------------------------------------------------

    const getExtraCommands = useCallback((): FormTagExtraCommands => {
      return {
        isFormValueSort: () => !!formValueSort,
        getFormValueSeparator: () => formValueSeparator,
      };
    }, [formValueSort, formValueSeparator]);

    // Function - getCommands ------------------------------------------------------------------------------------------

    const getCommands = useCallback(
      (baseCommands: FormValueItemBaseCommands) => {
        let lastValue = value;

        return {
          ...baseCommands,
          getReset: () => getFinalValue(initValue),
          reset: () => {
            lastValue = getFinalValue(initValue);
            setValue(lastValue);
          },
          getValue: () => lastValue,
          setValue: (newValue: FormTagProps['value']) => {
            const finalValue = getFinalValue(newValue);
            if (!isSame(lastValue, finalValue)) {
              lastValue = finalValue;
              setValueSet(new Set(lastValue));
              setValue(lastValue);
            }
          },
          validate: () => validate(value),
          ...getExtraCommands(),
        };
      },
      [value, getExtraCommands, getFinalValue, initValue, setValue, validate]
    );

    // Function - appendTag, removeTag ---------------------------------------------------------------------------------

    const appendTag = useCallback(
      (tag: string) => {
        if (valueSet.has(tag)) {
          setInputValue('');
        } else {
          valueSet.add(tag);
          Array.from(valueSet);
          const finalValue = getFinalValue(valueSet);
          setValue(finalValue);
          nextTick(() => {
            setInputValue('');
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [valueSet, getFinalValue, setValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    const removeTag = useCallback(
      (tag: string) => {
        if (valueSet.has(tag)) {
          valueSet.delete(tag);
          const finalValue = getFinalValue(valueSet);
          setValue(finalValue);
          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [valueSet, getFinalValue, setValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleAddValueItem = useCallback(
      (id: string, commands: FormValueItemBaseCommands) => {
        onAddValueItem(id, getCommands(commands));
      },
      [onAddValueItem, getCommands]
    );

    const handleRef = useCallback(
      (commands: FormValueItemBaseCommands) => {
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

    const handleInputChange = useCallback((value: FormItemValue) => {
      setInputValue(value.replace(/ /g, '').replace(/,/g, ''));
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
            disabled={disabled}
            onDelete={readOnly || disabled ? undefined : () => removeTag(tag)}
          />
        ));
      },
      [disabled, readOnly, removeTag]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormContextProvider
        value={{
          fullWidth: formFullWidth,
          onAddValueItem: handleAddValueItem,
          // eslint-disable-next-line
          onValueChange: () => {},
          // eslint-disable-next-line
          onValueChangeByUser: () => {},
          // eslint-disable-next-line
          onRequestSearchSubmit: () => {},
          ...otherFormState,
        }}
      >
        <Autocomplete
          options={[]}
          multiple
          freeSolo
          value={value}
          readOnly={readOnly}
          disableClearable
          disabled={disabled}
          renderTags={handleRenderTags}
          inputValue={inputValue}
          style={{ display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }}
          renderInput={(params) => {
            const renderProps = { ...props };

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
                helperText={helperText}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            );
          }}
        />
      </FormContextProvider>
    );
  }
);

FormTag.displayName = 'FormTag';
FormTag.defaultProps = FormTagDefaultProps;

export default FormTag;
