import { ReactNode } from 'react';
import { ToggleButtonProps } from '@mui/material';
import { PartialPick, CommonSxProps, FormMultipleValueItemCommands, FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { FormItemBaseProps } from '../FormItemBase';
export declare type FormToggleButtonGroupItemValue = string | number;
export interface FormToggleButtonGroupItem {
    label: ReactNode;
    value: FormToggleButtonGroupItemValue;
    disabled?: boolean;
    color?: ToggleButtonProps['color'];
}
export declare type FormToggleButtonGroupValue = FormToggleButtonGroupItemValue | FormToggleButtonGroupItemValue[] | undefined;
export interface FormToggleButtonGroupProps extends CommonSxProps, Omit<FormValueItemProps, 'value'>, PartialPick<FormItemBaseProps, 'required' | 'focused'> {
    value?: FormToggleButtonGroupValue;
    items?: FormToggleButtonGroupItem[];
    multiple?: boolean;
    notAllowEmptyValue?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    loading?: boolean;
    onLoadItems?: () => Promise<FormToggleButtonGroupItem[]>;
    onValue?: (value: FormToggleButtonGroupValue) => FormToggleButtonGroupValue;
}
export declare const FormToggleButtonGroupDefaultProps: Pick<FormToggleButtonGroupProps, 'formValueSeparator'>;
export interface FormToggleButtonGroupExtraCommands extends FormArrayValueItemCommands, FormItemsValueItemCommands<FormToggleButtonGroupItem>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
export interface FormToggleButtonGroupCommands extends FormValueItemBaseCommands<FormToggleButtonGroupValue>, FormToggleButtonGroupExtraCommands {
}
