import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { FormContextValue } from '../FormContext';
import { Dayjs } from 'dayjs';
export declare type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
export declare type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;
export interface CommonProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export interface CommonSxProps extends CommonProps {
    sx?: SxProps<Theme>;
}
export declare type FormItemValue = any;
export declare type FormValue = string | number | boolean;
export interface FormValueMap {
    [key: string]: FormValue;
}
export interface FormValueItemBaseCommands<ValueType = FormItemValue> {
    getType(): 'default' | 'FormCheckbox' | 'FormToggleButtonGroup' | 'FormRadioGroup' | 'FormRating' | 'FormTextEditor' | 'FormAutocomplete' | 'FormDatePicker' | 'FormDateTimePicker' | 'FormTimePicker' | 'FormDateRangePicker' | 'FormFile';
    getName(): string;
    getReset(): ValueType;
    reset(): void;
    getValue(): ValueType;
    setValue(value: ValueType): void;
    isExceptValue(): boolean;
    isDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    focus(): void;
    focusValidate(): void;
    validate(): boolean;
    setError(error: boolean, errorText: ReactNode | undefined): void;
}
export interface FormArrayValueItemCommands {
    isFormValueSort(): boolean;
    getFormValueSeparator(): string | undefined;
}
export interface FormItemsValueItemCommands<ItemType> {
    getItems(): ItemType[] | undefined;
    setItems(items: ItemType[]): void;
}
export interface FormCheckValueItemCommands {
    getChecked(): boolean;
    setChecked(checked: boolean): void;
    getUncheckedValue(): FormItemValue;
    setUncheckedValue(uncheckedValue: FormItemValue): void;
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
export interface FormDateRangeValueItemCommands {
    getStartValue(): Dayjs | null;
    setStartValue(value: Dayjs | null): void;
    getEndValue(): Dayjs | null;
    setEndValue(value: Dayjs | null): void;
    getFormValueStartNameSuffix(): string;
    getFormValueEndNameSuffix(): string;
    getFormValueStartName(): string;
    getFormValueEndName(): string;
}
export interface FormValueItemCommands<ValueType = FormItemValue, ItemType = any> extends FormValueItemBaseCommands<ValueType>, Partial<FormArrayValueItemCommands>, Partial<FormItemsValueItemCommands<ItemType>>, Partial<FormCheckValueItemCommands>, Partial<FormMultipleValueItemCommands>, Partial<FormLoadingValueItemCommands>, Partial<FormDateValueItemCommands>, Partial<FormDateRangeValueItemCommands> {
}
export interface FormValueItemCommandsMap<ValueType = FormItemValue, ItemType = any> {
    [key: string]: FormValueItemCommands<ValueType, ItemType> | undefined;
}
export interface FormValueItemProps extends PartialPick<FormContextValue, 'variant' | 'size' | 'color' | 'focused'> {
    name: string;
    value?: FormItemValue;
    labelIcon?: string;
    label?: ReactNode;
    width?: string | number;
    fullWidth?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    exceptValue?: boolean;
    helperText?: ReactNode;
    onChange?(value: FormItemValue): void;
    onValidate?(value: FormItemValue): boolean | string;
}
