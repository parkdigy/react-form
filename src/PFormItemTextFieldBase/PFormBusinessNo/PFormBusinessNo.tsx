import React, { useCallback } from 'react';
import PFormText from '../PFormText';
import classNames from 'classnames';
import { PFormBusinessNoProps as Props, PFormBusinessNoValue } from './PFormBusinessNo.types';
import { formatBusinessNo } from '@pdg/formatting';
import { useAutoUpdateRef } from '@pdg/react-hook';

const PFormBusinessNo = ({
  className,
  validPattern = /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/,
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
    (value: PFormBusinessNoValue) => {
      const newValue = formatBusinessNo(value.replace(/[^0-9]/gi, ''));
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    },
    [onValueRef]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormText
      className={classNames(className, 'PFormBusinessNo')}
      maxLength={12}
      validPattern={validPattern}
      onValue={handleValue}
      {...props}
    />
  );
};

export default PFormBusinessNo;
