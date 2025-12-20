import React from 'react';
import { PFormCheckbox, PFormCol, PFormRow } from '../../../../../../src';
import { getName } from '@common';

const Checkbox = () => {
  return (
    <PFormRow>
      <PFormCol>
        <PFormCheckbox
          name={getName('PFormCheckbox', true)}
          text='PFormCheckbox'
          label='PFormCheckbox'
          helperText='AAAAAA'
        />
      </PFormCol>
      <PFormCol fullWidth={false}>
        <PFormCheckbox name={getName('PFormCheckbox')} text='PFormCheckbox' label='PFormCheckbox' helperText='AAAAAA' />
        <PFormCheckbox name={getName('PFormCheckbox')} text='PFormCheckbox' label='PFormCheckbox' helperText='AAAAAA' />
      </PFormCol>
      <PFormCol fullWidth={false} label='PFormCheckbox' helperText='AAAAAA'>
        <PFormCheckbox name={getName('PFormCheckbox')} text='PFormCheckbox' />
        <PFormCheckbox name={getName('PFormCheckbox')} text='PFormCheckbox' />
      </PFormCol>
    </PFormRow>
  );
};

export default Checkbox;
