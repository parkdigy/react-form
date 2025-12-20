import React, { ReactNode } from 'react';
import { Dayjs } from 'dayjs';
import { TextFieldProps } from '@mui/material';
import { DateValidationError } from '@mui/x-date-pickers';
import { PCommonSxProps, PFormValueItemProps } from '../../@types';
import { DesktopDatePickerProps } from '@mui/x-date-pickers';
export type PrivateInputDatePickerValue = Dayjs | null;

export interface PrivateInputDatePickerProps
  extends
    PCommonSxProps,
    Pick<
      DesktopDatePickerProps,
      'name' | 'disablePast' | 'disableFuture' | 'shouldDisableYear' | 'shouldDisableMonth' | 'shouldDisableDate'
    >,
    Pick<
      PFormValueItemProps<PrivateInputDatePickerValue>,
      'variant' | 'size' | 'color' | 'focused' | 'fullWidth' | 'readOnly' | 'label' | 'labelIcon' | 'error'
    > {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  value: PrivateInputDatePickerValue;
  disabled?: boolean;
  required?: boolean;
  labelShrink?: boolean;
  inputRef?: React.MutableRefObject<HTMLInputElement | undefined>;
  format: string;
  icon?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  align?: 'left' | 'center' | 'right';
  enableKeyboardInput?: boolean;
  onChange: (newValue: PrivateInputDatePickerValue) => void;
  onFocus: TextFieldProps['onFocus'];
  onBlur?: TextFieldProps['onBlur'];
  onError?: (reason: DateValidationError, value: PrivateInputDatePickerValue) => void;
}
