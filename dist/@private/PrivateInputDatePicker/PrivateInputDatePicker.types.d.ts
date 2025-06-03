import React, { ReactNode } from 'react';
import { Dayjs } from 'dayjs';
import { TextFieldProps } from '@mui/material';
import { DateValidationError } from '@mui/x-date-pickers';
import { CommonSxProps, FormValueItemProps } from '../../@types';
import { DesktopDatePickerProps } from '@mui/x-date-pickers';
export type PrivateInputDatePickerValue = Dayjs | null;
export interface PrivateInputDatePickerProps extends CommonSxProps, Pick<DesktopDatePickerProps<Dayjs>, 'name' | 'disablePast' | 'disableFuture' | 'shouldDisableYear' | 'shouldDisableMonth' | 'shouldDisableDate'>, Pick<FormValueItemProps<PrivateInputDatePickerValue>, 'variant' | 'size' | 'color' | 'focused' | 'fullWidth' | 'readOnly' | 'label' | 'labelIcon' | 'error'> {
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
    onChange(newValue: PrivateInputDatePickerValue): void;
    onFocus: TextFieldProps['onFocus'];
    onBlur?: TextFieldProps['onBlur'];
    onError?(reason: DateValidationError, value: PrivateInputDatePickerValue): void;
}
