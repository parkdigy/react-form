import React, { ReactNode } from 'react';
import { CommonSxProps, FormMultipleValueItemCommands } from '../../@types';
import { FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { FormTextFieldProps } from '../../FormItemTextFieldBase';
export declare type FormAutocompleteItemValue = string | number;
export interface FormAutocompleteItem {
    label: string;
    value: FormAutocompleteItemValue;
    disabled?: boolean;
    [key: string]: any;
}
export declare type FormAutocompleteValue = FormAutocompleteItemValue | FormAutocompleteItemValue[] | undefined;
export declare type FormAutocompleteComponentValue = FormAutocompleteItem | FormAutocompleteItem[] | null;
export interface FormAutocompleteProps extends CommonSxProps, Omit<FormValueItemProps, 'value'>, Pick<FormTextFieldProps, 'required' | 'focused' | 'labelShrink'> {
    value?: FormAutocompleteValue;
    items?: FormAutocompleteItem[];
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
    onLoadItems?: (inputValue?: string) => Promise<FormAutocompleteItem[]>;
    onRenderItem?: (item: FormAutocompleteItem) => ReactNode;
    onRenderTag?: (item: FormAutocompleteItem) => ReactNode;
    onValue?: (value: FormAutocompleteValue) => FormAutocompleteValue;
    onAddItem?: (item: FormAutocompleteItem) => boolean | Promise<boolean>;
}
export declare const FormAutocompleteDefaultProps: Pick<FormAutocompleteProps, 'formValueSeparator' | 'noOptionsText'>;
export interface FormAutocompleteCommands extends FormValueItemBaseCommands, FormArrayValueItemCommands, FormItemsValueItemCommands<FormAutocompleteItem>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
