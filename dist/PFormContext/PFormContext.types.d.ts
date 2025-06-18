import { PartialPick, PFormValueItemCommands } from '../@types';
import { PFormProps } from '../PForm/PForm.types';
export interface PFormContextValue<T = any, AllowUndefinedValue extends boolean = true> extends PartialPick<PFormProps, 'variant' | 'size' | 'color' | 'spacing' | 'formColGap' | 'focused' | 'labelShrink' | 'fullWidth'> {
    id: string;
    fullHeight?: boolean;
    disabled?: boolean;
    submitWhenReturnKey?: boolean;
    onAddValueItem(id: string, commands: PFormValueItemCommands<T, AllowUndefinedValue>): void;
    onRemoveValueItem(id: string): void;
    onValueChange(name: string, value: T): void;
    onValueChangeByUser(name: string, value: T): void;
    onRequestSubmit(name: string, value: T): void;
    onRequestSearchSubmit(name: string, value: T): void;
    /** PFormRow */
    formColAutoXs?: number;
    formColWidth?: number;
    onAddFormCol?(id: string, xs: number | undefined): void;
    onRemoveFormCol?(id: string): void;
    /** FormCol */
    formColXs?: number;
    formColWithLabel?: boolean;
    formColWithHelperText?: boolean;
}
export declare const PFormContextDefaultValue: PFormContextValue;
