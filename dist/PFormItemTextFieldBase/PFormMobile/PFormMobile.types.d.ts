import React from 'react';
import { type PFormTelProps, type PFormTelCommands, type PFormTelValue } from '../PFormTel';
export type PFormMobileValue = PFormTelValue;
export type PFormMobileCommands = PFormTelCommands;
export interface PFormMobileProps extends PFormTelProps {
    ref?: React.Ref<PFormMobileCommands>;
}
