import { FormTextProps, FormTextDefaultProps } from '../FormText';

export type FormCompanyNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
  value?: string;
};

export const FormCompanyNoDefaultProps: Pick<FormTextProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern:
    /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/,
};
