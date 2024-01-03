export type PrivateYearRangePickerSelectType = 'start' | 'end';

export type PrivateYearRangePickerBaseValue = number;

export type PrivateYearRangePickerDataValue = PrivateYearRangePickerBaseValue | null;

export type PrivateYearRangePickerValue = [PrivateYearRangePickerDataValue, PrivateYearRangePickerDataValue];

export interface PrivateYearRangePickerProps {
  selectType: PrivateYearRangePickerSelectType;
  value: PrivateYearRangePickerValue;
  minYear?: PrivateYearRangePickerBaseValue;
  maxYear?: PrivateYearRangePickerBaseValue;
  disablePast?: boolean;
  disableFuture?: boolean;
  hideHeader?: boolean;
  onChange(value: PrivateYearRangePickerValue, selectType: PrivateYearRangePickerSelectType): void;
}

export const PrivateYearRangePickerDefaultProps: Required<Pick<PrivateYearRangePickerProps, 'minYear' | 'maxYear'>> = {
  minYear: 2000,
  maxYear: 2100,
};
