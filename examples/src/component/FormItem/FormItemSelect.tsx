import React, { useEffect, useRef, useState } from 'react';
import {
  Form,
  FormButton,
  FormRow,
  FormCol,
  FormSelect,
  FormCheckbox,
  FormSelectItem,
  FormValueMap,
  FormSelectCommands,
  FormBody,
  FormFooter,
  FormSelectItems,
} from '../../../../src';
import { OutlinedPaper } from '#ccomp';

const FormItemSelect = () => {
  const asyncLoadSelectRef = useRef<FormSelectCommands<number, 'any'>>(null);
  const selectRef = useRef<FormSelectCommands<number, 'any'>>(null);

  //--------------------------------------------------------------------------------------------------------------------

  const [items] = useState<FormSelectItems<number>>(() =>
    new Array(5).fill(0).map<FormSelectItem<number>>((v, idx) => lv(`Item ${idx + 1}`, idx + 1))
  );
  const [isMultiple, setIsMultiple] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  function loadList() {
    if (asyncLoadSelectRef.current) {
      const { setLoading, setItems } = asyncLoadSelectRef.current;

      if (setLoading) setLoading(true);
      setTimeout(() => {
        if (setItems) setItems(items);
        if (setLoading) setLoading(false);
      }, 5000);
    }
  }

  //--------------------------------------------------------------------------------------------------------------------

  function handleLoadItems() {
    return new Promise<FormSelectItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  }

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

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
              <FormSelect<number, 'any'>
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
              <FormSelect<number, 'any'>
                name='readOnly'
                items={items}
                label='FormSelect'
                value={1}
                readOnly
                helperText='readOnly=true'
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </FormCol>
            <FormCol>
              <FormSelect<number, 'any'>
                name='disabled'
                items={items}
                label='FormSelect'
                value={1}
                disabled
                helperText='disabled=true'
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </FormCol>
          </FormRow>

          <FormRow line>
            <FormCol helperText='하나의 FormCol 에 여러개의 Select' helperTextShift fullWidth={false}>
              <FormSelect<number, 'any'>
                name='onLoadItems'
                label='FormSelect'
                placeholder='선택하세요'
                helperText='onLoadItems'
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
            </FormCol>
            <FormCol>
              <FormSelect<number, 'any'>
                name='onLoadItems'
                label='FormSelect'
                placeholder='선택하세요'
                helperText='onLoadItems'
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
            </FormCol>
            <FormCol>
              <FormSelect<number, 'any'>
                ref={asyncLoadSelectRef}
                name='AsyncLoadItems'
                label='FormSelect'
                value={1}
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
