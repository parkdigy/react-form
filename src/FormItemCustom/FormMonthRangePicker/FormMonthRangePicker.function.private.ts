import { FormMonthRangePickerValue } from './FormMonthRangePicker.types';
import { FormMonthPickerBaseValue } from '../FormMonthPicker';
import dayjs, { Dayjs } from 'dayjs';

const DEFAULT_VALUE: FormMonthRangePickerValue = [null, null];

export const getFinalValue = (value: FormMonthRangePickerValue | undefined): FormMonthRangePickerValue => {
  return value || DEFAULT_VALUE;
};

export const valueToDate = (v: FormMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`);

export const valueToYm = (v: FormMonthPickerBaseValue) => v.year * 100 + v.month;

export const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
