import React from 'react';
import classNames from 'classnames';
import PFormTel from '../PFormTel';
import { PFormMobileProps as Props } from './PFormMobile.types';

const PFormMobile = ({
  className,
  validPattern = /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
  ...props
}: Props) => {
  return <PFormTel className={classNames(className, 'PFormMobile')} validPattern={validPattern} {...props} />;
};

export default PFormMobile;
