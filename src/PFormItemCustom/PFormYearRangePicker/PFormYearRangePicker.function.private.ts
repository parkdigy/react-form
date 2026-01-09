import { type PFormYearRangePickerBaseValue, type PFormYearRangePickerValue } from './PFormYearRangePicker.types';
import dayjs, { Dayjs } from 'dayjs';

const DEFAULT_VALUE: PFormYearRangePickerValue = [null, null];

export const valueToDate = (v: PFormYearRangePickerBaseValue) => dayjs(`${v}-01-01`);

export const dateToValue = (v: Dayjs) => v.year();

export const getFinalValue = (value: PFormYearRangePickerValue | undefined): PFormYearRangePickerValue => {
  return value || DEFAULT_VALUE;
};
