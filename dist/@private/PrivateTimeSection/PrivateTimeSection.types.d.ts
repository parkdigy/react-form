import React from 'react';
import { PrivateTimeSelectCommands } from '../PrivateTimeSelect';
import { Dayjs } from 'dayjs';
import { PFormTimeType } from '../../@types';
import { PrivateStaticDateTimePickerUnit } from '../PrivateStaticDateTimePicker';
import { PFormAvailableDate } from '../@types';
export interface PrivateTimeSectionProps {
    time: PFormTimeType;
    width: number;
    cols: 1 | 2 | 3;
    availableDate: PFormAvailableDate;
    hourSelectRef: React.RefObject<PrivateTimeSelectCommands | null>;
    minuteSelectRef: React.RefObject<PrivateTimeSelectCommands | null>;
    secondSelectRef: React.RefObject<PrivateTimeSelectCommands | null>;
    hours?: number[];
    minutes?: number[];
    seconds?: number[];
    minuteInterval?: number;
    secondInterval?: number;
    value?: Dayjs | null;
    onChange: (unit: PrivateStaticDateTimePickerUnit, newValue: Dayjs | null) => void;
    onClose?: () => void;
}
