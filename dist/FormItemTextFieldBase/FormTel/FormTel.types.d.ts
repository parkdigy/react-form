import { FormTextProps } from '../FormText';
export type FormTelProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
};
export declare const FormTelDefaultProps: Pick<FormTextProps, 'validPattern'>;
