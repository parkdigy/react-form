import { FormMonthPickerBaseValue, FormMonthPickerProps as Props, FormMonthPickerValue } from './FormMonthPicker.types';
import dayjs, { Dayjs } from 'dayjs';

export const getFinalValue = (value: Props['value']): FormMonthPickerValue => {
  return value || null;
};

export const valueToDate = (v: FormMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`);

export const valueToYm = (v: FormMonthPickerBaseValue) => v.year * 100 + v.month;

export const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
