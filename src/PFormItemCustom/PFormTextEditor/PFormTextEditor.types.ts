import { PCommonSxProps, PFormValueItemCommands, PFormValueItemProps } from '../../@types';
import { IAllProps } from '@tinymce/tinymce-react';

export type PFormTextEditorValue = string;
export type PFormTextEditorCommands = PFormValueItemCommands<PFormTextEditorValue, false>;

export interface PFormTextEditorProps
  extends PCommonSxProps,
    Omit<PFormValueItemProps<PFormTextEditorValue, false>, 'fullWidth'>,
    Partial<Pick<IAllProps, 'apiKey' | 'toolbar'>> {
  required?: boolean;
  menubar?: boolean;
  height?: number;
  onImageUpload?: (
    blob: Blob,
    success: (url: string) => void,
    failure: (err: string) => void,
    progress?: (percent: number) => void
  ) => void;
  onOpenWindow?: () => void;
  onCloseWindow?: () => void;
}
