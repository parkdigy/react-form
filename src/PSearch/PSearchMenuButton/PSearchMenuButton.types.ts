import { PFormButtonProps } from '../../PFormCommon';
import { ReactNode } from 'react';

export interface PSearchMenuButtonProps
  extends Omit<PFormButtonProps, 'fullWidth' | 'endIcon' | 'endIconProps' | 'onClick'> {
  menuList: ReactNode;
  placement?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';
}
