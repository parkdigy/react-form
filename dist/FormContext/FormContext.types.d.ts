import { PartialPick, FormValueItemCommands } from '../@types';
import { FormProps } from '../Form/Form.types';
export interface FormContextValue<T = any, AllowUndefinedValue extends boolean = true> extends PartialPick<FormProps, 'variant' | 'size' | 'color' | 'spacing' | 'formColGap' | 'focused' | 'labelShrink' | 'fullWidth'> {
    id: string;
    fullHeight?: boolean;
    disabled?: boolean;
    onAddValueItem(id: string, commands: FormValueItemCommands<T, AllowUndefinedValue>): void;
    onRemoveValueItem(id: string): void;
    onValueChange(name: string, value: T): void;
    onValueChangeByUser(name: string, value: T): void;
    onRequestSearchSubmit(name: string, value: T): void;
    formColAutoXs?: number;
    formColWidth?: number;
    onAddFormCol?(id: string, xs: number | undefined): void;
    onRemoveFormCol?(id: string): void;
    formColXs?: number;
    formColWithLabel?: boolean;
    formColWithHelperText?: boolean;
}
export declare const FormContextDefaultValue: FormContextValue;
