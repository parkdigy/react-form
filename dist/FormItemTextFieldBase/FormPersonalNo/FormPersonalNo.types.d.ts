import { FormTextProps } from '../FormText';
export declare type FormPersonalNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
};
export declare const FormPersonalNoDefaultProps: Pick<FormTextProps, 'validPattern'>;
