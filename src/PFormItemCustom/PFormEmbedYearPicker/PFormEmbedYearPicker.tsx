import React from 'react';
import classNames from 'classnames';
import { PFormYearPickerInternal } from '../PFormYearPicker/PFormYearPicker';
import { type PFormEmbedYearPickerProps } from './PFormEmbedYearPicker.types';

const PFormEmbedYearPicker = ({ className, ...props }: PFormEmbedYearPickerProps) => (
  <PFormYearPickerInternal {...props} className={classNames(className, 'PFormEmbedYearPicker')} embedded />
);

export default PFormEmbedYearPicker;
