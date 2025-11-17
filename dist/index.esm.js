import React,{createContext,useContext,useRef,useCallback,useMemo,useEffect,useState,useId,useLayoutEffect}from'react';import classNames from'classnames';import {Box,styled,useTheme,InputLabel,Grid,Collapse,FormHelperText,InputAdornment,IconButton,TextField,Chip,Autocomplete,Icon,CircularProgress,MenuItem,Checkbox,FormControl,Input,OutlinedInput,FilledInput,FormControlLabel,Typography,RadioGroup,Radio,ToggleButton,ToggleButtonGroup,Rating,Skeleton,darken,Button,Tooltip,tooltipClasses,ClickAwayListener,Dialog,DialogTitle,DialogContent,DialogActions,Switch,Paper,Menu}from'@mui/material';import {empty,ifUndefined,notEmpty,equal,ifEmpty}from'@pdg/compare';import dayjs from'dayjs';import {useAutoUpdateLayoutRef,useForwardLayoutRef,useAutoUpdateState,useAutoUpdateRefState,useForceUpdate,useAutoUpdateRef,useFirstSkipEffect}from'@pdg/react-hook';import {PButton,PIcon,PIconText}from'@pdg/react-component';import {useResizeDetector}from'react-resize-detector';import {formatTelNo,formatBusinessNo,formatPersonalNo}from'@pdg/formatting';import {NumericFormat}from'react-number-format';import {CheckBoxOutlineBlank,CheckBox,RadioButtonChecked,RadioButtonUnchecked}from'@mui/icons-material';import {Editor}from'@tinymce/tinymce-react';import {PickersDay,StaticDatePicker,LocalizationProvider,DesktopDatePicker,StaticDateTimePicker,DesktopDateTimePicker}from'@mui/x-date-pickers';import SimpleBar from'simplebar-react';function insertStyle(css) {
    if (!css || typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}");/******************************************************************************
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
};var PFormContextDefaultValue = {
    id: 'init',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    spacing: 2,
    formColGap: 1.5,
    focused: false,
    labelShrink: false,
    onAddValueItem: function () { },
    onRemoveValueItem: function () { },
    onValueChange: function () { },
    onValueChangeByUser: function () { },
    onRequestSubmit: function () { },
    onRequestSearchSubmit: function () { },
};var PFormContext = createContext(PFormContextDefaultValue);function useFormState() {
    var value = useContext(PFormContext);
    if (value === undefined) {
        throw new Error('useFormState should be used within FormContext.Provider');
    }
    return value;
}function PFormContextProvider(_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(PFormContext.Provider, { value: value }, children);
}/********************************************************************************************************************
 * getItemFormValue
 * ******************************************************************************************************************/
