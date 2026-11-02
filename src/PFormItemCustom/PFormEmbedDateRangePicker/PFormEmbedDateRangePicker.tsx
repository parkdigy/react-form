import React from 'react';
import classNames from 'classnames';
import { PFormDateRangePickerInternal } from '../PFormDateRangePicker/PFormDateRangePicker';
import { type PFormEmbedDateRangePickerProps } from './PFormEmbedDateRangePicker.types';

const PFormEmbedDateRangePicker = ({ className, ...props }: PFormEmbedDateRangePickerProps) => (
  <PFormDateRangePickerInternal {...props} className={classNames(className, 'PFormEmbedDateRangePicker')} embedded />
);

export default PFormEmbedDateRangePicker;
