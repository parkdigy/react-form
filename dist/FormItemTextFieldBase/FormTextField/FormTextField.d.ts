import React from 'react';
import { FormTextFieldProps, FormTextFieldCommands, FormTextFieldValue } from './FormTextField.types';
import './FormTextField.scss';
interface WithForwardRefType<T = FormTextFieldValue, AllowUndefinedValue extends boolean = true> extends React.FC<FormTextFieldProps<T, AllowUndefinedValue>> {
    <T = FormTextFieldValue, AllowUndefinedValue extends boolean = true>(props: FormTextFieldProps<T, AllowUndefinedValue> & React.RefAttributes<FormTextFieldCommands<T, AllowUndefinedValue>>): ReturnType<React.FC<FormTextFieldProps<T, AllowUndefinedValue>>>;
}
declare const FormTextField: WithForwardRefType;
export default FormTextField;
