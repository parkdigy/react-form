import {
  PFormDateRangePickerTooltipPickerDateValue,
  PFormDateRangePickerTooltipPickerSelectType,
  PFormDateRangePickerTooltipPickerValue,
} from './PFormDateRangePickerTooltipPicker';
import { Dayjs } from 'dayjs';

export type PFormDateRangePickerTooltipPickerContainerMonths = [Dayjs, Dayjs, Dayjs];

export type PFormDateRangePickerTooltipPickerContainerCalendarCount = 2 | 3;

export interface PFormDateRangePickerTooltipPickerContainerProps {
  calendarCount?: PFormDateRangePickerTooltipPickerContainerCalendarCount;
  selectType: PFormDateRangePickerTooltipPickerSelectType;
  value: PFormDateRangePickerTooltipPickerValue;
  months: PFormDateRangePickerTooltipPickerContainerMonths;
  disablePast?: boolean;
  disableFuture?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  onGetActionButtons?: () => { label: string; start: Dayjs; end: Dayjs }[];
  onChange: (newValue: PFormDateRangePickerTooltipPickerValue) => void;
  onValueChange: (
    selectType: PFormDateRangePickerTooltipPickerSelectType,
    newValue: PFormDateRangePickerTooltipPickerDateValue
  ) => void;
  onMonthsChange: (months: PFormDateRangePickerTooltipPickerContainerMonths) => void;
}

export interface PFormDateRangePickerTooltipPickerContainerCommands {
  previousMonth: () => void;
  nextMonth: () => void;
  activeMonth: (month: Dayjs) => void;
}
