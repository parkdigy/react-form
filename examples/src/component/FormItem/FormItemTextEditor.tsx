import React, { useState } from 'react';
import { Form, FormRow, FormCol, FormTextEditor, FormButton, FormCheckbox } from '@pdg/react-form';
import { OutlinedPaper } from '#ccomp';

const FormItemTextEditor = () => {
  const [readOnly, setReadOnly] = useState(false);
  const [disabled, setDisabled] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <OutlinedPaper>
        <Form size='small' style={{ marginTop: 10 }}>
          <FormRow>
            <FormCol fullWidth={false}>
              <FormCheckbox
                name='readOnly'
                text='readOnly'
                checked={readOnly}
                onChange={(checked) => setReadOnly(checked)}
              />
              <FormCheckbox
                name='disabled'
                text='disabled'
                checked={disabled}
                onChange={(checked) => setDisabled(checked)}
              />
            </FormCol>
          </FormRow>
        </Form>
      </OutlinedPaper>
      <br />
      <Form onSubmit={(data) => ll(data)}>
        <FormRow>
          <FormCol>
            <FormTextEditor name='FormTextEditor' label='FormTextEditor' readOnly={readOnly} disabled={disabled} />
          </FormCol>
        </FormRow>
        <FormRow line>
          <FormCol>
            <FormButton type='submit'>확인</FormButton>
          </FormCol>
        </FormRow>
      </Form>
    </div>
  );
};

export default FormItemTextEditor;
