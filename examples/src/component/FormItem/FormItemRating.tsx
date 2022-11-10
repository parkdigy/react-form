import React, { useEffect, useState } from 'react';
import { Form, FormRating, FormRow, FormCol, FormButton, FormValueMap } from '@pdg/react-form';

const FormItemRating = () => {
  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue(2);
    }, 1000);
  }, []);
  //--------------------------------------------------------------------------------------------------------------------

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <FormCol>
          <FormRating name='default' labelIcon='Check' label='FormRating' value={value} helperText='labelIcon' />
        </FormCol>
        <FormCol>
          <FormRating name='required' label='FormRating' required helperText='required=true' />
        </FormCol>
        <FormCol>
          <FormRating name='readOnly' label='FormRating' readOnly helperText='readOnly=true' />
        </FormCol>
        <FormCol>
          <FormRating name='disabled' label='FormRating' disabled helperText='disabled=true' />
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

export default FormItemRating;
