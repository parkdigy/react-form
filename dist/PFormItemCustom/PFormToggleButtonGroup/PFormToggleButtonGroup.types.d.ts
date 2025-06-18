import { ReactNode } from 'react';
import { ToggleButtonProps } from '@mui/material';
import { PartialPick, PCommonSxProps, PFormMultipleValueItemCommands, PFormArrayValueItemCommands, PFormItemsValueItemCommands, PFormLoadingValueItemCommands, PFormValueItemBaseCommands, PFormValueItemProps } from '../../@types';
import { PFormItemBaseProps } from '../PFormItemBase';
export type PFormToggleButtonGroupSingleValue = string | number | boolean;
export interface PFormToggleButtonGroupItem<T extends PFormToggleButtonGroupSingleValue> {
    label: ReactNode;
    value: T;
    disabled?: boolean;
    color?: ToggleButtonProps['color'];
}
export type PFormToggleButtonGroupItems<T extends PFormToggleButtonGroupSingleValue> = PFormToggleButtonGroupItem<T>[];
export type PFormToggleButtonGroupValue<T extends PFormToggleButtonGroupSingleValue, Multiple extends boolean | undefined> = ([Multiple] extends [true] ? T[] : T) | undefined;
export interface PFormToggleButtonGroupProps<T extends PFormToggleButtonGroupSingleValue, Multiple extends boolean | undefined = undefined> extends PCommonSxProps, Omit<PFormValueItemProps<PFormToggleButtonGroupValue<T, Multiple>>, 'value'>, PartialPick<PFormItemBaseProps, 'required' | 'focused'> {
    type?: 'button' | 'checkbox' | 'radio';
    value?: PFormToggleButtonGroupValue<T, Multiple>;
    items?: PFormToggleButtonGroupItem<T>[];
    multiple?: Multiple;
    notAllowEmptyValue?: boolean;
    formValueSeparator?: string;
    formValueSort?: boolean;
    loading?: boolean;
    itemWidth?: number | string;
    onLoadItems?: () => Promise<PFormToggleButtonGroupItem<T>[]>;
    onValue?: (value: PFormToggleButtonGroupValue<T, Multiple>) => PFormToggleButtonGroupValue<T, Multiple>;
}
export interface PFormToggleButtonGroupExtraCommands<T extends PFormToggleButtonGroupSingleValue> extends PFormArrayValueItemCommands, PFormItemsValueItemCommands<PFormToggleButtonGroupItem<T>>, PFormMultipleValueItemCommands, PFormLoadingValueItemCommands {
}
export interface PFormToggleButtonGroupCommands<T extends PFormToggleButtonGroupSingleValue, Multiple extends boolean | undefined = undefined> extends PFormValueItemBaseCommands<PFormToggleButtonGroupValue<T, Multiple>, true>, PFormToggleButtonGroupExtraCommands<T> {
}
