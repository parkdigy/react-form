import { PCommonSxProps, PFormValueItemCommands, PFormValueItemProps } from '../../@types';
import { ReactNode } from 'react';
export type PFormFileValue = string;
export interface PFormFileProps extends PCommonSxProps, PFormValueItemProps<PFormFileValue, false> {
    required?: boolean;
    accept?: string;
    hideUrl?: boolean;
    tabIndex?: number;
    uploadLabel?: string;
    uploadTabIndex?: number;
    hideUpload?: boolean;
    hideUploadLabel?: boolean;
    linkLabel?: string;
    linkTabIndex?: number;
    hideLink?: boolean;
    hideLinkLabel?: boolean;
    removeLabel?: string;
    removeTabIndex?: number;
    hideRemove?: boolean;
    hideRemoveLabel?: boolean;
    labelShrink?: boolean;
    maxFileSize?: number;
    preview?: ReactNode;
    onFile?(file: File): Promise<string>;
    onLink?(url: string): Promise<string>;
}
export type PFormFileCommands = PFormValueItemCommands<PFormFileValue, false>;
