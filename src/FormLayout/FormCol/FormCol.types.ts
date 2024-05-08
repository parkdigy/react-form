import { ReactNode } from 'react';
import { PartialPick, CommonSxProps } from '../../@types';
import { FormLabelProps } from '../../FormCommon';
import { FormContextValue } from '../../FormContext';

export interface FormColProps
  extends CommonSxProps,
    PartialPick<FormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>,
    PartialPick<FormLabelProps, 'icon' | 'error' | 'warning'> {
  xs?: number;
  label?: ReactNode;
  hidden?: boolean;
  helperText?: ReactNode;
  helperTextShift?: boolean;
  gap?: number;
}
