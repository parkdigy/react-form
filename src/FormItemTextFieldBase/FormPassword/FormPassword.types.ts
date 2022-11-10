import { FormTextFieldProps, FormTextFieldDefaultProps } from '../FormTextField';

export interface FormPasswordProps extends Omit<FormTextFieldProps, 'type'> {
  eye?: boolean;
}

export const FormPasswordDefaultProps: Pick<FormPasswordProps, 'clear' | 'eye'> = {
  ...FormTextFieldDefaultProps,
  clear: false,
  eye: true,
};
