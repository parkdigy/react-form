import PFormContext from './PFormContext';
import { type PFormContextValue } from './PFormContext.types';
import { useContext } from 'react';

export default function useFormState<
  T,
  AllowUndefinedValue extends boolean,
  ItemValue = any,
  RangeItemValue = any,
>(): PFormContextValue<T, AllowUndefinedValue, ItemValue, RangeItemValue> {
  const value = useContext(PFormContext);
  if (value === undefined) {
    throw new Error('useFormState should be used within FormContext.Provider');
  }
  return value as any;
}
