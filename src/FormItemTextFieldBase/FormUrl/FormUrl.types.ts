import { FormTextProps, FormTextDefaultProps } from '../FormText';

export type FormUrlProps = Omit<FormTextProps, 'type'>;

export const FormUrlDefaultProps: Pick<FormUrlProps, 'validPattern'> = {
  ...FormTextDefaultProps,
  validPattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim,
};
