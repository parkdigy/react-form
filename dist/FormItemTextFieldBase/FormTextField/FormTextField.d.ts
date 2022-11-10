import React from 'react';
import { FormTextFieldCommands } from './FormTextField.types';
import './FormTextField.scss';
declare const FormTextField: React.ForwardRefExoticComponent<Omit<import("@mui/material").TextFieldProps, "ref" | "name" | "onChange"> & Omit<import("../../@types").FormValueItemProps, "disabled" | "error" | "fullWidth" | "label" | "value"> & {
    icon?: string | undefined;
    clear?: boolean | undefined;
    maxLength?: number | undefined;
    labelShrink?: boolean | undefined;
    validPattern?: RegExp | undefined;
    invalidPattern?: RegExp | undefined;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    noFormValueItem?: boolean | undefined;
    onValue?(value: any): any;
} & React.RefAttributes<FormTextFieldCommands>>;
export default FormTextField;
