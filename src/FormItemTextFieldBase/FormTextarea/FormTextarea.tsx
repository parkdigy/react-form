import React from 'react';
import classNames from 'classnames';
import FormTextField from '../FormTextField';
import { FormTextareaProps as Props, FormTextareaCommands, FormTextareaValue } from './FormTextarea.types';
import './FormTextarea.scss';

const FormTextarea = React.forwardRef<FormTextareaCommands, Props>(
  ({ className, clear = false, rows = 3, value = '', ...props }, ref) => {
    return (
      <FormTextField<FormTextareaValue, false>
        ref={ref}
        className={classNames(className, 'FormTextarea')}
        clear={clear}
        rows={rows}
        value={value}
        {...props}
        multiline
      />
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
