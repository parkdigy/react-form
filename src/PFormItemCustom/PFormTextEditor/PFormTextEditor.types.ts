import React from 'react';
import { type PCommonSxProps, type PFormValueItemCommands, type PFormValueItemProps } from '../../@types';
import { type IAllProps } from '@tinymce/tinymce-react';

export type PFormTextEditorValue = string;
export type PFormTextEditorCommands = PFormValueItemCommands<PFormTextEditorValue, false>;

export interface PFormTextEditorProps
  extends
    PCommonSxProps,
    Omit<PFormValueItemProps<PFormTextEditorValue, false>, 'fullWidth'>,
    Partial<Pick<IAllProps, 'apiKey' | 'toolbar'>> {
  ref?: React.Ref<PFormTextEditorCommands>;
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
