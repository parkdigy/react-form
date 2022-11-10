import { createContext } from 'react';
import { FormContextDefaultValue, FormContextValue } from './FormContext.types';

const FormContext = createContext<FormContextValue>(FormContextDefaultValue);

export default FormContext;
