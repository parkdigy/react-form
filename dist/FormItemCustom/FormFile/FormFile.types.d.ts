import { CommonSxProps, FormValueItemCommands, FormValueItemProps } from '../../@types';
import { ReactNode } from 'react';
export interface FormFileProps extends CommonSxProps, Omit<FormValueItemProps, 'readOnly'> {
    required?: boolean;
    accept?: string;
    hideUrl?: boolean;
    hideLink?: boolean;
    labelShrink?: boolean;
    maxFileSize?: number;
    preview?: ReactNode;
    hidden?: boolean;
    onFile?(file: File): Promise<string>;
    onLink?(url: string): Promise<string>;
}
export declare const FormFileDefaultProps: {};
export declare type FormFileCommands = FormValueItemCommands;
