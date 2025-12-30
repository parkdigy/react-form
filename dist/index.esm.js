import {c}from'react/compiler-runtime';import React,{createContext,useContext,useRef,useState,useId,useEffect}from'react';import classNames from'classnames';import {Box,styled,useTheme,InputLabel,Grid,Collapse,FormHelperText,TextField,InputAdornment,IconButton,Chip,Autocomplete,Icon,MenuItem,Checkbox,CircularProgress,Input,OutlinedInput,FilledInput,FormControl,Typography,FormControlLabel,Radio,RadioGroup,ToggleButton,ToggleButtonGroup,Rating,Skeleton,darken,Button,Tooltip,tooltipClasses,ClickAwayListener,DialogTitle,DialogContent,DialogActions,Dialog,Switch,Paper,Menu}from'@mui/material';import {empty,notEmpty,equal,ifEmpty}from'@pdg/compare';import dayjs from'dayjs';import {useAutoUpdateRef,useForwardRef,useFirstSkipChanged,useEventLayoutEffect,useEventEffect,useChanged,useFirstSkipEffect,useTimeoutRef,clearTimeoutRef}from'@pdg/react-hook';import {PButton,PIcon,PIconText}from'@pdg/react-component';import {useResizeDetector}from'react-resize-detector';import {formatTelNo,formatBusinessNo,formatPersonalNo}from'@pdg/formatting';import {NumericFormat}from'react-number-format';import {CheckBox,CheckBoxOutlineBlank,RadioButtonChecked,RadioButtonUnchecked}from'@mui/icons-material';import {Editor}from'@tinymce/tinymce-react';import {AdapterDayjs}from'@mui/x-date-pickers/AdapterDayjs';import {StaticDatePicker,PickersDay,DesktopDatePicker,LocalizationProvider,StaticDateTimePicker,DesktopDateTimePicker}from'@mui/x-date-pickers';import SimpleBar from'simplebar-react';import'dayjs/locale/ko';import {useLocation}from'react-router';function insertStyle(css) {
    if (!css || typeof window === 'undefined')
        return;
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}insertStyle(".simplebar-track.simplebar-vertical{width:8px !important}.simplebar-track.simplebar-vertical .simplebar-scrollbar.simplebar-visible:before{opacity:.3 !important}.MuiPickersSectionList-root.MuiPickersInputBase-sectionsContainer{width:auto}");function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}var PFormContextDefaultValue = {
  id: 'init',
  variant: 'outlined',
  size: 'medium',
  color: 'primary',
  spacing: 2,
  formColGap: 1.5,
  focused: false,
  labelShrink: false,
  onAddValueItem: function onAddValueItem() {},
  onRemoveValueItem: function onRemoveValueItem() {},
  onValueChange: function onValueChange() {},
  onValueChangeByUser: function onValueChangeByUser() {},
  onRequestSubmit: function onRequestSubmit() {},
  onRequestSearchSubmit: function onRequestSearchSubmit() {}
};var PFormContext = /*#__PURE__*/createContext(PFormContextDefaultValue);function useFormState() {
  var value = useContext(PFormContext);
  if (value === undefined) {
    throw new Error("useFormState should be used within FormContext.Provider");
  }
  return value;
}function PFormContextProvider(t0) {
  var $ = c(3);
  var children = t0.children,
    value = t0.value;
  var t1 = value;
  var t2;
  if ($[0] !== children || $[1] !== t1) {
    t2 = /*#__PURE__*/React.createElement(PFormContext.Provider, {
      value: t1
    }, children);
    $[0] = children;
    $[1] = t1;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}/********************************************************************************************************************
 * getItemFormValue
 * ******************************************************************************************************************/
var getItemFormValue = function getItemFormValue(commands, reset) {
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
        var _startValue = value[0];
        var _endValue = value[1];
        value = [_startValue ? _startValue : '', _endValue ? _endValue : ''];
      }
      break;
    case 'PFormMonthPicker':
      value = {
        year: value ? value.year : '',
        month: value ? value.month : ''
      };
      break;
    case 'PFormMonthRangePicker':
      {
        var _startValue2 = value[0];
        var _endValue2 = value[1];
        value = [_startValue2 ? _startValue2 : {
          year: '',
          month: ''
        }, _endValue2 ? _endValue2 : {
          year: '',
          month: ''
        }];
      }
      break;
    default:
      if (empty(value)) {
        value = '';
      } else if (Array.isArray(value)) {
        if (commands.isFormValueSort && commands.isFormValueSort()) {
          value = _toConsumableArray(value);
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
var appendFormValueData = function appendFormValueData(data, itemCommands) {
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
        var _commands = itemCommands;
        var _value = getItemFormValue(itemCommands);
        data[_commands.getFormValueYearName()] = _value.year;
        data[_commands.getFormValueMonthName()] = _value.month;
      }
      break;
    case 'PFormYearRangePicker':
      {
        var _commands2 = itemCommands;
        var _value2 = getItemFormValue(itemCommands);
        data[_commands2.getFormValueFromName()] = _value2[0];
        data[_commands2.getFormValueToName()] = _value2[1];
      }
      break;
    case 'PFormMonthRangePicker':
      {
        var _commands3 = itemCommands;
        var _value3 = getItemFormValue(itemCommands);
        data[_commands3.getFormValueFromYearName()] = _value3[0].year;
        data[_commands3.getFormValueFromMonthName()] = _value3[0].month;
        data[_commands3.getFormValueToYearName()] = _value3[1].year;
        data[_commands3.getFormValueToMonthName()] = _value3[1].month;
      }
      break;
    default:
      {
        var name = itemCommands.getName();
        var _value4 = getItemFormValue(itemCommands);
        data[name] = _value4 == null ? '' : _value4;
      }
      break;
  }
};var PForm = function PForm(t0) {
  var _ref, _ref2, _ref3, _ref4;
  var $ = c(72);
  var ref = t0.ref,
    className = t0.className,
    children = t0.children,
    initStyle = t0.style,
    sx = t0.sx,
    t1 = t0.variant,
    t2 = t0.size,
    t3 = t0.color,
    t4 = t0.spacing,
    t5 = t0.formColGap,
    initFocused = t0.focused,
    initLabelShrink = t0.labelShrink,
    initFullWidth = t0.fullWidth,
    initFullHeight = t0.fullHeight,
    initDisabled = t0.disabled,
    initSubmitWhenReturnKey = t0.submitWhenReturnKey,
    initOnSubmit = t0.onSubmit,
    initOnValid = t0.onInvalid,
    initOnValueChange = t0.onValueChange,
    initOnValueChangeByUser = t0.onValueChangeByUser;
  var initVariant = t1 === undefined ? "outlined" : t1;
  var initSize = t2 === undefined ? "medium" : t2;
  var initColor = t3 === undefined ? "primary" : t3;
  var initSpacing = t4 === undefined ? 2 : t4;
  var initFormColGap = t5 === undefined ? 1.5 : t5;
  var _useFormState = useFormState(),
    formId = _useFormState.id,
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formDisabled = _useFormState.disabled,
    formSubmitWhenReturnKey = _useFormState.submitWhenReturnKey,
    formSpacing = _useFormState.spacing,
    formFormColGap = _useFormState.formColGap,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formFullHeight = _useFormState.fullHeight,
    formColAutoXs = _useFormState.formColAutoXs,
    formColWidth = _useFormState.formColWidth,
    onAddFormCol = _useFormState.onAddFormCol,
    onRemoveFormCol = _useFormState.onRemoveFormCol,
    formColXs = _useFormState.formColXs,
    formColWithLabel = _useFormState.formColWithLabel,
    formColWithHelperText = _useFormState.formColWithHelperText,
    formAddValueItem = _useFormState.onAddValueItem,
    formRemoveValueItem = _useFormState.onRemoveValueItem,
    formValueChange = _useFormState.onValueChange,
    formValueChangeByUser = _useFormState.onValueChangeByUser,
    formRequestSubmit = _useFormState.onRequestSubmit,
    formRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var spacing = initSpacing !== null && initSpacing !== void 0 ? initSpacing : formSpacing;
  var formColGap = initFormColGap !== null && initFormColGap !== void 0 ? initFormColGap : formFormColGap;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = (_ref = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth) !== null && _ref !== void 0 ? _ref : true;
  var fullHeight = (_ref2 = initFullHeight !== null && initFullHeight !== void 0 ? initFullHeight : formFullHeight) !== null && _ref2 !== void 0 ? _ref2 : false;
  var submitWhenReturnKey = (_ref3 = initSubmitWhenReturnKey !== null && initSubmitWhenReturnKey !== void 0 ? initSubmitWhenReturnKey : formSubmitWhenReturnKey) !== null && _ref3 !== void 0 ? _ref3 : false;
  var disabled = (_ref4 = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled) !== null && _ref4 !== void 0 ? _ref4 : false;
  var disabledRef = useAutoUpdateRef(disabled);
  var formRef = useRef(null);
  var t6;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = {};
    $[0] = t6;
  } else {
    t6 = $[0];
  }
  var valueItems = useRef(t6);
  var onSubmitRef = useAutoUpdateRef(initOnSubmit);
  var onInvalidRef = useAutoUpdateRef(initOnValid);
  var onValueChangeRef = useAutoUpdateRef(initOnValueChange);
  var onValueChangeByUserRef = useAutoUpdateRef(initOnValueChangeByUser);
  var t7;
  if ($[1] !== onInvalidRef || $[2] !== onSubmitRef) {
    t7 = function t7() {
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
            } else {
              invalidItems.push({
                name: itemCommands.getName(),
                commands: itemCommands
              });
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
      } else {
        onInvalidRef.current && onInvalidRef.current(invalidItems);
        setTimeout(function () {
          var _valueItems$current$f;
          (_valueItems$current$f = valueItems.current[firstInvalidItemId]) === null || _valueItems$current$f === void 0 || _valueItems$current$f.focusValidate();
        });
      }
    };
    $[1] = onInvalidRef;
    $[2] = onSubmitRef;
    $[3] = t7;
  } else {
    t7 = $[3];
  }
  var submit = t7;
  var t8;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(name) {
      return Object.values(valueItems.current).find(function (itemCommands_0) {
        if (itemCommands_0) {
          if (itemCommands_0.getName() === name) {
            return true;
          }
          switch (itemCommands_0.getType()) {
            case "PFormDateRangePicker":
            case "PFormYearRangePicker":
              {
                return name === itemCommands_0.getFormValueFromName() || name === itemCommands_0.getFormValueToName();
              }
            case "PFormMonthPicker":
              {
                return name === itemCommands_0.getFormValueYearName() || name === itemCommands_0.getFormValueMonthName();
              }
            case "PFormMonthRangePicker":
              {
                return name === itemCommands_0.getFormValueFromYearName() || name === itemCommands_0.getFormValueFromMonthName() || name === itemCommands_0.getFormValueToYearName() || name === itemCommands_0.getFormValueToMonthName();
              }
          }
        }
      });
    };
    $[4] = t8;
  } else {
    t8 = $[4];
  }
  var findValueItem = t8;
  var t9;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(name_0, subKey, isReset) {
      var valueItem = findValueItem(name_0);
      if (valueItem) {
        switch (valueItem.getType()) {
          case "PFormDateRangePicker":
          case "PFormYearRangePicker":
            {
              var commands_1 = valueItem;
              var value_1 = getItemFormValue(valueItem, !!isReset);
              if (notEmpty(subKey)) {
                if (subKey === commands_1.getFormValueFromNameSuffix()) {
                  return value_1[0];
                } else {
                  if (subKey === commands_1.getFormValueToNameSuffix()) {
                    return value_1[1];
                  } else {
                    throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
                  }
                }
              } else {
                throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
              }
            }
          case "PFormMonthPicker":
            {
              var commands_0 = valueItem;
              var value_0 = getItemFormValue(valueItem, !!isReset);
              if (notEmpty(subKey)) {
                if (subKey === commands_0.getFormValueYearNameSuffix()) {
                  return value_0.year;
                } else {
                  if (subKey === commands_0.getFormValueMonthNameSuffix()) {
                    return value_0.month;
                  } else {
                    throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
                  }
                }
              } else {
                throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
              }
            }
          case "PFormMonthRangePicker":
            {
              var commands = valueItem;
              var value = getItemFormValue(valueItem, !!isReset);
              if (notEmpty(subKey)) {
                if (subKey === commands.getFormValueFromYearNameSuffix()) {
                  return value[0].year;
                } else {
                  if (subKey === commands.getFormValueFromMonthNameSuffix()) {
                    return value[0].month;
                  } else {
                    if (subKey === commands.getFormValueToYearNameSuffix()) {
                      return value[1].year;
                    } else {
                      if (subKey === commands.getFormValueToMonthNameSuffix()) {
                        return value[1].month;
                      } else {
                        throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 subKey \uAC12\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
                      }
                    }
                  }
                }
              } else {
                throw new Error("Form::getFormReset - ".concat(valueItem.getType(), " \uC758 \uAC12\uC744 \uAC00\uC838\uC624\uB824\uBA74 subKey \uB97C \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
              }
            }
          default:
            {
              return getItemFormValue(valueItem, !!isReset);
            }
        }
      } else {
        throw new Error("'".concat(name_0, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
      }
    };
    $[5] = t9;
  } else {
    t9 = $[5];
  }
  var _getFormValue = t9;
  var t10;
  if ($[6] !== submit) {
    t10 = {
      submit: submit,
      getAllFormValue: function getAllFormValue() {
        var data_0 = {};
        Object.keys(valueItems.current).forEach(function (id_0) {
          var itemCommands_1 = valueItems.current[id_0];
          if (itemCommands_1) {
            if (!itemCommands_1.isDisabled() && !itemCommands_1.isExceptValue()) {
              appendFormValueData(data_0, itemCommands_1);
            }
          }
        });
        return data_0;
      },
      resetAll: function resetAll() {
        Object.keys(valueItems.current).forEach(function (id_1) {
          var _valueItems$current$i;
          (_valueItems$current$i = valueItems.current[id_1]) === null || _valueItems$current$i === void 0 || _valueItems$current$i.reset();
        });
      },
      getItem: function getItem(name_1) {
        return findValueItem(name_1);
      },
      exists: function exists(name_2) {
        return !!findValueItem(name_2);
      },
      getReset: function getReset(name_3) {
        var valueItem_0 = findValueItem(name_3);
        if (valueItem_0) {
          return valueItem_0.getReset();
        } else {
          throw new Error("'".concat(name_3, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      getFormReset: function getFormReset(name_4, subKey_0) {
        return _getFormValue(name_4, subKey_0, true);
      },
      reset: function reset(name_5) {
        var valueItem_1 = findValueItem(name_5);
        if (valueItem_1) {
          return valueItem_1.reset();
        } else {
          throw new Error("'".concat(name_5, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      getValue: function getValue(name_6) {
        var valueItem_2 = findValueItem(name_6);
        if (valueItem_2) {
          return valueItem_2.getValue();
        } else {
          throw new Error("'".concat(name_6, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      getFormValue: function getFormValue(name_7, subKey_1) {
        return _getFormValue(name_7, subKey_1, false);
      },
      setValue: function setValue(name_8, value_2) {
        var valueItem_3 = findValueItem(name_8);
        if (valueItem_3) {
          valueItem_3.setValue(value_2);
        } else {
          throw new Error("'".concat(name_8, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      isExceptValue: function isExceptValue(name_9) {
        var valueItem_4 = findValueItem(name_9);
        if (valueItem_4) {
          return valueItem_4.isExceptValue();
        } else {
          throw new Error("'".concat(name_9, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      isDisabled: function isDisabled(name_10) {
        var valueItem_5 = findValueItem(name_10);
        if (valueItem_5) {
          return valueItem_5.isDisabled();
        } else {
          throw new Error("'".concat(name_10, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      setDisabled: function setDisabled(name_11, disabled_0) {
        var valueItem_6 = findValueItem(name_11);
        if (valueItem_6) {
          valueItem_6.setDisabled(disabled_0);
        } else {
          throw new Error("'".concat(name_11, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      isHidden: function isHidden(name_12) {
        var valueItem_7 = findValueItem(name_12);
        if (valueItem_7) {
          return valueItem_7.isHidden();
        } else {
          throw new Error("'".concat(name_12, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      setHidden: function setHidden(name_13, hidden) {
        var valueItem_8 = findValueItem(name_13);
        if (valueItem_8) {
          valueItem_8.setHidden(hidden);
        } else {
          throw new Error("'".concat(name_13, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      focus: function focus(name_14) {
        var valueItem_9 = findValueItem(name_14);
        if (valueItem_9) {
          valueItem_9.focus();
        } else {
          throw new Error("'".concat(name_14, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      validate: function validate(name_15) {
        var valueItem_10 = findValueItem(name_15);
        if (valueItem_10) {
          return valueItem_10.validate();
        } else {
          throw new Error("'".concat(name_15, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      },
      setError: function setError(name_16, error, helperText) {
        var valueItem_11 = findValueItem(name_16);
        if (valueItem_11) {
          valueItem_11.setError(error, helperText);
        } else {
          throw new Error("'".concat(name_16, "' \uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
        }
      }
    };
    $[6] = submit;
    $[7] = t10;
  } else {
    t10 = $[7];
  }
  var commands_2 = t10;
  useForwardRef(ref, commands_2);
  var t11;
  if ($[8] !== disabledRef || $[9] !== submit) {
    t11 = function t11(e) {
      e.preventDefault();
      if (!disabledRef.current) {
        submit();
      }
    };
    $[8] = disabledRef;
    $[9] = submit;
    $[10] = t11;
  } else {
    t11 = $[10];
  }
  var handleSubmit = t11;
  var t12;
  if ($[11] !== formAddValueItem) {
    t12 = function t12(id_2, item) {
      valueItems.current[id_2] = item;
      formAddValueItem === null || formAddValueItem === void 0 || formAddValueItem(id_2, item);
    };
    $[11] = formAddValueItem;
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  var handleAddValueItem = t12;
  var t13;
  if ($[13] !== formRemoveValueItem) {
    t13 = function t13(id_3) {
      valueItems.current[id_3] = undefined;
      formRemoveValueItem === null || formRemoveValueItem === void 0 || formRemoveValueItem(id_3);
    };
    $[13] = formRemoveValueItem;
    $[14] = t13;
  } else {
    t13 = $[14];
  }
  var handleRemoveValueItem = t13;
  var t14;
  if ($[15] !== formValueChange || $[16] !== onValueChangeRef) {
    t14 = function t14(name_17, value_3) {
      if (onValueChangeRef.current) {
        onValueChangeRef.current(name_17, value_3);
      }
      formValueChange === null || formValueChange === void 0 || formValueChange(name_17, value_3);
    };
    $[15] = formValueChange;
    $[16] = onValueChangeRef;
    $[17] = t14;
  } else {
    t14 = $[17];
  }
  var handleValueChange = t14;
  var t15;
  if ($[18] !== formValueChangeByUser || $[19] !== onValueChangeByUserRef) {
    t15 = function t15(name_18, value_4) {
      if (onValueChangeByUserRef.current) {
        onValueChangeByUserRef.current(name_18, value_4);
      }
      formValueChangeByUser === null || formValueChangeByUser === void 0 || formValueChangeByUser(name_18, value_4);
    };
    $[18] = formValueChangeByUser;
    $[19] = onValueChangeByUserRef;
    $[20] = t15;
  } else {
    t15 = $[20];
  }
  var handleValueChangeByUser = t15;
  var t16;
  if ($[21] !== disabledRef || $[22] !== formRequestSubmit || $[23] !== submit) {
    t16 = function t16(name_19, value_5) {
      if (!disabledRef.current) {
        submit();
      }
      formRequestSubmit === null || formRequestSubmit === void 0 || formRequestSubmit(name_19, value_5);
    };
    $[21] = disabledRef;
    $[22] = formRequestSubmit;
    $[23] = submit;
    $[24] = t16;
  } else {
    t16 = $[24];
  }
  var handleRequestSubmit = t16;
  var t17 = formId || "form";
  var t18;
  if ($[25] !== color || $[26] !== disabled || $[27] !== focused || $[28] !== formColAutoXs || $[29] !== formColGap || $[30] !== formColWidth || $[31] !== formColWithHelperText || $[32] !== formColWithLabel || $[33] !== formColXs || $[34] !== formRequestSearchSubmit || $[35] !== fullHeight || $[36] !== fullWidth || $[37] !== handleAddValueItem || $[38] !== handleRemoveValueItem || $[39] !== handleRequestSubmit || $[40] !== handleValueChange || $[41] !== handleValueChangeByUser || $[42] !== labelShrink || $[43] !== onAddFormCol || $[44] !== onRemoveFormCol || $[45] !== size || $[46] !== spacing || $[47] !== submitWhenReturnKey || $[48] !== t17 || $[49] !== variant) {
    t18 = {
      id: t17,
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
      onAddValueItem: handleAddValueItem,
      onRemoveValueItem: handleRemoveValueItem,
      onValueChange: handleValueChange,
      onValueChangeByUser: handleValueChangeByUser,
      onRequestSubmit: handleRequestSubmit,
      onRequestSearchSubmit: formRequestSearchSubmit,
      formColAutoXs: formColAutoXs,
      formColWidth: formColWidth,
      onAddFormCol: onAddFormCol,
      onRemoveFormCol: onRemoveFormCol,
      formColXs: formColXs,
      formColWithLabel: formColWithLabel,
      formColWithHelperText: formColWithHelperText
    };
    $[25] = color;
    $[26] = disabled;
    $[27] = focused;
    $[28] = formColAutoXs;
    $[29] = formColGap;
    $[30] = formColWidth;
    $[31] = formColWithHelperText;
    $[32] = formColWithLabel;
    $[33] = formColXs;
    $[34] = formRequestSearchSubmit;
    $[35] = fullHeight;
    $[36] = fullWidth;
    $[37] = handleAddValueItem;
    $[38] = handleRemoveValueItem;
    $[39] = handleRequestSubmit;
    $[40] = handleValueChange;
    $[41] = handleValueChangeByUser;
    $[42] = labelShrink;
    $[43] = onAddFormCol;
    $[44] = onRemoveFormCol;
    $[45] = size;
    $[46] = spacing;
    $[47] = submitWhenReturnKey;
    $[48] = t17;
    $[49] = variant;
    $[50] = t18;
  } else {
    t18 = $[50];
  }
  var formContextValue = t18;
  var t19 = "PForm-variant-".concat(variant);
  var t20 = fullHeight && "full-height";
  var t21;
  if ($[51] !== className || $[52] !== t19 || $[53] !== t20) {
    t21 = classNames("PForm", t19, t20, className);
    $[51] = className;
    $[52] = t19;
    $[53] = t20;
    $[54] = t21;
  } else {
    t21 = $[54];
  }
  var t22;
  if ($[55] !== fullHeight || $[56] !== initStyle) {
    t22 = fullHeight ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      flex: 1,
      height: "100%"
    }) : initStyle;
    $[55] = fullHeight;
    $[56] = initStyle;
    $[57] = t22;
  } else {
    t22 = $[57];
  }
  var t23 = fullHeight ? "100%" : undefined;
  var t24;
  if ($[58] !== t23) {
    t24 = {
      display: "flex",
      flexDirection: "column",
      height: t23
    };
    $[58] = t23;
    $[59] = t24;
  } else {
    t24 = $[59];
  }
  var t25;
  if ($[60] !== children || $[61] !== t24) {
    t25 = /*#__PURE__*/React.createElement("div", {
      style: t24
    }, children);
    $[60] = children;
    $[61] = t24;
    $[62] = t25;
  } else {
    t25 = $[62];
  }
  var t26;
  if ($[63] !== handleSubmit || $[64] !== sx || $[65] !== t21 || $[66] !== t22 || $[67] !== t25) {
    t26 = /*#__PURE__*/React.createElement(Box, {
      className: t21,
      component: "form",
      ref: formRef,
      noValidate: true,
      autoComplete: "off",
      onSubmit: handleSubmit,
      style: t22,
      sx: sx
    }, t25);
    $[63] = handleSubmit;
    $[64] = sx;
    $[65] = t21;
    $[66] = t22;
    $[67] = t25;
    $[68] = t26;
  } else {
    t26 = $[68];
  }
  var t27;
  if ($[69] !== formContextValue || $[70] !== t26) {
    t27 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: formContextValue
    }, t26);
    $[69] = formContextValue;
    $[70] = t26;
    $[71] = t27;
  } else {
    t27 = $[71];
  }
  return t27;
};var _excluded$D = ["ref", "size", "color", "variant", "fullWidth", "className", "type", "onClick"];
var PFormButton = function PFormButton(t0) {
  var $ = c(22);
  var className;
  var initColor;
  var initFullWidth;
  var initSize;
  var initVariant;
  var onClick;
  var props;
  var ref;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    initSize = _t.size;
    initColor = _t.color;
    initVariant = _t.variant;
    initFullWidth = _t.fullWidth;
    className = _t.className;
    t1 = _t.type;
    onClick = _t.onClick;
    props = _objectWithoutProperties(_t, _excluded$D);
    $[0] = t0;
    $[1] = className;
    $[2] = initColor;
    $[3] = initFullWidth;
    $[4] = initSize;
    $[5] = initVariant;
    $[6] = onClick;
    $[7] = props;
    $[8] = ref;
    $[9] = t1;
  } else {
    className = $[1];
    initColor = $[2];
    initFullWidth = $[3];
    initSize = $[4];
    initVariant = $[5];
    onClick = $[6];
    props = $[7];
    ref = $[8];
    t1 = $[9];
  }
  var type = t1 === undefined ? "button" : t1;
  var _useFormState = useFormState(),
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFullWidth = _useFormState.fullWidth;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var t2;
  if ($[10] !== className) {
    t2 = classNames(className, "PFormButton");
    $[10] = className;
    $[11] = t2;
  } else {
    t2 = $[11];
  }
  var t3 = initVariant ? initVariant : type === "submit" ? "contained" : "outlined";
  var t4;
  if ($[12] !== color || $[13] !== fullWidth || $[14] !== onClick || $[15] !== props || $[16] !== ref || $[17] !== size || $[18] !== t2 || $[19] !== t3 || $[20] !== type) {
    t4 = /*#__PURE__*/React.createElement(PButton, _extends({
      ref: ref,
      className: t2,
      type: type,
      variant: t3,
      size: size,
      color: color,
      fullWidth: fullWidth,
      onClick: onClick
    }, props));
    $[12] = color;
    $[13] = fullWidth;
    $[14] = onClick;
    $[15] = props;
    $[16] = ref;
    $[17] = size;
    $[18] = t2;
    $[19] = t3;
    $[20] = type;
    $[21] = t4;
  } else {
    t4 = $[21];
  }
  return t4;
};var _templateObject$j, _templateObject2$9;
var IconPIcon = styled(PIcon)(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"])));
var ChildrenSpan = styled('span')(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["\n  vertical-align: middle;\n"])));var _excluded$C = ["ref", "children", "icon", "size", "style", "error", "warning"];
var PFormLabel = function PFormLabel(t0) {
  var $ = c(25);
  var children;
  var error;
  var icon;
  var initStyle;
  var props;
  var ref;
  var size;
  var warning;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    children = _t.children;
    icon = _t.icon;
    size = _t.size;
    initStyle = _t.style;
    error = _t.error;
    warning = _t.warning;
    props = _objectWithoutProperties(_t, _excluded$C);
    $[0] = t0;
    $[1] = children;
    $[2] = error;
    $[3] = icon;
    $[4] = initStyle;
    $[5] = props;
    $[6] = ref;
    $[7] = size;
    $[8] = warning;
  } else {
    children = $[1];
    error = $[2];
    icon = $[3];
    initStyle = $[4];
    props = $[5];
    ref = $[6];
    size = $[7];
    warning = $[8];
  }
  var theme = useTheme();
  var t1 = size === "small" ? "translate(0, -1.5px) scale(0.7)" : undefined;
  var newStyle;
  if ($[9] !== error || $[10] !== initStyle || $[11] !== t1 || $[12] !== theme || $[13] !== warning) {
    newStyle = _objectSpread2({
      height: 20,
      transform: t1
    }, initStyle);
    if (!error) {
      var _initStyle;
      newStyle.color = warning ? theme.palette.warning.main : (_initStyle = initStyle) === null || _initStyle === void 0 ? void 0 : _initStyle.color;
    }
    $[9] = error;
    $[10] = initStyle;
    $[11] = t1;
    $[12] = theme;
    $[13] = warning;
    $[14] = newStyle;
  } else {
    newStyle = $[14];
  }
  var style = newStyle;
  var t2;
  if ($[15] !== children || $[16] !== icon) {
    t2 = icon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconPIcon, null, icon), /*#__PURE__*/React.createElement(ChildrenSpan, null, children)) : children;
    $[15] = children;
    $[16] = icon;
    $[17] = t2;
  } else {
    t2 = $[17];
  }
  var t3;
  if ($[18] !== error || $[19] !== props || $[20] !== ref || $[21] !== size || $[22] !== style || $[23] !== t2) {
    t3 = /*#__PURE__*/React.createElement(InputLabel, _extends({
      ref: ref,
      shrink: true,
      className: "PFormItemBase-InputLabel",
      size: size,
      error: error,
      style: style
    }, props), t2);
    $[18] = error;
    $[19] = props;
    $[20] = ref;
    $[21] = size;
    $[22] = style;
    $[23] = t2;
    $[24] = t3;
  } else {
    t3 = $[24];
  }
  return t3;
};var _templateObject$i;
var StyledLineBox = styled(Box)(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"])));
var StyledErrorLineBox = styled(Box)(function (_ref) {
  var theme = _ref.theme;
  return {
    borderBottom: "thin solid ".concat(theme.palette.error.main),
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    opacity: 0.4
  };
});
var StyledWarningLineBox = styled(Box)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    borderBottom: "thin solid ".concat(theme.palette.warning.main),
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    opacity: 0.4
  };
});var DEFAULT_LINE_STYLE = {
  flex: 1,
  position: 'relative'
};
var PFormDivider = function PFormDivider(t0) {
  var $ = c(47);
  var ref = t0.ref,
    initSize = t0.size,
    icon = t0.icon,
    label = t0.label,
    line = t0.line,
    t1 = t0.lineVerticalMargin,
    hidden = t0.hidden,
    collapse = t0.collapse,
    collapseIn = t0.collapseIn,
    error = t0.error,
    warning = t0.warning,
    onCollapseChange = t0.onCollapseChange,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var lineVerticalMargin = t1 === undefined ? 9 : t1;
  var _useFormState = useFormState(),
    formSize = _useFormState.size;
  var size = initSize == null ? formSize : initSize;
  var t2;
  if (hidden) {
    var _t;
    if ($[0] !== initStyle) {
      _t = _objectSpread2(_objectSpread2({}, initStyle), {}, {
        display: "none"
      });
      $[0] = initStyle;
      $[1] = _t;
    } else {
      _t = $[1];
    }
    t2 = _t;
  } else {
    t2 = initStyle;
  }
  var style = t2;
  var t3;
  if (lineVerticalMargin) {
    var _t2;
    if ($[2] !== lineVerticalMargin) {
      _t2 = _objectSpread2(_objectSpread2({}, DEFAULT_LINE_STYLE), {}, {
        marginTop: lineVerticalMargin,
        marginBottom: lineVerticalMargin
      });
      $[2] = lineVerticalMargin;
      $[3] = _t2;
    } else {
      _t2 = $[3];
    }
    t3 = _t2;
  } else {
    t3 = DEFAULT_LINE_STYLE;
  }
  var lineStyle = t3;
  var t4;
  if ($[4] !== collapse || $[5] !== collapseIn || $[6] !== onCollapseChange) {
    t4 = function t4() {
      if (collapse) {
        onCollapseChange && onCollapseChange(!collapseIn);
      }
    };
    $[4] = collapse;
    $[5] = collapseIn;
    $[6] = onCollapseChange;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var handleClick = t4;
  var t5;
  if ($[8] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {
      xs: 12
    };
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  var t6;
  if ($[9] !== className) {
    t6 = classNames(className, "PFormDivider");
    $[9] = className;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var t7 = collapse ? "pointer" : undefined;
  var t8;
  if ($[11] !== t7) {
    t8 = {
      display: "flex",
      py: 1,
      alignItems: "center",
      justifyItems: "center",
      padding: 0,
      cursor: t7
    };
    $[11] = t7;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  var t9;
  if ($[13] !== error || $[14] !== icon || $[15] !== size || $[16] !== warning) {
    t9 = icon && /*#__PURE__*/React.createElement(PIcon, {
      style: {
        opacity: 0.54,
        marginRight: 5
      },
      color: error ? "error" : warning ? "warning" : undefined,
      size: size
    }, icon);
    $[13] = error;
    $[14] = icon;
    $[15] = size;
    $[16] = warning;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  var t10;
  if ($[18] !== error || $[19] !== label || $[20] !== size || $[21] !== warning) {
    t10 = label && /*#__PURE__*/React.createElement(Box, {
      sx: {
        paddingRight: "10px",
        color: error ? "error.main" : warning ? "warning.main" : "text.secondary",
        fontWeight: 700,
        fontSize: size === "small" ? "11.5px" : "12px"
      }
    }, label);
    $[18] = error;
    $[19] = label;
    $[20] = size;
    $[21] = warning;
    $[22] = t10;
  } else {
    t10 = $[22];
  }
  var t11;
  if ($[23] !== collapse || $[24] !== error || $[25] !== line || $[26] !== lineStyle || $[27] !== warning) {
    t11 = (line || collapse) && /*#__PURE__*/React.createElement("div", {
      style: lineStyle
    }, error ? /*#__PURE__*/React.createElement(StyledErrorLineBox, null) : warning ? /*#__PURE__*/React.createElement(StyledWarningLineBox, null) : /*#__PURE__*/React.createElement(StyledLineBox, null));
    $[23] = collapse;
    $[24] = error;
    $[25] = line;
    $[26] = lineStyle;
    $[27] = warning;
    $[28] = t11;
  } else {
    t11 = $[28];
  }
  var t12;
  if ($[29] !== collapse || $[30] !== collapseIn || $[31] !== error || $[32] !== warning) {
    t12 = collapse && /*#__PURE__*/React.createElement(PIcon, {
      sx: {
        opacity: 0.6,
        ml: 1
      },
      color: error ? "error" : warning ? "warning" : undefined
    }, collapseIn ? "KeyboardDoubleArrowUp" : "KeyboardDoubleArrowDown");
    $[29] = collapse;
    $[30] = collapseIn;
    $[31] = error;
    $[32] = warning;
    $[33] = t12;
  } else {
    t12 = $[33];
  }
  var t13;
  if ($[34] !== handleClick || $[35] !== t10 || $[36] !== t11 || $[37] !== t12 || $[38] !== t8 || $[39] !== t9) {
    t13 = /*#__PURE__*/React.createElement(Box, {
      sx: t8,
      onClick: handleClick
    }, t9, t10, t11, t12);
    $[34] = handleClick;
    $[35] = t10;
    $[36] = t11;
    $[37] = t12;
    $[38] = t8;
    $[39] = t9;
    $[40] = t13;
  } else {
    t13 = $[40];
  }
  var t14;
  if ($[41] !== ref || $[42] !== style || $[43] !== sx || $[44] !== t13 || $[45] !== t6) {
    t14 = /*#__PURE__*/React.createElement(Grid, {
      ref: ref,
      size: t5,
      style: style,
      className: t6,
      sx: sx
    }, t13);
    $[41] = ref;
    $[42] = style;
    $[43] = sx;
    $[44] = t13;
    $[45] = t6;
    $[46] = t14;
  } else {
    t14 = $[46];
  }
  return t14;
};var _templateObject$h;
var StyledWrapGrid$1 = styled(Grid)(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n  width: 100%;\n"])));var _excluded$B = ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"];
var PFormBlock = function PFormBlock(t0) {
  var $ = c(66);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initSpacing = t0.spacing,
    initFocused = t0.focused,
    initLabelShrink = t0.labelShrink,
    initFullWidth = t0.fullWidth,
    icon = t0.icon,
    label = t0.label,
    line = t0.line,
    lineVerticalMargin = t0.lineVerticalMargin,
    error = t0.error,
    warning = t0.warning,
    hidden = t0.hidden,
    collapse = t0.collapse,
    initCollapseIn = t0.collapseIn,
    children = t0.children,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var t1 = useFormState();
  var formColor;
  var formFocused;
  var formFullWidth;
  var formLabelShrink;
  var formSize;
  var formSpacing;
  var formVariant;
  var otherFormState;
  if ($[0] !== t1) {
    var _t = t1;
    formVariant = _t.variant;
    formSize = _t.size;
    formColor = _t.color;
    formSpacing = _t.spacing;
    formFocused = _t.focused;
    formLabelShrink = _t.labelShrink;
    formFullWidth = _t.fullWidth;
    otherFormState = _objectWithoutProperties(_t, _excluded$B);
    $[0] = t1;
    $[1] = formColor;
    $[2] = formFocused;
    $[3] = formFullWidth;
    $[4] = formLabelShrink;
    $[5] = formSize;
    $[6] = formSpacing;
    $[7] = formVariant;
    $[8] = otherFormState;
  } else {
    formColor = $[1];
    formFocused = $[2];
    formFullWidth = $[3];
    formLabelShrink = $[4];
    formSize = $[5];
    formSpacing = $[6];
    formVariant = $[7];
    otherFormState = $[8];
  }
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var spacing = initSpacing !== null && initSpacing !== void 0 ? initSpacing : formSpacing;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var _useState = useState(initCollapseIn),
    _useState2 = _slicedToArray(_useState, 2),
    collapseIn = _useState2[0],
    setCollapseIn = _useState2[1];
  var t2;
  var t3;
  if ($[9] !== initCollapseIn) {
    t2 = function t2() {
      return setCollapseIn(initCollapseIn);
    };
    t3 = [initCollapseIn];
    $[9] = initCollapseIn;
    $[10] = t2;
    $[11] = t3;
  } else {
    t2 = $[10];
    t3 = $[11];
  }
  useFirstSkipChanged(t2, t3);
  var t4;
  if (hidden) {
    var _t2;
    if ($[12] !== initStyle) {
      _t2 = _objectSpread2(_objectSpread2({}, initStyle), {}, {
        display: "none"
      });
      $[12] = initStyle;
      $[13] = _t2;
    } else {
      _t2 = $[13];
    }
    t4 = _t2;
  } else {
    t4 = initStyle;
  }
  var style = t4;
  var Container = collapse ? Collapse : React.Fragment;
  var t5;
  if ($[14] !== collapse || $[15] !== collapseIn) {
    t5 = collapse ? {
      "in": collapseIn
    } : undefined;
    $[14] = collapse;
    $[15] = collapseIn;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  var containerProps = t5;
  var t6;
  if ($[17] !== color || $[18] !== focused || $[19] !== fullWidth || $[20] !== labelShrink || $[21] !== otherFormState || $[22] !== size || $[23] !== spacing || $[24] !== variant) {
    t6 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: variant,
      size: size,
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: fullWidth
    });
    $[17] = color;
    $[18] = focused;
    $[19] = fullWidth;
    $[20] = labelShrink;
    $[21] = otherFormState;
    $[22] = size;
    $[23] = spacing;
    $[24] = variant;
    $[25] = t6;
  } else {
    t6 = $[25];
  }
  var t7;
  if ($[26] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = {
      xs: 12
    };
    $[26] = t7;
  } else {
    t7 = $[26];
  }
  var t8;
  if ($[27] !== className) {
    t8 = classNames(className, "PFormBlock");
    $[27] = className;
    $[28] = t8;
  } else {
    t8 = $[28];
  }
  var t9;
  if ($[29] !== collapse || $[30] !== collapseIn || $[31] !== color || $[32] !== error || $[33] !== hidden || $[34] !== icon || $[35] !== label || $[36] !== line || $[37] !== lineVerticalMargin || $[38] !== size || $[39] !== warning) {
    t9 = (icon || label || line || collapse) && /*#__PURE__*/React.createElement(PFormDivider, {
      className: "PFormBlock-header",
      collapse: collapse,
      collapseIn: collapseIn,
      size: size,
      icon: icon,
      color: color,
      label: label,
      line: line,
      error: error,
      warning: warning,
      lineVerticalMargin: lineVerticalMargin,
      hidden: hidden,
      onCollapseChange: collapse ? function (newCollapseIn) {
        return setCollapseIn(newCollapseIn);
      } : undefined
    });
    $[29] = collapse;
    $[30] = collapseIn;
    $[31] = color;
    $[32] = error;
    $[33] = hidden;
    $[34] = icon;
    $[35] = label;
    $[36] = line;
    $[37] = lineVerticalMargin;
    $[38] = size;
    $[39] = warning;
    $[40] = t9;
  } else {
    t9 = $[40];
  }
  var t10;
  if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = {
      xs: 12
    };
    $[41] = t10;
  } else {
    t10 = $[41];
  }
  var t11;
  if ($[42] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = {
      xs: 12
    };
    $[42] = t11;
  } else {
    t11 = $[42];
  }
  var t12;
  if ($[43] !== children || $[44] !== spacing) {
    t12 = /*#__PURE__*/React.createElement(StyledWrapGrid$1, {
      size: t11,
      className: "PFormBlock-body"
    }, /*#__PURE__*/React.createElement(Grid, {
      className: "PFormBlock-content",
      container: true,
      spacing: spacing
    }, children));
    $[43] = children;
    $[44] = spacing;
    $[45] = t12;
  } else {
    t12 = $[45];
  }
  var t13;
  if ($[46] !== spacing || $[47] !== t12) {
    t13 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: spacing
    }, t12);
    $[46] = spacing;
    $[47] = t12;
    $[48] = t13;
  } else {
    t13 = $[48];
  }
  var t14;
  if ($[49] !== Container || $[50] !== containerProps || $[51] !== t13) {
    t14 = /*#__PURE__*/React.createElement(StyledWrapGrid$1, {
      size: t10
    }, /*#__PURE__*/React.createElement(Container, containerProps, t13));
    $[49] = Container;
    $[50] = containerProps;
    $[51] = t13;
    $[52] = t14;
  } else {
    t14 = $[52];
  }
  var t15;
  if ($[53] !== spacing || $[54] !== t14 || $[55] !== t9) {
    t15 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: spacing
    }, t9, t14);
    $[53] = spacing;
    $[54] = t14;
    $[55] = t9;
    $[56] = t15;
  } else {
    t15 = $[56];
  }
  var t16;
  if ($[57] !== ref || $[58] !== style || $[59] !== sx || $[60] !== t15 || $[61] !== t8) {
    t16 = /*#__PURE__*/React.createElement(Grid, {
      ref: ref,
      size: t7,
      className: t8,
      style: style,
      sx: sx
    }, t15);
    $[57] = ref;
    $[58] = style;
    $[59] = sx;
    $[60] = t15;
    $[61] = t8;
    $[62] = t16;
  } else {
    t16 = $[62];
  }
  var t17;
  if ($[63] !== t16 || $[64] !== t6) {
    t17 = /*#__PURE__*/React.createElement(PFormContext.Provider, {
      value: t6
    }, t16);
    $[63] = t16;
    $[64] = t6;
    $[65] = t17;
  } else {
    t17 = $[65];
  }
  return t17;
};var _templateObject$g;
var StyledWrapGrid = styled(Grid)(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n  width: 100%;\n"])));var _excluded$A = ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"];
var PFormRow = function PFormRow(t0) {
  var $ = c(73);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initSpacing = t0.spacing,
    initFocused = t0.focused,
    initLabelShrink = t0.labelShrink,
    initFullWidth = t0.fullWidth,
    icon = t0.icon,
    label = t0.label,
    line = t0.line,
    lineVerticalMargin = t0.lineVerticalMargin,
    fullHeight = t0.fullHeight,
    hidden = t0.hidden,
    error = t0.error,
    warning = t0.warning,
    helperText = t0.helperText,
    children = t0.children,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var t1 = useFormState();
  var formColor;
  var formFocused;
  var formFullWidth;
  var formLabelShrink;
  var formSize;
  var formSpacing;
  var formVariant;
  var otherFormState;
  if ($[0] !== t1) {
    var _t = t1;
    formVariant = _t.variant;
    formSize = _t.size;
    formColor = _t.color;
    formSpacing = _t.spacing;
    formFocused = _t.focused;
    formLabelShrink = _t.labelShrink;
    formFullWidth = _t.fullWidth;
    otherFormState = _objectWithoutProperties(_t, _excluded$A);
    $[0] = t1;
    $[1] = formColor;
    $[2] = formFocused;
    $[3] = formFullWidth;
    $[4] = formLabelShrink;
    $[5] = formSize;
    $[6] = formSpacing;
    $[7] = formVariant;
    $[8] = otherFormState;
  } else {
    formColor = $[1];
    formFocused = $[2];
    formFullWidth = $[3];
    formLabelShrink = $[4];
    formSize = $[5];
    formSpacing = $[6];
    formVariant = $[7];
    otherFormState = $[8];
  }
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var spacing = initSpacing !== null && initSpacing !== void 0 ? initSpacing : formSpacing;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var t2;
  if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {};
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  var formColsRef = useRef(t2);
  var _useState = useState(12),
    _useState2 = _slicedToArray(_useState, 2),
    formColAutoXs = _useState2[0],
    setFormColAutoXs = _useState2[1];
  var style;
  if ($[10] !== fullHeight || $[11] !== hidden || $[12] !== initStyle) {
    style = _objectSpread2({
      width: "100%"
    }, initStyle);
    if (hidden) {
      style.display = "none";
    }
    if (fullHeight) {
      style.height = "100%";
    }
    $[10] = fullHeight;
    $[11] = hidden;
    $[12] = initStyle;
    $[13] = style;
  } else {
    style = $[13];
  }
  var style_0 = style;
  var t3;
  if ($[14] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3() {
      var formColKeys = Object.keys(formColsRef.current);
      var autoXs = 12;
      var autoXsCount = formColKeys.length;
      formColKeys.forEach(function (id) {
        var xs = formColsRef.current[id];
        if (xs != null) {
          autoXs = autoXs - xs;
          autoXsCount = autoXsCount - 1;
        }
      });
      setFormColAutoXs(autoXsCount === 0 ? autoXs : autoXs / autoXsCount);
    };
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  var makeFormColXs = t3;
  var t4;
  if ($[15] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4(id_0, xs_0) {
      formColsRef.current = _objectSpread2(_objectSpread2({}, formColsRef.current), {}, _defineProperty({}, id_0, xs_0));
      makeFormColXs();
    };
    $[15] = t4;
  } else {
    t4 = $[15];
  }
  var handleAddFormCol = t4;
  var t5;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5(id_1) {
      delete formColsRef.current[id_1];
      makeFormColXs();
    };
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  var handleRemoveFormCol = t5;
  var t6;
  if ($[17] !== color || $[18] !== focused || $[19] !== formColAutoXs || $[20] !== fullWidth || $[21] !== labelShrink || $[22] !== otherFormState || $[23] !== size || $[24] !== spacing || $[25] !== variant) {
    t6 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: variant,
      size: size,
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: fullWidth,
      formColAutoXs: formColAutoXs,
      onAddFormCol: handleAddFormCol,
      onRemoveFormCol: handleRemoveFormCol
    });
    $[17] = color;
    $[18] = focused;
    $[19] = formColAutoXs;
    $[20] = fullWidth;
    $[21] = labelShrink;
    $[22] = otherFormState;
    $[23] = size;
    $[24] = spacing;
    $[25] = variant;
    $[26] = t6;
  } else {
    t6 = $[26];
  }
  var t7;
  if ($[27] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = {
      xs: 12
    };
    $[27] = t7;
  } else {
    t7 = $[27];
  }
  var t8;
  if ($[28] !== className) {
    t8 = classNames(className, "PFormRow");
    $[28] = className;
    $[29] = t8;
  } else {
    t8 = $[29];
  }
  var t9;
  if ($[30] !== fullHeight) {
    t9 = fullHeight ? {
      height: "100%"
    } : undefined;
    $[30] = fullHeight;
    $[31] = t9;
  } else {
    t9 = $[31];
  }
  var t10;
  if ($[32] !== className || $[33] !== color || $[34] !== error || $[35] !== hidden || $[36] !== icon || $[37] !== label || $[38] !== line || $[39] !== lineVerticalMargin || $[40] !== size || $[41] !== warning) {
    t10 = (icon || label || line) && /*#__PURE__*/React.createElement(PFormDivider, {
      className: classNames(className, "PFormRow-header"),
      size: size,
      icon: icon,
      color: color,
      label: label,
      line: line,
      error: error,
      warning: warning,
      lineVerticalMargin: lineVerticalMargin,
      hidden: hidden
    });
    $[32] = className;
    $[33] = color;
    $[34] = error;
    $[35] = hidden;
    $[36] = icon;
    $[37] = label;
    $[38] = line;
    $[39] = lineVerticalMargin;
    $[40] = size;
    $[41] = warning;
    $[42] = t10;
  } else {
    t10 = $[42];
  }
  var t11;
  if ($[43] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = {
      xs: 12
    };
    $[43] = t11;
  } else {
    t11 = $[43];
  }
  var t12;
  if ($[44] !== fullHeight) {
    t12 = fullHeight ? {
      height: "100%"
    } : undefined;
    $[44] = fullHeight;
    $[45] = t12;
  } else {
    t12 = $[45];
  }
  var t13 = fullHeight ? "100%" : undefined;
  var t14;
  if ($[46] !== t13) {
    t14 = {
      flexWrap: "nowrap",
      height: t13
    };
    $[46] = t13;
    $[47] = t14;
  } else {
    t14 = $[47];
  }
  var t15;
  if ($[48] !== children || $[49] !== spacing || $[50] !== t14) {
    t15 = /*#__PURE__*/React.createElement(Grid, {
      className: "PFormRow-content",
      container: true,
      spacing: spacing,
      direction: "row",
      style: t14
    }, children);
    $[48] = children;
    $[49] = spacing;
    $[50] = t14;
    $[51] = t15;
  } else {
    t15 = $[51];
  }
  var t16;
  if ($[52] !== error || $[53] !== helperText) {
    t16 = helperText && /*#__PURE__*/React.createElement(FormHelperText, {
      className: "PFormRow-helper-text",
      component: "div",
      error: error
    }, helperText);
    $[52] = error;
    $[53] = helperText;
    $[54] = t16;
  } else {
    t16 = $[54];
  }
  var t17;
  if ($[55] !== t12 || $[56] !== t15 || $[57] !== t16) {
    t17 = /*#__PURE__*/React.createElement(StyledWrapGrid, {
      size: t11,
      className: "PFormRow-body",
      style: t12
    }, t15, t16);
    $[55] = t12;
    $[56] = t15;
    $[57] = t16;
    $[58] = t17;
  } else {
    t17 = $[58];
  }
  var t18;
  if ($[59] !== spacing || $[60] !== t10 || $[61] !== t17 || $[62] !== t9) {
    t18 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: spacing,
      style: t9
    }, t10, t17);
    $[59] = spacing;
    $[60] = t10;
    $[61] = t17;
    $[62] = t9;
    $[63] = t18;
  } else {
    t18 = $[63];
  }
  var t19;
  if ($[64] !== ref || $[65] !== style_0 || $[66] !== sx || $[67] !== t18 || $[68] !== t8) {
    t19 = /*#__PURE__*/React.createElement(Grid, {
      ref: ref,
      size: t7,
      className: t8,
      style: style_0,
      sx: sx
    }, t18);
    $[64] = ref;
    $[65] = style_0;
    $[66] = sx;
    $[67] = t18;
    $[68] = t8;
    $[69] = t19;
  } else {
    t19 = $[69];
  }
  var t20;
  if ($[70] !== t19 || $[71] !== t6) {
    t20 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t6
    }, t19);
    $[70] = t19;
    $[71] = t6;
    $[72] = t20;
  } else {
    t20 = $[72];
  }
  return t20;
};var _templateObject$f, _templateObject2$8, _templateObject3$4;
var StyledFormLabelContainerDiv = styled('div')(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n  position: relative;\n  height: 20px;\n"])));
var StyledFormLabel = styled(PFormLabel)(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 5px;\n  top: 0;\n"])));
var StyledContentContainerBox = styled(Box)(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));var _excluded$z = ["variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "formColAutoXs", "onAddFormCol", "onRemoveFormCol"];
var PFormCol = function PFormCol(t0) {
  var $ = c(81);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initSpacing = t0.spacing,
    initFocused = t0.focused,
    initLabelShrink = t0.labelShrink,
    initFullWidth = t0.fullWidth,
    fullHeight = t0.fullHeight,
    initGap = t0.gap,
    icon = t0.icon,
    label = t0.label,
    hidden = t0.hidden,
    error = t0.error,
    warning = t0.warning,
    helperText = t0.helperText,
    helperTextShift = t0.helperTextShift,
    xs = t0.xs,
    className = t0.className,
    children = t0.children,
    initStyle = t0.style,
    sx = t0.sx;
  var id = useId();
  var t1 = useFormState();
  var formColAutoXs;
  var formColor;
  var formFocused;
  var formFormColGap;
  var formFullWidth;
  var formLabelShrink;
  var formSize;
  var formSpacing;
  var formVariant;
  var onAddFormCol;
  var onRemoveFormCol;
  var otherFormState;
  if ($[0] !== t1) {
    var _t = t1;
    formVariant = _t.variant;
    formSize = _t.size;
    formColor = _t.color;
    formSpacing = _t.spacing;
    formFormColGap = _t.formColGap;
    formFocused = _t.focused;
    formLabelShrink = _t.labelShrink;
    formFullWidth = _t.fullWidth;
    formColAutoXs = _t.formColAutoXs;
    onAddFormCol = _t.onAddFormCol;
    onRemoveFormCol = _t.onRemoveFormCol;
    otherFormState = _objectWithoutProperties(_t, _excluded$z);
    $[0] = t1;
    $[1] = formColAutoXs;
    $[2] = formColor;
    $[3] = formFocused;
    $[4] = formFormColGap;
    $[5] = formFullWidth;
    $[6] = formLabelShrink;
    $[7] = formSize;
    $[8] = formSpacing;
    $[9] = formVariant;
    $[10] = onAddFormCol;
    $[11] = onRemoveFormCol;
    $[12] = otherFormState;
  } else {
    formColAutoXs = $[1];
    formColor = $[2];
    formFocused = $[3];
    formFormColGap = $[4];
    formFullWidth = $[5];
    formLabelShrink = $[6];
    formSize = $[7];
    formSpacing = $[8];
    formVariant = $[9];
    onAddFormCol = $[10];
    onRemoveFormCol = $[11];
    otherFormState = $[12];
  }
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var spacing = initSpacing !== null && initSpacing !== void 0 ? initSpacing : formSpacing;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var formColGap = initGap !== null && initGap !== void 0 ? initGap : formFormColGap;
  var newStyle;
  if ($[13] !== fullHeight || $[14] !== hidden || $[15] !== initStyle) {
    newStyle = _objectSpread2({}, initStyle);
    if (hidden) {
      newStyle.display = "none";
    }
    if (fullHeight) {
      newStyle.height = "100%";
    }
    $[13] = fullHeight;
    $[14] = hidden;
    $[15] = initStyle;
    $[16] = newStyle;
  } else {
    newStyle = $[16];
  }
  var style = newStyle;
  var t2;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {
      handleHeight: false
    };
    $[17] = t2;
  } else {
    t2 = $[17];
  }
  var _useResizeDetector = useResizeDetector(t2),
    gridRef = _useResizeDetector.ref,
    resizedFormColWidth = _useResizeDetector.width;
  var formColWidth = resizedFormColWidth !== null && resizedFormColWidth !== void 0 ? resizedFormColWidth : 0;
  var t3;
  if ($[18] !== id || $[19] !== onAddFormCol || $[20] !== onRemoveFormCol || $[21] !== xs) {
    t3 = function t3() {
      if (onAddFormCol) {
        onAddFormCol(id, xs);
      }
      return function () {
        if (onRemoveFormCol) {
          onRemoveFormCol(id);
        }
      };
    };
    $[18] = id;
    $[19] = onAddFormCol;
    $[20] = onRemoveFormCol;
    $[21] = xs;
    $[22] = t3;
  } else {
    t3 = $[22];
  }
  var t4;
  if ($[23] !== xs) {
    t4 = [xs];
    $[23] = xs;
    $[24] = t4;
  } else {
    t4 = $[24];
  }
  useEventLayoutEffect(t3, t4);
  var t5;
  if ($[25] !== gridRef || $[26] !== ref) {
    t5 = function t5() {
      if (ref) {
        if (typeof ref === "function") {
          ref(gridRef.current);
        } else {
          ref.current = gridRef.current;
        }
      }
    };
    $[25] = gridRef;
    $[26] = ref;
    $[27] = t5;
  } else {
    t5 = $[27];
  }
  var t6;
  if ($[28] !== ref) {
    t6 = [ref];
    $[28] = ref;
    $[29] = t6;
  } else {
    t6 = $[29];
  }
  useEventEffect(t5, t6);
  var t7 = xs || formColAutoXs || 12;
  var t8 = !!label;
  var t9 = !!helperText;
  var t10;
  if ($[30] !== color || $[31] !== focused || $[32] !== formColGap || $[33] !== formColWidth || $[34] !== fullWidth || $[35] !== labelShrink || $[36] !== otherFormState || $[37] !== size || $[38] !== spacing || $[39] !== t7 || $[40] !== t8 || $[41] !== t9 || $[42] !== variant) {
    t10 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: variant,
      size: size,
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: fullWidth,
      formColGap: formColGap,
      formColXs: t7,
      formColWidth: formColWidth,
      formColWithLabel: t8,
      formColWithHelperText: t9
    });
    $[30] = color;
    $[31] = focused;
    $[32] = formColGap;
    $[33] = formColWidth;
    $[34] = fullWidth;
    $[35] = labelShrink;
    $[36] = otherFormState;
    $[37] = size;
    $[38] = spacing;
    $[39] = t7;
    $[40] = t8;
    $[41] = t9;
    $[42] = variant;
    $[43] = t10;
  } else {
    t10 = $[43];
  }
  var t11;
  if ($[44] !== gridRef) {
    t11 = function t11(ref_0) {
      gridRef.current = ref_0;
    };
    $[44] = gridRef;
    $[45] = t11;
  } else {
    t11 = $[45];
  }
  var t12 = xs || formColAutoXs || 12;
  var t13;
  if ($[46] !== t12) {
    t13 = {
      xs: t12
    };
    $[46] = t12;
    $[47] = t13;
  } else {
    t13 = $[47];
  }
  var t14 = !!label && "with-label";
  var t15 = !!helperText && "with-helper-text";
  var t16;
  if ($[48] !== className || $[49] !== t14 || $[50] !== t15) {
    t16 = classNames(className, "PFormCol", t14, t15);
    $[48] = className;
    $[49] = t14;
    $[50] = t15;
    $[51] = t16;
  } else {
    t16 = $[51];
  }
  var t17;
  if ($[52] !== color || $[53] !== error || $[54] !== focused || $[55] !== icon || $[56] !== label || $[57] !== size || $[58] !== warning) {
    t17 = label && /*#__PURE__*/React.createElement("div", {
      className: "FormCol-header"
    }, /*#__PURE__*/React.createElement(StyledFormLabelContainerDiv, null, /*#__PURE__*/React.createElement(StyledFormLabel, {
      className: "FormCol-FormLabel",
      size: size,
      icon: icon,
      focused: focused,
      color: color,
      error: error,
      warning: warning
    }, label)));
    $[52] = color;
    $[53] = error;
    $[54] = focused;
    $[55] = icon;
    $[56] = label;
    $[57] = size;
    $[58] = warning;
    $[59] = t17;
  } else {
    t17 = $[59];
  }
  var t18;
  if ($[60] !== children || $[61] !== formColGap) {
    t18 = /*#__PURE__*/React.createElement("div", {
      className: "FormCol-content"
    }, /*#__PURE__*/React.createElement(StyledContentContainerBox, {
      gap: formColGap
    }, children));
    $[60] = children;
    $[61] = formColGap;
    $[62] = t18;
  } else {
    t18 = $[62];
  }
  var t19;
  if ($[63] !== error || $[64] !== helperText || $[65] !== helperTextShift) {
    t19 = helperText && /*#__PURE__*/React.createElement("div", {
      className: "FormCol-helper-text"
    }, /*#__PURE__*/React.createElement(FormHelperText, {
      component: "div",
      error: error,
      style: {
        marginLeft: helperTextShift ? 14 : 5
      }
    }, helperText));
    $[63] = error;
    $[64] = helperText;
    $[65] = helperTextShift;
    $[66] = t19;
  } else {
    t19 = $[66];
  }
  var t20;
  if ($[67] !== t17 || $[68] !== t18 || $[69] !== t19) {
    t20 = /*#__PURE__*/React.createElement("div", null, t17, t18, t19);
    $[67] = t17;
    $[68] = t18;
    $[69] = t19;
    $[70] = t20;
  } else {
    t20 = $[70];
  }
  var t21;
  if ($[71] !== style || $[72] !== sx || $[73] !== t11 || $[74] !== t13 || $[75] !== t16 || $[76] !== t20) {
    t21 = /*#__PURE__*/React.createElement(Grid, {
      ref: t11,
      size: t13,
      className: t16,
      style: style,
      sx: sx
    }, t20);
    $[71] = style;
    $[72] = sx;
    $[73] = t11;
    $[74] = t13;
    $[75] = t16;
    $[76] = t20;
    $[77] = t21;
  } else {
    t21 = $[77];
  }
  var t22;
  if ($[78] !== t10 || $[79] !== t21) {
    t22 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t10
    }, t21);
    $[78] = t10;
    $[79] = t21;
    $[80] = t22;
  } else {
    t22 = $[80];
  }
  return t22;
};var _templateObject$e, _templateObject2$7;
var StyledContainerDiv = styled('div')(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  flex: 1;\n  position: relative;\n"])));
var StyledContentDiv = styled('div')(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"])));var PFormBody = function PFormBody(t0) {
  var $ = c(23);
  var children = t0.children,
    hidden = t0.hidden,
    initFullHeight = t0.fullHeight,
    initStyle = t0.style;
  var _useFormState = useFormState(),
    spacing = _useFormState.spacing,
    fullHeight = _useFormState.fullHeight;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      handleWidth: false
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var _useResizeDetector = useResizeDetector(t1),
    containerRef = _useResizeDetector.ref,
    resizedHeight = _useResizeDetector.height;
  var height = resizedHeight !== null && resizedHeight !== void 0 ? resizedHeight : 0;
  var newStyle;
  if ($[1] !== hidden || $[2] !== initStyle) {
    newStyle = _objectSpread2({}, initStyle);
    if (hidden) {
      newStyle.display = "none";
    }
    $[1] = hidden;
    $[2] = initStyle;
    $[3] = newStyle;
  } else {
    newStyle = $[3];
  }
  var style = newStyle;
  var t2;
  if ($[4] !== fullHeight || $[5] !== height) {
    t2 = fullHeight ? {
      height: height,
      paddingTop: 8,
      overflowY: "auto",
      position: "absolute",
      width: "100%"
    } : undefined;
    $[4] = fullHeight;
    $[5] = height;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var contentStyle = t2;
  var t3;
  if ($[7] !== containerRef || $[8] !== fullHeight) {
    t3 = fullHeight ? function (ref) {
      containerRef.current = ref;
    } : undefined;
    $[7] = containerRef;
    $[8] = fullHeight;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  var t4;
  if ($[10] !== initFullHeight) {
    t4 = initFullHeight ? {
      height: "100%"
    } : undefined;
    $[10] = initFullHeight;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var t5;
  if ($[12] !== children || $[13] !== spacing || $[14] !== t4) {
    t5 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: spacing,
      direction: "column",
      style: t4
    }, children);
    $[12] = children;
    $[13] = spacing;
    $[14] = t4;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  var t6;
  if ($[16] !== contentStyle || $[17] !== t5) {
    t6 = /*#__PURE__*/React.createElement(StyledContentDiv, {
      style: contentStyle
    }, t5);
    $[16] = contentStyle;
    $[17] = t5;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  var t7;
  if ($[19] !== style || $[20] !== t3 || $[21] !== t6) {
    t7 = /*#__PURE__*/React.createElement(StyledContainerDiv, {
      ref: t3,
      className: "PFormBody",
      style: style
    }, t6);
    $[19] = style;
    $[20] = t3;
    $[21] = t6;
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  return t7;
};var PFormFooter = function PFormFooter(t0) {
  var $ = c(13);
  var children = t0.children,
    noLine = t0.noLine,
    hidden = t0.hidden;
  var _useFormState = useFormState(),
    spacing = _useFormState.spacing;
  var t1;
  if ($[0] !== hidden) {
    t1 = hidden ? {
      display: "none"
    } : undefined;
    $[0] = hidden;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var style = t1;
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {
      xs: 12
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var t3;
  if ($[3] !== noLine || $[4] !== spacing) {
    t3 = !noLine && /*#__PURE__*/React.createElement(Grid, {
      size: {
        xs: 12
      },
      sx: {
        mt: spacing
      }
    }, /*#__PURE__*/React.createElement(PFormDivider, {
      line: true
    }));
    $[3] = noLine;
    $[4] = spacing;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  var t4;
  if ($[6] !== children || $[7] !== spacing || $[8] !== t3) {
    t4 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: spacing,
      direction: "column"
    }, t3, children);
    $[6] = children;
    $[7] = spacing;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var t5;
  if ($[10] !== style || $[11] !== t4) {
    t5 = /*#__PURE__*/React.createElement(Grid, {
      size: t2,
      className: "PFormFooter",
      style: style
    }, t4);
    $[10] = style;
    $[11] = t4;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  return t5;
};insertStyle(".PFormTextField{min-width:200px}.PFormTextField .clear-icon-button-wrap{display:none}.PFormTextField.variant-filled .clear-icon-button-wrap{margin-top:9px;margin-bottom:-9px}.PFormTextField:hover .clear-icon-button-wrap.show,.PFormTextField .MuiInputBase-root.Mui-focused .clear-icon-button-wrap.show{display:block}");var _excluded$y = ["ref", "variant", "size", "color", "focused", "labelShrink", "fullWidth", "submitWhenReturnKey", "name", "required", "value", "data", "icon", "labelIcon", "label", "error", "helperText", "exceptValue", "readOnly", "tabIndex", "disabled", "placeholder", "maxLength", "clear", "width", "slotProps", "inputRef", "select", "multiline", "validPattern", "invalidPattern", "startAdornment", "endAdornment", "noFormValueItem", "hidden", "disableReturnKey", "onChange", "onValue", "onValidate", "onBlur", "onKeyDown", "className", "style"];
function PFormTextField(t0) {
  var _initSlotProps, _initSlotProps4;
  var $ = c(216);
  var className;
  var clear;
  var disableReturnKey;
  var endAdornment;
  var exceptValue;
  var helperText;
  var icon;
  var initColor;
  var initData;
  var initDisabled;
  var initError;
  var initFocused;
  var initFullWidth;
  var initHidden;
  var initInputRef;
  var initLabel;
  var initLabelShrink;
  var initSize;
  var initSlotProps;
  var initStyle;
  var initSubmitWhenReturnKey;
  var initValue;
  var initVariant;
  var invalidPattern;
  var labelIcon;
  var maxLength;
  var multiline;
  var name;
  var noFormValueItem;
  var onBlur;
  var onChange;
  var onKeyDown;
  var onValidate;
  var onValue;
  var placeholder;
  var props;
  var readOnly;
  var ref;
  var required;
  var select;
  var startAdornment;
  var tabIndex;
  var validPattern;
  var width;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    initVariant = _t.variant;
    initSize = _t.size;
    initColor = _t.color;
    initFocused = _t.focused;
    initLabelShrink = _t.labelShrink;
    initFullWidth = _t.fullWidth;
    initSubmitWhenReturnKey = _t.submitWhenReturnKey;
    name = _t.name;
    required = _t.required;
    initValue = _t.value;
    initData = _t.data;
    icon = _t.icon;
    labelIcon = _t.labelIcon;
    initLabel = _t.label;
    initError = _t.error;
    helperText = _t.helperText;
    exceptValue = _t.exceptValue;
    readOnly = _t.readOnly;
    tabIndex = _t.tabIndex;
    initDisabled = _t.disabled;
    placeholder = _t.placeholder;
    maxLength = _t.maxLength;
    clear = _t.clear;
    width = _t.width;
    initSlotProps = _t.slotProps;
    initInputRef = _t.inputRef;
    select = _t.select;
    multiline = _t.multiline;
    validPattern = _t.validPattern;
    invalidPattern = _t.invalidPattern;
    startAdornment = _t.startAdornment;
    endAdornment = _t.endAdornment;
    noFormValueItem = _t.noFormValueItem;
    initHidden = _t.hidden;
    disableReturnKey = _t.disableReturnKey;
    onChange = _t.onChange;
    onValue = _t.onValue;
    onValidate = _t.onValidate;
    onBlur = _t.onBlur;
    onKeyDown = _t.onKeyDown;
    className = _t.className;
    initStyle = _t.style;
    props = _objectWithoutProperties(_t, _excluded$y);
    $[0] = t0;
    $[1] = className;
    $[2] = clear;
    $[3] = disableReturnKey;
    $[4] = endAdornment;
    $[5] = exceptValue;
    $[6] = helperText;
    $[7] = icon;
    $[8] = initColor;
    $[9] = initData;
    $[10] = initDisabled;
    $[11] = initError;
    $[12] = initFocused;
    $[13] = initFullWidth;
    $[14] = initHidden;
    $[15] = initInputRef;
    $[16] = initLabel;
    $[17] = initLabelShrink;
    $[18] = initSize;
    $[19] = initSlotProps;
    $[20] = initStyle;
    $[21] = initSubmitWhenReturnKey;
    $[22] = initValue;
    $[23] = initVariant;
    $[24] = invalidPattern;
    $[25] = labelIcon;
    $[26] = maxLength;
    $[27] = multiline;
    $[28] = name;
    $[29] = noFormValueItem;
    $[30] = onBlur;
    $[31] = onChange;
    $[32] = onKeyDown;
    $[33] = onValidate;
    $[34] = onValue;
    $[35] = placeholder;
    $[36] = props;
    $[37] = readOnly;
    $[38] = ref;
    $[39] = required;
    $[40] = select;
    $[41] = startAdornment;
    $[42] = tabIndex;
    $[43] = validPattern;
    $[44] = width;
  } else {
    className = $[1];
    clear = $[2];
    disableReturnKey = $[3];
    endAdornment = $[4];
    exceptValue = $[5];
    helperText = $[6];
    icon = $[7];
    initColor = $[8];
    initData = $[9];
    initDisabled = $[10];
    initError = $[11];
    initFocused = $[12];
    initFullWidth = $[13];
    initHidden = $[14];
    initInputRef = $[15];
    initLabel = $[16];
    initLabelShrink = $[17];
    initSize = $[18];
    initSlotProps = $[19];
    initStyle = $[20];
    initSubmitWhenReturnKey = $[21];
    initValue = $[22];
    initVariant = $[23];
    invalidPattern = $[24];
    labelIcon = $[25];
    maxLength = $[26];
    multiline = $[27];
    name = $[28];
    noFormValueItem = $[29];
    onBlur = $[30];
    onChange = $[31];
    onKeyDown = $[32];
    onValidate = $[33];
    onValue = $[34];
    placeholder = $[35];
    props = $[36];
    readOnly = $[37];
    ref = $[38];
    required = $[39];
    select = $[40];
    startAdornment = $[41];
    tabIndex = $[42];
    validPattern = $[43];
    width = $[44];
  }
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formSubmitWhenReturnKey = _useFormState.submitWhenReturnKey,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSubmit = _useFormState.onRequestSubmit,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var submitWhenReturnKey = initSubmitWhenReturnKey !== null && initSubmitWhenReturnKey !== void 0 ? initSubmitWhenReturnKey : formSubmitWhenReturnKey;
  var initValueRef = useAutoUpdateRef(initValue);
  var inputRef = useRef(null);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var onBlurRef = useAutoUpdateRef(onBlur);
  var onKeyDownRef = useAutoUpdateRef(onKeyDown);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    _setError = _useState4[1];
  var t1;
  var t2;
  if ($[45] !== initError) {
    t1 = function t1() {
      return _setError(initError);
    };
    t2 = [initError];
    $[45] = initError;
    $[46] = t1;
    $[47] = t2;
  } else {
    t1 = $[46];
    t2 = $[47];
  }
  useFirstSkipChanged(t1, t2);
  var errorRef = useAutoUpdateRef(error);
  var t3;
  if ($[48] !== errorRef) {
    t3 = function t3(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[48] = errorRef;
    $[49] = t3;
  } else {
    t3 = $[49];
  }
  var setError = t3;
  var _useState5 = useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    _setData = _useState6[1];
  var t4;
  var t5;
  if ($[50] !== initData) {
    t4 = function t4() {
      return _setData(initData);
    };
    t5 = [initData];
    $[50] = initData;
    $[51] = t4;
    $[52] = t5;
  } else {
    t4 = $[51];
    t5 = $[52];
  }
  useFirstSkipChanged(t4, t5);
  var dataRef = useAutoUpdateRef(data);
  var t6;
  if ($[53] !== dataRef) {
    t6 = function t6(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[53] = dataRef;
    $[54] = t6;
  } else {
    t6 = $[54];
  }
  var setData = t6;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  var t7;
  var t8;
  if ($[55] !== finalInitDisabled) {
    t7 = function t7() {
      return setDisabled(finalInitDisabled);
    };
    t8 = [finalInitDisabled];
    $[55] = finalInitDisabled;
    $[56] = t7;
    $[57] = t8;
  } else {
    t7 = $[56];
    t8 = $[57];
  }
  useFirstSkipChanged(t7, t8);
  var _useState9 = useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  var t10;
  var t9;
  if ($[58] !== initHidden) {
    t9 = function t9() {
      return setHidden(initHidden);
    };
    t10 = [initHidden];
    $[58] = initHidden;
    $[59] = t10;
    $[60] = t9;
  } else {
    t10 = $[59];
    t9 = $[60];
  }
  useFirstSkipChanged(t9, t10);
  var t11;
  if ($[61] !== setError) {
    t11 = function t11(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[61] = setError;
    $[62] = t11;
  } else {
    t11 = $[62];
  }
  var setErrorErrorHelperText = t11;
  var t12;
  if ($[63] !== invalidPattern || $[64] !== onValidateRef || $[65] !== required || $[66] !== setErrorErrorHelperText || $[67] !== validPattern) {
    t12 = function t12(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (notEmpty(value) && validPattern) {
        if (!new RegExp(validPattern).test(value)) {
          setErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
          return false;
        }
      }
      if (notEmpty(value) && invalidPattern) {
        if (new RegExp(invalidPattern).test(value)) {
          setErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
          return false;
        }
      }
      if (onValidateRef.current) {
        var validateResult = onValidateRef.current(value);
        if (validateResult != null && validateResult !== true) {
          setErrorErrorHelperText(true, validateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[63] = invalidPattern;
    $[64] = onValidateRef;
    $[65] = required;
    $[66] = setErrorErrorHelperText;
    $[67] = validPattern;
    $[68] = t12;
  } else {
    t12 = $[68];
  }
  var validate = t12;
  var t13;
  if ($[69] !== initInputRef) {
    t13 = function t13() {
      if (initInputRef) {
        var _current;
        (_current = initInputRef.current) === null || _current === void 0 || _current.focus();
      } else {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      }
    };
    $[69] = initInputRef;
    $[70] = t13;
  } else {
    t13 = $[70];
  }
  var focus = t13;
  var t14;
  if ($[71] !== onValue) {
    t14 = function t14(newValue_1) {
      return onValue ? onValue(newValue_1) : newValue_1;
    };
    $[71] = onValue;
    $[72] = t14;
  } else {
    t14 = $[72];
  }
  var getFinalValue = t14;
  var t15;
  if ($[73] !== getFinalValue || $[74] !== initValue) {
    t15 = getFinalValue(initValue);
    $[73] = getFinalValue;
    $[74] = initValue;
    $[75] = t15;
  } else {
    t15 = $[75];
  }
  var _useState1 = useState(t15),
    _useState10 = _slicedToArray(_useState1, 2),
    value_0 = _useState10[0],
    _setValue = _useState10[1];
  var t16;
  var t17;
  if ($[76] !== initValue) {
    t16 = function t16() {
      return _setValue(initValue);
    };
    t17 = [initValue];
    $[76] = initValue;
    $[77] = t16;
    $[78] = t17;
  } else {
    t16 = $[77];
    t17 = $[78];
  }
  useFirstSkipChanged(t16, t17);
  var valueRef = useAutoUpdateRef(value_0);
  var t18;
  if ($[79] !== valueRef) {
    t18 = function t18(newValue_2) {
      _setValue(newValue_2);
      valueRef.current = newValue_2;
    };
    $[79] = valueRef;
    $[80] = t18;
  } else {
    t18 = $[80];
  }
  var setValue = t18;
  var t19;
  if ($[81] !== error || $[82] !== getFinalValue || $[83] !== name || $[84] !== noFormValueItem || $[85] !== onChangeRef || $[86] !== onValueChange || $[87] !== setValue || $[88] !== validate) {
    t19 = function t19(newValue_3) {
      var _onChangeRef$current;
      var finalValue = getFinalValue(newValue_3);
      setValue(finalValue);
      if (error) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      if (!noFormValueItem) {
        onValueChange(name, finalValue);
      }
      return finalValue;
    };
    $[81] = error;
    $[82] = getFinalValue;
    $[83] = name;
    $[84] = noFormValueItem;
    $[85] = onChangeRef;
    $[86] = onValueChange;
    $[87] = setValue;
    $[88] = validate;
    $[89] = t19;
  } else {
    t19 = $[89];
  }
  var updateValue = t19;
  var t20;
  if ($[90] !== clear || $[91] !== value_0) {
    t20 = clear ? notEmpty(value_0) : false;
    $[90] = clear;
    $[91] = value_0;
    $[92] = t20;
  } else {
    t20 = $[92];
  }
  var showClear = t20;
  var t21;
  if ($[93] !== name) {
    t21 = function t21() {
      return name;
    };
    $[93] = name;
    $[94] = t21;
  } else {
    t21 = $[94];
  }
  var t22;
  if ($[95] !== getFinalValue || $[96] !== initValueRef) {
    t22 = function t22() {
      return getFinalValue(initValueRef.current);
    };
    $[95] = getFinalValue;
    $[96] = initValueRef;
    $[97] = t22;
  } else {
    t22 = $[97];
  }
  var t23;
  if ($[98] !== initValueRef || $[99] !== updateValue) {
    t23 = function t23() {
      return updateValue(initValueRef.current);
    };
    $[98] = initValueRef;
    $[99] = updateValue;
    $[100] = t23;
  } else {
    t23 = $[100];
  }
  var t24;
  if ($[101] !== valueRef) {
    t24 = function t24() {
      return valueRef.current;
    };
    $[101] = valueRef;
    $[102] = t24;
  } else {
    t24 = $[102];
  }
  var t25;
  if ($[103] !== dataRef) {
    t25 = function t25() {
      return dataRef.current;
    };
    $[103] = dataRef;
    $[104] = t25;
  } else {
    t25 = $[104];
  }
  var t26;
  if ($[105] !== exceptValue) {
    t26 = function t26() {
      return !!exceptValue;
    };
    $[105] = exceptValue;
    $[106] = t26;
  } else {
    t26 = $[106];
  }
  var t27;
  if ($[107] !== disabled) {
    t27 = function t27() {
      return !!disabled;
    };
    $[107] = disabled;
    $[108] = t27;
  } else {
    t27 = $[108];
  }
  var t28;
  if ($[109] !== hidden) {
    t28 = function t28() {
      return !!hidden;
    };
    $[109] = hidden;
    $[110] = t28;
  } else {
    t28 = $[110];
  }
  var t29;
  if ($[111] !== validate || $[112] !== valueRef) {
    t29 = function t29() {
      return validate(valueRef.current);
    };
    $[111] = validate;
    $[112] = valueRef;
    $[113] = t29;
  } else {
    t29 = $[113];
  }
  var t30;
  if ($[114] !== focus || $[115] !== setData || $[116] !== setErrorErrorHelperText || $[117] !== t21 || $[118] !== t22 || $[119] !== t23 || $[120] !== t24 || $[121] !== t25 || $[122] !== t26 || $[123] !== t27 || $[124] !== t28 || $[125] !== t29 || $[126] !== updateValue) {
    t30 = {
      getType: _temp$w,
      getName: t21,
      getReset: t22,
      reset: t23,
      getValue: t24,
      setValue: updateValue,
      getData: t25,
      setData: setData,
      isExceptValue: t26,
      isDisabled: t27,
      setDisabled: setDisabled,
      isHidden: t28,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t29,
      setError: setErrorErrorHelperText
    };
    $[114] = focus;
    $[115] = setData;
    $[116] = setErrorErrorHelperText;
    $[117] = t21;
    $[118] = t22;
    $[119] = t23;
    $[120] = t24;
    $[121] = t25;
    $[122] = t26;
    $[123] = t27;
    $[124] = t28;
    $[125] = t29;
    $[126] = updateValue;
    $[127] = t30;
  } else {
    t30 = $[127];
  }
  var commands = t30;
  var t31;
  if ($[128] !== id || $[129] !== onAddValueItem) {
    t31 = function t31(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[128] = id;
    $[129] = onAddValueItem;
    $[130] = t31;
  } else {
    t31 = $[130];
  }
  var handleCommandSet = t31;
  var t32;
  if ($[131] !== id || $[132] !== onRemoveValueItem) {
    t32 = function t32() {
      return onRemoveValueItem(id);
    };
    $[131] = id;
    $[132] = onRemoveValueItem;
    $[133] = t32;
  } else {
    t32 = $[133];
  }
  var handleCommandUnset = t32;
  useForwardRef(ref, commands, !noFormValueItem ? handleCommandSet : undefined, !noFormValueItem ? handleCommandUnset : undefined);
  var t33;
  if ($[134] !== name || $[135] !== noFormValueItem || $[136] !== onRequestSearchSubmit || $[137] !== onValueChangeByUser || $[138] !== select || $[139] !== updateValue) {
    t33 = function t33(e) {
      var finalValue_0 = updateValue(e.target.value);
      if (!noFormValueItem) {
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_0);
          if (select) {
            onRequestSearchSubmit(name, finalValue_0);
          }
        });
      }
    };
    $[134] = name;
    $[135] = noFormValueItem;
    $[136] = onRequestSearchSubmit;
    $[137] = onValueChangeByUser;
    $[138] = select;
    $[139] = updateValue;
    $[140] = t33;
  } else {
    t33 = $[140];
  }
  var handleChange = t33;
  var t34;
  if ($[141] !== error || $[142] !== onBlurRef || $[143] !== validate || $[144] !== valueRef) {
    t34 = function t34(e_0) {
      var _onBlurRef$current;
      if (error) {
        validate(valueRef.current);
      }
      (_onBlurRef$current = onBlurRef.current) === null || _onBlurRef$current === void 0 || _onBlurRef$current.call(onBlurRef, e_0);
    };
    $[141] = error;
    $[142] = onBlurRef;
    $[143] = validate;
    $[144] = valueRef;
    $[145] = t34;
  } else {
    t34 = $[145];
  }
  var handleBlur = t34;
  var t35;
  if ($[146] !== disableReturnKey || $[147] !== multiline || $[148] !== name || $[149] !== noFormValueItem || $[150] !== onKeyDownRef || $[151] !== onRequestSearchSubmit || $[152] !== onRequestSubmit || $[153] !== select || $[154] !== submitWhenReturnKey || $[155] !== valueRef) {
    t35 = function t35(e_1) {
      var _onKeyDownRef$current;
      if (["Enter"].includes(e_1.key) && !select && (!multiline || multiline && disableReturnKey) && !noFormValueItem) {
        e_1.preventDefault();
        e_1.stopPropagation();
        if (submitWhenReturnKey) {
          onRequestSubmit(name, valueRef.current);
        }
        onRequestSearchSubmit(name, valueRef.current);
      }
      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 || _onKeyDownRef$current.call(onKeyDownRef, e_1);
    };
    $[146] = disableReturnKey;
    $[147] = multiline;
    $[148] = name;
    $[149] = noFormValueItem;
    $[150] = onKeyDownRef;
    $[151] = onRequestSearchSubmit;
    $[152] = onRequestSubmit;
    $[153] = select;
    $[154] = submitWhenReturnKey;
    $[155] = valueRef;
    $[156] = t35;
  } else {
    t35 = $[156];
  }
  var handleKeyDown = t35;
  var newStyle;
  if ($[157] !== hidden || $[158] !== initStyle || $[159] !== width) {
    newStyle = _objectSpread2({}, initStyle);
    if (width != null) {
      newStyle.width = width;
    }
    if (hidden) {
      newStyle.display = "none";
    }
    $[157] = hidden;
    $[158] = initStyle;
    $[159] = width;
    $[160] = newStyle;
  } else {
    newStyle = $[160];
  }
  var style = newStyle;
  var t36;
  if ($[161] !== clear || $[162] !== disabled || $[163] !== endAdornment || $[164] !== focus || $[165] !== icon || $[166] !== ((_initSlotProps = initSlotProps) === null || _initSlotProps === void 0 ? void 0 : _initSlotProps.input) || $[167] !== name || $[168] !== noFormValueItem || $[169] !== onRequestSearchSubmit || $[170] !== onValueChangeByUser || $[171] !== readOnly || $[172] !== showClear || $[173] !== startAdornment || $[174] !== updateValue) {
    var _initSlotProps3;
    t36 = function t36() {
      var _initSlotProps2;
      var newProps = _objectSpread2({}, (_initSlotProps2 = initSlotProps) === null || _initSlotProps2 === void 0 ? void 0 : _initSlotProps2.input);
      if (startAdornment || icon || newProps.startAdornment) {
        newProps.startAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "small"
        }, icon)), startAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, startAdornment), newProps.startAdornment);
      }
      if (endAdornment || newProps.endAdornment || clear && !readOnly && !disabled) {
        newProps.endAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, clear && !readOnly && !disabled && /*#__PURE__*/React.createElement(InputAdornment, {
          className: classNames("clear-icon-button-wrap", showClear && "show"),
          position: "end"
        }, /*#__PURE__*/React.createElement(IconButton, {
          className: "clear-icon-button",
          size: "small",
          tabIndex: -1,
          onClick: function onClick() {
            var finalValue_1 = updateValue("");
            focus();
            if (!noFormValueItem) {
              setTimeout(function () {
                onValueChangeByUser(name, finalValue_1);
                onRequestSearchSubmit(name, finalValue_1);
              });
            }
          }
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "inherit"
        }, "ClearRounded"))), newProps.endAdornment, endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, endAdornment));
      }
      return newProps;
    };
    $[161] = clear;
    $[162] = disabled;
    $[163] = endAdornment;
    $[164] = focus;
    $[165] = icon;
    $[166] = (_initSlotProps3 = initSlotProps) === null || _initSlotProps3 === void 0 ? void 0 : _initSlotProps3.input;
    $[167] = name;
    $[168] = noFormValueItem;
    $[169] = onRequestSearchSubmit;
    $[170] = onValueChangeByUser;
    $[171] = readOnly;
    $[172] = showClear;
    $[173] = startAdornment;
    $[174] = updateValue;
    $[175] = t36;
  } else {
    t36 = $[175];
  }
  (_initSlotProps4 = initSlotProps) === null || _initSlotProps4 === void 0 || _initSlotProps4.input;
  var t37;
  if ($[176] !== t36) {
    t37 = t36();
    $[176] = t36;
    $[177] = t37;
  } else {
    t37 = $[177];
  }
  var inputSlotProps = t37;
  var newSlotProps;
  if ($[178] !== initSlotProps || $[179] !== inputSlotProps || $[180] !== labelShrink || $[181] !== maxLength || $[182] !== placeholder || $[183] !== readOnly || $[184] !== tabIndex) {
    var _initSlotProps5, _initSlotProps6, _initSlotProps7, _initSlotProps8, _initHtmlInputProps$c;
    newSlotProps = _objectSpread2(_objectSpread2({}, initSlotProps), {}, {
      formHelperText: {
        component: "div"
      }
    });
    newSlotProps.input = _objectSpread2(_objectSpread2({}, (_initSlotProps5 = initSlotProps) === null || _initSlotProps5 === void 0 ? void 0 : _initSlotProps5.input), inputSlotProps);
    newSlotProps.inputLabel = labelShrink || placeholder ? _objectSpread2(_objectSpread2({}, (_initSlotProps6 = initSlotProps) === null || _initSlotProps6 === void 0 ? void 0 : _initSlotProps6.inputLabel), {}, {
      shrink: true
    }) : (_initSlotProps7 = initSlotProps) === null || _initSlotProps7 === void 0 ? void 0 : _initSlotProps7.inputLabel;
    var initHtmlInputProps = (_initSlotProps8 = initSlotProps) === null || _initSlotProps8 === void 0 ? void 0 : _initSlotProps8.htmlInput;
    if (!(initHtmlInputProps !== null && initHtmlInputProps !== void 0 && (_initHtmlInputProps$c = initHtmlInputProps.className) !== null && _initHtmlInputProps$c !== void 0 && _initHtmlInputProps$c.includes("PFormTag-Input")) && readOnly != null || maxLength != null) {
      newSlotProps.htmlInput = _objectSpread2(_objectSpread2({}, initHtmlInputProps), {}, {
        readOnly: readOnly,
        maxLength: maxLength
      });
      if (readOnly) {
        newSlotProps.htmlInput.tabIndex = -1;
        newSlotProps.htmlInput.className = classNames(newSlotProps.htmlInput.className, "Mui-disabled");
      } else {
        newSlotProps.htmlInput.tabIndex = tabIndex;
      }
    }
    $[178] = initSlotProps;
    $[179] = inputSlotProps;
    $[180] = labelShrink;
    $[181] = maxLength;
    $[182] = placeholder;
    $[183] = readOnly;
    $[184] = tabIndex;
    $[185] = newSlotProps;
  } else {
    newSlotProps = $[185];
  }
  var slotProps = newSlotProps;
  var t38 = focused || undefined;
  var t39;
  if ($[186] !== initLabel || $[187] !== labelIcon) {
    t39 = labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PIcon, {
      style: {
        verticalAlign: "middle",
        marginRight: 4
      }
    }, labelIcon), /*#__PURE__*/React.createElement(Box, {
      component: "span",
      style: {
        verticalAlign: "middle"
      }
    }, initLabel)) : initLabel;
    $[186] = initLabel;
    $[187] = labelIcon;
    $[188] = t39;
  } else {
    t39 = $[188];
  }
  var t40 = "variant-".concat(variant);
  var t41;
  if ($[189] !== className || $[190] !== t40) {
    t41 = classNames(className, "PFormValueItem", "PFormTextField", t40);
    $[189] = className;
    $[190] = t40;
    $[191] = t41;
  } else {
    t41 = $[191];
  }
  var t42 = initInputRef ? initInputRef : inputRef;
  var t43 = !width && fullWidth;
  var t44 = formColWithHelperText ? undefined : error ? errorHelperText : helperText;
  var t45;
  if ($[192] !== color || $[193] !== disabled || $[194] !== error || $[195] !== handleBlur || $[196] !== handleChange || $[197] !== handleKeyDown || $[198] !== multiline || $[199] !== name || $[200] !== placeholder || $[201] !== props || $[202] !== required || $[203] !== select || $[204] !== size || $[205] !== slotProps || $[206] !== style || $[207] !== t38 || $[208] !== t39 || $[209] !== t41 || $[210] !== t42 || $[211] !== t43 || $[212] !== t44 || $[213] !== value_0 || $[214] !== variant) {
    t45 = /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
      variant: variant,
      size: size,
      color: color,
      focused: t38,
      name: name,
      label: t39,
      placeholder: placeholder,
      className: t41,
      inputRef: t42,
      value: value_0,
      required: required,
      fullWidth: t43,
      error: error,
      helperText: t44,
      slotProps: slotProps,
      disabled: disabled,
      style: style,
      select: select,
      multiline: multiline,
      onChange: handleChange,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown
    }));
    $[192] = color;
    $[193] = disabled;
    $[194] = error;
    $[195] = handleBlur;
    $[196] = handleChange;
    $[197] = handleKeyDown;
    $[198] = multiline;
    $[199] = name;
    $[200] = placeholder;
    $[201] = props;
    $[202] = required;
    $[203] = select;
    $[204] = size;
    $[205] = slotProps;
    $[206] = style;
    $[207] = t38;
    $[208] = t39;
    $[209] = t41;
    $[210] = t42;
    $[211] = t43;
    $[212] = t44;
    $[213] = value_0;
    $[214] = variant;
    $[215] = t45;
  } else {
    t45 = $[215];
  }
  return t45;
}
function _temp$w() {
  return "default";
}insertStyle(".PFormHidden{display:none !important}");var _excluded$x = ["className"];
var PFormHidden = function PFormHidden(t0) {
  var $ = c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$x);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = classNames(className, "PFormHidden");
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      className: t1,
      type: "hidden",
      variant: "standard"
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
};var _excluded$w = ["ref", "className", "clear", "value"];
var PFormText = function PFormText(t0) {
  var $ = c(14);
  var className;
  var props;
  var ref;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    t1 = _t.clear;
    t2 = _t.value;
    props = _objectWithoutProperties(_t, _excluded$w);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = ref;
    $[4] = t1;
    $[5] = t2;
  } else {
    className = $[1];
    props = $[2];
    ref = $[3];
    t1 = $[4];
    t2 = $[5];
  }
  var clear = t1 === undefined ? true : t1;
  var value = t2 === undefined ? "" : t2;
  var t3;
  if ($[6] !== className) {
    t3 = classNames(className, "PFormText");
    $[6] = className;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== clear || $[9] !== props || $[10] !== ref || $[11] !== t3 || $[12] !== value) {
    t4 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      ref: ref,
      className: t3,
      clear: clear,
      value: value,
      disableReturnKey: true
    }, props));
    $[8] = clear;
    $[9] = props;
    $[10] = ref;
    $[11] = t3;
    $[12] = value;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
};var _templateObject$d;
var _excluded$v = ["ref", "allowSpace", "onKeyDown", "onBlur", "onAppendTag"];
var PFormTagText = function PFormTagText(t0) {
  var $ = c(28);
  var allowSpace;
  var onAppendTag;
  var onBlur;
  var onKeyDown;
  var props;
  var ref;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    allowSpace = _t.allowSpace;
    onKeyDown = _t.onKeyDown;
    onBlur = _t.onBlur;
    onAppendTag = _t.onAppendTag;
    props = _objectWithoutProperties(_t, _excluded$v);
    $[0] = t0;
    $[1] = allowSpace;
    $[2] = onAppendTag;
    $[3] = onBlur;
    $[4] = onKeyDown;
    $[5] = props;
    $[6] = ref;
  } else {
    allowSpace = $[1];
    onAppendTag = $[2];
    onBlur = $[3];
    onKeyDown = $[4];
    props = $[5];
    ref = $[6];
  }
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var t1;
  if ($[7] !== onAppendTag || $[8] !== value) {
    t1 = function t1() {
      onAppendTag(value);
      setValue(" ");
      setTimeout(function () {
        setValue("");
      });
    };
    $[7] = onAppendTag;
    $[8] = value;
    $[9] = t1;
  } else {
    t1 = $[9];
  }
  var appendTag = t1;
  var t2;
  if ($[10] !== allowSpace || $[11] !== appendTag || $[12] !== onKeyDown || $[13] !== value) {
    t2 = function t2(e) {
      var appendKeys = allowSpace ? [",", "Enter"] : [" ", ",", "Enter"];
      if (appendKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        if (notEmpty(value)) {
          appendTag();
        }
      } else {
        if (onKeyDown) {
          onKeyDown(e);
        }
      }
    };
    $[10] = allowSpace;
    $[11] = appendTag;
    $[12] = onKeyDown;
    $[13] = value;
    $[14] = t2;
  } else {
    t2 = $[14];
  }
  var handleKeyDown = t2;
  var t3;
  if ($[15] !== allowSpace) {
    t3 = function t3(value_0) {
      setValue(allowSpace ? value_0.replace(/,/g, "") : value_0.replace(/ /g, "").replace(/,/g, ""));
    };
    $[15] = allowSpace;
    $[16] = t3;
  } else {
    t3 = $[16];
  }
  var handleChange = t3;
  var t4;
  if ($[17] !== appendTag || $[18] !== onBlur || $[19] !== value) {
    t4 = function t4(e_0) {
      if (notEmpty(value)) {
        appendTag();
      }
      if (onBlur) {
        onBlur(e_0);
      }
    };
    $[17] = appendTag;
    $[18] = onBlur;
    $[19] = value;
    $[20] = t4;
  } else {
    t4 = $[20];
  }
  var handleBlur = t4;
  var t5;
  if ($[21] !== handleBlur || $[22] !== handleChange || $[23] !== handleKeyDown || $[24] !== props || $[25] !== ref || $[26] !== value) {
    t5 = /*#__PURE__*/React.createElement(StyledFormText, _extends({
      ref: ref
    }, props, {
      clear: false,
      value: value,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      onBlur: handleBlur
    }));
    $[21] = handleBlur;
    $[22] = handleChange;
    $[23] = handleKeyDown;
    $[24] = props;
    $[25] = ref;
    $[26] = value;
    $[27] = t5;
  } else {
    t5 = $[27];
  }
  return t5;
};

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

var StyledFormText = styled(PFormText)(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n  .PFormTag-Input {\n    flex: 1;\n    min-width: 50px;\n    padding-left: 5px;\n  }\n  &.variant-outlined {\n    .MuiInputBase-root {\n      .PFormTag-Input {\n        padding-top: 7px;\n        padding-bottom: 8px;\n      }\n\n      &.MuiInputBase-sizeSmall {\n        .PFormTag-Input {\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n      }\n    }\n  }\n"])));var _excluded$u = ["ref", "variant", "size", "className", "name", "value", "exceptValue", "clear", "required", "readOnly", "maxLength", "disabled", "fullWidth", "error", "helperText", "formValueSeparator", "formValueSort", "limitTags", "getLimitTagsText", "allowSpace", "slotProps", "onAppendTag", "onRemoveTag", "onTagClick", "onValidate", "onChange", "onValue"],
  _excluded2$4 = ["variant", "size", "fullWidth", "disabled", "onAddValueItem", "onValueChange", "onValueChangeByUser", "onRequestSearchSubmit"];
var _emptyValue = [];
var PFormTag = function PFormTag(t0) {
  var $ = c(156);
  var allowSpace;
  var className;
  var exceptValue;
  var formValueSort;
  var getLimitTagsText;
  var helperText;
  var initDisabled;
  var initError;
  var initFullWidth;
  var initSize;
  var initVariant;
  var limitTags;
  var maxLength;
  var name;
  var onAppendTag;
  var onChange;
  var onRemoveTag;
  var onTagClick;
  var onValidate;
  var onValue;
  var props;
  var readOnly;
  var ref;
  var required;
  var slotProps;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    initVariant = _t.variant;
    initSize = _t.size;
    className = _t.className;
    name = _t.name;
    t1 = _t.value;
    exceptValue = _t.exceptValue;
    t2 = _t.clear;
    required = _t.required;
    readOnly = _t.readOnly;
    maxLength = _t.maxLength;
    initDisabled = _t.disabled;
    initFullWidth = _t.fullWidth;
    initError = _t.error;
    helperText = _t.helperText;
    t3 = _t.formValueSeparator;
    formValueSort = _t.formValueSort;
    limitTags = _t.limitTags;
    getLimitTagsText = _t.getLimitTagsText;
    allowSpace = _t.allowSpace;
    slotProps = _t.slotProps;
    onAppendTag = _t.onAppendTag;
    onRemoveTag = _t.onRemoveTag;
    onTagClick = _t.onTagClick;
    onValidate = _t.onValidate;
    onChange = _t.onChange;
    onValue = _t.onValue;
    props = _objectWithoutProperties(_t, _excluded$u);
    $[0] = t0;
    $[1] = allowSpace;
    $[2] = className;
    $[3] = exceptValue;
    $[4] = formValueSort;
    $[5] = getLimitTagsText;
    $[6] = helperText;
    $[7] = initDisabled;
    $[8] = initError;
    $[9] = initFullWidth;
    $[10] = initSize;
    $[11] = initVariant;
    $[12] = limitTags;
    $[13] = maxLength;
    $[14] = name;
    $[15] = onAppendTag;
    $[16] = onChange;
    $[17] = onRemoveTag;
    $[18] = onTagClick;
    $[19] = onValidate;
    $[20] = onValue;
    $[21] = props;
    $[22] = readOnly;
    $[23] = ref;
    $[24] = required;
    $[25] = slotProps;
    $[26] = t1;
    $[27] = t2;
    $[28] = t3;
  } else {
    allowSpace = $[1];
    className = $[2];
    exceptValue = $[3];
    formValueSort = $[4];
    getLimitTagsText = $[5];
    helperText = $[6];
    initDisabled = $[7];
    initError = $[8];
    initFullWidth = $[9];
    initSize = $[10];
    initVariant = $[11];
    limitTags = $[12];
    maxLength = $[13];
    name = $[14];
    onAppendTag = $[15];
    onChange = $[16];
    onRemoveTag = $[17];
    onTagClick = $[18];
    onValidate = $[19];
    onValue = $[20];
    props = $[21];
    readOnly = $[22];
    ref = $[23];
    required = $[24];
    slotProps = $[25];
    t1 = $[26];
    t2 = $[27];
    t3 = $[28];
  }
  var initValue = t1 === undefined ? _emptyValue : t1;
  var clear = t2 === undefined ? true : t2;
  var formValueSeparator = t3 === undefined ? "," : t3;
  var t4 = useFormState();
  var formDisabled;
  var formFullWidth;
  var formSize;
  var formVariant;
  var onAddValueItem;
  var onRequestSearchSubmit;
  var onValueChange;
  var onValueChangeByUser;
  var otherFormState;
  if ($[29] !== t4) {
    var _t2 = t4;
    formVariant = _t2.variant;
    formSize = _t2.size;
    formFullWidth = _t2.fullWidth;
    formDisabled = _t2.disabled;
    onAddValueItem = _t2.onAddValueItem;
    onValueChange = _t2.onValueChange;
    onValueChangeByUser = _t2.onValueChangeByUser;
    onRequestSearchSubmit = _t2.onRequestSearchSubmit;
    otherFormState = _objectWithoutProperties(_t2, _excluded2$4);
    $[29] = t4;
    $[30] = formDisabled;
    $[31] = formFullWidth;
    $[32] = formSize;
    $[33] = formVariant;
    $[34] = onAddValueItem;
    $[35] = onRequestSearchSubmit;
    $[36] = onValueChange;
    $[37] = onValueChangeByUser;
    $[38] = otherFormState;
  } else {
    formDisabled = $[30];
    formFullWidth = $[31];
    formSize = $[32];
    formVariant = $[33];
    onAddValueItem = $[34];
    onRequestSearchSubmit = $[35];
    onValueChange = $[36];
    onValueChangeByUser = $[37];
    otherFormState = $[38];
  }
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initValueRef = useAutoUpdateRef(initValue);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var t5;
  var t6;
  if ($[39] !== initError) {
    t5 = function t5() {
      return setError(initError);
    };
    t6 = [initError];
    $[39] = initError;
    $[40] = t5;
    $[41] = t6;
  } else {
    t5 = $[40];
    t6 = $[41];
  }
  useFirstSkipChanged(t5, t6);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  var t7;
  var t8;
  if ($[42] !== finalInitDisabled) {
    t7 = function t7() {
      return setDisabled(finalInitDisabled);
    };
    t8 = [finalInitDisabled];
    $[42] = finalInitDisabled;
    $[43] = t7;
    $[44] = t8;
  } else {
    t7 = $[43];
    t8 = $[44];
  }
  useFirstSkipChanged(t7, t8);
  var t9;
  if ($[45] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[45] = t9;
  } else {
    t9 = $[45];
  }
  var setErrorErrorHelperText = t9;
  var t10;
  if ($[46] !== onValidateRef || $[47] !== required) {
    t10 = function t10(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[46] = onValidateRef;
    $[47] = required;
    $[48] = t10;
  } else {
    t10 = $[48];
  }
  var _validate = t10;
  var t11;
  if ($[49] !== onValue) {
    t11 = function t11(value_0) {
      var finalValue = value_0 === undefined ? [] : value_0;
      if (finalValue instanceof Set) {
        finalValue = Array.from(finalValue);
      } else {
        var finalValueSet = new Set();
        (finalValue || []).forEach(function (finalValue_0) {
          return finalValueSet.add(finalValue_0);
        });
        finalValue = Array.from(finalValueSet);
      }
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[49] = onValue;
    $[50] = t11;
  } else {
    t11 = $[50];
  }
  var getFinalValue = t11;
  var t12;
  if ($[51] !== getFinalValue || $[52] !== initValue) {
    t12 = getFinalValue(initValue);
    $[51] = getFinalValue;
    $[52] = initValue;
    $[53] = t12;
  } else {
    t12 = $[53];
  }
  var _useState7 = useState(t12),
    _useState8 = _slicedToArray(_useState7, 2),
    value_1 = _useState8[0],
    _setValue = _useState8[1];
  var t13;
  if ($[54] !== getFinalValue || $[55] !== initValue) {
    t13 = function t13() {
      return _setValue(getFinalValue(initValue));
    };
    $[54] = getFinalValue;
    $[55] = initValue;
    $[56] = t13;
  } else {
    t13 = $[56];
  }
  var t14;
  if ($[57] !== initValue) {
    t14 = [initValue];
    $[57] = initValue;
    $[58] = t14;
  } else {
    t14 = $[58];
  }
  useFirstSkipChanged(t13, t14);
  var valueRef = useAutoUpdateRef(value_1);
  var t15;
  if ($[59] !== valueRef) {
    t15 = function t15(newValue) {
      _setValue(newValue);
      valueRef.current = newValue;
    };
    $[59] = valueRef;
    $[60] = t15;
  } else {
    t15 = $[60];
  }
  var setValue = t15;
  var t16;
  if ($[61] !== value_1) {
    t16 = new Set(value_1);
    $[61] = value_1;
    $[62] = t16;
  } else {
    t16 = $[62];
  }
  var _useState9 = useState(t16),
    _useState0 = _slicedToArray(_useState9, 1),
    valueSet = _useState0[0];
  var t17;
  if ($[63] !== error || $[64] !== getFinalValue || $[65] !== name || $[66] !== onChangeRef || $[67] !== onValueChange || $[68] !== setValue || $[69] !== _validate) {
    t17 = function t17(newValue_0) {
      var _onChangeRef$current;
      var finalValue_1 = getFinalValue(newValue_0);
      setValue(finalValue_1);
      if (error) {
        _validate(finalValue_1);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_1);
      onValueChange(name, finalValue_1);
      return finalValue_1;
    };
    $[63] = error;
    $[64] = getFinalValue;
    $[65] = name;
    $[66] = onChangeRef;
    $[67] = onValueChange;
    $[68] = setValue;
    $[69] = _validate;
    $[70] = t17;
  } else {
    t17 = $[70];
  }
  var updateValue = t17;
  var t18;
  if ($[71] !== initValueRef || $[72] !== name || $[73] !== onChangeRef || $[74] !== onValueChange || $[75] !== valueRef) {
    t18 = function t18() {
      if (!equal(valueRef.current, initValueRef.current)) {
        var _onChangeRef$current2;
        (_onChangeRef$current2 = onChangeRef.current) === null || _onChangeRef$current2 === void 0 || _onChangeRef$current2.call(onChangeRef, valueRef.current);
        onValueChange(name, valueRef.current);
      }
    };
    $[71] = initValueRef;
    $[72] = name;
    $[73] = onChangeRef;
    $[74] = onValueChange;
    $[75] = valueRef;
    $[76] = t18;
  } else {
    t18 = $[76];
  }
  var t19;
  if ($[77] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = [];
    $[77] = t19;
  } else {
    t19 = $[77];
  }
  useEventEffect(t18, t19);
  var t20;
  if ($[78] !== formValueSeparator || $[79] !== formValueSort) {
    t20 = function t20() {
      return {
        isFormValueSort: function isFormValueSort() {
          return !!formValueSort;
        },
        getFormValueSeparator: function getFormValueSeparator() {
          return formValueSeparator;
        }
      };
    };
    $[78] = formValueSeparator;
    $[79] = formValueSort;
    $[80] = t20;
  } else {
    t20 = $[80];
  }
  var getExtraCommands = t20;
  var t21;
  if ($[81] !== getExtraCommands || $[82] !== getFinalValue || $[83] !== initValueRef || $[84] !== updateValue || $[85] !== _validate || $[86] !== valueRef) {
    t21 = function t21(baseCommands) {
      return _objectSpread2(_objectSpread2({}, baseCommands), {}, {
        getReset: function getReset() {
          return getFinalValue(initValueRef.current);
        },
        reset: function reset() {
          return updateValue(initValueRef.current);
        },
        getValue: function getValue() {
          return valueRef.current;
        },
        setValue: function setValue(newValue_1) {
          updateValue(newValue_1);
        },
        validate: function validate() {
          return _validate(valueRef.current);
        }
      }, getExtraCommands());
    };
    $[81] = getExtraCommands;
    $[82] = getFinalValue;
    $[83] = initValueRef;
    $[84] = updateValue;
    $[85] = _validate;
    $[86] = valueRef;
    $[87] = t21;
  } else {
    t21 = $[87];
  }
  var getCommands = t21;
  var t22;
  if ($[88] !== name || $[89] !== onAppendTag || $[90] !== onRequestSearchSubmit || $[91] !== onValueChangeByUser || $[92] !== updateValue || $[93] !== valueSet) {
    t22 = function t22(tag) {
      var finalTag = tag.trim();
      if (notEmpty(finalTag) && !valueSet.has(finalTag)) {
        if (onAppendTag && !onAppendTag(finalTag)) {
          return;
        }
        valueSet.add(finalTag);
        var finalValue_2 = updateValue(valueSet);
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_2);
          onRequestSearchSubmit(name, finalValue_2);
        });
      }
    };
    $[88] = name;
    $[89] = onAppendTag;
    $[90] = onRequestSearchSubmit;
    $[91] = onValueChangeByUser;
    $[92] = updateValue;
    $[93] = valueSet;
    $[94] = t22;
  } else {
    t22 = $[94];
  }
  var appendTag = t22;
  var t23;
  if ($[95] !== name || $[96] !== onRemoveTag || $[97] !== onRequestSearchSubmit || $[98] !== onValueChangeByUser || $[99] !== updateValue || $[100] !== valueSet) {
    t23 = function t23(tag_0) {
      if (valueSet.has(tag_0)) {
        if (onRemoveTag && !onRemoveTag(tag_0)) {
          return;
        }
        valueSet["delete"](tag_0);
        var finalValue_3 = updateValue(valueSet);
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_3);
          onRequestSearchSubmit(name, finalValue_3);
        });
      }
    };
    $[95] = name;
    $[96] = onRemoveTag;
    $[97] = onRequestSearchSubmit;
    $[98] = onValueChangeByUser;
    $[99] = updateValue;
    $[100] = valueSet;
    $[101] = t23;
  } else {
    t23 = $[101];
  }
  var removeTag = t23;
  var t24;
  if ($[102] !== getCommands || $[103] !== onAddValueItem) {
    t24 = function t24(id, commands) {
      onAddValueItem(id, getCommands(commands));
    };
    $[102] = getCommands;
    $[103] = onAddValueItem;
    $[104] = t24;
  } else {
    t24 = $[104];
  }
  var handleAddValueItem = t24;
  var t25;
  if ($[105] !== getCommands || $[106] !== ref) {
    t25 = function t25(commands_0) {
      if (ref) {
        var finalCommands = getCommands(commands_0);
        if (typeof ref === "function") {
          ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[105] = getCommands;
    $[106] = ref;
    $[107] = t25;
  } else {
    t25 = $[107];
  }
  var handleRef = t25;
  var t26;
  if ($[108] !== disabled || $[109] !== onTagClick || $[110] !== readOnly || $[111] !== removeTag || $[112] !== size || $[113] !== variant) {
    t26 = function t26(tags) {
      return tags.map(function (tag_1) {
        return /*#__PURE__*/React.createElement(Chip, {
          className: "MuiAutocomplete-tag",
          key: tag_1,
          label: tag_1,
          size: "small",
          style: variant === "outlined" && size === "small" ? {
            marginTop: 2,
            marginBottom: 0
          } : undefined,
          disabled: readOnly || disabled,
          onDelete: readOnly || disabled ? undefined : function () {
            return removeTag(tag_1);
          },
          onClick: function onClick() {
            var _onTagClick;
            return (_onTagClick = onTagClick) === null || _onTagClick === void 0 ? void 0 : _onTagClick(tag_1);
          }
        });
      });
    };
    $[108] = disabled;
    $[109] = onTagClick;
    $[110] = readOnly;
    $[111] = removeTag;
    $[112] = size;
    $[113] = variant;
    $[114] = t26;
  } else {
    t26 = $[114];
  }
  var handleRenderValue = t26;
  var t27;
  if ($[115] !== allowSpace || $[116] !== appendTag || $[117] !== className || $[118] !== clear || $[119] !== disabled || $[120] !== error || $[121] !== errorHelperText || $[122] !== exceptValue || $[123] !== fullWidth || $[124] !== handleRef || $[125] !== helperText || $[126] !== maxLength || $[127] !== name || $[128] !== props || $[129] !== readOnly || $[130] !== size || $[131] !== slotProps || $[132] !== variant) {
    t27 = function t27(params) {
      var _slotProps, _slotProps2, _slotProps3, _slotProps4, _slotProps5;
      var htmlInputProps = _objectSpread2(_objectSpread2({}, params.inputProps), {}, {
        className: classNames("PFormTag-Input", readOnly && "Mui-disabled"),
        readOnly: readOnly,
        tabIndex: readOnly ? -1 : undefined,
        maxLength: maxLength
      });
      delete htmlInputProps.onChange;
      delete htmlInputProps.value;
      var tagTextProps = _objectSpread2({
        name: name,
        clear: clear,
        size: size,
        className: classNames(className, "PFormValueItem", "PFormTag"),
        error: error,
        disabled: disabled,
        fullWidth: fullWidth,
        exceptValue: exceptValue,
        slotProps: _objectSpread2(_objectSpread2({}, slotProps), {}, {
          inputLabel: _objectSpread2(_objectSpread2({}, (_slotProps = slotProps) === null || _slotProps === void 0 ? void 0 : _slotProps.inputLabel), {}, {
            htmlFor: params.InputLabelProps.htmlFor,
            id: params.InputLabelProps.id
          }),
          input: _objectSpread2(_objectSpread2({}, (_slotProps2 = slotProps) === null || _slotProps2 === void 0 ? void 0 : _slotProps2.input), {}, {
            style: _objectSpread2(_objectSpread2({}, (_slotProps3 = slotProps) === null || _slotProps3 === void 0 || (_slotProps3 = _slotProps3.input) === null || _slotProps3 === void 0 ? void 0 : _slotProps3.style), variant === "outlined" && size === "small" ? {
              paddingTop: 7,
              paddingBottom: 6,
              marginTop: -2
            } : undefined),
            className: params.InputProps.className,
            ref: params.InputProps.ref,
            startAdornment: params.InputProps.startAdornment
          }),
          htmlInput: _objectSpread2(_objectSpread2(_objectSpread2({}, (_slotProps4 = slotProps) === null || _slotProps4 === void 0 ? void 0 : _slotProps4.htmlInput), htmlInputProps), {}, {
            style: _objectSpread2(_objectSpread2(_objectSpread2({}, (_slotProps5 = slotProps) === null || _slotProps5 === void 0 || (_slotProps5 = _slotProps5.htmlInput) === null || _slotProps5 === void 0 ? void 0 : _slotProps5.style), htmlInputProps.style), variant === "outlined" && size === "small" ? {
              marginTop: 4,
              paddingBottom: 2
            } : undefined)
          })
        }),
        helperText: error ? errorHelperText : helperText,
        allowSpace: allowSpace,
        onAppendTag: appendTag
      }, props);
      return /*#__PURE__*/React.createElement(PFormTagText, _extends({
        ref: handleRef
      }, tagTextProps));
    };
    $[115] = allowSpace;
    $[116] = appendTag;
    $[117] = className;
    $[118] = clear;
    $[119] = disabled;
    $[120] = error;
    $[121] = errorHelperText;
    $[122] = exceptValue;
    $[123] = fullWidth;
    $[124] = handleRef;
    $[125] = helperText;
    $[126] = maxLength;
    $[127] = name;
    $[128] = props;
    $[129] = readOnly;
    $[130] = size;
    $[131] = slotProps;
    $[132] = variant;
    $[133] = t27;
  } else {
    t27 = $[133];
  }
  var handleRenderInput = t27;
  var t28;
  if ($[134] !== formFullWidth || $[135] !== formSize || $[136] !== formVariant || $[137] !== handleAddValueItem || $[138] !== otherFormState) {
    t28 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: formVariant,
      size: formSize,
      fullWidth: formFullWidth,
      onAddValueItem: handleAddValueItem,
      onValueChange: _temp$v,
      onValueChangeByUser: _temp2$5,
      onRequestSearchSubmit: _temp3$3
    });
    $[134] = formFullWidth;
    $[135] = formSize;
    $[136] = formVariant;
    $[137] = handleAddValueItem;
    $[138] = otherFormState;
    $[139] = t28;
  } else {
    t28 = $[139];
  }
  var t29;
  if ($[140] === Symbol["for"]("react.memo_cache_sentinel")) {
    t29 = [];
    $[140] = t29;
  } else {
    t29 = $[140];
  }
  var t30 = fullWidth ? "block" : "inline-block";
  var t31 = fullWidth ? "100%" : undefined;
  var t32;
  if ($[141] !== t30 || $[142] !== t31) {
    t32 = {
      display: t30,
      width: t31
    };
    $[141] = t30;
    $[142] = t31;
    $[143] = t32;
  } else {
    t32 = $[143];
  }
  var t33;
  if ($[144] !== disabled || $[145] !== getLimitTagsText || $[146] !== handleRenderInput || $[147] !== handleRenderValue || $[148] !== limitTags || $[149] !== readOnly || $[150] !== t32 || $[151] !== value_1) {
    t33 = /*#__PURE__*/React.createElement(Autocomplete, {
      options: t29,
      multiple: true,
      freeSolo: true,
      value: value_1,
      readOnly: readOnly,
      disableClearable: true,
      limitTags: limitTags,
      getLimitTagsText: getLimitTagsText,
      disabled: disabled,
      renderValue: handleRenderValue,
      style: t32,
      renderInput: handleRenderInput
    });
    $[144] = disabled;
    $[145] = getLimitTagsText;
    $[146] = handleRenderInput;
    $[147] = handleRenderValue;
    $[148] = limitTags;
    $[149] = readOnly;
    $[150] = t32;
    $[151] = value_1;
    $[152] = t33;
  } else {
    t33 = $[152];
  }
  var t34;
  if ($[153] !== t28 || $[154] !== t33) {
    t34 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t28
    }, t33);
    $[153] = t28;
    $[154] = t33;
    $[155] = t34;
  } else {
    t34 = $[155];
  }
  return t34;
};
function _temp$v() {}
function _temp2$5() {}
function _temp3$3() {}var _excluded$t = ["className", "validPattern", "onValue"];
var PFormEmail = function PFormEmail(t0) {
  var $ = c(16);
  var className;
  var onValue;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.validPattern;
    onValue = _t.onValue;
    props = _objectWithoutProperties(_t, _excluded$t);
    $[0] = t0;
    $[1] = className;
    $[2] = onValue;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    onValue = $[2];
    props = $[3];
    t1 = $[4];
  }
  var t2;
  if ($[5] !== t1) {
    t2 = t1 === undefined ? /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g : t1;
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var validPattern = t2;
  var onValueRef = useAutoUpdateRef(onValue);
  var t3;
  if ($[7] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = value.replace(/ /gi, "");
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    };
    $[7] = onValueRef;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var handleValue = t3;
  var t4;
  if ($[9] !== className) {
    t4 = classNames(className, "PFormEmail");
    $[9] = className;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  var t5;
  if ($[11] !== handleValue || $[12] !== props || $[13] !== t4 || $[14] !== validPattern) {
    t5 = /*#__PURE__*/React.createElement(PFormText, _extends({
      className: t4,
      type: "email",
      validPattern: validPattern,
      onValue: handleValue
    }, props));
    $[11] = handleValue;
    $[12] = props;
    $[13] = t4;
    $[14] = validPattern;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  return t5;
};insertStyle(".PFormPassword .eye-icon-button-wrap{visibility:hidden}.PFormPassword.variant-filled .eye-icon-button-wrap{margin-top:9px;margin-bottom:-9px}.PFormPassword:hover .eye-icon-button-wrap.show,.PFormPassword .MuiInputBase-root.Mui-focused .eye-icon-button-wrap.show{visibility:visible}");var _excluded$s = ["className", "slotProps", "clear", "eye", "onChange"];
var _templateObject$c;
var StyledEyeInputAdornment = styled(InputAdornment)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n  visibility: hidden;\n"])));
var PFormPassword = function PFormPassword(t0) {
  var _initSlotProps$input;
  var $ = c(24);
  var className = t0.className,
    initSlotProps = t0.slotProps,
    t1 = t0.clear,
    t2 = t0.eye,
    onChange = t0.onChange,
    props = _objectWithoutProperties(t0, _excluded$s);
  var clear = t1 === undefined ? false : t1;
  var eye = t2 === undefined ? true : t2;
  var onChangeRef = useAutoUpdateRef(onChange);
  var _useState = useState(notEmpty(props.value)),
    _useState2 = _slicedToArray(_useState, 2),
    showEye = _useState2[0],
    setShowEye = _useState2[1];
  var _useState3 = useState("password"),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var t3;
  if ($[0] !== eye || $[1] !== showEye || $[2] !== type) {
    t3 = eye && /*#__PURE__*/React.createElement(StyledEyeInputAdornment, {
      position: "end",
      className: classNames("eye-icon-button-wrap", showEye && "show")
    }, /*#__PURE__*/React.createElement(IconButton, {
      size: "small",
      tabIndex: -1,
      onClick: function onClick() {
        setType(_temp$u);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      fontSize: "inherit"
    }, type === "password" ? "visibility" : "visibility_off")));
    $[0] = eye;
    $[1] = showEye;
    $[2] = type;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  var eyeAdornment = t3;
  var t4 = initSlotProps === null || initSlotProps === void 0 ? void 0 : initSlotProps.input;
  var t5 = initSlotProps === null || initSlotProps === void 0 || (_initSlotProps$input = initSlotProps.input) === null || _initSlotProps$input === void 0 ? void 0 : _initSlotProps$input.endAdornment;
  var t6;
  if ($[4] !== eyeAdornment || $[5] !== t5) {
    t6 = /*#__PURE__*/React.createElement(React.Fragment, null, eyeAdornment, t5);
    $[4] = eyeAdornment;
    $[5] = t5;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  var t7;
  if ($[7] !== t4 || $[8] !== t6) {
    t7 = _objectSpread2(_objectSpread2({}, t4), {}, {
      endAdornment: t6
    });
    $[7] = t4;
    $[8] = t6;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  var t8;
  if ($[10] !== initSlotProps || $[11] !== t7) {
    t8 = _objectSpread2(_objectSpread2({}, initSlotProps), {}, {
      input: t7
    });
    $[10] = initSlotProps;
    $[11] = t7;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  var slotProps = t8;
  var t9;
  if ($[13] !== onChangeRef) {
    t9 = function t9(value) {
      var _onChangeRef$current;
      setShowEye(notEmpty(value));
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, value);
    };
    $[13] = onChangeRef;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  var handleChange = t9;
  var t10;
  if ($[15] !== className) {
    t10 = classNames(className, "PFormPassword");
    $[15] = className;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  var t11;
  if ($[17] !== clear || $[18] !== handleChange || $[19] !== props || $[20] !== slotProps || $[21] !== t10 || $[22] !== type) {
    t11 = /*#__PURE__*/React.createElement(PFormText, _extends({
      className: t10,
      onChange: handleChange,
      type: type,
      slotProps: slotProps,
      clear: clear
    }, props));
    $[17] = clear;
    $[18] = handleChange;
    $[19] = props;
    $[20] = slotProps;
    $[21] = t10;
    $[22] = type;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  return t11;
};
function _temp$u(prev) {
  return prev === "password" ? "text" : "password";
}var _excluded$r = ["ref", "className", "onValue", "validPattern"];
var PFormTel = function PFormTel(t0) {
  var $ = c(18);
  var className;
  var onValue;
  var props;
  var ref;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    onValue = _t.onValue;
    t1 = _t.validPattern;
    props = _objectWithoutProperties(_t, _excluded$r);
    $[0] = t0;
    $[1] = className;
    $[2] = onValue;
    $[3] = props;
    $[4] = ref;
    $[5] = t1;
  } else {
    className = $[1];
    onValue = $[2];
    props = $[3];
    ref = $[4];
    t1 = $[5];
  }
  var t2;
  if ($[6] !== t1) {
    t2 = t1 === undefined ? /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/ : t1;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var validPattern = t2;
  var onValueRef = useAutoUpdateRef(onValue);
  var t3;
  if ($[8] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = formatTelNo(value.replace(/[^0-9]/gi, ""));
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    };
    $[8] = onValueRef;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  var handleValue = t3;
  var t4;
  if ($[10] !== className) {
    t4 = classNames(className, "PFormTel");
    $[10] = className;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var t5;
  if ($[12] !== handleValue || $[13] !== props || $[14] !== ref || $[15] !== t4 || $[16] !== validPattern) {
    t5 = /*#__PURE__*/React.createElement(PFormText, _extends({
      ref: ref,
      className: t4,
      onValue: handleValue,
      maxLength: 13,
      validPattern: validPattern
    }, props));
    $[12] = handleValue;
    $[13] = props;
    $[14] = ref;
    $[15] = t4;
    $[16] = validPattern;
    $[17] = t5;
  } else {
    t5 = $[17];
  }
  return t5;
};var _excluded$q = ["className", "validPattern"];
var PFormMobile = function PFormMobile(t0) {
  var $ = c(12);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.validPattern;
    props = _objectWithoutProperties(_t, _excluded$q);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var t2;
  if ($[4] !== t1) {
    t2 = t1 === undefined ? /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/ : t1;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var validPattern = t2;
  var t3;
  if ($[6] !== className) {
    t3 = classNames(className, "PFormMobile");
    $[6] = className;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== props || $[9] !== t3 || $[10] !== validPattern) {
    t4 = /*#__PURE__*/React.createElement(PFormTel, _extends({
      className: t3,
      validPattern: validPattern
    }, props));
    $[8] = props;
    $[9] = t3;
    $[10] = validPattern;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
};var _excluded$p = ["onChange"];
var NumberFormatCustom = function NumberFormatCustom(t0) {
  var $ = c(8);
  var onChange;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    onChange = _t.onChange;
    props = _objectWithoutProperties(_t, _excluded$p);
    $[0] = t0;
    $[1] = onChange;
    $[2] = props;
  } else {
    onChange = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== onChange) {
    t1 = function t1(values) {
      if (onChange) {
        onChange({
          target: {
            value: values.value
          }
        });
      }
    };
    $[3] = onChange;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/React.createElement(NumericFormat, _extends({}, props, {
      onValueChange: t1
    }));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
};var _excluded$o = ["ref", "className", "allowNegative", "thousandSeparator", "allowDecimal", "decimalScale", "prefix", "suffix", "readOnly", "tabIndex", "labelShrink", "clear", "slotProps", "value", "onChange", "onValue", "onValidate"];
var PFormNumber = function PFormNumber(t0) {
  var $ = c(72);
  var allowDecimal;
  var allowNegative;
  var className;
  var decimalScale;
  var initSlotProps;
  var initValue;
  var labelShrink;
  var onChange;
  var onValidate;
  var onValue;
  var prefix;
  var props;
  var readOnly;
  var ref;
  var suffix;
  var t1;
  var tabIndex;
  var thousandSeparator;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    allowNegative = _t.allowNegative;
    thousandSeparator = _t.thousandSeparator;
    allowDecimal = _t.allowDecimal;
    decimalScale = _t.decimalScale;
    prefix = _t.prefix;
    suffix = _t.suffix;
    readOnly = _t.readOnly;
    tabIndex = _t.tabIndex;
    labelShrink = _t.labelShrink;
    t1 = _t.clear;
    initSlotProps = _t.slotProps;
    initValue = _t.value;
    onChange = _t.onChange;
    onValue = _t.onValue;
    onValidate = _t.onValidate;
    props = _objectWithoutProperties(_t, _excluded$o);
    $[0] = t0;
    $[1] = allowDecimal;
    $[2] = allowNegative;
    $[3] = className;
    $[4] = decimalScale;
    $[5] = initSlotProps;
    $[6] = initValue;
    $[7] = labelShrink;
    $[8] = onChange;
    $[9] = onValidate;
    $[10] = onValue;
    $[11] = prefix;
    $[12] = props;
    $[13] = readOnly;
    $[14] = ref;
    $[15] = suffix;
    $[16] = t1;
    $[17] = tabIndex;
    $[18] = thousandSeparator;
  } else {
    allowDecimal = $[1];
    allowNegative = $[2];
    className = $[3];
    decimalScale = $[4];
    initSlotProps = $[5];
    initValue = $[6];
    labelShrink = $[7];
    onChange = $[8];
    onValidate = $[9];
    onValue = $[10];
    prefix = $[11];
    props = $[12];
    readOnly = $[13];
    ref = $[14];
    suffix = $[15];
    t1 = $[16];
    tabIndex = $[17];
    thousandSeparator = $[18];
  }
  var clear = t1 === undefined ? true : t1;
  var initValueRef = useAutoUpdateRef(initValue);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValueRef = useAutoUpdateRef(onValue);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(initValue !== undefined ? "".concat(initValue) : ""),
    _useState2 = _slicedToArray(_useState, 2),
    strValue = _useState2[0],
    _setStrValue = _useState2[1];
  var strValueRef = useAutoUpdateRef(strValue);
  var t2;
  var t3;
  if ($[19] !== initValue) {
    t2 = function t2() {
      return _setStrValue(initValue !== undefined ? "".concat(initValue) : "");
    };
    t3 = [initValue];
    $[19] = initValue;
    $[20] = t2;
    $[21] = t3;
  } else {
    t2 = $[20];
    t3 = $[21];
  }
  useFirstSkipChanged(t2, t3);
  var t4;
  if ($[22] !== strValueRef) {
    t4 = function t4(newValue) {
      _setStrValue(newValue);
      strValueRef.current = newValue;
    };
    $[22] = strValueRef;
    $[23] = t4;
  } else {
    t4 = $[23];
  }
  var setStrValue = t4;
  var newSlotProps;
  if ($[24] !== allowDecimal || $[25] !== allowNegative || $[26] !== decimalScale || $[27] !== initSlotProps || $[28] !== prefix || $[29] !== readOnly || $[30] !== suffix || $[31] !== tabIndex || $[32] !== thousandSeparator) {
    var _newSlotProps$input;
    newSlotProps = _objectSpread2({}, initSlotProps);
    var _t2 = readOnly ? "Mui-disabled" : undefined;
    var _t3 = !!allowNegative;
    var _t4 = !!readOnly;
    var _t5 = readOnly ? -1 : tabIndex;
    var inputProps;
    if ($[34] !== allowDecimal || $[35] !== decimalScale || $[36] !== prefix || $[37] !== suffix || $[38] !== _t2 || $[39] !== _t3 || $[40] !== _t4 || $[41] !== _t5 || $[42] !== thousandSeparator) {
      inputProps = {
        className: _t2,
        allowNegative: _t3,
        thousandSeparator: thousandSeparator,
        prefix: prefix,
        suffix: suffix,
        readOnly: _t4,
        tabIndex: _t5
      };
      if (allowDecimal) {
        if (decimalScale) {
          inputProps.decimalScale = decimalScale;
        }
      } else {
        inputProps.decimalScale = 0;
      }
      $[34] = allowDecimal;
      $[35] = decimalScale;
      $[36] = prefix;
      $[37] = suffix;
      $[38] = _t2;
      $[39] = _t3;
      $[40] = _t4;
      $[41] = _t5;
      $[42] = thousandSeparator;
      $[43] = inputProps;
    } else {
      inputProps = $[43];
    }
    newSlotProps.input = _objectSpread2(_objectSpread2({}, newSlotProps.input), {}, {
      inputComponent: NumberFormatCustom,
      inputProps: _objectSpread2(_objectSpread2({}, (_newSlotProps$input = newSlotProps.input) === null || _newSlotProps$input === void 0 ? void 0 : _newSlotProps$input.inputProps), inputProps)
    });
    $[24] = allowDecimal;
    $[25] = allowNegative;
    $[26] = decimalScale;
    $[27] = initSlotProps;
    $[28] = prefix;
    $[29] = readOnly;
    $[30] = suffix;
    $[31] = tabIndex;
    $[32] = thousandSeparator;
    $[33] = newSlotProps;
  } else {
    newSlotProps = $[33];
  }
  var slotProps = newSlotProps;
  var getFinalValue = _temp$t;
  var t5;
  if ($[44] !== onChangeRef || $[45] !== setStrValue || $[46] !== strValueRef) {
    t5 = function t5(value_0) {
      if (Number(value_0) > Number.MAX_SAFE_INTEGER) {
        var _onChangeRef$current;
        var newValue_0 = Number.MAX_SAFE_INTEGER;
        var newStrValue = "".concat(newValue_0);
        if (strValueRef.current === newStrValue) {
          setStrValue("".concat(newValue_0, " "));
        } else {
          setStrValue("".concat(newValue_0));
        }
        (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, newValue_0);
      } else {
        if (Number(value_0) < Number.MIN_SAFE_INTEGER) {
          var _onChangeRef$current2;
          var newValue_1 = Number.MIN_SAFE_INTEGER;
          var newStrValue_0 = "".concat(newValue_1);
          if (strValueRef.current === newStrValue_0) {
            setStrValue("".concat(newValue_1, " "));
          } else {
            setStrValue("".concat(newValue_1));
          }
          (_onChangeRef$current2 = onChangeRef.current) === null || _onChangeRef$current2 === void 0 || _onChangeRef$current2.call(onChangeRef, newValue_1);
        } else {
          var _onChangeRef$current3;
          var newValue_2 = empty(value_0) || value_0 === "-" || value_0 === "." ? undefined : Number(value_0);
          (_onChangeRef$current3 = onChangeRef.current) === null || _onChangeRef$current3 === void 0 || _onChangeRef$current3.call(onChangeRef, newValue_2);
          setStrValue(value_0);
        }
      }
    };
    $[44] = onChangeRef;
    $[45] = setStrValue;
    $[46] = strValueRef;
    $[47] = t5;
  } else {
    t5 = $[47];
  }
  var handleChange = t5;
  var t6;
  if ($[48] !== onValueRef) {
    t6 = function t6(value_1) {
      var finalValue = empty(value_1) || value_1 === "-" || value_1 === "." ? undefined : Number(value_1);
      if (onValueRef.current) {
        finalValue = onValueRef.current(finalValue);
      }
      return finalValue !== undefined ? finalValue.toString() : "";
    };
    $[48] = onValueRef;
    $[49] = t6;
  } else {
    t6 = $[49];
  }
  var handleValue = t6;
  var t7;
  if ($[50] !== onValidateRef) {
    t7 = function t7(value_2) {
      if (onValidateRef.current) {
        var finalValue_0 = empty(value_2) || value_2 === "-" || value_2 === "." ? undefined : Number(value_2);
        return onValidateRef.current(finalValue_0);
      } else {
        return true;
      }
    };
    $[50] = onValidateRef;
    $[51] = t7;
  } else {
    t7 = $[51];
  }
  var handleValidate = t7;
  var t8;
  if ($[52] !== initValueRef || $[53] !== onChangeRef || $[54] !== ref || $[55] !== setStrValue || $[56] !== strValueRef) {
    t8 = function t8(commands) {
      if (ref) {
        var finalCommands = commands ? _objectSpread2(_objectSpread2({}, commands), {}, {
          getReset: function getReset() {
            return initValueRef.current;
          },
          getValue: function getValue() {
            return getFinalValue(strValueRef.current);
          },
          setValue: function setValue(value_3) {
            var _onChangeRef$current4;
            var newStrValue_1 = value_3 !== undefined ? "".concat(value_3) : "";
            if (strValueRef.current === newStrValue_1) {
              setStrValue("".concat(newStrValue_1, " "));
            } else {
              setStrValue(newStrValue_1);
            }
            (_onChangeRef$current4 = onChangeRef.current) === null || _onChangeRef$current4 === void 0 || _onChangeRef$current4.call(onChangeRef, value_3);
          }
        }) : null;
        if (typeof ref === "function") {
          return ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[52] = initValueRef;
    $[53] = onChangeRef;
    $[54] = ref;
    $[55] = setStrValue;
    $[56] = strValueRef;
    $[57] = t8;
  } else {
    t8 = $[57];
  }
  var handleRef = t8;
  var t9;
  if ($[58] !== className) {
    t9 = classNames(className, "PFormNumber");
    $[58] = className;
    $[59] = t9;
  } else {
    t9 = $[59];
  }
  var t10 = strValue === "" || strValue === undefined ? labelShrink : true;
  var t11;
  if ($[60] !== clear || $[61] !== handleChange || $[62] !== handleRef || $[63] !== handleValidate || $[64] !== handleValue || $[65] !== props || $[66] !== readOnly || $[67] !== slotProps || $[68] !== strValue || $[69] !== t10 || $[70] !== t9) {
    t11 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      ref: handleRef,
      className: t9,
      disableReturnKey: true,
      labelShrink: t10,
      slotProps: slotProps,
      readOnly: readOnly,
      clear: clear,
      value: strValue,
      onChange: handleChange,
      onValue: handleValue,
      onValidate: handleValidate
    }, props));
    $[60] = clear;
    $[61] = handleChange;
    $[62] = handleRef;
    $[63] = handleValidate;
    $[64] = handleValue;
    $[65] = props;
    $[66] = readOnly;
    $[67] = slotProps;
    $[68] = strValue;
    $[69] = t10;
    $[70] = t9;
    $[71] = t11;
  } else {
    t11 = $[71];
  }
  return t11;
};
function _temp$t(value) {
  return empty(value) || value === "-" || value === "." ? undefined : Number(value);
}insertStyle(".PFormSearch input[type=search]::-webkit-search-decoration,.PFormSearch input[type=search]::-webkit-search-cancel-button,.PFormSearch input[type=search]::-webkit-search-results-button,.PFormSearch input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}");var _excluded$n = ["className"];
var PFormSearch = function PFormSearch(t0) {
  var $ = c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$n);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = classNames(className, "PFormSearch");
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/React.createElement(PFormText, _extends({
      className: t1,
      type: "search"
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
};insertStyle(".PFormTextarea .MuiInputBase-root .MuiInputBase-input{overflow-y:scroll}.PFormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar{width:8px}.PFormTextarea .MuiInputBase-root .MuiInputBase-input::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1882352941);background-clip:padding-box;border-left:4px rgba(0,0,0,0) solid}");var _excluded$m = ["className", "clear", "rows", "value"];
var PFormTextarea = function PFormTextarea(t0) {
  var $ = c(14);
  var className;
  var props;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.clear;
    t2 = _t.rows;
    t3 = _t.value;
    props = _objectWithoutProperties(_t, _excluded$m);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
  }
  var clear = t1 === undefined ? false : t1;
  var rows = t2 === undefined ? 3 : t2;
  var value = t3 === undefined ? "" : t3;
  var t4;
  if ($[6] !== className) {
    t4 = classNames(className, "PFormTextarea");
    $[6] = className;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] !== clear || $[9] !== props || $[10] !== rows || $[11] !== t4 || $[12] !== value) {
    t5 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      className: t4,
      clear: clear,
      rows: rows,
      value: value
    }, props, {
      multiline: true
    }));
    $[8] = clear;
    $[9] = props;
    $[10] = rows;
    $[11] = t4;
    $[12] = value;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
};var _excluded$l = ["className", "validPattern", "onValue"];
var PFormUrl = function PFormUrl(t0) {
  var $ = c(16);
  var className;
  var onValue;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.validPattern;
    onValue = _t.onValue;
    props = _objectWithoutProperties(_t, _excluded$l);
    $[0] = t0;
    $[1] = className;
    $[2] = onValue;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    onValue = $[2];
    props = $[3];
    t1 = $[4];
  }
  var t2;
  if ($[5] !== t1) {
    t2 = t1 === undefined ? /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim : t1;
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var validPattern = t2;
  var onValueRef = useAutoUpdateRef(onValue);
  var t3;
  if ($[7] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = value.replace(/ /gi, "");
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    };
    $[7] = onValueRef;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var handleValue = t3;
  var t4;
  if ($[9] !== className) {
    t4 = classNames(className, "PFormUrl");
    $[9] = className;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  var t5;
  if ($[11] !== handleValue || $[12] !== props || $[13] !== t4 || $[14] !== validPattern) {
    t5 = /*#__PURE__*/React.createElement(PFormText, _extends({
      className: t4,
      type: "url",
      validPattern: validPattern,
      onValue: handleValue
    }, props));
    $[11] = handleValue;
    $[12] = props;
    $[13] = t4;
    $[14] = validPattern;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  return t5;
};insertStyle(".PFormSelect.is-selected-placeholder .MuiSelect-select{opacity:.38}.PFormSelect .MuiInputBase-root.MuiInputBase-adornedEnd{padding-right:25px}.PFormSelect .MuiSelect-select.MuiSelect-multiple .selected-list:not(:empty){margin-top:-3px;margin-bottom:-3px}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar{width:12px}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1882352941);background-clip:padding-box;border-left:4px rgba(0,0,0,0) solid;border-right:4px rgba(0,0,0,0) solid}.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-button:start:decrement,.PFormSelect-Menu-Popover>.MuiPaper-root::-webkit-scrollbar-button:end:increment{display:block;height:4px;background-color:rgba(0,0,0,0)}");var _excluded$k = ["ref", "className", "name", "items", "fullWidth", "onLoadItems", "readOnly", "multiple", "checkbox", "placeholder", "startAdornment", "value", "slotProps", "formValueSeparator", "formValueSort", "width", "minWidth", "loading", "onChange", "onValue"],
  _excluded2$3 = ["fullWidth", "onAddValueItem", "onValueChange"];
function PFormSelect(t0) {
  var _initSlotProps, _initSlotProps2, _initSlotProps7, _initSlotProps8;
  var $ = c(157);
  var checkbox;
  var className;
  var formValueSort;
  var initFullWidth;
  var initItems;
  var initLoading;
  var initSlotProps;
  var initStartAdornment;
  var initValue;
  var multiple;
  var name;
  var onChange;
  var onLoadItems;
  var onValue;
  var placeholder;
  var props;
  var readOnly;
  var ref;
  var t1;
  var t2;
  var width;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    name = _t.name;
    initItems = _t.items;
    initFullWidth = _t.fullWidth;
    onLoadItems = _t.onLoadItems;
    readOnly = _t.readOnly;
    multiple = _t.multiple;
    checkbox = _t.checkbox;
    placeholder = _t.placeholder;
    initStartAdornment = _t.startAdornment;
    initValue = _t.value;
    initSlotProps = _t.slotProps;
    t1 = _t.formValueSeparator;
    formValueSort = _t.formValueSort;
    width = _t.width;
    t2 = _t.minWidth;
    initLoading = _t.loading;
    onChange = _t.onChange;
    onValue = _t.onValue;
    props = _objectWithoutProperties(_t, _excluded$k);
    $[0] = t0;
    $[1] = checkbox;
    $[2] = className;
    $[3] = formValueSort;
    $[4] = initFullWidth;
    $[5] = initItems;
    $[6] = initLoading;
    $[7] = initSlotProps;
    $[8] = initStartAdornment;
    $[9] = initValue;
    $[10] = multiple;
    $[11] = name;
    $[12] = onChange;
    $[13] = onLoadItems;
    $[14] = onValue;
    $[15] = placeholder;
    $[16] = props;
    $[17] = readOnly;
    $[18] = ref;
    $[19] = t1;
    $[20] = t2;
    $[21] = width;
  } else {
    checkbox = $[1];
    className = $[2];
    formValueSort = $[3];
    initFullWidth = $[4];
    initItems = $[5];
    initLoading = $[6];
    initSlotProps = $[7];
    initStartAdornment = $[8];
    initValue = $[9];
    multiple = $[10];
    name = $[11];
    onChange = $[12];
    onLoadItems = $[13];
    onValue = $[14];
    placeholder = $[15];
    props = $[16];
    readOnly = $[17];
    ref = $[18];
    t1 = $[19];
    t2 = $[20];
    width = $[21];
  }
  var formValueSeparator = t1 === undefined ? "," : t1;
  var minWidth = t2 === undefined ? 120 : t2;
  var initValueRef = useAutoUpdateRef(initValue);
  var onChangeRef = useAutoUpdateRef(onChange);
  var t3 = useFormState();
  var formFullWidth;
  var onAddValueItem;
  var onValueChange;
  var otherFormState;
  if ($[22] !== t3) {
    var _t2 = t3;
    formFullWidth = _t2.fullWidth;
    onAddValueItem = _t2.onAddValueItem;
    onValueChange = _t2.onValueChange;
    otherFormState = _objectWithoutProperties(_t2, _excluded2$3);
    $[22] = t3;
    $[23] = formFullWidth;
    $[24] = onAddValueItem;
    $[25] = onValueChange;
    $[26] = otherFormState;
  } else {
    formFullWidth = $[23];
    onAddValueItem = $[24];
    onValueChange = $[25];
    otherFormState = $[26];
  }
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var t4;
  if ($[27] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = [];
    $[27] = t4;
  } else {
    t4 = $[27];
  }
  var _useState = useState(t4),
    _useState2 = _slicedToArray(_useState, 1),
    emptyValue = _useState2[0];
  var t5;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {};
    $[28] = t5;
  } else {
    t5 = $[28];
  }
  var _useState3 = useState(t5),
    _useState4 = _slicedToArray(_useState3, 2),
    itemValueLabels = _useState4[0],
    setItemValueLabels = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasEmptyValue = _useState6[0],
    setHasEmptyValue = _useState6[1];
  var _useState7 = useState(!!onLoadItems),
    _useState8 = _slicedToArray(_useState7, 2),
    isOnGetItemLoading = _useState8[0],
    setIsOnGetItemLoading = _useState8[1];
  var _useState9 = useState(initLoading),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    _setLoading = _useState0[1];
  var t6;
  if (isOnGetItemLoading || loading) {
    var _t3;
    if ($[29] !== initStartAdornment || $[30] !== isOnGetItemLoading || $[31] !== loading) {
      _t3 = (isOnGetItemLoading || loading) && /*#__PURE__*/React.createElement(CircularProgress, {
        size: 16,
        color: "inherit",
        style: {
          verticalAlign: "middle",
          marginLeft: initStartAdornment ? 8 : 0
        }
      });
      $[29] = initStartAdornment;
      $[30] = isOnGetItemLoading;
      $[31] = loading;
      $[32] = _t3;
    } else {
      _t3 = $[32];
    }
    var _t4;
    if ($[33] !== initStartAdornment || $[34] !== _t3) {
      _t4 = /*#__PURE__*/React.createElement(React.Fragment, null, initStartAdornment, _t3);
      $[33] = initStartAdornment;
      $[34] = _t3;
      $[35] = _t4;
    } else {
      _t4 = $[35];
    }
    t6 = _t4;
  } else {
    t6 = initStartAdornment;
  }
  var startAdornment = t6;
  var _useState1 = useState(initItems),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    _setItems = _useState10[1];
  var t7;
  var t8;
  if ($[36] !== initItems) {
    t7 = function t7() {
      return _setItems(initItems);
    };
    t8 = [initItems];
    $[36] = initItems;
    $[37] = t7;
    $[38] = t8;
  } else {
    t7 = $[37];
    t8 = $[38];
  }
  useFirstSkipChanged(t7, t8);
  var t10;
  var t9;
  if ($[39] !== items) {
    t9 = function t9() {
      if (items) {
        setItemValueLabels(items.reduce(_temp$s, {}));
        setHasEmptyValue(!!items.find(_temp2$4));
      } else {
        setItemValueLabels({});
        setHasEmptyValue(false);
      }
    };
    t10 = [items];
    $[39] = items;
    $[40] = t10;
    $[41] = t9;
  } else {
    t10 = $[40];
    t9 = $[41];
  }
  useChanged(t9, t10);
  var t11;
  if (items) {
    var _t5;
    if ($[42] !== items) {
      _t5 = items.reduce(_temp3$2, {});
      $[42] = items;
      $[43] = _t5;
    } else {
      _t5 = $[43];
    }
    t11 = _t5;
  } else {
    var _t6;
    if ($[44] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t6 = {};
      $[44] = _t6;
    } else {
      _t6 = $[44];
    }
    t11 = _t6;
  }
  var itemsValues = t11;
  var t12;
  if ($[45] !== formValueSeparator || $[46] !== itemsValues || $[47] !== multiple || $[48] !== onValue) {
    t12 = function t12(newValue) {
      var finalValue = newValue == null ? "" : newValue;
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          if (empty(finalValue)) {
            finalValue = [];
          } else {
            if (typeof finalValue === "string") {
              finalValue = Array.from(new Set(finalValue.split(formValueSeparator)));
            } else {
              finalValue = [finalValue];
            }
          }
        }
      } else {
        if (Array.isArray(finalValue)) {
          finalValue = empty(finalValue) ? "" : finalValue[0];
        } else {
          if (empty(finalValue)) {
            finalValue = "";
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
          } else {
            var realValue_0 = itemsValues["".concat(finalValue)];
            if (realValue_0 != null && finalValue !== realValue_0) {
              finalValue = realValue_0;
            }
          }
        }
      }
      finalValue = onValue ? onValue(finalValue) : finalValue;
      return equal(newValue, finalValue) ? newValue : finalValue;
    };
    $[45] = formValueSeparator;
    $[46] = itemsValues;
    $[47] = multiple;
    $[48] = onValue;
    $[49] = t12;
  } else {
    t12 = $[49];
  }
  var getFinalValue = t12;
  var t13;
  if ($[50] !== getFinalValue || $[51] !== initValue) {
    t13 = getFinalValue(initValue);
    $[50] = getFinalValue;
    $[51] = initValue;
    $[52] = t13;
  } else {
    t13 = $[52];
  }
  var _useState11 = useState(t13),
    _useState12 = _slicedToArray(_useState11, 2),
    value_1 = _useState12[0],
    _setValue = _useState12[1];
  var t14;
  if ($[53] !== getFinalValue || $[54] !== initValue) {
    t14 = function t14() {
      return _setValue(getFinalValue(initValue));
    };
    $[53] = getFinalValue;
    $[54] = initValue;
    $[55] = t14;
  } else {
    t14 = $[55];
  }
  var t15;
  if ($[56] !== initValue) {
    t15 = [initValue];
    $[56] = initValue;
    $[57] = t15;
  } else {
    t15 = $[57];
  }
  useFirstSkipChanged(t14, t15);
  var valueRef = useAutoUpdateRef(value_1);
  var t16;
  if ($[58] !== valueRef) {
    t16 = function t16(newValue_0) {
      _setValue(newValue_0);
      valueRef.current = newValue_0;
    };
    $[58] = valueRef;
    $[59] = t16;
  } else {
    t16 = $[59];
  }
  var setValue = t16;
  var t17;
  if ($[60] !== getFinalValue || $[61] !== name || $[62] !== onChangeRef || $[63] !== onValueChange || $[64] !== setValue) {
    t17 = function t17(newValue_1, t18) {
      var _onChangeRef$current;
      var skipGetFinalValue = t18 === undefined ? false : t18;
      var finalValue_0 = skipGetFinalValue ? newValue_1 : getFinalValue(newValue_1);
      setValue(finalValue_0);
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[60] = getFinalValue;
    $[61] = name;
    $[62] = onChangeRef;
    $[63] = onValueChange;
    $[64] = setValue;
    $[65] = t17;
  } else {
    t17 = $[65];
  }
  var updateValue = t17;
  var t18;
  if ($[66] !== onLoadItems) {
    t18 = function t18() {
      var _onLoadItems;
      (_onLoadItems = onLoadItems) === null || _onLoadItems === void 0 || _onLoadItems().then(function (items_0) {
        _setItems(items_0);
        setIsOnGetItemLoading(false);
      });
    };
    $[66] = onLoadItems;
    $[67] = t18;
  } else {
    t18 = $[67];
  }
  var t19;
  if ($[68] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = [];
    $[68] = t19;
  } else {
    t19 = $[68];
  }
  useEventEffect(t18, t19);
  var t20;
  if ($[69] !== updateValue || $[70] !== valueRef) {
    t20 = function t20() {
      updateValue(valueRef.current);
    };
    $[69] = updateValue;
    $[70] = valueRef;
    $[71] = t20;
  } else {
    t20 = $[71];
  }
  var t21;
  if ($[72] !== multiple) {
    t21 = [multiple];
    $[72] = multiple;
    $[73] = t21;
  } else {
    t21 = $[73];
  }
  useFirstSkipEffect(t20, t21);
  var t22;
  if ($[74] !== hasEmptyValue || $[75] !== items || $[76] !== placeholder || $[77] !== value_1) {
    t22 = notEmpty(items) && empty(value_1) && !!placeholder && !hasEmptyValue;
    $[74] = hasEmptyValue;
    $[75] = items;
    $[76] = placeholder;
    $[77] = value_1;
    $[78] = t22;
  } else {
    t22 = $[78];
  }
  var isSelectedPlaceholder = t22;
  var t23;
  if ($[79] !== getFinalValue || $[80] !== initValueRef || $[81] !== updateValue || $[82] !== valueRef) {
    t23 = function t23() {
      return {
        getReset: function getReset() {
          return getFinalValue(initValueRef.current);
        },
        reset: function reset() {
          return updateValue(initValueRef.current);
        },
        getValue: function getValue() {
          return valueRef.current;
        },
        setValue: function setValue(value_2) {
          return updateValue(value_2);
        }
      };
    };
    $[79] = getFinalValue;
    $[80] = initValueRef;
    $[81] = updateValue;
    $[82] = valueRef;
    $[83] = t23;
  } else {
    t23 = $[83];
  }
  var getBaseCommands = t23;
  var t24;
  if ($[84] !== formValueSeparator || $[85] !== formValueSort || $[86] !== items || $[87] !== loading || $[88] !== multiple || $[89] !== onLoadItems) {
    t24 = function t24() {
      var lastItems = items;
      var lastLoading = loading;
      return {
        getFormValueSeparator: function getFormValueSeparator() {
          return formValueSeparator;
        },
        isFormValueSort: function isFormValueSort() {
          return !!formValueSort;
        },
        getItems: function getItems() {
          return lastItems;
        },
        setItems: function setItems(items_1) {
          lastItems = items_1;
          _setItems(lastItems);
        },
        isMultiple: function isMultiple() {
          return !!multiple;
        },
        getLoading: function getLoading() {
          return !!lastLoading;
        },
        setLoading: function setLoading(loading_0) {
          lastLoading = loading_0;
          _setLoading(lastLoading);
        },
        reloadItems: function reloadItems() {
          if (onLoadItems) {
            setIsOnGetItemLoading(true);
            onLoadItems().then(function (items_2) {
              _setItems(items_2);
              setIsOnGetItemLoading(false);
            });
          }
        }
      };
    };
    $[84] = formValueSeparator;
    $[85] = formValueSort;
    $[86] = items;
    $[87] = loading;
    $[88] = multiple;
    $[89] = onLoadItems;
    $[90] = t24;
  } else {
    t24 = $[90];
  }
  var getExtraCommands = t24;
  var t25;
  if ($[91] !== getBaseCommands || $[92] !== getExtraCommands || $[93] !== ref) {
    t25 = function t25(commands) {
      if (ref) {
        var finalCommands = commands ? _objectSpread2(_objectSpread2(_objectSpread2({}, commands), getBaseCommands()), getExtraCommands()) : null;
        if (typeof ref === "function") {
          return ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[91] = getBaseCommands;
    $[92] = getExtraCommands;
    $[93] = ref;
    $[94] = t25;
  } else {
    t25 = $[94];
  }
  var handleRef = t25;
  var t26;
  if ($[95] !== getBaseCommands || $[96] !== getExtraCommands || $[97] !== onAddValueItem) {
    t26 = function t26(id, commands_0) {
      onAddValueItem(id, _objectSpread2(_objectSpread2(_objectSpread2({}, commands_0), getBaseCommands()), getExtraCommands()));
    };
    $[95] = getBaseCommands;
    $[96] = getExtraCommands;
    $[97] = onAddValueItem;
    $[98] = t26;
  } else {
    t26 = $[98];
  }
  var handleAddValueItem = t26;
  var newFinalValue;
  if (notEmpty(items)) {
    newFinalValue = value_1;
  } else {
    newFinalValue = multiple ? emptyValue : "";
  }
  if (multiple) {
    if (newFinalValue != null && !Array.isArray(newFinalValue)) {
      var _t7;
      if ($[99] !== newFinalValue) {
        _t7 = [newFinalValue];
        $[99] = newFinalValue;
        $[100] = _t7;
      } else {
        _t7 = $[100];
      }
      newFinalValue = _t7;
    }
  } else {
    if (Array.isArray(newFinalValue)) {
      newFinalValue = newFinalValue[0];
    }
    newFinalValue = newFinalValue !== null && newFinalValue !== void 0 ? newFinalValue : "";
  }
  var finalValue_1 = newFinalValue;
  var t27 = !!multiple;
  var finalSelectProps;
  if ($[101] !== finalValue_1 || $[102] !== isSelectedPlaceholder || $[103] !== itemValueLabels || $[104] !== minWidth || $[105] !== multiple || $[106] !== placeholder || $[107] !== t27 || $[108] !== width) {
    var _finalSelectProps$Men;
    finalSelectProps = {
      displayEmpty: true,
      multiple: t27,
      value: finalValue_1
    };
    if (multiple) {
      var _t8;
      if ($[110] !== isSelectedPlaceholder || $[111] !== itemValueLabels || $[112] !== placeholder) {
        _t8 = function _t8(selected) {
          if (isSelectedPlaceholder) {
            return placeholder;
          } else {
            return /*#__PURE__*/React.createElement(Box, {
              className: "selected-list",
              sx: {
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5
              }
            }, Array.isArray(selected) && selected.map(function (selectedValue) {
              if (isSelectedPlaceholder) {
                return /*#__PURE__*/React.createElement(Chip, {
                  key: selectedValue || "$$$EmptyValuePlaceholder$$$",
                  label: "hahaha",
                  size: "small"
                });
              } else {
                return /*#__PURE__*/React.createElement(Chip, {
                  key: selectedValue,
                  label: itemValueLabels["".concat(selectedValue)],
                  size: "small"
                });
              }
            }));
          }
        };
        $[110] = isSelectedPlaceholder;
        $[111] = itemValueLabels;
        $[112] = placeholder;
        $[113] = _t8;
      } else {
        _t8 = $[113];
      }
      finalSelectProps.renderValue = _t8;
    }
    finalSelectProps.style = _objectSpread2(_objectSpread2({}, finalSelectProps.style), {}, {
      minWidth: width || minWidth
    });
    finalSelectProps.MenuProps = _objectSpread2(_objectSpread2({}, finalSelectProps.MenuProps), {}, {
      className: classNames((_finalSelectProps$Men = finalSelectProps.MenuProps) === null || _finalSelectProps$Men === void 0 ? void 0 : _finalSelectProps$Men.className, "PFormSelect-Menu-Popover")
    });
    $[101] = finalValue_1;
    $[102] = isSelectedPlaceholder;
    $[103] = itemValueLabels;
    $[104] = minWidth;
    $[105] = multiple;
    $[106] = placeholder;
    $[107] = t27;
    $[108] = width;
    $[109] = finalSelectProps;
  } else {
    finalSelectProps = $[109];
  }
  var selectProps = finalSelectProps;
  var t28;
  if ($[114] !== hasEmptyValue || $[115] !== ((_initSlotProps = initSlotProps) === null || _initSlotProps === void 0 ? void 0 : _initSlotProps.inputLabel) || $[116] !== ((_initSlotProps2 = initSlotProps) === null || _initSlotProps2 === void 0 ? void 0 : _initSlotProps2.select) || $[117] !== placeholder || $[118] !== selectProps) {
    var _initSlotProps5, _initSlotProps6;
    t28 = function t28() {
      var _initSlotProps3, _initSlotProps4;
      var inputLabelAdditionalProps = {};
      if (hasEmptyValue || !hasEmptyValue && placeholder) {
        inputLabelAdditionalProps.shrink = true;
      }
      return {
        inputLabel: _objectSpread2(_objectSpread2({}, (_initSlotProps3 = initSlotProps) === null || _initSlotProps3 === void 0 ? void 0 : _initSlotProps3.inputLabel), inputLabelAdditionalProps),
        select: _objectSpread2(_objectSpread2({}, (_initSlotProps4 = initSlotProps) === null || _initSlotProps4 === void 0 ? void 0 : _initSlotProps4.select), selectProps)
      };
    };
    $[114] = hasEmptyValue;
    $[115] = (_initSlotProps5 = initSlotProps) === null || _initSlotProps5 === void 0 ? void 0 : _initSlotProps5.inputLabel;
    $[116] = (_initSlotProps6 = initSlotProps) === null || _initSlotProps6 === void 0 ? void 0 : _initSlotProps6.select;
    $[117] = placeholder;
    $[118] = selectProps;
    $[119] = t28;
  } else {
    t28 = $[119];
  }
  (_initSlotProps7 = initSlotProps) === null || _initSlotProps7 === void 0 || _initSlotProps7.inputLabel;
  (_initSlotProps8 = initSlotProps) === null || _initSlotProps8 === void 0 || _initSlotProps8.select;
  var t29;
  if ($[120] !== t28) {
    t29 = t28();
    $[120] = t28;
    $[121] = t29;
  } else {
    t29 = $[121];
  }
  var slotProps = t29;
  var t30;
  if ($[122] !== formFullWidth || $[123] !== handleAddValueItem || $[124] !== otherFormState) {
    t30 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      fullWidth: formFullWidth,
      labelShrink: true,
      onAddValueItem: handleAddValueItem,
      onValueChange: _temp4$2
    });
    $[122] = formFullWidth;
    $[123] = handleAddValueItem;
    $[124] = otherFormState;
    $[125] = t30;
  } else {
    t30 = $[125];
  }
  var t31 = isSelectedPlaceholder && "is-selected-placeholder";
  var t32;
  if ($[126] !== className || $[127] !== t31) {
    t32 = classNames(className, "PFormSelect", t31);
    $[126] = className;
    $[127] = t31;
    $[128] = t32;
  } else {
    t32 = $[128];
  }
  var t33 = finalValue_1;
  var t34;
  if ($[129] !== items || $[130] !== readOnly) {
    t34 = readOnly || empty(items);
    $[129] = items;
    $[130] = readOnly;
    $[131] = t34;
  } else {
    t34 = $[131];
  }
  var t35;
  if ($[132] !== isSelectedPlaceholder || $[133] !== placeholder) {
    t35 = isSelectedPlaceholder && /*#__PURE__*/React.createElement(MenuItem, {
      key: "$$$EmptyValuePlaceholder$$$",
      value: "",
      disabled: true,
      sx: {
        display: "none"
      }
    }, placeholder);
    $[132] = isSelectedPlaceholder;
    $[133] = placeholder;
    $[134] = t35;
  } else {
    t35 = $[134];
  }
  var t36;
  if ($[135] !== checkbox || $[136] !== items || $[137] !== multiple || $[138] !== value_1) {
    t36 = items && notEmpty(items) ? items.map(function (t37) {
      var itemLabel = t37.label,
        itemValue = t37.value,
        disabled = t37.disabled;
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: empty(itemValue) ? "$$$EmptyValue$$$" : "".concat(itemValue),
        value: typeof itemValue === "boolean" ? "".concat(itemValue) : itemValue,
        disabled: disabled
      }, multiple && checkbox && Array.isArray(value_1) && /*#__PURE__*/React.createElement(Checkbox, {
        checked: value_1.includes(itemValue)
      }), itemLabel);
    }) : /*#__PURE__*/React.createElement(MenuItem, {
      value: ""
    });
    $[135] = checkbox;
    $[136] = items;
    $[137] = multiple;
    $[138] = value_1;
    $[139] = t36;
  } else {
    t36 = $[139];
  }
  var t37;
  if ($[140] !== fullWidth || $[141] !== getFinalValue || $[142] !== handleRef || $[143] !== name || $[144] !== props || $[145] !== slotProps || $[146] !== startAdornment || $[147] !== t32 || $[148] !== t33 || $[149] !== t34 || $[150] !== t35 || $[151] !== t36 || $[152] !== updateValue) {
    t37 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      select: true,
      ref: handleRef,
      name: name,
      className: t32,
      fullWidth: fullWidth
    }, props, {
      startAdornment: startAdornment,
      value: t33,
      clear: false,
      readOnly: t34,
      slotProps: slotProps,
      onChange: updateValue,
      onValue: getFinalValue
    }), t35, t36);
    $[140] = fullWidth;
    $[141] = getFinalValue;
    $[142] = handleRef;
    $[143] = name;
    $[144] = props;
    $[145] = slotProps;
    $[146] = startAdornment;
    $[147] = t32;
    $[148] = t33;
    $[149] = t34;
    $[150] = t35;
    $[151] = t36;
    $[152] = updateValue;
    $[153] = t37;
  } else {
    t37 = $[153];
  }
  var t38;
  if ($[154] !== t30 || $[155] !== t37) {
    t38 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t30
    }, t37);
    $[154] = t30;
    $[155] = t37;
    $[156] = t38;
  } else {
    t38 = $[156];
  }
  return t38;
}
function _temp4$2() {}
function _temp3$2(res_0, t0) {
  var value_0 = t0.value;
  res_0["".concat(value_0)] = value_0;
  return res_0;
}
function _temp2$4(t0) {
  var value = t0.value;
  return value === "";
}
function _temp$s(res, item) {
  res["".concat(item.value)] = item.label;
  return res;
}var _excluded$j = ["className", "validPattern", "onValue"];
var PFormBusinessNo = function PFormBusinessNo(t0) {
  var $ = c(16);
  var className;
  var onValue;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.validPattern;
    onValue = _t.onValue;
    props = _objectWithoutProperties(_t, _excluded$j);
    $[0] = t0;
    $[1] = className;
    $[2] = onValue;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    onValue = $[2];
    props = $[3];
    t1 = $[4];
  }
  var t2;
  if ($[5] !== t1) {
    t2 = t1 === undefined ? /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/ : t1;
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var validPattern = t2;
  var onValueRef = useAutoUpdateRef(onValue);
  var t3;
  if ($[7] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = formatBusinessNo(value.replace(/[^0-9]/gi, ""));
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    };
    $[7] = onValueRef;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var handleValue = t3;
  var t4;
  if ($[9] !== className) {
    t4 = classNames(className, "PFormBusinessNo");
    $[9] = className;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  var t5;
  if ($[11] !== handleValue || $[12] !== props || $[13] !== t4 || $[14] !== validPattern) {
    t5 = /*#__PURE__*/React.createElement(PFormText, _extends({
      className: t4,
      maxLength: 12,
      validPattern: validPattern,
      onValue: handleValue
    }, props));
    $[11] = handleValue;
    $[12] = props;
    $[13] = t4;
    $[14] = validPattern;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  return t5;
};var _excluded$i = ["className", "skipPersonalNumberValidateCheck", "validPattern", "onValue", "onValidate"];
var PFormPersonalNo = function PFormPersonalNo(t0) {
  var $ = c(22);
  var className;
  var onValidate;
  var onValue;
  var props;
  var skipPersonalNumberValidateCheck;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    skipPersonalNumberValidateCheck = _t.skipPersonalNumberValidateCheck;
    t1 = _t.validPattern;
    onValue = _t.onValue;
    onValidate = _t.onValidate;
    props = _objectWithoutProperties(_t, _excluded$i);
    $[0] = t0;
    $[1] = className;
    $[2] = onValidate;
    $[3] = onValue;
    $[4] = props;
    $[5] = skipPersonalNumberValidateCheck;
    $[6] = t1;
  } else {
    className = $[1];
    onValidate = $[2];
    onValue = $[3];
    props = $[4];
    skipPersonalNumberValidateCheck = $[5];
    t1 = $[6];
  }
  var t2;
  if ($[7] !== t1) {
    t2 = t1 === undefined ? /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/ : t1;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var validPattern = t2;
  var onValueRef = useAutoUpdateRef(onValue);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var t3;
  if ($[9] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = formatPersonalNo(value.replace(/[^0-9]/gi, ""));
      return onValueRef.current ? onValueRef.current(newValue) : newValue;
    };
    $[9] = onValueRef;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var handleValue = t3;
  var t4;
  if ($[11] !== onValidateRef || $[12] !== skipPersonalNumberValidateCheck) {
    t4 = function t4(value_0) {
      if (notEmpty(value_0) && !skipPersonalNumberValidateCheck) {
        if (value_0.length === 14 && value_0.includes("-")) {
          var jumin = value_0.replace(/-/g, "").split("").map(_temp$r);
          var ckarr = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
          for (var i = 0; i < jumin.length - 1; i = i + 1, i) {
            jumin[i] = jumin[i] * ckarr[i];
          }
          var juminlast = jumin[jumin.length - 1];
          var sum = 0;
          for (var i_0 = 0; i_0 < jumin.length - 1; i_0 = i_0 + 1, i_0) {
            sum = sum + jumin[i_0];
          }
          sum = sum % 11;
          sum = 11 - sum;
          if (sum > 9) {
            sum = sum % 10;
          }
          if (sum != juminlast && juminlast != undefined) {
            return "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uAC12\uC785\uB2C8\uB2E4.";
          }
          return onValidateRef.current ? onValidateRef.current(value_0) : true;
        } else {
          return "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uAC12\uC785\uB2C8\uB2E4.";
        }
      } else {
        return onValidateRef.current ? onValidateRef.current(value_0) : true;
      }
    };
    $[11] = onValidateRef;
    $[12] = skipPersonalNumberValidateCheck;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  var handleValidate = t4;
  var t5;
  if ($[14] !== className) {
    t5 = classNames(className, "FormPersonalNo");
    $[14] = className;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  var t6;
  if ($[16] !== handleValidate || $[17] !== handleValue || $[18] !== props || $[19] !== t5 || $[20] !== validPattern) {
    t6 = /*#__PURE__*/React.createElement(PFormText, _extends({
      className: t5,
      maxLength: 14,
      validPattern: validPattern,
      onValue: handleValue,
      onValidate: handleValidate
    }, props));
    $[16] = handleValidate;
    $[17] = handleValue;
    $[18] = props;
    $[19] = t5;
    $[20] = validPattern;
    $[21] = t6;
  } else {
    t6 = $[21];
  }
  return t6;
};
function _temp$r(v) {
  return Number(v);
}insertStyle(".PFormItemBase .PFormItemBase-InputLabel{overflow:visible;padding-left:5px}.PFormItemBase .PFormItemBase-InputLabel.MuiInputLabel-sizeSmall{transform:translate(0, -1.5px) scale(0.7)}.PFormItemBase.variant-standard .PFormItemBase-Control-wrap{margin-top:16px}");var PFormItemBase = function PFormItemBase(t0) {
  var $ = c(51);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFullWidth = t0.fullWidth,
    control = t0.control,
    controlHeight = t0.controlHeight,
    controlSingleHeight = t0.controlSingleHeight,
    controlVerticalCenter = t0.controlVerticalCenter,
    controlContainerStyle = t0.controlContainerStyle,
    required = t0.required,
    labelIcon = t0.labelIcon,
    label = t0.label,
    focused = t0.focused,
    helperText = t0.helperText,
    helperTextProps = t0.helperTextProps,
    error = t0.error,
    hideLabel = t0.hideLabel,
    hidden = t0.hidden,
    autoSize = t0.autoSize,
    className = t0.className,
    style = t0.style,
    sx = t0.sx;
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFullWidth = _useFormState.fullWidth,
    formColWithLabel = _useFormState.formColWithLabel,
    formColWithHelperText = _useFormState.formColWithHelperText;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      handleWidth: false
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var _useResizeDetector = useResizeDetector(t1),
    inputRef = _useResizeDetector.ref,
    resizedInputHeight = _useResizeDetector.height;
  var inputHeight = resizedInputHeight !== null && resizedInputHeight !== void 0 ? resizedInputHeight : 0;
  var topMargin;
  if (inputHeight && controlHeight && controlVerticalCenter) {
    if (controlHeight > inputHeight) {
      if (controlSingleHeight) {
        topMargin = inputHeight / 2 - controlSingleHeight / 2;
      } else {
        topMargin = 0;
      }
    } else {
      topMargin = inputHeight / 2 - controlHeight / 2;
    }
  } else {
    topMargin = 0;
  }
  var withLabelControlAddTopMargin;
  if (size === "small") {
    withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 13;
  } else {
    withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 15;
  }
  var controlMarginTop = 0;
  bb0: switch (variant) {
    case "outlined":
    case "filled":
      {
        if (label || formColWithLabel) {
          controlMarginTop = topMargin + withLabelControlAddTopMargin;
        } else {
          controlMarginTop = topMargin;
        }
        break bb0;
      }
    case "standard":
      {
        controlMarginTop = 0;
      }
  }
  var controlMarginTop_0 = controlMarginTop;
  var t2 = hidden ? "none" : fullWidth ? "block" : "inline-flex";
  var t3 = fullWidth ? "100%" : undefined;
  var newWrapStyle;
  if ($[1] !== formColWithLabel || $[2] !== t2 || $[3] !== t3) {
    newWrapStyle = {
      display: t2,
      width: t3
    };
    if (formColWithLabel) {
      newWrapStyle.marginTop = -20;
    }
    $[1] = formColWithLabel;
    $[2] = t2;
    $[3] = t3;
    $[4] = newWrapStyle;
  } else {
    newWrapStyle = $[4];
  }
  var wrapStyle = newWrapStyle;
  var t4 = !!label && "with-label";
  var t5 = "variant-".concat(variant);
  var t6 = controlVerticalCenter && "control-vertical-center";
  var t7 = !!error && "error";
  var t8;
  if ($[5] !== className || $[6] !== t4 || $[7] !== t5 || $[8] !== t6 || $[9] !== t7) {
    t8 = classNames(className, "PFormItemBase", t4, t5, t6, t7);
    $[5] = className;
    $[6] = t4;
    $[7] = t5;
    $[8] = t6;
    $[9] = t7;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  var t9;
  if ($[11] !== formColWithLabel || $[12] !== label || $[13] !== labelIcon || $[14] !== required || $[15] !== size) {
    t9 = !formColWithLabel && label && /*#__PURE__*/React.createElement(InputLabel, {
      shrink: true,
      className: "PFormItemBase-InputLabel",
      size: size,
      required: required
    }, labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PIcon, {
      style: {
        verticalAlign: "middle",
        marginRight: 3,
        marginTop: -4,
        marginBottom: -2
      }
    }, labelIcon), /*#__PURE__*/React.createElement("span", {
      style: {
        verticalAlign: "middle"
      }
    }, label)) : label);
    $[11] = formColWithLabel;
    $[12] = label;
    $[13] = labelIcon;
    $[14] = required;
    $[15] = size;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var t10 = hideLabel ? 0 : undefined;
  var t11;
  if ($[17] !== controlContainerStyle || $[18] !== t10) {
    t11 = _objectSpread2({
      display: "grid",
      marginTop: t10
    }, controlContainerStyle);
    $[17] = controlContainerStyle;
    $[18] = t10;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  var t12;
  if ($[20] !== autoSize || $[21] !== control || $[22] !== controlHeight || $[23] !== controlMarginTop_0 || $[24] !== fullWidth || $[25] !== inputHeight || $[26] !== inputRef || $[27] !== size || $[28] !== variant) {
    t12 = autoSize ? /*#__PURE__*/React.createElement(React.Fragment, null, variant === "standard" && /*#__PURE__*/React.createElement(Input, {
      ref: function ref(ref_0) {
        inputRef.current = ref_0;
      },
      size: size,
      fullWidth: false,
      disabled: true,
      style: {
        visibility: "hidden",
        width: 0
      }
    }), variant === "outlined" && /*#__PURE__*/React.createElement(OutlinedInput, {
      ref: function ref(ref_1) {
        inputRef.current = ref_1;
      },
      size: size,
      fullWidth: false,
      disabled: true,
      style: {
        visibility: "hidden",
        width: 0
      }
    }), variant === "filled" && /*#__PURE__*/React.createElement(FilledInput, {
      ref: function ref(ref_2) {
        inputRef.current = ref_2;
      },
      size: size,
      fullWidth: false,
      disabled: true,
      style: {
        visibility: "hidden",
        width: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "PFormItemBase-Control",
      style: {
        width: fullWidth ? "100%" : "auto",
        display: "grid",
        marginTop: -inputHeight,
        height: (controlHeight !== null && controlHeight !== void 0 ? controlHeight : inputHeight) > inputHeight ? controlHeight : undefined,
        alignItems: "flex-start",
        paddingTop: controlMarginTop_0,
        position: "relative"
      }
    }, control)) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: fullWidth ? "100%" : "auto",
        display: "grid",
        marginTop: controlMarginTop_0
      }
    }, control);
    $[20] = autoSize;
    $[21] = control;
    $[22] = controlHeight;
    $[23] = controlMarginTop_0;
    $[24] = fullWidth;
    $[25] = inputHeight;
    $[26] = inputRef;
    $[27] = size;
    $[28] = variant;
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  var t13;
  if ($[30] !== t11 || $[31] !== t12) {
    t13 = /*#__PURE__*/React.createElement("div", {
      className: "PFormItemBase-Control-wrap",
      style: t11
    }, t12);
    $[30] = t11;
    $[31] = t12;
    $[32] = t13;
  } else {
    t13 = $[32];
  }
  var t14;
  if ($[33] !== formColWithHelperText || $[34] !== helperText || $[35] !== helperTextProps) {
    t14 = !formColWithHelperText && helperText && /*#__PURE__*/React.createElement(FormHelperText, _extends({
      component: "div"
    }, helperTextProps), helperText);
    $[33] = formColWithHelperText;
    $[34] = helperText;
    $[35] = helperTextProps;
    $[36] = t14;
  } else {
    t14 = $[36];
  }
  var t15;
  if ($[37] !== color || $[38] !== error || $[39] !== focused || $[40] !== ref || $[41] !== style || $[42] !== sx || $[43] !== t13 || $[44] !== t14 || $[45] !== t8 || $[46] !== t9) {
    t15 = /*#__PURE__*/React.createElement(FormControl, {
      ref: ref,
      variant: "standard",
      className: t8,
      style: style,
      color: color,
      error: error,
      focused: focused,
      sx: sx
    }, t9, t13, t14);
    $[37] = color;
    $[38] = error;
    $[39] = focused;
    $[40] = ref;
    $[41] = style;
    $[42] = sx;
    $[43] = t13;
    $[44] = t14;
    $[45] = t8;
    $[46] = t9;
    $[47] = t15;
  } else {
    t15 = $[47];
  }
  var t16;
  if ($[48] !== t15 || $[49] !== wrapStyle) {
    t16 = /*#__PURE__*/React.createElement("div", {
      style: wrapStyle
    }, t15);
    $[48] = t15;
    $[49] = wrapStyle;
    $[50] = t16;
  } else {
    t16 = $[50];
  }
  return t16;
};var _excluded$h = ["ref", "variant", "size", "color", "focused", "fullWidth", "name", "labelIcon", "label", "checked", "inputRef", "action", "readOnly", "disabled", "hidden", "text", "error", "helperText", "value", "data", "uncheckedValue", "exceptValue", "onChange", "onValidate", "className", "style", "sx"];
var PFormCheckbox = function PFormCheckbox(t0) {
  var $ = c(173);
  var className;
  var exceptValue;
  var helperText;
  var initAction;
  var initColor;
  var initData;
  var initDisabled;
  var initError;
  var initFocused;
  var initFullWidth;
  var initHidden;
  var initInputRef;
  var initSize;
  var initStyle;
  var initVariant;
  var label;
  var labelIcon;
  var name;
  var onChange;
  var onValidate;
  var props;
  var readOnly;
  var ref;
  var sx;
  var t1;
  var t2;
  var t3;
  var text;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    initVariant = _t.variant;
    initSize = _t.size;
    initColor = _t.color;
    initFocused = _t.focused;
    initFullWidth = _t.fullWidth;
    name = _t.name;
    labelIcon = _t.labelIcon;
    label = _t.label;
    t1 = _t.checked;
    initInputRef = _t.inputRef;
    initAction = _t.action;
    readOnly = _t.readOnly;
    initDisabled = _t.disabled;
    initHidden = _t.hidden;
    text = _t.text;
    initError = _t.error;
    helperText = _t.helperText;
    t2 = _t.value;
    initData = _t.data;
    t3 = _t.uncheckedValue;
    exceptValue = _t.exceptValue;
    onChange = _t.onChange;
    onValidate = _t.onValidate;
    className = _t.className;
    initStyle = _t.style;
    sx = _t.sx;
    props = _objectWithoutProperties(_t, _excluded$h);
    $[0] = t0;
    $[1] = className;
    $[2] = exceptValue;
    $[3] = helperText;
    $[4] = initAction;
    $[5] = initColor;
    $[6] = initData;
    $[7] = initDisabled;
    $[8] = initError;
    $[9] = initFocused;
    $[10] = initFullWidth;
    $[11] = initHidden;
    $[12] = initInputRef;
    $[13] = initSize;
    $[14] = initStyle;
    $[15] = initVariant;
    $[16] = label;
    $[17] = labelIcon;
    $[18] = name;
    $[19] = onChange;
    $[20] = onValidate;
    $[21] = props;
    $[22] = readOnly;
    $[23] = ref;
    $[24] = sx;
    $[25] = t1;
    $[26] = t2;
    $[27] = t3;
    $[28] = text;
  } else {
    className = $[1];
    exceptValue = $[2];
    helperText = $[3];
    initAction = $[4];
    initColor = $[5];
    initData = $[6];
    initDisabled = $[7];
    initError = $[8];
    initFocused = $[9];
    initFullWidth = $[10];
    initHidden = $[11];
    initInputRef = $[12];
    initSize = $[13];
    initStyle = $[14];
    initVariant = $[15];
    label = $[16];
    labelIcon = $[17];
    name = $[18];
    onChange = $[19];
    onValidate = $[20];
    props = $[21];
    readOnly = $[22];
    ref = $[23];
    sx = $[24];
    t1 = $[25];
    t2 = $[26];
    t3 = $[27];
    text = $[28];
  }
  var initChecked = t1 === undefined ? false : t1;
  var initValue = t2 === undefined ? 1 : t2;
  var initUncheckedValue = t3 === undefined ? 0 : t3;
  var id = useId();
  var theme = useTheme();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initCheckedRef = useAutoUpdateRef(initChecked);
  var inputRef = useRef(null);
  var actionRef = useRef(null);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useResizeDetector = useResizeDetector(),
    labelRef = _useResizeDetector.ref,
    width = _useResizeDetector.width,
    height = _useResizeDetector.height;
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    _setError = _useState2[1];
  var t4;
  var t5;
  if ($[29] !== initError) {
    t4 = function t4() {
      return _setError(initError);
    };
    t5 = [initError];
    $[29] = initError;
    $[30] = t4;
    $[31] = t5;
  } else {
    t4 = $[30];
    t5 = $[31];
  }
  useFirstSkipChanged(t4, t5);
  var errorRef = useAutoUpdateRef(error);
  var t6;
  if ($[32] !== errorRef) {
    t6 = function t6(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[32] = errorRef;
    $[33] = t6;
  } else {
    t6 = $[33];
  }
  var setError = t6;
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    _setData = _useState4[1];
  var t7;
  var t8;
  if ($[34] !== initData) {
    t7 = function t7() {
      return _setData(initData);
    };
    t8 = [initData];
    $[34] = initData;
    $[35] = t7;
    $[36] = t8;
  } else {
    t7 = $[35];
    t8 = $[36];
  }
  useFirstSkipChanged(t7, t8);
  var dataRef = useAutoUpdateRef(data);
  var t9;
  if ($[37] !== dataRef) {
    t9 = function t9(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[37] = dataRef;
    $[38] = t9;
  } else {
    t9 = $[38];
  }
  var setData = t9;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  var t10;
  var t11;
  if ($[39] !== finalInitDisabled) {
    t10 = function t10() {
      return setDisabled(finalInitDisabled);
    };
    t11 = [finalInitDisabled];
    $[39] = finalInitDisabled;
    $[40] = t10;
    $[41] = t11;
  } else {
    t10 = $[40];
    t11 = $[41];
  }
  useFirstSkipChanged(t10, t11);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var t12;
  var t13;
  if ($[42] !== initHidden) {
    t12 = function t12() {
      return setHidden(initHidden);
    };
    t13 = [initHidden];
    $[42] = initHidden;
    $[43] = t12;
    $[44] = t13;
  } else {
    t12 = $[43];
    t13 = $[44];
  }
  useFirstSkipChanged(t12, t13);
  var finalInitUncheckedValue = initUncheckedValue !== null && initUncheckedValue !== void 0 ? initUncheckedValue : 0;
  var _useState9 = useState(finalInitUncheckedValue),
    _useState0 = _slicedToArray(_useState9, 2),
    uncheckedValue = _useState0[0],
    _setUncheckedValue = _useState0[1];
  var t14;
  var t15;
  if ($[45] !== finalInitUncheckedValue) {
    t14 = function t14() {
      return _setUncheckedValue(finalInitUncheckedValue);
    };
    t15 = [finalInitUncheckedValue];
    $[45] = finalInitUncheckedValue;
    $[46] = t14;
    $[47] = t15;
  } else {
    t14 = $[46];
    t15 = $[47];
  }
  useFirstSkipChanged(t14, t15);
  var uncheckedValueRef = useAutoUpdateRef(uncheckedValue);
  var t16;
  if ($[48] !== uncheckedValueRef) {
    t16 = function t16(newValue_1) {
      _setUncheckedValue(newValue_1);
      uncheckedValueRef.current = newValue_1;
    };
    $[48] = uncheckedValueRef;
    $[49] = t16;
  } else {
    t16 = $[49];
  }
  var setUncheckedValue = t16;
  var finalInitValue = initValue !== null && initValue !== void 0 ? initValue : 0;
  var _useState1 = useState(finalInitValue),
    _useState10 = _slicedToArray(_useState1, 2),
    value = _useState10[0],
    setValue = _useState10[1];
  var t17;
  var t18;
  if ($[50] !== finalInitValue) {
    t17 = function t17() {
      return setValue(finalInitValue);
    };
    t18 = [finalInitValue];
    $[50] = finalInitValue;
    $[51] = t17;
    $[52] = t18;
  } else {
    t17 = $[51];
    t18 = $[52];
  }
  useFirstSkipChanged(t17, t18);
  var valueRef = useAutoUpdateRef(value);
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    errorHelperText = _useState12[0],
    setErrorHelperText = _useState12[1];
  var t19;
  if ($[53] !== setError) {
    t19 = function t19(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[53] = setError;
    $[54] = t19;
  } else {
    t19 = $[54];
  }
  var setErrorErrorHelperText = t19;
  var t20;
  if ($[55] !== onValidateRef || $[56] !== setErrorErrorHelperText) {
    t20 = function t20(checked) {
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(checked);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[55] = onValidateRef;
    $[56] = setErrorErrorHelperText;
    $[57] = t20;
  } else {
    t20 = $[57];
  }
  var validate = t20;
  var _useState13 = useState(initChecked),
    _useState14 = _slicedToArray(_useState13, 2),
    checked_0 = _useState14[0],
    setChecked = _useState14[1];
  var t21;
  var t22;
  if ($[58] !== initChecked) {
    t21 = function t21() {
      return setChecked(initChecked);
    };
    t22 = [initChecked];
    $[58] = initChecked;
    $[59] = t21;
    $[60] = t22;
  } else {
    t21 = $[59];
    t22 = $[60];
  }
  useFirstSkipChanged(t21, t22);
  var checkedRef = useAutoUpdateRef(checked_0);
  var t23;
  if ($[61] !== checkedRef || $[62] !== error || $[63] !== name || $[64] !== onChangeRef || $[65] !== onValueChange || $[66] !== validate) {
    t23 = function t23(newChecked, t24) {
      var notFireOnChange = t24 === undefined ? false : t24;
      setChecked(newChecked);
      checkedRef.current = newChecked;
      if (error) {
        validate(newChecked);
      }
      if (!notFireOnChange && onChangeRef.current) {
        onChangeRef.current(newChecked);
      }
      onValueChange(name, newChecked);
      return newChecked;
    };
    $[61] = checkedRef;
    $[62] = error;
    $[63] = name;
    $[64] = onChangeRef;
    $[65] = onValueChange;
    $[66] = validate;
    $[67] = t23;
  } else {
    t23 = $[67];
  }
  var updateChecked = t23;
  var t24;
  if ($[68] !== initAction || $[69] !== initInputRef) {
    t24 = function t24() {
      if (initInputRef) {
        var _initInputRef$current;
        (_initInputRef$current = initInputRef.current) === null || _initInputRef$current === void 0 || _initInputRef$current.focus();
      } else {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      }
      if (initAction) {
        var _initAction$current;
        (_initAction$current = initAction.current) === null || _initAction$current === void 0 || _initAction$current.focusVisible();
      } else {
        var _actionRef$current;
        (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 || _actionRef$current.focusVisible();
      }
    };
    $[68] = initAction;
    $[69] = initInputRef;
    $[70] = t24;
  } else {
    t24 = $[70];
  }
  var focus = t24;
  var t25;
  if ($[71] !== name) {
    t25 = function t25() {
      return name;
    };
    $[71] = name;
    $[72] = t25;
  } else {
    t25 = $[72];
  }
  var t26;
  if ($[73] !== initCheckedRef) {
    t26 = function t26() {
      return initCheckedRef.current;
    };
    $[73] = initCheckedRef;
    $[74] = t26;
  } else {
    t26 = $[74];
  }
  var t27;
  if ($[75] !== initCheckedRef || $[76] !== updateChecked) {
    t27 = function t27() {
      return updateChecked(initCheckedRef.current);
    };
    $[75] = initCheckedRef;
    $[76] = updateChecked;
    $[77] = t27;
  } else {
    t27 = $[77];
  }
  var t28;
  if ($[78] !== valueRef) {
    t28 = function t28() {
      return valueRef.current;
    };
    $[78] = valueRef;
    $[79] = t28;
  } else {
    t28 = $[79];
  }
  var t29;
  if ($[80] !== dataRef) {
    t29 = function t29() {
      return dataRef.current;
    };
    $[80] = dataRef;
    $[81] = t29;
  } else {
    t29 = $[81];
  }
  var t30;
  if ($[82] !== uncheckedValueRef) {
    t30 = function t30() {
      return uncheckedValueRef.current;
    };
    $[82] = uncheckedValueRef;
    $[83] = t30;
  } else {
    t30 = $[83];
  }
  var t31;
  if ($[84] !== checkedRef) {
    t31 = function t31() {
      return checkedRef.current;
    };
    $[84] = checkedRef;
    $[85] = t31;
  } else {
    t31 = $[85];
  }
  var t32;
  if ($[86] !== exceptValue) {
    t32 = function t32() {
      return !!exceptValue;
    };
    $[86] = exceptValue;
    $[87] = t32;
  } else {
    t32 = $[87];
  }
  var t33;
  if ($[88] !== disabled) {
    t33 = function t33() {
      return !!disabled;
    };
    $[88] = disabled;
    $[89] = t33;
  } else {
    t33 = $[89];
  }
  var t34;
  if ($[90] !== hidden) {
    t34 = function t34() {
      return !!hidden;
    };
    $[90] = hidden;
    $[91] = t34;
  } else {
    t34 = $[91];
  }
  var t35;
  if ($[92] !== checkedRef || $[93] !== validate) {
    t35 = function t35() {
      return validate(checkedRef.current);
    };
    $[92] = checkedRef;
    $[93] = validate;
    $[94] = t35;
  } else {
    t35 = $[94];
  }
  var t36;
  if ($[95] !== focus || $[96] !== setData || $[97] !== setErrorErrorHelperText || $[98] !== setUncheckedValue || $[99] !== t25 || $[100] !== t26 || $[101] !== t27 || $[102] !== t28 || $[103] !== t29 || $[104] !== t30 || $[105] !== t31 || $[106] !== t32 || $[107] !== t33 || $[108] !== t34 || $[109] !== t35 || $[110] !== updateChecked) {
    t36 = {
      getType: _temp$q,
      getName: t25,
      getReset: t26,
      reset: t27,
      getValue: t28,
      setValue: setValue,
      getData: t29,
      setData: setData,
      getUncheckedValue: t30,
      setUncheckedValue: setUncheckedValue,
      getChecked: t31,
      setChecked: updateChecked,
      isExceptValue: t32,
      isDisabled: t33,
      setDisabled: setDisabled,
      isHidden: t34,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t35,
      setError: setErrorErrorHelperText
    };
    $[95] = focus;
    $[96] = setData;
    $[97] = setErrorErrorHelperText;
    $[98] = setUncheckedValue;
    $[99] = t25;
    $[100] = t26;
    $[101] = t27;
    $[102] = t28;
    $[103] = t29;
    $[104] = t30;
    $[105] = t31;
    $[106] = t32;
    $[107] = t33;
    $[108] = t34;
    $[109] = t35;
    $[110] = updateChecked;
    $[111] = t36;
  } else {
    t36 = $[111];
  }
  var commands = t36;
  var t37;
  if ($[112] !== id || $[113] !== onAddValueItem) {
    t37 = function t37(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[112] = id;
    $[113] = onAddValueItem;
    $[114] = t37;
  } else {
    t37 = $[114];
  }
  var t38;
  if ($[115] !== id || $[116] !== onRemoveValueItem) {
    t38 = function t38() {
      return onRemoveValueItem(id);
    };
    $[115] = id;
    $[116] = onRemoveValueItem;
    $[117] = t38;
  } else {
    t38 = $[117];
  }
  useForwardRef(ref, commands, t37, t38);
  var t39;
  if ($[118] !== name || $[119] !== onRequestSearchSubmit || $[120] !== onValueChangeByUser || $[121] !== readOnly || $[122] !== updateChecked) {
    t39 = function t39(e, checked_1) {
      if (readOnly) {
        e.preventDefault();
      } else {
        updateChecked(checked_1);
        setTimeout(function () {
          onValueChangeByUser(name, checked_1);
          onRequestSearchSubmit(name, checked_1);
        });
      }
    };
    $[118] = name;
    $[119] = onRequestSearchSubmit;
    $[120] = onValueChangeByUser;
    $[121] = readOnly;
    $[122] = updateChecked;
    $[123] = t39;
  } else {
    t39 = $[123];
  }
  var handleChange = t39;
  var t40;
  if ($[124] !== className) {
    t40 = classNames(className, "PFormValueItem", "PFormCheckbox");
    $[124] = className;
    $[125] = t40;
  } else {
    t40 = $[125];
  }
  var t41 = error ? errorHelperText : helperText;
  var t42;
  if ($[126] === Symbol["for"]("react.memo_cache_sentinel")) {
    t42 = {
      style: {
        marginLeft: 2
      }
    };
    $[126] = t42;
  } else {
    t42 = $[126];
  }
  var t43 = fullWidth ? "100%" : width || 100;
  var t44;
  if ($[127] !== initStyle || $[128] !== t43) {
    t44 = _objectSpread2({
      width: t43,
      paddingLeft: 3
    }, initStyle);
    $[127] = initStyle;
    $[128] = t43;
    $[129] = t44;
  } else {
    t44 = $[129];
  }
  var t45 = height || (size === "small" ? 35 : 39);
  var t46;
  if ($[130] !== labelRef) {
    t46 = function t46(ref_0) {
      labelRef.current = ref_0;
    };
    $[130] = labelRef;
    $[131] = t46;
  } else {
    t46 = $[131];
  }
  var t47 = initInputRef ? initInputRef : inputRef;
  var t48;
  if ($[132] !== t47) {
    t48 = {
      input: {
        ref: t47
      }
    };
    $[132] = t47;
    $[133] = t48;
  } else {
    t48 = $[133];
  }
  var t49 = initAction ? initAction : actionRef;
  var t50 = error ? "error" : undefined;
  var t51;
  if ($[134] !== t50) {
    t51 = /*#__PURE__*/React.createElement(CheckBox, {
      color: t50
    });
    $[134] = t50;
    $[135] = t51;
  } else {
    t51 = $[135];
  }
  var t52 = error ? "error" : undefined;
  var t53;
  if ($[136] !== t52) {
    t53 = /*#__PURE__*/React.createElement(CheckBoxOutlineBlank, {
      color: t52
    });
    $[136] = t52;
    $[137] = t53;
  } else {
    t53 = $[137];
  }
  var t54 = disabled || readOnly;
  var t55;
  if ($[138] !== checked_0 || $[139] !== color || $[140] !== handleChange || $[141] !== name || $[142] !== props || $[143] !== size || $[144] !== t48 || $[145] !== t49 || $[146] !== t51 || $[147] !== t53 || $[148] !== t54) {
    t55 = /*#__PURE__*/React.createElement(Checkbox, _extends({
      name: name,
      color: color,
      size: size,
      slotProps: t48,
      action: t49,
      checked: checked_0,
      checkedIcon: t51,
      icon: t53,
      onChange: handleChange,
      disabled: t54
    }, props));
    $[138] = checked_0;
    $[139] = color;
    $[140] = handleChange;
    $[141] = name;
    $[142] = props;
    $[143] = size;
    $[144] = t48;
    $[145] = t49;
    $[146] = t51;
    $[147] = t53;
    $[148] = t54;
    $[149] = t55;
  } else {
    t55 = $[149];
  }
  var t56 = error ? "error" : readOnly || disabled ? theme.palette.text.disabled : undefined;
  var t57;
  if ($[150] !== t56 || $[151] !== text) {
    t57 = /*#__PURE__*/React.createElement(Typography, {
      color: t56,
      whiteSpace: "nowrap"
    }, text);
    $[150] = t56;
    $[151] = text;
    $[152] = t57;
  } else {
    t57 = $[152];
  }
  var t58;
  if ($[153] !== t46 || $[154] !== t55 || $[155] !== t57) {
    t58 = /*#__PURE__*/React.createElement(FormControlLabel, {
      ref: t46,
      control: t55,
      label: t57
    });
    $[153] = t46;
    $[154] = t55;
    $[155] = t57;
    $[156] = t58;
  } else {
    t58 = $[156];
  }
  var t59;
  if ($[157] !== color || $[158] !== error || $[159] !== focused || $[160] !== fullWidth || $[161] !== hidden || $[162] !== label || $[163] !== labelIcon || $[164] !== size || $[165] !== sx || $[166] !== t40 || $[167] !== t41 || $[168] !== t44 || $[169] !== t45 || $[170] !== t58 || $[171] !== variant) {
    t59 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t40,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: fullWidth,
      helperText: t41,
      helperTextProps: t42,
      style: t44,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t45,
      controlVerticalCenter: true,
      control: t58
    });
    $[157] = color;
    $[158] = error;
    $[159] = focused;
    $[160] = fullWidth;
    $[161] = hidden;
    $[162] = label;
    $[163] = labelIcon;
    $[164] = size;
    $[165] = sx;
    $[166] = t40;
    $[167] = t41;
    $[168] = t44;
    $[169] = t45;
    $[170] = t58;
    $[171] = variant;
    $[172] = t59;
  } else {
    t59 = $[172];
  }
  return t59;
};
function _temp$q() {
  return "PFormCheckbox";
}var _excluded$g = ["ref", "variant", "size", "color", "focused", "fullWidth", "hidden", "startAdornment", "endAdornment", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "data", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"];
var PADDING_LEFT = 3;
function PFormRadioGroup(t0) {
  var $ = c(268);
  var className;
  var endAdornment;
  var exceptValue;
  var helperText;
  var initColor;
  var initData;
  var initDisabled;
  var initError;
  var initFocused;
  var initFullWidth;
  var initHidden;
  var initItems;
  var initLoading;
  var initSize;
  var initStyle;
  var initValue;
  var initVariant;
  var initWidth;
  var label;
  var labelIcon;
  var name;
  var nowrap;
  var onChange;
  var onLoadItems;
  var onValidate;
  var onValue;
  var props;
  var readOnly;
  var ref;
  var required;
  var startAdornment;
  var sx;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    initVariant = _t.variant;
    initSize = _t.size;
    initColor = _t.color;
    initFocused = _t.focused;
    initFullWidth = _t.fullWidth;
    initHidden = _t.hidden;
    startAdornment = _t.startAdornment;
    endAdornment = _t.endAdornment;
    name = _t.name;
    initWidth = _t.width;
    labelIcon = _t.labelIcon;
    label = _t.label;
    t1 = _t.inline;
    initLoading = _t.loading;
    nowrap = _t.nowrap;
    initItems = _t.items;
    initValue = _t.value;
    initData = _t.data;
    initError = _t.error;
    helperText = _t.helperText;
    initDisabled = _t.disabled;
    readOnly = _t.readOnly;
    required = _t.required;
    exceptValue = _t.exceptValue;
    onLoadItems = _t.onLoadItems;
    onChange = _t.onChange;
    onValue = _t.onValue;
    onValidate = _t.onValidate;
    className = _t.className;
    initStyle = _t.style;
    sx = _t.sx;
    props = _objectWithoutProperties(_t, _excluded$g);
    $[0] = t0;
    $[1] = className;
    $[2] = endAdornment;
    $[3] = exceptValue;
    $[4] = helperText;
    $[5] = initColor;
    $[6] = initData;
    $[7] = initDisabled;
    $[8] = initError;
    $[9] = initFocused;
    $[10] = initFullWidth;
    $[11] = initHidden;
    $[12] = initItems;
    $[13] = initLoading;
    $[14] = initSize;
    $[15] = initStyle;
    $[16] = initValue;
    $[17] = initVariant;
    $[18] = initWidth;
    $[19] = label;
    $[20] = labelIcon;
    $[21] = name;
    $[22] = nowrap;
    $[23] = onChange;
    $[24] = onLoadItems;
    $[25] = onValidate;
    $[26] = onValue;
    $[27] = props;
    $[28] = readOnly;
    $[29] = ref;
    $[30] = required;
    $[31] = startAdornment;
    $[32] = sx;
    $[33] = t1;
  } else {
    className = $[1];
    endAdornment = $[2];
    exceptValue = $[3];
    helperText = $[4];
    initColor = $[5];
    initData = $[6];
    initDisabled = $[7];
    initError = $[8];
    initFocused = $[9];
    initFullWidth = $[10];
    initHidden = $[11];
    initItems = $[12];
    initLoading = $[13];
    initSize = $[14];
    initStyle = $[15];
    initValue = $[16];
    initVariant = $[17];
    initWidth = $[18];
    label = $[19];
    labelIcon = $[20];
    name = $[21];
    nowrap = $[22];
    onChange = $[23];
    onLoadItems = $[24];
    onValidate = $[25];
    onValue = $[26];
    props = $[27];
    readOnly = $[28];
    ref = $[29];
    required = $[30];
    startAdornment = $[31];
    sx = $[32];
    t1 = $[33];
  }
  var inline = t1 === undefined ? true : t1;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var theme = useTheme();
  var initValueRef = useAutoUpdateRef(initValue);
  var baseRef = useRef(null);
  var firstInputRef = useRef(null);
  var onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(!!onLoadItems),
    _useState4 = _slicedToArray(_useState3, 2),
    isOnGetItemLoading = _useState4[0],
    setIsOnGetItemLoading = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    formColWrapRect = _useState6[0],
    setFormColWrapRect = _useState6[1];
  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    radioGroupNoWrapRect = _useState8[0],
    setRadioGroupNoWrapRect = _useState8[1];
  var finalInitFullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var _useState9 = useState(finalInitFullWidth),
    _useState0 = _slicedToArray(_useState9, 2),
    fullWidth = _useState0[0],
    setFullWidth = _useState0[1];
  var t2;
  var t3;
  if ($[34] !== finalInitFullWidth) {
    t2 = function t2() {
      return setFullWidth(finalInitFullWidth);
    };
    t3 = [finalInitFullWidth];
    $[34] = finalInitFullWidth;
    $[35] = t2;
    $[36] = t3;
  } else {
    t2 = $[35];
    t3 = $[36];
  }
  useFirstSkipChanged(t2, t3);
  var _useState1 = useState(initError),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    _setError = _useState10[1];
  var t4;
  var t5;
  if ($[37] !== initError) {
    t4 = function t4() {
      return _setError(initError);
    };
    t5 = [initError];
    $[37] = initError;
    $[38] = t4;
    $[39] = t5;
  } else {
    t4 = $[38];
    t5 = $[39];
  }
  useFirstSkipChanged(t4, t5);
  var errorRef = useAutoUpdateRef(error);
  var t6;
  if ($[40] !== errorRef) {
    t6 = function t6(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[40] = errorRef;
    $[41] = t6;
  } else {
    t6 = $[41];
  }
  var setError = t6;
  var _useState11 = useState(initData),
    _useState12 = _slicedToArray(_useState11, 2),
    data = _useState12[0],
    _setData = _useState12[1];
  var t7;
  var t8;
  if ($[42] !== initData) {
    t7 = function t7() {
      return _setData(initData);
    };
    t8 = [initData];
    $[42] = initData;
    $[43] = t7;
    $[44] = t8;
  } else {
    t7 = $[43];
    t8 = $[44];
  }
  useFirstSkipChanged(t7, t8);
  var dataRef = useAutoUpdateRef(data);
  var t9;
  if ($[45] !== dataRef) {
    t9 = function t9(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[45] = dataRef;
    $[46] = t9;
  } else {
    t9 = $[46];
  }
  var setData = t9;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState13 = useState(finalInitDisabled),
    _useState14 = _slicedToArray(_useState13, 2),
    disabled = _useState14[0],
    setDisabled = _useState14[1];
  var t10;
  var t11;
  if ($[47] !== finalInitDisabled) {
    t10 = function t10() {
      return setDisabled(finalInitDisabled);
    };
    t11 = [finalInitDisabled];
    $[47] = finalInitDisabled;
    $[48] = t10;
    $[49] = t11;
  } else {
    t10 = $[48];
    t11 = $[49];
  }
  useFirstSkipChanged(t10, t11);
  var _useState15 = useState(initHidden),
    _useState16 = _slicedToArray(_useState15, 2),
    hidden = _useState16[0],
    setHidden = _useState16[1];
  var t12;
  var t13;
  if ($[50] !== initHidden) {
    t12 = function t12() {
      return setHidden(initHidden);
    };
    t13 = [initHidden];
    $[50] = initHidden;
    $[51] = t12;
    $[52] = t13;
  } else {
    t12 = $[51];
    t13 = $[52];
  }
  useFirstSkipChanged(t12, t13);
  var finalInitWidth = initWidth || "100%";
  var _useState17 = useState(finalInitWidth),
    _useState18 = _slicedToArray(_useState17, 2),
    width = _useState18[0],
    setWidth = _useState18[1];
  var t14;
  var t15;
  if ($[53] !== finalInitWidth) {
    t14 = function t14() {
      return setWidth(finalInitWidth);
    };
    t15 = [finalInitWidth];
    $[53] = finalInitWidth;
    $[54] = t14;
    $[55] = t15;
  } else {
    t14 = $[54];
    t15 = $[55];
  }
  useFirstSkipChanged(t14, t15);
  var _useState19 = useState(initLoading),
    _useState20 = _slicedToArray(_useState19, 2),
    loading = _useState20[0],
    _setLoading = _useState20[1];
  var t16;
  var t17;
  if ($[56] !== initLoading) {
    t16 = function t16() {
      return _setLoading(initLoading);
    };
    t17 = [initLoading];
    $[56] = initLoading;
    $[57] = t16;
    $[58] = t17;
  } else {
    t16 = $[57];
    t17 = $[58];
  }
  useFirstSkipChanged(t16, t17);
  var loadingRef = useAutoUpdateRef(loading);
  var t18;
  if ($[59] !== loadingRef) {
    t18 = function t18(newValue_1) {
      _setLoading(newValue_1);
      loadingRef.current = newValue_1;
    };
    $[59] = loadingRef;
    $[60] = t18;
  } else {
    t18 = $[60];
  }
  var setLoading = t18;
  var _useState21 = useState(initItems),
    _useState22 = _slicedToArray(_useState21, 2),
    items = _useState22[0],
    _setItems = _useState22[1];
  var t19;
  var t20;
  if ($[61] !== initItems) {
    t19 = function t19() {
      return _setItems(initItems);
    };
    t20 = [initItems];
    $[61] = initItems;
    $[62] = t19;
    $[63] = t20;
  } else {
    t19 = $[62];
    t20 = $[63];
  }
  useFirstSkipChanged(t19, t20);
  var itemsRef = useAutoUpdateRef(items);
  var t21;
  if ($[64] !== itemsRef) {
    t21 = function t21(newValue_2) {
      _setItems(newValue_2);
      itemsRef.current = newValue_2;
    };
    $[64] = itemsRef;
    $[65] = t21;
  } else {
    t21 = $[65];
  }
  var setItems = t21;
  var _useResizeDetector = useResizeDetector({
      handleWidth: true,
      handleHeight: false,
      onResize: function onResize() {
        var _resizeWidthDetectorR;
        setRadioGroupNoWrapRect((_resizeWidthDetectorR = resizeWidthDetectorRef.current) === null || _resizeWidthDetectorR === void 0 ? void 0 : _resizeWidthDetectorR.getBoundingClientRect());
      }
    }),
    t22 = _useResizeDetector.ref;
  var resizeWidthDetectorRef = t22;
  var _useResizeDetector2 = useResizeDetector(),
    height = _useResizeDetector2.height,
    resizeHeightDetectorRef = _useResizeDetector2.ref;
  var _useResizeDetector3 = useResizeDetector(),
    realHeight = _useResizeDetector3.height,
    resizeRealHeightDetectorRef = _useResizeDetector3.ref;
  var t23;
  if ($[66] !== setError) {
    t23 = function t23(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[66] = setError;
    $[67] = t23;
  } else {
    t23 = $[67];
  }
  var setErrorErrorHelperText = t23;
  var t24;
  if ($[68] !== onValidateRef || $[69] !== required || $[70] !== setErrorErrorHelperText) {
    t24 = function t24(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[68] = onValidateRef;
    $[69] = required;
    $[70] = setErrorErrorHelperText;
    $[71] = t24;
  } else {
    t24 = $[71];
  }
  var validate = t24;
  var t25;
  if ($[72] !== onValue) {
    t25 = function t25(value_0) {
      return onValue ? onValue(value_0) : value_0;
    };
    $[72] = onValue;
    $[73] = t25;
  } else {
    t25 = $[73];
  }
  var getFinalValue = t25;
  var getFinalValueRef = useAutoUpdateRef(getFinalValue);
  var t26;
  if ($[74] !== getFinalValue || $[75] !== initValue) {
    t26 = getFinalValue(initValue);
    $[74] = getFinalValue;
    $[75] = initValue;
    $[76] = t26;
  } else {
    t26 = $[76];
  }
  var _useState23 = useState(t26),
    _useState24 = _slicedToArray(_useState23, 2),
    value_1 = _useState24[0],
    _setValue = _useState24[1];
  var t27;
  if ($[77] !== getFinalValue || $[78] !== initValue) {
    t27 = function t27() {
      return _setValue(getFinalValue(initValue));
    };
    $[77] = getFinalValue;
    $[78] = initValue;
    $[79] = t27;
  } else {
    t27 = $[79];
  }
  var t28;
  if ($[80] !== initValue) {
    t28 = [initValue];
    $[80] = initValue;
    $[81] = t28;
  } else {
    t28 = $[81];
  }
  useFirstSkipChanged(t27, t28);
  var valueRef = useAutoUpdateRef(value_1);
  var t29;
  if ($[82] !== valueRef) {
    t29 = function t29(newValue_3) {
      _setValue(newValue_3);
      valueRef.current = newValue_3;
    };
    $[82] = valueRef;
    $[83] = t29;
  } else {
    t29 = $[83];
  }
  var setValue = t29;
  var t30;
  if ($[84] !== error || $[85] !== getFinalValueRef || $[86] !== name || $[87] !== onChangeRef || $[88] !== onValueChange || $[89] !== setValue || $[90] !== validate) {
    t30 = function t30(newValue_4, t31) {
      var _onChangeRef$current;
      var skipGetFinalValue = t31 === undefined ? false : t31;
      var finalValue = skipGetFinalValue ? newValue_4 : getFinalValueRef.current(newValue_4);
      setValue(finalValue);
      if (error) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[84] = error;
    $[85] = getFinalValueRef;
    $[86] = name;
    $[87] = onChangeRef;
    $[88] = onValueChange;
    $[89] = setValue;
    $[90] = validate;
    $[91] = t30;
  } else {
    t30 = $[91];
  }
  var updateValue = t30;
  var t31;
  if ($[92] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31() {
      var _firstInputRef$curren;
      (_firstInputRef$curren = firstInputRef.current) === null || _firstInputRef$curren === void 0 || _firstInputRef$curren.focus();
    };
    $[92] = t31;
  } else {
    t31 = $[92];
  }
  var focus = t31;
  var t32;
  if ($[93] !== onLoadItemsRef || $[94] !== setItems) {
    t32 = function t32() {
      if (onLoadItemsRef.current) {
        onLoadItemsRef.current().then(function (items_0) {
          setItems(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[93] = onLoadItemsRef;
    $[94] = setItems;
    $[95] = t32;
  } else {
    t32 = $[95];
  }
  var t33;
  if ($[96] === Symbol["for"]("react.memo_cache_sentinel")) {
    t33 = [];
    $[96] = t33;
  } else {
    t33 = $[96];
  }
  useEventEffect(t32, t33);
  var t34;
  if ($[97] !== fullWidth || $[98] !== initWidth || $[99] !== resizeWidthDetectorRef) {
    t34 = function t34() {
      if (!fullWidth || initWidth) {
        var _findParentByClassName = function findParentByClassName(element, className_0) {
          var parent = element.parentElement;
          if (parent) {
            if ((parent.className || "").includes(className_0)) {
              return parent;
            } else {
              return _findParentByClassName(parent, className_0);
            }
          }
        };
        var wrap = baseRef.current && _findParentByClassName(baseRef.current, "FormCol-Children-Wrap");
        if (wrap) {
          var resize = function resize() {
            if (resizeWidthDetectorRef.current) {
              setRadioGroupNoWrapRect(resizeWidthDetectorRef.current.getBoundingClientRect());
            }
            setFormColWrapRect(wrap.getBoundingClientRect());
          };
          window.addEventListener("resize", resize);
          resize();
          return function () {
            window.removeEventListener("resize", resize);
          };
        }
      }
    };
    $[97] = fullWidth;
    $[98] = initWidth;
    $[99] = resizeWidthDetectorRef;
    $[100] = t34;
  } else {
    t34 = $[100];
  }
  var t35;
  if ($[101] !== fullWidth || $[102] !== initWidth) {
    t35 = [fullWidth, initWidth];
    $[101] = fullWidth;
    $[102] = initWidth;
    $[103] = t35;
  } else {
    t35 = $[103];
  }
  useEventEffect(t34, t35);
  var t36;
  var t37;
  if ($[104] !== formColWrapRect || $[105] !== formFullWidth || $[106] !== initFullWidth || $[107] !== initWidth || $[108] !== radioGroupNoWrapRect) {
    t36 = function t36() {
      var width_0;
      var fullWidth_0 = initFullWidth == null ? formFullWidth : initFullWidth;
      if (initWidth) {
        width_0 = initWidth;
      } else {
        if (fullWidth_0) {
          width_0 = "100%";
        } else {
          if (radioGroupNoWrapRect !== null && radioGroupNoWrapRect !== void 0 && radioGroupNoWrapRect.width) {
            width_0 = radioGroupNoWrapRect.width + PADDING_LEFT;
          }
        }
      }
      var formColWrapPaddingLeft = radioGroupNoWrapRect && formColWrapRect ? radioGroupNoWrapRect.left - formColWrapRect.left : 0;
      if ((!fullWidth_0 || !!initWidth) && width_0 && formColWrapRect !== null && formColWrapRect !== void 0 && formColWrapRect.width) {
        if (typeof width_0 === "number" && width_0 > formColWrapRect.width - formColWrapPaddingLeft) {
          width_0 = formColWrapRect.width - formColWrapPaddingLeft;
          fullWidth_0 = false;
        }
      }
      setWidth(width_0);
      setFullWidth(fullWidth_0);
    };
    t37 = [initWidth, formFullWidth, initFullWidth, formColWrapRect, radioGroupNoWrapRect];
    $[104] = formColWrapRect;
    $[105] = formFullWidth;
    $[106] = initFullWidth;
    $[107] = initWidth;
    $[108] = radioGroupNoWrapRect;
    $[109] = t36;
    $[110] = t37;
  } else {
    t36 = $[109];
    t37 = $[110];
  }
  useFirstSkipEffect(t36, t37);
  var t38;
  if ($[111] !== name) {
    t38 = function t38() {
      return name;
    };
    $[111] = name;
    $[112] = t38;
  } else {
    t38 = $[112];
  }
  var t39;
  if ($[113] !== getFinalValueRef || $[114] !== initValueRef) {
    t39 = function t39() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[113] = getFinalValueRef;
    $[114] = initValueRef;
    $[115] = t39;
  } else {
    t39 = $[115];
  }
  var t40;
  if ($[116] !== initValueRef || $[117] !== updateValue) {
    t40 = function t40() {
      return updateValue(initValueRef.current);
    };
    $[116] = initValueRef;
    $[117] = updateValue;
    $[118] = t40;
  } else {
    t40 = $[118];
  }
  var t41;
  if ($[119] !== valueRef) {
    t41 = function t41() {
      return valueRef.current;
    };
    $[119] = valueRef;
    $[120] = t41;
  } else {
    t41 = $[120];
  }
  var t42;
  if ($[121] !== dataRef) {
    t42 = function t42() {
      return dataRef.current;
    };
    $[121] = dataRef;
    $[122] = t42;
  } else {
    t42 = $[122];
  }
  var t43;
  if ($[123] !== exceptValue) {
    t43 = function t43() {
      return !!exceptValue;
    };
    $[123] = exceptValue;
    $[124] = t43;
  } else {
    t43 = $[124];
  }
  var t44;
  if ($[125] !== disabled) {
    t44 = function t44() {
      return !!disabled;
    };
    $[125] = disabled;
    $[126] = t44;
  } else {
    t44 = $[126];
  }
  var t45;
  if ($[127] !== hidden) {
    t45 = function t45() {
      return !!hidden;
    };
    $[127] = hidden;
    $[128] = t45;
  } else {
    t45 = $[128];
  }
  var t46;
  if ($[129] !== validate || $[130] !== valueRef) {
    t46 = function t46() {
      return validate(valueRef.current);
    };
    $[129] = validate;
    $[130] = valueRef;
    $[131] = t46;
  } else {
    t46 = $[131];
  }
  var t47;
  if ($[132] !== itemsRef) {
    t47 = function t47() {
      return itemsRef.current;
    };
    $[132] = itemsRef;
    $[133] = t47;
  } else {
    t47 = $[133];
  }
  var t48;
  if ($[134] !== setItems) {
    t48 = function t48(v) {
      return setItems(v);
    };
    $[134] = setItems;
    $[135] = t48;
  } else {
    t48 = $[135];
  }
  var t49;
  if ($[136] !== loadingRef) {
    t49 = function t49() {
      return !!loadingRef.current;
    };
    $[136] = loadingRef;
    $[137] = t49;
  } else {
    t49 = $[137];
  }
  var t50;
  if ($[138] !== onLoadItemsRef || $[139] !== setItems) {
    t50 = function t50() {
      if (onLoadItemsRef.current) {
        setIsOnGetItemLoading(true);
        onLoadItemsRef.current().then(function (items_1) {
          setItems(items_1);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[138] = onLoadItemsRef;
    $[139] = setItems;
    $[140] = t50;
  } else {
    t50 = $[140];
  }
  var t51;
  if ($[141] !== setData || $[142] !== setErrorErrorHelperText || $[143] !== setLoading || $[144] !== t38 || $[145] !== t39 || $[146] !== t40 || $[147] !== t41 || $[148] !== t42 || $[149] !== t43 || $[150] !== t44 || $[151] !== t45 || $[152] !== t46 || $[153] !== t47 || $[154] !== t48 || $[155] !== t49 || $[156] !== t50 || $[157] !== updateValue) {
    t51 = {
      getType: _temp$p,
      getName: t38,
      getReset: t39,
      reset: t40,
      getValue: t41,
      setValue: updateValue,
      getData: t42,
      setData: setData,
      isExceptValue: t43,
      isDisabled: t44,
      setDisabled: setDisabled,
      isHidden: t45,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t46,
      setError: setErrorErrorHelperText,
      getItems: t47,
      setItems: t48,
      getLoading: t49,
      setLoading: setLoading,
      reloadItems: t50
    };
    $[141] = setData;
    $[142] = setErrorErrorHelperText;
    $[143] = setLoading;
    $[144] = t38;
    $[145] = t39;
    $[146] = t40;
    $[147] = t41;
    $[148] = t42;
    $[149] = t43;
    $[150] = t44;
    $[151] = t45;
    $[152] = t46;
    $[153] = t47;
    $[154] = t48;
    $[155] = t49;
    $[156] = t50;
    $[157] = updateValue;
    $[158] = t51;
  } else {
    t51 = $[158];
  }
  var commands = t51;
  var t52;
  if ($[159] !== id || $[160] !== onAddValueItem) {
    t52 = function t52(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[159] = id;
    $[160] = onAddValueItem;
    $[161] = t52;
  } else {
    t52 = $[161];
  }
  var t53;
  if ($[162] !== id || $[163] !== onRemoveValueItem) {
    t53 = function t53() {
      return onRemoveValueItem(id);
    };
    $[162] = id;
    $[163] = onRemoveValueItem;
    $[164] = t53;
  } else {
    t53 = $[164];
  }
  useForwardRef(ref, commands, t52, t53);
  var t54;
  if ($[165] !== getFinalValueRef || $[166] !== items || $[167] !== name || $[168] !== onRequestSearchSubmit || $[169] !== onValueChangeByUser || $[170] !== readOnly || $[171] !== updateValue || $[172] !== valueRef) {
    t54 = function t54(e) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_0 = e.target.value;
        if (items) {
          var item = items.find(function (t55) {
            var value_2 = t55.value;
            return value_2.toString() === finalValue_0;
          });
          if (item) {
            finalValue_0 = item.value;
          }
        }
        finalValue_0 = getFinalValueRef.current(finalValue_0);
        if (valueRef.current !== finalValue_0) {
          updateValue(finalValue_0, true);
          setTimeout(function () {
            onValueChangeByUser(name, finalValue_0);
            onRequestSearchSubmit(name, finalValue_0);
          });
        }
      }
    };
    $[165] = getFinalValueRef;
    $[166] = items;
    $[167] = name;
    $[168] = onRequestSearchSubmit;
    $[169] = onValueChangeByUser;
    $[170] = readOnly;
    $[171] = updateValue;
    $[172] = valueRef;
    $[173] = t54;
  } else {
    t54 = $[173];
  }
  var handleChange = t54;
  var t55;
  if ($[174] !== color || $[175] !== disabled || $[176] !== error || $[177] !== items || $[178] !== readOnly || $[179] !== resizeHeightDetectorRef || $[180] !== size || $[181] !== theme.palette.error.main) {
    t55 = items === null || items === void 0 ? void 0 : items.map(function (t56, idx) {
      var value_3 = t56.value,
        label_0 = t56.label,
        itemDisabled = t56.disabled;
      return /*#__PURE__*/React.createElement(FormControlLabel, {
        ref: idx === 0 ? function (ref_0) {
          resizeHeightDetectorRef.current = ref_0;
        } : null,
        key: idx,
        control: /*#__PURE__*/React.createElement(Radio, {
          icon: /*#__PURE__*/React.createElement(RadioButtonUnchecked, {
            color: error ? "error" : undefined
          }),
          checkedIcon: /*#__PURE__*/React.createElement(RadioButtonChecked, {
            color: error ? "error" : undefined
          }),
          color: color,
          size: size
        }),
        label: label_0,
        style: {
          color: error ? theme.palette.error.main : "",
          marginTop: -5,
          marginBottom: -5,
          whiteSpace: "nowrap"
        },
        value: value_3,
        disabled: disabled || readOnly || itemDisabled
      });
    });
    $[174] = color;
    $[175] = disabled;
    $[176] = error;
    $[177] = items;
    $[178] = readOnly;
    $[179] = resizeHeightDetectorRef;
    $[180] = size;
    $[181] = theme.palette.error.main;
    $[182] = t55;
  } else {
    t55 = $[182];
  }
  var hiddenItemsControl = t55;
  var t56;
  if ($[183] !== color || $[184] !== disabled || $[185] !== error || $[186] !== items || $[187] !== readOnly || $[188] !== size || $[189] !== theme.palette.error.main) {
    t56 = items === null || items === void 0 ? void 0 : items.map(function (t57, idx_0) {
      var value_4 = t57.value,
        label_1 = t57.label,
        itemDisabled_0 = t57.disabled;
      return /*#__PURE__*/React.createElement(FormControlLabel, {
        key: idx_0,
        control: /*#__PURE__*/React.createElement(Radio, {
          icon: /*#__PURE__*/React.createElement(RadioButtonUnchecked, {
            color: error ? "error" : undefined
          }),
          checkedIcon: /*#__PURE__*/React.createElement(RadioButtonChecked, {
            color: error ? "error" : undefined
          }),
          color: color,
          size: size,
          slotProps: idx_0 === 0 ? {
            input: {
              ref: firstInputRef
            }
          } : undefined
        }),
        label: label_1,
        style: {
          color: error ? theme.palette.error.main : "",
          whiteSpace: "nowrap",
          marginTop: -5,
          marginBottom: -5
        },
        value: value_4,
        disabled: disabled || readOnly || itemDisabled_0
      });
    });
    $[183] = color;
    $[184] = disabled;
    $[185] = error;
    $[186] = items;
    $[187] = readOnly;
    $[188] = size;
    $[189] = theme.palette.error.main;
    $[190] = t56;
  } else {
    t56 = $[190];
  }
  var itemsControl = t56;
  var t57 = fullWidth ? "100%" : undefined;
  var t58;
  if ($[191] !== t57) {
    t58 = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: t57
    };
    $[191] = t57;
    $[192] = t58;
  } else {
    t58 = $[192];
  }
  var t59;
  if ($[193] !== startAdornment) {
    t59 = startAdornment && /*#__PURE__*/React.createElement("div", null, startAdornment);
    $[193] = startAdornment;
    $[194] = t59;
  } else {
    t59 = $[194];
  }
  var t60;
  if ($[195] === Symbol["for"]("react.memo_cache_sentinel")) {
    t60 = {
      flex: 1
    };
    $[195] = t60;
  } else {
    t60 = $[195];
  }
  var t61;
  if ($[196] !== fullWidth || $[197] !== handleChange || $[198] !== hiddenItemsControl || $[199] !== inline || $[200] !== isOnGetItemLoading || $[201] !== items || $[202] !== loading || $[203] !== name || $[204] !== props || $[205] !== resizeWidthDetectorRef || $[206] !== value_1) {
    t61 = !fullWidth && !isOnGetItemLoading && !loading && items && /*#__PURE__*/React.createElement("div", {
      ref: resizeWidthDetectorRef,
      style: {
        display: "grid",
        position: "absolute",
        whiteSpace: "nowrap",
        visibility: "hidden"
      }
    }, /*#__PURE__*/React.createElement(RadioGroup, _extends({}, props, {
      style: {
        display: "inline-flex",
        flexWrap: "nowrap"
      },
      name: name,
      row: inline,
      value: value_1 === undefined ? null : value_1,
      onChange: handleChange
    }), hiddenItemsControl));
    $[196] = fullWidth;
    $[197] = handleChange;
    $[198] = hiddenItemsControl;
    $[199] = inline;
    $[200] = isOnGetItemLoading;
    $[201] = items;
    $[202] = loading;
    $[203] = name;
    $[204] = props;
    $[205] = resizeWidthDetectorRef;
    $[206] = value_1;
    $[207] = t61;
  } else {
    t61 = $[207];
  }
  var t62;
  if ($[208] !== resizeRealHeightDetectorRef) {
    t62 = function t62(ref_1) {
      resizeRealHeightDetectorRef.current = ref_1;
    };
    $[208] = resizeRealHeightDetectorRef;
    $[209] = t62;
  } else {
    t62 = $[209];
  }
  var t63 = width == null ? "hidden" : undefined;
  var t64 = width == null ? "absolute" : undefined;
  var t65 = nowrap ? "nowrap" : undefined;
  var t66;
  if ($[210] !== t63 || $[211] !== t64 || $[212] !== t65) {
    t66 = {
      display: "inline-flex",
      visibility: t63,
      position: t64,
      flexWrap: t65
    };
    $[210] = t63;
    $[211] = t64;
    $[212] = t65;
    $[213] = t66;
  } else {
    t66 = $[213];
  }
  var t67 = value_1 === undefined ? null : value_1;
  var t68;
  if ($[214] !== color || $[215] !== isOnGetItemLoading || $[216] !== itemsControl || $[217] !== loading || $[218] !== size) {
    t68 = isOnGetItemLoading || loading ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(FormControlLabel, {
      label: "",
      control: /*#__PURE__*/React.createElement(Radio, {
        color: color,
        size: size
      }),
      style: {
        visibility: "hidden"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 11,
        opacity: 0.54
      }
    }, /*#__PURE__*/React.createElement(CircularProgress, {
      size: size === "small" ? 12 : 16,
      color: "inherit"
    }))) : itemsControl;
    $[214] = color;
    $[215] = isOnGetItemLoading;
    $[216] = itemsControl;
    $[217] = loading;
    $[218] = size;
    $[219] = t68;
  } else {
    t68 = $[219];
  }
  var t69;
  if ($[220] !== handleChange || $[221] !== inline || $[222] !== name || $[223] !== props || $[224] !== t62 || $[225] !== t66 || $[226] !== t67 || $[227] !== t68) {
    t69 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RadioGroup, _extends({}, props, {
      ref: t62,
      style: t66,
      name: name,
      row: inline,
      value: t67,
      onChange: handleChange
    }), t68));
    $[220] = handleChange;
    $[221] = inline;
    $[222] = name;
    $[223] = props;
    $[224] = t62;
    $[225] = t66;
    $[226] = t67;
    $[227] = t68;
    $[228] = t69;
  } else {
    t69 = $[228];
  }
  var t70;
  if ($[229] !== t61 || $[230] !== t69) {
    t70 = /*#__PURE__*/React.createElement("div", {
      style: t60
    }, t61, t69);
    $[229] = t61;
    $[230] = t69;
    $[231] = t70;
  } else {
    t70 = $[231];
  }
  var t71;
  if ($[232] !== endAdornment) {
    t71 = endAdornment && /*#__PURE__*/React.createElement("div", null, endAdornment);
    $[232] = endAdornment;
    $[233] = t71;
  } else {
    t71 = $[233];
  }
  var t72;
  if ($[234] !== t58 || $[235] !== t59 || $[236] !== t70 || $[237] !== t71) {
    t72 = /*#__PURE__*/React.createElement("div", {
      style: t58
    }, t59, t70, t71);
    $[234] = t58;
    $[235] = t59;
    $[236] = t70;
    $[237] = t71;
    $[238] = t72;
  } else {
    t72 = $[238];
  }
  var control = t72;
  var singleHeight = height || (size === "small" ? 35 : 39);
  var isMultiline = singleHeight <= (realHeight !== null && realHeight !== void 0 ? realHeight : 0);
  var t73;
  if ($[239] !== className) {
    t73 = classNames(className, "PFormValueItem", "PFormRadioGroup");
    $[239] = className;
    $[240] = t73;
  } else {
    t73 = $[240];
  }
  var t74 = error ? errorHelperText : helperText;
  var t75 = isMultiline && notEmpty(label) ? 20 : 0;
  var t76;
  if ($[241] !== t75) {
    t76 = {
      style: {
        marginLeft: 2,
        marginTop: t75
      }
    };
    $[241] = t75;
    $[242] = t76;
  } else {
    t76 = $[242];
  }
  var t77;
  if ($[243] !== initStyle || $[244] !== width) {
    t77 = _objectSpread2({
      width: width,
      paddingLeft: PADDING_LEFT
    }, initStyle);
    $[243] = initStyle;
    $[244] = width;
    $[245] = t77;
  } else {
    t77 = $[245];
  }
  var t78 = realHeight ? realHeight : singleHeight;
  var t79 = isMultiline && size === "medium" ? 4 : undefined;
  var t80;
  if ($[246] !== t79) {
    t80 = {
      paddingTop: t79
    };
    $[246] = t79;
    $[247] = t80;
  } else {
    t80 = $[247];
  }
  var t81 = !isMultiline;
  var t82;
  if ($[248] !== color || $[249] !== control || $[250] !== error || $[251] !== focused || $[252] !== fullWidth || $[253] !== hidden || $[254] !== label || $[255] !== labelIcon || $[256] !== required || $[257] !== size || $[258] !== sx || $[259] !== t73 || $[260] !== t74 || $[261] !== t76 || $[262] !== t77 || $[263] !== t78 || $[264] !== t80 || $[265] !== t81 || $[266] !== variant) {
    t82 = /*#__PURE__*/React.createElement(PFormItemBase, {
      focused: focused,
      ref: baseRef,
      className: t73,
      variant: variant,
      size: size,
      color: color,
      labelIcon: labelIcon,
      label: label,
      fullWidth: fullWidth,
      required: required,
      error: error,
      helperText: t74,
      helperTextProps: t76,
      style: t77,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t78,
      controlContainerStyle: t80,
      controlVerticalCenter: t81,
      control: control
    });
    $[248] = color;
    $[249] = control;
    $[250] = error;
    $[251] = focused;
    $[252] = fullWidth;
    $[253] = hidden;
    $[254] = label;
    $[255] = labelIcon;
    $[256] = required;
    $[257] = size;
    $[258] = sx;
    $[259] = t73;
    $[260] = t74;
    $[261] = t76;
    $[262] = t77;
    $[263] = t78;
    $[264] = t80;
    $[265] = t81;
    $[266] = variant;
    $[267] = t82;
  } else {
    t82 = $[267];
  }
  return t82;
}
function _temp$p() {
  return "PFormRadioGroup";
}insertStyle(".PFormToggleButtonGroup.loading .PFormItemBase-Control-wrap .PFormItemBase-Control{align-items:center !important}.PFormToggleButtonGroup .ToggleButton{display:inline-flex;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-items:center}.PFormToggleButtonGroup .ToggleButton .__label__{height:0;line-height:0 !important;overflow:visible !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton,.PFormToggleButtonGroup.type-radio .ToggleButton{padding-left:3px;padding-right:5px;border:0 !important;margin-left:0 !important;justify-content:flex-start;display:flex;background-color:rgba(0,0,0,0) !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton:not(:last-child),.PFormToggleButtonGroup.type-radio .ToggleButton:not(:last-child){margin-right:5px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-unchecked__{margin-right:3px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__{display:none}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected.Mui-disabled,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected.Mui-disabled{opacity:.5}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-checked__{display:block}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-unchecked__{display:none}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}");function PFormToggleButtonGroup(t0) {
  var $ = c(235);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initFullWidth = t0.fullWidth,
    name = t0.name,
    labelIcon = t0.labelIcon,
    label = t0.label,
    t1 = t0.type,
    initLoading = t0.loading,
    initItems = t0.items,
    initValue = t0.value,
    initData = t0.data,
    initError = t0.error,
    helperText = t0.helperText,
    initDisabled = t0.disabled,
    readOnly = t0.readOnly,
    required = t0.required,
    notAllowEmptyValue = t0.notAllowEmptyValue,
    exceptValue = t0.exceptValue,
    initWidth = t0.width,
    multiple = t0.multiple,
    t2 = t0.formValueSeparator,
    formValueSort = t0.formValueSort,
    initHidden = t0.hidden,
    itemWidth = t0.itemWidth,
    onLoadItems = t0.onLoadItems,
    startAdornment = t0.startAdornment,
    endAdornment = t0.endAdornment,
    onChange = t0.onChange,
    onValue = t0.onValue,
    onValidate = t0.onValidate,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var type = t1 === undefined ? "button" : t1;
  var formValueSeparator = t2 === undefined ? "," : t2;
  var id = useId();
  var labelId = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWidth = _useFormState.formColWidth,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var fullWidth = type === "checkbox" || type === "radio" ? true : initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initValueRef = useAutoUpdateRef(initValue);
  var onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(initFocused !== null && initFocused !== void 0 ? initFocused : formFocused),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  if ((initFocused !== null && initFocused !== void 0 ? initFocused : formFocused) !== focused) {
    setFocused(initFocused !== null && initFocused !== void 0 ? initFocused : formFocused);
  }
  var theme = useTheme();
  var t3;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = {
      handleHeight: false
    };
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  var _useResizeDetector = useResizeDetector(t3),
    refForResizeWidthDetect = _useResizeDetector.ref,
    width = _useResizeDetector.width;
  var t4;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = {
      handleWidth: false
    };
    $[1] = t4;
  } else {
    t4 = $[1];
  }
  var _useResizeDetector2 = useResizeDetector(t4),
    refForButtonResizeHeightDetect = _useResizeDetector2.ref,
    buttonHeight = _useResizeDetector2.height;
  var t5;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {
      handleWidth: false
    };
    $[2] = t5;
  } else {
    t5 = $[2];
  }
  var _useResizeDetector3 = useResizeDetector(t5),
    refForButtonsResizeHeightDetect = _useResizeDetector3.ref,
    realHeight = _useResizeDetector3.height;
  var t6;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = {
      handleWidth: false
    };
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  var _useResizeDetector4 = useResizeDetector(t6),
    refForLoadingResizeHeightDetect = _useResizeDetector4.ref,
    loadingHeight = _useResizeDetector4.height;
  var height = buttonHeight !== null && buttonHeight !== void 0 ? buttonHeight : loadingHeight;
  var _useState3 = useState(!!onLoadItems),
    _useState4 = _slicedToArray(_useState3, 2),
    isOnGetItemLoading = _useState4[0],
    setIsOnGetItemLoading = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    errorHelperText = _useState6[0],
    setErrorHelperText = _useState6[1];
  var _useState7 = useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  var t7;
  var t8;
  if ($[4] !== initError) {
    t7 = function t7() {
      return _setError(initError);
    };
    t8 = [initError];
    $[4] = initError;
    $[5] = t7;
    $[6] = t8;
  } else {
    t7 = $[5];
    t8 = $[6];
  }
  useFirstSkipChanged(t7, t8);
  var errorRef = useAutoUpdateRef(error);
  var t9;
  if ($[7] !== errorRef) {
    t9 = function t9(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[7] = errorRef;
    $[8] = t9;
  } else {
    t9 = $[8];
  }
  var setError = t9;
  var _useState9 = useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  var t10;
  var t11;
  if ($[9] !== initData) {
    t10 = function t10() {
      return _setData(initData);
    };
    t11 = [initData];
    $[9] = initData;
    $[10] = t10;
    $[11] = t11;
  } else {
    t10 = $[10];
    t11 = $[11];
  }
  useFirstSkipChanged(t10, t11);
  var dataRef = useAutoUpdateRef(data);
  var t12;
  if ($[12] !== dataRef) {
    t12 = function t12(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[12] = dataRef;
    $[13] = t12;
  } else {
    t12 = $[13];
  }
  var setData = t12;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  var t13;
  var t14;
  if ($[14] !== finalInitDisabled) {
    t13 = function t13() {
      return setDisabled(finalInitDisabled);
    };
    t14 = [finalInitDisabled];
    $[14] = finalInitDisabled;
    $[15] = t13;
    $[16] = t14;
  } else {
    t13 = $[15];
    t14 = $[16];
  }
  useFirstSkipChanged(t13, t14);
  var _useState11 = useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  var t15;
  var t16;
  if ($[17] !== initHidden) {
    t15 = function t15() {
      return setHidden(initHidden);
    };
    t16 = [initHidden];
    $[17] = initHidden;
    $[18] = t15;
    $[19] = t16;
  } else {
    t15 = $[18];
    t16 = $[19];
  }
  useFirstSkipChanged(t15, t16);
  var _useState13 = useState(initLoading),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    _setLoading = _useState14[1];
  var t17;
  var t18;
  if ($[20] !== initLoading) {
    t17 = function t17() {
      return _setLoading(initLoading);
    };
    t18 = [initLoading];
    $[20] = initLoading;
    $[21] = t17;
    $[22] = t18;
  } else {
    t17 = $[21];
    t18 = $[22];
  }
  useFirstSkipChanged(t17, t18);
  var loadingRef = useAutoUpdateRef(loading);
  var t19;
  if ($[23] !== loadingRef) {
    t19 = function t19(newValue_1) {
      _setLoading(newValue_1);
      loadingRef.current = newValue_1;
    };
    $[23] = loadingRef;
    $[24] = t19;
  } else {
    t19 = $[24];
  }
  var setLoading = t19;
  var _useState15 = useState(initItems),
    _useState16 = _slicedToArray(_useState15, 2),
    items = _useState16[0],
    _setItems = _useState16[1];
  var t20;
  var t21;
  if ($[25] !== initItems) {
    t20 = function t20() {
      return _setItems(initItems);
    };
    t21 = [initItems];
    $[25] = initItems;
    $[26] = t20;
    $[27] = t21;
  } else {
    t20 = $[26];
    t21 = $[27];
  }
  useFirstSkipChanged(t20, t21);
  var itemsRef = useAutoUpdateRef(items);
  var t22;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = function t22(newItems) {
      _setItems(newItems);
    };
    $[28] = t22;
  } else {
    t22 = $[28];
  }
  var setItems = t22;
  var t23;
  if (items) {
    var _t;
    if ($[29] !== items) {
      _t = items.reduce(_temp$o, {});
      $[29] = items;
      $[30] = _t;
    } else {
      _t = $[30];
    }
    t23 = _t;
  } else {
    var _t2;
    if ($[31] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t2 = {};
      $[31] = _t2;
    } else {
      _t2 = $[31];
    }
    t23 = _t2;
  }
  var itemsValues = t23;
  var finalWidth;
  if (initWidth) {
    finalWidth = initWidth;
  } else {
    if (isOnGetItemLoading) {
      finalWidth = 16;
    } else {
      if (fullWidth) {
        finalWidth = "100%";
      } else {
        finalWidth = width || 0;
        if (formColWidth) {
          if (finalWidth > formColWidth) {
            finalWidth = formColWidth;
          }
        }
      }
    }
  }
  var t24;
  if ($[32] !== finalWidth || $[33] !== initStyle) {
    t24 = _objectSpread2({
      width: finalWidth
    }, initStyle);
    $[32] = finalWidth;
    $[33] = initStyle;
    $[34] = t24;
  } else {
    t24 = $[34];
  }
  var style = t24;
  var t25;
  if ($[35] !== setError) {
    t25 = function t25(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[35] = setError;
    $[36] = t25;
  } else {
    t25 = $[36];
  }
  var setErrorErrorHelperText = t25;
  var t26;
  if ($[37] !== onValidateRef || $[38] !== required || $[39] !== setErrorErrorHelperText) {
    t26 = function t26(value_0) {
      if (required && empty(value_0)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_0);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[37] = onValidateRef;
    $[38] = required;
    $[39] = setErrorErrorHelperText;
    $[40] = t26;
  } else {
    t26 = $[40];
  }
  var validate = t26;
  var t27;
  if ($[41] !== refForButtonResizeHeightDetect) {
    t27 = function t27() {
      var _refForButtonResizeHe;
      (_refForButtonResizeHe = refForButtonResizeHeightDetect.current) === null || _refForButtonResizeHe === void 0 || _refForButtonResizeHe.focus();
    };
    $[41] = refForButtonResizeHeightDetect;
    $[42] = t27;
  } else {
    t27 = $[42];
  }
  var focus = t27;
  var t28;
  if ($[43] !== formValueSeparator || $[44] !== itemsValues || $[45] !== multiple || $[46] !== onValue) {
    t28 = function t28(value_1) {
      var finalValue = value_1;
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          if (finalValue != null && notEmpty(finalValue)) {
            if (typeof finalValue === "string") {
              finalValue = Array.from(new Set(finalValue.split(formValueSeparator)));
            } else {
              finalValue = [finalValue];
            }
          } else {
            finalValue = [];
          }
        }
      } else {
        if (Array.isArray(finalValue)) {
          if (notEmpty(finalValue)) {
            finalValue = finalValue[0];
          } else {
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
          } else {
            var realValue_0 = itemsValues["".concat(finalValue)];
            if (realValue_0 != null && finalValue !== realValue_0) {
              finalValue = realValue_0;
            }
          }
        }
      }
      finalValue = onValue ? onValue(finalValue) : finalValue;
      return equal(value_1, finalValue) ? value_1 : finalValue;
    };
    $[43] = formValueSeparator;
    $[44] = itemsValues;
    $[45] = multiple;
    $[46] = onValue;
    $[47] = t28;
  } else {
    t28 = $[47];
  }
  var getFinalValue = t28;
  var getFinalValueRef = useAutoUpdateRef(getFinalValue);
  var t29;
  if ($[48] !== getFinalValue || $[49] !== initValue) {
    t29 = getFinalValue(initValue);
    $[48] = getFinalValue;
    $[49] = initValue;
    $[50] = t29;
  } else {
    t29 = $[50];
  }
  var _useState17 = useState(t29),
    _useState18 = _slicedToArray(_useState17, 2),
    value_2 = _useState18[0],
    _setValue = _useState18[1];
  var t30;
  if ($[51] !== getFinalValue || $[52] !== initValue) {
    t30 = function t30() {
      return _setValue(getFinalValue(initValue));
    };
    $[51] = getFinalValue;
    $[52] = initValue;
    $[53] = t30;
  } else {
    t30 = $[53];
  }
  var t31;
  if ($[54] !== initValue) {
    t31 = [initValue];
    $[54] = initValue;
    $[55] = t31;
  } else {
    t31 = $[55];
  }
  useFirstSkipChanged(t30, t31);
  var valueRef = useAutoUpdateRef(value_2);
  var t32;
  if ($[56] !== valueRef) {
    t32 = function t32(newValue_2) {
      _setValue(newValue_2);
      valueRef.current = newValue_2;
    };
    $[56] = valueRef;
    $[57] = t32;
  } else {
    t32 = $[57];
  }
  var setValue = t32;
  var t33;
  if ($[58] !== error || $[59] !== getFinalValueRef || $[60] !== name || $[61] !== onChangeRef || $[62] !== onValueChange || $[63] !== setValue || $[64] !== validate) {
    t33 = function t33(newValue_3, t34) {
      var _onChangeRef$current;
      var skipGetFinalValue = t34 === undefined ? false : t34;
      var finalValue_0 = skipGetFinalValue ? newValue_3 : getFinalValueRef.current(newValue_3);
      setValue(finalValue_0);
      if (error) {
        validate(finalValue_0);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[58] = error;
    $[59] = getFinalValueRef;
    $[60] = name;
    $[61] = onChangeRef;
    $[62] = onValueChange;
    $[63] = setValue;
    $[64] = validate;
    $[65] = t33;
  } else {
    t33 = $[65];
  }
  var updateValue = t33;
  var t34;
  if ($[66] !== onLoadItemsRef) {
    t34 = function t34() {
      if (onLoadItemsRef.current) {
        onLoadItemsRef.current().then(function (items_0) {
          setItems(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[66] = onLoadItemsRef;
    $[67] = t34;
  } else {
    t34 = $[67];
  }
  var t35;
  if ($[68] === Symbol["for"]("react.memo_cache_sentinel")) {
    t35 = [];
    $[68] = t35;
  } else {
    t35 = $[68];
  }
  useEventEffect(t34, t35);
  var t36;
  if ($[69] !== updateValue || $[70] !== valueRef) {
    t36 = function t36() {
      updateValue(valueRef.current);
    };
    $[69] = updateValue;
    $[70] = valueRef;
    $[71] = t36;
  } else {
    t36 = $[71];
  }
  var t37;
  if ($[72] !== multiple) {
    t37 = [multiple];
    $[72] = multiple;
    $[73] = t37;
  } else {
    t37 = $[73];
  }
  useFirstSkipEffect(t36, t37);
  var t38;
  if ($[74] !== items || $[75] !== multiple || $[76] !== notAllowEmptyValue || $[77] !== updateValue || $[78] !== value_2) {
    t38 = function t38() {
      if (notAllowEmptyValue) {
        if (items && notEmpty(items)) {
          var setFirstItem = false;
          if (Array.isArray(value_2)) {
            if (empty(value_2)) {
              setFirstItem = true;
            }
          } else {
            if (value_2 == null) {
              setFirstItem = true;
            }
          }
          if (setFirstItem) {
            updateValue(multiple ? [items[0].value] : items[0].value);
          }
        }
      }
    };
    $[74] = items;
    $[75] = multiple;
    $[76] = notAllowEmptyValue;
    $[77] = updateValue;
    $[78] = value_2;
    $[79] = t38;
  } else {
    t38 = $[79];
  }
  var t39;
  if ($[80] !== items || $[81] !== multiple || $[82] !== notAllowEmptyValue || $[83] !== value_2) {
    t39 = [multiple, items, value_2, notAllowEmptyValue];
    $[80] = items;
    $[81] = multiple;
    $[82] = notAllowEmptyValue;
    $[83] = value_2;
    $[84] = t39;
  } else {
    t39 = $[84];
  }
  useEventEffect(t38, t39);
  var t40;
  if ($[85] !== name) {
    t40 = function t40() {
      return name;
    };
    $[85] = name;
    $[86] = t40;
  } else {
    t40 = $[86];
  }
  var t41;
  if ($[87] !== getFinalValueRef || $[88] !== initValueRef) {
    t41 = function t41() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[87] = getFinalValueRef;
    $[88] = initValueRef;
    $[89] = t41;
  } else {
    t41 = $[89];
  }
  var t42;
  if ($[90] !== initValueRef || $[91] !== updateValue) {
    t42 = function t42() {
      return updateValue(initValueRef.current);
    };
    $[90] = initValueRef;
    $[91] = updateValue;
    $[92] = t42;
  } else {
    t42 = $[92];
  }
  var t43;
  if ($[93] !== valueRef) {
    t43 = function t43() {
      return valueRef.current;
    };
    $[93] = valueRef;
    $[94] = t43;
  } else {
    t43 = $[94];
  }
  var t44;
  if ($[95] !== updateValue || $[96] !== valueRef) {
    t44 = function t44(v_0) {
      valueRef.current = updateValue(v_0);
    };
    $[95] = updateValue;
    $[96] = valueRef;
    $[97] = t44;
  } else {
    t44 = $[97];
  }
  var t45;
  if ($[98] !== dataRef) {
    t45 = function t45() {
      return dataRef.current;
    };
    $[98] = dataRef;
    $[99] = t45;
  } else {
    t45 = $[99];
  }
  var t46;
  if ($[100] !== exceptValue) {
    t46 = function t46() {
      return !!exceptValue;
    };
    $[100] = exceptValue;
    $[101] = t46;
  } else {
    t46 = $[101];
  }
  var t47;
  if ($[102] !== disabled) {
    t47 = function t47() {
      return !!disabled;
    };
    $[102] = disabled;
    $[103] = t47;
  } else {
    t47 = $[103];
  }
  var t48;
  if ($[104] !== hidden) {
    t48 = function t48() {
      return !!hidden;
    };
    $[104] = hidden;
    $[105] = t48;
  } else {
    t48 = $[105];
  }
  var t49;
  if ($[106] !== validate || $[107] !== valueRef) {
    t49 = function t49() {
      return validate(valueRef.current);
    };
    $[106] = validate;
    $[107] = valueRef;
    $[108] = t49;
  } else {
    t49 = $[108];
  }
  var t50;
  if ($[109] !== formValueSeparator) {
    t50 = function t50() {
      return formValueSeparator;
    };
    $[109] = formValueSeparator;
    $[110] = t50;
  } else {
    t50 = $[110];
  }
  var t51;
  if ($[111] !== formValueSort) {
    t51 = function t51() {
      return !!formValueSort;
    };
    $[111] = formValueSort;
    $[112] = t51;
  } else {
    t51 = $[112];
  }
  var t52;
  if ($[113] !== itemsRef) {
    t52 = function t52() {
      return itemsRef.current;
    };
    $[113] = itemsRef;
    $[114] = t52;
  } else {
    t52 = $[114];
  }
  var t53;
  if ($[115] !== multiple) {
    t53 = function t53() {
      return !!multiple;
    };
    $[115] = multiple;
    $[116] = t53;
  } else {
    t53 = $[116];
  }
  var t54;
  if ($[117] !== loadingRef) {
    t54 = function t54() {
      return !!loadingRef.current;
    };
    $[117] = loadingRef;
    $[118] = t54;
  } else {
    t54 = $[118];
  }
  var t55;
  if ($[119] !== onLoadItemsRef) {
    t55 = function t55() {
      if (onLoadItemsRef.current) {
        setIsOnGetItemLoading(true);
        onLoadItemsRef.current().then(function (items_1) {
          setItems(items_1);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[119] = onLoadItemsRef;
    $[120] = t55;
  } else {
    t55 = $[120];
  }
  var t56;
  if ($[121] !== focus || $[122] !== setData || $[123] !== setErrorErrorHelperText || $[124] !== setLoading || $[125] !== t40 || $[126] !== t41 || $[127] !== t42 || $[128] !== t43 || $[129] !== t44 || $[130] !== t45 || $[131] !== t46 || $[132] !== t47 || $[133] !== t48 || $[134] !== t49 || $[135] !== t50 || $[136] !== t51 || $[137] !== t52 || $[138] !== t53 || $[139] !== t54 || $[140] !== t55) {
    t56 = {
      getType: _temp2$3,
      getName: t40,
      getReset: t41,
      reset: t42,
      getValue: t43,
      setValue: t44,
      getData: t45,
      setData: setData,
      isExceptValue: t46,
      isDisabled: t47,
      setDisabled: setDisabled,
      isHidden: t48,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t49,
      setError: setErrorErrorHelperText,
      getFormValueSeparator: t50,
      isFormValueSort: t51,
      getItems: t52,
      setItems: setItems,
      isMultiple: t53,
      getLoading: t54,
      setLoading: setLoading,
      reloadItems: t55
    };
    $[121] = focus;
    $[122] = setData;
    $[123] = setErrorErrorHelperText;
    $[124] = setLoading;
    $[125] = t40;
    $[126] = t41;
    $[127] = t42;
    $[128] = t43;
    $[129] = t44;
    $[130] = t45;
    $[131] = t46;
    $[132] = t47;
    $[133] = t48;
    $[134] = t49;
    $[135] = t50;
    $[136] = t51;
    $[137] = t52;
    $[138] = t53;
    $[139] = t54;
    $[140] = t55;
    $[141] = t56;
  } else {
    t56 = $[141];
  }
  var commands = t56;
  var t57;
  if ($[142] !== id || $[143] !== onAddValueItem) {
    t57 = function t57(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[142] = id;
    $[143] = onAddValueItem;
    $[144] = t57;
  } else {
    t57 = $[144];
  }
  var t58;
  if ($[145] !== id || $[146] !== onRemoveValueItem) {
    t58 = function t58() {
      return onRemoveValueItem(id);
    };
    $[145] = id;
    $[146] = onRemoveValueItem;
    $[147] = t58;
  } else {
    t58 = $[147];
  }
  useForwardRef(ref, commands, t57, t58);
  var t59;
  if ($[148] !== getFinalValueRef || $[149] !== multiple || $[150] !== name || $[151] !== notAllowEmptyValue || $[152] !== onRequestSearchSubmit || $[153] !== onValueChangeByUser || $[154] !== readOnly || $[155] !== updateValue || $[156] !== valueRef) {
    t59 = function t59(e, newValue_4) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_1 = newValue_4;
        if (notAllowEmptyValue) {
          if (multiple) {
            if (empty(finalValue_1)) {
              if (Array.isArray(valueRef.current) && valueRef.current.length > 0) {
                finalValue_1 = [valueRef.current[0]];
              }
            }
          } else {
            if (finalValue_1 == null) {
              finalValue_1 = valueRef.current;
            }
          }
        }
        finalValue_1 = getFinalValueRef.current(finalValue_1);
        if (!equal(valueRef.current, finalValue_1)) {
          valueRef.current = updateValue(finalValue_1, true);
          setTimeout(function () {
            onValueChangeByUser(name, finalValue_1);
            onRequestSearchSubmit(name, finalValue_1);
          });
        }
      }
    };
    $[148] = getFinalValueRef;
    $[149] = multiple;
    $[150] = name;
    $[151] = notAllowEmptyValue;
    $[152] = onRequestSearchSubmit;
    $[153] = onValueChangeByUser;
    $[154] = readOnly;
    $[155] = updateValue;
    $[156] = valueRef;
    $[157] = t59;
  } else {
    t59 = $[157];
  }
  var handleChange = t59;
  var formControlBaseProps;
  if ($[158] !== focused) {
    formControlBaseProps = {};
    if (focused) {
      formControlBaseProps.focused = true;
    }
    $[158] = focused;
    $[159] = formControlBaseProps;
  } else {
    formControlBaseProps = $[159];
  }
  var finalItemWidth = undefined;
  if (type === "button" && !fullWidth) {
    finalItemWidth = "auto";
  } else {
    if (!fullWidth || type === "radio" || type === "checkbox") {
      finalItemWidth = itemWidth || "auto";
    }
  }
  var t60 = error ? theme.palette.error.main : "";
  var t61 = error ? theme.palette.error.main : "";
  var t62;
  if ($[160] !== finalItemWidth || $[161] !== t60 || $[162] !== t61) {
    t62 = {
      borderColor: t60,
      color: t61,
      width: finalItemWidth
    };
    $[160] = finalItemWidth;
    $[161] = t60;
    $[162] = t61;
    $[163] = t62;
  } else {
    t62 = $[163];
  }
  var buttonStyle = t62;
  var t63;
  if ($[164] !== buttonStyle || $[165] !== color || $[166] !== disabled || $[167] !== initFocused || $[168] !== items || $[169] !== readOnly || $[170] !== refForButtonResizeHeightDetect || $[171] !== size || $[172] !== type) {
    t63 = items && items.map(function (t64, idx) {
      var value_3 = t64.value,
        label_0 = t64.label,
        itemDisabled = t64.disabled,
        itemColor = t64.color;
      return /*#__PURE__*/React.createElement(ToggleButton, {
        ref: function ref(ref_0) {
          if (idx === 0) {
            refForButtonResizeHeightDetect.current = ref_0;
          }
        },
        key: idx,
        size: size,
        className: "ToggleButton",
        value: value_3,
        color: itemColor || color,
        disabled: disabled || readOnly || itemDisabled,
        style: buttonStyle,
        onFocus: function onFocus() {
          return setFocused(initFocused || true);
        },
        onBlur: function onBlur() {
          return setFocused(initFocused || false);
        }
      }, type === "checkbox" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
        className: "__checkbox-unchecked__"
      }, "check_box_outline_blank"), /*#__PURE__*/React.createElement(Icon, {
        className: "__checkbox-checked__"
      }, "check_box")) : type === "radio" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
        className: "__checkbox-unchecked__"
      }, "radio_button_unchecked"), /*#__PURE__*/React.createElement(Icon, {
        className: "__checkbox-checked__"
      }, "radio_button_checked"))), /*#__PURE__*/React.createElement("span", {
        className: "__label__"
      }, label_0));
    });
    $[164] = buttonStyle;
    $[165] = color;
    $[166] = disabled;
    $[167] = initFocused;
    $[168] = items;
    $[169] = readOnly;
    $[170] = refForButtonResizeHeightDetect;
    $[171] = size;
    $[172] = type;
    $[173] = t63;
  } else {
    t63 = $[173];
  }
  var buttons = t63;
  var newRealValue = value_2 == null ? null : value_2;
  if (items && value_2 != null) {
    if (Array.isArray(newRealValue)) {
      if ($[174] !== items || $[175] !== multiple || $[176] !== newRealValue) {
        var stringRealValues = newRealValue.map(_temp3$1);
        if (multiple) {
          var foundItems = items.filter(function (v_2) {
            return stringRealValues.includes(v_2.value.toString());
          });
          newRealValue = foundItems.map(_temp4$1);
        }
        $[174] = items;
        $[175] = multiple;
        $[176] = newRealValue;
        $[177] = newRealValue;
      } else {
        newRealValue = $[177];
      }
    } else {
      if (newRealValue != null) {
        var _t3;
        if ($[178] !== newRealValue) {
          _t3 = newRealValue.toString();
          $[178] = newRealValue;
          $[179] = _t3;
        } else {
          _t3 = $[179];
        }
        var stringRealValue = _t3;
        var _t4;
        if ($[180] !== items || $[181] !== stringRealValue) {
          var _t5;
          if ($[183] !== stringRealValue) {
            _t5 = function _t5(v_4) {
              return v_4.value.toString() === stringRealValue;
            };
            $[183] = stringRealValue;
            $[184] = _t5;
          } else {
            _t5 = $[184];
          }
          _t4 = items.find(_t5);
          $[180] = items;
          $[181] = stringRealValue;
          $[182] = _t4;
        } else {
          _t4 = $[182];
        }
        var foundItem = _t4;
        if (foundItem) {
          newRealValue = foundItem.value;
        }
      }
    }
  }
  var realValue_1 = newRealValue;
  var t64;
  if ($[185] !== buttons || $[186] !== disabled || $[187] !== endAdornment || $[188] !== formColWidth || $[189] !== fullWidth || $[190] !== handleChange || $[191] !== isOnGetItemLoading || $[192] !== items || $[193] !== label || $[194] !== labelId || $[195] !== loading || $[196] !== multiple || $[197] !== readOnly || $[198] !== realValue_1 || $[199] !== refForButtonResizeHeightDetect || $[200] !== refForButtonsResizeHeightDetect || $[201] !== refForLoadingResizeHeightDetect || $[202] !== refForResizeWidthDetect || $[203] !== size || $[204] !== startAdornment || $[205] !== type || $[206] !== width) {
    t64 = isOnGetItemLoading || loading ? /*#__PURE__*/React.createElement("div", {
      style: {
        opacity: 0.54
      },
      ref: refForLoadingResizeHeightDetect
    }, /*#__PURE__*/React.createElement(CircularProgress, {
      size: 16,
      color: "inherit"
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: fullWidth ? "100%" : undefined
      }
    }, startAdornment && /*#__PURE__*/React.createElement("div", null, startAdornment), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, !fullWidth && !isOnGetItemLoading && !loading && items && /*#__PURE__*/React.createElement("div", {
      ref: refForResizeWidthDetect,
      style: {
        display: "grid",
        position: "absolute",
        whiteSpace: "nowrap",
        visibility: "hidden"
      }
    }, /*#__PURE__*/React.createElement(ToggleButtonGroup, {
      className: "ToggleButtonGroup",
      exclusive: !multiple
    }, buttons)), /*#__PURE__*/React.createElement(ToggleButtonGroup, {
      ref: refForButtonsResizeHeightDetect,
      className: "ToggleButtonGroup",
      exclusive: !multiple,
      fullWidth: fullWidth,
      value: realValue_1,
      onChange: handleChange,
      style: {
        width: !fullWidth && formColWidth && typeof width === "number" && width > formColWidth ? formColWidth : undefined,
        flexWrap: type === "checkbox" || type === "radio" ? "wrap" : "nowrap"
      },
      "aria-labelledby": notEmpty(label) ? labelId : undefined
    }, isOnGetItemLoading || loading || !items || empty(items) ? /*#__PURE__*/React.createElement(ToggleButton, {
      ref: refForButtonResizeHeightDetect,
      size: size,
      className: "ToggleButton",
      disabled: disabled || readOnly,
      value: "",
      style: {
        visibility: "hidden"
      }
    }) : buttons)), endAdornment && /*#__PURE__*/React.createElement("div", null, endAdornment));
    $[185] = buttons;
    $[186] = disabled;
    $[187] = endAdornment;
    $[188] = formColWidth;
    $[189] = fullWidth;
    $[190] = handleChange;
    $[191] = isOnGetItemLoading;
    $[192] = items;
    $[193] = label;
    $[194] = labelId;
    $[195] = loading;
    $[196] = multiple;
    $[197] = readOnly;
    $[198] = realValue_1;
    $[199] = refForButtonResizeHeightDetect;
    $[200] = refForButtonsResizeHeightDetect;
    $[201] = refForLoadingResizeHeightDetect;
    $[202] = refForResizeWidthDetect;
    $[203] = size;
    $[204] = startAdornment;
    $[205] = type;
    $[206] = width;
    $[207] = t64;
  } else {
    t64 = $[207];
  }
  var control = t64;
  var controlHeight = height || 0;
  var isMultiline = controlHeight <= (realHeight !== null && realHeight !== void 0 ? realHeight : 0);
  var t65 = "variant-".concat(variant);
  var t66 = "size-".concat(size);
  var t67 = !!label && "with-label";
  var t68 = !!fullWidth && "full-width";
  var t69 = "type-".concat(type);
  var t70 = (isOnGetItemLoading || loading) && "loading";
  var t71;
  if ($[208] !== className || $[209] !== t65 || $[210] !== t66 || $[211] !== t67 || $[212] !== t68 || $[213] !== t69 || $[214] !== t70) {
    t71 = classNames(className, "PFormValueItem", "PFormToggleButtonGroup", t65, t66, t67, t68, t69, t70);
    $[208] = className;
    $[209] = t65;
    $[210] = t66;
    $[211] = t67;
    $[212] = t68;
    $[213] = t69;
    $[214] = t70;
    $[215] = t71;
  } else {
    t71 = $[215];
  }
  var t72 = error ? errorHelperText : helperText;
  var t73;
  if ($[216] === Symbol["for"]("react.memo_cache_sentinel")) {
    t73 = {
      style: {
        marginLeft: 2
      }
    };
    $[216] = t73;
  } else {
    t73 = $[216];
  }
  var t74 = realHeight ? realHeight + (isMultiline ? 13 : 0) : controlHeight;
  var t75 = isMultiline ? false : isOnGetItemLoading || loading;
  var t76;
  if ($[217] !== color || $[218] !== control || $[219] !== error || $[220] !== formControlBaseProps || $[221] !== fullWidth || $[222] !== hidden || $[223] !== label || $[224] !== labelIcon || $[225] !== required || $[226] !== size || $[227] !== style || $[228] !== sx || $[229] !== t71 || $[230] !== t72 || $[231] !== t74 || $[232] !== t75 || $[233] !== variant) {
    t76 = /*#__PURE__*/React.createElement(PFormItemBase, _extends({}, formControlBaseProps, {
      className: t71,
      variant: variant,
      size: size,
      color: color,
      labelIcon: labelIcon,
      label: label,
      required: required,
      fullWidth: fullWidth,
      error: error,
      helperText: t72,
      helperTextProps: t73,
      style: style,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t74,
      controlVerticalCenter: t75,
      control: control
    }));
    $[217] = color;
    $[218] = control;
    $[219] = error;
    $[220] = formControlBaseProps;
    $[221] = fullWidth;
    $[222] = hidden;
    $[223] = label;
    $[224] = labelIcon;
    $[225] = required;
    $[226] = size;
    $[227] = style;
    $[228] = sx;
    $[229] = t71;
    $[230] = t72;
    $[231] = t74;
    $[232] = t75;
    $[233] = variant;
    $[234] = t76;
  } else {
    t76 = $[234];
  }
  return t76;
}
function _temp4$1(v_3) {
  return v_3.value;
}
function _temp3$1(v_1) {
  return v_1.toString();
}
function _temp2$3() {
  return "PFormToggleButtonGroup";
}
function _temp$o(res, t0) {
  var value = t0.value;
  res["".concat(value)] = value;
  return res;
}var PFormRating = function PFormRating(t0) {
  var $ = c(138);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    t1 = t0.precision,
    highlightSelectedOnly = t0.highlightSelectedOnly,
    icon = t0.icon,
    emptyIcon = t0.emptyIcon,
    max = t0.max,
    initHidden = t0.hidden,
    name = t0.name,
    labelIcon = t0.labelIcon,
    label = t0.label,
    readOnly = t0.readOnly,
    required = t0.required,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    t2 = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    onValue = t0.onValue,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var precision = t1 === undefined ? 1 : t1;
  var initValue = t2 === undefined ? 0 : t2;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formDisabled = _useFormState.disabled,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var initValueRef = useAutoUpdateRef(initValue);
  var inputRef = useRef(undefined);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState3 = useState(finalInitFocused),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var t3;
  var t4;
  if ($[0] !== finalInitFocused) {
    t3 = function t3() {
      return setFocused(finalInitFocused);
    };
    t4 = [finalInitFocused];
    $[0] = finalInitFocused;
    $[1] = t3;
    $[2] = t4;
  } else {
    t3 = $[1];
    t4 = $[2];
  }
  useFirstSkipChanged(t3, t4);
  var _useState5 = useState(initError),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    _setError = _useState6[1];
  var t5;
  var t6;
  if ($[3] !== initError) {
    t5 = function t5() {
      return _setError(initError);
    };
    t6 = [initError];
    $[3] = initError;
    $[4] = t5;
    $[5] = t6;
  } else {
    t5 = $[4];
    t6 = $[5];
  }
  useFirstSkipChanged(t5, t6);
  var errorRef = useAutoUpdateRef(error);
  var t7;
  if ($[6] !== errorRef) {
    t7 = function t7(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[6] = errorRef;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  var setError = t7;
  var _useState7 = useState(initData),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    _setData = _useState8[1];
  var t8;
  var t9;
  if ($[8] !== initData) {
    t8 = function t8() {
      return _setData(initData);
    };
    t9 = [initData];
    $[8] = initData;
    $[9] = t8;
    $[10] = t9;
  } else {
    t8 = $[9];
    t9 = $[10];
  }
  useFirstSkipChanged(t8, t9);
  var dataRef = useAutoUpdateRef(data);
  var t10;
  if ($[11] !== dataRef) {
    t10 = function t10(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[11] = dataRef;
    $[12] = t10;
  } else {
    t10 = $[12];
  }
  var setData = t10;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState9 = useState(finalInitDisabled),
    _useState0 = _slicedToArray(_useState9, 2),
    disabled = _useState0[0],
    setDisabled = _useState0[1];
  var t11;
  var t12;
  if ($[13] !== finalInitDisabled) {
    t11 = function t11() {
      return setDisabled(finalInitDisabled);
    };
    t12 = [finalInitDisabled];
    $[13] = finalInitDisabled;
    $[14] = t11;
    $[15] = t12;
  } else {
    t11 = $[14];
    t12 = $[15];
  }
  useFirstSkipChanged(t11, t12);
  var _useState1 = useState(initHidden),
    _useState10 = _slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  var t13;
  var t14;
  if ($[16] !== initHidden) {
    t13 = function t13() {
      return setHidden(initHidden);
    };
    t14 = [initHidden];
    $[16] = initHidden;
    $[17] = t13;
    $[18] = t14;
  } else {
    t13 = $[17];
    t14 = $[18];
  }
  useFirstSkipChanged(t13, t14);
  var _useResizeDetector = useResizeDetector(),
    ratingRef = _useResizeDetector.ref,
    width = _useResizeDetector.width,
    height = _useResizeDetector.height;
  var t15;
  if ($[19] !== setError) {
    t15 = function t15(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[19] = setError;
    $[20] = t15;
  } else {
    t15 = $[20];
  }
  var setErrorErrorHelperText = t15;
  var t16;
  if ($[21] !== onValidateRef || $[22] !== required || $[23] !== setErrorErrorHelperText) {
    t16 = function t16(value) {
      if (required && (empty(value) || value === 0)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[21] = onValidateRef;
    $[22] = required;
    $[23] = setErrorErrorHelperText;
    $[24] = t16;
  } else {
    t16 = $[24];
  }
  var validate = t16;
  var t17;
  if ($[25] === Symbol["for"]("react.memo_cache_sentinel")) {
    t17 = function t17() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[25] = t17;
  } else {
    t17 = $[25];
  }
  var focus = t17;
  var t18;
  if ($[26] !== onValue) {
    t18 = function t18(value_0) {
      var finalValue = value_0 || 0;
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[26] = onValue;
    $[27] = t18;
  } else {
    t18 = $[27];
  }
  var getFinalValue = t18;
  var getFinalValueRef = useAutoUpdateRef(getFinalValue);
  var t19;
  if ($[28] !== getFinalValue || $[29] !== initValue) {
    t19 = getFinalValue(initValue);
    $[28] = getFinalValue;
    $[29] = initValue;
    $[30] = t19;
  } else {
    t19 = $[30];
  }
  var _useState11 = useState(t19),
    _useState12 = _slicedToArray(_useState11, 2),
    value_1 = _useState12[0],
    _setValue = _useState12[1];
  var t20;
  if ($[31] !== getFinalValue || $[32] !== initValue) {
    t20 = function t20() {
      return _setValue(getFinalValue(initValue));
    };
    $[31] = getFinalValue;
    $[32] = initValue;
    $[33] = t20;
  } else {
    t20 = $[33];
  }
  var t21;
  if ($[34] !== initValue) {
    t21 = [initValue];
    $[34] = initValue;
    $[35] = t21;
  } else {
    t21 = $[35];
  }
  useFirstSkipChanged(t20, t21);
  var valueRef = useAutoUpdateRef(value_1);
  var t22;
  if ($[36] !== valueRef) {
    t22 = function t22(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[36] = valueRef;
    $[37] = t22;
  } else {
    t22 = $[37];
  }
  var setValue = t22;
  var t23;
  if ($[38] !== error || $[39] !== getFinalValue || $[40] !== name || $[41] !== onChangeRef || $[42] !== onValueChange || $[43] !== setValue || $[44] !== validate) {
    t23 = function t23(newValue_2) {
      var _onChangeRef$current;
      var finalValue_0 = getFinalValue(newValue_2);
      setValue(finalValue_0);
      if (error) {
        validate(finalValue_0);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[38] = error;
    $[39] = getFinalValue;
    $[40] = name;
    $[41] = onChangeRef;
    $[42] = onValueChange;
    $[43] = setValue;
    $[44] = validate;
    $[45] = t23;
  } else {
    t23 = $[45];
  }
  var updateValue = t23;
  var t24;
  if ($[46] !== name) {
    t24 = function t24() {
      return name;
    };
    $[46] = name;
    $[47] = t24;
  } else {
    t24 = $[47];
  }
  var t25;
  if ($[48] !== getFinalValueRef || $[49] !== initValueRef) {
    t25 = function t25() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[48] = getFinalValueRef;
    $[49] = initValueRef;
    $[50] = t25;
  } else {
    t25 = $[50];
  }
  var t26;
  if ($[51] !== initValueRef || $[52] !== updateValue) {
    t26 = function t26() {
      return updateValue(initValueRef.current);
    };
    $[51] = initValueRef;
    $[52] = updateValue;
    $[53] = t26;
  } else {
    t26 = $[53];
  }
  var t27;
  if ($[54] !== valueRef) {
    t27 = function t27() {
      return valueRef.current;
    };
    $[54] = valueRef;
    $[55] = t27;
  } else {
    t27 = $[55];
  }
  var t28;
  if ($[56] !== dataRef) {
    t28 = function t28() {
      return dataRef.current;
    };
    $[56] = dataRef;
    $[57] = t28;
  } else {
    t28 = $[57];
  }
  var t29;
  if ($[58] !== exceptValue) {
    t29 = function t29() {
      return !!exceptValue;
    };
    $[58] = exceptValue;
    $[59] = t29;
  } else {
    t29 = $[59];
  }
  var t30;
  if ($[60] !== disabled) {
    t30 = function t30() {
      return !!disabled;
    };
    $[60] = disabled;
    $[61] = t30;
  } else {
    t30 = $[61];
  }
  var t31;
  if ($[62] !== hidden) {
    t31 = function t31() {
      return !!hidden;
    };
    $[62] = hidden;
    $[63] = t31;
  } else {
    t31 = $[63];
  }
  var t32;
  if ($[64] !== validate || $[65] !== valueRef) {
    t32 = function t32() {
      return validate(valueRef.current);
    };
    $[64] = validate;
    $[65] = valueRef;
    $[66] = t32;
  } else {
    t32 = $[66];
  }
  var t33;
  if ($[67] !== setData || $[68] !== setErrorErrorHelperText || $[69] !== t24 || $[70] !== t25 || $[71] !== t26 || $[72] !== t27 || $[73] !== t28 || $[74] !== t29 || $[75] !== t30 || $[76] !== t31 || $[77] !== t32 || $[78] !== updateValue) {
    t33 = {
      getType: _temp$n,
      getName: t24,
      getReset: t25,
      reset: t26,
      getValue: t27,
      setValue: updateValue,
      getData: t28,
      setData: setData,
      isExceptValue: t29,
      isDisabled: t30,
      setDisabled: setDisabled,
      isHidden: t31,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t32,
      setError: setErrorErrorHelperText
    };
    $[67] = setData;
    $[68] = setErrorErrorHelperText;
    $[69] = t24;
    $[70] = t25;
    $[71] = t26;
    $[72] = t27;
    $[73] = t28;
    $[74] = t29;
    $[75] = t30;
    $[76] = t31;
    $[77] = t32;
    $[78] = updateValue;
    $[79] = t33;
  } else {
    t33 = $[79];
  }
  var commands = t33;
  var t34;
  if ($[80] !== id || $[81] !== onAddValueItem) {
    t34 = function t34(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[80] = id;
    $[81] = onAddValueItem;
    $[82] = t34;
  } else {
    t34 = $[82];
  }
  var t35;
  if ($[83] !== id || $[84] !== onRemoveValueItem) {
    t35 = function t35() {
      return onRemoveValueItem(id);
    };
    $[83] = id;
    $[84] = onRemoveValueItem;
    $[85] = t35;
  } else {
    t35 = $[85];
  }
  useForwardRef(ref, commands, t34, t35);
  var t36;
  if ($[86] !== name || $[87] !== onRequestSearchSubmit || $[88] !== onValueChangeByUser || $[89] !== readOnly || $[90] !== updateValue) {
    t36 = function t36(e, value_2) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_1 = updateValue(value_2);
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_1);
          onRequestSearchSubmit(name, finalValue_1);
        });
      }
    };
    $[86] = name;
    $[87] = onRequestSearchSubmit;
    $[88] = onValueChangeByUser;
    $[89] = readOnly;
    $[90] = updateValue;
    $[91] = t36;
  } else {
    t36 = $[91];
  }
  var handleChange = t36;
  var t37;
  if ($[92] !== className) {
    t37 = classNames(className, "PFormValueItem", "PFormRating");
    $[92] = className;
    $[93] = t37;
  } else {
    t37 = $[93];
  }
  var t38 = error ? errorHelperText : helperText;
  var t39;
  if ($[94] === Symbol["for"]("react.memo_cache_sentinel")) {
    t39 = {
      style: {
        marginLeft: 5
      }
    };
    $[94] = t39;
  } else {
    t39 = $[94];
  }
  var t40 = width || 100;
  var t41;
  if ($[95] !== initStyle || $[96] !== t40) {
    t41 = _objectSpread2({
      width: t40
    }, initStyle);
    $[95] = initStyle;
    $[96] = t40;
    $[97] = t41;
  } else {
    t41 = $[97];
  }
  var t42 = height || (size === "small" ? 21 : 26);
  var t43;
  if ($[98] !== ratingRef) {
    t43 = function t43(ref_0) {
      ratingRef.current = ref_0;
      inputRef.current = (ref_0 === null || ref_0 === void 0 ? void 0 : ref_0.querySelector("input")) || undefined;
    };
    $[98] = ratingRef;
    $[99] = t43;
  } else {
    t43 = $[99];
  }
  var t44 = size === "medium" ? "large" : "medium";
  var t45 = disabled || readOnly;
  var t46 = icon ? icon : "Star";
  var t47;
  if ($[100] !== color || $[101] !== t46) {
    t47 = /*#__PURE__*/React.createElement(PIcon, {
      color: color,
      size: "inherit"
    }, t46);
    $[100] = color;
    $[101] = t46;
    $[102] = t47;
  } else {
    t47 = $[102];
  }
  var t48 = emptyIcon ? emptyIcon : "StarBorder";
  var t49;
  if ($[103] !== t48) {
    t49 = /*#__PURE__*/React.createElement(PIcon, {
      size: "inherit"
    }, t48);
    $[103] = t48;
    $[104] = t49;
  } else {
    t49 = $[104];
  }
  var t50;
  var t51;
  if ($[105] !== initFocused) {
    t50 = function t50() {
      return setFocused(initFocused || true);
    };
    t51 = function t51() {
      return setFocused(initFocused || false);
    };
    $[105] = initFocused;
    $[106] = t50;
    $[107] = t51;
  } else {
    t50 = $[106];
    t51 = $[107];
  }
  var t52;
  if ($[108] !== handleChange || $[109] !== highlightSelectedOnly || $[110] !== max || $[111] !== name || $[112] !== precision || $[113] !== t43 || $[114] !== t44 || $[115] !== t45 || $[116] !== t47 || $[117] !== t49 || $[118] !== t50 || $[119] !== t51 || $[120] !== value_1) {
    t52 = /*#__PURE__*/React.createElement(Rating, {
      ref: t43,
      size: t44,
      name: name,
      precision: precision,
      highlightSelectedOnly: highlightSelectedOnly,
      value: value_1,
      disabled: t45,
      max: max,
      icon: t47,
      emptyIcon: t49,
      onChange: handleChange,
      onFocus: t50,
      onBlur: t51
    });
    $[108] = handleChange;
    $[109] = highlightSelectedOnly;
    $[110] = max;
    $[111] = name;
    $[112] = precision;
    $[113] = t43;
    $[114] = t44;
    $[115] = t45;
    $[116] = t47;
    $[117] = t49;
    $[118] = t50;
    $[119] = t51;
    $[120] = value_1;
    $[121] = t52;
  } else {
    t52 = $[121];
  }
  var t53;
  if ($[122] !== color || $[123] !== error || $[124] !== focused || $[125] !== hidden || $[126] !== label || $[127] !== labelIcon || $[128] !== required || $[129] !== size || $[130] !== sx || $[131] !== t37 || $[132] !== t38 || $[133] !== t41 || $[134] !== t42 || $[135] !== t52 || $[136] !== variant) {
    t53 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t37,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: false,
      required: required,
      helperText: t38,
      helperTextProps: t39,
      style: t41,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t42,
      controlVerticalCenter: true,
      control: t52
    });
    $[122] = color;
    $[123] = error;
    $[124] = focused;
    $[125] = hidden;
    $[126] = label;
    $[127] = labelIcon;
    $[128] = required;
    $[129] = size;
    $[130] = sx;
    $[131] = t37;
    $[132] = t38;
    $[133] = t41;
    $[134] = t42;
    $[135] = t52;
    $[136] = variant;
    $[137] = t53;
  } else {
    t53 = $[137];
  }
  return t53;
};
function _temp$n() {
  return "PFormRating";
}var getFinalValue$8 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormTextEditor.initializing textarea{display:none}.PFormTextEditor.error .tox-tinymce{border-color:#d32f2f}.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item{padding-right:20px !important}.tox-notifications-container{display:none}");var _PFormTextEditor = function PFormTextEditor(t0) {
  var $ = c(134);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    apiKey = t0.apiKey,
    toolbar = t0.toolbar,
    onOpenWindow = t0.onOpenWindow,
    onCloseWindow = t0.onCloseWindow,
    t1 = t0.menubar,
    t2 = t0.height,
    initHidden = t0.hidden,
    onImageUpload = t0.onImageUpload,
    name = t0.name,
    labelIcon = t0.labelIcon,
    label = t0.label,
    readOnly = t0.readOnly,
    required = t0.required,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    t3 = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    className = t0.className;
  var menubar = t1 === undefined ? true : t1;
  var height = t2 === undefined ? 500 : t2;
  var initValue = t3 === undefined ? "" : t3;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formDisabled = _useFormState.disabled,
    onAddValueItem = _useFormState.onAddValueItem,
    onValueChange = _useFormState.onValueChange,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChangeByUser = _useFormState.onValueChangeByUser;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var initValueRef = useAutoUpdateRef(initValue);
  var editorRef = useRef(null);
  var keyDownTime = useRef(0);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    initialized = _useState4[0],
    setInitialized = _useState4[1];
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState5 = useState(finalInitFocused),
    _useState6 = _slicedToArray(_useState5, 2),
    focused = _useState6[0],
    setFocused = _useState6[1];
  var t4;
  var t5;
  if ($[0] !== finalInitFocused) {
    t4 = function t4() {
      return setFocused(finalInitFocused);
    };
    t5 = [finalInitFocused];
    $[0] = finalInitFocused;
    $[1] = t4;
    $[2] = t5;
  } else {
    t4 = $[1];
    t5 = $[2];
  }
  useFirstSkipChanged(t4, t5);
  var _useState7 = useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  var t6;
  var t7;
  if ($[3] !== initError) {
    t6 = function t6() {
      return _setError(initError);
    };
    t7 = [initError];
    $[3] = initError;
    $[4] = t6;
    $[5] = t7;
  } else {
    t6 = $[4];
    t7 = $[5];
  }
  useFirstSkipChanged(t6, t7);
  var errorRef = useAutoUpdateRef(error);
  var t8;
  if ($[6] !== errorRef) {
    t8 = function t8(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[6] = errorRef;
    $[7] = t8;
  } else {
    t8 = $[7];
  }
  var setError = t8;
  var _useState9 = useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  var t10;
  var t9;
  if ($[8] !== initData) {
    t9 = function t9() {
      return _setData(initData);
    };
    t10 = [initData];
    $[8] = initData;
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  useFirstSkipChanged(t9, t10);
  var dataRef = useAutoUpdateRef(data);
  var t11;
  if ($[11] !== dataRef) {
    t11 = function t11(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[11] = dataRef;
    $[12] = t11;
  } else {
    t11 = $[12];
  }
  var setData = t11;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  var t12;
  var t13;
  if ($[13] !== finalInitDisabled) {
    t12 = function t12() {
      return setDisabled(finalInitDisabled);
    };
    t13 = [finalInitDisabled];
    $[13] = finalInitDisabled;
    $[14] = t12;
    $[15] = t13;
  } else {
    t12 = $[14];
    t13 = $[15];
  }
  useFirstSkipChanged(t12, t13);
  var _useState11 = useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  var t14;
  var t15;
  if ($[16] !== initHidden) {
    t14 = function t14() {
      return setHidden(initHidden);
    };
    t15 = [initHidden];
    $[16] = initHidden;
    $[17] = t14;
    $[18] = t15;
  } else {
    t14 = $[17];
    t15 = $[18];
  }
  useFirstSkipChanged(t14, t15);
  var t16;
  if ($[19] !== setError) {
    t16 = function t16(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[19] = setError;
    $[20] = t16;
  } else {
    t16 = $[20];
  }
  var setErrorErrorHelperText = t16;
  var t17;
  if ($[21] !== onValidateRef || $[22] !== required || $[23] !== setErrorErrorHelperText) {
    t17 = function t17(value) {
      var _editorRef$current;
      if (required && empty((_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.getContent())) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[21] = onValidateRef;
    $[22] = required;
    $[23] = setErrorErrorHelperText;
    $[24] = t17;
  } else {
    t17 = $[24];
  }
  var validate = t17;
  var t18;
  if ($[25] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18() {
      var _editorRef$current2;
      (_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 || _editorRef$current2.focus();
    };
    $[25] = t18;
  } else {
    t18 = $[25];
  }
  var focus = t18;
  var t19;
  if ($[26] !== initValue) {
    t19 = getFinalValue$8(initValue);
    $[26] = initValue;
    $[27] = t19;
  } else {
    t19 = $[27];
  }
  var _useState13 = useState(t19),
    _useState14 = _slicedToArray(_useState13, 2),
    value_0 = _useState14[0],
    _setValue = _useState14[1];
  var t20;
  var t21;
  if ($[28] !== initValue) {
    t20 = function t20() {
      return _setValue(getFinalValue$8(initValue));
    };
    t21 = [initValue];
    $[28] = initValue;
    $[29] = t20;
    $[30] = t21;
  } else {
    t20 = $[29];
    t21 = $[30];
  }
  useFirstSkipChanged(t20, t21);
  var valueRef = useAutoUpdateRef(value_0);
  var t22;
  if ($[31] !== valueRef) {
    t22 = function t22(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[31] = valueRef;
    $[32] = t22;
  } else {
    t22 = $[32];
  }
  var setValue = t22;
  var t23;
  if ($[33] !== error || $[34] !== name || $[35] !== onChangeRef || $[36] !== onValueChange || $[37] !== setValue || $[38] !== validate) {
    t23 = function t23(newValue_2) {
      var _onChangeRef$current;
      var finalValue = newValue_2;
      setValue(finalValue);
      if (error) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[33] = error;
    $[34] = name;
    $[35] = onChangeRef;
    $[36] = onValueChange;
    $[37] = setValue;
    $[38] = validate;
    $[39] = t23;
  } else {
    t23 = $[39];
  }
  var updateValue = t23;
  var t24;
  if ($[40] !== name) {
    t24 = function t24() {
      return name;
    };
    $[40] = name;
    $[41] = t24;
  } else {
    t24 = $[41];
  }
  var t25;
  if ($[42] !== initValueRef) {
    t25 = function t25() {
      return getFinalValue$8(initValueRef.current);
    };
    $[42] = initValueRef;
    $[43] = t25;
  } else {
    t25 = $[43];
  }
  var t26;
  if ($[44] !== initValueRef || $[45] !== updateValue) {
    t26 = function t26() {
      return updateValue(initValueRef.current);
    };
    $[44] = initValueRef;
    $[45] = updateValue;
    $[46] = t26;
  } else {
    t26 = $[46];
  }
  var t27;
  if ($[47] !== valueRef) {
    t27 = function t27() {
      return valueRef.current;
    };
    $[47] = valueRef;
    $[48] = t27;
  } else {
    t27 = $[48];
  }
  var t28;
  if ($[49] !== dataRef) {
    t28 = function t28() {
      return dataRef.current;
    };
    $[49] = dataRef;
    $[50] = t28;
  } else {
    t28 = $[50];
  }
  var t29;
  if ($[51] !== exceptValue) {
    t29 = function t29() {
      return !!exceptValue;
    };
    $[51] = exceptValue;
    $[52] = t29;
  } else {
    t29 = $[52];
  }
  var t30;
  if ($[53] !== disabled) {
    t30 = function t30() {
      return !!disabled;
    };
    $[53] = disabled;
    $[54] = t30;
  } else {
    t30 = $[54];
  }
  var t31;
  if ($[55] !== hidden) {
    t31 = function t31() {
      return !!hidden;
    };
    $[55] = hidden;
    $[56] = t31;
  } else {
    t31 = $[56];
  }
  var t32;
  if ($[57] !== validate || $[58] !== valueRef) {
    t32 = function t32() {
      return validate(valueRef.current);
    };
    $[57] = validate;
    $[58] = valueRef;
    $[59] = t32;
  } else {
    t32 = $[59];
  }
  var t33;
  if ($[60] !== setData || $[61] !== setErrorErrorHelperText || $[62] !== t24 || $[63] !== t25 || $[64] !== t26 || $[65] !== t27 || $[66] !== t28 || $[67] !== t29 || $[68] !== t30 || $[69] !== t31 || $[70] !== t32 || $[71] !== updateValue) {
    t33 = {
      getType: _temp$m,
      getName: t24,
      getReset: t25,
      reset: t26,
      getValue: t27,
      setValue: updateValue,
      getData: t28,
      setData: setData,
      isExceptValue: t29,
      isDisabled: t30,
      setDisabled: setDisabled,
      isHidden: t31,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t32,
      setError: setErrorErrorHelperText
    };
    $[60] = setData;
    $[61] = setErrorErrorHelperText;
    $[62] = t24;
    $[63] = t25;
    $[64] = t26;
    $[65] = t27;
    $[66] = t28;
    $[67] = t29;
    $[68] = t30;
    $[69] = t31;
    $[70] = t32;
    $[71] = updateValue;
    $[72] = t33;
  } else {
    t33 = $[72];
  }
  var commands = t33;
  var t34;
  if ($[73] !== id || $[74] !== onAddValueItem) {
    t34 = function t34(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[73] = id;
    $[74] = onAddValueItem;
    $[75] = t34;
  } else {
    t34 = $[75];
  }
  var t35;
  if ($[76] !== id || $[77] !== onRemoveValueItem) {
    t35 = function t35() {
      return onRemoveValueItem(id);
    };
    $[76] = id;
    $[77] = onRemoveValueItem;
    $[78] = t35;
  } else {
    t35 = $[78];
  }
  useForwardRef(ref, commands, t34, t35);
  var t36;
  if ($[79] !== name || $[80] !== onValueChangeByUser || $[81] !== updateValue) {
    t36 = function t36(value_1) {
      updateValue(value_1);
      if (new Date().getTime() - keyDownTime.current < 300) {
        setTimeout(function () {
          if (onValueChangeByUser) {
            onValueChangeByUser(name, value_1);
          }
        });
      }
    };
    $[79] = name;
    $[80] = onValueChangeByUser;
    $[81] = updateValue;
    $[82] = t36;
  } else {
    t36 = $[82];
  }
  var handleEditorChange = t36;
  var t37;
  if ($[83] === Symbol["for"]("react.memo_cache_sentinel")) {
    t37 = function t37() {
      keyDownTime.current = new Date().getTime();
    };
    $[83] = t37;
  } else {
    t37 = $[83];
  }
  var handleKeyDown = t37;
  var t38;
  if ($[84] !== onImageUpload) {
    t38 = function t38(blobInfo, progress) {
      return new Promise(function (resolve, reject) {
        var onImageUploadFunc = onImageUpload !== null && onImageUpload !== void 0 ? onImageUpload : _PFormTextEditor.onImageUpload;
        if (onImageUploadFunc) {
          onImageUploadFunc(blobInfo.blob(), function (url) {
            resolve(url);
          }, function (err) {
            return reject(err);
          }, progress);
        } else {
          reject("onImageUpload not implemented.");
        }
      });
    };
    $[84] = onImageUpload;
    $[85] = t38;
  } else {
    t38 = $[85];
  }
  var handleImageUpload = t38;
  var t39;
  if ($[86] !== onCloseWindow || $[87] !== onOpenWindow) {
    t39 = function t39(evt, editor) {
      editorRef.current = editor;
      editor.on("OpenWindow", function () {
        var _onOpenWindow, _ref;
        onOpenWindow === null || onOpenWindow === void 0 || onOpenWindow();
        (_onOpenWindow = (_ref = _PFormTextEditor).onOpenWindow) === null || _onOpenWindow === void 0 || _onOpenWindow.call(_ref);
      });
      editor.on("CloseWindow", function () {
        var _onCloseWindow, _ref2;
        onCloseWindow === null || onCloseWindow === void 0 || onCloseWindow();
        (_onCloseWindow = (_ref2 = _PFormTextEditor).onCloseWindow) === null || _onCloseWindow === void 0 || _onCloseWindow.call(_ref2);
      });
      setTimeout(function () {
        return setInitialized(true);
      }, 10);
    };
    $[86] = onCloseWindow;
    $[87] = onOpenWindow;
    $[88] = t39;
  } else {
    t39 = $[88];
  }
  var handleEditorInit = t39;
  var t40;
  if ($[89] === Symbol["for"]("react.memo_cache_sentinel")) {
    t40 = ["lists", "advlist", "image", "autolink", "link", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "insertdatetime", "media", "table", "wordcount"];
    $[89] = t40;
  } else {
    t40 = $[89];
  }
  var t41 = toolbar || "undo redo |          formatselect bullist numlist outdent indent |          bold italic | align | forecolor backcolor |          link image media | advtable | code";
  var t42;
  if ($[90] !== handleImageUpload || $[91] !== height || $[92] !== menubar || $[93] !== t41) {
    t42 = {
      height: height,
      menubar: menubar,
      language: "ko_KR",
      contextmenu: false,
      content_style: "body {font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: hsl(0,0%,20%);} p {padding:0; margin:0}",
      plugins: t40,
      toolbar: t41,
      images_upload_handler: handleImageUpload
    };
    $[90] = handleImageUpload;
    $[91] = height;
    $[92] = menubar;
    $[93] = t41;
    $[94] = t42;
  } else {
    t42 = $[94];
  }
  var editInit = t42;
  var t43 = !initialized && "initializing";
  var t44;
  if ($[95] !== className || $[96] !== t43) {
    t44 = classNames(className, "PFormValueItem", "PFormTextEditor", t43);
    $[95] = className;
    $[96] = t43;
    $[97] = t44;
  } else {
    t44 = $[97];
  }
  var t45 = error ? errorHelperText : helperText;
  var t46;
  var t47;
  if ($[98] === Symbol["for"]("react.memo_cache_sentinel")) {
    t46 = {
      style: {
        marginLeft: 5
      }
    };
    t47 = {
      width: "100%"
    };
    $[98] = t46;
    $[99] = t47;
  } else {
    t46 = $[98];
    t47 = $[99];
  }
  var t48;
  if ($[100] !== height || $[101] !== initialized) {
    t48 = !initialized ? /*#__PURE__*/React.createElement(Skeleton, {
      variant: "rectangular",
      width: "100%",
      height: height
    }) : null;
    $[100] = height;
    $[101] = initialized;
    $[102] = t48;
  } else {
    t48 = $[102];
  }
  var t49;
  if ($[103] !== apiKey) {
    t49 = ifEmpty(apiKey, _PFormTextEditor.apiKey);
    $[103] = apiKey;
    $[104] = t49;
  } else {
    t49 = $[104];
  }
  var t50 = readOnly || disabled;
  var t51;
  var t52;
  if ($[105] !== initFocused) {
    t51 = function t51() {
      return setFocused(initFocused || true);
    };
    t52 = function t52() {
      return setFocused(initFocused || false);
    };
    $[105] = initFocused;
    $[106] = t51;
    $[107] = t52;
  } else {
    t51 = $[106];
    t52 = $[107];
  }
  var t53;
  if ($[108] !== editInit || $[109] !== handleEditorChange || $[110] !== handleEditorInit || $[111] !== t49 || $[112] !== t50 || $[113] !== t51 || $[114] !== t52 || $[115] !== value_0) {
    t53 = /*#__PURE__*/React.createElement(Editor, {
      apiKey: t49,
      value: value_0,
      disabled: t50,
      init: editInit,
      onInit: handleEditorInit,
      onEditorChange: handleEditorChange,
      onKeyDown: handleKeyDown,
      onFocus: t51,
      onBlur: t52
    });
    $[108] = editInit;
    $[109] = handleEditorChange;
    $[110] = handleEditorInit;
    $[111] = t49;
    $[112] = t50;
    $[113] = t51;
    $[114] = t52;
    $[115] = value_0;
    $[116] = t53;
  } else {
    t53 = $[116];
  }
  var t54;
  if ($[117] !== t48 || $[118] !== t53) {
    t54 = /*#__PURE__*/React.createElement(React.Fragment, null, t48, t53);
    $[117] = t48;
    $[118] = t53;
    $[119] = t54;
  } else {
    t54 = $[119];
  }
  var t55;
  if ($[120] !== color || $[121] !== error || $[122] !== focused || $[123] !== height || $[124] !== hidden || $[125] !== label || $[126] !== labelIcon || $[127] !== required || $[128] !== size || $[129] !== t44 || $[130] !== t45 || $[131] !== t54 || $[132] !== variant) {
    t55 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t44,
      labelIcon: labelIcon,
      label: label,
      error: error,
      required: required,
      fullWidth: true,
      helperText: t45,
      helperTextProps: t46,
      style: t47,
      hidden: hidden,
      controlHeight: height,
      control: t54
    });
    $[120] = color;
    $[121] = error;
    $[122] = focused;
    $[123] = height;
    $[124] = hidden;
    $[125] = label;
    $[126] = labelIcon;
    $[127] = required;
    $[128] = size;
    $[129] = t44;
    $[130] = t45;
    $[131] = t54;
    $[132] = variant;
    $[133] = t55;
  } else {
    t55 = $[133];
  }
  return t55;
};
_PFormTextEditor.apiKey = '';
function _temp$m() {
  return "PFormTextEditor";
}function PFormAutocomplete(t0) {
  var $ = c(250);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initLabelShrink = t0.labelShrink,
    initFullWidth = t0.fullWidth,
    name = t0.name,
    labelIcon = t0.labelIcon,
    label = t0.label,
    initLoading = t0.loading,
    initItems = t0.items,
    initValue = t0.value,
    initData = t0.data,
    initError = t0.error,
    helperText = t0.helperText,
    initDisabled = t0.disabled,
    readOnly = t0.readOnly,
    required = t0.required,
    exceptValue = t0.exceptValue,
    width = t0.width,
    placeholder = t0.placeholder,
    multiple = t0.multiple,
    t1 = t0.formValueSeparator,
    formValueSort = t0.formValueSort,
    disablePortal = t0.disablePortal,
    t2 = t0.noOptionsText,
    loadingText = t0.loadingText,
    limitTags = t0.limitTags,
    getLimitTagsText = t0.getLimitTagsText,
    openOnFocus = t0.openOnFocus,
    disableClearable = t0.disableClearable,
    async = t0.async,
    autoFocus = t0.autoFocus,
    initHidden = t0.hidden,
    onLoadItems = t0.onLoadItems,
    onAsyncLoadValueItem = t0.onAsyncLoadValueItem,
    onRenderItem = t0.onRenderItem,
    onRenderTag = t0.onRenderTag,
    onAddItem = t0.onAddItem,
    getOptionDisabled = t0.getOptionDisabled,
    onChange = t0.onChange,
    onValue = t0.onValue,
    onValidate = t0.onValidate,
    onFocus = t0.onFocus,
    onBlur = t0.onBlur,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var formValueSeparator = t1 === undefined ? "," : t1;
  var noOptionsText = t2 === undefined ? "\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" : t2;
  var id = useId();
  var _useTimeoutRef = useTimeoutRef(),
    _useTimeoutRef2 = _slicedToArray(_useTimeoutRef, 2),
    asyncTimeoutRef = _useTimeoutRef2[0],
    setAsyncTimeout = _useTimeoutRef2[1];
  var initValueRef = useAutoUpdateRef(initValue);
  var textFieldRef = useRef(null);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  var onAsyncLoadValueItemRef = useAutoUpdateRef(onAsyncLoadValueItem);
  var onFocusRef = useAutoUpdateRef(onFocus);
  var onBlurRef = useAutoUpdateRef(onBlur);
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    _setError = _useState2[1];
  var t3;
  var t4;
  if ($[0] !== initError) {
    t3 = function t3() {
      return _setError(initError);
    };
    t4 = [initError];
    $[0] = initError;
    $[1] = t3;
    $[2] = t4;
  } else {
    t3 = $[1];
    t4 = $[2];
  }
  useFirstSkipChanged(t3, t4);
  var errorRef = useAutoUpdateRef(error);
  var t5;
  if ($[3] !== errorRef) {
    t5 = function t5(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[3] = errorRef;
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  var setError = t5;
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    _setData = _useState4[1];
  var t6;
  var t7;
  if ($[5] !== initData) {
    t6 = function t6() {
      return _setData(initData);
    };
    t7 = [initData];
    $[5] = initData;
    $[6] = t6;
    $[7] = t7;
  } else {
    t6 = $[6];
    t7 = $[7];
  }
  useFirstSkipChanged(t6, t7);
  var dataRef = useAutoUpdateRef(data);
  var t8;
  if ($[8] !== dataRef) {
    t8 = function t8(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[8] = dataRef;
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  var setData = t8;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  var t10;
  var t9;
  if ($[10] !== finalInitDisabled) {
    t9 = function t9() {
      return setDisabled(finalInitDisabled);
    };
    t10 = [finalInitDisabled];
    $[10] = finalInitDisabled;
    $[11] = t10;
    $[12] = t9;
  } else {
    t10 = $[11];
    t9 = $[12];
  }
  useFirstSkipChanged(t9, t10);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var t11;
  var t12;
  if ($[13] !== initHidden) {
    t11 = function t11() {
      return setHidden(initHidden);
    };
    t12 = [initHidden];
    $[13] = initHidden;
    $[14] = t11;
    $[15] = t12;
  } else {
    t11 = $[14];
    t12 = $[15];
  }
  useFirstSkipChanged(t11, t12);
  var _useState9 = useState(initLoading),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    _setLoading = _useState0[1];
  var t13;
  var t14;
  if ($[16] !== initLoading) {
    t13 = function t13() {
      return _setLoading(initLoading);
    };
    t14 = [initLoading];
    $[16] = initLoading;
    $[17] = t13;
    $[18] = t14;
  } else {
    t13 = $[17];
    t14 = $[18];
  }
  useFirstSkipChanged(t13, t14);
  var loadingRef = useAutoUpdateRef(loading);
  var t15;
  if ($[19] !== loadingRef) {
    t15 = function t15(newValue_1) {
      _setLoading(newValue_1);
      loadingRef.current = newValue_1;
    };
    $[19] = loadingRef;
    $[20] = t15;
  } else {
    t15 = $[20];
  }
  var setLoading = t15;
  var _useState1 = useState(initItems),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    _setItems = _useState10[1];
  var t16;
  var t17;
  if ($[21] !== initItems) {
    t16 = function t16() {
      return _setItems(initItems);
    };
    t17 = [initItems];
    $[21] = initItems;
    $[22] = t16;
    $[23] = t17;
  } else {
    t16 = $[22];
    t17 = $[23];
  }
  useFirstSkipChanged(t16, t17);
  var itemsRef = useAutoUpdateRef(items);
  var t18;
  if ($[24] !== itemsRef) {
    t18 = function t18(newItems) {
      _setItems(newItems);
      itemsRef.current = newItems;
    };
    $[24] = itemsRef;
    $[25] = t18;
  } else {
    t18 = $[25];
  }
  var setItems = t18;
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOnGetItemLoading = _useState12[0],
    setIsOnGetItemLoading = _useState12[1];
  var _useState13 = useState(),
    _useState14 = _slicedToArray(_useState13, 2),
    errorHelperText = _useState14[0],
    setErrorHelperText = _useState14[1];
  var _useState15 = useState(undefined),
    _useState16 = _slicedToArray(_useState15, 2),
    inputValue = _useState16[0],
    setInputValue = _useState16[1];
  var t19;
  if (items) {
    var _t;
    if ($[26] !== items) {
      _t = items.reduce(_temp$l, {});
      $[26] = items;
      $[27] = _t;
    } else {
      _t = $[27];
    }
    t19 = _t;
  } else {
    var _t2;
    if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t2 = {};
      $[28] = _t2;
    } else {
      _t2 = $[28];
    }
    t19 = _t2;
  }
  var itemsValues = t19;
  var t20;
  if (items) {
    var _t3;
    if ($[29] !== items) {
      _t3 = items.reduce(_temp2$2, {});
      $[29] = items;
      $[30] = _t3;
    } else {
      _t3 = $[30];
    }
    t20 = _t3;
  } else {
    var _t4;
    if ($[31] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t4 = {};
      $[31] = _t4;
    } else {
      _t4 = $[31];
    }
    t20 = _t4;
  }
  var itemsInfos = t20;
  var t21;
  if ($[32] !== setError) {
    t21 = function t21(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[32] = setError;
    $[33] = t21;
  } else {
    t21 = $[33];
  }
  var setErrorErrorHelperText = t21;
  var t22;
  if ($[34] !== onValidateRef || $[35] !== required || $[36] !== setErrorErrorHelperText) {
    t22 = function t22(value_0) {
      if (required && empty(value_0)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_0);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[34] = onValidateRef;
    $[35] = required;
    $[36] = setErrorErrorHelperText;
    $[37] = t22;
  } else {
    t22 = $[37];
  }
  var validate = t22;
  var t23;
  if ($[38] !== formValueSeparator || $[39] !== itemsValues || $[40] !== multiple || $[41] !== onValue) {
    t23 = function t23(value_1) {
      var finalValue = value_1;
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          if (finalValue != null) {
            if (typeof finalValue === "string") {
              finalValue = Array.from(new Set(finalValue.split(formValueSeparator || ",")));
            } else {
              finalValue = [finalValue];
            }
          } else {
            finalValue = [];
          }
        }
      } else {
        if (Array.isArray(finalValue)) {
          if (notEmpty(finalValue)) {
            finalValue = finalValue[0];
          } else {
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
          } else {
            var realValue_0 = itemsValues[finalValue.toString()];
            if (realValue_0 != null && finalValue !== realValue_0) {
              finalValue = realValue_0;
            }
          }
        }
      }
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[38] = formValueSeparator;
    $[39] = itemsValues;
    $[40] = multiple;
    $[41] = onValue;
    $[42] = t23;
  } else {
    t23 = $[42];
  }
  var getFinalValue = t23;
  var getFinalValueRef = useAutoUpdateRef(getFinalValue);
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    valueItem = _useState18[0],
    setValueItem = _useState18[1];
  var t24;
  if ($[43] !== getFinalValue || $[44] !== initValue) {
    t24 = getFinalValue(initValue);
    $[43] = getFinalValue;
    $[44] = initValue;
    $[45] = t24;
  } else {
    t24 = $[45];
  }
  var _useState19 = useState(t24),
    _useState20 = _slicedToArray(_useState19, 2),
    value_2 = _useState20[0],
    _setValue = _useState20[1];
  var t25;
  if ($[46] !== getFinalValue || $[47] !== initValue) {
    t25 = function t25() {
      return _setValue(getFinalValue(initValue));
    };
    $[46] = getFinalValue;
    $[47] = initValue;
    $[48] = t25;
  } else {
    t25 = $[48];
  }
  var t26;
  if ($[49] !== initValue) {
    t26 = [initValue];
    $[49] = initValue;
    $[50] = t26;
  } else {
    t26 = $[50];
  }
  useFirstSkipChanged(t25, t26);
  var valueRef = useAutoUpdateRef(value_2);
  var t27;
  if ($[51] !== valueRef) {
    t27 = function t27(newValue_2) {
      _setValue(newValue_2);
      valueRef.current = newValue_2;
    };
    $[51] = valueRef;
    $[52] = t27;
  } else {
    t27 = $[52];
  }
  var setValue = t27;
  var t28;
  if ($[53] !== error || $[54] !== getFinalValueRef || $[55] !== name || $[56] !== onChangeRef || $[57] !== onValueChange || $[58] !== setValue || $[59] !== validate) {
    t28 = function t28(newValue_3, t29) {
      var _onChangeRef$current;
      var skipGetFinalValue = t29 === undefined ? false : t29;
      var finalValue_0 = skipGetFinalValue ? newValue_3 : getFinalValueRef.current(newValue_3);
      setValue(finalValue_0);
      if (error) {
        validate(finalValue_0);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[53] = error;
    $[54] = getFinalValueRef;
    $[55] = name;
    $[56] = onChangeRef;
    $[57] = onValueChange;
    $[58] = setValue;
    $[59] = validate;
    $[60] = t28;
  } else {
    t28 = $[60];
  }
  var updateValue = t28;
  var computedComponentValue;
  if ($[61] !== items || $[62] !== itemsInfos || $[63] !== multiple || $[64] !== valueItem || $[65] !== value_2) {
    var finalValue_1 = value_2;
    if (finalValue_1 != null) {
      if (multiple) {
        if (!Array.isArray(finalValue_1)) {
          finalValue_1 = [finalValue_1];
        }
      } else {
        if (Array.isArray(finalValue_1)) {
          finalValue_1 = finalValue_1[0];
        }
      }
    } else {
      finalValue_1 = multiple ? [] : undefined;
    }
    computedComponentValue = multiple ? [] : null;
    if (finalValue_1 != null) {
      if (items) {
        if (Array.isArray(finalValue_1)) {
          finalValue_1.forEach(function (v_0) {
            var key = v_0.toString();
            if (itemsInfos[key]) {
              computedComponentValue && computedComponentValue.push(itemsInfos[key]);
            }
          });
        } else {
          computedComponentValue = items.find(function (info_0) {
            return info_0.value === finalValue_1;
          }) || (multiple ? [] : null);
        }
      }
      if (empty(computedComponentValue) && valueItem) {
        if (Array.isArray(finalValue_1)) {
          if (Array.isArray(valueItem)) {
            computedComponentValue = valueItem.filter(function (info_1) {
              return Array.isArray(finalValue_1) && finalValue_1.includes(info_1.value);
            });
          }
        } else {
          if (!Array.isArray(valueItem) && finalValue_1.toString() === valueItem.value.toString()) {
            computedComponentValue = valueItem;
          }
        }
      }
    }
    $[61] = items;
    $[62] = itemsInfos;
    $[63] = multiple;
    $[64] = valueItem;
    $[65] = value_2;
    $[66] = computedComponentValue;
  } else {
    computedComponentValue = $[66];
  }
  var computedComponentValue_0 = computedComponentValue;
  var _useState21 = useState(computedComponentValue_0),
    _useState22 = _slicedToArray(_useState21, 2),
    componentValue = _useState22[0],
    setComponentValue = _useState22[1];
  var t29;
  if ($[67] !== componentValue || $[68] !== computedComponentValue_0) {
    t29 = function t29() {
      if (componentValue && computedComponentValue_0 && equal(componentValue, computedComponentValue_0)) ; else {
        setComponentValue(computedComponentValue_0);
      }
    };
    $[67] = componentValue;
    $[68] = computedComponentValue_0;
    $[69] = t29;
  } else {
    t29 = $[69];
  }
  var t30;
  if ($[70] !== computedComponentValue_0) {
    t30 = [computedComponentValue_0];
    $[70] = computedComponentValue_0;
    $[71] = t30;
  } else {
    t30 = $[71];
  }
  useChanged(t29, t30);
  var t31;
  if ($[72] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31() {
      setIsOnGetItemLoading(true);
    };
    $[72] = t31;
  } else {
    t31 = $[72];
  }
  var showOnGetItemLoading = t31;
  var t32;
  if ($[73] === Symbol["for"]("react.memo_cache_sentinel")) {
    t32 = function t32() {
      setIsOnGetItemLoading(false);
    };
    $[73] = t32;
  } else {
    t32 = $[73];
  }
  var hideOnGetItemLoading = t32;
  var t33;
  if ($[74] !== async || $[75] !== onLoadItemsRef || $[76] !== setItems) {
    t33 = function t33() {
      if (!async && onLoadItemsRef.current) {
        showOnGetItemLoading();
        onLoadItemsRef.current().then(function (items_0) {
          setItems(items_0);
          hideOnGetItemLoading();
        });
      }
    };
    $[74] = async;
    $[75] = onLoadItemsRef;
    $[76] = setItems;
    $[77] = t33;
  } else {
    t33 = $[77];
  }
  var t34;
  if ($[78] === Symbol["for"]("react.memo_cache_sentinel")) {
    t34 = [];
    $[78] = t34;
  } else {
    t34 = $[78];
  }
  useEventEffect(t33, t34);
  var t35;
  if ($[79] !== getFinalValueRef || $[80] !== updateValue || $[81] !== valueRef) {
    t35 = function t35() {
      updateValue(getFinalValueRef.current(valueRef.current));
    };
    $[79] = getFinalValueRef;
    $[80] = updateValue;
    $[81] = valueRef;
    $[82] = t35;
  } else {
    t35 = $[82];
  }
  var t36;
  if ($[83] !== multiple) {
    t36 = [multiple];
    $[83] = multiple;
    $[84] = t36;
  } else {
    t36 = $[84];
  }
  useFirstSkipEffect(t35, t36);
  var t37;
  if ($[85] !== async || $[86] !== onAsyncLoadValueItemRef || $[87] !== setItems || $[88] !== valueItem || $[89] !== value_2) {
    t37 = function t37() {
      if (async && onAsyncLoadValueItemRef.current) {
        if (value_2 != null) {
          if (!valueItem) {
            onAsyncLoadValueItemRef.current(value_2).then(function (valueItem_0) {
              setValueItem(valueItem_0);
              if (valueItem_0) {
                if (Array.isArray(valueItem_0)) {
                  setItems(valueItem_0);
                } else {
                  setItems([valueItem_0]);
                }
              }
            });
          }
        } else {
          setValueItem(null);
        }
      }
    };
    $[85] = async;
    $[86] = onAsyncLoadValueItemRef;
    $[87] = setItems;
    $[88] = valueItem;
    $[89] = value_2;
    $[90] = t37;
  } else {
    t37 = $[90];
  }
  var t38;
  if ($[91] !== async || $[92] !== valueItem || $[93] !== value_2) {
    t38 = [async, value_2, valueItem];
    $[91] = async;
    $[92] = valueItem;
    $[93] = value_2;
    $[94] = t38;
  } else {
    t38 = $[94];
  }
  useEventEffect(t37, t38);
  var t39;
  if ($[95] !== async || $[96] !== asyncTimeoutRef || $[97] !== componentValue || $[98] !== inputValue || $[99] !== onLoadItems || $[100] !== setAsyncTimeout || $[101] !== setItems) {
    t39 = function t39() {
      if (async && onLoadItems) {
        clearTimeoutRef(asyncTimeoutRef);
        if (inputValue != null) {
          showOnGetItemLoading();
          setAsyncTimeout(function () {
            onLoadItems === null || onLoadItems === void 0 || onLoadItems(inputValue).then(function (items_1) {
              if (componentValue) {
                if (Array.isArray(componentValue)) {
                  var exceptValues = componentValue.map(_temp3);
                  setItems([].concat(_toConsumableArray(componentValue), _toConsumableArray(items_1.filter(function (info_3) {
                    return !exceptValues.includes(info_3.value);
                  }))));
                } else {
                  var exceptValue_0 = componentValue.value;
                  setItems([componentValue].concat(_toConsumableArray(items_1.filter(function (info_4) {
                    return info_4.value !== exceptValue_0;
                  }))));
                }
              } else {
                setItems(items_1);
              }
            })["finally"](function () {
              hideOnGetItemLoading();
            });
          }, 300);
        } else {
          if (Array.isArray(componentValue)) {
            setItems(componentValue);
          } else {
            if (componentValue) {
              setItems([componentValue]);
            } else {
              setItems([]);
            }
          }
        }
      }
    };
    $[95] = async;
    $[96] = asyncTimeoutRef;
    $[97] = componentValue;
    $[98] = inputValue;
    $[99] = onLoadItems;
    $[100] = setAsyncTimeout;
    $[101] = setItems;
    $[102] = t39;
  } else {
    t39 = $[102];
  }
  var t40;
  if ($[103] !== async || $[104] !== inputValue) {
    t40 = [async, inputValue];
    $[103] = async;
    $[104] = inputValue;
    $[105] = t40;
  } else {
    t40 = $[105];
  }
  useEventEffect(t39, t40);
  var t41;
  if ($[106] === Symbol["for"]("react.memo_cache_sentinel")) {
    t41 = function t41() {
      var _textFieldRef$current;
      (_textFieldRef$current = textFieldRef.current) === null || _textFieldRef$current === void 0 || _textFieldRef$current.focus();
    };
    $[106] = t41;
  } else {
    t41 = $[106];
  }
  var focus = t41;
  var t42;
  if ($[107] !== name) {
    t42 = function t42() {
      return name;
    };
    $[107] = name;
    $[108] = t42;
  } else {
    t42 = $[108];
  }
  var t43;
  if ($[109] !== getFinalValueRef || $[110] !== initValueRef) {
    t43 = function t43() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[109] = getFinalValueRef;
    $[110] = initValueRef;
    $[111] = t43;
  } else {
    t43 = $[111];
  }
  var t44;
  if ($[112] !== initValueRef || $[113] !== updateValue) {
    t44 = function t44() {
      return updateValue(initValueRef.current);
    };
    $[112] = initValueRef;
    $[113] = updateValue;
    $[114] = t44;
  } else {
    t44 = $[114];
  }
  var t45;
  if ($[115] !== valueRef) {
    t45 = function t45() {
      return valueRef.current;
    };
    $[115] = valueRef;
    $[116] = t45;
  } else {
    t45 = $[116];
  }
  var t46;
  if ($[117] !== updateValue) {
    t46 = function t46(newValue_4) {
      return updateValue(newValue_4);
    };
    $[117] = updateValue;
    $[118] = t46;
  } else {
    t46 = $[118];
  }
  var t47;
  if ($[119] !== dataRef) {
    t47 = function t47() {
      return dataRef.current;
    };
    $[119] = dataRef;
    $[120] = t47;
  } else {
    t47 = $[120];
  }
  var t48;
  if ($[121] !== setData) {
    t48 = function t48(data_0) {
      return setData(data_0);
    };
    $[121] = setData;
    $[122] = t48;
  } else {
    t48 = $[122];
  }
  var t49;
  if ($[123] !== exceptValue) {
    t49 = function t49() {
      return !!exceptValue;
    };
    $[123] = exceptValue;
    $[124] = t49;
  } else {
    t49 = $[124];
  }
  var t50;
  if ($[125] !== disabled) {
    t50 = function t50() {
      return !!disabled;
    };
    $[125] = disabled;
    $[126] = t50;
  } else {
    t50 = $[126];
  }
  var t51;
  if ($[127] === Symbol["for"]("react.memo_cache_sentinel")) {
    t51 = function t51(disabled_0) {
      return setDisabled(disabled_0);
    };
    $[127] = t51;
  } else {
    t51 = $[127];
  }
  var t52;
  if ($[128] !== hidden) {
    t52 = function t52() {
      return !!hidden;
    };
    $[128] = hidden;
    $[129] = t52;
  } else {
    t52 = $[129];
  }
  var t53;
  if ($[130] === Symbol["for"]("react.memo_cache_sentinel")) {
    t53 = function t53(hidden_0) {
      return setHidden(hidden_0);
    };
    $[130] = t53;
  } else {
    t53 = $[130];
  }
  var t54;
  if ($[131] !== validate || $[132] !== valueRef) {
    t54 = function t54() {
      return validate(valueRef.current);
    };
    $[131] = validate;
    $[132] = valueRef;
    $[133] = t54;
  } else {
    t54 = $[133];
  }
  var t55;
  if ($[134] !== formValueSeparator) {
    t55 = function t55() {
      return formValueSeparator;
    };
    $[134] = formValueSeparator;
    $[135] = t55;
  } else {
    t55 = $[135];
  }
  var t56;
  if ($[136] !== formValueSort) {
    t56 = function t56() {
      return !!formValueSort;
    };
    $[136] = formValueSort;
    $[137] = t56;
  } else {
    t56 = $[137];
  }
  var t57;
  if ($[138] !== itemsRef) {
    t57 = function t57() {
      return itemsRef.current;
    };
    $[138] = itemsRef;
    $[139] = t57;
  } else {
    t57 = $[139];
  }
  var t58;
  if ($[140] !== multiple) {
    t58 = function t58() {
      return !!multiple;
    };
    $[140] = multiple;
    $[141] = t58;
  } else {
    t58 = $[141];
  }
  var t59;
  if ($[142] !== loadingRef) {
    t59 = function t59() {
      return !!loadingRef.current;
    };
    $[142] = loadingRef;
    $[143] = t59;
  } else {
    t59 = $[143];
  }
  var t60;
  if ($[144] !== setLoading) {
    t60 = function t60(loading_0) {
      return setLoading(loading_0);
    };
    $[144] = setLoading;
    $[145] = t60;
  } else {
    t60 = $[145];
  }
  var t61;
  if ($[146] !== async || $[147] !== onLoadItemsRef || $[148] !== setItems) {
    t61 = function t61() {
      if (!async && onLoadItemsRef.current) {
        showOnGetItemLoading();
        onLoadItemsRef.current().then(function (items_2) {
          setItems(items_2);
        })["finally"](function () {
          hideOnGetItemLoading();
        });
      }
    };
    $[146] = async;
    $[147] = onLoadItemsRef;
    $[148] = setItems;
    $[149] = t61;
  } else {
    t61 = $[149];
  }
  var t62;
  if ($[150] !== setErrorErrorHelperText || $[151] !== setItems || $[152] !== t42 || $[153] !== t43 || $[154] !== t44 || $[155] !== t45 || $[156] !== t46 || $[157] !== t47 || $[158] !== t48 || $[159] !== t49 || $[160] !== t50 || $[161] !== t52 || $[162] !== t54 || $[163] !== t55 || $[164] !== t56 || $[165] !== t57 || $[166] !== t58 || $[167] !== t59 || $[168] !== t60 || $[169] !== t61) {
    t62 = {
      getType: _temp4,
      getName: t42,
      getReset: t43,
      reset: t44,
      getValue: t45,
      setValue: t46,
      getData: t47,
      setData: t48,
      isExceptValue: t49,
      isDisabled: t50,
      setDisabled: t51,
      isHidden: t52,
      setHidden: t53,
      focus: focus,
      focusValidate: focus,
      validate: t54,
      setError: setErrorErrorHelperText,
      getFormValueSeparator: t55,
      isFormValueSort: t56,
      getItems: t57,
      setItems: setItems,
      isMultiple: t58,
      getLoading: t59,
      setLoading: t60,
      reloadItems: t61,
      setInputValue: setInputValue
    };
    $[150] = setErrorErrorHelperText;
    $[151] = setItems;
    $[152] = t42;
    $[153] = t43;
    $[154] = t44;
    $[155] = t45;
    $[156] = t46;
    $[157] = t47;
    $[158] = t48;
    $[159] = t49;
    $[160] = t50;
    $[161] = t52;
    $[162] = t54;
    $[163] = t55;
    $[164] = t56;
    $[165] = t57;
    $[166] = t58;
    $[167] = t59;
    $[168] = t60;
    $[169] = t61;
    $[170] = t62;
  } else {
    t62 = $[170];
  }
  var commands = t62;
  var t63;
  if ($[171] !== id || $[172] !== onAddValueItem) {
    t63 = function t63(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[171] = id;
    $[172] = onAddValueItem;
    $[173] = t63;
  } else {
    t63 = $[173];
  }
  var t64;
  if ($[174] !== id || $[175] !== onRemoveValueItem) {
    t64 = function t64() {
      return onRemoveValueItem(id);
    };
    $[174] = id;
    $[175] = onRemoveValueItem;
    $[176] = t64;
  } else {
    t64 = $[176];
  }
  useForwardRef(ref, commands, t63, t64);
  var t65;
  if ($[177] !== getFinalValueRef || $[178] !== multiple || $[179] !== name || $[180] !== onAddItem || $[181] !== onRequestSearchSubmit || $[182] !== onValueChangeByUser || $[183] !== updateValue || $[184] !== valueRef) {
    t65 = function t65(componentValue_0, reason, details) {
      var go = function go() {
        var newValue_5 = undefined;
        if (componentValue_0) {
          if (componentValue_0) {
            if (Array.isArray(componentValue_0)) {
              newValue_5 = componentValue_0.map(_temp5);
            } else {
              newValue_5 = componentValue_0.value;
            }
          }
        }
        var finalValue_2 = getFinalValueRef.current(newValue_5);
        if (!equal(valueRef.current, finalValue_2)) {
          updateValue(finalValue_2, true);
          setValueItem(componentValue_0);
          setTimeout(function () {
            onValueChangeByUser(name, finalValue_2);
            onRequestSearchSubmit(name, finalValue_2);
          });
        }
      };
      if (multiple && details && ["createOption", "selectOption"].includes(reason)) {
        if (onAddItem) {
          var result = onAddItem(details.option);
          if (result instanceof Promise) {
            result.then(function (add) {
              if (add) {
                go();
              }
            });
          } else {
            if (result) {
              go();
            }
          }
        } else {
          go();
        }
      } else {
        go();
      }
    };
    $[177] = getFinalValueRef;
    $[178] = multiple;
    $[179] = name;
    $[180] = onAddItem;
    $[181] = onRequestSearchSubmit;
    $[182] = onValueChangeByUser;
    $[183] = updateValue;
    $[184] = valueRef;
    $[185] = t65;
  } else {
    t65 = $[185];
  }
  var handleChange = t65;
  var t66;
  if ($[186] !== getOptionDisabled) {
    t66 = function t66(option) {
      if (getOptionDisabled) {
        return option.disabled || getOptionDisabled(option);
      } else {
        return !!option.disabled;
      }
    };
    $[186] = getOptionDisabled;
    $[187] = t66;
  } else {
    t66 = $[187];
  }
  var handleGetOptionDisabled = t66;
  var style;
  if ($[188] !== hidden || $[189] !== initStyle || $[190] !== width) {
    style = _objectSpread2({
      minWidth: 120
    }, initStyle);
    if (hidden) {
      style.display = "none";
    }
    if (width != null) {
      style.width = width;
    }
    $[188] = hidden;
    $[189] = initStyle;
    $[190] = width;
    $[191] = style;
  } else {
    style = $[191];
  }
  var t67;
  if ($[192] !== items) {
    t67 = items || [];
    $[192] = items;
    $[193] = t67;
  } else {
    t67 = $[193];
  }
  var t68;
  if ($[194] !== className) {
    t68 = classNames(className, "PFormValueItem", "PFormAutocomplete");
    $[194] = className;
    $[195] = t68;
  } else {
    t68 = $[195];
  }
  var t69 = !width && fullWidth;
  var t70 = componentValue;
  var t71 = loading || isOnGetItemLoading;
  var t72;
  if ($[196] !== handleChange) {
    t72 = function t72(e, value_4, reason_0, details_0) {
      return handleChange(value_4, reason_0, details_0);
    };
    $[196] = handleChange;
    $[197] = t72;
  } else {
    t72 = $[197];
  }
  var t73;
  if ($[198] !== onRenderItem) {
    t73 = function t73(props, option_1) {
      return /*#__PURE__*/React.createElement("li", _extends({}, props, {
        key: "".concat(option_1.value)
      }), onRenderItem ? onRenderItem(option_1) : option_1.label);
    };
    $[198] = onRenderItem;
    $[199] = t73;
  } else {
    t73 = $[199];
  }
  var t74;
  if ($[200] === Symbol["for"]("react.memo_cache_sentinel")) {
    t74 = function t74(event, newInputValue, reason_1) {
      if (reason_1 === "input") {
        setInputValue(newInputValue);
      } else {
        if (reason_1 === "reset") {
          setInputValue(undefined);
        }
      }
    };
    $[200] = t74;
  } else {
    t74 = $[200];
  }
  var t75;
  if ($[201] !== multiple || $[202] !== onRenderTag || $[203] !== size || $[204] !== variant) {
    t75 = multiple ? function (value_5, getItemProps) {
      if (Array.isArray(value_5)) {
        return value_5.map(function (option_2, index) {
          return /*#__PURE__*/React.createElement(Chip, _extends({
            key: index,
            size: "small",
            style: variant === "outlined" && size === "small" ? {
              marginTop: 2,
              marginBottom: 0
            } : undefined,
            label: onRenderTag ? onRenderTag(option_2) : option_2.label
          }, getItemProps({
            index: index
          })));
        });
      } else {
        return /*#__PURE__*/React.createElement(Chip, _extends({
          size: "small",
          style: variant === "outlined" && size === "small" ? {
            marginTop: 2,
            marginBottom: 0
          } : undefined,
          label: onRenderTag ? onRenderTag(value_5) : value_5.label
        }, getItemProps({
          index: 0
        })));
      }
    } : undefined;
    $[201] = multiple;
    $[202] = onRenderTag;
    $[203] = size;
    $[204] = variant;
    $[205] = t75;
  } else {
    t75 = $[205];
  }
  var t76;
  if ($[206] !== autoFocus || $[207] !== color || $[208] !== disabled || $[209] !== error || $[210] !== errorHelperText || $[211] !== focused || $[212] !== helperText || $[213] !== isOnGetItemLoading || $[214] !== label || $[215] !== labelIcon || $[216] !== labelShrink || $[217] !== loading || $[218] !== name || $[219] !== onBlurRef || $[220] !== onFocusRef || $[221] !== placeholder || $[222] !== readOnly || $[223] !== required || $[224] !== size || $[225] !== variant) {
    t76 = function t76(params) {
      var _params$inputProps;
      var slotProps = {
        input: _objectSpread2(_objectSpread2({}, params.InputProps), {}, {
          autoFocus: autoFocus,
          style: {
            paddingTop: variant === "outlined" && size === "small" ? 7 : undefined,
            paddingBottom: variant === "outlined" && size === "small" ? 5 : undefined,
            marginTop: variant === "outlined" && size === "small" ? -1 : undefined
          },
          endAdornment: /*#__PURE__*/React.createElement(React.Fragment, null, loading || isOnGetItemLoading ? /*#__PURE__*/React.createElement(CircularProgress, {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        }),
        htmlInput: _objectSpread2(_objectSpread2({}, params.inputProps), {}, {
          style: _objectSpread2(_objectSpread2({}, (_params$inputProps = params.inputProps) === null || _params$inputProps === void 0 ? void 0 : _params$inputProps.style), variant === "outlined" && size === "small" ? {
            marginTop: 1
          } : undefined),
          tabIndex: readOnly || disabled ? -1 : undefined,
          onFocus: function onFocus(e_0) {
            var _onFocusRef$current, _params$inputProps$on, _params$inputProps2;
            (_onFocusRef$current = onFocusRef.current) === null || _onFocusRef$current === void 0 || _onFocusRef$current.call(onFocusRef, e_0);
            params === null || params === void 0 || (_params$inputProps$on = (_params$inputProps2 = params.inputProps).onFocus) === null || _params$inputProps$on === void 0 || _params$inputProps$on.call(_params$inputProps2, e_0);
          },
          onBlur: function onBlur(e_1) {
            var _onBlurRef$current, _params$inputProps$on2, _params$inputProps3;
            (_onBlurRef$current = onBlurRef.current) === null || _onBlurRef$current === void 0 || _onBlurRef$current.call(onBlurRef, e_1);
            params === null || params === void 0 || (_params$inputProps$on2 = (_params$inputProps3 = params.inputProps).onBlur) === null || _params$inputProps$on2 === void 0 || _params$inputProps$on2.call(_params$inputProps3, e_1);
          }
        })
      };
      return /*#__PURE__*/React.createElement(PFormTextField, _extends({}, params, {
        ref: textFieldRef,
        name: name,
        variant: variant,
        size: size,
        color: color,
        labelIcon: labelIcon,
        label: label,
        labelShrink: labelShrink,
        required: required,
        focused: focused,
        error: error,
        readOnly: readOnly,
        helperText: error ? errorHelperText : helperText,
        slotProps: slotProps,
        placeholder: placeholder,
        noFormValueItem: true
      }));
    };
    $[206] = autoFocus;
    $[207] = color;
    $[208] = disabled;
    $[209] = error;
    $[210] = errorHelperText;
    $[211] = focused;
    $[212] = helperText;
    $[213] = isOnGetItemLoading;
    $[214] = label;
    $[215] = labelIcon;
    $[216] = labelShrink;
    $[217] = loading;
    $[218] = name;
    $[219] = onBlurRef;
    $[220] = onFocusRef;
    $[221] = placeholder;
    $[222] = readOnly;
    $[223] = required;
    $[224] = size;
    $[225] = variant;
    $[226] = t76;
  } else {
    t76 = $[226];
  }
  var t77;
  if ($[227] !== disableClearable || $[228] !== disablePortal || $[229] !== disabled || $[230] !== getLimitTagsText || $[231] !== handleGetOptionDisabled || $[232] !== limitTags || $[233] !== loadingText || $[234] !== multiple || $[235] !== noOptionsText || $[236] !== openOnFocus || $[237] !== readOnly || $[238] !== style || $[239] !== sx || $[240] !== t67 || $[241] !== t68 || $[242] !== t69 || $[243] !== t70 || $[244] !== t71 || $[245] !== t72 || $[246] !== t73 || $[247] !== t75 || $[248] !== t76) {
    t77 = /*#__PURE__*/React.createElement(Autocomplete, {
      options: t67,
      className: t68,
      sx: sx,
      multiple: multiple,
      fullWidth: t69,
      openOnFocus: openOnFocus,
      disableClearable: disableClearable,
      disablePortal: disablePortal,
      noOptionsText: noOptionsText,
      value: t70,
      style: style,
      isOptionEqualToValue: _temp6,
      getOptionDisabled: handleGetOptionDisabled,
      disabled: disabled,
      readOnly: readOnly,
      loading: t71,
      loadingText: loadingText,
      limitTags: limitTags,
      getLimitTagsText: getLimitTagsText,
      onChange: t72,
      renderOption: t73,
      onInputChange: t74,
      renderValue: t75,
      renderInput: t76
    });
    $[227] = disableClearable;
    $[228] = disablePortal;
    $[229] = disabled;
    $[230] = getLimitTagsText;
    $[231] = handleGetOptionDisabled;
    $[232] = limitTags;
    $[233] = loadingText;
    $[234] = multiple;
    $[235] = noOptionsText;
    $[236] = openOnFocus;
    $[237] = readOnly;
    $[238] = style;
    $[239] = sx;
    $[240] = t67;
    $[241] = t68;
    $[242] = t69;
    $[243] = t70;
    $[244] = t71;
    $[245] = t72;
    $[246] = t73;
    $[247] = t75;
    $[248] = t76;
    $[249] = t77;
  } else {
    t77 = $[249];
  }
  return t77;
}
function _temp6(option_0, value_3) {
  return option_0.value === value_3.value;
}
function _temp5(item) {
  return item.value;
}
function _temp4() {
  return "PFormAutocomplete";
}
function _temp3(info_2) {
  return info_2.value;
}
function _temp2$2(res_0, info) {
  res_0[info.value.toString()] = info;
  return res_0;
}
function _temp$l(res, t0) {
  var value = t0.value;
  res[value.toString()] = value;
  return res;
}/********************************************************************************************************************
 * getDateValidationErrorText
 * ******************************************************************************************************************/

function getDateValidationErrorText(error) {
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

/********************************************************************************************************************
 * Const
 * ******************************************************************************************************************/

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

/********************************************************************************************************************
 * getDateTimeFormat
 * ******************************************************************************************************************/

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
      } else {
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
      } else {
        throw new Error("util::date_time::getDateTimeFormat - type \uC774 '".concat(type, "' \uC77C \uACBD\uC6B0 time \uAC12\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
      }
      break;
  }
}

/********************************************************************************************************************
 * getDateTimeFormValueFormat
 * ******************************************************************************************************************/

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
      } else {
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
      } else {
        throw new Error("util::date_time::getDateTimeFormValueFormat - type \uC774 '".concat(type, "' \uC77C \uACBD\uC6B0 time \uAC12\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
      }
      break;
  }
}

/********************************************************************************************************************
 * getAvailableDateValFormat
 * ******************************************************************************************************************/

function getAvailableDateValFormat(type, time) {
  var availableDateType;
  if (time) {
    availableDateType = getAvailableDateType(type, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type, time);
  } else {
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
      } else {
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
    } else {
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
    } else {
      max = maxDate;
    }
  }
  var minItem = min ? {
    date: min,
    year: Number(min.format(getAvailableDateValFormat('year'))),
    month: Number(min.format(getAvailableDateValFormat('month'))),
    day: Number(min.format(getAvailableDateValFormat('day'))),
    hour: Number(min.format(getAvailableDateValFormat('hour'))),
    minute: Number(min.format(getAvailableDateValFormat('minute'))),
    second: Number(min.format(getAvailableDateValFormat('second')))
  } : null;
  var maxItem = max ? {
    date: max,
    year: Number(max.format(getAvailableDateValFormat('year'))),
    month: Number(max.format(getAvailableDateValFormat('month'))),
    day: Number(max.format(getAvailableDateValFormat('day'))),
    hour: Number(max.format(getAvailableDateValFormat('hour'))),
    minute: Number(max.format(getAvailableDateValFormat('minute'))),
    second: Number(max.format(getAvailableDateValFormat('second')))
  } : null;
  return [minItem, maxItem];
}

/********************************************************************************************************************
 * getAvailableDate
 * ******************************************************************************************************************/

function getAvailableDate(availableDate, type, time) {
  var availableDateType;
  if (time) {
    availableDateType = getAvailableDateType(type, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type, time);
  } else {
    availableDateType = type;
  }
  var availableDateVal = getAvailableDateVal(availableDate, availableDateType);
  var availableDateValFormat = getAvailableDateValFormat(availableDateType);
  return [availableDateVal[0] ? dayjs(availableDateVal[0].toString(), availableDateValFormat) : null, availableDateVal[1] ? dayjs(availableDateVal[1].toString(), availableDateValFormat) : null];
}

/********************************************************************************************************************
 * getAvailableDateVal
 * ******************************************************************************************************************/

function getAvailableDateVal(availableDate, type, time) {
  var availableDateType;
  if (time) {
    availableDateType = getAvailableDateType(type, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type, time);
  } else {
    availableDateType = type;
  }
  return [availableDate[0] ? availableDate[0][availableDateType] : null, availableDate[1] ? availableDate[1][availableDateType] : null];
}

/********************************************************************************************************************
 * getDateVal
 * ******************************************************************************************************************/

function getDateValForAvailableDate(date, type, time) {
  var format = getAvailableDateValFormat(type, time);
  return Number(date.format(format));
}

/********************************************************************************************************************
 * isDateAvailable
 * ******************************************************************************************************************/

function isDateAvailable(date, availableDate, type, time) {
  var availableDateType;
  if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type, time);
  } else {
    availableDateType = type;
  }
  var dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
  var availableDateVal = getAvailableDateVal(availableDate, availableDateType);
  return !(availableDateVal[0] && dateVal < availableDateVal[0] || availableDateVal[1] && dateVal > availableDateVal[1]);
}

/********************************************************************************************************************
 * checkDateAvailable
 * ******************************************************************************************************************/

function checkDateAvailable(date, availableDate, type, time) {
  var availableDateType;
  if (time) {
    availableDateType = getAvailableDateType(type, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type, time);
  } else {
    availableDateType = type;
  }
  var dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
  var availableDateVal = getAvailableDateVal(availableDate, availableDateType);
  if (availableDateVal[0] && dateVal < availableDateVal[0]) return 'min';
  if (availableDateVal[1] && dateVal > availableDateVal[1]) return 'max';
  return 'available';
}/********************************************************************************************************************
 * getFileSizeText
 * ******************************************************************************************************************/

function getFileSizeText(bytes) {
  var dp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
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
}insertStyle(".PrivateYearSelect{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.PrivateYearSelect button{font-size:14px;font-weight:400;border-radius:18px}");var _excluded$f = ["ref", "children", "className", "selected", "activated", "outlined"];
var PrivateToggleButton = function PrivateToggleButton(t0) {
  var $ = c(30);
  var activated;
  var children;
  var className;
  var outlined;
  var props;
  var ref;
  var selected;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    children = _t.children;
    className = _t.className;
    selected = _t.selected;
    activated = _t.activated;
    outlined = _t.outlined;
    props = _objectWithoutProperties(_t, _excluded$f);
    $[0] = t0;
    $[1] = activated;
    $[2] = children;
    $[3] = className;
    $[4] = outlined;
    $[5] = props;
    $[6] = ref;
    $[7] = selected;
  } else {
    activated = $[1];
    children = $[2];
    className = $[3];
    outlined = $[4];
    props = $[5];
    ref = $[6];
    selected = $[7];
  }
  var theme = useTheme();
  var t1;
  if ($[8] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      backgroundColor: darken("#fff", 0.1)
    };
    $[8] = t1;
  } else {
    t1 = $[8];
  }
  var newSx;
  if ($[9] !== activated || $[10] !== outlined || $[11] !== selected || $[12] !== theme) {
    newSx = {
      color: "inherit",
      ":hover": t1
    };
    if (selected) {
      newSx.backgroundColor = theme.palette.primary.main;
      newSx.color = theme.palette.primary.contrastText;
      var _t2;
      if ($[14] !== theme.palette.primary.main) {
        _t2 = darken(theme.palette.primary.main, 0.2);
        $[14] = theme.palette.primary.main;
        $[15] = _t2;
      } else {
        _t2 = $[15];
      }
      var _t3;
      if ($[16] !== _t2) {
        _t3 = {
          backgroundColor: _t2
        };
        $[16] = _t2;
        $[17] = _t3;
      } else {
        _t3 = $[17];
      }
      newSx[":hover"] = _t3;
    } else {
      if (activated) {
        newSx.backgroundColor = "#f5f5f5";
      }
      if (outlined) {
        newSx.border = "1px solid rgba(0, 0, 0, 0.1)";
      }
    }
    $[9] = activated;
    $[10] = outlined;
    $[11] = selected;
    $[12] = theme;
    $[13] = newSx;
  } else {
    newSx = $[13];
  }
  var sx = newSx;
  var t2 = selected && "selected";
  var t3 = activated && "activated";
  var t4 = outlined && "outlined";
  var t5 = selected && "selected";
  var t6;
  if ($[18] !== className || $[19] !== t2 || $[20] !== t3 || $[21] !== t4 || $[22] !== t5) {
    t6 = classNames(className, t2, t3, t4, t5);
    $[18] = className;
    $[19] = t2;
    $[20] = t3;
    $[21] = t4;
    $[22] = t5;
    $[23] = t6;
  } else {
    t6 = $[23];
  }
  var t7;
  if ($[24] !== children || $[25] !== props || $[26] !== ref || $[27] !== sx || $[28] !== t6) {
    t7 = /*#__PURE__*/React.createElement(Button, _extends({}, props, {
      ref: ref,
      sx: sx,
      variant: "text",
      className: t6
    }), children);
    $[24] = children;
    $[25] = props;
    $[26] = ref;
    $[27] = sx;
    $[28] = t6;
    $[29] = t7;
  } else {
    t7 = $[29];
  }
  return t7;
};var YEARS$1 = new Array(200).fill(0);
for (var i$6 = 0; i$6 < 200; i$6 += 1) {
  YEARS$1[i$6] = 1900 + i$6;
}
var PrivateYearSelect = function PrivateYearSelect(t0) {
  var $ = c(37);
  var selectYear = t0.selectYear,
    activeYear = t0.activeYear,
    availableDate = t0.availableDate,
    initOnSelect = t0.onSelect;
  var containerRef = useRef(null);
  var simpleBarRef = useRef(null);
  var onSelectRef = useAutoUpdateRef(initOnSelect);
  var t1;
  if ($[0] !== activeYear) {
    t1 = function t1() {
      var _containerRef$current;
      var activeEls = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.getElementsByClassName("private-year-select-value-".concat(activeYear));
      if (activeEls && activeEls.length > 0) {
        var _containerRef$current2, _simpleBarRef$current;
        var activeEl = activeEls[0];
        var activeRect = activeEl.getBoundingClientRect();
        var containerRect = (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.getBoundingClientRect();
        var simpleBarRect = (_simpleBarRef$current = simpleBarRef.current) === null || _simpleBarRef$current === void 0 ? void 0 : _simpleBarRef$current.getBoundingClientRect();
        if (containerRect && simpleBarRect && activeRect) {
          var _simpleBarRef$current2, _simpleBarRef$current3;
          var scrollTop = ((_simpleBarRef$current2 = simpleBarRef.current) === null || _simpleBarRef$current2 === void 0 ? void 0 : _simpleBarRef$current2.scrollTop) || 0;
          (_simpleBarRef$current3 = simpleBarRef.current) === null || _simpleBarRef$current3 === void 0 || _simpleBarRef$current3.scrollTo({
            left: 0,
            top: activeRect.top - containerRect.top - containerRect.height / 2 + activeRect.height / 2 + scrollTop
          });
        }
      }
    };
    $[0] = activeYear;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = [];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  useEventEffect(t1, t2);
  var t3;
  if ($[3] !== onSelectRef) {
    t3 = function t3(e) {
      onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute("data-id")));
    };
    $[3] = onSelectRef;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  var handleClick = t3;
  var T0;
  var T1;
  var t10;
  var t11;
  var t4;
  var t5;
  var t6;
  var t7;
  var t8;
  var t9;
  if ($[5] !== activeYear || $[6] !== availableDate || $[7] !== handleClick || $[8] !== selectYear) {
    var today = dayjs().startOf("date");
    t10 = containerRef;
    t11 = "PrivateYearSelect";
    T1 = SimpleBar;
    if ($[19] === Symbol["for"]("react.memo_cache_sentinel")) {
      t8 = {
        ref: simpleBarRef
      };
      t9 = {
        height: "100%"
      };
      $[19] = t8;
      $[20] = t9;
    } else {
      t8 = $[19];
      t9 = $[20];
    }
    T0 = Grid;
    t4 = true;
    if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
      t5 = {
        padding: "5px 10px"
      };
      $[21] = t5;
    } else {
      t5 = $[21];
    }
    t6 = 1;
    t7 = YEARS$1.map(function (y) {
      var isToday = y === today.year();
      var isActive = y === activeYear;
      var isSelected = y === selectYear;
      var disabled = !!availableDate[0] && y < availableDate[0].year || !!availableDate[1] && y > availableDate[1].year;
      return /*#__PURE__*/React.createElement(Grid, {
        key: y,
        size: {
          xs: 3
        }
      }, /*#__PURE__*/React.createElement(PrivateToggleButton, {
        "data-id": y,
        className: "private-year-select-value-".concat(y),
        fullWidth: true,
        selected: isSelected,
        activated: isActive,
        outlined: isToday,
        disabled: disabled,
        onClick: handleClick
      }, y));
    });
    $[5] = activeYear;
    $[6] = availableDate;
    $[7] = handleClick;
    $[8] = selectYear;
    $[9] = T0;
    $[10] = T1;
    $[11] = t10;
    $[12] = t11;
    $[13] = t4;
    $[14] = t5;
    $[15] = t6;
    $[16] = t7;
    $[17] = t8;
    $[18] = t9;
  } else {
    T0 = $[9];
    T1 = $[10];
    t10 = $[11];
    t11 = $[12];
    t4 = $[13];
    t5 = $[14];
    t6 = $[15];
    t7 = $[16];
    t8 = $[17];
    t9 = $[18];
  }
  var t12;
  if ($[22] !== T0 || $[23] !== t4 || $[24] !== t5 || $[25] !== t6 || $[26] !== t7) {
    t12 = /*#__PURE__*/React.createElement(T0, {
      container: t4,
      style: t5,
      spacing: t6
    }, t7);
    $[22] = T0;
    $[23] = t4;
    $[24] = t5;
    $[25] = t6;
    $[26] = t7;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  var t13;
  if ($[28] !== T1 || $[29] !== t12 || $[30] !== t8 || $[31] !== t9) {
    t13 = /*#__PURE__*/React.createElement(T1, {
      scrollableNodeProps: t8,
      style: t9
    }, t12);
    $[28] = T1;
    $[29] = t12;
    $[30] = t8;
    $[31] = t9;
    $[32] = t13;
  } else {
    t13 = $[32];
  }
  var t14;
  if ($[33] !== t10 || $[34] !== t11 || $[35] !== t13) {
    t14 = /*#__PURE__*/React.createElement("div", {
      ref: t10,
      className: t11
    }, t13);
    $[33] = t10;
    $[34] = t11;
    $[35] = t13;
    $[36] = t14;
  } else {
    t14 = $[36];
  }
  return t14;
};insertStyle(".PrivateMonthSelect{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.PrivateMonthSelect button{font-size:15px;font-weight:400;border-radius:18px}");var MONTHS$1 = new Array(12).fill(0);
for (var i$5 = 0; i$5 < 12; i$5 += 1) {
  MONTHS$1[i$5] = i$5;
}
var PrivateMonthSelect = function PrivateMonthSelect(t0) {
  var $ = c(22);
  var year = t0.year,
    selectYear = t0.selectYear,
    selectMonth = t0.selectMonth,
    activeMonth = t0.activeMonth,
    availableDate = t0.availableDate,
    onSelect = t0.onSelect;
  var T0;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  if ($[0] !== activeMonth || $[1] !== availableDate || $[2] !== onSelect || $[3] !== selectMonth || $[4] !== selectYear || $[5] !== year) {
    var today = dayjs().startOf("date");
    t5 = "PrivateMonthSelect";
    T0 = Grid;
    t1 = true;
    if ($[12] === Symbol["for"]("react.memo_cache_sentinel")) {
      t2 = {
        padding: "5px 10px"
      };
      $[12] = t2;
    } else {
      t2 = $[12];
    }
    t3 = 1;
    t4 = MONTHS$1.map(function (m) {
      var isToday = today.year() === year && m === today.month();
      var isActive = m === activeMonth;
      var isSelected = selectYear === year && m === selectMonth;
      var ym = year * 100 + (m + 1);
      var disabled = !!availableDate[0] && ym < availableDate[0].month || !!availableDate[1] && ym > availableDate[1].month;
      return /*#__PURE__*/React.createElement(Grid, {
        key: m,
        size: {
          xs: 4
        }
      }, /*#__PURE__*/React.createElement(PrivateToggleButton, {
        fullWidth: true,
        selected: isSelected,
        activated: isActive,
        outlined: isToday,
        disabled: disabled,
        onClick: function onClick() {
          return onSelect(m);
        }
      }, m + 1, "\uC6D4"));
    });
    $[0] = activeMonth;
    $[1] = availableDate;
    $[2] = onSelect;
    $[3] = selectMonth;
    $[4] = selectYear;
    $[5] = year;
    $[6] = T0;
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    T0 = $[6];
    t1 = $[7];
    t2 = $[8];
    t3 = $[9];
    t4 = $[10];
    t5 = $[11];
  }
  var t6;
  if ($[13] !== T0 || $[14] !== t1 || $[15] !== t2 || $[16] !== t3 || $[17] !== t4) {
    t6 = /*#__PURE__*/React.createElement(T0, {
      container: t1,
      style: t2,
      spacing: t3
    }, t4);
    $[13] = T0;
    $[14] = t1;
    $[15] = t2;
    $[16] = t3;
    $[17] = t4;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  var t7;
  if ($[19] !== t5 || $[20] !== t6) {
    t7 = /*#__PURE__*/React.createElement("div", {
      className: t5
    }, t6);
    $[19] = t5;
    $[20] = t6;
    $[21] = t7;
  } else {
    t7 = $[21];
  }
  return t7;
};insertStyle(".PrivateTimeSelect{position:absolute;left:0;right:0;top:0;bottom:0}.PrivateTimeSelect button{border-radius:0}");var DEFAULT_MINUTES$3 = new Array(60).fill(0);
for (var i$4 = 0; i$4 < DEFAULT_MINUTES$3.length; i$4 += 1) {
  DEFAULT_MINUTES$3[i$4] = i$4;
}
var PrivateTimeSelect = function PrivateTimeSelect(t0) {
  var $ = c(27);
  var ref = t0.ref,
    list = t0.list,
    listInterval = t0.listInterval,
    unit = t0.unit,
    value = t0.value,
    t1 = t0.cols,
    disableList = t0.disableList,
    initOnSelect = t0.onSelect;
  var cols = t1 === undefined ? 1 : t1;
  var containerRef = useRef(null);
  var simpleBarRef = useRef(null);
  var scrollTimerRef = useRef(undefined);
  var onSelectRef = useAutoUpdateRef(initOnSelect);
  var t2;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = function t2(value_0) {
      var _containerRef$current;
      var valueEls = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.getElementsByClassName("private-time-select-value-".concat(value_0));
      if (valueEls && valueEls.length > 0) {
        var lastSelectedTop = -1;
        var counter = 0;
        if (scrollTimerRef.current) {
          clearInterval(scrollTimerRef.current);
          scrollTimerRef.current = undefined;
        }
        var valueEl = valueEls[0];
        scrollTimerRef.current = setInterval(function () {
          var valueRect = valueEl.getBoundingClientRect();
          if (valueRect.top !== lastSelectedTop) {
            lastSelectedTop = valueRect.top;
          } else {
            counter = counter + 1;
            if (counter === 5) {
              var _containerRef$current2, _simpleBarRef$current;
              clearInterval(scrollTimerRef.current);
              scrollTimerRef.current = undefined;
              var containerRect = (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.getBoundingClientRect();
              var simpleBarRect = (_simpleBarRef$current = simpleBarRef.current) === null || _simpleBarRef$current === void 0 ? void 0 : _simpleBarRef$current.getBoundingClientRect();
              if (containerRect && simpleBarRect && valueRect) {
                var _simpleBarRef$current2;
                var scrollTop = ((_simpleBarRef$current2 = simpleBarRef.current) === null || _simpleBarRef$current2 === void 0 ? void 0 : _simpleBarRef$current2.scrollTop) || 0;
                var valueTop = valueRect.top - containerRect.top + scrollTop;
                var valueBottom = valueTop + valueRect.height;
                var simpleBarVisibleTop = scrollTop;
                var simpleBarVisibleBottom = simpleBarVisibleTop + simpleBarRect.height;
                if (valueTop < simpleBarVisibleTop || valueBottom > simpleBarVisibleBottom) {
                  var _simpleBarRef$current3;
                  (_simpleBarRef$current3 = simpleBarRef.current) === null || _simpleBarRef$current3 === void 0 || _simpleBarRef$current3.scrollTo({
                    left: 0,
                    top: valueRect.top - containerRect.top - containerRect.height / 2 + valueRect.height / 2 + scrollTop
                  });
                }
              }
            }
          }
        }, 10);
      }
    };
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  var scrollToValue = t2;
  var t3;
  if ($[1] !== value) {
    t3 = function t3() {
      if (value != null) {
        scrollToValue(value);
      }
      return function () {
        if (scrollTimerRef.current) {
          clearInterval(scrollTimerRef.current);
          scrollTimerRef.current = undefined;
        }
      };
    };
    $[1] = value;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  var t4;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = [];
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  useEventEffect(t3, t4);
  var t5;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {
      scrollToValue: scrollToValue
    };
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  useForwardRef(ref, t5);
  var t6;
  if ($[5] !== onSelectRef) {
    t6 = function t6(e) {
      onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute("data-id")));
    };
    $[5] = onSelectRef;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  var handleClick = t6;
  var t7;
  var t8;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = {
      ref: simpleBarRef
    };
    t8 = {
      height: "100%"
    };
    $[7] = t7;
    $[8] = t8;
  } else {
    t7 = $[7];
    t8 = $[8];
  }
  var t9;
  if ($[9] !== cols || $[10] !== disableList || $[11] !== handleClick || $[12] !== list || $[13] !== listInterval || $[14] !== unit || $[15] !== value) {
    var _t;
    if ($[17] !== listInterval) {
      _t = function _t(v) {
        return listInterval ? v % listInterval === 0 : true;
      };
      $[17] = listInterval;
      $[18] = _t;
    } else {
      _t = $[18];
    }
    var t11;
    if ($[19] !== cols || $[20] !== disableList || $[21] !== handleClick || $[22] !== unit || $[23] !== value) {
      t11 = function t11(v_0) {
        var isSelected = v_0 === value;
        var disabled = !!disableList && disableList.includes(v_0);
        return /*#__PURE__*/React.createElement(Grid, {
          key: v_0,
          size: {
            xs: 12 / (cols || 1)
          }
        }, /*#__PURE__*/React.createElement(PrivateToggleButton, {
          "data-id": v_0,
          className: "private-time-select-value-".concat(v_0),
          fullWidth: true,
          disabled: disabled,
          selected: isSelected,
          onClick: handleClick
        }, v_0, unit));
      };
      $[19] = cols;
      $[20] = disableList;
      $[21] = handleClick;
      $[22] = unit;
      $[23] = value;
      $[24] = t11;
    } else {
      t11 = $[24];
    }
    t9 = list.filter(_t).map(t11);
    $[9] = cols;
    $[10] = disableList;
    $[11] = handleClick;
    $[12] = list;
    $[13] = listInterval;
    $[14] = unit;
    $[15] = value;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var t10;
  if ($[25] !== t9) {
    t10 = /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "PrivateTimeSelect"
    }, /*#__PURE__*/React.createElement(SimpleBar, {
      scrollableNodeProps: t7,
      style: t8
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true
    }, t9)));
    $[25] = t9;
    $[26] = t10;
  } else {
    t10 = $[26];
  }
  return t10;
};var DEFAULT_HOURS$2 = new Array(24).fill(0);
for (var i$3 = 0; i$3 < DEFAULT_HOURS$2.length; i$3 += 1) {
  DEFAULT_HOURS$2[i$3] = i$3;
}
var DEFAULT_MINUTES$2 = new Array(60).fill(0);
for (var _i$3 = 0; _i$3 < DEFAULT_MINUTES$2.length; _i$3 += 1) {
  DEFAULT_MINUTES$2[_i$3] = _i$3;
}
var DEFAULT_SECONDS$2 = new Array(60).fill(0);
for (var _i2$2 = 0; _i2$2 < DEFAULT_SECONDS$2.length; _i2$2 += 1) {
  DEFAULT_SECONDS$2[_i2$2] = _i2$2;
}
var PrivateTimeSection = function PrivateTimeSection(t0) {
  var $ = c(76);
  var time = t0.time,
    width = t0.width,
    cols = t0.cols,
    t1 = t0.hours,
    t2 = t0.minutes,
    t3 = t0.seconds,
    availableDate = t0.availableDate,
    minuteInterval = t0.minuteInterval,
    secondInterval = t0.secondInterval,
    value = t0.value,
    hourSelectRef = t0.hourSelectRef,
    minuteSelectRef = t0.minuteSelectRef,
    secondSelectRef = t0.secondSelectRef,
    onClose = t0.onClose,
    onChange = t0.onChange;
  var hours = t1 === undefined ? DEFAULT_HOURS$2 : t1;
  var minutes = t2 === undefined ? DEFAULT_MINUTES$2 : t2;
  var seconds = t3 === undefined ? DEFAULT_SECONDS$2 : t3;
  var newDisableHours;
  if ($[0] !== availableDate || $[1] !== hours || $[2] !== time || $[3] !== value) {
    newDisableHours = [];
    if (time && value && (availableDate[0] || availableDate[1])) {
      hours.forEach(function (h) {
        if (!isDateAvailable(value.set("hour", h), availableDate, "hour")) {
          newDisableHours.push(h);
        }
      });
    }
    $[0] = availableDate;
    $[1] = hours;
    $[2] = time;
    $[3] = value;
    $[4] = newDisableHours;
  } else {
    newDisableHours = $[4];
  }
  var disableHours = newDisableHours;
  var newDisableMinutes;
  if ($[5] !== availableDate || $[6] !== minutes || $[7] !== time || $[8] !== value) {
    newDisableMinutes = [];
    if (time === "minute" || time === "second") {
      if (value && (availableDate[0] || availableDate[1])) {
        minutes.forEach(function (m) {
          if (!isDateAvailable(value.set("minute", m), availableDate, "minute")) {
            newDisableMinutes.push(m);
          }
        });
      }
    }
    $[5] = availableDate;
    $[6] = minutes;
    $[7] = time;
    $[8] = value;
    $[9] = newDisableMinutes;
  } else {
    newDisableMinutes = $[9];
  }
  var disableMinutes = newDisableMinutes;
  var newDisableSeconds;
  if ($[10] !== availableDate || $[11] !== seconds || $[12] !== time || $[13] !== value) {
    newDisableSeconds = [];
    if (time === "second") {
      if (value && (availableDate[0] || availableDate[1])) {
        seconds.forEach(function (s) {
          if (!isDateAvailable(value.set("second", s), availableDate, "second")) {
            newDisableSeconds.push(s);
          }
        });
      }
    }
    $[10] = availableDate;
    $[11] = seconds;
    $[12] = time;
    $[13] = value;
    $[14] = newDisableSeconds;
  } else {
    newDisableSeconds = $[14];
  }
  var disableSeconds = newDisableSeconds;
  var t4;
  if ($[15] !== time || $[16] !== value) {
    t4 = time === "hour" && (value ? value.format("HH\uC2DC") : "00\uC2DC");
    $[15] = time;
    $[16] = value;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  var t5;
  if ($[18] !== time || $[19] !== value) {
    t5 = time === "minute" && (value ? value.format("HH\uC2DC mm\uBD84") : "00\uC2DC 00\uBD84");
    $[18] = time;
    $[19] = value;
    $[20] = t5;
  } else {
    t5 = $[20];
  }
  var t6;
  if ($[21] !== time || $[22] !== value) {
    t6 = time === "second" && (value ? value.format("HH\uC2DC mm\uBD84 ss\uCD08") : "00\uC2DC 00\uBD84 00\uCD08");
    $[21] = time;
    $[22] = value;
    $[23] = t6;
  } else {
    t6 = $[23];
  }
  var t7;
  if ($[24] !== t4 || $[25] !== t5 || $[26] !== t6) {
    t7 = /*#__PURE__*/React.createElement(Grid, {
      className: "time-title"
    }, t4, t5, t6);
    $[24] = t4;
    $[25] = t5;
    $[26] = t6;
    $[27] = t7;
  } else {
    t7 = $[27];
  }
  var t8;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = {
      height: "100%"
    };
    $[28] = t8;
  } else {
    t8 = $[28];
  }
  var t9;
  if ($[29] !== width) {
    t9 = {
      position: "relative",
      width: width
    };
    $[29] = width;
    $[30] = t9;
  } else {
    t9 = $[30];
  }
  var t10;
  if ($[31] !== value) {
    t10 = value && value.hour();
    $[31] = value;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var t11;
  if ($[33] !== onChange || $[34] !== value) {
    t11 = function t11(newValue) {
      onChange("hour", value ? value.set("hour", newValue) : dayjs().startOf("date").set("hour", newValue));
    };
    $[33] = onChange;
    $[34] = value;
    $[35] = t11;
  } else {
    t11 = $[35];
  }
  var t12;
  if ($[36] !== cols || $[37] !== disableHours || $[38] !== hourSelectRef || $[39] !== hours || $[40] !== t10 || $[41] !== t11) {
    t12 = /*#__PURE__*/React.createElement(PrivateTimeSelect, {
      ref: hourSelectRef,
      value: t10,
      unit: "\uC2DC",
      list: hours,
      disableList: disableHours,
      cols: cols,
      onSelect: t11
    });
    $[36] = cols;
    $[37] = disableHours;
    $[38] = hourSelectRef;
    $[39] = hours;
    $[40] = t10;
    $[41] = t11;
    $[42] = t12;
  } else {
    t12 = $[42];
  }
  var t13;
  if ($[43] !== t12 || $[44] !== t9) {
    t13 = /*#__PURE__*/React.createElement(Grid, {
      style: t9
    }, t12);
    $[43] = t12;
    $[44] = t9;
    $[45] = t13;
  } else {
    t13 = $[45];
  }
  var t14;
  if ($[46] !== cols || $[47] !== disableMinutes || $[48] !== minuteInterval || $[49] !== minuteSelectRef || $[50] !== minutes || $[51] !== onChange || $[52] !== time || $[53] !== value || $[54] !== width) {
    t14 = (time === "minute" || time === "second") && /*#__PURE__*/React.createElement(Grid, {
      style: {
        position: "relative",
        width: width
      }
    }, /*#__PURE__*/React.createElement(PrivateTimeSelect, {
      ref: minuteSelectRef,
      value: value && value.minute(),
      unit: "\uBD84",
      list: minutes,
      disableList: disableMinutes,
      cols: cols,
      listInterval: minuteInterval,
      onSelect: function onSelect(newValue_0) {
        onChange("minute", value ? value.set("minute", newValue_0) : dayjs().startOf("date").set("minute", newValue_0));
      }
    }));
    $[46] = cols;
    $[47] = disableMinutes;
    $[48] = minuteInterval;
    $[49] = minuteSelectRef;
    $[50] = minutes;
    $[51] = onChange;
    $[52] = time;
    $[53] = value;
    $[54] = width;
    $[55] = t14;
  } else {
    t14 = $[55];
  }
  var t15;
  if ($[56] !== cols || $[57] !== disableSeconds || $[58] !== onChange || $[59] !== secondInterval || $[60] !== secondSelectRef || $[61] !== seconds || $[62] !== time || $[63] !== value || $[64] !== width) {
    t15 = time === "second" && /*#__PURE__*/React.createElement(Grid, {
      style: {
        position: "relative",
        width: width
      }
    }, /*#__PURE__*/React.createElement(PrivateTimeSelect, {
      ref: secondSelectRef,
      value: value && value.second(),
      unit: "\uCD08",
      list: seconds,
      disableList: disableSeconds,
      cols: cols,
      listInterval: secondInterval,
      onSelect: function onSelect(newValue_1) {
        onChange("second", value ? value.set("second", newValue_1) : dayjs().startOf("date").set("second", newValue_1));
      }
    }));
    $[56] = cols;
    $[57] = disableSeconds;
    $[58] = onChange;
    $[59] = secondInterval;
    $[60] = secondSelectRef;
    $[61] = seconds;
    $[62] = time;
    $[63] = value;
    $[64] = width;
    $[65] = t15;
  } else {
    t15 = $[65];
  }
  var t16;
  if ($[66] !== t13 || $[67] !== t14 || $[68] !== t15) {
    t16 = /*#__PURE__*/React.createElement(Grid, {
      className: "time-select-wrap"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      style: t8
    }, t13, t14, t15));
    $[66] = t13;
    $[67] = t14;
    $[68] = t15;
    $[69] = t16;
  } else {
    t16 = $[69];
  }
  var t17;
  if ($[70] !== onClose) {
    t17 = onClose && /*#__PURE__*/React.createElement(Grid, {
      className: "action-buttons"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      onClick: onClose
    }, "\uB2EB\uAE30"));
    $[70] = onClose;
    $[71] = t17;
  } else {
    t17 = $[71];
  }
  var t18;
  if ($[72] !== t16 || $[73] !== t17 || $[74] !== t7) {
    t18 = /*#__PURE__*/React.createElement(Grid, {
      className: "time"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "column",
      className: "time-container"
    }, t7, t16, t17));
    $[72] = t16;
    $[73] = t17;
    $[74] = t7;
    $[75] = t18;
  } else {
    t18 = $[75];
  }
  return t18;
};insertStyle(".PrivateStaticDatePicker.time{height:400px}.PrivateStaticDatePicker .MuiPickersCalendarHeader-root{display:none}.PrivateStaticDatePicker .month-title-container{display:flex;align-items:center;margin-left:5px}.PrivateStaticDatePicker .month-title-container .month-title-wrap{display:flex;align-items:center;cursor:pointer}.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PrivateStaticDatePicker .month-title-container .month-title-wrap .month-title button:not(.active){color:unset}.PrivateStaticDatePicker .action-buttons{border-top:1px solid #efefef;padding:10px;text-align:right}.PrivateStaticDatePicker .action-buttons button{min-width:0;color:inherit}.PrivateStaticDatePicker .action-buttons button:not(:first-of-type){margin-left:5px}.PrivateStaticDatePicker .action-buttons button.disabled{color:rgba(0,0,0,.5)}.PrivateStaticDatePicker .time{border-left:2px solid #bfbfbf}.PrivateStaticDatePicker .time .time-container{height:100%}.PrivateStaticDatePicker .time .time-container .time-title{text-align:center;padding:22px 0;font-size:15px}.PrivateStaticDatePicker .time .time-container .time-select-wrap{flex:1;border-top:1px solid #efefef}.PrivateStaticDatePicker.time .time .time-container .time-select-wrap>div>div:not(:first-of-type){border-left:1px solid #efefef}");var _excluded$e = ["ref", "value", "availableDate", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"];
var DEFAULT_HOURS$1 = new Array(24).fill(0);
for (var i$2 = 0; i$2 < DEFAULT_HOURS$1.length; i$2 += 1) {
  DEFAULT_HOURS$1[i$2] = i$2;
}
var DEFAULT_MINUTES$1 = new Array(60).fill(0);
for (var _i$2 = 0; _i$2 < DEFAULT_MINUTES$1.length; _i$2 += 1) {
  DEFAULT_MINUTES$1[_i$2] = _i$2;
}
var DEFAULT_SECONDS$1 = new Array(60).fill(0);
for (var _i2$1 = 0; _i2$1 < DEFAULT_SECONDS$1.length; _i2$1 += 1) {
  DEFAULT_SECONDS$1[_i2$1] = _i2$1;
}
var PrivateStaticDatePicker = function PrivateStaticDatePicker(t0) {
  var $ = c(83);
  var disableFuture;
  var disablePast;
  var initAvailableDate;
  var maxDate;
  var minDate;
  var minuteInterval;
  var _onChange;
  var onClose;
  var _onMonthChange;
  var props;
  var ref;
  var secondInterval;
  var t1;
  var t2;
  var t3;
  var time;
  var type;
  var value;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    value = _t.value;
    initAvailableDate = _t.availableDate;
    type = _t.type;
    time = _t.time;
    t1 = _t.hours;
    t2 = _t.minutes;
    t3 = _t.seconds;
    minuteInterval = _t.minuteInterval;
    secondInterval = _t.secondInterval;
    minDate = _t.minDate;
    maxDate = _t.maxDate;
    disablePast = _t.disablePast;
    disableFuture = _t.disableFuture;
    _onChange = _t.onChange;
    _onMonthChange = _t.onMonthChange;
    onClose = _t.onClose;
    props = _objectWithoutProperties(_t, _excluded$e);
    $[0] = t0;
    $[1] = disableFuture;
    $[2] = disablePast;
    $[3] = initAvailableDate;
    $[4] = maxDate;
    $[5] = minDate;
    $[6] = minuteInterval;
    $[7] = _onChange;
    $[8] = onClose;
    $[9] = _onMonthChange;
    $[10] = props;
    $[11] = ref;
    $[12] = secondInterval;
    $[13] = t1;
    $[14] = t2;
    $[15] = t3;
    $[16] = time;
    $[17] = type;
    $[18] = value;
  } else {
    disableFuture = $[1];
    disablePast = $[2];
    initAvailableDate = $[3];
    maxDate = $[4];
    minDate = $[5];
    minuteInterval = $[6];
    _onChange = $[7];
    onClose = $[8];
    _onMonthChange = $[9];
    props = $[10];
    ref = $[11];
    secondInterval = $[12];
    t1 = $[13];
    t2 = $[14];
    t3 = $[15];
    time = $[16];
    type = $[17];
    value = $[18];
  }
  var hours = t1 === undefined ? DEFAULT_HOURS$1 : t1;
  var minutes = t2 === undefined ? DEFAULT_MINUTES$1 : t2;
  var seconds = t3 === undefined ? DEFAULT_SECONDS$1 : t3;
  var hourSelectRef = useRef(null);
  var minuteSelectRef = useRef(null);
  var secondSelectRef = useRef(null);
  var t4;
  if ($[19] !== value) {
    t4 = function t4() {
      if (value) {
        return value;
      } else {
        return dayjs();
      }
    };
    $[19] = value;
    $[20] = t4;
  } else {
    t4 = $[20];
  }
  var _useState = useState(t4),
    _useState2 = _slicedToArray(_useState, 2),
    month = _useState2[0],
    setMonth = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    activeMonthValue = _useState4[0],
    setActiveMonthValue = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    yearSelectOpen = _useState6[0],
    setYearSelectOpen = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    monthSelectOpen = _useState8[0],
    setMonthSelectOpen = _useState8[1];
  var t5;
  if ($[21] !== disableFuture || $[22] !== disablePast || $[23] !== initAvailableDate || $[24] !== maxDate || $[25] !== minDate) {
    t5 = initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    $[21] = disableFuture;
    $[22] = disablePast;
    $[23] = initAvailableDate;
    $[24] = maxDate;
    $[25] = minDate;
    $[26] = t5;
  } else {
    t5 = $[26];
  }
  var availableDate = t5;
  var t6;
  var t7;
  if ($[27] !== yearSelectOpen) {
    t6 = function t6() {
      if (!yearSelectOpen) {
        setActiveMonthValue(null);
      }
    };
    t7 = [yearSelectOpen];
    $[27] = yearSelectOpen;
    $[28] = t6;
    $[29] = t7;
  } else {
    t6 = $[28];
    t7 = $[29];
  }
  useChanged(t6, t7);
  var leftArrowOnClickRef = useRef(undefined);
  var rightArrowOnClickRef = useRef(undefined);
  var t8;
  if ($[30] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(props_0) {
      leftArrowOnClickRef.current = props_0.onClick;
      return /*#__PURE__*/React.createElement(IconButton, props_0);
    };
    $[30] = t8;
  } else {
    t8 = $[30];
  }
  var LeftArrowButton = t8;
  var t9;
  if ($[31] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(props_1) {
      rightArrowOnClickRef.current = props_1.onClick;
      return /*#__PURE__*/React.createElement(IconButton, props_1);
    };
    $[31] = t9;
  } else {
    t9 = $[31];
  }
  var RightArrowButton = t9;
  var t10;
  if ($[32] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var previousMonth = t10;
  var t11;
  if ($[33] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  var nextMonth = t11;
  var t12;
  if ($[34] !== month) {
    t12 = function t12(year) {
      setMonth(month.set("year", year));
      setActiveMonthValue(month.set("year", year));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    };
    $[34] = month;
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  var handleYearSelect = t12;
  var t13;
  if ($[36] !== month) {
    t13 = function t13(m) {
      setMonth(month.set("month", m));
      setActiveMonthValue(month.set("month", m));
      setMonthSelectOpen(false);
    };
    $[36] = month;
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  var handleMonthSelect = t13;
  var t14;
  if ($[38] !== value) {
    t14 = function t14(props_2) {
      return /*#__PURE__*/React.createElement(PickersDay, _extends({}, props_2, {
        selected: props_2.day.isSame(value, "date")
      }));
    };
    $[38] = value;
    $[39] = t14;
  } else {
    t14 = $[39];
  }
  var handleRenderDay = t14;
  var t15;
  if ($[40] === Symbol["for"]("react.memo_cache_sentinel")) {
    t15 = {};
    $[40] = t15;
  } else {
    t15 = $[40];
  }
  useForwardRef(ref, t15);
  var t16;
  if ($[41] !== availableDate || $[42] !== _onChange || $[43] !== time || $[44] !== type) {
    t16 = function t16(date, label) {
      var disabled = !isDateAvailable(date, availableDate, "day");
      return /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        className: disabled ? "disabled" : undefined,
        disabled: disabled,
        onClick: function onClick() {
          var finalDate = date;
          var checkResult = checkDateAvailable(finalDate, availableDate, type, time);
          if (checkResult !== "available") {
            var availableDateDate = getAvailableDate(availableDate, type, time);
            if (checkResult === "min") {
              if (availableDateDate[0]) {
                finalDate = availableDateDate[0];
              }
            } else {
              if (checkResult === "max") {
                if (availableDateDate[1]) {
                  finalDate = availableDateDate[1];
                }
              }
            }
          }
          _onChange("action_date", finalDate);
        }
      }, label);
    };
    $[41] = availableDate;
    $[42] = _onChange;
    $[43] = time;
    $[44] = type;
    $[45] = t16;
  } else {
    t16 = $[45];
  }
  var getActionButton = t16;
  var t17;
  if ($[46] !== type) {
    t17 = classNames("PrivateStaticDatePicker", type);
    $[46] = type;
    $[47] = t17;
  } else {
    t17 = $[47];
  }
  var t18;
  if ($[48] !== activeMonthValue || $[49] !== availableDate || $[50] !== disableFuture || $[51] !== disablePast || $[52] !== getActionButton || $[53] !== handleMonthSelect || $[54] !== handleRenderDay || $[55] !== handleYearSelect || $[56] !== maxDate || $[57] !== minDate || $[58] !== month || $[59] !== monthSelectOpen || $[60] !== _onChange || $[61] !== _onMonthChange || $[62] !== props || $[63] !== type || $[64] !== value || $[65] !== yearSelectOpen) {
    t18 = type !== "time" && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "column"
    }, /*#__PURE__*/React.createElement(Grid, {
      sx: {
        p: 2,
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: "month-change-arrow-wrap"
    }, /*#__PURE__*/React.createElement(Grid, {
      flex: 1,
      className: "month-title-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      className: yearSelectOpen ? "active" : undefined,
      onClick: function onClick() {
        if (yearSelectOpen) {
          setYearSelectOpen(false);
        } else {
          setYearSelectOpen(true);
          setMonthSelectOpen(false);
        }
      }
    }, month.format("YYYY\uB144"), /*#__PURE__*/React.createElement(Icon, null, yearSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))), /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      className: monthSelectOpen ? "active" : undefined,
      onClick: function onClick() {
        if (monthSelectOpen) {
          setMonthSelectOpen(false);
        } else {
          setMonthSelectOpen(true);
          setYearSelectOpen(false);
        }
      }
    }, month.format("M\uC6D4"), /*#__PURE__*/React.createElement(Icon, null, monthSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))))), !yearSelectOpen && !monthSelectOpen && /*#__PURE__*/React.createElement(Grid, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: previousMonth,
      sx: {
        mr: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, null, "keyboard_arrow_left")), /*#__PURE__*/React.createElement(IconButton, {
      onClick: nextMonth
    }, /*#__PURE__*/React.createElement(Icon, null, "keyboard_arrow_right"))))), /*#__PURE__*/React.createElement(Grid, {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(StaticDatePicker, _extends({}, props, {
      value: activeMonthValue,
      referenceDate: month,
      slots: {
        previousIconButton: LeftArrowButton,
        nextIconButton: RightArrowButton,
        day: handleRenderDay,
        actionBar: _temp$k
      },
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      displayStaticWrapperAs: "desktop",
      onChange: function onChange(newValue) {
        var finalValue = newValue ? value ? newValue.set("hour", value.hour()).set("minute", value.minute()).set("second", value.second()) : newValue : newValue;
        _onChange("date", finalValue);
      },
      onMonthChange: function onMonthChange(month_0) {
        setMonth(month_0);
        if (_onMonthChange) {
          _onMonthChange(month_0);
        }
      }
    })), yearSelectOpen && /*#__PURE__*/React.createElement(PrivateYearSelect, {
      selectYear: value == null ? null : value.year(),
      activeYear: month.year(),
      availableDate: availableDate,
      onSelect: handleYearSelect
    }), monthSelectOpen && /*#__PURE__*/React.createElement(PrivateMonthSelect, {
      year: month.year(),
      selectYear: value == null ? null : value.year(),
      selectMonth: value == null ? null : value.month(),
      activeMonth: month.month(),
      availableDate: availableDate,
      onSelect: handleMonthSelect
    })), /*#__PURE__*/React.createElement(Grid, {
      className: "action-buttons"
    }, getActionButton(dayjs().startOf("d").subtract(1, "month").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC9C0\uB09C\uB2EC"), getActionButton(dayjs().startOf("d").subtract(7, "d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC9C0\uB09C\uC8FC"), getActionButton(dayjs().startOf("d").subtract(1, "d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC5B4\uC81C"), getActionButton(dayjs().startOf("d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC624\uB298"))));
    $[48] = activeMonthValue;
    $[49] = availableDate;
    $[50] = disableFuture;
    $[51] = disablePast;
    $[52] = getActionButton;
    $[53] = handleMonthSelect;
    $[54] = handleRenderDay;
    $[55] = handleYearSelect;
    $[56] = maxDate;
    $[57] = minDate;
    $[58] = month;
    $[59] = monthSelectOpen;
    $[60] = _onChange;
    $[61] = _onMonthChange;
    $[62] = props;
    $[63] = type;
    $[64] = value;
    $[65] = yearSelectOpen;
    $[66] = t18;
  } else {
    t18 = $[66];
  }
  var t19;
  if ($[67] !== availableDate || $[68] !== hours || $[69] !== minuteInterval || $[70] !== minutes || $[71] !== _onChange || $[72] !== onClose || $[73] !== secondInterval || $[74] !== seconds || $[75] !== time || $[76] !== type || $[77] !== value) {
    t19 = time && /*#__PURE__*/React.createElement(PrivateTimeSection, {
      time: time,
      cols: type === "time" ? 3 : 1,
      width: type === "time" ? 240 : 80,
      availableDate: availableDate,
      hourSelectRef: hourSelectRef,
      minuteSelectRef: minuteSelectRef,
      secondSelectRef: secondSelectRef,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      minuteInterval: minuteInterval,
      secondInterval: secondInterval,
      value: value,
      onChange: _onChange,
      onClose: onClose
    });
    $[67] = availableDate;
    $[68] = hours;
    $[69] = minuteInterval;
    $[70] = minutes;
    $[71] = _onChange;
    $[72] = onClose;
    $[73] = secondInterval;
    $[74] = seconds;
    $[75] = time;
    $[76] = type;
    $[77] = value;
    $[78] = t19;
  } else {
    t19 = $[78];
  }
  var t20;
  if ($[79] !== t17 || $[80] !== t18 || $[81] !== t19) {
    t20 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: t17
    }, t18, t19);
    $[79] = t17;
    $[80] = t18;
    $[81] = t19;
    $[82] = t20;
  } else {
    t20 = $[82];
  }
  return t20;
};
function _temp$k() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}var _excluded$d = ["className"];
var PrivateStyledTooltip = styled(function (_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded$d);
  return /*#__PURE__*/React.createElement(Tooltip, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty({}, "& .".concat(tooltipClasses.tooltip), {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    border: '1px solid #dadde9',
    padding: 0,
    borderRadius: 0,
    margin: 0,
    width: 'auto',
    maxWidth: 'inherit !important',
    boxShadow: theme.shadows[8]
  });
});insertStyle(".PrivateDatePicker .input-text-field.align-left .MuiInputBase-input{text-align:left}.PrivateDatePicker .input-text-field.align-center .MuiInputBase-input{text-align:center}.PrivateDatePicker .input-text-field.align-right .MuiInputBase-input{text-align:right}");var _excluded$c = ["ref", "variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "enableKeyboardInput", "hidden", "showDaysOutsideCurrentMonth", "onChange", "onValidate", "className", "style", "sx"];
var PrivateDatePicker = function PrivateDatePicker(t0) {
  var $ = c(279);
  var className;
  var disableFuture;
  var disablePast;
  var enableKeyboardInput;
  var endAdornment;
  var exceptValue;
  var format;
  var helperText;
  var hours;
  var icon;
  var initColor;
  var initData;
  var initDisabled;
  var initError;
  var initFocused;
  var initFormValueFormat;
  var initFullWidth;
  var initHidden;
  var initLabel;
  var initLabelShrink;
  var initOnValidate;
  var initSize;
  var initStyle;
  var initVariant;
  var labelIcon;
  var maxDate;
  var minDate;
  var minuteInterval;
  var minutes;
  var name;
  var onChange;
  var otherProps;
  var readOnly;
  var ref;
  var required;
  var secondInterval;
  var seconds;
  var startAdornment;
  var sx;
  var t1;
  var t2;
  var t3;
  var time;
  var type;
  var width;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    initVariant = _t.variant;
    initSize = _t.size;
    initColor = _t.color;
    initFocused = _t.focused;
    initLabelShrink = _t.labelShrink;
    initFullWidth = _t.fullWidth;
    name = _t.name;
    type = _t.type;
    time = _t.time;
    t1 = _t.value;
    initData = _t.data;
    initLabel = _t.label;
    labelIcon = _t.labelIcon;
    format = _t.format;
    initFormValueFormat = _t.formValueFormat;
    required = _t.required;
    readOnly = _t.readOnly;
    initDisabled = _t.disabled;
    width = _t.width;
    initError = _t.error;
    helperText = _t.helperText;
    minDate = _t.minDate;
    maxDate = _t.maxDate;
    disableFuture = _t.disableFuture;
    disablePast = _t.disablePast;
    exceptValue = _t.exceptValue;
    icon = _t.icon;
    startAdornment = _t.startAdornment;
    endAdornment = _t.endAdornment;
    t2 = _t.align;
    hours = _t.hours;
    minutes = _t.minutes;
    seconds = _t.seconds;
    minuteInterval = _t.minuteInterval;
    secondInterval = _t.secondInterval;
    enableKeyboardInput = _t.enableKeyboardInput;
    initHidden = _t.hidden;
    t3 = _t.showDaysOutsideCurrentMonth;
    onChange = _t.onChange;
    initOnValidate = _t.onValidate;
    className = _t.className;
    initStyle = _t.style;
    sx = _t.sx;
    otherProps = _objectWithoutProperties(_t, _excluded$c);
    $[0] = t0;
    $[1] = className;
    $[2] = disableFuture;
    $[3] = disablePast;
    $[4] = enableKeyboardInput;
    $[5] = endAdornment;
    $[6] = exceptValue;
    $[7] = format;
    $[8] = helperText;
    $[9] = hours;
    $[10] = icon;
    $[11] = initColor;
    $[12] = initData;
    $[13] = initDisabled;
    $[14] = initError;
    $[15] = initFocused;
    $[16] = initFormValueFormat;
    $[17] = initFullWidth;
    $[18] = initHidden;
    $[19] = initLabel;
    $[20] = initLabelShrink;
    $[21] = initOnValidate;
    $[22] = initSize;
    $[23] = initStyle;
    $[24] = initVariant;
    $[25] = labelIcon;
    $[26] = maxDate;
    $[27] = minDate;
    $[28] = minuteInterval;
    $[29] = minutes;
    $[30] = name;
    $[31] = onChange;
    $[32] = otherProps;
    $[33] = readOnly;
    $[34] = ref;
    $[35] = required;
    $[36] = secondInterval;
    $[37] = seconds;
    $[38] = startAdornment;
    $[39] = sx;
    $[40] = t1;
    $[41] = t2;
    $[42] = t3;
    $[43] = time;
    $[44] = type;
    $[45] = width;
  } else {
    className = $[1];
    disableFuture = $[2];
    disablePast = $[3];
    enableKeyboardInput = $[4];
    endAdornment = $[5];
    exceptValue = $[6];
    format = $[7];
    helperText = $[8];
    hours = $[9];
    icon = $[10];
    initColor = $[11];
    initData = $[12];
    initDisabled = $[13];
    initError = $[14];
    initFocused = $[15];
    initFormValueFormat = $[16];
    initFullWidth = $[17];
    initHidden = $[18];
    initLabel = $[19];
    initLabelShrink = $[20];
    initOnValidate = $[21];
    initSize = $[22];
    initStyle = $[23];
    initVariant = $[24];
    labelIcon = $[25];
    maxDate = $[26];
    minDate = $[27];
    minuteInterval = $[28];
    minutes = $[29];
    name = $[30];
    onChange = $[31];
    otherProps = $[32];
    readOnly = $[33];
    ref = $[34];
    required = $[35];
    secondInterval = $[36];
    seconds = $[37];
    startAdornment = $[38];
    sx = $[39];
    t1 = $[40];
    t2 = $[41];
    t3 = $[42];
    time = $[43];
    type = $[44];
    width = $[45];
  }
  var initValue = t1 === undefined ? null : t1;
  var align = t2 === undefined ? "center" : t2;
  var showDaysOutsideCurrentMonth = t3 === undefined ? true : t3;
  var id = useId();
  var initValueRef = useAutoUpdateRef(initValue);
  var privateStaticDatePickerRef = useRef(null);
  var textFieldInputRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var datePickerErrorRef = useRef(null);
  var openValueRef = useRef(null);
  var onValidateRef = useAutoUpdateRef(initOnValidate);
  var onChangeRef = useAutoUpdateRef(onChange);
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    errorHelperText = _useState4[0],
    setErrorHelperText = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    timeError = _useState6[0],
    _setTimeError = _useState6[1];
  var timeErrorRef = useAutoUpdateRef(timeError);
  var t4;
  if ($[46] !== timeErrorRef) {
    t4 = function t4(newValue) {
      _setTimeError(newValue);
      timeErrorRef.current = newValue;
    };
    $[46] = timeErrorRef;
    $[47] = t4;
  } else {
    t4 = $[47];
  }
  var setTimeError = t4;
  var _useState7 = useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  var t5;
  var t6;
  if ($[48] !== initError) {
    t5 = function t5() {
      return _setError(initError);
    };
    t6 = [initError];
    $[48] = initError;
    $[49] = t5;
    $[50] = t6;
  } else {
    t5 = $[49];
    t6 = $[50];
  }
  useFirstSkipChanged(t5, t6);
  var errorRef = useAutoUpdateRef(error);
  var t7;
  if ($[51] !== errorRef) {
    t7 = function t7(newValue_0) {
      _setError(newValue_0);
      errorRef.current = newValue_0;
    };
    $[51] = errorRef;
    $[52] = t7;
  } else {
    t7 = $[52];
  }
  var setError = t7;
  var _useState9 = useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  var t8;
  var t9;
  if ($[53] !== initData) {
    t8 = function t8() {
      return _setData(initData);
    };
    t9 = [initData];
    $[53] = initData;
    $[54] = t8;
    $[55] = t9;
  } else {
    t8 = $[54];
    t9 = $[55];
  }
  useFirstSkipChanged(t8, t9);
  var dataRef = useAutoUpdateRef(data);
  var t10;
  if ($[56] !== dataRef) {
    t10 = function t10(newValue_1) {
      _setData(newValue_1);
      dataRef.current = newValue_1;
    };
    $[56] = dataRef;
    $[57] = t10;
  } else {
    t10 = $[57];
  }
  var setData = t10;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  var t11;
  var t12;
  if ($[58] !== finalInitDisabled) {
    t11 = function t11() {
      return setDisabled(finalInitDisabled);
    };
    t12 = [finalInitDisabled];
    $[58] = finalInitDisabled;
    $[59] = t11;
    $[60] = t12;
  } else {
    t11 = $[59];
    t12 = $[60];
  }
  useFirstSkipChanged(t11, t12);
  var _useState11 = useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  var t13;
  var t14;
  if ($[61] !== initHidden) {
    t13 = function t13() {
      return setHidden(initHidden);
    };
    t14 = [initHidden];
    $[61] = initHidden;
    $[62] = t13;
    $[63] = t14;
  } else {
    t13 = $[62];
    t14 = $[63];
  }
  useFirstSkipChanged(t13, t14);
  var t15 = !!disablePast;
  var t16 = !!disableFuture;
  var t17;
  if ($[64] !== maxDate || $[65] !== minDate || $[66] !== t15 || $[67] !== t16) {
    t17 = makeAvailableDate(minDate, maxDate, t15, t16);
    $[64] = maxDate;
    $[65] = minDate;
    $[66] = t15;
    $[67] = t16;
    $[68] = t17;
  } else {
    t17 = $[68];
  }
  var availableDate = t17;
  var t18;
  if ($[69] !== setError) {
    t18 = function t18(error_0, helperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? helperText_0 : undefined);
    };
    $[69] = setError;
    $[70] = t18;
  } else {
    t18 = $[70];
  }
  var setErrorErrorHelperText = t18;
  var t19;
  if ($[71] !== onValidateRef || $[72] !== required || $[73] !== setErrorErrorHelperText || $[74] !== timeErrorRef) {
    t19 = function t19(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (value && !value.isValid()) {
        setErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        return false;
      }
      if (datePickerErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(datePickerErrorRef.current));
        return false;
      }
      if (timeErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(timeErrorRef.current));
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
    };
    $[71] = onValidateRef;
    $[72] = required;
    $[73] = setErrorErrorHelperText;
    $[74] = timeErrorRef;
    $[75] = t19;
  } else {
    t19 = $[75];
  }
  var validate = t19;
  var validateRef = useAutoUpdateRef(validate);
  var t20;
  if ($[76] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = function t20() {
      var _textFieldInputRef$cu;
      (_textFieldInputRef$cu = textFieldInputRef.current) === null || _textFieldInputRef$cu === void 0 || _textFieldInputRef$cu.focus();
    };
    $[76] = t20;
  } else {
    t20 = $[76];
  }
  var focus = t20;
  var _useState13 = useState(initValue),
    _useState14 = _slicedToArray(_useState13, 2),
    value_0 = _useState14[0],
    _setValue = _useState14[1];
  var t21;
  var t22;
  if ($[77] !== initValue) {
    t21 = function t21() {
      return _setValue(initValue);
    };
    t22 = [initValue];
    $[77] = initValue;
    $[78] = t21;
    $[79] = t22;
  } else {
    t21 = $[78];
    t22 = $[79];
  }
  useFirstSkipChanged(t21, t22);
  var valueRef = useAutoUpdateRef(value_0);
  var t23;
  if ($[80] !== valueRef) {
    t23 = function t23(newValue_2) {
      _setValue(newValue_2);
      valueRef.current = newValue_2;
    };
    $[80] = valueRef;
    $[81] = t23;
  } else {
    t23 = $[81];
  }
  var setValue = t23;
  var _useState15 = useState(value_0),
    _useState16 = _slicedToArray(_useState15, 2),
    inputValue = _useState16[0],
    setInputValue = _useState16[1];
  var t24;
  var t25;
  if ($[82] !== value_0) {
    t24 = function t24() {
      return setInputValue(value_0);
    };
    t25 = [value_0];
    $[82] = value_0;
    $[83] = t24;
    $[84] = t25;
  } else {
    t24 = $[83];
    t25 = $[84];
  }
  useFirstSkipChanged(t24, t25);
  var t26;
  if ($[85] !== availableDate || $[86] !== errorRef || $[87] !== name || $[88] !== onChangeRef || $[89] !== onValueChange || $[90] !== setTimeError || $[91] !== setValue || $[92] !== time || $[93] !== type || $[94] !== validateRef) {
    t26 = function t26(newValue_3) {
      var _onChangeRef$current;
      var finalValue = newValue_3;
      setValue(finalValue);
      if (errorRef.current) {
        validateRef.current(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      if (type !== "time" && time && finalValue && (availableDate[0] || availableDate[1])) {
        var availableDateVal = getAvailableDateVal(availableDate, type, time);
        var valueVal = getDateValForAvailableDate(finalValue, type, time);
        var timeError_0 = null;
        if (availableDateVal[0] && valueVal < availableDateVal[0]) {
          timeError_0 = "minDate";
        }
        if (timeError_0 == null && availableDateVal[1] && valueVal > availableDateVal[1]) {
          timeError_0 = "maxDate";
        }
        setTimeError(timeError_0);
      } else {
        setTimeError(null);
      }
      return finalValue;
    };
    $[85] = availableDate;
    $[86] = errorRef;
    $[87] = name;
    $[88] = onChangeRef;
    $[89] = onValueChange;
    $[90] = setTimeError;
    $[91] = setValue;
    $[92] = time;
    $[93] = type;
    $[94] = validateRef;
    $[95] = t26;
  } else {
    t26 = $[95];
  }
  var updateValue = t26;
  var t27;
  if ($[96] !== error || $[97] !== timeError || $[98] !== validateRef || $[99] !== valueRef) {
    t27 = function t27() {
      if (error && !timeError) {
        validateRef.current(valueRef.current);
      }
    };
    $[96] = error;
    $[97] = timeError;
    $[98] = validateRef;
    $[99] = valueRef;
    $[100] = t27;
  } else {
    t27 = $[100];
  }
  var t28;
  if ($[101] !== error || $[102] !== timeError) {
    t28 = [error, timeError];
    $[101] = error;
    $[102] = timeError;
    $[103] = t28;
  } else {
    t28 = $[103];
  }
  useEventEffect(t27, t28);
  var t29;
  if ($[104] !== isOpen || $[105] !== name || $[106] !== onRequestSearchSubmit || $[107] !== value_0) {
    t29 = function t29() {
      if (isOpen) {
        openValueRef.current = value_0;
      } else {
        if (openValueRef.current !== value_0) {
          var runOnRequestSearchSubmit;
          if (openValueRef.current && value_0) {
            runOnRequestSearchSubmit = !openValueRef.current.isSame(value_0, "second");
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, value_0);
          }
        }
      }
    };
    $[104] = isOpen;
    $[105] = name;
    $[106] = onRequestSearchSubmit;
    $[107] = value_0;
    $[108] = t29;
  } else {
    t29 = $[108];
  }
  var t30;
  if ($[109] !== isOpen) {
    t30 = [isOpen];
    $[109] = isOpen;
    $[110] = t30;
  } else {
    t30 = $[110];
  }
  useEventEffect(t29, t30);
  var t31;
  if ($[111] !== name) {
    t31 = function t31() {
      return name;
    };
    $[111] = name;
    $[112] = t31;
  } else {
    t31 = $[112];
  }
  var t32;
  if ($[113] !== initValueRef) {
    t32 = function t32() {
      return initValueRef.current;
    };
    $[113] = initValueRef;
    $[114] = t32;
  } else {
    t32 = $[114];
  }
  var t33;
  if ($[115] !== initValueRef || $[116] !== updateValue) {
    t33 = function t33() {
      return updateValue(initValueRef.current);
    };
    $[115] = initValueRef;
    $[116] = updateValue;
    $[117] = t33;
  } else {
    t33 = $[117];
  }
  var t34;
  if ($[118] !== valueRef) {
    t34 = function t34() {
      return valueRef.current;
    };
    $[118] = valueRef;
    $[119] = t34;
  } else {
    t34 = $[119];
  }
  var t35;
  if ($[120] !== dataRef) {
    t35 = function t35() {
      return dataRef.current;
    };
    $[120] = dataRef;
    $[121] = t35;
  } else {
    t35 = $[121];
  }
  var t36;
  if ($[122] !== exceptValue) {
    t36 = function t36() {
      return !!exceptValue;
    };
    $[122] = exceptValue;
    $[123] = t36;
  } else {
    t36 = $[123];
  }
  var t37;
  if ($[124] !== disabled) {
    t37 = function t37() {
      return !!disabled;
    };
    $[124] = disabled;
    $[125] = t37;
  } else {
    t37 = $[125];
  }
  var t38;
  if ($[126] !== hidden) {
    t38 = function t38() {
      return !!hidden;
    };
    $[126] = hidden;
    $[127] = t38;
  } else {
    t38 = $[127];
  }
  var t39;
  if ($[128] !== validateRef || $[129] !== valueRef) {
    t39 = function t39() {
      return validateRef.current(valueRef.current);
    };
    $[128] = validateRef;
    $[129] = valueRef;
    $[130] = t39;
  } else {
    t39 = $[130];
  }
  var t40;
  if ($[131] !== initFormValueFormat || $[132] !== time || $[133] !== type) {
    t40 = function t40() {
      return initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time);
    };
    $[131] = initFormValueFormat;
    $[132] = time;
    $[133] = type;
    $[134] = t40;
  } else {
    t40 = $[134];
  }
  var t41;
  if ($[135] !== setData || $[136] !== setErrorErrorHelperText || $[137] !== t31 || $[138] !== t32 || $[139] !== t33 || $[140] !== t34 || $[141] !== t35 || $[142] !== t36 || $[143] !== t37 || $[144] !== t38 || $[145] !== t39 || $[146] !== t40 || $[147] !== updateValue) {
    t41 = {
      getType: _temp$j,
      getName: t31,
      getReset: t32,
      reset: t33,
      getValue: t34,
      setValue: updateValue,
      getData: t35,
      setData: setData,
      isExceptValue: t36,
      isDisabled: t37,
      setDisabled: setDisabled,
      isHidden: t38,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t39,
      setError: setErrorErrorHelperText,
      getFormValueFormat: t40
    };
    $[135] = setData;
    $[136] = setErrorErrorHelperText;
    $[137] = t31;
    $[138] = t32;
    $[139] = t33;
    $[140] = t34;
    $[141] = t35;
    $[142] = t36;
    $[143] = t37;
    $[144] = t38;
    $[145] = t39;
    $[146] = t40;
    $[147] = updateValue;
    $[148] = t41;
  } else {
    t41 = $[148];
  }
  var commands = t41;
  var t42;
  if ($[149] !== id || $[150] !== onAddValueItem) {
    t42 = function t42(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[149] = id;
    $[150] = onAddValueItem;
    $[151] = t42;
  } else {
    t42 = $[151];
  }
  var t43;
  if ($[152] !== id || $[153] !== onRemoveValueItem) {
    t43 = function t43() {
      return onRemoveValueItem(id);
    };
    $[152] = id;
    $[153] = onRemoveValueItem;
    $[154] = t43;
  } else {
    t43 = $[154];
  }
  useForwardRef(ref, commands, t42, t43);
  var t44;
  if ($[155] !== availableDate || $[156] !== isOpen || $[157] !== name || $[158] !== onRequestSearchSubmit || $[159] !== onValueChangeByUser || $[160] !== time || $[161] !== type || $[162] !== updateValue) {
    t44 = function t44(unit, newValue_4, keyboardInputValue) {
      var isUpdateValue = true;
      if (notEmpty(keyboardInputValue)) {
        if (newValue_4) {
          if (!newValue_4.isValid()) {
            isUpdateValue = false;
          }
        }
      }
      var finalValue_0 = newValue_4;
      if (isUpdateValue) {
        if (type !== "time" && finalValue_0 != null && keyboardInputValue == null) {
          var checkResult = checkDateAvailable(finalValue_0, availableDate, type, time);
          if (checkResult !== "available") {
            var availableDateDate = getAvailableDate(availableDate, type, time);
            if (checkResult === "min") {
              if (availableDateDate[0]) {
                finalValue_0 = availableDateDate[0];
              }
            } else {
              if (checkResult === "max") {
                if (availableDateDate[1]) {
                  finalValue_0 = availableDateDate[1];
                }
              }
            }
          }
        }
        var runOnRequestSearchSubmit_0 = false;
        if (notEmpty(keyboardInputValue)) {
          if (!time || unit !== "action_date") {
            runOnRequestSearchSubmit_0 = !isOpen;
            setIsOpen(false);
          }
        } else {
          if (time) {
            if (time === unit) {
              setIsOpen(false);
            }
          } else {
            setIsOpen(false);
          }
        }
        updateValue(finalValue_0);
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_0);
          if (runOnRequestSearchSubmit_0) {
            onRequestSearchSubmit(name, finalValue_0);
          }
        });
      }
      setInputValue(finalValue_0);
    };
    $[155] = availableDate;
    $[156] = isOpen;
    $[157] = name;
    $[158] = onRequestSearchSubmit;
    $[159] = onValueChangeByUser;
    $[160] = time;
    $[161] = type;
    $[162] = updateValue;
    $[163] = t44;
  } else {
    t44 = $[163];
  }
  var handleChange = t44;
  var t45;
  if ($[164] === Symbol["for"]("react.memo_cache_sentinel")) {
    t45 = function t45() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[164] = t45;
  } else {
    t45 = $[164];
  }
  var handleContainerFocus = t45;
  var t46;
  if ($[165] === Symbol["for"]("react.memo_cache_sentinel")) {
    t46 = function t46() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
        closeTimeoutRef.current = setTimeout(function () {
          closeTimeoutRef.current = undefined;
          setIsOpen(false);
        }, 10);
      }
    };
    $[165] = t46;
  } else {
    t46 = $[165];
  }
  var handleContainerBlur = t46;
  var t47;
  if ($[166] === Symbol["for"]("react.memo_cache_sentinel")) {
    t47 = function t47() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[166] = t47;
  } else {
    t47 = $[166];
  }
  var handleContainerMouseDown = t47;
  var readOnly_0 = !enableKeyboardInput;
  var inputProps;
  if ($[167] !== readOnly_0) {
    inputProps = {
      readOnly: readOnly_0
    };
    if (readOnly_0) {
      inputProps.tabIndex = -1;
    }
    $[167] = readOnly_0;
    $[168] = inputProps;
  } else {
    inputProps = $[168];
  }
  var slotInputProps = inputProps;
  var muiInputProps;
  if ($[169] !== endAdornment || $[170] !== icon || $[171] !== startAdornment) {
    muiInputProps = {
      endAdornment: undefined
    };
    if (startAdornment || icon || muiInputProps.startAdornment) {
      var _t2;
      if ($[173] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "small"
        }, icon));
        $[173] = icon;
        $[174] = _t2;
      } else {
        _t2 = $[174];
      }
      var _t3;
      if ($[175] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, startAdornment);
        $[175] = startAdornment;
        $[176] = _t3;
      } else {
        _t3 = $[176];
      }
      muiInputProps.startAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3, muiInputProps.startAdornment);
    }
    if (endAdornment) {
      var _t4;
      if ($[177] !== endAdornment) {
        _t4 = endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, endAdornment);
        $[177] = endAdornment;
        $[178] = _t4;
      } else {
        _t4 = $[178];
      }
      var _t5;
      if ($[179] !== _t4) {
        _t5 = /*#__PURE__*/React.createElement(React.Fragment, null, _t4);
        $[179] = _t4;
        $[180] = _t5;
      } else {
        _t5 = $[180];
      }
      muiInputProps.endAdornment = _t5;
    }
    $[169] = endAdornment;
    $[170] = icon;
    $[171] = startAdornment;
    $[172] = muiInputProps;
  } else {
    muiInputProps = $[172];
  }
  var slotMuiInputProps = muiInputProps;
  var t48 = "align-".concat(align);
  var t49;
  if ($[181] !== t48) {
    t49 = classNames("input-text-field", t48);
    $[181] = t48;
    $[182] = t49;
  } else {
    t49 = $[182];
  }
  var t50;
  if ($[183] !== labelShrink) {
    t50 = labelShrink ? {
      shrink: labelShrink
    } : undefined;
    $[183] = labelShrink;
    $[184] = t50;
  } else {
    t50 = $[184];
  }
  var t51 = !!error || !!timeError;
  var t52;
  if ($[185] !== initStyle || $[186] !== width) {
    t52 = width != null ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      width: width
    }) : initStyle;
    $[185] = initStyle;
    $[186] = width;
    $[187] = t52;
  } else {
    t52 = $[187];
  }
  var t53;
  var t54;
  if ($[188] === Symbol["for"]("react.memo_cache_sentinel")) {
    t53 = function t53() {
      setIsOpen(true);
    };
    t54 = function t54() {
      setIsOpen(true);
    };
    $[188] = t53;
    $[189] = t54;
  } else {
    t53 = $[188];
    t54 = $[189];
  }
  var t55;
  if ($[190] !== color || $[191] !== focused || $[192] !== fullWidth || $[193] !== required || $[194] !== size || $[195] !== slotInputProps || $[196] !== slotMuiInputProps || $[197] !== sx || $[198] !== t49 || $[199] !== t50 || $[200] !== t51 || $[201] !== t52 || $[202] !== variant) {
    t55 = {
      textField: {
        className: t49,
        inputRef: textFieldInputRef,
        variant: variant,
        size: size,
        color: color,
        focused: focused,
        InputLabelProps: t50,
        InputProps: slotMuiInputProps,
        inputProps: slotInputProps,
        required: required,
        fullWidth: fullWidth,
        helperText: undefined,
        error: t51,
        style: t52,
        sx: sx,
        onFocus: t53,
        onClick: t54
      }
    };
    $[190] = color;
    $[191] = focused;
    $[192] = fullWidth;
    $[193] = required;
    $[194] = size;
    $[195] = slotInputProps;
    $[196] = slotMuiInputProps;
    $[197] = sx;
    $[198] = t49;
    $[199] = t50;
    $[200] = t51;
    $[201] = t52;
    $[202] = variant;
    $[203] = t55;
  } else {
    t55 = $[203];
  }
  var slotProps = t55;
  var t56;
  if ($[204] === Symbol["for"]("react.memo_cache_sentinel")) {
    t56 = function t56() {
      return setIsOpen(false);
    };
    $[204] = t56;
  } else {
    t56 = $[204];
  }
  var t57;
  if ($[205] !== className) {
    t57 = classNames(className, "PrivateDatePicker");
    $[205] = className;
    $[206] = t57;
  } else {
    t57 = $[206];
  }
  var t58 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t59 = fullWidth ? 1 : undefined;
  var t60;
  if ($[207] !== t58 || $[208] !== t59) {
    t60 = {
      display: t58,
      flex: t59
    };
    $[207] = t58;
    $[208] = t59;
    $[209] = t60;
  } else {
    t60 = $[209];
  }
  var t61 = disabled || readOnly ? false : isOpen;
  var t62 = error && errorHelperText ? 8 : -14;
  var t63;
  if ($[210] !== t62) {
    t63 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t62]
          }
        }]
      }
    };
    $[210] = t62;
    $[211] = t63;
  } else {
    t63 = $[211];
  }
  var t64;
  if ($[212] !== time) {
    t64 = function t64() {
      return !time && setIsOpen(false);
    };
    $[212] = time;
    $[213] = t64;
  } else {
    t64 = $[213];
  }
  var t65;
  if ($[214] === Symbol["for"]("react.memo_cache_sentinel")) {
    t65 = function t65() {
      return setIsOpen(false);
    };
    $[214] = t65;
  } else {
    t65 = $[214];
  }
  var t66;
  if ($[215] !== availableDate || $[216] !== disableFuture || $[217] !== disablePast || $[218] !== handleChange || $[219] !== hours || $[220] !== maxDate || $[221] !== minDate || $[222] !== minuteInterval || $[223] !== minutes || $[224] !== otherProps || $[225] !== secondInterval || $[226] !== seconds || $[227] !== showDaysOutsideCurrentMonth || $[228] !== t64 || $[229] !== time || $[230] !== type || $[231] !== value_0) {
    t66 = /*#__PURE__*/React.createElement(PrivateStaticDatePicker, _extends({}, otherProps, {
      ref: privateStaticDatePickerRef,
      type: type,
      time: time,
      value: value_0,
      availableDate: availableDate,
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      minuteInterval: minuteInterval,
      secondInterval: secondInterval,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
      onChange: handleChange,
      onAccept: t64,
      onClose: t65
    }));
    $[215] = availableDate;
    $[216] = disableFuture;
    $[217] = disablePast;
    $[218] = handleChange;
    $[219] = hours;
    $[220] = maxDate;
    $[221] = minDate;
    $[222] = minuteInterval;
    $[223] = minutes;
    $[224] = otherProps;
    $[225] = secondInterval;
    $[226] = seconds;
    $[227] = showDaysOutsideCurrentMonth;
    $[228] = t64;
    $[229] = time;
    $[230] = type;
    $[231] = value_0;
    $[232] = t66;
  } else {
    t66 = $[232];
  }
  var t67 = fullWidth ? "block" : "inline-block";
  var t68;
  if ($[233] !== t67) {
    t68 = {
      display: t67
    };
    $[233] = t67;
    $[234] = t68;
  } else {
    t68 = $[234];
  }
  var t69;
  if ($[235] !== initLabel || $[236] !== labelIcon) {
    t69 = labelIcon ? /*#__PURE__*/React.createElement(PIconText, {
      icon: labelIcon
    }, initLabel) : initLabel;
    $[235] = initLabel;
    $[236] = labelIcon;
    $[237] = t69;
  } else {
    t69 = $[237];
  }
  var t70;
  if ($[238] !== format || $[239] !== time || $[240] !== type) {
    t70 = format ? format : getDateTimeFormat(type, time);
    $[238] = format;
    $[239] = time;
    $[240] = type;
    $[241] = t70;
  } else {
    t70 = $[241];
  }
  var t71;
  var t72;
  if ($[242] === Symbol["for"]("react.memo_cache_sentinel")) {
    t71 = function t71() {
      return setIsOpen(false);
    };
    t72 = function t72(reason) {
      return datePickerErrorRef.current = reason;
    };
    $[242] = t71;
    $[243] = t72;
  } else {
    t71 = $[242];
    t72 = $[243];
  }
  var t73;
  if ($[244] !== handleChange) {
    t73 = function t73(newValue_5) {
      return handleChange("date", newValue_5);
    };
    $[244] = handleChange;
    $[245] = t73;
  } else {
    t73 = $[245];
  }
  var t74;
  if ($[246] !== disableFuture || $[247] !== disablePast || $[248] !== disabled || $[249] !== inputValue || $[250] !== maxDate || $[251] !== minDate || $[252] !== otherProps || $[253] !== readOnly || $[254] !== showDaysOutsideCurrentMonth || $[255] !== slotProps || $[256] !== t69 || $[257] !== t70 || $[258] !== t73) {
    t74 = /*#__PURE__*/React.createElement(DesktopDatePicker, _extends({
      value: inputValue,
      label: t69,
      open: false,
      format: t70,
      disabled: disabled,
      readOnly: readOnly,
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onClose: t71,
      onError: t72,
      onChange: t73,
      slotProps: slotProps,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth
    }, otherProps));
    $[246] = disableFuture;
    $[247] = disablePast;
    $[248] = disabled;
    $[249] = inputValue;
    $[250] = maxDate;
    $[251] = minDate;
    $[252] = otherProps;
    $[253] = readOnly;
    $[254] = showDaysOutsideCurrentMonth;
    $[255] = slotProps;
    $[256] = t69;
    $[257] = t70;
    $[258] = t73;
    $[259] = t74;
  } else {
    t74 = $[259];
  }
  var t75;
  if ($[260] !== t68 || $[261] !== t74) {
    t75 = /*#__PURE__*/React.createElement("div", {
      style: t68
    }, t74);
    $[260] = t68;
    $[261] = t74;
    $[262] = t75;
  } else {
    t75 = $[262];
  }
  var t76;
  if ($[263] !== t61 || $[264] !== t63 || $[265] !== t66 || $[266] !== t75) {
    t76 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: t61,
      slotProps: t63,
      title: t66
    }, t75);
    $[263] = t61;
    $[264] = t63;
    $[265] = t66;
    $[266] = t75;
    $[267] = t76;
  } else {
    t76 = $[267];
  }
  var t77;
  if ($[268] !== error || $[269] !== errorHelperText || $[270] !== formColWithHelperText || $[271] !== helperText || $[272] !== variant) {
    t77 = !formColWithHelperText && (helperText || error && errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[268] = error;
    $[269] = errorHelperText;
    $[270] = formColWithHelperText;
    $[271] = helperText;
    $[272] = variant;
    $[273] = t77;
  } else {
    t77 = $[273];
  }
  var t78;
  if ($[274] !== t57 || $[275] !== t60 || $[276] !== t76 || $[277] !== t77) {
    t78 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t56
    }, /*#__PURE__*/React.createElement("div", {
      className: t57,
      style: t60,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t76, t77)));
    $[274] = t57;
    $[275] = t60;
    $[276] = t76;
    $[277] = t77;
    $[278] = t78;
  } else {
    t78 = $[278];
  }
  return t78;
};
function _temp$j() {
  return "default";
}insertStyle(".PrivateStaticDateTimePicker.time{height:400px}.PrivateStaticDateTimePicker .MuiPickersCalendarHeader-root{display:none}.PrivateStaticDateTimePicker .month-title-container{display:flex;align-items:center;margin-left:5px}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap{display:flex;align-items:center;cursor:pointer}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PrivateStaticDateTimePicker .month-title-container .month-title-wrap .month-title button:not(.active){color:unset}.PrivateStaticDateTimePicker .action-buttons{border-top:1px solid #efefef;padding:10px;text-align:right}.PrivateStaticDateTimePicker .action-buttons button{min-width:0;color:inherit}.PrivateStaticDateTimePicker .action-buttons button:not(:first-of-type){margin-left:5px}.PrivateStaticDateTimePicker .action-buttons button.disabled{color:rgba(0,0,0,.5)}.PrivateStaticDateTimePicker .time{border-left:2px solid #bfbfbf}.PrivateStaticDateTimePicker .time .time-container{height:100%}.PrivateStaticDateTimePicker .time .time-container .time-title{text-align:center;padding:22px 0;font-size:15px}.PrivateStaticDateTimePicker .time .time-container .time-select-wrap{flex:1;border-top:1px solid #efefef}.PrivateStaticDateTimePicker.time .time .time-container .time-select-wrap>div>div:not(:first-of-type){border-left:1px solid #efefef}");var _excluded$b = ["ref", "value", "availableDate", "type", "time", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "minDate", "maxDate", "disablePast", "disableFuture", "onChange", "onMonthChange", "onClose"];
var DEFAULT_HOURS = new Array(24).fill(0);
for (var i$1 = 0; i$1 < DEFAULT_HOURS.length; i$1 += 1) {
  DEFAULT_HOURS[i$1] = i$1;
}
var DEFAULT_MINUTES = new Array(60).fill(0);
for (var _i$1 = 0; _i$1 < DEFAULT_MINUTES.length; _i$1 += 1) {
  DEFAULT_MINUTES[_i$1] = _i$1;
}
var DEFAULT_SECONDS = new Array(60).fill(0);
for (var _i2 = 0; _i2 < DEFAULT_SECONDS.length; _i2 += 1) {
  DEFAULT_SECONDS[_i2] = _i2;
}
var PrivateStaticDateTimePicker = function PrivateStaticDateTimePicker(t0) {
  var $ = c(86);
  var disableFuture;
  var disablePast;
  var initAvailableDate;
  var maxDate;
  var minDate;
  var minuteInterval;
  var _onChange;
  var onClose;
  var _onMonthChange;
  var props;
  var ref;
  var secondInterval;
  var t1;
  var t2;
  var t3;
  var time;
  var type;
  var value;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    value = _t.value;
    initAvailableDate = _t.availableDate;
    type = _t.type;
    time = _t.time;
    t1 = _t.hours;
    t2 = _t.minutes;
    t3 = _t.seconds;
    minuteInterval = _t.minuteInterval;
    secondInterval = _t.secondInterval;
    minDate = _t.minDate;
    maxDate = _t.maxDate;
    disablePast = _t.disablePast;
    disableFuture = _t.disableFuture;
    _onChange = _t.onChange;
    _onMonthChange = _t.onMonthChange;
    onClose = _t.onClose;
    props = _objectWithoutProperties(_t, _excluded$b);
    $[0] = t0;
    $[1] = disableFuture;
    $[2] = disablePast;
    $[3] = initAvailableDate;
    $[4] = maxDate;
    $[5] = minDate;
    $[6] = minuteInterval;
    $[7] = _onChange;
    $[8] = onClose;
    $[9] = _onMonthChange;
    $[10] = props;
    $[11] = ref;
    $[12] = secondInterval;
    $[13] = t1;
    $[14] = t2;
    $[15] = t3;
    $[16] = time;
    $[17] = type;
    $[18] = value;
  } else {
    disableFuture = $[1];
    disablePast = $[2];
    initAvailableDate = $[3];
    maxDate = $[4];
    minDate = $[5];
    minuteInterval = $[6];
    _onChange = $[7];
    onClose = $[8];
    _onMonthChange = $[9];
    props = $[10];
    ref = $[11];
    secondInterval = $[12];
    t1 = $[13];
    t2 = $[14];
    t3 = $[15];
    time = $[16];
    type = $[17];
    value = $[18];
  }
  var hours = t1 === undefined ? DEFAULT_HOURS : t1;
  var minutes = t2 === undefined ? DEFAULT_MINUTES : t2;
  var seconds = t3 === undefined ? DEFAULT_SECONDS : t3;
  var hourSelectRef = useRef(null);
  var minuteSelectRef = useRef(null);
  var secondSelectRef = useRef(null);
  var t4;
  if ($[19] !== value) {
    t4 = function t4() {
      if (value) {
        return value;
      } else {
        return dayjs();
      }
    };
    $[19] = value;
    $[20] = t4;
  } else {
    t4 = $[20];
  }
  var _useState = useState(t4),
    _useState2 = _slicedToArray(_useState, 2),
    month = _useState2[0],
    setMonth = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    activeMonthValue = _useState4[0],
    setActiveMonthValue = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    yearSelectOpen = _useState6[0],
    setYearSelectOpen = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    monthSelectOpen = _useState8[0],
    setMonthSelectOpen = _useState8[1];
  var t5;
  if ($[21] !== disableFuture || $[22] !== disablePast || $[23] !== initAvailableDate || $[24] !== maxDate || $[25] !== minDate) {
    t5 = initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture);
    $[21] = disableFuture;
    $[22] = disablePast;
    $[23] = initAvailableDate;
    $[24] = maxDate;
    $[25] = minDate;
    $[26] = t5;
  } else {
    t5 = $[26];
  }
  var availableDate = t5;
  var t6;
  var t7;
  if ($[27] !== yearSelectOpen) {
    t6 = function t6() {
      if (!yearSelectOpen) {
        setActiveMonthValue(null);
      }
    };
    t7 = [yearSelectOpen];
    $[27] = yearSelectOpen;
    $[28] = t6;
    $[29] = t7;
  } else {
    t6 = $[28];
    t7 = $[29];
  }
  useChanged(t6, t7);
  var leftArrowOnClickRef = useRef(undefined);
  var rightArrowOnClickRef = useRef(undefined);
  var t8;
  if ($[30] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      return function (props_0) {
        leftArrowOnClickRef.current = props_0.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props_0);
      };
    };
    $[30] = t8;
  } else {
    t8 = $[30];
  }
  var _useState9 = useState(t8),
    _useState0 = _slicedToArray(_useState9, 1),
    LeftArrowButton = _useState0[0];
  var t9;
  if ($[31] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9() {
      return function (props_1) {
        rightArrowOnClickRef.current = props_1.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props_1);
      };
    };
    $[31] = t9;
  } else {
    t9 = $[31];
  }
  var _useState1 = useState(t9),
    _useState10 = _slicedToArray(_useState1, 1),
    RightArrowButton = _useState10[0];
  var t10;
  if ($[32] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var previousMonth = t10;
  var t11;
  if ($[33] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  var nextMonth = t11;
  var t12;
  if ($[34] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12(date, times) {
      if (!times || times !== null && times !== void 0 && times.includes("hour")) {
        var _hourSelectRef$curren;
        (_hourSelectRef$curren = hourSelectRef.current) === null || _hourSelectRef$curren === void 0 || _hourSelectRef$curren.scrollToValue(date.hour());
      }
      if (!times || times !== null && times !== void 0 && times.includes("minute")) {
        var _minuteSelectRef$curr;
        (_minuteSelectRef$curr = minuteSelectRef.current) === null || _minuteSelectRef$curr === void 0 || _minuteSelectRef$curr.scrollToValue(date.minute());
      }
      if (!times || times !== null && times !== void 0 && times.includes("second")) {
        var _secondSelectRef$curr;
        (_secondSelectRef$curr = secondSelectRef.current) === null || _secondSelectRef$curr === void 0 || _secondSelectRef$curr.scrollToValue(date.second());
      }
    };
    $[34] = t12;
  } else {
    t12 = $[34];
  }
  var timeSelectScrollToDate = t12;
  var t13;
  if ($[35] !== month) {
    t13 = function t13(year) {
      setMonth(month.set("year", year));
      setActiveMonthValue(month.set("year", year));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    };
    $[35] = month;
    $[36] = t13;
  } else {
    t13 = $[36];
  }
  var handleYearSelect = t13;
  var t14;
  if ($[37] !== month) {
    t14 = function t14(m) {
      setMonth(month.set("month", m));
      setActiveMonthValue(month.set("month", m));
      setMonthSelectOpen(false);
    };
    $[37] = month;
    $[38] = t14;
  } else {
    t14 = $[38];
  }
  var handleMonthSelect = t14;
  var t15;
  if ($[39] !== value) {
    t15 = function t15(props_2) {
      return /*#__PURE__*/React.createElement(PickersDay, _extends({}, props_2, {
        selected: props_2.day.isSame(value, "date")
      }));
    };
    $[39] = value;
    $[40] = t15;
  } else {
    t15 = $[40];
  }
  var handleRenderDay = t15;
  var t16;
  if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = {
      timeSelectScrollToDate: timeSelectScrollToDate
    };
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  useForwardRef(ref, t16);
  var t17;
  if ($[42] !== availableDate || $[43] !== _onChange || $[44] !== time || $[45] !== type) {
    t17 = function t17(date_0, label) {
      var disabled = !isDateAvailable(date_0, availableDate, "day");
      return /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        className: disabled ? "disabled" : undefined,
        disabled: disabled,
        onClick: function onClick() {
          var finalDate = date_0;
          var checkResult = checkDateAvailable(finalDate, availableDate, type, time);
          if (checkResult !== "available") {
            var availableDateDate = getAvailableDate(availableDate, type, time);
            if (checkResult === "min") {
              if (availableDateDate[0]) {
                finalDate = availableDateDate[0];
              }
            } else {
              if (checkResult === "max") {
                if (availableDateDate[1]) {
                  finalDate = availableDateDate[1];
                }
              }
            }
          }
          _onChange("action_date", finalDate);
        }
      }, label);
    };
    $[42] = availableDate;
    $[43] = _onChange;
    $[44] = time;
    $[45] = type;
    $[46] = t17;
  } else {
    t17 = $[46];
  }
  var getActionButton = t17;
  var t18;
  if ($[47] !== type) {
    t18 = classNames("PrivateStaticDateTimePicker", type);
    $[47] = type;
    $[48] = t18;
  } else {
    t18 = $[48];
  }
  var t19;
  if ($[49] !== LeftArrowButton || $[50] !== RightArrowButton || $[51] !== activeMonthValue || $[52] !== availableDate || $[53] !== disableFuture || $[54] !== disablePast || $[55] !== getActionButton || $[56] !== handleMonthSelect || $[57] !== handleRenderDay || $[58] !== handleYearSelect || $[59] !== maxDate || $[60] !== minDate || $[61] !== month || $[62] !== monthSelectOpen || $[63] !== _onChange || $[64] !== _onMonthChange || $[65] !== props || $[66] !== type || $[67] !== value || $[68] !== yearSelectOpen) {
    t19 = type !== "time" && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "column"
    }, /*#__PURE__*/React.createElement(Grid, {
      sx: {
        p: 2,
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: "month-change-arrow-wrap"
    }, /*#__PURE__*/React.createElement(Grid, {
      flex: 1,
      className: "month-title-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      className: yearSelectOpen ? "active" : undefined,
      onClick: function onClick() {
        if (yearSelectOpen) {
          setYearSelectOpen(false);
        } else {
          setYearSelectOpen(true);
          setMonthSelectOpen(false);
        }
      }
    }, month.format("YYYY\uB144"), /*#__PURE__*/React.createElement(Icon, null, yearSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))), /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      className: monthSelectOpen ? "active" : undefined,
      onClick: function onClick() {
        if (monthSelectOpen) {
          setMonthSelectOpen(false);
        } else {
          setMonthSelectOpen(true);
          setYearSelectOpen(false);
        }
      }
    }, month.format("M\uC6D4"), /*#__PURE__*/React.createElement(Icon, null, monthSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))))), !yearSelectOpen && !monthSelectOpen && /*#__PURE__*/React.createElement(Grid, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: previousMonth,
      sx: {
        mr: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, null, "keyboard_arrow_left")), /*#__PURE__*/React.createElement(IconButton, {
      onClick: nextMonth
    }, /*#__PURE__*/React.createElement(Icon, null, "keyboard_arrow_right"))))), /*#__PURE__*/React.createElement(Grid, {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(StaticDateTimePicker, _extends({}, props, {
      value: activeMonthValue,
      referenceDate: month,
      slots: {
        previousIconButton: LeftArrowButton,
        nextIconButton: RightArrowButton,
        day: handleRenderDay,
        actionBar: _temp$i
      },
      viewRenderers: {
        hours: null,
        minutes: null,
        seconds: null
      },
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      displayStaticWrapperAs: "desktop",
      onChange: function onChange(newValue) {
        var finalValue = newValue ? value ? newValue.set("hour", value.hour()).set("minute", value.minute()).set("second", value.second()) : newValue : newValue;
        _onChange("date", finalValue);
      },
      onMonthChange: function onMonthChange(month_0) {
        setMonth(month_0);
        if (_onMonthChange) {
          _onMonthChange(month_0);
        }
      }
    })), yearSelectOpen && /*#__PURE__*/React.createElement(PrivateYearSelect, {
      selectYear: value == null ? null : value.year(),
      activeYear: month.year(),
      availableDate: availableDate,
      onSelect: handleYearSelect
    }), monthSelectOpen && /*#__PURE__*/React.createElement(PrivateMonthSelect, {
      year: month.year(),
      selectYear: value == null ? null : value.year(),
      selectMonth: value == null ? null : value.month(),
      activeMonth: month.month(),
      availableDate: availableDate,
      onSelect: handleMonthSelect
    })), /*#__PURE__*/React.createElement(Grid, {
      className: "action-buttons"
    }, getActionButton(dayjs().startOf("d").subtract(1, "month").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC9C0\uB09C\uB2EC"), getActionButton(dayjs().startOf("d").subtract(7, "d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC9C0\uB09C\uC8FC"), getActionButton(dayjs().startOf("d").subtract(1, "d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC5B4\uC81C"), getActionButton(dayjs().startOf("d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC624\uB298"))));
    $[49] = LeftArrowButton;
    $[50] = RightArrowButton;
    $[51] = activeMonthValue;
    $[52] = availableDate;
    $[53] = disableFuture;
    $[54] = disablePast;
    $[55] = getActionButton;
    $[56] = handleMonthSelect;
    $[57] = handleRenderDay;
    $[58] = handleYearSelect;
    $[59] = maxDate;
    $[60] = minDate;
    $[61] = month;
    $[62] = monthSelectOpen;
    $[63] = _onChange;
    $[64] = _onMonthChange;
    $[65] = props;
    $[66] = type;
    $[67] = value;
    $[68] = yearSelectOpen;
    $[69] = t19;
  } else {
    t19 = $[69];
  }
  var t20;
  if ($[70] !== availableDate || $[71] !== hours || $[72] !== minuteInterval || $[73] !== minutes || $[74] !== _onChange || $[75] !== onClose || $[76] !== secondInterval || $[77] !== seconds || $[78] !== time || $[79] !== type || $[80] !== value) {
    t20 = time && /*#__PURE__*/React.createElement(PrivateTimeSection, {
      time: time,
      cols: type === "time" ? 3 : 1,
      width: type === "time" ? 240 : 80,
      availableDate: availableDate,
      hourSelectRef: hourSelectRef,
      minuteSelectRef: minuteSelectRef,
      secondSelectRef: secondSelectRef,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      minuteInterval: minuteInterval,
      secondInterval: secondInterval,
      value: value,
      onChange: _onChange,
      onClose: onClose
    });
    $[70] = availableDate;
    $[71] = hours;
    $[72] = minuteInterval;
    $[73] = minutes;
    $[74] = _onChange;
    $[75] = onClose;
    $[76] = secondInterval;
    $[77] = seconds;
    $[78] = time;
    $[79] = type;
    $[80] = value;
    $[81] = t20;
  } else {
    t20 = $[81];
  }
  var t21;
  if ($[82] !== t18 || $[83] !== t19 || $[84] !== t20) {
    t21 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: t18
    }, t19, t20);
    $[82] = t18;
    $[83] = t19;
    $[84] = t20;
    $[85] = t21;
  } else {
    t21 = $[85];
  }
  return t21;
};
function _temp$i() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}var getFinalValue$7 = function getFinalValue(value) {
  return value || null;
};insertStyle(".PrivateDateTimePicker .input-text-field.align-left .MuiInputBase-input{text-align:left}.PrivateDateTimePicker .input-text-field.align-center .MuiInputBase-input{text-align:center}.PrivateDateTimePicker .input-text-field.align-right .MuiInputBase-input{text-align:right}");var _excluded$a = ["ref", "variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "enableKeyboardInput", "hidden", "showDaysOutsideCurrentMonth", "onChange", "onValidate", "className", "style", "sx"];
var PrivateDateTimePicker = function PrivateDateTimePicker(t0) {
  var $ = c(290);
  var className;
  var disableFuture;
  var disablePast;
  var enableKeyboardInput;
  var endAdornment;
  var exceptValue;
  var helperText;
  var hours;
  var icon;
  var initColor;
  var initData;
  var initDisabled;
  var initError;
  var initFocused;
  var initFormValueFormat;
  var initFormat;
  var initFullWidth;
  var initHidden;
  var initLabel;
  var initLabelShrink;
  var initSize;
  var initStyle;
  var initVariant;
  var labelIcon;
  var maxDate;
  var minDate;
  var minuteInterval;
  var minutes;
  var name;
  var onChange;
  var onValidate;
  var otherProps;
  var readOnly;
  var ref;
  var required;
  var secondInterval;
  var seconds;
  var startAdornment;
  var sx;
  var t1;
  var t2;
  var t3;
  var time;
  var type;
  var width;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    initVariant = _t.variant;
    initSize = _t.size;
    initColor = _t.color;
    initFocused = _t.focused;
    initLabelShrink = _t.labelShrink;
    initFullWidth = _t.fullWidth;
    name = _t.name;
    type = _t.type;
    time = _t.time;
    t1 = _t.value;
    initData = _t.data;
    initLabel = _t.label;
    labelIcon = _t.labelIcon;
    initFormat = _t.format;
    initFormValueFormat = _t.formValueFormat;
    required = _t.required;
    readOnly = _t.readOnly;
    initDisabled = _t.disabled;
    width = _t.width;
    initError = _t.error;
    helperText = _t.helperText;
    minDate = _t.minDate;
    maxDate = _t.maxDate;
    disableFuture = _t.disableFuture;
    disablePast = _t.disablePast;
    exceptValue = _t.exceptValue;
    icon = _t.icon;
    startAdornment = _t.startAdornment;
    endAdornment = _t.endAdornment;
    t2 = _t.align;
    hours = _t.hours;
    minutes = _t.minutes;
    seconds = _t.seconds;
    minuteInterval = _t.minuteInterval;
    secondInterval = _t.secondInterval;
    enableKeyboardInput = _t.enableKeyboardInput;
    initHidden = _t.hidden;
    t3 = _t.showDaysOutsideCurrentMonth;
    onChange = _t.onChange;
    onValidate = _t.onValidate;
    className = _t.className;
    initStyle = _t.style;
    sx = _t.sx;
    otherProps = _objectWithoutProperties(_t, _excluded$a);
    $[0] = t0;
    $[1] = className;
    $[2] = disableFuture;
    $[3] = disablePast;
    $[4] = enableKeyboardInput;
    $[5] = endAdornment;
    $[6] = exceptValue;
    $[7] = helperText;
    $[8] = hours;
    $[9] = icon;
    $[10] = initColor;
    $[11] = initData;
    $[12] = initDisabled;
    $[13] = initError;
    $[14] = initFocused;
    $[15] = initFormValueFormat;
    $[16] = initFormat;
    $[17] = initFullWidth;
    $[18] = initHidden;
    $[19] = initLabel;
    $[20] = initLabelShrink;
    $[21] = initSize;
    $[22] = initStyle;
    $[23] = initVariant;
    $[24] = labelIcon;
    $[25] = maxDate;
    $[26] = minDate;
    $[27] = minuteInterval;
    $[28] = minutes;
    $[29] = name;
    $[30] = onChange;
    $[31] = onValidate;
    $[32] = otherProps;
    $[33] = readOnly;
    $[34] = ref;
    $[35] = required;
    $[36] = secondInterval;
    $[37] = seconds;
    $[38] = startAdornment;
    $[39] = sx;
    $[40] = t1;
    $[41] = t2;
    $[42] = t3;
    $[43] = time;
    $[44] = type;
    $[45] = width;
  } else {
    className = $[1];
    disableFuture = $[2];
    disablePast = $[3];
    enableKeyboardInput = $[4];
    endAdornment = $[5];
    exceptValue = $[6];
    helperText = $[7];
    hours = $[8];
    icon = $[9];
    initColor = $[10];
    initData = $[11];
    initDisabled = $[12];
    initError = $[13];
    initFocused = $[14];
    initFormValueFormat = $[15];
    initFormat = $[16];
    initFullWidth = $[17];
    initHidden = $[18];
    initLabel = $[19];
    initLabelShrink = $[20];
    initSize = $[21];
    initStyle = $[22];
    initVariant = $[23];
    labelIcon = $[24];
    maxDate = $[25];
    minDate = $[26];
    minuteInterval = $[27];
    minutes = $[28];
    name = $[29];
    onChange = $[30];
    onValidate = $[31];
    otherProps = $[32];
    readOnly = $[33];
    ref = $[34];
    required = $[35];
    secondInterval = $[36];
    seconds = $[37];
    startAdornment = $[38];
    sx = $[39];
    t1 = $[40];
    t2 = $[41];
    t3 = $[42];
    time = $[43];
    type = $[44];
    width = $[45];
  }
  var initValue = t1 === undefined ? null : t1;
  var align = t2 === undefined ? "center" : t2;
  var showDaysOutsideCurrentMonth = t3 === undefined ? true : t3;
  var id = useId();
  var privateStaticDateTimePickerRef = useRef(null);
  var textFieldInputRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var openValueRef = useRef(undefined);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var onChangeRef = useAutoUpdateRef(onChange);
  var initValueRef = useAutoUpdateRef(initValue);
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    timeError = _useState4[0],
    setTimeError = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    errorHelperText = _useState6[0],
    setErrorHelperText = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    datePickerError = _useState8[0],
    setDatePickerError = _useState8[1];
  var _useState9 = useState(initError),
    _useState0 = _slicedToArray(_useState9, 2),
    error = _useState0[0],
    _setError = _useState0[1];
  var t4;
  var t5;
  if ($[46] !== initError) {
    t4 = function t4() {
      return _setError(initError);
    };
    t5 = [initError];
    $[46] = initError;
    $[47] = t4;
    $[48] = t5;
  } else {
    t4 = $[47];
    t5 = $[48];
  }
  useFirstSkipChanged(t4, t5);
  var errorRef = useAutoUpdateRef(error);
  var t6;
  if ($[49] !== errorRef) {
    t6 = function t6(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[49] = errorRef;
    $[50] = t6;
  } else {
    t6 = $[50];
  }
  var setError = t6;
  var _useState1 = useState(initData),
    _useState10 = _slicedToArray(_useState1, 2),
    data = _useState10[0],
    _setData = _useState10[1];
  var t7;
  var t8;
  if ($[51] !== initData) {
    t7 = function t7() {
      return _setData(initData);
    };
    t8 = [initData];
    $[51] = initData;
    $[52] = t7;
    $[53] = t8;
  } else {
    t7 = $[52];
    t8 = $[53];
  }
  useFirstSkipChanged(t7, t8);
  var dataRef = useAutoUpdateRef(data);
  var t9;
  if ($[54] !== dataRef) {
    t9 = function t9(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[54] = dataRef;
    $[55] = t9;
  } else {
    t9 = $[55];
  }
  var setData = t9;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState11 = useState(finalInitDisabled),
    _useState12 = _slicedToArray(_useState11, 2),
    disabled = _useState12[0],
    setDisabled = _useState12[1];
  var t10;
  var t11;
  if ($[56] !== finalInitDisabled) {
    t10 = function t10() {
      return setDisabled(finalInitDisabled);
    };
    t11 = [finalInitDisabled];
    $[56] = finalInitDisabled;
    $[57] = t10;
    $[58] = t11;
  } else {
    t10 = $[57];
    t11 = $[58];
  }
  useFirstSkipChanged(t10, t11);
  var _useState13 = useState(initHidden),
    _useState14 = _slicedToArray(_useState13, 2),
    hidden = _useState14[0],
    setHidden = _useState14[1];
  var t12;
  var t13;
  if ($[59] !== initHidden) {
    t12 = function t12() {
      return setHidden(initHidden);
    };
    t13 = [initHidden];
    $[59] = initHidden;
    $[60] = t12;
    $[61] = t13;
  } else {
    t12 = $[60];
    t13 = $[61];
  }
  useFirstSkipChanged(t12, t13);
  var t14;
  if ($[62] !== initFormat || $[63] !== time || $[64] !== type) {
    t14 = initFormat ? initFormat : getDateTimeFormat(type, time);
    $[62] = initFormat;
    $[63] = time;
    $[64] = type;
    $[65] = t14;
  } else {
    t14 = $[65];
  }
  var format = t14;
  var t15 = !!disablePast;
  var t16 = !!disableFuture;
  var t17;
  if ($[66] !== maxDate || $[67] !== minDate || $[68] !== t15 || $[69] !== t16) {
    t17 = makeAvailableDate(minDate, maxDate, t15, t16);
    $[66] = maxDate;
    $[67] = minDate;
    $[68] = t15;
    $[69] = t16;
    $[70] = t17;
  } else {
    t17 = $[70];
  }
  var availableDate = t17;
  var t18;
  if ($[71] !== setError) {
    t18 = function t18(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[71] = setError;
    $[72] = t18;
  } else {
    t18 = $[72];
  }
  var setErrorErrorHelperText = t18;
  var t19;
  if ($[73] !== datePickerError || $[74] !== onValidateRef || $[75] !== required || $[76] !== setErrorErrorHelperText || $[77] !== timeError) {
    t19 = function t19(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (value && !value.isValid()) {
        setErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        return false;
      }
      if (datePickerError) {
        setErrorErrorHelperText(true, getDateValidationErrorText(datePickerError));
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
    };
    $[73] = datePickerError;
    $[74] = onValidateRef;
    $[75] = required;
    $[76] = setErrorErrorHelperText;
    $[77] = timeError;
    $[78] = t19;
  } else {
    t19 = $[78];
  }
  var validate = t19;
  var validateRef = useAutoUpdateRef(validate);
  var t20;
  if ($[79] !== initValue) {
    t20 = getFinalValue$7(initValue);
    $[79] = initValue;
    $[80] = t20;
  } else {
    t20 = $[80];
  }
  var _useState15 = useState(t20),
    _useState16 = _slicedToArray(_useState15, 2),
    value_0 = _useState16[0],
    _setValue = _useState16[1];
  var t21;
  var t22;
  if ($[81] !== initValue) {
    t21 = function t21() {
      return _setValue(getFinalValue$7(initValue));
    };
    t22 = [initValue];
    $[81] = initValue;
    $[82] = t21;
    $[83] = t22;
  } else {
    t21 = $[82];
    t22 = $[83];
  }
  useFirstSkipChanged(t21, t22);
  var valueRef = useAutoUpdateRef(value_0);
  var t23;
  if ($[84] !== valueRef) {
    t23 = function t23(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[84] = valueRef;
    $[85] = t23;
  } else {
    t23 = $[85];
  }
  var setValue = t23;
  var t24;
  if ($[86] !== availableDate || $[87] !== error || $[88] !== name || $[89] !== onChangeRef || $[90] !== onValueChange || $[91] !== setValue || $[92] !== time || $[93] !== type || $[94] !== validateRef) {
    t24 = function t24(newValue_2) {
      var _onChangeRef$current;
      var finalValue = getFinalValue$7(newValue_2);
      setValue(finalValue);
      if (error) {
        validateRef.current(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      if (type !== "time" && time && finalValue && (availableDate[0] || availableDate[1])) {
        var availableDateVal = getAvailableDateVal(availableDate, type, time);
        var valueVal = getDateValForAvailableDate(finalValue, type, time);
        var timeError_0 = null;
        if (availableDateVal[0] && valueVal < availableDateVal[0]) {
          timeError_0 = "minDate";
        }
        if (timeError_0 == null && availableDateVal[1] && valueVal > availableDateVal[1]) {
          timeError_0 = "maxDate";
        }
        setTimeError(timeError_0);
      } else {
        setTimeError(null);
      }
      return finalValue;
    };
    $[86] = availableDate;
    $[87] = error;
    $[88] = name;
    $[89] = onChangeRef;
    $[90] = onValueChange;
    $[91] = setValue;
    $[92] = time;
    $[93] = type;
    $[94] = validateRef;
    $[95] = t24;
  } else {
    t24 = $[95];
  }
  var updateValue = t24;
  var _useState17 = useState(value_0),
    _useState18 = _slicedToArray(_useState17, 2),
    inputValue = _useState18[0],
    setInputValue = _useState18[1];
  var t25;
  var t26;
  if ($[96] !== value_0) {
    t25 = function t25() {
      return setInputValue(value_0);
    };
    t26 = [value_0];
    $[96] = value_0;
    $[97] = t25;
    $[98] = t26;
  } else {
    t25 = $[97];
    t26 = $[98];
  }
  useFirstSkipChanged(t25, t26);
  var t27;
  if ($[99] !== error || $[100] !== timeError || $[101] !== validateRef || $[102] !== valueRef) {
    t27 = function t27() {
      if (error && !timeError) {
        validateRef.current(valueRef.current);
      }
    };
    $[99] = error;
    $[100] = timeError;
    $[101] = validateRef;
    $[102] = valueRef;
    $[103] = t27;
  } else {
    t27 = $[103];
  }
  var t28;
  if ($[104] !== error || $[105] !== timeError) {
    t28 = [error, timeError];
    $[104] = error;
    $[105] = timeError;
    $[106] = t28;
  } else {
    t28 = $[106];
  }
  useEventEffect(t27, t28);
  var t29;
  if ($[107] !== isOpen || $[108] !== name || $[109] !== onRequestSearchSubmit || $[110] !== valueRef) {
    t29 = function t29() {
      if (isOpen) {
        openValueRef.current = valueRef.current;
      } else {
        if (openValueRef.current !== valueRef.current) {
          var runOnRequestSearchSubmit;
          if (openValueRef.current && valueRef.current) {
            runOnRequestSearchSubmit = !openValueRef.current.isSame(valueRef.current, "second");
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, valueRef.current);
          }
        }
      }
    };
    $[107] = isOpen;
    $[108] = name;
    $[109] = onRequestSearchSubmit;
    $[110] = valueRef;
    $[111] = t29;
  } else {
    t29 = $[111];
  }
  var t30;
  if ($[112] !== isOpen) {
    t30 = [isOpen];
    $[112] = isOpen;
    $[113] = t30;
  } else {
    t30 = $[113];
  }
  useEventEffect(t29, t30);
  var t31;
  if ($[114] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31() {
      var _textFieldInputRef$cu;
      (_textFieldInputRef$cu = textFieldInputRef.current) === null || _textFieldInputRef$cu === void 0 || _textFieldInputRef$cu.focus();
    };
    $[114] = t31;
  } else {
    t31 = $[114];
  }
  var focus = t31;
  var t32;
  if ($[115] !== name) {
    t32 = function t32() {
      return name;
    };
    $[115] = name;
    $[116] = t32;
  } else {
    t32 = $[116];
  }
  var t33;
  if ($[117] !== initValueRef) {
    t33 = function t33() {
      return getFinalValue$7(initValueRef.current);
    };
    $[117] = initValueRef;
    $[118] = t33;
  } else {
    t33 = $[118];
  }
  var t34;
  if ($[119] !== initValueRef || $[120] !== updateValue) {
    t34 = function t34() {
      return updateValue(initValueRef.current);
    };
    $[119] = initValueRef;
    $[120] = updateValue;
    $[121] = t34;
  } else {
    t34 = $[121];
  }
  var t35;
  if ($[122] !== valueRef) {
    t35 = function t35() {
      return valueRef.current;
    };
    $[122] = valueRef;
    $[123] = t35;
  } else {
    t35 = $[123];
  }
  var t36;
  if ($[124] !== dataRef) {
    t36 = function t36() {
      return dataRef.current;
    };
    $[124] = dataRef;
    $[125] = t36;
  } else {
    t36 = $[125];
  }
  var t37;
  if ($[126] !== exceptValue) {
    t37 = function t37() {
      return !!exceptValue;
    };
    $[126] = exceptValue;
    $[127] = t37;
  } else {
    t37 = $[127];
  }
  var t38;
  if ($[128] !== disabled) {
    t38 = function t38() {
      return !!disabled;
    };
    $[128] = disabled;
    $[129] = t38;
  } else {
    t38 = $[129];
  }
  var t39;
  if ($[130] !== hidden) {
    t39 = function t39() {
      return !!hidden;
    };
    $[130] = hidden;
    $[131] = t39;
  } else {
    t39 = $[131];
  }
  var t40;
  if ($[132] !== validateRef || $[133] !== valueRef) {
    t40 = function t40() {
      return validateRef.current(valueRef.current);
    };
    $[132] = validateRef;
    $[133] = valueRef;
    $[134] = t40;
  } else {
    t40 = $[134];
  }
  var t41;
  if ($[135] !== setErrorErrorHelperText) {
    t41 = function t41(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[135] = setErrorErrorHelperText;
    $[136] = t41;
  } else {
    t41 = $[136];
  }
  var t42;
  if ($[137] !== initFormValueFormat || $[138] !== time || $[139] !== type) {
    t42 = function t42() {
      return initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time);
    };
    $[137] = initFormValueFormat;
    $[138] = time;
    $[139] = type;
    $[140] = t42;
  } else {
    t42 = $[140];
  }
  var t43;
  if ($[141] !== setData || $[142] !== t32 || $[143] !== t33 || $[144] !== t34 || $[145] !== t35 || $[146] !== t36 || $[147] !== t37 || $[148] !== t38 || $[149] !== t39 || $[150] !== t40 || $[151] !== t41 || $[152] !== t42 || $[153] !== updateValue) {
    t43 = {
      getType: _temp$h,
      getName: t32,
      getReset: t33,
      reset: t34,
      getValue: t35,
      setValue: updateValue,
      getData: t36,
      setData: setData,
      isExceptValue: t37,
      isDisabled: t38,
      setDisabled: setDisabled,
      isHidden: t39,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t40,
      setError: t41,
      getFormValueFormat: t42
    };
    $[141] = setData;
    $[142] = t32;
    $[143] = t33;
    $[144] = t34;
    $[145] = t35;
    $[146] = t36;
    $[147] = t37;
    $[148] = t38;
    $[149] = t39;
    $[150] = t40;
    $[151] = t41;
    $[152] = t42;
    $[153] = updateValue;
    $[154] = t43;
  } else {
    t43 = $[154];
  }
  var commands = t43;
  var t44;
  if ($[155] !== id || $[156] !== onAddValueItem) {
    t44 = function t44(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[155] = id;
    $[156] = onAddValueItem;
    $[157] = t44;
  } else {
    t44 = $[157];
  }
  var t45;
  if ($[158] !== id || $[159] !== onRemoveValueItem) {
    t45 = function t45() {
      return onRemoveValueItem(id);
    };
    $[158] = id;
    $[159] = onRemoveValueItem;
    $[160] = t45;
  } else {
    t45 = $[160];
  }
  useForwardRef(ref, commands, t44, t45);
  var t46;
  if ($[161] !== availableDate || $[162] !== isOpen || $[163] !== name || $[164] !== onRequestSearchSubmit || $[165] !== onValueChangeByUser || $[166] !== time || $[167] !== type || $[168] !== updateValue) {
    t46 = function t46(unit, newValue_3, keyboardInputValue) {
      var isUpdateValue = true;
      if (notEmpty(keyboardInputValue)) {
        if (newValue_3) {
          if (!newValue_3.isValid()) {
            isUpdateValue = false;
          }
        }
      }
      var finalValue_0 = newValue_3;
      if (isUpdateValue) {
        if (type !== "time" && finalValue_0 != null && keyboardInputValue == null) {
          var checkResult = checkDateAvailable(finalValue_0, availableDate, type, time);
          if (checkResult !== "available") {
            var availableDateDate = getAvailableDate(availableDate, type, time);
            if (checkResult === "min") {
              if (availableDateDate[0]) {
                finalValue_0 = availableDateDate[0];
              }
            } else {
              if (checkResult === "max") {
                if (availableDateDate[1]) {
                  finalValue_0 = availableDateDate[1];
                }
              }
            }
          }
        }
        var runOnRequestSearchSubmit_0 = false;
        if (notEmpty(keyboardInputValue)) {
          if (!time || unit !== "action_date") {
            runOnRequestSearchSubmit_0 = !isOpen;
            setIsOpen(false);
          }
        } else {
          if (time) {
            if (time === unit) {
              setIsOpen(false);
            }
          }
        }
        updateValue(finalValue_0);
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_0);
          if (runOnRequestSearchSubmit_0) {
            onRequestSearchSubmit(name, finalValue_0);
          }
        });
        if (time) {
          if (finalValue_0) {
            bb257: switch (unit) {
              case "date":
              case "action_date":
                {
                  var _privateStaticDateTim;
                  (_privateStaticDateTim = privateStaticDateTimePickerRef.current) === null || _privateStaticDateTim === void 0 || _privateStaticDateTim.timeSelectScrollToDate(finalValue_0);
                  break bb257;
                }
              case "hour":
                {
                  var _privateStaticDateTim2;
                  (_privateStaticDateTim2 = privateStaticDateTimePickerRef.current) === null || _privateStaticDateTim2 === void 0 || _privateStaticDateTim2.timeSelectScrollToDate(finalValue_0, ["minute", "second"]);
                  break bb257;
                }
              case "minute":
                {
                  var _privateStaticDateTim3;
                  (_privateStaticDateTim3 = privateStaticDateTimePickerRef.current) === null || _privateStaticDateTim3 === void 0 || _privateStaticDateTim3.timeSelectScrollToDate(finalValue_0, ["second"]);
                }
            }
          }
        }
      }
      setInputValue(finalValue_0);
    };
    $[161] = availableDate;
    $[162] = isOpen;
    $[163] = name;
    $[164] = onRequestSearchSubmit;
    $[165] = onValueChangeByUser;
    $[166] = time;
    $[167] = type;
    $[168] = updateValue;
    $[169] = t46;
  } else {
    t46 = $[169];
  }
  var handleChange = t46;
  var t47;
  if ($[170] === Symbol["for"]("react.memo_cache_sentinel")) {
    t47 = function t47() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[170] = t47;
  } else {
    t47 = $[170];
  }
  var handleContainerFocus = t47;
  var t48;
  if ($[171] === Symbol["for"]("react.memo_cache_sentinel")) {
    t48 = function t48() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
        closeTimeoutRef.current = setTimeout(function () {
          closeTimeoutRef.current = undefined;
          setIsOpen(false);
        }, 10);
      }
    };
    $[171] = t48;
  } else {
    t48 = $[171];
  }
  var handleContainerBlur = t48;
  var t49;
  if ($[172] === Symbol["for"]("react.memo_cache_sentinel")) {
    t49 = function t49() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[172] = t49;
  } else {
    t49 = $[172];
  }
  var handleContainerMouseDown = t49;
  var t50;
  if ($[173] === Symbol["for"]("react.memo_cache_sentinel")) {
    t50 = function t50(ref_0) {
      textFieldInputRef.current = ref_0;
    };
    $[173] = t50;
  } else {
    t50 = $[173];
  }
  var slotPropsInputRef = t50;
  var muiInputProps;
  if ($[174] !== endAdornment || $[175] !== icon || $[176] !== startAdornment) {
    muiInputProps = {
      endAdornment: undefined
    };
    if (startAdornment || icon) {
      var _t2;
      if ($[178] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "small"
        }, icon));
        $[178] = icon;
        $[179] = _t2;
      } else {
        _t2 = $[179];
      }
      var _t3;
      if ($[180] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, startAdornment);
        $[180] = startAdornment;
        $[181] = _t3;
      } else {
        _t3 = $[181];
      }
      var _t4;
      if ($[182] !== _t2 || $[183] !== _t3) {
        _t4 = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3);
        $[182] = _t2;
        $[183] = _t3;
        $[184] = _t4;
      } else {
        _t4 = $[184];
      }
      muiInputProps.startAdornment = _t4;
    }
    if (endAdornment) {
      var _t5;
      if ($[185] !== endAdornment) {
        _t5 = endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, endAdornment);
        $[185] = endAdornment;
        $[186] = _t5;
      } else {
        _t5 = $[186];
      }
      var _t6;
      if ($[187] !== _t5) {
        _t6 = /*#__PURE__*/React.createElement(React.Fragment, null, _t5);
        $[187] = _t5;
        $[188] = _t6;
      } else {
        _t6 = $[188];
      }
      muiInputProps.endAdornment = _t6;
    }
    $[174] = endAdornment;
    $[175] = icon;
    $[176] = startAdornment;
    $[177] = muiInputProps;
  } else {
    muiInputProps = $[177];
  }
  var slotPropsMuiInputProps = muiInputProps;
  var readOnly_0 = !enableKeyboardInput;
  var t51 = "align-".concat(align);
  var t52;
  if ($[189] !== t51) {
    t52 = classNames("input-text-field", t51);
    $[189] = t51;
    $[190] = t52;
  } else {
    t52 = $[190];
  }
  var t53;
  if ($[191] !== labelShrink) {
    t53 = labelShrink ? {
      shrink: true
    } : undefined;
    $[191] = labelShrink;
    $[192] = t53;
  } else {
    t53 = $[192];
  }
  var t54 = readOnly_0 ? -1 : undefined;
  var t55;
  if ($[193] !== readOnly_0 || $[194] !== t54) {
    t55 = {
      readOnly: readOnly_0,
      tabIndex: t54
    };
    $[193] = readOnly_0;
    $[194] = t54;
    $[195] = t55;
  } else {
    t55 = $[195];
  }
  var t56 = !!error || !!timeError;
  var t57;
  if ($[196] !== initStyle || $[197] !== width) {
    t57 = width != null ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      width: width
    }) : initStyle;
    $[196] = initStyle;
    $[197] = width;
    $[198] = t57;
  } else {
    t57 = $[198];
  }
  var t58;
  var t59;
  if ($[199] === Symbol["for"]("react.memo_cache_sentinel")) {
    t58 = function t58() {
      return setIsOpen(true);
    };
    t59 = function t59() {
      return setIsOpen(true);
    };
    $[199] = t58;
    $[200] = t59;
  } else {
    t58 = $[199];
    t59 = $[200];
  }
  var t60;
  if ($[201] !== color || $[202] !== focused || $[203] !== fullWidth || $[204] !== required || $[205] !== size || $[206] !== slotPropsMuiInputProps || $[207] !== sx || $[208] !== t52 || $[209] !== t53 || $[210] !== t55 || $[211] !== t56 || $[212] !== t57 || $[213] !== variant) {
    t60 = {
      textField: {
        className: t52,
        inputRef: slotPropsInputRef,
        variant: variant,
        size: size,
        color: color,
        focused: focused,
        InputLabelProps: t53,
        InputProps: slotPropsMuiInputProps,
        inputProps: t55,
        required: required,
        fullWidth: fullWidth,
        helperText: undefined,
        error: t56,
        style: t57,
        sx: sx,
        onFocus: t58,
        onClick: t59
      }
    };
    $[201] = color;
    $[202] = focused;
    $[203] = fullWidth;
    $[204] = required;
    $[205] = size;
    $[206] = slotPropsMuiInputProps;
    $[207] = sx;
    $[208] = t52;
    $[209] = t53;
    $[210] = t55;
    $[211] = t56;
    $[212] = t57;
    $[213] = variant;
    $[214] = t60;
  } else {
    t60 = $[214];
  }
  var slotProps = t60;
  var t61 = error && helperText ? 8 : -14;
  var t62;
  if ($[215] !== t61) {
    t62 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t61]
          }
        }]
      }
    };
    $[215] = t61;
    $[216] = t62;
  } else {
    t62 = $[216];
  }
  var tooltipSlotProps = t62;
  var t63;
  if ($[217] === Symbol["for"]("react.memo_cache_sentinel")) {
    t63 = function t63() {
      return setIsOpen(false);
    };
    $[217] = t63;
  } else {
    t63 = $[217];
  }
  var t64;
  if ($[218] !== className) {
    t64 = classNames(className, "PrivateDateTimePicker");
    $[218] = className;
    $[219] = t64;
  } else {
    t64 = $[219];
  }
  var t65 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t66 = fullWidth ? 1 : undefined;
  var t67;
  if ($[220] !== t65 || $[221] !== t66) {
    t67 = {
      display: t65,
      flex: t66
    };
    $[220] = t65;
    $[221] = t66;
    $[222] = t67;
  } else {
    t67 = $[222];
  }
  var t68 = disabled || readOnly ? false : isOpen;
  var t69;
  if ($[223] !== time) {
    t69 = function t69() {
      return !time && setIsOpen(false);
    };
    $[223] = time;
    $[224] = t69;
  } else {
    t69 = $[224];
  }
  var t70;
  if ($[225] === Symbol["for"]("react.memo_cache_sentinel")) {
    t70 = function t70() {
      return setIsOpen(false);
    };
    $[225] = t70;
  } else {
    t70 = $[225];
  }
  var t71;
  if ($[226] !== availableDate || $[227] !== disableFuture || $[228] !== disablePast || $[229] !== handleChange || $[230] !== hours || $[231] !== maxDate || $[232] !== minDate || $[233] !== minuteInterval || $[234] !== minutes || $[235] !== otherProps || $[236] !== secondInterval || $[237] !== seconds || $[238] !== showDaysOutsideCurrentMonth || $[239] !== t69 || $[240] !== time || $[241] !== type || $[242] !== value_0) {
    t71 = /*#__PURE__*/React.createElement(PrivateStaticDateTimePicker, _extends({}, otherProps, {
      ref: privateStaticDateTimePickerRef,
      type: type,
      time: time,
      value: value_0,
      availableDate: availableDate,
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      minuteInterval: minuteInterval,
      secondInterval: secondInterval,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
      onChange: handleChange,
      onAccept: t69,
      onClose: t70
    }));
    $[226] = availableDate;
    $[227] = disableFuture;
    $[228] = disablePast;
    $[229] = handleChange;
    $[230] = hours;
    $[231] = maxDate;
    $[232] = minDate;
    $[233] = minuteInterval;
    $[234] = minutes;
    $[235] = otherProps;
    $[236] = secondInterval;
    $[237] = seconds;
    $[238] = showDaysOutsideCurrentMonth;
    $[239] = t69;
    $[240] = time;
    $[241] = type;
    $[242] = value_0;
    $[243] = t71;
  } else {
    t71 = $[243];
  }
  var t72 = fullWidth ? "block" : "inline-block";
  var t73;
  if ($[244] !== t72) {
    t73 = {
      display: t72
    };
    $[244] = t72;
    $[245] = t73;
  } else {
    t73 = $[245];
  }
  var t74;
  if ($[246] !== initLabel || $[247] !== labelIcon) {
    t74 = labelIcon ? /*#__PURE__*/React.createElement(PIconText, {
      icon: labelIcon
    }, initLabel) : initLabel;
    $[246] = initLabel;
    $[247] = labelIcon;
    $[248] = t74;
  } else {
    t74 = $[248];
  }
  var t75;
  if ($[249] === Symbol["for"]("react.memo_cache_sentinel")) {
    t75 = function t75() {
      return setIsOpen(false);
    };
    $[249] = t75;
  } else {
    t75 = $[249];
  }
  var t76;
  if ($[250] !== disablePast || $[251] !== inputValue || $[252] !== time) {
    t76 = function t76(reason, v) {
      if (disablePast) {
        var formatStr;
        bb400: switch (time) {
          case "hour":
            {
              formatStr = "YYYY-MM-DD HH";
              break bb400;
            }
          case "minute":
            {
              formatStr = "YYYY-MM-DD HH:mm";
              break bb400;
            }
          case "second":
            {
              formatStr = "YYYY-MM-DD HH:mm:ss";
            }
        }
        if (dayjs(v).format(formatStr) !== (inputValue === null || inputValue === void 0 ? void 0 : inputValue.format(formatStr))) {
          setDatePickerError(reason);
        }
      } else {
        setDatePickerError(reason);
      }
    };
    $[250] = disablePast;
    $[251] = inputValue;
    $[252] = time;
    $[253] = t76;
  } else {
    t76 = $[253];
  }
  var t77;
  if ($[254] !== handleChange) {
    t77 = function t77(newValue_4) {
      return handleChange("date", newValue_4);
    };
    $[254] = handleChange;
    $[255] = t77;
  } else {
    t77 = $[255];
  }
  var t78;
  if ($[256] !== disableFuture || $[257] !== disablePast || $[258] !== disabled || $[259] !== format || $[260] !== inputValue || $[261] !== maxDate || $[262] !== minDate || $[263] !== otherProps || $[264] !== readOnly || $[265] !== showDaysOutsideCurrentMonth || $[266] !== slotProps || $[267] !== t74 || $[268] !== t76 || $[269] !== t77) {
    t78 = /*#__PURE__*/React.createElement(DesktopDateTimePicker, _extends({
      value: inputValue,
      label: t74,
      open: false,
      format: format,
      disabled: disabled,
      readOnly: readOnly,
      minDate: minDate,
      maxDate: maxDate,
      view: "minutes",
      disablePast: disablePast,
      disableFuture: disableFuture,
      onClose: t75,
      onError: t76,
      onChange: t77,
      slotProps: slotProps,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth
    }, otherProps));
    $[256] = disableFuture;
    $[257] = disablePast;
    $[258] = disabled;
    $[259] = format;
    $[260] = inputValue;
    $[261] = maxDate;
    $[262] = minDate;
    $[263] = otherProps;
    $[264] = readOnly;
    $[265] = showDaysOutsideCurrentMonth;
    $[266] = slotProps;
    $[267] = t74;
    $[268] = t76;
    $[269] = t77;
    $[270] = t78;
  } else {
    t78 = $[270];
  }
  var t79;
  if ($[271] !== t73 || $[272] !== t78) {
    t79 = /*#__PURE__*/React.createElement("div", {
      style: t73
    }, t78);
    $[271] = t73;
    $[272] = t78;
    $[273] = t79;
  } else {
    t79 = $[273];
  }
  var t80;
  if ($[274] !== t68 || $[275] !== t71 || $[276] !== t79 || $[277] !== tooltipSlotProps) {
    t80 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: t68,
      slotProps: tooltipSlotProps,
      title: t71
    }, t79);
    $[274] = t68;
    $[275] = t71;
    $[276] = t79;
    $[277] = tooltipSlotProps;
    $[278] = t80;
  } else {
    t80 = $[278];
  }
  var t81;
  if ($[279] !== error || $[280] !== errorHelperText || $[281] !== formColWithHelperText || $[282] !== helperText || $[283] !== variant) {
    t81 = !formColWithHelperText && (helperText || error && errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[279] = error;
    $[280] = errorHelperText;
    $[281] = formColWithHelperText;
    $[282] = helperText;
    $[283] = variant;
    $[284] = t81;
  } else {
    t81 = $[284];
  }
  var t82;
  if ($[285] !== t64 || $[286] !== t67 || $[287] !== t80 || $[288] !== t81) {
    t82 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t63
    }, /*#__PURE__*/React.createElement("div", {
      className: t64,
      style: t67,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t80, t81)));
    $[285] = t64;
    $[286] = t67;
    $[287] = t80;
    $[288] = t81;
    $[289] = t82;
  } else {
    t82 = $[289];
  }
  return t82;
};
function _temp$h() {
  return "default";
}var PrivateAlertDialog = function PrivateAlertDialog(t0) {
  var $ = c(15);
  var t1 = t0.color,
    open = t0.open,
    title = t0.title,
    content = t0.content,
    initOnClose = t0.onClose;
  var color = t1 === undefined ? "primary" : t1;
  var onCloseRef = useAutoUpdateRef(initOnClose);
  var t2;
  if ($[0] !== onCloseRef) {
    t2 = function t2() {
      onCloseRef.current && onCloseRef.current();
    };
    $[0] = onCloseRef;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var handleClose = t2;
  var t3 = "color-".concat(color);
  var t4 = !!open;
  var t5;
  if ($[2] !== title) {
    t5 = title && /*#__PURE__*/React.createElement(DialogTitle, {
      id: "alert-dialog-title"
    }, title);
    $[2] = title;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var t6;
  if ($[4] !== content) {
    t6 = /*#__PURE__*/React.createElement(DialogContent, null, content);
    $[4] = content;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var t7;
  if ($[6] !== handleClose) {
    t7 = /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      onClick: handleClose,
      autoFocus: true
    }, "\uD655\uC778"));
    $[6] = handleClose;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  var t8;
  if ($[8] !== handleClose || $[9] !== t3 || $[10] !== t4 || $[11] !== t5 || $[12] !== t6 || $[13] !== t7) {
    t8 = /*#__PURE__*/React.createElement(Dialog, {
      className: t3,
      open: t4,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title"
    }, t5, t6, t7);
    $[8] = handleClose;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
    $[12] = t6;
    $[13] = t7;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  return t8;
};insertStyle(".PrivateInputDatePicker.align-left .MuiInputBase-input{text-align:left}.PrivateInputDatePicker.align-center .MuiInputBase-input{text-align:center}.PrivateInputDatePicker.align-right .MuiInputBase-input{text-align:right}");var _excluded$9 = ["ref", "variant", "size", "color", "focused", "fullWidth", "disabled", "readOnly", "required", "labelShrink", "className", "style", "sx", "value", "label", "labelIcon", "inputRef", "format", "error", "icon", "startAdornment", "endAdornment", "align", "enableKeyboardInput", "onFocus", "onBlur"];
var PrivateInputDatePicker = function PrivateInputDatePicker(t0) {
  var $ = c(83);
  var className;
  var color;
  var disabled;
  var enableKeyboardInput;
  var endAdornment;
  var error;
  var focused;
  var format;
  var fullWidth;
  var icon;
  var initLabel;
  var initOnBlur;
  var initOnFocus;
  var inputRef;
  var labelIcon;
  var labelShrink;
  var props;
  var readOnly;
  var ref;
  var required;
  var size;
  var startAdornment;
  var style;
  var sx;
  var t1;
  var value;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    variant = _t.variant;
    size = _t.size;
    color = _t.color;
    focused = _t.focused;
    fullWidth = _t.fullWidth;
    disabled = _t.disabled;
    readOnly = _t.readOnly;
    required = _t.required;
    labelShrink = _t.labelShrink;
    className = _t.className;
    style = _t.style;
    sx = _t.sx;
    value = _t.value;
    initLabel = _t.label;
    labelIcon = _t.labelIcon;
    inputRef = _t.inputRef;
    format = _t.format;
    error = _t.error;
    icon = _t.icon;
    startAdornment = _t.startAdornment;
    endAdornment = _t.endAdornment;
    t1 = _t.align;
    enableKeyboardInput = _t.enableKeyboardInput;
    initOnFocus = _t.onFocus;
    initOnBlur = _t.onBlur;
    props = _objectWithoutProperties(_t, _excluded$9);
    $[0] = t0;
    $[1] = className;
    $[2] = color;
    $[3] = disabled;
    $[4] = enableKeyboardInput;
    $[5] = endAdornment;
    $[6] = error;
    $[7] = focused;
    $[8] = format;
    $[9] = fullWidth;
    $[10] = icon;
    $[11] = initLabel;
    $[12] = initOnBlur;
    $[13] = initOnFocus;
    $[14] = inputRef;
    $[15] = labelIcon;
    $[16] = labelShrink;
    $[17] = props;
    $[18] = readOnly;
    $[19] = ref;
    $[20] = required;
    $[21] = size;
    $[22] = startAdornment;
    $[23] = style;
    $[24] = sx;
    $[25] = t1;
    $[26] = value;
    $[27] = variant;
  } else {
    className = $[1];
    color = $[2];
    disabled = $[3];
    enableKeyboardInput = $[4];
    endAdornment = $[5];
    error = $[6];
    focused = $[7];
    format = $[8];
    fullWidth = $[9];
    icon = $[10];
    initLabel = $[11];
    initOnBlur = $[12];
    initOnFocus = $[13];
    inputRef = $[14];
    labelIcon = $[15];
    labelShrink = $[16];
    props = $[17];
    readOnly = $[18];
    ref = $[19];
    required = $[20];
    size = $[21];
    startAdornment = $[22];
    style = $[23];
    sx = $[24];
    t1 = $[25];
    value = $[26];
    variant = $[27];
  }
  var align = t1 === undefined ? "center" : t1;
  var id = useId();
  var onFocusRef = useAutoUpdateRef(initOnFocus);
  var onBlurRef = useAutoUpdateRef(initOnBlur);
  var t2;
  if ($[28] !== inputRef) {
    t2 = function t2(ref_0) {
      if (inputRef) {
        inputRef.current = ref_0;
      }
    };
    $[28] = inputRef;
    $[29] = t2;
  } else {
    t2 = $[29];
  }
  var slotPropsInputRef = t2;
  var t3;
  if ($[30] !== initLabel || $[31] !== labelIcon) {
    t3 = labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PIcon, {
      style: {
        verticalAlign: "middle",
        marginRight: 4
      }
    }, labelIcon), /*#__PURE__*/React.createElement("span", {
      style: {
        verticalAlign: "middle"
      }
    }, initLabel)) : initLabel;
    $[30] = initLabel;
    $[31] = labelIcon;
    $[32] = t3;
  } else {
    t3 = $[32];
  }
  var slotPropsLabel = t3;
  var muiInputProps;
  if ($[33] !== endAdornment || $[34] !== icon || $[35] !== startAdornment) {
    muiInputProps = {
      endAdornment: undefined
    };
    if (startAdornment || icon || muiInputProps.startAdornment) {
      var _t2;
      if ($[37] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "small"
        }, icon));
        $[37] = icon;
        $[38] = _t2;
      } else {
        _t2 = $[38];
      }
      var _t3;
      if ($[39] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, startAdornment);
        $[39] = startAdornment;
        $[40] = _t3;
      } else {
        _t3 = $[40];
      }
      muiInputProps.startAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3, muiInputProps.startAdornment);
    }
    if (endAdornment) {
      var _t4;
      if ($[41] !== endAdornment) {
        _t4 = endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, endAdornment);
        $[41] = endAdornment;
        $[42] = _t4;
      } else {
        _t4 = $[42];
      }
      var _t5;
      if ($[43] !== _t4) {
        _t5 = /*#__PURE__*/React.createElement(React.Fragment, null, _t4);
        $[43] = _t4;
        $[44] = _t5;
      } else {
        _t5 = $[44];
      }
      muiInputProps.endAdornment = _t5;
    }
    $[33] = endAdornment;
    $[34] = icon;
    $[35] = startAdornment;
    $[36] = muiInputProps;
  } else {
    muiInputProps = $[36];
  }
  var slotPropsMuiInputProps = muiInputProps;
  var t4;
  if ($[45] !== onFocusRef) {
    t4 = function t4(e) {
      var _onFocusRef$current;
      (_onFocusRef$current = onFocusRef.current) === null || _onFocusRef$current === void 0 || _onFocusRef$current.call(onFocusRef, e);
    };
    $[45] = onFocusRef;
    $[46] = t4;
  } else {
    t4 = $[46];
  }
  var slotPropsHandleFocus = t4;
  var t5;
  if ($[47] !== onBlurRef) {
    t5 = function t5(e_0) {
      var _onBlurRef$current;
      (_onBlurRef$current = onBlurRef.current) === null || _onBlurRef$current === void 0 || _onBlurRef$current.call(onBlurRef, e_0);
    };
    $[47] = onBlurRef;
    $[48] = t5;
  } else {
    t5 = $[48];
  }
  var slotPropsHandleBlur = t5;
  var t6;
  if ($[49] !== readOnly) {
    t6 = readOnly ? {
      className: "Mui-disabled",
      tabIndex: -1
    } : undefined;
    $[49] = readOnly;
    $[50] = t6;
  } else {
    t6 = $[50];
  }
  var t7;
  if ($[51] !== labelShrink) {
    t7 = labelShrink ? {
      shrink: true
    } : undefined;
    $[51] = labelShrink;
    $[52] = t7;
  } else {
    t7 = $[52];
  }
  var t8;
  if ($[53] !== color || $[54] !== error || $[55] !== focused || $[56] !== fullWidth || $[57] !== id || $[58] !== required || $[59] !== size || $[60] !== slotPropsHandleBlur || $[61] !== slotPropsHandleFocus || $[62] !== slotPropsInputRef || $[63] !== slotPropsLabel || $[64] !== slotPropsMuiInputProps || $[65] !== style || $[66] !== sx || $[67] !== t6 || $[68] !== t7 || $[69] !== variant) {
    t8 = {
      textField: {
        variant: variant,
        size: size,
        color: color,
        focused: focused,
        fullWidth: fullWidth,
        required: required,
        name: id,
        label: slotPropsLabel,
        style: style,
        sx: sx,
        error: error,
        InputProps: slotPropsMuiInputProps,
        inputProps: t6,
        inputRef: slotPropsInputRef,
        InputLabelProps: t7,
        onFocus: slotPropsHandleFocus,
        onBlur: slotPropsHandleBlur
      }
    };
    $[53] = color;
    $[54] = error;
    $[55] = focused;
    $[56] = fullWidth;
    $[57] = id;
    $[58] = required;
    $[59] = size;
    $[60] = slotPropsHandleBlur;
    $[61] = slotPropsHandleFocus;
    $[62] = slotPropsInputRef;
    $[63] = slotPropsLabel;
    $[64] = slotPropsMuiInputProps;
    $[65] = style;
    $[66] = sx;
    $[67] = t6;
    $[68] = t7;
    $[69] = variant;
    $[70] = t8;
  } else {
    t8 = $[70];
  }
  var slotProps = t8;
  var t9 = "align-".concat(align);
  var t10;
  if ($[71] !== className || $[72] !== t9) {
    t10 = classNames(className, "PrivateInputDatePicker", t9);
    $[71] = className;
    $[72] = t9;
    $[73] = t10;
  } else {
    t10 = $[73];
  }
  var t11 = readOnly || !enableKeyboardInput;
  var t12;
  if ($[74] !== disabled || $[75] !== format || $[76] !== props || $[77] !== ref || $[78] !== slotProps || $[79] !== t10 || $[80] !== t11 || $[81] !== value) {
    t12 = /*#__PURE__*/React.createElement(DesktopDatePicker, _extends({}, props, {
      ref: ref,
      className: t10,
      open: false,
      value: value,
      format: format,
      disabled: disabled,
      readOnly: t11,
      slotProps: slotProps
    }));
    $[74] = disabled;
    $[75] = format;
    $[76] = props;
    $[77] = ref;
    $[78] = slotProps;
    $[79] = t10;
    $[80] = t11;
    $[81] = value;
    $[82] = t12;
  } else {
    t12 = $[82];
  }
  return t12;
};var _templateObject$b, _templateObject2$6;
var StyledContainer$6 = styled(Grid)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$2 = styled(Button)(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: #1976d2;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));var PrivateYearRangePickerYear = function PrivateYearRangePickerYear(t0) {
  var $ = c(18);
  var ref = t0.ref,
    year = t0.year,
    disabled = t0.disabled,
    isDefault = t0.isDefault,
    selected = t0.selected,
    selectedStart = t0.selectedStart,
    selectedEnd = t0.selectedEnd,
    selectedTemp = t0.selectedTemp,
    onClick = t0.onClick,
    onMouseEnter = t0.onMouseEnter,
    onMouseLeave = t0.onMouseLeave;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      xs: 4
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var t2 = isDefault && "default";
  var t3 = selected && "selected";
  var t4 = selectedStart && "selected-start";
  var t5 = selectedEnd && "selected-end";
  var t6 = selectedTemp && "selected-temp";
  var t7 = disabled && "disabled";
  var t8;
  if ($[1] !== t2 || $[2] !== t3 || $[3] !== t4 || $[4] !== t5 || $[5] !== t6 || $[6] !== t7) {
    t8 = classNames(t2, t3, t4, t5, t6, t7);
    $[1] = t2;
    $[2] = t3;
    $[3] = t4;
    $[4] = t5;
    $[5] = t6;
    $[6] = t7;
    $[7] = t8;
  } else {
    t8 = $[7];
  }
  var t9;
  if ($[8] !== disabled || $[9] !== onClick || $[10] !== onMouseEnter || $[11] !== onMouseLeave || $[12] !== t8 || $[13] !== year) {
    t9 = /*#__PURE__*/React.createElement(StyledButton$2, {
      className: t8,
      disabled: disabled,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, year);
    $[8] = disabled;
    $[9] = onClick;
    $[10] = onMouseEnter;
    $[11] = onMouseLeave;
    $[12] = t8;
    $[13] = year;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  var t10;
  if ($[15] !== ref || $[16] !== t9) {
    t10 = /*#__PURE__*/React.createElement(StyledContainer$6, {
      className: "PrivateYearRangePickerYear",
      ref: ref,
      size: t1
    }, t9);
    $[15] = ref;
    $[16] = t9;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  return t10;
};var _templateObject$a;
var StyledContainer$5 = styled(Grid)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));var _lastCloseTime$1 = 0;
var PrivateYearRangePickerYearList = function PrivateYearRangePickerYearList(t0) {
  var $ = c(26);
  var value = t0.value,
    displayValue = t0.displayValue,
    selectType = t0.selectType,
    minYear = t0.minYear,
    maxYear = t0.maxYear,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    onChange = t0.onChange;
  var yearsContainerRef = useRef(null);
  var startButtonRef = useRef(null);
  var endButtonRef = useRef(null);
  var mouseOverTimer = useRef(undefined);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    mouseOverYear = _useState2[0],
    setMouseOverYear = _useState2[1];
  var t1;
  var t2;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      return function () {
        if (mouseOverTimer.current) {
          clearTimeout(mouseOverTimer.current);
          mouseOverTimer.current = undefined;
        }
      };
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  useEffect(t1, t2);
  var t3;
  if ($[2] !== displayValue[0] || $[3] !== value[1]) {
    t3 = function t3() {
      if (!displayValue[0]) {
        startButtonRef.current = null;
      }
      if (!value[1]) {
        endButtonRef.current = null;
      }
    };
    $[2] = displayValue[0];
    $[3] = value[1];
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  var t4;
  if ($[5] !== displayValue || $[6] !== value) {
    t4 = [displayValue, value];
    $[5] = displayValue;
    $[6] = value;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  useEffect(t3, t4);
  var t5;
  var t6;
  if ($[8] !== selectType) {
    t5 = function t5() {
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
            var scrollY = center - containerHalf;
            if (selectType === "start" && scrollY > startButtonTop - 4) {
              scrollY = startButtonTop - 4;
            } else {
              if (selectType === "end" && scrollY + containerHeight < endButtonBottom + 4) {
                scrollY = endButtonBottom + 4 - containerHeight;
              }
            }
            container.scrollTo(0, scrollY);
          }
        } else {
          if (startButton) {
            var startButtonTop_0 = startButton.offsetTop - containerTop - 4;
            var startButtonBottom = startButtonTop_0 + startButton.offsetHeight + 8;
            if (startButtonTop_0 < containerScrollTop || startButtonBottom > containerScrollBottom) {
              container.scrollTo(0, startButtonTop_0);
            }
          } else {
            if (endButton) {
              var endButtonBottom_0 = endButton.offsetTop + endButton.offsetHeight - containerTop + 4;
              container.scrollTo(0, endButtonBottom_0 - containerHeight);
            }
          }
        }
      }
      return _temp$g;
    };
    t6 = [selectType];
    $[8] = selectType;
    $[9] = t5;
    $[10] = t6;
  } else {
    t5 = $[9];
    t6 = $[10];
  }
  useEffect(t5, t6);
  var t7;
  if ($[11] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = new Date().getFullYear();
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  var nowYear = t7;
  var newYears;
  if ($[12] !== disableFuture || $[13] !== disablePast || $[14] !== displayValue[0] || $[15] !== maxYear || $[16] !== minYear || $[17] !== mouseOverYear || $[18] !== selectType || $[19] !== value[0] || $[20] !== value[1]) {
    newYears = [];
    for (var i = minYear; i <= maxYear; i = i + 1, i) {
      newYears.push({
        year: i,
        isDefault: !value[0] && !value[1] && i === displayValue[0],
        selected: !!value[0] && !!value[1] && i >= value[0] && i <= value[1],
        selectedStart: i === value[0],
        selectedEnd: i === value[1],
        selectedTemp: selectType === "start" && !!value[1] && !!mouseOverYear && i < value[1] && i >= mouseOverYear || selectType === "end" && !!value[0] && !!mouseOverYear && i > value[0] && i <= mouseOverYear,
        disabled: disablePast && i < nowYear || disableFuture && i > nowYear
      });
    }
    $[12] = disableFuture;
    $[13] = disablePast;
    $[14] = displayValue[0];
    $[15] = maxYear;
    $[16] = minYear;
    $[17] = mouseOverYear;
    $[18] = selectType;
    $[19] = value[0];
    $[20] = value[1];
    $[21] = newYears;
  } else {
    newYears = $[21];
  }
  var years = newYears;
  var t8;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(year) {
      if (mouseOverTimer.current) {
        clearTimeout(mouseOverTimer.current);
        mouseOverTimer.current = undefined;
      }
      if (year) {
        setMouseOverYear(year);
      } else {
        mouseOverTimer.current = setTimeout(function () {
          mouseOverTimer.current = undefined;
          setMouseOverYear(undefined);
        }, 100);
      }
    };
    $[22] = t8;
  } else {
    t8 = $[22];
  }
  var mouseOver = t8;
  var t9;
  if ($[23] !== onChange || $[24] !== years) {
    t9 = /*#__PURE__*/React.createElement(StyledContainer$5, {
      className: "PrivateYearRangePickerYearList",
      container: true,
      ref: yearsContainerRef
    }, years.map(function (info) {
      return /*#__PURE__*/React.createElement(PrivateYearRangePickerYear, {
        key: info.year,
        ref: function ref(_ref) {
          if (info.selectedStart) {
            startButtonRef.current = _ref;
            if (info.selectedEnd) {
              endButtonRef.current = _ref;
            }
          } else {
            if (info.selectedEnd) {
              endButtonRef.current = _ref;
            }
          }
        },
        year: info.year,
        isDefault: info.isDefault,
        selected: info.selected,
        selectedStart: info.selectedStart,
        selectedEnd: info.selectedEnd,
        selectedTemp: info.selectedTemp,
        disabled: info.disabled,
        onClick: function onClick() {
          return onChange(info.year);
        },
        onMouseEnter: function onMouseEnter() {
          return mouseOver(info.year);
        },
        onMouseLeave: function onMouseLeave() {
          return mouseOver(undefined);
        }
      });
    }));
    $[23] = onChange;
    $[24] = years;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  return t9;
};
function _temp$g() {
  _lastCloseTime$1 = new Date().getTime();
}var _templateObject$9, _templateObject2$5, _templateObject3$3, _templateObject4$2, _templateObject5$1, _templateObject6;
var StyledTitleContainer$1 = styled('div')(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledYear = styled('span')(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral([""])));
var StyledYearError = styled('span')(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.error.main;
});
var StyledTitleGap = styled('span')(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n  padding: 0 7px;\n  opacity: 0.5;\n"])));
var StyledActionContainer$1 = styled('div')(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton$1 = styled(Button)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));var DEFAULT_MIN_YEAR$1 = 2020;
var DEFAULT_MAX_YEAR$1 = 2050;
var DEFAULT_VALUE$3 = [null, null];
var PrivateYearRangePicker = function PrivateYearRangePicker(t0) {
  var $ = c(61);
  var selectType = t0.selectType,
    t1 = t0.value,
    t2 = t0.minYear,
    t3 = t0.maxYear,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    hideHeader = t0.hideHeader,
    onChange = t0.onChange;
  var initValue = t1 === undefined ? DEFAULT_VALUE$3 : t1;
  var minYear = t2 === undefined ? DEFAULT_MIN_YEAR$1 : t2;
  var maxYear = t3 === undefined ? DEFAULT_MAX_YEAR$1 : t3;
  var _useState = useState(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var t4;
  var t5;
  if ($[0] !== initValue) {
    t4 = function t4() {
      return setValue(initValue);
    };
    t5 = [initValue];
    $[0] = initValue;
    $[1] = t4;
    $[2] = t5;
  } else {
    t4 = $[1];
    t5 = $[2];
  }
  useFirstSkipChanged(t4, t5);
  var t6;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = new Date().getFullYear();
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  var nowYear = t6;
  var minAvailableYear;
  if (disablePast) {
    minAvailableYear = nowYear > minYear ? nowYear : minYear;
  } else {
    minAvailableYear = minYear;
  }
  var maxAvailableYear;
  if (disableFuture) {
    maxAvailableYear = nowYear < maxYear ? nowYear : maxYear;
  } else {
    maxAvailableYear = maxYear;
  }
  var t7;
  if ($[4] !== maxAvailableYear || $[5] !== minAvailableYear) {
    t7 = {
      now: nowYear,
      available: {
        min: minAvailableYear,
        max: maxAvailableYear
      }
    };
    $[4] = maxAvailableYear;
    $[5] = minAvailableYear;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var yearInfo = t7;
  var displayValue;
  var defaultYear = yearInfo.now;
  if (yearInfo.available.min > defaultYear) {
    defaultYear = minYear;
  } else {
    if (yearInfo.available.max < defaultYear) {
      defaultYear = yearInfo.available.max;
    }
  }
  if (value) {
    var _t = value[0] || value[1] || defaultYear;
    var _t2 = value[1] || value[0] || defaultYear;
    var _t3;
    if ($[7] !== _t || $[8] !== _t2) {
      _t3 = [_t, _t2];
      $[7] = _t;
      $[8] = _t2;
      $[9] = _t3;
    } else {
      _t3 = $[9];
    }
    displayValue = _t3;
  } else {
    var _t4;
    if ($[10] !== defaultYear) {
      _t4 = [defaultYear, defaultYear];
      $[10] = defaultYear;
      $[11] = _t4;
    } else {
      _t4 = $[11];
    }
    displayValue = _t4;
  }
  var t8 = displayValue[0] < yearInfo.available.min || displayValue[0] > yearInfo.available.max;
  var t9 = displayValue[1] < yearInfo.available.min || displayValue[1] > yearInfo.available.max;
  var t10;
  if ($[12] !== t8 || $[13] !== t9) {
    t10 = [t8, t9];
    $[12] = t8;
    $[13] = t9;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  var displayValueError = t10;
  var t11;
  if ($[15] !== displayValue || $[16] !== displayValueError) {
    t11 = {
      value: displayValue,
      error: displayValueError
    };
    $[15] = displayValue;
    $[16] = displayValueError;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  var displayInfo = t11;
  var t12;
  if ($[18] !== onChange || $[19] !== yearInfo.available.max || $[20] !== yearInfo.available.min) {
    t12 = function t12(fromYear, toYear, label) {
      if (fromYear < yearInfo.available.min || toYear > yearInfo.available.max) {
        return;
      } else {
        var newValue = [Math.max(fromYear, yearInfo.available.min), Math.min(toYear, yearInfo.available.max)];
        return /*#__PURE__*/React.createElement(StyledActionButton$1, {
          variant: "text",
          onClick: function onClick() {
            setValue(newValue);
            onChange(newValue, "end");
          }
        }, label);
      }
    };
    $[18] = onChange;
    $[19] = yearInfo.available.max;
    $[20] = yearInfo.available.min;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  var getActionButton = t12;
  var t13 = yearInfo.now - 2;
  var t14;
  if ($[22] !== getActionButton || $[23] !== t13 || $[24] !== yearInfo.now) {
    t14 = getActionButton(t13, yearInfo.now, "\uCD5C\uADFC 3\uB144");
    $[22] = getActionButton;
    $[23] = t13;
    $[24] = yearInfo.now;
    $[25] = t14;
  } else {
    t14 = $[25];
  }
  var t15 = yearInfo.now - 4;
  var t16;
  if ($[26] !== getActionButton || $[27] !== t15 || $[28] !== yearInfo.now) {
    t16 = getActionButton(t15, yearInfo.now, "\uCD5C\uADFC 5\uB144");
    $[26] = getActionButton;
    $[27] = t15;
    $[28] = yearInfo.now;
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  var t17 = yearInfo.now - 9;
  var t18;
  if ($[30] !== getActionButton || $[31] !== t17 || $[32] !== yearInfo.now) {
    t18 = getActionButton(t17, yearInfo.now, "\uCD5C\uADFC 10\uB144");
    $[30] = getActionButton;
    $[31] = t17;
    $[32] = yearInfo.now;
    $[33] = t18;
  } else {
    t18 = $[33];
  }
  var t19;
  if ($[34] !== t14 || $[35] !== t16 || $[36] !== t18) {
    t19 = /*#__PURE__*/React.createElement(StyledActionContainer$1, null, t14, t16, t18);
    $[34] = t14;
    $[35] = t16;
    $[36] = t18;
    $[37] = t19;
  } else {
    t19 = $[37];
  }
  var actionButtons = t19;
  var t20;
  if ($[38] !== onChange || $[39] !== selectType || $[40] !== value || $[41] !== yearInfo.available.max || $[42] !== yearInfo.available.min) {
    t20 = function t20(valueYear) {
      var newValue_0 = _toConsumableArray(value);
      if (yearInfo.available.min && valueYear < yearInfo.available.min) {
        valueYear = yearInfo.available.min;
      } else {
        if (yearInfo.available.max && valueYear > yearInfo.available.max) {
          valueYear = yearInfo.available.max;
        }
      }
      if (selectType === "start") {
        newValue_0[0] = valueYear;
      } else {
        newValue_0[1] = valueYear;
      }
      if (selectType === "start" && newValue_0[1]) {
        if (newValue_0[1] < (newValue_0[0] || 0)) {
          newValue_0[1] = newValue_0[0];
        }
        onChange(newValue_0, selectType);
      } else {
        if (selectType === "end" && newValue_0[0]) {
          if (newValue_0[0] > (newValue_0[1] || 9999)) {
            newValue_0[0] = newValue_0[1];
            onChange(newValue_0, "start");
          } else {
            onChange(newValue_0, selectType);
          }
        } else {
          onChange(newValue_0, selectType);
        }
      }
      setValue(newValue_0);
    };
    $[38] = onChange;
    $[39] = selectType;
    $[40] = value;
    $[41] = yearInfo.available.max;
    $[42] = yearInfo.available.min;
    $[43] = t20;
  } else {
    t20 = $[43];
  }
  var handleYearChange = t20;
  var t21;
  if ($[44] !== displayInfo.error || $[45] !== displayInfo.value || $[46] !== hideHeader) {
    t21 = !hideHeader && /*#__PURE__*/React.createElement(StyledTitleContainer$1, null, displayInfo.error[0] ? /*#__PURE__*/React.createElement(StyledYearError, null, displayInfo.value[0], "\uB144") : /*#__PURE__*/React.createElement(StyledYear, null, displayInfo.value[0], "\uB144"), /*#__PURE__*/React.createElement(StyledTitleGap, null, "~"), displayInfo.error[1] ? /*#__PURE__*/React.createElement(StyledYearError, null, displayInfo.value[1], "\uB144") : /*#__PURE__*/React.createElement(StyledYear, null, displayInfo.value[1], "\uB144"));
    $[44] = displayInfo.error;
    $[45] = displayInfo.value;
    $[46] = hideHeader;
    $[47] = t21;
  } else {
    t21 = $[47];
  }
  var t22;
  if ($[48] !== disableFuture || $[49] !== disablePast || $[50] !== displayInfo.value || $[51] !== handleYearChange || $[52] !== maxYear || $[53] !== minYear || $[54] !== selectType || $[55] !== value) {
    t22 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateYearRangePickerYearList, {
      value: value,
      selectType: selectType,
      displayValue: displayInfo.value,
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onChange: handleYearChange
    }));
    $[48] = disableFuture;
    $[49] = disablePast;
    $[50] = displayInfo.value;
    $[51] = handleYearChange;
    $[52] = maxYear;
    $[53] = minYear;
    $[54] = selectType;
    $[55] = value;
    $[56] = t22;
  } else {
    t22 = $[56];
  }
  var t23;
  if ($[57] !== actionButtons || $[58] !== t21 || $[59] !== t22) {
    t23 = /*#__PURE__*/React.createElement("div", {
      className: "PrivateYearRangePicker"
    }, t21, t22, actionButtons);
    $[57] = actionButtons;
    $[58] = t21;
    $[59] = t22;
    $[60] = t23;
  } else {
    t23 = $[60];
  }
  return t23;
};var _templateObject$8, _templateObject2$4;
var StyledContainer$4 = styled(Grid)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$1 = styled(Button)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));var PrivateYearPickerYear = function PrivateYearPickerYear(t0) {
  var $ = c(20);
  var ref = t0.ref,
    year = t0.year,
    disabled = t0.disabled,
    active = t0.active,
    range = t0.range,
    isDefault = t0.isDefault,
    selected = t0.selected,
    selectedStart = t0.selectedStart,
    selectedEnd = t0.selectedEnd,
    selectedTemp = t0.selectedTemp,
    onClick = t0.onClick,
    onMouseEnter = t0.onMouseEnter,
    onMouseLeave = t0.onMouseLeave;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      xs: 4
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var t2 = range && "range";
  var t3 = isDefault && "default";
  var t4 = selected && "selected";
  var t5 = selectedStart && "selected-start";
  var t6 = selectedEnd && "selected-end";
  var t7 = selectedTemp && "selected-temp";
  var t8 = active && "active";
  var t9 = disabled && "disabled";
  var t10;
  if ($[1] !== t2 || $[2] !== t3 || $[3] !== t4 || $[4] !== t5 || $[5] !== t6 || $[6] !== t7 || $[7] !== t8 || $[8] !== t9) {
    t10 = classNames(t2, t3, t4, t5, t6, t7, t8, t9);
    $[1] = t2;
    $[2] = t3;
    $[3] = t4;
    $[4] = t5;
    $[5] = t6;
    $[6] = t7;
    $[7] = t8;
    $[8] = t9;
    $[9] = t10;
  } else {
    t10 = $[9];
  }
  var t11;
  if ($[10] !== disabled || $[11] !== onClick || $[12] !== onMouseEnter || $[13] !== onMouseLeave || $[14] !== t10 || $[15] !== year) {
    t11 = /*#__PURE__*/React.createElement(StyledButton$1, {
      className: t10,
      disabled: disabled,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, year);
    $[10] = disabled;
    $[11] = onClick;
    $[12] = onMouseEnter;
    $[13] = onMouseLeave;
    $[14] = t10;
    $[15] = year;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  var t12;
  if ($[17] !== ref || $[18] !== t11) {
    t12 = /*#__PURE__*/React.createElement(StyledContainer$4, {
      className: "PrivateYearPickerYear",
      ref: ref,
      size: t1
    }, t11);
    $[17] = ref;
    $[18] = t11;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  return t12;
};var _templateObject$7;
var StyledContainer$3 = styled(Grid)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));var _lastCloseTime = 0;
var PrivateYearPickerYearList = function PrivateYearPickerYearList(t0) {
  var $ = c(21);
  var value = t0.value,
    minYear = t0.minYear,
    maxYear = t0.maxYear,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    selectFromYear = t0.selectFromYear,
    selectToYear = t0.selectToYear,
    onChange = t0.onChange;
  var yearsContainerRef = useRef(null);
  var defaultButtonRef = useRef(null);
  var startButtonRef = useRef(null);
  var endButtonRef = useRef(null);
  var mouseOverTimer = useRef(undefined);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    mouseOverYear = _useState2[0],
    setMouseOverYear = _useState2[1];
  var t1;
  var t2;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      return function () {
        if (mouseOverTimer.current) {
          clearTimeout(mouseOverTimer.current);
          mouseOverTimer.current = undefined;
        }
      };
    };
    t2 = [];
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  useEffect(t1, t2);
  var t3;
  var t4;
  if ($[2] !== selectFromYear || $[3] !== selectToYear) {
    t3 = function t3() {
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
            var scrollY = center - containerHalf;
            if (selectFromYear && scrollY > startButtonTop - 4) {
              scrollY = startButtonTop - 4;
            } else {
              if (selectToYear && scrollY + containerHeight < endButtonBottom + 4) {
                scrollY = endButtonBottom + 4 - containerHeight;
              }
            }
            container.scrollTo(0, scrollY);
          }
        } else {
          if (startButton) {
            var startButtonTop_0 = startButton.offsetTop - containerTop - 4;
            var startButtonBottom = startButtonTop_0 + startButton.offsetHeight + 8;
            if (startButtonTop_0 < containerScrollTop || startButtonBottom > containerScrollBottom) {
              container.scrollTo(0, startButtonTop_0);
            }
          } else {
            if (endButton) {
              var endButtonBottom_0 = endButton.offsetTop + endButton.offsetHeight - containerTop + 4;
              container.scrollTo(0, endButtonBottom_0 - containerHeight);
            } else {
              if (defaultButton) {
                var defaultButtonTop = defaultButton.offsetTop - containerTop - 4;
                var defaultButtonBottom = defaultButtonTop + defaultButton.offsetHeight + 8;
                var center_0 = defaultButtonTop + (defaultButtonBottom - defaultButtonTop) / 2;
                container.scrollTo(0, center_0 - containerHalf);
              }
            }
          }
        }
      }
      return _temp$f;
    };
    t4 = [selectFromYear, selectToYear];
    $[2] = selectFromYear;
    $[3] = selectToYear;
    $[4] = t3;
    $[5] = t4;
  } else {
    t3 = $[4];
    t4 = $[5];
  }
  useEffect(t3, t4);
  var t5;
  if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = new Date().getFullYear();
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  var nowYear = t5;
  var t6;
  var newDefaultYear = nowYear;
  if (newDefaultYear < minYear) {
    t6 = minYear;
  } else {
    if (newDefaultYear > maxYear) {
      t6 = maxYear;
    } else {
      t6 = newDefaultYear;
    }
  }
  var defaultYear = t6;
  var newYears;
  if ($[7] !== defaultYear || $[8] !== disableFuture || $[9] !== disablePast || $[10] !== maxYear || $[11] !== minYear || $[12] !== mouseOverYear || $[13] !== selectFromYear || $[14] !== selectToYear || $[15] !== value) {
    newYears = [];
    var startYear = selectFromYear ? selectFromYear : value ? value : 0;
    var endYear = selectToYear ? selectToYear : value ? value : 0;
    var range = !!selectFromYear || !!selectToYear;
    for (var i = minYear; i <= maxYear; i = i + 1, i) {
      newYears.push({
        year: i,
        range: range,
        isDefault: !value && !selectFromYear && !selectToYear && i === defaultYear,
        active: (!!selectFromYear || !!selectToYear) && i === value,
        selected: i >= startYear && i <= endYear,
        selectedStart: i === startYear,
        selectedEnd: i === endYear,
        selectedTemp: !!selectToYear && !!mouseOverYear && i < endYear && i >= mouseOverYear || !!selectFromYear && !!mouseOverYear && i > startYear && i <= mouseOverYear,
        disabled: disablePast && i < nowYear || disableFuture && i > nowYear
      });
    }
    $[7] = defaultYear;
    $[8] = disableFuture;
    $[9] = disablePast;
    $[10] = maxYear;
    $[11] = minYear;
    $[12] = mouseOverYear;
    $[13] = selectFromYear;
    $[14] = selectToYear;
    $[15] = value;
    $[16] = newYears;
  } else {
    newYears = $[16];
  }
  var years = newYears;
  var t7;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7(year) {
      if (mouseOverTimer.current) {
        clearTimeout(mouseOverTimer.current);
        mouseOverTimer.current = undefined;
      }
      if (year) {
        setMouseOverYear(year);
      } else {
        mouseOverTimer.current = setTimeout(function () {
          mouseOverTimer.current = undefined;
          setMouseOverYear(undefined);
        }, 100);
      }
    };
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  var mouseOver = t7;
  var t8;
  if ($[18] !== onChange || $[19] !== years) {
    t8 = /*#__PURE__*/React.createElement(StyledContainer$3, {
      className: "PrivateYearPickerYearList",
      container: true,
      ref: yearsContainerRef
    }, years.map(function (info) {
      return /*#__PURE__*/React.createElement(PrivateYearPickerYear, {
        key: info.year,
        ref: function ref(_ref) {
          if (info.selectedStart) {
            startButtonRef.current = _ref;
            if (info.selectedEnd) {
              endButtonRef.current = _ref;
            }
          } else {
            if (info.selectedEnd) {
              endButtonRef.current = _ref;
            } else {
              if (info.isDefault) {
                defaultButtonRef.current = _ref;
              }
            }
          }
        },
        year: info.year,
        range: info.range,
        isDefault: info.isDefault,
        active: info.active,
        selected: info.selected,
        selectedStart: info.selectedStart,
        selectedEnd: info.selectedEnd,
        selectedTemp: info.selectedTemp,
        disabled: info.disabled,
        onClick: function onClick() {
          return onChange(info.year);
        },
        onMouseEnter: function onMouseEnter() {
          return mouseOver(info.year);
        },
        onMouseLeave: function onMouseLeave() {
          return mouseOver(undefined);
        }
      });
    }));
    $[18] = onChange;
    $[19] = years;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  return t8;
};
function _temp$f() {
  _lastCloseTime = new Date().getTime();
}var _templateObject$6, _templateObject2$3, _templateObject3$2, _templateObject4$1;
var StyledTitleContainer = styled('div')(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton$1 = styled(IconButton)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth$1 = styled('div')(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: center;\n"])));
var StyledYearMonthError$1 = styled('div')(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: center;\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.error.main;
});var DEFAULT_MIN_YEAR = 2020;
var DEFAULT_MAX_YEAR = 2050;
var PrivateYearPicker = function PrivateYearPicker(t0) {
  var $ = c(40);
  var t1 = t0.value,
    t2 = t0.minYear,
    t3 = t0.maxYear,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    hideHeader = t0.hideHeader,
    selectFromYear = t0.selectFromYear,
    selectToYear = t0.selectToYear,
    initOnChange = t0.onChange;
  var initValue = t1 === undefined ? null : t1;
  var minYear = t2 === undefined ? DEFAULT_MIN_YEAR : t2;
  var maxYear = t3 === undefined ? DEFAULT_MAX_YEAR : t3;
  var onChangeRef = useAutoUpdateRef(initOnChange);
  var _useState = useState(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var t4;
  var t5;
  if ($[0] !== initValue) {
    t4 = function t4() {
      return setValue(initValue);
    };
    t5 = [initValue];
    $[0] = initValue;
    $[1] = t4;
    $[2] = t5;
  } else {
    t4 = $[1];
    t5 = $[2];
  }
  useFirstSkipChanged(t4, t5);
  var t6;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = new Date().getFullYear();
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  var nowYear = t6;
  var minAvailableYear;
  if (disablePast) {
    minAvailableYear = nowYear > minYear ? nowYear : minYear;
  } else {
    minAvailableYear = minYear;
  }
  var maxAvailableYear;
  if (disableFuture) {
    maxAvailableYear = nowYear < maxYear ? nowYear : maxYear;
  } else {
    maxAvailableYear = maxYear;
  }
  var t7;
  if ($[4] !== maxAvailableYear || $[5] !== minAvailableYear) {
    t7 = {
      now: nowYear,
      available: {
        min: minAvailableYear,
        max: maxAvailableYear
      }
    };
    $[4] = maxAvailableYear;
    $[5] = minAvailableYear;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var yearInfo = t7;
  var displayYear;
  if (value) {
    displayYear = value;
  } else {
    var year = selectFromYear || selectToYear || yearInfo.now;
    if (yearInfo.available.min > year) {
      year = yearInfo.available.min;
    } else {
      if (yearInfo.available.max < year) {
        year = yearInfo.available.max;
      }
    }
    displayYear = year;
  }
  var displayError = displayYear < yearInfo.available.min || displayYear > yearInfo.available.max;
  var t8;
  if ($[7] !== displayError || $[8] !== displayYear) {
    t8 = {
      year: displayYear,
      error: displayError
    };
    $[7] = displayError;
    $[8] = displayYear;
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  var displayInfo = t8;
  var t9;
  if ($[10] !== onChangeRef || $[11] !== yearInfo.available.max || $[12] !== yearInfo.available.min) {
    t9 = function t9(v) {
      if (yearInfo.available.min && v < yearInfo.available.min) {
        setValue(yearInfo.available.min);
        onChangeRef.current(yearInfo.available.min, true);
      } else {
        if (yearInfo.available.max && v > yearInfo.available.max) {
          setValue(yearInfo.available.max);
          onChangeRef.current(yearInfo.available.max, true);
        } else {
          setValue(v);
          onChangeRef.current(v, true);
        }
      }
    };
    $[10] = onChangeRef;
    $[11] = yearInfo.available.max;
    $[12] = yearInfo.available.min;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  var handleYearChange = t9;
  var t10;
  if ($[14] !== displayInfo.year || $[15] !== onChangeRef) {
    t10 = function t10() {
      if (displayInfo.year) {
        var newValue = displayInfo.year - 1;
        setValue(newValue);
        onChangeRef.current(newValue, false);
      }
    };
    $[14] = displayInfo.year;
    $[15] = onChangeRef;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  var handlePrevClick = t10;
  var t11;
  if ($[17] !== displayInfo.year || $[18] !== onChangeRef) {
    t11 = function t11() {
      if (displayInfo.year) {
        var newValue_0 = displayInfo.year + 1;
        setValue(newValue_0);
        onChangeRef.current(newValue_0, false);
      }
    };
    $[17] = displayInfo.year;
    $[18] = onChangeRef;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  var handleNextClick = t11;
  var t12;
  if ($[20] !== displayInfo.error || $[21] !== displayInfo.year || $[22] !== handleNextClick || $[23] !== handlePrevClick || $[24] !== hideHeader || $[25] !== yearInfo.available.max || $[26] !== yearInfo.available.min) {
    t12 = !hideHeader && /*#__PURE__*/React.createElement(StyledTitleContainer, null, /*#__PURE__*/React.createElement(StyledIconButton$1, {
      disabled: displayInfo.year <= yearInfo.available.min,
      onClick: handlePrevClick
    }, /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowLeft")), displayInfo.error ? /*#__PURE__*/React.createElement(StyledYearMonthError$1, null, displayInfo.year, "\uB144") : /*#__PURE__*/React.createElement(StyledYearMonth$1, null, displayInfo.year, "\uB144"), /*#__PURE__*/React.createElement(StyledIconButton$1, {
      disabled: displayInfo.year >= yearInfo.available.max,
      onClick: handleNextClick
    }, /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowRight")));
    $[20] = displayInfo.error;
    $[21] = displayInfo.year;
    $[22] = handleNextClick;
    $[23] = handlePrevClick;
    $[24] = hideHeader;
    $[25] = yearInfo.available.max;
    $[26] = yearInfo.available.min;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  var t13;
  if ($[28] !== disableFuture || $[29] !== disablePast || $[30] !== handleYearChange || $[31] !== maxYear || $[32] !== minYear || $[33] !== selectFromYear || $[34] !== selectToYear || $[35] !== value) {
    t13 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateYearPickerYearList, {
      value: value,
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      selectFromYear: selectFromYear,
      selectToYear: selectToYear,
      onChange: handleYearChange
    }));
    $[28] = disableFuture;
    $[29] = disablePast;
    $[30] = handleYearChange;
    $[31] = maxYear;
    $[32] = minYear;
    $[33] = selectFromYear;
    $[34] = selectToYear;
    $[35] = value;
    $[36] = t13;
  } else {
    t13 = $[36];
  }
  var t14;
  if ($[37] !== t12 || $[38] !== t13) {
    t14 = /*#__PURE__*/React.createElement("div", {
      className: "PrivateYearPicker"
    }, t12, t13);
    $[37] = t12;
    $[38] = t13;
    $[39] = t14;
  } else {
    t14 = $[39];
  }
  return t14;
};var _templateObject$5, _templateObject2$2;
var StyledContainer$2 = styled(Grid)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton = styled(Button)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    background-color: rgba(66, 165, 245, 0.3);\n    border: 1px solid transparent;\n  }\n"])));var PrivateMonthPickerMonth = function PrivateMonthPickerMonth(t0) {
  var $ = c(23);
  var ref = t0.ref,
    month = t0.month,
    range = t0.range,
    disabled = t0.disabled,
    isDefault = t0.isDefault,
    active = t0.active,
    selected = t0.selected,
    selectedStart = t0.selectedStart,
    selectedEnd = t0.selectedEnd,
    selectedTemp = t0.selectedTemp,
    onClick = t0.onClick,
    onMouseEnter = t0.onMouseEnter,
    onMouseLeave = t0.onMouseLeave;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      xs: 4
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var t2 = range && "range";
  var t3 = isDefault && "default";
  var t4 = active && "active";
  var t5 = selected && "selected";
  var t6 = selectedStart && "selected-start";
  var t7 = selectedEnd && "selected-end";
  var t8 = selectedTemp && "selected-temp";
  var t9 = disabled && "disabled";
  var t10;
  if ($[1] !== t2 || $[2] !== t3 || $[3] !== t4 || $[4] !== t5 || $[5] !== t6 || $[6] !== t7 || $[7] !== t8 || $[8] !== t9) {
    t10 = classNames(t2, t3, t4, t5, t6, t7, t8, t9);
    $[1] = t2;
    $[2] = t3;
    $[3] = t4;
    $[4] = t5;
    $[5] = t6;
    $[6] = t7;
    $[7] = t8;
    $[8] = t9;
    $[9] = t10;
  } else {
    t10 = $[9];
  }
  var t11;
  if ($[10] !== month || $[11] !== onClick) {
    t11 = function t11() {
      return onClick === null || onClick === void 0 ? void 0 : onClick(month);
    };
    $[10] = month;
    $[11] = onClick;
    $[12] = t11;
  } else {
    t11 = $[12];
  }
  var t12;
  if ($[13] !== disabled || $[14] !== month || $[15] !== onMouseEnter || $[16] !== onMouseLeave || $[17] !== t10 || $[18] !== t11) {
    t12 = /*#__PURE__*/React.createElement(StyledButton, {
      className: t10,
      disabled: disabled,
      onClick: t11,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, month, "\uC6D4");
    $[13] = disabled;
    $[14] = month;
    $[15] = onMouseEnter;
    $[16] = onMouseLeave;
    $[17] = t10;
    $[18] = t11;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  var t13;
  if ($[20] !== ref || $[21] !== t12) {
    t13 = /*#__PURE__*/React.createElement(StyledContainer$2, {
      className: "PrivateMonthPickerMonth",
      ref: ref,
      size: t1
    }, t12);
    $[20] = ref;
    $[21] = t12;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  return t13;
};var _templateObject$4;
var StyledContainer$1 = styled(Grid)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  width: 240px;\n  padding: 4px;\n"])));var PrivateMonthPickerMonthList = function PrivateMonthPickerMonthList(t0) {
  var $ = c(36);
  var value = t0.value,
    initDefaultValue = t0.defaultValue,
    minAvailableValue = t0.minAvailableValue,
    maxAvailableValue = t0.maxAvailableValue,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    selectFromValue = t0.selectFromValue,
    selectToValue = t0.selectToValue,
    onChange = t0.onChange;
  var nowDate;
  var nowValue;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    nowDate = dayjs();
    nowValue = dateToValue$6(nowDate);
    t1 = valueToYm$4(nowValue);
    $[0] = nowDate;
    $[1] = nowValue;
    $[2] = t1;
  } else {
    nowDate = $[0];
    nowValue = $[1];
    t1 = $[2];
  }
  var nowYm = t1;
  var t2;
  if ($[3] !== minAvailableValue) {
    t2 = valueToYm$4(minAvailableValue);
    $[3] = minAvailableValue;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  var t3;
  if ($[5] !== maxAvailableValue) {
    t3 = valueToYm$4(maxAvailableValue);
    $[5] = maxAvailableValue;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var t4;
  if ($[7] !== t2 || $[8] !== t3) {
    t4 = {
      min: t2,
      max: t3
    };
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var availableYm = t4;
  var defaultValue = initDefaultValue ? initDefaultValue : nowYm < availableYm.min ? minAvailableValue : nowYm > availableYm.max ? maxAvailableValue : nowValue;
  var t5;
  if ($[10] !== availableYm || $[11] !== defaultValue) {
    t5 = {
      nowDate: nowDate,
      nowValue: nowValue,
      nowYm: nowYm,
      availableYm: availableYm,
      defaultValue: defaultValue
    };
    $[10] = availableYm;
    $[11] = defaultValue;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  var dateInfo = t5;
  var currentYear = value ? value.year : dateInfo.defaultValue.year;
  var newMonths;
  if ($[13] !== currentYear || $[14] !== dateInfo.availableYm.max || $[15] !== dateInfo.availableYm.min || $[16] !== dateInfo.defaultValue.month || $[17] !== dateInfo.nowYm || $[18] !== disableFuture || $[19] !== disablePast || $[20] !== selectFromValue || $[21] !== selectToValue || $[22] !== value) {
    newMonths = [];
    var range = !!selectFromValue || !!selectToValue;
    var _t;
    if ($[24] !== selectFromValue || $[25] !== value) {
      _t = selectFromValue ? valueToYm$4(selectFromValue) : value ? valueToYm$4(value) : 0;
      $[24] = selectFromValue;
      $[25] = value;
      $[26] = _t;
    } else {
      _t = $[26];
    }
    var startYm = _t;
    var _t2;
    if ($[27] !== selectToValue || $[28] !== value) {
      _t2 = selectToValue ? valueToYm$4(selectToValue) : value ? valueToYm$4(value) : 0;
      $[27] = selectToValue;
      $[28] = value;
      $[29] = _t2;
    } else {
      _t2 = $[29];
    }
    var endYm = _t2;
    for (var i = 1; i <= 12; i = i + 1, i) {
      var ym = currentYear * 100 + i;
      newMonths.push({
        month: i,
        range: range,
        isDefault: !value && i === dateInfo.defaultValue.month,
        active: (!!selectFromValue || !!selectToValue) && !!value && ym === valueToYm$4(value),
        selected: !!value && ym >= startYm && ym <= endYm,
        selectedStart: !!value && ym === startYm,
        selectedEnd: !!value && ym === endYm,
        disabled: ym < dateInfo.availableYm.min || ym > dateInfo.availableYm.max || disablePast && ym < dateInfo.nowYm || disableFuture && ym > dateInfo.nowYm
      });
    }
    $[13] = currentYear;
    $[14] = dateInfo.availableYm.max;
    $[15] = dateInfo.availableYm.min;
    $[16] = dateInfo.defaultValue.month;
    $[17] = dateInfo.nowYm;
    $[18] = disableFuture;
    $[19] = disablePast;
    $[20] = selectFromValue;
    $[21] = selectToValue;
    $[22] = value;
    $[23] = newMonths;
  } else {
    newMonths = $[23];
  }
  var months = newMonths;
  var t6;
  if ($[30] !== currentYear || $[31] !== onChange) {
    t6 = function t6(month) {
      onChange({
        year: currentYear,
        month: month
      });
    };
    $[30] = currentYear;
    $[31] = onChange;
    $[32] = t6;
  } else {
    t6 = $[32];
  }
  var handleMonthChange = t6;
  var t7;
  if ($[33] !== handleMonthChange || $[34] !== months) {
    t7 = /*#__PURE__*/React.createElement(StyledContainer$1, {
      className: "PrivateMonthPickerMonthList",
      container: true
    }, months.map(function (info) {
      return /*#__PURE__*/React.createElement(PrivateMonthPickerMonth, {
        key: info.month,
        month: info.month,
        range: info.range,
        isDefault: info.isDefault,
        active: info.active,
        selected: info.selected,
        selectedStart: info.selectedStart,
        selectedEnd: info.selectedEnd,
        selectedTemp: info.selectedTemp,
        disabled: info.disabled,
        onClick: handleMonthChange
      });
    }));
    $[33] = handleMonthChange;
    $[34] = months;
    $[35] = t7;
  } else {
    t7 = $[35];
  }
  return t7;
};

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

var valueToYm$4 = function valueToYm(v) {
  return v.year * 100 + v.month;
};
var dateToValue$6 = function dateToValue(v) {
  return {
    year: v.year(),
    month: v.month() + 1
  };
};var _templateObject$3, _templateObject2$1, _templateObject3$1, _templateObject4, _templateObject5;
var StyledContainer = styled('div')(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  .PrivateYearPickerYearList {\n    max-height: 130px;\n  }\n"])));
var TitleContainer = styled('div')(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton = styled(IconButton)(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth = styled('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var StyledYearMonthError = styled('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.error.main;
});var valueToDate$4 = function valueToDate(v) {
  return dayjs("".concat(v.year, "-").concat(v.month, "-01"));
};
var valueToYm$3 = function valueToYm(v) {
  return v.year * 100 + v.month;
};
var dateToValue$5 = function dateToValue(v) {
  return {
    year: v.year(),
    month: v.month() + 1
  };
};var DEFAULT_MIN_VALUE$3 = {
  year: 2020,
  month: 1
};
var DEFAULT_MAX_VALUE$3 = {
  year: 2050,
  month: 12
};
var PrivateMonthPicker = function PrivateMonthPicker(t0) {
  var $ = c(81);
  var t1 = t0.value,
    t2 = t0.minValue,
    t3 = t0.maxValue,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    selectFromValue = t0.selectFromValue,
    selectToValue = t0.selectToValue,
    onChange = t0.onChange;
  var initValue = t1 === undefined ? null : t1;
  var minValue = t2 === undefined ? DEFAULT_MIN_VALUE$3 : t2;
  var maxValue = t3 === undefined ? DEFAULT_MAX_VALUE$3 : t3;
  var _useState = useState(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var t4;
  var t5;
  if ($[0] !== initValue) {
    t4 = function t4() {
      return setValue(initValue);
    };
    t5 = [initValue];
    $[0] = initValue;
    $[1] = t4;
    $[2] = t5;
  } else {
    t4 = $[1];
    t5 = $[2];
  }
  useFirstSkipChanged(t4, t5);
  var nowValue;
  var t6;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    nowValue = dateToValue$5(dayjs());
    t6 = valueToYm$3(nowValue);
    $[3] = nowValue;
    $[4] = t6;
  } else {
    nowValue = $[3];
    t6 = $[4];
  }
  var nowYm = t6;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm$3(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t7;
  if ($[5] !== minAvailableValue) {
    t7 = valueToYm$3(minAvailableValue);
    $[5] = minAvailableValue;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var minAvailableYm = t7;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm$3(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t8;
  if ($[7] !== maxAvailableValue) {
    t8 = valueToYm$3(maxAvailableValue);
    $[7] = maxAvailableValue;
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  var maxAvailableYm = t8;
  var t9;
  if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = {
      value: nowValue,
      ym: nowYm
    };
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  var t10;
  if ($[10] !== minAvailableValue || $[11] !== minAvailableYm) {
    t10 = {
      value: minAvailableValue,
      ym: minAvailableYm
    };
    $[10] = minAvailableValue;
    $[11] = minAvailableYm;
    $[12] = t10;
  } else {
    t10 = $[12];
  }
  var t11;
  if ($[13] !== maxAvailableValue || $[14] !== maxAvailableYm) {
    t11 = {
      value: maxAvailableValue,
      ym: maxAvailableYm
    };
    $[13] = maxAvailableValue;
    $[14] = maxAvailableYm;
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  var t12;
  if ($[16] !== t10 || $[17] !== t11) {
    t12 = {
      now: t9,
      available: {
        min: t10,
        max: t11
      }
    };
    $[16] = t10;
    $[17] = t11;
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  var dateInfo = t12;
  var displayValue;
  if (value && !Number.isNaN(value.year) && !Number.isNaN(value.month)) {
    displayValue = value;
  } else {
    if (dateInfo.now.ym < dateInfo.available.min.ym) {
      displayValue = dateInfo.available.min.value;
    } else {
      if (dateInfo.now.ym > dateInfo.available.max.ym) {
        displayValue = dateInfo.available.max.value;
      } else {
        displayValue = selectFromValue || selectToValue || dateInfo.now.value;
      }
    }
  }
  var t13;
  if ($[19] !== displayValue) {
    t13 = valueToDate$4(displayValue);
    $[19] = displayValue;
    $[20] = t13;
  } else {
    t13 = $[20];
  }
  var displayValueDate = t13;
  var displayValueYm = displayValue.year * 100 + displayValue.month;
  var displayValueError = displayValueYm < dateInfo.available.min.ym || displayValueYm > dateInfo.available.max.ym;
  var t14;
  if ($[21] !== displayValue || $[22] !== displayValueDate || $[23] !== displayValueError || $[24] !== displayValueYm) {
    t14 = {
      value: displayValue,
      date: displayValueDate,
      ym: displayValueYm,
      error: displayValueError
    };
    $[21] = displayValue;
    $[22] = displayValueDate;
    $[23] = displayValueError;
    $[24] = displayValueYm;
    $[25] = t14;
  } else {
    t14 = $[25];
  }
  var displayInfo = t14;
  var t15;
  if ($[26] !== dateInfo.available.max.value || $[27] !== dateInfo.available.max.ym || $[28] !== dateInfo.available.min.value || $[29] !== dateInfo.available.min.ym || $[30] !== displayInfo.value || $[31] !== onChange) {
    t15 = function t15(year) {
      var newValue = _objectSpread2(_objectSpread2({}, displayInfo.value), {}, {
        year: year
      });
      var valueYm = valueToYm$3(newValue);
      if (valueYm < dateInfo.available.min.ym) {
        setValue(dateInfo.available.min.value);
        onChange(dateInfo.available.min.value, false);
      } else {
        if (valueYm > dateInfo.available.max.ym) {
          setValue(dateInfo.available.max.value);
          onChange(dateInfo.available.max.value, false);
        } else {
          setValue(newValue);
          onChange(newValue, false);
        }
      }
    };
    $[26] = dateInfo.available.max.value;
    $[27] = dateInfo.available.max.ym;
    $[28] = dateInfo.available.min.value;
    $[29] = dateInfo.available.min.ym;
    $[30] = displayInfo.value;
    $[31] = onChange;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  var handleYearChange = t15;
  var t16;
  if ($[33] !== onChange) {
    t16 = function t16(newValue_0) {
      setValue(newValue_0);
      onChange(newValue_0, true);
    };
    $[33] = onChange;
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  var handleMonthChange = t16;
  var t17;
  if ($[35] !== displayInfo.date || $[36] !== onChange) {
    t17 = function t17() {
      var newValue_1 = dateToValue$5(displayInfo.date.subtract(1, "months"));
      setValue(newValue_1);
      onChange(newValue_1, false);
    };
    $[35] = displayInfo.date;
    $[36] = onChange;
    $[37] = t17;
  } else {
    t17 = $[37];
  }
  var handlePrevClick = t17;
  var t18;
  if ($[38] !== displayInfo.date || $[39] !== onChange) {
    t18 = function t18() {
      var newValue_2 = dateToValue$5(displayInfo.date.add(1, "months"));
      setValue(newValue_2);
      onChange(newValue_2, false);
    };
    $[38] = displayInfo.date;
    $[39] = onChange;
    $[40] = t18;
  } else {
    t18 = $[40];
  }
  var handleNextClick = t18;
  var prevBtnDisabled = displayInfo.ym <= dateInfo.available.min.ym;
  var nextBtnDisabled = displayInfo.ym >= dateInfo.available.max.ym;
  var selectFromYear = selectFromValue ? selectFromValue.year : undefined;
  var selectToYear = selectToValue ? selectToValue.year : undefined;
  var t19;
  if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowLeft");
    $[41] = t19;
  } else {
    t19 = $[41];
  }
  var t20;
  if ($[42] !== handlePrevClick || $[43] !== prevBtnDisabled) {
    t20 = /*#__PURE__*/React.createElement(StyledIconButton, {
      disabled: prevBtnDisabled,
      onClick: handlePrevClick
    }, t19);
    $[42] = handlePrevClick;
    $[43] = prevBtnDisabled;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  var t21;
  if ($[45] !== displayInfo.error || $[46] !== displayInfo.value.month || $[47] !== displayInfo.value.year) {
    t21 = displayInfo.error ? /*#__PURE__*/React.createElement(StyledYearMonthError, null, displayInfo.value.year, "\uB144 ", displayInfo.value.month, "\uC6D4") : /*#__PURE__*/React.createElement(StyledYearMonth, null, displayInfo.value.year, "\uB144 ", displayInfo.value.month, "\uC6D4");
    $[45] = displayInfo.error;
    $[46] = displayInfo.value.month;
    $[47] = displayInfo.value.year;
    $[48] = t21;
  } else {
    t21 = $[48];
  }
  var t22;
  if ($[49] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowRight");
    $[49] = t22;
  } else {
    t22 = $[49];
  }
  var t23;
  if ($[50] !== handleNextClick || $[51] !== nextBtnDisabled) {
    t23 = /*#__PURE__*/React.createElement(StyledIconButton, {
      disabled: nextBtnDisabled,
      onClick: handleNextClick
    }, t22);
    $[50] = handleNextClick;
    $[51] = nextBtnDisabled;
    $[52] = t23;
  } else {
    t23 = $[52];
  }
  var t24;
  if ($[53] !== t20 || $[54] !== t21 || $[55] !== t23) {
    t24 = /*#__PURE__*/React.createElement(TitleContainer, null, t20, t21, t23);
    $[53] = t20;
    $[54] = t21;
    $[55] = t23;
    $[56] = t24;
  } else {
    t24 = $[56];
  }
  var t25 = (value === null || value === void 0 ? void 0 : value.year) || null;
  var t26;
  if ($[57] !== disableFuture || $[58] !== disablePast || $[59] !== handleYearChange || $[60] !== maxValue.year || $[61] !== minValue.year || $[62] !== selectFromYear || $[63] !== selectToYear || $[64] !== t25) {
    t26 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateYearPicker, {
      value: t25,
      minYear: minValue.year,
      maxYear: maxValue.year,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onChange: handleYearChange,
      hideHeader: true,
      selectFromYear: selectFromYear,
      selectToYear: selectToYear
    }));
    $[57] = disableFuture;
    $[58] = disablePast;
    $[59] = handleYearChange;
    $[60] = maxValue.year;
    $[61] = minValue.year;
    $[62] = selectFromYear;
    $[63] = selectToYear;
    $[64] = t25;
    $[65] = t26;
  } else {
    t26 = $[65];
  }
  var t27;
  if ($[66] === Symbol["for"]("react.memo_cache_sentinel")) {
    t27 = {
      borderTop: "1px solid #efefef"
    };
    $[66] = t27;
  } else {
    t27 = $[66];
  }
  var t28 = selectFromValue || selectToValue;
  var t29;
  if ($[67] !== dateInfo.available.max.value || $[68] !== dateInfo.available.min.value || $[69] !== disableFuture || $[70] !== disablePast || $[71] !== handleMonthChange || $[72] !== selectFromValue || $[73] !== selectToValue || $[74] !== t28 || $[75] !== value) {
    t29 = /*#__PURE__*/React.createElement("div", {
      style: t27
    }, /*#__PURE__*/React.createElement(PrivateMonthPickerMonthList, {
      value: value,
      defaultValue: t28,
      minAvailableValue: dateInfo.available.min.value,
      maxAvailableValue: dateInfo.available.max.value,
      disablePast: disablePast,
      disableFuture: disableFuture,
      selectFromValue: selectFromValue,
      selectToValue: selectToValue,
      onChange: handleMonthChange
    }));
    $[67] = dateInfo.available.max.value;
    $[68] = dateInfo.available.min.value;
    $[69] = disableFuture;
    $[70] = disablePast;
    $[71] = handleMonthChange;
    $[72] = selectFromValue;
    $[73] = selectToValue;
    $[74] = t28;
    $[75] = value;
    $[76] = t29;
  } else {
    t29 = $[76];
  }
  var t30;
  if ($[77] !== t24 || $[78] !== t26 || $[79] !== t29) {
    t30 = /*#__PURE__*/React.createElement(StyledContainer, {
      className: "PrivateMonthPicker"
    }, t24, t26, t29);
    $[77] = t24;
    $[78] = t26;
    $[79] = t29;
    $[80] = t30;
  } else {
    t30 = $[80];
  }
  return t30;
};var _templateObject$2, _templateObject2, _templateObject3;
var StyledDiv = styled(Grid)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  width: 30px;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  background-color: #fafafa;\n"])));
var StyledActionContainer = styled('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton = styled(Button)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));var DEFAULT_MIN_VALUE$2 = {
  year: 2020,
  month: 1
};
var DEFAULT_MAX_VALUE$2 = {
  year: 2050,
  month: 12
};
var PrivateMonthRangePicker = function PrivateMonthRangePicker(t0) {
  var $ = c(83);
  var value = t0.value,
    t1 = t0.minValue,
    t2 = t0.maxValue,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    initOnChange = t0.onChange;
  var minValue = t1 === undefined ? DEFAULT_MIN_VALUE$2 : t1;
  var maxValue = t2 === undefined ? DEFAULT_MAX_VALUE$2 : t2;
  var onChangeRef = useAutoUpdateRef(initOnChange);
  var nowDate;
  var nowValue;
  var t3;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    nowDate = dayjs();
    nowValue = dateToValue$4(nowDate);
    t3 = valueToYm$2(nowValue);
    $[0] = nowDate;
    $[1] = nowValue;
    $[2] = t3;
  } else {
    nowDate = $[0];
    nowValue = $[1];
    t3 = $[2];
  }
  var nowYm = t3;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm$2(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t4;
  if ($[3] !== minAvailableValue) {
    t4 = valueToYm$2(minAvailableValue);
    $[3] = minAvailableValue;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  var minAvailableYm = t4;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm$2(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t5;
  if ($[5] !== maxAvailableValue) {
    t5 = valueToYm$2(maxAvailableValue);
    $[5] = maxAvailableValue;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  var maxAvailableYm = t5;
  var t6;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = {
      date: nowDate,
      value: nowValue,
      ym: nowYm
    };
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var t7;
  if ($[8] !== minAvailableValue || $[9] !== minAvailableYm) {
    t7 = {
      value: minAvailableValue,
      ym: minAvailableYm
    };
    $[8] = minAvailableValue;
    $[9] = minAvailableYm;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  var t8;
  if ($[11] !== maxAvailableValue || $[12] !== maxAvailableYm) {
    t8 = {
      value: maxAvailableValue,
      ym: maxAvailableYm
    };
    $[11] = maxAvailableValue;
    $[12] = maxAvailableYm;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  var t9;
  if ($[14] !== t7 || $[15] !== t8) {
    t9 = {
      now: t6,
      available: {
        min: t7,
        max: t8
      }
    };
    $[14] = t7;
    $[15] = t8;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var dateInfo = t9;
  var t10;
  if ($[17] !== dateInfo.available) {
    t10 = function t10(v, selectType) {
      var finalValue = [v[0], v[1]];
      if (finalValue[0]) {
        var startYm = valueToYm$2(finalValue[0]);
        if (startYm < dateInfo.available.min.ym) {
          finalValue[0] = dateInfo.available.min.value;
        } else {
          if (startYm > dateInfo.available.max.ym) {
            finalValue[0] = dateInfo.available.max.value;
          }
        }
      }
      if (finalValue[1]) {
        var endYm = valueToYm$2(finalValue[1]);
        if (finalValue[0]) {
          if (valueToYm$2(finalValue[0]) > endYm) {
            if (selectType === "start") {
              finalValue[1] = finalValue[0];
            } else {
              finalValue[0] = finalValue[1];
            }
          }
        }
        endYm = valueToYm$2(finalValue[1]);
        if (endYm < dateInfo.available.min.ym) {
          finalValue[1] = dateInfo.available.min.value;
        } else {
          if (endYm > dateInfo.available.max.ym) {
            finalValue[1] = dateInfo.available.max.value;
          }
        }
      }
      return finalValue;
    };
    $[17] = dateInfo.available;
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var getFinalValue = t10;
  var t11;
  if ($[19] !== dateInfo.available || $[20] !== getFinalValue || $[21] !== onChangeRef) {
    t11 = function t11(fromDate, toDate, label, strict) {
      var fromValue = dateToValue$4(fromDate);
      var fromYm = valueToYm$2(fromValue);
      var toValue = dateToValue$4(toDate);
      var toYm = valueToYm$2(toValue);
      if (strict && (fromYm < dateInfo.available.min.ym || toYm > dateInfo.available.max.ym)) {
        return;
      } else {
        if (!strict && (fromYm < dateInfo.available.min.ym && toYm < dateInfo.available.min.ym || fromYm > dateInfo.available.max.ym && toYm > dateInfo.available.max.ym)) {
          return;
        } else {
          return /*#__PURE__*/React.createElement(StyledActionButton, {
            variant: "text",
            onClick: function onClick() {
              return onChangeRef.current(getFinalValue([fromValue, toValue], "end"), "end", true);
            }
          }, label);
        }
      }
    };
    $[19] = dateInfo.available;
    $[20] = getFinalValue;
    $[21] = onChangeRef;
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  var getActionButton = t11;
  var t12;
  if ($[23] !== dateInfo.now.date || $[24] !== getActionButton) {
    t12 = getActionButton(dayjs(dateInfo.now.date).subtract(2, "months"), dateInfo.now.date, "\uCD5C\uADFC 3\uAC1C\uC6D4", true);
    $[23] = dateInfo.now.date;
    $[24] = getActionButton;
    $[25] = t12;
  } else {
    t12 = $[25];
  }
  var t13;
  if ($[26] !== dateInfo.now.date || $[27] !== getActionButton) {
    t13 = getActionButton(dayjs(dateInfo.now.date).subtract(5, "months"), dateInfo.now.date, "\uCD5C\uADFC 6\uAC1C\uC6D4", true);
    $[26] = dateInfo.now.date;
    $[27] = getActionButton;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  var t14;
  if ($[29] !== dateInfo.now.date || $[30] !== getActionButton) {
    t14 = getActionButton(dayjs(dateInfo.now.date).subtract(11, "months"), dateInfo.now.date, "\uCD5C\uADFC 12\uAC1C\uC6D4", true);
    $[29] = dateInfo.now.date;
    $[30] = getActionButton;
    $[31] = t14;
  } else {
    t14 = $[31];
  }
  var t15;
  if ($[32] !== dateInfo.now.date || $[33] !== getActionButton) {
    t15 = getActionButton(dayjs(dateInfo.now.date).subtract(23, "months"), dateInfo.now.date, "\uCD5C\uADFC 24\uAC1C\uC6D4", true);
    $[32] = dateInfo.now.date;
    $[33] = getActionButton;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  var t16;
  if ($[35] !== dateInfo.now.date || $[36] !== getActionButton) {
    t16 = getActionButton(dayjs(dateInfo.now.date).subtract(2, "years").set("months", 0), dayjs(dateInfo.now.date).subtract(2, "years").set("months", 11), "\uC7AC\uC791\uB144");
    $[35] = dateInfo.now.date;
    $[36] = getActionButton;
    $[37] = t16;
  } else {
    t16 = $[37];
  }
  var t17;
  if ($[38] !== dateInfo.now.date || $[39] !== getActionButton) {
    t17 = getActionButton(dayjs(dateInfo.now.date).subtract(1, "years").set("months", 0), dayjs(dateInfo.now.date).subtract(1, "years").set("months", 11), "\uC791\uB144");
    $[38] = dateInfo.now.date;
    $[39] = getActionButton;
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  var t18;
  if ($[41] !== dateInfo.now.date || $[42] !== getActionButton) {
    t18 = getActionButton(dayjs(dateInfo.now.date).set("months", 0), dayjs(dateInfo.now.date).set("months", 11), "\uC62C\uD574");
    $[41] = dateInfo.now.date;
    $[42] = getActionButton;
    $[43] = t18;
  } else {
    t18 = $[43];
  }
  var t19;
  if ($[44] !== t12 || $[45] !== t13 || $[46] !== t14 || $[47] !== t15 || $[48] !== t16 || $[49] !== t17 || $[50] !== t18) {
    t19 = /*#__PURE__*/React.createElement(StyledActionContainer, null, t12, t13, t14, t15, t16, t17, t18);
    $[44] = t12;
    $[45] = t13;
    $[46] = t14;
    $[47] = t15;
    $[48] = t16;
    $[49] = t17;
    $[50] = t18;
    $[51] = t19;
  } else {
    t19 = $[51];
  }
  var actionButtons = t19;
  var t20;
  if ($[52] !== getFinalValue || $[53] !== onChangeRef || $[54] !== value[1]) {
    t20 = function t20(v_0, isMonthSelect) {
      var finalValue_0 = getFinalValue([v_0, value[1]], "start");
      onChangeRef.current(finalValue_0, "start", isMonthSelect);
    };
    $[52] = getFinalValue;
    $[53] = onChangeRef;
    $[54] = value[1];
    $[55] = t20;
  } else {
    t20 = $[55];
  }
  var handleStartMonthChange = t20;
  var t21;
  if ($[56] !== getFinalValue || $[57] !== onChangeRef || $[58] !== value[0]) {
    t21 = function t21(v_1, isMonthSelect_0) {
      var finalValue_1 = getFinalValue([value[0], v_1], "end");
      onChangeRef.current(finalValue_1, "end", isMonthSelect_0);
    };
    $[56] = getFinalValue;
    $[57] = onChangeRef;
    $[58] = value[0];
    $[59] = t21;
  } else {
    t21 = $[59];
  }
  var handleEndMonthChange = t21;
  var t22;
  if ($[60] !== disableFuture || $[61] !== disablePast || $[62] !== handleStartMonthChange || $[63] !== maxValue || $[64] !== minValue || $[65] !== value[0] || $[66] !== value[1]) {
    t22 = /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(PrivateMonthPicker, {
      value: value[0],
      selectToValue: value[1],
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onChange: handleStartMonthChange
    }));
    $[60] = disableFuture;
    $[61] = disablePast;
    $[62] = handleStartMonthChange;
    $[63] = maxValue;
    $[64] = minValue;
    $[65] = value[0];
    $[66] = value[1];
    $[67] = t22;
  } else {
    t22 = $[67];
  }
  var t23;
  if ($[68] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/React.createElement(StyledDiv, null, "~");
    $[68] = t23;
  } else {
    t23 = $[68];
  }
  var t24;
  if ($[69] !== disableFuture || $[70] !== disablePast || $[71] !== handleEndMonthChange || $[72] !== maxValue || $[73] !== minValue || $[74] !== value[0] || $[75] !== value[1]) {
    t24 = /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(PrivateMonthPicker, {
      value: value[1],
      selectFromValue: value[0],
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onChange: handleEndMonthChange
    }));
    $[69] = disableFuture;
    $[70] = disablePast;
    $[71] = handleEndMonthChange;
    $[72] = maxValue;
    $[73] = minValue;
    $[74] = value[0];
    $[75] = value[1];
    $[76] = t24;
  } else {
    t24 = $[76];
  }
  var t25;
  if ($[77] !== t22 || $[78] !== t24) {
    t25 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: "PrivateMonthRangePicker"
    }, t22, t23, t24);
    $[77] = t22;
    $[78] = t24;
    $[79] = t25;
  } else {
    t25 = $[79];
  }
  var t26;
  if ($[80] !== actionButtons || $[81] !== t25) {
    t26 = /*#__PURE__*/React.createElement("div", null, t25, actionButtons);
    $[80] = actionButtons;
    $[81] = t25;
    $[82] = t26;
  } else {
    t26 = $[82];
  }
  return t26;
};

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

var valueToYm$2 = function valueToYm(v) {
  return v.year * 100 + v.month;
};
var dateToValue$4 = function dateToValue(v) {
  return {
    year: v.year(),
    month: v.month() + 1
  };
};var _excluded$8 = ["ref", "className"],
  _excluded2$2 = ["onAddValueItem"];
var PFormDatePicker = function PFormDatePicker(t0) {
  var $ = c(21);
  var className;
  var props;
  var ref;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$8);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = ref;
  } else {
    className = $[1];
    props = $[2];
    ref = $[3];
  }
  var t1 = useFormState();
  var onAddValueItem;
  var otherFormState;
  if ($[4] !== t1) {
    var _t2 = t1;
    onAddValueItem = _t2.onAddValueItem;
    otherFormState = _objectWithoutProperties(_t2, _excluded2$2);
    $[4] = t1;
    $[5] = onAddValueItem;
    $[6] = otherFormState;
  } else {
    onAddValueItem = $[5];
    otherFormState = $[6];
  }
  var t2;
  if ($[7] !== onAddValueItem) {
    t2 = function t2(id, commands) {
      commands.getType = _temp$e;
      onAddValueItem(id, commands);
    };
    $[7] = onAddValueItem;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var handleAddValueItem = t2;
  var t3;
  if ($[9] !== handleAddValueItem || $[10] !== otherFormState) {
    t3 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      onAddValueItem: handleAddValueItem
    });
    $[9] = handleAddValueItem;
    $[10] = otherFormState;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  var t4;
  if ($[12] !== className) {
    t4 = classNames(className, "PFormDatePicker");
    $[12] = className;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  var t5;
  if ($[14] !== props || $[15] !== ref || $[16] !== t4) {
    t5 = /*#__PURE__*/React.createElement(PrivateDatePicker, _extends({
      className: t4
    }, props, {
      ref: ref,
      type: "date"
    }));
    $[14] = props;
    $[15] = ref;
    $[16] = t4;
    $[17] = t5;
  } else {
    t5 = $[17];
  }
  var t6;
  if ($[18] !== t3 || $[19] !== t5) {
    t6 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t3
    }, t5);
    $[18] = t3;
    $[19] = t5;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  return t6;
};
function _temp$e() {
  return "PFormDatePicker";
}var _excluded$7 = ["ref", "className", "time", "minDate", "maxDate", "disablePast", "disableFuture"],
  _excluded2$1 = ["onAddValueItem"];
var PFormDateTimePicker = function PFormDateTimePicker(t0) {
  var $ = c(39);
  var className;
  var disableFuture;
  var disablePast;
  var initMaxDate;
  var initMinDate;
  var props;
  var ref;
  var time;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    time = _t.time;
    initMinDate = _t.minDate;
    initMaxDate = _t.maxDate;
    disablePast = _t.disablePast;
    disableFuture = _t.disableFuture;
    props = _objectWithoutProperties(_t, _excluded$7);
    $[0] = t0;
    $[1] = className;
    $[2] = disableFuture;
    $[3] = disablePast;
    $[4] = initMaxDate;
    $[5] = initMinDate;
    $[6] = props;
    $[7] = ref;
    $[8] = time;
  } else {
    className = $[1];
    disableFuture = $[2];
    disablePast = $[3];
    initMaxDate = $[4];
    initMinDate = $[5];
    props = $[6];
    ref = $[7];
    time = $[8];
  }
  var t1 = useFormState();
  var onAddValueItem;
  var otherFormState;
  if ($[9] !== t1) {
    var _t2 = t1;
    onAddValueItem = _t2.onAddValueItem;
    otherFormState = _objectWithoutProperties(_t2, _excluded2$1);
    $[9] = t1;
    $[10] = onAddValueItem;
    $[11] = otherFormState;
  } else {
    onAddValueItem = $[10];
    otherFormState = $[11];
  }
  var t2;
  if (initMinDate && !disablePast) {
    var newMinDate;
    bb0: switch (time) {
      case "hour":
        {
          var _t3;
          if ($[12] !== initMinDate) {
            _t3 = dayjs(initMinDate).set("minute", 0).set("second", 0);
            $[12] = initMinDate;
            $[13] = _t3;
          } else {
            _t3 = $[13];
          }
          newMinDate = _t3;
          break bb0;
        }
      case "minute":
        {
          var _t4;
          if ($[14] !== initMinDate) {
            _t4 = dayjs(initMinDate).set("second", 0);
            $[14] = initMinDate;
            $[15] = _t4;
          } else {
            _t4 = $[15];
          }
          newMinDate = _t4;
          break bb0;
        }
      case "second":
        {
          newMinDate = initMinDate;
        }
    }
    t2 = newMinDate;
  } else {
    t2 = initMinDate;
  }
  var minDate = t2;
  var t3;
  if (initMaxDate && !disableFuture) {
    var newMaxDate;
    bb1: switch (time) {
      case "hour":
        {
          var _t5;
          if ($[16] !== initMaxDate) {
            _t5 = dayjs(initMaxDate).set("minute", 59).set("second", 59);
            $[16] = initMaxDate;
            $[17] = _t5;
          } else {
            _t5 = $[17];
          }
          newMaxDate = _t5;
          break bb1;
        }
      case "minute":
        {
          var _t6;
          if ($[18] !== initMaxDate) {
            _t6 = dayjs(initMaxDate).set("second", 59);
            $[18] = initMaxDate;
            $[19] = _t6;
          } else {
            _t6 = $[19];
          }
          newMaxDate = _t6;
          break bb1;
        }
      case "second":
        {
          newMaxDate = initMaxDate;
        }
    }
    t3 = newMaxDate;
  } else {
    t3 = initMaxDate;
  }
  var maxDate = t3;
  var t4;
  if ($[20] !== onAddValueItem) {
    t4 = function t4(id, commands) {
      commands.getType = _temp$d;
      onAddValueItem(id, commands);
    };
    $[20] = onAddValueItem;
    $[21] = t4;
  } else {
    t4 = $[21];
  }
  var handleAddValueItem = t4;
  var t5;
  if ($[22] !== handleAddValueItem || $[23] !== otherFormState) {
    t5 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      onAddValueItem: handleAddValueItem
    });
    $[22] = handleAddValueItem;
    $[23] = otherFormState;
    $[24] = t5;
  } else {
    t5 = $[24];
  }
  var t6;
  if ($[25] !== className) {
    t6 = classNames(className, "PFormDateTimePicker");
    $[25] = className;
    $[26] = t6;
  } else {
    t6 = $[26];
  }
  var t7;
  if ($[27] !== disableFuture || $[28] !== disablePast || $[29] !== maxDate || $[30] !== minDate || $[31] !== props || $[32] !== ref || $[33] !== t6 || $[34] !== time) {
    t7 = /*#__PURE__*/React.createElement(PrivateDateTimePicker, _extends({
      ref: ref,
      className: t6,
      type: "date_time",
      time: time,
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture
    }, props));
    $[27] = disableFuture;
    $[28] = disablePast;
    $[29] = maxDate;
    $[30] = minDate;
    $[31] = props;
    $[32] = ref;
    $[33] = t6;
    $[34] = time;
    $[35] = t7;
  } else {
    t7 = $[35];
  }
  var t8;
  if ($[36] !== t5 || $[37] !== t7) {
    t8 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t5
    }, t7);
    $[36] = t5;
    $[37] = t7;
    $[38] = t8;
  } else {
    t8 = $[38];
  }
  return t8;
};
function _temp$d() {
  return "PFormDateTimePicker";
}var _excluded$6 = ["className"],
  _excluded2 = ["onAddValueItem"];
var PFormTimePicker = function PFormTimePicker(t0) {
  var $ = c(19);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$6);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1 = useFormState();
  var onAddValueItem;
  var otherFormState;
  if ($[3] !== t1) {
    var _t2 = t1;
    onAddValueItem = _t2.onAddValueItem;
    otherFormState = _objectWithoutProperties(_t2, _excluded2);
    $[3] = t1;
    $[4] = onAddValueItem;
    $[5] = otherFormState;
  } else {
    onAddValueItem = $[4];
    otherFormState = $[5];
  }
  var t2;
  if ($[6] !== onAddValueItem) {
    t2 = function t2(id, commands) {
      commands.getType = _temp$c;
      onAddValueItem(id, commands);
    };
    $[6] = onAddValueItem;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var handleAddValueItem = t2;
  var t3;
  if ($[8] !== handleAddValueItem || $[9] !== otherFormState) {
    t3 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      onAddValueItem: handleAddValueItem
    });
    $[8] = handleAddValueItem;
    $[9] = otherFormState;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var t4;
  if ($[11] !== className) {
    t4 = classNames(className, "PFormTimePicker");
    $[11] = className;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  var t5;
  if ($[13] !== props || $[14] !== t4) {
    t5 = /*#__PURE__*/React.createElement(PrivateDateTimePicker, _extends({
      className: t4
    }, props, {
      type: "time"
    }));
    $[13] = props;
    $[14] = t4;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  var t6;
  if ($[16] !== t3 || $[17] !== t5) {
    t6 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t3
    }, t5);
    $[16] = t3;
    $[17] = t5;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  return t6;
};
function _temp$c() {
  return "PFormTimePicker";
}insertStyle(".PFormDateRangePickerTooltipPicker .MuiPickersCalendarHeader-root{display:none}.PFormDateRangePickerTooltipPicker .MuiDayPicker-header>span{margin:0}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content{min-width:292px}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root>div{width:292px}.PFormDateRangePickerTooltipPicker .MuiPickerStaticWrapper-content .MuiCalendarOrClockPicker-root>div .MuiCalendarPicker-root{width:292px}.PFormDateRangePickerTooltipPicker .selected-bg{display:none;position:absolute}.PFormDateRangePickerTooltipPicker .selected-bg.sel{display:block;position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(66,165,245,.6)}.PFormDateRangePickerTooltipPicker .selected-bg.sel.ui-start,.PFormDateRangePickerTooltipPicker .selected-bg.sel.s-start{border-top-left-radius:50%;border-bottom-left-radius:50%}.PFormDateRangePickerTooltipPicker .selected-bg.sel.ui-end,.PFormDateRangePickerTooltipPicker .selected-bg.sel.s-end{border-top-right-radius:50%;border-bottom-right-radius:50%}.PFormDateRangePickerTooltipPicker .selected-bg.sel~.MuiPickersDay-root{border:0}.PFormDateRangePickerTooltipPicker .selected-bg.sel~.MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected){background-color:rgba(0,0,0,0)}.PFormDateRangePickerTooltipPicker .focused-bg{display:none;position:absolute}.PFormDateRangePickerTooltipPicker .focused-bg.focused{display:block;position:absolute;top:0;bottom:0;left:0;right:0;border:2px solid #efefef;border-left:0;border-right:0}.PFormDateRangePickerTooltipPicker .focused-bg.focused.ui-start,.PFormDateRangePickerTooltipPicker .focused-bg.focused.f-start{border-left:2px solid #efefef;border-top-left-radius:50%;border-bottom-left-radius:50%}.PFormDateRangePickerTooltipPicker .focused-bg.focused.ui-end,.PFormDateRangePickerTooltipPicker .focused-bg.focused.f-end{border-right:2px solid #efefef;border-top-right-radius:50%;border-bottom-right-radius:50%}.PFormDateRangePickerTooltipPicker .focused-bg.focused~.MuiPickersDay-root:not(:hover):not(:active):not(.Mui-selected){background-color:rgba(0,0,0,0)}");var PFormDateRangePickerTooltipPicker = function PFormDateRangePickerTooltipPicker(t0) {
  var $ = c(48);
  var ref = t0.ref,
    selectType = t0.selectType,
    initValue = t0.value,
    focusedDate = t0.focusedDate,
    month = t0.month,
    disableFuture = t0.disableFuture,
    disablePast = t0.disablePast,
    minDate = t0.minDate,
    maxDate = t0.maxDate,
    onValueChange = t0.onValueChange,
    onMouseEnterPickersDay = t0.onMouseEnterPickersDay,
    onMonthChange = t0.onMonthChange;
  var leftArrowOnClickRef = useRef(undefined);
  var rightArrowOnClickRef = useRef(undefined);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeMonthValue = _useState2[0],
    setActiveMonthValue = _useState2[1];
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      return setActiveMonthValue(null);
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var t2;
  if ($[1] !== selectType) {
    t2 = [selectType];
    $[1] = selectType;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  useFirstSkipChanged(t1, t2);
  var t3;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3() {
      var ArrowButton = function ArrowButton(props) {
        leftArrowOnClickRef.current = props.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props);
      };
      return ArrowButton;
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  var _useState3 = useState(t3),
    _useState4 = _slicedToArray(_useState3, 1),
    LeftArrowButton = _useState4[0];
  var t4;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4() {
      var ArrowButton_0 = function ArrowButton_0(props_0) {
        rightArrowOnClickRef.current = props_0.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props_0);
      };
      return ArrowButton_0;
    };
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  var _useState5 = useState(t4),
    _useState6 = _slicedToArray(_useState5, 1),
    RightArrowButton = _useState6[0];
  var getDateVal = _temp$b;
  var t5;
  if ($[5] !== initValue) {
    t5 = initValue ? initValue : [null, null];
    $[5] = initValue;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  var value = t5;
  var newValue;
  if ($[7] !== month) {
    newValue = {};
    var lastDayOfMonth = month.endOf("month").date();
    var now = dayjs(month);
    for (var i = 1; i <= lastDayOfMonth; i = i + 1, i) {
      var className = "";
      now = now.set("date", i);
      var nowVal = getDateVal(now);
      var dayOfWeek = now.day();
      if (i === 1 || dayOfWeek === 0) {
        className = "ui-start ";
      }
      if (i === lastDayOfMonth || dayOfWeek === 6) {
        className = className + "ui-end ";
      }
      newValue[nowVal] = className;
    }
    $[7] = month;
    $[8] = newValue;
  } else {
    newValue = $[8];
  }
  var baseClassNames = newValue;
  var newValue_0;
  if ($[9] !== month || $[10] !== value[0] || $[11] !== value[1]) {
    newValue_0 = {};
    var startDateVal = value[0] ? getDateVal(value[0]) : null;
    var endDateVal = value[1] ? getDateVal(value[1]) : null;
    var lastDayOfMonth_0 = month.endOf("month").date();
    var now_0 = dayjs(month);
    for (var i_0 = 1; i_0 <= lastDayOfMonth_0; i_0 = i_0 + 1, i_0) {
      var className_0 = "";
      now_0 = now_0.set("date", i_0);
      var nowVal_0 = getDateVal(now_0);
      if (startDateVal && endDateVal) {
        if (nowVal_0 >= startDateVal && nowVal_0 <= endDateVal) {
          className_0 = "sel ";
          if (nowVal_0 === startDateVal) {
            className_0 = "sel s-start ";
          }
          if (nowVal_0 === endDateVal) {
            className_0 = className_0 + "s-end ";
          }
        }
      }
      newValue_0[nowVal_0] = className_0;
    }
    $[9] = month;
    $[10] = value[0];
    $[11] = value[1];
    $[12] = newValue_0;
  } else {
    newValue_0 = $[12];
  }
  var selectedClassNames = newValue_0;
  var newValue_1;
  if ($[13] !== focusedDate || $[14] !== month || $[15] !== selectType || $[16] !== value[0] || $[17] !== value[1]) {
    newValue_1 = {};
    var startDateVal_0 = value[0] ? getDateVal(value[0]) : null;
    var endDateVal_0 = value[1] ? getDateVal(value[1]) : null;
    var focusedDateVal = focusedDate ? getDateVal(focusedDate) : null;
    var lastDayOfMonth_1 = month.endOf("month").date();
    if (focusedDateVal && (selectType === "start" && endDateVal_0 || selectType === "end" && startDateVal_0)) {
      var now_1 = dayjs(month);
      for (var i_1 = 1; i_1 <= lastDayOfMonth_1; i_1 = i_1 + 1, i_1) {
        var className_1 = "";
        now_1 = now_1.set("date", i_1);
        var nowVal_1 = getDateVal(now_1);
        bb0: switch (selectType) {
          case "start":
            {
              if (endDateVal_0) {
                if (nowVal_1 >= focusedDateVal && nowVal_1 <= endDateVal_0) {
                  className_1 = "focused ";
                  if (nowVal_1 === focusedDateVal) {
                    className_1 = "focused f-start";
                  }
                  if (nowVal_1 === endDateVal_0) {
                    className_1 = className_1 + "f-end ";
                  }
                }
              }
              break bb0;
            }
          case "end":
            {
              if (startDateVal_0) {
                if (nowVal_1 >= startDateVal_0 && nowVal_1 <= focusedDateVal) {
                  className_1 = "focused ";
                  if (nowVal_1 === startDateVal_0) {
                    className_1 = "focused f-start ";
                  }
                  if (nowVal_1 === focusedDateVal) {
                    className_1 = className_1 + "f-end";
                  }
                }
              }
            }
        }
        newValue_1[nowVal_1] = className_1;
      }
    }
    $[13] = focusedDate;
    $[14] = month;
    $[15] = selectType;
    $[16] = value[0];
    $[17] = value[1];
    $[18] = newValue_1;
  } else {
    newValue_1 = $[18];
  }
  var focusedClassNames = newValue_1;
  var t6;
  if ($[19] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  var previousMonth = t6;
  var t7;
  if ($[20] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  var nextMonth = t7;
  var t8;
  if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(month_0) {
      setActiveMonthValue(month_0);
    };
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  var activeMonth = t8;
  var t9;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = {
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      activeMonth: activeMonth
    };
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  var commands = t9;
  useForwardRef(ref, commands);
  var t10;
  if ($[23] !== baseClassNames || $[24] !== focusedClassNames || $[25] !== onMouseEnterPickersDay || $[26] !== selectedClassNames || $[27] !== value) {
    t10 = function t10(props_1) {
      var startDate = value[0];
      var endDate = value[1];
      var dateVal = getDateVal(props_1.day);
      var baseClassName = baseClassNames[dateVal];
      var selectedClassName = selectedClassNames[dateVal];
      var focusedClassName = focusedClassNames[dateVal];
      return /*#__PURE__*/React.createElement("div", {
        key: props_1.key,
        style: {
          position: "relative"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames("focused-bg", baseClassName, focusedClassName)
      }), /*#__PURE__*/React.createElement("div", {
        className: classNames("selected-bg", baseClassName, selectedClassName)
      }), /*#__PURE__*/React.createElement(PickersDay, _extends({}, props_1, {
        disableMargin: true,
        selected: props_1.day.isSame(startDate, "date") || props_1.day.isSame(endDate, "date"),
        onMouseEnter: value[0] || value[1] ? function () {
          return onMouseEnterPickersDay && onMouseEnterPickersDay(props_1.day);
        } : undefined
      })));
    };
    $[23] = baseClassNames;
    $[24] = focusedClassNames;
    $[25] = onMouseEnterPickersDay;
    $[26] = selectedClassNames;
    $[27] = value;
    $[28] = t10;
  } else {
    t10 = $[28];
  }
  var handleRenderDay = t10;
  var t11;
  if ($[29] !== LeftArrowButton || $[30] !== RightArrowButton || $[31] !== handleRenderDay) {
    t11 = {
      previousIconButton: LeftArrowButton,
      nextIconButton: RightArrowButton,
      day: handleRenderDay,
      actionBar: _temp2$1
    };
    $[29] = LeftArrowButton;
    $[30] = RightArrowButton;
    $[31] = handleRenderDay;
    $[32] = t11;
  } else {
    t11 = $[32];
  }
  var t12;
  if ($[33] !== onValueChange || $[34] !== selectType) {
    t12 = function t12(newValue_2) {
      return onValueChange && onValueChange(selectType, newValue_2);
    };
    $[33] = onValueChange;
    $[34] = selectType;
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  var t13;
  if ($[36] !== onMonthChange) {
    t13 = function t13(month_1) {
      if (onMonthChange) {
        onMonthChange(month_1);
      }
      setActiveMonthValue(null);
    };
    $[36] = onMonthChange;
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  var t14;
  if ($[38] !== activeMonthValue || $[39] !== disableFuture || $[40] !== disablePast || $[41] !== maxDate || $[42] !== minDate || $[43] !== month || $[44] !== t11 || $[45] !== t12 || $[46] !== t13) {
    t14 = /*#__PURE__*/React.createElement(StaticDatePicker, {
      className: "PFormDateRangePickerTooltipPicker",
      displayStaticWrapperAs: "desktop",
      slots: t11,
      value: activeMonthValue,
      referenceDate: month,
      disableFuture: disableFuture,
      disablePast: disablePast,
      minDate: minDate,
      maxDate: maxDate,
      onChange: t12,
      onMonthChange: t13
    });
    $[38] = activeMonthValue;
    $[39] = disableFuture;
    $[40] = disablePast;
    $[41] = maxDate;
    $[42] = minDate;
    $[43] = month;
    $[44] = t11;
    $[45] = t12;
    $[46] = t13;
    $[47] = t14;
  } else {
    t14 = $[47];
  }
  return t14;
};
function _temp$b(date) {
  return Number(date.format("YYYYMMDD"));
}
function _temp2$1() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}insertStyle(".PFormDateRangePickerTooltipPickerContainer{display:inline-block;position:relative}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap{position:absolute;top:15px;left:0;right:0}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap>div:first-of-type{padding-left:20px}.PFormDateRangePickerTooltipPickerContainer .month-change-arrow-wrap>div:last-child{padding-right:20px;text-align:right}.PFormDateRangePickerTooltipPickerContainer .month-title{text-align:center;padding-top:13px;padding-bottom:10px}.PFormDateRangePickerTooltipPickerContainer .month-title button{font-size:15px;padding-left:8px;padding-right:0;min-width:0}.PFormDateRangePickerTooltipPickerContainer .month-title button:not(.active){color:unset}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap{position:relative}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select,.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select{position:absolute;left:0;right:0;top:0;bottom:0;border-top:1px solid #efefef;padding-top:15px;background-color:#fff}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.today:not(.selected),.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.today:not(.selected){border:1px solid rgba(0,0,0,.1)}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected),.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected){background-color:#f5f5f5}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button.active:not(.selected):hover,.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button.active:not(.selected):hover{background-color:#e5e5e5}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select{overflow-y:scroll}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .year-select button{font-size:14px;font-weight:400;border-radius:18px}.PFormDateRangePickerTooltipPickerContainer .date-picker-wrap .month-select button{font-size:15px;font-weight:400;border-radius:18px}.PFormDateRangePickerTooltipPickerContainer .action-buttons button{min-width:0;color:unset}.PFormDateRangePickerTooltipPickerContainer .action-buttons button:not(:first-of-type){margin-left:5px}.PFormDateRangePickerTooltipPickerContainer .action-buttons button.disabled{color:rgba(0,0,0,.5)}");var YEARS = new Array(200).fill(0);
for (var i = 0; i < 200; i += 1) {
  YEARS[i] = 1900 + i;
}
var MONTHS = new Array(12).fill(0);
for (var _i = 0; _i < 12; _i += 1) {
  MONTHS[_i] = _i;
}
var PFormDateRangePickerTooltipPickerContainer = function PFormDateRangePickerTooltipPickerContainer(t0) {
  var $ = c(118);
  var ref = t0.ref,
    selectType = t0.selectType,
    value = t0.value,
    t1 = t0.calendarCount,
    months = t0.months,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    maxDate = t0.maxDate,
    minDate = t0.minDate,
    onGetActionButtons = t0.onGetActionButtons,
    onChange = t0.onChange,
    onValueChange = t0.onValueChange,
    onMonthsChange = t0.onMonthsChange;
  var calendarCount = t1 === undefined ? 2 : t1;
  var theme = useTheme();
  var datePicker1Ref = useRef(null);
  var datePicker2Ref = useRef(null);
  var datePicker3Ref = useRef(null);
  var yearSelectRef = useRef(null);
  var activeYearBtnRef = useRef(null);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    focusedDate = _useState2[0],
    setFocusedDate = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    yearMonthSelectIndex = _useState4[0],
    setYearMonthSelectIndex = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    yearSelectOpen = _useState6[0],
    setYearSelectOpen = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    monthSelectOpen = _useState8[0],
    setMonthSelectOpen = _useState8[1];
  var t2;
  if ($[0] !== disableFuture || $[1] !== disablePast || $[2] !== maxDate || $[3] !== minDate || $[4] !== onValueChange || $[5] !== selectType || $[6] !== value) {
    t2 = {
      selectType: selectType,
      value: value,
      minDate: minDate,
      maxDate: maxDate,
      disableFuture: disableFuture,
      disablePast: disablePast,
      onValueChange: onValueChange
    };
    $[0] = disableFuture;
    $[1] = disablePast;
    $[2] = maxDate;
    $[3] = minDate;
    $[4] = onValueChange;
    $[5] = selectType;
    $[6] = value;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var customDatePickerProps = t2;
  var t3 = !!disablePast;
  var t4 = !!disableFuture;
  var t5;
  if ($[8] !== maxDate || $[9] !== minDate || $[10] !== t3 || $[11] !== t4) {
    t5 = makeAvailableDate(minDate, maxDate, t3, t4);
    $[8] = maxDate;
    $[9] = minDate;
    $[10] = t3;
    $[11] = t4;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  var availableDate = t5;
  var t6;
  var t7;
  if ($[13] !== yearSelectOpen) {
    t6 = function t6() {
      if (yearSelectOpen) {
        setTimeout(function () {
          var _yearSelectRef$curren, _activeYearBtnRef$cur;
          var wrapRect = (_yearSelectRef$curren = yearSelectRef.current) === null || _yearSelectRef$curren === void 0 ? void 0 : _yearSelectRef$curren.getBoundingClientRect();
          var activeRect = (_activeYearBtnRef$cur = activeYearBtnRef.current) === null || _activeYearBtnRef$cur === void 0 ? void 0 : _activeYearBtnRef$cur.getBoundingClientRect();
          if (wrapRect && activeRect) {
            var _yearSelectRef$curren2;
            (_yearSelectRef$curren2 = yearSelectRef.current) === null || _yearSelectRef$curren2 === void 0 || _yearSelectRef$curren2.scrollTo({
              left: 0,
              top: activeRect.y - wrapRect.y - Math.round(wrapRect.height / 2) + 23
            });
          }
        });
      }
    };
    t7 = [yearSelectOpen];
    $[13] = yearSelectOpen;
    $[14] = t6;
    $[15] = t7;
  } else {
    t6 = $[14];
    t7 = $[15];
  }
  useEffect(t6, t7);
  var t8;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      var _datePicker1Ref$curre, _datePicker2Ref$curre, _datePicker3Ref$curre;
      (_datePicker1Ref$curre = datePicker1Ref.current) === null || _datePicker1Ref$curre === void 0 || _datePicker1Ref$curre.previousMonth();
      (_datePicker2Ref$curre = datePicker2Ref.current) === null || _datePicker2Ref$curre === void 0 || _datePicker2Ref$curre.previousMonth();
      (_datePicker3Ref$curre = datePicker3Ref.current) === null || _datePicker3Ref$curre === void 0 || _datePicker3Ref$curre.previousMonth();
    };
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  var previousMonth = t8;
  var t9;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9() {
      var _datePicker1Ref$curre2, _datePicker2Ref$curre2, _datePicker3Ref$curre2;
      (_datePicker1Ref$curre2 = datePicker1Ref.current) === null || _datePicker1Ref$curre2 === void 0 || _datePicker1Ref$curre2.nextMonth();
      (_datePicker2Ref$curre2 = datePicker2Ref.current) === null || _datePicker2Ref$curre2 === void 0 || _datePicker2Ref$curre2.nextMonth();
      (_datePicker3Ref$curre2 = datePicker3Ref.current) === null || _datePicker3Ref$curre2 === void 0 || _datePicker3Ref$curre2.nextMonth();
    };
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  var nextMonth = t9;
  var t10;
  if ($[18] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(month) {
      var _datePicker1Ref$curre3, _datePicker2Ref$curre3, _datePicker3Ref$curre3;
      (_datePicker1Ref$curre3 = datePicker1Ref.current) === null || _datePicker1Ref$curre3 === void 0 || _datePicker1Ref$curre3.activeMonth(month);
      (_datePicker2Ref$curre3 = datePicker2Ref.current) === null || _datePicker2Ref$curre3 === void 0 || _datePicker2Ref$curre3.activeMonth(month.add(1, "month"));
      (_datePicker3Ref$curre3 = datePicker3Ref.current) === null || _datePicker3Ref$curre3 === void 0 || _datePicker3Ref$curre3.activeMonth(month.add(2, "month"));
    };
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var activeMonth = t10;
  var t11;
  if ($[19] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = {
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      activeMonth: activeMonth
    };
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  useForwardRef(ref, t11);
  var t12;
  if ($[20] !== onMonthsChange) {
    t12 = function t12(date) {
      if (onMonthsChange) {
        onMonthsChange([date, date.add(1, "month"), date.add(2, "month")]);
      }
    };
    $[20] = onMonthsChange;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  var handleFirstDatePickerMonthChange = t12;
  var t13;
  if ($[22] !== yearMonthSelectIndex || $[23] !== yearSelectOpen) {
    t13 = function t13(index) {
      if (yearSelectOpen) {
        setYearSelectOpen(false);
        if (index !== yearMonthSelectIndex) {
          setTimeout(function () {
            setYearMonthSelectIndex(index);
            setYearSelectOpen(true);
            setMonthSelectOpen(false);
          });
        }
      } else {
        setYearMonthSelectIndex(index);
        setYearSelectOpen(true);
        setMonthSelectOpen(false);
      }
    };
    $[22] = yearMonthSelectIndex;
    $[23] = yearSelectOpen;
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  var handleYearSelectClick = t13;
  var t14;
  if ($[25] !== monthSelectOpen || $[26] !== yearMonthSelectIndex) {
    t14 = function t14(index_0) {
      if (monthSelectOpen) {
        setMonthSelectOpen(false);
        if (index_0 !== yearMonthSelectIndex) {
          setYearMonthSelectIndex(index_0);
          setMonthSelectOpen(true);
          setYearSelectOpen(false);
        }
      } else {
        setYearMonthSelectIndex(index_0);
        setMonthSelectOpen(true);
        setYearSelectOpen(false);
      }
    };
    $[25] = monthSelectOpen;
    $[26] = yearMonthSelectIndex;
    $[27] = t14;
  } else {
    t14 = $[27];
  }
  var handleMonthSelectClick = t14;
  var t15;
  if ($[28] !== months || $[29] !== yearMonthSelectIndex) {
    t15 = function t15(year) {
      activeMonth(months[yearMonthSelectIndex].set("year", year).subtract(yearMonthSelectIndex, "month"));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    };
    $[28] = months;
    $[29] = yearMonthSelectIndex;
    $[30] = t15;
  } else {
    t15 = $[30];
  }
  var handleYearSelect = t15;
  var t16;
  if ($[31] !== months || $[32] !== yearMonthSelectIndex) {
    t16 = function t16(m) {
      activeMonth(months[yearMonthSelectIndex].set("month", m).subtract(yearMonthSelectIndex, "month"));
      setMonthSelectOpen(false);
    };
    $[31] = months;
    $[32] = yearMonthSelectIndex;
    $[33] = t16;
  } else {
    t16 = $[33];
  }
  var handleMonthSelect = t16;
  var t17;
  if ($[34] !== handleMonthSelectClick || $[35] !== handleYearSelectClick || $[36] !== monthSelectOpen || $[37] !== months || $[38] !== yearMonthSelectIndex || $[39] !== yearSelectOpen) {
    t17 = function t17(index_1) {
      return /*#__PURE__*/React.createElement("div", {
        className: "month-title"
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        className: yearSelectOpen && yearMonthSelectIndex === index_1 ? "active" : undefined,
        onClick: function onClick() {
          return handleYearSelectClick(index_1);
        }
      }, months[index_1].format("YYYY\uB144"), /*#__PURE__*/React.createElement(Icon, null, yearSelectOpen && yearMonthSelectIndex === index_1 ? "arrow_drop_up" : "arrow_drop_down")), /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        className: monthSelectOpen && yearMonthSelectIndex === index_1 ? "active" : undefined,
        onClick: function onClick() {
          return handleMonthSelectClick(index_1);
        }
      }, months[index_1].format("M\uC6D4"), /*#__PURE__*/React.createElement(Icon, null, monthSelectOpen && yearMonthSelectIndex === index_1 ? "arrow_drop_up" : "arrow_drop_down")));
    };
    $[34] = handleMonthSelectClick;
    $[35] = handleYearSelectClick;
    $[36] = monthSelectOpen;
    $[37] = months;
    $[38] = yearMonthSelectIndex;
    $[39] = yearSelectOpen;
    $[40] = t17;
  } else {
    t17 = $[40];
  }
  var getMonthTitle = t17;
  var t18;
  if ($[41] !== availableDate || $[42] !== onChange) {
    t18 = function t18(startDate, endDate, label) {
      var availableDateDate = getAvailableDate(availableDate, "date");
      var availableDateVal = getAvailableDateVal(availableDate, "date");
      var startDateVal = getDateValForAvailableDate(startDate, "date");
      var endDateVal = getDateValForAvailableDate(endDate, "date");
      var disabled = !!availableDateVal[0] && endDateVal < availableDateVal[0] || !!availableDateVal[1] && startDateVal > availableDateVal[1];
      var finalStartDate = startDate;
      var finalEndDate = endDate;
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
      return /*#__PURE__*/React.createElement(Button, {
        className: disabled ? "disabled" : undefined,
        variant: "text",
        disabled: disabled,
        onClick: function onClick() {
          onChange([finalStartDate, finalEndDate]);
        }
      }, label);
    };
    $[41] = availableDate;
    $[42] = onChange;
    $[43] = t18;
  } else {
    t18 = $[43];
  }
  var getActionButton = t18;
  var t19;
  if (onGetActionButtons) {
    var _t;
    if ($[44] !== getActionButton || $[45] !== onGetActionButtons) {
      var _t2;
      if ($[47] !== getActionButton) {
        _t2 = function _t2(info, idx) {
          return /*#__PURE__*/React.createElement(React.Fragment, {
            key: idx
          }, getActionButton(info.start, info.end, info.label));
        };
        $[47] = getActionButton;
        $[48] = _t2;
      } else {
        _t2 = $[48];
      }
      _t = onGetActionButtons().map(_t2);
      $[44] = getActionButton;
      $[45] = onGetActionButtons;
      $[46] = _t;
    } else {
      _t = $[46];
    }
    t19 = _t;
  } else {
    var _t3;
    if ($[49] !== getActionButton) {
      var now = dayjs().startOf("d");
      var lastWeek = now.subtract(1, "week");
      var dayOfWeek = now.day();
      var lastWeekDate;
      var thisWeekDate;
      if (dayOfWeek === 0) {
        lastWeekDate = [lastWeek.subtract(6, "d"), lastWeek];
        thisWeekDate = [now.subtract(6, "d"), now];
      } else {
        lastWeekDate = [lastWeek.subtract(dayOfWeek - 1, "d"), lastWeek.add(7 - dayOfWeek, "d")];
        thisWeekDate = [now.subtract(dayOfWeek - 1, "d"), now.add(7 - dayOfWeek, "d")];
      }
      _t3 = /*#__PURE__*/React.createElement(React.Fragment, null, getActionButton(now.subtract(1, "month").startOf("month"), now.subtract(1, "month").endOf("month"), "\uC9C0\uB09C\uB2EC"), getActionButton(now.startOf("month"), now.endOf("month"), "\uC774\uBC88\uB2EC"), getActionButton(now.subtract(29, "d"), now, "\uCD5C\uADFC 30\uC77C"), getActionButton(now.subtract(6, "d"), now, "\uCD5C\uADFC 7\uC77C"), getActionButton(lastWeekDate[0], lastWeekDate[1], "\uC9C0\uB09C\uC8FC"), getActionButton(thisWeekDate[0], thisWeekDate[1], "\uC774\uBC88\uC8FC"), getActionButton(now.subtract(1, "d"), now.subtract(1, "d"), "\uC5B4\uC81C"), getActionButton(now, now, "\uC624\uB298"));
      $[49] = getActionButton;
      $[50] = _t3;
    } else {
      _t3 = $[50];
    }
    t19 = _t3;
  }
  var actionButtons = t19;
  var t20;
  if ($[51] !== monthSelectOpen || $[52] !== yearSelectOpen) {
    t20 = !yearSelectOpen && !monthSelectOpen && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: "month-change-arrow-wrap"
    }, /*#__PURE__*/React.createElement(Grid, {
      size: {
        xs: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: previousMonth
    }, /*#__PURE__*/React.createElement(Icon, null, "keyboard_arrow_left"))), /*#__PURE__*/React.createElement(Grid, {
      size: {
        xs: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: nextMonth
    }, /*#__PURE__*/React.createElement(Icon, null, "keyboard_arrow_right")))));
    $[51] = monthSelectOpen;
    $[52] = yearSelectOpen;
    $[53] = t20;
  } else {
    t20 = $[53];
  }
  var t21;
  var t22;
  var t23;
  if ($[54] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = function t21() {
      return setFocusedDate(undefined);
    };
    t22 = {
      display: "flex"
    };
    t23 = {
      flex: 1
    };
    $[54] = t21;
    $[55] = t22;
    $[56] = t23;
  } else {
    t21 = $[54];
    t22 = $[55];
    t23 = $[56];
  }
  var t24;
  if ($[57] !== getMonthTitle) {
    t24 = /*#__PURE__*/React.createElement("div", {
      style: t23
    }, getMonthTitle(0));
    $[57] = getMonthTitle;
    $[58] = t24;
  } else {
    t24 = $[58];
  }
  var t25;
  if ($[59] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = {
      flex: 1,
      borderLeft: "1px solid #efefef"
    };
    $[59] = t25;
  } else {
    t25 = $[59];
  }
  var t26;
  if ($[60] !== getMonthTitle) {
    t26 = /*#__PURE__*/React.createElement("div", {
      style: t25
    }, getMonthTitle(1));
    $[60] = getMonthTitle;
    $[61] = t26;
  } else {
    t26 = $[61];
  }
  var t27;
  if ($[62] !== calendarCount || $[63] !== getMonthTitle) {
    t27 = Number(calendarCount) >= 3 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        borderLeft: "1px solid #efefef"
      }
    }, getMonthTitle(2));
    $[62] = calendarCount;
    $[63] = getMonthTitle;
    $[64] = t27;
  } else {
    t27 = $[64];
  }
  var t28;
  if ($[65] !== t24 || $[66] !== t26 || $[67] !== t27) {
    t28 = /*#__PURE__*/React.createElement("div", {
      style: t22
    }, t24, t26, t27);
    $[65] = t24;
    $[66] = t26;
    $[67] = t27;
    $[68] = t28;
  } else {
    t28 = $[68];
  }
  var t29;
  if ($[69] !== customDatePickerProps || $[70] !== focusedDate || $[71] !== handleFirstDatePickerMonthChange || $[72] !== months[0]) {
    t29 = /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(PFormDateRangePickerTooltipPicker, _extends({}, customDatePickerProps, {
      ref: datePicker1Ref,
      focusedDate: focusedDate,
      month: months[0],
      onMouseEnterPickersDay: setFocusedDate,
      onMonthChange: handleFirstDatePickerMonthChange
    })));
    $[69] = customDatePickerProps;
    $[70] = focusedDate;
    $[71] = handleFirstDatePickerMonthChange;
    $[72] = months[0];
    $[73] = t29;
  } else {
    t29 = $[73];
  }
  var t30;
  if ($[74] === Symbol["for"]("react.memo_cache_sentinel")) {
    t30 = {
      borderLeft: "1px solid #efefef"
    };
    $[74] = t30;
  } else {
    t30 = $[74];
  }
  var t31;
  if ($[75] !== customDatePickerProps || $[76] !== focusedDate || $[77] !== months[1]) {
    t31 = /*#__PURE__*/React.createElement(Grid, {
      style: t30
    }, /*#__PURE__*/React.createElement(PFormDateRangePickerTooltipPicker, _extends({}, customDatePickerProps, {
      ref: datePicker2Ref,
      focusedDate: focusedDate,
      month: months[1],
      onMouseEnterPickersDay: setFocusedDate
    })));
    $[75] = customDatePickerProps;
    $[76] = focusedDate;
    $[77] = months[1];
    $[78] = t31;
  } else {
    t31 = $[78];
  }
  var t32;
  if ($[79] !== calendarCount || $[80] !== customDatePickerProps || $[81] !== focusedDate || $[82] !== months[2]) {
    t32 = Number(calendarCount) >= 3 && /*#__PURE__*/React.createElement(Grid, {
      style: {
        borderLeft: "1px solid #efefef"
      }
    }, /*#__PURE__*/React.createElement(PFormDateRangePickerTooltipPicker, _extends({}, customDatePickerProps, {
      ref: datePicker3Ref,
      focusedDate: focusedDate,
      month: months[2],
      onMouseEnterPickersDay: setFocusedDate
    })));
    $[79] = calendarCount;
    $[80] = customDatePickerProps;
    $[81] = focusedDate;
    $[82] = months[2];
    $[83] = t32;
  } else {
    t32 = $[83];
  }
  var t33;
  if ($[84] !== t29 || $[85] !== t31 || $[86] !== t32) {
    t33 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      flexWrap: "nowrap"
    }, t29, t31, t32);
    $[84] = t29;
    $[85] = t31;
    $[86] = t32;
    $[87] = t33;
  } else {
    t33 = $[87];
  }
  var t34;
  if ($[88] !== availableDate || $[89] !== handleYearSelect || $[90] !== months || $[91] !== theme || $[92] !== value || $[93] !== yearMonthSelectIndex || $[94] !== yearSelectOpen) {
    t34 = yearSelectOpen && /*#__PURE__*/React.createElement("div", {
      ref: yearSelectRef,
      className: "year-select"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      style: {
        padding: "5px 10px"
      },
      spacing: 1
    }, YEARS.map(function (y) {
      var _value$yearMonthSelec;
      var today = dayjs();
      var isToday = y === today.year();
      var isActive = y === months[yearMonthSelectIndex].year();
      var isSelected = y === ((_value$yearMonthSelec = value[yearMonthSelectIndex]) === null || _value$yearMonthSelec === void 0 ? void 0 : _value$yearMonthSelec.year());
      var disabled_0 = !isDateAvailable(dayjs(y.toString(), "YYYY"), availableDate, "year");
      return /*#__PURE__*/React.createElement(Grid, {
        key: y,
        size: {
          xs: 2
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        fullWidth: true,
        disabled: disabled_0,
        className: classNames(isSelected && "selected", isActive && "active", isToday && "today"),
        ref: isActive ? activeYearBtnRef : undefined,
        sx: {
          backgroundColor: isSelected ? theme.palette.primary.main : undefined,
          color: isSelected ? "white" : "unset",
          ":hover": {
            backgroundColor: isSelected ? darken(theme.palette.primary.main, 0.2) : darken("#fff", 0.1)
          }
        },
        onClick: function onClick() {
          return handleYearSelect(y);
        }
      }, y));
    })));
    $[88] = availableDate;
    $[89] = handleYearSelect;
    $[90] = months;
    $[91] = theme;
    $[92] = value;
    $[93] = yearMonthSelectIndex;
    $[94] = yearSelectOpen;
    $[95] = t34;
  } else {
    t34 = $[95];
  }
  var t35;
  if ($[96] !== availableDate || $[97] !== handleMonthSelect || $[98] !== monthSelectOpen || $[99] !== months || $[100] !== theme || $[101] !== value || $[102] !== yearMonthSelectIndex) {
    t35 = monthSelectOpen && /*#__PURE__*/React.createElement("div", {
      className: "month-select"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      style: {
        padding: "5px 10px"
      },
      spacing: 1
    }, MONTHS.map(function (m_0) {
      var _value$yearMonthSelec2, _value$yearMonthSelec3;
      var today_0 = dayjs();
      var isToday_0 = today_0.year() === months[yearMonthSelectIndex].year() && m_0 === today_0.month();
      var isActive_0 = m_0 === months[yearMonthSelectIndex].month();
      var isSelected_0 = ((_value$yearMonthSelec2 = value[yearMonthSelectIndex]) === null || _value$yearMonthSelec2 === void 0 ? void 0 : _value$yearMonthSelec2.year()) === months[yearMonthSelectIndex].year() && m_0 === ((_value$yearMonthSelec3 = value[yearMonthSelectIndex]) === null || _value$yearMonthSelec3 === void 0 ? void 0 : _value$yearMonthSelec3.month());
      var ym = months[yearMonthSelectIndex].year() * 100 + (m_0 + 1);
      var disabled_1 = !isDateAvailable(dayjs(ym.toString(), "YYYYMM"), availableDate, "month");
      return /*#__PURE__*/React.createElement(Grid, {
        key: m_0,
        size: {
          xs: 4
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        fullWidth: true,
        disabled: disabled_1,
        className: classNames(isSelected_0 && "selected", isActive_0 && "active", isToday_0 && "today"),
        ref: isActive_0 ? activeYearBtnRef : undefined,
        sx: {
          backgroundColor: isSelected_0 ? theme.palette.primary.main : undefined,
          color: isSelected_0 ? "white" : "unset",
          ":hover": {
            backgroundColor: isSelected_0 ? darken(theme.palette.primary.main, 0.2) : darken("#fff", 0.1)
          }
        },
        onClick: function onClick() {
          return handleMonthSelect(m_0);
        }
      }, m_0 + 1, "\uC6D4"));
    })));
    $[96] = availableDate;
    $[97] = handleMonthSelect;
    $[98] = monthSelectOpen;
    $[99] = months;
    $[100] = theme;
    $[101] = value;
    $[102] = yearMonthSelectIndex;
    $[103] = t35;
  } else {
    t35 = $[103];
  }
  var t36;
  if ($[104] !== t33 || $[105] !== t34 || $[106] !== t35) {
    t36 = /*#__PURE__*/React.createElement("div", {
      className: "date-picker-wrap"
    }, t33, t34, t35);
    $[104] = t33;
    $[105] = t34;
    $[106] = t35;
    $[107] = t36;
  } else {
    t36 = $[107];
  }
  var t37;
  if ($[108] !== t28 || $[109] !== t36) {
    t37 = /*#__PURE__*/React.createElement(Grid, {
      onMouseLeave: t21
    }, t28, t36);
    $[108] = t28;
    $[109] = t36;
    $[110] = t37;
  } else {
    t37 = $[110];
  }
  var t38;
  if ($[111] === Symbol["for"]("react.memo_cache_sentinel")) {
    t38 = {
      borderTop: "1px solid #efefef",
      padding: 10,
      textAlign: "right"
    };
    $[111] = t38;
  } else {
    t38 = $[111];
  }
  var t39;
  if ($[112] !== actionButtons) {
    t39 = /*#__PURE__*/React.createElement(Grid, {
      className: "action-buttons",
      style: t38
    }, actionButtons);
    $[112] = actionButtons;
    $[113] = t39;
  } else {
    t39 = $[113];
  }
  var t40;
  if ($[114] !== t20 || $[115] !== t37 || $[116] !== t39) {
    t40 = /*#__PURE__*/React.createElement("div", {
      className: "PFormDateRangePickerTooltipPickerContainer"
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      direction: "column"
    }, t20, t37, t39));
    $[114] = t20;
    $[115] = t37;
    $[116] = t39;
    $[117] = t40;
  } else {
    t40 = $[117];
  }
  return t40;
};var DEFAULT_VALUE$2 = [null, null];
var getFinalValue$6 = function getFinalValue(value) {
  return value || DEFAULT_VALUE$2;
};var DEFAULT_FORMAT$2 = 'YYYY-MM-DD';
var PFormDateRangePicker = function PFormDateRangePicker(t0) {
  var $ = c(251);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initLabelShrink = t0.labelShrink,
    initFullWidth = t0.fullWidth,
    name = t0.name,
    initValue = t0.value,
    initData = t0.data,
    fromLabel = t0.fromLabel,
    fromLabelIcon = t0.fromLabelIcon,
    toLabel = t0.toLabel,
    toLabelIcon = t0.toLabelIcon,
    t1 = t0.calendarCount,
    t2 = t0.format,
    t3 = t0.formValueFormat,
    allowSingleSelect = t0.allowSingleSelect,
    required = t0.required,
    requiredStart = t0.requiredStart,
    requiredEnd = t0.requiredEnd,
    readOnly = t0.readOnly,
    readOnlyStart = t0.readOnlyStart,
    readOnlyEnd = t0.readOnlyEnd,
    enableKeyboardInput = t0.enableKeyboardInput,
    initDisabled = t0.disabled,
    inputWidth = t0.inputWidth,
    exceptValue = t0.exceptValue,
    initError = t0.error,
    helperText = t0.helperText,
    t4 = t0.formValueFromNameSuffix,
    t5 = t0.formValueToNameSuffix,
    icon = t0.icon,
    startIcon = t0.startIcon,
    endIcon = t0.endIcon,
    startAdornment = t0.startAdornment,
    startStartAdornment = t0.startStartAdornment,
    endStartAdornment = t0.endStartAdornment,
    endAdornment = t0.endAdornment,
    startEndAdornment = t0.startEndAdornment,
    endEndAdornment = t0.endEndAdornment,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    minDate = t0.minDate,
    maxDate = t0.maxDate,
    initHidden = t0.hidden,
    t6 = t0.align,
    onGetActionButtons = t0.onGetActionButtons,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    className = t0.className;
  var calendarCount = t1 === undefined ? 2 : t1;
  var format = t2 === undefined ? DEFAULT_FORMAT$2 : t2;
  var formValueFormat = t3 === undefined ? DEFAULT_FORMAT$2 : t3;
  var formValueFromNameSuffix = t4 === undefined ? "_from" : t4;
  var formValueToNameSuffix = t5 === undefined ? "_to" : t5;
  var align = t6 === undefined ? "center" : t6;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initValueRef = useAutoUpdateRef(initValue);
  var containerRef = useRef(null);
  var startDateTextFieldRef = useRef(undefined);
  var endDateTextFieldRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var startInputDatePickerErrorRef = useRef(null);
  var endInputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fromError = _useState4[0],
    setFromError = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    fromErrorHelperText = _useState6[0],
    setFromErrorHelperText = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    toError = _useState8[0],
    setToError = _useState8[1];
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    toErrorHelperText = _useState0[0],
    setToErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setopen = _useState10[1];
  var _useState11 = useState("start"),
    _useState12 = _slicedToArray(_useState11, 2),
    selectType = _useState12[0],
    setSelectType = _useState12[1];
  var _useState13 = useState(_temp$a),
    _useState14 = _slicedToArray(_useState13, 2),
    months = _useState14[0],
    setMonths = _useState14[1];
  var _useState15 = useState(initError),
    _useState16 = _slicedToArray(_useState15, 2),
    error = _useState16[0],
    _setError = _useState16[1];
  var t7;
  var t8;
  if ($[0] !== initError) {
    t7 = function t7() {
      return _setError(initError);
    };
    t8 = [initError];
    $[0] = initError;
    $[1] = t7;
    $[2] = t8;
  } else {
    t7 = $[1];
    t8 = $[2];
  }
  useFirstSkipChanged(t7, t8);
  var errorRef = useAutoUpdateRef(error);
  var t9;
  if ($[3] !== errorRef) {
    t9 = function t9(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[3] = errorRef;
    $[4] = t9;
  } else {
    t9 = $[4];
  }
  var setError = t9;
  var _useState17 = useState(initData),
    _useState18 = _slicedToArray(_useState17, 2),
    data = _useState18[0],
    _setData = _useState18[1];
  var t10;
  var t11;
  if ($[5] !== initData) {
    t10 = function t10() {
      return _setData(initData);
    };
    t11 = [initData];
    $[5] = initData;
    $[6] = t10;
    $[7] = t11;
  } else {
    t10 = $[6];
    t11 = $[7];
  }
  useFirstSkipChanged(t10, t11);
  var dataRef = useAutoUpdateRef(data);
  var t12;
  if ($[8] !== dataRef) {
    t12 = function t12(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[8] = dataRef;
    $[9] = t12;
  } else {
    t12 = $[9];
  }
  var setData = t12;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState19 = useState(finalInitDisabled),
    _useState20 = _slicedToArray(_useState19, 2),
    disabled = _useState20[0],
    setDisabled = _useState20[1];
  var t13;
  var t14;
  if ($[10] !== finalInitDisabled) {
    t13 = function t13() {
      return setDisabled(finalInitDisabled);
    };
    t14 = [finalInitDisabled];
    $[10] = finalInitDisabled;
    $[11] = t13;
    $[12] = t14;
  } else {
    t13 = $[11];
    t14 = $[12];
  }
  useFirstSkipChanged(t13, t14);
  var _useState21 = useState(initHidden),
    _useState22 = _slicedToArray(_useState21, 2),
    hidden = _useState22[0],
    setHidden = _useState22[1];
  var t15;
  var t16;
  if ($[13] !== initHidden) {
    t15 = function t15() {
      return setHidden(initHidden);
    };
    t16 = [initHidden];
    $[13] = initHidden;
    $[14] = t15;
    $[15] = t16;
  } else {
    t15 = $[14];
    t16 = $[15];
  }
  useFirstSkipChanged(t15, t16);
  var t17;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t17 = function t17() {
      var _startDateTextFieldRe;
      (_startDateTextFieldRe = startDateTextFieldRef.current) === null || _startDateTextFieldRe === void 0 || _startDateTextFieldRe.focus();
    };
    $[16] = t17;
  } else {
    t17 = $[16];
  }
  var focus = t17;
  var t18;
  if ($[17] !== toError) {
    t18 = function t18() {
      if (toError) {
        var _endDateTextFieldRef$;
        (_endDateTextFieldRef$ = endDateTextFieldRef.current) === null || _endDateTextFieldRef$ === void 0 || _endDateTextFieldRef$.focus();
      } else {
        var _startDateTextFieldRe2;
        (_startDateTextFieldRe2 = startDateTextFieldRef.current) === null || _startDateTextFieldRe2 === void 0 || _startDateTextFieldRe2.focus();
      }
    };
    $[17] = toError;
    $[18] = t18;
  } else {
    t18 = $[18];
  }
  var focusValidate = t18;
  var t19;
  if ($[19] !== setError) {
    t19 = function t19(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[19] = setError;
    $[20] = t19;
  } else {
    t19 = $[20];
  }
  var setErrorErrorHelperText = t19;
  var t20;
  if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = function t20(error_1, fromErrorHelperText_0) {
      setFromError(error_1);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[21] = t20;
  } else {
    t20 = $[21];
  }
  var setFromErrorErrorHelperText = t20;
  var t21;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = function t21(error_2, toErrorHelperText_0) {
      setToError(error_2);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[22] = t21;
  } else {
    t21 = $[22];
  }
  var setToErrorErrorHelperText = t21;
  var t22;
  if ($[23] !== allowSingleSelect || $[24] !== format || $[25] !== onValidateRef || $[26] !== required || $[27] !== requiredEnd || $[28] !== requiredStart || $[29] !== setErrorErrorHelperText) {
    t22 = function t22(value) {
      var _startDateTextFieldRe3, _endDateTextFieldRef$2;
      if (required && (value[0] == null || value[1] == null)) {
        if (value[0] == null && value[1] == null) {
          setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          if (value[0] == null) {
            setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          } else {
            setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          }
        }
        return false;
      }
      if (requiredStart && value[0] == null) {
        setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (requiredEnd && value[1] == null) {
        setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (!allowSingleSelect && (value[0] || value[1]) && (value[0] == null || value[1] == null)) {
        if (value[0] == null) {
          setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        }
        return false;
      }
      var startInputValue = ((_startDateTextFieldRe3 = startDateTextFieldRef.current) === null || _startDateTextFieldRe3 === void 0 ? void 0 : _startDateTextFieldRe3.value) || "";
      var endInputValue = ((_endDateTextFieldRef$2 = endDateTextFieldRef.current) === null || _endDateTextFieldRef$2 === void 0 ? void 0 : _endDateTextFieldRef$2.value) || "";
      if (notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
        setFromErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        return false;
      }
      if (notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
        setToErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
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
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      setFromError(false);
      setToError(false);
      return true;
    };
    $[23] = allowSingleSelect;
    $[24] = format;
    $[25] = onValidateRef;
    $[26] = required;
    $[27] = requiredEnd;
    $[28] = requiredStart;
    $[29] = setErrorErrorHelperText;
    $[30] = t22;
  } else {
    t22 = $[30];
  }
  var validate = t22;
  var t23;
  if ($[31] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = function t23(month) {
      var _containerRef$current;
      setMonths([month, month.add(1, "month"), month.add(2, "month")]);
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 || _containerRef$current.activeMonth(month);
    };
    $[31] = t23;
  } else {
    t23 = $[31];
  }
  var activeMonth = t23;
  var t24;
  if ($[32] !== initValue) {
    t24 = getFinalValue$6(initValue);
    $[32] = initValue;
    $[33] = t24;
  } else {
    t24 = $[33];
  }
  var _useState23 = useState(t24),
    _useState24 = _slicedToArray(_useState23, 2),
    value_0 = _useState24[0],
    _setValue = _useState24[1];
  var t25;
  var t26;
  if ($[34] !== initValue) {
    t25 = function t25() {
      return _setValue(getFinalValue$6(initValue));
    };
    t26 = [initValue];
    $[34] = initValue;
    $[35] = t25;
    $[36] = t26;
  } else {
    t25 = $[35];
    t26 = $[36];
  }
  useFirstSkipChanged(t25, t26);
  var valueRef = useAutoUpdateRef(value_0);
  var t27;
  if ($[37] !== valueRef) {
    t27 = function t27(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[37] = valueRef;
    $[38] = t27;
  } else {
    t27 = $[38];
  }
  var setValue = t27;
  var t28;
  if ($[39] !== error || $[40] !== fromError || $[41] !== name || $[42] !== onChangeRef || $[43] !== onValueChange || $[44] !== setValue || $[45] !== toError || $[46] !== validate) {
    t28 = function t28(newValue_2) {
      var _onChangeRef$current;
      var finalValue = getFinalValue$6(newValue_2);
      setValue(finalValue);
      if (error || fromError || toError) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[39] = error;
    $[40] = fromError;
    $[41] = name;
    $[42] = onChangeRef;
    $[43] = onValueChange;
    $[44] = setValue;
    $[45] = toError;
    $[46] = validate;
    $[47] = t28;
  } else {
    t28 = $[47];
  }
  var updateValue = t28;
  var t29;
  if ($[48] !== allowSingleSelect || $[49] !== name || $[50] !== onRequestSearchSubmit || $[51] !== open || $[52] !== valueRef) {
    t29 = function t29() {
      if (open) {
        openValueRef.current = valueRef.current;
      } else {
        if (openValueRef.current) {
          var openStartDate = openValueRef.current[0];
          var openEndDate = openValueRef.current[1];
          var startDate = valueRef.current[0];
          var endDate = valueRef.current[1];
          if (allowSingleSelect || startDate != null && endDate != null) {
            var runOnRequestSearchSubmit = false;
            if (openStartDate !== startDate) {
              if (openStartDate && startDate) {
                runOnRequestSearchSubmit = !openStartDate.isSame(startDate, "date");
              } else {
                runOnRequestSearchSubmit = true;
              }
            }
            if (!runOnRequestSearchSubmit && openEndDate !== endDate) {
              if (openEndDate && endDate) {
                runOnRequestSearchSubmit = !openEndDate.isSame(endDate, "date");
              } else {
                runOnRequestSearchSubmit = true;
              }
            }
            if (runOnRequestSearchSubmit) {
              onRequestSearchSubmit(name, valueRef.current);
            }
          }
        }
      }
    };
    $[48] = allowSingleSelect;
    $[49] = name;
    $[50] = onRequestSearchSubmit;
    $[51] = open;
    $[52] = valueRef;
    $[53] = t29;
  } else {
    t29 = $[53];
  }
  var t30;
  if ($[54] !== open) {
    t30 = [open];
    $[54] = open;
    $[55] = t30;
  } else {
    t30 = $[55];
  }
  useFirstSkipEffect(t29, t30);
  var t31;
  if ($[56] !== updateValue) {
    t31 = function t31(newValue_3) {
      updateValue(newValue_3);
      setopen(false);
      setFromErrorErrorHelperText(false, undefined);
      setToErrorErrorHelperText(false, undefined);
    };
    $[56] = updateValue;
    $[57] = t31;
  } else {
    t31 = $[57];
  }
  var handleChange = t31;
  var t32;
  if ($[58] !== calendarCount || $[59] !== name || $[60] !== onRequestSearchSubmit || $[61] !== onValueChangeByUser || $[62] !== open || $[63] !== updateValue || $[64] !== value_0[0] || $[65] !== value_0[1]) {
    t32 = function t32(selectType_0, newValue_4, fromInput) {
      var finalValue_0;
      bb271: switch (selectType_0) {
        case "start":
          {
            var _value_0$;
            if ((_value_0$ = value_0[1]) !== null && _value_0$ !== void 0 && _value_0$.isBefore(newValue_4)) {
              finalValue_0 = [newValue_4, null];
              if (!fromInput) {
                setTimeout(function () {
                  var _endDateTextFieldRef$3;
                  (_endDateTextFieldRef$3 = endDateTextFieldRef.current) === null || _endDateTextFieldRef$3 === void 0 || _endDateTextFieldRef$3.focus();
                });
              }
            } else {
              finalValue_0 = [newValue_4, value_0[1]];
              if (!fromInput) {
                if (value_0[0] == null && newValue_4 != null && value_0[1] != null) {
                  setopen(false);
                } else {
                  setTimeout(function () {
                    var _endDateTextFieldRef$4;
                    (_endDateTextFieldRef$4 = endDateTextFieldRef.current) === null || _endDateTextFieldRef$4 === void 0 || _endDateTextFieldRef$4.focus();
                  });
                }
              }
            }
            setFromErrorErrorHelperText(false, undefined);
            if (fromInput && newValue_4) {
              activeMonth(newValue_4);
            }
            break bb271;
          }
        case "end":
          {
            if (newValue_4 !== null && newValue_4 !== void 0 && newValue_4.isBefore(value_0[0])) {
              finalValue_0 = [newValue_4, null];
              if (fromInput && newValue_4) {
                activeMonth(newValue_4.subtract(calendarCount - 1, "month"));
              }
              setFromErrorErrorHelperText(false, undefined);
            } else {
              finalValue_0 = [value_0[0], newValue_4];
              if (fromInput && newValue_4) {
                activeMonth(newValue_4.subtract(calendarCount - 1, "month"));
              }
              if (value_0[0]) {
                setopen(false);
                if (fromInput && !open) {
                  setTimeout(function () {
                    onRequestSearchSubmit(name, finalValue_0);
                  });
                }
              } else {
                setTimeout(function () {
                  var _startDateTextFieldRe4;
                  (_startDateTextFieldRe4 = startDateTextFieldRef.current) === null || _startDateTextFieldRe4 === void 0 || _startDateTextFieldRe4.focus();
                });
              }
              setToErrorErrorHelperText(false, undefined);
            }
          }
      }
      updateValue(finalValue_0);
      setTimeout(function () {
        onValueChangeByUser(name, finalValue_0);
      });
    };
    $[58] = calendarCount;
    $[59] = name;
    $[60] = onRequestSearchSubmit;
    $[61] = onValueChangeByUser;
    $[62] = open;
    $[63] = updateValue;
    $[64] = value_0[0];
    $[65] = value_0[1];
    $[66] = t32;
  } else {
    t32 = $[66];
  }
  var handleValueChange = t32;
  var t33;
  if ($[67] !== handleValueChange) {
    t33 = function t33(selectType_1, newValue_5) {
      var error_3 = false;
      if (newValue_5) {
        if (newValue_5.isValid()) {
          handleValueChange(selectType_1, newValue_5, true);
        } else {
          error_3 = true;
        }
      } else {
        handleValueChange(selectType_1, newValue_5, true);
      }
      bb371: switch (selectType_1) {
        case "start":
          {
            setFromError(error_3);
            break bb371;
          }
        case "end":
          {
            setToError(error_3);
          }
      }
    };
    $[67] = handleValueChange;
    $[68] = t33;
  } else {
    t33 = $[68];
  }
  var handleInputDatePickerChange = t33;
  var t34;
  if ($[69] === Symbol["for"]("react.memo_cache_sentinel")) {
    t34 = function t34() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[69] = t34;
  } else {
    t34 = $[69];
  }
  var handleContainerFocus = t34;
  var t35;
  if ($[70] === Symbol["for"]("react.memo_cache_sentinel")) {
    t35 = function t35() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      if (!mouseDownTimeRef.current || new Date().getTime() - mouseDownTimeRef.current > 100) {
        closeTimeoutRef.current = setTimeout(function () {
          closeTimeoutRef.current = undefined;
          setopen(false);
        }, 10);
      }
    };
    $[70] = t35;
  } else {
    t35 = $[70];
  }
  var handleContainerBlur = t35;
  var t36;
  if ($[71] === Symbol["for"]("react.memo_cache_sentinel")) {
    t36 = function t36() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[71] = t36;
  } else {
    t36 = $[71];
  }
  var handleContainerMouseDown = t36;
  var t37;
  if ($[72] !== calendarCount || $[73] !== disabled || $[74] !== readOnly || $[75] !== valueRef) {
    t37 = function t37(selectType_2) {
      if (readOnly || disabled) {
        return;
      }
      var startValue = valueRef.current[0];
      var endValue = valueRef.current[1];
      setopen(true);
      setSelectType(selectType_2);
      if (startValue && endValue) {
        bb402: switch (selectType_2) {
          case "start":
            {
              activeMonth(startValue);
              break bb402;
            }
          case "end":
            {
              if (startValue.isSame(endValue, "month")) {
                activeMonth(startValue);
              } else {
                if (endValue.diff(startValue, "month") > calendarCount - 1) {
                  activeMonth(endValue.subtract(calendarCount - 1, "month"));
                } else {
                  activeMonth(startValue);
                }
              }
            }
        }
      } else {
        if (startValue) {
          activeMonth(startValue);
        } else {
          if (endValue) {
            activeMonth(endValue);
          }
        }
      }
    };
    $[72] = calendarCount;
    $[73] = disabled;
    $[74] = readOnly;
    $[75] = valueRef;
    $[76] = t37;
  } else {
    t37 = $[76];
  }
  var handleInputDatePickerFocus = t37;
  var t38;
  if ($[77] !== name) {
    t38 = function t38() {
      return name;
    };
    $[77] = name;
    $[78] = t38;
  } else {
    t38 = $[78];
  }
  var t39;
  if ($[79] !== initValueRef) {
    t39 = function t39() {
      return getFinalValue$6(initValueRef.current);
    };
    $[79] = initValueRef;
    $[80] = t39;
  } else {
    t39 = $[80];
  }
  var t40;
  if ($[81] !== initValueRef || $[82] !== updateValue) {
    t40 = function t40() {
      return updateValue(initValueRef.current);
    };
    $[81] = initValueRef;
    $[82] = updateValue;
    $[83] = t40;
  } else {
    t40 = $[83];
  }
  var t41;
  if ($[84] !== valueRef) {
    t41 = function t41() {
      return valueRef.current;
    };
    $[84] = valueRef;
    $[85] = t41;
  } else {
    t41 = $[85];
  }
  var t42;
  if ($[86] !== dataRef) {
    t42 = function t42() {
      return dataRef.current;
    };
    $[86] = dataRef;
    $[87] = t42;
  } else {
    t42 = $[87];
  }
  var t43;
  if ($[88] !== valueRef) {
    t43 = function t43() {
      return valueRef.current[0];
    };
    $[88] = valueRef;
    $[89] = t43;
  } else {
    t43 = $[89];
  }
  var t44;
  if ($[90] !== updateValue || $[91] !== valueRef) {
    t44 = function t44(value_1) {
      return updateValue([value_1, valueRef.current[1]]);
    };
    $[90] = updateValue;
    $[91] = valueRef;
    $[92] = t44;
  } else {
    t44 = $[92];
  }
  var t45;
  if ($[93] !== valueRef) {
    t45 = function t45() {
      return valueRef.current[1];
    };
    $[93] = valueRef;
    $[94] = t45;
  } else {
    t45 = $[94];
  }
  var t46;
  if ($[95] !== updateValue || $[96] !== valueRef) {
    t46 = function t46(value_2) {
      return updateValue([valueRef.current[0], value_2]);
    };
    $[95] = updateValue;
    $[96] = valueRef;
    $[97] = t46;
  } else {
    t46 = $[97];
  }
  var t47;
  if ($[98] !== exceptValue) {
    t47 = function t47() {
      return !!exceptValue;
    };
    $[98] = exceptValue;
    $[99] = t47;
  } else {
    t47 = $[99];
  }
  var t48;
  if ($[100] !== disabled) {
    t48 = function t48() {
      return !!disabled;
    };
    $[100] = disabled;
    $[101] = t48;
  } else {
    t48 = $[101];
  }
  var t49;
  if ($[102] !== hidden) {
    t49 = function t49() {
      return !!hidden;
    };
    $[102] = hidden;
    $[103] = t49;
  } else {
    t49 = $[103];
  }
  var t50;
  if ($[104] !== validate || $[105] !== valueRef) {
    t50 = function t50() {
      return validate(valueRef.current);
    };
    $[104] = validate;
    $[105] = valueRef;
    $[106] = t50;
  } else {
    t50 = $[106];
  }
  var t51;
  if ($[107] !== formValueFormat) {
    t51 = function t51() {
      return formValueFormat;
    };
    $[107] = formValueFormat;
    $[108] = t51;
  } else {
    t51 = $[108];
  }
  var t52;
  if ($[109] !== formValueFromNameSuffix) {
    t52 = function t52() {
      return formValueFromNameSuffix;
    };
    $[109] = formValueFromNameSuffix;
    $[110] = t52;
  } else {
    t52 = $[110];
  }
  var t53;
  if ($[111] !== formValueToNameSuffix) {
    t53 = function t53() {
      return formValueToNameSuffix;
    };
    $[111] = formValueToNameSuffix;
    $[112] = t53;
  } else {
    t53 = $[112];
  }
  var t54;
  if ($[113] !== formValueFromNameSuffix || $[114] !== name) {
    t54 = function t54() {
      return "".concat(name).concat(formValueFromNameSuffix);
    };
    $[113] = formValueFromNameSuffix;
    $[114] = name;
    $[115] = t54;
  } else {
    t54 = $[115];
  }
  var t55;
  if ($[116] !== formValueToNameSuffix || $[117] !== name) {
    t55 = function t55() {
      return "".concat(name).concat(formValueToNameSuffix);
    };
    $[116] = formValueToNameSuffix;
    $[117] = name;
    $[118] = t55;
  } else {
    t55 = $[118];
  }
  var t56;
  if ($[119] !== focusValidate || $[120] !== setData || $[121] !== setErrorErrorHelperText || $[122] !== t38 || $[123] !== t39 || $[124] !== t40 || $[125] !== t41 || $[126] !== t42 || $[127] !== t43 || $[128] !== t44 || $[129] !== t45 || $[130] !== t46 || $[131] !== t47 || $[132] !== t48 || $[133] !== t49 || $[134] !== t50 || $[135] !== t51 || $[136] !== t52 || $[137] !== t53 || $[138] !== t54 || $[139] !== t55 || $[140] !== updateValue) {
    t56 = {
      getType: _temp2,
      getName: t38,
      getReset: t39,
      reset: t40,
      getValue: t41,
      setValue: updateValue,
      getData: t42,
      setData: setData,
      getFromValue: t43,
      setFromValue: t44,
      getToValue: t45,
      setToValue: t46,
      isExceptValue: t47,
      isDisabled: t48,
      setDisabled: setDisabled,
      isHidden: t49,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focusValidate,
      validate: t50,
      setError: setErrorErrorHelperText,
      getFormValueFormat: t51,
      getFormValueFromNameSuffix: t52,
      getFormValueToNameSuffix: t53,
      getFormValueFromName: t54,
      getFormValueToName: t55
    };
    $[119] = focusValidate;
    $[120] = setData;
    $[121] = setErrorErrorHelperText;
    $[122] = t38;
    $[123] = t39;
    $[124] = t40;
    $[125] = t41;
    $[126] = t42;
    $[127] = t43;
    $[128] = t44;
    $[129] = t45;
    $[130] = t46;
    $[131] = t47;
    $[132] = t48;
    $[133] = t49;
    $[134] = t50;
    $[135] = t51;
    $[136] = t52;
    $[137] = t53;
    $[138] = t54;
    $[139] = t55;
    $[140] = updateValue;
    $[141] = t56;
  } else {
    t56 = $[141];
  }
  var commands = t56;
  var t57;
  if ($[142] !== id || $[143] !== onAddValueItem) {
    t57 = function t57(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[142] = id;
    $[143] = onAddValueItem;
    $[144] = t57;
  } else {
    t57 = $[144];
  }
  var t58;
  if ($[145] !== id || $[146] !== onRemoveValueItem) {
    t58 = function t58() {
      return onRemoveValueItem(id);
    };
    $[145] = id;
    $[146] = onRemoveValueItem;
    $[147] = t58;
  } else {
    t58 = $[147];
  }
  useForwardRef(ref, commands, t57, t58);
  var t59;
  if ($[148] !== align || $[149] !== color || $[150] !== disableFuture || $[151] !== disablePast || $[152] !== disabled || $[153] !== format || $[154] !== fullWidth || $[155] !== labelShrink || $[156] !== maxDate || $[157] !== minDate || $[158] !== size || $[159] !== variant) {
    t59 = {
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
      maxDate: maxDate
    };
    $[148] = align;
    $[149] = color;
    $[150] = disableFuture;
    $[151] = disablePast;
    $[152] = disabled;
    $[153] = format;
    $[154] = fullWidth;
    $[155] = labelShrink;
    $[156] = maxDate;
    $[157] = minDate;
    $[158] = size;
    $[159] = variant;
    $[160] = t59;
  } else {
    t59 = $[160];
  }
  var inputDatePickerProps = t59;
  var t60;
  if ($[161] !== fullWidth || $[162] !== inputWidth) {
    t60 = inputWidth != null ? {
      width: inputWidth
    } : {
      width: fullWidth ? undefined : 150
    };
    $[161] = fullWidth;
    $[162] = inputWidth;
    $[163] = t60;
  } else {
    t60 = $[163];
  }
  var inputStyle = t60;
  var t61;
  if ($[164] === Symbol["for"]("react.memo_cache_sentinel")) {
    t61 = function t61() {
      return setopen(false);
    };
    $[164] = t61;
  } else {
    t61 = $[164];
  }
  var t62;
  if ($[165] !== className) {
    t62 = classNames(className, "PFormDateRangePicker");
    $[165] = className;
    $[166] = t62;
  } else {
    t62 = $[166];
  }
  var t63 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t64 = fullWidth ? 1 : undefined;
  var t65;
  if ($[167] !== t63 || $[168] !== t64) {
    t65 = {
      display: t63,
      flex: t64
    };
    $[167] = t63;
    $[168] = t64;
    $[169] = t65;
  } else {
    t65 = $[169];
  }
  var t66 = error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText ? 8 : -14;
  var t67;
  if ($[170] !== t66) {
    t67 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t66]
          }
        }]
      }
    };
    $[170] = t66;
    $[171] = t67;
  } else {
    t67 = $[171];
  }
  var t68;
  if ($[172] === Symbol["for"]("react.memo_cache_sentinel")) {
    t68 = {
      display: "flex"
    };
    $[172] = t68;
  } else {
    t68 = $[172];
  }
  var t69;
  if ($[173] !== calendarCount || $[174] !== disableFuture || $[175] !== disablePast || $[176] !== handleChange || $[177] !== handleValueChange || $[178] !== maxDate || $[179] !== minDate || $[180] !== months || $[181] !== onGetActionButtons || $[182] !== selectType || $[183] !== value_0) {
    t69 = /*#__PURE__*/React.createElement("div", {
      style: t68
    }, /*#__PURE__*/React.createElement(PFormDateRangePickerTooltipPickerContainer, {
      ref: containerRef,
      calendarCount: calendarCount,
      selectType: selectType,
      value: value_0,
      months: months,
      disablePast: disablePast,
      disableFuture: disableFuture,
      minDate: minDate,
      maxDate: maxDate,
      onGetActionButtons: onGetActionButtons,
      onChange: handleChange,
      onValueChange: handleValueChange,
      onMonthsChange: setMonths
    }));
    $[173] = calendarCount;
    $[174] = disableFuture;
    $[175] = disablePast;
    $[176] = handleChange;
    $[177] = handleValueChange;
    $[178] = maxDate;
    $[179] = minDate;
    $[180] = months;
    $[181] = onGetActionButtons;
    $[182] = selectType;
    $[183] = value_0;
    $[184] = t69;
  } else {
    t69 = $[184];
  }
  var t70 = error || fromError;
  var t71 = focused || open && selectType === "start";
  var t72 = required || requiredStart;
  var t73 = readOnly || readOnlyStart;
  var t74 = startIcon || icon;
  var t75 = startStartAdornment || startAdornment;
  var t76 = startEndAdornment || endAdornment;
  var t77;
  if ($[185] !== handleInputDatePickerChange) {
    t77 = function t77(newValue_6) {
      return handleInputDatePickerChange("start", newValue_6);
    };
    $[185] = handleInputDatePickerChange;
    $[186] = t77;
  } else {
    t77 = $[186];
  }
  var t78;
  if ($[187] !== handleInputDatePickerFocus) {
    t78 = function t78() {
      return handleInputDatePickerFocus("start");
    };
    $[187] = handleInputDatePickerFocus;
    $[188] = t78;
  } else {
    t78 = $[188];
  }
  var t79;
  if ($[189] === Symbol["for"]("react.memo_cache_sentinel")) {
    t79 = function t79(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[189] = t79;
  } else {
    t79 = $[189];
  }
  var t80;
  if ($[190] !== enableKeyboardInput || $[191] !== fromLabel || $[192] !== fromLabelIcon || $[193] !== inputDatePickerProps || $[194] !== inputStyle || $[195] !== t70 || $[196] !== t71 || $[197] !== t72 || $[198] !== t73 || $[199] !== t74 || $[200] !== t75 || $[201] !== t76 || $[202] !== t77 || $[203] !== t78 || $[204] !== value_0[0]) {
    t80 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      value: value_0[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t70,
      focused: t71,
      required: t72,
      readOnly: t73,
      enableKeyboardInput: enableKeyboardInput,
      icon: t74,
      startAdornment: t75,
      endAdornment: t76,
      inputRef: startDateTextFieldRef,
      onChange: t77,
      onFocus: t78,
      onError: t79
    })));
    $[190] = enableKeyboardInput;
    $[191] = fromLabel;
    $[192] = fromLabelIcon;
    $[193] = inputDatePickerProps;
    $[194] = inputStyle;
    $[195] = t70;
    $[196] = t71;
    $[197] = t72;
    $[198] = t73;
    $[199] = t74;
    $[200] = t75;
    $[201] = t76;
    $[202] = t77;
    $[203] = t78;
    $[204] = value_0[0];
    $[205] = t80;
  } else {
    t80 = $[205];
  }
  var t81;
  if ($[206] === Symbol["for"]("react.memo_cache_sentinel")) {
    t81 = /*#__PURE__*/React.createElement(Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[206] = t81;
  } else {
    t81 = $[206];
  }
  var t82 = error || toError;
  var t83 = focused || open && selectType === "end";
  var t84 = required || requiredEnd;
  var t85 = readOnly || readOnlyEnd;
  var t86 = endIcon || icon;
  var t87 = endStartAdornment || startAdornment;
  var t88 = endEndAdornment || endAdornment;
  var t89;
  if ($[207] !== handleInputDatePickerChange) {
    t89 = function t89(newValue_7) {
      return handleInputDatePickerChange("end", newValue_7);
    };
    $[207] = handleInputDatePickerChange;
    $[208] = t89;
  } else {
    t89 = $[208];
  }
  var t90;
  if ($[209] !== handleInputDatePickerFocus) {
    t90 = function t90() {
      return handleInputDatePickerFocus("end");
    };
    $[209] = handleInputDatePickerFocus;
    $[210] = t90;
  } else {
    t90 = $[210];
  }
  var t91;
  if ($[211] === Symbol["for"]("react.memo_cache_sentinel")) {
    t91 = function t91(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[211] = t91;
  } else {
    t91 = $[211];
  }
  var t92;
  if ($[212] !== enableKeyboardInput || $[213] !== inputDatePickerProps || $[214] !== inputStyle || $[215] !== t82 || $[216] !== t83 || $[217] !== t84 || $[218] !== t85 || $[219] !== t86 || $[220] !== t87 || $[221] !== t88 || $[222] !== t89 || $[223] !== t90 || $[224] !== toLabel || $[225] !== toLabelIcon || $[226] !== value_0[1]) {
    t92 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      value: value_0[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t82,
      focused: t83,
      required: t84,
      readOnly: t85,
      enableKeyboardInput: enableKeyboardInput,
      icon: t86,
      startAdornment: t87,
      endAdornment: t88,
      inputRef: endDateTextFieldRef,
      onChange: t89,
      onFocus: t90,
      onError: t91
    })));
    $[212] = enableKeyboardInput;
    $[213] = inputDatePickerProps;
    $[214] = inputStyle;
    $[215] = t82;
    $[216] = t83;
    $[217] = t84;
    $[218] = t85;
    $[219] = t86;
    $[220] = t87;
    $[221] = t88;
    $[222] = t89;
    $[223] = t90;
    $[224] = toLabel;
    $[225] = toLabelIcon;
    $[226] = value_0[1];
    $[227] = t92;
  } else {
    t92 = $[227];
  }
  var t93;
  if ($[228] !== t80 || $[229] !== t92) {
    t93 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      alignItems: "center"
    }, t80, t81, t92);
    $[228] = t80;
    $[229] = t92;
    $[230] = t93;
  } else {
    t93 = $[230];
  }
  var t94;
  if ($[231] !== open || $[232] !== t67 || $[233] !== t69 || $[234] !== t93) {
    t94 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t67,
      title: t69
    }, t93);
    $[231] = open;
    $[232] = t67;
    $[233] = t69;
    $[234] = t93;
    $[235] = t94;
  } else {
    t94 = $[235];
  }
  var t95;
  if ($[236] !== error || $[237] !== errorHelperText || $[238] !== formColWithHelperText || $[239] !== fromError || $[240] !== fromErrorHelperText || $[241] !== helperText || $[242] !== toError || $[243] !== toErrorHelperText || $[244] !== variant) {
    t95 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[236] = error;
    $[237] = errorHelperText;
    $[238] = formColWithHelperText;
    $[239] = fromError;
    $[240] = fromErrorHelperText;
    $[241] = helperText;
    $[242] = toError;
    $[243] = toErrorHelperText;
    $[244] = variant;
    $[245] = t95;
  } else {
    t95 = $[245];
  }
  var t96;
  if ($[246] !== t62 || $[247] !== t65 || $[248] !== t94 || $[249] !== t95) {
    t96 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t61
    }, /*#__PURE__*/React.createElement("div", {
      className: t62,
      style: t65,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t94, t95)));
    $[246] = t62;
    $[247] = t65;
    $[248] = t94;
    $[249] = t95;
    $[250] = t96;
  } else {
    t96 = $[250];
  }
  return t96;
};
function _temp$a() {
  var now = dayjs();
  return [now, now.add(1, "month"), now.add(2, "month")];
}
function _temp2() {
  return "PFormDateRangePicker";
}var LinkDialog = function LinkDialog(t0) {
  var $ = c(31);
  var open = t0.open,
    onConfirm = t0.onConfirm,
    onCancel = t0.onCancel,
    onClose = t0.onClose;
  var inputRef = useRef(null);
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var t1;
  var t2;
  if ($[0] !== open) {
    t1 = function t1() {
      if (!open) {
        setValue("");
      }
    };
    t2 = [open];
    $[0] = open;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useFirstSkipChanged(t1, t2);
  var t3;
  if ($[3] !== onClose || $[4] !== onConfirm || $[5] !== value) {
    t3 = function t3() {
      var _inputRef$current;
      if ((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.validate()) {
        onConfirm && onConfirm(value);
        onClose && onClose();
      } else {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.focus();
      }
    };
    $[3] = onClose;
    $[4] = onConfirm;
    $[5] = value;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var handleSubmit = t3;
  var t4;
  if ($[7] !== onCancel || $[8] !== onClose) {
    t4 = function t4() {
      onCancel && onCancel();
      onClose && onClose();
    };
    $[7] = onCancel;
    $[8] = onClose;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var handleCancel = t4;
  var t5 = !!open;
  var t6;
  if ($[10] !== onClose || $[11] !== value) {
    t6 = function t6(e, reason) {
      if (reason === "backdropClick") {
        if (empty(value)) {
          onClose && onClose();
        }
      }
    };
    $[10] = onClose;
    $[11] = value;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  var t7;
  if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = /*#__PURE__*/React.createElement(DialogTitle, null, "\uD30C\uC77C \uB9C1\uD06C");
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  var t8;
  if ($[14] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/React.createElement("div", null, "\uD30C\uC77C\uC758 \uB9C1\uD06C URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  var t9;
  if ($[15] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(ref) {
      if (inputRef.current == null && ref !== null) {
        ref.focus();
      }
      inputRef.current = ref;
    };
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var t10;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = {
      marginTop: 15
    };
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  var t11;
  if ($[17] !== value) {
    t11 = /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(Box, null, t8, /*#__PURE__*/React.createElement(PFormUrl, {
      ref: t9,
      name: "form-file-link-url",
      label: "\uB9C1\uD06C URL",
      value: value,
      required: true,
      fullWidth: true,
      style: t10,
      onChange: setValue
    })));
    $[17] = value;
    $[18] = t11;
  } else {
    t11 = $[18];
  }
  var t12;
  if ($[19] !== handleCancel) {
    t12 = /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      onClick: handleCancel
    }, "\uCDE8\uC18C");
    $[19] = handleCancel;
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  var t13;
  if ($[21] !== handleSubmit) {
    t13 = /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      onClick: handleSubmit
    }, "\uD655\uC778");
    $[21] = handleSubmit;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  var t14;
  if ($[23] !== t12 || $[24] !== t13) {
    t14 = /*#__PURE__*/React.createElement(DialogActions, null, t12, t13);
    $[23] = t12;
    $[24] = t13;
    $[25] = t14;
  } else {
    t14 = $[25];
  }
  var t15;
  if ($[26] !== t11 || $[27] !== t14 || $[28] !== t5 || $[29] !== t6) {
    t15 = /*#__PURE__*/React.createElement(Dialog, {
      className: "color-primary",
      open: t5,
      maxWidth: "sm",
      fullWidth: true,
      onClose: t6
    }, t7, t11, t14);
    $[26] = t11;
    $[27] = t14;
    $[28] = t5;
    $[29] = t6;
    $[30] = t15;
  } else {
    t15 = $[30];
  }
  return t15;
};var _templateObject$1;
var StyledPButton = styled(PButton)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  min-width: 0;\n\n  &.input-file-btn {\n    padding: 0 !important;\n    position: relative;\n\n    .PFlexRowBox {\n      height: 100%;\n      label {\n        cursor: pointer;\n        display: flex;\n        flex: 1;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center;\n        padding: 0 10px;\n\n        .PIcon {\n          margin-right: 0.2em;\n        }\n      }\n    }\n  }\n\n  &.hidden-label.input-file-btn .PFlexRowBox label .PIcon {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  &.MuiButton-outlined {\n    &:first-of-type:not(:last-of-type) {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    &:last-of-type:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:first-of-type):not(:last-of-type) {\n      border-right: 0;\n      border-radius: 0;\n    }\n  }\n"])));var getFinalValue$5 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormFile .control-wrap{display:inline-flex}.PFormFile .control-wrap .file-name-wrap .file-name{min-width:350px}.PFormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root{padding-right:7px}.PFormFile .control-wrap .input-file{display:none}.PFormFile .control-wrap .input-file-wrap{display:flex}.PFormFile .control-wrap .input-file-wrap .input-file-btn:not(.hidden-label) .PIcon{margin-left:-3px}.PFormFile.full-width .control-wrap{display:flex}.PFormFile.full-width .control-wrap .file-name-wrap{flex:1}.PFormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root{padding-right:0}.PFormFile:not(.hide-file-name).variant-outlined .form-file-btn label,.PFormFile:not(.hide-file-name).variant-filled .form-file-btn label{padding-top:10px;padding-bottom:10px}.PFormFile:not(.hide-file-name).variant-standard .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile:not(.hide-file-name).size-small .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn{height:44px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn{height:26px}.PFormFile.hide-file-name.with-label.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-filled .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn{height:24px}.PFormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn{height:31px}.PFormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn{height:26px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-outlined .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-filled .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-standard .form-file-btn{height:28px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-outlined .form-file-btn{height:24px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-filled .form-file-btn{height:31px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-standard .form-file-btn{height:26px}");var FILE_VALUE = '';
var PFormFile = function PFormFile(t0) {
  var $ = c(201);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initLabelShrink = t0.labelShrink,
    initFullWidth = t0.fullWidth,
    accept = t0.accept,
    hideUrl = t0.hideUrl,
    tabIndex = t0.tabIndex,
    uploadLabel = t0.uploadLabel,
    uploadTabIndex = t0.uploadTabIndex,
    hideUpload = t0.hideUpload,
    hideUploadLabel = t0.hideUploadLabel,
    linkLabel = t0.linkLabel,
    linkTabIndex = t0.linkTabIndex,
    hideLink = t0.hideLink,
    hideLinkLabel = t0.hideLinkLabel,
    removeLabel = t0.removeLabel,
    removeTabIndex = t0.removeTabIndex,
    hideRemove = t0.hideRemove,
    hideRemoveLabel = t0.hideRemoveLabel,
    maxFileSize = t0.maxFileSize,
    preview = t0.preview,
    initHidden = t0.hidden,
    onFile = t0.onFile,
    onLink = t0.onLink,
    name = t0.name,
    labelIcon = t0.labelIcon,
    initLabel = t0.label,
    required = t0.required,
    readOnly = t0.readOnly,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    t1 = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    className = t0.className;
  var initValue = t1 === undefined ? "" : t1;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    onAddValueItem = _useFormState.onAddValueItem,
    onValueChange = _useFormState.onValueChange,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChangeByUser = _useFormState.onValueChangeByUser;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var textFieldRef = useRef(null);
  var fileUploadBtnRef = useRef(null);
  var linkBtnRef = useRef(null);
  var initValueRef = useAutoUpdateRef(initValue);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpenLinkDialog = _useState4[0],
    setIsOpenLinkDialog = _useState4[1];
  var t2;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {
      open: false
    };
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  var _useState5 = useState(t2),
    _useState6 = _slicedToArray(_useState5, 2),
    alertDialogProps = _useState6[0],
    setAlertDialogProps = _useState6[1];
  var _useState7 = useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  var t3;
  var t4;
  if ($[1] !== initError) {
    t3 = function t3() {
      return _setError(initError);
    };
    t4 = [initError];
    $[1] = initError;
    $[2] = t3;
    $[3] = t4;
  } else {
    t3 = $[2];
    t4 = $[3];
  }
  useFirstSkipChanged(t3, t4);
  var errorRef = useAutoUpdateRef(error);
  var t5;
  if ($[4] !== errorRef) {
    t5 = function t5(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[4] = errorRef;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var setError = t5;
  var _useState9 = useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  var t6;
  var t7;
  if ($[6] !== initData) {
    t6 = function t6() {
      return _setData(initData);
    };
    t7 = [initData];
    $[6] = initData;
    $[7] = t6;
    $[8] = t7;
  } else {
    t6 = $[7];
    t7 = $[8];
  }
  useFirstSkipChanged(t6, t7);
  var dataRef = useAutoUpdateRef(data);
  var t8;
  if ($[9] !== dataRef) {
    t8 = function t8(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[9] = dataRef;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  var setData = t8;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  var t10;
  var t9;
  if ($[11] !== finalInitDisabled) {
    t9 = function t9() {
      return setDisabled(finalInitDisabled);
    };
    t10 = [finalInitDisabled];
    $[11] = finalInitDisabled;
    $[12] = t10;
    $[13] = t9;
  } else {
    t10 = $[12];
    t9 = $[13];
  }
  useFirstSkipChanged(t9, t10);
  var _useState11 = useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  var t11;
  var t12;
  if ($[14] !== initHidden) {
    t11 = function t11() {
      return setHidden(initHidden);
    };
    t12 = [initHidden];
    $[14] = initHidden;
    $[15] = t11;
    $[16] = t12;
  } else {
    t11 = $[15];
    t12 = $[16];
  }
  useFirstSkipChanged(t11, t12);
  var t13;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = {
      handleWidth: false
    };
    $[17] = t13;
  } else {
    t13 = $[17];
  }
  var _useResizeDetector = useResizeDetector(t13),
    innerRef = _useResizeDetector.ref,
    height = _useResizeDetector.height;
  var t14;
  if ($[18] !== setError) {
    t14 = function t14(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[18] = setError;
    $[19] = t14;
  } else {
    t14 = $[19];
  }
  var setErrorErrorHelperText = t14;
  var t15;
  if ($[20] !== onValidateRef || $[21] !== required || $[22] !== setErrorErrorHelperText) {
    t15 = function t15(value) {
      var isEmptyValue = false;
      if (value) {
        var d = document.createElement("div");
        d.innerHTML = value;
        var text = d.textContent || d.innerText;
        isEmptyValue = empty(text.trim());
      }
      if (required && (isEmptyValue || empty(value))) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[20] = onValidateRef;
    $[21] = required;
    $[22] = setErrorErrorHelperText;
    $[23] = t15;
  } else {
    t15 = $[23];
  }
  var validate = t15;
  var t16;
  if ($[24] !== hideUpload || $[25] !== hideUrl) {
    t16 = function t16() {
      if (hideUrl) {
        if (hideUpload) {
          var _linkBtnRef$current;
          (_linkBtnRef$current = linkBtnRef.current) === null || _linkBtnRef$current === void 0 || _linkBtnRef$current.focus();
        } else {
          var _fileUploadBtnRef$cur;
          (_fileUploadBtnRef$cur = fileUploadBtnRef.current) === null || _fileUploadBtnRef$cur === void 0 || _fileUploadBtnRef$cur.focus();
        }
      } else {
        var _textFieldRef$current;
        (_textFieldRef$current = textFieldRef.current) === null || _textFieldRef$current === void 0 || _textFieldRef$current.focus();
      }
    };
    $[24] = hideUpload;
    $[25] = hideUrl;
    $[26] = t16;
  } else {
    t16 = $[26];
  }
  var focus = t16;
  var t17;
  if ($[27] !== maxFileSize) {
    t17 = function t17(file) {
      if (maxFileSize) {
        return new Promise(function (resolve, reject) {
          if (file instanceof File) {
            if (file.size > maxFileSize) {
              setAlertDialogProps({
                open: true,
                color: "error",
                title: "\uD30C\uC77C \uC0AC\uC774\uC988",
                content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
                  color: "error"
                }, getFileSizeText(maxFileSize), " \uC774\uD558\uC758 \uD30C\uC77C\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
                  style: {
                    opacity: 0.7
                  }
                }, "(\uC120\uD0DD\uD55C \uD30C\uC77C \uC0AC\uC774\uC988 : ", getFileSizeText(file.size), ")"))
              });
              reject();
            } else {
              resolve();
            }
          } else {
            resolve();
          }
        });
      } else {
        return Promise.resolve();
      }
    };
    $[27] = maxFileSize;
    $[28] = t17;
  } else {
    t17 = $[28];
  }
  var fileSizeCheck = t17;
  var t18;
  if ($[29] !== initValue) {
    t18 = getFinalValue$5(initValue);
    $[29] = initValue;
    $[30] = t18;
  } else {
    t18 = $[30];
  }
  var _useState13 = useState(t18),
    _useState14 = _slicedToArray(_useState13, 2),
    value_0 = _useState14[0],
    _setValue = _useState14[1];
  var t19;
  var t20;
  if ($[31] !== initValue) {
    t19 = function t19() {
      return _setValue(getFinalValue$5(initValue));
    };
    t20 = [initValue];
    $[31] = initValue;
    $[32] = t19;
    $[33] = t20;
  } else {
    t19 = $[32];
    t20 = $[33];
  }
  useFirstSkipChanged(t19, t20);
  var valueRef = useAutoUpdateRef(value_0);
  var t21;
  if ($[34] !== valueRef) {
    t21 = function t21(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[34] = valueRef;
    $[35] = t21;
  } else {
    t21 = $[35];
  }
  var setValue = t21;
  var t22;
  if ($[36] !== error || $[37] !== name || $[38] !== onChangeRef || $[39] !== onValueChange || $[40] !== setValue || $[41] !== validate) {
    t22 = function t22(newValue_2) {
      var _onChangeRef$current;
      var finalValue = getFinalValue$5(newValue_2);
      setValue(finalValue);
      if (error) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[36] = error;
    $[37] = name;
    $[38] = onChangeRef;
    $[39] = onValueChange;
    $[40] = setValue;
    $[41] = validate;
    $[42] = t22;
  } else {
    t22 = $[42];
  }
  var updateValue = t22;
  var t23;
  if ($[43] !== name) {
    t23 = function t23() {
      return name;
    };
    $[43] = name;
    $[44] = t23;
  } else {
    t23 = $[44];
  }
  var t24;
  if ($[45] !== initValueRef) {
    t24 = function t24() {
      return getFinalValue$5(initValueRef.current);
    };
    $[45] = initValueRef;
    $[46] = t24;
  } else {
    t24 = $[46];
  }
  var t25;
  if ($[47] !== initValueRef || $[48] !== updateValue) {
    t25 = function t25() {
      return updateValue(initValueRef.current);
    };
    $[47] = initValueRef;
    $[48] = updateValue;
    $[49] = t25;
  } else {
    t25 = $[49];
  }
  var t26;
  if ($[50] !== valueRef) {
    t26 = function t26() {
      return valueRef.current;
    };
    $[50] = valueRef;
    $[51] = t26;
  } else {
    t26 = $[51];
  }
  var t27;
  if ($[52] !== dataRef) {
    t27 = function t27() {
      return dataRef.current;
    };
    $[52] = dataRef;
    $[53] = t27;
  } else {
    t27 = $[53];
  }
  var t28;
  if ($[54] !== exceptValue) {
    t28 = function t28() {
      return !!exceptValue;
    };
    $[54] = exceptValue;
    $[55] = t28;
  } else {
    t28 = $[55];
  }
  var t29;
  if ($[56] !== disabled) {
    t29 = function t29() {
      return !!disabled;
    };
    $[56] = disabled;
    $[57] = t29;
  } else {
    t29 = $[57];
  }
  var t30;
  if ($[58] !== hidden) {
    t30 = function t30() {
      return !!hidden;
    };
    $[58] = hidden;
    $[59] = t30;
  } else {
    t30 = $[59];
  }
  var t31;
  if ($[60] !== validate || $[61] !== valueRef) {
    t31 = function t31() {
      return validate(valueRef.current);
    };
    $[60] = validate;
    $[61] = valueRef;
    $[62] = t31;
  } else {
    t31 = $[62];
  }
  var t32;
  if ($[63] !== focus || $[64] !== setData || $[65] !== setErrorErrorHelperText || $[66] !== t23 || $[67] !== t24 || $[68] !== t25 || $[69] !== t26 || $[70] !== t27 || $[71] !== t28 || $[72] !== t29 || $[73] !== t30 || $[74] !== t31 || $[75] !== updateValue) {
    t32 = {
      getType: _temp$9,
      getName: t23,
      getReset: t24,
      reset: t25,
      getValue: t26,
      setValue: updateValue,
      getData: t27,
      setData: setData,
      isExceptValue: t28,
      isDisabled: t29,
      setDisabled: setDisabled,
      isHidden: t30,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t31,
      setError: setErrorErrorHelperText
    };
    $[63] = focus;
    $[64] = setData;
    $[65] = setErrorErrorHelperText;
    $[66] = t23;
    $[67] = t24;
    $[68] = t25;
    $[69] = t26;
    $[70] = t27;
    $[71] = t28;
    $[72] = t29;
    $[73] = t30;
    $[74] = t31;
    $[75] = updateValue;
    $[76] = t32;
  } else {
    t32 = $[76];
  }
  var commands = t32;
  var t33;
  if ($[77] !== id || $[78] !== onAddValueItem) {
    t33 = function t33(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[77] = id;
    $[78] = onAddValueItem;
    $[79] = t33;
  } else {
    t33 = $[79];
  }
  var t34;
  if ($[80] !== id || $[81] !== onRemoveValueItem) {
    t34 = function t34() {
      return onRemoveValueItem(id);
    };
    $[80] = id;
    $[81] = onRemoveValueItem;
    $[82] = t34;
  } else {
    t34 = $[82];
  }
  useForwardRef(ref, commands, t33, t34);
  var t35;
  if ($[83] !== fileSizeCheck || $[84] !== name || $[85] !== onFile || $[86] !== onValueChangeByUser || $[87] !== updateValue) {
    t35 = function t35(e) {
      if (onFile) {
        var target = e.currentTarget;
        var file_0 = target.files[0];
        fileSizeCheck(file_0).then(function () {
          onFile(file_0).then(function (url) {
            updateValue(url);
            setTimeout(function () {
              if (onValueChangeByUser) {
                onValueChangeByUser(name, url);
              }
            });
          });
        });
      }
    };
    $[83] = fileSizeCheck;
    $[84] = name;
    $[85] = onFile;
    $[86] = onValueChangeByUser;
    $[87] = updateValue;
    $[88] = t35;
  } else {
    t35 = $[88];
  }
  var handleFileChange = t35;
  var t36;
  if ($[89] === Symbol["for"]("react.memo_cache_sentinel")) {
    t36 = function t36() {
      setIsOpenLinkDialog(true);
    };
    $[89] = t36;
  } else {
    t36 = $[89];
  }
  var handleLinkClick = t36;
  var t37;
  if ($[90] !== name || $[91] !== onValueChangeByUser || $[92] !== updateValue) {
    t37 = function t37() {
      updateValue("");
      setTimeout(function () {
        if (onValueChangeByUser) {
          onValueChangeByUser(name, "");
        }
      });
    };
    $[90] = name;
    $[91] = onValueChangeByUser;
    $[92] = updateValue;
    $[93] = t37;
  } else {
    t37 = $[93];
  }
  var handleRemoveClick = t37;
  var t38;
  if ($[94] !== name || $[95] !== onLink || $[96] !== onValueChangeByUser || $[97] !== updateValue) {
    t38 = function t38(url_0) {
      if (onLink) {
        onLink(url_0).then(function (finalUrl) {
          updateValue(finalUrl);
          setTimeout(function () {
            if (onValueChangeByUser) {
              onValueChangeByUser(name, finalUrl);
            }
          });
        });
      } else {
        updateValue(url_0);
        setTimeout(function () {
          if (onValueChangeByUser) {
            onValueChangeByUser(name, url_0);
          }
        });
      }
    };
    $[94] = name;
    $[95] = onLink;
    $[96] = onValueChangeByUser;
    $[97] = updateValue;
    $[98] = t38;
  } else {
    t38 = $[98];
  }
  var handleLinkDialogConfirm = t38;
  var t39 = "variant-".concat(variant);
  var t40 = "size-".concat(size);
  var t41 = !!initLabel && "with-label";
  var t42 = !!fullWidth && "full-width";
  var t43 = !!hideUrl && "hide-file-name";
  var t44 = !!hideLink && "hide-link";
  var t45 = !!hideUpload && "hide-upload";
  var t46 = !!hideRemove && "hide-remove";
  var t47;
  if ($[99] !== className || $[100] !== t39 || $[101] !== t40 || $[102] !== t41 || $[103] !== t42 || $[104] !== t43 || $[105] !== t44 || $[106] !== t45 || $[107] !== t46 || $[108] !== value_0) {
    t47 = classNames(className, "PFormValueItem", "PFormFile", t39, t40, t41, t42, t43, t44, t45, t46, notEmpty(value_0) && "with-value");
    $[99] = className;
    $[100] = t39;
    $[101] = t40;
    $[102] = t41;
    $[103] = t42;
    $[104] = t43;
    $[105] = t44;
    $[106] = t45;
    $[107] = t46;
    $[108] = value_0;
    $[109] = t47;
  } else {
    t47 = $[109];
  }
  var t48 = hideUrl ? labelIcon : undefined;
  var t49 = hideUrl ? initLabel : undefined;
  var t50 = error ? errorHelperText : helperText;
  var t51;
  if ($[110] !== t50) {
    t51 = /*#__PURE__*/React.createElement("div", null, t50);
    $[110] = t50;
    $[111] = t51;
  } else {
    t51 = $[111];
  }
  var t52;
  if ($[112] !== preview || $[113] !== t51) {
    t52 = /*#__PURE__*/React.createElement("div", null, preview, t51);
    $[112] = preview;
    $[113] = t51;
    $[114] = t52;
  } else {
    t52 = $[114];
  }
  var t53 = !hideUrl;
  var t54 = fullWidth ? "100%" : undefined;
  var t55;
  if ($[115] !== t54) {
    t55 = {
      width: t54
    };
    $[115] = t54;
    $[116] = t55;
  } else {
    t55 = $[116];
  }
  var t56;
  if ($[117] !== accept || $[118] !== color || $[119] !== disabled || $[120] !== error || $[121] !== focused || $[122] !== handleFileChange || $[123] !== handleRemoveClick || $[124] !== hideLink || $[125] !== hideLinkLabel || $[126] !== hideRemove || $[127] !== hideRemoveLabel || $[128] !== hideUpload || $[129] !== hideUploadLabel || $[130] !== hideUrl || $[131] !== id || $[132] !== initLabel || $[133] !== innerRef || $[134] !== labelIcon || $[135] !== labelShrink || $[136] !== linkLabel || $[137] !== linkTabIndex || $[138] !== readOnly || $[139] !== removeLabel || $[140] !== removeTabIndex || $[141] !== required || $[142] !== size || $[143] !== tabIndex || $[144] !== uploadLabel || $[145] !== uploadTabIndex || $[146] !== value_0 || $[147] !== variant) {
    t56 = !hideUrl && /*#__PURE__*/React.createElement("div", {
      className: "file-name-wrap"
    }, /*#__PURE__*/React.createElement(TextField, {
      ref: function ref(ref_0) {
        innerRef.current = ref_0;
      },
      inputRef: textFieldRef,
      className: "file-name",
      variant: variant,
      label: labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PIcon, {
        style: {
          verticalAlign: "middle",
          marginRight: 4
        }
      }, labelIcon), /*#__PURE__*/React.createElement("span", {
        style: {
          verticalAlign: "middle"
        }
      }, initLabel)) : initLabel,
      size: size,
      required: required,
      value: value_0 || "",
      focused: focused,
      disabled: disabled,
      fullWidth: true,
      tabIndex: tabIndex,
      error: error,
      slotProps: {
        inputLabel: labelShrink ? {
          shrink: labelShrink
        } : undefined,
        htmlInput: {
          readOnly: true,
          tabIndex: tabIndex
        },
        input: {
          endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React.createElement("div", {
            className: "input-file-wrap"
          }, !hideUpload && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledPButton, {
            variant: "text",
            tabIndex: uploadTabIndex == null ? -1 : uploadTabIndex,
            className: classNames("input-file-btn form-file-btn", !!hideUploadLabel && "hidden-label"),
            color: error ? "error" : color,
            size: size,
            disabled: readOnly || disabled,
            ref: fileUploadBtnRef
          }, /*#__PURE__*/React.createElement("label", {
            htmlFor: id
          }, /*#__PURE__*/React.createElement(PIcon, {
            size: size
          }, "upload"), !hideUploadLabel && (uploadLabel || "\uD30C\uC77C \uC5C5\uB85C\uB4DC"))), /*#__PURE__*/React.createElement("input", {
            type: "file",
            accept: accept,
            id: id,
            value: FILE_VALUE,
            className: "input-file",
            onChange: handleFileChange
          })), !hideLink && /*#__PURE__*/React.createElement(StyledPButton, {
            variant: "text",
            tabIndex: linkTabIndex == null ? -1 : linkTabIndex,
            className: classNames("link-btn  form-file-btn", !!hideLinkLabel && "hidden-label"),
            color: error ? "error" : color,
            startIcon: "link",
            size: size,
            disabled: readOnly || disabled,
            ref: linkBtnRef,
            onClick: handleLinkClick
          }, !hideLinkLabel && (linkLabel || "\uB9C1\uD06C")), !hideRemove && notEmpty(value_0) && /*#__PURE__*/React.createElement(StyledPButton, {
            variant: "text",
            tabIndex: removeTabIndex == null ? -1 : removeTabIndex,
            className: classNames("remove-btn form-file-btn", !!hideRemoveLabel && "hidden-label"),
            color: error ? "error" : color,
            startIcon: "close",
            size: size,
            disabled: readOnly || disabled,
            onClick: handleRemoveClick
          }, !hideRemoveLabel && (removeLabel || "\uC0AD\uC81C"))))
        }
      },
      placeholder: "\uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uC138\uC694"
    }));
    $[117] = accept;
    $[118] = color;
    $[119] = disabled;
    $[120] = error;
    $[121] = focused;
    $[122] = handleFileChange;
    $[123] = handleRemoveClick;
    $[124] = hideLink;
    $[125] = hideLinkLabel;
    $[126] = hideRemove;
    $[127] = hideRemoveLabel;
    $[128] = hideUpload;
    $[129] = hideUploadLabel;
    $[130] = hideUrl;
    $[131] = id;
    $[132] = initLabel;
    $[133] = innerRef;
    $[134] = labelIcon;
    $[135] = labelShrink;
    $[136] = linkLabel;
    $[137] = linkTabIndex;
    $[138] = readOnly;
    $[139] = removeLabel;
    $[140] = removeTabIndex;
    $[141] = required;
    $[142] = size;
    $[143] = tabIndex;
    $[144] = uploadLabel;
    $[145] = uploadTabIndex;
    $[146] = value_0;
    $[147] = variant;
    $[148] = t56;
  } else {
    t56 = $[148];
  }
  var t57;
  if ($[149] !== accept || $[150] !== color || $[151] !== disabled || $[152] !== error || $[153] !== handleFileChange || $[154] !== handleRemoveClick || $[155] !== hideLink || $[156] !== hideLinkLabel || $[157] !== hideRemove || $[158] !== hideRemoveLabel || $[159] !== hideUpload || $[160] !== hideUploadLabel || $[161] !== hideUrl || $[162] !== id || $[163] !== linkLabel || $[164] !== linkTabIndex || $[165] !== removeLabel || $[166] !== removeTabIndex || $[167] !== size || $[168] !== uploadLabel || $[169] !== uploadTabIndex || $[170] !== value_0) {
    t57 = !!hideUrl && /*#__PURE__*/React.createElement("div", {
      className: "input-file-wrap"
    }, !hideUpload && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledPButton, {
      variant: "outlined",
      tabIndex: uploadTabIndex,
      className: classNames("input-file-btn form-file-btn", !!hideUploadLabel && "hidden-label"),
      color: error ? "error" : color,
      size: size,
      ref: fileUploadBtnRef,
      disabled: disabled
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: id
    }, /*#__PURE__*/React.createElement(PIcon, {
      size: size,
      color: error ? "error" : color
    }, "upload"), !hideUploadLabel && (uploadLabel || "\uD30C\uC77C \uC5C5\uB85C\uB4DC"))), /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: accept,
      id: id,
      value: FILE_VALUE,
      className: "input-file",
      onChange: handleFileChange
    })), !hideLink && /*#__PURE__*/React.createElement(StyledPButton, {
      variant: "outlined",
      tabIndex: linkTabIndex,
      className: classNames("link-btn form-file-btn", !!hideLinkLabel && "hidden-label"),
      color: error ? "error" : color,
      startIcon: "link",
      size: size,
      onClick: handleLinkClick,
      disabled: disabled,
      ref: linkBtnRef
    }, !hideLinkLabel && (linkLabel || "\uB9C1\uD06C")), !hideRemove && notEmpty(value_0) && /*#__PURE__*/React.createElement(StyledPButton, {
      variant: "outlined",
      tabIndex: removeTabIndex,
      className: classNames("remove-btn form-file-btn", !!hideRemoveLabel && "hidden-label"),
      color: error ? "error" : color,
      startIcon: "close",
      size: size,
      disabled: disabled,
      onClick: handleRemoveClick
    }, !hideRemoveLabel && (removeLabel || "\uC0AD\uC81C")));
    $[149] = accept;
    $[150] = color;
    $[151] = disabled;
    $[152] = error;
    $[153] = handleFileChange;
    $[154] = handleRemoveClick;
    $[155] = hideLink;
    $[156] = hideLinkLabel;
    $[157] = hideRemove;
    $[158] = hideRemoveLabel;
    $[159] = hideUpload;
    $[160] = hideUploadLabel;
    $[161] = hideUrl;
    $[162] = id;
    $[163] = linkLabel;
    $[164] = linkTabIndex;
    $[165] = removeLabel;
    $[166] = removeTabIndex;
    $[167] = size;
    $[168] = uploadLabel;
    $[169] = uploadTabIndex;
    $[170] = value_0;
    $[171] = t57;
  } else {
    t57 = $[171];
  }
  var t58;
  if ($[172] === Symbol["for"]("react.memo_cache_sentinel")) {
    t58 = function t58() {
      return setAlertDialogProps({
        open: false
      });
    };
    $[172] = t58;
  } else {
    t58 = $[172];
  }
  var t59;
  if ($[173] !== alertDialogProps) {
    t59 = /*#__PURE__*/React.createElement(PrivateAlertDialog, _extends({}, alertDialogProps, {
      onClose: t58
    }));
    $[173] = alertDialogProps;
    $[174] = t59;
  } else {
    t59 = $[174];
  }
  var t60;
  if ($[175] === Symbol["for"]("react.memo_cache_sentinel")) {
    t60 = function t60() {
      return setIsOpenLinkDialog(false);
    };
    $[175] = t60;
  } else {
    t60 = $[175];
  }
  var t61;
  if ($[176] !== handleLinkDialogConfirm || $[177] !== isOpenLinkDialog) {
    t61 = /*#__PURE__*/React.createElement(LinkDialog, {
      open: isOpenLinkDialog,
      onConfirm: handleLinkDialogConfirm,
      onClose: t60
    });
    $[176] = handleLinkDialogConfirm;
    $[177] = isOpenLinkDialog;
    $[178] = t61;
  } else {
    t61 = $[178];
  }
  var t62;
  if ($[179] !== t56 || $[180] !== t57 || $[181] !== t59 || $[182] !== t61) {
    t62 = /*#__PURE__*/React.createElement("div", {
      className: "control-wrap"
    }, t56, t57, t59, t61);
    $[179] = t56;
    $[180] = t57;
    $[181] = t59;
    $[182] = t61;
    $[183] = t62;
  } else {
    t62 = $[183];
  }
  var t63;
  if ($[184] !== color || $[185] !== error || $[186] !== focused || $[187] !== fullWidth || $[188] !== height || $[189] !== hidden || $[190] !== required || $[191] !== size || $[192] !== t47 || $[193] !== t48 || $[194] !== t49 || $[195] !== t52 || $[196] !== t53 || $[197] !== t55 || $[198] !== t62 || $[199] !== variant) {
    t63 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t47,
      labelIcon: t48,
      label: t49,
      error: error,
      required: required,
      fullWidth: fullWidth,
      hidden: hidden,
      controlHeight: height,
      helperText: t52,
      hideLabel: t53,
      style: t55,
      control: t62
    });
    $[184] = color;
    $[185] = error;
    $[186] = focused;
    $[187] = fullWidth;
    $[188] = height;
    $[189] = hidden;
    $[190] = required;
    $[191] = size;
    $[192] = t47;
    $[193] = t48;
    $[194] = t49;
    $[195] = t52;
    $[196] = t53;
    $[197] = t55;
    $[198] = t62;
    $[199] = variant;
    $[200] = t63;
  } else {
    t63 = $[200];
  }
  return t63;
};
function _temp$9() {
  return "PFormFile";
}var getFinalValue$4 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormImageFile .preview-img{max-width:100%}.PFormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img{padding-right:14px}");var _excluded$5 = ["ref", "className", "imageSize", "preview", "previewMaxHeight", "accept", "value", "onChange", "onFile", "onLink"];
var PFormImageFile = function PFormImageFile(t0) {
  var $ = c(51);
  var className;
  var imageSize;
  var initValue;
  var onChange;
  var onFile;
  var onLink;
  var preview;
  var previewMaxHeight;
  var props;
  var ref;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    imageSize = _t.imageSize;
    preview = _t.preview;
    previewMaxHeight = _t.previewMaxHeight;
    t1 = _t.accept;
    initValue = _t.value;
    onChange = _t.onChange;
    onFile = _t.onFile;
    onLink = _t.onLink;
    props = _objectWithoutProperties(_t, _excluded$5);
    $[0] = t0;
    $[1] = className;
    $[2] = imageSize;
    $[3] = initValue;
    $[4] = onChange;
    $[5] = onFile;
    $[6] = onLink;
    $[7] = preview;
    $[8] = previewMaxHeight;
    $[9] = props;
    $[10] = ref;
    $[11] = t1;
  } else {
    className = $[1];
    imageSize = $[2];
    initValue = $[3];
    onChange = $[4];
    onFile = $[5];
    onLink = $[6];
    preview = $[7];
    previewMaxHeight = $[8];
    props = $[9];
    ref = $[10];
    t1 = $[11];
  }
  var accept = t1 === undefined ? ".jpg,.jpeg,.png" : t1;
  var t2;
  if ($[12] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {
      open: false
    };
    $[12] = t2;
  } else {
    t2 = $[12];
  }
  var _useState = useState(t2),
    _useState2 = _slicedToArray(_useState, 2),
    alertDialogProps = _useState2[0],
    setAlertDialogProps = _useState2[1];
  var _useState3 = useState(_temp$8),
    _useState4 = _slicedToArray(_useState3, 1),
    urlKit = _useState4[0];
  var t3;
  if ($[13] !== initValue) {
    t3 = getFinalValue$4(initValue);
    $[13] = initValue;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  var _useState5 = useState(t3),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  var t4;
  var t5;
  if ($[15] !== initValue) {
    t4 = function t4() {
      return setValue(getFinalValue$4(initValue));
    };
    t5 = [initValue];
    $[15] = initValue;
    $[16] = t4;
    $[17] = t5;
  } else {
    t4 = $[16];
    t5 = $[17];
  }
  useFirstSkipChanged(t4, t5);
  var t6;
  if ($[18] !== onChange) {
    t6 = function t6(newValue) {
      var _onChange;
      var finalValue = getFinalValue$4(newValue);
      setValue(finalValue);
      (_onChange = onChange) === null || _onChange === void 0 || _onChange(finalValue);
      return finalValue;
    };
    $[18] = onChange;
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  var updateValue = t6;
  var t7;
  if ($[20] !== imageSize || $[21] !== urlKit) {
    t7 = function t7(file) {
      if (imageSize && urlKit) {
        return new Promise(function (resolve, reject) {
          var img = new Image();
          img.onload = function () {
            var width = img.naturalWidth;
            var height = img.naturalHeight;
            urlKit.revokeObjectURL(img.src);
            var sizeOk = false;
            var sizeText = "";
            if (Array.isArray(imageSize)) {
              imageSize.forEach(function (a) {
                if (width === a.width && height === a.height) {
                  sizeOk = true;
                }
                if (sizeText !== "") {
                  sizeText = sizeText + ", ";
                }
                sizeText = sizeText + "".concat(a.width, "*").concat(a.height);
              });
            } else {
              sizeOk = width === imageSize.width && height === imageSize.height;
              sizeText = "".concat(imageSize.width, "*").concat(imageSize.height);
            }
            if (sizeOk) {
              resolve();
            } else {
              setAlertDialogProps({
                open: true,
                color: "error",
                title: "\uC774\uBBF8\uC9C0 \uC0AC\uC774\uC988",
                content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
                  color: "error"
                }, sizeText, " \uC0AC\uC774\uC988\uC758 \uC774\uBBF8\uC9C0\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
                  style: {
                    opacity: 0.7
                  }
                }, "(\uC120\uD0DD\uD55C \uC774\uBBF8\uC9C0 \uC0AC\uC774\uC988 : ", width, "*", height, ")"))
              });
              reject();
            }
          };
          img.onerror = function () {
            setAlertDialogProps({
              open: true,
              title: "\uC774\uBBF8\uC9C0 \uC0AC\uC774\uC988",
              content: "\uC774\uBBF8\uC9C0\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
            });
            reject();
          };
          if (file instanceof File) {
            img.src = urlKit.createObjectURL(file);
          } else {
            img.src = file;
          }
        });
      }
      return Promise.resolve();
    };
    $[20] = imageSize;
    $[21] = urlKit;
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  var imageSizeCheck = t7;
  var t8;
  if ($[23] !== imageSizeCheck || $[24] !== onFile) {
    t8 = function t8(file_0) {
      return new Promise(function (resolve_0, reject_0) {
        imageSizeCheck(file_0).then(function () {
          if (onFile) {
            onFile(file_0).then(function (url) {
              resolve_0(url);
            })["catch"](function () {
              return reject_0();
            });
          } else {
            reject_0();
          }
        })["catch"](function () {
          reject_0();
        });
      });
    };
    $[23] = imageSizeCheck;
    $[24] = onFile;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  var handleFile = t8;
  var t9;
  if ($[26] !== imageSizeCheck || $[27] !== onLink) {
    t9 = function t9(url_0) {
      return new Promise(function (resolve_1, reject_1) {
        imageSizeCheck(url_0).then(function () {
          if (onLink) {
            onLink(url_0).then(function (finalUrl) {
              return resolve_1(finalUrl);
            })["catch"](function () {
              return reject_1();
            });
          } else {
            resolve_1(url_0);
          }
        })["catch"](function () {
          reject_1();
        });
      });
    };
    $[26] = imageSizeCheck;
    $[27] = onLink;
    $[28] = t9;
  } else {
    t9 = $[28];
  }
  var handleLink = t9;
  var t10;
  if ($[29] !== className) {
    t10 = classNames(className, "PFormImageFile");
    $[29] = className;
    $[30] = t10;
  } else {
    t10 = $[30];
  }
  var t11;
  if ($[31] !== preview || $[32] !== previewMaxHeight || $[33] !== value) {
    t11 = preview && value ? /*#__PURE__*/React.createElement("a", {
      href: value,
      tabIndex: -1,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: /*#__PURE__*/React.createElement("div", {
        style: {
          paddingTop: 3,
          paddingBottom: 3
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: value,
        style: {
          maxWidth: "100%",
          verticalAlign: "middle"
        },
        alt: ""
      }))
    }, /*#__PURE__*/React.createElement("img", {
      className: "preview-img",
      src: value,
      style: {
        maxHeight: previewMaxHeight || undefined
      },
      alt: ""
    }))) : undefined;
    $[31] = preview;
    $[32] = previewMaxHeight;
    $[33] = value;
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  var t12;
  if ($[35] !== accept || $[36] !== handleFile || $[37] !== handleLink || $[38] !== props || $[39] !== ref || $[40] !== t10 || $[41] !== t11 || $[42] !== updateValue || $[43] !== value) {
    t12 = /*#__PURE__*/React.createElement(PFormFile, _extends({
      ref: ref,
      className: t10,
      accept: accept,
      value: value,
      preview: t11,
      onChange: updateValue,
      onFile: handleFile,
      onLink: handleLink
    }, props));
    $[35] = accept;
    $[36] = handleFile;
    $[37] = handleLink;
    $[38] = props;
    $[39] = ref;
    $[40] = t10;
    $[41] = t11;
    $[42] = updateValue;
    $[43] = value;
    $[44] = t12;
  } else {
    t12 = $[44];
  }
  var t13;
  if ($[45] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = function t13() {
      return setAlertDialogProps({
        open: false
      });
    };
    $[45] = t13;
  } else {
    t13 = $[45];
  }
  var t14;
  if ($[46] !== alertDialogProps) {
    t14 = /*#__PURE__*/React.createElement(PrivateAlertDialog, _extends({}, alertDialogProps, {
      onClose: t13
    }));
    $[46] = alertDialogProps;
    $[47] = t14;
  } else {
    t14 = $[47];
  }
  var t15;
  if ($[48] !== t12 || $[49] !== t14) {
    t15 = /*#__PURE__*/React.createElement(React.Fragment, null, t12, t14);
    $[48] = t12;
    $[49] = t14;
    $[50] = t15;
  } else {
    t15 = $[50];
  }
  return t15;
};
function _temp$8() {
  if (window.URL) {
    return window.URL;
  } else {
    if (window.webkitURL) {
      return window.webkitURL;
    }
  }
}var getFinalValue$3 = function getFinalValue(value) {
  return value || null;
};
var valueToDate$3 = function valueToDate(v) {
  return dayjs("".concat(v.year, "-").concat(v.month, "-01"));
};
var valueToYm$1 = function valueToYm(v) {
  return v.year * 100 + v.month;
};
var dateToValue$3 = function dateToValue(v) {
  return {
    year: v.year(),
    month: v.month() + 1
  };
};var DEFAULT_MIN_VALUE$1 = {
  year: 2020,
  month: 1
};
var DEFAULT_MAX_VALUE$1 = {
  year: 2050,
  month: 12
};
var PFormMonthPicker = function PFormMonthPicker(t0) {
  var $ = c(210);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initHidden = t0.hidden,
    name = t0.name,
    labelIcon = t0.labelIcon,
    label = t0.label,
    readOnly = t0.readOnly,
    required = t0.required,
    initFullWidth = t0.fullWidth,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    initValue = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    icon = t0.icon,
    t1 = t0.format,
    initLabelShrink = t0.labelShrink,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    t2 = t0.minValue,
    t3 = t0.maxValue,
    inputWidth = t0.inputWidth,
    enableKeyboardInput = t0.enableKeyboardInput,
    startAdornment = t0.startAdornment,
    endAdornment = t0.endAdornment,
    t4 = t0.formValueYearNameSuffix,
    t5 = t0.formValueMonthNameSuffix,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var format = t1 === undefined ? "YYYY\uB144 MM\uC6D4" : t1;
  var minValue = t2 === undefined ? DEFAULT_MIN_VALUE$1 : t2;
  var maxValue = t3 === undefined ? DEFAULT_MAX_VALUE$1 : t3;
  var formValueYearNameSuffix = t4 === undefined ? "_year" : t4;
  var formValueMonthNameSuffix = t5 === undefined ? "_month" : t5;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initValueRef = useAutoUpdateRef(initValue);
  var ratingRef = useRef(null);
  var inputRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var inputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var _useState5 = useState(initError),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    _setError = _useState6[1];
  var t6;
  var t7;
  if ($[0] !== initError) {
    t6 = function t6() {
      return _setError(initError);
    };
    t7 = [initError];
    $[0] = initError;
    $[1] = t6;
    $[2] = t7;
  } else {
    t6 = $[1];
    t7 = $[2];
  }
  useFirstSkipChanged(t6, t7);
  var errorRef = useAutoUpdateRef(error);
  var t8;
  if ($[3] !== errorRef) {
    t8 = function t8(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[3] = errorRef;
    $[4] = t8;
  } else {
    t8 = $[4];
  }
  var setError = t8;
  var _useState7 = useState(initData),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    _setData = _useState8[1];
  var t10;
  var t9;
  if ($[5] !== initData) {
    t9 = function t9() {
      return _setData(initData);
    };
    t10 = [initData];
    $[5] = initData;
    $[6] = t10;
    $[7] = t9;
  } else {
    t10 = $[6];
    t9 = $[7];
  }
  useFirstSkipChanged(t9, t10);
  var dataRef = useAutoUpdateRef(data);
  var t11;
  if ($[8] !== dataRef) {
    t11 = function t11(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[8] = dataRef;
    $[9] = t11;
  } else {
    t11 = $[9];
  }
  var setData = t11;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState9 = useState(finalInitDisabled),
    _useState0 = _slicedToArray(_useState9, 2),
    disabled = _useState0[0],
    setDisabled = _useState0[1];
  var t12;
  var t13;
  if ($[10] !== finalInitDisabled) {
    t12 = function t12() {
      return setDisabled(finalInitDisabled);
    };
    t13 = [finalInitDisabled];
    $[10] = finalInitDisabled;
    $[11] = t12;
    $[12] = t13;
  } else {
    t12 = $[11];
    t13 = $[12];
  }
  useFirstSkipChanged(t12, t13);
  var _useState1 = useState(initHidden),
    _useState10 = _slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  var t14;
  var t15;
  if ($[13] !== initHidden) {
    t14 = function t14() {
      return setHidden(initHidden);
    };
    t15 = [initHidden];
    $[13] = initHidden;
    $[14] = t14;
    $[15] = t15;
  } else {
    t14 = $[14];
    t15 = $[15];
  }
  useFirstSkipChanged(t14, t15);
  var t16;
  if ($[16] !== setError) {
    t16 = function t16(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[16] = setError;
    $[17] = t16;
  } else {
    t16 = $[17];
  }
  var setErrorErrorHelperText = t16;
  var t17;
  if ($[18] !== onValidateRef || $[19] !== required || $[20] !== setErrorErrorHelperText) {
    t17 = function t17(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (inputDatePickerErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
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
    };
    $[18] = onValidateRef;
    $[19] = required;
    $[20] = setErrorErrorHelperText;
    $[21] = t17;
  } else {
    t17 = $[21];
  }
  var validate = t17;
  var t18;
  if ($[22] !== initValue) {
    t18 = getFinalValue$3(initValue);
    $[22] = initValue;
    $[23] = t18;
  } else {
    t18 = $[23];
  }
  var _useState11 = useState(t18),
    _useState12 = _slicedToArray(_useState11, 2),
    value_0 = _useState12[0],
    _setValue = _useState12[1];
  var t19;
  var t20;
  if ($[24] !== initValue) {
    t19 = function t19() {
      return _setValue(getFinalValue$3(initValue));
    };
    t20 = [initValue];
    $[24] = initValue;
    $[25] = t19;
    $[26] = t20;
  } else {
    t19 = $[25];
    t20 = $[26];
  }
  useFirstSkipChanged(t19, t20);
  var valueRef = useAutoUpdateRef(value_0);
  var t21;
  if ($[27] !== valueRef) {
    t21 = function t21(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[27] = valueRef;
    $[28] = t21;
  } else {
    t21 = $[28];
  }
  var setValue = t21;
  var t22;
  if ($[29] !== error || $[30] !== name || $[31] !== onChangeRef || $[32] !== onValueChange || $[33] !== setValue || $[34] !== validate) {
    t22 = function t22(newValue_2) {
      var _onChangeRef$current;
      var finalValue = getFinalValue$3(newValue_2);
      setValue(finalValue);
      if (error) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[29] = error;
    $[30] = name;
    $[31] = onChangeRef;
    $[32] = onValueChange;
    $[33] = setValue;
    $[34] = validate;
    $[35] = t22;
  } else {
    t22 = $[35];
  }
  var updateValue = t22;
  var nowValue;
  var t23;
  if ($[36] === Symbol["for"]("react.memo_cache_sentinel")) {
    var nowDate = dayjs();
    nowValue = dateToValue$3(nowDate);
    t23 = valueToYm$1(nowValue);
    $[36] = nowValue;
    $[37] = t23;
  } else {
    nowValue = $[36];
    t23 = $[37];
  }
  var nowYm = t23;
  var t24;
  if ($[38] !== minValue) {
    t24 = valueToDate$3(minValue);
    $[38] = minValue;
    $[39] = t24;
  } else {
    t24 = $[39];
  }
  var minDate = t24;
  var t25;
  if ($[40] !== maxValue) {
    t25 = valueToDate$3(maxValue);
    $[40] = maxValue;
    $[41] = t25;
  } else {
    t25 = $[41];
  }
  var maxDate = t25;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm$1(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t26;
  if ($[42] !== minAvailableValue) {
    t26 = valueToYm$1(minAvailableValue);
    $[42] = minAvailableValue;
    $[43] = t26;
  } else {
    t26 = $[43];
  }
  var minAvailableYm = t26;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm$1(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t27;
  if ($[44] !== maxAvailableValue) {
    t27 = valueToYm$1(maxAvailableValue);
    $[44] = maxAvailableValue;
    $[45] = t27;
  } else {
    t27 = $[45];
  }
  var maxAvailableYm = t27;
  var t28;
  if ($[46] !== maxAvailableYm || $[47] !== maxDate || $[48] !== minAvailableYm || $[49] !== minDate) {
    t28 = {
      minDate: minDate,
      maxDate: maxDate,
      minAvailableYm: minAvailableYm,
      maxAvailableYm: maxAvailableYm
    };
    $[46] = maxAvailableYm;
    $[47] = maxDate;
    $[48] = minAvailableYm;
    $[49] = minDate;
    $[50] = t28;
  } else {
    t28 = $[50];
  }
  var dateInfo = t28;
  var t29;
  var t30;
  if ($[51] === Symbol["for"]("react.memo_cache_sentinel")) {
    t29 = function t29() {
      if (ratingRef.current) {
        inputRef.current = ratingRef.current.querySelector("input") || undefined;
      }
    };
    t30 = [];
    $[51] = t29;
    $[52] = t30;
  } else {
    t29 = $[51];
    t30 = $[52];
  }
  useEffect(t29, t30);
  var t31;
  if ($[53] !== name || $[54] !== onRequestSearchSubmit || $[55] !== open || $[56] !== valueRef) {
    t31 = function t31() {
      if (open) {
        openValueRef.current = valueRef.current;
      } else {
        if (openValueRef.current !== valueRef.current) {
          var runOnRequestSearchSubmit;
          if (openValueRef.current && valueRef.current) {
            runOnRequestSearchSubmit = openValueRef.current.year !== valueRef.current.year || openValueRef.current.month !== valueRef.current.month;
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, valueRef.current);
          }
        }
      }
    };
    $[53] = name;
    $[54] = onRequestSearchSubmit;
    $[55] = open;
    $[56] = valueRef;
    $[57] = t31;
  } else {
    t31 = $[57];
  }
  var t32;
  if ($[58] !== open) {
    t32 = [open];
    $[58] = open;
    $[59] = t32;
  } else {
    t32 = $[59];
  }
  useFirstSkipEffect(t31, t32);
  var t33;
  if ($[60] === Symbol["for"]("react.memo_cache_sentinel")) {
    t33 = function t33() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[60] = t33;
  } else {
    t33 = $[60];
  }
  var focus = t33;
  var t34;
  if ($[61] !== name) {
    t34 = function t34() {
      return name;
    };
    $[61] = name;
    $[62] = t34;
  } else {
    t34 = $[62];
  }
  var t35;
  if ($[63] !== initValueRef) {
    t35 = function t35() {
      return getFinalValue$3(initValueRef.current);
    };
    $[63] = initValueRef;
    $[64] = t35;
  } else {
    t35 = $[64];
  }
  var t36;
  if ($[65] !== initValueRef || $[66] !== updateValue) {
    t36 = function t36() {
      return updateValue(initValueRef.current);
    };
    $[65] = initValueRef;
    $[66] = updateValue;
    $[67] = t36;
  } else {
    t36 = $[67];
  }
  var t37;
  if ($[68] !== valueRef) {
    t37 = function t37() {
      return valueRef.current;
    };
    $[68] = valueRef;
    $[69] = t37;
  } else {
    t37 = $[69];
  }
  var t38;
  if ($[70] !== dataRef) {
    t38 = function t38() {
      return dataRef.current;
    };
    $[70] = dataRef;
    $[71] = t38;
  } else {
    t38 = $[71];
  }
  var t39;
  if ($[72] !== valueRef) {
    t39 = function t39() {
      return valueRef.current ? valueRef.current.year : null;
    };
    $[72] = valueRef;
    $[73] = t39;
  } else {
    t39 = $[73];
  }
  var t40;
  if ($[74] !== updateValue || $[75] !== valueRef) {
    t40 = function t40(year) {
      updateValue(year === null ? null : valueRef.current ? {
        year: year,
        month: valueRef.current.month
      } : {
        year: year,
        month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      });
    };
    $[74] = updateValue;
    $[75] = valueRef;
    $[76] = t40;
  } else {
    t40 = $[76];
  }
  var t41;
  if ($[77] !== valueRef) {
    t41 = function t41() {
      return valueRef.current ? valueRef.current.month : null;
    };
    $[77] = valueRef;
    $[78] = t41;
  } else {
    t41 = $[78];
  }
  var t42;
  if ($[79] !== updateValue || $[80] !== valueRef) {
    t42 = function t42(month) {
      updateValue(month === null ? null : valueRef.current ? {
        year: valueRef.current.year,
        month: month
      } : {
        year: new Date().getFullYear(),
        month: month
      });
    };
    $[79] = updateValue;
    $[80] = valueRef;
    $[81] = t42;
  } else {
    t42 = $[81];
  }
  var t43;
  if ($[82] !== exceptValue) {
    t43 = function t43() {
      return !!exceptValue;
    };
    $[82] = exceptValue;
    $[83] = t43;
  } else {
    t43 = $[83];
  }
  var t44;
  if ($[84] !== disabled) {
    t44 = function t44() {
      return !!disabled;
    };
    $[84] = disabled;
    $[85] = t44;
  } else {
    t44 = $[85];
  }
  var t45;
  if ($[86] !== hidden) {
    t45 = function t45() {
      return !!hidden;
    };
    $[86] = hidden;
    $[87] = t45;
  } else {
    t45 = $[87];
  }
  var t46;
  if ($[88] !== validate || $[89] !== valueRef) {
    t46 = function t46() {
      return validate(valueRef.current);
    };
    $[88] = validate;
    $[89] = valueRef;
    $[90] = t46;
  } else {
    t46 = $[90];
  }
  var t47;
  if ($[91] !== formValueYearNameSuffix) {
    t47 = function t47() {
      return formValueYearNameSuffix;
    };
    $[91] = formValueYearNameSuffix;
    $[92] = t47;
  } else {
    t47 = $[92];
  }
  var t48;
  if ($[93] !== formValueMonthNameSuffix) {
    t48 = function t48() {
      return formValueMonthNameSuffix;
    };
    $[93] = formValueMonthNameSuffix;
    $[94] = t48;
  } else {
    t48 = $[94];
  }
  var t49;
  if ($[95] !== formValueYearNameSuffix || $[96] !== name) {
    t49 = function t49() {
      return "".concat(name).concat(formValueYearNameSuffix);
    };
    $[95] = formValueYearNameSuffix;
    $[96] = name;
    $[97] = t49;
  } else {
    t49 = $[97];
  }
  var t50;
  if ($[98] !== formValueMonthNameSuffix || $[99] !== name) {
    t50 = function t50() {
      return "".concat(name).concat(formValueMonthNameSuffix);
    };
    $[98] = formValueMonthNameSuffix;
    $[99] = name;
    $[100] = t50;
  } else {
    t50 = $[100];
  }
  var t51;
  if ($[101] !== setData || $[102] !== setErrorErrorHelperText || $[103] !== t34 || $[104] !== t35 || $[105] !== t36 || $[106] !== t37 || $[107] !== t38 || $[108] !== t39 || $[109] !== t40 || $[110] !== t41 || $[111] !== t42 || $[112] !== t43 || $[113] !== t44 || $[114] !== t45 || $[115] !== t46 || $[116] !== t47 || $[117] !== t48 || $[118] !== t49 || $[119] !== t50 || $[120] !== updateValue) {
    t51 = {
      getType: _temp$7,
      getName: t34,
      getReset: t35,
      reset: t36,
      getValue: t37,
      setValue: updateValue,
      getData: t38,
      setData: setData,
      getYear: t39,
      setYear: t40,
      getMonth: t41,
      setMonth: t42,
      isExceptValue: t43,
      isDisabled: t44,
      setDisabled: setDisabled,
      isHidden: t45,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t46,
      setError: setErrorErrorHelperText,
      getFormValueYearNameSuffix: t47,
      getFormValueMonthNameSuffix: t48,
      getFormValueYearName: t49,
      getFormValueMonthName: t50
    };
    $[101] = setData;
    $[102] = setErrorErrorHelperText;
    $[103] = t34;
    $[104] = t35;
    $[105] = t36;
    $[106] = t37;
    $[107] = t38;
    $[108] = t39;
    $[109] = t40;
    $[110] = t41;
    $[111] = t42;
    $[112] = t43;
    $[113] = t44;
    $[114] = t45;
    $[115] = t46;
    $[116] = t47;
    $[117] = t48;
    $[118] = t49;
    $[119] = t50;
    $[120] = updateValue;
    $[121] = t51;
  } else {
    t51 = $[121];
  }
  var commands = t51;
  var t52;
  if ($[122] !== id || $[123] !== onAddValueItem) {
    t52 = function t52(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[122] = id;
    $[123] = onAddValueItem;
    $[124] = t52;
  } else {
    t52 = $[124];
  }
  var t53;
  if ($[125] !== id || $[126] !== onRemoveValueItem) {
    t53 = function t53() {
      return onRemoveValueItem(id);
    };
    $[125] = id;
    $[126] = onRemoveValueItem;
    $[127] = t53;
  } else {
    t53 = $[127];
  }
  useForwardRef(ref, commands, t52, t53);
  var t54;
  if ($[128] === Symbol["for"]("react.memo_cache_sentinel")) {
    t54 = function t54() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[128] = t54;
  } else {
    t54 = $[128];
  }
  var handleContainerMouseDown = t54;
  var t55;
  if ($[129] === Symbol["for"]("react.memo_cache_sentinel")) {
    t55 = function t55() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[129] = t55;
  } else {
    t55 = $[129];
  }
  var handleContainerFocus = t55;
  var t56;
  if ($[130] === Symbol["for"]("react.memo_cache_sentinel")) {
    t56 = function t56() {
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
    };
    $[130] = t56;
  } else {
    t56 = $[130];
  }
  var handleContainerBlur = t56;
  var t57;
  if ($[131] !== name || $[132] !== onValueChangeByUser || $[133] !== updateValue) {
    t57 = function t57(newValue_3, isMonthSelect) {
      updateValue(newValue_3);
      if (isMonthSelect) {
        setOpen(false);
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_3);
      });
    };
    $[131] = name;
    $[132] = onValueChangeByUser;
    $[133] = updateValue;
    $[134] = t57;
  } else {
    t57 = $[134];
  }
  var handleContainerChange = t57;
  var t58;
  if ($[135] !== disabled || $[136] !== readOnly) {
    t58 = function t58() {
      if (readOnly || disabled) {
        return;
      }
      setOpen(true);
    };
    $[135] = disabled;
    $[136] = readOnly;
    $[137] = t58;
  } else {
    t58 = $[137];
  }
  var handleInputDatePickerFocus = t58;
  var t59;
  if ($[138] !== dateInfo.maxAvailableYm || $[139] !== dateInfo.minAvailableYm) {
    t59 = function t59(date) {
      var dateYm = Number(date.format("YYYYMM"));
      return dateYm < dateInfo.minAvailableYm || dateYm > dateInfo.maxAvailableYm;
    };
    $[138] = dateInfo.maxAvailableYm;
    $[139] = dateInfo.minAvailableYm;
    $[140] = t59;
  } else {
    t59 = $[140];
  }
  var handleInputDatePickerShouldDisableYear = t59;
  var t60;
  if ($[141] !== value_0) {
    t60 = value_0 ? valueToDate$3(value_0) : null;
    $[141] = value_0;
    $[142] = t60;
  } else {
    t60 = $[142];
  }
  var valueDate = t60;
  var t61;
  if ($[143] !== color || $[144] !== dateInfo.maxDate || $[145] !== dateInfo.minDate || $[146] !== disabled || $[147] !== format || $[148] !== fullWidth || $[149] !== labelShrink || $[150] !== size || $[151] !== variant) {
    t61 = {
      variant: variant,
      size: size,
      color: color,
      labelShrink: labelShrink,
      fullWidth: fullWidth,
      disabled: disabled,
      format: format,
      minDate: dateInfo.minDate,
      maxDate: dateInfo.maxDate
    };
    $[143] = color;
    $[144] = dateInfo.maxDate;
    $[145] = dateInfo.minDate;
    $[146] = disabled;
    $[147] = format;
    $[148] = fullWidth;
    $[149] = labelShrink;
    $[150] = size;
    $[151] = variant;
    $[152] = t61;
  } else {
    t61 = $[152];
  }
  var inputDatePickerProps = t61;
  var t62;
  if ($[153] === Symbol["for"]("react.memo_cache_sentinel")) {
    t62 = function t62() {
      return setOpen(false);
    };
    $[153] = t62;
  } else {
    t62 = $[153];
  }
  var t63;
  if ($[154] !== className) {
    t63 = classNames(className, "PFormMonthPicker");
    $[154] = className;
    $[155] = t63;
  } else {
    t63 = $[155];
  }
  var t64 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t65 = fullWidth ? 1 : undefined;
  var t66;
  if ($[156] !== t64 || $[157] !== t65) {
    t66 = {
      display: t64,
      flex: t65
    };
    $[156] = t64;
    $[157] = t65;
    $[158] = t66;
  } else {
    t66 = $[158];
  }
  var t67 = error && errorHelperText ? 8 : -14;
  var t68;
  if ($[159] !== t67) {
    t68 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t67]
          }
        }]
      }
    };
    $[159] = t67;
    $[160] = t68;
  } else {
    t68 = $[160];
  }
  var t69;
  if ($[161] === Symbol["for"]("react.memo_cache_sentinel")) {
    t69 = {
      display: "flex"
    };
    $[161] = t69;
  } else {
    t69 = $[161];
  }
  var t70;
  if ($[162] !== disableFuture || $[163] !== disablePast || $[164] !== handleContainerChange || $[165] !== maxValue || $[166] !== minValue || $[167] !== value_0) {
    t70 = /*#__PURE__*/React.createElement("div", {
      style: t69
    }, /*#__PURE__*/React.createElement(PrivateMonthPicker, {
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[162] = disableFuture;
    $[163] = disablePast;
    $[164] = handleContainerChange;
    $[165] = maxValue;
    $[166] = minValue;
    $[167] = value_0;
    $[168] = t70;
  } else {
    t70 = $[168];
  }
  var t71;
  if ($[169] !== fullWidth || $[170] !== initStyle || $[171] !== inputWidth) {
    t71 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[169] = fullWidth;
    $[170] = initStyle;
    $[171] = inputWidth;
    $[172] = t71;
  } else {
    t71 = $[172];
  }
  var t72;
  if ($[173] !== updateValue) {
    t72 = function t72(v) {
      return updateValue(v ? dateToValue$3(v) : v);
    };
    $[173] = updateValue;
    $[174] = t72;
  } else {
    t72 = $[174];
  }
  var t73;
  if ($[175] === Symbol["for"]("react.memo_cache_sentinel")) {
    t73 = function t73(reason) {
      return inputDatePickerErrorRef.current = reason;
    };
    $[175] = t73;
  } else {
    t73 = $[175];
  }
  var t74;
  if ($[176] !== enableKeyboardInput || $[177] !== endAdornment || $[178] !== error || $[179] !== focused || $[180] !== handleInputDatePickerFocus || $[181] !== handleInputDatePickerShouldDisableYear || $[182] !== icon || $[183] !== inputDatePickerProps || $[184] !== label || $[185] !== labelIcon || $[186] !== readOnly || $[187] !== required || $[188] !== startAdornment || $[189] !== sx || $[190] !== t71 || $[191] !== t72 || $[192] !== valueDate) {
    t74 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: t71,
      sx: sx,
      value: valueDate,
      label: label,
      labelIcon: labelIcon,
      error: error,
      focused: focused,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: inputRef,
      onChange: t72,
      onFocus: handleInputDatePickerFocus,
      onError: t73,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[176] = enableKeyboardInput;
    $[177] = endAdornment;
    $[178] = error;
    $[179] = focused;
    $[180] = handleInputDatePickerFocus;
    $[181] = handleInputDatePickerShouldDisableYear;
    $[182] = icon;
    $[183] = inputDatePickerProps;
    $[184] = label;
    $[185] = labelIcon;
    $[186] = readOnly;
    $[187] = required;
    $[188] = startAdornment;
    $[189] = sx;
    $[190] = t71;
    $[191] = t72;
    $[192] = valueDate;
    $[193] = t74;
  } else {
    t74 = $[193];
  }
  var t75;
  if ($[194] !== open || $[195] !== t68 || $[196] !== t70 || $[197] !== t74) {
    t75 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t68,
      title: t70
    }, t74);
    $[194] = open;
    $[195] = t68;
    $[196] = t70;
    $[197] = t74;
    $[198] = t75;
  } else {
    t75 = $[198];
  }
  var t76;
  if ($[199] !== error || $[200] !== errorHelperText || $[201] !== formColWithHelperText || $[202] !== helperText || $[203] !== variant) {
    t76 = !formColWithHelperText && (!!helperText || error && !!errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[199] = error;
    $[200] = errorHelperText;
    $[201] = formColWithHelperText;
    $[202] = helperText;
    $[203] = variant;
    $[204] = t76;
  } else {
    t76 = $[204];
  }
  var t77;
  if ($[205] !== t63 || $[206] !== t66 || $[207] !== t75 || $[208] !== t76) {
    t77 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs,
      adapterLocale: "ko"
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t62
    }, /*#__PURE__*/React.createElement("div", {
      className: t63,
      style: t66,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t75, t76)));
    $[205] = t63;
    $[206] = t66;
    $[207] = t75;
    $[208] = t76;
    $[209] = t77;
  } else {
    t77 = $[209];
  }
  return t77;
};
function _temp$7() {
  return "PFormMonthPicker";
}var DEFAULT_VALUE$1 = [null, null];
var getFinalValue$2 = function getFinalValue(value) {
  return value || DEFAULT_VALUE$1;
};
var valueToDate$2 = function valueToDate(v) {
  return dayjs("".concat(v.year, "-").concat(v.month, "-01"));
};
var valueToYm = function valueToYm(v) {
  return v.year * 100 + v.month;
};
var dateToValue$2 = function dateToValue(v) {
  return {
    year: v.year(),
    month: v.month() + 1
  };
};var DEFAULT_FORMAT$1 = 'YYYY년 MM월';
var DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1
};
var DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12
};
var PFormMonthRangePicker = function PFormMonthRangePicker(t0) {
  var $ = c(301);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initHidden = t0.hidden,
    name = t0.name,
    fromLabel = t0.fromLabel,
    fromLabelIcon = t0.fromLabelIcon,
    toLabel = t0.toLabel,
    toLabelIcon = t0.toLabelIcon,
    readOnly = t0.readOnly,
    required = t0.required,
    initFullWidth = t0.fullWidth,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    initValue = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    icon = t0.icon,
    t1 = t0.format,
    initLabelShrink = t0.labelShrink,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    t2 = t0.minValue,
    t3 = t0.maxValue,
    inputWidth = t0.inputWidth,
    enableKeyboardInput = t0.enableKeyboardInput,
    startAdornment = t0.startAdornment,
    endAdornment = t0.endAdornment,
    t4 = t0.formValueFromYearNameSuffix,
    t5 = t0.formValueFromMonthNameSuffix,
    t6 = t0.formValueToYearNameSuffix,
    t7 = t0.formValueToMonthNameSuffix,
    align = t0.align,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var format = t1 === undefined ? DEFAULT_FORMAT$1 : t1;
  var minValue = t2 === undefined ? DEFAULT_MIN_VALUE : t2;
  var maxValue = t3 === undefined ? DEFAULT_MAX_VALUE : t3;
  var formValueFromYearNameSuffix = t4 === undefined ? "_from_year" : t4;
  var formValueFromMonthNameSuffix = t5 === undefined ? "_from_month" : t5;
  var formValueToYearNameSuffix = t6 === undefined ? "_to_year" : t6;
  var formValueToMonthNameSuffix = t7 === undefined ? "_to_month" : t7;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initValueRef = useAutoUpdateRef(initValue);
  var startInputRef = useRef(undefined);
  var endInputRef = useRef(undefined);
  var startInputDatePickerErrorRef = useRef(null);
  var endInputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fromError = _useState4[0],
    setFromError = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    fromErrorHelperText = _useState6[0],
    setFromErrorHelperText = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    toError = _useState8[0],
    setToError = _useState8[1];
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    toErrorHelperText = _useState0[0],
    setToErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var _useState11 = useState(initError),
    _useState12 = _slicedToArray(_useState11, 2),
    error = _useState12[0],
    _setError = _useState12[1];
  var t8;
  var t9;
  if ($[0] !== initError) {
    t8 = function t8() {
      return _setError(initError);
    };
    t9 = [initError];
    $[0] = initError;
    $[1] = t8;
    $[2] = t9;
  } else {
    t8 = $[1];
    t9 = $[2];
  }
  useFirstSkipChanged(t8, t9);
  var errorRef = useAutoUpdateRef(error);
  var t10;
  if ($[3] !== errorRef) {
    t10 = function t10(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[3] = errorRef;
    $[4] = t10;
  } else {
    t10 = $[4];
  }
  var setError = t10;
  var _useState13 = useState(initData),
    _useState14 = _slicedToArray(_useState13, 2),
    data = _useState14[0],
    _setData = _useState14[1];
  var t11;
  var t12;
  if ($[5] !== initData) {
    t11 = function t11() {
      return _setData(initData);
    };
    t12 = [initData];
    $[5] = initData;
    $[6] = t11;
    $[7] = t12;
  } else {
    t11 = $[6];
    t12 = $[7];
  }
  useFirstSkipChanged(t11, t12);
  var dataRef = useAutoUpdateRef(data);
  var t13;
  if ($[8] !== dataRef) {
    t13 = function t13(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[8] = dataRef;
    $[9] = t13;
  } else {
    t13 = $[9];
  }
  var setData = t13;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState15 = useState(finalInitDisabled),
    _useState16 = _slicedToArray(_useState15, 2),
    disabled = _useState16[0],
    setDisabled = _useState16[1];
  var t14;
  var t15;
  if ($[10] !== finalInitDisabled) {
    t14 = function t14() {
      return setDisabled(finalInitDisabled);
    };
    t15 = [finalInitDisabled];
    $[10] = finalInitDisabled;
    $[11] = t14;
    $[12] = t15;
  } else {
    t14 = $[11];
    t15 = $[12];
  }
  useFirstSkipChanged(t14, t15);
  var _useState17 = useState(initHidden),
    _useState18 = _slicedToArray(_useState17, 2),
    hidden = _useState18[0],
    setHidden = _useState18[1];
  var t16;
  var t17;
  if ($[13] !== initHidden) {
    t16 = function t16() {
      return setHidden(initHidden);
    };
    t17 = [initHidden];
    $[13] = initHidden;
    $[14] = t16;
    $[15] = t17;
  } else {
    t16 = $[14];
    t17 = $[15];
  }
  useFirstSkipChanged(t16, t17);
  var t18;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18(error_0, fromErrorHelperText_0) {
      setFromError(error_0);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[16] = t18;
  } else {
    t18 = $[16];
  }
  var setFromErrorErrorHelperText = t18;
  var t19;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = function t19(error_1, toErrorHelperText_0) {
      setToError(error_1);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[17] = t19;
  } else {
    t19 = $[17];
  }
  var setToErrorErrorHelperText = t19;
  var t20;
  if ($[18] !== setError) {
    t20 = function t20(error_2, errorHelperText_0) {
      setError(error_2);
      setErrorHelperText(error_2 ? errorHelperText_0 : undefined);
    };
    $[18] = setError;
    $[19] = t20;
  } else {
    t20 = $[19];
  }
  var setErrorErrorHelperText = t20;
  var t21;
  if ($[20] !== onValidateRef || $[21] !== required || $[22] !== setErrorErrorHelperText) {
    t21 = function t21(value) {
      if (required && (value[0] == null || value[1] == null)) {
        if (value[0] == null && value[1] == null) {
          setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          if (value[0] == null) {
            setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          } else {
            setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          }
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
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      setFromErrorErrorHelperText(false, undefined);
      setToErrorErrorHelperText(false, undefined);
      return true;
    };
    $[20] = onValidateRef;
    $[21] = required;
    $[22] = setErrorErrorHelperText;
    $[23] = t21;
  } else {
    t21 = $[23];
  }
  var validate = t21;
  var t22;
  if ($[24] !== initValue) {
    t22 = getFinalValue$2(initValue);
    $[24] = initValue;
    $[25] = t22;
  } else {
    t22 = $[25];
  }
  var _useState19 = useState(t22),
    _useState20 = _slicedToArray(_useState19, 2),
    value_0 = _useState20[0],
    _setValue = _useState20[1];
  var t23;
  var t24;
  if ($[26] !== initValue) {
    t23 = function t23() {
      return _setValue(getFinalValue$2(initValue));
    };
    t24 = [initValue];
    $[26] = initValue;
    $[27] = t23;
    $[28] = t24;
  } else {
    t23 = $[27];
    t24 = $[28];
  }
  useFirstSkipChanged(t23, t24);
  var valueRef = useAutoUpdateRef(value_0);
  var t25;
  if ($[29] !== valueRef) {
    t25 = function t25(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[29] = valueRef;
    $[30] = t25;
  } else {
    t25 = $[30];
  }
  var setValue = t25;
  var t26;
  if ($[31] !== error || $[32] !== fromError || $[33] !== name || $[34] !== onChangeRef || $[35] !== onValueChange || $[36] !== setValue || $[37] !== toError || $[38] !== validate) {
    t26 = function t26(newValue_2) {
      var _onChangeRef$current;
      var finalValue = getFinalValue$2(newValue_2);
      setValue(finalValue);
      if (error || fromError || toError) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[31] = error;
    $[32] = fromError;
    $[33] = name;
    $[34] = onChangeRef;
    $[35] = onValueChange;
    $[36] = setValue;
    $[37] = toError;
    $[38] = validate;
    $[39] = t26;
  } else {
    t26 = $[39];
  }
  var updateValue = t26;
  var nowValue;
  var t27;
  if ($[40] === Symbol["for"]("react.memo_cache_sentinel")) {
    var nowDate = dayjs();
    nowValue = dateToValue$2(nowDate);
    t27 = valueToYm(nowValue);
    $[40] = nowValue;
    $[41] = t27;
  } else {
    nowValue = $[40];
    t27 = $[41];
  }
  var nowYm = t27;
  var t28;
  if ($[42] !== minValue) {
    t28 = minValue ? valueToDate$2(minValue) : undefined;
    $[42] = minValue;
    $[43] = t28;
  } else {
    t28 = $[43];
  }
  var minDate = t28;
  var t29;
  if ($[44] !== maxValue) {
    t29 = maxValue ? valueToDate$2(maxValue) : undefined;
    $[44] = maxValue;
    $[45] = t29;
  } else {
    t29 = $[45];
  }
  var maxDate = t29;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t30;
  if ($[46] !== minAvailableValue) {
    t30 = valueToYm(minAvailableValue);
    $[46] = minAvailableValue;
    $[47] = t30;
  } else {
    t30 = $[47];
  }
  var minAvailableYm = t30;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t31;
  if ($[48] !== maxAvailableValue) {
    t31 = valueToYm(maxAvailableValue);
    $[48] = maxAvailableValue;
    $[49] = t31;
  } else {
    t31 = $[49];
  }
  var maxAvailableYm = t31;
  var t32;
  if ($[50] !== maxAvailableYm || $[51] !== maxDate || $[52] !== minAvailableYm || $[53] !== minDate) {
    t32 = {
      minDate: minDate,
      maxDate: maxDate,
      minAvailableYm: minAvailableYm,
      maxAvailableYm: maxAvailableYm
    };
    $[50] = maxAvailableYm;
    $[51] = maxDate;
    $[52] = minAvailableYm;
    $[53] = minDate;
    $[54] = t32;
  } else {
    t32 = $[54];
  }
  var dateInfo = t32;
  var t33;
  if ($[55] !== name || $[56] !== onRequestSearchSubmit || $[57] !== open || $[58] !== valueRef) {
    t33 = function t33() {
      if (open) {
        openValueRef.current = valueRef.current;
      } else {
        if (openValueRef.current !== valueRef.current) {
          var runOnRequestSearchSubmit;
          if (openValueRef.current && valueRef.current) {
            runOnRequestSearchSubmit = openValueRef.current !== valueRef.current;
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, valueRef.current);
          }
        }
      }
    };
    $[55] = name;
    $[56] = onRequestSearchSubmit;
    $[57] = open;
    $[58] = valueRef;
    $[59] = t33;
  } else {
    t33 = $[59];
  }
  var t34;
  if ($[60] !== open) {
    t34 = [open];
    $[60] = open;
    $[61] = t34;
  } else {
    t34 = $[61];
  }
  useFirstSkipEffect(t33, t34);
  var t35;
  if ($[62] === Symbol["for"]("react.memo_cache_sentinel")) {
    t35 = function t35() {
      var _startInputRef$curren;
      (_startInputRef$curren = startInputRef.current) === null || _startInputRef$curren === void 0 || _startInputRef$curren.focus();
    };
    $[62] = t35;
  } else {
    t35 = $[62];
  }
  var focus = t35;
  var t36;
  if ($[63] !== name) {
    t36 = function t36() {
      return name;
    };
    $[63] = name;
    $[64] = t36;
  } else {
    t36 = $[64];
  }
  var t37;
  if ($[65] !== initValueRef) {
    t37 = function t37() {
      return getFinalValue$2(initValueRef.current);
    };
    $[65] = initValueRef;
    $[66] = t37;
  } else {
    t37 = $[66];
  }
  var t38;
  if ($[67] !== initValueRef || $[68] !== updateValue) {
    t38 = function t38() {
      return updateValue(initValueRef.current);
    };
    $[67] = initValueRef;
    $[68] = updateValue;
    $[69] = t38;
  } else {
    t38 = $[69];
  }
  var t39;
  if ($[70] !== valueRef) {
    t39 = function t39() {
      return valueRef.current;
    };
    $[70] = valueRef;
    $[71] = t39;
  } else {
    t39 = $[71];
  }
  var t40;
  if ($[72] !== dataRef) {
    t40 = function t40() {
      return dataRef.current;
    };
    $[72] = dataRef;
    $[73] = t40;
  } else {
    t40 = $[73];
  }
  var t41;
  if ($[74] !== valueRef) {
    t41 = function t41() {
      return valueRef.current[0];
    };
    $[74] = valueRef;
    $[75] = t41;
  } else {
    t41 = $[75];
  }
  var t42;
  if ($[76] !== updateValue || $[77] !== valueRef) {
    t42 = function t42(value_1) {
      return updateValue([value_1, valueRef.current[1]]);
    };
    $[76] = updateValue;
    $[77] = valueRef;
    $[78] = t42;
  } else {
    t42 = $[78];
  }
  var t43;
  if ($[79] !== valueRef) {
    t43 = function t43() {
      return valueRef.current[1];
    };
    $[79] = valueRef;
    $[80] = t43;
  } else {
    t43 = $[80];
  }
  var t44;
  if ($[81] !== updateValue || $[82] !== valueRef) {
    t44 = function t44(value_2) {
      return updateValue([valueRef.current[0], value_2]);
    };
    $[81] = updateValue;
    $[82] = valueRef;
    $[83] = t44;
  } else {
    t44 = $[83];
  }
  var t45;
  if ($[84] !== valueRef) {
    t45 = function t45() {
      return valueRef.current[0] ? valueRef.current[0].year : null;
    };
    $[84] = valueRef;
    $[85] = t45;
  } else {
    t45 = $[85];
  }
  var t46;
  if ($[86] !== updateValue || $[87] !== valueRef) {
    t46 = function t46(year) {
      updateValue([year === null ? null : valueRef.current[0] ? {
        year: year,
        month: valueRef.current[0].month
      } : {
        year: year,
        month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      }, valueRef.current[1]]);
    };
    $[86] = updateValue;
    $[87] = valueRef;
    $[88] = t46;
  } else {
    t46 = $[88];
  }
  var t47;
  if ($[89] !== valueRef) {
    t47 = function t47() {
      return valueRef.current[0] ? valueRef.current[0].month : null;
    };
    $[89] = valueRef;
    $[90] = t47;
  } else {
    t47 = $[90];
  }
  var t48;
  if ($[91] !== updateValue || $[92] !== valueRef) {
    t48 = function t48(month) {
      updateValue([month === null ? null : valueRef.current[0] ? {
        year: valueRef.current[0].year,
        month: month
      } : {
        year: new Date().getFullYear(),
        month: month
      }, valueRef.current[1]]);
    };
    $[91] = updateValue;
    $[92] = valueRef;
    $[93] = t48;
  } else {
    t48 = $[93];
  }
  var t49;
  if ($[94] !== valueRef) {
    t49 = function t49() {
      return valueRef.current[1] ? valueRef.current[1].year : null;
    };
    $[94] = valueRef;
    $[95] = t49;
  } else {
    t49 = $[95];
  }
  var t50;
  if ($[96] !== updateValue || $[97] !== valueRef) {
    t50 = function t50(year_0) {
      updateValue([valueRef.current[0], year_0 === null ? null : valueRef.current[1] ? {
        year: year_0,
        month: valueRef.current[1].month
      } : {
        year: year_0,
        month: year_0 === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      }]);
    };
    $[96] = updateValue;
    $[97] = valueRef;
    $[98] = t50;
  } else {
    t50 = $[98];
  }
  var t51;
  if ($[99] !== valueRef) {
    t51 = function t51() {
      return valueRef.current[1] ? valueRef.current[1].month : null;
    };
    $[99] = valueRef;
    $[100] = t51;
  } else {
    t51 = $[100];
  }
  var t52;
  if ($[101] !== updateValue || $[102] !== valueRef) {
    t52 = function t52(month_0) {
      updateValue([valueRef.current[0], month_0 === null ? null : valueRef.current[1] ? {
        year: valueRef.current[1].year,
        month: month_0
      } : {
        year: new Date().getFullYear(),
        month: month_0
      }]);
    };
    $[101] = updateValue;
    $[102] = valueRef;
    $[103] = t52;
  } else {
    t52 = $[103];
  }
  var t53;
  if ($[104] !== exceptValue) {
    t53 = function t53() {
      return !!exceptValue;
    };
    $[104] = exceptValue;
    $[105] = t53;
  } else {
    t53 = $[105];
  }
  var t54;
  if ($[106] !== disabled) {
    t54 = function t54() {
      return !!disabled;
    };
    $[106] = disabled;
    $[107] = t54;
  } else {
    t54 = $[107];
  }
  var t55;
  if ($[108] !== hidden) {
    t55 = function t55() {
      return !!hidden;
    };
    $[108] = hidden;
    $[109] = t55;
  } else {
    t55 = $[109];
  }
  var t56;
  if ($[110] !== validate || $[111] !== valueRef) {
    t56 = function t56() {
      return validate(valueRef.current);
    };
    $[110] = validate;
    $[111] = valueRef;
    $[112] = t56;
  } else {
    t56 = $[112];
  }
  var t57;
  if ($[113] !== formValueFromYearNameSuffix) {
    t57 = function t57() {
      return formValueFromYearNameSuffix;
    };
    $[113] = formValueFromYearNameSuffix;
    $[114] = t57;
  } else {
    t57 = $[114];
  }
  var t58;
  if ($[115] !== formValueFromMonthNameSuffix) {
    t58 = function t58() {
      return formValueFromMonthNameSuffix;
    };
    $[115] = formValueFromMonthNameSuffix;
    $[116] = t58;
  } else {
    t58 = $[116];
  }
  var t59;
  if ($[117] !== formValueToYearNameSuffix) {
    t59 = function t59() {
      return formValueToYearNameSuffix;
    };
    $[117] = formValueToYearNameSuffix;
    $[118] = t59;
  } else {
    t59 = $[118];
  }
  var t60;
  if ($[119] !== formValueToMonthNameSuffix) {
    t60 = function t60() {
      return formValueToMonthNameSuffix;
    };
    $[119] = formValueToMonthNameSuffix;
    $[120] = t60;
  } else {
    t60 = $[120];
  }
  var t61;
  if ($[121] !== formValueFromYearNameSuffix || $[122] !== name) {
    t61 = function t61() {
      return "".concat(name).concat(formValueFromYearNameSuffix);
    };
    $[121] = formValueFromYearNameSuffix;
    $[122] = name;
    $[123] = t61;
  } else {
    t61 = $[123];
  }
  var t62;
  if ($[124] !== formValueFromMonthNameSuffix || $[125] !== name) {
    t62 = function t62() {
      return "".concat(name).concat(formValueFromMonthNameSuffix);
    };
    $[124] = formValueFromMonthNameSuffix;
    $[125] = name;
    $[126] = t62;
  } else {
    t62 = $[126];
  }
  var t63;
  if ($[127] !== formValueToYearNameSuffix || $[128] !== name) {
    t63 = function t63() {
      return "".concat(name).concat(formValueToYearNameSuffix);
    };
    $[127] = formValueToYearNameSuffix;
    $[128] = name;
    $[129] = t63;
  } else {
    t63 = $[129];
  }
  var t64;
  if ($[130] !== formValueToMonthNameSuffix || $[131] !== name) {
    t64 = function t64() {
      return "".concat(name).concat(formValueToMonthNameSuffix);
    };
    $[130] = formValueToMonthNameSuffix;
    $[131] = name;
    $[132] = t64;
  } else {
    t64 = $[132];
  }
  var t65;
  if ($[133] !== setData || $[134] !== setErrorErrorHelperText || $[135] !== t36 || $[136] !== t37 || $[137] !== t38 || $[138] !== t39 || $[139] !== t40 || $[140] !== t41 || $[141] !== t42 || $[142] !== t43 || $[143] !== t44 || $[144] !== t45 || $[145] !== t46 || $[146] !== t47 || $[147] !== t48 || $[148] !== t49 || $[149] !== t50 || $[150] !== t51 || $[151] !== t52 || $[152] !== t53 || $[153] !== t54 || $[154] !== t55 || $[155] !== t56 || $[156] !== t57 || $[157] !== t58 || $[158] !== t59 || $[159] !== t60 || $[160] !== t61 || $[161] !== t62 || $[162] !== t63 || $[163] !== t64 || $[164] !== updateValue) {
    t65 = {
      getType: _temp$6,
      getName: t36,
      getReset: t37,
      reset: t38,
      getValue: t39,
      setValue: updateValue,
      getData: t40,
      setData: setData,
      getFromValue: t41,
      setFromValue: t42,
      getToValue: t43,
      setToValue: t44,
      getFromYear: t45,
      setFromYear: t46,
      getFromMonth: t47,
      setFromMonth: t48,
      getToYear: t49,
      setToYear: t50,
      getToMonth: t51,
      setToMonth: t52,
      isExceptValue: t53,
      isDisabled: t54,
      setDisabled: setDisabled,
      isHidden: t55,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t56,
      setError: setErrorErrorHelperText,
      getFormValueFromYearNameSuffix: t57,
      getFormValueFromMonthNameSuffix: t58,
      getFormValueToYearNameSuffix: t59,
      getFormValueToMonthNameSuffix: t60,
      getFormValueFromYearName: t61,
      getFormValueFromMonthName: t62,
      getFormValueToYearName: t63,
      getFormValueToMonthName: t64
    };
    $[133] = setData;
    $[134] = setErrorErrorHelperText;
    $[135] = t36;
    $[136] = t37;
    $[137] = t38;
    $[138] = t39;
    $[139] = t40;
    $[140] = t41;
    $[141] = t42;
    $[142] = t43;
    $[143] = t44;
    $[144] = t45;
    $[145] = t46;
    $[146] = t47;
    $[147] = t48;
    $[148] = t49;
    $[149] = t50;
    $[150] = t51;
    $[151] = t52;
    $[152] = t53;
    $[153] = t54;
    $[154] = t55;
    $[155] = t56;
    $[156] = t57;
    $[157] = t58;
    $[158] = t59;
    $[159] = t60;
    $[160] = t61;
    $[161] = t62;
    $[162] = t63;
    $[163] = t64;
    $[164] = updateValue;
    $[165] = t65;
  } else {
    t65 = $[165];
  }
  var commands = t65;
  var t66;
  if ($[166] !== id || $[167] !== onAddValueItem) {
    t66 = function t66(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[166] = id;
    $[167] = onAddValueItem;
    $[168] = t66;
  } else {
    t66 = $[168];
  }
  var t67;
  if ($[169] !== id || $[170] !== onRemoveValueItem) {
    t67 = function t67() {
      return onRemoveValueItem(id);
    };
    $[169] = id;
    $[170] = onRemoveValueItem;
    $[171] = t67;
  } else {
    t67 = $[171];
  }
  useForwardRef(ref, commands, t66, t67);
  var t68;
  if ($[172] !== name || $[173] !== onValueChangeByUser || $[174] !== updateValue) {
    t68 = function t68(newValue_3, selectType, isMonthSelect) {
      updateValue(newValue_3);
      if (selectType === "start" && isMonthSelect) {
        setTimeout(function () {
          var _endInputRef$current;
          (_endInputRef$current = endInputRef.current) === null || _endInputRef$current === void 0 || _endInputRef$current.focus();
        });
      } else {
        if (selectType === "end" && isMonthSelect) {
          setOpen(false);
        }
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_3);
      });
    };
    $[172] = name;
    $[173] = onValueChangeByUser;
    $[174] = updateValue;
    $[175] = t68;
  } else {
    t68 = $[175];
  }
  var handleContainerChange = t68;
  var t69;
  if ($[176] !== dateInfo.maxAvailableYm || $[177] !== dateInfo.minAvailableYm || $[178] !== fromError || $[179] !== name || $[180] !== onValueChangeByUser || $[181] !== toError || $[182] !== updateValue || $[183] !== validate || $[184] !== valueRef) {
    t69 = function t69(selectType_0, date) {
      if (date == null || date.isValid()) {
        if (selectType_0 === "start") {
          var newValue_4 = [date ? dateToValue$2(date) : null, valueRef.current[1]];
          if (newValue_4[0] !== null && valueToYm(newValue_4[0]) >= dateInfo.minAvailableYm && valueToYm(newValue_4[0]) <= dateInfo.maxAvailableYm) {
            if (newValue_4[1] !== null && newValue_4[1] < newValue_4[0]) {
              newValue_4[1] = newValue_4[0];
            }
          }
          if (fromError) {
            validate(newValue_4);
          }
          setTimeout(function () {
            onValueChangeByUser(name, newValue_4);
          });
          updateValue(newValue_4);
        } else {
          var newValue_5 = [valueRef.current[0], date ? dateToValue$2(date) : null];
          if (newValue_5[1] !== null && valueToYm(newValue_5[1]) >= dateInfo.minAvailableYm && valueToYm(newValue_5[1]) <= dateInfo.maxAvailableYm) {
            if (newValue_5[0] !== null && newValue_5[0] > newValue_5[1]) {
              newValue_5[0] = newValue_5[1];
            }
          }
          if (toError) {
            validate(newValue_5);
          }
          setTimeout(function () {
            onValueChangeByUser(name, newValue_5);
          });
          updateValue(newValue_5);
        }
      }
    };
    $[176] = dateInfo.maxAvailableYm;
    $[177] = dateInfo.minAvailableYm;
    $[178] = fromError;
    $[179] = name;
    $[180] = onValueChangeByUser;
    $[181] = toError;
    $[182] = updateValue;
    $[183] = validate;
    $[184] = valueRef;
    $[185] = t69;
  } else {
    t69 = $[185];
  }
  var handleInputDatePickerChange = t69;
  var t70;
  if ($[186] !== disabled || $[187] !== readOnly || $[188] !== value_0) {
    t70 = function t70(selectType_1) {
      if (readOnly || disabled) {
        return;
      }
      if (selectType_1 === "end" && value_0[0] == null) {
        var _startInputRef$curren2;
        (_startInputRef$curren2 = startInputRef.current) === null || _startInputRef$curren2 === void 0 || _startInputRef$curren2.focus();
      } else {
        setOpen(true);
      }
    };
    $[186] = disabled;
    $[187] = readOnly;
    $[188] = value_0;
    $[189] = t70;
  } else {
    t70 = $[189];
  }
  var handleInputDatePickerFocus = t70;
  var t71;
  if ($[190] !== dateInfo.maxAvailableYm || $[191] !== dateInfo.minAvailableYm) {
    t71 = function t71(dt) {
      var ym = dt.year() * 100 + (dt.month() + 1);
      return ym < dateInfo.minAvailableYm || ym > dateInfo.maxAvailableYm;
    };
    $[190] = dateInfo.maxAvailableYm;
    $[191] = dateInfo.minAvailableYm;
    $[192] = t71;
  } else {
    t71 = $[192];
  }
  var handleInputDatePickerShouldDisableYear = t71;
  var t72;
  if ($[193] !== value_0) {
    t72 = !!value_0 && !!value_0[0] ? valueToDate$2(value_0[0]) : null;
    $[193] = value_0;
    $[194] = t72;
  } else {
    t72 = $[194];
  }
  var t73;
  if ($[195] !== value_0) {
    t73 = !!value_0 && !!value_0[1] ? valueToDate$2(value_0[1]) : null;
    $[195] = value_0;
    $[196] = t73;
  } else {
    t73 = $[196];
  }
  var t74;
  if ($[197] !== t72 || $[198] !== t73) {
    t74 = [t72, t73];
    $[197] = t72;
    $[198] = t73;
    $[199] = t74;
  } else {
    t74 = $[199];
  }
  var valueDate = t74;
  var t75;
  if ($[200] !== align || $[201] !== color || $[202] !== dateInfo.maxDate || $[203] !== dateInfo.minDate || $[204] !== disabled || $[205] !== format || $[206] !== fullWidth || $[207] !== labelShrink || $[208] !== size || $[209] !== variant) {
    t75 = {
      align: align,
      variant: variant,
      size: size,
      color: color,
      labelShrink: labelShrink,
      fullWidth: fullWidth,
      disabled: disabled,
      format: format,
      minDate: dateInfo.minDate,
      maxDate: dateInfo.maxDate
    };
    $[200] = align;
    $[201] = color;
    $[202] = dateInfo.maxDate;
    $[203] = dateInfo.minDate;
    $[204] = disabled;
    $[205] = format;
    $[206] = fullWidth;
    $[207] = labelShrink;
    $[208] = size;
    $[209] = variant;
    $[210] = t75;
  } else {
    t75 = $[210];
  }
  var inputDatePickerProps = t75;
  var t76;
  if ($[211] !== fullWidth || $[212] !== initStyle || $[213] !== inputWidth) {
    t76 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[211] = fullWidth;
    $[212] = initStyle;
    $[213] = inputWidth;
    $[214] = t76;
  } else {
    t76 = $[214];
  }
  var inputStyle = t76;
  var t77;
  if ($[215] === Symbol["for"]("react.memo_cache_sentinel")) {
    t77 = function t77() {
      return setOpen(false);
    };
    $[215] = t77;
  } else {
    t77 = $[215];
  }
  var t78;
  if ($[216] !== className) {
    t78 = classNames(className, "PFormMonthRangePicker");
    $[216] = className;
    $[217] = t78;
  } else {
    t78 = $[217];
  }
  var t79 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t80 = fullWidth ? 1 : undefined;
  var t81;
  if ($[218] !== t79 || $[219] !== t80) {
    t81 = {
      display: t79,
      flex: t80
    };
    $[218] = t79;
    $[219] = t80;
    $[220] = t81;
  } else {
    t81 = $[220];
  }
  var t82 = error && errorHelperText ? 8 : -14;
  var t83;
  if ($[221] !== t82) {
    t83 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t82]
          }
        }]
      }
    };
    $[221] = t82;
    $[222] = t83;
  } else {
    t83 = $[222];
  }
  var t84;
  if ($[223] === Symbol["for"]("react.memo_cache_sentinel")) {
    t84 = {
      display: "flex"
    };
    $[223] = t84;
  } else {
    t84 = $[223];
  }
  var t85;
  if ($[224] !== disableFuture || $[225] !== disablePast || $[226] !== handleContainerChange || $[227] !== maxValue || $[228] !== minValue || $[229] !== value_0) {
    t85 = /*#__PURE__*/React.createElement("div", {
      style: t84
    }, /*#__PURE__*/React.createElement(PrivateMonthRangePicker, {
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[224] = disableFuture;
    $[225] = disablePast;
    $[226] = handleContainerChange;
    $[227] = maxValue;
    $[228] = minValue;
    $[229] = value_0;
    $[230] = t85;
  } else {
    t85 = $[230];
  }
  var t86 = error || fromError;
  var t87 = focused || open;
  var t88;
  if ($[231] !== handleInputDatePickerChange) {
    t88 = function t88(v) {
      return handleInputDatePickerChange("start", v);
    };
    $[231] = handleInputDatePickerChange;
    $[232] = t88;
  } else {
    t88 = $[232];
  }
  var t89;
  if ($[233] !== handleInputDatePickerFocus) {
    t89 = function t89() {
      return handleInputDatePickerFocus("start");
    };
    $[233] = handleInputDatePickerFocus;
    $[234] = t89;
  } else {
    t89 = $[234];
  }
  var t90;
  if ($[235] === Symbol["for"]("react.memo_cache_sentinel")) {
    t90 = function t90(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[235] = t90;
  } else {
    t90 = $[235];
  }
  var t91;
  if ($[236] !== enableKeyboardInput || $[237] !== endAdornment || $[238] !== fromLabel || $[239] !== fromLabelIcon || $[240] !== handleInputDatePickerShouldDisableYear || $[241] !== icon || $[242] !== inputDatePickerProps || $[243] !== inputStyle || $[244] !== readOnly || $[245] !== required || $[246] !== startAdornment || $[247] !== sx || $[248] !== t86 || $[249] !== t87 || $[250] !== t88 || $[251] !== t89 || $[252] !== valueDate[0]) {
    t91 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      sx: sx,
      value: valueDate[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t86,
      focused: t87,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: startInputRef,
      onChange: t88,
      onFocus: t89,
      onError: t90,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[236] = enableKeyboardInput;
    $[237] = endAdornment;
    $[238] = fromLabel;
    $[239] = fromLabelIcon;
    $[240] = handleInputDatePickerShouldDisableYear;
    $[241] = icon;
    $[242] = inputDatePickerProps;
    $[243] = inputStyle;
    $[244] = readOnly;
    $[245] = required;
    $[246] = startAdornment;
    $[247] = sx;
    $[248] = t86;
    $[249] = t87;
    $[250] = t88;
    $[251] = t89;
    $[252] = valueDate[0];
    $[253] = t91;
  } else {
    t91 = $[253];
  }
  var t92;
  if ($[254] === Symbol["for"]("react.memo_cache_sentinel")) {
    t92 = /*#__PURE__*/React.createElement(Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[254] = t92;
  } else {
    t92 = $[254];
  }
  var t93 = error || toError;
  var t94 = focused || open;
  var t95;
  if ($[255] !== handleInputDatePickerChange) {
    t95 = function t95(v_0) {
      return handleInputDatePickerChange("end", v_0);
    };
    $[255] = handleInputDatePickerChange;
    $[256] = t95;
  } else {
    t95 = $[256];
  }
  var t96;
  if ($[257] !== handleInputDatePickerFocus) {
    t96 = function t96() {
      return handleInputDatePickerFocus("end");
    };
    $[257] = handleInputDatePickerFocus;
    $[258] = t96;
  } else {
    t96 = $[258];
  }
  var t97;
  if ($[259] === Symbol["for"]("react.memo_cache_sentinel")) {
    t97 = function t97(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[259] = t97;
  } else {
    t97 = $[259];
  }
  var t98;
  if ($[260] !== enableKeyboardInput || $[261] !== endAdornment || $[262] !== handleInputDatePickerShouldDisableYear || $[263] !== icon || $[264] !== inputDatePickerProps || $[265] !== inputStyle || $[266] !== readOnly || $[267] !== required || $[268] !== startAdornment || $[269] !== sx || $[270] !== t93 || $[271] !== t94 || $[272] !== t95 || $[273] !== t96 || $[274] !== toLabel || $[275] !== toLabelIcon || $[276] !== valueDate[1]) {
    t98 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      sx: sx,
      value: valueDate[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t93,
      focused: t94,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: endInputRef,
      onChange: t95,
      onFocus: t96,
      onError: t97,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[260] = enableKeyboardInput;
    $[261] = endAdornment;
    $[262] = handleInputDatePickerShouldDisableYear;
    $[263] = icon;
    $[264] = inputDatePickerProps;
    $[265] = inputStyle;
    $[266] = readOnly;
    $[267] = required;
    $[268] = startAdornment;
    $[269] = sx;
    $[270] = t93;
    $[271] = t94;
    $[272] = t95;
    $[273] = t96;
    $[274] = toLabel;
    $[275] = toLabelIcon;
    $[276] = valueDate[1];
    $[277] = t98;
  } else {
    t98 = $[277];
  }
  var t99;
  if ($[278] !== t91 || $[279] !== t98) {
    t99 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      alignItems: "center"
    }, t91, t92, t98);
    $[278] = t91;
    $[279] = t98;
    $[280] = t99;
  } else {
    t99 = $[280];
  }
  var t100;
  if ($[281] !== open || $[282] !== t83 || $[283] !== t85 || $[284] !== t99) {
    t100 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t83,
      title: t85
    }, t99);
    $[281] = open;
    $[282] = t83;
    $[283] = t85;
    $[284] = t99;
    $[285] = t100;
  } else {
    t100 = $[285];
  }
  var t101;
  if ($[286] !== error || $[287] !== errorHelperText || $[288] !== formColWithHelperText || $[289] !== fromError || $[290] !== fromErrorHelperText || $[291] !== helperText || $[292] !== toError || $[293] !== toErrorHelperText || $[294] !== variant) {
    t101 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[286] = error;
    $[287] = errorHelperText;
    $[288] = formColWithHelperText;
    $[289] = fromError;
    $[290] = fromErrorHelperText;
    $[291] = helperText;
    $[292] = toError;
    $[293] = toErrorHelperText;
    $[294] = variant;
    $[295] = t101;
  } else {
    t101 = $[295];
  }
  var t102;
  if ($[296] !== t100 || $[297] !== t101 || $[298] !== t78 || $[299] !== t81) {
    t102 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs,
      adapterLocale: "ko"
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t77
    }, /*#__PURE__*/React.createElement("div", {
      className: t78,
      style: t81
    }, t100, t101)));
    $[296] = t100;
    $[297] = t101;
    $[298] = t78;
    $[299] = t81;
    $[300] = t102;
  } else {
    t102 = $[300];
  }
  return t102;
};
function _temp$6() {
  return "PFormMonthRangePicker";
}var valueToDate$1 = function valueToDate(v) {
  return dayjs("".concat(v, "-01-01"));
};
var dateToValue$1 = function dateToValue(v) {
  return v.year();
};
var getFinalValue$1 = function getFinalValue(newValue) {
  return newValue || null;
};var DEFAULT_FORMAT = 'YYYY년';
var PFormYearPicker = function PFormYearPicker(t0) {
  var $ = c(174);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initHidden = t0.hidden,
    name = t0.name,
    labelIcon = t0.labelIcon,
    label = t0.label,
    readOnly = t0.readOnly,
    required = t0.required,
    initFullWidth = t0.fullWidth,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    initValue = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    icon = t0.icon,
    t1 = t0.format,
    initLabelShrink = t0.labelShrink,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    t2 = t0.minYear,
    t3 = t0.maxYear,
    inputWidth = t0.inputWidth,
    enableKeyboardInput = t0.enableKeyboardInput,
    startAdornment = t0.startAdornment,
    endAdornment = t0.endAdornment,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var format = t1 === undefined ? DEFAULT_FORMAT : t1;
  var minYear = t2 === undefined ? 2020 : t2;
  var maxYear = t3 === undefined ? 2050 : t3;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initValueRef = useAutoUpdateRef(initValue);
  var inputRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var inputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    _setError = _useState2[1];
  var t4;
  var t5;
  if ($[0] !== initError) {
    t4 = function t4() {
      return _setError(initError);
    };
    t5 = [initError];
    $[0] = initError;
    $[1] = t4;
    $[2] = t5;
  } else {
    t4 = $[1];
    t5 = $[2];
  }
  useFirstSkipChanged(t4, t5);
  var errorRef = useAutoUpdateRef(error);
  var t6;
  if ($[3] !== errorRef) {
    t6 = function t6(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[3] = errorRef;
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  var setError = t6;
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    _setData = _useState4[1];
  var t7;
  var t8;
  if ($[5] !== initData) {
    t7 = function t7() {
      return _setData(initData);
    };
    t8 = [initData];
    $[5] = initData;
    $[6] = t7;
    $[7] = t8;
  } else {
    t7 = $[6];
    t8 = $[7];
  }
  useFirstSkipChanged(t7, t8);
  var dataRef = useAutoUpdateRef(data);
  var t9;
  if ($[8] !== dataRef) {
    t9 = function t9(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[8] = dataRef;
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  var setData = t9;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  var t10;
  var t11;
  if ($[10] !== finalInitDisabled) {
    t10 = function t10() {
      return setDisabled(finalInitDisabled);
    };
    t11 = [finalInitDisabled];
    $[10] = finalInitDisabled;
    $[11] = t10;
    $[12] = t11;
  } else {
    t10 = $[11];
    t11 = $[12];
  }
  useFirstSkipChanged(t10, t11);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var t12;
  var t13;
  if ($[13] !== initHidden) {
    t12 = function t12() {
      return setHidden(initHidden);
    };
    t13 = [initHidden];
    $[13] = initHidden;
    $[14] = t12;
    $[15] = t13;
  } else {
    t12 = $[14];
    t13 = $[15];
  }
  useFirstSkipChanged(t12, t13);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var t14;
  if ($[16] !== setError) {
    t14 = function t14(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[16] = setError;
    $[17] = t14;
  } else {
    t14 = $[17];
  }
  var setErrorErrorHelperText = t14;
  var t15;
  if ($[18] !== onValidateRef || $[19] !== required || $[20] !== setErrorErrorHelperText) {
    t15 = function t15(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (inputDatePickerErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
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
    };
    $[18] = onValidateRef;
    $[19] = required;
    $[20] = setErrorErrorHelperText;
    $[21] = t15;
  } else {
    t15 = $[21];
  }
  var validate = t15;
  var t16;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = function t16() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[22] = t16;
  } else {
    t16 = $[22];
  }
  var focus = t16;
  var t17;
  if ($[23] !== initValue) {
    t17 = getFinalValue$1(initValue);
    $[23] = initValue;
    $[24] = t17;
  } else {
    t17 = $[24];
  }
  var _useState11 = useState(t17),
    _useState12 = _slicedToArray(_useState11, 2),
    value_0 = _useState12[0],
    _setValue = _useState12[1];
  var t18;
  var t19;
  if ($[25] !== initValue) {
    t18 = function t18() {
      return _setValue(getFinalValue$1(initValue));
    };
    t19 = [initValue];
    $[25] = initValue;
    $[26] = t18;
    $[27] = t19;
  } else {
    t18 = $[26];
    t19 = $[27];
  }
  useFirstSkipChanged(t18, t19);
  var valueRef = useAutoUpdateRef(value_0);
  var t20;
  if ($[28] !== valueRef) {
    t20 = function t20(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[28] = valueRef;
    $[29] = t20;
  } else {
    t20 = $[29];
  }
  var setValue = t20;
  var t21;
  if ($[30] !== error || $[31] !== name || $[32] !== onChangeRef || $[33] !== onValueChange || $[34] !== setValue || $[35] !== validate) {
    t21 = function t21(newValue_2) {
      var _onChangeRef$current;
      var finalValue = getFinalValue$1(newValue_2);
      setValue(finalValue);
      if (error) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[30] = error;
    $[31] = name;
    $[32] = onChangeRef;
    $[33] = onValueChange;
    $[34] = setValue;
    $[35] = validate;
    $[36] = t21;
  } else {
    t21 = $[36];
  }
  var updateValue = t21;
  var t22;
  if ($[37] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = new Date().getFullYear();
    $[37] = t22;
  } else {
    t22 = $[37];
  }
  var nowYear = t22;
  var t23;
  if ($[38] !== minYear) {
    t23 = minYear ? valueToDate$1(minYear) : undefined;
    $[38] = minYear;
    $[39] = t23;
  } else {
    t23 = $[39];
  }
  var minDate = t23;
  var t24;
  if ($[40] !== maxYear) {
    t24 = maxYear ? valueToDate$1(maxYear) : undefined;
    $[40] = maxYear;
    $[41] = t24;
  } else {
    t24 = $[41];
  }
  var maxDate = t24;
  var t25;
  if ($[42] !== maxDate || $[43] !== minDate) {
    t25 = {
      nowYear: nowYear,
      min: minDate,
      max: maxDate
    };
    $[42] = maxDate;
    $[43] = minDate;
    $[44] = t25;
  } else {
    t25 = $[44];
  }
  var dateInfo = t25;
  var t26;
  if ($[45] !== name || $[46] !== onRequestSearchSubmit || $[47] !== open || $[48] !== valueRef) {
    t26 = function t26() {
      if (open) {
        openValueRef.current = valueRef.current;
      } else {
        if (openValueRef.current !== valueRef.current) {
          var runOnRequestSearchSubmit;
          if (openValueRef.current && valueRef.current) {
            runOnRequestSearchSubmit = openValueRef.current !== valueRef.current;
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, valueRef.current);
          }
        }
      }
    };
    $[45] = name;
    $[46] = onRequestSearchSubmit;
    $[47] = open;
    $[48] = valueRef;
    $[49] = t26;
  } else {
    t26 = $[49];
  }
  var t27;
  if ($[50] !== open) {
    t27 = [open];
    $[50] = open;
    $[51] = t27;
  } else {
    t27 = $[51];
  }
  useFirstSkipEffect(t26, t27);
  var t28;
  if ($[52] !== name) {
    t28 = function t28() {
      return name;
    };
    $[52] = name;
    $[53] = t28;
  } else {
    t28 = $[53];
  }
  var t29;
  if ($[54] !== initValueRef) {
    t29 = function t29() {
      return getFinalValue$1(initValueRef.current);
    };
    $[54] = initValueRef;
    $[55] = t29;
  } else {
    t29 = $[55];
  }
  var t30;
  if ($[56] !== initValueRef || $[57] !== updateValue) {
    t30 = function t30() {
      return updateValue(initValueRef.current);
    };
    $[56] = initValueRef;
    $[57] = updateValue;
    $[58] = t30;
  } else {
    t30 = $[58];
  }
  var t31;
  if ($[59] !== valueRef) {
    t31 = function t31() {
      return valueRef.current;
    };
    $[59] = valueRef;
    $[60] = t31;
  } else {
    t31 = $[60];
  }
  var t32;
  if ($[61] !== dataRef) {
    t32 = function t32() {
      return dataRef.current;
    };
    $[61] = dataRef;
    $[62] = t32;
  } else {
    t32 = $[62];
  }
  var t33;
  if ($[63] !== exceptValue) {
    t33 = function t33() {
      return !!exceptValue;
    };
    $[63] = exceptValue;
    $[64] = t33;
  } else {
    t33 = $[64];
  }
  var t34;
  if ($[65] !== disabled) {
    t34 = function t34() {
      return !!disabled;
    };
    $[65] = disabled;
    $[66] = t34;
  } else {
    t34 = $[66];
  }
  var t35;
  if ($[67] !== hidden) {
    t35 = function t35() {
      return !!hidden;
    };
    $[67] = hidden;
    $[68] = t35;
  } else {
    t35 = $[68];
  }
  var t36;
  if ($[69] !== validate || $[70] !== valueRef) {
    t36 = function t36() {
      return validate(valueRef.current);
    };
    $[69] = validate;
    $[70] = valueRef;
    $[71] = t36;
  } else {
    t36 = $[71];
  }
  var t37;
  if ($[72] !== setData || $[73] !== setErrorErrorHelperText || $[74] !== t28 || $[75] !== t29 || $[76] !== t30 || $[77] !== t31 || $[78] !== t32 || $[79] !== t33 || $[80] !== t34 || $[81] !== t35 || $[82] !== t36 || $[83] !== updateValue) {
    t37 = {
      getType: _temp$5,
      getName: t28,
      getReset: t29,
      reset: t30,
      getValue: t31,
      setValue: updateValue,
      getData: t32,
      setData: setData,
      isExceptValue: t33,
      isDisabled: t34,
      setDisabled: setDisabled,
      isHidden: t35,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t36,
      setError: setErrorErrorHelperText
    };
    $[72] = setData;
    $[73] = setErrorErrorHelperText;
    $[74] = t28;
    $[75] = t29;
    $[76] = t30;
    $[77] = t31;
    $[78] = t32;
    $[79] = t33;
    $[80] = t34;
    $[81] = t35;
    $[82] = t36;
    $[83] = updateValue;
    $[84] = t37;
  } else {
    t37 = $[84];
  }
  var commands = t37;
  var t38;
  if ($[85] !== id || $[86] !== onAddValueItem) {
    t38 = function t38(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[85] = id;
    $[86] = onAddValueItem;
    $[87] = t38;
  } else {
    t38 = $[87];
  }
  var t39;
  if ($[88] !== id || $[89] !== onRemoveValueItem) {
    t39 = function t39() {
      return onRemoveValueItem(id);
    };
    $[88] = id;
    $[89] = onRemoveValueItem;
    $[90] = t39;
  } else {
    t39 = $[90];
  }
  useForwardRef(ref, commands, t38, t39);
  var t40;
  if ($[91] === Symbol["for"]("react.memo_cache_sentinel")) {
    t40 = function t40() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[91] = t40;
  } else {
    t40 = $[91];
  }
  var handleContainerMouseDown = t40;
  var t41;
  if ($[92] === Symbol["for"]("react.memo_cache_sentinel")) {
    t41 = function t41() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[92] = t41;
  } else {
    t41 = $[92];
  }
  var handleContainerFocus = t41;
  var t42;
  if ($[93] === Symbol["for"]("react.memo_cache_sentinel")) {
    t42 = function t42() {
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
    };
    $[93] = t42;
  } else {
    t42 = $[93];
  }
  var handleContainerBlur = t42;
  var t43;
  if ($[94] !== name || $[95] !== onValueChangeByUser || $[96] !== updateValue) {
    t43 = function t43(newValue_3, isClick) {
      updateValue(newValue_3);
      if (isClick) {
        setOpen(false);
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_3);
      });
    };
    $[94] = name;
    $[95] = onValueChangeByUser;
    $[96] = updateValue;
    $[97] = t43;
  } else {
    t43 = $[97];
  }
  var handleContainerChange = t43;
  var t44;
  if ($[98] !== name || $[99] !== onValueChangeByUser || $[100] !== updateValue) {
    t44 = function t44(v) {
      var newValue_4 = v ? dateToValue$1(v) : v;
      updateValue(newValue_4);
      setTimeout(function () {
        onValueChangeByUser(name, newValue_4);
      });
    };
    $[98] = name;
    $[99] = onValueChangeByUser;
    $[100] = updateValue;
    $[101] = t44;
  } else {
    t44 = $[101];
  }
  var handleInputDatePickerChange = t44;
  var t45;
  if ($[102] !== disabled || $[103] !== readOnly) {
    t45 = function t45() {
      if (readOnly || disabled) {
        return;
      }
      setOpen(true);
    };
    $[102] = disabled;
    $[103] = readOnly;
    $[104] = t45;
  } else {
    t45 = $[104];
  }
  var handleInputDatePickerFocus = t45;
  var t46;
  if ($[105] !== dateInfo.nowYear || $[106] !== disableFuture || $[107] !== disablePast) {
    t46 = function t46(year) {
      return !!disablePast && year.year() < dateInfo.nowYear || !!disableFuture && year.year() > dateInfo.nowYear;
    };
    $[105] = dateInfo.nowYear;
    $[106] = disableFuture;
    $[107] = disablePast;
    $[108] = t46;
  } else {
    t46 = $[108];
  }
  var handleInputDatePickerShouldDisableYear = t46;
  var t47;
  if ($[109] !== value_0) {
    t47 = value_0 ? valueToDate$1(value_0) : null;
    $[109] = value_0;
    $[110] = t47;
  } else {
    t47 = $[110];
  }
  var valueDate = t47;
  var t48;
  if ($[111] === Symbol["for"]("react.memo_cache_sentinel")) {
    t48 = function t48() {
      return setOpen(false);
    };
    $[111] = t48;
  } else {
    t48 = $[111];
  }
  var t49;
  if ($[112] !== className) {
    t49 = classNames(className, "PFormYearPicker");
    $[112] = className;
    $[113] = t49;
  } else {
    t49 = $[113];
  }
  var t50 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t51 = fullWidth ? 1 : undefined;
  var t52;
  if ($[114] !== t50 || $[115] !== t51) {
    t52 = {
      display: t50,
      flex: t51
    };
    $[114] = t50;
    $[115] = t51;
    $[116] = t52;
  } else {
    t52 = $[116];
  }
  var t53 = error && errorHelperText ? 8 : -14;
  var t54;
  if ($[117] !== t53) {
    t54 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t53]
          }
        }]
      }
    };
    $[117] = t53;
    $[118] = t54;
  } else {
    t54 = $[118];
  }
  var t55;
  if ($[119] === Symbol["for"]("react.memo_cache_sentinel")) {
    t55 = {
      display: "flex"
    };
    $[119] = t55;
  } else {
    t55 = $[119];
  }
  var t56;
  if ($[120] !== disableFuture || $[121] !== disablePast || $[122] !== handleContainerChange || $[123] !== maxYear || $[124] !== minYear || $[125] !== value_0) {
    t56 = /*#__PURE__*/React.createElement("div", {
      style: t55
    }, /*#__PURE__*/React.createElement(PrivateYearPicker, {
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[120] = disableFuture;
    $[121] = disablePast;
    $[122] = handleContainerChange;
    $[123] = maxYear;
    $[124] = minYear;
    $[125] = value_0;
    $[126] = t56;
  } else {
    t56 = $[126];
  }
  var t57;
  if ($[127] !== fullWidth || $[128] !== initStyle || $[129] !== inputWidth) {
    t57 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[127] = fullWidth;
    $[128] = initStyle;
    $[129] = inputWidth;
    $[130] = t57;
  } else {
    t57 = $[130];
  }
  var t58;
  if ($[131] === Symbol["for"]("react.memo_cache_sentinel")) {
    t58 = function t58(reason) {
      return inputDatePickerErrorRef.current = reason;
    };
    $[131] = t58;
  } else {
    t58 = $[131];
  }
  var t59;
  if ($[132] !== color || $[133] !== dateInfo.max || $[134] !== dateInfo.min || $[135] !== disabled || $[136] !== enableKeyboardInput || $[137] !== endAdornment || $[138] !== error || $[139] !== focused || $[140] !== format || $[141] !== fullWidth || $[142] !== handleInputDatePickerChange || $[143] !== handleInputDatePickerFocus || $[144] !== handleInputDatePickerShouldDisableYear || $[145] !== icon || $[146] !== label || $[147] !== labelIcon || $[148] !== labelShrink || $[149] !== readOnly || $[150] !== required || $[151] !== size || $[152] !== startAdornment || $[153] !== sx || $[154] !== t57 || $[155] !== valueDate || $[156] !== variant) {
    t59 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateInputDatePicker, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: fullWidth,
      disabled: disabled,
      format: format,
      minDate: dateInfo.min,
      maxDate: dateInfo.max,
      style: t57,
      sx: sx,
      value: valueDate,
      label: label,
      labelIcon: labelIcon,
      error: error,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: inputRef,
      onChange: handleInputDatePickerChange,
      onFocus: handleInputDatePickerFocus,
      onError: t58,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    }));
    $[132] = color;
    $[133] = dateInfo.max;
    $[134] = dateInfo.min;
    $[135] = disabled;
    $[136] = enableKeyboardInput;
    $[137] = endAdornment;
    $[138] = error;
    $[139] = focused;
    $[140] = format;
    $[141] = fullWidth;
    $[142] = handleInputDatePickerChange;
    $[143] = handleInputDatePickerFocus;
    $[144] = handleInputDatePickerShouldDisableYear;
    $[145] = icon;
    $[146] = label;
    $[147] = labelIcon;
    $[148] = labelShrink;
    $[149] = readOnly;
    $[150] = required;
    $[151] = size;
    $[152] = startAdornment;
    $[153] = sx;
    $[154] = t57;
    $[155] = valueDate;
    $[156] = variant;
    $[157] = t59;
  } else {
    t59 = $[157];
  }
  var t60;
  if ($[158] !== open || $[159] !== t54 || $[160] !== t56 || $[161] !== t59) {
    t60 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t54,
      title: t56
    }, t59);
    $[158] = open;
    $[159] = t54;
    $[160] = t56;
    $[161] = t59;
    $[162] = t60;
  } else {
    t60 = $[162];
  }
  var t61;
  if ($[163] !== error || $[164] !== errorHelperText || $[165] !== formColWithHelperText || $[166] !== helperText || $[167] !== variant) {
    t61 = !formColWithHelperText && (!!helperText || error && !!errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[163] = error;
    $[164] = errorHelperText;
    $[165] = formColWithHelperText;
    $[166] = helperText;
    $[167] = variant;
    $[168] = t61;
  } else {
    t61 = $[168];
  }
  var t62;
  if ($[169] !== t49 || $[170] !== t52 || $[171] !== t60 || $[172] !== t61) {
    t62 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t48
    }, /*#__PURE__*/React.createElement("div", {
      className: t49,
      style: t52,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t60, t61)));
    $[169] = t49;
    $[170] = t52;
    $[171] = t60;
    $[172] = t61;
    $[173] = t62;
  } else {
    t62 = $[173];
  }
  return t62;
};
function _temp$5() {
  return "PFormYearPicker";
}var DEFAULT_VALUE = [null, null];
var valueToDate = function valueToDate(v) {
  return dayjs("".concat(v, "-01-01"));
};
var dateToValue = function dateToValue(v) {
  return v.year();
};
var getFinalValue = function getFinalValue(value) {
  return value || DEFAULT_VALUE;
};var PFormYearRangePicker = function PFormYearRangePicker(t0) {
  var $ = c(248);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initHidden = t0.hidden,
    name = t0.name,
    fromLabel = t0.fromLabel,
    fromLabelIcon = t0.fromLabelIcon,
    toLabel = t0.toLabel,
    toLabelIcon = t0.toLabelIcon,
    readOnly = t0.readOnly,
    required = t0.required,
    initFullWidth = t0.fullWidth,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    initValue = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    icon = t0.icon,
    t1 = t0.format,
    initLabelShrink = t0.labelShrink,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    t2 = t0.minYear,
    t3 = t0.maxYear,
    inputWidth = t0.inputWidth,
    enableKeyboardInput = t0.enableKeyboardInput,
    startAdornment = t0.startAdornment,
    endAdornment = t0.endAdornment,
    t4 = t0.formValueFromNameSuffix,
    t5 = t0.formValueToNameSuffix,
    align = t0.align,
    className = t0.className,
    initStyle = t0.style,
    sx = t0.sx;
  var format = t1 === undefined ? "YYYY\uB144" : t1;
  var minYear = t2 === undefined ? 2020 : t2;
  var maxYear = t3 === undefined ? 2050 : t3;
  var formValueFromNameSuffix = t4 === undefined ? "_from" : t4;
  var formValueToNameSuffix = t5 === undefined ? "_to" : t5;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formLabelShrink = _useFormState.labelShrink,
    formFullWidth = _useFormState.fullWidth,
    formDisabled = _useFormState.disabled,
    formColWithHelperText = _useFormState.formColWithHelperText,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var focused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var labelShrink = initLabelShrink !== null && initLabelShrink !== void 0 ? initLabelShrink : formLabelShrink;
  var fullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var initValueRef = useAutoUpdateRef(initValue);
  var startInputRef = useRef(undefined);
  var endInputRef = useRef(undefined);
  var startInputDatePickerErrorRef = useRef(null);
  var endInputDatePickerErrorRef = useRef(null);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fromError = _useState4[0],
    setFromError = _useState4[1];
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    fromErrorHelperText = _useState6[0],
    setFromErrorHelperText = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    toError = _useState8[0],
    setToError = _useState8[1];
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    toErrorHelperText = _useState0[0],
    setToErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var _useState11 = useState("start"),
    _useState12 = _slicedToArray(_useState11, 2),
    selectType = _useState12[0],
    setSelectType = _useState12[1];
  var _useState13 = useState(),
    _useState14 = _slicedToArray(_useState13, 2),
    openValue = _useState14[0],
    setOpenValue = _useState14[1];
  var _useState15 = useState(initError),
    _useState16 = _slicedToArray(_useState15, 2),
    error = _useState16[0],
    _setError = _useState16[1];
  var t6;
  var t7;
  if ($[0] !== initError) {
    t6 = function t6() {
      return _setError(initError);
    };
    t7 = [initError];
    $[0] = initError;
    $[1] = t6;
    $[2] = t7;
  } else {
    t6 = $[1];
    t7 = $[2];
  }
  useFirstSkipChanged(t6, t7);
  var errorRef = useAutoUpdateRef(error);
  var t8;
  if ($[3] !== errorRef) {
    t8 = function t8(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[3] = errorRef;
    $[4] = t8;
  } else {
    t8 = $[4];
  }
  var setError = t8;
  var _useState17 = useState(initData),
    _useState18 = _slicedToArray(_useState17, 2),
    data = _useState18[0],
    _setData = _useState18[1];
  var t10;
  var t9;
  if ($[5] !== initData) {
    t9 = function t9() {
      return _setData(initData);
    };
    t10 = [initData];
    $[5] = initData;
    $[6] = t10;
    $[7] = t9;
  } else {
    t10 = $[6];
    t9 = $[7];
  }
  useFirstSkipChanged(t9, t10);
  var dataRef = useAutoUpdateRef(data);
  var t11;
  if ($[8] !== dataRef) {
    t11 = function t11(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[8] = dataRef;
    $[9] = t11;
  } else {
    t11 = $[9];
  }
  var setData = t11;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState19 = useState(finalInitDisabled),
    _useState20 = _slicedToArray(_useState19, 2),
    disabled = _useState20[0],
    setDisabled = _useState20[1];
  var t12;
  var t13;
  if ($[10] !== finalInitDisabled) {
    t12 = function t12() {
      return setDisabled(finalInitDisabled);
    };
    t13 = [finalInitDisabled];
    $[10] = finalInitDisabled;
    $[11] = t12;
    $[12] = t13;
  } else {
    t12 = $[11];
    t13 = $[12];
  }
  useFirstSkipChanged(t12, t13);
  var _useState21 = useState(initHidden),
    _useState22 = _slicedToArray(_useState21, 2),
    hidden = _useState22[0],
    setHidden = _useState22[1];
  var t14;
  var t15;
  if ($[13] !== initHidden) {
    t14 = function t14() {
      return setHidden(initHidden);
    };
    t15 = [initHidden];
    $[13] = initHidden;
    $[14] = t14;
    $[15] = t15;
  } else {
    t14 = $[14];
    t15 = $[15];
  }
  useFirstSkipChanged(t14, t15);
  var t16;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = function t16(error_0, fromErrorHelperText_0) {
      setFromError(error_0);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[16] = t16;
  } else {
    t16 = $[16];
  }
  var setFromErrorErrorHelperText = t16;
  var t17;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t17 = function t17(error_1, toErrorHelperText_0) {
      setToError(error_1);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[17] = t17;
  } else {
    t17 = $[17];
  }
  var setToErrorErrorHelperText = t17;
  var t18;
  if ($[18] !== setError) {
    t18 = function t18(error_2, errorHelperText_0) {
      setError(error_2);
      setErrorHelperText(error_2 ? errorHelperText_0 : undefined);
    };
    $[18] = setError;
    $[19] = t18;
  } else {
    t18 = $[19];
  }
  var setErrorErrorHelperText = t18;
  var t19;
  if ($[20] !== onValidateRef || $[21] !== required || $[22] !== setErrorErrorHelperText) {
    t19 = function t19(value) {
      if (required && (value[0] == null || value[1] == null)) {
        if (value[0] == null && value[1] == null) {
          setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          if (value[0] == null) {
            setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          } else {
            setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          }
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
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      setFromErrorErrorHelperText(false, undefined);
      setToErrorErrorHelperText(false, undefined);
      return true;
    };
    $[20] = onValidateRef;
    $[21] = required;
    $[22] = setErrorErrorHelperText;
    $[23] = t19;
  } else {
    t19 = $[23];
  }
  var validate = t19;
  var t20;
  if ($[24] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = function t20() {
      var _startInputRef$curren;
      (_startInputRef$curren = startInputRef.current) === null || _startInputRef$curren === void 0 || _startInputRef$curren.focus();
    };
    $[24] = t20;
  } else {
    t20 = $[24];
  }
  var focus = t20;
  var t21;
  if ($[25] !== initValue) {
    t21 = getFinalValue(initValue);
    $[25] = initValue;
    $[26] = t21;
  } else {
    t21 = $[26];
  }
  var _useState23 = useState(t21),
    _useState24 = _slicedToArray(_useState23, 2),
    value_0 = _useState24[0],
    _setValue = _useState24[1];
  var t22;
  var t23;
  if ($[27] !== initValue) {
    t22 = function t22() {
      return _setValue(getFinalValue(initValue));
    };
    t23 = [initValue];
    $[27] = initValue;
    $[28] = t22;
    $[29] = t23;
  } else {
    t22 = $[28];
    t23 = $[29];
  }
  useFirstSkipChanged(t22, t23);
  var valueRef = useAutoUpdateRef(value_0);
  var t24;
  if ($[30] !== valueRef) {
    t24 = function t24(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[30] = valueRef;
    $[31] = t24;
  } else {
    t24 = $[31];
  }
  var setValue = t24;
  var t25;
  if ($[32] !== error || $[33] !== fromError || $[34] !== name || $[35] !== onChangeRef || $[36] !== onValueChange || $[37] !== setValue || $[38] !== toError || $[39] !== validate) {
    t25 = function t25(newValue_2) {
      var _onChangeRef$current;
      var finalValue = getFinalValue(newValue_2);
      setValue(finalValue);
      if (error || fromError || toError) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[32] = error;
    $[33] = fromError;
    $[34] = name;
    $[35] = onChangeRef;
    $[36] = onValueChange;
    $[37] = setValue;
    $[38] = toError;
    $[39] = validate;
    $[40] = t25;
  } else {
    t25 = $[40];
  }
  var updateValue = t25;
  var t26;
  if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = new Date().getFullYear();
    $[41] = t26;
  } else {
    t26 = $[41];
  }
  var nowYear = t26;
  var t27;
  if ($[42] !== minYear) {
    t27 = valueToDate(minYear);
    $[42] = minYear;
    $[43] = t27;
  } else {
    t27 = $[43];
  }
  var minDate = t27;
  var t28;
  if ($[44] !== maxYear) {
    t28 = valueToDate(maxYear);
    $[44] = maxYear;
    $[45] = t28;
  } else {
    t28 = $[45];
  }
  var maxDate = t28;
  var t29;
  if ($[46] !== maxDate || $[47] !== minDate) {
    t29 = {
      nowYear: nowYear,
      min: minDate,
      max: maxDate
    };
    $[46] = maxDate;
    $[47] = minDate;
    $[48] = t29;
  } else {
    t29 = $[48];
  }
  var dateInfo = t29;
  var t30;
  if ($[49] !== name || $[50] !== onRequestSearchSubmit || $[51] !== open || $[52] !== openValue || $[53] !== value_0) {
    t30 = function t30() {
      if (open) {
        setOpenValue(value_0);
      } else {
        if (openValue !== value_0) {
          var runOnRequestSearchSubmit;
          if (openValue && value_0) {
            runOnRequestSearchSubmit = openValue !== value_0;
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, value_0);
          }
        }
      }
    };
    $[49] = name;
    $[50] = onRequestSearchSubmit;
    $[51] = open;
    $[52] = openValue;
    $[53] = value_0;
    $[54] = t30;
  } else {
    t30 = $[54];
  }
  var t31;
  if ($[55] !== open) {
    t31 = [open];
    $[55] = open;
    $[56] = t31;
  } else {
    t31 = $[56];
  }
  useFirstSkipEffect(t30, t31);
  var t32;
  if ($[57] !== name) {
    t32 = function t32() {
      return name;
    };
    $[57] = name;
    $[58] = t32;
  } else {
    t32 = $[58];
  }
  var t33;
  if ($[59] !== initValueRef) {
    t33 = function t33() {
      return getFinalValue(initValueRef.current);
    };
    $[59] = initValueRef;
    $[60] = t33;
  } else {
    t33 = $[60];
  }
  var t34;
  if ($[61] !== initValueRef || $[62] !== updateValue) {
    t34 = function t34() {
      return updateValue(initValueRef.current);
    };
    $[61] = initValueRef;
    $[62] = updateValue;
    $[63] = t34;
  } else {
    t34 = $[63];
  }
  var t35;
  if ($[64] !== valueRef) {
    t35 = function t35() {
      return valueRef.current;
    };
    $[64] = valueRef;
    $[65] = t35;
  } else {
    t35 = $[65];
  }
  var t36;
  if ($[66] !== dataRef) {
    t36 = function t36() {
      return dataRef.current;
    };
    $[66] = dataRef;
    $[67] = t36;
  } else {
    t36 = $[67];
  }
  var t37;
  if ($[68] !== valueRef) {
    t37 = function t37() {
      return valueRef.current[0];
    };
    $[68] = valueRef;
    $[69] = t37;
  } else {
    t37 = $[69];
  }
  var t38;
  if ($[70] !== updateValue || $[71] !== valueRef) {
    t38 = function t38(value_1) {
      return updateValue([value_1, valueRef.current[1]]);
    };
    $[70] = updateValue;
    $[71] = valueRef;
    $[72] = t38;
  } else {
    t38 = $[72];
  }
  var t39;
  if ($[73] !== valueRef) {
    t39 = function t39() {
      return valueRef.current[1];
    };
    $[73] = valueRef;
    $[74] = t39;
  } else {
    t39 = $[74];
  }
  var t40;
  if ($[75] !== updateValue || $[76] !== valueRef) {
    t40 = function t40(value_2) {
      return updateValue([valueRef.current[0], value_2]);
    };
    $[75] = updateValue;
    $[76] = valueRef;
    $[77] = t40;
  } else {
    t40 = $[77];
  }
  var t41;
  if ($[78] !== exceptValue) {
    t41 = function t41() {
      return !!exceptValue;
    };
    $[78] = exceptValue;
    $[79] = t41;
  } else {
    t41 = $[79];
  }
  var t42;
  if ($[80] !== disabled) {
    t42 = function t42() {
      return !!disabled;
    };
    $[80] = disabled;
    $[81] = t42;
  } else {
    t42 = $[81];
  }
  var t43;
  if ($[82] !== hidden) {
    t43 = function t43() {
      return !!hidden;
    };
    $[82] = hidden;
    $[83] = t43;
  } else {
    t43 = $[83];
  }
  var t44;
  if ($[84] !== validate || $[85] !== valueRef) {
    t44 = function t44() {
      return validate(valueRef.current);
    };
    $[84] = validate;
    $[85] = valueRef;
    $[86] = t44;
  } else {
    t44 = $[86];
  }
  var t45;
  if ($[87] !== formValueFromNameSuffix) {
    t45 = function t45() {
      return formValueFromNameSuffix;
    };
    $[87] = formValueFromNameSuffix;
    $[88] = t45;
  } else {
    t45 = $[88];
  }
  var t46;
  if ($[89] !== formValueToNameSuffix) {
    t46 = function t46() {
      return formValueToNameSuffix;
    };
    $[89] = formValueToNameSuffix;
    $[90] = t46;
  } else {
    t46 = $[90];
  }
  var t47;
  if ($[91] !== formValueFromNameSuffix || $[92] !== name) {
    t47 = function t47() {
      return "".concat(name).concat(formValueFromNameSuffix);
    };
    $[91] = formValueFromNameSuffix;
    $[92] = name;
    $[93] = t47;
  } else {
    t47 = $[93];
  }
  var t48;
  if ($[94] !== formValueToNameSuffix || $[95] !== name) {
    t48 = function t48() {
      return "".concat(name).concat(formValueToNameSuffix);
    };
    $[94] = formValueToNameSuffix;
    $[95] = name;
    $[96] = t48;
  } else {
    t48 = $[96];
  }
  var t49;
  if ($[97] !== setData || $[98] !== setErrorErrorHelperText || $[99] !== t32 || $[100] !== t33 || $[101] !== t34 || $[102] !== t35 || $[103] !== t36 || $[104] !== t37 || $[105] !== t38 || $[106] !== t39 || $[107] !== t40 || $[108] !== t41 || $[109] !== t42 || $[110] !== t43 || $[111] !== t44 || $[112] !== t45 || $[113] !== t46 || $[114] !== t47 || $[115] !== t48 || $[116] !== updateValue) {
    t49 = {
      getType: _temp$4,
      getName: t32,
      getReset: t33,
      reset: t34,
      getValue: t35,
      setValue: updateValue,
      getData: t36,
      setData: setData,
      getFromValue: t37,
      setFromValue: t38,
      getToValue: t39,
      setToValue: t40,
      isExceptValue: t41,
      isDisabled: t42,
      setDisabled: setDisabled,
      isHidden: t43,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t44,
      setError: setErrorErrorHelperText,
      getFormValueFromNameSuffix: t45,
      getFormValueToNameSuffix: t46,
      getFormValueFromName: t47,
      getFormValueToName: t48
    };
    $[97] = setData;
    $[98] = setErrorErrorHelperText;
    $[99] = t32;
    $[100] = t33;
    $[101] = t34;
    $[102] = t35;
    $[103] = t36;
    $[104] = t37;
    $[105] = t38;
    $[106] = t39;
    $[107] = t40;
    $[108] = t41;
    $[109] = t42;
    $[110] = t43;
    $[111] = t44;
    $[112] = t45;
    $[113] = t46;
    $[114] = t47;
    $[115] = t48;
    $[116] = updateValue;
    $[117] = t49;
  } else {
    t49 = $[117];
  }
  var commands = t49;
  var t50;
  if ($[118] !== id || $[119] !== onAddValueItem) {
    t50 = function t50(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[118] = id;
    $[119] = onAddValueItem;
    $[120] = t50;
  } else {
    t50 = $[120];
  }
  var t51;
  if ($[121] !== id || $[122] !== onRemoveValueItem) {
    t51 = function t51() {
      return onRemoveValueItem(id);
    };
    $[121] = id;
    $[122] = onRemoveValueItem;
    $[123] = t51;
  } else {
    t51 = $[123];
  }
  useForwardRef(ref, commands, t50, t51);
  var t52;
  if ($[124] !== name || $[125] !== onValueChangeByUser || $[126] !== updateValue) {
    t52 = function t52(newValue_3, selectType_0) {
      updateValue(newValue_3);
      if (selectType_0 === "start") {
        setTimeout(function () {
          var _endInputRef$current;
          setSelectType("end");
          (_endInputRef$current = endInputRef.current) === null || _endInputRef$current === void 0 || _endInputRef$current.focus();
        });
      } else {
        if (selectType_0 === "end") {
          setOpen(false);
        }
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_3);
      });
    };
    $[124] = name;
    $[125] = onValueChangeByUser;
    $[126] = updateValue;
    $[127] = t52;
  } else {
    t52 = $[127];
  }
  var handleContainerChange = t52;
  var t53;
  if ($[128] !== fromError || $[129] !== maxYear || $[130] !== minYear || $[131] !== name || $[132] !== onValueChangeByUser || $[133] !== toError || $[134] !== updateValue || $[135] !== validate || $[136] !== valueRef) {
    t53 = function t53(selectType_1, date) {
      if (date == null || date.isValid()) {
        if (selectType_1 === "start") {
          var newValue_4 = [date ? dateToValue(date) : null, valueRef.current[1]];
          if (newValue_4[0] !== null && newValue_4[0] >= minYear && newValue_4[0] <= maxYear) {
            if (newValue_4[1] !== null && newValue_4[1] < newValue_4[0]) {
              newValue_4[1] = newValue_4[0];
            }
          }
          if (fromError) {
            validate(newValue_4);
          }
          setTimeout(function () {
            onValueChangeByUser(name, newValue_4);
          });
          updateValue(newValue_4);
        } else {
          var newValue_5 = [valueRef.current[0], date ? dateToValue(date) : null];
          if (newValue_5[1] !== null && newValue_5[1] >= minYear && newValue_5[1] <= maxYear) {
            if (newValue_5[0] !== null && newValue_5[0] > newValue_5[1]) {
              newValue_5[0] = newValue_5[1];
            }
          }
          if (toError) {
            validate(newValue_5);
          }
          setTimeout(function () {
            onValueChangeByUser(name, newValue_5);
          });
          updateValue(newValue_5);
        }
      }
    };
    $[128] = fromError;
    $[129] = maxYear;
    $[130] = minYear;
    $[131] = name;
    $[132] = onValueChangeByUser;
    $[133] = toError;
    $[134] = updateValue;
    $[135] = validate;
    $[136] = valueRef;
    $[137] = t53;
  } else {
    t53 = $[137];
  }
  var handleInputDatePickerChange = t53;
  var t54;
  if ($[138] !== disabled || $[139] !== readOnly || $[140] !== valueRef) {
    t54 = function t54(selectType_2) {
      if (readOnly || disabled) {
        return;
      }
      if (selectType_2 === "end" && valueRef.current[0] == null) {
        var _startInputRef$curren2;
        (_startInputRef$curren2 = startInputRef.current) === null || _startInputRef$curren2 === void 0 || _startInputRef$curren2.focus();
      } else {
        setSelectType(selectType_2);
        setOpen(true);
      }
    };
    $[138] = disabled;
    $[139] = readOnly;
    $[140] = valueRef;
    $[141] = t54;
  } else {
    t54 = $[141];
  }
  var handleInputDatePickerFocus = t54;
  var t55;
  if ($[142] !== dateInfo.nowYear || $[143] !== disableFuture || $[144] !== disablePast) {
    t55 = function t55(year) {
      return !!disablePast && year.year() < dateInfo.nowYear || !!disableFuture && year.year() > dateInfo.nowYear;
    };
    $[142] = dateInfo.nowYear;
    $[143] = disableFuture;
    $[144] = disablePast;
    $[145] = t55;
  } else {
    t55 = $[145];
  }
  var handleInputDatePickerShouldDisableYear = t55;
  var t56;
  if ($[146] !== value_0) {
    t56 = !!value_0 && !!value_0[0] ? valueToDate(value_0[0]) : null;
    $[146] = value_0;
    $[147] = t56;
  } else {
    t56 = $[147];
  }
  var t57;
  if ($[148] !== value_0) {
    t57 = !!value_0 && !!value_0[1] ? valueToDate(value_0[1]) : null;
    $[148] = value_0;
    $[149] = t57;
  } else {
    t57 = $[149];
  }
  var t58;
  if ($[150] !== t56 || $[151] !== t57) {
    t58 = [t56, t57];
    $[150] = t56;
    $[151] = t57;
    $[152] = t58;
  } else {
    t58 = $[152];
  }
  var valueDate = t58;
  var t59;
  if ($[153] !== fullWidth || $[154] !== initStyle || $[155] !== inputWidth) {
    t59 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[153] = fullWidth;
    $[154] = initStyle;
    $[155] = inputWidth;
    $[156] = t59;
  } else {
    t59 = $[156];
  }
  var t60;
  if ($[157] !== align || $[158] !== color || $[159] !== dateInfo.max || $[160] !== dateInfo.min || $[161] !== disabled || $[162] !== enableKeyboardInput || $[163] !== endAdornment || $[164] !== focused || $[165] !== format || $[166] !== fullWidth || $[167] !== icon || $[168] !== labelShrink || $[169] !== readOnly || $[170] !== required || $[171] !== size || $[172] !== startAdornment || $[173] !== sx || $[174] !== t59 || $[175] !== variant) {
    t60 = {
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
      style: t59,
      sx: sx,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment
    };
    $[157] = align;
    $[158] = color;
    $[159] = dateInfo.max;
    $[160] = dateInfo.min;
    $[161] = disabled;
    $[162] = enableKeyboardInput;
    $[163] = endAdornment;
    $[164] = focused;
    $[165] = format;
    $[166] = fullWidth;
    $[167] = icon;
    $[168] = labelShrink;
    $[169] = readOnly;
    $[170] = required;
    $[171] = size;
    $[172] = startAdornment;
    $[173] = sx;
    $[174] = t59;
    $[175] = variant;
    $[176] = t60;
  } else {
    t60 = $[176];
  }
  var privateInputDatePickerProps = t60;
  var t61;
  if ($[177] === Symbol["for"]("react.memo_cache_sentinel")) {
    t61 = function t61() {
      return setOpen(false);
    };
    $[177] = t61;
  } else {
    t61 = $[177];
  }
  var t62;
  if ($[178] !== className) {
    t62 = classNames(className, "PFormYearRangePicker");
    $[178] = className;
    $[179] = t62;
  } else {
    t62 = $[179];
  }
  var t63 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t64 = fullWidth ? 1 : undefined;
  var t65;
  if ($[180] !== t63 || $[181] !== t64) {
    t65 = {
      display: t63,
      flex: t64
    };
    $[180] = t63;
    $[181] = t64;
    $[182] = t65;
  } else {
    t65 = $[182];
  }
  var t66 = error && errorHelperText ? 8 : -14;
  var t67;
  if ($[183] !== t66) {
    t67 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t66]
          }
        }]
      }
    };
    $[183] = t66;
    $[184] = t67;
  } else {
    t67 = $[184];
  }
  var t68;
  if ($[185] === Symbol["for"]("react.memo_cache_sentinel")) {
    t68 = {
      display: "flex"
    };
    $[185] = t68;
  } else {
    t68 = $[185];
  }
  var t69;
  if ($[186] !== disableFuture || $[187] !== disablePast || $[188] !== handleContainerChange || $[189] !== maxYear || $[190] !== minYear || $[191] !== selectType || $[192] !== value_0) {
    t69 = /*#__PURE__*/React.createElement("div", {
      style: t68
    }, /*#__PURE__*/React.createElement(PrivateYearRangePicker, {
      selectType: selectType,
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[186] = disableFuture;
    $[187] = disablePast;
    $[188] = handleContainerChange;
    $[189] = maxYear;
    $[190] = minYear;
    $[191] = selectType;
    $[192] = value_0;
    $[193] = t69;
  } else {
    t69 = $[193];
  }
  var t70 = error || fromError;
  var t71 = focused || open && selectType === "start";
  var t72;
  if ($[194] !== handleInputDatePickerChange) {
    t72 = function t72(v) {
      return handleInputDatePickerChange("start", v);
    };
    $[194] = handleInputDatePickerChange;
    $[195] = t72;
  } else {
    t72 = $[195];
  }
  var t73;
  if ($[196] !== handleInputDatePickerFocus) {
    t73 = function t73() {
      return handleInputDatePickerFocus("start");
    };
    $[196] = handleInputDatePickerFocus;
    $[197] = t73;
  } else {
    t73 = $[197];
  }
  var t74;
  if ($[198] === Symbol["for"]("react.memo_cache_sentinel")) {
    t74 = function t74(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[198] = t74;
  } else {
    t74 = $[198];
  }
  var t75;
  if ($[199] !== fromLabel || $[200] !== fromLabelIcon || $[201] !== handleInputDatePickerShouldDisableYear || $[202] !== privateInputDatePickerProps || $[203] !== t70 || $[204] !== t71 || $[205] !== t72 || $[206] !== t73 || $[207] !== valueDate[0]) {
    t75 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, privateInputDatePickerProps, {
      inputRef: startInputRef,
      value: valueDate[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t70,
      focused: t71,
      onChange: t72,
      onFocus: t73,
      onError: t74,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[199] = fromLabel;
    $[200] = fromLabelIcon;
    $[201] = handleInputDatePickerShouldDisableYear;
    $[202] = privateInputDatePickerProps;
    $[203] = t70;
    $[204] = t71;
    $[205] = t72;
    $[206] = t73;
    $[207] = valueDate[0];
    $[208] = t75;
  } else {
    t75 = $[208];
  }
  var t76;
  if ($[209] === Symbol["for"]("react.memo_cache_sentinel")) {
    t76 = /*#__PURE__*/React.createElement(Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[209] = t76;
  } else {
    t76 = $[209];
  }
  var t77 = error || toError;
  var t78 = focused || open && selectType === "end";
  var t79;
  if ($[210] !== handleInputDatePickerChange) {
    t79 = function t79(v_0) {
      return handleInputDatePickerChange("end", v_0);
    };
    $[210] = handleInputDatePickerChange;
    $[211] = t79;
  } else {
    t79 = $[211];
  }
  var t80;
  if ($[212] !== handleInputDatePickerFocus) {
    t80 = function t80() {
      return handleInputDatePickerFocus("end");
    };
    $[212] = handleInputDatePickerFocus;
    $[213] = t80;
  } else {
    t80 = $[213];
  }
  var t81;
  if ($[214] === Symbol["for"]("react.memo_cache_sentinel")) {
    t81 = function t81(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[214] = t81;
  } else {
    t81 = $[214];
  }
  var t82;
  if ($[215] !== handleInputDatePickerShouldDisableYear || $[216] !== privateInputDatePickerProps || $[217] !== t77 || $[218] !== t78 || $[219] !== t79 || $[220] !== t80 || $[221] !== toLabel || $[222] !== toLabelIcon || $[223] !== valueDate[1]) {
    t82 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, privateInputDatePickerProps, {
      inputRef: endInputRef,
      value: valueDate[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t77,
      focused: t78,
      onChange: t79,
      onFocus: t80,
      onError: t81,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[215] = handleInputDatePickerShouldDisableYear;
    $[216] = privateInputDatePickerProps;
    $[217] = t77;
    $[218] = t78;
    $[219] = t79;
    $[220] = t80;
    $[221] = toLabel;
    $[222] = toLabelIcon;
    $[223] = valueDate[1];
    $[224] = t82;
  } else {
    t82 = $[224];
  }
  var t83;
  if ($[225] !== t75 || $[226] !== t82) {
    t83 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      alignItems: "center"
    }, t75, t76, t82);
    $[225] = t75;
    $[226] = t82;
    $[227] = t83;
  } else {
    t83 = $[227];
  }
  var t84;
  if ($[228] !== open || $[229] !== t67 || $[230] !== t69 || $[231] !== t83) {
    t84 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t67,
      title: t69
    }, t83);
    $[228] = open;
    $[229] = t67;
    $[230] = t69;
    $[231] = t83;
    $[232] = t84;
  } else {
    t84 = $[232];
  }
  var t85;
  if ($[233] !== error || $[234] !== errorHelperText || $[235] !== formColWithHelperText || $[236] !== fromError || $[237] !== fromErrorHelperText || $[238] !== helperText || $[239] !== toError || $[240] !== toErrorHelperText || $[241] !== variant) {
    t85 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[233] = error;
    $[234] = errorHelperText;
    $[235] = formColWithHelperText;
    $[236] = fromError;
    $[237] = fromErrorHelperText;
    $[238] = helperText;
    $[239] = toError;
    $[240] = toErrorHelperText;
    $[241] = variant;
    $[242] = t85;
  } else {
    t85 = $[242];
  }
  var t86;
  if ($[243] !== t62 || $[244] !== t65 || $[245] !== t84 || $[246] !== t85) {
    t86 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t61
    }, /*#__PURE__*/React.createElement("div", {
      className: t62,
      style: t65
    }, t84, t85)));
    $[243] = t62;
    $[244] = t65;
    $[245] = t84;
    $[246] = t85;
    $[247] = t86;
  } else {
    t86 = $[247];
  }
  return t86;
};
function _temp$4() {
  return "PFormYearRangePicker";
}var PFormSwitch = function PFormSwitch(t0) {
  var $ = c(125);
  var ref = t0.ref,
    initVariant = t0.variant,
    initSize = t0.size,
    initColor = t0.color,
    initFocused = t0.focused,
    initHidden = t0.hidden,
    name = t0.name,
    labelIcon = t0.labelIcon,
    label = t0.label,
    readOnly = t0.readOnly,
    initDisabled = t0.disabled,
    initError = t0.error,
    helperText = t0.helperText,
    initValue = t0.value,
    initData = t0.data,
    exceptValue = t0.exceptValue,
    onChange = t0.onChange,
    onValidate = t0.onValidate,
    onValue = t0.onValue,
    switchLabel = t0.switchLabel,
    className = t0.className,
    style = t0.style,
    sx = t0.sx;
  var id = useId();
  var _useFormState = useFormState(),
    formVariant = _useFormState.variant,
    formSize = _useFormState.size,
    formColor = _useFormState.color,
    formFocused = _useFormState.focused,
    formDisabled = _useFormState.disabled,
    onAddValueItem = _useFormState.onAddValueItem,
    onRemoveValueItem = _useFormState.onRemoveValueItem,
    onValueChange = _useFormState.onValueChange,
    onValueChangeByUser = _useFormState.onValueChangeByUser,
    onRequestSearchSubmit = _useFormState.onRequestSearchSubmit;
  var variant = initVariant !== null && initVariant !== void 0 ? initVariant : formVariant;
  var size = initSize !== null && initSize !== void 0 ? initSize : formSize;
  var color = initColor !== null && initColor !== void 0 ? initColor : formColor;
  var initValueRef = useAutoUpdateRef(initValue);
  var inputRef = useRef(undefined);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState3 = useState(finalInitFocused),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var t1;
  var t2;
  if ($[0] !== finalInitFocused) {
    t1 = function t1() {
      return setFocused(finalInitFocused);
    };
    t2 = [finalInitFocused];
    $[0] = finalInitFocused;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useFirstSkipChanged(t1, t2);
  var _useState5 = useState(initError),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    _setError = _useState6[1];
  var t3;
  var t4;
  if ($[3] !== initError) {
    t3 = function t3() {
      return _setError(initError);
    };
    t4 = [initError];
    $[3] = initError;
    $[4] = t3;
    $[5] = t4;
  } else {
    t3 = $[4];
    t4 = $[5];
  }
  useFirstSkipChanged(t3, t4);
  var errorRef = useAutoUpdateRef(error);
  var t5;
  if ($[6] !== errorRef) {
    t5 = function t5(newValue) {
      _setError(newValue);
      errorRef.current = newValue;
    };
    $[6] = errorRef;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  var setError = t5;
  var _useState7 = useState(initData),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    _setData = _useState8[1];
  var t6;
  var t7;
  if ($[8] !== initData) {
    t6 = function t6() {
      return _setData(initData);
    };
    t7 = [initData];
    $[8] = initData;
    $[9] = t6;
    $[10] = t7;
  } else {
    t6 = $[9];
    t7 = $[10];
  }
  useFirstSkipChanged(t6, t7);
  var dataRef = useAutoUpdateRef(data);
  var t8;
  if ($[11] !== dataRef) {
    t8 = function t8(newValue_0) {
      _setData(newValue_0);
      dataRef.current = newValue_0;
    };
    $[11] = dataRef;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  var setData = t8;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState9 = useState(finalInitDisabled),
    _useState0 = _slicedToArray(_useState9, 2),
    disabled = _useState0[0],
    setDisabled = _useState0[1];
  var t10;
  var t9;
  if ($[13] !== finalInitDisabled) {
    t9 = function t9() {
      return setDisabled(finalInitDisabled);
    };
    t10 = [finalInitDisabled];
    $[13] = finalInitDisabled;
    $[14] = t10;
    $[15] = t9;
  } else {
    t10 = $[14];
    t9 = $[15];
  }
  useFirstSkipChanged(t9, t10);
  var _useState1 = useState(initHidden),
    _useState10 = _slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  var t11;
  var t12;
  if ($[16] !== initHidden) {
    t11 = function t11() {
      return setHidden(initHidden);
    };
    t12 = [initHidden];
    $[16] = initHidden;
    $[17] = t11;
    $[18] = t12;
  } else {
    t11 = $[17];
    t12 = $[18];
  }
  useFirstSkipChanged(t11, t12);
  var t13;
  if ($[19] !== setError) {
    t13 = function t13(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[19] = setError;
    $[20] = t13;
  } else {
    t13 = $[20];
  }
  var setErrorErrorHelperText = t13;
  var t14;
  if ($[21] !== onValidateRef || $[22] !== setErrorErrorHelperText) {
    t14 = function t14(value) {
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[21] = onValidateRef;
    $[22] = setErrorErrorHelperText;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  var validate = t14;
  var t15;
  if ($[24] === Symbol["for"]("react.memo_cache_sentinel")) {
    t15 = function t15() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  var focus = t15;
  var t16;
  if ($[25] !== onValue) {
    t16 = function t16(value_0) {
      var finalValue = value_0 || false;
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[25] = onValue;
    $[26] = t16;
  } else {
    t16 = $[26];
  }
  var getFinalValue = t16;
  var getFinalValueRef = useAutoUpdateRef(getFinalValue);
  var t17;
  if ($[27] !== getFinalValue || $[28] !== initValue) {
    t17 = getFinalValue(initValue);
    $[27] = getFinalValue;
    $[28] = initValue;
    $[29] = t17;
  } else {
    t17 = $[29];
  }
  var _useState11 = useState(t17),
    _useState12 = _slicedToArray(_useState11, 2),
    value_1 = _useState12[0],
    _setValue = _useState12[1];
  var t18;
  if ($[30] !== getFinalValue || $[31] !== initValue) {
    t18 = function t18() {
      return _setValue(getFinalValue(initValue));
    };
    $[30] = getFinalValue;
    $[31] = initValue;
    $[32] = t18;
  } else {
    t18 = $[32];
  }
  var t19;
  if ($[33] !== initValue) {
    t19 = [initValue];
    $[33] = initValue;
    $[34] = t19;
  } else {
    t19 = $[34];
  }
  useFirstSkipChanged(t18, t19);
  var valueRef = useAutoUpdateRef(value_1);
  var t20;
  if ($[35] !== valueRef) {
    t20 = function t20(newValue_1) {
      _setValue(newValue_1);
      valueRef.current = newValue_1;
    };
    $[35] = valueRef;
    $[36] = t20;
  } else {
    t20 = $[36];
  }
  var setValue = t20;
  var t21;
  if ($[37] !== error || $[38] !== getFinalValueRef || $[39] !== name || $[40] !== onChangeRef || $[41] !== onValueChange || $[42] !== setValue || $[43] !== validate) {
    t21 = function t21(newValue_2) {
      var _onChangeRef$current;
      var finalValue_0 = getFinalValueRef.current(newValue_2);
      setValue(finalValue_0);
      if (error) {
        validate(finalValue_0);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[37] = error;
    $[38] = getFinalValueRef;
    $[39] = name;
    $[40] = onChangeRef;
    $[41] = onValueChange;
    $[42] = setValue;
    $[43] = validate;
    $[44] = t21;
  } else {
    t21 = $[44];
  }
  var updateValue = t21;
  var t22;
  if ($[45] !== name) {
    t22 = function t22() {
      return name;
    };
    $[45] = name;
    $[46] = t22;
  } else {
    t22 = $[46];
  }
  var t23;
  if ($[47] !== getFinalValueRef || $[48] !== initValueRef) {
    t23 = function t23() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[47] = getFinalValueRef;
    $[48] = initValueRef;
    $[49] = t23;
  } else {
    t23 = $[49];
  }
  var t24;
  if ($[50] !== initValueRef || $[51] !== updateValue) {
    t24 = function t24() {
      return updateValue(initValueRef.current);
    };
    $[50] = initValueRef;
    $[51] = updateValue;
    $[52] = t24;
  } else {
    t24 = $[52];
  }
  var t25;
  if ($[53] !== valueRef) {
    t25 = function t25() {
      return valueRef.current;
    };
    $[53] = valueRef;
    $[54] = t25;
  } else {
    t25 = $[54];
  }
  var t26;
  if ($[55] !== dataRef) {
    t26 = function t26() {
      return dataRef.current;
    };
    $[55] = dataRef;
    $[56] = t26;
  } else {
    t26 = $[56];
  }
  var t27;
  if ($[57] !== exceptValue) {
    t27 = function t27() {
      return !!exceptValue;
    };
    $[57] = exceptValue;
    $[58] = t27;
  } else {
    t27 = $[58];
  }
  var t28;
  if ($[59] !== disabled) {
    t28 = function t28() {
      return !!disabled;
    };
    $[59] = disabled;
    $[60] = t28;
  } else {
    t28 = $[60];
  }
  var t29;
  if ($[61] !== hidden) {
    t29 = function t29() {
      return !!hidden;
    };
    $[61] = hidden;
    $[62] = t29;
  } else {
    t29 = $[62];
  }
  var t30;
  if ($[63] !== validate || $[64] !== valueRef) {
    t30 = function t30() {
      return validate(valueRef.current);
    };
    $[63] = validate;
    $[64] = valueRef;
    $[65] = t30;
  } else {
    t30 = $[65];
  }
  var t31;
  if ($[66] !== setData || $[67] !== setErrorErrorHelperText || $[68] !== t22 || $[69] !== t23 || $[70] !== t24 || $[71] !== t25 || $[72] !== t26 || $[73] !== t27 || $[74] !== t28 || $[75] !== t29 || $[76] !== t30 || $[77] !== updateValue) {
    t31 = {
      getType: _temp$3,
      getName: t22,
      getReset: t23,
      reset: t24,
      getValue: t25,
      setValue: updateValue,
      getData: t26,
      setData: setData,
      isExceptValue: t27,
      isDisabled: t28,
      setDisabled: setDisabled,
      isHidden: t29,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t30,
      setError: setErrorErrorHelperText
    };
    $[66] = setData;
    $[67] = setErrorErrorHelperText;
    $[68] = t22;
    $[69] = t23;
    $[70] = t24;
    $[71] = t25;
    $[72] = t26;
    $[73] = t27;
    $[74] = t28;
    $[75] = t29;
    $[76] = t30;
    $[77] = updateValue;
    $[78] = t31;
  } else {
    t31 = $[78];
  }
  var commands = t31;
  var t32;
  if ($[79] !== id || $[80] !== onAddValueItem) {
    t32 = function t32(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[79] = id;
    $[80] = onAddValueItem;
    $[81] = t32;
  } else {
    t32 = $[81];
  }
  var t33;
  if ($[82] !== id || $[83] !== onRemoveValueItem) {
    t33 = function t33() {
      return onRemoveValueItem(id);
    };
    $[82] = id;
    $[83] = onRemoveValueItem;
    $[84] = t33;
  } else {
    t33 = $[84];
  }
  useForwardRef(ref, commands, t32, t33);
  var t34;
  if ($[85] !== name || $[86] !== onRequestSearchSubmit || $[87] !== onValueChangeByUser || $[88] !== readOnly || $[89] !== updateValue) {
    t34 = function t34(e, checked) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_1 = updateValue(checked);
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_1);
          onRequestSearchSubmit(name, finalValue_1);
        });
      }
    };
    $[85] = name;
    $[86] = onRequestSearchSubmit;
    $[87] = onValueChangeByUser;
    $[88] = readOnly;
    $[89] = updateValue;
    $[90] = t34;
  } else {
    t34 = $[90];
  }
  var handleChange = t34;
  var t35;
  var t36;
  if ($[91] !== initFocused) {
    t35 = function t35() {
      return setFocused(initFocused || true);
    };
    t36 = function t36() {
      return setFocused(initFocused || false);
    };
    $[91] = initFocused;
    $[92] = t35;
    $[93] = t36;
  } else {
    t35 = $[92];
    t36 = $[93];
  }
  var t37;
  if ($[94] !== color || $[95] !== disabled || $[96] !== handleChange || $[97] !== name || $[98] !== size || $[99] !== t35 || $[100] !== t36 || $[101] !== value_1) {
    t37 = /*#__PURE__*/React.createElement(Switch, {
      size: size,
      name: name,
      checked: value_1,
      color: color,
      disabled: disabled,
      onChange: handleChange,
      onFocus: t35,
      onBlur: t36
    });
    $[94] = color;
    $[95] = disabled;
    $[96] = handleChange;
    $[97] = name;
    $[98] = size;
    $[99] = t35;
    $[100] = t36;
    $[101] = value_1;
    $[102] = t37;
  } else {
    t37 = $[102];
  }
  var switchControl = t37;
  var t38;
  if ($[103] !== className) {
    t38 = classNames(className, "PFormValueItem", "PFormSwitch");
    $[103] = className;
    $[104] = t38;
  } else {
    t38 = $[104];
  }
  var t39 = error ? errorHelperText : helperText;
  var t40;
  if ($[105] === Symbol["for"]("react.memo_cache_sentinel")) {
    t40 = {
      style: {
        marginLeft: 5
      }
    };
    $[105] = t40;
  } else {
    t40 = $[105];
  }
  var t41 = size === "small" ? 24 : 38;
  var t42;
  if ($[106] !== disabled || $[107] !== switchControl || $[108] !== switchLabel) {
    t42 = switchLabel ? /*#__PURE__*/React.createElement(FormControlLabel, {
      control: switchControl,
      label: switchLabel,
      disabled: disabled
    }) : switchControl;
    $[106] = disabled;
    $[107] = switchControl;
    $[108] = switchLabel;
    $[109] = t42;
  } else {
    t42 = $[109];
  }
  var t43;
  if ($[110] !== color || $[111] !== error || $[112] !== focused || $[113] !== hidden || $[114] !== label || $[115] !== labelIcon || $[116] !== size || $[117] !== style || $[118] !== sx || $[119] !== t38 || $[120] !== t39 || $[121] !== t41 || $[122] !== t42 || $[123] !== variant) {
    t43 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t38,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: false,
      helperText: t39,
      helperTextProps: t40,
      style: style,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t41,
      controlVerticalCenter: true,
      control: t42
    });
    $[110] = color;
    $[111] = error;
    $[112] = focused;
    $[113] = hidden;
    $[114] = label;
    $[115] = labelIcon;
    $[116] = size;
    $[117] = style;
    $[118] = sx;
    $[119] = t38;
    $[120] = t39;
    $[121] = t41;
    $[122] = t42;
    $[123] = variant;
    $[124] = t43;
  } else {
    t43 = $[124];
  }
  return t43;
};
function _temp$3() {
  return "PFormSwitch";
}var _excluded$4 = ["children", "className"];
var PSearchGroupRow = function PSearchGroupRow(t0) {
  var $ = c(12);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$4);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  var t1;
  if ($[4] !== className) {
    t1 = classNames(className, "PSearchGroupRow");
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== children) {
    t2 = /*#__PURE__*/React.createElement(PFormCol, null, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 1,
      alignItems: "center",
      flex: 1
    }, children));
    $[6] = children;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== props || $[9] !== t1 || $[10] !== t2) {
    t3 = /*#__PURE__*/React.createElement(PFormRow, _extends({
      className: t1
    }, props), t2);
    $[8] = props;
    $[9] = t1;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
};var _excluded$3 = ["ref", "children", "className", "style", "sx", "color", "spacing", "focused", "labelShrink", "autoSubmit"];
var PSearch = function PSearch(t0) {
  var $ = c(54);
  var autoSubmit;
  var children;
  var className;
  var focused;
  var labelShrink;
  var otherProps;
  var ref;
  var spacing;
  var style;
  var sx;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    children = _t.children;
    className = _t.className;
    style = _t.style;
    sx = _t.sx;
    t1 = _t.color;
    spacing = _t.spacing;
    focused = _t.focused;
    labelShrink = _t.labelShrink;
    autoSubmit = _t.autoSubmit;
    otherProps = _objectWithoutProperties(_t, _excluded$3);
    $[0] = t0;
    $[1] = autoSubmit;
    $[2] = children;
    $[3] = className;
    $[4] = focused;
    $[5] = labelShrink;
    $[6] = otherProps;
    $[7] = ref;
    $[8] = spacing;
    $[9] = style;
    $[10] = sx;
    $[11] = t1;
  } else {
    autoSubmit = $[1];
    children = $[2];
    className = $[3];
    focused = $[4];
    labelShrink = $[5];
    otherProps = $[6];
    ref = $[7];
    spacing = $[8];
    style = $[9];
    sx = $[10];
    t1 = $[11];
  }
  var color = t1 === undefined ? "primary" : t1;
  var formRef = useRef(undefined);
  var t2;
  var t3;
  if ($[12] !== autoSubmit) {
    t2 = function t2() {
      if (autoSubmit) {
        var _formRef$current;
        (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.submit();
      }
    };
    t3 = [autoSubmit];
    $[12] = autoSubmit;
    $[13] = t2;
    $[14] = t3;
  } else {
    t2 = $[13];
    t3 = $[14];
  }
  useEventEffect(t2, t3);
  var t4;
  var basicRowItems;
  var rowItems;
  if ($[15] !== children) {
    rowItems = [];
    basicRowItems = [];
    React.Children.forEach(children, function (child) {
      if (/*#__PURE__*/React.isValidElement(child)) {
        if (child.type.toString() === PSearchGroupRow.toString()) {
          rowItems.push(child);
        } else {
          basicRowItems.push(child);
        }
      }
    });
    $[15] = children;
    $[16] = basicRowItems;
    $[17] = rowItems;
  } else {
    basicRowItems = $[16];
    rowItems = $[17];
  }
  if (basicRowItems.length > 0) {
    var _t2;
    if ($[18] !== basicRowItems) {
      _t2 = /*#__PURE__*/React.createElement(PSearchGroupRow, {
        key: "$basicRow$"
      }, basicRowItems);
      $[18] = basicRowItems;
      $[19] = _t2;
    } else {
      _t2 = $[19];
    }
    var _t3;
    if ($[20] !== rowItems || $[21] !== _t2) {
      _t3 = [_t2].concat(_toConsumableArray(rowItems));
      $[20] = rowItems;
      $[21] = _t2;
      $[22] = _t3;
    } else {
      _t3 = $[22];
    }
    t4 = _t3;
  } else {
    t4 = rowItems;
  }
  var renderChildren = t4;
  var emptyHandler = _temp$2;
  var t5;
  if ($[23] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      setTimeout(function () {
        var _formRef$current2;
        return (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.submit();
      });
    };
    $[23] = t5;
  } else {
    t5 = $[23];
  }
  var handleRequestSubmit = t5;
  var t6;
  if ($[24] !== autoSubmit) {
    t6 = function t6() {
      if (autoSubmit) {
        setTimeout(function () {
          var _formRef$current3;
          return (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 ? void 0 : _formRef$current3.submit();
        });
      }
    };
    $[24] = autoSubmit;
    $[25] = t6;
  } else {
    t6 = $[25];
  }
  var handleRequestSearchSubmit = t6;
  var t7;
  if ($[26] !== color || $[27] !== focused || $[28] !== handleRequestSearchSubmit || $[29] !== labelShrink || $[30] !== spacing) {
    t7 = {
      id: "search",
      variant: "outlined",
      size: "small",
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: false,
      onAddValueItem: emptyHandler,
      onRemoveValueItem: emptyHandler,
      onValueChange: emptyHandler,
      onValueChangeByUser: emptyHandler,
      onRequestSubmit: handleRequestSubmit,
      onRequestSearchSubmit: handleRequestSearchSubmit
    };
    $[26] = color;
    $[27] = focused;
    $[28] = handleRequestSearchSubmit;
    $[29] = labelShrink;
    $[30] = spacing;
    $[31] = t7;
  } else {
    t7 = $[31];
  }
  var formContextValue = t7;
  var t8;
  if ($[32] !== ref) {
    t8 = function t8(commands) {
      if (ref) {
        if (typeof ref === "function") {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }
      formRef.current = commands || undefined;
    };
    $[32] = ref;
    $[33] = t8;
  } else {
    t8 = $[33];
  }
  var handleRef = t8;
  var t9;
  if ($[34] !== sx) {
    t9 = _objectSpread2({
      p: 1.5
    }, sx);
    $[34] = sx;
    $[35] = t9;
  } else {
    t9 = $[35];
  }
  var t10;
  if ($[36] !== renderChildren) {
    t10 = /*#__PURE__*/React.createElement(PFormBody, null, renderChildren);
    $[36] = renderChildren;
    $[37] = t10;
  } else {
    t10 = $[37];
  }
  var t11;
  if ($[38] !== color || $[39] !== focused || $[40] !== handleRef || $[41] !== labelShrink || $[42] !== otherProps || $[43] !== spacing || $[44] !== t10) {
    t11 = /*#__PURE__*/React.createElement(PForm, _extends({
      ref: handleRef,
      className: "PSearch",
      variant: "outlined",
      size: "small",
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: false
    }, otherProps), t10);
    $[38] = color;
    $[39] = focused;
    $[40] = handleRef;
    $[41] = labelShrink;
    $[42] = otherProps;
    $[43] = spacing;
    $[44] = t10;
    $[45] = t11;
  } else {
    t11 = $[45];
  }
  var t12;
  if ($[46] !== className || $[47] !== style || $[48] !== t11 || $[49] !== t9) {
    t12 = /*#__PURE__*/React.createElement(Paper, {
      variant: "outlined",
      className: className,
      sx: t9,
      style: style
    }, t11);
    $[46] = className;
    $[47] = style;
    $[48] = t11;
    $[49] = t9;
    $[50] = t12;
  } else {
    t12 = $[50];
  }
  var t13;
  if ($[51] !== formContextValue || $[52] !== t12) {
    t13 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: formContextValue
    }, t12);
    $[51] = formContextValue;
    $[52] = t12;
    $[53] = t13;
  } else {
    t13 = $[53];
  }
  return t13;
};
function _temp$2() {}var _templateObject;
var StyledItem = styled(Grid)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:has(> [style*='display: none;']) {\n    display: none;\n  }\n"])));/********************************************************************************************************************
 * isReactFragment
 * ******************************************************************************************************************/
var isReactFragment = function isReactFragment(child) {
  try {
    return child.type.toString() === React.Fragment.toString();
  } catch (_unused) {
    return false;
  }
};

/********************************************************************************************************************
 * removeReactFragment
 * ******************************************************************************************************************/
var _removeReactFragment = function removeReactFragment(el, key) {
  if (isReactFragment(el)) {
    var children = el.props.children;
    if (children) {
      if (Array.isArray(children)) {
        return children.map(function (child, idx) {
          if (/*#__PURE__*/React.isValidElement(child)) {
            return _removeReactFragment(child, idx);
          } else {
            return /*#__PURE__*/React.createElement(Grid, {
              key: idx
            }, child);
          }
        });
      } else {
        return /*#__PURE__*/React.createElement(StyledItem, {
          key: key,
          style: {
            display: el.type === PFormHidden ? 'none' : undefined
          }
        }, el);
      }
    } else {
      return /*#__PURE__*/React.createElement(StyledItem, {
        key: key,
        style: {
          display: el.type === PFormHidden ? 'none' : undefined
        }
      }, el);
    }
  } else {
    return /*#__PURE__*/React.createElement(StyledItem, {
      key: key,
      style: {
        display: el.type === PFormHidden ? 'none' : undefined
      }
    }, el);
  }
};

/********************************************************************************************************************
 * PSearchGroup
 * ******************************************************************************************************************/
var PSearchGroup = function PSearchGroup(t0) {
  var $ = c(17);
  var children = t0.children,
    className = t0.className,
    style = t0.style,
    sx = t0.sx,
    max = t0.max,
    align = t0.align,
    hidden = t0.hidden,
    t1 = t0.spacing;
  var spacing = t1 === undefined ? 1 : t1;
  var t2;
  if ($[0] !== className) {
    t2 = classNames(className, "PSearchGroup");
    $[0] = className;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var t3 = max ? 1 : undefined;
  var t4 = hidden ? "none" : undefined;
  var t5;
  if ($[2] !== t3 || $[3] !== t4) {
    t5 = {
      flex: t3,
      display: t4
    };
    $[2] = t3;
    $[3] = t4;
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  var t6 = align === undefined || align === "left" ? "start" : align === "center" ? "center" : "end";
  var t7;
  if ($[5] !== children) {
    t7 = React.Children.map(children, _temp$1);
    $[5] = children;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var t8;
  if ($[7] !== spacing || $[8] !== style || $[9] !== sx || $[10] !== t6 || $[11] !== t7) {
    t8 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      wrap: "wrap",
      spacing: spacing,
      justifyContent: t6,
      alignItems: "start",
      style: style,
      sx: sx
    }, t7);
    $[7] = spacing;
    $[8] = style;
    $[9] = sx;
    $[10] = t6;
    $[11] = t7;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  var t9;
  if ($[13] !== t2 || $[14] !== t5 || $[15] !== t8) {
    t9 = /*#__PURE__*/React.createElement(Grid, {
      className: t2,
      style: t5
    }, t8);
    $[13] = t2;
    $[14] = t5;
    $[15] = t8;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  return t9;
};
function _temp$1(child) {
  if (/*#__PURE__*/React.isValidElement(child)) {
    return _removeReactFragment(child);
  } else {
    return child;
  }
}var _excluded$2 = ["children", "className", "size", "sx"];
var PSearchButton = function PSearchButton(t0) {
  var $ = c(17);
  var children;
  var className;
  var initSx;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    className = _t.className;
    t1 = _t.size;
    initSx = _t.sx;
    props = _objectWithoutProperties(_t, _excluded$2);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = initSx;
    $[4] = props;
    $[5] = t1;
  } else {
    children = $[1];
    className = $[2];
    initSx = $[3];
    props = $[4];
    t1 = $[5];
  }
  var size = t1 === undefined ? "medium" : t1;
  var t2;
  if ($[6] !== className) {
    t2 = classNames(className, "PSearchButton");
    $[6] = className;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3 = "".concat(!children ? 9 : 13, "px !important");
  var t4;
  if ($[8] !== initSx || $[9] !== t3) {
    t4 = _objectSpread2({
      minWidth: 0,
      px: t3
    }, initSx);
    $[8] = initSx;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  var t5;
  if ($[11] !== children || $[12] !== props || $[13] !== size || $[14] !== t2 || $[15] !== t4) {
    t5 = /*#__PURE__*/React.createElement(PButton, _extends({
      className: t2,
      size: size,
      sx: t4,
      fullWidth: false
    }, props), children);
    $[11] = children;
    $[12] = props;
    $[13] = size;
    $[14] = t2;
    $[15] = t4;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  return t5;
};var _excluded$1 = ["children", "className", "sx", "menuList", "placement"];
var PSearchMenuButton = function PSearchMenuButton(t0) {
  var $ = c(43);
  var children;
  var className;
  var initSx;
  var menuList;
  var placement;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    className = _t.className;
    initSx = _t.sx;
    menuList = _t.menuList;
    placement = _t.placement;
    props = _objectWithoutProperties(_t, _excluded$1);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = initSx;
    $[4] = menuList;
    $[5] = placement;
    $[6] = props;
  } else {
    children = $[1];
    className = $[2];
    initSx = $[3];
    menuList = $[4];
    placement = $[5];
    props = $[6];
  }
  var buttonId = useId();
  var menuId = useId();
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var _useState3 = useState("ArrowDropDown"),
    _useState4 = _slicedToArray(_useState3, 2),
    endIcon = _useState4[0],
    setEndIcon = _useState4[1];
  var t1;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1(e) {
      setAnchorEl(e.currentTarget);
      setEndIcon("ArrowDropUp");
    };
    $[7] = t1;
  } else {
    t1 = $[7];
  }
  var handleClick = t1;
  var t2;
  if ($[8] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = function t2() {
      setAnchorEl(null);
      setEndIcon("ArrowDropDown");
    };
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var handleClose = t2;
  var _open = !!anchorEl;
  var t3;
  if ($[9] !== placement) {
    t3 = {
      vertical: "bottom",
      horizontal: "center"
    } ;
    $[9] = placement;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var _anchorOrigin = t3;
  var t4;
  if ($[11] !== placement) {
    t4 = {
      vertical: "top",
      horizontal: "center"
    } ;
    $[11] = placement;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  var _transformOrigin = t4;
  var t5;
  if ($[13] !== _anchorOrigin || $[14] !== _open || $[15] !== _transformOrigin) {
    t5 = {
      open: _open,
      anchorOrigin: _anchorOrigin,
      transformOrigin: _transformOrigin
    };
    $[13] = _anchorOrigin;
    $[14] = _open;
    $[15] = _transformOrigin;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  var _t2 = t5,
    open = _t2.open,
    anchorOrigin = _t2.anchorOrigin,
    transformOrigin = _t2.transformOrigin;
  var t6;
  if ($[17] !== className) {
    t6 = classNames(className, "PSearchMenuButton");
    $[17] = className;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  var t7 = "".concat(!children ? 9 : 13, "px !important");
  var t8;
  if ($[19] !== initSx || $[20] !== t7) {
    t8 = _objectSpread2({
      minWidth: 0,
      px: t7
    }, initSx);
    $[19] = initSx;
    $[20] = t7;
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  var t9 = open ? menuId : undefined;
  var t10 = open ? "true" : undefined;
  var t11;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = {
      style: {
        marginRight: -5
      }
    };
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  var t12;
  if ($[23] !== buttonId || $[24] !== children || $[25] !== endIcon || $[26] !== props || $[27] !== t10 || $[28] !== t6 || $[29] !== t8 || $[30] !== t9) {
    t12 = /*#__PURE__*/React.createElement(PFormButton, _extends({
      className: t6,
      size: "medium",
      sx: t8,
      fullWidth: false
    }, props, {
      id: buttonId,
      "aria-controls": t9,
      "aria-haspopup": "true",
      "aria-expanded": t10,
      endIcon: endIcon,
      endIconProps: t11,
      onClick: handleClick
    }), children);
    $[23] = buttonId;
    $[24] = children;
    $[25] = endIcon;
    $[26] = props;
    $[27] = t10;
    $[28] = t6;
    $[29] = t8;
    $[30] = t9;
    $[31] = t12;
  } else {
    t12 = $[31];
  }
  var t13;
  if ($[32] !== anchorEl || $[33] !== anchorOrigin || $[34] !== buttonId || $[35] !== menuId || $[36] !== menuList || $[37] !== open || $[38] !== transformOrigin) {
    t13 = /*#__PURE__*/React.createElement(Menu, {
      id: menuId,
      "aria-labelledby": buttonId,
      anchorEl: anchorEl,
      open: open,
      onClose: handleClose,
      onClick: handleClose,
      anchorOrigin: anchorOrigin,
      transformOrigin: transformOrigin
    }, menuList);
    $[32] = anchorEl;
    $[33] = anchorOrigin;
    $[34] = buttonId;
    $[35] = menuId;
    $[36] = menuList;
    $[37] = open;
    $[38] = transformOrigin;
    $[39] = t13;
  } else {
    t13 = $[39];
  }
  var t14;
  if ($[40] !== t12 || $[41] !== t13) {
    t14 = /*#__PURE__*/React.createElement(React.Fragment, null, t12, t13);
    $[40] = t12;
    $[41] = t13;
    $[42] = t14;
  } else {
    t14 = $[42];
  }
  return t14;
};var _excluded = ["ref", "className", "noAutoSubmit", "onSubmit", "onRequestHashChange"];
var PHashSearch = function PHashSearch(t0) {
  var $ = c(29);
  var className;
  var noAutoSubmit;
  var onRequestHashChange;
  var onSubmit;
  var props;
  var ref;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    noAutoSubmit = _t.noAutoSubmit;
    onSubmit = _t.onSubmit;
    onRequestHashChange = _t.onRequestHashChange;
    props = _objectWithoutProperties(_t, _excluded);
    $[0] = t0;
    $[1] = className;
    $[2] = noAutoSubmit;
    $[3] = onRequestHashChange;
    $[4] = onSubmit;
    $[5] = props;
    $[6] = ref;
  } else {
    className = $[1];
    noAutoSubmit = $[2];
    onRequestHashChange = $[3];
    onSubmit = $[4];
    props = $[5];
    ref = $[6];
  }
  var location = useLocation();
  var searchRef = useRef(null);
  var initPathRef = useRef(window.location.pathname);
  var onSubmitRef = useAutoUpdateRef(onSubmit);
  var onRequestHashChangeRef = useAutoUpdateRef(onRequestHashChange);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isFirstSearchSubmit = _useState2[0],
    setIsFirstSearchSubmit = _useState2[1];
  var t1;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      var deHash = _temp;
      var commands = searchRef.current;
      if (commands) {
        commands.resetAll();
        var hashValues = deHash();
        Object.keys(hashValues).forEach(function (name) {
          var value_0 = hashValues[name];
          var itemCommands = commands.getItem(name);
          if (itemCommands) {
            bb11: switch (itemCommands.getType()) {
              case "PFormCheckbox":
                {
                  if (notEmpty(value_0)) {
                    var _itemCommands$getValu;
                    var checkCommands = itemCommands;
                    if (value_0.toString() === ((_itemCommands$getValu = itemCommands.getValue()) === null || _itemCommands$getValu === void 0 ? void 0 : _itemCommands$getValu.toString())) {
                      checkCommands.setChecked(true);
                    } else {
                      var _checkCommands$getUnc;
                      if (value_0.toString() === ((_checkCommands$getUnc = checkCommands.getUncheckedValue()) === null || _checkCommands$getUnc === void 0 ? void 0 : _checkCommands$getUnc.toString())) {
                        checkCommands.setChecked(false);
                      }
                    }
                  }
                  break bb11;
                }
              case "PFormDatePicker":
              case "PFormDateTimePicker":
              case "PFormTimePicker":
                {
                  if (notEmpty(value_0)) {
                    var dateCommands = itemCommands;
                    var format_0 = dateCommands.getFormValueFormat();
                    var itemValue = dayjs(value_0, format_0);
                    itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                  } else {
                    itemCommands.setValue(null);
                  }
                  break bb11;
                }
              case "PFormDateRangePicker":
                {
                  var dateRangePickerCommands_0 = itemCommands;
                  var fromName_0 = dateRangePickerCommands_0.getFormValueFromName();
                  var toName_0 = dateRangePickerCommands_0.getFormValueToName();
                  var format = dateRangePickerCommands_0.getFormValueFormat();
                  if (name === fromName_0) {
                    if (notEmpty(value_0)) {
                      var startValue = dayjs(value_0, format);
                      dateRangePickerCommands_0.setFromValue(startValue.isValid() ? startValue : null);
                    } else {
                      dateRangePickerCommands_0.setFromValue(null);
                    }
                  } else {
                    if (name === toName_0) {
                      if (notEmpty(value_0)) {
                        var endValue = dayjs(value_0, format);
                        dateRangePickerCommands_0.setToValue(endValue.isValid() ? endValue : null);
                      } else {
                        dateRangePickerCommands_0.setToValue(null);
                      }
                    }
                  }
                  break bb11;
                }
              case "PFormYearRangePicker":
                {
                  var dateRangePickerCommands = itemCommands;
                  var fromName = dateRangePickerCommands.getFormValueFromName();
                  var toName = dateRangePickerCommands.getFormValueToName();
                  if (name === fromName) {
                    dateRangePickerCommands.setFromValue(notEmpty(value_0) ? Number(value_0) : null);
                  } else {
                    if (name === toName) {
                      dateRangePickerCommands.setToValue(notEmpty(value_0) ? Number(value_0) : null);
                    }
                  }
                  break bb11;
                }
              case "PFormMonthPicker":
                {
                  var monthCommands = itemCommands;
                  var yearName = monthCommands.getFormValueYearName();
                  var monthName = monthCommands.getFormValueMonthName();
                  if (name === yearName) {
                    monthCommands.setYear(notEmpty(value_0) ? Number(value_0) : null);
                  } else {
                    if (name === monthName) {
                      monthCommands.setMonth(notEmpty(value_0) ? Number(value_0) : null);
                    }
                  }
                  break bb11;
                }
              case "PFormMonthRangePicker":
                {
                  var monthRangeCommands = itemCommands;
                  var fromYearName = monthRangeCommands.getFormValueFromYearName();
                  var fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                  var toYearName = monthRangeCommands.getFormValueToYearName();
                  var toMonthName = monthRangeCommands.getFormValueToMonthName();
                  if (name === fromYearName) {
                    monthRangeCommands.setFromYear(notEmpty(value_0) ? Number(value_0) : null);
                  } else {
                    if (name === fromMonthName) {
                      monthRangeCommands.setFromMonth(notEmpty(value_0) ? Number(value_0) : null);
                    } else {
                      if (name === toYearName) {
                        monthRangeCommands.setToYear(notEmpty(value_0) ? Number(value_0) : null);
                      } else {
                        if (name === toMonthName) {
                          monthRangeCommands.setToMonth(notEmpty(value_0) ? Number(value_0) : null);
                        }
                      }
                    }
                  }
                  break bb11;
                }
              default:
                {
                  commands.setValue(name, value_0);
                }
            }
          }
        });
        return commands.getAllFormValue();
      }
    };
    $[7] = t1;
  } else {
    t1 = $[7];
  }
  var hashToSearchValue = t1;
  var t2;
  if ($[8] !== location.pathname || $[9] !== onSubmitRef) {
    t2 = function t2() {
      if (location.pathname === initPathRef.current) {
        var data = hashToSearchValue();
        if (data) {
          var _onSubmitRef$current;
          (_onSubmitRef$current = onSubmitRef.current) === null || _onSubmitRef$current === void 0 || _onSubmitRef$current.call(onSubmitRef, data);
        }
      }
    };
    $[8] = location.pathname;
    $[9] = onSubmitRef;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  var t3;
  if ($[11] !== location.hash) {
    t3 = [location.hash];
    $[11] = location.hash;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  useEventEffect(t2, t3);
  var t4;
  if ($[13] !== onRequestHashChangeRef || $[14] !== onSubmitRef) {
    t4 = function t4(params) {
      if (onRequestHashChangeRef.current) {
        var hashes = [];
        Object.keys(params).forEach(function (name_0) {
          var value_1 = params[name_0];
          if (searchRef.current) {
            var itemCommands_0 = searchRef.current.getItem(name_0);
            if (itemCommands_0) {
              var resetValue = null;
              bb146: switch (itemCommands_0.getType()) {
                case "PFormDateRangePicker":
                case "PFormYearRangePicker":
                  {
                    var commands_2 = itemCommands_0;
                    var itemName_1 = itemCommands_0.getName();
                    var fromName_1 = commands_2.getFormValueFromName();
                    var fromSuffix = commands_2.getFormValueFromNameSuffix();
                    var toName_1 = commands_2.getFormValueToName();
                    var toSuffix = commands_2.getFormValueToNameSuffix();
                    if (name_0 === fromName_1) {
                      resetValue = searchRef.current.getFormReset(itemName_1, fromSuffix);
                    } else {
                      if (name_0 === toName_1) {
                        resetValue = searchRef.current.getFormReset(itemName_1, toSuffix);
                      }
                    }
                    break bb146;
                  }
                case "PFormMonthPicker":
                  {
                    var commands_1 = itemCommands_0;
                    var itemName_0 = commands_1.getName();
                    var yearName_0 = commands_1.getFormValueYearName();
                    var yearSuffix = commands_1.getFormValueYearNameSuffix();
                    var monthName_0 = commands_1.getFormValueMonthName();
                    var monthSuffix = commands_1.getFormValueMonthNameSuffix();
                    if (name_0 === yearName_0) {
                      resetValue = searchRef.current.getFormReset(itemName_0, yearSuffix);
                    } else {
                      if (name_0 === monthName_0) {
                        resetValue = searchRef.current.getFormReset(itemName_0, monthSuffix);
                      }
                    }
                    break bb146;
                  }
                case "PFormMonthRangePicker":
                  {
                    var commands_0 = itemCommands_0;
                    var itemName = commands_0.getName();
                    var fromYearName_0 = commands_0.getFormValueFromYearName();
                    var fromYearSuffix = commands_0.getFormValueFromYearNameSuffix();
                    var fromMonthName_0 = commands_0.getFormValueFromMonthName();
                    var fromMonthSuffix = commands_0.getFormValueFromMonthNameSuffix();
                    var toYearName_0 = commands_0.getFormValueToYearName();
                    var toYearSuffix = commands_0.getFormValueToYearNameSuffix();
                    var toMonthName_0 = commands_0.getFormValueToMonthName();
                    var toMonthSuffix = commands_0.getFormValueToMonthNameSuffix();
                    if (name_0 === fromYearName_0) {
                      resetValue = searchRef.current.getFormReset(itemName, fromYearSuffix);
                    } else {
                      if (name_0 === fromMonthName_0) {
                        resetValue = searchRef.current.getFormReset(itemName, fromMonthSuffix);
                      } else {
                        if (name_0 === toYearName_0) {
                          resetValue = searchRef.current.getFormReset(itemName, toYearSuffix);
                        } else {
                          if (name_0 === toMonthName_0) {
                            resetValue = searchRef.current.getFormReset(itemName, toMonthSuffix);
                          }
                        }
                      }
                    }
                    break bb146;
                  }
                default:
                  {
                    resetValue = searchRef.current.getFormReset(name_0);
                  }
              }
              if (resetValue != null && !equal(resetValue, value_1) && _typeof(value_1) !== "object") {
                hashes.push("".concat(name_0, "=").concat(encodeURIComponent(value_1)));
              }
            }
          }
        });
        var finalHash = hashes.join("&");
        if (window.location.hash.substring(1) === finalHash) {
          var _onSubmitRef$current2;
          (_onSubmitRef$current2 = onSubmitRef.current) === null || _onSubmitRef$current2 === void 0 || _onSubmitRef$current2.call(onSubmitRef, params);
        } else {
          onRequestHashChangeRef.current(hashes.join("&"));
        }
      }
    };
    $[13] = onRequestHashChangeRef;
    $[14] = onSubmitRef;
    $[15] = t4;
  } else {
    t4 = $[15];
  }
  var hashChange = t4;
  var t5;
  if ($[16] !== hashChange || $[17] !== isFirstSearchSubmit) {
    t5 = function t5(data_0) {
      if (isFirstSearchSubmit) {
        setIsFirstSearchSubmit(false);
      } else {
        hashChange(data_0);
      }
    };
    $[16] = hashChange;
    $[17] = isFirstSearchSubmit;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  var handleSubmit = t5;
  var t6;
  if ($[19] !== ref) {
    t6 = function t6(r) {
      searchRef.current = r;
      if (ref) {
        if (typeof ref === "function") {
          ref(r);
        } else {
          ref.current = r;
        }
      }
    };
    $[19] = ref;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  var t7;
  if ($[21] !== className) {
    t7 = classNames("PHashSearch", className);
    $[21] = className;
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  var t8 = !noAutoSubmit;
  var t9;
  if ($[23] !== handleSubmit || $[24] !== props || $[25] !== t6 || $[26] !== t7 || $[27] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PSearch, _extends({
      ref: t6,
      className: t7
    }, props, {
      autoSubmit: t8,
      onSubmit: handleSubmit
    }));
    $[23] = handleSubmit;
    $[24] = props;
    $[25] = t6;
    $[26] = t7;
    $[27] = t8;
    $[28] = t9;
  } else {
    t9 = $[28];
  }
  return t9;
};
function _temp() {
  var values = {};
  var hash = window.location.hash.substring(1);
  hash.replace(/([^=&]+)=([^&]*)/g, function (substring, key, value) {
    values[decodeURIComponent(key)] = decodeURIComponent(value);
    return substring;
  });
  return values;
}export{PForm,PFormAutocomplete,PFormBlock,PFormBody,PFormBusinessNo,PFormButton,PFormCheckbox,PFormCol,PFormContext,PFormContextDefaultValue,PFormContextProvider,PFormDatePicker,PFormDateRangePicker,PFormDateTimePicker,PFormDivider,PFormEmail,PFormFile,PFormFooter,PFormHidden,PFormImageFile,PFormLabel,PFormMobile,PFormMonthPicker,PFormMonthRangePicker,PFormNumber,PFormPassword,PFormPersonalNo,PFormRadioGroup,PFormRating,PFormRow,PFormSearch,PFormSelect,PFormSwitch,PFormTag,PFormTel,PFormText,_PFormTextEditor as PFormTextEditor,PFormTextField,PFormTextarea,PFormTimePicker,PFormToggleButtonGroup,PFormUrl,PFormYearPicker,PFormYearRangePicker,PHashSearch,PSearch,PSearchButton,PSearchGroup,PSearchGroupRow,PSearchMenuButton,useFormState};