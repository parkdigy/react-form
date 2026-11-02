import React from 'react';
import classNames from 'classnames';
import { PFormYearRangePickerInternal } from '../PFormYearRangePicker/PFormYearRangePicker';
import { type PFormEmbedYearRangePickerProps } from './PFormEmbedYearRangePicker.types';

const PFormEmbedYearRangePicker = ({ className, ...props }: PFormEmbedYearRangePickerProps) => (
  <PFormYearRangePickerInternal {...props} className={classNames(className, 'PFormEmbedYearRangePicker')} embedded />
);

export default PFormEmbedYearRangePicker;
