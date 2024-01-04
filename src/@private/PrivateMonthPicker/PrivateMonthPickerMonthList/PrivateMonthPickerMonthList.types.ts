import { PrivateMonthPickerBaseValue, PrivateMonthPickerProps } from '../PrivateMonthPicker.types';

export interface PrivateMonthPickerMonthListProps
  extends Pick<
    PrivateMonthPickerProps,
    'value' | 'disablePast' | 'disableFuture' | 'selectFromValue' | 'selectToValue'
  > {
  minAvailableValue: PrivateMonthPickerBaseValue;
  maxAvailableValue: PrivateMonthPickerBaseValue;
  onChange(value: PrivateMonthPickerBaseValue): void;
}

export const PrivateMonthPickerMonthListDefaultProps = {};