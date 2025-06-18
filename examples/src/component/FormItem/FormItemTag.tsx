import React, { useCallback, useMemo, useState } from 'react';
import {
  PForm,
  PFormButton,
  PFormRow,
  PFormCol,
  PFormTag,
  PFormCheckbox,
  PFormValueMap,
  PFormBody,
  PFormFooter,
  PFormNumber,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';

const FormItemTag = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value] = useState(['Tag2', 'Tag1', 'Tag3', 'Tag4', 'Tag5']);
  const [formValueSort, setFormValueSort] = useState(false);
  const [limitTags, setLimitTags] = useState<number>();
  const [allowSpace, setAllowSpace] = useState(false);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback((data: PFormValueMap) => {
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
        <PForm size='small' fullWidth={false}>
          <PFormBody>
            <PFormRow>
              <PFormCol>
                <PFormCheckbox
                  name='formValueSort'
                  text='formValueSort'
                  helperText='Form 값 정렬'
                  checked={formValueSort}
                  onChange={setFormValueSort}
                />
                <PFormNumber
                  name='limitTags'
                  label='limitTags'
                  helperText='값 표시 개수 지정'
                  width={100}
                  value={limitTags}
                  onChange={setLimitTags}
                />
                <PFormCheckbox
                  name='allowSpace'
                  text='allowSpace'
                  checked={allowSpace}
                  onChange={setAllowSpace}
                  fullWidth={false}
                  helperText='공백 허용'
                />
              </PFormCol>
            </PFormRow>
          </PFormBody>
        </PForm>
      </OutlinedPaper>
      <br />
      <PForm fullHeight onSubmit={handleSubmit}>
        <PFormBody>
          <PFormRow>
            <PFormCol>
              <PFormTag
                {...additionalProps}
                name='required'
                label='PFormTag'
                required
                helperText='required=true'
                allowSpace={allowSpace}
                value={value}
              />
            </PFormCol>
            <PFormCol>
              <PFormTag
                {...additionalProps}
                name='readOnly'
                label='PFormTag'
                value={value}
                readOnly
                helperText='readOnly=true'
                allowSpace={allowSpace}
              />
            </PFormCol>
            <PFormCol>
              <PFormTag
                {...additionalProps}
                name='disabled'
                label='PFormTag'
                value={value}
                disabled
                helperText='disabled=true'
                allowSpace={allowSpace}
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

export default FormItemTag;
