import React from 'react';
import { FormTagCommands, FormTagValue } from './FormTag.types';
import './FormTag.scss';
import { FormTextFieldProps } from '../FormTextField';
declare const FormTag: React.ForwardRefExoticComponent<Omit<FormTextFieldProps<FormTagValue, false, FormTagValue>, "type"> & {
    formValueSeparator?: string | undefined;
    formValueSort?: boolean | undefined;
} & React.RefAttributes<FormTagCommands>>;
export default FormTag;
