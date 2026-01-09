import { createContext } from 'react';
import { PFormContextDefaultValue, type PFormContextValue } from './PFormContext.types';

const PFormContext = createContext<PFormContextValue>(PFormContextDefaultValue);

export default PFormContext;
