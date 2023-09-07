import React from 'react';
import { FormTagCommands, FormTagValue } from './FormTag.types';
import './FormTag.scss';
declare const FormTag: React.ForwardRefExoticComponent<Omit<import("..").FormTextFieldProps<FormTagValue, false, FormTagValue>, "type"> & {
    formValueSeparator?: string | undefined;
    formValueSort?: boolean | undefined;
} & React.RefAttributes<FormTagCommands>>;
export default FormTag;
