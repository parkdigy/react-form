import React, { useCallback } from 'react';
import classNames from 'classnames';
import PFormText from '../PFormText';
import { PFormEmailProps as Props, PFormEmailValue } from './PFormEmail.types';

const PFormEmail = ({
  className,
  validPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g,
  onValue,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleValue = useCallback(
    (value: PFormEmailValue) => {
      const newValue = value.replace(/ /gi, '');
      return onValue ? onValue(newValue) : newValue;
    },
    [onValue]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormText
      className={classNames(className, 'PFormEmail')}
      type='email'
      validPattern={validPattern}
      onValue={handleValue}
      {...props}
    />
  );
};

export default PFormEmail;
