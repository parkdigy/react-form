import { FormTextFieldProps, FormTextFieldCommands } from '../FormTextField';
export type FormTextareaValue = string;
export type FormTextareaCommands = FormTextFieldCommands<FormTextareaValue, false>;
export type FormTextareaProps = Omit<FormTextFieldProps<FormTextareaValue, false>, 'disableReturnKey' | 'type' | 'multiline' | 'minRows' | 'maxRows'>;
export declare const FormTextareaDefaultProps: Pick<FormTextareaProps, 'clear' | 'rows' | 'value'>;
