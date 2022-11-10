import { FormTextFieldProps, FormTextFieldDefaultProps } from '../FormTextField';

export type FormTextProps = Omit<FormTextFieldProps, 'multiline' | 'minRows' | 'maxRows'>;

export const FormTextDefaultProps: Pick<FormTextProps, 'clear' | 'value'> = {
  ...FormTextFieldDefaultProps,
  clear: true,
  value: '',
};
