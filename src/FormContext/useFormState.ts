import FormContext from './FormContext';
import { FormContextValue } from './FormContext.types';
import { useContext } from 'react';

export default function useFormState<T, AllowUndefinedValue extends boolean = true>(): FormContextValue<
  T,
  AllowUndefinedValue
> {
  const value = useContext(FormContext);
  if (value === undefined) {
    throw new Error('useFormState should be used within FormContext.Provider');
  }
  return value as FormContextValue<T, AllowUndefinedValue>;
}
