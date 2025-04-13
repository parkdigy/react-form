import React from 'react';
import { FormToggleButtonGroupProps, FormToggleButtonGroupCommands, FormToggleButtonGroupSingleValue } from './FormToggleButtonGroup.types';
import './FormToggleButtonGroup.scss';
declare const FormToggleButtonGroup: (<T extends FormToggleButtonGroupSingleValue, Multiple extends boolean | undefined>(props: FormToggleButtonGroupProps<T, Multiple> & React.RefAttributes<FormToggleButtonGroupCommands<T, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default FormToggleButtonGroup;
