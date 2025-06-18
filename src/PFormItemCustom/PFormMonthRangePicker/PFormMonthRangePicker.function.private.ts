import { PFormMonthRangePickerValue } from './PFormMonthRangePicker.types';
import { PFormMonthPickerBaseValue } from '../PFormMonthPicker';
import dayjs, { Dayjs } from 'dayjs';

const DEFAULT_VALUE: PFormMonthRangePickerValue = [null, null];

export const getFinalValue = (value: PFormMonthRangePickerValue | undefined): PFormMonthRangePickerValue => {
  return value || DEFAULT_VALUE;
};

export const valueToDate = (v: PFormMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`);

export const valueToYm = (v: PFormMonthPickerBaseValue) => v.year * 100 + v.month;

export const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
