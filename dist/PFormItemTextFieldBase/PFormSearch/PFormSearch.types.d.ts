import { PFormTextProps, PFormTextValue, PFormTextCommands } from '../PFormText';
export type PFormSearchValue = PFormTextValue;
export type PFormSearchCommands = PFormTextCommands;
export type PFormSearchProps = Omit<PFormTextProps, 'type'>;
