import React from 'react';
import classNames from 'classnames';
import PFormTextField from '../PFormTextField';
import { type PFormTextProps as Props, type PFormTextValue } from './PFormText.types';

const PFormText = ({ ref, className, clear = true, value = '', ...props }: Props) => {
  return (
    <PFormTextField<PFormTextValue, false>
      ref={ref}
      className={classNames(className, 'PFormText')}
      clear={clear}
      value={value}
      disableReturnKey
      {...props}
    />
  );
};

export default PFormText;
