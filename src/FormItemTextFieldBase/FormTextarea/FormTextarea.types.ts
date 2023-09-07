import { FormTextFieldProps, FormTextFieldDefaultProps, FormTextFieldCommands } from '../FormTextField';

export type FormTextareaValue = string;

export type FormTextareaCommands = FormTextFieldCommands<FormTextareaValue, false>;

export type FormTextareaProps = Omit<
  FormTextFieldProps<FormTextareaValue, false>,
  'disableReturnKey' | 'type' | 'multiline' | 'minRows' | 'maxRows'
>;

export const FormTextareaDefaultProps: Pick<FormTextareaProps, 'clear' | 'rows' | 'value'> = {
  ...FormTextFieldDefaultProps,
  clear: false,
  rows: 3,
  value: '',
};
