import { FormTextFieldCommands, FormTextFieldProps } from '../FormTextField';
export type FormNumberValue = string | number;
export type FormNumberCommands = FormTextFieldCommands<FormNumberValue, false>;
export type FormNumberProps = Omit<FormTextFieldProps<FormNumberValue, false>, 'type'> & {
    allowLeadingZeros?: boolean;
    allowNegative?: boolean;
    thousandSeparator?: boolean;
    allowDecimal?: boolean;
    decimalScale?: number;
    prefix?: string;
    suffix?: string;
};
export declare const FormNumberDefaultProps: Pick<FormNumberProps, 'value' | 'clear'>;
