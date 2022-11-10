import React, { useCallback } from 'react';
import {
  FormDatePickerProps as Props,
  FormDatePickerDefaultProps,
  FormDatePickerCommands,
} from './FormDatePicker.types';
import { PrivateDatePicker, PrivateDatePickerCommands } from '../../@private';
import FormContextProvider from '../../FormContextProvider';
import { useFormState } from '../../FormContext';

const FormDatePicker = React.forwardRef<FormDatePickerCommands, Props>((props, ref) => {
  // FormState -------------------------------------------------------------------------------------------------------

  const { onAddValueItem, ...otherFormState } = useFormState();

  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDatePickerCommands) => {
      commands.getType = () => 'FormDatePicker';
      onAddValueItem(id, commands);
    },
    [onAddValueItem]
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <FormContextProvider
      value={{
        onAddValueItem: handleAddValueItem,
        ...otherFormState,
      }}
    >
      <PrivateDatePicker {...props} ref={ref} type='date' />
    </FormContextProvider>
  );
});

FormDatePicker.displayName = 'FormDatePicker';
FormDatePicker.defaultProps = FormDatePickerDefaultProps;

export default FormDatePicker;
