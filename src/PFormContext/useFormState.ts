import PFormContext from './PFormContext';
import { PFormContextValue } from './PFormContext.types';
import { useContext } from 'react';

export default function useFormState<T, AllowUndefinedValue extends boolean = true>(): PFormContextValue<
  T,
  AllowUndefinedValue
> {
  const value = useContext(PFormContext);
  if (value === undefined) {
    throw new Error('useFormState should be used within FormContext.Provider');
  }
  return value as PFormContextValue<T, AllowUndefinedValue>;
}
