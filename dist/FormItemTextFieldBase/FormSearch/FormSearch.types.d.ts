import { FormTextProps } from '../FormText';
export declare type FormSearchProps = Omit<FormTextProps, 'type'>;
export declare const FormSearchDefaultProps: {
    value?: unknown;
    clear?: boolean | undefined;
};
