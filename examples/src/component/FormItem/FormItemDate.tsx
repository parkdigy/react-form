import React, { useCallback } from 'react';
import {
  PForm,
  PFormBody,
  PFormButton,
  PFormCol,
  PFormDatePicker,
  PFormDateRangePicker,
  PFormDateTimePicker,
  PFormFooter,
  PFormMonthPicker,
  PFormMonthRangePicker,
  PFormRow,
  PFormTimePicker,
  PFormValueMap,
  PFormYearPicker,
  PFormYearRangePicker,
} from '../../../../src';

const FormItemDate = () => {
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
    <PForm onSubmit={handleSubmit}>
      <PFormBody>
        <PFormRow label='date/time' line>
          <PFormCol>
            <PFormDatePicker name='PFormDatePicker' label='PFormDatePicker' />
          </PFormCol>
          <PFormCol>
            <PFormDateTimePicker name='PFormDateTimePicker' label='PFormDateTimePicker' time='minute' />
          </PFormCol>
          <PFormCol>
            <PFormTimePicker name='PFormTimePicker' label='PFormTimePicker' time='second' />
          </PFormCol>
          <PFormCol xs={6}>
            <PFormDateRangePicker name='PFormDateRangePicker' fromLabel='PFormDateRangePicker' />
          </PFormCol>
        </PFormRow>
        <PFormRow label='month' line>
          <PFormCol>
            <PFormMonthPicker name='PFormMonthPicker' label='PFormMonthPicker' />
          </PFormCol>
          <PFormCol>
            <PFormMonthRangePicker name='PFormMonthRangePicker' fromLabel='PFormMonthRangePicker' />
          </PFormCol>
        </PFormRow>
        <PFormRow label='year' line>
          <PFormCol>
            <PFormYearPicker name='PFormYearPicker' label='PFormYearPicker' />
          </PFormCol>
          <PFormCol>
            <PFormYearRangePicker name='PFormYearRangePicker' fromLabel='PFormYearRangePicker' />
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

export default FormItemDate;
