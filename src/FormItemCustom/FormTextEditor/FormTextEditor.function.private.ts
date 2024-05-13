import { FormTextEditorProps as Props } from './FormTextEditor.types';

export const getFinalValue = (value: Props['value']) => {
  return value || '';
};
