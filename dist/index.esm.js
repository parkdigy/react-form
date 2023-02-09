import*as React from'react';import React__default,{useRef,useEffect,useState,useCallback,useLayoutEffect,createContext,useContext,cloneElement,isValidElement,createRef,PureComponent,useId}from'react';import {Box,Grid,Icon as Icon$1,Button,InputLabel,styled,FormHelperText,InputAdornment,IconButton,TextField,Chip,Autocomplete,CircularProgress,MenuItem,Checkbox,FormControl,Input,OutlinedInput,FilledInput,FormControlLabel,Typography,useTheme,RadioGroup,Radio,ToggleButtonGroup,ToggleButton,Rating,Skeleton,darken,Tooltip,tooltipClasses,ClickAwayListener,Dialog,DialogTitle,DialogContent,DialogActions,Paper}from'@mui/material';import dayjs from'dayjs';import {findDOMNode}from'react-dom';import {CheckBox,CheckBoxOutlineBlank,RadioButtonUnchecked,RadioButtonChecked}from'@mui/icons-material';import CircularProgress$1 from'@mui/material/CircularProgress';import {AdapterDayjs}from'@mui/x-date-pickers/AdapterDayjs';import {PickersDay,StaticDatePicker,LocalizationProvider,DesktopDatePicker}from'@mui/x-date-pickers';import dayjsLocale from'dayjs/locale/ko';import dayjsIsSameOrAfter from'dayjs/plugin/isSameOrAfter';import dayjsIsSameOrBefore from'dayjs/plugin/isSameOrBefore';import dayjsIsBetween from'dayjs/plugin/isBetween';/******************************************************************************
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

var __assign$4 = function() {
    __assign$4 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};

function __rest$2(s, e) {
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
}var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};var classnames$1 = {exports: {}};/*!
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

var classNames$1 = classnames$1.exports;function useFirstSkipEffect$1(effect, deps) {
    var firstRef = useRef(true);
    useEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}var isSame$2 = function (v1, v2) {
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
        if (!isSame$2(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipEffect$1(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame$2(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame$2(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}function useFirstSkipLayoutEffect(effect, deps) {
    var firstRef = useRef(true);
    useLayoutEffect(function () {
        if (firstRef.current) {
            firstRef.current = false;
        }
        else {
            effect();
        }
    }, deps);
}function useAutoUpdateLayoutState(p1, p2) {
    var state = typeof p1 === 'function' ? undefined : p1;
    var finalStateCallback = typeof p1 === 'function' ? p1 : p2;
    var _a = useState(0), setUpdateKey = _a[1];
    var _initState = useState(function () {
        return finalStateCallback ? finalStateCallback(state, 0) : state;
    })[0];
    var _state = useRef(_initState);
    var forceUpdate = useCallback(function () {
        setUpdateKey(function (updateKey) { return updateKey + 1; });
    }, []);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(state) : state;
        if (!isSame$2(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [state]);
    useFirstSkipLayoutEffect(function () {
        var newState = finalStateCallback ? finalStateCallback(_state.current) : _state.current;
        if (!isSame$2(newState, _state.current)) {
            _state.current = newState;
            forceUpdate();
        }
    }, [finalStateCallback]);
    var setState = useCallback(function (newState) {
        var finalNewState = typeof newState === 'function' ? newState(_state.current) : newState;
        if (!isSame$2(_state.current, finalNewState)) {
            _state.current = finalNewState;
            forceUpdate();
        }
    }, []);
    return [_state.current, setState];
}var empty$1 = function (v) {
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
    return !empty$1(v);
};
var isSame$1 = function (v1, v2) {
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
}var nextTick = function (callback) {
    setTimeout(callback, 1);
};var FormDefaultProps = {
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    spacing: 2,
    formColGap: 1.5,
    fullWidth: true,
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
    var className = _a.className, children = _a.children, style = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFormColGap = _a.formColGap, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    onSubmit = _a.onSubmit, onValueChange = _a.onValueChange, onValueChangeByUser = _a.onValueChangeByUser;
    var _b = useFormState(), formId = _b.id, formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFormColGap = _b.formColGap, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formAddValueItem = _b.onAddValueItem, formRemoveValueItem = _b.onRemoveValueItem, formValueChange = _b.onValueChange, formValueChangeByUser = _b.onValueChangeByUser, otherFormState = __rest$2(_b, ["id", "variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "onAddValueItem", "onRemoveValueItem", "onValueChange", "onValueChangeByUser"]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var spacing = useAutoUpdateState$1(initSpacing == null ? formSpacing : initSpacing)[0];
    var formColGap = useAutoUpdateState$1(initFormColGap == null ? formFormColGap : initFormColGap)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
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
                if (empty$1(value)) {
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
    }, [valueItems, getItemFormValue]);
    // Function - submit -----------------------------------------------------------------------------------------------
    var submit = useCallback(function () {
        var isAllValid = true;
        var firstInvalidItemId;
        var data = {};
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
                        if (isAllValid) {
                            isAllValid = false;
                            firstInvalidItemId = id;
                        }
                    }
                }
            }
        });
        if (isAllValid) {
            if (onSubmit)
                onSubmit(data);
        }
        else {
            nextTick(function () {
                var _a;
                (_a = valueItems[firstInvalidItemId]) === null || _a === void 0 ? void 0 : _a.focusValidate();
            });
        }
    }, [valueItems, appendFormValueData, onSubmit]);
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
    return (React__default.createElement(FormContextProvider, { value: __assign$4({ id: formId || 'form', variant: variant, size: size, color: color, spacing: spacing, formColGap: formColGap, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, onAddValueItem: function (id, item) {
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
        React__default.createElement(Box, { className: classNames$1('Form', "Form-variant-".concat(variant), className), component: 'form', ref: formRef, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit, style: style, sx: sx },
            React__default.createElement(Grid, { container: true, spacing: spacing, direction: 'column' }, children))));
});
Form.displayName = 'Form';
Form.defaultProps = FormDefaultProps;var FormButtonDefaultProps = {
    type: 'button',
};var FormIconDefaultProps = {};var FormIcon = React__default.forwardRef(function (_a, ref) {
    // State - children ------------------------------------------------------------------------------------------------
    var className = _a.className, initChildren = _a.children, props = __rest$2(_a, ["className", "children"]);
    var children = useAutoUpdateState$1(useCallback(function () {
        return initChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); });
    }, [initChildren]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Icon$1, __assign$4({ ref: ref }, props, { className: classNames$1('FormIcon', className) }), children));
});
FormIcon.displayName = 'FormIcon';
FormIcon.defaultProps = FormIconDefaultProps;var FormButton = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initSize = _a.size, initColor = _a.color, initVariant = _a.variant, initFullWidth = _a.fullWidth, children = _a.children, className = _a.className, type = _a.type, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest$2(_a, ["size", "color", "variant", "fullWidth", "children", "className", "type", "icon", "startIcon", "endIcon", "onClick"]);
    var _b = useFormState(), formSize = _b.size, formColor = _b.color, formFullWidth = _b.fullWidth;
    // State - FormState -----------------------------------------------------------------------------------------------
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State - variant -------------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(useCallback(function () {
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
    }, [initVariant, type]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Button, __assign$4({ ref: ref, className: classNames$1(className, 'FormButton'), type: type, variant: variant, size: size, color: color, fullWidth: fullWidth, onClick: onClick, startIcon: startIcon ? React__default.createElement(FormIcon, { sx: { mr: -0.5 } }, startIcon) : undefined, endIcon: endIcon ? React__default.createElement(FormIcon, { sx: { ml: -0.5 } }, endIcon) : undefined }, props),
        icon && (React__default.createElement(FormIcon, { fontSize: size, color: 'inherit', sx: { mr: children ? 0.5 : undefined } }, icon)),
        children));
});
FormButton.displayName = 'FormButton';
FormButton.defaultProps = FormButtonDefaultProps;var FormLabelDefaultProps = {};var FormLabel = React__default.forwardRef(function (_a, ref) {
    var children = _a.children, icon = _a.icon, size = _a.size, style = _a.style, props = __rest$2(_a, ["children", "icon", "size", "style"]);
    return (React__default.createElement(InputLabel, __assign$4({ ref: ref, shrink: true, className: 'FormItemBase-InputLabel', size: size === 'medium' ? 'normal' : size }, props, { style: __assign$4({ height: 20, transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined }, style) }), icon ? (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 } }, icon),
        React__default.createElement("span", { style: { verticalAlign: 'middle' } }, children))) : (children)));
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabelDefaultProps;var FormBlockDefaultProps = {};var FormDividerDefaultProps = {
    lineVerticalMargin: 9,
};var DEFAULT_LINE_STYLE = { flex: 1, position: 'relative' };
var FormDivider = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initSize = _a.size, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, hidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var formSize = useFormState().size;
    // State - FormState -----------------------------------------------------------------------------------------------
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (hidden) {
            return __assign$4(__assign$4({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [initStyle, hidden]))[0];
    // State - lineStyle -----------------------------------------------------------------------------------------------
    var lineStyle = useAutoUpdateState$1(useCallback(function () {
        if (lineVerticalMargin) {
            return __assign$4(__assign$4({}, DEFAULT_LINE_STYLE), { marginTop: lineVerticalMargin, marginBottom: lineVerticalMargin });
        }
        else {
            return DEFAULT_LINE_STYLE;
        }
    }, [lineVerticalMargin]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Grid, { ref: ref, item: true, xs: 12, style: style, className: className, sx: sx },
        React__default.createElement(Box, { sx: { display: 'flex', py: 1, alignItems: 'center', justifyItems: 'center', padding: 0 } },
            icon && (React__default.createElement(FormIcon, { style: { opacity: 0.54, marginRight: 5 }, fontSize: size }, icon)),
            label && (React__default.createElement(Box, { sx: {
                    paddingRight: '10px',
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: size === 'small' ? '11.5px' : '12px',
                } }, label)),
            line && (React__default.createElement("div", { style: lineStyle },
                React__default.createElement("div", { style: {
                        borderBottom: 'thin solid #dfdfdf',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        width: '100%',
                    } }))))));
});
FormDivider.displayName = 'FormDivider.';
FormDivider.defaultProps = FormDividerDefaultProps;var StyledWrapGrid$1 = styled(Grid)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$2;var FormBlock = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, 
    //----------------------------------------------------------------------------------------------------------------
    hidden = _a.hidden, 
    //----------------------------------------------------------------------------------------------------------------
    children = _a.children, className = _a.className, initStyle = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, otherFormState = __rest$2(_b, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var spacing = useAutoUpdateState$1(initSpacing == null ? formSpacing : initSpacing)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (hidden) {
            return __assign$4(__assign$4({}, initStyle), { display: 'none' });
        }
        else {
            return initStyle;
        }
    }, [initStyle, hidden]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContext.Provider, { value: __assign$4({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth }, otherFormState) },
        (icon || label || line) && (React__default.createElement(FormDivider, { size: size, icon: icon, color: color, label: label, line: line, lineVerticalMargin: lineVerticalMargin, hidden: hidden })),
        React__default.createElement(StyledWrapGrid$1, { ref: ref, item: true, xs: 12, className: classNames$1(className, 'FormBlock'), style: style, sx: sx },
            React__default.createElement(Grid, { container: true, spacing: spacing }, children))));
});
FormBlock.displayName = 'FormBlock';
FormBlock.defaultProps = FormBlockDefaultProps;var FormRowDefaultProps = {};var StyledWrapGrid = styled(Grid)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$1;var FormRow = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    icon = _a.icon, label = _a.label, line = _a.line, lineVerticalMargin = _a.lineVerticalMargin, 
    //----------------------------------------------------------------------------------------------------------------
    hidden = _a.hidden, error = _a.error, helperText = _a.helperText, 
    //----------------------------------------------------------------------------------------------------------------
    children = _a.children, className = _a.className, initStyle = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, otherFormState = __rest$2(_b, ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var spacing = useAutoUpdateState$1(initSpacing == null ? formSpacing : initSpacing)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State -----------------------------------------------------------------------------------------------------------
    var formCols = useState({})[0];
    var _c = useState(12), formColAutoXs = _c[0], setFormColAutoXs = _c[1];
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        var style = __assign$4({ width: '100%' }, initStyle);
        if (hidden) {
            style.display = 'none';
        }
        return style;
    }, [initStyle, hidden]))[0];
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
    }, []);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddFormCol = useCallback(function (id, xs) {
        formCols[id] = xs;
        makeFormColXs();
    }, []);
    var handleRemoveFormCol = useCallback(function (id) {
        delete formCols[id];
        makeFormColXs();
    }, []);
    //------------------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContext.Provider, { value: __assign$4({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColAutoXs: formColAutoXs, onAddFormCol: handleAddFormCol, onRemoveFormCol: handleRemoveFormCol }, otherFormState) },
        (icon || label || line) && (React__default.createElement(FormDivider, { size: size, icon: icon, color: color, label: label, line: line, lineVerticalMargin: lineVerticalMargin, hidden: hidden })),
        React__default.createElement(StyledWrapGrid, { ref: ref, item: true, className: classNames$1(className, 'FormRow'), xs: 12, style: style, sx: sx },
            React__default.createElement(Grid, { container: true, spacing: spacing, direction: 'row', style: { flexWrap: 'nowrap' } }, children),
            helperText && (React__default.createElement(FormHelperText, { component: 'div', error: error }, helperText)))));
});
FormRow.displayName = 'FormRow';
FormRow.defaultProps = FormRowDefaultProps;/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$3 = function() {
    __assign$3 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
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
}var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};/**
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

function isObject$3$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3$1;/** Detect free variable `global` from Node.js. */

var freeGlobal$1$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1$1;var freeGlobal$3 = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf$3 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2$1 = freeGlobal$3 || freeSelf$3 || Function('return this')();

var _root = root$2$1;var root$1$1 = _root;

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
var now$1$1 = function() {
  return root$1$1.Date.now();
};

var now_1 = now$1$1;/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$1;var root$3 = _root;

/** Built-in value references. */
var Symbol$2$1 = root$3.Symbol;

var _Symbol = Symbol$2$1;var Symbol$1$1 = _Symbol;

/** Used for built-in method references. */
var objectProto$1$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$1$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1$1 ? Symbol$1$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$2.call(value, symToStringTag$1),
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
}

var _getRawTag = getRawTag$1;/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1$1;var Symbol$3 = _Symbol,
    getRawTag = _getRawTag,
    objectToString$4 = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString$4(value);
}

var _baseGetTag = baseGetTag$1;/**
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

function isObjectLike$1$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1$1;var baseGetTag = _baseGetTag,
    isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag$2 = '[object Symbol]';

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
function isSymbol$1$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$2(value) && baseGetTag(value) == symbolTag$2);
}

var isSymbol_1 = isSymbol$1$1;var baseTrim = _baseTrim,
    isObject$2$1 = isObject_1,
    isSymbol$5 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN$2 = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$2 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$2 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$2 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$2 = parseInt;

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
function toNumber$1$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$5(value)) {
    return NAN$2;
  }
  if (isObject$2$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary$2.test(value);
  return (isBinary || reIsOctal$2.test(value))
    ? freeParseInt$2(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$2.test(value) ? NAN$2 : +value);
}

var toNumber_1 = toNumber$1$1;var isObject$1$1 = isObject_1,
    now$2 = now_1,
    toNumber$2 = toNumber_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$1$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max,
    nativeMin$2 = Math.min;

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
function debounce$1$1(func, wait, options) {
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
    throw new TypeError(FUNC_ERROR_TEXT$1$1);
  }
  wait = toNumber$2(wait) || 0;
  if (isObject$1$1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$2(toNumber$2(options.maxWait) || 0, wait) : maxWait;
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
      ? nativeMin$2(timeWaiting, maxWait - timeSinceLastInvoke)
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

var debounce_1 = debounce$1$1;var debounce$2 = debounce_1,
    isObject$h = isObject_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$3 = 'Expected a function';

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
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  if (isObject$h(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$2(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle$1;var patchResizeHandler = function (resizeCallback, refreshMode, refreshRate, refreshOptions) {
    switch (refreshMode) {
        case 'debounce':
            return debounce_1(resizeCallback, refreshRate, refreshOptions);
        case 'throttle':
            return throttle_1(resizeCallback, refreshRate, refreshOptions);
        default:
            return resizeCallback;
    }
};
var isFunction$2 = function (fn) { return typeof fn === 'function'; };
var isSSR = function () { return typeof window === 'undefined'; };
var isDOMElement = function (element) { return element instanceof Element || element instanceof HTMLDocument; };
var createNotifier = function (onResize, setSize, handleWidth, handleHeight) {
    return function (_a) {
        var width = _a.width, height = _a.height;
        setSize(function (prev) {
            if (prev.width === width && prev.height === height) {
                // skip if dimensions haven't changed
                return prev;
            }
            if ((prev.width === width && !handleHeight) || (prev.height === height && !handleWidth)) {
                // process `handleHeight/handleWidth` props
                return prev;
            }
            if (onResize && isFunction$2(onResize)) {
                onResize(width, height);
            }
            return { width: width, height: height };
        });
    };
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
            var notifyResize = createNotifier(onResize, _this.setState.bind(_this), handleWidth, handleHeight);
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
            if (isFunction$2(render)) {
                // DEPRECATED. Use `Child Function Pattern` instead
                return 'renderProp';
            }
            if (isFunction$2(children)) {
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
        _this.skipOnMount = skipOnMount;
        _this.targetRef = createRef();
        _this.observableElement = null;
        if (isSSR()) {
            return _this;
        }
        _this.resizeHandler = patchResizeHandler(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
        _this.resizeObserver = new window.ResizeObserver(_this.resizeHandler);
        return _this;
    }
    ResizeDetector.prototype.componentDidMount = function () {
        this.attachObserver();
    };
    ResizeDetector.prototype.componentDidUpdate = function () {
        this.attachObserver();
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
        var typedChildren;
        switch (renderType) {
            case 'renderProp':
                return render && render(childProps);
            case 'childFunction':
                typedChildren = children;
                return typedChildren(childProps);
            case 'child':
                // @TODO bug prone logic
                typedChildren = children;
                if (typedChildren.type && typeof typedChildren.type === 'string') {
                    // child is a native DOM elements such as div, span etc
                    childProps.targetRef; var nativeProps = __rest$1(childProps, ["targetRef"]);
                    return cloneElement(typedChildren, nativeProps);
                }
                // class or functional component otherwise
                return cloneElement(typedChildren, childProps);
            case 'childArray':
                typedChildren = children;
                return typedChildren.map(function (el) { return !!el && cloneElement(el, childProps); });
            default:
                return React.createElement(WrapperTag, null);
        }
    };
    return ResizeDetector;
})(PureComponent));var useEnhancedEffect = isSSR() ? useEffect : useLayoutEffect;
function useResizeDetector(props) {
    if (props === void 0) { props = {}; }
    var _a = props.skipOnMount, skipOnMount = _a === void 0 ? false : _a, refreshMode = props.refreshMode, _b = props.refreshRate, refreshRate = _b === void 0 ? 1000 : _b, refreshOptions = props.refreshOptions, _c = props.handleWidth, handleWidth = _c === void 0 ? true : _c, _d = props.handleHeight, handleHeight = _d === void 0 ? true : _d, targetRef = props.targetRef, observerOptions = props.observerOptions, onResize = props.onResize;
    var skipResize = useRef(skipOnMount);
    var localRef = useRef(null);
    var ref = (targetRef !== null && targetRef !== void 0 ? targetRef : localRef);
    var resizeHandler = useRef();
    var _e = useState({
        width: undefined,
        height: undefined
    }), size = _e[0], setSize = _e[1];
    useEnhancedEffect(function () {
        if (isSSR()) {
            return;
        }
        var notifyResize = createNotifier(onResize, setSize, handleWidth, handleHeight);
        var resizeCallback = function (entries) {
            if (!handleWidth && !handleHeight)
                return;
            entries.forEach(function (entry) {
                var _a = (entry && entry.contentRect) || {}, width = _a.width, height = _a.height;
                var shouldSetSize = !skipResize.current && !isSSR();
                if (shouldSetSize) {
                    notifyResize({ width: width, height: height });
                }
                skipResize.current = false;
            });
        };
        resizeHandler.current = patchResizeHandler(resizeCallback, refreshMode, refreshRate, refreshOptions);
        var resizeObserver = new window.ResizeObserver(resizeHandler.current);
        if (ref.current) {
            // Something wrong with typings here...
            resizeObserver.observe(ref.current, observerOptions);
        }
        return function () {
            resizeObserver.disconnect();
            var patchedResizeHandler = resizeHandler.current;
            if (patchedResizeHandler && patchedResizeHandler.cancel) {
                patchedResizeHandler.cancel();
            }
        };
    }, [refreshMode, refreshRate, refreshOptions, handleWidth, handleHeight, onResize, observerOptions, ref.current]);
    return __assign$3({ ref: ref }, size);
}var FormColDefaultProps = {};var FormCol = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initSpacing = _a.spacing, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    initGap = _a.gap, icon = _a.icon, label = _a.label, hidden = _a.hidden, error = _a.error, helperText = _a.helperText, helperTextShift = _a.helperTextShift, 
    //----------------------------------------------------------------------------------------------------------------
    xs = _a.xs, className = _a.className, children = _a.children, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formSpacing = _b.spacing, formFormColGap = _b.formColGap, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColAutoXs = _b.formColAutoXs, onAddFormCol = _b.onAddFormCol, onRemoveFormCol = _b.onRemoveFormCol, otherFormState = __rest$2(_b, ["variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "formColAutoXs", "onAddFormCol", "onRemoveFormCol"]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var spacing = useAutoUpdateState$1(initSpacing == null ? formSpacing : initSpacing)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State - Gap -----------------------------------------------------------------------------------------------------
    var gap = useAutoUpdateState$1(initGap == null ? formFormColGap : initGap)[0];
    // ResizeDetector --------------------------------------------------------------------------------------------------
    var _c = useResizeDetector(), formColWidth = _c.width, resizeDetectorRef = _c.ref;
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (hidden) {
            return __assign$4(__assign$4({}, initStyle), { display: 'none' });
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
    }, [xs]);
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (ref) {
            if (typeof ref === 'function') {
                ref(resizeDetectorRef.current);
            }
            else {
                ref.current = resizeDetectorRef.current;
            }
        }
    }, []);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$4({ variant: variant, size: size, color: color, spacing: spacing, focused: focused, labelShrink: labelShrink, fullWidth: fullWidth, formColXs: xs || formColAutoXs || 12, formColWidth: formColWidth, formColWithLabel: !!label, formColWithHelperText: !!helperText }, otherFormState) },
        React__default.createElement(Grid, { ref: resizeDetectorRef, item: true, xs: xs || formColAutoXs || 12, className: classNames$1(className, 'FormCol', !!label && 'with-label', !!helperText && 'with-helper-text'), style: style, sx: sx },
            React__default.createElement(Grid, { container: true, direction: 'column' },
                label && (React__default.createElement(Grid, { item: true },
                    React__default.createElement("div", { style: { position: 'relative', height: 20 } },
                        React__default.createElement(FormLabel, { className: 'FormCol-FormLabel', size: size, icon: icon, focused: focused, color: color, error: error, style: { position: 'absolute', left: 5, top: 0 } }, label)))),
                React__default.createElement(Grid, { item: true, xs: 2 },
                    React__default.createElement(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: gap } }, children)),
                helperText && (React__default.createElement(Grid, { item: true },
                    React__default.createElement(FormHelperText, { component: 'div', error: error, style: { marginLeft: helperTextShift ? 14 : 5 } }, helperText)))))));
});
FormCol.displayName = 'FormCol';
FormCol.defaultProps = FormColDefaultProps;var FormTextFieldDefaultProps = {};function styleInject(css, ref) {
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
}var css_248z$i = ".FormTextField {\n  min-width: 200px;\n}\n.FormTextField .clear-icon-button-wrap {\n  visibility: hidden;\n}\n.FormTextField.variant-filled .clear-icon-button-wrap {\n  margin-top: 9px;\n  margin-bottom: -9px;\n}\n.FormTextField:hover .clear-icon-button-wrap.show,\n.FormTextField .MuiInputBase-root.Mui-focused .clear-icon-button-wrap.show {\n  visibility: visible;\n}";
styleInject(css_248z$i);var FormTextField = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var _b;
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, required = _a.required, initValue = _a.value, icon = _a.icon, labelIcon = _a.labelIcon, initLabel = _a.label, initError = _a.error, initHelperText = _a.helperText, exceptValue = _a.exceptValue, readOnly = _a.readOnly, initDisabled = _a.disabled, placeholder = _a.placeholder, maxLength = _a.maxLength, clear = _a.clear, width = _a.width, initMuiInputProps = _a.InputProps, initMuiInputLabelProps = _a.InputLabelProps, initInputProps = _a.inputProps, initInputRef = _a.inputRef, select = _a.select, SelectProps = _a.SelectProps, multiline = _a.multiline, validPattern = _a.validPattern, invalidPattern = _a.invalidPattern, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, noFormValueItem = _a.noFormValueItem, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest$2(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "required", "value", "icon", "labelIcon", "label", "error", "helperText", "exceptValue", "readOnly", "disabled", "placeholder", "maxLength", "clear", "width", "InputProps", "InputLabelProps", "inputProps", "inputRef", "select", "SelectProps", "multiline", "validPattern", "invalidPattern", "startAdornment", "endAdornment", "noFormValueItem", "onChange", "onValue", "onValidate", "onBlur", "onKeyDown", "className", "style"]);
    var id = useId();
    // Ref -------------------------------------------------------------------------------------------------------------
    var inputRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _c = useFormState(), formVariant = _c.variant, formSize = _c.size, formColor = _c.color, formFocused = _c.focused, formLabelShrink = _c.labelShrink, formFullWidth = _c.fullWidth, formColWithHelperText = _c.formColWithHelperText, onAddValueItem = _c.onAddValueItem, onRemoveValueItem = _c.onRemoveValueItem, onValueChange = _c.onValueChange, onValueChangeByUser = _c.onValueChangeByUser, onRequestSearchSubmit = _c.onRequestSearchSubmit;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useAutoUpdateState$1(initHelperText), helperText = _e[0], setHelperText = _e[1];
    var _f = useState(false), showClear = _f[0], setShowClear = _f[1];
    var _g = useAutoUpdateState$1(initDisabled), disabled = _g[0], setDisabled = _g[1];
    // State - muiInputLabelProps --------------------------------------------------------------------------------------
    var muiInputLabelProps = useAutoUpdateState$1(useCallback(function () {
        if (labelShrink || placeholder) {
            return __assign$4(__assign$4({}, initMuiInputLabelProps), { shrink: true });
        }
        else {
            return initMuiInputLabelProps;
        }
    }, [initMuiInputLabelProps, labelShrink, placeholder]))[0];
    // State - inputProps ----------------------------------------------------------------------------------------------
    var inputProps = useAutoUpdateState$1(useCallback(function () {
        if (readOnly != null || maxLength != null) {
            var finalInputProps = __assign$4(__assign$4({}, initInputProps), { readOnly: readOnly, maxLength: maxLength });
            if (readOnly) {
                finalInputProps.className = classNames$1(finalInputProps.className, 'Mui-disabled');
            }
            return finalInputProps;
        }
        else {
            return initInputProps;
        }
    }, [initInputProps, readOnly, maxLength]))[0];
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (width != null) {
            return __assign$4(__assign$4({}, initStyle), { width: width });
        }
        else {
            return initStyle;
        }
    }, [initStyle, width]))[0];
    // State - label ---------------------------------------------------------------------------------------------------
    var label = useAutoUpdateState$1(useCallback(function () {
        return labelIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React__default.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]))[0];
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _h = useAutoUpdateState$1(initValue, getFinalValue), value = _h[0], setValue = _h[1];
    useEffect(function () {
        setShowClear(clear ? notEmpty(value) : false);
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
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        if (required && empty$1(value)) {
            setErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (notEmpty(value) && validPattern) {
            if (!new RegExp(validPattern).test(value)) {
                setErrorHelperText(true, '형식이 일치하지 않습니다.');
                return false;
            }
        }
        if (notEmpty(value) && invalidPattern) {
            if (new RegExp(invalidPattern).test(value)) {
                setErrorHelperText(true, '형식이 일치하지 않습니다.');
                return false;
            }
        }
        if (onValidate) {
            var validateResult = onValidate(value);
            if (validateResult != null && validateResult !== true) {
                setErrorHelperText(true, validateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [required, validPattern, invalidPattern, onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // State - muiInputProps -------------------------------------------------------------------------------------------
    var muiInputProps = useAutoUpdateState$1(useCallback(function () {
        var muiInputProps = __assign$4({}, initMuiInputProps);
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
        initMuiInputProps,
        icon,
        getFinalValue,
        startAdornment,
        endAdornment,
        clear,
        readOnly,
        disabled,
        showClear,
        focus,
        name,
        noFormValueItem,
        onValueChangeByUser,
        onRequestSearchSubmit,
    ]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || (!noFormValueItem && onAddValueItem)) {
            var lastValue_1 = value;
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
                    return setErrorHelperText(error, error ? errorText : initHelperText);
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
        getFinalValue,
        exceptValue,
        disabled,
        focus,
        validate,
        ref,
        noFormValueItem,
        onAddValueItem,
        onRemoveValueItem,
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
    }, [name, getFinalValue, select, noFormValueItem, onValueChangeByUser, onRequestSearchSubmit]);
    var handleBlur = useCallback(function (e) {
        if (error)
            validate(value);
        if (onBlur)
            onBlur(e);
    }, [error, value, validate, onBlur]);
    var handleKeyDown = useCallback(function (e) {
        if (!select && !multiline && !noFormValueItem && ['Enter'].includes(e.key)) {
            e.preventDefault();
            e.stopPropagation();
            onRequestSearchSubmit(name, value);
        }
        if (onKeyDown)
            onKeyDown(e);
    }, [select, multiline, name, value, noFormValueItem, onRequestSearchSubmit]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(TextField, __assign$4({}, props, { variant: variant, size: size, color: color, focused: focused || undefined, name: name, label: label, placeholder: placeholder, className: classNames$1(className, 'FormValueItem', 'FormTextField', "variant-".concat(variant)), inputRef: initInputRef ? initInputRef : inputRef, value: value, required: required, fullWidth: !width && fullWidth, error: error, helperText: formColWithHelperText ? undefined : helperText, FormHelperTextProps: { component: 'div' }, disabled: disabled, InputProps: muiInputProps, InputLabelProps: muiInputLabelProps, inputProps: ((_b = initInputProps === null || initInputProps === void 0 ? void 0 : initInputProps.className) === null || _b === void 0 ? void 0 : _b.includes('FormTag-Input')) ? initInputProps : inputProps, style: style, select: select, SelectProps: SelectProps, multiline: multiline, onChange: handleChange, onBlur: handleBlur, onKeyDown: handleKeyDown })));
});
FormTextField.displayName = 'FormText';
FormTextField.defaultProps = FormTextFieldDefaultProps;var FormTextDefaultProps = __assign$4(__assign$4({}, FormTextFieldDefaultProps), { clear: true, value: '' });var FormText = React__default.forwardRef(function (_a, ref) {
    // Event Handler ---------------------------------------------------------------------------------------------------
    var className = _a.className, onValue = _a.onValue, props = __rest$2(_a, ["className", "onValue"]);
    var handleValue = useCallback(function (value) {
        var finalValue = value == null ? '' : value;
        if (onValue) {
            finalValue = onValue(finalValue);
        }
        return finalValue;
    }, [onValue]);
    // Render ----------------------------------------------------------------------------------------------------------
    return React__default.createElement(FormTextField, __assign$4({ ref: ref, className: classNames$1(className, 'FormText'), onValue: handleValue }, props));
});
FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;var FormHiddenDefaultProps = {};var FormHidden = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$2(_a, ["className"]);
    return (React__default.createElement(FormText, __assign$4({ ref: ref, className: classNames$1(className, 'FormHidden'), type: 'hidden', variant: 'standard' }, props)));
});
FormHidden.displayName = 'FormHidden';
FormHidden.defaultProps = FormHiddenDefaultProps;var FormTagDefaultProps = __assign$4(__assign$4({}, FormTextDefaultProps), { value: [], clear: true, formValueSeparator: ',' });var css_248z$h = ".FormTag.FormTextField {\n  min-width: 200px;\n}";
styleInject(css_248z$h);var FormTag = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var className = _a.className, name = _a.name, initValue = _a.value, exceptValue = _a.exceptValue, required = _a.required, readOnly = _a.readOnly, maxLength = _a.maxLength, disabled = _a.disabled, initFullWidth = _a.fullWidth, initError = _a.error, initHelperText = _a.helperText, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, onValidate = _a.onValidate, onKeyDown = _a.onKeyDown, onChange = _a.onChange, onValue = _a.onValue, onBlur = _a.onBlur, props = __rest$2(_a, ["className", "name", "value", "exceptValue", "required", "readOnly", "maxLength", "disabled", "fullWidth", "error", "helperText", "formValueSeparator", "formValueSort", "onValidate", "onKeyDown", "onChange", "onValue", "onBlur"]);
    var _b = useFormState(), formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit, otherFormState = __rest$2(_b, ["fullWidth", "onAddValueItem", "onValueChange", "onValueChangeByUser", "onRequestSearchSubmit"]);
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
        return new Set(getFinalValue(initValue));
    }), valueSet = _c[0], setValueSet = _c[1];
    var _d = useAutoUpdateState$1(initValue, getFinalValue), value = _d[0], setValue = _d[1];
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
    var _g = useAutoUpdateState$1(initHelperText), helperText = _g[0], setHelperText = _g[1];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (!isSame$1(value, initValue)) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
    }, []);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        if (required && empty$1(value)) {
            setErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [required, onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
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
        return __assign$4(__assign$4(__assign$4({}, baseCommands), { getReset: function () { return getFinalValue(initValue); }, reset: function () {
                lastValue = getFinalValue(initValue);
                setValue(lastValue);
            }, getValue: function () { return lastValue; }, setValue: function (newValue) {
                var finalValue = getFinalValue(newValue);
                if (!isSame$1(lastValue, finalValue)) {
                    lastValue = finalValue;
                    setValueSet(new Set(lastValue));
                    setValue(lastValue);
                }
            }, validate: function () { return validate(value); } }), getExtraCommands());
    }, [initValue, value, getFinalValue, validate, getExtraCommands]);
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
    }, [valueSet, name, getFinalValue, onValueChangeByUser, onRequestSearchSubmit]);
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
    }, [valueSet, name, getFinalValue, onValueChangeByUser, onRequestSearchSubmit]);
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
    }, [inputValue, onBlur]);
    var handleRenderTags = useCallback(function (tags) {
        return tags.map(function (tag) { return (React__default.createElement(Chip, { className: 'MuiAutocomplete-tag', key: tag, label: tag, size: 'small', disabled: disabled, onDelete: readOnly || disabled ? undefined : function () { return removeTag(tag); } })); });
    }, [disabled, readOnly, removeTag]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$4({ fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, 
            // eslint-disable-next-line
            onValueChange: function () { }, 
            // eslint-disable-next-line
            onValueChangeByUser: function () { }, 
            // eslint-disable-next-line
            onRequestSearchSubmit: function () { } }, otherFormState) },
        React__default.createElement(Autocomplete, { options: [], multiple: true, freeSolo: true, value: value, disableClearable: true, disabled: disabled, renderTags: handleRenderTags, inputValue: inputValue, style: { display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }, renderInput: function (params) {
                var _a;
                var renderProps = __assign$4({}, props);
                renderProps.InputLabelProps = __assign$4(__assign$4({}, renderProps.InputLabelProps), { htmlFor: params.InputLabelProps.htmlFor, id: params.InputLabelProps.id });
                renderProps.InputProps = __assign$4(__assign$4({}, renderProps.InputProps), { className: classNames$1((_a = renderProps.InputProps) === null || _a === void 0 ? void 0 : _a.className, params.InputProps.className), ref: params.InputProps.ref });
                if (notEmpty(params.InputProps.startAdornment)) {
                    renderProps.InputProps.startAdornment = (React__default.createElement(React__default.Fragment, null,
                        renderProps.InputProps.startAdornment,
                        params.InputProps.startAdornment));
                }
                renderProps.inputProps = __assign$4(__assign$4({}, renderProps.inputProps), params.inputProps);
                renderProps.inputProps.className = classNames$1(renderProps.inputProps.className, 'FormTag-Input');
                renderProps.inputProps.readOnly = readOnly;
                renderProps.inputProps.maxLength = maxLength;
                if (readOnly) {
                    renderProps.inputProps.className = classNames$1(renderProps.inputProps.className, 'Mui-disabled');
                }
                return (React__default.createElement(FormText, __assign$4({}, renderProps, { ref: handleRef, name: name, className: classNames$1(className, 'FormValueItem', 'FormTag'), error: error, disabled: disabled, fullWidth: fullWidth, required: required, value: inputValue, exceptValue: exceptValue, helperText: helperText, onKeyDown: handleInputKeyDown, onChange: handleInputChange, onBlur: handleBlur })));
            } })));
});
FormTag.displayName = 'FormTag';
FormTag.defaultProps = FormTagDefaultProps;var FormEmailDefaultProps = __assign$4(__assign$4({}, FormTextDefaultProps), { validPattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g });var FormEmail = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$2(_a, ["className"]);
    return React__default.createElement(FormText, __assign$4({ ref: ref, className: classNames$1(className, 'FormEmail'), type: 'email' }, props));
});
FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;var FormPasswordDefaultProps = __assign$4(__assign$4({}, FormTextFieldDefaultProps), { clear: false, eye: true });var css_248z$g = ".FormPassword .eye-icon-button-wrap {\n  visibility: hidden;\n}\n.FormPassword.variant-filled .eye-icon-button-wrap {\n  margin-top: 9px;\n  margin-bottom: -9px;\n}\n.FormPassword:hover .eye-icon-button-wrap.show,\n.FormPassword .MuiInputBase-root.Mui-focused .eye-icon-button-wrap.show {\n  visibility: visible;\n}";
styleInject(css_248z$g);var StyledEyeInputAdornment = styled(InputAdornment)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  visibility: hidden;\n"], ["\n  visibility: hidden;\n"])));
var FormPassword = React__default.forwardRef(function (_a, ref) {
    // State -----------------------------------------------------------------------------------------------------------
    var className = _a.className, initMuiInputProps = _a.InputProps, eye = _a.eye, onChange = _a.onChange, props = __rest$2(_a, ["className", "InputProps", "eye", "onChange"]);
    var _b = useState('password'), type = _b[0], setType = _b[1];
    var _c = useState(notEmpty(props.value)), showEye = _c[0], setShowEye = _c[1];
    // State - muiInputProps -------------------------------------------------------------------------------------------
    var muiInputProps = useAutoUpdateState$1(useCallback(function () {
        if (eye) {
            var newProps = __assign$4({}, initMuiInputProps);
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
    }, [initMuiInputProps, type, eye, showEye]))[0];
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (value) {
        setShowEye(notEmpty(value));
        if (onChange)
            onChange(value);
    }, [onChange]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$4({ ref: ref, className: classNames$1(className, 'FormPassword'), onChange: handleChange, type: type, InputProps: muiInputProps }, props)));
});
FormPassword.displayName = 'FormPassword';
FormPassword.defaultProps = FormPasswordDefaultProps;
var templateObject_1;var FormTelDefaultProps = __assign$4(__assign$4({}, FormTextDefaultProps), { validPattern: /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/ });var FormTel = React__default.forwardRef(function (_a, ref) {
    // Event Handler ---------------------------------------------------------------------------------------------------
    var className = _a.className, onValue = _a.onValue, props = __rest$2(_a, ["className", "onValue"]);
    var handleOnValue = useCallback(function (value) {
        var newValue = value;
        if (newValue && notEmpty(newValue)) {
            newValue = newValue.replace(/[^0-9]/gi, '');
        }
        newValue = getTelAutoDash(newValue);
        return onValue ? onValue(newValue) : newValue;
    }, [onValue]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormText, __assign$4({ ref: ref, className: classNames$1(className, 'FormTel'), onValue: handleOnValue, maxLength: 13 }, props)));
});
FormTel.displayName = 'FormTel';
FormTel.defaultProps = FormTelDefaultProps;
function getTelAutoDash(tel) {
    if (tel == null)
        return undefined;
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
}var FormMobileDefaultProps = __assign$4(__assign$4({}, FormTelDefaultProps), { validPattern: /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/ });var FormMobile = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$2(_a, ["className"]);
    return React__default.createElement(FormTel, __assign$4({ ref: ref, className: classNames$1(className, 'FormMobile') }, props));
});
FormMobile.displayName = 'FormMobile';
FormMobile.defaultProps = FormMobileDefaultProps;/**
 * react-number-format - 4.9.4
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2022 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */

