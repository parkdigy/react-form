import React from 'react';
import classNames from 'classnames';
import FormText from '../FormText';
import { FormSearchProps as Props, FormSearchDefaultProps, FormSearchCommands } from './FormSearch.types';
import './FormSearch.scss';

const FormSearch = React.forwardRef<FormSearchCommands, Props>(({ className, ...props }, ref) => {
  return <FormText className={classNames(className, 'FormSearch')} ref={ref} type='search' {...props} />;
});

FormSearch.displayName = 'FormSearch';
FormSearch.defaultProps = FormSearchDefaultProps;

export default FormSearch;
