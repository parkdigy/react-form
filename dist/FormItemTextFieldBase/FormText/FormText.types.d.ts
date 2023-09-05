import { FormTextFieldProps } from '../FormTextField';
export type FormTextProps = Omit<FormTextFieldProps, 'disableReturnKey' | 'minRows' | 'maxRows'>;
export declare const FormTextDefaultProps: Pick<FormTextProps, 'clear' | 'value'>;
