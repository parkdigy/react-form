import React, { useCallback } from 'react';
import classNames from 'classnames';
import { FormDatePickerProps as Props, FormDatePickerCommands } from './FormDatePicker.types';
import { PrivateDatePicker, PrivateDatePickerCommands } from '../../@private';
import FormContextProvider from '../../FormContextProvider';
import { useFormState } from '../../FormContext';

const FormDatePicker = React.forwardRef<FormDatePickerCommands, Props>(({ className, ...props }, ref) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDatePickerCommands) => {
      commands.getType = () => 'FormDatePicker';
      onAddValueItem(id, commands);
    },
    [onAddValueItem]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormContextProvider
      value={{
        ...otherFormState,
        onAddValueItem: handleAddValueItem,
      }}
    >
      <PrivateDatePicker className={classNames(className, 'FormDatePicker')} {...props} ref={ref} type='date' />
    </FormContextProvider>
  );
});

FormDatePicker.displayName = 'FormDatePicker';

export default FormDatePicker;
