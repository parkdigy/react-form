import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import {
  FormCompanyNoProps as Props,
  FormCompanyNoDefaultProps,
  FormCompanyNoCommands,
  FormCompanyNoValue,
} from './FormCompanyNo.types';
import { companyNoAutoDash } from '@pdg/util';

const FormCompanyNo = React.forwardRef<FormCompanyNoCommands, Props>(({ className, onValue, ...props }, ref) => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleValue = useCallback(
    (value: FormCompanyNoValue) => {
      const newValue = companyNoAutoDash(value.replace(/[^0-9]/gi, ''));
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