var getItemFormValue = function (commands, reset) {
    var type = commands.getType();
    var value;
    switch (type) {
        case 'PFormCheckbox':
            {
                var itemCommands = commands;
                var checked = reset ? itemCommands.getReset() : itemCommands.getChecked();
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
                var startValue = value[0];
                var endValue = value[1];
                var format = commands.getFormValueFormat();
                value = [startValue ? startValue.format(format) : '', endValue ? endValue.format(format) : ''];
            }
            break;
        case 'PFormYearRangePicker':
            {
                var startValue = value[0];
                var endValue = value[1];
                value = [startValue ? startValue : '', endValue ? endValue : ''];
            }
            break;
        case 'PFormMonthPicker':
            value = { year: value ? value.year : '', month: value ? value.month : '' };
            break;
        case 'PFormMonthRangePicker':
            {
                var startValue = value[0];
                var endValue = value[1];
                value = [startValue ? startValue : { year: '', month: '' }, endValue ? endValue : { year: '', month: '' }];
            }
            break;
        default:
            if (empty(value)) {
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
};
/********************************************************************************************************************
 * appendFormValueData
 * ******************************************************************************************************************/
var appendFormValueData = function (data, itemCommands) {
    switch (itemCommands.getType()) {
        case 'PFormDateRangePicker':
            {
                var commands = itemCommands;
                var value = getItemFormValue(itemCommands);
                data[commands.getFormValueFromName()] = value[0];
                data[commands.getFormValueToName()] = value[1];
            }
            break;
        case 'PFormMonthPicker':
            {
                var commands = itemCommands;
                var value = getItemFormValue(itemCommands);
                data[commands.getFormValueYearName()] = value.year;
                data[commands.getFormValueMonthName()] = value.month;
            }
            break;
        case 'PFormYearRangePicker':
            {
                var commands = itemCommands;
                var value = getItemFormValue(itemCommands);
                data[commands.getFormValueFromName()] = value[0];
                data[commands.getFormValueToName()] = value[1];
            }
            break;
        case 'PFormMonthRangePicker':
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
};var PForm = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, children = _a.children, initStyle = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    _b = _a.variant, 
    //--------------------------------------------------------------------------------------------------------------------
    initVariant = _b === void 0 ? 'outlined' : _b, _c = _a.size, initSize = _c === void 0 ? 'medium' : _c, _d = _a.color, initColor = _d === void 0 ? 'primary' : _d, _e = _a.spacing, initSpacing = _e === void 0 ? 2 : _e, _f = _a.formColGap, initFormColGap = _f === void 0 ? 1.5 : _f, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, initFullHeight = _a.fullHeight, initDisabled = _a.disabled, initSubmitWhenReturnKey = _a.submitWhenReturnKey, 
    //----------------------------------------------------------------------------------------------------------------
    initOnSubmit = _a.onSubmit, initOnValid = _a.onInvalid, initOnValueChange = _a.onValueChange, initOnValueChangeByUser = _a.onValueChangeByUser;
    var _g = useFormState(), formId = _g.id, formVariant = _g.variant, formSize = _g.size, formColor = _g.color, formDisabled = _g.disabled, formSubmitWhenReturnKey = _g.submitWhenReturnKey, formSpacing = _g.spacing, formFormColGap = _g.formColGap, formFocused = _g.focused, formLabelShrink = _g.labelShrink, formFullWidth = _g.fullWidth, formFullHeight = _g.fullHeight, formColAutoXs = _g.formColAutoXs, formColWidth = _g.formColWidth, onAddFormCol = _g.onAddFormCol, onRemoveFormCol = _g.onRemoveFormCol, formColXs = _g.formColXs, formColWithLabel = _g.formColWithLabel, formColWithHelperText = _g.formColWithHelperText, formAddValueItem = _g.onAddValueItem, formRemoveValueItem = _g.onRemoveValueItem, formValueChange = _g.onValueChange, formValueChangeByUser = _g.onValueChangeByUser, formRequestSubmit = _g.onRequestSubmit, formRequestSearchSubmit = _g.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var spacing = ifUndefined(initSpacing, formSpacing);
    var formColGap = ifUndefined(initFormColGap, formFormColGap);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(ifUndefined(initFullWidth, formFullWidth), true);
    var fullHeight = ifUndefined(ifUndefined(initFullHeight, formFullHeight), false);
    var disabled = ifUndefined(ifUndefined(initDisabled, formDisabled), false);
    var submitWhenReturnKey = ifUndefined(ifUndefined(initSubmitWhenReturnKey, formSubmitWhenReturnKey), false);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var formRef = useRef(null);
    var valueItems = useRef({});
    var onSubmitRef = useAutoUpdateLayoutRef(initOnSubmit);
    var onInvalidRef = useAutoUpdateLayoutRef(initOnValid);
    var onValueChangeRef = useAutoUpdateLayoutRef(initOnValueChange);
    var onValueChangeByUserRef = useAutoUpdateLayoutRef(initOnValueChangeByUser);
    /********************************************************************************************************************
     * Function - submit
     * ******************************************************************************************************************/
    var submit = useCallback(function () {
        var isAllValid = true;
        var firstInvalidItemId;
        var data = {};
        var invalidItems = [];
        Object.keys(valueItems.current).forEach(function (id) {
            var itemCommands = valueItems.current[id];
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
            setTimeout(function () {
                var _a;
                (_a = valueItems.current[firstInvalidItemId]) === null || _a === void 0 ? void 0 : _a.focusValidate();
            });
        }
    }, [onSubmitRef, onInvalidRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () {
        var findValueItem = function (name) {
            return Object.values(valueItems.current).find(function (commands) {
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
        var getFormValue = function (name, subKey, isReset) {
            var valueItem = findValueItem(name);
            if (valueItem) {
                switch (valueItem.getType()) {
                    case 'PFormDateRangePicker':
                    case 'PFormYearRangePicker': {
                        var commands_1 = valueItem;
                        var value = getItemFormValue(valueItem, !!isReset);
                        if (notEmpty(subKey)) {
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
                    case 'PFormMonthPicker': {
                        var commands_2 = valueItem;
                        var value = getItemFormValue(valueItem, !!isReset);
                        if (notEmpty(subKey)) {
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
                    case 'PFormMonthRangePicker': {
                        var commands_3 = valueItem;
                        var value = getItemFormValue(valueItem, !!isReset);
                        if (notEmpty(subKey)) {
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
        return {
            submit: submit,
            getAllFormValue: function () {
                var data = {};
                Object.keys(valueItems.current).forEach(function (id) {
                    var itemCommands = valueItems.current[id];
                    if (itemCommands) {
                        if (!itemCommands.isDisabled() && !itemCommands.isExceptValue()) {
                            appendFormValueData(data, itemCommands);
                        }
                    }
                });
                return data;
            },
            resetAll: function () {
                Object.keys(valueItems.current).forEach(function (id) {
                    var _a;
                    (_a = valueItems.current[id]) === null || _a === void 0 ? void 0 : _a.reset();
                });
            },
            getItem: function (name) {
                return findValueItem(name);
            },
            exists: function (name) {
                return !!findValueItem(name);
            },
            getReset: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.getReset();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            getFormReset: function (name, subKey) {
                return getFormValue(name, subKey, true);
            },
            reset: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.reset();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            getValue: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.getValue();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            getFormValue: function (name, subKey) {
                return getFormValue(name, subKey, false);
            },
            setValue: function (name, value) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setValue(value);
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            isExceptValue: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.isExceptValue();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            isDisabled: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.isDisabled();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            setDisabled: function (name, disabled) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setDisabled(disabled);
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            isHidden: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.isHidden();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            setHidden: function (name, hidden) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setHidden(hidden);
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            focus: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.focus();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            validate: function (name) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    return valueItem.validate();
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
            setError: function (name, error, helperText) {
                var valueItem = findValueItem(name);
                if (valueItem)
                    valueItem.setError(error, helperText);
                else
                    throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
            },
        };
    }, [submit]);
    useForwardLayoutRef(ref, commands);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleSubmit = useCallback(function (e) {
        e.preventDefault();
        if (!disabled) {
            submit();
        }
    }, [disabled, submit]);
    /********************************************************************************************************************
     * FormContextValue
     * ******************************************************************************************************************/
    var formContextValue = useMemo(function () {
        return ({
            id: formId || 'form',
            variant: variant,
            size: size,
            color: color,
            spacing: spacing,
            formColGap: formColGap,
            focused: focused,
            labelShrink: labelShrink,
            fullWidth: fullWidth,
            fullHeight: fullHeight,
            disabled: disabled,
            submitWhenReturnKey: submitWhenReturnKey,
            onAddValueItem: function (id, item) {
                valueItems.current[id] = item;
                if (formAddValueItem)
                    formAddValueItem(id, item);
            },
            onRemoveValueItem: function (id) {
                valueItems.current[id] = undefined;
                if (formRemoveValueItem)
                    formRemoveValueItem(id);
            },
            onValueChange: function (name, value) {
                if (onValueChangeRef.current)
                    onValueChangeRef.current(name, value);
                if (formValueChange)
                    formValueChange(name, value);
            },
            onValueChangeByUser: function (name, value) {
                if (onValueChangeByUserRef.current)
                    onValueChangeByUserRef.current(name, value);
                if (formValueChangeByUser)
                    formValueChangeByUser(name, value);
            },
            onRequestSubmit: function (name, value) {
                if (!disabled)
                    submit();
                if (formRequestSubmit)
                    formRequestSubmit(name, value);
            },
            onRequestSearchSubmit: formRequestSearchSubmit,
            formColAutoXs: formColAutoXs,
            formColWidth: formColWidth,
            onAddFormCol: onAddFormCol,
            onRemoveFormCol: onRemoveFormCol,
            formColXs: formColXs,
            formColWithLabel: formColWithLabel,
            formColWithHelperText: formColWithHelperText,
        });
    }, [
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
        React.createElement(Box, { className: classNames('PForm', "PForm-variant-".concat(variant), fullHeight && 'full-height', className), component: 'form', ref: formRef, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit, style: fullHeight ? __assign(__assign({}, initStyle), { flex: 1, height: '100%' }) : initStyle, sx: sx },
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: fullHeight ? '100%' : undefined,
                } }, children))));
});var PFormButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initSize = _a.size, initColor = _a.color, initVariant = _a.variant, initFullWidth = _a.fullWidth, className = _a.className, _b = _a.type, type = _b === void 0 ? 'button' : _b, onClick = _a.onClick, props = __rest(_a, ["size", "color", "variant", "fullWidth", "className", "type", "onClick"]);
    var _c = useFormState(), formSize = _c.size, formColor = _c.color, formFullWidth = _c.fullWidth;
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PButton, __assign({ ref: ref, className: classNames(className, 'PFormButton'), type: type, variant: initVariant ? initVariant : type === 'submit' ? 'contained' : 'outlined', size: size, color: color, fullWidth: fullWidth, onClick: onClick }, props)));
});
var PFormButton$1 = React.memo(PFormButton);var IconPIcon = styled(PIcon)(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"], ["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"])));
var ChildrenSpan = styled('span')(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  vertical-align: middle;\n"], ["\n  vertical-align: middle;\n"])));
var templateObject_1$j, templateObject_2$9;var PFormLabel = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var children = _a.children, icon = _a.icon, size = _a.size, style = _a.style, error = _a.error, warning = _a.warning, props = __rest(_a, ["children", "icon", "size", "style", "error", "warning"]);
    var theme = useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var newStyle = __assign({ height: 20, transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined }, style);
    if (!error) {
        newStyle.color = warning ? theme.palette.warning.main : style === null || style === void 0 ? void 0 : style.color;
    }
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(InputLabel, __assign({ ref: ref, shrink: true, className: 'PFormItemBase-InputLabel', size: size, error: error, style: newStyle }, props), icon ? (React.createElement(React.Fragment, null,
        React.createElement(IconPIcon, null, icon),
        React.createElement(ChildrenSpan, null, children))) : (children)));
});
var PFormLabel$1 = React.memo(PFormLabel);var StyledLineBox = styled(Box)(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"], ["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"])));
var StyledErrorLineBox = styled(Box)(function (_a) {
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
var StyledWarningLineBox = styled(Box)(function (_a) {
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
var templateObject_1$i;var DEFAULT_LINE_STYLE = { flex: 1, position: 'relative' };
var PFormDivider = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initSize = _a.size, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, _b = _a.lineVerticalMargin, lineVerticalMargin = _b === void 0 ? 9 : _b, hidden = _a.hidden, collapse = _a.collapse, collapseIn = _a.collapseIn, error = _a.error, warning = _a.warning, onCollapseChange = _a.onCollapseChange, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var formSize = useFormState().size;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = useMemo(function () {
        if (hidden) {
            return __assign(__assign({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [hidden, initStyle]);
    var lineStyle = useMemo(function () {
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
    var handleClick = useCallback(function () {
        if (collapse) {
            onCollapseChange && onCollapseChange(!collapseIn);
        }
    }, [collapse, collapseIn, onCollapseChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Grid, { ref: ref, size: { xs: 12 }, style: style, className: classNames(className, 'PFormDivider'), sx: sx },
        React.createElement(Box, { sx: {
                display: 'flex',
                py: 1,
                alignItems: 'center',
                justifyItems: 'center',
                padding: 0,
                cursor: collapse ? 'pointer' : undefined,
            }, onClick: handleClick },
            icon && (React.createElement(PIcon, { style: { opacity: 0.54, marginRight: 5 }, color: error ? 'error' : warning ? 'warning' : undefined, size: size }, icon)),
            label && (React.createElement(Box, { sx: {
                    paddingRight: '10px',
                    color: error ? 'error.main' : warning ? 'warning.main' : 'text.secondary',
                    fontWeight: 700,
                    fontSize: size === 'small' ? '11.5px' : '12px',
                } }, label)),
            (line || collapse) && (React.createElement("div", { style: lineStyle }, error ? React.createElement(StyledErrorLineBox, null) : warning ? React.createElement(StyledWarningLineBox, null) : React.createElement(StyledLineBox, null))),
            collapse && (React.createElement(PIcon, { sx: { opacity: 0.6, ml: 1 }, color: error ? 'error' : warning ? 'warning' : undefined }, collapseIn ? 'KeyboardDoubleArrowUp' : 'KeyboardDoubleArrowDown')))));
});var StyledWrapGrid$1 = styled(Grid)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$h;var PFormBlock = React.forwardRef(function (_a, ref) {
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
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var spacing = ifUndefined(initSpacing, formSpacing);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = useAutoUpdateState(initCollapseIn), collapseIn = _c[0], setCollapseIn = _c[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = useMemo(function () {
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
    useEffect(function () {
        setCollapseIn(initCollapseIn);
    }, [initCollapseIn, setCollapseIn]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var Container = useMemo(function () {
        return collapse ? Collapse : React.Fragment;
    }, [collapse]);
    var containerProps = useMemo(function () {
        return collapse ? { in: collapseIn } : undefined;
    }, [collapse, collapseIn]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContext.Provider, { value: __assign(__assign({}, otherFormState), { variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth }) },
        React.createElement(Grid, { ref: ref, size: { xs: 12 }, className: classNames(className, 'PFormBlock'), style: style, sx: sx },
            React.createElement(Grid, { container: true, spacing: spacing },
                (icon || label || line || collapse) && (React.createElement(PFormDivider, { className: 'PFormBlock-header', collapse: collapse, collapseIn: collapseIn, size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden, onCollapseChange: collapse ? function (newCollapseIn) { return setCollapseIn(newCollapseIn); } : undefined })),
                React.createElement(StyledWrapGrid$1, { size: { xs: 12 } },
                    React.createElement(Container, __assign({}, containerProps),
                        React.createElement(Grid, { container: true, spacing: spacing },
                            React.createElement(StyledWrapGrid$1, { size: { xs: 12 }, className: 'PFormBlock-body' },
                                React.createElement(Grid, { className: 'PFormBlock-content', container: true, spacing: spacing }, children)))))))));
});var StyledWrapGrid = styled(Grid)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$g;var PFormRow = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, fullHeight = _a.fullHeight, 
    //----------------------------------------------------------------------------------------------------------------
    hidden = _a.hidden, error = _a.error, warning = _a.warning, helperText = _a.helperText, 
    //----------------------------------------------------------------------------------------------------------------
    children = _a.children, className = _a.className, initStyle = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, otherFormState = __rest(_b, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    /********************************************************************************************************************
     * Value
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var spacing = ifUndefined(initSpacing, formSpacing);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var formCols = useState({})[0];
    var _c = useState(12), formColAutoXs = _c[0], setFormColAutoXs = _c[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = useMemo(function () {
        var style = __assign({ width: '100%' }, initStyle);
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
    var makeFormColXs = useCallback(function () {
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
    var handleAddFormCol = useCallback(function (id, xs) {
        formCols[id] = xs;
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    var handleRemoveFormCol = useCallback(function (id) {
        delete formCols[id];
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: __assign(__assign({}, otherFormState), { variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColAutoXs: formColAutoXs, onAddFormCol: handleAddFormCol, onRemoveFormCol: handleRemoveFormCol }) },
        React.createElement(Grid, { ref: ref, size: { xs: 12 }, className: classNames(className, 'PFormRow'), style: style, sx: sx },
            React.createElement(Grid, { container: true, spacing: spacing, style: fullHeight ? { height: '100%' } : undefined },
                (icon || label || line) && (React.createElement(PFormDivider, { className: classNames(className, 'PFormRow-header'), size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden })),
                React.createElement(StyledWrapGrid, { size: { xs: 12 }, className: 'PFormRow-body', style: fullHeight ? { height: '100%' } : undefined },
                    React.createElement(Grid, { className: 'PFormRow-content', container: true, spacing: spacing, direction: 'row', style: { flexWrap: 'nowrap', height: fullHeight ? '100%' : undefined } }, children),
                    helperText && (React.createElement(FormHelperText, { className: 'PFormRow-helper-text', component: 'div', error: error }, helperText)))))));
});var StyledFormLabelContainerDiv = styled('div')(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: relative;\n  height: 20px;\n"], ["\n  position: relative;\n  height: 20px;\n"])));
var StyledFormLabel = styled(PFormLabel$1)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  position: absolute;\n  left: 5px;\n  top: 0;\n"], ["\n  position: absolute;\n  left: 5px;\n  top: 0;\n"])));
var StyledContentContainerBox = styled(Box)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var templateObject_1$f, templateObject_2$8, templateObject_3$4;var PFormCol = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, fullHeight = _a.fullHeight, 
    //----------------------------------------------------------------------------------------------------------------
    initGap = _a.gap, icon = _a.icon, label = _a.label, hidden = _a.hidden, error = _a.error, warning = _a.warning, helperText = _a.helperText, helperTextShift = _a.helperTextShift, 
    //----------------------------------------------------------------------------------------------------------------
    xs = _a.xs, className = _a.className, children = _a.children, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFormColGap = _b.formColGap, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColAutoXs = _b.formColAutoXs, onAddFormCol = _b.onAddFormCol, onRemoveFormCol = _b.onRemoveFormCol, otherFormState = __rest(_b, ["variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "formColAutoXs", "onAddFormCol", "onRemoveFormCol"]);
    /********************************************************************************************************************
     * Variable - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var spacing = ifUndefined(initSpacing, formSpacing);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    var formColGap = ifUndefined(initGap, formFormColGap);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var style = useMemo(function () {
        var newStyle = __assign({}, initStyle);
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
    var _c = useResizeDetector({ handleHeight: false }), gridRef = _c.ref, resizedFormColWidth = _c.width;
    var formColWidth = ifUndefined(resizedFormColWidth, 0);
    /********************************************************************************************************************
     * LayoutEffect
     * ******************************************************************************************************************/
    useLayoutEffect(function () {
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
    useEffect(function () {
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
    return (React.createElement(PFormContextProvider, { value: __assign(__assign({}, otherFormState), { variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColGap: formColGap, formColXs: xs || formColAutoXs || 12, formColWidth: formColWidth, formColWithLabel: !!label, formColWithHelperText: !!helperText }) },
        React.createElement(Grid, { ref: function (ref) {
                gridRef.current = ref;
            }, size: { xs: xs || formColAutoXs || 12 }, className: classNames(className, 'PFormCol', !!label && 'with-label', !!helperText && 'with-helper-text'), style: style, sx: sx },
            React.createElement("div", null,
                label && (React.createElement("div", { className: 'FormCol-header' },
                    React.createElement(StyledFormLabelContainerDiv, null,
                        React.createElement(StyledFormLabel, { className: 'FormCol-FormLabel', size: size, icon: icon, focused: focused, color: color, error: error, warning: warning }, label)))),
                React.createElement("div", { className: 'FormCol-content' },
                    React.createElement(StyledContentContainerBox, { gap: formColGap }, children)),
                helperText && (React.createElement("div", { className: 'FormCol-helper-text' },
                    React.createElement(FormHelperText, { component: 'div', error: error, style: { marginLeft: helperTextShift ? 14 : 5 } }, helperText)))))));
});var StyledContainerDiv = styled('div')(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n"], ["\n  flex: 1;\n  position: relative;\n"])));
var StyledContentDiv = styled('div')(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"], ["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"])));
var templateObject_1$e, templateObject_2$7;var PFormBody = function (_a) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var children = _a.children, hidden = _a.hidden, initFullHeight = _a.fullHeight, initStyle = _a.style;
    var _b = useFormState(), spacing = _b.spacing, fullHeight = _b.fullHeight;
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    var _c = useResizeDetector({ handleWidth: false }), containerRef = _c.ref, resizedHeight = _c.height;
    var height = ifUndefined(resizedHeight, 0);
    /********************************************************************************************************************
     * Style
     * ******************************************************************************************************************/
    var style = useMemo(function () {
        var newStyle = __assign({}, initStyle);
        if (hidden) {
            newStyle.display = 'none';
        }
        return newStyle;
    }, [hidden, initStyle]);
    var contentStyle = useMemo(function () {
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
    return (React.createElement(StyledContainerDiv, { ref: fullHeight
            ? function (ref) {
                containerRef.current = ref;
            }
            : undefined, className: 'PFormBody', style: style },
        React.createElement(StyledContentDiv, { style: contentStyle },
            React.createElement(Grid, { container: true, spacing: spacing, direction: 'column', style: initFullHeight ? { height: '100%' } : undefined }, children))));
};var PFormFooter = function (_a) {
    var children = _a.children, noLine = _a.noLine, hidden = _a.hidden;
    var spacing = useFormState().spacing;
    var style = useMemo(function () { return (hidden ? { display: 'none' } : undefined); }, [hidden]);
    return (React.createElement(Grid, { size: { xs: 12 }, className: 'PFormFooter', style: style },
        React.createElement(Grid, { container: true, spacing: spacing, direction: 'column' },
            !noLine && (React.createElement(Grid, { size: { xs: 12 }, sx: { mt: spacing } },
                React.createElement(PFormDivider, { line: true }))),
            children)));
};insertStyle(".PFormTextField{min-width:200px}.PFormTextField .clear-icon-button-wrap{visibility:hidden}.PFormTextField.variant-filled .clear-icon-button-wrap{margin-top:9px;margin-bottom:-9px}.PFormTextField:hover .clear-icon-button-wrap.show,.PFormTextField .MuiInputBase-root.Mui-focused .clear-icon-button-wrap.show{visibility:visible}");var PFormTextField = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, initSubmitWhenReturnKey = _a.submitWhenReturnKey, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, required = _a.required, initValue = _a.value, initData = _a.data, icon = _a.icon, labelIcon = _a.labelIcon, initLabel = _a.label, initError = _a.error, helperText = _a.helperText, exceptValue = _a.exceptValue, readOnly = _a.readOnly, tabIndex = _a.tabIndex, initDisabled = _a.disabled, placeholder = _a.placeholder, maxLength = _a.maxLength, clear = _a.clear, width = _a.width, initSlotProps = _a.slotProps, initInputRef = _a.inputRef, select = _a.select, multiline = _a.multiline, validPattern = _a.validPattern, invalidPattern = _a.invalidPattern, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, noFormValueItem = _a.noFormValueItem, initHidden = _a.hidden, disableReturnKey = _a.disableReturnKey, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "submitWhenReturnKey", "name", "required", "value", "data", "icon", "labelIcon", "label", "error", "helperText", "exceptValue", "readOnly", "tabIndex", "disabled", "placeholder", "maxLength", "clear", "width", "slotProps", "inputRef", "select", "multiline", "validPattern", "invalidPattern", "startAdornment", "endAdornment", "noFormValueItem", "hidden", "disableReturnKey", "onChange", "onValue", "onValidate", "onBlur", "onKeyDown", "className", "style"]);
    var id = useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var inputRef = useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formDisabled = _b.disabled, formSubmitWhenReturnKey = _b.submitWhenReturnKey, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSubmit = _b.onRequestSubmit, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    var submitWhenReturnKey = ifUndefined(initSubmitWhenReturnKey, formSubmitWhenReturnKey);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _c = useAutoUpdateState(initError), error = _c[0], setError = _c[1];
    var _d = useState(), errorHelperText = _d[0], setErrorHelperText = _d[1];
    var _e = useAutoUpdateRefState(initData), dataRef = _e[0], setData = _e[2];
    var _f = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _f[0], disabled = _f[1], setDisabled = _f[2];
    var _g = useAutoUpdateRefState(initHidden), hiddenRef = _g[0], hidden = _g[1], setHidden = _g[2];
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
            setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (notEmpty(value) && validPattern) {
            if (!new RegExp(validPattern).test(value)) {
                setErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
                return false;
            }
        }
        if (notEmpty(value) && invalidPattern) {
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
     * value
     * ******************************************************************************************************************/
    var getFinalValue = useCallback(function (newValue) {
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    var _h = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _h[0], value = _h[1], _setValue = _h[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var showClear = clear ? notEmpty(value) : false;
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = useCallback(function () {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'default'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
    }); }, [
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
    var handleCommandSet = useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]);
    var handleCommandUnset = useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]);
    useForwardLayoutRef(ref, commands, !noFormValueItem ? handleCommandSet : undefined, !noFormValueItem ? handleCommandUnset : undefined);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (e) {
        var finalValue = updateValue(e.target.value);
        if (!noFormValueItem) {
            setTimeout(function () {
                onValueChangeByUser(name, finalValue);
                if (select) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
    }, [updateValue, noFormValueItem, onValueChangeByUser, name, select, onRequestSearchSubmit]);
    var handleBlur = useCallback(function (e) {
        if (error)
            validate(valueRef.current);
        if (onBlur)
            onBlur(e);
    }, [error, validate, valueRef, onBlur]);
    var handleKeyDown = useCallback(function (e) {
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
    var style = __assign({}, initStyle);
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
    var inputSlotProps = useMemo(function () {
        var newProps = __assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input);
        if (startAdornment || icon || newProps.startAdornment) {
            newProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(InputAdornment, { position: 'start' },
                    React.createElement(PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(InputAdornment, { position: 'start' }, startAdornment),
                newProps.startAdornment));
        }
        if (endAdornment || newProps.endAdornment || (clear && !readOnly && !disabled)) {
            newProps.endAdornment = (React.createElement(React.Fragment, null,
                clear && !readOnly && !disabled && (React.createElement(InputAdornment, { className: classNames('clear-icon-button-wrap', showClear && 'show'), position: 'end' },
                    React.createElement(IconButton, { className: 'clear-icon-button', size: 'small', tabIndex: -1, onClick: function () {
                            var finalValue = updateValue('');
                            focus();
                            if (!noFormValueItem) {
                                setTimeout(function () {
                                    onValueChangeByUser(name, finalValue);
                                    onRequestSearchSubmit(name, finalValue);
                                });
                            }
                        } },
                        React.createElement(PIcon, { size: 'inherit' }, "ClearRounded")))),
                newProps.endAdornment,
                endAdornment && React.createElement(InputAdornment, { position: 'end' }, endAdornment)));
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
    var slotProps = useMemo(function () {
        var _a;
        var newSlotProps = __assign(__assign({}, initSlotProps), { formHelperText: { component: 'div' } });
        // input
        newSlotProps.input = __assign(__assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input), inputSlotProps);
        // inputLabel
        newSlotProps.inputLabel =
            labelShrink || placeholder
                ? __assign(__assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel), { shrink: true }) : initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel;
        // htmlInput
        var initHtmlInputProps = initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.htmlInput;
        if ((!((_a = initHtmlInputProps === null || initHtmlInputProps === void 0 ? void 0 : initHtmlInputProps.className) === null || _a === void 0 ? void 0 : _a.includes('PFormTag-Input')) && readOnly != null) || maxLength != null) {
            newSlotProps.htmlInput = __assign(__assign({}, initHtmlInputProps), { readOnly: readOnly, maxLength: maxLength });
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
    return (React.createElement(TextField, __assign({}, props, { variant: variant, size: size, color: color, focused: focused || undefined, name: name, label: labelIcon ? (React.createElement(React.Fragment, null,
            React.createElement(PIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React.createElement(Box, { component: 'span', style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel), placeholder: placeholder, className: classNames(className, 'PFormValueItem', 'PFormTextField', "variant-".concat(variant)), inputRef: initInputRef ? initInputRef : inputRef, value: value, required: required, fullWidth: !width && fullWidth, error: error, helperText: formColWithHelperText ? undefined : error ? errorHelperText : helperText, slotProps: slotProps, disabled: disabled, style: style, select: select, multiline: multiline, onChange: handleChange, onBlur: handleBlur, onKeyDown: handleKeyDown })));
});
PFormTextField.displayName = 'PFormTextField';insertStyle(".PFormHidden{display:none !important}");var PFormHidden = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(PFormTextField, __assign({ ref: ref, className: classNames(className, 'PFormHidden'), type: 'hidden', variant: 'standard' }, props)));
});
PFormHidden.displayName = 'PFormHidden';var PFormText = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.clear, clear = _b === void 0 ? true : _b, _c = _a.value, value = _c === void 0 ? '' : _c, props = __rest(_a, ["className", "clear", "value"]);
    return (React.createElement(PFormTextField, __assign({ ref: ref, className: classNames(className, 'PFormText'), clear: clear, value: value, disableReturnKey: true }, props)));
});
PFormText.displayName = 'PFormText';var PFormTagText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var allowSpace = _a.allowSpace, onKeyDown = _a.onKeyDown, onBlur = _a.onBlur, onAppendTag = _a.onAppendTag, props = __rest(_a, ["allowSpace", "onKeyDown", "onBlur", "onAppendTag"]);
    var forceUpdate = useForceUpdate();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var valueRef = useRef('');
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var appendTag = useCallback(function () {
        onAppendTag(valueRef.current);
        valueRef.current = ' ';
        forceUpdate();
        setTimeout(function () {
            valueRef.current = '';
            forceUpdate();
        });
    }, [forceUpdate, onAppendTag]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleKeyDown = useCallback(function (e) {
        var appendKeys = allowSpace ? [',', 'Enter'] : [' ', ',', 'Enter'];
        if (appendKeys.includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            if (notEmpty(valueRef.current)) {
                appendTag();
            }
        }
        else {
            if (onKeyDown)
                onKeyDown(e);
        }
    }, [allowSpace, appendTag, onKeyDown]);
    var handleChange = useCallback(function (value) {
        valueRef.current = allowSpace ? value.replace(/,/g, '') : value.replace(/ /g, '').replace(/,/g, '');
    }, [allowSpace]);
    var handleBlur = useCallback(function (e) {
        if (notEmpty(valueRef.current)) {
            appendTag();
        }
        if (onBlur)
            onBlur(e);
    }, [onBlur, appendTag]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledFormText, __assign({ ref: ref }, props, { clear: false, value: valueRef.current, onChange: handleChange, onKeyDown: handleKeyDown, onBlur: handleBlur })));
});
/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/
var StyledFormText = styled(PFormText)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  .PFormTag-Input {\n    flex: 1;\n    min-width: 50px;\n    padding-left: 5px;\n  }\n  &.variant-outlined {\n    .MuiInputBase-root {\n      .PFormTag-Input {\n        padding-top: 7px;\n        padding-bottom: 8px;\n      }\n\n      &.MuiInputBase-sizeSmall {\n        .PFormTag-Input {\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n      }\n    }\n  }\n"], ["\n  .PFormTag-Input {\n    flex: 1;\n    min-width: 50px;\n    padding-left: 5px;\n  }\n  &.variant-outlined {\n    .MuiInputBase-root {\n      .PFormTag-Input {\n        padding-top: 7px;\n        padding-bottom: 8px;\n      }\n\n      &.MuiInputBase-sizeSmall {\n        .PFormTag-Input {\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n      }\n    }\n  }\n"])));
var templateObject_1$d;var _emptyValue = [];
var PFormTag = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, name = _a.name, _b = _a.value, initValue = _b === void 0 ? _emptyValue : _b, exceptValue = _a.exceptValue, _c = _a.clear, clear = _c === void 0 ? true : _c, required = _a.required, readOnly = _a.readOnly, maxLength = _a.maxLength, initDisabled = _a.disabled, initFullWidth = _a.fullWidth, initError = _a.error, helperText = _a.helperText, _d = _a.formValueSeparator, formValueSeparator = _d === void 0 ? ',' : _d, formValueSort = _a.formValueSort, limitTags = _a.limitTags, getLimitTagsText = _a.getLimitTagsText, allowSpace = _a.allowSpace, slotProps = _a.slotProps, onAppendTag = _a.onAppendTag, onRemoveTag = _a.onRemoveTag, onTagClick = _a.onTagClick, onValidate = _a.onValidate, onChange = _a.onChange, onValue = _a.onValue, props = __rest(_a, ["variant", "size", "className", "name", "value", "exceptValue", "clear", "required", "readOnly", "maxLength", "disabled", "fullWidth", "error", "helperText", "formValueSeparator", "formValueSort", "limitTags", "getLimitTagsText", "allowSpace", "slotProps", "onAppendTag", "onRemoveTag", "onTagClick", "onValidate", "onChange", "onValue"]);
    var _e = useFormState(), formVariant = _e.variant, formSize = _e.size, formFullWidth = _e.fullWidth, formDisabled = _e.disabled, onAddValueItem = _e.onAddValueItem, onValueChange = _e.onValueChange, onValueChangeByUser = _e.onValueChangeByUser, onRequestSearchSubmit = _e.onRequestSearchSubmit, otherFormState = __rest(_e, ["variant", "size", "fullWidth", "disabled", "onAddValueItem", "onValueChange", "onValueChangeByUser", "onRequestSearchSubmit"]);
    /********************************************************************************************************************
     * FormState - Variables
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _f = useAutoUpdateState(initError), error = _f[0], setError = _f[1];
    var _g = useState(), errorHelperText = _g[0], setErrorHelperText = _g[1];
    var disabled = useAutoUpdateState(initDisabled == null ? formDisabled : initDisabled)[0];
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
    var getFinalValue = useCallback(function (value) {
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
    var _h = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _h[0], value = _h[1], _setValue = _h[2];
    var valueSet = useMemo(function () { return new Set(value); }, [value]);
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    useEffect(function () {
        if (!equal(value, initValue)) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Function - getExtraCommands
     * ******************************************************************************************************************/
    var getExtraCommands = useCallback(function () {
        return {
            isFormValueSort: function () { return !!formValueSort; },
            getFormValueSeparator: function () { return formValueSeparator; },
        };
    }, [formValueSort, formValueSeparator]);
    /********************************************************************************************************************
     * Function - getCommands
     * ******************************************************************************************************************/
    var getCommands = useCallback(function (baseCommands) {
        return __assign(__assign(__assign({}, baseCommands), { getReset: function () { return getFinalValue(initValue); }, reset: function () { return updateValue(initValue); }, getValue: function () { return valueRef.current; }, setValue: function (newValue) {
                updateValue(newValue);
            }, validate: function () { return validate(valueRef.current); } }), getExtraCommands());
    }, [getExtraCommands, getFinalValue, initValue, updateValue, valueRef, validate]);
    /********************************************************************************************************************
     * Function - appendTag, removeTag
     * ******************************************************************************************************************/
    var appendTag = useCallback(function (tag) {
        var finalTag = tag.trim();
        if (notEmpty(finalTag) && !valueSet.has(finalTag)) {
            if (onAppendTag && !onAppendTag(finalTag))
                return;
            valueSet.add(finalTag);
            var finalValue_1 = updateValue(valueSet);
            setTimeout(function () {
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [valueSet, onAppendTag, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    var removeTag = useCallback(function (tag) {
        if (valueSet.has(tag)) {
            if (onRemoveTag && !onRemoveTag(tag))
                return;
            valueSet.delete(tag);
            var finalValue_2 = updateValue(valueSet);
            setTimeout(function () {
                onValueChangeByUser(name, finalValue_2);
                onRequestSearchSubmit(name, finalValue_2);
            });
        }
    }, [valueSet, onRemoveTag, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = useCallback(function (id, commands) {
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    var handleRef = useCallback(function (commands) {
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
    var handleRenderValue = useCallback(function (tags) {
        return tags.map(function (tag) { return (React.createElement(Chip, { className: 'MuiAutocomplete-tag', key: tag, label: tag, size: 'small', style: variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined, disabled: readOnly || disabled, onDelete: readOnly || disabled ? undefined : function () { return removeTag(tag); }, onClick: function () { return onTagClick === null || onTagClick === void 0 ? void 0 : onTagClick(tag); } })); });
    }, [disabled, onTagClick, readOnly, removeTag, size, variant]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var handleRenderInput = useCallback(function (params) {
        var _a, _b;
        var htmlInputProps = __assign(__assign({}, params.inputProps), { className: classNames('PFormTag-Input', readOnly && 'Mui-disabled'), readOnly: readOnly, tabIndex: readOnly ? -1 : undefined, maxLength: maxLength });
        delete htmlInputProps.onChange;
        delete htmlInputProps.value;
        var renderProps = __assign({ name: name, clear: clear, size: size, className: classNames(className, 'PFormValueItem', 'PFormTag'), error: error, disabled: disabled, fullWidth: fullWidth, required: required, exceptValue: exceptValue, slotProps: __assign(__assign({}, slotProps), { inputLabel: __assign(__assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.inputLabel), { htmlFor: params.InputLabelProps.htmlFor, id: params.InputLabelProps.id }), input: __assign(__assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.input), { style: __assign(__assign({}, (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.input) === null || _a === void 0 ? void 0 : _a.style), (variant === 'outlined' && size === 'small'
                        ? { paddingTop: 7, paddingBottom: 6, marginTop: -2 }
                        : undefined)), className: params.InputProps.className, ref: params.InputProps.ref, startAdornment: params.InputProps.startAdornment }), htmlInput: __assign(__assign(__assign({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.htmlInput), htmlInputProps), { style: __assign(__assign(__assign({}, (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.htmlInput) === null || _b === void 0 ? void 0 : _b.style), htmlInputProps.style), (variant === 'outlined' && size === 'small' ? { marginTop: 4, paddingBottom: 2 } : undefined)) }) }), helperText: error ? errorHelperText : helperText, allowSpace: allowSpace, onAppendTag: appendTag }, props);
        return React.createElement(PFormTagText, __assign({ ref: handleRef }, renderProps));
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
    return (React.createElement(PFormContextProvider, { value: __assign(__assign({}, otherFormState), { variant: formVariant, size: formSize, fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, onValueChange: function () { }, onValueChangeByUser: function () { }, onRequestSearchSubmit: function () { } }) },
        React.createElement(Autocomplete, { options: [], multiple: true, freeSolo: true, value: value, readOnly: readOnly, disableClearable: true, limitTags: limitTags, getLimitTagsText: getLimitTagsText, disabled: disabled, renderValue: handleRenderValue, style: { display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }, renderInput: handleRenderInput })));
});
PFormTag.displayName = 'PFormTag';var PFormEmail = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, _b = _a.validPattern, validPattern = _b === void 0 ? /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g : _b, onValue = _a.onValue, props = __rest(_a, ["className", "validPattern", "onValue"]);
    var handleValue = useCallback(function (value) {
        var newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, __assign({ ref: ref, className: classNames(className, 'PFormEmail'), type: 'email', validPattern: validPattern, onValue: handleValue }, props)));
});
PFormEmail.displayName = 'PFormEmail';insertStyle(".PFormPassword .eye-icon-button-wrap{visibility:hidden}.PFormPassword.variant-filled .eye-icon-button-wrap{margin-top:9px;margin-bottom:-9px}.PFormPassword:hover .eye-icon-button-wrap.show,.PFormPassword .MuiInputBase-root.Mui-focused .eye-icon-button-wrap.show{visibility:visible}");var StyledEyeInputAdornment = styled(InputAdornment)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  visibility: hidden;\n"], ["\n  visibility: hidden;\n"])));
var PFormPassword = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var className = _a.className, initSlotProps = _a.slotProps, _b = _a.clear, clear = _b === void 0 ? false : _b, _c = _a.eye, eye = _c === void 0 ? true : _c, onChange = _a.onChange, props = __rest(_a, ["className", "slotProps", "clear", "eye", "onChange"]);
    var _d = useState('password'), type = _d[0], setType = _d[1];
    var _e = useState(notEmpty(props.value)), showEye = _e[0], setShowEye = _e[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var slotProps = useMemo(function () {
        var _a;
        return __assign(__assign({}, initSlotProps), { input: __assign(__assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input), { endAdornment: (React.createElement(React.Fragment, null,
                    eye && (React.createElement(StyledEyeInputAdornment, { position: 'end', className: classNames('eye-icon-button-wrap', showEye && 'show') },
                        React.createElement(IconButton, { size: 'small', tabIndex: -1, onClick: function () {
                                setType(type === 'password' ? 'text' : 'password');
                            } },
                            React.createElement(Icon, { fontSize: 'inherit' }, type === 'password' ? 'visibility' : 'visibility_off')))), (_a = initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input) === null || _a === void 0 ? void 0 :
                    _a.endAdornment)) }) });
    }, [eye, initSlotProps, showEye, type]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (value) {
        setShowEye(notEmpty(value));
        onChange && onChange(value);
    }, [onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, __assign({ ref: ref, className: classNames(className, 'PFormPassword'), onChange: handleChange, type: type, slotProps: slotProps, clear: clear }, props)));
});
PFormPassword.displayName = 'PFormPassword';
var templateObject_1$c;var PFormTel = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, onValue = _a.onValue, _b = _a.validPattern, validPattern = _b === void 0 ? /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/ : _b, props = __rest(_a, ["className", "onValue", "validPattern"]);
    var handleValue = useCallback(function (value) {
        var newValue = formatTelNo(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, __assign({ ref: ref, className: classNames(className, 'PFormTel'), onValue: handleValue, maxLength: 13, validPattern: validPattern }, props)));
});
PFormTel.displayName = 'PFormTel';var PFormMobile = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.validPattern, validPattern = _b === void 0 ? /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/ : _b, props = __rest(_a, ["className", "validPattern"]);
    return (React.createElement(PFormTel, __assign({ ref: ref, className: classNames(className, 'PFormMobile'), validPattern: validPattern }, props)));
});
PFormMobile.displayName = 'PFormMobile';var NumberFormatCustom = React.forwardRef(function (_a, ref) {
    var onChange = _a.onChange, props = __rest(_a, ["onChange"]);
    return (React.createElement(NumericFormat, __assign({}, props, { getInputRef: ref, onValueChange: function (values) {
            if (onChange)
                onChange({ target: { value: values.value } });
        } })));
});var PFormNumber = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var className = _a.className, allowNegative = _a.allowNegative, thousandSeparator = _a.thousandSeparator, allowDecimal = _a.allowDecimal, decimalScale = _a.decimalScale, prefix = _a.prefix, suffix = _a.suffix, readOnly = _a.readOnly, tabIndex = _a.tabIndex, labelShrink = _a.labelShrink, _b = _a.clear, clear = _b === void 0 ? true : _b, initSlotProps = _a.slotProps, initValue = _a.value, onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, props = __rest(_a, ["className", "allowNegative", "thousandSeparator", "allowDecimal", "decimalScale", "prefix", "suffix", "readOnly", "tabIndex", "labelShrink", "clear", "slotProps", "value", "onChange", "onValue", "onValidate"]);
    var forceUpdate = useForceUpdate(1);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var strValueRef = useAutoUpdateRef(initValue !== undefined ? "".concat(initValue) : '');
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var slotProps = useMemo(function () {
        var _a;
        var newSlotProps = __assign({}, initSlotProps);
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
        newSlotProps.input = __assign(__assign({}, newSlotProps.input), { inputComponent: NumberFormatCustom, inputProps: __assign(__assign({}, (_a = newSlotProps.input) === null || _a === void 0 ? void 0 : _a.inputProps), inputProps) });
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
    var getFinalValue = useCallback(function (value) {
        return empty(value) || value === '-' || value === '.' ? undefined : Number(value);
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (value) {
        if (Number(value) > Number.MAX_SAFE_INTEGER) {
            var newValue = Number.MAX_SAFE_INTEGER;
            var newStrValue = "".concat(newValue);
            if (strValueRef.current === newStrValue) {
                strValueRef.current = "".concat(newValue, " ");
            }
            else {
                strValueRef.current = "".concat(newValue);
            }
            onChange && onChange(newValue);
            forceUpdate();
        }
        else if (Number(value) < Number.MIN_SAFE_INTEGER) {
            var newValue = Number.MIN_SAFE_INTEGER;
            var newStrValue = "".concat(newValue);
            if (strValueRef.current === newStrValue) {
                strValueRef.current = "".concat(newValue, " ");
            }
            else {
                strValueRef.current = "".concat(newValue);
            }
            onChange && onChange(newValue);
            forceUpdate();
        }
        else {
            var newValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
            onChange && onChange(newValue);
            strValueRef.current = value;
            forceUpdate();
        }
    }, [forceUpdate, onChange, strValueRef]);
    var handleValue = useCallback(function (value) {
        var finalValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        if (onValue) {
            finalValue = onValue(finalValue);
        }
        return finalValue !== undefined ? finalValue.toString() : '';
    }, [onValue]);
    var handleValidate = useCallback(function (value) {
        if (onValidate) {
            var finalValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
            return onValidate(finalValue);
        }
        else {
            return true;
        }
    }, [onValidate]);
    var handleRef = useCallback(function (commands) {
        if (ref) {
            var finalCommands = commands
                ? __assign(__assign({}, commands), { getReset: function () { return initValue; }, getValue: function () { return getFinalValue(strValueRef.current); }, setValue: function (value) {
                        var strValue = value !== undefined ? "".concat(value) : '';
                        if (strValueRef.current === strValue) {
                            strValueRef.current = "".concat(strValue, " ");
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
    return (React.createElement(PFormTextField, __assign({ ref: handleRef, className: classNames(className, 'PFormNumber'), disableReturnKey: true, labelShrink: strValueRef.current === '' || strValueRef.current === undefined ? labelShrink : true, slotProps: slotProps, readOnly: readOnly, clear: clear, value: strValueRef.current, onChange: handleChange, onValue: handleValue, onValidate: handleValidate }, props)));
});
PFormNumber.displayName = 'PFormNumber';insertStyle(".PFormSearch input[type=search]::-webkit-search-decoration,.PFormSearch input[type=search]::-webkit-search-cancel-button,.PFormSearch input[type=search]::-webkit-search-results-button,.PFormSearch input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}");var PFormSearch = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(PFormText, __assign({ className: classNames(className, 'PFormSearch'), ref: ref, type: 'search' }, props));
});
PFormSearch.displayName = 'PFormSearch';insertStyle(".PFormTextarea .MuiInputBase-root .MuiInputBase-input{overflow-y:scroll}.PFormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar{width:8px}.PFormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1882352941);background-clip:padding-box;border-left:4px rgba(0,0,0,0) solid}");var PFormTextarea = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.clear, clear = _b === void 0 ? false : _b, _c = _a.rows, rows = _c === void 0 ? 3 : _c, _d = _a.value, value = _d === void 0 ? '' : _d, props = __rest(_a, ["className", "clear", "rows", "value"]);
    return (React.createElement(PFormTextField, __assign({ ref: ref, className: classNames(className, 'PFormTextarea'), clear: clear, rows: rows, value: value }, props, { multiline: true })));
});
PFormTextarea.displayName = 'PFormTextarea';var PFormUrl = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, _b = _a.validPattern, validPattern = _b === void 0 ? /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim : _b, onValue = _a.onValue, props = __rest(_a, ["className", "validPattern", "onValue"]);
    var handleValue = useCallback(function (value) {
        var newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, __assign({ ref: ref, className: classNames(className, 'PFormUrl'), type: 'url', validPattern: validPattern, onValue: handleValue }, props)));
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
    if (['date', 'date_time', 'time'].includes(type)) {
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
    fComponent.displayName = void 0 ;
    return component;
}
function AutoTypeForwardRef(render) {
    return React.forwardRef(render);
}insertStyle(".PFormSelect.is-selected-placeholder .MuiSelect-select{opacity:.38}.PFormSelect .MuiInputBase-root.MuiInputBase-adornedEnd{padding-right:25px}.PFormSelect .MuiSelect-select.MuiSelect-multiple .selected-list:not(:empty){margin-top:-3px;margin-bottom:-3px}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar{width:12px}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1882352941);background-clip:padding-box;border-left:4px rgba(0,0,0,0) solid;border-right:4px rgba(0,0,0,0) solid}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-button:start:decrement,.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-button:end:increment{display:block;height:4px;background-color:rgba(0,0,0,0)}");var PFormSelect = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var className = _a.className, name = _a.name, initItems = _a.items, initFullWidth = _a.fullWidth, onLoadItems = _a.onLoadItems, readOnly = _a.readOnly, multiple = _a.multiple, checkbox = _a.checkbox, placeholder = _a.placeholder, initStartAdornment = _a.startAdornment, initValue = _a.value, initSlotProps = _a.slotProps, 
    // InputLabelProps: initInputLabelProps,
    // SelectProps: initSelectProps,
    _b = _a.formValueSeparator, 
    // InputLabelProps: initInputLabelProps,
    // SelectProps: initSelectProps,
    formValueSeparator = _b === void 0 ? ',' : _b, formValueSort = _a.formValueSort, width = _a.width, _c = _a.minWidth, minWidth = _c === void 0 ? 120 : _c, initLoading = _a.loading, onChange = _a.onChange, onValue = _a.onValue, props = __rest(_a, ["className", "name", "items", "fullWidth", "onLoadItems", "readOnly", "multiple", "checkbox", "placeholder", "startAdornment", "value", "slotProps", "formValueSeparator", "formValueSort", "width", "minWidth", "loading", "onChange", "onValue"]);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _d = useFormState(), formFullWidth = _d.fullWidth, onAddValueItem = _d.onAddValueItem, onValueChange = _d.onValueChange, otherFormState = __rest(_d, ["fullWidth", "onAddValueItem", "onValueChange"]);
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var emptyValue = useState([])[0];
    var _e = useState({}), itemValueLabels = _e[0], setItemValueLabels = _e[1];
    var _f = useState(false), hasEmptyValue = _f[0], setHasEmptyValue = _f[1];
    var _g = useState(false), isOnGetItemLoading = _g[0], setIsOnGetItemLoading = _g[1];
    var _h = useState(initLoading), loading = _h[0], setLoading = _h[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var startAdornment = useMemo(function () {
        if (isOnGetItemLoading || loading) {
            return (React.createElement(React.Fragment, null,
                initStartAdornment,
                (isOnGetItemLoading || loading) && (React.createElement(CircularProgress, { size: 16, color: 'inherit', style: { verticalAlign: 'middle', marginLeft: initStartAdornment ? 8 : 0 } }))));
        }
        else {
            return initStartAdornment;
        }
    }, [initStartAdornment, isOnGetItemLoading, loading]);
    /********************************************************************************************************************
     * State - items
     * ******************************************************************************************************************/
    var _j = useAutoUpdateState(initItems), items = _j[0], setItems = _j[1];
    useEffect(function () {
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
    var itemsValues = useMemo(function () {
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
     * Function - getFinalValue
     * ******************************************************************************************************************/
    var getFinalValue = useCallback(function (newValue) {
        var finalValue = newValue == null ? '' : newValue;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (empty(finalValue)) {
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
                finalValue = empty(finalValue) ? '' : finalValue[0];
            }
            else {
                if (empty(finalValue)) {
                    finalValue = '';
                }
            }
        }
        if (notEmpty(itemsValues)) {
            if (finalValue != null && notEmpty(finalValue)) {
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
        return equal(newValue, finalValue) ? newValue : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    var _k = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _k[0], value = _k[1], _setValue = _k[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, name, onChange, onValueChange]);
    useFirstSkipEffect(function () {
        updateValue(valueRef.current);
    }, [multiple]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
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
     * Variable
     * ******************************************************************************************************************/
    var isSelectedPlaceholder = notEmpty(items) && empty(value) && !!placeholder && !hasEmptyValue;
    /********************************************************************************************************************
     * Function - getExtraCommands
     * ******************************************************************************************************************/
    var getBaseCommands = useCallback(function () {
        return {
            getReset: function () { return getFinalValue(initValue); },
            reset: function () { return updateValue(initValue); },
            getValue: function () { return valueRef.current; },
            setValue: function (value) { return updateValue(value); },
        };
    }, [getFinalValue, initValue, updateValue, valueRef]);
    var getExtraCommands = useCallback(function () {
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
            reloadItems: function () {
                if (onLoadItems) {
                    setIsOnGetItemLoading(true);
                    onLoadItems().then(function (items) {
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
    var handleRef = useCallback(function (commands) {
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
    var handleAddValueItem = useCallback(function (id, commands) {
        onAddValueItem(id, __assign(__assign(__assign({}, commands), getBaseCommands()), getExtraCommands()));
    }, [onAddValueItem, getBaseCommands, getExtraCommands]);
    var handleChange = function (newValue) {
        updateValue(newValue);
    };
    var handleValue = useCallback(function (value) {
        return getFinalValue(value);
    }, [getFinalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var selectProps = useMemo(function () {
        var _a;
        var finalSelectProps = {
            displayEmpty: true,
            multiple: !!multiple,
            value: value,
        };
        if (multiple) {
            finalSelectProps.renderValue = function (selected) {
                if (isSelectedPlaceholder) {
                    return placeholder;
                }
                else {
                    return (React.createElement(Box, { className: 'selected-list', sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }, Array.isArray(selected) &&
                        selected.map(function (selectedValue) {
                            if (isSelectedPlaceholder) {
                                return React.createElement(Chip, { key: selectedValue || '$$$EmptyValuePlaceholder$$$', label: 'hahaha', size: 'small' });
                            }
                            else {
                                return React.createElement(Chip, { key: selectedValue, label: itemValueLabels["".concat(selectedValue)], size: 'small' });
                            }
                        })));
                }
            };
        }
        finalSelectProps.style = __assign(__assign({}, finalSelectProps.style), { minWidth: width || minWidth });
        finalSelectProps.MenuProps = __assign(__assign({}, finalSelectProps.MenuProps), { className: classNames((_a = finalSelectProps.MenuProps) === null || _a === void 0 ? void 0 : _a.className, 'PFormSelect-Menu-Popover') });
        return finalSelectProps;
    }, [isSelectedPlaceholder, itemValueLabels, minWidth, multiple, placeholder, value, width]);
    var finalValue = useMemo(function () {
        var newFinalValue;
        if (notEmpty(items)) {
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
            newFinalValue = ifUndefined(newFinalValue, '');
        }
        return newFinalValue;
    }, [emptyValue, items, multiple, selectProps, value]);
    var slotProps = useMemo(function () {
        var inputLabelAdditionalProps = {};
        if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
            inputLabelAdditionalProps.shrink = true;
        }
        return {
            inputLabel: __assign(__assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel), inputLabelAdditionalProps),
            select: __assign(__assign({}, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.select), selectProps),
        };
    }, [hasEmptyValue, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.inputLabel, initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.select, placeholder, selectProps]);
    return (React.createElement(PFormContextProvider, { value: __assign(__assign({}, otherFormState), { fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, onValueChange: function () { } }) },
        React.createElement(PFormTextField, __assign({ select: true, ref: handleRef, name: name, className: classNames(className, 'PFormSelect', isSelectedPlaceholder && 'is-selected-placeholder'), fullWidth: fullWidth }, props, { startAdornment: startAdornment, value: finalValue, clear: false, readOnly: readOnly || empty(items), slotProps: slotProps, onChange: handleChange, onValue: handleValue }),
            isSelectedPlaceholder && (React.createElement(MenuItem, { key: '$$$EmptyValuePlaceholder$$$', value: '', disabled: true, sx: { display: 'none' } }, placeholder)),
            items && notEmpty(items) ? (items.map(function (_a) {
                var itemLabel = _a.label, itemValue = _a.value, disabled = _a.disabled;
                return (React.createElement(MenuItem, { key: empty(itemValue) ? '$$$EmptyValue$$$' : "".concat(itemValue), value: typeof itemValue === 'boolean' ? "".concat(itemValue) : itemValue, disabled: disabled },
                    multiple && checkbox && Array.isArray(value) && React.createElement(Checkbox, { checked: value.includes(itemValue) }),
                    itemLabel));
            })) : (React.createElement(MenuItem, { value: '' })))));
}));
PFormSelect.displayName = 'PFormSelect';var PFormBusinessNo = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, _b = _a.validPattern, validPattern = _b === void 0 ? /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/ : _b, onValue = _a.onValue, props = __rest(_a, ["className", "validPattern", "onValue"]);
    var handleValue = useCallback(function (value) {
        var newValue = formatBusinessNo(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormText, __assign({ ref: ref, className: classNames(className, 'PFormBusinessNo'), maxLength: 12, validPattern: validPattern, onValue: handleValue }, props)));
});
PFormBusinessNo.displayName = 'PFormBusinessNo';var PFormPersonalNo = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var className = _a.className, skipPersonalNumberValidateCheck = _a.skipPersonalNumberValidateCheck, _b = _a.validPattern, validPattern = _b === void 0 ? /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/ : _b, onValue = _a.onValue, onValidate = _a.onValidate, props = __rest(_a, ["className", "skipPersonalNumberValidateCheck", "validPattern", "onValue", "onValidate"]);
    var handleValue = useCallback(function (value) {
        var newValue = formatPersonalNo(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    var handleValidate = useCallback(function (value) {
        if (notEmpty(value) && !skipPersonalNumberValidateCheck) {
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
    return (React.createElement(PFormText, __assign({ ref: ref, className: classNames(className, 'FormPersonalNo'), maxLength: 14, validPattern: validPattern, onValue: handleValue, onValidate: handleValidate }, props)));
});
PFormPersonalNo.displayName = 'FormPersonalNo';insertStyle(".PFormItemBase .PFormItemBase-InputLabel{overflow:visible;padding-left:5px}.PFormItemBase .PFormItemBase-InputLabel.MuiInputLabel-sizeSmall{transform:translate(0, -1.5px) scale(0.7)}.PFormItemBase.variant-standard .PFormItemBase-Control-wrap{margin-top:16px}");var PFormItemBase = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    control = _a.control, controlHeight = _a.controlHeight, controlSingleHeight = _a.controlSingleHeight, controlVerticalCenter = _a.controlVerticalCenter, controlContainerStyle = _a.controlContainerStyle, required = _a.required, labelIcon = _a.labelIcon, label = _a.label, focused = _a.focused, helperText = _a.helperText, helperTextProps = _a.helperTextProps, error = _a.error, hideLabel = _a.hideLabel, hidden = _a.hidden, autoSize = _a.autoSize, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFullWidth = _b.fullWidth, formColWithLabel = _b.formColWithLabel, formColWithHelperText = _b.formColWithHelperText;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - inputHeight
     * ******************************************************************************************************************/
    var _c = useResizeDetector({ handleWidth: false }), inputRef = _c.ref, resizedInputHeight = _c.height;
    var inputHeight = ifUndefined(resizedInputHeight, 0);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var controlMarginTop = useMemo(function () {
        var topMargin = 0;
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
    var wrapStyle = {
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
        React.createElement(FormControl, { ref: ref, variant: 'standard', className: classNames(className, 'PFormItemBase', !!label && 'with-label', "variant-".concat(variant), controlVerticalCenter && 'control-vertical-center', !!error && 'error'), style: style, color: color, error: error, focused: focused, sx: sx },
            !formColWithLabel && label && (React.createElement(InputLabel, { shrink: true, className: 'PFormItemBase-InputLabel', size: size, required: required }, labelIcon ? (React.createElement(React.Fragment, null,
                React.createElement(PIcon, { style: { verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 } }, labelIcon),
                React.createElement("span", { style: { verticalAlign: 'middle' } }, label))) : (label))),
            React.createElement("div", { className: 'PFormItemBase-Control-wrap', style: __assign({ display: 'grid', marginTop: hideLabel ? 0 : undefined }, controlContainerStyle) }, autoSize ? (React.createElement(React.Fragment, null,
                variant === 'standard' && (React.createElement(Input, { ref: function (ref) {
                        inputRef.current = ref;
                    }, size: size, fullWidth: false, disabled: true, style: { visibility: 'hidden', width: 0 } })),
                variant === 'outlined' && (React.createElement(OutlinedInput, { ref: function (ref) {
                        inputRef.current = ref;
                    }, size: size, fullWidth: false, disabled: true, style: { visibility: 'hidden', width: 0 } })),
                variant === 'filled' && (React.createElement(FilledInput, { ref: function (ref) {
                        inputRef.current = ref;
                    }, size: size, fullWidth: false, disabled: true, style: { visibility: 'hidden', width: 0 } })),
                React.createElement("div", { className: 'PFormItemBase-Control', style: {
                        width: fullWidth ? '100%' : 'auto',
                        display: 'grid',
                        marginTop: -inputHeight,
                        height: ifUndefined(controlHeight, inputHeight) > inputHeight ? controlHeight : undefined,
                        alignItems: 'flex-start',
                        paddingTop: controlMarginTop,
                        position: 'relative',
                    } }, control))) : (React.createElement("div", { style: {
                    width: fullWidth ? '100%' : 'auto',
                    display: 'grid',
                    marginTop: controlMarginTop,
                } }, control))),
            !formColWithHelperText && helperText && (React.createElement(FormHelperText, __assign({ component: 'div' }, helperTextProps), helperText)))));
});
PFormItemBase.displayName = 'PFormItemBase';var PFormCheckbox = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, _b = _a.checked, initChecked = _b === void 0 ? false : _b, initInputRef = _a.inputRef, initAction = _a.action, readOnly = _a.readOnly, initDisabled = _a.disabled, initHidden = _a.hidden, text = _a.text, initError = _a.error, helperText = _a.helperText, _c = _a.value, initValue = _c === void 0 ? 1 : _c, initData = _a.data, _d = _a.uncheckedValue, initUncheckedValue = _d === void 0 ? 0 : _d, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "name", "labelIcon", "label", "checked", "inputRef", "action", "readOnly", "disabled", "hidden", "text", "error", "helperText", "value", "data", "uncheckedValue", "exceptValue", "onChange", "onValidate", "className", "style", "sx"]);
    var id = useId();
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var theme = useTheme();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _e = useFormState(), formVariant = _e.variant, formSize = _e.size, formColor = _e.color, formFocused = _e.focused, formFullWidth = _e.fullWidth, formDisabled = _e.disabled, onAddValueItem = _e.onAddValueItem, onRemoveValueItem = _e.onRemoveValueItem, onValueChange = _e.onValueChange, onValueChangeByUser = _e.onValueChangeByUser, onRequestSearchSubmit = _e.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var inputRef = useRef(null);
    var actionRef = useRef(null);
    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/
    var _f = useResizeDetector(), labelRef = _f.ref, width = _f.width, height = _f.height;
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _g = useAutoUpdateState(initError), error = _g[0], setError = _g[1];
    var _h = useState(), errorHelperText = _h[0], setErrorHelperText = _h[1];
    var _j = useAutoUpdateRefState(initData), dataRef = _j[0], setData = _j[2];
    var _k = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _k[0], disabled = _k[1], setDisabled = _k[2];
    var _l = useAutoUpdateRefState(initHidden), hiddenRef = _l[0], hidden = _l[1], setHidden = _l[2];
    var _m = useAutoUpdateRefState(initUncheckedValue, useCallback(function (newUncheckedValue) { return (newUncheckedValue == null ? 0 : newUncheckedValue); }, [])), uncheckedValueRef = _m[0], setUncheckedValue = _m[2];
    var _o = useAutoUpdateRefState(initValue, useCallback(function (newValue) { return (newValue == null ? 0 : newValue); }, [])), valueRef = _o[0], setValue = _o[2];
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (checked) {
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
    var _p = useAutoUpdateRefState(initChecked, useCallback(function (newChecked) { return !!newChecked; }, [])), checkedRef = _p[0], checked = _p[1], _setChecked = _p[2];
    var updateChecked = useCallback(function (newChecked, notFireOnChange) {
        if (notFireOnChange === void 0) { notFireOnChange = false; }
        var finalChecked = _setChecked(newChecked);
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
    var focus = useCallback(function () {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormCheckbox'; },
        getName: function () { return name; },
        getReset: function () { return initChecked; },
        reset: function () { return updateChecked(initChecked); },
        getValue: function () { return valueRef.current; },
        setValue: setValue,
        getData: function () { return dataRef.current; },
        setData: setData,
        getUncheckedValue: function () { return uncheckedValueRef.current; },
        setUncheckedValue: setUncheckedValue,
        getChecked: function () { return checkedRef.current; },
        setChecked: updateChecked,
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
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (e, checked) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            updateChecked(checked);
            setTimeout(function () {
                onValueChangeByUser(name, checked);
                onRequestSearchSubmit(name, checked);
            });
        }
    }, [readOnly, updateChecked, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormCheckbox'), labelIcon: labelIcon, label: label, error: error, fullWidth: fullWidth, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: __assign({ width: fullWidth ? '100%' : width || 100, paddingLeft: 3 }, initStyle), sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React.createElement(FormControlLabel, { ref: function (ref) {
                labelRef.current = ref;
            }, control: React.createElement(Checkbox, __assign({ name: name, color: color, size: size, slotProps: { input: { ref: initInputRef ? initInputRef : inputRef } }, action: initAction ? initAction : actionRef, checked: checked, checkedIcon: React.createElement(CheckBox, { color: error ? 'error' : undefined }), icon: React.createElement(CheckBoxOutlineBlank, { color: error ? 'error' : undefined }), onChange: handleChange, disabled: disabled || readOnly }, props)), label: React.createElement(Typography, { color: error ? 'error' : readOnly || disabled ? theme.palette.text.disabled : undefined, whiteSpace: 'nowrap' }, text) }) }));
});
PFormCheckbox.displayName = 'PFormCheckbox';var PADDING_LEFT = 3;
var PFormRadioGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, initWidth = _a.width, labelIcon = _a.labelIcon, label = _a.label, _b = _a.inline, inline = _b === void 0 ? true : _b, initLoading = _a.loading, nowrap = _a.nowrap, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, onLoadItems = _a.onLoadItems, onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "hidden", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "data", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"]);
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _c = useFormState(), formVariant = _c.variant, formSize = _c.size, formColor = _c.color, formFocused = _c.focused, formFullWidth = _c.fullWidth, formDisabled = _c.disabled, onAddValueItem = _c.onAddValueItem, onRemoveValueItem = _c.onRemoveValueItem, onValueChange = _c.onValueChange, onValueChangeByUser = _c.onValueChangeByUser, onRequestSearchSubmit = _c.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _d = useAutoUpdateState(initFullWidth == null ? formFullWidth : initFullWidth), fullWidth = _d[0], setFullWidth = _d[1];
    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/
    var theme = useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var baseRef = useRef(null);
    var firstInputRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _e = useAutoUpdateState(initError), error = _e[0], setError = _e[1];
    var _f = useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = useState(false), isOnGetItemLoading = _g[0], setIsOnGetItemLoading = _g[1];
    var _h = useAutoUpdateState(initWidth || '100%'), width = _h[0], setWidth = _h[1];
    var _j = useState(), formColWrapRect = _j[0], setFormColWrapRect = _j[1];
    var _k = useAutoUpdateRefState(initData), dataRef = _k[0], setData = _k[2];
    var _l = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _l[0], disabled = _l[1], setDisabled = _l[2];
    var _m = useAutoUpdateRefState(initHidden), hiddenRef = _m[0], hidden = _m[1], setHidden = _m[2];
    var _o = useAutoUpdateRefState(initLoading), loadingRef = _o[0], loading = _o[1], setLoading = _o[2];
    var _p = useAutoUpdateRefState(initItems), itemsRef = _p[0], items = _p[1], setItems = _p[2];
    /********************************************************************************************************************
     * State - radioGroupNoWrapRect (ResizeDetector)
     * ******************************************************************************************************************/
    var _q = useState(), radioGroupNoWrapRect = _q[0], setRadioGroupNoWrapRect = _q[1];
    var resizeWidthDetectorRef = useResizeDetector({
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
    var _r = useResizeDetector(), height = _r.height, resizeHeightDetectorRef = _r.ref;
    var _s = useResizeDetector(), realHeight = _s.height, resizeRealHeightDetectorRef = _s.ref;
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
    var getFinalValue = useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    var _t = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _t[0], value = _t[1], _setValue = _t[2];
    var updateValue = useCallback(function (newValue, skipCallback) {
        if (skipCallback === void 0) { skipCallback = false; }
        var finalValue = _setValue(newValue, skipCallback);
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
    useEffect(function () {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
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
    useEffect(function () {
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
    var focus = useCallback(function () {
        var _a;
        (_a = firstInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormRadioGroup'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
        reloadItems: function () {
            if (onLoadItems) {
                setIsOnGetItemLoading(true);
                onLoadItems().then(function (items) {
                    setItems(items);
                    setIsOnGetItemLoading(false);
                });
            }
        },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (e) {
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
                updateValue(finalValue_1, true);
                setTimeout(function () {
                    onValueChangeByUser(name, finalValue_1);
                    onRequestSearchSubmit(name, finalValue_1);
                });
            }
        }
    }, [readOnly, items, getFinalValue, value, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var control = useMemo(function () {
        return (React.createElement(React.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React.createElement("div", { ref: function (ref) {
                    resizeWidthDetectorRef.current = ref;
                }, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React.createElement(RadioGroup, __assign({}, props, { style: { display: 'inline-flex', flexWrap: 'nowrap' }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), items.map(function (_a, idx) {
                    var value = _a.value, label = _a.label, itemDisabled = _a.disabled;
                    return (React.createElement(FormControlLabel, { ref: idx === 0
                            ? function (ref) {
                                resizeHeightDetectorRef.current = ref;
                            }
                            : null, key: idx, control: React.createElement(Radio, { icon: React.createElement(RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React.createElement(RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size }), label: label, style: {
                            color: error ? theme.palette.error.main : '',
                            marginTop: -5,
                            marginBottom: -5,
                            whiteSpace: 'nowrap',
                        }, value: value, disabled: disabled || readOnly || itemDisabled }));
                })))),
            React.createElement("div", null,
                React.createElement(RadioGroup, __assign({}, props, { ref: function (ref) {
                        resizeRealHeightDetectorRef.current = ref;
                    }, style: {
                        display: 'inline-flex',
                        visibility: width == null ? 'hidden' : undefined,
                        position: width == null ? 'absolute' : undefined,
                        flexWrap: nowrap ? 'nowrap' : undefined,
                    }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), isOnGetItemLoading || loading ? (React.createElement("div", { style: { position: 'relative' } },
                    React.createElement(FormControlLabel, { label: '', control: React.createElement(Radio, { color: color, size: size }), style: { visibility: 'hidden' } }),
                    React.createElement("div", { style: { position: 'absolute', left: 0, top: 11, opacity: 0.54 } },
                        React.createElement(CircularProgress, { size: size === 'small' ? 12 : 16, color: 'inherit' })))) : (React.createElement(React.Fragment, null, items &&
                    items.map(function (_a, idx) {
                        var value = _a.value, label = _a.label, itemDisabled = _a.disabled;
                        return (React.createElement(FormControlLabel, { key: idx, control: React.createElement(Radio, { icon: React.createElement(RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React.createElement(RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size, slotProps: idx === 0 ? { input: { ref: firstInputRef } } : undefined }), label: label, style: {
                                color: error ? theme.palette.error.main : '',
                                whiteSpace: 'nowrap',
                                marginTop: -5,
                                marginBottom: -5,
                            }, value: value, disabled: disabled || readOnly || itemDisabled }));
                    })))))));
    }, [
        color,
        disabled,
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
        theme.palette.error.main,
        value,
        width,
    ]);
    var singleHeight = height || (size === 'small' ? 35 : 39);
    var isMultiline = singleHeight <= ifUndefined(realHeight, 0);
    return (React.createElement(PFormItemBase, { focused: focused, ref: baseRef, className: classNames(className, 'PFormValueItem', 'PFormRadioGroup'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, fullWidth: fullWidth, required: required, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2, marginTop: isMultiline && notEmpty(label) ? 20 : 0 } }, style: __assign({ width: width, paddingLeft: PADDING_LEFT }, initStyle), sx: sx, hidden: hidden, autoSize: true, controlHeight: realHeight ? realHeight : singleHeight, controlContainerStyle: {
            paddingTop: isMultiline && size === 'medium' ? 4 : undefined,
        }, controlVerticalCenter: !isMultiline, control: control }));
}));
PFormRadioGroup.displayName = 'PFormRadioGroup';insertStyle(".PFormToggleButtonGroup.loading .PFormItemBase-Control-wrap .PFormItemBase-Control{align-items:center !important}.PFormToggleButtonGroup .ToggleButton{display:inline-flex;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-items:center}.PFormToggleButtonGroup .ToggleButton .__label__{height:0;line-height:0 !important;overflow:visible !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton,.PFormToggleButtonGroup.type-radio .ToggleButton{padding-left:3px;padding-right:5px;border:0 !important;margin-left:0 !important;justify-content:flex-start;display:flex;background-color:rgba(0,0,0,0) !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton:not(:last-child),.PFormToggleButtonGroup.type-radio .ToggleButton:not(:last-child){margin-right:5px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-unchecked__{margin-right:3px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__{display:none}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-checked__{display:block}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-unchecked__{display:none}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}");var PFormToggleButtonGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, _b = _a.type, type = _b === void 0 ? 'button' : _b, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, notAllowEmptyValue = _a.notAllowEmptyValue, exceptValue = _a.exceptValue, initWidth = _a.width, multiple = _a.multiple, _c = _a.formValueSeparator, formValueSeparator = _c === void 0 ? ',' : _c, formValueSort = _a.formValueSort, initHidden = _a.hidden, itemWidth = _a.itemWidth, onLoadItems = _a.onLoadItems, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var id = useId();
    var labelId = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _d = useFormState(), formVariant = _d.variant, formSize = _d.size, formColor = _d.color, formFocused = _d.focused, formFullWidth = _d.fullWidth, formDisabled = _d.disabled, formColWidth = _d.formColWidth, onAddValueItem = _d.onAddValueItem, onRemoveValueItem = _d.onRemoveValueItem, onValueChange = _d.onValueChange, onValueChangeByUser = _d.onValueChangeByUser, onRequestSearchSubmit = _d.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Variables - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var fullWidth = type === 'checkbox' || type === 'radio' ? true : ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _e = useAutoUpdateState(ifUndefined(initFocused, formFocused)), focused = _e[0], setFocused = _e[1];
    /********************************************************************************************************************
     * Theme
     * ******************************************************************************************************************/
    var theme = useTheme();
    /********************************************************************************************************************
     * State - width (ResizeDetector)
     * ******************************************************************************************************************/
    var _f = useResizeDetector({ handleHeight: false }), refForResizeWidthDetect = _f.ref, width = _f.width;
    /********************************************************************************************************************
     * State - height (ResizeDetector)
     * ******************************************************************************************************************/
    var _g = useResizeDetector({ handleWidth: false }), refForButtonResizeHeightDetect = _g.ref, buttonHeight = _g.height;
    var _h = useResizeDetector({ handleWidth: false }), refForButtonsResizeHeightDetect = _h.ref, realHeight = _h.height;
    var _j = useResizeDetector({ handleWidth: false }), refForLoadingResizeHeightDetect = _j.ref, loadingHeight = _j.height;
    var height = ifUndefined(buttonHeight, loadingHeight);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _k = useState(false), isOnGetItemLoading = _k[0], setIsOnGetItemLoading = _k[1];
    var _l = useAutoUpdateState(initError), error = _l[0], setError = _l[1];
    var _m = useState(), errorHelperText = _m[0], setErrorHelperText = _m[1];
    var _o = useAutoUpdateRefState(initData), dataRef = _o[0], setData = _o[2];
    var _p = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _p[0], disabled = _p[1], setDisabled = _p[2];
    var _q = useAutoUpdateRefState(initHidden), hiddenRef = _q[0], hidden = _q[1], setHidden = _q[2];
    var _r = useAutoUpdateRefState(initLoading), loadingRef = _r[0], loading = _r[1], setLoading = _r[2];
    var _s = useAutoUpdateRefState(initItems), itemsRef = _s[0], items = _s[1], setItems = _s[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var itemsValues = useMemo(function () {
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
    var style = useMemo(function () {
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
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
    var getFinalValue = useCallback(function (value) {
        var finalValue = value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (finalValue != null && notEmpty(finalValue)) {
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
                if (notEmpty(finalValue)) {
                    finalValue = finalValue[0];
                }
                else {
                    finalValue = undefined;
                }
            }
        }
        if (notEmpty(itemsValues)) {
            if (finalValue != null && notEmpty(finalValue)) {
                if (multiple) {
                    if (Array.isArray(finalValue)) {
                        finalValue = finalValue.map(function (v) {
                            var realValue = itemsValues["".concat(v)];
                            return realValue != null ? realValue : v;
                        });
                    }
                }
                else {
                    var realValue_1 = itemsValues["".concat(finalValue)];
                    if (realValue_1 != null && finalValue !== realValue_1) {
                        finalValue = realValue_1;
                    }
                }
            }
        }
        finalValue = onValue ? onValue(finalValue) : finalValue;
        return equal(value, finalValue) ? value : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    var _t = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _t[0], value = _t[1], _setValue = _t[2];
    var updateValue = useCallback(function (newValue, skipCallback) {
        if (skipCallback === void 0) { skipCallback = false; }
        var finalValue = _setValue(newValue, skipCallback);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    useFirstSkipEffect(function () {
        updateValue(valueRef.current);
    }, [multiple]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if (notAllowEmptyValue) {
            if (items && notEmpty(items)) {
                var setFirstItem = false;
                if (Array.isArray(value)) {
                    if (empty(value)) {
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
    var focus = useCallback(function () {
        var _a;
        (_a = refForButtonResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [refForButtonResizeHeightDetect]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormToggleButtonGroup'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
        reloadItems: function () {
            if (onLoadItems) {
                setIsOnGetItemLoading(true);
                onLoadItems().then(function (items) {
                    setItems(items);
                    setIsOnGetItemLoading(false);
                });
            }
        },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (e, newValue) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = newValue;
            if (notAllowEmptyValue) {
                if (multiple) {
                    if (empty(finalValue_1)) {
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
            if (!equal(valueRef.current, finalValue_1)) {
                updateValue(finalValue_1, true);
                setTimeout(function () {
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
        updateValue,
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
    var buttons = useMemo(function () {
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
                return (React.createElement(ToggleButton, { ref: function (ref) {
                        if (idx === 0) {
                            refForButtonResizeHeightDetect.current = ref;
                        }
                    }, key: idx, size: size, className: 'ToggleButton', value: value, color: itemColor || color, disabled: disabled || readOnly || itemDisabled, style: buttonStyle, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } },
                    type === 'checkbox' ? (React.createElement(React.Fragment, null,
                        React.createElement(Icon, { className: '__checkbox-unchecked__' }, "check_box_outline_blank"),
                        React.createElement(Icon, { className: '__checkbox-checked__' }, "check_box"))) : (type === 'radio' && (React.createElement(React.Fragment, null,
                        React.createElement(React.Fragment, null,
                            React.createElement(Icon, { className: '__checkbox-unchecked__' }, "radio_button_unchecked"),
                            React.createElement(Icon, { className: '__checkbox-checked__' }, "radio_button_checked"))))),
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
    var realValue = useMemo(function () {
        var newRealValue = value == null ? null : value;
        if (items && value != null) {
            if (Array.isArray(newRealValue)) {
                var stringRealValues_1 = newRealValue.map(function (v) { return v.toString(); });
                if (multiple) {
                    var foundItems = items.filter(function (v) { return stringRealValues_1.includes(v.value.toString()); });
                    newRealValue = foundItems.map(function (v) { return v.value; });
                }
            }
            else if (newRealValue != null) {
                var stringRealValue_1 = newRealValue.toString();
                var foundItem = items.find(function (v) { return v.value.toString() === stringRealValue_1; });
                if (foundItem) {
                    newRealValue = foundItem.value;
                }
            }
        }
        return newRealValue;
    }, [items, multiple, value]);
    var control = useMemo(function () {
        return isOnGetItemLoading || loading ? (React.createElement("div", { style: { opacity: 0.54 }, ref: function (ref) {
                refForLoadingResizeHeightDetect.current = ref;
            } },
            React.createElement(CircularProgress, { size: 16, color: 'inherit' }))) : (React.createElement(React.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React.createElement("div", { ref: function (ref) {
                    refForResizeWidthDetect.current = ref;
                }, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React.createElement(ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple }, buttons))),
            React.createElement(ToggleButtonGroup, { ref: function (ref) {
                    refForButtonsResizeHeightDetect.current = ref;
                }, className: 'ToggleButtonGroup', exclusive: !multiple, fullWidth: fullWidth, value: realValue, onChange: handleChange, style: {
                    width: !fullWidth && formColWidth && typeof width === 'number' && width > formColWidth
                        ? formColWidth
                        : undefined,
                    flexWrap: type === 'checkbox' || type === 'radio' ? 'wrap' : 'nowrap',
                }, "aria-labelledby": notEmpty(label) ? labelId : undefined }, isOnGetItemLoading || loading || !items || empty(items) ? (React.createElement(ToggleButton, { ref: function (ref) {
                    refForButtonResizeHeightDetect.current = ref;
                }, size: size, className: 'ToggleButton', disabled: disabled || readOnly, value: '', style: { visibility: 'hidden' } })) : (buttons))));
    }, [
        buttons,
        disabled,
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
        type,
        width,
    ]);
    var controlHeight = height || 0;
    var isMultiline = controlHeight <= ifUndefined(realHeight, 0);
    return (React.createElement(PFormItemBase, __assign({}, formControlBaseProps, { className: classNames(className, 'PFormValueItem', 'PFormToggleButtonGroup', "variant-".concat(variant), "size-".concat(size), !!label && 'with-label', !!fullWidth && 'full-width', "type-".concat(type), (isOnGetItemLoading || loading) && 'loading'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, required: required, fullWidth: fullWidth, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: realHeight ? realHeight + (isMultiline ? 13 : 0) : controlHeight, controlVerticalCenter: isMultiline ? false : isOnGetItemLoading || loading, control: control })));
}));
PFormToggleButtonGroup.displayName = 'PFormToggleButtonGroup';var PFormRating = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    _b = _a.precision, 
    //----------------------------------------------------------------------------------------------------------------
    precision = _b === void 0 ? 1 : _b, highlightSelectedOnly = _a.highlightSelectedOnly, icon = _a.icon, emptyIcon = _a.emptyIcon, max = _a.max, initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, _c = _a.value, initValue = _c === void 0 ? 0 : _c, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, onValue = _a.onValue, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _d = useFormState(), formVariant = _d.variant, formSize = _d.size, formColor = _d.color, formFocused = _d.focused, formDisabled = _d.disabled, onAddValueItem = _d.onAddValueItem, onRemoveValueItem = _d.onRemoveValueItem, onValueChange = _d.onValueChange, onValueChangeByUser = _d.onValueChangeByUser, onRequestSearchSubmit = _d.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _e = useAutoUpdateState(initFocused == null ? formFocused : initFocused), focused = _e[0], setFocused = _e[1];
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var inputRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _f = useAutoUpdateState(initError), error = _f[0], setError = _f[1];
    var _g = useState(), errorHelperText = _g[0], setErrorHelperText = _g[1];
    var _h = useAutoUpdateRefState(initData), dataRef = _h[0], setData = _h[2];
    var _j = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _j[0], disabled = _j[1], setDisabled = _j[2];
    var _k = useAutoUpdateRefState(initHidden), hiddenRef = _k[0], hidden = _k[1], setHidden = _k[2];
    /********************************************************************************************************************
     * State - width, height
     * ******************************************************************************************************************/
    var _l = useResizeDetector(), ratingRef = _l.ref, width = _l.width, height = _l.height;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = useCallback(function (value) {
        if (required && (empty(value) || value === 0)) {
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
    var getFinalValue = useCallback(function (value) {
        var finalValue = value || 0;
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    var _m = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _m[0], value = _m[1], _setValue = _m[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    useEffect(function () {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var focus = useCallback(function () {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormRating'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (e, value) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = updateValue(value);
            setTimeout(function () {
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [readOnly, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormRating'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, required: required, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: __assign({ width: width || 100 }, initStyle), sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 21 : 26), controlVerticalCenter: true, control: React.createElement(Rating, { ref: function (ref) {
                ratingRef.current = ref;
            }, size: size === 'medium' ? 'large' : 'medium', name: name, precision: precision, highlightSelectedOnly: highlightSelectedOnly, value: value, disabled: disabled || readOnly, max: max, icon: React.createElement(PIcon, { color: color, size: 'inherit' }, icon ? icon : 'Star'), emptyIcon: React.createElement(PIcon, { size: 'inherit' }, emptyIcon ? emptyIcon : 'StarBorder'), onChange: handleChange, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } }) }));
});
PFormRating.displayName = 'PFormRating';var getFinalValue$8 = function (value) {
    return value || '';
};insertStyle(".PFormTextEditor.initializing textarea{display:none}.PFormTextEditor.error .tox-tinymce{border-color:#d32f2f}.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item{padding-right:20px !important}.tox-notifications-container{display:none}");var PFormTextEditor = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    // ---------------------------------------------------------------------------------------------------------------
    apiKey = _a.apiKey, toolbar = _a.toolbar, onOpenWindow = _a.onOpenWindow, onCloseWindow = _a.onCloseWindow, 
    //----------------------------------------------------------------------------------------------------------------
    _b = _a.menubar, 
    //----------------------------------------------------------------------------------------------------------------
    menubar = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? 500 : _c, initHidden = _a.hidden, onImageUpload = _a.onImageUpload, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, _d = _a.value, initValue = _d === void 0 ? '' : _d, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _e = useFormState(), formVariant = _e.variant, formSize = _e.size, formColor = _e.color, formFocused = _e.focused, formDisabled = _e.disabled, onAddValueItem = _e.onAddValueItem, onValueChange = _e.onValueChange, onRemoveValueItem = _e.onRemoveValueItem, onValueChangeByUser = _e.onValueChangeByUser;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _f = useAutoUpdateState(ifUndefined(initFocused, formFocused)), focused = _f[0], setFocused = _f[1];
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var editorRef = useRef(null);
    var keyDownTime = useRef(0);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _g = useAutoUpdateState(initError), error = _g[0], setError = _g[1];
    var _h = useState(), errorHelperText = _h[0], setErrorHelperText = _h[1];
    var _j = useState(false), initialized = _j[0], setInitialized = _j[1];
    var _k = useAutoUpdateRefState(initData), dataRef = _k[0], setData = _k[2];
    var _l = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _l[0], disabled = _l[1], setDisabled = _l[2];
    var _m = useAutoUpdateRefState(initHidden), hiddenRef = _m[0], hidden = _m[1], setHidden = _m[2];
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        var _a;
        if (required && empty((_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.getContent())) {
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
    var _o = useAutoUpdateRefState(initValue, getFinalValue$8), valueRef = _o[0], value = _o[1], _setValue = _o[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var focus = useCallback(function () {
        var _a;
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [editorRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormTextEditor'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue$8(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleEditorChange = useCallback(function (value) {
        updateValue(value);
        if (new Date().getTime() - keyDownTime.current < 300) {
            setTimeout(function () {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, value);
            });
        }
    }, [name, onValueChangeByUser, updateValue]);
    var handleKeyDown = useCallback(function () {
        keyDownTime.current = new Date().getTime();
    }, []);
    var handleImageUpload = useCallback(function (blobInfo, progress) {
        return new Promise(function (resolve, reject) {
            var onImageUploadFunc = onImageUpload !== null && onImageUpload !== void 0 ? onImageUpload : PFormTextEditor.onImageUpload;
            if (onImageUploadFunc) {
                onImageUploadFunc(blobInfo.blob(), function (url) {
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
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormTextEditor', !initialized && 'initializing'), labelIcon: labelIcon, label: label, error: error, required: required, fullWidth: true, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: { width: '100%' }, hidden: hidden, controlHeight: height, control: React.createElement(React.Fragment, null,
            !initialized ? React.createElement(Skeleton, { variant: 'rectangular', width: '100%', height: height }) : null,
            React.createElement(Editor, { apiKey: ifEmpty(apiKey, PFormTextEditor.apiKey), value: value, disabled: readOnly || disabled, init: {
                    height: height,
                    menubar: menubar,
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
                    editor.on('OpenWindow', function () {
                        var _a, _b;
                        onOpenWindow === null || onOpenWindow === void 0 ? void 0 : onOpenWindow();
                        (_b = (_a = PFormTextEditor).onOpenWindow) === null || _b === void 0 ? void 0 : _b.call(_a);
                    });
                    editor.on('CloseWindow', function () {
                        var _a, _b;
                        onCloseWindow === null || onCloseWindow === void 0 ? void 0 : onCloseWindow();
                        (_b = (_a = PFormTextEditor).onCloseWindow) === null || _b === void 0 ? void 0 : _b.call(_a);
                    });
                    setTimeout(function () { return setInitialized(true); }, 10);
                }, onEditorChange: handleEditorChange, onKeyDown: handleKeyDown, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } })) }));
});
PFormTextEditor.displayName = 'PFormTextEditor';
PFormTextEditor.apiKey = '';var PFormAutocomplete = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * type
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, width = _a.width, placeholder = _a.placeholder, multiple = _a.multiple, _b = _a.formValueSeparator, formValueSeparator = _b === void 0 ? ',' : _b, formValueSort = _a.formValueSort, disablePortal = _a.disablePortal, _c = _a.noOptionsText, noOptionsText = _c === void 0 ? '항목이 없습니다' : _c, loadingText = _a.loadingText, limitTags = _a.limitTags, getLimitTagsText = _a.getLimitTagsText, openOnFocus = _a.openOnFocus, disableClearable = _a.disableClearable, async = _a.async, autoFocus = _a.autoFocus, initHidden = _a.hidden, onLoadItems = _a.onLoadItems, onAsyncLoadValueItem = _a.onAsyncLoadValueItem, onRenderItem = _a.onRenderItem, onRenderTag = _a.onRenderTag, onAddItem = _a.onAddItem, getOptionDisabled = _a.getOptionDisabled, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, onFocus = _a.onFocus, onBlur = _a.onBlur, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var id = useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var textFieldRef = useRef(null);
    var asyncTimerRef = useRef(null);
    var oldComponentValueRef = useRef(null);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _d = useFormState(), formVariant = _d.variant, formSize = _d.size, formColor = _d.color, formFocused = _d.focused, formLabelShrink = _d.labelShrink, formFullWidth = _d.fullWidth, formDisabled = _d.disabled, onAddValueItem = _d.onAddValueItem, onRemoveValueItem = _d.onRemoveValueItem, onValueChange = _d.onValueChange, onValueChangeByUser = _d.onValueChangeByUser, onRequestSearchSubmit = _d.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _e = useState(false), isOnGetItemLoading = _e[0], setIsOnGetItemLoading = _e[1];
    var _f = useAutoUpdateState(initError), error = _f[0], setError = _f[1];
    var _g = useState(), errorHelperText = _g[0], setErrorHelperText = _g[1];
    var _h = useState(undefined), inputValue = _h[0], setInputValue = _h[1];
    var _j = useAutoUpdateRefState(initData), dataRef = _j[0], setData = _j[2];
    var _k = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _k[0], disabled = _k[1], setDisabled = _k[2];
    var _l = useAutoUpdateRefState(initHidden), hiddenRef = _l[0], hidden = _l[1], setHidden = _l[2];
    var _m = useAutoUpdateRefState(initLoading), loadingRef = _m[0], loading = _m[1], setLoading = _m[2];
    var _o = useAutoUpdateRefState(initItems), itemsRef = _o[0], items = _o[1], setItems = _o[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var itemsValues = useMemo(function () {
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
    var itemsInfos = useMemo(function () {
        if (items) {
            return items.reduce(function (res, info) {
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
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
    var getFinalValue = useCallback(function (value) {
        var finalValue = value;
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
                if (notEmpty(finalValue)) {
                    finalValue = finalValue[0];
                }
                else {
                    finalValue = undefined;
                }
            }
        }
        if (notEmpty(itemsValues)) {
            if (finalValue != null && notEmpty(finalValue)) {
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
    var _p = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _p[0], value = _p[1], _setValue = _p[2];
    var _q = useState(null), valueItem = _q[0], setValueItem = _q[1];
    var updateValue = useCallback(function (newValue, skipCallback) {
        if (skipCallback === void 0) { skipCallback = false; }
        var finalValue = _setValue(newValue, skipCallback);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        return finalValue;
    }, [_setValue, error, name, onChange, onValueChange, validate]);
    useFirstSkipEffect(function () {
        updateValue(getFinalValue(valueRef.current));
    }, [multiple]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var componentValue = useMemo(function () {
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
        if (finalValue != null) {
            if (items) {
                if (Array.isArray(finalValue)) {
                    finalValue.forEach(function (v) {
                        var key = v.toString();
                        if (itemsInfos[key]) {
                            newComponentValue && newComponentValue.push(itemsInfos[key]);
                        }
                    });
                }
                else {
                    newComponentValue = (items.find(function (info) { return info.value === value; }) ||
                        (multiple ? [] : null));
                }
            }
            if (empty(newComponentValue) && valueItem) {
                if (Array.isArray(finalValue)) {
                    if (Array.isArray(valueItem)) {
                        newComponentValue = valueItem.filter(function (info) { return Array.isArray(finalValue) && finalValue.includes(info.value); });
                    }
                }
                else {
                    if (!Array.isArray(valueItem) && finalValue.toString() === valueItem.value.toString()) {
                        newComponentValue = valueItem;
                    }
                }
            }
        }
        if (oldComponentValueRef.current && newComponentValue && equal(oldComponentValueRef.current, newComponentValue)) {
            return oldComponentValueRef.current;
        }
        else {
            oldComponentValueRef.current = newComponentValue;
            return newComponentValue;
        }
    }, [value, multiple, items, valueItem, itemsInfos]);
    useEffect(function () {
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
    var showOnGetItemLoading = useCallback(function () {
        setIsOnGetItemLoading(true);
    }, []);
    var hideOnGetItemLoading = useCallback(function () {
        setIsOnGetItemLoading(false);
    }, []);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
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
    useEffect(function () {
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
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormAutocomplete'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: function (newValue) { return updateValue(newValue); },
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
        reloadItems: function () {
            if (!async && onLoadItems) {
                showOnGetItemLoading();
                onLoadItems().then(function (items) {
                    setItems(items);
                    hideOnGetItemLoading();
                });
            }
        },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (componentValue, reason, details) {
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
            if (!equal(valueRef.current, finalValue)) {
                updateValue(finalValue, true);
                setValueItem(componentValue);
                setTimeout(function () {
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
    }, [multiple, getFinalValue, valueRef, updateValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]);
    var handleGetOptionDisabled = useCallback(function (option) {
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
    var style = __assign({ minWidth: 120 }, initStyle);
    if (hidden) {
        style.display = 'none';
    }
    if (width != null) {
        style.width = width;
    }
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Autocomplete, { options: items || [], className: classNames(className, 'PFormValueItem', 'PFormAutocomplete'), sx: sx, multiple: multiple, fullWidth: !width && fullWidth, openOnFocus: openOnFocus, disableClearable: disableClearable, disablePortal: disablePortal, noOptionsText: noOptionsText, autoFocus: autoFocus, value: componentValue, style: style, isOptionEqualToValue: function (option, value) { return option.value === value.value; }, getOptionDisabled: handleGetOptionDisabled, disabled: disabled, readOnly: readOnly, loading: loading || isOnGetItemLoading, loadingText: loadingText, limitTags: limitTags, getLimitTagsText: getLimitTagsText, onChange: function (e, value, reason, details) { return handleChange(value, reason, details); }, renderOption: function (props, option) { return (React.createElement("li", __assign({}, props, { key: "".concat(option.value) }), onRenderItem ? onRenderItem(option) : option.label)); }, onInputChange: function (event, newInputValue, reason) {
            if (reason === 'input') {
                setInputValue(newInputValue);
            }
            else if (reason === 'reset') {
                setInputValue(undefined);
            }
        }, renderValue: multiple
            ? function (value, getItemProps) {
                if (Array.isArray(value)) {
                    return value.map(function (option, index) { return (React.createElement(Chip, __assign({ size: 'small', style: variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined, label: onRenderTag ? onRenderTag(option) : option.label }, getItemProps({ index: index })))); });
                }
                else {
                    return (React.createElement(Chip, __assign({ size: 'small', style: variant === 'outlined' && size === 'small' ? { marginTop: 2, marginBottom: 0 } : undefined, label: onRenderTag ? onRenderTag(value) : value.label }, getItemProps({ index: 0 }))));
                }
            }
            : undefined, renderInput: function (params) {
            var _a;
            var slotProps = {
                input: __assign(__assign({}, params.InputProps), { style: {
                        paddingTop: variant === 'outlined' && size === 'small' ? 7 : undefined,
                        paddingBottom: variant === 'outlined' && size === 'small' ? 5 : undefined,
                        marginTop: variant === 'outlined' && size === 'small' ? -1 : undefined,
                    }, endAdornment: (React.createElement(React.Fragment, null,
                        loading || isOnGetItemLoading ? React.createElement(CircularProgress, { color: 'inherit', size: 20 }) : null,
                        params.InputProps.endAdornment)) }),
                htmlInput: __assign(__assign({}, params.inputProps), { style: __assign(__assign({}, (_a = params.inputProps) === null || _a === void 0 ? void 0 : _a.style), (variant === 'outlined' && size === 'small' ? { marginTop: 1 } : undefined)), tabIndex: readOnly || disabled ? -1 : undefined, onFocus: function (e) {
                        var _a, _b;
                        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
                        (_b = params === null || params === void 0 ? void 0 : (_a = params.inputProps).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                    }, onBlur: function (e) {
                        var _a, _b;
                        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                        (_b = params === null || params === void 0 ? void 0 : (_a = params.inputProps).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                    } }),
            };
            return (React.createElement(PFormTextField, __assign({}, params, { ref: textFieldRef, name: name, variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, labelShrink: labelShrink, required: required, focused: focused, error: error, readOnly: readOnly, helperText: error ? errorHelperText : helperText, slotProps: slotProps, placeholder: placeholder, noFormValueItem: true })));
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
	(function (module, exports) {
		!function(e,t){module.exports=t();}(weekOfYear,(function(){var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,true);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)};}})); 
	} (weekOfYear$1));
	return weekOfYear$1.exports;
}var weekOfYearExports = requireWeekOfYear();
var weekOfYearPlugin = /*@__PURE__*/getDefaultExportFromCjs(weekOfYearExports);var customParseFormat$1 = {exports: {}};var customParseFormat = customParseFormat$1.exports;

var hasRequiredCustomParseFormat;

function requireCustomParseFormat () {
	if (hasRequiredCustomParseFormat) return customParseFormat$1.exports;
	hasRequiredCustomParseFormat = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(customParseFormat,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},a=function(e){return (e=+e)+(e>68?1900:2e3)};var f=function(e){return function(t){this[e]=+t;}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],u=function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},c={A:[o,function(e){this.afternoon=d(e,false);}],a:[o,function(e){this.afternoon=d(e,true);}],Q:[n,function(e){this.month=3*(e-1)+1;}],S:[n,function(e){this.milliseconds=100*+e;}],SS:[r,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[i,f("seconds")],ss:[i,f("seconds")],m:[i,f("minutes")],mm:[i,f("minutes")],H:[i,f("hours")],h:[i,f("hours")],HH:[i,f("hours")],hh:[i,f("hours")],D:[i,f("day")],DD:[r,f("day")],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],w:[i,f("week")],ww:[r,f("week")],M:[i,f("month")],MM:[r,f("month")],MMM:[o,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[o,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,f("year")],YY:[r,function(e){this.year=a(e);}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function l(n){var r,i;r=n,i=s&&s.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=o.length,f=0;f<a;f+=1){var h=o[f],u=c[h],d=u&&u[0],l=u&&u[1];o[f]=l?{regex:d,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else {var s=i.regex,f=i.parser,h=e.slice(r),u=s.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=true,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=true===o[2],h=true===o[3],u=f||h,d=o[2];h&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=l(t)(e),o=i.year,s=i.month,a=i.day,f=i.hours,h=i.minutes,u=i.seconds,d=i.milliseconds,c=i.zone,m=i.week,M=new Date,Y=a||(o||s?1:M.getDate()),p=o||M.getFullYear(),v=0;o&&!s||(v=s>0?s-1:M.getMonth());var D,w=f||0,g=h||0,y=u||0,L=d||0;return c?new Date(Date.UTC(p,v,Y,w,g,y,L+60*c.offset*1e3)):n?new Date(Date.UTC(p,v,Y,w,g,y,L)):(D=new Date(p,v,Y,w,g,y,L),m&&(D=r(D).week(m).toDate()),D)}catch(e){return new Date("")}}(t,a,r,n),this.init(),d&&true!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),s={};}else if(a instanceof Array)for(var c=a.length,m=1;m<=c;m+=1){o[1]=a[m-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===c&&(this.$d=new Date(""));}else i.call(this,e);};}})); 
	} (customParseFormat$1));
	return customParseFormat$1.exports;
}var customParseFormatExports = requireCustomParseFormat();
var customParseFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);var localizedFormat$1 = {exports: {}};var localizedFormat = localizedFormat$1.exports;

var hasRequiredLocalizedFormat;

function requireLocalizedFormat () {
	if (hasRequiredLocalizedFormat) return localizedFormat$1.exports;
	hasRequiredLocalizedFormat = 1;
	(function (module, exports) {
		!function(e,t){module.exports=t();}(localizedFormat,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,o,n){var r=o.prototype,i=r.format;n.en.formats=e,r.format=function(t){ void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var o=this.$locale().formats,n=function(t,o){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,o){return t||o.slice(1)}))}))}(t,void 0===o?{}:o);return i.call(this,n)};}})); 
	} (localizedFormat$1));
	return localizedFormat$1.exports;
}var localizedFormatExports = requireLocalizedFormat();
var localizedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(localizedFormatExports);var isBetween$1 = {exports: {}};var isBetween = isBetween$1.exports;

var hasRequiredIsBetween;

function requireIsBetween () {
	if (hasRequiredIsBetween) return isBetween$1.exports;
	hasRequiredIsBetween = 1;
	(function (module, exports) {
		!function(e,i){module.exports=i();}(isBetween,(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}})); 
	} (isBetween$1));
	return isBetween$1.exports;
}var isBetweenExports = requireIsBetween();
var isBetweenPlugin = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);var advancedFormat$1 = {exports: {}};var advancedFormat = advancedFormat$1.exports;

var hasRequiredAdvancedFormat;

function requireAdvancedFormat () {
	if (hasRequiredAdvancedFormat) return advancedFormat$1.exports;
	hasRequiredAdvancedFormat = 1;
	(function (module, exports) {
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
}insertStyle(".PrivateYearSelect{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.PrivateYearSelect button{font-size:14px;font-weight:400;border-radius:18px}");var PrivateToggleButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, selected = _a.selected, activated = _a.activated, outlined = _a.outlined, props = __rest(_a, ["children", "className", "selected", "activated", "outlined"]);
    var theme = useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var sx = useMemo(function () {
        var newSx = {
            color: 'inherit',
            ':hover': {
                backgroundColor: darken('#fff', 0.1),
            },
        };
        if (selected) {
            newSx.backgroundColor = theme.palette.primary.main;
            newSx.color = theme.palette.primary.contrastText;
            newSx[':hover'] = { backgroundColor: darken(theme.palette.primary.main, 0.2) };
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
    return (React.createElement(Button, __assign({}, props, { ref: ref, sx: sx, variant: 'text', className: classNames(className, selected && 'selected', activated && 'activated', outlined && 'outlined', selected && 'selected') }), children));
});var YEARS$1 = new Array(200).fill(0);
for (var i$6 = 0; i$6 < 200; i$6 += 1) {
    YEARS$1[i$6] = 1900 + i$6;
}
var PrivateYearSelect = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var selectYear = _a.selectYear, activeYear = _a.activeYear, availableDate = _a.availableDate, initOnSelect = _a.onSelect;
    var containerRef = useRef(null);
    var simpleBarRef = useRef(null);
    var onSelectRef = useAutoUpdateLayoutRef(initOnSelect);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
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
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = useCallback(function (e) {
        onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute('data-id')));
    }, [onSelectRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var today = dayjs().startOf('date');
    return (React.createElement("div", { ref: containerRef, className: 'PrivateYearSelect' },
        React.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
            React.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS$1.map(function (y) {
                var isToday = y === today.year();
                var isActive = y === activeYear;
                var isSelected = y === selectYear;
                var disabled = (!!availableDate[0] && y < availableDate[0].year) || (!!availableDate[1] && y > availableDate[1].year);
                return (React.createElement(Grid, { key: y, size: { xs: 3 } },
                    React.createElement(PrivateToggleButton, { "data-id": y, className: "private-year-select-value-".concat(y), fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: handleClick }, y)));
            })))));
};insertStyle(".PrivateMonthSelect{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.PrivateMonthSelect button{font-size:15px;font-weight:400;border-radius:18px}");var MONTHS$1 = new Array(12).fill(0);
for (var i$5 = 0; i$5 < 12; i$5 += 1) {
    MONTHS$1[i$5] = i$5;
}
var PrivateMonthSelect = function (_a) {
    var year = _a.year, selectYear = _a.selectYear, selectMonth = _a.selectMonth, activeMonth = _a.activeMonth, availableDate = _a.availableDate, onSelect = _a.onSelect;
    var today = dayjs().startOf('date');
    return (React.createElement("div", { className: 'PrivateMonthSelect' },
        React.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS$1.map(function (m) {
            var isToday = today.year() === year && m === today.month();
            var isActive = m === activeMonth;
            var isSelected = selectYear === year && m === selectMonth;
            var ym = year * 100 + (m + 1);
            var disabled = (!!availableDate[0] && ym < availableDate[0].month) || (!!availableDate[1] && ym > availableDate[1].month);
            return (React.createElement(Grid, { key: m, size: { xs: 4 } },
                React.createElement(PrivateToggleButton, { fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: function () { return onSelect(m); } },
                    m + 1,
                    "\uC6D4")));
        }))));
};insertStyle(".PrivateTimeSelect{position:absolute;left:0;right:0;top:0;bottom:0}.PrivateTimeSelect button{border-radius:0}");var DEFAULT_MINUTES$3 = new Array(60).fill(0);
for (var i$4 = 0; i$4 < DEFAULT_MINUTES$3.length; i$4 += 1) {
    DEFAULT_MINUTES$3[i$4] = i$4;
}
var PrivateTimeSelect = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var list = _a.list, listInterval = _a.listInterval, unit = _a.unit, value = _a.value, _b = _a.cols, cols = _b === void 0 ? 1 : _b, disableList = _a.disableList, initOnSelect = _a.onSelect;
    var containerRef = useRef(null);
    var simpleBarRef = useRef(null);
    var scrollTimerRef = useRef(undefined);
    var onSelectRef = useAutoUpdateLayoutRef(initOnSelect);
    /********************************************************************************************************************
     * Function - scrollToValue
     * ******************************************************************************************************************/
    var scrollToValue = useCallback(function (value) {
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
    useEffect(function () {
        return function () {
            if (scrollTimerRef.current) {
                clearInterval(scrollTimerRef.current);
                scrollTimerRef.current = undefined;
            }
        };
    }, []);
    useEffect(function () {
        if (value != null) {
            scrollToValue(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    useForwardLayoutRef(ref, useMemo(function () { return ({ scrollToValue: scrollToValue }); }, [scrollToValue]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = useCallback(function (e) {
        onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute('data-id')));
    }, [onSelectRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", { ref: containerRef, className: 'PrivateTimeSelect' },
        React.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
            React.createElement(Grid, { container: true }, list
                .filter(function (v) { return (listInterval ? v % listInterval === 0 : true); })
                .map(function (v) {
                var isSelected = v === value;
                var disabled = !!disableList && disableList.includes(v);
                return (React.createElement(Grid, { key: v, size: { xs: 12 / (cols || 1) } },
                    React.createElement(PrivateToggleButton, { "data-id": v, className: "private-time-select-value-".concat(v), fullWidth: true, disabled: disabled, selected: isSelected, onClick: handleClick },
                        v,
                        unit)));
            })))));
});var DEFAULT_HOURS$2 = new Array(24).fill(0);
for (var i$3 = 0; i$3 < DEFAULT_HOURS$2.length; i$3 += 1) {
    DEFAULT_HOURS$2[i$3] = i$3;
}
var DEFAULT_MINUTES$2 = new Array(60).fill(0);
for (var i$3 = 0; i$3 < DEFAULT_MINUTES$2.length; i$3 += 1) {
    DEFAULT_MINUTES$2[i$3] = i$3;
}
var DEFAULT_SECONDS$2 = new Array(60).fill(0);
for (var i$3 = 0; i$3 < DEFAULT_SECONDS$2.length; i$3 += 1) {
    DEFAULT_SECONDS$2[i$3] = i$3;
}
var PrivateTimeSection = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var time = _a.time, width = _a.width, cols = _a.cols, _b = _a.hours, hours = _b === void 0 ? DEFAULT_HOURS$2 : _b, _c = _a.minutes, minutes = _c === void 0 ? DEFAULT_MINUTES$2 : _c, _d = _a.seconds, seconds = _d === void 0 ? DEFAULT_SECONDS$2 : _d, availableDate = _a.availableDate, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, value = _a.value, hourSelectRef = _a.hourSelectRef, minuteSelectRef = _a.minuteSelectRef, secondSelectRef = _a.secondSelectRef, onClose = _a.onClose, onChange = _a.onChange;
    var disableHours = useMemo(function () {
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
    var disableMinutes = useMemo(function () {
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
    var disableSeconds = useMemo(function () {
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
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Grid, { className: 'time' },
        React.createElement(Grid, { container: true, direction: 'column', className: 'time-container' },
            React.createElement(Grid, { className: 'time-title' },
                time === 'hour' && (value ? value.format('HH시') : '00시'),
                time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분'),
                time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')),
            React.createElement(Grid, { className: 'time-select-wrap' },
                React.createElement(Grid, { container: true, style: { height: '100%' } },
                    React.createElement(Grid, { style: { position: 'relative', width: width } },
                        React.createElement(PrivateTimeSelect, { ref: hourSelectRef, value: value && value.hour(), unit: '\uC2DC', list: hours, disableList: disableHours, cols: cols, onSelect: function (newValue) {
                                onChange('hour', value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue));
                            } })),
                    (time === 'minute' || time === 'second') && (React.createElement(Grid, { style: { position: 'relative', width: width } },
                        React.createElement(PrivateTimeSelect, { ref: minuteSelectRef, value: value && value.minute(), unit: '\uBD84', list: minutes, disableList: disableMinutes, cols: cols, listInterval: minuteInterval, onSelect: function (newValue) {
                                onChange('minute', value ? value.set('minute', newValue) : dayjs().startOf('date').set('minute', newValue));
                            } }))),
                    time === 'second' && (React.createElement(Grid, { style: { position: 'relative', width: width } },
                        React.createElement(PrivateTimeSelect, { ref: secondSelectRef, value: value && value.second(), unit: '\uCD08', list: seconds, disableList: disableSeconds, cols: cols, listInterval: secondInterval, onSelect: function (newValue) {
                                onChange('second', value ? value.set('second', newValue) : dayjs().startOf('date').set('second', newValue));
                            } }))))),
            onClose && (React.createElement(Grid, { className: 'action-buttons' },
                React.createElement(Button, { variant: 'text', onClick: onClose }, "\uB2EB\uAE30"))))));
};insertStyle(".PrivateStaticDatePicker.time{height:400px}.PrivateStaticDatePicker .MuiPickersCalendarHeader-root{display:none}.PrivateStaticDatePicker .month-title-container{display:flex;align-items:center;margin-left:5px}.PrivateStaticDatePicker .month-title-container .month-title-wrap{display:flex;align-items:center;cursor:pointer}.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button:not(.active){color:unset}.PrivateStaticDatePicker .action-buttons{border-top:1px solid #efefef;padding:10px;text-align:right}.PrivateStaticDatePicker .action-buttons button{min-width:0;color:inherit}.PrivateStaticDatePicker .action-buttons button:not(:first-of-type){margin-left:5px}.PrivateStaticDatePicker .action-buttons button.disabled{color:rgba(0,0,0,.5)}.PrivateStaticDatePicker .time{border-left:2px solid #bfbfbf}.PrivateStaticDatePicker .time .time-container{height:100%}.PrivateStaticDatePicker .time .time-container .time-title{text-align:center;padding:22px 0;font-size:15px}.PrivateStaticDatePicker .time .time-container .time-select-wrap{flex:1;border-top:1px solid #efefef}.PrivateStaticDatePicker.time .time .time-container .time-select-wrap>div>div:not(:first-of-type){border-left:1px solid #efefef}");var DEFAULT_HOURS$1 = new Array(24).fill(0);
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
    var value = _a.value, initAvailableDate = _a.availableDate, type = _a.type, time = _a.time, _b = _a.hours, hours = _b === void 0 ? DEFAULT_HOURS$1 : _b, _c = _a.minutes, minutes = _c === void 0 ? DEFAULT_MINUTES$1 : _c, _d = _a.seconds, seconds = _d === void 0 ? DEFAULT_SECONDS$1 : _d, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange, onMonthChange = _a.onMonthChange, onClose = _a.onClose, props = __rest(_a, ["value", "availableDate", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    var hourSelectRef = useRef(null);
    var minuteSelectRef = useRef(null);
    var secondSelectRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _e = useState(function () {
        if (value)
            return value;
        else
            return dayjs();
    }), month = _e[0], setMonth = _e[1];
    var _f = useState(null), activeMonthValue = _f[0], setActiveMonthValue = _f[1];
    var _g = useState(false), yearSelectOpen = _g[0], setYearSelectOpen = _g[1];
    var _h = useState(false), monthSelectOpen = _h[0], setMonthSelectOpen = _h[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var availableDate = useMemo(function () {
        return initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [disableFuture, disablePast, initAvailableDate, maxDate, minDate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    /********************************************************************************************************************
     * Arrow
     * ******************************************************************************************************************/
    var leftArrowOnClickRef = useRef(undefined);
    var rightArrowOnClickRef = useRef(undefined);
    var LeftArrowButton = useMemo(function () {
        return function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(IconButton, __assign({}, props));
        };
    }, []);
    var RightArrowButton = useMemo(function () {
        return function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(IconButton, __assign({}, props));
        };
    }, []);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var previousMonth = useCallback(function () {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    var nextMonth = useCallback(function () {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearSelect = useCallback(function (year) {
        setMonth(month.set('year', year));
        setActiveMonthValue(month.set('year', year));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [month]);
    var handleMonthSelect = useCallback(function (m) {
        setMonth(month.set('month', m));
        setActiveMonthValue(month.set('month', m));
        setMonthSelectOpen(false);
    }, [month]);
    var handleRenderDay = useCallback(function (props) {
        return React.createElement(PickersDay, __assign({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    useForwardLayoutRef(ref, useMemo(function () { return ({}); }, []));
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    var getActionButton = useCallback(function (date, label) {
        var disabled = !isDateAvailable(date, availableDate, 'day');
        return (React.createElement(Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: function () {
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
    return (React.createElement(Grid, { container: true, className: classNames('PrivateStaticDatePicker', type) },
        type !== 'time' && (React.createElement(Grid, null,
            React.createElement(Grid, { container: true, direction: 'column' },
                React.createElement(Grid, { sx: { p: 2, width: '100%' } },
                    React.createElement(Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React.createElement(Grid, { flex: 1, className: 'month-title-container' },
                            React.createElement("div", { className: 'month-title-wrap' },
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (yearSelectOpen) {
                                                setYearSelectOpen(false);
                                            }
                                            else {
                                                setYearSelectOpen(true);
                                                setMonthSelectOpen(false);
                                            }
                                        } },
                                        month.format('YYYY년'),
                                        React.createElement(Icon, null, yearSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))),
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (monthSelectOpen) {
                                                setMonthSelectOpen(false);
                                            }
                                            else {
                                                setMonthSelectOpen(true);
                                                setYearSelectOpen(false);
                                            }
                                        } },
                                        month.format('M월'),
                                        React.createElement(Icon, null, monthSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))))),
                        !yearSelectOpen && !monthSelectOpen && (React.createElement(Grid, { style: { textAlign: 'right' } },
                            React.createElement(IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React.createElement(Icon, null, "keyboard_arrow_left")),
                            React.createElement(IconButton, { onClick: nextMonth },
                                React.createElement(Icon, null, "keyboard_arrow_right")))))),
                React.createElement(Grid, { style: { position: 'relative' } },
                    React.createElement(StaticDatePicker, __assign({}, props, { value: activeMonthValue, referenceDate: month, slots: {
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
                React.createElement(Grid, { className: 'action-buttons' },
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
});var PrivateStyledTooltip = styled(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(Tooltip, __assign({}, props, { classes: { popper: className } })));
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(tooltipClasses.tooltip)] = {
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
});insertStyle(".PrivateDatePicker .input-text-field.align-left .MuiInputBase-input{text-align:left}.PrivateDatePicker .input-text-field.align-center .MuiInputBase-input{text-align:center}.PrivateDatePicker .input-text-field.align-right .MuiInputBase-input{text-align:right}");var PrivateDatePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, type = _a.type, time = _a.time, _b = _a.value, initValue = _b === void 0 ? null : _b, initData = _a.data, initLabel = _a.label, labelIcon = _a.labelIcon, format = _a.format, initFormValueFormat = _a.formValueFormat, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, width = _a.width, initError = _a.error, helperText = _a.helperText, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, exceptValue = _a.exceptValue, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, _c = _a.align, align = _c === void 0 ? 'center' : _c, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, enableKeyboardInput = _a.enableKeyboardInput, initHidden = _a.hidden, _d = _a.showDaysOutsideCurrentMonth, showDaysOutsideCurrentMonth = _d === void 0 ? true : _d, onChange = _a.onChange, initOnValidate = _a.onValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, otherProps = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "enableKeyboardInput", "hidden", "showDaysOutsideCurrentMonth", "onChange", "onValidate", "className", "style", "sx"]);
    var id = useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var privateStaticDatePickerRef = useRef(null);
    var textFieldInputRef = useRef(undefined);
    var closeTimeoutRef = useRef(undefined);
    var mouseDownTimeRef = useRef(undefined);
    var datePickerErrorRef = useRef(null);
    var openValueRef = useRef(null);
    var onValidateRef = useAutoUpdateLayoutRef(initOnValidate);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _e = useFormState(), formVariant = _e.variant, formSize = _e.size, formColor = _e.color, formFocused = _e.focused, formLabelShrink = _e.labelShrink, formFullWidth = _e.fullWidth, formDisabled = _e.disabled, formColWithHelperText = _e.formColWithHelperText, onAddValueItem = _e.onAddValueItem, onRemoveValueItem = _e.onRemoveValueItem, onValueChange = _e.onValueChange, onValueChangeByUser = _e.onValueChangeByUser, onRequestSearchSubmit = _e.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Value
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - open
     * ******************************************************************************************************************/
    var _f = useState(false), open = _f[0], setOpen = _f[1];
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _g = useAutoUpdateState(initError), error = _g[0], setError = _g[1];
    var _h = useState(null), timeError = _h[0], setTimeError = _h[1];
    var _j = useState(), errorHelperText = _j[0], setErrorHelperText = _j[1];
    var _k = useAutoUpdateRefState(initData), dataRef = _k[0], setData = _k[2];
    var _l = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _l[0], disabled = _l[1], setDisabled = _l[2];
    var _m = useAutoUpdateRefState(initHidden), hiddenRef = _m[0], hidden = _m[1], setHidden = _m[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var availableDate = useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [disableFuture, disablePast, maxDate, minDate]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setErrorHelperText(helperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
            var onValidateResult = onValidateRef.current(value);
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
    var _o = useAutoUpdateRefState(initValue), valueRef = _o[0], value = _o[1], _setValue = _o[2];
    var _p = useAutoUpdateState(value), inputValue = _p[0], setInputValue = _p[1];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        if (type !== 'time' && time && finalValue && (availableDate[0] || availableDate[1])) {
            var availableDateVal = getAvailableDateVal(availableDate, type, time);
            var valueVal = getDateValForAvailableDate(finalValue, type, time);
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
        return finalValue;
    }, [_setValue, availableDate, error, name, onChange, onValueChange, time, type, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useFirstSkipEffect(function () {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    useFirstSkipEffect(function () {
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
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'default'; },
        getName: function () { return name; },
        getReset: function () { return initValue; },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
        getFormValueFormat: function () { return (initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time)); },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (unit, newValue, keyboardInputValue) {
        var isUpdateValue = true;
        if (notEmpty(keyboardInputValue)) {
            if (newValue) {
                if (!newValue.isValid()) {
                    isUpdateValue = false;
                }
            }
        }
        var finalValue = newValue;
        if (isUpdateValue) {
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
            if (notEmpty(keyboardInputValue)) {
                if (!time || unit !== 'action_date') {
                    runOnRequestSearchSubmit_1 = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
                    setOpen(false);
                }
            }
            else if (time) {
                if (time === unit)
                    setOpen(false);
            }
            updateValue(finalValue);
            setTimeout(function () {
                onValueChangeByUser(name, finalValue);
                if (runOnRequestSearchSubmit_1) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
        setInputValue(finalValue);
    }, [setInputValue, type, time, updateValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]);
    var handleContainerFocus = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = useCallback(function () {
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
    var handleContainerMouseDown = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var slotProps = useMemo(function () {
        var textFieldInputLabelProps = {};
        if (labelShrink) {
            textFieldInputLabelProps.shrink = labelShrink;
        }
        var readOnly = !enableKeyboardInput;
        var inputProps = {
            readOnly: readOnly,
        };
        if (readOnly) {
            inputProps.tabIndex = -1;
        }
        var muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(InputAdornment, { position: 'start' },
                    React.createElement(PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(InputAdornment, { position: 'end' }, endAdornment)));
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
                style: width != null ? __assign(__assign({}, initStyle), { width: width }) : initStyle,
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
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
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
                    }, title: React.createElement(PrivateStaticDatePicker, __assign({}, otherProps, { ref: privateStaticDatePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth, onChange: handleChange, onAccept: function () { return !time && setOpen(false); }, onClose: function () { return setOpen(false); } })) },
                    React.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React.createElement(DesktopDatePicker, __assign({ value: inputValue, label: labelIcon ? React.createElement(PIconText, { icon: labelIcon }, initLabel) : initLabel, open: false, format: format ? format : getDateTimeFormat(type, time), disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: function () { return setOpen(false); }, onError: function (reason) { return (datePickerErrorRef.current = reason); }, onChange: function (newValue) { return handleChange('date', newValue); }, slotProps: slotProps, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React.createElement(FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});insertStyle(".PrivateDateTimePicker .input-text-field.align-left .MuiInputBase-input{text-align:left}.PrivateDateTimePicker .input-text-field.align-center .MuiInputBase-input{text-align:center}.PrivateDateTimePicker .input-text-field.align-right .MuiInputBase-input{text-align:right}");insertStyle(".PrivateStaticDateTimePicker.time{height:400px}.PrivateStaticDateTimePicker .MuiPickersCalendarHeader-root{display:none}.PrivateStaticDateTimePicker .month-title-container{display:flex;align-items:center;margin-left:5px}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap{display:flex;align-items:center;cursor:pointer}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button:not(.active){color:unset}.PrivateStaticDateTimePicker .action-buttons{border-top:1px solid #efefef;padding:10px;text-align:right}.PrivateStaticDateTimePicker .action-buttons button{min-width:0;color:inherit}.PrivateStaticDateTimePicker .action-buttons button:not(:first-of-type){margin-left:5px}.PrivateStaticDateTimePicker .action-buttons button.disabled{color:rgba(0,0,0,.5)}.PrivateStaticDateTimePicker .time{border-left:2px solid #bfbfbf}.PrivateStaticDateTimePicker .time .time-container{height:100%}.PrivateStaticDateTimePicker .time .time-container .time-title{text-align:center;padding:22px 0;font-size:15px}.PrivateStaticDateTimePicker .time .time-container .time-select-wrap{flex:1;border-top:1px solid #efefef}.PrivateStaticDateTimePicker.time .time .time-container .time-select-wrap>div>div:not(:first-of-type){border-left:1px solid #efefef}");var DEFAULT_HOURS = new Array(24).fill(0);
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
    var value = _a.value, initAvailableDate = _a.availableDate, type = _a.type, time = _a.time, _b = _a.hours, hours = _b === void 0 ? DEFAULT_HOURS : _b, _c = _a.minutes, minutes = _c === void 0 ? DEFAULT_MINUTES : _c, _d = _a.seconds, seconds = _d === void 0 ? DEFAULT_SECONDS : _d, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange, onMonthChange = _a.onMonthChange, onClose = _a.onClose, props = __rest(_a, ["value", "availableDate", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    var hourSelectRef = useRef(null);
    var minuteSelectRef = useRef(null);
    var secondSelectRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _e = useState(function () {
        if (value)
            return value;
        else
            return dayjs();
    }), month = _e[0], setMonth = _e[1];
    var _f = useState(null), activeMonthValue = _f[0], setActiveMonthValue = _f[1];
    var _g = useState(false), yearSelectOpen = _g[0], setYearSelectOpen = _g[1];
    var _h = useState(false), monthSelectOpen = _h[0], setMonthSelectOpen = _h[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var availableDate = useMemo(function () {
        return initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [initAvailableDate, minDate, maxDate, disablePast, disableFuture]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = useRef(undefined);
    var rightArrowOnClickRef = useRef(undefined);
    var LeftArrowButton = useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var previousMonth = useCallback(function () {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    var nextMonth = useCallback(function () {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    var timeSelectScrollToDate = useCallback(function (date, times) {
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
    var handleYearSelect = useCallback(function (year) {
        setMonth(month.set('year', year));
        setActiveMonthValue(month.set('year', year));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [month]);
    var handleMonthSelect = useCallback(function (m) {
        setMonth(month.set('month', m));
        setActiveMonthValue(month.set('month', m));
        setMonthSelectOpen(false);
    }, [month]);
    var handleRenderDay = useCallback(function (props) {
        return React.createElement(PickersDay, __assign({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    useForwardLayoutRef(ref, useMemo(function () { return ({
        timeSelectScrollToDate: timeSelectScrollToDate,
    }); }, [timeSelectScrollToDate]));
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    var getActionButton = useCallback(function (date, label) {
        var disabled = !isDateAvailable(date, availableDate, 'day');
        return (React.createElement(Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: function () {
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
    return (React.createElement(Grid, { container: true, className: classNames('PrivateStaticDateTimePicker', type) },
        type !== 'time' && (React.createElement(Grid, null,
            React.createElement(Grid, { container: true, direction: 'column' },
                React.createElement(Grid, { sx: { p: 2, width: '100%' } },
                    React.createElement(Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React.createElement(Grid, { flex: 1, className: 'month-title-container' },
                            React.createElement("div", { className: 'month-title-wrap' },
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (yearSelectOpen) {
                                                setYearSelectOpen(false);
                                            }
                                            else {
                                                setYearSelectOpen(true);
                                                setMonthSelectOpen(false);
                                            }
                                        } },
                                        month.format('YYYY년'),
                                        React.createElement(Icon, null, yearSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))),
                                React.createElement("div", { className: 'month-title' },
                                    React.createElement(Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (monthSelectOpen) {
                                                setMonthSelectOpen(false);
                                            }
                                            else {
                                                setMonthSelectOpen(true);
                                                setYearSelectOpen(false);
                                            }
                                        } },
                                        month.format('M월'),
                                        React.createElement(Icon, null, monthSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))))),
                        !yearSelectOpen && !monthSelectOpen && (React.createElement(Grid, { style: { textAlign: 'right' } },
                            React.createElement(IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React.createElement(Icon, null, "keyboard_arrow_left")),
                            React.createElement(IconButton, { onClick: nextMonth },
                                React.createElement(Icon, null, "keyboard_arrow_right")))))),
                React.createElement(Grid, { style: { position: 'relative' } },
                    React.createElement(StaticDateTimePicker, __assign({}, props, { value: activeMonthValue, referenceDate: month, slots: {
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
                React.createElement(Grid, { className: 'action-buttons' },
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
});var getFinalValue$7 = function (value) {
    return value || null;
};var PrivateDateTimePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, type = _a.type, time = _a.time, _b = _a.value, initValue = _b === void 0 ? null : _b, initData = _a.data, initLabel = _a.label, labelIcon = _a.labelIcon, initFormat = _a.format, initFormValueFormat = _a.formValueFormat, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, width = _a.width, initError = _a.error, helperText = _a.helperText, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, exceptValue = _a.exceptValue, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, _c = _a.align, align = _c === void 0 ? 'center' : _c, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, enableKeyboardInput = _a.enableKeyboardInput, initHidden = _a.hidden, _d = _a.showDaysOutsideCurrentMonth, showDaysOutsideCurrentMonth = _d === void 0 ? true : _d, onChange = _a.onChange, initOnValidate = _a.onValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, otherProps = __rest(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "enableKeyboardInput", "hidden", "showDaysOutsideCurrentMonth", "onChange", "onValidate", "className", "style", "sx"]);
    var id = useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var privateStaticDateTimePickerRef = useRef(null);
    var textFieldInputRef = useRef(undefined);
    var closeTimeoutRef = useRef(undefined);
    var mouseDownTimeRef = useRef(undefined);
    var datePickerErrorRef = useRef(null);
    var openValueRef = useRef(null);
    var onValidateRef = useAutoUpdateLayoutRef(initOnValidate);
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _e = useFormState(), formVariant = _e.variant, formSize = _e.size, formColor = _e.color, formFocused = _e.focused, formLabelShrink = _e.labelShrink, formFullWidth = _e.fullWidth, formDisabled = _e.disabled, formColWithHelperText = _e.formColWithHelperText, onAddValueItem = _e.onAddValueItem, onRemoveValueItem = _e.onRemoveValueItem, onValueChange = _e.onValueChange, onValueChangeByUser = _e.onValueChangeByUser, onRequestSearchSubmit = _e.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Value
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * State - open
     * ******************************************************************************************************************/
    var _f = useState(false), open = _f[0], setOpen = _f[1];
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _g = useAutoUpdateState(initError), error = _g[0], setError = _g[1];
    var _h = useState(null), timeError = _h[0], setTimeError = _h[1];
    var _j = useState(), errorHelperText = _j[0], setErrorHelperText = _j[1];
    var _k = useAutoUpdateRefState(initData), dataRef = _k[0], setData = _k[2];
    var _l = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _l[0], disabled = _l[1], setDisabled = _l[2];
    var _m = useAutoUpdateRefState(initHidden), hiddenRef = _m[0], hidden = _m[1], setHidden = _m[2];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var format = useMemo(function () { return (initFormat ? initFormat : getDateTimeFormat(type, time)); }, [initFormat, time, type]);
    var availableDate = useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [disableFuture, disablePast, maxDate, minDate]);
    var style = useMemo(function () { return (width != null ? __assign(__assign({}, initStyle), { width: width }) : initStyle); }, [initStyle, width]);
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
            var onValidateResult = onValidateRef.current(value);
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
    var _o = useAutoUpdateRefState(initValue, getFinalValue$7), valueRef = _o[0], value = _o[1], _setValue = _o[2];
    var _p = useAutoUpdateState(value), inputValue = _p[0], setInputValue = _p[1];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
        if (error)
            validate(finalValue);
        if (onChange)
            onChange(finalValue);
        onValueChange(name, finalValue);
        if (type !== 'time' && time && finalValue && (availableDate[0] || availableDate[1])) {
            var availableDateVal = getAvailableDateVal(availableDate, type, time);
            var valueVal = getDateValForAvailableDate(finalValue, type, time);
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
        return finalValue;
    }, [_setValue, availableDate, error, name, onChange, onValueChange, time, type, validate]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useFirstSkipEffect(function () {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    useFirstSkipEffect(function () {
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
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'default'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue$7(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
        getFormValueFormat: function () { return (initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time)); },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (unit, newValue, keyboardInputValue) {
        var _a, _b, _c;
        var isUpdateValue = true;
        if (notEmpty(keyboardInputValue)) {
            if (newValue) {
                if (!newValue.isValid()) {
                    isUpdateValue = false;
                }
            }
        }
        var finalValue = newValue;
        if (isUpdateValue) {
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
            if (notEmpty(keyboardInputValue)) {
                if (!time || unit !== 'action_date') {
                    runOnRequestSearchSubmit_1 = !open; // 팝업창 열리지 않은 상태에서 날짜 키보드로 변경
                    setOpen(false);
                }
            }
            else if (time) {
                if (time === unit)
                    setOpen(false);
            }
            updateValue(finalValue);
            setTimeout(function () {
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
    }, [setInputValue, type, time, updateValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]);
    var handleContainerFocus = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = useCallback(function () {
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
    var handleContainerMouseDown = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var slotProps = useMemo(function () {
        var textFieldInputLabelProps = {};
        if (labelShrink) {
            textFieldInputLabelProps.shrink = labelShrink;
        }
        var readOnly = !enableKeyboardInput;
        var inputProps = {
            readOnly: readOnly,
        };
        if (readOnly) {
            inputProps.tabIndex = -1;
        }
        var muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(InputAdornment, { position: 'start' },
                    React.createElement(PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(InputAdornment, { position: 'end' }, endAdornment)));
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
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
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
                    }, title: React.createElement(PrivateStaticDateTimePicker, __assign({}, otherProps, { ref: privateStaticDateTimePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth, onChange: handleChange, onAccept: function () { return !time && setOpen(false); }, onClose: function () { return setOpen(false); } })) },
                    React.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React.createElement(DesktopDateTimePicker, __assign({ value: inputValue, label: labelIcon ? React.createElement(PIconText, { icon: labelIcon }, initLabel) : initLabel, open: false, format: format, disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: function () { return setOpen(false); }, onError: function (reason) { return (datePickerErrorRef.current = reason); }, onChange: function (newValue) { return handleChange('date', newValue); }, slotProps: slotProps, showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React.createElement(FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});var PrivateAlertDialog = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, open = _a.open, title = _a.title, content = _a.content, initOnClose = _a.onClose;
    var onCloseRef = useAutoUpdateLayoutRef(initOnClose);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClose = useCallback(function () {
        onCloseRef.current && onCloseRef.current();
    }, [onCloseRef]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Dialog, { className: "color-".concat(color), open: !!open, onClose: handleClose, "aria-labelledby": 'alert-dialog-title' },
        title && React.createElement(DialogTitle, { id: 'alert-dialog-title' }, title),
        React.createElement(DialogContent, null, content),
        React.createElement(DialogActions, null,
            React.createElement(Button, { variant: 'text', onClick: handleClose, autoFocus: true }, "\uD655\uC778"))));
};insertStyle(".PrivateInputDatePicker.align-left .MuiInputBase-input{text-align:left}.PrivateInputDatePicker.align-center .MuiInputBase-input{text-align:center}.PrivateInputDatePicker.align-right .MuiInputBase-input{text-align:right}");var PrivateInputDatePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var variant = _a.variant, size = _a.size, color = _a.color, focused = _a.focused, fullWidth = _a.fullWidth, disabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, labelShrink = _a.labelShrink, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, sx = _a.sx, value = _a.value, initLabel = _a.label, labelIcon = _a.labelIcon, inputRef = _a.inputRef, format = _a.format, error = _a.error, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, _b = _a.align, align = _b === void 0 ? 'center' : _b, enableKeyboardInput = _a.enableKeyboardInput, initOnFocus = _a.onFocus, initOnBlur = _a.onBlur, props = __rest(_a, ["variant", "size", "color", "focused", "fullWidth", "disabled", "readOnly", "required", "labelShrink", "className", "style", "sx", "value", "label", "labelIcon", "inputRef", "format", "error", "icon", "startAdornment", "endAdornment", "align", "enableKeyboardInput", "onFocus", "onBlur"]);
    var id = useId();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var onFocusRef = useAutoUpdateLayoutRef(initOnFocus);
    var onBlurRef = useAutoUpdateLayoutRef(initOnBlur);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var slotProps = useMemo(function () {
        var inputLabelProps = labelShrink ? { shrink: true } : undefined;
        var muiInputProps = {
            endAdornment: undefined,
        };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React.createElement(React.Fragment, null,
                icon && (React.createElement(InputAdornment, { position: 'start' },
                    React.createElement(PIcon, { size: 'small' }, icon))),
                startAdornment && React.createElement(InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React.createElement(React.Fragment, null, endAdornment && React.createElement(InputAdornment, { position: 'end' }, endAdornment)));
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
                label: labelIcon ? (React.createElement(React.Fragment, null,
                    React.createElement(PIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
                    React.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel),
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
    return (React.createElement(DesktopDatePicker, __assign({}, props, { ref: ref, className: classNames(className, 'PrivateInputDatePicker', "align-".concat(align)), open: false, value: value, format: format, disabled: disabled, readOnly: readOnly || !enableKeyboardInput, slotProps: slotProps })));
});var StyledContainer$6 = styled(Grid)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  padding: 4px;\n  position: relative;\n"], ["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$2 = styled(Button)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: #1976d2;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"], ["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: #1976d2;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));
var templateObject_1$b, templateObject_2$6;var PrivateYearRangePickerYear = React.forwardRef(function (_a, ref) {
    var year = _a.year, disabled = _a.disabled, isDefault = _a.isDefault, selected = _a.selected, selectedStart = _a.selectedStart, selectedEnd = _a.selectedEnd, selectedTemp = _a.selectedTemp, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    return (React.createElement(StyledContainer$6, { className: 'PrivateYearRangePickerYear', ref: ref, size: { xs: 4 } },
        React.createElement(StyledButton$2, { className: classNames(isDefault && 'default', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', disabled && 'disabled'), disabled: disabled, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, year)));
});var StyledContainer$5 = styled(Grid)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"], ["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));
var templateObject_1$a;var _lastCloseTime$1 = 0;
var PrivateYearRangePickerYearList = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var value = _a.value, displayValue = _a.displayValue, selectType = _a.selectType, minYear = _a.minYear, maxYear = _a.maxYear, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange;
    var yearsContainerRef = useRef(null);
    var startButtonRef = useRef(null);
    var endButtonRef = useRef(null);
    var mouseOverTimer = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(), mouseOverYear = _b[0], setMouseOverYear = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        return function () {
            if (mouseOverTimer.current) {
                clearTimeout(mouseOverTimer.current);
                mouseOverTimer.current = undefined;
            }
        };
    }, []);
    useEffect(function () {
        if (!displayValue[0]) {
            startButtonRef.current = null;
        }
        if (!value[1]) {
            endButtonRef.current = null;
        }
    }, [displayValue, value]);
    useEffect(function () {
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
    var nowYear = useMemo(function () { return new Date().getFullYear(); }, []);
    var years = useMemo(function () {
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
    var mouseOver = useCallback(function (year) {
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
};var StyledTitleContainer$1 = styled('div')(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledYear = styled('span')(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject([""], [""])));
var StyledYearError = styled('span')(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.error.main;
});
var StyledTitleGap = styled('span')(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  padding: 0 7px;\n  opacity: 0.5;\n"], ["\n  padding: 0 7px;\n  opacity: 0.5;\n"])));
var StyledActionContainer$1 = styled('div')(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"], ["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton$1 = styled(Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));
var templateObject_1$9, templateObject_2$5, templateObject_3$3, templateObject_4$2, templateObject_5$1, templateObject_6;var DEFAULT_MIN_YEAR$1 = 2020;
var DEFAULT_MAX_YEAR$1 = 2050;
var DEFAULT_VALUE$3 = [null, null];
var PrivateYearRangePicker = function (_a) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var selectType = _a.selectType, _b = _a.value, initValue = _b === void 0 ? DEFAULT_VALUE$3 : _b, _c = _a.minYear, minYear = _c === void 0 ? DEFAULT_MIN_YEAR$1 : _c, _d = _a.maxYear, maxYear = _d === void 0 ? DEFAULT_MAX_YEAR$1 : _d, disablePast = _a.disablePast, disableFuture = _a.disableFuture, hideHeader = _a.hideHeader, onChange = _a.onChange;
    var _e = useAutoUpdateState(initValue), value = _e[0], setValue = _e[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var yearInfo = useMemo(function () {
        var nowYear = new Date().getFullYear();
        var minAvailableYear;
        if (disablePast) {
            minAvailableYear = nowYear > minYear ? nowYear : minYear;
        }
        else {
            minAvailableYear = minYear;
        }
        var maxAvailableYear;
        if (disableFuture) {
            maxAvailableYear = nowYear < maxYear ? nowYear : maxYear;
        }
        else {
            maxAvailableYear = maxYear;
        }
        return { now: nowYear, available: { min: minAvailableYear, max: maxAvailableYear } };
    }, [disableFuture, disablePast, maxYear, minYear]);
    var displayInfo = useMemo(function () {
        var displayValue;
        var defaultYear = yearInfo.now;
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
        var displayValueError = [
            displayValue[0] < yearInfo.available.min || displayValue[0] > yearInfo.available.max,
            displayValue[1] < yearInfo.available.min || displayValue[1] > yearInfo.available.max,
        ];
        return { value: displayValue, error: displayValueError };
    }, [minYear, value, yearInfo]);
    /********************************************************************************************************************
     * action button
     * ******************************************************************************************************************/
    var getActionButton = useCallback(function (fromYear, toYear, label) {
        if (fromYear < yearInfo.available.min || toYear > yearInfo.available.max) {
            return undefined;
        }
        else {
            var newValue_1 = [
                Math.max(fromYear, yearInfo.available.min),
                Math.min(toYear, yearInfo.available.max),
            ];
            return (React.createElement(StyledActionButton$1, { variant: 'text', onClick: function () {
                    setValue(newValue_1);
                    onChange(newValue_1, 'end');
                } }, label));
        }
    }, [yearInfo, onChange, setValue]);
    var actionButtons = useMemo(function () {
        return (React.createElement(StyledActionContainer$1, null,
            getActionButton(yearInfo.now - 2, yearInfo.now, '최근 3년'),
            getActionButton(yearInfo.now - 4, yearInfo.now, '최근 5년'),
            getActionButton(yearInfo.now - 9, yearInfo.now, '최근 10년')));
    }, [getActionButton, yearInfo]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearChange = useCallback(function (valueYear) {
        var newValue = __spreadArray([], value, true);
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
};var StyledContainer$4 = styled(Grid)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  padding: 4px;\n  position: relative;\n"], ["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$1 = styled(Button)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"], ["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));
var templateObject_1$8, templateObject_2$4;var PrivateYearPickerYear = React.forwardRef(function (_a, ref) {
    var year = _a.year, disabled = _a.disabled, active = _a.active, range = _a.range, isDefault = _a.isDefault, selected = _a.selected, selectedStart = _a.selectedStart, selectedEnd = _a.selectedEnd, selectedTemp = _a.selectedTemp, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    return (React.createElement(StyledContainer$4, { className: 'PrivateYearPickerYear', ref: ref, size: { xs: 4 } },
        React.createElement(StyledButton$1, { className: classNames(range && 'range', isDefault && 'default', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', active && 'active', disabled && 'disabled'), disabled: disabled, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, year)));
});var StyledContainer$3 = styled(Grid)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"], ["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));
var templateObject_1$7;var _lastCloseTime = 0;
var PrivateYearPickerYearList = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var value = _a.value, minYear = _a.minYear, maxYear = _a.maxYear, disablePast = _a.disablePast, disableFuture = _a.disableFuture, selectFromYear = _a.selectFromYear, selectToYear = _a.selectToYear, onChange = _a.onChange;
    var yearsContainerRef = useRef(null);
    var defaultButtonRef = useRef(null);
    var startButtonRef = useRef(null);
    var endButtonRef = useRef(null);
    var mouseOverTimer = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(), mouseOverYear = _b[0], setMouseOverYear = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        return function () {
            if (mouseOverTimer.current) {
                clearTimeout(mouseOverTimer.current);
                mouseOverTimer.current = undefined;
            }
        };
    }, []);
    useEffect(function () {
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
    var nowYear = useMemo(function () { return new Date().getFullYear(); }, []);
    var defaultYear = useMemo(function () {
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
    var years = useMemo(function () {
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
    var mouseOver = useCallback(function (year) {
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
};var StyledTitleContainer = styled('div')(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton$1 = styled(IconButton)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth$1 = styled('div')(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  flex: 1;\n  text-align: center;\n"], ["\n  flex: 1;\n  text-align: center;\n"])));
var StyledYearMonthError$1 = styled('div')(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  flex: 1;\n  text-align: center;\n  color: ", ";\n"], ["\n  flex: 1;\n  text-align: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.error.main;
});
var templateObject_1$6, templateObject_2$3, templateObject_3$2, templateObject_4$1;var DEFAULT_MIN_YEAR = 2020;
var DEFAULT_MAX_YEAR = 2050;
var PrivateYearPicker = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var _b = _a.value, initValue = _b === void 0 ? null : _b, _c = _a.minYear, minYear = _c === void 0 ? DEFAULT_MIN_YEAR : _c, _d = _a.maxYear, maxYear = _d === void 0 ? DEFAULT_MAX_YEAR : _d, disablePast = _a.disablePast, disableFuture = _a.disableFuture, hideHeader = _a.hideHeader, selectFromYear = _a.selectFromYear, selectToYear = _a.selectToYear, initOnChange = _a.onChange;
    var onChangeRef = useAutoUpdateLayoutRef(initOnChange);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _e = useAutoUpdateState(initValue), value = _e[0], setValue = _e[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var yearInfo = useMemo(function () {
        var nowYear = new Date().getFullYear();
        var minAvailableYear;
        if (disablePast) {
            minAvailableYear = nowYear > minYear ? nowYear : minYear;
        }
        else {
            minAvailableYear = minYear;
        }
        var maxAvailableYear;
        if (disableFuture) {
            maxAvailableYear = nowYear < maxYear ? nowYear : maxYear;
        }
        else {
            maxAvailableYear = maxYear;
        }
        return { now: nowYear, available: { min: minAvailableYear, max: maxAvailableYear } };
    }, [disableFuture, disablePast, maxYear, minYear]);
    var displayInfo = useMemo(function () {
        var displayYear;
        if (value) {
            displayYear = value;
        }
        else {
            var year = selectFromYear || selectToYear || yearInfo.now;
            if (yearInfo.available.min > year) {
                year = yearInfo.available.min;
            }
            else if (yearInfo.available.max < year) {
                year = yearInfo.available.max;
            }
            displayYear = year;
        }
        var displayError = displayYear < yearInfo.available.min || displayYear > yearInfo.available.max;
        return { year: displayYear, error: displayError };
    }, [selectFromYear, selectToYear, value, yearInfo]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearChange = useCallback(function (v) {
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
    var handlePrevClick = useCallback(function () {
        if (displayInfo.year) {
            var newValue = displayInfo.year - 1;
            setValue(newValue);
            onChangeRef.current(newValue, false);
        }
    }, [displayInfo, onChangeRef, setValue]);
    var handleNextClick = useCallback(function () {
        if (displayInfo.year) {
            var newValue = displayInfo.year + 1;
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
                React.createElement(PIcon, null, "KeyboardArrowLeft")),
            displayInfo.error ? (React.createElement(StyledYearMonthError$1, null,
                displayInfo.year,
                "\uB144")) : (React.createElement(StyledYearMonth$1, null,
                displayInfo.year,
                "\uB144")),
            React.createElement(StyledIconButton$1, { disabled: displayInfo.year >= yearInfo.available.max, onClick: handleNextClick },
                React.createElement(PIcon, null, "KeyboardArrowRight")))),
        React.createElement("div", null,
            React.createElement(PrivateYearPickerYearList, { value: value, minYear: minYear, maxYear: maxYear, disablePast: disablePast, disableFuture: disableFuture, selectFromYear: selectFromYear, selectToYear: selectToYear, onChange: handleYearChange }))));
};var StyledContainer$2 = styled(Grid)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  padding: 4px;\n  position: relative;\n"], ["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton = styled(Button)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    background-color: rgba(66, 165, 245, 0.3);\n    border: 1px solid transparent;\n  }\n"], ["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    background-color: rgba(66, 165, 245, 0.3);\n    border: 1px solid transparent;\n  }\n"])));
var templateObject_1$5, templateObject_2$2;var PrivateMonthPickerMonth = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var month = _a.month, range = _a.range, disabled = _a.disabled, isDefault = _a.isDefault, active = _a.active, selected = _a.selected, selectedStart = _a.selectedStart, selectedEnd = _a.selectedEnd, selectedTemp = _a.selectedTemp, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    var handleClick = useCallback(function () {
        onClick && onClick(month);
    }, [month, onClick]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$2, { className: 'PrivateMonthPickerMonth', ref: ref, size: { xs: 4 } },
        React.createElement(StyledButton, { className: classNames(range && 'range', isDefault && 'default', active && 'active', selected && 'selected', selectedStart && 'selected-start', selectedEnd && 'selected-end', selectedTemp && 'selected-temp', disabled && 'disabled'), disabled: disabled, onClick: handleClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            month,
            "\uC6D4")));
});var StyledContainer$1 = styled(Grid)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  width: 240px;\n  padding: 4px;\n"], ["\n  width: 240px;\n  padding: 4px;\n"])));
var templateObject_1$4;var PrivateMonthPickerMonthList = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var value = _a.value, initDefaultValue = _a.defaultValue, minAvailableValue = _a.minAvailableValue, maxAvailableValue = _a.maxAvailableValue, disablePast = _a.disablePast, disableFuture = _a.disableFuture, selectFromValue = _a.selectFromValue, selectToValue = _a.selectToValue, onChange = _a.onChange;
    var dateInfo = useMemo(function () {
        var nowDate = dayjs();
        var nowValue = dateToValue$6(nowDate);
        var nowYm = valueToYm$4(nowValue);
        var availableYm = {
            min: valueToYm$4(minAvailableValue),
            max: valueToYm$4(maxAvailableValue),
        };
        var defaultValue = initDefaultValue
            ? initDefaultValue
            : nowYm < availableYm.min
                ? minAvailableValue
                : nowYm > availableYm.max
                    ? maxAvailableValue
                    : nowValue;
        return { nowDate: nowDate, nowValue: nowValue, nowYm: nowYm, availableYm: availableYm, defaultValue: defaultValue };
    }, [initDefaultValue, maxAvailableValue, minAvailableValue]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var currentYear = value ? value.year : dateInfo.defaultValue.year;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var months = useMemo(function () {
        var newMonths = [];
        var range = !!selectFromValue || !!selectToValue;
        var startYm = selectFromValue ? valueToYm$4(selectFromValue) : value ? valueToYm$4(value) : 0;
        var endYm = selectToValue ? valueToYm$4(selectToValue) : value ? valueToYm$4(value) : 0;
        for (var i = 1; i <= 12; i += 1) {
            var ym = currentYear * 100 + i;
            newMonths.push({
                month: i,
                range: range,
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
    var handleMonthChange = useCallback(function (month) {
        onChange({ year: currentYear, month: month });
    }, [currentYear, onChange]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledContainer$1, { className: 'PrivateMonthPickerMonthList', container: true }, months.map(function (info) { return (React.createElement(PrivateMonthPickerMonth, { key: info.month, month: info.month, range: info.range, isDefault: info.isDefault, active: info.active, selected: info.selected, selectedStart: info.selectedStart, selectedEnd: info.selectedEnd, selectedTemp: info.selectedTemp, disabled: info.disabled, onClick: handleMonthChange })); })));
};
/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/
var valueToYm$4 = function (v) { return v.year * 100 + v.month; };
var dateToValue$6 = function (v) { return ({ year: v.year(), month: v.month() + 1 }); };var StyledContainer = styled('div')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  .PrivateYearPickerYearList {\n    max-height: 130px;\n  }\n"], ["\n  .PrivateYearPickerYearList {\n    max-height: 130px;\n  }\n"])));
var TitleContainer = styled('div')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton = styled(IconButton)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"], ["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var StyledYearMonthError = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"], ["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.error.main;
});
var templateObject_1$3, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5;var valueToDate$4 = function (v) { return dayjs("".concat(v.year, "-").concat(v.month, "-01")); };
var valueToYm$3 = function (v) { return v.year * 100 + v.month; };
var dateToValue$5 = function (v) { return ({ year: v.year(), month: v.month() + 1 }); };var DEFAULT_MIN_VALUE$3 = {
    year: 2020,
    month: 1,
};
var DEFAULT_MAX_VALUE$3 = {
    year: 2050,
    month: 12,
};
var PrivateMonthPicker = function (_a) {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = _a.value, initValue = _b === void 0 ? null : _b, _c = _a.minValue, minValue = _c === void 0 ? DEFAULT_MIN_VALUE$3 : _c, _d = _a.maxValue, maxValue = _d === void 0 ? DEFAULT_MAX_VALUE$3 : _d, disablePast = _a.disablePast, disableFuture = _a.disableFuture, selectFromValue = _a.selectFromValue, selectToValue = _a.selectToValue, onChange = _a.onChange;
    var _e = useAutoUpdateState(initValue), value = _e[0], setValue = _e[1];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var dateInfo = useMemo(function () {
        var nowValue = dateToValue$5(dayjs());
        var nowYm = valueToYm$3(nowValue);
        var minAvailableValue;
        if (disablePast) {
            var minYm = valueToYm$3(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        var minAvailableYm = valueToYm$3(minAvailableValue);
        var maxAvailableValue;
        if (disableFuture) {
            var maxYm = valueToYm$3(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        var maxAvailableYm = valueToYm$3(maxAvailableValue);
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
    var displayInfo = useMemo(function () {
        var displayValue;
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
        var displayValueDate = valueToDate$4(displayValue);
        var displayValueYm = displayValue.year * 100 + displayValue.month;
        var displayValueError = displayValueYm < dateInfo.available.min.ym || displayValueYm > dateInfo.available.max.ym;
        return { value: displayValue, date: displayValueDate, ym: displayValueYm, error: displayValueError };
    }, [dateInfo, selectFromValue, selectToValue, value]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleYearChange = useCallback(function (year) {
        var newValue = __assign(__assign({}, displayInfo.value), { year: year });
        var valueYm = valueToYm$3(newValue);
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
    var handleMonthChange = useCallback(function (newValue) {
        setValue(newValue);
        onChange(newValue, true);
    }, [onChange, setValue]);
    var handlePrevClick = useCallback(function () {
        var newValue = dateToValue$5(displayInfo.date.subtract(1, 'months'));
        setValue(newValue);
        onChange(newValue, false);
    }, [displayInfo, onChange, setValue]);
    var handleNextClick = useCallback(function () {
        var newValue = dateToValue$5(displayInfo.date.add(1, 'months'));
        setValue(newValue);
        onChange(newValue, false);
    }, [displayInfo, onChange, setValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var prevBtnDisabled = displayInfo.ym <= dateInfo.available.min.ym;
    var nextBtnDisabled = displayInfo.ym >= dateInfo.available.max.ym;
    var selectFromYear = selectFromValue ? selectFromValue.year : undefined;
    var selectToYear = selectToValue ? selectToValue.year : undefined;
    return (React.createElement(StyledContainer, { className: 'PrivateMonthPicker' },
        React.createElement(TitleContainer, null,
            React.createElement(StyledIconButton, { disabled: prevBtnDisabled, onClick: handlePrevClick },
                React.createElement(PIcon, null, "KeyboardArrowLeft")),
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
                React.createElement(PIcon, null, "KeyboardArrowRight"))),
        React.createElement("div", null,
            React.createElement(PrivateYearPicker, { value: (value === null || value === void 0 ? void 0 : value.year) || null, minYear: minValue.year, maxYear: maxValue.year, disablePast: disablePast, disableFuture: disableFuture, onChange: handleYearChange, hideHeader: true, selectFromYear: selectFromYear, selectToYear: selectToYear })),
        React.createElement("div", { style: { borderTop: '1px solid #efefef' } },
            React.createElement(PrivateMonthPickerMonthList, { value: value, defaultValue: selectFromValue || selectToValue, minAvailableValue: dateInfo.available.min.value, maxAvailableValue: dateInfo.available.max.value, disablePast: disablePast, disableFuture: disableFuture, selectFromValue: selectFromValue, selectToValue: selectToValue, onChange: handleMonthChange }))));
};var StyledDiv = styled(Grid)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  width: 30px;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  background-color: #fafafa;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  width: 30px;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  background-color: #fafafa;\n"])));
var StyledActionContainer = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"], ["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton = styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));
var templateObject_1$2, templateObject_2, templateObject_3;var DEFAULT_MIN_VALUE$2 = {
    year: 2020,
    month: 1,
};
var DEFAULT_MAX_VALUE$2 = {
    year: 2050,
    month: 12,
};
var PrivateMonthRangePicker = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var value = _a.value, _b = _a.minValue, minValue = _b === void 0 ? DEFAULT_MIN_VALUE$2 : _b, _c = _a.maxValue, maxValue = _c === void 0 ? DEFAULT_MAX_VALUE$2 : _c, disablePast = _a.disablePast, disableFuture = _a.disableFuture, initOnChange = _a.onChange;
    var onChangeRef = useAutoUpdateLayoutRef(initOnChange);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var dateInfo = useMemo(function () {
        var nowDate = dayjs();
        var nowValue = dateToValue$4(nowDate);
        var nowYm = valueToYm$2(nowValue);
        var minAvailableValue;
        if (disablePast) {
            var minYm = valueToYm$2(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        var minAvailableYm = valueToYm$2(minAvailableValue);
        var maxAvailableValue;
        if (disableFuture) {
            var maxYm = valueToYm$2(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        var maxAvailableYm = valueToYm$2(maxAvailableValue);
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
    var getFinalValue = useCallback(function (v, selectType) {
        var finalValue = [v[0], v[1]];
        if (finalValue[0]) {
            var startYm = valueToYm$2(finalValue[0]);
            if (startYm < dateInfo.available.min.ym) {
                finalValue[0] = dateInfo.available.min.value;
            }
            else if (startYm > dateInfo.available.max.ym) {
                finalValue[0] = dateInfo.available.max.value;
            }
        }
        if (finalValue[1]) {
            var endYm = valueToYm$2(finalValue[1]);
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
    var getActionButton = useCallback(function (fromDate, toDate, label, strict) {
        var fromValue = dateToValue$4(fromDate);
        var fromYm = valueToYm$2(fromValue);
        var toValue = dateToValue$4(toDate);
        var toYm = valueToYm$2(toValue);
        if (strict && (fromYm < dateInfo.available.min.ym || toYm > dateInfo.available.max.ym)) {
            return undefined;
        }
        else if (!strict &&
            ((fromYm < dateInfo.available.min.ym && toYm < dateInfo.available.min.ym) ||
                (fromYm > dateInfo.available.max.ym && toYm > dateInfo.available.max.ym))) {
            return undefined;
        }
        else {
            return (React.createElement(StyledActionButton, { variant: 'text', onClick: function () { return onChangeRef.current(getFinalValue([fromValue, toValue], 'end'), 'end', true); } }, label));
        }
    }, [getFinalValue, dateInfo, onChangeRef]);
    var actionButtons = useMemo(function () {
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
    var handleStartMonthChange = useCallback(function (v, isMonthSelect) {
        var finalValue = getFinalValue([v, value[1]], 'start');
        onChangeRef.current(finalValue, 'start', isMonthSelect);
    }, [getFinalValue, onChangeRef, value]);
    var handleEndMonthChange = useCallback(function (v, isMonthSelect) {
        var finalValue = getFinalValue([value[0], v], 'end');
        onChangeRef.current(finalValue, 'end', isMonthSelect);
    }, [getFinalValue, onChangeRef, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement("div", null,
        React.createElement(Grid, { container: true, className: 'PrivateMonthRangePicker' },
            React.createElement(Grid, null,
                React.createElement(PrivateMonthPicker, { value: value[0], selectToValue: value[1], minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, onChange: handleStartMonthChange })),
            React.createElement(StyledDiv, null, "~"),
            React.createElement(Grid, null,
                React.createElement(PrivateMonthPicker, { value: value[1], selectFromValue: value[0], minValue: minValue, maxValue: maxValue, disablePast: disablePast, disableFuture: disableFuture, onChange: handleEndMonthChange }))),
        actionButtons));
};
/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/
var valueToYm$2 = function (v) { return v.year * 100 + v.month; };
var dateToValue$4 = function (v) { return ({ year: v.year(), month: v.month() + 1 }); };var PFormDatePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'PFormDatePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: __assign(__assign({}, otherFormState), { onAddValueItem: handleAddValueItem }) },
        React.createElement(PrivateDatePicker, __assign({ className: classNames(className, 'PFormDatePicker') }, props, { ref: ref, type: 'date' }))));
});
PFormDatePicker.displayName = 'PFormDatePicker';var PFormDateTimePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'PFormDateTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: __assign(__assign({}, otherFormState), { onAddValueItem: handleAddValueItem }) },
        React.createElement(PrivateDateTimePicker, __assign({ className: classNames(className, 'PFormDateTimePicker') }, props, { ref: ref, type: 'date_time' }))));
});
PFormDateTimePicker.displayName = 'PFormDateTimePicker';var PFormTimePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest(_b, ["onAddValueItem"]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'PFormTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormContextProvider, { value: __assign(__assign({}, otherFormState), { onAddValueItem: handleAddValueItem }) },
        React.createElement(PrivateDateTimePicker, __assign({ className: classNames(className, 'PFormTimePicker') }, props, { ref: ref, type: 'time' }))));
});
PFormTimePicker.displayName = 'PFormTimePicker';insertStyle(".PFormDateRangePickerTooltipPicker .MuiPickersCalendarHeader-root{display:none}.PFormDateRangePickerTooltipPicker .MuiDayPicker-header>span{margin:0}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content{min-width:292px}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root>div{width:292px}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root>div .MuiCalendarPicker-root{width:292px}.PFormDateRangePickerTooltipPicker .selected-bg{display:none;position:absolute}.PFormDateRangePickerTooltipPicker .selected-bg.sel{display:block;position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(66,165,245,.6)}.PFormDateRangePickerTooltipPicker .selected-bg.sel.ui-start,.PFormDateRangePickerTooltipPicker .selected-bg.sel.s-start{border-top-left-radius:50%;border-bottom-left-radius:50%}.PFormDateRangePickerTooltipPicker .selected-bg.sel.ui-end,.PFormDateRangePickerTooltipPicker .selected-bg.sel.s-end{border-top-right-radius:50%;border-bottom-right-radius:50%}.PFormDateRangePickerTooltipPicker .selected-bg.sel~.MuiPickersDay-root{border:0}.PFormDateRangePickerTooltipPicker .selected-bg.sel~.MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected){background-color:rgba(0,0,0,0)}.PFormDateRangePickerTooltipPicker .focused-bg{display:none;position:absolute}.PFormDateRangePickerTooltipPicker .focused-bg.focused{display:block;position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid #efefef;border-left:0;border-right:0}.PFormDateRangePickerTooltipPicker .focused-bg.focused.ui-start,.PFormDateRangePickerTooltipPicker .focused-bg.focused.f-start{border-left:2px solid #efefef;border-top-left-radius:50%;border-bottom-left-radius:50%}.PFormDateRangePickerTooltipPicker .focused-bg.focused.ui-end,.PFormDateRangePickerTooltipPicker .focused-bg.focused.f-end{border-right:2px solid #efefef;border-top-right-radius:50%;border-bottom-right-radius:50%}.PFormDateRangePickerTooltipPicker .focused-bg.focused~.MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected){background-color:rgba(0,0,0,0)}");var PFormDateRangePickerTooltipPicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var selectType = _a.selectType, initValue = _a.value, focusedDate = _a.focusedDate, month = _a.month, disableFuture = _a.disableFuture, disablePast = _a.disablePast, minDate = _a.minDate, maxDate = _a.maxDate, onValueChange = _a.onValueChange, onMouseEnterPickersDay = _a.onMouseEnterPickersDay, onMonthChange = _a.onMonthChange;
    var leftArrowOnClickRef = useRef(undefined);
    var rightArrowOnClickRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(null), activeMonthValue = _b[0], setActiveMonthValue = _b[1];
    var LeftArrowButton = useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React.createElement(IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React.createElement(IconButton, __assign({}, props));
        };
        return ArrowButton;
    })[0];
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var value = useMemo(function () { return (initValue ? initValue : [null, null]); }, [initValue]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        setActiveMonthValue(null);
    }, [selectType]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var getDateVal = useCallback(function (date) {
        return Number(date.format('YYYYMMDD'));
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var baseClassNames = useMemo(function () {
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
    var selectedClassNames = useMemo(function () {
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
    var focusedClassNames = useMemo(function () {
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
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var previousMonth = useCallback(function () {
        if (leftArrowOnClickRef.current) {
            leftArrowOnClickRef.current({});
        }
    }, []);
    var nextMonth = useCallback(function () {
        if (rightArrowOnClickRef.current) {
            rightArrowOnClickRef.current({});
        }
    }, []);
    var activeMonth = useCallback(function (month) {
        setActiveMonthValue(month);
    }, []);
    var handleRenderDay = useCallback(function (props) {
        var startDate = value[0];
        var endDate = value[1];
        var dateVal = getDateVal(props.day);
        var baseClassName = baseClassNames[dateVal];
        var selectedClassName = selectedClassNames[dateVal];
        var focusedClassName = focusedClassNames[dateVal];
        return (React.createElement("div", { key: props.key, style: { position: 'relative' } },
            React.createElement("div", { className: classNames('focused-bg', baseClassName, focusedClassName) }),
            React.createElement("div", { className: classNames('selected-bg', baseClassName, selectedClassName) }),
            React.createElement(PickersDay, __assign({}, props, { disableMargin: true, selected: props.day.isSame(startDate, 'date') || props.day.isSame(endDate, 'date'), onMouseEnter: value[0] || value[1] ? function () { return onMouseEnterPickersDay && onMouseEnterPickersDay(props.day); } : undefined }))));
    }, [value, getDateVal, baseClassNames, selectedClassNames, focusedClassNames, onMouseEnterPickersDay]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        previousMonth: previousMonth,
        nextMonth: nextMonth,
        activeMonth: activeMonth,
    }); }, [activeMonth, nextMonth, previousMonth]);
    useForwardLayoutRef(ref, commands);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StaticDatePicker, { className: 'PFormDateRangePickerTooltipPicker', displayStaticWrapperAs: 'desktop', slots: {
            previousIconButton: LeftArrowButton,
            nextIconButton: RightArrowButton,
            day: handleRenderDay,
        }, value: activeMonthValue, referenceDate: month, disableFuture: disableFuture, disablePast: disablePast, minDate: minDate, maxDate: maxDate, onChange: function (newValue) { return onValueChange && onValueChange(selectType, newValue); }, 
        // renderDay={handleRenderDay}
        // renderInput={(params) => <TextField {...params} />}
        // format='YYYY-MM-DD HH:mm:ss'
        onMonthChange: function (month) {
            if (onMonthChange)
                onMonthChange(month);
            setActiveMonthValue(null);
        } }));
});insertStyle(".PFormDateRangePickerTooltipPickerContainer{display:inline-block;position:relative}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap{position:absolute;top:15px;left:0;right:0}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap>div:first-of-type{padding-left:20px}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap>div:last-child{padding-right:20px;text-align:right}.PFormDateRangePickerTooltipPickerContainer .month-title{text-align:center;padding-top:13px;padding-bottom:10px}.PFormDateRangePickerTooltipPickerContainer .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PFormDateRangePickerTooltipPickerContainer .month-title button:not(.active){color:unset}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap{position:relative}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select,.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select{position:absolute;left:0;right:0;top:0;bottom:0;border-top:1px solid #efefef;padding-top:15px;background-color:#fff}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.today:not(.selected),.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.today:not(.selected){border:1px solid rgba(0,0,0,.1)}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected),.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected){background-color:#f5f5f5}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected):hover,.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected):hover{background-color:#e5e5e5}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select{overflow-y:scroll}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button{font-size:14px;font-weight:400;border-radius:18px}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button{font-size:15px;font-weight:400;border-radius:18px}.PFormDateRangePickerTooltipPickerContainer .action-buttons button{min-width:0;color:unset}.PFormDateRangePickerTooltipPickerContainer .action-buttons button:not(:first-of-type){margin-left:5px}.PFormDateRangePickerTooltipPickerContainer .action-buttons button.disabled{color:rgba(0,0,0,.5)}");var YEARS = new Array(200).fill(0);
for (var i = 0; i < 200; i += 1) {
    YEARS[i] = 1900 + i;
}
var MONTHS = new Array(12).fill(0);
for (var i = 0; i < 12; i += 1) {
    MONTHS[i] = i;
}
var PFormDateRangePickerTooltipPickerContainer = React.forwardRef(function (_a, ref) {
    var selectType = _a.selectType, value = _a.value, _b = _a.calendarCount, calendarCount = _b === void 0 ? 2 : _b, months = _a.months, disablePast = _a.disablePast, disableFuture = _a.disableFuture, maxDate = _a.maxDate, minDate = _a.minDate, onGetActionButtons = _a.onGetActionButtons, onChange = _a.onChange, onValueChange = _a.onValueChange, onMonthsChange = _a.onMonthsChange;
    var theme = useTheme();
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var datePicker1Ref = useRef(null);
    var datePicker2Ref = useRef(null);
    var datePicker3Ref = useRef(null);
    var yearSelectRef = useRef(null);
    var activeYearBtnRef = useRef(null);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _c = useState(), focusedDate = _c[0], setFocusedDate = _c[1];
    var _d = useState(0), yearMonthSelectIndex = _d[0], setYearMonthSelectIndex = _d[1];
    var _e = useState(false), yearSelectOpen = _e[0], setYearSelectOpen = _e[1];
    var _f = useState(false), monthSelectOpen = _f[0], setMonthSelectOpen = _f[1];
    var customDatePickerProps = useMemo(function () { return ({ selectType: selectType, value: value, minDate: minDate, maxDate: maxDate, disableFuture: disableFuture, disablePast: disablePast, onValueChange: onValueChange }); }, [selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange]);
    var availableDate = useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [minDate, maxDate, disablePast, disableFuture]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (yearSelectOpen) {
            setTimeout(function () {
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
    var previousMonth = useCallback(function () {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.previousMonth();
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.previousMonth();
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.previousMonth();
    }, []);
    var nextMonth = useCallback(function () {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.nextMonth();
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.nextMonth();
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.nextMonth();
    }, []);
    var activeMonth = useCallback(function (month) {
        var _a, _b, _c;
        (_a = datePicker1Ref.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
        (_b = datePicker2Ref.current) === null || _b === void 0 ? void 0 : _b.activeMonth(month.add(1, 'month'));
        (_c = datePicker3Ref.current) === null || _c === void 0 ? void 0 : _c.activeMonth(month.add(2, 'month'));
    }, []);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleFirstDatePickerMonthChange = useCallback(function (date) {
        if (onMonthsChange) {
            onMonthsChange([date, date.add(1, 'month'), date.add(2, 'month')]);
        }
    }, [onMonthsChange]);
    var handleYearSelectClick = useCallback(function (index) {
        if (yearSelectOpen) {
            setYearSelectOpen(false);
            if (index !== yearMonthSelectIndex) {
                setTimeout(function () {
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
    var handleMonthSelectClick = useCallback(function (index) {
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
    var handleYearSelect = useCallback(function (year) {
        activeMonth(months[yearMonthSelectIndex].set('year', year).subtract(yearMonthSelectIndex, 'month'));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
    }, [activeMonth, months, yearMonthSelectIndex]);
    var handleMonthSelect = useCallback(function (m) {
        activeMonth(months[yearMonthSelectIndex].set('month', m).subtract(yearMonthSelectIndex, 'month'));
        setMonthSelectOpen(false);
    }, [activeMonth, months, yearMonthSelectIndex]);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    useForwardLayoutRef(ref, useMemo(function () { return ({ previousMonth: previousMonth, nextMonth: nextMonth, activeMonth: activeMonth }); }, [activeMonth, nextMonth, previousMonth]));
    /********************************************************************************************************************
     * Render Function
     * ******************************************************************************************************************/
    var getMonthTitle = useCallback(function (index) {
        return (React.createElement("div", { className: 'month-title' },
            React.createElement(Button, { variant: 'text', className: yearSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: function () { return handleYearSelectClick(index); } },
                months[index].format('YYYY년'),
                React.createElement(Icon, null, yearSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down')),
            React.createElement(Button, { variant: 'text', className: monthSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: function () { return handleMonthSelectClick(index); } },
                months[index].format('M월'),
                React.createElement(Icon, null, monthSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down'))));
    }, [yearSelectOpen, yearMonthSelectIndex, months, monthSelectOpen, handleYearSelectClick, handleMonthSelectClick]);
    /********************************************************************************************************************
     * Render - Function
     * ******************************************************************************************************************/
    var getActionButton = useCallback(function (startDate, endDate, label) {
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
        return (React.createElement(Button, { className: disabled ? 'disabled' : undefined, variant: 'text', disabled: disabled, onClick: function () {
                onChange([finalStartDate, finalEndDate]);
            } }, label));
    }, [onChange, availableDate]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var actionButtons = useMemo(function () {
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
    return (React.createElement("div", { className: 'PFormDateRangePickerTooltipPickerContainer' },
        React.createElement(Grid, { container: true, direction: 'column' },
            !yearSelectOpen && !monthSelectOpen && (React.createElement(Grid, null,
                React.createElement(Grid, { container: true, className: 'month-change-arrow-wrap' },
                    React.createElement(Grid, { size: { xs: 6 } },
                        React.createElement(IconButton, { onClick: previousMonth },
                            React.createElement(Icon, null, "keyboard_arrow_left"))),
                    React.createElement(Grid, { size: { xs: 6 } },
                        React.createElement(IconButton, { onClick: nextMonth },
                            React.createElement(Icon, null, "keyboard_arrow_right")))))),
            React.createElement(Grid, { onMouseLeave: function () { return setFocusedDate(undefined); } },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", { style: { flex: 1 } }, getMonthTitle(0)),
                    React.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(1)),
                    Number(calendarCount) >= 3 && (React.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(2)))),
                React.createElement("div", { className: 'date-picker-wrap' },
                    React.createElement(Grid, { container: true, flexWrap: 'nowrap' },
                        React.createElement(Grid, null,
                            React.createElement(PFormDateRangePickerTooltipPicker, __assign({}, customDatePickerProps, { ref: datePicker1Ref, focusedDate: focusedDate, month: months[0], onMouseEnterPickersDay: setFocusedDate, onMonthChange: handleFirstDatePickerMonthChange }))),
                        React.createElement(Grid, { style: { borderLeft: '1px solid #efefef' } },
                            React.createElement(PFormDateRangePickerTooltipPicker, __assign({}, customDatePickerProps, { ref: datePicker2Ref, focusedDate: focusedDate, month: months[1], onMouseEnterPickersDay: setFocusedDate }))),
                        Number(calendarCount) >= 3 && (React.createElement(Grid, { style: { borderLeft: '1px solid #efefef' } },
                            React.createElement(PFormDateRangePickerTooltipPicker, __assign({}, customDatePickerProps, { ref: datePicker3Ref, focusedDate: focusedDate, month: months[2], onMouseEnterPickersDay: setFocusedDate }))))),
                    yearSelectOpen && (React.createElement("div", { ref: yearSelectRef, className: 'year-select' },
                        React.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS.map(function (y) {
                            var _a;
                            var today = dayjs();
                            var isToday = y === today.year();
                            var isActive = y === months[yearMonthSelectIndex].year();
                            var isSelected = y === ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year());
                            var disabled = !isDateAvailable(dayjs(y.toString(), 'YYYY'), availableDate, 'year');
                            return (React.createElement(Grid, { key: y, size: { xs: 2 } },
                                React.createElement(Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
                                        backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                                        color: isSelected ? 'white' : 'unset',
                                        ':hover': {
                                            backgroundColor: isSelected
                                                ? darken(theme.palette.primary.main, 0.2)
                                                : darken('#fff', 0.1),
                                        },
                                    }, onClick: function () { return handleYearSelect(y); } }, y)));
                        })))),
                    monthSelectOpen && (React.createElement("div", { className: 'month-select' },
                        React.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS.map(function (m) {
                            var _a, _b;
                            var today = dayjs();
                            var isToday = today.year() === months[yearMonthSelectIndex].year() && m === today.month();
                            var isActive = m === months[yearMonthSelectIndex].month();
                            var isSelected = ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year()) === months[yearMonthSelectIndex].year() &&
                                m === ((_b = value[yearMonthSelectIndex]) === null || _b === void 0 ? void 0 : _b.month());
                            var ym = months[yearMonthSelectIndex].year() * 100 + (m + 1);
                            var disabled = !isDateAvailable(dayjs(ym.toString(), 'YYYYMM'), availableDate, 'month');
                            return (React.createElement(Grid, { key: m, size: { xs: 4 } },
                                React.createElement(Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
                                        backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                                        color: isSelected ? 'white' : 'unset',
                                        ':hover': {
                                            backgroundColor: isSelected
                                                ? darken(theme.palette.primary.main, 0.2)
                                                : darken('#fff', 0.1),
                                        },
                                    }, onClick: function () { return handleMonthSelect(m); } },
                                    m + 1,
                                    "\uC6D4")));
                        })))))),
            React.createElement(Grid, { className: 'action-buttons', style: { borderTop: '1px solid #efefef', padding: 10, textAlign: 'right' } }, actionButtons))));
});var DEFAULT_VALUE$2 = [null, null];
var getFinalValue$6 = function (value) {
    return value || DEFAULT_VALUE$2;
};var DEFAULT_FORMAT$2 = 'YYYY-MM-DD';
var PFormDateRangePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, initValue = _a.value, initData = _a.data, fromLabel = _a.fromLabel, fromLabelIcon = _a.fromLabelIcon, toLabel = _a.toLabel, toLabelIcon = _a.toLabelIcon, _b = _a.calendarCount, calendarCount = _b === void 0 ? 2 : _b, _c = _a.format, format = _c === void 0 ? DEFAULT_FORMAT$2 : _c, _d = _a.formValueFormat, formValueFormat = _d === void 0 ? DEFAULT_FORMAT$2 : _d, allowSingleSelect = _a.allowSingleSelect, required = _a.required, requiredStart = _a.requiredStart, requiredEnd = _a.requiredEnd, readOnly = _a.readOnly, readOnlyStart = _a.readOnlyStart, readOnlyEnd = _a.readOnlyEnd, enableKeyboardInput = _a.enableKeyboardInput, initDisabled = _a.disabled, inputWidth = _a.inputWidth, exceptValue = _a.exceptValue, initError = _a.error, helperText = _a.helperText, _e = _a.formValueFromNameSuffix, formValueFromNameSuffix = _e === void 0 ? '_from' : _e, _f = _a.formValueToNameSuffix, formValueToNameSuffix = _f === void 0 ? '_to' : _f, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, startAdornment = _a.startAdornment, startStartAdornment = _a.startStartAdornment, endStartAdornment = _a.endStartAdornment, endAdornment = _a.endAdornment, startEndAdornment = _a.startEndAdornment, endEndAdornment = _a.endEndAdornment, disablePast = _a.disablePast, disableFuture = _a.disableFuture, minDate = _a.minDate, maxDate = _a.maxDate, initHidden = _a.hidden, _g = _a.align, align = _g === void 0 ? 'center' : _g, onGetActionButtons = _a.onGetActionButtons, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _h = useFormState(), formVariant = _h.variant, formSize = _h.size, formColor = _h.color, formFocused = _h.focused, formLabelShrink = _h.labelShrink, formFullWidth = _h.fullWidth, formDisabled = _h.disabled, formColWithHelperText = _h.formColWithHelperText, onAddValueItem = _h.onAddValueItem, onRemoveValueItem = _h.onRemoveValueItem, onValueChange = _h.onValueChange, onValueChangeByUser = _h.onValueChangeByUser, onRequestSearchSubmit = _h.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var containerRef = useRef(null);
    var startDateTextFieldRef = useRef(undefined);
    var endDateTextFieldRef = useRef(undefined);
    var closeTimeoutRef = useRef(undefined);
    var mouseDownTimeRef = useRef(undefined);
    var startInputDatePickerErrorRef = useRef(null);
    var endInputDatePickerErrorRef = useRef(null);
    var openValueRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _j = useAutoUpdateState(initError), error = _j[0], setError = _j[1];
    var _k = useState(), errorHelperText = _k[0], setErrorHelperText = _k[1];
    var _l = useState(false), fromError = _l[0], setFromError = _l[1];
    var _m = useState(), fromErrorHelperText = _m[0], setFromErrorHelperText = _m[1];
    var _o = useState(false), toError = _o[0], setToError = _o[1];
    var _p = useState(), toErrorHelperText = _p[0], setToErrorHelperText = _p[1];
    var _q = useAutoUpdateRefState(initData), dataRef = _q[0], setData = _q[2];
    var _r = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _r[0], disabled = _r[1], setDisabled = _r[2];
    var _s = useAutoUpdateRefState(initHidden), hiddenRef = _s[0], hidden = _s[1], setHidden = _s[2];
    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/
    var focus = useCallback(function () {
        var _a;
        (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [startDateTextFieldRef]);
    var focusValidate = useCallback(function () {
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
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var setFromErrorErrorHelperText = useCallback(function (error, fromErrorHelperText) {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    var setToErrorErrorHelperText = useCallback(function (error, toErrorHelperText) {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
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
        if (notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
            setFromErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
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
    var activeMonth = useCallback(function (month) {
        var _a;
        setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
    }, [containerRef]);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _t = useState(false), open = _t[0], setOpen = _t[1];
    var _u = useState('start'), selectType = _u[0], setSelectType = _u[1];
    var _v = useState(function () {
        var now = dayjs();
        return [now, now.add(1, 'month'), now.add(2, 'month')];
    }), months = _v[0], setMonths = _v[1];
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    var _w = useAutoUpdateRefState(initValue, getFinalValue$6), valueRef = _w[0], value = _w[1], _setValue = _w[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    useFirstSkipEffect(function () {
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
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (newValue) {
        updateValue(newValue);
        setOpen(false);
        setFromErrorErrorHelperText(false, undefined);
        setToErrorErrorHelperText(false, undefined);
    }, [setFromErrorErrorHelperText, setToErrorErrorHelperText, updateValue]);
    var handleValueChange = useCallback(function (selectType, newValue, fromInput) {
        var _a;
        var finalValue;
        switch (selectType) {
            case 'start':
                if ((_a = value[1]) === null || _a === void 0 ? void 0 : _a.isBefore(newValue)) {
                    finalValue = [newValue, null];
                    if (!fromInput) {
                        setTimeout(function () {
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
                            setTimeout(function () {
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
                            setTimeout(function () {
                                onRequestSearchSubmit(name, finalValue);
                            });
                        }
                    }
                    else {
                        setTimeout(function () {
                            var _a;
                            (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                        });
                    }
                    setToErrorErrorHelperText(false, undefined);
                }
                break;
        }
        updateValue(finalValue);
        setTimeout(function () {
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
    var handleInputDatePickerChange = useCallback(function (selectType, newValue) {
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
    var handleContainerFocus = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = useCallback(function () {
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
    var handleContainerMouseDown = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    var handleInputDatePickerFocus = useCallback(function (selectType) {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormDateRangePicker'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue$6(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
        getData: function () { return dataRef.current; },
        setData: setData,
        getFromValue: function () { return valueRef.current[0]; },
        setFromValue: function (value) { return updateValue([value, valueRef.current[1]]); },
        getToValue: function () { return valueRef.current[1]; },
        setToValue: function (value) { return updateValue([valueRef.current[0], value]); },
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
        getFormValueFormat: function () { return formValueFormat; },
        getFormValueFromNameSuffix: function () { return formValueFromNameSuffix; },
        getFormValueToNameSuffix: function () { return formValueToNameSuffix; },
        getFormValueFromName: function () {
            return "".concat(name).concat(formValueFromNameSuffix);
        },
        getFormValueToName: function () {
            return "".concat(name).concat(formValueToNameSuffix);
        },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var inputDatePickerProps = {
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
    };
    var inputStyle = inputWidth != null ? { width: inputWidth } : { width: fullWidth ? undefined : 150 };
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
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
                    React.createElement(Grid, { container: true, alignItems: 'center' },
                        React.createElement(Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, value: value[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || (open && selectType === 'start'), required: required || requiredStart, readOnly: readOnly || readOnlyStart, enableKeyboardInput: enableKeyboardInput, icon: startIcon || icon, startAdornment: startStartAdornment || startAdornment, endAdornment: startEndAdornment || endAdornment, inputRef: startDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('start', newValue); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); } }))),
                        React.createElement(Grid, { sx: { px: 1 } }, "~"),
                        React.createElement(Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, value: value[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || (open && selectType === 'end'), required: required || requiredEnd, readOnly: readOnly || readOnlyEnd, enableKeyboardInput: enableKeyboardInput, icon: endIcon || icon, startAdornment: endStartAdornment || startAdornment, endAdornment: endEndAdornment || endAdornment, inputRef: endDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('end', newValue); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); } }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
PFormDateRangePicker.displayName = 'PFormDateRangePicker';var LinkDialog = function (_a) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var open = _a.open, onConfirm = _a.onConfirm, onCancel = _a.onCancel, onClose = _a.onClose;
    var inputRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(''), value = _b[0], setValue = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (!open) {
            setValue('');
        }
    }, [open]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleSubmit = useCallback(function () {
        var _a, _b;
        if ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.validate()) {
            onConfirm && onConfirm(value);
            onClose && onClose();
        }
        else {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [value, onConfirm, onClose]);
    var handleCancel = useCallback(function () {
        onCancel && onCancel();
        onClose && onClose();
    }, [onCancel, onClose]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Dialog, { className: 'color-primary', open: !!open, maxWidth: 'sm', fullWidth: true, onClose: function (e, reason) {
            if (reason === 'backdropClick') {
                if (empty(value)) {
                    onClose && onClose();
                }
            }
        } },
        React.createElement(DialogTitle, null, "\uD30C\uC77C \uB9C1\uD06C"),
        React.createElement(DialogContent, null,
            React.createElement(Box, null,
                React.createElement("div", null, "\uD30C\uC77C\uC758 \uB9C1\uD06C URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),
                React.createElement(PFormUrl, { ref: function (ref) {
                        if (inputRef.current == null && ref !== null) {
                            ref.focus();
                        }
                        inputRef.current = ref;
                    }, name: 'form-file-link-url', label: '\uB9C1\uD06C URL', value: value, required: true, fullWidth: true, style: { marginTop: 15 }, onChange: setValue }))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { variant: 'text', onClick: handleCancel }, "\uCDE8\uC18C"),
            React.createElement(Button, { variant: 'text', onClick: handleSubmit }, "\uD655\uC778"))));
};var StyledPButton = styled(PButton)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  min-width: 0;\n\n  &.input-file-btn {\n    padding: 0 !important;\n    position: relative;\n\n    .PFlexRowBox {\n      height: 100%;\n      label {\n        cursor: pointer;\n        display: flex;\n        flex: 1;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center;\n        padding: 0 10px;\n\n        .PIcon {\n          margin-right: 0.2em;\n        }\n      }\n    }\n  }\n\n  &.hidden-label.input-file-btn .PFlexRowBox label .PIcon {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  &.MuiButton-outlined {\n    &:first-of-type:not(:last-of-type) {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    &:last-of-type:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:first-of-type):not(:last-of-type) {\n      border-right: 0;\n      border-radius: 0;\n    }\n  }\n"], ["\n  min-width: 0;\n\n  &.input-file-btn {\n    padding: 0 !important;\n    position: relative;\n\n    .PFlexRowBox {\n      height: 100%;\n      label {\n        cursor: pointer;\n        display: flex;\n        flex: 1;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center;\n        padding: 0 10px;\n\n        .PIcon {\n          margin-right: 0.2em;\n        }\n      }\n    }\n  }\n\n  &.hidden-label.input-file-btn .PFlexRowBox label .PIcon {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  &.MuiButton-outlined {\n    &:first-of-type:not(:last-of-type) {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    &:last-of-type:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:first-of-type):not(:last-of-type) {\n      border-right: 0;\n      border-radius: 0;\n    }\n  }\n"])));
var templateObject_1$1;var getFinalValue$5 = function (value) { return value || ''; };insertStyle(".PFormFile .control-wrap{display:inline-flex}.PFormFile .control-wrap .file-name-wrap .file-name{min-width:350px}.PFormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root{padding-right:7px}.PFormFile .control-wrap .input-file{display:none}.PFormFile .control-wrap .input-file-wrap{display:flex}.PFormFile .control-wrap .input-file-wrap .input-file-btn:not(.hidden-label) .PIcon{margin-left:-3px}.PFormFile.full-width .control-wrap{display:flex}.PFormFile.full-width .control-wrap .file-name-wrap{flex:1}.PFormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root{padding-right:0}.PFormFile:not(.hide-file-name).variant-outlined .form-file-btn label,.PFormFile:not(.hide-file-name).variant-filled .form-file-btn label{padding-top:10px;padding-bottom:10px}.PFormFile:not(.hide-file-name).variant-standard .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile:not(.hide-file-name).size-small .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn{height:44px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn{height:26px}.PFormFile.hide-file-name.with-label.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-filled .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn{height:24px}.PFormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn{height:31px}.PFormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn{height:26px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-outlined .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-filled .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-standard .form-file-btn{height:28px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-outlined .form-file-btn{height:24px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-filled .form-file-btn{height:31px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-standard .form-file-btn{height:26px}");var FILE_VALUE = '';
var PFormFile = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    accept = _a.accept, hideUrl = _a.hideUrl, tabIndex = _a.tabIndex, uploadLabel = _a.uploadLabel, uploadTabIndex = _a.uploadTabIndex, hideUpload = _a.hideUpload, hideUploadLabel = _a.hideUploadLabel, linkLabel = _a.linkLabel, linkTabIndex = _a.linkTabIndex, hideLink = _a.hideLink, hideLinkLabel = _a.hideLinkLabel, removeLabel = _a.removeLabel, removeTabIndex = _a.removeTabIndex, hideRemove = _a.hideRemove, hideRemoveLabel = _a.hideRemoveLabel, maxFileSize = _a.maxFileSize, preview = _a.preview, initHidden = _a.hidden, onFile = _a.onFile, onLink = _a.onLink, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, initLabel = _a.label, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, _b = _a.value, initValue = _b === void 0 ? '' : _b, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _c = useFormState(), formVariant = _c.variant, formSize = _c.size, formColor = _c.color, formFocused = _c.focused, formLabelShrink = _c.labelShrink, formFullWidth = _c.fullWidth, formDisabled = _c.disabled, onAddValueItem = _c.onAddValueItem, onValueChange = _c.onValueChange, onRemoveValueItem = _c.onRemoveValueItem, onValueChangeByUser = _c.onValueChangeByUser;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var textFieldRef = useRef(null);
    var fileUploadBtnRef = useRef(null);
    var linkBtnRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = useState(false), isOpenLinkDialog = _f[0], setIsOpenLinkDialog = _f[1];
    var _g = useState({ open: false }), alertDialogProps = _g[0], setAlertDialogProps = _g[1];
    var _h = useAutoUpdateRefState(initData), dataRef = _h[0], setData = _h[2];
    var _j = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _j[0], disabled = _j[1], setDisabled = _j[2];
    var _k = useAutoUpdateRefState(initHidden), hiddenRef = _k[0], hidden = _k[1], setHidden = _k[2];
    /********************************************************************************************************************
     * State - width, height
     * ******************************************************************************************************************/
    var _l = useResizeDetector({ handleWidth: false }), innerRef = _l.ref, height = _l.height;
    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/
    var validate = useCallback(function (value) {
        var isEmptyValue = false;
        if (value) {
            var d = document.createElement('div');
            d.innerHTML = value;
            var text = d.textContent || d.innerText;
            isEmptyValue = empty(text.trim());
        }
        if (required && (isEmptyValue || empty(value))) {
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
    var _m = useAutoUpdateRefState(initValue, getFinalValue$5), valueRef = _m[0], value = _m[1], _setValue = _m[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var focus = useCallback(function () {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormFile'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue$5(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var fileSizeCheck = useCallback(function (file) {
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
                                    React.createElement(Typography, { color: 'error' },
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
    var handleFileChange = useCallback(function (e) {
        if (onFile) {
            var target = e.currentTarget;
            var file_1 = target.files[0];
            fileSizeCheck(file_1).then(function () {
                onFile(file_1).then(function (url) {
                    updateValue(url);
                    setTimeout(function () {
                        if (onValueChangeByUser)
                            onValueChangeByUser(name, url);
                    });
                });
            });
        }
    }, [fileSizeCheck, name, onFile, onValueChangeByUser, updateValue]);
    var handleLinkClick = useCallback(function () {
        setIsOpenLinkDialog(true);
    }, []);
    var handleRemoveClick = useCallback(function () {
        updateValue('');
        setTimeout(function () {
            if (onValueChangeByUser)
                onValueChangeByUser(name, '');
        });
    }, [name, onValueChangeByUser, updateValue]);
    var handleLinkDialogConfirm = useCallback(function (url) {
        if (onLink) {
            onLink(url).then(function (finalUrl) {
                updateValue(finalUrl);
                setTimeout(function () {
                    if (onValueChangeByUser)
                        onValueChangeByUser(name, finalUrl);
                });
            });
        }
        else {
            updateValue(url);
            setTimeout(function () {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, url);
            });
        }
    }, [name, onLink, onValueChangeByUser, updateValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormFile', "variant-".concat(variant), "size-".concat(size), !!initLabel && 'with-label', !!fullWidth && 'full-width', !!hideUrl && 'hide-file-name', !!hideLink && 'hide-link', !!hideUpload && 'hide-upload', !!hideRemove && 'hide-remove', notEmpty(value) && 'with-value'), labelIcon: hideUrl ? labelIcon : undefined, label: hideUrl ? initLabel : undefined, error: error, required: required, fullWidth: fullWidth, hidden: hidden, controlHeight: height, helperText: React.createElement("div", null,
            preview,
            React.createElement("div", null, error ? errorHelperText : helperText)), hideLabel: !hideUrl, style: { width: fullWidth ? '100%' : undefined }, control: React.createElement("div", { className: 'control-wrap' },
            !hideUrl && (React.createElement("div", { className: 'file-name-wrap' },
                React.createElement(TextField, { ref: function (ref) {
                        innerRef.current = ref;
                    }, inputRef: textFieldRef, className: 'file-name', variant: variant, label: labelIcon ? (React.createElement(React.Fragment, null,
                        React.createElement(PIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
                        React.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel), size: size, required: required, value: value || '', focused: focused, disabled: disabled, fullWidth: true, tabIndex: tabIndex, error: error, slotProps: {
                        inputLabel: labelShrink ? { shrink: labelShrink } : undefined,
                        htmlInput: { readOnly: true, tabIndex: tabIndex },
                        input: {
                            endAdornment: (React.createElement(InputAdornment, { position: 'end' },
                                React.createElement("div", { className: 'input-file-wrap' },
                                    !hideUpload && (React.createElement(React.Fragment, null,
                                        React.createElement(StyledPButton, { variant: 'text', tabIndex: uploadTabIndex == null ? -1 : uploadTabIndex, className: classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, size: size, disabled: readOnly || disabled, ref: fileUploadBtnRef },
                                            React.createElement("label", { htmlFor: id },
                                                React.createElement(PIcon, { size: size }, "upload"),
                                                !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                                        React.createElement("input", { type: 'file', accept: accept, id: id, value: FILE_VALUE, className: 'input-file', onChange: handleFileChange }))),
                                    !hideLink && (React.createElement(StyledPButton, { variant: 'text', tabIndex: linkTabIndex == null ? -1 : linkTabIndex, className: classNames('link-btn  form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'link', size: size, disabled: readOnly || disabled, ref: linkBtnRef, onClick: handleLinkClick }, !hideLinkLabel && (linkLabel || '링크'))),
                                    !hideRemove && notEmpty(value) && (React.createElement(StyledPButton, { variant: 'text', tabIndex: removeTabIndex == null ? -1 : removeTabIndex, className: classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'close', size: size, disabled: readOnly || disabled, onClick: handleRemoveClick }, !hideRemoveLabel && (removeLabel || '삭제')))))),
                        },
                    }, placeholder: '\uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694' }))),
            !!hideUrl && (React.createElement("div", { className: 'input-file-wrap' },
                !hideUpload && (React.createElement(React.Fragment, null,
                    React.createElement(StyledPButton, { variant: 'outlined', tabIndex: uploadTabIndex, className: classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, size: size, ref: fileUploadBtnRef, disabled: disabled },
                        React.createElement("label", { htmlFor: id },
                            React.createElement(PIcon, { size: size, color: error ? 'error' : color }, "upload"),
                            !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                    React.createElement("input", { type: 'file', accept: accept, id: id, value: FILE_VALUE, className: 'input-file', onChange: handleFileChange }))),
                !hideLink && (React.createElement(StyledPButton, { variant: 'outlined', tabIndex: linkTabIndex, className: classNames('link-btn form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'link', size: size, onClick: handleLinkClick, disabled: disabled, ref: linkBtnRef }, !hideLinkLabel && (linkLabel || '링크'))),
                !hideRemove && notEmpty(value) && (React.createElement(StyledPButton, { variant: 'outlined', tabIndex: removeTabIndex, className: classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, startIcon: 'close', size: size, disabled: disabled, onClick: handleRemoveClick }, !hideRemoveLabel && (removeLabel || '삭제'))))),
            React.createElement(PrivateAlertDialog, __assign({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } })),
            React.createElement(LinkDialog, { open: isOpenLinkDialog, onConfirm: handleLinkDialogConfirm, onClose: function () { return setIsOpenLinkDialog(false); } })) }));
});
PFormFile.displayName = 'PFormFile';var getFinalValue$4 = function (value) { return value || ''; };insertStyle(".PFormImageFile .preview-img{max-width:100%}.PFormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img{padding-right:14px}");var PFormImageFile = React.forwardRef(function (_a, ref) {
    var className = _a.className, imageSize = _a.imageSize, preview = _a.preview, previewMaxHeight = _a.previewMaxHeight, _b = _a.accept, accept = _b === void 0 ? '.jpg,.jpeg,.png' : _b, initValue = _a.value, onChange = _a.onChange, onFile = _a.onFile, onLink = _a.onLink, props = __rest(_a, ["className", "imageSize", "preview", "previewMaxHeight", "accept", "value", "onChange", "onFile", "onLink"]);
    var _c = useState({
        open: false,
    }), alertDialogProps = _c[0], setAlertDialogProps = _c[1];
    var urlKit = useState(function () {
        if (window.URL)
            return window.URL;
        else if (window.webkitURL)
            return window.webkitURL;
    })[0];
    /********************************************************************************************************************
     * value
     * ******************************************************************************************************************/
    var _d = useAutoUpdateState(initValue, getFinalValue$4), value = _d[0], _setValue = _d[1];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
        if (onChange)
            onChange(finalValue);
        return finalValue;
    }, [_setValue, onChange]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var imageSizeCheck = useCallback(function (file) {
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
                                    React.createElement(Typography, { color: 'error' },
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
    var handleChange = useCallback(function (value) {
        updateValue(value);
    }, [updateValue]);
    var handleFile = useCallback(function (file) {
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
    var handleLink = useCallback(function (url) {
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
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(PFormFile, __assign({ ref: ref, className: classNames(className, 'PFormImageFile'), accept: accept, value: value, preview: preview && value ? (React.createElement("a", { href: value, target: '_blank', tabIndex: -1 },
                React.createElement(Tooltip, { title: React.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } },
                        React.createElement("img", { src: value, style: { maxWidth: '100%', verticalAlign: 'middle' }, alt: '' })) },
                    React.createElement("img", { className: 'preview-img', src: value, style: { maxHeight: previewMaxHeight || undefined }, alt: '' })))) : undefined, onChange: handleChange, onFile: handleFile, onLink: handleLink }, props)),
        React.createElement(PrivateAlertDialog, __assign({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } }))));
});
PFormImageFile.displayName = 'PFormImageFile';var ko$1 = {exports: {}};var ko = ko$1.exports;

var hasRequiredKo;

function requireKo () {
	if (hasRequiredKo) return ko$1.exports;
	hasRequiredKo = 1;
	(function (module, exports) {
		!function(e,_){module.exports=_(dayjs);}(ko,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=_(e),t={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(e){return e+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(e){return e<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return d.default.locale(t,null,true),t})); 
	} (ko$1));
	return ko$1.exports;
}requireKo();var getFinalValue$3 = function (value) {
    return value || null;
};
var valueToDate$3 = function (v) { return dayjs("".concat(v.year, "-").concat(v.month, "-01")); };
var valueToYm$1 = function (v) { return v.year * 100 + v.month; };
var dateToValue$3 = function (v) { return ({ year: v.year(), month: v.month() + 1 }); };var DEFAULT_MIN_VALUE$1 = {
    year: 2020,
    month: 1,
};
var DEFAULT_MAX_VALUE$1 = {
    year: 2050,
    month: 12,
};
var PFormMonthPicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, _b = _a.format, format = _b === void 0 ? 'YYYY년 MM월' : _b, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, _c = _a.minValue, minValue = _c === void 0 ? DEFAULT_MIN_VALUE$1 : _c, _d = _a.maxValue, maxValue = _d === void 0 ? DEFAULT_MAX_VALUE$1 : _d, inputWidth = _a.inputWidth, enableKeyboardInput = _a.enableKeyboardInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, _e = _a.formValueYearNameSuffix, formValueYearNameSuffix = _e === void 0 ? '_year' : _e, _f = _a.formValueMonthNameSuffix, formValueMonthNameSuffix = _f === void 0 ? '_month' : _f, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _g = useFormState(), formVariant = _g.variant, formSize = _g.size, formColor = _g.color, formFocused = _g.focused, formLabelShrink = _g.labelShrink, formFullWidth = _g.fullWidth, formDisabled = _g.disabled, formColWithHelperText = _g.formColWithHelperText, onAddValueItem = _g.onAddValueItem, onRemoveValueItem = _g.onRemoveValueItem, onValueChange = _g.onValueChange, onValueChangeByUser = _g.onValueChangeByUser, onRequestSearchSubmit = _g.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var ratingRef = useRef(null);
    var inputRef = useRef(undefined);
    var closeTimeoutRef = useRef(undefined);
    var mouseDownTimeRef = useRef(undefined);
    var inputDatePickerErrorRef = useRef(null);
    var openValueRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _h = useAutoUpdateState(initError), error = _h[0], setError = _h[1];
    var _j = useState(), errorHelperText = _j[0], setErrorHelperText = _j[1];
    var _k = useState(false), open = _k[0], setOpen = _k[1];
    var _l = useAutoUpdateRefState(initData), dataRef = _l[0], setData = _l[2];
    var _m = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _m[0], disabled = _m[1], setDisabled = _m[2];
    var _o = useAutoUpdateRefState(initHidden), hiddenRef = _o[0], hidden = _o[1], setHidden = _o[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
    var _p = useAutoUpdateRefState(initValue, getFinalValue$3), valueRef = _p[0], value = _p[1], _setValue = _p[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var dateInfo = useMemo(function () {
        var nowDate = dayjs();
        var nowValue = dateToValue$3(nowDate);
        var nowYm = valueToYm$1(nowValue);
        var minDate = valueToDate$3(minValue);
        var maxDate = valueToDate$3(maxValue);
        var minAvailableValue;
        if (disablePast) {
            var minYm = valueToYm$1(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        var minAvailableYm = valueToYm$1(minAvailableValue);
        var maxAvailableValue;
        if (disableFuture) {
            var maxYm = valueToYm$1(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        var maxAvailableYm = valueToYm$1(maxAvailableValue);
        return {
            minDate: minDate,
            maxDate: maxDate,
            minAvailableYm: minAvailableYm,
            maxAvailableYm: maxAvailableYm,
        };
    }, [disableFuture, disablePast, maxValue, minValue]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
    }, []);
    useFirstSkipEffect(function () {
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
    var focus = useCallback(function () {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormMonthPicker'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue$3(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
        getData: function () { return dataRef.current; },
        setData: setData,
        getYear: function () { return (valueRef.current ? valueRef.current.year : null); },
        setYear: function (year) {
            updateValue(year === null
                ? null
                : valueRef.current
                    ? { year: year, month: valueRef.current.month }
                    : { year: year, month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1 });
        },
        getMonth: function () { return (valueRef.current ? valueRef.current.month : null); },
        setMonth: function (month) {
            updateValue(month === null
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
        getFormValueYearNameSuffix: function () { return formValueYearNameSuffix; },
        getFormValueMonthNameSuffix: function () { return formValueMonthNameSuffix; },
        getFormValueYearName: function () {
            return "".concat(name).concat(formValueYearNameSuffix);
        },
        getFormValueMonthName: function () {
            return "".concat(name).concat(formValueMonthNameSuffix);
        },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerMouseDown = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    var handleContainerFocus = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = useCallback(function () {
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
    var handleContainerChange = useCallback(function (newValue, isMonthSelect) {
        updateValue(newValue);
        if (isMonthSelect)
            setOpen(false);
        setTimeout(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    var handleInputDatePickerFocus = useCallback(function () {
        if (readOnly || disabled)
            return;
        setOpen(true);
    }, [readOnly, disabled]);
    var handleInputDatePickerShouldDisableYear = useCallback(function (date) {
        var dateYm = Number(date.format('YYYYMM'));
        return dateYm < dateInfo.minAvailableYm || dateYm > dateInfo.maxAvailableYm;
    }, [dateInfo]);
    /********************************************************************************************************************
     * Variables
     * ******************************************************************************************************************/
    var valueDate = value ? valueToDate$3(value) : null;
    var inputDatePickerProps = {
        variant: variant,
        size: size,
        color: color,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        disabled: disabled,
        format: format,
        minDate: dateInfo.minDate,
        maxDate: dateInfo.maxDate,
    };
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: 'ko' },
        React.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
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
                        React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputWidth != null
                                ? __assign({ width: inputWidth }, initStyle) : __assign({ width: fullWidth ? undefined : 150 }, initStyle), sx: sx, value: valueDate, label: label, labelIcon: labelIcon, error: error, focused: focused, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: inputRef, onChange: function (v) { return updateValue(v ? dateToValue$3(v) : v); }, onFocus: handleInputDatePickerFocus, onError: function (reason) { return (inputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear })))),
                !formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (React.createElement(FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PFormMonthPicker.displayName = 'PFormMonthPicker';var DEFAULT_VALUE$1 = [null, null];
var getFinalValue$2 = function (value) {
    return value || DEFAULT_VALUE$1;
};
var valueToDate$2 = function (v) { return dayjs("".concat(v.year, "-").concat(v.month, "-01")); };
var valueToYm = function (v) { return v.year * 100 + v.month; };
var dateToValue$2 = function (v) { return ({ year: v.year(), month: v.month() + 1 }); };var DEFAULT_FORMAT$1 = 'YYYY년 MM월';
var DEFAULT_MIN_VALUE = {
    year: 2020,
    month: 1,
};
var DEFAULT_MAX_VALUE = {
    year: 2050,
    month: 12,
};
var PFormMonthRangePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, fromLabel = _a.fromLabel, fromLabelIcon = _a.fromLabelIcon, toLabel = _a.toLabel, toLabelIcon = _a.toLabelIcon, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, _b = _a.format, format = _b === void 0 ? DEFAULT_FORMAT$1 : _b, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, _c = _a.minValue, minValue = _c === void 0 ? DEFAULT_MIN_VALUE : _c, _d = _a.maxValue, maxValue = _d === void 0 ? DEFAULT_MAX_VALUE : _d, inputWidth = _a.inputWidth, enableKeyboardInput = _a.enableKeyboardInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, _e = _a.formValueFromYearNameSuffix, formValueFromYearNameSuffix = _e === void 0 ? '_from_year' : _e, _f = _a.formValueFromMonthNameSuffix, formValueFromMonthNameSuffix = _f === void 0 ? '_from_month' : _f, _g = _a.formValueToYearNameSuffix, formValueToYearNameSuffix = _g === void 0 ? '_to_year' : _g, _h = _a.formValueToMonthNameSuffix, formValueToMonthNameSuffix = _h === void 0 ? '_to_month' : _h, align = _a.align, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _j = useFormState(), formVariant = _j.variant, formSize = _j.size, formColor = _j.color, formFocused = _j.focused, formLabelShrink = _j.labelShrink, formFullWidth = _j.fullWidth, formDisabled = _j.disabled, formColWithHelperText = _j.formColWithHelperText, onAddValueItem = _j.onAddValueItem, onRemoveValueItem = _j.onRemoveValueItem, onValueChange = _j.onValueChange, onValueChangeByUser = _j.onValueChangeByUser, onRequestSearchSubmit = _j.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var startInputRef = useRef(undefined);
    var endInputRef = useRef(undefined);
    var startInputDatePickerErrorRef = useRef(null);
    var endInputDatePickerErrorRef = useRef(null);
    var openValueRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _k = useAutoUpdateState(initError), error = _k[0], setError = _k[1];
    var _l = useState(), errorHelperText = _l[0], setErrorHelperText = _l[1];
    var _m = useState(false), fromError = _m[0], setFromError = _m[1];
    var _o = useState(), fromErrorHelperText = _o[0], setFromErrorHelperText = _o[1];
    var _p = useState(false), toError = _p[0], setToError = _p[1];
    var _q = useState(), toErrorHelperText = _q[0], setToErrorHelperText = _q[1];
    var _r = useState(false), open = _r[0], setOpen = _r[1];
    var _s = useAutoUpdateRefState(initData), dataRef = _s[0], setData = _s[2];
    var _t = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _t[0], disabled = _t[1], setDisabled = _t[2];
    var _u = useAutoUpdateRefState(initHidden), hiddenRef = _u[0], hidden = _u[1], setHidden = _u[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setFromErrorErrorHelperText = useCallback(function (error, fromErrorHelperText) {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    var setToErrorErrorHelperText = useCallback(function (error, toErrorHelperText) {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = useCallback(function (value) {
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
    var _v = useAutoUpdateRefState(initValue, getFinalValue$2), valueRef = _v[0], value = _v[1], _setValue = _v[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var dateInfo = useMemo(function () {
        var nowDate = dayjs();
        var nowValue = dateToValue$2(nowDate);
        var nowYm = valueToYm(nowValue);
        var minDate = minValue ? valueToDate$2(minValue) : undefined;
        var maxDate = maxValue ? valueToDate$2(maxValue) : undefined;
        var minAvailableValue;
        if (disablePast) {
            var minYm = valueToYm(minValue);
            minAvailableValue = nowYm > minYm ? nowValue : minValue;
        }
        else {
            minAvailableValue = minValue;
        }
        var minAvailableYm = valueToYm(minAvailableValue);
        var maxAvailableValue;
        if (disableFuture) {
            var maxYm = valueToYm(maxValue);
            maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
        }
        else {
            maxAvailableValue = maxValue;
        }
        var maxAvailableYm = valueToYm(maxAvailableValue);
        return {
            minDate: minDate,
            maxDate: maxDate,
            minAvailableYm: minAvailableYm,
            maxAvailableYm: maxAvailableYm,
        };
    }, [disableFuture, disablePast, maxValue, minValue]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useFirstSkipEffect(function () {
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
    var focus = useCallback(function () {
        var _a;
        (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormMonthRangePicker'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue$2(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
        getData: function () { return dataRef.current; },
        setData: setData,
        getFromValue: function () { return valueRef.current[0]; },
        setFromValue: function (value) { return updateValue([value, valueRef.current[1]]); },
        getToValue: function () { return valueRef.current[1]; },
        setToValue: function (value) { return updateValue([valueRef.current[0], value]); },
        getFromYear: function () { return (valueRef.current[0] ? valueRef.current[0].year : null); },
        setFromYear: function (year) {
            updateValue([
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
            updateValue([
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
            updateValue([
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
            updateValue([
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
        getFormValueFromYearNameSuffix: function () { return formValueFromYearNameSuffix; },
        getFormValueFromMonthNameSuffix: function () { return formValueFromMonthNameSuffix; },
        getFormValueToYearNameSuffix: function () { return formValueToYearNameSuffix; },
        getFormValueToMonthNameSuffix: function () { return formValueToMonthNameSuffix; },
        getFormValueFromYearName: function () {
            return "".concat(name).concat(formValueFromYearNameSuffix);
        },
        getFormValueFromMonthName: function () {
            return "".concat(name).concat(formValueFromMonthNameSuffix);
        },
        getFormValueToYearName: function () {
            return "".concat(name).concat(formValueToYearNameSuffix);
        },
        getFormValueToMonthName: function () {
            return "".concat(name).concat(formValueToMonthNameSuffix);
        },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerChange = useCallback(function (newValue, selectType, isMonthSelect) {
        updateValue(newValue);
        if (selectType === 'start' && isMonthSelect) {
            setTimeout(function () {
                var _a;
                (_a = endInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
        else if (selectType === 'end' && isMonthSelect) {
            setOpen(false);
        }
        setTimeout(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    var handleInputDatePickerChange = useCallback(function (selectType, date) {
        if (date == null || date.isValid()) {
            if (selectType === 'start') {
                var newValue_1 = [date ? dateToValue$2(date) : null, valueRef.current[1]];
                if (newValue_1[0] !== null &&
                    valueToYm(newValue_1[0]) >= dateInfo.minAvailableYm &&
                    valueToYm(newValue_1[0]) <= dateInfo.maxAvailableYm) {
                    if (newValue_1[1] !== null && newValue_1[1] < newValue_1[0]) {
                        newValue_1[1] = newValue_1[0];
                    }
                }
                if (fromError) {
                    validate(newValue_1);
                }
                setTimeout(function () {
                    onValueChangeByUser(name, newValue_1);
                });
                updateValue(newValue_1);
            }
            else {
                var newValue_2 = [valueRef.current[0], date ? dateToValue$2(date) : null];
                if (newValue_2[1] !== null &&
                    valueToYm(newValue_2[1]) >= dateInfo.minAvailableYm &&
                    valueToYm(newValue_2[1]) <= dateInfo.maxAvailableYm) {
                    if (newValue_2[0] !== null && newValue_2[0] > newValue_2[1]) {
                        newValue_2[0] = newValue_2[1];
                    }
                }
                if (toError) {
                    validate(newValue_2);
                }
                setTimeout(function () {
                    onValueChangeByUser(name, newValue_2);
                });
                updateValue(newValue_2);
            }
        }
    }, [valueRef, dateInfo, fromError, updateValue, validate, onValueChangeByUser, name, toError]);
    var handleInputDatePickerFocus = useCallback(function (selectType) {
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
    var handleInputDatePickerShouldDisableYear = useCallback(function (dt) {
        var ym = dt.year() * 100 + (dt.month() + 1);
        return ym < dateInfo.minAvailableYm || ym > dateInfo.maxAvailableYm;
    }, [dateInfo]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var valueDate = [
        !!value && !!value[0] ? valueToDate$2(value[0]) : null,
        !!value && !!value[1] ? valueToDate$2(value[1]) : null,
    ];
    var inputDatePickerProps = {
        align: align,
        variant: variant,
        size: size,
        color: color,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        disabled: disabled,
        format: format,
        minDate: dateInfo.minDate,
        maxDate: dateInfo.maxDate,
    };
    var inputStyle = inputWidth != null ? __assign({ width: inputWidth }, initStyle) : __assign({ width: fullWidth ? undefined : 150 }, initStyle);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: 'ko' },
        React.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
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
                    React.createElement(Grid, { container: true, alignItems: 'center' },
                        React.createElement(Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || open, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: startInputRef, onChange: function (v) { return handleInputDatePickerChange('start', v); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                        React.createElement(Grid, { sx: { px: 1 } }, "~"),
                        React.createElement(Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, inputDatePickerProps, { style: inputStyle, sx: sx, value: valueDate[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || open, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: endInputRef, onChange: function (v) { return handleInputDatePickerChange('end', v); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
PFormMonthRangePicker.displayName = 'PFormMonthRangePicker';var valueToDate$1 = function (v) { return dayjs("".concat(v, "-01-01")); };
var dateToValue$1 = function (v) { return v.year(); };
var getFinalValue$1 = function (newValue) {
    return newValue || null;
};var DEFAULT_FORMAT = 'YYYY년';
var PFormYearPicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, _b = _a.format, format = _b === void 0 ? DEFAULT_FORMAT : _b, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, _c = _a.minYear, minYear = _c === void 0 ? 2020 : _c, _d = _a.maxYear, maxYear = _d === void 0 ? 2050 : _d, inputWidth = _a.inputWidth, enableKeyboardInput = _a.enableKeyboardInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _e = useFormState(), formVariant = _e.variant, formSize = _e.size, formColor = _e.color, formFocused = _e.focused, formLabelShrink = _e.labelShrink, formFullWidth = _e.fullWidth, formDisabled = _e.disabled, formColWithHelperText = _e.formColWithHelperText, onAddValueItem = _e.onAddValueItem, onRemoveValueItem = _e.onRemoveValueItem, onValueChange = _e.onValueChange, onValueChangeByUser = _e.onValueChangeByUser, onRequestSearchSubmit = _e.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var ratingRef = useRef(null);
    var inputRef = useRef(undefined);
    var closeTimeoutRef = useRef(undefined);
    var mouseDownTimeRef = useRef(undefined);
    var inputDatePickerErrorRef = useRef(null);
    var openValueRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _f = useAutoUpdateState(initError), error = _f[0], setError = _f[1];
    var _g = useState(), errorHelperText = _g[0], setErrorHelperText = _g[1];
    var _h = useState(false), open = _h[0], setOpen = _h[1];
    var _j = useAutoUpdateRefState(initData), dataRef = _j[0], setData = _j[2];
    var _k = useAutoUpdateRefState(useMemo(function () { return ifUndefined(initDisabled, formDisabled); }, [initDisabled, formDisabled])), disabledRef = _k[0], disabled = _k[1], setDisabled = _k[2];
    var _l = useAutoUpdateRefState(initHidden), hiddenRef = _l[0], hidden = _l[1], setHidden = _l[2];
    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = useCallback(function (value) {
        if (required && empty(value)) {
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
    var _m = useAutoUpdateRefState(initValue, getFinalValue$1), valueRef = _m[0], value = _m[1], _setValue = _m[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var dateInfo = useMemo(function () {
        var nowYear = new Date().getFullYear();
        var minDate = minYear ? valueToDate$1(minYear) : undefined;
        var maxDate = maxYear ? valueToDate$1(maxYear) : undefined;
        return { nowYear: nowYear, min: minDate, max: maxDate };
    }, [maxYear, minYear]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
    }, []);
    useFirstSkipEffect(function () {
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
    var focus = useCallback(function () {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormYearPicker'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue$1(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerMouseDown = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
        mouseDownTimeRef.current = new Date().getTime();
    }, []);
    var handleContainerFocus = useCallback(function () {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = undefined;
        }
    }, []);
    var handleContainerBlur = useCallback(function () {
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
    var handleContainerChange = useCallback(function (newValue, isClick) {
        updateValue(newValue);
        if (isClick)
            setOpen(false);
        setTimeout(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    var handleInputDatePickerChange = useCallback(function (v) {
        var newValue = v ? dateToValue$1(v) : v;
        updateValue(newValue);
        setTimeout(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [name, onValueChangeByUser, updateValue]);
    var handleInputDatePickerFocus = useCallback(function () {
        if (readOnly || disabled)
            return;
        setOpen(true);
    }, [readOnly, disabled]);
    var handleInputDatePickerShouldDisableYear = useCallback(function (year) {
        return (!!disablePast && year.year() < dateInfo.nowYear) || (!!disableFuture && year.year() > dateInfo.nowYear);
    }, [disableFuture, disablePast, dateInfo.nowYear]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var valueDate = value ? valueToDate$1(value) : null;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
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
                                ? __assign({ width: inputWidth }, initStyle) : __assign({ width: fullWidth ? undefined : 150 }, initStyle), sx: sx, value: valueDate, label: label, labelIcon: labelIcon, error: error, required: required, readOnly: readOnly, enableKeyboardInput: enableKeyboardInput, icon: icon, startAdornment: startAdornment, endAdornment: endAdornment, inputRef: inputRef, onChange: handleInputDatePickerChange, onFocus: handleInputDatePickerFocus, onError: function (reason) { return (inputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                !formColWithHelperText && (!!helperText || (error && !!errorHelperText)) && (React.createElement(FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PFormYearPicker.displayName = 'PFormYearPicker';var DEFAULT_VALUE = [null, null];
var valueToDate = function (v) { return dayjs("".concat(v, "-01-01")); };
var dateToValue = function (v) { return v.year(); };
var getFinalValue = function (value) {
    return value || DEFAULT_VALUE;
};var PFormYearRangePicker = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    initHidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, fromLabel = _a.fromLabel, fromLabelIcon = _a.fromLabelIcon, toLabel = _a.toLabel, toLabelIcon = _a.toLabelIcon, readOnly = _a.readOnly, required = _a.required, initFullWidth = _a.fullWidth, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    icon = _a.icon, _b = _a.format, format = _b === void 0 ? 'YYYY년' : _b, initLabelShrink = _a.labelShrink, disablePast = _a.disablePast, disableFuture = _a.disableFuture, _c = _a.minYear, minYear = _c === void 0 ? 2020 : _c, _d = _a.maxYear, maxYear = _d === void 0 ? 2050 : _d, inputWidth = _a.inputWidth, enableKeyboardInput = _a.enableKeyboardInput, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, _e = _a.formValueFromNameSuffix, formValueFromNameSuffix = _e === void 0 ? '_from' : _e, _f = _a.formValueToNameSuffix, formValueToNameSuffix = _f === void 0 ? '_to' : _f, align = _a.align, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _g = useFormState(), formVariant = _g.variant, formSize = _g.size, formColor = _g.color, formFocused = _g.focused, formLabelShrink = _g.labelShrink, formFullWidth = _g.fullWidth, formDisabled = _g.disabled, formColWithHelperText = _g.formColWithHelperText, onAddValueItem = _g.onAddValueItem, onRemoveValueItem = _g.onRemoveValueItem, onValueChange = _g.onValueChange, onValueChangeByUser = _g.onValueChangeByUser, onRequestSearchSubmit = _g.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    var focused = ifUndefined(initFocused, formFocused);
    var labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    var fullWidth = ifUndefined(initFullWidth, formFullWidth);
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var startInputRef = useRef(undefined);
    var endInputRef = useRef(undefined);
    var startInputDatePickerErrorRef = useRef(null);
    var endInputDatePickerErrorRef = useRef(null);
    var openValueRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _h = useAutoUpdateState(initError), error = _h[0], setError = _h[1];
    var _j = useState(), errorHelperText = _j[0], setErrorHelperText = _j[1];
    var _k = useState(false), fromError = _k[0], setFromError = _k[1];
    var _l = useState(), fromErrorHelperText = _l[0], setFromErrorHelperText = _l[1];
    var _m = useState(false), toError = _m[0], setToError = _m[1];
    var _o = useState(), toErrorHelperText = _o[0], setToErrorHelperText = _o[1];
    var _p = useState(false), open = _p[0], setOpen = _p[1];
    var _q = useState('start'), selectType = _q[0], setSelectType = _q[1];
    var _r = useAutoUpdateRefState(initData), dataRef = _r[0], setData = _r[2];
    var _s = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _s[0], disabled = _s[1], setDisabled = _s[2];
    var _t = useAutoUpdateRefState(initHidden), hiddenRef = _t[0], hidden = _t[1], setHidden = _t[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setFromErrorErrorHelperText = useCallback(function (error, fromErrorHelperText) {
        setFromError(error);
        setFromErrorHelperText(fromErrorHelperText);
    }, []);
    var setToErrorErrorHelperText = useCallback(function (error, toErrorHelperText) {
        setToError(error);
        setToErrorHelperText(toErrorHelperText);
    }, []);
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = useCallback(function (value) {
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
    var _u = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _u[0], value = _u[1], _setValue = _u[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var dateInfo = useMemo(function () {
        var nowYear = new Date().getFullYear();
        var minDate = valueToDate(minYear);
        var maxDate = valueToDate(maxYear);
        return { nowYear: nowYear, min: minDate, max: maxDate };
    }, [maxYear, minYear]);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useFirstSkipEffect(function () {
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
    var focus = useCallback(function () {
        var _a;
        (_a = startInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormYearRangePicker'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
        getData: function () { return dataRef.current; },
        setData: setData,
        getFromValue: function () { return valueRef.current[0]; },
        setFromValue: function (value) { return updateValue([value, valueRef.current[1]]); },
        getToValue: function () { return valueRef.current[1]; },
        setToValue: function (value) { return updateValue([valueRef.current[0], value]); },
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
        getFormValueFromNameSuffix: function () { return formValueFromNameSuffix; },
        getFormValueToNameSuffix: function () { return formValueToNameSuffix; },
        getFormValueFromName: function () {
            return "".concat(name).concat(formValueFromNameSuffix);
        },
        getFormValueToName: function () {
            return "".concat(name).concat(formValueToNameSuffix);
        },
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleContainerChange = useCallback(function (newValue, selectType) {
        updateValue(newValue);
        if (selectType === 'start') {
            setTimeout(function () {
                var _a;
                setSelectType('end');
                (_a = endInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            });
        }
        else if (selectType === 'end') {
            setOpen(false);
        }
        setTimeout(function () {
            onValueChangeByUser(name, newValue);
        });
    }, [updateValue, name, onValueChangeByUser]);
    var handleInputDatePickerChange = useCallback(function (selectType, date) {
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
                setTimeout(function () {
                    onValueChangeByUser(name, newValue_1);
                });
                updateValue(newValue_1);
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
                setTimeout(function () {
                    onValueChangeByUser(name, newValue_2);
                });
                updateValue(newValue_2);
            }
        }
    }, [valueRef, minYear, maxYear, fromError, updateValue, validate, onValueChangeByUser, name, toError]);
    var handleInputDatePickerFocus = useCallback(function (selectType) {
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
    var handleInputDatePickerShouldDisableYear = useCallback(function (year) {
        return (!!disablePast && year.year() < dateInfo.nowYear) || (!!disableFuture && year.year() > dateInfo.nowYear);
    }, [disableFuture, disablePast, dateInfo.nowYear]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var valueDate = [
        !!value && !!value[0] ? valueToDate(value[0]) : null,
        !!value && !!value[1] ? valueToDate(value[1]) : null,
    ];
    var privateInputDatePickerProps = {
        variant: variant,
        size: size,
        color: color,
        focused: focused,
        labelShrink: labelShrink,
        fullWidth: fullWidth,
        align: align,
        disabled: disabled,
        format: format,
        minDate: dateInfo.min,
        maxDate: dateInfo.max,
        style: inputWidth != null ? __assign({ width: inputWidth }, initStyle) : __assign({ width: fullWidth ? undefined : 150 }, initStyle),
        sx: sx,
        required: required,
        readOnly: readOnly,
        enableKeyboardInput: enableKeyboardInput,
        icon: icon,
        startAdornment: startAdornment,
        endAdornment: endAdornment,
    };
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
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
                    React.createElement(Grid, { container: true, alignItems: 'center' },
                        React.createElement(Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, privateInputDatePickerProps, { inputRef: startInputRef, value: valueDate[0], label: fromLabel, labelIcon: fromLabelIcon, error: error || fromError, focused: focused || (open && selectType === 'start'), onChange: function (v) { return handleInputDatePickerChange('start', v); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))),
                        React.createElement(Grid, { sx: { px: 1 } }, "~"),
                        React.createElement(Grid, { flex: 1 },
                            React.createElement(PrivateInputDatePicker, __assign({}, privateInputDatePickerProps, { inputRef: endInputRef, value: valueDate[1], label: toLabel, labelIcon: toLabelIcon, error: error || toError, focused: focused || (open && selectType === 'end'), onChange: function (v) { return handleInputDatePickerChange('end', v); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); }, shouldDisableYear: handleInputDatePickerShouldDisableYear }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (fromError && fromErrorHelperText) ||
                        (toError && toErrorHelperText)) && (React.createElement(FormHelperText, { error: error || fromError || toError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText))))));
});
PFormYearRangePicker.displayName = 'PFormYearRangePicker';var PFormSwitch = React.forwardRef(function (_a, ref) {
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
    var id = useId();
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formDisabled = _b.disabled, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/
    var variant = ifUndefined(initVariant, formVariant);
    var size = ifUndefined(initSize, formSize);
    var color = ifUndefined(initColor, formColor);
    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/
    var _c = useAutoUpdateState(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var inputRef = useRef(undefined);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _d = useAutoUpdateState(initError), error = _d[0], setError = _d[1];
    var _e = useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = useAutoUpdateRefState(initData), dataRef = _f[0], setData = _f[2];
    var _g = useAutoUpdateRefState(useMemo(function () { return (initDisabled == null ? formDisabled : initDisabled); }, [initDisabled, formDisabled])), disabledRef = _g[0], disabled = _g[1], setDisabled = _g[2];
    var _h = useAutoUpdateRefState(initHidden), hiddenRef = _h[0], hidden = _h[1], setHidden = _h[2];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var validate = useCallback(function (value) {
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
    var getFinalValue = useCallback(function (value) {
        var finalValue = value || false;
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    var _j = useAutoUpdateRefState(initValue, getFinalValue), valueRef = _j[0], value = _j[1], _setValue = _j[2];
    var updateValue = useCallback(function (newValue) {
        var finalValue = _setValue(newValue);
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
    var focus = useCallback(function () {
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
    var commands = useMemo(function () { return ({
        getType: function () { return 'PFormSwitch'; },
        getName: function () { return name; },
        getReset: function () { return getFinalValue(initValue); },
        reset: function () { return updateValue(initValue); },
        getValue: function () { return valueRef.current; },
        setValue: updateValue,
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
    }); }, [
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
    useForwardLayoutRef(ref, commands, useCallback(function (commands) { return onAddValueItem(id, commands); }, [id, onAddValueItem]), useCallback(function () { return onRemoveValueItem(id); }, [id, onRemoveValueItem]));
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleChange = useCallback(function (e, checked) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = updateValue(checked);
            setTimeout(function () {
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [readOnly, updateValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var switchControl = useMemo(function () { return (React.createElement(Switch, { size: size, name: name, checked: value, color: color, disabled: disabled, onChange: handleChange, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } })); }, [color, disabled, handleChange, initFocused, name, setFocused, size, value]);
    return (React.createElement(PFormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames(className, 'PFormValueItem', 'PFormSwitch'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: size === 'small' ? 24 : 38, controlVerticalCenter: true, control: switchLabel ? (React.createElement(FormControlLabel, { control: switchControl, label: switchLabel, disabled: disabled })) : (switchControl) }));
});
PFormSwitch.displayName = 'PFormSwitch';var PSearchGroupRow = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (React.createElement(PFormRow, __assign({ className: classNames(className, 'PSearchGroupRow') }, props),
        React.createElement(PFormCol, null,
            React.createElement(Grid, { container: true, spacing: 1, alignItems: 'center', flex: 1 }, children))));
};var PSearch = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    _b = _a.color, 
    //----------------------------------------------------------------------------------------------------------------
    color = _b === void 0 ? 'primary' : _b, spacing = _a.spacing, focused = _a.focused, labelShrink = _a.labelShrink, autoSubmit = _a.autoSubmit, otherProps = __rest(_a, ["children", "className", "style", "sx", "color", "spacing", "focused", "labelShrink", "autoSubmit"]);
    var formRef = useRef(undefined);
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        var _a;
        if (autoSubmit) {
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var renderChildren = useMemo(function () {
        var rowItems = [];
        var basicRowItems = [];
        React.Children.forEach(children, function (child) {
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
            return __spreadArray([React.createElement(PSearchGroupRow, { key: '$basicRow$' }, basicRowItems)], rowItems, true);
        }
        else {
            return rowItems;
        }
    }, [children]);
    /********************************************************************************************************************
     * FormContextValue
     * ******************************************************************************************************************/
    var formContextValue = useMemo(function () {
        return ({
            id: 'search',
            variant: 'outlined',
            size: 'small',
            color: color,
            spacing: spacing,
            focused: focused,
            labelShrink: labelShrink,
            fullWidth: false,
            onAddValueItem: function () { },
            onRemoveValueItem: function () { },
            onValueChange: function () { },
            onValueChangeByUser: function () { },
            onRequestSubmit: function () {
                var _a;
                (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
            },
            onRequestSearchSubmit: function () {
                var _a;
                if (autoSubmit) {
                    (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
                }
            },
        });
    }, [autoSubmit, color, focused, labelShrink, spacing]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleRef = useCallback(function (commands) {
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
        React.createElement(Paper, { variant: 'outlined', className: className, sx: __assign({ p: 1.5 }, sx), style: style },
            React.createElement(PForm, __assign({ ref: handleRef, className: 'PSearch', variant: 'outlined', size: 'small', color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: false }, otherProps),
                React.createElement(PFormBody, null, renderChildren)))));
});var StyledItem = styled(Grid)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:has(> [style*='display: none;']) {\n    display: none;\n  }\n"], ["\n  &:has(> [style*='display: none;']) {\n    display: none;\n  }\n"])));
var templateObject_1;var isReactFragment = function (child) {
    try {
        return child.type.toString() === React.Fragment.toString();
    }
    catch (_a) {
        return false;
    }
};
var removeReactFragment = function (el, key) {
    if (isReactFragment(el)) {
        var children = el.props.children;
        if (children) {
            if (Array.isArray(children)) {
                return children.map(function (child, idx) {
                    if (React.isValidElement(child)) {
                        return removeReactFragment(child, idx);
                    }
                    else {
                        return React.createElement(Grid, { key: idx }, child);
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
var PSearchGroup = function (_a) {
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    max = _a.max, align = _a.align, hidden = _a.hidden, _b = _a.spacing, spacing = _b === void 0 ? 1 : _b;
    return (React.createElement(Grid, { className: classNames(className, 'PSearchGroup'), style: { flex: max ? 1 : undefined, display: hidden ? 'none' : undefined } },
        React.createElement(Grid, { container: true, wrap: 'wrap', spacing: spacing, justifyContent: align === undefined || align === 'left' ? 'start' : align === 'center' ? 'center' : 'end', alignItems: 'start', style: style, sx: sx }, React.Children.map(children, function (child) {
            if (React.isValidElement(child)) {
                return removeReactFragment(child);
            }
            else {
                return child;
            }
        }))));
};var PSearchButton = function (_a) {
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, size = _a.size, initSx = _a.sx, props = __rest(_a, ["children", "className", "size", "sx"]);
    return (React.createElement(PButton, __assign({ className: classNames(className, 'PSearchButton'), size: ifUndefined(size, 'medium'), sx: __assign({ minWidth: 0, px: "".concat(!children ? 9 : 13, "px !important") }, initSx), fullWidth: false }, props), children));
};
var PSearchButton$1 = React.memo(PSearchButton);var PSearchMenuButton = function (_a) {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, menuList = _a.menuList; _a.placement; var props = __rest(_a, ["children", "className", "sx", "menuList", "placement"]);
    var buttonId = useId();
    var menuId = useId();
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var _c = useState('ArrowDropDown'), endIcon = _c[0], setEndIcon = _c[1];
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleClick = useCallback(function (e) {
        setAnchorEl(e.currentTarget);
        setEndIcon('ArrowDropUp');
    }, []);
    var handleClose = useCallback(function () {
        setAnchorEl(null);
        setEndIcon('ArrowDropDown');
    }, []);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var open = !!anchorEl;
    var anchorOrigin = { vertical: 'bottom', horizontal: 'center' }
        ;
    var transformOrigin = { vertical: 'top', horizontal: 'center' }
        ;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(React.Fragment, null,
        React.createElement(PFormButton$1, __assign({ className: classNames(className, 'PSearchMenuButton'), size: 'medium', sx: __assign({ minWidth: 0, px: "".concat(!children ? 9 : 13, "px !important") }, initSx), fullWidth: false }, props, { id: buttonId, "aria-controls": open ? menuId : undefined, "aria-haspopup": 'true', "aria-expanded": open ? 'true' : undefined, endIcon: endIcon, endIconProps: { style: { marginRight: -5 } }, onClick: handleClick }), children),
        React.createElement(Menu, { id: menuId, "aria-labelledby": buttonId, anchorEl: anchorEl, open: open, onClose: handleClose, onClick: handleClose, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin }, menuList)));
};var PHashSearch = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, noAutoSubmit = _a.noAutoSubmit, onSubmit = _a.onSubmit, onRequestHashChange = _a.onRequestHashChange, props = __rest(_a, ["className", "noAutoSubmit", "onSubmit", "onRequestHashChange"]);
    var searchRef = useRef(null);
    var initPathRef = useRef(window.location.pathname);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(true), isFirstSearchSubmit = _b[0], setIsFirstSearchSubmit = _b[1];
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var deHash = useCallback(function () {
        var values = {};
        var hash = window.location.hash.substring(1);
        hash.replace(/([^=&]+)=([^&]*)/g, function (substring, key, value) {
            values[decodeURIComponent(key)] = decodeURIComponent(value);
            return substring;
        });
        return values;
    }, []);
    var hashToSearchValue = useCallback(function () {
        var commands = searchRef.current;
        if (commands) {
            commands.resetAll();
            var hashValues_1 = deHash();
            Object.keys(hashValues_1).forEach(function (name) {
                var _a, _b;
                var value = hashValues_1[name];
                var itemCommands = commands.getItem(name);
                if (itemCommands) {
                    switch (itemCommands.getType()) {
                        case 'PFormCheckbox':
                            if (notEmpty(value)) {
                                var checkCommands = itemCommands;
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
                                if (notEmpty(value)) {
                                    var dateCommands = itemCommands;
                                    var format = dateCommands.getFormValueFormat();
                                    var itemValue = dayjs(value, format);
                                    itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                                }
                                else {
                                    itemCommands.setValue(null);
                                }
                            }
                            break;
                        case 'PFormDateRangePicker':
                            {
                                var dateRangePickerCommands = itemCommands;
                                var fromName = dateRangePickerCommands.getFormValueFromName();
                                var toName = dateRangePickerCommands.getFormValueToName();
                                var format = dateRangePickerCommands.getFormValueFormat();
                                if (name === fromName) {
                                    if (notEmpty(value)) {
                                        var startValue = dayjs(value, format);
                                        dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                                    }
                                    else {
                                        dateRangePickerCommands.setFromValue(null);
                                    }
                                }
                                else if (name === toName) {
                                    if (notEmpty(value)) {
                                        var endValue = dayjs(value, format);
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
                                var dateRangePickerCommands = itemCommands;
                                var fromName = dateRangePickerCommands.getFormValueFromName();
                                var toName = dateRangePickerCommands.getFormValueToName();
                                if (name === fromName) {
                                    dateRangePickerCommands.setFromValue(notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === toName) {
                                    dateRangePickerCommands.setToValue(notEmpty(value) ? Number(value) : null);
                                }
                            }
                            break;
                        case 'PFormMonthPicker':
                            {
                                var monthCommands = itemCommands;
                                var yearName = monthCommands.getFormValueYearName();
                                var monthName = monthCommands.getFormValueMonthName();
                                if (name === yearName) {
                                    monthCommands.setYear(notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === monthName) {
                                    monthCommands.setMonth(notEmpty(value) ? Number(value) : null);
                                }
                            }
                            break;
                        case 'PFormMonthRangePicker':
                            {
                                var monthRangeCommands = itemCommands;
                                var fromYearName = monthRangeCommands.getFormValueFromYearName();
                                var fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                                var toYearName = monthRangeCommands.getFormValueToYearName();
                                var toMonthName = monthRangeCommands.getFormValueToMonthName();
                                if (name === fromYearName) {
                                    monthRangeCommands.setFromYear(notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === fromMonthName) {
                                    monthRangeCommands.setFromMonth(notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === toYearName) {
                                    monthRangeCommands.setToYear(notEmpty(value) ? Number(value) : null);
                                }
                                else if (name === toMonthName) {
                                    monthRangeCommands.setToMonth(notEmpty(value) ? Number(value) : null);
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
    useEffect(function () {
        if (window.location.pathname === initPathRef.current) {
            var data = hashToSearchValue();
            if (data)
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);
    var hashChange = useCallback(function (params) {
        if (onRequestHashChange) {
            var hashes_1 = [];
            Object.keys(params).forEach(function (name) {
                var value = params[name];
                if (searchRef.current) {
                    var itemCommands = searchRef.current.getItem(name);
                    if (itemCommands) {
                        var resetValue = null;
                        switch (itemCommands.getType()) {
                            case 'PFormDateRangePicker':
                            case 'PFormYearRangePicker':
                                {
                                    var commands = itemCommands;
                                    var itemName = itemCommands.getName();
                                    var fromName = commands.getFormValueFromName();
                                    var fromSuffix = commands.getFormValueFromNameSuffix();
                                    var toName = commands.getFormValueToName();
                                    var toSuffix = commands.getFormValueToNameSuffix();
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
                                    var commands = itemCommands;
                                    var itemName = commands.getName();
                                    var yearName = commands.getFormValueYearName();
                                    var yearSuffix = commands.getFormValueYearNameSuffix();
                                    var monthName = commands.getFormValueMonthName();
                                    var monthSuffix = commands.getFormValueMonthNameSuffix();
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
                                    var commands = itemCommands;
                                    var itemName = commands.getName();
                                    var fromYearName = commands.getFormValueFromYearName();
                                    var fromYearSuffix = commands.getFormValueFromYearNameSuffix();
                                    var fromMonthName = commands.getFormValueFromMonthName();
                                    var fromMonthSuffix = commands.getFormValueFromMonthNameSuffix();
                                    var toYearName = commands.getFormValueToYearName();
                                    var toYearSuffix = commands.getFormValueToYearNameSuffix();
                                    var toMonthName = commands.getFormValueToMonthName();
                                    var toMonthSuffix = commands.getFormValueToMonthNameSuffix();
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
                        if (resetValue != null && !equal(resetValue, value) && typeof value !== 'object') {
                            hashes_1.push("".concat(name, "=").concat(encodeURIComponent(value)));
                        }
                    }
                }
            });
            var finalHash = hashes_1.join('&');
            if (window.location.hash.substring(1) === finalHash) {
                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(params);
            }
            else {
                onRequestHashChange(hashes_1.join('&'));
            }
        }
    }, [onRequestHashChange, onSubmit]);
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var handleSubmit = useCallback(function (data) {
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
    return (React.createElement(PSearch, __assign({ ref: function (r) {
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
});export{PForm,PFormAutocomplete,PFormBlock,PFormBody,PFormBusinessNo,PFormButton$1 as PFormButton,PFormCheckbox,PFormCol,PFormContext,PFormContextDefaultValue,PFormContextProvider,PFormDatePicker,PFormDateRangePicker,PFormDateTimePicker,PFormDivider,PFormEmail,PFormFile,PFormFooter,PFormHidden,PFormImageFile,PFormLabel$1 as PFormLabel,PFormMobile,PFormMonthPicker,PFormMonthRangePicker,PFormNumber,PFormPassword,PFormPersonalNo,PFormRadioGroup,PFormRating,PFormRow,PFormSearch,PFormSelect,PFormSwitch,PFormTag,PFormTel,PFormText,PFormTextEditor,PFormTextField,PFormTextarea,PFormTimePicker,PFormToggleButtonGroup,PFormUrl,PFormYearPicker,PFormYearRangePicker,PHashSearch,PSearch,PSearchButton$1 as PSearchButton,PSearchGroup,PSearchGroupRow,PSearchMenuButton,useFormState};