import React, { useState } from 'react';
import { Form, FormButton, FormRow, FormCol, FormTag, FormCheckbox, FormValueMap } from '@pdg/react-form';
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
        </Form>
      </OutlinedPaper>
      <br />
      <Form onSubmit={handleSubmit}>
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
        <FormRow line>
          <FormCol>
            <FormButton>취소</FormButton>
          </FormCol>
          <FormCol>
            <FormButton type='submit'>확인</FormButton>
          </FormCol>
        </FormRow>
      </Form>
    </>
  );
};

export default FormItemTag;
