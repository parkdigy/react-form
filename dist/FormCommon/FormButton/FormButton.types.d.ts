import { ButtonProps } from '@mui/material';
import { PartialPick } from '../../@types';
import { FormContextValue } from '../../FormContext';
import { PdgIconProps } from '@pdg/react-component';
export interface FormButtonProps extends PartialPick<FormContextValue, 'color' | 'size'>, Omit<ButtonProps, 'color' | 'size' | 'startIcon' | 'endIcon'> {
    type?: 'button' | 'submit';
    icon?: PdgIconProps['children'];
    startIcon?: PdgIconProps['children'];
    endIcon?: PdgIconProps['children'];
}
export declare const FormButtonDefaultProps: FormButtonProps;
