import React from 'react';
import classNames from 'classnames';
import { PFormMonthRangePickerInternal } from '../PFormMonthRangePicker/PFormMonthRangePicker';
import { type PFormEmbedMonthRangePickerProps } from './PFormEmbedMonthRangePicker.types';

const PFormEmbedMonthRangePicker = ({ className, ...props }: PFormEmbedMonthRangePickerProps) => (
  <PFormMonthRangePickerInternal {...props} className={classNames(className, 'PFormEmbedMonthRangePicker')} embedded />
);

export default PFormEmbedMonthRangePicker;
