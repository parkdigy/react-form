import { PFormFileProps as Props } from './PFormFile.types';

export const getFinalValue = (value: Props['value']) => value || '';
