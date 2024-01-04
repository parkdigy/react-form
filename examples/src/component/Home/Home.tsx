import React from 'react';
import {
  Form,
  FormBody,
  FormButton,
  FormCol,
  FormFooter,
  FormMonthPicker,
  FormYearPicker,
  FormYearRangePicker,
  FormRow,
  FormMonthRangePicker,
} from '../../../../src';

const Home = () => {
  return (
    <div>
      <Form onSubmit={(v) => ll(v)}>
        <FormBody>
          <FormRow>
            <FormCol>
              <FormYearPicker name='FormYearPicker' label='FormYearPicker' disableFuture />
            </FormCol>
            <FormCol>
              <FormYearRangePicker name='FormYearRangePicker' startLabel='FormYearRangePicker' disableFuture />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <FormMonthPicker name='FormMonthPicker' label='FormMonthPicker' disableFuture />
            </FormCol>
            <FormCol>
              <FormMonthRangePicker
                name='FormMonthRangePicker'
                startLabel='FormMonthRangePicker'
                disableFuture
                required
              />
            </FormCol>
          </FormRow>
        </FormBody>
        <FormFooter>
          <FormRow>
            <FormCol>
              <FormButton type='submit'>submit</FormButton>
            </FormCol>
          </FormRow>
        </FormFooter>
      </Form>
    </div>
  );
};

export default Home;
