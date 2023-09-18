import*as React from'react';import React__default,{createContext,useContext,useMemo,useRef,useState,useCallback,useLayoutEffect,useEffect,cloneElement,isValidElement,createRef,PureComponent,useId}from'react';import {Box,Icon as Icon$1,Button,styled,useTheme,InputLabel,Grid,Collapse,FormHelperText,InputAdornment,IconButton,TextField,Chip,Autocomplete,CircularProgress,MenuItem,Checkbox,FormControl,Input,OutlinedInput,FilledInput,FormControlLabel,Typography,RadioGroup,Radio,ToggleButton,ToggleButtonGroup,Rating,Skeleton,darken,Tooltip,tooltipClasses,ClickAwayListener,Dialog,DialogTitle,DialogContent,DialogActions,Paper,Menu}from'@mui/material';import dayjs from'dayjs';import {findDOMNode}from'react-dom';import {CheckBox,CheckBoxOutlineBlank,RadioButtonUnchecked,RadioButtonChecked}from'@mui/icons-material';import CircularProgress$1 from'@mui/material/CircularProgress';import {AdapterDayjs}from'@mui/x-date-pickers/AdapterDayjs';import {PickersDay,StaticDatePicker,LocalizationProvider,DesktopDatePicker,StaticDateTimePicker,DesktopDateTimePicker}from'@mui/x-date-pickers';/******************************************************************************
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


var __assign$7 = function() {
    __assign$7 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$7.apply(this, arguments);
};

function __rest$4(s, e) {
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
};var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs$1 (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}var classnames$1 = {exports: {}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames$1));

var classnamesExports$1 = classnames$1.exports;
var classNames$1 = /*@__PURE__*/getDefaultExportFromCjs$1(classnamesExports$1);var empty = function (v) {
    var result = false;
    if (v == null) {
        result = true;
    }
    else if (typeof v === 'string') {
        result = v === '';
    }
    else if (typeof v === 'object') {
        if (Array.isArray(v)) {
            result = v.length === 0;
        }
        else if (!(v instanceof Date)) {
            result = Object.entries(v).length === 0;
        }
    }
    return result;
};
var notEmpty = function (v) {
    return !empty(v);
};
var isSame$2 = function (v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i += 1) {
            if (v1[i] !== v2[i])
                return false;
        }
    }
    else {
        return v1 === v2;
    }
    return true;
};function getDateValidationErrorText(error) {
    switch (error) {
        case 'invalidDate':
            return '형식이 일치하지 않습니다.';
        case 'shouldDisableDate':
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
// getAvailableDateType ------------------------------------------------------------------------------------------------
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
// makeAvailableDate ---------------------------------------------------------------------------------------------------
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
// getDateVal ----------------------------------------------------------------------------------------------------------
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
    return React__default.forwardRef(render);
}var nextTick = function (callback) {
    setTimeout(callback, 1);
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
};var FormContext = createContext(FormContextDefaultValue);function useFormState() {
    var value = useContext(FormContext);
    if (value === undefined) {
        throw new Error('useFormState should be used within FormContext.Provider');
    }
    return value;
}var FormContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React__default.createElement(FormContext.Provider, { value: value }, children);
};var Form = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var className = _a.className, children = _a.children, initStyle = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFormColGap = _a.formColGap, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, fullHeight = _a.fullHeight, 
    //----------------------------------------------------------------------------------------------------------------
    onSubmit = _a.onSubmit, onInvalid = _a.onInvalid, onValueChange = _a.onValueChange, onValueChangeByUser = _a.onValueChangeByUser;
    var _b = useFormState(), formId = _b.id, formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFormColGap = _b.formColGap, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formAddValueItem = _b.onAddValueItem, formRemoveValueItem = _b.onRemoveValueItem, formValueChange = _b.onValueChange, formValueChangeByUser = _b.onValueChangeByUser, otherFormState = __rest$4(_b, ["id", "variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "onAddValueItem", "onRemoveValueItem", "onValueChange", "onValueChangeByUser"]);
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var formColGap = useMemo(function () { return (initFormColGap == null ? formFormColGap : initFormColGap); }, [initFormColGap, formFormColGap]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // Ref -------------------------------------------------------------------------------------------------------------
    var formRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var valueItems = useState({})[0];
    // Function - getItemFormValue -----------------------------------------------------------------------------------------
    var getItemFormValue = useCallback(function (commands, reset) {
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
    }, []);
    // Function - resetAll ---------------------------------------------------------------------------------------------
    var resetAll = useCallback(function () {
        Object.keys(valueItems).forEach(function (id) {
            var _a;
            (_a = valueItems[id]) === null || _a === void 0 ? void 0 : _a.reset();
        });
    }, [valueItems]);
    var appendFormValueData = useCallback(function (data, itemCommands) {
        switch (itemCommands.getType()) {
            case 'FormDateRangePicker':
                {
                    var value = getItemFormValue(itemCommands);
                    data[itemCommands.getFormValueStartName()] = value[0];
                    data[itemCommands.getFormValueEndName()] = value[1];
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
    var getAllFormValue = useCallback(function () {
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
    // Function - submit -----------------------------------------------------------------------------------------------
    var submit = useCallback(function () {
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
            nextTick(function () {
                var _a;
                (_a = valueItems[firstInvalidItemId]) === null || _a === void 0 ? void 0 : _a.focusValidate();
            });
        }
    }, [valueItems, appendFormValueData, onSubmit, onInvalid]);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref) {
            var findValueItem_1 = function (name) {
                return Object.values(valueItems).find(function (commands) {
                    if (commands) {
                        if (commands.getName() === name) {
                            return true;
                        }
                        if (commands.getType() === 'FormDateRangePicker') {
                            return (name === commands.getFormValueStartName() ||
                                name === commands.getFormValueEndName());
                        }
                    }
                });
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
                    var valueItem = findValueItem_1(name);
                    if (valueItem) {
                        if (valueItem.getType() === 'FormDateRangePicker') {
                            var value = getItemFormValue(valueItem, true);
                            if (notEmpty(subKey)) {
                                if (subKey === valueItem.getFormValueStartNameSuffix()) {
                                    return value[0];
                                }
                                else if (subKey === valueItem.getFormValueEndNameSuffix()) {
                                    return value[1];
                                }
                                else {
                                    throw new Error("Form::getFormReset - FormDateRangePicker \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
                                }
                            }
                            else {
                                throw new Error("Form::getFormReset - FormDateRangePicker \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.");
                            }
                        }
                        else {
                            return getItemFormValue(valueItem, true);
                        }
                    }
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
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
                    var valueItem = findValueItem_1(name);
                    if (valueItem) {
                        if (valueItem.getType() === 'FormDateRangePicker') {
                            var value = getItemFormValue(valueItem);
                            if (notEmpty(subKey)) {
                                if (subKey === valueItem.getFormValueStartNameSuffix()) {
                                    return value[0];
                                }
                                else if (subKey === valueItem.getFormValueEndNameSuffix()) {
                                    return value[1];
                                }
                                else {
                                    throw new Error("Form::getFormValue - FormDateRangePicker \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
                                }
                            }
                            else {
                                throw new Error("Form::getFormValue - FormDateRangePicker \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.");
                            }
                        }
                        else {
                            return getItemFormValue(valueItem);
                        }
                    }
                    else
                        throw new Error("'".concat(name, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
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
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleSubmit = useCallback(function (e) {
        e.preventDefault();
        submit();
    }, [submit]);
    // Render ----------------------------------------------------------------------------------------------------------
    var style = useMemo(function () {
        return fullHeight ? __assign$7(__assign$7({}, initStyle), { flex: 1, height: '100%' }) : initStyle;
    }, [initStyle, fullHeight]);
    var contentWrapStyle = useMemo(function () { return ({
        display: 'flex',
        flexDirection: 'column',
        height: fullHeight ? '100%' : undefined,
    }); }, [fullHeight]);
    return (React__default.createElement(FormContextProvider, { value: __assign$7({ id: formId || 'form', variant: variant, size: size, color: color, spacing: spacing, formColGap: formColGap, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, fullHeight: fullHeight, onAddValueItem: function (id, item) {
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
        React__default.createElement(Box, { className: classNames$1('Form', "Form-variant-".concat(variant), fullHeight && 'full-height', className), component: 'form', ref: formRef, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit, style: style, sx: sx },
            React__default.createElement("div", { style: contentWrapStyle }, children))));
});
Form.displayName = 'Form';
Form.defaultProps = FormDefaultProps;var FormButtonDefaultProps = {
    type: 'button',
};var FormIconDefaultProps = {};var FormIcon = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, InitChildren = _a.children, props = __rest$4(_a, ["className", "children"]);
    return useMemo(function () {
        var iconProps = __assign$7(__assign$7({}, props), { className: classNames$1('FormIcon', className) });
        return typeof InitChildren === 'string' ? (React__default.createElement(Icon$1, __assign$7({ ref: ref }, iconProps), InitChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); }))) : (React__default.createElement(InitChildren, __assign$7({}, iconProps)));
    }, [InitChildren, className, props, ref]);
});
FormIcon.displayName = 'FormIcon';
FormIcon.defaultProps = FormIconDefaultProps;var FormButton = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initSize = _a.size, initColor = _a.color, initVariant = _a.variant, initFullWidth = _a.fullWidth, children = _a.children, className = _a.className, type = _a.type, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest$4(_a, ["size", "color", "variant", "fullWidth", "children", "className", "type", "icon", "startIcon", "endIcon", "onClick"]);
    var _b = useFormState(), formSize = _b.size, formColor = _b.color, formFullWidth = _b.fullWidth;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // Memo ------------------------------------------------------------------------------------------------------------
    var variant = useMemo(function () {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Button, __assign$7({ ref: ref, className: classNames$1(className, 'FormButton'), type: type, variant: variant, size: size, color: color, fullWidth: fullWidth, onClick: onClick, startIcon: startIcon ? React__default.createElement(FormIcon, { sx: { mr: -0.5 } }, startIcon) : undefined, endIcon: endIcon ? React__default.createElement(FormIcon, { sx: { ml: -0.5 } }, endIcon) : undefined }, props),
        icon && (React__default.createElement(FormIcon, { fontSize: size, color: 'inherit', sx: { mr: children ? 0.5 : undefined } }, icon)),
        children));
});
FormButton.displayName = 'FormButton';
FormButton.defaultProps = FormButtonDefaultProps;var FormLabelDefaultProps = {};var IconFormIcon = styled(FormIcon)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"], ["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"])));
var ChildrenSpan = styled('span')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  vertical-align: middle;\n"], ["\n  vertical-align: middle;\n"])));
var templateObject_1$5, templateObject_2$1;var FormLabel = React__default.forwardRef(function (_a, ref) {
    // Use ---------------------------------------------------------------------------------------------------------------
    var children = _a.children, icon = _a.icon, size = _a.size, style = _a.style, error = _a.error, warning = _a.warning, props = __rest$4(_a, ["children", "icon", "size", "style", "error", "warning"]);
    var theme = useTheme();
    // Memo --------------------------------------------------------------------------------------------------------------
    var finalProps = useMemo(function () {
        var newStyle = __assign$7({ height: 20, transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined }, style);
        if (!error) {
            newStyle.color = warning ? theme.palette.warning.main : style === null || style === void 0 ? void 0 : style.color;
        }
        return __assign$7({ shrink: true, className: 'FormItemBase-InputLabel', size: size === 'medium' ? 'normal' : size, error: error, style: newStyle }, props);
    }, [size, style, warning, error, props, theme.palette.warning.main]);
    // Render ------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(InputLabel, __assign$7({ ref: ref }, finalProps), icon ? (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(IconFormIcon, null, icon),
        React__default.createElement(ChildrenSpan, null, children))) : (children)));
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabelDefaultProps;var FormBlockDefaultProps = {};var FormDividerDefaultProps = {
    lineVerticalMargin: 9,
};var StyledLineBox = styled(Box)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"], ["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"])));
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
var templateObject_1$4;var DEFAULT_LINE_STYLE = { flex: 1, position: 'relative' };
var FormDivider = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initSize = _a.size, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, hidden = _a.hidden, collapse = _a.collapse, collapseIn = _a.collapseIn, error = _a.error, warning = _a.warning, onCollapseChange = _a.onCollapseChange, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var formSize = useFormState().size;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () {
        if (hidden) {
            return __assign$7(__assign$7({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [hidden, initStyle]);
    var lineStyle = useMemo(function () {
        if (lineVerticalMargin) {
            return __assign$7(__assign$7({}, DEFAULT_LINE_STYLE), { marginTop: lineVerticalMargin, marginBottom: lineVerticalMargin });
        }
        else {
            return DEFAULT_LINE_STYLE;
        }
    }, [lineVerticalMargin]);
    // Event Handler -----------------------------------------------------------------------------------------------------
    var handleClick = useCallback(function () {
        if (collapse) {
            onCollapseChange && onCollapseChange(!collapseIn);
        }
    }, [collapse, collapseIn, onCollapseChange]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Grid, { ref: ref, item: true, xs: 12, style: style, className: classNames$1(className, 'FormDivider'), sx: sx },
        React__default.createElement(Box, { sx: {
                display: 'flex',
                py: 1,
                alignItems: 'center',
                justifyItems: 'center',
                padding: 0,
                cursor: collapse ? 'pointer' : undefined,
            }, onClick: handleClick },
            icon && (React__default.createElement(FormIcon, { style: { opacity: 0.54, marginRight: 5 }, color: error ? 'error' : warning ? 'warning' : undefined, fontSize: size }, icon)),
            label && (React__default.createElement(Box, { sx: {
                    paddingRight: '10px',
                    color: error ? 'error.main' : warning ? 'warning.main' : 'text.secondary',
                    fontWeight: 700,
                    fontSize: size === 'small' ? '11.5px' : '12px',
                } }, label)),
            (line || collapse) && (React__default.createElement("div", { style: lineStyle }, error ? React__default.createElement(StyledErrorLineBox, null) : warning ? React__default.createElement(StyledWarningLineBox, null) : React__default.createElement(StyledLineBox, null))),
            collapse && (React__default.createElement(FormIcon, { sx: { opacity: 0.6, ml: 1 }, color: error ? 'error' : warning ? 'warning' : undefined }, collapseIn ? 'KeyboardDoubleArrowUp' : 'KeyboardDoubleArrowDown')))));
});
FormDivider.displayName = 'FormDivider.';
FormDivider.defaultProps = FormDividerDefaultProps;function useFirstSkipEffect$1(effect, deps) {
    var firstRef = useRef(true);
    useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}var isSame$1 = function (v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i += 1) {
            if (v1[i] !== v2[i])
                return false;
        }
    }
    else {
        return v1 === v2;
    }
    return true;
};function useAutoUpdateState$1(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(0), setUpdateKey = _a[1];
    var _initState = useState(function () {
        return finalStateCallback ? finalStateCallback(state) : state;
    })[0];
    var _state = useRef(_initState);
    var forceUpdate = useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipEffect$1(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!isSame$1(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipEffect$1(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame$1(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame$1(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}var StyledWrapGrid$1 = styled(Grid)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$3;var FormBlock = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, error = _a.error, warning = _a.warning, 
    //----------------------------------------------------------------------------------------------------------------
    hidden = _a.hidden, collapse = _a.collapse, initCollapseIn = _a.collapseIn, 
    //----------------------------------------------------------------------------------------------------------------
    children = _a.children, className = _a.className, initStyle = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, otherFormState = __rest$4(_b, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // State -------------------------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initCollapseIn), collapseIn = _c[0], setCollapseIn = _c[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () {
        if (hidden) {
            return __assign$7(__assign$7({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [hidden, initStyle]);
    // Effect ------------------------------------------------------------------------------------------------------------
    useEffect(function () {
        setCollapseIn(initCollapseIn);
    }, [initCollapseIn, setCollapseIn]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var Container = useMemo(function () {
        return collapse ? Collapse : React__default.Fragment;
    }, [collapse]);
    var containerProps = useMemo(function () {
        return collapse ? { in: collapseIn } : undefined;
    }, [collapse, collapseIn]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContext.Provider, { value: __assign$7({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth }, otherFormState) },
        React__default.createElement(Grid, { item: true, ref: ref, xs: 12, className: classNames$1(className, 'FormBlock'), style: style, sx: sx },
            React__default.createElement(Grid, { container: true, spacing: spacing },
                (icon || label || line || collapse) && (React__default.createElement(FormDivider, { className: 'FormBlock-header', collapse: collapse, collapseIn: collapseIn, size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden, onCollapseChange: collapse ? function (newCollapseIn) { return setCollapseIn(newCollapseIn); } : undefined })),
                React__default.createElement(StyledWrapGrid$1, { item: true, xs: 12 },
                    React__default.createElement(Container, __assign$7({}, containerProps),
                        React__default.createElement(Grid, { container: true, spacing: spacing },
                            React__default.createElement(StyledWrapGrid$1, { item: true, xs: 12, className: 'FormBlock-body' },
                                React__default.createElement(Grid, { className: 'FormBlock-content', container: true, spacing: spacing }, children)))))))));
});
FormBlock.displayName = 'FormBlock';
FormBlock.defaultProps = FormBlockDefaultProps;var FormRowDefaultProps = {};var StyledWrapGrid = styled(Grid)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$2;var FormRow = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, 
    //----------------------------------------------------------------------------------------------------------------
    hidden = _a.hidden, error = _a.error, warning = _a.warning, helperText = _a.helperText, 
    //----------------------------------------------------------------------------------------------------------------
    children = _a.children, className = _a.className, initStyle = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, otherFormState = __rest$4(_b, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // State -----------------------------------------------------------------------------------------------------------
    var formCols = useState({})[0];
    var _c = useState(12), formColAutoXs = _c[0], setFormColAutoXs = _c[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () {
        var style = __assign$7({ width: '100%' }, initStyle);
        if (hidden) {
            style.display = 'none';
        }
        return style;
    }, [hidden, initStyle]);
    // Function - makeFormColXs ----------------------------------------------------------------------------------------
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
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddFormCol = useCallback(function (id, xs) {
        formCols[id] = xs;
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    var handleRemoveFormCol = useCallback(function (id) {
        delete formCols[id];
        makeFormColXs();
    }, [formCols, makeFormColXs]);
    //------------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContext.Provider, { value: __assign$7({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColAutoXs: formColAutoXs, onAddFormCol: handleAddFormCol, onRemoveFormCol: handleRemoveFormCol }, otherFormState) },
        React__default.createElement(Grid, { item: true, ref: ref, xs: 12, className: classNames$1(className, 'FormRow'), style: style, sx: sx },
            React__default.createElement(Grid, { container: true, spacing: spacing },
                (icon || label || line) && (React__default.createElement(FormDivider, { className: classNames$1(className, 'FormRow-header'), size: size, icon: icon, color: color, label: label, line: line, error: error, warning: warning, lineVerticalMargin: lineVerticalMargin, hidden: hidden })),
                React__default.createElement(StyledWrapGrid, { item: true, xs: 12, className: 'FormRow-body' },
                    React__default.createElement(Grid, { className: 'FormRow-content', container: true, spacing: spacing, direction: 'row', style: { flexWrap: 'nowrap' } }, children),
                    helperText && (React__default.createElement(FormHelperText, { className: 'FormRow-helper-text', component: 'div', error: error }, helperText)))))));
});
FormRow.displayName = 'FormRow';
FormRow.defaultProps = FormRowDefaultProps;/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$4(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$4;/** Detect free variable `global` from Node.js. */

var freeGlobal$3 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$3;var freeGlobal$2 = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$4 = freeGlobal$2 || freeSelf$1 || Function('return this')();

var _root = root$4;var root$3 = _root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$3 = function() {
  return root$3.Date.now();
};

var now_1 = now$3;/** Used to match a single whitespace character. */

var reWhitespace$1 = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$2(string) {
  var index = string.length;

  while (index-- && reWhitespace$1.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$2;var trimmedEndIndex$1 = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart$1 = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$2(string) {
  return string
    ? string.slice(0, trimmedEndIndex$1(string) + 1).replace(reTrimStart$1, '')
    : string;
}

var _baseTrim = baseTrim$2;var root$2 = _root;

/** Built-in value references. */
var Symbol$5 = root$2.Symbol;

var _Symbol = Symbol$5;var Symbol$4 = _Symbol;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$3.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$3 = objectProto$3.toString;

/** Built-in value references. */
var symToStringTag$3 = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$3),
      tag = value[symToStringTag$3];

  try {
    value[symToStringTag$3] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}

var _getRawTag = getRawTag$2;/** Used for built-in method references. */

var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$2(value) {
  return nativeObjectToString$2.call(value);
}

var _objectToString = objectToString$2;var Symbol$3 = _Symbol,
    getRawTag$1 = _getRawTag,
    objectToString$1 = _objectToString;

/** `Object#toString` result references. */
var nullTag$1 = '[object Null]',
    undefinedTag$1 = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$2 = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag$1 : nullTag$1;
  }
  return (symToStringTag$2 && symToStringTag$2 in Object(value))
    ? getRawTag$1(value)
    : objectToString$1(value);
}

var _baseGetTag = baseGetTag$2;/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$2(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$2;var baseGetTag$1 = _baseGetTag,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$2(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && baseGetTag$1(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol$2;var baseTrim$1 = _baseTrim,
    isObject$3 = isObject_1,
    isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$2(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$3(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$3(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim$1(value);
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var toNumber_1 = toNumber$2;var isObject$2 = isObject_1,
    now$2 = now_1,
    toNumber$1 = toNumber_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$3 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$1 = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$2(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$2();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$2());
  }

  function debounced() {
    var time = now$2(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce$2;

var debounce$3 = /*@__PURE__*/getDefaultExportFromCjs$1(debounce_1);var debounce$1 = debounce_1,
    isObject$1 = isObject_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle$1(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject$1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle$1;

var throttle$2 = /*@__PURE__*/getDefaultExportFromCjs$1(throttle_1);/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends$1(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$6 = function() {
    __assign$6 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$6.apply(this, arguments);
};

function __rest$3(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}var patchResizeCallback = function (resizeCallback, refreshMode, refreshRate, refreshOptions) {
    switch (refreshMode) {
        case 'debounce':
            return debounce$3(resizeCallback, refreshRate, refreshOptions);
        case 'throttle':
            return throttle$2(resizeCallback, refreshRate, refreshOptions);
        default:
            return resizeCallback;
    }
};
var isFunction$1 = function (fn) { return typeof fn === 'function'; };
var isSSR = function () { return typeof window === 'undefined'; };
var isDOMElement = function (element) {
    return element instanceof Element || element instanceof HTMLDocument;
};/** @class */ ((function (_super) {
    __extends$1(ResizeDetector, _super);
    function ResizeDetector(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelHandler = function () {
            if (_this.resizeHandler && _this.resizeHandler.cancel) {
                // cancel debounced handler
                _this.resizeHandler.cancel();
                _this.resizeHandler = null;
            }
        };
        _this.attachObserver = function () {
            var _a = _this.props, targetRef = _a.targetRef, observerOptions = _a.observerOptions;
            if (isSSR()) {
                return;
            }
            if (targetRef && targetRef.current) {
                _this.targetRef.current = targetRef.current;
            }
            var element = _this.getElement();
            if (!element) {
                // can't find element to observe
                return;
            }
            if (_this.observableElement && _this.observableElement === element) {
                // element is already observed
                return;
            }
            _this.observableElement = element;
            _this.resizeObserver.observe(element, observerOptions);
        };
        _this.getElement = function () {
            var _a = _this.props, querySelector = _a.querySelector, targetDomEl = _a.targetDomEl;
            if (isSSR())
                return null;
            // in case we pass a querySelector
            if (querySelector)
                return document.querySelector(querySelector);
            // in case we pass a DOM element
            if (targetDomEl && isDOMElement(targetDomEl))
                return targetDomEl;
            // in case we pass a React ref using React.createRef()
            if (_this.targetRef && isDOMElement(_this.targetRef.current))
                return _this.targetRef.current;
            // the worse case when we don't receive any information from the parent and the library doesn't add any wrappers
            // we have to use a deprecated `findDOMNode` method in order to find a DOM element to attach to
            var currentElement = findDOMNode(_this);
            if (!currentElement)
                return null;
            var renderType = _this.getRenderType();
            switch (renderType) {
                case 'renderProp':
                    return currentElement;
                case 'childFunction':
                    return currentElement;
                case 'child':
                    return currentElement;
                case 'childArray':
                    return currentElement;
                default:
                    return currentElement.parentElement;
            }
        };
        _this.createResizeHandler = function (entries) {
            var _a = _this.props, _b = _a.handleWidth, handleWidth = _b === void 0 ? true : _b, _c = _a.handleHeight, handleHeight = _c === void 0 ? true : _c, onResize = _a.onResize;
            if (!handleWidth && !handleHeight)
                return;
            var notifyResize = function (_a) {
                var width = _a.width, height = _a.height;
                if (_this.state.width === width && _this.state.height === height) {
                    // skip if dimensions haven't changed
                    return;
                }
                if ((_this.state.width === width && !handleHeight) || (_this.state.height === height && !handleWidth)) {
                    // process `handleHeight/handleWidth` props
                    return;
                }
                onResize === null || onResize === void 0 ? void 0 : onResize(width, height);
                _this.setState({ width: width, height: height });
            };
            entries.forEach(function (entry) {
                var _a = (entry && entry.contentRect) || {}, width = _a.width, height = _a.height;
                var shouldSetSize = !_this.skipOnMount && !isSSR();
                if (shouldSetSize) {
                    notifyResize({ width: width, height: height });
                }
                _this.skipOnMount = false;
            });
        };
        _this.getRenderType = function () {
            var _a = _this.props, render = _a.render, children = _a.children;
            if (isFunction$1(render)) {
                // DEPRECATED. Use `Child Function Pattern` instead
                return 'renderProp';
            }
            if (isFunction$1(children)) {
                return 'childFunction';
            }
            if (isValidElement(children)) {
                return 'child';
            }
            if (Array.isArray(children)) {
                // DEPRECATED. Wrap children with a single parent
                return 'childArray';
            }
            // DEPRECATED. Use `Child Function Pattern` instead
            return 'parent';
        };
        var skipOnMount = props.skipOnMount, refreshMode = props.refreshMode, _a = props.refreshRate, refreshRate = _a === void 0 ? 1000 : _a, refreshOptions = props.refreshOptions;
        _this.state = {
            width: undefined,
            height: undefined
        };
        _this.sizeRef = {
            current: _this.state
        };
        _this.skipOnMount = skipOnMount;
        _this.targetRef = createRef();
        _this.observableElement = null;
        if (isSSR()) {
            return _this;
        }
        _this.resizeHandler = patchResizeCallback(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
        _this.resizeObserver = new window.ResizeObserver(_this.resizeHandler);
        return _this;
    }
    ResizeDetector.prototype.componentDidMount = function () {
        this.attachObserver();
    };
    ResizeDetector.prototype.componentDidUpdate = function () {
        this.attachObserver();
        this.sizeRef.current = this.state;
    };
    ResizeDetector.prototype.componentWillUnmount = function () {
        if (isSSR()) {
            return;
        }
        this.observableElement = null;
        this.resizeObserver.disconnect();
        this.cancelHandler();
    };
    ResizeDetector.prototype.render = function () {
        var _a = this.props, render = _a.render, children = _a.children, _b = _a.nodeType, WrapperTag = _b === void 0 ? 'div' : _b;
        var _c = this.state, width = _c.width, height = _c.height;
        var childProps = { width: width, height: height, targetRef: this.targetRef };
        var renderType = this.getRenderType();
        switch (renderType) {
            case 'renderProp':
                return render === null || render === void 0 ? void 0 : render(childProps);
            case 'childFunction': {
                var childFunction = children;
                return childFunction === null || childFunction === void 0 ? void 0 : childFunction(childProps);
            }
            case 'child': {
                // @TODO bug prone logic
                var child = children;
                if (child.type && typeof child.type === 'string') {
                    // child is a native DOM elements such as div, span etc
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    childProps.targetRef; var nativeProps = __rest$3(childProps, ["targetRef"]);
                    return cloneElement(child, nativeProps);
                }
                // class or functional component otherwise
                return cloneElement(child, childProps);
            }
            case 'childArray': {
                var childArray = children;
                return childArray.map(function (el) { return !!el && cloneElement(el, childProps); });
            }
            default:
                return React__default.createElement(WrapperTag, null);
        }
    };
    return ResizeDetector;
})(PureComponent));function useResizeDetector(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.skipOnMount, skipOnMount = _c === void 0 ? false : _c, refreshMode = _b.refreshMode, _d = _b.refreshRate, refreshRate = _d === void 0 ? 1000 : _d, refreshOptions = _b.refreshOptions, _e = _b.handleWidth, handleWidth = _e === void 0 ? true : _e, _f = _b.handleHeight, handleHeight = _f === void 0 ? true : _f, targetRef = _b.targetRef, observerOptions = _b.observerOptions, onResize = _b.onResize;
    var skipResize = useRef(skipOnMount);
    var _g = useState({
        width: undefined,
        height: undefined
    }), size = _g[0], setSize = _g[1];
    // we are going to use this ref to store the last element that was passed to the hook
    var _h = useState((targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) || null), refElement = _h[0], setRefElement = _h[1];
    // if targetRef is passed, we need to update the refElement
    // we have to use setTimeout because ref get assigned after the hook is called
    // in the future releases we are going to remove targetRef and force users to use ref returned by the hook
    if (targetRef) {
        setTimeout(function () {
            if (targetRef.current !== refElement) {
                setRefElement(targetRef.current);
            }
        }, 0);
    }
    // this is a callback that will be called every time the ref is changed
    // we call setState inside to trigger rerender
    var onRefChange = useCallback(function (node) {
        if (node !== refElement) {
            setRefElement(node);
        }
    }, [refElement]);
    // adding `current` to make it compatible with useRef shape
    onRefChange.current = refElement;
    useEffect(function () {
        return function () {
            // component is unmounted
            // clear ref to avoid memory leaks
            setRefElement(null);
            onRefChange.current = null;
        };
    }, []);
    var shouldSetSize = useCallback(function (prevSize, nextSize) {
        if (prevSize.width === nextSize.width && prevSize.height === nextSize.height) {
            // skip if dimensions haven't changed
            return false;
        }
        if ((prevSize.width === nextSize.width && !handleHeight) ||
            (prevSize.height === nextSize.height && !handleWidth)) {
            // process `handleHeight/handleWidth` props
            return false;
        }
        return true;
    }, [handleWidth, handleHeight]);
    var resizeCallback = useCallback(function (entries) {
        if (!handleWidth && !handleHeight)
            return;
        if (skipResize.current) {
            skipResize.current = false;
            return;
        }
        entries.forEach(function (entry) {
            var _a = (entry === null || entry === void 0 ? void 0 : entry.contentRect) || {}, width = _a.width, height = _a.height;
            setSize(function (prevSize) {
                if (!shouldSetSize(prevSize, { width: width, height: height }))
                    return prevSize;
                return { width: width, height: height };
            });
        });
    }, [handleWidth, handleHeight, skipResize, shouldSetSize]);
    var resizeHandler = useCallback(patchResizeCallback(resizeCallback, refreshMode, refreshRate, refreshOptions), [
        resizeCallback,
        refreshMode,
        refreshRate,
        refreshOptions
    ]);
    // on refElement change
    useEffect(function () {
        var resizeObserver;
        if (refElement) {
            resizeObserver = new window.ResizeObserver(resizeHandler);
            resizeObserver.observe(refElement, observerOptions);
        }
        else {
            if (size.width || size.height) {
                setSize({ width: undefined, height: undefined });
            }
        }
        return function () {
            var _a, _b, _c;
            (_a = resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect) === null || _a === void 0 ? void 0 : _a.call(resizeObserver);
            (_c = (_b = resizeHandler).cancel) === null || _c === void 0 ? void 0 : _c.call(_b);
        };
    }, [resizeHandler, refElement]);
    useEffect(function () {
        onResize === null || onResize === void 0 ? void 0 : onResize(size.width, size.height);
    }, [size]);
    return __assign$6({ ref: onRefChange }, size);
}var FormColDefaultProps = {};var FormCol = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    initGap = _a.gap, icon = _a.icon, label = _a.label, hidden = _a.hidden, error = _a.error, warning = _a.warning, helperText = _a.helperText, helperTextShift = _a.helperTextShift, 
    //----------------------------------------------------------------------------------------------------------------
    xs = _a.xs, className = _a.className, children = _a.children, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    // Ref ---------------------------------------------------------------------------------------------------------------
    var gridRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFormColGap = _b.formColGap, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColAutoXs = _b.formColAutoXs, onAddFormCol = _b.onAddFormCol, onRemoveFormCol = _b.onRemoveFormCol, otherFormState = __rest$4(_b, ["variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "formColAutoXs", "onAddFormCol", "onRemoveFormCol"]);
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var spacing = useMemo(function () { return initSpacing || formSpacing; }, [initSpacing, formSpacing]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var gap = useMemo(function () { return (initGap == null ? formFormColGap : initGap); }, [formFormColGap, initGap]);
    // ResizeDetector --------------------------------------------------------------------------------------------------
    var formColWidth = useResizeDetector({
        targetRef: gridRef,
        handleWidth: true,
        handleHeight: false,
    }).width;
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (hidden) {
            return __assign$7(__assign$7({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [initStyle, hidden]))[0];
    // LayoutEffect ----------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (onAddFormCol)
            onAddFormCol(id, xs);
        return function () {
            if (onRemoveFormCol)
                onRemoveFormCol(id);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xs]);
    // Effect ----------------------------------------------------------------------------------------------------------
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$7({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColXs: xs || formColAutoXs || 12, formColWidth: formColWidth, formColWithLabel: !!label, formColWithHelperText: !!helperText }, otherFormState) },
        React__default.createElement(Grid, { ref: gridRef, item: true, xs: xs || formColAutoXs || 12, className: classNames$1(className, 'FormCol', !!label && 'with-label', !!helperText && 'with-helper-text'), style: style, sx: sx },
            React__default.createElement(Grid, { container: true, direction: 'column' },
                label && (React__default.createElement(Grid, { item: true, className: 'FormCol-header' },
                    React__default.createElement("div", { style: { position: 'relative', height: 20 } },
                        React__default.createElement(FormLabel, { className: 'FormCol-FormLabel', size: size, icon: icon, focused: focused, color: color, error: error, warning: warning, style: { position: 'absolute', left: 5, top: 0 } }, label)))),
                React__default.createElement(Grid, { item: true, xs: 2, className: 'FormCol-content' },
                    React__default.createElement(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: gap } }, children)),
                helperText && (React__default.createElement(Grid, { item: true, className: 'FormCol-helper-text' },
                    React__default.createElement(FormHelperText, { component: 'div', error: error, style: { marginLeft: helperTextShift ? 14 : 5 } }, helperText)))))));
});
FormCol.displayName = 'FormCol';
FormCol.defaultProps = FormColDefaultProps;var FormBodyDefaultProps = {};var StyledContainerDiv = styled('div')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n"], ["\n  flex: 1;\n  position: relative;\n"])));
var StyledContentDiv = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"], ["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"])));
var templateObject_1$1, templateObject_2;var FormBody = function (_a) {
    // Ref ---------------------------------------------------------------------------------------------------------------
    var children = _a.children, hidden = _a.hidden;
    var containerRef = useRef(null);
    // State -------------------------------------------------------------------------------------------------------------
    var _b = useFormState(), spacing = _b.spacing, fullHeight = _b.fullHeight;
    var _c = useState(0), height = _c[0], setHeight = _c[1];
    // -------------------------------------------------------------------------------------------------------------------
    useResizeDetector({
        targetRef: containerRef,
        handleWidth: false,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setHeight(((_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) || 0);
        },
    });
    // -------------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () { return (hidden ? { display: 'none' } : undefined); }, [hidden]);
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
    return (React__default.createElement(StyledContainerDiv, { ref: fullHeight ? containerRef : undefined, className: 'FormBody', style: style },
        React__default.createElement(StyledContentDiv, { style: contentStyle },
            React__default.createElement(Grid, { container: true, spacing: spacing, direction: 'column' }, children))));
};
FormBody.displayName = 'FormBody';
FormBody.defaultProps = FormBodyDefaultProps;var FormFooterDefaultProps = {};var FormFooter = function (_a) {
    var children = _a.children, noLine = _a.noLine, hidden = _a.hidden;
    var spacing = useFormState().spacing;
    var style = useMemo(function () { return (hidden ? { display: 'none' } : undefined); }, [hidden]);
    return (React__default.createElement(Grid, { item: true, xs: 12, className: 'FormFooter', style: style },
        React__default.createElement(Grid, { container: true, spacing: spacing, direction: 'column' },
            !noLine && (React__default.createElement(Grid, { item: true, xs: 12, sx: { mt: spacing } },
                React__default.createElement(FormDivider, { line: true }))),
            children)));
};
FormFooter.displayName = 'FormFooter';
FormFooter.defaultProps = FormFooterDefaultProps;var FormTextFieldDefaultProps = {};function styleInject(css, ref) {
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
}var css_248z$l = ".FormTextField {\n  min-width: 200px;\n}\n.FormTextField .clear-icon-button-wrap {\n  visibility: hidden;\n}\n.FormTextField.variant-filled .clear-icon-button-wrap {\n  margin-top: 9px;\n  margin-bottom: -9px;\n}\n.FormTextField:hover .clear-icon-button-wrap.show,\n.FormTextField .MuiInputBase-root.Mui-focused .clear-icon-button-wrap.show {\n  visibility: visible;\n}";
styleInject(css_248z$l);var FormTextField = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var _b;
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, required = _a.required, initValue = _a.value, initData = _a.data, icon = _a.icon, labelIcon = _a.labelIcon, initLabel = _a.label, initError = _a.error, helperText = _a.helperText, exceptValue = _a.exceptValue, readOnly = _a.readOnly, tabIndex = _a.tabIndex, initDisabled = _a.disabled, placeholder = _a.placeholder, maxLength = _a.maxLength, clear = _a.clear, width = _a.width, initMuiInputProps = _a.InputProps, initMuiInputLabelProps = _a.InputLabelProps, initInputProps = _a.inputProps, initInputRef = _a.inputRef, select = _a.select, SelectProps = _a.SelectProps, multiline = _a.multiline, validPattern = _a.validPattern, invalidPattern = _a.invalidPattern, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, noFormValueItem = _a.noFormValueItem, hidden = _a.hidden, disableReturnKey = _a.disableReturnKey, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest$4(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "required", "value", "data", "icon", "labelIcon", "label", "error", "helperText", "exceptValue", "readOnly", "tabIndex", "disabled", "placeholder", "maxLength", "clear", "width", "InputProps", "InputLabelProps", "inputProps", "inputRef", "select", "SelectProps", "multiline", "validPattern", "invalidPattern", "startAdornment", "endAdornment", "noFormValueItem", "hidden", "disableReturnKey", "onChange", "onValue", "onValidate", "onBlur", "onKeyDown", "className", "style"]);
    var id = useId();
    // Ref -------------------------------------------------------------------------------------------------------------
    var inputRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _c = useFormState(), formVariant = _c.variant, formSize = _c.size, formColor = _c.color, formFocused = _c.focused, formLabelShrink = _c.labelShrink, formFullWidth = _c.fullWidth, formColWithHelperText = _c.formColWithHelperText, onAddValueItem = _c.onAddValueItem, onRemoveValueItem = _c.onRemoveValueItem, onValueChange = _c.onValueChange, onValueChangeByUser = _c.onValueChangeByUser, onRequestSearchSubmit = _c.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = useState(false), showClear = _f[0], setShowClear = _f[1];
    var _g = useAutoUpdateState$1(initDisabled), disabled = _g[0], setDisabled = _g[1];
    var _h = useAutoUpdateState$1(initData), data = _h[0], setData = _h[1];
    // Memo - muiInputLabelProps ---------------------------------------------------------------------------------------
    var muiInputLabelProps = useMemo(function () {
        if (labelShrink || placeholder) {
            return __assign$7(__assign$7({}, initMuiInputLabelProps), { shrink: true });
        }
        else {
            return initMuiInputLabelProps;
        }
    }, [initMuiInputLabelProps, labelShrink, placeholder]);
    // Memo - inputProps -----------------------------------------------------------------------------------------------
    var inputProps = useMemo(function () {
        if (readOnly != null || maxLength != null) {
            var finalInputProps = __assign$7(__assign$7({}, initInputProps), { readOnly: readOnly, maxLength: maxLength });
            if (readOnly) {
                finalInputProps.tabIndex = -1;
                finalInputProps.className = classNames$1(finalInputProps.className, 'Mui-disabled');
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
    // Memo - style ----------------------------------------------------------------------------------------------------
    var style = useMemo(function () {
        var newStyle = __assign$7({}, initStyle);
        if (width != null) {
            newStyle.width = width;
        }
        if (hidden) {
            newStyle.display = 'none';
        }
        return newStyle;
    }, [initStyle, width, hidden]);
    // Memo - label ----------------------------------------------------------------------------------------------------
    var label = useMemo(function () {
        return labelIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React__default.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]);
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _j = useAutoUpdateState$1(initValue, getFinalValue), value = _j[0], setValue = _j[1];
    useEffect(function () {
        setShowClear(clear ? notEmpty(value) : false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        if (!noFormValueItem) {
            onValueChange(name, value);
        }
    }, [value]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a, _b;
        if (initInputRef) {
            (_a = initInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [initInputRef, inputRef]);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Memo - muiInputProps --------------------------------------------------------------------------------------------
    var muiInputProps = useMemo(function () {
        var muiInputProps = __assign$7({}, initMuiInputProps);
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React__default.createElement(React__default.Fragment, null,
                icon && (React__default.createElement(InputAdornment, { position: 'start' },
                    React__default.createElement(FormIcon, { fontSize: 'small' }, icon))),
                startAdornment && React__default.createElement(InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment || muiInputProps.endAdornment || (clear && !readOnly && !disabled)) {
            muiInputProps.endAdornment = (React__default.createElement(React__default.Fragment, null,
                clear && !readOnly && !disabled && (React__default.createElement(InputAdornment, { className: classNames$1('clear-icon-button-wrap', showClear && 'show'), position: 'end' },
                    React__default.createElement(IconButton, { className: 'clear-icon-button', size: 'small', tabIndex: -1, onClick: function () {
                            var finalValue = getFinalValue('');
                            setValue(finalValue);
                            focus();
                            if (!noFormValueItem) {
                                nextTick(function () {
                                    onValueChangeByUser(name, finalValue);
                                    onRequestSearchSubmit(name, finalValue);
                                });
                            }
                        } },
                        React__default.createElement(FormIcon, { fontSize: 'inherit' }, "ClearRounded")))),
                muiInputProps.endAdornment,
                endAdornment && React__default.createElement(InputAdornment, { position: 'end' }, endAdornment)));
        }
        return muiInputProps;
    }, [
        clear,
        disabled,
        endAdornment,
        focus,
        getFinalValue,
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
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || (!noFormValueItem && onAddValueItem)) {
            var lastValue_1 = value;
            var lastData_1 = data;
            var lastDisabled_1 = !!disabled;
            var commands = {
                getType: function () { return 'default'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () {
                    lastValue_1 = getFinalValue(initValue);
                    setValue(lastValue_1);
                },
                getValue: function () { return lastValue_1; },
                setValue: function (value) {
                    lastValue_1 = getFinalValue(value);
                    setValue(lastValue_1);
                },
                getData: function () { return lastData_1; },
                setData: function (data) {
                    lastData_1 = data;
                    setData(data);
                },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return lastDisabled_1; },
                setDisabled: function (disabled) {
                    lastDisabled_1 = disabled;
                    setDisabled(disabled);
                },
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(lastValue_1); },
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
        name,
        initValue,
        value,
        data,
        getFinalValue,
        exceptValue,
        disabled,
        focus,
        validate,
        ref,
        noFormValueItem,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        setData,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (e) {
        var finalValue = getFinalValue(e.target.value);
        setValue(finalValue);
        if (!noFormValueItem) {
            nextTick(function () {
                onValueChangeByUser(name, finalValue);
                if (select) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
    }, [getFinalValue, setValue, noFormValueItem, onValueChangeByUser, name, select, onRequestSearchSubmit]);
    var handleBlur = useCallback(function (e) {
        if (error)
            validate(value);
        if (onBlur)
            onBlur(e);
    }, [error, value, validate, onBlur]);
    var handleKeyDown = useCallback(function (e) {
        if (['Enter'].includes(e.key) &&
            !select &&
            (!multiline || (multiline && disableReturnKey)) &&
            !noFormValueItem) {
            e.preventDefault();
            e.stopPropagation();
            onRequestSearchSubmit(name, value);
        }
        if (onKeyDown)
            onKeyDown(e);
    }, [select, multiline, disableReturnKey, noFormValueItem, onKeyDown, onRequestSearchSubmit, name, value]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(TextField, __assign$7({}, props, { variant: variant, size: size, color: color, focused: focused || undefined, name: name, label: label, placeholder: placeholder, className: classNames$1(className, 'FormValueItem', 'FormTextField', "variant-".concat(variant)), inputRef: initInputRef ? initInputRef : inputRef, value: value, required: required, fullWidth: !width && fullWidth, error: error, helperText: formColWithHelperText ? undefined : error ? errorHelperText : helperText, FormHelperTextProps: { component: 'div' }, disabled: disabled, InputProps: muiInputProps, InputLabelProps: muiInputLabelProps, inputProps: ((_b = initInputProps === null || initInputProps === void 0 ? void 0 : initInputProps.className) === null || _b === void 0 ? void 0 : _b.includes('FormTag-Input')) ? initInputProps : inputProps, style: style, select: select, SelectProps: SelectProps, multiline: multiline, onChange: handleChange, onBlur: handleBlur, onKeyDown: handleKeyDown })));
});
FormTextField.displayName = 'FormText';
FormTextField.defaultProps = FormTextFieldDefaultProps;var FormHiddenDefaultProps = __assign$7({}, FormTextFieldDefaultProps);var css_248z$k = ".FormHidden {\n  display: none !important;\n}";
styleInject(css_248z$k);var FormHidden = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$4(_a, ["className"]);
    return (React__default.createElement(FormTextField, __assign$7({ ref: ref, className: classNames$1(className, 'FormHidden'), type: 'hidden', variant: 'standard' }, props)));
});
FormHidden.displayName = 'FormHidden';
FormHidden.defaultProps = FormHiddenDefaultProps;var FormTagDefaultProps = __assign$7(__assign$7({}, FormTextFieldDefaultProps), { value: [], clear: true, formValueSeparator: ',' });var FormTextDefaultProps = __assign$7(__assign$7({}, FormTextFieldDefaultProps), { clear: true, value: '' });var FormText = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$4(_a, ["className"]);
    return (React__default.createElement(FormTextField, __assign$7({ ref: ref, className: classNames$1(className, 'FormText'), disableReturnKey: true }, props)));
});
FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;var css_248z$j = ".FormTag.FormTextField {\n  min-width: 200px;\n}";
styleInject(css_248z$j);var FormTag = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var className = _a.className, name = _a.name, initValue = _a.value, exceptValue = _a.exceptValue, required = _a.required, readOnly = _a.readOnly, maxLength = _a.maxLength, disabled = _a.disabled, initFullWidth = _a.fullWidth, initError = _a.error, helperText = _a.helperText, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, onValidate = _a.onValidate, onKeyDown = _a.onKeyDown, onChange = _a.onChange, onValue = _a.onValue, onBlur = _a.onBlur, props = __rest$4(_a, ["className", "name", "value", "exceptValue", "required", "readOnly", "maxLength", "disabled", "fullWidth", "error", "helperText", "formValueSeparator", "formValueSort", "onValidate", "onKeyDown", "onChange", "onValue", "onBlur"]);
    var _b = useFormState(), formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit, otherFormState = __rest$4(_b, ["fullWidth", "onAddValueItem", "onValueChange", "onValueChangeByUser", "onRequestSearchSubmit"]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        var finalValue;
        if (value instanceof Set) {
            finalValue = Array.from(value);
        }
        else {
            var valueSet_1 = new Set();
            (value || []).forEach(function (value) { return valueSet_1.add(value); });
            finalValue = Array.from(valueSet_1);
        }
        return onValue ? onValue(finalValue) : finalValue;
    }, [onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _c = useState(function () {
        return new Set(getFinalValue(initValue || []));
    }), valueSet = _c[0], setValueSet = _c[1];
    var _d = useAutoUpdateState$1(initValue || [], getFinalValue), value = _d[0], setValue = _d[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    //------------------------------------------------------------------------------------------------------------------
    var _e = useState(''), inputValue = _e[0], setInputValue = _e[1];
    var _f = useAutoUpdateState$1(initError), error = _f[0], setError = _f[1];
    var _g = useState(), errorHelperText = _g[0], setErrorHelperText = _g[1];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (!isSame$2(value, initValue)) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Function - getExtraCommands -------------------------------------------------------------------------------------
    var getExtraCommands = useCallback(function () {
        return {
            isFormValueSort: function () { return !!formValueSort; },
            getFormValueSeparator: function () { return formValueSeparator; },
        };
    }, [formValueSort, formValueSeparator]);
    // Function - getCommands ------------------------------------------------------------------------------------------
    var getCommands = useCallback(function (baseCommands) {
        var lastValue = value;
        return __assign$7(__assign$7(__assign$7({}, baseCommands), { getReset: function () { return getFinalValue(initValue || []); }, reset: function () {
                lastValue = getFinalValue(initValue || []);
                setValue(lastValue);
            }, getValue: function () { return lastValue; }, setValue: function (newValue) {
                var finalValue = getFinalValue(newValue);
                if (!isSame$2(lastValue, finalValue)) {
                    lastValue = finalValue;
                    setValueSet(new Set(lastValue));
                    setValue(lastValue);
                }
            }, validate: function () { return validate(value); } }), getExtraCommands());
    }, [value, getExtraCommands, getFinalValue, initValue, setValue, validate]);
    // Function - appendTag, removeTag ---------------------------------------------------------------------------------
    var appendTag = useCallback(function (tag) {
        if (valueSet.has(tag)) {
            setInputValue('');
        }
        else {
            valueSet.add(tag);
            Array.from(valueSet);
            var finalValue_1 = getFinalValue(valueSet);
            setValue(finalValue_1);
            nextTick(function () {
                setInputValue('');
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [valueSet, getFinalValue, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    var removeTag = useCallback(function (tag) {
        if (valueSet.has(tag)) {
            valueSet.delete(tag);
            var finalValue_2 = getFinalValue(valueSet);
            setValue(finalValue_2);
            nextTick(function () {
                onValueChangeByUser(name, finalValue_2);
                onRequestSearchSubmit(name, finalValue_2);
            });
        }
    }, [valueSet, getFinalValue, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddValueItem = useCallback(function (id, commands) {
        onAddValueItem(id, getCommands(commands));
    }, [onAddValueItem, getCommands]);
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
    var handleInputKeyDown = useCallback(function (e) {
        if ([' ', ',', 'Enter'].includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            if (notEmpty(inputValue)) {
                appendTag(inputValue);
            }
        }
        else {
            if (onKeyDown)
                onKeyDown(e);
        }
    }, [inputValue, appendTag, onKeyDown]);
    var handleInputChange = useCallback(function (value) {
        setInputValue(value.replace(/ /g, '').replace(/,/g, ''));
    }, []);
    var handleBlur = useCallback(function (e) {
        if (notEmpty(inputValue)) {
            appendTag(inputValue);
        }
        if (onBlur)
            onBlur(e);
    }, [appendTag, inputValue, onBlur]);
    var handleRenderTags = useCallback(function (tags) {
        return tags.map(function (tag) { return (React__default.createElement(Chip, { className: 'MuiAutocomplete-tag', key: tag, label: tag, size: 'small', disabled: readOnly || disabled, onDelete: readOnly || disabled ? undefined : function () { return removeTag(tag); } })); });
    }, [disabled, readOnly, removeTag]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$7({ fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, 
            // eslint-disable-next-line
            onValueChange: function () { }, 
            // eslint-disable-next-line
            onValueChangeByUser: function () { }, 
            // eslint-disable-next-line
            onRequestSearchSubmit: function () { } }, otherFormState) },
        React__default.createElement(Autocomplete, { options: [], multiple: true, freeSolo: true, value: value, readOnly: readOnly, disableClearable: true, disabled: disabled, renderTags: handleRenderTags, inputValue: inputValue, style: { display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }, renderInput: function (params) {
                var _a;
                var renderProps = __assign$7({}, props);
                renderProps.InputLabelProps = __assign$7(__assign$7({}, renderProps.InputLabelProps), { htmlFor: params.InputLabelProps.htmlFor, id: params.InputLabelProps.id });
                renderProps.InputProps = __assign$7(__assign$7({}, renderProps.InputProps), { className: classNames$1((_a = renderProps.InputProps) === null || _a === void 0 ? void 0 : _a.className, params.InputProps.className), ref: params.InputProps.ref });
                if (notEmpty(params.InputProps.startAdornment)) {
                    renderProps.InputProps.startAdornment = (React__default.createElement(React__default.Fragment, null,
                        renderProps.InputProps.startAdornment,
                        params.InputProps.startAdornment));
                }
                renderProps.inputProps = __assign$7(__assign$7({}, renderProps.inputProps), params.inputProps);
                renderProps.inputProps.className = classNames$1(renderProps.inputProps.className, 'FormTag-Input');
                renderProps.inputProps.readOnly = readOnly;
                if (readOnly) {
                    renderProps.inputProps.tabIndex = -1;
                }
                renderProps.inputProps.maxLength = maxLength;
                if (readOnly) {
                    renderProps.inputProps.className = classNames$1(renderProps.inputProps.className, 'Mui-disabled');
                }
                return (React__default.createElement(FormText, __assign$7({}, renderProps, { ref: handleRef, name: name, className: classNames$1(className, 'FormValueItem', 'FormTag'), error: error, disabled: disabled, fullWidth: fullWidth, required: required, value: inputValue, exceptValue: exceptValue, helperText: error ? errorHelperText : helperText, onKeyDown: handleInputKeyDown, onChange: handleInputChange, onBlur: handleBlur })));
            } })));
});
FormTag.displayName = 'FormTag';
FormTag.defaultProps = FormTagDefaultProps;var FormEmailDefaultProps = __assign$7(__assign$7({}, FormTextDefaultProps), { validPattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g });var FormEmail = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, onValue = _a.onValue, props = __rest$4(_a, ["className", "onValue"]);
    var handleValue = useCallback(function (value) {
        var newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    // Render ------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$7({ ref: ref, className: classNames$1(className, 'FormEmail'), type: 'email', onValue: handleValue }, props)));
});
FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;var FormPasswordDefaultProps = __assign$7(__assign$7({}, FormTextFieldDefaultProps), { clear: false, eye: true });var css_248z$i = ".FormPassword .eye-icon-button-wrap {\n  visibility: hidden;\n}\n.FormPassword.variant-filled .eye-icon-button-wrap {\n  margin-top: 9px;\n  margin-bottom: -9px;\n}\n.FormPassword:hover .eye-icon-button-wrap.show,\n.FormPassword .MuiInputBase-root.Mui-focused .eye-icon-button-wrap.show {\n  visibility: visible;\n}";
styleInject(css_248z$i);var StyledEyeInputAdornment = styled(InputAdornment)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  visibility: hidden;\n"], ["\n  visibility: hidden;\n"])));
var FormPassword = React__default.forwardRef(function (_a, ref) {
    // State -----------------------------------------------------------------------------------------------------------
    var className = _a.className, initMuiInputProps = _a.InputProps, eye = _a.eye, onChange = _a.onChange, props = __rest$4(_a, ["className", "InputProps", "eye", "onChange"]);
    var _b = useState('password'), type = _b[0], setType = _b[1];
    var _c = useState(notEmpty(props.value)), showEye = _c[0], setShowEye = _c[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var muiInputProps = useMemo(function () {
        if (eye) {
            var newProps = __assign$7({}, initMuiInputProps);
            newProps.endAdornment = (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(StyledEyeInputAdornment, { position: 'end', className: classNames$1('eye-icon-button-wrap', showEye && 'show') },
                    React__default.createElement(IconButton, { size: 'small', tabIndex: -1, onClick: function () {
                            setType(type === 'password' ? 'text' : 'password');
                        } },
                        React__default.createElement(Icon$1, { fontSize: 'inherit' }, type === 'password' ? 'visibility' : 'visibility_off'))),
                newProps.endAdornment));
            return newProps;
        }
        else {
            return initMuiInputProps;
        }
    }, [eye, initMuiInputProps, showEye, type]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (value) {
        setShowEye(notEmpty(value));
        onChange && onChange(value);
    }, [onChange]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$7({ ref: ref, className: classNames$1(className, 'FormPassword'), onChange: handleChange, type: type, InputProps: muiInputProps }, props)));
});
FormPassword.displayName = 'FormPassword';
FormPassword.defaultProps = FormPasswordDefaultProps;
var templateObject_1;var FormTelDefaultProps = __assign$7(__assign$7({}, FormTextDefaultProps), { validPattern: /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/ });var FormTel = React__default.forwardRef(function (_a, ref) {
    // Event Handler ---------------------------------------------------------------------------------------------------
    var className = _a.className, onValue = _a.onValue, props = __rest$4(_a, ["className", "onValue"]);
    var handleValue = useCallback(function (value) {
        var newValue = autoDash$2(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$7({ ref: ref, className: classNames$1(className, 'FormTel'), onValue: handleValue, maxLength: 13 }, props)));
});
FormTel.displayName = 'FormTel';
FormTel.defaultProps = FormTelDefaultProps;
function autoDash$2(tel) {
    var str = tel.replace(/[^0-9*]/g, '');
    var isLastDash = tel.substring(tel.length - 1, tel.length) === '-';
    if (str.substring(0, 1) !== '0' && !['15', '16', '18'].includes(str.substring(0, 2))) {
        return tel;
    }
    var tmp = '';
    var preLen;
    switch (str.substring(0, 2)) {
        case '02':
            preLen = 2;
            break;
        case '15':
        case '16':
        case '18':
            preLen = 4;
            break;
        default:
            preLen = 3;
    }
    if (['15', '16', '18'].includes(str.substring(0, 2))) {
        if (str.length <= preLen) {
            tmp = str;
        }
        else if (str.length <= preLen + 4) {
            tmp += str.substring(0, preLen);
            tmp += '-';
            tmp += str.substring(preLen);
        }
        else {
            tmp = str;
        }
    }
    else if (str.length <= preLen) {
        tmp = str;
    }
    else if (str.length <= preLen + 3) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen);
    }
    else if (str.length <= preLen + 7) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen, preLen + 3);
        tmp += '-';
        tmp += str.substring(preLen + 3);
    }
    else if (str.length <= preLen + 8) {
        tmp += str.substring(0, preLen);
        tmp += '-';
        tmp += str.substring(preLen, preLen + 4);
        tmp += '-';
        tmp += str.substring(preLen + 4);
    }
    else {
        tmp = str;
    }
    if (isLastDash) {
        if (str.length === preLen) {
            tmp += '-';
        }
    }
    return tmp;
}var FormMobileDefaultProps = __assign$7(__assign$7({}, FormTelDefaultProps), { validPattern: /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/ });var FormMobile = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$4(_a, ["className"]);
    return React__default.createElement(FormTel, __assign$7({ ref: ref, className: classNames$1(className, 'FormMobile') }, props));
});
FormMobile.displayName = 'FormMobile';
FormMobile.defaultProps = FormMobileDefaultProps;/**
 * react-number-format - 5.3.1
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2023 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */


/******************************************************************************
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

function __rest$2(s, e) {
    var t = {};
    for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        { t[p] = s[p]; } }
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        { for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                { t[p[i]] = s[p[i]]; }
        } }
    return t;
}

var SourceType;
(function (SourceType) {
    SourceType["event"] = "event";
    SourceType["props"] = "prop";
})(SourceType || (SourceType = {}));

// basic noop function
function noop() { }
function memoizeOnce(cb) {
    var lastArgs;
    var lastValue = undefined;
    return function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (lastArgs &&
            args.length === lastArgs.length &&
            args.every(function (value, index) { return value === lastArgs[index]; })) {
            return lastValue;
        }
        lastArgs = args;
        lastValue = cb.apply(void 0, args);
        return lastValue;
    };
}
function charIsNumber(char) {
    return !!(char || '').match(/\d/);
}
function isNil(val) {
    return val === null || val === undefined;
}
function isNanValue(val) {
    return typeof val === 'number' && isNaN(val);
}
function isNotValidValue(val) {
    return isNil(val) || isNanValue(val) || (typeof val === 'number' && !isFinite(val));
}
function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
function getThousandsGroupRegex(thousandsGroupStyle) {
    switch (thousandsGroupStyle) {
        case 'lakh':
            return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
        case 'wan':
            return /(\d)(?=(\d{4})+(?!\d))/g;
        case 'thousand':
        default:
            return /(\d)(?=(\d{3})+(?!\d))/g;
    }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
    var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
    var index = str.search(/[1-9]/);
    index = index === -1 ? str.length : index;
    return (str.substring(0, index) +
        str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator));
}
function usePersistentCallback(cb) {
    var callbackRef = useRef(cb);
    // keep the callback ref upto date
    callbackRef.current = cb;
    /**
     * initialize a persistent callback which never changes
     * through out the component lifecycle
     */
    var persistentCbRef = useRef(function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return callbackRef.current.apply(callbackRef, args);
    });
    return persistentCbRef.current;
}
//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr, allowNegative) {
    if ( allowNegative === void 0 ) allowNegative = true;

    var hasNegation = numStr[0] === '-';
    var addNegation = hasNegation && allowNegative;
    numStr = numStr.replace('-', '');
    var parts = numStr.split('.');
    var beforeDecimal = parts[0];
    var afterDecimal = parts[1] || '';
    return {
        beforeDecimal: beforeDecimal,
        afterDecimal: afterDecimal,
        hasNegation: hasNegation,
        addNegation: addNegation,
    };
}
function fixLeadingZero(numStr) {
    if (!numStr)
        { return numStr; }
    var isNegative = numStr[0] === '-';
    if (isNegative)
        { numStr = numStr.substring(1, numStr.length); }
    var parts = numStr.split('.');
    var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
    var afterDecimal = parts[1] || '';
    return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}
/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr, scale, fixedDecimalScale) {
    var str = '';
    var filler = fixedDecimalScale ? '0' : '';
    for (var i = 0; i <= scale - 1; i++) {
        str += numStr[i] || filler;
    }
    return str;
}
function repeat(str, count) {
    return Array(count + 1).join(str);
}
function toNumericString(num) {
    var _num = num + ''; // typecast number to string
    // store the sign and remove it from the number.
    var sign = _num[0] === '-' ? '-' : '';
    if (sign)
        { _num = _num.substring(1); }
    // split the number into cofficient and exponent
    var ref = _num.split(/[eE]/g);
    var coefficient = ref[0];
    var exponent = ref[1];
    // covert exponent to number;
    exponent = Number(exponent);
    // if there is no exponent part or its 0, return the coffiecient with sign
    if (!exponent)
        { return sign + coefficient; }
    coefficient = coefficient.replace('.', '');
    /**
     * for scientific notation the current decimal index will be after first number (index 0)
     * So effective decimal index will always be 1 + exponent value
     */
    var decimalIndex = 1 + exponent;
    var coffiecientLn = coefficient.length;
    if (decimalIndex < 0) {
        // if decimal index is less then 0 add preceding 0s
        // add 1 as join will have
        coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
    }
    else if (decimalIndex >= coffiecientLn) {
        // if decimal index is less then 0 add leading 0s
        coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
    }
    else {
        // else add decimal point at proper index
        coefficient =
            (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
    }
    return sign + coefficient;
}
/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr, scale, fixedDecimalScale) {
    //if number is empty don't do anything return empty string
    if (['', '-'].indexOf(numStr) !== -1)
        { return numStr; }
    var shouldHaveDecimalSeparator = (numStr.indexOf('.') !== -1 || fixedDecimalScale) && scale;
    var ref = splitDecimal(numStr);
    var beforeDecimal = ref.beforeDecimal;
    var afterDecimal = ref.afterDecimal;
    var hasNegation = ref.hasNegation;
    var floatValue = parseFloat(("0." + (afterDecimal || '0')));
    var floatValueStr = afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
    var roundedDecimalParts = floatValueStr.split('.');
    var intPart = beforeDecimal
        .split('')
        .reverse()
        .reduce(function (roundedStr, current, idx) {
        if (roundedStr.length > idx) {
            return ((Number(roundedStr[0]) + Number(current)).toString() +
                roundedStr.substring(1, roundedStr.length));
        }
        return current + roundedStr;
    }, roundedDecimalParts[0]);
    var decimalPart = limitToScale(roundedDecimalParts[1] || '', scale, fixedDecimalScale);
    var negation = hasNegation ? '-' : '';
    var decimalSeparator = shouldHaveDecimalSeparator ? '.' : '';
    return ("" + negation + intPart + decimalSeparator + decimalPart);
}
/** set the caret positon in an input field **/
function setCaretPosition(el, caretPos) {
    el.value = el.value;
    // ^ this is used to not only get 'focus', but
    // to make sure we don't have it everything -selected-
    // (it causes an issue in chrome, and having it doesn't hurt any other browser)
    if (el !== null) {
        /* @ts-ignore */
        if (el.createTextRange) {
            /* @ts-ignore */
            var range = el.createTextRange();
            range.move('character', caretPos);
            range.select();
            return true;
        }
        // (el.selectionStart === 0 added for Firefox bug)
        if (el.selectionStart || el.selectionStart === 0) {
            el.focus();
            el.setSelectionRange(caretPos, caretPos);
            return true;
        }
        // fail city, fortunately this never happens (as far as I've tested) :)
        el.focus();
        return false;
    }
}
var findChangeRange = memoizeOnce(function (prevValue, newValue) {
    var i = 0, j = 0;
    var prevLength = prevValue.length;
    var newLength = newValue.length;
    while (prevValue[i] === newValue[i] && i < prevLength)
        { i++; }
    //check what has been changed from last
    while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
        newLength - j > i &&
        prevLength - j > i) {
        j++;
    }
    return {
        from: { start: i, end: prevLength - j },
        to: { start: i, end: newLength - j },
    };
});
/*
  Returns a number whose value is limited to the given range
*/
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function geInputCaretPosition(el) {
    /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
    return Math.max(el.selectionStart, el.selectionEnd);
}
function addInputMode() {
    return (typeof navigator !== 'undefined' &&
        !(navigator.platform && /iPhone|iPod/.test(navigator.platform)));
}
function getDefaultChangeMeta(value) {
    return {
        from: {
            start: 0,
            end: 0,
        },
        to: {
            start: 0,
            end: value.length,
        },
        lastValue: '',
    };
}
function defaultIsCharacterSame(ref) {
    var currentValue = ref.currentValue;
    var formattedValue = ref.formattedValue;
    var currentValueIndex = ref.currentValueIndex;
    var formattedValueIndex = ref.formattedValueIndex;

    return currentValue[currentValueIndex] === formattedValue[formattedValueIndex];
}
function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter, 
/**
 * format function can change the character, the caret engine relies on mapping old value and new value
 * In such case if character is changed, parent can tell which chars are equivalent
 * Some example, all allowedDecimalCharacters are updated to decimalCharacters, 2nd case if user is coverting
 * number to different numeric system.
 */
isCharacterSame) {
    if ( isCharacterSame === void 0 ) isCharacterSame = defaultIsCharacterSame;

    /**
     * if something got inserted on empty value, add the formatted character before the current value,
     * This is to avoid the case where typed character is present on format characters
     */
    var firstAllowedPosition = boundary.findIndex(function (b) { return b; });
    var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
    if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
        lastFormattedValue = prefixFormat;
        curValue = prefixFormat + curValue;
        curCaretPos = curCaretPos + prefixFormat.length;
    }
    var curValLn = curValue.length;
    var formattedValueLn = newFormattedValue.length;
    // create index map
    var addedIndexMap = {};
    var indexMap = new Array(curValLn);
    for (var i = 0; i < curValLn; i++) {
        indexMap[i] = -1;
        for (var j = 0, jLn = formattedValueLn; j < jLn; j++) {
            var isCharSame = isCharacterSame({
                currentValue: curValue,
                lastValue: lastFormattedValue,
                formattedValue: newFormattedValue,
                currentValueIndex: i,
                formattedValueIndex: j,
            });
            if (isCharSame && addedIndexMap[j] !== true) {
                indexMap[i] = j;
                addedIndexMap[j] = true;
                break;
            }
        }
    }
    /**
     * For current caret position find closest characters (left and right side)
     * which are properly mapped to formatted value.
     * The idea is that the new caret position will exist always in the boundary of
     * that mapped index
     */
    var pos = curCaretPos;
    while (pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))) {
        pos++;
    }
    // if the caret position is on last keep the endIndex as last for formatted value
    var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
    pos = curCaretPos - 1;
    while (pos > 0 && indexMap[pos] === -1)
        { pos--; }
    var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
    /**
     * case where a char is added on suffix and removed from middle, example 2sq345 becoming $2,345 sq
     * there is still a mapping but the order of start index and end index is changed
     */
    if (startIndex > endIndex)
        { return endIndex; }
    /**
     * given the current caret position if it closer to startIndex
     * keep the new caret position on start index or keep it closer to endIndex
     */
    return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
}
/* This keeps the caret within typing area so people can't type in between prefix or suffix or format characters */
function getCaretPosInBoundary(value, caretPos, boundary, direction) {
    var valLn = value.length;
    // clamp caret position to [0, value.length]
    caretPos = clamp(caretPos, 0, valLn);
    if (direction === 'left') {
        while (caretPos >= 0 && !boundary[caretPos])
            { caretPos--; }
        // if we don't find any suitable caret position on left, set it on first allowed position
        if (caretPos === -1)
            { caretPos = boundary.indexOf(true); }
    }
    else {
        while (caretPos <= valLn && !boundary[caretPos])
            { caretPos++; }
        // if we don't find any suitable caret position on right, set it on last allowed position
        if (caretPos > valLn)
            { caretPos = boundary.lastIndexOf(true); }
    }
    // if we still don't find caret position, set it at the end of value
    if (caretPos === -1)
        { caretPos = valLn; }
    return caretPos;
}
function caretUnknownFormatBoundary(formattedValue) {
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function () { return true; });
    for (var i = 0, ln = boundaryAry.length; i < ln; i++) {
        // consider caret to be in boundary if it is before or after numeric value
        boundaryAry[i] = Boolean(charIsNumber(formattedValue[i]) || charIsNumber(formattedValue[i - 1]));
    }
    return boundaryAry;
}
function useInternalValues(value, defaultValue, valueIsNumericString, format, removeFormatting, onValueChange) {
    if ( onValueChange === void 0 ) onValueChange = noop;

    var getValues = usePersistentCallback(function (value, valueIsNumericString) {
        var formattedValue, numAsString;
        if (isNotValidValue(value)) {
            numAsString = '';
            formattedValue = '';
        }
        else if (typeof value === 'number' || valueIsNumericString) {
            numAsString = typeof value === 'number' ? toNumericString(value) : value;
            formattedValue = format(numAsString);
        }
        else {
            numAsString = removeFormatting(value, undefined);
            formattedValue = format(numAsString);
        }
        return { formattedValue: formattedValue, numAsString: numAsString };
    });
    var ref = useState(function () {
        return getValues(isNil(value) ? defaultValue : value, valueIsNumericString);
    });
    var values = ref[0];
    var setValues = ref[1];
    var _onValueChange = function (newValues, sourceInfo) {
        if (newValues.formattedValue !== values.formattedValue) {
            setValues({
                formattedValue: newValues.formattedValue,
                numAsString: newValues.value,
            });
        }
        // call parent on value change if only if formatted value is changed
        onValueChange(newValues, sourceInfo);
    };
    // if value is switch from controlled to uncontrolled, use the internal state's value to format with new props
    var _value = value;
    var _valueIsNumericString = valueIsNumericString;
    if (isNil(value)) {
        _value = values.numAsString;
        _valueIsNumericString = true;
    }
    var newValues = getValues(_value, _valueIsNumericString);
    useMemo(function () {
        setValues(newValues);
    }, [newValues.formattedValue]);
    return [values, _onValueChange];
}

function defaultRemoveFormatting(value) {
    return value.replace(/[^0-9]/g, '');
}
function defaultFormat(value) {
    return value;
}
function NumberFormatBase(props) {
    var type = props.type; if ( type === void 0 ) type = 'text';
    var displayType = props.displayType; if ( displayType === void 0 ) displayType = 'input';
    var customInput = props.customInput;
    var renderText = props.renderText;
    var getInputRef = props.getInputRef;
    var format = props.format; if ( format === void 0 ) format = defaultFormat;
    var removeFormatting = props.removeFormatting; if ( removeFormatting === void 0 ) removeFormatting = defaultRemoveFormatting;
    var defaultValue = props.defaultValue;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var isAllowed = props.isAllowed;
    var onChange = props.onChange; if ( onChange === void 0 ) onChange = noop;
    var onKeyDown = props.onKeyDown; if ( onKeyDown === void 0 ) onKeyDown = noop;
    var onMouseUp = props.onMouseUp; if ( onMouseUp === void 0 ) onMouseUp = noop;
    var onFocus = props.onFocus; if ( onFocus === void 0 ) onFocus = noop;
    var onBlur = props.onBlur; if ( onBlur === void 0 ) onBlur = noop;
    var propValue = props.value;
    var getCaretBoundary = props.getCaretBoundary; if ( getCaretBoundary === void 0 ) getCaretBoundary = caretUnknownFormatBoundary;
    var isValidInputCharacter = props.isValidInputCharacter; if ( isValidInputCharacter === void 0 ) isValidInputCharacter = charIsNumber;
    var isCharacterSame = props.isCharacterSame;
    var otherProps = __rest$2(props, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]);
    var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format, removeFormatting, onValueChange);
    var ref_0 = ref[0];
    var formattedValue = ref_0.formattedValue;
    var numAsString = ref_0.numAsString;
    var onFormattedValueChange = ref[1];
    var lastUpdatedValue = useRef({ formattedValue: formattedValue, numAsString: numAsString });
    var _onValueChange = function (values, source) {
        lastUpdatedValue.current = { formattedValue: values.formattedValue, numAsString: values.value };
        onFormattedValueChange(values, source);
    };
    var ref$1 = useState(false);
    var mounted = ref$1[0];
    var setMounted = ref$1[1];
    var focusedElm = useRef(null);
    var timeout = useRef({
        setCaretTimeout: null,
        focusTimeout: null,
    });
    useEffect(function () {
        setMounted(true);
        return function () {
            clearTimeout(timeout.current.setCaretTimeout);
            clearTimeout(timeout.current.focusTimeout);
        };
    }, []);
    var _format = format;
    var getValueObject = function (formattedValue, numAsString) {
        var floatValue = parseFloat(numAsString);
        return {
            formattedValue: formattedValue,
            value: numAsString,
            floatValue: isNaN(floatValue) ? undefined : floatValue,
        };
    };
    var setPatchedCaretPosition = function (el, caretPos, currentValue) {
        // don't reset the caret position when the whole input content is selected
        if (el.selectionStart === 0 && el.selectionEnd === el.value.length)
            { return; }
        /* setting caret position within timeout of 0ms is required for mobile chrome,
        otherwise browser resets the caret position after we set it
        We are also setting it without timeout so that in normal browser we don't see the flickering */
        setCaretPosition(el, caretPos);
        timeout.current.setCaretTimeout = setTimeout(function () {
            if (el.value === currentValue && el.selectionStart !== el.selectionEnd) {
                setCaretPosition(el, caretPos);
            }
        }, 0);
    };
    /* This keeps the caret within typing area so people can't type in between prefix or suffix */
    var correctCaretPosition = function (value, caretPos, direction) {
        return getCaretPosInBoundary(value, caretPos, getCaretBoundary(value), direction);
    };
    var getNewCaretPosition = function (inputValue, newFormattedValue, caretPos) {
        var caretBoundary = getCaretBoundary(newFormattedValue);
        var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter, isCharacterSame);
        //correct caret position if its outside of editable area
        updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
        return updatedCaretPos;
    };
    var updateValueAndCaretPosition = function (params) {
        var newFormattedValue = params.formattedValue; if ( newFormattedValue === void 0 ) newFormattedValue = '';
        var input = params.input;
        var setCaretPosition = params.setCaretPosition; if ( setCaretPosition === void 0 ) setCaretPosition = true;
        var source = params.source;
        var event = params.event;
        var numAsString = params.numAsString;
        var caretPos = params.caretPos;
        if (input) {
            //calculate caret position if not defined
            if (caretPos === undefined && setCaretPosition) {
                var inputValue = params.inputValue || input.value;
                var currentCaretPosition = geInputCaretPosition(input);
                /**
                 * set the value imperatively, this is required for IE fix
                 * This is also required as if new caret position is beyond the previous value.
                 * Caret position will not be set correctly
                 */
                input.value = newFormattedValue;
                //get the caret position
                caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition);
            }
            /**
             * set the value imperatively, as we set the caret position as well imperatively.
             * This is to keep value and caret position in sync
             */
            input.value = newFormattedValue;
            //set caret position, and value imperatively when element is provided
            if (setCaretPosition && caretPos !== undefined) {
                //set caret position
                setPatchedCaretPosition(input, caretPos, newFormattedValue);
            }
        }
        if (newFormattedValue !== formattedValue) {
            // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
            _onValueChange(getValueObject(newFormattedValue, numAsString), { event: event, source: source });
        }
    };
    /**
     * if the formatted value is not synced to parent, or if the formatted value is different from last synced value sync it
     * we also don't need to sync to the parent if no formatting is applied
     * if the formatting props is removed, in which case last formatted value will be different from the numeric string value
     * in such case we need to inform the parent.
     */
    useEffect(function () {
        var ref = lastUpdatedValue.current;
        var lastFormattedValue = ref.formattedValue;
        var lastNumAsString = ref.numAsString;
        if (formattedValue !== lastFormattedValue &&
            (formattedValue !== numAsString || lastFormattedValue !== lastNumAsString)) {
            _onValueChange(getValueObject(formattedValue, numAsString), {
                event: undefined,
                source: SourceType.props,
            });
        }
    }, [formattedValue, numAsString]);
    // also if formatted value is changed from the props, we need to update the caret position
    // keep the last caret position if element is focused
    var currentCaretPosition = focusedElm.current
        ? geInputCaretPosition(focusedElm.current)
        : undefined;
    // needed to prevent warning with useLayoutEffect on server
    var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    useIsomorphicLayoutEffect(function () {
        var input = focusedElm.current;
        if (formattedValue !== lastUpdatedValue.current.formattedValue && input) {
            var caretPos = getNewCaretPosition(lastUpdatedValue.current.formattedValue, formattedValue, currentCaretPosition);
            /**
             * set the value imperatively, as we set the caret position as well imperatively.
             * This is to keep value and caret position in sync
             */
            input.value = formattedValue;
            setPatchedCaretPosition(input, caretPos, formattedValue);
        }
    }, [formattedValue]);
    var formatInputValue = function (inputValue, event, source) {
        var changeRange = findChangeRange(formattedValue, inputValue);
        var changeMeta = Object.assign(Object.assign({}, changeRange), { lastValue: formattedValue });
        var _numAsString = removeFormatting(inputValue, changeMeta);
        var _formattedValue = _format(_numAsString);
        // formatting can remove some of the number chars, so we need to fine number string again
        _numAsString = removeFormatting(_formattedValue, undefined);
        if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
            //reset the caret position
            var input = event.target;
            var currentCaretPosition = geInputCaretPosition(input);
            var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition);
            input.value = formattedValue;
            setPatchedCaretPosition(input, caretPos, formattedValue);
            return false;
        }
        updateValueAndCaretPosition({
            formattedValue: _formattedValue,
            numAsString: _numAsString,
            inputValue: inputValue,
            event: event,
            source: source,
            setCaretPosition: true,
            input: event.target,
        });
        return true;
    };
    var _onChange = function (e) {
        var el = e.target;
        var inputValue = el.value;
        var changed = formatInputValue(inputValue, e, SourceType.event);
        if (changed)
            { onChange(e); }
    };
    var _onKeyDown = function (e) {
        var el = e.target;
        var key = e.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value; if ( value === void 0 ) value = '';
        var expectedCaretPosition;
        //Handle backspace and delete against non numerical/decimal characters or arrow keys
        if (key === 'ArrowLeft' || key === 'Backspace') {
            expectedCaretPosition = Math.max(selectionStart - 1, 0);
        }
        else if (key === 'ArrowRight') {
            expectedCaretPosition = Math.min(selectionStart + 1, value.length);
        }
        else if (key === 'Delete') {
            expectedCaretPosition = selectionStart;
        }
        //if expectedCaretPosition is not set it means we don't want to Handle keyDown
        // also if multiple characters are selected don't handle
        if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
            onKeyDown(e);
            return;
        }
        var newCaretPosition = expectedCaretPosition;
        if (key === 'ArrowLeft' || key === 'ArrowRight') {
            var direction = key === 'ArrowLeft' ? 'left' : 'right';
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
            // arrow left or right only moves the caret, so no need to handle the event, if we are handling it manually
            if (newCaretPosition !== expectedCaretPosition) {
                e.preventDefault();
            }
        }
        else if (key === 'Delete' && !isValidInputCharacter(value[expectedCaretPosition])) {
            // in case of delete go to closest caret boundary on the right side
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, 'right');
        }
        else if (key === 'Backspace' && !isValidInputCharacter(value[expectedCaretPosition])) {
            // in case of backspace go to closest caret boundary on the left side
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, 'left');
        }
        if (newCaretPosition !== expectedCaretPosition) {
            setPatchedCaretPosition(el, newCaretPosition, value);
        }
        /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
                Remove this when you find different solution */
        /* @ts-ignore */
        if (e.isUnitTestRun) {
            setPatchedCaretPosition(el, newCaretPosition, value);
        }
        onKeyDown(e);
    };
    /** required to handle the caret position when click anywhere within the input **/
    var _onMouseUp = function (e) {
        var el = e.target;
        /**
         * NOTE: we have to give default value for value as in case when custom input is provided
         * value can come as undefined when nothing is provided on value prop.
         */
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value; if ( value === void 0 ) value = '';
        if (selectionStart === selectionEnd) {
            var caretPosition = correctCaretPosition(value, selectionStart);
            if (caretPosition !== selectionStart) {
                setPatchedCaretPosition(el, caretPosition, value);
            }
        }
        onMouseUp(e);
    };
    var _onFocus = function (e) {
        // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
        // (onFocus event target selectionStart is always 0 before setTimeout)
        if (e.persist)
            { e.persist(); }
        var el = e.target;
        focusedElm.current = el;
        timeout.current.focusTimeout = setTimeout(function () {
            var selectionStart = el.selectionStart;
            var selectionEnd = el.selectionEnd;
            var value = el.value; if ( value === void 0 ) value = '';
            var caretPosition = correctCaretPosition(value, selectionStart);
            //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
            if (caretPosition !== selectionStart &&
                !(selectionStart === 0 && selectionEnd === value.length)) {
                setPatchedCaretPosition(el, caretPosition, value);
            }
            onFocus(e);
        }, 0);
    };
    var _onBlur = function (e) {
        focusedElm.current = null;
        clearTimeout(timeout.current.focusTimeout);
        clearTimeout(timeout.current.setCaretTimeout);
        onBlur(e);
    };
    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode() ? 'numeric' : undefined;
    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
        type: type,
        value: formattedValue,
        onChange: _onChange,
        onKeyDown: _onKeyDown,
        onMouseUp: _onMouseUp,
        onFocus: _onFocus,
        onBlur: _onBlur,
    });
    if (displayType === 'text') {
        return renderText ? (React__default.createElement(React__default.Fragment, null, renderText(formattedValue, otherProps) || null)) : (React__default.createElement("span", Object.assign({}, otherProps, { ref: getInputRef }), formattedValue));
    }
    else if (customInput) {
        var CustomInput = customInput;
        /* @ts-ignore */
        return React__default.createElement(CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }
    return React__default.createElement("input", Object.assign({}, inputProps, { ref: getInputRef }));
}

function format(numStr, props) {
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var suffix = props.suffix; if ( suffix === void 0 ) suffix = '';
    var allowNegative = props.allowNegative;
    var thousandsGroupStyle = props.thousandsGroupStyle; if ( thousandsGroupStyle === void 0 ) thousandsGroupStyle = 'thousand';
    // don't apply formatting on empty string or '-'
    if (numStr === '' || numStr === '-') {
        return numStr;
    }
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    /**
     * Keep the decimal separator
     * when decimalScale is not defined or non zero and the numStr has decimal in it
     * Or if decimalScale is > 0 and fixeDecimalScale is true (even if numStr has no decimal)
     */
    var hasDecimalSeparator = (decimalScale !== 0 && numStr.indexOf('.') !== -1) || (decimalScale && fixedDecimalScale);
    var ref$1 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$1.beforeDecimal;
    var afterDecimal = ref$1.afterDecimal;
    var addNegation = ref$1.addNegation; // eslint-disable-line prefer-const
    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
        afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
    }
    if (thousandSeparator) {
        beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }
    //add prefix and suffix when there is a number present
    if (prefix)
        { beforeDecimal = prefix + beforeDecimal; }
    if (suffix)
        { afterDecimal = afterDecimal + suffix; }
    //restore negation sign
    if (addNegation)
        { beforeDecimal = '-' + beforeDecimal; }
    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;
    return numStr;
}
function getSeparators(props) {
    var decimalSeparator = props.decimalSeparator; if ( decimalSeparator === void 0 ) decimalSeparator = '.';
    var thousandSeparator = props.thousandSeparator;
    var allowedDecimalSeparators = props.allowedDecimalSeparators;
    if (thousandSeparator === true) {
        thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
        allowedDecimalSeparators = [decimalSeparator, '.'];
    }
    return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        allowedDecimalSeparators: allowedDecimalSeparators,
    };
}
function handleNegation(value, allowNegative) {
    if ( value === void 0 ) value = '';

    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');
    // Check number has '-' value
    var hasNegation = negationRegex.test(value);
    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);
    //remove negation
    value = value.replace(/-/g, '');
    if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
    }
    return value;
}
function getNumberRegex(decimalSeparator, global) {
    return new RegExp(("(^-)|[0-9]|" + (escapeRegExp(decimalSeparator))), global ? 'g' : undefined);
}
function isNumericString(val, prefix, suffix) {
    // for empty value we can always treat it as numeric string
    if (val === '')
        { return true; }
    return (!(prefix === null || prefix === void 0 ? void 0 : prefix.match(/\d/)) && !(suffix === null || suffix === void 0 ? void 0 : suffix.match(/\d/)) && typeof val === 'string' && !isNaN(Number(val)));
}
function removeFormatting(value, changeMeta, props) {
    var assign;

    if ( changeMeta === void 0 ) changeMeta = getDefaultChangeMeta(value);
    var allowNegative = props.allowNegative;
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var suffix = props.suffix; if ( suffix === void 0 ) suffix = '';
    var decimalScale = props.decimalScale;
    var from = changeMeta.from;
    var to = changeMeta.to;
    var start = to.start;
    var end = to.end;
    var ref = getSeparators(props);
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var decimalSeparator = ref.decimalSeparator;
    var isBeforeDecimalSeparator = value[end] === decimalSeparator;
    /**
     * If only a number is added on empty input which matches with the prefix or suffix,
     * then don't remove it, just return the same
     */
    if (charIsNumber(value) &&
        (value === prefix || value === suffix) &&
        changeMeta.lastValue === '') {
        return value;
    }
    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
        var separator = decimalScale === 0 ? '' : decimalSeparator;
        value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
    }
    var stripNegation = function (value, start, end) {
        /**
         * if prefix starts with - we don't allow negative number to avoid confusion
         * if suffix starts with - and the value length is same as suffix length, then the - sign is from the suffix
         * In other cases, if the value starts with - then it is a negation
         */
        var hasNegation = false;
        var hasDoubleNegation = false;
        if (prefix.startsWith('-')) {
            hasNegation = false;
        }
        else if (value.startsWith('--')) {
            hasNegation = false;
            hasDoubleNegation = true;
        }
        else if (suffix.startsWith('-') && value.length === suffix.length) {
            hasNegation = false;
        }
        else if (value[0] === '-') {
            hasNegation = true;
        }
        var charsToRemove = hasNegation ? 1 : 0;
        if (hasDoubleNegation)
            { charsToRemove = 2; }
        // remove negation/double negation from start to simplify prefix logic as negation comes before prefix
        if (charsToRemove) {
            value = value.substring(charsToRemove);
            // account for the removal of the negation for start and end index
            start -= charsToRemove;
            end -= charsToRemove;
        }
        return { value: value, start: start, end: end, hasNegation: hasNegation };
    };
    var toMetadata = stripNegation(value, start, end);
    var hasNegation = toMetadata.hasNegation;
    ((assign = toMetadata, value = assign.value, start = assign.start, end = assign.end));
    var ref$1 = stripNegation(changeMeta.lastValue, from.start, from.end);
    var fromStart = ref$1.start;
    var fromEnd = ref$1.end;
    var lastValue = ref$1.value;
    // if only prefix and suffix part is updated reset the value to last value
    // if the changed range is from suffix in the updated value, and the the suffix starts with the same characters, allow the change
    var updatedSuffixPart = value.substring(start, end);
    if (value.length &&
        lastValue.length &&
        (fromStart > lastValue.length - suffix.length || fromEnd < prefix.length) &&
        !(updatedSuffixPart && suffix.startsWith(updatedSuffixPart))) {
        value = lastValue;
    }
    /**
     * remove prefix
     * Remove whole prefix part if its present on the value
     * If the prefix is partially deleted (in which case change start index will be less the prefix length)
     * Remove only partial part of prefix.
     */
    var startIndex = 0;
    if (value.startsWith(prefix))
        { startIndex += prefix.length; }
    else if (start < prefix.length)
        { startIndex = start; }
    value = value.substring(startIndex);
    // account for deleted prefix for end
    end -= startIndex;
    /**
     * Remove suffix
     * Remove whole suffix part if its present on the value
     * If the suffix is partially deleted (in which case change end index will be greater than the suffixStartIndex)
     * remove the partial part of suffix
     */
    var endIndex = value.length;
    var suffixStartIndex = value.length - suffix.length;
    if (value.endsWith(suffix))
        { endIndex = suffixStartIndex; }
    // if the suffix is removed from the end
    else if (end > suffixStartIndex)
        { endIndex = end; }
    // if the suffix is removed from start
    else if (end > value.length - suffix.length)
        { endIndex = end; }
    value = value.substring(0, endIndex);
    // add the negation back and handle for double negation
    value = handleNegation(hasNegation ? ("-" + value) : value, allowNegative);
    // remove non numeric characters
    value = (value.match(getNumberRegex(decimalSeparator, true)) || []).join('');
    // replace the decimalSeparator with ., and only keep the first separator, ignore following ones
    var firstIndex = value.indexOf(decimalSeparator);
    value = value.replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), function (match, index) {
        return index === firstIndex ? '.' : '';
    });
    //check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    var ref$2 = splitDecimal(value, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const
    //clear only if something got deleted before decimal (cursor is before decimal)
    if (to.end - to.start < from.end - from.start &&
        beforeDecimal === '' &&
        isBeforeDecimalSeparator &&
        !parseFloat(afterDecimal)) {
        value = addNegation ? '-' : '';
    }
    return value;
}
function getCaretBoundary(formattedValue, props) {
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var suffix = props.suffix; if ( suffix === void 0 ) suffix = '';
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function () { return true; });
    var hasNegation = formattedValue[0] === '-';
    // fill for prefix and negation
    boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
    // fill for suffix
    var valLn = formattedValue.length;
    boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
    return boundaryAry;
}
function validateAndUpdateProps(props) {
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    // eslint-disable-next-line prefer-const
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var allowNegative = props.allowNegative; if ( allowNegative === void 0 ) allowNegative = true;
    if (thousandSeparator === decimalSeparator) {
        throw new Error(("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n        decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n     "));
    }
    if (prefix.startsWith('-') && allowNegative) {
        // TODO: throw error in next major version
        console.error(("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + prefix + "\n      allowNegative: " + allowNegative + "\n    "));
        allowNegative = false;
    }
    return Object.assign(Object.assign({}, props), { allowNegative: allowNegative });
}
function useNumericFormat(props) {
    // validate props
    props = validateAndUpdateProps(props);
    props.decimalSeparator;
    props.allowedDecimalSeparators;
    props.thousandsGroupStyle;
    var suffix = props.suffix;
    var allowNegative = props.allowNegative;
    var allowLeadingZeros = props.allowLeadingZeros;
    var onKeyDown = props.onKeyDown; if ( onKeyDown === void 0 ) onKeyDown = noop;
    var onBlur = props.onBlur; if ( onBlur === void 0 ) onBlur = noop;
    var thousandSeparator = props.thousandSeparator;
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var defaultValue = props.defaultValue;
    var value = props.value;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var restProps = __rest$2(props, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
    // get derived decimalSeparator and allowedDecimalSeparators
    var ref = getSeparators(props);
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var _format = function (numStr) { return format(numStr, props); };
    var _removeFormatting = function (inputValue, changeMeta) { return removeFormatting(inputValue, changeMeta, props); };
    var _value = isNil(value) ? defaultValue : value;
    // try to figure out isValueNumericString based on format prop and value
    var _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString(_value, prefix, suffix);
    if (!isNil(value)) {
        _valueIsNumericString = _valueIsNumericString || typeof value === 'number';
    }
    else if (!isNil(defaultValue)) {
        _valueIsNumericString = _valueIsNumericString || typeof defaultValue === 'number';
    }
    var roundIncomingValueToPrecision = function (value) {
        if (isNotValidValue(value))
            { return value; }
        if (typeof value === 'number') {
            value = toNumericString(value);
        }
        /**
         * only round numeric or float string values coming through props,
         * we don't need to do it for onChange events, as we want to prevent typing there
         */
        if (_valueIsNumericString && typeof decimalScale === 'number') {
            return roundToPrecision(value, decimalScale, Boolean(fixedDecimalScale));
        }
        return value;
    };
    var ref$1 = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
    var ref$1_0 = ref$1[0];
    var numAsString = ref$1_0.numAsString;
    var formattedValue = ref$1_0.formattedValue;
    var _onValueChange = ref$1[1];
    var _onKeyDown = function (e) {
        var el = e.target;
        var key = e.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value; if ( value === void 0 ) value = '';
        // if multiple characters are selected and user hits backspace, no need to handle anything manually
        if (selectionStart !== selectionEnd) {
            onKeyDown(e);
            return;
        }
        // if user hits backspace, while the cursor is before prefix, and the input has negation, remove the negation
        if (key === 'Backspace' &&
            value[0] === '-' &&
            selectionStart === prefix.length + 1 &&
            allowNegative) {
            // bring the cursor to after negation
            setCaretPosition(el, 1);
        }
        // don't allow user to delete decimal separator when decimalScale and fixedDecimalScale is set
        if (decimalScale && fixedDecimalScale) {
            if (key === 'Backspace' && value[selectionStart - 1] === decimalSeparator) {
                setCaretPosition(el, selectionStart - 1);
                e.preventDefault();
            }
            else if (key === 'Delete' && value[selectionStart] === decimalSeparator) {
                e.preventDefault();
            }
        }
        // if user presses the allowed decimal separator before the separator, move the cursor after the separator
        if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value[selectionStart] === decimalSeparator) {
            setCaretPosition(el, selectionStart + 1);
        }
        var _thousandSeparator = thousandSeparator === true ? ',' : thousandSeparator;
        // move cursor when delete or backspace is pressed before/after thousand separator
        if (key === 'Backspace' && value[selectionStart - 1] === _thousandSeparator) {
            setCaretPosition(el, selectionStart - 1);
        }
        if (key === 'Delete' && value[selectionStart] === _thousandSeparator) {
            setCaretPosition(el, selectionStart + 1);
        }
        onKeyDown(e);
    };
    var _onBlur = function (e) {
        var _value = numAsString;
        // if there no no numeric value, clear the input
        if (!_value.match(/\d/g)) {
            _value = '';
        }
        // clear leading 0s
        if (!allowLeadingZeros) {
            _value = fixLeadingZero(_value);
        }
        // apply fixedDecimalScale on blur event
        if (fixedDecimalScale && decimalScale) {
            _value = roundToPrecision(_value, decimalScale, fixedDecimalScale);
        }
        if (_value !== numAsString) {
            var formattedValue = format(_value, props);
            _onValueChange({
                formattedValue: formattedValue,
                value: _value,
                floatValue: parseFloat(_value),
            }, {
                event: e,
                source: SourceType.event,
            });
        }
        onBlur(e);
    };
    var isValidInputCharacter = function (inputChar) {
        if (inputChar === decimalSeparator)
            { return true; }
        return charIsNumber(inputChar);
    };
    var isCharacterSame = function (ref) {
        var currentValue = ref.currentValue;
        var lastValue = ref.lastValue;
        var formattedValue = ref.formattedValue;
        var currentValueIndex = ref.currentValueIndex;
        var formattedValueIndex = ref.formattedValueIndex;

        var curChar = currentValue[currentValueIndex];
        var newChar = formattedValue[formattedValueIndex];
        /**
         * NOTE: as thousand separator and allowedDecimalSeparators can be same, we need to check on
         * typed range if we have typed any character from allowedDecimalSeparators, in that case we
         * consider different characters like , and . same within the range of updated value.
         */
        var typedRange = findChangeRange(lastValue, currentValue);
        var to = typedRange.to;
        if (currentValueIndex >= to.start &&
            currentValueIndex < to.end &&
            allowedDecimalSeparators &&
            allowedDecimalSeparators.includes(curChar) &&
            newChar === decimalSeparator) {
            return true;
        }
        return curChar === newChar;
    };
    return Object.assign(Object.assign({}, restProps), { value: formattedValue, valueIsNumericString: false, isValidInputCharacter: isValidInputCharacter,
        isCharacterSame: isCharacterSame, onValueChange: _onValueChange, format: _format, removeFormatting: _removeFormatting, getCaretBoundary: function (formattedValue) { return getCaretBoundary(formattedValue, props); }, onKeyDown: _onKeyDown, onBlur: _onBlur });
}
function NumericFormat(props) {
    var numericFormatProps = useNumericFormat(props);
    return React__default.createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
}var NumberFormatCustom = React__default.forwardRef(function (_a, ref) {
    var onChange = _a.onChange, props = __rest$4(_a, ["onChange"]);
    return (React__default.createElement(NumericFormat, __assign$7({}, props, { getInputRef: ref, onValueChange: function (values) {
            if (onChange)
                onChange({ target: { value: values.value } });
        } })));
});
NumberFormatCustom.displayName = 'NumberFormatCustom';var FormNumberDefaultProps = __assign$7(__assign$7({}, FormTextFieldDefaultProps), { clear: true });var FormNumber = React__default.forwardRef(function (_a, ref) {
    // State -------------------------------------------------------------------------------------------------------------
    var className = _a.className, allowNegative = _a.allowNegative, thousandSeparator = _a.thousandSeparator, allowDecimal = _a.allowDecimal, decimalScale = _a.decimalScale, prefix = _a.prefix, suffix = _a.suffix, readOnly = _a.readOnly, tabIndex = _a.tabIndex, initMuiInputProps = _a.InputProps, initInputProps = _a.inputProps, initValue = _a.value, onChange = _a.onChange, props = __rest$4(_a, ["className", "allowNegative", "thousandSeparator", "allowDecimal", "decimalScale", "prefix", "suffix", "readOnly", "tabIndex", "InputProps", "inputProps", "value", "onChange"]);
    var _b = useState(function () { return (empty(initValue) ? '' : "".concat(initValue)); }), strValue = _b[0], setStrValue = _b[1];
    // Effect ------------------------------------------------------------------------------------------------------------
    useEffect(function () {
        setStrValue(empty(initValue) ? '' : "".concat(initValue));
    }, [initValue]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var muiInputProps = useMemo(function () {
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
        return __assign$7(__assign$7({}, initMuiInputProps), { inputComponent: NumberFormatCustom, inputProps: __assign$7(__assign$7({}, initInputProps), inputProps) });
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
    // Event Handler -----------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (value) {
        var newValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        onChange && onChange(newValue);
        setStrValue(value);
    }, [onChange]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormTextField, __assign$7({ ref: ref, className: classNames$1(className, 'FormNumber'), disableReturnKey: true, InputProps: muiInputProps, readOnly: readOnly, value: strValue, onChange: handleChange }, props)));
});
FormNumber.displayName = 'FormNumber';
FormNumber.defaultProps = FormNumberDefaultProps;var FormSearchDefaultProps = __assign$7({}, FormTextDefaultProps);var css_248z$h = ".FormSearch input[type=search]::-webkit-search-decoration,\n.FormSearch input[type=search]::-webkit-search-cancel-button,\n.FormSearch input[type=search]::-webkit-search-results-button,\n.FormSearch input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}";
styleInject(css_248z$h);var FormSearch = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$4(_a, ["className"]);
    return React__default.createElement(FormText, __assign$7({ className: classNames$1(className, 'FormSearch'), ref: ref, type: 'search' }, props));
});
FormSearch.displayName = 'FormSearch';
FormSearch.defaultProps = FormSearchDefaultProps;var FormTextareaDefaultProps = __assign$7(__assign$7({}, FormTextFieldDefaultProps), { clear: false, rows: 3, value: '' });var css_248z$g = ".FormTextarea .MuiInputBase-root .MuiInputBase-input {\n  overflow-y: scroll;\n}\n.FormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar {\n  width: 8px;\n}\n.FormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.1882352941);\n  background-clip: padding-box;\n  border-left: 4px transparent solid;\n}";
styleInject(css_248z$g);var FormTextarea = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$4(_a, ["className"]);
    return (React__default.createElement(FormTextField, __assign$7({ ref: ref, className: classNames$1(className, 'FormTextarea') }, props, { multiline: true })));
});
FormTextarea.displayName = 'FormTextarea';
FormTextarea.defaultProps = FormTextareaDefaultProps;var FormUrlDefaultProps = __assign$7(__assign$7({}, FormTextDefaultProps), { validPattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim });var FormUrl = React__default.forwardRef(function (_a, ref) {
    // Event Handler -----------------------------------------------------------------------------------------------------
    var className = _a.className, onValue = _a.onValue, props = __rest$4(_a, ["className", "onValue"]);
    var handleValue = useCallback(function (value) {
        var newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    // Render ------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$7({ ref: ref, className: classNames$1(className, 'FormUrl'), type: 'url', onValue: handleValue }, props)));
});
FormUrl.displayName = 'FormUrl';
FormUrl.defaultProps = FormUrlDefaultProps;var FormSelectDefaultProps = __assign$7(__assign$7({}, FormTextFieldDefaultProps), { formValueSeparator: ',', minWidth: 120 });var css_248z$f = ".FormSelect.is-selected-placeholder .MuiSelect-select {\n  opacity: 0.38;\n}\n.FormSelect .MuiInputBase-root.MuiInputBase-adornedEnd {\n  padding-right: 25px;\n}\n.FormSelect .MuiSelect-select.MuiSelect-multiple .selected-list:not(:empty) {\n  margin-top: -3px;\n  margin-bottom: -3px;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar {\n  width: 12px;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.1882352941);\n  background-clip: padding-box;\n  border-left: 4px transparent solid;\n  border-right: 4px transparent solid;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-button:start:decrement, .FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-button:end:increment {\n  display: block;\n  height: 4px;\n  background-color: transparent;\n}";
styleInject(css_248z$f);var FormSelect = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    // types -------------------------------------------------------------------------------------------------------------
    var className = _a.className, name = _a.name, initItems = _a.items, initFullWidth = _a.fullWidth, onLoadItems = _a.onLoadItems, readOnly = _a.readOnly, multiple = _a.multiple, checkbox = _a.checkbox, placeholder = _a.placeholder, initStartAdornment = _a.startAdornment, initValue = _a.value, initInputLabelProps = _a.InputLabelProps, initSelectProps = _a.SelectProps, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, width = _a.width, minWidth = _a.minWidth, initLoading = _a.loading, onChange = _a.onChange, onValue = _a.onValue, props = __rest$4(_a, ["className", "name", "items", "fullWidth", "onLoadItems", "readOnly", "multiple", "checkbox", "placeholder", "startAdornment", "value", "InputLabelProps", "SelectProps", "formValueSeparator", "formValueSort", "width", "minWidth", "loading", "onChange", "onValue"]);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, otherFormState = __rest$4(_b, ["fullWidth", "onAddValueItem", "onValueChange"]);
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // State -----------------------------------------------------------------------------------------------------------
    var emptyValue = useState([])[0];
    var _c = useState({}), itemValueLabels = _c[0], setItemValueLabels = _c[1];
    var _d = useState(false), hasEmptyValue = _d[0], setHasEmptyValue = _d[1];
    var _e = useState(false), isOnGetItemLoading = _e[0], setIsOnGetItemLoading = _e[1];
    var _f = useState(initLoading), loading = _f[0], setLoading = _f[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var startAdornment = useMemo(function () {
        if (isOnGetItemLoading || loading) {
            return (React__default.createElement(React__default.Fragment, null,
                initStartAdornment,
                (isOnGetItemLoading || loading) && (React__default.createElement(CircularProgress, { size: 16, color: 'inherit', style: { verticalAlign: 'middle', marginLeft: initStartAdornment ? 8 : 0 } }))));
        }
        else {
            return initStartAdornment;
        }
    }, [initStartAdornment, isOnGetItemLoading, loading]);
    // State - items ---------------------------------------------------------------------------------------------------
    var _g = useAutoUpdateState$1(initItems), items = _g[0], setItems = _g[1];
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
    // Memo --------------------------------------------------------------------------------------------------------------
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
    // State - inputLabelProps -----------------------------------------------------------------------------------------
    var inputLabelProps = useAutoUpdateState$1(useCallback(function () {
        if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
            return __assign$7(__assign$7({}, initInputLabelProps), { shrink: true });
        }
        else {
            return initInputLabelProps;
        }
    }, [initInputLabelProps, hasEmptyValue, placeholder]))[0];
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        var finalValue = value == null ? '' : value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (empty(finalValue)) {
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
        return onValue ? onValue(finalValue) : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _h = useAutoUpdateState$1(initValue, getFinalValue), value = _h[0], setValue = _h[1];
    useFirstSkipEffect$1(function () {
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // State - isSelectedPlaceholder -----------------------------------------------------------------------------------
    var isSelectedPlaceholder = useAutoUpdateState$1(useCallback(function () {
        return notEmpty(items) && empty(value) && !!placeholder && !hasEmptyValue;
    }, [items, value, placeholder, hasEmptyValue]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (!isSame$2(value, initValue)) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Memo --------------------------------------------------------------------------------------------------------------
    var selectProps = useMemo(function () {
        var _a;
        var finalSelectProps = __assign$7(__assign$7({}, initSelectProps), { displayEmpty: true, multiple: !!multiple });
        if (multiple) {
            finalSelectProps.renderValue = function (selected) {
                if (isSelectedPlaceholder) {
                    return placeholder;
                }
                else {
                    return (React__default.createElement(Box, { className: 'selected-list', sx: { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }, Array.isArray(selected) &&
                        selected.map(function (value) {
                            if (isSelectedPlaceholder) {
                                return React__default.createElement(Chip, { key: value || '$$$EmptyValuePlaceholder$$$', label: 'hahaha', size: 'small' });
                            }
                            else {
                                return React__default.createElement(Chip, { key: value, label: itemValueLabels["".concat(value)], size: 'small' });
                            }
                        })));
                }
            };
        }
        if (minWidth != null) {
            finalSelectProps.style = __assign$7(__assign$7({}, finalSelectProps.style), { minWidth: width || minWidth });
        }
        finalSelectProps.MenuProps = __assign$7(__assign$7({}, finalSelectProps.MenuProps), { className: classNames$1((_a = finalSelectProps.MenuProps) === null || _a === void 0 ? void 0 : _a.className, 'FormSelect-Menu-Popover') });
        return finalSelectProps;
    }, [initSelectProps, isSelectedPlaceholder, itemValueLabels, minWidth, multiple, placeholder, width]);
    // Function - getExtraCommands -------------------------------------------------------------------------------------
    var getBaseCommands = useCallback(function () {
        var lastValue = value;
        return {
            getReset: function () { return getFinalValue(initValue); },
            reset: function () {
                lastValue = getFinalValue(initValue);
                setValue(lastValue);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = getFinalValue(value);
                setValue(lastValue);
            },
        };
    }, [value, getFinalValue, initValue, setValue]);
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
        };
    }, [items, loading, formValueSeparator, formValueSort, setItems, multiple]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleRef = useCallback(function (commands) {
        if (ref) {
            var finalCommands = commands
                ? __assign$7(__assign$7(__assign$7({}, commands), getBaseCommands()), getExtraCommands()) : null;
            if (typeof ref === 'function') {
                return ref(finalCommands);
            }
            else {
                ref.current = finalCommands;
            }
        }
    }, [ref, getBaseCommands, getExtraCommands]);
    var handleAddValueItem = useCallback(function (id, commands) {
        onAddValueItem(id, __assign$7(__assign$7(__assign$7({}, commands), getBaseCommands()), getExtraCommands()));
    }, [onAddValueItem, getBaseCommands, getExtraCommands]);
    var handleChange = function (newValue) {
        setValue(newValue);
    };
    var handleValue = useCallback(function (value) {
        return getFinalValue(value);
    }, [getFinalValue]);
    // Render ----------------------------------------------------------------------------------------------------------
    var finalValue;
    if (notEmpty(items)) {
        finalValue = value;
    }
    else {
        finalValue = multiple ? emptyValue : '';
    }
    return (React__default.createElement(FormContextProvider, { value: __assign$7({ fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, 
            // eslint-disable-next-line
            onValueChange: function () { } }, otherFormState) },
        React__default.createElement(FormTextField, __assign$7({ select: true, ref: handleRef, name: name, className: classNames$1(className, 'FormSelect', isSelectedPlaceholder && 'is-selected-placeholder'), fullWidth: fullWidth }, props, { startAdornment: startAdornment, value: finalValue, clear: false, readOnly: readOnly || empty(items), InputLabelProps: inputLabelProps, SelectProps: selectProps, onChange: handleChange, onValue: handleValue }),
            isSelectedPlaceholder && (React__default.createElement(MenuItem, { key: '$$$EmptyValuePlaceholder$$$', value: '', disabled: true, sx: { display: 'none' } }, placeholder)),
            items && notEmpty(items) ? (items.map(function (_a) {
                var itemLabel = _a.label, itemValue = _a.value, disabled = _a.disabled;
                return (React__default.createElement(MenuItem, { key: empty(itemValue) ? '$$$EmptyValue$$$' : "".concat(itemValue), value: typeof itemValue === 'boolean' ? "".concat(itemValue) : itemValue, disabled: disabled },
                    multiple && checkbox && Array.isArray(value) && React__default.createElement(Checkbox, { checked: value.includes(itemValue) }),
                    itemLabel));
            })) : (React__default.createElement(MenuItem, { value: '' })))));
}));
FormSelect.displayName = 'FormSelect';
FormSelect.defaultProps = FormSelectDefaultProps;var FormCompanyNoDefaultProps = __assign$7(__assign$7({}, FormTextDefaultProps), { validPattern: /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/ });var FormCompanyNo = React__default.forwardRef(function (_a, ref) {
    // Event Handler ---------------------------------------------------------------------------------------------------
    var className = _a.className, onValue = _a.onValue, props = __rest$4(_a, ["className", "onValue"]);
    var handleValue = useCallback(function (value) {
        var newValue = autoDash$1(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$7({ ref: ref, className: classNames$1(className, 'FormCompanyNo'), maxLength: 12, onValue: handleValue }, props)));
});
FormCompanyNo.displayName = 'FormCompanyNo';
FormCompanyNo.defaultProps = FormCompanyNoDefaultProps;
function autoDash$1(companyNo) {
    var str = companyNo.replace(/[^0-9]/g, '');
    var tmp = '';
    for (var i = 0; i < str.length; i += 1) {
        if (i === 3 || i === 5) {
            tmp += '-';
        }
        tmp += str[i];
    }
    return tmp;
}var FormPersonalNoDefaultProps = __assign$7(__assign$7({}, FormTextDefaultProps), { validPattern: /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/ });var FormPersonalNo = React__default.forwardRef(function (_a, ref) {
    // Event Handler ---------------------------------------------------------------------------------------------------
    var className = _a.className, onValue = _a.onValue, onValidate = _a.onValidate, props = __rest$4(_a, ["className", "onValue", "onValidate"]);
    var handleValue = useCallback(function (value) {
        var newValue = autoDash(value.replace(/[^0-9]/gi, ''));
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    var handleValidate = useCallback(function (value) {
        if (notEmpty(value)) {
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
    }, [onValidate]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$7({ ref: ref, className: classNames$1(className, 'FormPersonalNo'), maxLength: 14, onValue: handleValue, onValidate: handleValidate }, props)));
});
FormPersonalNo.displayName = 'FormPersonalNo';
FormPersonalNo.defaultProps = FormPersonalNoDefaultProps;
function autoDash(personalNo) {
    var str = personalNo.replace(/[^0-9]/g, '');
    var tmp = '';
    for (var i = 0; i < str.length; i += 1) {
        if (i === 6) {
            tmp += '-';
        }
        tmp += str[i];
    }
    return tmp;
}var FormCheckboxDefaultProps = {
    checked: false,
    value: 1,
    uncheckedValue: 0,
};var css_248z$e = ".FormItemBase .FormItemBase-InputLabel {\n  overflow: visible;\n  padding-left: 5px;\n}\n.FormItemBase .FormItemBase-InputLabel.MuiInputLabel-sizeSmall {\n  transform: translate(0, -1.5px) scale(0.7);\n}\n.FormItemBase .FormItemBase-Control-wrap {\n  position: relative;\n}\n.FormItemBase .FormItemBase-Control {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.FormItemBase.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 16px;\n}";
styleInject(css_248z$e);var FormItemBase = React__default.forwardRef(function (_a, ref) {
    // Ref ---------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    control = _a.control, controlHeight = _a.controlHeight, controlVerticalCenter = _a.controlVerticalCenter, required = _a.required, labelIcon = _a.labelIcon, label = _a.label, focused = _a.focused, helperText = _a.helperText, helperTextProps = _a.helperTextProps, error = _a.error, hideLabel = _a.hideLabel, hidden = _a.hidden, autoSize = _a.autoSize, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, sx = _a.sx;
    var inputRef = useRef(null);
    var realControlContainerRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFullWidth = _b.fullWidth, formColWithLabel = _b.formColWithLabel, formColWithHelperText = _b.formColWithHelperText;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var wrapStyle = useMemo(function () {
        var wrapStyle = {
            display: hidden ? 'none' : fullWidth ? 'block' : 'inline-flex',
            width: fullWidth ? '100%' : undefined,
        };
        if (formColWithLabel) {
            wrapStyle.marginTop = -20;
        }
        return wrapStyle;
    }, [formColWithLabel, fullWidth, hidden]);
    // State - inputHeight ---------------------------------------------------------------------------------------------
    var _c = useState(0), inputHeight = _c[0], setInputHeight = _c[1];
    useResizeDetector({
        targetRef: inputRef,
        handleWidth: false,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setInputHeight(((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) || 0);
        },
    });
    // State - realControlHeight ---------------------------------------------------------------------------------------
    var _d = useState(0), realControlHeight = _d[0], setRealControlHeight = _d[1];
    useResizeDetector({
        targetRef: realControlContainerRef,
        handleWidth: false,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setRealControlHeight(((_b = (_a = realControlContainerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) || 0);
        },
    });
    // Memo ------------------------------------------------------------------------------------------------------------
    var bottomMargin = useMemo(function () {
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
    var controlMarginTop = useMemo(function () {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement("div", { style: wrapStyle },
        React__default.createElement(FormControl, { ref: ref, variant: 'standard', className: classNames$1(className, 'FormItemBase', !!label && 'with-label', "variant-".concat(variant), controlVerticalCenter && 'control-vertical-center', !!error && 'error'), style: style, color: color, error: error, focused: focused, sx: sx },
            !formColWithLabel && label && (React__default.createElement(InputLabel, { shrink: true, className: 'FormItemBase-InputLabel', size: size === 'medium' ? 'normal' : size, required: required }, labelIcon ? (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 } }, labelIcon),
                React__default.createElement("span", { style: { verticalAlign: 'middle' } }, label))) : (label))),
            React__default.createElement("div", { className: 'FormItemBase-Control-wrap', style: { display: 'grid', marginTop: hideLabel ? 0 : undefined } }, autoSize ? (React__default.createElement(React__default.Fragment, null,
                variant === 'standard' && (React__default.createElement(Input, { ref: inputRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                variant === 'outlined' && (React__default.createElement(OutlinedInput, { ref: inputRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                variant === 'filled' && (React__default.createElement(FilledInput, { ref: inputRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                React__default.createElement("div", { style: { height: bottomMargin, visibility: 'hidden' } }),
                React__default.createElement("div", { ref: realControlContainerRef, className: 'FormItemBase-Control', style: {
                        width: fullWidth ? '100%' : 'auto',
                        display: 'grid',
                        marginTop: controlMarginTop,
                    } }, control))) : (React__default.createElement("div", { style: {
                    width: fullWidth ? '100%' : 'auto',
                    display: 'grid',
                    marginTop: controlMarginTop,
                } }, control))),
            !formColWithHelperText && helperText && (React__default.createElement(FormHelperText, __assign$7({ component: 'div' }, helperTextProps), helperText)))));
});
FormItemBase.displayName = 'FormItemBase';var FormCheckbox = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initChecked = _a.checked, initInputRef = _a.inputRef, initAction = _a.action, readOnly = _a.readOnly, initDisabled = _a.disabled, text = _a.text, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, initUncheckedValue = _a.uncheckedValue, exceptValue = _a.exceptValue, hidden = _a.hidden, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, props = __rest$4(_a, ["variant", "size", "color", "focused", "fullWidth", "name", "labelIcon", "label", "checked", "inputRef", "action", "readOnly", "disabled", "text", "error", "helperText", "value", "data", "uncheckedValue", "exceptValue", "hidden", "onChange", "onValidate", "className", "style", "sx"]);
    var id = useId();
    // Use ---------------------------------------------------------------------------------------------------------------
    var theme = useTheme();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // Ref -------------------------------------------------------------------------------------------------------------
    var inputRef = useRef(null);
    var actionRef = useRef(null);
    var labelRef = useRef(null);
    // ResizeDetector --------------------------------------------------------------------------------------------------
    var _c = useResizeDetector({
        targetRef: labelRef,
        handleWidth: true,
        handleHeight: true,
    }), width = _c.width, height = _c.height;
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initValue), value = _d[0], setValue = _d[1];
    var _e = useAutoUpdateState$1(initUncheckedValue), uncheckedValue = _e[0], setUncheckedValue = _e[1];
    var _f = useAutoUpdateState$1(initError), error = _f[0], setError = _f[1];
    var _g = useState(), errorHelperText = _g[0], setErrorHelperText = _g[1];
    var _h = useAutoUpdateState$1(initDisabled), disabled = _h[0], setDisabled = _h[1];
    var _j = useAutoUpdateState$1(initData), data = _j[0], setData = _j[1];
    // State - checked -------------------------------------------------------------------------------------------------
    var _k = useAutoUpdateState$1(!!initChecked), checked = _k[0], setChecked = _k[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(checked);
        if (onChange)
            onChange(checked);
        onValueChange(name, checked);
    }, [checked]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () { return (__assign$7({ width: fullWidth ? '100%' : width || 100, paddingLeft: 3 }, initStyle)); }, [initStyle, fullWidth, width]);
    // Function - focus ------------------------------------------------------------------------------------------------
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
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastChecked = checked;
        var lastValue = value == null ? 1 : value;
        var lastData = data;
        var lastUncheckedValue = uncheckedValue == null ? 0 : uncheckedValue;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormCheckbox'; },
            getName: function () { return name; },
            getReset: function () { return !!initChecked; },
            reset: function () {
                lastChecked = !!initChecked;
                setChecked(lastChecked);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = value;
                setValue(value);
            },
            getData: function () { return lastData; },
            setData: function (data) {
                lastData = data;
                setData(data);
            },
            getUncheckedValue: function () { return lastUncheckedValue; },
            setUncheckedValue: function (uncheckedValue) {
                lastUncheckedValue = uncheckedValue;
                setUncheckedValue(lastUncheckedValue);
            },
            getChecked: function () { return lastChecked; },
            setChecked: function (checked) {
                lastChecked = checked;
                setChecked(lastChecked);
            },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return lastDisabled; },
            setDisabled: function (disabled) {
                lastDisabled = disabled;
                setDisabled(disabled);
            },
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(checked); },
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
        ref,
        onAddValueItem,
        onRemoveValueItem,
        focus,
        name,
        initChecked,
        checked,
        value,
        uncheckedValue,
        exceptValue,
        disabled,
        validate,
        id,
        setChecked,
        setValue,
        setUncheckedValue,
        setDisabled,
        setErrorErrorHelperText,
        data,
        setData,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (e, checked) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            setChecked(checked);
            nextTick(function () {
                onValueChangeByUser(name, checked);
                onRequestSearchSubmit(name, checked);
            });
        }
    }, [readOnly, setChecked, onValueChangeByUser, name, onRequestSearchSubmit]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormCheckbox'), labelIcon: labelIcon, label: label, error: error, fullWidth: fullWidth, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React__default.createElement(FormControlLabel, { ref: labelRef, control: React__default.createElement(Checkbox, __assign$7({ name: name, color: color, size: size, inputRef: initInputRef ? initInputRef : inputRef, action: initAction ? initAction : actionRef, checked: checked, checkedIcon: React__default.createElement(CheckBox, { color: error ? 'error' : undefined }), icon: React__default.createElement(CheckBoxOutlineBlank, { color: error ? 'error' : undefined }), onChange: handleChange, disabled: disabled || readOnly }, props)), label: React__default.createElement(Typography, { color: error ? 'error' : readOnly || disabled ? theme.palette.text.disabled : undefined, whiteSpace: 'nowrap' }, text) }) }));
});
FormCheckbox.displayName = 'FormCheckbox';
FormCheckbox.defaultProps = FormCheckboxDefaultProps;var FormRadioGroupDefaultProps = {
    inline: true,
};var PADDING_LEFT = 3;
var FormRadioGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    // type ------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, hidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, initWidth = _a.width, labelIcon = _a.labelIcon, label = _a.label, inline = _a.inline, initLoading = _a.loading, nowrap = _a.nowrap, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, onLoadItems = _a.onLoadItems, onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest$4(_a, ["variant", "size", "color", "focused", "fullWidth", "hidden", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "data", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"]);
    // ID --------------------------------------------------------------------------------------------------------------
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth), fullWidth = _c[0], setFullWidth = _c[1];
    // Theme -----------------------------------------------------------------------------------------------------------
    var theme = useTheme();
    // Ref -------------------------------------------------------------------------------------------------------------
    var baseRef = useRef(null);
    var firstInputRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initItems), items = _d[0], setItems = _d[1];
    var _e = useAutoUpdateState$1(initError), error = _e[0], setError = _e[1];
    var _f = useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = useAutoUpdateState$1(initDisabled), disabled = _g[0], setDisabled = _g[1];
    var _h = useState(false), isOnGetItemLoading = _h[0], setIsOnGetItemLoading = _h[1];
    var _j = useAutoUpdateState$1(initLoading), loading = _j[0], setLoading = _j[1];
    var _k = useAutoUpdateState$1(initWidth || '100%'), width = _k[0], setWidth = _k[1];
    var _l = useState(), formColWrapRect = _l[0], setFormColWrapRect = _l[1];
    var _m = useAutoUpdateState$1(initData), data = _m[0], setData = _m[1];
    // State - radioGroupNoWrapRect (ResizeDetector) -------------------------------------------------------------------
    var _o = useState(), radioGroupNoWrapRect = _o[0], setRadioGroupNoWrapRect = _o[1];
    var resizeWidthDetectorRef = useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        onResize: function () {
            var _a;
            setRadioGroupNoWrapRect((_a = resizeWidthDetectorRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect());
        },
    }).ref;
    // State - height (ResizeDetector) ---------------------------------------------------------------------------------
    var _p = useResizeDetector(), height = _p.height, resizeHeightDetectorRef = _p.ref;
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _q = useAutoUpdateState$1(initValue, getFinalValue), value = _q[0], setValue = _q[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        if (onValueChange)
            onValueChange(name, value);
    }, [value]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () { return (__assign$7({ width: width, paddingLeft: PADDING_LEFT }, initStyle)); }, [initStyle, width]);
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            if (onValueChange)
                onValueChange(name, value);
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
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = firstInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
        var lastData = data;
        var lastItems = items;
        var lastLoading = loading;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormRadioGroup'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue); },
            reset: function () {
                lastValue = getFinalValue(initValue);
                setValue(lastValue);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = getFinalValue(value);
                setValue(lastValue);
            },
            getData: function () { return lastData; },
            setData: function (data) {
                lastData = data;
                setData(data);
            },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return lastDisabled; },
            setDisabled: function (disabled) {
                lastDisabled = disabled;
                setDisabled(disabled);
            },
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(value); },
            setError: function (error, errorHelperText) {
                return setErrorErrorHelperText(error, error ? errorHelperText : undefined);
            },
            getItems: function () { return lastItems; },
            setItems: function (items) {
                lastItems = items;
                setItems(lastItems);
            },
            getLoading: function () { return !!lastLoading; },
            setLoading: function (loading) {
                lastLoading = loading;
                setLoading(lastLoading);
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
        name,
        initValue,
        value,
        getFinalValue,
        exceptValue,
        disabled,
        focus,
        validate,
        items,
        loading,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        setItems,
        setLoading,
        data,
        setData,
    ]);
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
    // Event Handler ---------------------------------------------------------------------------------------------------
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
                setValue(finalValue_1);
                nextTick(function () {
                    onValueChangeByUser(name, finalValue_1);
                    onRequestSearchSubmit(name, finalValue_1);
                });
            }
        }
    }, [readOnly, items, getFinalValue, value, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { focused: focused, ref: baseRef, className: classNames$1(className, 'FormValueItem', 'FormRadioGroup'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, fullWidth: fullWidth, required: required, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React__default.createElement(React__default.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React__default.createElement("div", { ref: resizeWidthDetectorRef, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React__default.createElement(RadioGroup, __assign$7({}, props, { style: { marginTop: 10, display: 'inline-flex', flexWrap: 'nowrap' }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), items.map(function (_a, idx) {
                    var value = _a.value, label = _a.label, itemDisabled = _a.disabled;
                    return (React__default.createElement(FormControlLabel, { ref: idx === 0 ? resizeHeightDetectorRef : null, key: idx, control: React__default.createElement(Radio, { icon: React__default.createElement(RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React__default.createElement(RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size }), label: label, style: { color: error ? theme.palette.error.main : '', marginTop: -10, whiteSpace: 'nowrap' }, value: value, disabled: disabled || readOnly || itemDisabled }));
                })))),
            React__default.createElement("div", null,
                React__default.createElement(RadioGroup, __assign$7({}, props, { style: {
                        marginTop: 10,
                        display: 'inline-flex',
                        visibility: width == null ? 'hidden' : undefined,
                        position: width == null ? 'absolute' : undefined,
                        flexWrap: nowrap ? 'nowrap' : undefined,
                    }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), isOnGetItemLoading || loading ? (React__default.createElement("div", { style: { position: 'relative' } },
                    React__default.createElement(FormControlLabel, { ref: resizeHeightDetectorRef, label: '', control: React__default.createElement(Radio, { color: color, size: size }), style: { marginTop: -10, visibility: 'hidden' } }),
                    React__default.createElement("div", { style: { position: 'absolute', left: 0, top: 1, opacity: 0.54 } },
                        React__default.createElement(CircularProgress, { size: size === 'small' ? 12 : 16, color: 'inherit' })))) : (React__default.createElement(React__default.Fragment, null, items &&
                    items.map(function (_a, idx) {
                        var value = _a.value, label = _a.label, itemDisabled = _a.disabled;
                        return (React__default.createElement(FormControlLabel, { key: idx, control: React__default.createElement(Radio, { icon: React__default.createElement(RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React__default.createElement(RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size, inputRef: idx === 0 ? firstInputRef : null }), label: label, style: { color: error ? theme.palette.error.main : '', marginTop: -10, whiteSpace: 'nowrap' }, value: value, disabled: disabled || readOnly || itemDisabled }));
                    })))))) }));
}));
FormRadioGroup.displayName = 'FormRadioGroup';
FormRadioGroup.defaultProps = FormRadioGroupDefaultProps;var FormToggleButtonGroupDefaultProps = {
    type: 'button',
    formValueSeparator: ',',
};var css_248z$d = ".FormToggleButtonGroup .ToggleButton {\n  display: inline-block;\n  padding: 0 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton, .FormToggleButtonGroup.type-radio .ToggleButton {\n  padding-left: 3px;\n  padding-right: 5px;\n  border: 0 !important;\n  margin-left: 0 !important;\n  justify-content: flex-start;\n  display: flex;\n  background-color: transparent !important;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton:not(:last-child), .FormToggleButtonGroup.type-radio .ToggleButton:not(:last-child) {\n  margin-right: 5px;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,\n.FormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-unchecked__, .FormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__,\n.FormToggleButtonGroup.type-radio .ToggleButton .__checkbox-unchecked__ {\n  margin-right: 3px;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__, .FormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__ {\n  display: none;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-checked__, .FormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-checked__ {\n  display: block;\n}\n.FormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-unchecked__, .FormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-unchecked__ {\n  display: none;\n}\n.FormToggleButtonGroup:not(.with-label).variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 15px;\n  margin-bottom: -15px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-filled .FormItemBase-Control-wrap {\n  margin-top: 15px;\n  margin-bottom: -15px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 28px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 13px;\n  margin-bottom: -13px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 24px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 13px;\n  margin-bottom: -13px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 31px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 26px;\n}\n.FormToggleButtonGroup.with-label.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup.with-label.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup.with-label.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 28px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 24px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 31px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 26px;\n}\n\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 28px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-outlined .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-outlined .FormItemBase-Control-wrap .ToggleButton {\n  height: 24px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-filled .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-filled .FormItemBase-Control-wrap .ToggleButton {\n  height: 31px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-standard .FormItemBase-Control-wrap .ToggleButton {\n  height: 26px;\n}";
styleInject(css_248z$d);var FormToggleButtonGroup = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    // type ------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, type = _a.type, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, notAllowEmptyValue = _a.notAllowEmptyValue, exceptValue = _a.exceptValue, initWidth = _a.width, multiple = _a.multiple, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, hidden = _a.hidden, itemWidth = _a.itemWidth, onLoadItems = _a.onLoadItems, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    // ID --------------------------------------------------------------------------------------------------------------
    var id = useId();
    var labelId = useId();
    // Ref ---------------------------------------------------------------------------------------------------------------
    var refForResizeWidthDetect = useRef(null);
    var refForButtonResizeHeightDetect = useRef(null);
    var refForLoadingResizeHeightDetect = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, formColWidth = _b.formColWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var fullWidth = useMemo(function () { return (type === 'checkbox' || type === 'radio' ? true : initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth, type]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    // Theme -----------------------------------------------------------------------------------------------------------
    var theme = useTheme();
    // State - width (ResizeDetector) ----------------------------------------------------------------------------------
    var _d = useState(), width = _d[0], setWidth = _d[1];
    useResizeDetector({
        targetRef: refForResizeWidthDetect,
        handleWidth: true,
        onResize: function () {
            var _a, _b;
            setWidth((_b = (_a = refForResizeWidthDetect.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.width);
        },
    });
    // State - height (ResizeDetector) ---------------------------------------------------------------------------------
    var _e = useState(), height = _e[0], setHeight = _e[1];
    useResizeDetector({
        targetRef: refForButtonResizeHeightDetect,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setHeight((_b = (_a = refForButtonResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height);
        },
    });
    useResizeDetector({
        targetRef: refForLoadingResizeHeightDetect,
        handleHeight: true,
        onResize: function () {
            var _a, _b;
            setHeight((_b = (_a = refForLoadingResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height);
        },
    });
    // State -----------------------------------------------------------------------------------------------------------
    var _f = useState(false), isOnGetItemLoading = _f[0], setIsOnGetItemLoading = _f[1];
    var _g = useAutoUpdateState$1(initItems), items = _g[0], setItems = _g[1];
    var _h = useAutoUpdateState$1(initError), error = _h[0], setError = _h[1];
    var _j = useState(), errorHelperText = _j[0], setErrorHelperText = _j[1];
    var _k = useAutoUpdateState$1(initLoading), loading = _k[0], setLoading = _k[1];
    var _l = useAutoUpdateState$1(initDisabled), disabled = _l[0], setDisabled = _l[1];
    var _m = useAutoUpdateState$1(initData), data = _m[0], setData = _m[1];
    // Memo --------------------------------------------------------------------------------------------------------------
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
        return __assign$7({ width: finalWidth }, initStyle);
    }, [formColWidth, fullWidth, initStyle, initWidth, isOnGetItemLoading, width]);
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        var finalValue = value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (finalValue != null && notEmpty(finalValue)) {
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
        return onValue ? onValue(finalValue) : finalValue;
    }, [multiple, formValueSeparator, itemsValues, onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _o = useAutoUpdateState$1(initValue, getFinalValue), value = _o[0], setValue = _o[1];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
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
                    setValue((multiple ? [items[0].value] : items[0].value));
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, value, multiple, notAllowEmptyValue]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = refForButtonResizeHeightDetect.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [refForButtonResizeHeightDetect]);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
            var lastData_1 = data;
            var lastItems_1 = items;
            var lastLoading_1 = loading;
            var lastDisabled_1 = !!disabled;
            var commands = {
                getType: function () { return 'FormToggleButtonGroup'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () {
                    lastValue_1 = getFinalValue(initValue);
                    setValue(lastValue_1);
                },
                getValue: function () { return lastValue_1; },
                setValue: function (value) {
                    lastValue_1 = getFinalValue(value);
                    setValue(lastValue_1);
                },
                getData: function () { return lastData_1; },
                setData: function (data) {
                    lastData_1 = data;
                    setData(data);
                },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return lastDisabled_1; },
                setDisabled: function (disabled) {
                    lastDisabled_1 = disabled;
                    setDisabled(disabled);
                },
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(value); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueSeparator: function () { return formValueSeparator; },
                isFormValueSort: function () { return !!formValueSort; },
                getItems: function () { return lastItems_1; },
                setItems: function (items) {
                    lastItems_1 = items;
                    setItems(lastItems_1);
                },
                isMultiple: function () { return !!multiple; },
                getLoading: function () { return !!lastLoading_1; },
                setLoading: function (loading) {
                    lastLoading_1 = loading;
                    setLoading(lastLoading_1);
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
        name,
        initValue,
        value,
        getFinalValue,
        exceptValue,
        disabled,
        multiple,
        focus,
        validate,
        formValueSeparator,
        formValueSort,
        items,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        loading,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        setItems,
        setLoading,
        data,
        setData,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (e, newValue) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = newValue;
            if (notAllowEmptyValue) {
                if (multiple) {
                    if (empty(finalValue_1)) {
                        if (Array.isArray(value) && value.length > 0) {
                            finalValue_1 = [value[0]];
                        }
                    }
                }
                else {
                    if (finalValue_1 == null) {
                        finalValue_1 = value;
                    }
                }
            }
            finalValue_1 = getFinalValue(finalValue_1);
            if (!isSame$2(value, finalValue_1)) {
                setValue(finalValue_1);
                nextTick(function () {
                    onValueChangeByUser(name, finalValue_1);
                    onRequestSearchSubmit(name, finalValue_1);
                });
            }
        }
    }, [
        readOnly,
        notAllowEmptyValue,
        getFinalValue,
        value,
        multiple,
        setValue,
        onValueChangeByUser,
        name,
        onRequestSearchSubmit,
    ]);
    // Render ----------------------------------------------------------------------------------------------------------
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
                return (React__default.createElement(ToggleButton, { ref: idx === 0 ? refForButtonResizeHeightDetect : undefined, key: idx, size: size, className: 'ToggleButton', value: value, color: itemColor || color, disabled: disabled || readOnly || itemDisabled, style: buttonStyle, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } },
                    type === 'checkbox' ? (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement(Icon$1, { className: '__checkbox-unchecked__' }, "check_box_outline_blank"),
                        React__default.createElement(Icon$1, { className: '__checkbox-checked__' }, "check_box"))) : (type === 'radio' && (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement(React__default.Fragment, null,
                            React__default.createElement(Icon$1, { className: '__checkbox-unchecked__' }, "radio_button_unchecked"),
                            React__default.createElement(Icon$1, { className: '__checkbox-checked__' }, "radio_button_checked"))))),
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
    return (React__default.createElement(FormItemBase, __assign$7({}, formControlBaseProps, { className: classNames$1(className, 'FormValueItem', 'FormToggleButtonGroup', "variant-".concat(variant), "size-".concat(size), !!label && 'with-label', !!fullWidth && 'full-width', "type-".concat(type)), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, required: required, fullWidth: fullWidth, error: error, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || 0, controlVerticalCenter: isOnGetItemLoading || loading, control: isOnGetItemLoading || loading ? (React__default.createElement("div", { style: { opacity: 0.54 }, ref: refForLoadingResizeHeightDetect },
            React__default.createElement(CircularProgress, { size: 16, color: 'inherit' }))) : (React__default.createElement(React__default.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React__default.createElement("div", { ref: refForResizeWidthDetect, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React__default.createElement(ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple }, buttons))),
            React__default.createElement(ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple, fullWidth: fullWidth, value: value == null ? null : value, onChange: handleChange, style: {
                    width: !fullWidth && formColWidth && typeof width === 'number' && width > formColWidth
                        ? formColWidth
                        : undefined,
                    flexWrap: type === 'checkbox' || type === 'radio' ? 'wrap' : 'nowrap',
                }, "aria-labelledby": notEmpty(label) ? labelId : undefined }, isOnGetItemLoading || loading || !items || empty(items) ? (React__default.createElement(ToggleButton, { ref: refForButtonResizeHeightDetect, size: size, className: 'ToggleButton', disabled: disabled || readOnly, value: '', style: { visibility: 'hidden' } })) : (buttons)))) })));
}));
FormToggleButtonGroup.displayName = 'FormToggleButtonGroup';
FormToggleButtonGroup.defaultProps = FormToggleButtonGroupDefaultProps;var FormRatingDefaultProps = {
    value: 0,
    precision: 1,
};var FormRating = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    precision = _a.precision, highlightSelectedOnly = _a.highlightSelectedOnly, icon = _a.icon, emptyIcon = _a.emptyIcon, max = _a.max, hidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, onValue = _a.onValue, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    // Ref -------------------------------------------------------------------------------------------------------------
    var ratingRef = useRef(null);
    var inputRef = useRef();
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = useAutoUpdateState$1(initDisabled), disabled = _f[0], setDisabled = _f[1];
    var _g = useAutoUpdateState$1(initData), data = _g[0], setData = _g[1];
    // State - width, height -------------------------------------------------------------------------------------------
    var _h = useResizeDetector({
        targetRef: ratingRef,
        handleWidth: true,
        handleHeight: true,
    }), width = _h.width, height = _h.height;
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _j = useAutoUpdateState$1(initValue || 0, getFinalValue), value = _j[0], setValue = _j[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // Memo --------------------------------------------------------------------------------------------------------------
    var style = useMemo(function () { return (__assign$7({ width: width || 100 }, initStyle)); }, [initStyle, width]);
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        if (ratingRef.current) {
            inputRef.current = ratingRef.current.querySelector('input') || undefined;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Function --------------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setTimeout(function () {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
        var lastData = data;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormRating'; },
            getName: function () { return name; },
            getReset: function () { return getFinalValue(initValue || 0); },
            reset: function () {
                lastValue = getFinalValue(initValue || 0);
                setValue(lastValue);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = getFinalValue(value);
                setValue(lastValue);
            },
            getData: function () { return lastData; },
            setData: function (data) {
                lastData = data;
                setData(data);
            },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return lastDisabled; },
            setDisabled: function (disabled) {
                lastDisabled = disabled;
                setDisabled(disabled);
            },
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(value); },
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
        name,
        initValue,
        value,
        getFinalValue,
        exceptValue,
        disabled,
        focus,
        validate,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        data,
        setData,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (e, value) {
        if (readOnly) {
            e.preventDefault();
        }
        else {
            var finalValue_1 = getFinalValue(value || 0);
            setValue(finalValue_1);
            nextTick(function () {
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
            });
        }
    }, [readOnly, getFinalValue, setValue, onValueChangeByUser, name, onRequestSearchSubmit]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormRating'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, required: required, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: style, sx: sx, hidden: hidden, autoSize: true, controlHeight: height || (size === 'small' ? 21 : 26), controlVerticalCenter: true, control: React__default.createElement(Rating, { ref: ratingRef, size: size === 'medium' ? 'large' : 'medium', name: name, precision: precision, highlightSelectedOnly: highlightSelectedOnly, value: value, disabled: disabled || readOnly, max: max, icon: React__default.createElement(FormIcon, { color: color, fontSize: 'inherit' }, icon ? icon : 'Star'), emptyIcon: React__default.createElement(FormIcon, { fontSize: 'inherit' }, emptyIcon ? emptyIcon : 'StarBorder'), onChange: handleChange, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } }) }));
});
FormRating.displayName = 'FormRating';
FormRating.defaultProps = FormRatingDefaultProps;var propTypes = {exports: {}};var reactIs = {exports: {}};var reactIs_production_min = {};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}var reactIs_development = {};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;var __assign$5 = (window && window.__assign) || function () {
    __assign$5 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$5.apply(this, arguments);
};
var eventPropTypes = {
    onActivate: propTypesExports.func,
    onAddUndo: propTypesExports.func,
    onBeforeAddUndo: propTypesExports.func,
    onBeforeExecCommand: propTypesExports.func,
    onBeforeGetContent: propTypesExports.func,
    onBeforeRenderUI: propTypesExports.func,
    onBeforeSetContent: propTypesExports.func,
    onBeforePaste: propTypesExports.func,
    onBlur: propTypesExports.func,
    onChange: propTypesExports.func,
    onClearUndos: propTypesExports.func,
    onClick: propTypesExports.func,
    onContextMenu: propTypesExports.func,
    onCommentChange: propTypesExports.func,
    onCopy: propTypesExports.func,
    onCut: propTypesExports.func,
    onDblclick: propTypesExports.func,
    onDeactivate: propTypesExports.func,
    onDirty: propTypesExports.func,
    onDrag: propTypesExports.func,
    onDragDrop: propTypesExports.func,
    onDragEnd: propTypesExports.func,
    onDragGesture: propTypesExports.func,
    onDragOver: propTypesExports.func,
    onDrop: propTypesExports.func,
    onExecCommand: propTypesExports.func,
    onFocus: propTypesExports.func,
    onFocusIn: propTypesExports.func,
    onFocusOut: propTypesExports.func,
    onGetContent: propTypesExports.func,
    onHide: propTypesExports.func,
    onInit: propTypesExports.func,
    onKeyDown: propTypesExports.func,
    onKeyPress: propTypesExports.func,
    onKeyUp: propTypesExports.func,
    onLoadContent: propTypesExports.func,
    onMouseDown: propTypesExports.func,
    onMouseEnter: propTypesExports.func,
    onMouseLeave: propTypesExports.func,
    onMouseMove: propTypesExports.func,
    onMouseOut: propTypesExports.func,
    onMouseOver: propTypesExports.func,
    onMouseUp: propTypesExports.func,
    onNodeChange: propTypesExports.func,
    onObjectResizeStart: propTypesExports.func,
    onObjectResized: propTypesExports.func,
    onObjectSelected: propTypesExports.func,
    onPaste: propTypesExports.func,
    onPostProcess: propTypesExports.func,
    onPostRender: propTypesExports.func,
    onPreProcess: propTypesExports.func,
    onProgressState: propTypesExports.func,
    onRedo: propTypesExports.func,
    onRemove: propTypesExports.func,
    onReset: propTypesExports.func,
    onSaveContent: propTypesExports.func,
    onSelectionChange: propTypesExports.func,
    onSetAttrib: propTypesExports.func,
    onSetContent: propTypesExports.func,
    onShow: propTypesExports.func,
    onSubmit: propTypesExports.func,
    onUndo: propTypesExports.func,
    onVisualAid: propTypesExports.func,
    onSkinLoadError: propTypesExports.func,
    onThemeLoadError: propTypesExports.func,
    onModelLoadError: propTypesExports.func,
    onPluginLoadError: propTypesExports.func,
    onIconsLoadError: propTypesExports.func,
    onLanguageLoadError: propTypesExports.func,
    onScriptsLoad: propTypesExports.func,
    onScriptsLoadError: propTypesExports.func,
};
var EditorPropTypes = __assign$5({ apiKey: propTypesExports.string, id: propTypesExports.string, inline: propTypesExports.bool, init: propTypesExports.object, initialValue: propTypesExports.string, onEditorChange: propTypesExports.func, value: propTypesExports.string, tagName: propTypesExports.string, cloudChannel: propTypesExports.string, plugins: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.array]), toolbar: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.array]), disabled: propTypesExports.bool, textareaName: propTypesExports.string, tinymceScriptSrc: propTypesExports.oneOfType([
        propTypesExports.string,
        propTypesExports.arrayOf(propTypesExports.string),
        propTypesExports.arrayOf(propTypesExports.shape({
            src: propTypesExports.string,
            async: propTypesExports.bool,
            defer: propTypesExports.bool
        }))
    ]), rollback: propTypesExports.oneOfType([propTypesExports.number, propTypesExports.oneOf([false])]), scriptLoading: propTypesExports.shape({
        async: propTypesExports.bool,
        defer: propTypesExports.bool,
        delay: propTypesExports.number
    }) }, eventPropTypes);var isFunction = function (x) { return typeof x === 'function'; };
