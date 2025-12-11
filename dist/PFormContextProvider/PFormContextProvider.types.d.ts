import { ReactNode } from 'react';
import { PFormContextValue } from '../PFormContext';
export interface PFormContextProviderProps<T = any, AllowUndefinedValue extends boolean = true> {
    value: PFormContextValue<T, AllowUndefinedValue>;
    children: ReactNode;
}
