import {
  PrivateYearRangePickerBaseValue,
  PrivateYearRangePickerProps,
  PrivateYearRangePickerSelectType,
} from '../PrivateYearRangePicker.types';

export interface PrivateYearRangePickerYearListProps
  extends Pick<PrivateYearRangePickerProps, 'value' | 'disablePast' | 'disableFuture'>,
    Required<Pick<PrivateYearRangePickerProps, 'minYear' | 'maxYear'>> {
  selectType: PrivateYearRangePickerSelectType;
  displayValue: PrivateYearRangePickerBaseValue[];
  onChange(year: number): void;
}

export const PrivateYearRangePickerYearListDefaultProps = {};
