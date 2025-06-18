import { createContext } from 'react';
import { PFormContextDefaultValue, PFormContextValue } from './PFormContext.types';

const PFormContext = createContext<PFormContextValue>(PFormContextDefaultValue);

export default PFormContext;
