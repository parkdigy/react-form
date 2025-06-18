import React, { useCallback, useEffect, useState } from 'react';
import {
  PForm,
  PFormRating,
  PFormRow,
  PFormCol,
  PFormButton,
  PFormValueMap,
  PFormBody,
  PFormFooter,
} from '../../../../src';

const FormItemRating = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState(0);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setTimeout(() => {
      setValue(2);
    }, 1000);
  }, []);

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
            <PFormRating name='default' labelIcon='Check' label='PFormRating' value={value} helperText='labelIcon' />
          </PFormCol>
          <PFormCol>
            <PFormRating name='required' label='PFormRating' required helperText='required=true' />
          </PFormCol>
          <PFormCol>
            <PFormRating name='readOnly' label='PFormRating' readOnly helperText='readOnly=true' />
          </PFormCol>
          <PFormCol>
            <PFormRating name='disabled' label='PFormRating' disabled helperText='disabled=true' />
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

export default FormItemRating;
