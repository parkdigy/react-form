import {
  PrivateMonthPickerBaseValue,
  PrivateMonthPickerProps,
  PrivateMonthPickerValue,
} from '../PrivateMonthPicker.types';

export interface PrivateMonthPickerMonthListProps
  extends Pick<
    PrivateMonthPickerProps,
    'value' | 'disablePast' | 'disableFuture' | 'selectFromValue' | 'selectToValue'
  > {
  defaultValue?: PrivateMonthPickerValue;
  minAvailableValue: PrivateMonthPickerBaseValue;
  maxAvailableValue: PrivateMonthPickerBaseValue;
  onChange: (value: PrivateMonthPickerBaseValue) => void;
}
