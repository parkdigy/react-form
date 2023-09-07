import { ReactNode } from 'react';
import { FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormMultipleValueItemCommands, FormValueType } from '../../@types';
import { FormTextFieldProps } from '../FormTextField';
export type FormSelectValue<T, VT extends FormValueType = 'single', V = VT extends 'single' ? T : VT extends 'multiple' ? T[] : T | T[]> = V | undefined;
export interface FormSelectExtraCommands<T> extends FormArrayValueItemCommands, FormItemsValueItemCommands<FormSelectItem<T>>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
export interface FormSelectCommands<T, VT extends FormValueType = 'single'> extends FormValueItemBaseCommands<FormSelectValue<T, VT>, true>, FormSelectExtraCommands<T> {
}
export interface FormSelectItem<T> {
    label: ReactNode;
    value: T;
    disabled?: boolean;
}
export type FormSelectItems<T> = FormSelectItem<T>[];
export type FormSelectProps<T, VT extends FormValueType = 'single'> = Omit<FormTextFieldProps<FormSelectValue<T, VT>>, 'type' | 'clear'> & {
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