//     

                                                               

// basic noop function
function noop$1() {}
function returnTrue() {
  return true;
}

function charIsNumber(char         ) {
  return !!(char || '').match(/\d/);
}

function isNil(val     ) {
  return val === null || val === undefined;
}

function escapeRegExp(str        ) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

function getThousandsGroupRegex(thousandsGroupStyle        ) {
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

function applyThousandSeparator(
  str        ,
  thousandSeparator        ,
  thousandsGroupStyle        
) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return (
    str.substring(0, index) +
    str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator)
  );
}

//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr        , allowNegative) {
  if ( allowNegative === void 0 ) allowNegative          = true;

  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');

  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';

  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation,
  };
}

function fixLeadingZero(numStr         ) {
  if (!numStr) { return numStr; }
  var isNegative = numStr[0] === '-';
  if (isNegative) { numStr = numStr.substring(1, numStr.length); }
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr        , scale        , fixedDecimalScale         ) {
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
  num += ''; // typecast number to string

  // store the sign and remove it from the number.
  var sign = num[0] === '-' ? '-' : '';
  if (sign) { num = num.substring(1); }

  // split the number into cofficient and exponent
  var ref = num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];

  // covert exponent to number;
  exponent = Number(exponent);

  // if there is no exponent part or its 0, return the coffiecient with sign
  if (!exponent) { return sign + coefficient; }

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
  } else if (decimalIndex >= coffiecientLn) {
    // if decimal index is less then 0 add leading 0s
    coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
  } else {
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
function roundToPrecision(numStr        , scale        , fixedDecimalScale         ) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) { return numStr; }

  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNagation = ref.hasNagation;
  var floatValue = parseFloat(("0." + (afterDecimal || '0')));
  var floatValueStr =
    afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split('.');
  var intPart = beforeDecimal
    .split('')
    .reverse()
    .reduce(function (roundedStr, current, idx) {
      if (roundedStr.length > idx) {
        return (
          (Number(roundedStr[0]) + Number(current)).toString() +
          roundedStr.substring(1, roundedStr.length)
        );
      }
      return current + roundedStr;
    }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(
    roundedDecimalParts[1] || '',
    Math.min(scale, afterDecimal.length),
    fixedDecimalScale
  );
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return ("" + negation + intPart + decimalSeparator + decimalPart);
}

/** set the caret positon in an input field **/
function setCaretPosition(el                  , caretPos        ) {
  el.value = el.value;
  // ^ this is used to not only get 'focus', but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
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

/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/
function findChangedIndex(prevValue        , newValue        ) {
  var i = 0,
    j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) { i++; }

  //check what has been changed from last
  while (
    prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
    newLength - j > i &&
    prevLength - j > i
  ) {
    j++;
  }

  return { start: i, end: prevLength - j };
}

/*
  Returns a number whose value is limited to the given range
*/
function clamp(num        , min        , max        ) {
  return Math.min(Math.max(num, min), max);
}

function getCurrentCaretPosition(el                  ) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

function addInputMode(format                                   ) {
  return (
    format ||
    (typeof navigator !== 'undefined' &&
      !(navigator.platform && /iPhone|iPod/.test(navigator.platform)))
  );
}

