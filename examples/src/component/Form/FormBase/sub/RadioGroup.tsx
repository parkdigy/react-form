import React from 'react';
import { FormCol, FormRadioGroup, FormRow } from '../../../../../../src';

const RadioGroup = () => {
  return (
    <FormRow>
      <FormCol>
        <FormRadioGroup<number>
          name={getName('FormRadioGroup', true)}
          label='FormRadioGroup'
          value={1}
          items={[lv('Item1', 1), lv('Item2', 2)]}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false}>
        <FormRadioGroup<number>
          name={getName('FormRadioGroup')}
          label='FormRadioGroup'
          value={1}
          items={[lv('Item1', 1), lv('Item2', 2)]}
          helperText='AAAAAA'
        />
        <FormRadioGroup<number>
          name={getName('FormRadioGroup')}
          label='FormRadioGroup'
          value={1}
          items={[lv('Item1', 1), lv('Item2', 2)]}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false} label='FormRadioGroup' helperText='AAAAAA'>
        <FormRadioGroup<number> name={getName('FormRadioGroup')} value={1} items={[lv('Item1', 1), lv('Item2', 2)]} />
        <FormRadioGroup<number> name={getName('FormRadioGroup')} value={1} items={[lv('Item1', 1), lv('Item2', 2)]} />
      </FormCol>
    </FormRow>
  );
};

export default RadioGroup;
