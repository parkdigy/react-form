import { FormButtonProps } from '../../FormCommon';
import { ReactNode } from 'react';

export interface SearchMenuButtonProps extends Omit<FormButtonProps, 'fullWidth' | 'endIcon' | 'onClick'> {
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

export const SearchMenuButtonDefaultProps = {};
