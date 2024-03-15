import React from 'react';
import { FormCheckboxProps as Props, FormCheckboxCommands } from './FormCheckbox.types';
declare const FormCheckbox: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<FormCheckboxCommands>>;
export default FormCheckbox;
