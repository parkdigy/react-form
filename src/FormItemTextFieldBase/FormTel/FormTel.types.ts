import { FormTextProps, FormTextDefaultProps } from '../FormText';

export type FormTelProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
  value?: string;
};

export const FormTelDefaultProps: Pick<FormTextProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern:
    /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
};
