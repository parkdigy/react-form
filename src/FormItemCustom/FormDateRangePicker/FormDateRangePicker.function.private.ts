import { FormDateRangePickerValue } from './FormDateRangePicker.types';

const DEFAULT_VALUE: FormDateRangePickerValue = [null, null];

export const getFinalValue = (value: FormDateRangePickerValue | undefined): FormDateRangePickerValue => {
  return value || DEFAULT_VALUE;
};
