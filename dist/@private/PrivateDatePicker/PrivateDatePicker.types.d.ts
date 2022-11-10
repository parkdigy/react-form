import { ReactNode } from 'react';
import { DesktopDatePickerProps } from '@mui/x-date-pickers';
import { CommonSxProps, FormDateType, FormDateValueItemCommands, FormTimeType, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { Dayjs } from 'dayjs';
export declare type PrivateDatePickerValue = Dayjs | null;
export interface PrivateDatePickerProps extends CommonSxProps, Partial<Omit<DesktopDatePickerProps<Dayjs, Dayjs>, 'children' | 'className' | 'style' | 'sx' | 'value' | 'inputFormat' | 'views' | 'onChange'>>, Omit<FormValueItemProps, 'value' | 'onChange'> {
    type: FormDateType;
    time?: FormTimeType;
    value?: PrivateDatePickerValue;
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
    readOnlyInput?: boolean;
    onChange?(value: PrivateDatePickerValue): void;
    onValidate?(value: PrivateDatePickerValue): boolean | string;
}
export declare const PrivateDatePickerDefaultProps: Pick<PrivateDatePickerProps, 'showDaysOutsideCurrentMonth' | 'align'>;
export interface PrivateDatePickerCommands extends FormValueItemBaseCommands<PrivateDatePickerValue>, FormDateValueItemCommands {
}
