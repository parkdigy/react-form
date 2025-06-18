import { ReactNode } from 'react';
import { FormHelperTextProps } from '@mui/material';
import { PartialPick, PCommonSxProps, PCommonProps } from '../../@types';
import { PFormContextValue } from '../../PFormContext';
export interface PFormItemBaseProps extends PCommonSxProps, PartialPick<PFormContextValue, 'variant' | 'size' | 'color'> {
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
    error?: boolean;
    hideLabel?: boolean;
    hidden?: boolean;
    autoSize?: boolean;
}
