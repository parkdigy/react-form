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
  onFile?(file: File): Promise<string>;
  onLink?(url: string): Promise<string>;
}

export const FormFileDefaultProps = {};

export type FormFileCommands = FormValueItemCommands;
