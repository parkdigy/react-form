import { FormTextProps, FormTextDefaultProps } from '../FormText';
import { FormArrayValueItemCommands, FormValueItemBaseCommands } from '../../@types';

export type FormTagProps = Omit<FormTextProps, 'type' | 'value'> & {
  value?: string[];
  formValueSeparator?: string;
  formValueSort?: boolean;
};

export const FormTagDefaultProps: Pick<FormTagProps, 'value' | 'clear' | 'formValueSeparator'> = {
  ...FormTextDefaultProps,
  value: [],
  clear: true,
  formValueSeparator: ',',
};

export interface FormTagExtraCommands extends FormArrayValueItemCommands {}

export interface FormTagCommands extends FormValueItemBaseCommands, FormTagExtraCommands {}
