import React from 'react';
import { FormTagCommands } from './FormTag.types';
import './FormTag.scss';
declare const FormTag: React.ForwardRefExoticComponent<Omit<import("../FormText").FormTextProps, "type" | "value"> & {
    value?: string[] | undefined;
    formValueSeparator?: string | undefined;
    formValueSort?: boolean | undefined;
} & React.RefAttributes<FormTagCommands>>;
export default FormTag;
