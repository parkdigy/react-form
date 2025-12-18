import React from 'react';
import { PFormTextProps, PFormTextValue, PFormTextCommands } from '../PFormText';

export type PFormSearchValue = PFormTextValue;

export type PFormSearchCommands = PFormTextCommands;

export interface PFormSearchProps extends Omit<PFormTextProps, 'type'> {
  ref?: React.Ref<PFormSearchCommands>;
}
