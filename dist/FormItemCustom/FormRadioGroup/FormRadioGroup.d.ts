import React from 'react';
import { FormRadioGroupProps, FormRadioGroupCommands, FormRadioGroupSingleValue } from './FormRadioGroup.types';
declare const FormRadioGroup: (<T extends FormRadioGroupSingleValue>(props: FormRadioGroupProps<T> & React.RefAttributes<FormRadioGroupCommands<T>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "defaultProps" | "$$typeof">;
export default FormRadioGroup;
