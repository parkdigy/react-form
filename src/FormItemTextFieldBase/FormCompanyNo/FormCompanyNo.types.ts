import { FormTextProps, FormTextCommands, FormTextValue } from '../FormText';

export type FormCompanyNoValue = FormTextValue;

export type FormCompanyNoCommands = FormTextCommands;

export type FormCompanyNoProps = Omit<FormTextProps, 'type' | 'maxLength'>;