//     
function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop$1,
  onChange: noop$1,
  onKeyDown: noop$1,
  onMouseUp: noop$1,
  onFocus: noop$1,
  onBlur: noop$1,
  isAllowed: returnTrue,
};
var NumberFormat = /*@__PURE__*/(function (superclass) {
  function NumberFormat(props        ) {
    superclass.call(this, props);
    var defaultValue = props.defaultValue;

    //validate props
    this.validateProps();

    var formattedValue = this.formatValueProp(defaultValue);

    this.state = {
      value: formattedValue,
      numAsString: this.removeFormatting(formattedValue),
      mounted: false,
    };

    this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  if ( superclass ) NumberFormat.__proto__ = superclass;
  NumberFormat.prototype = Object.create( superclass && superclass.prototype );
  NumberFormat.prototype.constructor = NumberFormat;

  NumberFormat.prototype.componentDidMount = function componentDidMount () {
    // set mounted state
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      mounted: true,
    });
  };

  NumberFormat.prototype.componentDidUpdate = function componentDidUpdate (prevProps        ) {
    this.updateValueIfRequired(prevProps);
  };

  NumberFormat.prototype.componentWillUnmount = function componentWillUnmount () {
    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);
  };

  NumberFormat.prototype.updateValueIfRequired = function updateValueIfRequired (prevProps        ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var focusedElm = ref.focusedElm;
    var stateValue = state.value;
    var lastNumStr = state.numAsString; if ( lastNumStr === void 0 ) lastNumStr = '';

    // If only state changed no need to do any thing
    if (prevProps !== props) {
      //validate props
      this.validateProps();

      var lastValueWithNewFormat = this.formatNumString(lastNumStr);

      var formattedValue = isNil(props.value) ? lastValueWithNewFormat : this.formatValueProp();
      var numAsString = this.removeFormatting(formattedValue);

      var floatValue = parseFloat(numAsString);
      var lastFloatValue = parseFloat(lastNumStr);

      if (
        //while typing set state only when float value changes
        ((!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue) ||
        //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue ||
        //set state always when not in focus and formatted value is changed
        (focusedElm === null && formattedValue !== stateValue)
      ) {
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: focusedElm,
          source: 'prop',
          event: null,
        });
      }
    }
  };

  /** Misc methods **/
  NumberFormat.prototype.getFloatString = function getFloatString (num) {
    if ( num === void 0 ) num         = '';

    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var numRegex = this.getNumberRegex(true);

    //remove negation for regex check
    var hasNegation = num[0] === '-';
    if (hasNegation) { num = num.replace('-', ''); }

    //if decimal scale is zero remove decimal and number after decimalSeparator
    if (decimalSeparator && decimalScale === 0) {
      num = num.split(decimalSeparator)[0];
    }

    num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

    //remove extra decimals
    var firstDecimalIndex = num.indexOf('.');

    if (firstDecimalIndex !== -1) {
      num = (num.substring(0, firstDecimalIndex)) + "." + (num
        .substring(firstDecimalIndex + 1, num.length)
        .replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
    }

    //add negation back
    if (hasNegation) { num = '-' + num; }

    return num;
  };

  //returned regex assumes decimalSeparator is as per prop
  NumberFormat.prototype.getNumberRegex = function getNumberRegex (g         , ignoreDecimalSeparator          ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var customNumerals = ref.customNumerals;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    return new RegExp(
      '[0-9' +
        (customNumerals ? customNumerals.join('') : '') +
        ']' +
        (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format
          ? '|' + escapeRegExp(decimalSeparator)
          : ''),
      g ? 'g' : undefined
    );
  };

  NumberFormat.prototype.getSeparators = function getSeparators () {
    var ref = this.props;
    var decimalSeparator = ref.decimalSeparator;
    var ref$1 = this.props;
    var thousandSeparator = ref$1.thousandSeparator;
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;

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
  };

  NumberFormat.prototype.getMaskAtIndex = function getMaskAtIndex (index        ) {
    var ref = this.props;
    var mask = ref.mask; if ( mask === void 0 ) mask = ' ';
    if (typeof mask === 'string') {
      return mask;
    }

    return mask[index] || ' ';
  };

  NumberFormat.prototype.getValueObject = function getValueObject (formattedValue        , numAsString        ) {
    var floatValue = parseFloat(numAsString);

    return {
      formattedValue: formattedValue,
      value: numAsString,
      floatValue: isNaN(floatValue) ? undefined : floatValue,
    };
  };

  NumberFormat.prototype.validateProps = function validateProps () {
    var ref = this.props;
    var mask = ref.mask;

    //validate decimalSeparator and thousandSeparator
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var thousandSeparator = ref$1.thousandSeparator;

    if (decimalSeparator === thousandSeparator) {
      throw new Error(("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n       "));
    }

    //validate mask
    if (mask) {
      var maskAsStr = mask === 'string' ? mask : mask.toString();
      if (maskAsStr.match(/\d/g)) {
        throw new Error(("\n          Mask " + mask + " should not contain numeric character;\n        "));
      }
    }
  };
  /** Misc methods end **/

  /** caret specific methods **/
  NumberFormat.prototype.setPatchedCaretPosition = function setPatchedCaretPosition (el                  , caretPos        , currentValue        ) {
    /* setting caret position within timeout of 0ms is required for mobile chrome,
    otherwise browser resets the caret position after we set it
    We are also setting it without timeout so that in normal browser we don't see the flickering */
    setCaretPosition(el, caretPos);
    this.caretPositionTimeout = setTimeout(function () {
      if (el.value === currentValue) { setCaretPosition(el, caretPos); }
    }, 0);
  };

  /* This keeps the caret within typing area so people can't type in between prefix or suffix */
  NumberFormat.prototype.correctCaretPosition = function correctCaretPosition (value        , caretPos        , direction         ) {
    var ref = this.props;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;

    //if value is empty return 0
    if (value === '') { return 0; }

    //caret position should be between 0 and value length
    caretPos = clamp(caretPos, 0, value.length);

    //in case of format as number limit between prefix and suffix
    if (!format) {
      var hasNegation = value[0] === '-';
      return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
    }

    //in case if custom format method don't do anything
    if (typeof format === 'function') { return caretPos; }

    /* in case format is string find the closest # position from the caret position */

    //in case the caretPos have input value on it don't do anything
    if (format[caretPos] === '#' && charIsNumber(value[caretPos])) {
      return caretPos;
    }

    //if caretPos is just after input value don't do anything
    if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) {
      return caretPos;
    }

    //find the nearest caret position
    var firstHashPosition = format.indexOf('#');
    var lastHashPosition = format.lastIndexOf('#');

    //limit the cursor between the first # position and the last # position
    caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);

    var nextPos = format.substring(caretPos, format.length).indexOf('#');
    var caretLeftBound = caretPos;
    var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos);

    //get the position where the last number is present
    while (
      caretLeftBound > firstHashPosition &&
      (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))
    ) {
      caretLeftBound -= 1;
    }

    var goToLeft =
      !charIsNumber(value[caretRightBound]) ||
      (direction === 'left' && caretPos !== firstHashPosition) ||
      caretPos - caretLeftBound < caretRightBound - caretPos;

    if (goToLeft) {
      //check if number should be taken after the bound or after it
      //if number preceding a valid number keep it after
      return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
    }

    return caretRightBound;
  };

  NumberFormat.prototype.getCaretPosition = function getCaretPosition (inputValue        , formattedValue        , caretPos        ) {
    var ref = this.props;
    var format = ref.format;
    var stateValue = this.state.value;
    var numRegex = this.getNumberRegex(true);
    var inputNumber = (inputValue.match(numRegex) || []).join('');
    var formattedNumber = (formattedValue.match(numRegex) || []).join('');
    var j, i;

    j = 0;

    for (i = 0; i < caretPos; i++) {
      var currentInputChar = inputValue[i] || '';
      var currentFormatChar = formattedValue[j] || '';
      //no need to increase new cursor position if formatted value does not have those characters
      //case inputValue = 1a23 and formattedValue =  123
      if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) {
        continue;
      }

      //When we are striping out leading zeros maintain the new cursor position
      //Case inputValue = 00023 and formattedValue = 23;
      if (
        currentInputChar === '0' &&
        currentFormatChar.match(numRegex) &&
        currentFormatChar !== '0' &&
        inputNumber.length !== formattedNumber.length
      ) {
        continue;
      }

      //we are not using currentFormatChar because j can change here
      while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
        j++;
      }
      j++;
    }

    if (typeof format === 'string' && !stateValue) {
      //set it to the maximum value so it goes after the last number
      j = formattedValue.length;
    }

    //correct caret position if its outside of editable area
    j = this.correctCaretPosition(formattedValue, j);

    return j;
  };
  /** caret specific methods ends **/

  /** methods to remove formattting **/
  NumberFormat.prototype.removePrefixAndSuffix = function removePrefixAndSuffix (val        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;

    //remove prefix and suffix
    if (!format && val) {
      var isNegative = val[0] === '-';

      //remove negation sign
      if (isNegative) { val = val.substring(1, val.length); }

      //remove prefix
      val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

      //remove suffix
      var suffixLastIndex = val.lastIndexOf(suffix);
      val =
        suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length
          ? val.substring(0, suffixLastIndex)
          : val;

      //add negation sign back
      if (isNegative) { val = '-' + val; }
    }

    return val;
  };

  NumberFormat.prototype.removePatternFormatting = function removePatternFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var formatArray = format.split('#').filter(function (str) { return str !== ''; });
    var start = 0;
    var numStr = '';

    for (var i = 0, ln = formatArray.length; i <= ln; i++) {
      var part = formatArray[i] || '';

      //if i is the last fragment take the index of end of the value
      //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
      var index = i === ln ? val.length : val.indexOf(part, start);

      /* in any case if we don't find the pattern part in the value assume the val as numeric string
      This will be also in case if user has started typing, in any other case it will not be -1
      unless wrong prop value is provided */
      if (index === -1) {
        numStr = val;
        break;
      } else {
        numStr += val.substring(start, index);
        start = index + part.length;
      }
    }

    return (numStr.match(this.getNumberRegex(true)) || []).join('');
  };

  NumberFormat.prototype.removeFormatting = function removeFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var removeFormatting = ref.removeFormatting;
    if (!val) { return val; }

    if (!format) {
      val = this.removePrefixAndSuffix(val);
      val = this.getFloatString(val);
    } else if (typeof format === 'string') {
      val = this.removePatternFormatting(val);
    } else if (typeof removeFormatting === 'function') {
      //condition need to be handled if format method is provide,
      val = removeFormatting(val);
    } else {
      val = (val.match(this.getNumberRegex(true)) || []).join('');
    }
    return val;
  };
  /** methods to remove formattting end **/

  /*** format specific methods start ***/
  /**
   * Format when # based string is provided
   * @param  {string} numStr Numeric String
   * @return {string}        formatted Value
   */
  NumberFormat.prototype.formatWithPattern = function formatWithPattern (numStr        ) {
    var ref = this.props;
    var format = ref.format;
    var hashCount = 0;
    var formattedNumberAry = format.split('');
    for (var i = 0, ln = format.length; i < ln; i++) {
      if (format[i] === '#') {
        formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
        hashCount += 1;
      }
    }
    return formattedNumberAry.join('');
  };
  /**
   * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
   * @return {string} formatted Value
   */
  NumberFormat.prototype.formatAsNumber = function formatAsNumber (numStr        ) {
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var allowNegative = ref.allowNegative;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var ref$1 = this.getSeparators();
    var thousandSeparator = ref$1.thousandSeparator;
    var decimalSeparator = ref$1.decimalSeparator;

    var hasDecimalSeparator = numStr.indexOf('.') !== -1 || (decimalScale && fixedDecimalScale);
    var ref$2 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const

    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);
    }

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }

    //add prefix and suffix
    if (prefix) { beforeDecimal = prefix + beforeDecimal; }
    if (suffix) { afterDecimal = afterDecimal + suffix; }

    //restore negation sign
    if (addNegation) { beforeDecimal = '-' + beforeDecimal; }

    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;

    return numStr;
  };

  NumberFormat.prototype.formatNumString = function formatNumString (numStr) {
    if ( numStr === void 0 ) numStr         = '';

    var ref = this.props;
    var format = ref.format;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var customNumerals = ref.customNumerals;
    var formattedValue = numStr;

    if (customNumerals && customNumerals.length === 10) {
      var customNumeralRegex = new RegExp('[' + customNumerals.join('') + ']', 'g');
      formattedValue = numStr.replace(customNumeralRegex, function (digit) { return customNumerals.indexOf(digit).toString(); }
      );
    }

    if (numStr === '' && !allowEmptyFormatting) {
      formattedValue = '';
    } else if (numStr === '-' && !format) {
      formattedValue = '-';
    } else if (typeof format === 'string') {
      formattedValue = this.formatWithPattern(formattedValue);
    } else if (typeof format === 'function') {
      formattedValue = format(formattedValue);
    } else {
      formattedValue = this.formatAsNumber(formattedValue);
    }

    return formattedValue;
  };

  NumberFormat.prototype.formatValueProp = function formatValueProp (defaultValue                 ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var ref$1 = this.props;
    var value = ref$1.value;
    var isNumericString = ref$1.isNumericString;

    // if value is undefined or null, use defaultValue instead
    value = isNil(value) ? defaultValue : value;

    var isNonNumericFalsy = !value && value !== 0;

    if (isNonNumericFalsy && allowEmptyFormatting) {
      value = '';
    }

    // if value is not defined return empty string
    if (isNonNumericFalsy && !allowEmptyFormatting) { return ''; }

    if (typeof value === 'number') {
      value = toNumericString(value);
      isNumericString = true;
    }

    //change infinity value to empty string
    if (value === 'Infinity' && isNumericString) {
      value = '';
    }

    //round the number based on decimalScale
    //format only if non formatted value is provided
    if (isNumericString && !format && typeof decimalScale === 'number') {
      value = roundToPrecision(value, decimalScale, fixedDecimalScale);
    }

    var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

    return formattedValue;
  };

  NumberFormat.prototype.formatNegation = function formatNegation (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var allowNegative = ref.allowNegative;
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
  };

  NumberFormat.prototype.formatInput = function formatInput (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var format = ref.format;

    //format negation only if we are formatting as number
    if (!format) {
      value = this.removePrefixAndSuffix(value);
      value = this.formatNegation(value);
    }

    //remove formatting from number
    value = this.removeFormatting(value);

    return this.formatNumString(value);
  };

  /*** format specific methods end ***/
  NumberFormat.prototype.isCharacterAFormat = function isCharacterAFormat (caretPos        , value        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;

    //check within format pattern
    if (typeof format === 'string' && format[caretPos] !== '#') { return true; }

    //check in number format
    if (
      !format &&
      (caretPos < prefix.length ||
        caretPos >= value.length - suffix.length ||
        (decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator))
    ) {
      return true;
    }

    return false;
  };

  /**
   * This will check if any formatting got removed by the delete or backspace and reset the value
   * It will also work as fallback if android chome keyDown handler does not work
   **/
  NumberFormat.prototype.correctInputValue = function correctInputValue (caretPos        , lastValue        , value        ) {
    var this$1$1 = this;

    var ref = this.props;
    var format = ref.format;
    var allowNegative = ref.allowNegative;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;
    var decimalSeparator = ref$1.decimalSeparator;
    var lastNumStr = this.state.numAsString || '';
    var ref$2 = this.selectionBeforeInput;
    var selectionStart = ref$2.selectionStart;
    var selectionEnd = ref$2.selectionEnd;
    var ref$3 = findChangedIndex(lastValue, value);
    var start = ref$3.start;
    var end = ref$3.end;

    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (
      !format &&
      start === end &&
      allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1
    ) {
      var separator = decimalScale === 0 ? '' : decimalSeparator;
      return (
        value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length)
      );
    }

    var leftBound = !!format ? 0 : prefix.length;
    var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

    if (
      // don't do anything if something got added
      value.length > lastValue.length ||
      // or if the new value is an empty string
      !value.length ||
      // or if nothing has changed, in which case start will be same as end
      start === end ||
      // or in case if whole input is selected and new value is typed
      (selectionStart === 0 && selectionEnd === lastValue.length) ||
      // or in case if the whole content is replaced by browser, example (autocomplete)
      (start === 0 && end === lastValue.length) ||
      // or if charcters between prefix and suffix is selected.
      // For numeric inputs we apply the format so, prefix and suffix can be ignored
      (selectionStart === leftBound && selectionEnd === rightBound)
    ) {
      return value;
    }

    // check whether the deleted portion has a character that is part of a format
    var deletedValues = lastValue.substr(start, end - start);
    var formatGotDeleted = !![].concat( deletedValues ).find(function (deletedVal, idx) { return this$1$1.isCharacterAFormat(idx + start, lastValue); }
    );

    // if it has, only remove characters that are not part of the format
    if (formatGotDeleted) {
      var deletedValuePortion = lastValue.substr(start);
      var recordIndexOfFormatCharacters = {};
      var resolvedPortion = [];
      [].concat( deletedValuePortion ).forEach(function (currentPortion, idx) {
        if (this$1$1.isCharacterAFormat(idx + start, lastValue)) {
          recordIndexOfFormatCharacters[idx] = currentPortion;
        } else if (idx > deletedValues.length - 1) {
          resolvedPortion.push(currentPortion);
        }
      });

      Object.keys(recordIndexOfFormatCharacters).forEach(function (idx) {
        if (resolvedPortion.length > idx) {
          resolvedPortion.splice(idx, 0, recordIndexOfFormatCharacters[idx]);
        } else {
          resolvedPortion.push(recordIndexOfFormatCharacters[idx]);
        }
      });

      value = lastValue.substr(0, start) + resolvedPortion.join('');
    }

    //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    if (!format) {
      var numericString = this.removeFormatting(value);
      var ref$4 = splitDecimal(
        numericString,
        allowNegative
      );
      var beforeDecimal = ref$4.beforeDecimal;
      var afterDecimal = ref$4.afterDecimal;
      var addNegation = ref$4.addNegation; // eslint-disable-line prefer-const

      //clear only if something got deleted
      var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;
      if (
        numericString.length < lastNumStr.length &&
        isBeforeDecimalPoint &&
        beforeDecimal === '' &&
        !parseFloat(afterDecimal)
      ) {
        return addNegation ? '-' : '';
      }
    }

    return value;
  };

  /** Update value and caret position */
  NumberFormat.prototype.updateValue = function updateValue (params   
                           
                        
                       
                            
                               
                   
                     
                              
   ) {
    var formattedValue = params.formattedValue;
    var input = params.input;
    var setCaretPosition = params.setCaretPosition; if ( setCaretPosition === void 0 ) setCaretPosition = true;
    var source = params.source;
    var event = params.event;
    var numAsString = params.numAsString;
    var caretPos = params.caretPos;
    var ref = this.props;
    var onValueChange = ref.onValueChange;
    var ref$1 = this.state;
    var lastValue = ref$1.value;

    if (input) {
      //calculate caret position if not defined
      if (caretPos === undefined && setCaretPosition) {
        var inputValue = params.inputValue || input.value;

        var currentCaretPosition = getCurrentCaretPosition(input);

        /**
         * set the value imperatively, this is required for IE fix
         * This is also required as if new caret position is beyond the previous value.
         * Caret position will not be set correctly
         */
        input.value = formattedValue;

        //get the caret position
        caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
      }

      /**
       * set the value imperatively, as we set the caret position as well imperatively.
       * This is to keep value and caret position in sync
       */
      input.value = formattedValue;

      //set caret position, and value imperatively when element is provided
      if (setCaretPosition) {
        //set caret position
        this.setPatchedCaretPosition(input, caretPos, formattedValue);
      }
    }

    //calculate numeric string if not passed
    if (numAsString === undefined) {
      numAsString = this.removeFormatting(formattedValue);
    }

    //update state if value is changed
    if (formattedValue !== lastValue) {
      this.setState({ value: formattedValue, numAsString: numAsString });

      // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
      onValueChange(this.getValueObject(formattedValue, numAsString), { event: event, source: source });
    }
  };

  NumberFormat.prototype.onChange = function onChange (e                     ) {
    var el = e.target;
    var inputValue = el.value;
    var ref = this;
    var state = ref.state;
    var props = ref.props;
    var isAllowed = props.isAllowed;
    var lastValue = state.value || '';

    var currentCaretPosition = getCurrentCaretPosition(el);

    inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

    var formattedValue = this.formatInput(inputValue) || '';
    var numAsString = this.removeFormatting(formattedValue);

    var valueObj = this.getValueObject(formattedValue, numAsString);
    var isChangeAllowed = isAllowed(valueObj);

    if (!isChangeAllowed) {
      formattedValue = lastValue;
    }

    this.updateValue({
      formattedValue: formattedValue,
      numAsString: numAsString,
      inputValue: inputValue,
      input: el,
      event: e,
      source: 'event',
    });

    if (isChangeAllowed) {
      props.onChange(e);
    }
  };

  NumberFormat.prototype.onBlur = function onBlur (e                     ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var format = props.format;
    var onBlur = props.onBlur;
    var allowLeadingZeros = props.allowLeadingZeros;
    var numAsString = state.numAsString;
    var lastValue = state.value;
    this.focusedElm = null;

    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);

    if (!format) {
      // if the numAsString is not a valid number reset it to empty
      if (isNaN(parseFloat(numAsString))) {
        numAsString = '';
      }

      if (!allowLeadingZeros) {
        numAsString = fixLeadingZero(numAsString);
      }

      var formattedValue = this.formatNumString(numAsString);

      //change the state
      if (formattedValue !== lastValue) {
        // the event needs to be persisted because its properties can be accessed in an asynchronous way
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: e.target,
          setCaretPosition: false,
          event: e,
          source: 'event',
        });
        onBlur(e);
        return;
      }
    }
    onBlur(e);
  };

  NumberFormat.prototype.onKeyDown = function onKeyDown (e                             ) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';
    var expectedCaretPosition;
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;
    var onKeyDown = ref.onKeyDown;
    var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
    var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
    var negativeRegex = new RegExp('-');
    var isPatternFormat = typeof format === 'string';

    this.selectionBeforeInput = {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
    };

    //Handle backspace and delete against non numerical/decimal characters or arrow keys
    if (key === 'ArrowLeft' || key === 'Backspace') {
      expectedCaretPosition = selectionStart - 1;
    } else if (key === 'ArrowRight') {
      expectedCaretPosition = selectionStart + 1;
    } else if (key === 'Delete') {
      expectedCaretPosition = selectionStart;
    }

    //if expectedCaretPosition is not set it means we don't want to Handle keyDown
    //also if multiple characters are selected don't handle
    if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }

    var newCaretPosition = expectedCaretPosition;
    var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
    var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      var direction = key === 'ArrowLeft' ? 'left' : 'right';
      newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
    } else if (
      key === 'Delete' &&
      !numRegex.test(value[expectedCaretPosition]) &&
      !negativeRegex.test(value[expectedCaretPosition])
    ) {
      while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
        newCaretPosition++;
      }
    } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
      /* NOTE: This is special case when backspace is pressed on a
      negative value while the cursor position is after prefix. We can't handle it on onChange because
      we will not have any information of keyPress
      */
      if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
        var newValue = value.substring(1);
        this.updateValue({
          formattedValue: newValue,
          caretPos: newCaretPosition,
          input: el,
          event: e,
          source: 'event',
        });
      } else if (!negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
          newCaretPosition--;
        }
        newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
      }
    }

    if (
      newCaretPosition !== expectedCaretPosition ||
      expectedCaretPosition < leftBound ||
      expectedCaretPosition > rightBound
    ) {
      e.preventDefault();
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
            Remove this when you find different solution */
    if (e.isUnitTestRun) {
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    onKeyDown(e);
  };

  /** required to handle the caret position when click anywhere within the input **/
  NumberFormat.prototype.onMouseUp = function onMouseUp (e                          ) {
    var el = e.target;

    /**
     * NOTE: we have to give default value for value as in case when custom input is provided
     * value can come as undefined when nothing is provided on value prop.
     */
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';

    if (selectionStart === selectionEnd) {
      var caretPosition = this.correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart) {
        this.setPatchedCaretPosition(el, caretPosition, value);
      }
    }

    this.props.onMouseUp(e);
  };

  NumberFormat.prototype.onFocus = function onFocus (e                     ) {
    var this$1$1 = this;

    // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
    // (onFocus event target selectionStart is always 0 before setTimeout)
    e.persist();

    this.focusedElm = e.target;
    this.focusTimeout = setTimeout(function () {
      var el = e.target;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value; if ( value === void 0 ) value = '';

      var caretPosition = this$1$1.correctCaretPosition(value, selectionStart);

      //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
      if (
        caretPosition !== selectionStart &&
        !(selectionStart === 0 && selectionEnd === value.length)
      ) {
        this$1$1.setPatchedCaretPosition(el, caretPosition, value);
      }

      this$1$1.props.onFocus(e);
    }, 0);
  };

  NumberFormat.prototype.render = function render () {
    var ref = this.props;
    var type = ref.type;
    var displayType = ref.displayType;
    var customInput = ref.customInput;
    var renderText = ref.renderText;
    var getInputRef = ref.getInputRef;
    var format = ref.format;
    ref.thousandSeparator;
    ref.decimalSeparator;
    ref.allowedDecimalSeparators;
    ref.thousandsGroupStyle;
    ref.decimalScale;
    ref.fixedDecimalScale;
    ref.prefix;
    ref.suffix;
    ref.removeFormatting;
    ref.mask;
    ref.defaultValue;
    ref.isNumericString;
    ref.allowNegative;
    ref.allowEmptyFormatting;
    ref.allowLeadingZeros;
    ref.onValueChange;
    ref.isAllowed;
    ref.customNumerals;
    ref.onChange;
    ref.onKeyDown;
    ref.onMouseUp;
    ref.onFocus;
    ref.onBlur;
    ref.value;
    var rest = objectWithoutProperties( ref, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "thousandSeparator", "decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "decimalScale", "fixedDecimalScale", "prefix", "suffix", "removeFormatting", "mask", "defaultValue", "isNumericString", "allowNegative", "allowEmptyFormatting", "allowLeadingZeros", "onValueChange", "isAllowed", "customNumerals", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value"] );
    var otherProps = rest;
    var ref$1 = this.state;
    var value = ref$1.value;
    var mounted = ref$1.mounted;

    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode(format) ? 'numeric' : undefined;

    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
      type: type,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onMouseUp: this.onMouseUp,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    });

    if (displayType === 'text') {
      return renderText ? (
        renderText(value, otherProps) || null
      ) : (
        React__default.createElement( 'span', Object.assign({}, otherProps, { ref: getInputRef }),
          value
        )
      );
    } else if (customInput) {
      var CustomInput = customInput;
      return React__default.createElement( CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }

    return React__default.createElement( 'input', Object.assign({}, inputProps, { ref: getInputRef }));
  };

  return NumberFormat;
}(React__default.Component));

