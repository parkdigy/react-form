import React from 'react';
import { FormValueItemCommands } from '../../@types';
import { FormSelectItem, FormSelectValue } from './FormSelect.types';
import './FormSelect.scss';
declare const FormSelect: React.ForwardRefExoticComponent<Omit<import("../FormText").FormTextProps, "type" | "value" | "clear"> & {
    items?: FormSelectItem[] | undefined;
    value?: FormSelectValue;
    multiple?: boolean | undefined;
    checkbox?: boolean | undefined;
    formValueSeparator?: string | undefined;
    formValueSort?: boolean | undefined;
    minWidth?: string | number | undefined;
    loading?: boolean | undefined;
    onLoadItems?: (() => Promise<FormSelectItem[]>) | undefined;
} & React.RefAttributes<FormValueItemCommands<FormSelectItem, any>>>;
export default FormSelect;
