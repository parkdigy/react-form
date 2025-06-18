import React from 'react';
import { PFormContextProviderProps as Props } from './PFormContextProvider.types';
import PFormContext from '../PFormContext';

const PFormContextProvider: React.FC<Props> = ({ children, value }) => {
  return <PFormContext.Provider value={value}>{children}</PFormContext.Provider>;
};

export default PFormContextProvider;
