import React, { type ReactNode } from 'react';
import {
  type PCommonSxProps,
  type PFormItemsValueItemCommands,
  type PFormLoadingValueItemCommands,
  type PFormValueItemBaseCommands,
  type PFormValueItemProps,
} from '../../@types';

export type PFormRadioGroupSingleValue = string | number | boolean;

export interface PFormRadioGroupItem<T extends PFormRadioGroupSingleValue> {
  label: ReactNode;
  value: T;
  disabled?: boolean;
}

export type PFormRadioGroupItems<T extends PFormRadioGroupSingleValue> = readonly PFormRadioGroupItem<T>[];

export type PFormRadioGroupValue<T extends PFormRadioGroupSingleValue> = T | undefined;

export interface PFormRadioGroupProps<
  BaseValue extends PFormRadioGroupSingleValue,
  Items extends PFormRadioGroupItems<BaseValue> = PFormRadioGroupItems<BaseValue>,
  Value extends PFormRadioGroupSingleValue = Items[number]['value'],
>
  extends PCommonSxProps, Omit<PFormValueItemProps<PFormRadioGroupValue<Value>>, 'value'> {
  ref?: React.Ref<PFormRadioGroupCommands<Value>>;
  value?: Value;
  items?: Items;
  required?: boolean;
  inline?: boolean;
  loading?: boolean;
  nowrap?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onLoadItems?: () => Promise<Items>;
  onValue?: (value: PFormRadioGroupValue<Value>) => PFormRadioGroupValue<Value>;
}

export interface PFormRadioGroupCommands<T extends PFormRadioGroupSingleValue>
  extends
    PFormValueItemBaseCommands<T, true>,
    PFormItemsValueItemCommands<PFormRadioGroupItem<T>>,
    PFormLoadingValueItemCommands {
  reloadItems: () => void;
}
