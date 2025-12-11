import React from 'react';
import { PFormTextFieldProps, PFormTextFieldCommands, PFormTextFieldValue } from './PFormTextField.types';
import './PFormTextField.scss';
interface WithForwardRefType<T = PFormTextFieldValue, AllowUndefinedValue extends boolean = true> extends React.FC<PFormTextFieldProps<T, AllowUndefinedValue>> {
    <T = PFormTextFieldValue, AllowUndefinedValue extends boolean = true>(props: PFormTextFieldProps<T, AllowUndefinedValue> & React.RefAttributes<PFormTextFieldCommands<T, AllowUndefinedValue>>): ReturnType<React.FC<PFormTextFieldProps<T, AllowUndefinedValue>>>;
}
declare const PFormTextField: WithForwardRefType;
export default PFormTextField;
