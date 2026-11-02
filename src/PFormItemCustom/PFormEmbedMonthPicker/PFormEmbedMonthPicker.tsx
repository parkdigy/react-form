import React from 'react';
import { PFormMonthPickerInternal } from '../PFormMonthPicker/PFormMonthPicker';
import { type PFormEmbedMonthPickerProps } from './PFormEmbedMonthPicker.types';

const PFormEmbedMonthPicker = (props: PFormEmbedMonthPickerProps) => <PFormMonthPickerInternal {...props} embedded />;

export default PFormEmbedMonthPicker;
