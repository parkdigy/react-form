import React from 'react';
import { type PFormTextCommands, type PFormTextProps } from '../../PFormText';

export interface PFormTagTextProps extends Omit<PFormTextProps, 'ref' | 'value' | 'onChange'> {
  ref?: React.Ref<PFormTextCommands>;
  allowSpace?: boolean;
  onAppendTag: (tag: string) => void;
}
