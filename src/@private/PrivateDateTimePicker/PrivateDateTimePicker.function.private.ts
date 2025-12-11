import { PrivateDateTimePickerProps as Props, PrivateDateTimePickerValue } from './PrivateDateTimePicker.types';

export const getFinalValue = (value: Props['value']): PrivateDateTimePickerValue => {
  return value || null;
};
