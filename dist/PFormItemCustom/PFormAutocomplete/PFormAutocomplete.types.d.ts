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
export type PFormAutocompleteItems<T extends PFormAutocompleteSingleValue> = PFormAutocompleteItem<T>[];
export type PFormAutocompleteValue<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined> = ([Multiple] extends [true] ? T[] : T) | undefined;
export type PFormAutocompleteComponentValue<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined> = ([Multiple] extends [true] ? PFormAutocompleteItem<T>[] : PFormAutocompleteItem<T>) | null;
export interface PFormAutocompleteProps<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined> extends PCommonSxProps, Omit<PFormValueItemProps<PFormAutocompleteValue<T, Multiple>>, 'value'>, Pick<PFormTextFieldProps<T>, 'required' | 'focused' | 'labelShrink' | 'onFocus' | 'onBlur'> {
    value?: PFormAutocompleteValue<T, Multiple>;
    items?: PFormAutocompleteItems<T>;
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
    onLoadItems?: (inputValue?: string) => Promise<PFormAutocompleteItems<T>>;
    onAsyncLoadValueItem?: (value: PFormAutocompleteValue<T, Multiple>) => Promise<PFormAutocompleteComponentValue<T, Multiple>>;
    onRenderItem?: (item: PFormAutocompleteItem<T>) => ReactNode;
    onRenderTag?: (item: PFormAutocompleteItem<T>) => ReactNode;
    onValue?: (value: PFormAutocompleteValue<T, Multiple>) => PFormAutocompleteValue<T, Multiple>;
    onAddItem?: (item: PFormAutocompleteItem<T>) => boolean | Promise<boolean>;
    getOptionDisabled?: (item: PFormAutocompleteItem<T>) => boolean;
}
export interface PFormAutocompleteCommands<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined> extends PFormValueItemBaseCommands<PFormAutocompleteValue<T, Multiple>, true>, PFormArrayValueItemCommands, PFormItemsValueItemCommands<PFormAutocompleteItem<T>>, PFormMultipleValueItemCommands, PFormLoadingValueItemCommands {
    reloadItems: () => void;
}
