import React, { useCallback } from 'react';
import classNames from 'classnames';
import { FormTimePickerProps as Props, FormTimePickerCommands } from './FormTimePicker.types';
import { PrivateDateTimePicker, PrivateDateTimePickerCommands } from '../../@private';
import FormContextProvider from '../../FormContextProvider';
import { useFormState } from '../../FormContext';

const FormTimePicker = React.forwardRef<FormTimePickerCommands, Props>(({ className, ...props }, ref) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDateTimePickerCommands) => {
      commands.getType = () => 'FormTimePicker';
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
      <PrivateDateTimePicker className={classNames(className, 'FormTimePicker')} {...props} ref={ref} type='time' />
    </FormContextProvider>
  );
});

FormTimePicker.displayName = 'FormTimePicker';

export default FormTimePicker;
