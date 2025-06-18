import { InputLabelProps } from '@mui/material';
import { PartialPick, PartialOmit } from '../../@types';
import { PFormProps } from '../../PForm';
export interface PFormLabelProps extends PartialOmit<InputLabelProps, 'size'>, PartialPick<PFormProps, 'size'> {
    icon?: string;
    warning?: boolean;
}
