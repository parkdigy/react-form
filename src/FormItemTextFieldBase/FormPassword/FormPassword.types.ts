import { FormTextFieldProps, FormTextFieldDefaultProps } from '../FormTextField';

export interface FormPasswordProps extends Omit<FormTextFieldProps, 'disableReturnKey' | 'type'> {
  eye?: boolean;
}

export const FormPasswordDefaultProps: Pick<FormPasswordProps, 'clear' | 'eye'> = {
  ...FormTextFieldDefaultProps,
  clear: false,
  eye: true,
};