NumberFormat.defaultProps = defaultProps;var NumberFormatCustom = React__default.forwardRef(function (_a, ref) {
    var onChange = _a.onChange, props = __rest$2(_a, ["onChange"]);
    return (React__default.createElement(NumberFormat, __assign$4({}, props, { getInputRef: ref, onValueChange: function (values) {
            if (onChange)
                onChange({ target: { value: values.value } });
        } })));
});
NumberFormatCustom.displayName = 'NumberFormatCustom';var FormNumberDefaultProps = __assign$4({}, FormTextDefaultProps);var FormNumber = React__default.forwardRef(function (_a, ref) {
    // State - muiInputProps -------------------------------------------------------------------------------------------
    var className = _a.className, allowLeadingZeros = _a.allowLeadingZeros, allowNegative = _a.allowNegative, thousandSeparator = _a.thousandSeparator, allowDecimal = _a.allowDecimal, decimalScale = _a.decimalScale, prefix = _a.prefix, suffix = _a.suffix, readOnly = _a.readOnly, initMuiInputProps = _a.InputProps, props = __rest$2(_a, ["className", "allowLeadingZeros", "allowNegative", "thousandSeparator", "allowDecimal", "decimalScale", "prefix", "suffix", "readOnly", "InputProps"]);
    var muiInputProps = useAutoUpdateState$1(useCallback(function () {
        var inputProps = {
            allowLeadingZeros: allowLeadingZeros,
            allowNegative: allowNegative,
            thousandSeparator: thousandSeparator,
            prefix: prefix,
            suffix: suffix,
            readOnly: readOnly,
        };
        if (allowDecimal) {
            if (decimalScale) {
                inputProps.decimalScale = decimalScale;
            }
        }
        else {
            inputProps.decimalScale = 0;
        }
        return __assign$4(__assign$4({}, initMuiInputProps), { inputComponent: NumberFormatCustom, inputProps: inputProps });
    }, [initMuiInputProps, allowLeadingZeros, allowNegative, thousandSeparator, allowDecimal, decimalScale]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return React__default.createElement(FormText, __assign$4({ ref: ref, className: classNames$1(className, 'FormNumber'), InputProps: muiInputProps }, props));
});
FormNumber.displayName = 'FormNumber';
FormNumber.defaultProps = FormNumberDefaultProps;var FormSearchDefaultProps = __assign$4({}, FormTextDefaultProps);var css_248z$f = ".FormSearch input[type=search]::-webkit-search-decoration,\n.FormSearch input[type=search]::-webkit-search-cancel-button,\n.FormSearch input[type=search]::-webkit-search-results-button,\n.FormSearch input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}";
styleInject(css_248z$f);var FormSearch = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$2(_a, ["className"]);
    return React__default.createElement(FormText, __assign$4({ className: classNames$1(className, 'FormSearch'), ref: ref, type: 'search' }, props));
});
FormSearch.displayName = 'FormSearch';
FormSearch.defaultProps = FormSearchDefaultProps;var FormTextareaDefaultProps = __assign$4(__assign$4({}, FormTextFieldDefaultProps), { clear: false, rows: 3, value: '' });var css_248z$e = ".FormTextarea .MuiInputBase-root .MuiInputBase-input {\n  overflow-y: scroll;\n}\n.FormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar {\n  width: 8px;\n}\n.FormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.1882352941);\n  background-clip: padding-box;\n  border-left: 4px transparent solid;\n}";
styleInject(css_248z$e);var FormTextarea = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$2(_a, ["className"]);
    return React__default.createElement(FormTextField, __assign$4({ ref: ref, className: classNames$1(className, 'FormTextarea') }, props, { multiline: true }));
});
FormTextarea.displayName = 'FormTextarea';
FormTextarea.defaultProps = FormTextareaDefaultProps;var FormUrlDefaultProps = __assign$4(__assign$4({}, FormTextDefaultProps), { validPattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gim });var FormUrl = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest$2(_a, ["className"]);
    return React__default.createElement(FormText, __assign$4({ ref: ref, className: classNames$1(className, 'FormUrl'), type: 'url' }, props));
});
FormUrl.displayName = 'FormUrl';
FormUrl.defaultProps = FormUrlDefaultProps;var FormSelectDefaultProps = __assign$4(__assign$4({}, FormTextDefaultProps), { formValueSeparator: ',', minWidth: 120 });var css_248z$d = ".FormSelect.is-selected-placeholder .MuiSelect-select {\n  opacity: 0.38;\n}\n.FormSelect .MuiInputBase-root.MuiInputBase-adornedEnd {\n  padding-right: 25px;\n}\n.FormSelect .MuiSelect-select.MuiSelect-multiple .selected-list:not(:empty) {\n  margin-top: -3px;\n  margin-bottom: -3px;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar {\n  width: 12px;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.1882352941);\n  background-clip: padding-box;\n  border-left: 4px transparent solid;\n  border-right: 4px transparent solid;\n}\n.FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-button:start:decrement, .FormSelect-Menu-Popover > .MuiPaper-root::-webkit-scrollbar-button:end:increment {\n  display: block;\n  height: 4px;\n  background-color: transparent;\n}";
styleInject(css_248z$d);var FormSelect = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var className = _a.className, name = _a.name, initItems = _a.items, initFullWidth = _a.fullWidth, onLoadItems = _a.onLoadItems, readOnly = _a.readOnly, multiple = _a.multiple, checkbox = _a.checkbox, placeholder = _a.placeholder, initStartAdornment = _a.startAdornment, initValue = _a.value, initInputLabelProps = _a.InputLabelProps, initSelectProps = _a.SelectProps, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, width = _a.width, minWidth = _a.minWidth, initLoading = _a.loading, onChange = _a.onChange, onValue = _a.onValue, props = __rest$2(_a, ["className", "name", "items", "fullWidth", "onLoadItems", "readOnly", "multiple", "checkbox", "placeholder", "startAdornment", "value", "InputLabelProps", "SelectProps", "formValueSeparator", "formValueSort", "width", "minWidth", "loading", "onChange", "onValue"]);
    var _b = useFormState(), formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, otherFormState = __rest$2(_b, ["fullWidth", "onAddValueItem", "onValueChange"]);
    // State - FormState -----------------------------------------------------------------------------------------------
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State -----------------------------------------------------------------------------------------------------------
    var emptyValue = useState([])[0];
    var _c = useState({}), itemValueLabels = _c[0], setItemValueLabels = _c[1];
    var _d = useState(false), hasEmptyValue = _d[0], setHasEmptyValue = _d[1];
    var _e = useState(false), isOnGetItemLoading = _e[0], setIsOnGetItemLoading = _e[1];
    var _f = useState(initLoading), loading = _f[0], setLoading = _f[1];
    // State - startAdornment ------------------------------------------------------------------------------------------
    var startAdornment = useAutoUpdateState$1(useCallback(function () {
        if (isOnGetItemLoading || loading) {
            return (React__default.createElement(React__default.Fragment, null,
                initStartAdornment,
                (isOnGetItemLoading || loading) && (React__default.createElement(CircularProgress, { size: 16, color: 'inherit', style: { verticalAlign: 'middle', marginLeft: initStartAdornment ? 8 : 0 } }))));
        }
        else {
            return initStartAdornment;
        }
    }, [initStartAdornment, isOnGetItemLoading, loading]))[0];
    // State - items ---------------------------------------------------------------------------------------------------
    var _g = useAutoUpdateState$1(initItems), items = _g[0], setItems = _g[1];
    useEffect(function () {
        if (items) {
            setItemValueLabels(items.reduce(function (res, item) {
                res[item.value] = item.label;
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
    // State - itemsValues ---------------------------------------------------------------------------------------------
    var itemsValues = useAutoUpdateState$1(useCallback(function () {
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
    }, [items]))[0];
    // State - inputLabelProps -----------------------------------------------------------------------------------------
    var inputLabelProps = useAutoUpdateState$1(useCallback(function () {
        if (hasEmptyValue || (!hasEmptyValue && placeholder)) {
            return __assign$4(__assign$4({}, initInputLabelProps), { shrink: true });
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
                if (empty$1(finalValue)) {
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
                finalValue = empty$1(finalValue) ? '' : finalValue[0];
            }
            else {
                if (empty$1(finalValue)) {
                    finalValue = '';
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
    var _h = useAutoUpdateState$1(initValue, getFinalValue), value = _h[0], setValue = _h[1];
    useFirstSkipEffect$1(function () {
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // State - isSelectedPlaceholder -----------------------------------------------------------------------------------
    var isSelectedPlaceholder = useAutoUpdateState$1(useCallback(function () {
        return notEmpty(items) && empty$1(value) && !!placeholder && !hasEmptyValue;
    }, [items, value, placeholder, hasEmptyValue]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (!isSame$1(value, initValue)) {
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
    }, []);
    // State - selectProps ---------------------------------------------------------------------------------------------
    var selectProps = useAutoUpdateState$1(useCallback(function () {
        var _a;
        var finalSelectProps = __assign$4(__assign$4({}, initSelectProps), { displayEmpty: true, multiple: !!multiple });
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
                                return React__default.createElement(Chip, { key: value, label: itemValueLabels[value], size: 'small' });
                            }
                        })));
                }
            };
        }
        if (minWidth != null) {
            finalSelectProps.style = __assign$4(__assign$4({}, finalSelectProps.style), { minWidth: width || minWidth });
        }
        finalSelectProps.MenuProps = __assign$4(__assign$4({}, finalSelectProps.MenuProps), { className: classNames$1((_a = finalSelectProps.MenuProps) === null || _a === void 0 ? void 0 : _a.className, 'FormSelect-Menu-Popover') });
        return finalSelectProps;
    }, [
        initSelectProps,
        multiple,
        itemValueLabels,
        minWidth,
        width,
        hasEmptyValue,
        placeholder,
        isSelectedPlaceholder,
    ]))[0];
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
    }, [value, initValue, getFinalValue]);
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
    }, [items, loading, formValueSeparator, formValueSort, multiple]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleRef = useCallback(function (commands) {
        if (ref) {
            var finalCommands = commands
                ? __assign$4(__assign$4(__assign$4({}, commands), getBaseCommands()), getExtraCommands()) : null;
            if (typeof ref === 'function') {
                return ref(finalCommands);
            }
            else {
                ref.current = finalCommands;
            }
        }
    }, [ref, getBaseCommands, getExtraCommands]);
    var handleAddValueItem = useCallback(function (id, commands) {
        onAddValueItem(id, __assign$4(__assign$4(__assign$4({}, commands), getBaseCommands()), getExtraCommands()));
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
    return (React__default.createElement(FormContextProvider, { value: __assign$4({ fullWidth: formFullWidth, onAddValueItem: handleAddValueItem, 
            // eslint-disable-next-line
            onValueChange: function () { } }, otherFormState) },
        React__default.createElement(FormText, __assign$4({ select: true, ref: handleRef, name: name, className: classNames$1(className, 'FormSelect', isSelectedPlaceholder && 'is-selected-placeholder'), fullWidth: fullWidth }, props, { startAdornment: startAdornment, value: finalValue, clear: false, readOnly: readOnly || empty$1(items), InputLabelProps: inputLabelProps, SelectProps: selectProps, onChange: handleChange, onValue: handleValue }),
            isSelectedPlaceholder && (React__default.createElement(MenuItem, { key: '$$$EmptyValuePlaceholder$$$', value: '', disabled: true, sx: { display: 'none' } }, placeholder)),
            items && notEmpty(items) ? (items.map(function (_a) {
                var itemLabel = _a.label, itemValue = _a.value, disabled = _a.disabled;
                return (React__default.createElement(MenuItem, { key: empty$1(itemValue) ? '$$$EmptyValue$$$' : itemValue, value: itemValue, disabled: disabled },
                    multiple && checkbox && Array.isArray(value) && React__default.createElement(Checkbox, { checked: value.includes(itemValue) }),
                    itemLabel));
            })) : (React__default.createElement(MenuItem, { value: '' })))));
});
FormSelect.displayName = 'FormSelect';
FormSelect.defaultProps = FormSelectDefaultProps;var FormCheckboxDefaultProps = {
    checked: false,
    value: 1,
    uncheckedValue: 0,
};var css_248z$c = ".FormItemBase .FormItemBase-InputLabel {\n  overflow: visible;\n  padding-left: 5px;\n}\n.FormItemBase .FormItemBase-InputLabel.MuiInputLabel-sizeSmall {\n  transform: translate(0, -1.5px) scale(0.7);\n}\n.FormItemBase .FormItemBase-Control-wrap {\n  position: relative;\n}\n.FormItemBase .FormItemBase-Control {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.FormItemBase.variant-standard .FormItemBase-Control-wrap {\n  margin-top: 16px;\n}";
styleInject(css_248z$c);var FormItemBase = React__default.forwardRef(function (_a, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    control = _a.control, controlHeight = _a.controlHeight, controlVerticalCenter = _a.controlVerticalCenter, required = _a.required, labelIcon = _a.labelIcon, label = _a.label, focused = _a.focused, helperText = _a.helperText, helperTextProps = _a.helperTextProps, error = _a.error, hideLabel = _a.hideLabel, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, style = _a.style, sx = _a.sx;
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFullWidth = _b.fullWidth, formColWithLabel = _b.formColWithLabel, formColWithHelperText = _b.formColWithHelperText;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State - wrapStyle -----------------------------------------------------------------------------------------------
    var wrapStyle = useAutoUpdateState$1(useCallback(function () {
        var wrapStyle = {
            display: fullWidth ? 'block' : 'inline-flex',
            width: fullWidth ? '100%' : undefined,
        };
        if (formColWithLabel) {
            wrapStyle.marginTop = -20;
        }
        return wrapStyle;
    }, [formColWithLabel]))[0];
    // State - inputHeight ---------------------------------------------------------------------------------------------
    var _c = useState(0), inputHeight = _c[0], setInputHeight = _c[1];
    var inputResizeDetectorRef = useResizeDetector({
        handleHeight: true,
        handleWidth: false,
        onResize: function () {
            setInputHeight(inputResizeDetectorRef.current.getBoundingClientRect().height);
        },
    }).ref;
    // State - realControlHeight ---------------------------------------------------------------------------------------
    var _d = useState(0), realControlHeight = _d[0], setRealControlHeight = _d[1];
    var realControlResizeDetectorRef = useResizeDetector({
        handleHeight: true,
        handleWidth: false,
        onResize: function () {
            setRealControlHeight(realControlResizeDetectorRef.current.getBoundingClientRect().height);
        },
    }).ref;
    // State - bottomMargin --------------------------------------------------------------------------------------------
    var bottomMargin = useAutoUpdateState$1(useCallback(function () {
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
    }, [variant, realControlHeight, controlHeight, inputHeight, label, formColWithLabel]))[0];
    // State - controlMarginTop ----------------------------------------------------------------------------------------
    var controlMarginTop = useAutoUpdateState$1(useCallback(function () {
        var topMargin = 0;
        if (inputHeight && controlHeight && controlVerticalCenter) {
            topMargin = inputHeight / 2 - controlHeight / 2;
        }
        var withLabelControlAddTopMargin = 0;
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
    }, [inputHeight, controlHeight, controlVerticalCenter, size, label, formColWithLabel]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement("div", { style: wrapStyle },
        React__default.createElement(FormControl, { ref: ref, variant: 'standard', className: classNames$1(className, 'FormItemBase', !!label && 'with-label', "variant-".concat(variant), controlVerticalCenter && 'control-vertical-center', !!error && 'error'), style: style, color: color, error: error, focused: focused, sx: sx },
            !formColWithLabel && label && (React__default.createElement(InputLabel, { shrink: true, className: 'FormItemBase-InputLabel', size: size === 'medium' ? 'normal' : size, required: required }, labelIcon ? (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 } }, labelIcon),
                React__default.createElement("span", { style: { verticalAlign: 'middle' } }, label))) : (label))),
            React__default.createElement("div", { className: 'FormItemBase-Control-wrap', style: { display: 'grid', marginTop: hideLabel ? 0 : undefined } },
                variant === 'standard' && (React__default.createElement(Input, { ref: inputResizeDetectorRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                variant === 'outlined' && (React__default.createElement(OutlinedInput, { ref: inputResizeDetectorRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                variant === 'filled' && (React__default.createElement(FilledInput, { ref: inputResizeDetectorRef, size: size, fullWidth: true, disabled: true, style: { visibility: 'hidden' } })),
                React__default.createElement("div", { style: { height: bottomMargin, visibility: 'hidden' } }),
                React__default.createElement("div", { ref: realControlResizeDetectorRef, className: 'FormItemBase-Control', style: {
                        width: fullWidth ? '100%' : 'auto',
                        display: 'grid',
                        marginTop: controlMarginTop,
                    } }, control)),
            !formColWithHelperText && helperText && (React__default.createElement(FormHelperText, __assign$4({ component: 'div' }, helperTextProps), helperText)))));
});
FormItemBase.displayName = 'FormItemBase';var FormCheckbox = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initChecked = _a.checked, initInputRef = _a.inputRef, initAction = _a.action, readOnly = _a.readOnly, initDisabled = _a.disabled, text = _a.text, initError = _a.error, initHelperText = _a.helperText, initValue = _a.value, initUncheckedValue = _a.uncheckedValue, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, props = __rest$2(_a, ["variant", "size", "color", "focused", "fullWidth", "name", "labelIcon", "label", "checked", "inputRef", "action", "readOnly", "disabled", "text", "error", "helperText", "value", "uncheckedValue", "exceptValue", "onChange", "onValidate", "className", "style", "sx"]);
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // State - FormState ------------------------------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // Ref -------------------------------------------------------------------------------------------------------------
    var inputRef = useRef(null);
    var actionRef = useRef(null);
    // ResizeDetector --------------------------------------------------------------------------------------------------
    var _c = useResizeDetector(), width = _c.width, height = _c.height, resizeDetectorRef = _c.ref;
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initValue), value = _d[0], setValue = _d[1];
    var _e = useAutoUpdateState$1(initUncheckedValue), uncheckedValue = _e[0], setUncheckedValue = _e[1];
    var _f = useAutoUpdateState$1(initError), error = _f[0], setError = _f[1];
    var _g = useAutoUpdateState$1(initHelperText), helperText = _g[0], setHelperText = _g[1];
    var _h = useAutoUpdateState$1(initDisabled), disabled = _h[0], setDisabled = _h[1];
    // State - checked -------------------------------------------------------------------------------------------------
    var _j = useAutoUpdateState$1(initChecked), checked = _j[0], setChecked = _j[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(checked);
        if (onChange)
            onChange(!!checked);
        onValueChange(name, !!checked);
    }, [checked]);
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        return __assign$4({ width: fullWidth ? '100%' : width || 100, paddingLeft: 3 }, initStyle);
    }, [initStyle, fullWidth, width]))[0];
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
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (checked) {
        if (onValidate) {
            var onValidateResult = onValidate(checked);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastChecked = checked;
        var lastValue = value;
        var lastUncheckedValue = uncheckedValue;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormCheckbox'; },
            getName: function () { return name; },
            getReset: function () { return initChecked; },
            reset: function () {
                lastChecked = initChecked;
                setChecked(lastChecked);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = value;
                setValue(value);
            },
            getUncheckedValue: function () { return lastUncheckedValue; },
            setUncheckedValue: function (uncheckedValue) {
                lastUncheckedValue = uncheckedValue;
                setUncheckedValue(lastUncheckedValue);
            },
            getChecked: function () { return !!lastChecked; },
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
            setError: function (error, helperText) {
                return setErrorHelperText(error, error ? helperText : initHelperText);
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
        initHelperText,
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
    }, [readOnly, name, onValueChangeByUser, onRequestSearchSubmit]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormCheckbox'), labelIcon: labelIcon, label: label, error: error, fullWidth: fullWidth, helperText: helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React__default.createElement(FormControlLabel, { ref: resizeDetectorRef, control: React__default.createElement(Checkbox, __assign$4({ name: name, color: color, size: size, inputRef: initInputRef ? initInputRef : inputRef, action: initAction ? initAction : actionRef, checked: !!checked, checkedIcon: React__default.createElement(CheckBox, { color: error ? 'error' : undefined }), icon: React__default.createElement(CheckBoxOutlineBlank, { color: error ? 'error' : undefined }), onChange: handleChange, disabled: disabled || readOnly }, props)), label: React__default.createElement(Typography, { color: error ? 'error' : undefined, whiteSpace: 'nowrap' }, text) }) }));
});
FormCheckbox.displayName = 'FormCheckbox';
FormCheckbox.defaultProps = FormCheckboxDefaultProps;var FormRadioGroupDefaultProps = {
    inline: true,
};var PADDING_LEFT = 3;
var FormRadioGroup = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, initWidth = _a.width, labelIcon = _a.labelIcon, label = _a.label, inline = _a.inline, initLoading = _a.loading, nowrap = _a.nowrap, initItems = _a.items, initValue = _a.value, initError = _a.error, initHelperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, onLoadItems = _a.onLoadItems, onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    props = __rest$2(_a, ["variant", "size", "color", "focused", "fullWidth", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"]);
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var _c = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth), fullWidth = _c[0], setFullWidth = _c[1];
    // Theme -----------------------------------------------------------------------------------------------------------
    var theme = useTheme();
    // Ref -------------------------------------------------------------------------------------------------------------
    var baseRef = useRef(null);
    var firstInputRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initItems), items = _d[0], setItems = _d[1];
    var _e = useAutoUpdateState$1(initError), error = _e[0], setError = _e[1];
    var _f = useAutoUpdateState$1(initHelperText), helperText = _f[0], setHelperText = _f[1];
    var _g = useAutoUpdateState$1(initDisabled), disabled = _g[0], setDisabled = _g[1];
    var _h = useState(false), isOnGetItemLoading = _h[0], setIsOnGetItemLoading = _h[1];
    var _j = useAutoUpdateState$1(initLoading), loading = _j[0], setLoading = _j[1];
    var _k = useAutoUpdateState$1(initWidth || '100%'), width = _k[0], setWidth = _k[1];
    var _l = useState(), formColWrapRect = _l[0], setFormColWrapRect = _l[1];
    // State - radioGroupNoWrapRect (ResizeDetector) -------------------------------------------------------------------
    var _m = useState(), radioGroupNoWrapRect = _m[0], setRadioGroupNoWrapRect = _m[1];
    var resizeWidthDetectorRef = useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        onResize: function () {
            var _a;
            setRadioGroupNoWrapRect((_a = resizeWidthDetectorRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect());
        },
    }).ref;
    // State - height (ResizeDetector) ---------------------------------------------------------------------------------
    var _o = useResizeDetector(), height = _o.height, resizeHeightDetectorRef = _o.ref;
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _p = useAutoUpdateState$1(initValue, getFinalValue), value = _p[0], setValue = _p[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        if (onValueChange)
            onValueChange(name, value);
    }, [value]);
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        return __assign$4({ width: width, paddingLeft: PADDING_LEFT }, initStyle);
    }, [initStyle, width]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            if (onValueChange)
                onValueChange(name, value);
        }
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
    }, [initWidth, formFullWidth, initFullWidth, formColWrapRect, radioGroupNoWrapRect]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = firstInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        if (required && empty$1(value)) {
            setErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [required, onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
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
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return lastDisabled; },
            setDisabled: function (disabled) {
                lastDisabled = disabled;
                setDisabled(disabled);
            },
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(value); },
            setError: function (error, helperText) {
                return setErrorHelperText(error, error ? helperText : initHelperText);
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
    ]);
    useEffect(function () {
        if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items) {
                setItems(items);
                setIsOnGetItemLoading(false);
            });
        }
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
    }, [readOnly, value, items, name, getFinalValue, onValueChangeByUser, onRequestSearchSubmit]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { focused: focused, ref: baseRef, className: classNames$1(className, 'FormValueItem', 'FormRadioGroup'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, fullWidth: fullWidth, required: required, error: error, helperText: helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, controlHeight: height || (size === 'small' ? 35 : 39), controlVerticalCenter: true, control: React__default.createElement(React__default.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React__default.createElement("div", { ref: resizeWidthDetectorRef, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React__default.createElement(RadioGroup, __assign$4({}, props, { style: { marginTop: 10, display: 'inline-flex', flexWrap: 'nowrap' }, name: name, row: inline, value: value === undefined ? null : value, onChange: handleChange }), items.map(function (_a, idx) {
                    var value = _a.value, label = _a.label, itemDisabled = _a.disabled;
                    return (React__default.createElement(FormControlLabel, { ref: idx === 0 ? resizeHeightDetectorRef : null, key: idx, control: React__default.createElement(Radio, { icon: React__default.createElement(RadioButtonUnchecked, { color: error ? 'error' : undefined }), checkedIcon: React__default.createElement(RadioButtonChecked, { color: error ? 'error' : undefined }), color: color, size: size }), label: label, style: { color: error ? theme.palette.error.main : '', marginTop: -10, whiteSpace: 'nowrap' }, value: value, disabled: disabled || readOnly || itemDisabled }));
                })))),
            React__default.createElement("div", null,
                React__default.createElement(RadioGroup, __assign$4({}, props, { style: {
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
});
FormRadioGroup.displayName = 'FormRadioGroup';
FormRadioGroup.defaultProps = FormRadioGroupDefaultProps;var FormToggleButtonGroupDefaultProps = {
    formValueSeparator: ',',
};var css_248z$b = ".FormToggleButtonGroup .ToggleButton {\n  display: inline-block;\n  padding: 0 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.FormToggleButtonGroup:not(.with-label).variant-outlined .ToggleButton {\n  height: 52px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-filled .ToggleButton {\n  height: 52px;\n}\n.FormToggleButtonGroup:not(.with-label).variant-standard .ToggleButton {\n  height: 28px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-outlined .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-filled .ToggleButton {\n  height: 44px;\n}\n.FormToggleButtonGroup:not(.with-label).size-small.variant-standard .ToggleButton {\n  height: 26px;\n}\n.FormToggleButtonGroup.with-label.variant-outlined .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup.with-label.variant-filled .ToggleButton {\n  height: 37px;\n}\n.FormToggleButtonGroup.with-label.variant-standard .ToggleButton {\n  height: 28px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-outlined .ToggleButton {\n  height: 24px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-filled .ToggleButton {\n  height: 31px;\n}\n.FormToggleButtonGroup.with-label.size-small.variant-standard .ToggleButton {\n  height: 26px;\n}\n\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-outlined .ToggleButton {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-filled .ToggleButton {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.variant-standard .ToggleButton {\n  height: 28px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-outlined .ToggleButton {\n  height: 24px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-filled .ToggleButton {\n  height: 31px;\n}\n.Form .FormCol.with-label .FormToggleButtonGroup.size-small.variant-standard .ToggleButton {\n  height: 26px;\n}";
styleInject(css_248z$b);var FormToggleButtonGroup = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initError = _a.error, initHelperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, notAllowEmptyValue = _a.notAllowEmptyValue, exceptValue = _a.exceptValue, initWidth = _a.width, multiple = _a.multiple, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, onLoadItems = _a.onLoadItems, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    var labelId = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formFullWidth = _b.fullWidth, formColWidth = _b.formColWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var _c = useAutoUpdateState$1(initFocused || formFocused), focused = _c[0], setFocused = _c[1];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // Theme -----------------------------------------------------------------------------------------------------------
    var theme = useTheme();
    // State - width (ResizeDetector) ----------------------------------------------------------------------------------
    var _d = useState(), width = _d[0], setWidth = _d[1];
    var resizeWidthDetectorRef = useResizeDetector({
        handleWidth: true,
        onResize: function () {
            setWidth(resizeWidthDetectorRef.current.getBoundingClientRect().width);
        },
    }).ref;
    // State - height (ResizeDetector) ---------------------------------------------------------------------------------
    var _e = useState(), height = _e[0], setHeight = _e[1];
    var resizeHeightDetectorRef = useResizeDetector({
        handleHeight: true,
        onResize: function () {
            setHeight(resizeHeightDetectorRef.current.getBoundingClientRect().height);
        },
    }).ref;
    // State -----------------------------------------------------------------------------------------------------------
    var _f = useState(false), isOnGetItemLoading = _f[0], setIsOnGetItemLoading = _f[1];
    var _g = useAutoUpdateState$1(initItems), items = _g[0], setItems = _g[1];
    var _h = useAutoUpdateState$1(initError), error = _h[0], setError = _h[1];
    var _j = useAutoUpdateState$1(initHelperText), helperText = _j[0], setHelperText = _j[1];
    var _k = useAutoUpdateState$1(initLoading), loading = _k[0], setLoading = _k[1];
    var _l = useAutoUpdateState$1(initDisabled), disabled = _l[0], setDisabled = _l[1];
    // State - itemsValues-----------------------------------------------------------------------------------------------------------
    var itemsValues = useAutoUpdateState$1(useCallback(function () {
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
    }, [items]))[0];
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
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
        return __assign$4({ width: finalWidth }, initStyle);
    }, [initStyle, initWidth, fullWidth, isOnGetItemLoading, width, formColWidth]))[0];
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
    var _m = useAutoUpdateState$1(initValue, getFinalValue), value = _m[0], setValue = _m[1];
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
                    if (empty$1(value)) {
                        setFirstItem = true;
                    }
                }
                else {
                    if (value == null) {
                        setFirstItem = true;
                    }
                }
                if (setFirstItem) {
                    setValue(multiple ? [items[0].value] : items[0].value);
                }
            }
        }
    }, [items, value, multiple, notAllowEmptyValue]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        if (resizeHeightDetectorRef.current)
            resizeHeightDetectorRef.current.focus();
    }, [resizeHeightDetectorRef]);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        if (required && empty$1(value)) {
            setErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [required, onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
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
                    return setErrorHelperText(error, error ? errorText : initHelperText);
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
                    if (empty$1(finalValue_1)) {
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
            if (!isSame$1(value, finalValue_1)) {
                setValue(finalValue_1);
                nextTick(function () {
                    onValueChangeByUser(name, finalValue_1);
                    onRequestSearchSubmit(name, finalValue_1);
                });
            }
        }
    }, [
        value,
        multiple,
        readOnly,
        notAllowEmptyValue,
        multiple,
        getFinalValue,
        name,
        onValueChangeByUser,
        onRequestSearchSubmit,
    ]);
    // Render ----------------------------------------------------------------------------------------------------------
    var formControlBaseProps = {};
    if (focused) {
        formControlBaseProps.focused = true;
    }
    return (React__default.createElement(FormItemBase, __assign$4({}, formControlBaseProps, { className: classNames$1(className, 'FormValueItem', 'FormToggleButtonGroup', "variant-".concat(variant), "size-".concat(size), !!label && 'with-label', !!fullWidth && 'full-width'), variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, required: required, fullWidth: fullWidth, error: error, helperText: helperText, helperTextProps: { style: { marginLeft: 2 } }, style: style, sx: sx, controlHeight: height || 0, controlVerticalCenter: isOnGetItemLoading || loading, control: isOnGetItemLoading || loading ? (React__default.createElement("div", { style: { opacity: 0.54 }, ref: resizeHeightDetectorRef },
            React__default.createElement(CircularProgress, { size: 16, color: 'inherit' }))) : (React__default.createElement(React__default.Fragment, null,
            !fullWidth && !isOnGetItemLoading && !loading && items && (React__default.createElement("div", { ref: resizeWidthDetectorRef, style: {
                    display: 'grid',
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    visibility: 'hidden',
                } },
                React__default.createElement(ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple }, items &&
                    items.map(function (_a, idx) {
                        var value = _a.value, label = _a.label, itemDisabled = _a.disabled, itemColor = _a.color;
                        return (React__default.createElement(ToggleButton, { ref: idx === 0 ? resizeHeightDetectorRef : null, key: idx, size: size, className: 'ToggleButton', value: value, color: itemColor || color, disabled: disabled || readOnly || itemDisabled, style: {
                                borderColor: error ? theme.palette.error.main : '',
                                color: error ? theme.palette.error.main : '',
                            }, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } }, label));
                    })))),
            React__default.createElement(ToggleButtonGroup, { className: 'ToggleButtonGroup', exclusive: !multiple, fullWidth: fullWidth, value: value == null ? null : value, onChange: handleChange, style: {
                    width: !fullWidth && formColWidth && typeof width === 'number' && width > formColWidth
                        ? formColWidth
                        : undefined,
                }, "aria-labelledby": notEmpty(label) ? labelId : undefined }, isOnGetItemLoading || loading || !items || empty$1(items) ? (React__default.createElement(ToggleButton, { ref: resizeHeightDetectorRef, size: size, className: 'ToggleButton', disabled: disabled || readOnly, value: '', style: { visibility: 'hidden' } })) : (items.map(function (_a, idx) {
                var value = _a.value, label = _a.label, itemDisabled = _a.disabled, itemColor = _a.color;
                return (React__default.createElement(ToggleButton, { ref: idx === 0 ? resizeHeightDetectorRef : undefined, key: idx, size: size, className: 'ToggleButton', value: value, color: itemColor || color, disabled: disabled || readOnly || itemDisabled, style: {
                        borderColor: error ? theme.palette.error.main : '',
                        color: error ? theme.palette.error.main : '',
                    }, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } }, label));
            }))))) })));
});
FormToggleButtonGroup.displayName = 'FormToggleButtonGroup';
FormToggleButtonGroup.defaultProps = FormToggleButtonGroupDefaultProps;var FormRatingDefaultProps = {
    value: 0,
    precision: 1,
};var FormRating = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    precision = _a.precision, highlightSelectedOnly = _a.highlightSelectedOnly, icon = _a.icon, emptyIcon = _a.emptyIcon, max = _a.max, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, initHelperText = _a.helperText, initValue = _a.value, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, onValue = _a.onValue, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var _c = useAutoUpdateState$1(initFocused || formFocused), focused = _c[0], setFocused = _c[1];
    // Ref -------------------------------------------------------------------------------------------------------------
    var inputRef = useRef();
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useAutoUpdateState$1(initHelperText), helperText = _e[0], setHelperText = _e[1];
    var _f = useAutoUpdateState$1(initDisabled), disabled = _f[0], setDisabled = _f[1];
    // State - width, height -------------------------------------------------------------------------------------------
    var _g = useResizeDetector(), width = _g.width, height = _g.height, resizeDetectorRef = _g.ref;
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        return onValue ? onValue(value) : value;
    }, [onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _h = useAutoUpdateState$1(initValue || 0, getFinalValue), value = _h[0], setValue = _h[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        return __assign$4({ width: width || 100 }, initStyle);
    }, [initStyle, width]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
        if (resizeDetectorRef.current) {
            inputRef.current = resizeDetectorRef.current.querySelector('input');
        }
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
    var validate = useCallback(function (value) {
        if (required && (empty$1(value) || value === 0)) {
            setErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [required, onValidate, initHelperText]);
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
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
            isExceptValue: function () { return !!exceptValue; },
            isDisabled: function () { return lastDisabled; },
            setDisabled: function (disabled) {
                lastDisabled = disabled;
                setDisabled(disabled);
            },
            focus: focus,
            focusValidate: focus,
            validate: function () { return validate(value); },
            setError: function (error, helperText) {
                return setErrorHelperText(error, error ? helperText : initHelperText);
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
        initHelperText,
        ref,
        onAddValueItem,
        onRemoveValueItem,
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
    }, [readOnly, name, getFinalValue, onValueChangeByUser, onRequestSearchSubmit]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormRating'), labelIcon: labelIcon, label: label, error: error, fullWidth: false, required: required, helperText: helperText, helperTextProps: { style: { marginLeft: 5 } }, style: style, sx: sx, controlHeight: height || (size === 'small' ? 21 : 26), controlVerticalCenter: true, control: React__default.createElement(Rating, { ref: resizeDetectorRef, size: size === 'medium' ? 'large' : 'medium', name: name, precision: precision, highlightSelectedOnly: highlightSelectedOnly, value: value, disabled: disabled || readOnly, max: max, icon: React__default.createElement(FormIcon, { color: color, fontSize: 'inherit' }, icon ? icon : 'Star'), emptyIcon: React__default.createElement(FormIcon, { fontSize: 'inherit' }, emptyIcon ? emptyIcon : 'StarBorder'), onChange: handleChange, onFocus: function () { return setFocused(initFocused || true); }, onBlur: function () { return setFocused(initFocused || false); } }) }));
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
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min();
		} else {
		  module.exports = requireReactIs_development();
		}
} (reactIs));
	return reactIs.exports;
}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign$1;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign$1;
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

	objectAssign$1 = shouldUseNative() ? Object.assign : function (target, source) {
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
	return objectAssign$1;
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
}var has$1;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has$1;
	hasRequiredHas = 1;
	has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
	return has$1;
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
}/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign$2 = (window && window.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var eventPropTypes = {
    onActivate: propTypes.exports.func,
    onAddUndo: propTypes.exports.func,
    onBeforeAddUndo: propTypes.exports.func,
    onBeforeExecCommand: propTypes.exports.func,
    onBeforeGetContent: propTypes.exports.func,
    onBeforeRenderUI: propTypes.exports.func,
    onBeforeSetContent: propTypes.exports.func,
    onBeforePaste: propTypes.exports.func,
    onBlur: propTypes.exports.func,
    onChange: propTypes.exports.func,
    onClearUndos: propTypes.exports.func,
    onClick: propTypes.exports.func,
    onContextMenu: propTypes.exports.func,
    onCopy: propTypes.exports.func,
    onCut: propTypes.exports.func,
    onDblclick: propTypes.exports.func,
    onDeactivate: propTypes.exports.func,
    onDirty: propTypes.exports.func,
    onDrag: propTypes.exports.func,
    onDragDrop: propTypes.exports.func,
    onDragEnd: propTypes.exports.func,
    onDragGesture: propTypes.exports.func,
    onDragOver: propTypes.exports.func,
    onDrop: propTypes.exports.func,
    onExecCommand: propTypes.exports.func,
    onFocus: propTypes.exports.func,
    onFocusIn: propTypes.exports.func,
    onFocusOut: propTypes.exports.func,
    onGetContent: propTypes.exports.func,
    onHide: propTypes.exports.func,
    onInit: propTypes.exports.func,
    onKeyDown: propTypes.exports.func,
    onKeyPress: propTypes.exports.func,
    onKeyUp: propTypes.exports.func,
    onLoadContent: propTypes.exports.func,
    onMouseDown: propTypes.exports.func,
    onMouseEnter: propTypes.exports.func,
    onMouseLeave: propTypes.exports.func,
    onMouseMove: propTypes.exports.func,
    onMouseOut: propTypes.exports.func,
    onMouseOver: propTypes.exports.func,
    onMouseUp: propTypes.exports.func,
    onNodeChange: propTypes.exports.func,
    onObjectResizeStart: propTypes.exports.func,
    onObjectResized: propTypes.exports.func,
    onObjectSelected: propTypes.exports.func,
    onPaste: propTypes.exports.func,
    onPostProcess: propTypes.exports.func,
    onPostRender: propTypes.exports.func,
    onPreProcess: propTypes.exports.func,
    onProgressState: propTypes.exports.func,
    onRedo: propTypes.exports.func,
    onRemove: propTypes.exports.func,
    onReset: propTypes.exports.func,
    onSaveContent: propTypes.exports.func,
    onSelectionChange: propTypes.exports.func,
    onSetAttrib: propTypes.exports.func,
    onSetContent: propTypes.exports.func,
    onShow: propTypes.exports.func,
    onSubmit: propTypes.exports.func,
    onUndo: propTypes.exports.func,
    onVisualAid: propTypes.exports.func
};
var EditorPropTypes = __assign$2({ apiKey: propTypes.exports.string, id: propTypes.exports.string, inline: propTypes.exports.bool, init: propTypes.exports.object, initialValue: propTypes.exports.string, onEditorChange: propTypes.exports.func, outputFormat: propTypes.exports.oneOf(['html', 'text']), value: propTypes.exports.string, tagName: propTypes.exports.string, cloudChannel: propTypes.exports.string, plugins: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.array]), toolbar: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.array]), disabled: propTypes.exports.bool, textareaName: propTypes.exports.string, tinymceScriptSrc: propTypes.exports.string, rollback: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.oneOf([false])]), scriptLoading: propTypes.exports.shape({
        async: propTypes.exports.bool,
        defer: propTypes.exports.bool,
        delay: propTypes.exports.number
    }) }, eventPropTypes);/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var isFunction$1 = function (x) { return typeof x === 'function'; };
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
};/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var createState = function () { return ({
    listeners: [],
    scriptId: uuid('tiny-script'),
    scriptLoading: false,
    scriptLoaded: false
}); };
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, async, defer, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        scriptTag.async = async;
        scriptTag.defer = defer;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, async, defer, delay, callback) {
        var scriptTagInjection = function () { return injectScriptTag(state.scriptId, doc, url, async, defer, function () {
            state.listeners.forEach(function (fn) { return fn(); });
            state.scriptLoaded = true;
        }); };
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!state.scriptLoading) {
                state.scriptLoading = true;
                if (delay > 0) {
                    setTimeout(scriptTagInjection, delay);
                }
                else {
                    scriptTagInjection();
                }
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __extends = (window && window.__extends) || (function () {
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
var __assign$1 = (window && window.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var changeEvents = function () { var _a, _b, _c; return ((_c = (_b = (_a = getTinymce()) === null || _a === void 0 ? void 0 : _a.Env) === null || _b === void 0 ? void 0 : _b.browser) === null || _c === void 0 ? void 0 : _c.isIE()) ? 'change keyup compositionend setcontent' : 'change input compositionend setcontent'; };
var beforeInputEvent = function () { return isBeforeInputEventAvailable() ? 'beforeinput SelectionChange' : 'SelectionChange'; };
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
                if (!_this.inline || _this.editor.hasFocus) {
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
                    if (isFunction$1(_this.props.onEditorChange)) {
                        var format = _this.props.outputFormat;
                        var out = format === 'html' ? newContent : editor.getContent({ format: format });
                        _this.props.onEditorChange(out, editor);
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
            var tinymce = getTinymce();
            if (!tinymce) {
                throw new Error('tinymce should have been loaded into global scope');
            }
            var finalInit = __assign$1(__assign$1({}, _this.props.init), { selector: undefined, target: target, readonly: _this.props.disabled, inline: _this.inline, plugins: mergePlugins((_a = _this.props.init) === null || _a === void 0 ? void 0 : _a.plugins, _this.props.plugins), toolbar: (_b = _this.props.toolbar) !== null && _b !== void 0 ? _b : (_c = _this.props.init) === null || _c === void 0 ? void 0 : _c.toolbar, setup: function (editor) {
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
                    if (_this.props.init && isFunction$1(_this.props.init.setup)) {
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
                    if (_this.props.init && isFunction$1(_this.props.init.init_instance_callback)) {
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
        var _a, _b, _c, _d, _e, _f;
        if (getTinymce() !== null) {
            this.initialise();
        }
        else if (this.elementRef.current && this.elementRef.current.ownerDocument) {
            ScriptLoader.load(this.elementRef.current.ownerDocument, this.getScriptSrc(), (_b = (_a = this.props.scriptLoading) === null || _a === void 0 ? void 0 : _a.async) !== null && _b !== void 0 ? _b : false, (_d = (_c = this.props.scriptLoading) === null || _c === void 0 ? void 0 : _c.defer) !== null && _d !== void 0 ? _d : false, (_f = (_e = this.props.scriptLoading) === null || _e === void 0 ? void 0 : _e.delay) !== null && _f !== void 0 ? _f : 0, this.initialise);
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        var _this = this;
        var editor = this.editor;
        if (editor) {
            editor.off(changeEvents(), this.handleEditorChange);
            editor.off(beforeInputEvent(), this.handleBeforeInput);
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
    Editor.prototype.getScriptSrc = function () {
        if (typeof this.props.tinymceScriptSrc === 'string') {
            return this.props.tinymceScriptSrc;
        }
        else {
            var channel = this.props.cloudChannel;
            var apiKey = this.props.apiKey ? this.props.apiKey : 'no-api-key';
            return "https://cdn.tiny.cloud/1/".concat(apiKey, "/tinymce/").concat(channel, "/tinymce.min.js");
        }
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
                this.editor.on(changeEvents(), this.handleEditorChange);
                this.editor.on(beforeInputEvent(), this.handleBeforeInput);
                this.editor.on('keydown', this.handleBeforeInputSpecial);
                this.editor.on('keyup', this.handleEditorChangeSpecial);
                this.editor.on('NewBlock', this.handleEditorChange);
            }
            else if (wasControlled && !nowControlled) {
                this.editor.off(changeEvents(), this.handleEditorChange);
                this.editor.off(beforeInputEvent(), this.handleBeforeInput);
                this.editor.off('keydown', this.handleBeforeInputSpecial);
                this.editor.off('keyup', this.handleEditorChangeSpecial);
                this.editor.off('NewBlock', this.handleEditorChange);
            }
        }
    };
    Editor.propTypes = EditorPropTypes;
    Editor.defaultProps = {
        cloudChannel: '5'
    };
    return Editor;
}(React.Component));var FormTextEditorDefaultProps = {
    menubar: true,
    height: 500,
};var css_248z$a = ".FormTextEditor.initializing textarea {\n  display: none;\n}\n.FormTextEditor.error .tox-tinymce {\n  border-color: #d32f2f;\n}\n\n.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item {\n  padding-right: 20px !important;\n}\n\n.tox-notifications-container {\n  display: none;\n}";
styleInject(css_248z$a);var FormTextEditor = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, 
    //----------------------------------------------------------------------------------------------------------------
    menubar = _a.menubar, height = _a.height, onImageUpload = _a.onImageUpload, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, readOnly = _a.readOnly, required = _a.required, initDisabled = _a.disabled, initError = _a.error, initHelperText = _a.helperText, initValue = _a.value, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onRemoveValueItem = _b.onRemoveValueItem, onValueChangeByUser = _b.onValueChangeByUser;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var _c = useAutoUpdateState$1(initFocused || formFocused), focused = _c[0], setFocused = _c[1];
    // Ref -------------------------------------------------------------------------------------------------------------
    var editorRef = useRef(null);
    var keyDownTime = useRef(0);
    // State - value ---------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initValue), value = _d[0], setValue = _d[1];
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // State -----------------------------------------------------------------------------------------------------------
    var _e = useAutoUpdateState$1(initError), error = _e[0], setError = _e[1];
    var _f = useAutoUpdateState$1(initHelperText), helperText = _f[0], setHelperText = _f[1];
    var _g = useState(false), initialized = _g[0], setInitialized = _g[1];
    var _h = useAutoUpdateState$1(initDisabled), disabled = _h[0], setDisabled = _h[1];
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
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        var isEmptyValue = false;
        if (value) {
            var d = document.createElement('div');
            d.innerHTML = value;
            var text = d.textContent || d.innerText;
            isEmptyValue = empty$1(text.trim());
        }
        if (required && (isEmptyValue || empty$1(value))) {
            setErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormTextEditor'; },
            getName: function () { return name; },
            getReset: function () { return initValue; },
            reset: function () {
                lastValue = initValue;
                setValue(lastValue);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = value;
                setValue(lastValue);
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
            setError: function (error, helperText) {
                return setErrorHelperText(error, error ? helperText : initHelperText);
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
        initHelperText,
        ref,
        onAddValueItem,
        onRemoveValueItem,
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
    }, [name, onValueChangeByUser]);
    var handleKeyDown = useCallback(function () {
        keyDownTime.current = new Date().getTime();
    }, []);
    var handleImageUpload = useCallback(function (blobInfo, success, failure, progress) {
        if (onImageUpload)
            onImageUpload(blobInfo.blob(), success, failure, progress);
    }, [onImageUpload]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormTextEditor', !initialized && 'initializing'), labelIcon: labelIcon, label: label, error: error, required: required, fullWidth: true, helperText: helperText, helperTextProps: { style: { marginLeft: 5 } }, style: { width: '100%' }, controlHeight: height, control: React__default.createElement(React__default.Fragment, null,
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
};var FormAutocomplete = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, label = _a.label, initLoading = _a.loading, initItems = _a.items, initValue = _a.value, initError = _a.error, initHelperText = _a.helperText, initDisabled = _a.disabled, readOnly = _a.readOnly, required = _a.required, exceptValue = _a.exceptValue, width = _a.width, placeholder = _a.placeholder, initMultiple = _a.multiple, formValueSeparator = _a.formValueSeparator, formValueSort = _a.formValueSort, disablePortal = _a.disablePortal, noOptionsText = _a.noOptionsText, loadingText = _a.loadingText, limitTags = _a.limitTags, openOnFocus = _a.openOnFocus, disableClearable = _a.disableClearable, onLoadItems = _a.onLoadItems, onRenderItem = _a.onRenderItem, onRenderTag = _a.onRenderTag, onAddItem = _a.onAddItem, 
    //----------------------------------------------------------------------------------------------------------------
    onChange = _a.onChange, onValue = _a.onValue, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className, initStyle = _a.style, sx = _a.sx;
    var id = useId();
    // Ref -------------------------------------------------------------------------------------------------------------
    var textFieldRef = useRef(null);
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State -----------------------------------------------------------------------------------------------------------
    var _c = useState(false), isOnGetItemLoading = _c[0], setIsOnGetItemLoading = _c[1];
    var _d = useAutoUpdateState$1(initItems), items = _d[0], setItems = _d[1];
    var _e = useAutoUpdateState$1(initError), error = _e[0], setError = _e[1];
    var _f = useAutoUpdateState$1(initHelperText), helperText = _f[0], setHelperText = _f[1];
    var _g = useAutoUpdateState$1(initLoading), loading = _g[0], setLoading = _g[1];
    var _h = useAutoUpdateState$1(initDisabled), disabled = _h[0], setDisabled = _h[1];
    var multiple = useAutoUpdateLayoutState(useCallback(function () {
        return initMultiple;
    }, [initMultiple]))[0];
    // State - itemsValues-----------------------------------------------------------------------------------------------------------
    var itemsValues = useAutoUpdateState$1(useCallback(function () {
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
    }, [items]))[0];
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        var style = __assign$4({ minWidth: 120 }, initStyle);
        if (width != null) {
            style.width = width;
        }
        return style;
    }, [initStyle, width]))[0];
    // Function - getFinalValue ----------------------------------------------------------------------------------------
    var getFinalValue = useCallback(function (value) {
        var finalValue = value;
        if (initMultiple) {
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
                if (initMultiple) {
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
    }, [initMultiple, formValueSeparator, itemsValues, onValue]);
    // State - value ---------------------------------------------------------------------------------------------------
    var _j = useAutoUpdateLayoutState(initValue, getFinalValue), value = _j[0], setValue = _j[1];
    var componentValue = useAutoUpdateLayoutState(useCallback(function () {
        var finalValue = value;
        if (finalValue != null) {
            if (initMultiple) {
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
            finalValue = initMultiple ? [] : undefined;
        }
        if (notEmpty(finalValue) && items) {
            if (Array.isArray(finalValue)) {
                return items.filter(function (info) { return Array.isArray(finalValue) && finalValue.includes(info.value); });
            }
            else {
                return items.find(function (info) { return info.value === value; }) || (initMultiple ? [] : null);
            }
        }
        else {
            return initMultiple ? [] : null;
        }
    }, [value, initMultiple, items]))[0];
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
    }, []);
    useFirstSkipEffect$1(function () {
        if (error)
            validate(value);
        if (onChange)
            onChange(value);
        onValueChange(name, value);
    }, [value]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldRef]);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        if (required && empty$1(value)) {
            setErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [required, onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
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
                    return setErrorHelperText(error, error ? errorText : initHelperText);
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
    ]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (componentValue, reason, details) {
        var go = function () {
            var newValue;
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
            if (!isSame$1(value, finalValue)) {
                setValue(finalValue);
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
    }, [value, multiple, readOnly, getFinalValue, name, onValueChangeByUser, onRequestSearchSubmit, onAddItem]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Autocomplete, { options: items || [], className: classNames$1(className, 'FormAutocomplete'), sx: sx, multiple: multiple, fullWidth: !width && fullWidth, openOnFocus: openOnFocus, disableClearable: disableClearable, disablePortal: disablePortal, noOptionsText: noOptionsText, value: componentValue, style: style, isOptionEqualToValue: function (option, value) { return option.value === value.value; }, disabled: disabled, readOnly: readOnly, loading: loading || isOnGetItemLoading, loadingText: loadingText, limitTags: limitTags, onChange: function (e, value, reason, details) { return handleChange(value, reason, details); }, renderOption: function (props, option) { return (React__default.createElement("li", __assign$4({}, props, { key: option.value }), onRenderItem ? onRenderItem(option) : option.label)); }, renderTags: function (value, getTagProps) {
            return value.map(function (option, index) { return (React__default.createElement(Chip, __assign$4({ size: 'small', label: onRenderTag ? onRenderTag(option) : option.label }, getTagProps({ index: index })))); });
        }, renderInput: function (params) { return (React__default.createElement(FormTextField, __assign$4({}, params, { ref: textFieldRef, name: name, variant: variant, size: size, color: color, labelIcon: labelIcon, label: label, labelShrink: labelShrink, required: required, focused: focused, error: error, helperText: helperText, placeholder: placeholder, noFormValueItem: true, InputProps: __assign$4(__assign$4({}, params.InputProps), { endAdornment: (React__default.createElement(React__default.Fragment, null,
                    loading || isOnGetItemLoading ? React__default.createElement(CircularProgress$1, { color: 'inherit', size: 20 }) : null,
                    params.InputProps.endAdornment)) }) }))); } }));
});
FormAutocomplete.displayName = 'FormAutocomplete';
FormAutocomplete.defaultProps = FormAutocompleteDefaultProps;var FormDatePickerDefaultProps = {};var __assign = function() {
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

var classNames = classnames.exports;function useFirstSkipEffect(effect, deps) {
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
    var className = _a.className, initChildren = _a.children, initStyle = _a.style, props = __rest(_a, ["className", "children", "style"]);
    var children = useAutoUpdateState(useCallback(function () {
        return initChildren === null || initChildren === void 0 ? void 0 : initChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); });
    }, [initChildren]))[0];
    var style = useAutoUpdateState(useCallback(function () {
        return __assign({ verticalAlign: 'middle' }, initStyle);
    }, [initStyle]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Icon$1, __assign({ ref: ref }, props, { className: classNames('Icon', className), style: style }), children));
});
Icon.displayName = 'Icon';
Icon.defaultProps = IconDefaultProps;var IconTextDefaultProps = {
    iconMarginRight: 3,
};var IconText = function (_a) {
    var children = _a.children, icon = _a.icon, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, initTextProps = _a.textProps, otherProps = __rest(_a, ["children", "icon", "iconMarginRight", "iconProps", "textProps"]);
    var iconProps = useAutoUpdateState(useCallback(function () {
        return __assign(__assign({}, initIconProps), { style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style) });
    }, [initIconProps, iconMarginRight]))[0];
    var textProps = useAutoUpdateState(useCallback(function () {
        return __assign(__assign({}, initTextProps), { style: __assign({ verticalAlign: 'middle' }, initTextProps === null || initTextProps === void 0 ? void 0 : initTextProps.style) });
    }, [initTextProps]))[0];
    return (React__default.createElement(Box, __assign({ component: 'span' }, otherProps),
        icon && React__default.createElement(Icon, __assign({}, iconProps), icon),
        React__default.createElement("span", __assign({}, textProps), children)));
};
IconText.defaultProps = IconTextDefaultProps;var PrivateDatePickerDefaultProps = {
    showDaysOutsideCurrentMonth: true,
    align: 'center',
};var PrivateStaticDatePickerDefaultProps = {};var PrivateYearSelectDefaultProps = {};var css_248z$9 = ".PrivateYearSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n}\n.PrivateYearSelect button {\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 18px;\n}";
styleInject(css_248z$9);var PrivateToggleButtonDefaultProps = {};var PrivateToggleButton = React__default.forwardRef(function (_a, ref) {
    var children = _a.children, initClassName = _a.className, selected = _a.selected, activated = _a.activated, outlined = _a.outlined, props = __rest$2(_a, ["children", "className", "selected", "activated", "outlined"]);
    var theme = useTheme();
    var className = useAutoUpdateState$1(useCallback(function () {
        return classNames$1(initClassName, selected && 'selected', activated && 'activated', outlined && 'outlined');
    }, [initClassName, selected, activated, outlined]))[0];
    var sx = useAutoUpdateState$1(useCallback(function () {
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
    }, [selected, activated, outlined]))[0];
    return (React__default.createElement(Button, __assign$4({}, props, { ref: ref, sx: sx, variant: 'text', className: classNames$1(className, selected && 'selected') }), children));
});
PrivateToggleButton.displayName = 'PrivateToggleButton';
PrivateToggleButton.defaultProps = PrivateToggleButtonDefaultProps;var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$j =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();var objectGetOwnPropertyDescriptor = {};var fails$o = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};var fails$n = fails$o;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$n(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});var fails$m = fails$o;

