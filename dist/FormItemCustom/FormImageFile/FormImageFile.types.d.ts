import { FormFileCommands, FormFileProps } from '../FormFile';
export interface FormImageFileMaxImageSize {
    width: number;
    height: number;
}
export interface FormImageFileProps extends Omit<FormFileProps, 'preview'> {
    maxImageSize?: FormImageFileMaxImageSize | FormImageFileMaxImageSize[];
    preview?: boolean;
    previewMaxHeight?: number;
}
export declare const FormImageFileDefaultProps: Pick<FormImageFileProps, 'accept'>;
export declare type FormImageFileCommands = FormFileCommands;
