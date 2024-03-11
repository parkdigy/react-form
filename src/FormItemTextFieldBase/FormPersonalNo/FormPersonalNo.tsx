import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import { notEmpty } from '../../@util';
import {
  FormPersonalNoProps as Props,
  FormPersonalNoDefaultProps,
  FormPersonalNoCommands,
  FormPersonalNoValue,
} from './FormPersonalNo.types';

const FormPersonalNo = React.forwardRef<FormPersonalNoCommands, Props>(
  ({ className, onValue, onValidate, ...props }, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleValue = useCallback(
      (value: FormPersonalNoValue) => {
        const newValue = autoDash(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
      },
      [onValue]
    );

    const handleValidate = useCallback(
      (value: FormPersonalNoValue) => {
        if (notEmpty(value)) {
          if (value.length === 14 && value.includes('-')) {
            const jumin: number[] = value
              .replace(/-/g, '')
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
        } else {
          return onValidate ? onValidate(value) : true;
        }
      },
      [onValidate]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormText
        ref={ref}
        className={classNames(className, 'FormPersonalNo')}
        maxLength={14}
        onValue={handleValue}
        onValidate={handleValidate}
        {...props}
      />
    );
  }
);

FormPersonalNo.displayName = 'FormPersonalNo';
FormPersonalNo.defaultProps = FormPersonalNoDefaultProps;

export default FormPersonalNo;

function autoDash(personalNo: string): string {
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
