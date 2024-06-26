import { FormTextCommands, FormTextProps, FormTextValue } from '../FormText';
export type FormPasswordValue = FormTextValue;
export type FormPasswordCommands = FormTextCommands;
export interface FormPasswordProps extends Omit<FormTextProps, 'disableReturnKey' | 'type'> {
    eye?: boolean;
}
