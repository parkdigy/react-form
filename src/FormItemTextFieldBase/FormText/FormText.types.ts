import { FormTextFieldProps, FormTextFieldDefaultProps, FormTextFieldCommands } from '../FormTextField';

export type FormTextValue = string;

export type FormTextCommands = FormTextFieldCommands<FormTextValue, false>;

export type FormTextProps = Omit<FormTextFieldProps<FormTextValue, false>, 'disableReturnKey' | 'minRows' | 'maxRows'>;

export const FormTextDefaultProps: Pick<FormTextProps, 'clear' | 'value'> = {
  ...FormTextFieldDefaultProps,
  clear: true,
  value: '',
};
