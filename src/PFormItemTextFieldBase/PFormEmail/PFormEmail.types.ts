import React from 'react';
import { type PFormTextProps, type PFormTextCommands } from '../PFormText';

export type PFormEmailValue = string;

export type PFormEmailCommands = PFormTextCommands;

export interface PFormEmailProps extends Omit<PFormTextProps, 'type'> {
  ref?: React.Ref<PFormEmailCommands>;
}
