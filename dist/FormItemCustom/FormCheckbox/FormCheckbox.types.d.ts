import { ReactNode, RefObject } from 'react';
import { ButtonBaseActions, CheckboxProps } from '@mui/material';
import { CommonSxProps, FormCheckValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
export type FormCheckboxValue = string | number | boolean;
export interface FormCheckboxCommands extends Omit<FormValueItemBaseCommands<FormCheckboxValue, false>, 'getReset'>, FormCheckValueItemCommands<FormCheckboxValue> {
    getReset(): boolean;
}
export interface FormCheckboxProps extends CommonSxProps, Omit<CheckboxProps, 'color' | 'name' | 'inputRef' | 'action' | 'required' | 'onChange'>, Omit<FormValueItemProps<FormCheckboxValue, false>, 'value' | 'onChange'> {
    value?: FormCheckboxValue;
    uncheckedValue?: FormCheckboxValue;
    text?: ReactNode;
    inputRef?: RefObject<HTMLInputElement>;
    action?: RefObject<ButtonBaseActions>;
    onChange?(checked: boolean): void;
}
export declare const FormCheckboxDefaultProps: Pick<FormCheckboxProps, 'checked' | 'value' | 'uncheckedValue'>;
