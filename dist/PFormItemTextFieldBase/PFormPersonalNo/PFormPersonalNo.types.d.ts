import React from 'react';
import { type PFormTextProps, type PFormTextCommands } from '../PFormText';
export type PFormPersonalNoValue = string;
export type PFormPersonalNoCommands = PFormTextCommands;
export type PFormPersonalNoProps = Omit<PFormTextProps, 'type' | 'value' | 'maxLength'> & {
    ref?: React.Ref<PFormPersonalNoCommands>;
    value?: string;
    skipPersonalNumberValidateCheck?: boolean;
};
