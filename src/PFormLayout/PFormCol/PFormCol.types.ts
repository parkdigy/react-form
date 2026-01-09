import React, { type ReactNode } from 'react';
import { type PartialPick, type PCommonSxProps } from '../../@types';
import { type PFormLabelProps } from '../../PFormCommon';
import { type PFormContextValue } from '../../PFormContext';

export interface PFormColProps
  extends
    PCommonSxProps,
    PartialPick<PFormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>,
    PartialPick<PFormLabelProps, 'icon' | 'error' | 'warning'> {
  ref?: React.Ref<HTMLDivElement>;
  xs?: number;
  label?: ReactNode;
  hidden?: boolean;
  helperText?: ReactNode;
  helperTextShift?: boolean;
  gap?: number;
  fullHeight?: boolean;
}
