import { FormTextProps, FormTextValue, FormTextCommands } from '../FormText';
export type FormSearchValue = FormTextValue;
export type FormSearchCommands = FormTextCommands;
export type FormSearchProps = Omit<FormTextProps, 'type'>;
export declare const FormSearchDefaultProps: {
    value?: string | undefined;
    clear?: boolean | undefined;
};
