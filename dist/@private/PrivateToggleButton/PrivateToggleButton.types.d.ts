import React from 'react';
import { ButtonProps } from '@mui/material';
export interface PrivateToggleButtonProps extends Omit<ButtonProps, 'ref' | 'variant' | 'type' | 'sx'> {
    ref?: React.Ref<HTMLButtonElement>;
    selected?: boolean;
    activated?: boolean;
    outlined?: boolean;
}
