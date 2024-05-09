import { FormTextProps, FormTextCommands } from '../FormText';

export type FormEmailValue = string;

export type FormEmailCommands = FormTextCommands;

export type FormEmailProps = Omit<FormTextProps, 'type'>;
