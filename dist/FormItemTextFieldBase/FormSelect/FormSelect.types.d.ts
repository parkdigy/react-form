import { FormTextProps } from '../FormText';
import { ReactNode } from 'react';
import { FormArrayValueItemCommands, FormItemsValueItemCommands, FormLoadingValueItemCommands, FormValueItemBaseCommands, FormMultipleValueItemCommands } from '../../@types';
export type FormSelectItemValue = string | number;
export interface FormSelectItem {
    label: ReactNode;
    value: FormSelectItemValue;
    disabled?: boolean;
}
export type FormSelectValue = FormSelectItemValue | FormSelectItemValue[] | undefined;
export type FormSelectProps = Omit<FormTextProps, 'type' | 'value' | 'clear'> & {
    items?: FormSelectItem[];
    value?: FormSelectValue;
    multiple?: boolean;
    checkbox?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    minWidth?: string | number;
    loading?: boolean;
    onLoadItems?: () => Promise<FormSelectItem[]>;
};
export declare const FormSelectDefaultProps: Pick<FormSelectProps, 'formValueSeparator' | 'minWidth'>;
export interface FormSelectExtraCommands extends FormArrayValueItemCommands, FormItemsValueItemCommands<FormSelectItem>, FormMultipleValueItemCommands, FormLoadingValueItemCommands {
}
export interface FormSelectCommands extends FormValueItemBaseCommands, FormSelectExtraCommands {
}
