import React, { ReactNode } from 'react';
import { FormControlProps, GridProps, InputLabelProps } from '@mui/material';
import { PartialPick, PCommonSxProps, PFormValue, PFormValueMap, PFormValueItemCommands, PFormValueItemBaseCommands } from '../@types';
export interface PFormInvalidItemInfo {
    name: string;
    commands: PFormValueItemCommands<any>;
}
export type PFormInvalidItems = PFormInvalidItemInfo[];
export interface PFormProps extends PCommonSxProps, PartialPick<FormControlProps, 'variant' | 'size' | 'color' | 'focused'>, PartialPick<GridProps, 'spacing'> {
    ref?: React.Ref<PFormCommands>;
    labelShrink?: InputLabelProps['shrink'];
    fullWidth?: boolean;
    fullHeight?: boolean;
    formColGap?: number;
    disabled?: boolean;
    submitWhenReturnKey?: boolean;
    onSubmit?(data: PFormValueMap): void;
    onInvalid?: (invalidItems: PFormInvalidItems) => void;
    onValueChange?: (name: string, value: any) => void;
    onValueChangeByUser?: (name: string, value: any) => void;
}
export interface PFormCommands {
    submit: () => void;
    getAllFormValue: () => PFormValueMap;
    resetAll: () => void;
    getItem: <T extends PFormValueItemBaseCommands<any, true> = PFormValueItemCommands<any>>(name: string) => T | undefined;
    exists: (name: string) => boolean;
    getReset: (name: string) => any;
    getFormReset: (name: string, subKey?: string) => PFormValue;
    reset: (name: string) => void;
    getValue: (name: string) => any;
    getFormValue: (name: string, subKey?: string) => PFormValue;
    setValue: (name: string, value: any) => void;
    isExceptValue: (name: string) => boolean;
    isDisabled: (name: string) => boolean;
    setDisabled: (name: string, disabled: boolean) => void;
    isHidden: (name: string) => boolean;
    setHidden: (name: string, hidden: boolean) => void;
    focus: (name: string) => void;
    validate: (name: string) => boolean;
    setError: (name: string, error: boolean, helperText: ReactNode) => void;
}
