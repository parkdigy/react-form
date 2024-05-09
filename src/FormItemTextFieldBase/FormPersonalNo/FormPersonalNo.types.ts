import { FormTextProps, FormTextCommands } from '../FormText';

export type FormPersonalNoValue = string;

export type FormPersonalNoCommands = FormTextCommands;

export type FormPersonalNoProps = Omit<FormTextProps, 'type' | 'value' | 'maxLength'> & {
  value?: string;
  skipPersonalNumberValidateCheck?: boolean; // 실제 주민번호 유효성을 체크 하지 않고, 입력된 값을 그대로 사용할 경우 true
};
