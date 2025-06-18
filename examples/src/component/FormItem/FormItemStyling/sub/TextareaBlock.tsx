import React from 'react';
import { PFormBlock, PFormCol, PFormTextarea, PFormRow, PFormTextareaProps } from '../../../../../../src';

const TextareaBlock: React.FC<{
  componentProps?: PFormTextareaProps;
}> = ({ componentProps }) => {
  return (
    <PFormBlock label='Textarea' line>
      <PFormRow>
        <PFormCol>
          <PFormTextarea {...componentProps} name='FormTextarea_rows_3' rows={3} helperText='rows=3 (Default)' />
        </PFormCol>
        <PFormCol>
          <PFormTextarea {...componentProps} name='FormTextarea_rows_5' rows={5} helperText='rows=5' />
        </PFormCol>
        <PFormCol>
          <PFormTextarea {...componentProps} name='FormTextarea_rows_7' rows={7} helperText='rows=7' />
        </PFormCol>
      </PFormRow>
    </PFormBlock>
  );
};

export default TextareaBlock;
