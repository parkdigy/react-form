import {
  PrivateMonthRangePickerProps,
  PrivateMonthRangePickerSelectType,
  PrivateMonthRangePickerValue,
} from '../PrivateMonthRangePicker.types';

export interface PrivateMonthRangePickerMonthListProps
  extends Pick<PrivateMonthRangePickerProps, 'selectType' | 'value' | 'disablePast' | 'disableFuture'>,
    Required<Pick<PrivateMonthRangePickerProps, 'minValue' | 'maxValue'>> {
  onChange(value: PrivateMonthRangePickerValue, selectType: PrivateMonthRangePickerSelectType): void;
}

export const PrivateMonthRangePickerMonthListDefaultProps = {};
