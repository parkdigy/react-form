import React from 'react';
import { FormLabelProps as Props } from './FormLabel.types';
declare const FormLabel: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLLabelElement>>;
export default FormLabel;
