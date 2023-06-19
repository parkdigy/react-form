import { ReactNode, RefObject } from 'react';
import { ButtonBaseActions, CheckboxProps } from '@mui/material';
import {
  CommonSxProps,
  FormCheckValueItemCommands,
  FormItemValue,
  FormValueItemBaseCommands,
  FormValueItemProps,
} from '../../@types';

export interface FormCheckboxProps
  extends CommonSxProps,
    Omit<CheckboxProps, 'color' | 'name' | 'inputRef' | 'action' | 'required' | 'onChange'>,
    Omit<FormValueItemProps, 'value' | 'onChange'> {
  value?: FormItemValue;
  uncheckedValue?: FormItemValue;
  text?: ReactNode;
  inputRef?: RefObject<HTMLInputElement>;
  action?: RefObject<ButtonBaseActions>;
  hidden?: boolean;
  onChange?(checked: boolean): void;
}

export const FormCheckboxDefaultProps: Pick<FormCheckboxProps, 'checked' | 'value' | 'uncheckedValue'> = {
  checked: false,
  value: 1,
  uncheckedValue: 0,
};

export interface FormCheckboxCommands extends Omit<FormValueItemBaseCommands, 'getReset'>, FormCheckValueItemCommands {
  getReset(): FormCheckboxProps['checked'];
}
