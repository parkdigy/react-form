import { ReactNode } from 'react';
import { DesktopDateTimePickerProps } from '@mui/x-date-pickers';
import { PCommonSxProps, PFormDateType, PFormDateValueItemCommands, PFormTimeType, PFormValueItemBaseCommands, PFormValueItemProps } from '../../@types';
import { Dayjs } from 'dayjs';
export type PrivateDateTimePickerValue = Dayjs | null;
export interface PrivateDateTimePickerProps extends PCommonSxProps, Partial<Omit<DesktopDateTimePickerProps<Dayjs>, 'children' | 'className' | 'name' | 'style' | 'sx' | 'value' | 'inputFormat' | 'views' | 'onChange' | 'openTo' | 'view' | 'viewRenderers' | 'components' | 'componentsProps' | 'slots' | 'slotProps'>>, PFormValueItemProps<PrivateDateTimePickerValue, false> {
    type: PFormDateType;
    time?: PFormTimeType;
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
export interface PrivateDateTimePickerCommands extends PFormValueItemBaseCommands<PrivateDateTimePickerValue, false>, PFormDateValueItemCommands {
}
