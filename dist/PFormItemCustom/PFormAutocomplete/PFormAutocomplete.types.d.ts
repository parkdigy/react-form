import React, { ReactNode } from 'react';
import { PCommonSxProps, PFormMultipleValueItemCommands } from '../../@types';
import { PFormArrayValueItemCommands, PFormItemsValueItemCommands, PFormLoadingValueItemCommands, PFormValueItemBaseCommands, PFormValueItemProps } from '../../@types';
import { PFormTextFieldProps } from '../../PFormItemTextFieldBase';
export type PFormAutocompleteSingleValue = string | number | boolean;
export interface PFormAutocompleteItem<T extends PFormAutocompleteSingleValue> {
    label: ReactNode;
    value: T;
    disabled?: boolean;
    [key: string]: any;
}
export type PFormAutocompleteItems<T extends PFormAutocompleteSingleValue> = readonly PFormAutocompleteItem<T>[];
export type PFormAutocompleteValue<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined> = (Multiple extends true ? T[] : T) | undefined;
export type PFormAutocompleteComponentValue<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined> = (Multiple extends true ? PFormAutocompleteItem<T>[] : PFormAutocompleteItem<T>) | null;
export interface PFormAutocompleteProps<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined, Items extends PFormAutocompleteItems<T> = PFormAutocompleteItems<T>, SingleValue extends Items[number]['value'] = Items[number]['value'], Item = PFormAutocompleteItem<SingleValue>, Value = Multiple extends true ? SingleValue[] : SingleValue, ComponentValue = PFormAutocompleteComponentValue<SingleValue, Multiple>> extends PCommonSxProps, PFormValueItemProps<Value>, Pick<PFormTextFieldProps<SingleValue>, 'required' | 'focused' | 'labelShrink' | 'onFocus' | 'onBlur'> {
    ref?: React.Ref<PFormAutocompleteCommands<SingleValue, Multiple>>;
    items?: Items;
    multiple?: Multiple;
    formValueSeparator?: string;
    formValueSort?: boolean;
    loading?: boolean;
    loadingText?: React.ReactNode;
    placeholder?: string;
    disablePortal?: boolean;
    noOptionsText?: string;
    limitTags?: number;
    getLimitTagsText?: (more: number) => ReactNode;
    openOnFocus?: boolean;
    disableClearable?: boolean;
    async?: boolean;
    autoFocus?: boolean;
    onLoadItems?: (inputValue?: string) => Promise<Items>;
    onAsyncLoadValueItem?: (value: Value) => Promise<ComponentValue>;
    onRenderItem?: (item: Item) => ReactNode;
    onRenderTag?: (item: Item) => ReactNode;
    onValue?: (value: Value | undefined) => Value | undefined;
    onAddItem?: (item: Item) => boolean | Promise<boolean>;
    getOptionDisabled?: (item: Item) => boolean;
}
export interface PFormAutocompleteCommands<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined> extends PFormValueItemBaseCommands<PFormAutocompleteValue<T, Multiple>, true>, PFormArrayValueItemCommands, PFormItemsValueItemCommands<PFormAutocompleteItem<T>>, PFormMultipleValueItemCommands, PFormLoadingValueItemCommands {
    reloadItems: () => void;
    setInputValue: (value: string) => void;
}
