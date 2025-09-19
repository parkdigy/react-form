import { PrivateYearPickerBaseValue, PrivateYearPickerProps, PrivateYearPickerValue } from '../PrivateYearPicker.types';
export interface PrivateYearPickerYearListProps extends Pick<PrivateYearPickerProps, 'value' | 'disablePast' | 'disableFuture'>, Required<Pick<PrivateYearPickerProps, 'minYear' | 'maxYear'>> {
    selectFromYear?: PrivateYearPickerValue;
    selectToYear?: PrivateYearPickerValue;
    onChange: (year: PrivateYearPickerBaseValue) => void;
}
