import { ReactNode } from 'react';
import { PFormArrayValueItemCommands, PFormItemsValueItemCommands, PFormLoadingValueItemCommands, PFormValueItemBaseCommands, PFormMultipleValueItemCommands } from '../../@types';
import { PFormTextFieldProps } from '../PFormTextField';
export type PFormSelectSingleValue = string | number | boolean;
export type PFormSelectValue<T extends PFormSelectSingleValue, Multiple extends boolean | undefined> = [
    Multiple
] extends [true] ? T[] : '' | T;
export interface PFormSelectExtraCommands<T extends PFormSelectSingleValue> extends PFormArrayValueItemCommands, PFormItemsValueItemCommands<PFormSelectItem<T>>, PFormMultipleValueItemCommands, PFormLoadingValueItemCommands {
}
export interface PFormSelectCommands<T extends PFormSelectSingleValue, Multiple extends boolean | undefined = undefined> extends PFormValueItemBaseCommands<PFormSelectValue<T, Multiple>, false>, PFormSelectExtraCommands<T> {
}
export interface PFormSelectItem<T extends PFormSelectSingleValue> {
    label: ReactNode;
    value: '' | T;
    disabled?: boolean;
    [key: string]: any;
}
export type PFormSelectItems<T extends PFormSelectSingleValue> = PFormSelectItem<T>[];
export type PFormSelectProps<T extends PFormSelectSingleValue, Multiple extends boolean | undefined = undefined> = Omit<PFormTextFieldProps<PFormSelectValue<T, Multiple>, false>, 'type' | 'clear'> & {
    items?: PFormSelectItems<T>;
    multiple?: Multiple;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: () => Promise<PFormSelectItem<T>[]>;
};
