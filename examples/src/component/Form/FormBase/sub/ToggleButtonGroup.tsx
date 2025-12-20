import React from 'react';
import { PFormCol, PFormRow, PFormToggleButtonGroup, PFormToggleButtonGroupItems } from '../../../../../../src';
import { lv } from '@pdg/data';
import { getName } from '@common';

const DEFAULT_ITEMS: PFormToggleButtonGroupItems<number> = [
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
    <PFormRow>
      <PFormCol>
        <PFormToggleButtonGroup
          name={getName('PFormToggleButtonGroup', true)}
          label='PFormToggleButtonGroup'
          labelIcon='Workspaces'
          items={DEFAULT_ITEMS}
          type='checkbox'
          multiple
          helperText='AAAAAA'
        />
      </PFormCol>
      <PFormCol fullWidth={false}>
        <PFormToggleButtonGroup
          name={getName('PFormToggleButtonGroup')}
          label='PFormToggleButtonGroup'
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
        <PFormToggleButtonGroup
          name={getName('PFormToggleButtonGroup')}
          label='PFormToggleButtonGroup'
          items={DEFAULT_ITEMS}
          helperText='AAAAAA'
        />
      </PFormCol>
      <PFormCol fullWidth={false} label='PFormToggleButtonGroup' helperText='AAAAAA'>
        <PFormToggleButtonGroup name={getName('PFormToggleButtonGroup')} items={DEFAULT_ITEMS} />
        <PFormToggleButtonGroup name={getName('PFormToggleButtonGroup')} items={DEFAULT_ITEMS} />
      </PFormCol>
    </PFormRow>
  );
};

export default ToggleButtonGroup;
