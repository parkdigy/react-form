import React from 'react';
import FormText from '../FormText';
import { FormUrlProps as Props, FormUrlDefaultProps } from './FormUrl.types';
import classNames from 'classnames';
import { FormValueItemBaseCommands } from '../../@types';

const FormUrl = React.forwardRef<FormValueItemBaseCommands, Props>(({ className, ...props }, ref) => {
  return <FormText ref={ref} className={classNames(className, 'FormUrl')} type='url' {...props} />;
});

FormUrl.displayName = 'FormUrl';
FormUrl.defaultProps = FormUrlDefaultProps;

export default FormUrl;
