import React from 'react';
import classNames from 'classnames';
import PFormTextField from '../PFormTextField';
import { PFormTextProps, PFormTextValue, PFormTextCommands } from './PFormText.types';

const PFormText = React.forwardRef<PFormTextCommands, PFormTextProps>(
  ({ className, clear = true, value = '', ...props }, ref) => {
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
  }
);

PFormText.displayName = 'PFormText';

export default PFormText;
