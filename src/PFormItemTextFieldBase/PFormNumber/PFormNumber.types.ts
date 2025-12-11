import { PFormTextFieldCommands, PFormTextFieldProps } from '../PFormTextField';

export type PFormNumberCommands = PFormTextFieldCommands<number>;

export type PFormNumberProps = Omit<PFormTextFieldProps<number>, 'type'> & {
  allowNegative?: boolean;
  thousandSeparator?: boolean;
  allowDecimal?: boolean;
  decimalScale?: number;
  prefix?: string;
  suffix?: string;
};
