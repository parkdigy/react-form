import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import { notEmpty } from '../../@util';
import { FormValueItemBaseCommands } from '../../@types';
import { FormPersonalNoProps as Props, FormPersonalNoDefaultProps } from './FormPersonalNo.types';

const FormPersonalNo = React.forwardRef<FormValueItemBaseCommands, Props>(
  ({ className, onValue, onValidate, ...props }, ref) => {
    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleOnValue = useCallback(
      (value: Props['value']) => {
        let newValue = value;
        if (newValue && notEmpty(newValue)) {
          newValue = newValue.replace(/[^0-9]/gi, '');
        }
        newValue = autoDash(newValue);
        return onValue ? onValue(newValue) : newValue;
      },
      [onValue]
    );

    const handleValidate = useCallback(
      (value: string) => {
        if (notEmpty(value) && value.length === 14 && value.includes('-')) {
          const jumin: number[] = value
            .replaceAll('-', '')
            .split('')
            .map((v) => Number(v));
          const ckarr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

          for (let i = 0; i < jumin.length - 1; i += 1) {
            jumin[i] = jumin[i] * ckarr[i];
          }
          const juminlast = jumin[jumin.length - 1];

          let sum = 0;
          for (let i = 0; i < jumin.length - 1; i += 1) {
            sum += jumin[i];
          }

          sum = sum % 11;

          sum = 11 - sum;

          if (sum > 9) {
            sum = sum % 10;
          }

          if (sum != juminlast && juminlast != undefined) {
            return '유효하지 않은 값입니다.';
          }
          return onValidate ? onValidate(value) : true;
        } else {
          return '유효하지 않은 값입니다.';
        }
      },
      [onValidate]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormText
        ref={ref}
        className={classNames(className, 'FormPersonalNo')}
        onValue={handleOnValue}
        maxLength={14}
        onValidate={handleValidate}
        {...props}
      />
    );
  }
);

FormPersonalNo.displayName = 'FormPersonalNo';
FormPersonalNo.defaultProps = FormPersonalNoDefaultProps;

export default FormPersonalNo;

function autoDash(personalNo: string | undefined): string | undefined {
  if (personalNo == null) return undefined;

  const str = personalNo.replace(/[^0-9]/g, '');
  let tmp = '';

  for (let i = 0; i < str.length; i += 1) {
    if (i === 6) {
      tmp += '-';
    }
    tmp += str[i];
  }

  return tmp;
}
