import React from 'react';
import { FormNumberCommands } from './FormNumber.types';
declare const FormNumber: React.ForwardRefExoticComponent<Omit<import("../FormTextField").FormTextFieldProps<number, true, number | undefined>, "type"> & {
    allowNegative?: boolean | undefined;
    thousandSeparator?: boolean | undefined;
    allowDecimal?: boolean | undefined;
    decimalScale?: number | undefined;
    prefix?: string | undefined;
    suffix?: string | undefined;
} & React.RefAttributes<FormNumberCommands>>;
export default FormNumber;
