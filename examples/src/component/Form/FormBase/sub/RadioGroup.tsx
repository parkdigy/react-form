import { lv } from '@pdg/data';
import React from 'react';
import { PFormCol, PFormRadioGroup, PFormRadioGroupItem, PFormRow } from '../../../../../../src';

const DEFAULT_ITEMS: PFormRadioGroupItem<number>[] = new Array(3)
  .fill(0)
  .map((v, idx) => lv(`Item ${idx + 1}`, idx + 1));

const RadioGroup = () => {
  return (
    <PFormRow>
      <PFormCol>
        <PFormRadioGroup
          name={getName('PFormRadioGroup', true)}
          label='PFormRadioGroup'
          value={1}
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </PFormCol>
      <PFormCol fullWidth={false}>
        <PFormRadioGroup
          name={getName('PFormRadioGroup')}
          label='PFormRadioGroup'
          value={1}
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
        <PFormRadioGroup
          name={getName('PFormRadioGroup')}
          label='PFormRadioGroup'
          value={1}
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </PFormCol>
      <PFormCol fullWidth={false} label='PFormRadioGroup' helperText='AAAAAA'>
        <PFormRadioGroup name={getName('PFormRadioGroup')} value={1} items={DEFAULT_ITEMS} />
        <PFormRadioGroup name={getName('PFormRadioGroup')} value={1} items={DEFAULT_ITEMS} />
      </PFormCol>
    </PFormRow>
  );
};

export default RadioGroup;
