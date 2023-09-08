import React from 'react';
import { FormSelectCommands, FormSelectSingleValue } from './FormSelect.types';
import './FormSelect.scss';
declare const FormSelect: (<T extends FormSelectSingleValue, Multiple extends boolean | undefined>(props: Omit<import("../FormTextField").FormTextFieldProps<import("./FormSelect.types").FormSelectValue<T, Multiple>, false, import("./FormSelect.types").FormSelectValue<T, Multiple>>, "type" | "clear"> & {
    items?: import("./FormSelect.types").FormSelectItems<T> | undefined;
    multiple?: Multiple | undefined;
    checkbox?: boolean | undefined;
    formValueSeparator?: string | undefined;
    formValueSort?: boolean | undefined;
    minWidth?: string | number | undefined;
    loading?: boolean | undefined;
    onLoadItems?: (() => Promise<import("./FormSelect.types").FormSelectItem<T>[]>) | undefined;
} & React.RefAttributes<FormSelectCommands<T, Multiple>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "defaultProps" | "$$typeof">;
export default FormSelect;
