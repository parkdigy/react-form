import React from 'react';
import { type ButtonProps } from '@mui/material';

export interface PrivateYearRangePickerYearProps extends Pick<
  ButtonProps,
  'onClick' | 'onMouseEnter' | 'onMouseLeave'
> {
  ref?: React.Ref<HTMLDivElement>;
  year: number;
  disabled?: boolean;
  isDefault?: boolean;
  selected?: boolean;
  selectedStart?: boolean;
  selectedEnd?: boolean;
  selectedTemp?: boolean;
}
