import React from 'react';
import { PFormContextProviderProps as Props } from './PFormContextProvider.types';
import PFormContext from '../PFormContext';

function PFormContextProvider<T = any, AllowUndefinedValue extends boolean = true>({
  children,
  value,
}: Props<T, AllowUndefinedValue>) {
  return <PFormContext.Provider value={value as any}>{children}</PFormContext.Provider>;
}

export default PFormContextProvider;
