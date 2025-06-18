import { PFormTextProps, PFormTextValue, PFormTextCommands } from '../PFormText';

export type PFormSearchValue = PFormTextValue;

export type PFormPSearchCommands = PFormTextCommands;

export type PFormSearchProps = Omit<PFormTextProps, 'type'>;
