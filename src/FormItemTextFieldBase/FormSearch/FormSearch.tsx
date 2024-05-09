import React from 'react';
import classNames from 'classnames';
import FormText from '../FormText';
import { FormSearchProps as Props, FormSearchCommands } from './FormSearch.types';
import './FormSearch.scss';

const FormSearch = React.forwardRef<FormSearchCommands, Props>(({ className, ...props }, ref) => {
  return <FormText className={classNames(className, 'FormSearch')} ref={ref} type='search' {...props} />;
});

export default FormSearch;
