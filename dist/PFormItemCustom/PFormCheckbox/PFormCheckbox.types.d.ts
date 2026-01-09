import React, { type ReactNode, type RefObject } from 'react';
import { type ButtonBaseActions, type CheckboxProps } from '@mui/material';
import { type PCommonSxProps, type PFormCheckValueItemCommands, type PFormValueItemBaseCommands, type PFormValueItemProps } from '../../@types';
export type PFormCheckboxValue = string | number | boolean;
export interface PFormCheckboxCommands extends Omit<PFormValueItemBaseCommands<PFormCheckboxValue, false>, 'getReset'>, PFormCheckValueItemCommands<PFormCheckboxValue> {
    getReset: () => boolean;
}
export interface PFormCheckboxProps extends PCommonSxProps, Omit<CheckboxProps, 'ref' | 'size' | 'color' | 'name' | 'inputRef' | 'action' | 'required' | 'onChange'>, Omit<PFormValueItemProps<PFormCheckboxValue, false>, 'value' | 'onChange'> {
    ref?: React.Ref<PFormCheckboxCommands>;
    value?: PFormCheckboxValue;
    uncheckedValue?: PFormCheckboxValue;
    text?: ReactNode;
    inputRef?: RefObject<HTMLInputElement>;
    action?: RefObject<ButtonBaseActions>;
    onChange?: (checked: boolean) => void;
}
