import { ReactNode } from 'react';
import { PCommonSxProps, PFormItemsValueItemCommands, PFormLoadingValueItemCommands, PFormValueItemBaseCommands, PFormValueItemProps } from '../../@types';
export type PFormRadioGroupSingleValue = string | number | boolean;
export interface PFormRadioGroupItem<T extends PFormRadioGroupSingleValue> {
    label: ReactNode;
    value: T;
    disabled?: boolean;
}
export type PFormRadioGroupItems<T extends PFormRadioGroupSingleValue> = PFormRadioGroupItem<T>[];
export type PFormRadioGroupValue<T extends PFormRadioGroupSingleValue> = T | undefined;
export interface PFormRadioGroupProps<T extends PFormRadioGroupSingleValue> extends PCommonSxProps, Omit<PFormValueItemProps<T>, 'value'> {
    value?: T;
    items?: PFormRadioGroupItem<T>[];
    required?: boolean;
    inline?: boolean;
    loading?: boolean;
    nowrap?: boolean;
    onLoadItems?: () => Promise<PFormRadioGroupItem<T>[]>;
    onValue?: (value: PFormRadioGroupValue<T>) => PFormRadioGroupValue<T>;
}
export interface PFormRadioGroupCommands<T extends PFormRadioGroupSingleValue> extends PFormValueItemBaseCommands<T, true>, PFormItemsValueItemCommands<PFormRadioGroupItem<T>>, PFormLoadingValueItemCommands {
    reloadItems: () => void;
}
