import React, { useEffect, useState, useCallback, ReactNode } from 'react';
import classNames from 'classnames';
import { Autocomplete, Chip, InputLabelProps } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import {
  FormTagProps,
  FormTagDefaultProps,
  FormTagExtraCommands,
  FormTagCommands,
  FormTagValue,
} from './FormTag.types';
import FormText, { FormTextCommands } from '../FormText';
import { empty, nextTick, notEmpty, equal } from '@pdg/util';
import { useFormState } from '../../FormContext';
import FormContextProvider from '../../FormContextProvider';
import './FormTag.scss';
import { FormTextFieldProps } from '../FormTextField';

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
      disabled: initDisabled,
      fullWidth: initFullWidth,
      error: initError,
      helperText,
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
     * State - FormState
     * ******************************************************************************************************************/

    const [fullWidth] = useAutoUpdateState<FormTagProps['fullWidth']>(
      initFullWidth == null ? formFullWidth : initFullWidth
    );

    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      (value: FormTagValue | Set<string>): FormTagValue => {
        let finalValue;

        if (value instanceof Set) {
          finalValue = Array.from(value);
        } else {
          const valueSet = new Set<string>();
          (value || []).forEach((value) => valueSet.add(value));
          finalValue = Array.from(valueSet);
        }

        return onValue ? onValue(finalValue) : finalValue;
      },
      [onValue]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const [value, setValue] = useState(() => getFinalValue(initValue || []));
    const [valueSet, setValueSet] = useState(() => new Set<string>(getFinalValue(initValue || [])));

    useFirstSkipEffect(() => {
      setValue(getFinalValue(initValue || []));
      setValueSet(new Set(getFinalValue(initValue || [])));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initValue]);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    //------------------------------------------------------------------------------------------------------------------

    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useAutoUpdateState<FormTagProps['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<FormTagProps['helperText']>();
    const [disabled] = useAutoUpdateState<FormTextFieldProps['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
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
        let lastValue = value;

        return {
          ...baseCommands,
          getReset: () => getFinalValue(initValue || []),
          reset: () => {
            lastValue = getFinalValue(initValue || []);
            setValue(lastValue);
          },
          getValue: () => lastValue,
          setValue: (newValue: FormTagValue) => {
            const finalValue = getFinalValue(newValue);
            if (!equal(lastValue, finalValue)) {
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

    /********************************************************************************************************************
     * Function - appendTag, removeTag
     * ******************************************************************************************************************/

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
          }}
        />
      </FormContextProvider>
    );
  }
);

FormTag.displayName = 'FormTag';
FormTag.defaultProps = FormTagDefaultProps;

export default FormTag;
