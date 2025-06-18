import { StaticDatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { PFormAvailableDate } from '../@types';
import { PFormDateType, PFormTimeType } from '../../@types';
export type PrivateStaticDatePickerUnit = 'date' | 'action_date' | 'hour' | 'minute' | 'second';
export interface PrivateStaticDatePickerProps extends Omit<StaticDatePickerProps<Dayjs>, 'displayStaticWrapperAs' | 'renderInput' | 'onChange'> {
    type: PFormDateType;
    time?: PFormTimeType;
    availableDate?: PFormAvailableDate;
    hours?: number[];
    minutes?: number[];
    seconds?: number[];
    minuteInterval?: number;
    secondInterval?: number;
    onChange(unit: PrivateStaticDatePickerUnit, newValue: Dayjs | null): void;
    onClose?(): void;
}
export interface PrivateStaticDatePickerCommands {
}
