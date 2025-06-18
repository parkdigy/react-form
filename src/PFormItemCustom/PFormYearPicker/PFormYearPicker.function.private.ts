import { PFormYearPickerBaseValue, PFormYearPickerValue } from './PFormYearPicker.types';
import dayjs, { Dayjs } from 'dayjs';

export const valueToDate = (v: PFormYearPickerBaseValue) => dayjs(`${v}-01-01`);

export const dateToValue = (v: Dayjs) => v.year();

export const getFinalValue = (newValue: PFormYearPickerValue | undefined): PFormYearPickerValue => {
  return newValue || null;
};
