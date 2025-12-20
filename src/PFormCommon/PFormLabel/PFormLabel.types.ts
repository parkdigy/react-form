import React from 'react';
import { InputLabelProps } from '@mui/material';
import { PartialPick, PartialOmit } from '../../@types';
import { PFormProps } from '../../PForm';

export interface PFormLabelProps extends PartialOmit<InputLabelProps, 'ref' | 'size'>, PartialPick<PFormProps, 'size'> {
  ref?: React.Ref<HTMLLabelElement>;
  icon?: string;
  warning?: boolean;
}
