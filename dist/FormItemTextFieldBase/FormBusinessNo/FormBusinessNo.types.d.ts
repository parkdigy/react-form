import { FormTextProps, FormTextCommands, FormTextValue } from '../FormText';
export type FormBusinessNoValue = FormTextValue;
export type FormBusinessNoCommands = FormTextCommands;
export type FormBusinessNoProps = Omit<FormTextProps, 'type' | 'maxLength'>;
