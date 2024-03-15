import { FormValueItemProps, FormValueItemBaseCommands } from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import { FormControlLabelProps } from '@mui/material';
export interface FormSwitchProps extends CommonSxProps, Omit<FormValueItemProps<boolean, false>, 'fullWidth'> {
    switchLabel?: ReactNode;
    switchLabelProps?: Omit<FormControlLabelProps, 'children' | 'control' | 'label' | 'required' | 'disabled'>;
    onValue?(value: boolean): boolean;
}
export declare const FormSwitchDefaultProps: {};
export interface FormSwitchCommands extends FormValueItemBaseCommands<boolean, false> {
}
