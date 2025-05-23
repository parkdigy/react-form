import { PartialPick, FormValueItemCommands } from '../@types';
import { FormProps } from '../Form/Form.types';

export interface FormContextValue<T = any, AllowUndefinedValue extends boolean = true>
  extends PartialPick<
    FormProps,
    'variant' | 'size' | 'color' | 'spacing' | 'formColGap' | 'focused' | 'labelShrink' | 'fullWidth'
  > {
  id: string;
  fullHeight?: boolean;
  disabled?: boolean;
  submitWhenReturnKey?: boolean;
  onAddValueItem(id: string, commands: FormValueItemCommands<T, AllowUndefinedValue>): void;
  onRemoveValueItem(id: string): void;
  onValueChange(name: string, value: T): void;
  onValueChangeByUser(name: string, value: T): void;
  onRequestSubmit(name: string, value: T): void;
  onRequestSearchSubmit(name: string, value: T): void;
  /** FormRow */
  formColAutoXs?: number;
  formColWidth?: number;
  onAddFormCol?(id: string, xs: number | undefined): void;
  onRemoveFormCol?(id: string): void;
  /** FormCol */
  formColXs?: number;
  formColWithLabel?: boolean;
  formColWithHelperText?: boolean;
}

export const FormContextDefaultValue: FormContextValue = {
  id: 'init',
  variant: 'outlined',
  size: 'medium',
  color: 'primary',
  spacing: 2,
  formColGap: 1.5,
  focused: false,
  labelShrink: false,
  // eslint-disable-next-line
  onAddValueItem() {},
  // eslint-disable-next-line
  onRemoveValueItem() {},
  // eslint-disable-next-line
  onValueChange() {},
  // eslint-disable-next-line
  onValueChangeByUser() {},
  // eslint-disable-next-line
  onRequestSubmit() {},
  // eslint-disable-next-line
  onRequestSearchSubmit() {},
};
