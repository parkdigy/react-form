import { FormTextProps } from '../FormText';
export declare type FormTelProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
};
export declare const FormTelDefaultProps: Pick<FormTextProps, 'validPattern'>;
