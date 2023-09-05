import { FormTextProps } from '../FormText';
export type FormSearchProps = Omit<FormTextProps, 'type'>;
export declare const FormSearchDefaultProps: {
    value?: unknown;
    clear?: boolean | undefined;
};
