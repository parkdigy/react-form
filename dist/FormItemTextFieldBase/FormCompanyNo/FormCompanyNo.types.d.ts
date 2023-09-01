import { FormTextProps } from '../FormText';
export declare type FormCompanyNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
};
export declare const FormCompanyNoDefaultProps: Pick<FormTextProps, 'validPattern'>;
