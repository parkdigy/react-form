import {c}from'react/compiler-runtime';import React,{createContext,useContext,useRef,useState,useId,useLayoutEffect,useEffect}from'react';import classNames from'classnames';import {Box,styled,useTheme,InputLabel,Grid,Collapse,FormHelperText,InputAdornment,IconButton,TextField,Chip,Autocomplete,Icon,MenuItem,Checkbox,CircularProgress,Input,OutlinedInput,FilledInput,FormControl,Typography,FormControlLabel,RadioGroup,Radio,ToggleButton,ToggleButtonGroup,Rating,Skeleton,darken,Button,Tooltip,tooltipClasses,ClickAwayListener,DialogTitle,DialogContent,DialogActions,Dialog,Switch,Paper,Menu}from'@mui/material';import {empty,notEmpty,equal,ifEmpty,ifUndefined}from'@pdg/compare';import dayjs from'dayjs';import {useAutoUpdateRef,useForwardRef,useChanged,useTimeoutRef,clearTimeoutRef}from'@pdg/react-hook';import {PButton,PIcon,PIconText}from'@pdg/react-component';import {useResizeDetector}from'react-resize-detector';import {formatTelNo,formatBusinessNo,formatPersonalNo}from'@pdg/formatting';import {NumericFormat}from'react-number-format';import {CheckBox,CheckBoxOutlineBlank,RadioButtonChecked,RadioButtonUnchecked}from'@mui/icons-material';import {Editor}from'@tinymce/tinymce-react';import {AdapterDayjs}from'@mui/x-date-pickers/AdapterDayjs';import {StaticDatePicker,PickersDay,DesktopDatePicker,LocalizationProvider,StaticDateTimePicker,DesktopDateTimePicker}from'@mui/x-date-pickers';import SimpleBar from'simplebar-react';import'dayjs/locale/ko';import {useLocation}from'react-router';function insertStyle(css) {
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
  var props;
  var ref;
  var size;
  var style;
  var warning;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    children = _t.children;
    icon = _t.icon;
    size = _t.size;
    style = _t.style;
    error = _t.error;
    warning = _t.warning;
    props = _objectWithoutProperties(_t, _excluded$C);
    $[0] = t0;
    $[1] = children;
    $[2] = error;
    $[3] = icon;
    $[4] = props;
    $[5] = ref;
    $[6] = size;
    $[7] = style;
    $[8] = warning;
  } else {
    children = $[1];
    error = $[2];
    icon = $[3];
    props = $[4];
    ref = $[5];
    size = $[6];
    style = $[7];
    warning = $[8];
  }
  var theme = useTheme();
  var t1 = size === "small" ? "translate(0, -1.5px) scale(0.7)" : undefined;
  var newStyle;
  if ($[9] !== error || $[10] !== style || $[11] !== t1 || $[12] !== theme || $[13] !== warning) {
    newStyle = _objectSpread2({
      height: 20,
      transform: t1
    }, style);
    if (!error) {
      var _style;
      newStyle.color = warning ? theme.palette.warning.main : (_style = style) === null || _style === void 0 ? void 0 : _style.color;
    }
    $[9] = error;
    $[10] = style;
    $[11] = t1;
    $[12] = theme;
    $[13] = warning;
    $[14] = newStyle;
  } else {
    newStyle = $[14];
  }
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
  if ($[18] !== error || $[19] !== newStyle || $[20] !== props || $[21] !== ref || $[22] !== size || $[23] !== t2) {
    t3 = /*#__PURE__*/React.createElement(InputLabel, _extends({
      ref: ref,
      shrink: true,
      className: "PFormItemBase-InputLabel",
      size: size,
      error: error,
      style: newStyle
    }, props), t2);
    $[18] = error;
    $[19] = newStyle;
    $[20] = props;
    $[21] = ref;
    $[22] = size;
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
  var $ = c(63);
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
  useChanged(initCollapseIn) && setCollapseIn(initCollapseIn);
  var t2;
  if (hidden) {
    var _t2;
    if ($[9] !== initStyle) {
      _t2 = _objectSpread2(_objectSpread2({}, initStyle), {}, {
        display: "none"
      });
      $[9] = initStyle;
      $[10] = _t2;
    } else {
      _t2 = $[10];
    }
    t2 = _t2;
  } else {
    t2 = initStyle;
  }
  var style = t2;
  var Container = collapse ? Collapse : React.Fragment;
  var t3;
  if ($[11] !== collapse || $[12] !== collapseIn) {
    t3 = collapse ? {
      "in": collapseIn
    } : undefined;
    $[11] = collapse;
    $[12] = collapseIn;
    $[13] = t3;
  } else {
    t3 = $[13];
  }
  var containerProps = t3;
  var t4;
  if ($[14] !== color || $[15] !== focused || $[16] !== fullWidth || $[17] !== labelShrink || $[18] !== otherFormState || $[19] !== size || $[20] !== spacing || $[21] !== variant) {
    t4 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: variant,
      size: size,
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: fullWidth
    });
    $[14] = color;
    $[15] = focused;
    $[16] = fullWidth;
    $[17] = labelShrink;
    $[18] = otherFormState;
    $[19] = size;
    $[20] = spacing;
    $[21] = variant;
    $[22] = t4;
  } else {
    t4 = $[22];
  }
  var t5;
  if ($[23] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {
      xs: 12
    };
    $[23] = t5;
  } else {
    t5 = $[23];
  }
  var t6;
  if ($[24] !== className) {
    t6 = classNames(className, "PFormBlock");
    $[24] = className;
    $[25] = t6;
  } else {
    t6 = $[25];
  }
  var t7;
  if ($[26] !== collapse || $[27] !== collapseIn || $[28] !== color || $[29] !== error || $[30] !== hidden || $[31] !== icon || $[32] !== label || $[33] !== line || $[34] !== lineVerticalMargin || $[35] !== size || $[36] !== warning) {
    t7 = (icon || label || line || collapse) && /*#__PURE__*/React.createElement(PFormDivider, {
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
    $[26] = collapse;
    $[27] = collapseIn;
    $[28] = color;
    $[29] = error;
    $[30] = hidden;
    $[31] = icon;
    $[32] = label;
    $[33] = line;
    $[34] = lineVerticalMargin;
    $[35] = size;
    $[36] = warning;
    $[37] = t7;
  } else {
    t7 = $[37];
  }
  var t8;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = {
      xs: 12
    };
    $[38] = t8;
  } else {
    t8 = $[38];
  }
  var t9;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = {
      xs: 12
    };
    $[39] = t9;
  } else {
    t9 = $[39];
  }
  var t10;
  if ($[40] !== children || $[41] !== spacing) {
    t10 = /*#__PURE__*/React.createElement(StyledWrapGrid$1, {
      size: t9,
      className: "PFormBlock-body"
    }, /*#__PURE__*/React.createElement(Grid, {
      className: "PFormBlock-content",
      container: true,
      spacing: spacing
    }, children));
    $[40] = children;
    $[41] = spacing;
    $[42] = t10;
  } else {
    t10 = $[42];
  }
  var t11;
  if ($[43] !== spacing || $[44] !== t10) {
    t11 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: spacing
    }, t10);
    $[43] = spacing;
    $[44] = t10;
    $[45] = t11;
  } else {
    t11 = $[45];
  }
  var t12;
  if ($[46] !== Container || $[47] !== containerProps || $[48] !== t11) {
    t12 = /*#__PURE__*/React.createElement(StyledWrapGrid$1, {
      size: t8
    }, /*#__PURE__*/React.createElement(Container, containerProps, t11));
    $[46] = Container;
    $[47] = containerProps;
    $[48] = t11;
    $[49] = t12;
  } else {
    t12 = $[49];
  }
  var t13;
  if ($[50] !== spacing || $[51] !== t12 || $[52] !== t7) {
    t13 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: spacing
    }, t7, t12);
    $[50] = spacing;
    $[51] = t12;
    $[52] = t7;
    $[53] = t13;
  } else {
    t13 = $[53];
  }
  var t14;
  if ($[54] !== ref || $[55] !== style || $[56] !== sx || $[57] !== t13 || $[58] !== t6) {
    t14 = /*#__PURE__*/React.createElement(Grid, {
      ref: ref,
      size: t5,
      className: t6,
      style: style,
      sx: sx
    }, t13);
    $[54] = ref;
    $[55] = style;
    $[56] = sx;
    $[57] = t13;
    $[58] = t6;
    $[59] = t14;
  } else {
    t14 = $[59];
  }
  var t15;
  if ($[60] !== t14 || $[61] !== t4) {
    t15 = /*#__PURE__*/React.createElement(PFormContext.Provider, {
      value: t4
    }, t14);
    $[60] = t14;
    $[61] = t4;
    $[62] = t15;
  } else {
    t15 = $[62];
  }
  return t15;
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
  var $ = c(79);
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
  var onAddFormColRef = useAutoUpdateRef(onAddFormCol);
  var onRemoveFormColRef = useAutoUpdateRef(onRemoveFormCol);
  var t3;
  var t4;
  if ($[18] !== id || $[19] !== onAddFormColRef || $[20] !== onRemoveFormColRef || $[21] !== xs) {
    t3 = function t3() {
      var _onAddFormColRef$curr;
      (_onAddFormColRef$curr = onAddFormColRef.current) === null || _onAddFormColRef$curr === void 0 || _onAddFormColRef$curr.call(onAddFormColRef, id, xs);
      return function () {
        var _onRemoveFormColRef$c;
        (_onRemoveFormColRef$c = onRemoveFormColRef.current) === null || _onRemoveFormColRef$c === void 0 || _onRemoveFormColRef$c.call(onRemoveFormColRef, id);
        onRemoveFormColRef.current = undefined;
      };
    };
    t4 = [id, onAddFormColRef, onRemoveFormColRef, xs];
    $[18] = id;
    $[19] = onAddFormColRef;
    $[20] = onRemoveFormColRef;
    $[21] = xs;
    $[22] = t3;
    $[23] = t4;
  } else {
    t3 = $[22];
    t4 = $[23];
  }
  useLayoutEffect(t3, t4);
  var t5;
  var t6;
  if ($[24] !== gridRef || $[25] !== ref) {
    t5 = function t5() {
      if (ref) {
        if (typeof ref === "function") {
          ref(gridRef.current);
        } else {
          ref.current = gridRef.current;
        }
      }
    };
    t6 = [gridRef, ref];
    $[24] = gridRef;
    $[25] = ref;
    $[26] = t5;
    $[27] = t6;
  } else {
    t5 = $[26];
    t6 = $[27];
  }
  useEffect(t5, t6);
  var t7 = xs || formColAutoXs || 12;
  var t8 = !!label;
  var t9 = !!helperText;
  var t10;
  if ($[28] !== color || $[29] !== focused || $[30] !== formColGap || $[31] !== formColWidth || $[32] !== fullWidth || $[33] !== labelShrink || $[34] !== otherFormState || $[35] !== size || $[36] !== spacing || $[37] !== t7 || $[38] !== t8 || $[39] !== t9 || $[40] !== variant) {
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
    $[28] = color;
    $[29] = focused;
    $[30] = formColGap;
    $[31] = formColWidth;
    $[32] = fullWidth;
    $[33] = labelShrink;
    $[34] = otherFormState;
    $[35] = size;
    $[36] = spacing;
    $[37] = t7;
    $[38] = t8;
    $[39] = t9;
    $[40] = variant;
    $[41] = t10;
  } else {
    t10 = $[41];
  }
  var t11;
  if ($[42] !== gridRef) {
    t11 = function t11(ref_0) {
      gridRef.current = ref_0;
    };
    $[42] = gridRef;
    $[43] = t11;
  } else {
    t11 = $[43];
  }
  var t12 = xs || formColAutoXs || 12;
  var t13;
  if ($[44] !== t12) {
    t13 = {
      xs: t12
    };
    $[44] = t12;
    $[45] = t13;
  } else {
    t13 = $[45];
  }
  var t14 = !!label && "with-label";
  var t15 = !!helperText && "with-helper-text";
  var t16;
  if ($[46] !== className || $[47] !== t14 || $[48] !== t15) {
    t16 = classNames(className, "PFormCol", t14, t15);
    $[46] = className;
    $[47] = t14;
    $[48] = t15;
    $[49] = t16;
  } else {
    t16 = $[49];
  }
  var t17;
  if ($[50] !== color || $[51] !== error || $[52] !== focused || $[53] !== icon || $[54] !== label || $[55] !== size || $[56] !== warning) {
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
    $[50] = color;
    $[51] = error;
    $[52] = focused;
    $[53] = icon;
    $[54] = label;
    $[55] = size;
    $[56] = warning;
    $[57] = t17;
  } else {
    t17 = $[57];
  }
  var t18;
  if ($[58] !== children || $[59] !== formColGap) {
    t18 = /*#__PURE__*/React.createElement("div", {
      className: "FormCol-content"
    }, /*#__PURE__*/React.createElement(StyledContentContainerBox, {
      gap: formColGap
    }, children));
    $[58] = children;
    $[59] = formColGap;
    $[60] = t18;
  } else {
    t18 = $[60];
  }
  var t19;
  if ($[61] !== error || $[62] !== helperText || $[63] !== helperTextShift) {
    t19 = helperText && /*#__PURE__*/React.createElement("div", {
      className: "FormCol-helper-text"
    }, /*#__PURE__*/React.createElement(FormHelperText, {
      component: "div",
      error: error,
      style: {
        marginLeft: helperTextShift ? 14 : 5
      }
    }, helperText));
    $[61] = error;
    $[62] = helperText;
    $[63] = helperTextShift;
    $[64] = t19;
  } else {
    t19 = $[64];
  }
  var t20;
  if ($[65] !== t17 || $[66] !== t18 || $[67] !== t19) {
    t20 = /*#__PURE__*/React.createElement("div", null, t17, t18, t19);
    $[65] = t17;
    $[66] = t18;
    $[67] = t19;
    $[68] = t20;
  } else {
    t20 = $[68];
  }
  var t21;
  if ($[69] !== style || $[70] !== sx || $[71] !== t11 || $[72] !== t13 || $[73] !== t16 || $[74] !== t20) {
    t21 = /*#__PURE__*/React.createElement(Grid, {
      ref: t11,
      size: t13,
      className: t16,
      style: style,
      sx: sx
    }, t20);
    $[69] = style;
    $[70] = sx;
    $[71] = t11;
    $[72] = t13;
    $[73] = t16;
    $[74] = t20;
    $[75] = t21;
  } else {
    t21 = $[75];
  }
  var t22;
  if ($[76] !== t10 || $[77] !== t21) {
    t22 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t10
    }, t21);
    $[76] = t10;
    $[77] = t21;
    $[78] = t22;
  } else {
    t22 = $[78];
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
};insertStyle(".PFormTextField{min-width:200px}.PFormTextField .clear-icon-button-wrap{visibility:hidden}.PFormTextField.variant-filled .clear-icon-button-wrap{margin-top:9px;margin-bottom:-9px}.PFormTextField:hover .clear-icon-button-wrap.show,.PFormTextField .MuiInputBase-root.Mui-focused .clear-icon-button-wrap.show{visibility:visible}");var _excluded$y = ["ref", "variant", "size", "color", "focused", "labelShrink", "fullWidth", "submitWhenReturnKey", "name", "required", "value", "data", "icon", "labelIcon", "label", "error", "helperText", "exceptValue", "readOnly", "tabIndex", "disabled", "placeholder", "maxLength", "clear", "width", "slotProps", "inputRef", "select", "multiline", "validPattern", "invalidPattern", "startAdornment", "endAdornment", "noFormValueItem", "hidden", "disableReturnKey", "onChange", "onValue", "onValidate", "onBlur", "onKeyDown", "className", "style"];
function PFormTextField(t0) {
  var _initSlotProps, _initSlotProps2;
  var $ = c(207);
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
  var inputRef = useRef(null);
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
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var t1;
  if ($[45] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[45] = t1;
  } else {
    t1 = $[45];
  }
  var setErrorErrorHelperText = t1;
  var t2;
  if ($[46] !== invalidPattern || $[47] !== onValidate || $[48] !== required || $[49] !== validPattern) {
    t2 = function t2(value) {
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
      if (onValidate) {
        var validateResult = onValidate(value);
        if (validateResult != null && validateResult !== true) {
          setErrorErrorHelperText(true, validateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[46] = invalidPattern;
    $[47] = onValidate;
    $[48] = required;
    $[49] = validPattern;
    $[50] = t2;
  } else {
    t2 = $[50];
  }
  var validate = t2;
  var t3;
  if ($[51] !== onValue) {
    t3 = function t3(newValue) {
      return onValue ? onValue(newValue) : newValue;
    };
    $[51] = onValue;
    $[52] = t3;
  } else {
    t3 = $[52];
  }
  var getFinalValue = t3;
  var t4;
  if ($[53] !== getFinalValue || $[54] !== initValue) {
    t4 = getFinalValue(initValue);
    $[53] = getFinalValue;
    $[54] = initValue;
    $[55] = t4;
  } else {
    t4 = $[55];
  }
  var _useState1 = useState(t4),
    _useState10 = _slicedToArray(_useState1, 2),
    value_0 = _useState10[0],
    setValue = _useState10[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t5;
  if ($[56] !== error || $[57] !== getFinalValue || $[58] !== name || $[59] !== noFormValueItem || $[60] !== onChange || $[61] !== onValueChange || $[62] !== validate || $[63] !== valueRef) {
    t5 = function t5(newValue_0) {
      var finalValue = getFinalValue(newValue_0);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      if (!noFormValueItem) {
        onValueChange(name, finalValue);
      }
      return finalValue;
    };
    $[56] = error;
    $[57] = getFinalValue;
    $[58] = name;
    $[59] = noFormValueItem;
    $[60] = onChange;
    $[61] = onValueChange;
    $[62] = validate;
    $[63] = valueRef;
    $[64] = t5;
  } else {
    t5 = $[64];
  }
  var updateValue = t5;
  var t6;
  if ($[65] !== clear || $[66] !== value_0) {
    t6 = clear ? notEmpty(value_0) : false;
    $[65] = clear;
    $[66] = value_0;
    $[67] = t6;
  } else {
    t6 = $[67];
  }
  var showClear = t6;
  var t7;
  if ($[68] !== initInputRef) {
    t7 = function t7() {
      if (initInputRef) {
        var _current;
        (_current = initInputRef.current) === null || _current === void 0 || _current.focus();
      } else {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      }
    };
    $[68] = initInputRef;
    $[69] = t7;
  } else {
    t7 = $[69];
  }
  var focus = t7;
  var t8;
  if ($[70] !== name) {
    t8 = function t8() {
      return name;
    };
    $[70] = name;
    $[71] = t8;
  } else {
    t8 = $[71];
  }
  var t9;
  if ($[72] !== getFinalValue || $[73] !== initValue) {
    t9 = function t9() {
      return getFinalValue(initValue);
    };
    $[72] = getFinalValue;
    $[73] = initValue;
    $[74] = t9;
  } else {
    t9 = $[74];
  }
  var t10;
  if ($[75] !== initValue || $[76] !== updateValue) {
    t10 = function t10() {
      return updateValue(initValue);
    };
    $[75] = initValue;
    $[76] = updateValue;
    $[77] = t10;
  } else {
    t10 = $[77];
  }
  var t11;
  if ($[78] !== valueRef) {
    t11 = function t11() {
      return valueRef.current;
    };
    $[78] = valueRef;
    $[79] = t11;
  } else {
    t11 = $[79];
  }
  var t12;
  if ($[80] !== dataRef) {
    t12 = function t12() {
      return dataRef.current;
    };
    $[80] = dataRef;
    $[81] = t12;
  } else {
    t12 = $[81];
  }
  var t13;
  if ($[82] !== exceptValue) {
    t13 = function t13() {
      return !!exceptValue;
    };
    $[82] = exceptValue;
    $[83] = t13;
  } else {
    t13 = $[83];
  }
  var t14;
  if ($[84] !== disabled) {
    t14 = function t14() {
      return !!disabled;
    };
    $[84] = disabled;
    $[85] = t14;
  } else {
    t14 = $[85];
  }
  var t15;
  if ($[86] !== hidden) {
    t15 = function t15() {
      return !!hidden;
    };
    $[86] = hidden;
    $[87] = t15;
  } else {
    t15 = $[87];
  }
  var t16;
  if ($[88] !== validate || $[89] !== valueRef) {
    t16 = function t16() {
      return validate(valueRef.current);
    };
    $[88] = validate;
    $[89] = valueRef;
    $[90] = t16;
  } else {
    t16 = $[90];
  }
  var t17;
  if ($[91] === Symbol["for"]("react.memo_cache_sentinel")) {
    t17 = function t17(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[91] = t17;
  } else {
    t17 = $[91];
  }
  var t18;
  if ($[92] !== focus || $[93] !== t10 || $[94] !== t11 || $[95] !== t12 || $[96] !== t13 || $[97] !== t14 || $[98] !== t15 || $[99] !== t16 || $[100] !== t8 || $[101] !== t9 || $[102] !== updateValue) {
    t18 = {
      getType: _temp$w,
      getName: t8,
      getReset: t9,
      reset: t10,
      getValue: t11,
      setValue: updateValue,
      getData: t12,
      setData: setData,
      isExceptValue: t13,
      isDisabled: t14,
      setDisabled: setDisabled,
      isHidden: t15,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t16,
      setError: t17
    };
    $[92] = focus;
    $[93] = t10;
    $[94] = t11;
    $[95] = t12;
    $[96] = t13;
    $[97] = t14;
    $[98] = t15;
    $[99] = t16;
    $[100] = t8;
    $[101] = t9;
    $[102] = updateValue;
    $[103] = t18;
  } else {
    t18 = $[103];
  }
  var commands = t18;
  var t19;
  if ($[104] !== id || $[105] !== onAddValueItem) {
    t19 = function t19(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[104] = id;
    $[105] = onAddValueItem;
    $[106] = t19;
  } else {
    t19 = $[106];
  }
  var handleCommandSet = t19;
  var t20;
  if ($[107] !== id || $[108] !== onRemoveValueItem) {
    t20 = function t20() {
      return onRemoveValueItem(id);
    };
    $[107] = id;
    $[108] = onRemoveValueItem;
    $[109] = t20;
  } else {
    t20 = $[109];
  }
  var handleCommandUnset = t20;
  useForwardRef(ref, commands, !noFormValueItem ? handleCommandSet : undefined, !noFormValueItem ? handleCommandUnset : undefined);
  var t21;
  if ($[110] !== name || $[111] !== noFormValueItem || $[112] !== onRequestSearchSubmit || $[113] !== onValueChangeByUser || $[114] !== select || $[115] !== updateValue) {
    t21 = function t21(e) {
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
    $[110] = name;
    $[111] = noFormValueItem;
    $[112] = onRequestSearchSubmit;
    $[113] = onValueChangeByUser;
    $[114] = select;
    $[115] = updateValue;
    $[116] = t21;
  } else {
    t21 = $[116];
  }
  var handleChange = t21;
  var t22;
  if ($[117] !== error || $[118] !== onBlur || $[119] !== validate || $[120] !== valueRef) {
    t22 = function t22(e_0) {
      if (error) {
        validate(valueRef.current);
      }
      if (onBlur) {
        onBlur(e_0);
      }
    };
    $[117] = error;
    $[118] = onBlur;
    $[119] = validate;
    $[120] = valueRef;
    $[121] = t22;
  } else {
    t22 = $[121];
  }
  var handleBlur = t22;
  var t23;
  if ($[122] !== disableReturnKey || $[123] !== multiline || $[124] !== name || $[125] !== noFormValueItem || $[126] !== onKeyDown || $[127] !== onRequestSearchSubmit || $[128] !== onRequestSubmit || $[129] !== select || $[130] !== submitWhenReturnKey || $[131] !== valueRef) {
    t23 = function t23(e_1) {
      if (["Enter"].includes(e_1.key) && !select && (!multiline || multiline && disableReturnKey) && !noFormValueItem) {
        e_1.preventDefault();
        e_1.stopPropagation();
        if (submitWhenReturnKey) {
          onRequestSubmit(name, valueRef.current);
        }
        onRequestSearchSubmit(name, valueRef.current);
      }
      if (onKeyDown) {
        onKeyDown(e_1);
      }
    };
    $[122] = disableReturnKey;
    $[123] = multiline;
    $[124] = name;
    $[125] = noFormValueItem;
    $[126] = onKeyDown;
    $[127] = onRequestSearchSubmit;
    $[128] = onRequestSubmit;
    $[129] = select;
    $[130] = submitWhenReturnKey;
    $[131] = valueRef;
    $[132] = t23;
  } else {
    t23 = $[132];
  }
  var handleKeyDown = t23;
  var style;
  if ($[133] !== hidden || $[134] !== initStyle || $[135] !== width) {
    style = _objectSpread2({}, initStyle);
    if (width != null) {
      style.width = width;
    }
    if (hidden) {
      style.display = "none";
    }
    $[133] = hidden;
    $[134] = initStyle;
    $[135] = width;
    $[136] = style;
  } else {
    style = $[136];
  }
  (_initSlotProps = initSlotProps) === null || _initSlotProps === void 0 || _initSlotProps.input;
  var t24 = (_initSlotProps2 = initSlotProps) === null || _initSlotProps2 === void 0 ? void 0 : _initSlotProps2.input;
  var newProps;
  if ($[137] !== clear || $[138] !== disabled || $[139] !== endAdornment || $[140] !== focus || $[141] !== icon || $[142] !== name || $[143] !== noFormValueItem || $[144] !== onRequestSearchSubmit || $[145] !== onValueChangeByUser || $[146] !== readOnly || $[147] !== showClear || $[148] !== startAdornment || $[149] !== t24 || $[150] !== updateValue) {
    newProps = _objectSpread2({}, t24);
    if (startAdornment || icon || newProps.startAdornment) {
      var _t2;
      if ($[152] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "small"
        }, icon));
        $[152] = icon;
        $[153] = _t2;
      } else {
        _t2 = $[153];
      }
      var _t3;
      if ($[154] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, startAdornment);
        $[154] = startAdornment;
        $[155] = _t3;
      } else {
        _t3 = $[155];
      }
      newProps.startAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3, newProps.startAdornment);
    }
    if (endAdornment || newProps.endAdornment || clear && !readOnly && !disabled) {
      var _t4;
      if ($[156] !== clear || $[157] !== disabled || $[158] !== focus || $[159] !== name || $[160] !== noFormValueItem || $[161] !== onRequestSearchSubmit || $[162] !== onValueChangeByUser || $[163] !== readOnly || $[164] !== showClear || $[165] !== updateValue) {
        _t4 = clear && !readOnly && !disabled && /*#__PURE__*/React.createElement(InputAdornment, {
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
        }, "ClearRounded")));
        $[156] = clear;
        $[157] = disabled;
        $[158] = focus;
        $[159] = name;
        $[160] = noFormValueItem;
        $[161] = onRequestSearchSubmit;
        $[162] = onValueChangeByUser;
        $[163] = readOnly;
        $[164] = showClear;
        $[165] = updateValue;
        $[166] = _t4;
      } else {
        _t4 = $[166];
      }
      var _t5;
      if ($[167] !== endAdornment) {
        _t5 = endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, endAdornment);
        $[167] = endAdornment;
        $[168] = _t5;
      } else {
        _t5 = $[168];
      }
      newProps.endAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, _t4, newProps.endAdornment, _t5);
    }
    $[137] = clear;
    $[138] = disabled;
    $[139] = endAdornment;
    $[140] = focus;
    $[141] = icon;
    $[142] = name;
    $[143] = noFormValueItem;
    $[144] = onRequestSearchSubmit;
    $[145] = onValueChangeByUser;
    $[146] = readOnly;
    $[147] = showClear;
    $[148] = startAdornment;
    $[149] = t24;
    $[150] = updateValue;
    $[151] = newProps;
  } else {
    newProps = $[151];
  }
  var inputSlotProps = newProps;
  var newSlotProps;
  if ($[169] !== initSlotProps || $[170] !== inputSlotProps || $[171] !== labelShrink || $[172] !== maxLength || $[173] !== placeholder || $[174] !== readOnly || $[175] !== tabIndex) {
    var _initSlotProps3, _initSlotProps4, _initSlotProps5, _initSlotProps6, _initHtmlInputProps$c;
    newSlotProps = _objectSpread2(_objectSpread2({}, initSlotProps), {}, {
      formHelperText: {
        component: "div"
      }
    });
    newSlotProps.input = _objectSpread2(_objectSpread2({}, (_initSlotProps3 = initSlotProps) === null || _initSlotProps3 === void 0 ? void 0 : _initSlotProps3.input), inputSlotProps);
    newSlotProps.inputLabel = labelShrink || placeholder ? _objectSpread2(_objectSpread2({}, (_initSlotProps4 = initSlotProps) === null || _initSlotProps4 === void 0 ? void 0 : _initSlotProps4.inputLabel), {}, {
      shrink: true
    }) : (_initSlotProps5 = initSlotProps) === null || _initSlotProps5 === void 0 ? void 0 : _initSlotProps5.inputLabel;
    var initHtmlInputProps = (_initSlotProps6 = initSlotProps) === null || _initSlotProps6 === void 0 ? void 0 : _initSlotProps6.htmlInput;
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
    $[169] = initSlotProps;
    $[170] = inputSlotProps;
    $[171] = labelShrink;
    $[172] = maxLength;
    $[173] = placeholder;
    $[174] = readOnly;
    $[175] = tabIndex;
    $[176] = newSlotProps;
  } else {
    newSlotProps = $[176];
  }
  var slotProps = newSlotProps;
  var t25 = focused || undefined;
  var t26;
  if ($[177] !== initLabel || $[178] !== labelIcon) {
    t26 = labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PIcon, {
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
    $[177] = initLabel;
    $[178] = labelIcon;
    $[179] = t26;
  } else {
    t26 = $[179];
  }
  var t27 = "variant-".concat(variant);
  var t28;
  if ($[180] !== className || $[181] !== t27) {
    t28 = classNames(className, "PFormValueItem", "PFormTextField", t27);
    $[180] = className;
    $[181] = t27;
    $[182] = t28;
  } else {
    t28 = $[182];
  }
  var t29 = initInputRef ? initInputRef : inputRef;
  var t30 = !width && fullWidth;
  var t31 = formColWithHelperText ? undefined : error ? errorHelperText : helperText;
  var t32;
  if ($[183] !== color || $[184] !== disabled || $[185] !== error || $[186] !== handleBlur || $[187] !== handleChange || $[188] !== handleKeyDown || $[189] !== multiline || $[190] !== name || $[191] !== placeholder || $[192] !== props || $[193] !== required || $[194] !== select || $[195] !== size || $[196] !== slotProps || $[197] !== style || $[198] !== t25 || $[199] !== t26 || $[200] !== t28 || $[201] !== t29 || $[202] !== t30 || $[203] !== t31 || $[204] !== value_0 || $[205] !== variant) {
    t32 = /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
      variant: variant,
      size: size,
      color: color,
      focused: t25,
      name: name,
      label: t26,
      placeholder: placeholder,
      className: t28,
      inputRef: t29,
      value: value_0,
      required: required,
      fullWidth: t30,
      error: error,
      helperText: t31,
      slotProps: slotProps,
      disabled: disabled,
      style: style,
      select: select,
      multiline: multiline,
      onChange: handleChange,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown
    }));
    $[183] = color;
    $[184] = disabled;
    $[185] = error;
    $[186] = handleBlur;
    $[187] = handleChange;
    $[188] = handleKeyDown;
    $[189] = multiline;
    $[190] = name;
    $[191] = placeholder;
    $[192] = props;
    $[193] = required;
    $[194] = select;
    $[195] = size;
    $[196] = slotProps;
    $[197] = style;
    $[198] = t25;
    $[199] = t26;
    $[200] = t28;
    $[201] = t29;
    $[202] = t30;
    $[203] = t31;
    $[204] = value_0;
    $[205] = variant;
    $[206] = t32;
  } else {
    t32 = $[206];
  }
  return t32;
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
  var $ = c(138);
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
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState3 = useState(finalInitDisabled),
    _useState4 = _slicedToArray(_useState3, 2),
    disabled = _useState4[0],
    setDisabled = _useState4[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    errorHelperText = _useState6[0],
    setErrorHelperText = _useState6[1];
  var t5;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[39] = t5;
  } else {
    t5 = $[39];
  }
  var setErrorErrorHelperText = t5;
  var t6;
  if ($[40] !== onValidate || $[41] !== required) {
    t6 = function t6(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[40] = onValidate;
    $[41] = required;
    $[42] = t6;
  } else {
    t6 = $[42];
  }
  var _validate = t6;
  var t7;
  if ($[43] !== onValue) {
    t7 = function t7(value_0) {
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
    $[43] = onValue;
    $[44] = t7;
  } else {
    t7 = $[44];
  }
  var getFinalValue = t7;
  var t8;
  if ($[45] !== getFinalValue || $[46] !== initValue) {
    t8 = getFinalValue(initValue);
    $[45] = getFinalValue;
    $[46] = initValue;
    $[47] = t8;
  } else {
    t8 = $[47];
  }
  var _useState7 = useState(t8),
    _useState8 = _slicedToArray(_useState7, 2),
    value_1 = _useState8[0],
    setValue = _useState8[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_1);
  var t9;
  if ($[48] !== value_1) {
    t9 = new Set(value_1);
    $[48] = value_1;
    $[49] = t9;
  } else {
    t9 = $[49];
  }
  var _useState9 = useState(t9),
    _useState0 = _slicedToArray(_useState9, 1),
    valueSet = _useState0[0];
  var t10;
  if ($[50] !== error || $[51] !== getFinalValue || $[52] !== name || $[53] !== onChange || $[54] !== onValueChange || $[55] !== _validate || $[56] !== valueRef) {
    t10 = function t10(newValue) {
      var finalValue_1 = getFinalValue(newValue);
      setValue(finalValue_1);
      valueRef.current = finalValue_1;
      if (error) {
        _validate(finalValue_1);
      }
      if (onChange) {
        onChange(finalValue_1);
      }
      onValueChange(name, finalValue_1);
      return finalValue_1;
    };
    $[50] = error;
    $[51] = getFinalValue;
    $[52] = name;
    $[53] = onChange;
    $[54] = onValueChange;
    $[55] = _validate;
    $[56] = valueRef;
    $[57] = t10;
  } else {
    t10 = $[57];
  }
  var updateValue = t10;
  var firstValueRef = useRef(value_1);
  var firstNameRef = useRef(name);
  var firstInitValueRef = useRef(initValue);
  var firstOnChangeRef = useRef(onChange);
  var firstOnValueChangeRef = useRef(onValueChange);
  var t11;
  var t12;
  if ($[58] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11() {
      if (!equal(firstValueRef.current, firstInitValueRef.current)) {
        var _firstOnChangeRef$cur;
        (_firstOnChangeRef$cur = firstOnChangeRef.current) === null || _firstOnChangeRef$cur === void 0 || _firstOnChangeRef$cur.call(firstOnChangeRef, firstValueRef.current);
        firstOnValueChangeRef.current(firstNameRef.current, firstValueRef.current);
      }
    };
    t12 = [];
    $[58] = t11;
    $[59] = t12;
  } else {
    t11 = $[58];
    t12 = $[59];
  }
  useEffect(t11, t12);
  var t13;
  if ($[60] !== formValueSeparator || $[61] !== formValueSort) {
    t13 = function t13() {
      return {
        isFormValueSort: function isFormValueSort() {
          return !!formValueSort;
        },
        getFormValueSeparator: function getFormValueSeparator() {
          return formValueSeparator;
        }
      };
    };
    $[60] = formValueSeparator;
    $[61] = formValueSort;
    $[62] = t13;
  } else {
    t13 = $[62];
  }
  var getExtraCommands = t13;
  var t14;
  if ($[63] !== getExtraCommands || $[64] !== getFinalValue || $[65] !== initValue || $[66] !== updateValue || $[67] !== _validate || $[68] !== valueRef) {
    t14 = function t14(baseCommands) {
      return _objectSpread2(_objectSpread2({}, baseCommands), {}, {
        getReset: function getReset() {
          return getFinalValue(initValue);
        },
        reset: function reset() {
          return updateValue(initValue);
        },
        getValue: function getValue() {
          return valueRef.current;
        },
        setValue: function setValue(newValue_0) {
          updateValue(newValue_0);
        },
        validate: function validate() {
          return _validate(valueRef.current);
        }
      }, getExtraCommands());
    };
    $[63] = getExtraCommands;
    $[64] = getFinalValue;
    $[65] = initValue;
    $[66] = updateValue;
    $[67] = _validate;
    $[68] = valueRef;
    $[69] = t14;
  } else {
    t14 = $[69];
  }
  var getCommands = t14;
  var t15;
  if ($[70] !== name || $[71] !== onAppendTag || $[72] !== onRequestSearchSubmit || $[73] !== onValueChangeByUser || $[74] !== updateValue || $[75] !== valueSet) {
    t15 = function t15(tag) {
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
    $[70] = name;
    $[71] = onAppendTag;
    $[72] = onRequestSearchSubmit;
    $[73] = onValueChangeByUser;
    $[74] = updateValue;
    $[75] = valueSet;
    $[76] = t15;
  } else {
    t15 = $[76];
  }
  var appendTag = t15;
  var t16;
  if ($[77] !== name || $[78] !== onRemoveTag || $[79] !== onRequestSearchSubmit || $[80] !== onValueChangeByUser || $[81] !== updateValue || $[82] !== valueSet) {
    t16 = function t16(tag_0) {
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
    $[77] = name;
    $[78] = onRemoveTag;
    $[79] = onRequestSearchSubmit;
    $[80] = onValueChangeByUser;
    $[81] = updateValue;
    $[82] = valueSet;
    $[83] = t16;
  } else {
    t16 = $[83];
  }
  var removeTag = t16;
  var t17;
  if ($[84] !== getCommands || $[85] !== onAddValueItem) {
    t17 = function t17(id, commands) {
      onAddValueItem(id, getCommands(commands));
    };
    $[84] = getCommands;
    $[85] = onAddValueItem;
    $[86] = t17;
  } else {
    t17 = $[86];
  }
  var handleAddValueItem = t17;
  var t18;
  if ($[87] !== getCommands || $[88] !== ref) {
    t18 = function t18(commands_0) {
      if (ref) {
        var finalCommands = getCommands(commands_0);
        if (typeof ref === "function") {
          ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[87] = getCommands;
    $[88] = ref;
    $[89] = t18;
  } else {
    t18 = $[89];
  }
  var handleRef = t18;
  var t19;
  if ($[90] !== disabled || $[91] !== onTagClick || $[92] !== readOnly || $[93] !== removeTag || $[94] !== size || $[95] !== variant) {
    t19 = function t19(tags) {
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
    $[90] = disabled;
    $[91] = onTagClick;
    $[92] = readOnly;
    $[93] = removeTag;
    $[94] = size;
    $[95] = variant;
    $[96] = t19;
  } else {
    t19 = $[96];
  }
  var handleRenderValue = t19;
  var t20;
  if ($[97] !== allowSpace || $[98] !== appendTag || $[99] !== className || $[100] !== clear || $[101] !== disabled || $[102] !== error || $[103] !== errorHelperText || $[104] !== exceptValue || $[105] !== fullWidth || $[106] !== handleRef || $[107] !== helperText || $[108] !== maxLength || $[109] !== name || $[110] !== props || $[111] !== readOnly || $[112] !== size || $[113] !== slotProps || $[114] !== variant) {
    t20 = function t20(params) {
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
    $[97] = allowSpace;
    $[98] = appendTag;
    $[99] = className;
    $[100] = clear;
    $[101] = disabled;
    $[102] = error;
    $[103] = errorHelperText;
    $[104] = exceptValue;
    $[105] = fullWidth;
    $[106] = handleRef;
    $[107] = helperText;
    $[108] = maxLength;
    $[109] = name;
    $[110] = props;
    $[111] = readOnly;
    $[112] = size;
    $[113] = slotProps;
    $[114] = variant;
    $[115] = t20;
  } else {
    t20 = $[115];
  }
  var handleRenderInput = t20;
  var t21;
  if ($[116] !== formFullWidth || $[117] !== formSize || $[118] !== formVariant || $[119] !== handleAddValueItem || $[120] !== otherFormState) {
    t21 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: formVariant,
      size: formSize,
      fullWidth: formFullWidth,
      onAddValueItem: handleAddValueItem,
      onValueChange: _temp$v,
      onValueChangeByUser: _temp2$5,
      onRequestSearchSubmit: _temp3$3
    });
    $[116] = formFullWidth;
    $[117] = formSize;
    $[118] = formVariant;
    $[119] = handleAddValueItem;
    $[120] = otherFormState;
    $[121] = t21;
  } else {
    t21 = $[121];
  }
  var t22;
  if ($[122] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = [];
    $[122] = t22;
  } else {
    t22 = $[122];
  }
  var t23 = fullWidth ? "block" : "inline-block";
  var t24 = fullWidth ? "100%" : undefined;
  var t25;
  if ($[123] !== t23 || $[124] !== t24) {
    t25 = {
      display: t23,
      width: t24
    };
    $[123] = t23;
    $[124] = t24;
    $[125] = t25;
  } else {
    t25 = $[125];
  }
  var t26;
  if ($[126] !== disabled || $[127] !== getLimitTagsText || $[128] !== handleRenderInput || $[129] !== handleRenderValue || $[130] !== limitTags || $[131] !== readOnly || $[132] !== t25 || $[133] !== value_1) {
    t26 = /*#__PURE__*/React.createElement(Autocomplete, {
      options: t22,
      multiple: true,
      freeSolo: true,
      value: value_1,
      readOnly: readOnly,
      disableClearable: true,
      limitTags: limitTags,
      getLimitTagsText: getLimitTagsText,
      disabled: disabled,
      renderValue: handleRenderValue,
      style: t25,
      renderInput: handleRenderInput
    });
    $[126] = disabled;
    $[127] = getLimitTagsText;
    $[128] = handleRenderInput;
    $[129] = handleRenderValue;
    $[130] = limitTags;
    $[131] = readOnly;
    $[132] = t25;
    $[133] = value_1;
    $[134] = t26;
  } else {
    t26 = $[134];
  }
  var t27;
  if ($[135] !== t21 || $[136] !== t26) {
    t27 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t21
    }, t26);
    $[135] = t21;
    $[136] = t26;
    $[137] = t27;
  } else {
    t27 = $[137];
  }
  return t27;
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
  var t3;
  if ($[7] !== onValue) {
    t3 = function t3(value) {
      var newValue = value.replace(/ /gi, "");
      return onValue ? onValue(newValue) : newValue;
    };
    $[7] = onValue;
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
  var _initSlotProps, _initSlotProps2;
  var $ = c(33);
  var className;
  var clear;
  var eye;
  var initSlotProps;
  var onChange;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0.className,
      _t2 = t0.slotProps,
      _t3 = t0.clear,
      _t4 = t0.eye,
      _t5 = t0.onChange,
      _t6 = _objectWithoutProperties(t0, _excluded$s);
    className = _t;
    initSlotProps = _t2;
    onChange = _t5;
    props = _t6;
    clear = _t3 === undefined ? false : _t3;
    eye = _t4 === undefined ? true : _t4;
    t1 = useState;
    t2 = notEmpty(props.value);
    $[0] = t0;
    $[1] = className;
    $[2] = clear;
    $[3] = eye;
    $[4] = initSlotProps;
    $[5] = onChange;
    $[6] = props;
    $[7] = t1;
    $[8] = t2;
  } else {
    className = $[1];
    clear = $[2];
    eye = $[3];
    initSlotProps = $[4];
    onChange = $[5];
    props = $[6];
    t1 = $[7];
    t2 = $[8];
  }
  var _t7 = t1(t2),
    _t8 = _slicedToArray(_t7, 2),
    showEye = _t8[0],
    setShowEye = _t8[1];
  var _useState = useState("password"),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var t3;
  if ($[9] !== eye || $[10] !== showEye || $[11] !== type) {
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
    $[9] = eye;
    $[10] = showEye;
    $[11] = type;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  var eyeAdornment = t3;
  var t4 = (_initSlotProps = initSlotProps) === null || _initSlotProps === void 0 ? void 0 : _initSlotProps.input;
  var t5 = (_initSlotProps2 = initSlotProps) === null || _initSlotProps2 === void 0 || (_initSlotProps2 = _initSlotProps2.input) === null || _initSlotProps2 === void 0 ? void 0 : _initSlotProps2.endAdornment;
  var t6;
  if ($[13] !== eyeAdornment || $[14] !== t5) {
    t6 = /*#__PURE__*/React.createElement(React.Fragment, null, eyeAdornment, t5);
    $[13] = eyeAdornment;
    $[14] = t5;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  var t7;
  if ($[16] !== t4 || $[17] !== t6) {
    t7 = _objectSpread2(_objectSpread2({}, t4), {}, {
      endAdornment: t6
    });
    $[16] = t4;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  var t8;
  if ($[19] !== initSlotProps || $[20] !== t7) {
    t8 = _objectSpread2(_objectSpread2({}, initSlotProps), {}, {
      input: t7
    });
    $[19] = initSlotProps;
    $[20] = t7;
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  var slotProps = t8;
  var t9;
  if ($[22] !== onChange) {
    t9 = function t9(value) {
      setShowEye(notEmpty(value));
      onChange && onChange(value);
    };
    $[22] = onChange;
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  var handleChange = t9;
  var t10;
  if ($[24] !== className) {
    t10 = classNames(className, "PFormPassword");
    $[24] = className;
    $[25] = t10;
  } else {
    t10 = $[25];
  }
  var t11;
  if ($[26] !== clear || $[27] !== handleChange || $[28] !== props || $[29] !== slotProps || $[30] !== t10 || $[31] !== type) {
    t11 = /*#__PURE__*/React.createElement(PFormText, _extends({
      className: t10,
      onChange: handleChange,
      type: type,
      slotProps: slotProps,
      clear: clear
    }, props));
    $[26] = clear;
    $[27] = handleChange;
    $[28] = props;
    $[29] = slotProps;
    $[30] = t10;
    $[31] = type;
    $[32] = t11;
  } else {
    t11 = $[32];
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
  var t3;
  if ($[8] !== onValue) {
    t3 = function t3(value) {
      var newValue = formatTelNo(value.replace(/[^0-9]/gi, ""));
      return onValue ? onValue(newValue) : newValue;
    };
    $[8] = onValue;
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
  var $ = c(65);
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
  var _useState = useState(initValue !== undefined ? "".concat(initValue) : ""),
    _useState2 = _slicedToArray(_useState, 2),
    strValue = _useState2[0],
    setStrValue = _useState2[1];
  var strValueRef = useAutoUpdateRef(strValue);
  var newSlotProps;
  if ($[19] !== allowDecimal || $[20] !== allowNegative || $[21] !== decimalScale || $[22] !== initSlotProps || $[23] !== prefix || $[24] !== readOnly || $[25] !== suffix || $[26] !== tabIndex || $[27] !== thousandSeparator) {
    var _newSlotProps$input;
    newSlotProps = _objectSpread2({}, initSlotProps);
    var _t2 = readOnly ? "Mui-disabled" : undefined;
    var _t3 = !!allowNegative;
    var _t4 = !!readOnly;
    var _t5 = readOnly ? -1 : tabIndex;
    var inputProps;
    if ($[29] !== allowDecimal || $[30] !== decimalScale || $[31] !== prefix || $[32] !== suffix || $[33] !== _t2 || $[34] !== _t3 || $[35] !== _t4 || $[36] !== _t5 || $[37] !== thousandSeparator) {
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
      $[29] = allowDecimal;
      $[30] = decimalScale;
      $[31] = prefix;
      $[32] = suffix;
      $[33] = _t2;
      $[34] = _t3;
      $[35] = _t4;
      $[36] = _t5;
      $[37] = thousandSeparator;
      $[38] = inputProps;
    } else {
      inputProps = $[38];
    }
    newSlotProps.input = _objectSpread2(_objectSpread2({}, newSlotProps.input), {}, {
      inputComponent: NumberFormatCustom,
      inputProps: _objectSpread2(_objectSpread2({}, (_newSlotProps$input = newSlotProps.input) === null || _newSlotProps$input === void 0 ? void 0 : _newSlotProps$input.inputProps), inputProps)
    });
    $[19] = allowDecimal;
    $[20] = allowNegative;
    $[21] = decimalScale;
    $[22] = initSlotProps;
    $[23] = prefix;
    $[24] = readOnly;
    $[25] = suffix;
    $[26] = tabIndex;
    $[27] = thousandSeparator;
    $[28] = newSlotProps;
  } else {
    newSlotProps = $[28];
  }
  var slotProps = newSlotProps;
  var getFinalValue = _temp$t;
  var t2;
  if ($[39] !== onChange || $[40] !== strValue) {
    t2 = function t2(value_0) {
      if (Number(value_0) > Number.MAX_SAFE_INTEGER) {
        var newValue = Number.MAX_SAFE_INTEGER;
        var newStrValue = "".concat(newValue);
        if (strValue === newStrValue) {
          setStrValue("".concat(newValue, " "));
        } else {
          setStrValue("".concat(newValue));
        }
        onChange && onChange(newValue);
      } else {
        if (Number(value_0) < Number.MIN_SAFE_INTEGER) {
          var newValue_0 = Number.MIN_SAFE_INTEGER;
          var newStrValue_0 = "".concat(newValue_0);
          if (strValue === newStrValue_0) {
            setStrValue("".concat(newValue_0, " "));
          } else {
            setStrValue("".concat(newValue_0));
          }
          onChange && onChange(newValue_0);
        } else {
          var newValue_1 = empty(value_0) || value_0 === "-" || value_0 === "." ? undefined : Number(value_0);
          onChange && onChange(newValue_1);
          setStrValue(value_0);
        }
      }
    };
    $[39] = onChange;
    $[40] = strValue;
    $[41] = t2;
  } else {
    t2 = $[41];
  }
  var handleChange = t2;
  var t3;
  if ($[42] !== onValue) {
    t3 = function t3(value_1) {
      var finalValue = empty(value_1) || value_1 === "-" || value_1 === "." ? undefined : Number(value_1);
      if (onValue) {
        finalValue = onValue(finalValue);
      }
      return finalValue !== undefined ? finalValue.toString() : "";
    };
    $[42] = onValue;
    $[43] = t3;
  } else {
    t3 = $[43];
  }
  var handleValue = t3;
  var t4;
  if ($[44] !== onValidate) {
    t4 = function t4(value_2) {
      if (onValidate) {
        var finalValue_0 = empty(value_2) || value_2 === "-" || value_2 === "." ? undefined : Number(value_2);
        return onValidate(finalValue_0);
      } else {
        return true;
      }
    };
    $[44] = onValidate;
    $[45] = t4;
  } else {
    t4 = $[45];
  }
  var handleValidate = t4;
  var t5;
  if ($[46] !== initValue || $[47] !== onChange || $[48] !== ref || $[49] !== strValueRef) {
    t5 = function t5(commands) {
      if (ref) {
        var finalCommands = commands ? _objectSpread2(_objectSpread2({}, commands), {}, {
          getReset: function getReset() {
            return initValue;
          },
          getValue: function getValue() {
            return getFinalValue(strValueRef.current);
          },
          setValue: function setValue(value_3) {
            var strValue_0 = value_3 !== undefined ? "".concat(value_3) : "";
            if (strValue_0 === strValue_0) {
              setStrValue("".concat(strValue_0, " "));
            } else {
              setStrValue(strValue_0);
            }
            onChange && onChange(value_3);
          }
        }) : null;
        if (typeof ref === "function") {
          return ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[46] = initValue;
    $[47] = onChange;
    $[48] = ref;
    $[49] = strValueRef;
    $[50] = t5;
  } else {
    t5 = $[50];
  }
  var handleRef = t5;
  var t6;
  if ($[51] !== className) {
    t6 = classNames(className, "PFormNumber");
    $[51] = className;
    $[52] = t6;
  } else {
    t6 = $[52];
  }
  var t7 = strValue === "" || strValue === undefined ? labelShrink : true;
  var t8;
  if ($[53] !== clear || $[54] !== handleChange || $[55] !== handleRef || $[56] !== handleValidate || $[57] !== handleValue || $[58] !== props || $[59] !== readOnly || $[60] !== slotProps || $[61] !== strValue || $[62] !== t6 || $[63] !== t7) {
    t8 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      ref: handleRef,
      className: t6,
      disableReturnKey: true,
      labelShrink: t7,
      slotProps: slotProps,
      readOnly: readOnly,
      clear: clear,
      value: strValue,
      onChange: handleChange,
      onValue: handleValue,
      onValidate: handleValidate
    }, props));
    $[53] = clear;
    $[54] = handleChange;
    $[55] = handleRef;
    $[56] = handleValidate;
    $[57] = handleValue;
    $[58] = props;
    $[59] = readOnly;
    $[60] = slotProps;
    $[61] = strValue;
    $[62] = t6;
    $[63] = t7;
    $[64] = t8;
  } else {
    t8 = $[64];
  }
  return t8;
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
  var t3;
  if ($[7] !== onValue) {
    t3 = function t3(value) {
      var newValue = value.replace(/ /gi, "");
      return onValue ? onValue(newValue) : newValue;
    };
    $[7] = onValue;
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
  var $ = c(142);
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
  var onLoadItemsRef = useAutoUpdateRef(onLoadItems);
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
  if (useChanged(initItems)) {
    _setItems(initItems);
  }
  if (useChanged(items, true)) {
    if (items) {
      setItemValueLabels(items.reduce(_temp$s, {}));
      setHasEmptyValue(!!items.find(_temp2$4));
    } else {
      setItemValueLabels({});
      setHasEmptyValue(false);
    }
  }
  var t7;
  if (items) {
    var _t5;
    if ($[36] !== items) {
      _t5 = items.reduce(_temp3$2, {});
      $[36] = items;
      $[37] = _t5;
    } else {
      _t5 = $[37];
    }
    t7 = _t5;
  } else {
    var _t6;
    if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t6 = {};
      $[38] = _t6;
    } else {
      _t6 = $[38];
    }
    t7 = _t6;
  }
  var itemsValues = t7;
  var t8;
  if ($[39] !== formValueSeparator || $[40] !== itemsValues || $[41] !== multiple || $[42] !== onValue) {
    t8 = function t8(newValue) {
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
    $[39] = formValueSeparator;
    $[40] = itemsValues;
    $[41] = multiple;
    $[42] = onValue;
    $[43] = t8;
  } else {
    t8 = $[43];
  }
  var getFinalValue = t8;
  var t9;
  if ($[44] !== getFinalValue || $[45] !== initValue) {
    t9 = getFinalValue(initValue);
    $[44] = getFinalValue;
    $[45] = initValue;
    $[46] = t9;
  } else {
    t9 = $[46];
  }
  var _useState11 = useState(t9),
    _useState12 = _slicedToArray(_useState11, 2),
    value_1 = _useState12[0],
    setValue = _useState12[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_1);
  var t10;
  if ($[47] !== getFinalValue || $[48] !== name || $[49] !== onChange || $[50] !== onValueChange) {
    t10 = function t10(newValue_0, t11) {
      var skipGetFinalValue = t11 === undefined ? false : t11;
      var finalValue_0 = skipGetFinalValue ? newValue_0 : getFinalValue(newValue_0);
      setValue(finalValue_0);
      if (onChange) {
        onChange(finalValue_0);
      }
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[47] = getFinalValue;
    $[48] = name;
    $[49] = onChange;
    $[50] = onValueChange;
    $[51] = t10;
  } else {
    t10 = $[51];
  }
  var updateValue = t10;
  if (useChanged(multiple)) {
    updateValue(value_1);
  }
  var t11;
  var t12;
  if ($[52] !== onLoadItemsRef) {
    t11 = function t11() {
      if (onLoadItemsRef.current) {
        onLoadItemsRef.current().then(function (items_0) {
          _setItems(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    t12 = [onLoadItemsRef];
    $[52] = onLoadItemsRef;
    $[53] = t11;
    $[54] = t12;
  } else {
    t11 = $[53];
    t12 = $[54];
  }
  useEffect(t11, t12);
  var t13;
  if ($[55] !== hasEmptyValue || $[56] !== items || $[57] !== placeholder || $[58] !== value_1) {
    t13 = notEmpty(items) && empty(value_1) && !!placeholder && !hasEmptyValue;
    $[55] = hasEmptyValue;
    $[56] = items;
    $[57] = placeholder;
    $[58] = value_1;
    $[59] = t13;
  } else {
    t13 = $[59];
  }
  var isSelectedPlaceholder = t13;
  var t14;
  if ($[60] !== getFinalValue || $[61] !== initValue || $[62] !== updateValue || $[63] !== valueRef) {
    t14 = function t14() {
      return {
        getReset: function getReset() {
          return getFinalValue(initValue);
        },
        reset: function reset() {
          return updateValue(initValue);
        },
        getValue: function getValue() {
          return valueRef.current;
        },
        setValue: function setValue(value_2) {
          return updateValue(value_2);
        }
      };
    };
    $[60] = getFinalValue;
    $[61] = initValue;
    $[62] = updateValue;
    $[63] = valueRef;
    $[64] = t14;
  } else {
    t14 = $[64];
  }
  var getBaseCommands = t14;
  var t15;
  if ($[65] !== formValueSeparator || $[66] !== formValueSort || $[67] !== items || $[68] !== loading || $[69] !== multiple || $[70] !== onLoadItems) {
    t15 = function t15() {
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
    $[65] = formValueSeparator;
    $[66] = formValueSort;
    $[67] = items;
    $[68] = loading;
    $[69] = multiple;
    $[70] = onLoadItems;
    $[71] = t15;
  } else {
    t15 = $[71];
  }
  var getExtraCommands = t15;
  var t16;
  if ($[72] !== getBaseCommands || $[73] !== getExtraCommands || $[74] !== ref) {
    t16 = function t16(commands) {
      if (ref) {
        var finalCommands = commands ? _objectSpread2(_objectSpread2(_objectSpread2({}, commands), getBaseCommands()), getExtraCommands()) : null;
        if (typeof ref === "function") {
          return ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[72] = getBaseCommands;
    $[73] = getExtraCommands;
    $[74] = ref;
    $[75] = t16;
  } else {
    t16 = $[75];
  }
  var handleRef = t16;
  var t17;
  if ($[76] !== getBaseCommands || $[77] !== getExtraCommands || $[78] !== onAddValueItem) {
    t17 = function t17(id, commands_0) {
      onAddValueItem(id, _objectSpread2(_objectSpread2(_objectSpread2({}, commands_0), getBaseCommands()), getExtraCommands()));
    };
    $[76] = getBaseCommands;
    $[77] = getExtraCommands;
    $[78] = onAddValueItem;
    $[79] = t17;
  } else {
    t17 = $[79];
  }
  var handleAddValueItem = t17;
  var t18;
  if ($[80] !== updateValue) {
    t18 = function t18(newValue_1) {
      updateValue(newValue_1);
    };
    $[80] = updateValue;
    $[81] = t18;
  } else {
    t18 = $[81];
  }
  var handleChange = t18;
  var t19;
  if ($[82] !== getFinalValue) {
    t19 = function t19(value_3) {
      return getFinalValue(value_3);
    };
    $[82] = getFinalValue;
    $[83] = t19;
  } else {
    t19 = $[83];
  }
  var handleValue = t19;
  var newFinalValue;
  if (notEmpty(items)) {
    newFinalValue = value_1;
  } else {
    newFinalValue = multiple ? emptyValue : "";
  }
  if (multiple) {
    if (newFinalValue != null && !Array.isArray(newFinalValue)) {
      var _t7;
      if ($[84] !== newFinalValue) {
        _t7 = [newFinalValue];
        $[84] = newFinalValue;
        $[85] = _t7;
      } else {
        _t7 = $[85];
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
  var t20 = !!multiple;
  var finalSelectProps;
  if ($[86] !== finalValue_1 || $[87] !== isSelectedPlaceholder || $[88] !== itemValueLabels || $[89] !== minWidth || $[90] !== multiple || $[91] !== placeholder || $[92] !== t20 || $[93] !== width) {
    var _finalSelectProps$Men;
    finalSelectProps = {
      displayEmpty: true,
      multiple: t20,
      value: finalValue_1
    };
    if (multiple) {
      var _t8;
      if ($[95] !== isSelectedPlaceholder || $[96] !== itemValueLabels || $[97] !== placeholder) {
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
        $[95] = isSelectedPlaceholder;
        $[96] = itemValueLabels;
        $[97] = placeholder;
        $[98] = _t8;
      } else {
        _t8 = $[98];
      }
      finalSelectProps.renderValue = _t8;
    }
    finalSelectProps.style = _objectSpread2(_objectSpread2({}, finalSelectProps.style), {}, {
      minWidth: width || minWidth
    });
    finalSelectProps.MenuProps = _objectSpread2(_objectSpread2({}, finalSelectProps.MenuProps), {}, {
      className: classNames((_finalSelectProps$Men = finalSelectProps.MenuProps) === null || _finalSelectProps$Men === void 0 ? void 0 : _finalSelectProps$Men.className, "PFormSelect-Menu-Popover")
    });
    $[86] = finalValue_1;
    $[87] = isSelectedPlaceholder;
    $[88] = itemValueLabels;
    $[89] = minWidth;
    $[90] = multiple;
    $[91] = placeholder;
    $[92] = t20;
    $[93] = width;
    $[94] = finalSelectProps;
  } else {
    finalSelectProps = $[94];
  }
  var selectProps = finalSelectProps;
  var t21;
  if ($[99] !== hasEmptyValue || $[100] !== ((_initSlotProps = initSlotProps) === null || _initSlotProps === void 0 ? void 0 : _initSlotProps.inputLabel) || $[101] !== ((_initSlotProps2 = initSlotProps) === null || _initSlotProps2 === void 0 ? void 0 : _initSlotProps2.select) || $[102] !== placeholder || $[103] !== selectProps) {
    var _initSlotProps5, _initSlotProps6;
    t21 = function t21() {
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
    $[99] = hasEmptyValue;
    $[100] = (_initSlotProps5 = initSlotProps) === null || _initSlotProps5 === void 0 ? void 0 : _initSlotProps5.inputLabel;
    $[101] = (_initSlotProps6 = initSlotProps) === null || _initSlotProps6 === void 0 ? void 0 : _initSlotProps6.select;
    $[102] = placeholder;
    $[103] = selectProps;
    $[104] = t21;
  } else {
    t21 = $[104];
  }
  (_initSlotProps7 = initSlotProps) === null || _initSlotProps7 === void 0 || _initSlotProps7.inputLabel;
  (_initSlotProps8 = initSlotProps) === null || _initSlotProps8 === void 0 || _initSlotProps8.select;
  var t22;
  if ($[105] !== t21) {
    t22 = t21();
    $[105] = t21;
    $[106] = t22;
  } else {
    t22 = $[106];
  }
  var slotProps = t22;
  var t23;
  if ($[107] !== formFullWidth || $[108] !== handleAddValueItem || $[109] !== otherFormState) {
    t23 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      fullWidth: formFullWidth,
      labelShrink: true,
      onAddValueItem: handleAddValueItem,
      onValueChange: _temp4$2
    });
    $[107] = formFullWidth;
    $[108] = handleAddValueItem;
    $[109] = otherFormState;
    $[110] = t23;
  } else {
    t23 = $[110];
  }
  var t24 = isSelectedPlaceholder && "is-selected-placeholder";
  var t25;
  if ($[111] !== className || $[112] !== t24) {
    t25 = classNames(className, "PFormSelect", t24);
    $[111] = className;
    $[112] = t24;
    $[113] = t25;
  } else {
    t25 = $[113];
  }
  var t26 = finalValue_1;
  var t27;
  if ($[114] !== items || $[115] !== readOnly) {
    t27 = readOnly || empty(items);
    $[114] = items;
    $[115] = readOnly;
    $[116] = t27;
  } else {
    t27 = $[116];
  }
  var t28;
  if ($[117] !== isSelectedPlaceholder || $[118] !== placeholder) {
    t28 = isSelectedPlaceholder && /*#__PURE__*/React.createElement(MenuItem, {
      key: "$$$EmptyValuePlaceholder$$$",
      value: "",
      disabled: true,
      sx: {
        display: "none"
      }
    }, placeholder);
    $[117] = isSelectedPlaceholder;
    $[118] = placeholder;
    $[119] = t28;
  } else {
    t28 = $[119];
  }
  var t29;
  if ($[120] !== checkbox || $[121] !== items || $[122] !== multiple || $[123] !== value_1) {
    t29 = items && notEmpty(items) ? items.map(function (t30) {
      var itemLabel = t30.label,
        itemValue = t30.value,
        disabled = t30.disabled;
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
    $[120] = checkbox;
    $[121] = items;
    $[122] = multiple;
    $[123] = value_1;
    $[124] = t29;
  } else {
    t29 = $[124];
  }
  var t30;
  if ($[125] !== fullWidth || $[126] !== handleChange || $[127] !== handleRef || $[128] !== handleValue || $[129] !== name || $[130] !== props || $[131] !== slotProps || $[132] !== startAdornment || $[133] !== t25 || $[134] !== t26 || $[135] !== t27 || $[136] !== t28 || $[137] !== t29) {
    t30 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      select: true,
      ref: handleRef,
      name: name,
      className: t25,
      fullWidth: fullWidth
    }, props, {
      startAdornment: startAdornment,
      value: t26,
      clear: false,
      readOnly: t27,
      slotProps: slotProps,
      onChange: handleChange,
      onValue: handleValue
    }), t28, t29);
    $[125] = fullWidth;
    $[126] = handleChange;
    $[127] = handleRef;
    $[128] = handleValue;
    $[129] = name;
    $[130] = props;
    $[131] = slotProps;
    $[132] = startAdornment;
    $[133] = t25;
    $[134] = t26;
    $[135] = t27;
    $[136] = t28;
    $[137] = t29;
    $[138] = t30;
  } else {
    t30 = $[138];
  }
  var t31;
  if ($[139] !== t23 || $[140] !== t30) {
    t31 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t23
    }, t30);
    $[139] = t23;
    $[140] = t30;
    $[141] = t31;
  } else {
    t31 = $[141];
  }
  return t31;
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
  var t3;
  if ($[7] !== onValue) {
    t3 = function t3(value) {
      var newValue = formatBusinessNo(value.replace(/[^0-9]/gi, ""));
      return onValue ? onValue(newValue) : newValue;
    };
    $[7] = onValue;
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
  var t3;
  if ($[9] !== onValue) {
    t3 = function t3(value) {
      var newValue = formatPersonalNo(value.replace(/[^0-9]/gi, ""));
      return onValue ? onValue(newValue) : newValue;
    };
    $[9] = onValue;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var handleValue = t3;
  var t4;
  if ($[11] !== onValidate || $[12] !== skipPersonalNumberValidateCheck) {
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
          return onValidate ? onValidate(value_0) : true;
        } else {
          return "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uAC12\uC785\uB2C8\uB2E4.";
        }
      } else {
        return onValidate ? onValidate(value_0) : true;
      }
    };
    $[11] = onValidate;
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
  var wrapStyle;
  if ($[1] !== formColWithLabel || $[2] !== t2 || $[3] !== t3) {
    wrapStyle = {
      display: t2,
      width: t3
    };
    if (formColWithLabel) {
      wrapStyle.marginTop = -20;
    }
    $[1] = formColWithLabel;
    $[2] = t2;
    $[3] = t3;
    $[4] = wrapStyle;
  } else {
    wrapStyle = $[4];
  }
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
  var $ = c(142);
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
  var inputRef = useRef(null);
  var actionRef = useRef(null);
  var _useResizeDetector = useResizeDetector(),
    labelRef = _useResizeDetector.ref,
    width = _useResizeDetector.width,
    height = _useResizeDetector.height;
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var finalInitUncheckedValue = initUncheckedValue !== null && initUncheckedValue !== void 0 ? initUncheckedValue : 0;
  var _useState9 = useState(finalInitUncheckedValue),
    _useState0 = _slicedToArray(_useState9, 2),
    uncheckedValue = _useState0[0],
    setUncheckedValue = _useState0[1];
  useChanged(finalInitUncheckedValue) && setUncheckedValue(finalInitUncheckedValue);
  var uncheckedValueRef = useAutoUpdateRef(uncheckedValue);
  var finalInitValue = initValue !== null && initValue !== void 0 ? initValue : 0;
  var _useState1 = useState(finalInitValue),
    _useState10 = _slicedToArray(_useState1, 2),
    value = _useState10[0],
    setValue = _useState10[1];
  useChanged(finalInitValue) && setValue(finalInitValue);
  var valueRef = useAutoUpdateRef(value);
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    errorHelperText = _useState12[0],
    setErrorHelperText = _useState12[1];
  var t4;
  if ($[29] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[29] = t4;
  } else {
    t4 = $[29];
  }
  var setErrorErrorHelperText = t4;
  var t5;
  if ($[30] !== onValidate) {
    t5 = function t5(checked) {
      if (onValidate) {
        var onValidateResult = onValidate(checked);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[30] = onValidate;
    $[31] = t5;
  } else {
    t5 = $[31];
  }
  var validate = t5;
  var _useState13 = useState(initChecked),
    _useState14 = _slicedToArray(_useState13, 2),
    checked_0 = _useState14[0],
    setChecked = _useState14[1];
  useChanged(initChecked) && setChecked(initChecked);
  var checkedRef = useAutoUpdateRef(checked_0);
  var t6;
  if ($[32] !== checkedRef || $[33] !== error || $[34] !== name || $[35] !== onChange || $[36] !== onValueChange || $[37] !== validate) {
    t6 = function t6(newChecked, t7) {
      var notFireOnChange = t7 === undefined ? false : t7;
      setChecked(newChecked);
      checkedRef.current = newChecked;
      if (error) {
        validate(newChecked);
      }
      if (!notFireOnChange && onChange) {
        onChange(newChecked);
      }
      onValueChange(name, newChecked);
      return newChecked;
    };
    $[32] = checkedRef;
    $[33] = error;
    $[34] = name;
    $[35] = onChange;
    $[36] = onValueChange;
    $[37] = validate;
    $[38] = t6;
  } else {
    t6 = $[38];
  }
  var updateChecked = t6;
  var t7;
  if ($[39] !== initAction || $[40] !== initInputRef) {
    t7 = function t7() {
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
    $[39] = initAction;
    $[40] = initInputRef;
    $[41] = t7;
  } else {
    t7 = $[41];
  }
  var focus = t7;
  var t8;
  if ($[42] !== name) {
    t8 = function t8() {
      return name;
    };
    $[42] = name;
    $[43] = t8;
  } else {
    t8 = $[43];
  }
  var t9;
  if ($[44] !== initChecked) {
    t9 = function t9() {
      return initChecked;
    };
    $[44] = initChecked;
    $[45] = t9;
  } else {
    t9 = $[45];
  }
  var t10;
  if ($[46] !== initChecked || $[47] !== updateChecked) {
    t10 = function t10() {
      return updateChecked(initChecked);
    };
    $[46] = initChecked;
    $[47] = updateChecked;
    $[48] = t10;
  } else {
    t10 = $[48];
  }
  var t11;
  if ($[49] !== valueRef) {
    t11 = function t11() {
      return valueRef.current;
    };
    $[49] = valueRef;
    $[50] = t11;
  } else {
    t11 = $[50];
  }
  var t12;
  if ($[51] !== dataRef) {
    t12 = function t12() {
      return dataRef.current;
    };
    $[51] = dataRef;
    $[52] = t12;
  } else {
    t12 = $[52];
  }
  var t13;
  if ($[53] !== uncheckedValueRef) {
    t13 = function t13() {
      return uncheckedValueRef.current;
    };
    $[53] = uncheckedValueRef;
    $[54] = t13;
  } else {
    t13 = $[54];
  }
  var t14;
  if ($[55] !== checkedRef) {
    t14 = function t14() {
      return checkedRef.current;
    };
    $[55] = checkedRef;
    $[56] = t14;
  } else {
    t14 = $[56];
  }
  var t15;
  if ($[57] !== exceptValue) {
    t15 = function t15() {
      return !!exceptValue;
    };
    $[57] = exceptValue;
    $[58] = t15;
  } else {
    t15 = $[58];
  }
  var t16;
  if ($[59] !== disabled) {
    t16 = function t16() {
      return !!disabled;
    };
    $[59] = disabled;
    $[60] = t16;
  } else {
    t16 = $[60];
  }
  var t17;
  if ($[61] !== hidden) {
    t17 = function t17() {
      return !!hidden;
    };
    $[61] = hidden;
    $[62] = t17;
  } else {
    t17 = $[62];
  }
  var t18;
  if ($[63] !== checkedRef || $[64] !== validate) {
    t18 = function t18() {
      return validate(checkedRef.current);
    };
    $[63] = checkedRef;
    $[64] = validate;
    $[65] = t18;
  } else {
    t18 = $[65];
  }
  var t19;
  if ($[66] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = function t19(error_1, errorHelperText_1) {
      return setErrorErrorHelperText(error_1, error_1 ? errorHelperText_1 : undefined);
    };
    $[66] = t19;
  } else {
    t19 = $[66];
  }
  var t20;
  if ($[67] !== focus || $[68] !== t10 || $[69] !== t11 || $[70] !== t12 || $[71] !== t13 || $[72] !== t14 || $[73] !== t15 || $[74] !== t16 || $[75] !== t17 || $[76] !== t18 || $[77] !== t8 || $[78] !== t9 || $[79] !== updateChecked) {
    t20 = {
      getType: _temp$q,
      getName: t8,
      getReset: t9,
      reset: t10,
      getValue: t11,
      setValue: setValue,
      getData: t12,
      setData: setData,
      getUncheckedValue: t13,
      setUncheckedValue: setUncheckedValue,
      getChecked: t14,
      setChecked: updateChecked,
      isExceptValue: t15,
      isDisabled: t16,
      setDisabled: setDisabled,
      isHidden: t17,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t18,
      setError: t19
    };
    $[67] = focus;
    $[68] = t10;
    $[69] = t11;
    $[70] = t12;
    $[71] = t13;
    $[72] = t14;
    $[73] = t15;
    $[74] = t16;
    $[75] = t17;
    $[76] = t18;
    $[77] = t8;
    $[78] = t9;
    $[79] = updateChecked;
    $[80] = t20;
  } else {
    t20 = $[80];
  }
  var commands = t20;
  var t21;
  if ($[81] !== id || $[82] !== onAddValueItem) {
    t21 = function t21(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[81] = id;
    $[82] = onAddValueItem;
    $[83] = t21;
  } else {
    t21 = $[83];
  }
  var t22;
  if ($[84] !== id || $[85] !== onRemoveValueItem) {
    t22 = function t22() {
      return onRemoveValueItem(id);
    };
    $[84] = id;
    $[85] = onRemoveValueItem;
    $[86] = t22;
  } else {
    t22 = $[86];
  }
  useForwardRef(ref, commands, t21, t22);
  var t23;
  if ($[87] !== name || $[88] !== onRequestSearchSubmit || $[89] !== onValueChangeByUser || $[90] !== readOnly || $[91] !== updateChecked) {
    t23 = function t23(e, checked_1) {
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
    $[87] = name;
    $[88] = onRequestSearchSubmit;
    $[89] = onValueChangeByUser;
    $[90] = readOnly;
    $[91] = updateChecked;
    $[92] = t23;
  } else {
    t23 = $[92];
  }
  var handleChange = t23;
  var t24;
  if ($[93] !== className) {
    t24 = classNames(className, "PFormValueItem", "PFormCheckbox");
    $[93] = className;
    $[94] = t24;
  } else {
    t24 = $[94];
  }
  var t25 = error ? errorHelperText : helperText;
  var t26;
  if ($[95] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = {
      style: {
        marginLeft: 2
      }
    };
    $[95] = t26;
  } else {
    t26 = $[95];
  }
  var t27 = fullWidth ? "100%" : width || 100;
  var t28;
  if ($[96] !== initStyle || $[97] !== t27) {
    t28 = _objectSpread2({
      width: t27,
      paddingLeft: 3
    }, initStyle);
    $[96] = initStyle;
    $[97] = t27;
    $[98] = t28;
  } else {
    t28 = $[98];
  }
  var t29 = height || (size === "small" ? 35 : 39);
  var t30;
  if ($[99] !== labelRef) {
    t30 = function t30(ref_0) {
      labelRef.current = ref_0;
    };
    $[99] = labelRef;
    $[100] = t30;
  } else {
    t30 = $[100];
  }
  var t31 = initInputRef ? initInputRef : inputRef;
  var t32;
  if ($[101] !== t31) {
    t32 = {
      input: {
        ref: t31
      }
    };
    $[101] = t31;
    $[102] = t32;
  } else {
    t32 = $[102];
  }
  var t33 = initAction ? initAction : actionRef;
  var t34 = error ? "error" : undefined;
  var t35;
  if ($[103] !== t34) {
    t35 = /*#__PURE__*/React.createElement(CheckBox, {
      color: t34
    });
    $[103] = t34;
    $[104] = t35;
  } else {
    t35 = $[104];
  }
  var t36 = error ? "error" : undefined;
  var t37;
  if ($[105] !== t36) {
    t37 = /*#__PURE__*/React.createElement(CheckBoxOutlineBlank, {
      color: t36
    });
    $[105] = t36;
    $[106] = t37;
  } else {
    t37 = $[106];
  }
  var t38 = disabled || readOnly;
  var t39;
  if ($[107] !== checked_0 || $[108] !== color || $[109] !== handleChange || $[110] !== name || $[111] !== props || $[112] !== size || $[113] !== t32 || $[114] !== t33 || $[115] !== t35 || $[116] !== t37 || $[117] !== t38) {
    t39 = /*#__PURE__*/React.createElement(Checkbox, _extends({
      name: name,
      color: color,
      size: size,
      slotProps: t32,
      action: t33,
      checked: checked_0,
      checkedIcon: t35,
      icon: t37,
      onChange: handleChange,
      disabled: t38
    }, props));
    $[107] = checked_0;
    $[108] = color;
    $[109] = handleChange;
    $[110] = name;
    $[111] = props;
    $[112] = size;
    $[113] = t32;
    $[114] = t33;
    $[115] = t35;
    $[116] = t37;
    $[117] = t38;
    $[118] = t39;
  } else {
    t39 = $[118];
  }
  var t40 = error ? "error" : readOnly || disabled ? theme.palette.text.disabled : undefined;
  var t41;
  if ($[119] !== t40 || $[120] !== text) {
    t41 = /*#__PURE__*/React.createElement(Typography, {
      color: t40,
      whiteSpace: "nowrap"
    }, text);
    $[119] = t40;
    $[120] = text;
    $[121] = t41;
  } else {
    t41 = $[121];
  }
  var t42;
  if ($[122] !== t30 || $[123] !== t39 || $[124] !== t41) {
    t42 = /*#__PURE__*/React.createElement(FormControlLabel, {
      ref: t30,
      control: t39,
      label: t41
    });
    $[122] = t30;
    $[123] = t39;
    $[124] = t41;
    $[125] = t42;
  } else {
    t42 = $[125];
  }
  var t43;
  if ($[126] !== color || $[127] !== error || $[128] !== focused || $[129] !== fullWidth || $[130] !== hidden || $[131] !== label || $[132] !== labelIcon || $[133] !== size || $[134] !== sx || $[135] !== t24 || $[136] !== t25 || $[137] !== t28 || $[138] !== t29 || $[139] !== t42 || $[140] !== variant) {
    t43 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t24,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: fullWidth,
      helperText: t25,
      helperTextProps: t26,
      style: t28,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t29,
      controlVerticalCenter: true,
      control: t42
    });
    $[126] = color;
    $[127] = error;
    $[128] = focused;
    $[129] = fullWidth;
    $[130] = hidden;
    $[131] = label;
    $[132] = labelIcon;
    $[133] = size;
    $[134] = sx;
    $[135] = t24;
    $[136] = t25;
    $[137] = t28;
    $[138] = t29;
    $[139] = t42;
    $[140] = variant;
    $[141] = t43;
  } else {
    t43 = $[141];
  }
  return t43;
};
function _temp$q() {
  return "PFormCheckbox";
}var _excluded$g = ["ref", "variant", "size", "color", "focused", "fullWidth", "hidden", "startAdornment", "endAdornment", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "data", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"];
var PADDING_LEFT = 3;
function PFormRadioGroup(t0) {
  var $ = c(205);
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
  var baseRef = useRef(null);
  var firstInputRef = useRef(null);
  var onLoadItemsRef = useAutoUpdateRef(onLoadItems);
  var finalInitFullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var _useState = useState(finalInitFullWidth),
    _useState2 = _slicedToArray(_useState, 2),
    fullWidth = _useState2[0],
    setFullWidth = _useState2[1];
  useChanged(finalInitFullWidth) && setFullWidth(finalInitFullWidth);
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  useChanged(initError) && setError(initError);
  var _useState5 = useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState9 = useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  useChanged(initHidden) && setHidden(initHidden);
  var finalInitWidth = initWidth || "100%";
  var _useState1 = useState(finalInitWidth),
    _useState10 = _slicedToArray(_useState1, 2),
    width = _useState10[0],
    setWidth = _useState10[1];
  useChanged(finalInitWidth) && setWidth(finalInitWidth);
  var _useState11 = useState(initLoading),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  useChanged(initLoading) && setLoading(initLoading);
  var loadingRef = useAutoUpdateRef(loading);
  var _useState13 = useState(initItems),
    _useState14 = _slicedToArray(_useState13, 2),
    items = _useState14[0],
    setItems = _useState14[1];
  useChanged(initItems) && setItems(initItems);
  var itemsRef = useAutoUpdateRef(items);
  var _useState15 = useState(),
    _useState16 = _slicedToArray(_useState15, 2),
    errorHelperText = _useState16[0],
    setErrorHelperText = _useState16[1];
  var _useState17 = useState(!!onLoadItems),
    _useState18 = _slicedToArray(_useState17, 2),
    isOnGetItemLoading = _useState18[0],
    setIsOnGetItemLoading = _useState18[1];
  var _useState19 = useState(),
    _useState20 = _slicedToArray(_useState19, 2),
    formColWrapRect = _useState20[0],
    setFormColWrapRect = _useState20[1];
  var _useState21 = useState(),
    _useState22 = _slicedToArray(_useState21, 2),
    radioGroupNoWrapRect = _useState22[0],
    setRadioGroupNoWrapRect = _useState22[1];
  var _useResizeDetector = useResizeDetector({
      handleWidth: true,
      handleHeight: false,
      onResize: function onResize() {
        var _resizeWidthDetectorR;
        setRadioGroupNoWrapRect((_resizeWidthDetectorR = resizeWidthDetectorRef.current) === null || _resizeWidthDetectorR === void 0 ? void 0 : _resizeWidthDetectorR.getBoundingClientRect());
      }
    }),
    t2 = _useResizeDetector.ref;
  var resizeWidthDetectorRef = t2;
  var _useResizeDetector2 = useResizeDetector(),
    height = _useResizeDetector2.height,
    resizeHeightDetectorRef = _useResizeDetector2.ref;
  var _useResizeDetector3 = useResizeDetector(),
    realHeight = _useResizeDetector3.height,
    resizeRealHeightDetectorRef = _useResizeDetector3.ref;
  var t3;
  if ($[34] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[34] = t3;
  } else {
    t3 = $[34];
  }
  var setErrorErrorHelperText = t3;
  var t4;
  if ($[35] !== onValidate || $[36] !== required) {
    t4 = function t4(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[35] = onValidate;
    $[36] = required;
    $[37] = t4;
  } else {
    t4 = $[37];
  }
  var validate = t4;
  var t5;
  if ($[38] !== onValue) {
    t5 = function t5(value_0) {
      return onValue ? onValue(value_0) : value_0;
    };
    $[38] = onValue;
    $[39] = t5;
  } else {
    t5 = $[39];
  }
  var getFinalValue = t5;
  var _useState23 = useState(initValue),
    _useState24 = _slicedToArray(_useState23, 2),
    value_1 = _useState24[0],
    setValue = _useState24[1];
  useChanged(initValue) && setValue(initValue);
  var valueRef = useAutoUpdateRef(value_1);
  var t6;
  if ($[40] !== error || $[41] !== getFinalValue || $[42] !== name || $[43] !== onChange || $[44] !== onValueChange || $[45] !== validate || $[46] !== valueRef) {
    t6 = function t6(newValue, t7) {
      var skipGetFinalValue = t7 === undefined ? false : t7;
      var finalValue = skipGetFinalValue ? newValue : getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = newValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[40] = error;
    $[41] = getFinalValue;
    $[42] = name;
    $[43] = onChange;
    $[44] = onValueChange;
    $[45] = validate;
    $[46] = valueRef;
    $[47] = t6;
  } else {
    t6 = $[47];
  }
  var updateValue = t6;
  var t7;
  var t8;
  if ($[48] !== onLoadItemsRef) {
    t7 = function t7() {
      if (onLoadItemsRef.current) {
        onLoadItemsRef.current().then(function (items_0) {
          setItems(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    t8 = [onLoadItemsRef];
    $[48] = onLoadItemsRef;
    $[49] = t7;
    $[50] = t8;
  } else {
    t7 = $[49];
    t8 = $[50];
  }
  useEffect(t7, t8);
  var t9;
  if ($[51] !== fullWidth || $[52] !== initWidth || $[53] !== resizeWidthDetectorRef) {
    t9 = function t9() {
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
    $[51] = fullWidth;
    $[52] = initWidth;
    $[53] = resizeWidthDetectorRef;
    $[54] = t9;
  } else {
    t9 = $[54];
  }
  var t10;
  if ($[55] !== fullWidth || $[56] !== initWidth || $[57] !== resizeWidthDetectorRef) {
    t10 = [fullWidth, initWidth, resizeWidthDetectorRef];
    $[55] = fullWidth;
    $[56] = initWidth;
    $[57] = resizeWidthDetectorRef;
    $[58] = t10;
  } else {
    t10 = $[58];
  }
  useEffect(t9, t10);
  var isInitWidthChanged = useChanged(initWidth);
  var isFormFullWidthChanged = useChanged(formFullWidth);
  var isInitFullWidthChanged = useChanged(initFullWidth);
  var isFormColWrapRectChanged = useChanged(formColWrapRect);
  var isRadioGroupNoWrapRectChanged = useChanged(radioGroupNoWrapRect);
  if (isInitWidthChanged || isFormFullWidthChanged || isInitFullWidthChanged || isFormColWrapRectChanged || isRadioGroupNoWrapRectChanged) {
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
  }
  var t11;
  if ($[59] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11() {
      var _firstInputRef$curren;
      (_firstInputRef$curren = firstInputRef.current) === null || _firstInputRef$curren === void 0 || _firstInputRef$curren.focus();
    };
    $[59] = t11;
  } else {
    t11 = $[59];
  }
  var focus = t11;
  var t12;
  if ($[60] !== name) {
    t12 = function t12() {
      return name;
    };
    $[60] = name;
    $[61] = t12;
  } else {
    t12 = $[61];
  }
  var t13;
  if ($[62] !== getFinalValue || $[63] !== initValue) {
    t13 = function t13() {
      return getFinalValue(initValue);
    };
    $[62] = getFinalValue;
    $[63] = initValue;
    $[64] = t13;
  } else {
    t13 = $[64];
  }
  var t14;
  if ($[65] !== initValue || $[66] !== updateValue) {
    t14 = function t14() {
      return updateValue(initValue);
    };
    $[65] = initValue;
    $[66] = updateValue;
    $[67] = t14;
  } else {
    t14 = $[67];
  }
  var t15;
  if ($[68] !== valueRef) {
    t15 = function t15() {
      return valueRef.current;
    };
    $[68] = valueRef;
    $[69] = t15;
  } else {
    t15 = $[69];
  }
  var t16;
  if ($[70] !== dataRef) {
    t16 = function t16() {
      return dataRef.current;
    };
    $[70] = dataRef;
    $[71] = t16;
  } else {
    t16 = $[71];
  }
  var t17;
  if ($[72] !== exceptValue) {
    t17 = function t17() {
      return !!exceptValue;
    };
    $[72] = exceptValue;
    $[73] = t17;
  } else {
    t17 = $[73];
  }
  var t18;
  if ($[74] !== disabled) {
    t18 = function t18() {
      return !!disabled;
    };
    $[74] = disabled;
    $[75] = t18;
  } else {
    t18 = $[75];
  }
  var t19;
  if ($[76] !== hidden) {
    t19 = function t19() {
      return !!hidden;
    };
    $[76] = hidden;
    $[77] = t19;
  } else {
    t19 = $[77];
  }
  var t20;
  if ($[78] !== validate || $[79] !== valueRef) {
    t20 = function t20() {
      return validate(valueRef.current);
    };
    $[78] = validate;
    $[79] = valueRef;
    $[80] = t20;
  } else {
    t20 = $[80];
  }
  var t21;
  if ($[81] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = function t21(error_1, errorHelperText_1) {
      return setErrorErrorHelperText(error_1, error_1 ? errorHelperText_1 : undefined);
    };
    $[81] = t21;
  } else {
    t21 = $[81];
  }
  var t22;
  if ($[82] !== itemsRef) {
    t22 = function t22() {
      return itemsRef.current;
    };
    $[82] = itemsRef;
    $[83] = t22;
  } else {
    t22 = $[83];
  }
  var t23;
  if ($[84] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = function t23(v) {
      return setItems(v);
    };
    $[84] = t23;
  } else {
    t23 = $[84];
  }
  var t24;
  if ($[85] !== loadingRef) {
    t24 = function t24() {
      return !!loadingRef.current;
    };
    $[85] = loadingRef;
    $[86] = t24;
  } else {
    t24 = $[86];
  }
  var t25;
  if ($[87] !== onLoadItems) {
    t25 = function t25() {
      if (onLoadItems) {
        setIsOnGetItemLoading(true);
        onLoadItems().then(function (items_1) {
          setItems(items_1);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[87] = onLoadItems;
    $[88] = t25;
  } else {
    t25 = $[88];
  }
  var t26;
  if ($[89] !== t12 || $[90] !== t13 || $[91] !== t14 || $[92] !== t15 || $[93] !== t16 || $[94] !== t17 || $[95] !== t18 || $[96] !== t19 || $[97] !== t20 || $[98] !== t22 || $[99] !== t24 || $[100] !== t25 || $[101] !== updateValue) {
    t26 = {
      getType: _temp$p,
      getName: t12,
      getReset: t13,
      reset: t14,
      getValue: t15,
      setValue: updateValue,
      getData: t16,
      setData: setData,
      isExceptValue: t17,
      isDisabled: t18,
      setDisabled: setDisabled,
      isHidden: t19,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t20,
      setError: t21,
      getItems: t22,
      setItems: t23,
      getLoading: t24,
      setLoading: setLoading,
      reloadItems: t25
    };
    $[89] = t12;
    $[90] = t13;
    $[91] = t14;
    $[92] = t15;
    $[93] = t16;
    $[94] = t17;
    $[95] = t18;
    $[96] = t19;
    $[97] = t20;
    $[98] = t22;
    $[99] = t24;
    $[100] = t25;
    $[101] = updateValue;
    $[102] = t26;
  } else {
    t26 = $[102];
  }
  var commands = t26;
  var t27;
  if ($[103] !== id || $[104] !== onAddValueItem) {
    t27 = function t27(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[103] = id;
    $[104] = onAddValueItem;
    $[105] = t27;
  } else {
    t27 = $[105];
  }
  var t28;
  if ($[106] !== id || $[107] !== onRemoveValueItem) {
    t28 = function t28() {
      return onRemoveValueItem(id);
    };
    $[106] = id;
    $[107] = onRemoveValueItem;
    $[108] = t28;
  } else {
    t28 = $[108];
  }
  useForwardRef(ref, commands, t27, t28);
  var t29;
  if ($[109] !== getFinalValue || $[110] !== items || $[111] !== name || $[112] !== onRequestSearchSubmit || $[113] !== onValueChangeByUser || $[114] !== readOnly || $[115] !== updateValue || $[116] !== value_1) {
    t29 = function t29(e) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_0 = e.target.value;
        if (items) {
          var item = items.find(function (t30) {
            var value_2 = t30.value;
            return value_2.toString() === finalValue_0;
          });
          if (item) {
            finalValue_0 = item.value;
          }
        }
        finalValue_0 = getFinalValue(finalValue_0);
        if (value_1 !== finalValue_0) {
          updateValue(finalValue_0, true);
          setTimeout(function () {
            onValueChangeByUser(name, finalValue_0);
            onRequestSearchSubmit(name, finalValue_0);
          });
        }
      }
    };
    $[109] = getFinalValue;
    $[110] = items;
    $[111] = name;
    $[112] = onRequestSearchSubmit;
    $[113] = onValueChangeByUser;
    $[114] = readOnly;
    $[115] = updateValue;
    $[116] = value_1;
    $[117] = t29;
  } else {
    t29 = $[117];
  }
  var handleChange = t29;
  var t30 = fullWidth ? "100%" : undefined;
  var t31;
  if ($[118] !== t30) {
    t31 = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: t30
    };
    $[118] = t30;
    $[119] = t31;
  } else {
    t31 = $[119];
  }
  var t32;
  if ($[120] !== startAdornment) {
    t32 = startAdornment && /*#__PURE__*/React.createElement("div", null, startAdornment);
    $[120] = startAdornment;
    $[121] = t32;
  } else {
    t32 = $[121];
  }
  var t33;
  if ($[122] === Symbol["for"]("react.memo_cache_sentinel")) {
    t33 = {
      flex: 1
    };
    $[122] = t33;
  } else {
    t33 = $[122];
  }
  var t34;
  if ($[123] !== color || $[124] !== disabled || $[125] !== error || $[126] !== fullWidth || $[127] !== handleChange || $[128] !== inline || $[129] !== isOnGetItemLoading || $[130] !== items || $[131] !== loading || $[132] !== name || $[133] !== props || $[134] !== readOnly || $[135] !== resizeHeightDetectorRef || $[136] !== resizeWidthDetectorRef || $[137] !== size || $[138] !== theme.palette.error.main || $[139] !== value_1) {
    t34 = !fullWidth && !isOnGetItemLoading && !loading && items && /*#__PURE__*/React.createElement("div", {
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
    }), items.map(function (t35, idx) {
      var value_3 = t35.value,
        label_0 = t35.label,
        itemDisabled = t35.disabled;
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
    })));
    $[123] = color;
    $[124] = disabled;
    $[125] = error;
    $[126] = fullWidth;
    $[127] = handleChange;
    $[128] = inline;
    $[129] = isOnGetItemLoading;
    $[130] = items;
    $[131] = loading;
    $[132] = name;
    $[133] = props;
    $[134] = readOnly;
    $[135] = resizeHeightDetectorRef;
    $[136] = resizeWidthDetectorRef;
    $[137] = size;
    $[138] = theme.palette.error.main;
    $[139] = value_1;
    $[140] = t34;
  } else {
    t34 = $[140];
  }
  var t35;
  if ($[141] !== resizeRealHeightDetectorRef) {
    t35 = function t35(ref_1) {
      resizeRealHeightDetectorRef.current = ref_1;
    };
    $[141] = resizeRealHeightDetectorRef;
    $[142] = t35;
  } else {
    t35 = $[142];
  }
  var t36 = width == null ? "hidden" : undefined;
  var t37 = width == null ? "absolute" : undefined;
  var t38 = nowrap ? "nowrap" : undefined;
  var t39;
  if ($[143] !== t36 || $[144] !== t37 || $[145] !== t38) {
    t39 = {
      display: "inline-flex",
      visibility: t36,
      position: t37,
      flexWrap: t38
    };
    $[143] = t36;
    $[144] = t37;
    $[145] = t38;
    $[146] = t39;
  } else {
    t39 = $[146];
  }
  var t40 = value_1 === undefined ? null : value_1;
  var t41;
  if ($[147] !== color || $[148] !== disabled || $[149] !== error || $[150] !== isOnGetItemLoading || $[151] !== items || $[152] !== loading || $[153] !== readOnly || $[154] !== size || $[155] !== theme.palette.error.main) {
    t41 = isOnGetItemLoading || loading ? /*#__PURE__*/React.createElement("div", {
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
    }))) : /*#__PURE__*/React.createElement(React.Fragment, null, items && items.map(function (t42, idx_0) {
      var value_4 = t42.value,
        label_1 = t42.label,
        itemDisabled_0 = t42.disabled;
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
    }));
    $[147] = color;
    $[148] = disabled;
    $[149] = error;
    $[150] = isOnGetItemLoading;
    $[151] = items;
    $[152] = loading;
    $[153] = readOnly;
    $[154] = size;
    $[155] = theme.palette.error.main;
    $[156] = t41;
  } else {
    t41 = $[156];
  }
  var t42;
  if ($[157] !== handleChange || $[158] !== inline || $[159] !== name || $[160] !== props || $[161] !== t35 || $[162] !== t39 || $[163] !== t40 || $[164] !== t41) {
    t42 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RadioGroup, _extends({}, props, {
      ref: t35,
      style: t39,
      name: name,
      row: inline,
      value: t40,
      onChange: handleChange
    }), t41));
    $[157] = handleChange;
    $[158] = inline;
    $[159] = name;
    $[160] = props;
    $[161] = t35;
    $[162] = t39;
    $[163] = t40;
    $[164] = t41;
    $[165] = t42;
  } else {
    t42 = $[165];
  }
  var t43;
  if ($[166] !== t34 || $[167] !== t42) {
    t43 = /*#__PURE__*/React.createElement("div", {
      style: t33
    }, t34, t42);
    $[166] = t34;
    $[167] = t42;
    $[168] = t43;
  } else {
    t43 = $[168];
  }
  var t44;
  if ($[169] !== endAdornment) {
    t44 = endAdornment && /*#__PURE__*/React.createElement("div", null, endAdornment);
    $[169] = endAdornment;
    $[170] = t44;
  } else {
    t44 = $[170];
  }
  var t45;
  if ($[171] !== t31 || $[172] !== t32 || $[173] !== t43 || $[174] !== t44) {
    t45 = /*#__PURE__*/React.createElement("div", {
      style: t31
    }, t32, t43, t44);
    $[171] = t31;
    $[172] = t32;
    $[173] = t43;
    $[174] = t44;
    $[175] = t45;
  } else {
    t45 = $[175];
  }
  var control = t45;
  var singleHeight = height || (size === "small" ? 35 : 39);
  var isMultiline = singleHeight <= (realHeight !== null && realHeight !== void 0 ? realHeight : 0);
  var t46;
  if ($[176] !== className) {
    t46 = classNames(className, "PFormValueItem", "PFormRadioGroup");
    $[176] = className;
    $[177] = t46;
  } else {
    t46 = $[177];
  }
  var t47 = error ? errorHelperText : helperText;
  var t48 = isMultiline && notEmpty(label) ? 20 : 0;
  var t49;
  if ($[178] !== t48) {
    t49 = {
      style: {
        marginLeft: 2,
        marginTop: t48
      }
    };
    $[178] = t48;
    $[179] = t49;
  } else {
    t49 = $[179];
  }
  var t50;
  if ($[180] !== initStyle || $[181] !== width) {
    t50 = _objectSpread2({
      width: width,
      paddingLeft: PADDING_LEFT
    }, initStyle);
    $[180] = initStyle;
    $[181] = width;
    $[182] = t50;
  } else {
    t50 = $[182];
  }
  var t51 = realHeight ? realHeight : singleHeight;
  var t52 = isMultiline && size === "medium" ? 4 : undefined;
  var t53;
  if ($[183] !== t52) {
    t53 = {
      paddingTop: t52
    };
    $[183] = t52;
    $[184] = t53;
  } else {
    t53 = $[184];
  }
  var t54 = !isMultiline;
  var t55;
  if ($[185] !== color || $[186] !== control || $[187] !== error || $[188] !== focused || $[189] !== fullWidth || $[190] !== hidden || $[191] !== label || $[192] !== labelIcon || $[193] !== required || $[194] !== size || $[195] !== sx || $[196] !== t46 || $[197] !== t47 || $[198] !== t49 || $[199] !== t50 || $[200] !== t51 || $[201] !== t53 || $[202] !== t54 || $[203] !== variant) {
    t55 = /*#__PURE__*/React.createElement(PFormItemBase, {
      focused: focused,
      ref: baseRef,
      className: t46,
      variant: variant,
      size: size,
      color: color,
      labelIcon: labelIcon,
      label: label,
      fullWidth: fullWidth,
      required: required,
      error: error,
      helperText: t47,
      helperTextProps: t49,
      style: t50,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t51,
      controlContainerStyle: t53,
      controlVerticalCenter: t54,
      control: control
    });
    $[185] = color;
    $[186] = control;
    $[187] = error;
    $[188] = focused;
    $[189] = fullWidth;
    $[190] = hidden;
    $[191] = label;
    $[192] = labelIcon;
    $[193] = required;
    $[194] = size;
    $[195] = sx;
    $[196] = t46;
    $[197] = t47;
    $[198] = t49;
    $[199] = t50;
    $[200] = t51;
    $[201] = t53;
    $[202] = t54;
    $[203] = variant;
    $[204] = t55;
  } else {
    t55 = $[204];
  }
  return t55;
}
function _temp$p() {
  return "PFormRadioGroup";
}insertStyle(".PFormToggleButtonGroup.loading .PFormItemBase-Control-wrap .PFormItemBase-Control{align-items:center !important}.PFormToggleButtonGroup .ToggleButton{display:inline-flex;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-items:center}.PFormToggleButtonGroup .ToggleButton .__label__{height:0;line-height:0 !important;overflow:visible !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton,.PFormToggleButtonGroup.type-radio .ToggleButton{padding-left:3px;padding-right:5px;border:0 !important;margin-left:0 !important;justify-content:flex-start;display:flex;background-color:rgba(0,0,0,0) !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton:not(:last-child),.PFormToggleButtonGroup.type-radio .ToggleButton:not(:last-child){margin-right:5px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-unchecked__{margin-right:3px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__{display:none}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected.Mui-disabled,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected.Mui-disabled{opacity:.5}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-checked__{display:block}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-unchecked__{display:none}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}");function PFormToggleButtonGroup(t0) {
  var $ = c(192);
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
  var isMultipleChanged = useChanged(multiple);
  var isNotAllowEmptyValueChanged = useChanged(notAllowEmptyValue);
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
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  useChanged(initError) && setError(initError);
  var _useState5 = useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState9 = useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState1 = useState(initLoading),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  useChanged(initLoading) && setLoading(initLoading);
  var loadingRef = useAutoUpdateRef(loading);
  var _useState11 = useState(initItems),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    _setItems = _useState12[1];
  useChanged(initItems) && _setItems(initItems);
  var itemsRef = useAutoUpdateRef(items);
  var t7;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7(newItems) {
      _setItems(newItems);
    };
    $[4] = t7;
  } else {
    t7 = $[4];
  }
  var setItems = t7;
  var _useState13 = useState(!!onLoadItems),
    _useState14 = _slicedToArray(_useState13, 2),
    isOnGetItemLoading = _useState14[0],
    setIsOnGetItemLoading = _useState14[1];
  var _useState15 = useState(),
    _useState16 = _slicedToArray(_useState15, 2),
    errorHelperText = _useState16[0],
    setErrorHelperText = _useState16[1];
  var t8;
  if ($[5] !== initData) {
    t8 = [initData];
    $[5] = initData;
    $[6] = t8;
  } else {
    t8 = $[6];
  }
  useEffect(_temp$o, t8);
  var t9;
  if (items) {
    var _t;
    if ($[7] !== items) {
      _t = items.reduce(_temp2$3, {});
      $[7] = items;
      $[8] = _t;
    } else {
      _t = $[8];
    }
    t9 = _t;
  } else {
    var _t2;
    if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t2 = {};
      $[9] = _t2;
    } else {
      _t2 = $[9];
    }
    t9 = _t2;
  }
  var itemsValues = t9;
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
  var t10;
  if ($[10] !== finalWidth || $[11] !== initStyle) {
    t10 = _objectSpread2({
      width: finalWidth
    }, initStyle);
    $[10] = finalWidth;
    $[11] = initStyle;
    $[12] = t10;
  } else {
    t10 = $[12];
  }
  var style = t10;
  var t11;
  if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[13] = t11;
  } else {
    t11 = $[13];
  }
  var setErrorErrorHelperText = t11;
  var t12;
  if ($[14] !== onValidate || $[15] !== required) {
    t12 = function t12(value_0) {
      if (required && empty(value_0)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidate) {
        var onValidateResult = onValidate(value_0);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[14] = onValidate;
    $[15] = required;
    $[16] = t12;
  } else {
    t12 = $[16];
  }
  var validate = t12;
  var t13;
  if ($[17] !== formValueSeparator || $[18] !== itemsValues || $[19] !== multiple || $[20] !== onValue) {
    t13 = function t13(value_1) {
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
    $[17] = formValueSeparator;
    $[18] = itemsValues;
    $[19] = multiple;
    $[20] = onValue;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  var getFinalValue = t13;
  var t14;
  if ($[22] !== getFinalValue || $[23] !== initValue) {
    t14 = getFinalValue(initValue);
    $[22] = getFinalValue;
    $[23] = initValue;
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  var _useState17 = useState(t14),
    _useState18 = _slicedToArray(_useState17, 2),
    value_2 = _useState18[0],
    setValue = _useState18[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_2);
  var t15;
  if ($[25] !== error || $[26] !== getFinalValue || $[27] !== name || $[28] !== onChange || $[29] !== onValueChange || $[30] !== validate) {
    t15 = function t15(newValue, t16) {
      var skipGetFinalValue = t16 === undefined ? false : t16;
      var finalValue_0 = skipGetFinalValue ? newValue : getFinalValue(newValue);
      setValue(finalValue_0);
      if (error) {
        validate(finalValue_0);
      }
      if (onChange) {
        onChange(finalValue_0);
      }
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[25] = error;
    $[26] = getFinalValue;
    $[27] = name;
    $[28] = onChange;
    $[29] = onValueChange;
    $[30] = validate;
    $[31] = t15;
  } else {
    t15 = $[31];
  }
  var updateValue = t15;
  var updateValueRef = useAutoUpdateRef(updateValue);
  var t16;
  if ($[32] !== updateValueRef || $[33] !== valueRef) {
    t16 = function t16() {
      updateValueRef.current(valueRef.current);
    };
    $[32] = updateValueRef;
    $[33] = valueRef;
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  var t17;
  if ($[35] !== multiple || $[36] !== updateValueRef || $[37] !== valueRef) {
    t17 = [multiple, updateValueRef, valueRef];
    $[35] = multiple;
    $[36] = updateValueRef;
    $[37] = valueRef;
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  useEffect(t16, t17);
  var firstOnLoadItems = useRef(onLoadItems);
  var firstSetItems = useRef(setItems);
  var t18;
  var t19;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18() {
      if (firstOnLoadItems.current) {
        firstOnLoadItems.current().then(function (items_0) {
          firstSetItems.current(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    t19 = [];
    $[39] = t18;
    $[40] = t19;
  } else {
    t18 = $[39];
    t19 = $[40];
  }
  useEffect(t18, t19);
  var isItemsChanged = useChanged(items);
  var isValueChanged = useChanged(value_2);
  if (isMultipleChanged || isItemsChanged || isValueChanged || isNotAllowEmptyValueChanged) {
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
  }
  var t20;
  if ($[41] !== refForButtonResizeHeightDetect) {
    t20 = function t20() {
      var _refForButtonResizeHe;
      (_refForButtonResizeHe = refForButtonResizeHeightDetect.current) === null || _refForButtonResizeHe === void 0 || _refForButtonResizeHe.focus();
    };
    $[41] = refForButtonResizeHeightDetect;
    $[42] = t20;
  } else {
    t20 = $[42];
  }
  var focus = t20;
  var t21;
  if ($[43] !== name) {
    t21 = function t21() {
      return name;
    };
    $[43] = name;
    $[44] = t21;
  } else {
    t21 = $[44];
  }
  var t22;
  if ($[45] !== getFinalValue || $[46] !== initValue) {
    t22 = function t22() {
      return getFinalValue(initValue);
    };
    $[45] = getFinalValue;
    $[46] = initValue;
    $[47] = t22;
  } else {
    t22 = $[47];
  }
  var t23;
  if ($[48] !== initValue || $[49] !== updateValue) {
    t23 = function t23() {
      return updateValue(initValue);
    };
    $[48] = initValue;
    $[49] = updateValue;
    $[50] = t23;
  } else {
    t23 = $[50];
  }
  var t24;
  if ($[51] !== valueRef) {
    t24 = function t24() {
      return valueRef.current;
    };
    $[51] = valueRef;
    $[52] = t24;
  } else {
    t24 = $[52];
  }
  var t25;
  if ($[53] !== updateValue || $[54] !== valueRef) {
    t25 = function t25(v_0) {
      valueRef.current = updateValue(v_0);
    };
    $[53] = updateValue;
    $[54] = valueRef;
    $[55] = t25;
  } else {
    t25 = $[55];
  }
  var t26;
  if ($[56] !== dataRef) {
    t26 = function t26() {
      return dataRef.current;
    };
    $[56] = dataRef;
    $[57] = t26;
  } else {
    t26 = $[57];
  }
  var t27;
  if ($[58] !== exceptValue) {
    t27 = function t27() {
      return !!exceptValue;
    };
    $[58] = exceptValue;
    $[59] = t27;
  } else {
    t27 = $[59];
  }
  var t28;
  if ($[60] !== disabled) {
    t28 = function t28() {
      return !!disabled;
    };
    $[60] = disabled;
    $[61] = t28;
  } else {
    t28 = $[61];
  }
  var t29;
  if ($[62] !== hidden) {
    t29 = function t29() {
      return !!hidden;
    };
    $[62] = hidden;
    $[63] = t29;
  } else {
    t29 = $[63];
  }
  var t30;
  if ($[64] !== validate || $[65] !== valueRef) {
    t30 = function t30() {
      return validate(valueRef.current);
    };
    $[64] = validate;
    $[65] = valueRef;
    $[66] = t30;
  } else {
    t30 = $[66];
  }
  var t31;
  if ($[67] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[67] = t31;
  } else {
    t31 = $[67];
  }
  var t32;
  if ($[68] !== formValueSeparator) {
    t32 = function t32() {
      return formValueSeparator;
    };
    $[68] = formValueSeparator;
    $[69] = t32;
  } else {
    t32 = $[69];
  }
  var t33;
  if ($[70] !== formValueSort) {
    t33 = function t33() {
      return !!formValueSort;
    };
    $[70] = formValueSort;
    $[71] = t33;
  } else {
    t33 = $[71];
  }
  var t34;
  if ($[72] !== itemsRef) {
    t34 = function t34() {
      return itemsRef.current;
    };
    $[72] = itemsRef;
    $[73] = t34;
  } else {
    t34 = $[73];
  }
  var t35;
  if ($[74] !== multiple) {
    t35 = function t35() {
      return !!multiple;
    };
    $[74] = multiple;
    $[75] = t35;
  } else {
    t35 = $[75];
  }
  var t36;
  if ($[76] !== loadingRef) {
    t36 = function t36() {
      return !!loadingRef.current;
    };
    $[76] = loadingRef;
    $[77] = t36;
  } else {
    t36 = $[77];
  }
  var t37;
  if ($[78] !== onLoadItems) {
    t37 = function t37() {
      if (onLoadItems) {
        setIsOnGetItemLoading(true);
        onLoadItems().then(function (items_1) {
          setItems(items_1);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[78] = onLoadItems;
    $[79] = t37;
  } else {
    t37 = $[79];
  }
  var t38;
  if ($[80] !== focus || $[81] !== t21 || $[82] !== t22 || $[83] !== t23 || $[84] !== t24 || $[85] !== t25 || $[86] !== t26 || $[87] !== t27 || $[88] !== t28 || $[89] !== t29 || $[90] !== t30 || $[91] !== t32 || $[92] !== t33 || $[93] !== t34 || $[94] !== t35 || $[95] !== t36 || $[96] !== t37) {
    t38 = {
      getType: _temp3$1,
      getName: t21,
      getReset: t22,
      reset: t23,
      getValue: t24,
      setValue: t25,
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
      setError: t31,
      getFormValueSeparator: t32,
      isFormValueSort: t33,
      getItems: t34,
      setItems: setItems,
      isMultiple: t35,
      getLoading: t36,
      setLoading: setLoading,
      reloadItems: t37
    };
    $[80] = focus;
    $[81] = t21;
    $[82] = t22;
    $[83] = t23;
    $[84] = t24;
    $[85] = t25;
    $[86] = t26;
    $[87] = t27;
    $[88] = t28;
    $[89] = t29;
    $[90] = t30;
    $[91] = t32;
    $[92] = t33;
    $[93] = t34;
    $[94] = t35;
    $[95] = t36;
    $[96] = t37;
    $[97] = t38;
  } else {
    t38 = $[97];
  }
  var commands = t38;
  var t39;
  if ($[98] !== id || $[99] !== onAddValueItem) {
    t39 = function t39(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[98] = id;
    $[99] = onAddValueItem;
    $[100] = t39;
  } else {
    t39 = $[100];
  }
  var t40;
  if ($[101] !== id || $[102] !== onRemoveValueItem) {
    t40 = function t40() {
      return onRemoveValueItem(id);
    };
    $[101] = id;
    $[102] = onRemoveValueItem;
    $[103] = t40;
  } else {
    t40 = $[103];
  }
  useForwardRef(ref, commands, t39, t40);
  var t41;
  if ($[104] !== getFinalValue || $[105] !== multiple || $[106] !== name || $[107] !== notAllowEmptyValue || $[108] !== onRequestSearchSubmit || $[109] !== onValueChangeByUser || $[110] !== readOnly || $[111] !== updateValue || $[112] !== valueRef || $[113] !== value_2) {
    t41 = function t41(e, newValue_0) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_1 = newValue_0;
        if (notAllowEmptyValue) {
          if (multiple) {
            if (empty(finalValue_1)) {
              if (Array.isArray(value_2) && value_2.length > 0) {
                finalValue_1 = [value_2[0]];
              }
            }
          } else {
            if (finalValue_1 == null) {
              finalValue_1 = value_2;
            }
          }
        }
        finalValue_1 = getFinalValue(finalValue_1);
        if (!equal(value_2, finalValue_1)) {
          valueRef.current = updateValue(finalValue_1, true);
          setTimeout(function () {
            onValueChangeByUser(name, finalValue_1);
            onRequestSearchSubmit(name, finalValue_1);
          });
        }
      }
    };
    $[104] = getFinalValue;
    $[105] = multiple;
    $[106] = name;
    $[107] = notAllowEmptyValue;
    $[108] = onRequestSearchSubmit;
    $[109] = onValueChangeByUser;
    $[110] = readOnly;
    $[111] = updateValue;
    $[112] = valueRef;
    $[113] = value_2;
    $[114] = t41;
  } else {
    t41 = $[114];
  }
  var handleChange = t41;
  var formControlBaseProps;
  if ($[115] !== focused) {
    formControlBaseProps = {};
    if (focused) {
      formControlBaseProps.focused = true;
    }
    $[115] = focused;
    $[116] = formControlBaseProps;
  } else {
    formControlBaseProps = $[116];
  }
  var finalItemWidth = undefined;
  if (type === "button" && !fullWidth) {
    finalItemWidth = "auto";
  } else {
    if (!fullWidth || type === "radio" || type === "checkbox") {
      finalItemWidth = itemWidth || "auto";
    }
  }
  var t42 = error ? theme.palette.error.main : "";
  var t43 = error ? theme.palette.error.main : "";
  var t44;
  if ($[117] !== finalItemWidth || $[118] !== t42 || $[119] !== t43) {
    t44 = {
      borderColor: t42,
      color: t43,
      width: finalItemWidth
    };
    $[117] = finalItemWidth;
    $[118] = t42;
    $[119] = t43;
    $[120] = t44;
  } else {
    t44 = $[120];
  }
  var buttonStyle = t44;
  var t45;
  if ($[121] !== buttonStyle || $[122] !== color || $[123] !== disabled || $[124] !== initFocused || $[125] !== items || $[126] !== readOnly || $[127] !== refForButtonResizeHeightDetect || $[128] !== size || $[129] !== type) {
    t45 = items && items.map(function (t46, idx) {
      var value_3 = t46.value,
        label_0 = t46.label,
        itemDisabled = t46.disabled,
        itemColor = t46.color;
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
    $[121] = buttonStyle;
    $[122] = color;
    $[123] = disabled;
    $[124] = initFocused;
    $[125] = items;
    $[126] = readOnly;
    $[127] = refForButtonResizeHeightDetect;
    $[128] = size;
    $[129] = type;
    $[130] = t45;
  } else {
    t45 = $[130];
  }
  var buttons = t45;
  var newRealValue = value_2 == null ? null : value_2;
  if (items && value_2 != null) {
    if (Array.isArray(newRealValue)) {
      if ($[131] !== items || $[132] !== multiple || $[133] !== newRealValue) {
        var stringRealValues = newRealValue.map(_temp4$1);
        if (multiple) {
          var foundItems = items.filter(function (v_2) {
            return stringRealValues.includes(v_2.value.toString());
          });
          newRealValue = foundItems.map(_temp5$1);
        }
        $[131] = items;
        $[132] = multiple;
        $[133] = newRealValue;
        $[134] = newRealValue;
      } else {
        newRealValue = $[134];
      }
    } else {
      if (newRealValue != null) {
        var _t3;
        if ($[135] !== newRealValue) {
          _t3 = newRealValue.toString();
          $[135] = newRealValue;
          $[136] = _t3;
        } else {
          _t3 = $[136];
        }
        var stringRealValue = _t3;
        var _t4;
        if ($[137] !== items || $[138] !== stringRealValue) {
          var _t5;
          if ($[140] !== stringRealValue) {
            _t5 = function _t5(v_4) {
              return v_4.value.toString() === stringRealValue;
            };
            $[140] = stringRealValue;
            $[141] = _t5;
          } else {
            _t5 = $[141];
          }
          _t4 = items.find(_t5);
          $[137] = items;
          $[138] = stringRealValue;
          $[139] = _t4;
        } else {
          _t4 = $[139];
        }
        var foundItem = _t4;
        if (foundItem) {
          newRealValue = foundItem.value;
        }
      }
    }
  }
  var realValue_1 = newRealValue;
  var t46;
  if ($[142] !== buttons || $[143] !== disabled || $[144] !== endAdornment || $[145] !== formColWidth || $[146] !== fullWidth || $[147] !== handleChange || $[148] !== isOnGetItemLoading || $[149] !== items || $[150] !== label || $[151] !== labelId || $[152] !== loading || $[153] !== multiple || $[154] !== readOnly || $[155] !== realValue_1 || $[156] !== refForButtonResizeHeightDetect || $[157] !== refForButtonsResizeHeightDetect || $[158] !== refForLoadingResizeHeightDetect || $[159] !== refForResizeWidthDetect || $[160] !== size || $[161] !== startAdornment || $[162] !== type || $[163] !== width) {
    t46 = isOnGetItemLoading || loading ? /*#__PURE__*/React.createElement("div", {
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
    $[142] = buttons;
    $[143] = disabled;
    $[144] = endAdornment;
    $[145] = formColWidth;
    $[146] = fullWidth;
    $[147] = handleChange;
    $[148] = isOnGetItemLoading;
    $[149] = items;
    $[150] = label;
    $[151] = labelId;
    $[152] = loading;
    $[153] = multiple;
    $[154] = readOnly;
    $[155] = realValue_1;
    $[156] = refForButtonResizeHeightDetect;
    $[157] = refForButtonsResizeHeightDetect;
    $[158] = refForLoadingResizeHeightDetect;
    $[159] = refForResizeWidthDetect;
    $[160] = size;
    $[161] = startAdornment;
    $[162] = type;
    $[163] = width;
    $[164] = t46;
  } else {
    t46 = $[164];
  }
  var control = t46;
  var controlHeight = height || 0;
  var isMultiline = controlHeight <= (realHeight !== null && realHeight !== void 0 ? realHeight : 0);
  var t47 = "variant-".concat(variant);
  var t48 = "size-".concat(size);
  var t49 = !!label && "with-label";
  var t50 = !!fullWidth && "full-width";
  var t51 = "type-".concat(type);
  var t52 = (isOnGetItemLoading || loading) && "loading";
  var t53;
  if ($[165] !== className || $[166] !== t47 || $[167] !== t48 || $[168] !== t49 || $[169] !== t50 || $[170] !== t51 || $[171] !== t52) {
    t53 = classNames(className, "PFormValueItem", "PFormToggleButtonGroup", t47, t48, t49, t50, t51, t52);
    $[165] = className;
    $[166] = t47;
    $[167] = t48;
    $[168] = t49;
    $[169] = t50;
    $[170] = t51;
    $[171] = t52;
    $[172] = t53;
  } else {
    t53 = $[172];
  }
  var t54 = error ? errorHelperText : helperText;
  var t55;
  if ($[173] === Symbol["for"]("react.memo_cache_sentinel")) {
    t55 = {
      style: {
        marginLeft: 2
      }
    };
    $[173] = t55;
  } else {
    t55 = $[173];
  }
  var t56 = realHeight ? realHeight + (isMultiline ? 13 : 0) : controlHeight;
  var t57 = isMultiline ? false : isOnGetItemLoading || loading;
  var t58;
  if ($[174] !== color || $[175] !== control || $[176] !== error || $[177] !== formControlBaseProps || $[178] !== fullWidth || $[179] !== hidden || $[180] !== label || $[181] !== labelIcon || $[182] !== required || $[183] !== size || $[184] !== style || $[185] !== sx || $[186] !== t53 || $[187] !== t54 || $[188] !== t56 || $[189] !== t57 || $[190] !== variant) {
    t58 = /*#__PURE__*/React.createElement(PFormItemBase, _extends({}, formControlBaseProps, {
      className: t53,
      variant: variant,
      size: size,
      color: color,
      labelIcon: labelIcon,
      label: label,
      required: required,
      fullWidth: fullWidth,
      error: error,
      helperText: t54,
      helperTextProps: t55,
      style: style,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t56,
      controlVerticalCenter: t57,
      control: control
    }));
    $[174] = color;
    $[175] = control;
    $[176] = error;
    $[177] = formControlBaseProps;
    $[178] = fullWidth;
    $[179] = hidden;
    $[180] = label;
    $[181] = labelIcon;
    $[182] = required;
    $[183] = size;
    $[184] = style;
    $[185] = sx;
    $[186] = t53;
    $[187] = t54;
    $[188] = t56;
    $[189] = t57;
    $[190] = variant;
    $[191] = t58;
  } else {
    t58 = $[191];
  }
  return t58;
}
function _temp5$1(v_3) {
  return v_3.value;
}
function _temp4$1(v_1) {
  return v_1.toString();
}
function _temp3$1() {
  return "PFormToggleButtonGroup";
}
function _temp2$3(res, t0) {
  var value = t0.value;
  res["".concat(value)] = value;
  return res;
}
function _temp$o() {}var PFormRating = function PFormRating(t0) {
  var $ = c(109);
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
  var inputRef = useRef(undefined);
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState = useState(finalInitFocused),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  useChanged(finalInitFocused) && setFocused(finalInitFocused);
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  useChanged(initError) && setError(initError);
  var _useState5 = useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState9 = useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState1 = useState(),
    _useState10 = _slicedToArray(_useState1, 2),
    errorHelperText = _useState10[0],
    setErrorHelperText = _useState10[1];
  var _useResizeDetector = useResizeDetector(),
    ratingRef = _useResizeDetector.ref,
    width = _useResizeDetector.width,
    height = _useResizeDetector.height;
  var t3;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  var setErrorErrorHelperText = t3;
  var t4;
  if ($[1] !== onValidate || $[2] !== required) {
    t4 = function t4(value) {
      if (required && (empty(value) || value === 0)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[1] = onValidate;
    $[2] = required;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  var validate = t4;
  var t5;
  if ($[4] !== onValue) {
    t5 = function t5(value_0) {
      var finalValue = value_0 || 0;
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[4] = onValue;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var getFinalValue = t5;
  var t6;
  if ($[6] !== getFinalValue || $[7] !== initValue) {
    t6 = getFinalValue(initValue);
    $[6] = getFinalValue;
    $[7] = initValue;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  var _useState11 = useState(t6),
    _useState12 = _slicedToArray(_useState11, 2),
    value_1 = _useState12[0],
    setValue = _useState12[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_1);
  var t7;
  if ($[9] !== error || $[10] !== getFinalValue || $[11] !== name || $[12] !== onChange || $[13] !== onValueChange || $[14] !== validate || $[15] !== valueRef) {
    t7 = function t7(newValue) {
      var finalValue_0 = getFinalValue(newValue);
      setValue(finalValue_0);
      valueRef.current = finalValue_0;
      if (error) {
        validate(finalValue_0);
      }
      if (onChange) {
        onChange(finalValue_0);
      }
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[9] = error;
    $[10] = getFinalValue;
    $[11] = name;
    $[12] = onChange;
    $[13] = onValueChange;
    $[14] = validate;
    $[15] = valueRef;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  var updateValue = t7;
  var t8;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  var focus = t8;
  var t9;
  if ($[18] !== name) {
    t9 = function t9() {
      return name;
    };
    $[18] = name;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  var t10;
  if ($[20] !== getFinalValue || $[21] !== initValue) {
    t10 = function t10() {
      return getFinalValue(initValue);
    };
    $[20] = getFinalValue;
    $[21] = initValue;
    $[22] = t10;
  } else {
    t10 = $[22];
  }
  var t11;
  if ($[23] !== initValue || $[24] !== updateValue) {
    t11 = function t11() {
      return updateValue(initValue);
    };
    $[23] = initValue;
    $[24] = updateValue;
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  var t12;
  if ($[26] !== valueRef) {
    t12 = function t12() {
      return valueRef.current;
    };
    $[26] = valueRef;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  var t13;
  if ($[28] !== dataRef) {
    t13 = function t13() {
      return dataRef.current;
    };
    $[28] = dataRef;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  var t14;
  if ($[30] !== exceptValue) {
    t14 = function t14() {
      return !!exceptValue;
    };
    $[30] = exceptValue;
    $[31] = t14;
  } else {
    t14 = $[31];
  }
  var t15;
  if ($[32] !== disabled) {
    t15 = function t15() {
      return !!disabled;
    };
    $[32] = disabled;
    $[33] = t15;
  } else {
    t15 = $[33];
  }
  var t16;
  if ($[34] !== hidden) {
    t16 = function t16() {
      return !!hidden;
    };
    $[34] = hidden;
    $[35] = t16;
  } else {
    t16 = $[35];
  }
  var t17;
  if ($[36] !== validate || $[37] !== valueRef) {
    t17 = function t17() {
      return validate(valueRef.current);
    };
    $[36] = validate;
    $[37] = valueRef;
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  var t18;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18(error_1, errorHelperText_1) {
      return setErrorErrorHelperText(error_1, error_1 ? errorHelperText_1 : undefined);
    };
    $[39] = t18;
  } else {
    t18 = $[39];
  }
  var t19;
  if ($[40] !== t10 || $[41] !== t11 || $[42] !== t12 || $[43] !== t13 || $[44] !== t14 || $[45] !== t15 || $[46] !== t16 || $[47] !== t17 || $[48] !== t9 || $[49] !== updateValue) {
    t19 = {
      getType: _temp$n,
      getName: t9,
      getReset: t10,
      reset: t11,
      getValue: t12,
      setValue: updateValue,
      getData: t13,
      setData: setData,
      isExceptValue: t14,
      isDisabled: t15,
      setDisabled: setDisabled,
      isHidden: t16,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t17,
      setError: t18
    };
    $[40] = t10;
    $[41] = t11;
    $[42] = t12;
    $[43] = t13;
    $[44] = t14;
    $[45] = t15;
    $[46] = t16;
    $[47] = t17;
    $[48] = t9;
    $[49] = updateValue;
    $[50] = t19;
  } else {
    t19 = $[50];
  }
  var commands = t19;
  var t20;
  if ($[51] !== id || $[52] !== onAddValueItem) {
    t20 = function t20(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[51] = id;
    $[52] = onAddValueItem;
    $[53] = t20;
  } else {
    t20 = $[53];
  }
  var t21;
  if ($[54] !== id || $[55] !== onRemoveValueItem) {
    t21 = function t21() {
      return onRemoveValueItem(id);
    };
    $[54] = id;
    $[55] = onRemoveValueItem;
    $[56] = t21;
  } else {
    t21 = $[56];
  }
  useForwardRef(ref, commands, t20, t21);
  var t22;
  if ($[57] !== name || $[58] !== onRequestSearchSubmit || $[59] !== onValueChangeByUser || $[60] !== readOnly || $[61] !== updateValue) {
    t22 = function t22(e, value_2) {
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
    $[57] = name;
    $[58] = onRequestSearchSubmit;
    $[59] = onValueChangeByUser;
    $[60] = readOnly;
    $[61] = updateValue;
    $[62] = t22;
  } else {
    t22 = $[62];
  }
  var handleChange = t22;
  var t23;
  if ($[63] !== className) {
    t23 = classNames(className, "PFormValueItem", "PFormRating");
    $[63] = className;
    $[64] = t23;
  } else {
    t23 = $[64];
  }
  var t24 = error ? errorHelperText : helperText;
  var t25;
  if ($[65] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = {
      style: {
        marginLeft: 5
      }
    };
    $[65] = t25;
  } else {
    t25 = $[65];
  }
  var t26 = width || 100;
  var t27;
  if ($[66] !== initStyle || $[67] !== t26) {
    t27 = _objectSpread2({
      width: t26
    }, initStyle);
    $[66] = initStyle;
    $[67] = t26;
    $[68] = t27;
  } else {
    t27 = $[68];
  }
  var t28 = height || (size === "small" ? 21 : 26);
  var t29;
  if ($[69] !== ratingRef) {
    t29 = function t29(ref_0) {
      ratingRef.current = ref_0;
      inputRef.current = (ref_0 === null || ref_0 === void 0 ? void 0 : ref_0.querySelector("input")) || undefined;
    };
    $[69] = ratingRef;
    $[70] = t29;
  } else {
    t29 = $[70];
  }
  var t30 = size === "medium" ? "large" : "medium";
  var t31 = disabled || readOnly;
  var t32 = icon ? icon : "Star";
  var t33;
  if ($[71] !== color || $[72] !== t32) {
    t33 = /*#__PURE__*/React.createElement(PIcon, {
      color: color,
      size: "inherit"
    }, t32);
    $[71] = color;
    $[72] = t32;
    $[73] = t33;
  } else {
    t33 = $[73];
  }
  var t34 = emptyIcon ? emptyIcon : "StarBorder";
  var t35;
  if ($[74] !== t34) {
    t35 = /*#__PURE__*/React.createElement(PIcon, {
      size: "inherit"
    }, t34);
    $[74] = t34;
    $[75] = t35;
  } else {
    t35 = $[75];
  }
  var t36;
  var t37;
  if ($[76] !== initFocused) {
    t36 = function t36() {
      return setFocused(initFocused || true);
    };
    t37 = function t37() {
      return setFocused(initFocused || false);
    };
    $[76] = initFocused;
    $[77] = t36;
    $[78] = t37;
  } else {
    t36 = $[77];
    t37 = $[78];
  }
  var t38;
  if ($[79] !== handleChange || $[80] !== highlightSelectedOnly || $[81] !== max || $[82] !== name || $[83] !== precision || $[84] !== t29 || $[85] !== t30 || $[86] !== t31 || $[87] !== t33 || $[88] !== t35 || $[89] !== t36 || $[90] !== t37 || $[91] !== value_1) {
    t38 = /*#__PURE__*/React.createElement(Rating, {
      ref: t29,
      size: t30,
      name: name,
      precision: precision,
      highlightSelectedOnly: highlightSelectedOnly,
      value: value_1,
      disabled: t31,
      max: max,
      icon: t33,
      emptyIcon: t35,
      onChange: handleChange,
      onFocus: t36,
      onBlur: t37
    });
    $[79] = handleChange;
    $[80] = highlightSelectedOnly;
    $[81] = max;
    $[82] = name;
    $[83] = precision;
    $[84] = t29;
    $[85] = t30;
    $[86] = t31;
    $[87] = t33;
    $[88] = t35;
    $[89] = t36;
    $[90] = t37;
    $[91] = value_1;
    $[92] = t38;
  } else {
    t38 = $[92];
  }
  var t39;
  if ($[93] !== color || $[94] !== error || $[95] !== focused || $[96] !== hidden || $[97] !== label || $[98] !== labelIcon || $[99] !== required || $[100] !== size || $[101] !== sx || $[102] !== t23 || $[103] !== t24 || $[104] !== t27 || $[105] !== t28 || $[106] !== t38 || $[107] !== variant) {
    t39 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t23,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: false,
      required: required,
      helperText: t24,
      helperTextProps: t25,
      style: t27,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t28,
      controlVerticalCenter: true,
      control: t38
    });
    $[93] = color;
    $[94] = error;
    $[95] = focused;
    $[96] = hidden;
    $[97] = label;
    $[98] = labelIcon;
    $[99] = required;
    $[100] = size;
    $[101] = sx;
    $[102] = t23;
    $[103] = t24;
    $[104] = t27;
    $[105] = t28;
    $[106] = t38;
    $[107] = variant;
    $[108] = t39;
  } else {
    t39 = $[108];
  }
  return t39;
};
function _temp$n() {
  return "PFormRating";
}var getFinalValue$8 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormTextEditor.initializing textarea{display:none}.PFormTextEditor.error .tox-tinymce{border-color:#d32f2f}.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item{padding-right:20px !important}.tox-notifications-container{display:none}");var _PFormTextEditor = function PFormTextEditor(t0) {
  var $ = c(107);
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
  var editorRef = useRef(null);
  var keyDownTime = useRef(0);
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState = useState(finalInitFocused),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  useChanged(finalInitFocused) && setFocused(finalInitFocused);
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  useChanged(initError) && setError(initError);
  var _useState5 = useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState9 = useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState1 = useState(),
    _useState10 = _slicedToArray(_useState1, 2),
    errorHelperText = _useState10[0],
    setErrorHelperText = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    initialized = _useState12[0],
    setInitialized = _useState12[1];
  var t4;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[0] = t4;
  } else {
    t4 = $[0];
  }
  var setErrorErrorHelperText = t4;
  var t5;
  if ($[1] !== onValidate || $[2] !== required) {
    t5 = function t5(value) {
      var _editorRef$current;
      if (required && empty((_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.getContent())) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[1] = onValidate;
    $[2] = required;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var validate = t5;
  var t6;
  if ($[4] !== initValue) {
    t6 = getFinalValue$8(initValue);
    $[4] = initValue;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var _useState13 = useState(t6),
    _useState14 = _slicedToArray(_useState13, 2),
    value_0 = _useState14[0],
    setValue = _useState14[1];
  useChanged(initValue) && setValue(getFinalValue$8(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t7;
  if ($[6] !== error || $[7] !== name || $[8] !== onChange || $[9] !== onValueChange || $[10] !== validate || $[11] !== valueRef) {
    t7 = function t7(newValue) {
      var finalValue = newValue;
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[6] = error;
    $[7] = name;
    $[8] = onChange;
    $[9] = onValueChange;
    $[10] = validate;
    $[11] = valueRef;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  var updateValue = t7;
  var t8;
  if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      var _editorRef$current2;
      (_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 || _editorRef$current2.focus();
    };
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  var focus = t8;
  var t9;
  if ($[14] !== name) {
    t9 = function t9() {
      return name;
    };
    $[14] = name;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var t10;
  if ($[16] !== initValue) {
    t10 = function t10() {
      return getFinalValue$8(initValue);
    };
    $[16] = initValue;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  var t11;
  if ($[18] !== initValue || $[19] !== updateValue) {
    t11 = function t11() {
      return updateValue(initValue);
    };
    $[18] = initValue;
    $[19] = updateValue;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  var t12;
  if ($[21] !== valueRef) {
    t12 = function t12() {
      return valueRef.current;
    };
    $[21] = valueRef;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  var t13;
  if ($[23] !== dataRef) {
    t13 = function t13() {
      return dataRef.current;
    };
    $[23] = dataRef;
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  var t14;
  if ($[25] !== exceptValue) {
    t14 = function t14() {
      return !!exceptValue;
    };
    $[25] = exceptValue;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  var t15;
  if ($[27] !== disabled) {
    t15 = function t15() {
      return !!disabled;
    };
    $[27] = disabled;
    $[28] = t15;
  } else {
    t15 = $[28];
  }
  var t16;
  if ($[29] !== hidden) {
    t16 = function t16() {
      return !!hidden;
    };
    $[29] = hidden;
    $[30] = t16;
  } else {
    t16 = $[30];
  }
  var t17;
  if ($[31] !== validate || $[32] !== valueRef) {
    t17 = function t17() {
      return validate(valueRef.current);
    };
    $[31] = validate;
    $[32] = valueRef;
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  var t18;
  if ($[34] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[34] = t18;
  } else {
    t18 = $[34];
  }
  var t19;
  if ($[35] !== t10 || $[36] !== t11 || $[37] !== t12 || $[38] !== t13 || $[39] !== t14 || $[40] !== t15 || $[41] !== t16 || $[42] !== t17 || $[43] !== t9 || $[44] !== updateValue) {
    t19 = {
      getType: _temp$m,
      getName: t9,
      getReset: t10,
      reset: t11,
      getValue: t12,
      setValue: updateValue,
      getData: t13,
      setData: setData,
      isExceptValue: t14,
      isDisabled: t15,
      setDisabled: setDisabled,
      isHidden: t16,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t17,
      setError: t18
    };
    $[35] = t10;
    $[36] = t11;
    $[37] = t12;
    $[38] = t13;
    $[39] = t14;
    $[40] = t15;
    $[41] = t16;
    $[42] = t17;
    $[43] = t9;
    $[44] = updateValue;
    $[45] = t19;
  } else {
    t19 = $[45];
  }
  var commands = t19;
  var t20;
  if ($[46] !== id || $[47] !== onAddValueItem) {
    t20 = function t20(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[46] = id;
    $[47] = onAddValueItem;
    $[48] = t20;
  } else {
    t20 = $[48];
  }
  var t21;
  if ($[49] !== id || $[50] !== onRemoveValueItem) {
    t21 = function t21() {
      return onRemoveValueItem(id);
    };
    $[49] = id;
    $[50] = onRemoveValueItem;
    $[51] = t21;
  } else {
    t21 = $[51];
  }
  useForwardRef(ref, commands, t20, t21);
  var t22;
  if ($[52] !== name || $[53] !== onValueChangeByUser || $[54] !== updateValue) {
    t22 = function t22(value_1) {
      updateValue(value_1);
      if (new Date().getTime() - keyDownTime.current < 300) {
        setTimeout(function () {
          if (onValueChangeByUser) {
            onValueChangeByUser(name, value_1);
          }
        });
      }
    };
    $[52] = name;
    $[53] = onValueChangeByUser;
    $[54] = updateValue;
    $[55] = t22;
  } else {
    t22 = $[55];
  }
  var handleEditorChange = t22;
  var t23;
  if ($[56] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = function t23() {
      keyDownTime.current = new Date().getTime();
    };
    $[56] = t23;
  } else {
    t23 = $[56];
  }
  var handleKeyDown = t23;
  var t24;
  if ($[57] !== onImageUpload) {
    t24 = function t24(blobInfo, progress) {
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
    $[57] = onImageUpload;
    $[58] = t24;
  } else {
    t24 = $[58];
  }
  var handleImageUpload = t24;
  var t25 = !initialized && "initializing";
  var t26;
  if ($[59] !== className || $[60] !== t25) {
    t26 = classNames(className, "PFormValueItem", "PFormTextEditor", t25);
    $[59] = className;
    $[60] = t25;
    $[61] = t26;
  } else {
    t26 = $[61];
  }
  var t27 = error ? errorHelperText : helperText;
  var t28;
  var t29;
  if ($[62] === Symbol["for"]("react.memo_cache_sentinel")) {
    t28 = {
      style: {
        marginLeft: 5
      }
    };
    t29 = {
      width: "100%"
    };
    $[62] = t28;
    $[63] = t29;
  } else {
    t28 = $[62];
    t29 = $[63];
  }
  var t30;
  if ($[64] !== height || $[65] !== initialized) {
    t30 = !initialized ? /*#__PURE__*/React.createElement(Skeleton, {
      variant: "rectangular",
      width: "100%",
      height: height
    }) : null;
    $[64] = height;
    $[65] = initialized;
    $[66] = t30;
  } else {
    t30 = $[66];
  }
  var t31;
  if ($[67] !== apiKey) {
    t31 = ifEmpty(apiKey, _PFormTextEditor.apiKey);
    $[67] = apiKey;
    $[68] = t31;
  } else {
    t31 = $[68];
  }
  var t32 = readOnly || disabled;
  var t33;
  if ($[69] === Symbol["for"]("react.memo_cache_sentinel")) {
    t33 = ["lists", "advlist", "image", "autolink", "link", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "insertdatetime", "media", "table", "wordcount"];
    $[69] = t33;
  } else {
    t33 = $[69];
  }
  var t34 = toolbar || "undo redo |                    formatselect bullist numlist outdent indent |                    bold italic | align | forecolor backcolor |                    link image media | advtable | code";
  var t35;
  if ($[70] !== handleImageUpload || $[71] !== height || $[72] !== menubar || $[73] !== t34) {
    t35 = {
      height: height,
      menubar: menubar,
      language: "ko_KR",
      contextmenu: false,
      content_style: "body {font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: hsl(0,0%,20%);} p {padding:0; margin:0}",
      plugins: t33,
      toolbar: t34,
      images_upload_handler: handleImageUpload
    };
    $[70] = handleImageUpload;
    $[71] = height;
    $[72] = menubar;
    $[73] = t34;
    $[74] = t35;
  } else {
    t35 = $[74];
  }
  var t36;
  if ($[75] !== onCloseWindow || $[76] !== onOpenWindow) {
    t36 = function t36(evt, editor) {
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
    $[75] = onCloseWindow;
    $[76] = onOpenWindow;
    $[77] = t36;
  } else {
    t36 = $[77];
  }
  var t37;
  var t38;
  if ($[78] !== initFocused) {
    t37 = function t37() {
      return setFocused(initFocused || true);
    };
    t38 = function t38() {
      return setFocused(initFocused || false);
    };
    $[78] = initFocused;
    $[79] = t37;
    $[80] = t38;
  } else {
    t37 = $[79];
    t38 = $[80];
  }
  var t39;
  if ($[81] !== handleEditorChange || $[82] !== t31 || $[83] !== t32 || $[84] !== t35 || $[85] !== t36 || $[86] !== t37 || $[87] !== t38 || $[88] !== value_0) {
    t39 = /*#__PURE__*/React.createElement(Editor, {
      apiKey: t31,
      value: value_0,
      disabled: t32,
      init: t35,
      onInit: t36,
      onEditorChange: handleEditorChange,
      onKeyDown: handleKeyDown,
      onFocus: t37,
      onBlur: t38
    });
    $[81] = handleEditorChange;
    $[82] = t31;
    $[83] = t32;
    $[84] = t35;
    $[85] = t36;
    $[86] = t37;
    $[87] = t38;
    $[88] = value_0;
    $[89] = t39;
  } else {
    t39 = $[89];
  }
  var t40;
  if ($[90] !== t30 || $[91] !== t39) {
    t40 = /*#__PURE__*/React.createElement(React.Fragment, null, t30, t39);
    $[90] = t30;
    $[91] = t39;
    $[92] = t40;
  } else {
    t40 = $[92];
  }
  var t41;
  if ($[93] !== color || $[94] !== error || $[95] !== focused || $[96] !== height || $[97] !== hidden || $[98] !== label || $[99] !== labelIcon || $[100] !== required || $[101] !== size || $[102] !== t26 || $[103] !== t27 || $[104] !== t40 || $[105] !== variant) {
    t41 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t26,
      labelIcon: labelIcon,
      label: label,
      error: error,
      required: required,
      fullWidth: true,
      helperText: t27,
      helperTextProps: t28,
      style: t29,
      hidden: hidden,
      controlHeight: height,
      control: t40
    });
    $[93] = color;
    $[94] = error;
    $[95] = focused;
    $[96] = height;
    $[97] = hidden;
    $[98] = label;
    $[99] = labelIcon;
    $[100] = required;
    $[101] = size;
    $[102] = t26;
    $[103] = t27;
    $[104] = t40;
    $[105] = variant;
    $[106] = t41;
  } else {
    t41 = $[106];
  }
  return t41;
};
_PFormTextEditor.apiKey = '';
function _temp$m() {
  return "PFormTextEditor";
}function PFormAutocomplete(t0) {
  var $ = c(184);
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
  var isAsyncChanged = useChanged(async);
  var id = useId();
  var _useTimeoutRef = useTimeoutRef(),
    _useTimeoutRef2 = _slicedToArray(_useTimeoutRef, 2),
    asyncTimeoutRef = _useTimeoutRef2[0],
    setAsyncTimeout = _useTimeoutRef2[1];
  var textFieldRef = useRef(null);
  var onChangeRef = useAutoUpdateRef(onChange);
  var onValidateRef = useAutoUpdateRef(onValidate);
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
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(initLoading),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  useChanged(initLoading) && setLoading(initLoading);
  var loadingRef = useAutoUpdateRef(loading);
  var _useState1 = useState(initItems),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    _setItems = _useState10[1];
  useChanged(initItems) && _setItems(initItems);
  var itemsRef = useAutoUpdateRef(items);
  var t3;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3(newItems) {
      _setItems(newItems);
    };
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  var setItems = t3;
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
  var t4;
  if (items) {
    var _t;
    if ($[1] !== items) {
      _t = items.reduce(_temp$l, {});
      $[1] = items;
      $[2] = _t;
    } else {
      _t = $[2];
    }
    t4 = _t;
  } else {
    var _t2;
    if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t2 = {};
      $[3] = _t2;
    } else {
      _t2 = $[3];
    }
    t4 = _t2;
  }
  var itemsValues = t4;
  var t5;
  if (items) {
    var _t3;
    if ($[4] !== items) {
      _t3 = items.reduce(_temp2$2, {});
      $[4] = items;
      $[5] = _t3;
    } else {
      _t3 = $[5];
    }
    t5 = _t3;
  } else {
    var _t4;
    if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t4 = {};
      $[6] = _t4;
    } else {
      _t4 = $[6];
    }
    t5 = _t4;
  }
  var itemsInfos = t5;
  var t6;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var setErrorErrorHelperText = t6;
  var t7;
  if ($[8] !== onValidateRef || $[9] !== required) {
    t7 = function t7(value_0) {
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
    $[8] = onValidateRef;
    $[9] = required;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  var validate = t7;
  var t8;
  if ($[11] !== formValueSeparator || $[12] !== itemsValues || $[13] !== multiple || $[14] !== onValue) {
    t8 = function t8(value_1) {
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
    $[11] = formValueSeparator;
    $[12] = itemsValues;
    $[13] = multiple;
    $[14] = onValue;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  var getFinalValue = t8;
  var getFinalValueRef = useAutoUpdateRef(getFinalValue);
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    valueItem = _useState18[0],
    setValueItem = _useState18[1];
  var t9;
  if ($[16] !== getFinalValue || $[17] !== initValue) {
    t9 = getFinalValue(initValue);
    $[16] = getFinalValue;
    $[17] = initValue;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  var _useState19 = useState(t9),
    _useState20 = _slicedToArray(_useState19, 2),
    value_2 = _useState20[0],
    setValue = _useState20[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_2);
  var t10;
  if ($[19] !== error || $[20] !== getFinalValue || $[21] !== name || $[22] !== onChangeRef || $[23] !== onValueChange || $[24] !== validate || $[25] !== valueRef) {
    t10 = function t10(newValue, t11) {
      var _onChangeRef$current;
      var skipGetFinalValue = t11 === undefined ? false : t11;
      var finalValue_0 = skipGetFinalValue ? newValue : getFinalValue(newValue);
      setValue(finalValue_0);
      valueRef.current = finalValue_0;
      if (error) {
        validate(finalValue_0);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[19] = error;
    $[20] = getFinalValue;
    $[21] = name;
    $[22] = onChangeRef;
    $[23] = onValueChange;
    $[24] = validate;
    $[25] = valueRef;
    $[26] = t10;
  } else {
    t10 = $[26];
  }
  var updateValue = t10;
  var updateValueRef = useAutoUpdateRef(updateValue);
  var firstSkipRef = useRef(true);
  var t11;
  if ($[27] !== getFinalValueRef || $[28] !== updateValueRef || $[29] !== valueRef) {
    t11 = function t11() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        updateValueRef.current(getFinalValueRef.current(valueRef.current));
      }
    };
    $[27] = getFinalValueRef;
    $[28] = updateValueRef;
    $[29] = valueRef;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  var t12;
  if ($[31] !== getFinalValueRef || $[32] !== multiple || $[33] !== updateValueRef || $[34] !== valueRef) {
    t12 = [getFinalValueRef, multiple, updateValueRef, valueRef];
    $[31] = getFinalValueRef;
    $[32] = multiple;
    $[33] = updateValueRef;
    $[34] = valueRef;
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  useEffect(t11, t12);
  var computedComponentValue;
  if ($[36] !== items || $[37] !== itemsInfos || $[38] !== multiple || $[39] !== valueItem || $[40] !== value_2) {
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
    $[36] = items;
    $[37] = itemsInfos;
    $[38] = multiple;
    $[39] = valueItem;
    $[40] = value_2;
    $[41] = computedComponentValue;
  } else {
    computedComponentValue = $[41];
  }
  var computedComponentValue_0 = computedComponentValue;
  var _useState21 = useState(computedComponentValue_0),
    _useState22 = _slicedToArray(_useState21, 2),
    stateComponentValue = _useState22[0],
    setStateComponentValue = _useState22[1];
  var componentValue = stateComponentValue;
  if (useChanged(computedComponentValue_0, true)) {
    if (stateComponentValue && computedComponentValue_0 && equal(stateComponentValue, computedComponentValue_0)) ; else {
      setStateComponentValue(computedComponentValue_0);
      componentValue = computedComponentValue_0;
    }
  }
  var isValueChanged = useChanged(value_2);
  var isValueItemChanged = useChanged(valueItem);
  if (isAsyncChanged || isValueChanged || isValueItemChanged) {
    if (async && onAsyncLoadValueItem) {
      if (value_2 != null) {
        if (!valueItem) {
          onAsyncLoadValueItem(value_2).then(function (valueItem_0) {
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
  }
  var t13;
  if ($[42] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = function t13() {
      setIsOnGetItemLoading(true);
    };
    $[42] = t13;
  } else {
    t13 = $[42];
  }
  var showOnGetItemLoading = t13;
  var t14;
  if ($[43] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = function t14() {
      setIsOnGetItemLoading(false);
    };
    $[43] = t14;
  } else {
    t14 = $[43];
  }
  var hideOnGetItemLoading = t14;
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    initialized = _useState24[0],
    setInitialized = _useState24[1];
  if (!initialized) {
    setInitialized(true);
    if (!async && onLoadItems) {
      showOnGetItemLoading();
      onLoadItems().then(function (items_0) {
        setItems(items_0);
        hideOnGetItemLoading();
      });
    }
  }
  var isInputValueChanged = useChanged(inputValue);
  if (isAsyncChanged || isInputValueChanged) {
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
  }
  var t15;
  if ($[44] === Symbol["for"]("react.memo_cache_sentinel")) {
    t15 = function t15() {
      var _textFieldRef$current;
      (_textFieldRef$current = textFieldRef.current) === null || _textFieldRef$current === void 0 || _textFieldRef$current.focus();
    };
    $[44] = t15;
  } else {
    t15 = $[44];
  }
  var focus = t15;
  var t16;
  if ($[45] !== name) {
    t16 = function t16() {
      return name;
    };
    $[45] = name;
    $[46] = t16;
  } else {
    t16 = $[46];
  }
  var t17;
  if ($[47] !== getFinalValue || $[48] !== initValue) {
    t17 = function t17() {
      return getFinalValue(initValue);
    };
    $[47] = getFinalValue;
    $[48] = initValue;
    $[49] = t17;
  } else {
    t17 = $[49];
  }
  var t18;
  if ($[50] !== initValue || $[51] !== updateValue) {
    t18 = function t18() {
      return updateValue(initValue);
    };
    $[50] = initValue;
    $[51] = updateValue;
    $[52] = t18;
  } else {
    t18 = $[52];
  }
  var t19;
  if ($[53] !== valueRef) {
    t19 = function t19() {
      return valueRef.current;
    };
    $[53] = valueRef;
    $[54] = t19;
  } else {
    t19 = $[54];
  }
  var t20;
  if ($[55] !== updateValue) {
    t20 = function t20(newValue_0) {
      return updateValue(newValue_0);
    };
    $[55] = updateValue;
    $[56] = t20;
  } else {
    t20 = $[56];
  }
  var t21;
  if ($[57] !== dataRef) {
    t21 = function t21() {
      return dataRef.current;
    };
    $[57] = dataRef;
    $[58] = t21;
  } else {
    t21 = $[58];
  }
  var t22;
  if ($[59] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = function t22(data_0) {
      return setData(data_0);
    };
    $[59] = t22;
  } else {
    t22 = $[59];
  }
  var t23;
  if ($[60] !== exceptValue) {
    t23 = function t23() {
      return !!exceptValue;
    };
    $[60] = exceptValue;
    $[61] = t23;
  } else {
    t23 = $[61];
  }
  var t24;
  if ($[62] !== disabled) {
    t24 = function t24() {
      return !!disabled;
    };
    $[62] = disabled;
    $[63] = t24;
  } else {
    t24 = $[63];
  }
  var t25;
  if ($[64] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = function t25(disabled_0) {
      return setDisabled(disabled_0);
    };
    $[64] = t25;
  } else {
    t25 = $[64];
  }
  var t26;
  if ($[65] !== hidden) {
    t26 = function t26() {
      return !!hidden;
    };
    $[65] = hidden;
    $[66] = t26;
  } else {
    t26 = $[66];
  }
  var t27;
  if ($[67] === Symbol["for"]("react.memo_cache_sentinel")) {
    t27 = function t27(hidden_0) {
      return setHidden(hidden_0);
    };
    $[67] = t27;
  } else {
    t27 = $[67];
  }
  var t28;
  if ($[68] !== validate || $[69] !== valueRef) {
    t28 = function t28() {
      return validate(valueRef.current);
    };
    $[68] = validate;
    $[69] = valueRef;
    $[70] = t28;
  } else {
    t28 = $[70];
  }
  var t29;
  if ($[71] === Symbol["for"]("react.memo_cache_sentinel")) {
    t29 = function t29(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[71] = t29;
  } else {
    t29 = $[71];
  }
  var t30;
  if ($[72] !== formValueSeparator) {
    t30 = function t30() {
      return formValueSeparator;
    };
    $[72] = formValueSeparator;
    $[73] = t30;
  } else {
    t30 = $[73];
  }
  var t31;
  if ($[74] !== formValueSort) {
    t31 = function t31() {
      return !!formValueSort;
    };
    $[74] = formValueSort;
    $[75] = t31;
  } else {
    t31 = $[75];
  }
  var t32;
  if ($[76] !== itemsRef) {
    t32 = function t32() {
      return itemsRef.current;
    };
    $[76] = itemsRef;
    $[77] = t32;
  } else {
    t32 = $[77];
  }
  var t33;
  if ($[78] !== multiple) {
    t33 = function t33() {
      return !!multiple;
    };
    $[78] = multiple;
    $[79] = t33;
  } else {
    t33 = $[79];
  }
  var t34;
  if ($[80] !== loadingRef) {
    t34 = function t34() {
      return !!loadingRef.current;
    };
    $[80] = loadingRef;
    $[81] = t34;
  } else {
    t34 = $[81];
  }
  var t35;
  if ($[82] === Symbol["for"]("react.memo_cache_sentinel")) {
    t35 = function t35(loading_0) {
      return setLoading(loading_0);
    };
    $[82] = t35;
  } else {
    t35 = $[82];
  }
  var t36;
  if ($[83] !== async || $[84] !== hideOnGetItemLoading || $[85] !== onLoadItems || $[86] !== showOnGetItemLoading) {
    t36 = function t36() {
      if (!async && onLoadItems) {
        showOnGetItemLoading();
        onLoadItems().then(function (items_2) {
          setItems(items_2);
        })["finally"](function () {
          hideOnGetItemLoading();
        });
      }
    };
    $[83] = async;
    $[84] = hideOnGetItemLoading;
    $[85] = onLoadItems;
    $[86] = showOnGetItemLoading;
    $[87] = t36;
  } else {
    t36 = $[87];
  }
  var t37;
  if ($[88] !== t16 || $[89] !== t17 || $[90] !== t18 || $[91] !== t19 || $[92] !== t20 || $[93] !== t21 || $[94] !== t23 || $[95] !== t24 || $[96] !== t26 || $[97] !== t28 || $[98] !== t30 || $[99] !== t31 || $[100] !== t32 || $[101] !== t33 || $[102] !== t34 || $[103] !== t36) {
    t37 = {
      getType: _temp4,
      getName: t16,
      getReset: t17,
      reset: t18,
      getValue: t19,
      setValue: t20,
      getData: t21,
      setData: t22,
      isExceptValue: t23,
      isDisabled: t24,
      setDisabled: t25,
      isHidden: t26,
      setHidden: t27,
      focus: focus,
      focusValidate: focus,
      validate: t28,
      setError: t29,
      getFormValueSeparator: t30,
      isFormValueSort: t31,
      getItems: t32,
      setItems: setItems,
      isMultiple: t33,
      getLoading: t34,
      setLoading: t35,
      reloadItems: t36,
      setInputValue: setInputValue
    };
    $[88] = t16;
    $[89] = t17;
    $[90] = t18;
    $[91] = t19;
    $[92] = t20;
    $[93] = t21;
    $[94] = t23;
    $[95] = t24;
    $[96] = t26;
    $[97] = t28;
    $[98] = t30;
    $[99] = t31;
    $[100] = t32;
    $[101] = t33;
    $[102] = t34;
    $[103] = t36;
    $[104] = t37;
  } else {
    t37 = $[104];
  }
  var commands = t37;
  var t38;
  if ($[105] !== id || $[106] !== onAddValueItem) {
    t38 = function t38(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[105] = id;
    $[106] = onAddValueItem;
    $[107] = t38;
  } else {
    t38 = $[107];
  }
  var t39;
  if ($[108] !== id || $[109] !== onRemoveValueItem) {
    t39 = function t39() {
      return onRemoveValueItem(id);
    };
    $[108] = id;
    $[109] = onRemoveValueItem;
    $[110] = t39;
  } else {
    t39 = $[110];
  }
  useForwardRef(ref, commands, t38, t39);
  var t40;
  if ($[111] !== getFinalValue || $[112] !== multiple || $[113] !== name || $[114] !== onAddItem || $[115] !== onRequestSearchSubmit || $[116] !== onValueChangeByUser || $[117] !== updateValue || $[118] !== valueRef) {
    t40 = function t40(componentValue_0, reason, details) {
      var go = function go() {
        var newValue_1 = undefined;
        if (componentValue_0) {
          if (componentValue_0) {
            if (Array.isArray(componentValue_0)) {
              newValue_1 = componentValue_0.map(_temp5);
            } else {
              newValue_1 = componentValue_0.value;
            }
          }
        }
        var finalValue_2 = getFinalValue(newValue_1);
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
    $[111] = getFinalValue;
    $[112] = multiple;
    $[113] = name;
    $[114] = onAddItem;
    $[115] = onRequestSearchSubmit;
    $[116] = onValueChangeByUser;
    $[117] = updateValue;
    $[118] = valueRef;
    $[119] = t40;
  } else {
    t40 = $[119];
  }
  var handleChange = t40;
  var t41;
  if ($[120] !== getOptionDisabled) {
    t41 = function t41(option) {
      if (getOptionDisabled) {
        return option.disabled || getOptionDisabled(option);
      } else {
        return !!option.disabled;
      }
    };
    $[120] = getOptionDisabled;
    $[121] = t41;
  } else {
    t41 = $[121];
  }
  var handleGetOptionDisabled = t41;
  var style;
  if ($[122] !== hidden || $[123] !== initStyle || $[124] !== width) {
    style = _objectSpread2({
      minWidth: 120
    }, initStyle);
    if (hidden) {
      style.display = "none";
    }
    if (width != null) {
      style.width = width;
    }
    $[122] = hidden;
    $[123] = initStyle;
    $[124] = width;
    $[125] = style;
  } else {
    style = $[125];
  }
  var t42;
  if ($[126] !== items) {
    t42 = items || [];
    $[126] = items;
    $[127] = t42;
  } else {
    t42 = $[127];
  }
  var t43;
  if ($[128] !== className) {
    t43 = classNames(className, "PFormValueItem", "PFormAutocomplete");
    $[128] = className;
    $[129] = t43;
  } else {
    t43 = $[129];
  }
  var t44 = !width && fullWidth;
  var t45 = componentValue;
  var t46 = loading || isOnGetItemLoading;
  var t47;
  if ($[130] !== handleChange) {
    t47 = function t47(e, value_4, reason_0, details_0) {
      return handleChange(value_4, reason_0, details_0);
    };
    $[130] = handleChange;
    $[131] = t47;
  } else {
    t47 = $[131];
  }
  var t48;
  if ($[132] !== onRenderItem) {
    t48 = function t48(props, option_1) {
      return /*#__PURE__*/React.createElement("li", _extends({}, props, {
        key: "".concat(option_1.value)
      }), onRenderItem ? onRenderItem(option_1) : option_1.label);
    };
    $[132] = onRenderItem;
    $[133] = t48;
  } else {
    t48 = $[133];
  }
  var t49;
  if ($[134] === Symbol["for"]("react.memo_cache_sentinel")) {
    t49 = function t49(event, newInputValue, reason_1) {
      if (reason_1 === "input") {
        setInputValue(newInputValue);
      } else {
        if (reason_1 === "reset") {
          setInputValue(undefined);
        }
      }
    };
    $[134] = t49;
  } else {
    t49 = $[134];
  }
  var t50;
  if ($[135] !== multiple || $[136] !== onRenderTag || $[137] !== size || $[138] !== variant) {
    t50 = multiple ? function (value_5, getItemProps) {
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
    $[135] = multiple;
    $[136] = onRenderTag;
    $[137] = size;
    $[138] = variant;
    $[139] = t50;
  } else {
    t50 = $[139];
  }
  var t51;
  if ($[140] !== autoFocus || $[141] !== color || $[142] !== disabled || $[143] !== error || $[144] !== errorHelperText || $[145] !== focused || $[146] !== helperText || $[147] !== isOnGetItemLoading || $[148] !== label || $[149] !== labelIcon || $[150] !== labelShrink || $[151] !== loading || $[152] !== name || $[153] !== onBlurRef || $[154] !== onFocusRef || $[155] !== placeholder || $[156] !== readOnly || $[157] !== required || $[158] !== size || $[159] !== variant) {
    t51 = function t51(params) {
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
    $[140] = autoFocus;
    $[141] = color;
    $[142] = disabled;
    $[143] = error;
    $[144] = errorHelperText;
    $[145] = focused;
    $[146] = helperText;
    $[147] = isOnGetItemLoading;
    $[148] = label;
    $[149] = labelIcon;
    $[150] = labelShrink;
    $[151] = loading;
    $[152] = name;
    $[153] = onBlurRef;
    $[154] = onFocusRef;
    $[155] = placeholder;
    $[156] = readOnly;
    $[157] = required;
    $[158] = size;
    $[159] = variant;
    $[160] = t51;
  } else {
    t51 = $[160];
  }
  var t52;
  if ($[161] !== disableClearable || $[162] !== disablePortal || $[163] !== disabled || $[164] !== getLimitTagsText || $[165] !== handleGetOptionDisabled || $[166] !== limitTags || $[167] !== loadingText || $[168] !== multiple || $[169] !== noOptionsText || $[170] !== openOnFocus || $[171] !== readOnly || $[172] !== style || $[173] !== sx || $[174] !== t42 || $[175] !== t43 || $[176] !== t44 || $[177] !== t45 || $[178] !== t46 || $[179] !== t47 || $[180] !== t48 || $[181] !== t50 || $[182] !== t51) {
    t52 = /*#__PURE__*/React.createElement(Autocomplete, {
      options: t42,
      className: t43,
      sx: sx,
      multiple: multiple,
      fullWidth: t44,
      openOnFocus: openOnFocus,
      disableClearable: disableClearable,
      disablePortal: disablePortal,
      noOptionsText: noOptionsText,
      value: t45,
      style: style,
      isOptionEqualToValue: _temp6,
      getOptionDisabled: handleGetOptionDisabled,
      disabled: disabled,
      readOnly: readOnly,
      loading: t46,
      loadingText: loadingText,
      limitTags: limitTags,
      getLimitTagsText: getLimitTagsText,
      onChange: t47,
      renderOption: t48,
      onInputChange: t49,
      renderValue: t50,
      renderInput: t51
    });
    $[161] = disableClearable;
    $[162] = disablePortal;
    $[163] = disabled;
    $[164] = getLimitTagsText;
    $[165] = handleGetOptionDisabled;
    $[166] = limitTags;
    $[167] = loadingText;
    $[168] = multiple;
    $[169] = noOptionsText;
    $[170] = openOnFocus;
    $[171] = readOnly;
    $[172] = style;
    $[173] = sx;
    $[174] = t42;
    $[175] = t43;
    $[176] = t44;
    $[177] = t45;
    $[178] = t46;
    $[179] = t47;
    $[180] = t48;
    $[181] = t50;
    $[182] = t51;
    $[183] = t52;
  } else {
    t52 = $[183];
  }
  return t52;
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
}function getDateValidationErrorText(error) {
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
}function getFileSizeText(bytes) {
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
  var activeYearRef = useAutoUpdateRef(activeYear);
  var t1;
  var t2;
  if ($[0] !== activeYearRef) {
    t1 = function t1() {
      var _containerRef$current;
      var activeEls = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.getElementsByClassName("private-year-select-value-".concat(activeYearRef.current));
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
    t2 = [activeYearRef];
    $[0] = activeYearRef;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useEffect(t1, t2);
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
  var $ = c(30);
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
  var t4;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3() {
      return function () {
        if (scrollTimerRef.current) {
          clearInterval(scrollTimerRef.current);
          scrollTimerRef.current = undefined;
        }
      };
    };
    t4 = [];
    $[1] = t3;
    $[2] = t4;
  } else {
    t3 = $[1];
    t4 = $[2];
  }
  useEffect(t3, t4);
  var valueRef = useAutoUpdateRef(value);
  var scrollToValueRef = useAutoUpdateRef(scrollToValue);
  var t5;
  var t6;
  if ($[3] !== scrollToValueRef || $[4] !== valueRef) {
    t5 = function t5() {
      if (valueRef.current != null) {
        scrollToValueRef.current(valueRef.current);
      }
    };
    t6 = [scrollToValueRef, valueRef];
    $[3] = scrollToValueRef;
    $[4] = valueRef;
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  useEffect(t5, t6);
  var t7;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = {
      scrollToValue: scrollToValue
    };
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  useForwardRef(ref, t7);
  var t8;
  if ($[8] !== onSelectRef) {
    t8 = function t8(e) {
      onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute("data-id")));
    };
    $[8] = onSelectRef;
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  var handleClick = t8;
  var t10;
  var t9;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = {
      ref: simpleBarRef
    };
    t10 = {
      height: "100%"
    };
    $[10] = t10;
    $[11] = t9;
  } else {
    t10 = $[10];
    t9 = $[11];
  }
  var t11;
  if ($[12] !== cols || $[13] !== disableList || $[14] !== handleClick || $[15] !== list || $[16] !== listInterval || $[17] !== unit || $[18] !== value) {
    var _t;
    if ($[20] !== listInterval) {
      _t = function _t(v) {
        return listInterval ? v % listInterval === 0 : true;
      };
      $[20] = listInterval;
      $[21] = _t;
    } else {
      _t = $[21];
    }
    var t13;
    if ($[22] !== cols || $[23] !== disableList || $[24] !== handleClick || $[25] !== unit || $[26] !== value) {
      t13 = function t13(v_0) {
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
      $[22] = cols;
      $[23] = disableList;
      $[24] = handleClick;
      $[25] = unit;
      $[26] = value;
      $[27] = t13;
    } else {
      t13 = $[27];
    }
    t11 = list.filter(_t).map(t13);
    $[12] = cols;
    $[13] = disableList;
    $[14] = handleClick;
    $[15] = list;
    $[16] = listInterval;
    $[17] = unit;
    $[18] = value;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  var t12;
  if ($[28] !== t11) {
    t12 = /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "PrivateTimeSelect"
    }, /*#__PURE__*/React.createElement(SimpleBar, {
      scrollableNodeProps: t9,
      style: t10
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true
    }, t11)));
    $[28] = t11;
    $[29] = t12;
  } else {
    t12 = $[29];
  }
  return t12;
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
  var $ = c(80);
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
  if (useChanged(yearSelectOpen)) {
    if (!yearSelectOpen) {
      setActiveMonthValue(null);
    }
  }
  var leftArrowOnClickRef = useRef(undefined);
  var rightArrowOnClickRef = useRef(undefined);
  var t6;
  if ($[27] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6(props_0) {
      leftArrowOnClickRef.current = props_0.onClick;
      return /*#__PURE__*/React.createElement(IconButton, props_0);
    };
    $[27] = t6;
  } else {
    t6 = $[27];
  }
  var LeftArrowButton = t6;
  var t7;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7(props_1) {
      rightArrowOnClickRef.current = props_1.onClick;
      return /*#__PURE__*/React.createElement(IconButton, props_1);
    };
    $[28] = t7;
  } else {
    t7 = $[28];
  }
  var RightArrowButton = t7;
  var t8;
  if ($[29] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[29] = t8;
  } else {
    t8 = $[29];
  }
  var previousMonth = t8;
  var t9;
  if ($[30] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[30] = t9;
  } else {
    t9 = $[30];
  }
  var nextMonth = t9;
  var t10;
  if ($[31] !== month) {
    t10 = function t10(year) {
      setMonth(month.set("year", year));
      setActiveMonthValue(month.set("year", year));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    };
    $[31] = month;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var handleYearSelect = t10;
  var t11;
  if ($[33] !== month) {
    t11 = function t11(m) {
      setMonth(month.set("month", m));
      setActiveMonthValue(month.set("month", m));
      setMonthSelectOpen(false);
    };
    $[33] = month;
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  var handleMonthSelect = t11;
  var t12;
  if ($[35] !== value) {
    t12 = function t12(props_2) {
      return /*#__PURE__*/React.createElement(PickersDay, _extends({}, props_2, {
        selected: props_2.day.isSame(value, "date")
      }));
    };
    $[35] = value;
    $[36] = t12;
  } else {
    t12 = $[36];
  }
  var handleRenderDay = t12;
  var t13;
  if ($[37] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = {};
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  useForwardRef(ref, t13);
  var t14;
  if ($[38] !== availableDate || $[39] !== _onChange || $[40] !== time || $[41] !== type) {
    t14 = function t14(date, label) {
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
    $[38] = availableDate;
    $[39] = _onChange;
    $[40] = time;
    $[41] = type;
    $[42] = t14;
  } else {
    t14 = $[42];
  }
  var getActionButton = t14;
  var t15;
  if ($[43] !== type) {
    t15 = classNames("PrivateStaticDatePicker", type);
    $[43] = type;
    $[44] = t15;
  } else {
    t15 = $[44];
  }
  var t16;
  if ($[45] !== activeMonthValue || $[46] !== availableDate || $[47] !== disableFuture || $[48] !== disablePast || $[49] !== getActionButton || $[50] !== handleMonthSelect || $[51] !== handleRenderDay || $[52] !== handleYearSelect || $[53] !== maxDate || $[54] !== minDate || $[55] !== month || $[56] !== monthSelectOpen || $[57] !== _onChange || $[58] !== _onMonthChange || $[59] !== props || $[60] !== type || $[61] !== value || $[62] !== yearSelectOpen) {
    t16 = type !== "time" && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Grid, {
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
    $[45] = activeMonthValue;
    $[46] = availableDate;
    $[47] = disableFuture;
    $[48] = disablePast;
    $[49] = getActionButton;
    $[50] = handleMonthSelect;
    $[51] = handleRenderDay;
    $[52] = handleYearSelect;
    $[53] = maxDate;
    $[54] = minDate;
    $[55] = month;
    $[56] = monthSelectOpen;
    $[57] = _onChange;
    $[58] = _onMonthChange;
    $[59] = props;
    $[60] = type;
    $[61] = value;
    $[62] = yearSelectOpen;
    $[63] = t16;
  } else {
    t16 = $[63];
  }
  var t17;
  if ($[64] !== availableDate || $[65] !== hours || $[66] !== minuteInterval || $[67] !== minutes || $[68] !== _onChange || $[69] !== onClose || $[70] !== secondInterval || $[71] !== seconds || $[72] !== time || $[73] !== type || $[74] !== value) {
    t17 = time && /*#__PURE__*/React.createElement(PrivateTimeSection, {
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
    $[64] = availableDate;
    $[65] = hours;
    $[66] = minuteInterval;
    $[67] = minutes;
    $[68] = _onChange;
    $[69] = onClose;
    $[70] = secondInterval;
    $[71] = seconds;
    $[72] = time;
    $[73] = type;
    $[74] = value;
    $[75] = t17;
  } else {
    t17 = $[75];
  }
  var t18;
  if ($[76] !== t15 || $[77] !== t16 || $[78] !== t17) {
    t18 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: t15
    }, t16, t17);
    $[76] = t15;
    $[77] = t16;
    $[78] = t17;
    $[79] = t18;
  } else {
    t18 = $[79];
  }
  return t18;
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
  var $ = c(258);
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
  var privateStaticDatePickerRef = useRef(null);
  var textFieldInputRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var datePickerErrorRef = useRef(null);
  var onValidateRef = useAutoUpdateRef(initOnValidate);
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
  var t4;
  if ($[46] !== formVariant || $[47] !== initVariant) {
    t4 = ifUndefined(initVariant, formVariant);
    $[46] = formVariant;
    $[47] = initVariant;
    $[48] = t4;
  } else {
    t4 = $[48];
  }
  var variant = t4;
  var t5;
  if ($[49] !== formSize || $[50] !== initSize) {
    t5 = ifUndefined(initSize, formSize);
    $[49] = formSize;
    $[50] = initSize;
    $[51] = t5;
  } else {
    t5 = $[51];
  }
  var size = t5;
  var t6;
  if ($[52] !== formColor || $[53] !== initColor) {
    t6 = ifUndefined(initColor, formColor);
    $[52] = formColor;
    $[53] = initColor;
    $[54] = t6;
  } else {
    t6 = $[54];
  }
  var color = t6;
  var t7;
  if ($[55] !== formFocused || $[56] !== initFocused) {
    t7 = ifUndefined(initFocused, formFocused);
    $[55] = formFocused;
    $[56] = initFocused;
    $[57] = t7;
  } else {
    t7 = $[57];
  }
  var focused = t7;
  var t8;
  if ($[58] !== formLabelShrink || $[59] !== initLabelShrink) {
    t8 = ifUndefined(initLabelShrink, formLabelShrink);
    $[58] = formLabelShrink;
    $[59] = initLabelShrink;
    $[60] = t8;
  } else {
    t8 = $[60];
  }
  var labelShrink = t8;
  var t9;
  if ($[61] !== formFullWidth || $[62] !== initFullWidth) {
    t9 = ifUndefined(initFullWidth, formFullWidth);
    $[61] = formFullWidth;
    $[62] = initFullWidth;
    $[63] = t9;
  } else {
    t9 = $[63];
  }
  var fullWidth = t9;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  useChanged(initError) && setError(initError);
  var _useState5 = useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState9 = useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    timeError = _useState10[0],
    setTimeError = _useState10[1];
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    errorHelperText = _useState12[0],
    setErrorHelperText = _useState12[1];
  var t10 = !!disablePast;
  var t11 = !!disableFuture;
  var t12;
  if ($[64] !== maxDate || $[65] !== minDate || $[66] !== t10 || $[67] !== t11) {
    t12 = makeAvailableDate(minDate, maxDate, t10, t11);
    $[64] = maxDate;
    $[65] = minDate;
    $[66] = t10;
    $[67] = t11;
    $[68] = t12;
  } else {
    t12 = $[68];
  }
  var availableDate = t12;
  var t13;
  if ($[69] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = function t13(error_0, helperText_0) {
      setError(error_0);
      setErrorHelperText(helperText_0);
    };
    $[69] = t13;
  } else {
    t13 = $[69];
  }
  var setErrorErrorHelperText = t13;
  var t14;
  if ($[70] !== onValidateRef || $[71] !== required || $[72] !== timeError) {
    t14 = function t14(value) {
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
    $[70] = onValidateRef;
    $[71] = required;
    $[72] = timeError;
    $[73] = t14;
  } else {
    t14 = $[73];
  }
  var validate = t14;
  var validateRef = useAutoUpdateRef(validate);
  var _useState13 = useState(initValue),
    _useState14 = _slicedToArray(_useState13, 2),
    value_0 = _useState14[0],
    setValue = _useState14[1];
  useChanged(initValue) && setValue(initValue);
  var valueRef = useAutoUpdateRef(value_0);
  var _useState15 = useState(value_0),
    _useState16 = _slicedToArray(_useState15, 2),
    inputValue = _useState16[0],
    setInputValue = _useState16[1];
  useChanged(value_0) && setInputValue(value_0);
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    openValue = _useState18[0],
    setOpenValue = _useState18[1];
  var t15;
  if ($[74] !== availableDate || $[75] !== error || $[76] !== name || $[77] !== onChange || $[78] !== onValueChange || $[79] !== time || $[80] !== type || $[81] !== validate || $[82] !== valueRef) {
    t15 = function t15(newValue) {
      var finalValue = newValue;
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
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
    $[74] = availableDate;
    $[75] = error;
    $[76] = name;
    $[77] = onChange;
    $[78] = onValueChange;
    $[79] = time;
    $[80] = type;
    $[81] = validate;
    $[82] = valueRef;
    $[83] = t15;
  } else {
    t15 = $[83];
  }
  var updateValue = t15;
  var firstSkipRef = useRef(true);
  var t16;
  var t17;
  if ($[84] !== error || $[85] !== timeError || $[86] !== validateRef || $[87] !== valueRef) {
    t16 = function t16() {
      if (firstSkipRef) {
        firstSkipRef.current = false;
      } else {
        if (error && !timeError) {
          validateRef.current(valueRef.current);
        }
      }
    };
    t17 = [error, timeError, validateRef, valueRef];
    $[84] = error;
    $[85] = timeError;
    $[86] = validateRef;
    $[87] = valueRef;
    $[88] = t16;
    $[89] = t17;
  } else {
    t16 = $[88];
    t17 = $[89];
  }
  useEffect(t16, t17);
  if (useChanged(isOpen)) {
    if (isOpen) {
      setOpenValue(value_0);
    } else {
      if (openValue !== value_0) {
        var runOnRequestSearchSubmit;
        if (openValue && value_0) {
          runOnRequestSearchSubmit = !openValue.isSame(value_0, "second");
        } else {
          runOnRequestSearchSubmit = true;
        }
        if (runOnRequestSearchSubmit) {
          onRequestSearchSubmit(name, value_0);
        }
      }
    }
  }
  var t18;
  if ($[90] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18() {
      var _textFieldInputRef$cu;
      (_textFieldInputRef$cu = textFieldInputRef.current) === null || _textFieldInputRef$cu === void 0 || _textFieldInputRef$cu.focus();
    };
    $[90] = t18;
  } else {
    t18 = $[90];
  }
  var focus = t18;
  var t19;
  if ($[91] !== name) {
    t19 = function t19() {
      return name;
    };
    $[91] = name;
    $[92] = t19;
  } else {
    t19 = $[92];
  }
  var t20;
  if ($[93] !== initValue) {
    t20 = function t20() {
      return initValue;
    };
    $[93] = initValue;
    $[94] = t20;
  } else {
    t20 = $[94];
  }
  var t21;
  if ($[95] !== initValue || $[96] !== updateValue) {
    t21 = function t21() {
      return updateValue(initValue);
    };
    $[95] = initValue;
    $[96] = updateValue;
    $[97] = t21;
  } else {
    t21 = $[97];
  }
  var t22;
  if ($[98] !== valueRef) {
    t22 = function t22() {
      return valueRef.current;
    };
    $[98] = valueRef;
    $[99] = t22;
  } else {
    t22 = $[99];
  }
  var t23;
  if ($[100] !== dataRef) {
    t23 = function t23() {
      return dataRef.current;
    };
    $[100] = dataRef;
    $[101] = t23;
  } else {
    t23 = $[101];
  }
  var t24;
  if ($[102] !== exceptValue) {
    t24 = function t24() {
      return !!exceptValue;
    };
    $[102] = exceptValue;
    $[103] = t24;
  } else {
    t24 = $[103];
  }
  var t25;
  if ($[104] !== disabled) {
    t25 = function t25() {
      return !!disabled;
    };
    $[104] = disabled;
    $[105] = t25;
  } else {
    t25 = $[105];
  }
  var t26;
  if ($[106] !== hidden) {
    t26 = function t26() {
      return !!hidden;
    };
    $[106] = hidden;
    $[107] = t26;
  } else {
    t26 = $[107];
  }
  var t27;
  if ($[108] !== validate || $[109] !== valueRef) {
    t27 = function t27() {
      return validate(valueRef.current);
    };
    $[108] = validate;
    $[109] = valueRef;
    $[110] = t27;
  } else {
    t27 = $[110];
  }
  var t28;
  if ($[111] === Symbol["for"]("react.memo_cache_sentinel")) {
    t28 = function t28(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[111] = t28;
  } else {
    t28 = $[111];
  }
  var t29;
  if ($[112] !== initFormValueFormat || $[113] !== time || $[114] !== type) {
    t29 = function t29() {
      return initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time);
    };
    $[112] = initFormValueFormat;
    $[113] = time;
    $[114] = type;
    $[115] = t29;
  } else {
    t29 = $[115];
  }
  var t30;
  if ($[116] !== t19 || $[117] !== t20 || $[118] !== t21 || $[119] !== t22 || $[120] !== t23 || $[121] !== t24 || $[122] !== t25 || $[123] !== t26 || $[124] !== t27 || $[125] !== t29 || $[126] !== updateValue) {
    t30 = {
      getType: _temp$j,
      getName: t19,
      getReset: t20,
      reset: t21,
      getValue: t22,
      setValue: updateValue,
      getData: t23,
      setData: setData,
      isExceptValue: t24,
      isDisabled: t25,
      setDisabled: setDisabled,
      isHidden: t26,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t27,
      setError: t28,
      getFormValueFormat: t29
    };
    $[116] = t19;
    $[117] = t20;
    $[118] = t21;
    $[119] = t22;
    $[120] = t23;
    $[121] = t24;
    $[122] = t25;
    $[123] = t26;
    $[124] = t27;
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
  useForwardRef(ref, commands, t31, t32);
  var t33;
  if ($[134] !== availableDate || $[135] !== isOpen || $[136] !== name || $[137] !== onRequestSearchSubmit || $[138] !== onValueChangeByUser || $[139] !== time || $[140] !== type || $[141] !== updateValue) {
    t33 = function t33(unit, newValue_0, keyboardInputValue) {
      var isUpdateValue = true;
      if (notEmpty(keyboardInputValue)) {
        if (newValue_0) {
          if (!newValue_0.isValid()) {
            isUpdateValue = false;
          }
        }
      }
      var finalValue_0 = newValue_0;
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
    $[134] = availableDate;
    $[135] = isOpen;
    $[136] = name;
    $[137] = onRequestSearchSubmit;
    $[138] = onValueChangeByUser;
    $[139] = time;
    $[140] = type;
    $[141] = updateValue;
    $[142] = t33;
  } else {
    t33 = $[142];
  }
  var handleChange = t33;
  var t34;
  if ($[143] === Symbol["for"]("react.memo_cache_sentinel")) {
    t34 = function t34() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[143] = t34;
  } else {
    t34 = $[143];
  }
  var handleContainerFocus = t34;
  var t35;
  if ($[144] === Symbol["for"]("react.memo_cache_sentinel")) {
    t35 = function t35() {
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
    $[144] = t35;
  } else {
    t35 = $[144];
  }
  var handleContainerBlur = t35;
  var t36;
  if ($[145] === Symbol["for"]("react.memo_cache_sentinel")) {
    t36 = function t36() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[145] = t36;
  } else {
    t36 = $[145];
  }
  var handleContainerMouseDown = t36;
  var textFieldInputLabelProps;
  if ($[146] !== labelShrink) {
    textFieldInputLabelProps = {};
    if (labelShrink) {
      textFieldInputLabelProps.shrink = labelShrink;
    }
    $[146] = labelShrink;
    $[147] = textFieldInputLabelProps;
  } else {
    textFieldInputLabelProps = $[147];
  }
  var readOnly_0 = !enableKeyboardInput;
  var inputProps;
  if ($[148] !== readOnly_0) {
    inputProps = {
      readOnly: readOnly_0
    };
    if (readOnly_0) {
      inputProps.tabIndex = -1;
    }
    $[148] = readOnly_0;
    $[149] = inputProps;
  } else {
    inputProps = $[149];
  }
  var muiInputProps;
  if ($[150] !== endAdornment || $[151] !== icon || $[152] !== startAdornment) {
    muiInputProps = {
      endAdornment: undefined
    };
    if (startAdornment || icon || muiInputProps.startAdornment) {
      var _t2;
      if ($[154] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "small"
        }, icon));
        $[154] = icon;
        $[155] = _t2;
      } else {
        _t2 = $[155];
      }
      var _t3;
      if ($[156] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, startAdornment);
        $[156] = startAdornment;
        $[157] = _t3;
      } else {
        _t3 = $[157];
      }
      muiInputProps.startAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3, muiInputProps.startAdornment);
    }
    if (endAdornment) {
      var _t4;
      if ($[158] !== endAdornment) {
        _t4 = endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, endAdornment);
        $[158] = endAdornment;
        $[159] = _t4;
      } else {
        _t4 = $[159];
      }
      var _t5;
      if ($[160] !== _t4) {
        _t5 = /*#__PURE__*/React.createElement(React.Fragment, null, _t4);
        $[160] = _t4;
        $[161] = _t5;
      } else {
        _t5 = $[161];
      }
      muiInputProps.endAdornment = _t5;
    }
    $[150] = endAdornment;
    $[151] = icon;
    $[152] = startAdornment;
    $[153] = muiInputProps;
  } else {
    muiInputProps = $[153];
  }
  var t37 = "align-".concat(align);
  var t38;
  if ($[162] !== t37) {
    t38 = classNames("input-text-field", t37);
    $[162] = t37;
    $[163] = t38;
  } else {
    t38 = $[163];
  }
  var t39 = !!error || !!timeError;
  var t40;
  if ($[164] !== initStyle || $[165] !== width) {
    t40 = width != null ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      width: width
    }) : initStyle;
    $[164] = initStyle;
    $[165] = width;
    $[166] = t40;
  } else {
    t40 = $[166];
  }
  var t41;
  var t42;
  if ($[167] === Symbol["for"]("react.memo_cache_sentinel")) {
    t41 = function t41() {
      setIsOpen(true);
    };
    t42 = function t42() {
      setIsOpen(true);
    };
    $[167] = t41;
    $[168] = t42;
  } else {
    t41 = $[167];
    t42 = $[168];
  }
  var t43;
  if ($[169] !== color || $[170] !== focused || $[171] !== fullWidth || $[172] !== inputProps || $[173] !== muiInputProps || $[174] !== required || $[175] !== size || $[176] !== sx || $[177] !== t38 || $[178] !== t39 || $[179] !== t40 || $[180] !== textFieldInputLabelProps || $[181] !== variant) {
    t43 = {
      textField: {
        className: t38,
        inputRef: textFieldInputRef,
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
        error: t39,
        style: t40,
        sx: sx,
        onFocus: t41,
        onClick: t42
      }
    };
    $[169] = color;
    $[170] = focused;
    $[171] = fullWidth;
    $[172] = inputProps;
    $[173] = muiInputProps;
    $[174] = required;
    $[175] = size;
    $[176] = sx;
    $[177] = t38;
    $[178] = t39;
    $[179] = t40;
    $[180] = textFieldInputLabelProps;
    $[181] = variant;
    $[182] = t43;
  } else {
    t43 = $[182];
  }
  var slotProps = t43;
  var t44;
  if ($[183] === Symbol["for"]("react.memo_cache_sentinel")) {
    t44 = function t44() {
      return setIsOpen(false);
    };
    $[183] = t44;
  } else {
    t44 = $[183];
  }
  var t45;
  if ($[184] !== className) {
    t45 = classNames(className, "PrivateDatePicker");
    $[184] = className;
    $[185] = t45;
  } else {
    t45 = $[185];
  }
  var t46 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t47 = fullWidth ? 1 : undefined;
  var t48;
  if ($[186] !== t46 || $[187] !== t47) {
    t48 = {
      display: t46,
      flex: t47
    };
    $[186] = t46;
    $[187] = t47;
    $[188] = t48;
  } else {
    t48 = $[188];
  }
  var t49 = disabled || readOnly ? false : isOpen;
  var t50 = error && errorHelperText ? 8 : -14;
  var t51;
  if ($[189] !== t50) {
    t51 = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, t50]
        }
      }]
    };
    $[189] = t50;
    $[190] = t51;
  } else {
    t51 = $[190];
  }
  var t52;
  if ($[191] !== time) {
    t52 = function t52() {
      return !time && setIsOpen(false);
    };
    $[191] = time;
    $[192] = t52;
  } else {
    t52 = $[192];
  }
  var t53;
  if ($[193] === Symbol["for"]("react.memo_cache_sentinel")) {
    t53 = function t53() {
      return setIsOpen(false);
    };
    $[193] = t53;
  } else {
    t53 = $[193];
  }
  var t54;
  if ($[194] !== availableDate || $[195] !== disableFuture || $[196] !== disablePast || $[197] !== handleChange || $[198] !== hours || $[199] !== maxDate || $[200] !== minDate || $[201] !== minuteInterval || $[202] !== minutes || $[203] !== otherProps || $[204] !== secondInterval || $[205] !== seconds || $[206] !== showDaysOutsideCurrentMonth || $[207] !== t52 || $[208] !== time || $[209] !== type || $[210] !== value_0) {
    t54 = /*#__PURE__*/React.createElement(PrivateStaticDatePicker, _extends({}, otherProps, {
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
      onAccept: t52,
      onClose: t53
    }));
    $[194] = availableDate;
    $[195] = disableFuture;
    $[196] = disablePast;
    $[197] = handleChange;
    $[198] = hours;
    $[199] = maxDate;
    $[200] = minDate;
    $[201] = minuteInterval;
    $[202] = minutes;
    $[203] = otherProps;
    $[204] = secondInterval;
    $[205] = seconds;
    $[206] = showDaysOutsideCurrentMonth;
    $[207] = t52;
    $[208] = time;
    $[209] = type;
    $[210] = value_0;
    $[211] = t54;
  } else {
    t54 = $[211];
  }
  var t55 = fullWidth ? "block" : "inline-block";
  var t56;
  if ($[212] !== t55) {
    t56 = {
      display: t55
    };
    $[212] = t55;
    $[213] = t56;
  } else {
    t56 = $[213];
  }
  var t57;
  if ($[214] !== initLabel || $[215] !== labelIcon) {
    t57 = labelIcon ? /*#__PURE__*/React.createElement(PIconText, {
      icon: labelIcon
    }, initLabel) : initLabel;
    $[214] = initLabel;
    $[215] = labelIcon;
    $[216] = t57;
  } else {
    t57 = $[216];
  }
  var t58;
  if ($[217] !== format || $[218] !== time || $[219] !== type) {
    t58 = format ? format : getDateTimeFormat(type, time);
    $[217] = format;
    $[218] = time;
    $[219] = type;
    $[220] = t58;
  } else {
    t58 = $[220];
  }
  var t59;
  var t60;
  if ($[221] === Symbol["for"]("react.memo_cache_sentinel")) {
    t59 = function t59() {
      return setIsOpen(false);
    };
    t60 = function t60(reason) {
      return datePickerErrorRef.current = reason;
    };
    $[221] = t59;
    $[222] = t60;
  } else {
    t59 = $[221];
    t60 = $[222];
  }
  var t61;
  if ($[223] !== handleChange) {
    t61 = function t61(newValue_1) {
      return handleChange("date", newValue_1);
    };
    $[223] = handleChange;
    $[224] = t61;
  } else {
    t61 = $[224];
  }
  var t62;
  if ($[225] !== disableFuture || $[226] !== disablePast || $[227] !== disabled || $[228] !== inputValue || $[229] !== maxDate || $[230] !== minDate || $[231] !== otherProps || $[232] !== readOnly || $[233] !== showDaysOutsideCurrentMonth || $[234] !== slotProps || $[235] !== t57 || $[236] !== t58 || $[237] !== t61) {
    t62 = /*#__PURE__*/React.createElement(DesktopDatePicker, _extends({
      value: inputValue,
      label: t57,
      open: false,
      format: t58,
      disabled: disabled,
      readOnly: readOnly,
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onClose: t59,
      onError: t60,
      onChange: t61,
      slotProps: slotProps,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth
    }, otherProps));
    $[225] = disableFuture;
    $[226] = disablePast;
    $[227] = disabled;
    $[228] = inputValue;
    $[229] = maxDate;
    $[230] = minDate;
    $[231] = otherProps;
    $[232] = readOnly;
    $[233] = showDaysOutsideCurrentMonth;
    $[234] = slotProps;
    $[235] = t57;
    $[236] = t58;
    $[237] = t61;
    $[238] = t62;
  } else {
    t62 = $[238];
  }
  var t63;
  if ($[239] !== t56 || $[240] !== t62) {
    t63 = /*#__PURE__*/React.createElement("div", {
      style: t56
    }, t62);
    $[239] = t56;
    $[240] = t62;
    $[241] = t63;
  } else {
    t63 = $[241];
  }
  var t64;
  if ($[242] !== t49 || $[243] !== t51 || $[244] !== t54 || $[245] !== t63) {
    t64 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: t49,
      PopperProps: t51,
      title: t54
    }, t63);
    $[242] = t49;
    $[243] = t51;
    $[244] = t54;
    $[245] = t63;
    $[246] = t64;
  } else {
    t64 = $[246];
  }
  var t65;
  if ($[247] !== error || $[248] !== errorHelperText || $[249] !== formColWithHelperText || $[250] !== helperText || $[251] !== variant) {
    t65 = !formColWithHelperText && (helperText || error && errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[247] = error;
    $[248] = errorHelperText;
    $[249] = formColWithHelperText;
    $[250] = helperText;
    $[251] = variant;
    $[252] = t65;
  } else {
    t65 = $[252];
  }
  var t66;
  if ($[253] !== t45 || $[254] !== t48 || $[255] !== t64 || $[256] !== t65) {
    t66 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t44
    }, /*#__PURE__*/React.createElement("div", {
      className: t45,
      style: t48,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t64, t65)));
    $[253] = t45;
    $[254] = t48;
    $[255] = t64;
    $[256] = t65;
    $[257] = t66;
  } else {
    t66 = $[257];
  }
  return t66;
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
  if (useChanged(yearSelectOpen, true)) {
    if (!yearSelectOpen) {
      setActiveMonthValue(null);
    }
  }
  var leftArrowOnClickRef = useRef(undefined);
  var rightArrowOnClickRef = useRef(undefined);
  var t6;
  if ($[27] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6() {
      return function (props_0) {
        leftArrowOnClickRef.current = props_0.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props_0);
      };
    };
    $[27] = t6;
  } else {
    t6 = $[27];
  }
  var _useState9 = useState(t6),
    _useState0 = _slicedToArray(_useState9, 1),
    LeftArrowButton = _useState0[0];
  var t7;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7() {
      return function (props_1) {
        rightArrowOnClickRef.current = props_1.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props_1);
      };
    };
    $[28] = t7;
  } else {
    t7 = $[28];
  }
  var _useState1 = useState(t7),
    _useState10 = _slicedToArray(_useState1, 1),
    RightArrowButton = _useState10[0];
  var t8;
  if ($[29] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[29] = t8;
  } else {
    t8 = $[29];
  }
  var previousMonth = t8;
  var t9;
  if ($[30] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[30] = t9;
  } else {
    t9 = $[30];
  }
  var nextMonth = t9;
  var t10;
  if ($[31] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(date, times) {
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
    $[31] = t10;
  } else {
    t10 = $[31];
  }
  var timeSelectScrollToDate = t10;
  var t11;
  if ($[32] !== month) {
    t11 = function t11(year) {
      setMonth(month.set("year", year));
      setActiveMonthValue(month.set("year", year));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    };
    $[32] = month;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  var handleYearSelect = t11;
  var t12;
  if ($[34] !== month) {
    t12 = function t12(m) {
      setMonth(month.set("month", m));
      setActiveMonthValue(month.set("month", m));
      setMonthSelectOpen(false);
    };
    $[34] = month;
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  var handleMonthSelect = t12;
  var t13;
  if ($[36] !== value) {
    t13 = function t13(props_2) {
      return /*#__PURE__*/React.createElement(PickersDay, _extends({}, props_2, {
        selected: props_2.day.isSame(value, "date")
      }));
    };
    $[36] = value;
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  var handleRenderDay = t13;
  var t14;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = {
      timeSelectScrollToDate: timeSelectScrollToDate
    };
    $[38] = t14;
  } else {
    t14 = $[38];
  }
  useForwardRef(ref, t14);
  var t15;
  if ($[39] !== availableDate || $[40] !== _onChange || $[41] !== time || $[42] !== type) {
    t15 = function t15(date_0, label) {
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
    $[39] = availableDate;
    $[40] = _onChange;
    $[41] = time;
    $[42] = type;
    $[43] = t15;
  } else {
    t15 = $[43];
  }
  var getActionButton = t15;
  var t16;
  if ($[44] !== type) {
    t16 = classNames("PrivateStaticDateTimePicker", type);
    $[44] = type;
    $[45] = t16;
  } else {
    t16 = $[45];
  }
  var t17;
  if ($[46] !== LeftArrowButton || $[47] !== RightArrowButton || $[48] !== activeMonthValue || $[49] !== availableDate || $[50] !== disableFuture || $[51] !== disablePast || $[52] !== getActionButton || $[53] !== handleMonthSelect || $[54] !== handleRenderDay || $[55] !== handleYearSelect || $[56] !== maxDate || $[57] !== minDate || $[58] !== month || $[59] !== monthSelectOpen || $[60] !== _onChange || $[61] !== _onMonthChange || $[62] !== props || $[63] !== type || $[64] !== value || $[65] !== yearSelectOpen) {
    t17 = type !== "time" && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Grid, {
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
    $[46] = LeftArrowButton;
    $[47] = RightArrowButton;
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
    $[66] = t17;
  } else {
    t17 = $[66];
  }
  var t18;
  if ($[67] !== availableDate || $[68] !== hours || $[69] !== minuteInterval || $[70] !== minutes || $[71] !== _onChange || $[72] !== onClose || $[73] !== secondInterval || $[74] !== seconds || $[75] !== time || $[76] !== type || $[77] !== value) {
    t18 = time && /*#__PURE__*/React.createElement(PrivateTimeSection, {
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
    $[78] = t18;
  } else {
    t18 = $[78];
  }
  var t19;
  if ($[79] !== t16 || $[80] !== t17 || $[81] !== t18) {
    t19 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      className: t16
    }, t17, t18);
    $[79] = t16;
    $[80] = t17;
    $[81] = t18;
    $[82] = t19;
  } else {
    t19 = $[82];
  }
  return t19;
};
function _temp$i() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}var getFinalValue$7 = function getFinalValue(value) {
  return value || null;
};insertStyle(".PrivateDateTimePicker .input-text-field.align-left .MuiInputBase-input{text-align:left}.PrivateDateTimePicker .input-text-field.align-center .MuiInputBase-input{text-align:center}.PrivateDateTimePicker .input-text-field.align-right .MuiInputBase-input{text-align:right}");var _excluded$a = ["ref", "variant", "size", "color", "focused", "labelShrink", "fullWidth", "name", "type", "time", "value", "data", "label", "labelIcon", "format", "formValueFormat", "required", "readOnly", "disabled", "width", "error", "helperText", "minDate", "maxDate", "disableFuture", "disablePast", "exceptValue", "icon", "startAdornment", "endAdornment", "align", "hours", "minutes", "seconds", "minuteInterval", "secondInterval", "enableKeyboardInput", "hidden", "showDaysOutsideCurrentMonth", "onChange", "onValidate", "className", "style", "sx"];
var PrivateDateTimePicker = function PrivateDateTimePicker(t0) {
  var $ = c(246);
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
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    openValue = _useState4[0],
    setOpenValue = _useState4[1];
  var _useState5 = useState(initError),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  useChanged(initError) && setError(initError);
  var _useState7 = useState(initData),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    setData = _useState8[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState9 = useState(finalInitDisabled),
    _useState0 = _slicedToArray(_useState9, 2),
    disabled = _useState0[0],
    setDisabled = _useState0[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState1 = useState(initHidden),
    _useState10 = _slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    timeError = _useState12[0],
    setTimeError = _useState12[1];
  var _useState13 = useState(),
    _useState14 = _slicedToArray(_useState13, 2),
    errorHelperText = _useState14[0],
    setErrorHelperText = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    datePickerError = _useState16[0],
    setDatePickerError = _useState16[1];
  var t4;
  if ($[46] !== initFormat || $[47] !== time || $[48] !== type) {
    t4 = initFormat ? initFormat : getDateTimeFormat(type, time);
    $[46] = initFormat;
    $[47] = time;
    $[48] = type;
    $[49] = t4;
  } else {
    t4 = $[49];
  }
  var format = t4;
  var t5 = !!disablePast;
  var t6 = !!disableFuture;
  var t7;
  if ($[50] !== maxDate || $[51] !== minDate || $[52] !== t5 || $[53] !== t6) {
    t7 = makeAvailableDate(minDate, maxDate, t5, t6);
    $[50] = maxDate;
    $[51] = minDate;
    $[52] = t5;
    $[53] = t6;
    $[54] = t7;
  } else {
    t7 = $[54];
  }
  var availableDate = t7;
  var t8;
  if ($[55] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[55] = t8;
  } else {
    t8 = $[55];
  }
  var setErrorErrorHelperText = t8;
  var t9;
  if ($[56] !== datePickerError || $[57] !== onValidate || $[58] !== required || $[59] !== timeError) {
    t9 = function t9(value) {
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
      if (onValidate) {
        var onValidateResult = onValidate(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[56] = datePickerError;
    $[57] = onValidate;
    $[58] = required;
    $[59] = timeError;
    $[60] = t9;
  } else {
    t9 = $[60];
  }
  var validate = t9;
  var t10;
  if ($[61] !== initValue) {
    t10 = getFinalValue$7(initValue);
    $[61] = initValue;
    $[62] = t10;
  } else {
    t10 = $[62];
  }
  var _useState17 = useState(t10),
    _useState18 = _slicedToArray(_useState17, 2),
    value_0 = _useState18[0],
    setValue = _useState18[1];
  useChanged(initValue) && setValue(getFinalValue$7(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t11;
  if ($[63] !== availableDate || $[64] !== error || $[65] !== name || $[66] !== onChange || $[67] !== onValueChange || $[68] !== time || $[69] !== type || $[70] !== validate || $[71] !== valueRef) {
    t11 = function t11(newValue) {
      var finalValue = getFinalValue$7(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
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
    $[63] = availableDate;
    $[64] = error;
    $[65] = name;
    $[66] = onChange;
    $[67] = onValueChange;
    $[68] = time;
    $[69] = type;
    $[70] = validate;
    $[71] = valueRef;
    $[72] = t11;
  } else {
    t11 = $[72];
  }
  var updateValue = t11;
  var _useState19 = useState(value_0),
    _useState20 = _slicedToArray(_useState19, 2),
    inputValue = _useState20[0],
    setInputValue = _useState20[1];
  useChanged(value_0) && setInputValue(value_0);
  if (useChanged(timeError)) {
    if (error && !timeError) {
      validate(value_0);
    }
  }
  if (useChanged(open)) {
    if (open) {
      setOpenValue(value_0);
    } else {
      if (openValue !== value_0) {
        var runOnRequestSearchSubmit;
        if (openValue && value_0) {
          runOnRequestSearchSubmit = !openValue.isSame(value_0, "second");
        } else {
          runOnRequestSearchSubmit = true;
        }
        if (runOnRequestSearchSubmit) {
          onRequestSearchSubmit(name, value_0);
        }
      }
    }
  }
  var t12;
  if ($[73] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12() {
      var _textFieldInputRef$cu;
      (_textFieldInputRef$cu = textFieldInputRef.current) === null || _textFieldInputRef$cu === void 0 || _textFieldInputRef$cu.focus();
    };
    $[73] = t12;
  } else {
    t12 = $[73];
  }
  var focus = t12;
  var t13;
  if ($[74] !== name) {
    t13 = function t13() {
      return name;
    };
    $[74] = name;
    $[75] = t13;
  } else {
    t13 = $[75];
  }
  var t14;
  if ($[76] !== initValue) {
    t14 = function t14() {
      return getFinalValue$7(initValue);
    };
    $[76] = initValue;
    $[77] = t14;
  } else {
    t14 = $[77];
  }
  var t15;
  if ($[78] !== initValue || $[79] !== updateValue) {
    t15 = function t15() {
      return updateValue(initValue);
    };
    $[78] = initValue;
    $[79] = updateValue;
    $[80] = t15;
  } else {
    t15 = $[80];
  }
  var t16;
  if ($[81] !== valueRef) {
    t16 = function t16() {
      return valueRef.current;
    };
    $[81] = valueRef;
    $[82] = t16;
  } else {
    t16 = $[82];
  }
  var t17;
  if ($[83] !== dataRef) {
    t17 = function t17() {
      return dataRef.current;
    };
    $[83] = dataRef;
    $[84] = t17;
  } else {
    t17 = $[84];
  }
  var t18;
  if ($[85] !== exceptValue) {
    t18 = function t18() {
      return !!exceptValue;
    };
    $[85] = exceptValue;
    $[86] = t18;
  } else {
    t18 = $[86];
  }
  var t19;
  if ($[87] !== disabled) {
    t19 = function t19() {
      return !!disabled;
    };
    $[87] = disabled;
    $[88] = t19;
  } else {
    t19 = $[88];
  }
  var t20;
  if ($[89] !== hidden) {
    t20 = function t20() {
      return !!hidden;
    };
    $[89] = hidden;
    $[90] = t20;
  } else {
    t20 = $[90];
  }
  var t21;
  if ($[91] !== validate || $[92] !== valueRef) {
    t21 = function t21() {
      return validate(valueRef.current);
    };
    $[91] = validate;
    $[92] = valueRef;
    $[93] = t21;
  } else {
    t21 = $[93];
  }
  var t22;
  if ($[94] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = function t22(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[94] = t22;
  } else {
    t22 = $[94];
  }
  var t23;
  if ($[95] !== initFormValueFormat || $[96] !== time || $[97] !== type) {
    t23 = function t23() {
      return initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time);
    };
    $[95] = initFormValueFormat;
    $[96] = time;
    $[97] = type;
    $[98] = t23;
  } else {
    t23 = $[98];
  }
  var t24;
  if ($[99] !== t13 || $[100] !== t14 || $[101] !== t15 || $[102] !== t16 || $[103] !== t17 || $[104] !== t18 || $[105] !== t19 || $[106] !== t20 || $[107] !== t21 || $[108] !== t23 || $[109] !== updateValue) {
    t24 = {
      getType: _temp$h,
      getName: t13,
      getReset: t14,
      reset: t15,
      getValue: t16,
      setValue: updateValue,
      getData: t17,
      setData: setData,
      isExceptValue: t18,
      isDisabled: t19,
      setDisabled: setDisabled,
      isHidden: t20,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t21,
      setError: t22,
      getFormValueFormat: t23
    };
    $[99] = t13;
    $[100] = t14;
    $[101] = t15;
    $[102] = t16;
    $[103] = t17;
    $[104] = t18;
    $[105] = t19;
    $[106] = t20;
    $[107] = t21;
    $[108] = t23;
    $[109] = updateValue;
    $[110] = t24;
  } else {
    t24 = $[110];
  }
  var commands = t24;
  var t25;
  if ($[111] !== id || $[112] !== onAddValueItem) {
    t25 = function t25(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[111] = id;
    $[112] = onAddValueItem;
    $[113] = t25;
  } else {
    t25 = $[113];
  }
  var t26;
  if ($[114] !== id || $[115] !== onRemoveValueItem) {
    t26 = function t26() {
      return onRemoveValueItem(id);
    };
    $[114] = id;
    $[115] = onRemoveValueItem;
    $[116] = t26;
  } else {
    t26 = $[116];
  }
  useForwardRef(ref, commands, t25, t26);
  var t27;
  if ($[117] !== availableDate || $[118] !== name || $[119] !== onRequestSearchSubmit || $[120] !== onValueChangeByUser || $[121] !== open || $[122] !== time || $[123] !== type || $[124] !== updateValue) {
    t27 = function t27(unit, newValue_0, keyboardInputValue) {
      var isUpdateValue = true;
      if (notEmpty(keyboardInputValue)) {
        if (newValue_0) {
          if (!newValue_0.isValid()) {
            isUpdateValue = false;
          }
        }
      }
      var finalValue_0 = newValue_0;
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
            runOnRequestSearchSubmit_0 = !open;
            setOpen(false);
          }
        } else {
          if (time) {
            if (time === unit) {
              setOpen(false);
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
            bb262: switch (unit) {
              case "date":
              case "action_date":
                {
                  var _privateStaticDateTim;
                  (_privateStaticDateTim = privateStaticDateTimePickerRef.current) === null || _privateStaticDateTim === void 0 || _privateStaticDateTim.timeSelectScrollToDate(finalValue_0);
                  break bb262;
                }
              case "hour":
                {
                  var _privateStaticDateTim2;
                  (_privateStaticDateTim2 = privateStaticDateTimePickerRef.current) === null || _privateStaticDateTim2 === void 0 || _privateStaticDateTim2.timeSelectScrollToDate(finalValue_0, ["minute", "second"]);
                  break bb262;
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
    $[117] = availableDate;
    $[118] = name;
    $[119] = onRequestSearchSubmit;
    $[120] = onValueChangeByUser;
    $[121] = open;
    $[122] = time;
    $[123] = type;
    $[124] = updateValue;
    $[125] = t27;
  } else {
    t27 = $[125];
  }
  var handleChange = t27;
  var t28;
  if ($[126] === Symbol["for"]("react.memo_cache_sentinel")) {
    t28 = function t28() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[126] = t28;
  } else {
    t28 = $[126];
  }
  var handleContainerFocus = t28;
  var t29;
  if ($[127] === Symbol["for"]("react.memo_cache_sentinel")) {
    t29 = function t29() {
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
    $[127] = t29;
  } else {
    t29 = $[127];
  }
  var handleContainerBlur = t29;
  var t30;
  if ($[128] === Symbol["for"]("react.memo_cache_sentinel")) {
    t30 = function t30() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[128] = t30;
  } else {
    t30 = $[128];
  }
  var handleContainerMouseDown = t30;
  var t31;
  if ($[129] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31(ref_0) {
      textFieldInputRef.current = ref_0;
    };
    $[129] = t31;
  } else {
    t31 = $[129];
  }
  var slotPropsInputRef = t31;
  var muiInputProps;
  if ($[130] !== endAdornment || $[131] !== icon || $[132] !== startAdornment) {
    muiInputProps = {
      endAdornment: undefined
    };
    if (startAdornment || icon) {
      var _t2;
      if ($[134] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(PIcon, {
          size: "small"
        }, icon));
        $[134] = icon;
        $[135] = _t2;
      } else {
        _t2 = $[135];
      }
      var _t3;
      if ($[136] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "start"
        }, startAdornment);
        $[136] = startAdornment;
        $[137] = _t3;
      } else {
        _t3 = $[137];
      }
      var _t4;
      if ($[138] !== _t2 || $[139] !== _t3) {
        _t4 = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3);
        $[138] = _t2;
        $[139] = _t3;
        $[140] = _t4;
      } else {
        _t4 = $[140];
      }
      muiInputProps.startAdornment = _t4;
    }
    if (endAdornment) {
      var _t5;
      if ($[141] !== endAdornment) {
        _t5 = endAdornment && /*#__PURE__*/React.createElement(InputAdornment, {
          position: "end"
        }, endAdornment);
        $[141] = endAdornment;
        $[142] = _t5;
      } else {
        _t5 = $[142];
      }
      var _t6;
      if ($[143] !== _t5) {
        _t6 = /*#__PURE__*/React.createElement(React.Fragment, null, _t5);
        $[143] = _t5;
        $[144] = _t6;
      } else {
        _t6 = $[144];
      }
      muiInputProps.endAdornment = _t6;
    }
    $[130] = endAdornment;
    $[131] = icon;
    $[132] = startAdornment;
    $[133] = muiInputProps;
  } else {
    muiInputProps = $[133];
  }
  var slotPropsMuiInputProps = muiInputProps;
  var readOnly_0 = !enableKeyboardInput;
  var t32 = "align-".concat(align);
  var t33;
  if ($[145] !== t32) {
    t33 = classNames("input-text-field", t32);
    $[145] = t32;
    $[146] = t33;
  } else {
    t33 = $[146];
  }
  var t34;
  if ($[147] !== labelShrink) {
    t34 = labelShrink ? {
      shrink: true
    } : undefined;
    $[147] = labelShrink;
    $[148] = t34;
  } else {
    t34 = $[148];
  }
  var t35 = readOnly_0 ? -1 : undefined;
  var t36;
  if ($[149] !== readOnly_0 || $[150] !== t35) {
    t36 = {
      readOnly: readOnly_0,
      tabIndex: t35
    };
    $[149] = readOnly_0;
    $[150] = t35;
    $[151] = t36;
  } else {
    t36 = $[151];
  }
  var t37 = !!error || !!timeError;
  var t38;
  if ($[152] !== initStyle || $[153] !== width) {
    t38 = width != null ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      width: width
    }) : initStyle;
    $[152] = initStyle;
    $[153] = width;
    $[154] = t38;
  } else {
    t38 = $[154];
  }
  var t39;
  var t40;
  if ($[155] === Symbol["for"]("react.memo_cache_sentinel")) {
    t39 = function t39() {
      return setOpen(true);
    };
    t40 = function t40() {
      return setOpen(true);
    };
    $[155] = t39;
    $[156] = t40;
  } else {
    t39 = $[155];
    t40 = $[156];
  }
  var t41;
  if ($[157] !== color || $[158] !== focused || $[159] !== fullWidth || $[160] !== required || $[161] !== size || $[162] !== slotPropsMuiInputProps || $[163] !== sx || $[164] !== t33 || $[165] !== t34 || $[166] !== t36 || $[167] !== t37 || $[168] !== t38 || $[169] !== variant) {
    t41 = {
      textField: {
        className: t33,
        inputRef: slotPropsInputRef,
        variant: variant,
        size: size,
        color: color,
        focused: focused,
        InputLabelProps: t34,
        InputProps: slotPropsMuiInputProps,
        inputProps: t36,
        required: required,
        fullWidth: fullWidth,
        helperText: undefined,
        error: t37,
        style: t38,
        sx: sx,
        onFocus: t39,
        onClick: t40
      }
    };
    $[157] = color;
    $[158] = focused;
    $[159] = fullWidth;
    $[160] = required;
    $[161] = size;
    $[162] = slotPropsMuiInputProps;
    $[163] = sx;
    $[164] = t33;
    $[165] = t34;
    $[166] = t36;
    $[167] = t37;
    $[168] = t38;
    $[169] = variant;
    $[170] = t41;
  } else {
    t41 = $[170];
  }
  var slotProps = t41;
  var t42 = error && helperText ? 8 : -14;
  var t43;
  if ($[171] !== t42) {
    t43 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t42]
          }
        }]
      }
    };
    $[171] = t42;
    $[172] = t43;
  } else {
    t43 = $[172];
  }
  var tooltipSlotProps = t43;
  var t44;
  if ($[173] === Symbol["for"]("react.memo_cache_sentinel")) {
    t44 = function t44() {
      return setOpen(false);
    };
    $[173] = t44;
  } else {
    t44 = $[173];
  }
  var t45;
  if ($[174] !== className) {
    t45 = classNames(className, "PrivateDateTimePicker");
    $[174] = className;
    $[175] = t45;
  } else {
    t45 = $[175];
  }
  var t46 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t47 = fullWidth ? 1 : undefined;
  var t48;
  if ($[176] !== t46 || $[177] !== t47) {
    t48 = {
      display: t46,
      flex: t47
    };
    $[176] = t46;
    $[177] = t47;
    $[178] = t48;
  } else {
    t48 = $[178];
  }
  var t49 = disabled || readOnly ? false : open;
  var t50;
  if ($[179] !== time) {
    t50 = function t50() {
      return !time && setOpen(false);
    };
    $[179] = time;
    $[180] = t50;
  } else {
    t50 = $[180];
  }
  var t51;
  if ($[181] === Symbol["for"]("react.memo_cache_sentinel")) {
    t51 = function t51() {
      return setOpen(false);
    };
    $[181] = t51;
  } else {
    t51 = $[181];
  }
  var t52;
  if ($[182] !== availableDate || $[183] !== disableFuture || $[184] !== disablePast || $[185] !== handleChange || $[186] !== hours || $[187] !== maxDate || $[188] !== minDate || $[189] !== minuteInterval || $[190] !== minutes || $[191] !== otherProps || $[192] !== secondInterval || $[193] !== seconds || $[194] !== showDaysOutsideCurrentMonth || $[195] !== t50 || $[196] !== time || $[197] !== type || $[198] !== value_0) {
    t52 = /*#__PURE__*/React.createElement(PrivateStaticDateTimePicker, _extends({}, otherProps, {
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
      onAccept: t50,
      onClose: t51
    }));
    $[182] = availableDate;
    $[183] = disableFuture;
    $[184] = disablePast;
    $[185] = handleChange;
    $[186] = hours;
    $[187] = maxDate;
    $[188] = minDate;
    $[189] = minuteInterval;
    $[190] = minutes;
    $[191] = otherProps;
    $[192] = secondInterval;
    $[193] = seconds;
    $[194] = showDaysOutsideCurrentMonth;
    $[195] = t50;
    $[196] = time;
    $[197] = type;
    $[198] = value_0;
    $[199] = t52;
  } else {
    t52 = $[199];
  }
  var t53 = fullWidth ? "block" : "inline-block";
  var t54;
  if ($[200] !== t53) {
    t54 = {
      display: t53
    };
    $[200] = t53;
    $[201] = t54;
  } else {
    t54 = $[201];
  }
  var t55;
  if ($[202] !== initLabel || $[203] !== labelIcon) {
    t55 = labelIcon ? /*#__PURE__*/React.createElement(PIconText, {
      icon: labelIcon
    }, initLabel) : initLabel;
    $[202] = initLabel;
    $[203] = labelIcon;
    $[204] = t55;
  } else {
    t55 = $[204];
  }
  var t56;
  if ($[205] === Symbol["for"]("react.memo_cache_sentinel")) {
    t56 = function t56() {
      return setOpen(false);
    };
    $[205] = t56;
  } else {
    t56 = $[205];
  }
  var t57;
  if ($[206] !== disablePast || $[207] !== inputValue || $[208] !== time) {
    t57 = function t57(reason, v) {
      if (disablePast) {
        var formatStr;
        bb405: switch (time) {
          case "hour":
            {
              formatStr = "YYYY-MM-DD HH";
              break bb405;
            }
          case "minute":
            {
              formatStr = "YYYY-MM-DD HH:mm";
              break bb405;
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
    $[206] = disablePast;
    $[207] = inputValue;
    $[208] = time;
    $[209] = t57;
  } else {
    t57 = $[209];
  }
  var t58;
  if ($[210] !== handleChange) {
    t58 = function t58(newValue_1) {
      return handleChange("date", newValue_1);
    };
    $[210] = handleChange;
    $[211] = t58;
  } else {
    t58 = $[211];
  }
  var t59;
  if ($[212] !== disableFuture || $[213] !== disablePast || $[214] !== disabled || $[215] !== format || $[216] !== inputValue || $[217] !== maxDate || $[218] !== minDate || $[219] !== otherProps || $[220] !== readOnly || $[221] !== showDaysOutsideCurrentMonth || $[222] !== slotProps || $[223] !== t55 || $[224] !== t57 || $[225] !== t58) {
    t59 = /*#__PURE__*/React.createElement(DesktopDateTimePicker, _extends({
      value: inputValue,
      label: t55,
      open: false,
      format: format,
      disabled: disabled,
      readOnly: readOnly,
      minDate: minDate,
      maxDate: maxDate,
      view: "minutes",
      disablePast: disablePast,
      disableFuture: disableFuture,
      onClose: t56,
      onError: t57,
      onChange: t58,
      slotProps: slotProps,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth
    }, otherProps));
    $[212] = disableFuture;
    $[213] = disablePast;
    $[214] = disabled;
    $[215] = format;
    $[216] = inputValue;
    $[217] = maxDate;
    $[218] = minDate;
    $[219] = otherProps;
    $[220] = readOnly;
    $[221] = showDaysOutsideCurrentMonth;
    $[222] = slotProps;
    $[223] = t55;
    $[224] = t57;
    $[225] = t58;
    $[226] = t59;
  } else {
    t59 = $[226];
  }
  var t60;
  if ($[227] !== t54 || $[228] !== t59) {
    t60 = /*#__PURE__*/React.createElement("div", {
      style: t54
    }, t59);
    $[227] = t54;
    $[228] = t59;
    $[229] = t60;
  } else {
    t60 = $[229];
  }
  var t61;
  if ($[230] !== t49 || $[231] !== t52 || $[232] !== t60 || $[233] !== tooltipSlotProps) {
    t61 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: t49,
      slotProps: tooltipSlotProps,
      title: t52
    }, t60);
    $[230] = t49;
    $[231] = t52;
    $[232] = t60;
    $[233] = tooltipSlotProps;
    $[234] = t61;
  } else {
    t61 = $[234];
  }
  var t62;
  if ($[235] !== error || $[236] !== errorHelperText || $[237] !== formColWithHelperText || $[238] !== helperText || $[239] !== variant) {
    t62 = !formColWithHelperText && (helperText || error && errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[235] = error;
    $[236] = errorHelperText;
    $[237] = formColWithHelperText;
    $[238] = helperText;
    $[239] = variant;
    $[240] = t62;
  } else {
    t62 = $[240];
  }
  var t63;
  if ($[241] !== t45 || $[242] !== t48 || $[243] !== t61 || $[244] !== t62) {
    t63 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t44
    }, /*#__PURE__*/React.createElement("div", {
      className: t45,
      style: t48,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t61, t62)));
    $[241] = t45;
    $[242] = t48;
    $[243] = t61;
    $[244] = t62;
    $[245] = t63;
  } else {
    t63 = $[245];
  }
  return t63;
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
  var $ = c(58);
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
  useChanged(initValue) && setValue(initValue);
  var t4;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = new Date().getFullYear();
    $[0] = t4;
  } else {
    t4 = $[0];
  }
  var nowYear = t4;
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
  var t5;
  if ($[1] !== maxAvailableYear || $[2] !== minAvailableYear) {
    t5 = {
      now: nowYear,
      available: {
        min: minAvailableYear,
        max: maxAvailableYear
      }
    };
    $[1] = maxAvailableYear;
    $[2] = minAvailableYear;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var yearInfo = t5;
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
    if ($[4] !== _t || $[5] !== _t2) {
      _t3 = [_t, _t2];
      $[4] = _t;
      $[5] = _t2;
      $[6] = _t3;
    } else {
      _t3 = $[6];
    }
    displayValue = _t3;
  } else {
    var _t4;
    if ($[7] !== defaultYear) {
      _t4 = [defaultYear, defaultYear];
      $[7] = defaultYear;
      $[8] = _t4;
    } else {
      _t4 = $[8];
    }
    displayValue = _t4;
  }
  var t6 = displayValue[0] < yearInfo.available.min || displayValue[0] > yearInfo.available.max;
  var t7 = displayValue[1] < yearInfo.available.min || displayValue[1] > yearInfo.available.max;
  var t8;
  if ($[9] !== t6 || $[10] !== t7) {
    t8 = [t6, t7];
    $[9] = t6;
    $[10] = t7;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  var displayValueError = t8;
  var t9;
  if ($[12] !== displayValue || $[13] !== displayValueError) {
    t9 = {
      value: displayValue,
      error: displayValueError
    };
    $[12] = displayValue;
    $[13] = displayValueError;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  var displayInfo = t9;
  var t10;
  if ($[15] !== onChange || $[16] !== yearInfo.available.max || $[17] !== yearInfo.available.min) {
    t10 = function t10(fromYear, toYear, label) {
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
    $[15] = onChange;
    $[16] = yearInfo.available.max;
    $[17] = yearInfo.available.min;
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var getActionButton = t10;
  var t11 = yearInfo.now - 2;
  var t12;
  if ($[19] !== getActionButton || $[20] !== t11 || $[21] !== yearInfo.now) {
    t12 = getActionButton(t11, yearInfo.now, "\uCD5C\uADFC 3\uB144");
    $[19] = getActionButton;
    $[20] = t11;
    $[21] = yearInfo.now;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  var t13 = yearInfo.now - 4;
  var t14;
  if ($[23] !== getActionButton || $[24] !== t13 || $[25] !== yearInfo.now) {
    t14 = getActionButton(t13, yearInfo.now, "\uCD5C\uADFC 5\uB144");
    $[23] = getActionButton;
    $[24] = t13;
    $[25] = yearInfo.now;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  var t15 = yearInfo.now - 9;
  var t16;
  if ($[27] !== getActionButton || $[28] !== t15 || $[29] !== yearInfo.now) {
    t16 = getActionButton(t15, yearInfo.now, "\uCD5C\uADFC 10\uB144");
    $[27] = getActionButton;
    $[28] = t15;
    $[29] = yearInfo.now;
    $[30] = t16;
  } else {
    t16 = $[30];
  }
  var t17;
  if ($[31] !== t12 || $[32] !== t14 || $[33] !== t16) {
    t17 = /*#__PURE__*/React.createElement(StyledActionContainer$1, null, t12, t14, t16);
    $[31] = t12;
    $[32] = t14;
    $[33] = t16;
    $[34] = t17;
  } else {
    t17 = $[34];
  }
  var actionButtons = t17;
  var t18;
  if ($[35] !== onChange || $[36] !== selectType || $[37] !== value || $[38] !== yearInfo.available.max || $[39] !== yearInfo.available.min) {
    t18 = function t18(valueYear) {
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
    $[35] = onChange;
    $[36] = selectType;
    $[37] = value;
    $[38] = yearInfo.available.max;
    $[39] = yearInfo.available.min;
    $[40] = t18;
  } else {
    t18 = $[40];
  }
  var handleYearChange = t18;
  var t19;
  if ($[41] !== displayInfo.error || $[42] !== displayInfo.value || $[43] !== hideHeader) {
    t19 = !hideHeader && /*#__PURE__*/React.createElement(StyledTitleContainer$1, null, displayInfo.error[0] ? /*#__PURE__*/React.createElement(StyledYearError, null, displayInfo.value[0], "\uB144") : /*#__PURE__*/React.createElement(StyledYear, null, displayInfo.value[0], "\uB144"), /*#__PURE__*/React.createElement(StyledTitleGap, null, "~"), displayInfo.error[1] ? /*#__PURE__*/React.createElement(StyledYearError, null, displayInfo.value[1], "\uB144") : /*#__PURE__*/React.createElement(StyledYear, null, displayInfo.value[1], "\uB144"));
    $[41] = displayInfo.error;
    $[42] = displayInfo.value;
    $[43] = hideHeader;
    $[44] = t19;
  } else {
    t19 = $[44];
  }
  var t20;
  if ($[45] !== disableFuture || $[46] !== disablePast || $[47] !== displayInfo.value || $[48] !== handleYearChange || $[49] !== maxYear || $[50] !== minYear || $[51] !== selectType || $[52] !== value) {
    t20 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateYearRangePickerYearList, {
      value: value,
      selectType: selectType,
      displayValue: displayInfo.value,
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onChange: handleYearChange
    }));
    $[45] = disableFuture;
    $[46] = disablePast;
    $[47] = displayInfo.value;
    $[48] = handleYearChange;
    $[49] = maxYear;
    $[50] = minYear;
    $[51] = selectType;
    $[52] = value;
    $[53] = t20;
  } else {
    t20 = $[53];
  }
  var t21;
  if ($[54] !== actionButtons || $[55] !== t19 || $[56] !== t20) {
    t21 = /*#__PURE__*/React.createElement("div", {
      className: "PrivateYearRangePicker"
    }, t19, t20, actionButtons);
    $[54] = actionButtons;
    $[55] = t19;
    $[56] = t20;
    $[57] = t21;
  } else {
    t21 = $[57];
  }
  return t21;
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
  var $ = c(37);
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
  useChanged(initValue) && setValue(initValue);
  var t4;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = new Date().getFullYear();
    $[0] = t4;
  } else {
    t4 = $[0];
  }
  var nowYear = t4;
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
  var t5;
  if ($[1] !== maxAvailableYear || $[2] !== minAvailableYear) {
    t5 = {
      now: nowYear,
      available: {
        min: minAvailableYear,
        max: maxAvailableYear
      }
    };
    $[1] = maxAvailableYear;
    $[2] = minAvailableYear;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var yearInfo = t5;
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
  var t6;
  if ($[4] !== displayError || $[5] !== displayYear) {
    t6 = {
      year: displayYear,
      error: displayError
    };
    $[4] = displayError;
    $[5] = displayYear;
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  var displayInfo = t6;
  var t7;
  if ($[7] !== onChangeRef || $[8] !== yearInfo.available.max || $[9] !== yearInfo.available.min) {
    t7 = function t7(v) {
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
    $[7] = onChangeRef;
    $[8] = yearInfo.available.max;
    $[9] = yearInfo.available.min;
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  var handleYearChange = t7;
  var t8;
  if ($[11] !== displayInfo.year || $[12] !== onChangeRef) {
    t8 = function t8() {
      if (displayInfo.year) {
        var newValue = displayInfo.year - 1;
        setValue(newValue);
        onChangeRef.current(newValue, false);
      }
    };
    $[11] = displayInfo.year;
    $[12] = onChangeRef;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  var handlePrevClick = t8;
  var t9;
  if ($[14] !== displayInfo.year || $[15] !== onChangeRef) {
    t9 = function t9() {
      if (displayInfo.year) {
        var newValue_0 = displayInfo.year + 1;
        setValue(newValue_0);
        onChangeRef.current(newValue_0, false);
      }
    };
    $[14] = displayInfo.year;
    $[15] = onChangeRef;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var handleNextClick = t9;
  var t10;
  if ($[17] !== displayInfo.error || $[18] !== displayInfo.year || $[19] !== handleNextClick || $[20] !== handlePrevClick || $[21] !== hideHeader || $[22] !== yearInfo.available.max || $[23] !== yearInfo.available.min) {
    t10 = !hideHeader && /*#__PURE__*/React.createElement(StyledTitleContainer, null, /*#__PURE__*/React.createElement(StyledIconButton$1, {
      disabled: displayInfo.year <= yearInfo.available.min,
      onClick: handlePrevClick
    }, /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowLeft")), displayInfo.error ? /*#__PURE__*/React.createElement(StyledYearMonthError$1, null, displayInfo.year, "\uB144") : /*#__PURE__*/React.createElement(StyledYearMonth$1, null, displayInfo.year, "\uB144"), /*#__PURE__*/React.createElement(StyledIconButton$1, {
      disabled: displayInfo.year >= yearInfo.available.max,
      onClick: handleNextClick
    }, /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowRight")));
    $[17] = displayInfo.error;
    $[18] = displayInfo.year;
    $[19] = handleNextClick;
    $[20] = handlePrevClick;
    $[21] = hideHeader;
    $[22] = yearInfo.available.max;
    $[23] = yearInfo.available.min;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  var t11;
  if ($[25] !== disableFuture || $[26] !== disablePast || $[27] !== handleYearChange || $[28] !== maxYear || $[29] !== minYear || $[30] !== selectFromYear || $[31] !== selectToYear || $[32] !== value) {
    t11 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateYearPickerYearList, {
      value: value,
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      selectFromYear: selectFromYear,
      selectToYear: selectToYear,
      onChange: handleYearChange
    }));
    $[25] = disableFuture;
    $[26] = disablePast;
    $[27] = handleYearChange;
    $[28] = maxYear;
    $[29] = minYear;
    $[30] = selectFromYear;
    $[31] = selectToYear;
    $[32] = value;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  var t12;
  if ($[34] !== t10 || $[35] !== t11) {
    t12 = /*#__PURE__*/React.createElement("div", {
      className: "PrivateYearPicker"
    }, t10, t11);
    $[34] = t10;
    $[35] = t11;
    $[36] = t12;
  } else {
    t12 = $[36];
  }
  return t12;
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
  var $ = c(78);
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
  useChanged(initValue) && setValue(initValue);
  var nowValue;
  var t4;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    nowValue = dateToValue$5(dayjs());
    t4 = valueToYm$3(nowValue);
    $[0] = nowValue;
    $[1] = t4;
  } else {
    nowValue = $[0];
    t4 = $[1];
  }
  var nowYm = t4;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm$3(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t5;
  if ($[2] !== minAvailableValue) {
    t5 = valueToYm$3(minAvailableValue);
    $[2] = minAvailableValue;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var minAvailableYm = t5;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm$3(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t6;
  if ($[4] !== maxAvailableValue) {
    t6 = valueToYm$3(maxAvailableValue);
    $[4] = maxAvailableValue;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var maxAvailableYm = t6;
  var t7;
  if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = {
      value: nowValue,
      ym: nowYm
    };
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var t8;
  if ($[7] !== minAvailableValue || $[8] !== minAvailableYm) {
    t8 = {
      value: minAvailableValue,
      ym: minAvailableYm
    };
    $[7] = minAvailableValue;
    $[8] = minAvailableYm;
    $[9] = t8;
  } else {
    t8 = $[9];
  }
  var t9;
  if ($[10] !== maxAvailableValue || $[11] !== maxAvailableYm) {
    t9 = {
      value: maxAvailableValue,
      ym: maxAvailableYm
    };
    $[10] = maxAvailableValue;
    $[11] = maxAvailableYm;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  var t10;
  if ($[13] !== t8 || $[14] !== t9) {
    t10 = {
      now: t7,
      available: {
        min: t8,
        max: t9
      }
    };
    $[13] = t8;
    $[14] = t9;
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  var dateInfo = t10;
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
  var t11;
  if ($[16] !== displayValue) {
    t11 = valueToDate$4(displayValue);
    $[16] = displayValue;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  var displayValueDate = t11;
  var displayValueYm = displayValue.year * 100 + displayValue.month;
  var displayValueError = displayValueYm < dateInfo.available.min.ym || displayValueYm > dateInfo.available.max.ym;
  var t12;
  if ($[18] !== displayValue || $[19] !== displayValueDate || $[20] !== displayValueError || $[21] !== displayValueYm) {
    t12 = {
      value: displayValue,
      date: displayValueDate,
      ym: displayValueYm,
      error: displayValueError
    };
    $[18] = displayValue;
    $[19] = displayValueDate;
    $[20] = displayValueError;
    $[21] = displayValueYm;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  var displayInfo = t12;
  var t13;
  if ($[23] !== dateInfo.available.max.value || $[24] !== dateInfo.available.max.ym || $[25] !== dateInfo.available.min.value || $[26] !== dateInfo.available.min.ym || $[27] !== displayInfo.value || $[28] !== onChange) {
    t13 = function t13(year) {
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
    $[23] = dateInfo.available.max.value;
    $[24] = dateInfo.available.max.ym;
    $[25] = dateInfo.available.min.value;
    $[26] = dateInfo.available.min.ym;
    $[27] = displayInfo.value;
    $[28] = onChange;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  var handleYearChange = t13;
  var t14;
  if ($[30] !== onChange) {
    t14 = function t14(newValue_0) {
      setValue(newValue_0);
      onChange(newValue_0, true);
    };
    $[30] = onChange;
    $[31] = t14;
  } else {
    t14 = $[31];
  }
  var handleMonthChange = t14;
  var t15;
  if ($[32] !== displayInfo.date || $[33] !== onChange) {
    t15 = function t15() {
      var newValue_1 = dateToValue$5(displayInfo.date.subtract(1, "months"));
      setValue(newValue_1);
      onChange(newValue_1, false);
    };
    $[32] = displayInfo.date;
    $[33] = onChange;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  var handlePrevClick = t15;
  var t16;
  if ($[35] !== displayInfo.date || $[36] !== onChange) {
    t16 = function t16() {
      var newValue_2 = dateToValue$5(displayInfo.date.add(1, "months"));
      setValue(newValue_2);
      onChange(newValue_2, false);
    };
    $[35] = displayInfo.date;
    $[36] = onChange;
    $[37] = t16;
  } else {
    t16 = $[37];
  }
  var handleNextClick = t16;
  var prevBtnDisabled = displayInfo.ym <= dateInfo.available.min.ym;
  var nextBtnDisabled = displayInfo.ym >= dateInfo.available.max.ym;
  var selectFromYear = selectFromValue ? selectFromValue.year : undefined;
  var selectToYear = selectToValue ? selectToValue.year : undefined;
  var t17;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t17 = /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowLeft");
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  var t18;
  if ($[39] !== handlePrevClick || $[40] !== prevBtnDisabled) {
    t18 = /*#__PURE__*/React.createElement(StyledIconButton, {
      disabled: prevBtnDisabled,
      onClick: handlePrevClick
    }, t17);
    $[39] = handlePrevClick;
    $[40] = prevBtnDisabled;
    $[41] = t18;
  } else {
    t18 = $[41];
  }
  var t19;
  if ($[42] !== displayInfo.error || $[43] !== displayInfo.value.month || $[44] !== displayInfo.value.year) {
    t19 = displayInfo.error ? /*#__PURE__*/React.createElement(StyledYearMonthError, null, displayInfo.value.year, "\uB144 ", displayInfo.value.month, "\uC6D4") : /*#__PURE__*/React.createElement(StyledYearMonth, null, displayInfo.value.year, "\uB144 ", displayInfo.value.month, "\uC6D4");
    $[42] = displayInfo.error;
    $[43] = displayInfo.value.month;
    $[44] = displayInfo.value.year;
    $[45] = t19;
  } else {
    t19 = $[45];
  }
  var t20;
  if ($[46] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = /*#__PURE__*/React.createElement(PIcon, null, "KeyboardArrowRight");
    $[46] = t20;
  } else {
    t20 = $[46];
  }
  var t21;
  if ($[47] !== handleNextClick || $[48] !== nextBtnDisabled) {
    t21 = /*#__PURE__*/React.createElement(StyledIconButton, {
      disabled: nextBtnDisabled,
      onClick: handleNextClick
    }, t20);
    $[47] = handleNextClick;
    $[48] = nextBtnDisabled;
    $[49] = t21;
  } else {
    t21 = $[49];
  }
  var t22;
  if ($[50] !== t18 || $[51] !== t19 || $[52] !== t21) {
    t22 = /*#__PURE__*/React.createElement(TitleContainer, null, t18, t19, t21);
    $[50] = t18;
    $[51] = t19;
    $[52] = t21;
    $[53] = t22;
  } else {
    t22 = $[53];
  }
  var t23 = (value === null || value === void 0 ? void 0 : value.year) || null;
  var t24;
  if ($[54] !== disableFuture || $[55] !== disablePast || $[56] !== handleYearChange || $[57] !== maxValue.year || $[58] !== minValue.year || $[59] !== selectFromYear || $[60] !== selectToYear || $[61] !== t23) {
    t24 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateYearPicker, {
      value: t23,
      minYear: minValue.year,
      maxYear: maxValue.year,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onChange: handleYearChange,
      hideHeader: true,
      selectFromYear: selectFromYear,
      selectToYear: selectToYear
    }));
    $[54] = disableFuture;
    $[55] = disablePast;
    $[56] = handleYearChange;
    $[57] = maxValue.year;
    $[58] = minValue.year;
    $[59] = selectFromYear;
    $[60] = selectToYear;
    $[61] = t23;
    $[62] = t24;
  } else {
    t24 = $[62];
  }
  var t25;
  if ($[63] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = {
      borderTop: "1px solid #efefef"
    };
    $[63] = t25;
  } else {
    t25 = $[63];
  }
  var t26 = selectFromValue || selectToValue;
  var t27;
  if ($[64] !== dateInfo.available.max.value || $[65] !== dateInfo.available.min.value || $[66] !== disableFuture || $[67] !== disablePast || $[68] !== handleMonthChange || $[69] !== selectFromValue || $[70] !== selectToValue || $[71] !== t26 || $[72] !== value) {
    t27 = /*#__PURE__*/React.createElement("div", {
      style: t25
    }, /*#__PURE__*/React.createElement(PrivateMonthPickerMonthList, {
      value: value,
      defaultValue: t26,
      minAvailableValue: dateInfo.available.min.value,
      maxAvailableValue: dateInfo.available.max.value,
      disablePast: disablePast,
      disableFuture: disableFuture,
      selectFromValue: selectFromValue,
      selectToValue: selectToValue,
      onChange: handleMonthChange
    }));
    $[64] = dateInfo.available.max.value;
    $[65] = dateInfo.available.min.value;
    $[66] = disableFuture;
    $[67] = disablePast;
    $[68] = handleMonthChange;
    $[69] = selectFromValue;
    $[70] = selectToValue;
    $[71] = t26;
    $[72] = value;
    $[73] = t27;
  } else {
    t27 = $[73];
  }
  var t28;
  if ($[74] !== t22 || $[75] !== t24 || $[76] !== t27) {
    t28 = /*#__PURE__*/React.createElement(StyledContainer, {
      className: "PrivateMonthPicker"
    }, t22, t24, t27);
    $[74] = t22;
    $[75] = t24;
    $[76] = t27;
    $[77] = t28;
  } else {
    t28 = $[77];
  }
  return t28;
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
  var $ = c(45);
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
      var ArrowButton = function ArrowButton(props) {
        leftArrowOnClickRef.current = props.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props);
      };
      return ArrowButton;
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var _useState3 = useState(t1),
    _useState4 = _slicedToArray(_useState3, 1),
    LeftArrowButton = _useState4[0];
  var t2;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = function t2() {
      var ArrowButton_0 = function ArrowButton_0(props_0) {
        rightArrowOnClickRef.current = props_0.onClick;
        return /*#__PURE__*/React.createElement(IconButton, props_0);
      };
      return ArrowButton_0;
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var _useState5 = useState(t2),
    _useState6 = _slicedToArray(_useState5, 1),
    RightArrowButton = _useState6[0];
  var t3;
  if ($[2] !== initValue) {
    t3 = initValue ? initValue : [null, null];
    $[2] = initValue;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  var value = t3;
  if (useChanged(selectType, true)) {
    setActiveMonthValue(null);
  }
  var getDateVal = _temp$b;
  var newValue;
  if ($[4] !== month) {
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
    $[4] = month;
    $[5] = newValue;
  } else {
    newValue = $[5];
  }
  var baseClassNames = newValue;
  var newValue_0;
  if ($[6] !== month || $[7] !== value[0] || $[8] !== value[1]) {
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
    $[6] = month;
    $[7] = value[0];
    $[8] = value[1];
    $[9] = newValue_0;
  } else {
    newValue_0 = $[9];
  }
  var selectedClassNames = newValue_0;
  var newValue_1;
  if ($[10] !== focusedDate || $[11] !== month || $[12] !== selectType || $[13] !== value[0] || $[14] !== value[1]) {
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
    $[10] = focusedDate;
    $[11] = month;
    $[12] = selectType;
    $[13] = value[0];
    $[14] = value[1];
    $[15] = newValue_1;
  } else {
    newValue_1 = $[15];
  }
  var focusedClassNames = newValue_1;
  var t4;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[16] = t4;
  } else {
    t4 = $[16];
  }
  var previousMonth = t4;
  var t5;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[17] = t5;
  } else {
    t5 = $[17];
  }
  var nextMonth = t5;
  var t6;
  if ($[18] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6(month_0) {
      setActiveMonthValue(month_0);
    };
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  var activeMonth = t6;
  var t7;
  if ($[19] !== baseClassNames || $[20] !== focusedClassNames || $[21] !== onMouseEnterPickersDay || $[22] !== selectedClassNames || $[23] !== value) {
    t7 = function t7(props_1) {
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
    $[19] = baseClassNames;
    $[20] = focusedClassNames;
    $[21] = onMouseEnterPickersDay;
    $[22] = selectedClassNames;
    $[23] = value;
    $[24] = t7;
  } else {
    t7 = $[24];
  }
  var handleRenderDay = t7;
  var t8;
  if ($[25] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = {
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      activeMonth: activeMonth
    };
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  var commands = t8;
  useForwardRef(ref, commands);
  var t9;
  if ($[26] !== LeftArrowButton || $[27] !== RightArrowButton || $[28] !== handleRenderDay) {
    t9 = {
      previousIconButton: LeftArrowButton,
      nextIconButton: RightArrowButton,
      day: handleRenderDay,
      actionBar: _temp2$1
    };
    $[26] = LeftArrowButton;
    $[27] = RightArrowButton;
    $[28] = handleRenderDay;
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  var t10;
  if ($[30] !== onValueChange || $[31] !== selectType) {
    t10 = function t10(newValue_2) {
      return onValueChange && onValueChange(selectType, newValue_2);
    };
    $[30] = onValueChange;
    $[31] = selectType;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var t11;
  if ($[33] !== onMonthChange) {
    t11 = function t11(month_1) {
      if (onMonthChange) {
        onMonthChange(month_1);
      }
      setActiveMonthValue(null);
    };
    $[33] = onMonthChange;
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  var t12;
  if ($[35] !== activeMonthValue || $[36] !== disableFuture || $[37] !== disablePast || $[38] !== maxDate || $[39] !== minDate || $[40] !== month || $[41] !== t10 || $[42] !== t11 || $[43] !== t9) {
    t12 = /*#__PURE__*/React.createElement(StaticDatePicker, {
      className: "PFormDateRangePickerTooltipPicker",
      displayStaticWrapperAs: "desktop",
      slots: t9,
      value: activeMonthValue,
      referenceDate: month,
      disableFuture: disableFuture,
      disablePast: disablePast,
      minDate: minDate,
      maxDate: maxDate,
      onChange: t10,
      onMonthChange: t11
    });
    $[35] = activeMonthValue;
    $[36] = disableFuture;
    $[37] = disablePast;
    $[38] = maxDate;
    $[39] = minDate;
    $[40] = month;
    $[41] = t10;
    $[42] = t11;
    $[43] = t9;
    $[44] = t12;
  } else {
    t12 = $[44];
  }
  return t12;
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
  if ($[19] !== onMonthsChange) {
    t11 = function t11(date) {
      if (onMonthsChange) {
        onMonthsChange([date, date.add(1, "month"), date.add(2, "month")]);
      }
    };
    $[19] = onMonthsChange;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  var handleFirstDatePickerMonthChange = t11;
  var t12;
  if ($[21] !== yearMonthSelectIndex || $[22] !== yearSelectOpen) {
    t12 = function t12(index) {
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
    $[21] = yearMonthSelectIndex;
    $[22] = yearSelectOpen;
    $[23] = t12;
  } else {
    t12 = $[23];
  }
  var handleYearSelectClick = t12;
  var t13;
  if ($[24] !== monthSelectOpen || $[25] !== yearMonthSelectIndex) {
    t13 = function t13(index_0) {
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
    $[24] = monthSelectOpen;
    $[25] = yearMonthSelectIndex;
    $[26] = t13;
  } else {
    t13 = $[26];
  }
  var handleMonthSelectClick = t13;
  var t14;
  if ($[27] !== months || $[28] !== yearMonthSelectIndex) {
    t14 = function t14(year) {
      activeMonth(months[yearMonthSelectIndex].set("year", year).subtract(yearMonthSelectIndex, "month"));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    };
    $[27] = months;
    $[28] = yearMonthSelectIndex;
    $[29] = t14;
  } else {
    t14 = $[29];
  }
  var handleYearSelect = t14;
  var t15;
  if ($[30] !== months || $[31] !== yearMonthSelectIndex) {
    t15 = function t15(m) {
      activeMonth(months[yearMonthSelectIndex].set("month", m).subtract(yearMonthSelectIndex, "month"));
      setMonthSelectOpen(false);
    };
    $[30] = months;
    $[31] = yearMonthSelectIndex;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  var handleMonthSelect = t15;
  var t16;
  if ($[33] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = {
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      activeMonth: activeMonth
    };
    $[33] = t16;
  } else {
    t16 = $[33];
  }
  useForwardRef(ref, t16);
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
  var $ = c(226);
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
  var containerRef = useRef(null);
  var startDateTextFieldRef = useRef(undefined);
  var endDateTextFieldRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var startInputDatePickerErrorRef = useRef(null);
  var endInputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    fromError = _useState10[0],
    setFromError = _useState10[1];
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    fromErrorHelperText = _useState12[0],
    setFromErrorHelperText = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    toError = _useState14[0],
    setToError = _useState14[1];
  var _useState15 = useState(),
    _useState16 = _slicedToArray(_useState15, 2),
    toErrorHelperText = _useState16[0],
    setToErrorHelperText = _useState16[1];
  var t7;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7() {
      var _startDateTextFieldRe;
      (_startDateTextFieldRe = startDateTextFieldRef.current) === null || _startDateTextFieldRe === void 0 || _startDateTextFieldRe.focus();
    };
    $[0] = t7;
  } else {
    t7 = $[0];
  }
  var focus = t7;
  var t8;
  if ($[1] !== toError) {
    t8 = function t8() {
      if (toError) {
        var _endDateTextFieldRef$;
        (_endDateTextFieldRef$ = endDateTextFieldRef.current) === null || _endDateTextFieldRef$ === void 0 || _endDateTextFieldRef$.focus();
      } else {
        var _startDateTextFieldRe2;
        (_startDateTextFieldRe2 = startDateTextFieldRef.current) === null || _startDateTextFieldRe2 === void 0 || _startDateTextFieldRe2.focus();
      }
    };
    $[1] = toError;
    $[2] = t8;
  } else {
    t8 = $[2];
  }
  var focusValidate = t8;
  var t9;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[3] = t9;
  } else {
    t9 = $[3];
  }
  var setErrorErrorHelperText = t9;
  var t10;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(error_1, fromErrorHelperText_0) {
      setFromError(error_1);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[4] = t10;
  } else {
    t10 = $[4];
  }
  var setFromErrorErrorHelperText = t10;
  var t11;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11(error_2, toErrorHelperText_0) {
      setToError(error_2);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[5] = t11;
  } else {
    t11 = $[5];
  }
  var setToErrorErrorHelperText = t11;
  var t12;
  if ($[6] !== allowSingleSelect || $[7] !== format || $[8] !== onValidate || $[9] !== required || $[10] !== requiredEnd || $[11] !== requiredStart) {
    t12 = function t12(value) {
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
    };
    $[6] = allowSingleSelect;
    $[7] = format;
    $[8] = onValidate;
    $[9] = required;
    $[10] = requiredEnd;
    $[11] = requiredStart;
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  var validate = t12;
  var _useState17 = useState("start"),
    _useState18 = _slicedToArray(_useState17, 2),
    selectType = _useState18[0],
    setSelectType = _useState18[1];
  var _useState19 = useState(_temp$a),
    _useState20 = _slicedToArray(_useState19, 2),
    months = _useState20[0],
    setMonths = _useState20[1];
  var t13;
  if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = function t13(month) {
      var _containerRef$current;
      setMonths([month, month.add(1, "month"), month.add(2, "month")]);
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 || _containerRef$current.activeMonth(month);
    };
    $[13] = t13;
  } else {
    t13 = $[13];
  }
  var activeMonth = t13;
  var t14;
  if ($[14] !== initValue) {
    t14 = getFinalValue$6(initValue);
    $[14] = initValue;
    $[15] = t14;
  } else {
    t14 = $[15];
  }
  var _useState21 = useState(t14),
    _useState22 = _slicedToArray(_useState21, 2),
    value_0 = _useState22[0],
    setValue = _useState22[1];
  useChanged(initValue) && setValue(getFinalValue$6(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t15;
  if ($[16] !== error || $[17] !== fromError || $[18] !== name || $[19] !== onChange || $[20] !== onValueChange || $[21] !== toError || $[22] !== validate || $[23] !== valueRef) {
    t15 = function t15(newValue) {
      var finalValue = getFinalValue$6(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error || fromError || toError) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[16] = error;
    $[17] = fromError;
    $[18] = name;
    $[19] = onChange;
    $[20] = onValueChange;
    $[21] = toError;
    $[22] = validate;
    $[23] = valueRef;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  var updateValue = t15;
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    open = _useState24[0],
    setOpen = _useState24[1];
  var firstSkipRef = useRef(true);
  var nameRef = useAutoUpdateRef(name);
  var allowSingleSelectRef = useAutoUpdateRef(allowSingleSelect);
  var onRequestSearchSubmitRef = useAutoUpdateRef(onRequestSearchSubmit);
  var t16;
  var t17;
  if ($[25] !== allowSingleSelectRef || $[26] !== nameRef || $[27] !== onRequestSearchSubmitRef || $[28] !== open || $[29] !== valueRef) {
    t16 = function t16() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        if (open) {
          openValueRef.current = valueRef.current;
        } else {
          if (openValueRef.current) {
            var openStartDate = openValueRef.current[0];
            var openEndDate = openValueRef.current[1];
            var startDate = valueRef.current[0];
            var endDate = valueRef.current[1];
            if (allowSingleSelectRef.current || startDate != null && endDate != null) {
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
                onRequestSearchSubmitRef.current(nameRef.current, valueRef.current);
              }
            }
          }
        }
      }
    };
    t17 = [allowSingleSelectRef, nameRef, onRequestSearchSubmitRef, open, valueRef];
    $[25] = allowSingleSelectRef;
    $[26] = nameRef;
    $[27] = onRequestSearchSubmitRef;
    $[28] = open;
    $[29] = valueRef;
    $[30] = t16;
    $[31] = t17;
  } else {
    t16 = $[30];
    t17 = $[31];
  }
  useEffect(t16, t17);
  var t18;
  if ($[32] !== updateValue) {
    t18 = function t18(newValue_0) {
      updateValue(newValue_0);
      setOpen(false);
      setFromErrorErrorHelperText(false, undefined);
      setToErrorErrorHelperText(false, undefined);
    };
    $[32] = updateValue;
    $[33] = t18;
  } else {
    t18 = $[33];
  }
  var handleChange = t18;
  var t19;
  if ($[34] !== calendarCount || $[35] !== name || $[36] !== onRequestSearchSubmit || $[37] !== onValueChangeByUser || $[38] !== open || $[39] !== updateValue || $[40] !== value_0[0] || $[41] !== value_0[1]) {
    t19 = function t19(selectType_0, newValue_1, fromInput) {
      var finalValue_0;
      bb275: switch (selectType_0) {
        case "start":
          {
            var _value_0$;
            if ((_value_0$ = value_0[1]) !== null && _value_0$ !== void 0 && _value_0$.isBefore(newValue_1)) {
              finalValue_0 = [newValue_1, null];
              if (!fromInput) {
                setTimeout(function () {
                  var _endDateTextFieldRef$3;
                  (_endDateTextFieldRef$3 = endDateTextFieldRef.current) === null || _endDateTextFieldRef$3 === void 0 || _endDateTextFieldRef$3.focus();
                });
              }
            } else {
              finalValue_0 = [newValue_1, value_0[1]];
              if (!fromInput) {
                if (value_0[0] == null && newValue_1 != null && value_0[1] != null) {
                  setOpen(false);
                } else {
                  setTimeout(function () {
                    var _endDateTextFieldRef$4;
                    (_endDateTextFieldRef$4 = endDateTextFieldRef.current) === null || _endDateTextFieldRef$4 === void 0 || _endDateTextFieldRef$4.focus();
                  });
                }
              }
            }
            setFromErrorErrorHelperText(false, undefined);
            if (fromInput && newValue_1) {
              activeMonth(newValue_1);
            }
            break bb275;
          }
        case "end":
          {
            if (newValue_1 !== null && newValue_1 !== void 0 && newValue_1.isBefore(value_0[0])) {
              finalValue_0 = [newValue_1, null];
              if (fromInput && newValue_1) {
                activeMonth(newValue_1.subtract(calendarCount - 1, "month"));
              }
              setFromErrorErrorHelperText(false, undefined);
            } else {
              finalValue_0 = [value_0[0], newValue_1];
              if (fromInput && newValue_1) {
                activeMonth(newValue_1.subtract(calendarCount - 1, "month"));
              }
              if (value_0[0]) {
                setOpen(false);
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
    $[34] = calendarCount;
    $[35] = name;
    $[36] = onRequestSearchSubmit;
    $[37] = onValueChangeByUser;
    $[38] = open;
    $[39] = updateValue;
    $[40] = value_0[0];
    $[41] = value_0[1];
    $[42] = t19;
  } else {
    t19 = $[42];
  }
  var handleValueChange = t19;
  var t20;
  if ($[43] !== handleValueChange) {
    t20 = function t20(selectType_1, newValue_2) {
      var error_3 = false;
      if (newValue_2) {
        if (newValue_2.isValid()) {
          handleValueChange(selectType_1, newValue_2, true);
        } else {
          error_3 = true;
        }
      } else {
        handleValueChange(selectType_1, newValue_2, true);
      }
      bb375: switch (selectType_1) {
        case "start":
          {
            setFromError(error_3);
            break bb375;
          }
        case "end":
          {
            setToError(error_3);
          }
      }
    };
    $[43] = handleValueChange;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  var handleInputDatePickerChange = t20;
  var t21;
  if ($[45] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = function t21() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[45] = t21;
  } else {
    t21 = $[45];
  }
  var handleContainerFocus = t21;
  var t22;
  if ($[46] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = function t22() {
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
    $[46] = t22;
  } else {
    t22 = $[46];
  }
  var handleContainerBlur = t22;
  var t23;
  if ($[47] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = function t23() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[47] = t23;
  } else {
    t23 = $[47];
  }
  var handleContainerMouseDown = t23;
  var t24;
  if ($[48] !== calendarCount || $[49] !== disabled || $[50] !== readOnly || $[51] !== valueRef) {
    t24 = function t24(selectType_2) {
      if (readOnly || disabled) {
        return;
      }
      var startValue = valueRef.current[0];
      var endValue = valueRef.current[1];
      setOpen(true);
      setSelectType(selectType_2);
      if (startValue && endValue) {
        bb406: switch (selectType_2) {
          case "start":
            {
              activeMonth(startValue);
              break bb406;
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
    $[48] = calendarCount;
    $[49] = disabled;
    $[50] = readOnly;
    $[51] = valueRef;
    $[52] = t24;
  } else {
    t24 = $[52];
  }
  var handleInputDatePickerFocus = t24;
  var t25;
  if ($[53] !== name) {
    t25 = function t25() {
      return name;
    };
    $[53] = name;
    $[54] = t25;
  } else {
    t25 = $[54];
  }
  var t26;
  if ($[55] !== initValue) {
    t26 = function t26() {
      return getFinalValue$6(initValue);
    };
    $[55] = initValue;
    $[56] = t26;
  } else {
    t26 = $[56];
  }
  var t27;
  if ($[57] !== initValue || $[58] !== updateValue) {
    t27 = function t27() {
      return updateValue(initValue);
    };
    $[57] = initValue;
    $[58] = updateValue;
    $[59] = t27;
  } else {
    t27 = $[59];
  }
  var t28;
  if ($[60] !== valueRef) {
    t28 = function t28() {
      return valueRef.current;
    };
    $[60] = valueRef;
    $[61] = t28;
  } else {
    t28 = $[61];
  }
  var t29;
  if ($[62] !== dataRef) {
    t29 = function t29() {
      return dataRef.current;
    };
    $[62] = dataRef;
    $[63] = t29;
  } else {
    t29 = $[63];
  }
  var t30;
  if ($[64] !== valueRef) {
    t30 = function t30() {
      return valueRef.current[0];
    };
    $[64] = valueRef;
    $[65] = t30;
  } else {
    t30 = $[65];
  }
  var t31;
  if ($[66] !== updateValue || $[67] !== valueRef) {
    t31 = function t31(value_1) {
      return updateValue([value_1, valueRef.current[1]]);
    };
    $[66] = updateValue;
    $[67] = valueRef;
    $[68] = t31;
  } else {
    t31 = $[68];
  }
  var t32;
  if ($[69] !== valueRef) {
    t32 = function t32() {
      return valueRef.current[1];
    };
    $[69] = valueRef;
    $[70] = t32;
  } else {
    t32 = $[70];
  }
  var t33;
  if ($[71] !== updateValue || $[72] !== valueRef) {
    t33 = function t33(value_2) {
      return updateValue([valueRef.current[0], value_2]);
    };
    $[71] = updateValue;
    $[72] = valueRef;
    $[73] = t33;
  } else {
    t33 = $[73];
  }
  var t34;
  if ($[74] !== exceptValue) {
    t34 = function t34() {
      return !!exceptValue;
    };
    $[74] = exceptValue;
    $[75] = t34;
  } else {
    t34 = $[75];
  }
  var t35;
  if ($[76] !== disabled) {
    t35 = function t35() {
      return !!disabled;
    };
    $[76] = disabled;
    $[77] = t35;
  } else {
    t35 = $[77];
  }
  var t36;
  if ($[78] !== hidden) {
    t36 = function t36() {
      return !!hidden;
    };
    $[78] = hidden;
    $[79] = t36;
  } else {
    t36 = $[79];
  }
  var t37;
  if ($[80] !== validate || $[81] !== valueRef) {
    t37 = function t37() {
      return validate(valueRef.current);
    };
    $[80] = validate;
    $[81] = valueRef;
    $[82] = t37;
  } else {
    t37 = $[82];
  }
  var t38;
  if ($[83] === Symbol["for"]("react.memo_cache_sentinel")) {
    t38 = function t38(error_4, errorText) {
      return setErrorErrorHelperText(error_4, error_4 ? errorText : undefined);
    };
    $[83] = t38;
  } else {
    t38 = $[83];
  }
  var t39;
  if ($[84] !== formValueFormat) {
    t39 = function t39() {
      return formValueFormat;
    };
    $[84] = formValueFormat;
    $[85] = t39;
  } else {
    t39 = $[85];
  }
  var t40;
  if ($[86] !== formValueFromNameSuffix) {
    t40 = function t40() {
      return formValueFromNameSuffix;
    };
    $[86] = formValueFromNameSuffix;
    $[87] = t40;
  } else {
    t40 = $[87];
  }
  var t41;
  if ($[88] !== formValueToNameSuffix) {
    t41 = function t41() {
      return formValueToNameSuffix;
    };
    $[88] = formValueToNameSuffix;
    $[89] = t41;
  } else {
    t41 = $[89];
  }
  var t42;
  if ($[90] !== formValueFromNameSuffix || $[91] !== name) {
    t42 = function t42() {
      return "".concat(name).concat(formValueFromNameSuffix);
    };
    $[90] = formValueFromNameSuffix;
    $[91] = name;
    $[92] = t42;
  } else {
    t42 = $[92];
  }
  var t43;
  if ($[93] !== formValueToNameSuffix || $[94] !== name) {
    t43 = function t43() {
      return "".concat(name).concat(formValueToNameSuffix);
    };
    $[93] = formValueToNameSuffix;
    $[94] = name;
    $[95] = t43;
  } else {
    t43 = $[95];
  }
  var t44;
  if ($[96] !== focusValidate || $[97] !== t25 || $[98] !== t26 || $[99] !== t27 || $[100] !== t28 || $[101] !== t29 || $[102] !== t30 || $[103] !== t31 || $[104] !== t32 || $[105] !== t33 || $[106] !== t34 || $[107] !== t35 || $[108] !== t36 || $[109] !== t37 || $[110] !== t39 || $[111] !== t40 || $[112] !== t41 || $[113] !== t42 || $[114] !== t43 || $[115] !== updateValue) {
    t44 = {
      getType: _temp2,
      getName: t25,
      getReset: t26,
      reset: t27,
      getValue: t28,
      setValue: updateValue,
      getData: t29,
      setData: setData,
      getFromValue: t30,
      setFromValue: t31,
      getToValue: t32,
      setToValue: t33,
      isExceptValue: t34,
      isDisabled: t35,
      setDisabled: setDisabled,
      isHidden: t36,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focusValidate,
      validate: t37,
      setError: t38,
      getFormValueFormat: t39,
      getFormValueFromNameSuffix: t40,
      getFormValueToNameSuffix: t41,
      getFormValueFromName: t42,
      getFormValueToName: t43
    };
    $[96] = focusValidate;
    $[97] = t25;
    $[98] = t26;
    $[99] = t27;
    $[100] = t28;
    $[101] = t29;
    $[102] = t30;
    $[103] = t31;
    $[104] = t32;
    $[105] = t33;
    $[106] = t34;
    $[107] = t35;
    $[108] = t36;
    $[109] = t37;
    $[110] = t39;
    $[111] = t40;
    $[112] = t41;
    $[113] = t42;
    $[114] = t43;
    $[115] = updateValue;
    $[116] = t44;
  } else {
    t44 = $[116];
  }
  var commands = t44;
  var t45;
  if ($[117] !== id || $[118] !== onAddValueItem) {
    t45 = function t45(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[117] = id;
    $[118] = onAddValueItem;
    $[119] = t45;
  } else {
    t45 = $[119];
  }
  var t46;
  if ($[120] !== id || $[121] !== onRemoveValueItem) {
    t46 = function t46() {
      return onRemoveValueItem(id);
    };
    $[120] = id;
    $[121] = onRemoveValueItem;
    $[122] = t46;
  } else {
    t46 = $[122];
  }
  useForwardRef(ref, commands, t45, t46);
  var t47;
  if ($[123] !== align || $[124] !== color || $[125] !== disableFuture || $[126] !== disablePast || $[127] !== disabled || $[128] !== format || $[129] !== fullWidth || $[130] !== labelShrink || $[131] !== maxDate || $[132] !== minDate || $[133] !== size || $[134] !== variant) {
    t47 = {
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
    $[123] = align;
    $[124] = color;
    $[125] = disableFuture;
    $[126] = disablePast;
    $[127] = disabled;
    $[128] = format;
    $[129] = fullWidth;
    $[130] = labelShrink;
    $[131] = maxDate;
    $[132] = minDate;
    $[133] = size;
    $[134] = variant;
    $[135] = t47;
  } else {
    t47 = $[135];
  }
  var inputDatePickerProps = t47;
  var t48;
  if ($[136] !== fullWidth || $[137] !== inputWidth) {
    t48 = inputWidth != null ? {
      width: inputWidth
    } : {
      width: fullWidth ? undefined : 150
    };
    $[136] = fullWidth;
    $[137] = inputWidth;
    $[138] = t48;
  } else {
    t48 = $[138];
  }
  var inputStyle = t48;
  var t49;
  if ($[139] === Symbol["for"]("react.memo_cache_sentinel")) {
    t49 = function t49() {
      return setOpen(false);
    };
    $[139] = t49;
  } else {
    t49 = $[139];
  }
  var t50;
  if ($[140] !== className) {
    t50 = classNames(className, "PFormDateRangePicker");
    $[140] = className;
    $[141] = t50;
  } else {
    t50 = $[141];
  }
  var t51 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t52 = fullWidth ? 1 : undefined;
  var t53;
  if ($[142] !== t51 || $[143] !== t52) {
    t53 = {
      display: t51,
      flex: t52
    };
    $[142] = t51;
    $[143] = t52;
    $[144] = t53;
  } else {
    t53 = $[144];
  }
  var t54 = error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText ? 8 : -14;
  var t55;
  if ($[145] !== t54) {
    t55 = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, t54]
        }
      }]
    };
    $[145] = t54;
    $[146] = t55;
  } else {
    t55 = $[146];
  }
  var t56;
  if ($[147] === Symbol["for"]("react.memo_cache_sentinel")) {
    t56 = {
      display: "flex"
    };
    $[147] = t56;
  } else {
    t56 = $[147];
  }
  var t57;
  if ($[148] !== calendarCount || $[149] !== disableFuture || $[150] !== disablePast || $[151] !== handleChange || $[152] !== handleValueChange || $[153] !== maxDate || $[154] !== minDate || $[155] !== months || $[156] !== onGetActionButtons || $[157] !== selectType || $[158] !== value_0) {
    t57 = /*#__PURE__*/React.createElement("div", {
      style: t56
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
    $[148] = calendarCount;
    $[149] = disableFuture;
    $[150] = disablePast;
    $[151] = handleChange;
    $[152] = handleValueChange;
    $[153] = maxDate;
    $[154] = minDate;
    $[155] = months;
    $[156] = onGetActionButtons;
    $[157] = selectType;
    $[158] = value_0;
    $[159] = t57;
  } else {
    t57 = $[159];
  }
  var t58 = error || fromError;
  var t59 = focused || open && selectType === "start";
  var t60 = required || requiredStart;
  var t61 = readOnly || readOnlyStart;
  var t62 = startIcon || icon;
  var t63 = startStartAdornment || startAdornment;
  var t64 = startEndAdornment || endAdornment;
  var t65;
  if ($[160] !== handleInputDatePickerChange) {
    t65 = function t65(newValue_3) {
      return handleInputDatePickerChange("start", newValue_3);
    };
    $[160] = handleInputDatePickerChange;
    $[161] = t65;
  } else {
    t65 = $[161];
  }
  var t66;
  if ($[162] !== handleInputDatePickerFocus) {
    t66 = function t66() {
      return handleInputDatePickerFocus("start");
    };
    $[162] = handleInputDatePickerFocus;
    $[163] = t66;
  } else {
    t66 = $[163];
  }
  var t67;
  if ($[164] === Symbol["for"]("react.memo_cache_sentinel")) {
    t67 = function t67(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[164] = t67;
  } else {
    t67 = $[164];
  }
  var t68;
  if ($[165] !== enableKeyboardInput || $[166] !== fromLabel || $[167] !== fromLabelIcon || $[168] !== inputDatePickerProps || $[169] !== inputStyle || $[170] !== t58 || $[171] !== t59 || $[172] !== t60 || $[173] !== t61 || $[174] !== t62 || $[175] !== t63 || $[176] !== t64 || $[177] !== t65 || $[178] !== t66 || $[179] !== value_0[0]) {
    t68 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      value: value_0[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t58,
      focused: t59,
      required: t60,
      readOnly: t61,
      enableKeyboardInput: enableKeyboardInput,
      icon: t62,
      startAdornment: t63,
      endAdornment: t64,
      inputRef: startDateTextFieldRef,
      onChange: t65,
      onFocus: t66,
      onError: t67
    })));
    $[165] = enableKeyboardInput;
    $[166] = fromLabel;
    $[167] = fromLabelIcon;
    $[168] = inputDatePickerProps;
    $[169] = inputStyle;
    $[170] = t58;
    $[171] = t59;
    $[172] = t60;
    $[173] = t61;
    $[174] = t62;
    $[175] = t63;
    $[176] = t64;
    $[177] = t65;
    $[178] = t66;
    $[179] = value_0[0];
    $[180] = t68;
  } else {
    t68 = $[180];
  }
  var t69;
  if ($[181] === Symbol["for"]("react.memo_cache_sentinel")) {
    t69 = /*#__PURE__*/React.createElement(Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[181] = t69;
  } else {
    t69 = $[181];
  }
  var t70 = error || toError;
  var t71 = focused || open && selectType === "end";
  var t72 = required || requiredEnd;
  var t73 = readOnly || readOnlyEnd;
  var t74 = endIcon || icon;
  var t75 = endStartAdornment || startAdornment;
  var t76 = endEndAdornment || endAdornment;
  var t77;
  if ($[182] !== handleInputDatePickerChange) {
    t77 = function t77(newValue_4) {
      return handleInputDatePickerChange("end", newValue_4);
    };
    $[182] = handleInputDatePickerChange;
    $[183] = t77;
  } else {
    t77 = $[183];
  }
  var t78;
  if ($[184] !== handleInputDatePickerFocus) {
    t78 = function t78() {
      return handleInputDatePickerFocus("end");
    };
    $[184] = handleInputDatePickerFocus;
    $[185] = t78;
  } else {
    t78 = $[185];
  }
  var t79;
  if ($[186] === Symbol["for"]("react.memo_cache_sentinel")) {
    t79 = function t79(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[186] = t79;
  } else {
    t79 = $[186];
  }
  var t80;
  if ($[187] !== enableKeyboardInput || $[188] !== inputDatePickerProps || $[189] !== inputStyle || $[190] !== t70 || $[191] !== t71 || $[192] !== t72 || $[193] !== t73 || $[194] !== t74 || $[195] !== t75 || $[196] !== t76 || $[197] !== t77 || $[198] !== t78 || $[199] !== toLabel || $[200] !== toLabelIcon || $[201] !== value_0[1]) {
    t80 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      value: value_0[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t70,
      focused: t71,
      required: t72,
      readOnly: t73,
      enableKeyboardInput: enableKeyboardInput,
      icon: t74,
      startAdornment: t75,
      endAdornment: t76,
      inputRef: endDateTextFieldRef,
      onChange: t77,
      onFocus: t78,
      onError: t79
    })));
    $[187] = enableKeyboardInput;
    $[188] = inputDatePickerProps;
    $[189] = inputStyle;
    $[190] = t70;
    $[191] = t71;
    $[192] = t72;
    $[193] = t73;
    $[194] = t74;
    $[195] = t75;
    $[196] = t76;
    $[197] = t77;
    $[198] = t78;
    $[199] = toLabel;
    $[200] = toLabelIcon;
    $[201] = value_0[1];
    $[202] = t80;
  } else {
    t80 = $[202];
  }
  var t81;
  if ($[203] !== t68 || $[204] !== t80) {
    t81 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      alignItems: "center"
    }, t68, t69, t80);
    $[203] = t68;
    $[204] = t80;
    $[205] = t81;
  } else {
    t81 = $[205];
  }
  var t82;
  if ($[206] !== open || $[207] !== t55 || $[208] !== t57 || $[209] !== t81) {
    t82 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      PopperProps: t55,
      title: t57
    }, t81);
    $[206] = open;
    $[207] = t55;
    $[208] = t57;
    $[209] = t81;
    $[210] = t82;
  } else {
    t82 = $[210];
  }
  var t83;
  if ($[211] !== error || $[212] !== errorHelperText || $[213] !== formColWithHelperText || $[214] !== fromError || $[215] !== fromErrorHelperText || $[216] !== helperText || $[217] !== toError || $[218] !== toErrorHelperText || $[219] !== variant) {
    t83 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[211] = error;
    $[212] = errorHelperText;
    $[213] = formColWithHelperText;
    $[214] = fromError;
    $[215] = fromErrorHelperText;
    $[216] = helperText;
    $[217] = toError;
    $[218] = toErrorHelperText;
    $[219] = variant;
    $[220] = t83;
  } else {
    t83 = $[220];
  }
  var t84;
  if ($[221] !== t50 || $[222] !== t53 || $[223] !== t82 || $[224] !== t83) {
    t84 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t49
    }, /*#__PURE__*/React.createElement("div", {
      className: t50,
      style: t53,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t82, t83)));
    $[221] = t50;
    $[222] = t53;
    $[223] = t82;
    $[224] = t83;
    $[225] = t84;
  } else {
    t84 = $[225];
  }
  return t84;
};
function _temp$a() {
  var now = dayjs();
  return [now, now.add(1, "month"), now.add(2, "month")];
}
function _temp2() {
  return "PFormDateRangePicker";
}var LinkDialog = function LinkDialog(t0) {
  var $ = c(28);
  var open = t0.open,
    onConfirm = t0.onConfirm,
    onCancel = t0.onCancel,
    onClose = t0.onClose;
  var inputRef = useRef(null);
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  if (useChanged(open, true)) {
    if (!open) {
      setValue("");
    }
  }
  var t1;
  if ($[0] !== onClose || $[1] !== onConfirm || $[2] !== value) {
    t1 = function t1() {
      var _inputRef$current;
      if ((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.validate()) {
        onConfirm && onConfirm(value);
        onClose && onClose();
      } else {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.focus();
      }
    };
    $[0] = onClose;
    $[1] = onConfirm;
    $[2] = value;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  var handleSubmit = t1;
  var t2;
  if ($[4] !== onCancel || $[5] !== onClose) {
    t2 = function t2() {
      onCancel && onCancel();
      onClose && onClose();
    };
    $[4] = onCancel;
    $[5] = onClose;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var handleCancel = t2;
  var t3 = !!open;
  var t4;
  if ($[7] !== onClose || $[8] !== value) {
    t4 = function t4(e, reason) {
      if (reason === "backdropClick") {
        if (empty(value)) {
          onClose && onClose();
        }
      }
    };
    $[7] = onClose;
    $[8] = value;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var t5;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/React.createElement(DialogTitle, null, "\uD30C\uC77C \uB9C1\uD06C");
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  var t6;
  if ($[11] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = /*#__PURE__*/React.createElement("div", null, "\uD30C\uC77C\uC758 \uB9C1\uD06C URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  var t7;
  if ($[12] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7(ref) {
      if (inputRef.current == null && ref !== null) {
        ref.focus();
      }
      inputRef.current = ref;
    };
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  var t8;
  if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = {
      marginTop: 15
    };
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  var t9;
  if ($[14] !== value) {
    t9 = /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(Box, null, t6, /*#__PURE__*/React.createElement(PFormUrl, {
      ref: t7,
      name: "form-file-link-url",
      label: "\uB9C1\uD06C URL",
      value: value,
      required: true,
      fullWidth: true,
      style: t8,
      onChange: setValue
    })));
    $[14] = value;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var t10;
  if ($[16] !== handleCancel) {
    t10 = /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      onClick: handleCancel
    }, "\uCDE8\uC18C");
    $[16] = handleCancel;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  var t11;
  if ($[18] !== handleSubmit) {
    t11 = /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      onClick: handleSubmit
    }, "\uD655\uC778");
    $[18] = handleSubmit;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  var t12;
  if ($[20] !== t10 || $[21] !== t11) {
    t12 = /*#__PURE__*/React.createElement(DialogActions, null, t10, t11);
    $[20] = t10;
    $[21] = t11;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  var t13;
  if ($[23] !== t12 || $[24] !== t3 || $[25] !== t4 || $[26] !== t9) {
    t13 = /*#__PURE__*/React.createElement(Dialog, {
      className: "color-primary",
      open: t3,
      maxWidth: "sm",
      fullWidth: true,
      onClose: t4
    }, t5, t9, t12);
    $[23] = t12;
    $[24] = t3;
    $[25] = t4;
    $[26] = t9;
    $[27] = t13;
  } else {
    t13 = $[27];
  }
  return t13;
};var _templateObject$1;
var StyledPButton = styled(PButton)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  min-width: 0;\n\n  &.input-file-btn {\n    padding: 0 !important;\n    position: relative;\n\n    .PFlexRowBox {\n      height: 100%;\n      label {\n        cursor: pointer;\n        display: flex;\n        flex: 1;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center;\n        padding: 0 10px;\n\n        .PIcon {\n          margin-right: 0.2em;\n        }\n      }\n    }\n  }\n\n  &.hidden-label.input-file-btn .PFlexRowBox label .PIcon {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  &.MuiButton-outlined {\n    &:first-of-type:not(:last-of-type) {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    &:last-of-type:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:first-of-type):not(:last-of-type) {\n      border-right: 0;\n      border-radius: 0;\n    }\n  }\n"])));var getFinalValue$5 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormFile .control-wrap{display:inline-flex}.PFormFile .control-wrap .file-name-wrap .file-name{min-width:350px}.PFormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root{padding-right:7px}.PFormFile .control-wrap .input-file{display:none}.PFormFile .control-wrap .input-file-wrap{display:flex}.PFormFile .control-wrap .input-file-wrap .input-file-btn:not(.hidden-label) .PIcon{margin-left:-3px}.PFormFile.full-width .control-wrap{display:flex}.PFormFile.full-width .control-wrap .file-name-wrap{flex:1}.PFormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root{padding-right:0}.PFormFile:not(.hide-file-name).variant-outlined .form-file-btn label,.PFormFile:not(.hide-file-name).variant-filled .form-file-btn label{padding-top:10px;padding-bottom:10px}.PFormFile:not(.hide-file-name).variant-standard .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile:not(.hide-file-name).size-small .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn{height:44px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn{height:26px}.PFormFile.hide-file-name.with-label.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-filled .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn{height:24px}.PFormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn{height:31px}.PFormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn{height:26px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-outlined .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-filled .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-standard .form-file-btn{height:28px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-outlined .form-file-btn{height:24px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-filled .form-file-btn{height:31px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-standard .form-file-btn{height:26px}");var FILE_VALUE = '';
var PFormFile = function PFormFile(t0) {
  var $ = c(177);
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
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isOpenLinkDialog = _useState10[0],
    setIsOpenLinkDialog = _useState10[1];
  var t2;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = {
      open: false
    };
    $[0] = t2;
  } else {
    t2 = $[0];
  }
  var _useState11 = useState(t2),
    _useState12 = _slicedToArray(_useState11, 2),
    alertDialogProps = _useState12[0],
    setAlertDialogProps = _useState12[1];
  var t3;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = {
      handleWidth: false
    };
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  var _useResizeDetector = useResizeDetector(t3),
    innerRef = _useResizeDetector.ref,
    height = _useResizeDetector.height;
  var t4;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  var setErrorErrorHelperText = t4;
  var t5;
  if ($[3] !== onValidate || $[4] !== required) {
    t5 = function t5(value) {
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
      if (onValidate) {
        var onValidateResult = onValidate(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[3] = onValidate;
    $[4] = required;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var validate = t5;
  var t6;
  if ($[6] !== initValue) {
    t6 = getFinalValue$5(initValue);
    $[6] = initValue;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var _useState13 = useState(t6),
    _useState14 = _slicedToArray(_useState13, 2),
    value_0 = _useState14[0],
    setValue = _useState14[1];
  useChanged(initValue) && setValue(getFinalValue$5(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t7;
  if ($[8] !== error || $[9] !== name || $[10] !== onChange || $[11] !== onValueChange || $[12] !== validate || $[13] !== valueRef) {
    t7 = function t7(newValue) {
      var finalValue = getFinalValue$5(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[8] = error;
    $[9] = name;
    $[10] = onChange;
    $[11] = onValueChange;
    $[12] = validate;
    $[13] = valueRef;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  var updateValue = t7;
  var t8;
  if ($[15] !== hideUpload || $[16] !== hideUrl) {
    t8 = function t8() {
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
    $[15] = hideUpload;
    $[16] = hideUrl;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  var focus = t8;
  var t9;
  if ($[18] !== name) {
    t9 = function t9() {
      return name;
    };
    $[18] = name;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  var t10;
  if ($[20] !== initValueRef) {
    t10 = function t10() {
      return getFinalValue$5(initValueRef.current);
    };
    $[20] = initValueRef;
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  var t11;
  if ($[22] !== initValueRef || $[23] !== updateValue) {
    t11 = function t11() {
      return updateValue(initValueRef.current);
    };
    $[22] = initValueRef;
    $[23] = updateValue;
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  var t12;
  if ($[25] !== valueRef) {
    t12 = function t12() {
      return valueRef.current;
    };
    $[25] = valueRef;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  var t13;
  if ($[27] !== dataRef) {
    t13 = function t13() {
      return dataRef.current;
    };
    $[27] = dataRef;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  var t14;
  if ($[29] !== exceptValue) {
    t14 = function t14() {
      return !!exceptValue;
    };
    $[29] = exceptValue;
    $[30] = t14;
  } else {
    t14 = $[30];
  }
  var t15;
  if ($[31] !== disabled) {
    t15 = function t15() {
      return !!disabled;
    };
    $[31] = disabled;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  var t16;
  if ($[33] !== hidden) {
    t16 = function t16() {
      return !!hidden;
    };
    $[33] = hidden;
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  var t17;
  if ($[35] !== validate || $[36] !== valueRef) {
    t17 = function t17() {
      return validate(valueRef.current);
    };
    $[35] = validate;
    $[36] = valueRef;
    $[37] = t17;
  } else {
    t17 = $[37];
  }
  var t18;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18(error_1, errorHelperText_1) {
      return setErrorErrorHelperText(error_1, error_1 ? errorHelperText_1 : undefined);
    };
    $[38] = t18;
  } else {
    t18 = $[38];
  }
  var t19;
  if ($[39] !== focus || $[40] !== t10 || $[41] !== t11 || $[42] !== t12 || $[43] !== t13 || $[44] !== t14 || $[45] !== t15 || $[46] !== t16 || $[47] !== t17 || $[48] !== t9 || $[49] !== updateValue) {
    t19 = {
      getType: _temp$9,
      getName: t9,
      getReset: t10,
      reset: t11,
      getValue: t12,
      setValue: updateValue,
      getData: t13,
      setData: setData,
      isExceptValue: t14,
      isDisabled: t15,
      setDisabled: setDisabled,
      isHidden: t16,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t17,
      setError: t18
    };
    $[39] = focus;
    $[40] = t10;
    $[41] = t11;
    $[42] = t12;
    $[43] = t13;
    $[44] = t14;
    $[45] = t15;
    $[46] = t16;
    $[47] = t17;
    $[48] = t9;
    $[49] = updateValue;
    $[50] = t19;
  } else {
    t19 = $[50];
  }
  var commands = t19;
  var t20;
  if ($[51] !== id || $[52] !== onAddValueItem) {
    t20 = function t20(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[51] = id;
    $[52] = onAddValueItem;
    $[53] = t20;
  } else {
    t20 = $[53];
  }
  var t21;
  if ($[54] !== id || $[55] !== onRemoveValueItem) {
    t21 = function t21() {
      return onRemoveValueItem(id);
    };
    $[54] = id;
    $[55] = onRemoveValueItem;
    $[56] = t21;
  } else {
    t21 = $[56];
  }
  useForwardRef(ref, commands, t20, t21);
  var t22;
  if ($[57] !== maxFileSize) {
    t22 = function t22(file) {
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
    $[57] = maxFileSize;
    $[58] = t22;
  } else {
    t22 = $[58];
  }
  var fileSizeCheck = t22;
  var t23;
  if ($[59] !== fileSizeCheck || $[60] !== name || $[61] !== onFile || $[62] !== onValueChangeByUser || $[63] !== updateValue) {
    t23 = function t23(e) {
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
    $[59] = fileSizeCheck;
    $[60] = name;
    $[61] = onFile;
    $[62] = onValueChangeByUser;
    $[63] = updateValue;
    $[64] = t23;
  } else {
    t23 = $[64];
  }
  var handleFileChange = t23;
  var t24;
  if ($[65] === Symbol["for"]("react.memo_cache_sentinel")) {
    t24 = function t24() {
      setIsOpenLinkDialog(true);
    };
    $[65] = t24;
  } else {
    t24 = $[65];
  }
  var handleLinkClick = t24;
  var t25;
  if ($[66] !== name || $[67] !== onValueChangeByUser || $[68] !== updateValue) {
    t25 = function t25() {
      updateValue("");
      setTimeout(function () {
        if (onValueChangeByUser) {
          onValueChangeByUser(name, "");
        }
      });
    };
    $[66] = name;
    $[67] = onValueChangeByUser;
    $[68] = updateValue;
    $[69] = t25;
  } else {
    t25 = $[69];
  }
  var handleRemoveClick = t25;
  var t26;
  if ($[70] !== name || $[71] !== onLink || $[72] !== onValueChangeByUser || $[73] !== updateValue) {
    t26 = function t26(url_0) {
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
    $[70] = name;
    $[71] = onLink;
    $[72] = onValueChangeByUser;
    $[73] = updateValue;
    $[74] = t26;
  } else {
    t26 = $[74];
  }
  var handleLinkDialogConfirm = t26;
  var t27 = "variant-".concat(variant);
  var t28 = "size-".concat(size);
  var t29 = !!initLabel && "with-label";
  var t30 = !!fullWidth && "full-width";
  var t31 = !!hideUrl && "hide-file-name";
  var t32 = !!hideLink && "hide-link";
  var t33 = !!hideUpload && "hide-upload";
  var t34 = !!hideRemove && "hide-remove";
  var t35;
  if ($[75] !== className || $[76] !== t27 || $[77] !== t28 || $[78] !== t29 || $[79] !== t30 || $[80] !== t31 || $[81] !== t32 || $[82] !== t33 || $[83] !== t34 || $[84] !== value_0) {
    t35 = classNames(className, "PFormValueItem", "PFormFile", t27, t28, t29, t30, t31, t32, t33, t34, notEmpty(value_0) && "with-value");
    $[75] = className;
    $[76] = t27;
    $[77] = t28;
    $[78] = t29;
    $[79] = t30;
    $[80] = t31;
    $[81] = t32;
    $[82] = t33;
    $[83] = t34;
    $[84] = value_0;
    $[85] = t35;
  } else {
    t35 = $[85];
  }
  var t36 = hideUrl ? labelIcon : undefined;
  var t37 = hideUrl ? initLabel : undefined;
  var t38 = error ? errorHelperText : helperText;
  var t39;
  if ($[86] !== t38) {
    t39 = /*#__PURE__*/React.createElement("div", null, t38);
    $[86] = t38;
    $[87] = t39;
  } else {
    t39 = $[87];
  }
  var t40;
  if ($[88] !== preview || $[89] !== t39) {
    t40 = /*#__PURE__*/React.createElement("div", null, preview, t39);
    $[88] = preview;
    $[89] = t39;
    $[90] = t40;
  } else {
    t40 = $[90];
  }
  var t41 = !hideUrl;
  var t42 = fullWidth ? "100%" : undefined;
  var t43;
  if ($[91] !== t42) {
    t43 = {
      width: t42
    };
    $[91] = t42;
    $[92] = t43;
  } else {
    t43 = $[92];
  }
  var t44;
  if ($[93] !== accept || $[94] !== color || $[95] !== disabled || $[96] !== error || $[97] !== focused || $[98] !== handleFileChange || $[99] !== handleRemoveClick || $[100] !== hideLink || $[101] !== hideLinkLabel || $[102] !== hideRemove || $[103] !== hideRemoveLabel || $[104] !== hideUpload || $[105] !== hideUploadLabel || $[106] !== hideUrl || $[107] !== id || $[108] !== initLabel || $[109] !== innerRef || $[110] !== labelIcon || $[111] !== labelShrink || $[112] !== linkLabel || $[113] !== linkTabIndex || $[114] !== readOnly || $[115] !== removeLabel || $[116] !== removeTabIndex || $[117] !== required || $[118] !== size || $[119] !== tabIndex || $[120] !== uploadLabel || $[121] !== uploadTabIndex || $[122] !== value_0 || $[123] !== variant) {
    t44 = !hideUrl && /*#__PURE__*/React.createElement("div", {
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
    $[93] = accept;
    $[94] = color;
    $[95] = disabled;
    $[96] = error;
    $[97] = focused;
    $[98] = handleFileChange;
    $[99] = handleRemoveClick;
    $[100] = hideLink;
    $[101] = hideLinkLabel;
    $[102] = hideRemove;
    $[103] = hideRemoveLabel;
    $[104] = hideUpload;
    $[105] = hideUploadLabel;
    $[106] = hideUrl;
    $[107] = id;
    $[108] = initLabel;
    $[109] = innerRef;
    $[110] = labelIcon;
    $[111] = labelShrink;
    $[112] = linkLabel;
    $[113] = linkTabIndex;
    $[114] = readOnly;
    $[115] = removeLabel;
    $[116] = removeTabIndex;
    $[117] = required;
    $[118] = size;
    $[119] = tabIndex;
    $[120] = uploadLabel;
    $[121] = uploadTabIndex;
    $[122] = value_0;
    $[123] = variant;
    $[124] = t44;
  } else {
    t44 = $[124];
  }
  var t45;
  if ($[125] !== accept || $[126] !== color || $[127] !== disabled || $[128] !== error || $[129] !== handleFileChange || $[130] !== handleRemoveClick || $[131] !== hideLink || $[132] !== hideLinkLabel || $[133] !== hideRemove || $[134] !== hideRemoveLabel || $[135] !== hideUpload || $[136] !== hideUploadLabel || $[137] !== hideUrl || $[138] !== id || $[139] !== linkLabel || $[140] !== linkTabIndex || $[141] !== removeLabel || $[142] !== removeTabIndex || $[143] !== size || $[144] !== uploadLabel || $[145] !== uploadTabIndex || $[146] !== value_0) {
    t45 = !!hideUrl && /*#__PURE__*/React.createElement("div", {
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
    $[125] = accept;
    $[126] = color;
    $[127] = disabled;
    $[128] = error;
    $[129] = handleFileChange;
    $[130] = handleRemoveClick;
    $[131] = hideLink;
    $[132] = hideLinkLabel;
    $[133] = hideRemove;
    $[134] = hideRemoveLabel;
    $[135] = hideUpload;
    $[136] = hideUploadLabel;
    $[137] = hideUrl;
    $[138] = id;
    $[139] = linkLabel;
    $[140] = linkTabIndex;
    $[141] = removeLabel;
    $[142] = removeTabIndex;
    $[143] = size;
    $[144] = uploadLabel;
    $[145] = uploadTabIndex;
    $[146] = value_0;
    $[147] = t45;
  } else {
    t45 = $[147];
  }
  var t46;
  if ($[148] === Symbol["for"]("react.memo_cache_sentinel")) {
    t46 = function t46() {
      return setAlertDialogProps({
        open: false
      });
    };
    $[148] = t46;
  } else {
    t46 = $[148];
  }
  var t47;
  if ($[149] !== alertDialogProps) {
    t47 = /*#__PURE__*/React.createElement(PrivateAlertDialog, _extends({}, alertDialogProps, {
      onClose: t46
    }));
    $[149] = alertDialogProps;
    $[150] = t47;
  } else {
    t47 = $[150];
  }
  var t48;
  if ($[151] === Symbol["for"]("react.memo_cache_sentinel")) {
    t48 = function t48() {
      return setIsOpenLinkDialog(false);
    };
    $[151] = t48;
  } else {
    t48 = $[151];
  }
  var t49;
  if ($[152] !== handleLinkDialogConfirm || $[153] !== isOpenLinkDialog) {
    t49 = /*#__PURE__*/React.createElement(LinkDialog, {
      open: isOpenLinkDialog,
      onConfirm: handleLinkDialogConfirm,
      onClose: t48
    });
    $[152] = handleLinkDialogConfirm;
    $[153] = isOpenLinkDialog;
    $[154] = t49;
  } else {
    t49 = $[154];
  }
  var t50;
  if ($[155] !== t44 || $[156] !== t45 || $[157] !== t47 || $[158] !== t49) {
    t50 = /*#__PURE__*/React.createElement("div", {
      className: "control-wrap"
    }, t44, t45, t47, t49);
    $[155] = t44;
    $[156] = t45;
    $[157] = t47;
    $[158] = t49;
    $[159] = t50;
  } else {
    t50 = $[159];
  }
  var t51;
  if ($[160] !== color || $[161] !== error || $[162] !== focused || $[163] !== fullWidth || $[164] !== height || $[165] !== hidden || $[166] !== required || $[167] !== size || $[168] !== t35 || $[169] !== t36 || $[170] !== t37 || $[171] !== t40 || $[172] !== t41 || $[173] !== t43 || $[174] !== t50 || $[175] !== variant) {
    t51 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t35,
      labelIcon: t36,
      label: t37,
      error: error,
      required: required,
      fullWidth: fullWidth,
      hidden: hidden,
      controlHeight: height,
      helperText: t40,
      hideLabel: t41,
      style: t43,
      control: t50
    });
    $[160] = color;
    $[161] = error;
    $[162] = focused;
    $[163] = fullWidth;
    $[164] = height;
    $[165] = hidden;
    $[166] = required;
    $[167] = size;
    $[168] = t35;
    $[169] = t36;
    $[170] = t37;
    $[171] = t40;
    $[172] = t41;
    $[173] = t43;
    $[174] = t50;
    $[175] = variant;
    $[176] = t51;
  } else {
    t51 = $[176];
  }
  return t51;
};
function _temp$9() {
  return "PFormFile";
}var getFinalValue$4 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormImageFile .preview-img{max-width:100%}.PFormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img{padding-right:14px}");var _excluded$5 = ["ref", "className", "imageSize", "preview", "previewMaxHeight", "accept", "value", "onChange", "onFile", "onLink"];
var PFormImageFile = function PFormImageFile(t0) {
  var $ = c(50);
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
  useChanged(initValue) && setValue(getFinalValue$4(initValue));
  var t4;
  if ($[15] !== onChange) {
    t4 = function t4(newValue) {
      var _onChange;
      var finalValue = getFinalValue$4(newValue);
      setValue(finalValue);
      (_onChange = onChange) === null || _onChange === void 0 || _onChange(finalValue);
      return finalValue;
    };
    $[15] = onChange;
    $[16] = t4;
  } else {
    t4 = $[16];
  }
  var updateValue = t4;
  var t5;
  if ($[17] !== imageSize || $[18] !== urlKit) {
    t5 = function t5(file) {
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
    $[17] = imageSize;
    $[18] = urlKit;
    $[19] = t5;
  } else {
    t5 = $[19];
  }
  var imageSizeCheck = t5;
  var t6;
  if ($[20] !== updateValue) {
    t6 = function t6(value_0) {
      updateValue(value_0);
    };
    $[20] = updateValue;
    $[21] = t6;
  } else {
    t6 = $[21];
  }
  var handleChange = t6;
  var t7;
  if ($[22] !== imageSizeCheck || $[23] !== onFile) {
    t7 = function t7(file_0) {
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
    $[22] = imageSizeCheck;
    $[23] = onFile;
    $[24] = t7;
  } else {
    t7 = $[24];
  }
  var handleFile = t7;
  var t8;
  if ($[25] !== imageSizeCheck || $[26] !== onLink) {
    t8 = function t8(url_0) {
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
    $[25] = imageSizeCheck;
    $[26] = onLink;
    $[27] = t8;
  } else {
    t8 = $[27];
  }
  var handleLink = t8;
  var t9;
  if ($[28] !== className) {
    t9 = classNames(className, "PFormImageFile");
    $[28] = className;
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  var t10;
  if ($[30] !== preview || $[31] !== previewMaxHeight || $[32] !== value) {
    t10 = preview && value ? /*#__PURE__*/React.createElement("a", {
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
    $[30] = preview;
    $[31] = previewMaxHeight;
    $[32] = value;
    $[33] = t10;
  } else {
    t10 = $[33];
  }
  var t11;
  if ($[34] !== accept || $[35] !== handleChange || $[36] !== handleFile || $[37] !== handleLink || $[38] !== props || $[39] !== ref || $[40] !== t10 || $[41] !== t9 || $[42] !== value) {
    t11 = /*#__PURE__*/React.createElement(PFormFile, _extends({
      ref: ref,
      className: t9,
      accept: accept,
      value: value,
      preview: t10,
      onChange: handleChange,
      onFile: handleFile,
      onLink: handleLink
    }, props));
    $[34] = accept;
    $[35] = handleChange;
    $[36] = handleFile;
    $[37] = handleLink;
    $[38] = props;
    $[39] = ref;
    $[40] = t10;
    $[41] = t9;
    $[42] = value;
    $[43] = t11;
  } else {
    t11 = $[43];
  }
  var t12;
  if ($[44] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12() {
      return setAlertDialogProps({
        open: false
      });
    };
    $[44] = t12;
  } else {
    t12 = $[44];
  }
  var t13;
  if ($[45] !== alertDialogProps) {
    t13 = /*#__PURE__*/React.createElement(PrivateAlertDialog, _extends({}, alertDialogProps, {
      onClose: t12
    }));
    $[45] = alertDialogProps;
    $[46] = t13;
  } else {
    t13 = $[46];
  }
  var t14;
  if ($[47] !== t11 || $[48] !== t13) {
    t14 = /*#__PURE__*/React.createElement(React.Fragment, null, t11, t13);
    $[47] = t11;
    $[48] = t13;
    $[49] = t14;
  } else {
    t14 = $[49];
  }
  return t14;
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
  var $ = c(190);
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
  var ratingRef = useRef(null);
  var inputRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var inputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var t6;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[0] = t6;
  } else {
    t6 = $[0];
  }
  var setErrorErrorHelperText = t6;
  var t7;
  if ($[1] !== onValidate || $[2] !== required) {
    t7 = function t7(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[1] = onValidate;
    $[2] = required;
    $[3] = t7;
  } else {
    t7 = $[3];
  }
  var validate = t7;
  var t8;
  if ($[4] !== initValue) {
    t8 = getFinalValue$3(initValue);
    $[4] = initValue;
    $[5] = t8;
  } else {
    t8 = $[5];
  }
  var _useState11 = useState(t8),
    _useState12 = _slicedToArray(_useState11, 2),
    value_0 = _useState12[0],
    setValue = _useState12[1];
  useChanged(initValue) && setValue(getFinalValue$3(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t9;
  if ($[6] !== error || $[7] !== name || $[8] !== onChange || $[9] !== onValueChange || $[10] !== validate || $[11] !== valueRef) {
    t9 = function t9(newValue) {
      var finalValue = getFinalValue$3(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[6] = error;
    $[7] = name;
    $[8] = onChange;
    $[9] = onValueChange;
    $[10] = validate;
    $[11] = valueRef;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  var updateValue = t9;
  var nowValue;
  var t10;
  if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
    var nowDate = dayjs();
    nowValue = dateToValue$3(nowDate);
    t10 = valueToYm$1(nowValue);
    $[13] = nowValue;
    $[14] = t10;
  } else {
    nowValue = $[13];
    t10 = $[14];
  }
  var nowYm = t10;
  var t11;
  if ($[15] !== minValue) {
    t11 = valueToDate$3(minValue);
    $[15] = minValue;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  var minDate = t11;
  var t12;
  if ($[17] !== maxValue) {
    t12 = valueToDate$3(maxValue);
    $[17] = maxValue;
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  var maxDate = t12;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm$1(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t13;
  if ($[19] !== minAvailableValue) {
    t13 = valueToYm$1(minAvailableValue);
    $[19] = minAvailableValue;
    $[20] = t13;
  } else {
    t13 = $[20];
  }
  var minAvailableYm = t13;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm$1(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t14;
  if ($[21] !== maxAvailableValue) {
    t14 = valueToYm$1(maxAvailableValue);
    $[21] = maxAvailableValue;
    $[22] = t14;
  } else {
    t14 = $[22];
  }
  var maxAvailableYm = t14;
  var t15;
  if ($[23] !== maxAvailableYm || $[24] !== maxDate || $[25] !== minAvailableYm || $[26] !== minDate) {
    t15 = {
      minDate: minDate,
      maxDate: maxDate,
      minAvailableYm: minAvailableYm,
      maxAvailableYm: maxAvailableYm
    };
    $[23] = maxAvailableYm;
    $[24] = maxDate;
    $[25] = minAvailableYm;
    $[26] = minDate;
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  var dateInfo = t15;
  var t16;
  var t17;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = function t16() {
      if (ratingRef.current) {
        inputRef.current = ratingRef.current.querySelector("input") || undefined;
      }
    };
    t17 = [];
    $[28] = t16;
    $[29] = t17;
  } else {
    t16 = $[28];
    t17 = $[29];
  }
  useEffect(t16, t17);
  var firstSkipRef = useRef(true);
  var nameRef = useAutoUpdateRef(name);
  var onRequestSearchSubmitRef = useAutoUpdateRef(onRequestSearchSubmit);
  var t18;
  if ($[30] !== nameRef || $[31] !== onRequestSearchSubmitRef || $[32] !== open || $[33] !== valueRef) {
    t18 = function t18() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
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
              onRequestSearchSubmitRef.current(nameRef.current, valueRef.current);
            }
          }
        }
      }
    };
    $[30] = nameRef;
    $[31] = onRequestSearchSubmitRef;
    $[32] = open;
    $[33] = valueRef;
    $[34] = t18;
  } else {
    t18 = $[34];
  }
  var t19;
  if ($[35] !== nameRef || $[36] !== onRequestSearchSubmit || $[37] !== onRequestSearchSubmitRef || $[38] !== open || $[39] !== valueRef) {
    t19 = [nameRef, onRequestSearchSubmit, onRequestSearchSubmitRef, open, valueRef];
    $[35] = nameRef;
    $[36] = onRequestSearchSubmit;
    $[37] = onRequestSearchSubmitRef;
    $[38] = open;
    $[39] = valueRef;
    $[40] = t19;
  } else {
    t19 = $[40];
  }
  useEffect(t18, t19);
  var t20;
  if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = function t20() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[41] = t20;
  } else {
    t20 = $[41];
  }
  var focus = t20;
  var t21;
  if ($[42] !== name) {
    t21 = function t21() {
      return name;
    };
    $[42] = name;
    $[43] = t21;
  } else {
    t21 = $[43];
  }
  var t22;
  if ($[44] !== initValue) {
    t22 = function t22() {
      return getFinalValue$3(initValue);
    };
    $[44] = initValue;
    $[45] = t22;
  } else {
    t22 = $[45];
  }
  var t23;
  if ($[46] !== initValue || $[47] !== updateValue) {
    t23 = function t23() {
      return updateValue(initValue);
    };
    $[46] = initValue;
    $[47] = updateValue;
    $[48] = t23;
  } else {
    t23 = $[48];
  }
  var t24;
  if ($[49] !== valueRef) {
    t24 = function t24() {
      return valueRef.current;
    };
    $[49] = valueRef;
    $[50] = t24;
  } else {
    t24 = $[50];
  }
  var t25;
  if ($[51] !== dataRef) {
    t25 = function t25() {
      return dataRef.current;
    };
    $[51] = dataRef;
    $[52] = t25;
  } else {
    t25 = $[52];
  }
  var t26;
  if ($[53] !== valueRef) {
    t26 = function t26() {
      return valueRef.current ? valueRef.current.year : null;
    };
    $[53] = valueRef;
    $[54] = t26;
  } else {
    t26 = $[54];
  }
  var t27;
  if ($[55] !== updateValue || $[56] !== valueRef) {
    t27 = function t27(year) {
      updateValue(year === null ? null : valueRef.current ? {
        year: year,
        month: valueRef.current.month
      } : {
        year: year,
        month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      });
    };
    $[55] = updateValue;
    $[56] = valueRef;
    $[57] = t27;
  } else {
    t27 = $[57];
  }
  var t28;
  if ($[58] !== valueRef) {
    t28 = function t28() {
      return valueRef.current ? valueRef.current.month : null;
    };
    $[58] = valueRef;
    $[59] = t28;
  } else {
    t28 = $[59];
  }
  var t29;
  if ($[60] !== updateValue || $[61] !== valueRef) {
    t29 = function t29(month) {
      updateValue(month === null ? null : valueRef.current ? {
        year: valueRef.current.year,
        month: month
      } : {
        year: new Date().getFullYear(),
        month: month
      });
    };
    $[60] = updateValue;
    $[61] = valueRef;
    $[62] = t29;
  } else {
    t29 = $[62];
  }
  var t30;
  if ($[63] !== exceptValue) {
    t30 = function t30() {
      return !!exceptValue;
    };
    $[63] = exceptValue;
    $[64] = t30;
  } else {
    t30 = $[64];
  }
  var t31;
  if ($[65] !== disabled) {
    t31 = function t31() {
      return !!disabled;
    };
    $[65] = disabled;
    $[66] = t31;
  } else {
    t31 = $[66];
  }
  var t32;
  if ($[67] !== hidden) {
    t32 = function t32() {
      return !!hidden;
    };
    $[67] = hidden;
    $[68] = t32;
  } else {
    t32 = $[68];
  }
  var t33;
  if ($[69] !== validate || $[70] !== valueRef) {
    t33 = function t33() {
      return validate(valueRef.current);
    };
    $[69] = validate;
    $[70] = valueRef;
    $[71] = t33;
  } else {
    t33 = $[71];
  }
  var t34;
  if ($[72] === Symbol["for"]("react.memo_cache_sentinel")) {
    t34 = function t34(error_1, errorHelperText_1) {
      return setErrorErrorHelperText(error_1, error_1 ? errorHelperText_1 : undefined);
    };
    $[72] = t34;
  } else {
    t34 = $[72];
  }
  var t35;
  if ($[73] !== formValueYearNameSuffix) {
    t35 = function t35() {
      return formValueYearNameSuffix;
    };
    $[73] = formValueYearNameSuffix;
    $[74] = t35;
  } else {
    t35 = $[74];
  }
  var t36;
  if ($[75] !== formValueMonthNameSuffix) {
    t36 = function t36() {
      return formValueMonthNameSuffix;
    };
    $[75] = formValueMonthNameSuffix;
    $[76] = t36;
  } else {
    t36 = $[76];
  }
  var t37;
  if ($[77] !== formValueYearNameSuffix || $[78] !== name) {
    t37 = function t37() {
      return "".concat(name).concat(formValueYearNameSuffix);
    };
    $[77] = formValueYearNameSuffix;
    $[78] = name;
    $[79] = t37;
  } else {
    t37 = $[79];
  }
  var t38;
  if ($[80] !== formValueMonthNameSuffix || $[81] !== name) {
    t38 = function t38() {
      return "".concat(name).concat(formValueMonthNameSuffix);
    };
    $[80] = formValueMonthNameSuffix;
    $[81] = name;
    $[82] = t38;
  } else {
    t38 = $[82];
  }
  var t39;
  if ($[83] !== t21 || $[84] !== t22 || $[85] !== t23 || $[86] !== t24 || $[87] !== t25 || $[88] !== t26 || $[89] !== t27 || $[90] !== t28 || $[91] !== t29 || $[92] !== t30 || $[93] !== t31 || $[94] !== t32 || $[95] !== t33 || $[96] !== t35 || $[97] !== t36 || $[98] !== t37 || $[99] !== t38 || $[100] !== updateValue) {
    t39 = {
      getType: _temp$7,
      getName: t21,
      getReset: t22,
      reset: t23,
      getValue: t24,
      setValue: updateValue,
      getData: t25,
      setData: setData,
      getYear: t26,
      setYear: t27,
      getMonth: t28,
      setMonth: t29,
      isExceptValue: t30,
      isDisabled: t31,
      setDisabled: setDisabled,
      isHidden: t32,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t33,
      setError: t34,
      getFormValueYearNameSuffix: t35,
      getFormValueMonthNameSuffix: t36,
      getFormValueYearName: t37,
      getFormValueMonthName: t38
    };
    $[83] = t21;
    $[84] = t22;
    $[85] = t23;
    $[86] = t24;
    $[87] = t25;
    $[88] = t26;
    $[89] = t27;
    $[90] = t28;
    $[91] = t29;
    $[92] = t30;
    $[93] = t31;
    $[94] = t32;
    $[95] = t33;
    $[96] = t35;
    $[97] = t36;
    $[98] = t37;
    $[99] = t38;
    $[100] = updateValue;
    $[101] = t39;
  } else {
    t39 = $[101];
  }
  var commands = t39;
  var t40;
  if ($[102] !== id || $[103] !== onAddValueItem) {
    t40 = function t40(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[102] = id;
    $[103] = onAddValueItem;
    $[104] = t40;
  } else {
    t40 = $[104];
  }
  var t41;
  if ($[105] !== id || $[106] !== onRemoveValueItem) {
    t41 = function t41() {
      return onRemoveValueItem(id);
    };
    $[105] = id;
    $[106] = onRemoveValueItem;
    $[107] = t41;
  } else {
    t41 = $[107];
  }
  useForwardRef(ref, commands, t40, t41);
  var t42;
  if ($[108] === Symbol["for"]("react.memo_cache_sentinel")) {
    t42 = function t42() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[108] = t42;
  } else {
    t42 = $[108];
  }
  var handleContainerMouseDown = t42;
  var t43;
  if ($[109] === Symbol["for"]("react.memo_cache_sentinel")) {
    t43 = function t43() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[109] = t43;
  } else {
    t43 = $[109];
  }
  var handleContainerFocus = t43;
  var t44;
  if ($[110] === Symbol["for"]("react.memo_cache_sentinel")) {
    t44 = function t44() {
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
    $[110] = t44;
  } else {
    t44 = $[110];
  }
  var handleContainerBlur = t44;
  var t45;
  if ($[111] !== name || $[112] !== onValueChangeByUser || $[113] !== updateValue) {
    t45 = function t45(newValue_0, isMonthSelect) {
      updateValue(newValue_0);
      if (isMonthSelect) {
        setOpen(false);
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_0);
      });
    };
    $[111] = name;
    $[112] = onValueChangeByUser;
    $[113] = updateValue;
    $[114] = t45;
  } else {
    t45 = $[114];
  }
  var handleContainerChange = t45;
  var t46;
  if ($[115] !== disabled || $[116] !== readOnly) {
    t46 = function t46() {
      if (readOnly || disabled) {
        return;
      }
      setOpen(true);
    };
    $[115] = disabled;
    $[116] = readOnly;
    $[117] = t46;
  } else {
    t46 = $[117];
  }
  var handleInputDatePickerFocus = t46;
  var t47;
  if ($[118] !== dateInfo.maxAvailableYm || $[119] !== dateInfo.minAvailableYm) {
    t47 = function t47(date) {
      var dateYm = Number(date.format("YYYYMM"));
      return dateYm < dateInfo.minAvailableYm || dateYm > dateInfo.maxAvailableYm;
    };
    $[118] = dateInfo.maxAvailableYm;
    $[119] = dateInfo.minAvailableYm;
    $[120] = t47;
  } else {
    t47 = $[120];
  }
  var handleInputDatePickerShouldDisableYear = t47;
  var t48;
  if ($[121] !== value_0) {
    t48 = value_0 ? valueToDate$3(value_0) : null;
    $[121] = value_0;
    $[122] = t48;
  } else {
    t48 = $[122];
  }
  var valueDate = t48;
  var t49;
  if ($[123] !== color || $[124] !== dateInfo.maxDate || $[125] !== dateInfo.minDate || $[126] !== disabled || $[127] !== format || $[128] !== fullWidth || $[129] !== labelShrink || $[130] !== size || $[131] !== variant) {
    t49 = {
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
    $[123] = color;
    $[124] = dateInfo.maxDate;
    $[125] = dateInfo.minDate;
    $[126] = disabled;
    $[127] = format;
    $[128] = fullWidth;
    $[129] = labelShrink;
    $[130] = size;
    $[131] = variant;
    $[132] = t49;
  } else {
    t49 = $[132];
  }
  var inputDatePickerProps = t49;
  var t50;
  if ($[133] === Symbol["for"]("react.memo_cache_sentinel")) {
    t50 = function t50() {
      return setOpen(false);
    };
    $[133] = t50;
  } else {
    t50 = $[133];
  }
  var t51;
  if ($[134] !== className) {
    t51 = classNames(className, "PFormMonthPicker");
    $[134] = className;
    $[135] = t51;
  } else {
    t51 = $[135];
  }
  var t52 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t53 = fullWidth ? 1 : undefined;
  var t54;
  if ($[136] !== t52 || $[137] !== t53) {
    t54 = {
      display: t52,
      flex: t53
    };
    $[136] = t52;
    $[137] = t53;
    $[138] = t54;
  } else {
    t54 = $[138];
  }
  var t55 = error && errorHelperText ? 8 : -14;
  var t56;
  if ($[139] !== t55) {
    t56 = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, t55]
        }
      }]
    };
    $[139] = t55;
    $[140] = t56;
  } else {
    t56 = $[140];
  }
  var t57;
  if ($[141] === Symbol["for"]("react.memo_cache_sentinel")) {
    t57 = {
      display: "flex"
    };
    $[141] = t57;
  } else {
    t57 = $[141];
  }
  var t58;
  if ($[142] !== disableFuture || $[143] !== disablePast || $[144] !== handleContainerChange || $[145] !== maxValue || $[146] !== minValue || $[147] !== value_0) {
    t58 = /*#__PURE__*/React.createElement("div", {
      style: t57
    }, /*#__PURE__*/React.createElement(PrivateMonthPicker, {
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[142] = disableFuture;
    $[143] = disablePast;
    $[144] = handleContainerChange;
    $[145] = maxValue;
    $[146] = minValue;
    $[147] = value_0;
    $[148] = t58;
  } else {
    t58 = $[148];
  }
  var t59;
  if ($[149] !== fullWidth || $[150] !== initStyle || $[151] !== inputWidth) {
    t59 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[149] = fullWidth;
    $[150] = initStyle;
    $[151] = inputWidth;
    $[152] = t59;
  } else {
    t59 = $[152];
  }
  var t60;
  if ($[153] !== updateValue) {
    t60 = function t60(v) {
      return updateValue(v ? dateToValue$3(v) : v);
    };
    $[153] = updateValue;
    $[154] = t60;
  } else {
    t60 = $[154];
  }
  var t61;
  if ($[155] === Symbol["for"]("react.memo_cache_sentinel")) {
    t61 = function t61(reason) {
      return inputDatePickerErrorRef.current = reason;
    };
    $[155] = t61;
  } else {
    t61 = $[155];
  }
  var t62;
  if ($[156] !== enableKeyboardInput || $[157] !== endAdornment || $[158] !== error || $[159] !== focused || $[160] !== handleInputDatePickerFocus || $[161] !== handleInputDatePickerShouldDisableYear || $[162] !== icon || $[163] !== inputDatePickerProps || $[164] !== label || $[165] !== labelIcon || $[166] !== readOnly || $[167] !== required || $[168] !== startAdornment || $[169] !== sx || $[170] !== t59 || $[171] !== t60 || $[172] !== valueDate) {
    t62 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: t59,
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
      onChange: t60,
      onFocus: handleInputDatePickerFocus,
      onError: t61,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[156] = enableKeyboardInput;
    $[157] = endAdornment;
    $[158] = error;
    $[159] = focused;
    $[160] = handleInputDatePickerFocus;
    $[161] = handleInputDatePickerShouldDisableYear;
    $[162] = icon;
    $[163] = inputDatePickerProps;
    $[164] = label;
    $[165] = labelIcon;
    $[166] = readOnly;
    $[167] = required;
    $[168] = startAdornment;
    $[169] = sx;
    $[170] = t59;
    $[171] = t60;
    $[172] = valueDate;
    $[173] = t62;
  } else {
    t62 = $[173];
  }
  var t63;
  if ($[174] !== open || $[175] !== t56 || $[176] !== t58 || $[177] !== t62) {
    t63 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      PopperProps: t56,
      title: t58
    }, t62);
    $[174] = open;
    $[175] = t56;
    $[176] = t58;
    $[177] = t62;
    $[178] = t63;
  } else {
    t63 = $[178];
  }
  var t64;
  if ($[179] !== error || $[180] !== errorHelperText || $[181] !== formColWithHelperText || $[182] !== helperText || $[183] !== variant) {
    t64 = !formColWithHelperText && (!!helperText || error && !!errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[179] = error;
    $[180] = errorHelperText;
    $[181] = formColWithHelperText;
    $[182] = helperText;
    $[183] = variant;
    $[184] = t64;
  } else {
    t64 = $[184];
  }
  var t65;
  if ($[185] !== t51 || $[186] !== t54 || $[187] !== t63 || $[188] !== t64) {
    t65 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs,
      adapterLocale: "ko"
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t50
    }, /*#__PURE__*/React.createElement("div", {
      className: t51,
      style: t54,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t63, t64)));
    $[185] = t51;
    $[186] = t54;
    $[187] = t63;
    $[188] = t64;
    $[189] = t65;
  } else {
    t65 = $[189];
  }
  return t65;
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
  var $ = c(276);
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
  var startInputRef = useRef(undefined);
  var endInputRef = useRef(undefined);
  var startInputDatePickerErrorRef = useRef(null);
  var endInputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    fromError = _useState10[0],
    setFromError = _useState10[1];
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    fromErrorHelperText = _useState12[0],
    setFromErrorHelperText = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    toError = _useState14[0],
    setToError = _useState14[1];
  var _useState15 = useState(),
    _useState16 = _slicedToArray(_useState15, 2),
    toErrorHelperText = _useState16[0],
    setToErrorHelperText = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    open = _useState18[0],
    setOpen = _useState18[1];
  var t8;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(error_0, fromErrorHelperText_0) {
      setFromError(error_0);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[0] = t8;
  } else {
    t8 = $[0];
  }
  var setFromErrorErrorHelperText = t8;
  var t9;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(error_1, toErrorHelperText_0) {
      setToError(error_1);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[1] = t9;
  } else {
    t9 = $[1];
  }
  var setToErrorErrorHelperText = t9;
  var t10;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(error_2, errorHelperText_0) {
      setError(error_2);
      setErrorHelperText(errorHelperText_0);
    };
    $[2] = t10;
  } else {
    t10 = $[2];
  }
  var setErrorErrorHelperText = t10;
  var t11;
  if ($[3] !== onValidate || $[4] !== required) {
    t11 = function t11(value) {
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
    };
    $[3] = onValidate;
    $[4] = required;
    $[5] = t11;
  } else {
    t11 = $[5];
  }
  var validate = t11;
  var t12;
  if ($[6] !== initValue) {
    t12 = getFinalValue$2(initValue);
    $[6] = initValue;
    $[7] = t12;
  } else {
    t12 = $[7];
  }
  var _useState19 = useState(t12),
    _useState20 = _slicedToArray(_useState19, 2),
    value_0 = _useState20[0],
    setValue = _useState20[1];
  useChanged(initValue) && setValue(getFinalValue$2(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t13;
  if ($[8] !== error || $[9] !== fromError || $[10] !== name || $[11] !== onChange || $[12] !== onValueChange || $[13] !== toError || $[14] !== validate || $[15] !== valueRef) {
    t13 = function t13(newValue) {
      var finalValue = getFinalValue$2(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error || fromError || toError) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[8] = error;
    $[9] = fromError;
    $[10] = name;
    $[11] = onChange;
    $[12] = onValueChange;
    $[13] = toError;
    $[14] = validate;
    $[15] = valueRef;
    $[16] = t13;
  } else {
    t13 = $[16];
  }
  var updateValue = t13;
  var nowValue;
  var t14;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    var nowDate = dayjs();
    nowValue = dateToValue$2(nowDate);
    t14 = valueToYm(nowValue);
    $[17] = nowValue;
    $[18] = t14;
  } else {
    nowValue = $[17];
    t14 = $[18];
  }
  var nowYm = t14;
  var t15;
  if ($[19] !== minValue) {
    t15 = minValue ? valueToDate$2(minValue) : undefined;
    $[19] = minValue;
    $[20] = t15;
  } else {
    t15 = $[20];
  }
  var minDate = t15;
  var t16;
  if ($[21] !== maxValue) {
    t16 = maxValue ? valueToDate$2(maxValue) : undefined;
    $[21] = maxValue;
    $[22] = t16;
  } else {
    t16 = $[22];
  }
  var maxDate = t16;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t17;
  if ($[23] !== minAvailableValue) {
    t17 = valueToYm(minAvailableValue);
    $[23] = minAvailableValue;
    $[24] = t17;
  } else {
    t17 = $[24];
  }
  var minAvailableYm = t17;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t18;
  if ($[25] !== maxAvailableValue) {
    t18 = valueToYm(maxAvailableValue);
    $[25] = maxAvailableValue;
    $[26] = t18;
  } else {
    t18 = $[26];
  }
  var maxAvailableYm = t18;
  var t19;
  if ($[27] !== maxAvailableYm || $[28] !== maxDate || $[29] !== minAvailableYm || $[30] !== minDate) {
    t19 = {
      minDate: minDate,
      maxDate: maxDate,
      minAvailableYm: minAvailableYm,
      maxAvailableYm: maxAvailableYm
    };
    $[27] = maxAvailableYm;
    $[28] = maxDate;
    $[29] = minAvailableYm;
    $[30] = minDate;
    $[31] = t19;
  } else {
    t19 = $[31];
  }
  var dateInfo = t19;
  var firstSkipRef = useRef(true);
  var nameRef = useAutoUpdateRef(name);
  var onRequestSearchSubmitRef = useAutoUpdateRef(onRequestSearchSubmit);
  var t20;
  var t21;
  if ($[32] !== nameRef || $[33] !== onRequestSearchSubmitRef || $[34] !== open || $[35] !== valueRef) {
    t20 = function t20() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
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
              onRequestSearchSubmitRef.current(nameRef.current, valueRef.current);
            }
          }
        }
      }
    };
    t21 = [nameRef, onRequestSearchSubmitRef, open, valueRef];
    $[32] = nameRef;
    $[33] = onRequestSearchSubmitRef;
    $[34] = open;
    $[35] = valueRef;
    $[36] = t20;
    $[37] = t21;
  } else {
    t20 = $[36];
    t21 = $[37];
  }
  useEffect(t20, t21);
  var t22;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = function t22() {
      var _startInputRef$curren;
      (_startInputRef$curren = startInputRef.current) === null || _startInputRef$curren === void 0 || _startInputRef$curren.focus();
    };
    $[38] = t22;
  } else {
    t22 = $[38];
  }
  var focus = t22;
  var t23;
  if ($[39] !== name) {
    t23 = function t23() {
      return name;
    };
    $[39] = name;
    $[40] = t23;
  } else {
    t23 = $[40];
  }
  var t24;
  if ($[41] !== initValue) {
    t24 = function t24() {
      return getFinalValue$2(initValue);
    };
    $[41] = initValue;
    $[42] = t24;
  } else {
    t24 = $[42];
  }
  var t25;
  if ($[43] !== initValue || $[44] !== updateValue) {
    t25 = function t25() {
      return updateValue(initValue);
    };
    $[43] = initValue;
    $[44] = updateValue;
    $[45] = t25;
  } else {
    t25 = $[45];
  }
  var t26;
  if ($[46] !== valueRef) {
    t26 = function t26() {
      return valueRef.current;
    };
    $[46] = valueRef;
    $[47] = t26;
  } else {
    t26 = $[47];
  }
  var t27;
  if ($[48] !== dataRef) {
    t27 = function t27() {
      return dataRef.current;
    };
    $[48] = dataRef;
    $[49] = t27;
  } else {
    t27 = $[49];
  }
  var t28;
  if ($[50] !== valueRef) {
    t28 = function t28() {
      return valueRef.current[0];
    };
    $[50] = valueRef;
    $[51] = t28;
  } else {
    t28 = $[51];
  }
  var t29;
  if ($[52] !== updateValue || $[53] !== valueRef) {
    t29 = function t29(value_1) {
      return updateValue([value_1, valueRef.current[1]]);
    };
    $[52] = updateValue;
    $[53] = valueRef;
    $[54] = t29;
  } else {
    t29 = $[54];
  }
  var t30;
  if ($[55] !== valueRef) {
    t30 = function t30() {
      return valueRef.current[1];
    };
    $[55] = valueRef;
    $[56] = t30;
  } else {
    t30 = $[56];
  }
  var t31;
  if ($[57] !== updateValue || $[58] !== valueRef) {
    t31 = function t31(value_2) {
      return updateValue([valueRef.current[0], value_2]);
    };
    $[57] = updateValue;
    $[58] = valueRef;
    $[59] = t31;
  } else {
    t31 = $[59];
  }
  var t32;
  if ($[60] !== valueRef) {
    t32 = function t32() {
      return valueRef.current[0] ? valueRef.current[0].year : null;
    };
    $[60] = valueRef;
    $[61] = t32;
  } else {
    t32 = $[61];
  }
  var t33;
  if ($[62] !== updateValue || $[63] !== valueRef) {
    t33 = function t33(year) {
      updateValue([year === null ? null : valueRef.current[0] ? {
        year: year,
        month: valueRef.current[0].month
      } : {
        year: year,
        month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      }, valueRef.current[1]]);
    };
    $[62] = updateValue;
    $[63] = valueRef;
    $[64] = t33;
  } else {
    t33 = $[64];
  }
  var t34;
  if ($[65] !== valueRef) {
    t34 = function t34() {
      return valueRef.current[0] ? valueRef.current[0].month : null;
    };
    $[65] = valueRef;
    $[66] = t34;
  } else {
    t34 = $[66];
  }
  var t35;
  if ($[67] !== updateValue || $[68] !== valueRef) {
    t35 = function t35(month) {
      updateValue([month === null ? null : valueRef.current[0] ? {
        year: valueRef.current[0].year,
        month: month
      } : {
        year: new Date().getFullYear(),
        month: month
      }, valueRef.current[1]]);
    };
    $[67] = updateValue;
    $[68] = valueRef;
    $[69] = t35;
  } else {
    t35 = $[69];
  }
  var t36;
  if ($[70] !== valueRef) {
    t36 = function t36() {
      return valueRef.current[1] ? valueRef.current[1].year : null;
    };
    $[70] = valueRef;
    $[71] = t36;
  } else {
    t36 = $[71];
  }
  var t37;
  if ($[72] !== updateValue || $[73] !== valueRef) {
    t37 = function t37(year_0) {
      updateValue([valueRef.current[0], year_0 === null ? null : valueRef.current[1] ? {
        year: year_0,
        month: valueRef.current[1].month
      } : {
        year: year_0,
        month: year_0 === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      }]);
    };
    $[72] = updateValue;
    $[73] = valueRef;
    $[74] = t37;
  } else {
    t37 = $[74];
  }
  var t38;
  if ($[75] !== valueRef) {
    t38 = function t38() {
      return valueRef.current[1] ? valueRef.current[1].month : null;
    };
    $[75] = valueRef;
    $[76] = t38;
  } else {
    t38 = $[76];
  }
  var t39;
  if ($[77] !== updateValue || $[78] !== valueRef) {
    t39 = function t39(month_0) {
      updateValue([valueRef.current[0], month_0 === null ? null : valueRef.current[1] ? {
        year: valueRef.current[1].year,
        month: month_0
      } : {
        year: new Date().getFullYear(),
        month: month_0
      }]);
    };
    $[77] = updateValue;
    $[78] = valueRef;
    $[79] = t39;
  } else {
    t39 = $[79];
  }
  var t40;
  if ($[80] !== exceptValue) {
    t40 = function t40() {
      return !!exceptValue;
    };
    $[80] = exceptValue;
    $[81] = t40;
  } else {
    t40 = $[81];
  }
  var t41;
  if ($[82] !== disabled) {
    t41 = function t41() {
      return !!disabled;
    };
    $[82] = disabled;
    $[83] = t41;
  } else {
    t41 = $[83];
  }
  var t42;
  if ($[84] !== hidden) {
    t42 = function t42() {
      return !!hidden;
    };
    $[84] = hidden;
    $[85] = t42;
  } else {
    t42 = $[85];
  }
  var t43;
  if ($[86] !== validate || $[87] !== valueRef) {
    t43 = function t43() {
      return validate(valueRef.current);
    };
    $[86] = validate;
    $[87] = valueRef;
    $[88] = t43;
  } else {
    t43 = $[88];
  }
  var t44;
  if ($[89] === Symbol["for"]("react.memo_cache_sentinel")) {
    t44 = function t44(error_3, errorHelperText_1) {
      return setErrorErrorHelperText(error_3, error_3 ? errorHelperText_1 : undefined);
    };
    $[89] = t44;
  } else {
    t44 = $[89];
  }
  var t45;
  if ($[90] !== formValueFromYearNameSuffix) {
    t45 = function t45() {
      return formValueFromYearNameSuffix;
    };
    $[90] = formValueFromYearNameSuffix;
    $[91] = t45;
  } else {
    t45 = $[91];
  }
  var t46;
  if ($[92] !== formValueFromMonthNameSuffix) {
    t46 = function t46() {
      return formValueFromMonthNameSuffix;
    };
    $[92] = formValueFromMonthNameSuffix;
    $[93] = t46;
  } else {
    t46 = $[93];
  }
  var t47;
  if ($[94] !== formValueToYearNameSuffix) {
    t47 = function t47() {
      return formValueToYearNameSuffix;
    };
    $[94] = formValueToYearNameSuffix;
    $[95] = t47;
  } else {
    t47 = $[95];
  }
  var t48;
  if ($[96] !== formValueToMonthNameSuffix) {
    t48 = function t48() {
      return formValueToMonthNameSuffix;
    };
    $[96] = formValueToMonthNameSuffix;
    $[97] = t48;
  } else {
    t48 = $[97];
  }
  var t49;
  if ($[98] !== formValueFromYearNameSuffix || $[99] !== name) {
    t49 = function t49() {
      return "".concat(name).concat(formValueFromYearNameSuffix);
    };
    $[98] = formValueFromYearNameSuffix;
    $[99] = name;
    $[100] = t49;
  } else {
    t49 = $[100];
  }
  var t50;
  if ($[101] !== formValueFromMonthNameSuffix || $[102] !== name) {
    t50 = function t50() {
      return "".concat(name).concat(formValueFromMonthNameSuffix);
    };
    $[101] = formValueFromMonthNameSuffix;
    $[102] = name;
    $[103] = t50;
  } else {
    t50 = $[103];
  }
  var t51;
  if ($[104] !== formValueToYearNameSuffix || $[105] !== name) {
    t51 = function t51() {
      return "".concat(name).concat(formValueToYearNameSuffix);
    };
    $[104] = formValueToYearNameSuffix;
    $[105] = name;
    $[106] = t51;
  } else {
    t51 = $[106];
  }
  var t52;
  if ($[107] !== formValueToMonthNameSuffix || $[108] !== name) {
    t52 = function t52() {
      return "".concat(name).concat(formValueToMonthNameSuffix);
    };
    $[107] = formValueToMonthNameSuffix;
    $[108] = name;
    $[109] = t52;
  } else {
    t52 = $[109];
  }
  var t53;
  if ($[110] !== t23 || $[111] !== t24 || $[112] !== t25 || $[113] !== t26 || $[114] !== t27 || $[115] !== t28 || $[116] !== t29 || $[117] !== t30 || $[118] !== t31 || $[119] !== t32 || $[120] !== t33 || $[121] !== t34 || $[122] !== t35 || $[123] !== t36 || $[124] !== t37 || $[125] !== t38 || $[126] !== t39 || $[127] !== t40 || $[128] !== t41 || $[129] !== t42 || $[130] !== t43 || $[131] !== t45 || $[132] !== t46 || $[133] !== t47 || $[134] !== t48 || $[135] !== t49 || $[136] !== t50 || $[137] !== t51 || $[138] !== t52 || $[139] !== updateValue) {
    t53 = {
      getType: _temp$6,
      getName: t23,
      getReset: t24,
      reset: t25,
      getValue: t26,
      setValue: updateValue,
      getData: t27,
      setData: setData,
      getFromValue: t28,
      setFromValue: t29,
      getToValue: t30,
      setToValue: t31,
      getFromYear: t32,
      setFromYear: t33,
      getFromMonth: t34,
      setFromMonth: t35,
      getToYear: t36,
      setToYear: t37,
      getToMonth: t38,
      setToMonth: t39,
      isExceptValue: t40,
      isDisabled: t41,
      setDisabled: setDisabled,
      isHidden: t42,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t43,
      setError: t44,
      getFormValueFromYearNameSuffix: t45,
      getFormValueFromMonthNameSuffix: t46,
      getFormValueToYearNameSuffix: t47,
      getFormValueToMonthNameSuffix: t48,
      getFormValueFromYearName: t49,
      getFormValueFromMonthName: t50,
      getFormValueToYearName: t51,
      getFormValueToMonthName: t52
    };
    $[110] = t23;
    $[111] = t24;
    $[112] = t25;
    $[113] = t26;
    $[114] = t27;
    $[115] = t28;
    $[116] = t29;
    $[117] = t30;
    $[118] = t31;
    $[119] = t32;
    $[120] = t33;
    $[121] = t34;
    $[122] = t35;
    $[123] = t36;
    $[124] = t37;
    $[125] = t38;
    $[126] = t39;
    $[127] = t40;
    $[128] = t41;
    $[129] = t42;
    $[130] = t43;
    $[131] = t45;
    $[132] = t46;
    $[133] = t47;
    $[134] = t48;
    $[135] = t49;
    $[136] = t50;
    $[137] = t51;
    $[138] = t52;
    $[139] = updateValue;
    $[140] = t53;
  } else {
    t53 = $[140];
  }
  var commands = t53;
  var t54;
  if ($[141] !== id || $[142] !== onAddValueItem) {
    t54 = function t54(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[141] = id;
    $[142] = onAddValueItem;
    $[143] = t54;
  } else {
    t54 = $[143];
  }
  var t55;
  if ($[144] !== id || $[145] !== onRemoveValueItem) {
    t55 = function t55() {
      return onRemoveValueItem(id);
    };
    $[144] = id;
    $[145] = onRemoveValueItem;
    $[146] = t55;
  } else {
    t55 = $[146];
  }
  useForwardRef(ref, commands, t54, t55);
  var t56;
  if ($[147] !== name || $[148] !== onValueChangeByUser || $[149] !== updateValue) {
    t56 = function t56(newValue_0, selectType, isMonthSelect) {
      updateValue(newValue_0);
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
        onValueChangeByUser(name, newValue_0);
      });
    };
    $[147] = name;
    $[148] = onValueChangeByUser;
    $[149] = updateValue;
    $[150] = t56;
  } else {
    t56 = $[150];
  }
  var handleContainerChange = t56;
  var t57;
  if ($[151] !== dateInfo.maxAvailableYm || $[152] !== dateInfo.minAvailableYm || $[153] !== fromError || $[154] !== name || $[155] !== onValueChangeByUser || $[156] !== toError || $[157] !== updateValue || $[158] !== validate || $[159] !== valueRef) {
    t57 = function t57(selectType_0, date) {
      if (date == null || date.isValid()) {
        if (selectType_0 === "start") {
          var newValue_1 = [date ? dateToValue$2(date) : null, valueRef.current[1]];
          if (newValue_1[0] !== null && valueToYm(newValue_1[0]) >= dateInfo.minAvailableYm && valueToYm(newValue_1[0]) <= dateInfo.maxAvailableYm) {
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
        } else {
          var newValue_2 = [valueRef.current[0], date ? dateToValue$2(date) : null];
          if (newValue_2[1] !== null && valueToYm(newValue_2[1]) >= dateInfo.minAvailableYm && valueToYm(newValue_2[1]) <= dateInfo.maxAvailableYm) {
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
    };
    $[151] = dateInfo.maxAvailableYm;
    $[152] = dateInfo.minAvailableYm;
    $[153] = fromError;
    $[154] = name;
    $[155] = onValueChangeByUser;
    $[156] = toError;
    $[157] = updateValue;
    $[158] = validate;
    $[159] = valueRef;
    $[160] = t57;
  } else {
    t57 = $[160];
  }
  var handleInputDatePickerChange = t57;
  var t58;
  if ($[161] !== disabled || $[162] !== readOnly || $[163] !== value_0) {
    t58 = function t58(selectType_1) {
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
    $[161] = disabled;
    $[162] = readOnly;
    $[163] = value_0;
    $[164] = t58;
  } else {
    t58 = $[164];
  }
  var handleInputDatePickerFocus = t58;
  var t59;
  if ($[165] !== dateInfo.maxAvailableYm || $[166] !== dateInfo.minAvailableYm) {
    t59 = function t59(dt) {
      var ym = dt.year() * 100 + (dt.month() + 1);
      return ym < dateInfo.minAvailableYm || ym > dateInfo.maxAvailableYm;
    };
    $[165] = dateInfo.maxAvailableYm;
    $[166] = dateInfo.minAvailableYm;
    $[167] = t59;
  } else {
    t59 = $[167];
  }
  var handleInputDatePickerShouldDisableYear = t59;
  var t60;
  if ($[168] !== value_0) {
    t60 = !!value_0 && !!value_0[0] ? valueToDate$2(value_0[0]) : null;
    $[168] = value_0;
    $[169] = t60;
  } else {
    t60 = $[169];
  }
  var t61;
  if ($[170] !== value_0) {
    t61 = !!value_0 && !!value_0[1] ? valueToDate$2(value_0[1]) : null;
    $[170] = value_0;
    $[171] = t61;
  } else {
    t61 = $[171];
  }
  var t62;
  if ($[172] !== t60 || $[173] !== t61) {
    t62 = [t60, t61];
    $[172] = t60;
    $[173] = t61;
    $[174] = t62;
  } else {
    t62 = $[174];
  }
  var valueDate = t62;
  var t63;
  if ($[175] !== align || $[176] !== color || $[177] !== dateInfo.maxDate || $[178] !== dateInfo.minDate || $[179] !== disabled || $[180] !== format || $[181] !== fullWidth || $[182] !== labelShrink || $[183] !== size || $[184] !== variant) {
    t63 = {
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
    $[175] = align;
    $[176] = color;
    $[177] = dateInfo.maxDate;
    $[178] = dateInfo.minDate;
    $[179] = disabled;
    $[180] = format;
    $[181] = fullWidth;
    $[182] = labelShrink;
    $[183] = size;
    $[184] = variant;
    $[185] = t63;
  } else {
    t63 = $[185];
  }
  var inputDatePickerProps = t63;
  var t64;
  if ($[186] !== fullWidth || $[187] !== initStyle || $[188] !== inputWidth) {
    t64 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[186] = fullWidth;
    $[187] = initStyle;
    $[188] = inputWidth;
    $[189] = t64;
  } else {
    t64 = $[189];
  }
  var inputStyle = t64;
  var t65;
  if ($[190] === Symbol["for"]("react.memo_cache_sentinel")) {
    t65 = function t65() {
      return setOpen(false);
    };
    $[190] = t65;
  } else {
    t65 = $[190];
  }
  var t66;
  if ($[191] !== className) {
    t66 = classNames(className, "PFormMonthRangePicker");
    $[191] = className;
    $[192] = t66;
  } else {
    t66 = $[192];
  }
  var t67 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t68 = fullWidth ? 1 : undefined;
  var t69;
  if ($[193] !== t67 || $[194] !== t68) {
    t69 = {
      display: t67,
      flex: t68
    };
    $[193] = t67;
    $[194] = t68;
    $[195] = t69;
  } else {
    t69 = $[195];
  }
  var t70 = error && errorHelperText ? 8 : -14;
  var t71;
  if ($[196] !== t70) {
    t71 = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, t70]
        }
      }]
    };
    $[196] = t70;
    $[197] = t71;
  } else {
    t71 = $[197];
  }
  var t72;
  if ($[198] === Symbol["for"]("react.memo_cache_sentinel")) {
    t72 = {
      display: "flex"
    };
    $[198] = t72;
  } else {
    t72 = $[198];
  }
  var t73;
  if ($[199] !== disableFuture || $[200] !== disablePast || $[201] !== handleContainerChange || $[202] !== maxValue || $[203] !== minValue || $[204] !== value_0) {
    t73 = /*#__PURE__*/React.createElement("div", {
      style: t72
    }, /*#__PURE__*/React.createElement(PrivateMonthRangePicker, {
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[199] = disableFuture;
    $[200] = disablePast;
    $[201] = handleContainerChange;
    $[202] = maxValue;
    $[203] = minValue;
    $[204] = value_0;
    $[205] = t73;
  } else {
    t73 = $[205];
  }
  var t74 = error || fromError;
  var t75 = focused || open;
  var t76;
  if ($[206] !== handleInputDatePickerChange) {
    t76 = function t76(v) {
      return handleInputDatePickerChange("start", v);
    };
    $[206] = handleInputDatePickerChange;
    $[207] = t76;
  } else {
    t76 = $[207];
  }
  var t77;
  if ($[208] !== handleInputDatePickerFocus) {
    t77 = function t77() {
      return handleInputDatePickerFocus("start");
    };
    $[208] = handleInputDatePickerFocus;
    $[209] = t77;
  } else {
    t77 = $[209];
  }
  var t78;
  if ($[210] === Symbol["for"]("react.memo_cache_sentinel")) {
    t78 = function t78(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[210] = t78;
  } else {
    t78 = $[210];
  }
  var t79;
  if ($[211] !== enableKeyboardInput || $[212] !== endAdornment || $[213] !== fromLabel || $[214] !== fromLabelIcon || $[215] !== handleInputDatePickerShouldDisableYear || $[216] !== icon || $[217] !== inputDatePickerProps || $[218] !== inputStyle || $[219] !== readOnly || $[220] !== required || $[221] !== startAdornment || $[222] !== sx || $[223] !== t74 || $[224] !== t75 || $[225] !== t76 || $[226] !== t77 || $[227] !== valueDate[0]) {
    t79 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      sx: sx,
      value: valueDate[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t74,
      focused: t75,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: startInputRef,
      onChange: t76,
      onFocus: t77,
      onError: t78,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[211] = enableKeyboardInput;
    $[212] = endAdornment;
    $[213] = fromLabel;
    $[214] = fromLabelIcon;
    $[215] = handleInputDatePickerShouldDisableYear;
    $[216] = icon;
    $[217] = inputDatePickerProps;
    $[218] = inputStyle;
    $[219] = readOnly;
    $[220] = required;
    $[221] = startAdornment;
    $[222] = sx;
    $[223] = t74;
    $[224] = t75;
    $[225] = t76;
    $[226] = t77;
    $[227] = valueDate[0];
    $[228] = t79;
  } else {
    t79 = $[228];
  }
  var t80;
  if ($[229] === Symbol["for"]("react.memo_cache_sentinel")) {
    t80 = /*#__PURE__*/React.createElement(Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[229] = t80;
  } else {
    t80 = $[229];
  }
  var t81 = error || toError;
  var t82 = focused || open;
  var t83;
  if ($[230] !== handleInputDatePickerChange) {
    t83 = function t83(v_0) {
      return handleInputDatePickerChange("end", v_0);
    };
    $[230] = handleInputDatePickerChange;
    $[231] = t83;
  } else {
    t83 = $[231];
  }
  var t84;
  if ($[232] !== handleInputDatePickerFocus) {
    t84 = function t84() {
      return handleInputDatePickerFocus("end");
    };
    $[232] = handleInputDatePickerFocus;
    $[233] = t84;
  } else {
    t84 = $[233];
  }
  var t85;
  if ($[234] === Symbol["for"]("react.memo_cache_sentinel")) {
    t85 = function t85(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[234] = t85;
  } else {
    t85 = $[234];
  }
  var t86;
  if ($[235] !== enableKeyboardInput || $[236] !== endAdornment || $[237] !== handleInputDatePickerShouldDisableYear || $[238] !== icon || $[239] !== inputDatePickerProps || $[240] !== inputStyle || $[241] !== readOnly || $[242] !== required || $[243] !== startAdornment || $[244] !== sx || $[245] !== t81 || $[246] !== t82 || $[247] !== t83 || $[248] !== t84 || $[249] !== toLabel || $[250] !== toLabelIcon || $[251] !== valueDate[1]) {
    t86 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      sx: sx,
      value: valueDate[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t81,
      focused: t82,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: endInputRef,
      onChange: t83,
      onFocus: t84,
      onError: t85,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[235] = enableKeyboardInput;
    $[236] = endAdornment;
    $[237] = handleInputDatePickerShouldDisableYear;
    $[238] = icon;
    $[239] = inputDatePickerProps;
    $[240] = inputStyle;
    $[241] = readOnly;
    $[242] = required;
    $[243] = startAdornment;
    $[244] = sx;
    $[245] = t81;
    $[246] = t82;
    $[247] = t83;
    $[248] = t84;
    $[249] = toLabel;
    $[250] = toLabelIcon;
    $[251] = valueDate[1];
    $[252] = t86;
  } else {
    t86 = $[252];
  }
  var t87;
  if ($[253] !== t79 || $[254] !== t86) {
    t87 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      alignItems: "center"
    }, t79, t80, t86);
    $[253] = t79;
    $[254] = t86;
    $[255] = t87;
  } else {
    t87 = $[255];
  }
  var t88;
  if ($[256] !== open || $[257] !== t71 || $[258] !== t73 || $[259] !== t87) {
    t88 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      PopperProps: t71,
      title: t73
    }, t87);
    $[256] = open;
    $[257] = t71;
    $[258] = t73;
    $[259] = t87;
    $[260] = t88;
  } else {
    t88 = $[260];
  }
  var t89;
  if ($[261] !== error || $[262] !== errorHelperText || $[263] !== formColWithHelperText || $[264] !== fromError || $[265] !== fromErrorHelperText || $[266] !== helperText || $[267] !== toError || $[268] !== toErrorHelperText || $[269] !== variant) {
    t89 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[261] = error;
    $[262] = errorHelperText;
    $[263] = formColWithHelperText;
    $[264] = fromError;
    $[265] = fromErrorHelperText;
    $[266] = helperText;
    $[267] = toError;
    $[268] = toErrorHelperText;
    $[269] = variant;
    $[270] = t89;
  } else {
    t89 = $[270];
  }
  var t90;
  if ($[271] !== t66 || $[272] !== t69 || $[273] !== t88 || $[274] !== t89) {
    t90 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs,
      adapterLocale: "ko"
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t65
    }, /*#__PURE__*/React.createElement("div", {
      className: t66,
      style: t69
    }, t88, t89)));
    $[271] = t66;
    $[272] = t69;
    $[273] = t88;
    $[274] = t89;
    $[275] = t90;
  } else {
    t90 = $[275];
  }
  return t90;
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
  var $ = c(151);
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
  var ratingRef = useRef(null);
  var inputRef = useRef(undefined);
  var closeTimeoutRef = useRef(undefined);
  var mouseDownTimeRef = useRef(undefined);
  var inputDatePickerErrorRef = useRef(null);
  var openValueRef = useRef(undefined);
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var t4;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = function t4(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[0] = t4;
  } else {
    t4 = $[0];
  }
  var setErrorErrorHelperText = t4;
  var t5;
  if ($[1] !== onValidate || $[2] !== required) {
    t5 = function t5(value) {
      if (required && empty(value)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
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
    };
    $[1] = onValidate;
    $[2] = required;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var validate = t5;
  var t6;
  if ($[4] !== initValue) {
    t6 = getFinalValue$1(initValue);
    $[4] = initValue;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var _useState11 = useState(t6),
    _useState12 = _slicedToArray(_useState11, 2),
    value_0 = _useState12[0],
    setValue = _useState12[1];
  useChanged(initValue) && setValue(getFinalValue$1(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t7;
  if ($[6] !== error || $[7] !== name || $[8] !== onChange || $[9] !== onValueChange || $[10] !== validate || $[11] !== valueRef) {
    t7 = function t7(newValue) {
      var finalValue = getFinalValue$1(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[6] = error;
    $[7] = name;
    $[8] = onChange;
    $[9] = onValueChange;
    $[10] = validate;
    $[11] = valueRef;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  var updateValue = t7;
  var t8;
  if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = new Date().getFullYear();
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  var nowYear = t8;
  var t9;
  if ($[14] !== minYear) {
    t9 = minYear ? valueToDate$1(minYear) : undefined;
    $[14] = minYear;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var minDate = t9;
  var t10;
  if ($[16] !== maxYear) {
    t10 = maxYear ? valueToDate$1(maxYear) : undefined;
    $[16] = maxYear;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  var maxDate = t10;
  var t11;
  if ($[18] !== maxDate || $[19] !== minDate) {
    t11 = {
      nowYear: nowYear,
      min: minDate,
      max: maxDate
    };
    $[18] = maxDate;
    $[19] = minDate;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  var dateInfo = t11;
  var t12;
  var t13;
  if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12() {
      if (ratingRef.current) {
        inputRef.current = ratingRef.current.querySelector("input") || undefined;
      }
    };
    t13 = [];
    $[21] = t12;
    $[22] = t13;
  } else {
    t12 = $[21];
    t13 = $[22];
  }
  useEffect(t12, t13);
  var firstSkipRef = useRef(true);
  var nameRef = useAutoUpdateRef(name);
  var onRequestSearchSubmitRef = useAutoUpdateRef(onRequestSearchSubmit);
  var t14;
  var t15;
  if ($[23] !== nameRef || $[24] !== onRequestSearchSubmitRef || $[25] !== open || $[26] !== valueRef) {
    t14 = function t14() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
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
              onRequestSearchSubmitRef.current(nameRef.current, valueRef.current);
            }
          }
        }
      }
    };
    t15 = [nameRef, onRequestSearchSubmitRef, open, valueRef];
    $[23] = nameRef;
    $[24] = onRequestSearchSubmitRef;
    $[25] = open;
    $[26] = valueRef;
    $[27] = t14;
    $[28] = t15;
  } else {
    t14 = $[27];
    t15 = $[28];
  }
  useEffect(t14, t15);
  var t16;
  if ($[29] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = function t16() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  var focus = t16;
  var t17;
  if ($[30] !== name) {
    t17 = function t17() {
      return name;
    };
    $[30] = name;
    $[31] = t17;
  } else {
    t17 = $[31];
  }
  var t18;
  if ($[32] !== initValue) {
    t18 = function t18() {
      return getFinalValue$1(initValue);
    };
    $[32] = initValue;
    $[33] = t18;
  } else {
    t18 = $[33];
  }
  var t19;
  if ($[34] !== initValue || $[35] !== updateValue) {
    t19 = function t19() {
      return updateValue(initValue);
    };
    $[34] = initValue;
    $[35] = updateValue;
    $[36] = t19;
  } else {
    t19 = $[36];
  }
  var t20;
  if ($[37] !== valueRef) {
    t20 = function t20() {
      return valueRef.current;
    };
    $[37] = valueRef;
    $[38] = t20;
  } else {
    t20 = $[38];
  }
  var t21;
  if ($[39] !== dataRef) {
    t21 = function t21() {
      return dataRef.current;
    };
    $[39] = dataRef;
    $[40] = t21;
  } else {
    t21 = $[40];
  }
  var t22;
  if ($[41] !== exceptValue) {
    t22 = function t22() {
      return !!exceptValue;
    };
    $[41] = exceptValue;
    $[42] = t22;
  } else {
    t22 = $[42];
  }
  var t23;
  if ($[43] !== disabled) {
    t23 = function t23() {
      return !!disabled;
    };
    $[43] = disabled;
    $[44] = t23;
  } else {
    t23 = $[44];
  }
  var t24;
  if ($[45] !== hidden) {
    t24 = function t24() {
      return !!hidden;
    };
    $[45] = hidden;
    $[46] = t24;
  } else {
    t24 = $[46];
  }
  var t25;
  if ($[47] !== validate || $[48] !== valueRef) {
    t25 = function t25() {
      return validate(valueRef.current);
    };
    $[47] = validate;
    $[48] = valueRef;
    $[49] = t25;
  } else {
    t25 = $[49];
  }
  var t26;
  if ($[50] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = function t26(error_1, errorHelperText_1) {
      return setErrorErrorHelperText(error_1, error_1 ? errorHelperText_1 : undefined);
    };
    $[50] = t26;
  } else {
    t26 = $[50];
  }
  var t27;
  if ($[51] !== t17 || $[52] !== t18 || $[53] !== t19 || $[54] !== t20 || $[55] !== t21 || $[56] !== t22 || $[57] !== t23 || $[58] !== t24 || $[59] !== t25 || $[60] !== updateValue) {
    t27 = {
      getType: _temp$5,
      getName: t17,
      getReset: t18,
      reset: t19,
      getValue: t20,
      setValue: updateValue,
      getData: t21,
      setData: setData,
      isExceptValue: t22,
      isDisabled: t23,
      setDisabled: setDisabled,
      isHidden: t24,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t25,
      setError: t26
    };
    $[51] = t17;
    $[52] = t18;
    $[53] = t19;
    $[54] = t20;
    $[55] = t21;
    $[56] = t22;
    $[57] = t23;
    $[58] = t24;
    $[59] = t25;
    $[60] = updateValue;
    $[61] = t27;
  } else {
    t27 = $[61];
  }
  var commands = t27;
  var t28;
  if ($[62] !== id || $[63] !== onAddValueItem) {
    t28 = function t28(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[62] = id;
    $[63] = onAddValueItem;
    $[64] = t28;
  } else {
    t28 = $[64];
  }
  var t29;
  if ($[65] !== id || $[66] !== onRemoveValueItem) {
    t29 = function t29() {
      return onRemoveValueItem(id);
    };
    $[65] = id;
    $[66] = onRemoveValueItem;
    $[67] = t29;
  } else {
    t29 = $[67];
  }
  useForwardRef(ref, commands, t28, t29);
  var t30;
  if ($[68] === Symbol["for"]("react.memo_cache_sentinel")) {
    t30 = function t30() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[68] = t30;
  } else {
    t30 = $[68];
  }
  var handleContainerMouseDown = t30;
  var t31;
  if ($[69] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[69] = t31;
  } else {
    t31 = $[69];
  }
  var handleContainerFocus = t31;
  var t32;
  if ($[70] === Symbol["for"]("react.memo_cache_sentinel")) {
    t32 = function t32() {
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
    $[70] = t32;
  } else {
    t32 = $[70];
  }
  var handleContainerBlur = t32;
  var t33;
  if ($[71] !== name || $[72] !== onValueChangeByUser || $[73] !== updateValue) {
    t33 = function t33(newValue_0, isClick) {
      updateValue(newValue_0);
      if (isClick) {
        setOpen(false);
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_0);
      });
    };
    $[71] = name;
    $[72] = onValueChangeByUser;
    $[73] = updateValue;
    $[74] = t33;
  } else {
    t33 = $[74];
  }
  var handleContainerChange = t33;
  var t34;
  if ($[75] !== name || $[76] !== onValueChangeByUser || $[77] !== updateValue) {
    t34 = function t34(v) {
      var newValue_1 = v ? dateToValue$1(v) : v;
      updateValue(newValue_1);
      setTimeout(function () {
        onValueChangeByUser(name, newValue_1);
      });
    };
    $[75] = name;
    $[76] = onValueChangeByUser;
    $[77] = updateValue;
    $[78] = t34;
  } else {
    t34 = $[78];
  }
  var handleInputDatePickerChange = t34;
  var t35;
  if ($[79] !== disabled || $[80] !== readOnly) {
    t35 = function t35() {
      if (readOnly || disabled) {
        return;
      }
      setOpen(true);
    };
    $[79] = disabled;
    $[80] = readOnly;
    $[81] = t35;
  } else {
    t35 = $[81];
  }
  var handleInputDatePickerFocus = t35;
  var t36;
  if ($[82] !== dateInfo.nowYear || $[83] !== disableFuture || $[84] !== disablePast) {
    t36 = function t36(year) {
      return !!disablePast && year.year() < dateInfo.nowYear || !!disableFuture && year.year() > dateInfo.nowYear;
    };
    $[82] = dateInfo.nowYear;
    $[83] = disableFuture;
    $[84] = disablePast;
    $[85] = t36;
  } else {
    t36 = $[85];
  }
  var handleInputDatePickerShouldDisableYear = t36;
  var t37;
  if ($[86] !== value_0) {
    t37 = value_0 ? valueToDate$1(value_0) : null;
    $[86] = value_0;
    $[87] = t37;
  } else {
    t37 = $[87];
  }
  var valueDate = t37;
  var t38;
  if ($[88] === Symbol["for"]("react.memo_cache_sentinel")) {
    t38 = function t38() {
      return setOpen(false);
    };
    $[88] = t38;
  } else {
    t38 = $[88];
  }
  var t39;
  if ($[89] !== className) {
    t39 = classNames(className, "PFormYearPicker");
    $[89] = className;
    $[90] = t39;
  } else {
    t39 = $[90];
  }
  var t40 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t41 = fullWidth ? 1 : undefined;
  var t42;
  if ($[91] !== t40 || $[92] !== t41) {
    t42 = {
      display: t40,
      flex: t41
    };
    $[91] = t40;
    $[92] = t41;
    $[93] = t42;
  } else {
    t42 = $[93];
  }
  var t43 = error && errorHelperText ? 8 : -14;
  var t44;
  if ($[94] !== t43) {
    t44 = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, t43]
        }
      }]
    };
    $[94] = t43;
    $[95] = t44;
  } else {
    t44 = $[95];
  }
  var t45;
  if ($[96] === Symbol["for"]("react.memo_cache_sentinel")) {
    t45 = {
      display: "flex"
    };
    $[96] = t45;
  } else {
    t45 = $[96];
  }
  var t46;
  if ($[97] !== disableFuture || $[98] !== disablePast || $[99] !== handleContainerChange || $[100] !== maxYear || $[101] !== minYear || $[102] !== value_0) {
    t46 = /*#__PURE__*/React.createElement("div", {
      style: t45
    }, /*#__PURE__*/React.createElement(PrivateYearPicker, {
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[97] = disableFuture;
    $[98] = disablePast;
    $[99] = handleContainerChange;
    $[100] = maxYear;
    $[101] = minYear;
    $[102] = value_0;
    $[103] = t46;
  } else {
    t46 = $[103];
  }
  var t47;
  if ($[104] !== fullWidth || $[105] !== initStyle || $[106] !== inputWidth) {
    t47 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[104] = fullWidth;
    $[105] = initStyle;
    $[106] = inputWidth;
    $[107] = t47;
  } else {
    t47 = $[107];
  }
  var t48;
  if ($[108] === Symbol["for"]("react.memo_cache_sentinel")) {
    t48 = function t48(reason) {
      return inputDatePickerErrorRef.current = reason;
    };
    $[108] = t48;
  } else {
    t48 = $[108];
  }
  var t49;
  if ($[109] !== color || $[110] !== dateInfo.max || $[111] !== dateInfo.min || $[112] !== disabled || $[113] !== enableKeyboardInput || $[114] !== endAdornment || $[115] !== error || $[116] !== focused || $[117] !== format || $[118] !== fullWidth || $[119] !== handleInputDatePickerChange || $[120] !== handleInputDatePickerFocus || $[121] !== handleInputDatePickerShouldDisableYear || $[122] !== icon || $[123] !== label || $[124] !== labelIcon || $[125] !== labelShrink || $[126] !== readOnly || $[127] !== required || $[128] !== size || $[129] !== startAdornment || $[130] !== sx || $[131] !== t47 || $[132] !== valueDate || $[133] !== variant) {
    t49 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateInputDatePicker, {
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
      style: t47,
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
      onError: t48,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    }));
    $[109] = color;
    $[110] = dateInfo.max;
    $[111] = dateInfo.min;
    $[112] = disabled;
    $[113] = enableKeyboardInput;
    $[114] = endAdornment;
    $[115] = error;
    $[116] = focused;
    $[117] = format;
    $[118] = fullWidth;
    $[119] = handleInputDatePickerChange;
    $[120] = handleInputDatePickerFocus;
    $[121] = handleInputDatePickerShouldDisableYear;
    $[122] = icon;
    $[123] = label;
    $[124] = labelIcon;
    $[125] = labelShrink;
    $[126] = readOnly;
    $[127] = required;
    $[128] = size;
    $[129] = startAdornment;
    $[130] = sx;
    $[131] = t47;
    $[132] = valueDate;
    $[133] = variant;
    $[134] = t49;
  } else {
    t49 = $[134];
  }
  var t50;
  if ($[135] !== open || $[136] !== t44 || $[137] !== t46 || $[138] !== t49) {
    t50 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      PopperProps: t44,
      title: t46
    }, t49);
    $[135] = open;
    $[136] = t44;
    $[137] = t46;
    $[138] = t49;
    $[139] = t50;
  } else {
    t50 = $[139];
  }
  var t51;
  if ($[140] !== error || $[141] !== errorHelperText || $[142] !== formColWithHelperText || $[143] !== helperText || $[144] !== variant) {
    t51 = !formColWithHelperText && (!!helperText || error && !!errorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[140] = error;
    $[141] = errorHelperText;
    $[142] = formColWithHelperText;
    $[143] = helperText;
    $[144] = variant;
    $[145] = t51;
  } else {
    t51 = $[145];
  }
  var t52;
  if ($[146] !== t39 || $[147] !== t42 || $[148] !== t50 || $[149] !== t51) {
    t52 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t38
    }, /*#__PURE__*/React.createElement("div", {
      className: t39,
      style: t42,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t50, t51)));
    $[146] = t39;
    $[147] = t42;
    $[148] = t50;
    $[149] = t51;
    $[150] = t52;
  } else {
    t52 = $[150];
  }
  return t52;
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
  var $ = c(216);
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
  var startInputRef = useRef(undefined);
  var endInputRef = useRef(undefined);
  var startInputDatePickerErrorRef = useRef(null);
  var endInputDatePickerErrorRef = useRef(null);
  var _useState = useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  useChanged(initError) && setError(initError);
  var _useState3 = useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    fromError = _useState10[0],
    setFromError = _useState10[1];
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    fromErrorHelperText = _useState12[0],
    setFromErrorHelperText = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    toError = _useState14[0],
    setToError = _useState14[1];
  var _useState15 = useState(),
    _useState16 = _slicedToArray(_useState15, 2),
    toErrorHelperText = _useState16[0],
    setToErrorHelperText = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    open = _useState18[0],
    setOpen = _useState18[1];
  var _useState19 = useState("start"),
    _useState20 = _slicedToArray(_useState19, 2),
    selectType = _useState20[0],
    setSelectType = _useState20[1];
  var _useState21 = useState(),
    _useState22 = _slicedToArray(_useState21, 2),
    openValue = _useState22[0],
    setOpenValue = _useState22[1];
  var t6;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6(error_0, fromErrorHelperText_0) {
      setFromError(error_0);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[0] = t6;
  } else {
    t6 = $[0];
  }
  var setFromErrorErrorHelperText = t6;
  var t7;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7(error_1, toErrorHelperText_0) {
      setToError(error_1);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[1] = t7;
  } else {
    t7 = $[1];
  }
  var setToErrorErrorHelperText = t7;
  var t8;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(error_2, errorHelperText_0) {
      setError(error_2);
      setErrorHelperText(errorHelperText_0);
    };
    $[2] = t8;
  } else {
    t8 = $[2];
  }
  var setErrorErrorHelperText = t8;
  var t9;
  if ($[3] !== onValidate || $[4] !== required) {
    t9 = function t9(value) {
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
    };
    $[3] = onValidate;
    $[4] = required;
    $[5] = t9;
  } else {
    t9 = $[5];
  }
  var validate = t9;
  var t10;
  if ($[6] !== initValue) {
    t10 = getFinalValue(initValue);
    $[6] = initValue;
    $[7] = t10;
  } else {
    t10 = $[7];
  }
  var _useState23 = useState(t10),
    _useState24 = _slicedToArray(_useState23, 2),
    value_0 = _useState24[0],
    setValue = _useState24[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_0);
  var t11;
  if ($[8] !== error || $[9] !== fromError || $[10] !== name || $[11] !== onChange || $[12] !== onValueChange || $[13] !== toError || $[14] !== validate || $[15] !== valueRef) {
    t11 = function t11(newValue) {
      var finalValue = getFinalValue(newValue);
      setValue(finalValue);
      valueRef.current = finalValue;
      if (error || fromError || toError) {
        validate(finalValue);
      }
      if (onChange) {
        onChange(finalValue);
      }
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[8] = error;
    $[9] = fromError;
    $[10] = name;
    $[11] = onChange;
    $[12] = onValueChange;
    $[13] = toError;
    $[14] = validate;
    $[15] = valueRef;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  var updateValue = t11;
  var t12;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = new Date().getFullYear();
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  var nowYear = t12;
  var t13;
  if ($[18] !== minYear) {
    t13 = valueToDate(minYear);
    $[18] = minYear;
    $[19] = t13;
  } else {
    t13 = $[19];
  }
  var minDate = t13;
  var t14;
  if ($[20] !== maxYear) {
    t14 = valueToDate(maxYear);
    $[20] = maxYear;
    $[21] = t14;
  } else {
    t14 = $[21];
  }
  var maxDate = t14;
  var t15;
  if ($[22] !== maxDate || $[23] !== minDate) {
    t15 = {
      nowYear: nowYear,
      min: minDate,
      max: maxDate
    };
    $[22] = maxDate;
    $[23] = minDate;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  var dateInfo = t15;
  if (useChanged(open)) {
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
  }
  var t16;
  if ($[25] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = function t16() {
      var _startInputRef$curren;
      (_startInputRef$curren = startInputRef.current) === null || _startInputRef$curren === void 0 || _startInputRef$curren.focus();
    };
    $[25] = t16;
  } else {
    t16 = $[25];
  }
  var focus = t16;
  var t17;
  if ($[26] !== name) {
    t17 = function t17() {
      return name;
    };
    $[26] = name;
    $[27] = t17;
  } else {
    t17 = $[27];
  }
  var t18;
  if ($[28] !== initValue) {
    t18 = function t18() {
      return getFinalValue(initValue);
    };
    $[28] = initValue;
    $[29] = t18;
  } else {
    t18 = $[29];
  }
  var t19;
  if ($[30] !== initValue || $[31] !== updateValue) {
    t19 = function t19() {
      return updateValue(initValue);
    };
    $[30] = initValue;
    $[31] = updateValue;
    $[32] = t19;
  } else {
    t19 = $[32];
  }
  var t20;
  if ($[33] !== valueRef) {
    t20 = function t20() {
      return valueRef.current;
    };
    $[33] = valueRef;
    $[34] = t20;
  } else {
    t20 = $[34];
  }
  var t21;
  if ($[35] !== dataRef) {
    t21 = function t21() {
      return dataRef.current;
    };
    $[35] = dataRef;
    $[36] = t21;
  } else {
    t21 = $[36];
  }
  var t22;
  if ($[37] !== valueRef) {
    t22 = function t22() {
      return valueRef.current[0];
    };
    $[37] = valueRef;
    $[38] = t22;
  } else {
    t22 = $[38];
  }
  var t23;
  if ($[39] !== updateValue || $[40] !== valueRef) {
    t23 = function t23(value_1) {
      return updateValue([value_1, valueRef.current[1]]);
    };
    $[39] = updateValue;
    $[40] = valueRef;
    $[41] = t23;
  } else {
    t23 = $[41];
  }
  var t24;
  if ($[42] !== valueRef) {
    t24 = function t24() {
      return valueRef.current[1];
    };
    $[42] = valueRef;
    $[43] = t24;
  } else {
    t24 = $[43];
  }
  var t25;
  if ($[44] !== updateValue || $[45] !== valueRef) {
    t25 = function t25(value_2) {
      return updateValue([valueRef.current[0], value_2]);
    };
    $[44] = updateValue;
    $[45] = valueRef;
    $[46] = t25;
  } else {
    t25 = $[46];
  }
  var t26;
  if ($[47] !== exceptValue) {
    t26 = function t26() {
      return !!exceptValue;
    };
    $[47] = exceptValue;
    $[48] = t26;
  } else {
    t26 = $[48];
  }
  var t27;
  if ($[49] !== disabled) {
    t27 = function t27() {
      return !!disabled;
    };
    $[49] = disabled;
    $[50] = t27;
  } else {
    t27 = $[50];
  }
  var t28;
  if ($[51] !== hidden) {
    t28 = function t28() {
      return !!hidden;
    };
    $[51] = hidden;
    $[52] = t28;
  } else {
    t28 = $[52];
  }
  var t29;
  if ($[53] !== validate || $[54] !== valueRef) {
    t29 = function t29() {
      return validate(valueRef.current);
    };
    $[53] = validate;
    $[54] = valueRef;
    $[55] = t29;
  } else {
    t29 = $[55];
  }
  var t30;
  if ($[56] === Symbol["for"]("react.memo_cache_sentinel")) {
    t30 = function t30(error_3, errorHelperText_1) {
      return setErrorErrorHelperText(error_3, error_3 ? errorHelperText_1 : undefined);
    };
    $[56] = t30;
  } else {
    t30 = $[56];
  }
  var t31;
  if ($[57] !== formValueFromNameSuffix) {
    t31 = function t31() {
      return formValueFromNameSuffix;
    };
    $[57] = formValueFromNameSuffix;
    $[58] = t31;
  } else {
    t31 = $[58];
  }
  var t32;
  if ($[59] !== formValueToNameSuffix) {
    t32 = function t32() {
      return formValueToNameSuffix;
    };
    $[59] = formValueToNameSuffix;
    $[60] = t32;
  } else {
    t32 = $[60];
  }
  var t33;
  if ($[61] !== formValueFromNameSuffix || $[62] !== name) {
    t33 = function t33() {
      return "".concat(name).concat(formValueFromNameSuffix);
    };
    $[61] = formValueFromNameSuffix;
    $[62] = name;
    $[63] = t33;
  } else {
    t33 = $[63];
  }
  var t34;
  if ($[64] !== formValueToNameSuffix || $[65] !== name) {
    t34 = function t34() {
      return "".concat(name).concat(formValueToNameSuffix);
    };
    $[64] = formValueToNameSuffix;
    $[65] = name;
    $[66] = t34;
  } else {
    t34 = $[66];
  }
  var t35;
  if ($[67] !== t17 || $[68] !== t18 || $[69] !== t19 || $[70] !== t20 || $[71] !== t21 || $[72] !== t22 || $[73] !== t23 || $[74] !== t24 || $[75] !== t25 || $[76] !== t26 || $[77] !== t27 || $[78] !== t28 || $[79] !== t29 || $[80] !== t31 || $[81] !== t32 || $[82] !== t33 || $[83] !== t34 || $[84] !== updateValue) {
    t35 = {
      getType: _temp$4,
      getName: t17,
      getReset: t18,
      reset: t19,
      getValue: t20,
      setValue: updateValue,
      getData: t21,
      setData: setData,
      getFromValue: t22,
      setFromValue: t23,
      getToValue: t24,
      setToValue: t25,
      isExceptValue: t26,
      isDisabled: t27,
      setDisabled: setDisabled,
      isHidden: t28,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t29,
      setError: t30,
      getFormValueFromNameSuffix: t31,
      getFormValueToNameSuffix: t32,
      getFormValueFromName: t33,
      getFormValueToName: t34
    };
    $[67] = t17;
    $[68] = t18;
    $[69] = t19;
    $[70] = t20;
    $[71] = t21;
    $[72] = t22;
    $[73] = t23;
    $[74] = t24;
    $[75] = t25;
    $[76] = t26;
    $[77] = t27;
    $[78] = t28;
    $[79] = t29;
    $[80] = t31;
    $[81] = t32;
    $[82] = t33;
    $[83] = t34;
    $[84] = updateValue;
    $[85] = t35;
  } else {
    t35 = $[85];
  }
  var commands = t35;
  var t36;
  if ($[86] !== id || $[87] !== onAddValueItem) {
    t36 = function t36(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[86] = id;
    $[87] = onAddValueItem;
    $[88] = t36;
  } else {
    t36 = $[88];
  }
  var t37;
  if ($[89] !== id || $[90] !== onRemoveValueItem) {
    t37 = function t37() {
      return onRemoveValueItem(id);
    };
    $[89] = id;
    $[90] = onRemoveValueItem;
    $[91] = t37;
  } else {
    t37 = $[91];
  }
  useForwardRef(ref, commands, t36, t37);
  var t38;
  if ($[92] !== name || $[93] !== onValueChangeByUser || $[94] !== updateValue) {
    t38 = function t38(newValue_0, selectType_0) {
      updateValue(newValue_0);
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
        onValueChangeByUser(name, newValue_0);
      });
    };
    $[92] = name;
    $[93] = onValueChangeByUser;
    $[94] = updateValue;
    $[95] = t38;
  } else {
    t38 = $[95];
  }
  var handleContainerChange = t38;
  var t39;
  if ($[96] !== fromError || $[97] !== maxYear || $[98] !== minYear || $[99] !== name || $[100] !== onValueChangeByUser || $[101] !== toError || $[102] !== updateValue || $[103] !== validate || $[104] !== valueRef) {
    t39 = function t39(selectType_1, date) {
      if (date == null || date.isValid()) {
        if (selectType_1 === "start") {
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
        } else {
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
    };
    $[96] = fromError;
    $[97] = maxYear;
    $[98] = minYear;
    $[99] = name;
    $[100] = onValueChangeByUser;
    $[101] = toError;
    $[102] = updateValue;
    $[103] = validate;
    $[104] = valueRef;
    $[105] = t39;
  } else {
    t39 = $[105];
  }
  var handleInputDatePickerChange = t39;
  var t40;
  if ($[106] !== disabled || $[107] !== readOnly || $[108] !== valueRef) {
    t40 = function t40(selectType_2) {
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
    $[106] = disabled;
    $[107] = readOnly;
    $[108] = valueRef;
    $[109] = t40;
  } else {
    t40 = $[109];
  }
  var handleInputDatePickerFocus = t40;
  var t41;
  if ($[110] !== dateInfo.nowYear || $[111] !== disableFuture || $[112] !== disablePast) {
    t41 = function t41(year) {
      return !!disablePast && year.year() < dateInfo.nowYear || !!disableFuture && year.year() > dateInfo.nowYear;
    };
    $[110] = dateInfo.nowYear;
    $[111] = disableFuture;
    $[112] = disablePast;
    $[113] = t41;
  } else {
    t41 = $[113];
  }
  var handleInputDatePickerShouldDisableYear = t41;
  var t42;
  if ($[114] !== value_0) {
    t42 = !!value_0 && !!value_0[0] ? valueToDate(value_0[0]) : null;
    $[114] = value_0;
    $[115] = t42;
  } else {
    t42 = $[115];
  }
  var t43;
  if ($[116] !== value_0) {
    t43 = !!value_0 && !!value_0[1] ? valueToDate(value_0[1]) : null;
    $[116] = value_0;
    $[117] = t43;
  } else {
    t43 = $[117];
  }
  var t44;
  if ($[118] !== t42 || $[119] !== t43) {
    t44 = [t42, t43];
    $[118] = t42;
    $[119] = t43;
    $[120] = t44;
  } else {
    t44 = $[120];
  }
  var valueDate = t44;
  var t45;
  if ($[121] !== fullWidth || $[122] !== initStyle || $[123] !== inputWidth) {
    t45 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[121] = fullWidth;
    $[122] = initStyle;
    $[123] = inputWidth;
    $[124] = t45;
  } else {
    t45 = $[124];
  }
  var t46;
  if ($[125] !== align || $[126] !== color || $[127] !== dateInfo.max || $[128] !== dateInfo.min || $[129] !== disabled || $[130] !== enableKeyboardInput || $[131] !== endAdornment || $[132] !== focused || $[133] !== format || $[134] !== fullWidth || $[135] !== icon || $[136] !== labelShrink || $[137] !== readOnly || $[138] !== required || $[139] !== size || $[140] !== startAdornment || $[141] !== sx || $[142] !== t45 || $[143] !== variant) {
    t46 = {
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
      style: t45,
      sx: sx,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment
    };
    $[125] = align;
    $[126] = color;
    $[127] = dateInfo.max;
    $[128] = dateInfo.min;
    $[129] = disabled;
    $[130] = enableKeyboardInput;
    $[131] = endAdornment;
    $[132] = focused;
    $[133] = format;
    $[134] = fullWidth;
    $[135] = icon;
    $[136] = labelShrink;
    $[137] = readOnly;
    $[138] = required;
    $[139] = size;
    $[140] = startAdornment;
    $[141] = sx;
    $[142] = t45;
    $[143] = variant;
    $[144] = t46;
  } else {
    t46 = $[144];
  }
  var privateInputDatePickerProps = t46;
  var t47;
  if ($[145] === Symbol["for"]("react.memo_cache_sentinel")) {
    t47 = function t47() {
      return setOpen(false);
    };
    $[145] = t47;
  } else {
    t47 = $[145];
  }
  var t48;
  if ($[146] !== className) {
    t48 = classNames(className, "PFormYearRangePicker");
    $[146] = className;
    $[147] = t48;
  } else {
    t48 = $[147];
  }
  var t49 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t50 = fullWidth ? 1 : undefined;
  var t51;
  if ($[148] !== t49 || $[149] !== t50) {
    t51 = {
      display: t49,
      flex: t50
    };
    $[148] = t49;
    $[149] = t50;
    $[150] = t51;
  } else {
    t51 = $[150];
  }
  var t52 = error && errorHelperText ? 8 : -14;
  var t53;
  if ($[151] !== t52) {
    t53 = {
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, t52]
        }
      }]
    };
    $[151] = t52;
    $[152] = t53;
  } else {
    t53 = $[152];
  }
  var t54;
  if ($[153] === Symbol["for"]("react.memo_cache_sentinel")) {
    t54 = {
      display: "flex"
    };
    $[153] = t54;
  } else {
    t54 = $[153];
  }
  var t55;
  if ($[154] !== disableFuture || $[155] !== disablePast || $[156] !== handleContainerChange || $[157] !== maxYear || $[158] !== minYear || $[159] !== selectType || $[160] !== value_0) {
    t55 = /*#__PURE__*/React.createElement("div", {
      style: t54
    }, /*#__PURE__*/React.createElement(PrivateYearRangePicker, {
      selectType: selectType,
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_0,
      onChange: handleContainerChange
    }));
    $[154] = disableFuture;
    $[155] = disablePast;
    $[156] = handleContainerChange;
    $[157] = maxYear;
    $[158] = minYear;
    $[159] = selectType;
    $[160] = value_0;
    $[161] = t55;
  } else {
    t55 = $[161];
  }
  var t56 = error || fromError;
  var t57 = focused || open && selectType === "start";
  var t58;
  if ($[162] !== handleInputDatePickerChange) {
    t58 = function t58(v) {
      return handleInputDatePickerChange("start", v);
    };
    $[162] = handleInputDatePickerChange;
    $[163] = t58;
  } else {
    t58 = $[163];
  }
  var t59;
  if ($[164] !== handleInputDatePickerFocus) {
    t59 = function t59() {
      return handleInputDatePickerFocus("start");
    };
    $[164] = handleInputDatePickerFocus;
    $[165] = t59;
  } else {
    t59 = $[165];
  }
  var t60;
  if ($[166] === Symbol["for"]("react.memo_cache_sentinel")) {
    t60 = function t60(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[166] = t60;
  } else {
    t60 = $[166];
  }
  var t61;
  if ($[167] !== fromLabel || $[168] !== fromLabelIcon || $[169] !== handleInputDatePickerShouldDisableYear || $[170] !== privateInputDatePickerProps || $[171] !== t56 || $[172] !== t57 || $[173] !== t58 || $[174] !== t59 || $[175] !== valueDate[0]) {
    t61 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, privateInputDatePickerProps, {
      inputRef: startInputRef,
      value: valueDate[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t56,
      focused: t57,
      onChange: t58,
      onFocus: t59,
      onError: t60,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[167] = fromLabel;
    $[168] = fromLabelIcon;
    $[169] = handleInputDatePickerShouldDisableYear;
    $[170] = privateInputDatePickerProps;
    $[171] = t56;
    $[172] = t57;
    $[173] = t58;
    $[174] = t59;
    $[175] = valueDate[0];
    $[176] = t61;
  } else {
    t61 = $[176];
  }
  var t62;
  if ($[177] === Symbol["for"]("react.memo_cache_sentinel")) {
    t62 = /*#__PURE__*/React.createElement(Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[177] = t62;
  } else {
    t62 = $[177];
  }
  var t63 = error || toError;
  var t64 = focused || open && selectType === "end";
  var t65;
  if ($[178] !== handleInputDatePickerChange) {
    t65 = function t65(v_0) {
      return handleInputDatePickerChange("end", v_0);
    };
    $[178] = handleInputDatePickerChange;
    $[179] = t65;
  } else {
    t65 = $[179];
  }
  var t66;
  if ($[180] !== handleInputDatePickerFocus) {
    t66 = function t66() {
      return handleInputDatePickerFocus("end");
    };
    $[180] = handleInputDatePickerFocus;
    $[181] = t66;
  } else {
    t66 = $[181];
  }
  var t67;
  if ($[182] === Symbol["for"]("react.memo_cache_sentinel")) {
    t67 = function t67(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[182] = t67;
  } else {
    t67 = $[182];
  }
  var t68;
  if ($[183] !== handleInputDatePickerShouldDisableYear || $[184] !== privateInputDatePickerProps || $[185] !== t63 || $[186] !== t64 || $[187] !== t65 || $[188] !== t66 || $[189] !== toLabel || $[190] !== toLabelIcon || $[191] !== valueDate[1]) {
    t68 = /*#__PURE__*/React.createElement(Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, privateInputDatePickerProps, {
      inputRef: endInputRef,
      value: valueDate[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t63,
      focused: t64,
      onChange: t65,
      onFocus: t66,
      onError: t67,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[183] = handleInputDatePickerShouldDisableYear;
    $[184] = privateInputDatePickerProps;
    $[185] = t63;
    $[186] = t64;
    $[187] = t65;
    $[188] = t66;
    $[189] = toLabel;
    $[190] = toLabelIcon;
    $[191] = valueDate[1];
    $[192] = t68;
  } else {
    t68 = $[192];
  }
  var t69;
  if ($[193] !== t61 || $[194] !== t68) {
    t69 = /*#__PURE__*/React.createElement(Grid, {
      container: true,
      alignItems: "center"
    }, t61, t62, t68);
    $[193] = t61;
    $[194] = t68;
    $[195] = t69;
  } else {
    t69 = $[195];
  }
  var t70;
  if ($[196] !== open || $[197] !== t53 || $[198] !== t55 || $[199] !== t69) {
    t70 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      PopperProps: t53,
      title: t55
    }, t69);
    $[196] = open;
    $[197] = t53;
    $[198] = t55;
    $[199] = t69;
    $[200] = t70;
  } else {
    t70 = $[200];
  }
  var t71;
  if ($[201] !== error || $[202] !== errorHelperText || $[203] !== formColWithHelperText || $[204] !== fromError || $[205] !== fromErrorHelperText || $[206] !== helperText || $[207] !== toError || $[208] !== toErrorHelperText || $[209] !== variant) {
    t71 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[201] = error;
    $[202] = errorHelperText;
    $[203] = formColWithHelperText;
    $[204] = fromError;
    $[205] = fromErrorHelperText;
    $[206] = helperText;
    $[207] = toError;
    $[208] = toErrorHelperText;
    $[209] = variant;
    $[210] = t71;
  } else {
    t71 = $[210];
  }
  var t72;
  if ($[211] !== t48 || $[212] !== t51 || $[213] !== t70 || $[214] !== t71) {
    t72 = /*#__PURE__*/React.createElement(LocalizationProvider, {
      dateAdapter: AdapterDayjs
    }, /*#__PURE__*/React.createElement(ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t47
    }, /*#__PURE__*/React.createElement("div", {
      className: t48,
      style: t51
    }, t70, t71)));
    $[211] = t48;
    $[212] = t51;
    $[213] = t70;
    $[214] = t71;
    $[215] = t72;
  } else {
    t72 = $[215];
  }
  return t72;
};
function _temp$4() {
  return "PFormYearRangePicker";
}var PFormSwitch = function PFormSwitch(t0) {
  var $ = c(96);
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
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState = useState(finalInitFocused),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  useChanged(finalInitFocused) && setFocused(finalInitFocused);
  var inputRef = useRef(undefined);
  var _useState3 = useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  useChanged(initError) && setError(initError);
  var _useState5 = useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  useChanged(initData) && setData(initData);
  var dataRef = useAutoUpdateRef(data);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState9 = useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  useChanged(initHidden) && setHidden(initHidden);
  var _useState1 = useState(),
    _useState10 = _slicedToArray(_useState1, 2),
    errorHelperText = _useState10[0],
    setErrorHelperText = _useState10[1];
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(errorHelperText_0);
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var setErrorErrorHelperText = t1;
  var t2;
  if ($[1] !== onValidate) {
    t2 = function t2(value) {
      if (onValidate) {
        var onValidateResult = onValidate(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[1] = onValidate;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var validate = t2;
  var t3;
  if ($[3] !== onValue) {
    t3 = function t3(value_0) {
      var finalValue = value_0 || false;
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[3] = onValue;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  var getFinalValue = t3;
  var t4;
  if ($[5] !== getFinalValue || $[6] !== initValue) {
    t4 = getFinalValue(initValue);
    $[5] = getFinalValue;
    $[6] = initValue;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var _useState11 = useState(t4),
    _useState12 = _slicedToArray(_useState11, 2),
    value_1 = _useState12[0],
    setValue = _useState12[1];
  useChanged(initValue) && setValue(getFinalValue(initValue));
  var valueRef = useAutoUpdateRef(value_1);
  var t5;
  if ($[8] !== error || $[9] !== getFinalValue || $[10] !== name || $[11] !== onChange || $[12] !== onValueChange || $[13] !== validate || $[14] !== valueRef) {
    t5 = function t5(newValue) {
      var finalValue_0 = getFinalValue(newValue);
      setValue(finalValue_0);
      valueRef.current = finalValue_0;
      if (error) {
        validate(finalValue_0);
      }
      if (onChange) {
        onChange(finalValue_0);
      }
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[8] = error;
    $[9] = getFinalValue;
    $[10] = name;
    $[11] = onChange;
    $[12] = onValueChange;
    $[13] = validate;
    $[14] = valueRef;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  var updateValue = t5;
  var t6;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  var focus = t6;
  var t7;
  if ($[17] !== name) {
    t7 = function t7() {
      return name;
    };
    $[17] = name;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  var t8;
  if ($[19] !== getFinalValue || $[20] !== initValue) {
    t8 = function t8() {
      return getFinalValue(initValue);
    };
    $[19] = getFinalValue;
    $[20] = initValue;
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  var t9;
  if ($[22] !== initValue || $[23] !== updateValue) {
    t9 = function t9() {
      return updateValue(initValue);
    };
    $[22] = initValue;
    $[23] = updateValue;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  var t10;
  if ($[25] !== valueRef) {
    t10 = function t10() {
      return valueRef.current;
    };
    $[25] = valueRef;
    $[26] = t10;
  } else {
    t10 = $[26];
  }
  var t11;
  if ($[27] !== dataRef) {
    t11 = function t11() {
      return dataRef.current;
    };
    $[27] = dataRef;
    $[28] = t11;
  } else {
    t11 = $[28];
  }
  var t12;
  if ($[29] !== exceptValue) {
    t12 = function t12() {
      return !!exceptValue;
    };
    $[29] = exceptValue;
    $[30] = t12;
  } else {
    t12 = $[30];
  }
  var t13;
  if ($[31] !== disabled) {
    t13 = function t13() {
      return !!disabled;
    };
    $[31] = disabled;
    $[32] = t13;
  } else {
    t13 = $[32];
  }
  var t14;
  if ($[33] !== hidden) {
    t14 = function t14() {
      return !!hidden;
    };
    $[33] = hidden;
    $[34] = t14;
  } else {
    t14 = $[34];
  }
  var t15;
  if ($[35] !== validate || $[36] !== valueRef) {
    t15 = function t15() {
      return validate(valueRef.current);
    };
    $[35] = validate;
    $[36] = valueRef;
    $[37] = t15;
  } else {
    t15 = $[37];
  }
  var t16;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = function t16(error_1, errorHelperText_1) {
      return setErrorErrorHelperText(error_1, error_1 ? errorHelperText_1 : undefined);
    };
    $[38] = t16;
  } else {
    t16 = $[38];
  }
  var t17;
  if ($[39] !== t10 || $[40] !== t11 || $[41] !== t12 || $[42] !== t13 || $[43] !== t14 || $[44] !== t15 || $[45] !== t7 || $[46] !== t8 || $[47] !== t9 || $[48] !== updateValue) {
    t17 = {
      getType: _temp$3,
      getName: t7,
      getReset: t8,
      reset: t9,
      getValue: t10,
      setValue: updateValue,
      getData: t11,
      setData: setData,
      isExceptValue: t12,
      isDisabled: t13,
      setDisabled: setDisabled,
      isHidden: t14,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t15,
      setError: t16
    };
    $[39] = t10;
    $[40] = t11;
    $[41] = t12;
    $[42] = t13;
    $[43] = t14;
    $[44] = t15;
    $[45] = t7;
    $[46] = t8;
    $[47] = t9;
    $[48] = updateValue;
    $[49] = t17;
  } else {
    t17 = $[49];
  }
  var commands = t17;
  var t18;
  if ($[50] !== id || $[51] !== onAddValueItem) {
    t18 = function t18(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[50] = id;
    $[51] = onAddValueItem;
    $[52] = t18;
  } else {
    t18 = $[52];
  }
  var t19;
  if ($[53] !== id || $[54] !== onRemoveValueItem) {
    t19 = function t19() {
      return onRemoveValueItem(id);
    };
    $[53] = id;
    $[54] = onRemoveValueItem;
    $[55] = t19;
  } else {
    t19 = $[55];
  }
  useForwardRef(ref, commands, t18, t19);
  var t20;
  if ($[56] !== name || $[57] !== onRequestSearchSubmit || $[58] !== onValueChangeByUser || $[59] !== readOnly || $[60] !== updateValue) {
    t20 = function t20(e, checked) {
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
    $[56] = name;
    $[57] = onRequestSearchSubmit;
    $[58] = onValueChangeByUser;
    $[59] = readOnly;
    $[60] = updateValue;
    $[61] = t20;
  } else {
    t20 = $[61];
  }
  var handleChange = t20;
  var t21;
  var t22;
  if ($[62] !== initFocused) {
    t21 = function t21() {
      return setFocused(initFocused || true);
    };
    t22 = function t22() {
      return setFocused(initFocused || false);
    };
    $[62] = initFocused;
    $[63] = t21;
    $[64] = t22;
  } else {
    t21 = $[63];
    t22 = $[64];
  }
  var t23;
  if ($[65] !== color || $[66] !== disabled || $[67] !== handleChange || $[68] !== name || $[69] !== size || $[70] !== t21 || $[71] !== t22 || $[72] !== value_1) {
    t23 = /*#__PURE__*/React.createElement(Switch, {
      size: size,
      name: name,
      checked: value_1,
      color: color,
      disabled: disabled,
      onChange: handleChange,
      onFocus: t21,
      onBlur: t22
    });
    $[65] = color;
    $[66] = disabled;
    $[67] = handleChange;
    $[68] = name;
    $[69] = size;
    $[70] = t21;
    $[71] = t22;
    $[72] = value_1;
    $[73] = t23;
  } else {
    t23 = $[73];
  }
  var switchControl = t23;
  var t24;
  if ($[74] !== className) {
    t24 = classNames(className, "PFormValueItem", "PFormSwitch");
    $[74] = className;
    $[75] = t24;
  } else {
    t24 = $[75];
  }
  var t25 = error ? errorHelperText : helperText;
  var t26;
  if ($[76] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = {
      style: {
        marginLeft: 5
      }
    };
    $[76] = t26;
  } else {
    t26 = $[76];
  }
  var t27 = size === "small" ? 24 : 38;
  var t28;
  if ($[77] !== disabled || $[78] !== switchControl || $[79] !== switchLabel) {
    t28 = switchLabel ? /*#__PURE__*/React.createElement(FormControlLabel, {
      control: switchControl,
      label: switchLabel,
      disabled: disabled
    }) : switchControl;
    $[77] = disabled;
    $[78] = switchControl;
    $[79] = switchLabel;
    $[80] = t28;
  } else {
    t28 = $[80];
  }
  var t29;
  if ($[81] !== color || $[82] !== error || $[83] !== focused || $[84] !== hidden || $[85] !== label || $[86] !== labelIcon || $[87] !== size || $[88] !== style || $[89] !== sx || $[90] !== t24 || $[91] !== t25 || $[92] !== t27 || $[93] !== t28 || $[94] !== variant) {
    t29 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t24,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: false,
      helperText: t25,
      helperTextProps: t26,
      style: style,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t27,
      controlVerticalCenter: true,
      control: t28
    });
    $[81] = color;
    $[82] = error;
    $[83] = focused;
    $[84] = hidden;
    $[85] = label;
    $[86] = labelIcon;
    $[87] = size;
    $[88] = style;
    $[89] = sx;
    $[90] = t24;
    $[91] = t25;
    $[92] = t27;
    $[93] = t28;
    $[94] = variant;
    $[95] = t29;
  } else {
    t29 = $[95];
  }
  return t29;
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
  var autoSubmitRef = useAutoUpdateRef(autoSubmit);
  var t2;
  var t3;
  if ($[12] !== autoSubmitRef) {
    t2 = function t2() {
      if (autoSubmitRef.current) {
        var _formRef$current;
        (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.submit();
      }
    };
    t3 = [autoSubmitRef];
    $[12] = autoSubmitRef;
    $[13] = t2;
    $[14] = t3;
  } else {
    t2 = $[13];
    t3 = $[14];
  }
  useEffect(t2, t3);
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
var StyledItem = styled(Grid)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:has(> [style*='display: none;']) {\n    display: none;\n  }\n"])));var isReactFragment = function isReactFragment(child) {
  try {
    return child.type.toString() === React.Fragment.toString();
  } catch (_unused) {
    return false;
  }
};
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
  var $ = c(39);
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
  var open = !!anchorEl;
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
  var anchorOrigin = t3;
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
  var transformOrigin = t4;
  var t5;
  if ($[13] !== className) {
    t5 = classNames(className, "PSearchMenuButton");
    $[13] = className;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  var t6 = "".concat(!children ? 9 : 13, "px !important");
  var t7;
  if ($[15] !== initSx || $[16] !== t6) {
    t7 = _objectSpread2({
      minWidth: 0,
      px: t6
    }, initSx);
    $[15] = initSx;
    $[16] = t6;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  var t8 = open ? menuId : undefined;
  var t9 = open ? "true" : undefined;
  var t10;
  if ($[18] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = {
      style: {
        marginRight: -5
      }
    };
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var t11;
  if ($[19] !== buttonId || $[20] !== children || $[21] !== endIcon || $[22] !== props || $[23] !== t5 || $[24] !== t7 || $[25] !== t8 || $[26] !== t9) {
    t11 = /*#__PURE__*/React.createElement(PFormButton, _extends({
      className: t5,
      size: "medium",
      sx: t7,
      fullWidth: false
    }, props, {
      id: buttonId,
      "aria-controls": t8,
      "aria-haspopup": "true",
      "aria-expanded": t9,
      endIcon: endIcon,
      endIconProps: t10,
      onClick: handleClick
    }), children);
    $[19] = buttonId;
    $[20] = children;
    $[21] = endIcon;
    $[22] = props;
    $[23] = t5;
    $[24] = t7;
    $[25] = t8;
    $[26] = t9;
    $[27] = t11;
  } else {
    t11 = $[27];
  }
  var t12;
  if ($[28] !== anchorEl || $[29] !== anchorOrigin || $[30] !== buttonId || $[31] !== menuId || $[32] !== menuList || $[33] !== open || $[34] !== transformOrigin) {
    t12 = /*#__PURE__*/React.createElement(Menu, {
      id: menuId,
      "aria-labelledby": buttonId,
      anchorEl: anchorEl,
      open: open,
      onClose: handleClose,
      onClick: handleClose,
      anchorOrigin: anchorOrigin,
      transformOrigin: transformOrigin
    }, menuList);
    $[28] = anchorEl;
    $[29] = anchorOrigin;
    $[30] = buttonId;
    $[31] = menuId;
    $[32] = menuList;
    $[33] = open;
    $[34] = transformOrigin;
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  var t13;
  if ($[36] !== t11 || $[37] !== t12) {
    t13 = /*#__PURE__*/React.createElement(React.Fragment, null, t11, t12);
    $[36] = t11;
    $[37] = t12;
    $[38] = t13;
  } else {
    t13 = $[38];
  }
  return t13;
};var _excluded = ["ref", "className", "noAutoSubmit", "onSubmit", "onRequestHashChange"];
var PHashSearch = function PHashSearch(t0) {
  var $ = c(31);
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
  if ($[11] !== location.hash || $[12] !== location.pathname || $[13] !== onSubmitRef) {
    t3 = [hashToSearchValue, location.hash, location.pathname, onSubmitRef];
    $[11] = location.hash;
    $[12] = location.pathname;
    $[13] = onSubmitRef;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  useEffect(t2, t3);
  var t4;
  if ($[15] !== onRequestHashChange || $[16] !== onSubmit) {
    t4 = function t4(params) {
      if (onRequestHashChange) {
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
          var _onSubmit;
          (_onSubmit = onSubmit) === null || _onSubmit === void 0 || _onSubmit(params);
        } else {
          onRequestHashChange(hashes.join("&"));
        }
      }
    };
    $[15] = onRequestHashChange;
    $[16] = onSubmit;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  var hashChange = t4;
  var t5;
  if ($[18] !== hashChange || $[19] !== isFirstSearchSubmit) {
    t5 = function t5(data_0) {
      if (isFirstSearchSubmit) {
        setIsFirstSearchSubmit(false);
      } else {
        hashChange(data_0);
      }
    };
    $[18] = hashChange;
    $[19] = isFirstSearchSubmit;
    $[20] = t5;
  } else {
    t5 = $[20];
  }
  var handleSubmit = t5;
  var t6;
  if ($[21] !== ref) {
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
    $[21] = ref;
    $[22] = t6;
  } else {
    t6 = $[22];
  }
  var t7;
  if ($[23] !== className) {
    t7 = classNames("PHashSearch", className);
    $[23] = className;
    $[24] = t7;
  } else {
    t7 = $[24];
  }
  var t8 = !noAutoSubmit;
  var t9;
  if ($[25] !== handleSubmit || $[26] !== props || $[27] !== t6 || $[28] !== t7 || $[29] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PSearch, _extends({
      ref: t6,
      className: t7
    }, props, {
      autoSubmit: t8,
      onSubmit: handleSubmit
    }));
    $[25] = handleSubmit;
    $[26] = props;
    $[27] = t6;
    $[28] = t7;
    $[29] = t8;
    $[30] = t9;
  } else {
    t9 = $[30];
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