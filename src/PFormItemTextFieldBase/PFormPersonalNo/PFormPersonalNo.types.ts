import React from 'react';
import { type PFormTextProps, type PFormTextCommands } from '../PFormText';

export type PFormPersonalNoValue = string;

export type PFormPersonalNoCommands = PFormTextCommands;

export type PFormPersonalNoProps = Omit<PFormTextProps, 'type' | 'value' | 'maxLength'> & {
  ref?: React.Ref<PFormPersonalNoCommands>;
  value?: string;
  skipPersonalNumberValidateCheck?: boolean; // 실제 주민번호 유효성을 체크 하지 않고, 입력된 값을 그대로 사용할 경우 true
};
