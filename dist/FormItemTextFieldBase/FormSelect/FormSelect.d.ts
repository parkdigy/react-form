import React from 'react';
import { FormSelectProps, FormSelectCommands } from './FormSelect.types';
import './FormSelect.scss';
import { FormValueType } from '../../@types';
interface WithForwardRefType<T, VT extends FormValueType = 'single', AllowUndefinedValue extends boolean = true> extends React.FC<FormSelectProps<T, VT, AllowUndefinedValue>> {
    <T, VT extends FormValueType = 'single', AllowUndefinedValue extends boolean = true>(props: FormSelectProps<T, VT, AllowUndefinedValue> & React.RefAttributes<FormSelectCommands<T, VT, AllowUndefinedValue>>): ReturnType<React.FC<FormSelectProps<T, VT, AllowUndefinedValue>>>;
}
declare const FormSelect: WithForwardRefType<any, 'any'>;
export default FormSelect;
