import React, { useCallback } from 'react';
import {
  FormTimePickerProps as Props,
  FormTimePickerDefaultProps,
  FormTimePickerCommands,
} from './FormTimePicker.types';
import { PrivateDatePicker, PrivateDatePickerCommands } from '../../@private';
import FormContextProvider from '../../FormContextProvider';
import { useFormState } from '../../FormContext';

const FormTimePicker = React.forwardRef<FormTimePickerCommands, Props>((props, ref) => {
  // FormState -------------------------------------------------------------------------------------------------------

  const { onAddValueItem, ...otherFormState } = useFormState();

  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDatePickerCommands) => {
      commands.getType = () => 'FormTimePicker';
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
      <PrivateDatePicker {...props} ref={ref} type='time' />
    </FormContextProvider>
  );
});

FormTimePicker.displayName = 'FormTimePicker';
FormTimePicker.defaultProps = FormTimePickerDefaultProps;

export default FormTimePicker;
