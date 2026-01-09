import { type ReactNode } from 'react';

export interface PrivateAlertDialogProps {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  title?: ReactNode;
  content?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}
