import { CommonSxProps, FormValueItemCommands, FormValueItemProps } from '../../@types';
export interface FormTextEditorProps extends CommonSxProps, Omit<FormValueItemProps, 'fullWidth'> {
    required?: boolean;
    menubar?: boolean;
    height?: number;
    onImageUpload?(blob: Blob, success: (url: string) => void, failure: (err: string) => void, progress?: (percent: number) => void): void;
}
export declare const FormTextEditorDefaultProps: Pick<FormTextEditorProps, 'menubar' | 'height'>;
export declare type FormTextEditorCommands = FormValueItemCommands;
