import { ButtonProps } from '@mui/material';
import { PartialPick } from '../../@types';
import { FormContextValue } from '../../FormContext';

export interface FormButtonProps
  extends PartialPick<FormContextValue, 'color' | 'size'>,
    Omit<ButtonProps, 'color' | 'size' | 'startIcon' | 'endIcon'> {
  type?: 'button' | 'submit';
  icon?: string;
  startIcon?: string;
  endIcon?: string;
}

export const FormButtonDefaultProps: FormButtonProps = {
  type: 'button',
};
