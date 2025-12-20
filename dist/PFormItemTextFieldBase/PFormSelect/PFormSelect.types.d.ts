import React, { ReactNode } from 'react';
import { PFormArrayValueItemCommands, PFormItemsValueItemCommands, PFormLoadingValueItemCommands, PFormValueItemBaseCommands, PFormMultipleValueItemCommands } from '../../@types';
import { PFormTextFieldProps } from '../PFormTextField';
export type PFormSelectSingleValue = string | number | boolean;
export type PFormSelectValue<T extends PFormSelectSingleValue, Multiple extends boolean | undefined = undefined> = Multiple extends true ? T[] : '' | T;
export interface PFormSelectExtraCommands<T extends PFormSelectSingleValue> extends PFormArrayValueItemCommands, PFormItemsValueItemCommands<PFormSelectItem<T>>, PFormMultipleValueItemCommands, PFormLoadingValueItemCommands {
    reloadItems: () => void;
}
export interface PFormSelectCommands<T extends PFormSelectSingleValue, Multiple extends boolean | undefined = undefined> extends PFormValueItemBaseCommands<PFormSelectValue<T, Multiple>, false>, PFormSelectExtraCommands<T> {
}
export interface PFormSelectItem<T extends PFormSelectSingleValue> {
    label: ReactNode;
    value: '' | T;
    disabled?: boolean;
    [key: string]: any;
}
export type PFormSelectItems<T extends PFormSelectSingleValue> = readonly PFormSelectItem<T>[];
export interface PFormSelectProps<T extends PFormSelectSingleValue, Multiple extends boolean | undefined = undefined, Items extends PFormSelectItems<T> = PFormSelectItems<T>, SingleValue extends Items[number]['value'] = Items[number]['value'], Value extends PFormSelectValue<SingleValue, Multiple> = PFormSelectValue<SingleValue, Multiple>> extends Omit<PFormTextFieldProps<Value, false>, 'ref' | 'type' | 'clear'> {
    ref?: React.Ref<PFormSelectCommands<SingleValue, Multiple>>;
    items?: Items;
    multiple?: Multiple;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: () => Promise<Items>;
}
