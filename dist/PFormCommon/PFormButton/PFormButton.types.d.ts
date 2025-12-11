import { PartialPick } from '../../@types';
import { PFormContextValue } from '../../PFormContext';
import { PButtonProps } from '@pdg/react-component';
export interface PFormButtonProps extends PartialPick<PFormContextValue, 'color' | 'size'>, Omit<PButtonProps, 'color' | 'size'> {
    type?: 'button' | 'submit';
}
