import { CommonSxProps, FormValueItemCommands, FormValueItemProps } from '../../@types';
import { ReactNode } from 'react';
export type FormFileValue = string;
export interface FormFileProps extends CommonSxProps, FormValueItemProps<FormFileValue, false> {
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
    onFile?(file: File): Promise<string>;
    onLink?(url: string): Promise<string>;
}
export declare const FormFileDefaultProps: Pick<FormFileProps, 'value'>;
export type FormFileCommands = FormValueItemCommands<FormFileValue, false>;
