'use strict';var React=require('react'),classNames=require('classnames'),material=require('@mui/material'),util=require('@pdg/util'),dayjs=require('dayjs'),reactComponent=require('@pdg/react-component'),reactHook=require('@pdg/react-hook'),reactResizeDetector=require('react-resize-detector'),reactNumberFormat=require('react-number-format'),iconsMaterial=require('@mui/icons-material'),tinymceReact=require('@tinymce/tinymce-react'),AdapterDayjs=require('@mui/x-date-pickers/AdapterDayjs'),xDatePickers=require('@mui/x-date-pickers'),SimpleBar=require('simplebar-react');require('dayjs/locale/ko');function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$m = ".simplebar-track.simplebar-vertical {\n  width: 8px !important;\n}\n.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before {\n  opacity: 0.3 !important;\n}";
styleInject(css_248z$m);/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var FormDefaultProps = {
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    spacing: 2,
    formColGap: 1.5,
    fullWidth: true,
    fullHeight: false,
};var FormContextDefaultValue = {
    id: 'init',
    variant: FormDefaultProps.variant,
    size: FormDefaultProps.size,
    color: FormDefaultProps.color,
    spacing: FormDefaultProps.spacing,
    formColGap: FormDefaultProps.formColGap,
    focused: false,
    labelShrink: false,
    // eslint-disable-next-line
    onAddValueItem: function () { },
    // eslint-disable-next-line
    onRemoveValueItem: function () { },
    // eslint-disable-next-line
    onValueChange: function () { },
    // eslint-disable-next-line
    onValueChangeByUser: function () { },
    // eslint-disable-next-line
    onRequestSearchSubmit: function () { },
};var FormContext = React.createContext(FormContextDefaultValue);function useFormState() {
    var value = React.useContext(FormContext);
    if (value === undefined) {
        throw new Error('useFormState should be used within FormContext.Provider');
    }
    return value;
}var FormContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(FormContext.Provider, { value: value }, children);
};var Form = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, children = _a.children, initStyle = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFormColGap = _a.formColGap, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, fullHeight = _a.fullHeight, disabled = _a.disabled, 
    //----------------------------------------------------------------------------------------------------------------
    onSubmit = _a.onSubmit, onInvalid = _a.onInvalid, onValueChange = _a.onValueChange, onValueChangeByUser = _a.onValueChangeByUser;
    var _b = useFormState(), formId = _b.id, formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFormColGap = _b.formColGap, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formAddValueItem = _b.onAddValueItem, formRemoveValueItem = _b.onRemoveValueItem, formValueChange = _b.onValueChange, formValueChangeByUser = _b.onValueChangeByUser, otherFormState = __rest(_b, ["id", "variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "onAddValueItem", "onRemoveValueItem", "onValueChange", "onValueChangeByUser"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = React.useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var formColGap = React.useMemo(function () { return (initFormColGap == null ? formFormColGap : initFormColGap); }, [initFormColGap, formFormColGap]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var formRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var valueItems = React.useState({})[0];
    /********************************************************************************************************************
     * Function - getItemFormValue
     * ******************************************************************************************************************/
    var getItemFormValue = React.useCallback(function (commands, reset) {
        var type = commands.getType();
        var value;
        switch (type) {
            case 'FormCheckbox':
                {
                    var itemCommands = commands;
                    var checked = reset ? itemCommands.getReset() : itemCommands.getChecked();
                    value = checked ? itemCommands.getValue() : itemCommands.getUncheckedValue();
                }
                break;
            case 'FormDatePicker':
            case 'FormDateTimePicker':
            case 'FormTimePicker':
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
            case 'FormDateRangePicker':
                {
                    var startValue = value[0];
                    var endValue = value[1];
                    var format = commands.getFormValueFormat();
                    value = [startValue ? startValue.format(format) : '', endValue ? endValue.format(format) : ''];
                }
                break;
            case 'FormYearRangePicker':
                {
                    var startValue = value[0];
                    var endValue = value[1];
                    value = [startValue ? startValue : '', endValue ? endValue : ''];
                }
                break;
            case 'FormMonthPicker':
                value = { year: value ? value.year : '', month: value ? value.month : '' };
                break;
            case 'FormMonthRangePicker':
                {
                    var startValue = value[0];
                    var endValue = value[1];
                    value = [
                        startValue ? startValue : { year: '', month: '' },
                        endValue ? endValue : { year: '', month: '' },
                    ];
                }
                break;
            default:
                if (util.empty(value)) {
                    value = '';
                }
                else if (Array.isArray(value)) {
                    if (commands.isFormValueSort && commands.isFormValueSort()) {
                        value = __spreadArray([], value, true);
                        value.sort();
                    }
                    value = value.join(commands.getFormValueSeparator ? commands.getFormValueSeparator() : ',');
                }
                break;
        }
        return value;
    }, []);
    /********************************************************************************************************************
     * Function - resetAll
     * ******************************************************************************************************************/
    var resetAll = React.useCallback(function () {
        Object.keys(valueItems).forEach(function (id) {
            var _a;
            (_a = valueItems[id]) === null || _a === void 0 ? void 0 : _a.reset();
        });
    }, [valueItems]);
    var appendFormValueData = React.useCallback(function (data, itemCommands) {
        switch (itemCommands.getType()) {
            case 'FormDateRangePicker':
                {
                    var commands = itemCommands;
                    var value = getItemFormValue(itemCommands);
                    data[commands.getFormValueFromName()] = value[0];
                    data[commands.getFormValueToName()] = value[1];
                }
                break;
            case 'FormMonthPicker':
                {
                    var commands = itemCommands;
                    var value = getItemFormValue(itemCommands);
                    data[commands.getFormValueYearName()] = value.year;
                    data[commands.getFormValueMonthName()] = value.month;
                }
                break;
            case 'FormYearRangePicker':
                {
                    var commands = itemCommands;
                    var value = getItemFormValue(itemCommands);
                    data[commands.getFormValueFromName()] = value[0];
                    data[commands.getFormValueToName()] = value[1];
                }
                break;
            case 'FormMonthRangePicker':
                {
                    var commands = itemCommands;
                    var value = getItemFormValue(itemCommands);
                    data[commands.getFormValueFromYearName()] = value[0].year;
                    data[commands.getFormValueFromMonthName()] = value[0].month;
                    data[commands.getFormValueToYearName()] = value[1].year;
                    data[commands.getFormValueToMonthName()] = value[1].month;
                }
                break;
            default:
                {
                    var name_1 = itemCommands.getName();
                    var value = getItemFormValue(itemCommands);
                    data[name_1] = value == null ? '' : value;
                }
                break;
        }
    }, [getItemFormValue]);
    var getAllFormValue = React.useCallback(function () {
        var data = {};
        Object.keys(valueItems).forEach(function (id) {
            var itemCommands = valueItems[id];
            if (itemCommands) {
                if (!itemCommands.isDisabled() && !itemCommands.isExceptValue()) {
                    appendFormValueData(data, itemCommands);
                }
            }
        });
        return data;
    }, [valueItems, appendFormValueData]);
    /********************************************************************************************************************
     * Function - submit
     * ******************************************************************************************************************/
    var submit = React.useCallback(function () {
        var isAllValid = true;
        var firstInvalidItemId;
        var data = {};
        var invalidItems = [];
        Object.keys(valueItems).forEach(function (id) {
            var itemCommands = valueItems[id];
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
            onSubmit && onSubmit(data);
        }
        else {
            onInvalid && onInvalid(invalidItems);
            util.nextTick(function () {
                var _a;
                (_a = valueItems[firstInvalidItemId]) === null || _a === void 0 ? void 0 : _a.focusValidate();
            });
        }
    }, [valueItems, appendFormValueData, onSubmit, onInvalid]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref) {
            var findValueItem_1 = function (name) {
                return Object.values(valueItems).find(function (commands) {
                    if (commands) {
                        if (commands.getName() === name) {
                            return true;
                        }
                        switch (commands.getType()) {
                            case 'FormDateRangePicker':
                            case 'FormYearRangePicker':
                                return (name === commands.getFormValueFromName() ||
                                    name === commands.getFormValueToName());
                            case 'FormMonthPicker':
                                return (name === commands.getFormValueYearName() ||
                                    name === commands.getFormValueMonthName());
                            case 'FormMonthRangePicker':
                                return (name === commands.getFormValueFromYearName() ||
                                    name === commands.getFormValueFromMonthName() ||
                                    name === commands.getFormValueToYearName() ||
                                    name === commands.getFormValueToMonthName());
                        }
                    }
                });
            };
            var getFormValue_1 = function (name, subKey, isReset) {
                var valueItem = findValueItem_1(name);
                if (valueItem) {
                    switch (valueItem.getType()) {
                        case 'FormDateRangePicker':
                        case 'FormYearRangePicker': {
                            var commands_1 = valueItem;
                            var value = getItemFormValue(valueItem, !!isReset);
                            if (util.notEmpty(subKey)) {
                                if (subKey === commands_1.getFormValueFromNameSuffix()) {
                                    return value[0];
                                }
                                else if (subKey === commands_1.getFormValueToNameSuffix()) {
                                    return value[1];
                                }
                                else {
                                    throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
                                }
                            }
                            else {
                                throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
                            }
                        }
                        case 'FormMonthPicker': {
                            var commands_2 = valueItem;
                            var value = getItemFormValue(valueItem, !!isReset);
                            if (util.notEmpty(subKey)) {
                                if (subKey === commands_2.getFormValueYearNameSuffix()) {
                                    return value.year;
                                }
                                else if (subKey === commands_2.getFormValueMonthNameSuffix()) {
                                    return value.month;
                                }
                                else {
                                    throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
                                }
                            }
                            else {
                                throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
                            }
                        }
                        case 'FormMonthRangePicker': {
                            var commands_3 = valueItem;
                            var value = getItemFormValue(valueItem, !!isReset);
                            if (util.notEmpty(subKey)) {
                                if (subKey === commands_3.getFormValueFromYearNameSuffix()) {
                                    return value[0].year;
                                }
                                else if (subKey === commands_3.getFormValueFromMonthNameSuffix()) {
                                    return value[0].month;
                                }
                                else if (subKey === commands_3.getFormValueToYearNameSuffix()) {
                                    return value[1].year;
                                }
                                else if (subKey === commands_3.getFormValueToMonthNameSuffix()) {
                                    return value[1].month;
                                }
                                else {
                                    throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
                                }
                            }
                            else {
                                throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
                            }
                        }
                        default:
                            return getItemFormValue(valueItem, !!isReset);
                    }
                }
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            };
            var commands = {
                submit: submit,
                getAllFormValue: getAllFormValue,
                resetAll: resetAll,
                getItem: function (name) {
                    return findValueItem_1(name);
                },
                exists: function (name) {
                    return !!findValueItem_1(name);
                },
                getReset: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        return valueItem.getReset();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                getFormReset: function (name, subKey) {
                    return getFormValue_1(name, subKey, true);
                },
                reset: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        return valueItem.reset();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                getValue: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        return valueItem.getValue();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                getFormValue: function (name, subKey) {
                    return getFormValue_1(name, subKey, false);
                },
                setValue: function (name, value) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        valueItem.setValue(value);
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                isExceptValue: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        return valueItem.isExceptValue();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                isDisabled: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        return valueItem.isDisabled();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                setDisabled: function (name, disabled) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        valueItem.setDisabled(disabled);
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                isHidden: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        return valueItem.isHidden();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                setHidden: function (name, hidden) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        valueItem.setHidden(hidden);
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                focus: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        valueItem.focus();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                validate: function (name) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        return valueItem.validate();
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
                setError: function (name, error, helperText) {
                    var valueItem = findValueItem_1(name);
                    if (valueItem)
                        valueItem.setError(error, helperText);
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
                },
            };
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
            return function () {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            };
        }
    }, [ref, valueItems, submit, resetAll, getAllFormValue, getItemFormValue]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleSubmit = React.useCallback(function (e) {
        e.preventDefault();
        if (!disabled) {
            submit();
        }
    }, [disabled, submit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var style = React.useMemo(function () {
        return fullHeight ? __assign(__assign({}, initStyle), { flex: 1, height: '100%' }) : initStyle;
    }, [initStyle, fullHeight]);
    var contentWrapStyle = React.useMemo(function () { return ({
        display: 'flex',
        flexDirection: 'column',
        height: fullHeight ? '100%' : undefined,
    }); }, [fullHeight]);
    return (React.createElement(FormContextProvider, { value: __assign({ id: formId || 'form', variant: variant, size: size, color: color, spacing: spacing, formColGap: formColGap, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, fullHeight: fullHeight, disabled: disabled, onAddValueItem: function (id, item) {
                valueItems[id] = item;
                if (formAddValueItem)
                    formAddValueItem(id, item);
            }, onRemoveValueItem: function (id) {
                valueItems[id] = undefined;
                if (formRemoveValueItem)
                    formRemoveValueItem(id);
            }, onValueChange: function (name, value) {
                if (onValueChange)
                    onValueChange(name, value);
                if (formValueChange)
                    formValueChange(name, value);
            }, onValueChangeByUser: function (name, value) {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, value);
                if (formValueChangeByUser)
                    formValueChangeByUser(name, value);
            } }, otherFormState) },
        React.createElement(material.Box, { className: classNames('Form', "Form-variant-".concat(variant), fullHeight && 'full-height', className), component: 'form', ref: formRef, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit, style: style, sx: sx },
            React.createElement("div", { style: contentWrapStyle }, children))));
});
Form.displayName = 'Form';
Form.defaultProps = FormDefaultProps;var FormButtonDefaultProps = {
    type: 'button',
};var FormButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initSize = _a.size, initColor = _a.color, initVariant = _a.variant, initFullWidth = _a.fullWidth, className = _a.className, type = _a.type, onClick = _a.onClick, props = __rest(_a, ["size", "color", "variant", "fullWidth", "className", "type", "onClick"]);
    var _b = useFormState(), formSize = _b.size, formColor = _b.color, formFullWidth = _b.fullWidth;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () {
        if (initVariant) {
            return initVariant;
        }
        else {
            switch (type) {
                case 'submit':
                    return 'contained';
                default:
                    return 'outlined';
            }
        }
    }, [initVariant, type]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(reactComponent.PdgButton, __assign({ ref: ref, className: classNames(className, 'FormButton'), type: type, variant: variant, size: size, color: color, fullWidth: fullWidth, onClick: onClick }, props)));
});
FormButton.displayName = 'FormButton';
FormButton.defaultProps = FormButtonDefaultProps;var FormLabelDefaultProps = {};var IconPdgIcon = material.styled(reactComponent.PdgIcon)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"], ["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"])));
var ChildrenSpan = material.styled('span')(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  vertical-align: middle;\n"], ["\n  vertical-align: middle;\n"])));
var templateObject_1$h, templateObject_2$8;var FormLabel = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var children = _a.children, icon = _a.icon, size = _a.size, style = _a.style, error = _a.error, warning = _a.warning, props = __rest(_a, ["children", "icon", "size", "style", "error", "warning"]);
    var theme = material.useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var finalProps = React.useMemo(function () {
        var newStyle = __assign({ height: 20, transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined }, style);
        if (!error) {
            newStyle.color = warning ? theme.palette.warning.main : style === null || style === void 0 ? void 0 : style.color;
        }
        return __assign({ shrink: true, className: 'FormItemBase-InputLabel', size: size === 'medium' ? 'normal' : size, error: error, style: newStyle }, props);
    }, [size, style, warning, error, props, theme.palette.warning.main]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.InputLabel, __assign({ ref: ref }, finalProps), icon ? (React.createElement(React.Fragment, null,
        React.createElement(IconPdgIcon, null, icon),
        React.createElement(ChildrenSpan, null, children))) : (children)));
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabelDefaultProps;var FormBlockDefaultProps = {};var FormDividerDefaultProps = {
    lineVerticalMargin: 9,
};var StyledLineBox = material.styled(material.Box)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"], ["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"])));
var StyledErrorLineBox = material.styled(material.Box)(function (_a) {
    var theme = _a.theme;
    return ({
        borderBottom: "thin solid ".concat(theme.palette.error.main),
        position: 'absolute',
        left: 0,
        top: '50%',
        width: '100%',
        opacity: 0.4,
    });
});
var StyledWarningLineBox = material.styled(material.Box)(function (_a) {
    var theme = _a.theme;
    return ({
        borderBottom: "thin solid ".concat(theme.palette.warning.main),
        position: 'absolute',
        left: 0,
        top: '50%',
        width: '100%',
        opacity: 0.4,
    });
});
var templateObject_1$g;var DEFAULT_LINE_STYLE = { flex: 1, position: 'relative' };
var FormDivider = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initSize = _a.size, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, hidden = _a.hidden, collapse = _a.collapse, collapseIn = _a.collapseIn, error = _a.error, warning = _a.warning, onCollapseChange = _a.onCollapseChange, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var formSize = useFormState().size;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = React.useMemo(function () {
        if (hidden) {
            return __assign(__assign({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [hidden, initStyle]);
    var lineStyle = React.useMemo(function () {
        if (lineVerticalMargin) {
            return __assign(__assign({}, DEFAULT_LINE_STYLE), { marginTop: lineVerticalMargin, marginBottom: lineVerticalMargin });
        }
        else {
            return DEFAULT_LINE_STYLE;
        }
    }, [lineVerticalMargin]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = React.useCallback(function () {
        if (collapse) {
            onCollapseChange && onCollapseChange(!collapseIn);
        }
    }, [collapse, collapseIn, onCollapseChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { ref: ref, item: true, xs: 12, style: style, className: classNames(className, 'FormDivider'), sx: sx },
        React.createElement(material.Box, { sx: {
                display: 'flex',
                py: 1,
                alignItems: 'center',
                justifyItems: 'center',
                padding: 0,
                cursor: collapse ? 'pointer' : undefined,
            }, onClick: handleClick },
            icon && (React.createElement(reactComponent.PdgIcon, { style: { opacity: 0.54, marginRight: 5 }, color: error ? 'error' : warning ? 'warning' : undefined, size: size }, icon)),
            label && (React.createElement(material.Box, { sx: {
                    paddingRight: '10px',
                    color: error ? 'error.main' : warning ? 'warning.main' : 'text.secondary',
                    fontWeight: 700,
                    fontSize: size === 'small' ? '11.5px' : '12px',
                } }, label)),
            (line || collapse) && (React.createElement("div", { style: lineStyle }, error ? React.createElement(StyledErrorLineBox, null) : warning ? React.createElement(StyledWarningLineBox, null) : React.createElement(StyledLineBox, null))),
            collapse && (React.createElement(reactComponent.PdgIcon, { sx: { opacity: 0.6, ml: 1 }, color: error ? 'error' : warning ? 'warning' : undefined }, collapseIn ? 'KeyboardDoubleArrowUp' : 'KeyboardDoubleArrowDown')))));
});
FormDivider.displayName = 'FormDivider.';
FormDivider.defaultProps = FormDividerDefaultProps;var StyledWrapGrid$1 = material.styled(material.Grid)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$f;var FormBlock = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, error = _a.error, warning = _a.warning, 
    //----------------------------------------------------------------------------------------------------------------
    hidden = _a.hidden, collapse = _a.collapse, initCollapseIn = _a.collapseIn, 
    //----------------------------------------------------------------------------------------------------------------
    children = _a.children, className = _a.className, initStyle = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, otherFormState = __rest(_b, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = React.useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initCollapseIn), collapseIn = _c[0], setCollapseIn = _c[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = React.useMemo(function () {
        if (hidden) {
            return __assign(__assign({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [hidden, initStyle]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        setCollapseIn(initCollapseIn);
    }, [initCollapseIn, setCollapseIn]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var Container = React.useMemo(function () {
        return collapse ? material.Collapse : React.Fragment;
    }, [collapse]);
    var containerProps = React.useMemo(function () {
        return collapse ? { in: collapseIn } : undefined;
    }, [collapse, collapseIn]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormContext.Provider, { value: __assign({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth }, otherFormState) },
        React.createElement(material.Grid, { item: true, ref: ref, xs: 12, className: classNames(className, 'FormBlock'), style: style, sx: sx },
            React.createElement(material.Grid, { container: true, spacing: spacing },
                (icon || label || line || collapse) && (React.createElement(FormDivider, { className: 'FormBlock-header', collapse: collapse, collapseIn: collapseIn, size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden, onCollapseChange: collapse ? function (newCollapseIn) { return setCollapseIn(newCollapseIn); } : undefined })),
                React.createElement(StyledWrapGrid$1, { item: true, xs: 12 },
                    React.createElement(Container, __assign({}, containerProps),
                        React.createElement(material.Grid, { container: true, spacing: spacing },
                            React.createElement(StyledWrapGrid$1, { item: true, xs: 12, className: 'FormBlock-body' },
                                React.createElement(material.Grid, { className: 'FormBlock-content', container: true, spacing: spacing }, children)))))))));
});
FormBlock.displayName = 'FormBlock';
FormBlock.defaultProps = FormBlockDefaultProps;var FormRowDefaultProps = {};var StyledWrapGrid = material.styled(material.Grid)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$e;var FormRow = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, 
    //----------------------------------------------------------------------------------------------------------------
    hidden = _a.hidden, error = _a.error, warning = _a.warning, helperText = _a.helperText, 
    //----------------------------------------------------------------------------------------------------------------
    children = _a.children, className = _a.className, initStyle = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, otherFormState = __rest(_b, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = React.useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var formCols = React.useState({})[0];
    var _c = React.useState(12), formColAutoXs = _c[0], setFormColAutoXs = _c[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = React.useMemo(function () {
        var style = __assign({ width: '100%' }, initStyle);
        if (hidden) {
            style.display = 'none';
        }
        return style;
    }, [hidden, initStyle]);
    /********************************************************************************************************************
     * Function - makeFormColXs
     * ******************************************************************************************************************/
    var makeFormColXs = React.useCallback(function () {
        var formColKeys = Object.keys(formCols);
        var autoXs = 12;
        var autoXsCount = formColKeys.length;
        formColKeys.forEach(function (id) {
            var xs = formCols[id];
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
    var handleAddFormCol = React.useCallback(function (id, xs) {
        formCols[id] = xs;
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    var handleRemoveFormCol = React.useCallback(function (id) {
        delete formCols[id];
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    //------------------------------------------------------------------------------------------------------------------
    return (React.createElement(FormContext.Provider, { value: __assign({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColAutoXs: formColAutoXs, onAddFormCol: handleAddFormCol, onRemoveFormCol: handleRemoveFormCol }, otherFormState) },
        React.createElement(material.Grid, { item: true, ref: ref, xs: 12, className: classNames(className, 'FormRow'), style: style, sx: sx },
            React.createElement(material.Grid, { container: true, spacing: spacing },
                (icon || label || line) && (React.createElement(FormDivider, { className: classNames(className, 'FormRow-header'), size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden })),
                React.createElement(StyledWrapGrid, { item: true, xs: 12, className: 'FormRow-body' },
                    React.createElement(material.Grid, { className: 'FormRow-content', container: true, spacing: spacing, direction: 'row', style: { flexWrap: 'nowrap' } }, children),
                    helperText && (React.createElement(material.FormHelperText, { className: 'FormRow-helper-text', component: 'div', error: error }, helperText)))))));
});
FormRow.displayName = 'FormRow';
FormRow.defaultProps = FormRowDefaultProps;var FormColDefaultProps = {};var FormCol = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    initGap = _a.gap, icon = _a.icon, label = _a.label, hidden = _a.hidden, error = _a.error, warning = _a.warning, helperText = _a.helperText, helperTextShift = _a.helperTextShift, 
    //----------------------------------------------------------------------------------------------------------------
    xs = _a.xs, className = _a.className, children = _a.children, initStyle = _a.style, sx = _a.sx;
    var id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var gridRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFormColGap = _b.formColGap, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColAutoXs = _b.formColAutoXs, onAddFormCol = _b.onAddFormCol, onRemoveFormCol = _b.onRemoveFormCol, otherFormState = __rest(_b, ["variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "formColAutoXs", "onAddFormCol", "onRemoveFormCol"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = React.useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var gap = React.useMemo(function () { return (initGap == null ? formFormColGap : initGap); }, [formFormColGap, initGap]);
    var style = React.useMemo(function () { return (hidden ? __assign(__assign({}, initStyle), { display: 'none' }) : initStyle); }, [hidden, initStyle]);
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    var formColWidth = reactResizeDetector.useResizeDetector({
        targetRef: gridRef,
        handleWidth: true,
        handleHeight: false,
    }).width;
    /********************************************************************************************************************
     * LayoutEffect
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (onAddFormCol)
            onAddFormCol(id, xs);
        return function () {
            if (onRemoveFormCol)
                onRemoveFormCol(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xs]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
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
    return (React.createElement(FormContextProvider, { value: __assign({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColXs: xs || formColAutoXs || 12, formColWidth: formColWidth, formColWithLabel: !!label, formColWithHelperText: !!helperText }, otherFormState) },
        React.createElement(material.Grid, { ref: gridRef, item: true, xs: xs || formColAutoXs || 12, className: classNames(className, 'FormCol', !!label && 'with-label', !!helperText && 'with-helper-text'), style: style, sx: sx },
            React.createElement(material.Grid, { container: true, direction: 'column' },
                label && (React.createElement(material.Grid, { item: true, className: 'FormCol-header' },
                    React.createElement("div", { style: { position: 'relative', height: 20 } },
                        React.createElement(FormLabel, { className: 'FormCol-FormLabel', size: size, icon: icon, focused: focused, color: color, error: error, warning: warning, style: { position: 'absolute', left: 5, top: 0 } }, label)))),
                React.createElement(material.Grid, { item: true, xs: 2, className: 'FormCol-content' },
                    React.createElement(material.Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: gap } }, children)),
                helperText && (React.createElement(material.Grid, { item: true, className: 'FormCol-helper-text' },
                    React.createElement(material.FormHelperText, { component: 'div', error: error, style: { marginLeft: helperTextShift ? 14 : 5 } }, helperText)))))));
});
FormCol.displayName = 'FormCol';
FormCol.defaultProps = FormColDefaultProps;var FormBodyDefaultProps = {};var StyledContainerDiv = material.styled('div')(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n"], ["\n  flex: 1;\n  position: relative;\n"])));
var StyledContentDiv = material.styled('div')(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"], ["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"])));
var templateObject_1$d, templateObject_2$7;var FormBody = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var children = _a.children, hidden = _a.hidden;
    var containerRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useFormState(), spacing = _b.spacing, fullHeight = _b.fullHeight;
    var _c = React.useState(0), height = _c[0], setHeight = _c[1];
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    reactResizeDetector.useResizeDetector({
        targetRef: containerRef,
        handleWidth: false,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setHeight(((_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) || 0);
        },
    });
    /********************************************************************************************************************
     * Style
     * ******************************************************************************************************************/
    var style = React.useMemo(function () { return (hidden ? { display: 'none' } : undefined); }, [hidden]);
    var contentStyle = React.useMemo(function () {
        return fullHeight
            ? {
                height: height,
                paddingTop: 8,
                overflowY: 'auto',
                position: 'absolute',
                width: '100%',
            }
            : undefined;
    }, [fullHeight, height]);
    return (React.createElement(StyledContainerDiv, { ref: fullHeight ? containerRef : undefined, className: 'FormBody', style: style },
        React.createElement(StyledContentDiv, { style: contentStyle },
            React.createElement(material.Grid, { container: true, spacing: spacing, direction: 'column' }, children))));
};
FormBody.displayName = 'FormBody';
FormBody.defaultProps = FormBodyDefaultProps;var FormFooterDefaultProps = {};var FormFooter = function (_a) {
    var children = _a.children, noLine = _a.noLine, hidden = _a.hidden;
    var spacing = useFormState().spacing;
    var style = React.useMemo(function () { return (hidden ? { display: 'none' } : undefined); }, [hidden]);
    return (React.createElement(material.Grid, { item: true, xs: 12, className: 'FormFooter', style: style },
        React.createElement(material.Grid, { container: true, spacing: spacing, direction: 'column' },
            !noLine && (React.createElement(material.Grid, { item: true, xs: 12, sx: { mt: spacing } },
                React.createElement(FormDivider, { line: true }))),
            children)));
};
FormFooter.displayName = 'FormFooter';
FormFooter.defaultProps = FormFooterDefaultProps;var FormTextFieldDefaultProps = {};var css_248z$l = ".FormTextField {\n  min-width: 200px;\n}\n.FormTextField .clear-icon-button-wrap {\n  visibility: hidden;\n}\n.FormTextField.variant-filled .clear-icon-button-wrap {\n  margin-top: 9px;\n  margin-bottom: -9px;\n}\n.FormTextField:hover .clear-icon-button-wrap.show,\n.FormTextField .MuiInputBase-root.Mui-focused .clear-icon-button-wrap.show {\n  visibility: visible;\n}";
styleInject(css_248z$l);var FormTextField = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var _b;
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, required = _a.required, initValue = _a.value, initData = _a.data, icon = _a.icon, labelIcon = _a.labelIcon, initLabel = _a.label, initError = _a.error, helperText = _a.helperText, exceptValue = _a.exceptValue, readOnly = _a.readOnly, tabIndex = _a.tabIndex, initDisabled = _a.disabled, placeholder = _a.placeholder, maxLength = _a.maxLength, clear = _a.clear, width = _a.width, initMuiInputProps = _a.InputProps, initMuiInputLabelProps = _a.InputLabelProps, initInputProps = _a.inputProps, initInputRef = _a.inputRef, select = _a.select, SelectProps = _a.SelectProps, multiline = _a.multiline, validPattern = _a.validPattern, invalidPattern = _a.invalidPattern, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, noFormValueItem = _a.noFormValueItem, initHidden = _a.hidden, disableReturnKey = _a.disableReturnKey, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "required", "value", "data", "icon", "labelIcon", "label", "error", "helperText", "exceptValue", "readOnly", "tabIndex", "disabled", "placeholder", "maxLength", "clear", "width", "InputProps", "InputLabelProps", "inputProps", "inputRef", "select", "SelectProps", "multiline", "validPattern", "invalidPattern", "startAdornment", "endAdornment", "noFormValueItem", "hidden", "disableReturnKey", "onChange", "onValue", "onValidate", "onBlur", "onKeyDown", "className", "style"]);
    var id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var inputRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _c = useFormState(), formVariant = _c.variant, formSize = _c.size, formColor = _c.color, formFocused = _c.focused, formLabelShrink = _c.labelShrink, formFullWidth = _c.fullWidth, formDisabled = _c.disabled, formColWithHelperText = _c.formColWithHelperText, onAddValueItem = _c.onAddValueItem, onRemoveValueItem = _c.onRemoveValueItem, onValueChange = _c.onValueChange, onValueChangeByUser = _c.onValueChangeByUser, onRequestSearchSubmit = _c.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = reactHook.useAutoUpdateRefState(initData), dataRef = _f[0], setData = _f[2];
    var _g = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _g[0], disabled = _g[1], setDisabled = _g[2];
    var _h = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _h[0], hidden = _h[1], setHidden = _h[2];
    /********************************************************************************************************************
     * Memo - muiInputLabelProps
     * ******************************************************************************************************************/
    var muiInputLabelProps = React.useMemo(function () {
        if (labelShrink || placeholder) {
            return __assign(__assign({}, initMuiInputLabelProps), { shrink: true });
        }
        else {
            return initMuiInputLabelProps;
        }
    }, [initMuiInputLabelProps, labelShrink, placeholder]);
    /********************************************************************************************************************
     * Memo - inputProps
     * ******************************************************************************************************************/
    var inputProps = React.useMemo(function () {
        if (readOnly != null || maxLength != null) {
            var finalInputProps = __assign(__assign({}, initInputProps), { readOnly: readOnly, maxLength: maxLength });
            if (readOnly) {
                finalInputProps.tabIndex = -1;
                finalInputProps.className = classNames(finalInputProps.className, 'Mui-disabled');
            }
            else {
                finalInputProps.tabIndex = tabIndex;
            }
            return finalInputProps;
        }
        else {
            return initInputProps;
        }
    }, [initInputProps, readOnly, tabIndex, maxLength]);
    /********************************************************************************************************************
     * Memo - style
     * ******************************************************************************************************************/
    var style = React.useMemo(function () {
        var newStyle = __assign({}, initStyle);
        if (width != null) {
            newStyle.width = width;
        }
        if (hidden) {
            newStyle.display = 'none';
        }
        return newStyle;
    }, [initStyle, width, hidden]);
    /********************************************************************************************************************
     * Memo - label
     * ******************************************************************************************************************/
    var label = React.useMemo(function () {
        return labelIcon ? (React.createElement(React.Fragment, null,
            React.createElement(reactComponent.PdgIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (util.notEmpty(value) && validPattern) {
            if (!new RegExp(validPattern).test(value)) {
                setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
                return false;
            }
        }
        if (util.notEmpty(value) && invalidPattern) {
            if (new RegExp(invalidPattern).test(value)) {
                setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
                return false;
            }
        }
        if (onValidate) {
            var validateResult = onValidate(value);
            if (validateResult != null && validateResult !== true) {
                setErrorErrorHelperText(true, validateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, validPattern, invalidPattern, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    var getFinalValue = React.useCallback(function (newValue) {
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    var _j = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _j[0], value = _j[1], setValue = _j[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        if (!noFormValueItem) {
            onValueChange(name, value);
        }
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var showClear = React.useMemo(function () { return (clear ? util.notEmpty(value) : false); }, [clear, value]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a, _b;
        if (initInputRef) {
            (_a = initInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [initInputRef, inputRef]);
    /********************************************************************************************************************
     * Memo - muiInputProps
     * ******************************************************************************************************************/
    var muiInputProps = React.useMemo(function () {
        var muiInputProps = __assign({}, initMuiInputProps);
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PdgIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment || muiInputProps.endAdornment || (clear && !readOnly && !disabled)) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null,
                clear && !readOnly && !disabled && (React.createElement(material.InputAdornment, { className: classNames('clear-icon-button-wrap', showClear && 'show'), position: 'end' },
                    React.createElement(material.IconButton, { className: 'clear-icon-button', size: 'small', tabIndex: -1, onClick: function () {
                            var finalValue = setValue('');
                            focus();
                            if (!noFormValueItem) {
                                util.nextTick(function () {
                                    onValueChangeByUser(name, finalValue);
                                    onRequestSearchSubmit(name, finalValue);
                                });
                            }
                        } },
                        React.createElement(reactComponent.PdgIcon, { size: 'inherit' }, "ClearRounded")))),
                muiInputProps.endAdornment,
                endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        return muiInputProps;
    }, [
        clear,
        disabled,
        endAdornment,
        focus,
        icon,
        initMuiInputProps,
        name,
        noFormValueItem,
        onRequestSearchSubmit,
        onValueChangeByUser,
        readOnly,
        setValue,
        showClear,
        startAdornment,
    ]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref || (!noFormValueItem && onAddValueItem)) {
            var commands = {
                getType: function () { return 'default'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () { return setValue(initValue); },
                getValue: function () { return valueRef.current; },
                setValue: setValue,
                getData: function () { return dataRef.current; },
                setData: setData,
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return !!disabledRef.current; },
                setDisabled: setDisabled,
                isHidden: function () { return !!hiddenRef.current; },
                setHidden: setHidden,
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(valueRef.current); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
            };
            if (ref) {
                if (typeof ref === 'function') {
                    ref(commands);
                }
                else {
                    ref.current = commands;
                }
            }
            if (!noFormValueItem && onAddValueItem)
                onAddValueItem(id, commands);
            return function () {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(null);
                    }
                    else {
                        ref.current = null;
                    }
                }
                if (!noFormValueItem && onRemoveValueItem)
                    onRemoveValueItem(id);
            };
        }
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        noFormValueItem,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (e) {
        var finalValue = setValue(e.target.value);
        if (!noFormValueItem) {
            util.nextTick(function () {
                onValueChangeByUser(name, finalValue);
                if (select) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
    }, [setValue, noFormValueItem, onValueChangeByUser, name, select, onRequestSearchSubmit]);
    var handleBlur = React.useCallback(function (e) {
        if (error)
            validate(valueRef.current);
        if (onBlur)
            onBlur(e);
    }, [error, validate, valueRef, onBlur]);
    var handleKeyDown = React.useCallback(function (e) {
        if (['Enter'].includes(e.key) &&
            !select &&
            (!multiline || (multiline && disableReturnKey)) &&
            !noFormValueItem) {
            e.preventDefault();
            e.stopPropagation();
            onRequestSearchSubmit(name, valueRef.current);
        }
        if (onKeyDown)
            onKeyDown(e);
    }, [select, multiline, disableReturnKey, noFormValueItem, onKeyDown, onRequestSearchSubmit, name, valueRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.TextField, __assign({}, props, { variant: variant, size: size, color: color, focused: focused || undefined, name: name, label: label, placeholder: placeholder, className: classNames(className, 'FormValueItem', 'FormTextField', "variant-".concat(variant)), inputRef: initInputRef ? initInputRef : inputRef, value: value, required: required, fullWidth: !width && fullWidth, error: error, helperText: formColWithHelperText ? undefined : error ? errorHelperText : helperText, FormHelperTextProps: { component: 'div' }, disabled: disabled, InputProps: muiInputProps, InputLabelProps: muiInputLabelProps, inputProps: ((_b = initInputProps === null || initInputProps === void 0 ? void 0 : initInputProps.className) === null || _b === void 0 ? void 0 : _b.includes('FormTag-Input')) ? initInputProps : inputProps, style: style, select: select, SelectProps: SelectProps, multiline: multiline, onChange: handleChange, onBlur: handleBlur, onKeyDown: handleKeyDown })));
});
FormTextField.displayName = 'FormText';
FormTextField.defaultProps = FormTextFieldDefaultProps;var FormHiddenDefaultProps = __assign({}, FormTextFieldDefaultProps);var css_248z$k = ".FormHidden {\n  display: none !important;\n}";
styleInject(css_248z$k);var FormHidden = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(FormTextField, __assign({ ref: ref, className: classNames(className, 'FormHidden'), type: 'hidden', variant: 'standard' }, props)));
});
FormHidden.displayName = 'FormHidden';
FormHidden.defaultProps = FormHiddenDefaultProps;var FormTagDefaultProps = __assign(__assign({}, FormTextFieldDefaultProps), { value: [], clear: true, formValueSeparator: ',' });var FormTextDefaultProps = __assign(__assign({}, FormTextFieldDefaultProps), { clear: true, value: '' });var FormText = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(FormTextField, __assign({ ref: ref, className: classNames(className, 'FormText'), disableReturnKey: true }, props)));
});
FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;var css_248z$j = ".FormTag.FormTextField {\n  min-width: 200px;\n}";
styleInject(css_248z$j);var FormTag = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, name = _a.name, initValue = _a.value, exceptValue = _a.exceptValue, required = _a.required, readOnly = _a.readOnly, maxLength = _a.maxLength, initDisabled = _a.disabled, initFullWidth = _a.fullWidth, initError = _a.error, helperText = _a.helperText, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, onValidate = _a.onValidate, onKeyDown = _a.onKeyDown, onChange = _a.onChange, onValue = _a.onValue, onBlur = _a.onBlur, props = __rest(_a, ["className", "name", "value", "exceptValue", "required", "readOnly", "maxLength", "disabled", "fullWidth", "error", "helperText", "formValueSeparator", "formValueSort", "onValidate", "onKeyDown", "onChange", "onValue", "onBlur"]);
    var _b = useFormState(), formFullWidth = _b.fullWidth, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit, otherFormState = __rest(_b, ["fullWidth", "disabled", "onAddValueItem", "onValueChange", "onValueChangeByUser", "onRequestSearchSubmit"]);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var fullWidth = reactHook.useAutoUpdateState(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = React.useState(''), inputValue = _c[0], setInputValue = _c[1];
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var disabled = reactHook.useAutoUpdateState(initDisabled == null ? formDisabled : initDisabled)[0];
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, onValidate, setErrorErrorHelperText]);
    var getFinalValue = React.useCallback(function (value) {
        var finalValue = value === undefined ? [] : value;
        if (finalValue instanceof Set) {
            finalValue = Array.from(finalValue);
        }
        else {
            var finalValueSet_1 = new Set();
            (finalValue || []).forEach(function (finalValue) { return finalValueSet_1.add(finalValue); });
            finalValue = Array.from(finalValueSet_1);
        }
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    var _f = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _f[0], value = _f[1], setValue = _f[2];
    var valueSet = React.useMemo(function () { return new Set(value); }, [value]);
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (!util.equal(value, initValue)) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Function - getExtraCommands
     * ******************************************************************************************************************/
    var getExtraCommands = React.useCallback(function () {
        return {
            isFormValueSort: function () { return !!formValueSort; },
            getFormValueSeparator: function () { return formValueSeparator; },
        };
    }, [formValueSort, formValueSeparator]);
    /********************************************************************************************************************
     * Function - getCommands
     * ******************************************************************************************************************/
    var getCommands = React.useCallback(function (baseCommands) {
        return __assign(__assign(__assign({}, baseCommands), { getReset: function () { return getFinalValue(initValue); }, reset: function () { return setValue(initValue); }, getValue: function () { return valueRef.current; }, setValue: function (newValue) { return setValue(newValue); }, validate: function () { return validate(valueRef.current); } }), getExtraCommands());
    }, [getExtraCommands, getFinalValue, initValue, setValue, valueRef, validate]);
    /********************************************************************************************************************
     * Function - appendTag, removeTag
     * ******************************************************************************************************************/
    var appendTag = React.useCallback(function (tag) {
        if (valueSet.has(tag)) {
            setInputValue('');
        }
        else {
            valueSet.add(tag);
            var finalValue_1 = setValue(valueSet);
            util.nextTick(function () {
                setInputValue('');
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [valueSet, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    var removeTag = React.useCallback(function (tag) {
        if (valueSet.has(tag)) {
            valueSet.delete(tag);
            var finalValue_2 = setValue(valueSet);
            util.nextTick(function () {
                onValueChangeByUser(name, finalValue_2);
                onRequestSearchSubmit(name, finalValue_2);
            });
        }
    }, [valueSet, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = React.useCallback(function (id, commands) {
        onAddValueItem(id, getCommands(commands));
    }, [onAddValueItem, getCommands]);
    var handleRef = React.useCallback(function (commands) {
        if (ref) {
            var finalCommands = getCommands(commands);
            if (typeof ref === 'function') {
                ref(finalCommands);
            }
            else {
                ref.current = finalCommands;
            }
        }
    }, [ref, getCommands]);
    var handleInputKeyDown = React.useCallback(function (e) {
        if ([' ', ',', 'Enter'].includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            if (util.notEmpty(inputValue)) {
                appendTag(inputValue);
            }
        }
        else {
            if (onKeyDown)
                onKeyDown(e);
        }
    }, [inputValue, appendTag, onKeyDown]);
    var handleInputChange = React.useCallback(function (value) {
        setInputValue(value.replace(/ /g, '').replace(/,/g, ''));
        setInputValue(value);
    }, []);
    var handleBlur = React.useCallback(function (e) {
        if (util.notEmpty(inputValue)) {
            appendTag(inputValue);
        }
        if (onBlur)
            onBlur(e);
    }, [appendTag, inputValue, onBlur]);
    var handleRenderTags = React.useCallback(function (tags) {
        return tags.map(function (tag) { return (React.createElement(material.Chip, { className: 'MuiAutocomplete-tag', key: tag, label: tag, size: 'small', disabled: readOnly || disabled, onDelete: readOnly || disabled ? undefined : function () { return removeTag(tag); } })); });
    }, [disabled, readOnly, removeTag]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormContextProvider, { value: __assign({ fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, 
            // eslint-disable-next-line
            onValueChange: function () { }, 
            // eslint-disable-next-line
            onValueChangeByUser: function () { }, 
            // eslint-disable-next-line
            onRequestSearchSubmit: function () { } }, otherFormState) },
        React.createElement(material.Autocomplete, { options: [], multiple: true, freeSolo: true, value: value, readOnly: readOnly, disableClearable: true, disabled: disabled, renderTags: handleRenderTags, inputValue: inputValue, style: { display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }, renderInput: function (params) {
                var _a;
                var renderProps = __assign({}, props);
                renderProps.InputLabelProps = __assign(__assign({}, renderProps.InputLabelProps), { htmlFor: params.InputLabelProps.htmlFor, id: params.InputLabelProps.id });
                renderProps.InputProps = __assign(__assign({}, renderProps.InputProps), { className: classNames((_a = renderProps.InputProps) === null || _a === void 0 ? void 0 : _a.className, params.InputProps.className), ref: params.InputProps.ref });
                if (util.notEmpty(params.InputProps.startAdornment)) {
                    renderProps.InputProps.startAdornment = (React.createElement(React.Fragment, null,
                        renderProps.InputProps.startAdornment,
                        params.InputProps.startAdornment));
                }
                renderProps.inputProps = __assign(__assign({}, renderProps.inputProps), params.inputProps);
                renderProps.inputProps.className = classNames(renderProps.inputProps.className, 'FormTag-Input');
                renderProps.inputProps.readOnly = readOnly;
                if (readOnly) {
                    renderProps.inputProps.tabIndex = -1;
                }
                renderProps.inputProps.maxLength = maxLength;
                if (readOnly) {
                    renderProps.inputProps.className = classNames(renderProps.inputProps.className, 'Mui-disabled');
                }
                delete renderProps.inputProps.onChange;
                delete renderProps.inputProps.value;
                return (React.createElement(FormText, __assign({}, renderProps, { ref: handleRef, name: name, className: classNames(className, 'FormValueItem', 'FormTag'), error: error, disabled: disabled, fullWidth: fullWidth, required: required, value: inputValue, exceptValue: exceptValue, helperText: error ? errorHelperText : helperText, onKeyDown: handleInputKeyDown, onChange: handleInputChange, onBlur: handleBlur })));
            } })));
});
FormTag.displayName = 'FormTag';
FormTag.defaultProps = FormTagDefaultProps;var FormEmailDefaultProps = __assign(__assign({}, FormTextDefaultProps), { validPattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g });var FormEmail = React.forwardRef(function (_a, ref) {
    var className = _a.className, onValue = _a.onValue, props = __rest(_a, ["className", "onValue"]);
    var handleValue = React.useCallback(function (value) {
        var newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormText, __assign({ ref: ref, className: classNames(className, 'FormEmail'), type: 'email', onValue: handleValue }, props)));
});
FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;var FormPasswordDefaultProps = __assign(__assign({}, FormTextFieldDefaultProps), { clear: false, eye: true });var css_248z$i = ".FormPassword .eye-icon-button-wrap {\n  visibility: hidden;\n}\n.FormPassword.variant-filled .eye-icon-button-wrap {\n  margin-top: 9px;\n  margin-bottom: -9px;\n}\n.FormPassword:hover .eye-icon-button-wrap.show,\n.FormPassword .MuiInputBase-root.Mui-focused .eye-icon-button-wrap.show {\n  visibility: visible;\n}";
styleInject(css_248z$i);var StyledEyeInputAdornment = material.styled(material.InputAdornment)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  visibility: hidden;\n"], ["\n  visibility: hidden;\n"])));
var FormPassword = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var className = _a.className, initMuiInputProps = _a.InputProps, eye = _a.eye, onChange = _a.onChange, props = __rest(_a, ["className", "InputProps", "eye", "onChange"]);
    var _b = React.useState('password'), type = _b[0], setType = _b[1];
    var _c = React.useState(util.notEmpty(props.value)), showEye = _c[0], setShowEye = _c[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var muiInputProps = React.useMemo(function () {
        if (eye) {
            var newProps = __assign({}, initMuiInputProps);
            newProps.endAdornment = (React.createElement(React.Fragment, null,
                React.createElement(StyledEyeInputAdornment, { position: 'end', className: classNames('eye-icon-button-wrap', showEye && 'show') },
                    React.createElement(material.IconButton, { size: 'small', tabIndex: -1, onClick: function () {
                            setType(type === 'password' ? 'text' : 'password');
                        } },
                        React.createElement(material.Icon, { fontSize: 'inherit' }, type === 'password' ? 'visibility' : 'visibility_off'))),
                newProps.endAdornment));
            return newProps;
        }
        else {
            return initMuiInputProps;
        }
    }, [eye, initMuiInputProps, showEye, type]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (value) {
        setShowEye(util.notEmpty(value));
        onChange && onChange(value);
    }, [onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormText, __assign({ ref: ref, className: classNames(className, 'FormPassword'), onChange: handleChange, type: type, InputProps: muiInputProps }, props)));
});
FormPassword.displayName = 'FormPassword';
FormPassword.defaultProps = FormPasswordDefaultProps;
var templateObject_1$c;var FormTelDefaultProps = __assign(__assign({}, FormTextDefaultProps), { validPattern: /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/ });var FormTel = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, onValue = _a.onValue, props = __rest(_a, ["className", "onValue"]);
    var handleValue = React.useCallback(function (value) {
        var newValue = util.telNoAutoDash(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormText, __assign({ ref: ref, className: classNames(className, 'FormTel'), onValue: handleValue, maxLength: 13 }, props)));
});
FormTel.displayName = 'FormTel';
FormTel.defaultProps = FormTelDefaultProps;var FormMobileDefaultProps = __assign(__assign({}, FormTelDefaultProps), { validPattern: /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/ });var FormMobile = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(FormTel, __assign({ ref: ref, className: classNames(className, 'FormMobile') }, props));
});
FormMobile.displayName = 'FormMobile';
FormMobile.defaultProps = FormMobileDefaultProps;var NumberFormatCustom = React.forwardRef(function (_a, ref) {
    var onChange = _a.onChange, props = __rest(_a, ["onChange"]);
    return (React.createElement(reactNumberFormat.NumericFormat, __assign({}, props, { getInputRef: ref, onValueChange: function (values) {
            if (onChange)
                onChange({ target: { value: values.value } });
        } })));
});
NumberFormatCustom.displayName = 'NumberFormatCustom';var FormNumberDefaultProps = __assign(__assign({}, FormTextFieldDefaultProps), { clear: true });var FormNumber = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var className = _a.className, allowNegative = _a.allowNegative, thousandSeparator = _a.thousandSeparator, allowDecimal = _a.allowDecimal, decimalScale = _a.decimalScale, prefix = _a.prefix, suffix = _a.suffix, readOnly = _a.readOnly, tabIndex = _a.tabIndex, labelShrink = _a.labelShrink, initMuiInputProps = _a.InputProps, initInputProps = _a.inputProps, initValue = _a.value, onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, props = __rest(_a, ["className", "allowNegative", "thousandSeparator", "allowDecimal", "decimalScale", "prefix", "suffix", "readOnly", "tabIndex", "labelShrink", "InputProps", "inputProps", "value", "onChange", "onValue", "onValidate"]);
    var _b = React.useState(function () { return (util.empty(initValue) ? '' : "".concat(initValue)); }), strValue = _b[0], setStrValue = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        setStrValue(util.empty(initValue) ? '' : "".concat(initValue));
    }, [initValue]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var muiInputProps = React.useMemo(function () {
        var inputProps = {
            className: readOnly ? 'Mui-disabled' : undefined,
            allowNegative: !!allowNegative,
            thousandSeparator: thousandSeparator,
            prefix: prefix,
            suffix: suffix,
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
        return __assign(__assign({}, initMuiInputProps), { inputComponent: NumberFormatCustom, inputProps: __assign(__assign({}, initInputProps), inputProps) });
    }, [
        readOnly,
        allowNegative,
        thousandSeparator,
        prefix,
        suffix,
        tabIndex,
        allowDecimal,
        initMuiInputProps,
        initInputProps,
        decimalScale,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (value) {
        var newValue = util.empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        onChange && onChange(newValue);
        setStrValue(value);
    }, [onChange]);
    var handleValue = React.useCallback(function (value) {
        var finalValue = util.empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        if (onValue) {
            finalValue = onValue(finalValue);
        }
        return finalValue !== undefined ? finalValue.toString() : undefined;
    }, [onValue]);
    var handleValidate = React.useCallback(function (value) {
        if (onValidate) {
            var finalValue = util.empty(value) || value === '-' || value === '.' ? undefined : Number(value);
            return onValidate(finalValue);
        }
        else {
            return true;
        }
    }, [onValidate]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormTextField, __assign({ ref: ref, className: classNames(className, 'FormNumber'), disableReturnKey: true, labelShrink: strValue === '' || strValue === undefined ? labelShrink : true, InputProps: muiInputProps, readOnly: readOnly, value: strValue, onChange: handleChange, onValue: handleValue, onValidate: handleValidate }, props)));
});
FormNumber.displayName = 'FormNumber';
FormNumber.defaultProps = FormNumberDefaultProps;var FormSearchDefaultProps = __assign({}, FormTextDefaultProps);var css_248z$h = ".FormSearch input[type=search]::-webkit-search-decoration,\n.FormSearch input[type=search]::-webkit-search-cancel-button,\n.FormSearch input[type=search]::-webkit-search-results-button,\n.FormSearch input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}";
styleInject(css_248z$h);var FormSearch = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(FormText, __assign({ className: classNames(className, 'FormSearch'), ref: ref, type: 'search' }, props));
});
FormSearch.displayName = 'FormSearch';
FormSearch.defaultProps = FormSearchDefaultProps;var FormTextareaDefaultProps = __assign(__assign({}, FormTextFieldDefaultProps), { clear: false, rows: 3, value: '' });var css_248z$g = ".FormTextarea .MuiInputBase-root .MuiInputBase-input {\n  overflow-y: scroll;\n}\n.FormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar {\n  width: 8px;\n}\n.FormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.1882352941);\n  background-clip: padding-box;\n  border-left: 4px transparent solid;\n}";
styleInject(css_248z$g);var FormTextarea = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(FormTextField, __assign({ ref: ref, className: classNames(className, 'FormTextarea') }, props, { multiline: true })));
});
FormTextarea.displayName = 'FormTextarea';
FormTextarea.defaultProps = FormTextareaDefaultProps;var FormUrlDefaultProps = __assign(__assign({}, FormTextDefaultProps), { validPattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim });var FormUrl = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, onValue = _a.onValue, props = __rest(_a, ["className", "onValue"]);
    var handleValue = React.useCallback(function (value) {
        var newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormText, __assign({ ref: ref, className: classNames(className, 'FormUrl'), type: 'url', onValue: handleValue }, props)));
});
FormUrl.displayName = 'FormUrl';
FormUrl.defaultProps = FormUrlDefaultProps;function getDateValidationErrorText(error) {
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
var DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
var DEFAULT_DATE_FORM_VALUE_FORMAT = 'YYYY-MM-DD';
var DEFAULT_DATE_TIME_HOUR_FORMAT = 'YYYY-MM-DD HH시';
var DEFAULT_DATE_TIME_HOUR_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:00:00';
var DEFAULT_DATE_TIME_MINUTE_FORMAT = 'YYYY-MM-DD HH:mm';
var DEFAULT_DATE_TIME_MINUTE_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:mm:00';
var DEFAULT_DATE_TIME_SECOND_FORMAT = 'YYYY-MM-DD HH:mm:ss';
var DEFAULT_DATE_TIME_SECOND_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
var DEFAULT_TIME_HOUR_FORMAT = 'HH시';
var DEFAULT_TIME_HOUR_FORM_VALUE_FORMAT = 'HH:00:00';
var DEFAULT_TIME_MINUTE_FORMAT = 'HH:mm';
var DEFAULT_TIME_MINUTE_FORM_VALUE_FORMAT = 'HH:mm:00';
var DEFAULT_TIME_SECOND_FORMAT = 'HH:mm:ss';
var DEFAULT_TIME_SECOND_FORM_VALUE_FORMAT = 'HH:mm:ss';
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
                throw new Error("util::date_time::getDateTimeFormat - type \uC774 '".concat(type, "' \uC77C \uACBD\uC6B0 time \uAC12\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
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
                throw new Error("util::date_time::getDateTimeFormat - type \uC774 '".concat(type, "' \uC77C \uACBD\uC6B0 time \uAC12\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
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
                throw new Error("util::date_time::getDateTimeFormValueFormat - type \uC774 '".concat(type, "' \uC77C \uACBD\uC6B0 time \uAC12\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
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
                throw new Error("util::date_time::getDateTimeFormValueFormat - type \uC774 '".concat(type, "' \uC77C \uACBD\uC6B0 time \uAC12\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
            }
            break;
    }
}
function getAvailableDateValFormat(type, time) {
    var availableDateType;
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
                throw new Error("util::date_time::getAvailableDateType - type \uC774 '".concat(type, "' \uC77C \uACBD\uC6B0 time \uAC12\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
            }
            break;
        case 'time':
            throw new Error("util::date_time::getAvailableDateType - '".concat(type, "' type \uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
    }
}
/********************************************************************************************************************
 * makeAvailableDate
 * ******************************************************************************************************************/
function makeAvailableDate(minDate, maxDate, disablePast, disableFuture) {
    var now = dayjs();
    var min = null;
    var max = null;
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
    var minItem = min
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
    var maxItem = max
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
    var availableDateType;
    if (time) {
        availableDateType = getAvailableDateType(type, time);
    }
    else if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    var availableDateVal = getAvailableDateVal(availableDate, availableDateType);
    var availableDateValFormat = getAvailableDateValFormat(availableDateType);
    return [
        availableDateVal[0] ? dayjs(availableDateVal[0].toString(), availableDateValFormat) : null,
        availableDateVal[1] ? dayjs(availableDateVal[1].toString(), availableDateValFormat) : null,
    ];
}
function getAvailableDateVal(availableDate, type, time) {
    var availableDateType;
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
    var format = getAvailableDateValFormat(type, time);
    return Number(date.format(format));
}
function isDateAvailable(date, availableDate, type, time) {
    var availableDateType;
    if (time) {
        availableDateType = getAvailableDateType(type, time);
    }
    else if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    var dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
    var availableDateVal = getAvailableDateVal(availableDate, availableDateType);
    return !((availableDateVal[0] && dateVal < availableDateVal[0]) ||
        (availableDateVal[1] && dateVal > availableDateVal[1]));
}
function checkDateAvailable(date, availableDate, type, time) {
    var availableDateType;
    if (time) {
        availableDateType = getAvailableDateType(type, time);
    }
    else if (['date', 'date_time', 'time'].includes(type)) {
        availableDateType = getAvailableDateType(type, time);
    }
    else {
        availableDateType = type;
    }
    var dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
    var availableDateVal = getAvailableDateVal(availableDate, availableDateType);
    if (availableDateVal[0] && dateVal < availableDateVal[0])
        return 'min';
    if (availableDateVal[1] && dateVal > availableDateVal[1])
        return 'max';
    return 'available';
}function getFileSizeText(bytes, dp) {
    if (dp === void 0) { dp = 1; }
    var thresh = 1024;
    if (Math.abs(bytes) < thresh) {
        return "".concat(bytes, " Byte");
    }
    var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var u = -1;
    var r = Math.pow(10, dp);
    do {
        bytes /= thresh;
        u += 1;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return "".concat(bytes.toFixed(dp), " ").concat(units[u]);
}function ToForwardRefExoticComponent(component, ext) {
    var fComponent = component;
    fComponent.displayName = ext === null || ext === void 0 ? void 0 : ext.displayName;
    fComponent.defaultProps = ext === null || ext === void 0 ? void 0 : ext.defaultProps;
    return component;
}
function AutoTypeForwardRef(render) {
    return React.forwardRef(render);
}var FormSelectDefaultProps = __assign(__assign({}, FormTextFieldDefaultProps), { formValueSeparator: ',', minWidth: 120 });var css_248z$f = ".FormSelect.is-selected-placeholder .MuiSelect-select {\n  opacity: 0.38;\n}\n.FormSelect .MuiInputBase-root.MuiInputBase-adornedEnd {\n  padding-right: 25px;\n}\n.FormSelect .MuiSelect-select.MuiSelect-multiple .selected-list:not(:empty) {\n  margin-top: -3px;\n  margin-bottom: -3px;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar {\n  width: 12px;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.1882352941);\n  background-clip: padding-box;\n  border-left: 4px transparent solid;\n  border-right: 4px transparent solid;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-button:start:decrement, .FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-button:end:increment {\n  display: block;\n  height: 4px;\n  background-color: transparent;\n}";
styleInject(css_248z$f);var FormSelect = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var className = _a.className, name = _a.name, initItems = _a.items, initFullWidth = _a.fullWidth, onLoadItems = _a.onLoadItems, readOnly = _a.readOnly, multiple = _a.multiple, checkbox = _a.checkbox, placeholder = _a.placeholder, initStartAdornment = _a.startAdornment, initValue = _a.value, initInputLabelProps = _a.InputLabelProps, initSelectProps = _a.SelectProps, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, width = _a.width, minWidth = _a.minWidth, initLoading = _a.loading, onChange = _a.onChange, onValue = _a.onValue, props = __rest(_a, ["className", "name", "items", "fullWidth", "onLoadItems", "readOnly", "multiple", "checkbox", "placeholder", "startAdornment", "value", "InputLabelProps", "SelectProps", "formValueSeparator", "formValueSort", "width", "minWidth", "loading", "onChange", "onValue"]);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, otherFormState = __rest(_b, ["fullWidth", "onAddValueItem", "onValueChange"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var emptyValue = React.useState([])[0];
    var _c = React.useState({}), itemValueLabels = _c[0], setItemValueLabels = _c[1];
    var _d = React.useState(false), hasEmptyValue = _d[0], setHasEmptyValue = _d[1];
    var _e = React.useState(false), isOnGetItemLoading = _e[0], setIsOnGetItemLoading = _e[1];
    var _f = React.useState(initLoading), loading = _f[0], setLoading = _f[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var startAdornment = React.useMemo(function () {
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
    var _g = reactHook.useAutoUpdateState(initItems), items = _g[0], setItems = _g[1];
    React.useEffect(function () {
        if (items) {
            setItemValueLabels(items.reduce(function (res, item) {
                res["".concat(item.value)] = item.label;
                return res;
            }, {}));
            setHasEmptyValue(!!items.find(function (_a) {
                var value = _a.value;
                return value === '';
            }));
        }
        else {
            setItemValueLabels({});
            setHasEmptyValue(false);
        }
    }, [items]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var itemsValues = React.useMemo(function () {
        if (items) {
            return items.reduce(function (res, _a) {
                var value = _a.value;
                res["".concat(value)] = value;
                return res;
            }, {});
        }
        else {
            return {};
        }
    }, [items]);
    /********************************************************************************************************************
     * inputLabelProps
     * ******************************************************************************************************************/
    var inputLabelProps = React.useMemo(function () {
        if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
            return __assign(__assign({}, initInputLabelProps), { shrink: true });
        }
        else {
            return initInputLabelProps;
        }
    }, [hasEmptyValue, initInputLabelProps, placeholder]);
    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/
    var getFinalValue = React.useCallback(function (newValue) {
        var finalValue = newValue == null ? '' : newValue;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (util.empty(finalValue)) {
                    finalValue = [];
                }
                else {
                    if (typeof finalValue === 'string') {
                        finalValue = Array.from(new Set(finalValue.split(formValueSeparator || ',')));
                    }
                    else {
                        finalValue = [finalValue];
                    }
                }
            }
        }
        else {
            if (Array.isArray(finalValue)) {
                finalValue = util.empty(finalValue) ? '' : finalValue[0];
            }
            else {
                if (util.empty(finalValue)) {
                    finalValue = '';
                }
            }
        }
        if (util.notEmpty(itemsValues)) {
            if (finalValue != null && util.notEmpty(finalValue)) {
                if (multiple) {
                    if (Array.isArray(finalValue)) {
                        finalValue = finalValue.map(function (v) {
                            var realValue = itemsValues["".concat(v)];
                            return realValue != null ? realValue : v;
                        });
                    }
                }
                else {
                    var realValue = itemsValues["".concat(finalValue)];
                    if (realValue != null && finalValue !== realValue) {
                        finalValue = realValue;
                    }
                }
            }
        }
        finalValue = onValue ? onValue(finalValue) : finalValue;
        return util.equal(newValue, finalValue) ? newValue : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    var _h = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _h[0], value = _h[1], setValue = _h[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(function () {
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    reactHook.useFirstSkipEffect(function () {
        setValue(valueRef.current);
    }, [multiple]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var isSelectedPlaceholder = React.useMemo(function () { return util.notEmpty(items) && util.empty(value) && !!placeholder && !hasEmptyValue; }, [hasEmptyValue, items, placeholder, value]);
    var selectProps = React.useMemo(function () {
        var _a;
        var finalSelectProps = __assign(__assign({}, initSelectProps), { displayEmpty: true, multiple: !!multiple, value: value });
        if (multiple) {
            finalSelectProps.renderValue = function (selected) {
                if (isSelectedPlaceholder) {
                    return placeholder;
                }
                else {
                    return (React.createElement(material.Box, { className: 'selected-list', sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }, Array.isArray(selected) &&
                        selected.map(function (selectedValue) {
                            if (isSelectedPlaceholder) {
                                return React.createElement(material.Chip, { key: selectedValue || '$$$EmptyValuePlaceholder$$$', label: 'hahaha', size: 'small' });
                            }
                            else {
                                return React.createElement(material.Chip, { key: selectedValue, label: itemValueLabels["".concat(selectedValue)], size: 'small' });
                            }
                        })));
                }
            };
        }
        if (minWidth != null) {
            finalSelectProps.style = __assign(__assign({}, finalSelectProps.style), { minWidth: width || minWidth });
        }
        finalSelectProps.MenuProps = __assign(__assign({}, finalSelectProps.MenuProps), { className: classNames((_a = finalSelectProps.MenuProps) === null || _a === void 0 ? void 0 : _a.className, 'FormSelect-Menu-Popover') });
        return finalSelectProps;
    }, [initSelectProps, isSelectedPlaceholder, itemValueLabels, minWidth, multiple, placeholder, value, width]);
    /********************************************************************************************************************
     * Function - getExtraCommands
     * ******************************************************************************************************************/
    var getBaseCommands = React.useCallback(function () {
        return {
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: function (value) { return setValue(value); },
        };
    }, [getFinalValue, initValue, setValue, valueRef]);
    var getExtraCommands = React.useCallback(function () {
        var lastItems = items;
        var lastLoading = loading;
        return {
            getFormValueSeparator: function () { return formValueSeparator; },
            isFormValueSort: function () { return !!formValueSort; },
            getItems: function () { return lastItems; },
            setItems: function (items) {
                lastItems = items;
                setItems(lastItems);
            },
            isMultiple: function () { return !!multiple; },
            getLoading: function () { return !!lastLoading; },
            setLoading: function (loading) {
                lastLoading = loading;
                setLoading(lastLoading);
            },
        };
    }, [items, loading, formValueSeparator, formValueSort, setItems, multiple]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleRef = React.useCallback(function (commands) {
        if (ref) {
            var finalCommands = commands
                ? __assign(__assign(__assign({}, commands), getBaseCommands()), getExtraCommands()) : null;
            if (typeof ref === 'function') {
                return ref(finalCommands);
            }
            else {
                ref.current = finalCommands;
            }
        }
    }, [ref, getBaseCommands, getExtraCommands]);
    var handleAddValueItem = React.useCallback(function (id, commands) {
        onAddValueItem(id, __assign(__assign(__assign({}, commands), getBaseCommands()), getExtraCommands()));
    }, [onAddValueItem, getBaseCommands, getExtraCommands]);
    var handleChange = function (newValue) {
        setValue(newValue);
    };
    var handleValue = React.useCallback(function (value) {
        return getFinalValue(value);
    }, [getFinalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var finalValue = React.useMemo(function () {
        var newFinalValue;
        if (util.notEmpty(items)) {
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
            newFinalValue = util.ifUndefined(newFinalValue, '');
        }
        return newFinalValue;
    }, [emptyValue, items, multiple, selectProps, value]);
    return (React.createElement(FormContextProvider, { value: __assign({ fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, 
            // eslint-disable-next-line
            onValueChange: function () { } }, otherFormState) },
        React.createElement(FormTextField, __assign({ select: true, ref: handleRef, name: name, className: classNames(className, 'FormSelect', isSelectedPlaceholder && 'is-selected-placeholder'), fullWidth: fullWidth }, props, { startAdornment: startAdornment, value: finalValue, clear: false, readOnly: readOnly || util.empty(items), InputLabelProps: inputLabelProps, SelectProps: selectProps, onChange: handleChange, onValue: handleValue }),
            isSelectedPlaceholder && (React.createElement(material.MenuItem, { key: '$$$EmptyValuePlaceholder$$$', value: '', disabled: true, sx: { display: 'none' } }, placeholder)),
            items && util.notEmpty(items) ? (items.map(function (_a) {
                var itemLabel = _a.label, itemValue = _a.value, disabled = _a.disabled;
                return (React.createElement(material.MenuItem, { key: util.empty(itemValue) ? '$$$EmptyValue$$$' : "".concat(itemValue), value: typeof itemValue === 'boolean' ? "".concat(itemValue) : itemValue, disabled: disabled },
                    multiple && checkbox && Array.isArray(value) && React.createElement(material.Checkbox, { checked: value.includes(itemValue) }),
                    itemLabel));
            })) : (React.createElement(material.MenuItem, { value: '' })))));
}));
FormSelect.displayName = 'FormSelect';
FormSelect.defaultProps = FormSelectDefaultProps;var FormCompanyNoDefaultProps = __assign(__assign({}, FormTextDefaultProps), { validPattern: /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/ });var FormCompanyNo = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, onValue = _a.onValue, props = __rest(_a, ["className", "onValue"]);
    var handleValue = React.useCallback(function (value) {
        var newValue = util.companyNoAutoDash(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormText, __assign({ ref: ref, className: classNames(className, 'FormCompanyNo'), maxLength: 12, onValue: handleValue }, props)));
});
FormCompanyNo.displayName = 'FormCompanyNo';
FormCompanyNo.defaultProps = FormCompanyNoDefaultProps;var FormPersonalNoDefaultProps = __assign(__assign({}, FormTextDefaultProps), { validPattern: /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/ });var FormPersonalNo = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, skipPersonalNumberValidateCheck = _a.skipPersonalNumberValidateCheck, onValue = _a.onValue, onValidate = _a.onValidate, props = __rest(_a, ["className", "skipPersonalNumberValidateCheck", "onValue", "onValidate"]);
    var handleValue = React.useCallback(function (value) {
        var newValue = util.personalNoAutoDash(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    var handleValidate = React.useCallback(function (value) {
        if (util.notEmpty(value) && !skipPersonalNumberValidateCheck) {
            if (value.length === 14 && value.includes('-')) {
                var jumin = value
                    .replace(/-/g, '')
                    .split('')
                    .map(function (v) { return Number(v); });
                var ckarr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
                for (var i = 0; i < jumin.length - 1; i += 1) {
                    jumin[i] = jumin[i] * ckarr[i];
                }
                var juminlast = jumin[jumin.length - 1];
                var sum = 0;
                for (var i = 0; i < jumin.length - 1; i += 1) {
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
    return (React.createElement(FormText, __assign({ ref: ref, className: classNames(className, 'FormPersonalNo'), maxLength: 14, onValue: handleValue, onValidate: handleValidate }, props)));
});
FormPersonalNo.displayName = 'FormPersonalNo';
FormPersonalNo.defaultProps = FormPersonalNoDefaultProps;var FormCheckboxDefaultProps = {
    checked: false,
    value: 1,
    uncheckedValue: 0,
};var css_248z$e = ".FormItemBase .FormItemBase-InputLabel {\n  overflow: visible;\n  padding-left: 5px;\n}\n.FormItemBase .FormItemBase-InputLabel.MuiInputLabel-sizeSmall {\n  transform: translate(0, -1.5px) scale(0.7);\n}\n.FormItemBase .FormItemBase-Control-wrap {\n  position: relative;\n}\n.FormItemBase .FormItemBase-Control {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.FormItemBase.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 16px;\n}";
styleInject(css_248z$e);var FormItemBase = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    control = _a.control, controlHeight = _a.controlHeight, controlVerticalCenter = _a.controlVerticalCenter, required = _a.required, labelIcon = _a.labelIcon, label = _a.label, focused = _a.focused, helperText = _a.helperText, helperTextProps = _a.helperTextProps, error = _a.error, hideLabel = _a.hideLabel, hidden = _a.hidden, autoSize = _a.autoSize, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, sx = _a.sx;
    var inputRef = React.useRef(null);
    var realControlContainerRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFullWidth = _b.fullWidth, formColWithLabel = _b.formColWithLabel, formColWithHelperText = _b.formColWithHelperText;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var wrapStyle = React.useMemo(function () {
        var wrapStyle = {
            display: hidden ? 'none' : fullWidth ? 'block' : 'inline-flex',
            width: fullWidth ? '100%' : undefined,
        };
        if (formColWithLabel) {
            wrapStyle.marginTop = -20;
        }
        return wrapStyle;
    }, [formColWithLabel, fullWidth, hidden]);
    /********************************************************************************************************************
     * State - inputHeight
     * ******************************************************************************************************************/
    var _c = React.useState(0), inputHeight = _c[0], setInputHeight = _c[1];
    reactResizeDetector.useResizeDetector({
        targetRef: inputRef,
        handleWidth: false,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setInputHeight(((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) || 0);
        },
    });
    /********************************************************************************************************************
     * State - realControlHeight
     * ******************************************************************************************************************/
    var _d = React.useState(0), realControlHeight = _d[0], setRealControlHeight = _d[1];
    reactResizeDetector.useResizeDetector({
        targetRef: realControlContainerRef,
        handleWidth: false,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setRealControlHeight(((_b = (_a = realControlContainerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) || 0);
        },
    });
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var bottomMargin = React.useMemo(function () {
        var realHeight = realControlHeight || 0;
        var height = controlHeight || 0;
        var checkInputHeight = variant === 'standard' ? inputHeight + 16 : inputHeight;
        var bottomMargin = 0;
        if (height > checkInputHeight) {
            bottomMargin = height - checkInputHeight;
        }
        else {
            if (realHeight > 0 && height > 0 && realHeight > height) {
                bottomMargin = realHeight - height;
            }
        }
        return bottomMargin;
    }, [variant, realControlHeight, controlHeight, inputHeight]);
    var controlMarginTop = React.useMemo(function () {
        var topMargin = 0;
        if (inputHeight && controlHeight && controlVerticalCenter) {
            topMargin = inputHeight / 2 - controlHeight / 2;
        }
        var withLabelControlAddTopMargin;
        if (size === 'small') {
            withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 13;
        }
        else {
            withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 15;
        }
        var controlMarginTop = 0;
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
    }, [controlHeight, controlVerticalCenter, formColWithLabel, inputHeight, label, size, variant]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { style: wrapStyle },
        React.createElement(material.FormControl, { ref: ref, variant: 'standard', className: classNames(className, 'FormItemBase', !!label && 'with-label', "variant-".concat(variant), controlVerticalCenter && 'control-vertical-center', !!error && 'error'), style: style, color: color, error: error, focused: focused, sx: sx },
            !formColWithLabel && label && (React.createElement(material.InputLabel, { shrink: true, className: 'FormItemBase-InputLabel', size: size === 'medium' ? 'normal' : size, required: required }, labelIcon ? (React.createElement(React.Fragment, null,
                React.createElement(reactComponent.PdgIcon, { style: { verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 } }, labelIcon),
                React.createElement("span", { style: { verticalAlign: 'middle' } }, label))) : (label))),
            React.createElement("div", { className: 'FormItemBase-Control-wrap', style: { display: 'grid', marginTop: hideLabel ? 0 : undefined } }, autoSize ? (React.createElement(React.Fragment, null,
                variant === 'standard' && (React.createElement(material.Input, { ref: inputRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                variant === 'outlined' && (React.createElement(material.OutlinedInput, { ref: inputRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                variant === 'filled' && (React.createElement(material.FilledInput, { ref: inputRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                React.createElement("div", { style: { height: bottomMargin, visibility: 'hidden' } }),
                React.createElement("div", { ref: realControlContainerRef, className: 'FormItemBase-Control', style: {
                        width: fullWidth ? '100%' : 'auto',
                        display: 'grid',
                        marginTop: controlMarginTop,
                    } }, control))) : (React.createElement("div", { style: {
                    width: fullWidth ? '100%' : 'auto',
                    display: 'grid',
                    marginTop: controlMarginTop,
                } }, control))),
            !formColWithHelperText && helperText && (React.createElement(material.FormHelperText, __assign({ component: 'div' }, helperTextProps), helperText)))));
});
FormItemBase.displayName = 'FormItemBase';var FormCheckbox = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initChecked = _a.checked, initInputRef = _a.inputRef, initAction = _a.action, readOnly = _a.readOnly, initDisabled = _a.disabled, initHidden = _a.hidden, text = _a.text, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, initUncheckedValue = _a.uncheckedValue, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "name", "labelIcon", "label", "checked", "inputRef", "action", "readOnly", "disabled", "hidden", "text", "error", "helperText", "value", "data", "uncheckedValue", "exceptValue", "onChange", "onValidate", "className", "style", "sx"]);
    var id = React.useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var theme = material.useTheme();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var inputRef = React.useRef(null);
    var actionRef = React.useRef(null);
    var labelRef = React.useRef(null);
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    var _c = reactResizeDetector.useResizeDetector({
        targetRef: labelRef,
        handleWidth: true,
        handleHeight: true,
    }), width = _c.width, height = _c.height;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = reactHook.useAutoUpdateRefState(initData), dataRef = _f[0], setData = _f[2];
    var _g = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _g[0], disabled = _g[1], setDisabled = _g[2];
    var _h = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _h[0], hidden = _h[1], setHidden = _h[2];
    var _j = reactHook.useAutoUpdateRefState(initUncheckedValue, React.useCallback(function (newUncheckedValue) { return (newUncheckedValue == null ? 0 : newUncheckedValue); }, [])), uncheckedValueRef = _j[0], setUncheckedValue = _j[2];
    var _k = reactHook.useAutoUpdateRefState(initValue, React.useCallback(function (newValue) { return (newValue == null ? 0 : newValue); }, [])), valueRef = _k[0], setValue = _k[2];
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (checked) {
        if (onValidate) {
            var onValidateResult = onValidate(checked);
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
    var _l = reactHook.useAutoUpdateRefState(initChecked, React.useCallback(function (newChecked) { return !!newChecked; }, [])), checkedRef = _l[0], checked = _l[1], setChecked = _l[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(checked);
        if (onChange)
            onChange(checked);
        onValueChange(name, checked);
    }, [checked]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = React.useMemo(function () { return (__assign({ width: fullWidth ? '100%' : width || 100, paddingLeft: 3 }, initStyle)); }, [initStyle, fullWidth, width]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
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
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormCheckbox'; },
            getName: function () { return name; },
            getReset: function () { return !!initChecked; },
            reset: function () { return setChecked(initChecked); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            getUncheckedValue: function () { return uncheckedValueRef.current; },
            setUncheckedValue: setUncheckedValue,
            getChecked: function () { return checkedRef.current; },
            setChecked: setChecked,
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(checkedRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        checkedRef,
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        hiddenRef,
        id,
        initChecked,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setChecked,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setUncheckedValue,
        setValue,
        uncheckedValueRef,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (e, checked) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            setChecked(checked);
            util.nextTick(function () {
                onValueChangeByUser(name, checked);
                onRequestSearchSubmit(name, checked);
            });
        }
    }, [readOnly, setChecked, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'FormValueItem', 'FormCheckbox'), labelIcon: labelIcon, label: label, error: error, fullWidth: fullWidth, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React.createElement(material.FormControlLabel, { ref: labelRef, control: React.createElement(material.Checkbox, __assign({ name: name, color: color, size: size, inputRef: initInputRef ? initInputRef : inputRef, action: initAction ? initAction : actionRef, checked: checked, checkedIcon: React.createElement(iconsMaterial.CheckBox, { color: error ? 'error' : undefined }), icon: React.createElement(iconsMaterial.CheckBoxOutlineBlank, { color: error ? 'error' : undefined }), onChange: handleChange, disabled: disabled || readOnly }, props)), label: React.createElement(material.Typography, { color: error ? 'error' : readOnly || disabled ? theme.palette.text.disabled : undefined, whiteSpace: 'nowrap' }, text) }) }));
});
FormCheckbox.displayName = 'FormCheckbox';
FormCheckbox.defaultProps = FormCheckboxDefaultProps;var FormRadioGroupDefaultProps = {
    inline: true,
};var PADDING_LEFT = 3;
var FormRadioGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, initWidth = _a.width, labelIcon = _a.labelIcon, label = _a.label, inline = _a.inline, initLoading = _a.loading, nowrap = _a.nowrap, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, onLoadItems = _a.onLoadItems, onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "hidden", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "data", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"]);
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initFullWidth == null ? formFullWidth : initFullWidth), fullWidth = _c[0], setFullWidth = _c[1];
    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/
    var theme = material.useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var baseRef = React.useRef(null);
    var firstInputRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = React.useState(false), isOnGetItemLoading = _f[0], setIsOnGetItemLoading = _f[1];
    var _g = reactHook.useAutoUpdateState(initWidth || '100%'), width = _g[0], setWidth = _g[1];
    var _h = React.useState(), formColWrapRect = _h[0], setFormColWrapRect = _h[1];
    var _j = reactHook.useAutoUpdateRefState(initData), dataRef = _j[0], setData = _j[2];
    var _k = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _k[0], disabled = _k[1], setDisabled = _k[2];
    var _l = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _l[0], hidden = _l[1], setHidden = _l[2];
    var _m = reactHook.useAutoUpdateRefState(initLoading), loadingRef = _m[0], loading = _m[1], setLoading = _m[2];
    var _o = reactHook.useAutoUpdateRefState(initItems), itemsRef = _o[0], items = _o[1], setItems = _o[2];
    /********************************************************************************************************************
     * State - radioGroupNoWrapRect (ResizeDetector)
     * ******************************************************************************************************************/
    var _p = React.useState(), radioGroupNoWrapRect = _p[0], setRadioGroupNoWrapRect = _p[1];
    var resizeWidthDetectorRef = reactResizeDetector.useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        onResize: function () {
            var _a;
            setRadioGroupNoWrapRect((_a = resizeWidthDetectorRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect());
        },
    }).ref;
    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/
    var _q = reactResizeDetector.useResizeDetector(), height = _q.height, resizeHeightDetectorRef = _q.ref;
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    var _r = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _r[0], value = _r[1], setValue = _r[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = React.useMemo(function () { return (__assign({ width: width, paddingLeft: PADDING_LEFT }, initStyle)); }, [initStyle, width]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (!fullWidth || initWidth) {
            var findParentByClassName_1 = function (element, className) {
                var parent = element.parentElement;
                if (parent) {
                    if ((parent.className || '').includes(className)) {
                        return parent;
                    }
                    else {
                        return findParentByClassName_1(parent, className);
                    }
                }
            };
            var wrap_1 = baseRef.current && findParentByClassName_1(baseRef.current, 'FormCol-Children-Wrap');
            if (wrap_1) {
                var resize_1 = function () {
                    if (resizeWidthDetectorRef.current) {
                        setRadioGroupNoWrapRect(resizeWidthDetectorRef.current.getBoundingClientRect());
                    }
                    setFormColWrapRect(wrap_1.getBoundingClientRect());
                };
                window.addEventListener('resize', resize_1);
                resize_1();
                return function () {
                    window.removeEventListener('resize', resize_1);
                };
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fullWidth, initWidth]);
    React.useEffect(function () {
        var width;
        var fullWidth = initFullWidth == null ? formFullWidth : initFullWidth;
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
        var formColWrapPaddingLeft = radioGroupNoWrapRect && formColWrapRect ? radioGroupNoWrapRect.left - formColWrapRect.left : 0;
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
    var focus = React.useCallback(function () {
        var _a;
        (_a = firstInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormRadioGroup'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
            getItems: function () { return itemsRef.current; },
            setItems: setItems,
            getLoading: function () { return !!loadingRef.current; },
            setLoading: setLoading,
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        itemsRef,
        loadingRef,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        setValue,
        validate,
        valueRef,
    ]);
    React.useEffect(function () {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (e) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = e.target.value;
            if (items) {
                var item = items.find(function (_a) {
                    var value = _a.value;
                    return value.toString() === finalValue_1;
                });
                if (item) {
                    finalValue_1 = item.value;
                }
            }
            finalValue_1 = getFinalValue(finalValue_1);
            if (value !== finalValue_1) {
                setValue(finalValue_1, true);
                util.nextTick(function () {
                    onValueChangeByUser(name, finalValue_1);
                    onRequestSearchSubmit(name, finalValue_1);
                });
            }
        }
    }, [readOnly, items, getFinalValue, value, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormItemBase, { focused: focused, ref: baseRef, className: classNames(className, 'FormValueItem', 'FormRadioGroup'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, fullWidth: fullWidth, required: required, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React.createElement(React.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React.createElement("div", { ref: resizeWidthDetectorRef, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React.createElement(material.RadioGroup, __assign({}, props, { style: { marginTop: 10, display: 'inline-flex', flexWrap: 'nowrap' }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), items.map(function (_a, idx) {
                    var value = _a.value, label = _a.label, itemDisabled = _a.disabled;
                    return (React.createElement(material.FormControlLabel, { ref: idx === 0 ? resizeHeightDetectorRef : null, key: idx, control: React.createElement(material.Radio, { icon: React.createElement(iconsMaterial.RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React.createElement(iconsMaterial.RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size }), label: label, style: { color: error ? theme.palette.error.main : '', marginTop: -10, whiteSpace: 'nowrap' }, value: value, disabled: disabled || readOnly || itemDisabled }));
                })))),
            React.createElement("div", null,
                React.createElement(material.RadioGroup, __assign({}, props, { style: {
                        marginTop: 10,
                        display: 'inline-flex',
                        visibility: width == null ? 'hidden' : undefined,
                        position: width == null ? 'absolute' : undefined,
                        flexWrap: nowrap ? 'nowrap' : undefined,
                    }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), isOnGetItemLoading || loading ? (React.createElement("div", { style: { position: 'relative' } },
                    React.createElement(material.FormControlLabel, { ref: resizeHeightDetectorRef, label: '', control: React.createElement(material.Radio, { color: color, size: size }), style: { marginTop: -10, visibility: 'hidden' } }),
                    React.createElement("div", { style: { position: 'absolute', left: 0, top: 1, opacity: 0.54 } },
                        React.createElement(material.CircularProgress, { size: size === 'small' ? 12 : 16, color: 'inherit' })))) : (React.createElement(React.Fragment, null, items &&
                    items.map(function (_a, idx) {
                        var value = _a.value, label = _a.label, itemDisabled = _a.disabled;
                        return (React.createElement(material.FormControlLabel, { key: idx, control: React.createElement(material.Radio, { icon: React.createElement(iconsMaterial.RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React.createElement(iconsMaterial.RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size, inputRef: idx === 0 ? firstInputRef : null }), label: label, style: { color: error ? theme.palette.error.main : '', marginTop: -10, whiteSpace: 'nowrap' }, value: value, disabled: disabled || readOnly || itemDisabled }));
                    })))))) }));
}));
FormRadioGroup.displayName = 'FormRadioGroup';
FormRadioGroup.defaultProps = FormRadioGroupDefaultProps;var FormToggleButtonGroupDefaultProps = {
    type: 'button',
    formValueSeparator: ',',
};var css_248z$d = ".FormToggleButtonGroup .ToggleButton {\n  display: inline-block;\n  padding: 0 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton, .FormToggleButtonGroup.type-radio .ToggleButton {\n  padding-left: 3px;\n  padding-right: 5px;\n  border: 0 !important;\n  margin-left: 0 !important;\n  justify-content: flex-start;\n  display: flex;\n  background-color: transparent !important;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton:not(:last-child), .FormToggleButtonGroup.type-radio .ToggleButton:not(:last-child) {\n  margin-right: 5px;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,\n.FormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-unchecked__, .FormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__,\n.FormToggleButtonGroup.type-radio .ToggleButton .__checkbox-unchecked__ {\n  margin-right: 3px;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__, .FormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__ {\n  display: none;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-checked__, .FormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-checked__ {\n  display: block;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-unchecked__, .FormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-unchecked__ {\n  display: none;\n}\n.FormToggleButtonGroup:not(.with-label).variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 15px;\n  margin-bottom: -15px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-filled .FormItemBase-Control-wrap {\n  margin-top: 15px;\n  margin-bottom: -15px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 28px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 13px;\n  margin-bottom: -13px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 24px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 13px;\n  margin-bottom: -13px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 31px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 26px;\n}\n.FormToggleButtonGroup.with-label.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup.with-label.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup.with-label.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 28px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 24px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 31px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 26px;\n}\n\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 28px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 24px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 31px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 26px;\n}";
styleInject(css_248z$d);var FormToggleButtonGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, type = _a.type, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, notAllowEmptyValue = _a.notAllowEmptyValue, exceptValue = _a.exceptValue, initWidth = _a.width, multiple = _a.multiple, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, initHidden = _a.hidden, itemWidth = _a.itemWidth, onLoadItems = _a.onLoadItems, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var id = React.useId();
    var labelId = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var refForResizeWidthDetect = React.useRef(null);
    var refForButtonResizeHeightDetect = React.useRef(null);
    var refForLoadingResizeHeightDetect = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWidth = _b.formColWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var fullWidth = React.useMemo(function () { return (type === 'checkbox' || type === 'radio' ? true : initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth, type]);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/
    var theme = material.useTheme();
    /********************************************************************************************************************
     * State - width (ResizeDetector)
     * ******************************************************************************************************************/
    var _d = React.useState(), width = _d[0], setWidth = _d[1];
    reactResizeDetector.useResizeDetector({
        targetRef: refForResizeWidthDetect,
        handleWidth: true,
        onResize: function () {
            var _a, _b;
            setWidth((_b = (_a = refForResizeWidthDetect.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.width);
        },
    });
    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/
    var _e = React.useState(), height = _e[0], setHeight = _e[1];
    reactResizeDetector.useResizeDetector({
        targetRef: refForButtonResizeHeightDetect,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setHeight((_b = (_a = refForButtonResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height);
        },
    });
    reactResizeDetector.useResizeDetector({
        targetRef: refForLoadingResizeHeightDetect,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setHeight((_b = (_a = refForLoadingResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height);
        },
    });
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _f = React.useState(false), isOnGetItemLoading = _f[0], setIsOnGetItemLoading = _f[1];
    var _g = reactHook.useAutoUpdateState(initError), error = _g[0], setError = _g[1];
    var _h = React.useState(), errorHelperText = _h[0], setErrorHelperText = _h[1];
    var _j = reactHook.useAutoUpdateRefState(initData), dataRef = _j[0], setData = _j[2];
    var _k = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _k[0], disabled = _k[1], setDisabled = _k[2];
    var _l = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _l[0], hidden = _l[1], setHidden = _l[2];
    var _m = reactHook.useAutoUpdateRefState(initLoading), loadingRef = _m[0], loading = _m[1], setLoading = _m[2];
    var _o = reactHook.useAutoUpdateRefState(initItems), itemsRef = _o[0], items = _o[1], setItems = _o[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var itemsValues = React.useMemo(function () {
        if (items) {
            return items.reduce(function (res, _a) {
                var value = _a.value;
                res["".concat(value)] = value;
                return res;
            }, {});
        }
        else {
            return {};
        }
    }, [items]);
    var style = React.useMemo(function () {
        var finalWidth;
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
        return __assign({ width: finalWidth }, initStyle);
    }, [formColWidth, fullWidth, initStyle, initWidth, isOnGetItemLoading, width]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        var finalValue = value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (finalValue != null && util.notEmpty(finalValue)) {
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
                if (util.notEmpty(finalValue)) {
                    finalValue = finalValue[0];
                }
                else {
                    finalValue = undefined;
                }
            }
        }
        if (util.notEmpty(itemsValues)) {
            if (finalValue != null && util.notEmpty(finalValue)) {
                if (multiple) {
                    if (Array.isArray(finalValue)) {
                        finalValue = finalValue.map(function (v) {
                            var realValue = itemsValues["".concat(v)];
                            return realValue != null ? realValue : v;
                        });
                    }
                }
                else {
                    var realValue = itemsValues["".concat(finalValue)];
                    if (realValue != null && finalValue !== realValue) {
                        finalValue = realValue;
                    }
                }
            }
        }
        finalValue = onValue ? onValue(finalValue) : finalValue;
        return util.equal(value, finalValue) ? value : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    var _p = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _p[0], value = _p[1], setValue = _p[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    reactHook.useFirstSkipEffect(function () {
        setValue(valueRef.current);
    }, [multiple]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(function () {
        if (notAllowEmptyValue) {
            if (items && util.notEmpty(items)) {
                var setFirstItem = false;
                if (Array.isArray(value)) {
                    if (util.empty(value)) {
                        setFirstItem = true;
                    }
                }
                else {
                    if (value == null) {
                        setFirstItem = true;
                    }
                }
                if (setFirstItem) {
                    setValue((multiple ? [items[0].value] : items[0].value));
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, value, multiple, notAllowEmptyValue]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a;
        (_a = refForButtonResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [refForButtonResizeHeightDetect]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var commands = {
                getType: function () { return 'FormToggleButtonGroup'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () { return setValue(initValue); },
                getValue: function () { return valueRef.current; },
                setValue: setValue,
                getData: function () { return dataRef.current; },
                setData: setData,
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return !!disabledRef.current; },
                setDisabled: setDisabled,
                isHidden: function () { return !!hiddenRef.current; },
                setHidden: setHidden,
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(valueRef.current); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueSeparator: function () { return formValueSeparator; },
                isFormValueSort: function () { return !!formValueSort; },
                getItems: function () { return itemsRef.current; },
                setItems: setItems,
                isMultiple: function () { return !!multiple; },
                getLoading: function () { return !!loadingRef.current; },
                setLoading: setLoading,
            };
            if (ref) {
                if (typeof ref === 'function') {
                    ref(commands);
                }
                else {
                    ref.current = commands;
                }
            }
            if (onAddValueItem)
                onAddValueItem(id, commands);
            return function () {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(null);
                    }
                    else {
                        ref.current = null;
                    }
                }
                if (onRemoveValueItem)
                    onRemoveValueItem(id);
            };
        }
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueSeparator,
        formValueSort,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        itemsRef,
        loadingRef,
        multiple,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (e, newValue) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = newValue;
            if (notAllowEmptyValue) {
                if (multiple) {
                    if (util.empty(finalValue_1)) {
                        if (Array.isArray(valueRef.current) && valueRef.current.length > 0) {
                            finalValue_1 = [valueRef.current[0]];
                        }
                    }
                }
                else {
                    if (finalValue_1 == null) {
                        finalValue_1 = valueRef.current;
                    }
                }
            }
            finalValue_1 = getFinalValue(finalValue_1);
            if (!util.equal(valueRef.current, finalValue_1)) {
                setValue(finalValue_1, true);
                util.nextTick(function () {
                    onValueChangeByUser(name, finalValue_1);
                    onRequestSearchSubmit(name, finalValue_1);
                });
            }
        }
    }, [
        readOnly,
        notAllowEmptyValue,
        getFinalValue,
        valueRef,
        multiple,
        setValue,
        onValueChangeByUser,
        name,
        onRequestSearchSubmit,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var formControlBaseProps = {};
    if (focused) {
        formControlBaseProps.focused = true;
    }
    var buttons = React.useMemo(function () {
        var finalItemWidth = undefined;
        if (type === 'button' && !fullWidth) {
            finalItemWidth = 'auto';
        }
        else if (!fullWidth || type === 'radio' || type === 'checkbox') {
            finalItemWidth = itemWidth || 'auto';
        }
        var buttonStyle = {
            borderColor: error ? theme.palette.error.main : '',
            color: error ? theme.palette.error.main : '',
            width: finalItemWidth,
        };
        return (items &&
            items.map(function (_a, idx) {
                var value = _a.value, label = _a.label, itemDisabled = _a.disabled, itemColor = _a.color;
                return (React.createElement(material.ToggleButton, { ref: idx === 0 ? refForButtonResizeHeightDetect : undefined, key: idx, size: size, className: 'ToggleButton', value: value, color: itemColor || color, disabled: disabled || readOnly || itemDisabled, style: buttonStyle, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } },
                    type === 'checkbox' ? (React.createElement(React.Fragment, null,
                        React.createElement(material.Icon, { className: '__checkbox-unchecked__' }, "check_box_outline_blank"),
                        React.createElement(material.Icon, { className: '__checkbox-checked__' }, "check_box"))) : (type === 'radio' && (React.createElement(React.Fragment, null,
                        React.createElement(React.Fragment, null,
                            React.createElement(material.Icon, { className: '__checkbox-unchecked__' }, "radio_button_unchecked"),
                            React.createElement(material.Icon, { className: '__checkbox-checked__' }, "radio_button_checked"))))),
                    label));
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
        setFocused,
        size,
        theme.palette.error.main,
        type,
    ]);
    return (React.createElement(FormItemBase, __assign({}, formControlBaseProps, { className: classNames(className, 'FormValueItem', 'FormToggleButtonGroup', "variant-".concat(variant), "size-".concat(size), !!label && 'with-label', !!fullWidth && 'full-width', "type-".concat(type)), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, required: required, fullWidth: fullWidth, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || 0, controlVerticalCenter: isOnGetItemLoading || loading, control: isOnGetItemLoading || loading ? (React.createElement("div", { style: { opacity: 0.54 }, ref: refForLoadingResizeHeightDetect },
            React.createElement(material.CircularProgress, { size: 16, color: 'inherit' }))) : (React.createElement(React.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React.createElement("div", { ref: refForResizeWidthDetect, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React.createElement(material.ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple }, buttons))),
            React.createElement(material.ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple, fullWidth: fullWidth, value: value == null ? null : value, onChange: handleChange, style: {
                    width: !fullWidth && formColWidth && typeof width === 'number' && width > formColWidth
                        ? formColWidth
                        : undefined,
                    flexWrap: type === 'checkbox' || type === 'radio' ? 'wrap' : 'nowrap',
                }, "aria-labelledby": util.notEmpty(label) ? labelId : undefined }, isOnGetItemLoading || loading || !items || util.empty(items) ? (React.createElement(material.ToggleButton, { ref: refForButtonResizeHeightDetect, size: size, className: 'ToggleButton', disabled: disabled || readOnly, value: '', style: { visibility: 'hidden' } })) : (buttons)))) })));
}));
FormToggleButtonGroup.displayName = 'FormToggleButtonGroup';
FormToggleButtonGroup.defaultProps = FormToggleButtonGroupDefaultProps;var FormRatingDefaultProps = {
    value: 0,
    precision: 1,
};var FormRating = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    precision = _a.precision, highlightSelectedOnly = _a.highlightSelectedOnly, icon = _a.icon, emptyIcon = _a.emptyIcon, max = _a.max, initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, onValue = _a.onValue, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var ratingRef = React.useRef(null);
    var inputRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = reactHook.useAutoUpdateRefState(initData), dataRef = _f[0], setData = _f[2];
    var _g = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _g[0], disabled = _g[1], setDisabled = _g[2];
    var _h = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _h[0], hidden = _h[1], setHidden = _h[2];
    /********************************************************************************************************************
     * State - width, height
     * ******************************************************************************************************************/
    var _j = reactResizeDetector.useResizeDetector({
        targetRef: ratingRef,
        handleWidth: true,
        handleHeight: true,
    }), width = _j.width, height = _j.height;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = React.useCallback(function (value) {
        if (required && (util.empty(value) || value === 0)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        var finalValue = value || 0;
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    var _k = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _k[0], value = _k[1], setValue = _k[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = React.useMemo(function () { return (__assign({ width: width || 100 }, initStyle)); }, [initStyle, width]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(function () {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormRating'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (e, value) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = setValue(value);
            util.nextTick(function () {
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [readOnly, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'FormValueItem', 'FormRating'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, required: required, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 21 : 26), controlVerticalCenter: true, control: React.createElement(material.Rating, { ref: ratingRef, size: size === 'medium' ? 'large' : 'medium', name: name, precision: precision, highlightSelectedOnly: highlightSelectedOnly, value: value, disabled: disabled || readOnly, max: max, icon: React.createElement(reactComponent.PdgIcon, { color: color, size: 'inherit' }, icon ? icon : 'Star'), emptyIcon: React.createElement(reactComponent.PdgIcon, { size: 'inherit' }, emptyIcon ? emptyIcon : 'StarBorder'), onChange: handleChange, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } }) }));
});
FormRating.displayName = 'FormRating';
FormRating.defaultProps = FormRatingDefaultProps;var FormTextEditorDefaultProps = {
    menubar: true,
    height: 500,
    value: '',
};var css_248z$c = ".FormTextEditor.initializing textarea {\n  display: none;\n}\n.FormTextEditor.error .tox-tinymce {\n  border-color: #d32f2f;\n}\n\n.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item {\n  padding-right: 20px !important;\n}\n\n.tox-notifications-container {\n  display: none;\n}";
styleInject(css_248z$c);var FormTextEditor = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    // ---------------------------------------------------------------------------------------------------------------
    apiKey = _a.apiKey, toolbar = _a.toolbar, 
    //----------------------------------------------------------------------------------------------------------------
    menubar = _a.menubar, height = _a.height, initHidden = _a.hidden, onImageUpload = _a.onImageUpload, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onRemoveValueItem = _b.onRemoveValueItem, onValueChangeByUser = _b.onValueChangeByUser;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var editorRef = React.useRef();
    var keyDownTime = React.useRef(0);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = React.useState(false), initialized = _f[0], setInitialized = _f[1];
    var _g = reactHook.useAutoUpdateRefState(initData), dataRef = _g[0], setData = _g[2];
    var _h = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _h[0], disabled = _h[1], setDisabled = _h[2];
    var _j = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _j[0], hidden = _j[1], setHidden = _j[2];
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        var _a;
        if (required && util.empty((_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.getContent())) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        return value || '';
    }, []);
    var _k = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _k[0], value = _k[1], setValue = _k[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a;
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [editorRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormTextEditor'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorText) {
                return setErrorErrorHelperText(error, error ? errorText : undefined);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleEditorChange = React.useCallback(function (value) {
        setValue(value);
        if (new Date().getTime() - keyDownTime.current < 300) {
            util.nextTick(function () {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, value);
            });
        }
    }, [name, onValueChangeByUser, setValue]);
    var handleKeyDown = React.useCallback(function () {
        keyDownTime.current = new Date().getTime();
    }, []);
    var handleImageUpload = React.useCallback(function (blobInfo, progress) {
        return new Promise(function (resolve, reject) {
            if (onImageUpload) {
                onImageUpload(blobInfo.blob(), function (url) {
                    resolve(url);
                }, function (err) { return reject(err); }, progress);
            }
            else {
                reject('onImageUpload not implemented.');
            }
        });
    }, [onImageUpload]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'FormValueItem', 'FormTextEditor', !initialized && 'initializing'), labelIcon: labelIcon, label: label, error: error, required: required, fullWidth: true, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: { width: '100%' }, hidden: hidden, controlHeight: height, control: React.createElement(React.Fragment, null,
            !initialized ? React.createElement(material.Skeleton, { variant: 'rectangular', width: '100%', height: height }) : null,
            React.createElement(tinymceReact.Editor, { apiKey: apiKey, value: value, disabled: readOnly || disabled, init: {
                    height: height,
                    menubar: menubar,
                    readonly: true,
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
                }, onInit: function (evt, editor) {
                    editorRef.current = editor;
                    setTimeout(function () { return setInitialized(true); }, 10);
                }, onEditorChange: handleEditorChange, onKeyDown: handleKeyDown, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } })) }));
});
FormTextEditor.displayName = 'FormTextEditor';
FormTextEditor.defaultProps = FormTextEditorDefaultProps;var FormAutocompleteDefaultProps = {
    formValueSeparator: ',',
    noOptionsText: '항목이 없습니다',
};var FormAutocomplete = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, width = _a.width, placeholder = _a.placeholder, multiple = _a.multiple, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, disablePortal = _a.disablePortal, noOptionsText = _a.noOptionsText, loadingText = _a.loadingText, limitTags = _a.limitTags, openOnFocus = _a.openOnFocus, disableClearable = _a.disableClearable, async = _a.async, initHidden = _a.hidden, onLoadItems = _a.onLoadItems, onAsyncLoadValueItem = _a.onAsyncLoadValueItem, onRenderItem = _a.onRenderItem, onRenderTag = _a.onRenderTag, onAddItem = _a.onAddItem, getOptionDisabled = _a.getOptionDisabled, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var textFieldRef = React.useRef(null);
    var asyncTimerRef = React.useRef(null);
    var oldComponentValueRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = React.useState(false), isOnGetItemLoading = _c[0], setIsOnGetItemLoading = _c[1];
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = React.useState(undefined), inputValue = _f[0], setInputValue = _f[1];
    var _g = reactHook.useAutoUpdateRefState(initData), dataRef = _g[0], setData = _g[2];
    var _h = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _h[0], disabled = _h[1], setDisabled = _h[2];
    var _j = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _j[0], hidden = _j[1], setHidden = _j[2];
    var _k = reactHook.useAutoUpdateRefState(initLoading), loadingRef = _k[0], loading = _k[1], setLoading = _k[2];
    var _l = reactHook.useAutoUpdateRefState(initItems), itemsRef = _l[0], items = _l[1], setItems = _l[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var itemsValues = React.useMemo(function () {
        if (items) {
            return items.reduce(function (res, _a) {
                var value = _a.value;
                res[value.toString()] = value;
                return res;
            }, {});
        }
        else {
            return {};
        }
    }, [items]);
    var style = React.useMemo(function () {
        var style = __assign({ minWidth: 120 }, initStyle);
        if (hidden) {
            style.display = 'none';
        }
        if (width != null) {
            style.width = width;
        }
        return style;
    }, [initStyle, width, hidden]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        var finalValue = value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (finalValue != null && util.notEmpty(finalValue)) {
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
                if (util.notEmpty(finalValue)) {
                    finalValue = finalValue[0];
                }
                else {
                    finalValue = undefined;
                }
            }
        }
        if (util.notEmpty(itemsValues)) {
            if (finalValue != null && util.notEmpty(finalValue)) {
                if (multiple) {
                    if (Array.isArray(finalValue)) {
                        finalValue = finalValue.map(function (v) {
                            var realValue = itemsValues[v.toString()];
                            return realValue != null ? realValue : v;
                        });
                    }
                }
                else {
                    var realValue = itemsValues[finalValue.toString()];
                    if (realValue != null && finalValue !== realValue) {
                        finalValue = realValue;
                    }
                }
            }
        }
        return onValue ? onValue(finalValue) : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    var _m = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _m[0], value = _m[1], setValue = _m[2];
    var _o = React.useState(null), valueItem = _o[0], setValueItem = _o[1];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    reactHook.useFirstSkipEffect(function () {
        setValue(getFinalValue(valueRef.current));
    }, [multiple]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var componentValue = React.useMemo(function () {
        var finalValue = value;
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
        var newComponentValue = (multiple ? [] : null);
        if (util.notEmpty(finalValue)) {
            if (items) {
                if (Array.isArray(finalValue)) {
                    newComponentValue = items.filter(function (info) { return Array.isArray(finalValue) && finalValue.includes(info.value); });
                }
                else {
                    newComponentValue = (items.find(function (info) { return info.value === value; }) ||
                        (multiple ? [] : null));
                }
            }
            if (util.empty(newComponentValue) && valueItem) {
                if (Array.isArray(finalValue)) {
                    if (Array.isArray(valueItem)) {
                        newComponentValue = valueItem.filter(function (info) { return Array.isArray(finalValue) && finalValue.includes(info.value); });
                    }
                }
                else {
                    if (!Array.isArray(valueItem) && finalValue === valueItem.value) {
                        newComponentValue = valueItem;
                    }
                }
            }
        }
        if (oldComponentValueRef.current && newComponentValue && util.equal(oldComponentValueRef.current, newComponentValue)) {
            return oldComponentValueRef.current;
        }
        else {
            oldComponentValueRef.current = newComponentValue;
            return newComponentValue;
        }
    }, [value, multiple, items, valueItem]);
    React.useEffect(function () {
        if (async && onAsyncLoadValueItem) {
            if (value != null) {
                if (!valueItem) {
                    onAsyncLoadValueItem(value).then(function (valueItem) {
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
    var showOnGetItemLoading = React.useCallback(function () {
        setIsOnGetItemLoading(true);
    }, []);
    var hideOnGetItemLoading = React.useCallback(function () {
        setIsOnGetItemLoading(false);
    }, []);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (!async && onLoadItems) {
            showOnGetItemLoading();
            onLoadItems().then(function (items) {
                setItems(items);
                hideOnGetItemLoading();
            });
        }
        return function () {
            if (asyncTimerRef.current) {
                clearTimeout(asyncTimerRef.current);
                asyncTimerRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(function () {
        if (async && onLoadItems) {
            if (asyncTimerRef.current) {
                clearTimeout(asyncTimerRef.current);
                asyncTimerRef.current = null;
            }
            if (inputValue != null) {
                showOnGetItemLoading();
                asyncTimerRef.current = setTimeout(function () {
                    asyncTimerRef.current = null;
                    onLoadItems(inputValue)
                        .then(function (items) {
                        if (componentValue) {
                            if (Array.isArray(componentValue)) {
                                var exceptValues_1 = componentValue.map(function (info) { return info.value; });
                                setItems(__spreadArray(__spreadArray([], componentValue, true), items.filter(function (info) { return !exceptValues_1.includes(info.value); }), true));
                            }
                            else {
                                var exceptValue_1 = componentValue.value;
                                setItems(__spreadArray([componentValue], items.filter(function (info) { return info.value !== exceptValue_1; }), true));
                            }
                        }
                        else {
                            setItems(items);
                        }
                    })
                        .finally(function () {
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
    var focus = React.useCallback(function () {
        var _a;
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var commands = {
                getType: function () { return 'FormAutocomplete'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () { return setValue(initValue); },
                getValue: function () { return valueRef.current; },
                setValue: function (newValue) { return setValue(newValue); },
                getData: function () { return dataRef.current; },
                setData: function (data) { return setData(data); },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return !!disabledRef.current; },
                setDisabled: function (disabled) { return setDisabled(disabled); },
                isHidden: function () { return !!hiddenRef.current; },
                setHidden: function (hidden) { return setHidden(hidden); },
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(valueRef.current); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueSeparator: function () { return formValueSeparator; },
                isFormValueSort: function () { return !!formValueSort; },
                getItems: function () { return itemsRef.current; },
                setItems: function (items) { return setItems(items); },
                isMultiple: function () { return !!multiple; },
                getLoading: function () { return !!loadingRef.current; },
                setLoading: function (loading) { return setLoading(loading); },
            };
            if (ref) {
                if (typeof ref === 'function') {
                    ref(commands);
                }
                else {
                    ref.current = commands;
                }
            }
            if (onAddValueItem)
                onAddValueItem(id, commands);
            return function () {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(null);
                    }
                    else {
                        ref.current = null;
                    }
                }
                if (onRemoveValueItem)
                    onRemoveValueItem(id);
            };
        }
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueSeparator,
        formValueSort,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        itemsRef,
        loadingRef,
        multiple,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setItems,
        setLoading,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (componentValue, reason, details) {
        var go = function () {
            var newValue = undefined;
            if (componentValue) {
                if (componentValue) {
                    if (Array.isArray(componentValue)) {
                        newValue = componentValue.map(function (item) { return item.value; });
                    }
                    else {
                        newValue = componentValue.value;
                    }
                }
            }
            var finalValue = getFinalValue(newValue);
            if (!util.equal(valueRef.current, finalValue)) {
                setValue(finalValue, true);
                setValueItem(componentValue);
                util.nextTick(function () {
                    onValueChangeByUser(name, finalValue);
                    onRequestSearchSubmit(name, finalValue);
                });
            }
        };
        if (multiple && details && ['createOption', 'selectOption'].includes(reason)) {
            if (onAddItem) {
                var result = onAddItem(details.option);
                if (result instanceof Promise) {
                    result.then(function (add) {
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
    }, [multiple, getFinalValue, valueRef, setValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]);
    var handleGetOptionDisabled = React.useCallback(function (option) {
        if (getOptionDisabled) {
            return option.disabled || getOptionDisabled(option);
        }
        else {
            return !!option.disabled;
        }
    }, [getOptionDisabled]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Autocomplete, { options: items || [], className: classNames(className, 'FormValueItem', 'FormAutocomplete'), sx: sx, multiple: multiple, fullWidth: !width && fullWidth, openOnFocus: openOnFocus, disableClearable: disableClearable, disablePortal: disablePortal, noOptionsText: noOptionsText, value: componentValue, style: style, isOptionEqualToValue: function (option, value) { return option.value === value.value; }, getOptionDisabled: handleGetOptionDisabled, disabled: disabled, readOnly: readOnly, loading: loading || isOnGetItemLoading, loadingText: loadingText, limitTags: limitTags, onChange: function (e, value, reason, details) { return handleChange(value, reason, details); }, renderOption: function (props, option) { return (React.createElement("li", __assign({}, props, { key: "".concat(option.value) }), onRenderItem ? onRenderItem(option) : option.label)); }, onInputChange: function (event, newInputValue, reason) {
            if (reason === 'input') {
                setInputValue(newInputValue);
            }
            else if (reason === 'reset') {
                setInputValue(undefined);
            }
        }, renderTags: function (value, getTagProps) {
            return value.map(function (option, index) { return (React.createElement(material.Chip, __assign({ size: 'small', label: onRenderTag ? onRenderTag(option) : option.label }, getTagProps({ index: index })))); });
        }, renderInput: function (params) { return (React.createElement(FormTextField, __assign({}, params, { ref: textFieldRef, name: name, variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, labelShrink: labelShrink, required: required, focused: focused, error: error, readOnly: readOnly, helperText: error ? errorHelperText : helperText, placeholder: placeholder, noFormValueItem: true, InputProps: __assign(__assign({}, params.InputProps), { endAdornment: (React.createElement(React.Fragment, null,
                    loading || isOnGetItemLoading ? React.createElement(material.CircularProgress, { color: 'inherit', size: 20 }) : null,
                    params.InputProps.endAdornment)) }), inputProps: readOnly || disabled ? __assign(__assign({}, params.inputProps), { tabIndex: -1 }) : params.inputProps }))); } }));
}));
FormAutocomplete.displayName = 'FormAutocomplete';
FormAutocomplete.defaultProps = FormAutocompleteDefaultProps;var FormDatePickerDefaultProps = {};var PrivateDatePickerDefaultProps = {
    showDaysOutsideCurrentMonth: true,
    align: 'center',
    value: null,
};var PrivateStaticDatePickerDefaultProps = {};var PrivateYearSelectDefaultProps = {};var css_248z$b = ".PrivateYearSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n}\n.PrivateYearSelect button {\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 18px;\n}";
styleInject(css_248z$b);var PrivateToggleButtonDefaultProps = {};var PrivateToggleButton = React.forwardRef(function (_a, ref) {
    var children = _a.children, initClassName = _a.className, selected = _a.selected, activated = _a.activated, outlined = _a.outlined, props = __rest(_a, ["children", "className", "selected", "activated", "outlined"]);
    var theme = material.useTheme();
    var className = React.useMemo(function () { return classNames(initClassName, selected && 'selected', activated && 'activated', outlined && 'outlined'); }, [activated, initClassName, outlined, selected]);
    var sx = React.useMemo(function () {
        var newSx = {
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
    return (React.createElement(material.Button, __assign({}, props, { ref: ref, sx: sx, variant: 'text', className: classNames(className, selected && 'selected') }), children));
});
PrivateToggleButton.displayName = 'PrivateToggleButton';
PrivateToggleButton.defaultProps = PrivateToggleButtonDefaultProps;var YEARS$1 = new Array(200).fill(0);
for (var i$5 = 0; i$5 < 200; i$5 += 1) {
    YEARS$1[i$5] = 1900 + i$5;
}
var PrivateYearSelect = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var selectYear = _a.selectYear, activeYear = _a.activeYear, availableDate = _a.availableDate, onSelect = _a.onSelect;
    var containerRef = React.useRef(null);
    var simpleBarRef = React.useRef(null);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        var _a, _b, _c, _d, _e;
        var activeEls = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("private-year-select-value-".concat(activeYear));
        if (activeEls && activeEls.length > 0) {
            var activeEl = activeEls[0];
            var activeRect = activeEl.getBoundingClientRect();
            var containerRect = (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            var simpleBarRect = (_c = simpleBarRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
            if (containerRect && simpleBarRect && activeRect) {
                var scrollTop = ((_d = simpleBarRef.current) === null || _d === void 0 ? void 0 : _d.scrollTop) || 0;
                (_e = simpleBarRef.current) === null || _e === void 0 ? void 0 : _e.scrollTo({
                    left: 0,
                    top: activeRect.top - containerRect.top - containerRect.height / 2 + activeRect.height / 2 + scrollTop,
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var today = dayjs().startOf('date');
    return (React.createElement("div", { ref: containerRef, className: 'PrivateYearSelect' },
        React.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
            React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS$1.map(function (y) {
                var isToday = y === today.year();
                var isActive = y === activeYear;
                var isSelected = y === selectYear;
                var disabled = (!!availableDate[0] && y < availableDate[0].year) || (!!availableDate[1] && y > availableDate[1].year);
                return (React.createElement(material.Grid, { key: y, item: true, xs: 3 },
                    React.createElement(PrivateToggleButton, { className: "private-year-select-value-".concat(y), fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: function () { return onSelect(y); } }, y)));
            })))));
};
PrivateYearSelect.displayName = 'PrivateYearSelect';
PrivateYearSelect.defaultProps = PrivateYearSelectDefaultProps;var PrivateMonthSelectDefaultProps = {};var css_248z$a = ".PrivateMonthSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n}\n.PrivateMonthSelect button {\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 18px;\n}";
styleInject(css_248z$a);var MONTHS$1 = new Array(12).fill(0);
for (var i$4 = 0; i$4 < 12; i$4 += 1) {
    MONTHS$1[i$4] = i$4;
}
var PrivateMonthSelect = function (_a) {
    var year = _a.year, selectYear = _a.selectYear, selectMonth = _a.selectMonth, activeMonth = _a.activeMonth, availableDate = _a.availableDate, onSelect = _a.onSelect;
    var today = dayjs().startOf('date');
    return (React.createElement("div", { className: 'PrivateMonthSelect' },
        React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS$1.map(function (m) {
            var isToday = today.year() === year && m === today.month();
            var isActive = m === activeMonth;
            var isSelected = selectYear === year && m === selectMonth;
            var ym = year * 100 + (m + 1);
            var disabled = (!!availableDate[0] && ym < availableDate[0].month) || (!!availableDate[1] && ym > availableDate[1].month);
            return (React.createElement(material.Grid, { key: m, item: true, xs: 4 },
                React.createElement(PrivateToggleButton, { fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: function () { return onSelect(m); } },
                    m + 1,
                    "\uC6D4")));
        }))));
};
PrivateMonthSelect.displayName = 'PrivateMonthSelect';
PrivateMonthSelect.defaultProps = PrivateMonthSelectDefaultProps;var PrivateTimeSelectDefaultProps = {
    cols: 1,
};var css_248z$9 = ".PrivateTimeSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.PrivateTimeSelect button {\n  border-radius: 0;\n}";
styleInject(css_248z$9);var DEFAULT_MINUTES$2 = new Array(60).fill(0);
for (var i$3 = 0; i$3 < DEFAULT_MINUTES$2.length; i$3 += 1) {
    DEFAULT_MINUTES$2[i$3] = i$3;
}
var PrivateTimeSelect = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var list = _a.list, listInterval = _a.listInterval, unit = _a.unit, value = _a.value, cols = _a.cols, disableList = _a.disableList, onSelect = _a.onSelect;
    var containerRef = React.useRef(null);
    var simpleBarRef = React.useRef(null);
    var scrollTimerRef = React.useRef();
    /********************************************************************************************************************
     * Function - scrollToValue
     * ******************************************************************************************************************/
    var scrollToValue = React.useCallback(function (value) {
        var _a;
        var valueEls = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName("private-time-select-value-".concat(value));
        if (valueEls && valueEls.length > 0) {
            var lastSelectedTop_1 = -1;
            var counter_1 = 0;
            if (scrollTimerRef.current) {
                clearInterval(scrollTimerRef.current);
                scrollTimerRef.current = undefined;
            }
            var valueEl_1 = valueEls[0];
            scrollTimerRef.current = setInterval(function () {
                var _a, _b, _c, _d;
                var valueRect = valueEl_1.getBoundingClientRect();
                if (valueRect.top !== lastSelectedTop_1) {
                    lastSelectedTop_1 = valueRect.top;
                }
                else {
                    counter_1 += 1;
                    if (counter_1 === 5) {
                        clearInterval(scrollTimerRef.current);
                        scrollTimerRef.current = undefined;
                        var containerRect = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                        var simpleBarRect = (_b = simpleBarRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
                        if (containerRect && simpleBarRect && valueRect) {
                            var scrollTop = ((_c = simpleBarRef.current) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0;
                            var valueTop = valueRect.top - containerRect.top + scrollTop;
                            var valueBottom = valueTop + valueRect.height;
                            var simpleBarVisibleTop = scrollTop;
                            var simpleBarVisibleBottom = simpleBarVisibleTop + simpleBarRect.height;
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
    React.useEffect(function () {
        return function () {
            if (scrollTimerRef.current) {
                clearInterval(scrollTimerRef.current);
                scrollTimerRef.current = undefined;
            }
        };
    }, []);
    React.useEffect(function () {
        if (value != null) {
            scrollToValue(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * LayoutEffect
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref) {
            var commands = {
                scrollToValue: scrollToValue,
            };
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
            return function () {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            };
        }
    }, [ref, scrollToValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: containerRef, className: 'PrivateTimeSelect' },
            React.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
                React.createElement(material.Grid, { container: true }, list
                    .filter(function (v) { return (listInterval ? v % listInterval === 0 : true); })
                    .map(function (v) {
                    var isSelected = v === value;
                    var disabled = !!disableList && disableList.includes(v);
                    return (React.createElement(material.Grid, { item: true, key: v, xs: 12 / (cols || 1) },
                        React.createElement(PrivateToggleButton, { className: "private-time-select-value-".concat(v), fullWidth: true, disabled: disabled, selected: isSelected, onClick: function () { return onSelect && onSelect(v); } },
                            v,
                            unit)));
                }))))));
});
PrivateTimeSelect.displayName = 'PrivateTimeSelect';
PrivateTimeSelect.defaultProps = PrivateTimeSelectDefaultProps;var css_248z$8 = ".PrivateStaticDatePicker.time {\n  height: 400px;\n}\n.PrivateStaticDatePicker .MuiPickersCalendarHeader-root {\n  display: none;\n}\n.PrivateStaticDatePicker .month-title-container {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button {\n  font-size: 15px;\n  padding-left: 8px;\n  padding-right: 0;\n  min-width: 0;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button:not(.active) {\n  color: unset;\n}\n.PrivateStaticDatePicker .action-buttons {\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n}\n.PrivateStaticDatePicker .action-buttons button {\n  min-width: 0;\n  color: inherit;\n}\n.PrivateStaticDatePicker .action-buttons button:not(:first-of-type) {\n  margin-left: 5px;\n}\n.PrivateStaticDatePicker .action-buttons button.disabled {\n  color: rgba(0, 0, 0, 0.5);\n}\n.PrivateStaticDatePicker .time {\n  border-left: 2px solid #bfbfbf;\n}\n.PrivateStaticDatePicker .time .time-container {\n  height: 100%;\n}\n.PrivateStaticDatePicker .time .time-container .time-title {\n  text-align: center;\n  padding: 22px 0;\n  font-size: 15px;\n}\n.PrivateStaticDatePicker .time .time-container .time-select-wrap {\n  flex: 1;\n  border-top: 1px solid #efefef;\n}\n.PrivateStaticDatePicker.time .time .time-container .time-select-wrap > div > div:not(:first-of-type) {\n  border-left: 1px solid #efefef;\n}";
styleInject(css_248z$8);var DEFAULT_HOURS$1 = new Array(24).fill(0);
for (var i$2 = 0; i$2 < DEFAULT_HOURS$1.length; i$2 += 1) {
    DEFAULT_HOURS$1[i$2] = i$2;
}
var DEFAULT_MINUTES$1 = new Array(60).fill(0);
for (var i$2 = 0; i$2 < DEFAULT_MINUTES$1.length; i$2 += 1) {
    DEFAULT_MINUTES$1[i$2] = i$2;
}
var DEFAULT_SECONDS$1 = new Array(60).fill(0);
for (var i$2 = 0; i$2 < DEFAULT_SECONDS$1.length; i$2 += 1) {
    DEFAULT_SECONDS$1[i$2] = i$2;
}
var PrivateStaticDatePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var value = _a.value, initAvailableDate = _a.availableDate, defaultCalendarMonth = _a.defaultCalendarMonth, type = _a.type, time = _a.time, initHours = _a.hours, initMinutes = _a.minutes, initSeconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange, onMonthChange = _a.onMonthChange, onClose = _a.onClose, props = __rest(_a, ["value", "availableDate", "defaultCalendarMonth", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    var hourSelectRef = React.useRef(null);
    var minuteSelectRef = React.useRef(null);
    var secondSelectRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(function () {
        if (value)
            return value;
        else if (defaultCalendarMonth)
            return defaultCalendarMonth;
        else
            return dayjs();
    }), month = _b[0], setMonth = _b[1];
    var _c = React.useState(null), activeMonthValue = _c[0], setActiveMonthValue = _c[1];
    var _d = React.useState(false), yearSelectOpen = _d[0], setYearSelectOpen = _d[1];
    var _e = React.useState(false), monthSelectOpen = _e[0], setMonthSelectOpen = _e[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var hours = React.useMemo(function () { return initHours || DEFAULT_HOURS$1; }, [initHours]);
    var minutes = React.useMemo(function () { return initMinutes || DEFAULT_MINUTES$1; }, [initMinutes]);
    var seconds = React.useMemo(function () { return initSeconds || DEFAULT_SECONDS$1; }, [initSeconds]);
    var availableDate = React.useMemo(function () {
        return initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [initAvailableDate, minDate, maxDate, disablePast, disableFuture]);
    var disableHours = React.useMemo(function () {
        var newDisableHours = [];
        if (time && value && (availableDate[0] || availableDate[1])) {
            hours.forEach(function (h) {
                if (!isDateAvailable(value.set('hour', h), availableDate, 'hour')) {
                    newDisableHours.push(h);
                }
            });
        }
        return newDisableHours;
    }, [time, value, availableDate, hours]);
    var disableMinutes = React.useMemo(function () {
        var newDisableMinutes = [];
        if (time === 'minute' || time === 'second') {
            if (value && (availableDate[0] || availableDate[1])) {
                minutes.forEach(function (m) {
                    if (!isDateAvailable(value.set('minute', m), availableDate, 'minute')) {
                        newDisableMinutes.push(m);
                    }
                });
            }
        }
        return newDisableMinutes;
    }, [time, value, availableDate, minutes]);
    var disableSeconds = React.useMemo(function () {
        var newDisableSeconds = [];
        if (time === 'second') {
            if (value && (availableDate[0] || availableDate[1])) {
                seconds.forEach(function (s) {
                    if (!isDateAvailable(value.set('second', s), availableDate, 'second')) {
                        newDisableSeconds.push(s);
                    }
                });
            }
        }
        return newDisableSeconds;
    }, [time, value, availableDate, seconds]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = React.useRef();
    var rightArrowOnClickRef = React.useRef();
    var LeftArrowButton = React.useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = React.useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var previousMonth = React.useCallback(function () {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    var nextMonth = React.useCallback(function () {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearSelect = React.useCallback(function (year) {
        setMonth(month.set('year', year));
        setActiveMonthValue(month.set('year', year));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [month]);
    var handleMonthSelect = React.useCallback(function (m) {
        setMonth(month.set('month', m));
        setActiveMonthValue(month.set('month', m));
        setMonthSelectOpen(false);
    }, [month]);
    var handleRenderDay = React.useCallback(function (props) {
        return React.createElement(xDatePickers.PickersDay, __assign({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref) {
            var commands = {};
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
            return function () {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            };
        }
    }, [ref]);
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    var getActionButton = React.useCallback(function (date, label) {
        var disabled = !isDateAvailable(date, availableDate, 'day');
        return (React.createElement(material.Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: function () {
                var finalDate = date;
                var checkResult = checkDateAvailable(finalDate, availableDate, type, time);
                if (checkResult !== 'available') {
                    var availableDateDate = getAvailableDate(availableDate, type, time);
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
        type !== 'time' && (React.createElement(material.Grid, { item: true },
            React.createElement(material.Grid, { container: true, direction: 'column' },
                React.createElement(material.Grid, { item: true, sx: { p: 2, width: '100%' } },
                    React.createElement(material.Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React.createElement(material.Grid, { item: true, flex: 1, className: 'month-title-container' },
                            React.createElement("div", { className: 'month-title-wrap' },
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(material.Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: function () {
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
                                    React.createElement(material.Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: function () {
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
                        !yearSelectOpen && !monthSelectOpen && (React.createElement(material.Grid, { item: true, style: { textAlign: 'right' } },
                            React.createElement(material.IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React.createElement(material.Icon, null, "keyboard_arrow_left")),
                            React.createElement(material.IconButton, { onClick: nextMonth },
                                React.createElement(material.Icon, null, "keyboard_arrow_right")))))),
                React.createElement(material.Grid, { item: true, style: { position: 'relative' } },
                    React.createElement(xDatePickers.StaticDatePicker, __assign({}, props, { value: activeMonthValue, defaultCalendarMonth: month, slots: {
                            previousIconButton: LeftArrowButton,
                            nextIconButton: RightArrowButton,
                            day: handleRenderDay,
                        }, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, displayStaticWrapperAs: 'desktop', onChange: function (newValue) {
                            var finalValue = newValue
                                ? value
                                    ? newValue.set('hour', value.hour()).set('minute', value.minute()).set('second', value.second())
                                    : newValue
                                : newValue;
                            onChange('date', finalValue);
                        }, onMonthChange: function (month) {
                            setMonth(month);
                            if (onMonthChange)
                                onMonthChange(month);
                        } })),
                    yearSelectOpen && (React.createElement(PrivateYearSelect, { selectYear: value == null ? null : value.year(), activeYear: month.year(), availableDate: availableDate, onSelect: handleYearSelect })),
                    monthSelectOpen && (React.createElement(PrivateMonthSelect, { year: month.year(), selectYear: value == null ? null : value.year(), selectMonth: value == null ? null : value.month(), activeMonth: month.month(), availableDate: availableDate, onSelect: handleMonthSelect }))),
                React.createElement(material.Grid, { item: true, className: 'action-buttons' },
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
        time && (React.createElement(material.Grid, { item: true, className: 'time' },
            React.createElement(material.Grid, { container: true, direction: 'column', className: 'time-container' },
                React.createElement(material.Grid, { item: true, className: 'time-title' },
                    time === 'hour' && (value ? value.format('HH시') : '00시'),
                    time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분'),
                    time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')),
                React.createElement(material.Grid, { item: true, className: 'time-select-wrap' },
                    React.createElement(material.Grid, { container: true, style: { height: '100%' } },
                        React.createElement(material.Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React.createElement(PrivateTimeSelect, { ref: hourSelectRef, value: value && value.hour(), unit: '\uC2DC', list: hours, disableList: disableHours, cols: type === 'time' ? 3 : 1, onSelect: function (newValue) {
                                    onChange('hour', value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue));
                                } })),
                        (time === 'minute' || time === 'second') && (React.createElement(material.Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React.createElement(PrivateTimeSelect, { ref: minuteSelectRef, value: value && value.minute(), unit: '\uBD84', list: minutes, disableList: disableMinutes, cols: type === 'time' ? 3 : 1, listInterval: minuteInterval, onSelect: function (newValue) {
                                    onChange('minute', value ? value.set('minute', newValue) : dayjs().startOf('date').set('minute', newValue));
                                } }))),
                        time === 'second' && (React.createElement(material.Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React.createElement(PrivateTimeSelect, { ref: secondSelectRef, value: value && value.second(), unit: '\uCD08', list: seconds, disableList: disableSeconds, cols: type === 'time' ? 3 : 1, listInterval: secondInterval, onSelect: function (newValue) {
                                    onChange('second', value ? value.set('second', newValue) : dayjs().startOf('date').set('second', newValue));
                                } }))))),
                onClose && (React.createElement(material.Grid, { item: true, className: 'action-buttons' },
                    React.createElement(material.Button, { variant: 'text', onClick: onClose }, "\uB2EB\uAE30"))))))));
});
PrivateStaticDatePicker.displayName = 'PrivateStaticDatePicker';
PrivateStaticDatePicker.defaultProps = PrivateStaticDatePickerDefaultProps;var PrivateStyledTooltip = material.styled(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(material.Tooltip, __assign({}, props, { classes: { popper: className } })));
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(material.tooltipClasses.tooltip)] = {
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
        _b);
});var css_248z$7 = ".PrivateDatePicker .input-text-field.align-left .MuiInputBase-input {\n  text-align: left;\n}\n.PrivateDatePicker .input-text-field.align-center .MuiInputBase-input {\n  text-align: center;\n}\n.PrivateDatePicker .input-text-field.align-right .MuiInputBase-input {\n  text-align: right;\n}";
styleInject(css_248z$7);var PrivateDatePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, type = _a.type, time = _a.time, initValue = _a.value, initData = _a.data, initLabel = _a.label, labelIcon = _a.labelIcon, initFormat = _a.format, initFormValueFormat = _a.formValueFormat, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, width = _a.width, initError = _a.error, helperText = _a.helperText, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, exceptValue = _a.exceptValue, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, readOnlyInput = _a.readOnlyInput, initHidden = _a.hidden, onChange = _a.onChange, onValidate = _a.onValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, otherProps = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "readOnlyInput", "hidden", "onChange", "onValidate", "className", "style", "sx"]);
    var id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var privateStaticDatePickerRef = React.useRef(null);
    var textFieldInputRef = React.useRef();
    var closeTimeoutRef = React.useRef();
    var mouseDownTimeRef = React.useRef();
    var datePickerErrorRef = React.useRef(null);
    var openValueRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * State - open
     * ******************************************************************************************************************/
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(null), timeError = _e[0], setTimeError = _e[1];
    var _f = React.useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = reactHook.useAutoUpdateRefState(initData), dataRef = _g[0], setData = _g[2];
    var _h = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _h[0], disabled = _h[1], setDisabled = _h[2];
    var _j = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _j[0], hidden = _j[1], setHidden = _j[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var label = React.useMemo(function () {
        if (labelIcon) {
            return React.createElement(reactComponent.PdgIconText, { icon: labelIcon }, initLabel);
        }
        else {
            return initLabel;
        }
    }, [initLabel, labelIcon]);
    var format = React.useMemo(function () {
        if (initFormat) {
            return initFormat;
        }
        else {
            return getDateTimeFormat(type, time);
        }
    }, [initFormat, time, type]);
    var formValueFormat = React.useMemo(function () {
        if (initFormValueFormat) {
            return initFormValueFormat;
        }
        else {
            return getDateTimeFormValueFormat(type, time);
        }
    }, [initFormValueFormat, time, type]);
    var availableDate = React.useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [disableFuture, disablePast, maxDate, minDate]);
    var style = React.useMemo(function () { return (width != null ? __assign(__assign({}, initStyle), { width: width }) : initStyle); }, [initStyle, width]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, helperText) {
        setError(error);
        setErrorHelperText(helperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
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
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, timeError, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    var getFinalValue = React.useCallback(function (value) {
        return value || null;
    }, []);
    var _k = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _k[0], value = _k[1], setValue = _k[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    var _l = React.useState(value), inputValue = _l[0], setInputValue = _l[1];
    reactHook.useFirstSkipEffect(function () {
        setInputValue(value);
    }, [value]);
    reactHook.useFirstSkipEffect(function () {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    reactHook.useFirstSkipEffect(function () {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                var runOnRequestSearchSubmit = void 0;
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
    React.useEffect(function () {
        if (type !== 'time' && time && value && (availableDate[0] || availableDate[1])) {
            var availableDateVal = getAvailableDateVal(availableDate, type, time);
            var valueVal = getDateValForAvailableDate(value, type, time);
            var timeError_1 = null;
            if (availableDateVal[0] && valueVal < availableDateVal[0]) {
                timeError_1 = 'minDate';
            }
            if (timeError_1 == null && availableDateVal[1] && valueVal > availableDateVal[1]) {
                timeError_1 = 'maxDate';
            }
            setTimeError(timeError_1);
        }
        else {
            setTimeError(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var wrapStyle = React.useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var commands = {
                getType: function () { return 'default'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue || null); },
                reset: function () { return setValue(initValue); },
                getValue: function () { return valueRef.current; },
                setValue: setValue,
                getData: function () { return dataRef.current; },
                setData: setData,
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return !!disabledRef.current; },
                setDisabled: setDisabled,
                isHidden: function () { return !!hiddenRef.current; },
                setHidden: setHidden,
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(valueRef.current); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueFormat: function () { return formValueFormat; },
            };
            if (ref) {
                if (typeof ref === 'function') {
                    ref(commands);
                }
                else {
                    ref.current = commands;
                }
            }
            if (onAddValueItem)
                onAddValueItem(id, commands);
            return function () {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(null);
                    }
                    else {
                        ref.current = null;
                    }
                }
                if (onRemoveValueItem)
                    onRemoveValueItem(id);
            };
        }
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueFormat,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (unit, newValue, keyboardInputValue) {
        var updateValue = true;
        if (util.notEmpty(keyboardInputValue)) {
            if (newValue) {
                if (!newValue.isValid()) {
                    updateValue = false;
                }
            }
        }
        var finalValue = newValue;
        if (updateValue) {
            if (type !== 'time' && finalValue != null && keyboardInputValue == null) {
                var checkResult = checkDateAvailable(finalValue, availableDate, type, time);
                if (checkResult !== 'available') {
                    var availableDateDate = getAvailableDate(availableDate, type, time);
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
            var runOnRequestSearchSubmit_1 = false;
            if (util.notEmpty(keyboardInputValue)) {
                if (!time || unit !== 'action_date') {
                    runOnRequestSearchSubmit_1 = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
                    setOpen(false);
                }
            }
            else if (time) {
                if (time === unit)
                    setOpen(false);
            }
            setValue(finalValue);
            util.nextTick(function () {
                onValueChangeByUser(name, finalValue);
                if (runOnRequestSearchSubmit_1) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
        setInputValue(finalValue);
    }, [type, time, setValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]);
    var handleContainerFocus = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(function () {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    var handleContainerMouseDown = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var slotProps = React.useMemo(function () {
        var textFieldInputLabelProps = {};
        if (labelShrink) {
            textFieldInputLabelProps.shrink = labelShrink;
        }
        var readOnly = readOnlyInput;
        var inputProps = {
            readOnly: readOnly,
        };
        if (readOnly) {
            inputProps.tabIndex = -1;
            inputProps.className = classNames(inputProps.className, 'Mui-disabled');
        }
        var muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PdgIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        return {
            textField: {
                className: classNames('input-text-field', "align-".concat(align)),
                inputRef: function (ref) {
                    textFieldInputRef.current = ref;
                },
                variant: variant,
                size: size,
                color: color,
                focused: focused,
                InputLabelProps: textFieldInputLabelProps,
                InputProps: muiInputProps,
                inputProps: inputProps,
                required: required,
                fullWidth: fullWidth,
                helperText: undefined,
                error: !!error || !!timeError,
                style: style,
                sx: sx,
                onFocus: function () {
                    setOpen(true);
                },
                onClick: function () {
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
        readOnlyInput,
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
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs.AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React.createElement("div", { className: classNames(className, 'PrivateDatePicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React.createElement(PrivateStyledTooltip, { open: disabled || readOnly ? false : open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && errorHelperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement(PrivateStaticDatePicker, __assign({}, otherProps, { ref: privateStaticDatePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, onChange: handleChange, onAccept: function () { return !time && setOpen(false); }, onClose: function () { return setOpen(false); } })) },
                    React.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React.createElement(xDatePickers.DesktopDatePicker, __assign({ value: inputValue, label: label, open: false, format: format, disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: function () { return setOpen(false); }, onError: function (reason) { return (datePickerErrorRef.current = reason); }, onChange: function (newValue) { return handleChange('date', newValue); }, slotProps: slotProps }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PrivateDatePicker.displayName = 'PrivateDatePicker';
PrivateDatePicker.defaultProps = PrivateDatePickerDefaultProps;var PrivateDateTimePickerDefaultProps = {
    showDaysOutsideCurrentMonth: true,
    align: 'center',
    value: null,
};var css_248z$6 = ".PrivateDateTimePicker .input-text-field.align-left .MuiInputBase-input {\n  text-align: left;\n}\n.PrivateDateTimePicker .input-text-field.align-center .MuiInputBase-input {\n  text-align: center;\n}\n.PrivateDateTimePicker .input-text-field.align-right .MuiInputBase-input {\n  text-align: right;\n}";
styleInject(css_248z$6);var PrivateStaticDateTimePickerDefaultProps = {};var css_248z$5 = ".PrivateStaticDateTimePicker.time {\n  height: 400px;\n}\n.PrivateStaticDateTimePicker .MuiPickersCalendarHeader-root {\n  display: none;\n}\n.PrivateStaticDateTimePicker .month-title-container {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n}\n.PrivateStaticDateTimePicker .month-title-container .month-title-wrap {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button {\n  font-size: 15px;\n  padding-left: 8px;\n  padding-right: 0;\n  min-width: 0;\n}\n.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button:not(.active) {\n  color: unset;\n}\n.PrivateStaticDateTimePicker .action-buttons {\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n}\n.PrivateStaticDateTimePicker .action-buttons button {\n  min-width: 0;\n  color: inherit;\n}\n.PrivateStaticDateTimePicker .action-buttons button:not(:first-of-type) {\n  margin-left: 5px;\n}\n.PrivateStaticDateTimePicker .action-buttons button.disabled {\n  color: rgba(0, 0, 0, 0.5);\n}\n.PrivateStaticDateTimePicker .time {\n  border-left: 2px solid #bfbfbf;\n}\n.PrivateStaticDateTimePicker .time .time-container {\n  height: 100%;\n}\n.PrivateStaticDateTimePicker .time .time-container .time-title {\n  text-align: center;\n  padding: 22px 0;\n  font-size: 15px;\n}\n.PrivateStaticDateTimePicker .time .time-container .time-select-wrap {\n  flex: 1;\n  border-top: 1px solid #efefef;\n}\n.PrivateStaticDateTimePicker.time .time .time-container .time-select-wrap > div > div:not(:first-of-type) {\n  border-left: 1px solid #efefef;\n}";
styleInject(css_248z$5);var DEFAULT_HOURS = new Array(24).fill(0);
for (var i$1 = 0; i$1 < DEFAULT_HOURS.length; i$1 += 1) {
    DEFAULT_HOURS[i$1] = i$1;
}
var DEFAULT_MINUTES = new Array(60).fill(0);
for (var i$1 = 0; i$1 < DEFAULT_MINUTES.length; i$1 += 1) {
    DEFAULT_MINUTES[i$1] = i$1;
}
var DEFAULT_SECONDS = new Array(60).fill(0);
for (var i$1 = 0; i$1 < DEFAULT_SECONDS.length; i$1 += 1) {
    DEFAULT_SECONDS[i$1] = i$1;
}
var PrivateStaticDateTimePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var value = _a.value, initAvailableDate = _a.availableDate, defaultCalendarMonth = _a.defaultCalendarMonth, type = _a.type, time = _a.time, initHours = _a.hours, initMinutes = _a.minutes, initSeconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange, onMonthChange = _a.onMonthChange, onClose = _a.onClose, props = __rest(_a, ["value", "availableDate", "defaultCalendarMonth", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    var hourSelectRef = React.useRef(null);
    var minuteSelectRef = React.useRef(null);
    var secondSelectRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(function () {
        if (value)
            return value;
        else if (defaultCalendarMonth)
            return defaultCalendarMonth;
        else
            return dayjs();
    }), month = _b[0], setMonth = _b[1];
    var _c = React.useState(null), activeMonthValue = _c[0], setActiveMonthValue = _c[1];
    var _d = React.useState(false), yearSelectOpen = _d[0], setYearSelectOpen = _d[1];
    var _e = React.useState(false), monthSelectOpen = _e[0], setMonthSelectOpen = _e[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var hours = React.useMemo(function () { return initHours || DEFAULT_HOURS; }, [initHours]);
    var minutes = React.useMemo(function () { return initMinutes || DEFAULT_MINUTES; }, [initMinutes]);
    var seconds = React.useMemo(function () { return initSeconds || DEFAULT_SECONDS; }, [initSeconds]);
    var availableDate = React.useMemo(function () {
        return initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [initAvailableDate, minDate, maxDate, disablePast, disableFuture]);
    var disableHours = React.useMemo(function () {
        var newDisableHours = [];
        if (time && value && (availableDate[0] || availableDate[1])) {
            hours.forEach(function (h) {
                if (!isDateAvailable(value.set('hour', h), availableDate, 'hour')) {
                    newDisableHours.push(h);
                }
            });
        }
        return newDisableHours;
    }, [time, value, availableDate, hours]);
    var disableMinutes = React.useMemo(function () {
        var newDisableMinutes = [];
        if (time === 'minute' || time === 'second') {
            if (value && (availableDate[0] || availableDate[1])) {
                minutes.forEach(function (m) {
                    if (!isDateAvailable(value.set('minute', m), availableDate, 'minute')) {
                        newDisableMinutes.push(m);
                    }
                });
            }
        }
        return newDisableMinutes;
    }, [time, value, availableDate, minutes]);
    var disableSeconds = React.useMemo(function () {
        var newDisableSeconds = [];
        if (time === 'second') {
            if (value && (availableDate[0] || availableDate[1])) {
                seconds.forEach(function (s) {
                    if (!isDateAvailable(value.set('second', s), availableDate, 'second')) {
                        newDisableSeconds.push(s);
                    }
                });
            }
        }
        return newDisableSeconds;
    }, [time, value, availableDate, seconds]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = React.useRef();
    var rightArrowOnClickRef = React.useRef();
    var LeftArrowButton = React.useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = React.useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var previousMonth = React.useCallback(function () {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    var nextMonth = React.useCallback(function () {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    var timeSelectScrollToDate = React.useCallback(function (date, times) {
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
    var handleYearSelect = React.useCallback(function (year) {
        setMonth(month.set('year', year));
        setActiveMonthValue(month.set('year', year));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [month]);
    var handleMonthSelect = React.useCallback(function (m) {
        setMonth(month.set('month', m));
        setActiveMonthValue(month.set('month', m));
        setMonthSelectOpen(false);
    }, [month]);
    var handleRenderDay = React.useCallback(function (props) {
        return React.createElement(xDatePickers.PickersDay, __assign({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref) {
            var commands = {
                timeSelectScrollToDate: timeSelectScrollToDate,
            };
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
            return function () {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            };
        }
    }, [ref, timeSelectScrollToDate]);
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    var getActionButton = React.useCallback(function (date, label) {
        var disabled = !isDateAvailable(date, availableDate, 'day');
        return (React.createElement(material.Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: function () {
                var finalDate = date;
                var checkResult = checkDateAvailable(finalDate, availableDate, type, time);
                if (checkResult !== 'available') {
                    var availableDateDate = getAvailableDate(availableDate, type, time);
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
        type !== 'time' && (React.createElement(material.Grid, { item: true },
            React.createElement(material.Grid, { container: true, direction: 'column' },
                React.createElement(material.Grid, { item: true, sx: { p: 2, width: '100%' } },
                    React.createElement(material.Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React.createElement(material.Grid, { item: true, flex: 1, className: 'month-title-container' },
                            React.createElement("div", { className: 'month-title-wrap' },
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(material.Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: function () {
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
                                    React.createElement(material.Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: function () {
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
                        !yearSelectOpen && !monthSelectOpen && (React.createElement(material.Grid, { item: true, style: { textAlign: 'right' } },
                            React.createElement(material.IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React.createElement(material.Icon, null, "keyboard_arrow_left")),
                            React.createElement(material.IconButton, { onClick: nextMonth },
                                React.createElement(material.Icon, null, "keyboard_arrow_right")))))),
                React.createElement(material.Grid, { item: true, style: { position: 'relative' } },
                    React.createElement(xDatePickers.StaticDateTimePicker, __assign({}, props, { value: activeMonthValue, defaultCalendarMonth: month, slots: {
                            previousIconButton: LeftArrowButton,
                            nextIconButton: RightArrowButton,
                            day: handleRenderDay,
                        }, viewRenderers: { hours: null, minutes: null, seconds: null }, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, displayStaticWrapperAs: 'desktop', onChange: function (newValue) {
                            var finalValue = newValue
                                ? value
                                    ? newValue.set('hour', value.hour()).set('minute', value.minute()).set('second', value.second())
                                    : newValue
                                : newValue;
                            onChange('date', finalValue);
                        }, onMonthChange: function (month) {
                            setMonth(month);
                            if (onMonthChange)
                                onMonthChange(month);
                        } })),
                    yearSelectOpen && (React.createElement(PrivateYearSelect, { selectYear: value == null ? null : value.year(), activeYear: month.year(), availableDate: availableDate, onSelect: handleYearSelect })),
                    monthSelectOpen && (React.createElement(PrivateMonthSelect, { year: month.year(), selectYear: value == null ? null : value.year(), selectMonth: value == null ? null : value.month(), activeMonth: month.month(), availableDate: availableDate, onSelect: handleMonthSelect }))),
                React.createElement(material.Grid, { item: true, className: 'action-buttons' },
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
        time && (React.createElement(material.Grid, { item: true, className: 'time' },
            React.createElement(material.Grid, { container: true, direction: 'column', className: 'time-container' },
                React.createElement(material.Grid, { item: true, className: 'time-title' },
                    time === 'hour' && (value ? value.format('HH시') : '00시'),
                    time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분'),
                    time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')),
                React.createElement(material.Grid, { item: true, className: 'time-select-wrap' },
                    React.createElement(material.Grid, { container: true, style: { height: '100%' } },
                        React.createElement(material.Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React.createElement(PrivateTimeSelect, { ref: hourSelectRef, value: value && value.hour(), unit: '\uC2DC', list: hours, disableList: disableHours, cols: type === 'time' ? 3 : 1, onSelect: function (newValue) {
                                    onChange('hour', value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue));
                                } })),
                        (time === 'minute' || time === 'second') && (React.createElement(material.Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React.createElement(PrivateTimeSelect, { ref: minuteSelectRef, value: value && value.minute(), unit: '\uBD84', list: minutes, disableList: disableMinutes, cols: type === 'time' ? 3 : 1, listInterval: minuteInterval, onSelect: function (newValue) {
                                    onChange('minute', value ? value.set('minute', newValue) : dayjs().startOf('date').set('minute', newValue));
                                } }))),
                        time === 'second' && (React.createElement(material.Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React.createElement(PrivateTimeSelect, { ref: secondSelectRef, value: value && value.second(), unit: '\uCD08', list: seconds, disableList: disableSeconds, cols: type === 'time' ? 3 : 1, listInterval: secondInterval, onSelect: function (newValue) {
                                    onChange('second', value ? value.set('second', newValue) : dayjs().startOf('date').set('second', newValue));
                                } }))))),
                onClose && (React.createElement(material.Grid, { item: true, className: 'action-buttons' },
                    React.createElement(material.Button, { variant: 'text', onClick: onClose }, "\uB2EB\uAE30"))))))));
});
PrivateStaticDateTimePicker.displayName = 'PrivateStaticDateTimePicker';
PrivateStaticDateTimePicker.defaultProps = PrivateStaticDateTimePickerDefaultProps;var PrivateDateTimePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, type = _a.type, time = _a.time, initValue = _a.value, initData = _a.data, initLabel = _a.label, labelIcon = _a.labelIcon, initFormat = _a.format, initFormValueFormat = _a.formValueFormat, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, width = _a.width, initError = _a.error, helperText = _a.helperText, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, exceptValue = _a.exceptValue, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, readOnlyInput = _a.readOnlyInput, initHidden = _a.hidden, onChange = _a.onChange, onValidate = _a.onValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, otherProps = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "readOnlyInput", "hidden", "onChange", "onValidate", "className", "style", "sx"]);
    var id = React.useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var privateStaticDateTimePickerRef = React.useRef(null);
    var textFieldInputRef = React.useRef();
    var closeTimeoutRef = React.useRef();
    var mouseDownTimeRef = React.useRef();
    var datePickerErrorRef = React.useRef(null);
    var openValueRef = React.useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * State - open
     * ******************************************************************************************************************/
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(null), timeError = _e[0], setTimeError = _e[1];
    var _f = React.useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = reactHook.useAutoUpdateRefState(initData), dataRef = _g[0], setData = _g[2];
    var _h = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _h[0], disabled = _h[1], setDisabled = _h[2];
    var _j = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _j[0], hidden = _j[1], setHidden = _j[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var label = React.useMemo(function () {
        if (labelIcon) {
            return React.createElement(reactComponent.PdgIconText, { icon: labelIcon }, initLabel);
        }
        else {
            return initLabel;
        }
    }, [initLabel, labelIcon]);
    var format = React.useMemo(function () {
        if (initFormat) {
            return initFormat;
        }
        else {
            return getDateTimeFormat(type, time);
        }
    }, [initFormat, time, type]);
    var formValueFormat = React.useMemo(function () {
        if (initFormValueFormat) {
            return initFormValueFormat;
        }
        else {
            return getDateTimeFormValueFormat(type, time);
        }
    }, [initFormValueFormat, time, type]);
    var availableDate = React.useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [disableFuture, disablePast, maxDate, minDate]);
    var style = React.useMemo(function () { return (width != null ? __assign(__assign({}, initStyle), { width: width }) : initStyle); }, [initStyle, width]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
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
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorErrorHelperText(false, undefined);
        return true;
    }, [required, timeError, onValidate, setErrorErrorHelperText]);
    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/
    var getFinalValue = React.useCallback(function (value) {
        return value || null;
    }, []);
    var _k = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _k[0], value = _k[1], setValue = _k[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _l = React.useState(value), inputValue = _l[0], setInputValue = _l[1];
    reactHook.useFirstSkipEffect(function () {
        setInputValue(value);
    }, [value]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(function () {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    reactHook.useFirstSkipEffect(function () {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                var runOnRequestSearchSubmit = void 0;
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
    React.useEffect(function () {
        if (type !== 'time' && time && value && (availableDate[0] || availableDate[1])) {
            var availableDateVal = getAvailableDateVal(availableDate, type, time);
            var valueVal = getDateValForAvailableDate(value, type, time);
            var timeError_1 = null;
            if (availableDateVal[0] && valueVal < availableDateVal[0]) {
                timeError_1 = 'minDate';
            }
            if (timeError_1 == null && availableDateVal[1] && valueVal > availableDateVal[1]) {
                timeError_1 = 'maxDate';
            }
            setTimeError(timeError_1);
        }
        else {
            setTimeError(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var wrapStyle = React.useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var commands = {
                getType: function () { return 'default'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () { return setValue(initValue); },
                getValue: function () { return valueRef.current; },
                setValue: setValue,
                getData: function () { return dataRef.current; },
                setData: setData,
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return !!disabledRef.current; },
                setDisabled: setDisabled,
                isHidden: function () { return !!hiddenRef.current; },
                setHidden: setHidden,
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(valueRef.current); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueFormat: function () { return formValueFormat; },
            };
            if (ref) {
                if (typeof ref === 'function') {
                    ref(commands);
                }
                else {
                    ref.current = commands;
                }
            }
            if (onAddValueItem)
                onAddValueItem(id, commands);
            return function () {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(null);
                    }
                    else {
                        ref.current = null;
                    }
                }
                if (onRemoveValueItem)
                    onRemoveValueItem(id);
            };
        }
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueFormat,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (unit, newValue, keyboardInputValue) {
        var _a, _b, _c;
        var updateValue = true;
        if (util.notEmpty(keyboardInputValue)) {
            if (newValue) {
                if (!newValue.isValid()) {
                    updateValue = false;
                }
            }
        }
        var finalValue = newValue;
        if (updateValue) {
            if (type !== 'time' && finalValue != null && keyboardInputValue == null) {
                var checkResult = checkDateAvailable(finalValue, availableDate, type, time);
                if (checkResult !== 'available') {
                    var availableDateDate = getAvailableDate(availableDate, type, time);
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
            var runOnRequestSearchSubmit_1 = false;
            if (util.notEmpty(keyboardInputValue)) {
                if (!time || unit !== 'action_date') {
                    runOnRequestSearchSubmit_1 = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
                    setOpen(false);
                }
            }
            else if (time) {
                if (time === unit)
                    setOpen(false);
            }
            setValue(finalValue);
            util.nextTick(function () {
                onValueChangeByUser(name, finalValue);
                if (runOnRequestSearchSubmit_1) {
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
    }, [type, time, setValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]);
    var handleContainerFocus = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(function () {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    var handleContainerMouseDown = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var slotProps = React.useMemo(function () {
        var textFieldInputLabelProps = {};
        if (labelShrink) {
            textFieldInputLabelProps.shrink = labelShrink;
        }
        var readOnly = readOnlyInput;
        var inputProps = {
            readOnly: readOnly,
        };
        if (readOnly) {
            inputProps.tabIndex = -1;
            inputProps.className = classNames(inputProps.className, 'Mui-disabled');
        }
        var muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PdgIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        return {
            textField: {
                className: classNames('input-text-field', "align-".concat(align)),
                inputRef: function (ref) {
                    textFieldInputRef.current = ref;
                },
                variant: variant,
                size: size,
                color: color,
                focused: focused,
                InputLabelProps: textFieldInputLabelProps,
                InputProps: muiInputProps,
                inputProps: inputProps,
                required: required,
                fullWidth: fullWidth,
                helperText: undefined,
                error: !!error || !!timeError,
                style: style,
                sx: sx,
                onFocus: function () {
                    setOpen(true);
                },
                onClick: function () {
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
        readOnlyInput,
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
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs.AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React.createElement("div", { className: classNames(className, 'PrivateDateTimePicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React.createElement(PrivateStyledTooltip, { open: disabled || readOnly ? false : open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && helperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React.createElement(PrivateStaticDateTimePicker, __assign({}, otherProps, { ref: privateStaticDateTimePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, onChange: handleChange, onAccept: function () { return !time && setOpen(false); }, onClose: function () { return setOpen(false); } })) },
                    React.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React.createElement(xDatePickers.DesktopDateTimePicker, __assign({ value: inputValue, label: label, open: false, format: format, disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: function () { return setOpen(false); }, onError: function (reason) { return (datePickerErrorRef.current = reason); }, onChange: function (newValue) { return handleChange('date', newValue); }, slotProps: slotProps }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PrivateDateTimePicker.displayName = 'PrivateDateTimePicker';
PrivateDateTimePicker.defaultProps = PrivateDateTimePickerDefaultProps;var PrivateAlertDialogDefaultProps = {
    color: 'primary',
};var PrivateAlertDialog = function (_a) {
    var color = _a.color, open = _a.open, title = _a.title, content = _a.content, onClose = _a.onClose;
    var handleClose = React.useCallback(function () {
        onClose && onClose();
    }, [onClose]);
    return (React.createElement(material.Dialog, { className: "color-".concat(color), open: !!open, onClose: handleClose, "aria-labelledby": 'alert-dialog-title' },
        title && React.createElement(material.DialogTitle, { id: 'alert-dialog-title' }, title),
        React.createElement(material.DialogContent, null, content),
        React.createElement(material.DialogActions, null,
            React.createElement(material.Button, { variant: 'text', onClick: handleClose, autoFocus: true }, "\uD655\uC778"))));
};
PrivateAlertDialog.displayName = 'PrivateAlertDialog';
PrivateAlertDialog.defaultProps = PrivateAlertDialogDefaultProps;var PrivateInputDatePickerDefaultProps = {
    align: 'center',
};var css_248z$4 = ".PrivateInputDatePicker.align-left .MuiInputBase-input {\n  text-align: left;\n}\n.PrivateInputDatePicker.align-center .MuiInputBase-input {\n  text-align: center;\n}\n.PrivateInputDatePicker.align-right .MuiInputBase-input {\n  text-align: right;\n}";
styleInject(css_248z$4);var PrivateInputDatePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var variant = _a.variant, size = _a.size, color = _a.color, focused = _a.focused, fullWidth = _a.fullWidth, disabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, labelShrink = _a.labelShrink, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, sx = _a.sx, value = _a.value, initLabel = _a.label, labelIcon = _a.labelIcon, inputRef = _a.inputRef, format = _a.format, error = _a.error, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, readOnlyInput = _a.readOnlyInput, onFocus = _a.onFocus, onBlur = _a.onBlur, props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "disabled", "readOnly", "required", "labelShrink", "className", "style", "sx", "value", "label", "labelIcon", "inputRef", "format", "error", "icon", "startAdornment", "endAdornment", "align", "readOnlyInput", "onFocus", "onBlur"]);
    var id = React.useId();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var label = React.useMemo(function () {
        return labelIcon ? (React.createElement(React.Fragment, null,
            React.createElement(reactComponent.PdgIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]);
    var inputLabelProps = React.useMemo(function () {
        if (labelShrink) {
            return {
                shrink: true,
            };
        }
    }, [labelShrink]);
    var slotProps = React.useMemo(function () {
        var muiInputProps = {
            endAdornment: undefined,
        };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(material.InputAdornment, { position: 'start' },
                    React.createElement(reactComponent.PdgIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(material.InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(material.InputAdornment, { position: 'end' }, endAdornment)));
        }
        var inputProps = {};
        if (readOnly) {
            inputProps.tabIndex = -1;
            inputProps.className = classNames(inputProps.className, 'Mui-disabled');
        }
        return {
            textField: {
                variant: variant,
                size: size,
                color: color,
                focused: focused,
                fullWidth: fullWidth,
                required: required,
                name: id,
                label: label,
                style: style,
                sx: sx,
                error: error,
                InputProps: muiInputProps,
                inputProps: inputProps,
                inputRef: function (ref) {
                    if (inputRef) {
                        inputRef.current = ref;
                    }
                },
                InputLabelProps: inputLabelProps,
                onFocus: function (e) {
                    if (onFocus)
                        onFocus(e);
                },
                onBlur: function (e) {
                    if (onBlur)
                        onBlur(e);
                },
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
        inputLabelProps,
        inputRef,
        label,
        onBlur,
        onFocus,
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
    return (React.createElement(xDatePickers.DesktopDatePicker, __assign({}, props, { ref: ref, className: classNames(className, 'PrivateInputDatePicker', "align-".concat(align)), open: false, value: value, format: format, disabled: disabled, readOnly: readOnly || readOnlyInput, slotProps: slotProps })));
});
PrivateInputDatePicker.displayName = 'PrivateInputDatePicker';
PrivateInputDatePicker.defaultProps = PrivateInputDatePickerDefaultProps;var PrivateYearRangePickerDefaultProps = {
    minYear: 2020,
    maxYear: 2050,
};var PrivateYearRangePickerYearListDefaultProps = {};var PrivateYearRangePickerYearDefaultProps = {};var StyledContainer$6 = material.styled(material.Grid)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  padding: 4px;\n  position: relative;\n"], ["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$2 = material.styled(material.Button)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: #1976d2;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"], ["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: #1976d2;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));
var templateObject_1$b, templateObject_2$6;var PrivateYearRangePickerYear = React.forwardRef(function (_a, ref) {
    var year = _a.year, disabled = _a.disabled, isDefault = _a.isDefault, selected = _a.selected, selectedStart = _a.selectedStart, selectedEnd = _a.selectedEnd, selectedTemp = _a.selectedTemp, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    var className = React.useMemo(function () {
        return classNames(isDefault && 'default', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', disabled && 'disabled');
    }, [isDefault, selected, selectedStart, selectedEnd, selectedTemp, disabled]);
    return (React.createElement(StyledContainer$6, { className: 'PrivateYearRangePickerYear', ref: ref, item: true, xs: 4 },
        React.createElement(StyledButton$2, { className: className, disabled: disabled, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, year)));
});
PrivateYearRangePickerYear.displayName = 'PrivateYearRangePickerYear';
PrivateYearRangePickerYear.defaultProps = PrivateYearRangePickerYearDefaultProps;var StyledContainer$5 = material.styled(material.Grid)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"], ["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));
var templateObject_1$a;var _lastCloseTime$1 = 0;
var PrivateYearRangePickerYearList = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var value = _a.value, displayValue = _a.displayValue, selectType = _a.selectType, minYear = _a.minYear, maxYear = _a.maxYear, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange;
    var yearsContainerRef = React.useRef(null);
    var startButtonRef = React.useRef(null);
    var endButtonRef = React.useRef(null);
    var mouseOverTimer = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(), mouseOverYear = _b[0], setMouseOverYear = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        return function () {
            if (mouseOverTimer.current) {
                clearTimeout(mouseOverTimer.current);
                mouseOverTimer.current = undefined;
            }
        };
    }, []);
    React.useEffect(function () {
        if (!displayValue[0]) {
            startButtonRef.current = null;
        }
        if (!value[1]) {
            endButtonRef.current = null;
        }
    }, [displayValue, value]);
    React.useEffect(function () {
        var container = yearsContainerRef.current;
        var startButton = startButtonRef.current;
        var endButton = endButtonRef.current;
        if (container) {
            var containerScrollTop = container.scrollTop;
            var containerScrollBottom = container.scrollTop + container.offsetHeight;
            var containerTop = container.offsetTop;
            var containerHalf = container.offsetHeight / 2;
            var containerHeight = container.offsetHeight;
            if (startButton && endButton) {
                if (new Date().getTime() - _lastCloseTime$1 > 100) {
                    var startButtonTop = startButton.offsetTop - containerTop;
                    var endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop;
                    var center = startButtonTop + (endButtonBottom - startButtonTop) / 2;
                    var scrollY_1 = center - containerHalf;
                    if (selectType === 'start' && scrollY_1 > startButtonTop - 4) {
                        scrollY_1 = startButtonTop - 4;
                    }
                    else if (selectType === 'end' && scrollY_1 + containerHeight < endButtonBottom + 4) {
                        scrollY_1 = endButtonBottom + 4 - containerHeight;
                    }
                    container.scrollTo(0, scrollY_1);
                }
            }
            else if (startButton) {
                var startButtonTop = startButton.offsetTop - containerTop - 4;
                var startButtonBottom = startButtonTop + startButton.offsetHeight + 8;
                if (startButtonTop < containerScrollTop || startButtonBottom > containerScrollBottom) {
                    container.scrollTo(0, startButtonTop);
                }
            }
            else if (endButton) {
                var endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop + 4;
                container.scrollTo(0, endButtonBottom - containerHeight);
            }
        }
        return function () {
            _lastCloseTime$1 = new Date().getTime();
        };
    }, [selectType]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowYear = React.useMemo(function () { return new Date().getFullYear(); }, []);
    var years = React.useMemo(function () {
        var newYears = [];
        for (var i = minYear; i <= maxYear; i += 1) {
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
    var mouseOver = React.useCallback(function (year) {
        if (mouseOverTimer.current) {
            clearTimeout(mouseOverTimer.current);
            mouseOverTimer.current = undefined;
        }
        if (year) {
            setMouseOverYear(year);
        }
        else {
            mouseOverTimer.current = setTimeout(function () {
                mouseOverTimer.current = undefined;
                setMouseOverYear(undefined);
            }, 100);
        }
    }, []);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$5, { className: 'PrivateYearRangePickerYearList', container: true, ref: yearsContainerRef }, years.map(function (info) { return (React.createElement(PrivateYearRangePickerYear, { key: info.year, ref: function (ref) {
            if (info.selectedStart) {
                startButtonRef.current = ref;
                if (info.selectedEnd) {
                    endButtonRef.current = ref;
                }
            }
            else if (info.selectedEnd) {
                endButtonRef.current = ref;
            }
        }, year: info.year, isDefault: info.isDefault, selected: info.selected, selectedStart: info.selectedStart, selectedEnd: info.selectedEnd, selectedTemp: info.selectedTemp, disabled: info.disabled, onClick: function () { return onChange(info.year); }, onMouseEnter: function () { return mouseOver(info.year); }, onMouseLeave: function () { return mouseOver(undefined); } })); })));
};
PrivateYearRangePickerYearList.displayName = 'PrivateYearRangePickerYearList';
PrivateYearRangePickerYearList.defaultProps = PrivateYearRangePickerYearListDefaultProps;var StyledTitleContainer$1 = material.styled('div')(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledYear = material.styled('span')(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject([""], [""])));
var StyledYearError = material.styled('span')(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.error.main;
});
var StyledTitleGap = material.styled('span')(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  padding: 0 7px;\n  opacity: 0.5;\n"], ["\n  padding: 0 7px;\n  opacity: 0.5;\n"])));
var StyledActionContainer$1 = material.styled('div')(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"], ["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton$1 = material.styled(material.Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));
var templateObject_1$9, templateObject_2$5, templateObject_3$3, templateObject_4$2, templateObject_5$1, templateObject_6;var DEFAULT_VALUE$5 = [null, null];
var PrivateYearRangePicker = function (_a) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var selectType = _a.selectType, initValue = _a.value, initMinYear = _a.minYear, initMaxYear = _a.maxYear, disablePast = _a.disablePast, disableFuture = _a.disableFuture, hideHeader = _a.hideHeader, onChange = _a.onChange;
    var _b = reactHook.useAutoUpdateState(initValue || DEFAULT_VALUE$5), value = _b[0], setValue = _b[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowYear = React.useMemo(function () { return new Date().getFullYear(); }, []);
    var minYear = React.useMemo(function () { return (initMinYear === undefined ? PrivateYearRangePickerDefaultProps.minYear : initMinYear); }, [initMinYear]);
    var maxYear = React.useMemo(function () { return (initMaxYear === undefined ? PrivateYearRangePickerDefaultProps.maxYear : initMaxYear); }, [initMaxYear]);
    var minAvailableYear = React.useMemo(function () {
        if (disablePast) {
            return nowYear > minYear ? nowYear : minYear;
        }
        else {
            return minYear;
        }
    }, [disablePast, minYear, nowYear]);
    var maxAvailableYear = React.useMemo(function () {
        if (disableFuture) {
            return nowYear < maxYear ? nowYear : maxYear;
        }
        else {
            return maxYear;
        }
    }, [disableFuture, maxYear, nowYear]);
    var displayValue = React.useMemo(function () {
        var defaultYear = nowYear;
        if (minAvailableYear > defaultYear) {
            defaultYear = minYear;
        }
        else if (maxAvailableYear < defaultYear) {
            defaultYear = maxAvailableYear;
        }
        if (value) {
            return [value[0] || value[1] || defaultYear, value[1] || value[0] || defaultYear];
        }
        else {
            return [defaultYear, defaultYear];
        }
    }, [maxAvailableYear, minAvailableYear, minYear, nowYear, value]);
    var displayValueError = React.useMemo(function () { return [
        displayValue[0] < minAvailableYear || displayValue[0] > maxAvailableYear,
        displayValue[1] < minAvailableYear || displayValue[1] > maxAvailableYear,
    ]; }, [displayValue, minAvailableYear, maxAvailableYear]);
    /********************************************************************************************************************
     * action button
     * ******************************************************************************************************************/
    var getActionButton = React.useCallback(function (fromYear, toYear, label) {
        if (fromYear < minAvailableYear || toYear > maxAvailableYear) {
            return undefined;
        }
        else {
            var newValue_1 = [
                Math.max(fromYear, minAvailableYear),
                Math.min(toYear, maxAvailableYear),
            ];
            return (React.createElement(StyledActionButton$1, { variant: 'text', onClick: function () {
                    setValue(newValue_1);
                    onChange(newValue_1, 'end');
                } }, label));
        }
    }, [maxAvailableYear, minAvailableYear, onChange, setValue]);
    var actionButtons = React.useMemo(function () {
        return (React.createElement(StyledActionContainer$1, null,
            getActionButton(nowYear - 2, nowYear, '최근 3년'),
            getActionButton(nowYear - 4, nowYear, '최근 5년'),
            getActionButton(nowYear - 9, nowYear, '최근 10년')));
    }, [getActionButton, nowYear]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearChange = React.useCallback(function (valueYear) {
        var newValue = __spreadArray([], value, true);
        if (minAvailableYear && valueYear < minAvailableYear) {
            valueYear = minAvailableYear;
        }
        else if (maxAvailableYear && valueYear > maxAvailableYear) {
            valueYear = maxAvailableYear;
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
    }, [value, minAvailableYear, maxAvailableYear, selectType, setValue, onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { className: 'PrivateYearRangePicker' },
        !hideHeader && (React.createElement(StyledTitleContainer$1, null,
            displayValueError[0] ? (React.createElement(StyledYearError, null,
                displayValue[0],
                "\uB144")) : (React.createElement(StyledYear, null,
                displayValue[0],
                "\uB144")),
            React.createElement(StyledTitleGap, null, "~"),
            displayValueError[1] ? (React.createElement(StyledYearError, null,
                displayValue[1],
                "\uB144")) : (React.createElement(StyledYear, null,
                displayValue[1],
                "\uB144")))),
        React.createElement("div", null,
            React.createElement(PrivateYearRangePickerYearList, { value: value, selectType: selectType, displayValue: displayValue, minYear: minYear, maxYear: maxYear, disablePast: disablePast, disableFuture: disableFuture, onChange: handleYearChange })),
        actionButtons));
};
PrivateYearRangePicker.displayName = 'PrivateYearRangePicker';
PrivateYearRangePicker.defaultProps = PrivateYearRangePickerDefaultProps;var PrivateYearPickerDefaultProps = {
    minYear: 2020,
    maxYear: 2050,
};var PrivateYearPickerYearListDefaultProps = {};var PrivateYearPickerYearDefaultProps = {};var StyledContainer$4 = material.styled(material.Grid)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  padding: 4px;\n  position: relative;\n"], ["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$1 = material.styled(material.Button)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"], ["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));
var templateObject_1$8, templateObject_2$4;var PrivateYearPickerYear = React.forwardRef(function (_a, ref) {
    var year = _a.year, disabled = _a.disabled, active = _a.active, range = _a.range, isDefault = _a.isDefault, selected = _a.selected, selectedStart = _a.selectedStart, selectedEnd = _a.selectedEnd, selectedTemp = _a.selectedTemp, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    var className = React.useMemo(function () {
        return classNames(range && 'range', isDefault && 'default', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', active && 'active', disabled && 'disabled');
    }, [range, isDefault, selected, selectedStart, selectedEnd, selectedTemp, active, disabled]);
    return (React.createElement(StyledContainer$4, { className: 'PrivateYearPickerYear', ref: ref, item: true, xs: 4 },
        React.createElement(StyledButton$1, { className: className, disabled: disabled, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, year)));
});
PrivateYearPickerYear.displayName = 'PrivateYearPickerYear';
PrivateYearPickerYear.defaultProps = PrivateYearPickerYearDefaultProps;var StyledContainer$3 = material.styled(material.Grid)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"], ["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));
var templateObject_1$7;var _lastCloseTime = 0;
var PrivateYearPickerYearList = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var value = _a.value, minYear = _a.minYear, maxYear = _a.maxYear, disablePast = _a.disablePast, disableFuture = _a.disableFuture, selectFromYear = _a.selectFromYear, selectToYear = _a.selectToYear, onChange = _a.onChange;
    var yearsContainerRef = React.useRef(null);
    var defaultButtonRef = React.useRef(null);
    var startButtonRef = React.useRef(null);
    var endButtonRef = React.useRef(null);
    var mouseOverTimer = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(), mouseOverYear = _b[0], setMouseOverYear = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        return function () {
            if (mouseOverTimer.current) {
                clearTimeout(mouseOverTimer.current);
                mouseOverTimer.current = undefined;
            }
        };
    }, []);
    React.useEffect(function () {
        var container = yearsContainerRef.current;
        var startButton = startButtonRef.current;
        var endButton = endButtonRef.current;
        var defaultButton = defaultButtonRef.current;
        if (container) {
            var containerScrollTop = container.scrollTop;
            var containerScrollBottom = container.scrollTop + container.offsetHeight;
            var containerTop = container.offsetTop;
            var containerHalf = container.offsetHeight / 2;
            var containerHeight = container.offsetHeight;
            if (startButton && endButton) {
                if (new Date().getTime() - _lastCloseTime > 100) {
                    var startButtonTop = startButton.offsetTop - containerTop;
                    var endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop;
                    var center = startButtonTop + (endButtonBottom - startButtonTop) / 2;
                    var scrollY_1 = center - containerHalf;
                    if (selectFromYear && scrollY_1 > startButtonTop - 4) {
                        scrollY_1 = startButtonTop - 4;
                    }
                    else if (selectToYear && scrollY_1 + containerHeight < endButtonBottom + 4) {
                        scrollY_1 = endButtonBottom + 4 - containerHeight;
                    }
                    container.scrollTo(0, scrollY_1);
                }
            }
            else if (startButton) {
                var startButtonTop = startButton.offsetTop - containerTop - 4;
                var startButtonBottom = startButtonTop + startButton.offsetHeight + 8;
                if (startButtonTop < containerScrollTop || startButtonBottom > containerScrollBottom) {
                    container.scrollTo(0, startButtonTop);
                }
            }
            else if (endButton) {
                var endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop + 4;
                container.scrollTo(0, endButtonBottom - containerHeight);
            }
            else if (defaultButton) {
                var defaultButtonTop = defaultButton.offsetTop - containerTop - 4;
                var defaultButtonBottom = defaultButtonTop + defaultButton.offsetHeight + 8;
                var center = defaultButtonTop + (defaultButtonBottom - defaultButtonTop) / 2;
                container.scrollTo(0, center - containerHalf);
            }
        }
        return function () {
            _lastCloseTime = new Date().getTime();
        };
    }, [selectFromYear, selectToYear]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowYear = React.useMemo(function () { return new Date().getFullYear(); }, []);
    var defaultYear = React.useMemo(function () {
        var newDefaultYear = nowYear;
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
    var years = React.useMemo(function () {
        var newYears = [];
        var startYear = selectFromYear ? selectFromYear : value ? value : 0;
        var endYear = selectToYear ? selectToYear : value ? value : 0;
        var range = !!selectFromYear || !!selectToYear;
        for (var i = minYear; i <= maxYear; i += 1) {
            newYears.push({
                year: i,
                range: range,
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
    var mouseOver = React.useCallback(function (year) {
        if (mouseOverTimer.current) {
            clearTimeout(mouseOverTimer.current);
            mouseOverTimer.current = undefined;
        }
        if (year) {
            setMouseOverYear(year);
        }
        else {
            mouseOverTimer.current = setTimeout(function () {
                mouseOverTimer.current = undefined;
                setMouseOverYear(undefined);
            }, 100);
        }
    }, []);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$3, { className: 'PrivateYearPickerYearList', container: true, ref: yearsContainerRef }, years.map(function (info) { return (React.createElement(PrivateYearPickerYear, { key: info.year, ref: function (ref) {
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
        }, year: info.year, range: info.range, isDefault: info.isDefault, active: info.active, selected: info.selected, selectedStart: info.selectedStart, selectedEnd: info.selectedEnd, selectedTemp: info.selectedTemp, disabled: info.disabled, onClick: function () { return onChange(info.year); }, onMouseEnter: function () { return mouseOver(info.year); }, onMouseLeave: function () { return mouseOver(undefined); } })); })));
};
PrivateYearPickerYearList.displayName = 'PrivateYearPickerYearList';
PrivateYearPickerYearList.defaultProps = PrivateYearPickerYearListDefaultProps;var StyledTitleContainer = material.styled('div')(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton$1 = material.styled(material.IconButton)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth$1 = material.styled('div')(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  flex: 1;\n  text-align: center;\n"], ["\n  flex: 1;\n  text-align: center;\n"])));
var StyledYearMonthError$1 = material.styled('div')(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  flex: 1;\n  text-align: center;\n  color: ", ";\n"], ["\n  flex: 1;\n  text-align: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.error.main;
});
var templateObject_1$6, templateObject_2$3, templateObject_3$2, templateObject_4$1;var PrivateYearPicker = function (_a) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var initValue = _a.value, initMinYear = _a.minYear, initMaxYear = _a.maxYear, disablePast = _a.disablePast, disableFuture = _a.disableFuture, hideHeader = _a.hideHeader, selectFromYear = _a.selectFromYear, selectToYear = _a.selectToYear, onChange = _a.onChange;
    var _b = reactHook.useAutoUpdateState(initValue || null), value = _b[0], setValue = _b[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowYear = React.useMemo(function () { return new Date().getFullYear(); }, []);
    var minYear = React.useMemo(function () { return (initMinYear === undefined ? PrivateYearPickerDefaultProps.minYear : initMinYear); }, [initMinYear]);
    var maxYear = React.useMemo(function () { return (initMaxYear === undefined ? PrivateYearPickerDefaultProps.maxYear : initMaxYear); }, [initMaxYear]);
    var minAvailableYear = React.useMemo(function () {
        if (disablePast) {
            return nowYear > minYear ? nowYear : minYear;
        }
        else {
            return minYear;
        }
    }, [disablePast, minYear, nowYear]);
    var maxAvailableYear = React.useMemo(function () {
        if (disableFuture) {
            return nowYear < maxYear ? nowYear : maxYear;
        }
        else {
            return maxYear;
        }
    }, [disableFuture, maxYear, nowYear]);
    var displayYear = React.useMemo(function () {
        if (value) {
            return value;
        }
        else {
            var year = selectFromYear || selectToYear || nowYear;
            if (minAvailableYear > year) {
                year = minAvailableYear;
            }
            else if (maxAvailableYear < year) {
                year = maxAvailableYear;
            }
            return year;
        }
    }, [maxAvailableYear, minAvailableYear, nowYear, selectFromYear, selectToYear, value]);
    var displayError = React.useMemo(function () { return displayYear < minAvailableYear || displayYear > maxAvailableYear; }, [displayYear, minAvailableYear, maxAvailableYear]);
    var prevBtnDisabled = React.useMemo(function () { return displayYear <= minAvailableYear; }, [displayYear, minAvailableYear]);
    var nextBtnDisabled = React.useMemo(function () { return displayYear >= maxAvailableYear; }, [displayYear, maxAvailableYear]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearChange = React.useCallback(function (v) {
        if (minAvailableYear && v < minAvailableYear) {
            setValue(minAvailableYear);
            onChange(minAvailableYear, true);
        }
        else if (maxAvailableYear && v > maxAvailableYear) {
            setValue(maxAvailableYear);
            onChange(maxAvailableYear, true);
        }
        else {
            setValue(v);
            onChange(v, true);
        }
    }, [maxAvailableYear, minAvailableYear, onChange, setValue]);
    var handlePrevClick = React.useCallback(function () {
        if (displayYear) {
            var newValue = displayYear - 1;
            setValue(newValue);
            onChange(newValue, false);
        }
    }, [displayYear, onChange, setValue]);
    var handleNextClick = React.useCallback(function () {
        if (displayYear) {
            var newValue = displayYear + 1;
            setValue(newValue);
            onChange(newValue, false);
        }
    }, [displayYear, onChange, setValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { className: 'PrivateYearPicker' },
        !hideHeader && (React.createElement(StyledTitleContainer, null,
            React.createElement(StyledIconButton$1, { disabled: prevBtnDisabled, onClick: handlePrevClick },
                React.createElement(reactComponent.PdgIcon, null, "KeyboardArrowLeft")),
            displayError ? (React.createElement(StyledYearMonthError$1, null,
                displayYear,
                "\uB144")) : (React.createElement(StyledYearMonth$1, null,
                displayYear,
                "\uB144")),
            React.createElement(StyledIconButton$1, { disabled: nextBtnDisabled, onClick: handleNextClick },
                React.createElement(reactComponent.PdgIcon, null, "KeyboardArrowRight")))),
        React.createElement("div", null,
            React.createElement(PrivateYearPickerYearList, { value: value, minYear: minYear, maxYear: maxYear, disablePast: disablePast, disableFuture: disableFuture, selectFromYear: selectFromYear, selectToYear: selectToYear, onChange: handleYearChange }))));
};
PrivateYearPicker.displayName = 'PrivateYearPicker';
PrivateYearPicker.defaultProps = PrivateYearPickerDefaultProps;var PrivateMonthPickerDefaultProps = {
    minValue: {
        year: 2020,
        month: 1,
    },
    maxValue: {
        year: 2050,
        month: 12,
    },
};var PrivateMonthPickerMonthListDefaultProps = {};var PrivateMonthPickerMonthDefaultProps = {};var StyledContainer$2 = material.styled(material.Grid)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  padding: 4px;\n  position: relative;\n"], ["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton = material.styled(material.Button)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    background-color: rgba(66, 165, 245, 0.3);\n    border: 1px solid transparent;\n  }\n"], ["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    background-color: rgba(66, 165, 245, 0.3);\n    border: 1px solid transparent;\n  }\n"])));
var templateObject_1$5, templateObject_2$2;var PrivateMonthPickerMonth = React.forwardRef(function (_a, ref) {
    var month = _a.month, range = _a.range, disabled = _a.disabled, isDefault = _a.isDefault, active = _a.active, selected = _a.selected, selectedStart = _a.selectedStart, selectedEnd = _a.selectedEnd, selectedTemp = _a.selectedTemp, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    var className = React.useMemo(function () {
        return classNames(range && 'range', isDefault && 'default', active && 'active', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', disabled && 'disabled');
    }, [range, isDefault, active, selected, selectedStart, selectedEnd, selectedTemp, disabled]);
    var handleClick = React.useCallback(function () {
        onClick && onClick(month);
    }, [month, onClick]);
    return (React.createElement(StyledContainer$2, { className: 'PrivateMonthPickerMonth', ref: ref, item: true, xs: 4 },
        React.createElement(StyledButton, { className: className, disabled: disabled, onClick: handleClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            month,
            "\uC6D4")));
});
PrivateMonthPickerMonth.displayName = 'PrivateMonthPickerMonth';
PrivateMonthPickerMonth.defaultProps = PrivateMonthPickerMonthDefaultProps;var StyledContainer$1 = material.styled(material.Grid)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  width: 240px;\n  padding: 4px;\n"], ["\n  width: 240px;\n  padding: 4px;\n"])));
var templateObject_1$4;var PrivateMonthPickerMonthList = function (_a) {
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var value = _a.value, initDefaultValue = _a.defaultValue, minAvailableValue = _a.minAvailableValue, maxAvailableValue = _a.maxAvailableValue, disablePast = _a.disablePast, disableFuture = _a.disableFuture, selectFromValue = _a.selectFromValue, selectToValue = _a.selectToValue, onChange = _a.onChange;
    var valueToYm = React.useCallback(function (v) { return v.year * 100 + v.month; }, []);
    var dateToValue = React.useCallback(function (v) { return ({ year: v.year(), month: v.month() + 1 }); }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowDate = React.useMemo(function () { return dayjs(); }, []);
    var nowValue = React.useMemo(function () { return dateToValue(nowDate); }, [dateToValue, nowDate]);
    var nowYm = React.useMemo(function () { return Number(nowDate.format('YYYYMM')); }, [nowDate]);
    var minAvailableYm = React.useMemo(function () { return valueToYm(minAvailableValue); }, [minAvailableValue, valueToYm]);
    var maxAvailableYm = React.useMemo(function () { return valueToYm(maxAvailableValue); }, [maxAvailableValue, valueToYm]);
    var defaultValue = React.useMemo(function () {
        if (initDefaultValue) {
            return initDefaultValue;
        }
        else if (nowYm < minAvailableYm) {
            return minAvailableValue;
        }
        else if (nowYm > maxAvailableYm) {
            return maxAvailableValue;
        }
        else {
            return nowValue;
        }
    }, [initDefaultValue, nowYm, minAvailableYm, maxAvailableYm, minAvailableValue, maxAvailableValue, nowValue]);
    var defaultYear = React.useMemo(function () { return defaultValue.year; }, [defaultValue]);
    var defaultMonth = React.useMemo(function () { return defaultValue.month; }, [defaultValue]);
    var currentYear = React.useMemo(function () { return (value ? value.year : defaultYear); }, [value, defaultYear]);
    var months = React.useMemo(function () {
        var newMonths = [];
        var range = !!selectFromValue || !!selectToValue;
        var startYm = selectFromValue ? valueToYm(selectFromValue) : value ? valueToYm(value) : 0;
        var endYm = selectToValue ? valueToYm(selectToValue) : value ? valueToYm(value) : 0;
        for (var i = 1; i <= 12; i += 1) {
            var ym = currentYear * 100 + i;
            newMonths.push({
                month: i,
                range: range,
                isDefault: !value && i === defaultMonth,
                active: (!!selectFromValue || !!selectToValue) && !!value && ym === valueToYm(value),
                selected: !!value && ym >= startYm && ym <= endYm,
                selectedStart: !!value && ym === startYm,
                selectedEnd: !!value && ym === endYm,
                disabled: ym < minAvailableYm || ym > maxAvailableYm || (disablePast && ym < nowYm) || (disableFuture && ym > nowYm),
            });
        }
        return newMonths;
    }, [
        selectFromValue,
        valueToYm,
        value,
        selectToValue,
        currentYear,
        defaultMonth,
        minAvailableYm,
        maxAvailableYm,
        disablePast,
        nowYm,
        disableFuture,
    ]);
    var handleMonthChange = React.useCallback(function (month) {
        onChange({ year: currentYear, month: month });
    }, [currentYear, onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$1, { className: 'PrivateMonthPickerMonthList', container: true }, months.map(function (info) { return (React.createElement(PrivateMonthPickerMonth, { key: info.month, month: info.month, range: info.range, isDefault: info.isDefault, active: info.active, selected: info.selected, selectedStart: info.selectedStart, selectedEnd: info.selectedEnd, selectedTemp: info.selectedTemp, disabled: info.disabled, onClick: handleMonthChange })); })));
};
PrivateMonthPickerMonthList.displayName = 'PrivateMonthPickerMonthList';
PrivateMonthPickerMonthList.defaultProps = PrivateMonthPickerMonthListDefaultProps;var StyledContainer = material.styled('div')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  .PrivateYearPickerYearList {\n    max-height: 130px;\n  }\n"], ["\n  .PrivateYearPickerYearList {\n    max-height: 130px;\n  }\n"])));
var TitleContainer = material.styled('div')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton = material.styled(material.IconButton)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth = material.styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var StyledYearMonthError = material.styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"], ["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.error.main;
});
var templateObject_1$3, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5;var PrivateMonthPicker = function (_a) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var initValue = _a.value, initMinValue = _a.minValue, initMaxValue = _a.maxValue, disablePast = _a.disablePast, disableFuture = _a.disableFuture, selectFromValue = _a.selectFromValue, selectToValue = _a.selectToValue, onChange = _a.onChange;
    var _b = reactHook.useAutoUpdateState(initValue || null), value = _b[0], setValue = _b[1];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var valueToDate = React.useCallback(function (v) { return dayjs("".concat(v.year, "-").concat(v.month, "-01")); }, []);
    var valueToYm = React.useCallback(function (v) { return v.year * 100 + v.month; }, []);
    var dateToValue = React.useCallback(function (v) { return ({ year: v.year(), month: v.month() + 1 }); }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowValue = React.useMemo(function () { return dateToValue(dayjs()); }, [dateToValue]);
    var nowYm = React.useMemo(function () { return valueToYm(nowValue); }, [nowValue, valueToYm]);
    var minValue = React.useMemo(function () { return initMinValue || PrivateMonthPickerDefaultProps.minValue; }, [initMinValue]);
    var maxValue = React.useMemo(function () { return initMaxValue || PrivateMonthPickerDefaultProps.maxValue; }, [initMaxValue]);
    var minAvailableValue = React.useMemo(function () {
        if (disablePast) {
            var minYm = valueToYm(minValue);
            return nowYm > minYm ? nowValue : minValue;
        }
        else {
            return minValue;
        }
    }, [disablePast, valueToYm, minValue, nowYm, nowValue]);
    var minAvailableYm = React.useMemo(function () { return valueToYm(minAvailableValue); }, [minAvailableValue, valueToYm]);
    var maxAvailableValue = React.useMemo(function () {
        if (disableFuture) {
            var maxYm = valueToYm(maxValue);
            return nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            return maxValue;
        }
    }, [disableFuture, valueToYm, maxValue, nowYm, nowValue]);
    var maxAvailableYm = React.useMemo(function () { return valueToYm(maxAvailableValue); }, [maxAvailableValue, valueToYm]);
    var displayValue = React.useMemo(function () {
        if (value && !Number.isNaN(value.year) && !Number.isNaN(value.month)) {
            return value;
        }
        else {
            if (nowYm < minAvailableYm) {
                return minAvailableValue;
            }
            else if (nowYm > maxAvailableYm) {
                return maxAvailableValue;
            }
            else {
                return selectFromValue || selectToValue || nowValue;
            }
        }
    }, [
        maxAvailableValue,
        maxAvailableYm,
        minAvailableValue,
        minAvailableYm,
        nowValue,
        nowYm,
        selectFromValue,
        selectToValue,
        value,
    ]);
    var displayValueDate = React.useMemo(function () { return valueToDate(displayValue); }, [displayValue, valueToDate]);
    var displayValueYm = React.useMemo(function () { return displayValue.year * 100 + displayValue.month; }, [displayValue]);
    var displayValueError = React.useMemo(function () { return displayValueYm < minAvailableYm || displayValueYm > maxAvailableYm; }, [displayValueYm, maxAvailableYm, minAvailableYm]);
    var prevBtnDisabled = React.useMemo(function () { return displayValueYm <= minAvailableYm; }, [displayValueYm, minAvailableYm]);
    var nextBtnDisabled = React.useMemo(function () { return displayValueYm >= maxAvailableYm; }, [displayValueYm, maxAvailableYm]);
    var selectFromYear = React.useMemo(function () { return (selectFromValue ? selectFromValue.year : undefined); }, [selectFromValue]);
    var selectToYear = React.useMemo(function () { return (selectToValue ? selectToValue.year : undefined); }, [selectToValue]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearChange = React.useCallback(function (year) {
        var newValue = __assign(__assign({}, displayValue), { year: year });
        var valueYm = valueToYm(newValue);
        if (valueYm < minAvailableYm) {
            setValue(minAvailableValue);
            onChange(minAvailableValue, false);
        }
        else if (valueYm > maxAvailableYm) {
            setValue(maxAvailableValue);
            onChange(maxAvailableValue, false);
        }
        else {
            setValue(newValue);
            onChange(newValue, false);
        }
    }, [displayValue, maxAvailableValue, maxAvailableYm, minAvailableValue, minAvailableYm, onChange, setValue, valueToYm]);
    var handleMonthChange = React.useCallback(function (newValue) {
        setValue(newValue);
        onChange(newValue, true);
    }, [onChange, setValue]);
    var handlePrevClick = React.useCallback(function () {
        var newValue = dateToValue(displayValueDate.subtract(1, 'months'));
        setValue(newValue);
        onChange(newValue, false);
    }, [dateToValue, displayValueDate, onChange, setValue]);
    var handleNextClick = React.useCallback(function () {
        var newValue = dateToValue(displayValueDate.add(1, 'months'));
        setValue(newValue);
        onChange(newValue, false);
    }, [dateToValue, displayValueDate, onChange, setValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer, { className: 'PrivateMonthPicker' },
        React.createElement(TitleContainer, null,
            React.createElement(StyledIconButton, { disabled: prevBtnDisabled, onClick: handlePrevClick },
                React.createElement(reactComponent.PdgIcon, null, "KeyboardArrowLeft")),
            displayValueError ? (React.createElement(StyledYearMonthError, null,
                displayValue.year,
                "\uB144 ",
                displayValue.month,
                "\uC6D4")) : (React.createElement(StyledYearMonth, null,
                displayValue.year,
                "\uB144 ",
                displayValue.month,
                "\uC6D4")),
            React.createElement(StyledIconButton, { disabled: nextBtnDisabled, onClick: handleNextClick },
                React.createElement(reactComponent.PdgIcon, null, "KeyboardArrowRight"))),
        React.createElement("div", null,
            React.createElement(PrivateYearPicker, { value: (value === null || value === void 0 ? void 0 : value.year) || null, minYear: minValue.year, maxYear: maxValue.year, disablePast: disablePast, disableFuture: disableFuture, onChange: handleYearChange, hideHeader: true, selectFromYear: selectFromYear, selectToYear: selectToYear })),
        React.createElement("div", { style: { borderTop: '1px solid #efefef' } },
            React.createElement(PrivateMonthPickerMonthList, { value: value, defaultValue: selectFromValue || selectToValue, minAvailableValue: minAvailableValue, maxAvailableValue: maxAvailableValue, disablePast: disablePast, disableFuture: disableFuture, selectFromValue: selectFromValue, selectToValue: selectToValue, onChange: handleMonthChange }))));
};
PrivateMonthPicker.displayName = 'PrivateMonthPicker';
PrivateMonthPicker.defaultProps = PrivateMonthPickerDefaultProps;var PrivateMonthRangePickerDefaultProps = {
    minValue: {
        year: 2020,
        month: 1,
    },
    maxValue: {
        year: 2050,
        month: 12,
    },
};var StyledDiv = material.styled(material.Grid)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  width: 30px;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  background-color: #fafafa;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  width: 30px;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  background-color: #fafafa;\n"])));
var StyledActionContainer = material.styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"], ["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton = material.styled(material.Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));
var templateObject_1$2, templateObject_2, templateObject_3;var PrivateMonthRangePicker = function (_a) {
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var value = _a.value, initMinValue = _a.minValue, initMaxValue = _a.maxValue, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange;
    var valueToYm = React.useCallback(function (v) { return v.year * 100 + v.month; }, []);
    var dateToValue = React.useCallback(function (v) { return ({ year: v.year(), month: v.month() + 1 }); }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowDate = React.useMemo(function () { return dayjs(); }, []);
    var nowValue = React.useMemo(function () { return dateToValue(nowDate); }, [dateToValue, nowDate]);
    var nowYm = React.useMemo(function () { return valueToYm(nowValue); }, [nowValue, valueToYm]);
    var minValue = React.useMemo(function () { return initMinValue || PrivateMonthRangePickerDefaultProps.minValue; }, [initMinValue]);
    var maxValue = React.useMemo(function () { return initMaxValue || PrivateMonthRangePickerDefaultProps.maxValue; }, [initMaxValue]);
    var minAvailableValue = React.useMemo(function () {
        if (disablePast) {
            var minYm = valueToYm(minValue);
            return nowYm > minYm ? nowValue : minValue;
        }
        else {
            return minValue;
        }
    }, [disablePast, valueToYm, minValue, nowYm, nowValue]);
    var minAvailableYm = React.useMemo(function () { return valueToYm(minAvailableValue); }, [minAvailableValue, valueToYm]);
    var maxAvailableValue = React.useMemo(function () {
        if (disableFuture) {
            var maxYm = valueToYm(maxValue);
            return nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            return maxValue;
        }
    }, [disableFuture, valueToYm, maxValue, nowYm, nowValue]);
    var maxAvailableYm = React.useMemo(function () { return valueToYm(maxAvailableValue); }, [maxAvailableValue, valueToYm]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var getFinalValue = React.useCallback(function (v, selectType) {
        var finalValue = [v[0], v[1]];
        if (finalValue[0]) {
            var startYm = valueToYm(finalValue[0]);
            if (startYm < minAvailableYm) {
                finalValue[0] = minAvailableValue;
            }
            else if (startYm > maxAvailableYm) {
                finalValue[0] = maxAvailableValue;
            }
        }
        if (finalValue[1]) {
            var endYm = valueToYm(finalValue[1]);
            if (finalValue[0]) {
                if (valueToYm(finalValue[0]) > endYm) {
                    if (selectType === 'start') {
                        finalValue[1] = finalValue[0];
                    }
                    else {
                        finalValue[0] = finalValue[1];
                    }
                }
            }
            endYm = valueToYm(finalValue[1]);
            if (endYm < minAvailableYm) {
                finalValue[1] = minAvailableValue;
            }
            else if (endYm > maxAvailableYm) {
                finalValue[1] = maxAvailableValue;
            }
        }
        return finalValue;
    }, [maxAvailableValue, maxAvailableYm, minAvailableValue, minAvailableYm, valueToYm]);
    /********************************************************************************************************************
     * action button
     * ******************************************************************************************************************/
    var getActionButton = React.useCallback(function (fromDate, toDate, label, strict) {
        var fromValue = dateToValue(fromDate);
        var fromYm = valueToYm(fromValue);
        var toValue = dateToValue(toDate);
        var toYm = valueToYm(toValue);
        if (strict && (fromYm < minAvailableYm || toYm > maxAvailableYm)) {
            return undefined;
        }
        else if (!strict &&
            ((fromYm < minAvailableYm && toYm < minAvailableYm) || (fromYm > maxAvailableYm && toYm > maxAvailableYm))) {
            return undefined;
        }
        else {
            return (React.createElement(StyledActionButton, { variant: 'text', onClick: function () { return onChange(getFinalValue([fromValue, toValue], 'end'), 'end', true); } }, label));
        }
    }, [dateToValue, getFinalValue, maxAvailableYm, minAvailableYm, onChange, valueToYm]);
    var actionButtons = React.useMemo(function () {
        return (React.createElement(StyledActionContainer, null,
            getActionButton(dayjs(nowDate).subtract(2, 'months'), nowDate, '최근 3개월', true),
            getActionButton(dayjs(nowDate).subtract(5, 'months'), nowDate, '최근 6개월', true),
            getActionButton(dayjs(nowDate).subtract(11, 'months'), nowDate, '최근 12개월', true),
            getActionButton(dayjs(nowDate).subtract(23, 'months'), nowDate, '최근 24개월', true),
            getActionButton(dayjs(nowDate).subtract(2, 'years').set('months', 0), dayjs(nowDate).subtract(2, 'years').set('months', 11), '재작년'),
            getActionButton(dayjs(nowDate).subtract(1, 'years').set('months', 0), dayjs(nowDate).subtract(1, 'years').set('months', 11), '작년'),
            getActionButton(dayjs(nowDate).set('months', 0), dayjs(nowDate).set('months', 11), '올해')));
    }, [getActionButton, nowDate]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleStartMonthChange = React.useCallback(function (v, isMonthSelect) {
        var finalValue = getFinalValue([v, value[1]], 'start');
        onChange(finalValue, 'start', isMonthSelect);
    }, [getFinalValue, onChange, value]);
    var handleEndMonthChange = React.useCallback(function (v, isMonthSelect) {
        var finalValue = getFinalValue([value[0], v], 'end');
        onChange(finalValue, 'end', isMonthSelect);
    }, [getFinalValue, onChange, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", null,
        React.createElement(material.Grid, { container: true, className: 'PrivateMonthRangePicker' },
            React.createElement(material.Grid, { item: true },
                React.createElement(PrivateMonthPicker, { value: value[0], selectToValue: value[1], minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, onChange: handleStartMonthChange })),
            React.createElement(StyledDiv, null, "~"),
            React.createElement(material.Grid, { item: true },
                React.createElement(PrivateMonthPicker, { value: value[1], selectFromValue: value[0], minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, onChange: handleEndMonthChange }))),
        actionButtons));
};
PrivateMonthRangePicker.displayName = 'PrivateMonthRangePicker';
PrivateMonthRangePicker.defaultProps = PrivateMonthRangePickerDefaultProps;var FormDatePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = React.useCallback(function (id, commands) {
        commands.getType = function () { return 'FormDatePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormContextProvider, { value: __assign({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React.createElement(PrivateDatePicker, __assign({ className: classNames(className, 'FormDatePicker') }, props, { ref: ref, type: 'date' }))));
});
FormDatePicker.displayName = 'FormDatePicker';
FormDatePicker.defaultProps = FormDatePickerDefaultProps;var FormDateTimePickerDefaultProps = {};var FormDateTimePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = React.useCallback(function (id, commands) {
        commands.getType = function () { return 'FormDateTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormContextProvider, { value: __assign({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React.createElement(PrivateDateTimePicker, __assign({ className: classNames(className, 'FormDateTimePicker') }, props, { ref: ref, type: 'date_time' }))));
});
FormDateTimePicker.displayName = 'FormDateTimePicker';
FormDateTimePicker.defaultProps = FormDateTimePickerDefaultProps;var FormTimePickerDefaultProps = {};var FormTimePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = React.useCallback(function (id, commands) {
        commands.getType = function () { return 'FormTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormContextProvider, { value: __assign({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React.createElement(PrivateDateTimePicker, __assign({ className: classNames(className, 'FormTimePicker') }, props, { ref: ref, type: 'time' }))));
});
FormTimePicker.displayName = 'FormTimePicker';
FormTimePicker.defaultProps = FormTimePickerDefaultProps;var FormDateRangePickerDefaultProps = {
    calendarCount: 2,
    format: 'YYYY-MM-DD',
    formValueFormat: 'YYYY-MM-DD',
    formValueFromNameSuffix: '_from',
    formValueToNameSuffix: '_to',
    align: 'center',
};var FormDateRangePickerTooltipPickerContainerDefaultProps = {
    calendarCount: 2,
};var FormDateRangePickerTooltipPickerDefaultProps = {};var css_248z$3 = ".FormDateRangePickerTooltipPicker .MuiPickersCalendarHeader-root {\n  display: none;\n}\n.FormDateRangePickerTooltipPicker .MuiDayPicker-header > span {\n  margin: 0;\n}\n.FormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content {\n  min-width: 292px;\n}\n.FormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root > div {\n  width: 292px;\n}\n.FormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root > div .MuiCalendarPicker-root {\n  width: 292px;\n}\n.FormDateRangePickerTooltipPicker .selected-bg {\n  display: none;\n  position: absolute;\n}\n.FormDateRangePickerTooltipPicker .selected-bg.sel {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(66, 165, 245, 0.6);\n}\n.FormDateRangePickerTooltipPicker .selected-bg.sel.ui-start, .FormDateRangePickerTooltipPicker .selected-bg.sel.s-start {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n.FormDateRangePickerTooltipPicker .selected-bg.sel.ui-end, .FormDateRangePickerTooltipPicker .selected-bg.sel.s-end {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n.FormDateRangePickerTooltipPicker .selected-bg.sel ~ .MuiPickersDay-root {\n  border: 0;\n}\n.FormDateRangePickerTooltipPicker .selected-bg.sel ~ .MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected) {\n  background-color: transparent;\n}\n.FormDateRangePickerTooltipPicker .focused-bg {\n  display: none;\n  position: absolute;\n}\n.FormDateRangePickerTooltipPicker .focused-bg.focused {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 2px solid #efefef;\n  border-left: 0;\n  border-right: 0;\n}\n.FormDateRangePickerTooltipPicker .focused-bg.focused.ui-start, .FormDateRangePickerTooltipPicker .focused-bg.focused.f-start {\n  border-left: 2px solid #efefef;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n.FormDateRangePickerTooltipPicker .focused-bg.focused.ui-end, .FormDateRangePickerTooltipPicker .focused-bg.focused.f-end {\n  border-right: 2px solid #efefef;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n.FormDateRangePickerTooltipPicker .focused-bg.focused ~ .MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected) {\n  background-color: transparent;\n}";
styleInject(css_248z$3);var FormDateRangePickerTooltipPicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var selectType = _a.selectType, initValue = _a.value, focusedDate = _a.focusedDate, month = _a.month, disableFuture = _a.disableFuture, disablePast = _a.disablePast, minDate = _a.minDate, maxDate = _a.maxDate, onValueChange = _a.onValueChange, onMouseEnterPickersDay = _a.onMouseEnterPickersDay, onMonthChange = _a.onMonthChange;
    var _b = React.useState(null), activeMonthValue = _b[0], setActiveMonthValue = _b[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var value = React.useMemo(function () { return (initValue ? initValue : [null, null]); }, [initValue]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        setActiveMonthValue(null);
    }, [selectType]);
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = React.useRef();
    var rightArrowOnClickRef = React.useRef();
    var LeftArrowButton = React.useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = React.useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(material.IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    //--------------------------------------------------------------------------------------------------------------------
    var getDateVal = React.useCallback(function (date) {
        return Number(date.format('YYYYMMDD'));
    }, []);
    //--------------------------------------------------------------------------------------------------------------------
    var baseClassNames = React.useMemo(function () {
        var newValue = {};
        var lastDayOfMonth = month.endOf('month').date();
        var now = dayjs(month);
        for (var i = 1; i <= lastDayOfMonth; i += 1) {
            var className = '';
            now = now.set('date', i);
            var nowVal = getDateVal(now);
            var dayOfWeek = now.day();
            if (i === 1 || dayOfWeek === 0)
                className += 'ui-start ';
            if (i === lastDayOfMonth || dayOfWeek === 6)
                className += 'ui-end ';
            newValue[nowVal] = className;
        }
        return newValue;
    }, [getDateVal, month]);
    var selectedClassNames = React.useMemo(function () {
        var newValue = {};
        var startDateVal = value[0] ? getDateVal(value[0]) : null;
        var endDateVal = value[1] ? getDateVal(value[1]) : null;
        var lastDayOfMonth = month.endOf('month').date();
        var now = dayjs(month);
        for (var i = 1; i <= lastDayOfMonth; i += 1) {
            var className = '';
            now = now.set('date', i);
            var nowVal = getDateVal(now);
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
    var focusedClassNames = React.useMemo(function () {
        var newValue = {};
        var startDateVal = value[0] ? getDateVal(value[0]) : null;
        var endDateVal = value[1] ? getDateVal(value[1]) : null;
        var focusedDateVal = focusedDate ? getDateVal(focusedDate) : null;
        var lastDayOfMonth = month.endOf('month').date();
        if (focusedDateVal && ((selectType === 'start' && endDateVal) || (selectType === 'end' && startDateVal))) {
            var now = dayjs(month);
            for (var i = 1; i <= lastDayOfMonth; i += 1) {
                var className = '';
                now = now.set('date', i);
                var nowVal = getDateVal(now);
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
    //--------------------------------------------------------------------------------------------------------------------
    var previousMonth = React.useCallback(function () {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    var nextMonth = React.useCallback(function () {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    var activeMonth = React.useCallback(function (month) {
        setActiveMonthValue(month);
    }, []);
    React.useLayoutEffect(function () {
        if (ref) {
            var commands = {
                previousMonth: previousMonth,
                nextMonth: nextMonth,
                activeMonth: activeMonth,
            };
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
            return function () {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            };
        }
    }, [ref, previousMonth, nextMonth, activeMonth]);
    //--------------------------------------------------------------------------------------------------------------------
    var handleRenderDay = React.useCallback(function (props) {
        var startDate = value[0];
        var endDate = value[1];
        var dateVal = getDateVal(props.day);
        var baseClassName = baseClassNames[dateVal];
        var selectedClassName = selectedClassNames[dateVal];
        var focusedClassName = focusedClassNames[dateVal];
        return (React.createElement("div", { key: props.key, style: { position: 'relative' } },
            React.createElement("div", { className: classNames('focused-bg', baseClassName, focusedClassName) }),
            React.createElement("div", { className: classNames('selected-bg', baseClassName, selectedClassName) }),
            React.createElement(xDatePickers.PickersDay, __assign({}, props, { disableMargin: true, selected: props.day.isSame(startDate, 'date') || props.day.isSame(endDate, 'date'), onMouseEnter: value[0] || value[1] ? function () { return onMouseEnterPickersDay && onMouseEnterPickersDay(props.day); } : undefined }))));
    }, [value, getDateVal, baseClassNames, selectedClassNames, focusedClassNames, onMouseEnterPickersDay]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.StaticDatePicker, { className: 'FormDateRangePickerTooltipPicker', displayStaticWrapperAs: 'desktop', slots: {
            previousIconButton: LeftArrowButton,
            nextIconButton: RightArrowButton,
            day: handleRenderDay,
        }, value: activeMonthValue, defaultCalendarMonth: month, disableFuture: disableFuture, disablePast: disablePast, minDate: minDate, maxDate: maxDate, onChange: function (newValue) { return onValueChange && onValueChange(selectType, newValue); }, 
        // renderDay={handleRenderDay}
        // renderInput={(params) => <TextField {...params} />}
        // format='YYYY-MM-DD HH:mm:ss'
        onMonthChange: function (month) {
            if (onMonthChange)
                onMonthChange(month);
            setActiveMonthValue(null);
        } }));
});
FormDateRangePickerTooltipPicker.displayName = 'FormDateRangePickerTooltipPicker';
FormDateRangePickerTooltipPicker.defaultProps = FormDateRangePickerTooltipPickerDefaultProps;var css_248z$2 = ".FormDateRangePickerTooltipPickerContainer {\n  display: inline-block;\n  position: relative;\n}\n.FormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  right: 0;\n}\n.FormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap > div:first-of-type {\n  padding-left: 20px;\n}\n.FormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap > div:last-child {\n  padding-right: 20px;\n  text-align: right;\n}\n.FormDateRangePickerTooltipPickerContainer .month-title {\n  text-align: center;\n  padding-top: 13px;\n  padding-bottom: 10px;\n}\n.FormDateRangePickerTooltipPickerContainer .month-title button {\n  font-size: 15px;\n  padding-left: 8px;\n  padding-right: 0;\n  min-width: 0;\n}\n.FormDateRangePickerTooltipPickerContainer .month-title button:not(.active) {\n  color: unset;\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap {\n  position: relative;\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select,\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-top: 1px solid #efefef;\n  padding-top: 15px;\n  background-color: white;\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.today:not(.selected),\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.today:not(.selected) {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected),\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected) {\n  background-color: #f5f5f5;\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected):hover,\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected):hover {\n  background-color: rgb(229, 229, 229);\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select {\n  overflow-y: scroll;\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button {\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 18px;\n}\n.FormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button {\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 18px;\n}\n.FormDateRangePickerTooltipPickerContainer .action-buttons button {\n  min-width: 0;\n  color: unset;\n}\n.FormDateRangePickerTooltipPickerContainer .action-buttons button:not(:first-of-type) {\n  margin-left: 5px;\n}\n.FormDateRangePickerTooltipPickerContainer .action-buttons button.disabled {\n  color: rgba(0, 0, 0, 0.5);\n}";
styleInject(css_248z$2);var YEARS = new Array(200).fill(0);
for (var i = 0; i < 200; i += 1) {
    YEARS[i] = 1900 + i;
}
var MONTHS = new Array(12).fill(0);
for (var i = 0; i < 12; i += 1) {
    MONTHS[i] = i;
}
var FormDateRangePickerTooltipPickerContainer = React.forwardRef(function (_a, ref) {
    var selectType = _a.selectType, value = _a.value, calendarCount = _a.calendarCount, months = _a.months, disablePast = _a.disablePast, disableFuture = _a.disableFuture, maxDate = _a.maxDate, minDate = _a.minDate, onGetActionButtons = _a.onGetActionButtons, onChange = _a.onChange, onValueChange = _a.onValueChange, onMonthsChange = _a.onMonthsChange;
    var theme = material.useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var datePicker1Ref = React.useRef(null);
    var datePicker2Ref = React.useRef(null);
    var datePicker3Ref = React.useRef(null);
    var yearSelectRef = React.useRef(null);
    var activeYearBtnRef = React.useRef(null);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _b = React.useState(), focusedDate = _b[0], setFocusedDate = _b[1];
    var _c = React.useState(0), yearMonthSelectIndex = _c[0], setYearMonthSelectIndex = _c[1];
    var _d = React.useState(false), yearSelectOpen = _d[0], setYearSelectOpen = _d[1];
    var _e = React.useState(false), monthSelectOpen = _e[0], setMonthSelectOpen = _e[1];
    var customDatePickerProps = React.useMemo(function () { return ({ selectType: selectType, value: value, minDate: minDate, maxDate: maxDate, disableFuture: disableFuture, disablePast: disablePast, onValueChange: onValueChange }); }, [selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange]);
    var availableDate = React.useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [minDate, maxDate, disablePast, disableFuture]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (yearSelectOpen) {
            util.nextTick(function () {
                var _a, _b, _c;
                var wrapRect = (_a = yearSelectRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                var activeRect = (_b = activeYearBtnRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
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
    var previousMonth = React.useCallback(function () {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.previousMonth();
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.previousMonth();
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.previousMonth();
    }, []);
    var nextMonth = React.useCallback(function () {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.nextMonth();
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.nextMonth();
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.nextMonth();
    }, []);
    var activeMonth = React.useCallback(function (month) {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.activeMonth(month.add(1, 'month'));
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.activeMonth(month.add(2, 'month'));
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleFirstDatePickerMonthChange = React.useCallback(function (date) {
        if (onMonthsChange) {
            onMonthsChange([date, date.add(1, 'month'), date.add(2, 'month')]);
        }
    }, [onMonthsChange]);
    var handleYearSelectClick = React.useCallback(function (index) {
        if (yearSelectOpen) {
            setYearSelectOpen(false);
            if (index !== yearMonthSelectIndex) {
                util.nextTick(function () {
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
    var handleMonthSelectClick = React.useCallback(function (index) {
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
    var handleYearSelect = React.useCallback(function (year) {
        activeMonth(months[yearMonthSelectIndex].set('year', year).subtract(yearMonthSelectIndex, 'month'));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [activeMonth, months, yearMonthSelectIndex]);
    var handleMonthSelect = React.useCallback(function (m) {
        activeMonth(months[yearMonthSelectIndex].set('month', m).subtract(yearMonthSelectIndex, 'month'));
        setMonthSelectOpen(false);
    }, [activeMonth, months, yearMonthSelectIndex]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        if (ref) {
            var commands = {
                previousMonth: previousMonth,
                nextMonth: nextMonth,
                activeMonth: activeMonth,
            };
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
            return function () {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            };
        }
    }, [ref, previousMonth, nextMonth, activeMonth]);
    /********************************************************************************************************************
     * Render Function
     * ******************************************************************************************************************/
    var getMonthTitle = React.useCallback(function (index) {
        return (React.createElement("div", { className: 'month-title' },
            React.createElement(material.Button, { variant: 'text', className: yearSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: function () { return handleYearSelectClick(index); } },
                months[index].format('YYYY년'),
                React.createElement(material.Icon, null, yearSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down')),
            React.createElement(material.Button, { variant: 'text', className: monthSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: function () { return handleMonthSelectClick(index); } },
                months[index].format('M월'),
                React.createElement(material.Icon, null, monthSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down'))));
    }, [yearSelectOpen, yearMonthSelectIndex, months, monthSelectOpen, handleYearSelectClick, handleMonthSelectClick]);
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    var getActionButton = React.useCallback(function (startDate, endDate, label) {
        var availableDateDate = getAvailableDate(availableDate, 'date');
        var availableDateVal = getAvailableDateVal(availableDate, 'date');
        var startDateVal = getDateValForAvailableDate(startDate, 'date');
        var endDateVal = getDateValForAvailableDate(endDate, 'date');
        var disabled = (!!availableDateVal[0] && endDateVal < availableDateVal[0]) ||
            (!!availableDateVal[1] && startDateVal > availableDateVal[1]);
        var finalStartDate = startDate, finalEndDate = endDate;
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
        return (React.createElement(material.Button, { className: disabled ? 'disabled' : undefined, variant: 'text', disabled: disabled, onClick: function () {
                onChange([finalStartDate, finalEndDate]);
            } }, label));
    }, [onChange, availableDate]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var actionButtons = React.useMemo(function () {
        if (onGetActionButtons) {
            return onGetActionButtons().map(function (info, idx) { return (React.createElement(React.Fragment, { key: idx }, getActionButton(info.start, info.end, info.label))); });
        }
        else {
            var now = dayjs().startOf('d');
            var lastWeek = now.subtract(1, 'week');
            var dayOfWeek = now.day();
            var lastWeekDate = void 0;
            var thisWeekDate = void 0;
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
    return (React.createElement("div", { className: 'FormDateRangePickerTooltipPickerContainer' },
        React.createElement(material.Grid, { container: true, direction: 'column' },
            !yearSelectOpen && !monthSelectOpen && (React.createElement(material.Grid, { item: true },
                React.createElement(material.Grid, { container: true, className: 'month-change-arrow-wrap' },
                    React.createElement(material.Grid, { item: true, xs: 6 },
                        React.createElement(material.IconButton, { onClick: previousMonth },
                            React.createElement(material.Icon, null, "keyboard_arrow_left"))),
                    React.createElement(material.Grid, { item: true, xs: 6 },
                        React.createElement(material.IconButton, { onClick: nextMonth },
                            React.createElement(material.Icon, null, "keyboard_arrow_right")))))),
            React.createElement(material.Grid, { item: true, onMouseLeave: function () { return setFocusedDate(undefined); } },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", { style: { flex: 1 } }, getMonthTitle(0)),
                    React.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(1)),
                    Number(calendarCount) >= 3 && (React.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(2)))),
                React.createElement("div", { className: 'date-picker-wrap' },
                    React.createElement(material.Grid, { container: true, flexWrap: 'nowrap' },
                        React.createElement(material.Grid, { item: true },
                            React.createElement(FormDateRangePickerTooltipPicker, __assign({}, customDatePickerProps, { ref: datePicker1Ref, focusedDate: focusedDate, month: months[0], onMouseEnterPickersDay: setFocusedDate, onMonthChange: handleFirstDatePickerMonthChange }))),
                        React.createElement(material.Grid, { item: true, style: { borderLeft: '1px solid #efefef' } },
                            React.createElement(FormDateRangePickerTooltipPicker, __assign({}, customDatePickerProps, { ref: datePicker2Ref, focusedDate: focusedDate, month: months[1], onMouseEnterPickersDay: setFocusedDate }))),
                        Number(calendarCount) >= 3 && (React.createElement(material.Grid, { item: true, style: { borderLeft: '1px solid #efefef' } },
                            React.createElement(FormDateRangePickerTooltipPicker, __assign({}, customDatePickerProps, { ref: datePicker3Ref, focusedDate: focusedDate, month: months[2], onMouseEnterPickersDay: setFocusedDate }))))),
                    yearSelectOpen && (React.createElement("div", { ref: yearSelectRef, className: 'year-select' },
                        React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS.map(function (y) {
                            var _a;
                            var today = dayjs();
                            var isToday = y === today.year();
                            var isActive = y === months[yearMonthSelectIndex].year();
                            var isSelected = y === ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year());
                            var disabled = !isDateAvailable(dayjs(y.toString(), 'YYYY'), availableDate, 'year');
                            return (React.createElement(material.Grid, { key: y, item: true, xs: 2 },
                                React.createElement(material.Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
                                        backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                                        color: isSelected ? 'white' : 'unset',
                                        ':hover': {
                                            backgroundColor: isSelected
                                                ? material.darken(theme.palette.primary.main, 0.2)
                                                : material.darken('#fff', 0.1),
                                        },
                                    }, onClick: function () { return handleYearSelect(y); } }, y)));
                        })))),
                    monthSelectOpen && (React.createElement("div", { className: 'month-select' },
                        React.createElement(material.Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS.map(function (m) {
                            var _a, _b;
                            var today = dayjs();
                            var isToday = today.year() === months[yearMonthSelectIndex].year() && m === today.month();
                            var isActive = m === months[yearMonthSelectIndex].month();
                            var isSelected = ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year()) === months[yearMonthSelectIndex].year() &&
                                m === ((_b = value[yearMonthSelectIndex]) === null || _b === void 0 ? void 0 : _b.month());
                            var ym = months[yearMonthSelectIndex].year() * 100 + (m + 1);
                            var disabled = !isDateAvailable(dayjs(ym.toString(), 'YYYYMM'), availableDate, 'month');
                            return (React.createElement(material.Grid, { key: m, item: true, xs: 4 },
                                React.createElement(material.Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
                                        backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                                        color: isSelected ? 'white' : 'unset',
                                        ':hover': {
                                            backgroundColor: isSelected
                                                ? material.darken(theme.palette.primary.main, 0.2)
                                                : material.darken('#fff', 0.1),
                                        },
                                    }, onClick: function () { return handleMonthSelect(m); } },
                                    m + 1,
                                    "\uC6D4")));
                        })))))),
            React.createElement(material.Grid, { className: 'action-buttons', item: true, style: { borderTop: '1px solid #efefef', padding: 10, textAlign: 'right' } }, actionButtons))));
});
FormDateRangePickerTooltipPickerContainer.displayName = 'FormDateRangePickerTooltipPickerContainer';
FormDateRangePickerTooltipPickerContainer.defaultProps = FormDateRangePickerTooltipPickerContainerDefaultProps;var DEFAULT_VALUE$4 = [null, null];
var DEFAULT_FORMAT$4 = 'YYYY-MM-DD';
var FormDateRangePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, initValue = _a.value, initData = _a.data, fromLabel = _a.fromLabel, fromLabelIcon = _a.fromLabelIcon, toLabel = _a.toLabel, toLabelIcon = _a.toLabelIcon, initCalendarCount = _a.calendarCount, initFormat = _a.format, formValueFormat = _a.formValueFormat, allowSingleSelect = _a.allowSingleSelect, required = _a.required, requiredStart = _a.requiredStart, requiredEnd = _a.requiredEnd, readOnly = _a.readOnly, readOnlyStart = _a.readOnlyStart, readOnlyEnd = _a.readOnlyEnd, readOnlyInput = _a.readOnlyInput, initDisabled = _a.disabled, inputWidth = _a.inputWidth, exceptValue = _a.exceptValue, initError = _a.error, helperText = _a.helperText, formValueFromNameSuffix = _a.formValueFromNameSuffix, formValueToNameSuffix = _a.formValueToNameSuffix, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, startAdornment = _a.startAdornment, startStartAdornment = _a.startStartAdornment, endStartAdornment = _a.endStartAdornment, endAdornment = _a.endAdornment, startEndAdornment = _a.startEndAdornment, endEndAdornment = _a.endEndAdornment, disablePast = _a.disablePast, disableFuture = _a.disableFuture, minDate = _a.minDate, maxDate = _a.maxDate, initHidden = _a.hidden, align = _a.align, onGetActionButtons = _a.onGetActionButtons, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var containerRef = React.useRef(null);
    var startDateTextFieldRef = React.useRef();
    var endDateTextFieldRef = React.useRef();
    var closeTimeoutRef = React.useRef();
    var mouseDownTimeRef = React.useRef();
    var startInputDatePickerErrorRef = React.useRef(null);
    var endInputDatePickerErrorRef = React.useRef(null);
    var openValueRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initError), error = _c[0], setError = _c[1];
    var _d = React.useState(), errorHelperText = _d[0], setErrorHelperText = _d[1];
    var _e = React.useState(false), fromError = _e[0], setFromError = _e[1];
    var _f = React.useState(), fromErrorHelperText = _f[0], setFromErrorHelperText = _f[1];
    var _g = React.useState(false), toError = _g[0], setToError = _g[1];
    var _h = React.useState(), toErrorHelperText = _h[0], setToErrorHelperText = _h[1];
    var _j = reactHook.useAutoUpdateRefState(initData), dataRef = _j[0], setData = _j[2];
    var _k = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _k[0], disabled = _k[1], setDisabled = _k[2];
    var _l = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _l[0], hidden = _l[1], setHidden = _l[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var format = React.useMemo(function () { return initFormat || DEFAULT_FORMAT$4; }, [initFormat]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a;
        (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [startDateTextFieldRef]);
    var focusValidate = React.useCallback(function () {
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
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var setFromErrorErrorHelperText = React.useCallback(function (error, fromErrorHelperText) {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    var setToErrorErrorHelperText = React.useCallback(function (error, toErrorHelperText) {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
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
        var startInputValue = ((_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.value) || '';
        var endInputValue = ((_b = endDateTextFieldRef.current) === null || _b === void 0 ? void 0 : _b.value) || '';
        if (util.notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
            setFromErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (util.notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
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
            var onValidateResult = onValidate(value);
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
    var activeMonth = React.useCallback(function (month) {
        var _a;
        setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
    }, [containerRef]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _m = React.useState(false), open = _m[0], setOpen = _m[1];
    var _o = React.useState('start'), selectType = _o[0], setSelectType = _o[1];
    var calendarCount = reactHook.useAutoUpdateState(initCalendarCount || 2)[0];
    var _p = React.useState(function () {
        var now = dayjs();
        return [now, now.add(1, 'month'), now.add(2, 'month')];
    }), months = _p[0], setMonths = _p[1];
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    var getFinalValue = React.useCallback(function (value) {
        return value || DEFAULT_VALUE$4;
    }, []);
    var _q = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _q[0], value = _q[1], setValue = _q[2];
    reactHook.useFirstSkipEffect(function () {
        if (error || fromError || toError)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var inputDatePickerProps = React.useMemo(function () { return ({
        align: align,
        variant: variant,
        size: size,
        color: color,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        disabled: disabled,
        format: format,
        disablePast: disablePast,
        disableFuture: disableFuture,
        minDate: minDate,
        maxDate: maxDate,
    }); }, [
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
    ]);
    var inputStyle = React.useMemo(function () { return (inputWidth != null ? { width: inputWidth } : { width: fullWidth ? undefined : 150 }); }, [inputWidth, fullWidth]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(function () {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current) {
                var openStartDate = openValueRef.current[0];
                var openEndDate = openValueRef.current[1];
                var startDate = value[0];
                var endDate = value[1];
                if (allowSingleSelect || (startDate != null && endDate != null)) {
                    var runOnRequestSearchSubmit = false;
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
     * Memo
     * ******************************************************************************************************************/
    var wrapStyle = React.useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (newValue) {
        setValue(newValue);
        setOpen(false);
        setFromErrorErrorHelperText(false, undefined);
        setToErrorErrorHelperText(false, undefined);
    }, [setFromErrorErrorHelperText, setToErrorErrorHelperText, setValue]);
    var handleValueChange = React.useCallback(function (selectType, newValue, fromInput) {
        var _a;
        var finalValue;
        switch (selectType) {
            case 'start':
                if ((_a = value[1]) === null || _a === void 0 ? void 0 : _a.isBefore(newValue)) {
                    finalValue = [newValue, null];
                    if (!fromInput) {
                        util.nextTick(function () {
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
                            util.nextTick(function () {
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
                            util.nextTick(function () {
                                onRequestSearchSubmit(name, finalValue);
                            });
                        }
                    }
                    else {
                        util.nextTick(function () {
                            var _a;
                            (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                        });
                    }
                    setToErrorErrorHelperText(false, undefined);
                }
                break;
        }
        setValue(finalValue);
        util.nextTick(function () {
            onValueChangeByUser(name, finalValue);
        });
    }, [
        setValue,
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
    var handleInputDatePickerChange = React.useCallback(function (selectType, newValue) {
        var error = false;
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
    var handleContainerFocus = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(function () {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    var handleContainerMouseDown = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    var handleInputDatePickerFocus = React.useCallback(function (selectType) {
        if (readOnly || disabled)
            return;
        var startValue = valueRef.current[0];
        var endValue = valueRef.current[1];
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
    React.useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var commands = {
                getType: function () { return 'FormDateRangePicker'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () { return setValue(initValue); },
                getValue: function () { return valueRef.current; },
                setValue: setValue,
                getData: function () { return dataRef.current; },
                setData: setData,
                getFromValue: function () { return valueRef.current[0]; },
                setFromValue: function (value) { return setValue([value, valueRef.current[1]]); },
                getToValue: function () { return valueRef.current[1]; },
                setToValue: function (value) { return setValue([valueRef.current[0], value]); },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return !!disabledRef.current; },
                setDisabled: setDisabled,
                isHidden: function () { return !!hiddenRef.current; },
                setHidden: setHidden,
                focus: focus,
                focusValidate: focusValidate,
                validate: function () { return validate(valueRef.current); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueFormat: function () { return formValueFormat || FormDateRangePickerDefaultProps.format; },
                getFormValueFromNameSuffix: function () {
                    return formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix;
                },
                getFormValueToNameSuffix: function () {
                    return formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix;
                },
                getFormValueFromName: function () {
                    return "".concat(name).concat(formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix);
                },
                getFormValueToName: function () {
                    return "".concat(name).concat(formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix);
                },
            };
            if (ref) {
                if (typeof ref === 'function') {
                    ref(commands);
                }
                else {
                    ref.current = commands;
                }
            }
            if (onAddValueItem)
                onAddValueItem(id, commands);
            return function () {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(null);
                    }
                    else {
                        ref.current = null;
                    }
                }
                if (onRemoveValueItem)
                    onRemoveValueItem(id);
            };
        }
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        focusValidate,
        formValueFormat,
        formValueFromNameSuffix,
        formValueToNameSuffix,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs.AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React.createElement("div", { className: classNames(className, 'FormDateRangePicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
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
                        React.createElement(FormDateRangePickerTooltipPickerContainer, { ref: containerRef, calendarCount: calendarCount, selectType: selectType, value: value, months: months, disablePast: disablePast, disableFuture: disableFuture, minDate: minDate, maxDate: maxDate, onGetActionButtons: onGetActionButtons, onChange: handleChange, onValueChange: handleValueChange, onMonthsChange: setMonths })) },
                    React.createElement(material.Grid, { container: true, alignItems: 'center' },
                        React.createElement(material.Grid, { item: true, flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, value: value[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || (open && selectType === 'start'), required: required || requiredStart, readOnly: readOnly || readOnlyStart, readOnlyInput: readOnlyInput, icon: startIcon || icon, startAdornment: startStartAdornment || startAdornment, endAdornment: startEndAdornment || endAdornment, inputRef: startDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('start', newValue); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); } }))),
                        React.createElement(material.Grid, { item: true, sx: { px: 1 } }, "~"),
                        React.createElement(material.Grid, { item: true, flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, value: value[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || (open && selectType === 'end'), required: required || requiredEnd, readOnly: readOnly || readOnlyEnd, readOnlyInput: readOnlyInput, icon: endIcon || icon, startAdornment: endStartAdornment || startAdornment, endAdornment: endEndAdornment || endAdornment, inputRef: endDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('end', newValue); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); } }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(material.FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
FormDateRangePicker.displayName = 'FormDateRangePicker';
FormDateRangePicker.defaultProps = FormDateRangePickerDefaultProps;var FormFileDefaultProps = {
    value: '',
};var LinkDialogDefaultProps = {};var LinkDialog = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var open = _a.open, onConfirm = _a.onConfirm, onCancel = _a.onCancel, onClose = _a.onClose;
    var inputRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(''), value = _b[0], setValue = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (!open) {
            setValue('');
        }
    }, [open]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleSubmit = React.useCallback(function () {
        var _a, _b;
        if ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.validate()) {
            onConfirm && onConfirm(value);
            onClose && onClose();
        }
        else {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [value, onConfirm, onClose]);
    var handleCancel = React.useCallback(function () {
        onCancel && onCancel();
        onClose && onClose();
    }, [onCancel, onClose]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Dialog, { className: 'color-primary', open: !!open, maxWidth: 'sm', fullWidth: true, onClose: function (e, reason) {
            if (reason === 'backdropClick') {
                if (util.empty(value)) {
                    onClose && onClose();
                }
            }
        } },
        React.createElement(material.DialogTitle, null, "\uD30C\uC77C \uB9C1\uD06C"),
        React.createElement(material.DialogContent, null,
            React.createElement(material.Box, null,
                React.createElement("div", null, "\uD30C\uC77C\uC758 \uB9C1\uD06C URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),
                React.createElement(FormUrl, { ref: function (ref) {
                        if (inputRef.current == null && ref !== null) {
                            ref.focus();
                        }
                        inputRef.current = ref;
                    }, name: 'form-file-link-url', label: '\uB9C1\uD06C URL', value: value, required: true, style: { marginTop: 15 }, onChange: setValue }))),
        React.createElement(material.DialogActions, null,
            React.createElement(material.Button, { variant: 'text', onClick: handleCancel }, "\uCDE8\uC18C"),
            React.createElement(material.Button, { variant: 'text', onClick: handleSubmit }, "\uD655\uC778"))));
};
LinkDialog.displayName = 'LinkDialog';
LinkDialog.defaultProps = LinkDialogDefaultProps;var css_248z$1 = ".FormFile .control-wrap {\n  display: inline-flex;\n}\n.FormFile .control-wrap .file-name-wrap .file-name {\n  min-width: 350px;\n}\n.FormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root {\n  padding-right: 7px;\n}\n.FormFile .control-wrap .input-file {\n  display: none;\n}\n.FormFile .control-wrap .input-file-wrap {\n  display: flex;\n}\n.FormFile .control-wrap .input-file-wrap .input-file-btn:not(.hidden-label) .PdgIcon {\n  margin-left: -3px;\n}\n.FormFile.full-width .control-wrap {\n  display: flex;\n}\n.FormFile.full-width .control-wrap .file-name-wrap {\n  flex: 1;\n}\n.FormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root {\n  padding-right: 0;\n}\n.FormFile:not(.hide-file-name).variant-outlined .form-file-btn label, .FormFile:not(.hide-file-name).variant-filled .form-file-btn label {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.FormFile:not(.hide-file-name).variant-standard .form-file-btn label {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.FormFile:not(.hide-file-name).size-small .form-file-btn label {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.FormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn {\n  height: 52px;\n}\n.FormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn {\n  height: 52px;\n}\n.FormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn {\n  height: 28px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn {\n  height: 44px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn {\n  height: 26px;\n}\n.FormFile.hide-file-name.with-label.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name.with-label.variant-filled .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name.with-label.variant-standard .form-file-btn {\n  height: 28px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn {\n  height: 24px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn {\n  height: 31px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn {\n  height: 26px;\n}\n\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-filled .form-file-btn {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-standard .form-file-btn {\n  height: 28px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-outlined .form-file-btn {\n  height: 24px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-filled .form-file-btn {\n  height: 31px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-standard .form-file-btn {\n  height: 26px;\n}";
styleInject(css_248z$1);var StyledPdgButton = material.styled(reactComponent.PdgButton)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  min-width: 0;\n\n  &.input-file-btn {\n    padding: 0 !important;\n    position: relative;\n\n    .PdgFlexRowBox {\n      height: 100%;\n      .PdgText {\n        height: 100%;\n\n        label {\n          cursor: pointer;\n          display: flex;\n          flex: 1;\n          width: 100%;\n          height: 100%;\n          justify-content: center;\n          align-items: center;\n          padding: 0 10px;\n\n          .PdgIcon {\n            margin-right: 0.2em;\n          }\n        }\n      }\n    }\n  }\n\n  &.hidden-label.input-file-btn .PdgFlexRowBox .PdgText label .PdgIcon {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  &.MuiButton-outlined {\n    &:first-of-type:not(:last-of-type) {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    &:last-of-type:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:first-of-type):not(:last-of-type) {\n      border-right: 0;\n      border-radius: 0;\n    }\n  }\n"], ["\n  min-width: 0;\n\n  &.input-file-btn {\n    padding: 0 !important;\n    position: relative;\n\n    .PdgFlexRowBox {\n      height: 100%;\n      .PdgText {\n        height: 100%;\n\n        label {\n          cursor: pointer;\n          display: flex;\n          flex: 1;\n          width: 100%;\n          height: 100%;\n          justify-content: center;\n          align-items: center;\n          padding: 0 10px;\n\n          .PdgIcon {\n            margin-right: 0.2em;\n          }\n        }\n      }\n    }\n  }\n\n  &.hidden-label.input-file-btn .PdgFlexRowBox .PdgText label .PdgIcon {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  &.MuiButton-outlined {\n    &:first-of-type:not(:last-of-type) {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    &:last-of-type:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:first-of-type):not(:last-of-type) {\n      border-right: 0;\n      border-radius: 0;\n    }\n  }\n"])));
var templateObject_1$1;var FILE_VALUE = '';
var FormFile = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    accept = _a.accept, hideUrl = _a.hideUrl, uploadLabel = _a.uploadLabel, uploadTabIndex = _a.uploadTabIndex, hideUpload = _a.hideUpload, hideUploadLabel = _a.hideUploadLabel, linkLabel = _a.linkLabel, linkTabIndex = _a.linkTabIndex, hideLink = _a.hideLink, hideLinkLabel = _a.hideLinkLabel, removeLabel = _a.removeLabel, removeTabIndex = _a.removeTabIndex, hideRemove = _a.hideRemove, hideRemoveLabel = _a.hideRemoveLabel, maxFileSize = _a.maxFileSize, preview = _a.preview, initHidden = _a.hidden, onFile = _a.onFile, onLink = _a.onLink, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, initLabel = _a.label, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onRemoveValueItem = _b.onRemoveValueItem, onValueChangeByUser = _b.onValueChangeByUser;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var innerRef = React.useRef(null);
    var textFieldRef = React.useRef(null);
    var fileUploadBtnRef = React.useRef(null);
    var linkBtnRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initError), error = _c[0], setError = _c[1];
    var _d = React.useState(), errorHelperText = _d[0], setErrorHelperText = _d[1];
    var _e = React.useState(false), isOpenLinkDialog = _e[0], setIsOpenLinkDialog = _e[1];
    var _f = React.useState({ open: false }), alertDialogProps = _f[0], setAlertDialogProps = _f[1];
    var _g = reactHook.useAutoUpdateRefState(initData), dataRef = _g[0], setData = _g[2];
    var _h = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _h[0], disabled = _h[1], setDisabled = _h[2];
    var _j = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _j[0], hidden = _j[1], setHidden = _j[2];
    /********************************************************************************************************************
     * State - width, height
     * ******************************************************************************************************************/
    var height = reactResizeDetector.useResizeDetector({
        targetRef: innerRef,
        handleWidth: false,
        handleHeight: true,
    }).height;
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = React.useCallback(function (value) {
        var isEmptyValue = false;
        if (value) {
            var d = document.createElement('div');
            d.innerHTML = value;
            var text = d.textContent || d.innerText;
            isEmptyValue = util.empty(text.trim());
        }
        if (required && (isEmptyValue || util.empty(value))) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) { return value || ''; }, []);
    var _k = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _k[0], value = _k[1], setValue = _k[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var label = React.useMemo(function () {
        return labelIcon ? (React.createElement(React.Fragment, null,
            React.createElement(reactComponent.PdgIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]);
    var finalClassName = React.useMemo(function () {
        return classNames(className, 'FormValueItem', 'FormFile', "variant-".concat(variant), "size-".concat(size), !!initLabel && 'with-label', !!fullWidth && 'full-width', !!hideUrl && 'hide-file-name', !!hideLink && 'hide-link', !!hideUpload && 'hide-upload', !!hideRemove && 'hide-remove', util.notEmpty(value) && 'with-value');
    }, [className, fullWidth, hideLink, hideRemove, hideUpload, hideUrl, initLabel, size, value, variant]);
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
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
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormFile'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var fileSizeCheck = React.useCallback(function (file) {
        if (maxFileSize) {
            return new Promise(function (resolve, reject) {
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
    var handleFileChange = React.useCallback(function (e) {
        if (onFile) {
            var target = e.currentTarget;
            var file_1 = target.files[0];
            fileSizeCheck(file_1).then(function () {
                onFile(file_1).then(function (url) {
                    setValue(url);
                    util.nextTick(function () {
                        if (onValueChangeByUser)
                            onValueChangeByUser(name, url);
                    });
                });
            });
        }
    }, [fileSizeCheck, name, onFile, onValueChangeByUser, setValue]);
    var handleLinkClick = React.useCallback(function () {
        setIsOpenLinkDialog(true);
    }, []);
    var handleRemoveClick = React.useCallback(function () {
        setValue('');
        util.nextTick(function () {
            if (onValueChangeByUser)
                onValueChangeByUser(name, '');
        });
    }, [name, onValueChangeByUser, setValue]);
    var handleLinkDialogConfirm = React.useCallback(function (url) {
        if (onLink) {
            onLink(url).then(function (finalUrl) {
                setValue(finalUrl);
                util.nextTick(function () {
                    if (onValueChangeByUser)
                        onValueChangeByUser(name, finalUrl);
                });
            });
        }
        else {
            setValue(url);
            util.nextTick(function () {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, url);
            });
        }
    }, [name, onLink, onValueChangeByUser, setValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: finalClassName, labelIcon: hideUrl ? labelIcon : undefined, label: hideUrl ? initLabel : undefined, error: error, required: required, fullWidth: fullWidth, hidden: hidden, controlHeight: height, helperText: React.createElement("div", null,
            preview,
            React.createElement("div", null, error ? errorHelperText : helperText)), hideLabel: !hideUrl, style: { width: fullWidth ? '100%' : undefined }, control: React.createElement("div", { className: 'control-wrap' },
            !hideUrl && (React.createElement("div", { className: 'file-name-wrap' },
                React.createElement(material.TextField, { ref: innerRef, inputRef: textFieldRef, className: 'file-name', variant: variant, label: label, size: size, required: required, value: value || '', focused: focused, disabled: disabled, fullWidth: true, error: error, InputLabelProps: labelShrink ? { shrink: labelShrink } : undefined, inputProps: { readOnly: true }, InputProps: {
                        endAdornment: (React.createElement(material.InputAdornment, { position: 'end' },
                            React.createElement("div", { className: 'input-file-wrap' },
                                !hideUpload && (React.createElement(React.Fragment, null,
                                    React.createElement(StyledPdgButton, { variant: 'text', tabIndex: uploadTabIndex == null ? -1 : uploadTabIndex, className: classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, size: size, disabled: readOnly || disabled, ref: fileUploadBtnRef },
                                        React.createElement("label", { htmlFor: id },
                                            React.createElement(reactComponent.PdgIcon, { size: size, color: error ? 'error' : color }, "upload"),
                                            !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                                    React.createElement("input", { type: 'file', accept: accept, id: id, value: FILE_VALUE, className: 'input-file', onChange: handleFileChange }))),
                                !hideLink && (React.createElement(StyledPdgButton, { variant: 'text', tabIndex: linkTabIndex == null ? -1 : linkTabIndex, className: classNames('link-btn  form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'link', size: size, disabled: readOnly || disabled, ref: linkBtnRef, onClick: handleLinkClick }, !hideLinkLabel && (linkLabel || '링크'))),
                                !hideRemove && util.notEmpty(value) && (React.createElement(StyledPdgButton, { variant: 'text', tabIndex: removeTabIndex == null ? -1 : removeTabIndex, className: classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'close', size: size, disabled: readOnly || disabled, onClick: handleRemoveClick }, !hideRemoveLabel && (removeLabel || '삭제')))))),
                    }, placeholder: '\uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694' }))),
            !!hideUrl && (React.createElement("div", { className: 'input-file-wrap' },
                !hideUpload && (React.createElement(React.Fragment, null,
                    React.createElement(StyledPdgButton, { variant: 'outlined', tabIndex: uploadTabIndex, className: classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, size: size, ref: fileUploadBtnRef, disabled: disabled },
                        React.createElement("label", { htmlFor: id },
                            React.createElement(reactComponent.PdgIcon, { size: size, color: error ? 'error' : color }, "upload"),
                            !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                    React.createElement("input", { type: 'file', accept: accept, id: id, value: FILE_VALUE, className: 'input-file', onChange: handleFileChange }))),
                !hideLink && (React.createElement(StyledPdgButton, { variant: 'outlined', tabIndex: linkTabIndex, className: classNames('link-btn form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'link', size: size, onClick: handleLinkClick, disabled: disabled, ref: linkBtnRef }, !hideLinkLabel && (linkLabel || '링크'))),
                !hideRemove && util.notEmpty(value) && (React.createElement(StyledPdgButton, { variant: 'outlined', tabIndex: removeTabIndex, className: classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'close', size: size, disabled: disabled, onClick: handleRemoveClick }, !hideRemoveLabel && (removeLabel || '삭제'))))),
            React.createElement(PrivateAlertDialog, __assign({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } })),
            React.createElement(LinkDialog, { open: isOpenLinkDialog, onConfirm: handleLinkDialogConfirm, onClose: function () { return setIsOpenLinkDialog(false); } })) }));
});
FormFile.displayName = 'FormFile';
FormFile.defaultProps = FormFileDefaultProps;var FormImageFileDefaultProps = __assign(__assign({}, FormFileDefaultProps), { accept: '.jpg,.jpeg,.png' });var css_248z = ".FormImageFile .preview-img {\n  max-width: 100%;\n}\n.FormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img {\n  padding-right: 14px;\n}";
styleInject(css_248z);var FormImageFile = React.forwardRef(function (_a, ref) {
    var className = _a.className, imageSize = _a.imageSize, preview = _a.preview, previewMaxHeight = _a.previewMaxHeight, initValue = _a.value, onChange = _a.onChange, onFile = _a.onFile, onLink = _a.onLink, props = __rest(_a, ["className", "imageSize", "preview", "previewMaxHeight", "value", "onChange", "onFile", "onLink"]);
    var _b = React.useState({
        open: false,
    }), alertDialogProps = _b[0], setAlertDialogProps = _b[1];
    var urlKit = React.useState(function () {
        if (window.URL)
            return window.URL;
        else if (window.webkitURL)
            return window.webkitURL;
    })[0];
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    var getFinalValue = React.useCallback(function (value) {
        return value || '';
    }, []);
    var _c = reactHook.useAutoUpdateState(initValue, getFinalValue), value = _c[0], setValue = _c[1];
    reactHook.useFirstSkipEffect(function () {
        if (onChange)
            onChange(value);
    }, [value]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var imageSizeCheck = React.useCallback(function (file) {
        if (imageSize && urlKit) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                    var width = img.naturalWidth;
                    var height = img.naturalHeight;
                    urlKit.revokeObjectURL(img.src);
                    var sizeOk = false;
                    var sizeText = '';
                    if (Array.isArray(imageSize)) {
                        imageSize.forEach(function (a) {
                            if (width === a.width && height === a.height) {
                                sizeOk = true;
                            }
                            if (sizeText !== '')
                                sizeText += ', ';
                            sizeText += "".concat(a.width, "*").concat(a.height);
                        });
                    }
                    else {
                        sizeOk = width === imageSize.width && height === imageSize.height;
                        sizeText = "".concat(imageSize.width, "*").concat(imageSize.height);
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
                img.onerror = function () {
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
    var handleChange = React.useCallback(function (value) {
        setValue(value);
    }, [setValue]);
    var handleFile = React.useCallback(function (file) {
        return new Promise(function (resolve, reject) {
            imageSizeCheck(file)
                .then(function () {
                if (onFile) {
                    onFile(file)
                        .then(function (url) {
                        resolve(url);
                    })
                        .catch(function () { return reject(); });
                }
                else {
                    reject();
                }
            })
                .catch(function () {
                reject();
            });
        });
    }, [onFile, imageSizeCheck]);
    var handleLink = React.useCallback(function (url) {
        return new Promise(function (resolve, reject) {
            imageSizeCheck(url)
                .then(function () {
                if (onLink) {
                    onLink(url)
                        .then(function (finalUrl) { return resolve(finalUrl); })
                        .catch(function () { return reject(); });
                }
                else {
                    resolve(url);
                }
            })
                .catch(function () {
                reject();
            });
        });
    }, [onLink, imageSizeCheck]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var previewNode = React.useMemo(function () {
        if (preview && value) {
            return (React.createElement("a", { href: value, target: '_blank' },
                React.createElement(material.Tooltip, { title: React.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } },
                        React.createElement("img", { src: value, style: { maxWidth: '100%', verticalAlign: 'middle' }, alt: '' })) },
                    React.createElement("img", { className: 'preview-img', src: value, style: { maxHeight: previewMaxHeight || undefined }, alt: '' }))));
        }
    }, [preview, previewMaxHeight, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(FormFile, __assign({ ref: ref, className: classNames(className, 'FormImageFile'), value: value, preview: previewNode, onChange: handleChange, onFile: handleFile, onLink: handleLink }, props)),
        React.createElement(PrivateAlertDialog, __assign({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } }))));
});
FormImageFile.displayName = 'FormImageFile';
FormImageFile.defaultProps = FormImageFileDefaultProps;var FormMonthPickerDefaultProps = {
    format: 'YYYY년 MM월',
    formValueYearNameSuffix: '_year',
    formValueMonthNameSuffix: '_month',
    minValue: {
        year: 2020,
        month: 1,
    },
    maxValue: {
        year: 2050,
        month: 12,
    },
};var DEFAULT_VALUE$3 = null;
var DEFAULT_FORMAT$3 = 'YYYY년 MM월';
var FormMonthPicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, initFormat = _a.format, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, initMinValue = _a.minValue, initMaxValue = _a.maxValue, inputWidth = _a.inputWidth, readOnlyInput = _a.readOnlyInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, formValueYearNameSuffix = _a.formValueYearNameSuffix, formValueMonthNameSuffix = _a.formValueMonthNameSuffix, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var ratingRef = React.useRef(null);
    var inputRef = React.useRef();
    var closeTimeoutRef = React.useRef();
    var mouseDownTimeRef = React.useRef();
    var inputDatePickerErrorRef = React.useRef(null);
    var openValueRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initError), error = _c[0], setError = _c[1];
    var _d = React.useState(), errorHelperText = _d[0], setErrorHelperText = _d[1];
    var _e = React.useState(false), open = _e[0], setOpen = _e[1];
    var _f = reactHook.useAutoUpdateRefState(initData), dataRef = _f[0], setData = _f[2];
    var _g = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _g[0], disabled = _g[1], setDisabled = _g[2];
    var _h = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _h[0], hidden = _h[1], setHidden = _h[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (inputDatePickerErrorRef.current) {
            setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        return value || DEFAULT_VALUE$3;
    }, []);
    var _j = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _j[0], value = _j[1], setValue = _j[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var valueToDate = React.useCallback(function (v) { return dayjs("".concat(v.year, "-").concat(v.month, "-01")); }, []);
    var valueToYm = React.useCallback(function (v) { return v.year * 100 + v.month; }, []);
    var dateToValue = React.useCallback(function (v) { return ({ year: v.year(), month: v.month() + 1 }); }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowDate = React.useMemo(function () { return dayjs(); }, []);
    var nowValue = React.useMemo(function () { return dateToValue(nowDate); }, [dateToValue, nowDate]);
    var nowYm = React.useMemo(function () { return valueToYm(nowValue); }, [nowValue, valueToYm]);
    var valueDate = React.useMemo(function () { return (value ? valueToDate(value) : null); }, [value, valueToDate]);
    var minValue = React.useMemo(function () { return initMinValue || FormMonthPickerDefaultProps.minValue; }, [initMinValue]);
    var maxValue = React.useMemo(function () { return initMaxValue || FormMonthPickerDefaultProps.maxValue; }, [initMaxValue]);
    var minDate = React.useMemo(function () { return valueToDate(minValue); }, [minValue, valueToDate]);
    var maxDate = React.useMemo(function () { return valueToDate(maxValue); }, [maxValue, valueToDate]);
    var minAvailableValue = React.useMemo(function () {
        if (disablePast) {
            var minYm = valueToYm(minValue);
            return nowYm > minYm ? nowValue : minValue;
        }
        else {
            return minValue;
        }
    }, [disablePast, valueToYm, minValue, nowYm, nowValue]);
    var minAvailableYm = React.useMemo(function () { return valueToYm(minAvailableValue); }, [minAvailableValue, valueToYm]);
    var maxAvailableValue = React.useMemo(function () {
        if (disableFuture) {
            var maxYm = valueToYm(maxValue);
            return nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            return maxValue;
        }
    }, [disableFuture, valueToYm, maxValue, nowYm, nowValue]);
    var maxAvailableYm = React.useMemo(function () { return valueToYm(maxAvailableValue); }, [maxAvailableValue, valueToYm]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var format = React.useMemo(function () { return initFormat || DEFAULT_FORMAT$3; }, [initFormat]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    reactHook.useFirstSkipEffect(function () {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                var runOnRequestSearchSubmit = void 0;
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
    var focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(function () {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormMonthPicker'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            getYear: function () { return (valueRef.current ? valueRef.current.year : null); },
            setYear: function (year) {
                setValue(year === null
                    ? null
                    : valueRef.current
                        ? { year: year, month: valueRef.current.month }
                        : { year: year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 });
            },
            getMonth: function () { return (valueRef.current ? valueRef.current.month : null); },
            setMonth: function (month) {
                setValue(month === null
                    ? null
                    : valueRef.current
                        ? { year: valueRef.current.year, month: month }
                        : { year: new Date().getFullYear(), month: month });
            },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
            getFormValueYearNameSuffix: function () {
                return formValueYearNameSuffix || FormMonthPickerDefaultProps.formValueYearNameSuffix;
            },
            getFormValueMonthNameSuffix: function () {
                return formValueMonthNameSuffix || FormMonthPickerDefaultProps.formValueMonthNameSuffix;
            },
            getFormValueYearName: function () {
                return "".concat(name).concat(formValueYearNameSuffix || FormMonthPickerDefaultProps.formValueYearNameSuffix);
            },
            getFormValueMonthName: function () {
                return "".concat(name).concat(formValueMonthNameSuffix || FormMonthPickerDefaultProps.formValueMonthNameSuffix);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueMonthNameSuffix,
        formValueYearNameSuffix,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerMouseDown = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    var handleContainerFocus = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(function () {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    var handleContainerChange = React.useCallback(function (newValue, isMonthSelect) {
        setValue(newValue);
        if (isMonthSelect)
            setOpen(false);
        util.nextTick(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, setValue]);
    var handleInputDatePickerFocus = React.useCallback(function () {
        if (readOnly || disabled)
            return;
        setOpen(true);
    }, [readOnly, disabled]);
    var handleInputDatePickerShouldDisableYear = React.useCallback(function (date) {
        var dateYm = Number(date.format('YYYYMM'));
        return dateYm < minAvailableYm || dateYm > maxAvailableYm;
    }, [maxAvailableYm, minAvailableYm]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var inputDatePickerProps = React.useMemo(function () { return ({
        variant: variant,
        size: size,
        color: color,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        disabled: disabled,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
    }); }, [variant, size, color, labelShrink, fullWidth, disabled, format, minDate, maxDate]);
    var inputStyle = React.useMemo(function () { return (inputWidth != null ? { width: inputWidth } : __assign({ width: fullWidth ? undefined : 150 }, initStyle)); }, [inputWidth, fullWidth, initStyle]);
    var wrapStyle = React.useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs.AdapterDayjs, adapterLocale: 'ko' },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React.createElement("div", { className: classNames(className, 'FormMonthPicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
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
                        React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate, label: label, labelIcon: labelIcon, error: error, focused: focused, required: required, readOnly: readOnly, readOnlyInput: readOnlyInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: inputRef, onChange: function (v) { return setValue(v ? dateToValue(v) : v); }, onFocus: handleInputDatePickerFocus, onError: function (reason) { return (inputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear })))),
                !formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
FormMonthPicker.displayName = 'FormMonthPicker';
FormMonthPicker.defaultProps = FormMonthPickerDefaultProps;var FormMonthRangePickerDefaultProps = {
    format: 'YYYY년 MM월',
    minValue: {
        year: 2020,
        month: 1,
    },
    maxValue: {
        year: 2050,
        month: 12,
    },
    formValueFromYearNameSuffix: '_from_year',
    formValueFromMonthNameSuffix: '_from_month',
    formValueToYearNameSuffix: '_to_year',
    formValueToMonthNameSuffix: '_to_month',
};var DEFAULT_VALUE$2 = [null, null];
var DEFAULT_FORMAT$2 = 'YYYY년 MM월';
var FormMonthRangePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, fromLabel = _a.fromLabel, fromLabelIcon = _a.fromLabelIcon, toLabel = _a.toLabel, toLabelIcon = _a.toLabelIcon, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, initFormat = _a.format, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, initMinValue = _a.minValue, initMaxValue = _a.maxValue, inputWidth = _a.inputWidth, readOnlyInput = _a.readOnlyInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, formValueFromYearNameSuffix = _a.formValueFromYearNameSuffix, formValueFromMonthNameSuffix = _a.formValueFromMonthNameSuffix, formValueToYearNameSuffix = _a.formValueToYearNameSuffix, formValueToMonthNameSuffix = _a.formValueToMonthNameSuffix, align = _a.align, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var startInputRef = React.useRef();
    var endInputRef = React.useRef();
    var startInputDatePickerErrorRef = React.useRef(null);
    var endInputDatePickerErrorRef = React.useRef(null);
    var openValueRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initError), error = _c[0], setError = _c[1];
    var _d = React.useState(), errorHelperText = _d[0], setErrorHelperText = _d[1];
    var _e = React.useState(false), fromError = _e[0], setFromError = _e[1];
    var _f = React.useState(), fromErrorHelperText = _f[0], setFromErrorHelperText = _f[1];
    var _g = React.useState(false), toError = _g[0], setToError = _g[1];
    var _h = React.useState(), toErrorHelperText = _h[0], setToErrorHelperText = _h[1];
    var _j = React.useState(false), open = _j[0], setOpen = _j[1];
    var _k = reactHook.useAutoUpdateRefState(initData), dataRef = _k[0], setData = _k[2];
    var _l = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _l[0], disabled = _l[1], setDisabled = _l[2];
    var _m = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _m[0], hidden = _m[1], setHidden = _m[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setFromErrorErrorHelperText = React.useCallback(function (error, fromErrorHelperText) {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    var setToErrorErrorHelperText = React.useCallback(function (error, toErrorHelperText) {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = React.useCallback(function (value) {
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
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        return value || DEFAULT_VALUE$2;
    }, []);
    var _o = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _o[0], value = _o[1], setValue = _o[2];
    reactHook.useFirstSkipEffect(function () {
        if (error || fromError || toError)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var valueToDate = React.useCallback(function (v) { return dayjs("".concat(v.year, "-").concat(v.month, "-01")); }, []);
    var valueToYm = React.useCallback(function (v) { return v.year * 100 + v.month; }, []);
    var dateToValue = React.useCallback(function (v) { return ({ year: v.year(), month: v.month() + 1 }); }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowDate = React.useMemo(function () { return dayjs(); }, []);
    var nowValue = React.useMemo(function () { return dateToValue(nowDate); }, [dateToValue, nowDate]);
    var nowYm = React.useMemo(function () { return valueToYm(nowValue); }, [nowValue, valueToYm]);
    var valueDate = React.useMemo(function () { return [
        !!value && !!value[0] ? valueToDate(value[0]) : null,
        !!value && !!value[1] ? valueToDate(value[1]) : null,
    ]; }, [value, valueToDate]);
    var minValue = React.useMemo(function () { return initMinValue || FormMonthRangePickerDefaultProps.minValue; }, [initMinValue]);
    var maxValue = React.useMemo(function () { return initMaxValue || FormMonthRangePickerDefaultProps.maxValue; }, [initMaxValue]);
    var minDate = React.useMemo(function () { return (minValue ? valueToDate(minValue) : undefined); }, [minValue, valueToDate]);
    var maxDate = React.useMemo(function () { return (maxValue ? valueToDate(maxValue) : undefined); }, [maxValue, valueToDate]);
    var minAvailableValue = React.useMemo(function () {
        if (disablePast) {
            var minYm = valueToYm(minValue);
            return nowYm > minYm ? nowValue : minValue;
        }
        else {
            return minValue;
        }
    }, [disablePast, valueToYm, minValue, nowYm, nowValue]);
    var minAvailableYm = React.useMemo(function () { return valueToYm(minAvailableValue); }, [minAvailableValue, valueToYm]);
    var maxAvailableValue = React.useMemo(function () {
        if (disableFuture) {
            var maxYm = valueToYm(maxValue);
            return nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            return maxValue;
        }
    }, [disableFuture, valueToYm, maxValue, nowYm, nowValue]);
    var maxAvailableYm = React.useMemo(function () { return valueToYm(maxAvailableValue); }, [maxAvailableValue, valueToYm]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var format = React.useMemo(function () { return initFormat || DEFAULT_FORMAT$2; }, [initFormat]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(function () {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                var runOnRequestSearchSubmit = void 0;
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
    var focus = React.useCallback(function () {
        var _a;
        (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormMonthRangePicker'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            getFromValue: function () { return valueRef.current[0]; },
            setFromValue: function (value) { return setValue([value, valueRef.current[1]]); },
            getToValue: function () { return valueRef.current[1]; },
            setToValue: function (value) { return setValue([valueRef.current[0], value]); },
            getFromYear: function () { return (valueRef.current[0] ? valueRef.current[0].year : null); },
            setFromYear: function (year) {
                setValue([
                    year === null
                        ? null
                        : valueRef.current[0]
                            ? { year: year, month: valueRef.current[0].month }
                            : { year: year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 },
                    valueRef.current[1],
                ]);
            },
            getFromMonth: function () { return (valueRef.current[0] ? valueRef.current[0].month : null); },
            setFromMonth: function (month) {
                setValue([
                    month === null
                        ? null
                        : valueRef.current[0]
                            ? { year: valueRef.current[0].year, month: month }
                            : { year: new Date().getFullYear(), month: month },
                    valueRef.current[1],
                ]);
            },
            getToYear: function () { return (valueRef.current[1] ? valueRef.current[1].year : null); },
            setToYear: function (year) {
                setValue([
                    valueRef.current[0],
                    year === null
                        ? null
                        : valueRef.current[1]
                            ? { year: year, month: valueRef.current[1].month }
                            : { year: year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 },
                ]);
            },
            getToMonth: function () { return (valueRef.current[1] ? valueRef.current[1].month : null); },
            setToMonth: function (month) {
                setValue([
                    valueRef.current[0],
                    month === null
                        ? null
                        : valueRef.current[1]
                            ? { year: valueRef.current[1].year, month: month }
                            : { year: new Date().getFullYear(), month: month },
                ]);
            },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
            getFormValueFromYearNameSuffix: function () {
                return formValueFromYearNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix;
            },
            getFormValueFromMonthNameSuffix: function () {
                return formValueFromMonthNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix;
            },
            getFormValueToYearNameSuffix: function () {
                return formValueToYearNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix;
            },
            getFormValueToMonthNameSuffix: function () {
                return formValueToMonthNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix;
            },
            getFormValueFromYearName: function () {
                return "".concat(name).concat(formValueFromYearNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix);
            },
            getFormValueFromMonthName: function () {
                return "".concat(name).concat(formValueFromMonthNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix);
            },
            getFormValueToYearName: function () {
                return "".concat(name).concat(formValueToYearNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix);
            },
            getFormValueToMonthName: function () {
                return "".concat(name).concat(formValueToMonthNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueFromMonthNameSuffix,
        formValueFromYearNameSuffix,
        formValueToMonthNameSuffix,
        formValueToYearNameSuffix,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerChange = React.useCallback(function (newValue, selectType, isMonthSelect) {
        setValue(newValue);
        if (selectType === 'start' && isMonthSelect) {
            util.nextTick(function () {
                var _a;
                (_a = endInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
        else if (selectType === 'end' && isMonthSelect) {
            setOpen(false);
        }
        util.nextTick(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, setValue]);
    var handleInputDatePickerChange = React.useCallback(function (selectType, date) {
        if (date == null || date.isValid()) {
            if (selectType === 'start') {
                var newValue_1 = [date ? dateToValue(date) : null, valueRef.current[1]];
                if (newValue_1[0] !== null &&
                    valueToYm(newValue_1[0]) >= minAvailableYm &&
                    valueToYm(newValue_1[0]) <= maxAvailableYm) {
                    if (newValue_1[1] !== null && newValue_1[1] < newValue_1[0]) {
                        newValue_1[1] = newValue_1[0];
                    }
                }
                if (fromError) {
                    validate(newValue_1);
                }
                util.nextTick(function () {
                    onValueChangeByUser(name, newValue_1);
                });
                setValue(newValue_1);
            }
            else {
                var newValue_2 = [valueRef.current[0], date ? dateToValue(date) : null];
                if (newValue_2[1] !== null &&
                    valueToYm(newValue_2[1]) >= minAvailableYm &&
                    valueToYm(newValue_2[1]) <= maxAvailableYm) {
                    if (newValue_2[0] !== null && newValue_2[0] > newValue_2[1]) {
                        newValue_2[0] = newValue_2[1];
                    }
                }
                if (toError) {
                    validate(newValue_2);
                }
                util.nextTick(function () {
                    onValueChangeByUser(name, newValue_2);
                });
                setValue(newValue_2);
            }
        }
    }, [
        dateToValue,
        valueRef,
        valueToYm,
        minAvailableYm,
        maxAvailableYm,
        fromError,
        setValue,
        validate,
        onValueChangeByUser,
        name,
        toError,
    ]);
    var handleInputDatePickerFocus = React.useCallback(function (selectType) {
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
    var handleInputDatePickerShouldDisableYear = React.useCallback(function (dt) {
        var ym = dt.year() * 100 + (dt.month() + 1);
        return ym < minAvailableYm || ym > maxAvailableYm;
    }, [maxAvailableYm, minAvailableYm]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var inputDatePickerProps = React.useMemo(function () { return ({
        align: align,
        variant: variant,
        size: size,
        color: color,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        disabled: disabled,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
    }); }, [align, variant, size, color, labelShrink, fullWidth, disabled, format, minDate, maxDate]);
    var inputStyle = React.useMemo(function () { return (inputWidth != null ? { width: inputWidth } : __assign({ width: fullWidth ? undefined : 150 }, initStyle)); }, [inputWidth, fullWidth, initStyle]);
    var wrapStyle = React.useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs.AdapterDayjs, adapterLocale: 'ko' },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React.createElement("div", { className: classNames(className, 'FormMonthRangePicker'), style: wrapStyle },
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
                        React.createElement(material.Grid, { item: true, flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || open, required: required, readOnly: readOnly, readOnlyInput: readOnlyInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: startInputRef, onChange: function (v) { return handleInputDatePickerChange('start', v); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                        React.createElement(material.Grid, { item: true, sx: { px: 1 } }, "~"),
                        React.createElement(material.Grid, { item: true, flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || open, required: required, readOnly: readOnly, readOnlyInput: readOnlyInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: endInputRef, onChange: function (v) { return handleInputDatePickerChange('end', v); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(material.FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
FormMonthRangePicker.displayName = 'FormMonthRangePicker';
FormMonthRangePicker.defaultProps = FormMonthRangePickerDefaultProps;var FormYearPickerDefaultProps = {
    format: 'YYYY년',
    minYear: 2020,
    maxYear: 2050,
};var DEFAULT_VALUE$1 = null;
var DEFAULT_FORMAT$1 = 'YYYY년 MM월';
var FormYearPicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, initFormat = _a.format, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, minYear = _a.minYear, maxYear = _a.maxYear, inputWidth = _a.inputWidth, readOnlyInput = _a.readOnlyInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var ratingRef = React.useRef(null);
    var inputRef = React.useRef();
    var closeTimeoutRef = React.useRef();
    var mouseDownTimeRef = React.useRef();
    var inputDatePickerErrorRef = React.useRef(null);
    var openValueRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initError), error = _c[0], setError = _c[1];
    var _d = React.useState(), errorHelperText = _d[0], setErrorHelperText = _d[1];
    var _e = React.useState(false), open = _e[0], setOpen = _e[1];
    var _f = reactHook.useAutoUpdateRefState(initData), dataRef = _f[0], setData = _f[2];
    var _g = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _g[0], disabled = _g[1], setDisabled = _g[2];
    var _h = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _h[0], hidden = _h[1], setHidden = _h[2];
    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = React.useCallback(function (value) {
        if (required && util.empty(value)) {
            setErrorErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (inputDatePickerErrorRef.current) {
            setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (newValue) {
        return newValue || DEFAULT_VALUE$1;
    }, []);
    var _j = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _j[0], value = _j[1], setValue = _j[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var valueToDate = React.useCallback(function (v) { return dayjs("".concat(v, "-01-01")); }, []);
    var dateToValue = React.useCallback(function (v) { return v.year(); }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowYear = React.useMemo(function () { return new Date().getFullYear(); }, []);
    var valueDate = React.useMemo(function () { return (value ? valueToDate(value) : null); }, [value, valueToDate]);
    var minDate = React.useMemo(function () { return (minYear ? valueToDate(minYear) : undefined); }, [minYear, valueToDate]);
    var maxDate = React.useMemo(function () { return (maxYear ? valueToDate(maxYear) : undefined); }, [maxYear, valueToDate]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var format = React.useMemo(function () { return initFormat || DEFAULT_FORMAT$1; }, [initFormat]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    reactHook.useFirstSkipEffect(function () {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                var runOnRequestSearchSubmit = void 0;
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
    var focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(function () {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormYearPicker'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerMouseDown = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    var handleContainerFocus = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = React.useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
            closeTimeoutRef.current = setTimeout(function () {
                closeTimeoutRef.current = undefined;
                setOpen(false);
            }, 10);
        }
    }, []);
    var handleContainerChange = React.useCallback(function (newValue, isClick) {
        setValue(newValue);
        if (isClick)
            setOpen(false);
        util.nextTick(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, setValue]);
    var handleInputDatePickerChange = React.useCallback(function (v) {
        var newValue = v ? dateToValue(v) : v;
        setValue(newValue);
        util.nextTick(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [dateToValue, name, onValueChangeByUser, setValue]);
    var handleInputDatePickerFocus = React.useCallback(function () {
        if (readOnly || disabled)
            return;
        setOpen(true);
    }, [readOnly, disabled]);
    var handleInputDatePickerShouldDisableYear = React.useCallback(function (year) {
        return (!!disablePast && year.year() < nowYear) || (!!disableFuture && year.year() > nowYear);
    }, [disableFuture, disablePast, nowYear]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var inputDatePickerProps = React.useMemo(function () { return ({
        variant: variant,
        size: size,
        color: color,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        disabled: disabled,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
    }); }, [variant, size, color, labelShrink, fullWidth, disabled, format, minDate, maxDate]);
    var inputStyle = React.useMemo(function () { return (inputWidth != null ? { width: inputWidth } : __assign({ width: fullWidth ? undefined : 150 }, initStyle)); }, [inputWidth, fullWidth, initStyle]);
    var wrapStyle = React.useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs.AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React.createElement("div", { className: classNames(className, 'FormYearPicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
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
                        React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate, label: label, labelIcon: labelIcon, error: error, focused: focused, required: required, readOnly: readOnly, readOnlyInput: readOnlyInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: inputRef, onChange: handleInputDatePickerChange, onFocus: handleInputDatePickerFocus, onError: function (reason) { return (inputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear })))),
                !formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (React.createElement(material.FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
FormYearPicker.displayName = 'FormYearPicker';
FormYearPicker.defaultProps = FormYearPickerDefaultProps;var FormYearRangePickerDefaultProps = {
    format: 'YYYY년',
    minYear: 2020,
    maxYear: 2050,
    formValueFromNameSuffix: '_from',
    formValueToNameSuffix: '_to',
};var DEFAULT_VALUE = [null, null];
var DEFAULT_FORMAT = 'YYYY년 MM월';
var FormYearRangePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, fromLabel = _a.fromLabel, fromLabelIcon = _a.fromLabelIcon, toLabel = _a.toLabel, toLabelIcon = _a.toLabelIcon, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, initFormat = _a.format, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, initMinYear = _a.minYear, initMaxYear = _a.maxYear, inputWidth = _a.inputWidth, readOnlyInput = _a.readOnlyInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, formValueFromNameSuffix = _a.formValueFromNameSuffix, formValueToNameSuffix = _a.formValueToNameSuffix, align = _a.align, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = React.useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = React.useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = React.useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var startInputRef = React.useRef();
    var endInputRef = React.useRef();
    var startInputDatePickerErrorRef = React.useRef(null);
    var endInputDatePickerErrorRef = React.useRef(null);
    var openValueRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initError), error = _c[0], setError = _c[1];
    var _d = React.useState(), errorHelperText = _d[0], setErrorHelperText = _d[1];
    var _e = React.useState(false), fromError = _e[0], setFromError = _e[1];
    var _f = React.useState(), fromErrorHelperText = _f[0], setFromErrorHelperText = _f[1];
    var _g = React.useState(false), toError = _g[0], setToError = _g[1];
    var _h = React.useState(), toErrorHelperText = _h[0], setToErrorHelperText = _h[1];
    var _j = React.useState(false), open = _j[0], setOpen = _j[1];
    var _k = React.useState('start'), selectType = _k[0], setSelectType = _k[1];
    var _l = reactHook.useAutoUpdateRefState(initData), dataRef = _l[0], setData = _l[2];
    var _m = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _m[0], disabled = _m[1], setDisabled = _m[2];
    var _o = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _o[0], hidden = _o[1], setHidden = _o[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setFromErrorErrorHelperText = React.useCallback(function (error, fromErrorHelperText) {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    var setToErrorErrorHelperText = React.useCallback(function (error, toErrorHelperText) {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = React.useCallback(function (value) {
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
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        return value || DEFAULT_VALUE;
    }, []);
    var _p = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _p[0], value = _p[1], setValue = _p[2];
    reactHook.useFirstSkipEffect(function () {
        if (error || fromError || toError)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var valueToDate = React.useCallback(function (v) { return dayjs("".concat(v, "-01-01")); }, []);
    var dateToValue = React.useCallback(function (v) { return v.year(); }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var nowYear = React.useMemo(function () { return new Date().getFullYear(); }, []);
    var valueDate = React.useMemo(function () { return [
        !!value && !!value[0] ? valueToDate(value[0]) : null,
        !!value && !!value[1] ? valueToDate(value[1]) : null,
    ]; }, [value, valueToDate]);
    var minYear = React.useMemo(function () { return Math.max(initMinYear || FormYearRangePickerDefaultProps.minYear, FormYearRangePickerDefaultProps.minYear); }, [initMinYear]);
    var maxYear = React.useMemo(function () { return Math.min(initMaxYear || FormYearRangePickerDefaultProps.maxYear, FormYearRangePickerDefaultProps.maxYear); }, [initMaxYear]);
    var minDate = React.useMemo(function () { return (minYear ? valueToDate(minYear) : undefined); }, [minYear, valueToDate]);
    var maxDate = React.useMemo(function () { return (maxYear ? valueToDate(maxYear) : undefined); }, [maxYear, valueToDate]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var format = React.useMemo(function () { return initFormat || DEFAULT_FORMAT; }, [initFormat]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    reactHook.useFirstSkipEffect(function () {
        if (open) {
            openValueRef.current = value;
        }
        else {
            if (openValueRef.current !== value) {
                var runOnRequestSearchSubmit = void 0;
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
    var focus = React.useCallback(function () {
        var _a;
        (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormYearRangePicker'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            getFromValue: function () { return valueRef.current[0]; },
            setFromValue: function (value) { return setValue([value, valueRef.current[1]]); },
            getToValue: function () { return valueRef.current[1]; },
            setToValue: function (value) { return setValue([valueRef.current[0], value]); },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
            getFormValueFromNameSuffix: function () {
                return formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix;
            },
            getFormValueToNameSuffix: function () { return formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix; },
            getFormValueFromName: function () {
                return "".concat(name).concat(formValueFromNameSuffix || FormDateRangePickerDefaultProps.formValueFromNameSuffix);
            },
            getFormValueToName: function () {
                return "".concat(name).concat(formValueToNameSuffix || FormDateRangePickerDefaultProps.formValueToNameSuffix);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        formValueFromNameSuffix,
        formValueToNameSuffix,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerChange = React.useCallback(function (newValue, selectType) {
        setValue(newValue);
        if (selectType === 'start') {
            util.nextTick(function () {
                var _a;
                setSelectType('end');
                (_a = endInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
        else if (selectType === 'end') {
            setOpen(false);
        }
        util.nextTick(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [setValue, name, onValueChangeByUser]);
    var handleInputDatePickerChange = React.useCallback(function (selectType, date) {
        if (date == null || date.isValid()) {
            if (selectType === 'start') {
                var newValue_1 = [date ? dateToValue(date) : null, valueRef.current[1]];
                if (newValue_1[0] !== null && newValue_1[0] >= minYear && newValue_1[0] <= maxYear) {
                    if (newValue_1[1] !== null && newValue_1[1] < newValue_1[0]) {
                        newValue_1[1] = newValue_1[0];
                    }
                }
                if (fromError) {
                    validate(newValue_1);
                }
                util.nextTick(function () {
                    onValueChangeByUser(name, newValue_1);
                });
                setValue(newValue_1);
            }
            else {
                var newValue_2 = [valueRef.current[0], date ? dateToValue(date) : null];
                if (newValue_2[1] !== null && newValue_2[1] >= minYear && newValue_2[1] <= maxYear) {
                    if (newValue_2[0] !== null && newValue_2[0] > newValue_2[1]) {
                        newValue_2[0] = newValue_2[1];
                    }
                }
                if (toError) {
                    validate(newValue_2);
                }
                util.nextTick(function () {
                    onValueChangeByUser(name, newValue_2);
                });
                setValue(newValue_2);
            }
        }
    }, [dateToValue, valueRef, minYear, maxYear, fromError, setValue, validate, onValueChangeByUser, name, toError]);
    var handleInputDatePickerFocus = React.useCallback(function (selectType) {
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
    var handleInputDatePickerShouldDisableYear = React.useCallback(function (year) {
        return (!!disablePast && year.year() < nowYear) || (!!disableFuture && year.year() > nowYear);
    }, [disableFuture, disablePast, nowYear]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var inputDatePickerProps = React.useMemo(function () { return ({
        align: align,
        variant: variant,
        size: size,
        color: color,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        disabled: disabled,
        format: format,
        minDate: minDate,
        maxDate: maxDate,
    }); }, [align, variant, size, color, labelShrink, fullWidth, disabled, format, minDate, maxDate]);
    var inputStyle = React.useMemo(function () { return (inputWidth != null ? { width: inputWidth } : __assign({ width: fullWidth ? undefined : 150 }, initStyle)); }, [inputWidth, fullWidth, initStyle]);
    var wrapStyle = React.useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(xDatePickers.LocalizationProvider, { dateAdapter: AdapterDayjs.AdapterDayjs },
        React.createElement(material.ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React.createElement("div", { className: classNames(className, 'FormYearRangePicker'), style: wrapStyle },
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
                        React.createElement(material.Grid, { item: true, flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || (open && selectType === 'start'), required: required, readOnly: readOnly, readOnlyInput: readOnlyInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: startInputRef, onChange: function (v) { return handleInputDatePickerChange('start', v); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                        React.createElement(material.Grid, { item: true, sx: { px: 1 } }, "~"),
                        React.createElement(material.Grid, { item: true, flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || (open && selectType === 'end'), required: required, readOnly: readOnly, readOnlyInput: readOnlyInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: endInputRef, onChange: function (v) { return handleInputDatePickerChange('end', v); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(material.FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
FormYearRangePicker.displayName = 'FormYearRangePicker';
FormYearRangePicker.defaultProps = FormYearRangePickerDefaultProps;var FormSwitchDefaultProps = {};var FormSwitch = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, onValue = _a.onValue, 
    //----------------------------------------------------------------------------------------------------------------
    switchLabel = _a.switchLabel, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, sx = _a.sx;
    var id = React.useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = React.useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = React.useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = React.useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _c = reactHook.useAutoUpdateState(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var inputRef = React.useRef();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = reactHook.useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = React.useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = reactHook.useAutoUpdateRefState(initData), dataRef = _f[0], setData = _f[2];
    var _g = reactHook.useAutoUpdateRefState(React.useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _g[0], disabled = _g[1], setDisabled = _g[2];
    var _h = reactHook.useAutoUpdateRefState(initHidden), hiddenRef = _h[0], hidden = _h[1], setHidden = _h[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = React.useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = React.useCallback(function (value) {
        if (onValidate) {
            var onValidateResult = onValidate(value);
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
    var getFinalValue = React.useCallback(function (value) {
        var finalValue = value || false;
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    var _j = reactHook.useAutoUpdateRefState(initValue, getFinalValue), valueRef = _j[0], value = _j[1], setValue = _j[2];
    reactHook.useFirstSkipEffect(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var focus = React.useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(function () {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    React.useLayoutEffect(function () {
        var commands = {
            getType: function () { return 'FormSwitch'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return setValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: setValue,
            getData: function () { return dataRef.current; },
            setData: setData,
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return !!disabledRef.current; },
            setDisabled: setDisabled,
            isHidden: function () { return !!hiddenRef.current; },
            setHidden: setHidden,
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(valueRef.current); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
        };
        onAddValueItem(id, commands);
        if (ref) {
            if (typeof ref === 'function') {
                ref(commands);
            }
            else {
                ref.current = commands;
            }
        }
        return function () {
            onRemoveValueItem(id);
            if (ref) {
                if (typeof ref === 'function') {
                    ref(null);
                }
                else {
                    ref.current = null;
                }
            }
        };
    }, [
        dataRef,
        disabledRef,
        exceptValue,
        focus,
        getFinalValue,
        hiddenRef,
        id,
        initValue,
        name,
        onAddValueItem,
        onRemoveValueItem,
        ref,
        setData,
        setDisabled,
        setErrorErrorHelperText,
        setHidden,
        setValue,
        validate,
        valueRef,
    ]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = React.useCallback(function (e, checked) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = setValue(checked);
            util.nextTick(function () {
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [readOnly, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var switchControl = React.useMemo(function () { return (React.createElement(material.Switch, { size: size, name: name, checked: value, color: color, disabled: disabled, onChange: handleChange, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } })); }, [color, disabled, handleChange, initFocused, name, setFocused, size, value]);
    return (React.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'FormValueItem', 'FormSwitch'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: size === 'small' ? 21 : 26, controlVerticalCenter: true, control: switchLabel ? (React.createElement(material.FormControlLabel, { control: switchControl, label: switchLabel, disabled: disabled })) : (switchControl) }));
});
FormSwitch.displayName = 'FormSwitch';
FormSwitch.defaultProps = FormSwitchDefaultProps;var SearchDefaultProps = {
    color: 'primary',
};var SearchGroupRowDefaultProps = {};var SearchGroupRow = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(FormRow, __assign({}, props),
        React.createElement(FormCol, null,
            React.createElement(material.Grid, { container: true, spacing: 1, alignItems: 'center' }, children))));
};
SearchGroupRow.displayName = 'SearchGroupRow';
SearchGroupRow.defaultProps = SearchGroupRowDefaultProps;var Search = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    color = _a.color, spacing = _a.spacing, focused = _a.focused, labelShrink = _a.labelShrink, autoSubmit = _a.autoSubmit, otherProps = __rest(_a, ["children", "className", "style", "sx", "color", "spacing", "focused", "labelShrink", "autoSubmit"]);
    var formRef = React.useRef();
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        var _a;
        if (autoSubmit) {
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var renderChildren = React.useMemo(function () {
        var rowItems = [];
        var basicRowItems = [];
        React.Children.forEach(children, function (child) {
            if (React.isValidElement(child)) {
                if (child.type.toString() === SearchGroupRow.toString()) {
                    rowItems.push(child);
                }
                else {
                    basicRowItems.push(child);
                }
            }
        });
        if (basicRowItems.length > 0) {
            return __spreadArray([React.createElement(SearchGroupRow, { key: '$basicRow$' }, basicRowItems)], rowItems, true);
        }
        else {
            return rowItems;
        }
    }, [children]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(FormContextProvider, { value: {
            id: 'search',
            variant: 'outlined',
            size: 'small',
            color: color,
            spacing: spacing,
            focused: focused,
            labelShrink: labelShrink,
            fullWidth: false,
            // eslint-disable-next-line
            onAddValueItem: function () { },
            // eslint-disable-next-line
            onRemoveValueItem: function () { },
            // eslint-disable-next-line
            onValueChange: function () { },
            // eslint-disable-next-line
            onValueChangeByUser: function () { },
            onRequestSearchSubmit: function () {
                var _a;
                if (autoSubmit) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
                }
            },
        } },
        React.createElement(material.Paper, { variant: 'outlined', className: className, sx: __assign({ p: 1.5 }, sx), style: style },
            React.createElement(Form, __assign({ ref: function (commands) {
                    if (ref) {
                        if (typeof ref === 'function') {
                            ref(commands);
                        }
                        else {
                            ref.current = commands;
                        }
                    }
                    formRef.current = commands || undefined;
                }, className: 'Search', variant: 'outlined', size: 'small', color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: false }, otherProps),
                React.createElement(FormBody, null, renderChildren)))));
});
Search.displayName = 'Search';
Search.defaultProps = SearchDefaultProps;var SearchGroupDefaultProps = {
    spacing: 1,
};var StyledItem = material.styled(material.Grid)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:has(> [style*='display: none;']) {\n    display: none;\n  }\n"], ["\n  &:has(> [style*='display: none;']) {\n    display: none;\n  }\n"])));
var templateObject_1;var isReactFragment = function (child) {
    try {
        return child.type.toString() === React.Fragment.toString();
    }
    catch (e) {
        return false;
    }
};
var removeReactFragment = function (el) {
    if (isReactFragment(el)) {
        var children = el.props.children;
        if (children) {
            if (Array.isArray(children)) {
                return children.map(function (child) {
                    if (React.isValidElement(child)) {
                        return removeReactFragment(child);
                    }
                    else {
                        return React.createElement(material.Grid, { item: true }, child);
                    }
                });
            }
            else {
                return (React.createElement(StyledItem, { item: true, style: { display: el.type === FormHidden ? 'none' : undefined } }, el));
            }
        }
        else {
            return (React.createElement(StyledItem, { item: true, style: { display: el.type === FormHidden ? 'none' : undefined } }, el));
        }
    }
    else {
        return (React.createElement(StyledItem, { item: true, style: { display: el.type === FormHidden ? 'none' : undefined } }, el));
    }
};
var SearchGroup = function (_a) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    max = _a.max, align = _a.align, hidden = _a.hidden, spacing = _a.spacing;
    var justifyContent = React.useMemo(function () {
        switch (align) {
            case undefined:
            case 'left':
                return 'start';
            case 'center':
                return 'center';
            case 'right':
                return 'end';
        }
    }, [align]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Grid, { item: true, className: classNames(className, 'SearchGroup'), style: { flex: max ? 1 : undefined, display: hidden ? 'none' : undefined } },
        React.createElement(material.Grid, { container: true, wrap: 'wrap', spacing: spacing, justifyContent: justifyContent, alignItems: 'start', style: style, sx: sx }, React.Children.map(children, function (child) {
            if (React.isValidElement(child)) {
                return removeReactFragment(child);
            }
            else {
                return child;
            }
        }))));
};
SearchGroup.defaultProps = SearchGroupDefaultProps;var SearchButtonDefaultProps = {};var SearchButton = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, size = _a.size, initSx = _a.sx, props = __rest(_a, ["children", "className", "size", "sx"]);
    var sx = React.useMemo(function () { return (__assign({ minWidth: 0, px: "".concat(!children ? 9 : 13, "px !important") }, initSx)); }, [children, initSx]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(reactComponent.PdgButton, __assign({ className: classNames(className, 'SearchButton'), size: util.ifUndefined(size, 'medium'), sx: sx, fullWidth: false }, props), children));
};
SearchButton.defaultProps = SearchButtonDefaultProps;var SearchMenuButtonDefaultProps = {};var SearchMenuButton = function (_a) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, menuList = _a.menuList, placement = _a.placement, props = __rest(_a, ["children", "className", "sx", "menuList", "placement"]);
    var buttonId = React.useId();
    var menuId = React.useId();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var _c = React.useState('ArrowDropDown'), endIcon = _c[0], setEndIcon = _c[1];
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = React.useCallback(function (e) {
        setAnchorEl(e.currentTarget);
        setEndIcon('ArrowDropUp');
    }, []);
    var handleClose = React.useCallback(function () {
        setAnchorEl(null);
        setEndIcon('ArrowDropDown');
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var open = React.useMemo(function () { return !!anchorEl; }, [anchorEl]);
    var sx = React.useMemo(function () { return (__assign({ minWidth: 0, px: "".concat(!children ? 9 : 13, "px !important") }, initSx)); }, [children, initSx]);
    var anchorOrigin = React.useMemo(function () {
        switch (placement || 'bottom') {
            case 'bottom':
                return { vertical: 'bottom', horizontal: 'center' };
            case 'bottom-left':
                return { vertical: 'bottom', horizontal: 'left' };
            case 'bottom-right':
                return { vertical: 'bottom', horizontal: 'right' };
            case 'top':
                return { vertical: 'top', horizontal: 'center' };
            case 'top-left':
                return { vertical: 'top', horizontal: 'left' };
            case 'top-right':
                return { vertical: 'top', horizontal: 'right' };
            case 'left':
                return { vertical: 'center', horizontal: 'left' };
            case 'left-top':
                return { vertical: 'top', horizontal: 'left' };
            case 'left-bottom':
                return { vertical: 'bottom', horizontal: 'left' };
            case 'right':
                return { vertical: 'center', horizontal: 'right' };
            case 'right-top':
                return { vertical: 'top', horizontal: 'right' };
            case 'right-bottom':
                return { vertical: 'bottom', horizontal: 'right' };
        }
    }, [placement]);
    var transformOrigin = React.useMemo(function () {
        switch (placement || 'bottom') {
            case 'bottom':
                return { vertical: 'top', horizontal: 'center' };
            case 'bottom-left':
                return { vertical: 'top', horizontal: 'left' };
            case 'bottom-right':
                return { vertical: 'top', horizontal: 'right' };
            case 'top':
                return { vertical: 'bottom', horizontal: 'center' };
            case 'top-left':
                return { vertical: 'bottom', horizontal: 'left' };
            case 'top-right':
                return { vertical: 'bottom', horizontal: 'right' };
            case 'left':
                return { vertical: 'center', horizontal: 'right' };
            case 'left-top':
                return { vertical: 'top', horizontal: 'right' };
            case 'left-bottom':
                return { vertical: 'bottom', horizontal: 'right' };
            case 'right':
                return { vertical: 'center', horizontal: 'left' };
            case 'right-top':
                return { vertical: 'top', horizontal: 'left' };
            case 'right-bottom':
                return { vertical: 'bottom', horizontal: 'left' };
        }
    }, [placement]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(FormButton, __assign({ className: classNames(className, 'SearchMenuButton'), size: 'medium', sx: sx, fullWidth: false }, props, { id: buttonId, "aria-controls": open ? menuId : undefined, "aria-haspopup": 'true', "aria-expanded": open ? 'true' : undefined, endIcon: endIcon, endIconProps: { style: { marginRight: -5 } }, onClick: handleClick }), children),
        React.createElement(material.Menu, { id: menuId, "aria-labelledby": buttonId, anchorEl: anchorEl, open: open, onClose: handleClose, onClick: handleClose, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin }, menuList)));
};
SearchMenuButton.defaultProps = SearchMenuButtonDefaultProps;exports.Form=Form;exports.FormAutocomplete=FormAutocomplete;exports.FormAutocompleteDefaultProps=FormAutocompleteDefaultProps;exports.FormBlock=FormBlock;exports.FormBlockDefaultProps=FormBlockDefaultProps;exports.FormBody=FormBody;exports.FormBodyDefaultProps=FormBodyDefaultProps;exports.FormButton=FormButton;exports.FormButtonDefaultProps=FormButtonDefaultProps;exports.FormCheckbox=FormCheckbox;exports.FormCheckboxDefaultProps=FormCheckboxDefaultProps;exports.FormCol=FormCol;exports.FormColDefaultProps=FormColDefaultProps;exports.FormCompanyNo=FormCompanyNo;exports.FormCompanyNoDefaultProps=FormCompanyNoDefaultProps;exports.FormContext=FormContext;exports.FormContextDefaultValue=FormContextDefaultValue;exports.FormContextProvider=FormContextProvider;exports.FormDatePicker=FormDatePicker;exports.FormDatePickerDefaultProps=FormDatePickerDefaultProps;exports.FormDateRangePicker=FormDateRangePicker;exports.FormDateRangePickerDefaultProps=FormDateRangePickerDefaultProps;exports.FormDateTimePicker=FormDateTimePicker;exports.FormDateTimePickerDefaultProps=FormDateTimePickerDefaultProps;exports.FormDefaultProps=FormDefaultProps;exports.FormDivider=FormDivider;exports.FormDividerDefaultProps=FormDividerDefaultProps;exports.FormEmail=FormEmail;exports.FormEmailDefaultProps=FormEmailDefaultProps;exports.FormFile=FormFile;exports.FormFileDefaultProps=FormFileDefaultProps;exports.FormFooter=FormFooter;exports.FormFooterDefaultProps=FormFooterDefaultProps;exports.FormHidden=FormHidden;exports.FormHiddenDefaultProps=FormHiddenDefaultProps;exports.FormImageFile=FormImageFile;exports.FormImageFileDefaultProps=FormImageFileDefaultProps;exports.FormLabel=FormLabel;exports.FormLabelDefaultProps=FormLabelDefaultProps;exports.FormMobile=FormMobile;exports.FormMobileDefaultProps=FormMobileDefaultProps;exports.FormMonthPicker=FormMonthPicker;exports.FormMonthPickerDefaultProps=FormMonthPickerDefaultProps;exports.FormMonthRangePicker=FormMonthRangePicker;exports.FormMonthRangePickerDefaultProps=FormMonthRangePickerDefaultProps;exports.FormNumber=FormNumber;exports.FormNumberDefaultProps=FormNumberDefaultProps;exports.FormPassword=FormPassword;exports.FormPasswordDefaultProps=FormPasswordDefaultProps;exports.FormPersonalNo=FormPersonalNo;exports.FormPersonalNoDefaultProps=FormPersonalNoDefaultProps;exports.FormRadioGroup=FormRadioGroup;exports.FormRadioGroupDefaultProps=FormRadioGroupDefaultProps;exports.FormRating=FormRating;exports.FormRatingDefaultProps=FormRatingDefaultProps;exports.FormRow=FormRow;exports.FormRowDefaultProps=FormRowDefaultProps;exports.FormSearch=FormSearch;exports.FormSearchDefaultProps=FormSearchDefaultProps;exports.FormSelect=FormSelect;exports.FormSelectDefaultProps=FormSelectDefaultProps;exports.FormSwitch=FormSwitch;exports.FormSwitchDefaultProps=FormSwitchDefaultProps;exports.FormTag=FormTag;exports.FormTagDefaultProps=FormTagDefaultProps;exports.FormTel=FormTel;exports.FormTelDefaultProps=FormTelDefaultProps;exports.FormText=FormText;exports.FormTextDefaultProps=FormTextDefaultProps;exports.FormTextEditor=FormTextEditor;exports.FormTextEditorDefaultProps=FormTextEditorDefaultProps;exports.FormTextField=FormTextField;exports.FormTextFieldDefaultProps=FormTextFieldDefaultProps;exports.FormTextarea=FormTextarea;exports.FormTextareaDefaultProps=FormTextareaDefaultProps;exports.FormTimePicker=FormTimePicker;exports.FormTimePickerDefaultProps=FormTimePickerDefaultProps;exports.FormToggleButtonGroup=FormToggleButtonGroup;exports.FormToggleButtonGroupDefaultProps=FormToggleButtonGroupDefaultProps;exports.FormUrl=FormUrl;exports.FormUrlDefaultProps=FormUrlDefaultProps;exports.FormYearPicker=FormYearPicker;exports.FormYearPickerDefaultProps=FormYearPickerDefaultProps;exports.FormYearRangePicker=FormYearRangePicker;exports.FormYearRangePickerDefaultProps=FormYearRangePickerDefaultProps;exports.Search=Search;exports.SearchButton=SearchButton;exports.SearchButtonDefaultProps=SearchButtonDefaultProps;exports.SearchDefaultProps=SearchDefaultProps;exports.SearchGroup=SearchGroup;exports.SearchGroupDefaultProps=SearchGroupDefaultProps;exports.SearchGroupRow=SearchGroupRow;exports.SearchGroupRowDefaultProps=SearchGroupRowDefaultProps;exports.SearchMenuButton=SearchMenuButton;exports.SearchMenuButtonDefaultProps=SearchMenuButtonDefaultProps;exports.useFormState=useFormState;