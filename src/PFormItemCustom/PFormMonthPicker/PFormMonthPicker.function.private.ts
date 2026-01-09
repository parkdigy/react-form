import {
  type PFormMonthPickerBaseValue,
  type PFormMonthPickerProps as Props,
  type PFormMonthPickerValue,
} from './PFormMonthPicker.types';
import dayjs, { Dayjs } from 'dayjs';

export const getFinalValue = (value: Props['value']): PFormMonthPickerValue => {
  return value || null;
};

export const valueToDate = (v: PFormMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`);

export const valueToYm = (v: PFormMonthPickerBaseValue) => v.year * 100 + v.month;

export const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
