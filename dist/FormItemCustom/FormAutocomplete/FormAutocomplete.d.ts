import React from 'react';
import { FormAutocompleteProps, FormAutocompleteCommands, FormAutocompleteSingleValue } from './FormAutocomplete.types';
declare const FormAutocomplete: (<T extends FormAutocompleteSingleValue, Multiple extends boolean | undefined>(props: FormAutocompleteProps<T, Multiple> & React.RefAttributes<FormAutocompleteCommands<T, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default FormAutocomplete;
