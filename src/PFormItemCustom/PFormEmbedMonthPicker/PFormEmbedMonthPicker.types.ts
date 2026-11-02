import type {
  PFormMonthPickerCommands,
  PFormMonthPickerProps,
  PFormMonthPickerBaseValue,
  PFormMonthPickerValue,
} from '../PFormMonthPicker';

export type PFormEmbedMonthPickerCommands = PFormMonthPickerCommands;
export type PFormEmbedMonthPickerBaseValue = PFormMonthPickerBaseValue;
export type PFormEmbedMonthPickerValue = PFormMonthPickerValue;

export type PFormEmbedMonthPickerProps = Omit<
  PFormMonthPickerProps,
  'icon' | 'format' | 'labelShrink' | 'inputWidth' | 'enableKeyboardInput' | 'startAdornment' | 'endAdornment'
>;
