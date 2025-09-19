import React from 'react';
import { PFormSelectCommands, PFormSelectSingleValue, PFormSelectValue, PFormSelectItem } from './PFormSelect.types';
import './PFormSelect.scss';
declare const PFormSelect: (<T extends PFormSelectSingleValue, Multiple extends boolean | undefined>(props: Omit<import("../PFormTextField").PFormTextFieldProps<PFormSelectValue<T, Multiple>, false>, "type" | "clear"> & {
    items?: import("./PFormSelect.types").PFormSelectItems<T> | undefined;
    multiple?: Multiple | undefined;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: (() => Promise<PFormSelectItem<T>[]>) | undefined;
} & React.RefAttributes<PFormSelectCommands<T, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default PFormSelect;
