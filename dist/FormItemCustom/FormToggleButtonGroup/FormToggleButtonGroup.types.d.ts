import { ReactNode } from 'react';
import { ToggleButtonProps } from '@mui/material';
import { PartialPick, CommonSxProps, FormMultipleValueItemCommands, FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { FormItemBaseProps } from '../FormItemBase';
export type FormToggleButtonGroupSingleValue = string | number | boolean;
export interface FormToggleButtonGroupItem<T extends FormToggleButtonGroupSingleValue> {
    label: ReactNode;
    value: T;
    disabled?: boolean;
    color?: ToggleButtonProps['color'];
}
export type FormToggleButtonGroupItems<T extends FormToggleButtonGroupSingleValue> = FormToggleButtonGroupItem<T>[];
export type FormToggleButtonGroupValue<T extends FormToggleButtonGroupSingleValue, Multiple extends boolean | undefined> = ([Multiple] extends [true] ? T[] : T) | undefined;
export interface FormToggleButtonGroupProps<T extends FormToggleButtonGroupSingleValue, Multiple extends boolean | undefined = undefined> extends CommonSxProps, Omit<FormValueItemProps<FormToggleButtonGroupValue<T, Multiple>>, 'value'>, PartialPick<FormItemBaseProps, 'required' | 'focused'> {
    type?: 'button' | 'checkbox' | 'radio';
    value?: FormToggleButtonGroupValue<T, Multiple>;
    items?: FormToggleButtonGroupItem<T>[];
    multiple?: Multiple;
    notAllowEmptyValue?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    loading?: boolean;
    hidden?: boolean;
    itemWidth?: number | string;
    onLoadItems?: () => Promise<FormToggleButtonGroupItem<T>[]>;
    onValue?: (value: FormToggleButtonGroupValue<T, Multiple>) => FormToggleButtonGroupValue<T, Multiple>;
}
export declare const FormToggleButtonGroupDefaultProps: Pick<FormToggleButtonGroupProps<any, false>, 'type' | 'formValueSeparator'>;
export interface FormToggleButtonGroupExtraCommands<T extends FormToggleButtonGroupSingleValue> extends FormArrayValueItemCommands, FormItemsValueItemCommands<FormToggleButtonGroupItem<T>>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
export interface FormToggleButtonGroupCommands<T extends FormToggleButtonGroupSingleValue, Multiple extends boolean | undefined = undefined> extends FormValueItemBaseCommands<FormToggleButtonGroupValue<T, Multiple>, true>, FormToggleButtonGroupExtraCommands<T> {
}
