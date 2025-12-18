import React from 'react';
import { PFormTextCommands, PFormTextProps } from '../../PFormText';

export interface PFormTagTextCommands extends PFormTextCommands {}

export interface PFormTagTextProps extends Omit<PFormTextProps, 'value' | 'onChange'> {
  ref?: React.Ref<PFormTagTextCommands>;
  allowSpace?: boolean;
  onAppendTag: (tag: string) => void;
}
