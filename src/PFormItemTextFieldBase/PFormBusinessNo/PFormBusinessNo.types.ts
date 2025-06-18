import { PFormTextProps, PFormTextCommands, PFormTextValue } from '../PFormText';

export type PFormBusinessNoValue = PFormTextValue;

export type PFormBusinessNoCommands = PFormTextCommands;

export type PFormBusinessNoProps = Omit<PFormTextProps, 'type' | 'maxLength'>;
