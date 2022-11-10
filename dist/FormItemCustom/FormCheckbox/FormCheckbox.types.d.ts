import { ReactNode, RefObject } from 'react';
import { ButtonBaseActions, CheckboxProps } from '@mui/material';
import { CommonSxProps, FormCheckValueItemCommands, FormItemValue, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
export interface FormCheckboxProps extends CommonSxProps, Omit<CheckboxProps, 'color' | 'name' | 'inputRef' | 'action' | 'required' | 'onChange'>, Omit<FormValueItemProps, 'value' | 'onChange'> {
    value?: FormItemValue;
    uncheckedValue?: FormItemValue;
    text?: ReactNode;
    inputRef?: RefObject<HTMLInputElement>;
    action?: RefObject<ButtonBaseActions>;
    onChange?(checked: boolean): void;
}
export declare const FormCheckboxDefaultProps: Pick<FormCheckboxProps, 'checked' | 'value' | 'uncheckedValue'>;
export interface FormCheckboxCommands extends Omit<FormValueItemBaseCommands, 'getReset'>, FormCheckValueItemCommands {
    getReset(): FormCheckboxProps['checked'];
}
