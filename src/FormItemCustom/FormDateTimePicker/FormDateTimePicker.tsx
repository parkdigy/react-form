import React, { useCallback } from 'react';
import classNames from 'classnames';
import {
  FormDateTimePickerProps as Props,
  FormDateTimePickerDefaultProps,
  FormDateTimePickerCommands,
} from './FormDateTimePicker.types';
import { PrivateDatePicker, PrivateDatePickerCommands } from '../../@private';
import FormContextProvider from '../../FormContextProvider';
import { useFormState } from '../../FormContext';

const FormDateTimePicker = React.forwardRef<FormDateTimePickerCommands, Props>(({ className, ...props }, ref) => {
  // FormState -------------------------------------------------------------------------------------------------------

  const { onAddValueItem, ...otherFormState } = useFormState();

  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDatePickerCommands) => {
      commands.getType = () => 'FormDateTimePicker';
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
      <PrivateDatePicker
        className={classNames(className, 'FormDateTimePicker')}
        {...props}
        ref={ref}
        type='date_time'
      />
    </FormContextProvider>
  );
});

FormDateTimePicker.displayName = 'FormDateTimePicker';
FormDateTimePicker.defaultProps = FormDateTimePickerDefaultProps;

export default FormDateTimePicker;
