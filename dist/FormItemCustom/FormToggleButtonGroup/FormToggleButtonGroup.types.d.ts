import { ReactNode } from 'react';
import { ToggleButtonProps } from '@mui/material';
import { PartialPick, CommonSxProps, FormMultipleValueItemCommands, FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormValueItemProps, FormValueType } from '../../@types';
import { FormItemBaseProps } from '../FormItemBase';
export interface FormToggleButtonGroupItem<T> {
    label: ReactNode;
    value: T;
    disabled?: boolean;
    color?: ToggleButtonProps['color'];
}
export type FormToggleButtonGroupItems<T> = FormToggleButtonGroupItem<T>[];
export type FormToggleButtonGroupValue<T, VT extends FormValueType = 'single', V = VT extends 'single' ? T : VT extends 'multiple' ? T[] : T | T[]> = V | undefined;
export interface FormToggleButtonGroupProps<T, VT extends FormValueType = 'single'> extends CommonSxProps, Omit<FormValueItemProps<FormToggleButtonGroupValue<T, VT>>, 'value'>, PartialPick<FormItemBaseProps, 'required' | 'focused'> {
    type?: 'button' | 'checkbox' | 'radio';
    value?: FormToggleButtonGroupValue<T, VT>;
    items?: FormToggleButtonGroupItem<T>[];
    multiple?: boolean;
    notAllowEmptyValue?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    loading?: boolean;
    hidden?: boolean;
    itemWidth?: number | string;
    onLoadItems?: () => Promise<FormToggleButtonGroupItem<T>[]>;
    onValue?: (value: FormToggleButtonGroupValue<T, VT>) => FormToggleButtonGroupValue<T, VT>;
}
export declare const FormToggleButtonGroupDefaultProps: Pick<FormToggleButtonGroupProps<any, 'any'>, 'type' | 'formValueSeparator'>;
export interface FormToggleButtonGroupExtraCommands<T> extends FormArrayValueItemCommands, FormItemsValueItemCommands<FormToggleButtonGroupItem<T>>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
export interface FormToggleButtonGroupCommands<T, VT extends FormValueType = 'single'> extends FormValueItemBaseCommands<FormToggleButtonGroupValue<T, VT>, true>, FormToggleButtonGroupExtraCommands<T> {
}
