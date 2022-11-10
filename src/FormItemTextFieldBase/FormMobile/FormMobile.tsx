import React from 'react';
import classNames from 'classnames';
import FormTel from '../FormTel';
import { FormMobileProps as Props, FormMobileDefaultProps } from './FormMobile.types';
import { FormValueItemBaseCommands } from '../../@types';

const FormMobile = React.forwardRef<FormValueItemBaseCommands, Props>(({ className, ...props }, ref) => {
  return <FormTel ref={ref} className={classNames(className, 'FormMobile')} {...props} />;
});

FormMobile.displayName = 'FormMobile';
FormMobile.defaultProps = FormMobileDefaultProps;

export default FormMobile;
