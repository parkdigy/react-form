import React, { useCallback } from 'react';
import { Form, FormButton, FormRow, FormCol, FormTextarea, FormValueMap, FormBody, FormFooter } from '../../../../src';

const VALUE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const FormItemTextarea = () => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Form fullHeight onSubmit={handleSubmit}>
      <FormBody>
        <FormRow>
          <FormCol>
            <FormTextarea name='required' label='FormTextarea' required helperText='required=true' />
          </FormCol>
          <FormCol>
            <FormTextarea name='readOnly' label='FormTextarea' value={VALUE} readOnly helperText='readOnly=true' />
          </FormCol>
          <FormCol>
            <FormTextarea name='disabled' label='FormTextarea' value={VALUE} disabled helperText='disabled=true' />
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

export default FormItemTextarea;