var functionBindNative = !fails$m(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});var NATIVE_BIND$3 = functionBindNative;

var call$e = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$e.bind(call$e) : function () {
  return call$e.apply(call$e, arguments);
};var objectPropertyIsEnumerable = {};var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;var createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$3 = Function.prototype;
var call$d = FunctionPrototype$3.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$3.bind.bind(call$d, call$d);

var functionUncurryThisRaw = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$d.apply(fn, arguments);
  };
};var uncurryThisRaw$1 = functionUncurryThisRaw;

var toString$a = uncurryThisRaw$1({}.toString);
var stringSlice$4 = uncurryThisRaw$1(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$4(toString$a(it), 8, -1);
};var classofRaw$1 = classofRaw$2;
var uncurryThisRaw = functionUncurryThisRaw;

var functionUncurryThis = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThisRaw(fn);
};var uncurryThis$n = functionUncurryThis;
var fails$l = fails$o;
var classof$a = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$n(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$l(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$a(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$7 = function (it) {
  return it === null || it === undefined;
};var isNullOrUndefined$6 = isNullOrUndefined$7;

var $TypeError$b = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (isNullOrUndefined$6(it)) throw $TypeError$b("Can't call method on " + it);
  return it;
};// toObject with fallback for non-array-like ES3 strings
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$6 = function (it) {
  return IndexedObject$3(requireObjectCoercible$5(it));
};var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$k = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};var isCallable$j = isCallable$k;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$g = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$j(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$j(it);
};var global$i = global$j;
var isCallable$i = isCallable$k;

var aFunction = function (argument) {
  return isCallable$i(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$i[namespace]) : global$i[namespace] && global$i[namespace][method];
};var uncurryThis$m = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$m({}.isPrototypeOf);var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';var global$h = global$j;
var userAgent = engineUserAgent;

var process$2 = global$h.process;
var Deno = global$h.Deno;
var versions = process$2 && process$2.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$k = fails$o;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$k(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';var getBuiltIn$3 = getBuiltIn$5;
var isCallable$h = isCallable$k;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$h($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
};var $String$3 = String;

var tryToString$3 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};var isCallable$g = isCallable$k;
var tryToString$2 = tryToString$3;

var $TypeError$a = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$4 = function (argument) {
  if (isCallable$g(argument)) return argument;
  throw $TypeError$a(tryToString$2(argument) + ' is not a function');
};var aCallable$3 = aCallable$4;
var isNullOrUndefined$5 = isNullOrUndefined$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$3(func);
};var call$c = functionCall;
var isCallable$f = isCallable$k;
var isObject$f = isObject$g;

var $TypeError$9 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$f(fn = input.toString) && !isObject$f(val = call$c(fn, input))) return val;
  if (isCallable$f(fn = input.valueOf) && !isObject$f(val = call$c(fn, input))) return val;
  if (pref !== 'string' && isCallable$f(fn = input.toString) && !isObject$f(val = call$c(fn, input))) return val;
  throw $TypeError$9("Can't convert object to primitive value");
};var shared$4 = {exports: {}};var global$g = global$j;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(global$g, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$g[key] = value;
  } return value;
};var global$f = global$j;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$f[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.0',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return $Object$2(requireObjectCoercible$4(argument));
};var uncurryThis$l = functionUncurryThis;
var toObject$5 = toObject$6;

var hasOwnProperty$1 = uncurryThis$l({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$5(it), key);
};var uncurryThis$k = functionUncurryThis;

var id$2 = 0;
var postfix = Math.random();
var toString$9 = uncurryThis$k(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$9(++id$2 + postfix, 36);
};var global$e = global$j;
var shared$3 = shared$4.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$2 = global$e.Symbol;
var symbolFor = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$2;

var wellKnownSymbol$f = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$a(Symbol$2, name)) {
      WellKnownSymbolsStore[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};var call$b = functionCall;
var isObject$e = isObject$g;
var isSymbol$3 = isSymbol$4;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$e = wellKnownSymbol$f;

var $TypeError$8 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$e('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$e(input) || isSymbol$3(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$b(exoticToPrim, input, pref);
    if (!isObject$e(result) || isSymbol$3(result)) return result;
    throw $TypeError$8("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};var toPrimitive = toPrimitive$1;
var isSymbol$2 = isSymbol$4;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$2(key) ? key : key + '';
};var global$d = global$j;
var isObject$d = isObject$g;

var document$1 = global$d.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$d(document$1) && isObject$d(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};var DESCRIPTORS$a = descriptors;
var fails$j = fails$o;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});var DESCRIPTORS$9 = descriptors;
var call$a = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$9(O, P)) return createPropertyDescriptor$3(!call$a(propertyIsEnumerableModule$1.f, O, P), O[P]);
};var objectDefineProperty = {};var DESCRIPTORS$8 = descriptors;
var fails$i = fails$o;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});var isObject$c = isObject$g;

var $String$2 = String;
var $TypeError$7 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$d = function (argument) {
  if (isObject$c(argument)) return argument;
  throw $TypeError$7($String$2(argument) + ' is not an object');
};var DESCRIPTORS$7 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$c = anObject$d;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$6 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$c(O);
  P = toPropertyKey$1(P);
  anObject$c(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$c(O);
  P = toPropertyKey$1(P);
  anObject$c(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};var DESCRIPTORS$6 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;

var createNonEnumerableProperty$5 = DESCRIPTORS$6 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};var makeBuiltIn$2 = {exports: {}};var DESCRIPTORS$5 = descriptors;
var hasOwn$8 = hasOwnProperty_1;

var FunctionPrototype$2 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$8(FunctionPrototype$2, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$2, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};var uncurryThis$j = functionUncurryThis;
var isCallable$e = isCallable$k;
var store$1 = sharedStore;

var functionToString$1 = uncurryThis$j(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$e(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString$1(it);
  };
}

var inspectSource$2 = store$1.inspectSource;var global$c = global$j;
var isCallable$d = isCallable$k;

var WeakMap$2 = global$c.WeakMap;

