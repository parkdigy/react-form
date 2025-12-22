import React from 'react';
import { PFormBlock, PFormCol, PFormRow } from '../../../../../../src';
import { getName } from '@common';

interface Props {
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
}

const WidthBlock = ({ component: Component, componentProps }: Props) => {
  return (
    <PFormBlock label='Width' line>
      <PFormRow>
        <PFormCol>
          <Component {...componentProps} name={getName('WidthBlock')} fullWidth helperText='fullWidth=true (Default)' />
        </PFormCol>
        <PFormCol fullWidth={false} helperText='FormCol - fullWidth=false'>
          <Component {...componentProps} name={getName('WidthBlock')} />
          <Component {...componentProps} name={getName('WidthBlock')} />
        </PFormCol>
        <PFormCol>
          <Component {...componentProps} name={getName('WidthBlock')} width={250} helperText='width=250' />
        </PFormCol>
      </PFormRow>
    </PFormBlock>
  );
};

export default WidthBlock;
