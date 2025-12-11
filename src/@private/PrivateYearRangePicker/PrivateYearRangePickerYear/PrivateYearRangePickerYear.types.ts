import { ButtonProps } from '@mui/material';

export interface PrivateYearRangePickerYearProps
  extends Pick<ButtonProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
  year: number;
  disabled?: boolean;
  isDefault?: boolean;
  selected?: boolean;
  selectedStart?: boolean;
  selectedEnd?: boolean;
  selectedTemp?: boolean;
}
