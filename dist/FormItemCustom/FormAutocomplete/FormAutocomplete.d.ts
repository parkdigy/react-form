import React from 'react';
import { FormAutocompleteProps, FormAutocompleteCommands, FormAutocompleteSingleValue } from './FormAutocomplete.types';
declare const FormAutocomplete: (<T extends FormAutocompleteSingleValue, Multiple extends boolean | undefined>(props: FormAutocompleteProps<T, Multiple> & React.RefAttributes<FormAutocompleteCommands<T, Multiple>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "defaultProps" | "$$typeof">;
export default FormAutocomplete;