var isEventProp = function (name) { return name in eventPropTypes; };
var eventAttrToEventName = function (attrName) { return attrName.substr(2); };
var configHandlers2 = function (handlerLookup, on, off, adapter, prevProps, props, boundHandlers) {
    var prevEventKeys = Object.keys(prevProps).filter(isEventProp);
    var currEventKeys = Object.keys(props).filter(isEventProp);
    var removedKeys = prevEventKeys.filter(function (key) { return props[key] === undefined; });
    var addedKeys = currEventKeys.filter(function (key) { return prevProps[key] === undefined; });
    removedKeys.forEach(function (key) {
        // remove event handler
        var eventName = eventAttrToEventName(key);
        var wrappedHandler = boundHandlers[eventName];
        off(eventName, wrappedHandler);
        delete boundHandlers[eventName];
    });
    addedKeys.forEach(function (key) {
        var wrappedHandler = adapter(handlerLookup, key);
        var eventName = eventAttrToEventName(key);
        boundHandlers[eventName] = wrappedHandler;
        on(eventName, wrappedHandler);
    });
};
var configHandlers = function (editor, prevProps, props, boundHandlers, lookup) {
    return configHandlers2(lookup, editor.on.bind(editor), editor.off.bind(editor), 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    function (handlerLookup, key) { return function (e) { var _a; return (_a = handlerLookup(key)) === null || _a === void 0 ? void 0 : _a(e, editor); }; }, prevProps, props, boundHandlers);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextareaOrInput = function (element) {
    return element !== null && (element.tagName.toLowerCase() === 'textarea' || element.tagName.toLowerCase() === 'input');
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
// eslint-disable-next-line max-len
var mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };
var isBeforeInputEventAvailable = function () { return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === 'function'; };
var isInDoc = function (elem) {
    if (!('isConnected' in Node.prototype)) {
        // Fallback for IE and old Edge
        var current = elem;
        var parent_1 = elem.parentNode;
        while (parent_1 != null) {
            current = parent_1;
            parent_1 = current.parentNode;
        }
        return current === elem.ownerDocument;
    }
    return elem.isConnected;
};
var setMode = function (editor, mode) {
    if (editor !== undefined) {
        if (editor.mode != null && typeof editor.mode === 'object' && typeof editor.mode.set === 'function') {
            editor.mode.set(mode);
        }
        else { // support TinyMCE 4
            editor.setMode(mode);
        }
    }
};var __assign$4 = (window && window.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};
var injectScriptTag = function (doc, item, handler) {
    var _a, _b;
    var scriptTag = doc.createElement('script');
    scriptTag.referrerPolicy = 'origin';
    scriptTag.type = 'application/javascript';
    scriptTag.id = item.id;
    scriptTag.src = item.src;
    scriptTag.async = (_a = item.async) !== null && _a !== void 0 ? _a : false;
    scriptTag.defer = (_b = item.defer) !== null && _b !== void 0 ? _b : false;
    var loadHandler = function () {
        scriptTag.removeEventListener('load', loadHandler);
        scriptTag.removeEventListener('error', errorHandler);
        handler(item.src);
    };
    var errorHandler = function (err) {
        scriptTag.removeEventListener('load', loadHandler);
        scriptTag.removeEventListener('error', errorHandler);
        handler(item.src, err);
    };
    scriptTag.addEventListener('load', loadHandler);
    scriptTag.addEventListener('error', errorHandler);
    if (doc.head) {
        doc.head.appendChild(scriptTag);
    }
};
var createDocumentScriptLoader = function (doc) {
    var lookup = {};
    var scriptLoadOrErrorHandler = function (src, err) {
        var item = lookup[src];
        item.done = true;
        item.error = err;
        for (var _i = 0, _a = item.handlers; _i < _a.length; _i++) {
            var h = _a[_i];
            h(src, err);
        }
        item.handlers = [];
    };
    var loadScripts = function (items, success, failure) {
        // eslint-disable-next-line no-console
        var failureOrLog = function (err) { return failure !== undefined ? failure(err) : console.error(err); };
        if (items.length === 0) {
            failureOrLog(new Error('At least one script must be provided'));
            return;
        }
        var successCount = 0;
        var failed = false;
        var loaded = function (_src, err) {
            if (failed) {
                return;
            }
            if (err) {
                failed = true;
                failureOrLog(err);
            }
            else if (++successCount === items.length) {
                success();
            }
        };
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var existing = lookup[item.src];
            if (existing) {
                if (existing.done) {
                    loaded(item.src, existing.error);
                }
                else {
                    existing.handlers.push(loaded);
                }
            }
            else {
                // create a new entry
                var id = uuid('tiny-');
                lookup[item.src] = {
                    id: id,
                    src: item.src,
                    done: false,
                    error: null,
                    handlers: [loaded],
                };
                injectScriptTag(doc, __assign$4({ id: id }, item), scriptLoadOrErrorHandler);
            }
        }
    };
    var deleteScripts = function () {
        var _a;
        for (var _i = 0, _b = Object.values(lookup); _i < _b.length; _i++) {
            var item = _b[_i];
            var scriptTag = doc.getElementById(item.id);
            if (scriptTag != null && scriptTag.tagName === 'SCRIPT') {
                (_a = scriptTag.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(scriptTag);
            }
        }
        lookup = {};
    };
    var getDocument = function () { return doc; };
    return {
        loadScripts: loadScripts,
        deleteScripts: deleteScripts,
        getDocument: getDocument
    };
};
var createScriptLoader = function () {
    var cache = [];
    var getDocumentScriptLoader = function (doc) {
        var loader = cache.find(function (l) { return l.getDocument() === doc; });
        if (loader === undefined) {
            loader = createDocumentScriptLoader(doc);
            cache.push(loader);
        }
        return loader;
    };
    var loadList = function (doc, items, delay, success, failure) {
        var doLoad = function () { return getDocumentScriptLoader(doc).loadScripts(items, success, failure); };
        if (delay > 0) {
            setTimeout(doLoad, delay);
        }
        else {
            doLoad();
        }
    };
    var reinitialize = function () {
        for (var loader = cache.pop(); loader != null; loader = cache.pop()) {
            loader.deleteScripts();
        }
    };
    return {
        loadList: loadList,
        reinitialize: reinitialize
    };
};
var ScriptLoader = createScriptLoader();var getTinymce = function (view) {
    var global = view;
    return global && global.tinymce ? global.tinymce : null;
};var __extends = (window && window.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign$3 = (window && window.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = this;
        var _a, _b, _c;
        _this = _super.call(this, props) || this;
        _this.rollbackTimer = undefined;
        _this.valueCursor = undefined;
        _this.rollbackChange = function () {
            var editor = _this.editor;
            var value = _this.props.value;
            if (editor && value && value !== _this.currentContent) {
                editor.undoManager.ignore(function () {
                    editor.setContent(value);
                    // only restore cursor on inline editors when they are focused
                    // as otherwise it will cause a focus grab
                    if (_this.valueCursor && (!_this.inline || editor.hasFocus())) {
                        try {
                            editor.selection.moveToBookmark(_this.valueCursor);
                        }
                        catch (e) { /* ignore */ }
                    }
                });
            }
            _this.rollbackTimer = undefined;
        };
        _this.handleBeforeInput = function (_evt) {
            if (_this.props.value !== undefined && _this.props.value === _this.currentContent && _this.editor) {
                if (!_this.inline || _this.editor.hasFocus()) {
                    try {
                        // getBookmark throws exceptions when the editor has not been focused
                        // possibly only in inline mode but I'm not taking chances
                        _this.valueCursor = _this.editor.selection.getBookmark(3);
                    }
                    catch (e) { /* ignore */ }
                }
            }
        };
        _this.handleBeforeInputSpecial = function (evt) {
            if (evt.key === 'Enter' || evt.key === 'Backspace' || evt.key === 'Delete') {
                _this.handleBeforeInput(evt);
            }
        };
        _this.handleEditorChange = function (_evt) {
            var editor = _this.editor;
            if (editor && editor.initialized) {
                var newContent = editor.getContent();
                if (_this.props.value !== undefined && _this.props.value !== newContent && _this.props.rollback !== false) {
                    // start a timer and revert to the value if not applied in time
                    if (!_this.rollbackTimer) {
                        _this.rollbackTimer = window.setTimeout(_this.rollbackChange, typeof _this.props.rollback === 'number' ? _this.props.rollback : 200);
                    }
                }
                if (newContent !== _this.currentContent) {
                    _this.currentContent = newContent;
                    if (isFunction(_this.props.onEditorChange)) {
                        _this.props.onEditorChange(newContent, editor);
                    }
                }
            }
        };
        _this.handleEditorChangeSpecial = function (evt) {
            if (evt.key === 'Backspace' || evt.key === 'Delete') {
                _this.handleEditorChange(evt);
            }
        };
        _this.initialise = function (attempts) {
            var _a, _b, _c;
            if (attempts === void 0) { attempts = 0; }
            var target = _this.elementRef.current;
            if (!target) {
                return; // Editor has been unmounted
            }
            if (!isInDoc(target)) {
                // this is probably someone trying to help by rendering us offscreen
                // but we can't do that because the editor iframe must be in the document
                // in order to have state
                if (attempts === 0) {
                    // we probably just need to wait for the current events to be processed
                    setTimeout(function () { return _this.initialise(1); }, 1);
                }
                else if (attempts < 100) {
                    // wait for ten seconds, polling every tenth of a second
                    setTimeout(function () { return _this.initialise(attempts + 1); }, 100);
                }
                else {
                    // give up, at this point it seems that more polling is unlikely to help
                    throw new Error('tinymce can only be initialised when in a document');
                }
                return;
            }
            var tinymce = getTinymce(_this.view);
            if (!tinymce) {
                throw new Error('tinymce should have been loaded into global scope');
            }
            var finalInit = __assign$3(__assign$3({}, _this.props.init), { selector: undefined, target: target, readonly: _this.props.disabled, inline: _this.inline, plugins: mergePlugins((_a = _this.props.init) === null || _a === void 0 ? void 0 : _a.plugins, _this.props.plugins), toolbar: (_b = _this.props.toolbar) !== null && _b !== void 0 ? _b : (_c = _this.props.init) === null || _c === void 0 ? void 0 : _c.toolbar, setup: function (editor) {
                    _this.editor = editor;
                    _this.bindHandlers({});
                    // When running in inline mode the editor gets the initial value
                    // from the innerHTML of the element it is initialized on.
                    // However we don't want to take on the responsibility of sanitizing
                    // to remove XSS in the react integration so we have a chicken and egg
                    // problem... We avoid it by sneaking in a set content before the first
                    // "official" setContent and using TinyMCE to do the sanitization.
                    if (_this.inline && !isTextareaOrInput(target)) {
                        editor.once('PostRender', function (_evt) {
                            editor.setContent(_this.getInitialValue(), { no_events: true });
                        });
                    }
                    if (_this.props.init && isFunction(_this.props.init.setup)) {
                        _this.props.init.setup(editor);
                    }
                }, init_instance_callback: function (editor) {
                    var _a, _b;
                    // check for changes that happened since tinymce.init() was called
                    var initialValue = _this.getInitialValue();
                    _this.currentContent = (_a = _this.currentContent) !== null && _a !== void 0 ? _a : editor.getContent();
                    if (_this.currentContent !== initialValue) {
                        _this.currentContent = initialValue;
                        // same as resetContent in TinyMCE 5
                        editor.setContent(initialValue);
                        editor.undoManager.clear();
                        editor.undoManager.add();
                        editor.setDirty(false);
                    }
                    var disabled = (_b = _this.props.disabled) !== null && _b !== void 0 ? _b : false;
                    setMode(_this.editor, disabled ? 'readonly' : 'design');
                    // ensure existing init_instance_callback is called
                    if (_this.props.init && isFunction(_this.props.init.init_instance_callback)) {
                        _this.props.init.init_instance_callback(editor);
                    }
                } });
            if (!_this.inline) {
                target.style.visibility = '';
            }
            if (isTextareaOrInput(target)) {
                target.value = _this.getInitialValue();
            }
            tinymce.init(finalInit);
        };
        _this.id = _this.props.id || uuid('tiny-react');
        _this.elementRef = React.createRef();
        _this.inline = (_c = (_a = _this.props.inline) !== null && _a !== void 0 ? _a : (_b = _this.props.init) === null || _b === void 0 ? void 0 : _b.inline) !== null && _c !== void 0 ? _c : false;
        _this.boundHandlers = {};
        return _this;
    }
    Object.defineProperty(Editor.prototype, "view", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.elementRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument.defaultView) !== null && _b !== void 0 ? _b : window;
        },
        enumerable: false,
        configurable: true
    });
    Editor.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var _a, _b;
        if (this.rollbackTimer) {
            clearTimeout(this.rollbackTimer);
            this.rollbackTimer = undefined;
        }
        if (this.editor) {
            this.bindHandlers(prevProps);
            if (this.editor.initialized) {
                this.currentContent = (_a = this.currentContent) !== null && _a !== void 0 ? _a : this.editor.getContent();
                if (typeof this.props.initialValue === 'string' && this.props.initialValue !== prevProps.initialValue) {
                    // same as resetContent in TinyMCE 5
                    this.editor.setContent(this.props.initialValue);
                    this.editor.undoManager.clear();
                    this.editor.undoManager.add();
                    this.editor.setDirty(false);
                }
                else if (typeof this.props.value === 'string' && this.props.value !== this.currentContent) {
                    var localEditor_1 = this.editor;
                    localEditor_1.undoManager.transact(function () {
                        // inline editors grab focus when restoring selection
                        // so we don't try to keep their selection unless they are currently focused
                        var cursor;
                        if (!_this.inline || localEditor_1.hasFocus()) {
                            try {
                                // getBookmark throws exceptions when the editor has not been focused
                                // possibly only in inline mode but I'm not taking chances
                                cursor = localEditor_1.selection.getBookmark(3);
                            }
                            catch (e) { /* ignore */ }
                        }
                        var valueCursor = _this.valueCursor;
                        localEditor_1.setContent(_this.props.value);
                        if (!_this.inline || localEditor_1.hasFocus()) {
                            for (var _i = 0, _a = [cursor, valueCursor]; _i < _a.length; _i++) {
                                var bookmark = _a[_i];
                                if (bookmark) {
                                    try {
                                        localEditor_1.selection.moveToBookmark(bookmark);
                                        _this.valueCursor = bookmark;
                                        break;
                                    }
                                    catch (e) { /* ignore */ }
                                }
                            }
                        }
                    });
                }
                if (this.props.disabled !== prevProps.disabled) {
                    var disabled = (_b = this.props.disabled) !== null && _b !== void 0 ? _b : false;
                    setMode(this.editor, disabled ? 'readonly' : 'design');
                }
            }
        }
    };
    Editor.prototype.componentDidMount = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        if (getTinymce(this.view) !== null) {
            this.initialise();
        }
        else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0) {
            (_b = (_a = this.props).onScriptsLoadError) === null || _b === void 0 ? void 0 : _b.call(_a, new Error('No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array.'));
        }
        else if ((_c = this.elementRef.current) === null || _c === void 0 ? void 0 : _c.ownerDocument) {
            var successHandler = function () {
                var _a, _b;
                (_b = (_a = _this.props).onScriptsLoad) === null || _b === void 0 ? void 0 : _b.call(_a);
                _this.initialise();
            };
            var errorHandler = function (err) {
                var _a, _b;
                (_b = (_a = _this.props).onScriptsLoadError) === null || _b === void 0 ? void 0 : _b.call(_a, err);
            };
            ScriptLoader.loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (_e = (_d = this.props.scriptLoading) === null || _d === void 0 ? void 0 : _d.delay) !== null && _e !== void 0 ? _e : 0, successHandler, errorHandler);
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        var _this = this;
        var editor = this.editor;
        if (editor) {
            editor.off(this.changeEvents(), this.handleEditorChange);
            editor.off(this.beforeInputEvent(), this.handleBeforeInput);
            editor.off('keypress', this.handleEditorChangeSpecial);
            editor.off('keydown', this.handleBeforeInputSpecial);
            editor.off('NewBlock', this.handleEditorChange);
            Object.keys(this.boundHandlers).forEach(function (eventName) {
                editor.off(eventName, _this.boundHandlers[eventName]);
            });
            this.boundHandlers = {};
            editor.remove();
            this.editor = undefined;
        }
    };
    Editor.prototype.render = function () {
        return this.inline ? this.renderInline() : this.renderIframe();
    };
    Editor.prototype.changeEvents = function () {
        var _a, _b, _c;
        var isIE = (_c = (_b = (_a = getTinymce(this.view)) === null || _a === void 0 ? void 0 : _a.Env) === null || _b === void 0 ? void 0 : _b.browser) === null || _c === void 0 ? void 0 : _c.isIE();
        return (isIE
            ? 'change keyup compositionend setcontent CommentChange'
            : 'change input compositionend setcontent CommentChange');
    };
    Editor.prototype.beforeInputEvent = function () {
        return isBeforeInputEventAvailable() ? 'beforeinput SelectionChange' : 'SelectionChange';
    };
    Editor.prototype.renderInline = function () {
        var _a = this.props.tagName, tagName = _a === void 0 ? 'div' : _a;
        return React.createElement(tagName, {
            ref: this.elementRef,
            id: this.id
        });
    };
    Editor.prototype.renderIframe = function () {
        return React.createElement('textarea', {
            ref: this.elementRef,
            style: { visibility: 'hidden' },
            name: this.props.textareaName,
            id: this.id
        });
    };
    Editor.prototype.getScriptSources = function () {
        var _a, _b;
        var async = (_a = this.props.scriptLoading) === null || _a === void 0 ? void 0 : _a.async;
        var defer = (_b = this.props.scriptLoading) === null || _b === void 0 ? void 0 : _b.defer;
        if (this.props.tinymceScriptSrc !== undefined) {
            if (typeof this.props.tinymceScriptSrc === 'string') {
                return [{ src: this.props.tinymceScriptSrc, async: async, defer: defer }];
            }
            // multiple scripts can be specified which allows for hybrid mode
            return this.props.tinymceScriptSrc.map(function (item) {
                if (typeof item === 'string') {
                    // async does not make sense for multiple items unless
                    // they are not dependent (which will be unlikely)
                    return { src: item, async: async, defer: defer };
                }
                else {
                    return item;
                }
            });
        }
        // fallback to the cloud when the tinymceScriptSrc is not specified
        var channel = this.props.cloudChannel;
        var apiKey = this.props.apiKey ? this.props.apiKey : 'no-api-key';
        var cloudTinyJs = "https://cdn.tiny.cloud/1/".concat(apiKey, "/tinymce/").concat(channel, "/tinymce.min.js");
        return [{ src: cloudTinyJs, async: async, defer: defer }];
    };
    Editor.prototype.getInitialValue = function () {
        if (typeof this.props.initialValue === 'string') {
            return this.props.initialValue;
        }
        else if (typeof this.props.value === 'string') {
            return this.props.value;
        }
        else {
            return '';
        }
    };
    Editor.prototype.bindHandlers = function (prevProps) {
        var _this = this;
        if (this.editor !== undefined) {
            // typescript chokes trying to understand the type of the lookup function
            configHandlers(this.editor, prevProps, this.props, this.boundHandlers, function (key) { return _this.props[key]; });
            // check if we should monitor editor changes
            var isValueControlled = function (p) { return p.onEditorChange !== undefined || p.value !== undefined; };
            var wasControlled = isValueControlled(prevProps);
            var nowControlled = isValueControlled(this.props);
            if (!wasControlled && nowControlled) {
                this.editor.on(this.changeEvents(), this.handleEditorChange);
                this.editor.on(this.beforeInputEvent(), this.handleBeforeInput);
                this.editor.on('keydown', this.handleBeforeInputSpecial);
                this.editor.on('keyup', this.handleEditorChangeSpecial);
                this.editor.on('NewBlock', this.handleEditorChange);
            }
            else if (wasControlled && !nowControlled) {
                this.editor.off(this.changeEvents(), this.handleEditorChange);
                this.editor.off(this.beforeInputEvent(), this.handleBeforeInput);
                this.editor.off('keydown', this.handleBeforeInputSpecial);
                this.editor.off('keyup', this.handleEditorChangeSpecial);
                this.editor.off('NewBlock', this.handleEditorChange);
            }
        }
    };
    Editor.propTypes = EditorPropTypes;
    Editor.defaultProps = {
        cloudChannel: '6'
    };
    return Editor;
}(React.Component));var FormTextEditorDefaultProps = {
    menubar: true,
    height: 500,
    value: '',
};var css_248z$c = ".FormTextEditor.initializing textarea {\n  display: none;\n}\n.FormTextEditor.error .tox-tinymce {\n  border-color: #d32f2f;\n}\n\n.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item {\n  padding-right: 20px !important;\n}\n\n.tox-notifications-container {\n  display: none;\n}";
styleInject(css_248z$c);var FormTextEditor = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    menubar = _a.menubar, height = _a.height, hidden = _a.hidden, onImageUpload = _a.onImageUpload, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onRemoveValueItem = _b.onRemoveValueItem, onValueChangeByUser = _b.onValueChangeByUser;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initFocused == null ? formFocused : initFocused), focused = _c[0], setFocused = _c[1];
    // Ref -------------------------------------------------------------------------------------------------------------
    var editorRef = useRef(null);
    var keyDownTime = useRef(0);
    // State - value ---------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initValue || ''), value = _d[0], setValue = _d[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // State -----------------------------------------------------------------------------------------------------------
    var _e = useAutoUpdateState$1(initError), error = _e[0], setError = _e[1];
    var _f = useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = useState(false), initialized = _g[0], setInitialized = _g[1];
    var _h = useAutoUpdateState$1(initDisabled), disabled = _h[0], setDisabled = _h[1];
    var _j = useAutoUpdateState$1(initData), data = _j[0], setData = _j[1];
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a, _b;
        var textarea = (_b = (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.elementRef) === null || _b === void 0 ? void 0 : _b.current;
        if (textarea) {
            textarea.style.display = 'block';
            textarea.focus();
            textarea.style.display = 'none';
        }
    }, [editorRef]);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        var isEmptyValue = false;
        if (value) {
            var d = document.createElement('div');
            d.innerHTML = value;
            var text = d.textContent || d.innerText;
            isEmptyValue = empty(text.trim());
        }
        if (required && (isEmptyValue || empty(value))) {
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
        var lastData = data;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormTextEditor'; },
            getName: function () { return name; },
            getReset: function () { return initValue || ''; },
            reset: function () {
                lastValue = initValue || '';
                setValue(lastValue);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = value;
                setValue(lastValue);
            },
            getData: function () { return lastData; },
            setData: function (data) {
                lastData = data;
                setData(data);
            },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return lastDisabled; },
            setDisabled: function (disabled) {
                lastDisabled = disabled;
                setDisabled(disabled);
            },
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(value); },
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
        name,
        initValue,
        value,
        exceptValue,
        disabled,
        focus,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        data,
        setData,
        validate,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleEditorChange = useCallback(function (value) {
        setValue(value);
        if (new Date().getTime() - keyDownTime.current < 300) {
            nextTick(function () {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, value);
            });
        }
    }, [name, onValueChangeByUser, setValue]);
    var handleKeyDown = useCallback(function () {
        keyDownTime.current = new Date().getTime();
    }, []);
    var handleImageUpload = useCallback(function (blobInfo, progress) {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormTextEditor', !initialized && 'initializing'), labelIcon: labelIcon, label: label, error: error, required: required, fullWidth: true, helperText: error ? errorHelperText : helperText, helperTextProps: { style: { marginLeft: 5 } }, style: { width: '100%' }, hidden: hidden, controlHeight: height, control: React__default.createElement(React__default.Fragment, null,
            !initialized ? React__default.createElement(Skeleton, { variant: 'rectangular', width: '100%', height: height }) : null,
            React__default.createElement(Editor, { ref: editorRef, value: value, disabled: readOnly || disabled, init: {
                    height: height,
                    menubar: menubar,
                    readonly: true,
                    language: 'ko_KR',
                    contextmenu: false,
                    content_style: 'body {font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: hsl(0,0%,20%);} p {padding:0; margin:0}',
                    plugins: [
                        'advlist',
                        'advlist autolink lists link image',
                        'charmap print preview anchor',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount',
                    ],
                    toolbar: 'undo redo | \
                   formatselect bullist numlist outdent indent | \
                   bold italic | align | forecolor backcolor | \
                   link image media | advtable | code',
                    images_upload_handler: handleImageUpload,
                }, onInit: function () {
                    setTimeout(function () { return setInitialized(true); }, 10);
                }, onEditorChange: handleEditorChange, onKeyDown: handleKeyDown, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } })) }));
});
FormTextEditor.displayName = 'FormTextEditor';
FormTextEditor.defaultProps = FormTextEditorDefaultProps;var FormAutocompleteDefaultProps = {
    formValueSeparator: ',',
    noOptionsText: '항목이 없습니다',
};var FormAutocomplete = ToForwardRefExoticComponent(AutoTypeForwardRef(function (_a, ref) {
    // type ------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initData = _a.data, initError = _a.error, helperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, width = _a.width, placeholder = _a.placeholder, multiple = _a.multiple, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, disablePortal = _a.disablePortal, noOptionsText = _a.noOptionsText, loadingText = _a.loadingText, limitTags = _a.limitTags, openOnFocus = _a.openOnFocus, disableClearable = _a.disableClearable, async = _a.async, hidden = _a.hidden, onLoadItems = _a.onLoadItems, onAsyncLoadValueItem = _a.onAsyncLoadValueItem, onRenderItem = _a.onRenderItem, onRenderTag = _a.onRenderTag, onAddItem = _a.onAddItem, getOptionDisabled = _a.getOptionDisabled, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    // ID --------------------------------------------------------------------------------------------------------------
    var id = useId();
    // Ref -------------------------------------------------------------------------------------------------------------
    var textFieldRef = useRef(null);
    var asyncTimerRef = useRef(null);
    var oldComponentValueRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // State -----------------------------------------------------------------------------------------------------------
    var _c = useState(false), isOnGetItemLoading = _c[0], setIsOnGetItemLoading = _c[1];
    var _d = useAutoUpdateState$1(initItems), items = _d[0], setItems = _d[1];
    var _e = useAutoUpdateState$1(initError), error = _e[0], setError = _e[1];
    var _f = useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = useAutoUpdateState$1(initLoading), loading = _g[0], setLoading = _g[1];
    var _h = useAutoUpdateState$1(initDisabled), disabled = _h[0], setDisabled = _h[1];
    var _j = useState(undefined), inputValue = _j[0], setInputValue = _j[1];
    var _k = useAutoUpdateState$1(initData), data = _k[0], setData = _k[1];
    // Memo --------------------------------------------------------------------------------------------------------------
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
    var style = useMemo(function () {
        var style = __assign$7({ minWidth: 120 }, initStyle);
        if (hidden) {
            style.display = 'none';
        }
        if (width != null) {
            style.width = width;
        }
        return style;
    }, [initStyle, width, hidden]);
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        var finalValue = value;
        if (multiple) {
            if (!Array.isArray(finalValue)) {
                if (finalValue != null && notEmpty(finalValue)) {
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
    // State - value ---------------------------------------------------------------------------------------------------
    var _l = useAutoUpdateState$1(initValue, getFinalValue), value = _l[0], setValue = _l[1];
    var _m = useState(null), valueItem = _m[0], setValueItem = _m[1];
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
        if (notEmpty(finalValue)) {
            if (items) {
                if (Array.isArray(finalValue)) {
                    newComponentValue = items.filter(function (info) { return Array.isArray(finalValue) && finalValue.includes(info.value); });
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
                    if (!Array.isArray(valueItem) && finalValue === valueItem.value) {
                        newComponentValue = valueItem;
                    }
                }
            }
        }
        if (oldComponentValueRef.current &&
            newComponentValue &&
            isSame$2(oldComponentValueRef.current, newComponentValue)) {
            return oldComponentValueRef.current;
        }
        else {
            oldComponentValueRef.current = newComponentValue;
            return newComponentValue;
        }
    }, [value, multiple, items, valueItem]);
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
    // Function ----------------------------------------------------------------------------------------------------------
    var showOnGetItemLoading = useCallback(function () {
        setIsOnGetItemLoading(true);
    }, []);
    var hideOnGetItemLoading = useCallback(function () {
        setIsOnGetItemLoading(false);
    }, []);
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
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
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
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
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldRef]);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
            var lastData_1 = data;
            var lastItems_1 = items;
            var lastLoading_1 = loading;
            var lastDisabled_1 = !!disabled;
            var commands = {
                getType: function () { return 'FormAutocomplete'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () {
                    lastValue_1 = getFinalValue(initValue);
                    setValue(lastValue_1);
                },
                getValue: function () { return lastValue_1; },
                setValue: function (value) {
                    lastValue_1 = getFinalValue(value);
                    setValue(lastValue_1);
                },
                getData: function () { return lastData_1; },
                setData: function (data) {
                    lastData_1 = data;
                    setData(data);
                },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return lastDisabled_1; },
                setDisabled: function (disabled) {
                    lastDisabled_1 = disabled;
                    setDisabled(disabled);
                },
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(value); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueSeparator: function () { return formValueSeparator; },
                isFormValueSort: function () { return !!formValueSort; },
                getItems: function () { return lastItems_1; },
                setItems: function (items) {
                    lastItems_1 = items;
                    setItems(lastItems_1);
                },
                isMultiple: function () { return !!multiple; },
                getLoading: function () { return !!lastLoading_1; },
                setLoading: function (loading) {
                    lastLoading_1 = loading;
                    setLoading(lastLoading_1);
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
        name,
        initValue,
        value,
        getFinalValue,
        exceptValue,
        disabled,
        multiple,
        focus,
        validate,
        formValueSeparator,
        formValueSort,
        items,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        loading,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        setItems,
        setLoading,
        data,
        setData,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
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
            if (!isSame$2(value, finalValue)) {
                setValue(finalValue);
                setValueItem(componentValue);
                nextTick(function () {
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
    }, [multiple, getFinalValue, value, setValue, onValueChangeByUser, name, onRequestSearchSubmit, onAddItem]);
    var handleGetOptionDisabled = useCallback(function (option) {
        if (getOptionDisabled) {
            return option.disabled || getOptionDisabled(option);
        }
        else {
            return !!option.disabled;
        }
    }, [getOptionDisabled]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Autocomplete, { options: items || [], className: classNames$1(className, 'FormValueItem', 'FormAutocomplete'), sx: sx, multiple: multiple, fullWidth: !width && fullWidth, openOnFocus: openOnFocus, disableClearable: disableClearable, disablePortal: disablePortal, noOptionsText: noOptionsText, value: componentValue, style: style, isOptionEqualToValue: function (option, value) { return option.value === value.value; }, getOptionDisabled: handleGetOptionDisabled, disabled: disabled, readOnly: readOnly, loading: loading || isOnGetItemLoading, loadingText: loadingText, limitTags: limitTags, onChange: function (e, value, reason, details) { return handleChange(value, reason, details); }, renderOption: function (props, option) { return (React__default.createElement("li", __assign$7({}, props, { key: "".concat(option.value) }), onRenderItem ? onRenderItem(option) : option.label)); }, onInputChange: function (event, newInputValue, reason) {
            if (reason === 'input') {
                setInputValue(newInputValue);
            }
            else if (reason === 'reset') {
                setInputValue(undefined);
            }
        }, renderTags: function (value, getTagProps) {
            return value.map(function (option, index) { return (React__default.createElement(Chip, __assign$7({ size: 'small', label: onRenderTag ? onRenderTag(option) : option.label }, getTagProps({ index: index })))); });
        }, renderInput: function (params) { return (React__default.createElement(FormTextField, __assign$7({}, params, { ref: textFieldRef, name: name, variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, labelShrink: labelShrink, required: required, focused: focused, error: error, readOnly: readOnly, helperText: error ? errorHelperText : helperText, placeholder: placeholder, noFormValueItem: true, InputProps: __assign$7(__assign$7({}, params.InputProps), { endAdornment: (React__default.createElement(React__default.Fragment, null,
                    loading || isOnGetItemLoading ? React__default.createElement(CircularProgress$1, { color: 'inherit', size: 20 }) : null,
                    params.InputProps.endAdornment)) }), inputProps: readOnly || disabled ? __assign$7(__assign$7({}, params.inputProps), { tabIndex: -1 }) : params.inputProps }))); } }));
}));
FormAutocomplete.displayName = 'FormAutocomplete';
FormAutocomplete.defaultProps = FormAutocompleteDefaultProps;var FormDatePickerDefaultProps = {};/* global Reflect, Promise, SuppressedError, Symbol */


var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

function __rest$1(s, e) {
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
};function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}var classnames = {exports: {}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);function useFirstSkipEffect(effect, deps) {
    var firstRef = useRef(true);
    useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}var isSame = function (v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (Array.isArray(v1) && Array.isArray(v2)) {
        if (v1.length !== v2.length)
            return false;
        for (var i = 0; i < v1.length; i += 1) {
            if (v1[i] !== v2[i])
                return false;
        }
    }
    else {
        return v1 === v2;
    }
    return true;
};function useAutoUpdateState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(0), setUpdateKey = _a[1];
    var _initState = useState(function () {
        return finalStateCallback ? finalStateCallback(state) : state;
    })[0];
    var _state = useRef(_initState);
    var forceUpdate = useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}var IconDefaultProps = {};var Icon = React__default.forwardRef(function (_a, ref) {
    // State - children ------------------------------------------------------------------------------------------------
    var className = _a.className, initChildren = _a.children, initStyle = _a.style, props = __rest$1(_a, ["className", "children", "style"]);
    var children = useAutoUpdateState(useCallback(function () {
        return initChildren === null || initChildren === void 0 ? void 0 : initChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); });
    }, [initChildren]))[0];
    var style = useAutoUpdateState(useCallback(function () {
        return __assign$2({ verticalAlign: 'middle' }, initStyle);
    }, [initStyle]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Icon$1, __assign$2({ ref: ref }, props, { className: classNames('Icon', className), style: style }), children));
});
Icon.displayName = 'Icon';
Icon.defaultProps = IconDefaultProps;var IconTextDefaultProps = {
    iconMarginRight: 3,
};var IconText = function (_a) {
    var children = _a.children, icon = _a.icon, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, initTextProps = _a.textProps, otherProps = __rest$1(_a, ["children", "icon", "iconMarginRight", "iconProps", "textProps"]);
    var iconProps = useAutoUpdateState(useCallback(function () {
        return __assign$2(__assign$2({}, initIconProps), { style: __assign$2({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style) });
    }, [initIconProps, iconMarginRight]))[0];
    var textProps = useAutoUpdateState(useCallback(function () {
        return __assign$2(__assign$2({}, initTextProps), { style: __assign$2({ verticalAlign: 'middle' }, initTextProps === null || initTextProps === void 0 ? void 0 : initTextProps.style) });
    }, [initTextProps]))[0];
    return (React__default.createElement(Box, __assign$2({ component: 'span' }, otherProps),
        icon && React__default.createElement(Icon, __assign$2({}, iconProps), icon),
        React__default.createElement("span", __assign$2({}, textProps), children)));
};
IconText.defaultProps = IconTextDefaultProps;var PrivateDatePickerDefaultProps = {
    showDaysOutsideCurrentMonth: true,
    align: 'center',
    value: null,
};var PrivateStaticDatePickerDefaultProps = {};var PrivateYearSelectDefaultProps = {};var css_248z$b = ".PrivateYearSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n}\n.PrivateYearSelect button {\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 18px;\n}";
styleInject(css_248z$b);var PrivateToggleButtonDefaultProps = {};var PrivateToggleButton = React__default.forwardRef(function (_a, ref) {
    var children = _a.children, initClassName = _a.className, selected = _a.selected, activated = _a.activated, outlined = _a.outlined, props = __rest$4(_a, ["children", "className", "selected", "activated", "outlined"]);
    var theme = useTheme();
    var className = useMemo(function () { return classNames$1(initClassName, selected && 'selected', activated && 'activated', outlined && 'outlined'); }, [activated, initClassName, outlined, selected]);
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
    return (React__default.createElement(Button, __assign$7({}, props, { ref: ref, sx: sx, variant: 'text', className: classNames$1(className, selected && 'selected') }), children));
});
PrivateToggleButton.displayName = 'PrivateToggleButton';
PrivateToggleButton.defaultProps = PrivateToggleButtonDefaultProps;/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$1 = freeGlobal;/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

var root$1 = root;/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

var Symbol$2 = Symbol$1;/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root$1.Date.now();
};

