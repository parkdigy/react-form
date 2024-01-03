import { ButtonProps } from '@mui/material';

export interface PrivateYearRangePickerYearProps
  extends Pick<ButtonProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
  year: number;
  disabled?: boolean;
  selected?: boolean;
  selectedStart?: boolean;
  selectedEnd?: boolean;
  selectedTemp?: boolean;
}

export const PrivateYearRangePickerYearDefaultProps = {};
