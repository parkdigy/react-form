import React from 'react';
import classNames from 'classnames';
import FormText from '../FormText';
import { FormEmailProps, FormEmailDefaultProps } from './FormEmail.types';
import { FormValueItemBaseCommands } from '../../@types';

const FormEmail = React.forwardRef<FormValueItemBaseCommands, FormEmailProps>(({ className, ...props }, ref) => {
  return <FormText ref={ref} className={classNames(className, 'FormEmail')} type='email' {...props} />;
});

FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;

export default FormEmail;
