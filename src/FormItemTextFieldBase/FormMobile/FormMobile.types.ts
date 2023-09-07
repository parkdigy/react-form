import { FormTelProps, FormTelDefaultProps, FormTelCommands, FormTelValue } from '../FormTel';

export type FormMobileValue = FormTelValue;

export type FormMobileCommands = FormTelCommands;

export type FormMobileProps = FormTelProps;

export const FormMobileDefaultProps: Pick<FormMobileProps, 'validPattern'> = {
  ...FormTelDefaultProps,
  validPattern:
    /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
};
