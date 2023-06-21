import React, { useState } from 'react';
import {
  Form,
  FormRow,
  FormCol,
  FormTextEditor,
  FormButton,
  FormCheckbox,
  FormBody,
  FormFooter,
} from '@pdg/react-form';
import { OutlinedPaper } from '#ccomp';

const FormItemTextEditor = () => {
  const [readOnly, setReadOnly] = useState(false);
  const [disabled, setDisabled] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <OutlinedPaper>
        <Form size='small' style={{ marginTop: 10 }}>
          <FormBody>
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
          </FormBody>
        </Form>
      </OutlinedPaper>
      <br />
      <Form onSubmit={(data) => ll(data)}>
        <FormBody>
          <FormRow>
            <FormCol>
              <FormTextEditor name='FormTextEditor' label='FormTextEditor' readOnly={readOnly} disabled={disabled} />
            </FormCol>
          </FormRow>
        </FormBody>
        <FormFooter>
          <FormRow>
            <FormCol>
              <FormButton type='submit'>확인</FormButton>
            </FormCol>
          </FormRow>
        </FormFooter>
      </Form>
    </>
  );
};

export default FormItemTextEditor;
