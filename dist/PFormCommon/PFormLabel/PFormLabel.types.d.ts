import React from 'react';
import { type InputLabelProps } from '@mui/material';
import { type PartialPick, type PartialOmit } from '../../@types';
import { type PFormProps } from '../../PForm';
export interface PFormLabelProps extends PartialOmit<InputLabelProps, 'ref' | 'size'>, PartialPick<PFormProps, 'size'> {
    ref?: React.Ref<HTMLLabelElement>;
    icon?: string;
    warning?: boolean;
}
