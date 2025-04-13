import React from 'react';
import { FormSelectCommands, FormSelectSingleValue } from './FormSelect.types';
import './FormSelect.scss';
declare const FormSelect: (<T extends FormSelectSingleValue, Multiple extends boolean | undefined>(props: Omit<import("../FormTextField").FormTextFieldProps<import("./FormSelect.types").FormSelectValue<T, Multiple>, false>, "type" | "clear"> & {
    items?: import("./FormSelect.types").FormSelectItems<T> | undefined;
    multiple?: Multiple | undefined;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: (() => Promise<import("./FormSelect.types").FormSelectItem<T>[]>) | undefined;
} & React.RefAttributes<FormSelectCommands<T, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default FormSelect;
