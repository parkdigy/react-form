import React from 'react';
import { type PFormYearRangePickerProps as Props } from './PFormYearRangePicker.types';
export declare const PFormYearRangePickerInternal: ({ embedded, ref, variant: initVariant, size: initSize, color: initColor, focused: initFocused, hidden: initHidden, name, fromLabel, fromLabelIcon, toLabel, toLabelIcon, readOnly, required, fullWidth: initFullWidth, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, icon, format, labelShrink: initLabelShrink, disablePast, disableFuture, minYear, maxYear, inputWidth, enableKeyboardInput, startAdornment, endAdornment, formValueFromNameSuffix, formValueToNameSuffix, align, className, style: initStyle, sx, }: Props & {
    embedded?: boolean;
}) => React.JSX.Element;
declare const PFormYearRangePicker: (props: Props) => React.JSX.Element;
export default PFormYearRangePicker;
