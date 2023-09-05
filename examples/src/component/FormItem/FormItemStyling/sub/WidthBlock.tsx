import React from 'react';
import { FormBlock, FormCol, FormRow } from '../../../../../../src';

const WidthBlock: React.FC<{
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
}> = ({ component: Component, componentProps }) => {
  return (
    <FormBlock label='Width' line>
      <FormRow>
        <FormCol>
          <Component {...componentProps} name={getName('WidthBlock')} fullWidth helperText='fullWidth=true (Default)' />
        </FormCol>
        <FormCol fullWidth={false} helperText='FormCol - fullWidth=false'>
          <Component {...componentProps} name={getName('WidthBlock')} />
          <Component {...componentProps} name={getName('WidthBlock')} />
        </FormCol>
        <FormCol>
          <Component {...componentProps} name={getName('WidthBlock')} width={250} helperText='width=250' />
        </FormCol>
      </FormRow>
    </FormBlock>
  );
};

export default WidthBlock;
