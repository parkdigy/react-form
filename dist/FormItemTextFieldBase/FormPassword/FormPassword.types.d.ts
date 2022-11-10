import { FormTextFieldProps } from '../FormTextField';
export interface FormPasswordProps extends Omit<FormTextFieldProps, 'type'> {
    eye?: boolean;
}
export declare const FormPasswordDefaultProps: Pick<FormPasswordProps, 'clear' | 'eye'>;
