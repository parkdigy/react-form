import { FormImageFileProps as Props } from './FormImageFile.types';

export const getFinalValue = (value: Props['value']) => value || '';
