import { ButtonProps } from '@mui/material';

export interface PrivateToggleButtonProps extends Omit<ButtonProps, 'variant' | 'type' | 'sx'> {
  selected?: boolean;
  activated?: boolean;
  outlined?: boolean;
}
