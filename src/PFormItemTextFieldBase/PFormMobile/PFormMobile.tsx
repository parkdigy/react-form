import React from 'react';
import classNames from 'classnames';
import PFormTel from '../PFormTel';
import { PFormMobileProps as Props, PFormMobileCommands } from './PFormMobile.types';

const PFormMobile = React.forwardRef<PFormMobileCommands, Props>(
  (
    {
      className,
      validPattern = /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
      ...props
    },
    ref
  ) => {
    return (
      <PFormTel ref={ref} className={classNames(className, 'PFormMobile')} validPattern={validPattern} {...props} />
    );
  }
);

PFormMobile.displayName = 'PFormMobile';

export default PFormMobile;
