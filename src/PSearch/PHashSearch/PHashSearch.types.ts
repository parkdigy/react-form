import React from 'react';
import { PSearchCommands, PSearchProps } from '../PSearch';

export interface PHashSearchCommands extends PSearchCommands {}

export interface PHashSearchProps extends Omit<PSearchProps, 'autoSubmit'> {
  ref?: React.Ref<PHashSearchCommands>;
  noAutoSubmit?: boolean;
  onRequestHashChange: (hash: string) => void;
}
