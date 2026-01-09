import React from 'react';
import { type PartialPick } from '../../@types';
import { type PFormContextValue } from '../../PFormContext';
import { type PButtonProps } from '@pdg/react-component';
export interface PFormButtonProps extends PartialPick<PFormContextValue, 'color' | 'size'>, Omit<PButtonProps, 'ref' | 'color' | 'size'> {
    ref?: React.Ref<HTMLButtonElement>;
    type?: 'button' | 'submit';
}
