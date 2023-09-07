import React from 'react';
import { FormAutocompleteProps, FormAutocompleteCommands } from './FormAutocomplete.types';
import { FormValueType } from '../../@types';
interface WithForwardRefType<T, VT extends FormValueType = 'single'> extends React.FC<FormAutocompleteProps<T, VT>> {
    <T, VT extends FormValueType = 'single'>(props: FormAutocompleteProps<T, VT> & React.RefAttributes<FormAutocompleteCommands<T, VT>>): ReturnType<React.FC<FormAutocompleteProps<T, VT>>>;
}
declare const FormAutocomplete: WithForwardRefType<any, 'any'>;
export default FormAutocomplete;
