import { ReactNode } from 'react';
import { PartialPick, PCommonSxProps } from '../../@types';
import { PFormLabelProps } from '../../PFormCommon';
import { PFormContextValue } from '../../PFormContext';

export interface PFormColProps
  extends PCommonSxProps,
    PartialPick<PFormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>,
    PartialPick<PFormLabelProps, 'icon' | 'error' | 'warning'> {
  xs?: number;
  label?: ReactNode;
  hidden?: boolean;
  helperText?: ReactNode;
  helperTextShift?: boolean;
  gap?: number;
  fullHeight?: boolean;
}
