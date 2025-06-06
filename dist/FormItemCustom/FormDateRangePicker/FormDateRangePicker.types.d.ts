import { ReactNode } from 'react';
import { FormDateRangePickerTooltipPickerContainerCalendarCount, FormDateRangePickerTooltipPickerDateValue } from './FormDateRangePickerTooltipPickerContainer';
import { CommonSxProps, FormRangeValueItemCommands, FormDateValueItemCommands, FormValueItemBaseCommands, FormValueItemProps, FormRangeValueItemNameCommands } from '../../@types';
import { Dayjs } from 'dayjs';
import { PrivateInputDatePickerProps } from '../../@private';
export type FormDateRangePickerDateValue = FormDateRangePickerTooltipPickerDateValue;
export type FormDateRangePickerValue = [FormDateRangePickerDateValue, FormDateRangePickerDateValue];
export type FormDateRangePickerCalendarCount = FormDateRangePickerTooltipPickerContainerCalendarCount;
export interface FormDateRangePickerProps extends CommonSxProps, Omit<FormValueItemProps<FormDateRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>, Pick<PrivateInputDatePickerProps, 'align'> {
    fromLabel?: ReactNode;
    fromLabelIcon?: string;
    toLabel?: ReactNode;
    toLabelIcon?: string;
    allowSingleSelect?: boolean;
    required?: boolean;
    requiredStart?: boolean;
    requiredEnd?: boolean;
    readOnlyStart?: boolean;
    readOnlyEnd?: boolean;
    enableKeyboardInput?: boolean;
    labelShrink?: boolean;
    calendarCount?: FormDateRangePickerCalendarCount;
    format?: string;
    formValueFormat?: string;
    formValueFromNameSuffix?: string;
    formValueToNameSuffix?: string;
    icon?: string;
    startIcon?: string;
    endIcon?: string;
    startAdornment?: ReactNode;
    startStartAdornment?: ReactNode;
    startEndAdornment?: ReactNode;
    endAdornment?: ReactNode;
    endStartAdornment?: ReactNode;
    endEndAdornment?: ReactNode;
    inputWidth?: number | string;
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    onGetActionButtons?(): {
        label: string;
        start: Dayjs;
        end: Dayjs;
    }[];
}
export interface FormDateRangePickerCommands extends FormValueItemBaseCommands<FormDateRangePickerValue, false>, FormDateValueItemCommands, FormRangeValueItemCommands<Dayjs>, FormRangeValueItemNameCommands {
}
