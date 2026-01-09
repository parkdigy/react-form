import React, { type ReactNode } from 'react';
import { type FormHelperTextProps } from '@mui/material';
import { type PartialPick, type PCommonSxProps } from '../../@types';
import { type PFormContextValue } from '../../PFormContext';
import { type PFormDividerProps } from '../PFormDivider';
export interface PFormRowProps extends PCommonSxProps, PartialPick<PFormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>, PartialPick<PFormDividerProps, 'icon' | 'label' | 'line' | 'lineVerticalMargin' | 'hidden' | 'warning'>, PartialPick<FormHelperTextProps, 'error'> {
    ref?: React.Ref<HTMLDivElement>;
    fullHeight?: boolean;
    helperText?: ReactNode;
    endAdornment?: ReactNode;
}
export interface PFormColsInRowMap {
    [key: string]: number | undefined;
}
