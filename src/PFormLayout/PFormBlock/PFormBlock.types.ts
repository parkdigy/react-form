import React, { type ReactNode } from 'react';
import { type PartialPick, type PCommonSxProps } from '../../@types';
import { type PFormDividerProps } from '../PFormDivider';
import { type PFormContextValue } from '../../PFormContext';

export interface PFormBlockProps
  extends
    PCommonSxProps,
    PartialPick<PFormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>,
    PartialPick<PFormDividerProps, 'icon' | 'label' | 'line' | 'lineVerticalMargin' | 'hidden'> {
  ref?: React.Ref<HTMLDivElement>;
  collapse?: boolean;
  collapseIn?: boolean;
  error?: boolean;
  warning?: boolean;
  endAdornment?: ReactNode;
}
