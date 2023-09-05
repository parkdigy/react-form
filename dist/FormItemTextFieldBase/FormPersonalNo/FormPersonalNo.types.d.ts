import { FormTextProps } from '../FormText';
export type FormPersonalNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
};
export declare const FormPersonalNoDefaultProps: Pick<FormTextProps, 'validPattern'>;
