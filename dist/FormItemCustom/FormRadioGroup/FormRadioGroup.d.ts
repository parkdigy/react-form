import React from 'react';
import { FormRadioGroupProps, FormRadioGroupCommands } from './FormRadioGroup.types';
interface WithForwardRefType<T> extends React.FC<FormRadioGroupProps<T>> {
    <T>(props: FormRadioGroupProps<T> & React.RefAttributes<FormRadioGroupCommands<T>>): ReturnType<React.FC<FormRadioGroupProps<T>>>;
}
declare const FormRadioGroup: WithForwardRefType<any>;
export default FormRadioGroup;
