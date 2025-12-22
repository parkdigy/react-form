import React, { useCallback } from 'react';
import PFormText from '../PFormText';
import classNames from 'classnames';
import { PFormTelProps as Props, PFormTelValue } from './PFormTel.types';
import { formatTelNo } from '@pdg/formatting';
import { useAutoUpdateRef } from '@pdg/react-hook';

const PFormTel = ({
  ref,
  className,
  onValue,
  validPattern = /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
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
    (value: PFormTelValue) => {
      const newValue = formatTelNo(value.replace(/[^0-9]/gi, ''));
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    },
    [onValueRef]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormText
      ref={ref}
      className={classNames(className, 'PFormTel')}
      onValue={handleValue}
      maxLength={13}
      validPattern={validPattern}
      {...props}
    />
  );
};

export default PFormTel;
