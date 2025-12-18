import React from 'react';
import { PFormTextProps, PFormTextCommands, PFormTextValue } from '../PFormText';

export type PFormTelValue = PFormTextValue;

export type PFormTelCommands = PFormTextCommands;

export interface PFormTelProps extends Omit<PFormTextProps, 'type' | 'maxLength'> {
  ref?: React.Ref<PFormTelCommands>;
}
