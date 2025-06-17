import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HashSearchProps as Props } from './HashSearch.types';
import { Search, SearchCommands } from '../Search';
import {
  FormCheckValueItemCommands,
  FormDateValueItemCommands,
  FormRangeValueItemNameCommands,
  FormValue,
  FormValueMap,
} from '../../@types';
import {
  FormDateRangePickerCommands,
  FormMonthPickerCommands,
  FormMonthRangePickerCommands,
  FormYearRangePickerCommands,
} from '../../FormItemCustom';
import { Dict } from '@pdg/types';
import { equal, notEmpty } from '@pdg/compare';
import dayjs from 'dayjs';

export const HashSearch = React.forwardRef<SearchCommands, Props>(
  ({ onSubmit, onRequestHashChange, ...props }, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const searchRef = useRef<SearchCommands>(null);
    const initPathRef = useRef(window.location.pathname);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isFirstSearchSubmit, setIsFirstSearchSubmit] = useState(true);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const deHash = useCallback(() => {
      const values: Dict<string> = {};
      const hash = window.location.hash.substring(1);
      hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
        values[decodeURIComponent(key)] = decodeURIComponent(value);
        return substring;
      });
      return values;
    }, []);

    const hashToSearchValue = useCallback((): FormValueMap | undefined => {
      const commands = searchRef.current;
      if (commands) {
        commands.resetAll();

        const hashValues = deHash();
        Object.keys(hashValues).forEach((name) => {
          const value: FormValue = hashValues[name];
          const itemCommands = commands.getItem(name);
          if (itemCommands) {
            switch (itemCommands.getType()) {
              case 'FormCheckbox':
                if (notEmpty(value)) {
                  const checkCommands = itemCommands as FormCheckValueItemCommands<any>;
                  if (value.toString() === itemCommands.getValue()?.toString()) {
                    checkCommands.setChecked(true);
                  } else if (value.toString() === checkCommands.getUncheckedValue()?.toString()) {
                    checkCommands.setChecked(false);
                  }
                }
                break;
              case 'FormDatePicker':
              case 'FormDateTimePicker':
              case 'FormTimePicker':
                {
                  if (notEmpty(value)) {
                    const dateCommands = itemCommands as FormDateValueItemCommands;
                    const format = dateCommands.getFormValueFormat();
                    const itemValue = dayjs(value, format);
                    itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                  } else {
                    itemCommands.setValue(null);
                  }
                }
                break;
              case 'FormDateRangePicker':
                {
                  const dateRangePickerCommands = itemCommands as FormDateRangePickerCommands;
                  const fromName = dateRangePickerCommands.getFormValueFromName();
                  const toName = dateRangePickerCommands.getFormValueToName();
                  const format = dateRangePickerCommands.getFormValueFormat();

                  if (name === fromName) {
                    if (notEmpty(value)) {
                      const startValue = dayjs(value, format);
                      dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                    } else {
                      dateRangePickerCommands.setFromValue(null);
                    }
                  } else if (name === toName) {
                    if (notEmpty(value)) {
                      const endValue = dayjs(value, format);
                      dateRangePickerCommands.setToValue(endValue.isValid() ? endValue : null);
                    } else {
                      dateRangePickerCommands.setToValue(null);
                    }
                  }
                }
                break;
              case 'FormYearRangePicker':
                {
                  const dateRangePickerCommands = itemCommands as FormYearRangePickerCommands;
                  const fromName = dateRangePickerCommands.getFormValueFromName();
                  const toName = dateRangePickerCommands.getFormValueToName();

                  if (name === fromName) {
                    dateRangePickerCommands.setFromValue(notEmpty(value) ? Number(value) : null);
                  } else if (name === toName) {
                    dateRangePickerCommands.setToValue(notEmpty(value) ? Number(value) : null);
                  }
                }
                break;
              case 'FormMonthPicker':
                {
                  const monthCommands = itemCommands as FormMonthPickerCommands;
                  const yearName = monthCommands.getFormValueYearName();
                  const monthName = monthCommands.getFormValueMonthName();

                  if (name === yearName) {
                    monthCommands.setYear(notEmpty(value) ? Number(value) : null);
                  } else if (name === monthName) {
                    monthCommands.setMonth(notEmpty(value) ? Number(value) : null);
                  }
                }
                break;
              case 'FormMonthRangePicker':
                {
                  const monthRangeCommands = itemCommands as FormMonthRangePickerCommands;
                  const fromYearName = monthRangeCommands.getFormValueFromYearName();
                  const fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                  const toYearName = monthRangeCommands.getFormValueToYearName();
                  const toMonthName = monthRangeCommands.getFormValueToMonthName();

                  if (name === fromYearName) {
                    monthRangeCommands.setFromYear(notEmpty(value) ? Number(value) : null);
                  } else if (name === fromMonthName) {
                    monthRangeCommands.setFromMonth(notEmpty(value) ? Number(value) : null);
                  } else if (name === toYearName) {
                    monthRangeCommands.setToYear(notEmpty(value) ? Number(value) : null);
                  } else if (name === toMonthName) {
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

    useEffect(() => {
      if (window.location.pathname === initPathRef.current) {
        const data = hashToSearchValue();
        if (data) onSubmit?.(data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);

    const hashChange = useCallback(
      (params: FormValueMap) => {
        if (onRequestHashChange) {
          const hashes: string[] = [];
          Object.keys(params).forEach((name) => {
            const value = params[name];
            if (searchRef.current) {
              const itemCommands = searchRef.current.getItem(name);

              if (itemCommands) {
                let resetValue: FormValue | null = null;

                switch (itemCommands.getType()) {
                  case 'FormDateRangePicker':
                  case 'FormYearRangePicker':
                    {
                      const commands = itemCommands as FormRangeValueItemNameCommands;
                      const itemName = itemCommands.getName();
                      const fromName = commands.getFormValueFromName();
                      const fromSuffix = commands.getFormValueFromNameSuffix();
                      const toName = commands.getFormValueToName();
                      const toSuffix = commands.getFormValueToNameSuffix();

                      if (name === fromName) {
                        resetValue = searchRef.current.getFormReset(itemName, fromSuffix);
                      } else if (name === toName) {
                        resetValue = searchRef.current.getFormReset(itemName, toSuffix);
                      }
                    }
                    break;
                  case 'FormMonthPicker':
                    {
                      const commands = itemCommands as FormMonthPickerCommands;
                      const itemName = commands.getName();
                      const yearName = commands.getFormValueYearName();
                      const yearSuffix = commands.getFormValueYearNameSuffix();
                      const monthName = commands.getFormValueMonthName();
                      const monthSuffix = commands.getFormValueMonthNameSuffix();

                      if (name === yearName) {
                        resetValue = searchRef.current.getFormReset(itemName, yearSuffix);
                      } else if (name === monthName) {
                        resetValue = searchRef.current.getFormReset(itemName, monthSuffix);
                      }
                    }
                    break;
                  case 'FormMonthRangePicker':
                    {
                      const commands = itemCommands as FormMonthRangePickerCommands;
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
                      } else if (name === fromMonthName) {
                        resetValue = searchRef.current.getFormReset(itemName, fromMonthSuffix);
                      } else if (name === toYearName) {
                        resetValue = searchRef.current.getFormReset(itemName, toYearSuffix);
                      } else if (name === toMonthName) {
                        resetValue = searchRef.current.getFormReset(itemName, toMonthSuffix);
                      }
                    }
                    break;
                  default:
                    resetValue = searchRef.current.getFormReset(name);
                    break;
                }

                if (resetValue != null && !equal(resetValue, value) && typeof value !== 'object') {
                  hashes.push(`${name}=${encodeURIComponent(value)}`);
                }
              }
            }
          });
          const finalHash = hashes.join('&');
          if (window.location.hash.substring(1) === finalHash) {
            onSubmit?.(params);
          } else {
            onRequestHashChange(hashes.join('&'));
          }
        }
      },
      [onRequestHashChange, onSubmit]
    );

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleSubmit = useCallback(
      (data: FormValueMap) => {
        if (isFirstSearchSubmit) {
          setIsFirstSearchSubmit(false);
        } else {
          hashChange(data);
        }
      },
      [hashChange, isFirstSearchSubmit]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <Search
        ref={(r) => {
          searchRef.current = r;
          if (ref) {
            if (typeof ref === 'function') {
              ref(r);
            } else {
              ref.current = r;
            }
          }
        }}
        {...props}
        autoSubmit
        onSubmit={handleSubmit}
      />
    );
  }
);

export default HashSearch;
