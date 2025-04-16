import React, { useCallback, useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import {
  FormCheckValueItemCommands,
  FormDateRangePickerCommands,
  FormDateValueItemCommands,
  FormMonthPickerCommands,
  FormMonthRangePickerCommands,
  FormValue,
  FormValueMap,
  FormYearRangePickerCommands,
  Search,
  SearchCommands,
} from '../../../../../src';
import dayjs from 'dayjs';
import { notEmpty } from '@pdg/util';
import { deHash } from './SearchTable.function.private';
import { SearchTableProps as Props } from './SearchTable.types';
import { useLocation } from 'react-router-dom';

const SearchTable = ({ children }: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchRef = useRef<SearchCommands>(undefined);
  const location = useLocation();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const hashToSearchValue = useCallback((): FormValueMap | undefined => {
    const commands = searchRef.current;
    if (commands) {
      commands.resetAll();

      const hashValues = deHash();
      Object.keys(hashValues).forEach((name) => {
        const value: FormValue = hashValues[name];
        if (name === 'page') {
          commands.setValue(name, Number(value) || 1);
        } else {
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
                ll(name, value);
                commands.setValue(name, value);
                break;
            }
          }
        }
      });
      return commands.getAllFormValue();
    }
  }, [searchRef]);

  /********************************************************************************************************************
   * hash
   * ******************************************************************************************************************/

  useEffect(() => {
    hashToSearchValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Grid container direction='column' spacing={1}>
      <Search
        ref={(commands: SearchCommands) => {
          searchRef.current = commands || undefined;
        }}
        autoSubmit
      >
        {children}
      </Search>
    </Grid>
  );
};

export default SearchTable;
