import React from 'react';
import { PFormTextProps, PFormTextValue, PFormTextCommands } from '../PFormText';
export type PFormUrlValue = PFormTextValue;
export type PFormUrlCommands = PFormTextCommands;
export interface PFormUrlProps extends Omit<PFormTextProps, 'type'> {
    ref?: React.Ref<PFormUrlCommands>;
}
