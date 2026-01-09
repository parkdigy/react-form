import React from 'react';
import classNames from 'classnames';
import PFormText from '../PFormText';
import { type PFormSearchProps as Props } from './PFormSearch.types';
import './PFormSearch.scss';

const PFormSearch = ({ className, ...props }: Props) => {
  return <PFormText className={classNames(className, 'PFormSearch')} type='search' {...props} />;
};

export default PFormSearch;
