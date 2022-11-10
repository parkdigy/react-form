import React from 'react';
import { FormValueItemBaseCommands } from '../../@types';
declare const FormTel: React.ForwardRefExoticComponent<Omit<import("../FormText").FormTextProps, "type" | "value" | "maxLength"> & {
    value?: string | undefined;
} & React.RefAttributes<FormValueItemBaseCommands<any>>>;
export default FormTel;
