import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PHashSearchProps as Props } from './PHashSearch.types';
import { PSearch, PSearchCommands } from '../PSearch';
import {
  PFormCheckValueItemCommands,
  PFormDateValueItemCommands,
  PFormRangeValueItemNameCommands,
  PFormValue,
  PFormValueMap,
} from '../../@types';
import {
  PFormDateRangePickerCommands,
  PFormMonthPickerCommands,
  PFormMonthRangePickerCommands,
  PFormYearRangePickerCommands,
} from '../../PFormItemCustom';
import { Dict } from '@pdg/types';
import { equal, notEmpty } from '@pdg/compare';
import dayjs from 'dayjs';
import classNames from 'classnames';

export const PHashSearch = ({ ref, className, noAutoSubmit, onSubmit, onRequestHashChange, ...props }: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchRef = useRef<PSearchCommands>(null);
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

  const hashToSearchValue = useCallback((): PFormValueMap | undefined => {
    const commands = searchRef.current;
    if (commands) {
      commands.resetAll();

      const hashValues = deHash();
      Object.keys(hashValues).forEach((name) => {
        const value: PFormValue = hashValues[name];
        const itemCommands = commands.getItem(name);
        if (itemCommands) {
          switch (itemCommands.getType()) {
            case 'PFormCheckbox':
              if (notEmpty(value)) {
                const checkCommands = itemCommands as PFormCheckValueItemCommands<any>;
                if (value.toString() === itemCommands.getValue()?.toString()) {
                  checkCommands.setChecked(true);
                } else if (value.toString() === checkCommands.getUncheckedValue()?.toString()) {
                  checkCommands.setChecked(false);
                }
              }
              break;
            case 'PFormDatePicker':
            case 'PFormDateTimePicker':
            case 'PFormTimePicker':
              {
                if (notEmpty(value)) {
                  const dateCommands = itemCommands as PFormDateValueItemCommands;
                  const format = dateCommands.getFormValueFormat();
                  const itemValue = dayjs(value, format);
                  itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                } else {
                  itemCommands.setValue(null);
                }
              }
              break;
            case 'PFormDateRangePicker':
              {
                const dateRangePickerCommands = itemCommands as PFormDateRangePickerCommands;
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
            case 'PFormYearRangePicker':
              {
                const dateRangePickerCommands = itemCommands as PFormYearRangePickerCommands;
                const fromName = dateRangePickerCommands.getFormValueFromName();
                const toName = dateRangePickerCommands.getFormValueToName();

                if (name === fromName) {
                  dateRangePickerCommands.setFromValue(notEmpty(value) ? Number(value) : null);
                } else if (name === toName) {
                  dateRangePickerCommands.setToValue(notEmpty(value) ? Number(value) : null);
                }
              }
              break;
            case 'PFormMonthPicker':
              {
                const monthCommands = itemCommands as PFormMonthPickerCommands;
                const yearName = monthCommands.getFormValueYearName();
                const monthName = monthCommands.getFormValueMonthName();

                if (name === yearName) {
                  monthCommands.setYear(notEmpty(value) ? Number(value) : null);
                } else if (name === monthName) {
                  monthCommands.setMonth(notEmpty(value) ? Number(value) : null);
                }
              }
              break;
            case 'PFormMonthRangePicker':
              {
                const monthRangeCommands = itemCommands as PFormMonthRangePickerCommands;
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
    (params: PFormValueMap) => {
      if (onRequestHashChange) {
        const hashes: string[] = [];
        Object.keys(params).forEach((name) => {
          const value = params[name];
          if (searchRef.current) {
            const itemCommands = searchRef.current.getItem(name);

            if (itemCommands) {
              let resetValue: PFormValue | null = null;

              switch (itemCommands.getType()) {
                case 'PFormDateRangePicker':
                case 'PFormYearRangePicker':
                  {
                    const commands = itemCommands as PFormRangeValueItemNameCommands;
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
                case 'PFormMonthPicker':
                  {
                    const commands = itemCommands as PFormMonthPickerCommands;
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
                case 'PFormMonthRangePicker':
                  {
                    const commands = itemCommands as PFormMonthRangePickerCommands;
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
    (data: PFormValueMap) => {
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
    <PSearch
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
      className={classNames('PHashSearch', className)}
      {...props}
      autoSubmit={!noAutoSubmit}
      onSubmit={handleSubmit}
    />
  );
};

export default PHashSearch;
