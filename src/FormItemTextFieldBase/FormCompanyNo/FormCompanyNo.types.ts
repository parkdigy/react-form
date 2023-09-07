import { FormTextProps, FormTextDefaultProps, FormTextCommands, FormTextValue } from '../FormText';

export type FormCompanyNoValue = FormTextValue;

export type FormCompanyNoCommands = FormTextCommands;

export type FormCompanyNoProps = Omit<FormTextProps, 'type' | 'maxLength'>;

export const FormCompanyNoDefaultProps: Pick<FormCompanyNoProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern: /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/,
};
