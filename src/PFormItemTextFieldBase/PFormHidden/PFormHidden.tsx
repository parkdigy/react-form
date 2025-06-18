import React from 'react';
import classNames from 'classnames';
import { PFormHiddenProps as Props, PFormHiddenCommands, PFormHiddenValue } from './PFormHidden.types';
import PFormTextField from '../PFormTextField';
import './PFormHidden.scss';

const PFormHidden = React.forwardRef<PFormHiddenCommands, Props>(({ className, ...props }, ref) => {
  return (
    <PFormTextField<PFormHiddenValue>
      ref={ref}
      className={classNames(className, 'PFormHidden')}
      type='hidden'
      variant='standard'
      {...props}
    />
  );
});

PFormHidden.displayName = 'PFormHidden';

export default PFormHidden;
