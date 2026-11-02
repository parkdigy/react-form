import React from 'react';
import classNames from 'classnames';
import { PFormDateTimePickerInternal } from '../PFormDateTimePicker/PFormDateTimePicker';
import { type PFormEmbedDateTimePickerProps } from './PFormEmbedDateTimePicker.types';

const PFormEmbedDateTimePicker = ({ className, ...props }: PFormEmbedDateTimePickerProps) => (
  <PFormDateTimePickerInternal {...props} className={classNames(className, 'PFormEmbedDateTimePicker')} embedded />
);

export default PFormEmbedDateTimePicker;
