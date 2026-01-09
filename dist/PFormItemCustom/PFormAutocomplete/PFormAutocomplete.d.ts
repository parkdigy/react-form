import React from 'react';
import { type PFormAutocompleteProps, type PFormAutocompleteSingleValue, type PFormAutocompleteItems } from './PFormAutocomplete.types';
declare function PFormAutocomplete<T extends PFormAutocompleteSingleValue, Multiple extends boolean | undefined = undefined, Items extends PFormAutocompleteItems<T> = PFormAutocompleteItems<T>>({ ref, 
/********************************************************************************************************************/
variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
/********************************************************************************************************************/
name, labelIcon, label, loading: initLoading, items: initItems, value: initValue, data: initData, error: initError, helperText, disabled: initDisabled, readOnly, required, exceptValue, width, placeholder, multiple, formValueSeparator, formValueSort, disablePortal, noOptionsText, loadingText, limitTags, getLimitTagsText, openOnFocus, disableClearable, async, autoFocus, hidden: initHidden, onLoadItems, onAsyncLoadValueItem, onRenderItem, onRenderTag, onRenderValue, onGetDisplayValue, onAddItem, getOptionDisabled, 
/********************************************************************************************************************/
onChange, onValue, onValidate, onFocus, onBlur, 
/********************************************************************************************************************/
className, style: initStyle, sx, }: PFormAutocompleteProps<T, Multiple, Items>): React.JSX.Element;
export default PFormAutocomplete;
