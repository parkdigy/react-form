import React from 'react';
import classNames from 'classnames';
import PFormTextField from '../PFormTextField';
import { PFormTextareaProps as Props, PFormTextareaCommands, PFormTextareaValue } from './PFormTextarea.types';
import './PFormTextarea.scss';

const PFormTextarea = React.forwardRef<PFormTextareaCommands, Props>(
  ({ className, clear = false, rows = 3, value = '', ...props }, ref) => {
    return (
      <PFormTextField<PFormTextareaValue, false>
        ref={ref}
        className={classNames(className, 'PFormTextarea')}
        clear={clear}
        rows={rows}
        value={value}
        {...props}
        multiline
      />
    );
  }
);

PFormTextarea.displayName = 'PFormTextarea';

export default PFormTextarea;
