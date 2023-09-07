import { FormContextValue } from './FormContext.types';
export default function useFormState<T, AllowUndefinedValue extends boolean = true>(): FormContextValue<T, AllowUndefinedValue>;
