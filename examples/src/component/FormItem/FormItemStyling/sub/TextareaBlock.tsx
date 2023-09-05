import React from 'react';
import { FormBlock, FormCol, FormTextarea, FormRow, FormTextareaProps } from '../../../../../../src';

const TextareaBlock: React.FC<{
  componentProps?: FormTextareaProps;
}> = ({ componentProps }) => {
  return (
    <FormBlock label='Textarea' line>
      <FormRow>
        <FormCol>
          <FormTextarea {...componentProps} name='FormTextarea_rows_3' rows={3} helperText='rows=3 (Default)' />
        </FormCol>
        <FormCol>
          <FormTextarea {...componentProps} name='FormTextarea_rows_5' rows={5} helperText='rows=5' />
        </FormCol>
        <FormCol>
          <FormTextarea {...componentProps} name='FormTextarea_rows_7' rows={7} helperText='rows=7' />
        </FormCol>
      </FormRow>
    </FormBlock>
  );
};

export default TextareaBlock;
