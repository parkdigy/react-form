import React from 'react';
import { FormRadioGroupProps, FormRadioGroupCommands, FormRadioGroupSingleValue } from './FormRadioGroup.types';
declare const FormRadioGroup: (<T extends FormRadioGroupSingleValue>(props: FormRadioGroupProps<T> & React.RefAttributes<FormRadioGroupCommands<T>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default FormRadioGroup;
