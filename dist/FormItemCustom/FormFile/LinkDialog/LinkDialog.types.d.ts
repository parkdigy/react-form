export interface LinkDialogProps {
    open?: boolean;
    onConfirm?: (url: string) => void;
    onCancel?: () => void;
    onClose?: () => void;
}
export declare const LinkDialogDefaultProps: {};
