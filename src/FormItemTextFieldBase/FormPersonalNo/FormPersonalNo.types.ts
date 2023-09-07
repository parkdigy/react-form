import { FormTextProps, FormTextDefaultProps, FormTextCommands } from '../FormText';

export type FormPersonalNoValue = string;

export type FormPersonalNoCommands = FormTextCommands;

export type FormPersonalNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
  value?: string;
};

export const FormPersonalNoDefaultProps: Pick<FormPersonalNoProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern: /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/,
};
