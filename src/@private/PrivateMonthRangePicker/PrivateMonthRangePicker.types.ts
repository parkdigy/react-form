export type PrivateMonthRangePickerSelectType = 'start' | 'end';

export type PrivateMonthRangePickerBaseValue = { year: number; month: number };

export type PrivateMonthRangePickerDataValue = PrivateMonthRangePickerBaseValue | null;

export type PrivateMonthRangePickerValue = [PrivateMonthRangePickerDataValue, PrivateMonthRangePickerDataValue];

export interface PrivateMonthRangePickerProps {
  value: PrivateMonthRangePickerValue;
  minValue?: PrivateMonthRangePickerBaseValue;
  maxValue?: PrivateMonthRangePickerBaseValue;
  disablePast?: boolean;
  disableFuture?: boolean;
  onChange(
    value: PrivateMonthRangePickerValue,
    selectType: PrivateMonthRangePickerSelectType,
    isMonthSelect: boolean
  ): void;
}

export const PrivateMonthRangePickerDefaultProps: Required<
  Pick<PrivateMonthRangePickerProps, 'minValue' | 'maxValue'>
> = {
  minValue: {
    year: 2020,
    month: 1,
  },
  maxValue: {
    year: 2050,
    month: 12,
  },
};
