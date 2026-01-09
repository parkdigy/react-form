import React, { type ReactNode } from 'react';
import { type FormControlLabelProps } from '@mui/material';
import { type PFormValueItemProps, type PFormValueItemBaseCommands } from '../../@types';
import { type PCommonSxProps } from '../../@types';

export interface PFormSwitchProps extends PCommonSxProps, Omit<PFormValueItemProps<boolean, false>, 'fullWidth'> {
  ref?: React.Ref<PFormSwitchCommands>;
  switchLabel?: ReactNode;
  switchLabelProps?: Omit<FormControlLabelProps, 'children' | 'control' | 'label' | 'required' | 'disabled'>;
  onValue?: (value: boolean) => boolean;
}

export interface PFormSwitchCommands extends PFormValueItemBaseCommands<boolean, false> {}
