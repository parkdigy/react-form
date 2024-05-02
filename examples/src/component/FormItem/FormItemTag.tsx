import React, { useCallback, useMemo, useState } from 'react';
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
  FormNumber,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';

const FormItemTag = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value] = useState(['Tag2', 'Tag1']);
  const [formValueSort, setFormValueSort] = useState(false);
  const [limitTags, setLimitTags] = useState<number>();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const additionalProps = useMemo(
    () => ({
      formValueSort,
      limitTags,
      getLimitTagsText: (more: number) => <span style={{ opacity: 0.5 }}>외 {more}개</span>,
    }),
    [formValueSort, limitTags]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <OutlinedPaper>
        <Form size='small' fullWidth={false}>
          <FormBody>
            <FormRow>
              <FormCol>
                <FormCheckbox
                  name='formValueSort'
                  text='formValueSort'
                  helperText='Form 값 정렬'
                  checked={formValueSort}
                  onChange={setFormValueSort}
                />
                <FormNumber
                  name='limitTags'
                  label='limitTags'
                  helperText='값 표시 개수 지정'
                  width={100}
                  value={limitTags}
                  onChange={setLimitTags}
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
              <FormTag
                {...additionalProps}
                name='required'
                label='FormTag'
                required
                helperText='required=true'
                value={value}
              />
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
