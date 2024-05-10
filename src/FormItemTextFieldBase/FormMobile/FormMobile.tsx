import React from 'react';
import classNames from 'classnames';
import FormTel from '../FormTel';
import { FormMobileProps as Props, FormMobileCommands } from './FormMobile.types';

const FormMobile = React.forwardRef<FormMobileCommands, Props>(
  (
    {
      className,
      validPattern = /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
      ...props
    },
    ref
  ) => {
    return <FormTel ref={ref} className={classNames(className, 'FormMobile')} validPattern={validPattern} {...props} />;
  }
);

FormMobile.displayName = 'FormMobile';

export default FormMobile;
