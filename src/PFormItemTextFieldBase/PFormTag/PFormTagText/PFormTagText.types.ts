import { PFormTextProps } from '../../PFormText';

export interface PFormTagTextProps extends Omit<PFormTextProps, 'value' | 'onChange'> {
  allowSpace?: boolean;
  onAppendTag: (tag: string) => void;
}
