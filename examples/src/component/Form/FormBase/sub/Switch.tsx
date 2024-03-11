import React from 'react';
import { FormSwitch, FormCol, FormRow, FormText } from '../../../../../../src';

const Switch = () => {
  return (
    <FormRow>
      <FormCol>
        <FormSwitch name={getName('FormSwitch', true)} label='FormSwitch' />
      </FormCol>
      <FormCol>
        <FormSwitch name={getName('FormSwitch')} label='FormSwitch' />
        <FormSwitch name={getName('FormSwitch')} label='FormSwitch' />
      </FormCol>
      <FormCol label='FormSwitch'>
        <FormSwitch name={getName('FormSwitch')} />
        <FormSwitch name={getName('FormSwitch')} />
      </FormCol>
    </FormRow>
  );
};

export default Switch;
