export type PrivateMonthPickerBaseValue = { year: number; month: number };

export type PrivateMonthPickerValue = PrivateMonthPickerBaseValue | null;

export interface PrivateMonthPickerProps {
  value: PrivateMonthPickerValue;
  minValue?: PrivateMonthPickerBaseValue;
  maxValue?: PrivateMonthPickerBaseValue;
  disablePast?: boolean;
  disableFuture?: boolean;
  selectFromValue?: PrivateMonthPickerValue;
  selectToValue?: PrivateMonthPickerValue;
  onChange: (value: PrivateMonthPickerBaseValue, isMonthSelect: boolean) => void;
}
