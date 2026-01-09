import React, { type ReactNode } from 'react';
import { type FormHelperTextProps } from '@mui/material';
import { type PartialPick, type PCommonSxProps, type PCommonProps } from '../../@types';
import { type PFormContextValue } from '../../PFormContext';
export interface PFormItemBaseProps extends PCommonSxProps, PartialPick<PFormContextValue, 'variant' | 'size' | 'color'> {
    ref?: React.Ref<HTMLDivElement>;
    control: ReactNode;
    controlHeight?: number;
    controlSingleHeight?: number;
    controlVerticalCenter?: boolean;
    controlContainerStyle?: PCommonProps['style'];
    width?: number | string;
    fullWidth?: boolean;
    required?: boolean;
    labelIcon?: string;
    label?: ReactNode;
    focused?: boolean;
    helperText?: ReactNode;
    helperTextProps?: FormHelperTextProps;
    errorHelperText?: ReactNode;
    errorHelperTextProps?: FormHelperTextProps;
    error?: boolean;
    hideLabel?: boolean;
    hidden?: boolean;
    autoSize?: boolean;
}
