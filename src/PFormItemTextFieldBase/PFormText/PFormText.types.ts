import { PFormTextFieldProps, PFormTextFieldCommands } from '../PFormTextField';

export type PFormTextValue = string;

export type PFormTextCommands = PFormTextFieldCommands<PFormTextValue, false>;

export type PFormTextProps = Omit<
  PFormTextFieldProps<PFormTextValue, false>,
  'disableReturnKey' | 'minRows' | 'maxRows'
>;
