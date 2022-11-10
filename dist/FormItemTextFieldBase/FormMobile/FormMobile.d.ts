import React from 'react';
import { FormValueItemBaseCommands } from '../../@types';
declare const FormMobile: React.ForwardRefExoticComponent<Omit<import("..").FormTextProps, "type" | "value" | "maxLength"> & {
    value?: string | undefined;
} & React.RefAttributes<FormValueItemBaseCommands<any>>>;
export default FormMobile;
