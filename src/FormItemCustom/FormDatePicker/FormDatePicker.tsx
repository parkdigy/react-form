import React, { useCallback } from 'react';
import classNames from 'classnames';
import { FormDatePickerProps as Props, FormDatePickerCommands } from './FormDatePicker.types';
import { PrivateDatePicker, PrivateDatePickerCommands } from '../../@common.private';
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
        onAddValueItem: handleAddValueItem,
        ...otherFormState,
      }}
    >
      <PrivateDatePicker className={classNames(className, 'FormDatePicker')} {...props} ref={ref} type='date' />
    </FormContextProvider>
  );
});

export default FormDatePicker;
