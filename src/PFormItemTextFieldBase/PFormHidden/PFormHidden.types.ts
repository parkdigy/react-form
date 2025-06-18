import { PFormTextFieldCommands, PFormTextFieldProps } from '../PFormTextField';

export type PFormHiddenValue = any;

export type PFormHiddenCommands = PFormTextFieldCommands<PFormHiddenValue>;

export type PFormHiddenProps = Pick<
  PFormTextFieldProps<PFormHiddenValue>,
  'className' | 'name' | 'value' | 'error' | 'required' | 'exceptValue' | 'onChange' | 'onValue' | 'onValidate'
>;
