import { PFormContextValue } from './PFormContext.types';
export default function useFormState<T, AllowUndefinedValue extends boolean = true>(): PFormContextValue<T, AllowUndefinedValue>;
