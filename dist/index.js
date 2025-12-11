'use strict';var React=require('react'),classNames=require('classnames'),material=require('@mui/material'),compare=require('@pdg/compare'),dayjs=require('dayjs'),reactHook=require('@pdg/react-hook'),reactComponent=require('@pdg/react-component'),reactResizeDetector=require('react-resize-detector'),formatting=require('@pdg/formatting'),reactNumberFormat=require('react-number-format'),iconsMaterial=require('@mui/icons-material'),tinymceReact=require('@tinymce/tinymce-react'),xDatePickers=require('@mui/x-date-pickers'),SimpleBar=require('simplebar-react');function insertStyle(css) {
    if (!css || typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}");const PFormContextDefaultValue = {
    id: 'init',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    spacing: 2,
    formColGap: 1.5,
    focused: false,
    labelShrink: false,
    onAddValueItem: () => { },
    onRemoveValueItem: () => { },
    onValueChange: () => { },
    onValueChangeByUser: () => { },
    onRequestSubmit: () => { },
    onRequestSearchSubmit: () => { },
};const PFormContext = React.createContext(PFormContextDefaultValue);function useFormState() {
    const value = React.useContext(PFormContext);
    if (value === undefined) {
        throw new Error('useFormState should be used within FormContext.Provider');
    }
    return value;
}function PFormContextProvider({ children, value, }) {
    return React.createElement(PFormContext.Provider, { value: value }, children);
}/********************************************************************************************************************
 * getItemFormValue
 * ******************************************************************************************************************/
const getItemFormValue = (commands, reset) => {
    const type = commands.getType();
    let value;
    switch (type) {
        case 'PFormCheckbox':
            {
                const itemCommands = commands;
                const checked = reset ? itemCommands.getReset() : itemCommands.getChecked();
                value = checked ? itemCommands.getValue() : itemCommands.getUncheckedValue();
            }
            break;
        case 'PFormDatePicker':
        case 'PFormDateTimePicker':
        case 'PFormTimePicker':
            {
                value = reset ? commands.getReset() : commands.getValue();
                if (value) {
                    value = dayjs(value).format(commands.getFormValueFormat());
                }
            }
            break;
        default:
            value = reset ? commands.getReset() : commands.getValue();
    }
    switch (type) {
        case 'PFormDateRangePicker':
            {
                const startValue = value[0];
                const endValue = value[1];
                const format = commands.getFormValueFormat();
                value = [startValue ? startValue.format(format) : '', endValue ? endValue.format(format) : ''];
            }
            break;
        case 'PFormYearRangePicker':
            {
                const startValue = value[0];
                const endValue = value[1];
                value = [startValue ? startValue : '', endValue ? endValue : ''];
            }
            break;
        case 'PFormMonthPicker':
            value = { year: value ? value.year : '', month: value ? value.month : '' };
            break;
        case 'PFormMonthRangePicker':
            {
                const startValue = value[0];
                const endValue = value[1];
                value = [startValue ? startValue : { year: '', month: '' }, endValue ? endValue : { year: '', month: '' }];
            }
            break;
        default:
            if (compare.empty(value)) {
                value = '';
            }
            else if (Array.isArray(value)) {
                if (commands.isFormValueSort && commands.isFormValueSort()) {
                    value = [...value];
                    value.sort();
                }
                value = value.join(commands.getFormValueSeparator ? commands.getFormValueSeparator() : ',');
            }
            break;
    }
    return value;
};
/********************************************************************************************************************
 * appendFormValueData
 * ******************************************************************************************************************/
const appendFormValueData = (data, itemCommands) => {
    switch (itemCommands.getType()) {
        case 'PFormDateRangePicker':
            {
                const commands = itemCommands;
                const value = getItemFormValue(itemCommands);
                data[commands.getFormValueFromName()] = value[0];
                data[commands.getFormValueToName()] = value[1];
            }
            break;
        case 'PFormMonthPicker':
            {
                const commands = itemCommands;
                const value = getItemFormValue(itemCommands);
                data[commands.getFormValueYearName()] = value.year;
                data[commands.getFormValueMonthName()] = value.month;
            }
            break;
        case 'PFormYearRangePicker':
            {
                const commands = itemCommands;
                const value = getItemFormValue(itemCommands);
                data[commands.getFormValueFromName()] = value[0];
                data[commands.getFormValueToName()] = value[1];
            }
            break;
        case 'PFormMonthRangePicker':
            {
                const commands = itemCommands;
                const value = getItemFormValue(itemCommands);
                data[commands.getFormValueFromYearName()] = value[0].year;
                data[commands.getFormValueFromMonthName()] = value[0].month;
                data[commands.getFormValueToYearName()] = value[1].year;
                data[commands.getFormValueToMonthName()] = value[1].month;
            }
            break;
        default:
            {
                const name = itemCommands.getName();
                const value = getItemFormValue(itemCommands);
                data[name] = value == null ? '' : value;
            }
            break;
    }
};const PForm = React.forwardRef(({ className, children, style: initStyle, sx, 
//--------------------------------------------------------------------------------------------------------------------
variant: initVariant = 'outlined', size: initSize = 'medium', color: initColor = 'primary', spacing: initSpacing = 2, formColGap: initFormColGap = 1.5, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, fullHeight: initFullHeight, disabled: initDisabled, submitWhenReturnKey: initSubmitWhenReturnKey, 
//----------------------------------------------------------------------------------------------------------------
onSubmit: initOnSubmit, onInvalid: initOnValid, onValueChange: initOnValueChange, onValueChangeByUser: initOnValueChangeByUser, }, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { id: formId, variant: formVariant, size: formSize, color: formColor, disabled: formDisabled, submitWhenReturnKey: formSubmitWhenReturnKey, spacing: formSpacing, formColGap: formFormColGap, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, fullHeight: formFullHeight, formColAutoXs, formColWidth, onAddFormCol, onRemoveFormCol, formColXs, formColWithLabel, formColWithHelperText, onAddValueItem: formAddValueItem, onRemoveValueItem: formRemoveValueItem, onValueChange: formValueChange, onValueChangeByUser: formValueChangeByUser, onRequestSubmit: formRequestSubmit, onRequestSearchSubmit: formRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const spacing = compare.ifUndefined(initSpacing, formSpacing);
    const formColGap = compare.ifUndefined(initFormColGap, formFormColGap);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(compare.ifUndefined(initFullWidth, formFullWidth), true);
    const fullHeight = compare.ifUndefined(compare.ifUndefined(initFullHeight, formFullHeight), false);
    const disabled = compare.ifUndefined(compare.ifUndefined(initDisabled, formDisabled), false);
    const submitWhenReturnKey = compare.ifUndefined(compare.ifUndefined(initSubmitWhenReturnKey, formSubmitWhenReturnKey), false);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const formRef = React.useRef(null);
    const valueItems = React.useRef({});
    const onSubmitRef = reactHook.useAutoUpdateLayoutRef(initOnSubmit);
    const onInvalidRef = reactHook.useAutoUpdateLayoutRef(initOnValid);
    const onValueChangeRef = reactHook.useAutoUpdateLayoutRef(initOnValueChange);
    const onValueChangeByUserRef = reactHook.useAutoUpdateLayoutRef(initOnValueChangeByUser);
    /********************************************************************************************************************
     * Function - submit
     * ******************************************************************************************************************/
    const submit = React.useCallback(() => {
        let isAllValid = true;
        let firstInvalidItemId;
        const data = {};
        const invalidItems = [];
        Object.keys(valueItems.current).forEach((id) => {
            const itemCommands = valueItems.current[id];
            if (itemCommands) {
                if (!itemCommands.isDisabled()) {
                    if (itemCommands.validate()) {
                        if (!itemCommands.isExceptValue()) {
                            appendFormValueData(data, itemCommands);
                        }
                    }
                    else {
                        invalidItems.push({ name: itemCommands.getName(), commands: itemCommands });
                        if (isAllValid) {
                            isAllValid = false;
                            firstInvalidItemId = id;
                        }
                    }
                }
            }
        });
        if (isAllValid) {
            onSubmitRef.current && onSubmitRef.current(data);
        }
        else {
            onInvalidRef.current && onInvalidRef.current(invalidItems);
            setTimeout(() => {
                var _a;
                (_a = valueItems.current[firstInvalidItemId]) === null || _a === void 0 ? void 0 : _a.focusValidate();
            });
        }
    }, [onSubmitRef, onInvalidRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => {
        const findValueItem = function (name) {
            return Object.values(valueItems.current).find((commands) => {
                if (commands) {
                    if (commands.getName() === name) {
                        return true;
                    }
                    switch (commands.getType()) {
                        case 'PFormDateRangePicker':
                        case 'PFormYearRangePicker':
                            return (name === commands.getFormValueFromName() ||
                                name === commands.getFormValueToName());
                        case 'PFormMonthPicker':
                            return (name === commands.getFormValueYearName() ||
                                name === commands.getFormValueMonthName());
                        case 'PFormMonthRangePicker':
                            return (name === commands.getFormValueFromYearName() ||
                                name === commands.getFormValueFromMonthName() ||
                                name === commands.getFormValueToYearName() ||
                                name === commands.getFormValueToMonthName());
                    }
                }
            });
        };
        const getFormValue = (name, subKey, isReset) => {
            const valueItem = findValueItem(name);
            if (valueItem) {
                switch (valueItem.getType()) {
                    case 'PFormDateRangePicker':
                    case 'PFormYearRangePicker': {
                        const commands = valueItem;
                        const value = getItemFormValue(valueItem, !!isReset);
                        if (compare.notEmpty(subKey)) {
                            if (subKey === commands.getFormValueFromNameSuffix()) {
                                return value[0];
                            }
                            else if (subKey === commands.getFormValueToNameSuffix()) {
                                return value[1];
                            }
                            else {
                                throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 subKey 값을 찾을 수 없습니다.`);
                            }
                        }
                        else {
                            throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 값을 가져오려면 subKey 를 지정해야 합니다.`);
                        }
                    }
                    case 'PFormMonthPicker': {
                        const commands = valueItem;
                        const value = getItemFormValue(valueItem, !!isReset);
                        if (compare.notEmpty(subKey)) {
                            if (subKey === commands.getFormValueYearNameSuffix()) {
                                return value.year;
                            }
                            else if (subKey === commands.getFormValueMonthNameSuffix()) {
                                return value.month;
                            }
                            else {
                                throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 subKey 값을 찾을 수 없습니다.`);
                            }
                        }
                        else {
                            throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 값을 가져오려면 subKey 를 지정해야 합니다.`);
                        }
                    }
                    case 'PFormMonthRangePicker': {
                        const commands = valueItem;
                        const value = getItemFormValue(valueItem, !!isReset);
                        if (compare.notEmpty(subKey)) {
                            if (subKey === commands.getFormValueFromYearNameSuffix()) {
                                return value[0].year;
                            }
                            else if (subKey === commands.getFormValueFromMonthNameSuffix()) {
                                return value[0].month;
                            }
                            else if (subKey === commands.getFormValueToYearNameSuffix()) {
                                return value[1].year;
                            }
                            else if (subKey === commands.getFormValueToMonthNameSuffix()) {
                                return value[1].month;
                            }
                            else {
                                throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 subKey 값을 찾을 수 없습니다.`);
                            }
                        }
                        else {
                            throw new Error(`Form::getFormReset - ${valueItem.getType()} 의 값을 가져오려면 subKey 를 지정해야 합니다.`);
                        }
                    }
                    default:
                        return getItemFormValue(valueItem, !!isReset);
                }
            }
            else
                throw new Error(`'${name}' 이 존재하지 않습니다.`);
        };
        return {
            submit,
            getAllFormValue: () => {
                const data = {};
                Object.keys(valueItems.current).forEach((id) => {
                    const itemCommands = valueItems.current[id];
                    if (itemCommands) {
                        if (!itemCommands.isDisabled() && !itemCommands.isExceptValue()) {
                            appendFormValueData(data, itemCommands);
                        }
                    }
                });
                return data;
            },
            resetAll: () => {
                Object.keys(valueItems.current).forEach((id) => {
                    var _a;
                    (_a = valueItems.current[id]) === null || _a === void 0 ? void 0 : _a.reset();
                });
            },
            getItem(name) {
                return findValueItem(name);
            },
            exists(name) {
                return !!findValueItem(name);
            },
            getReset(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.getReset();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            getFormReset(name, subKey) {
                return getFormValue(name, subKey, true);
            },
            reset(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.reset();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            getValue(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.getValue();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            getFormValue(name, subKey) {
                return getFormValue(name, subKey, false);
            },
            setValue(name, value) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setValue(value);
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            isExceptValue(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.isExceptValue();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            isDisabled(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.isDisabled();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            setDisabled(name, disabled) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setDisabled(disabled);
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            isHidden(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.isHidden();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            setHidden(name, hidden) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setHidden(hidden);
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            focus(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.focus();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            validate(name) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.validate();
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
            setError(name, error, helperText) {
                const valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setError(error, helperText);
                else
                    throw new Error(`'${name}' 이 존재하지 않습니다.`);
            },
        };
    }, [submit]);
    reactHook.useForwardLayoutRef(ref, commands);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleSubmit = React.useCallback((e) => {
        e.preventDefault();
        if (!disabled) {
            submit();
        }
    }, [disabled, submit]);
    /********************************************************************************************************************
     * FormContextValue
     * ******************************************************************************************************************/
    const formContextValue = React.useMemo(() => ({
        id: formId || 'form',
        variant,
        size,
        color,
        spacing,
        formColGap,
        focused,
        labelShrink,
        fullWidth,
        fullHeight,
        disabled,
        submitWhenReturnKey,
        onAddValueItem(id, item) {
            valueItems.current[id] = item;
            if (formAddValueItem)
                formAddValueItem(id, item);
        },
        onRemoveValueItem(id) {
            valueItems.current[id] = undefined;
            if (formRemoveValueItem)
                formRemoveValueItem(id);
        },
        onValueChange(name, value) {
            if (onValueChangeRef.current)
                onValueChangeRef.current(name, value);
            if (formValueChange)
                formValueChange(name, value);
        },
        onValueChangeByUser(name, value) {
            if (onValueChangeByUserRef.current)
                onValueChangeByUserRef.current(name, value);
            if (formValueChangeByUser)
                formValueChangeByUser(name, value);
        },
        onRequestSubmit(name, value) {
            if (!disabled)
                submit();
            if (formRequestSubmit)
                formRequestSubmit(name, value);
        },
        onRequestSearchSubmit: formRequestSearchSubmit,
        formColAutoXs,
        formColWidth,
        onAddFormCol,
        onRemoveFormCol,
        formColXs,
        formColWithLabel,
        formColWithHelperText,
    }), [
        formId,
        variant,
        size,
        color,
        spacing,
        formColGap,
        focused,
        labelShrink,
        fullWidth,
        fullHeight,
        disabled,
        submitWhenReturnKey,
        formRequestSearchSubmit,
        formColAutoXs,
        formColWidth,
        onAddFormCol,
        onRemoveFormCol,
        formColXs,
        formColWithLabel,
        formColWithHelperText,
        formAddValueItem,
        formRemoveValueItem,
        onValueChangeRef,
        formValueChange,
        onValueChangeByUserRef,
        formValueChangeByUser,
        submit,
        formRequestSubmit,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: formContextValue },
        React.createElement(material.Box, { className: classNames('PForm', `PForm-variant-${variant}`, fullHeight && 'full-height', className), component: 'form', ref: formRef, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit, style: fullHeight ? Object.assign(Object.assign({}, initStyle), { flex: 1, height: '100%' }) : initStyle, sx: sx },
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: fullHeight ? '100%' : undefined,
                } }, children))));
});/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};const PFormButton = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var { size: initSize, color: initColor, variant: initVariant, fullWidth: initFullWidth, className, type = 'button', onClick } = _a, props = __rest(_a, ["size", "color", "variant", "fullWidth", "className", "type", "onClick"]);
    const { size: formSize, color: formColor, fullWidth: formFullWidth } = useFormState();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(reactComponent.PButton, Object.assign({ ref: ref, className: classNames(className, 'PFormButton'), type: type, variant: initVariant ? initVariant : type === 'submit' ? 'contained' : 'outlined', size: size, color: color, fullWidth: fullWidth, onClick: onClick }, props)));
});
var PFormButton$1 = React.memo(PFormButton);const IconPIcon = material.styled(reactComponent.PIcon) `
  vertical-align: middle;
  margin-right: 3px;
  margin-top: -4px;
  margin-bottom: -2px;
`;
const ChildrenSpan = material.styled('span') `
  vertical-align: middle;
`;const PFormLabel = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var { children, icon, size, style, error, warning } = _a, props = __rest(_a, ["children", "icon", "size", "style", "error", "warning"]);
    const theme = material.useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const newStyle = Object.assign({ height: 20, transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined }, style);
    if (!error) {
        newStyle.color = warning ? theme.palette.warning.main : style === null || style === void 0 ? void 0 : style.color;
    }
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.InputLabel, Object.assign({ ref: ref, shrink: true, className: 'PFormItemBase-InputLabel', size: size, error: error, style: newStyle }, props), icon ? (React.createElement(React.Fragment, null,
        React.createElement(IconPIcon, null, icon),
        React.createElement(ChildrenSpan, null, children))) : (children)));
});
var PFormLabel$1 = React.memo(PFormLabel);const StyledLineBox = material.styled(material.Box) `
  border-bottom: thin solid #dfdfdf;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
`;
const StyledErrorLineBox = material.styled(material.Box)(({ theme }) => ({
    borderBottom: `thin solid ${theme.palette.error.main}`,
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    opacity: 0.4,
}));
const StyledWarningLineBox = material.styled(material.Box)(({ theme }) => ({
    borderBottom: `thin solid ${theme.palette.warning.main}`,
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    opacity: 0.4,
}));const DEFAULT_LINE_STYLE = { flex: 1, position: 'relative' };
const PFormDivider = React.forwardRef(({ size: initSize, 
//----------------------------------------------------------------------------------------------------------------
icon, label, line, lineVerticalMargin = 9, hidden, collapse, collapseIn, error, warning, onCollapseChange, 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { size: formSize } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const size = React.useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const style = React.useMemo(() => {
        if (hidden) {
            return Object.assign(Object.assign({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [hidden, initStyle]);
    const lineStyle = React.useMemo(() => {
        if (lineVerticalMargin) {
            return Object.assign(Object.assign({}, DEFAULT_LINE_STYLE), { marginTop: lineVerticalMargin, marginBottom: lineVerticalMargin });
        }
        else {
            return DEFAULT_LINE_STYLE;
        }
    }, [lineVerticalMargin]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = React.useCallback(() => {
        if (collapse) {
            onCollapseChange && onCollapseChange(!collapseIn);
        }
    }, [collapse, collapseIn, onCollapseChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { ref: ref, size: { xs: 12 }, style: style, className: classNames(className, 'PFormDivider'), sx: sx },
        React.createElement(material.Box, { sx: {
                display: 'flex',
                py: 1,
                alignItems: 'center',
                justifyItems: 'center',
                padding: 0,
                cursor: collapse ? 'pointer' : undefined,
            }, onClick: handleClick },
            icon && (React.createElement(reactComponent.PIcon, { style: { opacity: 0.54, marginRight: 5 }, color: error ? 'error' : warning ? 'warning' : undefined, size: size }, icon)),
            label && (React.createElement(material.Box, { sx: {
                    paddingRight: '10px',
                    color: error ? 'error.main' : warning ? 'warning.main' : 'text.secondary',
                    fontWeight: 700,
                    fontSize: size === 'small' ? '11.5px' : '12px',
                } }, label)),
            (line || collapse) && (React.createElement("div", { style: lineStyle }, error ? React.createElement(StyledErrorLineBox, null) : warning ? React.createElement(StyledWarningLineBox, null) : React.createElement(StyledLineBox, null))),
            collapse && (React.createElement(reactComponent.PIcon, { sx: { opacity: 0.6, ml: 1 }, color: error ? 'error' : warning ? 'warning' : undefined }, collapseIn ? 'KeyboardDoubleArrowUp' : 'KeyboardDoubleArrowDown')))));
});const StyledWrapGrid$1 = material.styled(material.Grid) `
  width: 100%;
`;const PFormBlock = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, spacing: initSpacing, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
//----------------------------------------------------------------------------------------------------------------
icon, label, line, lineVerticalMargin, error, warning, 
//----------------------------------------------------------------------------------------------------------------
hidden, collapse, collapseIn: initCollapseIn, 
//----------------------------------------------------------------------------------------------------------------
children, className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const _a = useFormState(), { variant: formVariant, size: formSize, color: formColor, spacing: formSpacing, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth } = _a, otherFormState = __rest(_a, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const spacing = compare.ifUndefined(initSpacing, formSpacing);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [collapseIn, setCollapseIn] = reactHook.useAutoUpdateState(initCollapseIn);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const style = React.useMemo(() => {
        if (hidden) {
            return Object.assign(Object.assign({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [hidden, initStyle]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        setCollapseIn(initCollapseIn);
    }, [initCollapseIn, setCollapseIn]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const Container = React.useMemo(() => {
        return collapse ? material.Collapse : React.Fragment;
    }, [collapse]);
    const containerProps = React.useMemo(() => {
        return collapse ? { in: collapseIn } : undefined;
    }, [collapse, collapseIn]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContext.Provider, { value: Object.assign(Object.assign({}, otherFormState), { variant, size, color, spacing, focused, labelShrink, fullWidth }) },
        React.createElement(material.Grid, { ref: ref, size: { xs: 12 }, className: classNames(className, 'PFormBlock'), style: style, sx: sx },
            React.createElement(material.Grid, { container: true, spacing: spacing },
                (icon || label || line || collapse) && (React.createElement(PFormDivider, { className: 'PFormBlock-header', collapse: collapse, collapseIn: collapseIn, size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden, onCollapseChange: collapse ? (newCollapseIn) => setCollapseIn(newCollapseIn) : undefined })),
                React.createElement(StyledWrapGrid$1, { size: { xs: 12 } },
                    React.createElement(Container, Object.assign({}, containerProps),
                        React.createElement(material.Grid, { container: true, spacing: spacing },
                            React.createElement(StyledWrapGrid$1, { size: { xs: 12 }, className: 'PFormBlock-body' },
                                React.createElement(material.Grid, { className: 'PFormBlock-content', container: true, spacing: spacing }, children)))))))));
});const StyledWrapGrid = material.styled(material.Grid) `
  width: 100%;
`;const PFormRow = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, spacing: initSpacing, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
//----------------------------------------------------------------------------------------------------------------
icon, label, line, lineVerticalMargin, fullHeight, 
//----------------------------------------------------------------------------------------------------------------
hidden, error, warning, helperText, 
//----------------------------------------------------------------------------------------------------------------
children, className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const _a = useFormState(), { variant: formVariant, size: formSize, color: formColor, spacing: formSpacing, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth } = _a, otherFormState = __rest(_a, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    /********************************************************************************************************************
     * Value
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const spacing = compare.ifUndefined(initSpacing, formSpacing);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [formCols] = React.useState({});
    const [formColAutoXs, setFormColAutoXs] = React.useState(12);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const style = React.useMemo(() => {
        const style = Object.assign({ width: '100%' }, initStyle);
        if (hidden) {
            style.display = 'none';
        }
        if (fullHeight) {
            style.height = '100%';
        }
        return style;
    }, [fullHeight, hidden, initStyle]);
    /********************************************************************************************************************
     * Function - makeFormColXs
     * ******************************************************************************************************************/
    const makeFormColXs = React.useCallback(() => {
        const formColKeys = Object.keys(formCols);
        let autoXs = 12;
        let autoXsCount = formColKeys.length;
        formColKeys.forEach((id) => {
            const xs = formCols[id];
            if (xs != null) {
                autoXs -= xs;
                autoXsCount -= 1;
            }
        });
        setFormColAutoXs(autoXsCount === 0 ? autoXs : autoXs / autoXsCount);
    }, [formCols]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleAddFormCol = React.useCallback((id, xs) => {
        formCols[id] = xs;
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    const handleRemoveFormCol = React.useCallback((id) => {
        delete formCols[id];
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: Object.assign(Object.assign({}, otherFormState), { variant,
            size,
            color,
            spacing,
            focused,
            labelShrink,
            fullWidth,
            formColAutoXs, onAddFormCol: handleAddFormCol, onRemoveFormCol: handleRemoveFormCol }) },
        React.createElement(material.Grid, { ref: ref, size: { xs: 12 }, className: classNames(className, 'PFormRow'), style: style, sx: sx },
            React.createElement(material.Grid, { container: true, spacing: spacing, style: fullHeight ? { height: '100%' } : undefined },
                (icon || label || line) && (React.createElement(PFormDivider, { className: classNames(className, 'PFormRow-header'), size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden })),
                React.createElement(StyledWrapGrid, { size: { xs: 12 }, className: 'PFormRow-body', style: fullHeight ? { height: '100%' } : undefined },
                    React.createElement(material.Grid, { className: 'PFormRow-content', container: true, spacing: spacing, direction: 'row', style: { flexWrap: 'nowrap', height: fullHeight ? '100%' : undefined } }, children),
                    helperText && (React.createElement(material.FormHelperText, { className: 'PFormRow-helper-text', component: 'div', error: error }, helperText)))))));
});const StyledFormLabelContainerDiv = material.styled('div') `
  position: relative;
  height: 20px;
`;
const StyledFormLabel = material.styled(PFormLabel$1) `
  position: absolute;
  left: 5px;
  top: 0;
`;
const StyledContentContainerBox = material.styled(material.Box) `
  display: flex;
  flex-wrap: wrap;
`;const PFormCol = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, spacing: initSpacing, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, fullHeight, 
//----------------------------------------------------------------------------------------------------------------
gap: initGap, icon, label, hidden, error, warning, helperText, helperTextShift, 
//----------------------------------------------------------------------------------------------------------------
xs, className, children, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const _a = useFormState(), { variant: formVariant, size: formSize, color: formColor, spacing: formSpacing, formColGap: formFormColGap, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, formColAutoXs, onAddFormCol, onRemoveFormCol } = _a, otherFormState = __rest(_a, ["variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "formColAutoXs", "onAddFormCol", "onRemoveFormCol"]);
    /********************************************************************************************************************
     * Variable - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const spacing = compare.ifUndefined(initSpacing, formSpacing);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    const formColGap = compare.ifUndefined(initGap, formFormColGap);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const style = React.useMemo(() => {
        const newStyle = Object.assign({}, initStyle);
        if (hidden) {
            newStyle.display = 'none';
        }
        if (fullHeight) {
            newStyle.height = '100%';
        }
        return newStyle;
    }, [fullHeight, hidden, initStyle]);
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    const { ref: gridRef, width: resizedFormColWidth } = reactResizeDetector.useResizeDetector({ handleHeight: false });
    const formColWidth = compare.ifUndefined(resizedFormColWidth, 0);
    /********************************************************************************************************************
     * LayoutEffect
     * ******************************************************************************************************************/
    React.useLayoutEffect(() => {
        if (onAddFormCol)
            onAddFormCol(id, xs);
        return () => {
            if (onRemoveFormCol)
                onRemoveFormCol(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xs]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(gridRef.current);
            }
            else {
                ref.current = gridRef.current;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: Object.assign(Object.assign({}, otherFormState), { variant,
            size,
            color,
            spacing,
            focused,
            labelShrink,
            fullWidth,
            formColGap, formColXs: xs || formColAutoXs || 12, formColWidth, formColWithLabel: !!label, formColWithHelperText: !!helperText }) },
        React.createElement(material.Grid, { ref: (ref) => {
                gridRef.current = ref;
            }, size: { xs: xs || formColAutoXs || 12 }, className: classNames(className, 'PFormCol', !!label && 'with-label', !!helperText && 'with-helper-text'), style: style, sx: sx },
            React.createElement("div", null,
                label && (React.createElement("div", { className: 'FormCol-header' },
                    React.createElement(StyledFormLabelContainerDiv, null,
                        React.createElement(StyledFormLabel, { className: 'FormCol-FormLabel', size: size, icon: icon, focused: focused, color: color, error: error, warning: warning }, label)))),
                React.createElement("div", { className: 'FormCol-content' },
                    React.createElement(StyledContentContainerBox, { gap: formColGap }, children)),
                helperText && (React.createElement("div", { className: 'FormCol-helper-text' },
                    React.createElement(material.FormHelperText, { component: 'div', error: error, style: { marginLeft: helperTextShift ? 14 : 5 } }, helperText)))))));
});const StyledContainerDiv = material.styled('div') `
  flex: 1;
  position: relative;
`;
const StyledContentDiv = material.styled('div') `
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cfcfcf;
    border-radius: 100px;
  }
`;const PFormBody = ({ children, hidden, fullHeight: initFullHeight, style: initStyle }) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const { spacing, fullHeight } = useFormState();
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    const { ref: containerRef, height: resizedHeight } = reactResizeDetector.useResizeDetector({ handleWidth: false });
    const height = compare.ifUndefined(resizedHeight, 0);
    /********************************************************************************************************************
     * Style
     * ******************************************************************************************************************/
    const style = React.useMemo(() => {
        const newStyle = Object.assign({}, initStyle);
        if (hidden) {
            newStyle.display = 'none';
        }
        return newStyle;
    }, [hidden, initStyle]);
    const contentStyle = React.useMemo(() => fullHeight
        ? {
            height,
            paddingTop: 8,
            overflowY: 'auto',
            position: 'absolute',
            width: '100%',
        }
        : undefined, [fullHeight, height]);
    return (React.createElement(StyledContainerDiv, { ref: fullHeight
            ? (ref) => {
                containerRef.current = ref;
            }
            : undefined, className: 'PFormBody', style: style },
        React.createElement(StyledContentDiv, { style: contentStyle },
            React.createElement(material.Grid, { container: true, spacing: spacing, direction: 'column', style: initFullHeight ? { height: '100%' } : undefined }, children))));
};const PFormFooter = ({ children, noLine, hidden }) => {
    const { spacing } = useFormState();
    const style = React.useMemo(() => (hidden ? { display: 'none' } : undefined), [hidden]);
    return (React.createElement(material.Grid, { size: { xs: 12 }, className: 'PFormFooter', style: style },
        React.createElement(material.Grid, { container: true, spacing: spacing, direction: 'column' },
            !noLine && (React.createElement(material.Grid, { size: { xs: 12 }, sx: { mt: spacing } },
                React.createElement(PFormDivider, { line: true }))),
            children)));
};insertStyle(".PFormTextField{min-width:200px}.PFormTextField .clear-icon-button-wrap{visibility:hidden}.PFormTextField.variant-filled .clear-icon-button-wrap{margin-top:9px;margin-bottom:-9px}.PFormTextField:hover .clear-icon-button-wrap.show,.PFormTextField .MuiInputBase-root.Mui-focused .clear-icon-button-wrap.show{visibility:visible}");const PFormTextField = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, submitWhenReturnKey: initSubmitWhenReturnKey, 
    //----------------------------------------------------------------------------------------------------------------
    name, required, value: initValue, data: initData, icon, labelIcon, label: initLabel, error: initError, helperText, exceptValue, readOnly, tabIndex, disabled: initDisabled, placeholder, maxLength, clear, width, slotProps: initSlotProps, inputRef: initInputRef, select, multiline, validPattern, invalidPattern, startAdornment, endAdornment, noFormValueItem, hidden: initHidden, disableReturnKey, 
    //----------------------------------------------------------------------------------------------------------------
    onChange, onValue, onValidate, onBlur, onKeyDown, 
    //----------------------------------------------------------------------------------------------------------------
    className, style: initStyle } = _a, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "submitWhenReturnKey", "name", "required", "value", "data", "icon", "labelIcon", "label", "error", "helperText", "exceptValue", "readOnly", "tabIndex", "disabled", "placeholder", "maxLength", "clear", "width", "slotProps", "inputRef", "select", "multiline", "validPattern", "invalidPattern", "startAdornment", "endAdornment", "noFormValueItem", "hidden", "disableReturnKey", "onChange", "onValue", "onValidate", "onBlur", "onKeyDown", "className", "style"]);
    const id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const inputRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, submitWhenReturnKey: formSubmitWhenReturnKey, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSubmit, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    const submitWhenReturnKey = compare.ifUndefined(initSubmitWhenReturnKey, formSubmitWhenReturnKey);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback((value) => {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (compare.notEmpty(value) && validPattern) {
            if (!new RegExp(validPattern).test(value)) {
                setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
                return false;
            }
        }
        if (compare.notEmpty(value) && invalidPattern) {
            if (new RegExp(invalidPattern).test(value)) {
                setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
                return false;
            }
        }
        if (onValidate) {
            const validateResult = onValidate(value);
            if (validateResult != null && validateResult !== true) {
                setErrorErrorHelperText(true, validateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, validPattern, invalidPattern, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback(function (newValue) {
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        if (!noFormValueItem) {
            onValueChange(name, finalValue);
        }
        return finalValue;
    }, [_setValue, error, name, noFormValueItem, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Variables
     * ******************************************************************************************************************/
    const showClear = clear ? compare.notEmpty(value) : false;
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a, _b;
        if (initInputRef) {
            (_a = initInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [initInputRef, inputRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'default',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorText) => setErrorErrorHelperText(error, error ? errorText : undefined),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    const handleCommandSet = React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]);
    const handleCommandUnset = React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]);
    reactHook.useForwardLayoutRef(ref, commands, !noFormValueItem ? handleCommandSet : undefined, !noFormValueItem ? handleCommandUnset : undefined);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((e) => {
        const finalValue = updateValue(e.target.value);
        if (!noFormValueItem) {
            setTimeout(() => {
                onValueChangeByUser(name, finalValue);
                if (select) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
    }, [updateValue, noFormValueItem, onValueChangeByUser, name, select, onRequestSearchSubmit]);
    const handleBlur = React.useCallback((e) => {
        if (error)
            validate(valueRef.current);
        if (onBlur)
            onBlur(e);
    }, [error, validate, valueRef, onBlur]);
    const handleKeyDown = React.useCallback((e) => {
        if (['Enter'].includes(e.key) &&
            !select &&
            (!multiline || (multiline && disableReturnKey)) &&
            !noFormValueItem) {
            e.preventDefault();
            e.stopPropagation();
            if (submitWhenReturnKey) {
                onRequestSubmit(name, valueRef.current);
            }
            onRequestSearchSubmit(name, valueRef.current);
        }
        if (onKeyDown)
            onKeyDown(e);
    }, [
        select,
        multiline,
        disableReturnKey,
        noFormValueItem,
        onKeyDown,
        submitWhenReturnKey,
        onRequestSearchSubmit,
        name,
        valueRef,
        onRequestSubmit,
    ]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    // style
    const style = Object.assign({}, initStyle);
    if (width != null) {
        style.width = width;
    }
    if (hidden) {
        style.display = 'none';
    }
    // // inputProps
    // let inputProps: FormTextProps['inputProps'] = initInputProps;
    // if ((!initInputProps?.className?.includes('PFormTag-Input') && readOnly != null) || maxLength != null) {
    //   inputProps = {
    //     ...initInputProps,
    //     readOnly: readOnly,
    //     maxLength: maxLength,
    //   };
    //
    //   if (readOnly) {
    //     inputProps.tabIndex = -1;
    //     inputProps.className = classNames(inputProps.className, 'Mui-disabled');
    //   } else {
    //     inputProps.tabIndex = tabIndex;
    //   }
    // }
    /********************************************************************************************************************
     * Memo - slotProps
     * ******************************************************************************************************************/
    const inputSlotProps = React.useMemo(() => {
        const newProps = Object.assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input);
        if (startAdornment || icon || newProps.startAdornment) {
            newProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                newProps.startAdornment));
        }
        if (endAdornment || newProps.endAdornment || (clear && !readOnly && !disabled)) {
            newProps.endAdornment = (React.createElement(React.Fragment, null,
                clear && !readOnly && !disabled && (React.createElement(material.InputAdornment, { className: classNames('clear-icon-button-wrap', showClear && 'show'), position: 'end' },
                    React.createElement(material.IconButton, { className: 'clear-icon-button', size: 'small', tabIndex: -1, onClick: () => {
                            const finalValue = updateValue('');
                            focus();
                            if (!noFormValueItem) {
                                setTimeout(() => {
                                    onValueChangeByUser(name, finalValue);
                                    onRequestSearchSubmit(name, finalValue);
                                });
                            }
                        } },
                        React.createElement(reactComponent.PIcon, { size: 'inherit' }, "ClearRounded")))),
                newProps.endAdornment,
                endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        return newProps;
    }, [
        clear,
        disabled,
        endAdornment,
        focus,
        icon,
        initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input,
        name,
        noFormValueItem,
        onRequestSearchSubmit,
        onValueChangeByUser,
        readOnly,
        showClear,
        startAdornment,
        updateValue,
    ]);
    const slotProps = React.useMemo(() => {
        var _a;
        const newSlotProps = Object.assign(Object.assign({}, initSlotProps), { formHelperText: { component: 'div' } });
        // input
        newSlotProps.input = Object.assign(Object.assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input), inputSlotProps);
        // inputLabel
        newSlotProps.inputLabel =
            labelShrink || placeholder
                ? Object.assign(Object.assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel), { shrink: true }) : initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel;
        // htmlInput
        const initHtmlInputProps = initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.htmlInput;
        if ((!((_a = initHtmlInputProps === null || initHtmlInputProps === void 0 ? void 0 : initHtmlInputProps.className) === null || _a === void 0 ? void 0 : _a.includes('PFormTag-Input')) && readOnly != null) || maxLength != null) {
            newSlotProps.htmlInput = Object.assign(Object.assign({}, initHtmlInputProps), { readOnly: readOnly, maxLength: maxLength });
            if (readOnly) {
                newSlotProps.htmlInput.tabIndex = -1;
                newSlotProps.htmlInput.className = classNames(newSlotProps.htmlInput.className, 'Mui-disabled');
            }
            else {
                newSlotProps.htmlInput.tabIndex = tabIndex;
            }
        }
        return newSlotProps;
    }, [initSlotProps, inputSlotProps, labelShrink, maxLength, placeholder, readOnly, tabIndex]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.TextField, Object.assign({}, props, { variant: variant, size: size, color: color, focused: focused || undefined, name: name, label: labelIcon ? (React.createElement(React.Fragment, null,
            React.createElement(reactComponent.PIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React.createElement(material.Box, { component: 'span', style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel), placeholder: placeholder, className: classNames(className, 'PFormValueItem', 'PFormTextField', `variant-${variant}`), inputRef: initInputRef ? initInputRef : inputRef, value: value, required: required, fullWidth: !width && fullWidth, error: error, helperText: formColWithHelperText ? undefined : error ? errorHelperText : helperText, slotProps: slotProps, disabled: disabled, style: style, select: select, multiline: multiline, onChange: handleChange, onBlur: handleBlur, onKeyDown: handleKeyDown })));
});
PFormTextField.displayName = 'PFormTextField';insertStyle(".PFormHidden{display:none !important}");const PFormHidden = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(PFormTextField, Object.assign({ ref: ref, className: classNames(className, 'PFormHidden'), type: 'hidden', variant: 'standard' }, props)));
});
PFormHidden.displayName = 'PFormHidden';const PFormText = React.forwardRef((_a, ref) => {
    var { className, clear = true, value = '' } = _a, props = __rest(_a, ["className", "clear", "value"]);
    return (React.createElement(PFormTextField, Object.assign({ ref: ref, className: classNames(className, 'PFormText'), clear: clear, value: value, disableReturnKey: true }, props)));
});
PFormText.displayName = 'PFormText';const PFormTagText = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var { allowSpace, onKeyDown, onBlur, onAppendTag } = _a, props = __rest(_a, ["allowSpace", "onKeyDown", "onBlur", "onAppendTag"]);
    const forceUpdate = reactHook.useForceUpdate();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const valueRef = React.useRef('');
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const appendTag = React.useCallback(() => {
        onAppendTag(valueRef.current);
        valueRef.current = ' ';
        forceUpdate();
        setTimeout(() => {
            valueRef.current = '';
            forceUpdate();
        });
    }, [forceUpdate, onAppendTag]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleKeyDown = React.useCallback((e) => {
        const appendKeys = allowSpace ? [',', 'Enter'] : [' ', ',', 'Enter'];
        if (appendKeys.includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            if (compare.notEmpty(valueRef.current)) {
                appendTag();
            }
        }
        else {
            if (onKeyDown)
                onKeyDown(e);
        }
    }, [allowSpace, appendTag, onKeyDown]);
    const handleChange = React.useCallback((value) => {
        valueRef.current = allowSpace ? value.replace(/,/g, '') : value.replace(/ /g, '').replace(/,/g, '');
    }, [allowSpace]);
    const handleBlur = React.useCallback((e) => {
        if (compare.notEmpty(valueRef.current)) {
            appendTag();
        }
        if (onBlur)
            onBlur(e);
    }, [onBlur, appendTag]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledFormText, Object.assign({ ref: ref }, props, { clear: false, value: valueRef.current, onChange: handleChange, onKeyDown: handleKeyDown, onBlur: handleBlur })));
});
/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/
const StyledFormText = material.styled(PFormText) `
  .PFormTag-Input {
    flex: 1;
    min-width: 50px;
    padding-left: 5px;
  }
  &.variant-outlined {
    .MuiInputBase-root {
      .PFormTag-Input {
        padding-top: 7px;
        padding-bottom: 8px;
      }

      &.MuiInputBase-sizeSmall {
        .PFormTag-Input {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
`;const _emptyValue = [];
const PFormTag = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var { variant: initVariant, size: initSize, 
    //----------------------------------------------------------------------------------------------------------------
    className, name, value: initValue = _emptyValue, exceptValue, clear = true, required, readOnly, maxLength, disabled: initDisabled, fullWidth: initFullWidth, error: initError, helperText, formValueSeparator = ',', formValueSort, limitTags, getLimitTagsText, allowSpace, slotProps, onAppendTag, onRemoveTag, onTagClick, onValidate, onChange, onValue } = _a, props = __rest(_a, ["variant", "size", "className", "name", "value", "exceptValue", "clear", "required", "readOnly", "maxLength", "disabled", "fullWidth", "error", "helperText", "formValueSeparator", "formValueSort", "limitTags", "getLimitTagsText", "allowSpace", "slotProps", "onAppendTag", "onRemoveTag", "onTagClick", "onValidate", "onChange", "onValue"]);
    const _b = useFormState(), { variant: formVariant, size: formSize, fullWidth: formFullWidth, disabled: formDisabled, onAddValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit } = _b, otherFormState = __rest(_b, ["variant", "size", "fullWidth", "disabled", "onAddValueItem", "onValueChange", "onValueChangeByUser", "onRequestSearchSubmit"]);
    /********************************************************************************************************************
     * FormState - Variables
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [disabled] = reactHook.useAutoUpdateState(initDisabled == null ? formDisabled : initDisabled);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback((value) => {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    const getFinalValue = React.useCallback((value) => {
        let finalValue = value === undefined ? [] : value;
        if (finalValue instanceof Set) {
            finalValue = Array.from(finalValue);
        }
        else {
            const finalValueSet = new Set();
            (finalValue || []).forEach((finalValue) => finalValueSet.add(finalValue));
            finalValue = Array.from(finalValueSet);
        }
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const valueSet = React.useMemo(() => new Set(value), [value]);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (!compare.equal(value, initValue)) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Function - getExtraCommands
     * ******************************************************************************************************************/
    const getExtraCommands = React.useCallback(() => {
        return {
            isFormValueSort: () => !!formValueSort,
            getFormValueSeparator: () => formValueSeparator,
        };
    }, [formValueSort, formValueSeparator]);
    /********************************************************************************************************************
     * Function - getCommands
     * ******************************************************************************************************************/
    const getCommands = React.useCallback((baseCommands) => {
        return Object.assign(Object.assign(Object.assign({}, baseCommands), { getReset: () => getFinalValue(initValue), reset: () => updateValue(initValue), getValue: () => valueRef.current, setValue: (newValue) => {
                updateValue(newValue);
            }, validate: () => validate(valueRef.current) }), getExtraCommands());
    }, [getExtraCommands, getFinalValue, initValue, updateValue, valueRef, validate]);
    /********************************************************************************************************************
     * Function - appendTag, removeTag
     * ******************************************************************************************************************/
    const appendTag = React.useCallback((tag) => {
        const finalTag = tag.trim();
        if (compare.notEmpty(finalTag) && !valueSet.has(finalTag)) {
            if (onAppendTag && !onAppendTag(finalTag))
                return;
            valueSet.add(finalTag);
            const finalValue = updateValue(valueSet);
            setTimeout(() => {
                onValueChangeByUser(name, finalValue);
                onRequestSearchSubmit(name, finalValue);
            });
        }
    }, [valueSet, onAppendTag, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    const removeTag = React.useCallback((tag) => {
        if (valueSet.has(tag)) {
            if (onRemoveTag && !onRemoveTag(tag))
                return;
            valueSet.delete(tag);
            const finalValue = updateValue(valueSet);
            setTimeout(() => {
                onValueChangeByUser(name, finalValue);
                onRequestSearchSubmit(name, finalValue);
            });
        }
    }, [valueSet, onRemoveTag, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleAddValueItem = React.useCallback((id, commands) => {
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    const handleRef = React.useCallback((commands) => {
        if (ref) {
            const finalCommands = getCommands(commands);
            if (typeof ref === 'function') {
                ref(finalCommands);
            }
            else {
                ref.current = finalCommands;
            }
        }
    }, [ref, getCommands]);
    const handleRenderValue = React.useCallback((tags) => {
        return tags.map((tag) => (React.createElement(material.Chip, { className: 'MuiAutocomplete-tag', key: tag, label: tag, size: 'small', style: variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined, disabled: readOnly || disabled, onDelete: readOnly || disabled ? undefined : () => removeTag(tag), onClick: () => onTagClick === null || onTagClick === void 0 ? void 0 : onTagClick(tag) })));
    }, [disabled, onTagClick, readOnly, removeTag, size, variant]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const handleRenderInput = React.useCallback((params) => {
        var _a, _b;
        const htmlInputProps = Object.assign(Object.assign({}, params.inputProps), { className: classNames('PFormTag-Input', readOnly && 'Mui-disabled'), readOnly, tabIndex: readOnly ? -1 : undefined, maxLength });
        delete htmlInputProps.onChange;
        delete htmlInputProps.value;
        const renderProps = Object.assign({ name,
            clear,
            size, className: classNames(className, 'PFormValueItem', 'PFormTag'), error,
            disabled,
            fullWidth,
            required,
            exceptValue, slotProps: Object.assign(Object.assign({}, slotProps), { inputLabel: Object.assign(Object.assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.inputLabel), { htmlFor: params.InputLabelProps.htmlFor, id: params.InputLabelProps.id }), input: Object.assign(Object.assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.input), { style: Object.assign(Object.assign({}, (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.input) === null || _a === void 0 ? void 0 : _a.style), (variant === 'outlined' && size === 'small'
                        ? { paddingTop: 7, paddingBottom: 6, marginTop: -2 }
                        : undefined)), className: params.InputProps.className, ref: params.InputProps.ref, startAdornment: params.InputProps.startAdornment }), htmlInput: Object.assign(Object.assign(Object.assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.htmlInput), htmlInputProps), { style: Object.assign(Object.assign(Object.assign({}, (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.htmlInput) === null || _b === void 0 ? void 0 : _b.style), htmlInputProps.style), (variant === 'outlined' && size === 'small' ? { marginTop: 4, paddingBottom: 2 } : undefined)) }) }), helperText: error ? errorHelperText : helperText, allowSpace, onAppendTag: appendTag }, props);
        return React.createElement(PFormTagText, Object.assign({ ref: handleRef }, renderProps));
    }, [
        allowSpace,
        appendTag,
        className,
        clear,
        disabled,
        error,
        errorHelperText,
        exceptValue,
        fullWidth,
        handleRef,
        helperText,
        maxLength,
        name,
        props,
        readOnly,
        required,
        size,
        slotProps,
        variant,
    ]);
    return (React.createElement(PFormContextProvider, { value: Object.assign(Object.assign({}, otherFormState), { variant: formVariant, size: formSize, fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, onValueChange: () => { }, onValueChangeByUser: () => { }, onRequestSearchSubmit: () => { } }) },
        React.createElement(material.Autocomplete, { options: [], multiple: true, freeSolo: true, value: value, readOnly: readOnly, disableClearable: true, limitTags: limitTags, getLimitTagsText: getLimitTagsText, disabled: disabled, renderValue: handleRenderValue, style: { display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }, renderInput: handleRenderInput })));
});
PFormTag.displayName = 'PFormTag';const PFormEmail = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var { className, validPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g, onValue } = _a, props = __rest(_a, ["className", "validPattern", "onValue"]);
    const handleValue = React.useCallback((value) => {
        const newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, Object.assign({ ref: ref, className: classNames(className, 'PFormEmail'), type: 'email', validPattern: validPattern, onValue: handleValue }, props)));
});
PFormEmail.displayName = 'PFormEmail';insertStyle(".PFormPassword .eye-icon-button-wrap{visibility:hidden}.PFormPassword.variant-filled .eye-icon-button-wrap{margin-top:9px;margin-bottom:-9px}.PFormPassword:hover .eye-icon-button-wrap.show,.PFormPassword .MuiInputBase-root.Mui-focused .eye-icon-button-wrap.show{visibility:visible}");const StyledEyeInputAdornment = material.styled(material.InputAdornment) `
  visibility: hidden;
`;
const PFormPassword = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var { className, slotProps: initSlotProps, clear = false, eye = true, onChange } = _a, props = __rest(_a, ["className", "slotProps", "clear", "eye", "onChange"]);
    const [type, setType] = React.useState('password');
    const [showEye, setShowEye] = React.useState(compare.notEmpty(props.value));
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const slotProps = React.useMemo(() => {
        var _a;
        return Object.assign(Object.assign({}, initSlotProps), { input: Object.assign(Object.assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input), { endAdornment: (React.createElement(React.Fragment, null,
                    eye && (React.createElement(StyledEyeInputAdornment, { position: 'end', className: classNames('eye-icon-button-wrap', showEye && 'show') },
                        React.createElement(material.IconButton, { size: 'small', tabIndex: -1, onClick: () => {
                                setType(type === 'password' ? 'text' : 'password');
                            } },
                            React.createElement(material.Icon, { fontSize: 'inherit' }, type === 'password' ? 'visibility' : 'visibility_off')))), (_a = initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input) === null || _a === void 0 ? void 0 :
                    _a.endAdornment)) }) });
    }, [eye, initSlotProps, showEye, type]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((value) => {
        setShowEye(compare.notEmpty(value));
        onChange && onChange(value);
    }, [onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, Object.assign({ ref: ref, className: classNames(className, 'PFormPassword'), onChange: handleChange, type: type, slotProps: slotProps, clear: clear }, props)));
});
PFormPassword.displayName = 'PFormPassword';const PFormTel = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var { className, onValue, validPattern = /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/ } = _a, props = __rest(_a, ["className", "onValue", "validPattern"]);
    const handleValue = React.useCallback((value) => {
        const newValue = formatting.formatTelNo(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, Object.assign({ ref: ref, className: classNames(className, 'PFormTel'), onValue: handleValue, maxLength: 13, validPattern: validPattern }, props)));
});
PFormTel.displayName = 'PFormTel';const PFormMobile = React.forwardRef((_a, ref) => {
    var { className, validPattern = /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/ } = _a, props = __rest(_a, ["className", "validPattern"]);
    return (React.createElement(PFormTel, Object.assign({ ref: ref, className: classNames(className, 'PFormMobile'), validPattern: validPattern }, props)));
});
PFormMobile.displayName = 'PFormMobile';const NumberFormatCustom = React.forwardRef((_a, ref) => {
    var { onChange } = _a, props = __rest(_a, ["onChange"]);
    return (React.createElement(reactNumberFormat.NumericFormat, Object.assign({}, props, { getInputRef: ref, onValueChange: (values) => {
            if (onChange)
                onChange({ target: { value: values.value } });
        } })));
});const PFormNumber = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var { className, allowNegative, thousandSeparator, allowDecimal, decimalScale, prefix, suffix, readOnly, tabIndex, labelShrink, clear = true, slotProps: initSlotProps, value: initValue, onChange, onValue, onValidate } = _a, props = __rest(_a, ["className", "allowNegative", "thousandSeparator", "allowDecimal", "decimalScale", "prefix", "suffix", "readOnly", "tabIndex", "labelShrink", "clear", "slotProps", "value", "onChange", "onValue", "onValidate"]);
    const forceUpdate = reactHook.useForceUpdate(1);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const strValueRef = reactHook.useAutoUpdateRef(initValue !== undefined ? `${initValue}` : '');
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const slotProps = React.useMemo(() => {
        var _a;
        const newSlotProps = Object.assign({}, initSlotProps);
        const inputProps = {
            className: readOnly ? 'Mui-disabled' : undefined,
            allowNegative: !!allowNegative,
            thousandSeparator,
            prefix,
            suffix,
            readOnly: !!readOnly,
            tabIndex: readOnly ? -1 : tabIndex,
        };
        if (allowDecimal) {
            if (decimalScale) {
                inputProps.decimalScale = decimalScale;
            }
        }
        else {
            inputProps.decimalScale = 0;
        }
        newSlotProps.input = Object.assign(Object.assign({}, newSlotProps.input), { inputComponent: NumberFormatCustom, inputProps: Object.assign(Object.assign({}, (_a = newSlotProps.input) === null || _a === void 0 ? void 0 : _a.inputProps), inputProps) });
        return newSlotProps;
    }, [
        allowDecimal,
        allowNegative,
        decimalScale,
        initSlotProps,
        prefix,
        readOnly,
        suffix,
        tabIndex,
        thousandSeparator,
    ]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((value) => {
        return compare.empty(value) || value === '-' || value === '.' ? undefined : Number(value);
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((value) => {
        if (Number(value) > Number.MAX_SAFE_INTEGER) {
            const newValue = Number.MAX_SAFE_INTEGER;
            const newStrValue = `${newValue}`;
            if (strValueRef.current === newStrValue) {
                strValueRef.current = `${newValue} `;
            }
            else {
                strValueRef.current = `${newValue}`;
            }
            onChange && onChange(newValue);
            forceUpdate();
        }
        else if (Number(value) < Number.MIN_SAFE_INTEGER) {
            const newValue = Number.MIN_SAFE_INTEGER;
            const newStrValue = `${newValue}`;
            if (strValueRef.current === newStrValue) {
                strValueRef.current = `${newValue} `;
            }
            else {
                strValueRef.current = `${newValue}`;
            }
            onChange && onChange(newValue);
            forceUpdate();
        }
        else {
            const newValue = compare.empty(value) || value === '-' || value === '.' ? undefined : Number(value);
            onChange && onChange(newValue);
            strValueRef.current = value;
            forceUpdate();
        }
    }, [forceUpdate, onChange, strValueRef]);
    const handleValue = React.useCallback((value) => {
        let finalValue = compare.empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        if (onValue) {
            finalValue = onValue(finalValue);
        }
        return finalValue !== undefined ? finalValue.toString() : '';
    }, [onValue]);
    const handleValidate = React.useCallback((value) => {
        if (onValidate) {
            const finalValue = compare.empty(value) || value === '-' || value === '.' ? undefined : Number(value);
            return onValidate(finalValue);
        }
        else {
            return true;
        }
    }, [onValidate]);
    const handleRef = React.useCallback((commands) => {
        if (ref) {
            const finalCommands = commands
                ? Object.assign(Object.assign({}, commands), { getReset: () => initValue, getValue: () => getFinalValue(strValueRef.current), setValue: (value) => {
                        const strValue = value !== undefined ? `${value}` : '';
                        if (strValueRef.current === strValue) {
                            strValueRef.current = `${strValue} `;
                        }
                        else {
                            strValueRef.current = strValue;
                        }
                        onChange && onChange(value);
                        forceUpdate();
                    } }) : null;
            if (typeof ref === 'function') {
                return ref(finalCommands);
            }
            else {
                ref.current = finalCommands;
            }
        }
    }, [forceUpdate, getFinalValue, initValue, onChange, ref, strValueRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormTextField, Object.assign({ ref: handleRef, className: classNames(className, 'PFormNumber'), disableReturnKey: true, labelShrink: strValueRef.current === '' || strValueRef.current === undefined ? labelShrink : true, slotProps: slotProps, readOnly: readOnly, clear: clear, value: strValueRef.current, onChange: handleChange, onValue: handleValue, onValidate: handleValidate }, props)));
});
PFormNumber.displayName = 'PFormNumber';insertStyle(".PFormSearch input[type=search]::-webkit-search-decoration,.PFormSearch input[type=search]::-webkit-search-cancel-button,.PFormSearch input[type=search]::-webkit-search-results-button,.PFormSearch input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}");const PFormSearch = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return React.createElement(PFormText, Object.assign({ className: classNames(className, 'PFormSearch'), ref: ref, type: 'search' }, props));
});
PFormSearch.displayName = 'PFormSearch';insertStyle(".PFormTextarea .MuiInputBase-root .MuiInputBase-input{overflow-y:scroll}.PFormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar{width:8px}.PFormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1882352941);background-clip:padding-box;border-left:4px rgba(0,0,0,0) solid}");const PFormTextarea = React.forwardRef((_a, ref) => {
    var { className, clear = false, rows = 3, value = '' } = _a, props = __rest(_a, ["className", "clear", "rows", "value"]);
    return (React.createElement(PFormTextField, Object.assign({ ref: ref, className: classNames(className, 'PFormTextarea'), clear: clear, rows: rows, value: value }, props, { multiline: true })));
});
PFormTextarea.displayName = 'PFormTextarea';const PFormUrl = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var { className, validPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim, onValue } = _a, props = __rest(_a, ["className", "validPattern", "onValue"]);
    const handleValue = React.useCallback((value) => {
        const newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, Object.assign({ ref: ref, className: classNames(className, 'PFormUrl'), type: 'url', validPattern: validPattern, onValue: handleValue }, props)));
});
PFormUrl.displayName = 'PFormUrl';function getDateValidationErrorText(error) {
    switch (error) {
        case 'invalidDate':
            return '형식이 일치하지 않습니다.';
        case 'shouldDisableDate':
        case 'shouldDisableMonth':
        case 'shouldDisableYear':
        case 'disableFuture':
        case 'disablePast':
        case 'minDate':
        case 'maxDate':
            return '선택할 수 없는 날짜입니다.';
    }
}
//--------------------------------------------------------------------------------------------------------------------
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
const DEFAULT_DATE_FORM_VALUE_FORMAT = 'YYYY-MM-DD';
const DEFAULT_DATE_TIME_HOUR_FORMAT = 'YYYY-MM-DD HH시';
const DEFAULT_DATE_TIME_HOUR_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:00:00';
const DEFAULT_DATE_TIME_MINUTE_FORMAT = 'YYYY-MM-DD HH:mm';
const DEFAULT_DATE_TIME_MINUTE_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:mm:00';
const DEFAULT_DATE_TIME_SECOND_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DEFAULT_DATE_TIME_SECOND_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DEFAULT_TIME_HOUR_FORMAT = 'HH시';
const DEFAULT_TIME_HOUR_FORM_VALUE_FORMAT = 'HH:00:00';
const DEFAULT_TIME_MINUTE_FORMAT = 'HH:mm';
const DEFAULT_TIME_MINUTE_FORM_VALUE_FORMAT = 'HH:mm:00';
const DEFAULT_TIME_SECOND_FORMAT = 'HH:mm:ss';
const DEFAULT_TIME_SECOND_FORM_VALUE_FORMAT = 'HH:mm:ss';
function getDateTimeFormat(type, time) {
    switch (type) {
        case 'date':
            return DEFAULT_DATE_FORMAT;
        case 'date_time':
            if (time) {
                switch (time) {
                    case 'hour':
                        return DEFAULT_DATE_TIME_HOUR_FORMAT;
                    case 'minute':
                        return DEFAULT_DATE_TIME_MINUTE_FORMAT;
                    case 'second':
                        return DEFAULT_DATE_TIME_SECOND_FORMAT;
                }
            }
            else {
                throw new Error(`util::date_time::getDateTimeFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
            }
            break;
        case 'time':
            if (time) {
                switch (time) {
                    case 'hour':
                        return DEFAULT_TIME_HOUR_FORMAT;
                    case 'minute':
                        return DEFAULT_TIME_MINUTE_FORMAT;
                    case 'second':
                        return DEFAULT_TIME_SECOND_FORMAT;
                }
            }
            else {
                throw new Error(`util::date_time::getDateTimeFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
            }
            break;
    }
}
function getDateTimeFormValueFormat(type, time) {
    switch (type) {
        case 'date':
            return DEFAULT_DATE_FORM_VALUE_FORMAT;
        case 'date_time':
            if (time) {
                switch (time) {
                    case 'hour':
                        return DEFAULT_DATE_TIME_HOUR_FORM_VALUE_FORMAT;
                    case 'minute':
                        return DEFAULT_DATE_TIME_MINUTE_FORM_VALUE_FORMAT;
                    case 'second':
                        return DEFAULT_DATE_TIME_SECOND_FORM_VALUE_FORMAT;
                }
            }
            else {
                throw new Error(`util::date_time::getDateTimeFormValueFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
            }
            break;
        case 'time':
            if (time) {
                switch (time) {
                    case 'hour':
                        return DEFAULT_TIME_HOUR_FORM_VALUE_FORMAT;
                    case 'minute':
                        return DEFAULT_TIME_MINUTE_FORM_VALUE_FORMAT;
                    case 'second':
                        return DEFAULT_TIME_SECOND_FORM_VALUE_FORMAT;
                }
            }
            else {
                throw new Error(`util::date_time::getDateTimeFormValueFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
            }
            break;
    }
}
function getAvailableDateValFormat(type, time) {
    let availableDateType;
    if (time) {
        availableDateType = getAvailableDateType(type, time);
    }
    else if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    switch (availableDateType) {
        case 'year':
            return 'YYYY';
        case 'month':
            return 'YYYYMM';
        case 'day':
            return 'YYYYMMDD';
        case 'hour':
            return 'YYYYMMDDHH';
        case 'minute':
            return 'YYYYMMDDHHmm';
        case 'second':
            return 'YYYYMMDDHHmmss';
    }
}
/********************************************************************************************************************
 * getAvailableDateType
 * ******************************************************************************************************************/
function getAvailableDateType(type, time) {
    switch (type) {
        case 'date':
            return 'day';
        case 'date_time':
            if (time) {
                switch (time) {
                    case 'hour':
                        return 'hour';
                    case 'minute':
                        return 'minute';
                    case 'second':
                        return 'second';
                }
            }
            else {
                throw new Error(`util::date_time::getAvailableDateType - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
            }
            break;
        case 'time':
            throw new Error(`util::date_time::getAvailableDateType - '${type}' type 을 사용할 수 없습니다.`);
    }
}
/********************************************************************************************************************
 * makeAvailableDate
 * ******************************************************************************************************************/
function makeAvailableDate(minDate, maxDate, disablePast, disableFuture) {
    const now = dayjs();
    let min = null;
    let max = null;
    if (disablePast) {
        min = now;
    }
    if (minDate) {
        if (min) {
            if (minDate.isAfter(min, 'date')) {
                min = minDate;
            }
        }
        else {
            min = minDate;
        }
    }
    if (disableFuture) {
        max = now;
    }
    if (maxDate) {
        if (max) {
            if (maxDate.isBefore(max, 'date')) {
                max = maxDate;
            }
        }
        else {
            max = maxDate;
        }
    }
    const minItem = min
        ? {
            date: min,
            year: Number(min.format(getAvailableDateValFormat('year'))),
            month: Number(min.format(getAvailableDateValFormat('month'))),
            day: Number(min.format(getAvailableDateValFormat('day'))),
            hour: Number(min.format(getAvailableDateValFormat('hour'))),
            minute: Number(min.format(getAvailableDateValFormat('minute'))),
            second: Number(min.format(getAvailableDateValFormat('second'))),
        }
        : null;
    const maxItem = max
        ? {
            date: max,
            year: Number(max.format(getAvailableDateValFormat('year'))),
            month: Number(max.format(getAvailableDateValFormat('month'))),
            day: Number(max.format(getAvailableDateValFormat('day'))),
            hour: Number(max.format(getAvailableDateValFormat('hour'))),
            minute: Number(max.format(getAvailableDateValFormat('minute'))),
            second: Number(max.format(getAvailableDateValFormat('second'))),
        }
        : null;
    return [minItem, maxItem];
}
function getAvailableDate(availableDate, type, time) {
    let availableDateType;
    if (time) {
        availableDateType = getAvailableDateType(type, time);
    }
    else if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    const availableDateVal = getAvailableDateVal(availableDate, availableDateType);
    const availableDateValFormat = getAvailableDateValFormat(availableDateType);
    return [
        availableDateVal[0] ? dayjs(availableDateVal[0].toString(), availableDateValFormat) : null,
        availableDateVal[1] ? dayjs(availableDateVal[1].toString(), availableDateValFormat) : null,
    ];
}
function getAvailableDateVal(availableDate, type, time) {
    let availableDateType;
    if (time) {
        availableDateType = getAvailableDateType(type, time);
    }
    else if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    return [
        availableDate[0] ? availableDate[0][availableDateType] : null,
        availableDate[1] ? availableDate[1][availableDateType] : null,
    ];
}
/********************************************************************************************************************
 * getDateVal
 * ******************************************************************************************************************/
function getDateValForAvailableDate(date, type, time) {
    const format = getAvailableDateValFormat(type, time);
    return Number(date.format(format));
}
function isDateAvailable(date, availableDate, type, time) {
    let availableDateType;
    if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    const dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
    const availableDateVal = getAvailableDateVal(availableDate, availableDateType);
    return !((availableDateVal[0] && dateVal < availableDateVal[0]) ||
        (availableDateVal[1] && dateVal > availableDateVal[1]));
}
function checkDateAvailable(date, availableDate, type, time) {
    let availableDateType;
    if (time) {
        availableDateType = getAvailableDateType(type, time);
    }
    else if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    const dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
    const availableDateVal = getAvailableDateVal(availableDate, availableDateType);
    if (availableDateVal[0] && dateVal < availableDateVal[0])
        return 'min';
    if (availableDateVal[1] && dateVal > availableDateVal[1])
        return 'max';
    return 'available';
}function getFileSizeText(bytes, dp = 1) {
    const thresh = 1024;
    if (Math.abs(bytes) < thresh) {
        return `${bytes} Byte`;
    }
    const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    const r = 10 ** dp;
    do {
        bytes /= thresh;
        u += 1;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return `${bytes.toFixed(dp)} ${units[u]}`;
}function ToForwardRefExoticComponent(component, ext) {
    const fComponent = component;
    fComponent.displayName = void 0 ;
    return component;
}
function AutoTypeForwardRef(render) {
    return React.forwardRef(render);
}insertStyle(".PFormSelect.is-selected-placeholder .MuiSelect-select{opacity:.38}.PFormSelect .MuiInputBase-root.MuiInputBase-adornedEnd{padding-right:25px}.PFormSelect .MuiSelect-select.MuiSelect-multiple .selected-list:not(:empty){margin-top:-3px;margin-bottom:-3px}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar{width:12px}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1882352941);background-clip:padding-box;border-left:4px rgba(0,0,0,0) solid;border-right:4px rgba(0,0,0,0) solid}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-button:start:decrement,.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-button:end:increment{display:block;height:4px;background-color:rgba(0,0,0,0)}");const PFormSelect = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var { className, name, items: initItems, fullWidth: initFullWidth, onLoadItems, readOnly, multiple, checkbox, placeholder, startAdornment: initStartAdornment, value: initValue, slotProps: initSlotProps, 
    // InputLabelProps: initInputLabelProps,
    // SelectProps: initSelectProps,
    formValueSeparator = ',', formValueSort, width, minWidth = 120, loading: initLoading, onChange, onValue } = _a, props = __rest(_a, ["className", "name", "items", "fullWidth", "onLoadItems", "readOnly", "multiple", "checkbox", "placeholder", "startAdornment", "value", "slotProps", "formValueSeparator", "formValueSort", "width", "minWidth", "loading", "onChange", "onValue"]);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const _b = useFormState(), { fullWidth: formFullWidth, onAddValueItem, onValueChange } = _b, otherFormState = __rest(_b, ["fullWidth", "onAddValueItem", "onValueChange"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [emptyValue] = React.useState([]);
    const [itemValueLabels, setItemValueLabels] = React.useState({});
    const [hasEmptyValue, setHasEmptyValue] = React.useState(false);
    const [isOnGetItemLoading, setIsOnGetItemLoading] = React.useState(false);
    const [loading, setLoading] = React.useState(initLoading);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const startAdornment = React.useMemo(() => {
        if (isOnGetItemLoading || loading) {
            return (React.createElement(React.Fragment, null,
                initStartAdornment,
                (isOnGetItemLoading || loading) && (React.createElement(material.CircularProgress, { size: 16, color: 'inherit', style: { verticalAlign: 'middle', marginLeft: initStartAdornment ? 8 : 0 } }))));
        }
        else {
            return initStartAdornment;
        }
    }, [initStartAdornment, isOnGetItemLoading, loading]);
    /********************************************************************************************************************
     * State - items
     * ******************************************************************************************************************/
    const [items, setItems] = reactHook.useAutoUpdateState(initItems);
    React.useEffect(() => {
        if (items) {
            setItemValueLabels(items.reduce((res, item) => {
                res[`${item.value}`] = item.label;
                return res;
            }, {}));
            setHasEmptyValue(!!items.find(({ value }) => value === ''));
        }
        else {
            setItemValueLabels({});
            setHasEmptyValue(false);
        }
    }, [items]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const itemsValues = React.useMemo(() => {
        if (items) {
            return items.reduce((res, { value }) => {
                res[`${value}`] = value;
                return res;
            }, {});
        }
        else {
            return {};
        }
    }, [items]);
    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((newValue) => {
        let finalValue = newValue == null ? '' : newValue;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (compare.empty(finalValue)) {
                    finalValue = [];
                }
                else {
                    if (typeof finalValue === 'string') {
                        finalValue = Array.from(new Set(finalValue.split(formValueSeparator)));
                    }
                    else {
                        finalValue = [finalValue];
                    }
                }
            }
        }
        else {
            if (Array.isArray(finalValue)) {
                finalValue = compare.empty(finalValue) ? '' : finalValue[0];
            }
            else {
                if (compare.empty(finalValue)) {
                    finalValue = '';
                }
            }
        }
        if (compare.notEmpty(itemsValues)) {
            if (finalValue != null && compare.notEmpty(finalValue)) {
                if (multiple) {
                    if (Array.isArray(finalValue)) {
                        finalValue = finalValue.map((v) => {
                            const realValue = itemsValues[`${v}`];
                            return realValue != null ? realValue : v;
                        });
                    }
                }
                else {
                    const realValue = itemsValues[`${finalValue}`];
                    if (realValue != null && finalValue !== realValue) {
                        finalValue = realValue;
                    }
                }
            }
        }
        finalValue = onValue ? onValue(finalValue) : finalValue;
        return (compare.equal(newValue, finalValue) ? newValue : finalValue);
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const updateValue = React.useCallback((newValue, skipCallback = false) => {
        const finalValue = _setValue(newValue, skipCallback);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, name, onChange, onValueChange]);
    reactHook.useFirstSkipEffect(() => {
        updateValue(valueRef.current);
    }, [multiple]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then((items) => {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const isSelectedPlaceholder = compare.notEmpty(items) && compare.empty(value) && !!placeholder && !hasEmptyValue;
    /********************************************************************************************************************
     * Function - getExtraCommands
     * ******************************************************************************************************************/
    const getBaseCommands = React.useCallback(() => {
        return {
            getReset: () => getFinalValue(initValue),
            reset: () => updateValue(initValue),
            getValue: () => valueRef.current,
            setValue: (value) => updateValue(value),
        };
    }, [getFinalValue, initValue, updateValue, valueRef]);
    const getExtraCommands = React.useCallback(() => {
        let lastItems = items;
        let lastLoading = loading;
        return {
            getFormValueSeparator: () => formValueSeparator,
            isFormValueSort: () => !!formValueSort,
            getItems: () => lastItems,
            setItems: (items) => {
                lastItems = items;
                setItems(lastItems);
            },
            isMultiple: () => !!multiple,
            getLoading: () => !!lastLoading,
            setLoading: (loading) => {
                lastLoading = loading;
                setLoading(lastLoading);
            },
            reloadItems: () => {
                if (onLoadItems) {
                    setIsOnGetItemLoading(true);
                    onLoadItems().then((items) => {
                        setItems(items);
                        setIsOnGetItemLoading(false);
                    });
                }
            },
        };
    }, [items, loading, formValueSeparator, formValueSort, setItems, multiple, onLoadItems]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleRef = React.useCallback((commands) => {
        if (ref) {
            const finalCommands = commands
                ? Object.assign(Object.assign(Object.assign({}, commands), getBaseCommands()), getExtraCommands()) : null;
            if (typeof ref === 'function') {
                return ref(finalCommands);
            }
            else {
                ref.current = finalCommands;
            }
        }
    }, [ref, getBaseCommands, getExtraCommands]);
    const handleAddValueItem = React.useCallback((id, commands) => {
        onAddValueItem(id, Object.assign(Object.assign(Object.assign({}, commands), getBaseCommands()), getExtraCommands()));
    }, [onAddValueItem, getBaseCommands, getExtraCommands]);
    const handleChange = (newValue) => {
        updateValue(newValue);
    };
    const handleValue = React.useCallback((value) => {
        return getFinalValue(value);
    }, [getFinalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const selectProps = React.useMemo(() => {
        var _a;
        const finalSelectProps = {
            displayEmpty: true,
            multiple: !!multiple,
            value,
        };
        if (multiple) {
            finalSelectProps.renderValue = (selected) => {
                if (isSelectedPlaceholder) {
                    return placeholder;
                }
                else {
                    return (React.createElement(material.Box, { className: 'selected-list', sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }, Array.isArray(selected) &&
                        selected.map((selectedValue) => {
                            if (isSelectedPlaceholder) {
                                return React.createElement(material.Chip, { key: selectedValue || '$$$EmptyValuePlaceholder$$$', label: 'hahaha', size: 'small' });
                            }
                            else {
                                return React.createElement(material.Chip, { key: selectedValue, label: itemValueLabels[`${selectedValue}`], size: 'small' });
                            }
                        })));
                }
            };
        }
        finalSelectProps.style = Object.assign(Object.assign({}, finalSelectProps.style), { minWidth: width || minWidth });
        finalSelectProps.MenuProps = Object.assign(Object.assign({}, finalSelectProps.MenuProps), { className: classNames((_a = finalSelectProps.MenuProps) === null || _a === void 0 ? void 0 : _a.className, 'PFormSelect-Menu-Popover') });
        return finalSelectProps;
    }, [isSelectedPlaceholder, itemValueLabels, minWidth, multiple, placeholder, value, width]);
    const finalValue = React.useMemo(() => {
        let newFinalValue;
        if (compare.notEmpty(items)) {
            newFinalValue = value;
        }
        else {
            newFinalValue = multiple ? emptyValue : '';
        }
        selectProps.value = newFinalValue;
        if (multiple) {
            if (selectProps.value != null && !Array.isArray(selectProps.value)) {
                selectProps.value = [selectProps.value];
            }
            if (newFinalValue !== undefined && !Array.isArray(newFinalValue)) {
                newFinalValue = [newFinalValue];
            }
        }
        else {
            if (Array.isArray(selectProps.value)) {
                selectProps.value = selectProps.value[0];
            }
            if (Array.isArray(newFinalValue)) {
                newFinalValue = newFinalValue[0];
            }
            newFinalValue = compare.ifUndefined(newFinalValue, '');
        }
        return newFinalValue;
    }, [emptyValue, items, multiple, selectProps, value]);
    const slotProps = React.useMemo(() => {
        const inputLabelAdditionalProps = {};
        if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
            inputLabelAdditionalProps.shrink = true;
        }
        return {
            inputLabel: Object.assign(Object.assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel), inputLabelAdditionalProps),
            select: Object.assign(Object.assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.select), selectProps),
        };
    }, [hasEmptyValue, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.select, placeholder, selectProps]);
    return (React.createElement(PFormContextProvider, { value: Object.assign(Object.assign({}, otherFormState), { fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, onValueChange: () => { } }) },
        React.createElement(PFormTextField, Object.assign({ select: true, ref: handleRef, name: name, className: classNames(className, 'PFormSelect', isSelectedPlaceholder && 'is-selected-placeholder'), fullWidth: fullWidth }, props, { startAdornment: startAdornment, value: finalValue, clear: false, readOnly: readOnly || compare.empty(items), slotProps: slotProps, onChange: handleChange, onValue: handleValue }),
            isSelectedPlaceholder && (React.createElement(material.MenuItem, { key: '$$$EmptyValuePlaceholder$$$', value: '', disabled: true, sx: { display: 'none' } }, placeholder)),
            items && compare.notEmpty(items) ? (items.map(({ label: itemLabel, value: itemValue, disabled }) => (React.createElement(material.MenuItem, { key: compare.empty(itemValue) ? '$$$EmptyValue$$$' : `${itemValue}`, value: typeof itemValue === 'boolean' ? `${itemValue}` : itemValue, disabled: disabled },
                multiple && checkbox && Array.isArray(value) && (React.createElement(material.Checkbox, { checked: value.includes(itemValue) })),
                itemLabel)))) : (React.createElement(material.MenuItem, { value: '' })))));
}));
PFormSelect.displayName = 'PFormSelect';const PFormBusinessNo = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var { className, validPattern = /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/, onValue } = _a, props = __rest(_a, ["className", "validPattern", "onValue"]);
    const handleValue = React.useCallback((value) => {
        const newValue = formatting.formatBusinessNo(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, Object.assign({ ref: ref, className: classNames(className, 'PFormBusinessNo'), maxLength: 12, validPattern: validPattern, onValue: handleValue }, props)));
});
PFormBusinessNo.displayName = 'PFormBusinessNo';const PFormPersonalNo = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var { className, skipPersonalNumberValidateCheck, validPattern = /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/, onValue, onValidate } = _a, props = __rest(_a, ["className", "skipPersonalNumberValidateCheck", "validPattern", "onValue", "onValidate"]);
    const handleValue = React.useCallback((value) => {
        const newValue = formatting.formatPersonalNo(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    const handleValidate = React.useCallback((value) => {
        if (compare.notEmpty(value) && !skipPersonalNumberValidateCheck) {
            if (value.length === 14 && value.includes('-')) {
                const jumin = value
                    .replace(/-/g, '')
                    .split('')
                    .map((v) => Number(v));
                const ckarr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
                for (let i = 0; i < jumin.length - 1; i += 1) {
                    jumin[i] = jumin[i] * ckarr[i];
                }
                const juminlast = jumin[jumin.length - 1];
                let sum = 0;
                for (let i = 0; i < jumin.length - 1; i += 1) {
                    sum += jumin[i];
                }
                sum = sum % 11;
                sum = 11 - sum;
                if (sum > 9) {
                    sum = sum % 10;
                }
                if (sum != juminlast && juminlast != undefined) {
                    return '유효하지 않은 값입니다.';
                }
                return onValidate ? onValidate(value) : true;
            }
            else {
                return '유효하지 않은 값입니다.';
            }
        }
        else {
            return onValidate ? onValidate(value) : true;
        }
    }, [onValidate, skipPersonalNumberValidateCheck]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, Object.assign({ ref: ref, className: classNames(className, 'FormPersonalNo'), maxLength: 14, validPattern: validPattern, onValue: handleValue, onValidate: handleValidate }, props)));
});
PFormPersonalNo.displayName = 'FormPersonalNo';insertStyle(".PFormItemBase .PFormItemBase-InputLabel{overflow:visible;padding-left:5px}.PFormItemBase .PFormItemBase-InputLabel.MuiInputLabel-sizeSmall{transform:translate(0, -1.5px) scale(0.7)}.PFormItemBase.variant-standard .PFormItemBase-Control-wrap{margin-top:16px}");const PFormItemBase = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, fullWidth: initFullWidth, 
//----------------------------------------------------------------------------------------------------------------
control, controlHeight, controlSingleHeight, controlVerticalCenter, controlContainerStyle, required, labelIcon, label, focused, helperText, helperTextProps, error, hideLabel, hidden, autoSize, 
//----------------------------------------------------------------------------------------------------------------
className, style, sx, }, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, fullWidth: formFullWidth, formColWithLabel, formColWithHelperText, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - inputHeight
     * ******************************************************************************************************************/
    const { ref: inputRef, height: resizedInputHeight } = reactResizeDetector.useResizeDetector({ handleWidth: false });
    const inputHeight = compare.ifUndefined(resizedInputHeight, 0);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const controlMarginTop = React.useMemo(() => {
        let topMargin = 0;
        if (inputHeight && controlHeight && controlVerticalCenter) {
            if (controlHeight > inputHeight) {
                if (controlSingleHeight) {
                    topMargin = inputHeight / 2 - controlSingleHeight / 2;
                }
                else {
                    topMargin = 0;
                }
            }
            else {
                topMargin = inputHeight / 2 - controlHeight / 2;
            }
        }
        else {
            topMargin = 0;
        }
        let withLabelControlAddTopMargin;
        if (size === 'small') {
            withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 13;
        }
        else {
            withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 15;
        }
        let controlMarginTop = 0;
        switch (variant) {
            case 'outlined':
            case 'filled':
                if (label || formColWithLabel) {
                    controlMarginTop = topMargin + withLabelControlAddTopMargin;
                }
                else {
                    controlMarginTop = topMargin;
                }
                break;
            case 'standard':
                controlMarginTop = 0;
                break;
        }
        return controlMarginTop;
    }, [
        controlHeight,
        controlSingleHeight,
        controlVerticalCenter,
        formColWithLabel,
        inputHeight,
        label,
        size,
        variant,
    ]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    // wrapStyle
    const wrapStyle = {
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
    };
    if (formColWithLabel) {
        wrapStyle.marginTop = -20;
    }
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { style: wrapStyle },
        React.createElement(material.FormControl, { ref: ref, variant: 'standard', className: classNames(className, 'PFormItemBase', !!label && 'with-label', `variant-${variant}`, controlVerticalCenter && 'control-vertical-center', !!error && 'error'), style: style, color: color, error: error, focused: focused, sx: sx },
            !formColWithLabel && label && (React.createElement(material.InputLabel, { shrink: true, className: 'PFormItemBase-InputLabel', size: size, required: required }, labelIcon ? (React.createElement(React.Fragment, null,
                React.createElement(reactComponent.PIcon, { style: { verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 } }, labelIcon),
                React.createElement("span", { style: { verticalAlign: 'middle' } }, label))) : (label))),
            React.createElement("div", { className: 'PFormItemBase-Control-wrap', style: Object.assign({ display: 'grid', marginTop: hideLabel ? 0 : undefined }, controlContainerStyle) }, autoSize ? (React.createElement(React.Fragment, null,
                variant === 'standard' && (React.createElement(material.Input, { ref: (ref) => {
                        inputRef.current = ref;
                    }, size: size, fullWidth: false, disabled: true, style: { visibility: 'hidden', width: 0 } })),
                variant === 'outlined' && (React.createElement(material.OutlinedInput, { ref: (ref) => {
                        inputRef.current = ref;
                    }, size: size, fullWidth: false, disabled: true, style: { visibility: 'hidden', width: 0 } })),
                variant === 'filled' && (React.createElement(material.FilledInput, { ref: (ref) => {
                        inputRef.current = ref;
                    }, size: size, fullWidth: false, disabled: true, style: { visibility: 'hidden', width: 0 } })),
                React.createElement("div", { className: 'PFormItemBase-Control', style: {
                        width: fullWidth ? '100%' : 'auto',
                        display: 'grid',
                        marginTop: -inputHeight,
                        height: compare.ifUndefined(controlHeight, inputHeight) > inputHeight ? controlHeight : undefined,
                        alignItems: 'flex-start',
                        paddingTop: controlMarginTop,
                        position: 'relative',
                    } }, control))) : (React.createElement("div", { style: {
                    width: fullWidth ? '100%' : 'auto',
                    display: 'grid',
                    marginTop: controlMarginTop,
                } }, control))),
            !formColWithHelperText && helperText && (React.createElement(material.FormHelperText, Object.assign({ component: 'div' }, helperTextProps), helperText)))));
});
PFormItemBase.displayName = 'PFormItemBase';const PFormCheckbox = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { variant: initVariant, size: initSize, color: initColor, focused: initFocused, fullWidth: initFullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name, labelIcon, label, checked: initChecked = false, inputRef: initInputRef, action: initAction, readOnly, disabled: initDisabled, hidden: initHidden, text, error: initError, helperText, value: initValue = 1, data: initData, uncheckedValue: initUncheckedValue = 0, exceptValue, onChange, onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className, style: initStyle, sx } = _a, props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "name", "labelIcon", "label", "checked", "inputRef", "action", "readOnly", "disabled", "hidden", "text", "error", "helperText", "value", "data", "uncheckedValue", "exceptValue", "onChange", "onValidate", "className", "style", "sx"]);
    const id = React.useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    const theme = material.useTheme();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, fullWidth: formFullWidth, disabled: formDisabled, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const inputRef = React.useRef(null);
    const actionRef = React.useRef(null);
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    const { ref: labelRef, width, height } = reactResizeDetector.useResizeDetector();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    const [uncheckedValueRef, , setUncheckedValue] = reactHook.useAutoUpdateRefState(initUncheckedValue, React.useCallback((newUncheckedValue) => (newUncheckedValue == null ? 0 : newUncheckedValue), []));
    const [valueRef, , setValue] = reactHook.useAutoUpdateRefState(initValue, React.useCallback((newValue) => (newValue == null ? 0 : newValue), []));
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback(function (checked) {
        if (onValidate) {
            const onValidateResult = onValidate(checked);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - checked
     * ******************************************************************************************************************/
    const [checkedRef, checked, _setChecked] = reactHook.useAutoUpdateRefState(initChecked);
    const updateChecked = React.useCallback((newChecked, notFireOnChange = false) => {
        const finalChecked = _setChecked(newChecked);
        if (error)
            validate(finalChecked);
        if (!notFireOnChange && onChange)
            onChange(finalChecked);
        onValueChange(name, finalChecked);
        return finalChecked;
    }, [_setChecked, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a, _b, _c, _d;
        if (initInputRef) {
            (_a = initInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
        if (initAction) {
            (_c = initAction.current) === null || _c === void 0 ? void 0 : _c.focusVisible();
        }
        else {
            (_d = actionRef.current) === null || _d === void 0 ? void 0 : _d.focusVisible();
        }
    }, [initInputRef, inputRef, initAction, actionRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormCheckbox',
        getName: () => name,
        getReset: () => initChecked,
        reset: () => updateChecked(initChecked),
        getValue: () => valueRef.current,
        setValue,
        getData: () => dataRef.current,
        setData,
        getUncheckedValue: () => uncheckedValueRef.current,
        setUncheckedValue,
        getChecked: () => checkedRef.current,
        setChecked: updateChecked,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(checkedRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
    }), [
        checkedRef,
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        hiddenRef,
        initChecked,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setUncheckedValue,
        setValue,
        uncheckedValueRef,
        updateChecked,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((e, checked) => {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            updateChecked(checked);
            setTimeout(() => {
                onValueChangeByUser(name, checked);
                onRequestSearchSubmit(name, checked);
            });
        }
    }, [readOnly, updateChecked, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormCheckbox'), labelIcon: labelIcon, label: label, error: error, fullWidth: fullWidth, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: Object.assign({ width: fullWidth ? '100%' : width || 100, paddingLeft: 3 }, initStyle), sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React.createElement(material.FormControlLabel, { ref: (ref) => {
                labelRef.current = ref;
            }, control: React.createElement(material.Checkbox, Object.assign({ name: name, color: color, size: size, slotProps: { input: { ref: initInputRef ? initInputRef : inputRef } }, action: initAction ? initAction : actionRef, checked: checked, checkedIcon: React.createElement(iconsMaterial.CheckBox, { color: error ? 'error' : undefined }), icon: React.createElement(iconsMaterial.CheckBoxOutlineBlank, { color: error ? 'error' : undefined }), onChange: handleChange, disabled: disabled || readOnly }, props)), label: React.createElement(material.Typography, { color: error ? 'error' : readOnly || disabled ? theme.palette.text.disabled : undefined, whiteSpace: 'nowrap' }, text) }) }));
});
PFormCheckbox.displayName = 'PFormCheckbox';const PADDING_LEFT = 3;
const PFormRadioGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var { variant: initVariant, size: initSize, color: initColor, focused: initFocused, fullWidth: initFullWidth, hidden: initHidden, startAdornment, endAdornment, 
    //----------------------------------------------------------------------------------------------------------------
    name, width: initWidth, labelIcon, label, inline = true, loading: initLoading, nowrap, items: initItems, value: initValue, data: initData, error: initError, helperText, disabled: initDisabled, readOnly, required, exceptValue, onLoadItems, onChange, onValue, onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className, style: initStyle, sx } = _a, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "hidden", "startAdornment", "endAdornment", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "data", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"]);
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, fullWidth: formFullWidth, disabled: formDisabled, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    const [fullWidth, setFullWidth] = reactHook.useAutoUpdateState(initFullWidth == null ? formFullWidth : initFullWidth);
    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/
    const theme = material.useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const baseRef = React.useRef(null);
    const firstInputRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [isOnGetItemLoading, setIsOnGetItemLoading] = React.useState(false);
    const [width, setWidth] = reactHook.useAutoUpdateState(initWidth || '100%');
    const [formColWrapRect, setFormColWrapRect] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    const [loadingRef, loading, setLoading] = reactHook.useAutoUpdateRefState(initLoading);
    const [itemsRef, items, setItems] = reactHook.useAutoUpdateRefState(initItems);
    /********************************************************************************************************************
     * State - radioGroupNoWrapRect (ResizeDetector)
     * ******************************************************************************************************************/
    const [radioGroupNoWrapRect, setRadioGroupNoWrapRect] = React.useState();
    const { ref: resizeWidthDetectorRef } = reactResizeDetector.useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        onResize() {
            var _a;
            setRadioGroupNoWrapRect((_a = resizeWidthDetectorRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect());
        },
    });
    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/
    const { height, ref: resizeHeightDetectorRef } = reactResizeDetector.useResizeDetector();
    const { height: realHeight, ref: resizeRealHeightDetectorRef } = reactResizeDetector.useResizeDetector();
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback(function (value) {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((value) => {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const updateValue = React.useCallback((newValue, skipCallback = false) => {
        const finalValue = _setValue(newValue, skipCallback);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then((items) => {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        if (!fullWidth || initWidth) {
            const findParentByClassName = (element, className) => {
                const parent = element.parentElement;
                if (parent) {
                    if ((parent.className || '').includes(className)) {
                        return parent;
                    }
                    else {
                        return findParentByClassName(parent, className);
                    }
                }
            };
            const wrap = baseRef.current && findParentByClassName(baseRef.current, 'FormCol-Children-Wrap');
            if (wrap) {
                const resize = () => {
                    if (resizeWidthDetectorRef.current) {
                        setRadioGroupNoWrapRect(resizeWidthDetectorRef.current.getBoundingClientRect());
                    }
                    setFormColWrapRect(wrap.getBoundingClientRect());
                };
                window.addEventListener('resize', resize);
                resize();
                return () => {
                    window.removeEventListener('resize', resize);
                };
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullWidth, initWidth]);
    React.useEffect(() => {
        let width;
        let fullWidth = initFullWidth == null ? formFullWidth : initFullWidth;
        if (initWidth) {
            width = initWidth;
        }
        else if (fullWidth) {
            width = '100%';
        }
        else {
            if (radioGroupNoWrapRect === null || radioGroupNoWrapRect === void 0 ? void 0 : radioGroupNoWrapRect.width) {
                width = radioGroupNoWrapRect.width + PADDING_LEFT;
            }
        }
        const formColWrapPaddingLeft = radioGroupNoWrapRect && formColWrapRect ? radioGroupNoWrapRect.left - formColWrapRect.left : 0;
        if ((!fullWidth || !!initWidth) && width && (formColWrapRect === null || formColWrapRect === void 0 ? void 0 : formColWrapRect.width)) {
            if (typeof width === 'number' && width > formColWrapRect.width - formColWrapPaddingLeft) {
                width = formColWrapRect.width - formColWrapPaddingLeft;
                fullWidth = false;
            }
        }
        setWidth(width);
        setFullWidth(fullWidth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initWidth, formFullWidth, initFullWidth, formColWrapRect, radioGroupNoWrapRect]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = firstInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormRadioGroup',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
        getItems: () => itemsRef.current,
        setItems: (v) => setItems(v),
        getLoading: () => !!loadingRef.current,
        setLoading,
        reloadItems: () => {
            if (onLoadItems) {
                setIsOnGetItemLoading(true);
                onLoadItems().then((items) => {
                    setItems(items);
                    setIsOnGetItemLoading(false);
                });
            }
        },
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        initValue,
        itemsRef,
        loadingRef,
        name,
        onLoadItems,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((e) => {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            let finalValue = e.target.value;
            if (items) {
                const item = items.find(({ value }) => value.toString() === finalValue);
                if (item) {
                    finalValue = item.value;
                }
            }
            finalValue = getFinalValue(finalValue);
            if (value !== finalValue) {
                updateValue(finalValue, true);
                setTimeout(() => {
                    onValueChangeByUser(name, finalValue);
                    onRequestSearchSubmit(name, finalValue);
                });
            }
        }
    }, [readOnly, items, getFinalValue, value, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const control = React.useMemo(() => {
        return (React.createElement("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', width: fullWidth ? '100%' : undefined } },
            startAdornment && React.createElement("div", null, startAdornment),
            React.createElement("div", { style: { flex: 1 } },
                !fullWidth && !isOnGetItemLoading && !loading && items && (React.createElement("div", { ref: (ref) => {
                        resizeWidthDetectorRef.current = ref;
                    }, style: {
                        display: 'grid',
                        position: 'absolute',
                        whiteSpace: 'nowrap',
                        visibility: 'hidden',
                    } },
                    React.createElement(material.RadioGroup, Object.assign({}, props, { style: { display: 'inline-flex', flexWrap: 'nowrap' }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), items.map(({ value, label, disabled: itemDisabled }, idx) => (React.createElement(material.FormControlLabel, { ref: idx === 0
                            ? (ref) => {
                                resizeHeightDetectorRef.current = ref;
                            }
                            : null, key: idx, control: React.createElement(material.Radio, { icon: React.createElement(iconsMaterial.RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React.createElement(iconsMaterial.RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size }), label: label, style: {
                            color: error ? theme.palette.error.main : '',
                            marginTop: -5,
                            marginBottom: -5,
                            whiteSpace: 'nowrap',
                        }, value: value, disabled: disabled || readOnly || itemDisabled })))))),
                React.createElement("div", null,
                    React.createElement(material.RadioGroup, Object.assign({}, props, { ref: (ref) => {
                            resizeRealHeightDetectorRef.current = ref;
                        }, style: {
                            display: 'inline-flex',
                            visibility: width == null ? 'hidden' : undefined,
                            position: width == null ? 'absolute' : undefined,
                            flexWrap: nowrap ? 'nowrap' : undefined,
                        }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), isOnGetItemLoading || loading ? (React.createElement("div", { style: { position: 'relative' } },
                        React.createElement(material.FormControlLabel, { label: '', control: React.createElement(material.Radio, { color: color, size: size }), style: { visibility: 'hidden' } }),
                        React.createElement("div", { style: { position: 'absolute', left: 0, top: 11, opacity: 0.54 } },
                            React.createElement(material.CircularProgress, { size: size === 'small' ? 12 : 16, color: 'inherit' })))) : (React.createElement(React.Fragment, null, items &&
                        items.map(({ value, label, disabled: itemDisabled }, idx) => (React.createElement(material.FormControlLabel, { key: idx, control: React.createElement(material.Radio, { icon: React.createElement(iconsMaterial.RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React.createElement(iconsMaterial.RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size, slotProps: idx === 0 ? { input: { ref: firstInputRef } } : undefined }), label: label, style: {
                                color: error ? theme.palette.error.main : '',
                                whiteSpace: 'nowrap',
                                marginTop: -5,
                                marginBottom: -5,
                            }, value: value, disabled: disabled || readOnly || itemDisabled })))))))),
            endAdornment && React.createElement("div", null, endAdornment)));
    }, [
        color,
        disabled,
        endAdornment,
        error,
        fullWidth,
        handleChange,
        inline,
        isOnGetItemLoading,
        items,
        loading,
        name,
        nowrap,
        props,
        readOnly,
        resizeHeightDetectorRef,
        resizeRealHeightDetectorRef,
        resizeWidthDetectorRef,
        size,
        startAdornment,
        theme.palette.error.main,
        value,
        width,
    ]);
    const singleHeight = height || (size === 'small' ? 35 : 39);
    const isMultiline = singleHeight <= compare.ifUndefined(realHeight, 0);
    return (React.createElement(PFormItemBase, { focused: focused, ref: baseRef, className: classNames(className, 'PFormValueItem', 'PFormRadioGroup'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, fullWidth: fullWidth, required: required, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2, marginTop: isMultiline && compare.notEmpty(label) ? 20 : 0 } }, style: Object.assign({ width, paddingLeft: PADDING_LEFT }, initStyle), sx: sx, hidden: hidden, autoSize: true, controlHeight: realHeight ? realHeight : singleHeight, controlContainerStyle: {
            paddingTop: isMultiline && size === 'medium' ? 4 : undefined,
        }, controlVerticalCenter: !isMultiline, control: control }));
}));
PFormRadioGroup.displayName = 'PFormRadioGroup';insertStyle(".PFormToggleButtonGroup.loading .PFormItemBase-Control-wrap .PFormItemBase-Control{align-items:center !important}.PFormToggleButtonGroup .ToggleButton{display:inline-flex;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-items:center}.PFormToggleButtonGroup .ToggleButton .__label__{height:0;line-height:0 !important;overflow:visible !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton,.PFormToggleButtonGroup.type-radio .ToggleButton{padding-left:3px;padding-right:5px;border:0 !important;margin-left:0 !important;justify-content:flex-start;display:flex;background-color:rgba(0,0,0,0) !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton:not(:last-child),.PFormToggleButtonGroup.type-radio .ToggleButton:not(:last-child){margin-right:5px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-unchecked__{margin-right:3px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__{display:none}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected.Mui-disabled,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected.Mui-disabled{opacity:.5}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-checked__{display:block}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-unchecked__{display:none}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}");const PFormToggleButtonGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function ({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, fullWidth: initFullWidth, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label, type = 'button', loading: initLoading, items: initItems, value: initValue, data: initData, error: initError, helperText, disabled: initDisabled, readOnly, required, notAllowEmptyValue, exceptValue, width: initWidth, multiple, formValueSeparator = ',', formValueSort, hidden: initHidden, itemWidth, onLoadItems, startAdornment, endAdornment, 
//----------------------------------------------------------------------------------------------------------------
onChange, onValue, onValidate, 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    const labelId = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, fullWidth: formFullWidth, disabled: formDisabled, formColWidth, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Variables - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const fullWidth = type === 'checkbox' || type === 'radio' ? true : compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    const [focused, setFocused] = reactHook.useAutoUpdateState(compare.ifUndefined(initFocused, formFocused));
    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/
    const theme = material.useTheme();
    /********************************************************************************************************************
     * State - width (ResizeDetector)
     * ******************************************************************************************************************/
    const { ref: refForResizeWidthDetect, width } = reactResizeDetector.useResizeDetector({ handleHeight: false });
    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/
    const { ref: refForButtonResizeHeightDetect, height: buttonHeight } = reactResizeDetector.useResizeDetector({ handleWidth: false });
    const { ref: refForButtonsResizeHeightDetect, height: realHeight } = reactResizeDetector.useResizeDetector({ handleWidth: false });
    const { ref: refForLoadingResizeHeightDetect, height: loadingHeight } = reactResizeDetector.useResizeDetector({ handleWidth: false });
    const height = compare.ifUndefined(buttonHeight, loadingHeight);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [isOnGetItemLoading, setIsOnGetItemLoading] = React.useState(false);
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    const [loadingRef, loading, setLoading] = reactHook.useAutoUpdateRefState(initLoading);
    const [itemsRef, items, _setItems] = reactHook.useAutoUpdateRefState(initItems);
    /********************************************************************************************************************
     * State Function
     * ******************************************************************************************************************/
    const setItems = React.useCallback((newItems) => {
        _setItems(newItems);
    }, [_setItems]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const itemsValues = React.useMemo(() => {
        if (items) {
            return items.reduce((res, { value }) => {
                res[`${value}`] = value;
                return res;
            }, {});
        }
        else {
            return {};
        }
    }, [items]);
    const style = React.useMemo(() => {
        let finalWidth;
        if (initWidth) {
            finalWidth = initWidth;
        }
        else {
            if (isOnGetItemLoading) {
                finalWidth = 16;
            }
            else if (fullWidth) {
                finalWidth = '100%';
            }
            else {
                finalWidth = width || 0;
                if (formColWidth) {
                    if (finalWidth > formColWidth) {
                        finalWidth = formColWidth;
                    }
                }
            }
        }
        return Object.assign({ width: finalWidth }, initStyle);
    }, [formColWidth, fullWidth, initStyle, initWidth, isOnGetItemLoading, width]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback((error, errorHelperText) => {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback((value) => {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((value) => {
        let finalValue = value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (finalValue != null && compare.notEmpty(finalValue)) {
                    if (typeof finalValue === 'string') {
                        finalValue = Array.from(new Set(finalValue.split(formValueSeparator)));
                    }
                    else {
                        finalValue = [finalValue];
                    }
                }
                else {
                    finalValue = [];
                }
            }
        }
        else {
            if (Array.isArray(finalValue)) {
                if (compare.notEmpty(finalValue)) {
                    finalValue = finalValue[0];
                }
                else {
                    finalValue = undefined;
                }
            }
        }
        if (compare.notEmpty(itemsValues)) {
            if (finalValue != null && compare.notEmpty(finalValue)) {
                if (multiple) {
                    if (Array.isArray(finalValue)) {
                        finalValue = finalValue.map((v) => {
                            const realValue = itemsValues[`${v}`];
                            return realValue != null ? realValue : v;
                        });
                    }
                }
                else {
                    const realValue = itemsValues[`${finalValue}`];
                    if (realValue != null && finalValue !== realValue) {
                        finalValue = realValue;
                    }
                }
            }
        }
        finalValue = onValue ? onValue(finalValue) : finalValue;
        return compare.equal(value, finalValue) ? value : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const updateValue = React.useCallback((newValue, skipCallback = false) => {
        const finalValue = _setValue(newValue, skipCallback);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    reactHook.useFirstSkipEffect(() => {
        updateValue(valueRef.current);
    }, [multiple]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then((items) => {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        if (notAllowEmptyValue) {
            if (items && compare.notEmpty(items)) {
                let setFirstItem = false;
                if (Array.isArray(value)) {
                    if (compare.empty(value)) {
                        setFirstItem = true;
                    }
                }
                else {
                    if (value == null) {
                        setFirstItem = true;
                    }
                }
                if (setFirstItem) {
                    updateValue((multiple ? [items[0].value] : items[0].value));
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, value, multiple, notAllowEmptyValue]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(() => {
        var _a;
        (_a = refForButtonResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [refForButtonResizeHeightDetect]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormToggleButtonGroup',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorText) => setErrorErrorHelperText(error, error ? errorText : undefined),
        getFormValueSeparator: () => formValueSeparator,
        isFormValueSort: () => !!formValueSort,
        getItems: () => itemsRef.current,
        setItems,
        isMultiple: () => !!multiple,
        getLoading: () => !!loadingRef.current,
        setLoading,
        reloadItems: () => {
            if (onLoadItems) {
                setIsOnGetItemLoading(true);
                onLoadItems().then((items) => {
                    setItems(items);
                    setIsOnGetItemLoading(false);
                });
            }
        },
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueSeparator,
        formValueSort,
        getFinalValue,
        hiddenRef,
        initValue,
        itemsRef,
        loadingRef,
        multiple,
        name,
        onLoadItems,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((e, newValue) => {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            let finalValue = newValue;
            if (notAllowEmptyValue) {
                if (multiple) {
                    if (compare.empty(finalValue)) {
                        if (Array.isArray(valueRef.current) && valueRef.current.length > 0) {
                            finalValue = [valueRef.current[0]];
                        }
                    }
                }
                else {
                    if (finalValue == null) {
                        finalValue = valueRef.current;
                    }
                }
            }
            finalValue = getFinalValue(finalValue);
            if (!compare.equal(valueRef.current, finalValue)) {
                updateValue(finalValue, true);
                setTimeout(() => {
                    onValueChangeByUser(name, finalValue);
                    onRequestSearchSubmit(name, finalValue);
                });
            }
        }
    }, [
        readOnly,
        notAllowEmptyValue,
        getFinalValue,
        valueRef,
        multiple,
        updateValue,
        onValueChangeByUser,
        name,
        onRequestSearchSubmit,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const formControlBaseProps = {};
    if (focused) {
        formControlBaseProps.focused = true;
    }
    const buttons = React.useMemo(() => {
        let finalItemWidth = undefined;
        if (type === 'button' && !fullWidth) {
            finalItemWidth = 'auto';
        }
        else if (!fullWidth || type === 'radio' || type === 'checkbox') {
            finalItemWidth = itemWidth || 'auto';
        }
        const buttonStyle = {
            borderColor: error ? theme.palette.error.main : '',
            color: error ? theme.palette.error.main : '',
            width: finalItemWidth,
        };
        return (items &&
            items.map(({ value, label, disabled: itemDisabled, color: itemColor }, idx) => {
                return (React.createElement(material.ToggleButton, { ref: (ref) => {
                        if (idx === 0) {
                            refForButtonResizeHeightDetect.current = ref;
                        }
                    }, key: idx, size: size, className: 'ToggleButton', value: value, color: itemColor || color, disabled: disabled || readOnly || itemDisabled, style: buttonStyle, onFocus: () => setFocused(initFocused || true), onBlur: () => setFocused(initFocused || false) },
                    type === 'checkbox' ? (React.createElement(React.Fragment, null,
                        React.createElement(material.Icon, { className: '__checkbox-unchecked__' }, "check_box_outline_blank"),
                        React.createElement(material.Icon, { className: '__checkbox-checked__' }, "check_box"))) : (type === 'radio' && (React.createElement(React.Fragment, null,
                        React.createElement(React.Fragment, null,
                            React.createElement(material.Icon, { className: '__checkbox-unchecked__' }, "radio_button_unchecked"),
                            React.createElement(material.Icon, { className: '__checkbox-checked__' }, "radio_button_checked"))))),
                    React.createElement("span", { className: '__label__' }, label)));
            }));
    }, [
        color,
        disabled,
        error,
        fullWidth,
        initFocused,
        itemWidth,
        items,
        readOnly,
        refForButtonResizeHeightDetect,
        setFocused,
        size,
        theme.palette.error.main,
        type,
    ]);
    const realValue = React.useMemo(() => {
        let newRealValue = value == null ? null : value;
        if (items && value != null) {
            if (Array.isArray(newRealValue)) {
                const stringRealValues = newRealValue.map((v) => v.toString());
                if (multiple) {
                    const foundItems = items.filter((v) => stringRealValues.includes(v.value.toString()));
                    newRealValue = foundItems.map((v) => v.value);
                }
            }
            else if (newRealValue != null) {
                const stringRealValue = newRealValue.toString();
                const foundItem = items.find((v) => v.value.toString() === stringRealValue);
                if (foundItem) {
                    newRealValue = foundItem.value;
                }
            }
        }
        return newRealValue;
    }, [items, multiple, value]);
    const control = React.useMemo(() => {
        return isOnGetItemLoading || loading ? (React.createElement("div", { style: { opacity: 0.54 }, ref: (ref) => {
                refForLoadingResizeHeightDetect.current = ref;
            } },
            React.createElement(material.CircularProgress, { size: 16, color: 'inherit' }))) : (React.createElement("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', width: fullWidth ? '100%' : undefined } },
            startAdornment && React.createElement("div", null, startAdornment),
            React.createElement("div", { style: { flex: 1 } },
                !fullWidth && !isOnGetItemLoading && !loading && items && (React.createElement("div", { ref: (ref) => {
                        refForResizeWidthDetect.current = ref;
                    }, style: {
                        display: 'grid',
                        position: 'absolute',
                        whiteSpace: 'nowrap',
                        visibility: 'hidden',
                    } },
                    React.createElement(material.ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple }, buttons))),
                React.createElement(material.ToggleButtonGroup, { ref: (ref) => {
                        refForButtonsResizeHeightDetect.current = ref;
                    }, className: 'ToggleButtonGroup', exclusive: !multiple, fullWidth: fullWidth, value: realValue, onChange: handleChange, style: {
                        width: !fullWidth && formColWidth && typeof width === 'number' && width > formColWidth
                            ? formColWidth
                            : undefined,
                        flexWrap: type === 'checkbox' || type === 'radio' ? 'wrap' : 'nowrap',
                    }, "aria-labelledby": compare.notEmpty(label) ? labelId : undefined }, isOnGetItemLoading || loading || !items || compare.empty(items) ? (React.createElement(material.ToggleButton, { ref: (ref) => {
                        refForButtonResizeHeightDetect.current = ref;
                    }, size: size, className: 'ToggleButton', disabled: disabled || readOnly, value: '', style: { visibility: 'hidden' } })) : (buttons))),
            endAdornment && React.createElement("div", null, endAdornment)));
    }, [
        buttons,
        disabled,
        endAdornment,
        formColWidth,
        fullWidth,
        handleChange,
        isOnGetItemLoading,
        items,
        label,
        labelId,
        loading,
        multiple,
        readOnly,
        realValue,
        refForButtonResizeHeightDetect,
        refForButtonsResizeHeightDetect,
        refForLoadingResizeHeightDetect,
        refForResizeWidthDetect,
        size,
        startAdornment,
        type,
        width,
    ]);
    const controlHeight = height || 0;
    const isMultiline = controlHeight <= compare.ifUndefined(realHeight, 0);
    return (React.createElement(PFormItemBase, Object.assign({}, formControlBaseProps, { className: classNames(className, 'PFormValueItem', 'PFormToggleButtonGroup', `variant-${variant}`, `size-${size}`, !!label && 'with-label', !!fullWidth && 'full-width', `type-${type}`, (isOnGetItemLoading || loading) && 'loading'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, required: required, fullWidth: fullWidth, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: realHeight ? realHeight + (isMultiline ? 13 : 0) : controlHeight, controlVerticalCenter: isMultiline ? false : isOnGetItemLoading || loading, control: control })));
}));
PFormToggleButtonGroup.displayName = 'PFormToggleButtonGroup';const PFormRating = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, 
//----------------------------------------------------------------------------------------------------------------
precision = 1, highlightSelectedOnly, icon, emptyIcon, max, hidden: initHidden, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label, readOnly, required, disabled: initDisabled, error: initError, helperText, value: initValue = 0, data: initData, exceptValue, onChange, onValidate, onValue, 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, disabled: formDisabled, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    const [focused, setFocused] = reactHook.useAutoUpdateState(initFocused == null ? formFocused : initFocused);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const inputRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * State - width, height
     * ******************************************************************************************************************/
    const { ref: ratingRef, width, height } = reactResizeDetector.useResizeDetector();
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    const validate = React.useCallback(function (value) {
        if (required && (compare.empty(value) || value === 0)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((value) => {
        const finalValue = value || 0;
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(() => {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormRating',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((e, value) => {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            const finalValue = updateValue(value);
            setTimeout(() => {
                onValueChangeByUser(name, finalValue);
                onRequestSearchSubmit(name, finalValue);
            });
        }
    }, [readOnly, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormRating'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, required: required, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: Object.assign({ width: width || 100 }, initStyle), sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 21 : 26), controlVerticalCenter: true, control: React.createElement(material.Rating, { ref: (ref) => {
                ratingRef.current = ref;
            }, size: size === 'medium' ? 'large' : 'medium', name: name, precision: precision, highlightSelectedOnly: highlightSelectedOnly, value: value, disabled: disabled || readOnly, max: max, icon: React.createElement(reactComponent.PIcon, { color: color, size: 'inherit' }, icon ? icon : 'Star'), emptyIcon: React.createElement(reactComponent.PIcon, { size: 'inherit' }, emptyIcon ? emptyIcon : 'StarBorder'), onChange: handleChange, onFocus: () => setFocused(initFocused || true), onBlur: () => setFocused(initFocused || false) }) }));
});
PFormRating.displayName = 'PFormRating';const getFinalValue$8 = (value) => {
    return value || '';
};insertStyle(".PFormTextEditor.initializing textarea{display:none}.PFormTextEditor.error .tox-tinymce{border-color:#d32f2f}.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item{padding-right:20px !important}.tox-notifications-container{display:none}");const PFormTextEditor = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, 
// ---------------------------------------------------------------------------------------------------------------
apiKey, toolbar, onOpenWindow, onCloseWindow, 
//----------------------------------------------------------------------------------------------------------------
menubar = true, height = 500, hidden: initHidden, onImageUpload, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label, readOnly, required, disabled: initDisabled, error: initError, helperText: helperText, value: initValue = '', data: initData, exceptValue, onChange, onValidate, 
//----------------------------------------------------------------------------------------------------------------
className, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, disabled: formDisabled, onAddValueItem, onValueChange, onRemoveValueItem, onValueChangeByUser, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    const [focused, setFocused] = reactHook.useAutoUpdateState(compare.ifUndefined(initFocused, formFocused));
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const editorRef = React.useRef(null);
    const keyDownTime = React.useRef(0);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [initialized, setInitialized] = React.useState(false);
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback(function (value) {
        var _a;
        if (required && compare.empty((_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.getContent())) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue$8);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [editorRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormTextEditor',
        getName: () => name,
        getReset: () => getFinalValue$8(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorText) => setErrorErrorHelperText(error, error ? errorText : undefined),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleEditorChange = React.useCallback((value) => {
        updateValue(value);
        if (new Date().getTime() - keyDownTime.current < 300) {
            setTimeout(() => {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, value);
            });
        }
    }, [name, onValueChangeByUser, updateValue]);
    const handleKeyDown = React.useCallback(() => {
        keyDownTime.current = new Date().getTime();
    }, []);
    const handleImageUpload = React.useCallback((blobInfo, progress) => {
        return new Promise((resolve, reject) => {
            const onImageUploadFunc = onImageUpload !== null && onImageUpload !== void 0 ? onImageUpload : PFormTextEditor.onImageUpload;
            if (onImageUploadFunc) {
                onImageUploadFunc(blobInfo.blob(), (url) => {
                    resolve(url);
                }, (err) => reject(err), progress);
            }
            else {
                reject('onImageUpload not implemented.');
            }
        });
    }, [onImageUpload]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormTextEditor', !initialized && 'initializing'), labelIcon: labelIcon, label: label, error: error, required: required, fullWidth: true, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: { width: '100%' }, hidden: hidden, controlHeight: height, control: React.createElement(React.Fragment, null,
            !initialized ? React.createElement(material.Skeleton, { variant: 'rectangular', width: '100%', height: height }) : null,
            React.createElement(tinymceReact.Editor, { apiKey: compare.ifEmpty(apiKey, PFormTextEditor.apiKey), value: value, disabled: readOnly || disabled, init: {
                    height,
                    menubar,
                    language: 'ko_KR',
                    contextmenu: false,
                    content_style: 'body {font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: hsl(0,0%,20%);} p {padding:0; margin:0}',
                    plugins: [
                        'lists',
                        'advlist',
                        'image',
                        'autolink',
                        'link',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'insertdatetime',
                        'media',
                        'table',
                        'wordcount',
                    ],
                    toolbar: toolbar ||
                        'undo redo | \
                   formatselect bullist numlist outdent indent | \
                   bold italic | align | forecolor backcolor | \
                   link image media | advtable | code',
                    images_upload_handler: handleImageUpload,
                }, onInit: (evt, editor) => {
                    editorRef.current = editor;
                    editor.on('OpenWindow', () => {
                        var _a, _b;
                        onOpenWindow === null || onOpenWindow === void 0 ? void 0 : onOpenWindow();
                        (_b = (_a = PFormTextEditor).onOpenWindow) === null || _b === void 0 ? void 0 : _b.call(_a);
                    });
                    editor.on('CloseWindow', () => {
                        var _a, _b;
                        onCloseWindow === null || onCloseWindow === void 0 ? void 0 : onCloseWindow();
                        (_b = (_a = PFormTextEditor).onCloseWindow) === null || _b === void 0 ? void 0 : _b.call(_a);
                    });
                    setTimeout(() => setInitialized(true), 10);
                }, onEditorChange: handleEditorChange, onKeyDown: handleKeyDown, onFocus: () => setFocused(initFocused || true), onBlur: () => setFocused(initFocused || false) })) }));
});
PFormTextEditor.displayName = 'PFormTextEditor';
PFormTextEditor.apiKey = '';const PFormAutocomplete = ToForwardRefExoticComponent(AutoTypeForwardRef(function ({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label, loading: initLoading, items: initItems, value: initValue, data: initData, error: initError, helperText, disabled: initDisabled, readOnly, required, exceptValue, width, placeholder, multiple, formValueSeparator = ',', formValueSort, disablePortal, noOptionsText = '항목이 없습니다', loadingText, limitTags, getLimitTagsText, openOnFocus, disableClearable, async, autoFocus, hidden: initHidden, onLoadItems, onAsyncLoadValueItem, onRenderItem, onRenderTag, onAddItem, getOptionDisabled, 
//----------------------------------------------------------------------------------------------------------------
onChange, onValue, onValidate, onFocus, onBlur, 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const textFieldRef = React.useRef(null);
    const asyncTimerRef = React.useRef(null);
    const oldComponentValueRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [isOnGetItemLoading, setIsOnGetItemLoading] = React.useState(false);
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [inputValue, setInputValue] = React.useState(undefined);
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    const [loadingRef, loading, setLoading] = reactHook.useAutoUpdateRefState(initLoading);
    const [itemsRef, items, _setItems] = reactHook.useAutoUpdateRefState(initItems);
    /********************************************************************************************************************
     * State Function
     * ******************************************************************************************************************/
    const setItems = React.useCallback((newItems) => {
        _setItems(newItems);
    }, [_setItems]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const itemsValues = React.useMemo(() => {
        if (items) {
            return items.reduce((res, { value }) => {
                res[value.toString()] = value;
                return res;
            }, {});
        }
        else {
            return {};
        }
    }, [items]);
    const itemsInfos = React.useMemo(() => {
        if (items) {
            return items.reduce((res, info) => {
                res[info.value.toString()] = info;
                return res;
            }, {});
        }
        else {
            return {};
        }
    }, [items]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback((error, errorHelperText) => {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback((value) => {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((value) => {
        let finalValue = value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (finalValue != null) {
                    if (typeof finalValue === 'string') {
                        finalValue = Array.from(new Set(finalValue.split(formValueSeparator || ',')));
                    }
                    else {
                        finalValue = [finalValue];
                    }
                }
                else {
                    finalValue = [];
                }
            }
        }
        else {
            if (Array.isArray(finalValue)) {
                if (compare.notEmpty(finalValue)) {
                    finalValue = finalValue[0];
                }
                else {
                    finalValue = undefined;
                }
            }
        }
        if (compare.notEmpty(itemsValues)) {
            if (finalValue != null && compare.notEmpty(finalValue)) {
                if (multiple) {
                    if (Array.isArray(finalValue)) {
                        finalValue = finalValue.map((v) => {
                            const realValue = itemsValues[v.toString()];
                            return realValue != null ? realValue : v;
                        });
                    }
                }
                else {
                    const realValue = itemsValues[finalValue.toString()];
                    if (realValue != null && finalValue !== realValue) {
                        finalValue = realValue;
                    }
                }
            }
        }
        return onValue ? onValue(finalValue) : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const [valueItem, setValueItem] = React.useState(null);
    const updateValue = React.useCallback((newValue, skipCallback = false) => {
        const finalValue = _setValue(newValue, skipCallback);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    reactHook.useFirstSkipEffect(() => {
        updateValue(getFinalValue(valueRef.current));
    }, [multiple]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const componentValue = React.useMemo(() => {
        let finalValue = value;
        if (finalValue != null) {
            if (multiple) {
                if (!Array.isArray(finalValue)) {
                    finalValue = [finalValue];
                }
            }
            else {
                if (Array.isArray(finalValue)) {
                    finalValue = finalValue[0];
                }
            }
        }
        else {
            finalValue = (multiple ? [] : undefined);
        }
        let newComponentValue = (multiple ? [] : null);
        if (finalValue != null) {
            if (items) {
                if (Array.isArray(finalValue)) {
                    finalValue.forEach((v) => {
                        const key = v.toString();
                        if (itemsInfos[key]) {
                            newComponentValue && newComponentValue.push(itemsInfos[key]);
                        }
                    });
                }
                else {
                    newComponentValue = (items.find((info) => info.value === finalValue) ||
                        (multiple ? [] : null));
                }
            }
            if (compare.empty(newComponentValue) && valueItem) {
                if (Array.isArray(finalValue)) {
                    if (Array.isArray(valueItem)) {
                        newComponentValue = valueItem.filter((info) => Array.isArray(finalValue) && finalValue.includes(info.value));
                    }
                }
                else {
                    if (!Array.isArray(valueItem) && finalValue.toString() === valueItem.value.toString()) {
                        newComponentValue = valueItem;
                    }
                }
            }
        }
        if (oldComponentValueRef.current && newComponentValue && compare.equal(oldComponentValueRef.current, newComponentValue)) {
            return oldComponentValueRef.current;
        }
        else {
            oldComponentValueRef.current = newComponentValue;
            return newComponentValue;
        }
    }, [value, multiple, items, valueItem, itemsInfos]);
    React.useEffect(() => {
        if (async && onAsyncLoadValueItem) {
            if (value != null) {
                if (!valueItem) {
                    onAsyncLoadValueItem(value).then((valueItem) => {
                        setValueItem(valueItem);
                        if (valueItem) {
                            if (Array.isArray(valueItem)) {
                                setItems(valueItem);
                            }
                            else {
                                setItems([valueItem]);
                            }
                        }
                    });
                }
            }
            else {
                setValueItem(null);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [async, value, valueItem]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const showOnGetItemLoading = React.useCallback(() => {
        setIsOnGetItemLoading(true);
    }, []);
    const hideOnGetItemLoading = React.useCallback(() => {
        setIsOnGetItemLoading(false);
    }, []);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (!async && onLoadItems) {
            showOnGetItemLoading();
            onLoadItems().then((items) => {
                setItems(items);
                hideOnGetItemLoading();
            });
        }
        return () => {
            if (asyncTimerRef.current) {
                clearTimeout(asyncTimerRef.current);
                asyncTimerRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        if (async && onLoadItems) {
            if (asyncTimerRef.current) {
                clearTimeout(asyncTimerRef.current);
                asyncTimerRef.current = null;
            }
            if (inputValue != null) {
                showOnGetItemLoading();
                asyncTimerRef.current = setTimeout(() => {
                    asyncTimerRef.current = null;
                    onLoadItems(inputValue)
                        .then((items) => {
                        if (componentValue) {
                            if (Array.isArray(componentValue)) {
                                const exceptValues = componentValue.map((info) => info.value);
                                setItems([...componentValue, ...items.filter((info) => !exceptValues.includes(info.value))]);
                            }
                            else {
                                const exceptValue = componentValue.value;
                                setItems([componentValue, ...items.filter((info) => info.value !== exceptValue)]);
                            }
                        }
                        else {
                            setItems(items);
                        }
                    })
                        .finally(() => {
                        hideOnGetItemLoading();
                    });
                }, 300);
            }
            else {
                if (Array.isArray(componentValue)) {
                    setItems(componentValue);
                }
                else {
                    if (componentValue) {
                        setItems([componentValue]);
                    }
                    else {
                        setItems([]);
                    }
                }
                hideOnGetItemLoading();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [async, inputValue]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(() => {
        var _a;
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormAutocomplete',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: (newValue) => updateValue(newValue),
        getData: () => dataRef.current,
        setData: (data) => setData(data),
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled: (disabled) => setDisabled(disabled),
        isHidden: () => !!hiddenRef.current,
        setHidden: (hidden) => setHidden(hidden),
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorText) => setErrorErrorHelperText(error, error ? errorText : undefined),
        getFormValueSeparator: () => formValueSeparator,
        isFormValueSort: () => !!formValueSort,
        getItems: () => itemsRef.current,
        setItems,
        isMultiple: () => !!multiple,
        getLoading: () => !!loadingRef.current,
        setLoading: (loading) => setLoading(loading),
        reloadItems: () => {
            if (!async && onLoadItems) {
                showOnGetItemLoading();
                onLoadItems().then((items) => {
                    setItems(items);
                    hideOnGetItemLoading();
                });
            }
        },
        setInputValue,
    }), [
        async,
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueSeparator,
        formValueSort,
        getFinalValue,
        hiddenRef,
        hideOnGetItemLoading,
        initValue,
        itemsRef,
        loadingRef,
        multiple,
        name,
        onLoadItems,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        showOnGetItemLoading,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((componentValue, reason, details) => {
        const go = () => {
            let newValue = undefined;
            if (componentValue) {
                if (componentValue) {
                    if (Array.isArray(componentValue)) {
                        newValue = componentValue.map((item) => item.value);
                    }
                    else {
                        newValue = componentValue.value;
                    }
                }
            }
            const finalValue = getFinalValue(newValue);
            if (!compare.equal(valueRef.current, finalValue)) {
                updateValue(finalValue, true);
                setValueItem(componentValue);
                setTimeout(() => {
                    onValueChangeByUser(name, finalValue);
                    onRequestSearchSubmit(name, finalValue);
                });
            }
        };
        if (multiple && details && ['createOption', 'selectOption'].includes(reason)) {
            if (onAddItem) {
                const result = onAddItem(details.option);
                if (result instanceof Promise) {
                    result.then((add) => {
                        if (add)
                            go();
                    });
                }
                else if (result) {
                    go();
                }
            }
            else {
                go();
            }
        }
        else {
            go();
        }
    }, [multiple, getFinalValue, valueRef, updateValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]);
    const handleGetOptionDisabled = React.useCallback((option) => {
        if (getOptionDisabled) {
            return option.disabled || getOptionDisabled(option);
        }
        else {
            return !!option.disabled;
        }
    }, [getOptionDisabled]);
    /********************************************************************************************************************
     * Render - Variables
     * ******************************************************************************************************************/
    const style = Object.assign({ minWidth: 120 }, initStyle);
    if (hidden) {
        style.display = 'none';
    }
    if (width != null) {
        style.width = width;
    }
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Autocomplete, { options: items || [], className: classNames(className, 'PFormValueItem', 'PFormAutocomplete'), sx: sx, multiple: multiple, fullWidth: !width && fullWidth, openOnFocus: openOnFocus, disableClearable: disableClearable, disablePortal: disablePortal, noOptionsText: noOptionsText, value: componentValue, style: style, isOptionEqualToValue: (option, value) => option.value === value.value, getOptionDisabled: handleGetOptionDisabled, disabled: disabled, readOnly: readOnly, loading: loading || isOnGetItemLoading, loadingText: loadingText, limitTags: limitTags, getLimitTagsText: getLimitTagsText, onChange: (e, value, reason, details) => handleChange(value, reason, details), renderOption: (props, option) => (React.createElement("li", Object.assign({}, props, { key: `${option.value}` }), onRenderItem ? onRenderItem(option) : option.label)), onInputChange: (event, newInputValue, reason) => {
            if (reason === 'input') {
                setInputValue(newInputValue);
            }
            else if (reason === 'reset') {
                setInputValue(undefined);
            }
        }, renderValue: multiple
            ? (value, getItemProps) => {
                if (Array.isArray(value)) {
                    return value.map((option, index) => (React.createElement(material.Chip, Object.assign({ size: 'small', style: variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined, label: onRenderTag ? onRenderTag(option) : option.label }, getItemProps({ index })))));
                }
                else {
                    return (React.createElement(material.Chip, Object.assign({ size: 'small', style: variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined, label: onRenderTag ? onRenderTag(value) : value.label }, getItemProps({ index: 0 }))));
                }
            }
            : undefined, renderInput: (params) => {
            var _a;
            const slotProps = {
                input: Object.assign(Object.assign({}, params.InputProps), { autoFocus, style: {
                        paddingTop: variant === 'outlined' && size === 'small' ? 7 : undefined,
                        paddingBottom: variant === 'outlined' && size === 'small' ? 5 : undefined,
                        marginTop: variant === 'outlined' && size === 'small' ? -1 : undefined,
                    }, endAdornment: (React.createElement(React.Fragment, null,
                        loading || isOnGetItemLoading ? React.createElement(material.CircularProgress, { color: 'inherit', size: 20 }) : null,
                        params.InputProps.endAdornment)) }),
                htmlInput: Object.assign(Object.assign({}, params.inputProps), { style: Object.assign(Object.assign({}, (_a = params.inputProps) === null || _a === void 0 ? void 0 : _a.style), (variant === 'outlined' && size === 'small' ? { marginTop: 1 } : undefined)), tabIndex: readOnly || disabled ? -1 : undefined, onFocus: (e) => {
                        var _a, _b;
                        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
                        (_b = params === null || params === void 0 ? void 0 : (_a = params.inputProps).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                    }, onBlur: (e) => {
                        var _a, _b;
                        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                        (_b = params === null || params === void 0 ? void 0 : (_a = params.inputProps).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                    } }),
            };
            return (React.createElement(PFormTextField, Object.assign({}, params, { ref: textFieldRef, name: name, variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, labelShrink: labelShrink, required: required, focused: focused, error: error, readOnly: readOnly, helperText: error ? errorHelperText : helperText, slotProps: slotProps, placeholder: placeholder, noFormValueItem: true })));
        } }));
}));
PFormAutocomplete.displayName = 'PFormAutocomplete';function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}var weekOfYear$1 = {exports: {}};var weekOfYear = weekOfYear$1.exports;

var hasRequiredWeekOfYear;

function requireWeekOfYear () {
	if (hasRequiredWeekOfYear) return weekOfYear$1.exports;
	hasRequiredWeekOfYear = 1;
	(function (module, exports$1) {
		!function(e,t){module.exports=t();}(weekOfYear,(function(){var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,true);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)};}})); 
	} (weekOfYear$1));
	return weekOfYear$1.exports;
}var weekOfYearExports = requireWeekOfYear();
var weekOfYearPlugin = /*@__PURE__*/getDefaultExportFromCjs(weekOfYearExports);var customParseFormat$1 = {exports: {}};var customParseFormat = customParseFormat$1.exports;

var hasRequiredCustomParseFormat;

function requireCustomParseFormat () {
	if (hasRequiredCustomParseFormat) return customParseFormat$1.exports;
	hasRequiredCustomParseFormat = 1;
	(function (module, exports$1) {
		!function(e,t){module.exports=t();}(customParseFormat,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return (e=+e)+(e>68?1900:2e3)};var f=function(e){return function(t){this[e]=+t;}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],u=function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},c={A:[o,function(e){this.afternoon=d(e,false);}],a:[o,function(e){this.afternoon=d(e,true);}],Q:[n,function(e){this.month=3*(e-1)+1;}],S:[n,function(e){this.milliseconds=100*+e;}],SS:[r,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[i,f("seconds")],ss:[i,f("seconds")],m:[i,f("minutes")],mm:[i,f("minutes")],H:[i,f("hours")],h:[i,f("hours")],HH:[i,f("hours")],hh:[i,f("hours")],D:[i,f("day")],DD:[r,f("day")],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],w:[i,f("week")],ww:[r,f("week")],M:[i,f("month")],MM:[r,f("month")],MMM:[o,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[o,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,f("year")],YY:[r,function(e){this.year=a(e);}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function l(n){var r,i;r=n,i=s&&s.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=o.length,f=0;f<a;f+=1){var h=o[f],u=c[h],d=u&&u[0],l=u&&u[1];o[f]=l?{regex:d,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else {var s=i.regex,f=i.parser,h=e.slice(r),u=s.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=true,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=true===o[2],h=true===o[3],u=f||h,d=o[2];h&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=l(t)(e),o=i.year,s=i.month,a=i.day,f=i.hours,h=i.minutes,u=i.seconds,d=i.milliseconds,c=i.zone,m=i.week,M=new Date,Y=a||(o||s?1:M.getDate()),p=o||M.getFullYear(),v=0;o&&!s||(v=s>0?s-1:M.getMonth());var D,w=f||0,g=h||0,y=u||0,L=d||0;return c?new Date(Date.UTC(p,v,Y,w,g,y,L+60*c.offset*1e3)):n?new Date(Date.UTC(p,v,Y,w,g,y,L)):(D=new Date(p,v,Y,w,g,y,L),m&&(D=r(D).week(m).toDate()),D)}catch(e){return new Date("")}}(t,a,r,n),this.init(),d&&true!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),s={};}else if(a instanceof Array)for(var c=a.length,m=1;m<=c;m+=1){o[1]=a[m-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===c&&(this.$d=new Date(""));}else i.call(this,e);};}})); 
	} (customParseFormat$1));
	return customParseFormat$1.exports;
}var customParseFormatExports = requireCustomParseFormat();
var customParseFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);var localizedFormat$1 = {exports: {}};var localizedFormat = localizedFormat$1.exports;

var hasRequiredLocalizedFormat;

function requireLocalizedFormat () {
	if (hasRequiredLocalizedFormat) return localizedFormat$1.exports;
	hasRequiredLocalizedFormat = 1;
	(function (module, exports$1) {
		!function(e,t){module.exports=t();}(localizedFormat,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,o,n){var r=o.prototype,i=r.format;n.en.formats=e,r.format=function(t){ void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var o=this.$locale().formats,n=function(t,o){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,o){return t||o.slice(1)}))}))}(t,void 0===o?{}:o);return i.call(this,n)};}})); 
	} (localizedFormat$1));
	return localizedFormat$1.exports;
}var localizedFormatExports = requireLocalizedFormat();
var localizedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(localizedFormatExports);var isBetween$1 = {exports: {}};var isBetween = isBetween$1.exports;

var hasRequiredIsBetween;

function requireIsBetween () {
	if (hasRequiredIsBetween) return isBetween$1.exports;
	hasRequiredIsBetween = 1;
	(function (module, exports$1) {
		!function(e,i){module.exports=i();}(isBetween,(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}})); 
	} (isBetween$1));
	return isBetween$1.exports;
}var isBetweenExports = requireIsBetween();
var isBetweenPlugin = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);var advancedFormat$1 = {exports: {}};var advancedFormat = advancedFormat$1.exports;

var hasRequiredAdvancedFormat;

function requireAdvancedFormat () {
	if (hasRequiredAdvancedFormat) return advancedFormat$1.exports;
	hasRequiredAdvancedFormat = 1;
	(function (module, exports$1) {
		!function(e,t){module.exports=t();}(advancedFormat,(function(){return function(e,t){var r=t.prototype,n=r.format;r.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return n.bind(this)(e);var s=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case "Q":return Math.ceil((t.$M+1)/3);case "Do":return r.ordinal(t.$D);case "gggg":return t.weekYear();case "GGGG":return t.isoWeekYear();case "wo":return r.ordinal(t.week(),"W");case "w":case "ww":return s.s(t.week(),"w"===e?1:2,"0");case "W":case "WW":return s.s(t.isoWeek(),"W"===e?1:2,"0");case "k":case "kk":return s.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case "X":return Math.floor(t.$d.getTime()/1e3);case "x":return t.$d.getTime();case "z":return "["+t.offsetName()+"]";case "zzz":return "["+t.offsetName("long")+"]";default:return e}}));return n.bind(this)(a)};}})); 
	} (advancedFormat$1));
	return advancedFormat$1.exports;
}var advancedFormatExports = requireAdvancedFormat();
var advancedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(advancedFormatExports);const warnedOnceCache = new Set();

// TODO move to @base_ui/internals. Base UI, etc. need this helper.
function warnOnce(message, gravity = 'warning') {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
  if (!warnedOnceCache.has(cleanMessage)) {
    warnedOnceCache.add(cleanMessage);
    if (gravity === 'error') {
      console.error(cleanMessage);
    } else {
      console.warn(cleanMessage);
    }
  }
}dayjs.extend(localizedFormatPlugin);
dayjs.extend(weekOfYearPlugin);
dayjs.extend(isBetweenPlugin);
dayjs.extend(advancedFormatPlugin);
const formatTokenMap = {
  // Year
  YY: 'year',
  YYYY: {
    sectionType: 'year',
    contentType: 'digit',
    maxLength: 4
  },
  // Month
  M: {
    sectionType: 'month',
    contentType: 'digit',
    maxLength: 2
  },
  MM: 'month',
  MMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  MMMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  // Day of the month
  D: {
    sectionType: 'day',
    contentType: 'digit',
    maxLength: 2
  },
  DD: 'day',
  Do: {
    sectionType: 'day',
    contentType: 'digit-with-letter'
  },
  // Day of the week
  d: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 2
  },
  dd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  ddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  dddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  // Meridiem
  A: 'meridiem',
  a: 'meridiem',
  // Hours
  H: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  HH: 'hours',
  h: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  hh: 'hours',
  // Minutes
  m: {
    sectionType: 'minutes',
    contentType: 'digit',
    maxLength: 2
  },
  mm: 'minutes',
  // Seconds
  s: {
    sectionType: 'seconds',
    contentType: 'digit',
    maxLength: 2
  },
  ss: 'seconds'
};
const defaultFormats = {
  year: 'YYYY',
  month: 'MMMM',
  monthShort: 'MMM',
  dayOfMonth: 'D',
  dayOfMonthFull: 'Do',
  weekday: 'dddd',
  weekdayShort: 'dd',
  hours24h: 'HH',
  hours12h: 'hh',
  meridiem: 'A',
  minutes: 'mm',
  seconds: 'ss',
  fullDate: 'll',
  keyboardDate: 'L',
  shortDate: 'MMM D',
  normalDate: 'D MMMM',
  normalDateWithWeekday: 'ddd, MMM D',
  fullTime: 'LT',
  fullTime12h: 'hh:mm A',
  fullTime24h: 'HH:mm',
  keyboardDateTime: 'L LT',
  keyboardDateTime12h: 'L hh:mm A',
  keyboardDateTime24h: 'L HH:mm'
};
const MISSING_UTC_PLUGIN = ['Missing UTC plugin', 'To be able to use UTC or timezones, you have to enable the `utc` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc'].join('\n');
const MISSING_TIMEZONE_PLUGIN = ['Missing timezone plugin', 'To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone'].join('\n');
const withLocale = (dayjs, locale) => !locale ? dayjs : (...args) => dayjs(...args).locale(locale);
/**
 * Based on `@date-io/dayjs`
 *
 * MIT License
 *
 * Copyright (c) 2017 Dmitriy Kovalenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class AdapterDayjs {
  constructor({
    locale: _locale,
    formats
  } = {}) {
    this.isMUIAdapter = true;
    this.isTimezoneCompatible = true;
    this.lib = 'dayjs';
    this.dayjs = void 0;
    this.locale = void 0;
    this.formats = void 0;
    this.escapedCharacters = {
      start: '[',
      end: ']'
    };
    this.formatTokenMap = formatTokenMap;
    this.setLocaleToValue = value => {
      const expectedLocale = this.getCurrentLocaleCode();
      if (expectedLocale === value.locale()) {
        return value;
      }
      return value.locale(expectedLocale);
    };
    this.hasUTCPlugin = () => typeof dayjs.utc !== 'undefined';
    this.hasTimezonePlugin = () => typeof dayjs.tz !== 'undefined';
    this.isSame = (value, comparing, comparisonTemplate) => {
      const comparingInValueTimezone = this.setTimezone(comparing, this.getTimezone(value));
      return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
    };
    /**
     * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
     */
    this.cleanTimezone = timezone => {
      switch (timezone) {
        case 'default':
          {
            return undefined;
          }
        case 'system':
          {
            return dayjs.tz.guess();
          }
        default:
          {
            return timezone;
          }
      }
    };
    this.createSystemDate = value => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const timezone = dayjs.tz.guess();

        // We can't change the system timezone in the tests
        /* istanbul ignore next */
        if (timezone !== 'UTC') {
          return dayjs.tz(value, timezone);
        }
        return dayjs(value);
      }
      return dayjs(value);
    };
    this.createUTCDate = value => {
      /* istanbul ignore next */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      return dayjs.utc(value);
    };
    this.createTZDate = (value, timezone) => {
      /* istanbul ignore next */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }

      /* istanbul ignore next */
      if (!this.hasTimezonePlugin()) {
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      const keepLocalTime = value !== undefined && !value.endsWith('Z');
      return dayjs(value).tz(this.cleanTimezone(timezone), keepLocalTime);
    };
    this.getLocaleFormats = () => {
      const locales = dayjs.Ls;
      const locale = this.locale || 'en';
      let localeObject = locales[locale];
      if (localeObject === undefined) {
        /* istanbul ignore next */
        if (process.env.NODE_ENV !== 'production') {
          warnOnce(['MUI X: Your locale has not been found.', 'Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.', "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", 'fallback on English locale.']);
        }
        localeObject = locales.en;
      }
      return localeObject.formats;
    };
    /**
     * If the new day does not have the same offset as the old one (when switching to summer day time for example),
     * Then dayjs will not automatically adjust the offset (moment does).
     * We have to parse again the value to make sure the `fixOffset` method is applied.
     * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
     */
    this.adjustOffset = value => {
      if (!this.hasTimezonePlugin()) {
        return value;
      }
      const timezone = this.getTimezone(value);
      if (timezone !== 'UTC') {
        const fixedValue = value.tz(this.cleanTimezone(timezone), true);
        // TODO: Simplify the case when we raise the `dayjs` peer dep to 1.11.12 (https://github.com/iamkun/dayjs/releases/tag/v1.11.12)
        /* istanbul ignore next */
        // @ts-ignore
        if (fixedValue.$offset === (value.$offset ?? 0)) {
          return value;
        }
        // Change only what is needed to avoid creating a new object with unwanted data
        // Especially important when used in an environment where utc or timezone dates are used only in some places
        // Reference: https://github.com/mui/mui-x/issues/13290
        // @ts-ignore
        value.$offset = fixedValue.$offset;
      }
      return value;
    };
    this.date = (value, timezone = 'default') => {
      if (value === null) {
        return null;
      }
      let parsedValue;
      if (timezone === 'UTC') {
        parsedValue = this.createUTCDate(value);
      } else if (timezone === 'system' || timezone === 'default' && !this.hasTimezonePlugin()) {
        parsedValue = this.createSystemDate(value);
      } else {
        parsedValue = this.createTZDate(value, timezone);
      }
      if (this.locale === undefined) {
        return parsedValue;
      }
      return parsedValue.locale(this.locale);
    };
    this.getInvalidDate = () => dayjs(new Date('Invalid date'));
    this.getTimezone = value => {
      if (this.hasTimezonePlugin()) {
        // @ts-ignore
        const zone = value.$x?.$timezone;
        if (zone) {
          return zone;
        }
      }
      if (this.hasUTCPlugin() && value.isUTC()) {
        return 'UTC';
      }
      return 'system';
    };
    this.setTimezone = (value, timezone) => {
      if (this.getTimezone(value) === timezone) {
        return value;
      }
      if (timezone === 'UTC') {
        /* istanbul ignore next */
        if (!this.hasUTCPlugin()) {
          throw new Error(MISSING_UTC_PLUGIN);
        }
        return value.utc();
      }

      // We know that we have the UTC plugin.
      // Otherwise, the value timezone would always equal "system".
      // And it would be caught by the first "if" of this method.
      if (timezone === 'system') {
        return value.local();
      }
      if (!this.hasTimezonePlugin()) {
        if (timezone === 'default') {
          return value;
        }

        /* istanbul ignore next */
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      return dayjs.tz(value, this.cleanTimezone(timezone));
    };
    this.toJsDate = value => {
      return value.toDate();
    };
    this.parse = (value, format) => {
      if (value === '') {
        return null;
      }
      return this.dayjs(value, format, this.locale, true);
    };
    this.getCurrentLocaleCode = () => {
      return this.locale || 'en';
    };
    this.is12HourCycleInCurrentLocale = () => {
      /* istanbul ignore next */
      return /A|a/.test(this.getLocaleFormats().LT || '');
    };
    this.expandFormat = format => {
      const localeFormats = this.getLocaleFormats();

      // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
      const t = formatBis => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
      return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
        const B = b && b.toUpperCase();
        return a || localeFormats[b] || t(localeFormats[B]);
      });
    };
    this.isValid = value => {
      if (value == null) {
        return false;
      }
      return value.isValid();
    };
    this.format = (value, formatKey) => {
      return this.formatByString(value, this.formats[formatKey]);
    };
    this.formatByString = (value, formatString) => {
      return this.dayjs(value).format(formatString);
    };
    this.formatNumber = numberToFormat => {
      return numberToFormat;
    };
    this.isEqual = (value, comparing) => {
      if (value === null && comparing === null) {
        return true;
      }
      if (value === null || comparing === null) {
        return false;
      }
      return value.toDate().getTime() === comparing.toDate().getTime();
    };
    this.isSameYear = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY');
    };
    this.isSameMonth = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM');
    };
    this.isSameDay = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM-DD');
    };
    this.isSameHour = (value, comparing) => {
      return value.isSame(comparing, 'hour');
    };
    this.isAfter = (value, comparing) => {
      return value > comparing;
    };
    this.isAfterYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() > comparing.utc();
    };
    this.isAfterDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() > comparing.utc();
    };
    this.isBefore = (value, comparing) => {
      return value < comparing;
    };
    this.isBeforeYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() < comparing.utc();
    };
    this.isBeforeDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() < comparing.utc();
    };
    this.isWithinRange = (value, [start, end]) => {
      return value >= start && value <= end;
    };
    this.startOfYear = value => {
      return this.adjustOffset(value.startOf('year'));
    };
    this.startOfMonth = value => {
      return this.adjustOffset(value.startOf('month'));
    };
    this.startOfWeek = value => {
      return this.adjustOffset(this.setLocaleToValue(value).startOf('week'));
    };
    this.startOfDay = value => {
      return this.adjustOffset(value.startOf('day'));
    };
    this.endOfYear = value => {
      return this.adjustOffset(value.endOf('year'));
    };
    this.endOfMonth = value => {
      return this.adjustOffset(value.endOf('month'));
    };
    this.endOfWeek = value => {
      return this.adjustOffset(this.setLocaleToValue(value).endOf('week'));
    };
    this.endOfDay = value => {
      return this.adjustOffset(value.endOf('day'));
    };
    this.addYears = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'year') : value.add(amount, 'year'));
    };
    this.addMonths = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'month') : value.add(amount, 'month'));
    };
    this.addWeeks = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'week') : value.add(amount, 'week'));
    };
    this.addDays = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'day') : value.add(amount, 'day'));
    };
    this.addHours = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'hour') : value.add(amount, 'hour'));
    };
    this.addMinutes = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'minute') : value.add(amount, 'minute'));
    };
    this.addSeconds = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'second') : value.add(amount, 'second'));
    };
    this.getYear = value => {
      return value.year();
    };
    this.getMonth = value => {
      return value.month();
    };
    this.getDate = value => {
      return value.date();
    };
    this.getHours = value => {
      return value.hour();
    };
    this.getMinutes = value => {
      return value.minute();
    };
    this.getSeconds = value => {
      return value.second();
    };
    this.getMilliseconds = value => {
      return value.millisecond();
    };
    this.setYear = (value, year) => {
      return this.adjustOffset(value.set('year', year));
    };
    this.setMonth = (value, month) => {
      return this.adjustOffset(value.set('month', month));
    };
    this.setDate = (value, date) => {
      return this.adjustOffset(value.set('date', date));
    };
    this.setHours = (value, hours) => {
      return this.adjustOffset(value.set('hour', hours));
    };
    this.setMinutes = (value, minutes) => {
      return this.adjustOffset(value.set('minute', minutes));
    };
    this.setSeconds = (value, seconds) => {
      return this.adjustOffset(value.set('second', seconds));
    };
    this.setMilliseconds = (value, milliseconds) => {
      return this.adjustOffset(value.set('millisecond', milliseconds));
    };
    this.getDaysInMonth = value => {
      return value.daysInMonth();
    };
    this.getWeekArray = value => {
      const start = this.startOfWeek(this.startOfMonth(value));
      const end = this.endOfWeek(this.endOfMonth(value));
      let count = 0;
      let current = start;
      const nestedWeeks = [];
      while (current < end) {
        const weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = this.addDays(current, 1);
        count += 1;
      }
      return nestedWeeks;
    };
    this.getWeekNumber = value => {
      return value.week();
    };
    this.getYearRange = ([start, end]) => {
      const startDate = this.startOfYear(start);
      const endDate = this.endOfYear(end);
      const years = [];
      let current = startDate;
      while (this.isBefore(current, endDate)) {
        years.push(current);
        current = this.addYears(current, 1);
      }
      return years;
    };
    this.dayjs = withLocale(dayjs, _locale);
    this.locale = _locale;
    this.formats = _extends({}, defaultFormats, formats);

    // Moved plugins to the constructor to allow for users to use options on the library
    // for reference: https://github.com/mui/mui-x/pull/11151
    dayjs.extend(customParseFormatPlugin);
  }
  getDayOfWeek(value) {
    return value.day() + 1;
  }
}insertStyle(".PrivateYearSelect{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.PrivateYearSelect button{font-size:14px;font-weight:400;border-radius:18px}");const PrivateToggleButton = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var { children, className, selected, activated, outlined } = _a, props = __rest(_a, ["children", "className", "selected", "activated", "outlined"]);
    const theme = material.useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const sx = React.useMemo(() => {
        const newSx = {
            color: 'inherit',
            ':hover': {
                backgroundColor: material.darken('#fff', 0.1),
            },
        };
        if (selected) {
            newSx.backgroundColor = theme.palette.primary.main;
            newSx.color = theme.palette.primary.contrastText;
            newSx[':hover'] = { backgroundColor: material.darken(theme.palette.primary.main, 0.2) };
        }
        else {
            if (activated) {
                newSx.backgroundColor = '#f5f5f5';
            }
            if (outlined) {
                newSx.border = '1px solid rgba(0, 0, 0, 0.1)';
            }
        }
        return newSx;
    }, [activated, outlined, selected, theme]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Button, Object.assign({}, props, { ref: ref, sx: sx, variant: 'text', className: classNames(className, selected && 'selected', activated && 'activated', outlined && 'outlined', selected && 'selected') }), children));
});const YEARS$1 = new Array(200).fill(0);
for (let i = 0; i < 200; i += 1) {
    YEARS$1[i] = 1900 + i;
}
const PrivateYearSelect = ({ selectYear, activeYear, availableDate, onSelect: initOnSelect }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const containerRef = React.useRef(null);
    const simpleBarRef = React.useRef(null);
    const onSelectRef = reactHook.useAutoUpdateLayoutRef(initOnSelect);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        var _a, _b, _c, _d, _e;
        const activeEls = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName(`private-year-select-value-${activeYear}`);
        if (activeEls && activeEls.length > 0) {
            const activeEl = activeEls[0];
            const activeRect = activeEl.getBoundingClientRect();
            const containerRect = (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            const simpleBarRect = (_c = simpleBarRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
            if (containerRect && simpleBarRect && activeRect) {
                const scrollTop = ((_d = simpleBarRef.current) === null || _d === void 0 ? void 0 : _d.scrollTop) || 0;
                (_e = simpleBarRef.current) === null || _e === void 0 ? void 0 : _e.scrollTo({
                    left: 0,
                    top: activeRect.top - containerRect.top - containerRect.height / 2 + activeRect.height / 2 + scrollTop,
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = React.useCallback((e) => {
        onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute('data-id')));
    }, [onSelectRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const today = dayjs().startOf('date');
    return (React.createElement("div", { ref: containerRef, className: 'PrivateYearSelect' },
        React.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
            React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS$1.map((y) => {
                const isToday = y === today.year();
                const isActive = y === activeYear;
                const isSelected = y === selectYear;
                const disabled = (!!availableDate[0] && y < availableDate[0].year) || (!!availableDate[1] && y > availableDate[1].year);
                return (React.createElement(material.Grid, { key: y, size: { xs: 3 } },
                    React.createElement(PrivateToggleButton, { "data-id": y, className: `private-year-select-value-${y}`, fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: handleClick }, y)));
            })))));
};insertStyle(".PrivateMonthSelect{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.PrivateMonthSelect button{font-size:15px;font-weight:400;border-radius:18px}");const MONTHS$1 = new Array(12).fill(0);
for (let i = 0; i < 12; i += 1) {
    MONTHS$1[i] = i;
}
const PrivateMonthSelect = ({ year, selectYear, selectMonth, activeMonth, availableDate, onSelect, }) => {
    const today = dayjs().startOf('date');
    return (React.createElement("div", { className: 'PrivateMonthSelect' },
        React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS$1.map((m) => {
            const isToday = today.year() === year && m === today.month();
            const isActive = m === activeMonth;
            const isSelected = selectYear === year && m === selectMonth;
            const ym = year * 100 + (m + 1);
            const disabled = (!!availableDate[0] && ym < availableDate[0].month) || (!!availableDate[1] && ym > availableDate[1].month);
            return (React.createElement(material.Grid, { key: m, size: { xs: 4 } },
                React.createElement(PrivateToggleButton, { fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: () => onSelect(m) },
                    m + 1,
                    "\uC6D4")));
        }))));
};insertStyle(".PrivateTimeSelect{position:absolute;left:0;right:0;top:0;bottom:0}.PrivateTimeSelect button{border-radius:0}");const DEFAULT_MINUTES$3 = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_MINUTES$3.length; i += 1) {
    DEFAULT_MINUTES$3[i] = i;
}
const PrivateTimeSelect = React.forwardRef(({ list, listInterval, unit, value, cols = 1, disableList, onSelect: initOnSelect }, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const containerRef = React.useRef(null);
    const simpleBarRef = React.useRef(null);
    const scrollTimerRef = React.useRef(undefined);
    const onSelectRef = reactHook.useAutoUpdateLayoutRef(initOnSelect);
    /********************************************************************************************************************
     * Function - scrollToValue
     * ******************************************************************************************************************/
    const scrollToValue = React.useCallback((value) => {
        var _a;
        const valueEls = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName(`private-time-select-value-${value}`);
        if (valueEls && valueEls.length > 0) {
            let lastSelectedTop = -1;
            let counter = 0;
            if (scrollTimerRef.current) {
                clearInterval(scrollTimerRef.current);
                scrollTimerRef.current = undefined;
            }
            const valueEl = valueEls[0];
            scrollTimerRef.current = setInterval(() => {
                var _a, _b, _c, _d;
                const valueRect = valueEl.getBoundingClientRect();
                if (valueRect.top !== lastSelectedTop) {
                    lastSelectedTop = valueRect.top;
                }
                else {
                    counter += 1;
                    if (counter === 5) {
                        clearInterval(scrollTimerRef.current);
                        scrollTimerRef.current = undefined;
                        const containerRect = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                        const simpleBarRect = (_b = simpleBarRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
                        if (containerRect && simpleBarRect && valueRect) {
                            const scrollTop = ((_c = simpleBarRef.current) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0;
                            const valueTop = valueRect.top - containerRect.top + scrollTop;
                            const valueBottom = valueTop + valueRect.height;
                            const simpleBarVisibleTop = scrollTop;
                            const simpleBarVisibleBottom = simpleBarVisibleTop + simpleBarRect.height;
                            if (valueTop < simpleBarVisibleTop || valueBottom > simpleBarVisibleBottom) {
                                (_d = simpleBarRef.current) === null || _d === void 0 ? void 0 : _d.scrollTo({
                                    left: 0,
                                    top: valueRect.top - containerRect.top - containerRect.height / 2 + valueRect.height / 2 + scrollTop,
                                });
                            }
                        }
                    }
                }
            }, 10);
        }
    }, []);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        return () => {
            if (scrollTimerRef.current) {
                clearInterval(scrollTimerRef.current);
                scrollTimerRef.current = undefined;
            }
        };
    }, []);
    React.useEffect(() => {
        if (value != null) {
            scrollToValue(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    reactHook.useForwardLayoutRef(ref, React.useMemo(() => ({ scrollToValue }), [scrollToValue]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = React.useCallback((e) => {
        onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute('data-id')));
    }, [onSelectRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { ref: containerRef, className: 'PrivateTimeSelect' },
        React.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
            React.createElement(material.Grid, { container: true }, list
                .filter((v) => (listInterval ? v % listInterval === 0 : true))
                .map((v) => {
                const isSelected = v === value;
                const disabled = !!disableList && disableList.includes(v);
                return (React.createElement(material.Grid, { key: v, size: { xs: 12 / (cols || 1) } },
                    React.createElement(PrivateToggleButton, { "data-id": v, className: `private-time-select-value-${v}`, fullWidth: true, disabled: disabled, selected: isSelected, onClick: handleClick },
                        v,
                        unit)));
            })))));
});const DEFAULT_HOURS$2 = new Array(24).fill(0);
for (let i = 0; i < DEFAULT_HOURS$2.length; i += 1) {
    DEFAULT_HOURS$2[i] = i;
}
const DEFAULT_MINUTES$2 = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_MINUTES$2.length; i += 1) {
    DEFAULT_MINUTES$2[i] = i;
}
const DEFAULT_SECONDS$2 = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_SECONDS$2.length; i += 1) {
    DEFAULT_SECONDS$2[i] = i;
}
const PrivateTimeSection = ({ time, width, cols, hours = DEFAULT_HOURS$2, minutes = DEFAULT_MINUTES$2, seconds = DEFAULT_SECONDS$2, availableDate, minuteInterval, secondInterval, value, hourSelectRef, minuteSelectRef, secondSelectRef, onClose, onChange, }) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const disableHours = React.useMemo(() => {
        const newDisableHours = [];
        if (time && value && (availableDate[0] || availableDate[1])) {
            hours.forEach((h) => {
                if (!isDateAvailable(value.set('hour', h), availableDate, 'hour')) {
                    newDisableHours.push(h);
                }
            });
        }
        return newDisableHours;
    }, [time, value, availableDate, hours]);
    const disableMinutes = React.useMemo(() => {
        const newDisableMinutes = [];
        if (time === 'minute' || time === 'second') {
            if (value && (availableDate[0] || availableDate[1])) {
                minutes.forEach((m) => {
                    if (!isDateAvailable(value.set('minute', m), availableDate, 'minute')) {
                        newDisableMinutes.push(m);
                    }
                });
            }
        }
        return newDisableMinutes;
    }, [time, value, availableDate, minutes]);
    const disableSeconds = React.useMemo(() => {
        const newDisableSeconds = [];
        if (time === 'second') {
            if (value && (availableDate[0] || availableDate[1])) {
                seconds.forEach((s) => {
                    if (!isDateAvailable(value.set('second', s), availableDate, 'second')) {
                        newDisableSeconds.push(s);
                    }
                });
            }
        }
        return newDisableSeconds;
    }, [time, value, availableDate, seconds]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { className: 'time' },
        React.createElement(material.Grid, { container: true, direction: 'column', className: 'time-container' },
            React.createElement(material.Grid, { className: 'time-title' },
                time === 'hour' && (value ? value.format('HH시') : '00시'),
                time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분'),
                time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')),
            React.createElement(material.Grid, { className: 'time-select-wrap' },
                React.createElement(material.Grid, { container: true, style: { height: '100%' } },
                    React.createElement(material.Grid, { style: { position: 'relative', width } },
                        React.createElement(PrivateTimeSelect, { ref: hourSelectRef, value: value && value.hour(), unit: '\uC2DC', list: hours, disableList: disableHours, cols: cols, onSelect: (newValue) => {
                                onChange('hour', value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue));
                            } })),
                    (time === 'minute' || time === 'second') && (React.createElement(material.Grid, { style: { position: 'relative', width } },
                        React.createElement(PrivateTimeSelect, { ref: minuteSelectRef, value: value && value.minute(), unit: '\uBD84', list: minutes, disableList: disableMinutes, cols: cols, listInterval: minuteInterval, onSelect: (newValue) => {
                                onChange('minute', value ? value.set('minute', newValue) : dayjs().startOf('date').set('minute', newValue));
                            } }))),
                    time === 'second' && (React.createElement(material.Grid, { style: { position: 'relative', width } },
                        React.createElement(PrivateTimeSelect, { ref: secondSelectRef, value: value && value.second(), unit: '\uCD08', list: seconds, disableList: disableSeconds, cols: cols, listInterval: secondInterval, onSelect: (newValue) => {
                                onChange('second', value ? value.set('second', newValue) : dayjs().startOf('date').set('second', newValue));
                            } }))))),
            onClose && (React.createElement(material.Grid, { className: 'action-buttons' },
                React.createElement(material.Button, { variant: 'text', onClick: onClose }, "\uB2EB\uAE30"))))));
};insertStyle(".PrivateStaticDatePicker.time{height:400px}.PrivateStaticDatePicker .MuiPickersCalendarHeader-root{display:none}.PrivateStaticDatePicker .month-title-container{display:flex;align-items:center;margin-left:5px}.PrivateStaticDatePicker .month-title-container .month-title-wrap{display:flex;align-items:center;cursor:pointer}.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button:not(.active){color:unset}.PrivateStaticDatePicker .action-buttons{border-top:1px solid #efefef;padding:10px;text-align:right}.PrivateStaticDatePicker .action-buttons button{min-width:0;color:inherit}.PrivateStaticDatePicker .action-buttons button:not(:first-of-type){margin-left:5px}.PrivateStaticDatePicker .action-buttons button.disabled{color:rgba(0,0,0,.5)}.PrivateStaticDatePicker .time{border-left:2px solid #bfbfbf}.PrivateStaticDatePicker .time .time-container{height:100%}.PrivateStaticDatePicker .time .time-container .time-title{text-align:center;padding:22px 0;font-size:15px}.PrivateStaticDatePicker .time .time-container .time-select-wrap{flex:1;border-top:1px solid #efefef}.PrivateStaticDatePicker.time .time .time-container .time-select-wrap>div>div:not(:first-of-type){border-left:1px solid #efefef}");const DEFAULT_HOURS$1 = new Array(24).fill(0);
for (let i = 0; i < DEFAULT_HOURS$1.length; i += 1) {
    DEFAULT_HOURS$1[i] = i;
}
const DEFAULT_MINUTES$1 = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_MINUTES$1.length; i += 1) {
    DEFAULT_MINUTES$1[i] = i;
}
const DEFAULT_SECONDS$1 = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_SECONDS$1.length; i += 1) {
    DEFAULT_SECONDS$1[i] = i;
}
const PrivateStaticDatePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var { value, availableDate: initAvailableDate, type, time, hours = DEFAULT_HOURS$1, minutes = DEFAULT_MINUTES$1, seconds = DEFAULT_SECONDS$1, minuteInterval, secondInterval, minDate, maxDate, disablePast, disableFuture, onChange, onMonthChange, onClose } = _a, props = __rest(_a, ["value", "availableDate", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    const hourSelectRef = React.useRef(null);
    const minuteSelectRef = React.useRef(null);
    const secondSelectRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [month, setMonth] = React.useState(() => {
        if (value)
            return value;
        else
            return dayjs();
    });
    const [activeMonthValue, setActiveMonthValue] = React.useState(null);
    const [yearSelectOpen, setYearSelectOpen] = React.useState(false);
    const [monthSelectOpen, setMonthSelectOpen] = React.useState(false);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const availableDate = React.useMemo(() => initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture), [disableFuture, disablePast, initAvailableDate, maxDate, minDate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    /********************************************************************************************************************
     * Arrow
     * ******************************************************************************************************************/
    const leftArrowOnClickRef = React.useRef(undefined);
    const rightArrowOnClickRef = React.useRef(undefined);
    const LeftArrowButton = React.useMemo(() => {
        return (props) => {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, Object.assign({}, props));
        };
    }, []);
    const RightArrowButton = React.useMemo(() => {
        return (props) => {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, Object.assign({}, props));
        };
    }, []);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const previousMonth = React.useCallback(() => {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    const nextMonth = React.useCallback(() => {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleYearSelect = React.useCallback((year) => {
        setMonth(month.set('year', year));
        setActiveMonthValue(month.set('year', year));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [month]);
    const handleMonthSelect = React.useCallback((m) => {
        setMonth(month.set('month', m));
        setActiveMonthValue(month.set('month', m));
        setMonthSelectOpen(false);
    }, [month]);
    const handleRenderDay = React.useCallback((props) => {
        return React.createElement(xDatePickers.PickersDay, Object.assign({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    reactHook.useForwardLayoutRef(ref, React.useMemo(() => ({}), []));
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    const getActionButton = React.useCallback((date, label) => {
        const disabled = !isDateAvailable(date, availableDate, 'day');
        return (React.createElement(material.Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: () => {
                let finalDate = date;
                const checkResult = checkDateAvailable(finalDate, availableDate, type, time);
                if (checkResult !== 'available') {
                    const availableDateDate = getAvailableDate(availableDate, type, time);
                    if (checkResult === 'min') {
                        if (availableDateDate[0])
                            finalDate = availableDateDate[0];
                    }
                    else if (checkResult === 'max') {
                        if (availableDateDate[1])
                            finalDate = availableDateDate[1];
                    }
                }
                onChange('action_date', finalDate);
            } }, label));
    }, [type, time, onChange, availableDate]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { container: true, className: classNames('PrivateStaticDatePicker', type) },
        type !== 'time' && (React.createElement(material.Grid, null,
            React.createElement(material.Grid, { container: true, direction: 'column' },
                React.createElement(material.Grid, { sx: { p: 2, width: '100%' } },
                    React.createElement(material.Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React.createElement(material.Grid, { flex: 1, className: 'month-title-container' },
                            React.createElement("div", { className: 'month-title-wrap' },
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(material.Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: () => {
                                            if (yearSelectOpen) {
                                                setYearSelectOpen(false);
                                            }
                                            else {
                                                setYearSelectOpen(true);
                                                setMonthSelectOpen(false);
                                            }
                                        } },
                                        month.format('YYYY년'),
                                        React.createElement(material.Icon, null, yearSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))),
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(material.Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: () => {
                                            if (monthSelectOpen) {
                                                setMonthSelectOpen(false);
                                            }
                                            else {
                                                setMonthSelectOpen(true);
                                                setYearSelectOpen(false);
                                            }
                                        } },
                                        month.format('M월'),
                                        React.createElement(material.Icon, null, monthSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))))),
                        !yearSelectOpen && !monthSelectOpen && (React.createElement(material.Grid, { style: { textAlign: 'right' } },
                            React.createElement(material.IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React.createElement(material.Icon, null, "keyboard_arrow_left")),
                            React.createElement(material.IconButton, { onClick: nextMonth },
                                React.createElement(material.Icon, null, "keyboard_arrow_right")))))),
                React.createElement(material.Grid, { style: { position: 'relative' } },
                    React.createElement(xDatePickers.StaticDatePicker, Object.assign({}, props, { value: activeMonthValue, referenceDate: month, slots: {
                            previousIconButton: LeftArrowButton,
                            nextIconButton: RightArrowButton,
                            day: handleRenderDay,
                        }, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, displayStaticWrapperAs: 'desktop', onChange: (newValue) => {
                            const finalValue = newValue
                                ? value
                                    ? newValue.set('hour', value.hour()).set('minute', value.minute()).set('second', value.second())
                                    : newValue
                                : newValue;
                            onChange('date', finalValue);
                        }, onMonthChange: (month) => {
                            setMonth(month);
                            if (onMonthChange)
                                onMonthChange(month);
                        } })),
                    yearSelectOpen && (React.createElement(PrivateYearSelect, { selectYear: value == null ? null : value.year(), activeYear: month.year(), availableDate: availableDate, onSelect: handleYearSelect })),
                    monthSelectOpen && (React.createElement(PrivateMonthSelect, { year: month.year(), selectYear: value == null ? null : value.year(), selectMonth: value == null ? null : value.month(), activeMonth: month.month(), availableDate: availableDate, onSelect: handleMonthSelect }))),
                React.createElement(material.Grid, { className: 'action-buttons' },
                    getActionButton(dayjs()
                        .startOf('d')
                        .subtract(1, 'month')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '지난달'),
                    getActionButton(dayjs()
                        .startOf('d')
                        .subtract(7, 'd')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '지난주'),
                    getActionButton(dayjs()
                        .startOf('d')
                        .subtract(1, 'd')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '어제'),
                    getActionButton(dayjs()
                        .startOf('d')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '오늘'))))),
        time && (React.createElement(PrivateTimeSection, { time: time, cols: type === 'time' ? 3 : 1, width: type === 'time' ? 240 : 80, availableDate: availableDate, hourSelectRef: hourSelectRef, minuteSelectRef: minuteSelectRef, secondSelectRef: secondSelectRef, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, value: value, onChange: onChange, onClose: onClose }))));
});const PrivateStyledTooltip = material.styled((_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement(material.Tooltip, Object.assign({}, props, { classes: { popper: className } })));
})(({ theme }) => ({
    [`& .${material.tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        border: '1px solid #dadde9',
        padding: 0,
        borderRadius: 0,
        margin: 0,
        width: 'auto',
        maxWidth: 'inherit !important',
        boxShadow: theme.shadows[8],
    },
}));insertStyle(".PrivateDatePicker .input-text-field.align-left .MuiInputBase-input{text-align:left}.PrivateDatePicker .input-text-field.align-center .MuiInputBase-input{text-align:center}.PrivateDatePicker .input-text-field.align-right .MuiInputBase-input{text-align:right}");const PrivateDatePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name, type, time, value: initValue = null, data: initData, label: initLabel, labelIcon, format, formValueFormat: initFormValueFormat, required, readOnly, disabled: initDisabled, width, error: initError, helperText, minDate, maxDate, disableFuture, disablePast, exceptValue, icon, startAdornment, endAdornment, align = 'center', hours, minutes, seconds, minuteInterval, secondInterval, enableKeyboardInput, hidden: initHidden, showDaysOutsideCurrentMonth = true, onChange, onValidate: initOnValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className, style: initStyle, sx } = _a, otherProps = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "enableKeyboardInput", "hidden", "showDaysOutsideCurrentMonth", "onChange", "onValidate", "className", "style", "sx"]);
    const id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const privateStaticDatePickerRef = React.useRef(null);
    const textFieldInputRef = React.useRef(undefined);
    const closeTimeoutRef = React.useRef(undefined);
    const mouseDownTimeRef = React.useRef(undefined);
    const datePickerErrorRef = React.useRef(null);
    const openValueRef = React.useRef(null);
    const onValidateRef = reactHook.useAutoUpdateLayoutRef(initOnValidate);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Value
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - open
     * ******************************************************************************************************************/
    const [open, setOpen] = React.useState(false);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [timeError, setTimeError] = React.useState(null);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const availableDate = React.useMemo(() => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture), [disableFuture, disablePast, maxDate, minDate]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback((error, helperText) => {
        setError(error);
        setErrorHelperText(helperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback((value) => {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (value && !value.isValid()) {
            setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (datePickerErrorRef.current) {
            setErrorErrorHelperText(true, getDateValidationErrorText(datePickerErrorRef.current));
            return false;
        }
        if (timeError) {
            setErrorErrorHelperText(true, getDateValidationErrorText(timeError));
            return false;
        }
        if (onValidateRef.current) {
            const onValidateResult = onValidateRef.current(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, timeError, onValidateRef, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue);
    const [inputValue, setInputValue] = reactHook.useAutoUpdateState(value);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        if (type !== 'time' && time && finalValue && (availableDate[0] || availableDate[1])) {
            const availableDateVal = getAvailableDateVal(availableDate, type, time);
            const valueVal = getDateValForAvailableDate(finalValue, type, time);
            let timeError = null;
            if (availableDateVal[0] && valueVal < availableDateVal[0]) {
                timeError = 'minDate';
            }
            if (timeError == null && availableDateVal[1] && valueVal > availableDateVal[1]) {
                timeError = 'maxDate';
            }
            setTimeError(timeError);
        }
        else {
            setTimeError(null);
        }
        return finalValue;
    }, [_setValue, availableDate, error, name, onChange, onValueChange, time, type, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(() => {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    reactHook.useFirstSkipEffect(() => {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                let runOnRequestSearchSubmit;
                if (openValueRef.current && value) {
                    runOnRequestSearchSubmit = !openValueRef.current.isSame(value, 'second');
                }
                else {
                    runOnRequestSearchSubmit = true;
                }
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, value);
                }
            }
        }
    }, [open]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(() => {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'default',
        getName: () => name,
        getReset: () => initValue,
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorText) => setErrorErrorHelperText(error, error ? errorText : undefined),
        getFormValueFormat: () => (initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time)),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        hiddenRef,
        initFormValueFormat,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        time,
        type,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((unit, newValue, keyboardInputValue) => {
        let isUpdateValue = true;
        if (compare.notEmpty(keyboardInputValue)) {
            if (newValue) {
                if (!newValue.isValid()) {
                    isUpdateValue = false;
                }
            }
        }
        let finalValue = newValue;
        if (isUpdateValue) {
            if (type !== 'time' && finalValue != null && keyboardInputValue == null) {
                const checkResult = checkDateAvailable(finalValue, availableDate, type, time);
                if (checkResult !== 'available') {
                    const availableDateDate = getAvailableDate(availableDate, type, time);
                    if (checkResult === 'min') {
                        if (availableDateDate[0])
                            finalValue = availableDateDate[0];
                    }
                    else if (checkResult === 'max') {
                        if (availableDateDate[1])
                            finalValue = availableDateDate[1];
                    }
                }
            }
            let runOnRequestSearchSubmit = false;
            if (compare.notEmpty(keyboardInputValue)) {
                if (!time || unit !== 'action_date') {
                    runOnRequestSearchSubmit = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
                    setOpen(false);
                }
            }
            else if (time) {
                if (time === unit)
                    setOpen(false);
            }
            updateValue(finalValue);
            setTimeout(() => {
                onValueChangeByUser(name, finalValue);
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
        setInputValue(finalValue);
    }, [setInputValue, type, time, updateValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]);
    const handleContainerFocus = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    const handleContainerBlur = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(() => {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    const handleContainerMouseDown = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const slotProps = React.useMemo(() => {
        const textFieldInputLabelProps = {};
        if (labelShrink) {
            textFieldInputLabelProps.shrink = labelShrink;
        }
        const readOnly = !enableKeyboardInput;
        const inputProps = {
            readOnly,
        };
        if (readOnly) {
            inputProps.tabIndex = -1;
        }
        const muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        return {
            textField: {
                className: classNames('input-text-field', `align-${align}`),
                inputRef: (ref) => {
                    textFieldInputRef.current = ref;
                },
                variant,
                size,
                color,
                focused,
                InputLabelProps: textFieldInputLabelProps,
                InputProps: muiInputProps,
                inputProps,
                required,
                fullWidth,
                helperText: undefined,
                error: !!error || !!timeError,
                style: width != null ? Object.assign(Object.assign({}, initStyle), { width }) : initStyle,
                sx,
                onFocus: () => {
                    setOpen(true);
                },
                onClick: () => {
                    setOpen(true);
                },
            },
        };
    }, [
        align,
        color,
        endAdornment,
        error,
        focused,
        fullWidth,
        icon,
        initStyle,
        labelShrink,
        enableKeyboardInput,
        required,
        size,
        startAdornment,
        sx,
        timeError,
        variant,
        width,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: () => setOpen(false) },
            React.createElement("div", { className: classNames(className, 'PrivateDatePicker'), style: {
                    display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                }, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React.createElement(PrivateStyledTooltip, { open: disabled || readOnly ? false : open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && errorHelperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement(PrivateStaticDatePicker, Object.assign({}, otherProps, { ref: privateStaticDatePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth, onChange: handleChange, onAccept: () => !time && setOpen(false), onClose: () => setOpen(false) })) },
                    React.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React.createElement(xDatePickers.DesktopDatePicker, Object.assign({ value: inputValue, label: labelIcon ? React.createElement(reactComponent.PIconText, { icon: labelIcon }, initLabel) : initLabel, open: false, format: format ? format : getDateTimeFormat(type, time), disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: () => setOpen(false), onError: (reason) => (datePickerErrorRef.current = reason), onChange: (newValue) => handleChange('date', newValue), slotProps: slotProps, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});insertStyle(".PrivateDateTimePicker .input-text-field.align-left .MuiInputBase-input{text-align:left}.PrivateDateTimePicker .input-text-field.align-center .MuiInputBase-input{text-align:center}.PrivateDateTimePicker .input-text-field.align-right .MuiInputBase-input{text-align:right}");insertStyle(".PrivateStaticDateTimePicker.time{height:400px}.PrivateStaticDateTimePicker .MuiPickersCalendarHeader-root{display:none}.PrivateStaticDateTimePicker .month-title-container{display:flex;align-items:center;margin-left:5px}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap{display:flex;align-items:center;cursor:pointer}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button:not(.active){color:unset}.PrivateStaticDateTimePicker .action-buttons{border-top:1px solid #efefef;padding:10px;text-align:right}.PrivateStaticDateTimePicker .action-buttons button{min-width:0;color:inherit}.PrivateStaticDateTimePicker .action-buttons button:not(:first-of-type){margin-left:5px}.PrivateStaticDateTimePicker .action-buttons button.disabled{color:rgba(0,0,0,.5)}.PrivateStaticDateTimePicker .time{border-left:2px solid #bfbfbf}.PrivateStaticDateTimePicker .time .time-container{height:100%}.PrivateStaticDateTimePicker .time .time-container .time-title{text-align:center;padding:22px 0;font-size:15px}.PrivateStaticDateTimePicker .time .time-container .time-select-wrap{flex:1;border-top:1px solid #efefef}.PrivateStaticDateTimePicker.time .time .time-container .time-select-wrap>div>div:not(:first-of-type){border-left:1px solid #efefef}");const DEFAULT_HOURS = new Array(24).fill(0);
for (let i = 0; i < DEFAULT_HOURS.length; i += 1) {
    DEFAULT_HOURS[i] = i;
}
const DEFAULT_MINUTES = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_MINUTES.length; i += 1) {
    DEFAULT_MINUTES[i] = i;
}
const DEFAULT_SECONDS = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_SECONDS.length; i += 1) {
    DEFAULT_SECONDS[i] = i;
}
const PrivateStaticDateTimePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var { value, availableDate: initAvailableDate, type, time, hours = DEFAULT_HOURS, minutes = DEFAULT_MINUTES, seconds = DEFAULT_SECONDS, minuteInterval, secondInterval, minDate, maxDate, disablePast, disableFuture, onChange, onMonthChange, onClose } = _a, props = __rest(_a, ["value", "availableDate", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    const hourSelectRef = React.useRef(null);
    const minuteSelectRef = React.useRef(null);
    const secondSelectRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [month, setMonth] = React.useState(() => {
        if (value)
            return value;
        else
            return dayjs();
    });
    const [activeMonthValue, setActiveMonthValue] = React.useState(null);
    const [yearSelectOpen, setYearSelectOpen] = React.useState(false);
    const [monthSelectOpen, setMonthSelectOpen] = React.useState(false);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const availableDate = React.useMemo(() => initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture), [initAvailableDate, minDate, maxDate, disablePast, disableFuture]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    //--------------------------------------------------------------------------------------------------------------------
    const leftArrowOnClickRef = React.useRef(undefined);
    const rightArrowOnClickRef = React.useRef(undefined);
    const [LeftArrowButton] = React.useState(() => {
        const ArrowButton = (props) => {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, Object.assign({}, props));
        };
        return ArrowButton;
    });
    const [RightArrowButton] = React.useState(() => {
        const ArrowButton = (props) => {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, Object.assign({}, props));
        };
        return ArrowButton;
    });
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const previousMonth = React.useCallback(() => {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    const nextMonth = React.useCallback(() => {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    const timeSelectScrollToDate = React.useCallback((date, times) => {
        var _a, _b, _c;
        if (!times || (times === null || times === void 0 ? void 0 : times.includes('hour')))
            (_a = hourSelectRef.current) === null || _a === void 0 ? void 0 : _a.scrollToValue(date.hour());
        if (!times || (times === null || times === void 0 ? void 0 : times.includes('minute')))
            (_b = minuteSelectRef.current) === null || _b === void 0 ? void 0 : _b.scrollToValue(date.minute());
        if (!times || (times === null || times === void 0 ? void 0 : times.includes('second')))
            (_c = secondSelectRef.current) === null || _c === void 0 ? void 0 : _c.scrollToValue(date.second());
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleYearSelect = React.useCallback((year) => {
        setMonth(month.set('year', year));
        setActiveMonthValue(month.set('year', year));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [month]);
    const handleMonthSelect = React.useCallback((m) => {
        setMonth(month.set('month', m));
        setActiveMonthValue(month.set('month', m));
        setMonthSelectOpen(false);
    }, [month]);
    const handleRenderDay = React.useCallback((props) => {
        return React.createElement(xDatePickers.PickersDay, Object.assign({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    reactHook.useForwardLayoutRef(ref, React.useMemo(() => ({
        timeSelectScrollToDate,
    }), [timeSelectScrollToDate]));
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    const getActionButton = React.useCallback((date, label) => {
        const disabled = !isDateAvailable(date, availableDate, 'day');
        return (React.createElement(material.Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: () => {
                let finalDate = date;
                const checkResult = checkDateAvailable(finalDate, availableDate, type, time);
                if (checkResult !== 'available') {
                    const availableDateDate = getAvailableDate(availableDate, type, time);
                    if (checkResult === 'min') {
                        if (availableDateDate[0])
                            finalDate = availableDateDate[0];
                    }
                    else if (checkResult === 'max') {
                        if (availableDateDate[1])
                            finalDate = availableDateDate[1];
                    }
                }
                onChange('action_date', finalDate);
            } }, label));
    }, [type, time, onChange, availableDate]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { container: true, className: classNames('PrivateStaticDateTimePicker', type) },
        type !== 'time' && (React.createElement(material.Grid, null,
            React.createElement(material.Grid, { container: true, direction: 'column' },
                React.createElement(material.Grid, { sx: { p: 2, width: '100%' } },
                    React.createElement(material.Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React.createElement(material.Grid, { flex: 1, className: 'month-title-container' },
                            React.createElement("div", { className: 'month-title-wrap' },
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(material.Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: () => {
                                            if (yearSelectOpen) {
                                                setYearSelectOpen(false);
                                            }
                                            else {
                                                setYearSelectOpen(true);
                                                setMonthSelectOpen(false);
                                            }
                                        } },
                                        month.format('YYYY년'),
                                        React.createElement(material.Icon, null, yearSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))),
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(material.Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: () => {
                                            if (monthSelectOpen) {
                                                setMonthSelectOpen(false);
                                            }
                                            else {
                                                setMonthSelectOpen(true);
                                                setYearSelectOpen(false);
                                            }
                                        } },
                                        month.format('M월'),
                                        React.createElement(material.Icon, null, monthSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))))),
                        !yearSelectOpen && !monthSelectOpen && (React.createElement(material.Grid, { style: { textAlign: 'right' } },
                            React.createElement(material.IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React.createElement(material.Icon, null, "keyboard_arrow_left")),
                            React.createElement(material.IconButton, { onClick: nextMonth },
                                React.createElement(material.Icon, null, "keyboard_arrow_right")))))),
                React.createElement(material.Grid, { style: { position: 'relative' } },
                    React.createElement(xDatePickers.StaticDateTimePicker, Object.assign({}, props, { value: activeMonthValue, referenceDate: month, slots: {
                            previousIconButton: LeftArrowButton,
                            nextIconButton: RightArrowButton,
                            day: handleRenderDay,
                        }, viewRenderers: { hours: null, minutes: null, seconds: null }, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, displayStaticWrapperAs: 'desktop', onChange: (newValue) => {
                            const finalValue = newValue
                                ? value
                                    ? newValue.set('hour', value.hour()).set('minute', value.minute()).set('second', value.second())
                                    : newValue
                                : newValue;
                            onChange('date', finalValue);
                        }, onMonthChange: (month) => {
                            setMonth(month);
                            if (onMonthChange)
                                onMonthChange(month);
                        } })),
                    yearSelectOpen && (React.createElement(PrivateYearSelect, { selectYear: value == null ? null : value.year(), activeYear: month.year(), availableDate: availableDate, onSelect: handleYearSelect })),
                    monthSelectOpen && (React.createElement(PrivateMonthSelect, { year: month.year(), selectYear: value == null ? null : value.year(), selectMonth: value == null ? null : value.month(), activeMonth: month.month(), availableDate: availableDate, onSelect: handleMonthSelect }))),
                React.createElement(material.Grid, { className: 'action-buttons' },
                    getActionButton(dayjs()
                        .startOf('d')
                        .subtract(1, 'month')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '지난달'),
                    getActionButton(dayjs()
                        .startOf('d')
                        .subtract(7, 'd')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '지난주'),
                    getActionButton(dayjs()
                        .startOf('d')
                        .subtract(1, 'd')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '어제'),
                    getActionButton(dayjs()
                        .startOf('d')
                        .set('hour', value ? value.hour() : 0)
                        .set('minute', value ? value.minute() : 0)
                        .set('second', value ? value.second() : 0), '오늘'))))),
        time && (React.createElement(PrivateTimeSection, { time: time, cols: type === 'time' ? 3 : 1, width: type === 'time' ? 240 : 80, availableDate: availableDate, hourSelectRef: hourSelectRef, minuteSelectRef: minuteSelectRef, secondSelectRef: secondSelectRef, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, value: value, onChange: onChange, onClose: onClose }))));
});const getFinalValue$7 = (value) => {
    return value || null;
};const PrivateDateTimePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name, type, time, value: initValue = null, data: initData, label: initLabel, labelIcon, format: initFormat, formValueFormat: initFormValueFormat, required, readOnly, disabled: initDisabled, width, error: initError, helperText, minDate, maxDate, disableFuture, disablePast, exceptValue, icon, startAdornment, endAdornment, align = 'center', hours, minutes, seconds, minuteInterval, secondInterval, enableKeyboardInput, hidden: initHidden, showDaysOutsideCurrentMonth = true, onChange, onValidate: initOnValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className, style: initStyle, sx } = _a, otherProps = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "enableKeyboardInput", "hidden", "showDaysOutsideCurrentMonth", "onChange", "onValidate", "className", "style", "sx"]);
    const id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const privateStaticDateTimePickerRef = React.useRef(null);
    const textFieldInputRef = React.useRef(undefined);
    const closeTimeoutRef = React.useRef(undefined);
    const mouseDownTimeRef = React.useRef(undefined);
    const datePickerErrorRef = React.useRef(null);
    const openValueRef = React.useRef(null);
    const onValidateRef = reactHook.useAutoUpdateLayoutRef(initOnValidate);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Value
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - open
     * ******************************************************************************************************************/
    const [open, setOpen] = React.useState(false);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [timeError, setTimeError] = React.useState(null);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const format = React.useMemo(() => (initFormat ? initFormat : getDateTimeFormat(type, time)), [initFormat, time, type]);
    const availableDate = React.useMemo(() => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture), [disableFuture, disablePast, maxDate, minDate]);
    const style = React.useMemo(() => (width != null ? Object.assign(Object.assign({}, initStyle), { width }) : initStyle), [initStyle, width]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback((error, errorHelperText) => {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback((value) => {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (value && !value.isValid()) {
            setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (datePickerErrorRef.current) {
            setErrorErrorHelperText(true, getDateValidationErrorText(datePickerErrorRef.current));
            return false;
        }
        if (timeError) {
            setErrorErrorHelperText(true, getDateValidationErrorText(timeError));
            return false;
        }
        if (onValidateRef.current) {
            const onValidateResult = onValidateRef.current(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, timeError, onValidateRef, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue$7);
    const [inputValue, setInputValue] = reactHook.useAutoUpdateState(value);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        if (type !== 'time' && time && finalValue && (availableDate[0] || availableDate[1])) {
            const availableDateVal = getAvailableDateVal(availableDate, type, time);
            const valueVal = getDateValForAvailableDate(finalValue, type, time);
            let timeError = null;
            if (availableDateVal[0] && valueVal < availableDateVal[0]) {
                timeError = 'minDate';
            }
            if (timeError == null && availableDateVal[1] && valueVal > availableDateVal[1]) {
                timeError = 'maxDate';
            }
            setTimeError(timeError);
        }
        else {
            setTimeError(null);
        }
        return finalValue;
    }, [_setValue, availableDate, error, name, onChange, onValueChange, time, type, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(() => {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    reactHook.useFirstSkipEffect(() => {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                let runOnRequestSearchSubmit;
                if (openValueRef.current && value) {
                    runOnRequestSearchSubmit = !openValueRef.current.isSame(value, 'second');
                }
                else {
                    runOnRequestSearchSubmit = true;
                }
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, value);
                }
            }
        }
    }, [open]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(() => {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'default',
        getName: () => name,
        getReset: () => getFinalValue$7(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorText) => setErrorErrorHelperText(error, error ? errorText : undefined),
        getFormValueFormat: () => (initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time)),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        hiddenRef,
        initFormValueFormat,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        time,
        type,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((unit, newValue, keyboardInputValue) => {
        var _a, _b, _c;
        let isUpdateValue = true;
        if (compare.notEmpty(keyboardInputValue)) {
            if (newValue) {
                if (!newValue.isValid()) {
                    isUpdateValue = false;
                }
            }
        }
        let finalValue = newValue;
        if (isUpdateValue) {
            if (type !== 'time' && finalValue != null && keyboardInputValue == null) {
                const checkResult = checkDateAvailable(finalValue, availableDate, type, time);
                if (checkResult !== 'available') {
                    const availableDateDate = getAvailableDate(availableDate, type, time);
                    if (checkResult === 'min') {
                        if (availableDateDate[0])
                            finalValue = availableDateDate[0];
                    }
                    else if (checkResult === 'max') {
                        if (availableDateDate[1])
                            finalValue = availableDateDate[1];
                    }
                }
            }
            let runOnRequestSearchSubmit = false;
            if (compare.notEmpty(keyboardInputValue)) {
                if (!time || unit !== 'action_date') {
                    runOnRequestSearchSubmit = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
                    setOpen(false);
                }
            }
            else if (time) {
                if (time === unit)
                    setOpen(false);
            }
            updateValue(finalValue);
            setTimeout(() => {
                onValueChangeByUser(name, finalValue);
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
            if (time) {
                if (finalValue) {
                    switch (unit) {
                        case 'date':
                        case 'action_date':
                            (_a = privateStaticDateTimePickerRef.current) === null || _a === void 0 ? void 0 : _a.timeSelectScrollToDate(finalValue);
                            break;
                        case 'hour':
                            (_b = privateStaticDateTimePickerRef.current) === null || _b === void 0 ? void 0 : _b.timeSelectScrollToDate(finalValue, ['minute', 'second']);
                            break;
                        case 'minute':
                            (_c = privateStaticDateTimePickerRef.current) === null || _c === void 0 ? void 0 : _c.timeSelectScrollToDate(finalValue, ['second']);
                            break;
                    }
                }
            }
        }
        setInputValue(finalValue);
    }, [setInputValue, type, time, updateValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]);
    const handleContainerFocus = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    const handleContainerBlur = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(() => {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    const handleContainerMouseDown = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const slotProps = React.useMemo(() => {
        const textFieldInputLabelProps = {};
        if (labelShrink) {
            textFieldInputLabelProps.shrink = labelShrink;
        }
        const readOnly = !enableKeyboardInput;
        const inputProps = {
            readOnly,
        };
        if (readOnly) {
            inputProps.tabIndex = -1;
        }
        const muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        return {
            textField: {
                className: classNames('input-text-field', `align-${align}`),
                inputRef: (ref) => {
                    textFieldInputRef.current = ref;
                },
                variant,
                size,
                color,
                focused,
                InputLabelProps: textFieldInputLabelProps,
                InputProps: muiInputProps,
                inputProps,
                required,
                fullWidth,
                helperText: undefined,
                error: !!error || !!timeError,
                style,
                sx,
                onFocus: () => {
                    setOpen(true);
                },
                onClick: () => {
                    setOpen(true);
                },
            },
        };
    }, [
        align,
        color,
        endAdornment,
        error,
        focused,
        fullWidth,
        icon,
        labelShrink,
        enableKeyboardInput,
        required,
        size,
        startAdornment,
        style,
        sx,
        timeError,
        variant,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: () => setOpen(false) },
            React.createElement("div", { className: classNames(className, 'PrivateDateTimePicker'), style: {
                    display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                }, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React.createElement(PrivateStyledTooltip, { open: disabled || readOnly ? false : open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && helperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement(PrivateStaticDateTimePicker, Object.assign({}, otherProps, { ref: privateStaticDateTimePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth, onChange: handleChange, onAccept: () => !time && setOpen(false), onClose: () => setOpen(false) })) },
                    React.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React.createElement(xDatePickers.DesktopDateTimePicker, Object.assign({ value: inputValue, label: labelIcon ? React.createElement(reactComponent.PIconText, { icon: labelIcon }, initLabel) : initLabel, open: false, format: format, disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: () => setOpen(false), onError: (reason) => (datePickerErrorRef.current = reason), onChange: (newValue) => handleChange('date', newValue), slotProps: slotProps, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});const PrivateAlertDialog = ({ color = 'primary', open, title, content, onClose: initOnClose }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const onCloseRef = reactHook.useAutoUpdateLayoutRef(initOnClose);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClose = React.useCallback(() => {
        onCloseRef.current && onCloseRef.current();
    }, [onCloseRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Dialog, { className: `color-${color}`, open: !!open, onClose: handleClose, "aria-labelledby": 'alert-dialog-title' },
        title && React.createElement(material.DialogTitle, { id: 'alert-dialog-title' }, title),
        React.createElement(material.DialogContent, null, content),
        React.createElement(material.DialogActions, null,
            React.createElement(material.Button, { variant: 'text', onClick: handleClose, autoFocus: true }, "\uD655\uC778"))));
};insertStyle(".PrivateInputDatePicker.align-left .MuiInputBase-input{text-align:left}.PrivateInputDatePicker.align-center .MuiInputBase-input{text-align:center}.PrivateInputDatePicker.align-right .MuiInputBase-input{text-align:right}");const PrivateInputDatePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { variant, size, color, focused, fullWidth, disabled, readOnly, required, labelShrink, 
    //--------------------------------------------------------------------------------------------------------------------
    className, style, sx, value, label: initLabel, labelIcon, inputRef, format, error, icon, startAdornment, endAdornment, align = 'center', enableKeyboardInput, onFocus: initOnFocus, onBlur: initOnBlur } = _a, props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "disabled", "readOnly", "required", "labelShrink", "className", "style", "sx", "value", "label", "labelIcon", "inputRef", "format", "error", "icon", "startAdornment", "endAdornment", "align", "enableKeyboardInput", "onFocus", "onBlur"]);
    const id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const onFocusRef = reactHook.useAutoUpdateLayoutRef(initOnFocus);
    const onBlurRef = reactHook.useAutoUpdateLayoutRef(initOnBlur);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const slotProps = React.useMemo(() => {
        const inputLabelProps = labelShrink ? { shrink: true } : undefined;
        const muiInputProps = {
            endAdornment: undefined,
        };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        const inputProps = {};
        if (readOnly) {
            inputProps.tabIndex = -1;
            inputProps.className = classNames(inputProps.className, 'Mui-disabled');
        }
        return {
            textField: {
                variant,
                size,
                color,
                focused,
                fullWidth,
                required,
                name: id,
                label: labelIcon ? (React.createElement(React.Fragment, null,
                    React.createElement(reactComponent.PIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
                    React.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel),
                style,
                sx,
                error,
                InputProps: muiInputProps,
                inputProps,
                inputRef: (ref) => {
                    if (inputRef) {
                        inputRef.current = ref;
                    }
                },
                InputLabelProps: inputLabelProps,
                onFocus: onFocusRef.current,
                onBlur: onBlurRef.current,
            },
        };
    }, [
        color,
        endAdornment,
        error,
        focused,
        fullWidth,
        icon,
        id,
        initLabel,
        inputRef,
        labelIcon,
        labelShrink,
        onBlurRef,
        onFocusRef,
        readOnly,
        required,
        size,
        startAdornment,
        style,
        sx,
        variant,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.DesktopDatePicker, Object.assign({}, props, { ref: ref, className: classNames(className, 'PrivateInputDatePicker', `align-${align}`), open: false, value: value, format: format, disabled: disabled, readOnly: readOnly || !enableKeyboardInput, slotProps: slotProps })));
});const StyledContainer$6 = material.styled(material.Grid) `
  padding: 4px;
  position: relative;
`;
const StyledButton$2 = material.styled(material.Button) `
  font-size: 12px;
  background-color: transparent;
  color: unset;
  outline: 0;
  font-weight: 400;
  line-height: 1.75;
  border-radius: 18px;
  cursor: pointer;
  width: 100%;
  border: 1px solid transparent;

  &:focus {
    background-color: rgba(0, 0, 0, 0.12);
  }
  &.default {
    background-color: #efefef;
  }
  &.selected,
  &.selected-temp {
    background-color: rgba(66, 165, 245, 0.6);
  }
  &.selected-start,
  &.selected-end {
    color: #fff;
    background-color: #1976d2;
  }
  &.disabled {
    opacity: 0.8;
    border: 1px solid transparent;
  }
  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {
    color: inherit;
    border: 1px solid transparent;
    background-color: rgba(66, 165, 245, 0.3);
  }
`;const PrivateYearRangePickerYear = React.forwardRef(({ year, disabled, isDefault, selected, selectedStart, selectedEnd, selectedTemp, onClick, onMouseEnter, onMouseLeave, }, ref) => {
    return (React.createElement(StyledContainer$6, { className: 'PrivateYearRangePickerYear', ref: ref, size: { xs: 4 } },
        React.createElement(StyledButton$2, { className: classNames(isDefault && 'default', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', disabled && 'disabled'), disabled: disabled, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, year)));
});const StyledContainer$5 = material.styled(material.Grid) `
  width: 240px;
  height: inherit;
  max-height: 240px;
  overflow-y: auto;
  padding: 4px;
`;let _lastCloseTime$1 = 0;
const PrivateYearRangePickerYearList = ({ value, displayValue, selectType, minYear, maxYear, disablePast, disableFuture, onChange, }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const yearsContainerRef = React.useRef(null);
    const startButtonRef = React.useRef(null);
    const endButtonRef = React.useRef(null);
    const mouseOverTimer = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [mouseOverYear, setMouseOverYear] = React.useState();
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        return () => {
            if (mouseOverTimer.current) {
                clearTimeout(mouseOverTimer.current);
                mouseOverTimer.current = undefined;
            }
        };
    }, []);
    React.useEffect(() => {
        if (!displayValue[0]) {
            startButtonRef.current = null;
        }
        if (!value[1]) {
            endButtonRef.current = null;
        }
    }, [displayValue, value]);
    React.useEffect(() => {
        const container = yearsContainerRef.current;
        const startButton = startButtonRef.current;
        const endButton = endButtonRef.current;
        if (container) {
            const containerScrollTop = container.scrollTop;
            const containerScrollBottom = container.scrollTop + container.offsetHeight;
            const containerTop = container.offsetTop;
            const containerHalf = container.offsetHeight / 2;
            const containerHeight = container.offsetHeight;
            if (startButton && endButton) {
                if (new Date().getTime() - _lastCloseTime$1 > 100) {
                    const startButtonTop = startButton.offsetTop - containerTop;
                    const endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop;
                    const center = startButtonTop + (endButtonBottom - startButtonTop) / 2;
                    let scrollY = center - containerHalf;
                    if (selectType === 'start' && scrollY > startButtonTop - 4) {
                        scrollY = startButtonTop - 4;
                    }
                    else if (selectType === 'end' && scrollY + containerHeight < endButtonBottom + 4) {
                        scrollY = endButtonBottom + 4 - containerHeight;
                    }
                    container.scrollTo(0, scrollY);
                }
            }
            else if (startButton) {
                const startButtonTop = startButton.offsetTop - containerTop - 4;
                const startButtonBottom = startButtonTop + startButton.offsetHeight + 8;
                if (startButtonTop < containerScrollTop || startButtonBottom > containerScrollBottom) {
                    container.scrollTo(0, startButtonTop);
                }
            }
            else if (endButton) {
                const endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop + 4;
                container.scrollTo(0, endButtonBottom - containerHeight);
            }
        }
        return () => {
            _lastCloseTime$1 = new Date().getTime();
        };
    }, [selectType]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const nowYear = React.useMemo(() => new Date().getFullYear(), []);
    const years = React.useMemo(() => {
        const newYears = [];
        for (let i = minYear; i <= maxYear; i += 1) {
            newYears.push({
                year: i,
                isDefault: !value[0] && !value[1] && i === displayValue[0],
                selected: !!value[0] && !!value[1] && i >= value[0] && i <= value[1],
                selectedStart: i === value[0],
                selectedEnd: i === value[1],
                selectedTemp: (selectType === 'start' && !!value[1] && !!mouseOverYear && i < value[1] && i >= mouseOverYear) ||
                    (selectType === 'end' && !!value[0] && !!mouseOverYear && i > value[0] && i <= mouseOverYear),
                disabled: (disablePast && i < nowYear) || (disableFuture && i > nowYear),
            });
        }
        return newYears;
    }, [minYear, maxYear, value, displayValue, selectType, mouseOverYear, disablePast, nowYear, disableFuture]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const mouseOver = React.useCallback((year) => {
        if (mouseOverTimer.current) {
            clearTimeout(mouseOverTimer.current);
            mouseOverTimer.current = undefined;
        }
        if (year) {
            setMouseOverYear(year);
        }
        else {
            mouseOverTimer.current = setTimeout(() => {
                mouseOverTimer.current = undefined;
                setMouseOverYear(undefined);
            }, 100);
        }
    }, []);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$5, { className: 'PrivateYearRangePickerYearList', container: true, ref: yearsContainerRef }, years.map((info) => (React.createElement(PrivateYearRangePickerYear, { key: info.year, ref: (ref) => {
            if (info.selectedStart) {
                startButtonRef.current = ref;
                if (info.selectedEnd) {
                    endButtonRef.current = ref;
                }
            }
            else if (info.selectedEnd) {
                endButtonRef.current = ref;
            }
        }, year: info.year, isDefault: info.isDefault, selected: info.selected, selectedStart: info.selectedStart, selectedEnd: info.selectedEnd, selectedTemp: info.selectedTemp, disabled: info.disabled, onClick: () => onChange(info.year), onMouseEnter: () => mouseOver(info.year), onMouseLeave: () => mouseOver(undefined) })))));
};const StyledTitleContainer$1 = material.styled('div') `
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 10px;
  font-size: 14px;
`;
const StyledYear = material.styled('span') ``;
const StyledYearError = material.styled('span') `
  color: ${({ theme }) => theme.palette.error.main};
`;
const StyledTitleGap = material.styled('span') `
  padding: 0 7px;
  opacity: 0.5;
`;
const StyledActionContainer$1 = material.styled('div') `
  border-top: 1px solid #efefef;
  padding: 10px;
  text-align: right;
  &:empty {
    display: none;
  }
`;
const StyledActionButton$1 = material.styled(material.Button) `
  min-width: 0;
  color: unset;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
  &.disabled {
    color: rgba(0, 0, 0, 0.5);
  }
`;const DEFAULT_MIN_YEAR$1 = 2020;
const DEFAULT_MAX_YEAR$1 = 2050;
const DEFAULT_VALUE$3 = [null, null];
const PrivateYearRangePicker = ({ selectType, value: initValue = DEFAULT_VALUE$3, minYear = DEFAULT_MIN_YEAR$1, maxYear = DEFAULT_MAX_YEAR$1, disablePast, disableFuture, hideHeader, onChange, }) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [value, setValue] = reactHook.useAutoUpdateState(initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const yearInfo = React.useMemo(() => {
        const nowYear = new Date().getFullYear();
        let minAvailableYear;
        if (disablePast) {
            minAvailableYear = nowYear > minYear ? nowYear : minYear;
        }
        else {
            minAvailableYear = minYear;
        }
        let maxAvailableYear;
        if (disableFuture) {
            maxAvailableYear = nowYear < maxYear ? nowYear : maxYear;
        }
        else {
            maxAvailableYear = maxYear;
        }
        return { now: nowYear, available: { min: minAvailableYear, max: maxAvailableYear } };
    }, [disableFuture, disablePast, maxYear, minYear]);
    const displayInfo = React.useMemo(() => {
        let displayValue;
        let defaultYear = yearInfo.now;
        if (yearInfo.available.min > defaultYear) {
            defaultYear = minYear;
        }
        else if (yearInfo.available.max < defaultYear) {
            defaultYear = yearInfo.available.max;
        }
        if (value) {
            displayValue = [value[0] || value[1] || defaultYear, value[1] || value[0] || defaultYear];
        }
        else {
            displayValue = [defaultYear, defaultYear];
        }
        const displayValueError = [
            displayValue[0] < yearInfo.available.min || displayValue[0] > yearInfo.available.max,
            displayValue[1] < yearInfo.available.min || displayValue[1] > yearInfo.available.max,
        ];
        return { value: displayValue, error: displayValueError };
    }, [minYear, value, yearInfo]);
    /********************************************************************************************************************
     * action button
     * ******************************************************************************************************************/
    const getActionButton = React.useCallback((fromYear, toYear, label) => {
        if (fromYear < yearInfo.available.min || toYear > yearInfo.available.max) {
            return undefined;
        }
        else {
            const newValue = [
                Math.max(fromYear, yearInfo.available.min),
                Math.min(toYear, yearInfo.available.max),
            ];
            return (React.createElement(StyledActionButton$1, { variant: 'text', onClick: () => {
                    setValue(newValue);
                    onChange(newValue, 'end');
                } }, label));
        }
    }, [yearInfo, onChange, setValue]);
    const actionButtons = React.useMemo(() => {
        return (React.createElement(StyledActionContainer$1, null,
            getActionButton(yearInfo.now - 2, yearInfo.now, '최근 3년'),
            getActionButton(yearInfo.now - 4, yearInfo.now, '최근 5년'),
            getActionButton(yearInfo.now - 9, yearInfo.now, '최근 10년')));
    }, [getActionButton, yearInfo]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleYearChange = React.useCallback((valueYear) => {
        const newValue = [...value];
        if (yearInfo.available.min && valueYear < yearInfo.available.min) {
            valueYear = yearInfo.available.min;
        }
        else if (yearInfo.available.max && valueYear > yearInfo.available.max) {
            valueYear = yearInfo.available.max;
        }
        if (selectType === 'start') {
            newValue[0] = valueYear;
        }
        else {
            newValue[1] = valueYear;
        }
        if (selectType === 'start' && newValue[1]) {
            if (newValue[1] < (newValue[0] || 0)) {
                newValue[1] = newValue[0];
            }
            onChange(newValue, selectType);
        }
        else if (selectType === 'end' && newValue[0]) {
            if (newValue[0] > (newValue[1] || 9999)) {
                newValue[0] = newValue[1];
                onChange(newValue, 'start');
            }
            else {
                onChange(newValue, selectType);
            }
        }
        else {
            onChange(newValue, selectType);
        }
        setValue(newValue);
    }, [value, yearInfo, selectType, setValue, onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { className: 'PrivateYearRangePicker' },
        !hideHeader && (React.createElement(StyledTitleContainer$1, null,
            displayInfo.error[0] ? (React.createElement(StyledYearError, null,
                displayInfo.value[0],
                "\uB144")) : (React.createElement(StyledYear, null,
                displayInfo.value[0],
                "\uB144")),
            React.createElement(StyledTitleGap, null, "~"),
            displayInfo.error[1] ? (React.createElement(StyledYearError, null,
                displayInfo.value[1],
                "\uB144")) : (React.createElement(StyledYear, null,
                displayInfo.value[1],
                "\uB144")))),
        React.createElement("div", null,
            React.createElement(PrivateYearRangePickerYearList, { value: value, selectType: selectType, displayValue: displayInfo.value, minYear: minYear, maxYear: maxYear, disablePast: disablePast, disableFuture: disableFuture, onChange: handleYearChange })),
        actionButtons));
};const StyledContainer$4 = material.styled(material.Grid) `
  padding: 4px;
  position: relative;
`;
const StyledButton$1 = material.styled(material.Button) `
  font-size: 12px;
  background-color: transparent;
  color: unset;
  outline: 0;
  font-weight: 400;
  line-height: 1.75;
  border-radius: 18px;
  cursor: pointer;
  width: 100%;
  border: 1px solid transparent;

  &:focus {
    background-color: rgba(0, 0, 0, 0.12);
  }
  &.default {
    background-color: #efefef;
  }
  &.selected,
  &.selected-temp {
    background-color: rgba(66, 165, 245, 0.6);
  }
  &.selected-start,
  &.selected-end {
    color: #fff;
    background-color: rgba(25, 118, 210, 1);

    &.range:not(.active) {
      background-color: rgba(25, 118, 210, 0.8);
    }
  }
  &.active {
    color: #fff;
    background-color: rgba(25, 118, 210, 1);
    box-shadow: inset 1px 1px 1px 1px #05569f;
  }
  &.disabled {
    opacity: 0.8;
    border: 1px solid transparent;
  }
  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {
    color: inherit;
    border: 1px solid transparent;
    background-color: rgba(66, 165, 245, 0.3);
  }
`;const PrivateYearPickerYear = React.forwardRef(({ year, disabled, active, range, isDefault, selected, selectedStart, selectedEnd, selectedTemp, onClick, onMouseEnter, onMouseLeave, }, ref) => {
    return (React.createElement(StyledContainer$4, { className: 'PrivateYearPickerYear', ref: ref, size: { xs: 4 } },
        React.createElement(StyledButton$1, { className: classNames(range && 'range', isDefault && 'default', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', active && 'active', disabled && 'disabled'), disabled: disabled, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, year)));
});const StyledContainer$3 = material.styled(material.Grid) `
  width: 240px;
  height: inherit;
  max-height: 240px;
  overflow-y: auto;
  padding: 4px;
`;let _lastCloseTime = 0;
const PrivateYearPickerYearList = ({ value, minYear, maxYear, disablePast, disableFuture, selectFromYear, selectToYear, onChange, }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const yearsContainerRef = React.useRef(null);
    const defaultButtonRef = React.useRef(null);
    const startButtonRef = React.useRef(null);
    const endButtonRef = React.useRef(null);
    const mouseOverTimer = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [mouseOverYear, setMouseOverYear] = React.useState();
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        return () => {
            if (mouseOverTimer.current) {
                clearTimeout(mouseOverTimer.current);
                mouseOverTimer.current = undefined;
            }
        };
    }, []);
    React.useEffect(() => {
        const container = yearsContainerRef.current;
        const startButton = startButtonRef.current;
        const endButton = endButtonRef.current;
        const defaultButton = defaultButtonRef.current;
        if (container) {
            const containerScrollTop = container.scrollTop;
            const containerScrollBottom = container.scrollTop + container.offsetHeight;
            const containerTop = container.offsetTop;
            const containerHalf = container.offsetHeight / 2;
            const containerHeight = container.offsetHeight;
            if (startButton && endButton) {
                if (new Date().getTime() - _lastCloseTime > 100) {
                    const startButtonTop = startButton.offsetTop - containerTop;
                    const endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop;
                    const center = startButtonTop + (endButtonBottom - startButtonTop) / 2;
                    let scrollY = center - containerHalf;
                    if (selectFromYear && scrollY > startButtonTop - 4) {
                        scrollY = startButtonTop - 4;
                    }
                    else if (selectToYear && scrollY + containerHeight < endButtonBottom + 4) {
                        scrollY = endButtonBottom + 4 - containerHeight;
                    }
                    container.scrollTo(0, scrollY);
                }
            }
            else if (startButton) {
                const startButtonTop = startButton.offsetTop - containerTop - 4;
                const startButtonBottom = startButtonTop + startButton.offsetHeight + 8;
                if (startButtonTop < containerScrollTop || startButtonBottom > containerScrollBottom) {
                    container.scrollTo(0, startButtonTop);
                }
            }
            else if (endButton) {
                const endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop + 4;
                container.scrollTo(0, endButtonBottom - containerHeight);
            }
            else if (defaultButton) {
                const defaultButtonTop = defaultButton.offsetTop - containerTop - 4;
                const defaultButtonBottom = defaultButtonTop + defaultButton.offsetHeight + 8;
                const center = defaultButtonTop + (defaultButtonBottom - defaultButtonTop) / 2;
                container.scrollTo(0, center - containerHalf);
            }
        }
        return () => {
            _lastCloseTime = new Date().getTime();
        };
    }, [selectFromYear, selectToYear]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const nowYear = React.useMemo(() => new Date().getFullYear(), []);
    const defaultYear = React.useMemo(() => {
        const newDefaultYear = nowYear;
        if (newDefaultYear < minYear) {
            return minYear;
        }
        else if (newDefaultYear > maxYear) {
            return maxYear;
        }
        else {
            return newDefaultYear;
        }
    }, [nowYear, minYear, maxYear]);
    const years = React.useMemo(() => {
        const newYears = [];
        const startYear = selectFromYear ? selectFromYear : value ? value : 0;
        const endYear = selectToYear ? selectToYear : value ? value : 0;
        const range = !!selectFromYear || !!selectToYear;
        for (let i = minYear; i <= maxYear; i += 1) {
            newYears.push({
                year: i,
                range,
                isDefault: !value && !selectFromYear && !selectToYear && i === defaultYear,
                active: (!!selectFromYear || !!selectToYear) && i === value,
                selected: i >= startYear && i <= endYear,
                selectedStart: i === startYear,
                selectedEnd: i === endYear,
                selectedTemp: (!!selectToYear && !!mouseOverYear && i < endYear && i >= mouseOverYear) ||
                    (!!selectFromYear && !!mouseOverYear && i > startYear && i <= mouseOverYear),
                disabled: (disablePast && i < nowYear) || (disableFuture && i > nowYear),
            });
        }
        return newYears;
    }, [
        selectFromYear,
        value,
        selectToYear,
        minYear,
        maxYear,
        defaultYear,
        mouseOverYear,
        disablePast,
        nowYear,
        disableFuture,
    ]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const mouseOver = React.useCallback((year) => {
        if (mouseOverTimer.current) {
            clearTimeout(mouseOverTimer.current);
            mouseOverTimer.current = undefined;
        }
        if (year) {
            setMouseOverYear(year);
        }
        else {
            mouseOverTimer.current = setTimeout(() => {
                mouseOverTimer.current = undefined;
                setMouseOverYear(undefined);
            }, 100);
        }
    }, []);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$3, { className: 'PrivateYearPickerYearList', container: true, ref: yearsContainerRef }, years.map((info) => (React.createElement(PrivateYearPickerYear, { key: info.year, ref: (ref) => {
            if (info.selectedStart) {
                startButtonRef.current = ref;
                if (info.selectedEnd) {
                    endButtonRef.current = ref;
                }
            }
            else if (info.selectedEnd) {
                endButtonRef.current = ref;
            }
            else if (info.isDefault) {
                defaultButtonRef.current = ref;
            }
        }, year: info.year, range: info.range, isDefault: info.isDefault, active: info.active, selected: info.selected, selectedStart: info.selectedStart, selectedEnd: info.selectedEnd, selectedTemp: info.selectedTemp, disabled: info.disabled, onClick: () => onChange(info.year), onMouseEnter: () => mouseOver(info.year), onMouseLeave: () => mouseOver(undefined) })))));
};const StyledTitleContainer = material.styled('div') `
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 10px;
  font-size: 14px;
`;
const StyledIconButton$1 = material.styled(material.IconButton) `
  margin-top: -8px;
  margin-bottom: -10px;
`;
const StyledYearMonth$1 = material.styled('div') `
  flex: 1;
  text-align: center;
`;
const StyledYearMonthError$1 = material.styled('div') `
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.palette.error.main};
`;const DEFAULT_MIN_YEAR = 2020;
const DEFAULT_MAX_YEAR = 2050;
const PrivateYearPicker = ({ value: initValue = null, minYear = DEFAULT_MIN_YEAR, maxYear = DEFAULT_MAX_YEAR, disablePast, disableFuture, hideHeader, selectFromYear, selectToYear, onChange: initOnChange, }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const onChangeRef = reactHook.useAutoUpdateLayoutRef(initOnChange);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [value, setValue] = reactHook.useAutoUpdateState(initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const yearInfo = React.useMemo(() => {
        const nowYear = new Date().getFullYear();
        let minAvailableYear;
        if (disablePast) {
            minAvailableYear = nowYear > minYear ? nowYear : minYear;
        }
        else {
            minAvailableYear = minYear;
        }
        let maxAvailableYear;
        if (disableFuture) {
            maxAvailableYear = nowYear < maxYear ? nowYear : maxYear;
        }
        else {
            maxAvailableYear = maxYear;
        }
        return { now: nowYear, available: { min: minAvailableYear, max: maxAvailableYear } };
    }, [disableFuture, disablePast, maxYear, minYear]);
    const displayInfo = React.useMemo(() => {
        let displayYear;
        if (value) {
            displayYear = value;
        }
        else {
            let year = selectFromYear || selectToYear || yearInfo.now;
            if (yearInfo.available.min > year) {
                year = yearInfo.available.min;
            }
            else if (yearInfo.available.max < year) {
                year = yearInfo.available.max;
            }
            displayYear = year;
        }
        const displayError = displayYear < yearInfo.available.min || displayYear > yearInfo.available.max;
        return { year: displayYear, error: displayError };
    }, [selectFromYear, selectToYear, value, yearInfo]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleYearChange = React.useCallback((v) => {
        if (yearInfo.available.min && v < yearInfo.available.min) {
            setValue(yearInfo.available.min);
            onChangeRef.current(yearInfo.available.min, true);
        }
        else if (yearInfo.available.max && v > yearInfo.available.max) {
            setValue(yearInfo.available.max);
            onChangeRef.current(yearInfo.available.max, true);
        }
        else {
            setValue(v);
            onChangeRef.current(v, true);
        }
    }, [yearInfo, setValue, onChangeRef]);
    const handlePrevClick = React.useCallback(() => {
        if (displayInfo.year) {
            const newValue = displayInfo.year - 1;
            setValue(newValue);
            onChangeRef.current(newValue, false);
        }
    }, [displayInfo, onChangeRef, setValue]);
    const handleNextClick = React.useCallback(() => {
        if (displayInfo.year) {
            const newValue = displayInfo.year + 1;
            setValue(newValue);
            onChangeRef.current(newValue, false);
        }
    }, [displayInfo, onChangeRef, setValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { className: 'PrivateYearPicker' },
        !hideHeader && (React.createElement(StyledTitleContainer, null,
            React.createElement(StyledIconButton$1, { disabled: displayInfo.year <= yearInfo.available.min, onClick: handlePrevClick },
                React.createElement(reactComponent.PIcon, null, "KeyboardArrowLeft")),
            displayInfo.error ? (React.createElement(StyledYearMonthError$1, null,
                displayInfo.year,
                "\uB144")) : (React.createElement(StyledYearMonth$1, null,
                displayInfo.year,
                "\uB144")),
            React.createElement(StyledIconButton$1, { disabled: displayInfo.year >= yearInfo.available.max, onClick: handleNextClick },
                React.createElement(reactComponent.PIcon, null, "KeyboardArrowRight")))),
        React.createElement("div", null,
            React.createElement(PrivateYearPickerYearList, { value: value, minYear: minYear, maxYear: maxYear, disablePast: disablePast, disableFuture: disableFuture, selectFromYear: selectFromYear, selectToYear: selectToYear, onChange: handleYearChange }))));
};const StyledContainer$2 = material.styled(material.Grid) `
  padding: 4px;
  position: relative;
`;
const StyledButton = material.styled(material.Button) `
  font-size: 12px;
  background-color: transparent;
  color: unset;
  outline: 0;
  font-weight: 400;
  line-height: 1.75;
  border-radius: 18px;
  cursor: pointer;
  width: 100%;
  border: 1px solid transparent;

  &:focus {
    background-color: rgba(0, 0, 0, 0.12);
  }

  &.default {
    background-color: #efefef;
  }
  &.selected,
  &.selected-temp {
    background-color: rgba(66, 165, 245, 0.6);
  }
  &.selected-start,
  &.selected-end {
    color: #fff;
    background-color: rgba(25, 118, 210, 1);

    &.range:not(.active) {
      background-color: rgba(25, 118, 210, 0.8);
    }
  }
  &.active {
    color: #fff;
    background-color: rgba(25, 118, 210, 1);
    box-shadow: inset 1px 1px 1px 1px #05569f;
  }
  &.disabled {
    opacity: 0.8;
    border: 1px solid transparent;
  }
  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {
    color: inherit;
    background-color: rgba(66, 165, 245, 0.3);
    border: 1px solid transparent;
  }
`;const PrivateMonthPickerMonth = React.forwardRef(({ month, range, disabled, isDefault, active, selected, selectedStart, selectedEnd, selectedTemp, onClick, onMouseEnter, onMouseLeave, }, ref) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = React.useCallback(() => {
        onClick && onClick(month);
    }, [month, onClick]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$2, { className: 'PrivateMonthPickerMonth', ref: ref, size: { xs: 4 } },
        React.createElement(StyledButton, { className: classNames(range && 'range', isDefault && 'default', active && 'active', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', disabled && 'disabled'), disabled: disabled, onClick: handleClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            month,
            "\uC6D4")));
});const StyledContainer$1 = material.styled(material.Grid) `
  width: 240px;
  padding: 4px;
`;const PrivateMonthPickerMonthList = ({ value, defaultValue: initDefaultValue, minAvailableValue, maxAvailableValue, disablePast, disableFuture, selectFromValue, selectToValue, onChange, }) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const dateInfo = React.useMemo(() => {
        const nowDate = dayjs();
        const nowValue = dateToValue$6(nowDate);
        const nowYm = valueToYm$4(nowValue);
        const availableYm = {
            min: valueToYm$4(minAvailableValue),
            max: valueToYm$4(maxAvailableValue),
        };
        const defaultValue = initDefaultValue
            ? initDefaultValue
            : nowYm < availableYm.min
                ? minAvailableValue
                : nowYm > availableYm.max
                    ? maxAvailableValue
                    : nowValue;
        return { nowDate, nowValue, nowYm, availableYm, defaultValue };
    }, [initDefaultValue, maxAvailableValue, minAvailableValue]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const currentYear = value ? value.year : dateInfo.defaultValue.year;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const months = React.useMemo(() => {
        const newMonths = [];
        const range = !!selectFromValue || !!selectToValue;
        const startYm = selectFromValue ? valueToYm$4(selectFromValue) : value ? valueToYm$4(value) : 0;
        const endYm = selectToValue ? valueToYm$4(selectToValue) : value ? valueToYm$4(value) : 0;
        for (let i = 1; i <= 12; i += 1) {
            const ym = currentYear * 100 + i;
            newMonths.push({
                month: i,
                range,
                isDefault: !value && i === dateInfo.defaultValue.month,
                active: (!!selectFromValue || !!selectToValue) && !!value && ym === valueToYm$4(value),
                selected: !!value && ym >= startYm && ym <= endYm,
                selectedStart: !!value && ym === startYm,
                selectedEnd: !!value && ym === endYm,
                disabled: ym < dateInfo.availableYm.min ||
                    ym > dateInfo.availableYm.max ||
                    (disablePast && ym < dateInfo.nowYm) ||
                    (disableFuture && ym > dateInfo.nowYm),
            });
        }
        return newMonths;
    }, [
        selectFromValue,
        selectToValue,
        value,
        currentYear,
        dateInfo.defaultValue.month,
        dateInfo.availableYm.min,
        dateInfo.availableYm.max,
        dateInfo.nowYm,
        disablePast,
        disableFuture,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleMonthChange = React.useCallback((month) => {
        onChange({ year: currentYear, month });
    }, [currentYear, onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$1, { className: 'PrivateMonthPickerMonthList', container: true }, months.map((info) => (React.createElement(PrivateMonthPickerMonth, { key: info.month, month: info.month, range: info.range, isDefault: info.isDefault, active: info.active, selected: info.selected, selectedStart: info.selectedStart, selectedEnd: info.selectedEnd, selectedTemp: info.selectedTemp, disabled: info.disabled, onClick: handleMonthChange })))));
};
/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/
const valueToYm$4 = (v) => v.year * 100 + v.month;
const dateToValue$6 = (v) => ({ year: v.year(), month: v.month() + 1 });const StyledContainer = material.styled('div') `
  .PrivateYearPickerYearList {
    max-height: 130px;
  }
`;
const TitleContainer = material.styled('div') `
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 10px;
  font-size: 14px;
`;
const StyledIconButton = material.styled(material.IconButton) `
  margin-top: -8px;
  margin-bottom: -10px;
`;
const StyledYearMonth = material.styled('div') `
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledYearMonthError = material.styled('div') `
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.error.main};
`;const valueToDate$4 = (v) => dayjs(`${v.year}-${v.month}-01`);
const valueToYm$3 = (v) => v.year * 100 + v.month;
const dateToValue$5 = (v) => ({ year: v.year(), month: v.month() + 1 });const DEFAULT_MIN_VALUE$3 = {
    year: 2020,
    month: 1,
};
const DEFAULT_MAX_VALUE$3 = {
    year: 2050,
    month: 12,
};
const PrivateMonthPicker = ({ value: initValue = null, minValue = DEFAULT_MIN_VALUE$3, maxValue = DEFAULT_MAX_VALUE$3, disablePast, disableFuture, selectFromValue, selectToValue, onChange, }) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [value, setValue] = reactHook.useAutoUpdateState(initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const dateInfo = React.useMemo(() => {
        const nowValue = dateToValue$5(dayjs());
        const nowYm = valueToYm$3(nowValue);
        let minAvailableValue;
        if (disablePast) {
            const minYm = valueToYm$3(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        const minAvailableYm = valueToYm$3(minAvailableValue);
        let maxAvailableValue;
        if (disableFuture) {
            const maxYm = valueToYm$3(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        const maxAvailableYm = valueToYm$3(maxAvailableValue);
        return {
            now: {
                value: nowValue,
                ym: nowYm,
            },
            available: {
                min: {
                    value: minAvailableValue,
                    ym: minAvailableYm,
                },
                max: {
                    value: maxAvailableValue,
                    ym: maxAvailableYm,
                },
            },
        };
    }, [disableFuture, disablePast, maxValue, minValue]);
    const displayInfo = React.useMemo(() => {
        let displayValue;
        if (value && !Number.isNaN(value.year) && !Number.isNaN(value.month)) {
            displayValue = value;
        }
        else {
            if (dateInfo.now.ym < dateInfo.available.min.ym) {
                displayValue = dateInfo.available.min.value;
            }
            else if (dateInfo.now.ym > dateInfo.available.max.ym) {
                displayValue = dateInfo.available.max.value;
            }
            else {
                displayValue = selectFromValue || selectToValue || dateInfo.now.value;
            }
        }
        const displayValueDate = valueToDate$4(displayValue);
        const displayValueYm = displayValue.year * 100 + displayValue.month;
        const displayValueError = displayValueYm < dateInfo.available.min.ym || displayValueYm > dateInfo.available.max.ym;
        return { value: displayValue, date: displayValueDate, ym: displayValueYm, error: displayValueError };
    }, [dateInfo, selectFromValue, selectToValue, value]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleYearChange = React.useCallback((year) => {
        const newValue = Object.assign(Object.assign({}, displayInfo.value), { year });
        const valueYm = valueToYm$3(newValue);
        if (valueYm < dateInfo.available.min.ym) {
            setValue(dateInfo.available.min.value);
            onChange(dateInfo.available.min.value, false);
        }
        else if (valueYm > dateInfo.available.max.ym) {
            setValue(dateInfo.available.max.value);
            onChange(dateInfo.available.max.value, false);
        }
        else {
            setValue(newValue);
            onChange(newValue, false);
        }
    }, [dateInfo, displayInfo, onChange, setValue]);
    const handleMonthChange = React.useCallback((newValue) => {
        setValue(newValue);
        onChange(newValue, true);
    }, [onChange, setValue]);
    const handlePrevClick = React.useCallback(() => {
        const newValue = dateToValue$5(displayInfo.date.subtract(1, 'months'));
        setValue(newValue);
        onChange(newValue, false);
    }, [displayInfo, onChange, setValue]);
    const handleNextClick = React.useCallback(() => {
        const newValue = dateToValue$5(displayInfo.date.add(1, 'months'));
        setValue(newValue);
        onChange(newValue, false);
    }, [displayInfo, onChange, setValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const prevBtnDisabled = displayInfo.ym <= dateInfo.available.min.ym;
    const nextBtnDisabled = displayInfo.ym >= dateInfo.available.max.ym;
    const selectFromYear = selectFromValue ? selectFromValue.year : undefined;
    const selectToYear = selectToValue ? selectToValue.year : undefined;
    return (React.createElement(StyledContainer, { className: 'PrivateMonthPicker' },
        React.createElement(TitleContainer, null,
            React.createElement(StyledIconButton, { disabled: prevBtnDisabled, onClick: handlePrevClick },
                React.createElement(reactComponent.PIcon, null, "KeyboardArrowLeft")),
            displayInfo.error ? (React.createElement(StyledYearMonthError, null,
                displayInfo.value.year,
                "\uB144 ",
                displayInfo.value.month,
                "\uC6D4")) : (React.createElement(StyledYearMonth, null,
                displayInfo.value.year,
                "\uB144 ",
                displayInfo.value.month,
                "\uC6D4")),
            React.createElement(StyledIconButton, { disabled: nextBtnDisabled, onClick: handleNextClick },
                React.createElement(reactComponent.PIcon, null, "KeyboardArrowRight"))),
        React.createElement("div", null,
            React.createElement(PrivateYearPicker, { value: (value === null || value === void 0 ? void 0 : value.year) || null, minYear: minValue.year, maxYear: maxValue.year, disablePast: disablePast, disableFuture: disableFuture, onChange: handleYearChange, hideHeader: true, selectFromYear: selectFromYear, selectToYear: selectToYear })),
        React.createElement("div", { style: { borderTop: '1px solid #efefef' } },
            React.createElement(PrivateMonthPickerMonthList, { value: value, defaultValue: selectFromValue || selectToValue, minAvailableValue: dateInfo.available.min.value, maxAvailableValue: dateInfo.available.max.value, disablePast: disablePast, disableFuture: disableFuture, selectFromValue: selectFromValue, selectToValue: selectToValue, onChange: handleMonthChange }))));
};const StyledDiv = material.styled(material.Grid) `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 30px;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  background-color: #fafafa;
`;
const StyledActionContainer = material.styled('div') `
  border-top: 1px solid #efefef;
  padding: 10px;
  text-align: right;
  &:empty {
    display: none;
  }
`;
const StyledActionButton = material.styled(material.Button) `
  min-width: 0;
  color: unset;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
  &.disabled {
    color: rgba(0, 0, 0, 0.5);
  }
`;const DEFAULT_MIN_VALUE$2 = {
    year: 2020,
    month: 1,
};
const DEFAULT_MAX_VALUE$2 = {
    year: 2050,
    month: 12,
};
const PrivateMonthRangePicker = ({ value, minValue = DEFAULT_MIN_VALUE$2, maxValue = DEFAULT_MAX_VALUE$2, disablePast, disableFuture, onChange: initOnChange, }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const onChangeRef = reactHook.useAutoUpdateLayoutRef(initOnChange);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const dateInfo = React.useMemo(() => {
        const nowDate = dayjs();
        const nowValue = dateToValue$4(nowDate);
        const nowYm = valueToYm$2(nowValue);
        let minAvailableValue;
        if (disablePast) {
            const minYm = valueToYm$2(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        const minAvailableYm = valueToYm$2(minAvailableValue);
        let maxAvailableValue;
        if (disableFuture) {
            const maxYm = valueToYm$2(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        const maxAvailableYm = valueToYm$2(maxAvailableValue);
        return {
            now: {
                date: nowDate,
                value: nowValue,
                ym: nowYm,
            },
            available: {
                min: {
                    value: minAvailableValue,
                    ym: minAvailableYm,
                },
                max: {
                    value: maxAvailableValue,
                    ym: maxAvailableYm,
                },
            },
        };
    }, [disableFuture, disablePast, maxValue, minValue]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((v, selectType) => {
        const finalValue = [v[0], v[1]];
        if (finalValue[0]) {
            const startYm = valueToYm$2(finalValue[0]);
            if (startYm < dateInfo.available.min.ym) {
                finalValue[0] = dateInfo.available.min.value;
            }
            else if (startYm > dateInfo.available.max.ym) {
                finalValue[0] = dateInfo.available.max.value;
            }
        }
        if (finalValue[1]) {
            let endYm = valueToYm$2(finalValue[1]);
            if (finalValue[0]) {
                if (valueToYm$2(finalValue[0]) > endYm) {
                    if (selectType === 'start') {
                        finalValue[1] = finalValue[0];
                    }
                    else {
                        finalValue[0] = finalValue[1];
                    }
                }
            }
            endYm = valueToYm$2(finalValue[1]);
            if (endYm < dateInfo.available.min.ym) {
                finalValue[1] = dateInfo.available.min.value;
            }
            else if (endYm > dateInfo.available.max.ym) {
                finalValue[1] = dateInfo.available.max.value;
            }
        }
        return finalValue;
    }, [dateInfo]);
    /********************************************************************************************************************
     * action button
     * ******************************************************************************************************************/
    const getActionButton = React.useCallback((fromDate, toDate, label, strict) => {
        const fromValue = dateToValue$4(fromDate);
        const fromYm = valueToYm$2(fromValue);
        const toValue = dateToValue$4(toDate);
        const toYm = valueToYm$2(toValue);
        if (strict && (fromYm < dateInfo.available.min.ym || toYm > dateInfo.available.max.ym)) {
            return undefined;
        }
        else if (!strict &&
            ((fromYm < dateInfo.available.min.ym && toYm < dateInfo.available.min.ym) ||
                (fromYm > dateInfo.available.max.ym && toYm > dateInfo.available.max.ym))) {
            return undefined;
        }
        else {
            return (React.createElement(StyledActionButton, { variant: 'text', onClick: () => onChangeRef.current(getFinalValue([fromValue, toValue], 'end'), 'end', true) }, label));
        }
    }, [getFinalValue, dateInfo, onChangeRef]);
    const actionButtons = React.useMemo(() => {
        return (React.createElement(StyledActionContainer, null,
            getActionButton(dayjs(dateInfo.now.date).subtract(2, 'months'), dateInfo.now.date, '최근 3개월', true),
            getActionButton(dayjs(dateInfo.now.date).subtract(5, 'months'), dateInfo.now.date, '최근 6개월', true),
            getActionButton(dayjs(dateInfo.now.date).subtract(11, 'months'), dateInfo.now.date, '최근 12개월', true),
            getActionButton(dayjs(dateInfo.now.date).subtract(23, 'months'), dateInfo.now.date, '최근 24개월', true),
            getActionButton(dayjs(dateInfo.now.date).subtract(2, 'years').set('months', 0), dayjs(dateInfo.now.date).subtract(2, 'years').set('months', 11), '재작년'),
            getActionButton(dayjs(dateInfo.now.date).subtract(1, 'years').set('months', 0), dayjs(dateInfo.now.date).subtract(1, 'years').set('months', 11), '작년'),
            getActionButton(dayjs(dateInfo.now.date).set('months', 0), dayjs(dateInfo.now.date).set('months', 11), '올해')));
    }, [getActionButton, dateInfo]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleStartMonthChange = React.useCallback((v, isMonthSelect) => {
        const finalValue = getFinalValue([v, value[1]], 'start');
        onChangeRef.current(finalValue, 'start', isMonthSelect);
    }, [getFinalValue, onChangeRef, value]);
    const handleEndMonthChange = React.useCallback((v, isMonthSelect) => {
        const finalValue = getFinalValue([value[0], v], 'end');
        onChangeRef.current(finalValue, 'end', isMonthSelect);
    }, [getFinalValue, onChangeRef, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", null,
        React.createElement(material.Grid, { container: true, className: 'PrivateMonthRangePicker' },
            React.createElement(material.Grid, null,
                React.createElement(PrivateMonthPicker, { value: value[0], selectToValue: value[1], minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, onChange: handleStartMonthChange })),
            React.createElement(StyledDiv, null, "~"),
            React.createElement(material.Grid, null,
                React.createElement(PrivateMonthPicker, { value: value[1], selectFromValue: value[0], minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, onChange: handleEndMonthChange }))),
        actionButtons));
};
/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/
const valueToYm$2 = (v) => v.year * 100 + v.month;
const dateToValue$4 = (v) => ({ year: v.year(), month: v.month() + 1 });const PFormDatePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var { className } = _a, props = __rest(_a, ["className"]);
    const _b = useFormState(), { onAddValueItem } = _b, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleAddValueItem = React.useCallback((id, commands) => {
        commands.getType = () => 'PFormDatePicker';
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: Object.assign(Object.assign({}, otherFormState), { onAddValueItem: handleAddValueItem }) },
        React.createElement(PrivateDatePicker, Object.assign({ className: classNames(className, 'PFormDatePicker') }, props, { ref: ref, type: 'date' }))));
});
PFormDatePicker.displayName = 'PFormDatePicker';const PFormDateTimePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var { className } = _a, props = __rest(_a, ["className"]);
    const _b = useFormState(), { onAddValueItem } = _b, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleAddValueItem = React.useCallback((id, commands) => {
        commands.getType = () => 'PFormDateTimePicker';
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: Object.assign(Object.assign({}, otherFormState), { onAddValueItem: handleAddValueItem }) },
        React.createElement(PrivateDateTimePicker, Object.assign({ className: classNames(className, 'PFormDateTimePicker') }, props, { ref: ref, type: 'date_time' }))));
});
PFormDateTimePicker.displayName = 'PFormDateTimePicker';const PFormTimePicker = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var { className } = _a, props = __rest(_a, ["className"]);
    const _b = useFormState(), { onAddValueItem } = _b, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleAddValueItem = React.useCallback((id, commands) => {
        commands.getType = () => 'PFormTimePicker';
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: Object.assign(Object.assign({}, otherFormState), { onAddValueItem: handleAddValueItem }) },
        React.createElement(PrivateDateTimePicker, Object.assign({ className: classNames(className, 'PFormTimePicker') }, props, { ref: ref, type: 'time' }))));
});
PFormTimePicker.displayName = 'PFormTimePicker';insertStyle(".PFormDateRangePickerTooltipPicker .MuiPickersCalendarHeader-root{display:none}.PFormDateRangePickerTooltipPicker .MuiDayPicker-header>span{margin:0}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content{min-width:292px}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root>div{width:292px}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root>div .MuiCalendarPicker-root{width:292px}.PFormDateRangePickerTooltipPicker .selected-bg{display:none;position:absolute}.PFormDateRangePickerTooltipPicker .selected-bg.sel{display:block;position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(66,165,245,.6)}.PFormDateRangePickerTooltipPicker .selected-bg.sel.ui-start,.PFormDateRangePickerTooltipPicker .selected-bg.sel.s-start{border-top-left-radius:50%;border-bottom-left-radius:50%}.PFormDateRangePickerTooltipPicker .selected-bg.sel.ui-end,.PFormDateRangePickerTooltipPicker .selected-bg.sel.s-end{border-top-right-radius:50%;border-bottom-right-radius:50%}.PFormDateRangePickerTooltipPicker .selected-bg.sel~.MuiPickersDay-root{border:0}.PFormDateRangePickerTooltipPicker .selected-bg.sel~.MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected){background-color:rgba(0,0,0,0)}.PFormDateRangePickerTooltipPicker .focused-bg{display:none;position:absolute}.PFormDateRangePickerTooltipPicker .focused-bg.focused{display:block;position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid #efefef;border-left:0;border-right:0}.PFormDateRangePickerTooltipPicker .focused-bg.focused.ui-start,.PFormDateRangePickerTooltipPicker .focused-bg.focused.f-start{border-left:2px solid #efefef;border-top-left-radius:50%;border-bottom-left-radius:50%}.PFormDateRangePickerTooltipPicker .focused-bg.focused.ui-end,.PFormDateRangePickerTooltipPicker .focused-bg.focused.f-end{border-right:2px solid #efefef;border-top-right-radius:50%;border-bottom-right-radius:50%}.PFormDateRangePickerTooltipPicker .focused-bg.focused~.MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected){background-color:rgba(0,0,0,0)}");const PFormDateRangePickerTooltipPicker = React.forwardRef(({ selectType, value: initValue, focusedDate, month, disableFuture, disablePast, minDate, maxDate, onValueChange, onMouseEnterPickersDay, onMonthChange, }, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const leftArrowOnClickRef = React.useRef(undefined);
    const rightArrowOnClickRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [activeMonthValue, setActiveMonthValue] = React.useState(null);
    const [LeftArrowButton] = React.useState(() => {
        const ArrowButton = (props) => {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, Object.assign({}, props));
        };
        return ArrowButton;
    });
    const [RightArrowButton] = React.useState(() => {
        const ArrowButton = (props) => {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, Object.assign({}, props));
        };
        return ArrowButton;
    });
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const value = React.useMemo(() => (initValue ? initValue : [null, null]), [initValue]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        setActiveMonthValue(null);
    }, [selectType]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const getDateVal = React.useCallback((date) => {
        return Number(date.format('YYYYMMDD'));
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const baseClassNames = React.useMemo(() => {
        const newValue = {};
        const lastDayOfMonth = month.endOf('month').date();
        let now = dayjs(month);
        for (let i = 1; i <= lastDayOfMonth; i += 1) {
            let className = '';
            now = now.set('date', i);
            const nowVal = getDateVal(now);
            const dayOfWeek = now.day();
            if (i === 1 || dayOfWeek === 0)
                className += 'ui-start ';
            if (i === lastDayOfMonth || dayOfWeek === 6)
                className += 'ui-end ';
            newValue[nowVal] = className;
        }
        return newValue;
    }, [getDateVal, month]);
    const selectedClassNames = React.useMemo(() => {
        const newValue = {};
        const startDateVal = value[0] ? getDateVal(value[0]) : null;
        const endDateVal = value[1] ? getDateVal(value[1]) : null;
        const lastDayOfMonth = month.endOf('month').date();
        let now = dayjs(month);
        for (let i = 1; i <= lastDayOfMonth; i += 1) {
            let className = '';
            now = now.set('date', i);
            const nowVal = getDateVal(now);
            if (startDateVal && endDateVal) {
                if (nowVal >= startDateVal && nowVal <= endDateVal) {
                    className += 'sel ';
                    if (nowVal === startDateVal) {
                        className += 's-start ';
                    }
                    if (nowVal === endDateVal) {
                        className += 's-end ';
                    }
                }
            }
            newValue[nowVal] = className;
        }
        return newValue;
    }, [getDateVal, month, value]);
    const focusedClassNames = React.useMemo(() => {
        const newValue = {};
        const startDateVal = value[0] ? getDateVal(value[0]) : null;
        const endDateVal = value[1] ? getDateVal(value[1]) : null;
        const focusedDateVal = focusedDate ? getDateVal(focusedDate) : null;
        const lastDayOfMonth = month.endOf('month').date();
        if (focusedDateVal && ((selectType === 'start' && endDateVal) || (selectType === 'end' && startDateVal))) {
            let now = dayjs(month);
            for (let i = 1; i <= lastDayOfMonth; i += 1) {
                let className = '';
                now = now.set('date', i);
                const nowVal = getDateVal(now);
                switch (selectType) {
                    case 'start':
                        if (endDateVal) {
                            if (nowVal >= focusedDateVal && nowVal <= endDateVal) {
                                className += 'focused ';
                                if (nowVal === focusedDateVal) {
                                    className += 'f-start';
                                }
                                if (nowVal === endDateVal) {
                                    className += 'f-end ';
                                }
                            }
                        }
                        break;
                    case 'end':
                        if (startDateVal) {
                            if (nowVal >= startDateVal && nowVal <= focusedDateVal) {
                                className += 'focused ';
                                if (nowVal === startDateVal) {
                                    className += 'f-start ';
                                }
                                if (nowVal === focusedDateVal) {
                                    className += 'f-end';
                                }
                            }
                        }
                        break;
                }
                newValue[nowVal] = className;
            }
        }
        return newValue;
    }, [value, getDateVal, focusedDate, month, selectType]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const previousMonth = React.useCallback(() => {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    const nextMonth = React.useCallback(() => {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    const activeMonth = React.useCallback((month) => {
        setActiveMonthValue(month);
    }, []);
    const handleRenderDay = React.useCallback((props) => {
        const startDate = value[0];
        const endDate = value[1];
        const dateVal = getDateVal(props.day);
        const baseClassName = baseClassNames[dateVal];
        const selectedClassName = selectedClassNames[dateVal];
        const focusedClassName = focusedClassNames[dateVal];
        return (React.createElement("div", { key: props.key, style: { position: 'relative' } },
            React.createElement("div", { className: classNames('focused-bg', baseClassName, focusedClassName) }),
            React.createElement("div", { className: classNames('selected-bg', baseClassName, selectedClassName) }),
            React.createElement(xDatePickers.PickersDay, Object.assign({}, props, { disableMargin: true, selected: props.day.isSame(startDate, 'date') || props.day.isSame(endDate, 'date'), onMouseEnter: value[0] || value[1] ? () => onMouseEnterPickersDay && onMouseEnterPickersDay(props.day) : undefined }))));
    }, [value, getDateVal, baseClassNames, selectedClassNames, focusedClassNames, onMouseEnterPickersDay]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        previousMonth,
        nextMonth,
        activeMonth,
    }), [activeMonth, nextMonth, previousMonth]);
    reactHook.useForwardLayoutRef(ref, commands);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.StaticDatePicker, { className: 'PFormDateRangePickerTooltipPicker', displayStaticWrapperAs: 'desktop', slots: {
            previousIconButton: LeftArrowButton,
            nextIconButton: RightArrowButton,
            day: handleRenderDay,
        }, value: activeMonthValue, referenceDate: month, disableFuture: disableFuture, disablePast: disablePast, minDate: minDate, maxDate: maxDate, onChange: (newValue) => onValueChange && onValueChange(selectType, newValue), 
        // renderDay={handleRenderDay}
        // renderInput={(params) => <TextField {...params} />}
        // format='YYYY-MM-DD HH:mm:ss'
        onMonthChange: (month) => {
            if (onMonthChange)
                onMonthChange(month);
            setActiveMonthValue(null);
        } }));
});insertStyle(".PFormDateRangePickerTooltipPickerContainer{display:inline-block;position:relative}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap{position:absolute;top:15px;left:0;right:0}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap>div:first-of-type{padding-left:20px}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap>div:last-child{padding-right:20px;text-align:right}.PFormDateRangePickerTooltipPickerContainer .month-title{text-align:center;padding-top:13px;padding-bottom:10px}.PFormDateRangePickerTooltipPickerContainer .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PFormDateRangePickerTooltipPickerContainer .month-title button:not(.active){color:unset}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap{position:relative}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select,.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select{position:absolute;left:0;right:0;top:0;bottom:0;border-top:1px solid #efefef;padding-top:15px;background-color:#fff}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.today:not(.selected),.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.today:not(.selected){border:1px solid rgba(0,0,0,.1)}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected),.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected){background-color:#f5f5f5}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected):hover,.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected):hover{background-color:#e5e5e5}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select{overflow-y:scroll}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button{font-size:14px;font-weight:400;border-radius:18px}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button{font-size:15px;font-weight:400;border-radius:18px}.PFormDateRangePickerTooltipPickerContainer .action-buttons button{min-width:0;color:unset}.PFormDateRangePickerTooltipPickerContainer .action-buttons button:not(:first-of-type){margin-left:5px}.PFormDateRangePickerTooltipPickerContainer .action-buttons button.disabled{color:rgba(0,0,0,.5)}");const YEARS = new Array(200).fill(0);
for (let i = 0; i < 200; i += 1) {
    YEARS[i] = 1900 + i;
}
const MONTHS = new Array(12).fill(0);
for (let i = 0; i < 12; i += 1) {
    MONTHS[i] = i;
}
const PFormDateRangePickerTooltipPickerContainer = React.forwardRef(({ selectType, value, calendarCount = 2, months, disablePast, disableFuture, maxDate, minDate, onGetActionButtons, onChange, onValueChange, onMonthsChange, }, ref) => {
    const theme = material.useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const datePicker1Ref = React.useRef(null);
    const datePicker2Ref = React.useRef(null);
    const datePicker3Ref = React.useRef(null);
    const yearSelectRef = React.useRef(null);
    const activeYearBtnRef = React.useRef(null);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const [focusedDate, setFocusedDate] = React.useState();
    const [yearMonthSelectIndex, setYearMonthSelectIndex] = React.useState(0);
    const [yearSelectOpen, setYearSelectOpen] = React.useState(false);
    const [monthSelectOpen, setMonthSelectOpen] = React.useState(false);
    const customDatePickerProps = React.useMemo(() => ({ selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange }), [selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange]);
    const availableDate = React.useMemo(() => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture), [minDate, maxDate, disablePast, disableFuture]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (yearSelectOpen) {
            setTimeout(() => {
                var _a, _b, _c;
                const wrapRect = (_a = yearSelectRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                const activeRect = (_b = activeYearBtnRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
                if (wrapRect && activeRect) {
                    (_c = yearSelectRef.current) === null || _c === void 0 ? void 0 : _c.scrollTo({
                        left: 0,
                        top: activeRect.y - wrapRect.y - Math.round(wrapRect.height / 2) + 23,
                    });
                }
            });
        }
    }, [yearSelectOpen]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const previousMonth = React.useCallback(() => {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.previousMonth();
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.previousMonth();
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.previousMonth();
    }, []);
    const nextMonth = React.useCallback(() => {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.nextMonth();
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.nextMonth();
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.nextMonth();
    }, []);
    const activeMonth = React.useCallback((month) => {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.activeMonth(month.add(1, 'month'));
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.activeMonth(month.add(2, 'month'));
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleFirstDatePickerMonthChange = React.useCallback((date) => {
        if (onMonthsChange) {
            onMonthsChange([date, date.add(1, 'month'), date.add(2, 'month')]);
        }
    }, [onMonthsChange]);
    const handleYearSelectClick = React.useCallback((index) => {
        if (yearSelectOpen) {
            setYearSelectOpen(false);
            if (index !== yearMonthSelectIndex) {
                setTimeout(() => {
                    setYearMonthSelectIndex(index);
                    setYearSelectOpen(true);
                    setMonthSelectOpen(false);
                });
            }
        }
        else {
            setYearMonthSelectIndex(index);
            setYearSelectOpen(true);
            setMonthSelectOpen(false);
        }
    }, [yearSelectOpen, yearMonthSelectIndex]);
    const handleMonthSelectClick = React.useCallback((index) => {
        if (monthSelectOpen) {
            setMonthSelectOpen(false);
            if (index !== yearMonthSelectIndex) {
                setYearMonthSelectIndex(index);
                setMonthSelectOpen(true);
                setYearSelectOpen(false);
            }
        }
        else {
            setYearMonthSelectIndex(index);
            setMonthSelectOpen(true);
            setYearSelectOpen(false);
        }
    }, [monthSelectOpen, yearMonthSelectIndex]);
    const handleYearSelect = React.useCallback((year) => {
        activeMonth(months[yearMonthSelectIndex].set('year', year).subtract(yearMonthSelectIndex, 'month'));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [activeMonth, months, yearMonthSelectIndex]);
    const handleMonthSelect = React.useCallback((m) => {
        activeMonth(months[yearMonthSelectIndex].set('month', m).subtract(yearMonthSelectIndex, 'month'));
        setMonthSelectOpen(false);
    }, [activeMonth, months, yearMonthSelectIndex]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    reactHook.useForwardLayoutRef(ref, React.useMemo(() => ({ previousMonth, nextMonth, activeMonth }), [activeMonth, nextMonth, previousMonth]));
    /********************************************************************************************************************
     * Render Function
     * ******************************************************************************************************************/
    const getMonthTitle = React.useCallback((index) => {
        return (React.createElement("div", { className: 'month-title' },
            React.createElement(material.Button, { variant: 'text', className: yearSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: () => handleYearSelectClick(index) },
                months[index].format('YYYY년'),
                React.createElement(material.Icon, null, yearSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down')),
            React.createElement(material.Button, { variant: 'text', className: monthSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: () => handleMonthSelectClick(index) },
                months[index].format('M월'),
                React.createElement(material.Icon, null, monthSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down'))));
    }, [yearSelectOpen, yearMonthSelectIndex, months, monthSelectOpen, handleYearSelectClick, handleMonthSelectClick]);
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    const getActionButton = React.useCallback((startDate, endDate, label) => {
        const availableDateDate = getAvailableDate(availableDate, 'date');
        const availableDateVal = getAvailableDateVal(availableDate, 'date');
        const startDateVal = getDateValForAvailableDate(startDate, 'date');
        const endDateVal = getDateValForAvailableDate(endDate, 'date');
        const disabled = (!!availableDateVal[0] && endDateVal < availableDateVal[0]) ||
            (!!availableDateVal[1] && startDateVal > availableDateVal[1]);
        let finalStartDate = startDate, finalEndDate = endDate;
        if (!disabled) {
            if (availableDateVal[0] && availableDateDate[0]) {
                if (startDateVal < availableDateVal[0]) {
                    finalStartDate = availableDateDate[0];
                }
            }
            if (availableDateVal[1] && availableDateDate[1]) {
                if (endDateVal > availableDateVal[1]) {
                    finalEndDate = availableDateDate[1];
                }
            }
        }
        return (React.createElement(material.Button, { className: disabled ? 'disabled' : undefined, variant: 'text', disabled: disabled, onClick: () => {
                onChange([finalStartDate, finalEndDate]);
            } }, label));
    }, [onChange, availableDate]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const actionButtons = React.useMemo(() => {
        if (onGetActionButtons) {
            return onGetActionButtons().map((info, idx) => (React.createElement(React.Fragment, { key: idx }, getActionButton(info.start, info.end, info.label))));
        }
        else {
            const now = dayjs().startOf('d');
            const lastWeek = now.subtract(1, 'week');
            const dayOfWeek = now.day();
            let lastWeekDate;
            let thisWeekDate;
            if (dayOfWeek === 0) {
                lastWeekDate = [lastWeek.subtract(6, 'd'), lastWeek];
                thisWeekDate = [now.subtract(6, 'd'), now];
            }
            else {
                lastWeekDate = [lastWeek.subtract(dayOfWeek - 1, 'd'), lastWeek.add(7 - dayOfWeek, 'd')];
                thisWeekDate = [now.subtract(dayOfWeek - 1, 'd'), now.add(7 - dayOfWeek, 'd')];
            }
            return (React.createElement(React.Fragment, null,
                getActionButton(now.subtract(1, 'month').startOf('month'), now.subtract(1, 'month').endOf('month'), '지난달'),
                getActionButton(now.startOf('month'), now.endOf('month'), '이번달'),
                getActionButton(now.subtract(29, 'd'), now, '최근 30일'),
                getActionButton(now.subtract(6, 'd'), now, '최근 7일'),
                getActionButton(lastWeekDate[0], lastWeekDate[1], '지난주'),
                getActionButton(thisWeekDate[0], thisWeekDate[1], '이번주'),
                getActionButton(now.subtract(1, 'd'), now.subtract(1, 'd'), '어제'),
                getActionButton(now, now, '오늘')));
        }
    }, [onGetActionButtons, getActionButton]);
    return (React.createElement("div", { className: 'PFormDateRangePickerTooltipPickerContainer' },
        React.createElement(material.Grid, { container: true, direction: 'column' },
            !yearSelectOpen && !monthSelectOpen && (React.createElement(material.Grid, null,
                React.createElement(material.Grid, { container: true, className: 'month-change-arrow-wrap' },
                    React.createElement(material.Grid, { size: { xs: 6 } },
                        React.createElement(material.IconButton, { onClick: previousMonth },
                            React.createElement(material.Icon, null, "keyboard_arrow_left"))),
                    React.createElement(material.Grid, { size: { xs: 6 } },
                        React.createElement(material.IconButton, { onClick: nextMonth },
                            React.createElement(material.Icon, null, "keyboard_arrow_right")))))),
            React.createElement(material.Grid, { onMouseLeave: () => setFocusedDate(undefined) },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", { style: { flex: 1 } }, getMonthTitle(0)),
                    React.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(1)),
                    Number(calendarCount) >= 3 && (React.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(2)))),
                React.createElement("div", { className: 'date-picker-wrap' },
                    React.createElement(material.Grid, { container: true, flexWrap: 'nowrap' },
                        React.createElement(material.Grid, null,
                            React.createElement(PFormDateRangePickerTooltipPicker, Object.assign({}, customDatePickerProps, { ref: datePicker1Ref, focusedDate: focusedDate, month: months[0], onMouseEnterPickersDay: setFocusedDate, onMonthChange: handleFirstDatePickerMonthChange }))),
                        React.createElement(material.Grid, { style: { borderLeft: '1px solid #efefef' } },
                            React.createElement(PFormDateRangePickerTooltipPicker, Object.assign({}, customDatePickerProps, { ref: datePicker2Ref, focusedDate: focusedDate, month: months[1], onMouseEnterPickersDay: setFocusedDate }))),
                        Number(calendarCount) >= 3 && (React.createElement(material.Grid, { style: { borderLeft: '1px solid #efefef' } },
                            React.createElement(PFormDateRangePickerTooltipPicker, Object.assign({}, customDatePickerProps, { ref: datePicker3Ref, focusedDate: focusedDate, month: months[2], onMouseEnterPickersDay: setFocusedDate }))))),
                    yearSelectOpen && (React.createElement("div", { ref: yearSelectRef, className: 'year-select' },
                        React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS.map((y) => {
                            var _a;
                            const today = dayjs();
                            const isToday = y === today.year();
                            const isActive = y === months[yearMonthSelectIndex].year();
                            const isSelected = y === ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year());
                            const disabled = !isDateAvailable(dayjs(y.toString(), 'YYYY'), availableDate, 'year');
                            return (React.createElement(material.Grid, { key: y, size: { xs: 2 } },
                                React.createElement(material.Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
                                        backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                                        color: isSelected ? 'white' : 'unset',
                                        ':hover': {
                                            backgroundColor: isSelected
                                                ? material.darken(theme.palette.primary.main, 0.2)
                                                : material.darken('#fff', 0.1),
                                        },
                                    }, onClick: () => handleYearSelect(y) }, y)));
                        })))),
                    monthSelectOpen && (React.createElement("div", { className: 'month-select' },
                        React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS.map((m) => {
                            var _a, _b;
                            const today = dayjs();
                            const isToday = today.year() === months[yearMonthSelectIndex].year() && m === today.month();
                            const isActive = m === months[yearMonthSelectIndex].month();
                            const isSelected = ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year()) === months[yearMonthSelectIndex].year() &&
                                m === ((_b = value[yearMonthSelectIndex]) === null || _b === void 0 ? void 0 : _b.month());
                            const ym = months[yearMonthSelectIndex].year() * 100 + (m + 1);
                            const disabled = !isDateAvailable(dayjs(ym.toString(), 'YYYYMM'), availableDate, 'month');
                            return (React.createElement(material.Grid, { key: m, size: { xs: 4 } },
                                React.createElement(material.Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
                                        backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                                        color: isSelected ? 'white' : 'unset',
                                        ':hover': {
                                            backgroundColor: isSelected
                                                ? material.darken(theme.palette.primary.main, 0.2)
                                                : material.darken('#fff', 0.1),
                                        },
                                    }, onClick: () => handleMonthSelect(m) },
                                    m + 1,
                                    "\uC6D4")));
                        })))))),
            React.createElement(material.Grid, { className: 'action-buttons', style: { borderTop: '1px solid #efefef', padding: 10, textAlign: 'right' } }, actionButtons))));
});const DEFAULT_VALUE$2 = [null, null];
const getFinalValue$6 = (value) => {
    return value || DEFAULT_VALUE$2;
};const DEFAULT_FORMAT$2 = 'YYYY-MM-DD';
const PFormDateRangePicker = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
//--------------------------------------------------------------------------------------------------------------------
name, value: initValue, data: initData, fromLabel, fromLabelIcon, toLabel, toLabelIcon, calendarCount = 2, format = DEFAULT_FORMAT$2, formValueFormat = DEFAULT_FORMAT$2, allowSingleSelect, required, requiredStart, requiredEnd, readOnly, readOnlyStart, readOnlyEnd, enableKeyboardInput, disabled: initDisabled, inputWidth, exceptValue, error: initError, helperText, formValueFromNameSuffix = '_from', formValueToNameSuffix = '_to', icon, startIcon, endIcon, startAdornment, startStartAdornment, endStartAdornment, endAdornment, startEndAdornment, endEndAdornment, disablePast, disableFuture, minDate, maxDate, hidden: initHidden, align = 'center', onGetActionButtons, onChange, onValidate, 
// -------------------------------------------------------------------------------------------------------------------
className, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const containerRef = React.useRef(null);
    const startDateTextFieldRef = React.useRef(undefined);
    const endDateTextFieldRef = React.useRef(undefined);
    const closeTimeoutRef = React.useRef(undefined);
    const mouseDownTimeRef = React.useRef(undefined);
    const startInputDatePickerErrorRef = React.useRef(null);
    const endInputDatePickerErrorRef = React.useRef(null);
    const openValueRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [fromError, setFromError] = React.useState(false);
    const [fromErrorHelperText, setFromErrorHelperText] = React.useState();
    const [toError, setToError] = React.useState(false);
    const [toErrorHelperText, setToErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(() => {
        var _a;
        (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [startDateTextFieldRef]);
    const focusValidate = React.useCallback(() => {
        var _a, _b;
        if (toError) {
            (_a = endDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = startDateTextFieldRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [toError, startDateTextFieldRef, endDateTextFieldRef]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback((error, errorHelperText) => {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    const setFromErrorErrorHelperText = React.useCallback((error, fromErrorHelperText) => {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    const setToErrorErrorHelperText = React.useCallback((error, toErrorHelperText) => {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback((value) => {
        var _a, _b;
        if (required && (value[0] == null || value[1] == null)) {
            if (value[0] == null && value[1] == null) {
                setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else if (value[0] == null) {
                setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        if (requiredStart && value[0] == null) {
            setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (requiredEnd && value[1] == null) {
            setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (!allowSingleSelect && (value[0] || value[1]) && (value[0] == null || value[1] == null)) {
            if (value[0] == null) {
                setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        const startInputValue = ((_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.value) || '';
        const endInputValue = ((_b = endDateTextFieldRef.current) === null || _b === void 0 ? void 0 : _b.value) || '';
        if (compare.notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
            setFromErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (compare.notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
            setToErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (startInputDatePickerErrorRef.current) {
            setFromErrorErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
            return false;
        }
        if (endInputDatePickerErrorRef.current) {
            setToErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        setFromError(false);
        setToError(false);
        return true;
    }, [
        required,
        requiredStart,
        requiredEnd,
        allowSingleSelect,
        format,
        onValidate,
        setErrorErrorHelperText,
        setFromErrorErrorHelperText,
        setToErrorErrorHelperText,
    ]);
    /********************************************************************************************************************
     * Function - activeMonth
     * ******************************************************************************************************************/
    const activeMonth = React.useCallback((month) => {
        var _a;
        setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
    }, [containerRef]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [open, setOpen] = React.useState(false);
    const [selectType, setSelectType] = React.useState('start');
    const [months, setMonths] = React.useState(() => {
        const now = dayjs();
        return [now, now.add(1, 'month'), now.add(2, 'month')];
    });
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue$6);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error || fromError || toError)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, fromError, name, onChange, onValueChange, toError, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(() => {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current) {
                const openStartDate = openValueRef.current[0];
                const openEndDate = openValueRef.current[1];
                const startDate = value[0];
                const endDate = value[1];
                if (allowSingleSelect || (startDate != null && endDate != null)) {
                    let runOnRequestSearchSubmit = false;
                    if (openStartDate !== startDate) {
                        if (openStartDate && startDate) {
                            runOnRequestSearchSubmit = !openStartDate.isSame(startDate, 'date');
                        }
                        else {
                            runOnRequestSearchSubmit = true;
                        }
                    }
                    if (!runOnRequestSearchSubmit && openEndDate !== endDate) {
                        if (openEndDate && endDate) {
                            runOnRequestSearchSubmit = !openEndDate.isSame(endDate, 'date');
                        }
                        else {
                            runOnRequestSearchSubmit = true;
                        }
                    }
                    if (runOnRequestSearchSubmit) {
                        onRequestSearchSubmit(name, value);
                    }
                }
            }
        }
    }, [open]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((newValue) => {
        updateValue(newValue);
        setOpen(false);
        setFromErrorErrorHelperText(false, undefined);
        setToErrorErrorHelperText(false, undefined);
    }, [setFromErrorErrorHelperText, setToErrorErrorHelperText, updateValue]);
    const handleValueChange = React.useCallback((selectType, newValue, fromInput) => {
        var _a;
        let finalValue;
        switch (selectType) {
            case 'start':
                if ((_a = value[1]) === null || _a === void 0 ? void 0 : _a.isBefore(newValue)) {
                    finalValue = [newValue, null];
                    if (!fromInput) {
                        setTimeout(() => {
                            var _a;
                            (_a = endDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                        });
                    }
                }
                else {
                    finalValue = [newValue, value[1]];
                    if (!fromInput) {
                        if (value[0] == null && newValue != null && value[1] != null) {
                            setOpen(false);
                        }
                        else {
                            setTimeout(() => {
                                var _a;
                                (_a = endDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                            });
                        }
                    }
                }
                setFromErrorErrorHelperText(false, undefined);
                if (fromInput && newValue) {
                    activeMonth(newValue);
                }
                break;
            case 'end':
                if (newValue === null || newValue === void 0 ? void 0 : newValue.isBefore(value[0])) {
                    finalValue = [newValue, null];
                    if (fromInput && newValue) {
                        activeMonth(newValue.subtract(calendarCount - 1, 'month'));
                    }
                    setFromErrorErrorHelperText(false, undefined);
                }
                else {
                    finalValue = [value[0], newValue];
                    if (fromInput && newValue) {
                        activeMonth(newValue.subtract(calendarCount - 1, 'month'));
                    }
                    if (value[0]) {
                        setOpen(false);
                        if (fromInput && !open) {
                            setTimeout(() => {
                                onRequestSearchSubmit(name, finalValue);
                            });
                        }
                    }
                    else {
                        setTimeout(() => {
                            var _a;
                            (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                        });
                    }
                    setToErrorErrorHelperText(false, undefined);
                }
                break;
        }
        updateValue(finalValue);
        setTimeout(() => {
            onValueChangeByUser(name, finalValue);
        });
    }, [
        updateValue,
        value,
        setFromErrorErrorHelperText,
        activeMonth,
        calendarCount,
        setToErrorErrorHelperText,
        open,
        onRequestSearchSubmit,
        name,
        onValueChangeByUser,
    ]);
    const handleInputDatePickerChange = React.useCallback((selectType, newValue) => {
        let error = false;
        if (newValue) {
            if (newValue.isValid()) {
                handleValueChange(selectType, newValue, true);
            }
            else {
                error = true;
            }
        }
        else {
            handleValueChange(selectType, newValue, true);
        }
        switch (selectType) {
            case 'start':
                setFromError(error);
                break;
            case 'end':
                setToError(error);
                break;
        }
    }, [handleValueChange]);
    /********************************************************************************************************************
     * Event Handler - Container
     * ******************************************************************************************************************/
    const handleContainerFocus = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    const handleContainerBlur = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(() => {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    const handleContainerMouseDown = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    const handleInputDatePickerFocus = React.useCallback((selectType) => {
        if (readOnly || disabled)
            return;
        const startValue = valueRef.current[0];
        const endValue = valueRef.current[1];
        setOpen(true);
        setSelectType(selectType);
        if (startValue && endValue) {
            switch (selectType) {
                case 'start':
                    activeMonth(startValue);
                    break;
                case 'end':
                    if (startValue.isSame(endValue, 'month')) {
                        activeMonth(startValue);
                    }
                    else {
                        if (endValue.diff(startValue, 'month') > calendarCount - 1) {
                            activeMonth(endValue.subtract(calendarCount - 1, 'month'));
                        }
                        else {
                            activeMonth(startValue);
                        }
                    }
                    break;
            }
        }
        else if (startValue) {
            activeMonth(startValue);
        }
        else if (endValue) {
            activeMonth(endValue);
        }
    }, [readOnly, disabled, valueRef, activeMonth, calendarCount]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormDateRangePicker',
        getName: () => name,
        getReset: () => getFinalValue$6(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        getFromValue: () => valueRef.current[0],
        setFromValue: (value) => updateValue([value, valueRef.current[1]]),
        getToValue: () => valueRef.current[1],
        setToValue: (value) => updateValue([valueRef.current[0], value]),
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate,
        validate: () => validate(valueRef.current),
        setError: (error, errorText) => setErrorErrorHelperText(error, error ? errorText : undefined),
        getFormValueFormat: () => formValueFormat,
        getFormValueFromNameSuffix: () => formValueFromNameSuffix,
        getFormValueToNameSuffix: () => formValueToNameSuffix,
        getFormValueFromName: () => {
            return `${name}${formValueFromNameSuffix}`;
        },
        getFormValueToName: () => {
            return `${name}${formValueToNameSuffix}`;
        },
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        focusValidate,
        formValueFormat,
        formValueFromNameSuffix,
        formValueToNameSuffix,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const inputDatePickerProps = {
        align,
        variant,
        size,
        color,
        labelShrink,
        fullWidth,
        disabled,
        format,
        disablePast,
        disableFuture,
        minDate,
        maxDate,
    };
    const inputStyle = inputWidth != null ? { width: inputWidth } : { width: fullWidth ? undefined : 150 };
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: () => setOpen(false) },
            React.createElement("div", { className: classNames(className, 'PFormDateRangePicker'), style: {
                    display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                }, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [
                                        0,
                                        (error && errorHelperText) ||
                                            (fromError && fromErrorHelperText) ||
                                            (toError && toErrorHelperText)
                                            ? 8
                                            : -14,
                                    ],
                                },
                            },
                        ],
                    }, title: React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(PFormDateRangePickerTooltipPickerContainer, { ref: containerRef, calendarCount: calendarCount, selectType: selectType, value: value, months: months, disablePast: disablePast, disableFuture: disableFuture, minDate: minDate, maxDate: maxDate, onGetActionButtons: onGetActionButtons, onChange: handleChange, onValueChange: handleValueChange, onMonthsChange: setMonths })) },
                    React.createElement(material.Grid, { container: true, alignItems: 'center' },
                        React.createElement(material.Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, Object.assign({}, inputDatePickerProps, { style: inputStyle, value: value[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || (open && selectType === 'start'), required: required || requiredStart, readOnly: readOnly || readOnlyStart, enableKeyboardInput: enableKeyboardInput, icon: startIcon || icon, startAdornment: startStartAdornment || startAdornment, endAdornment: startEndAdornment || endAdornment, inputRef: startDateTextFieldRef, onChange: (newValue) => handleInputDatePickerChange('start', newValue), onFocus: () => handleInputDatePickerFocus('start'), onError: (reason) => (startInputDatePickerErrorRef.current = reason) }))),
                        React.createElement(material.Grid, { sx: { px: 1 } }, "~"),
                        React.createElement(material.Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, Object.assign({}, inputDatePickerProps, { style: inputStyle, value: value[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || (open && selectType === 'end'), required: required || requiredEnd, readOnly: readOnly || readOnlyEnd, enableKeyboardInput: enableKeyboardInput, icon: endIcon || icon, startAdornment: endStartAdornment || startAdornment, endAdornment: endEndAdornment || endAdornment, inputRef: endDateTextFieldRef, onChange: (newValue) => handleInputDatePickerChange('end', newValue), onFocus: () => handleInputDatePickerFocus('end'), onError: (reason) => (endInputDatePickerErrorRef.current = reason) }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(material.FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
PFormDateRangePicker.displayName = 'PFormDateRangePicker';const LinkDialog = ({ open, onConfirm, onCancel, onClose }) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const inputRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [value, setValue] = React.useState('');
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (!open) {
            setValue('');
        }
    }, [open]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleSubmit = React.useCallback(() => {
        var _a, _b;
        if ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.validate()) {
            onConfirm && onConfirm(value);
            onClose && onClose();
        }
        else {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [value, onConfirm, onClose]);
    const handleCancel = React.useCallback(() => {
        onCancel && onCancel();
        onClose && onClose();
    }, [onCancel, onClose]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Dialog, { className: 'color-primary', open: !!open, maxWidth: 'sm', fullWidth: true, onClose: (e, reason) => {
            if (reason === 'backdropClick') {
                if (compare.empty(value)) {
                    onClose && onClose();
                }
            }
        } },
        React.createElement(material.DialogTitle, null, "\uD30C\uC77C \uB9C1\uD06C"),
        React.createElement(material.DialogContent, null,
            React.createElement(material.Box, null,
                React.createElement("div", null, "\uD30C\uC77C\uC758 \uB9C1\uD06C URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),
                React.createElement(PFormUrl, { ref: (ref) => {
                        if (inputRef.current == null && ref !== null) {
                            ref.focus();
                        }
                        inputRef.current = ref;
                    }, name: 'form-file-link-url', label: '\uB9C1\uD06C URL', value: value, required: true, fullWidth: true, style: { marginTop: 15 }, onChange: setValue }))),
        React.createElement(material.DialogActions, null,
            React.createElement(material.Button, { variant: 'text', onClick: handleCancel }, "\uCDE8\uC18C"),
            React.createElement(material.Button, { variant: 'text', onClick: handleSubmit }, "\uD655\uC778"))));
};const StyledPButton = material.styled(reactComponent.PButton) `
  min-width: 0;

  &.input-file-btn {
    padding: 0 !important;
    position: relative;

    .PFlexRowBox {
      height: 100%;
      label {
        cursor: pointer;
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 10px;

        .PIcon {
          margin-right: 0.2em;
        }
      }
    }
  }

  &.hidden-label.input-file-btn .PFlexRowBox label .PIcon {
    margin-left: 0;
    margin-right: 0;
  }

  &.MuiButton-outlined {
    &:first-of-type:not(:last-of-type) {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-of-type:not(:first-of-type) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:first-of-type):not(:last-of-type) {
      border-right: 0;
      border-radius: 0;
    }
  }
`;const getFinalValue$5 = (value) => value || '';insertStyle(".PFormFile .control-wrap{display:inline-flex}.PFormFile .control-wrap .file-name-wrap .file-name{min-width:350px}.PFormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root{padding-right:7px}.PFormFile .control-wrap .input-file{display:none}.PFormFile .control-wrap .input-file-wrap{display:flex}.PFormFile .control-wrap .input-file-wrap .input-file-btn:not(.hidden-label) .PIcon{margin-left:-3px}.PFormFile.full-width .control-wrap{display:flex}.PFormFile.full-width .control-wrap .file-name-wrap{flex:1}.PFormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root{padding-right:0}.PFormFile:not(.hide-file-name).variant-outlined .form-file-btn label,.PFormFile:not(.hide-file-name).variant-filled .form-file-btn label{padding-top:10px;padding-bottom:10px}.PFormFile:not(.hide-file-name).variant-standard .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile:not(.hide-file-name).size-small .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn{height:44px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn{height:26px}.PFormFile.hide-file-name.with-label.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-filled .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn{height:24px}.PFormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn{height:31px}.PFormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn{height:26px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-outlined .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-filled .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-standard .form-file-btn{height:28px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-outlined .form-file-btn{height:24px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-filled .form-file-btn{height:31px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-standard .form-file-btn{height:26px}");const FILE_VALUE = '';
const PFormFile = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, labelShrink: initLabelShrink, fullWidth: initFullWidth, 
//----------------------------------------------------------------------------------------------------------------
accept, hideUrl, tabIndex, uploadLabel, uploadTabIndex, hideUpload, hideUploadLabel, linkLabel, linkTabIndex, hideLink, hideLinkLabel, removeLabel, removeTabIndex, hideRemove, hideRemoveLabel, maxFileSize, preview, hidden: initHidden, onFile, onLink, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label: initLabel, required, readOnly, disabled: initDisabled, error: initError, helperText, value: initValue = '', data: initData, exceptValue, onChange, onValidate, 
//----------------------------------------------------------------------------------------------------------------
className, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, onAddValueItem, onValueChange, onRemoveValueItem, onValueChangeByUser, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const textFieldRef = React.useRef(null);
    const fileUploadBtnRef = React.useRef(null);
    const linkBtnRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [isOpenLinkDialog, setIsOpenLinkDialog] = React.useState(false);
    const [alertDialogProps, setAlertDialogProps] = React.useState({ open: false });
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * State - width, height
     * ******************************************************************************************************************/
    const { ref: innerRef, height } = reactResizeDetector.useResizeDetector({ handleWidth: false });
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    const validate = React.useCallback(function (value) {
        let isEmptyValue = false;
        if (value) {
            const d = document.createElement('div');
            d.innerHTML = value;
            const text = d.textContent || d.innerText;
            isEmptyValue = compare.empty(text.trim());
        }
        if (required && (isEmptyValue || compare.empty(value))) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue$5);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    const focus = React.useCallback(() => {
        var _a, _b, _c;
        if (hideUrl) {
            if (hideUpload) {
                (_a = linkBtnRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                (_b = fileUploadBtnRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
        else {
            (_c = textFieldRef.current) === null || _c === void 0 ? void 0 : _c.focus();
        }
    }, [hideUpload, hideUrl]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormFile',
        getName: () => name,
        getReset: () => getFinalValue$5(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const fileSizeCheck = React.useCallback((file) => {
        if (maxFileSize) {
            return new Promise((resolve, reject) => {
                if (file instanceof File) {
                    if (file.size > maxFileSize) {
                        setAlertDialogProps({
                            open: true,
                            color: 'error',
                            title: '파일 사이즈',
                            content: (React.createElement("div", null,
                                React.createElement("div", null,
                                    React.createElement(material.Typography, { color: 'error' },
                                        getFileSizeText(maxFileSize),
                                        " \uC774\uD558\uC758 \uD30C\uC77C\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")),
                                React.createElement("div", { style: { opacity: 0.7 } },
                                    "(\uC120\uD0DD\uD55C \uD30C\uC77C \uC0AC\uC774\uC988 : ",
                                    getFileSizeText(file.size),
                                    ")"))),
                        });
                        reject();
                    }
                    else {
                        resolve();
                    }
                }
                else {
                    resolve();
                }
            });
        }
        else {
            return Promise.resolve();
        }
    }, [maxFileSize]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleFileChange = React.useCallback((e) => {
        if (onFile) {
            const target = e.currentTarget;
            const file = target.files[0];
            fileSizeCheck(file).then(() => {
                onFile(file).then((url) => {
                    updateValue(url);
                    setTimeout(() => {
                        if (onValueChangeByUser)
                            onValueChangeByUser(name, url);
                    });
                });
            });
        }
    }, [fileSizeCheck, name, onFile, onValueChangeByUser, updateValue]);
    const handleLinkClick = React.useCallback(() => {
        setIsOpenLinkDialog(true);
    }, []);
    const handleRemoveClick = React.useCallback(() => {
        updateValue('');
        setTimeout(() => {
            if (onValueChangeByUser)
                onValueChangeByUser(name, '');
        });
    }, [name, onValueChangeByUser, updateValue]);
    const handleLinkDialogConfirm = React.useCallback((url) => {
        if (onLink) {
            onLink(url).then((finalUrl) => {
                updateValue(finalUrl);
                setTimeout(() => {
                    if (onValueChangeByUser)
                        onValueChangeByUser(name, finalUrl);
                });
            });
        }
        else {
            updateValue(url);
            setTimeout(() => {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, url);
            });
        }
    }, [name, onLink, onValueChangeByUser, updateValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormFile', `variant-${variant}`, `size-${size}`, !!initLabel && 'with-label', !!fullWidth && 'full-width', !!hideUrl && 'hide-file-name', !!hideLink && 'hide-link', !!hideUpload && 'hide-upload', !!hideRemove && 'hide-remove', compare.notEmpty(value) && 'with-value'), labelIcon: hideUrl ? labelIcon : undefined, label: hideUrl ? initLabel : undefined, error: error, required: required, fullWidth: fullWidth, hidden: hidden, controlHeight: height, helperText: React.createElement("div", null,
            preview,
            React.createElement("div", null, error ? errorHelperText : helperText)), hideLabel: !hideUrl, style: { width: fullWidth ? '100%' : undefined }, control: React.createElement("div", { className: 'control-wrap' },
            !hideUrl && (React.createElement("div", { className: 'file-name-wrap' },
                React.createElement(material.TextField, { ref: (ref) => {
                        innerRef.current = ref;
                    }, inputRef: textFieldRef, className: 'file-name', variant: variant, label: labelIcon ? (React.createElement(React.Fragment, null,
                        React.createElement(reactComponent.PIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
                        React.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel), size: size, required: required, value: value || '', focused: focused, disabled: disabled, fullWidth: true, tabIndex: tabIndex, error: error, slotProps: {
                        inputLabel: labelShrink ? { shrink: labelShrink } : undefined,
                        htmlInput: { readOnly: true, tabIndex: tabIndex },
                        input: {
                            endAdornment: (React.createElement(material.InputAdornment, { position: 'end' },
                                React.createElement("div", { className: 'input-file-wrap' },
                                    !hideUpload && (React.createElement(React.Fragment, null,
                                        React.createElement(StyledPButton, { variant: 'text', tabIndex: uploadTabIndex == null ? -1 : uploadTabIndex, className: classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, size: size, disabled: readOnly || disabled, ref: fileUploadBtnRef },
                                            React.createElement("label", { htmlFor: id },
                                                React.createElement(reactComponent.PIcon, { size: size }, "upload"),
                                                !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                                        React.createElement("input", { type: 'file', accept: accept, id: id, value: FILE_VALUE, className: 'input-file', onChange: handleFileChange }))),
                                    !hideLink && (React.createElement(StyledPButton, { variant: 'text', tabIndex: linkTabIndex == null ? -1 : linkTabIndex, className: classNames('link-btn  form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'link', size: size, disabled: readOnly || disabled, ref: linkBtnRef, onClick: handleLinkClick }, !hideLinkLabel && (linkLabel || '링크'))),
                                    !hideRemove && compare.notEmpty(value) && (React.createElement(StyledPButton, { variant: 'text', tabIndex: removeTabIndex == null ? -1 : removeTabIndex, className: classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'close', size: size, disabled: readOnly || disabled, onClick: handleRemoveClick }, !hideRemoveLabel && (removeLabel || '삭제')))))),
                        },
                    }, placeholder: '\uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694' }))),
            !!hideUrl && (React.createElement("div", { className: 'input-file-wrap' },
                !hideUpload && (React.createElement(React.Fragment, null,
                    React.createElement(StyledPButton, { variant: 'outlined', tabIndex: uploadTabIndex, className: classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, size: size, ref: fileUploadBtnRef, disabled: disabled },
                        React.createElement("label", { htmlFor: id },
                            React.createElement(reactComponent.PIcon, { size: size, color: error ? 'error' : color }, "upload"),
                            !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                    React.createElement("input", { type: 'file', accept: accept, id: id, value: FILE_VALUE, className: 'input-file', onChange: handleFileChange }))),
                !hideLink && (React.createElement(StyledPButton, { variant: 'outlined', tabIndex: linkTabIndex, className: classNames('link-btn form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'link', size: size, onClick: handleLinkClick, disabled: disabled, ref: linkBtnRef }, !hideLinkLabel && (linkLabel || '링크'))),
                !hideRemove && compare.notEmpty(value) && (React.createElement(StyledPButton, { variant: 'outlined', tabIndex: removeTabIndex, className: classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'close', size: size, disabled: disabled, onClick: handleRemoveClick }, !hideRemoveLabel && (removeLabel || '삭제'))))),
            React.createElement(PrivateAlertDialog, Object.assign({}, alertDialogProps, { onClose: () => setAlertDialogProps({ open: false }) })),
            React.createElement(LinkDialog, { open: isOpenLinkDialog, onConfirm: handleLinkDialogConfirm, onClose: () => setIsOpenLinkDialog(false) })) }));
});
PFormFile.displayName = 'PFormFile';const getFinalValue$4 = (value) => value || '';insertStyle(".PFormImageFile .preview-img{max-width:100%}.PFormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img{padding-right:14px}");const PFormImageFile = React.forwardRef((_a, ref) => {
    var { className, imageSize, preview, previewMaxHeight, accept = '.jpg,.jpeg,.png', value: initValue, onChange, onFile, onLink } = _a, props = __rest(_a, ["className", "imageSize", "preview", "previewMaxHeight", "accept", "value", "onChange", "onFile", "onLink"]);
    const [alertDialogProps, setAlertDialogProps] = React.useState({
        open: false,
    });
    const [urlKit] = React.useState(() => {
        if (window.URL)
            return window.URL;
        else if (window.webkitURL)
            return window.webkitURL;
    });
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    const [value, _setValue] = reactHook.useAutoUpdateState(initValue, getFinalValue$4);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (onChange)
            onChange(finalValue);
        return finalValue;
    }, [_setValue, onChange]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const imageSizeCheck = React.useCallback((file) => {
        if (imageSize && urlKit) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    const width = img.naturalWidth;
                    const height = img.naturalHeight;
                    urlKit.revokeObjectURL(img.src);
                    let sizeOk = false;
                    let sizeText = '';
                    if (Array.isArray(imageSize)) {
                        imageSize.forEach((a) => {
                            if (width === a.width && height === a.height) {
                                sizeOk = true;
                            }
                            if (sizeText !== '')
                                sizeText += ', ';
                            sizeText += `${a.width}*${a.height}`;
                        });
                    }
                    else {
                        sizeOk = width === imageSize.width && height === imageSize.height;
                        sizeText = `${imageSize.width}*${imageSize.height}`;
                    }
                    if (sizeOk) {
                        resolve();
                    }
                    else {
                        setAlertDialogProps({
                            open: true,
                            color: 'error',
                            title: '이미지 사이즈',
                            content: (React.createElement(React.Fragment, null,
                                React.createElement("div", null,
                                    React.createElement(material.Typography, { color: 'error' },
                                        sizeText,
                                        " \uC0AC\uC774\uC988\uC758 \uC774\uBBF8\uC9C0\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")),
                                React.createElement("div", { style: { opacity: 0.7 } },
                                    "(\uC120\uD0DD\uD55C \uC774\uBBF8\uC9C0 \uC0AC\uC774\uC988 : ",
                                    width,
                                    "*",
                                    height,
                                    ")"))),
                        });
                        reject();
                    }
                };
                img.onerror = () => {
                    setAlertDialogProps({ open: true, title: '이미지 사이즈', content: '이미지를 불러올 수 없습니다.' });
                    reject();
                };
                if (file instanceof File) {
                    img.src = urlKit.createObjectURL(file);
                }
                else {
                    img.src = file;
                }
            });
        }
        return Promise.resolve();
    }, [urlKit, imageSize]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((value) => {
        updateValue(value);
    }, [updateValue]);
    const handleFile = React.useCallback((file) => {
        return new Promise((resolve, reject) => {
            imageSizeCheck(file)
                .then(() => {
                if (onFile) {
                    onFile(file)
                        .then((url) => {
                        resolve(url);
                    })
                        .catch(() => reject());
                }
                else {
                    reject();
                }
            })
                .catch(() => {
                reject();
            });
        });
    }, [onFile, imageSizeCheck]);
    const handleLink = React.useCallback((url) => {
        return new Promise((resolve, reject) => {
            imageSizeCheck(url)
                .then(() => {
                if (onLink) {
                    onLink(url)
                        .then((finalUrl) => resolve(finalUrl))
                        .catch(() => reject());
                }
                else {
                    resolve(url);
                }
            })
                .catch(() => {
                reject();
            });
        });
    }, [onLink, imageSizeCheck]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(PFormFile, Object.assign({ ref: ref, className: classNames(className, 'PFormImageFile'), accept: accept, value: value, preview: preview && value ? (React.createElement("a", { href: value, target: '_blank', tabIndex: -1 },
                React.createElement(material.Tooltip, { title: React.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } },
                        React.createElement("img", { src: value, style: { maxWidth: '100%', verticalAlign: 'middle' }, alt: '' })) },
                    React.createElement("img", { className: 'preview-img', src: value, style: { maxHeight: previewMaxHeight || undefined }, alt: '' })))) : undefined, onChange: handleChange, onFile: handleFile, onLink: handleLink }, props)),
        React.createElement(PrivateAlertDialog, Object.assign({}, alertDialogProps, { onClose: () => setAlertDialogProps({ open: false }) }))));
});
PFormImageFile.displayName = 'PFormImageFile';var ko$1 = {exports: {}};var ko = ko$1.exports;

var hasRequiredKo;

function requireKo () {
	if (hasRequiredKo) return ko$1.exports;
	hasRequiredKo = 1;
	(function (module, exports$1) {
		!function(e,_){module.exports=_(dayjs);}(ko,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=_(e),t={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(e){return e+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(e){return e<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return d.default.locale(t,null,true),t})); 
	} (ko$1));
	return ko$1.exports;
}requireKo();const getFinalValue$3 = (value) => {
    return value || null;
};
const valueToDate$3 = (v) => dayjs(`${v.year}-${v.month}-01`);
const valueToYm$1 = (v) => v.year * 100 + v.month;
const dateToValue$3 = (v) => ({ year: v.year(), month: v.month() + 1 });const DEFAULT_MIN_VALUE$1 = {
    year: 2020,
    month: 1,
};
const DEFAULT_MAX_VALUE$1 = {
    year: 2050,
    month: 12,
};
const PFormMonthPicker = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, 
//----------------------------------------------------------------------------------------------------------------
hidden: initHidden, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label, readOnly, required, fullWidth: initFullWidth, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, 
// -------------------------------------------------------------------------------------------------------------------
icon, format = 'YYYY년 MM월', labelShrink: initLabelShrink, disablePast, disableFuture, minValue = DEFAULT_MIN_VALUE$1, maxValue = DEFAULT_MAX_VALUE$1, inputWidth, enableKeyboardInput, startAdornment, endAdornment, formValueYearNameSuffix = '_year', formValueMonthNameSuffix = '_month', 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const ratingRef = React.useRef(null);
    const inputRef = React.useRef(undefined);
    const closeTimeoutRef = React.useRef(undefined);
    const mouseDownTimeRef = React.useRef(undefined);
    const inputDatePickerErrorRef = React.useRef(null);
    const openValueRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    const validate = React.useCallback(function (value) {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (inputDatePickerErrorRef.current) {
            setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [onValidate, required, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue$3);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const dateInfo = React.useMemo(() => {
        const nowDate = dayjs();
        const nowValue = dateToValue$3(nowDate);
        const nowYm = valueToYm$1(nowValue);
        const minDate = valueToDate$3(minValue);
        const maxDate = valueToDate$3(maxValue);
        let minAvailableValue;
        if (disablePast) {
            const minYm = valueToYm$1(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        const minAvailableYm = valueToYm$1(minAvailableValue);
        let maxAvailableValue;
        if (disableFuture) {
            const maxYm = valueToYm$1(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        const maxAvailableYm = valueToYm$1(maxAvailableValue);
        return {
            minDate,
            maxDate,
            minAvailableYm,
            maxAvailableYm,
        };
    }, [disableFuture, disablePast, maxValue, minValue]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
    }, []);
    reactHook.useFirstSkipEffect(() => {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                let runOnRequestSearchSubmit;
                if (openValueRef.current && value) {
                    runOnRequestSearchSubmit =
                        openValueRef.current.year !== value.year || openValueRef.current.month !== value.month;
                }
                else {
                    runOnRequestSearchSubmit = true;
                }
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, value);
                }
            }
        }
    }, [open]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(() => {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormMonthPicker',
        getName: () => name,
        getReset: () => getFinalValue$3(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        getYear: () => (valueRef.current ? valueRef.current.year : null),
        setYear: (year) => {
            updateValue(year === null
                ? null
                : valueRef.current
                    ? { year, month: valueRef.current.month }
                    : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 });
        },
        getMonth: () => (valueRef.current ? valueRef.current.month : null),
        setMonth: (month) => {
            updateValue(month === null
                ? null
                : valueRef.current
                    ? { year: valueRef.current.year, month }
                    : { year: new Date().getFullYear(), month });
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
        getFormValueYearNameSuffix: () => formValueYearNameSuffix,
        getFormValueMonthNameSuffix: () => formValueMonthNameSuffix,
        getFormValueYearName: () => {
            return `${name}${formValueYearNameSuffix}`;
        },
        getFormValueMonthName: () => {
            return `${name}${formValueMonthNameSuffix}`;
        },
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueMonthNameSuffix,
        formValueYearNameSuffix,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleContainerMouseDown = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    const handleContainerFocus = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    const handleContainerBlur = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(() => {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    const handleContainerChange = React.useCallback((newValue, isMonthSelect) => {
        updateValue(newValue);
        if (isMonthSelect)
            setOpen(false);
        setTimeout(() => {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    const handleInputDatePickerFocus = React.useCallback(() => {
        if (readOnly || disabled)
            return;
        setOpen(true);
    }, [readOnly, disabled]);
    const handleInputDatePickerShouldDisableYear = React.useCallback((date) => {
        const dateYm = Number(date.format('YYYYMM'));
        return dateYm < dateInfo.minAvailableYm || dateYm > dateInfo.maxAvailableYm;
    }, [dateInfo]);
    /********************************************************************************************************************
     * Variables
     * ******************************************************************************************************************/
    const valueDate = value ? valueToDate$3(value) : null;
    const inputDatePickerProps = {
        variant,
        size,
        color,
        labelShrink,
        fullWidth,
        disabled,
        format,
        minDate: dateInfo.minDate,
        maxDate: dateInfo.maxDate,
    };
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: 'ko' },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: () => setOpen(false) },
            React.createElement("div", { className: classNames(className, 'PFormMonthPicker'), style: {
                    display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                }, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && errorHelperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(PrivateMonthPicker, { minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, value: value, onChange: handleContainerChange })) },
                    React.createElement("div", null,
                        React.createElement(PrivateInputDatePicker, Object.assign({}, inputDatePickerProps, { style: inputWidth != null
                                ? Object.assign({ width: inputWidth }, initStyle) : Object.assign({ width: fullWidth ? undefined : 150 }, initStyle), sx: sx, value: valueDate, label: label, labelIcon: labelIcon, error: error, focused: focused, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: inputRef, onChange: (v) => updateValue(v ? dateToValue$3(v) : v), onFocus: handleInputDatePickerFocus, onError: (reason) => (inputDatePickerErrorRef.current = reason), shouldDisableYear: handleInputDatePickerShouldDisableYear })))),
                !formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PFormMonthPicker.displayName = 'PFormMonthPicker';const DEFAULT_VALUE$1 = [null, null];
const getFinalValue$2 = (value) => {
    return value || DEFAULT_VALUE$1;
};
const valueToDate$2 = (v) => dayjs(`${v.year}-${v.month}-01`);
const valueToYm = (v) => v.year * 100 + v.month;
const dateToValue$2 = (v) => ({ year: v.year(), month: v.month() + 1 });const DEFAULT_FORMAT$1 = 'YYYY년 MM월';
const DEFAULT_MIN_VALUE = {
    year: 2020,
    month: 1,
};
const DEFAULT_MAX_VALUE = {
    year: 2050,
    month: 12,
};
const PFormMonthRangePicker = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, 
//----------------------------------------------------------------------------------------------------------------
hidden: initHidden, 
//----------------------------------------------------------------------------------------------------------------
name, fromLabel, fromLabelIcon, toLabel, toLabelIcon, readOnly, required, fullWidth: initFullWidth, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, 
// -------------------------------------------------------------------------------------------------------------------
icon, format = DEFAULT_FORMAT$1, labelShrink: initLabelShrink, disablePast, disableFuture, minValue = DEFAULT_MIN_VALUE, maxValue = DEFAULT_MAX_VALUE, inputWidth, enableKeyboardInput, startAdornment, endAdornment, formValueFromYearNameSuffix = '_from_year', formValueFromMonthNameSuffix = '_from_month', formValueToYearNameSuffix = '_to_year', formValueToMonthNameSuffix = '_to_month', align, 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const startInputRef = React.useRef(undefined);
    const endInputRef = React.useRef(undefined);
    const startInputDatePickerErrorRef = React.useRef(null);
    const endInputDatePickerErrorRef = React.useRef(null);
    const openValueRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [fromError, setFromError] = React.useState(false);
    const [fromErrorHelperText, setFromErrorHelperText] = React.useState();
    const [toError, setToError] = React.useState(false);
    const [toErrorHelperText, setToErrorHelperText] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const setFromErrorErrorHelperText = React.useCallback((error, fromErrorHelperText) => {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    const setToErrorErrorHelperText = React.useCallback((error, toErrorHelperText) => {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    const validate = React.useCallback(function (value) {
        if (required && (value[0] == null || value[1] == null)) {
            if (value[0] == null && value[1] == null) {
                setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else if (value[0] == null) {
                setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        if (startInputDatePickerErrorRef.current) {
            setFromErrorErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
            if (endInputDatePickerErrorRef.current) {
                setToErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
            }
            return false;
        }
        if (endInputDatePickerErrorRef.current) {
            setToErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        setFromErrorErrorHelperText(false, undefined);
        setToErrorErrorHelperText(false, undefined);
        return true;
    }, [onValidate, required, setToErrorErrorHelperText, setErrorErrorHelperText, setFromErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue$2);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error || fromError || toError)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, fromError, name, onChange, onValueChange, toError, validate]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const dateInfo = React.useMemo(() => {
        const nowDate = dayjs();
        const nowValue = dateToValue$2(nowDate);
        const nowYm = valueToYm(nowValue);
        const minDate = minValue ? valueToDate$2(minValue) : undefined;
        const maxDate = maxValue ? valueToDate$2(maxValue) : undefined;
        let minAvailableValue;
        if (disablePast) {
            const minYm = valueToYm(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        const minAvailableYm = valueToYm(minAvailableValue);
        let maxAvailableValue;
        if (disableFuture) {
            const maxYm = valueToYm(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        const maxAvailableYm = valueToYm(maxAvailableValue);
        return {
            minDate,
            maxDate,
            minAvailableYm,
            maxAvailableYm,
        };
    }, [disableFuture, disablePast, maxValue, minValue]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(() => {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                let runOnRequestSearchSubmit;
                if (openValueRef.current && value) {
                    runOnRequestSearchSubmit = openValueRef.current !== value;
                }
                else {
                    runOnRequestSearchSubmit = true;
                }
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, value);
                }
            }
        }
    }, [open]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormMonthRangePicker',
        getName: () => name,
        getReset: () => getFinalValue$2(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        getFromValue: () => valueRef.current[0],
        setFromValue: (value) => updateValue([value, valueRef.current[1]]),
        getToValue: () => valueRef.current[1],
        setToValue: (value) => updateValue([valueRef.current[0], value]),
        getFromYear: () => (valueRef.current[0] ? valueRef.current[0].year : null),
        setFromYear: (year) => {
            updateValue([
                year === null
                    ? null
                    : valueRef.current[0]
                        ? { year, month: valueRef.current[0].month }
                        : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 },
                valueRef.current[1],
            ]);
        },
        getFromMonth: () => (valueRef.current[0] ? valueRef.current[0].month : null),
        setFromMonth: (month) => {
            updateValue([
                month === null
                    ? null
                    : valueRef.current[0]
                        ? { year: valueRef.current[0].year, month }
                        : { year: new Date().getFullYear(), month },
                valueRef.current[1],
            ]);
        },
        getToYear: () => (valueRef.current[1] ? valueRef.current[1].year : null),
        setToYear: (year) => {
            updateValue([
                valueRef.current[0],
                year === null
                    ? null
                    : valueRef.current[1]
                        ? { year, month: valueRef.current[1].month }
                        : { year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 },
            ]);
        },
        getToMonth: () => (valueRef.current[1] ? valueRef.current[1].month : null),
        setToMonth: (month) => {
            updateValue([
                valueRef.current[0],
                month === null
                    ? null
                    : valueRef.current[1]
                        ? { year: valueRef.current[1].year, month }
                        : { year: new Date().getFullYear(), month },
            ]);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
        getFormValueFromYearNameSuffix: () => formValueFromYearNameSuffix,
        getFormValueFromMonthNameSuffix: () => formValueFromMonthNameSuffix,
        getFormValueToYearNameSuffix: () => formValueToYearNameSuffix,
        getFormValueToMonthNameSuffix: () => formValueToMonthNameSuffix,
        getFormValueFromYearName: () => {
            return `${name}${formValueFromYearNameSuffix}`;
        },
        getFormValueFromMonthName: () => {
            return `${name}${formValueFromMonthNameSuffix}`;
        },
        getFormValueToYearName: () => {
            return `${name}${formValueToYearNameSuffix}`;
        },
        getFormValueToMonthName: () => {
            return `${name}${formValueToMonthNameSuffix}`;
        },
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueFromMonthNameSuffix,
        formValueFromYearNameSuffix,
        formValueToMonthNameSuffix,
        formValueToYearNameSuffix,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleContainerChange = React.useCallback((newValue, selectType, isMonthSelect) => {
        updateValue(newValue);
        if (selectType === 'start' && isMonthSelect) {
            setTimeout(() => {
                var _a;
                (_a = endInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
        else if (selectType === 'end' && isMonthSelect) {
            setOpen(false);
        }
        setTimeout(() => {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    const handleInputDatePickerChange = React.useCallback((selectType, date) => {
        if (date == null || date.isValid()) {
            if (selectType === 'start') {
                const newValue = [date ? dateToValue$2(date) : null, valueRef.current[1]];
                if (newValue[0] !== null &&
                    valueToYm(newValue[0]) >= dateInfo.minAvailableYm &&
                    valueToYm(newValue[0]) <= dateInfo.maxAvailableYm) {
                    if (newValue[1] !== null && newValue[1] < newValue[0]) {
                        newValue[1] = newValue[0];
                    }
                }
                if (fromError) {
                    validate(newValue);
                }
                setTimeout(() => {
                    onValueChangeByUser(name, newValue);
                });
                updateValue(newValue);
            }
            else {
                const newValue = [valueRef.current[0], date ? dateToValue$2(date) : null];
                if (newValue[1] !== null &&
                    valueToYm(newValue[1]) >= dateInfo.minAvailableYm &&
                    valueToYm(newValue[1]) <= dateInfo.maxAvailableYm) {
                    if (newValue[0] !== null && newValue[0] > newValue[1]) {
                        newValue[0] = newValue[1];
                    }
                }
                if (toError) {
                    validate(newValue);
                }
                setTimeout(() => {
                    onValueChangeByUser(name, newValue);
                });
                updateValue(newValue);
            }
        }
    }, [valueRef, dateInfo, fromError, updateValue, validate, onValueChangeByUser, name, toError]);
    const handleInputDatePickerFocus = React.useCallback((selectType) => {
        var _a;
        if (readOnly || disabled)
            return;
        if (selectType === 'end' && value[0] == null) {
            (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            setOpen(true);
        }
    }, [readOnly, disabled, value]);
    const handleInputDatePickerShouldDisableYear = React.useCallback((dt) => {
        const ym = dt.year() * 100 + (dt.month() + 1);
        return ym < dateInfo.minAvailableYm || ym > dateInfo.maxAvailableYm;
    }, [dateInfo]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const valueDate = [
        !!value && !!value[0] ? valueToDate$2(value[0]) : null,
        !!value && !!value[1] ? valueToDate$2(value[1]) : null,
    ];
    const inputDatePickerProps = {
        align,
        variant,
        size,
        color,
        labelShrink,
        fullWidth,
        disabled,
        format,
        minDate: dateInfo.minDate,
        maxDate: dateInfo.maxDate,
    };
    const inputStyle = inputWidth != null ? Object.assign({ width: inputWidth }, initStyle) : Object.assign({ width: fullWidth ? undefined : 150 }, initStyle);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: 'ko' },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: () => setOpen(false) },
            React.createElement("div", { className: classNames(className, 'PFormMonthRangePicker'), style: {
                    display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                } },
                React.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && errorHelperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(PrivateMonthRangePicker, { minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, value: value, onChange: handleContainerChange })) },
                    React.createElement(material.Grid, { container: true, alignItems: 'center' },
                        React.createElement(material.Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, Object.assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || open, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: startInputRef, onChange: (v) => handleInputDatePickerChange('start', v), onFocus: () => handleInputDatePickerFocus('start'), onError: (reason) => (startInputDatePickerErrorRef.current = reason), shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                        React.createElement(material.Grid, { sx: { px: 1 } }, "~"),
                        React.createElement(material.Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, Object.assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || open, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: endInputRef, onChange: (v) => handleInputDatePickerChange('end', v), onFocus: () => handleInputDatePickerFocus('end'), onError: (reason) => (endInputDatePickerErrorRef.current = reason), shouldDisableYear: handleInputDatePickerShouldDisableYear }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(material.FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
PFormMonthRangePicker.displayName = 'PFormMonthRangePicker';const valueToDate$1 = (v) => dayjs(`${v}-01-01`);
const dateToValue$1 = (v) => v.year();
const getFinalValue$1 = (newValue) => {
    return newValue || null;
};const DEFAULT_FORMAT = 'YYYY년';
const PFormYearPicker = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, 
//----------------------------------------------------------------------------------------------------------------
hidden: initHidden, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label, readOnly, required, fullWidth: initFullWidth, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, 
// -------------------------------------------------------------------------------------------------------------------
icon, format = DEFAULT_FORMAT, labelShrink: initLabelShrink, disablePast, disableFuture, minYear = 2020, maxYear = 2050, inputWidth, enableKeyboardInput, startAdornment, endAdornment, 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const ratingRef = React.useRef(null);
    const inputRef = React.useRef(undefined);
    const closeTimeoutRef = React.useRef(undefined);
    const mouseDownTimeRef = React.useRef(undefined);
    const inputDatePickerErrorRef = React.useRef(null);
    const openValueRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => compare.ifUndefined(initDisabled, formDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    const validate = React.useCallback(function (value) {
        if (required && compare.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (inputDatePickerErrorRef.current) {
            setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [onValidate, required, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue$1);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const dateInfo = React.useMemo(() => {
        const nowYear = new Date().getFullYear();
        const minDate = minYear ? valueToDate$1(minYear) : undefined;
        const maxDate = maxYear ? valueToDate$1(maxYear) : undefined;
        return { nowYear, min: minDate, max: maxDate };
    }, [maxYear, minYear]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
    }, []);
    reactHook.useFirstSkipEffect(() => {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                let runOnRequestSearchSubmit;
                if (openValueRef.current && value) {
                    runOnRequestSearchSubmit = openValueRef.current !== value;
                }
                else {
                    runOnRequestSearchSubmit = true;
                }
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, value);
                }
            }
        }
    }, [open]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(() => {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormYearPicker',
        getName: () => name,
        getReset: () => getFinalValue$1(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleContainerMouseDown = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    const handleContainerFocus = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    const handleContainerBlur = React.useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(() => {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    const handleContainerChange = React.useCallback((newValue, isClick) => {
        updateValue(newValue);
        if (isClick)
            setOpen(false);
        setTimeout(() => {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    const handleInputDatePickerChange = React.useCallback((v) => {
        const newValue = v ? dateToValue$1(v) : v;
        updateValue(newValue);
        setTimeout(() => {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    const handleInputDatePickerFocus = React.useCallback(() => {
        if (readOnly || disabled)
            return;
        setOpen(true);
    }, [readOnly, disabled]);
    const handleInputDatePickerShouldDisableYear = React.useCallback((year) => {
        return (!!disablePast && year.year() < dateInfo.nowYear) || (!!disableFuture && year.year() > dateInfo.nowYear);
    }, [disableFuture, disablePast, dateInfo.nowYear]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const valueDate = value ? valueToDate$1(value) : null;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: () => setOpen(false) },
            React.createElement("div", { className: classNames(className, 'PFormYearPicker'), style: {
                    display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                }, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && errorHelperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(PrivateYearPicker, { minYear: minYear, maxYear: maxYear, disablePast: disablePast, disableFuture: disableFuture, value: value, onChange: handleContainerChange })) },
                    React.createElement("div", null,
                        React.createElement(PrivateInputDatePicker, { variant: variant, size: size, color: color, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, disabled: disabled, format: format, minDate: dateInfo.min, maxDate: dateInfo.max, style: inputWidth != null
                                ? Object.assign({ width: inputWidth }, initStyle) : Object.assign({ width: fullWidth ? undefined : 150 }, initStyle), sx: sx, value: valueDate, label: label, labelIcon: labelIcon, error: error, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: inputRef, onChange: handleInputDatePickerChange, onFocus: handleInputDatePickerFocus, onError: (reason) => (inputDatePickerErrorRef.current = reason), shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                !formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PFormYearPicker.displayName = 'PFormYearPicker';const DEFAULT_VALUE = [null, null];
const valueToDate = (v) => dayjs(`${v}-01-01`);
const dateToValue = (v) => v.year();
const getFinalValue = (value) => {
    return value || DEFAULT_VALUE;
};const PFormYearRangePicker = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, 
//----------------------------------------------------------------------------------------------------------------
hidden: initHidden, 
//----------------------------------------------------------------------------------------------------------------
name, fromLabel, fromLabelIcon, toLabel, toLabelIcon, readOnly, required, fullWidth: initFullWidth, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, 
// -------------------------------------------------------------------------------------------------------------------
icon, format = 'YYYY년', labelShrink: initLabelShrink, disablePast, disableFuture, minYear = 2020, maxYear = 2050, inputWidth, enableKeyboardInput, startAdornment, endAdornment, formValueFromNameSuffix = '_from', formValueToNameSuffix = '_to', align, 
//----------------------------------------------------------------------------------------------------------------
className, style: initStyle, sx, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, labelShrink: formLabelShrink, fullWidth: formFullWidth, disabled: formDisabled, formColWithHelperText, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    const focused = compare.ifUndefined(initFocused, formFocused);
    const labelShrink = compare.ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = compare.ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const startInputRef = React.useRef(undefined);
    const endInputRef = React.useRef(undefined);
    const startInputDatePickerErrorRef = React.useRef(null);
    const endInputDatePickerErrorRef = React.useRef(null);
    const openValueRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [fromError, setFromError] = React.useState(false);
    const [fromErrorHelperText, setFromErrorHelperText] = React.useState();
    const [toError, setToError] = React.useState(false);
    const [toErrorHelperText, setToErrorHelperText] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [selectType, setSelectType] = React.useState('start');
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const setFromErrorErrorHelperText = React.useCallback((error, fromErrorHelperText) => {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    const setToErrorErrorHelperText = React.useCallback((error, toErrorHelperText) => {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    const validate = React.useCallback(function (value) {
        if (required && (value[0] == null || value[1] == null)) {
            if (value[0] == null && value[1] == null) {
                setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else if (value[0] == null) {
                setFromErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setToErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        if (startInputDatePickerErrorRef.current) {
            setFromErrorErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
            if (endInputDatePickerErrorRef.current) {
                setToErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
            }
            return false;
        }
        if (endInputDatePickerErrorRef.current) {
            setToErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        setFromErrorErrorHelperText(false, undefined);
        setToErrorErrorHelperText(false, undefined);
        return true;
    }, [onValidate, required, setToErrorErrorHelperText, setErrorErrorHelperText, setFromErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error || fromError || toError)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, fromError, name, onChange, onValueChange, toError, validate]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const dateInfo = React.useMemo(() => {
        const nowYear = new Date().getFullYear();
        const minDate = valueToDate(minYear);
        const maxDate = valueToDate(maxYear);
        return { nowYear: nowYear, min: minDate, max: maxDate };
    }, [maxYear, minYear]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(() => {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                let runOnRequestSearchSubmit;
                if (openValueRef.current && value) {
                    runOnRequestSearchSubmit = openValueRef.current !== value;
                }
                else {
                    runOnRequestSearchSubmit = true;
                }
                if (runOnRequestSearchSubmit) {
                    onRequestSearchSubmit(name, value);
                }
            }
        }
    }, [open]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormYearRangePicker',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        getFromValue: () => valueRef.current[0],
        setFromValue: (value) => updateValue([value, valueRef.current[1]]),
        getToValue: () => valueRef.current[1],
        setToValue: (value) => updateValue([valueRef.current[0], value]),
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
        getFormValueFromNameSuffix: () => formValueFromNameSuffix,
        getFormValueToNameSuffix: () => formValueToNameSuffix,
        getFormValueFromName: () => {
            return `${name}${formValueFromNameSuffix}`;
        },
        getFormValueToName: () => {
            return `${name}${formValueToNameSuffix}`;
        },
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueFromNameSuffix,
        formValueToNameSuffix,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleContainerChange = React.useCallback((newValue, selectType) => {
        updateValue(newValue);
        if (selectType === 'start') {
            setTimeout(() => {
                var _a;
                setSelectType('end');
                (_a = endInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
        else if (selectType === 'end') {
            setOpen(false);
        }
        setTimeout(() => {
            onValueChangeByUser(name, newValue);
        });
    }, [updateValue, name, onValueChangeByUser]);
    const handleInputDatePickerChange = React.useCallback((selectType, date) => {
        if (date == null || date.isValid()) {
            if (selectType === 'start') {
                const newValue = [date ? dateToValue(date) : null, valueRef.current[1]];
                if (newValue[0] !== null && newValue[0] >= minYear && newValue[0] <= maxYear) {
                    if (newValue[1] !== null && newValue[1] < newValue[0]) {
                        newValue[1] = newValue[0];
                    }
                }
                if (fromError) {
                    validate(newValue);
                }
                setTimeout(() => {
                    onValueChangeByUser(name, newValue);
                });
                updateValue(newValue);
            }
            else {
                const newValue = [valueRef.current[0], date ? dateToValue(date) : null];
                if (newValue[1] !== null && newValue[1] >= minYear && newValue[1] <= maxYear) {
                    if (newValue[0] !== null && newValue[0] > newValue[1]) {
                        newValue[0] = newValue[1];
                    }
                }
                if (toError) {
                    validate(newValue);
                }
                setTimeout(() => {
                    onValueChangeByUser(name, newValue);
                });
                updateValue(newValue);
            }
        }
    }, [valueRef, minYear, maxYear, fromError, updateValue, validate, onValueChangeByUser, name, toError]);
    const handleInputDatePickerFocus = React.useCallback((selectType) => {
        var _a;
        if (readOnly || disabled)
            return;
        if (selectType === 'end' && valueRef.current[0] == null) {
            (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            setSelectType(selectType);
            setOpen(true);
        }
    }, [readOnly, disabled, valueRef]);
    const handleInputDatePickerShouldDisableYear = React.useCallback((year) => {
        return (!!disablePast && year.year() < dateInfo.nowYear) || (!!disableFuture && year.year() > dateInfo.nowYear);
    }, [disableFuture, disablePast, dateInfo.nowYear]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    const valueDate = [
        !!value && !!value[0] ? valueToDate(value[0]) : null,
        !!value && !!value[1] ? valueToDate(value[1]) : null,
    ];
    const privateInputDatePickerProps = {
        variant,
        size,
        color,
        focused,
        labelShrink,
        fullWidth,
        align,
        disabled,
        format,
        minDate: dateInfo.min,
        maxDate: dateInfo.max,
        style: inputWidth != null ? Object.assign({ width: inputWidth }, initStyle) : Object.assign({ width: fullWidth ? undefined : 150 }, initStyle),
        sx,
        required,
        readOnly,
        enableKeyboardInput,
        icon,
        startAdornment,
        endAdornment,
    };
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: () => setOpen(false) },
            React.createElement("div", { className: classNames(className, 'PFormYearRangePicker'), style: {
                    display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                } },
                React.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && errorHelperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(PrivateYearRangePicker, { selectType: selectType, minYear: minYear, maxYear: maxYear, disablePast: disablePast, disableFuture: disableFuture, value: value, onChange: handleContainerChange })) },
                    React.createElement(material.Grid, { container: true, alignItems: 'center' },
                        React.createElement(material.Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, Object.assign({}, privateInputDatePickerProps, { inputRef: startInputRef, value: valueDate[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || (open && selectType === 'start'), onChange: (v) => handleInputDatePickerChange('start', v), onFocus: () => handleInputDatePickerFocus('start'), onError: (reason) => (startInputDatePickerErrorRef.current = reason), shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                        React.createElement(material.Grid, { sx: { px: 1 } }, "~"),
                        React.createElement(material.Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, Object.assign({}, privateInputDatePickerProps, { inputRef: endInputRef, value: valueDate[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || (open && selectType === 'end'), onChange: (v) => handleInputDatePickerChange('end', v), onFocus: () => handleInputDatePickerFocus('end'), onError: (reason) => (endInputDatePickerErrorRef.current = reason), shouldDisableYear: handleInputDatePickerShouldDisableYear }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(material.FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
PFormYearRangePicker.displayName = 'PFormYearRangePicker';const PFormSwitch = React.forwardRef(({ variant: initVariant, size: initSize, color: initColor, focused: initFocused, 
//----------------------------------------------------------------------------------------------------------------
hidden: initHidden, 
//----------------------------------------------------------------------------------------------------------------
name, labelIcon, label, readOnly, disabled: initDisabled, error: initError, helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, onValue, 
//----------------------------------------------------------------------------------------------------------------
switchLabel, 
//----------------------------------------------------------------------------------------------------------------
className, style, sx, }, ref) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    const id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    const { variant: formVariant, size: formSize, color: formColor, focused: formFocused, disabled: formDisabled, onAddValueItem, onRemoveValueItem, onValueChange, onValueChangeByUser, onRequestSearchSubmit, } = useFormState();
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    const variant = compare.ifUndefined(initVariant, formVariant);
    const size = compare.ifUndefined(initSize, formSize);
    const color = compare.ifUndefined(initColor, formColor);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    const [focused, setFocused] = reactHook.useAutoUpdateState(initFocused == null ? formFocused : initFocused);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    const inputRef = React.useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [error, setError] = reactHook.useAutoUpdateState(initError);
    const [errorHelperText, setErrorHelperText] = React.useState();
    const [dataRef, , setData] = reactHook.useAutoUpdateRefState(initData);
    const [disabledRef, disabled, setDisabled] = reactHook.useAutoUpdateRefState(React.useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled]));
    const [hiddenRef, hidden, setHidden] = reactHook.useAutoUpdateRefState(initHidden);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    const validate = React.useCallback(function (value) {
        if (onValidate) {
            const onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    const getFinalValue = React.useCallback((value) => {
        const finalValue = value || false;
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    const [valueRef, value, _setValue] = reactHook.useAutoUpdateRefState(initValue, getFinalValue);
    const updateValue = React.useCallback((newValue) => {
        const finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(() => {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    const commands = React.useMemo(() => ({
        getType: () => 'PFormSwitch',
        getName: () => name,
        getReset: () => getFinalValue(initValue),
        reset: () => updateValue(initValue),
        getValue: () => valueRef.current,
        setValue: updateValue,
        getData: () => dataRef.current,
        setData,
        isExceptValue: () => !!exceptValue,
        isDisabled: () => !!disabledRef.current,
        setDisabled,
        isHidden: () => !!hiddenRef.current,
        setHidden,
        focus,
        focusValidate: focus,
        validate: () => validate(valueRef.current),
        setError: (error, errorHelperText) => setErrorErrorHelperText(error, error ? errorHelperText : undefined),
    }), [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        initValue,
        name,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        updateValue,
        validate,
        valueRef,
    ]);
    reactHook.useForwardLayoutRef(ref, commands, React.useCallback((commands) => onAddValueItem(id, commands), [id, onAddValueItem]), React.useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleChange = React.useCallback((e, checked) => {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            const finalValue = updateValue(checked);
            setTimeout(() => {
                onValueChangeByUser(name, finalValue);
                onRequestSearchSubmit(name, finalValue);
            });
        }
    }, [readOnly, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const switchControl = React.useMemo(() => (React.createElement(material.Switch, { size: size, name: name, checked: value, color: color, disabled: disabled, onChange: handleChange, onFocus: () => setFocused(initFocused || true), onBlur: () => setFocused(initFocused || false) })), [color, disabled, handleChange, initFocused, name, setFocused, size, value]);
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormSwitch'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: size === 'small' ? 24 : 38, controlVerticalCenter: true, control: switchLabel ? (React.createElement(material.FormControlLabel, { control: switchControl, label: switchLabel, disabled: disabled })) : (switchControl) }));
});
PFormSwitch.displayName = 'PFormSwitch';const PSearchGroupRow = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement(PFormRow, Object.assign({ className: classNames(className, 'PSearchGroupRow') }, props),
        React.createElement(PFormCol, null,
            React.createElement(material.Grid, { container: true, spacing: 1, alignItems: 'center', flex: 1 }, children))));
};const PSearch = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var { children, className, style, sx, 
    //----------------------------------------------------------------------------------------------------------------
    color = 'primary', spacing, focused, labelShrink, autoSubmit } = _a, otherProps = __rest(_a, ["children", "className", "style", "sx", "color", "spacing", "focused", "labelShrink", "autoSubmit"]);
    const formRef = React.useRef(undefined);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(() => {
        var _a;
        if (autoSubmit) {
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const renderChildren = React.useMemo(() => {
        const rowItems = [];
        const basicRowItems = [];
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type.toString() === PSearchGroupRow.toString()) {
                    rowItems.push(child);
                }
                else {
                    basicRowItems.push(child);
                }
            }
        });
        if (basicRowItems.length > 0) {
            return [React.createElement(PSearchGroupRow, { key: '$basicRow$' }, basicRowItems), ...rowItems];
        }
        else {
            return rowItems;
        }
    }, [children]);
    /********************************************************************************************************************
     * FormContextValue
     * ******************************************************************************************************************/
    const formContextValue = React.useMemo(() => ({
        id: 'search',
        variant: 'outlined',
        size: 'small',
        color,
        spacing,
        focused,
        labelShrink,
        fullWidth: false,
        onAddValueItem() { },
        onRemoveValueItem() { },
        onValueChange() { },
        onValueChangeByUser() { },
        onRequestSubmit() {
            var _a;
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
        },
        onRequestSearchSubmit() {
            var _a;
            if (autoSubmit) {
                (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
            }
        },
    }), [autoSubmit, color, focused, labelShrink, spacing]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleRef = React.useCallback((commands) => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        formRef.current = commands || undefined;
    }, [ref]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: formContextValue },
        React.createElement(material.Paper, { variant: 'outlined', className: className, sx: Object.assign({ p: 1.5 }, sx), style: style },
            React.createElement(PForm, Object.assign({ ref: handleRef, className: 'PSearch', variant: 'outlined', size: 'small', color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: false }, otherProps),
                React.createElement(PFormBody, null, renderChildren)))));
});const StyledItem = material.styled(material.Grid) `
  &:has(> [style*='display: none;']) {
    display: none;
  }
`;const isReactFragment = (child) => {
    try {
        return child.type.toString() === React.Fragment.toString();
    }
    catch (_a) {
        return false;
    }
};
const removeReactFragment = (el, key) => {
    if (isReactFragment(el)) {
        const children = el.props.children;
        if (children) {
            if (Array.isArray(children)) {
                return children.map((child, idx) => {
                    if (React.isValidElement(child)) {
                        return removeReactFragment(child, idx);
                    }
                    else {
                        return React.createElement(material.Grid, { key: idx }, child);
                    }
                });
            }
            else {
                return (React.createElement(StyledItem, { key: key, style: { display: el.type === PFormHidden ? 'none' : undefined } }, el));
            }
        }
        else {
            return (React.createElement(StyledItem, { key: key, style: { display: el.type === PFormHidden ? 'none' : undefined } }, el));
        }
    }
    else {
        return (React.createElement(StyledItem, { key: key, style: { display: el.type === PFormHidden ? 'none' : undefined } }, el));
    }
};
const PSearchGroup = ({ children, className, style, sx, 
//--------------------------------------------------------------------------------------------------------------------
max, align, hidden, spacing = 1, }) => {
    return (React.createElement(material.Grid, { className: classNames(className, 'PSearchGroup'), style: { flex: max ? 1 : undefined, display: hidden ? 'none' : undefined } },
        React.createElement(material.Grid, { container: true, wrap: 'wrap', spacing: spacing, justifyContent: align === undefined || align === 'left' ? 'start' : align === 'center' ? 'center' : 'end', alignItems: 'start', style: style, sx: sx }, React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return removeReactFragment(child);
            }
            else {
                return child;
            }
        }))));
};const PSearchButton = (_a) => {
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var { children, className, size, sx: initSx } = _a, props = __rest(_a, ["children", "className", "size", "sx"]);
    return (React.createElement(reactComponent.PButton, Object.assign({ className: classNames(className, 'PSearchButton'), size: compare.ifUndefined(size, 'medium'), sx: Object.assign({ minWidth: 0, px: `${!children ? 9 : 13}px !important` }, initSx), fullWidth: false }, props), children));
};
var PSearchButton$1 = React.memo(PSearchButton);const PSearchMenuButton = (_a) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var { children, className, sx: initSx, menuList, placement } = _a, props = __rest(_a, ["children", "className", "sx", "menuList", "placement"]);
    const buttonId = React.useId();
    const menuId = React.useId();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [endIcon, setEndIcon] = React.useState('ArrowDropDown');
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleClick = React.useCallback((e) => {
        setAnchorEl(e.currentTarget);
        setEndIcon('ArrowDropUp');
    }, []);
    const handleClose = React.useCallback(() => {
        setAnchorEl(null);
        setEndIcon('ArrowDropDown');
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const open = !!anchorEl;
    const anchorOrigin = { vertical: 'bottom', horizontal: 'center' }
        ;
    const transformOrigin = { vertical: 'top', horizontal: 'center' }
        ;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(PFormButton$1, Object.assign({ className: classNames(className, 'PSearchMenuButton'), size: 'medium', sx: Object.assign({ minWidth: 0, px: `${!children ? 9 : 13}px !important` }, initSx), fullWidth: false }, props, { id: buttonId, "aria-controls": open ? menuId : undefined, "aria-haspopup": 'true', "aria-expanded": open ? 'true' : undefined, endIcon: endIcon, endIconProps: { style: { marginRight: -5 } }, onClick: handleClick }), children),
        React.createElement(material.Menu, { id: menuId, "aria-labelledby": buttonId, anchorEl: anchorEl, open: open, onClose: handleClose, onClick: handleClose, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin }, menuList)));
};const PHashSearch = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var { className, noAutoSubmit, onSubmit, onRequestHashChange } = _a, props = __rest(_a, ["className", "noAutoSubmit", "onSubmit", "onRequestHashChange"]);
    const searchRef = React.useRef(null);
    const initPathRef = React.useRef(window.location.pathname);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [isFirstSearchSubmit, setIsFirstSearchSubmit] = React.useState(true);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const deHash = React.useCallback(() => {
        const values = {};
        const hash = window.location.hash.substring(1);
        hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
            values[decodeURIComponent(key)] = decodeURIComponent(value);
            return substring;
        });
        return values;
    }, []);
    const hashToSearchValue = React.useCallback(() => {
        const commands = searchRef.current;
        if (commands) {
            commands.resetAll();
            const hashValues = deHash();
            Object.keys(hashValues).forEach((name) => {
                var _a, _b;
                const value = hashValues[name];
                const itemCommands = commands.getItem(name);
                if (itemCommands) {
                    switch (itemCommands.getType()) {
                        case 'PFormCheckbox':
                            if (compare.notEmpty(value)) {
                                const checkCommands = itemCommands;
                                if (value.toString() === ((_a = itemCommands.getValue()) === null || _a === void 0 ? void 0 : _a.toString())) {
                                    checkCommands.setChecked(true);
                                }
                                else if (value.toString() === ((_b = checkCommands.getUncheckedValue()) === null || _b === void 0 ? void 0 : _b.toString())) {
                                    checkCommands.setChecked(false);
                                }
                            }
                            break;
                        case 'PFormDatePicker':
                        case 'PFormDateTimePicker':
                        case 'PFormTimePicker':
                            {
                                if (compare.notEmpty(value)) {
                                    const dateCommands = itemCommands;
                                    const format = dateCommands.getFormValueFormat();
                                    const itemValue = dayjs(value, format);
                                    itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                                }
                                else {
                                    itemCommands.setValue(null);
                                }
                            }
                            break;
                        case 'PFormDateRangePicker':
                            {
                                const dateRangePickerCommands = itemCommands;
                                const fromName = dateRangePickerCommands.getFormValueFromName();
                                const toName = dateRangePickerCommands.getFormValueToName();
                                const format = dateRangePickerCommands.getFormValueFormat();
                                if (name === fromName) {
                                    if (compare.notEmpty(value)) {
                                        const startValue = dayjs(value, format);
                                        dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                                    }
                                    else {
                                        dateRangePickerCommands.setFromValue(null);
                                    }
                                }
                                else if (name === toName) {
                                    if (compare.notEmpty(value)) {
                                        const endValue = dayjs(value, format);
                                        dateRangePickerCommands.setToValue(endValue.isValid() ? endValue : null);
                                    }
                                    else {
                                        dateRangePickerCommands.setToValue(null);
                                    }
                                }
                            }
                            break;
                        case 'PFormYearRangePicker':
                            {
                                const dateRangePickerCommands = itemCommands;
                                const fromName = dateRangePickerCommands.getFormValueFromName();
                                const toName = dateRangePickerCommands.getFormValueToName();
                                if (name === fromName) {
                                    dateRangePickerCommands.setFromValue(compare.notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === toName) {
                                    dateRangePickerCommands.setToValue(compare.notEmpty(value) ? Number(value) : null);
                                }
                            }
                            break;
                        case 'PFormMonthPicker':
                            {
                                const monthCommands = itemCommands;
                                const yearName = monthCommands.getFormValueYearName();
                                const monthName = monthCommands.getFormValueMonthName();
                                if (name === yearName) {
                                    monthCommands.setYear(compare.notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === monthName) {
                                    monthCommands.setMonth(compare.notEmpty(value) ? Number(value) : null);
                                }
                            }
                            break;
                        case 'PFormMonthRangePicker':
                            {
                                const monthRangeCommands = itemCommands;
                                const fromYearName = monthRangeCommands.getFormValueFromYearName();
                                const fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                                const toYearName = monthRangeCommands.getFormValueToYearName();
                                const toMonthName = monthRangeCommands.getFormValueToMonthName();
                                if (name === fromYearName) {
                                    monthRangeCommands.setFromYear(compare.notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === fromMonthName) {
                                    monthRangeCommands.setFromMonth(compare.notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === toYearName) {
                                    monthRangeCommands.setToYear(compare.notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === toMonthName) {
                                    monthRangeCommands.setToMonth(compare.notEmpty(value) ? Number(value) : null);
                                }
                            }
                            break;
                        default:
                            commands.setValue(name, value);
                            break;
                    }
                }
            });
            return commands.getAllFormValue();
        }
    }, [deHash]);
    /********************************************************************************************************************
     * hash
     * ******************************************************************************************************************/
    React.useEffect(() => {
        if (window.location.pathname === initPathRef.current) {
            const data = hashToSearchValue();
            if (data)
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);
    const hashChange = React.useCallback((params) => {
        if (onRequestHashChange) {
            const hashes = [];
            Object.keys(params).forEach((name) => {
                const value = params[name];
                if (searchRef.current) {
                    const itemCommands = searchRef.current.getItem(name);
                    if (itemCommands) {
                        let resetValue = null;
                        switch (itemCommands.getType()) {
                            case 'PFormDateRangePicker':
                            case 'PFormYearRangePicker':
                                {
                                    const commands = itemCommands;
                                    const itemName = itemCommands.getName();
                                    const fromName = commands.getFormValueFromName();
                                    const fromSuffix = commands.getFormValueFromNameSuffix();
                                    const toName = commands.getFormValueToName();
                                    const toSuffix = commands.getFormValueToNameSuffix();
                                    if (name === fromName) {
                                        resetValue = searchRef.current.getFormReset(itemName, fromSuffix);
                                    }
                                    else if (name === toName) {
                                        resetValue = searchRef.current.getFormReset(itemName, toSuffix);
                                    }
                                }
                                break;
                            case 'PFormMonthPicker':
                                {
                                    const commands = itemCommands;
                                    const itemName = commands.getName();
                                    const yearName = commands.getFormValueYearName();
                                    const yearSuffix = commands.getFormValueYearNameSuffix();
                                    const monthName = commands.getFormValueMonthName();
                                    const monthSuffix = commands.getFormValueMonthNameSuffix();
                                    if (name === yearName) {
                                        resetValue = searchRef.current.getFormReset(itemName, yearSuffix);
                                    }
                                    else if (name === monthName) {
                                        resetValue = searchRef.current.getFormReset(itemName, monthSuffix);
                                    }
                                }
                                break;
                            case 'PFormMonthRangePicker':
                                {
                                    const commands = itemCommands;
                                    const itemName = commands.getName();
                                    const fromYearName = commands.getFormValueFromYearName();
                                    const fromYearSuffix = commands.getFormValueFromYearNameSuffix();
                                    const fromMonthName = commands.getFormValueFromMonthName();
                                    const fromMonthSuffix = commands.getFormValueFromMonthNameSuffix();
                                    const toYearName = commands.getFormValueToYearName();
                                    const toYearSuffix = commands.getFormValueToYearNameSuffix();
                                    const toMonthName = commands.getFormValueToMonthName();
                                    const toMonthSuffix = commands.getFormValueToMonthNameSuffix();
                                    if (name === fromYearName) {
                                        resetValue = searchRef.current.getFormReset(itemName, fromYearSuffix);
                                    }
                                    else if (name === fromMonthName) {
                                        resetValue = searchRef.current.getFormReset(itemName, fromMonthSuffix);
                                    }
                                    else if (name === toYearName) {
                                        resetValue = searchRef.current.getFormReset(itemName, toYearSuffix);
                                    }
                                    else if (name === toMonthName) {
                                        resetValue = searchRef.current.getFormReset(itemName, toMonthSuffix);
                                    }
                                }
                                break;
                            default:
                                resetValue = searchRef.current.getFormReset(name);
                                break;
                        }
                        if (resetValue != null && !compare.equal(resetValue, value) && typeof value !== 'object') {
                            hashes.push(`${name}=${encodeURIComponent(value)}`);
                        }
                    }
                }
            });
            const finalHash = hashes.join('&');
            if (window.location.hash.substring(1) === finalHash) {
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(params);
            }
            else {
                onRequestHashChange(hashes.join('&'));
            }
        }
    }, [onRequestHashChange, onSubmit]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    const handleSubmit = React.useCallback((data) => {
        if (isFirstSearchSubmit) {
            setIsFirstSearchSubmit(false);
        }
        else {
            hashChange(data);
        }
    }, [hashChange, isFirstSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PSearch, Object.assign({ ref: (r) => {
            searchRef.current = r;
            if (ref) {
                if (typeof ref === 'function') {
                    ref(r);
                }
                else {
                    ref.current = r;
                }
            }
        }, className: classNames('PHashSearch', className) }, props, { autoSubmit: !noAutoSubmit, onSubmit: handleSubmit })));
});exports.PForm=PForm;exports.PFormAutocomplete=PFormAutocomplete;exports.PFormBlock=PFormBlock;exports.PFormBody=PFormBody;exports.PFormBusinessNo=PFormBusinessNo;exports.PFormButton=PFormButton$1;exports.PFormCheckbox=PFormCheckbox;exports.PFormCol=PFormCol;exports.PFormContext=PFormContext;exports.PFormContextDefaultValue=PFormContextDefaultValue;exports.PFormContextProvider=PFormContextProvider;exports.PFormDatePicker=PFormDatePicker;exports.PFormDateRangePicker=PFormDateRangePicker;exports.PFormDateTimePicker=PFormDateTimePicker;exports.PFormDivider=PFormDivider;exports.PFormEmail=PFormEmail;exports.PFormFile=PFormFile;exports.PFormFooter=PFormFooter;exports.PFormHidden=PFormHidden;exports.PFormImageFile=PFormImageFile;exports.PFormLabel=PFormLabel$1;exports.PFormMobile=PFormMobile;exports.PFormMonthPicker=PFormMonthPicker;exports.PFormMonthRangePicker=PFormMonthRangePicker;exports.PFormNumber=PFormNumber;exports.PFormPassword=PFormPassword;exports.PFormPersonalNo=PFormPersonalNo;exports.PFormRadioGroup=PFormRadioGroup;exports.PFormRating=PFormRating;exports.PFormRow=PFormRow;exports.PFormSearch=PFormSearch;exports.PFormSelect=PFormSelect;exports.PFormSwitch=PFormSwitch;exports.PFormTag=PFormTag;exports.PFormTel=PFormTel;exports.PFormText=PFormText;exports.PFormTextEditor=PFormTextEditor;exports.PFormTextField=PFormTextField;exports.PFormTextarea=PFormTextarea;exports.PFormTimePicker=PFormTimePicker;exports.PFormToggleButtonGroup=PFormToggleButtonGroup;exports.PFormUrl=PFormUrl;exports.PFormYearPicker=PFormYearPicker;exports.PFormYearRangePicker=PFormYearRangePicker;exports.PHashSearch=PHashSearch;exports.PSearch=PSearch;exports.PSearchButton=PSearchButton$1;exports.PSearchGroup=PSearchGroup;exports.PSearchGroupRow=PSearchGroupRow;exports.PSearchMenuButton=PSearchMenuButton;exports.useFormState=useFormState;