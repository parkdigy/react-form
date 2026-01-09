import React from 'react';
import { type StaticDateTimePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { type PFormAvailableDate } from '../@types';
import { type PFormDateType, type PFormTimeType } from '../../@types';

export type PrivateStaticDateTimePickerUnit = 'date' | 'action_date' | 'hour' | 'minute' | 'second';

export interface PrivateStaticDateTimePickerProps extends Omit<
  StaticDateTimePickerProps,
  'displayStaticWrapperAs' | 'renderInput' | 'onChange'
> {
  ref?: React.Ref<PrivateStaticDateTimePickerCommands>;
  type: PFormDateType;
  time?: PFormTimeType;
  availableDate?: PFormAvailableDate;
  hours?: number[];
  minutes?: number[];
  seconds?: number[];
  minuteInterval?: number;
  secondInterval?: number;
  onChange: (unit: PrivateStaticDateTimePickerUnit, newValue: Dayjs | null) => void;
  onClose?: () => void;
}

export type TimeSelectScrollToDateUnit = 'hour' | 'minute' | 'second';

export interface PrivateStaticDateTimePickerCommands {
  timeSelectScrollToDate: (date: Dayjs, times?: TimeSelectScrollToDateUnit[]) => void;
}
