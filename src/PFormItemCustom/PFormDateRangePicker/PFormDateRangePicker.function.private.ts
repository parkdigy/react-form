import { PFormDateRangePickerValue } from './PFormDateRangePicker.types';

const DEFAULT_VALUE: PFormDateRangePickerValue = [null, null];

export const getFinalValue = (value: PFormDateRangePickerValue | undefined): PFormDateRangePickerValue => {
  return value || DEFAULT_VALUE;
};
