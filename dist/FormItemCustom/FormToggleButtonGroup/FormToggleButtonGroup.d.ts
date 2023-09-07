import React from 'react';
import { FormValueType } from '../../@types';
import { FormToggleButtonGroupProps, FormToggleButtonGroupCommands } from './FormToggleButtonGroup.types';
import './FormToggleButtonGroup.scss';
interface WithForwardRefType<T, VT extends FormValueType = 'single'> extends React.FC<FormToggleButtonGroupProps<T, VT>> {
    <T, VT extends FormValueType = 'single'>(props: FormToggleButtonGroupProps<T, VT> & React.RefAttributes<FormToggleButtonGroupCommands<T, VT>>): ReturnType<React.FC<FormToggleButtonGroupProps<T, VT>>>;
}
declare const FormToggleButtonGroup: WithForwardRefType<any, 'any'>;
export default FormToggleButtonGroup;
