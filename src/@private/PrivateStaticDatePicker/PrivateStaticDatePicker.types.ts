import React from 'react';
import { type StaticDatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { type PFormAvailableDate } from '../@types';
import { type PFormDateType, type PFormTimeType } from '../../@types';

export type PrivateStaticDatePickerUnit = 'date' | 'action_date' | 'hour' | 'minute' | 'second';

export interface PrivateStaticDatePickerCommands {}

export interface PrivateStaticDatePickerProps extends Omit<
  StaticDatePickerProps,
  'displayStaticWrapperAs' | 'renderInput' | 'onChange'
> {
  ref?: React.Ref<PrivateStaticDatePickerCommands>;
  type: PFormDateType;
  time?: PFormTimeType;
  availableDate?: PFormAvailableDate;
  hours?: number[];
  minutes?: number[];
  seconds?: number[];
  minuteInterval?: number;
  secondInterval?: number;
  onChange: (unit: PrivateStaticDatePickerUnit, newValue: Dayjs | null) => void;
  onClose?: () => void;
}
