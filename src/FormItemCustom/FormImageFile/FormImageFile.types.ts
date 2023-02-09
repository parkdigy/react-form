import { FormFileCommands, FormFileDefaultProps, FormFileProps } from '../FormFile';

export interface FormImageFileImageSize {
  width: number;
  height: number;
}

export interface FormImageFileProps extends Omit<FormFileProps, 'preview'> {
  imageSize?: FormImageFileImageSize | FormImageFileImageSize[];
  preview?: boolean;
  previewMaxHeight?: number;
}

export const FormImageFileDefaultProps: Pick<FormImageFileProps, 'accept'> = {
  ...FormFileDefaultProps,
  accept: '.jpg,.jpeg,.png',
};

export type FormImageFileCommands = FormFileCommands;
