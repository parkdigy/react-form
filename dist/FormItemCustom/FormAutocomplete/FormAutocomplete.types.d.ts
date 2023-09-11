import React, { ReactNode } from 'react';
import { CommonSxProps, FormMultipleValueItemCommands } from '../../@types';
import { FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { FormTextFieldProps } from '../../FormItemTextFieldBase';
export type FormAutocompleteSingleValue = string | number | boolean;
export interface FormAutocompleteItem<T extends FormAutocompleteSingleValue> {
    label: string;
    value: T;
    disabled?: boolean;
    [key: string]: any;
}
export type FormAutocompleteItems<T extends FormAutocompleteSingleValue> = FormAutocompleteItem<T>[];
export type FormAutocompleteValue<T extends FormAutocompleteSingleValue, Multiple extends boolean | undefined> = ([Multiple] extends [true] ? T[] : T) | undefined;
export type FormAutocompleteComponentValue<T extends FormAutocompleteSingleValue, Multiple extends boolean | undefined> = ([Multiple] extends [true] ? FormAutocompleteItem<T>[] : FormAutocompleteItem<T>) | null;
export interface FormAutocompleteProps<T extends FormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined> extends CommonSxProps, Omit<FormValueItemProps<FormAutocompleteValue<T, Multiple>>, 'value'>, Pick<FormTextFieldProps<T>, 'required' | 'focused' | 'labelShrink'> {
    value?: FormAutocompleteValue<T, Multiple>;
    items?: FormAutocompleteItems<T>;
    multiple?: Multiple;
    formValueSeparator?: string;
    formValueSort?: boolean;
    loading?: boolean;
    loadingText?: React.ReactNode;
    placeholder?: string;
    disablePortal?: boolean;
    noOptionsText?: string;
    limitTags?: number;
    openOnFocus?: boolean;
    disableClearable?: boolean;
    async?: boolean;
    hidden?: boolean;
    onLoadItems?: (inputValue?: string) => Promise<FormAutocompleteItems<T>>;
    onAsyncLoadValueItem?: (value: FormAutocompleteValue<T, Multiple>) => Promise<FormAutocompleteComponentValue<T, Multiple>>;
    onRenderItem?: (item: FormAutocompleteItem<T>) => ReactNode;
    onRenderTag?: (item: FormAutocompleteItem<T>) => ReactNode;
    onValue?: (value: FormAutocompleteValue<T, Multiple>) => FormAutocompleteValue<T, Multiple>;
    onAddItem?: (item: FormAutocompleteItem<T>) => boolean | Promise<boolean>;
    getOptionDisabled?: (item: FormAutocompleteItem<T>) => boolean;
}
export declare const FormAutocompleteDefaultProps: Pick<FormAutocompleteProps<any>, 'formValueSeparator' | 'noOptionsText'>;
export interface FormAutocompleteCommands<T extends FormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined> extends FormValueItemBaseCommands<FormAutocompleteValue<T, Multiple>, true>, FormArrayValueItemCommands, FormItemsValueItemCommands<FormAutocompleteItem<T>>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
