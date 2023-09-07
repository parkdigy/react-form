import { FormTextProps, FormTextDefaultProps, FormTextCommands } from '../FormText';

export type FormEmailValue = string;

export type FormEmailCommands = FormTextCommands;

export type FormEmailProps = Omit<FormTextProps, 'type'>;

export const FormEmailDefaultProps: Pick<FormEmailProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g,
};
