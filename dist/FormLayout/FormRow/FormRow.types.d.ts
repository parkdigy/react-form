import { ReactNode } from 'react';
import { FormHelperTextProps } from '@mui/material';
import { PartialPick, CommonSxProps } from '../../@types';
import { FormContextValue } from '../../FormContext';
import { FormDividerProps } from '../FormDivider';
export interface FormRowProps extends CommonSxProps, PartialPick<FormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>, PartialPick<FormDividerProps, 'icon' | 'label' | 'line' | 'lineVerticalMargin' | 'hidden'>, PartialPick<FormHelperTextProps, 'error'> {
    helperText?: ReactNode;
}
export declare const FormRowDefaultProps: {};
export interface FormColsInRowMap {
    [key: string]: number | undefined;
}
