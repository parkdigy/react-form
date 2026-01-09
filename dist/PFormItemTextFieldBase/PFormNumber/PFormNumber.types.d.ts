import React from 'react';
import { type PFormTextFieldCommands, type PFormTextFieldProps } from '../PFormTextField';
export type PFormNumberCommands = PFormTextFieldCommands<number>;
export type PFormNumberProps = Omit<PFormTextFieldProps<number>, 'type'> & {
    ref?: React.Ref<PFormNumberCommands>;
    allowNegative?: boolean;
    thousandSeparator?: boolean;
    allowDecimal?: boolean;
    decimalScale?: number;
    prefix?: string;
    suffix?: string;
};
