import { StaticDateTimePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { FormAvailableDate } from '../@types';
import { FormDateType, FormTimeType } from '../../@types';

export type PrivateStaticDateTimePickerUnit = 'date' | 'action_date' | 'hour' | 'minute' | 'second';

export interface PrivateStaticDateTimePickerProps
  extends Omit<StaticDateTimePickerProps<Dayjs>, 'displayStaticWrapperAs' | 'renderInput' | 'onChange'> {
  type: FormDateType;
  time?: FormTimeType;
  availableDate?: FormAvailableDate;
  hours?: number[];
  minutes?: number[];
  seconds?: number[];
  minuteInterval?: number;
  secondInterval?: number;
  onChange(unit: PrivateStaticDateTimePickerUnit, newValue: Dayjs | null): void;
  onClose?(): void;
}

export const PrivateStaticDateTimePickerDefaultProps = {};

export type TimeSelectScrollToDateUnit = 'hour' | 'minute' | 'second';

export interface PrivateStaticDateTimePickerCommands {
  timeSelectScrollToDate(date: Dayjs, times?: TimeSelectScrollToDateUnit[]): void;
}
