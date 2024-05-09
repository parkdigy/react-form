import { FormTextProps, FormTextValue, FormTextCommands } from '../FormText';

export type FormSearchValue = FormTextValue;

export type FormSearchCommands = FormTextCommands;

export type FormSearchProps = Omit<FormTextProps, 'type'>;
