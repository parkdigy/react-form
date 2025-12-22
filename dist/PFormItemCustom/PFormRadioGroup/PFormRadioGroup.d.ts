import React from 'react';
import { PFormRadioGroupProps, PFormRadioGroupSingleValue, PFormRadioGroupItems } from './PFormRadioGroup.types';
declare function PFormRadioGroup<BaseValue extends PFormRadioGroupSingleValue, Items extends PFormRadioGroupItems<BaseValue> = PFormRadioGroupItems<BaseValue>>({ ref, 
/********************************************************************************************************************/
variant: initVariant, size: initSize, color: initColor, focused: initFocused, fullWidth: initFullWidth, hidden: initHidden, startAdornment, endAdornment, 
/********************************************************************************************************************/
name, width: initWidth, labelIcon, label, inline, loading: initLoading, nowrap, items: initItems, value: initValue, data: initData, error: initError, helperText, disabled: initDisabled, readOnly, required, exceptValue, onLoadItems, onChange, onValue, onValidate, 
/********************************************************************************************************************/
className, style: initStyle, sx, 
/********************************************************************************************************************/
...props }: PFormRadioGroupProps<BaseValue, Items>): React.JSX.Element;
export default PFormRadioGroup;
