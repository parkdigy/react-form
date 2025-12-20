import React from 'react';
import { PFormTextCommands, PFormTextProps } from '../../PFormText';
export interface PFormTagTextProps extends Omit<PFormTextProps, 'ref' | 'value' | 'onChange'> {
    ref?: React.Ref<PFormTextCommands>;
    allowSpace?: boolean;
    onAppendTag: (tag: string) => void;
}
