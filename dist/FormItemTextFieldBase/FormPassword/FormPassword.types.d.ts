import { FormTextFieldProps } from '../FormTextField';
export interface FormPasswordProps extends Omit<FormTextFieldProps, 'disableReturnKey' | 'type'> {
    eye?: boolean;
}
export declare const FormPasswordDefaultProps: Pick<FormPasswordProps, 'clear' | 'eye'>;
