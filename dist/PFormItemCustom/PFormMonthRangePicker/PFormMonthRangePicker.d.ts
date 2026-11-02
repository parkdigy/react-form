import React from 'react';
import { type PFormMonthRangePickerProps as Props } from './PFormMonthRangePicker.types';
import 'dayjs/locale/ko';
export declare const PFormMonthRangePickerInternal: ({ embedded, ref, variant: initVariant, size: initSize, color: initColor, focused: initFocused, hidden: initHidden, name, fromLabel, fromLabelIcon, toLabel, toLabelIcon, readOnly, required, fullWidth: initFullWidth, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, icon, format, labelShrink: initLabelShrink, disablePast, disableFuture, minValue, maxValue, inputWidth, enableKeyboardInput, startAdornment, endAdornment, formValueFromYearNameSuffix, formValueFromMonthNameSuffix, formValueToYearNameSuffix, formValueToMonthNameSuffix, align, className, style: initStyle, sx, }: Props & {
    embedded?: boolean;
}) => React.JSX.Element;
declare const PFormMonthRangePicker: (props: Props) => React.JSX.Element;
export default PFormMonthRangePicker;
