import React, { ReactNode } from 'react';
import { CommonSxProps, FormMultipleValueItemCommands, FormValueType } from '../../@types';
import { FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { FormTextFieldProps } from '../../FormItemTextFieldBase';
export interface FormAutocompleteItem<T> {
    label: string;
    value: T;
    disabled?: boolean;
    [key: string]: any;
}
export type FormAutocompleteItems<T> = FormAutocompleteItem<T>[];
export type FormAutocompleteValue<T, VT extends FormValueType = 'single', V = VT extends 'single' ? T : VT extends 'multiple' ? T[] : T | T[]> = V | undefined;
export type FormAutocompleteComponentValue<T, VT extends FormValueType = 'single', V = VT extends 'single' ? FormAutocompleteItem<T> : VT extends 'multiple' ? FormAutocompleteItem<T>[] : FormAutocompleteItem<T> | FormAutocompleteItem<T>[]> = V | null;
export interface FormAutocompleteProps<T, VT extends FormValueType = 'single'> extends CommonSxProps, Omit<FormValueItemProps<FormAutocompleteValue<T, VT>>, 'value'>, Pick<FormTextFieldProps<T>, 'required' | 'focused' | 'labelShrink'> {
    value?: FormAutocompleteValue<T, VT>;
    items?: FormAutocompleteItems<T>;
    multiple?: boolean;
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
    onAsyncLoadValueItem?: (value: FormAutocompleteValue<T, VT>) => Promise<FormAutocompleteComponentValue<T, VT>>;
    onRenderItem?: (item: FormAutocompleteItem<T>) => ReactNode;
    onRenderTag?: (item: FormAutocompleteItem<T>) => ReactNode;
    onValue?: (value: FormAutocompleteValue<T, VT>) => FormAutocompleteValue<T, VT>;
    onAddItem?: (item: FormAutocompleteItem<T>) => boolean | Promise<boolean>;
    getOptionDisabled?: (item: FormAutocompleteItem<T>) => boolean;
}
export declare const FormAutocompleteDefaultProps: Pick<FormAutocompleteProps<any>, 'formValueSeparator' | 'noOptionsText'>;
export interface FormAutocompleteCommands<T, VT extends FormValueType = 'single'> extends FormValueItemBaseCommands<FormAutocompleteValue<T, VT>, true>, FormArrayValueItemCommands, FormItemsValueItemCommands<FormAutocompleteItem<T>>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
