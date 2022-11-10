import { FormTextProps } from '../FormText';
export declare type FormEmailProps = Omit<FormTextProps, 'type'>;
export declare const FormEmailDefaultProps: Pick<FormEmailProps, 'validPattern'>;
