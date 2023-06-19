import { CommonSxProps, FormValueItemCommands, FormValueItemProps } from '../../@types';

export interface FormTextEditorProps extends CommonSxProps, Omit<FormValueItemProps, 'fullWidth'> {
  required?: boolean;
  menubar?: boolean;
  height?: number;
  hidden?: boolean;
  onImageUpload?(
    blob: Blob,
    success: (url: string) => void,
    failure: (err: string) => void,
    progress?: (percent: number) => void
  ): void;
}

export const FormTextEditorDefaultProps: Pick<FormTextEditorProps, 'menubar' | 'height'> = {
  menubar: true,
  height: 500,
};

export type FormTextEditorCommands = FormValueItemCommands;
