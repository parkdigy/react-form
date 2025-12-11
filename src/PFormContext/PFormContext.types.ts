import { PartialPick, PFormValueItemCommands } from '../@types';
import { PFormProps } from '../PForm/PForm.types';

export interface PFormContextValue<
  T = any,
  AllowUndefinedValue extends boolean = true,
  ItemValue = any,
  RangeItemValue = any,
  TV = T | (AllowUndefinedValue extends true ? undefined : never),
> extends PartialPick<
    PFormProps,
    'variant' | 'size' | 'color' | 'spacing' | 'formColGap' | 'focused' | 'labelShrink' | 'fullWidth'
  > {
  id: string;
  fullHeight?: boolean;
  disabled?: boolean;
  submitWhenReturnKey?: boolean;
  onAddValueItem: (
    id: string,
    commands: PFormValueItemCommands<T, AllowUndefinedValue, ItemValue, RangeItemValue>
  ) => void;
  onRemoveValueItem: (id: string) => void;
  onValueChange: (name: string, value: TV) => void;
  onValueChangeByUser: (name: string, value: TV) => void;
  onRequestSubmit: (name: string, value: TV) => void;
  onRequestSearchSubmit: (name: string, value: TV) => void;
  /** PFormRow */
  formColAutoXs?: number;
  formColWidth?: number;
  onAddFormCol?: (id: string, xs: number | undefined) => void;
  onRemoveFormCol?: (id: string) => void;
  /** FormCol */
  formColXs?: number;
  formColWithLabel?: boolean;
  formColWithHelperText?: boolean;
}

export const PFormContextDefaultValue: PFormContextValue = {
  id: 'init',
  variant: 'outlined',
  size: 'medium',
  color: 'primary',
  spacing: 2,
  formColGap: 1.5,
  focused: false,
  labelShrink: false,
  onAddValueItem: () => {},
  onRemoveValueItem: () => {},
  onValueChange: () => {},
  onValueChangeByUser: () => {},
  onRequestSubmit: () => {},
  onRequestSearchSubmit: () => {},
};
