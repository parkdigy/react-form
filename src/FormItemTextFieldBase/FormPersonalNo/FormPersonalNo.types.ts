import { FormTextProps, FormTextDefaultProps } from '../FormText';

export type FormPersonalNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
  value?: string;
};

export const FormPersonalNoDefaultProps: Pick<FormTextProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern: /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/,
};
