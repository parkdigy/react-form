import { FormTextProps, FormTextValue, FormTextCommands } from '../FormText';
export type FormUrlValue = FormTextValue;
export type FormUrlCommands = FormTextCommands;
export type FormUrlProps = Omit<FormTextProps, 'type'>;
