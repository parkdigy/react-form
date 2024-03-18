import { FormFileCommands, FormFileProps } from '../FormFile';
export interface FormImageFileImageSize {
    width: number;
    height: number;
}
export interface FormImageFileProps extends Omit<FormFileProps, 'preview'> {
    imageSize?: FormImageFileImageSize | FormImageFileImageSize[];
    preview?: boolean;
    previewMaxHeight?: number;
}
export declare const FormImageFileDefaultProps: Pick<FormImageFileProps, 'accept'>;
export type FormImageFileCommands = FormFileCommands;
