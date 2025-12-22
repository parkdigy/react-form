import React, { useCallback } from 'react';
import PFormText from '../PFormText';
import { PFormUrlProps as Props, PFormUrlValue } from './PFormUrl.types';
import classNames from 'classnames';
import { useAutoUpdateRef } from '@pdg/react-hook';

const PFormUrl = ({
  className,
  validPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim,
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
    (value: PFormUrlValue) => {
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
      className={classNames(className, 'PFormUrl')}
      type='url'
      validPattern={validPattern}
      onValue={handleValue}
      {...props}
    />
  );
};

export default PFormUrl;
