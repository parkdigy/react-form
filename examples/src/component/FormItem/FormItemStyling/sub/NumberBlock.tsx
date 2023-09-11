import React from 'react';
import { FormBlock, FormCol, FormNumber, FormNumberProps, FormRow } from '../../../../../../src';

const NumberBlock: React.FC<{
  componentProps?: FormNumberProps;
}> = ({ componentProps }) => {
  return (
    <FormBlock label='Number' line>
      <FormRow>
        <FormCol>
          <FormNumber
            {...componentProps}
            name='FormNumber_thousandSeparator'
            thousandSeparator
            value={1234567890}
            helperText='thousandSeparator=true'
          />
        </FormCol>
        <FormCol>
          <FormNumber
            {...componentProps}
            name='FormNumber_allowNegative'
            allowNegative
            value={-123}
            helperText='allowNegative=true'
          />
        </FormCol>
        <FormCol>
          <FormNumber
            {...componentProps}
            name='FormNumber_allowDecimal'
            allowDecimal
            value={123.456}
            helperText='allowDecimal=true'
          />
        </FormCol>
      </FormRow>
    </FormBlock>
  );
};

export default NumberBlock;
