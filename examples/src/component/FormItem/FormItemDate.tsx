import React from 'react';
import {
  Form,
  FormBody,
  FormButton,
  FormCol,
  FormDatePicker,
  FormDateRangePicker,
  FormDateTimePicker,
  FormFooter,
  FormMonthPicker,
  FormMonthRangePicker,
  FormRow,
  FormTimePicker,
  FormValueMap,
  FormYearPicker,
  FormYearRangePicker,
} from '../../../../src';

const FormItemDate = () => {
  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormBody>
        <FormRow label='date/time' line>
          <FormCol>
            <FormDatePicker name='FormDatePicker' label='FormDatePicker' />
          </FormCol>
          <FormCol>
            <FormDateTimePicker name='FormDateTimePicker' label='FormDateTimePicker' time='minute' />
          </FormCol>
          <FormCol>
            <FormTimePicker name='FormTimePicker' label='FormTimePicker' time='second' />
          </FormCol>
          <FormCol xs={6}>
            <FormDateRangePicker name='FormDateRangePicker' fromLabel='FormDateRangePicker' />
          </FormCol>
        </FormRow>
        <FormRow label='month' line>
          <FormCol>
            <FormMonthPicker name='FormMonthPicker' label='FormMonthPicker' />
          </FormCol>
          <FormCol>
            <FormMonthRangePicker name='FormMonthRangePicker' fromLabel='FormMonthRangePicker' />
          </FormCol>
        </FormRow>
        <FormRow label='year' line>
          <FormCol>
            <FormYearPicker name='FormYearPicker' label='FormYearPicker' />
          </FormCol>
          <FormCol>
            <FormYearRangePicker name='FormYearRangePicker' fromLabel='FormYearRangePicker' />
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

export default FormItemDate;
