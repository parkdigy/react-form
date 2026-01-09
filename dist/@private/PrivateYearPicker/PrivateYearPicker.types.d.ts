import { type CSSProperties } from 'react';
export type PrivateYearPickerBaseValue = number;
export type PrivateYearPickerValue = PrivateYearPickerBaseValue | null;
export interface PrivateYearPickerProps {
    style?: CSSProperties;
    value: PrivateYearPickerValue;
    minYear?: PrivateYearPickerBaseValue;
    maxYear?: PrivateYearPickerBaseValue;
    disablePast?: boolean;
    disableFuture?: boolean;
    hideHeader?: boolean;
    selectFromYear?: PrivateYearPickerValue;
    selectToYear?: PrivateYearPickerValue;
    onChange: (value: PrivateYearPickerBaseValue, isClick: boolean) => void;
}
