import React from 'react';
import { type PFormTextCommands, type PFormTextProps, type PFormTextValue } from '../PFormText';
export type PFormPasswordValue = PFormTextValue;
export type PFormPasswordCommands = PFormTextCommands;
export interface PFormPasswordProps extends Omit<PFormTextProps, 'disableReturnKey' | 'type'> {
    ref?: React.Ref<PFormPasswordCommands>;
    eye?: boolean;
}
