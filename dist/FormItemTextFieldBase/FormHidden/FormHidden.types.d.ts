import { FormTextFieldCommands, FormTextFieldProps } from '../FormTextField';
export type FormHiddenValue = any;
export type FormHiddenCommands = FormTextFieldCommands<FormHiddenValue>;
export type FormHiddenProps = Pick<FormTextFieldProps<FormHiddenValue>, 'className' | 'name' | 'value' | 'error' | 'required' | 'exceptValue' | 'onChange' | 'onValue' | 'onValidate'>;
