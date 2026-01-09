import React from 'react';
import { type PrivateStaticDatePickerProps as Props } from './PrivateStaticDatePicker.types';
import './PrivateStaticDatePicker.scss';
declare const PrivateStaticDatePicker: ({ ref, value, availableDate: initAvailableDate, type, time, hours, minutes, seconds, minuteInterval, secondInterval, minDate, maxDate, disablePast, disableFuture, onChange, onMonthChange, onClose, ...props }: Props) => React.JSX.Element;
export default PrivateStaticDatePicker;
