import React from 'react';
import classNames from 'classnames';
import { PFormTimePickerInternal } from '../PFormTimePicker/PFormTimePicker';
import { type PFormEmbedTimePickerProps } from './PFormEmbedTimePicker.types';

const PFormEmbedTimePicker = ({ className, ...props }: PFormEmbedTimePickerProps) => (
  <PFormTimePickerInternal {...props} className={classNames(className, 'PFormEmbedTimePicker')} embedded />
);

export default PFormEmbedTimePicker;
