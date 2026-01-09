import React from 'react';
import classNames from 'classnames';
import { type PFormHiddenProps as Props, type PFormHiddenValue } from './PFormHidden.types';
import PFormTextField from '../PFormTextField';
import './PFormHidden.scss';

const PFormHidden = ({ className, ...props }: Props) => {
  return (
    <PFormTextField<PFormHiddenValue>
      className={classNames(className, 'PFormHidden')}
      type='hidden'
      variant='standard'
      {...props}
    />
  );
};

export default PFormHidden;
