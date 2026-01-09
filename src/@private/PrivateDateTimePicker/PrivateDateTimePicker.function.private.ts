import { type PrivateDateTimePickerProps as Props, type PrivateDateTimePickerValue } from './PrivateDateTimePicker.types';

export const getFinalValue = (value: Props['value']): PrivateDateTimePickerValue => {
  return value || null;
};
