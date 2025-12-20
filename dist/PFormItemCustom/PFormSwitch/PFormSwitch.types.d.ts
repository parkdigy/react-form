import React, { ReactNode } from 'react';
import { FormControlLabelProps } from '@mui/material';
import { PFormValueItemProps, PFormValueItemBaseCommands } from '../../@types';
import { PCommonSxProps } from '../../@types';
export interface PFormSwitchProps extends PCommonSxProps, Omit<PFormValueItemProps<boolean, false>, 'fullWidth'> {
    ref?: React.Ref<PFormSwitchCommands>;
    switchLabel?: ReactNode;
    switchLabelProps?: Omit<FormControlLabelProps, 'children' | 'control' | 'label' | 'required' | 'disabled'>;
    onValue?: (value: boolean) => boolean;
}
export interface PFormSwitchCommands extends PFormValueItemBaseCommands<boolean, false> {
}
