import React from 'react';
import { FormSelectProps, FormSelectCommands } from './FormSelect.types';
import './FormSelect.scss';
import { FormValueType } from '../../@types';
interface WithForwardRefType<T, VT extends FormValueType = 'single'> extends React.FC<FormSelectProps<T, VT>> {
    <T, VT extends FormValueType = 'single'>(props: FormSelectProps<T, VT> & React.RefAttributes<FormSelectCommands<T, VT>>): ReturnType<React.FC<FormSelectProps<T, VT>>>;
}
declare const FormSelect: WithForwardRefType<any, 'any'>;
export default FormSelect;
