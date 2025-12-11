import React, { useState } from 'react';
import {
  PForm,
  PFormRow,
  PFormCol,
  PFormTextEditor,
  PFormButton,
  PFormCheckbox,
  PFormBody,
  PFormFooter,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';

const FormItemTextEditor = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [readOnly, setReadOnly] = useState(false);
  const [disabled, setDisabled] = useState(false);

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
                  name='readOnly'
                  text='readOnly'
                  checked={readOnly}
                  onChange={(checked) => setReadOnly(checked)}
                />
                <PFormCheckbox
                  name='disabled'
                  text='disabled'
                  checked={disabled}
                  onChange={(checked) => setDisabled(checked)}
                />
              </PFormCol>
            </PFormRow>
          </PFormBody>
        </PForm>
      </OutlinedPaper>
      <br />
      <PForm onSubmit={(data) => ll(data)}>
        <PFormBody>
          <PFormRow>
            <PFormCol>
              <PFormTextEditor
                required
                name='PFormTextEditor'
                label='PFormTextEditor'
                readOnly={readOnly}
                disabled={disabled}
              />
            </PFormCol>
          </PFormRow>
        </PFormBody>
        <PFormFooter>
          <PFormRow>
            <PFormCol>
              <PFormButton type='submit'>확인</PFormButton>
            </PFormCol>
          </PFormRow>
        </PFormFooter>
      </PForm>
    </>
  );
};

export default FormItemTextEditor;
