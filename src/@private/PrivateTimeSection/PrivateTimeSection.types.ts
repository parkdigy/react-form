import React from 'react';
import { PrivateTimeSelectCommands } from '../PrivateTimeSelect';
import { Dayjs } from 'dayjs';
import { FormTimeType } from '../../@types';
import { PrivateStaticDateTimePickerUnit } from '../PrivateStaticDateTimePicker';
import { FormAvailableDate } from '../@types';

export interface PrivateTimeSectionProps {
  time: FormTimeType;
  width: number;
  cols: 1 | 2 | 3;
  availableDate: FormAvailableDate;
  hourSelectRef: React.RefObject<PrivateTimeSelectCommands>;
  minuteSelectRef: React.RefObject<PrivateTimeSelectCommands>;
  secondSelectRef: React.RefObject<PrivateTimeSelectCommands>;
  hours?: number[];
  minutes?: number[];
  seconds?: number[];
  minuteInterval?: number;
  secondInterval?: number;
  value?: Dayjs | null;
  onChange(unit: PrivateStaticDateTimePickerUnit, newValue: Dayjs | null): void;
  onClose?(): void;
}
