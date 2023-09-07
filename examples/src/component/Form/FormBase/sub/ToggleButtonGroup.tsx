import React from 'react';
import { FormCol, FormRow, FormToggleButtonGroup, FormToggleButtonGroupItems } from '../../../../../../src';

const DEFAULT_ITEMS: FormToggleButtonGroupItems<number> = [
  lv('Btn1', 1),
  lv('Btn2', 2),
  lv('Btn3', 3),
  // lv('Btn4', 4),
  // lv('Btn5', 5),
  // lv('Btn6', 6),
  // lv('Btn7', 7),
  // lv('Btn8', 8),
];

const ToggleButtonGroup = () => {
  return (
    <FormRow>
      <FormCol>
        <FormToggleButtonGroup<number, 'multiple'>
          name={getName('FormToggleButtonGroup', true)}
          label='FormToggleButtonGroup'
          labelIcon='Workspaces'
          items={DEFAULT_ITEMS}
          type='checkbox'
          multiple
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false}>
        <FormToggleButtonGroup<number>
          name={getName('FormToggleButtonGroup')}
          label='FormToggleButtonGroup'
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
        <FormToggleButtonGroup<number>
          name={getName('FormToggleButtonGroup')}
          label='FormToggleButtonGroup'
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false} label='FormToggleButtonGroup' helperText='AAAAAA'>
        <FormToggleButtonGroup<number> name={getName('FormToggleButtonGroup')} items={DEFAULT_ITEMS} />
        <FormToggleButtonGroup<number> name={getName('FormToggleButtonGroup')} items={DEFAULT_ITEMS} />
      </FormCol>
    </FormRow>
  );
};

export default ToggleButtonGroup;
