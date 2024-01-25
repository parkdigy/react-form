import { ReactNode } from 'react';
import { FormControlProps, GridProps, InputLabelProps } from '@mui/material';
import { PartialPick, CommonSxProps, FormValue, FormValueMap, FormValueItemCommands, FormValueItemBaseCommands } from '../@types';
export interface FormInvalidItemInfo {
    name: string;
    commands: FormValueItemCommands<any>;
}
export type FormInvalidItems = FormInvalidItemInfo[];
export interface FormProps extends CommonSxProps, PartialPick<FormControlProps, 'variant' | 'size' | 'color' | 'focused'>, PartialPick<GridProps, 'spacing'> {
    labelShrink?: InputLabelProps['shrink'];
    fullWidth?: boolean;
    fullHeight?: boolean;
    formColGap?: number;
    disabled?: boolean;
    onSubmit?(data: FormValueMap): void;
    onInvalid?(invalidItems: FormInvalidItems): void;
    onValueChange?(name: string, value: any): void;
    onValueChangeByUser?(name: string, value: any): void;
}
export declare const FormDefaultProps: Pick<FormProps, 'variant' | 'size' | 'color' | 'spacing' | 'formColGap' | 'fullWidth' | 'fullHeight'>;
export interface FormCommands {
    submit(): void;
    getAllFormValue(): FormValueMap;
    resetAll(): void;
    getItem<T extends FormValueItemBaseCommands<any, true> = FormValueItemCommands<any>>(name: string): T | undefined;
    exists(name: string): boolean;
    getReset(name: string): any;
    getFormReset(name: string, subKey?: string): FormValue;
    reset(name: string): void;
    getValue(name: string): any;
    getFormValue(name: string, subKey?: string): FormValue;
    setValue(name: string, value: any): void;
    isExceptValue(name: string): boolean;
    isDisabled(name: string): boolean;
    setDisabled(name: string, disabled: boolean): void;
    isHidden(name: string): boolean;
    setHidden(name: string, hidden: boolean): void;
    focus(name: string): void;
    validate(name: string): boolean;
    setError(name: string, error: boolean, helperText: ReactNode): void;
}
