import { ReactNode } from 'react';
import { FormContextValue } from '../FormContext';

export interface FormContextProviderProps {
  value: FormContextValue;
  children: ReactNode;
}
