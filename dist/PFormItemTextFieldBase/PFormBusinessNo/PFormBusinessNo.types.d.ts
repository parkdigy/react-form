import React from 'react';
import { PFormTextProps, PFormTextCommands, PFormTextValue } from '../PFormText';
export type PFormBusinessNoValue = PFormTextValue;
export type PFormBusinessNoCommands = PFormTextCommands;
export interface PFormBusinessNoProps extends Omit<PFormTextProps, 'type' | 'maxLength'> {
    ref?: React.Ref<PFormBusinessNoCommands>;
}
