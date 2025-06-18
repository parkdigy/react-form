import { PFormTextProps, PFormTextCommands, PFormTextValue } from '../PFormText';

export type PFormTelValue = PFormTextValue;

export type PFormTelCommands = PFormTextCommands;

export type PFormTelProps = Omit<PFormTextProps, 'type' | 'maxLength'>;
