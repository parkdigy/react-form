import {
  type PFormDateValueItemCommands,
  type PFormRangeValueItemNameCommands,
  type PFormValue,
  type PFormValueItemCommands,
  type PFormValueMap,
  type PFormYearMonthRangeValueItemNameCommands,
  type PFormYearMonthValue,
  type PFormYearMonthValueItemNameCommands,
} from '../@types';
import { type PFormCheckboxCommands } from '../PFormItemCustom';
import dayjs from 'dayjs';
import { empty } from '@pdg/compare';

/********************************************************************************************************************
 * getItemFormValue
 * ******************************************************************************************************************/
export const getItemFormValue = (commands: PFormValueItemCommands<any>, reset?: boolean): PFormValue | PFormValue[] => {
  const type = commands.getType();

  let value;
  switch (type) {
    case 'PFormCheckbox':
      {
        const itemCommands = commands as PFormCheckboxCommands;
        const checked = reset ? itemCommands.getReset() : itemCommands.getChecked();
        value = checked ? itemCommands.getValue() : itemCommands.getUncheckedValue();
      }
      break;
    case 'PFormDatePicker':
    case 'PFormDateTimePicker':
    case 'PFormTimePicker':
      {
        value = reset ? commands.getReset() : commands.getValue();
        if (value) {
          value = dayjs(value).format((commands as PFormDateValueItemCommands).getFormValueFormat());
        }
      }
      break;
    default:
      value = reset ? commands.getReset() : commands.getValue();
  }

  switch (type) {
    case 'PFormDateRangePicker':
      {
        const startValue = value[0];
        const endValue = value[1];
        const format = (commands as PFormDateValueItemCommands).getFormValueFormat();
        value = [startValue ? startValue.format(format) : '', endValue ? endValue.format(format) : ''];
      }
      break;
    case 'PFormYearRangePicker':
      {
        const startValue = value[0];
        const endValue = value[1];
        value = [startValue ? startValue : '', endValue ? endValue : ''];
      }
      break;
    case 'PFormMonthPicker':
      value = { year: value ? value.year : '', month: value ? value.month : '' };
      break;
    case 'PFormMonthRangePicker':
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
export const appendFormValueData = (data: PFormValueMap, itemCommands: PFormValueItemCommands<any>) => {
  switch (itemCommands.getType()) {
    case 'PFormDateRangePicker':
      {
        const commands = itemCommands as PFormRangeValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as PFormValue[];
        data[commands.getFormValueFromName()] = value[0];
        data[commands.getFormValueToName()] = value[1];
      }
      break;
    case 'PFormMonthPicker':
      {
        const commands = itemCommands as PFormYearMonthValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as PFormYearMonthValue;
        data[commands.getFormValueYearName()] = value.year;
        data[commands.getFormValueMonthName()] = value.month;
      }
      break;
    case 'PFormYearRangePicker':
      {
        const commands = itemCommands as PFormRangeValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as PFormValue[];
        data[commands.getFormValueFromName()] = value[0];
        data[commands.getFormValueToName()] = value[1];
      }
      break;
    case 'PFormMonthRangePicker':
      {
        const commands = itemCommands as PFormYearMonthRangeValueItemNameCommands;
        const value = getItemFormValue(itemCommands) as PFormYearMonthValue[];
        data[commands.getFormValueFromYearName()] = value[0].year;
        data[commands.getFormValueFromMonthName()] = value[0].month;
        data[commands.getFormValueToYearName()] = value[1].year;
        data[commands.getFormValueToMonthName()] = value[1].month;
      }
      break;
    default:
      {
        const name = itemCommands.getName();
        const value = getItemFormValue(itemCommands) as PFormValue;

        data[name] = value == null ? '' : value;
      }
      break;
  }
};
