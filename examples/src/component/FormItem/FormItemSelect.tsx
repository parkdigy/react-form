import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Form,
  FormButton,
  FormRow,
  FormCol,
  FormSelect,
  FormCheckbox,
  FormValueMap,
  FormSelectCommands,
  FormBody,
  FormFooter,
  FormSelectItems,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/util';

const FormItemSelect = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const asyncLoadSelectRef = useRef<FormSelectCommands<number>>(null);
  const selectRef = useRef<FormSelectCommands<number>>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [items] = useState<FormSelectItems<number>>(() =>
    new Array(5).fill(0).map((v, idx) => lv(idx === 0 ? 'None' : `Item ${idx}`, idx === 0 ? '' : idx))
  );
  const [isMultiple, setIsMultiple] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const loadList = useCallback(() => {
    if (asyncLoadSelectRef.current) {
      const { setLoading, setItems } = asyncLoadSelectRef.current;

      if (setLoading) setLoading(true);
      setTimeout(() => {
        if (setItems) setItems(items);
        if (setLoading) setLoading(false);
      }, 5000);
    }
  }, [items]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleLoadItems = useCallback(() => {
    return new Promise<FormSelectItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  }, [items]);

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <OutlinedPaper>
        <Form size='small'>
          <FormBody>
            <FormRow>
              <FormCol fullWidth={false}>
                <FormCheckbox
                  name='multiple'
                  text='multiple'
                  checked={isMultiple}
                  onChange={(checked) => setIsMultiple(checked)}
                />
                <FormCheckbox
                  name='checkbox'
                  text='checkbox'
                  checked={isCheckbox}
                  disabled={!isMultiple}
                  onChange={(checked) => setIsCheckbox(checked)}
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
            <FormCol helperText='aaa bbb ccc ddd eee'>
              <FormSelect
                ref={selectRef}
                name='required'
                items={items}
                label='FormSelect'
                required
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </FormCol>
            <FormCol>
              <FormSelect
                name='readOnly'
                items={items}
                label='FormSelect'
                // value={1}
                readOnly
                helperText='readOnly=true'
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </FormCol>
            <FormCol>
              <FormSelect
                name='disabled'
                items={items}
                label='FormSelect'
                // value={1}
                disabled
                helperText='disabled=true'
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </FormCol>
          </FormRow>

          <FormRow line>
            <FormCol helperText='하나의 FormCol 에 여러개의 Select' helperTextShift fullWidth={false}>
              <FormSelect
                name='onLoadItems'
                label='FormSelect'
                placeholder='선택하세요'
                helperText='onLoadItems'
                value={1}
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
            </FormCol>
            <FormCol>
              <FormSelect
                name='onLoadItems2'
                label='FormSelect'
                placeholder='선택하세요'
                helperText='onLoadItems'
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
            </FormCol>
            <FormCol>
              <FormSelect
                ref={asyncLoadSelectRef}
                name='AsyncLoadItems'
                label='FormSelect'
                // value={1}
                helperText='Async Load Items'
                multiple={isMultiple}
                checkbox={isCheckbox}
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

export default FormItemSelect;
