import { FormTextProps } from '../FormText';
export type FormEmailProps = Omit<FormTextProps, 'type'>;
export declare const FormEmailDefaultProps: Pick<FormEmailProps, 'validPattern'>;
