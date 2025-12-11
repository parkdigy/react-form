import { StaticDateTimePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { PFormAvailableDate } from '../@types';
import { PFormDateType, PFormTimeType } from '../../@types';

export type PrivateStaticDateTimePickerUnit = 'date' | 'action_date' | 'hour' | 'minute' | 'second';

export interface PrivateStaticDateTimePickerProps
  extends Omit<StaticDateTimePickerProps<Dayjs>, 'displayStaticWrapperAs' | 'renderInput' | 'onChange'> {
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
