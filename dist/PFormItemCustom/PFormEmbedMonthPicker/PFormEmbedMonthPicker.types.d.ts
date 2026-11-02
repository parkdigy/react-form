import { type PFormMonthPickerCommands, type PFormMonthPickerProps } from '../PFormMonthPicker';
export type PFormEmbedMonthPickerCommands = PFormMonthPickerCommands;
export type PFormEmbedMonthPickerProps = Omit<PFormMonthPickerProps, 'icon' | 'format' | 'labelShrink' | 'inputWidth' | 'enableKeyboardInput' | 'startAdornment' | 'endAdornment'>;
