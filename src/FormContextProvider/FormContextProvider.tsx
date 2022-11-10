import React from 'react';
import { FormContextProviderProps as Props } from './FormContextProvider.types';
import FormContext from '../FormContext';

const FormContextProvider: React.FC<Props> = ({ children, value }) => {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
