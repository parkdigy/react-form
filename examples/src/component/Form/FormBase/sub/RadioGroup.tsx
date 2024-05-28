import { lv } from '@pdg/util';
import React from 'react';
import { FormCol, FormRadioGroup, FormRadioGroupItem, FormRow } from '../../../../../../src';

const DEFAULT_ITEMS: FormRadioGroupItem<number>[] = new Array(3)
  .fill(0)
  .map((v, idx) => lv(`Item ${idx + 1}`, idx + 1));

const RadioGroup = () => {
  return (
    <FormRow>
      <FormCol>
        <FormRadioGroup
          name={getName('FormRadioGroup', true)}
          label='FormRadioGroup'
          value={1}
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false}>
        <FormRadioGroup
          name={getName('FormRadioGroup')}
          label='FormRadioGroup'
          value={1}
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
        <FormRadioGroup
          name={getName('FormRadioGroup')}
          label='FormRadioGroup'
          value={1}
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false} label='FormRadioGroup' helperText='AAAAAA'>
        <FormRadioGroup name={getName('FormRadioGroup')} value={1} items={DEFAULT_ITEMS} />
        <FormRadioGroup name={getName('FormRadioGroup')} value={1} items={DEFAULT_ITEMS} />
      </FormCol>
    </FormRow>
  );
};

export default RadioGroup;
