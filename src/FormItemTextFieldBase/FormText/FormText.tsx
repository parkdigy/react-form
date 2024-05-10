import React from 'react';
import classNames from 'classnames';
import FormTextField from '../FormTextField';
import { FormTextProps, FormTextValue, FormTextCommands } from './FormText.types';

const FormText = React.forwardRef<FormTextCommands, FormTextProps>(
  ({ className, clear = true, value = '', ...props }, ref) => {
    return (
      <FormTextField<FormTextValue, false>
        ref={ref}
        className={classNames(className, 'FormText')}
        clear={clear}
        value={value}
        disableReturnKey
        {...props}
      />
    );
  }
);

FormText.displayName = 'FormText';

export default FormText;
