import React from 'react';
import { type PFormTextFieldProps, type PFormTextFieldCommands } from '../PFormTextField';
export type PFormTextValue = string;
export type PFormTextCommands = PFormTextFieldCommands<PFormTextValue, false>;
export interface PFormTextProps extends Omit<PFormTextFieldProps<PFormTextValue, false>, 'ref' | 'disableReturnKey' | 'minRows' | 'maxRows'> {
    ref?: React.Ref<PFormTextCommands>;
}
