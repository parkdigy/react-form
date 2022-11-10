import { ReactNode } from 'react';
import { CustomDatePickerContainerCalendarCount } from './CustomDatePickerContainer';
import { CustomDatePickerDateValue } from './CustomDatePickerContainer/CustomDatePicker';
import { CommonSxProps, FormDateRangeValueItemCommands, FormDateValueItemCommands, FormValueItemBaseCommands, FormValueItemProps } from '../../@types';
import { Dayjs } from 'dayjs';
import { InputDatePickerProps } from './InputDatePicker';
export declare type FormDateRangePickerDateValue = CustomDatePickerDateValue;
export declare type FormDateRangePickerValue = [FormDateRangePickerDateValue, FormDateRangePickerDateValue];
export declare type FormDateRangePickerCalendarCount = CustomDatePickerContainerCalendarCount;
export interface FormDateRangePickerProps extends CommonSxProps, Omit<FormValueItemProps, 'label' | 'labelIcon' | 'value' | 'width' | 'onChange'>, Pick<InputDatePickerProps, 'align'> {
    value?: FormDateRangePickerValue;
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
    formValueStartNameSuffix?: string;
    formValueEndNameSuffix?: string;
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
    onChange?(value: FormDateRangePickerValue): void;
    onValidate?(value: FormDateRangePickerValue): boolean | string;
}
export declare const FormDateRangePickerDefaultProps: Required<Pick<FormDateRangePickerProps, 'calendarCount' | 'format' | 'formValueFormat' | 'formValueStartNameSuffix' | 'formValueEndNameSuffix' | 'align'>>;
export interface FormDateRangePickerCommands extends FormValueItemBaseCommands<FormDateRangePickerValue>, FormDateValueItemCommands, FormDateRangeValueItemCommands {
}
