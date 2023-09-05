import { FormTextProps } from '../FormText';
export type FormCompanyNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
};
export declare const FormCompanyNoDefaultProps: Pick<FormTextProps, 'validPattern'>;
