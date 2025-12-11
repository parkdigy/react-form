import { PFormTextCommands, PFormTextProps, PFormTextValue } from '../PFormText';
export type PFormPasswordValue = PFormTextValue;
export type PFormPasswordCommands = PFormTextCommands;
export interface PFormPasswordProps extends Omit<PFormTextProps, 'disableReturnKey' | 'type'> {
    eye?: boolean;
}
