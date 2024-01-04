import { ButtonProps } from '@mui/material';
export interface PrivateMonthPickerMonthProps extends Pick<ButtonProps, 'onMouseEnter' | 'onMouseLeave'> {
    month: number;
    disabled?: boolean;
    isDefault?: boolean;
    active?: boolean;
    selected?: boolean;
    selectedStart?: boolean;
    selectedEnd?: boolean;
    selectedTemp?: boolean;
    onClick?(month: number): void;
}
export declare const PrivateMonthPickerMonthDefaultProps: {};
