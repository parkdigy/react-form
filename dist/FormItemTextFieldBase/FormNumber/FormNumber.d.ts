import React from 'react';
import { FormValueItemBaseCommands } from '../../@types';
declare const FormNumber: React.ForwardRefExoticComponent<Omit<import("../FormText").FormTextProps, "type"> & {
    allowLeadingZeros?: boolean | undefined;
    allowNegative?: boolean | undefined;
    thousandSeparator?: boolean | undefined;
    allowDecimal?: boolean | undefined;
    decimalScale?: number | undefined;
    prefix?: string | undefined;
    suffix?: string | undefined;
} & React.RefAttributes<FormValueItemBaseCommands<any>>>;
export default FormNumber;
