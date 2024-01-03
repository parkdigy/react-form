import { PrivateMonthPickerBaseValue, PrivateMonthPickerProps } from '../PrivateMonthPicker.types';

export interface PrivateMonthPickerMonthListProps
  extends Pick<PrivateMonthPickerProps, 'value' | 'disablePast' | 'disableFuture'>,
    Required<Pick<PrivateMonthPickerProps, 'minValue' | 'maxValue'>> {
  onChange(value: PrivateMonthPickerBaseValue): void;
}

export const PrivateMonthPickerMonthListDefaultProps = {};
