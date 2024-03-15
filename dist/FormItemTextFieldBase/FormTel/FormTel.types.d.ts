import { FormTextProps, FormTextCommands, FormTextValue } from '../FormText';
export type FormTelValue = FormTextValue;
export type FormTelCommands = FormTextCommands;
export type FormTelProps = Omit<FormTextProps, 'type' | 'maxLength'>;
export declare const FormTelDefaultProps: Pick<FormTelProps, 'validPattern'>;
