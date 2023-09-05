import React, { useState } from 'react';
import {
  Form,
  FormButton,
  FormRow,
  FormCol,
  FormNumber,
  FormCheckbox,
  FormNumberProps,
  FormValueMap,
  FormBody,
  FormFooter,
} from '../../../../src';
import { OutlinedPaper } from '#ccomp';

const FormItemNumber = () => {
  const [thousandSeparator, setThousandSeparator] = useState(false);
  const [allowLeadingZeros, setAllowLeadingZeros] = useState(false);
  const [allowNegative, setAllowNegative] = useState(false);
  const [allowDecimal, setAllowDecimal] = useState(false);
  const [decimalScale, setDecimalScale] = useState('');

  const [value] = useState(1234567890);

  //--------------------------------------------------------------------------------------------------------------------

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  const numberProps: Partial<FormNumberProps> = {
    thousandSeparator,
    allowLeadingZeros,
    allowNegative,
    allowDecimal,
  };
  if (notEmpty(decimalScale) && Number(decimalScale)) {
    numberProps.decimalScale = Number(decimalScale);
  }

  return (
    <>
      <OutlinedPaper>
        <Form size='small' style={{ marginTop: 10 }}>
          <FormBody>
            <FormRow>
              <FormCol fullWidth={false}>
                <FormCheckbox
                  name='thousandSeparator'
                  text='thousandSeparator'
                  helperText='천단위 콤마(,) 표시'
                  checked={thousandSeparator}
                  onChange={(checked) => setThousandSeparator(checked)}
                />
                <FormCheckbox
                  name='allowLeadingZeros'
                  text='allowLeadingZeros'
                  helperText='0 으로 시작 허용'
                  checked={allowLeadingZeros}
                  onChange={(checked) => setAllowLeadingZeros(checked)}
                />
                <FormCheckbox
                  name='allowNegative'
                  text='allowNegative'
                  helperText='음수 허용'
                  checked={allowNegative}
                  onChange={(checked) => setAllowNegative(checked)}
                />
                <FormCheckbox
                  name='allowDecimal'
                  text='allowDecimal'
                  helperText='소수점 허용'
                  checked={allowDecimal}
                  onChange={(checked) => setAllowDecimal(checked)}
                />
                <FormNumber
                  name='decimalScale'
                  label='decimalScale'
                  width={100}
                  helperText='소수점 자리수'
                  labelShrink
                  disabled={!allowDecimal}
                  value={decimalScale}
                  onChange={(value) => setDecimalScale(value)}
                />
              </FormCol>
            </FormRow>
          </FormBody>
        </Form>
      </OutlinedPaper>
      <br />
      <Form onSubmit={handleSubmit} fullHeight>
        <FormBody>
          <FormRow>
            <FormCol>
              <FormNumber
                {...numberProps}
                name='required'
                label={FormNumber.displayName}
                required
                helperText='required=true'
              />
            </FormCol>
            <FormCol>
              <FormNumber
                {...numberProps}
                name='readOnly'
                label={FormNumber.displayName}
                value={value}
                readOnly
                helperText='readOnly=true'
              />
            </FormCol>
            <FormCol>
              <FormNumber
                {...numberProps}
                name='disabled'
                label={FormNumber.displayName}
                value={value}
                disabled
                helperText='disabled=true'
              />
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
    </>
  );
};

export default FormItemNumber;