var weakMapBasicDetection = isCallable$d(WeakMap$2) && /native code/.test(String(WeakMap$2));var shared$2 = shared$4.exports;
var uid$1 = uid$3;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid$1(key));
};var hiddenKeys$5 = {};var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
var global$b = global$j;
var isObject$b = isObject$g;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$7 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$4 = hiddenKeys$5;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$b.TypeError;
var WeakMap$1 = global$b.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$b(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP$1 || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap$1());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$4[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$7(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};var fails$h = fails$o;
var isCallable$c = isCallable$k;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$3 = internalState;

var enforceInternalState$1 = InternalStateModule$3.enforce;
var getInternalState$3 = InternalStateModule$3.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$h(function () {
  return defineProperty$6(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$4) defineProperty$6(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$6(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$4) defineProperty$6(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$c(this) && getInternalState$3(this).source || inspectSource$1(this);
}, 'toString');var isCallable$b = isCallable$k;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$7 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$b(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};var objectGetOwnPropertyNames = {};var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
};var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$5 = function (obj) {
  return toLength$2(obj.length);
};var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$4 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$4(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$4(false)
};var uncurryThis$i = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$5;

var push$2 = uncurryThis$i([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$5(hiddenKeys$3, key) && hasOwn$5(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }
  return result;
};// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$2);
};var objectGetOwnPropertySymbols = {};// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$h = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$b = anObject$d;

var concat$2 = uncurryThis$h([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$2 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$b(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};var hasOwn$4 = hasOwnProperty_1;
var ownKeys$1 = ownKeys$2;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys$1(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};var fails$g = fails$o;
var isCallable$a = isCallable$k;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$a(detection) ? fails$g(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;var global$a = global$j;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$6 = defineBuiltIn$7;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$a;
  } else if (STATIC) {
    target = global$a[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$a[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$6(target, key, sourceProperty, options);
  }
};var wellKnownSymbol$d = wellKnownSymbol$f;

var TO_STRING_TAG$3 = wellKnownSymbol$d('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$9 = isCallable$k;
var classofRaw = classofRaw$2;
var wellKnownSymbol$c = wellKnownSymbol$f;

var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$9 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};var classof$8 = classof$9;

var $String$1 = String;

var toString$8 = function (argument) {
  if (classof$8(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';var uncurryThis$g = functionUncurryThis;
var requireObjectCoercible$3 = requireObjectCoercible$6;
var toString$7 = toString$8;
var whitespaces$1 = whitespaces$2;

var replace$2 = uncurryThis$g(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$3 = function (TYPE) {
  return function ($this) {
    var string = toString$7(requireObjectCoercible$3($this));
    if (TYPE & 1) string = replace$2(string, ltrim, '');
    if (TYPE & 2) string = replace$2(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$3(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$3(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$3(3)
};var global$9 = global$j;
var fails$f = fails$o;
var uncurryThis$f = functionUncurryThis;
var toString$6 = toString$8;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;

var $parseInt$1 = global$9.parseInt;
var Symbol$1 = global$9.Symbol;
var ITERATOR$6 = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec$2 = uncurryThis$f(hex.exec);
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$6 && !fails$f(function () { $parseInt$1(Object(ITERATOR$6)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString$6(string));
  return $parseInt$1(S, (radix >>> 0) || (exec$2(hex, S) ? 16 : 10));
} : $parseInt$1;var $$7 = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$7({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};var DESCRIPTORS$3 = descriptors;
var uncurryThis$e = functionUncurryThis;
var call$9 = functionCall;
var fails$e = fails$o;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$4 = toObject$6;
var IndexedObject$2 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$5 = Object.defineProperty;
var concat$1 = uncurryThis$e([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$e(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$5({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$5(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$4(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$2(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$3 || call$9(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;var $$6 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$6({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});var uncurryThis$d = functionUncurryThis;
var aCallable$2 = aCallable$4;
var NATIVE_BIND$1 = functionBindNative;

var bind$2 = uncurryThis$d(uncurryThis$d.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$2(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$2(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};var classof$7 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$7(argument) == 'Array';
};var uncurryThis$c = functionUncurryThis;
var fails$d = fails$o;
var isCallable$8 = isCallable$k;
var classof$6 = classof$9;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$2;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$c(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$8(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$8(argument)) return false;
  switch (classof$6(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$d(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;var isArray = isArray$1;
var isConstructor = isConstructor$1;
var isObject$a = isObject$g;
var wellKnownSymbol$b = wellKnownSymbol$f;

var SPECIES$2 = wellKnownSymbol$b('species');
var $Array$1 = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array$1 || isArray(C.prototype))) C = undefined;
    else if (isObject$a(C)) {
      C = C[SPECIES$2];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$1 : C;
};var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};var bind$1 = functionBindContext;
var uncurryThis$b = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toObject$3 = toObject$6;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var arraySpeciesCreate = arraySpeciesCreate$1;

var push$1 = uncurryThis$b([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$2 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$3($this);
    var self = IndexedObject$1(O);
    var boundFunction = bind$1(callbackfn, that);
    var length = lengthOfArrayLike$3(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$1(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$1(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$2(7)
};var fails$c = fails$o;
var wellKnownSymbol$a = wellKnownSymbol$f;
var V8_VERSION = engineV8Version;

var SPECIES$1 = wellKnownSymbol$a('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails$c(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};var $$5 = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$5({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$5 = classof$9;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString$3 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$5(this) + ']';
};var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$5 = defineBuiltIn$7;
var toString$5 = objectToString$3;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$5(Object.prototype, 'toString', toString$5, { unsafe: true });
}var objectDefineProperties = {};var DESCRIPTORS$2 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$a = anObject$d;
var toIndexedObject$2 = toIndexedObject$6;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$2 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$a(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};var getBuiltIn = getBuiltIn$5;

var html$1 = getBuiltIn('document', 'documentElement');/* global ActiveXObject -- old IE, WSH */

var anObject$9 = anObject$d;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = hiddenKeys$5;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$9(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};var wellKnownSymbol$9 = wellKnownSymbol$f;
var create$2 = objectCreate;
var defineProperty$4 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$9('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$4(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};var iterators = {};var fails$b = fails$o;

var correctPrototypeGetter = !fails$b(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});var hasOwn$3 = hasOwnProperty_1;
var isCallable$7 = isCallable$k;
var toObject$2 = toObject$6;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$2(O);
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$7(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};var fails$a = fails$o;
var isCallable$6 = isCallable$k;
var isObject$9 = isObject$g;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$4 = defineBuiltIn$7;
var wellKnownSymbol$8 = wellKnownSymbol$f;

var ITERATOR$5 = wellKnownSymbol$8('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$9(IteratorPrototype$2) || fails$a(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$6(IteratorPrototype$2[ITERATOR$5])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};var defineProperty$3 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$7 = wellKnownSymbol$f;

var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$1)) {
    defineProperty$3(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};var isCallable$5 = isCallable$k;

var $String = String;
var $TypeError$5 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$5(argument)) return argument;
  throw $TypeError$5("Can't set " + $String(argument) + ' as a prototype');
};/* eslint-disable no-proto -- safe */

var uncurryThis$a = functionUncurryThis;
var anObject$8 = anObject$d;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$a(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$8(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);var $$4 = _export;
var call$8 = functionCall;
var FunctionName = functionName;
var isCallable$4 = isCallable$k;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$3 = defineBuiltIn$7;
var wellKnownSymbol$6 = wellKnownSymbol$f;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$6('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$4]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$4])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$4, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$8(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$4({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$2 = function (value, done) {
  return { value: value, done: done };
};var toIndexedObject$1 = toIndexedObject$6;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$2;
var DESCRIPTORS$1 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$2 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject$1(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject$1(index, false);
  if (kind == 'values') return createIterResultObject$1(target[index], false);
  return createIterResultObject$1([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$1 && values.name !== 'values') try {
  defineProperty$2(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }var uncurryThis$9 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$4 = toString$8;
var requireObjectCoercible$2 = requireObjectCoercible$6;

var charAt$4 = uncurryThis$9(''.charAt);
var charCodeAt = uncurryThis$9(''.charCodeAt);
var stringSlice$3 = uncurryThis$9(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$4(requireObjectCoercible$2($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$4(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$3(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};var charAt$3 = stringMultibyte.charAt;
var toString$3 = toString$8;
var InternalStateModule$1 = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$1(this, {
    type: STRING_ITERATOR,
    string: toString$3(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt$3(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});var defineBuiltIn$2 = defineBuiltIn$7;

var defineBuiltIns$2 = function (target, src, options) {
  for (var key in src) defineBuiltIn$2(target, key, src[key], options);
  return target;
};var internalMetadata = {exports: {}};var objectGetOwnPropertyNamesExternal = {};var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$4;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var createProperty = createProperty$1;

var $Array = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$2(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};/* eslint-disable es/no-object-getownpropertynames -- safe */

var classof$4 = classofRaw$2;
var toIndexedObject = toIndexedObject$6;
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
var arraySlice = arraySliceSimple;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$4(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails$9 = fails$o;

var arrayBufferNonExtensible = fails$9(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});var fails$8 = fails$o;
var isObject$8 = isObject$g;
var classof$3 = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails$8(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
var objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject$8(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$3(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;var fails$7 = fails$o;

var freezing = !fails$7(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});var $$3 = _export;
var uncurryThis$8 = functionUncurryThis;
var hiddenKeys = hiddenKeys$5;
var isObject$7 = isObject$g;
var hasOwn$1 = hasOwnProperty_1;
var defineProperty$1 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible$1 = objectIsExtensible;
var uid = uid$3;
var FREEZING = freezing;

var REQUIRED = false;
var METADATA = uid('meta');
var id$1 = 0;

var setMetadata = function (it) {
  defineProperty$1(it, METADATA, { value: {
    objectID: 'O' + id$1++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject$7(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn$1(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData$1 = function (it, create) {
  if (!hasOwn$1(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible$1(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible$1(it) && !hasOwn$1(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis$8([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $$3({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = internalMetadata.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData$1,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;var wellKnownSymbol$5 = wellKnownSymbol$f;
var Iterators$1 = iterators;

var ITERATOR$3 = wellKnownSymbol$5('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$3] === it);
};var classof$2 = classof$9;
var getMethod$3 = getMethod$5;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var Iterators = iterators;
var wellKnownSymbol$4 = wellKnownSymbol$f;

var ITERATOR$2 = wellKnownSymbol$4('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$4(it)) return getMethod$3(it, ITERATOR$2)
    || getMethod$3(it, '@@iterator')
    || Iterators[classof$2(it)];
};var call$7 = functionCall;
var aCallable$1 = aCallable$4;
var anObject$7 = anObject$d;
var tryToString$1 = tryToString$3;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$4 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$1(iteratorMethod)) return anObject$7(call$7(iteratorMethod, argument));
  throw $TypeError$4(tryToString$1(argument) + ' is not iterable');
};var call$6 = functionCall;
var anObject$6 = anObject$d;
var getMethod$2 = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$6(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$6(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$6(innerResult);
  return value;
};var bind = functionBindContext;
var call$5 = functionCall;
var anObject$5 = anObject$d;
var tryToString = tryToString$3;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var $TypeError$3 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$2 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$5(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$3(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$5(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
  } return new Result(false);
};var isPrototypeOf = objectIsPrototypeOf;

var $TypeError$2 = TypeError;

var anInstance$2 = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError$2('Incorrect invocation');
};var wellKnownSymbol$3 = wellKnownSymbol$f;

var ITERATOR$1 = wellKnownSymbol$3('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$1] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$1] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};var isCallable$3 = isCallable$k;
var isObject$6 = isObject$g;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$3(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$6(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};var $$2 = _export;
var global$8 = global$j;
var uncurryThis$7 = functionUncurryThis;
var isForced = isForced_1;
var defineBuiltIn$1 = defineBuiltIn$7;
var InternalMetadataModule$1 = internalMetadata.exports;
var iterate$1 = iterate$2;
var anInstance$1 = anInstance$2;
var isCallable$2 = isCallable$k;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var isObject$5 = isObject$g;
var fails$6 = fails$o;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var setToStringTag = setToStringTag$3;
var inheritIfRequired = inheritIfRequired$1;

var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global$8[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis$7(NativePrototype[KEY]);
    defineBuiltIn$1(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$5(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable$2(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$6(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule$1.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails$6(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails$6(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance$1(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined$3(iterable)) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $$2({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};var uncurryThis$6 = functionUncurryThis;
var defineBuiltIns$1 = defineBuiltIns$2;
var getWeakData = internalMetadata.exports.getWeakData;
var anInstance = anInstance$2;
var anObject$4 = anObject$d;
var isNullOrUndefined$2 = isNullOrUndefined$7;
var isObject$4 = isObject$g;
var iterate = iterate$2;
var ArrayIterationModule = arrayIteration;
var hasOwn = hasOwnProperty_1;
var InternalStateModule = internalState;

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice$1 = uncurryThis$6([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice$1(this.entries, index, 1);
    return !!~index;
  }
};

var collectionWeak$1 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (!isNullOrUndefined$2(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject$4(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns$1(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject$4(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject$4(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns$1(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject$4(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};var global$7 = global$j;
var uncurryThis$5 = functionUncurryThis;
var defineBuiltIns = defineBuiltIns$2;
var InternalMetadataModule = internalMetadata.exports;
var collection = collection$1;
var collectionWeak = collectionWeak$1;
var isObject$3 = isObject$g;
var isExtensible = objectIsExtensible;
var enforceInternalState = internalState.enforce;
var NATIVE_WEAK_MAP = weakMapBasicDetection;

var IS_IE11 = !global$7.ActiveXObject && 'ActiveXObject' in global$7;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = uncurryThis$5(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis$5(WeakMapPrototype.has);
  var nativeGet = uncurryThis$5(WeakMapPrototype.get);
  var nativeSet = uncurryThis$5(WeakMapPrototype.set);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject$3(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
}// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;var global$6 = global$j;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$2 = wellKnownSymbol$f;

var ITERATOR = wellKnownSymbol$2('iterator');
var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$6[COLLECTION_NAME] && global$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$2 = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;

/** Detect free variable `self`. */
var freeSelf$2 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal$2 || freeSelf$2 || Function('return this')();

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$2.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$1 = Math.min;

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
var now$1 = function() {
  return root$2.Date.now();
};

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
function debounce$1(func, wait, options) {
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
    throw new TypeError(FUNC_ERROR_TEXT$2);
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
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
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
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject$2(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
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
function isObject$2(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
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
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

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
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$2.call(value) == symbolTag$1);
}

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
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var lodash_throttle = throttle;/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

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
var now = function() {
  return root$1.Date.now();
};

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
  if (isObject$1(options)) {
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
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
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
    var time = now();
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
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
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

/**
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
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString$1.call(value) == symbolTag);
}

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
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
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
  return !!value && (type == 'object' || type == 'function');
}

var lodash_memoize = memoize;var resizeObservers = [];var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));var freeze = function (obj) { return Object.freeze(obj); };var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
    }
    return ResizeObserverSize;
}());var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};var global$5 = typeof window !== 'undefined' ? window : {};var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global$5.navigator && global$5.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());var calculateDepthForNode = function (node) {
    if (isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};var process$1 = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process$1();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global$5.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return global$5.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global$5.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && resizeObservers.push(detail);
            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
            updateCount(1);
            scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            updateCount(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

var canUseDom = canUseDOM;var aCallable = aCallable$4;
var toObject$1 = toObject$6;
var IndexedObject = indexedObject;
var lengthOfArrayLike = lengthOfArrayLike$5;

var $TypeError$1 = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject$1(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError$1('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};var fails$5 = fails$o;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$5(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};var classof$1 = classofRaw$2;
var global$4 = global$j;

var engineIsNode = classof$1(global$4.process) == 'process';var $$1 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$1({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});var anObject$3 = anObject$d;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$3(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};var fails$4 = fails$o;
var global$3 = global$j;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$3.RegExp;

var UNSUPPORTED_Y$1 = fails$4(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$4(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$4(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};var fails$3 = fails$o;
var global$2 = global$j;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$2.RegExp;

var regexpUnsupportedDotAll = fails$3(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});var fails$2 = fails$o;
var global$1 = global$j;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$1.RegExp;

var regexpUnsupportedNcg = fails$2(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$4 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var toString$2 = toString$8;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$4(''.charAt);
var indexOf = uncurryThis$4(''.indexOf);
var replace$1 = uncurryThis$4(''.replace);
var stringSlice$2 = uncurryThis$4(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$4(nativeExec, re1, 'a');
  call$4(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$4(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$4(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$4(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;var $ = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$3 = functionUncurryThis;
var defineBuiltIn = defineBuiltIn$7;
var regexpExec$1 = regexpExec$2;
var fails$1 = fails$o;
var wellKnownSymbol$1 = wellKnownSymbol$f;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES = wellKnownSymbol$1('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$1(KEY);

  var DELEGATES_TO_SYMBOL = !fails$1(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$3(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$3(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};var call$3 = functionCall;
var anObject$2 = anObject$d;
var isCallable$1 = isCallable$k;
var classof = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$3(exec, R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call$3(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};var call$2 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$1 = anObject$d;
var isNullOrUndefined$1 = isNullOrUndefined$7;
var toLength$1 = toLength$3;
var toString$1 = toString$8;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var getMethod$1 = getMethod$5;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$2 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$1(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$2(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$1(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$1(this);
      var S = toString$1(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$2(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$2(rx, S)) !== null) {
        var matchStr = toString$1(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});var DESCRIPTORS = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$2 = functionUncurryThis;
var defineProperty = objectDefineProperty.f;

var FunctionPrototype$1 = Function.prototype;
var functionToString = uncurryThis$2(FunctionPrototype$1.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec$1 = uncurryThis$2(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype$1, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec$1(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$1 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$1.bind(apply$1) : function () {
  return call$1.apply(apply$1, arguments);
});var uncurryThis$1 = functionUncurryThis;
var toObject = toObject$6;

var floor = Math.floor;
var charAt = uncurryThis$1(''.charAt);
var replace = uncurryThis$1(''.replace);
var stringSlice$1 = uncurryThis$1(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$1(str, 0, position);
      case "'": return stringSlice$1(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};var apply = functionApply;
var call = functionCall;
var uncurryThis = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails = fails$o;
var anObject = anObject$d;
var isCallable = isCallable$k;
var isNullOrUndefined = isNullOrUndefined$7;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString = toString$8;
var requireObjectCoercible = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$f;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);/**
 * SimpleBar.js - v5.3.9
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

function getElementWindow(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }

  return element.ownerDocument.defaultView;
}
function getElementDocument(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }

  return element.ownerDocument;
}

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;

if (canUseDom) {
  window.addEventListener('resize', function () {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}

function scrollbarWidth(el) {
  if (cachedScrollbarWidth === null) {
    var document = getElementDocument(el);

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

var SimpleBar$1 = /*#__PURE__*/function () {
  function SimpleBar(element, options) {
    var _this = this;

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
    };

    this.scrollX = function () {
      if (_this.axis.x.isOverflowing) {
        _this.showScrollbar('x');

        _this.positionScrollbar('x');
      }

      _this.scrollXTicking = false;
    };

    this.scrollY = function () {
      if (_this.axis.y.isOverflowing) {
        _this.showScrollbar('y');

        _this.positionScrollbar('y');
      }

      _this.scrollYTicking = false;
    };

    this.onMouseEnter = function () {
      _this.showScrollbar('x');

      _this.showScrollbar('y');
    };

    this.onMouseMove = function (e) {
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

    this.onWindowResize = function () {
      // Recalculate scrollbarWidth in case it's a zoom
      _this.scrollbarWidth = _this.getScrollbarWidth();

      _this.hideNativeScrollbar();
    };

    this.hideScrollbars = function () {
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.y.isVisible = false;
      }

      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.x.isVisible = false;
      }
    };

    this.onPointerEvent = function (e) {
      var isWithinTrackXBounds, isWithinTrackYBounds;
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
      } // If any pointer event is called on the scrollbar


      if (isWithinTrackXBounds || isWithinTrackYBounds) {
        // Preventing the event's default action stops text being
        // selectable during the drag.
        e.preventDefault(); // Prevent event leaking

        e.stopPropagation();

        if (e.type === 'mousedown') {
          if (isWithinTrackXBounds) {
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
              _this.onDragStart(e, 'x');
            } else {
              _this.onTrackClick(e, 'x');
            }
          }

          if (isWithinTrackYBounds) {
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
              _this.onDragStart(e, 'y');
            } else {
              _this.onTrackClick(e, 'y');
            }
          }
        }
      }
    };

    this.drag = function (e) {
      var eventOffset;
      var track = _this.axis[_this.draggedAxis].track;
      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
      var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
      e.preventDefault();
      e.stopPropagation();

      if (_this.draggedAxis === 'y') {
        eventOffset = e.pageY;
      } else {
        eventOffset = e.pageX;
      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

      var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

      var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

      if (_this.draggedAxis === 'x') {
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
      }

      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };

    this.onEndDrag = function (e) {
      var elDocument = getElementDocument(_this.el);
      var elWindow = getElementWindow(_this.el);
      e.preventDefault();
      e.stopPropagation();

      _this.el.classList.remove(_this.classNames.dragging);

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

    this.preventClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    this.el = element;
    this.minScrollbarWidth = 20;
    this.options = Object.assign({}, SimpleBar.defaultOptions, options);
    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, this.options.classNames);
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
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
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
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    };
    this.removePreventClickId = null; // Don't re-instantiate over an existing one

    if (SimpleBar.instances.has(this.el)) {
      return;
    }

    this.recalculate = lodash_throttle(this.recalculate.bind(this), 64);
    this.onMouseMove = lodash_throttle(this.onMouseMove.bind(this), 64);
    this.hideScrollbars = lodash_debounce(this.hideScrollbars.bind(this), this.options.timeout);
    this.onWindowResize = lodash_debounce(this.onWindowResize.bind(this), 64, {
      leading: true
    });
    SimpleBar.getRtlHelpers = lodash_memoize(SimpleBar.getRtlHelpers);
    this.init();
  }
  /**
   * Static properties
   */

  /**
   * Helper to fix browsers inconsistency on RTL:
   *  - Firefox inverts the scrollbar initial position
   *  - IE11 inverts both scrollbar position and scrolling offset
   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
   */


  SimpleBar.getRtlHelpers = function getRtlHelpers() {
    var dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    document.body.appendChild(scrollbarDummyEl);
    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
    scrollbarDummyEl.scrollLeft = 999;
    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
    return {
      // determines if the scrolling is responding with negative values
      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
    };
  };

  SimpleBar.getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    var elDocument = getElementDocument(el);
    var elWindow = getElementWindow(el);
    return {
      top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
      left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
    };
  };

  var _proto = SimpleBar.prototype;

  _proto.init = function init() {
    // Save a reference to the instance, so we know this DOM node has already been instancied
    SimpleBar.instances.set(this.el, this); // We stop here on server-side

    if (canUseDom) {
      this.initDOM();
      this.setAccessibilityAttributes();
      this.scrollbarWidth = this.getScrollbarWidth();
      this.recalculate();
      this.initListeners();
    }
  };

  _proto.initDOM = function initDOM() {
    var _this2 = this;

    // make sure this element doesn't have the elements yet
    if (Array.prototype.filter.call(this.el.children, function (child) {
      return child.classList.contains(_this2.classNames.wrapper);
    }).length) {
      // assume that element has his DOM already initiated
      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
      this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
      this.maskEl = this.el.querySelector("." + this.classNames.mask);
      this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
      this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
      this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
    } else {
      // Prepare DOM
      this.wrapperEl = document.createElement('div');
      this.contentWrapperEl = document.createElement('div');
      this.offsetEl = document.createElement('div');
      this.maskEl = document.createElement('div');
      this.contentEl = document.createElement('div');
      this.placeholderEl = document.createElement('div');
      this.heightAutoObserverWrapperEl = document.createElement('div');
      this.heightAutoObserverEl = document.createElement('div');
      this.wrapperEl.classList.add(this.classNames.wrapper);
      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
      this.offsetEl.classList.add(this.classNames.offset);
      this.maskEl.classList.add(this.classNames.mask);
      this.contentEl.classList.add(this.classNames.contentEl);
      this.placeholderEl.classList.add(this.classNames.placeholder);
      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

      while (this.el.firstChild) {
        this.contentEl.appendChild(this.el.firstChild);
      }

      this.contentWrapperEl.appendChild(this.contentEl);
      this.offsetEl.appendChild(this.contentWrapperEl);
      this.maskEl.appendChild(this.offsetEl);
      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
      this.wrapperEl.appendChild(this.maskEl);
      this.wrapperEl.appendChild(this.placeholderEl);
      this.el.appendChild(this.wrapperEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      var track = document.createElement('div');
      var scrollbar = document.createElement('div');
      track.classList.add(this.classNames.track);
      scrollbar.classList.add(this.classNames.scrollbar);
      track.appendChild(scrollbar);
      this.axis.x.track.el = track.cloneNode(true);
      this.axis.x.track.el.classList.add(this.classNames.horizontal);
      this.axis.y.track.el = track.cloneNode(true);
      this.axis.y.track.el.classList.add(this.classNames.vertical);
      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

    if (!this.options.autoHide) {
      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
    }

    this.el.setAttribute('data-simplebar', 'init');
  };

  _proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
    var ariaLabel = this.options.ariaLabel || 'scrollable content';
    this.contentWrapperEl.setAttribute('tabindex', '0');
    this.contentWrapperEl.setAttribute('role', 'region');
    this.contentWrapperEl.setAttribute('aria-label', ariaLabel);
  };

  _proto.initListeners = function initListeners() {
    var _this3 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

    elWindow.addEventListener('resize', this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

    var resizeObserverStarted = false;
    var resizeAnimationFrameId = null;
    var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
    this.resizeObserver = new resizeObserver(function () {
      if (!resizeObserverStarted || resizeAnimationFrameId !== null) return;
      resizeAnimationFrameId = elWindow.requestAnimationFrame(function () {
        _this3.recalculate();

        resizeAnimationFrameId = null;
      });
    });
    this.resizeObserver.observe(this.el);
    this.resizeObserver.observe(this.contentEl);
    elWindow.requestAnimationFrame(function () {
      resizeObserverStarted = true;
    }); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

    this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
    this.mutationObserver.observe(this.contentEl, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };

  _proto.recalculate = function recalculate() {
    var elWindow = getElementWindow(this.el);
    this.elStyles = elWindow.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === 'rtl';
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
    var contentElOffsetWidth = this.contentEl.offsetWidth;
    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
    var elOverflowX = this.elStyles.overflowX;
    var elOverflowY = this.elStyles.overflowY;
    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
    var contentElScrollHeight = this.contentEl.scrollHeight;
    var contentElScrollWidth = this.contentEl.scrollWidth;
    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

    this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : 'auto';
    this.placeholderEl.style.height = contentElScrollHeight + "px";
    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
    this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

    this.axis.x.isOverflowing = elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
    this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
    this.positionScrollbar('x');
    this.positionScrollbar('y');
    this.toggleTrackVisibility('x');
    this.toggleTrackVisibility('y');
  }
  /**
   * Calculate scrollbar size
   */
  ;

  _proto.getScrollbarSize = function getScrollbarSize(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return 0;
    }

    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var scrollbarSize;
    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }

    return scrollbarSize;
  };

  _proto.positionScrollbar = function positionScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return;
    }

    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollbar = this.axis[axis].scrollbar;
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
  };

  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var track = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;

    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track.style.visibility = 'visible';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
    } else {
      track.style.visibility = 'hidden';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
    } // Even if forceVisible is enabled, scrollbar itself should be hidden


    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = 'block';
    } else {
      scrollbar.style.display = 'none';
    }
  };

  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
  }
  /**
   * On scroll event handling
   */
  ;

  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

    if (isWithinScrollbarBoundsX) {
      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }

    if (this.isWithinBounds(this.axis[axis].track.rect)) {
      this.showScrollbar(axis);
      this.axis[axis].track.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
    }
  };

  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.el.classList.remove(this.classNames.hover);
    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
  };

  /**
   * Show scrollbar
   */
  _proto.showScrollbar = function showScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el;

    if (!this.axis[axis].isVisible) {
      scrollbar.classList.add(this.classNames.visible);
      this.axis[axis].isVisible = true;
    }

    if (this.options.autoHide) {
      this.hideScrollbars();
    }
  }
  /**
   * Hide Scrollbar
   */
  ;

  /**
   * on scrollbar handle drag movement starts
   */
  _proto.onDragStart = function onDragStart(e, axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var elDocument = getElementDocument(this.el);
    var elWindow = getElementWindow(this.el);
    var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
    this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
    this.draggedAxis = axis;
    this.el.classList.add(this.classNames.dragging);
    elDocument.addEventListener('mousemove', this.drag, true);
    elDocument.addEventListener('mouseup', this.onEndDrag, true);

    if (this.removePreventClickId === null) {
      elDocument.addEventListener('click', this.preventClick, true);
      elDocument.addEventListener('dblclick', this.preventClick, true);
    } else {
      elWindow.clearTimeout(this.removePreventClickId);
      this.removePreventClickId = null;
    }
  }
  /**
   * Drag scrollbar handle
   */
  ;

  _proto.onTrackClick = function onTrackClick(e, axis) {
    var _this4 = this;

    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.options.clickOnTrack) return;
    var elWindow = getElementWindow(this.el);
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var scrollbar = this.axis[axis].scrollbar;
    var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    var t = axis === 'y' ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
    var dir = t < 0 ? -1 : 1;
    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

    var scrollTo = function scrollTo() {
      if (dir === -1) {
        if (scrolled > scrollSize) {
          var _this4$contentWrapper;

          scrolled -= _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));

          elWindow.requestAnimationFrame(scrollTo);
        }
      } else {
        if (scrolled < scrollSize) {
          var _this4$contentWrapper2;

          scrolled += _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));

          elWindow.requestAnimationFrame(scrollTo);
        }
      }
    };

    scrollTo();
  }
  /**
   * Getter for content element
   */
  ;

  _proto.getContentElement = function getContentElement() {
    return this.contentEl;
  }
  /**
   * Getter for original scrolling element
   */
  ;

  _proto.getScrollElement = function getScrollElement() {
    return this.contentWrapperEl;
  };

  _proto.getScrollbarWidth = function getScrollbarWidth() {
    // Try/catch for FF 56 throwing on undefined computedStyles
    try {
      // Detect browsers supporting CSS scrollbar styling and do not calculate
      if (getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none' || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style) {
        return 0;
      } else {
        return scrollbarWidth(this.el);
      }
    } catch (e) {
      return scrollbarWidth(this.el);
    }
  };

  _proto.removeListeners = function removeListeners() {
    var _this5 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
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
    } // Cancel all debounced functions


    this.recalculate.cancel();
    this.onMouseMove.cancel();
    this.hideScrollbars.cancel();
    this.onWindowResize.cancel();
  }
  /**
   * UnMount mutation observer and delete SimpleBar instance from DOM element
   */
  ;

  _proto.unMount = function unMount() {
    this.removeListeners();
    SimpleBar.instances.delete(this.el);
  }
  /**
   * Check if mouse is within bounds
   */
  ;

  _proto.isWithinBounds = function isWithinBounds(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  }
  /**
   * Find element children matches query
   */
  ;

  _proto.findChild = function findChild(el, query) {
    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    return Array.prototype.filter.call(el.children, function (child) {
      return matches.call(child, query);
    })[0];
  };

  return SimpleBar;
}();

SimpleBar$1.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  clickOnTrack: true,
  clickOnTrackSpeed: 40,
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
    dragging: 'simplebar-dragging'
  },
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0,
  timeout: 1000
};
SimpleBar$1.instances = new WeakMap();/**
 * simplebar-react - v2.4.3
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded = ["children", "scrollableNodeProps", "tag"];
/* Deprecated
 * Hardcore this here until we can safely deprecated it.
 * Helper function to retrieve options from element attributes
 */

var getOptions = function getOptions(obj) {
  var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);

    if (option) {
      var key = option[1].replace(/\W+(.)/g, function (x, chr) {
        return chr.toUpperCase();
      });

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
  }, {});
  return options;
};

var SimpleBar = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$scrollableNodePr = _ref.scrollableNodeProps,
      scrollableNodeProps = _ref$scrollableNodePr === void 0 ? {} : _ref$scrollableNodePr,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var RootTag = tag;
  var instance;
  var scrollableNodeRef = useRef();
  var elRef = useRef();
  var contentNodeRef = useRef();
  var options = {};
  var rest = {};
  var deprecatedOptions = [];
  Object.keys(otherProps).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(SimpleBar$1.defaultOptions, key)) {
      options[key] = otherProps[key];
    } else if (key.match(/data-simplebar-(.+)/) && key !== 'data-simplebar-direction') {
      deprecatedOptions.push({
        name: key,
        value: otherProps[key]
      });
    } else {
      rest[key] = otherProps[key];
    }
  });

  if (deprecatedOptions.length) {
    console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' \u2014> 'autoHide=\"false\"'\n      ");
  }

  useEffect(function () {
    scrollableNodeRef = scrollableNodeProps.ref || scrollableNodeRef;

    if (elRef.current) {
      instance = new SimpleBar$1(elRef.current, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, getOptions(deprecatedOptions)), options), scrollableNodeRef && {
        scrollableNode: scrollableNodeRef.current
      }), contentNodeRef.current && {
        contentNode: contentNodeRef.current
      }));

      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }

    return function () {
      instance.unMount();
      instance = null;

      if (typeof ref === 'function') {
        ref(null);
      }
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(RootTag, _extends({
    ref: elRef,
    "data-simplebar": true
  }, rest), /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-wrapper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-height-auto-observer-wrapper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-height-auto-observer"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-mask"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-offset"
  }, typeof children === 'function' ? children({
    scrollableNodeRef: scrollableNodeRef,
    contentNodeRef: contentNodeRef
  }) : /*#__PURE__*/React__default.createElement("div", _extends({}, scrollableNodeProps, {
    className: "simplebar-content-wrapper".concat(scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : '')
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-content"
  }, children)))), /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-placeholder"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-track simplebar-horizontal"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-scrollbar"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-track simplebar-vertical"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "simplebar-scrollbar"
  })));
});
SimpleBar.displayName = 'SimpleBar';
SimpleBar.propTypes = {
  children: propTypes.exports.oneOfType([propTypes.exports.node, propTypes.exports.func]),
  scrollableNodeProps: propTypes.exports.object,
  tag: propTypes.exports.string
};var YEARS$1 = new Array(200).fill(0);
for (var i$4 = 0; i$4 < 200; i$4 += 1) {
    YEARS$1[i$4] = 1900 + i$4;
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
PrivateYearSelect.defaultProps = PrivateYearSelectDefaultProps;var PrivateMonthSelectDefaultProps = {};var css_248z$8 = ".PrivateMonthSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: white;\n}\n.PrivateMonthSelect button {\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 18px;\n}";
styleInject(css_248z$8);var MONTHS$1 = new Array(12).fill(0);
for (var i$3 = 0; i$3 < 12; i$3 += 1) {
    MONTHS$1[i$3] = i$3;
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
};var css_248z$7 = ".PrivateTimeSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.PrivateTimeSelect button {\n  border-radius: 0;\n}";
styleInject(css_248z$7);var DEFAULT_MINUTES$1 = new Array(60).fill(0);
for (var i$2 = 0; i$2 < DEFAULT_MINUTES$1.length; i$2 += 1) {
    DEFAULT_MINUTES$1[i$2] = i$2;
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
PrivateTimeSelect.defaultProps = PrivateTimeSelectDefaultProps;var css_248z$6 = ".PrivateStaticDatePicker.time {\n  height: 400px;\n}\n.PrivateStaticDatePicker .MuiPickersCalendarHeader-root {\n  display: none;\n}\n.PrivateStaticDatePicker .month-title-container {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button {\n  font-size: 15px;\n  padding-left: 8px;\n  padding-right: 0;\n  min-width: 0;\n}\n.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button:not(.active) {\n  color: unset;\n}\n.PrivateStaticDatePicker .action-buttons {\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n}\n.PrivateStaticDatePicker .action-buttons button {\n  min-width: 0;\n  color: inherit;\n}\n.PrivateStaticDatePicker .action-buttons button:not(:first-child) {\n  margin-left: 5px;\n}\n.PrivateStaticDatePicker .action-buttons button.disabled {\n  color: rgba(0, 0, 0, 0.5);\n}\n.PrivateStaticDatePicker .time {\n  border-left: 2px solid #bfbfbf;\n}\n.PrivateStaticDatePicker .time .time-container {\n  height: 100%;\n}\n.PrivateStaticDatePicker .time .time-container .time-title {\n  text-align: center;\n  padding: 22px 0;\n  font-size: 15px;\n}\n.PrivateStaticDatePicker .time .time-container .time-select-wrap {\n  flex: 1;\n  border-top: 1px solid #efefef;\n}\n.PrivateStaticDatePicker.time .time .time-container .time-select-wrap > div > div:not(:first-child) {\n  border-left: 1px solid #efefef;\n}";
styleInject(css_248z$6);var DEFAULT_HOURS = new Array(24).fill(0);
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
var PrivateStaticDatePicker = React__default.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var value = _a.value, initAvailableDate = _a.availableDate, defaultCalendarMonth = _a.defaultCalendarMonth, type = _a.type, time = _a.time, initHours = _a.hours, initMinutes = _a.minutes, initSeconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, inputFormat = _a.inputFormat, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, onChange = _a.onChange, onMonthChange = _a.onMonthChange, onClose = _a.onClose, props = __rest$2(_a, ["value", "availableDate", "defaultCalendarMonth", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "inputFormat", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"]);
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
    var hours = useAutoUpdateState$1(useCallback(function () {
        return initHours || DEFAULT_HOURS;
    }, [initHours]))[0];
    var minutes = useAutoUpdateState$1(useCallback(function () {
        return initMinutes || DEFAULT_MINUTES;
    }, [initMinutes]))[0];
    var seconds = useAutoUpdateState$1(useCallback(function () {
        return initSeconds || DEFAULT_SECONDS;
    }, [initSeconds]))[0];
    var availableDate = useAutoUpdateState$1(useCallback(function () {
        if (initAvailableDate) {
            return initAvailableDate;
        }
        else {
            return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
        }
    }, [initAvailableDate, minDate, maxDate, disablePast, disableFuture]))[0];
    var disableHours = useAutoUpdateState$1(useCallback(function () {
        var newDisableHours = [];
        if (time && value && (availableDate[0] || availableDate[1])) {
            hours.forEach(function (h) {
                if (!isDateAvailable(value.set('hour', h), availableDate, 'hour')) {
                    newDisableHours.push(h);
                }
            });
        }
        return newDisableHours;
    }, [time, value, availableDate, hours]))[0];
    var disableMinutes = useAutoUpdateState$1(useCallback(function () {
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
    }, [time, value, availableDate, minutes]))[0];
    var disableSeconds = useAutoUpdateState$1(useCallback(function () {
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
    }, [time, value, availableDate, seconds]))[0];
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
            return React__default.createElement(IconButton, __assign$4({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$4({}, props));
        };
        return ArrowButton;
    })[0];
    var components = useAutoUpdateState$1(useCallback(function () {
        return {
            LeftArrowButton: LeftArrowButton,
            RightArrowButton: RightArrowButton,
        };
    }, [LeftArrowButton, RightArrowButton]))[0];
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
    var handleRenderDay = useCallback(function (date, selectedDates, pickersDayProps) {
        return React__default.createElement(PickersDay, __assign$4({}, pickersDayProps, { selected: date.isSame(value, 'date') }));
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
                onChange('action_date', finalDate, finalDate.format(inputFormat));
            } }, label));
    }, [type, time, onChange, inputFormat, availableDate, timeSelectScrollToDate]);
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
                    React__default.createElement(StaticDatePicker, __assign$4({}, props, { value: activeMonthValue, defaultCalendarMonth: month, components: components, inputFormat: inputFormat, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, displayStaticWrapperAs: 'desktop', onChange: function (newValue, keyboardInputValue) {
                            var finalValue = newValue
                                ? value
                                    ? newValue.set('hour', value.hour()).set('minute', value.minute()).set('second', value.second())
                                    : newValue
                                : newValue;
                            onChange('date', finalValue, keyboardInputValue);
                        }, onMonthChange: function (month) {
                            setMonth(month);
                            if (onMonthChange)
                                onMonthChange(month);
                        }, renderDay: handleRenderDay, renderInput: function (params) { return React__default.createElement(TextField, __assign$4({}, params)); } })),
                    yearSelectOpen && (React__default.createElement(PrivateYearSelect, { selectYear: value && value.year(), activeYear: month.year(), availableDate: availableDate, onSelect: handleYearSelect })),
                    monthSelectOpen && (React__default.createElement(PrivateMonthSelect, { year: month.year(), selectYear: value && value.year(), selectMonth: value && value.month(), activeMonth: month.month(), availableDate: availableDate, onSelect: handleMonthSelect }))),
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
    var className = _a.className, props = __rest$2(_a, ["className"]);
    return (React__default.createElement(Tooltip, __assign$4({}, props, { classes: { popper: className } })));
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
});var css_248z$5 = ".PrivateDatePicker .input-text-field.align-left .MuiInputBase-input {\n  text-align: left;\n}\n.PrivateDatePicker .input-text-field.align-center .MuiInputBase-input {\n  text-align: center;\n}\n.PrivateDatePicker .input-text-field.align-right .MuiInputBase-input {\n  text-align: right;\n}";
styleInject(css_248z$5);var PrivateDatePicker = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, type = _a.type, time = _a.time, initValue = _a.value, initLabel = _a.label, labelIcon = _a.labelIcon, initFormat = _a.format, initFormValueFormat = _a.formValueFormat, required = _a.required, readOnly = _a.readOnly, initDisabled = _a.disabled, width = _a.width, initError = _a.error, initHelperText = _a.helperText, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, exceptValue = _a.exceptValue, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, minuteInterval = _a.minuteInterval, secondInterval = _a.secondInterval, readOnlyInput = _a.readOnlyInput, onChange = _a.onChange, onValidate = _a.onValidate, 
    //--------------------------------------------------------------------------------------------------------------------
    initStyle = _a.style, sx = _a.sx, otherProps = __rest$2(_a, ["variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "readOnlyInput", "onChange", "onValidate", "style", "sx"]);
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
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // State - open ----------------------------------------------------------------------------------------------------
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    // State -----------------------------------------------------------------------------------------------------------
    var _d = useAutoUpdateState$1(initError), error = _d[0], setError = _d[1];
    var _e = useState(null), timeError = _e[0], setTimeError = _e[1];
    var _f = useAutoUpdateState$1(initHelperText), helperText = _f[0], setHelperText = _f[1];
    var _g = useAutoUpdateState$1(initDisabled), disabled = _g[0], setDisabled = _g[1];
    var label = useAutoUpdateState$1(useCallback(function () {
        if (labelIcon) {
            return React__default.createElement(IconText, { icon: labelIcon }, initLabel);
        }
        else {
            return initLabel;
        }
    }, [initLabel, labelIcon]))[0];
    var format = useAutoUpdateState$1(useCallback(function () {
        if (initFormat) {
            return initFormat;
        }
        else {
            return getDateTimeFormat(type, time);
        }
    }, [type, time, initFormat]))[0];
    var formValueFormat = useAutoUpdateState$1(useCallback(function () {
        if (initFormValueFormat) {
            return initFormValueFormat;
        }
        else {
            return getDateTimeFormValueFormat(type, time);
        }
    }, [time, initFormValueFormat]))[0];
    var availableDate = useAutoUpdateState$1(useCallback(function () {
        return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [minDate, maxDate, disablePast, disableFuture]))[0];
    // State - style ---------------------------------------------------------------------------------------------------
    var style = useAutoUpdateState$1(useCallback(function () {
        if (width != null) {
            return __assign$4(__assign$4({}, initStyle), { width: width });
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
    var _h = useAutoUpdateLayoutState(initValue || null, getFinalValue), value = _h[0], setValue = _h[1];
    var _j = useState(null), inputValue = _j[0], setInputValue = _j[1];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
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
        if (time && value && (availableDate[0] || availableDate[1])) {
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
    }, [value]);
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a;
        (_a = textFieldInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [textFieldInputRef]);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        if (required && empty$1(value)) {
            setErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (value && !value.isValid()) {
            setErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (datePickerErrorRef.current) {
            setErrorHelperText(true, getDateValidationErrorText(datePickerErrorRef.current));
            return false;
        }
        if (timeError) {
            setErrorHelperText(true, getDateValidationErrorText(timeError));
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [required, onValidate, initHelperText, datePickerErrorRef, timeError]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        if (ref || onAddValueItem) {
            var lastValue_1 = value;
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
                    return setErrorHelperText(error, error ? errorText : initHelperText);
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
            if (finalValue != null && keyboardInputValue == null) {
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
                            (_a = privateStaticDatePickerRef.current) === null || _a === void 0 ? void 0 : _a.timeSelectScrollToDate(finalValue);
                            break;
                        case 'hour':
                            (_b = privateStaticDatePickerRef.current) === null || _b === void 0 ? void 0 : _b.timeSelectScrollToDate(finalValue, ['minute', 'second']);
                            break;
                        case 'minute':
                            (_c = privateStaticDatePickerRef.current) === null || _c === void 0 ? void 0 : _c.timeSelectScrollToDate(finalValue, ['second']);
                            break;
                    }
                }
            }
        }
        setInputValue(finalValue);
    }, [name, type, time, availableDate, open, value]);
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: dayjsLocale },
        React__default.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React__default.createElement("div", { className: 'PrivateDatePicker', style: {
                    display: fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                }, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React__default.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, error && helperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React__default.createElement(PrivateStaticDatePicker, __assign$4({}, otherProps, { ref: privateStaticDatePickerRef, type: type, time: time, value: value, availableDate: availableDate, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, hours: hours, minutes: minutes, seconds: seconds, minuteInterval: minuteInterval, secondInterval: secondInterval, onChange: handleChange, onAccept: function () { return !time && setOpen(false); }, onClose: function () { return setOpen(false); } })) },
                    React__default.createElement("div", { style: { display: fullWidth ? 'block' : 'inline-block' } },
                        React__default.createElement(DesktopDatePicker, __assign$4({ value: inputValue, label: label, open: false, inputFormat: format, disabled: disabled, readOnly: readOnly, minDate: minDate, maxDate: maxDate, disablePast: disablePast, disableFuture: disableFuture, onClose: function () { return setOpen(false); }, onError: function (reason) { return (datePickerErrorRef.current = reason); }, onChange: function (newValue, keyboardInputValue) { return handleChange('date', newValue, keyboardInputValue); }, renderInput: function (_a) {
                                var initClassName = _a.className, initFocused = _a.focused, initError = _a.error, initStyle = _a.style, initInputProps = _a.inputProps, initMuiInputProps = _a.InputProps, InputLabelProps = _a.InputLabelProps, params = __rest$2(_a, ["className", "focused", "error", "style", "inputProps", "InputProps", "InputLabelProps"]);
                                var textFieldInputLabelProps = __assign$4(__assign$4({}, InputLabelProps), { shrink: labelShrink ? true : InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.shrink });
                                var inputProps = __assign$4(__assign$4({}, initInputProps), { readOnly: (initInputProps === null || initInputProps === void 0 ? void 0 : initInputProps.readOnly) || readOnlyInput });
                                var muiInputProps = __assign$4(__assign$4({}, initMuiInputProps), { endAdornment: undefined });
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
                                return (React__default.createElement(TextField, __assign$4({}, params, { className: classNames$1(initClassName, 'input-text-field', "align-".concat(align)), inputRef: function (ref) {
                                        if (params.inputRef) {
                                            if (typeof params.inputRef === 'function') {
                                                params.inputRef(ref);
                                            }
                                        }
                                        textFieldInputRef.current = ref;
                                    }, variant: variant, size: size, color: color, focused: focused || initFocused, InputLabelProps: textFieldInputLabelProps, InputProps: muiInputProps, inputProps: inputProps, required: required, fullWidth: fullWidth, helperText: undefined, error: !!error || !!initError || !!timeError, style: __assign$4(__assign$4({}, style), initStyle), sx: sx, onFocus: function () {
                                        setOpen(true);
                                    }, onClick: function () {
                                        setOpen(true);
                                    } })));
                            } }, otherProps)))),
                !formColWithHelperText && helperText && (React__default.createElement(FormHelperText, { error: error, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, helperText))))));
});
PrivateDatePicker.displayName = 'PrivateDatePicker';
PrivateDatePicker.defaultProps = PrivateDatePickerDefaultProps;var PrivateAlertDialogDefaultProps = {
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
PrivateAlertDialog.defaultProps = PrivateAlertDialogDefaultProps;var FormDatePicker = React__default.forwardRef(function (props, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var _a = useFormState(), onAddValueItem = _a.onAddValueItem, otherFormState = __rest$2(_a, ["onAddValueItem"]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'FormDatePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$4({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React__default.createElement(PrivateDatePicker, __assign$4({}, props, { ref: ref, type: 'date' }))));
});
FormDatePicker.displayName = 'FormDatePicker';
FormDatePicker.defaultProps = FormDatePickerDefaultProps;var FormDateTimePickerDefaultProps = {};var FormDateTimePicker = React__default.forwardRef(function (props, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var _a = useFormState(), onAddValueItem = _a.onAddValueItem, otherFormState = __rest$2(_a, ["onAddValueItem"]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'FormDateTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$4({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React__default.createElement(PrivateDatePicker, __assign$4({}, props, { ref: ref, type: 'date_time' }))));
});
FormDateTimePicker.displayName = 'FormDateTimePicker';
FormDateTimePicker.defaultProps = FormDateTimePickerDefaultProps;var FormTimePickerDefaultProps = {};var FormTimePicker = React__default.forwardRef(function (props, ref) {
    // FormState -------------------------------------------------------------------------------------------------------
    var _a = useFormState(), onAddValueItem = _a.onAddValueItem, otherFormState = __rest$2(_a, ["onAddValueItem"]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleAddValueItem = useCallback(function (id, commands) {
        commands.getType = function () { return 'FormTimePicker'; };
        onAddValueItem(id, commands);
    }, [onAddValueItem]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormContextProvider, { value: __assign$4({ onAddValueItem: handleAddValueItem }, otherFormState) },
        React__default.createElement(PrivateDatePicker, __assign$4({}, props, { ref: ref, type: 'time' }))));
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
    //--------------------------------------------------------------------------------------------------------------------
    var leftArrowOnClickRef = useRef();
    var rightArrowOnClickRef = useRef();
    var LeftArrowButton = useState(function () {
        var ArrowButton = function (props) {
            leftArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$4({}, props));
        };
        return ArrowButton;
    })[0];
    var RightArrowButton = useState(function () {
        var ArrowButton = function (props) {
            rightArrowOnClickRef.current = props.onClick;
            return React__default.createElement(IconButton, __assign$4({}, props));
        };
        return ArrowButton;
    })[0];
    var components = useAutoUpdateState$1(useCallback(function () {
        return {
            LeftArrowButton: LeftArrowButton,
            RightArrowButton: RightArrowButton,
        };
    }, [LeftArrowButton, RightArrowButton]))[0];
    //--------------------------------------------------------------------------------------------------------------------
    var getDateVal = useCallback(function (date) {
        return Number(date.format('YYYYMMDD'));
    }, []);
    //--------------------------------------------------------------------------------------------------------------------
    var baseClassNames = useAutoUpdateState$1(useCallback(function () {
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
    }, [month]))[0];
    var selectedClassNames = useAutoUpdateState$1(useCallback(function () {
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
    }, [month, value]))[0];
    var focusedClassNames = useAutoUpdateState$1(useCallback(function () {
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
    }, [selectType, month, value, focusedDate]))[0];
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
    var handleRenderDay = useCallback(function (date, selectedDates, pickersDayProps) {
        var startDate = value[0];
        var endDate = value[1];
        var dateVal = getDateVal(date);
        var baseClassName = baseClassNames[dateVal];
        var selectedClassName = selectedClassNames[dateVal];
        var focusedClassName = focusedClassNames[dateVal];
        return (React__default.createElement("div", { key: pickersDayProps.key, style: { position: 'relative' } },
            React__default.createElement("div", { className: classNames$1('focused-bg', baseClassName, focusedClassName) }),
            React__default.createElement("div", { className: classNames$1('selected-bg', baseClassName, selectedClassName) }),
            React__default.createElement(PickersDay, __assign$4({}, pickersDayProps, { disableMargin: true, selected: date.isSame(startDate, 'date') || date.isSame(endDate, 'date'), onMouseEnter: value[0] || value[1] ? function () { return onMouseEnterPickersDay && onMouseEnterPickersDay(date); } : undefined }))));
    }, [value, baseClassNames, selectedClassNames, focusedClassNames]);
    return (React__default.createElement(StaticDatePicker, { className: 'CustomDatePicker', displayStaticWrapperAs: 'desktop', components: components, value: activeMonthValue, defaultCalendarMonth: month, disableFuture: disableFuture, disablePast: disablePast, minDate: minDate, maxDate: maxDate, onChange: function (newValue) { return onValueChange && onValueChange(selectType, newValue); }, renderDay: handleRenderDay, renderInput: function (params) { return React__default.createElement(TextField, __assign$4({}, params)); }, inputFormat: 'YYYY-MM-DD HH:mm:ss', onMonthChange: function (month) {
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
    var selectType = _a.selectType, value = _a.value, calendarCount = _a.calendarCount, months = _a.months, disablePast = _a.disablePast, disableFuture = _a.disableFuture, maxDate = _a.maxDate, minDate = _a.minDate, onChange = _a.onChange, onValueChange = _a.onValueChange, onMonthsChange = _a.onMonthsChange;
    var theme = useTheme();
    // Ref -------------------------------------------------------------------------------------------------------------
    var datePicker1Ref = useRef(null);
    var datePicker2Ref = useRef(null);
    var datePicker3Ref = useRef(null);
    var yearSelectRef = useRef(null);
    var activeYearBtnRef = useRef(null);
    // State -----------------------------------------------------------------------------------------------------------
    var _b = useState(), focusedDate = _b[0], setFocusedDate = _b[1];
    var _c = useState(0), yearMonthSelectIndex = _c[0], setYearMonthSelectIndex = _c[1];
    var _d = useState(false), yearSelectOpen = _d[0], setYearSelectOpen = _d[1];
    var _e = useState(false), monthSelectOpen = _e[0], setMonthSelectOpen = _e[1];
    var customDatePickerProps = useAutoUpdateState$1(useCallback(function () {
        return { selectType: selectType, value: value, minDate: minDate, maxDate: maxDate, disableFuture: disableFuture, disablePast: disablePast, onValueChange: onValueChange };
    }, [selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange]))[0];
    var availableDate = useAutoUpdateState$1(useCallback(function () {
        return makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    }, [minDate, maxDate, disablePast, disableFuture]))[0];
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
    }, []);
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
    }, [months, yearMonthSelectIndex]);
    var handleMonthSelect = useCallback(function (m) {
        activeMonth(months[yearMonthSelectIndex].set('month', m).subtract(yearMonthSelectIndex, 'month'));
        setMonthSelectOpen(false);
    }, [months, yearMonthSelectIndex]);
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
    }, [months, yearSelectOpen, monthSelectOpen, yearMonthSelectIndex]);
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
    var actionButtons = useAutoUpdateState$1(useCallback(function () {
        var now = dayjs().startOf('d');
        var lastWeek = now.subtract(1, 'week');
        var dayOfWeek = now.day();
        var lastWeekDate;
        var thisWeekDate;
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
    }, [getActionButton]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
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
                            React__default.createElement(CustomDatePicker, __assign$4({}, customDatePickerProps, { ref: datePicker1Ref, focusedDate: focusedDate, month: months[0], onMouseEnterPickersDay: setFocusedDate, onMonthChange: handleFirstDatePickerMonthChange }))),
                        React__default.createElement(Grid, { item: true, style: { borderLeft: '1px solid #efefef' } },
                            React__default.createElement(CustomDatePicker, __assign$4({}, customDatePickerProps, { ref: datePicker2Ref, focusedDate: focusedDate, month: months[1], onMouseEnterPickersDay: setFocusedDate }))),
                        Number(calendarCount) >= 3 && (React__default.createElement(Grid, { item: true, style: { borderLeft: '1px solid #efefef' } },
                            React__default.createElement(CustomDatePicker, __assign$4({}, customDatePickerProps, { ref: datePicker3Ref, focusedDate: focusedDate, month: months[2], onMouseEnterPickersDay: setFocusedDate }))))),
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
    className = _a.className, style = _a.style, value = _a.value, initLabel = _a.label, labelIcon = _a.labelIcon, inputRef = _a.inputRef, format = _a.format, error = _a.error, icon = _a.icon, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, align = _a.align, readOnlyInput = _a.readOnlyInput, onFocus = _a.onFocus, onBlur = _a.onBlur, props = __rest$2(_a, ["variant", "size", "color", "focused", "fullWidth", "disabled", "readOnly", "required", "labelShrink", "className", "style", "value", "label", "labelIcon", "inputRef", "format", "error", "icon", "startAdornment", "endAdornment", "align", "readOnlyInput", "onFocus", "onBlur"]);
    var id = useId();
    // State -----------------------------------------------------------------------------------------------------------
    var label = useAutoUpdateState$1(useCallback(function () {
        return labelIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React__default.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]))[0];
    var inputLabelProps = useAutoUpdateState$1(useCallback(function () {
        if (labelShrink) {
            return {
                shrink: true,
            };
        }
    }, [labelShrink]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(DesktopDatePicker, __assign$4({}, props, { className: classNames$1(className, 'InputDatePicker', "align-".concat(align)), open: false, value: value, inputFormat: format, disabled: disabled, readOnly: readOnly || readOnlyInput, renderInput: function (_a) {
            var inputStyle = _a.style, inputInputRef = _a.inputRef, inputInputProps = _a.InputProps, inputError = _a.error, inputOnFocus = _a.onFocus, inputOnBlur = _a.onBlur, params = __rest$2(_a, ["style", "inputRef", "InputProps", "error", "onFocus", "onBlur"]);
            var muiInputProps = __assign$4(__assign$4({}, inputInputProps), { endAdornment: undefined });
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
            return (React__default.createElement(TextField, __assign$4({}, params, { style: __assign$4(__assign$4({}, inputStyle), style), variant: variant, size: size, color: color, focused: focused, fullWidth: fullWidth, required: required, name: id, label: label, error: error || inputError, inputRef: function (ref) {
                    if (inputInputRef) {
                        if (typeof inputInputRef === 'function') {
                            inputInputRef(ref);
                        }
                    }
                    if (inputRef) {
                        inputRef.current = ref;
                    }
                }, InputProps: muiInputProps, InputLabelProps: inputLabelProps, onFocus: function (e) {
                    if (inputOnFocus)
                        inputOnFocus(e);
                    if (onFocus)
                        onFocus(e);
                }, onBlur: function (e) {
                    if (inputOnBlur)
                        inputOnBlur(e);
                    if (onBlur)
                        onBlur(e);
                } })));
        } })));
};
InputDatePicker.displayName = 'InputDatePicker';
InputDatePicker.defaultProps = InputDatePickerDefaultProps;var DEFAULT_VALUE = [null, null];
var DEFAULT_FORMAT = 'YYYY-MM-DD';
var FormDateRangePicker = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //--------------------------------------------------------------------------------------------------------------------
    name = _a.name, initValue = _a.value, startLabel = _a.startLabel, startLabelIcon = _a.startLabelIcon, endLabel = _a.endLabel, endLabelIcon = _a.endLabelIcon, initCalendarCount = _a.calendarCount, initFormat = _a.format, formValueFormat = _a.formValueFormat, allowSingleSelect = _a.allowSingleSelect, required = _a.required, requiredStart = _a.requiredStart, requiredEnd = _a.requiredEnd, readOnly = _a.readOnly, readOnlyStart = _a.readOnlyStart, readOnlyEnd = _a.readOnlyEnd, readOnlyInput = _a.readOnlyInput, initDisabled = _a.disabled, inputWidth = _a.inputWidth, exceptValue = _a.exceptValue, initError = _a.error, initHelperText = _a.helperText, formValueStartNameSuffix = _a.formValueStartNameSuffix, formValueEndNameSuffix = _a.formValueEndNameSuffix, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, startAdornment = _a.startAdornment, startStartAdornment = _a.startStartAdornment, endStartAdornment = _a.endStartAdornment, endAdornment = _a.endAdornment, startEndAdornment = _a.startEndAdornment, endEndAdornment = _a.endEndAdornment, disablePast = _a.disablePast, disableFuture = _a.disableFuture, minDate = _a.minDate, maxDate = _a.maxDate, onChange = _a.onChange, onValidate = _a.onValidate;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, formColWithHelperText = _b.formColWithHelperText, onAddValueItem = _b.onAddValueItem, onRemoveValueItem = _b.onRemoveValueItem, onValueChange = _b.onValueChange, onValueChangeByUser = _b.onValueChangeByUser, onRequestSearchSubmit = _b.onRequestSearchSubmit;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
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
    }, [error, startError, endError, startDateTextFieldRef, endDateTextFieldRef]);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        var _a, _b;
        if (required && (value[0] == null || value[1] == null)) {
            if (value[0] == null && value[1] == null) {
                setErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else if (value[0] == null) {
                setStartErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setEndErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        if (requiredStart && value[0] == null) {
            setStartErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (requiredEnd && value[1] == null) {
            setEndErrorHelperText(true, '필수 입력 항목입니다.');
            return false;
        }
        if (!allowSingleSelect && (value[0] || value[1]) && (value[0] == null || value[1] == null)) {
            if (value[0] == null) {
                setStartErrorHelperText(true, '필수 입력 항목입니다.');
            }
            else {
                setEndErrorHelperText(true, '필수 입력 항목입니다.');
            }
            return false;
        }
        var startInputValue = ((_a = startDateTextFieldRef.current) === null || _a === void 0 ? void 0 : _a.value) || '';
        var endInputValue = ((_b = endDateTextFieldRef.current) === null || _b === void 0 ? void 0 : _b.value) || '';
        if (notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
            setStartErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
            setEndErrorHelperText(true, '형식이 일치하지 않습니다.');
            return false;
        }
        if (startInputDatePickerErrorRef.current) {
            setStartErrorHelperText(true, getDateValidationErrorText(startInputDatePickerErrorRef.current));
            return false;
        }
        if (endInputDatePickerErrorRef.current) {
            setEndErrorHelperText(true, getDateValidationErrorText(endInputDatePickerErrorRef.current));
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        setStartError(false);
        setEndError(false);
        return true;
    }, [required, requiredStart, requiredEnd, startError, endError, allowSingleSelect, onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    var setStartErrorHelperText = useCallback(function (error, helperText) {
        setStartError(error);
        setHelperText(helperText);
    }, []);
    var setEndErrorHelperText = useCallback(function (error, helperText) {
        setEndError(error);
        setHelperText(helperText);
    }, []);
    // Function activeMonth --------------------------------------------------------------------------------------------
    var activeMonth = useCallback(function (month) {
        var _a;
        setMonths([month, month.add(1, 'month'), month.add(2, 'month')]);
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.activeMonth(month);
    }, [containerRef]);
    // State -----------------------------------------------------------------------------------------------------------
    var _g = useState(false), open = _g[0], setOpen = _g[1];
    var _h = useState('start'), selectType = _h[0], setSelectType = _h[1];
    var _j = useAutoUpdateState$1(useCallback(function () {
        return initValue || DEFAULT_VALUE;
    }, [initValue])), value = _j[0], setValue = _j[1];
    var format = useAutoUpdateState$1(useCallback(function () {
        return initFormat || DEFAULT_FORMAT;
    }, [initFormat]))[0];
    var calendarCount = useAutoUpdateState$1(initCalendarCount || 2)[0];
    var _k = useAutoUpdateState$1(initHelperText), helperText = _k[0], setHelperText = _k[1];
    var _l = useState(function () {
        var now = dayjs();
        return [now, now.add(1, 'month'), now.add(2, 'month')];
    }), months = _l[0], setMonths = _l[1];
    var inputDatePickerProps = useAutoUpdateState$1(useCallback(function () {
        return {
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
    }, [variant, size, color, labelShrink, fullWidth, disabled, format, disablePast, disableFuture, minDate, maxDate]))[0];
    // State - inputStyle ----------------------------------------------------------------------------------------------
    var inputStyle = useAutoUpdateState$1(useCallback(function () {
        if (inputWidth != null) {
            return { width: inputWidth };
        }
        else {
            return { width: fullWidth ? undefined : 150 };
        }
    }, [inputWidth, fullWidth]))[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        if (value !== initValue) {
            if (onChange)
                onChange(value);
            onValueChange(name, value);
        }
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
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (newValue) {
        setValue(newValue);
        setOpen(false);
        setStartErrorHelperText(false, initHelperText);
        setEndErrorHelperText(false, initHelperText);
    }, []);
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
                setStartErrorHelperText(false, initHelperText);
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
                    setStartErrorHelperText(false, initHelperText);
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
                    setEndErrorHelperText(false, initHelperText);
                }
                break;
        }
        setValue(finalValue);
        nextTick(function () {
            onValueChangeByUser(name, finalValue);
        });
    }, [
        name,
        value,
        activeMonth,
        setStartErrorHelperText,
        setEndErrorHelperText,
        initHelperText,
        allowSingleSelect,
        open,
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
                    return setErrorHelperText(error, error ? errorText : initHelperText);
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
    ]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: dayjsLocale },
        React__default.createElement(ClickAwayListener, { mouseEvent: 'onMouseDown', touchEvent: 'onTouchStart', onClickAway: function () { return setOpen(false); } },
            React__default.createElement("div", { style: {
                    display: fullWidth ? 'block' : 'inline-block',
                    flex: fullWidth ? 1 : undefined,
                }, onMouseDown: handleContainerMouseDown, onFocus: handleContainerFocus, onBlur: handleContainerBlur },
                React__default.createElement(PrivateStyledTooltip, { open: open, PopperProps: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, (error || startError || endError) && helperText ? 8 : -14],
                                },
                            },
                        ],
                    }, title: React__default.createElement("div", { style: { display: 'flex' } },
                        React__default.createElement(CustomDatePickerContainer, { ref: containerRef, calendarCount: calendarCount, selectType: selectType, value: value, months: months, disablePast: disablePast, disableFuture: disableFuture, minDate: minDate, maxDate: maxDate, onChange: handleChange, onValueChange: handleValueChange, onMonthsChange: setMonths })) },
                    React__default.createElement(Grid, { container: true, alignItems: 'center' },
                        React__default.createElement(Grid, { item: true, flex: 1 },
                            React__default.createElement(InputDatePicker, __assign$4({}, inputDatePickerProps, { style: inputStyle, value: value[0], label: startLabel, labelIcon: startLabelIcon, error: error || startError, focused: focused || (open && selectType === 'start'), required: required || requiredStart, readOnly: readOnly || readOnlyStart, readOnlyInput: readOnlyInput, icon: startIcon || icon, startAdornment: startStartAdornment || startAdornment, endAdornment: startEndAdornment || endAdornment, inputRef: startDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('start', newValue); }, onFocus: function () { return handleInputDatePickerFocus('start'); }, onError: function (reason) { return (startInputDatePickerErrorRef.current = reason); } }))),
                        React__default.createElement(Grid, { item: true, sx: { px: 1 } }, "~"),
                        React__default.createElement(Grid, { item: true, flex: 1 },
                            React__default.createElement(InputDatePicker, __assign$4({}, inputDatePickerProps, { style: inputStyle, value: value[1], label: endLabel, labelIcon: endLabelIcon, error: error || endError, focused: focused || (open && selectType === 'end'), required: required || requiredEnd, readOnly: readOnly || readOnlyEnd, readOnlyInput: readOnlyInput, icon: endIcon || icon, startAdornment: endStartAdornment || startAdornment, endAdornment: endEndAdornment || endAdornment, inputRef: endDateTextFieldRef, onChange: function (newValue) { return handleInputDatePickerChange('end', newValue); }, onFocus: function () { return handleInputDatePickerFocus('end'); }, onError: function (reason) { return (endInputDatePickerErrorRef.current = reason); } }))))),
                !formColWithHelperText && helperText && (React__default.createElement(FormHelperText, { error: error || startError || endError, style: { marginLeft: variant === 'standard' ? 0 : 14 } }, helperText))))));
});
FormDateRangePicker.displayName = 'FormDateRangePicker';
FormDateRangePicker.defaultProps = FormDateRangePickerDefaultProps;var FormFileDefaultProps = {};var LinkDialogDefaultProps = {};var LinkDialog = function (_a) {
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
                if (empty$1(value)) {
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
LinkDialog.defaultProps = LinkDialogDefaultProps;var css_248z$1 = ".FormFile .control-wrap {\n  display: inline-flex;\n}\n.FormFile .control-wrap .file-name-wrap .file-name {\n  min-width: 350px;\n}\n.FormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root {\n  padding-right: 7px;\n}\n.FormFile .control-wrap .input-file {\n  display: none;\n}\n.FormFile .control-wrap .form-file-btn {\n  padding: 0;\n}\n.FormFile .control-wrap .form-file-btn label {\n  cursor: pointer;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n}\n.FormFile .control-wrap .form-file-btn label .FormIcon {\n  margin-right: 5px;\n}\n.FormFile .control-wrap .input-file-wrap {\n  display: flex;\n}\n.FormFile .control-wrap .input-file-wrap .input-file-btn .FormIcon {\n  margin-left: -3px;\n}\n.FormFile .control-wrap .input-file-wrap .link-btn {\n  border-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.FormFile .control-wrap .input-file-wrap .remove-btn {\n  border-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.FormFile.with-value .control-wrap .input-file-wrap .link-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.FormFile:not(.hide-file-name) .input-file-wrap .input-file-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.FormFile:not(.hide-link) .input-file-wrap .input-file-btn, .FormFile.with-value .input-file-wrap .input-file-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.FormFile.full-width .control-wrap {\n  display: flex;\n}\n.FormFile.full-width .control-wrap .file-name-wrap {\n  flex: 1;\n}\n.FormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root {\n  padding-right: 0;\n}\n\n.FormFile:not(.hide-file-name).variant-outlined .form-file-btn label, .FormFile:not(.hide-file-name).variant-filled .form-file-btn label {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.FormFile:not(.hide-file-name).variant-standard .form-file-btn label {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.FormFile:not(.hide-file-name).size-small .form-file-btn label {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.FormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn {\n  height: 52px;\n}\n.FormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn {\n  height: 52px;\n}\n.FormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn {\n  height: 28px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn {\n  height: 44px;\n}\n.FormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn {\n  height: 26px;\n}\n.FormFile.hide-file-name.with-label.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name.with-label.variant-filled .form-file-btn {\n  height: 37px;\n}\n.FormFile.hide-file-name.with-label.variant-standard .form-file-btn {\n  height: 28px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn {\n  height: 24px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn {\n  height: 31px;\n}\n.FormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn {\n  height: 26px;\n}\n\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-outlined .form-file-btn {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-filled .form-file-btn {\n  height: 37px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.variant-standard .form-file-btn {\n  height: 28px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-outlined .form-file-btn {\n  height: 24px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-filled .form-file-btn {\n  height: 31px;\n}\n.Form .FormCol.with-label .FormFile.hide-file-name.size-small.variant-standard .form-file-btn {\n  height: 26px;\n}";
styleInject(css_248z$1);var FormFile = React__default.forwardRef(function (_a, ref) {
    // ID --------------------------------------------------------------------------------------------------------------
    var initVariant = _a.variant, initSize = _a.size, initColor = _a.color, initFocused = _a.focused, initLabelShrink = _a.labelShrink, initFullWidth = _a.fullWidth, 
    //----------------------------------------------------------------------------------------------------------------
    accept = _a.accept, hideUrl = _a.hideUrl, hideLink = _a.hideLink, maxFileSize = _a.maxFileSize, preview = _a.preview, onFile = _a.onFile, onLink = _a.onLink, 
    //----------------------------------------------------------------------------------------------------------------
    name = _a.name, labelIcon = _a.labelIcon, initLabel = _a.label, required = _a.required, initDisabled = _a.disabled, initError = _a.error, initHelperText = _a.helperText, initValue = _a.value, exceptValue = _a.exceptValue, onChange = _a.onChange, onValidate = _a.onValidate, 
    //----------------------------------------------------------------------------------------------------------------
    className = _a.className;
    var id = useId();
    // FormState -------------------------------------------------------------------------------------------------------
    var _b = useFormState(), formVariant = _b.variant, formSize = _b.size, formColor = _b.color, formFocused = _b.focused, formLabelShrink = _b.labelShrink, formFullWidth = _b.fullWidth, onAddValueItem = _b.onAddValueItem, onValueChange = _b.onValueChange, onRemoveValueItem = _b.onRemoveValueItem, onValueChangeByUser = _b.onValueChangeByUser;
    // State - FormState -----------------------------------------------------------------------------------------------
    var variant = useAutoUpdateState$1(initVariant || formVariant)[0];
    var size = useAutoUpdateState$1(initSize || formSize)[0];
    var color = useAutoUpdateState$1(initColor || formColor)[0];
    var focused = useAutoUpdateState$1(initFocused || formFocused)[0];
    var labelShrink = useAutoUpdateState$1(initLabelShrink || formLabelShrink)[0];
    var fullWidth = useAutoUpdateState$1(initFullWidth == null ? formFullWidth : initFullWidth)[0];
    // Ref -------------------------------------------------------------------------------------------------------------
    var textFieldRef = useRef(null);
    var fileUploadBtnRef = useRef(null);
    // State - value ---------------------------------------------------------------------------------------------------
    var _c = useAutoUpdateState$1(initValue), value = _c[0], setValue = _c[1];
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
    var _e = useAutoUpdateState$1(initHelperText), helperText = _e[0], setHelperText = _e[1];
    var _f = useAutoUpdateState$1(initDisabled), disabled = _f[0], setDisabled = _f[1];
    var _g = useState(false), isOpenLinkDialog = _g[0], setIsOpenLinkDialog = _g[1];
    var _h = useState({ open: false }), alertDialogProps = _h[0], setAlertDialogProps = _h[1];
    var label = useAutoUpdateState$1(useCallback(function () {
        return labelIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormIcon, { style: { verticalAlign: 'middle', marginRight: 4 } }, labelIcon),
            React__default.createElement("span", { style: { verticalAlign: 'middle' } }, initLabel))) : (initLabel);
    }, [initLabel, labelIcon]))[0];
    // Function - focus ------------------------------------------------------------------------------------------------
    var focus = useCallback(function () {
        var _a, _b;
        if (hideUrl) {
            (_a = fileUploadBtnRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = textFieldRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [hideUrl]);
    // Function - validate ---------------------------------------------------------------------------------------------
    var validate = useCallback(function (value) {
        var isEmptyValue = false;
        if (value) {
            var d = document.createElement('div');
            d.innerHTML = value;
            var text = d.textContent || d.innerText;
            isEmptyValue = empty$1(text.trim());
        }
        if (required && (isEmptyValue || empty$1(value))) {
            setErrorHelperText(true, '필수 선택 항목입니다.');
            return false;
        }
        if (onValidate) {
            var onValidateResult = onValidate(value);
            if (onValidateResult != null && onValidateResult !== true) {
                setErrorHelperText(true, onValidateResult);
                return false;
            }
        }
        setErrorHelperText(false, initHelperText);
        return true;
    }, [onValidate, initHelperText]);
    // Function - setErrorHelperText -----------------------------------------------------------------------------------
    var setErrorHelperText = useCallback(function (error, helperText) {
        setError(error);
        setHelperText(helperText);
    }, []);
    // Commands --------------------------------------------------------------------------------------------------------
    useLayoutEffect(function () {
        var lastValue = value;
        var lastDisabled = !!disabled;
        var commands = {
            getType: function () { return 'FormFile'; },
            getName: function () { return name; },
            getReset: function () { return initValue; },
            reset: function () {
                lastValue = initValue;
                setValue(lastValue);
            },
            getValue: function () { return lastValue; },
            setValue: function (value) {
                lastValue = value;
                setValue(lastValue);
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
            setError: function (error, helperText) {
                return setErrorHelperText(error, error ? helperText : initHelperText);
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
        initHelperText,
        ref,
        onAddValueItem,
        onRemoveValueItem,
    ]);
    // Function --------------------------------------------------------------------------------------------------------
    var fileSizeCheck = useCallback(function (file) {
        if (maxFileSize) {
            return new Promise(function (resolve, reject) {
                if (typeof file === 'object') {
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
    }, [onFile, onValueChangeByUser]);
    var handleLinkClick = useCallback(function () {
        setIsOpenLinkDialog(true);
    }, []);
    var handleRemoveClick = useCallback(function () {
        setValue('');
        nextTick(function () {
            if (onValueChangeByUser)
                onValueChangeByUser(name, '');
        });
    }, [onValueChangeByUser]);
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
    }, [onLink, onValueChangeByUser]);
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormItemBase, { variant: variant, size: size, color: color, focused: focused, className: classNames$1(className, 'FormValueItem', 'FormFile', "variant-".concat(variant), "size-".concat(size), !!initLabel && 'with-label', !!fullWidth && 'full-width', !!hideUrl && 'hide-file-name', !!hideLink && 'hide-link', notEmpty(value) && 'with-value'), labelIcon: hideUrl ? labelIcon : undefined, label: hideUrl ? initLabel : undefined, error: error, required: required, fullWidth: fullWidth, helperText: React__default.createElement("div", null,
            preview,
            React__default.createElement("div", null, helperText)), hideLabel: !hideUrl, helperTextProps: {
            style: {
                marginLeft: !hideUrl && variant !== 'standard' ? 14 : undefined,
                marginTop: !hideUrl && variant === 'standard' ? 19 : undefined,
            },
        }, style: { width: fullWidth ? '100%' : undefined }, control: React__default.createElement("div", { className: 'control-wrap' },
            !hideUrl && (React__default.createElement("div", { className: 'file-name-wrap' },
                React__default.createElement(TextField, { inputRef: textFieldRef, className: 'file-name', variant: variant, label: label, size: size, required: required, value: value || '', focused: focused, disabled: disabled, fullWidth: true, error: error, InputLabelProps: labelShrink ? { shrink: labelShrink } : undefined, inputProps: { readOnly: true }, InputProps: {
                        endAdornment: (React__default.createElement(InputAdornment, { position: 'end' },
                            React__default.createElement("div", { className: 'input-file-wrap' },
                                React__default.createElement(Button, { variant: 'text', className: 'input-file-btn form-file-btn', color: error ? 'error' : color, disabled: disabled, ref: fileUploadBtnRef },
                                    React__default.createElement("label", { htmlFor: id },
                                        React__default.createElement(FormIcon, null, "upload"),
                                        "\uD30C\uC77C \uC5C5\uB85C\uB4DC")),
                                React__default.createElement("input", { type: 'file', accept: accept, id: id, value: fileValue, className: 'input-file', onChange: handleFileChange }),
                                !hideLink && (React__default.createElement(Button, { variant: 'text', className: 'link-btn  form-file-btn', color: error ? 'error' : color, disabled: disabled, onClick: handleLinkClick },
                                    React__default.createElement("label", null,
                                        React__default.createElement(FormIcon, null, "link"),
                                        "\uB9C1\uD06C"))),
                                notEmpty(value) && (React__default.createElement(Button, { variant: 'text', className: 'remove-btn form-file-btn', color: error ? 'error' : color, disabled: disabled, onClick: handleRemoveClick },
                                    React__default.createElement("label", null,
                                        React__default.createElement(FormIcon, null, "Close"),
                                        "\uC0AD\uC81C")))))),
                    }, placeholder: '\uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694' }))),
            !!hideUrl && (React__default.createElement("div", { className: 'input-file-wrap' },
                React__default.createElement(Button, { variant: 'outlined', className: 'input-file-btn form-file-btn', color: error ? 'error' : color, ref: fileUploadBtnRef, disabled: disabled },
                    React__default.createElement("label", { htmlFor: id },
                        React__default.createElement(FormIcon, null, "upload"),
                        "\uD30C\uC77C \uC5C5\uB85C\uB4DC")),
                React__default.createElement("input", { type: 'file', accept: accept, id: id, value: fileValue, className: 'input-file', onChange: handleFileChange }),
                !hideLink && (React__default.createElement(Button, { variant: 'outlined', className: 'link-btn  form-file-btn', color: error ? 'error' : color, onClick: handleLinkClick, disabled: disabled },
                    React__default.createElement("label", null,
                        React__default.createElement(FormIcon, null, "link"),
                        "\uB9C1\uD06C"))),
                notEmpty(value) && (React__default.createElement(Button, { variant: 'outlined', className: 'remove-btn form-file-btn', color: error ? 'error' : color, disabled: disabled, onClick: handleRemoveClick },
                    React__default.createElement("label", null,
                        React__default.createElement(FormIcon, null, "Close"),
                        "\uC0AD\uC81C"))))),
            React__default.createElement(PrivateAlertDialog, __assign$4({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } })),
            React__default.createElement(LinkDialog, { open: isOpenLinkDialog, onConfirm: handleLinkDialogConfirm, onClose: function () { return setIsOpenLinkDialog(false); } })) }));
});
FormFile.displayName = 'FormFile';
FormFile.defaultProps = FormFileDefaultProps;var FormImageFileDefaultProps = __assign$4(__assign$4({}, FormFileDefaultProps), { accept: '.jpg,.jpeg,.png' });var css_248z = ".FormImageFile .preview-img {\n  max-width: 100%;\n}\n.FormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img {\n  padding-right: 14px;\n}";
styleInject(css_248z);var FormImageFile = React__default.forwardRef(function (_a, ref) {
    var className = _a.className, imageSize = _a.imageSize, preview = _a.preview, previewMaxHeight = _a.previewMaxHeight, initValue = _a.value, onChange = _a.onChange, onFile = _a.onFile, onLink = _a.onLink, props = __rest$2(_a, ["className", "imageSize", "preview", "previewMaxHeight", "value", "onChange", "onFile", "onLink"]);
    var _b = useAutoUpdateState$1(initValue), value = _b[0], setValue = _b[1];
    var _c = useState(), previewNode = _c[0], setPreviewNode = _c[1];
    var _d = useState({
        open: false,
    }), alertDialogProps = _d[0], setAlertDialogProps = _d[1];
    var urlKit = useState(function () {
        if (window.URL)
            return window.URL;
        else if (window.webkitURL)
            return window.webkitURL;
    })[0];
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        setPreviewNode(preview && value ? (React__default.createElement("img", { className: 'preview-img', src: value, style: { maxHeight: previewMaxHeight || undefined }, alt: '' })) : undefined);
    }, [value, preview, previewMaxHeight]);
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
                if (typeof file === 'object')
                    img.src = urlKit.createObjectURL(file);
                else
                    img.src = file;
            });
        }
        return Promise.resolve();
    }, [urlKit, imageSize]);
    // Event Handler ---------------------------------------------------------------------------------------------------
    var handleChange = useCallback(function (value) {
        setValue(value);
        onChange && onChange(value);
    }, []);
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
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(FormFile, __assign$4({ ref: ref, className: classNames$1(className, 'FormImageFile'), value: value, preview: previewNode, onChange: handleChange, onFile: handleFile, onLink: handleLink }, props)),
        React__default.createElement(PrivateAlertDialog, __assign$4({}, alertDialogProps, { onClose: function () { return setAlertDialogProps({ open: false }); } }))));
});
FormImageFile.displayName = 'FormImageFile';
FormImageFile.defaultProps = FormImageFileDefaultProps;var SearchDefaultProps = {
    color: 'primary',
};var Search = React__default.forwardRef(function (_a, ref) {
    // Ref -------------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //----------------------------------------------------------------------------------------------------------------
    color = _a.color, spacing = _a.spacing, focused = _a.focused, labelShrink = _a.labelShrink, autoSubmit = _a.autoSubmit, otherProps = __rest$2(_a, ["children", "className", "style", "sx", "color", "spacing", "focused", "labelShrink", "autoSubmit"]);
    var formRef = useRef();
    // Effect ----------------------------------------------------------------------------------------------------------
    useEffect(function () {
        var _a;
        if (autoSubmit) {
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
        }
    }, []);
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
        React__default.createElement(Paper, { variant: 'outlined', className: className, sx: __assign$4({ p: 1.5 }, sx), style: style },
            React__default.createElement(Form, __assign$4({ ref: function (commands) {
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
                React__default.createElement(FormRow, null,
                    React__default.createElement(FormCol, null,
                        React__default.createElement(Grid, { container: true, spacing: 1, alignItems: 'center' }, children)))))));
});
Search.displayName = 'Search';
Search.defaultProps = SearchDefaultProps;var SearchGroupDefaultProps = {
    spacing: 1.5,
};var SearchGroup = function (_a) {
    // State -----------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, style = _a.style, sx = _a.sx, 
    //--------------------------------------------------------------------------------------------------------------------
    max = _a.max, align = _a.align, hidden = _a.hidden, spacing = _a.spacing;
    var justifyContent = useAutoUpdateState$1(useCallback(function () {
        switch (align) {
            case undefined:
            case 'left':
                return 'start';
            case 'center':
                return 'center';
            case 'right':
                return 'end';
        }
    }, [align]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(Grid, { item: true, className: classNames$1(className, 'SearchGroup'), style: { flex: max ? 1 : undefined, display: hidden ? 'none' : undefined } },
        React__default.createElement(Grid, { container: true, wrap: 'wrap', spacing: spacing, justifyContent: justifyContent, alignItems: 'start', style: style, sx: sx }, React__default.Children.map(children, function (child, idx) {
            return React__default.isValidElement(child) ? (React__default.createElement(Grid, { key: idx, item: true }, child)) : undefined;
        }))));
};
SearchGroup.defaultProps = SearchGroupDefaultProps;var SearchButtonDefaultProps = {};var SearchButton = function (_a) {
    // State -----------------------------------------------------------------------------------------------------------
    var children = _a.children, className = _a.className, initSx = _a.sx, startIcon = _a.startIcon, endIcon = _a.endIcon, icon = _a.icon, props = __rest$2(_a, ["children", "className", "sx", "startIcon", "endIcon", "icon"]);
    var sx = useAutoUpdateState$1(useCallback(function () {
        return __assign$4({ minWidth: 0, px: !startIcon && !endIcon && !icon ? 1.2 : 1.7 }, initSx);
    }, [initSx, startIcon, endIcon, icon]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React__default.createElement(FormButton, __assign$4({ className: classNames$1(className, 'SearchButton'), size: 'medium', sx: sx, fullWidth: false, startIcon: startIcon, endIcon: endIcon, icon: icon }, props), children));
};
SearchButton.defaultProps = SearchButtonDefaultProps;dayjs.extend(dayjsIsSameOrAfter);
dayjs.extend(dayjsIsSameOrBefore);
dayjs.extend(dayjsIsBetween);export{Form,FormAutocomplete,FormAutocompleteDefaultProps,FormBlock,FormBlockDefaultProps,FormButton,FormButtonDefaultProps,FormCheckbox,FormCheckboxDefaultProps,FormCol,FormColDefaultProps,FormContext,FormContextDefaultValue,FormContextProvider,FormDatePicker,FormDatePickerDefaultProps,FormDateRangePicker,FormDateRangePickerDefaultProps,FormDateTimePicker,FormDateTimePickerDefaultProps,FormDefaultProps,FormDivider,FormDividerDefaultProps,FormEmail,FormEmailDefaultProps,FormFile,FormFileDefaultProps,FormHidden,FormHiddenDefaultProps,FormIcon,FormIconDefaultProps,FormImageFile,FormImageFileDefaultProps,FormLabel,FormLabelDefaultProps,FormMobile,FormMobileDefaultProps,FormNumber,FormNumberDefaultProps,FormPassword,FormPasswordDefaultProps,FormRadioGroup,FormRadioGroupDefaultProps,FormRating,FormRatingDefaultProps,FormRow,FormRowDefaultProps,FormSearch,FormSearchDefaultProps,FormSelect,FormSelectDefaultProps,FormTag,FormTagDefaultProps,FormTel,FormTelDefaultProps,FormText,FormTextDefaultProps,FormTextEditor,FormTextEditorDefaultProps,FormTextField,FormTextFieldDefaultProps,FormTextarea,FormTextareaDefaultProps,FormTimePicker,FormTimePickerDefaultProps,FormToggleButtonGroup,FormToggleButtonGroupDefaultProps,FormUrl,FormUrlDefaultProps,Search,SearchButton,SearchButtonDefaultProps,SearchDefaultProps,SearchGroup,SearchGroupDefaultProps,useFormState};//# sourceMappingURL=index.esm.js.map
