import { InputLabelProps } from '@mui/material';
import { PartialPick, PartialOmit } from '../../@types';
import { FormProps } from '../../Form';

export interface FormLabelProps extends PartialOmit<InputLabelProps, 'size'>, PartialPick<FormProps, 'size'> {
  icon?: string;
}

export const FormLabelDefaultProps = {};
