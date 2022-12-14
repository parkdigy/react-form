import { ReactNode } from 'react';
import { FormControlProps, GridProps, InputLabelProps } from '@mui/material';
import { PartialPick, CommonSxProps, FormItemValue, FormValue, FormValueMap, FormValueItemCommands, FormValueItemBaseCommands } from '../@types';
export interface FormProps extends CommonSxProps, PartialPick<FormControlProps, 'variant' | 'size' | 'color' | 'focused'>, PartialPick<GridProps, 'spacing'> {
    labelShrink?: InputLabelProps['shrink'];
    fullWidth?: boolean;
    formColGap?: number;
    onSubmit?(data: FormValueMap): void;
    onValueChange?(name: string, value: FormItemValue): void;
    onValueChangeByUser?(name: string, value: FormItemValue): void;
}
export declare const FormDefaultProps: Pick<FormProps, 'variant' | 'size' | 'color' | 'spacing' | 'formColGap' | 'fullWidth'>;
export interface FormCommands {
    submit(): void;
    getAllFormValue(): FormValueMap;
    resetAll(): void;
    getItem<T extends FormValueItemBaseCommands = FormValueItemCommands>(name: string): T | undefined;
    exists(name: string): boolean;
    getReset(name: string): FormItemValue;
    getFormReset(name: string, subKey?: string): FormValue;
    reset(name: string): void;
    getValue(name: string): FormItemValue;
    getFormValue(name: string, subKey?: string): FormValue;
    setValue(name: string, value: FormItemValue): void;
    isExceptValue(name: string): boolean;
    isDisabled(name: string): boolean;
    setDisabled(name: string, disabled: boolean): void;
    focus(name: string): void;
    validate(name: string): boolean;
    setError(name: string, error: boolean, helperText: ReactNode): void;
}
