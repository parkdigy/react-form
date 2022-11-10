import { FormTextProps, FormTextDefaultProps } from '../FormText';

export type FormNumberProps = Omit<FormTextProps, 'type'> & {
  allowLeadingZeros?: boolean;
  allowNegative?: boolean;
  thousandSeparator?: boolean;
  allowDecimal?: boolean;
  decimalScale?: number;
  prefix?: string;
  suffix?: string;
};

export const FormNumberDefaultProps = {
  ...FormTextDefaultProps,
};
