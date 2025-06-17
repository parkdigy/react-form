import React, { useCallback, useMemo, useState } from 'react';
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
import { OutlinedPaper } from '@ccomp';
import { notEmpty } from '@pdg/compare';

const VALUE = 1234567890;

const FormItemNumber = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [thousandSeparator, setThousandSeparator] = useState(false);
  const [allowNegative, setAllowNegative] = useState(false);
  const [allowDecimal, setAllowDecimal] = useState(false);
  const [decimalScale, setDecimalScale] = useState<number>();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const numberProps = useMemo(() => {
    const newNumberProps: Partial<FormNumberProps> = {
      thousandSeparator,
      allowNegative,
      allowDecimal,
    };
    if (notEmpty(decimalScale) && Number(decimalScale)) {
      numberProps.decimalScale = Number(decimalScale);
    }
    return newNumberProps;
  }, [allowDecimal, allowNegative, decimalScale, thousandSeparator]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

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
                  onChange={setDecimalScale}
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
                value={VALUE}
                readOnly
                helperText='readOnly=true'
              />
            </FormCol>
            <FormCol>
              <FormNumber
                {...numberProps}
                name='disabled'
                label={FormNumber.displayName}
                value={VALUE}
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
