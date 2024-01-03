import { ButtonProps } from '@mui/material';

export interface PrivateMonthPickerMonthProps extends Pick<ButtonProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
  month: number;
  disabled?: boolean;
  selected?: boolean;
  selectedStart?: boolean;
  selectedEnd?: boolean;
  selectedTemp?: boolean;
}

export const PrivateMonthPickerMonthDefaultProps = {};
