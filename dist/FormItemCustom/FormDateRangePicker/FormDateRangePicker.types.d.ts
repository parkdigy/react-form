import { ReactNode } from 'react';
import { FormDateRangePickerTooltipPickerContainerCalendarCount } from './FormDateRangePickerTooltipPickerContainer';
import { FormDateRangePickerTooltipPickerDateValue } from './FormDateRangePickerTooltipPickerContainer/FormDateRangePickerTooltipPicker';
import { CommonSxProps, FormRangeValueItemCommands, FormDateValueItemCommands, FormValueItemBaseCommands, FormValueItemProps, FormRangeValueItemNameCommands } from '../../@types';
import { Dayjs } from 'dayjs';
import { PrivateInputDatePickerProps } from '../../@private';
export type FormDateRangePickerDateValue = FormDateRangePickerTooltipPickerDateValue;
export type FormDateRangePickerValue = [FormDateRangePickerDateValue, FormDateRangePickerDateValue];
export type FormDateRangePickerCalendarCount = FormDateRangePickerTooltipPickerContainerCalendarCount;
export interface FormDateRangePickerProps extends CommonSxProps, Omit<FormValueItemProps<FormDateRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>, Pick<PrivateInputDatePickerProps, 'align'> {
    startLabel?: ReactNode;
    startLabelIcon?: string;
    endLabel?: ReactNode;
    endLabelIcon?: string;
    allowSingleSelect?: boolean;
    required?: boolean;
    requiredStart?: boolean;
    requiredEnd?: boolean;
    readOnlyStart?: boolean;
    readOnlyEnd?: boolean;
    readOnlyInput?: boolean;
    labelShrink?: boolean;
    calendarCount?: FormDateRangePickerCalendarCount;
    format?: string;
    formValueFormat?: string;
    formValueFromName?: string;
    formValueToName?: string;
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
    hidden?: boolean;
    onGetActionButtons?(): {
        label: string;
        start: Dayjs;
        end: Dayjs;
    }[];
}
export declare const FormDateRangePickerDefaultProps: Required<Pick<FormDateRangePickerProps, 'calendarCount' | 'format' | 'formValueFormat' | 'formValueFromNameSuffix' | 'formValueToNameSuffix' | 'align'>>;
export interface FormDateRangePickerCommands extends FormValueItemBaseCommands<FormDateRangePickerValue, false>, FormDateValueItemCommands, FormRangeValueItemCommands<Dayjs>, FormRangeValueItemNameCommands {
}
