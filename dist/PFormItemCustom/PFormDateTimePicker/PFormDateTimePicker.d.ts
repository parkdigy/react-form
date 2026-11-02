import React from 'react';
import { type PFormDateTimePickerProps as Props } from './PFormDateTimePicker.types';
export declare const PFormDateTimePickerInternal: ({ embedded, ref, className, time, minDate: initMinDate, maxDate: initMaxDate, disablePast, disableFuture, ...props }: Props & {
    embedded?: boolean;
}) => React.JSX.Element;
declare const PFormDateTimePicker: (props: Props) => React.JSX.Element;
export default PFormDateTimePicker;
