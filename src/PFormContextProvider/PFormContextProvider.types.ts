import { ReactNode } from 'react';
import { PFormContextValue } from '../PFormContext';

export interface PFormContextProviderProps {
  value: PFormContextValue;
  children: ReactNode;
}
