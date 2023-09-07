import React from 'react';
import classNames from 'classnames';
import FormTextField from '../FormTextField';
import { FormTextProps, FormTextDefaultProps, FormTextValue, FormTextCommands } from './FormText.types';

const FormText = React.forwardRef<FormTextCommands, FormTextProps>(({ className, ...props }, ref) => {
  return (
    <FormTextField<FormTextValue, false>
      ref={ref}
      className={classNames(className, 'FormText')}
      disableReturnKey
      {...props}
    />
  );
});

FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;

export default FormText;
