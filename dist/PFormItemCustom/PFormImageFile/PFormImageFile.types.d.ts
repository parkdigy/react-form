import { PFormFileCommands, PFormFileProps } from '../PFormFile';
export interface PFormImageFileImageSize {
    width: number;
    height: number;
}
export interface PFormImageFileProps extends Omit<PFormFileProps, 'preview'> {
    imageSize?: PFormImageFileImageSize | PFormImageFileImageSize[];
    preview?: boolean;
    previewMaxHeight?: number;
}
export type PFormImageFileCommands = PFormFileCommands;
