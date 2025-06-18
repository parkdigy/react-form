import React from 'react';
import { PFormAutocompleteProps, PFormAutocompleteCommands, PFormAutocompleteSingleValue } from './PFormAutocomplete.types';
declare const PFormAutocomplete: (<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined>(props: PFormAutocompleteProps<T, Multiple> & React.RefAttributes<PFormAutocompleteCommands<T, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default PFormAutocomplete;