var now$1 = now;/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

var canUseDom = canUseDOM;

var canUseDOM$1 = /*@__PURE__*/getDefaultExportFromCjs$1(canUseDom);/**
 * simplebar-core - v1.2.4
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */


/******************************************************************************
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

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM$1) {
    window.addEventListener('resize', function () {
        if (cachedDevicePixelRatio !== window.devicePixelRatio) {
            cachedDevicePixelRatio = window.devicePixelRatio;
            cachedScrollbarWidth = null;
        }
    });
}
function scrollbarWidth() {
    if (cachedScrollbarWidth === null) {
        if (typeof document === 'undefined') {
            cachedScrollbarWidth = 0;
            return cachedScrollbarWidth;
        }
        var body = document.body;
        var box = document.createElement('div');
        box.classList.add('simplebar-hide-scrollbar');
        body.appendChild(box);
        var width = box.getBoundingClientRect().right;
        body.removeChild(box);
        cachedScrollbarWidth = width;
    }
    return cachedScrollbarWidth;
}

function getElementWindow$1(element) {
    if (!element ||
        !element.ownerDocument ||
        !element.ownerDocument.defaultView) {
        return window;
    }
    return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
    if (!element || !element.ownerDocument) {
        return document;
    }
    return element.ownerDocument;
}
// Helper function to retrieve options from element attributes
var getOptions$1 = function (obj) {
    var initialObj = {};
    var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
        var option = attribute.name.match(/data-simplebar-(.+)/);
        if (option) {
            var key = option[1].replace(/\W+(.)/g, function (_, chr) { return chr.toUpperCase(); });
            switch (attribute.value) {
                case 'true':
                    acc[key] = true;
                    break;
                case 'false':
                    acc[key] = false;
                    break;
                case undefined:
                    acc[key] = true;
                    break;
                default:
                    acc[key] = attribute.value;
            }
        }
        return acc;
    }, initialObj);
    return options;
};
function addClasses$1(el, classes) {
    var _a;
    if (!el)
        return;
    (_a = el.classList).add.apply(_a, classes.split(' '));
}
function removeClasses$1(el, classes) {
    if (!el)
        return;
    classes.split(' ').forEach(function (className) {
        el.classList.remove(className);
    });
}
function classNamesToQuery$1(classNames) {
    return ".".concat(classNames.split(' ').join('.'));
}

var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getElementWindow: getElementWindow$1,
    getElementDocument: getElementDocument$1,
    getOptions: getOptions$1,
    addClasses: addClasses$1,
    removeClasses: removeClasses$1,
    classNamesToQuery: classNamesToQuery$1
});

var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions = getOptions$1, addClasses = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
var SimpleBarCore = /** @class */ (function () {
    function SimpleBarCore(element, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.removePreventClickId = null;
        this.minScrollbarWidth = 20;
        this.stopScrollDelay = 175;
        this.isScrolling = false;
        this.isMouseEntering = false;
        this.scrollXTicking = false;
        this.scrollYTicking = false;
        this.wrapperEl = null;
        this.contentWrapperEl = null;
        this.contentEl = null;
        this.offsetEl = null;
        this.maskEl = null;
        this.placeholderEl = null;
        this.heightAutoObserverWrapperEl = null;
        this.heightAutoObserverEl = null;
        this.rtlHelpers = null;
        this.scrollbarWidth = 0;
        this.resizeObserver = null;
        this.mutationObserver = null;
        this.elStyles = null;
        this.isRtl = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.onMouseMove = function () { };
        this.onWindowResize = function () { };
        this.onStopScrolling = function () { };
        this.onMouseEntered = function () { };
        /**
         * On scroll event handling
         */
        this.onScroll = function () {
            var elWindow = getElementWindow(_this.el);
            if (!_this.scrollXTicking) {
                elWindow.requestAnimationFrame(_this.scrollX);
                _this.scrollXTicking = true;
            }
            if (!_this.scrollYTicking) {
                elWindow.requestAnimationFrame(_this.scrollY);
                _this.scrollYTicking = true;
            }
            if (!_this.isScrolling) {
                _this.isScrolling = true;
                addClasses(_this.el, _this.classNames.scrolling);
            }
            _this.showScrollbar('x');
            _this.showScrollbar('y');
            _this.onStopScrolling();
        };
        this.scrollX = function () {
            if (_this.axis.x.isOverflowing) {
                _this.positionScrollbar('x');
            }
            _this.scrollXTicking = false;
        };
        this.scrollY = function () {
            if (_this.axis.y.isOverflowing) {
                _this.positionScrollbar('y');
            }
            _this.scrollYTicking = false;
        };
        this._onStopScrolling = function () {
            removeClasses(_this.el, _this.classNames.scrolling);
            if (_this.options.autoHide) {
                _this.hideScrollbar('x');
                _this.hideScrollbar('y');
            }
            _this.isScrolling = false;
        };
        this.onMouseEnter = function () {
            if (!_this.isMouseEntering) {
                addClasses(_this.el, _this.classNames.mouseEntered);
                _this.showScrollbar('x');
                _this.showScrollbar('y');
                _this.isMouseEntering = true;
            }
            _this.onMouseEntered();
        };
        this._onMouseEntered = function () {
            removeClasses(_this.el, _this.classNames.mouseEntered);
            if (_this.options.autoHide) {
                _this.hideScrollbar('x');
                _this.hideScrollbar('y');
            }
            _this.isMouseEntering = false;
        };
        this._onMouseMove = function (e) {
            _this.mouseX = e.clientX;
            _this.mouseY = e.clientY;
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                _this.onMouseMoveForAxis('x');
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                _this.onMouseMoveForAxis('y');
            }
        };
        this.onMouseLeave = function () {
            _this.onMouseMove.cancel();
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                _this.onMouseLeaveForAxis('x');
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                _this.onMouseLeaveForAxis('y');
            }
            _this.mouseX = -1;
            _this.mouseY = -1;
        };
        this._onWindowResize = function () {
            // Recalculate scrollbarWidth in case it's a zoom
            _this.scrollbarWidth = _this.getScrollbarWidth();
            _this.hideNativeScrollbar();
        };
        this.onPointerEvent = function (e) {
            if (!_this.axis.x.track.el ||
                !_this.axis.y.track.el ||
                !_this.axis.x.scrollbar.el ||
                !_this.axis.y.scrollbar.el)
                return;
            var isWithinTrackXBounds, isWithinTrackYBounds;
            _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
            _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
                isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
            }
            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
                isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
            }
            // If any pointer event is called on the scrollbar
            if (isWithinTrackXBounds || isWithinTrackYBounds) {
                // Prevent event leaking
                e.stopPropagation();
                if (e.type === 'pointerdown' && e.pointerType !== 'touch') {
                    if (isWithinTrackXBounds) {
                        _this.axis.x.scrollbar.rect =
                            _this.axis.x.scrollbar.el.getBoundingClientRect();
                        if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                            _this.onDragStart(e, 'x');
                        }
                        else {
                            _this.onTrackClick(e, 'x');
                        }
                    }
                    if (isWithinTrackYBounds) {
                        _this.axis.y.scrollbar.rect =
                            _this.axis.y.scrollbar.el.getBoundingClientRect();
                        if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                            _this.onDragStart(e, 'y');
                        }
                        else {
                            _this.onTrackClick(e, 'y');
                        }
                    }
                }
            }
        };
        /**
         * Drag scrollbar handle
         */
        this.drag = function (e) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (!_this.draggedAxis || !_this.contentWrapperEl)
                return;
            var eventOffset;
            var track = _this.axis[_this.draggedAxis].track;
            var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
            var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
            var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
            var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : '0px', 10);
            e.preventDefault();
            e.stopPropagation();
            if (_this.draggedAxis === 'y') {
                eventOffset = e.pageY;
            }
            else {
                eventOffset = e.pageX;
            }
            // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).
            var dragPos = eventOffset -
                ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) -
                _this.axis[_this.draggedAxis].dragOffset;
            dragPos = _this.draggedAxis === 'x' && _this.isRtl
                ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) -
                    scrollbar.size -
                    dragPos
                : dragPos;
            // Convert the mouse position into a percentage of the scrollbar height/width.
            var dragPerc = dragPos / (trackSize - scrollbar.size);
            // Scroll the content by the same percentage.
            var scrollPos = dragPerc * (contentSize - hostSize);
            // Fix browsers inconsistency on RTL
            if (_this.draggedAxis === 'x' && _this.isRtl) {
                scrollPos = ((_l = SimpleBarCore.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative)
                    ? -scrollPos
                    : scrollPos;
            }
            _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] =
                scrollPos;
        };
        /**
         * End scroll handle drag
         */
        this.onEndDrag = function (e) {
            var elDocument = getElementDocument(_this.el);
            var elWindow = getElementWindow(_this.el);
            e.preventDefault();
            e.stopPropagation();
            removeClasses(_this.el, _this.classNames.dragging);
            elDocument.removeEventListener('mousemove', _this.drag, true);
            elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
            _this.removePreventClickId = elWindow.setTimeout(function () {
                // Remove these asynchronously so we still suppress click events
                // generated simultaneously with mouseup.
                elDocument.removeEventListener('click', _this.preventClick, true);
                elDocument.removeEventListener('dblclick', _this.preventClick, true);
                _this.removePreventClickId = null;
            });
        };
        /**
         * Handler to ignore click events during drag
         */
        this.preventClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
        this.el = element;
        this.options = __assign$1(__assign$1({}, SimpleBarCore.defaultOptions), options);
        this.classNames = __assign$1(__assign$1({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
        this.axis = {
            x: {
                scrollOffsetAttr: 'scrollLeft',
                sizeAttr: 'width',
                scrollSizeAttr: 'scrollWidth',
                offsetSizeAttr: 'offsetWidth',
                offsetAttr: 'left',
                overflowAttr: 'overflowX',
                dragOffset: 0,
                isOverflowing: true,
                forceVisible: false,
                track: { size: null, el: null, rect: null, isVisible: false },
                scrollbar: { size: null, el: null, rect: null, isVisible: false }
            },
            y: {
                scrollOffsetAttr: 'scrollTop',
                sizeAttr: 'height',
                scrollSizeAttr: 'scrollHeight',
                offsetSizeAttr: 'offsetHeight',
                offsetAttr: 'top',
                overflowAttr: 'overflowY',
                dragOffset: 0,
                isOverflowing: true,
                forceVisible: false,
                track: { size: null, el: null, rect: null, isVisible: false },
                scrollbar: { size: null, el: null, rect: null, isVisible: false }
            }
        };
        if (typeof this.el !== 'object' || !this.el.nodeName) {
            throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
        }
        this.onMouseMove = throttle(this._onMouseMove, 64);
        this.onWindowResize = debounce(this._onWindowResize, 64, { leading: true });
        this.onStopScrolling = debounce(this._onStopScrolling, this.stopScrollDelay);
        this.onMouseEntered = debounce(this._onMouseEntered, this.stopScrollDelay);
        this.init();
    }
    /**
     * Helper to fix browsers inconsistency on RTL:
     *  - Firefox inverts the scrollbar initial position
     *  - IE11 inverts both scrollbar position and scrolling offset
     * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
     */
    SimpleBarCore.getRtlHelpers = function () {
        if (SimpleBarCore.rtlHelpers) {
            return SimpleBarCore.rtlHelpers;
        }
        var dummyDiv = document.createElement('div');
        dummyDiv.innerHTML =
            '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var scrollbarDummyEl = dummyDiv.firstElementChild;
        var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
        if (!dummyChild)
            return null;
        document.body.appendChild(scrollbarDummyEl);
        scrollbarDummyEl.scrollLeft = 0;
        var dummyContainerOffset = SimpleBarCore.getOffset(scrollbarDummyEl);
        var dummyChildOffset = SimpleBarCore.getOffset(dummyChild);
        scrollbarDummyEl.scrollLeft = -999;
        var dummyChildOffsetAfterScroll = SimpleBarCore.getOffset(dummyChild);
        document.body.removeChild(scrollbarDummyEl);
        SimpleBarCore.rtlHelpers = {
            // determines if the scrolling is responding with negative values
            isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
            // determines if the origin scrollbar position is inverted or not (positioned on left or right)
            isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
        };
        return SimpleBarCore.rtlHelpers;
    };
    SimpleBarCore.prototype.getScrollbarWidth = function () {
        // Try/catch for FF 56 throwing on undefined computedStyles
        try {
            // Detect browsers supporting CSS scrollbar styling and do not calculate
            if ((this.contentWrapperEl &&
                getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar')
                    .display === 'none') ||
                'scrollbarWidth' in document.documentElement.style ||
                '-ms-overflow-style' in document.documentElement.style) {
                return 0;
            }
            else {
                return scrollbarWidth();
            }
        }
        catch (e) {
            return scrollbarWidth();
        }
    };
    SimpleBarCore.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        var elDocument = getElementDocument(el);
        var elWindow = getElementWindow(el);
        return {
            top: rect.top +
                (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
            left: rect.left +
                (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
        };
    };
    SimpleBarCore.prototype.init = function () {
        // We stop here on server-side
        if (canUseDOM$1) {
            this.initDOM();
            this.rtlHelpers = SimpleBarCore.getRtlHelpers();
            this.scrollbarWidth = this.getScrollbarWidth();
            this.recalculate();
            this.initListeners();
        }
    };
    SimpleBarCore.prototype.initDOM = function () {
        var _a, _b;
        // assume that element has his DOM already initiated
        this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
        this.contentWrapperEl =
            this.options.scrollableNode ||
                this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
        this.contentEl =
            this.options.contentNode ||
                this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
        this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
        this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
        this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
        this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
        this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
        this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
        this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
        this.axis.x.scrollbar.el =
            ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        this.axis.y.scrollbar.el =
            ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
        if (!this.options.autoHide) {
            addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
            addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
        }
    };
    SimpleBarCore.prototype.initListeners = function () {
        var _this = this;
        var _a;
        var elWindow = getElementWindow(this.el);
        // Event listeners
        this.el.addEventListener('mouseenter', this.onMouseEnter);
        this.el.addEventListener('pointerdown', this.onPointerEvent, true);
        this.el.addEventListener('mousemove', this.onMouseMove);
        this.el.addEventListener('mouseleave', this.onMouseLeave);
        (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', this.onScroll);
        // Browser zoom triggers a window resize
        elWindow.addEventListener('resize', this.onWindowResize);
        if (!this.contentEl)
            return;
        if (window.ResizeObserver) {
            // Hack for https://github.com/WICG/ResizeObserver/issues/38
            var resizeObserverStarted_1 = false;
            var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
            this.resizeObserver = new resizeObserver(function () {
                if (!resizeObserverStarted_1)
                    return;
                elWindow.requestAnimationFrame(function () {
                    _this.recalculate();
                });
            });
            this.resizeObserver.observe(this.el);
            this.resizeObserver.observe(this.contentEl);
            elWindow.requestAnimationFrame(function () {
                resizeObserverStarted_1 = true;
            });
        }
        // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.
        this.mutationObserver = new elWindow.MutationObserver(function () {
            elWindow.requestAnimationFrame(function () {
                _this.recalculate();
            });
        });
        this.mutationObserver.observe(this.contentEl, {
            childList: true,
            subtree: true,
            characterData: true
        });
    };
    SimpleBarCore.prototype.recalculate = function () {
        if (!this.heightAutoObserverEl ||
            !this.contentEl ||
            !this.contentWrapperEl ||
            !this.wrapperEl ||
            !this.placeholderEl)
            return;
        var elWindow = getElementWindow(this.el);
        this.elStyles = elWindow.getComputedStyle(this.el);
        this.isRtl = this.elStyles.direction === 'rtl';
        var contentElOffsetWidth = this.contentEl.offsetWidth;
        var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
        var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
        var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
        var elOverflowX = this.elStyles.overflowX;
        var elOverflowY = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
        this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var contentElScrollHeight = this.contentEl.scrollHeight;
        var contentElScrollWidth = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%';
        // Determine placeholder size
        this.placeholderEl.style.width = isWidthAuto
            ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px")
            : 'auto';
        this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
        var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing =
            contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
        this.axis.y.isOverflowing =
            contentElScrollHeight > contentWrapperElOffsetHeight;
        // Set isOverflowing to false if user explicitely set hidden overflow
        this.axis.x.isOverflowing =
            elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
        this.axis.y.isOverflowing =
            elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
        this.axis.x.forceVisible =
            this.options.forceVisible === 'x' || this.options.forceVisible === true;
        this.axis.y.forceVisible =
            this.options.forceVisible === 'y' || this.options.forceVisible === true;
        this.hideNativeScrollbar();
        // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)
        var offsetForXScrollbar = this.axis.x.isOverflowing
            ? this.scrollbarWidth
            : 0;
        var offsetForYScrollbar = this.axis.y.isOverflowing
            ? this.scrollbarWidth
            : 0;
        this.axis.x.isOverflowing =
            this.axis.x.isOverflowing &&
                contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
        this.axis.y.isOverflowing =
            this.axis.y.isOverflowing &&
                contentElScrollHeight >
                    contentWrapperElOffsetHeight - offsetForXScrollbar;
        this.axis.x.scrollbar.size = this.getScrollbarSize('x');
        this.axis.y.scrollbar.size = this.getScrollbarSize('y');
        if (this.axis.x.scrollbar.el)
            this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
        if (this.axis.y.scrollbar.el)
            this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
        this.positionScrollbar('x');
        this.positionScrollbar('y');
        this.toggleTrackVisibility('x');
        this.toggleTrackVisibility('y');
    };
    /**
     * Calculate scrollbar size
     */
    SimpleBarCore.prototype.getScrollbarSize = function (axis) {
        var _a, _b;
        if (axis === void 0) { axis = 'y'; }
        if (!this.axis[axis].isOverflowing || !this.contentEl) {
            return 0;
        }
        var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
        var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
        var scrollbarRatio = trackSize / contentSize;
        var scrollbarSize;
        // Calculate new height/position of drag handle.
        scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
        if (this.options.scrollbarMaxSize) {
            scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
        }
        return scrollbarSize;
    };
    SimpleBarCore.prototype.positionScrollbar = function (axis) {
        var _a, _b, _c;
        if (axis === void 0) { axis = 'y'; }
        var scrollbar = this.axis[axis].scrollbar;
        if (!this.axis[axis].isOverflowing ||
            !this.contentWrapperEl ||
            !scrollbar.el ||
            !this.elStyles) {
            return;
        }
        var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
        var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        scrollOffset =
            axis === 'x' &&
                this.isRtl &&
                ((_b = SimpleBarCore.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero)
                ? -scrollOffset
                : scrollOffset;
        if (axis === 'x' && this.isRtl) {
            scrollOffset = ((_c = SimpleBarCore.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative)
                ? scrollOffset
                : -scrollOffset;
        }
        var scrollPourcent = scrollOffset / (contentSize - hostSize);
        var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
        handleOffset =
            axis === 'x' && this.isRtl
                ? -handleOffset + (trackSize - scrollbar.size)
                : handleOffset;
        scrollbar.el.style.transform =
            axis === 'x'
                ? "translate3d(".concat(handleOffset, "px, 0, 0)")
                : "translate3d(0, ".concat(handleOffset, "px, 0)");
    };
    SimpleBarCore.prototype.toggleTrackVisibility = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        var track = this.axis[axis].track.el;
        var scrollbar = this.axis[axis].scrollbar.el;
        if (!track || !scrollbar || !this.contentWrapperEl)
            return;
        if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
            track.style.visibility = 'visible';
            this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
            this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
        }
        else {
            track.style.visibility = 'hidden';
            this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
            this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
        }
        // Even if forceVisible is enabled, scrollbar itself should be hidden
        if (this.axis[axis].isOverflowing) {
            scrollbar.style.display = 'block';
        }
        else {
            scrollbar.style.display = 'none';
        }
    };
    SimpleBarCore.prototype.showScrollbar = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
            addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
            this.axis[axis].scrollbar.isVisible = true;
        }
    };
    SimpleBarCore.prototype.hideScrollbar = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
            removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
            this.axis[axis].scrollbar.isVisible = false;
        }
    };
    SimpleBarCore.prototype.hideNativeScrollbar = function () {
        if (!this.offsetEl)
            return;
        this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-".concat(this.scrollbarWidth, "px")
                : '0px';
        this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
                ? "-".concat(this.scrollbarWidth, "px")
                : '0px';
    };
    SimpleBarCore.prototype.onMouseMoveForAxis = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        var currentAxis = this.axis[axis];
        if (!currentAxis.track.el || !currentAxis.scrollbar.el)
            return;
        currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
        currentAxis.scrollbar.rect =
            currentAxis.scrollbar.el.getBoundingClientRect();
        if (this.isWithinBounds(currentAxis.track.rect)) {
            this.showScrollbar(axis);
            addClasses(currentAxis.track.el, this.classNames.hover);
            if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
                addClasses(currentAxis.scrollbar.el, this.classNames.hover);
            }
            else {
                removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
            }
        }
        else {
            removeClasses(currentAxis.track.el, this.classNames.hover);
            if (this.options.autoHide) {
                this.hideScrollbar(axis);
            }
        }
    };
    SimpleBarCore.prototype.onMouseLeaveForAxis = function (axis) {
        if (axis === void 0) { axis = 'y'; }
        removeClasses(this.axis[axis].track.el, this.classNames.hover);
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
        if (this.options.autoHide) {
            this.hideScrollbar(axis);
        }
    };
    /**
     * on scrollbar handle drag movement starts
     */
    SimpleBarCore.prototype.onDragStart = function (e, axis) {
        var _a;
        if (axis === void 0) { axis = 'y'; }
        var elDocument = getElementDocument(this.el);
        var elWindow = getElementWindow(this.el);
        var scrollbar = this.axis[axis].scrollbar;
        // Measure how far the user's mouse is from the top of the scrollbar drag handle.
        var eventOffset = axis === 'y' ? e.pageY : e.pageX;
        this.axis[axis].dragOffset =
            eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);
        this.draggedAxis = axis;
        addClasses(this.el, this.classNames.dragging);
        elDocument.addEventListener('mousemove', this.drag, true);
        elDocument.addEventListener('mouseup', this.onEndDrag, true);
        if (this.removePreventClickId === null) {
            elDocument.addEventListener('click', this.preventClick, true);
            elDocument.addEventListener('dblclick', this.preventClick, true);
        }
        else {
            elWindow.clearTimeout(this.removePreventClickId);
            this.removePreventClickId = null;
        }
    };
    SimpleBarCore.prototype.onTrackClick = function (e, axis) {
        var _this = this;
        var _a, _b, _c, _d;
        if (axis === void 0) { axis = 'y'; }
        var currentAxis = this.axis[axis];
        if (!this.options.clickOnTrack ||
            !currentAxis.scrollbar.el ||
            !this.contentWrapperEl)
            return;
        // Preventing the event's default to trigger click underneath
        e.preventDefault();
        var elWindow = getElementWindow(this.el);
        this.axis[axis].scrollbar.rect =
            currentAxis.scrollbar.el.getBoundingClientRect();
        var scrollbar = this.axis[axis].scrollbar;
        var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
        var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : '0px', 10);
        var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        var t = axis === 'y'
            ? this.mouseY - scrollbarOffset
            : this.mouseX - scrollbarOffset;
        var dir = t < 0 ? -1 : 1;
        var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
        var speed = 40;
        var scrollTo = function () {
            if (!_this.contentWrapperEl)
                return;
            if (dir === -1) {
                if (scrolled > scrollSize) {
                    scrolled -= speed;
                    _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                    elWindow.requestAnimationFrame(scrollTo);
                }
            }
            else {
                if (scrolled < scrollSize) {
                    scrolled += speed;
                    _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                    elWindow.requestAnimationFrame(scrollTo);
                }
            }
        };
        scrollTo();
    };
    /**
     * Getter for content element
     */
    SimpleBarCore.prototype.getContentElement = function () {
        return this.contentEl;
    };
    /**
     * Getter for original scrolling element
     */
    SimpleBarCore.prototype.getScrollElement = function () {
        return this.contentWrapperEl;
    };
    SimpleBarCore.prototype.removeListeners = function () {
        var elWindow = getElementWindow(this.el);
        // Event listeners
        this.el.removeEventListener('mouseenter', this.onMouseEnter);
        this.el.removeEventListener('pointerdown', this.onPointerEvent, true);
        this.el.removeEventListener('mousemove', this.onMouseMove);
        this.el.removeEventListener('mouseleave', this.onMouseLeave);
        if (this.contentWrapperEl) {
            this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
        }
        elWindow.removeEventListener('resize', this.onWindowResize);
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        // Cancel all debounced functions
        this.onMouseMove.cancel();
        this.onWindowResize.cancel();
        this.onStopScrolling.cancel();
        this.onMouseEntered.cancel();
    };
    /**
     * Remove all listeners from DOM nodes
     */
    SimpleBarCore.prototype.unMount = function () {
        this.removeListeners();
    };
    /**
     * Check if mouse is within bounds
     */
    SimpleBarCore.prototype.isWithinBounds = function (bbox) {
        return (this.mouseX >= bbox.left &&
            this.mouseX <= bbox.left + bbox.width &&
            this.mouseY >= bbox.top &&
            this.mouseY <= bbox.top + bbox.height);
    };
    /**
     * Find element children matches query
     */
    SimpleBarCore.prototype.findChild = function (el, query) {
        var matches = el.matches ||
            el.webkitMatchesSelector ||
            el.mozMatchesSelector ||
            el.msMatchesSelector;
        return Array.prototype.filter.call(el.children, function (child) {
            return matches.call(child, query);
        })[0];
    };
    SimpleBarCore.rtlHelpers = null;
    SimpleBarCore.defaultOptions = {
        forceVisible: false,
        clickOnTrack: true,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: 'scrollable content',
        classNames: {
            contentEl: 'simplebar-content',
            contentWrapper: 'simplebar-content-wrapper',
            offset: 'simplebar-offset',
            mask: 'simplebar-mask',
            wrapper: 'simplebar-wrapper',
            placeholder: 'simplebar-placeholder',
            scrollbar: 'simplebar-scrollbar',
            track: 'simplebar-track',
            heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
            heightAutoObserverEl: 'simplebar-height-auto-observer',
            visible: 'simplebar-visible',
            horizontal: 'simplebar-horizontal',
            vertical: 'simplebar-vertical',
            hover: 'simplebar-hover',
            dragging: 'simplebar-dragging',
            scrolling: 'simplebar-scrolling',
            scrollable: 'simplebar-scrollable',
            mouseEntered: 'simplebar-mouse-entered'
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: true
    };
    /**
     * Static functions
     */
    SimpleBarCore.getOptions = getOptions;
    SimpleBarCore.helpers = helpers;
    return SimpleBarCore;
}());/**
 * simplebar-react - v3.2.4
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */


