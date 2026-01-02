import React from 'react';
import { PFormTextFieldProps, PFormTextFieldValue } from './PFormTextField.types';
import './PFormTextField.scss';
declare function PFormTextField<T = PFormTextFieldValue, AllowUndefinedValue extends boolean = true>({ ref, 
/********************************************************************************************************************/
variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, submitWhenReturnKey: initSubmitWhenReturnKey, 
/********************************************************************************************************************/
name, required, value: initValue, data: initData, icon, labelIcon, label: initLabel, error: initError, helperText, errorHelperText: initErrorHelperText, exceptValue, readOnly, tabIndex, disabled: initDisabled, placeholder, maxLength, clear, width, slotProps: initSlotProps, inputRef: initInputRef, select, multiline, validPattern, invalidPattern, startAdornment, endAdornment, noFormValueItem, noValidationCheck, hidden: initHidden, disableReturnKey, defaultRequiredErrorHelperText, defaultPatternErrorHelperText, 
/********************************************************************************************************************/
onChange, onValue, onValidate, onBlur, onKeyDown, 
/********************************************************************************************************************/
className, style: initStyle, 
/********************************************************************************************************************/
...props }: PFormTextFieldProps<T, AllowUndefinedValue>): React.JSX.Element;
export default PFormTextField;
