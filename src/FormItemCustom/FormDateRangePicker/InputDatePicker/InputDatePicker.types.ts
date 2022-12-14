import React, { CSSProperties, ReactNode } from 'react';
import { Dayjs } from 'dayjs';
import { TextFieldProps } from '@mui/material';
import { FormValueItemProps } from '../../../@types';
import { DateValidationError } from '@mui/x-date-pickers/internals';

export type InputDatePickerValue = Dayjs | null;

export interface InputDatePickerProps
  extends Pick<
    FormValueItemProps,
    'variant' | 'size' | 'color' | 'focused' | 'fullWidth' | 'readOnly' | 'label' | 'labelIcon' | 'error'
  > {
  className?: string;
  style?: CSSProperties;
  value: InputDatePickerValue;
  disabled?: boolean;
  required?: boolean;
  labelShrink?: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>;
  format: string;
  icon?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disablePast?: boolean;
  disableFuture?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  align?: 'left' | 'center' | 'right';
  readOnlyInput?: boolean;
  onChange(newValue: InputDatePickerValue): void;
  onFocus: TextFieldProps['onFocus'];
  onBlur?: TextFieldProps['onBlur'];
  onError?(reason: DateValidationError, value: InputDatePickerValue): void;
}

export const InputDatePickerDefaultProps: Pick<InputDatePickerProps, 'align'> = {
  align: 'center',
};
