import { ReactNode } from 'react';
import { RadioGroupProps } from '@mui/material';
import { CommonSxProps, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
export declare type FormRadioGroupValue = string | number | undefined;
export interface FormRadioGroupItem {
    label: ReactNode;
    value: string | number;
    disabled?: boolean;
}
export interface FormRadioGroupProps extends CommonSxProps, Omit<FormValueItemProps, 'value'> {
    value?: FormRadioGroupValue;
    items?: FormRadioGroupItem[];
    required?: boolean;
    inline?: boolean;
    loading?: boolean;
    nowrap?: boolean;
    hidden?: boolean;
    onLoadItems?(): Promise<FormRadioGroupItem[]>;
    onValue?(value: RadioGroupProps['value']): RadioGroupProps['value'];
}
export declare const FormRadioGroupDefaultProps: Pick<FormRadioGroupProps, 'inline'>;
export interface FormRadioGroupCommands extends FormValueItemBaseCommands<FormRadioGroupValue>, FormItemsValueItemCommands<FormRadioGroupItem>, FormLoadingValueItemCommands {
}
