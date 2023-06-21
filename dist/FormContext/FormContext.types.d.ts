import { PartialPick, FormValueItemCommands, FormItemValue } from '../@types';
import { FormProps } from '../Form/Form.types';
export interface FormContextValue extends PartialPick<FormProps, 'variant' | 'size' | 'color' | 'spacing' | 'formColGap' | 'focused' | 'labelShrink' | 'fullWidth'> {
    id: string;
    fullHeight?: boolean;
    onAddValueItem(id: string, commands: FormValueItemCommands): void;
    onRemoveValueItem(id: string): void;
    onValueChange(name: string, value: FormItemValue): void;
    onValueChangeByUser(name: string, value: FormItemValue): void;
    onRequestSearchSubmit(name: string, value: FormItemValue): void;
    formColAutoXs?: number;
    formColWidth?: number;
    onAddFormCol?(id: string, xs: number | undefined): void;
    onRemoveFormCol?(id: string): void;
    formColXs?: number;
    formColWithLabel?: boolean;
    formColWithHelperText?: boolean;
}
export declare const FormContextDefaultValue: FormContextValue;
