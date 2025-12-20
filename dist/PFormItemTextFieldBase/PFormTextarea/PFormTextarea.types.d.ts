import React from 'react';
import { PFormTextFieldProps, PFormTextFieldCommands } from '../PFormTextField';
export type PFormTextareaValue = string;
export type PFormTextareaCommands = PFormTextFieldCommands<PFormTextareaValue, false>;
export interface PFormTextareaProps extends Omit<PFormTextFieldProps<PFormTextareaValue, false>, 'disableReturnKey' | 'type' | 'multiline' | 'minRows' | 'maxRows'> {
    ref?: React.Ref<PFormTextareaCommands>;
}
