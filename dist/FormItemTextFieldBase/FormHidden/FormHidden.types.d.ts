import { FormTextProps } from '../FormText';
import { FormValueItemBaseCommands } from '../../@types';
export declare type FormHiddenProps = Pick<FormTextProps, 'className' | 'name' | 'value' | 'error' | 'required' | 'exceptValue' | 'onChange' | 'onValidate'>;
export declare const FormHiddenDefaultProps: {};
export interface FormHiddenCommands extends FormValueItemBaseCommands {
}
