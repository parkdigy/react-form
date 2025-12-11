import React, { useCallback } from 'react';
import {
  PForm,
  PFormButton,
  PFormRow,
  PFormCol,
  PFormTextarea,
  PFormValueMap,
  PFormBody,
  PFormFooter,
} from '../../../../src';

const VALUE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const FormItemTextarea = () => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback((data: PFormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PForm fullHeight onSubmit={handleSubmit}>
      <PFormBody>
        <PFormRow>
          <PFormCol>
            <PFormTextarea name='required' label='PFormTextarea' required helperText='required=true' />
          </PFormCol>
          <PFormCol>
            <PFormTextarea name='readOnly' label='PFormTextarea' value={VALUE} readOnly helperText='readOnly=true' />
          </PFormCol>
          <PFormCol>
            <PFormTextarea name='disabled' label='PFormTextarea' value={VALUE} disabled helperText='disabled=true' />
          </PFormCol>
        </PFormRow>
      </PFormBody>
      <PFormFooter>
        <PFormRow>
          <PFormCol>
            <PFormButton>취소</PFormButton>
          </PFormCol>
          <PFormCol>
            <PFormButton type='submit'>확인</PFormButton>
          </PFormCol>
        </PFormRow>
      </PFormFooter>
    </PForm>
  );
};

export default FormItemTextarea;
