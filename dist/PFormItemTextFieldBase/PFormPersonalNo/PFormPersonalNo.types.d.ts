import { PFormTextProps, PFormTextCommands } from '../PFormText';
export type PFormPersonalNoValue = string;
export type PFormPersonalNoCommands = PFormTextCommands;
export type PFormPersonalNoProps = Omit<PFormTextProps, 'type' | 'value' | 'maxLength'> & {
    value?: string;
    skipPersonalNumberValidateCheck?: boolean;
};
