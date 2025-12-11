import React from 'react';
import { PFormBlock, PFormCol, PFormNumber, PFormNumberProps, PFormRow } from '../../../../../../src';

const NumberBlock: React.FC<{
  componentProps?: PFormNumberProps;
}> = ({ componentProps }) => {
  return (
    <PFormBlock label='Number' line>
      <PFormRow>
        <PFormCol>
          <PFormNumber
            {...componentProps}
            name='FormNumber_thousandSeparator'
            thousandSeparator
            value={1234567890}
            helperText='thousandSeparator=true'
          />
        </PFormCol>
        <PFormCol>
          <PFormNumber
            {...componentProps}
            name='FormNumber_allowNegative'
            allowNegative
            value={-123}
            helperText='allowNegative=true'
          />
        </PFormCol>
        <PFormCol>
          <PFormNumber
            {...componentProps}
            name='FormNumber_allowDecimal'
            allowDecimal
            value={123.456}
            helperText='allowDecimal=true'
          />
        </PFormCol>
      </PFormRow>
    </PFormBlock>
  );
};

export default NumberBlock;
