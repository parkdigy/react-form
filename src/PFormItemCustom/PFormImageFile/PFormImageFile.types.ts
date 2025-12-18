import React from 'react';
import { PFormFileCommands, PFormFileProps } from '../PFormFile';

export interface PFormImageFileImageSize {
  width: number;
  height: number;
}

export interface PFormImageFileProps extends Omit<PFormFileProps, 'preview'> {
  ref?: React.Ref<PFormImageFileCommands>;
  imageSize?: PFormImageFileImageSize | PFormImageFileImageSize[];
  preview?: boolean;
  previewMaxHeight?: number;
}

export type PFormImageFileCommands = PFormFileCommands;
