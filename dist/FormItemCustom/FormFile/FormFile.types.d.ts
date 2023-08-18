import { CommonSxProps, FormValueItemCommands, FormValueItemProps } from '../../@types';
import { ReactNode } from 'react';
export interface FormFileProps extends CommonSxProps, FormValueItemProps {
    required?: boolean;
    accept?: string;
    hideUrl?: boolean;
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
    hidden?: boolean;
    onFile?(file: File): Promise<string>;
    onLink?(url: string): Promise<string>;
}
export declare const FormFileDefaultProps: {};
export declare type FormFileCommands = FormValueItemCommands;
