import React from 'react';
import { Form, FormCheckbox, FormRow, FormCol, FormButton, FormValueMap } from '@pdg/react-form';

const FormItemCheckbox = () => {
  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <FormCol>
          <FormCheckbox name='default' labelIcon='Check' label='FormCheckbox' text='체크박스' helperText='labelIcon' />
        </FormCol>
        <FormCol>
          <FormCheckbox name='readOnly' label='FormCheckbox' text='체크박스' readOnly helperText='readOnly=true' />
        </FormCol>
        <FormCol>
          <FormCheckbox name='disabled' label='FormCheckbox' text='체크박스' disabled helperText='disabled=true' />
        </FormCol>
      </FormRow>
      <FormRow line>
        <FormCol>
          <FormButton>취소</FormButton>
        </FormCol>
        <FormCol>
          <FormButton type='submit'>확인</FormButton>
        </FormCol>
      </FormRow>
    </Form>
  );
};

export default FormItemCheckbox;
