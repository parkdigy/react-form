import React from 'react';
import { PartialPick } from '../../@types';
import { PFormContextValue } from '../../PFormContext';
import { PButtonProps } from '@pdg/react-component';

export interface PFormButtonProps
  extends PartialPick<PFormContextValue, 'color' | 'size'>, Omit<PButtonProps, 'color' | 'size'> {
  ref?: React.Ref<HTMLButtonElement>;
  type?: 'button' | 'submit';
}
