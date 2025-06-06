import { FormTextProps } from '../../FormText';
export interface FormTagTextProps extends Omit<FormTextProps, 'value' | 'onChange'> {
    allowSpace?: boolean;
    onAppendTag(tag: string): void;
}
