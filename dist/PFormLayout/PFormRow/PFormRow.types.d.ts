import React, { ReactNode } from 'react';
import { FormHelperTextProps } from '@mui/material';
import { PartialPick, PCommonSxProps } from '../../@types';
import { PFormContextValue } from '../../PFormContext';
import { PFormDividerProps } from '../PFormDivider';
export interface PFormRowProps extends PCommonSxProps, PartialPick<PFormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>, PartialPick<PFormDividerProps, 'icon' | 'label' | 'line' | 'lineVerticalMargin' | 'hidden' | 'warning'>, PartialPick<FormHelperTextProps, 'error'> {
    ref?: React.Ref<HTMLDivElement>;
    fullHeight?: boolean;
    helperText?: ReactNode;
    endAdornment?: ReactNode;
}
export interface PFormColsInRowMap {
    [key: string]: number | undefined;
}
