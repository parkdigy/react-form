import React from 'react';
import classNames from 'classnames';
import PFormTextField from '../PFormTextField';
import { type PFormTextareaProps as Props, type PFormTextareaValue } from './PFormTextarea.types';
import './PFormTextarea.scss';

const PFormTextarea = ({ className, clear = false, rows = 3, value = '', ...props }: Props) => {
  return (
    <PFormTextField<PFormTextareaValue, false>
      className={classNames(className, 'PFormTextarea')}
      clear={clear}
      rows={rows}
      value={value}
      {...props}
      multiline
    />
  );
};

export default PFormTextarea;
