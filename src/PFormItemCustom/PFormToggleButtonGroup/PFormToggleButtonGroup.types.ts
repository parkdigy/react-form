import React, { type ReactNode } from 'react';
import { type ToggleButtonProps } from '@mui/material';
import {
  type PartialPick,
  type PCommonSxProps,
  type PFormMultipleValueItemCommands,
  type PFormArrayValueItemCommands,
  type PFormItemsValueItemCommands,
  type PFormLoadingValueItemCommands,
  type PFormValueItemBaseCommands,
  type PFormValueItemProps,
} from '../../@types';
import { type PFormItemBaseProps } from '../PFormItemBase';

export type PFormToggleButtonGroupSingleValue = string | number | boolean;

export interface PFormToggleButtonGroupItem<T extends PFormToggleButtonGroupSingleValue> {
  label: ReactNode;
  value: T;
  disabled?: boolean;
  color?: ToggleButtonProps['color'];
}

export type PFormToggleButtonGroupItems<T extends PFormToggleButtonGroupSingleValue> =
  readonly PFormToggleButtonGroupItem<T>[];

export type PFormToggleButtonGroupValue<
  T extends PFormToggleButtonGroupSingleValue,
  Multiple extends boolean | undefined,
> = ([Multiple] extends [true] ? T[] : T) | undefined;

export interface PFormToggleButtonGroupProps<
  T extends PFormToggleButtonGroupSingleValue,
  Multiple extends boolean | undefined = undefined,
  Items extends PFormToggleButtonGroupItems<T> = PFormToggleButtonGroupItems<T>,
  SingleValue extends Items[number]['value'] = Items[number]['value'],
  Value = PFormToggleButtonGroupValue<SingleValue, Multiple>,
>
  extends PCommonSxProps, PFormValueItemProps<Value>, PartialPick<PFormItemBaseProps, 'required' | 'focused'> {
  ref?: React.Ref<PFormToggleButtonGroupCommands<SingleValue, Multiple>>;
  type?: 'button' | 'checkbox' | 'radio';
  items?: Items;
  multiple?: Multiple;
  notAllowEmptyValue?: boolean;
  formValueSeparator?: string;
  formValueSort?: boolean;
  loading?: boolean;
  itemWidth?: number | string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onLoadItems?: () => Promise<Items>;
  onValue?: (value: Value) => Value;
}

export interface PFormToggleButtonGroupExtraCommands<T extends PFormToggleButtonGroupSingleValue>
  extends
    PFormArrayValueItemCommands,
    PFormItemsValueItemCommands<PFormToggleButtonGroupItem<T>>,
    PFormMultipleValueItemCommands,
    PFormLoadingValueItemCommands {}

export interface PFormToggleButtonGroupCommands<
  T extends PFormToggleButtonGroupSingleValue,
  Multiple extends boolean | undefined = undefined,
>
  extends
    PFormValueItemBaseCommands<PFormToggleButtonGroupValue<T, Multiple>, true>,
    PFormToggleButtonGroupExtraCommands<T> {
  reloadItems: () => void;
}
