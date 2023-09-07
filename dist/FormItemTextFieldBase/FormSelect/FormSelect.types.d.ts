import { ReactNode } from 'react';
import { FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormMultipleValueItemCommands, FormValueType } from '../../@types';
import { FormTextFieldProps } from '../FormTextField';
export type FormSelectValue<T, VT extends FormValueType = 'single', AllowUndefinedValue extends boolean = true, V = VT extends 'single' ? T : VT extends 'multiple' ? T[] : T | T[]> = V | (AllowUndefinedValue extends true ? undefined : never);
export interface FormSelectExtraCommands<T> extends FormArrayValueItemCommands, FormItemsValueItemCommands<FormSelectItem<T>>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
export interface FormSelectCommands<T, VT extends FormValueType = 'single', AllowUndefinedValue extends boolean = true> extends FormValueItemBaseCommands<FormSelectValue<T, VT, AllowUndefinedValue>, AllowUndefinedValue>, FormSelectExtraCommands<T> {
}
export interface FormSelectItem<T> {
    label: ReactNode;
    value: T;
    disabled?: boolean;
}
export type FormSelectItems<T> = FormSelectItem<T>[];
export type FormSelectProps<T, VT extends FormValueType = 'single', AllowUndefinedValue extends boolean = true> = Omit<FormTextFieldProps<FormSelectValue<T, VT, AllowUndefinedValue>, AllowUndefinedValue>, 'type' | 'clear'> & {
    items?: FormSelectItems<T>;
    multiple?: boolean;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: () => Promise<FormSelectItem<T>[]>;
};
export declare const FormSelectDefaultProps: Pick<FormSelectProps<any>, 'formValueSeparator' | 'minWidth'>;
