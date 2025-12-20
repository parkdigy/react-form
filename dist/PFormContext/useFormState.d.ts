import { PFormContextValue } from './PFormContext.types';
export default function useFormState<T, AllowUndefinedValue extends boolean, ItemValue = any, RangeItemValue = any>(): PFormContextValue<T, AllowUndefinedValue, ItemValue, RangeItemValue>;
