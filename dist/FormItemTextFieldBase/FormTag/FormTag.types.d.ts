import { FormTextProps } from '../FormText';
import { FormArrayValueItemCommands, FormValueItemBaseCommands } from '../../@types';
export declare type FormTagProps = Omit<FormTextProps, 'type' | 'value'> & {
    value?: string[];
    formValueSeparator?: string;
    formValueSort?: boolean;
};
export declare const FormTagDefaultProps: Pick<FormTagProps, 'value' | 'clear' | 'formValueSeparator'>;
export interface FormTagExtraCommands extends FormArrayValueItemCommands {
}
export interface FormTagCommands extends FormValueItemBaseCommands, FormTagExtraCommands {
}
