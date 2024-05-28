import { ReactNode } from 'react';
import { FormHelperTextProps } from '@mui/material';
import { PartialPick, CommonSxProps, CommonProps } from '../../@types';
import { FormContextValue } from '../../FormContext';
export interface FormItemBaseProps extends CommonSxProps, PartialPick<FormContextValue, 'variant' | 'size' | 'color'> {
    control: ReactNode;
    controlHeight?: number;
    controlSingleHeight?: number;
    controlVerticalCenter?: boolean;
    controlContainerStyle?: CommonProps['style'];
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
