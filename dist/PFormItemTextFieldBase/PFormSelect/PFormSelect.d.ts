import React from 'react';
import { type PFormSelectProps, type PFormSelectSingleValue, type PFormSelectItems } from './PFormSelect.types';
import './PFormSelect.scss';
declare function PFormSelect<T extends PFormSelectSingleValue, Multiple extends boolean | undefined = undefined, Items extends PFormSelectItems<T> = PFormSelectItems<T>>({ ref, className, name, items: initItems, fullWidth: initFullWidth, onLoadItems, readOnly, multiple, checkbox, placeholder, startAdornment: initStartAdornment, value: initValue, slotProps: initSlotProps, formValueSeparator, formValueSort, width, minWidth, loading: initLoading, onChange, onValue, ...props }: PFormSelectProps<T, Multiple, Items>): React.JSX.Element;
export default PFormSelect;
