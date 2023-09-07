import React from 'react';
import classNames from 'classnames';
import FormTextField from '../FormTextField';
import {
  FormTextareaProps as Props,
  FormTextareaDefaultProps,
  FormTextareaCommands,
  FormTextareaValue,
} from './FormTextarea.types';
import './FormTextarea.scss';

const FormTextarea = React.forwardRef<FormTextareaCommands, Props>(({ className, ...props }, ref) => {
  return (
    <FormTextField<FormTextareaValue, false>
      ref={ref}
      className={classNames(className, 'FormTextarea')}
      {...props}
      multiline
    />
  );
});

FormTextarea.displayName = 'FormTextarea';
FormTextarea.defaultProps = FormTextareaDefaultProps;

export default FormTextarea;
