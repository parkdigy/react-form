import { ReactNode } from 'react';
import { FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormMultipleValueItemCommands } from '../../@types';
import { FormTextFieldProps } from '../FormTextField';
export type FormSelectSingleValue = string | number | boolean;
export type FormSelectValue<T extends FormSelectSingleValue, Multiple extends boolean | undefined> = [
    Multiple
] extends [true] ? T[] : '' | T;
export interface FormSelectExtraCommands<T extends FormSelectSingleValue> extends FormArrayValueItemCommands, FormItemsValueItemCommands<FormSelectItem<T>>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
export interface FormSelectCommands<T extends FormSelectSingleValue, Multiple extends boolean | undefined = undefined> extends FormValueItemBaseCommands<FormSelectValue<T, Multiple>, false>, FormSelectExtraCommands<T> {
}
export interface FormSelectItem<T extends FormSelectSingleValue> {
    label: ReactNode;
    value: '' | T;
    disabled?: boolean;
    [key: string]: any;
}
export type FormSelectItems<T extends FormSelectSingleValue> = FormSelectItem<T>[];
export type FormSelectProps<T extends FormSelectSingleValue, Multiple extends boolean | undefined = undefined> = Omit<FormTextFieldProps<FormSelectValue<T, Multiple>, false>, 'type' | 'clear'> & {
    items?: FormSelectItems<T>;
    multiple?: Multiple;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: () => Promise<FormSelectItem<T>[]>;
};
export declare const FormSelectDefaultProps: Pick<FormSelectProps<FormSelectSingleValue, false>, 'formValueSeparator' | 'minWidth'>;
