import React from 'react';
import { Dayjs } from 'dayjs';
export type PFormDateRangePickerTooltipPickerDateValue = Dayjs | null;
export type PFormDateRangePickerTooltipPickerValue = [
    PFormDateRangePickerTooltipPickerDateValue,
    PFormDateRangePickerTooltipPickerDateValue
];
export type PFormDateRangePickerTooltipPickerSelectType = 'start' | 'end';
export interface PFormDateRangePickerTooltipPickerProps {
    ref?: React.Ref<PFormDateRangePickerTooltipPickerCommands>;
    selectType: PFormDateRangePickerTooltipPickerSelectType;
    value?: PFormDateRangePickerTooltipPickerValue;
    focusedDate?: PFormDateRangePickerTooltipPickerDateValue;
    month: Dayjs;
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    onValueChange?: (selectType: PFormDateRangePickerTooltipPickerSelectType, value: PFormDateRangePickerTooltipPickerDateValue) => void;
    onMouseEnterPickersDay?: (date: PFormDateRangePickerTooltipPickerDateValue) => void;
    onMonthChange?: (date: Dayjs) => void;
}
export interface PFormDateRangePickerTooltipPickerCommands {
    previousMonth: () => void;
    nextMonth: () => void;
    activeMonth: (month: Dayjs) => void;
}
