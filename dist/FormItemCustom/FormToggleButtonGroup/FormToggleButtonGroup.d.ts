import React from 'react';
import { FormToggleButtonGroupProps, FormToggleButtonGroupCommands, FormToggleButtonGroupSingleValue } from './FormToggleButtonGroup.types';
import './FormToggleButtonGroup.scss';
declare const FormToggleButtonGroup: (<T extends FormToggleButtonGroupSingleValue, Multiple extends boolean | undefined>(props: FormToggleButtonGroupProps<T, Multiple> & React.RefAttributes<FormToggleButtonGroupCommands<T, Multiple>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "defaultProps" | "$$typeof">;
export default FormToggleButtonGroup;
