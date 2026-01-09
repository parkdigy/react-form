import React from 'react';
import { type PFormTextProps, type PFormTextValue, type PFormTextCommands } from '../PFormText';
export type PFormUrlValue = PFormTextValue;
export type PFormUrlCommands = PFormTextCommands;
export interface PFormUrlProps extends Omit<PFormTextProps, 'type'> {
    ref?: React.Ref<PFormUrlCommands>;
}
