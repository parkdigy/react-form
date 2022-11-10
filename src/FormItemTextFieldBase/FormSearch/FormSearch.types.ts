import { FormTextProps, FormTextDefaultProps } from '../FormText';

export type FormSearchProps = Omit<FormTextProps, 'type'>;

export const FormSearchDefaultProps = {
  ...FormTextDefaultProps,
};
