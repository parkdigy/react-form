import React from 'react';
import classNames from 'classnames';
import PFormTextField from '../PFormTextField';
import { PFormTextareaProps as Props, PFormTextareaValue } from './PFormTextarea.types';
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
