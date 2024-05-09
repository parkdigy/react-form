import React from 'react';
declare const FormPersonalNo: React.ForwardRefExoticComponent<Omit<import("../FormText").FormTextProps, "value" | "type" | "maxLength"> & {
    value?: string | undefined;
    skipPersonalNumberValidateCheck?: boolean | undefined;
} & React.RefAttributes<import("../FormText").FormTextCommands>>;
export default FormPersonalNo;
