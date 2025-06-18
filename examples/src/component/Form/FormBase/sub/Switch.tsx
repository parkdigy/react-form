import React from 'react';
import { PFormSwitch, PFormCol, PFormRow } from '../../../../../../src';

const Switch = () => {
  return (
    <PFormRow>
      <PFormCol>
        <PFormSwitch name={getName('PFormSwitch', true)} label='PFormSwitch' />
      </PFormCol>
      <PFormCol>
        <PFormSwitch name={getName('PFormSwitch')} label='PFormSwitch' />
        <PFormSwitch name={getName('PFormSwitch')} label='PFormSwitch' />
      </PFormCol>
      <PFormCol label='PFormSwitch'>
        <PFormSwitch name={getName('PFormSwitch')} />
        <PFormSwitch name={getName('PFormSwitch')} />
      </PFormCol>
    </PFormRow>
  );
};

export default Switch;
