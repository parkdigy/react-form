import React from 'react';
import classNames from 'classnames';
import PFormText from '../PFormText';
import { PFormSearchProps as Props, PFormPSearchCommands } from './PFormSearch.types';
import './PFormSearch.scss';

const PFormSearch = React.forwardRef<PFormPSearchCommands, Props>(({ className, ...props }, ref) => {
  return <PFormText className={classNames(className, 'PFormSearch')} ref={ref} type='search' {...props} />;
});

PFormSearch.displayName = 'PFormSearch';

export default PFormSearch;
