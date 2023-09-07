import { CommonSxProps, FormValueItemCommands, FormValueItemProps } from '../../@types';
export type FormTextEditorValue = string;
export type FormTextEditorCommands = FormValueItemCommands<FormTextEditorValue, false>;
export interface FormTextEditorProps extends CommonSxProps, Omit<FormValueItemProps<FormTextEditorValue, false>, 'fullWidth'> {
    required?: boolean;
    menubar?: boolean;
    height?: number;
    hidden?: boolean;
    onImageUpload?(blob: Blob, success: (url: string) => void, failure: (err: string) => void, progress?: (percent: number) => void): void;
}
export declare const FormTextEditorDefaultProps: Pick<FormTextEditorProps, 'value' | 'menubar' | 'height'>;
