'use strict';var compilerRuntime=require('react/compiler-runtime'),React=require('react'),classNames=require('classnames'),material=require('@mui/material'),compare=require('@pdg/compare'),dayjs=require('dayjs'),reactHook=require('@pdg/react-hook'),reactComponent=require('@pdg/react-component'),reactResizeDetector=require('react-resize-detector'),formatting=require('@pdg/formatting'),reactNumberFormat=require('react-number-format'),iconsMaterial=require('@mui/icons-material'),tinymceReact=require('@tinymce/tinymce-react'),AdapterDayjs=require('@mui/x-date-pickers/AdapterDayjs'),xDatePickers=require('@mui/x-date-pickers'),SimpleBar=require('simplebar-react');require('dayjs/locale/ko');var reactRouter=require('react-router');function insertStyle(css) {
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
};var PFormContext = /*#__PURE__*/React.createContext(PFormContextDefaultValue);function useFormState() {
  var value = React.useContext(PFormContext);
  if (value === undefined) {
    throw new Error("useFormState should be used within FormContext.Provider");
  }
  return value;
}function PFormContextProvider(t0) {
  var $ = compilerRuntime.c(3);
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
      if (compare.empty(value)) {
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
  var $ = compilerRuntime.c(72);
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
  var disabledRef = reactHook.useAutoUpdateRef(disabled);
  var formRef = React.useRef(null);
  var t6;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = {};
    $[0] = t6;
  } else {
    t6 = $[0];
  }
  var valueItems = React.useRef(t6);
  var onSubmitRef = reactHook.useAutoUpdateRef(initOnSubmit);
  var onInvalidRef = reactHook.useAutoUpdateRef(initOnValid);
  var onValueChangeRef = reactHook.useAutoUpdateRef(initOnValueChange);
  var onValueChangeByUserRef = reactHook.useAutoUpdateRef(initOnValueChangeByUser);
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
              if (compare.notEmpty(subKey)) {
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
              if (compare.notEmpty(subKey)) {
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
              if (compare.notEmpty(subKey)) {
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
  reactHook.useForwardRef(ref, commands_2);
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
    t26 = /*#__PURE__*/React.createElement(material.Box, {
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
  var $ = compilerRuntime.c(22);
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
    t4 = /*#__PURE__*/React.createElement(reactComponent.PButton, _extends({
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
var IconPIcon = material.styled(reactComponent.PIcon)(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-top: -4px;\n  margin-bottom: -2px;\n"])));
var ChildrenSpan = material.styled('span')(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["\n  vertical-align: middle;\n"])));var _excluded$C = ["ref", "children", "icon", "size", "style", "error", "warning"];
var PFormLabel = function PFormLabel(t0) {
  var $ = compilerRuntime.c(25);
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
  var theme = material.useTheme();
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
    t3 = /*#__PURE__*/React.createElement(material.InputLabel, _extends({
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
var StyledLineBox = material.styled(material.Box)(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n  border-bottom: thin solid #dfdfdf;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n"])));
var StyledErrorLineBox = material.styled(material.Box)(function (_ref) {
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
var StyledWarningLineBox = material.styled(material.Box)(function (_ref2) {
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
  var $ = compilerRuntime.c(47);
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
    t9 = icon && /*#__PURE__*/React.createElement(reactComponent.PIcon, {
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
    t10 = label && /*#__PURE__*/React.createElement(material.Box, {
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
    t12 = collapse && /*#__PURE__*/React.createElement(reactComponent.PIcon, {
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
    t13 = /*#__PURE__*/React.createElement(material.Box, {
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
    t14 = /*#__PURE__*/React.createElement(material.Grid, {
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
var StyledWrapGrid$1 = material.styled(material.Grid)(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n  width: 100%;\n"])));var _excluded$B = ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"];
var PFormBlock = function PFormBlock(t0) {
  var $ = compilerRuntime.c(63);
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
  var _useState = React.useState(initCollapseIn),
    _useState2 = _slicedToArray(_useState, 2),
    collapseIn = _useState2[0],
    setCollapseIn = _useState2[1];
  reactHook.useChanged(initCollapseIn) && setCollapseIn(initCollapseIn);
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
  var Container = collapse ? material.Collapse : React.Fragment;
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
    }, /*#__PURE__*/React.createElement(material.Grid, {
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
    t11 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t13 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t14 = /*#__PURE__*/React.createElement(material.Grid, {
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
var StyledWrapGrid = material.styled(material.Grid)(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n  width: 100%;\n"])));var _excluded$A = ["variant", "size", "color", "spacing", "focused", "labelShrink", "fullWidth"];
var PFormRow = function PFormRow(t0) {
  var $ = compilerRuntime.c(73);
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
  var formColsRef = React.useRef(t2);
  var _useState = React.useState(12),
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
    t15 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t16 = helperText && /*#__PURE__*/React.createElement(material.FormHelperText, {
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
    t18 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t19 = /*#__PURE__*/React.createElement(material.Grid, {
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
var StyledFormLabelContainerDiv = material.styled('div')(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n  position: relative;\n  height: 20px;\n"])));
var StyledFormLabel = material.styled(PFormLabel)(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 5px;\n  top: 0;\n"])));
var StyledContentContainerBox = material.styled(material.Box)(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));var _excluded$z = ["variant", "size", "color", "spacing", "formColGap", "focused", "labelShrink", "fullWidth", "formColAutoXs", "onAddFormCol", "onRemoveFormCol"];
var PFormCol = function PFormCol(t0) {
  var $ = compilerRuntime.c(85);
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
  var id = React.useId();
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
  var _useResizeDetector = reactResizeDetector.useResizeDetector(t2),
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
  var effectEvent = React.useEffectEvent(t3);
  var t4;
  if ($[23] !== effectEvent) {
    t4 = function t4() {
      return effectEvent();
    };
    $[23] = effectEvent;
    $[24] = t4;
  } else {
    t4 = $[24];
  }
  var t5;
  if ($[25] !== xs) {
    t5 = [xs];
    $[25] = xs;
    $[26] = t5;
  } else {
    t5 = $[26];
  }
  React.useLayoutEffect(t4, t5);
  var t6;
  if ($[27] !== gridRef || $[28] !== ref) {
    t6 = function t6() {
      if (ref) {
        if (typeof ref === "function") {
          ref(gridRef.current);
        } else {
          ref.current = gridRef.current;
        }
      }
    };
    $[27] = gridRef;
    $[28] = ref;
    $[29] = t6;
  } else {
    t6 = $[29];
  }
  var effectEvent_0 = React.useEffectEvent(t6);
  var t7;
  if ($[30] !== effectEvent_0) {
    t7 = function t7() {
      return effectEvent_0();
    };
    $[30] = effectEvent_0;
    $[31] = t7;
  } else {
    t7 = $[31];
  }
  var t8;
  if ($[32] !== ref) {
    t8 = [ref];
    $[32] = ref;
    $[33] = t8;
  } else {
    t8 = $[33];
  }
  React.useEffect(t7, t8);
  var t9 = xs || formColAutoXs || 12;
  var t10 = !!label;
  var t11 = !!helperText;
  var t12;
  if ($[34] !== color || $[35] !== focused || $[36] !== formColGap || $[37] !== formColWidth || $[38] !== fullWidth || $[39] !== labelShrink || $[40] !== otherFormState || $[41] !== size || $[42] !== spacing || $[43] !== t10 || $[44] !== t11 || $[45] !== t9 || $[46] !== variant) {
    t12 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: variant,
      size: size,
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: fullWidth,
      formColGap: formColGap,
      formColXs: t9,
      formColWidth: formColWidth,
      formColWithLabel: t10,
      formColWithHelperText: t11
    });
    $[34] = color;
    $[35] = focused;
    $[36] = formColGap;
    $[37] = formColWidth;
    $[38] = fullWidth;
    $[39] = labelShrink;
    $[40] = otherFormState;
    $[41] = size;
    $[42] = spacing;
    $[43] = t10;
    $[44] = t11;
    $[45] = t9;
    $[46] = variant;
    $[47] = t12;
  } else {
    t12 = $[47];
  }
  var t13;
  if ($[48] !== gridRef) {
    t13 = function t13(ref_0) {
      gridRef.current = ref_0;
    };
    $[48] = gridRef;
    $[49] = t13;
  } else {
    t13 = $[49];
  }
  var t14 = xs || formColAutoXs || 12;
  var t15;
  if ($[50] !== t14) {
    t15 = {
      xs: t14
    };
    $[50] = t14;
    $[51] = t15;
  } else {
    t15 = $[51];
  }
  var t16 = !!label && "with-label";
  var t17 = !!helperText && "with-helper-text";
  var t18;
  if ($[52] !== className || $[53] !== t16 || $[54] !== t17) {
    t18 = classNames(className, "PFormCol", t16, t17);
    $[52] = className;
    $[53] = t16;
    $[54] = t17;
    $[55] = t18;
  } else {
    t18 = $[55];
  }
  var t19;
  if ($[56] !== color || $[57] !== error || $[58] !== focused || $[59] !== icon || $[60] !== label || $[61] !== size || $[62] !== warning) {
    t19 = label && /*#__PURE__*/React.createElement("div", {
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
    $[56] = color;
    $[57] = error;
    $[58] = focused;
    $[59] = icon;
    $[60] = label;
    $[61] = size;
    $[62] = warning;
    $[63] = t19;
  } else {
    t19 = $[63];
  }
  var t20;
  if ($[64] !== children || $[65] !== formColGap) {
    t20 = /*#__PURE__*/React.createElement("div", {
      className: "FormCol-content"
    }, /*#__PURE__*/React.createElement(StyledContentContainerBox, {
      gap: formColGap
    }, children));
    $[64] = children;
    $[65] = formColGap;
    $[66] = t20;
  } else {
    t20 = $[66];
  }
  var t21;
  if ($[67] !== error || $[68] !== helperText || $[69] !== helperTextShift) {
    t21 = helperText && /*#__PURE__*/React.createElement("div", {
      className: "FormCol-helper-text"
    }, /*#__PURE__*/React.createElement(material.FormHelperText, {
      component: "div",
      error: error,
      style: {
        marginLeft: helperTextShift ? 14 : 5
      }
    }, helperText));
    $[67] = error;
    $[68] = helperText;
    $[69] = helperTextShift;
    $[70] = t21;
  } else {
    t21 = $[70];
  }
  var t22;
  if ($[71] !== t19 || $[72] !== t20 || $[73] !== t21) {
    t22 = /*#__PURE__*/React.createElement("div", null, t19, t20, t21);
    $[71] = t19;
    $[72] = t20;
    $[73] = t21;
    $[74] = t22;
  } else {
    t22 = $[74];
  }
  var t23;
  if ($[75] !== style || $[76] !== sx || $[77] !== t13 || $[78] !== t15 || $[79] !== t18 || $[80] !== t22) {
    t23 = /*#__PURE__*/React.createElement(material.Grid, {
      ref: t13,
      size: t15,
      className: t18,
      style: style,
      sx: sx
    }, t22);
    $[75] = style;
    $[76] = sx;
    $[77] = t13;
    $[78] = t15;
    $[79] = t18;
    $[80] = t22;
    $[81] = t23;
  } else {
    t23 = $[81];
  }
  var t24;
  if ($[82] !== t12 || $[83] !== t23) {
    t24 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t12
    }, t23);
    $[82] = t12;
    $[83] = t23;
    $[84] = t24;
  } else {
    t24 = $[84];
  }
  return t24;
};var _templateObject$e, _templateObject2$7;
var StyledContainerDiv = material.styled('div')(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  flex: 1;\n  position: relative;\n"])));
var StyledContentDiv = material.styled('div')(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #cfcfcf;\n    border-radius: 100px;\n  }\n"])));var PFormBody = function PFormBody(t0) {
  var $ = compilerRuntime.c(23);
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
  var _useResizeDetector = reactResizeDetector.useResizeDetector(t1),
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
    t5 = /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(13);
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
    t3 = !noLine && /*#__PURE__*/React.createElement(material.Grid, {
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
    t4 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t5 = /*#__PURE__*/React.createElement(material.Grid, {
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
  var _initSlotProps, _initSlotProps4;
  var $ = compilerRuntime.c(201);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var inputRef = React.useRef(null);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var onBlurRef = reactHook.useAutoUpdateRef(onBlur);
  var onKeyDownRef = reactHook.useAutoUpdateRef(onKeyDown);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    _setError = _useState4[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t1;
  if ($[45] !== errorRef) {
    t1 = function t1(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[45] = errorRef;
    $[46] = t1;
  } else {
    t1 = $[46];
  }
  var setError = t1;
  var _useState5 = React.useState(initData),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    _setData = _useState6[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t2;
  if ($[47] !== dataRef) {
    t2 = function t2(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[47] = dataRef;
    $[48] = t2;
  } else {
    t2 = $[48];
  }
  var setData = t2;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState7 = React.useState(finalInitDisabled),
    _useState8 = _slicedToArray(_useState7, 2),
    disabled = _useState8[0],
    setDisabled = _useState8[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState9 = React.useState(initHidden),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t3;
  if ($[49] !== setError) {
    t3 = function t3(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[49] = setError;
    $[50] = t3;
  } else {
    t3 = $[50];
  }
  var setErrorErrorHelperText = t3;
  var t4;
  if ($[51] !== invalidPattern || $[52] !== onValidateRef || $[53] !== required || $[54] !== setErrorErrorHelperText || $[55] !== validPattern) {
    t4 = function t4(value_1) {
      if (required && compare.empty(value_1)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (compare.notEmpty(value_1) && validPattern) {
        if (!new RegExp(validPattern).test(value_1)) {
          setErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
          return false;
        }
      }
      if (compare.notEmpty(value_1) && invalidPattern) {
        if (new RegExp(invalidPattern).test(value_1)) {
          setErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
          return false;
        }
      }
      if (onValidateRef.current) {
        var validateResult = onValidateRef.current(value_1);
        if (validateResult != null && validateResult !== true) {
          setErrorErrorHelperText(true, validateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[51] = invalidPattern;
    $[52] = onValidateRef;
    $[53] = required;
    $[54] = setErrorErrorHelperText;
    $[55] = validPattern;
    $[56] = t4;
  } else {
    t4 = $[56];
  }
  var validate = t4;
  var t5;
  if ($[57] !== initInputRef) {
    t5 = function t5() {
      if (initInputRef) {
        var _current;
        (_current = initInputRef.current) === null || _current === void 0 || _current.focus();
      } else {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      }
    };
    $[57] = initInputRef;
    $[58] = t5;
  } else {
    t5 = $[58];
  }
  var focus = t5;
  var t6;
  if ($[59] !== onValue) {
    t6 = function t6(newValue_1) {
      return onValue ? onValue(newValue_1) : newValue_1;
    };
    $[59] = onValue;
    $[60] = t6;
  } else {
    t6 = $[60];
  }
  var getFinalValue = t6;
  var t7;
  if ($[61] !== getFinalValue || $[62] !== initValue) {
    t7 = getFinalValue(initValue);
    $[61] = getFinalValue;
    $[62] = initValue;
    $[63] = t7;
  } else {
    t7 = $[63];
  }
  var _useState1 = React.useState(t7),
    _useState10 = _slicedToArray(_useState1, 2),
    value_2 = _useState10[0],
    _setValue = _useState10[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t8;
  if ($[64] !== valueRef) {
    t8 = function t8(value_3) {
      _setValue(function (prev_1) {
        var newValue_2 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_2;
        return newValue_2;
      });
    };
    $[64] = valueRef;
    $[65] = t8;
  } else {
    t8 = $[65];
  }
  var setValue = t8;
  var t9;
  if ($[66] !== error || $[67] !== getFinalValue || $[68] !== name || $[69] !== noFormValueItem || $[70] !== onChangeRef || $[71] !== onValueChange || $[72] !== setValue || $[73] !== validate) {
    t9 = function t9(newValue_3) {
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
    $[66] = error;
    $[67] = getFinalValue;
    $[68] = name;
    $[69] = noFormValueItem;
    $[70] = onChangeRef;
    $[71] = onValueChange;
    $[72] = setValue;
    $[73] = validate;
    $[74] = t9;
  } else {
    t9 = $[74];
  }
  var updateValue = t9;
  var t10;
  if ($[75] !== clear || $[76] !== value_2) {
    t10 = clear ? compare.notEmpty(value_2) : false;
    $[75] = clear;
    $[76] = value_2;
    $[77] = t10;
  } else {
    t10 = $[77];
  }
  var showClear = t10;
  var t11;
  if ($[78] !== name) {
    t11 = function t11() {
      return name;
    };
    $[78] = name;
    $[79] = t11;
  } else {
    t11 = $[79];
  }
  var t12;
  if ($[80] !== getFinalValue || $[81] !== initValueRef) {
    t12 = function t12() {
      return getFinalValue(initValueRef.current);
    };
    $[80] = getFinalValue;
    $[81] = initValueRef;
    $[82] = t12;
  } else {
    t12 = $[82];
  }
  var t13;
  if ($[83] !== initValueRef || $[84] !== updateValue) {
    t13 = function t13() {
      return updateValue(initValueRef.current);
    };
    $[83] = initValueRef;
    $[84] = updateValue;
    $[85] = t13;
  } else {
    t13 = $[85];
  }
  var t14;
  if ($[86] !== valueRef) {
    t14 = function t14() {
      return valueRef.current;
    };
    $[86] = valueRef;
    $[87] = t14;
  } else {
    t14 = $[87];
  }
  var t15;
  if ($[88] !== dataRef) {
    t15 = function t15() {
      return dataRef.current;
    };
    $[88] = dataRef;
    $[89] = t15;
  } else {
    t15 = $[89];
  }
  var t16;
  if ($[90] !== exceptValue) {
    t16 = function t16() {
      return !!exceptValue;
    };
    $[90] = exceptValue;
    $[91] = t16;
  } else {
    t16 = $[91];
  }
  var t17;
  if ($[92] !== disabled) {
    t17 = function t17() {
      return !!disabled;
    };
    $[92] = disabled;
    $[93] = t17;
  } else {
    t17 = $[93];
  }
  var t18;
  if ($[94] !== hidden) {
    t18 = function t18() {
      return !!hidden;
    };
    $[94] = hidden;
    $[95] = t18;
  } else {
    t18 = $[95];
  }
  var t19;
  if ($[96] !== validate || $[97] !== valueRef) {
    t19 = function t19() {
      return validate(valueRef.current);
    };
    $[96] = validate;
    $[97] = valueRef;
    $[98] = t19;
  } else {
    t19 = $[98];
  }
  var t20;
  if ($[99] !== focus || $[100] !== setData || $[101] !== setErrorErrorHelperText || $[102] !== t11 || $[103] !== t12 || $[104] !== t13 || $[105] !== t14 || $[106] !== t15 || $[107] !== t16 || $[108] !== t17 || $[109] !== t18 || $[110] !== t19 || $[111] !== updateValue) {
    t20 = {
      getType: _temp$w,
      getName: t11,
      getReset: t12,
      reset: t13,
      getValue: t14,
      setValue: updateValue,
      getData: t15,
      setData: setData,
      isExceptValue: t16,
      isDisabled: t17,
      setDisabled: setDisabled,
      isHidden: t18,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t19,
      setError: setErrorErrorHelperText
    };
    $[99] = focus;
    $[100] = setData;
    $[101] = setErrorErrorHelperText;
    $[102] = t11;
    $[103] = t12;
    $[104] = t13;
    $[105] = t14;
    $[106] = t15;
    $[107] = t16;
    $[108] = t17;
    $[109] = t18;
    $[110] = t19;
    $[111] = updateValue;
    $[112] = t20;
  } else {
    t20 = $[112];
  }
  var commands = t20;
  var t21;
  if ($[113] !== id || $[114] !== onAddValueItem) {
    t21 = function t21(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[113] = id;
    $[114] = onAddValueItem;
    $[115] = t21;
  } else {
    t21 = $[115];
  }
  var handleCommandSet = t21;
  var t22;
  if ($[116] !== id || $[117] !== onRemoveValueItem) {
    t22 = function t22() {
      return onRemoveValueItem(id);
    };
    $[116] = id;
    $[117] = onRemoveValueItem;
    $[118] = t22;
  } else {
    t22 = $[118];
  }
  var handleCommandUnset = t22;
  reactHook.useForwardRef(ref, commands, !noFormValueItem ? handleCommandSet : undefined, !noFormValueItem ? handleCommandUnset : undefined);
  var t23;
  if ($[119] !== name || $[120] !== noFormValueItem || $[121] !== onRequestSearchSubmit || $[122] !== onValueChangeByUser || $[123] !== select || $[124] !== updateValue) {
    t23 = function t23(e) {
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
    $[119] = name;
    $[120] = noFormValueItem;
    $[121] = onRequestSearchSubmit;
    $[122] = onValueChangeByUser;
    $[123] = select;
    $[124] = updateValue;
    $[125] = t23;
  } else {
    t23 = $[125];
  }
  var handleChange = t23;
  var t24;
  if ($[126] !== error || $[127] !== onBlurRef || $[128] !== validate || $[129] !== valueRef) {
    t24 = function t24(e_0) {
      var _onBlurRef$current;
      if (error) {
        validate(valueRef.current);
      }
      (_onBlurRef$current = onBlurRef.current) === null || _onBlurRef$current === void 0 || _onBlurRef$current.call(onBlurRef, e_0);
    };
    $[126] = error;
    $[127] = onBlurRef;
    $[128] = validate;
    $[129] = valueRef;
    $[130] = t24;
  } else {
    t24 = $[130];
  }
  var handleBlur = t24;
  var t25;
  if ($[131] !== disableReturnKey || $[132] !== multiline || $[133] !== name || $[134] !== noFormValueItem || $[135] !== onKeyDownRef || $[136] !== onRequestSearchSubmit || $[137] !== onRequestSubmit || $[138] !== select || $[139] !== submitWhenReturnKey || $[140] !== valueRef) {
    t25 = function t25(e_1) {
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
    $[131] = disableReturnKey;
    $[132] = multiline;
    $[133] = name;
    $[134] = noFormValueItem;
    $[135] = onKeyDownRef;
    $[136] = onRequestSearchSubmit;
    $[137] = onRequestSubmit;
    $[138] = select;
    $[139] = submitWhenReturnKey;
    $[140] = valueRef;
    $[141] = t25;
  } else {
    t25 = $[141];
  }
  var handleKeyDown = t25;
  var newStyle;
  if ($[142] !== hidden || $[143] !== initStyle || $[144] !== width) {
    newStyle = _objectSpread2({}, initStyle);
    if (width != null) {
      newStyle.width = width;
    }
    if (hidden) {
      newStyle.display = "none";
    }
    $[142] = hidden;
    $[143] = initStyle;
    $[144] = width;
    $[145] = newStyle;
  } else {
    newStyle = $[145];
  }
  var style = newStyle;
  var t26;
  if ($[146] !== clear || $[147] !== disabled || $[148] !== endAdornment || $[149] !== focus || $[150] !== icon || $[151] !== ((_initSlotProps = initSlotProps) === null || _initSlotProps === void 0 ? void 0 : _initSlotProps.input) || $[152] !== name || $[153] !== noFormValueItem || $[154] !== onRequestSearchSubmit || $[155] !== onValueChangeByUser || $[156] !== readOnly || $[157] !== showClear || $[158] !== startAdornment || $[159] !== updateValue) {
    var _initSlotProps3;
    t26 = function t26() {
      var _initSlotProps2;
      var newProps = _objectSpread2({}, (_initSlotProps2 = initSlotProps) === null || _initSlotProps2 === void 0 ? void 0 : _initSlotProps2.input);
      if (startAdornment || icon || newProps.startAdornment) {
        newProps.startAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
          size: "small"
        }, icon)), startAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "start"
        }, startAdornment), newProps.startAdornment);
      }
      if (endAdornment || newProps.endAdornment || clear && !readOnly && !disabled) {
        newProps.endAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, clear && !readOnly && !disabled && /*#__PURE__*/React.createElement(material.InputAdornment, {
          className: classNames("clear-icon-button-wrap", showClear && "show"),
          position: "end"
        }, /*#__PURE__*/React.createElement(material.IconButton, {
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
        }, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
          size: "inherit"
        }, "ClearRounded"))), newProps.endAdornment, endAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "end"
        }, endAdornment));
      }
      return newProps;
    };
    $[146] = clear;
    $[147] = disabled;
    $[148] = endAdornment;
    $[149] = focus;
    $[150] = icon;
    $[151] = (_initSlotProps3 = initSlotProps) === null || _initSlotProps3 === void 0 ? void 0 : _initSlotProps3.input;
    $[152] = name;
    $[153] = noFormValueItem;
    $[154] = onRequestSearchSubmit;
    $[155] = onValueChangeByUser;
    $[156] = readOnly;
    $[157] = showClear;
    $[158] = startAdornment;
    $[159] = updateValue;
    $[160] = t26;
  } else {
    t26 = $[160];
  }
  (_initSlotProps4 = initSlotProps) === null || _initSlotProps4 === void 0 || _initSlotProps4.input;
  var t27;
  if ($[161] !== t26) {
    t27 = t26();
    $[161] = t26;
    $[162] = t27;
  } else {
    t27 = $[162];
  }
  var inputSlotProps = t27;
  var newSlotProps;
  if ($[163] !== initSlotProps || $[164] !== inputSlotProps || $[165] !== labelShrink || $[166] !== maxLength || $[167] !== placeholder || $[168] !== readOnly || $[169] !== tabIndex) {
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
    $[163] = initSlotProps;
    $[164] = inputSlotProps;
    $[165] = labelShrink;
    $[166] = maxLength;
    $[167] = placeholder;
    $[168] = readOnly;
    $[169] = tabIndex;
    $[170] = newSlotProps;
  } else {
    newSlotProps = $[170];
  }
  var slotProps = newSlotProps;
  var t28 = focused || undefined;
  var t29;
  if ($[171] !== initLabel || $[172] !== labelIcon) {
    t29 = labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
      style: {
        verticalAlign: "middle",
        marginRight: 4
      }
    }, labelIcon), /*#__PURE__*/React.createElement(material.Box, {
      component: "span",
      style: {
        verticalAlign: "middle"
      }
    }, initLabel)) : initLabel;
    $[171] = initLabel;
    $[172] = labelIcon;
    $[173] = t29;
  } else {
    t29 = $[173];
  }
  var t30 = "variant-".concat(variant);
  var t31;
  if ($[174] !== className || $[175] !== t30) {
    t31 = classNames(className, "PFormValueItem", "PFormTextField", t30);
    $[174] = className;
    $[175] = t30;
    $[176] = t31;
  } else {
    t31 = $[176];
  }
  var t32 = initInputRef ? initInputRef : inputRef;
  var t33 = !width && fullWidth;
  var t34 = formColWithHelperText ? undefined : error ? errorHelperText : helperText;
  var t35;
  if ($[177] !== color || $[178] !== disabled || $[179] !== error || $[180] !== handleBlur || $[181] !== handleChange || $[182] !== handleKeyDown || $[183] !== multiline || $[184] !== name || $[185] !== placeholder || $[186] !== props || $[187] !== required || $[188] !== select || $[189] !== size || $[190] !== slotProps || $[191] !== style || $[192] !== t28 || $[193] !== t29 || $[194] !== t31 || $[195] !== t32 || $[196] !== t33 || $[197] !== t34 || $[198] !== value_2 || $[199] !== variant) {
    t35 = /*#__PURE__*/React.createElement(material.TextField, _extends({}, props, {
      variant: variant,
      size: size,
      color: color,
      focused: t28,
      name: name,
      label: t29,
      placeholder: placeholder,
      className: t31,
      inputRef: t32,
      value: value_2,
      required: required,
      fullWidth: t33,
      error: error,
      helperText: t34,
      slotProps: slotProps,
      disabled: disabled,
      style: style,
      select: select,
      multiline: multiline,
      onChange: handleChange,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown
    }));
    $[177] = color;
    $[178] = disabled;
    $[179] = error;
    $[180] = handleBlur;
    $[181] = handleChange;
    $[182] = handleKeyDown;
    $[183] = multiline;
    $[184] = name;
    $[185] = placeholder;
    $[186] = props;
    $[187] = required;
    $[188] = select;
    $[189] = size;
    $[190] = slotProps;
    $[191] = style;
    $[192] = t28;
    $[193] = t29;
    $[194] = t31;
    $[195] = t32;
    $[196] = t33;
    $[197] = t34;
    $[198] = value_2;
    $[199] = variant;
    $[200] = t35;
  } else {
    t35 = $[200];
  }
  return t35;
}
function _temp$w() {
  return "default";
}insertStyle(".PFormHidden{display:none !important}");var _excluded$x = ["className"];
var PFormHidden = function PFormHidden(t0) {
  var $ = compilerRuntime.c(8);
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
  var $ = compilerRuntime.c(14);
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
  var $ = compilerRuntime.c(28);
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
  var _useState = React.useState(""),
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
        if (compare.notEmpty(value)) {
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
      if (compare.notEmpty(value)) {
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

var StyledFormText = material.styled(PFormText)(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n  .PFormTag-Input {\n    flex: 1;\n    min-width: 50px;\n    padding-left: 5px;\n  }\n  &.variant-outlined {\n    .MuiInputBase-root {\n      .PFormTag-Input {\n        padding-top: 7px;\n        padding-bottom: 8px;\n      }\n\n      &.MuiInputBase-sizeSmall {\n        .PFormTag-Input {\n          padding-top: 0;\n          padding-bottom: 0;\n        }\n      }\n    }\n  }\n"])));var _excluded$u = ["ref", "variant", "size", "className", "name", "value", "exceptValue", "clear", "required", "readOnly", "maxLength", "disabled", "fullWidth", "error", "helperText", "formValueSeparator", "formValueSort", "limitTags", "getLimitTagsText", "allowSpace", "slotProps", "onAppendTag", "onRemoveTag", "onTagClick", "onValidate", "onChange", "onValue"],
  _excluded2$4 = ["variant", "size", "fullWidth", "disabled", "onAddValueItem", "onValueChange", "onValueChangeByUser", "onRequestSearchSubmit"];
var _emptyValue = [];
var PFormTag = function PFormTag(t0) {
  var $ = compilerRuntime.c(147);
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(initError),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  reactHook.useChanged(initError) && setError(initError);
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = React.useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var t5;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[39] = t5;
  } else {
    t5 = $[39];
  }
  var setErrorErrorHelperText = t5;
  var t6;
  if ($[40] !== onValidateRef || $[41] !== required) {
    t6 = function t6(value) {
      if (required && compare.empty(value)) {
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
    $[40] = onValidateRef;
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
  var _useState7 = React.useState(t8),
    _useState8 = _slicedToArray(_useState7, 2),
    value_1 = _useState8[0],
    _setValue = _useState8[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_1);
  var t9;
  if ($[48] !== valueRef) {
    t9 = function t9(value_2) {
      _setValue(function (prev) {
        var newValue = typeof value_2 === "function" ? value_2(prev) : value_2;
        valueRef.current = newValue;
        return newValue;
      });
    };
    $[48] = valueRef;
    $[49] = t9;
  } else {
    t9 = $[49];
  }
  var setValue = t9;
  var t10;
  if ($[50] !== value_1) {
    t10 = new Set(value_1);
    $[50] = value_1;
    $[51] = t10;
  } else {
    t10 = $[51];
  }
  var _useState9 = React.useState(t10),
    _useState0 = _slicedToArray(_useState9, 1),
    valueSet = _useState0[0];
  var t11;
  if ($[52] !== error || $[53] !== getFinalValue || $[54] !== name || $[55] !== onChangeRef || $[56] !== onValueChange || $[57] !== setValue || $[58] !== _validate) {
    t11 = function t11(newValue_0) {
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
    $[52] = error;
    $[53] = getFinalValue;
    $[54] = name;
    $[55] = onChangeRef;
    $[56] = onValueChange;
    $[57] = setValue;
    $[58] = _validate;
    $[59] = t11;
  } else {
    t11 = $[59];
  }
  var updateValue = t11;
  var t12;
  if ($[60] !== initValueRef || $[61] !== name || $[62] !== onChangeRef || $[63] !== onValueChange || $[64] !== valueRef) {
    t12 = function t12() {
      if (!compare.equal(valueRef.current, initValueRef.current)) {
        var _onChangeRef$current2;
        (_onChangeRef$current2 = onChangeRef.current) === null || _onChangeRef$current2 === void 0 || _onChangeRef$current2.call(onChangeRef, valueRef.current);
        onValueChange(name, valueRef.current);
      }
    };
    $[60] = initValueRef;
    $[61] = name;
    $[62] = onChangeRef;
    $[63] = onValueChange;
    $[64] = valueRef;
    $[65] = t12;
  } else {
    t12 = $[65];
  }
  var effectEvent = React.useEffectEvent(t12);
  var t13;
  if ($[66] !== effectEvent) {
    t13 = function t13() {
      return effectEvent();
    };
    $[66] = effectEvent;
    $[67] = t13;
  } else {
    t13 = $[67];
  }
  var t14;
  if ($[68] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = [];
    $[68] = t14;
  } else {
    t14 = $[68];
  }
  React.useEffect(t13, t14);
  var t15;
  if ($[69] !== formValueSeparator || $[70] !== formValueSort) {
    t15 = function t15() {
      return {
        isFormValueSort: function isFormValueSort() {
          return !!formValueSort;
        },
        getFormValueSeparator: function getFormValueSeparator() {
          return formValueSeparator;
        }
      };
    };
    $[69] = formValueSeparator;
    $[70] = formValueSort;
    $[71] = t15;
  } else {
    t15 = $[71];
  }
  var getExtraCommands = t15;
  var t16;
  if ($[72] !== getExtraCommands || $[73] !== getFinalValue || $[74] !== initValueRef || $[75] !== updateValue || $[76] !== _validate || $[77] !== valueRef) {
    t16 = function t16(baseCommands) {
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
    $[72] = getExtraCommands;
    $[73] = getFinalValue;
    $[74] = initValueRef;
    $[75] = updateValue;
    $[76] = _validate;
    $[77] = valueRef;
    $[78] = t16;
  } else {
    t16 = $[78];
  }
  var getCommands = t16;
  var t17;
  if ($[79] !== name || $[80] !== onAppendTag || $[81] !== onRequestSearchSubmit || $[82] !== onValueChangeByUser || $[83] !== updateValue || $[84] !== valueSet) {
    t17 = function t17(tag) {
      var finalTag = tag.trim();
      if (compare.notEmpty(finalTag) && !valueSet.has(finalTag)) {
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
    $[79] = name;
    $[80] = onAppendTag;
    $[81] = onRequestSearchSubmit;
    $[82] = onValueChangeByUser;
    $[83] = updateValue;
    $[84] = valueSet;
    $[85] = t17;
  } else {
    t17 = $[85];
  }
  var appendTag = t17;
  var t18;
  if ($[86] !== name || $[87] !== onRemoveTag || $[88] !== onRequestSearchSubmit || $[89] !== onValueChangeByUser || $[90] !== updateValue || $[91] !== valueSet) {
    t18 = function t18(tag_0) {
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
    $[86] = name;
    $[87] = onRemoveTag;
    $[88] = onRequestSearchSubmit;
    $[89] = onValueChangeByUser;
    $[90] = updateValue;
    $[91] = valueSet;
    $[92] = t18;
  } else {
    t18 = $[92];
  }
  var removeTag = t18;
  var t19;
  if ($[93] !== getCommands || $[94] !== onAddValueItem) {
    t19 = function t19(id, commands) {
      onAddValueItem(id, getCommands(commands));
    };
    $[93] = getCommands;
    $[94] = onAddValueItem;
    $[95] = t19;
  } else {
    t19 = $[95];
  }
  var handleAddValueItem = t19;
  var t20;
  if ($[96] !== getCommands || $[97] !== ref) {
    t20 = function t20(commands_0) {
      if (ref) {
        var finalCommands = getCommands(commands_0);
        if (typeof ref === "function") {
          ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[96] = getCommands;
    $[97] = ref;
    $[98] = t20;
  } else {
    t20 = $[98];
  }
  var handleRef = t20;
  var t21;
  if ($[99] !== disabled || $[100] !== onTagClick || $[101] !== readOnly || $[102] !== removeTag || $[103] !== size || $[104] !== variant) {
    t21 = function t21(tags) {
      return tags.map(function (tag_1) {
        return /*#__PURE__*/React.createElement(material.Chip, {
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
    $[99] = disabled;
    $[100] = onTagClick;
    $[101] = readOnly;
    $[102] = removeTag;
    $[103] = size;
    $[104] = variant;
    $[105] = t21;
  } else {
    t21 = $[105];
  }
  var handleRenderValue = t21;
  var t22;
  if ($[106] !== allowSpace || $[107] !== appendTag || $[108] !== className || $[109] !== clear || $[110] !== disabled || $[111] !== error || $[112] !== errorHelperText || $[113] !== exceptValue || $[114] !== fullWidth || $[115] !== handleRef || $[116] !== helperText || $[117] !== maxLength || $[118] !== name || $[119] !== props || $[120] !== readOnly || $[121] !== size || $[122] !== slotProps || $[123] !== variant) {
    t22 = function t22(params) {
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
    $[106] = allowSpace;
    $[107] = appendTag;
    $[108] = className;
    $[109] = clear;
    $[110] = disabled;
    $[111] = error;
    $[112] = errorHelperText;
    $[113] = exceptValue;
    $[114] = fullWidth;
    $[115] = handleRef;
    $[116] = helperText;
    $[117] = maxLength;
    $[118] = name;
    $[119] = props;
    $[120] = readOnly;
    $[121] = size;
    $[122] = slotProps;
    $[123] = variant;
    $[124] = t22;
  } else {
    t22 = $[124];
  }
  var handleRenderInput = t22;
  var t23;
  if ($[125] !== formFullWidth || $[126] !== formSize || $[127] !== formVariant || $[128] !== handleAddValueItem || $[129] !== otherFormState) {
    t23 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      variant: formVariant,
      size: formSize,
      fullWidth: formFullWidth,
      onAddValueItem: handleAddValueItem,
      onValueChange: _temp$v,
      onValueChangeByUser: _temp2$5,
      onRequestSearchSubmit: _temp3$3
    });
    $[125] = formFullWidth;
    $[126] = formSize;
    $[127] = formVariant;
    $[128] = handleAddValueItem;
    $[129] = otherFormState;
    $[130] = t23;
  } else {
    t23 = $[130];
  }
  var t24;
  if ($[131] === Symbol["for"]("react.memo_cache_sentinel")) {
    t24 = [];
    $[131] = t24;
  } else {
    t24 = $[131];
  }
  var t25 = fullWidth ? "block" : "inline-block";
  var t26 = fullWidth ? "100%" : undefined;
  var t27;
  if ($[132] !== t25 || $[133] !== t26) {
    t27 = {
      display: t25,
      width: t26
    };
    $[132] = t25;
    $[133] = t26;
    $[134] = t27;
  } else {
    t27 = $[134];
  }
  var t28;
  if ($[135] !== disabled || $[136] !== getLimitTagsText || $[137] !== handleRenderInput || $[138] !== handleRenderValue || $[139] !== limitTags || $[140] !== readOnly || $[141] !== t27 || $[142] !== value_1) {
    t28 = /*#__PURE__*/React.createElement(material.Autocomplete, {
      options: t24,
      multiple: true,
      freeSolo: true,
      value: value_1,
      readOnly: readOnly,
      disableClearable: true,
      limitTags: limitTags,
      getLimitTagsText: getLimitTagsText,
      disabled: disabled,
      renderValue: handleRenderValue,
      style: t27,
      renderInput: handleRenderInput
    });
    $[135] = disabled;
    $[136] = getLimitTagsText;
    $[137] = handleRenderInput;
    $[138] = handleRenderValue;
    $[139] = limitTags;
    $[140] = readOnly;
    $[141] = t27;
    $[142] = value_1;
    $[143] = t28;
  } else {
    t28 = $[143];
  }
  var t29;
  if ($[144] !== t23 || $[145] !== t28) {
    t29 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t23
    }, t28);
    $[144] = t23;
    $[145] = t28;
    $[146] = t29;
  } else {
    t29 = $[146];
  }
  return t29;
};
function _temp$v() {}
function _temp2$5() {}
function _temp3$3() {}var _excluded$t = ["className", "validPattern", "onValue"];
var PFormEmail = function PFormEmail(t0) {
  var $ = compilerRuntime.c(16);
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
  var onValueRef = reactHook.useAutoUpdateRef(onValue);
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
var StyledEyeInputAdornment = material.styled(material.InputAdornment)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n  visibility: hidden;\n"])));
var PFormPassword = function PFormPassword(t0) {
  var _initSlotProps$input;
  var $ = compilerRuntime.c(24);
  var className = t0.className,
    initSlotProps = t0.slotProps,
    t1 = t0.clear,
    t2 = t0.eye,
    onChange = t0.onChange,
    props = _objectWithoutProperties(t0, _excluded$s);
  var clear = t1 === undefined ? false : t1;
  var eye = t2 === undefined ? true : t2;
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var _useState = React.useState(compare.notEmpty(props.value)),
    _useState2 = _slicedToArray(_useState, 2),
    showEye = _useState2[0],
    setShowEye = _useState2[1];
  var _useState3 = React.useState("password"),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1];
  var t3;
  if ($[0] !== eye || $[1] !== showEye || $[2] !== type) {
    t3 = eye && /*#__PURE__*/React.createElement(StyledEyeInputAdornment, {
      position: "end",
      className: classNames("eye-icon-button-wrap", showEye && "show")
    }, /*#__PURE__*/React.createElement(material.IconButton, {
      size: "small",
      tabIndex: -1,
      onClick: function onClick() {
        setType(_temp$u);
      }
    }, /*#__PURE__*/React.createElement(material.Icon, {
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
      setShowEye(compare.notEmpty(value));
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
  var $ = compilerRuntime.c(18);
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
  var onValueRef = reactHook.useAutoUpdateRef(onValue);
  var t3;
  if ($[8] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = formatting.formatTelNo(value.replace(/[^0-9]/gi, ""));
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
  var $ = compilerRuntime.c(12);
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
  var $ = compilerRuntime.c(8);
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
    t2 = /*#__PURE__*/React.createElement(reactNumberFormat.NumericFormat, _extends({}, props, {
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
  var $ = compilerRuntime.c(69);
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValueRef = reactHook.useAutoUpdateRef(onValue);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(initValue !== undefined ? "".concat(initValue) : ""),
    _useState2 = _slicedToArray(_useState, 2),
    strValue = _useState2[0],
    _setStrValue = _useState2[1];
  var strValueRef = reactHook.useAutoUpdateRef(strValue);
  var t2;
  if ($[19] !== strValueRef) {
    t2 = function t2(value) {
      _setStrValue(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        strValueRef.current = newValue;
        return newValue;
      });
    };
    $[19] = strValueRef;
    $[20] = t2;
  } else {
    t2 = $[20];
  }
  var setStrValue = t2;
  var newSlotProps;
  if ($[21] !== allowDecimal || $[22] !== allowNegative || $[23] !== decimalScale || $[24] !== initSlotProps || $[25] !== prefix || $[26] !== readOnly || $[27] !== suffix || $[28] !== tabIndex || $[29] !== thousandSeparator) {
    var _newSlotProps$input;
    newSlotProps = _objectSpread2({}, initSlotProps);
    var _t2 = readOnly ? "Mui-disabled" : undefined;
    var _t3 = !!allowNegative;
    var _t4 = !!readOnly;
    var _t5 = readOnly ? -1 : tabIndex;
    var inputProps;
    if ($[31] !== allowDecimal || $[32] !== decimalScale || $[33] !== prefix || $[34] !== suffix || $[35] !== _t2 || $[36] !== _t3 || $[37] !== _t4 || $[38] !== _t5 || $[39] !== thousandSeparator) {
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
      $[31] = allowDecimal;
      $[32] = decimalScale;
      $[33] = prefix;
      $[34] = suffix;
      $[35] = _t2;
      $[36] = _t3;
      $[37] = _t4;
      $[38] = _t5;
      $[39] = thousandSeparator;
      $[40] = inputProps;
    } else {
      inputProps = $[40];
    }
    newSlotProps.input = _objectSpread2(_objectSpread2({}, newSlotProps.input), {}, {
      inputComponent: NumberFormatCustom,
      inputProps: _objectSpread2(_objectSpread2({}, (_newSlotProps$input = newSlotProps.input) === null || _newSlotProps$input === void 0 ? void 0 : _newSlotProps$input.inputProps), inputProps)
    });
    $[21] = allowDecimal;
    $[22] = allowNegative;
    $[23] = decimalScale;
    $[24] = initSlotProps;
    $[25] = prefix;
    $[26] = readOnly;
    $[27] = suffix;
    $[28] = tabIndex;
    $[29] = thousandSeparator;
    $[30] = newSlotProps;
  } else {
    newSlotProps = $[30];
  }
  var slotProps = newSlotProps;
  var getFinalValue = _temp$t;
  var t3;
  if ($[41] !== onChangeRef || $[42] !== setStrValue || $[43] !== strValueRef) {
    t3 = function t3(value_1) {
      if (Number(value_1) > Number.MAX_SAFE_INTEGER) {
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
        if (Number(value_1) < Number.MIN_SAFE_INTEGER) {
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
          var newValue_2 = compare.empty(value_1) || value_1 === "-" || value_1 === "." ? undefined : Number(value_1);
          (_onChangeRef$current3 = onChangeRef.current) === null || _onChangeRef$current3 === void 0 || _onChangeRef$current3.call(onChangeRef, newValue_2);
          setStrValue(value_1);
        }
      }
    };
    $[41] = onChangeRef;
    $[42] = setStrValue;
    $[43] = strValueRef;
    $[44] = t3;
  } else {
    t3 = $[44];
  }
  var handleChange = t3;
  var t4;
  if ($[45] !== onValueRef) {
    t4 = function t4(value_2) {
      var finalValue = compare.empty(value_2) || value_2 === "-" || value_2 === "." ? undefined : Number(value_2);
      if (onValueRef.current) {
        finalValue = onValueRef.current(finalValue);
      }
      return finalValue !== undefined ? finalValue.toString() : "";
    };
    $[45] = onValueRef;
    $[46] = t4;
  } else {
    t4 = $[46];
  }
  var handleValue = t4;
  var t5;
  if ($[47] !== onValidateRef) {
    t5 = function t5(value_3) {
      if (onValidateRef.current) {
        var finalValue_0 = compare.empty(value_3) || value_3 === "-" || value_3 === "." ? undefined : Number(value_3);
        return onValidateRef.current(finalValue_0);
      } else {
        return true;
      }
    };
    $[47] = onValidateRef;
    $[48] = t5;
  } else {
    t5 = $[48];
  }
  var handleValidate = t5;
  var t6;
  if ($[49] !== initValueRef || $[50] !== onChangeRef || $[51] !== ref || $[52] !== setStrValue || $[53] !== strValueRef) {
    t6 = function t6(commands) {
      if (ref) {
        var finalCommands = commands ? _objectSpread2(_objectSpread2({}, commands), {}, {
          getReset: function getReset() {
            return initValueRef.current;
          },
          getValue: function getValue() {
            return getFinalValue(strValueRef.current);
          },
          setValue: function setValue(value_4) {
            var _onChangeRef$current4;
            var newStrValue_1 = value_4 !== undefined ? "".concat(value_4) : "";
            if (strValueRef.current === newStrValue_1) {
              setStrValue("".concat(newStrValue_1, " "));
            } else {
              setStrValue(newStrValue_1);
            }
            (_onChangeRef$current4 = onChangeRef.current) === null || _onChangeRef$current4 === void 0 || _onChangeRef$current4.call(onChangeRef, value_4);
          }
        }) : null;
        if (typeof ref === "function") {
          return ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[49] = initValueRef;
    $[50] = onChangeRef;
    $[51] = ref;
    $[52] = setStrValue;
    $[53] = strValueRef;
    $[54] = t6;
  } else {
    t6 = $[54];
  }
  var handleRef = t6;
  var t7;
  if ($[55] !== className) {
    t7 = classNames(className, "PFormNumber");
    $[55] = className;
    $[56] = t7;
  } else {
    t7 = $[56];
  }
  var t8 = strValue === "" || strValue === undefined ? labelShrink : true;
  var t9;
  if ($[57] !== clear || $[58] !== handleChange || $[59] !== handleRef || $[60] !== handleValidate || $[61] !== handleValue || $[62] !== props || $[63] !== readOnly || $[64] !== slotProps || $[65] !== strValue || $[66] !== t7 || $[67] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      ref: handleRef,
      className: t7,
      disableReturnKey: true,
      labelShrink: t8,
      slotProps: slotProps,
      readOnly: readOnly,
      clear: clear,
      value: strValue,
      onChange: handleChange,
      onValue: handleValue,
      onValidate: handleValidate
    }, props));
    $[57] = clear;
    $[58] = handleChange;
    $[59] = handleRef;
    $[60] = handleValidate;
    $[61] = handleValue;
    $[62] = props;
    $[63] = readOnly;
    $[64] = slotProps;
    $[65] = strValue;
    $[66] = t7;
    $[67] = t8;
    $[68] = t9;
  } else {
    t9 = $[68];
  }
  return t9;
};
function _temp$t(value_0) {
  return compare.empty(value_0) || value_0 === "-" || value_0 === "." ? undefined : Number(value_0);
}insertStyle(".PFormSearch input[type=search]::-webkit-search-decoration,.PFormSearch input[type=search]::-webkit-search-cancel-button,.PFormSearch input[type=search]::-webkit-search-results-button,.PFormSearch input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}");var _excluded$n = ["className"];
var PFormSearch = function PFormSearch(t0) {
  var $ = compilerRuntime.c(8);
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
  var $ = compilerRuntime.c(14);
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
  var $ = compilerRuntime.c(16);
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
  var onValueRef = reactHook.useAutoUpdateRef(onValue);
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
  var $ = compilerRuntime.c(147);
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var onLoadItemsRef = reactHook.useAutoUpdateRef(onLoadItems);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
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
  var _useState = React.useState(t4),
    _useState2 = _slicedToArray(_useState, 1),
    emptyValue = _useState2[0];
  var t5;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {};
    $[28] = t5;
  } else {
    t5 = $[28];
  }
  var _useState3 = React.useState(t5),
    _useState4 = _slicedToArray(_useState3, 2),
    itemValueLabels = _useState4[0],
    setItemValueLabels = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasEmptyValue = _useState6[0],
    setHasEmptyValue = _useState6[1];
  var _useState7 = React.useState(!!onLoadItems),
    _useState8 = _slicedToArray(_useState7, 2),
    isOnGetItemLoading = _useState8[0],
    setIsOnGetItemLoading = _useState8[1];
  var _useState9 = React.useState(initLoading),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    _setLoading = _useState0[1];
  var t6;
  if (isOnGetItemLoading || loading) {
    var _t3;
    if ($[29] !== initStartAdornment || $[30] !== isOnGetItemLoading || $[31] !== loading) {
      _t3 = (isOnGetItemLoading || loading) && /*#__PURE__*/React.createElement(material.CircularProgress, {
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
  var _useState1 = React.useState(initItems),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    _setItems = _useState10[1];
  reactHook.useChanged(initItems) && _setItems(initItems);
  if (reactHook.useChanged(items, true)) {
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
          if (compare.empty(finalValue)) {
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
          finalValue = compare.empty(finalValue) ? "" : finalValue[0];
        } else {
          if (compare.empty(finalValue)) {
            finalValue = "";
          }
        }
      }
      if (compare.notEmpty(itemsValues)) {
        if (finalValue != null && compare.notEmpty(finalValue)) {
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
      return compare.equal(newValue, finalValue) ? newValue : finalValue;
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
  var _useState11 = React.useState(t9),
    _useState12 = _slicedToArray(_useState11, 2),
    value_1 = _useState12[0],
    _setValue = _useState12[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_1);
  var t10;
  if ($[47] !== valueRef) {
    t10 = function t10(value_2) {
      _setValue(function (prev) {
        var newValue_0 = typeof value_2 === "function" ? value_2(prev) : value_2;
        valueRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[47] = valueRef;
    $[48] = t10;
  } else {
    t10 = $[48];
  }
  var setValue = t10;
  var t11;
  if ($[49] !== getFinalValue || $[50] !== name || $[51] !== onChangeRef || $[52] !== onValueChange || $[53] !== setValue) {
    t11 = function t11(newValue_1, t12) {
      var _onChangeRef$current;
      var skipGetFinalValue = t12 === undefined ? false : t12;
      var finalValue_0 = skipGetFinalValue ? newValue_1 : getFinalValue(newValue_1);
      setValue(finalValue_0);
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[49] = getFinalValue;
    $[50] = name;
    $[51] = onChangeRef;
    $[52] = onValueChange;
    $[53] = setValue;
    $[54] = t11;
  } else {
    t11 = $[54];
  }
  var updateValue = t11;
  var t12;
  if ($[55] !== updateValue || $[56] !== valueRef) {
    t12 = function t12() {
      return updateValue(valueRef.current);
    };
    $[55] = updateValue;
    $[56] = valueRef;
    $[57] = t12;
  } else {
    t12 = $[57];
  }
  var effectEvent = React.useEffectEvent(t12);
  var firstSkipRef = React.useRef(true);
  var t13;
  if ($[58] !== effectEvent) {
    t13 = function t13() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    };
    $[58] = effectEvent;
    $[59] = t13;
  } else {
    t13 = $[59];
  }
  var t14;
  if ($[60] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = [];
    $[60] = t14;
  } else {
    t14 = $[60];
  }
  React.useEffect(t13, t14);
  var t15;
  var t16;
  if ($[61] !== onLoadItemsRef) {
    t15 = function t15() {
      if (onLoadItemsRef.current) {
        onLoadItemsRef.current().then(function (items_0) {
          _setItems(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    t16 = [onLoadItemsRef];
    $[61] = onLoadItemsRef;
    $[62] = t15;
    $[63] = t16;
  } else {
    t15 = $[62];
    t16 = $[63];
  }
  React.useEffect(t15, t16);
  var t17;
  if ($[64] !== hasEmptyValue || $[65] !== items || $[66] !== placeholder || $[67] !== value_1) {
    t17 = compare.notEmpty(items) && compare.empty(value_1) && !!placeholder && !hasEmptyValue;
    $[64] = hasEmptyValue;
    $[65] = items;
    $[66] = placeholder;
    $[67] = value_1;
    $[68] = t17;
  } else {
    t17 = $[68];
  }
  var isSelectedPlaceholder = t17;
  var t18;
  if ($[69] !== getFinalValue || $[70] !== initValueRef || $[71] !== updateValue || $[72] !== valueRef) {
    t18 = function t18() {
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
        setValue: function setValue(value_3) {
          return updateValue(value_3);
        }
      };
    };
    $[69] = getFinalValue;
    $[70] = initValueRef;
    $[71] = updateValue;
    $[72] = valueRef;
    $[73] = t18;
  } else {
    t18 = $[73];
  }
  var getBaseCommands = t18;
  var t19;
  if ($[74] !== formValueSeparator || $[75] !== formValueSort || $[76] !== items || $[77] !== loading || $[78] !== multiple || $[79] !== onLoadItems) {
    t19 = function t19() {
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
    $[74] = formValueSeparator;
    $[75] = formValueSort;
    $[76] = items;
    $[77] = loading;
    $[78] = multiple;
    $[79] = onLoadItems;
    $[80] = t19;
  } else {
    t19 = $[80];
  }
  var getExtraCommands = t19;
  var t20;
  if ($[81] !== getBaseCommands || $[82] !== getExtraCommands || $[83] !== ref) {
    t20 = function t20(commands) {
      if (ref) {
        var finalCommands = commands ? _objectSpread2(_objectSpread2(_objectSpread2({}, commands), getBaseCommands()), getExtraCommands()) : null;
        if (typeof ref === "function") {
          return ref(finalCommands);
        } else {
          ref.current = finalCommands;
        }
      }
    };
    $[81] = getBaseCommands;
    $[82] = getExtraCommands;
    $[83] = ref;
    $[84] = t20;
  } else {
    t20 = $[84];
  }
  var handleRef = t20;
  var t21;
  if ($[85] !== getBaseCommands || $[86] !== getExtraCommands || $[87] !== onAddValueItem) {
    t21 = function t21(id, commands_0) {
      onAddValueItem(id, _objectSpread2(_objectSpread2(_objectSpread2({}, commands_0), getBaseCommands()), getExtraCommands()));
    };
    $[85] = getBaseCommands;
    $[86] = getExtraCommands;
    $[87] = onAddValueItem;
    $[88] = t21;
  } else {
    t21 = $[88];
  }
  var handleAddValueItem = t21;
  var newFinalValue;
  if (compare.notEmpty(items)) {
    newFinalValue = value_1;
  } else {
    newFinalValue = multiple ? emptyValue : "";
  }
  if (multiple) {
    if (newFinalValue != null && !Array.isArray(newFinalValue)) {
      var _t7;
      if ($[89] !== newFinalValue) {
        _t7 = [newFinalValue];
        $[89] = newFinalValue;
        $[90] = _t7;
      } else {
        _t7 = $[90];
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
  var t22 = !!multiple;
  var finalSelectProps;
  if ($[91] !== finalValue_1 || $[92] !== isSelectedPlaceholder || $[93] !== itemValueLabels || $[94] !== minWidth || $[95] !== multiple || $[96] !== placeholder || $[97] !== t22 || $[98] !== width) {
    var _finalSelectProps$Men;
    finalSelectProps = {
      displayEmpty: true,
      multiple: t22,
      value: finalValue_1
    };
    if (multiple) {
      var _t8;
      if ($[100] !== isSelectedPlaceholder || $[101] !== itemValueLabels || $[102] !== placeholder) {
        _t8 = function _t8(selected) {
          if (isSelectedPlaceholder) {
            return placeholder;
          } else {
            return /*#__PURE__*/React.createElement(material.Box, {
              className: "selected-list",
              sx: {
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5
              }
            }, Array.isArray(selected) && selected.map(function (selectedValue) {
              if (isSelectedPlaceholder) {
                return /*#__PURE__*/React.createElement(material.Chip, {
                  key: selectedValue || "$$$EmptyValuePlaceholder$$$",
                  label: "hahaha",
                  size: "small"
                });
              } else {
                return /*#__PURE__*/React.createElement(material.Chip, {
                  key: selectedValue,
                  label: itemValueLabels["".concat(selectedValue)],
                  size: "small"
                });
              }
            }));
          }
        };
        $[100] = isSelectedPlaceholder;
        $[101] = itemValueLabels;
        $[102] = placeholder;
        $[103] = _t8;
      } else {
        _t8 = $[103];
      }
      finalSelectProps.renderValue = _t8;
    }
    finalSelectProps.style = _objectSpread2(_objectSpread2({}, finalSelectProps.style), {}, {
      minWidth: width || minWidth
    });
    finalSelectProps.MenuProps = _objectSpread2(_objectSpread2({}, finalSelectProps.MenuProps), {}, {
      className: classNames((_finalSelectProps$Men = finalSelectProps.MenuProps) === null || _finalSelectProps$Men === void 0 ? void 0 : _finalSelectProps$Men.className, "PFormSelect-Menu-Popover")
    });
    $[91] = finalValue_1;
    $[92] = isSelectedPlaceholder;
    $[93] = itemValueLabels;
    $[94] = minWidth;
    $[95] = multiple;
    $[96] = placeholder;
    $[97] = t22;
    $[98] = width;
    $[99] = finalSelectProps;
  } else {
    finalSelectProps = $[99];
  }
  var selectProps = finalSelectProps;
  var t23;
  if ($[104] !== hasEmptyValue || $[105] !== ((_initSlotProps = initSlotProps) === null || _initSlotProps === void 0 ? void 0 : _initSlotProps.inputLabel) || $[106] !== ((_initSlotProps2 = initSlotProps) === null || _initSlotProps2 === void 0 ? void 0 : _initSlotProps2.select) || $[107] !== placeholder || $[108] !== selectProps) {
    var _initSlotProps5, _initSlotProps6;
    t23 = function t23() {
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
    $[104] = hasEmptyValue;
    $[105] = (_initSlotProps5 = initSlotProps) === null || _initSlotProps5 === void 0 ? void 0 : _initSlotProps5.inputLabel;
    $[106] = (_initSlotProps6 = initSlotProps) === null || _initSlotProps6 === void 0 ? void 0 : _initSlotProps6.select;
    $[107] = placeholder;
    $[108] = selectProps;
    $[109] = t23;
  } else {
    t23 = $[109];
  }
  (_initSlotProps7 = initSlotProps) === null || _initSlotProps7 === void 0 || _initSlotProps7.inputLabel;
  (_initSlotProps8 = initSlotProps) === null || _initSlotProps8 === void 0 || _initSlotProps8.select;
  var t24;
  if ($[110] !== t23) {
    t24 = t23();
    $[110] = t23;
    $[111] = t24;
  } else {
    t24 = $[111];
  }
  var slotProps = t24;
  var t25;
  if ($[112] !== formFullWidth || $[113] !== handleAddValueItem || $[114] !== otherFormState) {
    t25 = _objectSpread2(_objectSpread2({}, otherFormState), {}, {
      fullWidth: formFullWidth,
      labelShrink: true,
      onAddValueItem: handleAddValueItem,
      onValueChange: _temp4$2
    });
    $[112] = formFullWidth;
    $[113] = handleAddValueItem;
    $[114] = otherFormState;
    $[115] = t25;
  } else {
    t25 = $[115];
  }
  var t26 = isSelectedPlaceholder && "is-selected-placeholder";
  var t27;
  if ($[116] !== className || $[117] !== t26) {
    t27 = classNames(className, "PFormSelect", t26);
    $[116] = className;
    $[117] = t26;
    $[118] = t27;
  } else {
    t27 = $[118];
  }
  var t28 = finalValue_1;
  var t29;
  if ($[119] !== items || $[120] !== readOnly) {
    t29 = readOnly || compare.empty(items);
    $[119] = items;
    $[120] = readOnly;
    $[121] = t29;
  } else {
    t29 = $[121];
  }
  var t30;
  if ($[122] !== isSelectedPlaceholder || $[123] !== placeholder) {
    t30 = isSelectedPlaceholder && /*#__PURE__*/React.createElement(material.MenuItem, {
      key: "$$$EmptyValuePlaceholder$$$",
      value: "",
      disabled: true,
      sx: {
        display: "none"
      }
    }, placeholder);
    $[122] = isSelectedPlaceholder;
    $[123] = placeholder;
    $[124] = t30;
  } else {
    t30 = $[124];
  }
  var t31;
  if ($[125] !== checkbox || $[126] !== items || $[127] !== multiple || $[128] !== value_1) {
    t31 = items && compare.notEmpty(items) ? items.map(function (t32) {
      var itemLabel = t32.label,
        itemValue = t32.value,
        disabled = t32.disabled;
      return /*#__PURE__*/React.createElement(material.MenuItem, {
        key: compare.empty(itemValue) ? "$$$EmptyValue$$$" : "".concat(itemValue),
        value: typeof itemValue === "boolean" ? "".concat(itemValue) : itemValue,
        disabled: disabled
      }, multiple && checkbox && Array.isArray(value_1) && /*#__PURE__*/React.createElement(material.Checkbox, {
        checked: value_1.includes(itemValue)
      }), itemLabel);
    }) : /*#__PURE__*/React.createElement(material.MenuItem, {
      value: ""
    });
    $[125] = checkbox;
    $[126] = items;
    $[127] = multiple;
    $[128] = value_1;
    $[129] = t31;
  } else {
    t31 = $[129];
  }
  var t32;
  if ($[130] !== fullWidth || $[131] !== getFinalValue || $[132] !== handleRef || $[133] !== name || $[134] !== props || $[135] !== slotProps || $[136] !== startAdornment || $[137] !== t27 || $[138] !== t28 || $[139] !== t29 || $[140] !== t30 || $[141] !== t31 || $[142] !== updateValue) {
    t32 = /*#__PURE__*/React.createElement(PFormTextField, _extends({
      select: true,
      ref: handleRef,
      name: name,
      className: t27,
      fullWidth: fullWidth
    }, props, {
      startAdornment: startAdornment,
      value: t28,
      clear: false,
      readOnly: t29,
      slotProps: slotProps,
      onChange: updateValue,
      onValue: getFinalValue
    }), t30, t31);
    $[130] = fullWidth;
    $[131] = getFinalValue;
    $[132] = handleRef;
    $[133] = name;
    $[134] = props;
    $[135] = slotProps;
    $[136] = startAdornment;
    $[137] = t27;
    $[138] = t28;
    $[139] = t29;
    $[140] = t30;
    $[141] = t31;
    $[142] = updateValue;
    $[143] = t32;
  } else {
    t32 = $[143];
  }
  var t33;
  if ($[144] !== t25 || $[145] !== t32) {
    t33 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: t25
    }, t32);
    $[144] = t25;
    $[145] = t32;
    $[146] = t33;
  } else {
    t33 = $[146];
  }
  return t33;
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
  var $ = compilerRuntime.c(16);
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
  var onValueRef = reactHook.useAutoUpdateRef(onValue);
  var t3;
  if ($[7] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = formatting.formatBusinessNo(value.replace(/[^0-9]/gi, ""));
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
  var $ = compilerRuntime.c(22);
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
  var onValueRef = reactHook.useAutoUpdateRef(onValue);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var t3;
  if ($[9] !== onValueRef) {
    t3 = function t3(value) {
      var newValue = formatting.formatPersonalNo(value.replace(/[^0-9]/gi, ""));
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
      if (compare.notEmpty(value_0) && !skipPersonalNumberValidateCheck) {
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
  var $ = compilerRuntime.c(51);
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
  var _useResizeDetector = reactResizeDetector.useResizeDetector(t1),
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
    t9 = !formColWithLabel && label && /*#__PURE__*/React.createElement(material.InputLabel, {
      shrink: true,
      className: "PFormItemBase-InputLabel",
      size: size,
      required: required
    }, labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
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
    t12 = autoSize ? /*#__PURE__*/React.createElement(React.Fragment, null, variant === "standard" && /*#__PURE__*/React.createElement(material.Input, {
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
    }), variant === "outlined" && /*#__PURE__*/React.createElement(material.OutlinedInput, {
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
    }), variant === "filled" && /*#__PURE__*/React.createElement(material.FilledInput, {
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
    t14 = !formColWithHelperText && helperText && /*#__PURE__*/React.createElement(material.FormHelperText, _extends({
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
    t15 = /*#__PURE__*/React.createElement(material.FormControl, {
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
  var $ = compilerRuntime.c(152);
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
  var id = React.useId();
  var theme = material.useTheme();
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
  var initCheckedRef = reactHook.useAutoUpdateRef(initChecked);
  var inputRef = React.useRef(null);
  var actionRef = React.useRef(null);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useResizeDetector = reactResizeDetector.useResizeDetector(),
    labelRef = _useResizeDetector.ref,
    width = _useResizeDetector.width,
    height = _useResizeDetector.height;
  var _useState = React.useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    _setError = _useState2[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t4;
  if ($[29] !== errorRef) {
    t4 = function t4(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[29] = errorRef;
    $[30] = t4;
  } else {
    t4 = $[30];
  }
  var setError = t4;
  var _useState3 = React.useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    _setData = _useState4[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t5;
  if ($[31] !== dataRef) {
    t5 = function t5(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[31] = dataRef;
    $[32] = t5;
  } else {
    t5 = $[32];
  }
  var setData = t5;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = React.useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = React.useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var finalInitUncheckedValue = initUncheckedValue !== null && initUncheckedValue !== void 0 ? initUncheckedValue : 0;
  var _useState9 = React.useState(finalInitUncheckedValue),
    _useState0 = _slicedToArray(_useState9, 2),
    uncheckedValue = _useState0[0],
    _setUncheckedValue = _useState0[1];
  reactHook.useChanged(finalInitUncheckedValue) && _setUncheckedValue(finalInitUncheckedValue);
  var uncheckedValueRef = reactHook.useAutoUpdateRef(uncheckedValue);
  var t6;
  if ($[33] !== uncheckedValueRef) {
    t6 = function t6(value_1) {
      _setUncheckedValue(function (prev_1) {
        var newValue_1 = typeof value_1 === "function" ? value_1(prev_1) : value_1;
        uncheckedValueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[33] = uncheckedValueRef;
    $[34] = t6;
  } else {
    t6 = $[34];
  }
  var setUncheckedValue = t6;
  var finalInitValue = initValue !== null && initValue !== void 0 ? initValue : 0;
  var _useState1 = React.useState(finalInitValue),
    _useState10 = _slicedToArray(_useState1, 2),
    value_2 = _useState10[0],
    setValue = _useState10[1];
  reactHook.useChanged(finalInitValue) && setValue(finalInitValue);
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var _useState11 = React.useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    errorHelperText = _useState12[0],
    setErrorHelperText = _useState12[1];
  var t7;
  if ($[35] !== setError) {
    t7 = function t7(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[35] = setError;
    $[36] = t7;
  } else {
    t7 = $[36];
  }
  var setErrorErrorHelperText = t7;
  var t8;
  if ($[37] !== onValidateRef || $[38] !== setErrorErrorHelperText) {
    t8 = function t8(checked) {
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
    $[37] = onValidateRef;
    $[38] = setErrorErrorHelperText;
    $[39] = t8;
  } else {
    t8 = $[39];
  }
  var validate = t8;
  var _useState13 = React.useState(initChecked),
    _useState14 = _slicedToArray(_useState13, 2),
    checked_0 = _useState14[0],
    setChecked = _useState14[1];
  reactHook.useChanged(initChecked) && setChecked(initChecked);
  var checkedRef = reactHook.useAutoUpdateRef(checked_0);
  var t9;
  if ($[40] !== checkedRef || $[41] !== error || $[42] !== name || $[43] !== onChangeRef || $[44] !== onValueChange || $[45] !== validate) {
    t9 = function t9(newChecked, t10) {
      var notFireOnChange = t10 === undefined ? false : t10;
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
    $[40] = checkedRef;
    $[41] = error;
    $[42] = name;
    $[43] = onChangeRef;
    $[44] = onValueChange;
    $[45] = validate;
    $[46] = t9;
  } else {
    t9 = $[46];
  }
  var updateChecked = t9;
  var t10;
  if ($[47] !== initAction || $[48] !== initInputRef) {
    t10 = function t10() {
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
    $[47] = initAction;
    $[48] = initInputRef;
    $[49] = t10;
  } else {
    t10 = $[49];
  }
  var focus = t10;
  var t11;
  if ($[50] !== name) {
    t11 = function t11() {
      return name;
    };
    $[50] = name;
    $[51] = t11;
  } else {
    t11 = $[51];
  }
  var t12;
  if ($[52] !== initCheckedRef) {
    t12 = function t12() {
      return initCheckedRef.current;
    };
    $[52] = initCheckedRef;
    $[53] = t12;
  } else {
    t12 = $[53];
  }
  var t13;
  if ($[54] !== initCheckedRef || $[55] !== updateChecked) {
    t13 = function t13() {
      return updateChecked(initCheckedRef.current);
    };
    $[54] = initCheckedRef;
    $[55] = updateChecked;
    $[56] = t13;
  } else {
    t13 = $[56];
  }
  var t14;
  if ($[57] !== valueRef) {
    t14 = function t14() {
      return valueRef.current;
    };
    $[57] = valueRef;
    $[58] = t14;
  } else {
    t14 = $[58];
  }
  var t15;
  if ($[59] !== dataRef) {
    t15 = function t15() {
      return dataRef.current;
    };
    $[59] = dataRef;
    $[60] = t15;
  } else {
    t15 = $[60];
  }
  var t16;
  if ($[61] !== uncheckedValueRef) {
    t16 = function t16() {
      return uncheckedValueRef.current;
    };
    $[61] = uncheckedValueRef;
    $[62] = t16;
  } else {
    t16 = $[62];
  }
  var t17;
  if ($[63] !== checkedRef) {
    t17 = function t17() {
      return checkedRef.current;
    };
    $[63] = checkedRef;
    $[64] = t17;
  } else {
    t17 = $[64];
  }
  var t18;
  if ($[65] !== exceptValue) {
    t18 = function t18() {
      return !!exceptValue;
    };
    $[65] = exceptValue;
    $[66] = t18;
  } else {
    t18 = $[66];
  }
  var t19;
  if ($[67] !== disabled) {
    t19 = function t19() {
      return !!disabled;
    };
    $[67] = disabled;
    $[68] = t19;
  } else {
    t19 = $[68];
  }
  var t20;
  if ($[69] !== hidden) {
    t20 = function t20() {
      return !!hidden;
    };
    $[69] = hidden;
    $[70] = t20;
  } else {
    t20 = $[70];
  }
  var t21;
  if ($[71] !== checkedRef || $[72] !== validate) {
    t21 = function t21() {
      return validate(checkedRef.current);
    };
    $[71] = checkedRef;
    $[72] = validate;
    $[73] = t21;
  } else {
    t21 = $[73];
  }
  var t22;
  if ($[74] !== focus || $[75] !== setData || $[76] !== setErrorErrorHelperText || $[77] !== setUncheckedValue || $[78] !== t11 || $[79] !== t12 || $[80] !== t13 || $[81] !== t14 || $[82] !== t15 || $[83] !== t16 || $[84] !== t17 || $[85] !== t18 || $[86] !== t19 || $[87] !== t20 || $[88] !== t21 || $[89] !== updateChecked) {
    t22 = {
      getType: _temp$q,
      getName: t11,
      getReset: t12,
      reset: t13,
      getValue: t14,
      setValue: setValue,
      getData: t15,
      setData: setData,
      getUncheckedValue: t16,
      setUncheckedValue: setUncheckedValue,
      getChecked: t17,
      setChecked: updateChecked,
      isExceptValue: t18,
      isDisabled: t19,
      setDisabled: setDisabled,
      isHidden: t20,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t21,
      setError: setErrorErrorHelperText
    };
    $[74] = focus;
    $[75] = setData;
    $[76] = setErrorErrorHelperText;
    $[77] = setUncheckedValue;
    $[78] = t11;
    $[79] = t12;
    $[80] = t13;
    $[81] = t14;
    $[82] = t15;
    $[83] = t16;
    $[84] = t17;
    $[85] = t18;
    $[86] = t19;
    $[87] = t20;
    $[88] = t21;
    $[89] = updateChecked;
    $[90] = t22;
  } else {
    t22 = $[90];
  }
  var commands = t22;
  var t23;
  if ($[91] !== id || $[92] !== onAddValueItem) {
    t23 = function t23(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[91] = id;
    $[92] = onAddValueItem;
    $[93] = t23;
  } else {
    t23 = $[93];
  }
  var t24;
  if ($[94] !== id || $[95] !== onRemoveValueItem) {
    t24 = function t24() {
      return onRemoveValueItem(id);
    };
    $[94] = id;
    $[95] = onRemoveValueItem;
    $[96] = t24;
  } else {
    t24 = $[96];
  }
  reactHook.useForwardRef(ref, commands, t23, t24);
  var t25;
  if ($[97] !== name || $[98] !== onRequestSearchSubmit || $[99] !== onValueChangeByUser || $[100] !== readOnly || $[101] !== updateChecked) {
    t25 = function t25(e, checked_1) {
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
    $[97] = name;
    $[98] = onRequestSearchSubmit;
    $[99] = onValueChangeByUser;
    $[100] = readOnly;
    $[101] = updateChecked;
    $[102] = t25;
  } else {
    t25 = $[102];
  }
  var handleChange = t25;
  var t26;
  if ($[103] !== className) {
    t26 = classNames(className, "PFormValueItem", "PFormCheckbox");
    $[103] = className;
    $[104] = t26;
  } else {
    t26 = $[104];
  }
  var t27 = error ? errorHelperText : helperText;
  var t28;
  if ($[105] === Symbol["for"]("react.memo_cache_sentinel")) {
    t28 = {
      style: {
        marginLeft: 2
      }
    };
    $[105] = t28;
  } else {
    t28 = $[105];
  }
  var t29 = fullWidth ? "100%" : width || 100;
  var t30;
  if ($[106] !== initStyle || $[107] !== t29) {
    t30 = _objectSpread2({
      width: t29,
      paddingLeft: 3
    }, initStyle);
    $[106] = initStyle;
    $[107] = t29;
    $[108] = t30;
  } else {
    t30 = $[108];
  }
  var t31 = height || (size === "small" ? 35 : 39);
  var t32;
  if ($[109] !== labelRef) {
    t32 = function t32(ref_0) {
      labelRef.current = ref_0;
    };
    $[109] = labelRef;
    $[110] = t32;
  } else {
    t32 = $[110];
  }
  var t33 = initInputRef ? initInputRef : inputRef;
  var t34;
  if ($[111] !== t33) {
    t34 = {
      input: {
        ref: t33
      }
    };
    $[111] = t33;
    $[112] = t34;
  } else {
    t34 = $[112];
  }
  var t35 = initAction ? initAction : actionRef;
  var t36 = error ? "error" : undefined;
  var t37;
  if ($[113] !== t36) {
    t37 = /*#__PURE__*/React.createElement(iconsMaterial.CheckBox, {
      color: t36
    });
    $[113] = t36;
    $[114] = t37;
  } else {
    t37 = $[114];
  }
  var t38 = error ? "error" : undefined;
  var t39;
  if ($[115] !== t38) {
    t39 = /*#__PURE__*/React.createElement(iconsMaterial.CheckBoxOutlineBlank, {
      color: t38
    });
    $[115] = t38;
    $[116] = t39;
  } else {
    t39 = $[116];
  }
  var t40 = disabled || readOnly;
  var t41;
  if ($[117] !== checked_0 || $[118] !== color || $[119] !== handleChange || $[120] !== name || $[121] !== props || $[122] !== size || $[123] !== t34 || $[124] !== t35 || $[125] !== t37 || $[126] !== t39 || $[127] !== t40) {
    t41 = /*#__PURE__*/React.createElement(material.Checkbox, _extends({
      name: name,
      color: color,
      size: size,
      slotProps: t34,
      action: t35,
      checked: checked_0,
      checkedIcon: t37,
      icon: t39,
      onChange: handleChange,
      disabled: t40
    }, props));
    $[117] = checked_0;
    $[118] = color;
    $[119] = handleChange;
    $[120] = name;
    $[121] = props;
    $[122] = size;
    $[123] = t34;
    $[124] = t35;
    $[125] = t37;
    $[126] = t39;
    $[127] = t40;
    $[128] = t41;
  } else {
    t41 = $[128];
  }
  var t42 = error ? "error" : readOnly || disabled ? theme.palette.text.disabled : undefined;
  var t43;
  if ($[129] !== t42 || $[130] !== text) {
    t43 = /*#__PURE__*/React.createElement(material.Typography, {
      color: t42,
      whiteSpace: "nowrap"
    }, text);
    $[129] = t42;
    $[130] = text;
    $[131] = t43;
  } else {
    t43 = $[131];
  }
  var t44;
  if ($[132] !== t32 || $[133] !== t41 || $[134] !== t43) {
    t44 = /*#__PURE__*/React.createElement(material.FormControlLabel, {
      ref: t32,
      control: t41,
      label: t43
    });
    $[132] = t32;
    $[133] = t41;
    $[134] = t43;
    $[135] = t44;
  } else {
    t44 = $[135];
  }
  var t45;
  if ($[136] !== color || $[137] !== error || $[138] !== focused || $[139] !== fullWidth || $[140] !== hidden || $[141] !== label || $[142] !== labelIcon || $[143] !== size || $[144] !== sx || $[145] !== t26 || $[146] !== t27 || $[147] !== t30 || $[148] !== t31 || $[149] !== t44 || $[150] !== variant) {
    t45 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t26,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: fullWidth,
      helperText: t27,
      helperTextProps: t28,
      style: t30,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t31,
      controlVerticalCenter: true,
      control: t44
    });
    $[136] = color;
    $[137] = error;
    $[138] = focused;
    $[139] = fullWidth;
    $[140] = hidden;
    $[141] = label;
    $[142] = labelIcon;
    $[143] = size;
    $[144] = sx;
    $[145] = t26;
    $[146] = t27;
    $[147] = t30;
    $[148] = t31;
    $[149] = t44;
    $[150] = variant;
    $[151] = t45;
  } else {
    t45 = $[151];
  }
  return t45;
};
function _temp$q() {
  return "PFormCheckbox";
}var _excluded$g = ["ref", "variant", "size", "color", "focused", "fullWidth", "hidden", "startAdornment", "endAdornment", "name", "width", "labelIcon", "label", "inline", "loading", "nowrap", "items", "value", "data", "error", "helperText", "disabled", "readOnly", "required", "exceptValue", "onLoadItems", "onChange", "onValue", "onValidate", "className", "style", "sx"];
var PADDING_LEFT = 3;
function PFormRadioGroup(t0) {
  var $ = compilerRuntime.c(250);
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
  var id = React.useId();
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
  var theme = material.useTheme();
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var baseRef = React.useRef(null);
  var firstInputRef = React.useRef(null);
  var onLoadItemsRef = reactHook.useAutoUpdateRef(onLoadItems);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(!!onLoadItems),
    _useState4 = _slicedToArray(_useState3, 2),
    isOnGetItemLoading = _useState4[0],
    setIsOnGetItemLoading = _useState4[1];
  var _useState5 = React.useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    formColWrapRect = _useState6[0],
    setFormColWrapRect = _useState6[1];
  var _useState7 = React.useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    radioGroupNoWrapRect = _useState8[0],
    setRadioGroupNoWrapRect = _useState8[1];
  var finalInitFullWidth = initFullWidth !== null && initFullWidth !== void 0 ? initFullWidth : formFullWidth;
  var _useState9 = React.useState(finalInitFullWidth),
    _useState0 = _slicedToArray(_useState9, 2),
    fullWidth = _useState0[0],
    setFullWidth = _useState0[1];
  reactHook.useChanged(finalInitFullWidth) && setFullWidth(finalInitFullWidth);
  var _useState1 = React.useState(initError),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    _setError = _useState10[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t2;
  if ($[34] !== errorRef) {
    t2 = function t2(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[34] = errorRef;
    $[35] = t2;
  } else {
    t2 = $[35];
  }
  var setError = t2;
  var _useState11 = React.useState(initData),
    _useState12 = _slicedToArray(_useState11, 2),
    data = _useState12[0],
    _setData = _useState12[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t3;
  if ($[36] !== dataRef) {
    t3 = function t3(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[36] = dataRef;
    $[37] = t3;
  } else {
    t3 = $[37];
  }
  var setData = t3;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState13 = React.useState(finalInitDisabled),
    _useState14 = _slicedToArray(_useState13, 2),
    disabled = _useState14[0],
    setDisabled = _useState14[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState15 = React.useState(initHidden),
    _useState16 = _slicedToArray(_useState15, 2),
    hidden = _useState16[0],
    setHidden = _useState16[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var finalInitWidth = initWidth || "100%";
  var _useState17 = React.useState(finalInitWidth),
    _useState18 = _slicedToArray(_useState17, 2),
    width = _useState18[0],
    setWidth = _useState18[1];
  reactHook.useChanged(finalInitWidth) && setWidth(finalInitWidth);
  var _useState19 = React.useState(initLoading),
    _useState20 = _slicedToArray(_useState19, 2),
    loading = _useState20[0],
    _setLoading = _useState20[1];
  reactHook.useChanged(initLoading) && _setLoading(initLoading);
  var loadingRef = reactHook.useAutoUpdateRef(loading);
  var t4;
  if ($[38] !== loadingRef) {
    t4 = function t4(value_1) {
      _setLoading(function (prev_1) {
        var newValue_1 = typeof value_1 === "function" ? value_1(prev_1) : value_1;
        loadingRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[38] = loadingRef;
    $[39] = t4;
  } else {
    t4 = $[39];
  }
  var setLoading = t4;
  var _useState21 = React.useState(initItems),
    _useState22 = _slicedToArray(_useState21, 2),
    items = _useState22[0],
    _setItems = _useState22[1];
  reactHook.useChanged(initItems) && _setItems(initItems);
  var itemsRef = reactHook.useAutoUpdateRef(items);
  var t5;
  if ($[40] !== itemsRef) {
    t5 = function t5(value_2) {
      _setItems(function (prev_2) {
        var newValue_2 = typeof value_2 === "function" ? value_2(prev_2) : value_2;
        itemsRef.current = newValue_2;
        return newValue_2;
      });
    };
    $[40] = itemsRef;
    $[41] = t5;
  } else {
    t5 = $[41];
  }
  var setItems = t5;
  var _useResizeDetector = reactResizeDetector.useResizeDetector({
      handleWidth: true,
      handleHeight: false,
      onResize: function onResize() {
        var _resizeWidthDetectorR;
        setRadioGroupNoWrapRect((_resizeWidthDetectorR = resizeWidthDetectorRef.current) === null || _resizeWidthDetectorR === void 0 ? void 0 : _resizeWidthDetectorR.getBoundingClientRect());
      }
    }),
    t6 = _useResizeDetector.ref;
  var resizeWidthDetectorRef = t6;
  var _useResizeDetector2 = reactResizeDetector.useResizeDetector(),
    height = _useResizeDetector2.height,
    resizeHeightDetectorRef = _useResizeDetector2.ref;
  var _useResizeDetector3 = reactResizeDetector.useResizeDetector(),
    realHeight = _useResizeDetector3.height,
    resizeRealHeightDetectorRef = _useResizeDetector3.ref;
  var t7;
  if ($[42] !== setError) {
    t7 = function t7(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[42] = setError;
    $[43] = t7;
  } else {
    t7 = $[43];
  }
  var setErrorErrorHelperText = t7;
  var t8;
  if ($[44] !== onValidateRef || $[45] !== required || $[46] !== setErrorErrorHelperText) {
    t8 = function t8(value_3) {
      if (required && compare.empty(value_3)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_3);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[44] = onValidateRef;
    $[45] = required;
    $[46] = setErrorErrorHelperText;
    $[47] = t8;
  } else {
    t8 = $[47];
  }
  var validate = t8;
  var t9;
  if ($[48] !== onValue) {
    t9 = function t9(value_4) {
      return onValue ? onValue(value_4) : value_4;
    };
    $[48] = onValue;
    $[49] = t9;
  } else {
    t9 = $[49];
  }
  var getFinalValue = t9;
  var getFinalValueRef = reactHook.useAutoUpdateRef(getFinalValue);
  var t10;
  if ($[50] !== getFinalValue || $[51] !== initValue) {
    t10 = getFinalValue(initValue);
    $[50] = getFinalValue;
    $[51] = initValue;
    $[52] = t10;
  } else {
    t10 = $[52];
  }
  var _useState23 = React.useState(t10),
    _useState24 = _slicedToArray(_useState23, 2),
    value_5 = _useState24[0],
    _setValue = _useState24[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_5);
  var t11;
  if ($[53] !== valueRef) {
    t11 = function t11(value_6) {
      _setValue(function (prev_3) {
        var newValue_3 = typeof value_6 === "function" ? value_6(prev_3) : value_6;
        valueRef.current = newValue_3;
        return newValue_3;
      });
    };
    $[53] = valueRef;
    $[54] = t11;
  } else {
    t11 = $[54];
  }
  var setValue = t11;
  var t12;
  if ($[55] !== error || $[56] !== getFinalValueRef || $[57] !== name || $[58] !== onChangeRef || $[59] !== onValueChange || $[60] !== setValue || $[61] !== validate) {
    t12 = function t12(newValue_4, t13) {
      var _onChangeRef$current;
      var skipGetFinalValue = t13 === undefined ? false : t13;
      var finalValue = skipGetFinalValue ? newValue_4 : getFinalValueRef.current(newValue_4);
      setValue(finalValue);
      if (error) {
        validate(finalValue);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue);
      onValueChange(name, finalValue);
      return finalValue;
    };
    $[55] = error;
    $[56] = getFinalValueRef;
    $[57] = name;
    $[58] = onChangeRef;
    $[59] = onValueChange;
    $[60] = setValue;
    $[61] = validate;
    $[62] = t12;
  } else {
    t12 = $[62];
  }
  var updateValue = t12;
  var t13;
  if ($[63] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = function t13() {
      var _firstInputRef$curren;
      (_firstInputRef$curren = firstInputRef.current) === null || _firstInputRef$curren === void 0 || _firstInputRef$curren.focus();
    };
    $[63] = t13;
  } else {
    t13 = $[63];
  }
  var focus = t13;
  var t14;
  if ($[64] !== onLoadItemsRef || $[65] !== setItems) {
    t14 = function t14() {
      if (onLoadItemsRef.current) {
        onLoadItemsRef.current().then(function (items_0) {
          setItems(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[64] = onLoadItemsRef;
    $[65] = setItems;
    $[66] = t14;
  } else {
    t14 = $[66];
  }
  var effectEvent = React.useEffectEvent(t14);
  var t15;
  if ($[67] !== effectEvent) {
    t15 = function t15() {
      return effectEvent();
    };
    $[67] = effectEvent;
    $[68] = t15;
  } else {
    t15 = $[68];
  }
  var t16;
  if ($[69] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = [];
    $[69] = t16;
  } else {
    t16 = $[69];
  }
  React.useEffect(t15, t16);
  var t17;
  if ($[70] !== fullWidth || $[71] !== initWidth || $[72] !== resizeWidthDetectorRef) {
    t17 = function t17() {
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
    $[70] = fullWidth;
    $[71] = initWidth;
    $[72] = resizeWidthDetectorRef;
    $[73] = t17;
  } else {
    t17 = $[73];
  }
  var effectEvent_0 = React.useEffectEvent(t17);
  var t18;
  if ($[74] !== effectEvent_0) {
    t18 = function t18() {
      return effectEvent_0();
    };
    $[74] = effectEvent_0;
    $[75] = t18;
  } else {
    t18 = $[75];
  }
  var t19;
  if ($[76] !== fullWidth || $[77] !== initWidth) {
    t19 = [fullWidth, initWidth];
    $[76] = fullWidth;
    $[77] = initWidth;
    $[78] = t19;
  } else {
    t19 = $[78];
  }
  React.useEffect(t18, t19);
  var t20;
  if ($[79] !== formColWrapRect || $[80] !== formFullWidth || $[81] !== initFullWidth || $[82] !== initWidth || $[83] !== radioGroupNoWrapRect) {
    t20 = function t20() {
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
    $[79] = formColWrapRect;
    $[80] = formFullWidth;
    $[81] = initFullWidth;
    $[82] = initWidth;
    $[83] = radioGroupNoWrapRect;
    $[84] = t20;
  } else {
    t20 = $[84];
  }
  var effectEvent_1 = React.useEffectEvent(t20);
  var firstSkip = React.useRef(true);
  var t21;
  if ($[85] !== effectEvent_1) {
    t21 = function t21() {
      if (firstSkip.current) {
        firstSkip.current = false;
      } else {
        effectEvent_1();
      }
    };
    $[85] = effectEvent_1;
    $[86] = t21;
  } else {
    t21 = $[86];
  }
  var t22;
  if ($[87] !== formColWrapRect || $[88] !== formFullWidth || $[89] !== initFullWidth || $[90] !== initWidth || $[91] !== radioGroupNoWrapRect) {
    t22 = [initWidth, formFullWidth, initFullWidth, formColWrapRect, radioGroupNoWrapRect];
    $[87] = formColWrapRect;
    $[88] = formFullWidth;
    $[89] = initFullWidth;
    $[90] = initWidth;
    $[91] = radioGroupNoWrapRect;
    $[92] = t22;
  } else {
    t22 = $[92];
  }
  React.useEffect(t21, t22);
  var t23;
  if ($[93] !== name) {
    t23 = function t23() {
      return name;
    };
    $[93] = name;
    $[94] = t23;
  } else {
    t23 = $[94];
  }
  var t24;
  if ($[95] !== getFinalValueRef || $[96] !== initValueRef) {
    t24 = function t24() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[95] = getFinalValueRef;
    $[96] = initValueRef;
    $[97] = t24;
  } else {
    t24 = $[97];
  }
  var t25;
  if ($[98] !== initValueRef || $[99] !== updateValue) {
    t25 = function t25() {
      return updateValue(initValueRef.current);
    };
    $[98] = initValueRef;
    $[99] = updateValue;
    $[100] = t25;
  } else {
    t25 = $[100];
  }
  var t26;
  if ($[101] !== valueRef) {
    t26 = function t26() {
      return valueRef.current;
    };
    $[101] = valueRef;
    $[102] = t26;
  } else {
    t26 = $[102];
  }
  var t27;
  if ($[103] !== dataRef) {
    t27 = function t27() {
      return dataRef.current;
    };
    $[103] = dataRef;
    $[104] = t27;
  } else {
    t27 = $[104];
  }
  var t28;
  if ($[105] !== exceptValue) {
    t28 = function t28() {
      return !!exceptValue;
    };
    $[105] = exceptValue;
    $[106] = t28;
  } else {
    t28 = $[106];
  }
  var t29;
  if ($[107] !== disabled) {
    t29 = function t29() {
      return !!disabled;
    };
    $[107] = disabled;
    $[108] = t29;
  } else {
    t29 = $[108];
  }
  var t30;
  if ($[109] !== hidden) {
    t30 = function t30() {
      return !!hidden;
    };
    $[109] = hidden;
    $[110] = t30;
  } else {
    t30 = $[110];
  }
  var t31;
  if ($[111] !== validate || $[112] !== valueRef) {
    t31 = function t31() {
      return validate(valueRef.current);
    };
    $[111] = validate;
    $[112] = valueRef;
    $[113] = t31;
  } else {
    t31 = $[113];
  }
  var t32;
  if ($[114] !== itemsRef) {
    t32 = function t32() {
      return itemsRef.current;
    };
    $[114] = itemsRef;
    $[115] = t32;
  } else {
    t32 = $[115];
  }
  var t33;
  if ($[116] !== setItems) {
    t33 = function t33(v) {
      return setItems(v);
    };
    $[116] = setItems;
    $[117] = t33;
  } else {
    t33 = $[117];
  }
  var t34;
  if ($[118] !== loadingRef) {
    t34 = function t34() {
      return !!loadingRef.current;
    };
    $[118] = loadingRef;
    $[119] = t34;
  } else {
    t34 = $[119];
  }
  var t35;
  if ($[120] !== onLoadItemsRef || $[121] !== setItems) {
    t35 = function t35() {
      if (onLoadItemsRef.current) {
        setIsOnGetItemLoading(true);
        onLoadItemsRef.current().then(function (items_1) {
          setItems(items_1);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[120] = onLoadItemsRef;
    $[121] = setItems;
    $[122] = t35;
  } else {
    t35 = $[122];
  }
  var t36;
  if ($[123] !== setData || $[124] !== setErrorErrorHelperText || $[125] !== setLoading || $[126] !== t23 || $[127] !== t24 || $[128] !== t25 || $[129] !== t26 || $[130] !== t27 || $[131] !== t28 || $[132] !== t29 || $[133] !== t30 || $[134] !== t31 || $[135] !== t32 || $[136] !== t33 || $[137] !== t34 || $[138] !== t35 || $[139] !== updateValue) {
    t36 = {
      getType: _temp$p,
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
      setError: setErrorErrorHelperText,
      getItems: t32,
      setItems: t33,
      getLoading: t34,
      setLoading: setLoading,
      reloadItems: t35
    };
    $[123] = setData;
    $[124] = setErrorErrorHelperText;
    $[125] = setLoading;
    $[126] = t23;
    $[127] = t24;
    $[128] = t25;
    $[129] = t26;
    $[130] = t27;
    $[131] = t28;
    $[132] = t29;
    $[133] = t30;
    $[134] = t31;
    $[135] = t32;
    $[136] = t33;
    $[137] = t34;
    $[138] = t35;
    $[139] = updateValue;
    $[140] = t36;
  } else {
    t36 = $[140];
  }
  var commands = t36;
  var t37;
  if ($[141] !== id || $[142] !== onAddValueItem) {
    t37 = function t37(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[141] = id;
    $[142] = onAddValueItem;
    $[143] = t37;
  } else {
    t37 = $[143];
  }
  var t38;
  if ($[144] !== id || $[145] !== onRemoveValueItem) {
    t38 = function t38() {
      return onRemoveValueItem(id);
    };
    $[144] = id;
    $[145] = onRemoveValueItem;
    $[146] = t38;
  } else {
    t38 = $[146];
  }
  reactHook.useForwardRef(ref, commands, t37, t38);
  var t39;
  if ($[147] !== getFinalValueRef || $[148] !== items || $[149] !== name || $[150] !== onRequestSearchSubmit || $[151] !== onValueChangeByUser || $[152] !== readOnly || $[153] !== updateValue || $[154] !== valueRef) {
    t39 = function t39(e) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_0 = e.target.value;
        if (items) {
          var item = items.find(function (t40) {
            var value_7 = t40.value;
            return value_7.toString() === finalValue_0;
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
    $[147] = getFinalValueRef;
    $[148] = items;
    $[149] = name;
    $[150] = onRequestSearchSubmit;
    $[151] = onValueChangeByUser;
    $[152] = readOnly;
    $[153] = updateValue;
    $[154] = valueRef;
    $[155] = t39;
  } else {
    t39 = $[155];
  }
  var handleChange = t39;
  var t40;
  if ($[156] !== color || $[157] !== disabled || $[158] !== error || $[159] !== items || $[160] !== readOnly || $[161] !== resizeHeightDetectorRef || $[162] !== size || $[163] !== theme.palette.error.main) {
    t40 = items === null || items === void 0 ? void 0 : items.map(function (t41, idx) {
      var value_8 = t41.value,
        label_0 = t41.label,
        itemDisabled = t41.disabled;
      return /*#__PURE__*/React.createElement(material.FormControlLabel, {
        ref: idx === 0 ? function (ref_0) {
          resizeHeightDetectorRef.current = ref_0;
        } : null,
        key: idx,
        control: /*#__PURE__*/React.createElement(material.Radio, {
          icon: /*#__PURE__*/React.createElement(iconsMaterial.RadioButtonUnchecked, {
            color: error ? "error" : undefined
          }),
          checkedIcon: /*#__PURE__*/React.createElement(iconsMaterial.RadioButtonChecked, {
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
        value: value_8,
        disabled: disabled || readOnly || itemDisabled
      });
    });
    $[156] = color;
    $[157] = disabled;
    $[158] = error;
    $[159] = items;
    $[160] = readOnly;
    $[161] = resizeHeightDetectorRef;
    $[162] = size;
    $[163] = theme.palette.error.main;
    $[164] = t40;
  } else {
    t40 = $[164];
  }
  var hiddenItemsControl = t40;
  var t41;
  if ($[165] !== color || $[166] !== disabled || $[167] !== error || $[168] !== items || $[169] !== readOnly || $[170] !== size || $[171] !== theme.palette.error.main) {
    t41 = items === null || items === void 0 ? void 0 : items.map(function (t42, idx_0) {
      var value_9 = t42.value,
        label_1 = t42.label,
        itemDisabled_0 = t42.disabled;
      return /*#__PURE__*/React.createElement(material.FormControlLabel, {
        key: idx_0,
        control: /*#__PURE__*/React.createElement(material.Radio, {
          icon: /*#__PURE__*/React.createElement(iconsMaterial.RadioButtonUnchecked, {
            color: error ? "error" : undefined
          }),
          checkedIcon: /*#__PURE__*/React.createElement(iconsMaterial.RadioButtonChecked, {
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
        value: value_9,
        disabled: disabled || readOnly || itemDisabled_0
      });
    });
    $[165] = color;
    $[166] = disabled;
    $[167] = error;
    $[168] = items;
    $[169] = readOnly;
    $[170] = size;
    $[171] = theme.palette.error.main;
    $[172] = t41;
  } else {
    t41 = $[172];
  }
  var itemsControl = t41;
  var t42 = fullWidth ? "100%" : undefined;
  var t43;
  if ($[173] !== t42) {
    t43 = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: t42
    };
    $[173] = t42;
    $[174] = t43;
  } else {
    t43 = $[174];
  }
  var t44;
  if ($[175] !== startAdornment) {
    t44 = startAdornment && /*#__PURE__*/React.createElement("div", null, startAdornment);
    $[175] = startAdornment;
    $[176] = t44;
  } else {
    t44 = $[176];
  }
  var t45;
  if ($[177] === Symbol["for"]("react.memo_cache_sentinel")) {
    t45 = {
      flex: 1
    };
    $[177] = t45;
  } else {
    t45 = $[177];
  }
  var t46;
  if ($[178] !== fullWidth || $[179] !== handleChange || $[180] !== hiddenItemsControl || $[181] !== inline || $[182] !== isOnGetItemLoading || $[183] !== items || $[184] !== loading || $[185] !== name || $[186] !== props || $[187] !== resizeWidthDetectorRef || $[188] !== value_5) {
    t46 = !fullWidth && !isOnGetItemLoading && !loading && items && /*#__PURE__*/React.createElement("div", {
      ref: resizeWidthDetectorRef,
      style: {
        display: "grid",
        position: "absolute",
        whiteSpace: "nowrap",
        visibility: "hidden"
      }
    }, /*#__PURE__*/React.createElement(material.RadioGroup, _extends({}, props, {
      style: {
        display: "inline-flex",
        flexWrap: "nowrap"
      },
      name: name,
      row: inline,
      value: value_5 === undefined ? null : value_5,
      onChange: handleChange
    }), hiddenItemsControl));
    $[178] = fullWidth;
    $[179] = handleChange;
    $[180] = hiddenItemsControl;
    $[181] = inline;
    $[182] = isOnGetItemLoading;
    $[183] = items;
    $[184] = loading;
    $[185] = name;
    $[186] = props;
    $[187] = resizeWidthDetectorRef;
    $[188] = value_5;
    $[189] = t46;
  } else {
    t46 = $[189];
  }
  var t47;
  if ($[190] !== resizeRealHeightDetectorRef) {
    t47 = function t47(ref_1) {
      resizeRealHeightDetectorRef.current = ref_1;
    };
    $[190] = resizeRealHeightDetectorRef;
    $[191] = t47;
  } else {
    t47 = $[191];
  }
  var t48 = width == null ? "hidden" : undefined;
  var t49 = width == null ? "absolute" : undefined;
  var t50 = nowrap ? "nowrap" : undefined;
  var t51;
  if ($[192] !== t48 || $[193] !== t49 || $[194] !== t50) {
    t51 = {
      display: "inline-flex",
      visibility: t48,
      position: t49,
      flexWrap: t50
    };
    $[192] = t48;
    $[193] = t49;
    $[194] = t50;
    $[195] = t51;
  } else {
    t51 = $[195];
  }
  var t52 = value_5 === undefined ? null : value_5;
  var t53;
  if ($[196] !== color || $[197] !== isOnGetItemLoading || $[198] !== itemsControl || $[199] !== loading || $[200] !== size) {
    t53 = isOnGetItemLoading || loading ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(material.FormControlLabel, {
      label: "",
      control: /*#__PURE__*/React.createElement(material.Radio, {
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
    }, /*#__PURE__*/React.createElement(material.CircularProgress, {
      size: size === "small" ? 12 : 16,
      color: "inherit"
    }))) : itemsControl;
    $[196] = color;
    $[197] = isOnGetItemLoading;
    $[198] = itemsControl;
    $[199] = loading;
    $[200] = size;
    $[201] = t53;
  } else {
    t53 = $[201];
  }
  var t54;
  if ($[202] !== handleChange || $[203] !== inline || $[204] !== name || $[205] !== props || $[206] !== t47 || $[207] !== t51 || $[208] !== t52 || $[209] !== t53) {
    t54 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(material.RadioGroup, _extends({}, props, {
      ref: t47,
      style: t51,
      name: name,
      row: inline,
      value: t52,
      onChange: handleChange
    }), t53));
    $[202] = handleChange;
    $[203] = inline;
    $[204] = name;
    $[205] = props;
    $[206] = t47;
    $[207] = t51;
    $[208] = t52;
    $[209] = t53;
    $[210] = t54;
  } else {
    t54 = $[210];
  }
  var t55;
  if ($[211] !== t46 || $[212] !== t54) {
    t55 = /*#__PURE__*/React.createElement("div", {
      style: t45
    }, t46, t54);
    $[211] = t46;
    $[212] = t54;
    $[213] = t55;
  } else {
    t55 = $[213];
  }
  var t56;
  if ($[214] !== endAdornment) {
    t56 = endAdornment && /*#__PURE__*/React.createElement("div", null, endAdornment);
    $[214] = endAdornment;
    $[215] = t56;
  } else {
    t56 = $[215];
  }
  var t57;
  if ($[216] !== t43 || $[217] !== t44 || $[218] !== t55 || $[219] !== t56) {
    t57 = /*#__PURE__*/React.createElement("div", {
      style: t43
    }, t44, t55, t56);
    $[216] = t43;
    $[217] = t44;
    $[218] = t55;
    $[219] = t56;
    $[220] = t57;
  } else {
    t57 = $[220];
  }
  var control = t57;
  var singleHeight = height || (size === "small" ? 35 : 39);
  var isMultiline = singleHeight <= (realHeight !== null && realHeight !== void 0 ? realHeight : 0);
  var t58;
  if ($[221] !== className) {
    t58 = classNames(className, "PFormValueItem", "PFormRadioGroup");
    $[221] = className;
    $[222] = t58;
  } else {
    t58 = $[222];
  }
  var t59 = error ? errorHelperText : helperText;
  var t60 = isMultiline && compare.notEmpty(label) ? 20 : 0;
  var t61;
  if ($[223] !== t60) {
    t61 = {
      style: {
        marginLeft: 2,
        marginTop: t60
      }
    };
    $[223] = t60;
    $[224] = t61;
  } else {
    t61 = $[224];
  }
  var t62;
  if ($[225] !== initStyle || $[226] !== width) {
    t62 = _objectSpread2({
      width: width,
      paddingLeft: PADDING_LEFT
    }, initStyle);
    $[225] = initStyle;
    $[226] = width;
    $[227] = t62;
  } else {
    t62 = $[227];
  }
  var t63 = realHeight ? realHeight : singleHeight;
  var t64 = isMultiline && size === "medium" ? 4 : undefined;
  var t65;
  if ($[228] !== t64) {
    t65 = {
      paddingTop: t64
    };
    $[228] = t64;
    $[229] = t65;
  } else {
    t65 = $[229];
  }
  var t66 = !isMultiline;
  var t67;
  if ($[230] !== color || $[231] !== control || $[232] !== error || $[233] !== focused || $[234] !== fullWidth || $[235] !== hidden || $[236] !== label || $[237] !== labelIcon || $[238] !== required || $[239] !== size || $[240] !== sx || $[241] !== t58 || $[242] !== t59 || $[243] !== t61 || $[244] !== t62 || $[245] !== t63 || $[246] !== t65 || $[247] !== t66 || $[248] !== variant) {
    t67 = /*#__PURE__*/React.createElement(PFormItemBase, {
      focused: focused,
      ref: baseRef,
      className: t58,
      variant: variant,
      size: size,
      color: color,
      labelIcon: labelIcon,
      label: label,
      fullWidth: fullWidth,
      required: required,
      error: error,
      helperText: t59,
      helperTextProps: t61,
      style: t62,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t63,
      controlContainerStyle: t65,
      controlVerticalCenter: t66,
      control: control
    });
    $[230] = color;
    $[231] = control;
    $[232] = error;
    $[233] = focused;
    $[234] = fullWidth;
    $[235] = hidden;
    $[236] = label;
    $[237] = labelIcon;
    $[238] = required;
    $[239] = size;
    $[240] = sx;
    $[241] = t58;
    $[242] = t59;
    $[243] = t61;
    $[244] = t62;
    $[245] = t63;
    $[246] = t65;
    $[247] = t66;
    $[248] = variant;
    $[249] = t67;
  } else {
    t67 = $[249];
  }
  return t67;
}
function _temp$p() {
  return "PFormRadioGroup";
}insertStyle(".PFormToggleButtonGroup.loading .PFormItemBase-Control-wrap .PFormItemBase-Control{align-items:center !important}.PFormToggleButtonGroup .ToggleButton{display:inline-flex;padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;align-items:center}.PFormToggleButtonGroup .ToggleButton .__label__{height:0;line-height:0 !important;overflow:visible !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton,.PFormToggleButtonGroup.type-radio .ToggleButton{padding-left:3px;padding-right:5px;border:0 !important;margin-left:0 !important;justify-content:flex-start;display:flex;background-color:rgba(0,0,0,0) !important}.PFormToggleButtonGroup.type-checkbox .ToggleButton:not(:last-child),.PFormToggleButtonGroup.type-radio .ToggleButton:not(:last-child){margin-right:5px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-unchecked__{margin-right:3px}.PFormToggleButtonGroup.type-checkbox .ToggleButton .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton .__checkbox-checked__{display:none}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected.Mui-disabled,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected.Mui-disabled{opacity:.5}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-checked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-checked__{display:block}.PFormToggleButtonGroup.type-checkbox .ToggleButton.Mui-selected .__checkbox-unchecked__,.PFormToggleButtonGroup.type-radio .ToggleButton.Mui-selected .__checkbox-unchecked__{display:none}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap{margin-top:15px;margin-bottom:-15px}.PFormToggleButtonGroup:not(.with-label).variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:13px;margin-bottom:-13px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0px;margin-bottom:0px}.PFormToggleButtonGroup:not(.with-label).size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PFormToggleButtonGroup.with-label.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:37px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:28px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-outlined .PFormItemBase-Control-wrap .ToggleButton{height:24px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-filled .PFormItemBase-Control-wrap .ToggleButton{height:31px}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap{margin-top:0;margin-bottom:0}.PForm .PFormCol.with-label .PFormToggleButtonGroup.size-small.variant-standard .PFormItemBase-Control-wrap .ToggleButton{height:26px}");function PFormToggleButtonGroup(t0) {
  var $ = compilerRuntime.c(218);
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
  var id = React.useId();
  var labelId = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var onLoadItemsRef = reactHook.useAutoUpdateRef(onLoadItems);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(initFocused !== null && initFocused !== void 0 ? initFocused : formFocused),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  if ((initFocused !== null && initFocused !== void 0 ? initFocused : formFocused) !== focused) {
    setFocused(initFocused !== null && initFocused !== void 0 ? initFocused : formFocused);
  }
  var theme = material.useTheme();
  var t3;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = {
      handleHeight: false
    };
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  var _useResizeDetector = reactResizeDetector.useResizeDetector(t3),
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
  var _useResizeDetector2 = reactResizeDetector.useResizeDetector(t4),
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
  var _useResizeDetector3 = reactResizeDetector.useResizeDetector(t5),
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
  var _useResizeDetector4 = reactResizeDetector.useResizeDetector(t6),
    refForLoadingResizeHeightDetect = _useResizeDetector4.ref,
    loadingHeight = _useResizeDetector4.height;
  var height = buttonHeight !== null && buttonHeight !== void 0 ? buttonHeight : loadingHeight;
  var _useState3 = React.useState(!!onLoadItems),
    _useState4 = _slicedToArray(_useState3, 2),
    isOnGetItemLoading = _useState4[0],
    setIsOnGetItemLoading = _useState4[1];
  var _useState5 = React.useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    errorHelperText = _useState6[0],
    setErrorHelperText = _useState6[1];
  var _useState7 = React.useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t7;
  if ($[4] !== errorRef) {
    t7 = function t7(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[4] = errorRef;
    $[5] = t7;
  } else {
    t7 = $[5];
  }
  var setError = t7;
  var _useState9 = React.useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t8;
  if ($[6] !== dataRef) {
    t8 = function t8(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[6] = dataRef;
    $[7] = t8;
  } else {
    t8 = $[7];
  }
  var setData = t8;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = React.useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState11 = React.useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var _useState13 = React.useState(initLoading),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    _setLoading = _useState14[1];
  reactHook.useChanged(initLoading) && _setLoading(initLoading);
  var loadingRef = reactHook.useAutoUpdateRef(loading);
  var t9;
  if ($[8] !== loadingRef) {
    t9 = function t9(value_1) {
      _setLoading(function (prev_1) {
        var newValue_1 = typeof value_1 === "function" ? value_1(prev_1) : value_1;
        loadingRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[8] = loadingRef;
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  var setLoading = t9;
  var _useState15 = React.useState(initItems),
    _useState16 = _slicedToArray(_useState15, 2),
    items = _useState16[0],
    _setItems = _useState16[1];
  reactHook.useChanged(initItems) && _setItems(initItems);
  var itemsRef = reactHook.useAutoUpdateRef(items);
  var t10;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(newItems) {
      _setItems(newItems);
    };
    $[10] = t10;
  } else {
    t10 = $[10];
  }
  var setItems = t10;
  var t11;
  if (items) {
    var _t;
    if ($[11] !== items) {
      _t = items.reduce(_temp$o, {});
      $[11] = items;
      $[12] = _t;
    } else {
      _t = $[12];
    }
    t11 = _t;
  } else {
    var _t2;
    if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t2 = {};
      $[13] = _t2;
    } else {
      _t2 = $[13];
    }
    t11 = _t2;
  }
  var itemsValues = t11;
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
  var t12;
  if ($[14] !== finalWidth || $[15] !== initStyle) {
    t12 = _objectSpread2({
      width: finalWidth
    }, initStyle);
    $[14] = finalWidth;
    $[15] = initStyle;
    $[16] = t12;
  } else {
    t12 = $[16];
  }
  var style = t12;
  var t13;
  if ($[17] !== setError) {
    t13 = function t13(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[17] = setError;
    $[18] = t13;
  } else {
    t13 = $[18];
  }
  var setErrorErrorHelperText = t13;
  var t14;
  if ($[19] !== onValidateRef || $[20] !== required || $[21] !== setErrorErrorHelperText) {
    t14 = function t14(value_3) {
      if (required && compare.empty(value_3)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_3);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[19] = onValidateRef;
    $[20] = required;
    $[21] = setErrorErrorHelperText;
    $[22] = t14;
  } else {
    t14 = $[22];
  }
  var validate = t14;
  var t15;
  if ($[23] !== refForButtonResizeHeightDetect) {
    t15 = function t15() {
      var _refForButtonResizeHe;
      (_refForButtonResizeHe = refForButtonResizeHeightDetect.current) === null || _refForButtonResizeHe === void 0 || _refForButtonResizeHe.focus();
    };
    $[23] = refForButtonResizeHeightDetect;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  var focus = t15;
  var t16;
  if ($[25] !== formValueSeparator || $[26] !== itemsValues || $[27] !== multiple || $[28] !== onValue) {
    t16 = function t16(value_4) {
      var finalValue = value_4;
      if (multiple) {
        if (!Array.isArray(finalValue)) {
          if (finalValue != null && compare.notEmpty(finalValue)) {
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
          if (compare.notEmpty(finalValue)) {
            finalValue = finalValue[0];
          } else {
            finalValue = undefined;
          }
        }
      }
      if (compare.notEmpty(itemsValues)) {
        if (finalValue != null && compare.notEmpty(finalValue)) {
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
      return compare.equal(value_4, finalValue) ? value_4 : finalValue;
    };
    $[25] = formValueSeparator;
    $[26] = itemsValues;
    $[27] = multiple;
    $[28] = onValue;
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  var getFinalValue = t16;
  var getFinalValueRef = reactHook.useAutoUpdateRef(getFinalValue);
  var t17;
  if ($[30] !== getFinalValue || $[31] !== initValue) {
    t17 = getFinalValue(initValue);
    $[30] = getFinalValue;
    $[31] = initValue;
    $[32] = t17;
  } else {
    t17 = $[32];
  }
  var _useState17 = React.useState(t17),
    _useState18 = _slicedToArray(_useState17, 2),
    value_5 = _useState18[0],
    _setValue = _useState18[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_5);
  var t18;
  if ($[33] !== valueRef) {
    t18 = function t18(value_6) {
      _setValue(function (prev_2) {
        var newValue_2 = typeof value_6 === "function" ? value_6(prev_2) : value_6;
        valueRef.current = newValue_2;
        return newValue_2;
      });
    };
    $[33] = valueRef;
    $[34] = t18;
  } else {
    t18 = $[34];
  }
  var setValue = t18;
  var t19;
  if ($[35] !== error || $[36] !== getFinalValueRef || $[37] !== name || $[38] !== onChangeRef || $[39] !== onValueChange || $[40] !== setValue || $[41] !== validate) {
    t19 = function t19(newValue_3, t20) {
      var _onChangeRef$current;
      var skipGetFinalValue = t20 === undefined ? false : t20;
      var finalValue_0 = skipGetFinalValue ? newValue_3 : getFinalValueRef.current(newValue_3);
      setValue(finalValue_0);
      if (error) {
        validate(finalValue_0);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[35] = error;
    $[36] = getFinalValueRef;
    $[37] = name;
    $[38] = onChangeRef;
    $[39] = onValueChange;
    $[40] = setValue;
    $[41] = validate;
    $[42] = t19;
  } else {
    t19 = $[42];
  }
  var updateValue = t19;
  var t20;
  if ($[43] !== updateValue || $[44] !== valueRef) {
    t20 = function t20() {
      return updateValue(valueRef.current);
    };
    $[43] = updateValue;
    $[44] = valueRef;
    $[45] = t20;
  } else {
    t20 = $[45];
  }
  var effectEvent = React.useEffectEvent(t20);
  var firstSkip = React.useRef(true);
  var t21;
  if ($[46] !== effectEvent) {
    t21 = function t21() {
      if (firstSkip.current) {
        firstSkip.current = false;
      } else {
        effectEvent();
      }
    };
    $[46] = effectEvent;
    $[47] = t21;
  } else {
    t21 = $[47];
  }
  var t22;
  if ($[48] !== multiple) {
    t22 = [multiple];
    $[48] = multiple;
    $[49] = t22;
  } else {
    t22 = $[49];
  }
  React.useEffect(t21, t22);
  var t23;
  if ($[50] !== onLoadItemsRef) {
    t23 = function t23() {
      if (onLoadItemsRef.current) {
        onLoadItemsRef.current().then(function (items_0) {
          setItems(items_0);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[50] = onLoadItemsRef;
    $[51] = t23;
  } else {
    t23 = $[51];
  }
  var effectEvent_0 = React.useEffectEvent(t23);
  var t24;
  if ($[52] !== effectEvent_0) {
    t24 = function t24() {
      return effectEvent_0();
    };
    $[52] = effectEvent_0;
    $[53] = t24;
  } else {
    t24 = $[53];
  }
  var t25;
  if ($[54] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = [];
    $[54] = t25;
  } else {
    t25 = $[54];
  }
  React.useEffect(t24, t25);
  var t26;
  if ($[55] !== items || $[56] !== multiple || $[57] !== notAllowEmptyValue || $[58] !== updateValue || $[59] !== value_5) {
    t26 = function t26() {
      if (notAllowEmptyValue) {
        if (items && compare.notEmpty(items)) {
          var setFirstItem = false;
          if (Array.isArray(value_5)) {
            if (compare.empty(value_5)) {
              setFirstItem = true;
            }
          } else {
            if (value_5 == null) {
              setFirstItem = true;
            }
          }
          if (setFirstItem) {
            updateValue(multiple ? [items[0].value] : items[0].value);
          }
        }
      }
    };
    $[55] = items;
    $[56] = multiple;
    $[57] = notAllowEmptyValue;
    $[58] = updateValue;
    $[59] = value_5;
    $[60] = t26;
  } else {
    t26 = $[60];
  }
  var effectEvent_1 = React.useEffectEvent(t26);
  var t27;
  if ($[61] !== effectEvent_1) {
    t27 = function t27() {
      effectEvent_1();
    };
    $[61] = effectEvent_1;
    $[62] = t27;
  } else {
    t27 = $[62];
  }
  var t28;
  if ($[63] !== items || $[64] !== multiple || $[65] !== notAllowEmptyValue || $[66] !== value_5) {
    t28 = [multiple, items, value_5, notAllowEmptyValue];
    $[63] = items;
    $[64] = multiple;
    $[65] = notAllowEmptyValue;
    $[66] = value_5;
    $[67] = t28;
  } else {
    t28 = $[67];
  }
  React.useEffect(t27, t28);
  var t29;
  if ($[68] !== name) {
    t29 = function t29() {
      return name;
    };
    $[68] = name;
    $[69] = t29;
  } else {
    t29 = $[69];
  }
  var t30;
  if ($[70] !== getFinalValueRef || $[71] !== initValueRef) {
    t30 = function t30() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[70] = getFinalValueRef;
    $[71] = initValueRef;
    $[72] = t30;
  } else {
    t30 = $[72];
  }
  var t31;
  if ($[73] !== initValueRef || $[74] !== updateValue) {
    t31 = function t31() {
      return updateValue(initValueRef.current);
    };
    $[73] = initValueRef;
    $[74] = updateValue;
    $[75] = t31;
  } else {
    t31 = $[75];
  }
  var t32;
  if ($[76] !== valueRef) {
    t32 = function t32() {
      return valueRef.current;
    };
    $[76] = valueRef;
    $[77] = t32;
  } else {
    t32 = $[77];
  }
  var t33;
  if ($[78] !== updateValue || $[79] !== valueRef) {
    t33 = function t33(v_0) {
      valueRef.current = updateValue(v_0);
    };
    $[78] = updateValue;
    $[79] = valueRef;
    $[80] = t33;
  } else {
    t33 = $[80];
  }
  var t34;
  if ($[81] !== dataRef) {
    t34 = function t34() {
      return dataRef.current;
    };
    $[81] = dataRef;
    $[82] = t34;
  } else {
    t34 = $[82];
  }
  var t35;
  if ($[83] !== exceptValue) {
    t35 = function t35() {
      return !!exceptValue;
    };
    $[83] = exceptValue;
    $[84] = t35;
  } else {
    t35 = $[84];
  }
  var t36;
  if ($[85] !== disabled) {
    t36 = function t36() {
      return !!disabled;
    };
    $[85] = disabled;
    $[86] = t36;
  } else {
    t36 = $[86];
  }
  var t37;
  if ($[87] !== hidden) {
    t37 = function t37() {
      return !!hidden;
    };
    $[87] = hidden;
    $[88] = t37;
  } else {
    t37 = $[88];
  }
  var t38;
  if ($[89] !== validate || $[90] !== valueRef) {
    t38 = function t38() {
      return validate(valueRef.current);
    };
    $[89] = validate;
    $[90] = valueRef;
    $[91] = t38;
  } else {
    t38 = $[91];
  }
  var t39;
  if ($[92] !== formValueSeparator) {
    t39 = function t39() {
      return formValueSeparator;
    };
    $[92] = formValueSeparator;
    $[93] = t39;
  } else {
    t39 = $[93];
  }
  var t40;
  if ($[94] !== formValueSort) {
    t40 = function t40() {
      return !!formValueSort;
    };
    $[94] = formValueSort;
    $[95] = t40;
  } else {
    t40 = $[95];
  }
  var t41;
  if ($[96] !== itemsRef) {
    t41 = function t41() {
      return itemsRef.current;
    };
    $[96] = itemsRef;
    $[97] = t41;
  } else {
    t41 = $[97];
  }
  var t42;
  if ($[98] !== multiple) {
    t42 = function t42() {
      return !!multiple;
    };
    $[98] = multiple;
    $[99] = t42;
  } else {
    t42 = $[99];
  }
  var t43;
  if ($[100] !== loadingRef) {
    t43 = function t43() {
      return !!loadingRef.current;
    };
    $[100] = loadingRef;
    $[101] = t43;
  } else {
    t43 = $[101];
  }
  var t44;
  if ($[102] !== onLoadItemsRef) {
    t44 = function t44() {
      if (onLoadItemsRef.current) {
        setIsOnGetItemLoading(true);
        onLoadItemsRef.current().then(function (items_1) {
          setItems(items_1);
          setIsOnGetItemLoading(false);
        });
      }
    };
    $[102] = onLoadItemsRef;
    $[103] = t44;
  } else {
    t44 = $[103];
  }
  var t45;
  if ($[104] !== focus || $[105] !== setData || $[106] !== setErrorErrorHelperText || $[107] !== setLoading || $[108] !== t29 || $[109] !== t30 || $[110] !== t31 || $[111] !== t32 || $[112] !== t33 || $[113] !== t34 || $[114] !== t35 || $[115] !== t36 || $[116] !== t37 || $[117] !== t38 || $[118] !== t39 || $[119] !== t40 || $[120] !== t41 || $[121] !== t42 || $[122] !== t43 || $[123] !== t44) {
    t45 = {
      getType: _temp2$3,
      getName: t29,
      getReset: t30,
      reset: t31,
      getValue: t32,
      setValue: t33,
      getData: t34,
      setData: setData,
      isExceptValue: t35,
      isDisabled: t36,
      setDisabled: setDisabled,
      isHidden: t37,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t38,
      setError: setErrorErrorHelperText,
      getFormValueSeparator: t39,
      isFormValueSort: t40,
      getItems: t41,
      setItems: setItems,
      isMultiple: t42,
      getLoading: t43,
      setLoading: setLoading,
      reloadItems: t44
    };
    $[104] = focus;
    $[105] = setData;
    $[106] = setErrorErrorHelperText;
    $[107] = setLoading;
    $[108] = t29;
    $[109] = t30;
    $[110] = t31;
    $[111] = t32;
    $[112] = t33;
    $[113] = t34;
    $[114] = t35;
    $[115] = t36;
    $[116] = t37;
    $[117] = t38;
    $[118] = t39;
    $[119] = t40;
    $[120] = t41;
    $[121] = t42;
    $[122] = t43;
    $[123] = t44;
    $[124] = t45;
  } else {
    t45 = $[124];
  }
  var commands = t45;
  var t46;
  if ($[125] !== id || $[126] !== onAddValueItem) {
    t46 = function t46(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[125] = id;
    $[126] = onAddValueItem;
    $[127] = t46;
  } else {
    t46 = $[127];
  }
  var t47;
  if ($[128] !== id || $[129] !== onRemoveValueItem) {
    t47 = function t47() {
      return onRemoveValueItem(id);
    };
    $[128] = id;
    $[129] = onRemoveValueItem;
    $[130] = t47;
  } else {
    t47 = $[130];
  }
  reactHook.useForwardRef(ref, commands, t46, t47);
  var t48;
  if ($[131] !== getFinalValueRef || $[132] !== multiple || $[133] !== name || $[134] !== notAllowEmptyValue || $[135] !== onRequestSearchSubmit || $[136] !== onValueChangeByUser || $[137] !== readOnly || $[138] !== updateValue || $[139] !== valueRef) {
    t48 = function t48(e, newValue_4) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_1 = newValue_4;
        if (notAllowEmptyValue) {
          if (multiple) {
            if (compare.empty(finalValue_1)) {
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
        if (!compare.equal(valueRef.current, finalValue_1)) {
          valueRef.current = updateValue(finalValue_1, true);
          setTimeout(function () {
            onValueChangeByUser(name, finalValue_1);
            onRequestSearchSubmit(name, finalValue_1);
          });
        }
      }
    };
    $[131] = getFinalValueRef;
    $[132] = multiple;
    $[133] = name;
    $[134] = notAllowEmptyValue;
    $[135] = onRequestSearchSubmit;
    $[136] = onValueChangeByUser;
    $[137] = readOnly;
    $[138] = updateValue;
    $[139] = valueRef;
    $[140] = t48;
  } else {
    t48 = $[140];
  }
  var handleChange = t48;
  var formControlBaseProps;
  if ($[141] !== focused) {
    formControlBaseProps = {};
    if (focused) {
      formControlBaseProps.focused = true;
    }
    $[141] = focused;
    $[142] = formControlBaseProps;
  } else {
    formControlBaseProps = $[142];
  }
  var finalItemWidth = undefined;
  if (type === "button" && !fullWidth) {
    finalItemWidth = "auto";
  } else {
    if (!fullWidth || type === "radio" || type === "checkbox") {
      finalItemWidth = itemWidth || "auto";
    }
  }
  var t49 = error ? theme.palette.error.main : "";
  var t50 = error ? theme.palette.error.main : "";
  var t51;
  if ($[143] !== finalItemWidth || $[144] !== t49 || $[145] !== t50) {
    t51 = {
      borderColor: t49,
      color: t50,
      width: finalItemWidth
    };
    $[143] = finalItemWidth;
    $[144] = t49;
    $[145] = t50;
    $[146] = t51;
  } else {
    t51 = $[146];
  }
  var buttonStyle = t51;
  var t52;
  if ($[147] !== buttonStyle || $[148] !== color || $[149] !== disabled || $[150] !== initFocused || $[151] !== items || $[152] !== readOnly || $[153] !== refForButtonResizeHeightDetect || $[154] !== size || $[155] !== type) {
    t52 = items && items.map(function (t53, idx) {
      var value_7 = t53.value,
        label_0 = t53.label,
        itemDisabled = t53.disabled,
        itemColor = t53.color;
      return /*#__PURE__*/React.createElement(material.ToggleButton, {
        ref: function ref(ref_0) {
          if (idx === 0) {
            refForButtonResizeHeightDetect.current = ref_0;
          }
        },
        key: idx,
        size: size,
        className: "ToggleButton",
        value: value_7,
        color: itemColor || color,
        disabled: disabled || readOnly || itemDisabled,
        style: buttonStyle,
        onFocus: function onFocus() {
          return setFocused(initFocused || true);
        },
        onBlur: function onBlur() {
          return setFocused(initFocused || false);
        }
      }, type === "checkbox" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(material.Icon, {
        className: "__checkbox-unchecked__"
      }, "check_box_outline_blank"), /*#__PURE__*/React.createElement(material.Icon, {
        className: "__checkbox-checked__"
      }, "check_box")) : type === "radio" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(material.Icon, {
        className: "__checkbox-unchecked__"
      }, "radio_button_unchecked"), /*#__PURE__*/React.createElement(material.Icon, {
        className: "__checkbox-checked__"
      }, "radio_button_checked"))), /*#__PURE__*/React.createElement("span", {
        className: "__label__"
      }, label_0));
    });
    $[147] = buttonStyle;
    $[148] = color;
    $[149] = disabled;
    $[150] = initFocused;
    $[151] = items;
    $[152] = readOnly;
    $[153] = refForButtonResizeHeightDetect;
    $[154] = size;
    $[155] = type;
    $[156] = t52;
  } else {
    t52 = $[156];
  }
  var buttons = t52;
  var newRealValue = value_5 == null ? null : value_5;
  if (items && value_5 != null) {
    if (Array.isArray(newRealValue)) {
      if ($[157] !== items || $[158] !== multiple || $[159] !== newRealValue) {
        var stringRealValues = newRealValue.map(_temp3$1);
        if (multiple) {
          var foundItems = items.filter(function (v_2) {
            return stringRealValues.includes(v_2.value.toString());
          });
          newRealValue = foundItems.map(_temp4$1);
        }
        $[157] = items;
        $[158] = multiple;
        $[159] = newRealValue;
        $[160] = newRealValue;
      } else {
        newRealValue = $[160];
      }
    } else {
      if (newRealValue != null) {
        var _t3;
        if ($[161] !== newRealValue) {
          _t3 = newRealValue.toString();
          $[161] = newRealValue;
          $[162] = _t3;
        } else {
          _t3 = $[162];
        }
        var stringRealValue = _t3;
        var _t4;
        if ($[163] !== items || $[164] !== stringRealValue) {
          var _t5;
          if ($[166] !== stringRealValue) {
            _t5 = function _t5(v_4) {
              return v_4.value.toString() === stringRealValue;
            };
            $[166] = stringRealValue;
            $[167] = _t5;
          } else {
            _t5 = $[167];
          }
          _t4 = items.find(_t5);
          $[163] = items;
          $[164] = stringRealValue;
          $[165] = _t4;
        } else {
          _t4 = $[165];
        }
        var foundItem = _t4;
        if (foundItem) {
          newRealValue = foundItem.value;
        }
      }
    }
  }
  var realValue_1 = newRealValue;
  var t53;
  if ($[168] !== buttons || $[169] !== disabled || $[170] !== endAdornment || $[171] !== formColWidth || $[172] !== fullWidth || $[173] !== handleChange || $[174] !== isOnGetItemLoading || $[175] !== items || $[176] !== label || $[177] !== labelId || $[178] !== loading || $[179] !== multiple || $[180] !== readOnly || $[181] !== realValue_1 || $[182] !== refForButtonResizeHeightDetect || $[183] !== refForButtonsResizeHeightDetect || $[184] !== refForLoadingResizeHeightDetect || $[185] !== refForResizeWidthDetect || $[186] !== size || $[187] !== startAdornment || $[188] !== type || $[189] !== width) {
    t53 = isOnGetItemLoading || loading ? /*#__PURE__*/React.createElement("div", {
      style: {
        opacity: 0.54
      },
      ref: refForLoadingResizeHeightDetect
    }, /*#__PURE__*/React.createElement(material.CircularProgress, {
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
    }, /*#__PURE__*/React.createElement(material.ToggleButtonGroup, {
      className: "ToggleButtonGroup",
      exclusive: !multiple
    }, buttons)), /*#__PURE__*/React.createElement(material.ToggleButtonGroup, {
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
      "aria-labelledby": compare.notEmpty(label) ? labelId : undefined
    }, isOnGetItemLoading || loading || !items || compare.empty(items) ? /*#__PURE__*/React.createElement(material.ToggleButton, {
      ref: refForButtonResizeHeightDetect,
      size: size,
      className: "ToggleButton",
      disabled: disabled || readOnly,
      value: "",
      style: {
        visibility: "hidden"
      }
    }) : buttons)), endAdornment && /*#__PURE__*/React.createElement("div", null, endAdornment));
    $[168] = buttons;
    $[169] = disabled;
    $[170] = endAdornment;
    $[171] = formColWidth;
    $[172] = fullWidth;
    $[173] = handleChange;
    $[174] = isOnGetItemLoading;
    $[175] = items;
    $[176] = label;
    $[177] = labelId;
    $[178] = loading;
    $[179] = multiple;
    $[180] = readOnly;
    $[181] = realValue_1;
    $[182] = refForButtonResizeHeightDetect;
    $[183] = refForButtonsResizeHeightDetect;
    $[184] = refForLoadingResizeHeightDetect;
    $[185] = refForResizeWidthDetect;
    $[186] = size;
    $[187] = startAdornment;
    $[188] = type;
    $[189] = width;
    $[190] = t53;
  } else {
    t53 = $[190];
  }
  var control = t53;
  var controlHeight = height || 0;
  var isMultiline = controlHeight <= (realHeight !== null && realHeight !== void 0 ? realHeight : 0);
  var t54 = "variant-".concat(variant);
  var t55 = "size-".concat(size);
  var t56 = !!label && "with-label";
  var t57 = !!fullWidth && "full-width";
  var t58 = "type-".concat(type);
  var t59 = (isOnGetItemLoading || loading) && "loading";
  var t60;
  if ($[191] !== className || $[192] !== t54 || $[193] !== t55 || $[194] !== t56 || $[195] !== t57 || $[196] !== t58 || $[197] !== t59) {
    t60 = classNames(className, "PFormValueItem", "PFormToggleButtonGroup", t54, t55, t56, t57, t58, t59);
    $[191] = className;
    $[192] = t54;
    $[193] = t55;
    $[194] = t56;
    $[195] = t57;
    $[196] = t58;
    $[197] = t59;
    $[198] = t60;
  } else {
    t60 = $[198];
  }
  var t61 = error ? errorHelperText : helperText;
  var t62;
  if ($[199] === Symbol["for"]("react.memo_cache_sentinel")) {
    t62 = {
      style: {
        marginLeft: 2
      }
    };
    $[199] = t62;
  } else {
    t62 = $[199];
  }
  var t63 = realHeight ? realHeight + (isMultiline ? 13 : 0) : controlHeight;
  var t64 = isMultiline ? false : isOnGetItemLoading || loading;
  var t65;
  if ($[200] !== color || $[201] !== control || $[202] !== error || $[203] !== formControlBaseProps || $[204] !== fullWidth || $[205] !== hidden || $[206] !== label || $[207] !== labelIcon || $[208] !== required || $[209] !== size || $[210] !== style || $[211] !== sx || $[212] !== t60 || $[213] !== t61 || $[214] !== t63 || $[215] !== t64 || $[216] !== variant) {
    t65 = /*#__PURE__*/React.createElement(PFormItemBase, _extends({}, formControlBaseProps, {
      className: t60,
      variant: variant,
      size: size,
      color: color,
      labelIcon: labelIcon,
      label: label,
      required: required,
      fullWidth: fullWidth,
      error: error,
      helperText: t61,
      helperTextProps: t62,
      style: style,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t63,
      controlVerticalCenter: t64,
      control: control
    }));
    $[200] = color;
    $[201] = control;
    $[202] = error;
    $[203] = formControlBaseProps;
    $[204] = fullWidth;
    $[205] = hidden;
    $[206] = label;
    $[207] = labelIcon;
    $[208] = required;
    $[209] = size;
    $[210] = style;
    $[211] = sx;
    $[212] = t60;
    $[213] = t61;
    $[214] = t63;
    $[215] = t64;
    $[216] = variant;
    $[217] = t65;
  } else {
    t65 = $[217];
  }
  return t65;
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
  var value_2 = t0.value;
  res["".concat(value_2)] = value_2;
  return res;
}var PFormRating = function PFormRating(t0) {
  var $ = compilerRuntime.c(118);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var inputRef = React.useRef(undefined);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState3 = React.useState(finalInitFocused),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  reactHook.useChanged(finalInitFocused) && setFocused(finalInitFocused);
  var _useState5 = React.useState(initError),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    _setError = _useState6[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t3;
  if ($[0] !== errorRef) {
    t3 = function t3(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  var setError = t3;
  var _useState7 = React.useState(initData),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    _setData = _useState8[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t4;
  if ($[2] !== dataRef) {
    t4 = function t4(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  var setData = t4;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState9 = React.useState(finalInitDisabled),
    _useState0 = _slicedToArray(_useState9, 2),
    disabled = _useState0[0],
    setDisabled = _useState0[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState1 = React.useState(initHidden),
    _useState10 = _slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var _useResizeDetector = reactResizeDetector.useResizeDetector(),
    ratingRef = _useResizeDetector.ref,
    width = _useResizeDetector.width,
    height = _useResizeDetector.height;
  var t5;
  if ($[4] !== setError) {
    t5 = function t5(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[4] = setError;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var setErrorErrorHelperText = t5;
  var t6;
  if ($[6] !== onValidateRef || $[7] !== required || $[8] !== setErrorErrorHelperText) {
    t6 = function t6(value_1) {
      if (required && (compare.empty(value_1) || value_1 === 0)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_1);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[6] = onValidateRef;
    $[7] = required;
    $[8] = setErrorErrorHelperText;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  var validate = t6;
  var t7;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  var focus = t7;
  var t8;
  if ($[11] !== onValue) {
    t8 = function t8(value_2) {
      var finalValue = value_2 || 0;
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[11] = onValue;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  var getFinalValue = t8;
  var getFinalValueRef = reactHook.useAutoUpdateRef(getFinalValue);
  var t9;
  if ($[13] !== getFinalValue || $[14] !== initValue) {
    t9 = getFinalValue(initValue);
    $[13] = getFinalValue;
    $[14] = initValue;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var _useState11 = React.useState(t9),
    _useState12 = _slicedToArray(_useState11, 2),
    value_3 = _useState12[0],
    _setValue = _useState12[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_3);
  var t10;
  if ($[16] !== valueRef) {
    t10 = function t10(value_4) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_4 === "function" ? value_4(prev_1) : value_4;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[16] = valueRef;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  var setValue = t10;
  var t11;
  if ($[18] !== error || $[19] !== getFinalValue || $[20] !== name || $[21] !== onChangeRef || $[22] !== onValueChange || $[23] !== setValue || $[24] !== validate) {
    t11 = function t11(newValue_2) {
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
    $[18] = error;
    $[19] = getFinalValue;
    $[20] = name;
    $[21] = onChangeRef;
    $[22] = onValueChange;
    $[23] = setValue;
    $[24] = validate;
    $[25] = t11;
  } else {
    t11 = $[25];
  }
  var updateValue = t11;
  var t12;
  if ($[26] !== name) {
    t12 = function t12() {
      return name;
    };
    $[26] = name;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  var t13;
  if ($[28] !== getFinalValueRef || $[29] !== initValueRef) {
    t13 = function t13() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[28] = getFinalValueRef;
    $[29] = initValueRef;
    $[30] = t13;
  } else {
    t13 = $[30];
  }
  var t14;
  if ($[31] !== initValueRef || $[32] !== updateValue) {
    t14 = function t14() {
      return updateValue(initValueRef.current);
    };
    $[31] = initValueRef;
    $[32] = updateValue;
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  var t15;
  if ($[34] !== valueRef) {
    t15 = function t15() {
      return valueRef.current;
    };
    $[34] = valueRef;
    $[35] = t15;
  } else {
    t15 = $[35];
  }
  var t16;
  if ($[36] !== dataRef) {
    t16 = function t16() {
      return dataRef.current;
    };
    $[36] = dataRef;
    $[37] = t16;
  } else {
    t16 = $[37];
  }
  var t17;
  if ($[38] !== exceptValue) {
    t17 = function t17() {
      return !!exceptValue;
    };
    $[38] = exceptValue;
    $[39] = t17;
  } else {
    t17 = $[39];
  }
  var t18;
  if ($[40] !== disabled) {
    t18 = function t18() {
      return !!disabled;
    };
    $[40] = disabled;
    $[41] = t18;
  } else {
    t18 = $[41];
  }
  var t19;
  if ($[42] !== hidden) {
    t19 = function t19() {
      return !!hidden;
    };
    $[42] = hidden;
    $[43] = t19;
  } else {
    t19 = $[43];
  }
  var t20;
  if ($[44] !== validate || $[45] !== valueRef) {
    t20 = function t20() {
      return validate(valueRef.current);
    };
    $[44] = validate;
    $[45] = valueRef;
    $[46] = t20;
  } else {
    t20 = $[46];
  }
  var t21;
  if ($[47] !== setData || $[48] !== setErrorErrorHelperText || $[49] !== t12 || $[50] !== t13 || $[51] !== t14 || $[52] !== t15 || $[53] !== t16 || $[54] !== t17 || $[55] !== t18 || $[56] !== t19 || $[57] !== t20 || $[58] !== updateValue) {
    t21 = {
      getType: _temp$n,
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
      setError: setErrorErrorHelperText
    };
    $[47] = setData;
    $[48] = setErrorErrorHelperText;
    $[49] = t12;
    $[50] = t13;
    $[51] = t14;
    $[52] = t15;
    $[53] = t16;
    $[54] = t17;
    $[55] = t18;
    $[56] = t19;
    $[57] = t20;
    $[58] = updateValue;
    $[59] = t21;
  } else {
    t21 = $[59];
  }
  var commands = t21;
  var t22;
  if ($[60] !== id || $[61] !== onAddValueItem) {
    t22 = function t22(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[60] = id;
    $[61] = onAddValueItem;
    $[62] = t22;
  } else {
    t22 = $[62];
  }
  var t23;
  if ($[63] !== id || $[64] !== onRemoveValueItem) {
    t23 = function t23() {
      return onRemoveValueItem(id);
    };
    $[63] = id;
    $[64] = onRemoveValueItem;
    $[65] = t23;
  } else {
    t23 = $[65];
  }
  reactHook.useForwardRef(ref, commands, t22, t23);
  var t24;
  if ($[66] !== name || $[67] !== onRequestSearchSubmit || $[68] !== onValueChangeByUser || $[69] !== readOnly || $[70] !== updateValue) {
    t24 = function t24(e, value_5) {
      if (readOnly) {
        e.preventDefault();
      } else {
        var finalValue_1 = updateValue(value_5);
        setTimeout(function () {
          onValueChangeByUser(name, finalValue_1);
          onRequestSearchSubmit(name, finalValue_1);
        });
      }
    };
    $[66] = name;
    $[67] = onRequestSearchSubmit;
    $[68] = onValueChangeByUser;
    $[69] = readOnly;
    $[70] = updateValue;
    $[71] = t24;
  } else {
    t24 = $[71];
  }
  var handleChange = t24;
  var t25;
  if ($[72] !== className) {
    t25 = classNames(className, "PFormValueItem", "PFormRating");
    $[72] = className;
    $[73] = t25;
  } else {
    t25 = $[73];
  }
  var t26 = error ? errorHelperText : helperText;
  var t27;
  if ($[74] === Symbol["for"]("react.memo_cache_sentinel")) {
    t27 = {
      style: {
        marginLeft: 5
      }
    };
    $[74] = t27;
  } else {
    t27 = $[74];
  }
  var t28 = width || 100;
  var t29;
  if ($[75] !== initStyle || $[76] !== t28) {
    t29 = _objectSpread2({
      width: t28
    }, initStyle);
    $[75] = initStyle;
    $[76] = t28;
    $[77] = t29;
  } else {
    t29 = $[77];
  }
  var t30 = height || (size === "small" ? 21 : 26);
  var t31;
  if ($[78] !== ratingRef) {
    t31 = function t31(ref_0) {
      ratingRef.current = ref_0;
      inputRef.current = (ref_0 === null || ref_0 === void 0 ? void 0 : ref_0.querySelector("input")) || undefined;
    };
    $[78] = ratingRef;
    $[79] = t31;
  } else {
    t31 = $[79];
  }
  var t32 = size === "medium" ? "large" : "medium";
  var t33 = disabled || readOnly;
  var t34 = icon ? icon : "Star";
  var t35;
  if ($[80] !== color || $[81] !== t34) {
    t35 = /*#__PURE__*/React.createElement(reactComponent.PIcon, {
      color: color,
      size: "inherit"
    }, t34);
    $[80] = color;
    $[81] = t34;
    $[82] = t35;
  } else {
    t35 = $[82];
  }
  var t36 = emptyIcon ? emptyIcon : "StarBorder";
  var t37;
  if ($[83] !== t36) {
    t37 = /*#__PURE__*/React.createElement(reactComponent.PIcon, {
      size: "inherit"
    }, t36);
    $[83] = t36;
    $[84] = t37;
  } else {
    t37 = $[84];
  }
  var t38;
  var t39;
  if ($[85] !== initFocused) {
    t38 = function t38() {
      return setFocused(initFocused || true);
    };
    t39 = function t39() {
      return setFocused(initFocused || false);
    };
    $[85] = initFocused;
    $[86] = t38;
    $[87] = t39;
  } else {
    t38 = $[86];
    t39 = $[87];
  }
  var t40;
  if ($[88] !== handleChange || $[89] !== highlightSelectedOnly || $[90] !== max || $[91] !== name || $[92] !== precision || $[93] !== t31 || $[94] !== t32 || $[95] !== t33 || $[96] !== t35 || $[97] !== t37 || $[98] !== t38 || $[99] !== t39 || $[100] !== value_3) {
    t40 = /*#__PURE__*/React.createElement(material.Rating, {
      ref: t31,
      size: t32,
      name: name,
      precision: precision,
      highlightSelectedOnly: highlightSelectedOnly,
      value: value_3,
      disabled: t33,
      max: max,
      icon: t35,
      emptyIcon: t37,
      onChange: handleChange,
      onFocus: t38,
      onBlur: t39
    });
    $[88] = handleChange;
    $[89] = highlightSelectedOnly;
    $[90] = max;
    $[91] = name;
    $[92] = precision;
    $[93] = t31;
    $[94] = t32;
    $[95] = t33;
    $[96] = t35;
    $[97] = t37;
    $[98] = t38;
    $[99] = t39;
    $[100] = value_3;
    $[101] = t40;
  } else {
    t40 = $[101];
  }
  var t41;
  if ($[102] !== color || $[103] !== error || $[104] !== focused || $[105] !== hidden || $[106] !== label || $[107] !== labelIcon || $[108] !== required || $[109] !== size || $[110] !== sx || $[111] !== t25 || $[112] !== t26 || $[113] !== t29 || $[114] !== t30 || $[115] !== t40 || $[116] !== variant) {
    t41 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t25,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: false,
      required: required,
      helperText: t26,
      helperTextProps: t27,
      style: t29,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t30,
      controlVerticalCenter: true,
      control: t40
    });
    $[102] = color;
    $[103] = error;
    $[104] = focused;
    $[105] = hidden;
    $[106] = label;
    $[107] = labelIcon;
    $[108] = required;
    $[109] = size;
    $[110] = sx;
    $[111] = t25;
    $[112] = t26;
    $[113] = t29;
    $[114] = t30;
    $[115] = t40;
    $[116] = variant;
    $[117] = t41;
  } else {
    t41 = $[117];
  }
  return t41;
};
function _temp$n() {
  return "PFormRating";
}var getFinalValue$8 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormTextEditor.initializing textarea{display:none}.PFormTextEditor.error .tox-tinymce{border-color:#d32f2f}.tox-menu.tox-collection.tox-collection--list .tox-collection__group .tox-menu-nav__js.tox-collection__item{padding-right:20px !important}.tox-notifications-container{display:none}");var _PFormTextEditor = function PFormTextEditor(t0) {
  var $ = compilerRuntime.c(116);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var editorRef = React.useRef(null);
  var keyDownTime = React.useRef(0);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    initialized = _useState4[0],
    setInitialized = _useState4[1];
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState5 = React.useState(finalInitFocused),
    _useState6 = _slicedToArray(_useState5, 2),
    focused = _useState6[0],
    setFocused = _useState6[1];
  reactHook.useChanged(finalInitFocused) && setFocused(finalInitFocused);
  var _useState7 = React.useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t4;
  if ($[0] !== errorRef) {
    t4 = function t4(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t4;
  } else {
    t4 = $[1];
  }
  var setError = t4;
  var _useState9 = React.useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t5;
  if ($[2] !== dataRef) {
    t5 = function t5(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var setData = t5;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = React.useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState11 = React.useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t6;
  if ($[4] !== setError) {
    t6 = function t6(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[4] = setError;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var setErrorErrorHelperText = t6;
  var t7;
  if ($[6] !== onValidateRef || $[7] !== required || $[8] !== setErrorErrorHelperText) {
    t7 = function t7(value_1) {
      var _editorRef$current;
      if (required && compare.empty((_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.getContent())) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_1);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[6] = onValidateRef;
    $[7] = required;
    $[8] = setErrorErrorHelperText;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  var validate = t7;
  var t8;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      var _editorRef$current2;
      (_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 || _editorRef$current2.focus();
    };
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  var focus = t8;
  var t9;
  if ($[11] !== initValue) {
    t9 = getFinalValue$8(initValue);
    $[11] = initValue;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  var _useState13 = React.useState(t9),
    _useState14 = _slicedToArray(_useState13, 2),
    value_2 = _useState14[0],
    _setValue = _useState14[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue$8(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t10;
  if ($[13] !== valueRef) {
    t10 = function t10(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[13] = valueRef;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  var setValue = t10;
  var t11;
  if ($[15] !== error || $[16] !== name || $[17] !== onChangeRef || $[18] !== onValueChange || $[19] !== setValue || $[20] !== validate) {
    t11 = function t11(newValue_2) {
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
    $[15] = error;
    $[16] = name;
    $[17] = onChangeRef;
    $[18] = onValueChange;
    $[19] = setValue;
    $[20] = validate;
    $[21] = t11;
  } else {
    t11 = $[21];
  }
  var updateValue = t11;
  var t12;
  if ($[22] !== name) {
    t12 = function t12() {
      return name;
    };
    $[22] = name;
    $[23] = t12;
  } else {
    t12 = $[23];
  }
  var t13;
  if ($[24] !== initValueRef) {
    t13 = function t13() {
      return getFinalValue$8(initValueRef.current);
    };
    $[24] = initValueRef;
    $[25] = t13;
  } else {
    t13 = $[25];
  }
  var t14;
  if ($[26] !== initValueRef || $[27] !== updateValue) {
    t14 = function t14() {
      return updateValue(initValueRef.current);
    };
    $[26] = initValueRef;
    $[27] = updateValue;
    $[28] = t14;
  } else {
    t14 = $[28];
  }
  var t15;
  if ($[29] !== valueRef) {
    t15 = function t15() {
      return valueRef.current;
    };
    $[29] = valueRef;
    $[30] = t15;
  } else {
    t15 = $[30];
  }
  var t16;
  if ($[31] !== dataRef) {
    t16 = function t16() {
      return dataRef.current;
    };
    $[31] = dataRef;
    $[32] = t16;
  } else {
    t16 = $[32];
  }
  var t17;
  if ($[33] !== exceptValue) {
    t17 = function t17() {
      return !!exceptValue;
    };
    $[33] = exceptValue;
    $[34] = t17;
  } else {
    t17 = $[34];
  }
  var t18;
  if ($[35] !== disabled) {
    t18 = function t18() {
      return !!disabled;
    };
    $[35] = disabled;
    $[36] = t18;
  } else {
    t18 = $[36];
  }
  var t19;
  if ($[37] !== hidden) {
    t19 = function t19() {
      return !!hidden;
    };
    $[37] = hidden;
    $[38] = t19;
  } else {
    t19 = $[38];
  }
  var t20;
  if ($[39] !== validate || $[40] !== valueRef) {
    t20 = function t20() {
      return validate(valueRef.current);
    };
    $[39] = validate;
    $[40] = valueRef;
    $[41] = t20;
  } else {
    t20 = $[41];
  }
  var t21;
  if ($[42] !== setData || $[43] !== setErrorErrorHelperText || $[44] !== t12 || $[45] !== t13 || $[46] !== t14 || $[47] !== t15 || $[48] !== t16 || $[49] !== t17 || $[50] !== t18 || $[51] !== t19 || $[52] !== t20 || $[53] !== updateValue) {
    t21 = {
      getType: _temp$m,
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
      setError: setErrorErrorHelperText
    };
    $[42] = setData;
    $[43] = setErrorErrorHelperText;
    $[44] = t12;
    $[45] = t13;
    $[46] = t14;
    $[47] = t15;
    $[48] = t16;
    $[49] = t17;
    $[50] = t18;
    $[51] = t19;
    $[52] = t20;
    $[53] = updateValue;
    $[54] = t21;
  } else {
    t21 = $[54];
  }
  var commands = t21;
  var t22;
  if ($[55] !== id || $[56] !== onAddValueItem) {
    t22 = function t22(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[55] = id;
    $[56] = onAddValueItem;
    $[57] = t22;
  } else {
    t22 = $[57];
  }
  var t23;
  if ($[58] !== id || $[59] !== onRemoveValueItem) {
    t23 = function t23() {
      return onRemoveValueItem(id);
    };
    $[58] = id;
    $[59] = onRemoveValueItem;
    $[60] = t23;
  } else {
    t23 = $[60];
  }
  reactHook.useForwardRef(ref, commands, t22, t23);
  var t24;
  if ($[61] !== name || $[62] !== onValueChangeByUser || $[63] !== updateValue) {
    t24 = function t24(value_4) {
      updateValue(value_4);
      if (new Date().getTime() - keyDownTime.current < 300) {
        setTimeout(function () {
          if (onValueChangeByUser) {
            onValueChangeByUser(name, value_4);
          }
        });
      }
    };
    $[61] = name;
    $[62] = onValueChangeByUser;
    $[63] = updateValue;
    $[64] = t24;
  } else {
    t24 = $[64];
  }
  var handleEditorChange = t24;
  var t25;
  if ($[65] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = function t25() {
      keyDownTime.current = new Date().getTime();
    };
    $[65] = t25;
  } else {
    t25 = $[65];
  }
  var handleKeyDown = t25;
  var t26;
  if ($[66] !== onImageUpload) {
    t26 = function t26(blobInfo, progress) {
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
    $[66] = onImageUpload;
    $[67] = t26;
  } else {
    t26 = $[67];
  }
  var handleImageUpload = t26;
  var t27;
  if ($[68] !== onCloseWindow || $[69] !== onOpenWindow) {
    t27 = function t27(evt, editor) {
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
    $[68] = onCloseWindow;
    $[69] = onOpenWindow;
    $[70] = t27;
  } else {
    t27 = $[70];
  }
  var handleEditorInit = t27;
  var t28;
  if ($[71] === Symbol["for"]("react.memo_cache_sentinel")) {
    t28 = ["lists", "advlist", "image", "autolink", "link", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "insertdatetime", "media", "table", "wordcount"];
    $[71] = t28;
  } else {
    t28 = $[71];
  }
  var t29 = toolbar || "undo redo |          formatselect bullist numlist outdent indent |          bold italic | align | forecolor backcolor |          link image media | advtable | code";
  var t30;
  if ($[72] !== handleImageUpload || $[73] !== height || $[74] !== menubar || $[75] !== t29) {
    t30 = {
      height: height,
      menubar: menubar,
      language: "ko_KR",
      contextmenu: false,
      content_style: "body {font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: hsl(0,0%,20%);} p {padding:0; margin:0}",
      plugins: t28,
      toolbar: t29,
      images_upload_handler: handleImageUpload
    };
    $[72] = handleImageUpload;
    $[73] = height;
    $[74] = menubar;
    $[75] = t29;
    $[76] = t30;
  } else {
    t30 = $[76];
  }
  var editInit = t30;
  var t31 = !initialized && "initializing";
  var t32;
  if ($[77] !== className || $[78] !== t31) {
    t32 = classNames(className, "PFormValueItem", "PFormTextEditor", t31);
    $[77] = className;
    $[78] = t31;
    $[79] = t32;
  } else {
    t32 = $[79];
  }
  var t33 = error ? errorHelperText : helperText;
  var t34;
  var t35;
  if ($[80] === Symbol["for"]("react.memo_cache_sentinel")) {
    t34 = {
      style: {
        marginLeft: 5
      }
    };
    t35 = {
      width: "100%"
    };
    $[80] = t34;
    $[81] = t35;
  } else {
    t34 = $[80];
    t35 = $[81];
  }
  var t36;
  if ($[82] !== height || $[83] !== initialized) {
    t36 = !initialized ? /*#__PURE__*/React.createElement(material.Skeleton, {
      variant: "rectangular",
      width: "100%",
      height: height
    }) : null;
    $[82] = height;
    $[83] = initialized;
    $[84] = t36;
  } else {
    t36 = $[84];
  }
  var t37;
  if ($[85] !== apiKey) {
    t37 = compare.ifEmpty(apiKey, _PFormTextEditor.apiKey);
    $[85] = apiKey;
    $[86] = t37;
  } else {
    t37 = $[86];
  }
  var t38 = readOnly || disabled;
  var t39;
  var t40;
  if ($[87] !== initFocused) {
    t39 = function t39() {
      return setFocused(initFocused || true);
    };
    t40 = function t40() {
      return setFocused(initFocused || false);
    };
    $[87] = initFocused;
    $[88] = t39;
    $[89] = t40;
  } else {
    t39 = $[88];
    t40 = $[89];
  }
  var t41;
  if ($[90] !== editInit || $[91] !== handleEditorChange || $[92] !== handleEditorInit || $[93] !== t37 || $[94] !== t38 || $[95] !== t39 || $[96] !== t40 || $[97] !== value_2) {
    t41 = /*#__PURE__*/React.createElement(tinymceReact.Editor, {
      apiKey: t37,
      value: value_2,
      disabled: t38,
      init: editInit,
      onInit: handleEditorInit,
      onEditorChange: handleEditorChange,
      onKeyDown: handleKeyDown,
      onFocus: t39,
      onBlur: t40
    });
    $[90] = editInit;
    $[91] = handleEditorChange;
    $[92] = handleEditorInit;
    $[93] = t37;
    $[94] = t38;
    $[95] = t39;
    $[96] = t40;
    $[97] = value_2;
    $[98] = t41;
  } else {
    t41 = $[98];
  }
  var t42;
  if ($[99] !== t36 || $[100] !== t41) {
    t42 = /*#__PURE__*/React.createElement(React.Fragment, null, t36, t41);
    $[99] = t36;
    $[100] = t41;
    $[101] = t42;
  } else {
    t42 = $[101];
  }
  var t43;
  if ($[102] !== color || $[103] !== error || $[104] !== focused || $[105] !== height || $[106] !== hidden || $[107] !== label || $[108] !== labelIcon || $[109] !== required || $[110] !== size || $[111] !== t32 || $[112] !== t33 || $[113] !== t42 || $[114] !== variant) {
    t43 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t32,
      labelIcon: labelIcon,
      label: label,
      error: error,
      required: required,
      fullWidth: true,
      helperText: t33,
      helperTextProps: t34,
      style: t35,
      hidden: hidden,
      controlHeight: height,
      control: t42
    });
    $[102] = color;
    $[103] = error;
    $[104] = focused;
    $[105] = height;
    $[106] = hidden;
    $[107] = label;
    $[108] = labelIcon;
    $[109] = required;
    $[110] = size;
    $[111] = t32;
    $[112] = t33;
    $[113] = t42;
    $[114] = variant;
    $[115] = t43;
  } else {
    t43 = $[115];
  }
  return t43;
};
_PFormTextEditor.apiKey = '';
function _temp$m() {
  return "PFormTextEditor";
}function PFormAutocomplete(t0) {
  var $ = compilerRuntime.c(230);
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
  var id = React.useId();
  var _useTimeoutRef = reactHook.useTimeoutRef(),
    _useTimeoutRef2 = _slicedToArray(_useTimeoutRef, 2),
    asyncTimeoutRef = _useTimeoutRef2[0],
    setAsyncTimeout = _useTimeoutRef2[1];
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var textFieldRef = React.useRef(null);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var onLoadItemsRef = reactHook.useAutoUpdateRef(onLoadItems);
  var onAsyncLoadValueItemRef = reactHook.useAutoUpdateRef(onAsyncLoadValueItem);
  var onFocusRef = reactHook.useAutoUpdateRef(onFocus);
  var onBlurRef = reactHook.useAutoUpdateRef(onBlur);
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
  var _useState = React.useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    _setError = _useState2[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t3;
  if ($[0] !== errorRef) {
    t3 = function t3(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  var setError = t3;
  var _useState3 = React.useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    _setData = _useState4[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t4;
  if ($[2] !== dataRef) {
    t4 = function t4(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  var setData = t4;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = React.useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = React.useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = React.useState(initLoading),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    _setLoading = _useState0[1];
  reactHook.useChanged(initLoading) && _setLoading(initLoading);
  var loadingRef = reactHook.useAutoUpdateRef(loading);
  var t5;
  if ($[4] !== loadingRef) {
    t5 = function t5(value_1) {
      _setLoading(function (prev_1) {
        var newValue_1 = typeof value_1 === "function" ? value_1(prev_1) : value_1;
        loadingRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[4] = loadingRef;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var setLoading = t5;
  var _useState1 = React.useState(initItems),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    _setItems = _useState10[1];
  reactHook.useChanged(initItems) && _setItems(initItems);
  var itemsRef = reactHook.useAutoUpdateRef(items);
  var t6;
  if ($[6] !== itemsRef) {
    t6 = function t6(newItems) {
      _setItems(newItems);
      itemsRef.current = newItems;
    };
    $[6] = itemsRef;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var setItems = t6;
  var _useState11 = React.useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOnGetItemLoading = _useState12[0],
    setIsOnGetItemLoading = _useState12[1];
  var _useState13 = React.useState(),
    _useState14 = _slicedToArray(_useState13, 2),
    errorHelperText = _useState14[0],
    setErrorHelperText = _useState14[1];
  var _useState15 = React.useState(undefined),
    _useState16 = _slicedToArray(_useState15, 2),
    inputValue = _useState16[0],
    setInputValue = _useState16[1];
  var t7;
  if (items) {
    var _t;
    if ($[8] !== items) {
      _t = items.reduce(_temp$l, {});
      $[8] = items;
      $[9] = _t;
    } else {
      _t = $[9];
    }
    t7 = _t;
  } else {
    var _t2;
    if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t2 = {};
      $[10] = _t2;
    } else {
      _t2 = $[10];
    }
    t7 = _t2;
  }
  var itemsValues = t7;
  var t8;
  if (items) {
    var _t3;
    if ($[11] !== items) {
      _t3 = items.reduce(_temp2$2, {});
      $[11] = items;
      $[12] = _t3;
    } else {
      _t3 = $[12];
    }
    t8 = _t3;
  } else {
    var _t4;
    if ($[13] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t4 = {};
      $[13] = _t4;
    } else {
      _t4 = $[13];
    }
    t8 = _t4;
  }
  var itemsInfos = t8;
  var t9;
  if ($[14] !== setError) {
    t9 = function t9(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[14] = setError;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var setErrorErrorHelperText = t9;
  var t10;
  if ($[16] !== onValidateRef || $[17] !== required || $[18] !== setErrorErrorHelperText) {
    t10 = function t10(value_3) {
      if (required && compare.empty(value_3)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_3);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[16] = onValidateRef;
    $[17] = required;
    $[18] = setErrorErrorHelperText;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  var validate = t10;
  var t11;
  if ($[20] !== formValueSeparator || $[21] !== itemsValues || $[22] !== multiple || $[23] !== onValue) {
    t11 = function t11(value_4) {
      var finalValue = value_4;
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
          if (compare.notEmpty(finalValue)) {
            finalValue = finalValue[0];
          } else {
            finalValue = undefined;
          }
        }
      }
      if (compare.notEmpty(itemsValues)) {
        if (finalValue != null && compare.notEmpty(finalValue)) {
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
    $[20] = formValueSeparator;
    $[21] = itemsValues;
    $[22] = multiple;
    $[23] = onValue;
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  var getFinalValue = t11;
  var getFinalValueRef = reactHook.useAutoUpdateRef(getFinalValue);
  var _useState17 = React.useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    valueItem = _useState18[0],
    setValueItem = _useState18[1];
  var t12;
  if ($[25] !== getFinalValue || $[26] !== initValue) {
    t12 = getFinalValue(initValue);
    $[25] = getFinalValue;
    $[26] = initValue;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  var _useState19 = React.useState(t12),
    _useState20 = _slicedToArray(_useState19, 2),
    value_5 = _useState20[0],
    _setValue = _useState20[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_5);
  var t13;
  if ($[28] !== valueRef) {
    t13 = function t13(value_6) {
      _setValue(function (prev_2) {
        var newValue_2 = typeof value_6 === "function" ? value_6(prev_2) : value_6;
        valueRef.current = newValue_2;
        return newValue_2;
      });
    };
    $[28] = valueRef;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  var setValue = t13;
  var t14;
  if ($[30] !== error || $[31] !== getFinalValueRef || $[32] !== name || $[33] !== onChangeRef || $[34] !== onValueChange || $[35] !== setValue || $[36] !== validate) {
    t14 = function t14(newValue_3, t15) {
      var _onChangeRef$current;
      var skipGetFinalValue = t15 === undefined ? false : t15;
      var finalValue_0 = skipGetFinalValue ? newValue_3 : getFinalValueRef.current(newValue_3);
      setValue(finalValue_0);
      if (error) {
        validate(finalValue_0);
      }
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 || _onChangeRef$current.call(onChangeRef, finalValue_0);
      onValueChange(name, finalValue_0);
      return finalValue_0;
    };
    $[30] = error;
    $[31] = getFinalValueRef;
    $[32] = name;
    $[33] = onChangeRef;
    $[34] = onValueChange;
    $[35] = setValue;
    $[36] = validate;
    $[37] = t14;
  } else {
    t14 = $[37];
  }
  var updateValue = t14;
  var t15;
  if ($[38] !== getFinalValueRef || $[39] !== updateValue || $[40] !== valueRef) {
    t15 = function t15() {
      return updateValue(getFinalValueRef.current(valueRef.current));
    };
    $[38] = getFinalValueRef;
    $[39] = updateValue;
    $[40] = valueRef;
    $[41] = t15;
  } else {
    t15 = $[41];
  }
  var effectEvent = React.useEffectEvent(t15);
  var firstSkipRef = React.useRef(true);
  var t16;
  if ($[42] !== effectEvent) {
    t16 = function t16() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    };
    $[42] = effectEvent;
    $[43] = t16;
  } else {
    t16 = $[43];
  }
  var t17;
  if ($[44] !== multiple) {
    t17 = [multiple];
    $[44] = multiple;
    $[45] = t17;
  } else {
    t17 = $[45];
  }
  React.useEffect(t16, t17);
  var computedComponentValue;
  if ($[46] !== items || $[47] !== itemsInfos || $[48] !== multiple || $[49] !== valueItem || $[50] !== value_5) {
    var finalValue_1 = value_5;
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
      if (compare.empty(computedComponentValue) && valueItem) {
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
    $[46] = items;
    $[47] = itemsInfos;
    $[48] = multiple;
    $[49] = valueItem;
    $[50] = value_5;
    $[51] = computedComponentValue;
  } else {
    computedComponentValue = $[51];
  }
  var computedComponentValue_0 = computedComponentValue;
  var _useState21 = React.useState(computedComponentValue_0),
    _useState22 = _slicedToArray(_useState21, 2),
    stateComponentValue = _useState22[0],
    setStateComponentValue = _useState22[1];
  var componentValue = stateComponentValue;
  if (reactHook.useChanged(computedComponentValue_0, true)) {
    if (stateComponentValue && computedComponentValue_0 && compare.equal(stateComponentValue, computedComponentValue_0)) ; else {
      setStateComponentValue(computedComponentValue_0);
      componentValue = computedComponentValue_0;
    }
  }
  var t18;
  if ($[52] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = function t18() {
      setIsOnGetItemLoading(true);
    };
    $[52] = t18;
  } else {
    t18 = $[52];
  }
  var showOnGetItemLoading = t18;
  var t19;
  if ($[53] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = function t19() {
      setIsOnGetItemLoading(false);
    };
    $[53] = t19;
  } else {
    t19 = $[53];
  }
  var hideOnGetItemLoading = t19;
  var t20;
  if ($[54] !== async || $[55] !== onLoadItemsRef || $[56] !== setItems) {
    t20 = function t20() {
      if (!async && onLoadItemsRef.current) {
        showOnGetItemLoading();
        onLoadItemsRef.current().then(function (items_0) {
          setItems(items_0);
          hideOnGetItemLoading();
        });
      }
    };
    $[54] = async;
    $[55] = onLoadItemsRef;
    $[56] = setItems;
    $[57] = t20;
  } else {
    t20 = $[57];
  }
  var effectEvent_0 = React.useEffectEvent(t20);
  var t21;
  if ($[58] !== effectEvent_0) {
    t21 = function t21() {
      return effectEvent_0();
    };
    $[58] = effectEvent_0;
    $[59] = t21;
  } else {
    t21 = $[59];
  }
  var t22;
  if ($[60] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = [];
    $[60] = t22;
  } else {
    t22 = $[60];
  }
  React.useEffect(t21, t22);
  var t23;
  if ($[61] !== async || $[62] !== onAsyncLoadValueItemRef || $[63] !== setItems || $[64] !== valueItem || $[65] !== value_5) {
    t23 = function t23() {
      if (async && onAsyncLoadValueItemRef.current) {
        if (value_5 != null) {
          if (!valueItem) {
            onAsyncLoadValueItemRef.current(value_5).then(function (valueItem_0) {
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
    $[61] = async;
    $[62] = onAsyncLoadValueItemRef;
    $[63] = setItems;
    $[64] = valueItem;
    $[65] = value_5;
    $[66] = t23;
  } else {
    t23 = $[66];
  }
  var effectEvent_1 = React.useEffectEvent(t23);
  var t24;
  if ($[67] !== effectEvent_1) {
    t24 = function t24() {
      return effectEvent_1();
    };
    $[67] = effectEvent_1;
    $[68] = t24;
  } else {
    t24 = $[68];
  }
  var t25;
  if ($[69] !== async || $[70] !== valueItem || $[71] !== value_5) {
    t25 = [async, value_5, valueItem];
    $[69] = async;
    $[70] = valueItem;
    $[71] = value_5;
    $[72] = t25;
  } else {
    t25 = $[72];
  }
  React.useEffect(t24, t25);
  var t26;
  if ($[73] !== async || $[74] !== asyncTimeoutRef || $[75] !== componentValue || $[76] !== inputValue || $[77] !== onLoadItems || $[78] !== setAsyncTimeout || $[79] !== setItems) {
    t26 = function t26() {
      if (async && onLoadItems) {
        reactHook.clearTimeoutRef(asyncTimeoutRef);
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
    $[73] = async;
    $[74] = asyncTimeoutRef;
    $[75] = componentValue;
    $[76] = inputValue;
    $[77] = onLoadItems;
    $[78] = setAsyncTimeout;
    $[79] = setItems;
    $[80] = t26;
  } else {
    t26 = $[80];
  }
  var effectEvent_2 = React.useEffectEvent(t26);
  var t27;
  if ($[81] !== effectEvent_2) {
    t27 = function t27() {
      return effectEvent_2();
    };
    $[81] = effectEvent_2;
    $[82] = t27;
  } else {
    t27 = $[82];
  }
  var t28;
  if ($[83] !== async || $[84] !== inputValue) {
    t28 = [async, inputValue];
    $[83] = async;
    $[84] = inputValue;
    $[85] = t28;
  } else {
    t28 = $[85];
  }
  React.useEffect(t27, t28);
  var t29;
  if ($[86] === Symbol["for"]("react.memo_cache_sentinel")) {
    t29 = function t29() {
      var _textFieldRef$current;
      (_textFieldRef$current = textFieldRef.current) === null || _textFieldRef$current === void 0 || _textFieldRef$current.focus();
    };
    $[86] = t29;
  } else {
    t29 = $[86];
  }
  var focus = t29;
  var t30;
  if ($[87] !== name) {
    t30 = function t30() {
      return name;
    };
    $[87] = name;
    $[88] = t30;
  } else {
    t30 = $[88];
  }
  var t31;
  if ($[89] !== getFinalValueRef || $[90] !== initValueRef) {
    t31 = function t31() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[89] = getFinalValueRef;
    $[90] = initValueRef;
    $[91] = t31;
  } else {
    t31 = $[91];
  }
  var t32;
  if ($[92] !== initValueRef || $[93] !== updateValue) {
    t32 = function t32() {
      return updateValue(initValueRef.current);
    };
    $[92] = initValueRef;
    $[93] = updateValue;
    $[94] = t32;
  } else {
    t32 = $[94];
  }
  var t33;
  if ($[95] !== valueRef) {
    t33 = function t33() {
      return valueRef.current;
    };
    $[95] = valueRef;
    $[96] = t33;
  } else {
    t33 = $[96];
  }
  var t34;
  if ($[97] !== updateValue) {
    t34 = function t34(newValue_4) {
      return updateValue(newValue_4);
    };
    $[97] = updateValue;
    $[98] = t34;
  } else {
    t34 = $[98];
  }
  var t35;
  if ($[99] !== dataRef) {
    t35 = function t35() {
      return dataRef.current;
    };
    $[99] = dataRef;
    $[100] = t35;
  } else {
    t35 = $[100];
  }
  var t36;
  if ($[101] !== setData) {
    t36 = function t36(data_0) {
      return setData(data_0);
    };
    $[101] = setData;
    $[102] = t36;
  } else {
    t36 = $[102];
  }
  var t37;
  if ($[103] !== exceptValue) {
    t37 = function t37() {
      return !!exceptValue;
    };
    $[103] = exceptValue;
    $[104] = t37;
  } else {
    t37 = $[104];
  }
  var t38;
  if ($[105] !== disabled) {
    t38 = function t38() {
      return !!disabled;
    };
    $[105] = disabled;
    $[106] = t38;
  } else {
    t38 = $[106];
  }
  var t39;
  if ($[107] === Symbol["for"]("react.memo_cache_sentinel")) {
    t39 = function t39(disabled_0) {
      return setDisabled(disabled_0);
    };
    $[107] = t39;
  } else {
    t39 = $[107];
  }
  var t40;
  if ($[108] !== hidden) {
    t40 = function t40() {
      return !!hidden;
    };
    $[108] = hidden;
    $[109] = t40;
  } else {
    t40 = $[109];
  }
  var t41;
  if ($[110] === Symbol["for"]("react.memo_cache_sentinel")) {
    t41 = function t41(hidden_0) {
      return setHidden(hidden_0);
    };
    $[110] = t41;
  } else {
    t41 = $[110];
  }
  var t42;
  if ($[111] !== validate || $[112] !== valueRef) {
    t42 = function t42() {
      return validate(valueRef.current);
    };
    $[111] = validate;
    $[112] = valueRef;
    $[113] = t42;
  } else {
    t42 = $[113];
  }
  var t43;
  if ($[114] !== formValueSeparator) {
    t43 = function t43() {
      return formValueSeparator;
    };
    $[114] = formValueSeparator;
    $[115] = t43;
  } else {
    t43 = $[115];
  }
  var t44;
  if ($[116] !== formValueSort) {
    t44 = function t44() {
      return !!formValueSort;
    };
    $[116] = formValueSort;
    $[117] = t44;
  } else {
    t44 = $[117];
  }
  var t45;
  if ($[118] !== itemsRef) {
    t45 = function t45() {
      return itemsRef.current;
    };
    $[118] = itemsRef;
    $[119] = t45;
  } else {
    t45 = $[119];
  }
  var t46;
  if ($[120] !== multiple) {
    t46 = function t46() {
      return !!multiple;
    };
    $[120] = multiple;
    $[121] = t46;
  } else {
    t46 = $[121];
  }
  var t47;
  if ($[122] !== loadingRef) {
    t47 = function t47() {
      return !!loadingRef.current;
    };
    $[122] = loadingRef;
    $[123] = t47;
  } else {
    t47 = $[123];
  }
  var t48;
  if ($[124] !== setLoading) {
    t48 = function t48(loading_0) {
      return setLoading(loading_0);
    };
    $[124] = setLoading;
    $[125] = t48;
  } else {
    t48 = $[125];
  }
  var t49;
  if ($[126] !== async || $[127] !== onLoadItemsRef || $[128] !== setItems) {
    t49 = function t49() {
      if (!async && onLoadItemsRef.current) {
        showOnGetItemLoading();
        onLoadItemsRef.current().then(function (items_2) {
          setItems(items_2);
        })["finally"](function () {
          hideOnGetItemLoading();
        });
      }
    };
    $[126] = async;
    $[127] = onLoadItemsRef;
    $[128] = setItems;
    $[129] = t49;
  } else {
    t49 = $[129];
  }
  var t50;
  if ($[130] !== setErrorErrorHelperText || $[131] !== setItems || $[132] !== t30 || $[133] !== t31 || $[134] !== t32 || $[135] !== t33 || $[136] !== t34 || $[137] !== t35 || $[138] !== t36 || $[139] !== t37 || $[140] !== t38 || $[141] !== t40 || $[142] !== t42 || $[143] !== t43 || $[144] !== t44 || $[145] !== t45 || $[146] !== t46 || $[147] !== t47 || $[148] !== t48 || $[149] !== t49) {
    t50 = {
      getType: _temp4,
      getName: t30,
      getReset: t31,
      reset: t32,
      getValue: t33,
      setValue: t34,
      getData: t35,
      setData: t36,
      isExceptValue: t37,
      isDisabled: t38,
      setDisabled: t39,
      isHidden: t40,
      setHidden: t41,
      focus: focus,
      focusValidate: focus,
      validate: t42,
      setError: setErrorErrorHelperText,
      getFormValueSeparator: t43,
      isFormValueSort: t44,
      getItems: t45,
      setItems: setItems,
      isMultiple: t46,
      getLoading: t47,
      setLoading: t48,
      reloadItems: t49,
      setInputValue: setInputValue
    };
    $[130] = setErrorErrorHelperText;
    $[131] = setItems;
    $[132] = t30;
    $[133] = t31;
    $[134] = t32;
    $[135] = t33;
    $[136] = t34;
    $[137] = t35;
    $[138] = t36;
    $[139] = t37;
    $[140] = t38;
    $[141] = t40;
    $[142] = t42;
    $[143] = t43;
    $[144] = t44;
    $[145] = t45;
    $[146] = t46;
    $[147] = t47;
    $[148] = t48;
    $[149] = t49;
    $[150] = t50;
  } else {
    t50 = $[150];
  }
  var commands = t50;
  var t51;
  if ($[151] !== id || $[152] !== onAddValueItem) {
    t51 = function t51(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[151] = id;
    $[152] = onAddValueItem;
    $[153] = t51;
  } else {
    t51 = $[153];
  }
  var t52;
  if ($[154] !== id || $[155] !== onRemoveValueItem) {
    t52 = function t52() {
      return onRemoveValueItem(id);
    };
    $[154] = id;
    $[155] = onRemoveValueItem;
    $[156] = t52;
  } else {
    t52 = $[156];
  }
  reactHook.useForwardRef(ref, commands, t51, t52);
  var t53;
  if ($[157] !== getFinalValueRef || $[158] !== multiple || $[159] !== name || $[160] !== onAddItem || $[161] !== onRequestSearchSubmit || $[162] !== onValueChangeByUser || $[163] !== updateValue || $[164] !== valueRef) {
    t53 = function t53(componentValue_0, reason, details) {
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
        if (!compare.equal(valueRef.current, finalValue_2)) {
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
    $[157] = getFinalValueRef;
    $[158] = multiple;
    $[159] = name;
    $[160] = onAddItem;
    $[161] = onRequestSearchSubmit;
    $[162] = onValueChangeByUser;
    $[163] = updateValue;
    $[164] = valueRef;
    $[165] = t53;
  } else {
    t53 = $[165];
  }
  var handleChange = t53;
  var t54;
  if ($[166] !== getOptionDisabled) {
    t54 = function t54(option) {
      if (getOptionDisabled) {
        return option.disabled || getOptionDisabled(option);
      } else {
        return !!option.disabled;
      }
    };
    $[166] = getOptionDisabled;
    $[167] = t54;
  } else {
    t54 = $[167];
  }
  var handleGetOptionDisabled = t54;
  var style;
  if ($[168] !== hidden || $[169] !== initStyle || $[170] !== width) {
    style = _objectSpread2({
      minWidth: 120
    }, initStyle);
    if (hidden) {
      style.display = "none";
    }
    if (width != null) {
      style.width = width;
    }
    $[168] = hidden;
    $[169] = initStyle;
    $[170] = width;
    $[171] = style;
  } else {
    style = $[171];
  }
  var t55;
  if ($[172] !== items) {
    t55 = items || [];
    $[172] = items;
    $[173] = t55;
  } else {
    t55 = $[173];
  }
  var t56;
  if ($[174] !== className) {
    t56 = classNames(className, "PFormValueItem", "PFormAutocomplete");
    $[174] = className;
    $[175] = t56;
  } else {
    t56 = $[175];
  }
  var t57 = !width && fullWidth;
  var t58 = componentValue;
  var t59 = loading || isOnGetItemLoading;
  var t60;
  if ($[176] !== handleChange) {
    t60 = function t60(e, value_8, reason_0, details_0) {
      return handleChange(value_8, reason_0, details_0);
    };
    $[176] = handleChange;
    $[177] = t60;
  } else {
    t60 = $[177];
  }
  var t61;
  if ($[178] !== onRenderItem) {
    t61 = function t61(props, option_1) {
      return /*#__PURE__*/React.createElement("li", _extends({}, props, {
        key: "".concat(option_1.value)
      }), onRenderItem ? onRenderItem(option_1) : option_1.label);
    };
    $[178] = onRenderItem;
    $[179] = t61;
  } else {
    t61 = $[179];
  }
  var t62;
  if ($[180] === Symbol["for"]("react.memo_cache_sentinel")) {
    t62 = function t62(event, newInputValue, reason_1) {
      if (reason_1 === "input") {
        setInputValue(newInputValue);
      } else {
        if (reason_1 === "reset") {
          setInputValue(undefined);
        }
      }
    };
    $[180] = t62;
  } else {
    t62 = $[180];
  }
  var t63;
  if ($[181] !== multiple || $[182] !== onRenderTag || $[183] !== size || $[184] !== variant) {
    t63 = multiple ? function (value_9, getItemProps) {
      if (Array.isArray(value_9)) {
        return value_9.map(function (option_2, index) {
          return /*#__PURE__*/React.createElement(material.Chip, _extends({
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
        return /*#__PURE__*/React.createElement(material.Chip, _extends({
          size: "small",
          style: variant === "outlined" && size === "small" ? {
            marginTop: 2,
            marginBottom: 0
          } : undefined,
          label: onRenderTag ? onRenderTag(value_9) : value_9.label
        }, getItemProps({
          index: 0
        })));
      }
    } : undefined;
    $[181] = multiple;
    $[182] = onRenderTag;
    $[183] = size;
    $[184] = variant;
    $[185] = t63;
  } else {
    t63 = $[185];
  }
  var t64;
  if ($[186] !== autoFocus || $[187] !== color || $[188] !== disabled || $[189] !== error || $[190] !== errorHelperText || $[191] !== focused || $[192] !== helperText || $[193] !== isOnGetItemLoading || $[194] !== label || $[195] !== labelIcon || $[196] !== labelShrink || $[197] !== loading || $[198] !== name || $[199] !== onBlurRef || $[200] !== onFocusRef || $[201] !== placeholder || $[202] !== readOnly || $[203] !== required || $[204] !== size || $[205] !== variant) {
    t64 = function t64(params) {
      var _params$inputProps;
      var slotProps = {
        input: _objectSpread2(_objectSpread2({}, params.InputProps), {}, {
          autoFocus: autoFocus,
          style: {
            paddingTop: variant === "outlined" && size === "small" ? 7 : undefined,
            paddingBottom: variant === "outlined" && size === "small" ? 5 : undefined,
            marginTop: variant === "outlined" && size === "small" ? -1 : undefined
          },
          endAdornment: /*#__PURE__*/React.createElement(React.Fragment, null, loading || isOnGetItemLoading ? /*#__PURE__*/React.createElement(material.CircularProgress, {
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
    $[186] = autoFocus;
    $[187] = color;
    $[188] = disabled;
    $[189] = error;
    $[190] = errorHelperText;
    $[191] = focused;
    $[192] = helperText;
    $[193] = isOnGetItemLoading;
    $[194] = label;
    $[195] = labelIcon;
    $[196] = labelShrink;
    $[197] = loading;
    $[198] = name;
    $[199] = onBlurRef;
    $[200] = onFocusRef;
    $[201] = placeholder;
    $[202] = readOnly;
    $[203] = required;
    $[204] = size;
    $[205] = variant;
    $[206] = t64;
  } else {
    t64 = $[206];
  }
  var t65;
  if ($[207] !== disableClearable || $[208] !== disablePortal || $[209] !== disabled || $[210] !== getLimitTagsText || $[211] !== handleGetOptionDisabled || $[212] !== limitTags || $[213] !== loadingText || $[214] !== multiple || $[215] !== noOptionsText || $[216] !== openOnFocus || $[217] !== readOnly || $[218] !== style || $[219] !== sx || $[220] !== t55 || $[221] !== t56 || $[222] !== t57 || $[223] !== t58 || $[224] !== t59 || $[225] !== t60 || $[226] !== t61 || $[227] !== t63 || $[228] !== t64) {
    t65 = /*#__PURE__*/React.createElement(material.Autocomplete, {
      options: t55,
      className: t56,
      sx: sx,
      multiple: multiple,
      fullWidth: t57,
      openOnFocus: openOnFocus,
      disableClearable: disableClearable,
      disablePortal: disablePortal,
      noOptionsText: noOptionsText,
      value: t58,
      style: style,
      isOptionEqualToValue: _temp6,
      getOptionDisabled: handleGetOptionDisabled,
      disabled: disabled,
      readOnly: readOnly,
      loading: t59,
      loadingText: loadingText,
      limitTags: limitTags,
      getLimitTagsText: getLimitTagsText,
      onChange: t60,
      renderOption: t61,
      onInputChange: t62,
      renderValue: t63,
      renderInput: t64
    });
    $[207] = disableClearable;
    $[208] = disablePortal;
    $[209] = disabled;
    $[210] = getLimitTagsText;
    $[211] = handleGetOptionDisabled;
    $[212] = limitTags;
    $[213] = loadingText;
    $[214] = multiple;
    $[215] = noOptionsText;
    $[216] = openOnFocus;
    $[217] = readOnly;
    $[218] = style;
    $[219] = sx;
    $[220] = t55;
    $[221] = t56;
    $[222] = t57;
    $[223] = t58;
    $[224] = t59;
    $[225] = t60;
    $[226] = t61;
    $[227] = t63;
    $[228] = t64;
    $[229] = t65;
  } else {
    t65 = $[229];
  }
  return t65;
}
function _temp6(option_0, value_7) {
  return option_0.value === value_7.value;
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
  var value_2 = t0.value;
  res[value_2.toString()] = value_2;
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
  var $ = compilerRuntime.c(30);
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
  var theme = material.useTheme();
  var t1;
  if ($[8] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      backgroundColor: material.darken("#fff", 0.1)
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
        _t2 = material.darken(theme.palette.primary.main, 0.2);
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
    t7 = /*#__PURE__*/React.createElement(material.Button, _extends({}, props, {
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
  var $ = compilerRuntime.c(39);
  var selectYear = t0.selectYear,
    activeYear = t0.activeYear,
    availableDate = t0.availableDate,
    initOnSelect = t0.onSelect;
  var containerRef = React.useRef(null);
  var simpleBarRef = React.useRef(null);
  var onSelectRef = reactHook.useAutoUpdateRef(initOnSelect);
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
  var effectEvent = React.useEffectEvent(t1);
  var t2;
  if ($[2] !== effectEvent) {
    t2 = function t2() {
      return effectEvent();
    };
    $[2] = effectEvent;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var t3;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = [];
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  React.useEffect(t2, t3);
  var t4;
  if ($[5] !== onSelectRef) {
    t4 = function t4(e) {
      onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute("data-id")));
    };
    $[5] = onSelectRef;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  var handleClick = t4;
  var T0;
  var T1;
  var t10;
  var t11;
  var t12;
  var t5;
  var t6;
  var t7;
  var t8;
  var t9;
  if ($[7] !== activeYear || $[8] !== availableDate || $[9] !== handleClick || $[10] !== selectYear) {
    var today = dayjs().startOf("date");
    t11 = containerRef;
    t12 = "PrivateYearSelect";
    T1 = SimpleBar;
    if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
      t9 = {
        ref: simpleBarRef
      };
      t10 = {
        height: "100%"
      };
      $[21] = t10;
      $[22] = t9;
    } else {
      t10 = $[21];
      t9 = $[22];
    }
    T0 = material.Grid;
    t5 = true;
    if ($[23] === Symbol["for"]("react.memo_cache_sentinel")) {
      t6 = {
        padding: "5px 10px"
      };
      $[23] = t6;
    } else {
      t6 = $[23];
    }
    t7 = 1;
    t8 = YEARS$1.map(function (y) {
      var isToday = y === today.year();
      var isActive = y === activeYear;
      var isSelected = y === selectYear;
      var disabled = !!availableDate[0] && y < availableDate[0].year || !!availableDate[1] && y > availableDate[1].year;
      return /*#__PURE__*/React.createElement(material.Grid, {
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
    $[7] = activeYear;
    $[8] = availableDate;
    $[9] = handleClick;
    $[10] = selectYear;
    $[11] = T0;
    $[12] = T1;
    $[13] = t10;
    $[14] = t11;
    $[15] = t12;
    $[16] = t5;
    $[17] = t6;
    $[18] = t7;
    $[19] = t8;
    $[20] = t9;
  } else {
    T0 = $[11];
    T1 = $[12];
    t10 = $[13];
    t11 = $[14];
    t12 = $[15];
    t5 = $[16];
    t6 = $[17];
    t7 = $[18];
    t8 = $[19];
    t9 = $[20];
  }
  var t13;
  if ($[24] !== T0 || $[25] !== t5 || $[26] !== t6 || $[27] !== t7 || $[28] !== t8) {
    t13 = /*#__PURE__*/React.createElement(T0, {
      container: t5,
      style: t6,
      spacing: t7
    }, t8);
    $[24] = T0;
    $[25] = t5;
    $[26] = t6;
    $[27] = t7;
    $[28] = t8;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  var t14;
  if ($[30] !== T1 || $[31] !== t10 || $[32] !== t13 || $[33] !== t9) {
    t14 = /*#__PURE__*/React.createElement(T1, {
      scrollableNodeProps: t9,
      style: t10
    }, t13);
    $[30] = T1;
    $[31] = t10;
    $[32] = t13;
    $[33] = t9;
    $[34] = t14;
  } else {
    t14 = $[34];
  }
  var t15;
  if ($[35] !== t11 || $[36] !== t12 || $[37] !== t14) {
    t15 = /*#__PURE__*/React.createElement("div", {
      ref: t11,
      className: t12
    }, t14);
    $[35] = t11;
    $[36] = t12;
    $[37] = t14;
    $[38] = t15;
  } else {
    t15 = $[38];
  }
  return t15;
};insertStyle(".PrivateMonthSelect{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff}.PrivateMonthSelect button{font-size:15px;font-weight:400;border-radius:18px}");var MONTHS$1 = new Array(12).fill(0);
for (var i$5 = 0; i$5 < 12; i$5 += 1) {
  MONTHS$1[i$5] = i$5;
}
var PrivateMonthSelect = function PrivateMonthSelect(t0) {
  var $ = compilerRuntime.c(22);
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
    T0 = material.Grid;
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
      return /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(29);
  var ref = t0.ref,
    list = t0.list,
    listInterval = t0.listInterval,
    unit = t0.unit,
    value = t0.value,
    t1 = t0.cols,
    disableList = t0.disableList,
    initOnSelect = t0.onSelect;
  var cols = t1 === undefined ? 1 : t1;
  var containerRef = React.useRef(null);
  var simpleBarRef = React.useRef(null);
  var scrollTimerRef = React.useRef(undefined);
  var onSelectRef = reactHook.useAutoUpdateRef(initOnSelect);
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
    };
    $[1] = value;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  var effectEvent = React.useEffectEvent(t3);
  var t4;
  if ($[3] !== effectEvent) {
    t4 = function t4() {
      effectEvent();
      return function () {
        if (scrollTimerRef.current) {
          clearInterval(scrollTimerRef.current);
          scrollTimerRef.current = undefined;
        }
      };
    };
    $[3] = effectEvent;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  var t5;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = [];
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  React.useEffect(t4, t5);
  var t6;
  if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = {
      scrollToValue: scrollToValue
    };
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  reactHook.useForwardRef(ref, t6);
  var t7;
  if ($[7] !== onSelectRef) {
    t7 = function t7(e) {
      onSelectRef.current && onSelectRef.current(Number(e.target.getAttribute("data-id")));
    };
    $[7] = onSelectRef;
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  var handleClick = t7;
  var t8;
  var t9;
  if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = {
      ref: simpleBarRef
    };
    t9 = {
      height: "100%"
    };
    $[9] = t8;
    $[10] = t9;
  } else {
    t8 = $[9];
    t9 = $[10];
  }
  var t10;
  if ($[11] !== cols || $[12] !== disableList || $[13] !== handleClick || $[14] !== list || $[15] !== listInterval || $[16] !== unit || $[17] !== value) {
    var _t;
    if ($[19] !== listInterval) {
      _t = function _t(v) {
        return listInterval ? v % listInterval === 0 : true;
      };
      $[19] = listInterval;
      $[20] = _t;
    } else {
      _t = $[20];
    }
    var t12;
    if ($[21] !== cols || $[22] !== disableList || $[23] !== handleClick || $[24] !== unit || $[25] !== value) {
      t12 = function t12(v_0) {
        var isSelected = v_0 === value;
        var disabled = !!disableList && disableList.includes(v_0);
        return /*#__PURE__*/React.createElement(material.Grid, {
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
      $[21] = cols;
      $[22] = disableList;
      $[23] = handleClick;
      $[24] = unit;
      $[25] = value;
      $[26] = t12;
    } else {
      t12 = $[26];
    }
    t10 = list.filter(_t).map(t12);
    $[11] = cols;
    $[12] = disableList;
    $[13] = handleClick;
    $[14] = list;
    $[15] = listInterval;
    $[16] = unit;
    $[17] = value;
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var t11;
  if ($[27] !== t10) {
    t11 = /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "PrivateTimeSelect"
    }, /*#__PURE__*/React.createElement(SimpleBar, {
      scrollableNodeProps: t8,
      style: t9
    }, /*#__PURE__*/React.createElement(material.Grid, {
      container: true
    }, t10)));
    $[27] = t10;
    $[28] = t11;
  } else {
    t11 = $[28];
  }
  return t11;
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
  var $ = compilerRuntime.c(76);
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
    t7 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t13 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t14 = (time === "minute" || time === "second") && /*#__PURE__*/React.createElement(material.Grid, {
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
    t15 = time === "second" && /*#__PURE__*/React.createElement(material.Grid, {
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
    t16 = /*#__PURE__*/React.createElement(material.Grid, {
      className: "time-select-wrap"
    }, /*#__PURE__*/React.createElement(material.Grid, {
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
    t17 = onClose && /*#__PURE__*/React.createElement(material.Grid, {
      className: "action-buttons"
    }, /*#__PURE__*/React.createElement(material.Button, {
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
    t18 = /*#__PURE__*/React.createElement(material.Grid, {
      className: "time"
    }, /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(86);
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
  var hourSelectRef = React.useRef(null);
  var minuteSelectRef = React.useRef(null);
  var secondSelectRef = React.useRef(null);
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
  var _useState = React.useState(t4),
    _useState2 = _slicedToArray(_useState, 2),
    month = _useState2[0],
    setMonth = _useState2[1];
  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    activeMonthValue = _useState4[0],
    setActiveMonthValue = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    yearSelectOpen = _useState6[0],
    setYearSelectOpen = _useState6[1];
  var _useState7 = React.useState(false),
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
  if ($[27] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6() {
      setActiveMonthValue(null);
    };
    $[27] = t6;
  } else {
    t6 = $[27];
  }
  var effectEvent = React.useEffectEvent(t6);
  var t7;
  if ($[28] !== effectEvent || $[29] !== yearSelectOpen) {
    t7 = function t7() {
      if (!yearSelectOpen) {
        effectEvent();
      }
    };
    $[28] = effectEvent;
    $[29] = yearSelectOpen;
    $[30] = t7;
  } else {
    t7 = $[30];
  }
  var t8;
  if ($[31] !== yearSelectOpen) {
    t8 = [yearSelectOpen];
    $[31] = yearSelectOpen;
    $[32] = t8;
  } else {
    t8 = $[32];
  }
  React.useEffect(t7, t8);
  var leftArrowOnClickRef = React.useRef(undefined);
  var rightArrowOnClickRef = React.useRef(undefined);
  var t9;
  if ($[33] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(props_0) {
      leftArrowOnClickRef.current = props_0.onClick;
      return /*#__PURE__*/React.createElement(material.IconButton, props_0);
    };
    $[33] = t9;
  } else {
    t9 = $[33];
  }
  var LeftArrowButton = t9;
  var t10;
  if ($[34] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(props_1) {
      rightArrowOnClickRef.current = props_1.onClick;
      return /*#__PURE__*/React.createElement(material.IconButton, props_1);
    };
    $[34] = t10;
  } else {
    t10 = $[34];
  }
  var RightArrowButton = t10;
  var t11;
  if ($[35] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[35] = t11;
  } else {
    t11 = $[35];
  }
  var previousMonth = t11;
  var t12;
  if ($[36] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[36] = t12;
  } else {
    t12 = $[36];
  }
  var nextMonth = t12;
  var t13;
  if ($[37] !== month) {
    t13 = function t13(year) {
      setMonth(month.set("year", year));
      setActiveMonthValue(month.set("year", year));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    };
    $[37] = month;
    $[38] = t13;
  } else {
    t13 = $[38];
  }
  var handleYearSelect = t13;
  var t14;
  if ($[39] !== month) {
    t14 = function t14(m) {
      setMonth(month.set("month", m));
      setActiveMonthValue(month.set("month", m));
      setMonthSelectOpen(false);
    };
    $[39] = month;
    $[40] = t14;
  } else {
    t14 = $[40];
  }
  var handleMonthSelect = t14;
  var t15;
  if ($[41] !== value) {
    t15 = function t15(props_2) {
      return /*#__PURE__*/React.createElement(xDatePickers.PickersDay, _extends({}, props_2, {
        selected: props_2.day.isSame(value, "date")
      }));
    };
    $[41] = value;
    $[42] = t15;
  } else {
    t15 = $[42];
  }
  var handleRenderDay = t15;
  var t16;
  if ($[43] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = {};
    $[43] = t16;
  } else {
    t16 = $[43];
  }
  reactHook.useForwardRef(ref, t16);
  var t17;
  if ($[44] !== availableDate || $[45] !== _onChange || $[46] !== time || $[47] !== type) {
    t17 = function t17(date, label) {
      var disabled = !isDateAvailable(date, availableDate, "day");
      return /*#__PURE__*/React.createElement(material.Button, {
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
    $[44] = availableDate;
    $[45] = _onChange;
    $[46] = time;
    $[47] = type;
    $[48] = t17;
  } else {
    t17 = $[48];
  }
  var getActionButton = t17;
  var t18;
  if ($[49] !== type) {
    t18 = classNames("PrivateStaticDatePicker", type);
    $[49] = type;
    $[50] = t18;
  } else {
    t18 = $[50];
  }
  var t19;
  if ($[51] !== activeMonthValue || $[52] !== availableDate || $[53] !== disableFuture || $[54] !== disablePast || $[55] !== getActionButton || $[56] !== handleMonthSelect || $[57] !== handleRenderDay || $[58] !== handleYearSelect || $[59] !== maxDate || $[60] !== minDate || $[61] !== month || $[62] !== monthSelectOpen || $[63] !== _onChange || $[64] !== _onMonthChange || $[65] !== props || $[66] !== type || $[67] !== value || $[68] !== yearSelectOpen) {
    t19 = type !== "time" && /*#__PURE__*/React.createElement(material.Grid, null, /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      direction: "column"
    }, /*#__PURE__*/React.createElement(material.Grid, {
      sx: {
        p: 2,
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      className: "month-change-arrow-wrap"
    }, /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1,
      className: "month-title-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(material.Button, {
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
    }, month.format("YYYY\uB144"), /*#__PURE__*/React.createElement(material.Icon, null, yearSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))), /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(material.Button, {
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
    }, month.format("M\uC6D4"), /*#__PURE__*/React.createElement(material.Icon, null, monthSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))))), !yearSelectOpen && !monthSelectOpen && /*#__PURE__*/React.createElement(material.Grid, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(material.IconButton, {
      onClick: previousMonth,
      sx: {
        mr: 1
      }
    }, /*#__PURE__*/React.createElement(material.Icon, null, "keyboard_arrow_left")), /*#__PURE__*/React.createElement(material.IconButton, {
      onClick: nextMonth
    }, /*#__PURE__*/React.createElement(material.Icon, null, "keyboard_arrow_right"))))), /*#__PURE__*/React.createElement(material.Grid, {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(xDatePickers.StaticDatePicker, _extends({}, props, {
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
    })), /*#__PURE__*/React.createElement(material.Grid, {
      className: "action-buttons"
    }, getActionButton(dayjs().startOf("d").subtract(1, "month").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC9C0\uB09C\uB2EC"), getActionButton(dayjs().startOf("d").subtract(7, "d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC9C0\uB09C\uC8FC"), getActionButton(dayjs().startOf("d").subtract(1, "d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC5B4\uC81C"), getActionButton(dayjs().startOf("d").set("hour", value ? value.hour() : 0).set("minute", value ? value.minute() : 0).set("second", value ? value.second() : 0), "\uC624\uB298"))));
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
    t21 = /*#__PURE__*/React.createElement(material.Grid, {
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
function _temp$k() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}var _excluded$d = ["className"];
var PrivateStyledTooltip = material.styled(function (_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded$d);
  return /*#__PURE__*/React.createElement(material.Tooltip, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty({}, "& .".concat(material.tooltipClasses.tooltip), {
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
  var $ = compilerRuntime.c(265);
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
  var id = React.useId();
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var privateStaticDatePickerRef = React.useRef(null);
  var textFieldInputRef = React.useRef(undefined);
  var closeTimeoutRef = React.useRef(undefined);
  var mouseDownTimeRef = React.useRef(undefined);
  var datePickerErrorRef = React.useRef(null);
  var openValueRef = React.useRef(null);
  var onValidateRef = reactHook.useAutoUpdateRef(initOnValidate);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
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
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    errorHelperText = _useState4[0],
    setErrorHelperText = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    timeError = _useState6[0],
    _setTimeError = _useState6[1];
  var timeErrorRef = reactHook.useAutoUpdateRef(timeError);
  var t4;
  if ($[46] !== timeErrorRef) {
    t4 = function t4(value) {
      _setTimeError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        timeErrorRef.current = newValue;
        return newValue;
      });
    };
    $[46] = timeErrorRef;
    $[47] = t4;
  } else {
    t4 = $[47];
  }
  var setTimeError = t4;
  var _useState7 = React.useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t5;
  if ($[48] !== errorRef) {
    t5 = function t5(value_0) {
      _setError(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        errorRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[48] = errorRef;
    $[49] = t5;
  } else {
    t5 = $[49];
  }
  var setError = t5;
  var _useState9 = React.useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t6;
  if ($[50] !== dataRef) {
    t6 = function t6(value_1) {
      _setData(function (prev_1) {
        var newValue_1 = typeof value_1 === "function" ? value_1(prev_1) : value_1;
        dataRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[50] = dataRef;
    $[51] = t6;
  } else {
    t6 = $[51];
  }
  var setData = t6;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = React.useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState11 = React.useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t7 = !!disablePast;
  var t8 = !!disableFuture;
  var t9;
  if ($[52] !== maxDate || $[53] !== minDate || $[54] !== t7 || $[55] !== t8) {
    t9 = makeAvailableDate(minDate, maxDate, t7, t8);
    $[52] = maxDate;
    $[53] = minDate;
    $[54] = t7;
    $[55] = t8;
    $[56] = t9;
  } else {
    t9 = $[56];
  }
  var availableDate = t9;
  var t10;
  if ($[57] !== setError) {
    t10 = function t10(error_0, helperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? helperText_0 : undefined);
    };
    $[57] = setError;
    $[58] = t10;
  } else {
    t10 = $[58];
  }
  var setErrorErrorHelperText = t10;
  var t11;
  if ($[59] !== onValidateRef || $[60] !== required || $[61] !== setErrorErrorHelperText || $[62] !== timeErrorRef) {
    t11 = function t11(value_2) {
      if (required && compare.empty(value_2)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (value_2 && !value_2.isValid()) {
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
        var onValidateResult = onValidateRef.current(value_2);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[59] = onValidateRef;
    $[60] = required;
    $[61] = setErrorErrorHelperText;
    $[62] = timeErrorRef;
    $[63] = t11;
  } else {
    t11 = $[63];
  }
  var validate = t11;
  var validateRef = reactHook.useAutoUpdateRef(validate);
  var t12;
  if ($[64] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12() {
      var _textFieldInputRef$cu;
      (_textFieldInputRef$cu = textFieldInputRef.current) === null || _textFieldInputRef$cu === void 0 || _textFieldInputRef$cu.focus();
    };
    $[64] = t12;
  } else {
    t12 = $[64];
  }
  var focus = t12;
  var _useState13 = React.useState(initValue),
    _useState14 = _slicedToArray(_useState13, 2),
    value_3 = _useState14[0],
    _setValue = _useState14[1];
  reactHook.useChanged(initValue) && _setValue(initValue);
  var valueRef = reactHook.useAutoUpdateRef(value_3);
  var t13;
  if ($[65] !== valueRef) {
    t13 = function t13(value_4) {
      _setValue(function (prev_2) {
        var newValue_2 = typeof value_4 === "function" ? value_4(prev_2) : value_4;
        valueRef.current = newValue_2;
        return newValue_2;
      });
    };
    $[65] = valueRef;
    $[66] = t13;
  } else {
    t13 = $[66];
  }
  var setValue = t13;
  var _useState15 = React.useState(value_3),
    _useState16 = _slicedToArray(_useState15, 2),
    inputValue = _useState16[0],
    setInputValue = _useState16[1];
  reactHook.useChanged(value_3) && setInputValue(value_3);
  var t14;
  if ($[67] !== availableDate || $[68] !== errorRef || $[69] !== name || $[70] !== onChangeRef || $[71] !== onValueChange || $[72] !== setTimeError || $[73] !== setValue || $[74] !== time || $[75] !== type || $[76] !== validateRef) {
    t14 = function t14(newValue_3) {
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
    $[67] = availableDate;
    $[68] = errorRef;
    $[69] = name;
    $[70] = onChangeRef;
    $[71] = onValueChange;
    $[72] = setTimeError;
    $[73] = setValue;
    $[74] = time;
    $[75] = type;
    $[76] = validateRef;
    $[77] = t14;
  } else {
    t14 = $[77];
  }
  var updateValue = t14;
  var t15;
  if ($[78] !== validateRef || $[79] !== valueRef) {
    t15 = function t15() {
      return validateRef.current(valueRef.current);
    };
    $[78] = validateRef;
    $[79] = valueRef;
    $[80] = t15;
  } else {
    t15 = $[80];
  }
  var effectEvent = React.useEffectEvent(t15);
  var t16;
  if ($[81] !== effectEvent || $[82] !== error || $[83] !== timeError) {
    t16 = function t16() {
      if (error && !timeError) {
        effectEvent();
      }
    };
    $[81] = effectEvent;
    $[82] = error;
    $[83] = timeError;
    $[84] = t16;
  } else {
    t16 = $[84];
  }
  var t17;
  if ($[85] !== error || $[86] !== timeError) {
    t17 = [error, timeError];
    $[85] = error;
    $[86] = timeError;
    $[87] = t17;
  } else {
    t17 = $[87];
  }
  React.useEffect(t16, t17);
  var t18;
  if ($[88] !== isOpen || $[89] !== name || $[90] !== onRequestSearchSubmit || $[91] !== value_3) {
    t18 = function t18() {
      if (isOpen) {
        openValueRef.current = value_3;
      } else {
        if (openValueRef.current !== value_3) {
          var runOnRequestSearchSubmit;
          if (openValueRef.current && value_3) {
            runOnRequestSearchSubmit = !openValueRef.current.isSame(value_3, "second");
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, value_3);
          }
        }
      }
    };
    $[88] = isOpen;
    $[89] = name;
    $[90] = onRequestSearchSubmit;
    $[91] = value_3;
    $[92] = t18;
  } else {
    t18 = $[92];
  }
  var effectEvent_0 = React.useEffectEvent(t18);
  var t19;
  if ($[93] !== effectEvent_0) {
    t19 = function t19() {
      return effectEvent_0();
    };
    $[93] = effectEvent_0;
    $[94] = t19;
  } else {
    t19 = $[94];
  }
  var t20;
  if ($[95] !== isOpen) {
    t20 = [isOpen];
    $[95] = isOpen;
    $[96] = t20;
  } else {
    t20 = $[96];
  }
  React.useEffect(t19, t20);
  var t21;
  if ($[97] !== name) {
    t21 = function t21() {
      return name;
    };
    $[97] = name;
    $[98] = t21;
  } else {
    t21 = $[98];
  }
  var t22;
  if ($[99] !== initValueRef) {
    t22 = function t22() {
      return initValueRef.current;
    };
    $[99] = initValueRef;
    $[100] = t22;
  } else {
    t22 = $[100];
  }
  var t23;
  if ($[101] !== initValueRef || $[102] !== updateValue) {
    t23 = function t23() {
      return updateValue(initValueRef.current);
    };
    $[101] = initValueRef;
    $[102] = updateValue;
    $[103] = t23;
  } else {
    t23 = $[103];
  }
  var t24;
  if ($[104] !== valueRef) {
    t24 = function t24() {
      return valueRef.current;
    };
    $[104] = valueRef;
    $[105] = t24;
  } else {
    t24 = $[105];
  }
  var t25;
  if ($[106] !== dataRef) {
    t25 = function t25() {
      return dataRef.current;
    };
    $[106] = dataRef;
    $[107] = t25;
  } else {
    t25 = $[107];
  }
  var t26;
  if ($[108] !== exceptValue) {
    t26 = function t26() {
      return !!exceptValue;
    };
    $[108] = exceptValue;
    $[109] = t26;
  } else {
    t26 = $[109];
  }
  var t27;
  if ($[110] !== disabled) {
    t27 = function t27() {
      return !!disabled;
    };
    $[110] = disabled;
    $[111] = t27;
  } else {
    t27 = $[111];
  }
  var t28;
  if ($[112] !== hidden) {
    t28 = function t28() {
      return !!hidden;
    };
    $[112] = hidden;
    $[113] = t28;
  } else {
    t28 = $[113];
  }
  var t29;
  if ($[114] !== validateRef || $[115] !== valueRef) {
    t29 = function t29() {
      return validateRef.current(valueRef.current);
    };
    $[114] = validateRef;
    $[115] = valueRef;
    $[116] = t29;
  } else {
    t29 = $[116];
  }
  var t30;
  if ($[117] !== initFormValueFormat || $[118] !== time || $[119] !== type) {
    t30 = function t30() {
      return initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time);
    };
    $[117] = initFormValueFormat;
    $[118] = time;
    $[119] = type;
    $[120] = t30;
  } else {
    t30 = $[120];
  }
  var t31;
  if ($[121] !== setData || $[122] !== setErrorErrorHelperText || $[123] !== t21 || $[124] !== t22 || $[125] !== t23 || $[126] !== t24 || $[127] !== t25 || $[128] !== t26 || $[129] !== t27 || $[130] !== t28 || $[131] !== t29 || $[132] !== t30 || $[133] !== updateValue) {
    t31 = {
      getType: _temp$j,
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
      setError: setErrorErrorHelperText,
      getFormValueFormat: t30
    };
    $[121] = setData;
    $[122] = setErrorErrorHelperText;
    $[123] = t21;
    $[124] = t22;
    $[125] = t23;
    $[126] = t24;
    $[127] = t25;
    $[128] = t26;
    $[129] = t27;
    $[130] = t28;
    $[131] = t29;
    $[132] = t30;
    $[133] = updateValue;
    $[134] = t31;
  } else {
    t31 = $[134];
  }
  var commands = t31;
  var t32;
  if ($[135] !== id || $[136] !== onAddValueItem) {
    t32 = function t32(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[135] = id;
    $[136] = onAddValueItem;
    $[137] = t32;
  } else {
    t32 = $[137];
  }
  var t33;
  if ($[138] !== id || $[139] !== onRemoveValueItem) {
    t33 = function t33() {
      return onRemoveValueItem(id);
    };
    $[138] = id;
    $[139] = onRemoveValueItem;
    $[140] = t33;
  } else {
    t33 = $[140];
  }
  reactHook.useForwardRef(ref, commands, t32, t33);
  var t34;
  if ($[141] !== availableDate || $[142] !== isOpen || $[143] !== name || $[144] !== onRequestSearchSubmit || $[145] !== onValueChangeByUser || $[146] !== time || $[147] !== type || $[148] !== updateValue) {
    t34 = function t34(unit, newValue_4, keyboardInputValue) {
      var isUpdateValue = true;
      if (compare.notEmpty(keyboardInputValue)) {
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
        if (compare.notEmpty(keyboardInputValue)) {
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
    $[141] = availableDate;
    $[142] = isOpen;
    $[143] = name;
    $[144] = onRequestSearchSubmit;
    $[145] = onValueChangeByUser;
    $[146] = time;
    $[147] = type;
    $[148] = updateValue;
    $[149] = t34;
  } else {
    t34 = $[149];
  }
  var handleChange = t34;
  var t35;
  if ($[150] === Symbol["for"]("react.memo_cache_sentinel")) {
    t35 = function t35() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[150] = t35;
  } else {
    t35 = $[150];
  }
  var handleContainerFocus = t35;
  var t36;
  if ($[151] === Symbol["for"]("react.memo_cache_sentinel")) {
    t36 = function t36() {
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
    $[151] = t36;
  } else {
    t36 = $[151];
  }
  var handleContainerBlur = t36;
  var t37;
  if ($[152] === Symbol["for"]("react.memo_cache_sentinel")) {
    t37 = function t37() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[152] = t37;
  } else {
    t37 = $[152];
  }
  var handleContainerMouseDown = t37;
  var readOnly_0 = !enableKeyboardInput;
  var inputProps;
  if ($[153] !== readOnly_0) {
    inputProps = {
      readOnly: readOnly_0
    };
    if (readOnly_0) {
      inputProps.tabIndex = -1;
    }
    $[153] = readOnly_0;
    $[154] = inputProps;
  } else {
    inputProps = $[154];
  }
  var slotInputProps = inputProps;
  var muiInputProps;
  if ($[155] !== endAdornment || $[156] !== icon || $[157] !== startAdornment) {
    muiInputProps = {
      endAdornment: undefined
    };
    if (startAdornment || icon || muiInputProps.startAdornment) {
      var _t2;
      if ($[159] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
          size: "small"
        }, icon));
        $[159] = icon;
        $[160] = _t2;
      } else {
        _t2 = $[160];
      }
      var _t3;
      if ($[161] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "start"
        }, startAdornment);
        $[161] = startAdornment;
        $[162] = _t3;
      } else {
        _t3 = $[162];
      }
      muiInputProps.startAdornment = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3, muiInputProps.startAdornment);
    }
    if (endAdornment) {
      var _t4;
      if ($[163] !== endAdornment) {
        _t4 = endAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "end"
        }, endAdornment);
        $[163] = endAdornment;
        $[164] = _t4;
      } else {
        _t4 = $[164];
      }
      var _t5;
      if ($[165] !== _t4) {
        _t5 = /*#__PURE__*/React.createElement(React.Fragment, null, _t4);
        $[165] = _t4;
        $[166] = _t5;
      } else {
        _t5 = $[166];
      }
      muiInputProps.endAdornment = _t5;
    }
    $[155] = endAdornment;
    $[156] = icon;
    $[157] = startAdornment;
    $[158] = muiInputProps;
  } else {
    muiInputProps = $[158];
  }
  var slotMuiInputProps = muiInputProps;
  var t38 = "align-".concat(align);
  var t39;
  if ($[167] !== t38) {
    t39 = classNames("input-text-field", t38);
    $[167] = t38;
    $[168] = t39;
  } else {
    t39 = $[168];
  }
  var t40;
  if ($[169] !== labelShrink) {
    t40 = labelShrink ? {
      shrink: labelShrink
    } : undefined;
    $[169] = labelShrink;
    $[170] = t40;
  } else {
    t40 = $[170];
  }
  var t41 = !!error || !!timeError;
  var t42;
  if ($[171] !== initStyle || $[172] !== width) {
    t42 = width != null ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      width: width
    }) : initStyle;
    $[171] = initStyle;
    $[172] = width;
    $[173] = t42;
  } else {
    t42 = $[173];
  }
  var t43;
  var t44;
  if ($[174] === Symbol["for"]("react.memo_cache_sentinel")) {
    t43 = function t43() {
      setIsOpen(true);
    };
    t44 = function t44() {
      setIsOpen(true);
    };
    $[174] = t43;
    $[175] = t44;
  } else {
    t43 = $[174];
    t44 = $[175];
  }
  var t45;
  if ($[176] !== color || $[177] !== focused || $[178] !== fullWidth || $[179] !== required || $[180] !== size || $[181] !== slotInputProps || $[182] !== slotMuiInputProps || $[183] !== sx || $[184] !== t39 || $[185] !== t40 || $[186] !== t41 || $[187] !== t42 || $[188] !== variant) {
    t45 = {
      textField: {
        className: t39,
        inputRef: textFieldInputRef,
        variant: variant,
        size: size,
        color: color,
        focused: focused,
        InputLabelProps: t40,
        InputProps: slotMuiInputProps,
        inputProps: slotInputProps,
        required: required,
        fullWidth: fullWidth,
        helperText: undefined,
        error: t41,
        style: t42,
        sx: sx,
        onFocus: t43,
        onClick: t44
      }
    };
    $[176] = color;
    $[177] = focused;
    $[178] = fullWidth;
    $[179] = required;
    $[180] = size;
    $[181] = slotInputProps;
    $[182] = slotMuiInputProps;
    $[183] = sx;
    $[184] = t39;
    $[185] = t40;
    $[186] = t41;
    $[187] = t42;
    $[188] = variant;
    $[189] = t45;
  } else {
    t45 = $[189];
  }
  var slotProps = t45;
  var t46;
  if ($[190] === Symbol["for"]("react.memo_cache_sentinel")) {
    t46 = function t46() {
      return setIsOpen(false);
    };
    $[190] = t46;
  } else {
    t46 = $[190];
  }
  var t47;
  if ($[191] !== className) {
    t47 = classNames(className, "PrivateDatePicker");
    $[191] = className;
    $[192] = t47;
  } else {
    t47 = $[192];
  }
  var t48 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t49 = fullWidth ? 1 : undefined;
  var t50;
  if ($[193] !== t48 || $[194] !== t49) {
    t50 = {
      display: t48,
      flex: t49
    };
    $[193] = t48;
    $[194] = t49;
    $[195] = t50;
  } else {
    t50 = $[195];
  }
  var t51 = disabled || readOnly ? false : isOpen;
  var t52 = error && errorHelperText ? 8 : -14;
  var t53;
  if ($[196] !== t52) {
    t53 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t52]
          }
        }]
      }
    };
    $[196] = t52;
    $[197] = t53;
  } else {
    t53 = $[197];
  }
  var t54;
  if ($[198] !== time) {
    t54 = function t54() {
      return !time && setIsOpen(false);
    };
    $[198] = time;
    $[199] = t54;
  } else {
    t54 = $[199];
  }
  var t55;
  if ($[200] === Symbol["for"]("react.memo_cache_sentinel")) {
    t55 = function t55() {
      return setIsOpen(false);
    };
    $[200] = t55;
  } else {
    t55 = $[200];
  }
  var t56;
  if ($[201] !== availableDate || $[202] !== disableFuture || $[203] !== disablePast || $[204] !== handleChange || $[205] !== hours || $[206] !== maxDate || $[207] !== minDate || $[208] !== minuteInterval || $[209] !== minutes || $[210] !== otherProps || $[211] !== secondInterval || $[212] !== seconds || $[213] !== showDaysOutsideCurrentMonth || $[214] !== t54 || $[215] !== time || $[216] !== type || $[217] !== value_3) {
    t56 = /*#__PURE__*/React.createElement(PrivateStaticDatePicker, _extends({}, otherProps, {
      ref: privateStaticDatePickerRef,
      type: type,
      time: time,
      value: value_3,
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
      onAccept: t54,
      onClose: t55
    }));
    $[201] = availableDate;
    $[202] = disableFuture;
    $[203] = disablePast;
    $[204] = handleChange;
    $[205] = hours;
    $[206] = maxDate;
    $[207] = minDate;
    $[208] = minuteInterval;
    $[209] = minutes;
    $[210] = otherProps;
    $[211] = secondInterval;
    $[212] = seconds;
    $[213] = showDaysOutsideCurrentMonth;
    $[214] = t54;
    $[215] = time;
    $[216] = type;
    $[217] = value_3;
    $[218] = t56;
  } else {
    t56 = $[218];
  }
  var t57 = fullWidth ? "block" : "inline-block";
  var t58;
  if ($[219] !== t57) {
    t58 = {
      display: t57
    };
    $[219] = t57;
    $[220] = t58;
  } else {
    t58 = $[220];
  }
  var t59;
  if ($[221] !== initLabel || $[222] !== labelIcon) {
    t59 = labelIcon ? /*#__PURE__*/React.createElement(reactComponent.PIconText, {
      icon: labelIcon
    }, initLabel) : initLabel;
    $[221] = initLabel;
    $[222] = labelIcon;
    $[223] = t59;
  } else {
    t59 = $[223];
  }
  var t60;
  if ($[224] !== format || $[225] !== time || $[226] !== type) {
    t60 = format ? format : getDateTimeFormat(type, time);
    $[224] = format;
    $[225] = time;
    $[226] = type;
    $[227] = t60;
  } else {
    t60 = $[227];
  }
  var t61;
  var t62;
  if ($[228] === Symbol["for"]("react.memo_cache_sentinel")) {
    t61 = function t61() {
      return setIsOpen(false);
    };
    t62 = function t62(reason) {
      return datePickerErrorRef.current = reason;
    };
    $[228] = t61;
    $[229] = t62;
  } else {
    t61 = $[228];
    t62 = $[229];
  }
  var t63;
  if ($[230] !== handleChange) {
    t63 = function t63(newValue_5) {
      return handleChange("date", newValue_5);
    };
    $[230] = handleChange;
    $[231] = t63;
  } else {
    t63 = $[231];
  }
  var t64;
  if ($[232] !== disableFuture || $[233] !== disablePast || $[234] !== disabled || $[235] !== inputValue || $[236] !== maxDate || $[237] !== minDate || $[238] !== otherProps || $[239] !== readOnly || $[240] !== showDaysOutsideCurrentMonth || $[241] !== slotProps || $[242] !== t59 || $[243] !== t60 || $[244] !== t63) {
    t64 = /*#__PURE__*/React.createElement(xDatePickers.DesktopDatePicker, _extends({
      value: inputValue,
      label: t59,
      open: false,
      format: t60,
      disabled: disabled,
      readOnly: readOnly,
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      onClose: t61,
      onError: t62,
      onChange: t63,
      slotProps: slotProps,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth
    }, otherProps));
    $[232] = disableFuture;
    $[233] = disablePast;
    $[234] = disabled;
    $[235] = inputValue;
    $[236] = maxDate;
    $[237] = minDate;
    $[238] = otherProps;
    $[239] = readOnly;
    $[240] = showDaysOutsideCurrentMonth;
    $[241] = slotProps;
    $[242] = t59;
    $[243] = t60;
    $[244] = t63;
    $[245] = t64;
  } else {
    t64 = $[245];
  }
  var t65;
  if ($[246] !== t58 || $[247] !== t64) {
    t65 = /*#__PURE__*/React.createElement("div", {
      style: t58
    }, t64);
    $[246] = t58;
    $[247] = t64;
    $[248] = t65;
  } else {
    t65 = $[248];
  }
  var t66;
  if ($[249] !== t51 || $[250] !== t53 || $[251] !== t56 || $[252] !== t65) {
    t66 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: t51,
      slotProps: t53,
      title: t56
    }, t65);
    $[249] = t51;
    $[250] = t53;
    $[251] = t56;
    $[252] = t65;
    $[253] = t66;
  } else {
    t66 = $[253];
  }
  var t67;
  if ($[254] !== error || $[255] !== errorHelperText || $[256] !== formColWithHelperText || $[257] !== helperText || $[258] !== variant) {
    t67 = !formColWithHelperText && (helperText || error && errorHelperText) && /*#__PURE__*/React.createElement(material.FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[254] = error;
    $[255] = errorHelperText;
    $[256] = formColWithHelperText;
    $[257] = helperText;
    $[258] = variant;
    $[259] = t67;
  } else {
    t67 = $[259];
  }
  var t68;
  if ($[260] !== t47 || $[261] !== t50 || $[262] !== t66 || $[263] !== t67) {
    t68 = /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
      dateAdapter: AdapterDayjs.AdapterDayjs
    }, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t46
    }, /*#__PURE__*/React.createElement("div", {
      className: t47,
      style: t50,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t66, t67)));
    $[260] = t47;
    $[261] = t50;
    $[262] = t66;
    $[263] = t67;
    $[264] = t68;
  } else {
    t68 = $[264];
  }
  return t68;
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
  var $ = compilerRuntime.c(83);
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
  var hourSelectRef = React.useRef(null);
  var minuteSelectRef = React.useRef(null);
  var secondSelectRef = React.useRef(null);
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
  var _useState = React.useState(t4),
    _useState2 = _slicedToArray(_useState, 2),
    month = _useState2[0],
    setMonth = _useState2[1];
  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    activeMonthValue = _useState4[0],
    setActiveMonthValue = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    yearSelectOpen = _useState6[0],
    setYearSelectOpen = _useState6[1];
  var _useState7 = React.useState(false),
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
  if (reactHook.useChanged(yearSelectOpen, true)) {
    if (!yearSelectOpen) {
      setActiveMonthValue(null);
    }
  }
  var leftArrowOnClickRef = React.useRef(undefined);
  var rightArrowOnClickRef = React.useRef(undefined);
  var t6;
  if ($[27] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6() {
      return function (props_0) {
        leftArrowOnClickRef.current = props_0.onClick;
        return /*#__PURE__*/React.createElement(material.IconButton, props_0);
      };
    };
    $[27] = t6;
  } else {
    t6 = $[27];
  }
  var _useState9 = React.useState(t6),
    _useState0 = _slicedToArray(_useState9, 1),
    LeftArrowButton = _useState0[0];
  var t7;
  if ($[28] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7() {
      return function (props_1) {
        rightArrowOnClickRef.current = props_1.onClick;
        return /*#__PURE__*/React.createElement(material.IconButton, props_1);
      };
    };
    $[28] = t7;
  } else {
    t7 = $[28];
  }
  var _useState1 = React.useState(t7),
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
      return /*#__PURE__*/React.createElement(xDatePickers.PickersDay, _extends({}, props_2, {
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
  reactHook.useForwardRef(ref, t14);
  var t15;
  if ($[39] !== availableDate || $[40] !== _onChange || $[41] !== time || $[42] !== type) {
    t15 = function t15(date_0, label) {
      var disabled = !isDateAvailable(date_0, availableDate, "day");
      return /*#__PURE__*/React.createElement(material.Button, {
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
    t17 = type !== "time" && /*#__PURE__*/React.createElement(material.Grid, null, /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      direction: "column"
    }, /*#__PURE__*/React.createElement(material.Grid, {
      sx: {
        p: 2,
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      className: "month-change-arrow-wrap"
    }, /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1,
      className: "month-title-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(material.Button, {
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
    }, month.format("YYYY\uB144"), /*#__PURE__*/React.createElement(material.Icon, null, yearSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))), /*#__PURE__*/React.createElement("div", {
      className: "month-title"
    }, /*#__PURE__*/React.createElement(material.Button, {
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
    }, month.format("M\uC6D4"), /*#__PURE__*/React.createElement(material.Icon, null, monthSelectOpen ? "arrow_drop_up" : "arrow_drop_down"))))), !yearSelectOpen && !monthSelectOpen && /*#__PURE__*/React.createElement(material.Grid, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(material.IconButton, {
      onClick: previousMonth,
      sx: {
        mr: 1
      }
    }, /*#__PURE__*/React.createElement(material.Icon, null, "keyboard_arrow_left")), /*#__PURE__*/React.createElement(material.IconButton, {
      onClick: nextMonth
    }, /*#__PURE__*/React.createElement(material.Icon, null, "keyboard_arrow_right"))))), /*#__PURE__*/React.createElement(material.Grid, {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(xDatePickers.StaticDateTimePicker, _extends({}, props, {
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
    })), /*#__PURE__*/React.createElement(material.Grid, {
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
    t19 = /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(276);
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
  var id = React.useId();
  var privateStaticDateTimePickerRef = React.useRef(null);
  var textFieldInputRef = React.useRef(undefined);
  var closeTimeoutRef = React.useRef(undefined);
  var mouseDownTimeRef = React.useRef(undefined);
  var openValueRef = React.useRef(undefined);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
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
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    timeError = _useState4[0],
    setTimeError = _useState4[1];
  var _useState5 = React.useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    errorHelperText = _useState6[0],
    setErrorHelperText = _useState6[1];
  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    datePickerError = _useState8[0],
    setDatePickerError = _useState8[1];
  var _useState9 = React.useState(initError),
    _useState0 = _slicedToArray(_useState9, 2),
    error = _useState0[0],
    _setError = _useState0[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t4;
  if ($[46] !== errorRef) {
    t4 = function t4(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[46] = errorRef;
    $[47] = t4;
  } else {
    t4 = $[47];
  }
  var setError = t4;
  var _useState1 = React.useState(initData),
    _useState10 = _slicedToArray(_useState1, 2),
    data = _useState10[0],
    _setData = _useState10[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t5;
  if ($[48] !== dataRef) {
    t5 = function t5(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[48] = dataRef;
    $[49] = t5;
  } else {
    t5 = $[49];
  }
  var setData = t5;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState11 = React.useState(finalInitDisabled),
    _useState12 = _slicedToArray(_useState11, 2),
    disabled = _useState12[0],
    setDisabled = _useState12[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState13 = React.useState(initHidden),
    _useState14 = _slicedToArray(_useState13, 2),
    hidden = _useState14[0],
    setHidden = _useState14[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t6;
  if ($[50] !== initFormat || $[51] !== time || $[52] !== type) {
    t6 = initFormat ? initFormat : getDateTimeFormat(type, time);
    $[50] = initFormat;
    $[51] = time;
    $[52] = type;
    $[53] = t6;
  } else {
    t6 = $[53];
  }
  var format = t6;
  var t7 = !!disablePast;
  var t8 = !!disableFuture;
  var t9;
  if ($[54] !== maxDate || $[55] !== minDate || $[56] !== t7 || $[57] !== t8) {
    t9 = makeAvailableDate(minDate, maxDate, t7, t8);
    $[54] = maxDate;
    $[55] = minDate;
    $[56] = t7;
    $[57] = t8;
    $[58] = t9;
  } else {
    t9 = $[58];
  }
  var availableDate = t9;
  var t10;
  if ($[59] !== setError) {
    t10 = function t10(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[59] = setError;
    $[60] = t10;
  } else {
    t10 = $[60];
  }
  var setErrorErrorHelperText = t10;
  var t11;
  if ($[61] !== datePickerError || $[62] !== onValidateRef || $[63] !== required || $[64] !== setErrorErrorHelperText || $[65] !== timeError) {
    t11 = function t11(value_1) {
      if (required && compare.empty(value_1)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (value_1 && !value_1.isValid()) {
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
        var onValidateResult = onValidateRef.current(value_1);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[61] = datePickerError;
    $[62] = onValidateRef;
    $[63] = required;
    $[64] = setErrorErrorHelperText;
    $[65] = timeError;
    $[66] = t11;
  } else {
    t11 = $[66];
  }
  var validate = t11;
  var validateRef = reactHook.useAutoUpdateRef(validate);
  var t12;
  if ($[67] !== initValue) {
    t12 = getFinalValue$7(initValue);
    $[67] = initValue;
    $[68] = t12;
  } else {
    t12 = $[68];
  }
  var _useState15 = React.useState(t12),
    _useState16 = _slicedToArray(_useState15, 2),
    value_2 = _useState16[0],
    _setValue = _useState16[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue$7(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t13;
  if ($[69] !== valueRef) {
    t13 = function t13(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[69] = valueRef;
    $[70] = t13;
  } else {
    t13 = $[70];
  }
  var setValue = t13;
  var t14;
  if ($[71] !== availableDate || $[72] !== error || $[73] !== name || $[74] !== onChangeRef || $[75] !== onValueChange || $[76] !== setValue || $[77] !== time || $[78] !== type || $[79] !== validateRef) {
    t14 = function t14(newValue_2) {
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
    $[71] = availableDate;
    $[72] = error;
    $[73] = name;
    $[74] = onChangeRef;
    $[75] = onValueChange;
    $[76] = setValue;
    $[77] = time;
    $[78] = type;
    $[79] = validateRef;
    $[80] = t14;
  } else {
    t14 = $[80];
  }
  var updateValue = t14;
  var _useState17 = React.useState(value_2),
    _useState18 = _slicedToArray(_useState17, 2),
    inputValue = _useState18[0],
    setInputValue = _useState18[1];
  reactHook.useChanged(value_2) && setInputValue(value_2);
  var t15;
  if ($[81] !== validateRef || $[82] !== valueRef) {
    t15 = function t15() {
      return validateRef.current(valueRef.current);
    };
    $[81] = validateRef;
    $[82] = valueRef;
    $[83] = t15;
  } else {
    t15 = $[83];
  }
  var effectEvent = React.useEffectEvent(t15);
  var t16;
  if ($[84] !== effectEvent || $[85] !== error || $[86] !== timeError) {
    t16 = function t16() {
      if (error && !timeError) {
        effectEvent();
      }
    };
    $[84] = effectEvent;
    $[85] = error;
    $[86] = timeError;
    $[87] = t16;
  } else {
    t16 = $[87];
  }
  var t17;
  if ($[88] !== error || $[89] !== timeError) {
    t17 = [error, timeError];
    $[88] = error;
    $[89] = timeError;
    $[90] = t17;
  } else {
    t17 = $[90];
  }
  React.useEffect(t16, t17);
  var t18;
  if ($[91] !== isOpen || $[92] !== name || $[93] !== onRequestSearchSubmit || $[94] !== valueRef) {
    t18 = function t18() {
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
    $[91] = isOpen;
    $[92] = name;
    $[93] = onRequestSearchSubmit;
    $[94] = valueRef;
    $[95] = t18;
  } else {
    t18 = $[95];
  }
  var effectEvent_0 = React.useEffectEvent(t18);
  var t19;
  if ($[96] !== effectEvent_0) {
    t19 = function t19() {
      effectEvent_0();
    };
    $[96] = effectEvent_0;
    $[97] = t19;
  } else {
    t19 = $[97];
  }
  var t20;
  if ($[98] !== isOpen) {
    t20 = [isOpen];
    $[98] = isOpen;
    $[99] = t20;
  } else {
    t20 = $[99];
  }
  React.useEffect(t19, t20);
  var t21;
  if ($[100] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = function t21() {
      var _textFieldInputRef$cu;
      (_textFieldInputRef$cu = textFieldInputRef.current) === null || _textFieldInputRef$cu === void 0 || _textFieldInputRef$cu.focus();
    };
    $[100] = t21;
  } else {
    t21 = $[100];
  }
  var focus = t21;
  var t22;
  if ($[101] !== name) {
    t22 = function t22() {
      return name;
    };
    $[101] = name;
    $[102] = t22;
  } else {
    t22 = $[102];
  }
  var t23;
  if ($[103] !== initValueRef) {
    t23 = function t23() {
      return getFinalValue$7(initValueRef.current);
    };
    $[103] = initValueRef;
    $[104] = t23;
  } else {
    t23 = $[104];
  }
  var t24;
  if ($[105] !== initValueRef || $[106] !== updateValue) {
    t24 = function t24() {
      return updateValue(initValueRef.current);
    };
    $[105] = initValueRef;
    $[106] = updateValue;
    $[107] = t24;
  } else {
    t24 = $[107];
  }
  var t25;
  if ($[108] !== valueRef) {
    t25 = function t25() {
      return valueRef.current;
    };
    $[108] = valueRef;
    $[109] = t25;
  } else {
    t25 = $[109];
  }
  var t26;
  if ($[110] !== dataRef) {
    t26 = function t26() {
      return dataRef.current;
    };
    $[110] = dataRef;
    $[111] = t26;
  } else {
    t26 = $[111];
  }
  var t27;
  if ($[112] !== exceptValue) {
    t27 = function t27() {
      return !!exceptValue;
    };
    $[112] = exceptValue;
    $[113] = t27;
  } else {
    t27 = $[113];
  }
  var t28;
  if ($[114] !== disabled) {
    t28 = function t28() {
      return !!disabled;
    };
    $[114] = disabled;
    $[115] = t28;
  } else {
    t28 = $[115];
  }
  var t29;
  if ($[116] !== hidden) {
    t29 = function t29() {
      return !!hidden;
    };
    $[116] = hidden;
    $[117] = t29;
  } else {
    t29 = $[117];
  }
  var t30;
  if ($[118] !== validateRef || $[119] !== valueRef) {
    t30 = function t30() {
      return validateRef.current(valueRef.current);
    };
    $[118] = validateRef;
    $[119] = valueRef;
    $[120] = t30;
  } else {
    t30 = $[120];
  }
  var t31;
  if ($[121] !== setErrorErrorHelperText) {
    t31 = function t31(error_1, errorText) {
      return setErrorErrorHelperText(error_1, error_1 ? errorText : undefined);
    };
    $[121] = setErrorErrorHelperText;
    $[122] = t31;
  } else {
    t31 = $[122];
  }
  var t32;
  if ($[123] !== initFormValueFormat || $[124] !== time || $[125] !== type) {
    t32 = function t32() {
      return initFormValueFormat ? initFormValueFormat : getDateTimeFormValueFormat(type, time);
    };
    $[123] = initFormValueFormat;
    $[124] = time;
    $[125] = type;
    $[126] = t32;
  } else {
    t32 = $[126];
  }
  var t33;
  if ($[127] !== setData || $[128] !== t22 || $[129] !== t23 || $[130] !== t24 || $[131] !== t25 || $[132] !== t26 || $[133] !== t27 || $[134] !== t28 || $[135] !== t29 || $[136] !== t30 || $[137] !== t31 || $[138] !== t32 || $[139] !== updateValue) {
    t33 = {
      getType: _temp$h,
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
      setError: t31,
      getFormValueFormat: t32
    };
    $[127] = setData;
    $[128] = t22;
    $[129] = t23;
    $[130] = t24;
    $[131] = t25;
    $[132] = t26;
    $[133] = t27;
    $[134] = t28;
    $[135] = t29;
    $[136] = t30;
    $[137] = t31;
    $[138] = t32;
    $[139] = updateValue;
    $[140] = t33;
  } else {
    t33 = $[140];
  }
  var commands = t33;
  var t34;
  if ($[141] !== id || $[142] !== onAddValueItem) {
    t34 = function t34(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[141] = id;
    $[142] = onAddValueItem;
    $[143] = t34;
  } else {
    t34 = $[143];
  }
  var t35;
  if ($[144] !== id || $[145] !== onRemoveValueItem) {
    t35 = function t35() {
      return onRemoveValueItem(id);
    };
    $[144] = id;
    $[145] = onRemoveValueItem;
    $[146] = t35;
  } else {
    t35 = $[146];
  }
  reactHook.useForwardRef(ref, commands, t34, t35);
  var t36;
  if ($[147] !== availableDate || $[148] !== isOpen || $[149] !== name || $[150] !== onRequestSearchSubmit || $[151] !== onValueChangeByUser || $[152] !== time || $[153] !== type || $[154] !== updateValue) {
    t36 = function t36(unit, newValue_3, keyboardInputValue) {
      var isUpdateValue = true;
      if (compare.notEmpty(keyboardInputValue)) {
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
        if (compare.notEmpty(keyboardInputValue)) {
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
            bb290: switch (unit) {
              case "date":
              case "action_date":
                {
                  var _privateStaticDateTim;
                  (_privateStaticDateTim = privateStaticDateTimePickerRef.current) === null || _privateStaticDateTim === void 0 || _privateStaticDateTim.timeSelectScrollToDate(finalValue_0);
                  break bb290;
                }
              case "hour":
                {
                  var _privateStaticDateTim2;
                  (_privateStaticDateTim2 = privateStaticDateTimePickerRef.current) === null || _privateStaticDateTim2 === void 0 || _privateStaticDateTim2.timeSelectScrollToDate(finalValue_0, ["minute", "second"]);
                  break bb290;
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
    $[147] = availableDate;
    $[148] = isOpen;
    $[149] = name;
    $[150] = onRequestSearchSubmit;
    $[151] = onValueChangeByUser;
    $[152] = time;
    $[153] = type;
    $[154] = updateValue;
    $[155] = t36;
  } else {
    t36 = $[155];
  }
  var handleChange = t36;
  var t37;
  if ($[156] === Symbol["for"]("react.memo_cache_sentinel")) {
    t37 = function t37() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[156] = t37;
  } else {
    t37 = $[156];
  }
  var handleContainerFocus = t37;
  var t38;
  if ($[157] === Symbol["for"]("react.memo_cache_sentinel")) {
    t38 = function t38() {
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
    $[157] = t38;
  } else {
    t38 = $[157];
  }
  var handleContainerBlur = t38;
  var t39;
  if ($[158] === Symbol["for"]("react.memo_cache_sentinel")) {
    t39 = function t39() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[158] = t39;
  } else {
    t39 = $[158];
  }
  var handleContainerMouseDown = t39;
  var t40;
  if ($[159] === Symbol["for"]("react.memo_cache_sentinel")) {
    t40 = function t40(ref_0) {
      textFieldInputRef.current = ref_0;
    };
    $[159] = t40;
  } else {
    t40 = $[159];
  }
  var slotPropsInputRef = t40;
  var muiInputProps;
  if ($[160] !== endAdornment || $[161] !== icon || $[162] !== startAdornment) {
    muiInputProps = {
      endAdornment: undefined
    };
    if (startAdornment || icon) {
      var _t2;
      if ($[164] !== icon) {
        _t2 = icon && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
          size: "small"
        }, icon));
        $[164] = icon;
        $[165] = _t2;
      } else {
        _t2 = $[165];
      }
      var _t3;
      if ($[166] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "start"
        }, startAdornment);
        $[166] = startAdornment;
        $[167] = _t3;
      } else {
        _t3 = $[167];
      }
      var _t4;
      if ($[168] !== _t2 || $[169] !== _t3) {
        _t4 = /*#__PURE__*/React.createElement(React.Fragment, null, _t2, _t3);
        $[168] = _t2;
        $[169] = _t3;
        $[170] = _t4;
      } else {
        _t4 = $[170];
      }
      muiInputProps.startAdornment = _t4;
    }
    if (endAdornment) {
      var _t5;
      if ($[171] !== endAdornment) {
        _t5 = endAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "end"
        }, endAdornment);
        $[171] = endAdornment;
        $[172] = _t5;
      } else {
        _t5 = $[172];
      }
      var _t6;
      if ($[173] !== _t5) {
        _t6 = /*#__PURE__*/React.createElement(React.Fragment, null, _t5);
        $[173] = _t5;
        $[174] = _t6;
      } else {
        _t6 = $[174];
      }
      muiInputProps.endAdornment = _t6;
    }
    $[160] = endAdornment;
    $[161] = icon;
    $[162] = startAdornment;
    $[163] = muiInputProps;
  } else {
    muiInputProps = $[163];
  }
  var slotPropsMuiInputProps = muiInputProps;
  var readOnly_0 = !enableKeyboardInput;
  var t41 = "align-".concat(align);
  var t42;
  if ($[175] !== t41) {
    t42 = classNames("input-text-field", t41);
    $[175] = t41;
    $[176] = t42;
  } else {
    t42 = $[176];
  }
  var t43;
  if ($[177] !== labelShrink) {
    t43 = labelShrink ? {
      shrink: true
    } : undefined;
    $[177] = labelShrink;
    $[178] = t43;
  } else {
    t43 = $[178];
  }
  var t44 = readOnly_0 ? -1 : undefined;
  var t45;
  if ($[179] !== readOnly_0 || $[180] !== t44) {
    t45 = {
      readOnly: readOnly_0,
      tabIndex: t44
    };
    $[179] = readOnly_0;
    $[180] = t44;
    $[181] = t45;
  } else {
    t45 = $[181];
  }
  var t46 = !!error || !!timeError;
  var t47;
  if ($[182] !== initStyle || $[183] !== width) {
    t47 = width != null ? _objectSpread2(_objectSpread2({}, initStyle), {}, {
      width: width
    }) : initStyle;
    $[182] = initStyle;
    $[183] = width;
    $[184] = t47;
  } else {
    t47 = $[184];
  }
  var t48;
  var t49;
  if ($[185] === Symbol["for"]("react.memo_cache_sentinel")) {
    t48 = function t48() {
      return setIsOpen(true);
    };
    t49 = function t49() {
      return setIsOpen(true);
    };
    $[185] = t48;
    $[186] = t49;
  } else {
    t48 = $[185];
    t49 = $[186];
  }
  var t50;
  if ($[187] !== color || $[188] !== focused || $[189] !== fullWidth || $[190] !== required || $[191] !== size || $[192] !== slotPropsMuiInputProps || $[193] !== sx || $[194] !== t42 || $[195] !== t43 || $[196] !== t45 || $[197] !== t46 || $[198] !== t47 || $[199] !== variant) {
    t50 = {
      textField: {
        className: t42,
        inputRef: slotPropsInputRef,
        variant: variant,
        size: size,
        color: color,
        focused: focused,
        InputLabelProps: t43,
        InputProps: slotPropsMuiInputProps,
        inputProps: t45,
        required: required,
        fullWidth: fullWidth,
        helperText: undefined,
        error: t46,
        style: t47,
        sx: sx,
        onFocus: t48,
        onClick: t49
      }
    };
    $[187] = color;
    $[188] = focused;
    $[189] = fullWidth;
    $[190] = required;
    $[191] = size;
    $[192] = slotPropsMuiInputProps;
    $[193] = sx;
    $[194] = t42;
    $[195] = t43;
    $[196] = t45;
    $[197] = t46;
    $[198] = t47;
    $[199] = variant;
    $[200] = t50;
  } else {
    t50 = $[200];
  }
  var slotProps = t50;
  var t51 = error && helperText ? 8 : -14;
  var t52;
  if ($[201] !== t51) {
    t52 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t51]
          }
        }]
      }
    };
    $[201] = t51;
    $[202] = t52;
  } else {
    t52 = $[202];
  }
  var tooltipSlotProps = t52;
  var t53;
  if ($[203] === Symbol["for"]("react.memo_cache_sentinel")) {
    t53 = function t53() {
      return setIsOpen(false);
    };
    $[203] = t53;
  } else {
    t53 = $[203];
  }
  var t54;
  if ($[204] !== className) {
    t54 = classNames(className, "PrivateDateTimePicker");
    $[204] = className;
    $[205] = t54;
  } else {
    t54 = $[205];
  }
  var t55 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t56 = fullWidth ? 1 : undefined;
  var t57;
  if ($[206] !== t55 || $[207] !== t56) {
    t57 = {
      display: t55,
      flex: t56
    };
    $[206] = t55;
    $[207] = t56;
    $[208] = t57;
  } else {
    t57 = $[208];
  }
  var t58 = disabled || readOnly ? false : isOpen;
  var t59;
  if ($[209] !== time) {
    t59 = function t59() {
      return !time && setIsOpen(false);
    };
    $[209] = time;
    $[210] = t59;
  } else {
    t59 = $[210];
  }
  var t60;
  if ($[211] === Symbol["for"]("react.memo_cache_sentinel")) {
    t60 = function t60() {
      return setIsOpen(false);
    };
    $[211] = t60;
  } else {
    t60 = $[211];
  }
  var t61;
  if ($[212] !== availableDate || $[213] !== disableFuture || $[214] !== disablePast || $[215] !== handleChange || $[216] !== hours || $[217] !== maxDate || $[218] !== minDate || $[219] !== minuteInterval || $[220] !== minutes || $[221] !== otherProps || $[222] !== secondInterval || $[223] !== seconds || $[224] !== showDaysOutsideCurrentMonth || $[225] !== t59 || $[226] !== time || $[227] !== type || $[228] !== value_2) {
    t61 = /*#__PURE__*/React.createElement(PrivateStaticDateTimePicker, _extends({}, otherProps, {
      ref: privateStaticDateTimePickerRef,
      type: type,
      time: time,
      value: value_2,
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
      onAccept: t59,
      onClose: t60
    }));
    $[212] = availableDate;
    $[213] = disableFuture;
    $[214] = disablePast;
    $[215] = handleChange;
    $[216] = hours;
    $[217] = maxDate;
    $[218] = minDate;
    $[219] = minuteInterval;
    $[220] = minutes;
    $[221] = otherProps;
    $[222] = secondInterval;
    $[223] = seconds;
    $[224] = showDaysOutsideCurrentMonth;
    $[225] = t59;
    $[226] = time;
    $[227] = type;
    $[228] = value_2;
    $[229] = t61;
  } else {
    t61 = $[229];
  }
  var t62 = fullWidth ? "block" : "inline-block";
  var t63;
  if ($[230] !== t62) {
    t63 = {
      display: t62
    };
    $[230] = t62;
    $[231] = t63;
  } else {
    t63 = $[231];
  }
  var t64;
  if ($[232] !== initLabel || $[233] !== labelIcon) {
    t64 = labelIcon ? /*#__PURE__*/React.createElement(reactComponent.PIconText, {
      icon: labelIcon
    }, initLabel) : initLabel;
    $[232] = initLabel;
    $[233] = labelIcon;
    $[234] = t64;
  } else {
    t64 = $[234];
  }
  var t65;
  if ($[235] === Symbol["for"]("react.memo_cache_sentinel")) {
    t65 = function t65() {
      return setIsOpen(false);
    };
    $[235] = t65;
  } else {
    t65 = $[235];
  }
  var t66;
  if ($[236] !== disablePast || $[237] !== inputValue || $[238] !== time) {
    t66 = function t66(reason, v) {
      if (disablePast) {
        var formatStr;
        bb433: switch (time) {
          case "hour":
            {
              formatStr = "YYYY-MM-DD HH";
              break bb433;
            }
          case "minute":
            {
              formatStr = "YYYY-MM-DD HH:mm";
              break bb433;
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
    $[236] = disablePast;
    $[237] = inputValue;
    $[238] = time;
    $[239] = t66;
  } else {
    t66 = $[239];
  }
  var t67;
  if ($[240] !== handleChange) {
    t67 = function t67(newValue_4) {
      return handleChange("date", newValue_4);
    };
    $[240] = handleChange;
    $[241] = t67;
  } else {
    t67 = $[241];
  }
  var t68;
  if ($[242] !== disableFuture || $[243] !== disablePast || $[244] !== disabled || $[245] !== format || $[246] !== inputValue || $[247] !== maxDate || $[248] !== minDate || $[249] !== otherProps || $[250] !== readOnly || $[251] !== showDaysOutsideCurrentMonth || $[252] !== slotProps || $[253] !== t64 || $[254] !== t66 || $[255] !== t67) {
    t68 = /*#__PURE__*/React.createElement(xDatePickers.DesktopDateTimePicker, _extends({
      value: inputValue,
      label: t64,
      open: false,
      format: format,
      disabled: disabled,
      readOnly: readOnly,
      minDate: minDate,
      maxDate: maxDate,
      view: "minutes",
      disablePast: disablePast,
      disableFuture: disableFuture,
      onClose: t65,
      onError: t66,
      onChange: t67,
      slotProps: slotProps,
      showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth
    }, otherProps));
    $[242] = disableFuture;
    $[243] = disablePast;
    $[244] = disabled;
    $[245] = format;
    $[246] = inputValue;
    $[247] = maxDate;
    $[248] = minDate;
    $[249] = otherProps;
    $[250] = readOnly;
    $[251] = showDaysOutsideCurrentMonth;
    $[252] = slotProps;
    $[253] = t64;
    $[254] = t66;
    $[255] = t67;
    $[256] = t68;
  } else {
    t68 = $[256];
  }
  var t69;
  if ($[257] !== t63 || $[258] !== t68) {
    t69 = /*#__PURE__*/React.createElement("div", {
      style: t63
    }, t68);
    $[257] = t63;
    $[258] = t68;
    $[259] = t69;
  } else {
    t69 = $[259];
  }
  var t70;
  if ($[260] !== t58 || $[261] !== t61 || $[262] !== t69 || $[263] !== tooltipSlotProps) {
    t70 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: t58,
      slotProps: tooltipSlotProps,
      title: t61
    }, t69);
    $[260] = t58;
    $[261] = t61;
    $[262] = t69;
    $[263] = tooltipSlotProps;
    $[264] = t70;
  } else {
    t70 = $[264];
  }
  var t71;
  if ($[265] !== error || $[266] !== errorHelperText || $[267] !== formColWithHelperText || $[268] !== helperText || $[269] !== variant) {
    t71 = !formColWithHelperText && (helperText || error && errorHelperText) && /*#__PURE__*/React.createElement(material.FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[265] = error;
    $[266] = errorHelperText;
    $[267] = formColWithHelperText;
    $[268] = helperText;
    $[269] = variant;
    $[270] = t71;
  } else {
    t71 = $[270];
  }
  var t72;
  if ($[271] !== t54 || $[272] !== t57 || $[273] !== t70 || $[274] !== t71) {
    t72 = /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
      dateAdapter: AdapterDayjs.AdapterDayjs
    }, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t53
    }, /*#__PURE__*/React.createElement("div", {
      className: t54,
      style: t57,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t70, t71)));
    $[271] = t54;
    $[272] = t57;
    $[273] = t70;
    $[274] = t71;
    $[275] = t72;
  } else {
    t72 = $[275];
  }
  return t72;
};
function _temp$h() {
  return "default";
}var PrivateAlertDialog = function PrivateAlertDialog(t0) {
  var $ = compilerRuntime.c(15);
  var t1 = t0.color,
    open = t0.open,
    title = t0.title,
    content = t0.content,
    initOnClose = t0.onClose;
  var color = t1 === undefined ? "primary" : t1;
  var onCloseRef = reactHook.useAutoUpdateRef(initOnClose);
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
    t5 = title && /*#__PURE__*/React.createElement(material.DialogTitle, {
      id: "alert-dialog-title"
    }, title);
    $[2] = title;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var t6;
  if ($[4] !== content) {
    t6 = /*#__PURE__*/React.createElement(material.DialogContent, null, content);
    $[4] = content;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var t7;
  if ($[6] !== handleClose) {
    t7 = /*#__PURE__*/React.createElement(material.DialogActions, null, /*#__PURE__*/React.createElement(material.Button, {
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
    t8 = /*#__PURE__*/React.createElement(material.Dialog, {
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
  var $ = compilerRuntime.c(83);
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
  var id = React.useId();
  var onFocusRef = reactHook.useAutoUpdateRef(initOnFocus);
  var onBlurRef = reactHook.useAutoUpdateRef(initOnBlur);
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
    t3 = labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
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
        _t2 = icon && /*#__PURE__*/React.createElement(material.InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
          size: "small"
        }, icon));
        $[37] = icon;
        $[38] = _t2;
      } else {
        _t2 = $[38];
      }
      var _t3;
      if ($[39] !== startAdornment) {
        _t3 = startAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
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
        _t4 = endAdornment && /*#__PURE__*/React.createElement(material.InputAdornment, {
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
    t12 = /*#__PURE__*/React.createElement(xDatePickers.DesktopDatePicker, _extends({}, props, {
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
var StyledContainer$6 = material.styled(material.Grid)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$2 = material.styled(material.Button)(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: #1976d2;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));var PrivateYearRangePickerYear = function PrivateYearRangePickerYear(t0) {
  var $ = compilerRuntime.c(18);
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
var StyledContainer$5 = material.styled(material.Grid)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));var _lastCloseTime$1 = 0;
var PrivateYearRangePickerYearList = function PrivateYearRangePickerYearList(t0) {
  var $ = compilerRuntime.c(26);
  var value = t0.value,
    displayValue = t0.displayValue,
    selectType = t0.selectType,
    minYear = t0.minYear,
    maxYear = t0.maxYear,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    onChange = t0.onChange;
  var yearsContainerRef = React.useRef(null);
  var startButtonRef = React.useRef(null);
  var endButtonRef = React.useRef(null);
  var mouseOverTimer = React.useRef(undefined);
  var _useState = React.useState(),
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
  React.useEffect(t1, t2);
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
  React.useEffect(t3, t4);
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
  React.useEffect(t5, t6);
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
var StyledTitleContainer$1 = material.styled('div')(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledYear = material.styled('span')(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral([""])));
var StyledYearError = material.styled('span')(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.error.main;
});
var StyledTitleGap = material.styled('span')(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n  padding: 0 7px;\n  opacity: 0.5;\n"])));
var StyledActionContainer$1 = material.styled('div')(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton$1 = material.styled(material.Button)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));var DEFAULT_MIN_YEAR$1 = 2020;
var DEFAULT_MAX_YEAR$1 = 2050;
var DEFAULT_VALUE$3 = [null, null];
var PrivateYearRangePicker = function PrivateYearRangePicker(t0) {
  var $ = compilerRuntime.c(58);
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
  var _useState = React.useState(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  reactHook.useChanged(initValue) && setValue(initValue);
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
var StyledContainer$4 = material.styled(material.Grid)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton$1 = material.styled(material.Button)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    border: 1px solid transparent;\n    background-color: rgba(66, 165, 245, 0.3);\n  }\n"])));var PrivateYearPickerYear = function PrivateYearPickerYear(t0) {
  var $ = compilerRuntime.c(20);
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
var StyledContainer$3 = material.styled(material.Grid)(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  width: 240px;\n  height: inherit;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 4px;\n"])));var _lastCloseTime = 0;
var PrivateYearPickerYearList = function PrivateYearPickerYearList(t0) {
  var $ = compilerRuntime.c(21);
  var value = t0.value,
    minYear = t0.minYear,
    maxYear = t0.maxYear,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    selectFromYear = t0.selectFromYear,
    selectToYear = t0.selectToYear,
    onChange = t0.onChange;
  var yearsContainerRef = React.useRef(null);
  var defaultButtonRef = React.useRef(null);
  var startButtonRef = React.useRef(null);
  var endButtonRef = React.useRef(null);
  var mouseOverTimer = React.useRef(undefined);
  var _useState = React.useState(),
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
  React.useEffect(t1, t2);
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
  React.useEffect(t3, t4);
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
var StyledTitleContainer = material.styled('div')(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton$1 = material.styled(material.IconButton)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth$1 = material.styled('div')(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: center;\n"])));
var StyledYearMonthError$1 = material.styled('div')(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: center;\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.error.main;
});var DEFAULT_MIN_YEAR = 2020;
var DEFAULT_MAX_YEAR = 2050;
var PrivateYearPicker = function PrivateYearPicker(t0) {
  var $ = compilerRuntime.c(37);
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
  var onChangeRef = reactHook.useAutoUpdateRef(initOnChange);
  var _useState = React.useState(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  reactHook.useChanged(initValue) && setValue(initValue);
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
    }, /*#__PURE__*/React.createElement(reactComponent.PIcon, null, "KeyboardArrowLeft")), displayInfo.error ? /*#__PURE__*/React.createElement(StyledYearMonthError$1, null, displayInfo.year, "\uB144") : /*#__PURE__*/React.createElement(StyledYearMonth$1, null, displayInfo.year, "\uB144"), /*#__PURE__*/React.createElement(StyledIconButton$1, {
      disabled: displayInfo.year >= yearInfo.available.max,
      onClick: handleNextClick
    }, /*#__PURE__*/React.createElement(reactComponent.PIcon, null, "KeyboardArrowRight")));
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
var StyledContainer$2 = material.styled(material.Grid)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  padding: 4px;\n  position: relative;\n"])));
var StyledButton = material.styled(material.Button)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  background-color: transparent;\n  color: unset;\n  outline: 0;\n  font-weight: 400;\n  line-height: 1.75;\n  border-radius: 18px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid transparent;\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n\n  &.default {\n    background-color: #efefef;\n  }\n  &.selected,\n  &.selected-temp {\n    background-color: rgba(66, 165, 245, 0.6);\n  }\n  &.selected-start,\n  &.selected-end {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n\n    &.range:not(.active) {\n      background-color: rgba(25, 118, 210, 0.8);\n    }\n  }\n  &.active {\n    color: #fff;\n    background-color: rgba(25, 118, 210, 1);\n    box-shadow: inset 1px 1px 1px 1px #05569f;\n  }\n  &.disabled {\n    opacity: 0.8;\n    border: 1px solid transparent;\n  }\n  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {\n    color: inherit;\n    background-color: rgba(66, 165, 245, 0.3);\n    border: 1px solid transparent;\n  }\n"])));var PrivateMonthPickerMonth = function PrivateMonthPickerMonth(t0) {
  var $ = compilerRuntime.c(23);
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
var StyledContainer$1 = material.styled(material.Grid)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  width: 240px;\n  padding: 4px;\n"])));var PrivateMonthPickerMonthList = function PrivateMonthPickerMonthList(t0) {
  var $ = compilerRuntime.c(36);
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
var StyledContainer = material.styled('div')(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  .PrivateYearPickerYearList {\n    max-height: 130px;\n  }\n"])));
var TitleContainer = material.styled('div')(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding: 10px;\n  font-size: 14px;\n"])));
var StyledIconButton = material.styled(material.IconButton)(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  margin-top: -8px;\n  margin-bottom: -10px;\n"])));
var StyledYearMonth = material.styled('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var StyledYearMonthError = material.styled('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (_ref) {
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
  var $ = compilerRuntime.c(78);
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
  var _useState = React.useState(initValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  reactHook.useChanged(initValue) && setValue(initValue);
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
    t17 = /*#__PURE__*/React.createElement(reactComponent.PIcon, null, "KeyboardArrowLeft");
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
    t20 = /*#__PURE__*/React.createElement(reactComponent.PIcon, null, "KeyboardArrowRight");
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
var StyledDiv = material.styled(material.Grid)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  width: 30px;\n  border-left: 1px solid #efefef;\n  border-right: 1px solid #efefef;\n  background-color: #fafafa;\n"])));
var StyledActionContainer = material.styled('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-top: 1px solid #efefef;\n  padding: 10px;\n  text-align: right;\n  &:empty {\n    display: none;\n  }\n"])));
var StyledActionButton = material.styled(material.Button)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-width: 0;\n  color: unset;\n  &:not(:first-of-type) {\n    margin-left: 5px;\n  }\n  &.disabled {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])));var DEFAULT_MIN_VALUE$2 = {
  year: 2020,
  month: 1
};
var DEFAULT_MAX_VALUE$2 = {
  year: 2050,
  month: 12
};
var PrivateMonthRangePicker = function PrivateMonthRangePicker(t0) {
  var $ = compilerRuntime.c(83);
  var value = t0.value,
    t1 = t0.minValue,
    t2 = t0.maxValue,
    disablePast = t0.disablePast,
    disableFuture = t0.disableFuture,
    initOnChange = t0.onChange;
  var minValue = t1 === undefined ? DEFAULT_MIN_VALUE$2 : t1;
  var maxValue = t2 === undefined ? DEFAULT_MAX_VALUE$2 : t2;
  var onChangeRef = reactHook.useAutoUpdateRef(initOnChange);
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
    t22 = /*#__PURE__*/React.createElement(material.Grid, null, /*#__PURE__*/React.createElement(PrivateMonthPicker, {
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
    t24 = /*#__PURE__*/React.createElement(material.Grid, null, /*#__PURE__*/React.createElement(PrivateMonthPicker, {
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
    t25 = /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(21);
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
  var $ = compilerRuntime.c(39);
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
  var $ = compilerRuntime.c(19);
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
  var $ = compilerRuntime.c(50);
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
  var leftArrowOnClickRef = React.useRef(undefined);
  var rightArrowOnClickRef = React.useRef(undefined);
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeMonthValue = _useState2[0],
    setActiveMonthValue = _useState2[1];
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      var ArrowButton = function ArrowButton(props) {
        leftArrowOnClickRef.current = props.onClick;
        return /*#__PURE__*/React.createElement(material.IconButton, props);
      };
      return ArrowButton;
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var _useState3 = React.useState(t1),
    _useState4 = _slicedToArray(_useState3, 1),
    LeftArrowButton = _useState4[0];
  var t2;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = function t2() {
      var ArrowButton_0 = function ArrowButton_0(props_0) {
        rightArrowOnClickRef.current = props_0.onClick;
        return /*#__PURE__*/React.createElement(material.IconButton, props_0);
      };
      return ArrowButton_0;
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var _useState5 = React.useState(t2),
    _useState6 = _slicedToArray(_useState5, 1),
    RightArrowButton = _useState6[0];
  var t3;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = function t3() {
      return setActiveMonthValue(null);
    };
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  var effectEvent = React.useEffectEvent(t3);
  var t4;
  if ($[3] !== effectEvent) {
    t4 = function t4() {
      return effectEvent();
    };
    $[3] = effectEvent;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  var t5;
  if ($[5] !== selectType) {
    t5 = [selectType];
    $[5] = selectType;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  React.useEffect(t4, t5);
  var getDateVal = _temp$b;
  var t6;
  if ($[7] !== initValue) {
    t6 = initValue ? initValue : [null, null];
    $[7] = initValue;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  var value = t6;
  var newValue;
  if ($[9] !== month) {
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
    $[9] = month;
    $[10] = newValue;
  } else {
    newValue = $[10];
  }
  var baseClassNames = newValue;
  var newValue_0;
  if ($[11] !== month || $[12] !== value[0] || $[13] !== value[1]) {
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
    $[11] = month;
    $[12] = value[0];
    $[13] = value[1];
    $[14] = newValue_0;
  } else {
    newValue_0 = $[14];
  }
  var selectedClassNames = newValue_0;
  var newValue_1;
  if ($[15] !== focusedDate || $[16] !== month || $[17] !== selectType || $[18] !== value[0] || $[19] !== value[1]) {
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
    $[15] = focusedDate;
    $[16] = month;
    $[17] = selectType;
    $[18] = value[0];
    $[19] = value[1];
    $[20] = newValue_1;
  } else {
    newValue_1 = $[20];
  }
  var focusedClassNames = newValue_1;
  var t7;
  if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
    t7 = function t7() {
      if (leftArrowOnClickRef.current) {
        leftArrowOnClickRef.current({});
      }
    };
    $[21] = t7;
  } else {
    t7 = $[21];
  }
  var previousMonth = t7;
  var t8;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      if (rightArrowOnClickRef.current) {
        rightArrowOnClickRef.current({});
      }
    };
    $[22] = t8;
  } else {
    t8 = $[22];
  }
  var nextMonth = t8;
  var t9;
  if ($[23] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(month_0) {
      setActiveMonthValue(month_0);
    };
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  var activeMonth = t9;
  var t10;
  if ($[24] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = {
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      activeMonth: activeMonth
    };
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  var commands = t10;
  reactHook.useForwardRef(ref, commands);
  var t11;
  if ($[25] !== baseClassNames || $[26] !== focusedClassNames || $[27] !== onMouseEnterPickersDay || $[28] !== selectedClassNames || $[29] !== value) {
    t11 = function t11(props_1) {
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
      }), /*#__PURE__*/React.createElement(xDatePickers.PickersDay, _extends({}, props_1, {
        disableMargin: true,
        selected: props_1.day.isSame(startDate, "date") || props_1.day.isSame(endDate, "date"),
        onMouseEnter: value[0] || value[1] ? function () {
          return onMouseEnterPickersDay && onMouseEnterPickersDay(props_1.day);
        } : undefined
      })));
    };
    $[25] = baseClassNames;
    $[26] = focusedClassNames;
    $[27] = onMouseEnterPickersDay;
    $[28] = selectedClassNames;
    $[29] = value;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  var handleRenderDay = t11;
  var t12;
  if ($[31] !== LeftArrowButton || $[32] !== RightArrowButton || $[33] !== handleRenderDay) {
    t12 = {
      previousIconButton: LeftArrowButton,
      nextIconButton: RightArrowButton,
      day: handleRenderDay,
      actionBar: _temp2$1
    };
    $[31] = LeftArrowButton;
    $[32] = RightArrowButton;
    $[33] = handleRenderDay;
    $[34] = t12;
  } else {
    t12 = $[34];
  }
  var t13;
  if ($[35] !== onValueChange || $[36] !== selectType) {
    t13 = function t13(newValue_2) {
      return onValueChange && onValueChange(selectType, newValue_2);
    };
    $[35] = onValueChange;
    $[36] = selectType;
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  var t14;
  if ($[38] !== onMonthChange) {
    t14 = function t14(month_1) {
      if (onMonthChange) {
        onMonthChange(month_1);
      }
      setActiveMonthValue(null);
    };
    $[38] = onMonthChange;
    $[39] = t14;
  } else {
    t14 = $[39];
  }
  var t15;
  if ($[40] !== activeMonthValue || $[41] !== disableFuture || $[42] !== disablePast || $[43] !== maxDate || $[44] !== minDate || $[45] !== month || $[46] !== t12 || $[47] !== t13 || $[48] !== t14) {
    t15 = /*#__PURE__*/React.createElement(xDatePickers.StaticDatePicker, {
      className: "PFormDateRangePickerTooltipPicker",
      displayStaticWrapperAs: "desktop",
      slots: t12,
      value: activeMonthValue,
      referenceDate: month,
      disableFuture: disableFuture,
      disablePast: disablePast,
      minDate: minDate,
      maxDate: maxDate,
      onChange: t13,
      onMonthChange: t14
    });
    $[40] = activeMonthValue;
    $[41] = disableFuture;
    $[42] = disablePast;
    $[43] = maxDate;
    $[44] = minDate;
    $[45] = month;
    $[46] = t12;
    $[47] = t13;
    $[48] = t14;
    $[49] = t15;
  } else {
    t15 = $[49];
  }
  return t15;
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
  var $ = compilerRuntime.c(118);
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
  var theme = material.useTheme();
  var datePicker1Ref = React.useRef(null);
  var datePicker2Ref = React.useRef(null);
  var datePicker3Ref = React.useRef(null);
  var yearSelectRef = React.useRef(null);
  var activeYearBtnRef = React.useRef(null);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    focusedDate = _useState2[0],
    setFocusedDate = _useState2[1];
  var _useState3 = React.useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    yearMonthSelectIndex = _useState4[0],
    setYearMonthSelectIndex = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    yearSelectOpen = _useState6[0],
    setYearSelectOpen = _useState6[1];
  var _useState7 = React.useState(false),
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
  React.useEffect(t6, t7);
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
  reactHook.useForwardRef(ref, t11);
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
      }, /*#__PURE__*/React.createElement(material.Button, {
        variant: "text",
        className: yearSelectOpen && yearMonthSelectIndex === index_1 ? "active" : undefined,
        onClick: function onClick() {
          return handleYearSelectClick(index_1);
        }
      }, months[index_1].format("YYYY\uB144"), /*#__PURE__*/React.createElement(material.Icon, null, yearSelectOpen && yearMonthSelectIndex === index_1 ? "arrow_drop_up" : "arrow_drop_down")), /*#__PURE__*/React.createElement(material.Button, {
        variant: "text",
        className: monthSelectOpen && yearMonthSelectIndex === index_1 ? "active" : undefined,
        onClick: function onClick() {
          return handleMonthSelectClick(index_1);
        }
      }, months[index_1].format("M\uC6D4"), /*#__PURE__*/React.createElement(material.Icon, null, monthSelectOpen && yearMonthSelectIndex === index_1 ? "arrow_drop_up" : "arrow_drop_down")));
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
      return /*#__PURE__*/React.createElement(material.Button, {
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
    t20 = !yearSelectOpen && !monthSelectOpen && /*#__PURE__*/React.createElement(material.Grid, null, /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      className: "month-change-arrow-wrap"
    }, /*#__PURE__*/React.createElement(material.Grid, {
      size: {
        xs: 6
      }
    }, /*#__PURE__*/React.createElement(material.IconButton, {
      onClick: previousMonth
    }, /*#__PURE__*/React.createElement(material.Icon, null, "keyboard_arrow_left"))), /*#__PURE__*/React.createElement(material.Grid, {
      size: {
        xs: 6
      }
    }, /*#__PURE__*/React.createElement(material.IconButton, {
      onClick: nextMonth
    }, /*#__PURE__*/React.createElement(material.Icon, null, "keyboard_arrow_right")))));
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
    t29 = /*#__PURE__*/React.createElement(material.Grid, null, /*#__PURE__*/React.createElement(PFormDateRangePickerTooltipPicker, _extends({}, customDatePickerProps, {
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
    t31 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t32 = Number(calendarCount) >= 3 && /*#__PURE__*/React.createElement(material.Grid, {
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
    t33 = /*#__PURE__*/React.createElement(material.Grid, {
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
    }, /*#__PURE__*/React.createElement(material.Grid, {
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
      return /*#__PURE__*/React.createElement(material.Grid, {
        key: y,
        size: {
          xs: 2
        }
      }, /*#__PURE__*/React.createElement(material.Button, {
        variant: "text",
        fullWidth: true,
        disabled: disabled_0,
        className: classNames(isSelected && "selected", isActive && "active", isToday && "today"),
        ref: isActive ? activeYearBtnRef : undefined,
        sx: {
          backgroundColor: isSelected ? theme.palette.primary.main : undefined,
          color: isSelected ? "white" : "unset",
          ":hover": {
            backgroundColor: isSelected ? material.darken(theme.palette.primary.main, 0.2) : material.darken("#fff", 0.1)
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
    }, /*#__PURE__*/React.createElement(material.Grid, {
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
      return /*#__PURE__*/React.createElement(material.Grid, {
        key: m_0,
        size: {
          xs: 4
        }
      }, /*#__PURE__*/React.createElement(material.Button, {
        variant: "text",
        fullWidth: true,
        disabled: disabled_1,
        className: classNames(isSelected_0 && "selected", isActive_0 && "active", isToday_0 && "today"),
        ref: isActive_0 ? activeYearBtnRef : undefined,
        sx: {
          backgroundColor: isSelected_0 ? theme.palette.primary.main : undefined,
          color: isSelected_0 ? "white" : "unset",
          ":hover": {
            backgroundColor: isSelected_0 ? material.darken(theme.palette.primary.main, 0.2) : material.darken("#fff", 0.1)
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
    t37 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t39 = /*#__PURE__*/React.createElement(material.Grid, {
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
    }, /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(238);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var containerRef = React.useRef(null);
  var startDateTextFieldRef = React.useRef(undefined);
  var endDateTextFieldRef = React.useRef(undefined);
  var closeTimeoutRef = React.useRef(undefined);
  var mouseDownTimeRef = React.useRef(undefined);
  var startInputDatePickerErrorRef = React.useRef(null);
  var endInputDatePickerErrorRef = React.useRef(null);
  var openValueRef = React.useRef(undefined);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fromError = _useState4[0],
    setFromError = _useState4[1];
  var _useState5 = React.useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    fromErrorHelperText = _useState6[0],
    setFromErrorHelperText = _useState6[1];
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    toError = _useState8[0],
    setToError = _useState8[1];
  var _useState9 = React.useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    toErrorHelperText = _useState0[0],
    setToErrorHelperText = _useState0[1];
  var _useState1 = React.useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setopen = _useState10[1];
  var _useState11 = React.useState("start"),
    _useState12 = _slicedToArray(_useState11, 2),
    selectType = _useState12[0],
    setSelectType = _useState12[1];
  var _useState13 = React.useState(_temp$a),
    _useState14 = _slicedToArray(_useState13, 2),
    months = _useState14[0],
    setMonths = _useState14[1];
  var _useState15 = React.useState(initError),
    _useState16 = _slicedToArray(_useState15, 2),
    error = _useState16[0],
    _setError = _useState16[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t7;
  if ($[0] !== errorRef) {
    t7 = function t7(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t7;
  } else {
    t7 = $[1];
  }
  var setError = t7;
  var _useState17 = React.useState(initData),
    _useState18 = _slicedToArray(_useState17, 2),
    data = _useState18[0],
    _setData = _useState18[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t8;
  if ($[2] !== dataRef) {
    t8 = function t8(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t8;
  } else {
    t8 = $[3];
  }
  var setData = t8;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState19 = React.useState(finalInitDisabled),
    _useState20 = _slicedToArray(_useState19, 2),
    disabled = _useState20[0],
    setDisabled = _useState20[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState21 = React.useState(initHidden),
    _useState22 = _slicedToArray(_useState21, 2),
    hidden = _useState22[0],
    setHidden = _useState22[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t9;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9() {
      var _startDateTextFieldRe;
      (_startDateTextFieldRe = startDateTextFieldRef.current) === null || _startDateTextFieldRe === void 0 || _startDateTextFieldRe.focus();
    };
    $[4] = t9;
  } else {
    t9 = $[4];
  }
  var focus = t9;
  var t10;
  if ($[5] !== toError) {
    t10 = function t10() {
      if (toError) {
        var _endDateTextFieldRef$;
        (_endDateTextFieldRef$ = endDateTextFieldRef.current) === null || _endDateTextFieldRef$ === void 0 || _endDateTextFieldRef$.focus();
      } else {
        var _startDateTextFieldRe2;
        (_startDateTextFieldRe2 = startDateTextFieldRef.current) === null || _startDateTextFieldRe2 === void 0 || _startDateTextFieldRe2.focus();
      }
    };
    $[5] = toError;
    $[6] = t10;
  } else {
    t10 = $[6];
  }
  var focusValidate = t10;
  var t11;
  if ($[7] !== setError) {
    t11 = function t11(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[7] = setError;
    $[8] = t11;
  } else {
    t11 = $[8];
  }
  var setErrorErrorHelperText = t11;
  var t12;
  if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12(error_1, fromErrorHelperText_0) {
      setFromError(error_1);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[9] = t12;
  } else {
    t12 = $[9];
  }
  var setFromErrorErrorHelperText = t12;
  var t13;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t13 = function t13(error_2, toErrorHelperText_0) {
      setToError(error_2);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[10] = t13;
  } else {
    t13 = $[10];
  }
  var setToErrorErrorHelperText = t13;
  var t14;
  if ($[11] !== allowSingleSelect || $[12] !== format || $[13] !== onValidateRef || $[14] !== required || $[15] !== requiredEnd || $[16] !== requiredStart || $[17] !== setErrorErrorHelperText) {
    t14 = function t14(value_1) {
      var _startDateTextFieldRe3, _endDateTextFieldRef$2;
      if (required && (value_1[0] == null || value_1[1] == null)) {
        if (value_1[0] == null && value_1[1] == null) {
          setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          if (value_1[0] == null) {
            setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          } else {
            setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
          }
        }
        return false;
      }
      if (requiredStart && value_1[0] == null) {
        setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (requiredEnd && value_1[1] == null) {
        setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (!allowSingleSelect && (value_1[0] || value_1[1]) && (value_1[0] == null || value_1[1] == null)) {
        if (value_1[0] == null) {
          setFromErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          setToErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        }
        return false;
      }
      var startInputValue = ((_startDateTextFieldRe3 = startDateTextFieldRef.current) === null || _startDateTextFieldRe3 === void 0 ? void 0 : _startDateTextFieldRe3.value) || "";
      var endInputValue = ((_endDateTextFieldRef$2 = endDateTextFieldRef.current) === null || _endDateTextFieldRef$2 === void 0 ? void 0 : _endDateTextFieldRef$2.value) || "";
      if (compare.notEmpty(startInputValue) && !dayjs(startInputValue, format).isValid()) {
        setFromErrorErrorHelperText(true, "\uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        return false;
      }
      if (compare.notEmpty(endInputValue) && !dayjs(endInputValue, format).isValid()) {
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
        var onValidateResult = onValidateRef.current(value_1);
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
    $[11] = allowSingleSelect;
    $[12] = format;
    $[13] = onValidateRef;
    $[14] = required;
    $[15] = requiredEnd;
    $[16] = requiredStart;
    $[17] = setErrorErrorHelperText;
    $[18] = t14;
  } else {
    t14 = $[18];
  }
  var validate = t14;
  var t15;
  if ($[19] === Symbol["for"]("react.memo_cache_sentinel")) {
    t15 = function t15(month) {
      var _containerRef$current;
      setMonths([month, month.add(1, "month"), month.add(2, "month")]);
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 || _containerRef$current.activeMonth(month);
    };
    $[19] = t15;
  } else {
    t15 = $[19];
  }
  var activeMonth = t15;
  var t16;
  if ($[20] !== initValue) {
    t16 = getFinalValue$6(initValue);
    $[20] = initValue;
    $[21] = t16;
  } else {
    t16 = $[21];
  }
  var _useState23 = React.useState(t16),
    _useState24 = _slicedToArray(_useState23, 2),
    value_2 = _useState24[0],
    _setValue = _useState24[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue$6(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t17;
  if ($[22] !== valueRef) {
    t17 = function t17(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[22] = valueRef;
    $[23] = t17;
  } else {
    t17 = $[23];
  }
  var setValue = t17;
  var t18;
  if ($[24] !== error || $[25] !== fromError || $[26] !== name || $[27] !== onChangeRef || $[28] !== onValueChange || $[29] !== setValue || $[30] !== toError || $[31] !== validate) {
    t18 = function t18(newValue_2) {
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
    $[24] = error;
    $[25] = fromError;
    $[26] = name;
    $[27] = onChangeRef;
    $[28] = onValueChange;
    $[29] = setValue;
    $[30] = toError;
    $[31] = validate;
    $[32] = t18;
  } else {
    t18 = $[32];
  }
  var updateValue = t18;
  var t19;
  if ($[33] !== allowSingleSelect || $[34] !== name || $[35] !== onRequestSearchSubmit || $[36] !== open || $[37] !== valueRef) {
    t19 = function t19() {
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
    $[33] = allowSingleSelect;
    $[34] = name;
    $[35] = onRequestSearchSubmit;
    $[36] = open;
    $[37] = valueRef;
    $[38] = t19;
  } else {
    t19 = $[38];
  }
  var effectEvent = React.useEffectEvent(t19);
  var firstSkipRef = React.useRef(true);
  var t20;
  if ($[39] !== effectEvent) {
    t20 = function t20() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    };
    $[39] = effectEvent;
    $[40] = t20;
  } else {
    t20 = $[40];
  }
  var t21;
  if ($[41] !== open) {
    t21 = [open];
    $[41] = open;
    $[42] = t21;
  } else {
    t21 = $[42];
  }
  React.useEffect(t20, t21);
  var t22;
  if ($[43] !== updateValue) {
    t22 = function t22(newValue_3) {
      updateValue(newValue_3);
      setopen(false);
      setFromErrorErrorHelperText(false, undefined);
      setToErrorErrorHelperText(false, undefined);
    };
    $[43] = updateValue;
    $[44] = t22;
  } else {
    t22 = $[44];
  }
  var handleChange = t22;
  var t23;
  if ($[45] !== calendarCount || $[46] !== name || $[47] !== onRequestSearchSubmit || $[48] !== onValueChangeByUser || $[49] !== open || $[50] !== updateValue || $[51] !== value_2[0] || $[52] !== value_2[1]) {
    t23 = function t23(selectType_0, newValue_4, fromInput) {
      var finalValue_0;
      bb303: switch (selectType_0) {
        case "start":
          {
            var _value_2$;
            if ((_value_2$ = value_2[1]) !== null && _value_2$ !== void 0 && _value_2$.isBefore(newValue_4)) {
              finalValue_0 = [newValue_4, null];
              if (!fromInput) {
                setTimeout(function () {
                  var _endDateTextFieldRef$3;
                  (_endDateTextFieldRef$3 = endDateTextFieldRef.current) === null || _endDateTextFieldRef$3 === void 0 || _endDateTextFieldRef$3.focus();
                });
              }
            } else {
              finalValue_0 = [newValue_4, value_2[1]];
              if (!fromInput) {
                if (value_2[0] == null && newValue_4 != null && value_2[1] != null) {
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
            break bb303;
          }
        case "end":
          {
            if (newValue_4 !== null && newValue_4 !== void 0 && newValue_4.isBefore(value_2[0])) {
              finalValue_0 = [newValue_4, null];
              if (fromInput && newValue_4) {
                activeMonth(newValue_4.subtract(calendarCount - 1, "month"));
              }
              setFromErrorErrorHelperText(false, undefined);
            } else {
              finalValue_0 = [value_2[0], newValue_4];
              if (fromInput && newValue_4) {
                activeMonth(newValue_4.subtract(calendarCount - 1, "month"));
              }
              if (value_2[0]) {
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
    $[45] = calendarCount;
    $[46] = name;
    $[47] = onRequestSearchSubmit;
    $[48] = onValueChangeByUser;
    $[49] = open;
    $[50] = updateValue;
    $[51] = value_2[0];
    $[52] = value_2[1];
    $[53] = t23;
  } else {
    t23 = $[53];
  }
  var handleValueChange = t23;
  var t24;
  if ($[54] !== handleValueChange) {
    t24 = function t24(selectType_1, newValue_5) {
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
      bb403: switch (selectType_1) {
        case "start":
          {
            setFromError(error_3);
            break bb403;
          }
        case "end":
          {
            setToError(error_3);
          }
      }
    };
    $[54] = handleValueChange;
    $[55] = t24;
  } else {
    t24 = $[55];
  }
  var handleInputDatePickerChange = t24;
  var t25;
  if ($[56] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = function t25() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[56] = t25;
  } else {
    t25 = $[56];
  }
  var handleContainerFocus = t25;
  var t26;
  if ($[57] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = function t26() {
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
    $[57] = t26;
  } else {
    t26 = $[57];
  }
  var handleContainerBlur = t26;
  var t27;
  if ($[58] === Symbol["for"]("react.memo_cache_sentinel")) {
    t27 = function t27() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[58] = t27;
  } else {
    t27 = $[58];
  }
  var handleContainerMouseDown = t27;
  var t28;
  if ($[59] !== calendarCount || $[60] !== disabled || $[61] !== readOnly || $[62] !== valueRef) {
    t28 = function t28(selectType_2) {
      if (readOnly || disabled) {
        return;
      }
      var startValue = valueRef.current[0];
      var endValue = valueRef.current[1];
      setopen(true);
      setSelectType(selectType_2);
      if (startValue && endValue) {
        bb434: switch (selectType_2) {
          case "start":
            {
              activeMonth(startValue);
              break bb434;
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
    $[59] = calendarCount;
    $[60] = disabled;
    $[61] = readOnly;
    $[62] = valueRef;
    $[63] = t28;
  } else {
    t28 = $[63];
  }
  var handleInputDatePickerFocus = t28;
  var t29;
  if ($[64] !== name) {
    t29 = function t29() {
      return name;
    };
    $[64] = name;
    $[65] = t29;
  } else {
    t29 = $[65];
  }
  var t30;
  if ($[66] !== initValueRef) {
    t30 = function t30() {
      return getFinalValue$6(initValueRef.current);
    };
    $[66] = initValueRef;
    $[67] = t30;
  } else {
    t30 = $[67];
  }
  var t31;
  if ($[68] !== initValueRef || $[69] !== updateValue) {
    t31 = function t31() {
      return updateValue(initValueRef.current);
    };
    $[68] = initValueRef;
    $[69] = updateValue;
    $[70] = t31;
  } else {
    t31 = $[70];
  }
  var t32;
  if ($[71] !== valueRef) {
    t32 = function t32() {
      return valueRef.current;
    };
    $[71] = valueRef;
    $[72] = t32;
  } else {
    t32 = $[72];
  }
  var t33;
  if ($[73] !== dataRef) {
    t33 = function t33() {
      return dataRef.current;
    };
    $[73] = dataRef;
    $[74] = t33;
  } else {
    t33 = $[74];
  }
  var t34;
  if ($[75] !== valueRef) {
    t34 = function t34() {
      return valueRef.current[0];
    };
    $[75] = valueRef;
    $[76] = t34;
  } else {
    t34 = $[76];
  }
  var t35;
  if ($[77] !== updateValue || $[78] !== valueRef) {
    t35 = function t35(value_4) {
      return updateValue([value_4, valueRef.current[1]]);
    };
    $[77] = updateValue;
    $[78] = valueRef;
    $[79] = t35;
  } else {
    t35 = $[79];
  }
  var t36;
  if ($[80] !== valueRef) {
    t36 = function t36() {
      return valueRef.current[1];
    };
    $[80] = valueRef;
    $[81] = t36;
  } else {
    t36 = $[81];
  }
  var t37;
  if ($[82] !== updateValue || $[83] !== valueRef) {
    t37 = function t37(value_5) {
      return updateValue([valueRef.current[0], value_5]);
    };
    $[82] = updateValue;
    $[83] = valueRef;
    $[84] = t37;
  } else {
    t37 = $[84];
  }
  var t38;
  if ($[85] !== exceptValue) {
    t38 = function t38() {
      return !!exceptValue;
    };
    $[85] = exceptValue;
    $[86] = t38;
  } else {
    t38 = $[86];
  }
  var t39;
  if ($[87] !== disabled) {
    t39 = function t39() {
      return !!disabled;
    };
    $[87] = disabled;
    $[88] = t39;
  } else {
    t39 = $[88];
  }
  var t40;
  if ($[89] !== hidden) {
    t40 = function t40() {
      return !!hidden;
    };
    $[89] = hidden;
    $[90] = t40;
  } else {
    t40 = $[90];
  }
  var t41;
  if ($[91] !== validate || $[92] !== valueRef) {
    t41 = function t41() {
      return validate(valueRef.current);
    };
    $[91] = validate;
    $[92] = valueRef;
    $[93] = t41;
  } else {
    t41 = $[93];
  }
  var t42;
  if ($[94] !== formValueFormat) {
    t42 = function t42() {
      return formValueFormat;
    };
    $[94] = formValueFormat;
    $[95] = t42;
  } else {
    t42 = $[95];
  }
  var t43;
  if ($[96] !== formValueFromNameSuffix) {
    t43 = function t43() {
      return formValueFromNameSuffix;
    };
    $[96] = formValueFromNameSuffix;
    $[97] = t43;
  } else {
    t43 = $[97];
  }
  var t44;
  if ($[98] !== formValueToNameSuffix) {
    t44 = function t44() {
      return formValueToNameSuffix;
    };
    $[98] = formValueToNameSuffix;
    $[99] = t44;
  } else {
    t44 = $[99];
  }
  var t45;
  if ($[100] !== formValueFromNameSuffix || $[101] !== name) {
    t45 = function t45() {
      return "".concat(name).concat(formValueFromNameSuffix);
    };
    $[100] = formValueFromNameSuffix;
    $[101] = name;
    $[102] = t45;
  } else {
    t45 = $[102];
  }
  var t46;
  if ($[103] !== formValueToNameSuffix || $[104] !== name) {
    t46 = function t46() {
      return "".concat(name).concat(formValueToNameSuffix);
    };
    $[103] = formValueToNameSuffix;
    $[104] = name;
    $[105] = t46;
  } else {
    t46 = $[105];
  }
  var t47;
  if ($[106] !== focusValidate || $[107] !== setData || $[108] !== setErrorErrorHelperText || $[109] !== t29 || $[110] !== t30 || $[111] !== t31 || $[112] !== t32 || $[113] !== t33 || $[114] !== t34 || $[115] !== t35 || $[116] !== t36 || $[117] !== t37 || $[118] !== t38 || $[119] !== t39 || $[120] !== t40 || $[121] !== t41 || $[122] !== t42 || $[123] !== t43 || $[124] !== t44 || $[125] !== t45 || $[126] !== t46 || $[127] !== updateValue) {
    t47 = {
      getType: _temp2,
      getName: t29,
      getReset: t30,
      reset: t31,
      getValue: t32,
      setValue: updateValue,
      getData: t33,
      setData: setData,
      getFromValue: t34,
      setFromValue: t35,
      getToValue: t36,
      setToValue: t37,
      isExceptValue: t38,
      isDisabled: t39,
      setDisabled: setDisabled,
      isHidden: t40,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focusValidate,
      validate: t41,
      setError: setErrorErrorHelperText,
      getFormValueFormat: t42,
      getFormValueFromNameSuffix: t43,
      getFormValueToNameSuffix: t44,
      getFormValueFromName: t45,
      getFormValueToName: t46
    };
    $[106] = focusValidate;
    $[107] = setData;
    $[108] = setErrorErrorHelperText;
    $[109] = t29;
    $[110] = t30;
    $[111] = t31;
    $[112] = t32;
    $[113] = t33;
    $[114] = t34;
    $[115] = t35;
    $[116] = t36;
    $[117] = t37;
    $[118] = t38;
    $[119] = t39;
    $[120] = t40;
    $[121] = t41;
    $[122] = t42;
    $[123] = t43;
    $[124] = t44;
    $[125] = t45;
    $[126] = t46;
    $[127] = updateValue;
    $[128] = t47;
  } else {
    t47 = $[128];
  }
  var commands = t47;
  var t48;
  if ($[129] !== id || $[130] !== onAddValueItem) {
    t48 = function t48(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[129] = id;
    $[130] = onAddValueItem;
    $[131] = t48;
  } else {
    t48 = $[131];
  }
  var t49;
  if ($[132] !== id || $[133] !== onRemoveValueItem) {
    t49 = function t49() {
      return onRemoveValueItem(id);
    };
    $[132] = id;
    $[133] = onRemoveValueItem;
    $[134] = t49;
  } else {
    t49 = $[134];
  }
  reactHook.useForwardRef(ref, commands, t48, t49);
  var t50;
  if ($[135] !== align || $[136] !== color || $[137] !== disableFuture || $[138] !== disablePast || $[139] !== disabled || $[140] !== format || $[141] !== fullWidth || $[142] !== labelShrink || $[143] !== maxDate || $[144] !== minDate || $[145] !== size || $[146] !== variant) {
    t50 = {
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
    $[135] = align;
    $[136] = color;
    $[137] = disableFuture;
    $[138] = disablePast;
    $[139] = disabled;
    $[140] = format;
    $[141] = fullWidth;
    $[142] = labelShrink;
    $[143] = maxDate;
    $[144] = minDate;
    $[145] = size;
    $[146] = variant;
    $[147] = t50;
  } else {
    t50 = $[147];
  }
  var inputDatePickerProps = t50;
  var t51;
  if ($[148] !== fullWidth || $[149] !== inputWidth) {
    t51 = inputWidth != null ? {
      width: inputWidth
    } : {
      width: fullWidth ? undefined : 150
    };
    $[148] = fullWidth;
    $[149] = inputWidth;
    $[150] = t51;
  } else {
    t51 = $[150];
  }
  var inputStyle = t51;
  var t52;
  if ($[151] === Symbol["for"]("react.memo_cache_sentinel")) {
    t52 = function t52() {
      return setopen(false);
    };
    $[151] = t52;
  } else {
    t52 = $[151];
  }
  var t53;
  if ($[152] !== className) {
    t53 = classNames(className, "PFormDateRangePicker");
    $[152] = className;
    $[153] = t53;
  } else {
    t53 = $[153];
  }
  var t54 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t55 = fullWidth ? 1 : undefined;
  var t56;
  if ($[154] !== t54 || $[155] !== t55) {
    t56 = {
      display: t54,
      flex: t55
    };
    $[154] = t54;
    $[155] = t55;
    $[156] = t56;
  } else {
    t56 = $[156];
  }
  var t57 = error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText ? 8 : -14;
  var t58;
  if ($[157] !== t57) {
    t58 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t57]
          }
        }]
      }
    };
    $[157] = t57;
    $[158] = t58;
  } else {
    t58 = $[158];
  }
  var t59;
  if ($[159] === Symbol["for"]("react.memo_cache_sentinel")) {
    t59 = {
      display: "flex"
    };
    $[159] = t59;
  } else {
    t59 = $[159];
  }
  var t60;
  if ($[160] !== calendarCount || $[161] !== disableFuture || $[162] !== disablePast || $[163] !== handleChange || $[164] !== handleValueChange || $[165] !== maxDate || $[166] !== minDate || $[167] !== months || $[168] !== onGetActionButtons || $[169] !== selectType || $[170] !== value_2) {
    t60 = /*#__PURE__*/React.createElement("div", {
      style: t59
    }, /*#__PURE__*/React.createElement(PFormDateRangePickerTooltipPickerContainer, {
      ref: containerRef,
      calendarCount: calendarCount,
      selectType: selectType,
      value: value_2,
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
    $[160] = calendarCount;
    $[161] = disableFuture;
    $[162] = disablePast;
    $[163] = handleChange;
    $[164] = handleValueChange;
    $[165] = maxDate;
    $[166] = minDate;
    $[167] = months;
    $[168] = onGetActionButtons;
    $[169] = selectType;
    $[170] = value_2;
    $[171] = t60;
  } else {
    t60 = $[171];
  }
  var t61 = error || fromError;
  var t62 = focused || open && selectType === "start";
  var t63 = required || requiredStart;
  var t64 = readOnly || readOnlyStart;
  var t65 = startIcon || icon;
  var t66 = startStartAdornment || startAdornment;
  var t67 = startEndAdornment || endAdornment;
  var t68;
  if ($[172] !== handleInputDatePickerChange) {
    t68 = function t68(newValue_6) {
      return handleInputDatePickerChange("start", newValue_6);
    };
    $[172] = handleInputDatePickerChange;
    $[173] = t68;
  } else {
    t68 = $[173];
  }
  var t69;
  if ($[174] !== handleInputDatePickerFocus) {
    t69 = function t69() {
      return handleInputDatePickerFocus("start");
    };
    $[174] = handleInputDatePickerFocus;
    $[175] = t69;
  } else {
    t69 = $[175];
  }
  var t70;
  if ($[176] === Symbol["for"]("react.memo_cache_sentinel")) {
    t70 = function t70(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[176] = t70;
  } else {
    t70 = $[176];
  }
  var t71;
  if ($[177] !== enableKeyboardInput || $[178] !== fromLabel || $[179] !== fromLabelIcon || $[180] !== inputDatePickerProps || $[181] !== inputStyle || $[182] !== t61 || $[183] !== t62 || $[184] !== t63 || $[185] !== t64 || $[186] !== t65 || $[187] !== t66 || $[188] !== t67 || $[189] !== t68 || $[190] !== t69 || $[191] !== value_2[0]) {
    t71 = /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      value: value_2[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t61,
      focused: t62,
      required: t63,
      readOnly: t64,
      enableKeyboardInput: enableKeyboardInput,
      icon: t65,
      startAdornment: t66,
      endAdornment: t67,
      inputRef: startDateTextFieldRef,
      onChange: t68,
      onFocus: t69,
      onError: t70
    })));
    $[177] = enableKeyboardInput;
    $[178] = fromLabel;
    $[179] = fromLabelIcon;
    $[180] = inputDatePickerProps;
    $[181] = inputStyle;
    $[182] = t61;
    $[183] = t62;
    $[184] = t63;
    $[185] = t64;
    $[186] = t65;
    $[187] = t66;
    $[188] = t67;
    $[189] = t68;
    $[190] = t69;
    $[191] = value_2[0];
    $[192] = t71;
  } else {
    t71 = $[192];
  }
  var t72;
  if ($[193] === Symbol["for"]("react.memo_cache_sentinel")) {
    t72 = /*#__PURE__*/React.createElement(material.Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[193] = t72;
  } else {
    t72 = $[193];
  }
  var t73 = error || toError;
  var t74 = focused || open && selectType === "end";
  var t75 = required || requiredEnd;
  var t76 = readOnly || readOnlyEnd;
  var t77 = endIcon || icon;
  var t78 = endStartAdornment || startAdornment;
  var t79 = endEndAdornment || endAdornment;
  var t80;
  if ($[194] !== handleInputDatePickerChange) {
    t80 = function t80(newValue_7) {
      return handleInputDatePickerChange("end", newValue_7);
    };
    $[194] = handleInputDatePickerChange;
    $[195] = t80;
  } else {
    t80 = $[195];
  }
  var t81;
  if ($[196] !== handleInputDatePickerFocus) {
    t81 = function t81() {
      return handleInputDatePickerFocus("end");
    };
    $[196] = handleInputDatePickerFocus;
    $[197] = t81;
  } else {
    t81 = $[197];
  }
  var t82;
  if ($[198] === Symbol["for"]("react.memo_cache_sentinel")) {
    t82 = function t82(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[198] = t82;
  } else {
    t82 = $[198];
  }
  var t83;
  if ($[199] !== enableKeyboardInput || $[200] !== inputDatePickerProps || $[201] !== inputStyle || $[202] !== t73 || $[203] !== t74 || $[204] !== t75 || $[205] !== t76 || $[206] !== t77 || $[207] !== t78 || $[208] !== t79 || $[209] !== t80 || $[210] !== t81 || $[211] !== toLabel || $[212] !== toLabelIcon || $[213] !== value_2[1]) {
    t83 = /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      value: value_2[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t73,
      focused: t74,
      required: t75,
      readOnly: t76,
      enableKeyboardInput: enableKeyboardInput,
      icon: t77,
      startAdornment: t78,
      endAdornment: t79,
      inputRef: endDateTextFieldRef,
      onChange: t80,
      onFocus: t81,
      onError: t82
    })));
    $[199] = enableKeyboardInput;
    $[200] = inputDatePickerProps;
    $[201] = inputStyle;
    $[202] = t73;
    $[203] = t74;
    $[204] = t75;
    $[205] = t76;
    $[206] = t77;
    $[207] = t78;
    $[208] = t79;
    $[209] = t80;
    $[210] = t81;
    $[211] = toLabel;
    $[212] = toLabelIcon;
    $[213] = value_2[1];
    $[214] = t83;
  } else {
    t83 = $[214];
  }
  var t84;
  if ($[215] !== t71 || $[216] !== t83) {
    t84 = /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      alignItems: "center"
    }, t71, t72, t83);
    $[215] = t71;
    $[216] = t83;
    $[217] = t84;
  } else {
    t84 = $[217];
  }
  var t85;
  if ($[218] !== open || $[219] !== t58 || $[220] !== t60 || $[221] !== t84) {
    t85 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t58,
      title: t60
    }, t84);
    $[218] = open;
    $[219] = t58;
    $[220] = t60;
    $[221] = t84;
    $[222] = t85;
  } else {
    t85 = $[222];
  }
  var t86;
  if ($[223] !== error || $[224] !== errorHelperText || $[225] !== formColWithHelperText || $[226] !== fromError || $[227] !== fromErrorHelperText || $[228] !== helperText || $[229] !== toError || $[230] !== toErrorHelperText || $[231] !== variant) {
    t86 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(material.FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[223] = error;
    $[224] = errorHelperText;
    $[225] = formColWithHelperText;
    $[226] = fromError;
    $[227] = fromErrorHelperText;
    $[228] = helperText;
    $[229] = toError;
    $[230] = toErrorHelperText;
    $[231] = variant;
    $[232] = t86;
  } else {
    t86 = $[232];
  }
  var t87;
  if ($[233] !== t53 || $[234] !== t56 || $[235] !== t85 || $[236] !== t86) {
    t87 = /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
      dateAdapter: AdapterDayjs.AdapterDayjs
    }, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t52
    }, /*#__PURE__*/React.createElement("div", {
      className: t53,
      style: t56,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t85, t86)));
    $[233] = t53;
    $[234] = t56;
    $[235] = t85;
    $[236] = t86;
    $[237] = t87;
  } else {
    t87 = $[237];
  }
  return t87;
};
function _temp$a() {
  var now = dayjs();
  return [now, now.add(1, "month"), now.add(2, "month")];
}
function _temp2() {
  return "PFormDateRangePicker";
}var LinkDialog = function LinkDialog(t0) {
  var $ = compilerRuntime.c(34);
  var open = t0.open,
    onConfirm = t0.onConfirm,
    onCancel = t0.onCancel,
    onClose = t0.onClose;
  var inputRef = React.useRef(null);
  var _useState = React.useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      return setValue("");
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var effectEvent = React.useEffectEvent(t1);
  var t2;
  if ($[1] !== effectEvent || $[2] !== open) {
    t2 = function t2() {
      if (!open) {
        effectEvent();
      }
    };
    $[1] = effectEvent;
    $[2] = open;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var t3;
  if ($[4] !== open) {
    t3 = [open];
    $[4] = open;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  React.useEffect(t2, t3);
  var t4;
  if ($[6] !== onClose || $[7] !== onConfirm || $[8] !== value) {
    t4 = function t4() {
      var _inputRef$current;
      if ((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.validate()) {
        onConfirm && onConfirm(value);
        onClose && onClose();
      } else {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.focus();
      }
    };
    $[6] = onClose;
    $[7] = onConfirm;
    $[8] = value;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var handleSubmit = t4;
  var t5;
  if ($[10] !== onCancel || $[11] !== onClose) {
    t5 = function t5() {
      onCancel && onCancel();
      onClose && onClose();
    };
    $[10] = onCancel;
    $[11] = onClose;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  var handleCancel = t5;
  var t6 = !!open;
  var t7;
  if ($[13] !== onClose || $[14] !== value) {
    t7 = function t7(e, reason) {
      if (reason === "backdropClick") {
        if (compare.empty(value)) {
          onClose && onClose();
        }
      }
    };
    $[13] = onClose;
    $[14] = value;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  var t8;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/React.createElement(material.DialogTitle, null, "\uD30C\uC77C \uB9C1\uD06C");
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  var t9;
  if ($[17] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = /*#__PURE__*/React.createElement("div", null, "\uD30C\uC77C\uC758 \uB9C1\uD06C URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  var t10;
  if ($[18] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(ref) {
      if (inputRef.current == null && ref !== null) {
        ref.focus();
      }
      inputRef.current = ref;
    };
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var t11;
  if ($[19] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = {
      marginTop: 15
    };
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  var t12;
  if ($[20] !== value) {
    t12 = /*#__PURE__*/React.createElement(material.DialogContent, null, /*#__PURE__*/React.createElement(material.Box, null, t9, /*#__PURE__*/React.createElement(PFormUrl, {
      ref: t10,
      name: "form-file-link-url",
      label: "\uB9C1\uD06C URL",
      value: value,
      required: true,
      fullWidth: true,
      style: t11,
      onChange: setValue
    })));
    $[20] = value;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  var t13;
  if ($[22] !== handleCancel) {
    t13 = /*#__PURE__*/React.createElement(material.Button, {
      variant: "text",
      onClick: handleCancel
    }, "\uCDE8\uC18C");
    $[22] = handleCancel;
    $[23] = t13;
  } else {
    t13 = $[23];
  }
  var t14;
  if ($[24] !== handleSubmit) {
    t14 = /*#__PURE__*/React.createElement(material.Button, {
      variant: "text",
      onClick: handleSubmit
    }, "\uD655\uC778");
    $[24] = handleSubmit;
    $[25] = t14;
  } else {
    t14 = $[25];
  }
  var t15;
  if ($[26] !== t13 || $[27] !== t14) {
    t15 = /*#__PURE__*/React.createElement(material.DialogActions, null, t13, t14);
    $[26] = t13;
    $[27] = t14;
    $[28] = t15;
  } else {
    t15 = $[28];
  }
  var t16;
  if ($[29] !== t12 || $[30] !== t15 || $[31] !== t6 || $[32] !== t7) {
    t16 = /*#__PURE__*/React.createElement(material.Dialog, {
      className: "color-primary",
      open: t6,
      maxWidth: "sm",
      fullWidth: true,
      onClose: t7
    }, t8, t12, t15);
    $[29] = t12;
    $[30] = t15;
    $[31] = t6;
    $[32] = t7;
    $[33] = t16;
  } else {
    t16 = $[33];
  }
  return t16;
};var _templateObject$1;
var StyledPButton = material.styled(reactComponent.PButton)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  min-width: 0;\n\n  &.input-file-btn {\n    padding: 0 !important;\n    position: relative;\n\n    .PFlexRowBox {\n      height: 100%;\n      label {\n        cursor: pointer;\n        display: flex;\n        flex: 1;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center;\n        padding: 0 10px;\n\n        .PIcon {\n          margin-right: 0.2em;\n        }\n      }\n    }\n  }\n\n  &.hidden-label.input-file-btn .PFlexRowBox label .PIcon {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  &.MuiButton-outlined {\n    &:first-of-type:not(:last-of-type) {\n      border-right: 0;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    &:last-of-type:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:first-of-type):not(:last-of-type) {\n      border-right: 0;\n      border-radius: 0;\n    }\n  }\n"])));var getFinalValue$5 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormFile .control-wrap{display:inline-flex}.PFormFile .control-wrap .file-name-wrap .file-name{min-width:350px}.PFormFile .control-wrap .file-name-wrap .file-name .MuiInputBase-root{padding-right:7px}.PFormFile .control-wrap .input-file{display:none}.PFormFile .control-wrap .input-file-wrap{display:flex}.PFormFile .control-wrap .input-file-wrap .input-file-btn:not(.hidden-label) .PIcon{margin-left:-3px}.PFormFile.full-width .control-wrap{display:flex}.PFormFile.full-width .control-wrap .file-name-wrap{flex:1}.PFormFile.variant-standard .file-name-wrap .file-name .MuiInputBase-root{padding-right:0}.PFormFile:not(.hide-file-name).variant-outlined .form-file-btn label,.PFormFile:not(.hide-file-name).variant-filled .form-file-btn label{padding-top:10px;padding-bottom:10px}.PFormFile:not(.hide-file-name).variant-standard .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile:not(.hide-file-name).size-small .form-file-btn label{padding-top:5px;padding-bottom:5px}.PFormFile.hide-file-name:not(.with-label).variant-outlined .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-filled .form-file-btn{height:52px}.PFormFile.hide-file-name:not(.with-label).variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-filled .form-file-btn{height:44px}.PFormFile.hide-file-name:not(.with-label).size-small.variant-standard .form-file-btn{height:26px}.PFormFile.hide-file-name.with-label.variant-outlined .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-filled .form-file-btn{height:37px}.PFormFile.hide-file-name.with-label.variant-standard .form-file-btn{height:28px}.PFormFile.hide-file-name.with-label.size-small.variant-outlined .form-file-btn{height:24px}.PFormFile.hide-file-name.with-label.size-small.variant-filled .form-file-btn{height:31px}.PFormFile.hide-file-name.with-label.size-small.variant-standard .form-file-btn{height:26px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-outlined .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-filled .form-file-btn{height:37px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.variant-standard .form-file-btn{height:28px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-outlined .form-file-btn{height:24px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-filled .form-file-btn{height:31px}.PForm .PFormCol.with-label .PFormFile.hide-file-name.size-small.variant-standard .form-file-btn{height:26px}");var FILE_VALUE = '';
var PFormFile = function PFormFile(t0) {
  var $ = compilerRuntime.c(186);
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
  var id = React.useId();
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
  var textFieldRef = React.useRef(null);
  var fileUploadBtnRef = React.useRef(null);
  var linkBtnRef = React.useRef(null);
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(false),
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
  var _useState5 = React.useState(t2),
    _useState6 = _slicedToArray(_useState5, 2),
    alertDialogProps = _useState6[0],
    setAlertDialogProps = _useState6[1];
  var _useState7 = React.useState(initError),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    _setError = _useState8[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t3;
  if ($[1] !== errorRef) {
    t3 = function t3(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[1] = errorRef;
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  var setError = t3;
  var _useState9 = React.useState(initData),
    _useState0 = _slicedToArray(_useState9, 2),
    data = _useState0[0],
    _setData = _useState0[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t4;
  if ($[3] !== dataRef) {
    t4 = function t4(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[3] = dataRef;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  var setData = t4;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState1 = React.useState(finalInitDisabled),
    _useState10 = _slicedToArray(_useState1, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState11 = React.useState(initHidden),
    _useState12 = _slicedToArray(_useState11, 2),
    hidden = _useState12[0],
    setHidden = _useState12[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t5;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = {
      handleWidth: false
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  var _useResizeDetector = reactResizeDetector.useResizeDetector(t5),
    innerRef = _useResizeDetector.ref,
    height = _useResizeDetector.height;
  var t6;
  if ($[6] !== setError) {
    t6 = function t6(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[6] = setError;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var setErrorErrorHelperText = t6;
  var t7;
  if ($[8] !== onValidateRef || $[9] !== required || $[10] !== setErrorErrorHelperText) {
    t7 = function t7(value_1) {
      var isEmptyValue = false;
      if (value_1) {
        var d = document.createElement("div");
        d.innerHTML = value_1;
        var text = d.textContent || d.innerText;
        isEmptyValue = compare.empty(text.trim());
      }
      if (required && (isEmptyValue || compare.empty(value_1))) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_1);
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
    $[10] = setErrorErrorHelperText;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  var validate = t7;
  var t8;
  if ($[12] !== hideUpload || $[13] !== hideUrl) {
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
    $[12] = hideUpload;
    $[13] = hideUrl;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  var focus = t8;
  var t9;
  if ($[15] !== maxFileSize) {
    t9 = function t9(file) {
      if (maxFileSize) {
        return new Promise(function (resolve, reject) {
          if (file instanceof File) {
            if (file.size > maxFileSize) {
              setAlertDialogProps({
                open: true,
                color: "error",
                title: "\uD30C\uC77C \uC0AC\uC774\uC988",
                content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(material.Typography, {
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
    $[15] = maxFileSize;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var fileSizeCheck = t9;
  var t10;
  if ($[17] !== initValue) {
    t10 = getFinalValue$5(initValue);
    $[17] = initValue;
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var _useState13 = React.useState(t10),
    _useState14 = _slicedToArray(_useState13, 2),
    value_2 = _useState14[0],
    _setValue = _useState14[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue$5(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t11;
  if ($[19] !== valueRef) {
    t11 = function t11(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[19] = valueRef;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  var setValue = t11;
  var t12;
  if ($[21] !== error || $[22] !== name || $[23] !== onChangeRef || $[24] !== onValueChange || $[25] !== setValue || $[26] !== validate) {
    t12 = function t12(newValue_2) {
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
    $[21] = error;
    $[22] = name;
    $[23] = onChangeRef;
    $[24] = onValueChange;
    $[25] = setValue;
    $[26] = validate;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  var updateValue = t12;
  var t13;
  if ($[28] !== name) {
    t13 = function t13() {
      return name;
    };
    $[28] = name;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  var t14;
  if ($[30] !== initValueRef) {
    t14 = function t14() {
      return getFinalValue$5(initValueRef.current);
    };
    $[30] = initValueRef;
    $[31] = t14;
  } else {
    t14 = $[31];
  }
  var t15;
  if ($[32] !== initValueRef || $[33] !== updateValue) {
    t15 = function t15() {
      return updateValue(initValueRef.current);
    };
    $[32] = initValueRef;
    $[33] = updateValue;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  var t16;
  if ($[35] !== valueRef) {
    t16 = function t16() {
      return valueRef.current;
    };
    $[35] = valueRef;
    $[36] = t16;
  } else {
    t16 = $[36];
  }
  var t17;
  if ($[37] !== dataRef) {
    t17 = function t17() {
      return dataRef.current;
    };
    $[37] = dataRef;
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  var t18;
  if ($[39] !== exceptValue) {
    t18 = function t18() {
      return !!exceptValue;
    };
    $[39] = exceptValue;
    $[40] = t18;
  } else {
    t18 = $[40];
  }
  var t19;
  if ($[41] !== disabled) {
    t19 = function t19() {
      return !!disabled;
    };
    $[41] = disabled;
    $[42] = t19;
  } else {
    t19 = $[42];
  }
  var t20;
  if ($[43] !== hidden) {
    t20 = function t20() {
      return !!hidden;
    };
    $[43] = hidden;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  var t21;
  if ($[45] !== validate || $[46] !== valueRef) {
    t21 = function t21() {
      return validate(valueRef.current);
    };
    $[45] = validate;
    $[46] = valueRef;
    $[47] = t21;
  } else {
    t21 = $[47];
  }
  var t22;
  if ($[48] !== focus || $[49] !== setData || $[50] !== setErrorErrorHelperText || $[51] !== t13 || $[52] !== t14 || $[53] !== t15 || $[54] !== t16 || $[55] !== t17 || $[56] !== t18 || $[57] !== t19 || $[58] !== t20 || $[59] !== t21 || $[60] !== updateValue) {
    t22 = {
      getType: _temp$9,
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
      setError: setErrorErrorHelperText
    };
    $[48] = focus;
    $[49] = setData;
    $[50] = setErrorErrorHelperText;
    $[51] = t13;
    $[52] = t14;
    $[53] = t15;
    $[54] = t16;
    $[55] = t17;
    $[56] = t18;
    $[57] = t19;
    $[58] = t20;
    $[59] = t21;
    $[60] = updateValue;
    $[61] = t22;
  } else {
    t22 = $[61];
  }
  var commands = t22;
  var t23;
  if ($[62] !== id || $[63] !== onAddValueItem) {
    t23 = function t23(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[62] = id;
    $[63] = onAddValueItem;
    $[64] = t23;
  } else {
    t23 = $[64];
  }
  var t24;
  if ($[65] !== id || $[66] !== onRemoveValueItem) {
    t24 = function t24() {
      return onRemoveValueItem(id);
    };
    $[65] = id;
    $[66] = onRemoveValueItem;
    $[67] = t24;
  } else {
    t24 = $[67];
  }
  reactHook.useForwardRef(ref, commands, t23, t24);
  var t25;
  if ($[68] !== fileSizeCheck || $[69] !== name || $[70] !== onFile || $[71] !== onValueChangeByUser || $[72] !== updateValue) {
    t25 = function t25(e) {
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
    $[68] = fileSizeCheck;
    $[69] = name;
    $[70] = onFile;
    $[71] = onValueChangeByUser;
    $[72] = updateValue;
    $[73] = t25;
  } else {
    t25 = $[73];
  }
  var handleFileChange = t25;
  var t26;
  if ($[74] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = function t26() {
      setIsOpenLinkDialog(true);
    };
    $[74] = t26;
  } else {
    t26 = $[74];
  }
  var handleLinkClick = t26;
  var t27;
  if ($[75] !== name || $[76] !== onValueChangeByUser || $[77] !== updateValue) {
    t27 = function t27() {
      updateValue("");
      setTimeout(function () {
        if (onValueChangeByUser) {
          onValueChangeByUser(name, "");
        }
      });
    };
    $[75] = name;
    $[76] = onValueChangeByUser;
    $[77] = updateValue;
    $[78] = t27;
  } else {
    t27 = $[78];
  }
  var handleRemoveClick = t27;
  var t28;
  if ($[79] !== name || $[80] !== onLink || $[81] !== onValueChangeByUser || $[82] !== updateValue) {
    t28 = function t28(url_0) {
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
    $[79] = name;
    $[80] = onLink;
    $[81] = onValueChangeByUser;
    $[82] = updateValue;
    $[83] = t28;
  } else {
    t28 = $[83];
  }
  var handleLinkDialogConfirm = t28;
  var t29 = "variant-".concat(variant);
  var t30 = "size-".concat(size);
  var t31 = !!initLabel && "with-label";
  var t32 = !!fullWidth && "full-width";
  var t33 = !!hideUrl && "hide-file-name";
  var t34 = !!hideLink && "hide-link";
  var t35 = !!hideUpload && "hide-upload";
  var t36 = !!hideRemove && "hide-remove";
  var t37;
  if ($[84] !== className || $[85] !== t29 || $[86] !== t30 || $[87] !== t31 || $[88] !== t32 || $[89] !== t33 || $[90] !== t34 || $[91] !== t35 || $[92] !== t36 || $[93] !== value_2) {
    t37 = classNames(className, "PFormValueItem", "PFormFile", t29, t30, t31, t32, t33, t34, t35, t36, compare.notEmpty(value_2) && "with-value");
    $[84] = className;
    $[85] = t29;
    $[86] = t30;
    $[87] = t31;
    $[88] = t32;
    $[89] = t33;
    $[90] = t34;
    $[91] = t35;
    $[92] = t36;
    $[93] = value_2;
    $[94] = t37;
  } else {
    t37 = $[94];
  }
  var t38 = hideUrl ? labelIcon : undefined;
  var t39 = hideUrl ? initLabel : undefined;
  var t40 = error ? errorHelperText : helperText;
  var t41;
  if ($[95] !== t40) {
    t41 = /*#__PURE__*/React.createElement("div", null, t40);
    $[95] = t40;
    $[96] = t41;
  } else {
    t41 = $[96];
  }
  var t42;
  if ($[97] !== preview || $[98] !== t41) {
    t42 = /*#__PURE__*/React.createElement("div", null, preview, t41);
    $[97] = preview;
    $[98] = t41;
    $[99] = t42;
  } else {
    t42 = $[99];
  }
  var t43 = !hideUrl;
  var t44 = fullWidth ? "100%" : undefined;
  var t45;
  if ($[100] !== t44) {
    t45 = {
      width: t44
    };
    $[100] = t44;
    $[101] = t45;
  } else {
    t45 = $[101];
  }
  var t46;
  if ($[102] !== accept || $[103] !== color || $[104] !== disabled || $[105] !== error || $[106] !== focused || $[107] !== handleFileChange || $[108] !== handleRemoveClick || $[109] !== hideLink || $[110] !== hideLinkLabel || $[111] !== hideRemove || $[112] !== hideRemoveLabel || $[113] !== hideUpload || $[114] !== hideUploadLabel || $[115] !== hideUrl || $[116] !== id || $[117] !== initLabel || $[118] !== innerRef || $[119] !== labelIcon || $[120] !== labelShrink || $[121] !== linkLabel || $[122] !== linkTabIndex || $[123] !== readOnly || $[124] !== removeLabel || $[125] !== removeTabIndex || $[126] !== required || $[127] !== size || $[128] !== tabIndex || $[129] !== uploadLabel || $[130] !== uploadTabIndex || $[131] !== value_2 || $[132] !== variant) {
    t46 = !hideUrl && /*#__PURE__*/React.createElement("div", {
      className: "file-name-wrap"
    }, /*#__PURE__*/React.createElement(material.TextField, {
      ref: function ref(ref_0) {
        innerRef.current = ref_0;
      },
      inputRef: textFieldRef,
      className: "file-name",
      variant: variant,
      label: labelIcon ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
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
      value: value_2 || "",
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
          endAdornment: /*#__PURE__*/React.createElement(material.InputAdornment, {
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
          }, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
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
          }, !hideLinkLabel && (linkLabel || "\uB9C1\uD06C")), !hideRemove && compare.notEmpty(value_2) && /*#__PURE__*/React.createElement(StyledPButton, {
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
    $[102] = accept;
    $[103] = color;
    $[104] = disabled;
    $[105] = error;
    $[106] = focused;
    $[107] = handleFileChange;
    $[108] = handleRemoveClick;
    $[109] = hideLink;
    $[110] = hideLinkLabel;
    $[111] = hideRemove;
    $[112] = hideRemoveLabel;
    $[113] = hideUpload;
    $[114] = hideUploadLabel;
    $[115] = hideUrl;
    $[116] = id;
    $[117] = initLabel;
    $[118] = innerRef;
    $[119] = labelIcon;
    $[120] = labelShrink;
    $[121] = linkLabel;
    $[122] = linkTabIndex;
    $[123] = readOnly;
    $[124] = removeLabel;
    $[125] = removeTabIndex;
    $[126] = required;
    $[127] = size;
    $[128] = tabIndex;
    $[129] = uploadLabel;
    $[130] = uploadTabIndex;
    $[131] = value_2;
    $[132] = variant;
    $[133] = t46;
  } else {
    t46 = $[133];
  }
  var t47;
  if ($[134] !== accept || $[135] !== color || $[136] !== disabled || $[137] !== error || $[138] !== handleFileChange || $[139] !== handleRemoveClick || $[140] !== hideLink || $[141] !== hideLinkLabel || $[142] !== hideRemove || $[143] !== hideRemoveLabel || $[144] !== hideUpload || $[145] !== hideUploadLabel || $[146] !== hideUrl || $[147] !== id || $[148] !== linkLabel || $[149] !== linkTabIndex || $[150] !== removeLabel || $[151] !== removeTabIndex || $[152] !== size || $[153] !== uploadLabel || $[154] !== uploadTabIndex || $[155] !== value_2) {
    t47 = !!hideUrl && /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement(reactComponent.PIcon, {
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
    }, !hideLinkLabel && (linkLabel || "\uB9C1\uD06C")), !hideRemove && compare.notEmpty(value_2) && /*#__PURE__*/React.createElement(StyledPButton, {
      variant: "outlined",
      tabIndex: removeTabIndex,
      className: classNames("remove-btn form-file-btn", !!hideRemoveLabel && "hidden-label"),
      color: error ? "error" : color,
      startIcon: "close",
      size: size,
      disabled: disabled,
      onClick: handleRemoveClick
    }, !hideRemoveLabel && (removeLabel || "\uC0AD\uC81C")));
    $[134] = accept;
    $[135] = color;
    $[136] = disabled;
    $[137] = error;
    $[138] = handleFileChange;
    $[139] = handleRemoveClick;
    $[140] = hideLink;
    $[141] = hideLinkLabel;
    $[142] = hideRemove;
    $[143] = hideRemoveLabel;
    $[144] = hideUpload;
    $[145] = hideUploadLabel;
    $[146] = hideUrl;
    $[147] = id;
    $[148] = linkLabel;
    $[149] = linkTabIndex;
    $[150] = removeLabel;
    $[151] = removeTabIndex;
    $[152] = size;
    $[153] = uploadLabel;
    $[154] = uploadTabIndex;
    $[155] = value_2;
    $[156] = t47;
  } else {
    t47 = $[156];
  }
  var t48;
  if ($[157] === Symbol["for"]("react.memo_cache_sentinel")) {
    t48 = function t48() {
      return setAlertDialogProps({
        open: false
      });
    };
    $[157] = t48;
  } else {
    t48 = $[157];
  }
  var t49;
  if ($[158] !== alertDialogProps) {
    t49 = /*#__PURE__*/React.createElement(PrivateAlertDialog, _extends({}, alertDialogProps, {
      onClose: t48
    }));
    $[158] = alertDialogProps;
    $[159] = t49;
  } else {
    t49 = $[159];
  }
  var t50;
  if ($[160] === Symbol["for"]("react.memo_cache_sentinel")) {
    t50 = function t50() {
      return setIsOpenLinkDialog(false);
    };
    $[160] = t50;
  } else {
    t50 = $[160];
  }
  var t51;
  if ($[161] !== handleLinkDialogConfirm || $[162] !== isOpenLinkDialog) {
    t51 = /*#__PURE__*/React.createElement(LinkDialog, {
      open: isOpenLinkDialog,
      onConfirm: handleLinkDialogConfirm,
      onClose: t50
    });
    $[161] = handleLinkDialogConfirm;
    $[162] = isOpenLinkDialog;
    $[163] = t51;
  } else {
    t51 = $[163];
  }
  var t52;
  if ($[164] !== t46 || $[165] !== t47 || $[166] !== t49 || $[167] !== t51) {
    t52 = /*#__PURE__*/React.createElement("div", {
      className: "control-wrap"
    }, t46, t47, t49, t51);
    $[164] = t46;
    $[165] = t47;
    $[166] = t49;
    $[167] = t51;
    $[168] = t52;
  } else {
    t52 = $[168];
  }
  var t53;
  if ($[169] !== color || $[170] !== error || $[171] !== focused || $[172] !== fullWidth || $[173] !== height || $[174] !== hidden || $[175] !== required || $[176] !== size || $[177] !== t37 || $[178] !== t38 || $[179] !== t39 || $[180] !== t42 || $[181] !== t43 || $[182] !== t45 || $[183] !== t52 || $[184] !== variant) {
    t53 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t37,
      labelIcon: t38,
      label: t39,
      error: error,
      required: required,
      fullWidth: fullWidth,
      hidden: hidden,
      controlHeight: height,
      helperText: t42,
      hideLabel: t43,
      style: t45,
      control: t52
    });
    $[169] = color;
    $[170] = error;
    $[171] = focused;
    $[172] = fullWidth;
    $[173] = height;
    $[174] = hidden;
    $[175] = required;
    $[176] = size;
    $[177] = t37;
    $[178] = t38;
    $[179] = t39;
    $[180] = t42;
    $[181] = t43;
    $[182] = t45;
    $[183] = t52;
    $[184] = variant;
    $[185] = t53;
  } else {
    t53 = $[185];
  }
  return t53;
};
function _temp$9() {
  return "PFormFile";
}var getFinalValue$4 = function getFinalValue(value) {
  return value || '';
};insertStyle(".PFormImageFile .preview-img{max-width:100%}.PFormImageFile:not(.hide-file-name):not(.variant-standard) .preview-img{padding-right:14px}");var _excluded$5 = ["ref", "className", "imageSize", "preview", "previewMaxHeight", "accept", "value", "onChange", "onFile", "onLink"];
var PFormImageFile = function PFormImageFile(t0) {
  var $ = compilerRuntime.c(48);
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
  var _useState = React.useState(t2),
    _useState2 = _slicedToArray(_useState, 2),
    alertDialogProps = _useState2[0],
    setAlertDialogProps = _useState2[1];
  var _useState3 = React.useState(_temp$8),
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
  var _useState5 = React.useState(t3),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  reactHook.useChanged(initValue) && setValue(getFinalValue$4(initValue));
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
                content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(material.Typography, {
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
  if ($[20] !== imageSizeCheck || $[21] !== onFile) {
    t6 = function t6(file_0) {
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
    $[20] = imageSizeCheck;
    $[21] = onFile;
    $[22] = t6;
  } else {
    t6 = $[22];
  }
  var handleFile = t6;
  var t7;
  if ($[23] !== imageSizeCheck || $[24] !== onLink) {
    t7 = function t7(url_0) {
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
    $[23] = imageSizeCheck;
    $[24] = onLink;
    $[25] = t7;
  } else {
    t7 = $[25];
  }
  var handleLink = t7;
  var t8;
  if ($[26] !== className) {
    t8 = classNames(className, "PFormImageFile");
    $[26] = className;
    $[27] = t8;
  } else {
    t8 = $[27];
  }
  var t9;
  if ($[28] !== preview || $[29] !== previewMaxHeight || $[30] !== value) {
    t9 = preview && value ? /*#__PURE__*/React.createElement("a", {
      href: value,
      tabIndex: -1,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/React.createElement(material.Tooltip, {
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
    $[28] = preview;
    $[29] = previewMaxHeight;
    $[30] = value;
    $[31] = t9;
  } else {
    t9 = $[31];
  }
  var t10;
  if ($[32] !== accept || $[33] !== handleFile || $[34] !== handleLink || $[35] !== props || $[36] !== ref || $[37] !== t8 || $[38] !== t9 || $[39] !== updateValue || $[40] !== value) {
    t10 = /*#__PURE__*/React.createElement(PFormFile, _extends({
      ref: ref,
      className: t8,
      accept: accept,
      value: value,
      preview: t9,
      onChange: updateValue,
      onFile: handleFile,
      onLink: handleLink
    }, props));
    $[32] = accept;
    $[33] = handleFile;
    $[34] = handleLink;
    $[35] = props;
    $[36] = ref;
    $[37] = t8;
    $[38] = t9;
    $[39] = updateValue;
    $[40] = value;
    $[41] = t10;
  } else {
    t10 = $[41];
  }
  var t11;
  if ($[42] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11() {
      return setAlertDialogProps({
        open: false
      });
    };
    $[42] = t11;
  } else {
    t11 = $[42];
  }
  var t12;
  if ($[43] !== alertDialogProps) {
    t12 = /*#__PURE__*/React.createElement(PrivateAlertDialog, _extends({}, alertDialogProps, {
      onClose: t11
    }));
    $[43] = alertDialogProps;
    $[44] = t12;
  } else {
    t12 = $[44];
  }
  var t13;
  if ($[45] !== t10 || $[46] !== t12) {
    t13 = /*#__PURE__*/React.createElement(React.Fragment, null, t10, t12);
    $[45] = t10;
    $[46] = t12;
    $[47] = t13;
  } else {
    t13 = $[47];
  }
  return t13;
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
  var $ = compilerRuntime.c(197);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var ratingRef = React.useRef(null);
  var inputRef = React.useRef(undefined);
  var closeTimeoutRef = React.useRef(undefined);
  var mouseDownTimeRef = React.useRef(undefined);
  var inputDatePickerErrorRef = React.useRef(null);
  var openValueRef = React.useRef(undefined);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var _useState5 = React.useState(initError),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    _setError = _useState6[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t6;
  if ($[0] !== errorRef) {
    t6 = function t6(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t6;
  } else {
    t6 = $[1];
  }
  var setError = t6;
  var _useState7 = React.useState(initData),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    _setData = _useState8[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t7;
  if ($[2] !== dataRef) {
    t7 = function t7(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t7;
  } else {
    t7 = $[3];
  }
  var setData = t7;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState9 = React.useState(finalInitDisabled),
    _useState0 = _slicedToArray(_useState9, 2),
    disabled = _useState0[0],
    setDisabled = _useState0[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState1 = React.useState(initHidden),
    _useState10 = _slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t8;
  if ($[4] !== setError) {
    t8 = function t8(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[4] = setError;
    $[5] = t8;
  } else {
    t8 = $[5];
  }
  var setErrorErrorHelperText = t8;
  var t9;
  if ($[6] !== onValidateRef || $[7] !== required || $[8] !== setErrorErrorHelperText) {
    t9 = function t9(value_1) {
      if (required && compare.empty(value_1)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (inputDatePickerErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_1);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[6] = onValidateRef;
    $[7] = required;
    $[8] = setErrorErrorHelperText;
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  var validate = t9;
  var t10;
  if ($[10] !== initValue) {
    t10 = getFinalValue$3(initValue);
    $[10] = initValue;
    $[11] = t10;
  } else {
    t10 = $[11];
  }
  var _useState11 = React.useState(t10),
    _useState12 = _slicedToArray(_useState11, 2),
    value_2 = _useState12[0],
    _setValue = _useState12[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue$3(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t11;
  if ($[12] !== valueRef) {
    t11 = function t11(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[12] = valueRef;
    $[13] = t11;
  } else {
    t11 = $[13];
  }
  var setValue = t11;
  var t12;
  if ($[14] !== error || $[15] !== name || $[16] !== onChangeRef || $[17] !== onValueChange || $[18] !== setValue || $[19] !== validate) {
    t12 = function t12(newValue_2) {
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
    $[14] = error;
    $[15] = name;
    $[16] = onChangeRef;
    $[17] = onValueChange;
    $[18] = setValue;
    $[19] = validate;
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  var updateValue = t12;
  var nowValue;
  var t13;
  if ($[21] === Symbol["for"]("react.memo_cache_sentinel")) {
    var nowDate = dayjs();
    nowValue = dateToValue$3(nowDate);
    t13 = valueToYm$1(nowValue);
    $[21] = nowValue;
    $[22] = t13;
  } else {
    nowValue = $[21];
    t13 = $[22];
  }
  var nowYm = t13;
  var t14;
  if ($[23] !== minValue) {
    t14 = valueToDate$3(minValue);
    $[23] = minValue;
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  var minDate = t14;
  var t15;
  if ($[25] !== maxValue) {
    t15 = valueToDate$3(maxValue);
    $[25] = maxValue;
    $[26] = t15;
  } else {
    t15 = $[26];
  }
  var maxDate = t15;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm$1(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t16;
  if ($[27] !== minAvailableValue) {
    t16 = valueToYm$1(minAvailableValue);
    $[27] = minAvailableValue;
    $[28] = t16;
  } else {
    t16 = $[28];
  }
  var minAvailableYm = t16;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm$1(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t17;
  if ($[29] !== maxAvailableValue) {
    t17 = valueToYm$1(maxAvailableValue);
    $[29] = maxAvailableValue;
    $[30] = t17;
  } else {
    t17 = $[30];
  }
  var maxAvailableYm = t17;
  var t18;
  if ($[31] !== maxAvailableYm || $[32] !== maxDate || $[33] !== minAvailableYm || $[34] !== minDate) {
    t18 = {
      minDate: minDate,
      maxDate: maxDate,
      minAvailableYm: minAvailableYm,
      maxAvailableYm: maxAvailableYm
    };
    $[31] = maxAvailableYm;
    $[32] = maxDate;
    $[33] = minAvailableYm;
    $[34] = minDate;
    $[35] = t18;
  } else {
    t18 = $[35];
  }
  var dateInfo = t18;
  var t19;
  var t20;
  if ($[36] === Symbol["for"]("react.memo_cache_sentinel")) {
    t19 = function t19() {
      if (ratingRef.current) {
        inputRef.current = ratingRef.current.querySelector("input") || undefined;
      }
    };
    t20 = [];
    $[36] = t19;
    $[37] = t20;
  } else {
    t19 = $[36];
    t20 = $[37];
  }
  React.useEffect(t19, t20);
  var t21;
  if ($[38] !== name || $[39] !== onRequestSearchSubmit || $[40] !== open || $[41] !== valueRef) {
    t21 = function t21() {
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
    $[38] = name;
    $[39] = onRequestSearchSubmit;
    $[40] = open;
    $[41] = valueRef;
    $[42] = t21;
  } else {
    t21 = $[42];
  }
  var effectEvent = React.useEffectEvent(t21);
  var firstSkipRef = React.useRef(true);
  var t22;
  if ($[43] !== effectEvent) {
    t22 = function t22() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    };
    $[43] = effectEvent;
    $[44] = t22;
  } else {
    t22 = $[44];
  }
  var t23;
  if ($[45] !== open) {
    t23 = [open];
    $[45] = open;
    $[46] = t23;
  } else {
    t23 = $[46];
  }
  React.useEffect(t22, t23);
  var t24;
  if ($[47] === Symbol["for"]("react.memo_cache_sentinel")) {
    t24 = function t24() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[47] = t24;
  } else {
    t24 = $[47];
  }
  var focus = t24;
  var t25;
  if ($[48] !== name) {
    t25 = function t25() {
      return name;
    };
    $[48] = name;
    $[49] = t25;
  } else {
    t25 = $[49];
  }
  var t26;
  if ($[50] !== initValueRef) {
    t26 = function t26() {
      return getFinalValue$3(initValueRef.current);
    };
    $[50] = initValueRef;
    $[51] = t26;
  } else {
    t26 = $[51];
  }
  var t27;
  if ($[52] !== initValueRef || $[53] !== updateValue) {
    t27 = function t27() {
      return updateValue(initValueRef.current);
    };
    $[52] = initValueRef;
    $[53] = updateValue;
    $[54] = t27;
  } else {
    t27 = $[54];
  }
  var t28;
  if ($[55] !== valueRef) {
    t28 = function t28() {
      return valueRef.current;
    };
    $[55] = valueRef;
    $[56] = t28;
  } else {
    t28 = $[56];
  }
  var t29;
  if ($[57] !== dataRef) {
    t29 = function t29() {
      return dataRef.current;
    };
    $[57] = dataRef;
    $[58] = t29;
  } else {
    t29 = $[58];
  }
  var t30;
  if ($[59] !== valueRef) {
    t30 = function t30() {
      return valueRef.current ? valueRef.current.year : null;
    };
    $[59] = valueRef;
    $[60] = t30;
  } else {
    t30 = $[60];
  }
  var t31;
  if ($[61] !== updateValue || $[62] !== valueRef) {
    t31 = function t31(year) {
      updateValue(year === null ? null : valueRef.current ? {
        year: year,
        month: valueRef.current.month
      } : {
        year: year,
        month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      });
    };
    $[61] = updateValue;
    $[62] = valueRef;
    $[63] = t31;
  } else {
    t31 = $[63];
  }
  var t32;
  if ($[64] !== valueRef) {
    t32 = function t32() {
      return valueRef.current ? valueRef.current.month : null;
    };
    $[64] = valueRef;
    $[65] = t32;
  } else {
    t32 = $[65];
  }
  var t33;
  if ($[66] !== updateValue || $[67] !== valueRef) {
    t33 = function t33(month) {
      updateValue(month === null ? null : valueRef.current ? {
        year: valueRef.current.year,
        month: month
      } : {
        year: new Date().getFullYear(),
        month: month
      });
    };
    $[66] = updateValue;
    $[67] = valueRef;
    $[68] = t33;
  } else {
    t33 = $[68];
  }
  var t34;
  if ($[69] !== exceptValue) {
    t34 = function t34() {
      return !!exceptValue;
    };
    $[69] = exceptValue;
    $[70] = t34;
  } else {
    t34 = $[70];
  }
  var t35;
  if ($[71] !== disabled) {
    t35 = function t35() {
      return !!disabled;
    };
    $[71] = disabled;
    $[72] = t35;
  } else {
    t35 = $[72];
  }
  var t36;
  if ($[73] !== hidden) {
    t36 = function t36() {
      return !!hidden;
    };
    $[73] = hidden;
    $[74] = t36;
  } else {
    t36 = $[74];
  }
  var t37;
  if ($[75] !== validate || $[76] !== valueRef) {
    t37 = function t37() {
      return validate(valueRef.current);
    };
    $[75] = validate;
    $[76] = valueRef;
    $[77] = t37;
  } else {
    t37 = $[77];
  }
  var t38;
  if ($[78] !== formValueYearNameSuffix) {
    t38 = function t38() {
      return formValueYearNameSuffix;
    };
    $[78] = formValueYearNameSuffix;
    $[79] = t38;
  } else {
    t38 = $[79];
  }
  var t39;
  if ($[80] !== formValueMonthNameSuffix) {
    t39 = function t39() {
      return formValueMonthNameSuffix;
    };
    $[80] = formValueMonthNameSuffix;
    $[81] = t39;
  } else {
    t39 = $[81];
  }
  var t40;
  if ($[82] !== formValueYearNameSuffix || $[83] !== name) {
    t40 = function t40() {
      return "".concat(name).concat(formValueYearNameSuffix);
    };
    $[82] = formValueYearNameSuffix;
    $[83] = name;
    $[84] = t40;
  } else {
    t40 = $[84];
  }
  var t41;
  if ($[85] !== formValueMonthNameSuffix || $[86] !== name) {
    t41 = function t41() {
      return "".concat(name).concat(formValueMonthNameSuffix);
    };
    $[85] = formValueMonthNameSuffix;
    $[86] = name;
    $[87] = t41;
  } else {
    t41 = $[87];
  }
  var t42;
  if ($[88] !== setData || $[89] !== setErrorErrorHelperText || $[90] !== t25 || $[91] !== t26 || $[92] !== t27 || $[93] !== t28 || $[94] !== t29 || $[95] !== t30 || $[96] !== t31 || $[97] !== t32 || $[98] !== t33 || $[99] !== t34 || $[100] !== t35 || $[101] !== t36 || $[102] !== t37 || $[103] !== t38 || $[104] !== t39 || $[105] !== t40 || $[106] !== t41 || $[107] !== updateValue) {
    t42 = {
      getType: _temp$7,
      getName: t25,
      getReset: t26,
      reset: t27,
      getValue: t28,
      setValue: updateValue,
      getData: t29,
      setData: setData,
      getYear: t30,
      setYear: t31,
      getMonth: t32,
      setMonth: t33,
      isExceptValue: t34,
      isDisabled: t35,
      setDisabled: setDisabled,
      isHidden: t36,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t37,
      setError: setErrorErrorHelperText,
      getFormValueYearNameSuffix: t38,
      getFormValueMonthNameSuffix: t39,
      getFormValueYearName: t40,
      getFormValueMonthName: t41
    };
    $[88] = setData;
    $[89] = setErrorErrorHelperText;
    $[90] = t25;
    $[91] = t26;
    $[92] = t27;
    $[93] = t28;
    $[94] = t29;
    $[95] = t30;
    $[96] = t31;
    $[97] = t32;
    $[98] = t33;
    $[99] = t34;
    $[100] = t35;
    $[101] = t36;
    $[102] = t37;
    $[103] = t38;
    $[104] = t39;
    $[105] = t40;
    $[106] = t41;
    $[107] = updateValue;
    $[108] = t42;
  } else {
    t42 = $[108];
  }
  var commands = t42;
  var t43;
  if ($[109] !== id || $[110] !== onAddValueItem) {
    t43 = function t43(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[109] = id;
    $[110] = onAddValueItem;
    $[111] = t43;
  } else {
    t43 = $[111];
  }
  var t44;
  if ($[112] !== id || $[113] !== onRemoveValueItem) {
    t44 = function t44() {
      return onRemoveValueItem(id);
    };
    $[112] = id;
    $[113] = onRemoveValueItem;
    $[114] = t44;
  } else {
    t44 = $[114];
  }
  reactHook.useForwardRef(ref, commands, t43, t44);
  var t45;
  if ($[115] === Symbol["for"]("react.memo_cache_sentinel")) {
    t45 = function t45() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[115] = t45;
  } else {
    t45 = $[115];
  }
  var handleContainerMouseDown = t45;
  var t46;
  if ($[116] === Symbol["for"]("react.memo_cache_sentinel")) {
    t46 = function t46() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[116] = t46;
  } else {
    t46 = $[116];
  }
  var handleContainerFocus = t46;
  var t47;
  if ($[117] === Symbol["for"]("react.memo_cache_sentinel")) {
    t47 = function t47() {
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
    $[117] = t47;
  } else {
    t47 = $[117];
  }
  var handleContainerBlur = t47;
  var t48;
  if ($[118] !== name || $[119] !== onValueChangeByUser || $[120] !== updateValue) {
    t48 = function t48(newValue_3, isMonthSelect) {
      updateValue(newValue_3);
      if (isMonthSelect) {
        setOpen(false);
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_3);
      });
    };
    $[118] = name;
    $[119] = onValueChangeByUser;
    $[120] = updateValue;
    $[121] = t48;
  } else {
    t48 = $[121];
  }
  var handleContainerChange = t48;
  var t49;
  if ($[122] !== disabled || $[123] !== readOnly) {
    t49 = function t49() {
      if (readOnly || disabled) {
        return;
      }
      setOpen(true);
    };
    $[122] = disabled;
    $[123] = readOnly;
    $[124] = t49;
  } else {
    t49 = $[124];
  }
  var handleInputDatePickerFocus = t49;
  var t50;
  if ($[125] !== dateInfo.maxAvailableYm || $[126] !== dateInfo.minAvailableYm) {
    t50 = function t50(date) {
      var dateYm = Number(date.format("YYYYMM"));
      return dateYm < dateInfo.minAvailableYm || dateYm > dateInfo.maxAvailableYm;
    };
    $[125] = dateInfo.maxAvailableYm;
    $[126] = dateInfo.minAvailableYm;
    $[127] = t50;
  } else {
    t50 = $[127];
  }
  var handleInputDatePickerShouldDisableYear = t50;
  var t51;
  if ($[128] !== value_2) {
    t51 = value_2 ? valueToDate$3(value_2) : null;
    $[128] = value_2;
    $[129] = t51;
  } else {
    t51 = $[129];
  }
  var valueDate = t51;
  var t52;
  if ($[130] !== color || $[131] !== dateInfo.maxDate || $[132] !== dateInfo.minDate || $[133] !== disabled || $[134] !== format || $[135] !== fullWidth || $[136] !== labelShrink || $[137] !== size || $[138] !== variant) {
    t52 = {
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
    $[130] = color;
    $[131] = dateInfo.maxDate;
    $[132] = dateInfo.minDate;
    $[133] = disabled;
    $[134] = format;
    $[135] = fullWidth;
    $[136] = labelShrink;
    $[137] = size;
    $[138] = variant;
    $[139] = t52;
  } else {
    t52 = $[139];
  }
  var inputDatePickerProps = t52;
  var t53;
  if ($[140] === Symbol["for"]("react.memo_cache_sentinel")) {
    t53 = function t53() {
      return setOpen(false);
    };
    $[140] = t53;
  } else {
    t53 = $[140];
  }
  var t54;
  if ($[141] !== className) {
    t54 = classNames(className, "PFormMonthPicker");
    $[141] = className;
    $[142] = t54;
  } else {
    t54 = $[142];
  }
  var t55 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t56 = fullWidth ? 1 : undefined;
  var t57;
  if ($[143] !== t55 || $[144] !== t56) {
    t57 = {
      display: t55,
      flex: t56
    };
    $[143] = t55;
    $[144] = t56;
    $[145] = t57;
  } else {
    t57 = $[145];
  }
  var t58 = error && errorHelperText ? 8 : -14;
  var t59;
  if ($[146] !== t58) {
    t59 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t58]
          }
        }]
      }
    };
    $[146] = t58;
    $[147] = t59;
  } else {
    t59 = $[147];
  }
  var t60;
  if ($[148] === Symbol["for"]("react.memo_cache_sentinel")) {
    t60 = {
      display: "flex"
    };
    $[148] = t60;
  } else {
    t60 = $[148];
  }
  var t61;
  if ($[149] !== disableFuture || $[150] !== disablePast || $[151] !== handleContainerChange || $[152] !== maxValue || $[153] !== minValue || $[154] !== value_2) {
    t61 = /*#__PURE__*/React.createElement("div", {
      style: t60
    }, /*#__PURE__*/React.createElement(PrivateMonthPicker, {
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_2,
      onChange: handleContainerChange
    }));
    $[149] = disableFuture;
    $[150] = disablePast;
    $[151] = handleContainerChange;
    $[152] = maxValue;
    $[153] = minValue;
    $[154] = value_2;
    $[155] = t61;
  } else {
    t61 = $[155];
  }
  var t62;
  if ($[156] !== fullWidth || $[157] !== initStyle || $[158] !== inputWidth) {
    t62 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[156] = fullWidth;
    $[157] = initStyle;
    $[158] = inputWidth;
    $[159] = t62;
  } else {
    t62 = $[159];
  }
  var t63;
  if ($[160] !== updateValue) {
    t63 = function t63(v) {
      return updateValue(v ? dateToValue$3(v) : v);
    };
    $[160] = updateValue;
    $[161] = t63;
  } else {
    t63 = $[161];
  }
  var t64;
  if ($[162] === Symbol["for"]("react.memo_cache_sentinel")) {
    t64 = function t64(reason) {
      return inputDatePickerErrorRef.current = reason;
    };
    $[162] = t64;
  } else {
    t64 = $[162];
  }
  var t65;
  if ($[163] !== enableKeyboardInput || $[164] !== endAdornment || $[165] !== error || $[166] !== focused || $[167] !== handleInputDatePickerFocus || $[168] !== handleInputDatePickerShouldDisableYear || $[169] !== icon || $[170] !== inputDatePickerProps || $[171] !== label || $[172] !== labelIcon || $[173] !== readOnly || $[174] !== required || $[175] !== startAdornment || $[176] !== sx || $[177] !== t62 || $[178] !== t63 || $[179] !== valueDate) {
    t65 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: t62,
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
      onChange: t63,
      onFocus: handleInputDatePickerFocus,
      onError: t64,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[163] = enableKeyboardInput;
    $[164] = endAdornment;
    $[165] = error;
    $[166] = focused;
    $[167] = handleInputDatePickerFocus;
    $[168] = handleInputDatePickerShouldDisableYear;
    $[169] = icon;
    $[170] = inputDatePickerProps;
    $[171] = label;
    $[172] = labelIcon;
    $[173] = readOnly;
    $[174] = required;
    $[175] = startAdornment;
    $[176] = sx;
    $[177] = t62;
    $[178] = t63;
    $[179] = valueDate;
    $[180] = t65;
  } else {
    t65 = $[180];
  }
  var t66;
  if ($[181] !== open || $[182] !== t59 || $[183] !== t61 || $[184] !== t65) {
    t66 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t59,
      title: t61
    }, t65);
    $[181] = open;
    $[182] = t59;
    $[183] = t61;
    $[184] = t65;
    $[185] = t66;
  } else {
    t66 = $[185];
  }
  var t67;
  if ($[186] !== error || $[187] !== errorHelperText || $[188] !== formColWithHelperText || $[189] !== helperText || $[190] !== variant) {
    t67 = !formColWithHelperText && (!!helperText || error && !!errorHelperText) && /*#__PURE__*/React.createElement(material.FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[186] = error;
    $[187] = errorHelperText;
    $[188] = formColWithHelperText;
    $[189] = helperText;
    $[190] = variant;
    $[191] = t67;
  } else {
    t67 = $[191];
  }
  var t68;
  if ($[192] !== t54 || $[193] !== t57 || $[194] !== t66 || $[195] !== t67) {
    t68 = /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
      dateAdapter: AdapterDayjs.AdapterDayjs,
      adapterLocale: "ko"
    }, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t53
    }, /*#__PURE__*/React.createElement("div", {
      className: t54,
      style: t57,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t66, t67)));
    $[192] = t54;
    $[193] = t57;
    $[194] = t66;
    $[195] = t67;
    $[196] = t68;
  } else {
    t68 = $[196];
  }
  return t68;
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
  var $ = compilerRuntime.c(288);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var startInputRef = React.useRef(undefined);
  var endInputRef = React.useRef(undefined);
  var startInputDatePickerErrorRef = React.useRef(null);
  var endInputDatePickerErrorRef = React.useRef(null);
  var openValueRef = React.useRef(undefined);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fromError = _useState4[0],
    setFromError = _useState4[1];
  var _useState5 = React.useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    fromErrorHelperText = _useState6[0],
    setFromErrorHelperText = _useState6[1];
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    toError = _useState8[0],
    setToError = _useState8[1];
  var _useState9 = React.useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    toErrorHelperText = _useState0[0],
    setToErrorHelperText = _useState0[1];
  var _useState1 = React.useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var _useState11 = React.useState(initError),
    _useState12 = _slicedToArray(_useState11, 2),
    error = _useState12[0],
    _setError = _useState12[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t8;
  if ($[0] !== errorRef) {
    t8 = function t8(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t8;
  } else {
    t8 = $[1];
  }
  var setError = t8;
  var _useState13 = React.useState(initData),
    _useState14 = _slicedToArray(_useState13, 2),
    data = _useState14[0],
    _setData = _useState14[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t9;
  if ($[2] !== dataRef) {
    t9 = function t9(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t9;
  } else {
    t9 = $[3];
  }
  var setData = t9;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState15 = React.useState(finalInitDisabled),
    _useState16 = _slicedToArray(_useState15, 2),
    disabled = _useState16[0],
    setDisabled = _useState16[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState17 = React.useState(initHidden),
    _useState18 = _slicedToArray(_useState17, 2),
    hidden = _useState18[0],
    setHidden = _useState18[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t10;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = function t10(error_0, fromErrorHelperText_0) {
      setFromError(error_0);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[4] = t10;
  } else {
    t10 = $[4];
  }
  var setFromErrorErrorHelperText = t10;
  var t11;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = function t11(error_1, toErrorHelperText_0) {
      setToError(error_1);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[5] = t11;
  } else {
    t11 = $[5];
  }
  var setToErrorErrorHelperText = t11;
  var t12;
  if ($[6] !== setError) {
    t12 = function t12(error_2, errorHelperText_0) {
      setError(error_2);
      setErrorHelperText(error_2 ? errorHelperText_0 : undefined);
    };
    $[6] = setError;
    $[7] = t12;
  } else {
    t12 = $[7];
  }
  var setErrorErrorHelperText = t12;
  var t13;
  if ($[8] !== onValidateRef || $[9] !== required || $[10] !== setErrorErrorHelperText) {
    t13 = function t13(value_1) {
      if (required && (value_1[0] == null || value_1[1] == null)) {
        if (value_1[0] == null && value_1[1] == null) {
          setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          if (value_1[0] == null) {
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
        var onValidateResult = onValidateRef.current(value_1);
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
    $[8] = onValidateRef;
    $[9] = required;
    $[10] = setErrorErrorHelperText;
    $[11] = t13;
  } else {
    t13 = $[11];
  }
  var validate = t13;
  var t14;
  if ($[12] !== initValue) {
    t14 = getFinalValue$2(initValue);
    $[12] = initValue;
    $[13] = t14;
  } else {
    t14 = $[13];
  }
  var _useState19 = React.useState(t14),
    _useState20 = _slicedToArray(_useState19, 2),
    value_2 = _useState20[0],
    _setValue = _useState20[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue$2(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t15;
  if ($[14] !== valueRef) {
    t15 = function t15(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[14] = valueRef;
    $[15] = t15;
  } else {
    t15 = $[15];
  }
  var setValue = t15;
  var t16;
  if ($[16] !== error || $[17] !== fromError || $[18] !== name || $[19] !== onChangeRef || $[20] !== onValueChange || $[21] !== setValue || $[22] !== toError || $[23] !== validate) {
    t16 = function t16(newValue_2) {
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
    $[16] = error;
    $[17] = fromError;
    $[18] = name;
    $[19] = onChangeRef;
    $[20] = onValueChange;
    $[21] = setValue;
    $[22] = toError;
    $[23] = validate;
    $[24] = t16;
  } else {
    t16 = $[24];
  }
  var updateValue = t16;
  var nowValue;
  var t17;
  if ($[25] === Symbol["for"]("react.memo_cache_sentinel")) {
    var nowDate = dayjs();
    nowValue = dateToValue$2(nowDate);
    t17 = valueToYm(nowValue);
    $[25] = nowValue;
    $[26] = t17;
  } else {
    nowValue = $[25];
    t17 = $[26];
  }
  var nowYm = t17;
  var t18;
  if ($[27] !== minValue) {
    t18 = minValue ? valueToDate$2(minValue) : undefined;
    $[27] = minValue;
    $[28] = t18;
  } else {
    t18 = $[28];
  }
  var minDate = t18;
  var t19;
  if ($[29] !== maxValue) {
    t19 = maxValue ? valueToDate$2(maxValue) : undefined;
    $[29] = maxValue;
    $[30] = t19;
  } else {
    t19 = $[30];
  }
  var maxDate = t19;
  var minAvailableValue;
  if (disablePast) {
    var minYm = valueToYm(minValue);
    minAvailableValue = nowYm > minYm ? nowValue : minValue;
  } else {
    minAvailableValue = minValue;
  }
  var t20;
  if ($[31] !== minAvailableValue) {
    t20 = valueToYm(minAvailableValue);
    $[31] = minAvailableValue;
    $[32] = t20;
  } else {
    t20 = $[32];
  }
  var minAvailableYm = t20;
  var maxAvailableValue;
  if (disableFuture) {
    var maxYm = valueToYm(maxValue);
    maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
  } else {
    maxAvailableValue = maxValue;
  }
  var t21;
  if ($[33] !== maxAvailableValue) {
    t21 = valueToYm(maxAvailableValue);
    $[33] = maxAvailableValue;
    $[34] = t21;
  } else {
    t21 = $[34];
  }
  var maxAvailableYm = t21;
  var t22;
  if ($[35] !== maxAvailableYm || $[36] !== maxDate || $[37] !== minAvailableYm || $[38] !== minDate) {
    t22 = {
      minDate: minDate,
      maxDate: maxDate,
      minAvailableYm: minAvailableYm,
      maxAvailableYm: maxAvailableYm
    };
    $[35] = maxAvailableYm;
    $[36] = maxDate;
    $[37] = minAvailableYm;
    $[38] = minDate;
    $[39] = t22;
  } else {
    t22 = $[39];
  }
  var dateInfo = t22;
  var t23;
  if ($[40] !== name || $[41] !== onRequestSearchSubmit || $[42] !== open || $[43] !== valueRef) {
    t23 = function t23() {
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
    $[40] = name;
    $[41] = onRequestSearchSubmit;
    $[42] = open;
    $[43] = valueRef;
    $[44] = t23;
  } else {
    t23 = $[44];
  }
  var effectEvent = React.useEffectEvent(t23);
  var firstSkipRef = React.useRef(true);
  var t24;
  if ($[45] !== effectEvent) {
    t24 = function t24() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    };
    $[45] = effectEvent;
    $[46] = t24;
  } else {
    t24 = $[46];
  }
  var t25;
  if ($[47] !== open) {
    t25 = [open];
    $[47] = open;
    $[48] = t25;
  } else {
    t25 = $[48];
  }
  React.useEffect(t24, t25);
  var t26;
  if ($[49] === Symbol["for"]("react.memo_cache_sentinel")) {
    t26 = function t26() {
      var _startInputRef$curren;
      (_startInputRef$curren = startInputRef.current) === null || _startInputRef$curren === void 0 || _startInputRef$curren.focus();
    };
    $[49] = t26;
  } else {
    t26 = $[49];
  }
  var focus = t26;
  var t27;
  if ($[50] !== name) {
    t27 = function t27() {
      return name;
    };
    $[50] = name;
    $[51] = t27;
  } else {
    t27 = $[51];
  }
  var t28;
  if ($[52] !== initValueRef) {
    t28 = function t28() {
      return getFinalValue$2(initValueRef.current);
    };
    $[52] = initValueRef;
    $[53] = t28;
  } else {
    t28 = $[53];
  }
  var t29;
  if ($[54] !== initValueRef || $[55] !== updateValue) {
    t29 = function t29() {
      return updateValue(initValueRef.current);
    };
    $[54] = initValueRef;
    $[55] = updateValue;
    $[56] = t29;
  } else {
    t29 = $[56];
  }
  var t30;
  if ($[57] !== valueRef) {
    t30 = function t30() {
      return valueRef.current;
    };
    $[57] = valueRef;
    $[58] = t30;
  } else {
    t30 = $[58];
  }
  var t31;
  if ($[59] !== dataRef) {
    t31 = function t31() {
      return dataRef.current;
    };
    $[59] = dataRef;
    $[60] = t31;
  } else {
    t31 = $[60];
  }
  var t32;
  if ($[61] !== valueRef) {
    t32 = function t32() {
      return valueRef.current[0];
    };
    $[61] = valueRef;
    $[62] = t32;
  } else {
    t32 = $[62];
  }
  var t33;
  if ($[63] !== updateValue || $[64] !== valueRef) {
    t33 = function t33(value_4) {
      return updateValue([value_4, valueRef.current[1]]);
    };
    $[63] = updateValue;
    $[64] = valueRef;
    $[65] = t33;
  } else {
    t33 = $[65];
  }
  var t34;
  if ($[66] !== valueRef) {
    t34 = function t34() {
      return valueRef.current[1];
    };
    $[66] = valueRef;
    $[67] = t34;
  } else {
    t34 = $[67];
  }
  var t35;
  if ($[68] !== updateValue || $[69] !== valueRef) {
    t35 = function t35(value_5) {
      return updateValue([valueRef.current[0], value_5]);
    };
    $[68] = updateValue;
    $[69] = valueRef;
    $[70] = t35;
  } else {
    t35 = $[70];
  }
  var t36;
  if ($[71] !== valueRef) {
    t36 = function t36() {
      return valueRef.current[0] ? valueRef.current[0].year : null;
    };
    $[71] = valueRef;
    $[72] = t36;
  } else {
    t36 = $[72];
  }
  var t37;
  if ($[73] !== updateValue || $[74] !== valueRef) {
    t37 = function t37(year) {
      updateValue([year === null ? null : valueRef.current[0] ? {
        year: year,
        month: valueRef.current[0].month
      } : {
        year: year,
        month: year === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      }, valueRef.current[1]]);
    };
    $[73] = updateValue;
    $[74] = valueRef;
    $[75] = t37;
  } else {
    t37 = $[75];
  }
  var t38;
  if ($[76] !== valueRef) {
    t38 = function t38() {
      return valueRef.current[0] ? valueRef.current[0].month : null;
    };
    $[76] = valueRef;
    $[77] = t38;
  } else {
    t38 = $[77];
  }
  var t39;
  if ($[78] !== updateValue || $[79] !== valueRef) {
    t39 = function t39(month) {
      updateValue([month === null ? null : valueRef.current[0] ? {
        year: valueRef.current[0].year,
        month: month
      } : {
        year: new Date().getFullYear(),
        month: month
      }, valueRef.current[1]]);
    };
    $[78] = updateValue;
    $[79] = valueRef;
    $[80] = t39;
  } else {
    t39 = $[80];
  }
  var t40;
  if ($[81] !== valueRef) {
    t40 = function t40() {
      return valueRef.current[1] ? valueRef.current[1].year : null;
    };
    $[81] = valueRef;
    $[82] = t40;
  } else {
    t40 = $[82];
  }
  var t41;
  if ($[83] !== updateValue || $[84] !== valueRef) {
    t41 = function t41(year_0) {
      updateValue([valueRef.current[0], year_0 === null ? null : valueRef.current[1] ? {
        year: year_0,
        month: valueRef.current[1].month
      } : {
        year: year_0,
        month: year_0 === new Date().getFullYear() ? new Date().getMonth() + 1 : 1
      }]);
    };
    $[83] = updateValue;
    $[84] = valueRef;
    $[85] = t41;
  } else {
    t41 = $[85];
  }
  var t42;
  if ($[86] !== valueRef) {
    t42 = function t42() {
      return valueRef.current[1] ? valueRef.current[1].month : null;
    };
    $[86] = valueRef;
    $[87] = t42;
  } else {
    t42 = $[87];
  }
  var t43;
  if ($[88] !== updateValue || $[89] !== valueRef) {
    t43 = function t43(month_0) {
      updateValue([valueRef.current[0], month_0 === null ? null : valueRef.current[1] ? {
        year: valueRef.current[1].year,
        month: month_0
      } : {
        year: new Date().getFullYear(),
        month: month_0
      }]);
    };
    $[88] = updateValue;
    $[89] = valueRef;
    $[90] = t43;
  } else {
    t43 = $[90];
  }
  var t44;
  if ($[91] !== exceptValue) {
    t44 = function t44() {
      return !!exceptValue;
    };
    $[91] = exceptValue;
    $[92] = t44;
  } else {
    t44 = $[92];
  }
  var t45;
  if ($[93] !== disabled) {
    t45 = function t45() {
      return !!disabled;
    };
    $[93] = disabled;
    $[94] = t45;
  } else {
    t45 = $[94];
  }
  var t46;
  if ($[95] !== hidden) {
    t46 = function t46() {
      return !!hidden;
    };
    $[95] = hidden;
    $[96] = t46;
  } else {
    t46 = $[96];
  }
  var t47;
  if ($[97] !== validate || $[98] !== valueRef) {
    t47 = function t47() {
      return validate(valueRef.current);
    };
    $[97] = validate;
    $[98] = valueRef;
    $[99] = t47;
  } else {
    t47 = $[99];
  }
  var t48;
  if ($[100] !== formValueFromYearNameSuffix) {
    t48 = function t48() {
      return formValueFromYearNameSuffix;
    };
    $[100] = formValueFromYearNameSuffix;
    $[101] = t48;
  } else {
    t48 = $[101];
  }
  var t49;
  if ($[102] !== formValueFromMonthNameSuffix) {
    t49 = function t49() {
      return formValueFromMonthNameSuffix;
    };
    $[102] = formValueFromMonthNameSuffix;
    $[103] = t49;
  } else {
    t49 = $[103];
  }
  var t50;
  if ($[104] !== formValueToYearNameSuffix) {
    t50 = function t50() {
      return formValueToYearNameSuffix;
    };
    $[104] = formValueToYearNameSuffix;
    $[105] = t50;
  } else {
    t50 = $[105];
  }
  var t51;
  if ($[106] !== formValueToMonthNameSuffix) {
    t51 = function t51() {
      return formValueToMonthNameSuffix;
    };
    $[106] = formValueToMonthNameSuffix;
    $[107] = t51;
  } else {
    t51 = $[107];
  }
  var t52;
  if ($[108] !== formValueFromYearNameSuffix || $[109] !== name) {
    t52 = function t52() {
      return "".concat(name).concat(formValueFromYearNameSuffix);
    };
    $[108] = formValueFromYearNameSuffix;
    $[109] = name;
    $[110] = t52;
  } else {
    t52 = $[110];
  }
  var t53;
  if ($[111] !== formValueFromMonthNameSuffix || $[112] !== name) {
    t53 = function t53() {
      return "".concat(name).concat(formValueFromMonthNameSuffix);
    };
    $[111] = formValueFromMonthNameSuffix;
    $[112] = name;
    $[113] = t53;
  } else {
    t53 = $[113];
  }
  var t54;
  if ($[114] !== formValueToYearNameSuffix || $[115] !== name) {
    t54 = function t54() {
      return "".concat(name).concat(formValueToYearNameSuffix);
    };
    $[114] = formValueToYearNameSuffix;
    $[115] = name;
    $[116] = t54;
  } else {
    t54 = $[116];
  }
  var t55;
  if ($[117] !== formValueToMonthNameSuffix || $[118] !== name) {
    t55 = function t55() {
      return "".concat(name).concat(formValueToMonthNameSuffix);
    };
    $[117] = formValueToMonthNameSuffix;
    $[118] = name;
    $[119] = t55;
  } else {
    t55 = $[119];
  }
  var t56;
  if ($[120] !== setData || $[121] !== setErrorErrorHelperText || $[122] !== t27 || $[123] !== t28 || $[124] !== t29 || $[125] !== t30 || $[126] !== t31 || $[127] !== t32 || $[128] !== t33 || $[129] !== t34 || $[130] !== t35 || $[131] !== t36 || $[132] !== t37 || $[133] !== t38 || $[134] !== t39 || $[135] !== t40 || $[136] !== t41 || $[137] !== t42 || $[138] !== t43 || $[139] !== t44 || $[140] !== t45 || $[141] !== t46 || $[142] !== t47 || $[143] !== t48 || $[144] !== t49 || $[145] !== t50 || $[146] !== t51 || $[147] !== t52 || $[148] !== t53 || $[149] !== t54 || $[150] !== t55 || $[151] !== updateValue) {
    t56 = {
      getType: _temp$6,
      getName: t27,
      getReset: t28,
      reset: t29,
      getValue: t30,
      setValue: updateValue,
      getData: t31,
      setData: setData,
      getFromValue: t32,
      setFromValue: t33,
      getToValue: t34,
      setToValue: t35,
      getFromYear: t36,
      setFromYear: t37,
      getFromMonth: t38,
      setFromMonth: t39,
      getToYear: t40,
      setToYear: t41,
      getToMonth: t42,
      setToMonth: t43,
      isExceptValue: t44,
      isDisabled: t45,
      setDisabled: setDisabled,
      isHidden: t46,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t47,
      setError: setErrorErrorHelperText,
      getFormValueFromYearNameSuffix: t48,
      getFormValueFromMonthNameSuffix: t49,
      getFormValueToYearNameSuffix: t50,
      getFormValueToMonthNameSuffix: t51,
      getFormValueFromYearName: t52,
      getFormValueFromMonthName: t53,
      getFormValueToYearName: t54,
      getFormValueToMonthName: t55
    };
    $[120] = setData;
    $[121] = setErrorErrorHelperText;
    $[122] = t27;
    $[123] = t28;
    $[124] = t29;
    $[125] = t30;
    $[126] = t31;
    $[127] = t32;
    $[128] = t33;
    $[129] = t34;
    $[130] = t35;
    $[131] = t36;
    $[132] = t37;
    $[133] = t38;
    $[134] = t39;
    $[135] = t40;
    $[136] = t41;
    $[137] = t42;
    $[138] = t43;
    $[139] = t44;
    $[140] = t45;
    $[141] = t46;
    $[142] = t47;
    $[143] = t48;
    $[144] = t49;
    $[145] = t50;
    $[146] = t51;
    $[147] = t52;
    $[148] = t53;
    $[149] = t54;
    $[150] = t55;
    $[151] = updateValue;
    $[152] = t56;
  } else {
    t56 = $[152];
  }
  var commands = t56;
  var t57;
  if ($[153] !== id || $[154] !== onAddValueItem) {
    t57 = function t57(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[153] = id;
    $[154] = onAddValueItem;
    $[155] = t57;
  } else {
    t57 = $[155];
  }
  var t58;
  if ($[156] !== id || $[157] !== onRemoveValueItem) {
    t58 = function t58() {
      return onRemoveValueItem(id);
    };
    $[156] = id;
    $[157] = onRemoveValueItem;
    $[158] = t58;
  } else {
    t58 = $[158];
  }
  reactHook.useForwardRef(ref, commands, t57, t58);
  var t59;
  if ($[159] !== name || $[160] !== onValueChangeByUser || $[161] !== updateValue) {
    t59 = function t59(newValue_3, selectType, isMonthSelect) {
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
    $[159] = name;
    $[160] = onValueChangeByUser;
    $[161] = updateValue;
    $[162] = t59;
  } else {
    t59 = $[162];
  }
  var handleContainerChange = t59;
  var t60;
  if ($[163] !== dateInfo.maxAvailableYm || $[164] !== dateInfo.minAvailableYm || $[165] !== fromError || $[166] !== name || $[167] !== onValueChangeByUser || $[168] !== toError || $[169] !== updateValue || $[170] !== validate || $[171] !== valueRef) {
    t60 = function t60(selectType_0, date) {
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
    $[163] = dateInfo.maxAvailableYm;
    $[164] = dateInfo.minAvailableYm;
    $[165] = fromError;
    $[166] = name;
    $[167] = onValueChangeByUser;
    $[168] = toError;
    $[169] = updateValue;
    $[170] = validate;
    $[171] = valueRef;
    $[172] = t60;
  } else {
    t60 = $[172];
  }
  var handleInputDatePickerChange = t60;
  var t61;
  if ($[173] !== disabled || $[174] !== readOnly || $[175] !== value_2) {
    t61 = function t61(selectType_1) {
      if (readOnly || disabled) {
        return;
      }
      if (selectType_1 === "end" && value_2[0] == null) {
        var _startInputRef$curren2;
        (_startInputRef$curren2 = startInputRef.current) === null || _startInputRef$curren2 === void 0 || _startInputRef$curren2.focus();
      } else {
        setOpen(true);
      }
    };
    $[173] = disabled;
    $[174] = readOnly;
    $[175] = value_2;
    $[176] = t61;
  } else {
    t61 = $[176];
  }
  var handleInputDatePickerFocus = t61;
  var t62;
  if ($[177] !== dateInfo.maxAvailableYm || $[178] !== dateInfo.minAvailableYm) {
    t62 = function t62(dt) {
      var ym = dt.year() * 100 + (dt.month() + 1);
      return ym < dateInfo.minAvailableYm || ym > dateInfo.maxAvailableYm;
    };
    $[177] = dateInfo.maxAvailableYm;
    $[178] = dateInfo.minAvailableYm;
    $[179] = t62;
  } else {
    t62 = $[179];
  }
  var handleInputDatePickerShouldDisableYear = t62;
  var t63;
  if ($[180] !== value_2) {
    t63 = !!value_2 && !!value_2[0] ? valueToDate$2(value_2[0]) : null;
    $[180] = value_2;
    $[181] = t63;
  } else {
    t63 = $[181];
  }
  var t64;
  if ($[182] !== value_2) {
    t64 = !!value_2 && !!value_2[1] ? valueToDate$2(value_2[1]) : null;
    $[182] = value_2;
    $[183] = t64;
  } else {
    t64 = $[183];
  }
  var t65;
  if ($[184] !== t63 || $[185] !== t64) {
    t65 = [t63, t64];
    $[184] = t63;
    $[185] = t64;
    $[186] = t65;
  } else {
    t65 = $[186];
  }
  var valueDate = t65;
  var t66;
  if ($[187] !== align || $[188] !== color || $[189] !== dateInfo.maxDate || $[190] !== dateInfo.minDate || $[191] !== disabled || $[192] !== format || $[193] !== fullWidth || $[194] !== labelShrink || $[195] !== size || $[196] !== variant) {
    t66 = {
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
    $[187] = align;
    $[188] = color;
    $[189] = dateInfo.maxDate;
    $[190] = dateInfo.minDate;
    $[191] = disabled;
    $[192] = format;
    $[193] = fullWidth;
    $[194] = labelShrink;
    $[195] = size;
    $[196] = variant;
    $[197] = t66;
  } else {
    t66 = $[197];
  }
  var inputDatePickerProps = t66;
  var t67;
  if ($[198] !== fullWidth || $[199] !== initStyle || $[200] !== inputWidth) {
    t67 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[198] = fullWidth;
    $[199] = initStyle;
    $[200] = inputWidth;
    $[201] = t67;
  } else {
    t67 = $[201];
  }
  var inputStyle = t67;
  var t68;
  if ($[202] === Symbol["for"]("react.memo_cache_sentinel")) {
    t68 = function t68() {
      return setOpen(false);
    };
    $[202] = t68;
  } else {
    t68 = $[202];
  }
  var t69;
  if ($[203] !== className) {
    t69 = classNames(className, "PFormMonthRangePicker");
    $[203] = className;
    $[204] = t69;
  } else {
    t69 = $[204];
  }
  var t70 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t71 = fullWidth ? 1 : undefined;
  var t72;
  if ($[205] !== t70 || $[206] !== t71) {
    t72 = {
      display: t70,
      flex: t71
    };
    $[205] = t70;
    $[206] = t71;
    $[207] = t72;
  } else {
    t72 = $[207];
  }
  var t73 = error && errorHelperText ? 8 : -14;
  var t74;
  if ($[208] !== t73) {
    t74 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t73]
          }
        }]
      }
    };
    $[208] = t73;
    $[209] = t74;
  } else {
    t74 = $[209];
  }
  var t75;
  if ($[210] === Symbol["for"]("react.memo_cache_sentinel")) {
    t75 = {
      display: "flex"
    };
    $[210] = t75;
  } else {
    t75 = $[210];
  }
  var t76;
  if ($[211] !== disableFuture || $[212] !== disablePast || $[213] !== handleContainerChange || $[214] !== maxValue || $[215] !== minValue || $[216] !== value_2) {
    t76 = /*#__PURE__*/React.createElement("div", {
      style: t75
    }, /*#__PURE__*/React.createElement(PrivateMonthRangePicker, {
      minValue: minValue,
      maxValue: maxValue,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_2,
      onChange: handleContainerChange
    }));
    $[211] = disableFuture;
    $[212] = disablePast;
    $[213] = handleContainerChange;
    $[214] = maxValue;
    $[215] = minValue;
    $[216] = value_2;
    $[217] = t76;
  } else {
    t76 = $[217];
  }
  var t77 = error || fromError;
  var t78 = focused || open;
  var t79;
  if ($[218] !== handleInputDatePickerChange) {
    t79 = function t79(v) {
      return handleInputDatePickerChange("start", v);
    };
    $[218] = handleInputDatePickerChange;
    $[219] = t79;
  } else {
    t79 = $[219];
  }
  var t80;
  if ($[220] !== handleInputDatePickerFocus) {
    t80 = function t80() {
      return handleInputDatePickerFocus("start");
    };
    $[220] = handleInputDatePickerFocus;
    $[221] = t80;
  } else {
    t80 = $[221];
  }
  var t81;
  if ($[222] === Symbol["for"]("react.memo_cache_sentinel")) {
    t81 = function t81(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[222] = t81;
  } else {
    t81 = $[222];
  }
  var t82;
  if ($[223] !== enableKeyboardInput || $[224] !== endAdornment || $[225] !== fromLabel || $[226] !== fromLabelIcon || $[227] !== handleInputDatePickerShouldDisableYear || $[228] !== icon || $[229] !== inputDatePickerProps || $[230] !== inputStyle || $[231] !== readOnly || $[232] !== required || $[233] !== startAdornment || $[234] !== sx || $[235] !== t77 || $[236] !== t78 || $[237] !== t79 || $[238] !== t80 || $[239] !== valueDate[0]) {
    t82 = /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      sx: sx,
      value: valueDate[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t77,
      focused: t78,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: startInputRef,
      onChange: t79,
      onFocus: t80,
      onError: t81,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[223] = enableKeyboardInput;
    $[224] = endAdornment;
    $[225] = fromLabel;
    $[226] = fromLabelIcon;
    $[227] = handleInputDatePickerShouldDisableYear;
    $[228] = icon;
    $[229] = inputDatePickerProps;
    $[230] = inputStyle;
    $[231] = readOnly;
    $[232] = required;
    $[233] = startAdornment;
    $[234] = sx;
    $[235] = t77;
    $[236] = t78;
    $[237] = t79;
    $[238] = t80;
    $[239] = valueDate[0];
    $[240] = t82;
  } else {
    t82 = $[240];
  }
  var t83;
  if ($[241] === Symbol["for"]("react.memo_cache_sentinel")) {
    t83 = /*#__PURE__*/React.createElement(material.Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[241] = t83;
  } else {
    t83 = $[241];
  }
  var t84 = error || toError;
  var t85 = focused || open;
  var t86;
  if ($[242] !== handleInputDatePickerChange) {
    t86 = function t86(v_0) {
      return handleInputDatePickerChange("end", v_0);
    };
    $[242] = handleInputDatePickerChange;
    $[243] = t86;
  } else {
    t86 = $[243];
  }
  var t87;
  if ($[244] !== handleInputDatePickerFocus) {
    t87 = function t87() {
      return handleInputDatePickerFocus("end");
    };
    $[244] = handleInputDatePickerFocus;
    $[245] = t87;
  } else {
    t87 = $[245];
  }
  var t88;
  if ($[246] === Symbol["for"]("react.memo_cache_sentinel")) {
    t88 = function t88(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[246] = t88;
  } else {
    t88 = $[246];
  }
  var t89;
  if ($[247] !== enableKeyboardInput || $[248] !== endAdornment || $[249] !== handleInputDatePickerShouldDisableYear || $[250] !== icon || $[251] !== inputDatePickerProps || $[252] !== inputStyle || $[253] !== readOnly || $[254] !== required || $[255] !== startAdornment || $[256] !== sx || $[257] !== t84 || $[258] !== t85 || $[259] !== t86 || $[260] !== t87 || $[261] !== toLabel || $[262] !== toLabelIcon || $[263] !== valueDate[1]) {
    t89 = /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, inputDatePickerProps, {
      style: inputStyle,
      sx: sx,
      value: valueDate[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t84,
      focused: t85,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment,
      inputRef: endInputRef,
      onChange: t86,
      onFocus: t87,
      onError: t88,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[247] = enableKeyboardInput;
    $[248] = endAdornment;
    $[249] = handleInputDatePickerShouldDisableYear;
    $[250] = icon;
    $[251] = inputDatePickerProps;
    $[252] = inputStyle;
    $[253] = readOnly;
    $[254] = required;
    $[255] = startAdornment;
    $[256] = sx;
    $[257] = t84;
    $[258] = t85;
    $[259] = t86;
    $[260] = t87;
    $[261] = toLabel;
    $[262] = toLabelIcon;
    $[263] = valueDate[1];
    $[264] = t89;
  } else {
    t89 = $[264];
  }
  var t90;
  if ($[265] !== t82 || $[266] !== t89) {
    t90 = /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      alignItems: "center"
    }, t82, t83, t89);
    $[265] = t82;
    $[266] = t89;
    $[267] = t90;
  } else {
    t90 = $[267];
  }
  var t91;
  if ($[268] !== open || $[269] !== t74 || $[270] !== t76 || $[271] !== t90) {
    t91 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t74,
      title: t76
    }, t90);
    $[268] = open;
    $[269] = t74;
    $[270] = t76;
    $[271] = t90;
    $[272] = t91;
  } else {
    t91 = $[272];
  }
  var t92;
  if ($[273] !== error || $[274] !== errorHelperText || $[275] !== formColWithHelperText || $[276] !== fromError || $[277] !== fromErrorHelperText || $[278] !== helperText || $[279] !== toError || $[280] !== toErrorHelperText || $[281] !== variant) {
    t92 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(material.FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[273] = error;
    $[274] = errorHelperText;
    $[275] = formColWithHelperText;
    $[276] = fromError;
    $[277] = fromErrorHelperText;
    $[278] = helperText;
    $[279] = toError;
    $[280] = toErrorHelperText;
    $[281] = variant;
    $[282] = t92;
  } else {
    t92 = $[282];
  }
  var t93;
  if ($[283] !== t69 || $[284] !== t72 || $[285] !== t91 || $[286] !== t92) {
    t93 = /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
      dateAdapter: AdapterDayjs.AdapterDayjs,
      adapterLocale: "ko"
    }, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t68
    }, /*#__PURE__*/React.createElement("div", {
      className: t69,
      style: t72
    }, t91, t92)));
    $[283] = t69;
    $[284] = t72;
    $[285] = t91;
    $[286] = t92;
    $[287] = t93;
  } else {
    t93 = $[287];
  }
  return t93;
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
  var $ = compilerRuntime.c(161);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var inputRef = React.useRef(undefined);
  var closeTimeoutRef = React.useRef(undefined);
  var mouseDownTimeRef = React.useRef(undefined);
  var inputDatePickerErrorRef = React.useRef(null);
  var openValueRef = React.useRef(undefined);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(initError),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    _setError = _useState2[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t4;
  if ($[0] !== errorRef) {
    t4 = function t4(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t4;
  } else {
    t4 = $[1];
  }
  var setError = t4;
  var _useState3 = React.useState(initData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    _setData = _useState4[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t5;
  if ($[2] !== dataRef) {
    t5 = function t5(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  var setData = t5;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState5 = React.useState(finalInitDisabled),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState7 = React.useState(initHidden),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var _useState9 = React.useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    errorHelperText = _useState0[0],
    setErrorHelperText = _useState0[1];
  var _useState1 = React.useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var t6;
  if ($[4] !== setError) {
    t6 = function t6(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[4] = setError;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  var setErrorErrorHelperText = t6;
  var t7;
  if ($[6] !== onValidateRef || $[7] !== required || $[8] !== setErrorErrorHelperText) {
    t7 = function t7(value_1) {
      if (required && compare.empty(value_1)) {
        setErrorErrorHelperText(true, "\uD544\uC218 \uC120\uD0DD \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        return false;
      }
      if (inputDatePickerErrorRef.current) {
        setErrorErrorHelperText(true, getDateValidationErrorText(inputDatePickerErrorRef.current));
        return false;
      }
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_1);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[6] = onValidateRef;
    $[7] = required;
    $[8] = setErrorErrorHelperText;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  var validate = t7;
  var t8;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  var focus = t8;
  var t9;
  if ($[11] !== initValue) {
    t9 = getFinalValue$1(initValue);
    $[11] = initValue;
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  var _useState11 = React.useState(t9),
    _useState12 = _slicedToArray(_useState11, 2),
    value_2 = _useState12[0],
    _setValue = _useState12[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue$1(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t10;
  if ($[13] !== valueRef) {
    t10 = function t10(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[13] = valueRef;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  var setValue = t10;
  var t11;
  if ($[15] !== error || $[16] !== name || $[17] !== onChangeRef || $[18] !== onValueChange || $[19] !== setValue || $[20] !== validate) {
    t11 = function t11(newValue_2) {
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
    $[15] = error;
    $[16] = name;
    $[17] = onChangeRef;
    $[18] = onValueChange;
    $[19] = setValue;
    $[20] = validate;
    $[21] = t11;
  } else {
    t11 = $[21];
  }
  var updateValue = t11;
  var t12;
  if ($[22] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = new Date().getFullYear();
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  var nowYear = t12;
  var t13;
  if ($[23] !== minYear) {
    t13 = minYear ? valueToDate$1(minYear) : undefined;
    $[23] = minYear;
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  var minDate = t13;
  var t14;
  if ($[25] !== maxYear) {
    t14 = maxYear ? valueToDate$1(maxYear) : undefined;
    $[25] = maxYear;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  var maxDate = t14;
  var t15;
  if ($[27] !== maxDate || $[28] !== minDate) {
    t15 = {
      nowYear: nowYear,
      min: minDate,
      max: maxDate
    };
    $[27] = maxDate;
    $[28] = minDate;
    $[29] = t15;
  } else {
    t15 = $[29];
  }
  var dateInfo = t15;
  var t16;
  if ($[30] !== name || $[31] !== onRequestSearchSubmit || $[32] !== open || $[33] !== valueRef) {
    t16 = function t16() {
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
    $[30] = name;
    $[31] = onRequestSearchSubmit;
    $[32] = open;
    $[33] = valueRef;
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  var effectEvent = React.useEffectEvent(t16);
  var firstSkipRef = React.useRef(true);
  var t17;
  if ($[35] !== effectEvent) {
    t17 = function t17() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    };
    $[35] = effectEvent;
    $[36] = t17;
  } else {
    t17 = $[36];
  }
  var t18;
  if ($[37] !== open) {
    t18 = [open];
    $[37] = open;
    $[38] = t18;
  } else {
    t18 = $[38];
  }
  React.useEffect(t17, t18);
  var t19;
  if ($[39] !== name) {
    t19 = function t19() {
      return name;
    };
    $[39] = name;
    $[40] = t19;
  } else {
    t19 = $[40];
  }
  var t20;
  if ($[41] !== initValueRef) {
    t20 = function t20() {
      return getFinalValue$1(initValueRef.current);
    };
    $[41] = initValueRef;
    $[42] = t20;
  } else {
    t20 = $[42];
  }
  var t21;
  if ($[43] !== initValueRef || $[44] !== updateValue) {
    t21 = function t21() {
      return updateValue(initValueRef.current);
    };
    $[43] = initValueRef;
    $[44] = updateValue;
    $[45] = t21;
  } else {
    t21 = $[45];
  }
  var t22;
  if ($[46] !== valueRef) {
    t22 = function t22() {
      return valueRef.current;
    };
    $[46] = valueRef;
    $[47] = t22;
  } else {
    t22 = $[47];
  }
  var t23;
  if ($[48] !== dataRef) {
    t23 = function t23() {
      return dataRef.current;
    };
    $[48] = dataRef;
    $[49] = t23;
  } else {
    t23 = $[49];
  }
  var t24;
  if ($[50] !== exceptValue) {
    t24 = function t24() {
      return !!exceptValue;
    };
    $[50] = exceptValue;
    $[51] = t24;
  } else {
    t24 = $[51];
  }
  var t25;
  if ($[52] !== disabled) {
    t25 = function t25() {
      return !!disabled;
    };
    $[52] = disabled;
    $[53] = t25;
  } else {
    t25 = $[53];
  }
  var t26;
  if ($[54] !== hidden) {
    t26 = function t26() {
      return !!hidden;
    };
    $[54] = hidden;
    $[55] = t26;
  } else {
    t26 = $[55];
  }
  var t27;
  if ($[56] !== validate || $[57] !== valueRef) {
    t27 = function t27() {
      return validate(valueRef.current);
    };
    $[56] = validate;
    $[57] = valueRef;
    $[58] = t27;
  } else {
    t27 = $[58];
  }
  var t28;
  if ($[59] !== setData || $[60] !== setErrorErrorHelperText || $[61] !== t19 || $[62] !== t20 || $[63] !== t21 || $[64] !== t22 || $[65] !== t23 || $[66] !== t24 || $[67] !== t25 || $[68] !== t26 || $[69] !== t27 || $[70] !== updateValue) {
    t28 = {
      getType: _temp$5,
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
      setError: setErrorErrorHelperText
    };
    $[59] = setData;
    $[60] = setErrorErrorHelperText;
    $[61] = t19;
    $[62] = t20;
    $[63] = t21;
    $[64] = t22;
    $[65] = t23;
    $[66] = t24;
    $[67] = t25;
    $[68] = t26;
    $[69] = t27;
    $[70] = updateValue;
    $[71] = t28;
  } else {
    t28 = $[71];
  }
  var commands = t28;
  var t29;
  if ($[72] !== id || $[73] !== onAddValueItem) {
    t29 = function t29(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[72] = id;
    $[73] = onAddValueItem;
    $[74] = t29;
  } else {
    t29 = $[74];
  }
  var t30;
  if ($[75] !== id || $[76] !== onRemoveValueItem) {
    t30 = function t30() {
      return onRemoveValueItem(id);
    };
    $[75] = id;
    $[76] = onRemoveValueItem;
    $[77] = t30;
  } else {
    t30 = $[77];
  }
  reactHook.useForwardRef(ref, commands, t29, t30);
  var t31;
  if ($[78] === Symbol["for"]("react.memo_cache_sentinel")) {
    t31 = function t31() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
      mouseDownTimeRef.current = new Date().getTime();
    };
    $[78] = t31;
  } else {
    t31 = $[78];
  }
  var handleContainerMouseDown = t31;
  var t32;
  if ($[79] === Symbol["for"]("react.memo_cache_sentinel")) {
    t32 = function t32() {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = undefined;
      }
    };
    $[79] = t32;
  } else {
    t32 = $[79];
  }
  var handleContainerFocus = t32;
  var t33;
  if ($[80] === Symbol["for"]("react.memo_cache_sentinel")) {
    t33 = function t33() {
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
    $[80] = t33;
  } else {
    t33 = $[80];
  }
  var handleContainerBlur = t33;
  var t34;
  if ($[81] !== name || $[82] !== onValueChangeByUser || $[83] !== updateValue) {
    t34 = function t34(newValue_3, isClick) {
      updateValue(newValue_3);
      if (isClick) {
        setOpen(false);
      }
      setTimeout(function () {
        onValueChangeByUser(name, newValue_3);
      });
    };
    $[81] = name;
    $[82] = onValueChangeByUser;
    $[83] = updateValue;
    $[84] = t34;
  } else {
    t34 = $[84];
  }
  var handleContainerChange = t34;
  var t35;
  if ($[85] !== name || $[86] !== onValueChangeByUser || $[87] !== updateValue) {
    t35 = function t35(v) {
      var newValue_4 = v ? dateToValue$1(v) : v;
      updateValue(newValue_4);
      setTimeout(function () {
        onValueChangeByUser(name, newValue_4);
      });
    };
    $[85] = name;
    $[86] = onValueChangeByUser;
    $[87] = updateValue;
    $[88] = t35;
  } else {
    t35 = $[88];
  }
  var handleInputDatePickerChange = t35;
  var t36;
  if ($[89] !== disabled || $[90] !== readOnly) {
    t36 = function t36() {
      if (readOnly || disabled) {
        return;
      }
      setOpen(true);
    };
    $[89] = disabled;
    $[90] = readOnly;
    $[91] = t36;
  } else {
    t36 = $[91];
  }
  var handleInputDatePickerFocus = t36;
  var t37;
  if ($[92] !== dateInfo.nowYear || $[93] !== disableFuture || $[94] !== disablePast) {
    t37 = function t37(year) {
      return !!disablePast && year.year() < dateInfo.nowYear || !!disableFuture && year.year() > dateInfo.nowYear;
    };
    $[92] = dateInfo.nowYear;
    $[93] = disableFuture;
    $[94] = disablePast;
    $[95] = t37;
  } else {
    t37 = $[95];
  }
  var handleInputDatePickerShouldDisableYear = t37;
  var t38;
  if ($[96] !== value_2) {
    t38 = value_2 ? valueToDate$1(value_2) : null;
    $[96] = value_2;
    $[97] = t38;
  } else {
    t38 = $[97];
  }
  var valueDate = t38;
  var t39;
  if ($[98] === Symbol["for"]("react.memo_cache_sentinel")) {
    t39 = function t39() {
      return setOpen(false);
    };
    $[98] = t39;
  } else {
    t39 = $[98];
  }
  var t40;
  if ($[99] !== className) {
    t40 = classNames(className, "PFormYearPicker");
    $[99] = className;
    $[100] = t40;
  } else {
    t40 = $[100];
  }
  var t41 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t42 = fullWidth ? 1 : undefined;
  var t43;
  if ($[101] !== t41 || $[102] !== t42) {
    t43 = {
      display: t41,
      flex: t42
    };
    $[101] = t41;
    $[102] = t42;
    $[103] = t43;
  } else {
    t43 = $[103];
  }
  var t44 = error && errorHelperText ? 8 : -14;
  var t45;
  if ($[104] !== t44) {
    t45 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t44]
          }
        }]
      }
    };
    $[104] = t44;
    $[105] = t45;
  } else {
    t45 = $[105];
  }
  var t46;
  if ($[106] === Symbol["for"]("react.memo_cache_sentinel")) {
    t46 = {
      display: "flex"
    };
    $[106] = t46;
  } else {
    t46 = $[106];
  }
  var t47;
  if ($[107] !== disableFuture || $[108] !== disablePast || $[109] !== handleContainerChange || $[110] !== maxYear || $[111] !== minYear || $[112] !== value_2) {
    t47 = /*#__PURE__*/React.createElement("div", {
      style: t46
    }, /*#__PURE__*/React.createElement(PrivateYearPicker, {
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_2,
      onChange: handleContainerChange
    }));
    $[107] = disableFuture;
    $[108] = disablePast;
    $[109] = handleContainerChange;
    $[110] = maxYear;
    $[111] = minYear;
    $[112] = value_2;
    $[113] = t47;
  } else {
    t47 = $[113];
  }
  var t48;
  if ($[114] !== fullWidth || $[115] !== initStyle || $[116] !== inputWidth) {
    t48 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[114] = fullWidth;
    $[115] = initStyle;
    $[116] = inputWidth;
    $[117] = t48;
  } else {
    t48 = $[117];
  }
  var t49;
  if ($[118] === Symbol["for"]("react.memo_cache_sentinel")) {
    t49 = function t49(reason) {
      return inputDatePickerErrorRef.current = reason;
    };
    $[118] = t49;
  } else {
    t49 = $[118];
  }
  var t50;
  if ($[119] !== color || $[120] !== dateInfo.max || $[121] !== dateInfo.min || $[122] !== disabled || $[123] !== enableKeyboardInput || $[124] !== endAdornment || $[125] !== error || $[126] !== focused || $[127] !== format || $[128] !== fullWidth || $[129] !== handleInputDatePickerChange || $[130] !== handleInputDatePickerFocus || $[131] !== handleInputDatePickerShouldDisableYear || $[132] !== icon || $[133] !== label || $[134] !== labelIcon || $[135] !== labelShrink || $[136] !== readOnly || $[137] !== required || $[138] !== size || $[139] !== startAdornment || $[140] !== sx || $[141] !== t48 || $[142] !== valueDate || $[143] !== variant) {
    t50 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PrivateInputDatePicker, {
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
      style: t48,
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
      onError: t49,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    }));
    $[119] = color;
    $[120] = dateInfo.max;
    $[121] = dateInfo.min;
    $[122] = disabled;
    $[123] = enableKeyboardInput;
    $[124] = endAdornment;
    $[125] = error;
    $[126] = focused;
    $[127] = format;
    $[128] = fullWidth;
    $[129] = handleInputDatePickerChange;
    $[130] = handleInputDatePickerFocus;
    $[131] = handleInputDatePickerShouldDisableYear;
    $[132] = icon;
    $[133] = label;
    $[134] = labelIcon;
    $[135] = labelShrink;
    $[136] = readOnly;
    $[137] = required;
    $[138] = size;
    $[139] = startAdornment;
    $[140] = sx;
    $[141] = t48;
    $[142] = valueDate;
    $[143] = variant;
    $[144] = t50;
  } else {
    t50 = $[144];
  }
  var t51;
  if ($[145] !== open || $[146] !== t45 || $[147] !== t47 || $[148] !== t50) {
    t51 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t45,
      title: t47
    }, t50);
    $[145] = open;
    $[146] = t45;
    $[147] = t47;
    $[148] = t50;
    $[149] = t51;
  } else {
    t51 = $[149];
  }
  var t52;
  if ($[150] !== error || $[151] !== errorHelperText || $[152] !== formColWithHelperText || $[153] !== helperText || $[154] !== variant) {
    t52 = !formColWithHelperText && (!!helperText || error && !!errorHelperText) && /*#__PURE__*/React.createElement(material.FormHelperText, {
      error: error,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : helperText);
    $[150] = error;
    $[151] = errorHelperText;
    $[152] = formColWithHelperText;
    $[153] = helperText;
    $[154] = variant;
    $[155] = t52;
  } else {
    t52 = $[155];
  }
  var t53;
  if ($[156] !== t40 || $[157] !== t43 || $[158] !== t51 || $[159] !== t52) {
    t53 = /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
      dateAdapter: AdapterDayjs.AdapterDayjs
    }, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t39
    }, /*#__PURE__*/React.createElement("div", {
      className: t40,
      style: t43,
      onMouseDown: handleContainerMouseDown,
      onFocus: handleContainerFocus,
      onBlur: handleContainerBlur
    }, t51, t52)));
    $[156] = t40;
    $[157] = t43;
    $[158] = t51;
    $[159] = t52;
    $[160] = t53;
  } else {
    t53 = $[160];
  }
  return t53;
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
  var $ = compilerRuntime.c(235);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var startInputRef = React.useRef(undefined);
  var endInputRef = React.useRef(undefined);
  var startInputDatePickerErrorRef = React.useRef(null);
  var endInputDatePickerErrorRef = React.useRef(null);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    fromError = _useState4[0],
    setFromError = _useState4[1];
  var _useState5 = React.useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    fromErrorHelperText = _useState6[0],
    setFromErrorHelperText = _useState6[1];
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    toError = _useState8[0],
    setToError = _useState8[1];
  var _useState9 = React.useState(),
    _useState0 = _slicedToArray(_useState9, 2),
    toErrorHelperText = _useState0[0],
    setToErrorHelperText = _useState0[1];
  var _useState1 = React.useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var _useState11 = React.useState("start"),
    _useState12 = _slicedToArray(_useState11, 2),
    selectType = _useState12[0],
    setSelectType = _useState12[1];
  var _useState13 = React.useState(),
    _useState14 = _slicedToArray(_useState13, 2),
    openValue = _useState14[0],
    setOpenValue = _useState14[1];
  var _useState15 = React.useState(initError),
    _useState16 = _slicedToArray(_useState15, 2),
    error = _useState16[0],
    _setError = _useState16[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t6;
  if ($[0] !== errorRef) {
    t6 = function t6(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t6;
  } else {
    t6 = $[1];
  }
  var setError = t6;
  var _useState17 = React.useState(initData),
    _useState18 = _slicedToArray(_useState17, 2),
    data = _useState18[0],
    _setData = _useState18[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t7;
  if ($[2] !== dataRef) {
    t7 = function t7(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t7;
  } else {
    t7 = $[3];
  }
  var setData = t7;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState19 = React.useState(finalInitDisabled),
    _useState20 = _slicedToArray(_useState19, 2),
    disabled = _useState20[0],
    setDisabled = _useState20[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState21 = React.useState(initHidden),
    _useState22 = _slicedToArray(_useState21, 2),
    hidden = _useState22[0],
    setHidden = _useState22[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t8;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t8 = function t8(error_0, fromErrorHelperText_0) {
      setFromError(error_0);
      setFromErrorHelperText(fromErrorHelperText_0);
    };
    $[4] = t8;
  } else {
    t8 = $[4];
  }
  var setFromErrorErrorHelperText = t8;
  var t9;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t9 = function t9(error_1, toErrorHelperText_0) {
      setToError(error_1);
      setToErrorHelperText(toErrorHelperText_0);
    };
    $[5] = t9;
  } else {
    t9 = $[5];
  }
  var setToErrorErrorHelperText = t9;
  var t10;
  if ($[6] !== setError) {
    t10 = function t10(error_2, errorHelperText_0) {
      setError(error_2);
      setErrorHelperText(error_2 ? errorHelperText_0 : undefined);
    };
    $[6] = setError;
    $[7] = t10;
  } else {
    t10 = $[7];
  }
  var setErrorErrorHelperText = t10;
  var t11;
  if ($[8] !== onValidateRef || $[9] !== required || $[10] !== setErrorErrorHelperText) {
    t11 = function t11(value_1) {
      if (required && (value_1[0] == null || value_1[1] == null)) {
        if (value_1[0] == null && value_1[1] == null) {
          setErrorErrorHelperText(true, "\uD544\uC218 \uC785\uB825 \uD56D\uBAA9\uC785\uB2C8\uB2E4.");
        } else {
          if (value_1[0] == null) {
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
        var onValidateResult = onValidateRef.current(value_1);
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
    $[8] = onValidateRef;
    $[9] = required;
    $[10] = setErrorErrorHelperText;
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  var validate = t11;
  var t12;
  if ($[12] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12() {
      var _startInputRef$curren;
      (_startInputRef$curren = startInputRef.current) === null || _startInputRef$curren === void 0 || _startInputRef$curren.focus();
    };
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  var focus = t12;
  var t13;
  if ($[13] !== initValue) {
    t13 = getFinalValue(initValue);
    $[13] = initValue;
    $[14] = t13;
  } else {
    t13 = $[14];
  }
  var _useState23 = React.useState(t13),
    _useState24 = _slicedToArray(_useState23, 2),
    value_2 = _useState24[0],
    _setValue = _useState24[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_2);
  var t14;
  if ($[15] !== valueRef) {
    t14 = function t14(value_3) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_3 === "function" ? value_3(prev_1) : value_3;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[15] = valueRef;
    $[16] = t14;
  } else {
    t14 = $[16];
  }
  var setValue = t14;
  var t15;
  if ($[17] !== error || $[18] !== fromError || $[19] !== name || $[20] !== onChangeRef || $[21] !== onValueChange || $[22] !== setValue || $[23] !== toError || $[24] !== validate) {
    t15 = function t15(newValue_2) {
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
    $[17] = error;
    $[18] = fromError;
    $[19] = name;
    $[20] = onChangeRef;
    $[21] = onValueChange;
    $[22] = setValue;
    $[23] = toError;
    $[24] = validate;
    $[25] = t15;
  } else {
    t15 = $[25];
  }
  var updateValue = t15;
  var t16;
  if ($[26] === Symbol["for"]("react.memo_cache_sentinel")) {
    t16 = new Date().getFullYear();
    $[26] = t16;
  } else {
    t16 = $[26];
  }
  var nowYear = t16;
  var t17;
  if ($[27] !== minYear) {
    t17 = valueToDate(minYear);
    $[27] = minYear;
    $[28] = t17;
  } else {
    t17 = $[28];
  }
  var minDate = t17;
  var t18;
  if ($[29] !== maxYear) {
    t18 = valueToDate(maxYear);
    $[29] = maxYear;
    $[30] = t18;
  } else {
    t18 = $[30];
  }
  var maxDate = t18;
  var t19;
  if ($[31] !== maxDate || $[32] !== minDate) {
    t19 = {
      nowYear: nowYear,
      min: minDate,
      max: maxDate
    };
    $[31] = maxDate;
    $[32] = minDate;
    $[33] = t19;
  } else {
    t19 = $[33];
  }
  var dateInfo = t19;
  var t20;
  if ($[34] !== name || $[35] !== onRequestSearchSubmit || $[36] !== open || $[37] !== openValue || $[38] !== value_2) {
    t20 = function t20() {
      if (open) {
        setOpenValue(value_2);
      } else {
        if (openValue !== value_2) {
          var runOnRequestSearchSubmit;
          if (openValue && value_2) {
            runOnRequestSearchSubmit = openValue !== value_2;
          } else {
            runOnRequestSearchSubmit = true;
          }
          if (runOnRequestSearchSubmit) {
            onRequestSearchSubmit(name, value_2);
          }
        }
      }
    };
    $[34] = name;
    $[35] = onRequestSearchSubmit;
    $[36] = open;
    $[37] = openValue;
    $[38] = value_2;
    $[39] = t20;
  } else {
    t20 = $[39];
  }
  var effectEvent = React.useEffectEvent(t20);
  var firstSkipRef = React.useRef(true);
  var t21;
  if ($[40] !== effectEvent) {
    t21 = function t21() {
      if (firstSkipRef.current) {
        firstSkipRef.current = false;
      } else {
        effectEvent();
      }
    };
    $[40] = effectEvent;
    $[41] = t21;
  } else {
    t21 = $[41];
  }
  var t22;
  if ($[42] !== open) {
    t22 = [open];
    $[42] = open;
    $[43] = t22;
  } else {
    t22 = $[43];
  }
  React.useEffect(t21, t22);
  var t23;
  if ($[44] !== name) {
    t23 = function t23() {
      return name;
    };
    $[44] = name;
    $[45] = t23;
  } else {
    t23 = $[45];
  }
  var t24;
  if ($[46] !== initValueRef) {
    t24 = function t24() {
      return getFinalValue(initValueRef.current);
    };
    $[46] = initValueRef;
    $[47] = t24;
  } else {
    t24 = $[47];
  }
  var t25;
  if ($[48] !== initValueRef || $[49] !== updateValue) {
    t25 = function t25() {
      return updateValue(initValueRef.current);
    };
    $[48] = initValueRef;
    $[49] = updateValue;
    $[50] = t25;
  } else {
    t25 = $[50];
  }
  var t26;
  if ($[51] !== valueRef) {
    t26 = function t26() {
      return valueRef.current;
    };
    $[51] = valueRef;
    $[52] = t26;
  } else {
    t26 = $[52];
  }
  var t27;
  if ($[53] !== dataRef) {
    t27 = function t27() {
      return dataRef.current;
    };
    $[53] = dataRef;
    $[54] = t27;
  } else {
    t27 = $[54];
  }
  var t28;
  if ($[55] !== valueRef) {
    t28 = function t28() {
      return valueRef.current[0];
    };
    $[55] = valueRef;
    $[56] = t28;
  } else {
    t28 = $[56];
  }
  var t29;
  if ($[57] !== updateValue || $[58] !== valueRef) {
    t29 = function t29(value_4) {
      return updateValue([value_4, valueRef.current[1]]);
    };
    $[57] = updateValue;
    $[58] = valueRef;
    $[59] = t29;
  } else {
    t29 = $[59];
  }
  var t30;
  if ($[60] !== valueRef) {
    t30 = function t30() {
      return valueRef.current[1];
    };
    $[60] = valueRef;
    $[61] = t30;
  } else {
    t30 = $[61];
  }
  var t31;
  if ($[62] !== updateValue || $[63] !== valueRef) {
    t31 = function t31(value_5) {
      return updateValue([valueRef.current[0], value_5]);
    };
    $[62] = updateValue;
    $[63] = valueRef;
    $[64] = t31;
  } else {
    t31 = $[64];
  }
  var t32;
  if ($[65] !== exceptValue) {
    t32 = function t32() {
      return !!exceptValue;
    };
    $[65] = exceptValue;
    $[66] = t32;
  } else {
    t32 = $[66];
  }
  var t33;
  if ($[67] !== disabled) {
    t33 = function t33() {
      return !!disabled;
    };
    $[67] = disabled;
    $[68] = t33;
  } else {
    t33 = $[68];
  }
  var t34;
  if ($[69] !== hidden) {
    t34 = function t34() {
      return !!hidden;
    };
    $[69] = hidden;
    $[70] = t34;
  } else {
    t34 = $[70];
  }
  var t35;
  if ($[71] !== validate || $[72] !== valueRef) {
    t35 = function t35() {
      return validate(valueRef.current);
    };
    $[71] = validate;
    $[72] = valueRef;
    $[73] = t35;
  } else {
    t35 = $[73];
  }
  var t36;
  if ($[74] !== formValueFromNameSuffix) {
    t36 = function t36() {
      return formValueFromNameSuffix;
    };
    $[74] = formValueFromNameSuffix;
    $[75] = t36;
  } else {
    t36 = $[75];
  }
  var t37;
  if ($[76] !== formValueToNameSuffix) {
    t37 = function t37() {
      return formValueToNameSuffix;
    };
    $[76] = formValueToNameSuffix;
    $[77] = t37;
  } else {
    t37 = $[77];
  }
  var t38;
  if ($[78] !== formValueFromNameSuffix || $[79] !== name) {
    t38 = function t38() {
      return "".concat(name).concat(formValueFromNameSuffix);
    };
    $[78] = formValueFromNameSuffix;
    $[79] = name;
    $[80] = t38;
  } else {
    t38 = $[80];
  }
  var t39;
  if ($[81] !== formValueToNameSuffix || $[82] !== name) {
    t39 = function t39() {
      return "".concat(name).concat(formValueToNameSuffix);
    };
    $[81] = formValueToNameSuffix;
    $[82] = name;
    $[83] = t39;
  } else {
    t39 = $[83];
  }
  var t40;
  if ($[84] !== setData || $[85] !== setErrorErrorHelperText || $[86] !== t23 || $[87] !== t24 || $[88] !== t25 || $[89] !== t26 || $[90] !== t27 || $[91] !== t28 || $[92] !== t29 || $[93] !== t30 || $[94] !== t31 || $[95] !== t32 || $[96] !== t33 || $[97] !== t34 || $[98] !== t35 || $[99] !== t36 || $[100] !== t37 || $[101] !== t38 || $[102] !== t39 || $[103] !== updateValue) {
    t40 = {
      getType: _temp$4,
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
      isExceptValue: t32,
      isDisabled: t33,
      setDisabled: setDisabled,
      isHidden: t34,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t35,
      setError: setErrorErrorHelperText,
      getFormValueFromNameSuffix: t36,
      getFormValueToNameSuffix: t37,
      getFormValueFromName: t38,
      getFormValueToName: t39
    };
    $[84] = setData;
    $[85] = setErrorErrorHelperText;
    $[86] = t23;
    $[87] = t24;
    $[88] = t25;
    $[89] = t26;
    $[90] = t27;
    $[91] = t28;
    $[92] = t29;
    $[93] = t30;
    $[94] = t31;
    $[95] = t32;
    $[96] = t33;
    $[97] = t34;
    $[98] = t35;
    $[99] = t36;
    $[100] = t37;
    $[101] = t38;
    $[102] = t39;
    $[103] = updateValue;
    $[104] = t40;
  } else {
    t40 = $[104];
  }
  var commands = t40;
  var t41;
  if ($[105] !== id || $[106] !== onAddValueItem) {
    t41 = function t41(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[105] = id;
    $[106] = onAddValueItem;
    $[107] = t41;
  } else {
    t41 = $[107];
  }
  var t42;
  if ($[108] !== id || $[109] !== onRemoveValueItem) {
    t42 = function t42() {
      return onRemoveValueItem(id);
    };
    $[108] = id;
    $[109] = onRemoveValueItem;
    $[110] = t42;
  } else {
    t42 = $[110];
  }
  reactHook.useForwardRef(ref, commands, t41, t42);
  var t43;
  if ($[111] !== name || $[112] !== onValueChangeByUser || $[113] !== updateValue) {
    t43 = function t43(newValue_3, selectType_0) {
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
    $[111] = name;
    $[112] = onValueChangeByUser;
    $[113] = updateValue;
    $[114] = t43;
  } else {
    t43 = $[114];
  }
  var handleContainerChange = t43;
  var t44;
  if ($[115] !== fromError || $[116] !== maxYear || $[117] !== minYear || $[118] !== name || $[119] !== onValueChangeByUser || $[120] !== toError || $[121] !== updateValue || $[122] !== validate || $[123] !== valueRef) {
    t44 = function t44(selectType_1, date) {
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
    $[115] = fromError;
    $[116] = maxYear;
    $[117] = minYear;
    $[118] = name;
    $[119] = onValueChangeByUser;
    $[120] = toError;
    $[121] = updateValue;
    $[122] = validate;
    $[123] = valueRef;
    $[124] = t44;
  } else {
    t44 = $[124];
  }
  var handleInputDatePickerChange = t44;
  var t45;
  if ($[125] !== disabled || $[126] !== readOnly || $[127] !== valueRef) {
    t45 = function t45(selectType_2) {
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
    $[125] = disabled;
    $[126] = readOnly;
    $[127] = valueRef;
    $[128] = t45;
  } else {
    t45 = $[128];
  }
  var handleInputDatePickerFocus = t45;
  var t46;
  if ($[129] !== dateInfo.nowYear || $[130] !== disableFuture || $[131] !== disablePast) {
    t46 = function t46(year) {
      return !!disablePast && year.year() < dateInfo.nowYear || !!disableFuture && year.year() > dateInfo.nowYear;
    };
    $[129] = dateInfo.nowYear;
    $[130] = disableFuture;
    $[131] = disablePast;
    $[132] = t46;
  } else {
    t46 = $[132];
  }
  var handleInputDatePickerShouldDisableYear = t46;
  var t47;
  if ($[133] !== value_2) {
    t47 = !!value_2 && !!value_2[0] ? valueToDate(value_2[0]) : null;
    $[133] = value_2;
    $[134] = t47;
  } else {
    t47 = $[134];
  }
  var t48;
  if ($[135] !== value_2) {
    t48 = !!value_2 && !!value_2[1] ? valueToDate(value_2[1]) : null;
    $[135] = value_2;
    $[136] = t48;
  } else {
    t48 = $[136];
  }
  var t49;
  if ($[137] !== t47 || $[138] !== t48) {
    t49 = [t47, t48];
    $[137] = t47;
    $[138] = t48;
    $[139] = t49;
  } else {
    t49 = $[139];
  }
  var valueDate = t49;
  var t50;
  if ($[140] !== fullWidth || $[141] !== initStyle || $[142] !== inputWidth) {
    t50 = inputWidth != null ? _objectSpread2({
      width: inputWidth
    }, initStyle) : _objectSpread2({
      width: fullWidth ? undefined : 150
    }, initStyle);
    $[140] = fullWidth;
    $[141] = initStyle;
    $[142] = inputWidth;
    $[143] = t50;
  } else {
    t50 = $[143];
  }
  var t51;
  if ($[144] !== align || $[145] !== color || $[146] !== dateInfo.max || $[147] !== dateInfo.min || $[148] !== disabled || $[149] !== enableKeyboardInput || $[150] !== endAdornment || $[151] !== focused || $[152] !== format || $[153] !== fullWidth || $[154] !== icon || $[155] !== labelShrink || $[156] !== readOnly || $[157] !== required || $[158] !== size || $[159] !== startAdornment || $[160] !== sx || $[161] !== t50 || $[162] !== variant) {
    t51 = {
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
      style: t50,
      sx: sx,
      required: required,
      readOnly: readOnly,
      enableKeyboardInput: enableKeyboardInput,
      icon: icon,
      startAdornment: startAdornment,
      endAdornment: endAdornment
    };
    $[144] = align;
    $[145] = color;
    $[146] = dateInfo.max;
    $[147] = dateInfo.min;
    $[148] = disabled;
    $[149] = enableKeyboardInput;
    $[150] = endAdornment;
    $[151] = focused;
    $[152] = format;
    $[153] = fullWidth;
    $[154] = icon;
    $[155] = labelShrink;
    $[156] = readOnly;
    $[157] = required;
    $[158] = size;
    $[159] = startAdornment;
    $[160] = sx;
    $[161] = t50;
    $[162] = variant;
    $[163] = t51;
  } else {
    t51 = $[163];
  }
  var privateInputDatePickerProps = t51;
  var t52;
  if ($[164] === Symbol["for"]("react.memo_cache_sentinel")) {
    t52 = function t52() {
      return setOpen(false);
    };
    $[164] = t52;
  } else {
    t52 = $[164];
  }
  var t53;
  if ($[165] !== className) {
    t53 = classNames(className, "PFormYearRangePicker");
    $[165] = className;
    $[166] = t53;
  } else {
    t53 = $[166];
  }
  var t54 = hidden ? "none" : fullWidth ? "block" : "inline-block";
  var t55 = fullWidth ? 1 : undefined;
  var t56;
  if ($[167] !== t54 || $[168] !== t55) {
    t56 = {
      display: t54,
      flex: t55
    };
    $[167] = t54;
    $[168] = t55;
    $[169] = t56;
  } else {
    t56 = $[169];
  }
  var t57 = error && errorHelperText ? 8 : -14;
  var t58;
  if ($[170] !== t57) {
    t58 = {
      popper: {
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, t57]
          }
        }]
      }
    };
    $[170] = t57;
    $[171] = t58;
  } else {
    t58 = $[171];
  }
  var t59;
  if ($[172] === Symbol["for"]("react.memo_cache_sentinel")) {
    t59 = {
      display: "flex"
    };
    $[172] = t59;
  } else {
    t59 = $[172];
  }
  var t60;
  if ($[173] !== disableFuture || $[174] !== disablePast || $[175] !== handleContainerChange || $[176] !== maxYear || $[177] !== minYear || $[178] !== selectType || $[179] !== value_2) {
    t60 = /*#__PURE__*/React.createElement("div", {
      style: t59
    }, /*#__PURE__*/React.createElement(PrivateYearRangePicker, {
      selectType: selectType,
      minYear: minYear,
      maxYear: maxYear,
      disablePast: disablePast,
      disableFuture: disableFuture,
      value: value_2,
      onChange: handleContainerChange
    }));
    $[173] = disableFuture;
    $[174] = disablePast;
    $[175] = handleContainerChange;
    $[176] = maxYear;
    $[177] = minYear;
    $[178] = selectType;
    $[179] = value_2;
    $[180] = t60;
  } else {
    t60 = $[180];
  }
  var t61 = error || fromError;
  var t62 = focused || open && selectType === "start";
  var t63;
  if ($[181] !== handleInputDatePickerChange) {
    t63 = function t63(v) {
      return handleInputDatePickerChange("start", v);
    };
    $[181] = handleInputDatePickerChange;
    $[182] = t63;
  } else {
    t63 = $[182];
  }
  var t64;
  if ($[183] !== handleInputDatePickerFocus) {
    t64 = function t64() {
      return handleInputDatePickerFocus("start");
    };
    $[183] = handleInputDatePickerFocus;
    $[184] = t64;
  } else {
    t64 = $[184];
  }
  var t65;
  if ($[185] === Symbol["for"]("react.memo_cache_sentinel")) {
    t65 = function t65(reason) {
      return startInputDatePickerErrorRef.current = reason;
    };
    $[185] = t65;
  } else {
    t65 = $[185];
  }
  var t66;
  if ($[186] !== fromLabel || $[187] !== fromLabelIcon || $[188] !== handleInputDatePickerShouldDisableYear || $[189] !== privateInputDatePickerProps || $[190] !== t61 || $[191] !== t62 || $[192] !== t63 || $[193] !== t64 || $[194] !== valueDate[0]) {
    t66 = /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, privateInputDatePickerProps, {
      inputRef: startInputRef,
      value: valueDate[0],
      label: fromLabel,
      labelIcon: fromLabelIcon,
      error: t61,
      focused: t62,
      onChange: t63,
      onFocus: t64,
      onError: t65,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[186] = fromLabel;
    $[187] = fromLabelIcon;
    $[188] = handleInputDatePickerShouldDisableYear;
    $[189] = privateInputDatePickerProps;
    $[190] = t61;
    $[191] = t62;
    $[192] = t63;
    $[193] = t64;
    $[194] = valueDate[0];
    $[195] = t66;
  } else {
    t66 = $[195];
  }
  var t67;
  if ($[196] === Symbol["for"]("react.memo_cache_sentinel")) {
    t67 = /*#__PURE__*/React.createElement(material.Grid, {
      sx: {
        px: 1
      }
    }, "~");
    $[196] = t67;
  } else {
    t67 = $[196];
  }
  var t68 = error || toError;
  var t69 = focused || open && selectType === "end";
  var t70;
  if ($[197] !== handleInputDatePickerChange) {
    t70 = function t70(v_0) {
      return handleInputDatePickerChange("end", v_0);
    };
    $[197] = handleInputDatePickerChange;
    $[198] = t70;
  } else {
    t70 = $[198];
  }
  var t71;
  if ($[199] !== handleInputDatePickerFocus) {
    t71 = function t71() {
      return handleInputDatePickerFocus("end");
    };
    $[199] = handleInputDatePickerFocus;
    $[200] = t71;
  } else {
    t71 = $[200];
  }
  var t72;
  if ($[201] === Symbol["for"]("react.memo_cache_sentinel")) {
    t72 = function t72(reason_0) {
      return endInputDatePickerErrorRef.current = reason_0;
    };
    $[201] = t72;
  } else {
    t72 = $[201];
  }
  var t73;
  if ($[202] !== handleInputDatePickerShouldDisableYear || $[203] !== privateInputDatePickerProps || $[204] !== t68 || $[205] !== t69 || $[206] !== t70 || $[207] !== t71 || $[208] !== toLabel || $[209] !== toLabelIcon || $[210] !== valueDate[1]) {
    t73 = /*#__PURE__*/React.createElement(material.Grid, {
      flex: 1
    }, /*#__PURE__*/React.createElement(PrivateInputDatePicker, _extends({}, privateInputDatePickerProps, {
      inputRef: endInputRef,
      value: valueDate[1],
      label: toLabel,
      labelIcon: toLabelIcon,
      error: t68,
      focused: t69,
      onChange: t70,
      onFocus: t71,
      onError: t72,
      shouldDisableYear: handleInputDatePickerShouldDisableYear
    })));
    $[202] = handleInputDatePickerShouldDisableYear;
    $[203] = privateInputDatePickerProps;
    $[204] = t68;
    $[205] = t69;
    $[206] = t70;
    $[207] = t71;
    $[208] = toLabel;
    $[209] = toLabelIcon;
    $[210] = valueDate[1];
    $[211] = t73;
  } else {
    t73 = $[211];
  }
  var t74;
  if ($[212] !== t66 || $[213] !== t73) {
    t74 = /*#__PURE__*/React.createElement(material.Grid, {
      container: true,
      alignItems: "center"
    }, t66, t67, t73);
    $[212] = t66;
    $[213] = t73;
    $[214] = t74;
  } else {
    t74 = $[214];
  }
  var t75;
  if ($[215] !== open || $[216] !== t58 || $[217] !== t60 || $[218] !== t74) {
    t75 = /*#__PURE__*/React.createElement(PrivateStyledTooltip, {
      open: open,
      slotProps: t58,
      title: t60
    }, t74);
    $[215] = open;
    $[216] = t58;
    $[217] = t60;
    $[218] = t74;
    $[219] = t75;
  } else {
    t75 = $[219];
  }
  var t76;
  if ($[220] !== error || $[221] !== errorHelperText || $[222] !== formColWithHelperText || $[223] !== fromError || $[224] !== fromErrorHelperText || $[225] !== helperText || $[226] !== toError || $[227] !== toErrorHelperText || $[228] !== variant) {
    t76 = !formColWithHelperText && (helperText || error && errorHelperText || fromError && fromErrorHelperText || toError && toErrorHelperText) && /*#__PURE__*/React.createElement(material.FormHelperText, {
      error: error || fromError || toError,
      style: {
        marginLeft: variant === "standard" ? 0 : 14
      }
    }, error ? errorHelperText : fromError ? fromErrorHelperText : toError ? toErrorHelperText : helperText);
    $[220] = error;
    $[221] = errorHelperText;
    $[222] = formColWithHelperText;
    $[223] = fromError;
    $[224] = fromErrorHelperText;
    $[225] = helperText;
    $[226] = toError;
    $[227] = toErrorHelperText;
    $[228] = variant;
    $[229] = t76;
  } else {
    t76 = $[229];
  }
  var t77;
  if ($[230] !== t53 || $[231] !== t56 || $[232] !== t75 || $[233] !== t76) {
    t77 = /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
      dateAdapter: AdapterDayjs.AdapterDayjs
    }, /*#__PURE__*/React.createElement(material.ClickAwayListener, {
      mouseEvent: "onMouseDown",
      touchEvent: "onTouchStart",
      onClickAway: t52
    }, /*#__PURE__*/React.createElement("div", {
      className: t53,
      style: t56
    }, t75, t76)));
    $[230] = t53;
    $[231] = t56;
    $[232] = t75;
    $[233] = t76;
    $[234] = t77;
  } else {
    t77 = $[234];
  }
  return t77;
};
function _temp$4() {
  return "PFormYearRangePicker";
}var PFormSwitch = function PFormSwitch(t0) {
  var $ = compilerRuntime.c(105);
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
  var id = React.useId();
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
  var initValueRef = reactHook.useAutoUpdateRef(initValue);
  var inputRef = React.useRef(undefined);
  var onChangeRef = reactHook.useAutoUpdateRef(onChange);
  var onValidateRef = reactHook.useAutoUpdateRef(onValidate);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    errorHelperText = _useState2[0],
    setErrorHelperText = _useState2[1];
  var finalInitFocused = initFocused !== null && initFocused !== void 0 ? initFocused : formFocused;
  var _useState3 = React.useState(finalInitFocused),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  reactHook.useChanged(finalInitFocused) && setFocused(finalInitFocused);
  var _useState5 = React.useState(initError),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    _setError = _useState6[1];
  reactHook.useChanged(initError) && _setError(initError);
  var errorRef = reactHook.useAutoUpdateRef(error);
  var t1;
  if ($[0] !== errorRef) {
    t1 = function t1(value) {
      _setError(function (prev) {
        var newValue = typeof value === "function" ? value(prev) : value;
        errorRef.current = newValue;
        return newValue;
      });
    };
    $[0] = errorRef;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var setError = t1;
  var _useState7 = React.useState(initData),
    _useState8 = _slicedToArray(_useState7, 2),
    data = _useState8[0],
    _setData = _useState8[1];
  reactHook.useChanged(initData) && _setData(initData);
  var dataRef = reactHook.useAutoUpdateRef(data);
  var t2;
  if ($[2] !== dataRef) {
    t2 = function t2(value_0) {
      _setData(function (prev_0) {
        var newValue_0 = typeof value_0 === "function" ? value_0(prev_0) : value_0;
        dataRef.current = newValue_0;
        return newValue_0;
      });
    };
    $[2] = dataRef;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var setData = t2;
  var finalInitDisabled = initDisabled !== null && initDisabled !== void 0 ? initDisabled : formDisabled;
  var _useState9 = React.useState(finalInitDisabled),
    _useState0 = _slicedToArray(_useState9, 2),
    disabled = _useState0[0],
    setDisabled = _useState0[1];
  reactHook.useChanged(finalInitDisabled) && setDisabled(finalInitDisabled);
  var _useState1 = React.useState(initHidden),
    _useState10 = _slicedToArray(_useState1, 2),
    hidden = _useState10[0],
    setHidden = _useState10[1];
  reactHook.useChanged(initHidden) && setHidden(initHidden);
  var t3;
  if ($[4] !== setError) {
    t3 = function t3(error_0, errorHelperText_0) {
      setError(error_0);
      setErrorHelperText(error_0 ? errorHelperText_0 : undefined);
    };
    $[4] = setError;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  var setErrorErrorHelperText = t3;
  var t4;
  if ($[6] !== onValidateRef || $[7] !== setErrorErrorHelperText) {
    t4 = function t4(value_1) {
      if (onValidateRef.current) {
        var onValidateResult = onValidateRef.current(value_1);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }
      setErrorErrorHelperText(false, undefined);
      return true;
    };
    $[6] = onValidateRef;
    $[7] = setErrorErrorHelperText;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  var validate = t4;
  var t5;
  if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
    t5 = function t5() {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      setTimeout(function () {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
      });
    };
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  var focus = t5;
  var t6;
  if ($[10] !== onValue) {
    t6 = function t6(value_2) {
      var finalValue = value_2 || false;
      return onValue ? onValue(finalValue) : finalValue;
    };
    $[10] = onValue;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  var getFinalValue = t6;
  var getFinalValueRef = reactHook.useAutoUpdateRef(getFinalValue);
  var t7;
  if ($[12] !== getFinalValue || $[13] !== initValue) {
    t7 = getFinalValue(initValue);
    $[12] = getFinalValue;
    $[13] = initValue;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  var _useState11 = React.useState(t7),
    _useState12 = _slicedToArray(_useState11, 2),
    value_3 = _useState12[0],
    _setValue = _useState12[1];
  reactHook.useChanged(initValue) && _setValue(getFinalValue(initValue));
  var valueRef = reactHook.useAutoUpdateRef(value_3);
  var t8;
  if ($[15] !== valueRef) {
    t8 = function t8(value_4) {
      _setValue(function (prev_1) {
        var newValue_1 = typeof value_4 === "function" ? value_4(prev_1) : value_4;
        valueRef.current = newValue_1;
        return newValue_1;
      });
    };
    $[15] = valueRef;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  var setValue = t8;
  var t9;
  if ($[17] !== error || $[18] !== getFinalValueRef || $[19] !== name || $[20] !== onChangeRef || $[21] !== onValueChange || $[22] !== setValue || $[23] !== validate) {
    t9 = function t9(newValue_2) {
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
    $[17] = error;
    $[18] = getFinalValueRef;
    $[19] = name;
    $[20] = onChangeRef;
    $[21] = onValueChange;
    $[22] = setValue;
    $[23] = validate;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  var updateValue = t9;
  var t10;
  if ($[25] !== name) {
    t10 = function t10() {
      return name;
    };
    $[25] = name;
    $[26] = t10;
  } else {
    t10 = $[26];
  }
  var t11;
  if ($[27] !== getFinalValueRef || $[28] !== initValueRef) {
    t11 = function t11() {
      return getFinalValueRef.current(initValueRef.current);
    };
    $[27] = getFinalValueRef;
    $[28] = initValueRef;
    $[29] = t11;
  } else {
    t11 = $[29];
  }
  var t12;
  if ($[30] !== initValueRef || $[31] !== updateValue) {
    t12 = function t12() {
      return updateValue(initValueRef.current);
    };
    $[30] = initValueRef;
    $[31] = updateValue;
    $[32] = t12;
  } else {
    t12 = $[32];
  }
  var t13;
  if ($[33] !== valueRef) {
    t13 = function t13() {
      return valueRef.current;
    };
    $[33] = valueRef;
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  var t14;
  if ($[35] !== dataRef) {
    t14 = function t14() {
      return dataRef.current;
    };
    $[35] = dataRef;
    $[36] = t14;
  } else {
    t14 = $[36];
  }
  var t15;
  if ($[37] !== exceptValue) {
    t15 = function t15() {
      return !!exceptValue;
    };
    $[37] = exceptValue;
    $[38] = t15;
  } else {
    t15 = $[38];
  }
  var t16;
  if ($[39] !== disabled) {
    t16 = function t16() {
      return !!disabled;
    };
    $[39] = disabled;
    $[40] = t16;
  } else {
    t16 = $[40];
  }
  var t17;
  if ($[41] !== hidden) {
    t17 = function t17() {
      return !!hidden;
    };
    $[41] = hidden;
    $[42] = t17;
  } else {
    t17 = $[42];
  }
  var t18;
  if ($[43] !== validate || $[44] !== valueRef) {
    t18 = function t18() {
      return validate(valueRef.current);
    };
    $[43] = validate;
    $[44] = valueRef;
    $[45] = t18;
  } else {
    t18 = $[45];
  }
  var t19;
  if ($[46] !== setData || $[47] !== setErrorErrorHelperText || $[48] !== t10 || $[49] !== t11 || $[50] !== t12 || $[51] !== t13 || $[52] !== t14 || $[53] !== t15 || $[54] !== t16 || $[55] !== t17 || $[56] !== t18 || $[57] !== updateValue) {
    t19 = {
      getType: _temp$3,
      getName: t10,
      getReset: t11,
      reset: t12,
      getValue: t13,
      setValue: updateValue,
      getData: t14,
      setData: setData,
      isExceptValue: t15,
      isDisabled: t16,
      setDisabled: setDisabled,
      isHidden: t17,
      setHidden: setHidden,
      focus: focus,
      focusValidate: focus,
      validate: t18,
      setError: setErrorErrorHelperText
    };
    $[46] = setData;
    $[47] = setErrorErrorHelperText;
    $[48] = t10;
    $[49] = t11;
    $[50] = t12;
    $[51] = t13;
    $[52] = t14;
    $[53] = t15;
    $[54] = t16;
    $[55] = t17;
    $[56] = t18;
    $[57] = updateValue;
    $[58] = t19;
  } else {
    t19 = $[58];
  }
  var commands = t19;
  var t20;
  if ($[59] !== id || $[60] !== onAddValueItem) {
    t20 = function t20(commands_0) {
      return onAddValueItem(id, commands_0);
    };
    $[59] = id;
    $[60] = onAddValueItem;
    $[61] = t20;
  } else {
    t20 = $[61];
  }
  var t21;
  if ($[62] !== id || $[63] !== onRemoveValueItem) {
    t21 = function t21() {
      return onRemoveValueItem(id);
    };
    $[62] = id;
    $[63] = onRemoveValueItem;
    $[64] = t21;
  } else {
    t21 = $[64];
  }
  reactHook.useForwardRef(ref, commands, t20, t21);
  var t22;
  if ($[65] !== name || $[66] !== onRequestSearchSubmit || $[67] !== onValueChangeByUser || $[68] !== readOnly || $[69] !== updateValue) {
    t22 = function t22(e, checked) {
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
    $[65] = name;
    $[66] = onRequestSearchSubmit;
    $[67] = onValueChangeByUser;
    $[68] = readOnly;
    $[69] = updateValue;
    $[70] = t22;
  } else {
    t22 = $[70];
  }
  var handleChange = t22;
  var t23;
  var t24;
  if ($[71] !== initFocused) {
    t23 = function t23() {
      return setFocused(initFocused || true);
    };
    t24 = function t24() {
      return setFocused(initFocused || false);
    };
    $[71] = initFocused;
    $[72] = t23;
    $[73] = t24;
  } else {
    t23 = $[72];
    t24 = $[73];
  }
  var t25;
  if ($[74] !== color || $[75] !== disabled || $[76] !== handleChange || $[77] !== name || $[78] !== size || $[79] !== t23 || $[80] !== t24 || $[81] !== value_3) {
    t25 = /*#__PURE__*/React.createElement(material.Switch, {
      size: size,
      name: name,
      checked: value_3,
      color: color,
      disabled: disabled,
      onChange: handleChange,
      onFocus: t23,
      onBlur: t24
    });
    $[74] = color;
    $[75] = disabled;
    $[76] = handleChange;
    $[77] = name;
    $[78] = size;
    $[79] = t23;
    $[80] = t24;
    $[81] = value_3;
    $[82] = t25;
  } else {
    t25 = $[82];
  }
  var switchControl = t25;
  var t26;
  if ($[83] !== className) {
    t26 = classNames(className, "PFormValueItem", "PFormSwitch");
    $[83] = className;
    $[84] = t26;
  } else {
    t26 = $[84];
  }
  var t27 = error ? errorHelperText : helperText;
  var t28;
  if ($[85] === Symbol["for"]("react.memo_cache_sentinel")) {
    t28 = {
      style: {
        marginLeft: 5
      }
    };
    $[85] = t28;
  } else {
    t28 = $[85];
  }
  var t29 = size === "small" ? 24 : 38;
  var t30;
  if ($[86] !== disabled || $[87] !== switchControl || $[88] !== switchLabel) {
    t30 = switchLabel ? /*#__PURE__*/React.createElement(material.FormControlLabel, {
      control: switchControl,
      label: switchLabel,
      disabled: disabled
    }) : switchControl;
    $[86] = disabled;
    $[87] = switchControl;
    $[88] = switchLabel;
    $[89] = t30;
  } else {
    t30 = $[89];
  }
  var t31;
  if ($[90] !== color || $[91] !== error || $[92] !== focused || $[93] !== hidden || $[94] !== label || $[95] !== labelIcon || $[96] !== size || $[97] !== style || $[98] !== sx || $[99] !== t26 || $[100] !== t27 || $[101] !== t29 || $[102] !== t30 || $[103] !== variant) {
    t31 = /*#__PURE__*/React.createElement(PFormItemBase, {
      variant: variant,
      size: size,
      color: color,
      focused: focused,
      className: t26,
      labelIcon: labelIcon,
      label: label,
      error: error,
      fullWidth: false,
      helperText: t27,
      helperTextProps: t28,
      style: style,
      sx: sx,
      hidden: hidden,
      autoSize: true,
      controlHeight: t29,
      controlVerticalCenter: true,
      control: t30
    });
    $[90] = color;
    $[91] = error;
    $[92] = focused;
    $[93] = hidden;
    $[94] = label;
    $[95] = labelIcon;
    $[96] = size;
    $[97] = style;
    $[98] = sx;
    $[99] = t26;
    $[100] = t27;
    $[101] = t29;
    $[102] = t30;
    $[103] = variant;
    $[104] = t31;
  } else {
    t31 = $[104];
  }
  return t31;
};
function _temp$3() {
  return "PFormSwitch";
}var _excluded$4 = ["children", "className"];
var PSearchGroupRow = function PSearchGroupRow(t0) {
  var $ = compilerRuntime.c(12);
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
    t2 = /*#__PURE__*/React.createElement(PFormCol, null, /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(57);
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
  var formRef = React.useRef(undefined);
  var t2;
  if ($[12] !== autoSubmit) {
    t2 = function t2() {
      if (autoSubmit) {
        var _formRef$current;
        (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.submit();
      }
    };
    $[12] = autoSubmit;
    $[13] = t2;
  } else {
    t2 = $[13];
  }
  var effectEvent = React.useEffectEvent(t2);
  var t3;
  if ($[14] !== effectEvent) {
    t3 = function t3() {
      return effectEvent();
    };
    $[14] = effectEvent;
    $[15] = t3;
  } else {
    t3 = $[15];
  }
  var t4;
  if ($[16] !== autoSubmit) {
    t4 = [autoSubmit];
    $[16] = autoSubmit;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  React.useEffect(t3, t4);
  var t5;
  var basicRowItems;
  var rowItems;
  if ($[18] !== children) {
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
    $[18] = children;
    $[19] = basicRowItems;
    $[20] = rowItems;
  } else {
    basicRowItems = $[19];
    rowItems = $[20];
  }
  if (basicRowItems.length > 0) {
    var _t2;
    if ($[21] !== basicRowItems) {
      _t2 = /*#__PURE__*/React.createElement(PSearchGroupRow, {
        key: "$basicRow$"
      }, basicRowItems);
      $[21] = basicRowItems;
      $[22] = _t2;
    } else {
      _t2 = $[22];
    }
    var _t3;
    if ($[23] !== rowItems || $[24] !== _t2) {
      _t3 = [_t2].concat(_toConsumableArray(rowItems));
      $[23] = rowItems;
      $[24] = _t2;
      $[25] = _t3;
    } else {
      _t3 = $[25];
    }
    t5 = _t3;
  } else {
    t5 = rowItems;
  }
  var renderChildren = t5;
  var emptyHandler = _temp$2;
  var t6;
  if ($[26] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = function t6() {
      setTimeout(function () {
        var _formRef$current2;
        return (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 ? void 0 : _formRef$current2.submit();
      });
    };
    $[26] = t6;
  } else {
    t6 = $[26];
  }
  var handleRequestSubmit = t6;
  var t7;
  if ($[27] !== autoSubmit) {
    t7 = function t7() {
      if (autoSubmit) {
        setTimeout(function () {
          var _formRef$current3;
          return (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 ? void 0 : _formRef$current3.submit();
        });
      }
    };
    $[27] = autoSubmit;
    $[28] = t7;
  } else {
    t7 = $[28];
  }
  var handleRequestSearchSubmit = t7;
  var t8;
  if ($[29] !== color || $[30] !== focused || $[31] !== handleRequestSearchSubmit || $[32] !== labelShrink || $[33] !== spacing) {
    t8 = {
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
    $[29] = color;
    $[30] = focused;
    $[31] = handleRequestSearchSubmit;
    $[32] = labelShrink;
    $[33] = spacing;
    $[34] = t8;
  } else {
    t8 = $[34];
  }
  var formContextValue = t8;
  var t9;
  if ($[35] !== ref) {
    t9 = function t9(commands) {
      if (ref) {
        if (typeof ref === "function") {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }
      formRef.current = commands || undefined;
    };
    $[35] = ref;
    $[36] = t9;
  } else {
    t9 = $[36];
  }
  var handleRef = t9;
  var t10;
  if ($[37] !== sx) {
    t10 = _objectSpread2({
      p: 1.5
    }, sx);
    $[37] = sx;
    $[38] = t10;
  } else {
    t10 = $[38];
  }
  var t11;
  if ($[39] !== renderChildren) {
    t11 = /*#__PURE__*/React.createElement(PFormBody, null, renderChildren);
    $[39] = renderChildren;
    $[40] = t11;
  } else {
    t11 = $[40];
  }
  var t12;
  if ($[41] !== color || $[42] !== focused || $[43] !== handleRef || $[44] !== labelShrink || $[45] !== otherProps || $[46] !== spacing || $[47] !== t11) {
    t12 = /*#__PURE__*/React.createElement(PForm, _extends({
      ref: handleRef,
      className: "PSearch",
      variant: "outlined",
      size: "small",
      color: color,
      spacing: spacing,
      focused: focused,
      labelShrink: labelShrink,
      fullWidth: false
    }, otherProps), t11);
    $[41] = color;
    $[42] = focused;
    $[43] = handleRef;
    $[44] = labelShrink;
    $[45] = otherProps;
    $[46] = spacing;
    $[47] = t11;
    $[48] = t12;
  } else {
    t12 = $[48];
  }
  var t13;
  if ($[49] !== className || $[50] !== style || $[51] !== t10 || $[52] !== t12) {
    t13 = /*#__PURE__*/React.createElement(material.Paper, {
      variant: "outlined",
      className: className,
      sx: t10,
      style: style
    }, t12);
    $[49] = className;
    $[50] = style;
    $[51] = t10;
    $[52] = t12;
    $[53] = t13;
  } else {
    t13 = $[53];
  }
  var t14;
  if ($[54] !== formContextValue || $[55] !== t13) {
    t14 = /*#__PURE__*/React.createElement(PFormContextProvider, {
      value: formContextValue
    }, t13);
    $[54] = formContextValue;
    $[55] = t13;
    $[56] = t14;
  } else {
    t14 = $[56];
  }
  return t14;
};
function _temp$2() {}var _templateObject;
var StyledItem = material.styled(material.Grid)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:has(> [style*='display: none;']) {\n    display: none;\n  }\n"])));/********************************************************************************************************************
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
            return /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(17);
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
    t8 = /*#__PURE__*/React.createElement(material.Grid, {
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
    t9 = /*#__PURE__*/React.createElement(material.Grid, {
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
  var $ = compilerRuntime.c(17);
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
    t5 = /*#__PURE__*/React.createElement(reactComponent.PButton, _extends({
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
  var $ = compilerRuntime.c(43);
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
  var buttonId = React.useId();
  var menuId = React.useId();
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var _useState3 = React.useState("ArrowDropDown"),
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
    t13 = /*#__PURE__*/React.createElement(material.Menu, {
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
  var $ = compilerRuntime.c(31);
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
  var location = reactRouter.useLocation();
  var searchRef = React.useRef(null);
  var initPathRef = React.useRef(window.location.pathname);
  var onSubmitRef = reactHook.useAutoUpdateRef(onSubmit);
  var onRequestHashChangeRef = reactHook.useAutoUpdateRef(onRequestHashChange);
  var _useState = React.useState(true),
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
                  if (compare.notEmpty(value_0)) {
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
                  if (compare.notEmpty(value_0)) {
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
                    if (compare.notEmpty(value_0)) {
                      var startValue = dayjs(value_0, format);
                      dateRangePickerCommands_0.setFromValue(startValue.isValid() ? startValue : null);
                    } else {
                      dateRangePickerCommands_0.setFromValue(null);
                    }
                  } else {
                    if (name === toName_0) {
                      if (compare.notEmpty(value_0)) {
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
                    dateRangePickerCommands.setFromValue(compare.notEmpty(value_0) ? Number(value_0) : null);
                  } else {
                    if (name === toName) {
                      dateRangePickerCommands.setToValue(compare.notEmpty(value_0) ? Number(value_0) : null);
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
                    monthCommands.setYear(compare.notEmpty(value_0) ? Number(value_0) : null);
                  } else {
                    if (name === monthName) {
                      monthCommands.setMonth(compare.notEmpty(value_0) ? Number(value_0) : null);
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
                    monthRangeCommands.setFromYear(compare.notEmpty(value_0) ? Number(value_0) : null);
                  } else {
                    if (name === fromMonthName) {
                      monthRangeCommands.setFromMonth(compare.notEmpty(value_0) ? Number(value_0) : null);
                    } else {
                      if (name === toYearName) {
                        monthRangeCommands.setToYear(compare.notEmpty(value_0) ? Number(value_0) : null);
                      } else {
                        if (name === toMonthName) {
                          monthRangeCommands.setToMonth(compare.notEmpty(value_0) ? Number(value_0) : null);
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
  var effectEvent = React.useEffectEvent(t2);
  var t3;
  if ($[11] !== effectEvent) {
    t3 = function t3() {
      return effectEvent();
    };
    $[11] = effectEvent;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  var t4;
  if ($[13] !== location.hash) {
    t4 = [location.hash];
    $[13] = location.hash;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  React.useEffect(t3, t4);
  var t5;
  if ($[15] !== onRequestHashChangeRef || $[16] !== onSubmitRef) {
    t5 = function t5(params) {
      if (onRequestHashChangeRef.current) {
        var hashes = [];
        Object.keys(params).forEach(function (name_0) {
          var value_1 = params[name_0];
          if (searchRef.current) {
            var itemCommands_0 = searchRef.current.getItem(name_0);
            if (itemCommands_0) {
              var resetValue = null;
              bb148: switch (itemCommands_0.getType()) {
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
                    break bb148;
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
                    break bb148;
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
                    break bb148;
                  }
                default:
                  {
                    resetValue = searchRef.current.getFormReset(name_0);
                  }
              }
              if (resetValue != null && !compare.equal(resetValue, value_1) && _typeof(value_1) !== "object") {
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
    $[15] = onRequestHashChangeRef;
    $[16] = onSubmitRef;
    $[17] = t5;
  } else {
    t5 = $[17];
  }
  var hashChange = t5;
  var t6;
  if ($[18] !== hashChange || $[19] !== isFirstSearchSubmit) {
    t6 = function t6(data_0) {
      if (isFirstSearchSubmit) {
        setIsFirstSearchSubmit(false);
      } else {
        hashChange(data_0);
      }
    };
    $[18] = hashChange;
    $[19] = isFirstSearchSubmit;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  var handleSubmit = t6;
  var t7;
  if ($[21] !== ref) {
    t7 = function t7(r) {
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
    $[22] = t7;
  } else {
    t7 = $[22];
  }
  var t8;
  if ($[23] !== className) {
    t8 = classNames("PHashSearch", className);
    $[23] = className;
    $[24] = t8;
  } else {
    t8 = $[24];
  }
  var t9 = !noAutoSubmit;
  var t10;
  if ($[25] !== handleSubmit || $[26] !== props || $[27] !== t7 || $[28] !== t8 || $[29] !== t9) {
    t10 = /*#__PURE__*/React.createElement(PSearch, _extends({
      ref: t7,
      className: t8
    }, props, {
      autoSubmit: t9,
      onSubmit: handleSubmit
    }));
    $[25] = handleSubmit;
    $[26] = props;
    $[27] = t7;
    $[28] = t8;
    $[29] = t9;
    $[30] = t10;
  } else {
    t10 = $[30];
  }
  return t10;
};
function _temp() {
  var values = {};
  var hash = window.location.hash.substring(1);
  hash.replace(/([^=&]+)=([^&]*)/g, function (substring, key, value) {
    values[decodeURIComponent(key)] = decodeURIComponent(value);
    return substring;
  });
  return values;
}exports.PForm=PForm;exports.PFormAutocomplete=PFormAutocomplete;exports.PFormBlock=PFormBlock;exports.PFormBody=PFormBody;exports.PFormBusinessNo=PFormBusinessNo;exports.PFormButton=PFormButton;exports.PFormCheckbox=PFormCheckbox;exports.PFormCol=PFormCol;exports.PFormContext=PFormContext;exports.PFormContextDefaultValue=PFormContextDefaultValue;exports.PFormContextProvider=PFormContextProvider;exports.PFormDatePicker=PFormDatePicker;exports.PFormDateRangePicker=PFormDateRangePicker;exports.PFormDateTimePicker=PFormDateTimePicker;exports.PFormDivider=PFormDivider;exports.PFormEmail=PFormEmail;exports.PFormFile=PFormFile;exports.PFormFooter=PFormFooter;exports.PFormHidden=PFormHidden;exports.PFormImageFile=PFormImageFile;exports.PFormLabel=PFormLabel;exports.PFormMobile=PFormMobile;exports.PFormMonthPicker=PFormMonthPicker;exports.PFormMonthRangePicker=PFormMonthRangePicker;exports.PFormNumber=PFormNumber;exports.PFormPassword=PFormPassword;exports.PFormPersonalNo=PFormPersonalNo;exports.PFormRadioGroup=PFormRadioGroup;exports.PFormRating=PFormRating;exports.PFormRow=PFormRow;exports.PFormSearch=PFormSearch;exports.PFormSelect=PFormSelect;exports.PFormSwitch=PFormSwitch;exports.PFormTag=PFormTag;exports.PFormTel=PFormTel;exports.PFormText=PFormText;exports.PFormTextEditor=_PFormTextEditor;exports.PFormTextField=PFormTextField;exports.PFormTextarea=PFormTextarea;exports.PFormTimePicker=PFormTimePicker;exports.PFormToggleButtonGroup=PFormToggleButtonGroup;exports.PFormUrl=PFormUrl;exports.PFormYearPicker=PFormYearPicker;exports.PFormYearRangePicker=PFormYearRangePicker;exports.PHashSearch=PHashSearch;exports.PSearch=PSearch;exports.PSearchButton=PSearchButton;exports.PSearchGroup=PSearchGroup;exports.PSearchGroupRow=PSearchGroupRow;exports.PSearchMenuButton=PSearchMenuButton;exports.useFormState=useFormState;