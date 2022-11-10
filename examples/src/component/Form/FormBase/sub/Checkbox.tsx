import React from 'react';
import { FormCheckbox, FormCol, FormRow } from '@pdg/react-form';

const Checkbox = () => {
  return (
    <FormRow>
      <FormCol>
        <FormCheckbox
          name={getName('FormCheckbox', true)}
          text='FormCheckbox'
          label='FormCheckbox'
          helperText='AAAAAA'
        />
      </FormCol>
      <FormCol fullWidth={false}>
        <FormCheckbox name={getName('FormCheckbox')} text='FormCheckbox' label='FormCheckbox' helperText='AAAAAA' />
        <FormCheckbox name={getName('FormCheckbox')} text='FormCheckbox' label='FormCheckbox' helperText='AAAAAA' />
      </FormCol>
      <FormCol fullWidth={false} label='FormCheckbox' helperText='AAAAAA'>
        <FormCheckbox name={getName('FormCheckbox')} text='FormCheckbox' />
        <FormCheckbox name={getName('FormCheckbox')} text='FormCheckbox' />
      </FormCol>
    </FormRow>
  );
};

export default Checkbox;
