import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import { notEmpty } from '../../@util';
import { FormValueItemBaseCommands } from '../../@types';
import { FormCompanyNoProps as Props, FormCompanyNoDefaultProps } from './FormCompanyNo.types';

const FormCompanyNo = React.forwardRef<FormValueItemBaseCommands, Props>(({ className, onValue, ...props }, ref) => {
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

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <FormText
      ref={ref}
      className={classNames(className, 'FormCompanyNo')}
      onValue={handleOnValue}
      maxLength={12}
      {...props}
    />
  );
});

FormCompanyNo.displayName = 'FormCompanyNo';
FormCompanyNo.defaultProps = FormCompanyNoDefaultProps;

export default FormCompanyNo;

function autoDash(companyNo: string | undefined): string | undefined {
  if (companyNo == null) return undefined;

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
