import React from 'react';
import { PFormTextFieldCommands, PFormTextFieldProps } from '../PFormTextField';

export type PFormHiddenValue = any;

export type PFormHiddenCommands = PFormTextFieldCommands<PFormHiddenValue>;

export interface PFormHiddenProps extends Pick<
  PFormTextFieldProps<PFormHiddenValue>,
  'className' | 'name' | 'value' | 'error' | 'required' | 'exceptValue' | 'onChange' | 'onValue' | 'onValidate'
> {
  ref?: React.Ref<PFormHiddenCommands>;
}
