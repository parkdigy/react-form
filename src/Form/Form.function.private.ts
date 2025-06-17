import {
  FormDateValueItemCommands,
  FormRangeValueItemNameCommands,
  FormValue,
  FormValueItemCommands,
  FormValueMap,
  FormYearMonthRangeValueItemNameCommands,
  FormYearMonthValue,
  FormYearMonthValueItemNameCommands,
} from '../@types';
import { FormCheckboxCommands } from '../FormItemCustom';
import dayjs from 'dayjs';
import { empty } from '@pdg/compare';

/********************************************************************************************************************
 * getItemFormValue
 * ******************************************************************************************************************/
export const getItemFormValue = (commands: FormValueItemCommands<any>, reset?: boolean): FormValue | FormValue[] => {
  const type = commands.getType();

  let value;
  switch (type) {
    case 'FormCheckbox':
      {
        const itemCommands = commands as FormCheckboxCommands;
        const checked = reset ? itemCommands.getReset() : itemCommands.getChecked();
        value = checked ? itemCommands.getValue() : itemCommands.getUncheckedValue();
      }
      break;
    case 'FormDatePicker':
    case 'FormDateTimePicker':
    case 'FormTimePicker':
      {
        value = reset ? commands.getReset() : commands.getValue();
        if (value) {
          value = dayjs(value).format((commands as FormDateValueItemCommands).getFormValueFormat());
        }
      }
      break;
    default:
      value = reset ? commands.getReset() : commands.getValue();
  }

  switch (type) {
    case 'FormDateRangePicker':
      {
        const startValue = value[0];
        const endValue = value[1];
        const format = (commands as FormDateValueItemCommands).getFormValueFormat();
        value = [startValue ? startValue.format(format) : '', endValue ? endValue.format(format) : ''];
      }
      break;
    case 'FormYearRangePicker':
      {
        const startValue = value[0];
        const endValue = value[1];
        value = [startValue ? startValue : '', endValue ? endValue : ''];
      }
      break;
    case 'FormMonthPicker':
      value = { year: value ? value.year : '', month: value ? value.month : '' };
      break;
    case 'FormMonthRangePicker':
      {
        const startValue = value[0];
        const endValue = value[1];
        value = [startValue ? startValue : { year: '', month: '' }, endValue ? endValue : { year: '', month: '' }];
      }
      break;
    default:
      if (empty(value)) {
        value = '';
      } else if (Array.isArray(value)) {
        if (commands.isFormValueSort && commands.isFormValueSort()) {
          value = [...value];
          (value as Array<string | number>).sort();
        }
        value = (value as Array<string | number>).join(
          commands.getFormValueSeparator ? commands.getFormValueSeparator() : ','
        );
      }
      break;
  }

  return value;
};

/********************************************************************************************************************
 * appendFormValueData
 * ******************************************************************************************************************/
export const appendFormValueData = (data: FormValueMap, itemCommands: FormValueItemCommands<any>) => {
  switch (itemCommands.getType()) {
    case 'FormDateRangePicker':
      {
        const commands = itemCommands as FormRangeValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as FormValue[];
        data[commands.getFormValueFromName()] = value[0];
        data[commands.getFormValueToName()] = value[1];
      }
      break;
    case 'FormMonthPicker':
      {
        const commands = itemCommands as FormYearMonthValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as FormYearMonthValue;
        data[commands.getFormValueYearName()] = value.year;
        data[commands.getFormValueMonthName()] = value.month;
      }
      break;
    case 'FormYearRangePicker':
      {
        const commands = itemCommands as FormRangeValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as FormValue[];
        data[commands.getFormValueFromName()] = value[0];
        data[commands.getFormValueToName()] = value[1];
      }
      break;
    case 'FormMonthRangePicker':
      {
        const commands = itemCommands as FormYearMonthRangeValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as FormYearMonthValue[];
        data[commands.getFormValueFromYearName()] = value[0].year;
        data[commands.getFormValueFromMonthName()] = value[0].month;
        data[commands.getFormValueToYearName()] = value[1].year;
        data[commands.getFormValueToMonthName()] = value[1].month;
      }
      break;
    default:
      {
        const name = itemCommands.getName();
        const value = getItemFormValue(itemCommands) as FormValue;

        data[name] = value == null ? '' : value;
      }
      break;
  }
};
