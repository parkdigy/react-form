import { FormTextProps, FormTextCommands } from '../FormText';
export type FormPersonalNoValue = string;
export type FormPersonalNoCommands = FormTextCommands;
export type FormPersonalNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
};
export declare const FormPersonalNoDefaultProps: Pick<FormPersonalNoProps, 'validPattern'>;
