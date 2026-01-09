import { type PFormTextEditorProps as Props } from './PFormTextEditor.types';

export const getFinalValue = (value: Props['value']) => {
  return value || '';
};
