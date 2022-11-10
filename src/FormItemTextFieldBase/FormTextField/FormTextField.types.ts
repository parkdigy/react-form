import { ReactNode } from 'react';
import { TextFieldProps } from '@mui/material';
import { FormItemValue, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';

export interface FormTextFieldCommands extends FormValueItemBaseCommands {}

export type FormTextFieldProps = Omit<TextFieldProps, 'ref' | 'name' | 'onChange'> &
  Omit<FormValueItemProps, 'value' | 'label' | 'fullWidth' | 'disabled' | 'error'> & {
    icon?: string;
    clear?: boolean;
    maxLength?: number;
    labelShrink?: boolean;
    validPattern?: RegExp;
    invalidPattern?: RegExp;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    noFormValueItem?: boolean;
    onValue?(value: FormItemValue): FormItemValue;
  };

export const FormTextFieldDefaultProps = {};
