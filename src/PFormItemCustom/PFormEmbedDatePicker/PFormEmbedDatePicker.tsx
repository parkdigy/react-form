import React from 'react';
import classNames from 'classnames';
import { PFormDatePickerInternal } from '../PFormDatePicker/PFormDatePicker';
import { type PFormEmbedDatePickerProps } from './PFormEmbedDatePicker.types';

const PFormEmbedDatePicker = ({ className, ...props }: PFormEmbedDatePickerProps) => (
  <PFormDatePickerInternal {...props} className={classNames(className, 'PFormEmbedDatePicker')} embedded />
);

export default PFormEmbedDatePicker;
