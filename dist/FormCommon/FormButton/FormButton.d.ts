import React from 'react';
import { FormButtonProps as Props } from './FormButton.types';
declare const FormButton: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default FormButton;
