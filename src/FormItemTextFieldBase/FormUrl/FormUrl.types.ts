import { FormTextProps, FormTextDefaultProps, FormTextValue, FormTextCommands } from '../FormText';

export type FormUrlValue = FormTextValue;

export type FormUrlCommands = FormTextCommands;

export type FormUrlProps = Omit<FormTextProps, 'type'>;

export const FormUrlDefaultProps: Pick<FormUrlProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim,
};
