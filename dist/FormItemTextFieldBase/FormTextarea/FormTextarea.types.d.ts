import { FormTextFieldProps } from '../FormTextField';
export declare type FormTextareaProps = Omit<FormTextFieldProps, 'disableReturnKey' | 'type' | 'multiline' | 'minRows' | 'maxRows'>;
export declare const FormTextareaDefaultProps: Pick<FormTextareaProps, 'clear' | 'rows' | 'value'>;
