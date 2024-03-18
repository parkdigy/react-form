import { ReactNode } from 'react';
import { DesktopDateTimePickerProps } from '@mui/x-date-pickers';
import { CommonSxProps, FormDateType, FormDateValueItemCommands, FormTimeType, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { Dayjs } from 'dayjs';
export type PrivateDateTimePickerValue = Dayjs | null;
export interface PrivateDateTimePickerProps extends CommonSxProps, Partial<Omit<DesktopDateTimePickerProps<Dayjs>, 'children' | 'className' | 'name' | 'style' | 'sx' | 'value' | 'inputFormat' | 'views' | 'onChange' | 'openTo' | 'view' | 'viewRenderers' | 'components' | 'componentsProps' | 'slots' | 'slotProps'>>, FormValueItemProps<PrivateDateTimePickerValue, false> {
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
    readOnlyInput?: boolean;
    hidden?: boolean;
}
export declare const PrivateDateTimePickerDefaultProps: Pick<PrivateDateTimePickerProps, 'showDaysOutsideCurrentMonth' | 'align' | 'value'>;
export interface PrivateDateTimePickerCommands extends FormValueItemBaseCommands<PrivateDateTimePickerValue, false>, FormDateValueItemCommands {
}
