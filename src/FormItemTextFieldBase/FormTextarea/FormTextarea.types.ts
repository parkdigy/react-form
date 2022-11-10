import { FormTextFieldProps, FormTextFieldDefaultProps } from '../FormTextField';

export type FormTextareaProps = Omit<FormTextFieldProps, 'type' | 'multiline' | 'minRows' | 'maxRows'>;

export const FormTextareaDefaultProps: Pick<FormTextareaProps, 'clear' | 'rows' | 'value'> = {
  ...FormTextFieldDefaultProps,
  clear: false,
  rows: 3,
  value: '',
};
