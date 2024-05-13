import { FormYearRangePickerBaseValue, FormYearRangePickerValue } from './FormYearRangePicker.types';
import dayjs, { Dayjs } from 'dayjs';

const DEFAULT_VALUE: FormYearRangePickerValue = [null, null];

export const valueToDate = (v: FormYearRangePickerBaseValue) => dayjs(`${v}-01-01`);

export const dateToValue = (v: Dayjs) => v.year();

export const getFinalValue = (value: FormYearRangePickerValue | undefined): FormYearRangePickerValue => {
  return value || DEFAULT_VALUE;
};
