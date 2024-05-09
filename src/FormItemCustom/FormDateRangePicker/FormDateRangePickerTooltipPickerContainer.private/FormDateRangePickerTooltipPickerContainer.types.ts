import {
  FormDateRangePickerTooltipPickerDateValue,
  FormDateRangePickerTooltipPickerSelectType,
  FormDateRangePickerTooltipPickerValue,
} from './FormDateRangePickerTooltipPicker';
import { Dayjs } from 'dayjs';

export type FormDateRangePickerTooltipPickerContainerMonths = [Dayjs, Dayjs, Dayjs];

export type FormDateRangePickerTooltipPickerContainerCalendarCount = 2 | 3;

export interface FormDateRangePickerTooltipPickerContainerProps {
  calendarCount?: FormDateRangePickerTooltipPickerContainerCalendarCount;
  selectType: FormDateRangePickerTooltipPickerSelectType;
  value: FormDateRangePickerTooltipPickerValue;
  months: FormDateRangePickerTooltipPickerContainerMonths;
  disablePast?: boolean;
  disableFuture?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  onGetActionButtons?(): { label: string; start: Dayjs; end: Dayjs }[];
  onChange(newValue: FormDateRangePickerTooltipPickerValue): void;
  onValueChange(
    selectType: FormDateRangePickerTooltipPickerSelectType,
    newValue: FormDateRangePickerTooltipPickerDateValue
  ): void;
  onMonthsChange(months: FormDateRangePickerTooltipPickerContainerMonths): void;
}

export interface FormDateRangePickerTooltipPickerContainerCommands {
  previousMonth(): void;
  nextMonth(): void;
  activeMonth(month: Dayjs): void;
}
