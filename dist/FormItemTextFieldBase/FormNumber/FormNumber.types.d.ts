import { FormTextFieldCommands, FormTextFieldProps } from '../FormTextField';
export type FormNumberCommands = FormTextFieldCommands<number>;
export type FormNumberProps = Omit<FormTextFieldProps<number>, 'type'> & {
    allowNegative?: boolean;
    thousandSeparator?: boolean;
    allowDecimal?: boolean;
    decimalScale?: number;
    prefix?: string;
    suffix?: string;
};
