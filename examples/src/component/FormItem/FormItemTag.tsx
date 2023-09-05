import React, { useState } from 'react';
import {
  Form,
  FormButton,
  FormRow,
  FormCol,
  FormTag,
  FormCheckbox,
  FormValueMap,
  FormBody,
  FormFooter,
} from '../../../../src';
import { OutlinedPaper } from '#ccomp';

const FormItemTag = () => {
  const [value] = useState(['Tag2', 'Tag1']);
  const [formValueSort, setFormValueSort] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  const additionalProps = { formValueSort };

  return (
    <>
      <OutlinedPaper>
        <Form size='small'>
          <FormBody>
            <FormRow>
              <FormCol>
                <FormCheckbox
                  name='formValueSort'
                  text='formValueSort'
                  checked={formValueSort}
                  onChange={(checked) => setFormValueSort(checked)}
                />
              </FormCol>
            </FormRow>
          </FormBody>
        </Form>
      </OutlinedPaper>
      <br />
      <Form fullHeight onSubmit={handleSubmit}>
        <FormBody>
          <FormRow>
            <FormCol>
              <FormTag {...additionalProps} name='required' label='FormTag' required helperText='required=true' />
            </FormCol>
            <FormCol>
              <FormTag
                {...additionalProps}
                name='readOnly'
                label='FormTag'
                value={value}
                readOnly
                helperText='readOnly=true'
              />
            </FormCol>
            <FormCol>
              <FormTag
                {...additionalProps}
                name='disabled'
                label='FormTag'
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

export default FormItemTag;
