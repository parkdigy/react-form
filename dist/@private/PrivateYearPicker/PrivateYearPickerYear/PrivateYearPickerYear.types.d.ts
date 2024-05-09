import { ButtonProps } from '@mui/material';
export interface PrivateYearPickerYearProps extends Pick<ButtonProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
    year: number;
    range?: boolean;
    disabled?: boolean;
    isDefault?: boolean;
    active?: boolean;
    selected?: boolean;
    selectedStart?: boolean;
    selectedEnd?: boolean;
    selectedTemp?: boolean;
}
