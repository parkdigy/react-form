import React from 'react';
declare const FormPersonalNo: React.ForwardRefExoticComponent<Omit<import("../FormText").FormTextProps, "value" | "type" | "maxLength"> & {
    value?: string;
    skipPersonalNumberValidateCheck?: boolean;
} & React.RefAttributes<import("../FormText").FormTextCommands>>;
export default FormPersonalNo;
