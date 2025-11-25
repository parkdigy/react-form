import React from 'react';
import { PFormSelectCommands, PFormSelectSingleValue, PFormSelectValue, PFormSelectItems } from './PFormSelect.types';
import './PFormSelect.scss';
declare const PFormSelect: (<T extends PFormSelectSingleValue, Multiple extends boolean | undefined = undefined, Items extends PFormSelectItems<T> = PFormSelectItems<T>, SingleValue extends Items[number]["value"] = Items[number]["value"]>(props: Omit<import("../PFormTextField").PFormTextFieldProps<PFormSelectValue<Items[number]["value"], Multiple>, false>, "type" | "clear"> & {
    items?: Items | undefined;
    multiple?: Multiple | undefined;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: (() => Promise<Items>) | undefined;
} & React.RefAttributes<PFormSelectCommands<SingleValue, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default PFormSelect;
