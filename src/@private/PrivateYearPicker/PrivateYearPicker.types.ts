export type PrivateYearPickerBaseValue = number;

export type PrivateYearPickerValue = PrivateYearPickerBaseValue | null;

export interface PrivateYearPickerProps {
  value: PrivateYearPickerValue;
  minYear?: PrivateYearPickerBaseValue;
  maxYear?: PrivateYearPickerBaseValue;
  disablePast?: boolean;
  disableFuture?: boolean;
  hideHeader?: boolean;
  selectFromYear?: PrivateYearPickerValue;
  selectToYear?: PrivateYearPickerValue;
  onChange(value: PrivateYearPickerBaseValue, isClick: boolean): void;
}

export const PrivateYearPickerDefaultProps: Required<Pick<PrivateYearPickerProps, 'minYear' | 'maxYear'>> = {
  minYear: 2000,
  maxYear: 2100,
};
