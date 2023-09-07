import { FormTextProps, FormTextDefaultProps, FormTextCommands, FormTextValue } from '../FormText';

export type FormTelValue = FormTextValue;

export type FormTelCommands = FormTextCommands;

export type FormTelProps = Omit<FormTextProps, 'type' | 'maxLength'>;

export const FormTelDefaultProps: Pick<FormTelProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern:
    /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
};
