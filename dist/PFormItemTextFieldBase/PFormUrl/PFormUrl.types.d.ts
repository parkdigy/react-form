import { PFormTextProps, PFormTextValue, PFormTextCommands } from '../PFormText';
export type PFormUrlValue = PFormTextValue;
export type PFormUrlCommands = PFormTextCommands;
export type PFormUrlProps = Omit<PFormTextProps, 'type'>;
