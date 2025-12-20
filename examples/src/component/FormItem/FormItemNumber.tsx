import React, { useCallback, useMemo, useState } from 'react';
import {
  PForm,
  PFormButton,
  PFormRow,
  PFormCol,
  PFormNumber,
  PFormCheckbox,
  PFormNumberProps,
  PFormValueMap,
  PFormBody,
  PFormFooter,
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

  const handleSubmit = useCallback((data: PFormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const numberProps = useMemo(() => {
    const newNumberProps: Partial<PFormNumberProps> = {
      thousandSeparator,
      allowNegative,
      allowDecimal,
    };
    if (notEmpty(decimalScale) && Number(decimalScale)) {
      newNumberProps.decimalScale = Number(decimalScale);
    }
    return newNumberProps;
  }, [allowDecimal, allowNegative, decimalScale, thousandSeparator]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <OutlinedPaper>
        <PForm size='small' style={{ marginTop: 10 }}>
          <PFormBody>
            <PFormRow>
              <PFormCol fullWidth={false}>
                <PFormCheckbox
                  name='thousandSeparator'
                  text='thousandSeparator'
                  helperText='천단위 콤마(,) 표시'
                  checked={thousandSeparator}
                  onChange={(checked) => setThousandSeparator(checked)}
                />
                <PFormCheckbox
                  name='allowNegative'
                  text='allowNegative'
                  helperText='음수 허용'
                  checked={allowNegative}
                  onChange={(checked) => setAllowNegative(checked)}
                />
                <PFormCheckbox
                  name='allowDecimal'
                  text='allowDecimal'
                  helperText='소수점 허용'
                  checked={allowDecimal}
                  onChange={(checked) => setAllowDecimal(checked)}
                />
                <PFormNumber
                  name='decimalScale'
                  label='decimalScale'
                  width={100}
                  helperText='소수점 자리수'
                  labelShrink
                  disabled={!allowDecimal}
                  value={decimalScale}
                  onChange={setDecimalScale}
                />
              </PFormCol>
            </PFormRow>
          </PFormBody>
        </PForm>
      </OutlinedPaper>
      <br />
      <PForm onSubmit={handleSubmit} fullHeight>
        <PFormBody>
          <PFormRow>
            <PFormCol>
              <PFormNumber {...numberProps} name='required' label='PFormNumber' required helperText='required=true' />
            </PFormCol>
            <PFormCol>
              <PFormNumber
                {...numberProps}
                name='readOnly'
                label='PFormNumber'
                value={VALUE}
                readOnly
                helperText='readOnly=true'
              />
            </PFormCol>
            <PFormCol>
              <PFormNumber
                {...numberProps}
                name='disabled'
                label='PFormNumber'
                value={VALUE}
                disabled
                helperText='disabled=true'
              />
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
    </>
  );
};

export default FormItemNumber;
