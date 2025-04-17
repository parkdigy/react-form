import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { FormContextValue } from '../FormContext';
export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
export type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;
export interface CommonProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export interface CommonSxProps extends CommonProps {
    sx?: SxProps<Theme>;
}
export type FormYearMonthValue = {
    year: number | '';
    month: number | '';
};
export type FormValue = string | number | boolean | FormYearMonthValue;
export interface FormValueMap {
    [key: string]: FormValue;
}
export type FormValueItemData = Record<string, any>;
export interface FormValueItemBaseCommands<T, AllowUndefinedValue extends boolean, V = AllowUndefinedValue extends true ? T | undefined : T> {
    getType(): 'default' | 'FormCheckbox' | 'FormToggleButtonGroup' | 'FormRadioGroup' | 'FormRating' | 'FormTextEditor' | 'FormAutocomplete' | 'FormDatePicker' | 'FormDateTimePicker' | 'FormTimePicker' | 'FormDateRangePicker' | 'FormMonthPicker' | 'FormMonthRangePicker' | 'FormYearPicker' | 'FormYearRangePicker' | 'FormFile' | 'FormSwitch';
    getName(): string;
    getReset(): V;
    reset(): void;
    getValue(): V;
    setValue(value: V): void;
    getData(): FormValueItemData | undefined;
    setData(data?: FormValueItemData): void;
    isExceptValue(): boolean;
    isDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    isHidden(): boolean;
    setHidden(hidden: boolean): void;
    focus(): void;
    focusValidate(): void;
    validate(): boolean;
    setError(error: boolean, errorText: ReactNode | undefined): void;
}
export interface FormArrayValueItemCommands {
    isFormValueSort(): boolean;
    getFormValueSeparator(): string;
}
export interface FormItemsValueItemCommands<T> {
    getItems(): T[] | undefined;
    setItems(items: T[] | undefined): void;
}
export interface FormCheckValueItemCommands<T> {
    getChecked(): boolean;
    setChecked(checked: boolean, notFireOnChange?: boolean): void;
    getUncheckedValue(): T;
    setUncheckedValue(uncheckedValue: T): void;
}
export interface FormMultipleValueItemCommands {
    isMultiple(): boolean;
}
export interface FormLoadingValueItemCommands {
    getLoading(): boolean;
    setLoading(loading: boolean): void;
}
export interface FormDateValueItemCommands {
    getFormValueFormat(): string;
}
export interface FormRangeValueItemCommands<T> {
    getFromValue(): T | null;
    setFromValue(value: T | null): void;
    getToValue(): T | null;
    setToValue(value: T | null): void;
}
export interface FormRangeValueItemNameCommands {
    getFormValueFromNameSuffix(): string;
    getFormValueToNameSuffix(): string;
    getFormValueFromName(): string;
    getFormValueToName(): string;
}
export interface FormYearMonthValueItemCommands {
    getYear(): number | null;
    setYear(year: number | null): void;
    getMonth(): number | null;
    setMonth(month: number | null): void;
}
export interface FormYearMonthValueItemNameCommands {
    getFormValueYearNameSuffix(): string;
    getFormValueMonthNameSuffix(): string;
    getFormValueYearName(): string;
    getFormValueMonthName(): string;
}
export interface FormYearMonthRangeValueItemCommands {
    getFromYear(): number | null;
    setFromYear(year: number | null): void;
    getFromMonth(): number | null;
    setFromMonth(month: number | null): void;
    getToYear(): number | null;
    setToYear(year: number | null): void;
    getToMonth(): number | null;
    setToMonth(month: number | null): void;
}
export interface FormYearMonthRangeValueItemNameCommands {
    getFormValueFromYearNameSuffix(): string;
    getFormValueFromMonthNameSuffix(): string;
    getFormValueToYearNameSuffix(): string;
    getFormValueToMonthNameSuffix(): string;
    getFormValueFromYearName(): string;
    getFormValueFromMonthName(): string;
    getFormValueToYearName(): string;
    getFormValueToMonthName(): string;
}
export interface FormValueItemCommands<T, AllowUndefinedValue extends boolean = true, ItemType = any> extends FormValueItemBaseCommands<T, AllowUndefinedValue>, Partial<FormArrayValueItemCommands>, Partial<FormItemsValueItemCommands<ItemType>>, Partial<FormCheckValueItemCommands<T>>, Partial<FormMultipleValueItemCommands>, Partial<FormLoadingValueItemCommands>, Partial<FormDateValueItemCommands>, Partial<FormRangeValueItemCommands<T>>, Partial<FormRangeValueItemNameCommands>, Partial<FormYearMonthValueItemCommands>, Partial<FormYearMonthValueItemNameCommands>, Partial<FormYearMonthRangeValueItemCommands>, Partial<FormYearMonthRangeValueItemNameCommands> {
}
export interface FormValueItemCommandsMap<T, AllowUndefinedValue extends boolean = true, ItemType = any> {
    [key: string]: FormValueItemCommands<T, AllowUndefinedValue, ItemType> | undefined;
}
export interface FormValueItemProps<T, AllowUndefinedValue extends boolean = true, V = AllowUndefinedValue extends true ? T | undefined : T> extends PartialPick<FormContextValue<T>, 'variant' | 'size' | 'color' | 'focused'> {
    name: string;
    value?: T;
    labelIcon?: string;
    label?: ReactNode;
    width?: string | number;
    fullWidth?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    hidden?: boolean;
    exceptValue?: boolean;
    helperText?: ReactNode;
    data?: FormValueItemData;
    onChange?(value: V): void;
    onValidate?(value: V): true | string;
}
