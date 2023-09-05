import React from 'react';
import { Form, FormCheckbox, FormRow, FormCol, FormButton, FormValueMap, FormBody, FormFooter } from '../../../../src';

const FormItemCheckbox = () => {
  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <Form fullHeight onSubmit={handleSubmit}>
      <FormBody>
        <FormRow>
          <FormCol>
            <FormCheckbox
              hidden
              name='default'
              labelIcon='Check'
              label='FormCheckbox'
              text='체크박스'
              helperText='labelIcon'
            />
            <FormCheckbox name='default' label='FormCheckbox' text='체크박스' />
          </FormCol>
          <FormCol>
            <FormCheckbox name='readOnly' label='FormCheckbox' text='체크박스' readOnly helperText='readOnly=true' />
          </FormCol>
          <FormCol>
            <FormCheckbox name='disabled' label='FormCheckbox' text='체크박스' disabled helperText='disabled=true' />
          </FormCol>
        </FormRow>
      </FormBody>
      <FormFooter>
        <FormRow>
          <FormCol>
            <FormButton>취소</FormButton>
          </FormCol>
          <FormCol>
            <FormButton type='submit'>확인</FormButton>
          </FormCol>
        </FormRow>
      </FormFooter>
    </Form>
  );
};

export default FormItemCheckbox;
