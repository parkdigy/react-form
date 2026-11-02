import React from 'react';
import { type PrivateDateTimePickerProps as Props } from './PrivateDateTimePicker.types';
import './PrivateDateTimePicker.scss';
export declare const PrivateDateTimePickerInternal: ({ embedded, ref, variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, name, type, time, value: initValue, data: initData, label: initLabel, labelIcon, format: initFormat, formValueFormat: initFormValueFormat, required, readOnly, disabled: initDisabled, width, error: initError, helperText, minDate, maxDate, disableFuture, disablePast, exceptValue, icon, startAdornment, endAdornment, align, hours, minutes, seconds, minuteInterval, secondInterval, enableKeyboardInput, hidden: initHidden, showDaysOutsideCurrentMonth, onChange, onValidate, className, style: initStyle, sx, ...otherProps }: Props & {
    embedded?: boolean;
}) => React.JSX.Element;
declare const PrivateDateTimePicker: (props: Props) => React.JSX.Element;
export default PrivateDateTimePicker;
