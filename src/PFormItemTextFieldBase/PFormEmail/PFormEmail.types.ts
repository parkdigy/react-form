import { PFormTextProps, PFormTextCommands } from '../PFormText';

export type PFormEmailValue = string;

export type PFormEmailCommands = PFormTextCommands;

export type PFormEmailProps = Omit<PFormTextProps, 'type'>;
