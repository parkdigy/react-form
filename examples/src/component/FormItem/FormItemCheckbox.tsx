import React, { useCallback } from 'react';
import {
  PForm,
  PFormCheckbox,
  PFormRow,
  PFormCol,
  PFormButton,
  PFormValueMap,
  PFormBody,
  PFormFooter,
} from '../../../../src';

const FormItemCheckbox = () => {
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
            <PFormCheckbox
              hidden
              name='default'
              labelIcon='Check'
              label='PFormCheckbox'
              text='체크박스'
              helperText='labelIcon'
            />
            <PFormCheckbox name='default' label='PFormCheckbox' text='체크박스' />
          </PFormCol>
          <PFormCol>
            <PFormCheckbox name='readOnly' label='PFormCheckbox' text='체크박스' readOnly helperText='readOnly=true' />
          </PFormCol>
          <PFormCol>
            <PFormCheckbox name='disabled' label='PFormCheckbox' text='체크박스' disabled helperText='disabled=true' />
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

export default FormItemCheckbox;