/******************************************************************************
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

var SimpleBar = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.scrollableNodeProps, scrollableNodeProps = _b === void 0 ? {} : _b, otherProps = __rest(_a, ["children", "scrollableNodeProps"]);
    var elRef = React.useRef();
    var scrollableNodeRef = React.useRef();
    var contentNodeRef = React.useRef();
    var options = {};
    var rest = {};
    Object.keys(otherProps).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(SimpleBarCore.defaultOptions, key)) {
            options[key] = otherProps[key];
        }
        else {
            rest[key] = otherProps[key];
        }
    });
    var classNames = __assign(__assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
    var scrollableNodeFullProps = __assign(__assign({}, scrollableNodeProps), { className: "".concat(classNames.contentWrapper).concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : ''), tabIndex: 0, role: 'region', 'aria-label': options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel });
    React.useEffect(function () {
        var instance;
        scrollableNodeRef.current = scrollableNodeFullProps.ref
            ? scrollableNodeFullProps.ref.current
            : scrollableNodeRef.current;
        if (elRef.current) {
            instance = new SimpleBarCore(elRef.current, __assign(__assign(__assign({}, options), (scrollableNodeRef.current && {
                scrollableNode: scrollableNodeRef.current
            })), (contentNodeRef.current && {
                contentNode: contentNodeRef.current
            })));
            if (typeof ref === 'function') {
                ref(instance);
            }
            else if (ref) {
                ref.current = instance;
            }
        }
        return function () {
            instance === null || instance === void 0 ? void 0 : instance.unMount();
            instance = null;
            if (typeof ref === 'function') {
                ref(null);
            }
        };
    }, []);
    return (React.createElement("div", __assign({ "data-simplebar": "init", ref: elRef }, rest),
        React.createElement("div", { className: classNames.wrapper },
            React.createElement("div", { className: classNames.heightAutoObserverWrapperEl },
                React.createElement("div", { className: classNames.heightAutoObserverEl })),
            React.createElement("div", { className: classNames.mask },
                React.createElement("div", { className: classNames.offset }, typeof children === 'function' ? (children({
                    scrollableNodeRef: scrollableNodeRef,
                    scrollableNodeProps: __assign(__assign({}, scrollableNodeFullProps), { ref: scrollableNodeRef }),
                    contentNodeRef: contentNodeRef,
                    contentNodeProps: {
                        className: classNames.contentEl,
                        ref: contentNodeRef
                    }
                })) : (React.createElement("div", __assign({}, scrollableNodeFullProps),
                    React.createElement("div", { className: classNames.contentEl }, children))))),
            React.createElement("div", { className: classNames.placeholder })),
        React.createElement("div", { className: "".concat(classNames.track, " simplebar-horizontal") },
            React.createElement("div", { className: classNames.scrollbar })),
        React.createElement("div", { className: "".concat(classNames.track, " simplebar-vertical") },
            React.createElement("div", { className: classNames.scrollbar }))));
});
SimpleBar.displayName = 'SimpleBar';var YEARS$1 = new Array(200).fill(0);
for (var i$5 = 0; i$5 < 200; i$5 += 1) {
    YEARS$1[i$5] = 1900 + i$5;
}
var PrivateYearSelect = function (_a) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var selectYear = _a.selectYear, activeYear = _a.activeYear, availableDate = _a.availableDate, onSelect = _a.onSelect;
    var containerRef = useRef(null);
    var simpleBarRef = useRef(null);
    // Effect ----------------------------------------------------------------------------------------------------------
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
    // Render ----------------------------------------------------------------------------------------------------------
    var today = dayjs().startOf('date');
    return (React__default.createElement("div", { ref: containerRef, className: 'PrivateYearSelect' },
        React__default.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
            React__default.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS$1.map(function (y) {
                var isToday = y === today.year();
                var isActive = y === activeYear;
                var isSelected = y === selectYear;
                var disabled = (!!availableDate[0] && y < availableDate[0].year) || (!!availableDate[1] && y > availableDate[1].year);
                return (React__default.createElement(Grid, { key: y, item: true, xs: 3 },
                    React__default.createElement(PrivateToggleButton, { className: "private-year-select-value-".concat(y), fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: function () { return onSelect(y); } }, y)));
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
    return (React__default.createElement("div", { className: 'PrivateMonthSelect' },
        React__default.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS$1.map(function (m) {
            var isToday = today.year() === year && m === today.month();
            var isActive = m === activeMonth;
            var isSelected = selectYear === year && m === selectMonth;
            var ym = year * 100 + (m + 1);
            var disabled = (!!availableDate[0] && ym < availableDate[0].month) || (!!availableDate[1] && ym > availableDate[1].month);
            return (React__default.createElement(Grid, { key: m, item: true, xs: 4 },
                React__default.createElement(PrivateToggleButton, { fullWidth: true, selected: isSelected, activated: isActive, outlined: isToday, disabled: disabled, onClick: function () { return onSelect(m); } },
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
var PrivateTimeSelect = React__default.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var list = _a.list, listInterval = _a.listInterval, unit = _a.unit, value = _a.value, cols = _a.cols, disableList = _a.disableList, onSelect = _a.onSelect;
    var containerRef = useRef(null);
    var simpleBarRef = useRef(null);
    var scrollTimerRef = useRef();
    // Function - scrollToValue ----------------------------------------------------------------------------------------
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
    // Effect ----------------------------------------------------------------------------------------------------------
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
    // LayoutEffect ----------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { ref: containerRef, className: 'PrivateTimeSelect' },
            React__default.createElement(SimpleBar, { scrollableNodeProps: { ref: simpleBarRef }, style: { height: '100%' } },
                React__default.createElement(Grid, { container: true }, list
                    .filter(function (v) { return (listInterval ? v % listInterval === 0 : true); })
                    .map(function (v) {
                    var isSelected = v === value;
                    var disabled = !!disableList && disableList.includes(v);
                    return (React__default.createElement(Grid, { item: true, key: v, xs: 12 / (cols || 1) },
                        React__default.createElement(PrivateToggleButton, { className: "private-time-select-value-".concat(v), fullWidth: true, disabled: disabled, selected: isSelected, onClick: function () { return onSelect && onSelect(v); } },
                            v,
                            unit)));
                }))))));
});
PrivateTimeSelect.displayName = 'PrivateTimeSelect';
PrivateTimeSelect.defaultProps = PrivateTimeSelectDefaultProps;var css_248z$8 = ".PrivateStaticDatePicker.time {\n  height: 400px;\n}\n.PrivateStaticDatePicker .MuiPickersCalendarHeader-root {\n  display: none;\n}\n.PrivateStaticDatePicker .month-title-container {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button {\n  font-size: 15px;\n  padding-left: 8px;\n  padding-right: 0;\n  min-width: 0;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button:not(.active) {\n  color: unset;\n}\n.PrivateStaticDatePicker .action-buttons {\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n}\n.PrivateStaticDatePicker .action-buttons button {\n  min-width: 0;\n  color: inherit;\n}\n.PrivateStaticDatePicker .action-buttons button:not(:first-child) {\n  margin-left: 5px;\n}\n.PrivateStaticDatePicker .action-buttons button.disabled {\n  color: rgba(0, 0, 0, 0.5);\n}\n.PrivateStaticDatePicker .time {\n  border-left: 2px solid #bfbfbf;\n}\n.PrivateStaticDatePicker .time .time-container {\n  height: 100%;\n}\n.PrivateStaticDatePicker .time .time-container .time-title {\n  text-align: center;\n  padding: 22px 0;\n  font-size: 15px;\n}\n.PrivateStaticDatePicker .time .time-container .time-select-wrap {\n  flex: 1;\n  border-top: 1px solid #efefef;\n}\n.PrivateStaticDatePicker.time .time .time-container .time-select-wrap > div > div:not(:first-child) {\n  border-left: 1px solid #efefef;\n}";
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
var PrivateStaticDatePicker = React__default.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var value = _a.value, initAvailableDate = _a.availableDate, defaultCalendarMonth = _a.defaultCalendarMonth, type = _a.type, time = _a.time, initHours = _a.hours, initMinutes = _a.minutes, initSeconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange, onMonthChange = _a.onMonthChange, onClose = _a.onClose, props = __rest$4(_a, ["value", "availableDate", "defaultCalendarMonth", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    var hourSelectRef = useRef(null);
    var minuteSelectRef = useRef(null);
    var secondSelectRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var _b = useState(function () {
        if (value)
            return value;
        else if (defaultCalendarMonth)
            return defaultCalendarMonth;
        else
            return dayjs();
    }), month = _b[0], setMonth = _b[1];
    var _c = useState(null), activeMonthValue = _c[0], setActiveMonthValue = _c[1];
    var _d = useState(false), yearSelectOpen = _d[0], setYearSelectOpen = _d[1];
    var _e = useState(false), monthSelectOpen = _e[0], setMonthSelectOpen = _e[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var hours = useMemo(function () { return initHours || DEFAULT_HOURS$1; }, [initHours]);
    var minutes = useMemo(function () { return initMinutes || DEFAULT_MINUTES$1; }, [initMinutes]);
    var seconds = useMemo(function () { return initSeconds || DEFAULT_SECONDS$1; }, [initSeconds]);
    var availableDate = useMemo(function () {
        return initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [initAvailableDate, minDate, maxDate, disablePast, disableFuture]);
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
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = useRef();
    var rightArrowOnClickRef = useRef();
    var LeftArrowButton = useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$7({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$7({}, props));
        };
        return ArrowButton;
    })[0];
    // Function --------------------------------------------------------------------------------------------------------
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
    // Event Handler ---------------------------------------------------------------------------------------------------
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
        return React__default.createElement(PickersDay, __assign$7({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
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
    // Render - Function -----------------------------------------------------------------------------------------------
    var getActionButton = useCallback(function (date, label) {
        var disabled = !isDateAvailable(date, availableDate, 'day');
        return (React__default.createElement(Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: function () {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Grid, { container: true, className: classNames$1('PrivateStaticDatePicker', type) },
        type !== 'time' && (React__default.createElement(Grid, { item: true },
            React__default.createElement(Grid, { container: true, direction: 'column' },
                React__default.createElement(Grid, { item: true, sx: { p: 2, width: '100%' } },
                    React__default.createElement(Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React__default.createElement(Grid, { item: true, flex: 1, className: 'month-title-container' },
                            React__default.createElement("div", { className: 'month-title-wrap' },
                                React__default.createElement("div", { className: 'month-title' },
                                    React__default.createElement(Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (yearSelectOpen) {
                                                setYearSelectOpen(false);
                                            }
                                            else {
                                                setYearSelectOpen(true);
                                                setMonthSelectOpen(false);
                                            }
                                        } },
                                        month.format('YYYY년'),
                                        React__default.createElement(Icon$1, null, yearSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))),
                                React__default.createElement("div", { className: 'month-title' },
                                    React__default.createElement(Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (monthSelectOpen) {
                                                setMonthSelectOpen(false);
                                            }
                                            else {
                                                setMonthSelectOpen(true);
                                                setYearSelectOpen(false);
                                            }
                                        } },
                                        month.format('M월'),
                                        React__default.createElement(Icon$1, null, monthSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))))),
                        !yearSelectOpen && !monthSelectOpen && (React__default.createElement(Grid, { item: true, style: { textAlign: 'right' } },
                            React__default.createElement(IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React__default.createElement(Icon$1, null, "keyboard_arrow_left")),
                            React__default.createElement(IconButton, { onClick: nextMonth },
                                React__default.createElement(Icon$1, null, "keyboard_arrow_right")))))),
                React__default.createElement(Grid, { item: true, style: { position: 'relative' } },
                    React__default.createElement(StaticDatePicker, __assign$7({}, props, { value: activeMonthValue, defaultCalendarMonth: month, slots: {
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
                    yearSelectOpen && (React__default.createElement(PrivateYearSelect, { selectYear: value == null ? null : value.year(), activeYear: month.year(), availableDate: availableDate, onSelect: handleYearSelect })),
                    monthSelectOpen && (React__default.createElement(PrivateMonthSelect, { year: month.year(), selectYear: value == null ? null : value.year(), selectMonth: value == null ? null : value.month(), activeMonth: month.month(), availableDate: availableDate, onSelect: handleMonthSelect }))),
                React__default.createElement(Grid, { item: true, className: 'action-buttons' },
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
        time && (React__default.createElement(Grid, { item: true, className: 'time' },
            React__default.createElement(Grid, { container: true, direction: 'column', className: 'time-container' },
                React__default.createElement(Grid, { item: true, className: 'time-title' },
                    time === 'hour' && (value ? value.format('HH시') : '00시'),
                    time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분'),
                    time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')),
                React__default.createElement(Grid, { item: true, className: 'time-select-wrap' },
                    React__default.createElement(Grid, { container: true, style: { height: '100%' } },
                        React__default.createElement(Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React__default.createElement(PrivateTimeSelect, { ref: hourSelectRef, value: value && value.hour(), unit: '\uC2DC', list: hours, disableList: disableHours, cols: type === 'time' ? 3 : 1, onSelect: function (newValue) {
                                    onChange('hour', value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue));
                                } })),
                        (time === 'minute' || time === 'second') && (React__default.createElement(Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React__default.createElement(PrivateTimeSelect, { ref: minuteSelectRef, value: value && value.minute(), unit: '\uBD84', list: minutes, disableList: disableMinutes, cols: type === 'time' ? 3 : 1, listInterval: minuteInterval, onSelect: function (newValue) {
                                    onChange('minute', value ? value.set('minute', newValue) : dayjs().startOf('date').set('minute', newValue));
                                } }))),
                        time === 'second' && (React__default.createElement(Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React__default.createElement(PrivateTimeSelect, { ref: secondSelectRef, value: value && value.second(), unit: '\uCD08', list: seconds, disableList: disableSeconds, cols: type === 'time' ? 3 : 1, listInterval: secondInterval, onSelect: function (newValue) {
                                    onChange('second', value ? value.set('second', newValue) : dayjs().startOf('date').set('second', newValue));
                                } }))))),
                onClose && (React__default.createElement(Grid, { item: true, className: 'action-buttons' },
                    React__default.createElement(Button, { variant: 'text', onClick: onClose }, "\uB2EB\uAE30"))))))));
});
PrivateStaticDatePicker.displayName = 'PrivateStaticDatePicker';
PrivateStaticDatePicker.defaultProps = PrivateStaticDatePickerDefaultProps;var PrivateStyledTooltip = styled(function (_a) {
    var className = _a.className, props = __rest$4(_a, ["className"]);
    return (React__default.createElement(Tooltip, __assign$7({}, props, { classes: { popper: className } })));
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
});var css_248z$7 = ".PrivateDatePicker .input-text-field.align-left .MuiInputBase-input {\n  text-align: left;\n}\n.PrivateDatePicker .input-text-field.align-center .MuiInputBase-input {\n  text-align: center;\n}\n.PrivateDatePicker .input-text-field.align-right .MuiInputBase-input {\n  text-align: right;\n}";
styleInject(css_248z$7);var PrivateDatePicker = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, type = _a.type, time = _a.time, initValue = _a.value, initData = _a.data, initLabel = _a.label, labelIcon = _a.labelIcon, initFormat = _a.format, initFormValueFormat = _a.formValueFormat, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, width = _a.width, initError = _a.error, helperText = _a.helperText, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, exceptValue = _a.exceptValue, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, readOnlyInput = _a.readOnlyInput, hidden = _a.hidden, onChange = _a.onChange, onValidate = _a.onValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, otherProps = __rest$4(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "readOnlyInput", "hidden", "onChange", "onValidate", "className", "style", "sx"]);
    var id = useId();
    // Ref -------------------------------------------------------------------------------------------------------------
    var privateStaticDatePickerRef = useRef(null);
    var textFieldInputRef = useRef();
    var closeTimeoutRef = useRef();
    var mouseDownTimeRef = useRef();
    var datePickerErrorRef = useRef(null);
    var openValueRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // State - open ----------------------------------------------------------------------------------------------------
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useState(null), timeError = _e[0], setTimeError = _e[1];
    var _f = useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = useAutoUpdateState$1(initDisabled), disabled = _g[0], setDisabled = _g[1];
    var _h = useAutoUpdateState$1(initData), data = _h[0], setData = _h[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var label = useMemo(function () {
        if (labelIcon) {
            return React__default.createElement(IconText, { icon: labelIcon }, initLabel);
        }
        else {
            return initLabel;
        }
    }, [initLabel, labelIcon]);
    var format = useMemo(function () {
        if (initFormat) {
            return initFormat;
        }
        else {
            return getDateTimeFormat(type, time);
        }
    }, [initFormat, time, type]);
    var formValueFormat = useMemo(function () {
        if (initFormValueFormat) {
            return initFormValueFormat;
        }
        else {
            return getDateTimeFormValueFormat(type, time);
        }
    }, [initFormValueFormat, time, type]);
    var availableDate = useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [disableFuture, disablePast, maxDate, minDate]);
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (width != null) {
            return __assign$7(__assign$7({}, initStyle), { width: width });
        }
        else {
            return initStyle;
        }
    }, [initStyle, width]))[0];
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return value;
    }, []);
    // State - value ---------------------------------------------------------------------------------------------------
    var _j = useAutoUpdateState$1(initValue || null, getFinalValue), value = _j[0], setValue = _j[1];
    var _k = useState(null), inputValue = _k[0], setInputValue = _k[1];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    useEffect(function () {
        setInputValue(value);
    }, [value]);
    useFirstSkipEffect$1(function () {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    useFirstSkipEffect$1(function () {
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
    useEffect(function () {
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var wrapStyle = useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setErrorHelperText(helperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
            var lastData_1 = data;
            var lastDisabled_1 = !!disabled;
            var commands = {
                getType: function () { return 'default'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue || null); },
                reset: function () {
                    lastValue_1 = getFinalValue(initValue || null);
                    setValue(lastValue_1);
                },
                getValue: function () { return lastValue_1; },
                setValue: function (value) {
                    lastValue_1 = getFinalValue(value);
                    setValue(lastValue_1);
                },
                getData: function () { return lastData_1; },
                setData: function (data) {
                    lastData_1 = data;
                    setData(data);
                },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return lastDisabled_1; },
                setDisabled: function (disabled) {
                    lastDisabled_1 = disabled;
                    setDisabled(disabled);
                },
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(value); },
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
        name,
        initValue,
        value,
        getFinalValue,
        exceptValue,
        disabled,
        focus,
        validate,
        formValueFormat,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        data,
        setData,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (unit, newValue, keyboardInputValue) {
        var updateValue = true;
        if (notEmpty(keyboardInputValue)) {
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
            setValue(finalValue);
            nextTick(function () {
                onValueChangeByUser(name, finalValue);
                if (runOnRequestSearchSubmit_1) {
                    onRequestSearchSubmit(name, finalValue);
                }
            });
        }
        setInputValue(finalValue);
    }, [type, time, setValue, availableDate, open, onValueChangeByUser, name, onRequestSearchSubmit]);
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var slotProps = useMemo(function () {
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
            inputProps.className = classNames$1(inputProps.className, 'Mui-disabled');
        }
        var muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React__default.createElement(React__default.Fragment, null,
                icon && (React__default.createElement(InputAdornment, { position: 'start' },
                    React__default.createElement(FormIcon, { fontSize: 'small' }, icon))),
                startAdornment && React__default.createElement(InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React__default.createElement(React__default.Fragment, null, endAdornment && React__default.createElement(InputAdornment, { position: 'end' }, endAdornment)));
        }
        return {
            textField: {
                className: classNames$1('input-text-field', "align-".concat(align)),
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React__default.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React__default.createElement("div", { className: classNames$1(className, 'PrivateDatePicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React__default.createElement(PrivateStyledTooltip, { open: disabled || readOnly ? false : open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && errorHelperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React__default.createElement(PrivateStaticDatePicker, __assign$7({}, otherProps, { ref: privateStaticDatePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, onChange: handleChange, onAccept: function () { return !time && setOpen(false); }, onClose: function () { return setOpen(false); } })) },
                    React__default.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React__default.createElement(DesktopDatePicker, __assign$7({ value: inputValue, label: label, open: false, format: format, disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: function () { return setOpen(false); }, onError: function (reason) { return (datePickerErrorRef.current = reason); }, onChange: function (newValue) { return handleChange('date', newValue); }, slotProps: slotProps }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React__default.createElement(FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PrivateDatePicker.displayName = 'PrivateDatePicker';
PrivateDatePicker.defaultProps = PrivateDatePickerDefaultProps;var PrivateDateTimePickerDefaultProps = {
    showDaysOutsideCurrentMonth: true,
    align: 'center',
    value: null,
};var css_248z$6 = ".PrivateDateTimePicker .input-text-field.align-left .MuiInputBase-input {\n  text-align: left;\n}\n.PrivateDateTimePicker .input-text-field.align-center .MuiInputBase-input {\n  text-align: center;\n}\n.PrivateDateTimePicker .input-text-field.align-right .MuiInputBase-input {\n  text-align: right;\n}";
styleInject(css_248z$6);var PrivateStaticDateTimePickerDefaultProps = {};var css_248z$5 = ".PrivateStaticDateTimePicker.time {\n  height: 400px;\n}\n.PrivateStaticDateTimePicker .MuiPickersCalendarHeader-root {\n  display: none;\n}\n.PrivateStaticDateTimePicker .month-title-container {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n}\n.PrivateStaticDateTimePicker .month-title-container .month-title-wrap {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button {\n  font-size: 15px;\n  padding-left: 8px;\n  padding-right: 0;\n  min-width: 0;\n}\n.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button:not(.active) {\n  color: unset;\n}\n.PrivateStaticDateTimePicker .action-buttons {\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n}\n.PrivateStaticDateTimePicker .action-buttons button {\n  min-width: 0;\n  color: inherit;\n}\n.PrivateStaticDateTimePicker .action-buttons button:not(:first-child) {\n  margin-left: 5px;\n}\n.PrivateStaticDateTimePicker .action-buttons button.disabled {\n  color: rgba(0, 0, 0, 0.5);\n}\n.PrivateStaticDateTimePicker .time {\n  border-left: 2px solid #bfbfbf;\n}\n.PrivateStaticDateTimePicker .time .time-container {\n  height: 100%;\n}\n.PrivateStaticDateTimePicker .time .time-container .time-title {\n  text-align: center;\n  padding: 22px 0;\n  font-size: 15px;\n}\n.PrivateStaticDateTimePicker .time .time-container .time-select-wrap {\n  flex: 1;\n  border-top: 1px solid #efefef;\n}\n.PrivateStaticDateTimePicker.time .time .time-container .time-select-wrap > div > div:not(:first-child) {\n  border-left: 1px solid #efefef;\n}";
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
var PrivateStaticDateTimePicker = React__default.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var value = _a.value, initAvailableDate = _a.availableDate, defaultCalendarMonth = _a.defaultCalendarMonth, type = _a.type, time = _a.time, initHours = _a.hours, initMinutes = _a.minutes, initSeconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange, onMonthChange = _a.onMonthChange, onClose = _a.onClose, props = __rest$4(_a, ["value", "availableDate", "defaultCalendarMonth", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
    var hourSelectRef = useRef(null);
    var minuteSelectRef = useRef(null);
    var secondSelectRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var _b = useState(function () {
        if (value)
            return value;
        else if (defaultCalendarMonth)
            return defaultCalendarMonth;
        else
            return dayjs();
    }), month = _b[0], setMonth = _b[1];
    var _c = useState(null), activeMonthValue = _c[0], setActiveMonthValue = _c[1];
    var _d = useState(false), yearSelectOpen = _d[0], setYearSelectOpen = _d[1];
    var _e = useState(false), monthSelectOpen = _e[0], setMonthSelectOpen = _e[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var hours = useMemo(function () { return initHours || DEFAULT_HOURS; }, [initHours]);
    var minutes = useMemo(function () { return initMinutes || DEFAULT_MINUTES; }, [initMinutes]);
    var seconds = useMemo(function () { return initSeconds || DEFAULT_SECONDS; }, [initSeconds]);
    var availableDate = useMemo(function () {
        return initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [initAvailableDate, minDate, maxDate, disablePast, disableFuture]);
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
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (!yearSelectOpen) {
            setActiveMonthValue(null);
        }
    }, [yearSelectOpen]);
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = useRef();
    var rightArrowOnClickRef = useRef();
    var LeftArrowButton = useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$7({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$7({}, props));
        };
        return ArrowButton;
    })[0];
    // Function --------------------------------------------------------------------------------------------------------
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
    // Event Handler ---------------------------------------------------------------------------------------------------
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
        return React__default.createElement(PickersDay, __assign$7({}, props, { selected: props.day.isSame(value, 'date') }));
    }, [value]);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
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
    // Render - Function -----------------------------------------------------------------------------------------------
    var getActionButton = useCallback(function (date, label) {
        var disabled = !isDateAvailable(date, availableDate, 'day');
        return (React__default.createElement(Button, { variant: 'text', className: disabled ? 'disabled' : undefined, disabled: disabled, onClick: function () {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Grid, { container: true, className: classNames$1('PrivateStaticDateTimePicker', type) },
        type !== 'time' && (React__default.createElement(Grid, { item: true },
            React__default.createElement(Grid, { container: true, direction: 'column' },
                React__default.createElement(Grid, { item: true, sx: { p: 2, width: '100%' } },
                    React__default.createElement(Grid, { container: true, className: 'month-change-arrow-wrap' },
                        React__default.createElement(Grid, { item: true, flex: 1, className: 'month-title-container' },
                            React__default.createElement("div", { className: 'month-title-wrap' },
                                React__default.createElement("div", { className: 'month-title' },
                                    React__default.createElement(Button, { variant: 'text', className: yearSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (yearSelectOpen) {
                                                setYearSelectOpen(false);
                                            }
                                            else {
                                                setYearSelectOpen(true);
                                                setMonthSelectOpen(false);
                                            }
                                        } },
                                        month.format('YYYY년'),
                                        React__default.createElement(Icon$1, null, yearSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))),
                                React__default.createElement("div", { className: 'month-title' },
                                    React__default.createElement(Button, { variant: 'text', className: monthSelectOpen ? 'active' : undefined, onClick: function () {
                                            if (monthSelectOpen) {
                                                setMonthSelectOpen(false);
                                            }
                                            else {
                                                setMonthSelectOpen(true);
                                                setYearSelectOpen(false);
                                            }
                                        } },
                                        month.format('M월'),
                                        React__default.createElement(Icon$1, null, monthSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'))))),
                        !yearSelectOpen && !monthSelectOpen && (React__default.createElement(Grid, { item: true, style: { textAlign: 'right' } },
                            React__default.createElement(IconButton, { onClick: previousMonth, sx: { mr: 1 } },
                                React__default.createElement(Icon$1, null, "keyboard_arrow_left")),
                            React__default.createElement(IconButton, { onClick: nextMonth },
                                React__default.createElement(Icon$1, null, "keyboard_arrow_right")))))),
                React__default.createElement(Grid, { item: true, style: { position: 'relative' } },
                    React__default.createElement(StaticDateTimePicker, __assign$7({}, props, { value: activeMonthValue, defaultCalendarMonth: month, slots: {
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
                    yearSelectOpen && (React__default.createElement(PrivateYearSelect, { selectYear: value == null ? null : value.year(), activeYear: month.year(), availableDate: availableDate, onSelect: handleYearSelect })),
                    monthSelectOpen && (React__default.createElement(PrivateMonthSelect, { year: month.year(), selectYear: value == null ? null : value.year(), selectMonth: value == null ? null : value.month(), activeMonth: month.month(), availableDate: availableDate, onSelect: handleMonthSelect }))),
                React__default.createElement(Grid, { item: true, className: 'action-buttons' },
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
        time && (React__default.createElement(Grid, { item: true, className: 'time' },
            React__default.createElement(Grid, { container: true, direction: 'column', className: 'time-container' },
                React__default.createElement(Grid, { item: true, className: 'time-title' },
                    time === 'hour' && (value ? value.format('HH시') : '00시'),
                    time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분'),
                    time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')),
                React__default.createElement(Grid, { item: true, className: 'time-select-wrap' },
                    React__default.createElement(Grid, { container: true, style: { height: '100%' } },
                        React__default.createElement(Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React__default.createElement(PrivateTimeSelect, { ref: hourSelectRef, value: value && value.hour(), unit: '\uC2DC', list: hours, disableList: disableHours, cols: type === 'time' ? 3 : 1, onSelect: function (newValue) {
                                    onChange('hour', value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue));
                                } })),
                        (time === 'minute' || time === 'second') && (React__default.createElement(Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React__default.createElement(PrivateTimeSelect, { ref: minuteSelectRef, value: value && value.minute(), unit: '\uBD84', list: minutes, disableList: disableMinutes, cols: type === 'time' ? 3 : 1, listInterval: minuteInterval, onSelect: function (newValue) {
                                    onChange('minute', value ? value.set('minute', newValue) : dayjs().startOf('date').set('minute', newValue));
                                } }))),
                        time === 'second' && (React__default.createElement(Grid, { item: true, style: { position: 'relative', width: type === 'time' ? 240 : 80 } },
                            React__default.createElement(PrivateTimeSelect, { ref: secondSelectRef, value: value && value.second(), unit: '\uCD08', list: seconds, disableList: disableSeconds, cols: type === 'time' ? 3 : 1, listInterval: secondInterval, onSelect: function (newValue) {
                                    onChange('second', value ? value.set('second', newValue) : dayjs().startOf('date').set('second', newValue));
                                } }))))),
                onClose && (React__default.createElement(Grid, { item: true, className: 'action-buttons' },
                    React__default.createElement(Button, { variant: 'text', onClick: onClose }, "\uB2EB\uAE30"))))))));
});
PrivateStaticDateTimePicker.displayName = 'PrivateStaticDateTimePicker';
PrivateStaticDateTimePicker.defaultProps = PrivateStaticDateTimePickerDefaultProps;var PrivateDateTimePicker = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, type = _a.type, time = _a.time, initValue = _a.value, initData = _a.data, initLabel = _a.label, labelIcon = _a.labelIcon, initFormat = _a.format, initFormValueFormat = _a.formValueFormat, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, width = _a.width, initError = _a.error, helperText = _a.helperText, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, exceptValue = _a.exceptValue, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, readOnlyInput = _a.readOnlyInput, hidden = _a.hidden, onChange = _a.onChange, onValidate = _a.onValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, otherProps = __rest$4(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "readOnlyInput", "hidden", "onChange", "onValidate", "className", "style", "sx"]);
    var id = useId();
    // Ref -------------------------------------------------------------------------------------------------------------
    var privateStaticDateTimePickerRef = useRef(null);
    var textFieldInputRef = useRef();
    var closeTimeoutRef = useRef();
    var mouseDownTimeRef = useRef();
    var datePickerErrorRef = useRef(null);
    var openValueRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // State - open ----------------------------------------------------------------------------------------------------
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useState(null), timeError = _e[0], setTimeError = _e[1];
    var _f = useState(), errorHelperText = _f[0], setErrorHelperText = _f[1];
    var _g = useAutoUpdateState$1(initDisabled), disabled = _g[0], setDisabled = _g[1];
    var _h = useAutoUpdateState$1(initData), data = _h[0], setData = _h[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var label = useMemo(function () {
        if (labelIcon) {
            return React__default.createElement(IconText, { icon: labelIcon }, initLabel);
        }
        else {
            return initLabel;
        }
    }, [initLabel, labelIcon]);
    var format = useMemo(function () {
        if (initFormat) {
            return initFormat;
        }
        else {
            return getDateTimeFormat(type, time);
        }
    }, [initFormat, time, type]);
    var formValueFormat = useMemo(function () {
        if (initFormValueFormat) {
            return initFormValueFormat;
        }
        else {
            return getDateTimeFormValueFormat(type, time);
        }
    }, [initFormValueFormat, time, type]);
    var availableDate = useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [disableFuture, disablePast, maxDate, minDate]);
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (width != null) {
            return __assign$7(__assign$7({}, initStyle), { width: width });
        }
        else {
            return initStyle;
        }
    }, [initStyle, width]))[0];
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return value;
    }, []);
    // State - value ---------------------------------------------------------------------------------------------------
    var _j = useAutoUpdateState$1(initValue || null, getFinalValue), value = _j[0], setValue = _j[1];
    var _k = useState(null), inputValue = _k[0], setInputValue = _k[1];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    useEffect(function () {
        setInputValue(value);
    }, [value]);
    useFirstSkipEffect$1(function () {
        if (error && !timeError)
            validate(value);
    }, [timeError]);
    useFirstSkipEffect$1(function () {
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
    useEffect(function () {
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var wrapStyle = useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
            var lastData_1 = data;
            var lastDisabled_1 = !!disabled;
            var commands = {
                getType: function () { return 'default'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue || null); },
                reset: function () {
                    lastValue_1 = getFinalValue(initValue || null);
                    setValue(lastValue_1);
                },
                getValue: function () { return lastValue_1; },
                setValue: function (value) {
                    lastValue_1 = getFinalValue(value);
                    setValue(lastValue_1);
                },
                getData: function () { return lastData_1; },
                setData: function (data) {
                    lastData_1 = data;
                    setData(data);
                },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return lastDisabled_1; },
                setDisabled: function (disabled) {
                    lastDisabled_1 = disabled;
                    setDisabled(disabled);
                },
                focus: focus,
                focusValidate: focus,
                validate: function () { return validate(value); },
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
        name,
        initValue,
        value,
        getFinalValue,
        exceptValue,
        disabled,
        focus,
        validate,
        formValueFormat,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        data,
        setData,
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (unit, newValue, keyboardInputValue) {
        var _a, _b, _c;
        var updateValue = true;
        if (notEmpty(keyboardInputValue)) {
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
            setValue(finalValue);
            nextTick(function () {
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var slotProps = useMemo(function () {
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
            inputProps.className = classNames$1(inputProps.className, 'Mui-disabled');
        }
        var muiInputProps = { endAdornment: undefined };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React__default.createElement(React__default.Fragment, null,
                icon && (React__default.createElement(InputAdornment, { position: 'start' },
                    React__default.createElement(FormIcon, { fontSize: 'small' }, icon))),
                startAdornment && React__default.createElement(InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React__default.createElement(React__default.Fragment, null, endAdornment && React__default.createElement(InputAdornment, { position: 'end' }, endAdornment)));
        }
        return {
            textField: {
                className: classNames$1('input-text-field', "align-".concat(align)),
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React__default.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React__default.createElement("div", { className: classNames$1(className, 'PrivateDateTimePicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React__default.createElement(PrivateStyledTooltip, { open: disabled || readOnly ? false : open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && helperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React__default.createElement(PrivateStaticDateTimePicker, __assign$7({}, otherProps, { ref: privateStaticDateTimePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, onChange: handleChange, onAccept: function () { return !time && setOpen(false); }, onClose: function () { return setOpen(false); } })) },
                    React__default.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React__default.createElement(DesktopDateTimePicker, __assign$7({ value: inputValue, label: label, open: false, format: format, disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: function () { return setOpen(false); }, onError: function (reason) { return (datePickerErrorRef.current = reason); }, onChange: function (newValue) { return handleChange('date', newValue); }, slotProps: slotProps }, otherProps)))),
                !formColWithHelperText && (helperText || (error && errorHelperText)) && (React__default.createElement(FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error ? errorHelperText : helperText))))));
});
PrivateDateTimePicker.displayName = 'PrivateDateTimePicker';
PrivateDateTimePicker.defaultProps = PrivateDateTimePickerDefaultProps;var PrivateAlertDialogDefaultProps = {
    color: 'primary',
};var PrivateAlertDialog = function (_a) {
    var color = _a.color, open = _a.open, title = _a.title, content = _a.content, onClose = _a.onClose;
    var handleClose = useCallback(function () {
        onClose && onClose();
    }, [onClose]);
    return (React__default.createElement(Dialog, { className: "color-".concat(color), open: !!open, onClose: handleClose, "aria-labelledby": 'alert-dialog-title' },
        title && React__default.createElement(DialogTitle, { id: 'alert-dialog-title' }, title),
        React__default.createElement(DialogContent, null, content),
        React__default.createElement(DialogActions, null,
            React__default.createElement(Button, { variant: 'text', onClick: handleClose, autoFocus: true }, "\uD655\uC778"))));
};
PrivateAlertDialog.displayName = 'PrivateAlertDialog';
PrivateAlertDialog.defaultProps = PrivateAlertDialogDefaultProps;var FormDatePicker = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var className = _a.className, props = __rest$4(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest$4(_b, ["onAddValueItem"]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'FormDatePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$7({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React__default.createElement(PrivateDatePicker, __assign$7({ className: classNames$1(className, 'FormDatePicker') }, props, { ref: ref, type: 'date' }))));
});
FormDatePicker.displayName = 'FormDatePicker';
FormDatePicker.defaultProps = FormDatePickerDefaultProps;var FormDateTimePickerDefaultProps = {};var FormDateTimePicker = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var className = _a.className, props = __rest$4(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest$4(_b, ["onAddValueItem"]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'FormDateTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$7({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React__default.createElement(PrivateDateTimePicker, __assign$7({ className: classNames$1(className, 'FormDateTimePicker') }, props, { ref: ref, type: 'date_time' }))));
});
FormDateTimePicker.displayName = 'FormDateTimePicker';
FormDateTimePicker.defaultProps = FormDateTimePickerDefaultProps;var FormTimePickerDefaultProps = {};var FormTimePicker = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var className = _a.className, props = __rest$4(_a, ["className"]);
    var _b = useFormState(), onAddValueItem = _b.onAddValueItem, otherFormState = __rest$4(_b, ["onAddValueItem"]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'FormTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$7({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React__default.createElement(PrivateDateTimePicker, __assign$7({ className: classNames$1(className, 'FormTimePicker') }, props, { ref: ref, type: 'time' }))));
});
FormTimePicker.displayName = 'FormTimePicker';
FormTimePicker.defaultProps = FormTimePickerDefaultProps;var FormDateRangePickerDefaultProps = {
    calendarCount: 2,
    format: 'YYYY-MM-DD',
    formValueFormat: 'YYYY-MM-DD',
    formValueStartNameSuffix: '_from',
    formValueEndNameSuffix: '_to',
    align: 'center',
};var CustomDatePickerContainerDefaultProps = {
    calendarCount: 2,
};var CustomDatePickerDefaultProps = {};var css_248z$4 = ".CustomDatePicker .MuiPickersCalendarHeader-root {\n  display: none;\n}\n.CustomDatePicker .MuiDayPicker-header > span {\n  margin: 0;\n}\n.CustomDatePicker .MuiPickerStaticWrapper-content {\n  min-width: 292px;\n}\n.CustomDatePicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root > div {\n  width: 292px;\n}\n.CustomDatePicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root > div .MuiCalendarPicker-root {\n  width: 292px;\n}\n.CustomDatePicker .selected-bg {\n  display: none;\n  position: absolute;\n}\n.CustomDatePicker .selected-bg.sel {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(66, 165, 245, 0.6);\n}\n.CustomDatePicker .selected-bg.sel.ui-start, .CustomDatePicker .selected-bg.sel.s-start {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n.CustomDatePicker .selected-bg.sel.ui-end, .CustomDatePicker .selected-bg.sel.s-end {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n.CustomDatePicker .selected-bg.sel ~ .MuiPickersDay-root {\n  border: 0;\n}\n.CustomDatePicker .selected-bg.sel ~ .MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected) {\n  background-color: transparent;\n}\n.CustomDatePicker .focused-bg {\n  display: none;\n  position: absolute;\n}\n.CustomDatePicker .focused-bg.focused {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 2px solid #efefef;\n  border-left: 0;\n  border-right: 0;\n}\n.CustomDatePicker .focused-bg.focused.ui-start, .CustomDatePicker .focused-bg.focused.f-start {\n  border-left: 2px solid #efefef;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n}\n.CustomDatePicker .focused-bg.focused.ui-end, .CustomDatePicker .focused-bg.focused.f-end {\n  border-right: 2px solid #efefef;\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n}\n.CustomDatePicker .focused-bg.focused ~ .MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected) {\n  background-color: transparent;\n}";
styleInject(css_248z$4);var CustomDatePicker = React__default.forwardRef(function (_a, ref) {
    // State -----------------------------------------------------------------------------------------------------------
    var selectType = _a.selectType, initValue = _a.value, focusedDate = _a.focusedDate, month = _a.month, disableFuture = _a.disableFuture, disablePast = _a.disablePast, minDate = _a.minDate, maxDate = _a.maxDate, onValueChange = _a.onValueChange, onMouseEnterPickersDay = _a.onMouseEnterPickersDay, onMonthChange = _a.onMonthChange;
    var value = useAutoUpdateState$1(useCallback(function () {
        return initValue ? initValue : [null, null];
    }, [initValue]))[0];
    var _b = useState(null), activeMonthValue = _b[0], setActiveMonthValue = _b[1];
    // Effect ------------------------------------------------------------------------------------------------------------
    useEffect(function () {
        setActiveMonthValue(null);
    }, [selectType]);
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = useRef();
    var rightArrowOnClickRef = useRef();
    var LeftArrowButton = useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$7({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$7({}, props));
        };
        return ArrowButton;
    })[0];
    //--------------------------------------------------------------------------------------------------------------------
    var getDateVal = useCallback(function (date) {
        return Number(date.format('YYYYMMDD'));
    }, []);
    //--------------------------------------------------------------------------------------------------------------------
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
    //--------------------------------------------------------------------------------------------------------------------
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
    useLayoutEffect(function () {
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
    var handleRenderDay = useCallback(function (props) {
        var startDate = value[0];
        var endDate = value[1];
        var dateVal = getDateVal(props.day);
        var baseClassName = baseClassNames[dateVal];
        var selectedClassName = selectedClassNames[dateVal];
        var focusedClassName = focusedClassNames[dateVal];
        return (React__default.createElement("div", { key: props.key, style: { position: 'relative' } },
            React__default.createElement("div", { className: classNames$1('focused-bg', baseClassName, focusedClassName) }),
            React__default.createElement("div", { className: classNames$1('selected-bg', baseClassName, selectedClassName) }),
            React__default.createElement(PickersDay, __assign$7({}, props, { disableMargin: true, selected: props.day.isSame(startDate, 'date') || props.day.isSame(endDate, 'date'), onMouseEnter: value[0] || value[1] ? function () { return onMouseEnterPickersDay && onMouseEnterPickersDay(props.day); } : undefined }))));
    }, [value, getDateVal, baseClassNames, selectedClassNames, focusedClassNames, onMouseEnterPickersDay]);
    // -------------------------------------------------------------------------------------------------------------------
    // const slots = useMemo(
    //   () => ({
    //     previousIconButton: LeftArrowButton,
    //     nextIconButton: RightArrowButton,
    //     day: handleRenderDay,
    //   }),
    //   [LeftArrowButton, RightArrowButton, handleRenderDay]
    // );
    // Render ------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(StaticDatePicker, { className: 'CustomDatePicker', displayStaticWrapperAs: 'desktop', slots: {
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
CustomDatePicker.displayName = 'CustomDatePicker';
CustomDatePicker.defaultProps = CustomDatePickerDefaultProps;var css_248z$3 = ".CustomDatePickerContainer {\n  display: inline-block;\n  position: relative;\n}\n.CustomDatePickerContainer .month-change-arrow-wrap {\n  position: absolute;\n  top: 15px;\n  left: 0;\n  right: 0;\n}\n.CustomDatePickerContainer .month-change-arrow-wrap > div:first-child {\n  padding-left: 20px;\n}\n.CustomDatePickerContainer .month-change-arrow-wrap > div:last-child {\n  padding-right: 20px;\n  text-align: right;\n}\n.CustomDatePickerContainer .month-title {\n  text-align: center;\n  padding-top: 13px;\n  padding-bottom: 10px;\n}\n.CustomDatePickerContainer .month-title button {\n  font-size: 15px;\n  padding-left: 8px;\n  padding-right: 0;\n  min-width: 0;\n}\n.CustomDatePickerContainer .month-title button:not(.active) {\n  color: unset;\n}\n.CustomDatePickerContainer .date-picker-wrap {\n  position: relative;\n}\n.CustomDatePickerContainer .date-picker-wrap .year-select,\n.CustomDatePickerContainer .date-picker-wrap .month-select {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-top: 1px solid #efefef;\n  padding-top: 15px;\n  background-color: white;\n}\n.CustomDatePickerContainer .date-picker-wrap .year-select button.today:not(.selected),\n.CustomDatePickerContainer .date-picker-wrap .month-select button.today:not(.selected) {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.CustomDatePickerContainer .date-picker-wrap .year-select button.active:not(.selected),\n.CustomDatePickerContainer .date-picker-wrap .month-select button.active:not(.selected) {\n  background-color: #f5f5f5;\n}\n.CustomDatePickerContainer .date-picker-wrap .year-select button.active:not(.selected):hover,\n.CustomDatePickerContainer .date-picker-wrap .month-select button.active:not(.selected):hover {\n  background-color: rgb(229, 229, 229);\n}\n.CustomDatePickerContainer .date-picker-wrap .year-select {\n  overflow-y: scroll;\n}\n.CustomDatePickerContainer .date-picker-wrap .year-select button {\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 18px;\n}\n.CustomDatePickerContainer .date-picker-wrap .month-select button {\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 18px;\n}\n.CustomDatePickerContainer .action-buttons button {\n  min-width: 0;\n  color: unset;\n}\n.CustomDatePickerContainer .action-buttons button:not(:first-child) {\n  margin-left: 5px;\n}\n.CustomDatePickerContainer .action-buttons button.disabled {\n  color: rgba(0, 0, 0, 0.5);\n}";
styleInject(css_248z$3);var YEARS = new Array(200).fill(0);
for (var i = 0; i < 200; i += 1) {
    YEARS[i] = 1900 + i;
}
var MONTHS = new Array(12).fill(0);
for (var i = 0; i < 12; i += 1) {
    MONTHS[i] = i;
}
var CustomDatePickerContainer = React__default.forwardRef(function (_a, ref) {
    var selectType = _a.selectType, value = _a.value, calendarCount = _a.calendarCount, months = _a.months, disablePast = _a.disablePast, disableFuture = _a.disableFuture, maxDate = _a.maxDate, minDate = _a.minDate, onGetActionButtons = _a.onGetActionButtons, onChange = _a.onChange, onValueChange = _a.onValueChange, onMonthsChange = _a.onMonthsChange;
    var theme = useTheme();
    // Ref -------------------------------------------------------------------------------------------------------------
    var datePicker1Ref = useRef(null);
    var datePicker2Ref = useRef(null);
    var datePicker3Ref = useRef(null);
    var yearSelectRef = useRef(null);
    var activeYearBtnRef = useRef(null);
    // Memo --------------------------------------------------------------------------------------------------------------
    var _b = useState(), focusedDate = _b[0], setFocusedDate = _b[1];
    var _c = useState(0), yearMonthSelectIndex = _c[0], setYearMonthSelectIndex = _c[1];
    var _d = useState(false), yearSelectOpen = _d[0], setYearSelectOpen = _d[1];
    var _e = useState(false), monthSelectOpen = _e[0], setMonthSelectOpen = _e[1];
    var customDatePickerProps = useMemo(function () { return ({ selectType: selectType, value: value, minDate: minDate, maxDate: maxDate, disableFuture: disableFuture, disablePast: disablePast, onValueChange: onValueChange }); }, [selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange]);
    var availableDate = useMemo(function () { return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture); }, [minDate, maxDate, disablePast, disableFuture]);
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (yearSelectOpen) {
            nextTick(function () {
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
    // Function --------------------------------------------------------------------------------------------------------
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
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleFirstDatePickerMonthChange = useCallback(function (date) {
        if (onMonthsChange) {
            onMonthsChange([date, date.add(1, 'month'), date.add(2, 'month')]);
        }
    }, [onMonthsChange]);
    var handleYearSelectClick = useCallback(function (index) {
        if (yearSelectOpen) {
            setYearSelectOpen(false);
            if (index !== yearMonthSelectIndex) {
                nextTick(function () {
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
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
    // Render Function -------------------------------------------------------------------------------------------------
    var getMonthTitle = useCallback(function (index) {
        return (React__default.createElement("div", { className: 'month-title' },
            React__default.createElement(Button, { variant: 'text', className: yearSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: function () { return handleYearSelectClick(index); } },
                months[index].format('YYYY년'),
                React__default.createElement(Icon$1, null, yearSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down')),
            React__default.createElement(Button, { variant: 'text', className: monthSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined, onClick: function () { return handleMonthSelectClick(index); } },
                months[index].format('M월'),
                React__default.createElement(Icon$1, null, monthSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down'))));
    }, [yearSelectOpen, yearMonthSelectIndex, months, monthSelectOpen, handleYearSelectClick, handleMonthSelectClick]);
    // Render - Function -----------------------------------------------------------------------------------------------
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
        return (React__default.createElement(Button, { className: disabled ? 'disabled' : undefined, variant: 'text', disabled: disabled, onClick: function () {
                onChange([finalStartDate, finalEndDate]);
            } }, label));
    }, [onChange, availableDate]);
    // Render ----------------------------------------------------------------------------------------------------------
    var actionButtons = useMemo(function () {
        if (onGetActionButtons) {
            return onGetActionButtons().map(function (info, idx) { return (React__default.createElement(React__default.Fragment, { key: idx }, getActionButton(info.start, info.end, info.label))); });
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
            return (React__default.createElement(React__default.Fragment, null,
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
    return (React__default.createElement("div", { className: 'CustomDatePickerContainer' },
        React__default.createElement(Grid, { container: true, direction: 'column' },
            !yearSelectOpen && !monthSelectOpen && (React__default.createElement(Grid, { item: true },
                React__default.createElement(Grid, { container: true, className: 'month-change-arrow-wrap' },
                    React__default.createElement(Grid, { item: true, xs: 6 },
                        React__default.createElement(IconButton, { onClick: previousMonth },
                            React__default.createElement(Icon$1, null, "keyboard_arrow_left"))),
                    React__default.createElement(Grid, { item: true, xs: 6 },
                        React__default.createElement(IconButton, { onClick: nextMonth },
                            React__default.createElement(Icon$1, null, "keyboard_arrow_right")))))),
            React__default.createElement(Grid, { item: true, onMouseLeave: function () { return setFocusedDate(undefined); } },
                React__default.createElement("div", { style: { display: 'flex' } },
                    React__default.createElement("div", { style: { flex: 1 } }, getMonthTitle(0)),
                    React__default.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(1)),
                    Number(calendarCount) >= 3 && (React__default.createElement("div", { style: { flex: 1, borderLeft: '1px solid #efefef' } }, getMonthTitle(2)))),
                React__default.createElement("div", { className: 'date-picker-wrap' },
                    React__default.createElement(Grid, { container: true, flexWrap: 'nowrap' },
                        React__default.createElement(Grid, { item: true },
                            React__default.createElement(CustomDatePicker, __assign$7({}, customDatePickerProps, { ref: datePicker1Ref, focusedDate: focusedDate, month: months[0], onMouseEnterPickersDay: setFocusedDate, onMonthChange: handleFirstDatePickerMonthChange }))),
                        React__default.createElement(Grid, { item: true, style: { borderLeft: '1px solid #efefef' } },
                            React__default.createElement(CustomDatePicker, __assign$7({}, customDatePickerProps, { ref: datePicker2Ref, focusedDate: focusedDate, month: months[1], onMouseEnterPickersDay: setFocusedDate }))),
                        Number(calendarCount) >= 3 && (React__default.createElement(Grid, { item: true, style: { borderLeft: '1px solid #efefef' } },
                            React__default.createElement(CustomDatePicker, __assign$7({}, customDatePickerProps, { ref: datePicker3Ref, focusedDate: focusedDate, month: months[2], onMouseEnterPickersDay: setFocusedDate }))))),
                    yearSelectOpen && (React__default.createElement("div", { ref: yearSelectRef, className: 'year-select' },
                        React__default.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, YEARS.map(function (y) {
                            var _a;
                            var today = dayjs();
                            var isToday = y === today.year();
                            var isActive = y === months[yearMonthSelectIndex].year();
                            var isSelected = y === ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year());
                            var disabled = !isDateAvailable(dayjs(y.toString(), 'YYYY'), availableDate, 'year');
                            return (React__default.createElement(Grid, { key: y, item: true, xs: 2 },
                                React__default.createElement(Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames$1(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
                                        backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                                        color: isSelected ? 'white' : 'unset',
                                        ':hover': {
                                            backgroundColor: isSelected
                                                ? darken(theme.palette.primary.main, 0.2)
                                                : darken('#fff', 0.1),
                                        },
                                    }, onClick: function () { return handleYearSelect(y); } }, y)));
                        })))),
                    monthSelectOpen && (React__default.createElement("div", { className: 'month-select' },
                        React__default.createElement(Grid, { container: true, style: { padding: '5px 10px' }, spacing: 1 }, MONTHS.map(function (m) {
                            var _a, _b;
                            var today = dayjs();
                            var isToday = today.year() === months[yearMonthSelectIndex].year() && m === today.month();
                            var isActive = m === months[yearMonthSelectIndex].month();
                            var isSelected = ((_a = value[yearMonthSelectIndex]) === null || _a === void 0 ? void 0 : _a.year()) === months[yearMonthSelectIndex].year() &&
                                m === ((_b = value[yearMonthSelectIndex]) === null || _b === void 0 ? void 0 : _b.month());
                            var ym = months[yearMonthSelectIndex].year() * 100 + (m + 1);
                            var disabled = !isDateAvailable(dayjs(ym.toString(), 'YYYYMM'), availableDate, 'month');
                            return (React__default.createElement(Grid, { key: m, item: true, xs: 4 },
                                React__default.createElement(Button, { variant: 'text', fullWidth: true, disabled: disabled, className: classNames$1(isSelected && 'selected', isActive && 'active', isToday && 'today'), ref: isActive ? activeYearBtnRef : undefined, sx: {
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
            React__default.createElement(Grid, { className: 'action-buttons', item: true, style: { borderTop: '1px solid #efefef', padding: 10, textAlign: 'right' } }, actionButtons))));
});
CustomDatePickerContainer.displayName = 'CustomDatePickerContainer';
CustomDatePickerContainer.defaultProps = CustomDatePickerContainerDefaultProps;var InputDatePickerDefaultProps = {
    align: 'center',
};var css_248z$2 = ".InputDatePicker.align-left .MuiInputBase-input {\n  text-align: left;\n}\n.InputDatePicker.align-center .MuiInputBase-input {\n  text-align: center;\n}\n.InputDatePicker.align-right .MuiInputBase-input {\n  text-align: right;\n}";
styleInject(css_248z$2);var InputDatePicker = function (_a) {
    // ID --------------------------------------------------------------------------------------------------------------
    var variant = _a.variant, size = _a.size, color = _a.color, focused = _a.focused, fullWidth = _a.fullWidth, disabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, labelShrink = _a.labelShrink, 
    //--------------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, value = _a.value, initLabel = _a.label, labelIcon = _a.labelIcon, inputRef = _a.inputRef, format = _a.format, error = _a.error, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, readOnlyInput = _a.readOnlyInput, onFocus = _a.onFocus, onBlur = _a.onBlur, props = __rest$4(_a, ["variant", "size", "color", "focused", "fullWidth", "disabled", "readOnly", "required", "labelShrink", "className", "style", "value", "label", "labelIcon", "inputRef", "format", "error", "icon", "startAdornment", "endAdornment", "align", "readOnlyInput", "onFocus", "onBlur"]);
    var id = useId();
    // Memo --------------------------------------------------------------------------------------------------------------
    var label = useMemo(function () {
        return labelIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React__default.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]);
    var inputLabelProps = useMemo(function () {
        if (labelShrink) {
            return {
                shrink: true,
            };
        }
    }, [labelShrink]);
    var slotProps = useMemo(function () {
        var muiInputProps = {
            endAdornment: undefined,
        };
        if (startAdornment || icon || muiInputProps.startAdornment) {
            muiInputProps.startAdornment = (React__default.createElement(React__default.Fragment, null,
                icon && (React__default.createElement(InputAdornment, { position: 'start' },
                    React__default.createElement(FormIcon, { fontSize: 'small' }, icon))),
                startAdornment && React__default.createElement(InputAdornment, { position: 'start' }, startAdornment),
                muiInputProps.startAdornment));
        }
        if (endAdornment) {
            muiInputProps.endAdornment = (React__default.createElement(React__default.Fragment, null, endAdornment && React__default.createElement(InputAdornment, { position: 'end' }, endAdornment)));
        }
        var inputProps = {};
        if (readOnly) {
            inputProps.tabIndex = -1;
            inputProps.className = classNames$1(inputProps.className, 'Mui-disabled');
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
        variant,
    ]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(DesktopDatePicker, __assign$7({}, props, { className: classNames$1(className, 'InputDatePicker', "align-".concat(align)), open: false, value: value, format: format, disabled: disabled, readOnly: readOnly || readOnlyInput, slotProps: slotProps })));
};
InputDatePicker.displayName = 'InputDatePicker';
InputDatePicker.defaultProps = InputDatePickerDefaultProps;var DEFAULT_VALUE = [null, null];
var DEFAULT_FORMAT = 'YYYY-MM-DD';
var FormDateRangePicker = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, initValue = _a.value, initData = _a.data, startLabel = _a.startLabel, startLabelIcon = _a.startLabelIcon, endLabel = _a.endLabel, endLabelIcon = _a.endLabelIcon, initCalendarCount = _a.calendarCount, initFormat = _a.format, formValueFormat = _a.formValueFormat, allowSingleSelect = _a.allowSingleSelect, required = _a.required, requiredStart = _a.requiredStart, requiredEnd = _a.requiredEnd, readOnly = _a.readOnly, readOnlyStart = _a.readOnlyStart, readOnlyEnd = _a.readOnlyEnd, readOnlyInput = _a.readOnlyInput, initDisabled = _a.disabled, inputWidth = _a.inputWidth, exceptValue = _a.exceptValue, initError = _a.error, helperText = _a.helperText, formValueStartNameSuffix = _a.formValueStartNameSuffix, formValueEndNameSuffix = _a.formValueEndNameSuffix, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, startAdornment = _a.startAdornment, startStartAdornment = _a.startStartAdornment, endStartAdornment = _a.endStartAdornment, endAdornment = _a.endAdornment, startEndAdornment = _a.startEndAdornment, endEndAdornment = _a.endEndAdornment, disablePast = _a.disablePast, disableFuture = _a.disableFuture, minDate = _a.minDate, maxDate = _a.maxDate, hidden = _a.hidden, onGetActionButtons = _a.onGetActionButtons, onChange = _a.onChange, onValidate = _a.onValidate, 
    // -------------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // Ref -------------------------------------------------------------------------------------------------------------
    var containerRef = useRef(null);
    var startDateTextFieldRef = useRef();
    var endDateTextFieldRef = useRef();
    var closeTimeoutRef = useRef();
    var mouseDownTimeRef = useRef();
    var startInputDatePickerErrorRef = useRef(null);
    var endInputDatePickerErrorRef = useRef(null);
    var openValueRef = useRef();
    // State -----------------------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initError), error = _c[0], setError = _c[1];
    var _d = useState(false), startError = _d[0], setStartError = _d[1];
    var _e = useState(false), endError = _e[0], setEndError = _e[1];
    var _f = useAutoUpdateState$1(initDisabled), disabled = _f[0], setDisabled = _f[1];
    var _g = useState(), errorHelperText = _g[0], setErrorHelperText = _g[1];
    var _h = useState(), startErrorHelperText = _h[0], setStartErrorHelperText = _h[1];
    var _j = useState(), endErrorHelperText = _j[0], setEndErrorHelperText = _j[1];
    var _k = useAutoUpdateState$1(initData), data = _k[0], setData = _k[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var format = useMemo(function () { return initFormat || DEFAULT_FORMAT; }, [initFormat]);
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return value || DEFAULT_VALUE;
    }, []);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [startDateTextFieldRef]);
    var focusValidate = useCallback(function () {
        var _a, _b;
        if (endError) {
            (_a = endDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = startDateTextFieldRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [endError, startDateTextFieldRef, endDateTextFieldRef]);
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    var setStartErrorErrorHelperText = useCallback(function (error, startErrorHelperText) {
        setStartError(error);
        setStartErrorHelperText(startErrorHelperText);
    }, []);
    var setEndErrorErrorHelperText = useCallback(function (error, endErrorHelperText) {
        setEndError(error);
        setEndErrorHelperText(endErrorHelperText);
    }, []);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        var _a, _b;
        if (required && (value[0] == null || value[1] == null)) {
            if (value[0] == null && value[1] == null) {
                setErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else if (value[0] == null) {
                setStartErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setEndErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        if (requiredStart && value[0] == null) {
            setStartErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (requiredEnd && value[1] == null) {
            setEndErrorErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (!allowSingleSelect && (value[0] || value[1]) && (value[0] == null || value[1] == null)) {
            if (value[0] == null) {
                setStartErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setEndErrorErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        var startInputValue = ((_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.value) || '';
        var endInputValue = ((_b = endDateTextFieldRef.current) === null || _b === void 0 ? void 0 : _b.value) || '';
        if (notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
            setStartErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
            setEndErrorErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (startInputDatePickerErrorRef.current) {
            setStartErrorErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
            return false;
        }
        if (endInputDatePickerErrorRef.current) {
            setEndErrorErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
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
        setStartError(false);
        setEndError(false);
        return true;
    }, [
        required,
        requiredStart,
        requiredEnd,
        allowSingleSelect,
        format,
        onValidate,
        setErrorErrorHelperText,
        setStartErrorErrorHelperText,
        setEndErrorErrorHelperText,
    ]);
    // Function activeMonth --------------------------------------------------------------------------------------------
    var activeMonth = useCallback(function (month) {
        var _a;
        setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
    }, [containerRef]);
    // State -----------------------------------------------------------------------------------------------------------
    var _l = useState(false), open = _l[0], setOpen = _l[1];
    var _m = useState('start'), selectType = _m[0], setSelectType = _m[1];
    var _o = useAutoUpdateState$1(useCallback(function () {
        return initValue || DEFAULT_VALUE;
    }, [initValue])), value = _o[0], setValue = _o[1];
    var calendarCount = useAutoUpdateState$1(initCalendarCount || 2)[0];
    var _p = useState(function () {
        var now = dayjs();
        return [now, now.add(1, 'month'), now.add(2, 'month')];
    }), months = _p[0], setMonths = _p[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var inputDatePickerProps = useMemo(function () { return ({
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
    }); }, [variant, size, color, labelShrink, fullWidth, disabled, format, disablePast, disableFuture, minDate, maxDate]);
    var inputStyle = useMemo(function () { return (inputWidth != null ? { width: inputWidth } : { width: fullWidth ? undefined : 150 }); }, [inputWidth, fullWidth]);
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useFirstSkipEffect$1(function () {
        if (error || startError || endError)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    useFirstSkipEffect$1(function () {
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var wrapStyle = useMemo(function () { return ({
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-block',
        flex: fullWidth ? 1 : undefined,
    }); }, [hidden, fullWidth]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (newValue) {
        setValue(newValue);
        setOpen(false);
        setStartErrorErrorHelperText(false, undefined);
        setEndErrorErrorHelperText(false, undefined);
    }, [setEndErrorErrorHelperText, setStartErrorErrorHelperText, setValue]);
    var handleValueChange = useCallback(function (selectType, newValue, fromInput) {
        var _a;
        var finalValue;
        switch (selectType) {
            case 'start':
                if ((_a = value[1]) === null || _a === void 0 ? void 0 : _a.isBefore(newValue)) {
                    finalValue = [newValue, null];
                    if (!fromInput) {
                        nextTick(function () {
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
                            nextTick(function () {
                                var _a;
                                (_a = endDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                            });
                        }
                    }
                }
                setStartErrorErrorHelperText(false, undefined);
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
                    setStartErrorErrorHelperText(false, undefined);
                }
                else {
                    finalValue = [value[0], newValue];
                    if (fromInput && newValue) {
                        activeMonth(newValue.subtract(calendarCount - 1, 'month'));
                    }
                    if (value[0]) {
                        setOpen(false);
                        if (fromInput && !open) {
                            nextTick(function () {
                                onRequestSearchSubmit(name, finalValue);
                            });
                        }
                    }
                    else {
                        nextTick(function () {
                            var _a;
                            (_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                        });
                    }
                    setEndErrorErrorHelperText(false, undefined);
                }
                break;
        }
        setValue(finalValue);
        nextTick(function () {
            onValueChangeByUser(name, finalValue);
        });
    }, [
        setValue,
        value,
        setStartErrorErrorHelperText,
        activeMonth,
        calendarCount,
        setEndErrorErrorHelperText,
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
                setStartError(error);
                break;
            case 'end':
                setEndError(error);
                break;
        }
    }, [handleValueChange]);
    // Event Handler - Container ---------------------------------------------------------------------------------------
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
        var startValue = value[0];
        var endValue = value[1];
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
    }, [value, calendarCount, activeMonth, readOnly, disabled]);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
            var lastData_1 = data;
            var lastDisabled_1 = !!disabled;
            var commands = {
                getType: function () { return 'FormDateRangePicker'; },
                getName: function () { return name; },
                getReset: function () { return getFinalValue(initValue); },
                reset: function () {
                    lastValue_1 = getFinalValue(initValue);
                    setValue(lastValue_1);
                },
                getValue: function () { return lastValue_1; },
                setValue: function (value) {
                    lastValue_1 = getFinalValue(value);
                    setValue(lastValue_1);
                },
                getData: function () { return lastData_1; },
                setData: function (data) {
                    lastData_1 = data;
                    setData(data);
                },
                getStartValue: function () { return lastValue_1[0]; },
                setStartValue: function (value) {
                    lastValue_1 = [value, lastValue_1[1]];
                    setValue(lastValue_1);
                },
                getEndValue: function () { return lastValue_1[1]; },
                setEndValue: function (value) {
                    lastValue_1 = [lastValue_1[0], value];
                    setValue(lastValue_1);
                },
                isExceptValue: function () { return !!exceptValue; },
                isDisabled: function () { return lastDisabled_1; },
                setDisabled: function (disabled) {
                    lastDisabled_1 = disabled;
                    setDisabled(disabled);
                },
                focus: focus,
                focusValidate: focusValidate,
                validate: function () { return validate(value); },
                setError: function (error, errorText) {
                    return setErrorErrorHelperText(error, error ? errorText : undefined);
                },
                getFormValueFormat: function () { return formValueFormat || FormDateRangePickerDefaultProps.format; },
                getFormValueStartNameSuffix: function () {
                    return formValueStartNameSuffix || FormDateRangePickerDefaultProps.formValueStartNameSuffix;
                },
                getFormValueEndNameSuffix: function () {
                    return formValueEndNameSuffix || FormDateRangePickerDefaultProps.formValueEndNameSuffix;
                },
                getFormValueStartName: function () {
                    return "".concat(name).concat(formValueStartNameSuffix || FormDateRangePickerDefaultProps.formValueStartNameSuffix);
                },
                getFormValueEndName: function () {
                    return "".concat(name).concat(formValueEndNameSuffix || FormDateRangePickerDefaultProps.formValueEndNameSuffix);
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
        name,
        initValue,
        value,
        getFinalValue,
        exceptValue,
        disabled,
        focus,
        focusValidate,
        validate,
        formValueFormat,
        formValueStartNameSuffix,
        formValueEndNameSuffix,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        data,
        setData,
    ]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs },
        React__default.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React__default.createElement("div", { className: classNames$1(className, 'FormDateRangePicker'), style: wrapStyle, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React__default.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [
                                        0,
                                        (error && errorHelperText) ||
                                            (startError && startErrorHelperText) ||
                                            (endError && endErrorHelperText)
                                            ? 8
                                            : -14,
                                    ],
                                },
                            },
                        ],
                    }, title: React__default.createElement("div", { style: { display: 'flex' } },
                        React__default.createElement(CustomDatePickerContainer, { ref: containerRef, calendarCount: calendarCount, selectType: selectType, value: value, months: months, disablePast: disablePast, disableFuture: disableFuture, minDate: minDate, maxDate: maxDate, onGetActionButtons: onGetActionButtons, onChange: handleChange, onValueChange: handleValueChange, onMonthsChange: setMonths })) },
                    React__default.createElement(Grid, { container: true, alignItems: 'center' },
                        React__default.createElement(Grid, { item: true, flex: 1 },
                            React__default.createElement(InputDatePicker, __assign$7({}, inputDatePickerProps, { style: inputStyle, value: value[0], label: startLabel, labelIcon: startLabelIcon, error: error || startError, focused: focused || (open && selectType === 'start'), required: required || requiredStart, readOnly: readOnly || readOnlyStart, readOnlyInput: readOnlyInput, icon: startIcon || icon, startAdornment: startStartAdornment || startAdornment, endAdornment: startEndAdornment || endAdornment, inputRef: startDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('start', newValue); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); } }))),
                        React__default.createElement(Grid, { item: true, sx: { px: 1 } }, "~"),
                        React__default.createElement(Grid, { item: true, flex: 1 },
                            React__default.createElement(InputDatePicker, __assign$7({}, inputDatePickerProps, { style: inputStyle, value: value[1], label: endLabel, labelIcon: endLabelIcon, error: error || endError, focused: focused || (open && selectType === 'end'), required: required || requiredEnd, readOnly: readOnly || readOnlyEnd, readOnlyInput: readOnlyInput, icon: endIcon || icon, startAdornment: endStartAdornment || startAdornment, endAdornment: endEndAdornment || endAdornment, inputRef: endDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('end', newValue); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); } }))))),
                !formColWithHelperText &&
                    (helperText ||
                        (error && errorHelperText) ||
                        (startError && startErrorHelperText) ||
                        (endError && endErrorHelperText)) && (React__default.createElement(FormHelperText, { error: error || startError || endError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, error
                    ? errorHelperText
                    : startError
                        ? startErrorHelperText
                        : endError
                            ? endErrorHelperText
                            : helperText))))));
});
FormDateRangePicker.displayName = 'FormDateRangePicker';
FormDateRangePicker.defaultProps = FormDateRangePickerDefaultProps;var FormFileDefaultProps = {
    value: '',
};var LinkDialogDefaultProps = {};var LinkDialog = function (_a) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var open = _a.open, onConfirm = _a.onConfirm, onCancel = _a.onCancel, onClose = _a.onClose;
    var inputRef = useRef();
    // State -----------------------------------------------------------------------------------------------------------
    var _b = useState(''), value = _b[0], setValue = _b[1];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (!open) {
            setValue('');
        }
    }, [open]);
    // Event Handler ---------------------------------------------------------------------------------------------------
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Dialog, { className: 'color-primary', open: !!open, maxWidth: 'sm', fullWidth: true, onClose: function (e, reason) {
            if (reason === 'backdropClick') {
                if (empty(value)) {
                    onClose && onClose();
                }
            }
        } },
        React__default.createElement(DialogTitle, null, "\uD30C\uC77C \uB9C1\uD06C"),
        React__default.createElement(DialogContent, null,
            React__default.createElement(Box, null,
                React__default.createElement("div", null, "\uD30C\uC77C\uC758 \uB9C1\uD06C URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),
                React__default.createElement(FormUrl, { ref: function (ref) {
                        if (inputRef.current == null && ref !== null) {
                            ref.focus();
                        }
                        inputRef.current = ref;
                    }, name: 'form-file-link-url', label: '\uB9C1\uD06C URL', value: value, required: true, style: { marginTop: 15 }, onChange: setValue }))),
        React__default.createElement(DialogActions, null,
            React__default.createElement(Button, { variant: 'text', onClick: handleCancel }, "\uCDE8\uC18C"),
            React__default.createElement(Button, { variant: 'text', onClick: handleSubmit }, "\uD655\uC778"))));
};
LinkDialog.displayName = 'LinkDialog';
LinkDialog.defaultProps = LinkDialogDefaultProps;var css_248z$1 = ".FormFile .control-wrap {\n  display: inline-flex;\n}\n.FormFile .control-wrap .file-name-wrap .file-name {\n  min-width: 350px;\n}\n.FormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root {\n  padding-right: 7px;\n}\n.FormFile .control-wrap .input-file {\n  display: none;\n}\n.FormFile .control-wrap .form-file-btn {\n  min-width: 0;\n  padding: 0;\n}\n.FormFile .control-wrap .form-file-btn label {\n  cursor: pointer;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n}\n.FormFile .control-wrap .form-file-btn label .FormIcon {\n  margin-right: 5px;\n}\n.FormFile .control-wrap .form-file-btn.hidden-label label .FormIcon {\n  margin-left: 0;\n  margin-right: 0;\n}\n.FormFile .control-wrap .input-file-wrap {\n  display: flex;\n}\n.FormFile .control-wrap .input-file-wrap .input-file-btn .FormIcon {\n  margin-left: -3px;\n}\n.FormFile .control-wrap .input-file-wrap .form-file-btn:first-of-type:not(:last-of-type) {\n  border-right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.FormFile .control-wrap .input-file-wrap .form-file-btn:last-of-type:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.FormFile .control-wrap .input-file-wrap .form-file-btn:not(:first-of-type):not(:last-of-type) {\n  border-right: 0;\n  border-radius: 0;\n}\n.FormFile.full-width .control-wrap {\n  display: flex;\n}\n.FormFile.full-width .control-wrap .file-name-wrap {\n  flex: 1;\n}\n.FormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root {\n  padding-right: 0;\n}\n\n.FormFile:not(.hide-file-name).variant-outlined .form-file-btn label, .FormFile:not(.hide-file-name).variant-filled .form-file-btn label {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.FormFile:not(.hide-file-name).variant-standard .form-file-btn label {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.FormFile:not(.hide-file-name).size-small .form-file-btn label {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.FormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn {\n  height: 52px;\n}\n.FormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn {\n  height: 52px;\n}\n.FormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn {\n  height: 28px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn {\n  height: 44px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn {\n  height: 26px;\n}\n.FormFile.hide-file-name.with-label.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name.with-label.variant-filled .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name.with-label.variant-standard .form-file-btn {\n  height: 28px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn {\n  height: 24px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn {\n  height: 31px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn {\n  height: 26px;\n}\n\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-filled .form-file-btn {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-standard .form-file-btn {\n  height: 28px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-outlined .form-file-btn {\n  height: 24px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-filled .form-file-btn {\n  height: 31px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-standard .form-file-btn {\n  height: 26px;\n}";
styleInject(css_248z$1);var FormFile = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    accept = _a.accept, hideUrl = _a.hideUrl, uploadLabel = _a.uploadLabel, uploadTabIndex = _a.uploadTabIndex, hideUpload = _a.hideUpload, hideUploadLabel = _a.hideUploadLabel, linkLabel = _a.linkLabel, linkTabIndex = _a.linkTabIndex, hideLink = _a.hideLink, hideLinkLabel = _a.hideLinkLabel, removeLabel = _a.removeLabel, removeTabIndex = _a.removeTabIndex, hideRemove = _a.hideRemove, hideRemoveLabel = _a.hideRemoveLabel, maxFileSize = _a.maxFileSize, preview = _a.preview, hidden = _a.hidden, onFile = _a.onFile, onLink = _a.onLink, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, initLabel = _a.label, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, initError = _a.error, helperText = _a.helperText, initValue = _a.value, initData = _a.data, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onRemoveValueItem = _b.onRemoveValueItem, onValueChangeByUser = _b.onValueChangeByUser;
    // Memo - FormState ------------------------------------------------------------------------------------------------
    var variant = useMemo(function () { return (initVariant == null ? formVariant : initVariant); }, [initVariant, formVariant]);
    var size = useMemo(function () { return (initSize == null ? formSize : initSize); }, [initSize, formSize]);
    var color = useMemo(function () { return (initColor == null ? formColor : initColor); }, [initColor, formColor]);
    var focused = useMemo(function () { return (initFocused == null ? formFocused : initFocused); }, [initFocused, formFocused]);
    var labelShrink = useMemo(function () { return (initLabelShrink == null ? formLabelShrink : initLabelShrink); }, [initLabelShrink, formLabelShrink]);
    var fullWidth = useMemo(function () { return (initFullWidth == null ? formFullWidth : initFullWidth); }, [initFullWidth, formFullWidth]);
    // Ref -------------------------------------------------------------------------------------------------------------
    var textFieldRef = useRef(null);
    var fileUploadBtnRef = useRef(null);
    var linkBtnRef = useRef(null);
    // State - value ---------------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initValue || ''), value = _c[0], setValue = _c[1];
    var fileValue = useState('')[0];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useState(), errorHelperText = _e[0], setErrorHelperText = _e[1];
    var _f = useAutoUpdateState$1(initDisabled), disabled = _f[0], setDisabled = _f[1];
    var _g = useState(false), isOpenLinkDialog = _g[0], setIsOpenLinkDialog = _g[1];
    var _h = useAutoUpdateState$1(initData), data = _h[0], setData = _h[1];
    var _j = useState({ open: false }), alertDialogProps = _j[0], setAlertDialogProps = _j[1];
    // Memo --------------------------------------------------------------------------------------------------------------
    var label = useMemo(function () {
        return labelIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React__default.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]);
    // Function - focus ------------------------------------------------------------------------------------------------
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
    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------
    var setErrorErrorHelperText = useCallback(function (error, errorHelperText) {
        setError(error);
        setErrorHelperText(errorHelperText);
    }, [setError]);
    // Function - validate ---------------------------------------------------------------------------------------------
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
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
        var lastData = data;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormFile'; },
            getName: function () { return name; },
            getReset: function () { return initValue || ''; },
            reset: function () {
                lastValue = initValue || '';
                setValue(lastValue);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = value;
                setValue(lastValue);
            },
            getData: function () { return lastData; },
            setData: function (data) {
                lastData = data;
                setData(data);
            },
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return lastDisabled; },
            setDisabled: function (disabled) {
                lastDisabled = disabled;
                setDisabled(disabled);
            },
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(value); },
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
        name,
        initValue,
        value,
        exceptValue,
        disabled,
        focus,
        validate,
        ref,
        onAddValueItem,
        onRemoveValueItem,
        id,
        setValue,
        setDisabled,
        setErrorErrorHelperText,
        data,
        setData,
    ]);
    // Function --------------------------------------------------------------------------------------------------------
    var fileSizeCheck = useCallback(function (file) {
        if (maxFileSize) {
            return new Promise(function (resolve, reject) {
                if (file instanceof File) {
                    if (file.size > maxFileSize) {
                        setAlertDialogProps({
                            open: true,
                            color: 'error',
                            title: '파일 사이즈',
                            content: (React__default.createElement("div", null,
                                React__default.createElement("div", null,
                                    React__default.createElement(Typography, { color: 'error' },
                                        getFileSizeText(maxFileSize),
                                        " \uC774\uD558\uC758 \uD30C\uC77C\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")),
                                React__default.createElement("div", { style: { opacity: 0.7 } },
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
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleFileChange = useCallback(function (e) {
        if (onFile) {
            var target = e.currentTarget;
            var file_1 = target.files[0];
            fileSizeCheck(file_1).then(function () {
                onFile(file_1).then(function (url) {
                    setValue(url);
                    nextTick(function () {
                        if (onValueChangeByUser)
                            onValueChangeByUser(name, url);
                    });
                });
            });
        }
    }, [fileSizeCheck, name, onFile, onValueChangeByUser, setValue]);
    var handleLinkClick = useCallback(function () {
        setIsOpenLinkDialog(true);
    }, []);
    var handleRemoveClick = useCallback(function () {
        setValue('');
        nextTick(function () {
            if (onValueChangeByUser)
                onValueChangeByUser(name, '');
        });
    }, [name, onValueChangeByUser, setValue]);
    var handleLinkDialogConfirm = useCallback(function (url) {
        if (onLink) {
            onLink(url).then(function (finalUrl) {
                setValue(finalUrl);
                nextTick(function () {
                    if (onValueChangeByUser)
                        onValueChangeByUser(name, finalUrl);
                });
            });
        }
        else {
            setValue(url);
            nextTick(function () {
                if (onValueChangeByUser)
                    onValueChangeByUser(name, url);
            });
        }
    }, [name, onLink, onValueChangeByUser, setValue]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormFile', "variant-".concat(variant), "size-".concat(size), !!initLabel && 'with-label', !!fullWidth && 'full-width', !!hideUrl && 'hide-file-name', !!hideLink && 'hide-link', !!hideUpload && 'hide-upload', !!hideRemove && 'hide-remove', notEmpty(value) && 'with-value'), labelIcon: hideUrl ? labelIcon : undefined, label: hideUrl ? initLabel : undefined, error: error, required: required, fullWidth: fullWidth, hidden: hidden, helperText: React__default.createElement("div", null,
            preview,
            React__default.createElement("div", null, error ? errorHelperText : helperText)), hideLabel: !hideUrl, helperTextProps: {
            style: {
                marginLeft: !hideUrl && variant !== 'standard' ? 14 : undefined,
                marginTop: !hideUrl && variant === 'standard' ? 19 : undefined,
            },
        }, style: { width: fullWidth ? '100%' : undefined }, control: React__default.createElement("div", { className: 'control-wrap' },
            !hideUrl && (React__default.createElement("div", { className: 'file-name-wrap' },
                React__default.createElement(TextField, { inputRef: textFieldRef, className: 'file-name', variant: variant, label: label, size: size, required: required, value: value || '', focused: focused, disabled: disabled, fullWidth: true, error: error, InputLabelProps: labelShrink ? { shrink: labelShrink } : undefined, inputProps: { readOnly: true }, InputProps: {
                        endAdornment: (React__default.createElement(InputAdornment, { position: 'end' },
                            React__default.createElement("div", { className: 'input-file-wrap' },
                                !hideUpload && (React__default.createElement(React__default.Fragment, null,
                                    React__default.createElement(Button, { variant: 'text', tabIndex: uploadTabIndex == null ? -1 : uploadTabIndex, className: classNames$1('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, disabled: readOnly || disabled, ref: fileUploadBtnRef },
                                        React__default.createElement("label", { htmlFor: id },
                                            React__default.createElement(FormIcon, null, "upload"),
                                            !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                                    React__default.createElement("input", { type: 'file', accept: accept, id: id, value: fileValue, className: 'input-file', onChange: handleFileChange }))),
                                !hideLink && (React__default.createElement(Button, { variant: 'text', tabIndex: linkTabIndex == null ? -1 : linkTabIndex, className: classNames$1('link-btn  form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, disabled: readOnly || disabled, ref: linkBtnRef, onClick: handleLinkClick },
                                    React__default.createElement("label", null,
                                        React__default.createElement(FormIcon, null, "link"),
                                        !hideLinkLabel && (linkLabel || '링크')))),
                                !hideRemove && notEmpty(value) && (React__default.createElement(Button, { variant: 'text', tabIndex: removeTabIndex == null ? -1 : removeTabIndex, className: classNames$1('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, disabled: readOnly || disabled, onClick: handleRemoveClick },
                                    React__default.createElement("label", null,
                                        React__default.createElement(FormIcon, null, "Close"),
                                        !hideRemoveLabel && (removeLabel || '삭제'))))))),
                    }, placeholder: '\uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694' }))),
            !!hideUrl && (React__default.createElement("div", { className: 'input-file-wrap' },
                !hideUpload && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(Button, { variant: 'outlined', tabIndex: uploadTabIndex, className: classNames$1('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label'), color: error ? 'error' : color, ref: fileUploadBtnRef, disabled: disabled },
                        React__default.createElement("label", { htmlFor: id },
                            React__default.createElement(FormIcon, null, "upload"),
                            !hideUploadLabel && (uploadLabel || '파일 업로드'))),
                    React__default.createElement("input", { type: 'file', accept: accept, id: id, value: fileValue, className: 'input-file', onChange: handleFileChange }))),
                !hideLink && (React__default.createElement(Button, { variant: 'outlined', tabIndex: linkTabIndex, className: classNames$1('link-btn form-file-btn', !!hideLinkLabel && 'hidden-label'), color: error ? 'error' : color, onClick: handleLinkClick, disabled: disabled, ref: linkBtnRef },
                    React__default.createElement("label", null,
                        React__default.createElement(FormIcon, null, "link"),
                        !hideLinkLabel && (linkLabel || '링크')))),
                !hideRemove && notEmpty(value) && (React__default.createElement(Button, { variant: 'outlined', tabIndex: removeTabIndex, className: classNames$1('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label'), color: error ? 'error' : color, disabled: disabled, onClick: handleRemoveClick },
                    React__default.createElement("label", null,
                        React__default.createElement(FormIcon, null, "Close"),
                        !hideRemoveLabel && (removeLabel || '삭제')))))),
            React__default.createElement(PrivateAlertDialog, __assign$7({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } })),
            React__default.createElement(LinkDialog, { open: isOpenLinkDialog, onConfirm: handleLinkDialogConfirm, onClose: function () { return setIsOpenLinkDialog(false); } })) }));
});
FormFile.displayName = 'FormFile';
FormFile.defaultProps = FormFileDefaultProps;var FormImageFileDefaultProps = __assign$7(__assign$7({}, FormFileDefaultProps), { accept: '.jpg,.jpeg,.png' });var css_248z = ".FormImageFile .preview-img {\n  max-width: 100%;\n}\n.FormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img {\n  padding-right: 14px;\n}";
styleInject(css_248z);var FormImageFile = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, imageSize = _a.imageSize, preview = _a.preview, previewMaxHeight = _a.previewMaxHeight, initValue = _a.value, onChange = _a.onChange, onFile = _a.onFile, onLink = _a.onLink, props = __rest$4(_a, ["className", "imageSize", "preview", "previewMaxHeight", "value", "onChange", "onFile", "onLink"]);
    var _b = useAutoUpdateState$1(initValue), value = _b[0], setValue = _b[1];
    var _c = useState({
        open: false,
    }), alertDialogProps = _c[0], setAlertDialogProps = _c[1];
    var urlKit = useState(function () {
        if (window.URL)
            return window.URL;
        else if (window.webkitURL)
            return window.webkitURL;
    })[0];
    // Function --------------------------------------------------------------------------------------------------------
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
                            content: (React__default.createElement(React__default.Fragment, null,
                                React__default.createElement("div", null,
                                    React__default.createElement(Typography, { color: 'error' },
                                        sizeText,
                                        " \uC0AC\uC774\uC988\uC758 \uC774\uBBF8\uC9C0\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")),
                                React__default.createElement("div", { style: { opacity: 0.7 } },
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
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (value) {
        setValue(value);
        onChange && onChange(value);
    }, [onChange, setValue]);
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
    // Memo --------------------------------------------------------------------------------------------------------------
    var previewNode = useMemo(function () {
        if (preview && value) {
            return (React__default.createElement("a", { href: value, target: '_blank' },
                React__default.createElement(Tooltip, { title: React__default.createElement("div", { style: { paddingTop: 3, paddingBottom: 3 } },
                        React__default.createElement("img", { src: value, style: { maxWidth: '100%', verticalAlign: 'middle' }, alt: '' })) },
                    React__default.createElement("img", { className: 'preview-img', src: value, style: { maxHeight: previewMaxHeight || undefined }, alt: '' }))));
        }
    }, [preview, previewMaxHeight, value]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(FormFile, __assign$7({ ref: ref, className: classNames$1(className, 'FormImageFile'), value: value, preview: previewNode, onChange: handleChange, onFile: handleFile, onLink: handleLink }, props)),
        React__default.createElement(PrivateAlertDialog, __assign$7({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } }))));
});
FormImageFile.displayName = 'FormImageFile';
FormImageFile.defaultProps = FormImageFileDefaultProps;var SearchDefaultProps = {
    color: 'primary',
};var SearchGroupRowDefaultProps = {};var SearchGroupRow = function (_a) {
    var children = _a.children, props = __rest$4(_a, ["children"]);
    return (React__default.createElement(FormRow, __assign$7({}, props),
        React__default.createElement(FormCol, null,
            React__default.createElement(Grid, { container: true, spacing: 1, alignItems: 'center' }, children))));
};
SearchGroupRow.displayName = 'SearchGroupRow';
SearchGroupRow.defaultProps = SearchGroupRowDefaultProps;var Search = React__default.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    color = _a.color, spacing = _a.spacing, focused = _a.focused, labelShrink = _a.labelShrink, autoSubmit = _a.autoSubmit, otherProps = __rest$4(_a, ["children", "className", "style", "sx", "color", "spacing", "focused", "labelShrink", "autoSubmit"]);
    var formRef = useRef();
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        var _a;
        if (autoSubmit) {
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Memo --------------------------------------------------------------------------------------------------------------
    var renderChildren = useMemo(function () {
        var rowItems = [];
        var basicRowItems = [];
        React__default.Children.forEach(children, function (child) {
            if (React__default.isValidElement(child)) {
                if (child.type.toString() === SearchGroupRow.toString()) {
                    rowItems.push(child);
                }
                else {
                    basicRowItems.push(child);
                }
            }
        });
        if (basicRowItems.length > 0) {
            return __spreadArray([React__default.createElement(SearchGroupRow, { key: '$basicRow$' }, basicRowItems)], rowItems, true);
        }
        else {
            return rowItems;
        }
    }, [children]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: {
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
        React__default.createElement(Paper, { variant: 'outlined', className: className, sx: __assign$7({ p: 1.5 }, sx), style: style },
            React__default.createElement(Form, __assign$7({ ref: function (commands) {
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
                React__default.createElement(FormBody, null, renderChildren)))));
});
Search.displayName = 'Search';
Search.defaultProps = SearchDefaultProps;var SearchGroupDefaultProps = {
    spacing: 1.5,
};var isReactFragment = function (child) {
    try {
        return child.type.toString() === React__default.Fragment.toString();
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
                    if (React__default.isValidElement(child)) {
                        return removeReactFragment(child);
                    }
                    else {
                        return React__default.createElement(Grid, { item: true }, child);
                    }
                });
            }
            else {
                return (React__default.createElement(Grid, { item: true, style: { display: el.type === FormHidden ? 'none' : undefined } }, el));
            }
        }
        else {
            return (React__default.createElement(Grid, { item: true, style: { display: el.type === FormHidden ? 'none' : undefined } }, el));
        }
    }
    else {
        return (React__default.createElement(Grid, { item: true, style: { display: el.type === FormHidden ? 'none' : undefined } }, el));
    }
};
var SearchGroup = function (_a) {
    // State -----------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    max = _a.max, align = _a.align, hidden = _a.hidden, spacing = _a.spacing;
    var justifyContent = useMemo(function () {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Grid, { item: true, className: classNames$1(className, 'SearchGroup'), style: { flex: max ? 1 : undefined, display: hidden ? 'none' : undefined } },
        React__default.createElement(Grid, { container: true, wrap: 'wrap', spacing: spacing, justifyContent: justifyContent, alignItems: 'start', style: style, sx: sx }, React__default.Children.map(children, function (child) {
            if (React__default.isValidElement(child)) {
                return removeReactFragment(child);
            }
            else {
                return child;
            }
        }))));
};
SearchGroup.defaultProps = SearchGroupDefaultProps;var SearchButtonDefaultProps = {};var SearchButton = function (_a) {
    // Memo --------------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, initSx = _a.sx, startIcon = _a.startIcon, endIcon = _a.endIcon, icon = _a.icon, props = __rest$4(_a, ["children", "className", "sx", "startIcon", "endIcon", "icon"]);
    var sx = useMemo(function () { return (__assign$7({ minWidth: 0, px: !startIcon && !endIcon && !icon ? 1.2 : 1.7 }, initSx)); }, [endIcon, icon, initSx, startIcon]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormButton, __assign$7({ className: classNames$1(className, 'SearchButton'), size: 'medium', sx: sx, fullWidth: false, startIcon: startIcon, endIcon: endIcon, icon: icon }, props), children));
};
SearchButton.defaultProps = SearchButtonDefaultProps;var SearchMenuButtonDefaultProps = {};var SearchMenuButton = function (_a) {
    // ID ----------------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, initSx = _a.sx, menuList = _a.menuList, startIcon = _a.startIcon, icon = _a.icon, placement = _a.placement, props = __rest$4(_a, ["children", "className", "sx", "menuList", "startIcon", "icon", "placement"]);
    var buttonId = useId();
    var menuId = useId();
    // State -------------------------------------------------------------------------------------------------------------
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var _c = useState('ArrowDropDown'), endIcon = _c[0], setEndIcon = _c[1];
    // Event Handler -----------------------------------------------------------------------------------------------------
    var handleClick = useCallback(function (e) {
        setAnchorEl(e.currentTarget);
        setEndIcon('ArrowDropUp');
    }, []);
    var handleClose = useCallback(function () {
        setAnchorEl(null);
        setEndIcon('ArrowDropDown');
    }, []);
    // Memo --------------------------------------------------------------------------------------------------------------
    var open = useMemo(function () { return !!anchorEl; }, [anchorEl]);
    var sx = useMemo(function () { return (__assign$7({ minWidth: 0, px: !startIcon && !endIcon && !icon ? 1.2 : 1.7 }, initSx)); }, [endIcon, icon, initSx, startIcon]);
    var anchorOrigin = useMemo(function () {
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
    var transformOrigin = useMemo(function () {
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(FormButton, __assign$7({ className: classNames$1(className, 'SearchMenuButton'), size: 'medium', sx: sx, fullWidth: false, startIcon: startIcon, icon: icon }, props, { id: buttonId, "aria-controls": open ? menuId : undefined, "aria-haspopup": 'true', "aria-expanded": open ? 'true' : undefined, endIcon: endIcon, onClick: handleClick }), children),
        React__default.createElement(Menu, { id: menuId, "aria-labelledby": buttonId, anchorEl: anchorEl, open: open, onClose: handleClose, onClick: handleClose, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin }, menuList)));
};
SearchMenuButton.defaultProps = SearchMenuButtonDefaultProps;export{Form,FormAutocomplete,FormAutocompleteDefaultProps,FormBlock,FormBlockDefaultProps,FormBody,FormBodyDefaultProps,FormButton,FormButtonDefaultProps,FormCheckbox,FormCheckboxDefaultProps,FormCol,FormColDefaultProps,FormCompanyNo,FormCompanyNoDefaultProps,FormContext,FormContextDefaultValue,FormContextProvider,FormDatePicker,FormDatePickerDefaultProps,FormDateRangePicker,FormDateRangePickerDefaultProps,FormDateTimePicker,FormDateTimePickerDefaultProps,FormDefaultProps,FormDivider,FormDividerDefaultProps,FormEmail,FormEmailDefaultProps,FormFile,FormFileDefaultProps,FormFooter,FormFooterDefaultProps,FormHidden,FormHiddenDefaultProps,FormIcon,FormIconDefaultProps,FormImageFile,FormImageFileDefaultProps,FormLabel,FormLabelDefaultProps,FormMobile,FormMobileDefaultProps,FormNumber,FormNumberDefaultProps,FormPassword,FormPasswordDefaultProps,FormPersonalNo,FormPersonalNoDefaultProps,FormRadioGroup,FormRadioGroupDefaultProps,FormRating,FormRatingDefaultProps,FormRow,FormRowDefaultProps,FormSearch,FormSearchDefaultProps,FormSelect,FormSelectDefaultProps,FormTag,FormTagDefaultProps,FormTel,FormTelDefaultProps,FormText,FormTextDefaultProps,FormTextEditor,FormTextEditorDefaultProps,FormTextField,FormTextFieldDefaultProps,FormTextarea,FormTextareaDefaultProps,FormTimePicker,FormTimePickerDefaultProps,FormToggleButtonGroup,FormToggleButtonGroupDefaultProps,FormUrl,FormUrlDefaultProps,Search,SearchButton,SearchButtonDefaultProps,SearchDefaultProps,SearchGroup,SearchGroupDefaultProps,SearchGroupRow,SearchGroupRowDefaultProps,SearchMenuButton,SearchMenuButtonDefaultProps,useFormState};//# sourceMappingURL=index.esm.js.map
