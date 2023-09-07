import React from 'react';
import { FormNumberCommands, FormNumberValue } from './FormNumber.types';
declare const FormNumber: React.ForwardRefExoticComponent<Omit<import("../FormTextField").FormTextFieldProps<FormNumberValue, false, FormNumberValue>, "type"> & {
    allowLeadingZeros?: boolean | undefined;
    allowNegative?: boolean | undefined;
    thousandSeparator?: boolean | undefined;
    allowDecimal?: boolean | undefined;
    decimalScale?: number | undefined;
    prefix?: string | undefined;
    suffix?: string | undefined;
} & React.RefAttributes<FormNumberCommands>>;
export default FormNumber;
