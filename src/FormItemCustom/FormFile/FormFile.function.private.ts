import { FormFileProps as Props } from './FormFile.types';

export const getFinalValue = (value: Props['value']) => value || '';
