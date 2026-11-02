import { PrivateDateTimePickerInternal } from '../../@private/PrivateDateTimePicker/PrivateDateTimePicker';
import React, { useCallback } from 'react';
import classNames from 'classnames';
import { type PFormTimePickerProps as Props, type PFormTimePickerValue } from './PFormTimePicker.types';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';
import { type PFormValueItemCommands } from '../../@types';

export const PFormTimePickerInternal = ({ embedded = false, className, ...props }: Props & { embedded?: boolean }) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState<PFormTimePickerValue, false>();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<PFormTimePickerValue, false>) => {
      commands.getType = () => (embedded ? 'PFormEmbedTimePicker' : 'PFormTimePicker');
      onAddValueItem(id, commands);
    },
    [embedded, onAddValueItem]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormContextProvider<PFormTimePickerValue, false>
      value={{
        ...otherFormState,
        onAddValueItem: handleAddValueItem,
      }}
    >
      <PrivateDateTimePickerInternal
        embedded={embedded}
        className={classNames(className, 'PFormTimePicker')}
        {...props}
        type='time'
      />
    </PFormContextProvider>
  );
};

const PFormTimePicker = (props: Props) => <PFormTimePickerInternal {...props} />;

export default PFormTimePicker;
