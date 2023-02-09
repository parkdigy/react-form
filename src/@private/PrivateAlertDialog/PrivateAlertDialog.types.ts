import { ReactNode } from 'react';

export interface PrivateAlertDialogProps {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  title?: ReactNode;
  content?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export const PrivateAlertDialogDefaultProps: Pick<PrivateAlertDialogProps, 'color'> = {
  color: 'primary',
};
