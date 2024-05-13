import { FormYearPickerBaseValue, FormYearPickerValue } from './FormYearPicker.types';
import dayjs, { Dayjs } from 'dayjs';

export const valueToDate = (v: FormYearPickerBaseValue) => dayjs(`${v}-01-01`);

export const dateToValue = (v: Dayjs) => v.year();

export const getFinalValue = (newValue: FormYearPickerValue | undefined): FormYearPickerValue => {
  return newValue || null;
};
