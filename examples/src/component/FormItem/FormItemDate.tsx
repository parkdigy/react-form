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
  PFormEmbedMonthPicker,
  PFormEmbedDatePicker,
  PFormEmbedDateRangePicker,
  PFormEmbedDateTimePicker,
  PFormEmbedMonthRangePicker,
  PFormEmbedTimePicker,
  PFormEmbedYearPicker,
  PFormEmbedYearRangePicker,
  PFormMonthPicker,
  PFormMonthRangePicker,
  PFormRow,
  PFormTimePicker,
  PFormValueMap,
  PFormYearPicker,
  PFormYearRangePicker,
} from '../../../../src';
import { PBox } from '@pdg/react-component';

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
        {/* date/time */}
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
        <PFormRow>
          <PFormCol label='PFormEmbedDatePicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedDatePicker name='PFormEmbedDatePicker' />
            </PBox>
          </PFormCol>
          <PFormCol label='PFormEmbedDateRangePicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedDateRangePicker name='PFormEmbedDateRangePicker' />
            </PBox>
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol label='PFormEmbedDateTimePicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedDateTimePicker name='PFormEmbedDateTimePicker' time='minute' />
            </PBox>
          </PFormCol>
          <PFormCol label='PFormEmbedTimePicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedTimePicker name='PFormEmbedTimePicker' time='minute' />
            </PBox>
          </PFormCol>
        </PFormRow>

        {/* month */}
        <PFormRow label='month' line>
          <PFormCol>
            <PFormMonthPicker name='PFormMonthPicker' label='PFormMonthPicker' />
          </PFormCol>
          <PFormCol>
            <PFormMonthRangePicker name='PFormMonthRangePicker' fromLabel='PFormMonthRangePicker' />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol label='PFormEmbedMonthPicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedMonthPicker name='PFormEmbedMonthPicker' />
            </PBox>
          </PFormCol>
          <PFormCol label='PFormEmbedMonthRangePicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedMonthRangePicker name='PFormEmbedMonthRangePicker' />
            </PBox>
          </PFormCol>
        </PFormRow>

        {/* year */}
        <PFormRow label='year' line>
          <PFormCol>
            <PFormYearPicker name='PFormYearPicker' label='PFormYearPicker' />
          </PFormCol>
          <PFormCol>
            <PFormYearRangePicker name='PFormYearRangePicker' fromLabel='PFormYearRangePicker' />
          </PFormCol>
        </PFormRow>
        <PFormRow>
          <PFormCol label='PFormEmbedYearPicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedYearPicker name='PFormEmbedYearPicker' />
            </PBox>
          </PFormCol>
          <PFormCol label='PFormEmbedYearRangePicker'>
            <PBox border='1px solid #bfbfbf'>
              <PFormEmbedYearRangePicker name='PFormEmbedYearRangePicker' />
            </PBox>
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
