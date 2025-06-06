import { ReactNode } from 'react';
import { DesktopDatePickerProps } from '@mui/x-date-pickers';
import { CommonSxProps, FormDateType, FormDateValueItemCommands, FormTimeType, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { Dayjs } from 'dayjs';
export type PrivateDatePickerValue = Dayjs | null;
export interface PrivateDatePickerProps extends CommonSxProps, Partial<Omit<DesktopDatePickerProps<Dayjs>, 'children' | 'name' | 'className' | 'style' | 'sx' | 'value' | 'inputFormat' | 'views' | 'onChange'>>, FormValueItemProps<PrivateDatePickerValue, false> {
    type: FormDateType;
    time?: FormTimeType;
    hours?: number[];
    minutes?: number[];
    seconds?: number[];
    minuteInterval?: number;
    secondInterval?: number;
    required?: boolean;
    labelShrink?: boolean;
    format?: string;
    formValueFormat?: string;
    icon?: string;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    align?: 'left' | 'center' | 'right';
    enableKeyboardInput?: boolean;
    hidden?: boolean;
}
export interface PrivateDatePickerCommands extends FormValueItemBaseCommands<PrivateDatePickerValue, false>, FormDateValueItemCommands {
}
