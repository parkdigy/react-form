import { FormTextProps, FormTextDefaultProps } from '../FormText';

export type FormEmailProps = Omit<FormTextProps, 'type'>;

export const FormEmailDefaultProps: Pick<FormEmailProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g,
};
