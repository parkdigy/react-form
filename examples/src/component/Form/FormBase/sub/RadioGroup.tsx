import React from 'react';
import { FormCol, FormRadioGroup, FormRow } from '@pdg/react-form';

const RadioGroup = () => {
  return (
    <FormRow>
      <FormCol>
        <FormRadioGroup
          name={getName('FormRadioGroup', true)}
          label='FormRadioGroup'
          value={1}
          items={[lv('Item1', 1), lv('Item2', 2)]}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false}>
        <FormRadioGroup
          name={getName('FormRadioGroup')}
          label='FormRadioGroup'
          value={1}
          items={[lv('Item1', 1), lv('Item2', 2)]}
          helperText='AAAAAA'
        />
        <FormRadioGroup
          name={getName('FormRadioGroup')}
          label='FormRadioGroup'
          value={1}
          items={[lv('Item1', 1), lv('Item2', 2)]}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false} label='FormRadioGroup' helperText='AAAAAA'>
        <FormRadioGroup name={getName('FormRadioGroup')} value={1} items={[lv('Item1', 1), lv('Item2', 2)]} />
        <FormRadioGroup name={getName('FormRadioGroup')} value={1} items={[lv('Item1', 1), lv('Item2', 2)]} />
      </FormCol>
    </FormRow>
  );
};

export default RadioGroup;
