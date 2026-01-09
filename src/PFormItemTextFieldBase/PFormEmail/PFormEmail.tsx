import React, { useCallback } from 'react';
import classNames from 'classnames';
import PFormText from '../PFormText';
import { type PFormEmailProps as Props, type PFormEmailValue } from './PFormEmail.types';
import { useAutoUpdateRef } from '@pdg/react-hook';

const PFormEmail = ({
  className,
  validPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g,
  onValue,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onValueRef = useAutoUpdateRef(onValue);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleValue = useCallback(
    (value: PFormEmailValue) => {
      const newValue = value.replace(/ /gi, '');
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    },
    [onValueRef]
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
