import { FormTextFieldProps, FormTextFieldCommands } from '../FormTextField';
export type FormTextValue = string;
export type FormTextCommands = FormTextFieldCommands<FormTextValue, false>;
export type FormTextProps = Omit<FormTextFieldProps<FormTextValue, false>, 'disableReturnKey' | 'minRows' | 'maxRows'>;
export declare const FormTextDefaultProps: Pick<FormTextProps, 'clear' | 'value'>;
