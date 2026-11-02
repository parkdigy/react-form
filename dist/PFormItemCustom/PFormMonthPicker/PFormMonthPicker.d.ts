import React from 'react';
import { type PFormMonthPickerProps as Props } from './PFormMonthPicker.types';
import 'dayjs/locale/ko';
export declare const PFormMonthPickerInternal: ({ embedded, ref, variant: initVariant, size: initSize, color: initColor, focused: initFocused, hidden: initHidden, name, labelIcon, label, readOnly, required, fullWidth: initFullWidth, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, icon, format, labelShrink: initLabelShrink, disablePast, disableFuture, minValue, maxValue, inputWidth, enableKeyboardInput, startAdornment, endAdornment, formValueYearNameSuffix, formValueMonthNameSuffix, className, style: initStyle, sx, }: Props & {
    embedded?: boolean;
}) => React.JSX.Element;
declare const PFormMonthPicker: (props: Props) => React.JSX.Element;
export default PFormMonthPicker;
