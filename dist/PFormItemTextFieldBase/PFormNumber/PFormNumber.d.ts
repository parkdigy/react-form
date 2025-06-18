import React from 'react';
import { PFormNumberCommands } from './PFormNumber.types';
declare const PFormNumber: React.ForwardRefExoticComponent<Omit<import("../PFormTextField").PFormTextFieldProps<number>, "type"> & {
    allowNegative?: boolean;
    thousandSeparator?: boolean;
    allowDecimal?: boolean;
    decimalScale?: number;
    prefix?: string;
    suffix?: string;
} & React.RefAttributes<PFormNumberCommands>>;
export default PFormNumber;
