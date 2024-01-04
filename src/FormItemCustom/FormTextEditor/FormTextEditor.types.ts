import { CommonSxProps, FormValueItemCommands, FormValueItemProps } from '../../@types';
import { IAllProps } from '@tinymce/tinymce-react';

export type FormTextEditorValue = string;
export type FormTextEditorCommands = FormValueItemCommands<FormTextEditorValue, false>;

export interface FormTextEditorProps
  extends CommonSxProps,
    Omit<FormValueItemProps<FormTextEditorValue, false>, 'fullWidth'>,
    Partial<Pick<IAllProps, 'apiKey' | 'toolbar'>> {
  required?: boolean;
  menubar?: boolean;
  height?: number;
  onImageUpload?(
    blob: Blob,
    success: (url: string) => void,
    failure: (err: string) => void,
    progress?: (percent: number) => void
  ): void;
}

export const FormTextEditorDefaultProps: Pick<FormTextEditorProps, 'value' | 'menubar' | 'height'> = {
  menubar: true,
  height: 500,
  value: '',
};
