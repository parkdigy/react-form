import { FormTextProps } from '../../FormText';

export interface FormTagTextProps extends Omit<FormTextProps, 'value' | 'onChange'> {
  onAppendTag(tag: string): void;
}
