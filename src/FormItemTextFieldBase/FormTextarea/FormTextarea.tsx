import React from 'react';
import classNames from 'classnames';
import FormTextField from '../FormTextField';
import { FormTextareaProps as Props, FormTextareaDefaultProps } from './FormTextarea.types';
import { FormValueItemBaseCommands } from '../../@types';
import './FormTextarea.scss';

const FormTextarea = React.forwardRef<FormValueItemBaseCommands, Props>(({ className, ...props }, ref) => {
  return <FormTextField ref={ref} className={classNames(className, 'FormTextarea')} {...props} multiline />;
});

FormTextarea.displayName = 'FormTextarea';
FormTextarea.defaultProps = FormTextareaDefaultProps;

export default FormTextarea;
