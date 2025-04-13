import React from 'react';
import { FormNumberCommands } from './FormNumber.types';
declare const FormNumber: React.ForwardRefExoticComponent<Omit<import("../FormTextField").FormTextFieldProps<number>, "type"> & {
    allowNegative?: boolean;
    thousandSeparator?: boolean;
    allowDecimal?: boolean;
    decimalScale?: number;
    prefix?: string;
    suffix?: string;
} & React.RefAttributes<FormNumberCommands>>;
export default FormNumber;
