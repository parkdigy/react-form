import { FormTextProps } from '../FormText';
export type FormUrlProps = Omit<FormTextProps, 'type'>;
export declare const FormUrlDefaultProps: Pick<FormUrlProps, 'validPattern'>;
