import { PFormTextFieldProps, PFormTextFieldCommands } from '../PFormTextField';
export type PFormTextareaValue = string;
export type PFormTextareaCommands = PFormTextFieldCommands<PFormTextareaValue, false>;
export type PFormTextareaProps = Omit<PFormTextFieldProps<PFormTextareaValue, false>, 'disableReturnKey' | 'type' | 'multiline' | 'minRows' | 'maxRows'>;
