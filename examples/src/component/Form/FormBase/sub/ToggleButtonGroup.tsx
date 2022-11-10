import React from 'react';
import { FormCol, FormRow, FormToggleButtonGroup, FormToggleButtonGroupItem } from '@pdg/react-form';

const DEFAULT_ITEMS: FormToggleButtonGroupItem[] = [lv('Btn1', 1), lv('Btn2', 2), lv('Btn3', 3)];

const ToggleButtonGroup = () => {
  return (
    <FormRow>
      <FormCol>
        <FormToggleButtonGroup
          name={getName('FormToggleButtonGroup', true)}
          label='FormToggleButtonGroup'
          labelIcon='Workspaces'
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false}>
        <FormToggleButtonGroup
          name={getName('FormToggleButtonGroup')}
          label='FormToggleButtonGroup'
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
        <FormToggleButtonGroup
          name={getName('FormToggleButtonGroup')}
          label='FormToggleButtonGroup'
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false} label='FormToggleButtonGroup' helperText='AAAAAA'>
        <FormToggleButtonGroup name={getName('FormToggleButtonGroup')} items={DEFAULT_ITEMS} />
        <FormToggleButtonGroup name={getName('FormToggleButtonGroup')} items={DEFAULT_ITEMS} />
      </FormCol>
    </FormRow>
  );
};

export default ToggleButtonGroup;
