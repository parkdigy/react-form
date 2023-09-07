import { ReactNode } from 'react';
import { TextFieldProps } from '@mui/material';
import { FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
export type FormTextFieldValue = any;
export interface FormTextFieldCommands<T = FormTextFieldValue, AllowUndefinedValue extends boolean = true> extends FormValueItemBaseCommands<T, AllowUndefinedValue> {
}
export type FormTextFieldProps<T = FormTextFieldValue, AllowUndefinedValue extends boolean = true, V = AllowUndefinedValue extends true ? T | undefined : T> = Omit<TextFieldProps, 'ref' | 'name' | 'value' | 'onChange'> & Omit<FormValueItemProps<T, AllowUndefinedValue>, 'label' | 'fullWidth' | 'disabled' | 'error'> & {
    icon?: string;
    clear?: boolean;
    maxLength?: number;
    labelShrink?: boolean;
    validPattern?: RegExp;
    invalidPattern?: RegExp;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    noFormValueItem?: boolean;
    hidden?: boolean;
    disableReturnKey?: boolean;
    onValue?(value: V): V;
};
export declare const FormTextFieldDefaultProps: {};
