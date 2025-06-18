import { ReactNode } from 'react';
import { DesktopDatePickerProps } from '@mui/x-date-pickers';
import {
  PCommonSxProps,
  PFormDateType,
  PFormDateValueItemCommands,
  PFormTimeType,
  PFormValueItemBaseCommands,
  PFormValueItemProps,
} from '../../@types';
import { Dayjs } from 'dayjs';

export type PrivateDatePickerValue = Dayjs | null;

export interface PrivateDatePickerProps
  extends PCommonSxProps,
    Partial<
      Omit<
        DesktopDatePickerProps<Dayjs>,
        'children' | 'name' | 'className' | 'style' | 'sx' | 'value' | 'inputFormat' | 'views' | 'onChange'
      >
    >,
    PFormValueItemProps<PrivateDatePickerValue, false> {
  type: PFormDateType;
  time?: PFormTimeType;
  hours?: number[];
  minutes?: number[];
  seconds?: number[];
  minuteInterval?: number;
  secondInterval?: number;
  required?: boolean;
  labelShrink?: boolean;
  format?: string;
  formValueFormat?: string;
  icon?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  align?: 'left' | 'center' | 'right';
  enableKeyboardInput?: boolean;
  hidden?: boolean;
}

export interface PrivateDatePickerCommands
  extends PFormValueItemBaseCommands<PrivateDatePickerValue, false>,
    PFormDateValueItemCommands {}
