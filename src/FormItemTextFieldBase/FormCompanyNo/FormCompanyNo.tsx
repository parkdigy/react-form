import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import {
  FormCompanyNoProps as Props,
  FormCompanyNoDefaultProps,
  FormCompanyNoCommands,
  FormCompanyNoValue,
} from './FormCompanyNo.types';

const FormCompanyNo = React.forwardRef<FormCompanyNoCommands, Props>(({ className, onValue, ...props }, ref) => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleValue = useCallback(
    (value: FormCompanyNoValue) => {
      const newValue = autoDash(value.replace(/[^0-9]/gi, ''));
      return onValue ? onValue(newValue) : newValue;
    },
    [onValue]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormText
      ref={ref}
      className={classNames(className, 'FormCompanyNo')}
      maxLength={12}
      onValue={handleValue}
      {...props}
    />
  );
});

FormCompanyNo.displayName = 'FormCompanyNo';
FormCompanyNo.defaultProps = FormCompanyNoDefaultProps;

export default FormCompanyNo;

function autoDash(companyNo: string): string {
  const str = companyNo.replace(/[^0-9]/g, '');
  let tmp = '';

  for (let i = 0; i < str.length; i += 1) {
    if (i === 3 || i === 5) {
      tmp += '-';
    }
    tmp += str[i];
  }

  return tmp;
}
