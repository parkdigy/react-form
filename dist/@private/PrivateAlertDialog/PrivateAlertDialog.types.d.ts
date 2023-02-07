import { ReactNode } from 'react';
export interface PrivateAlertDialogProps {
    title?: ReactNode;
    content?: ReactNode;
    open?: boolean;
    onClose?: () => void;
}
export declare const PrivateAlertDialogDefaultProps: {};
