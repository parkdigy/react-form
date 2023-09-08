import React, { useEffect, useRef, useState } from 'react';
import {
  Form,
  FormRadioGroup,
  FormRow,
  FormCol,
  FormButton,
  FormRadioGroupCommands,
  FormRadioGroupItem,
  FormValueMap,
  FormBody,
  FormFooter,
  FormRadioGroupItems,
} from '../../../../src';

const DEFAULT_ITEMS: FormRadioGroupItem<number>[] = [lv('Item 1', 1), lv('Item 2', 2), lv('Item 3', 3)];

const FormItemRadioGroup = () => {
  const asyncLoadRadioGroupRef = useRef<FormRadioGroupCommands<number>>(null);

  //--------------------------------------------------------------------------------------------------------------------

  const [items] = useState(DEFAULT_ITEMS);

  //--------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    loadList();
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  function loadList() {
    if (asyncLoadRadioGroupRef.current) {
      const { setLoading, setItems } = asyncLoadRadioGroupRef.current;

      if (setLoading) setLoading(true);
      setTimeout(() => {
        if (setItems) setItems(DEFAULT_ITEMS);
        if (setLoading) setLoading(false);
      }, 5000);
    }
  }

  //--------------------------------------------------------------------------------------------------------------------

  function handleLoadItems() {
    return new Promise<FormRadioGroupItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(DEFAULT_ITEMS);
      }, 2000);
    });
  }

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <Form fullHeight onSubmit={handleSubmit}>
      <FormBody>
        <FormRow>
          <FormCol>
            <FormRadioGroup
              name='label'
              items={items}
              labelIcon='RadioButtonChecked'
              label='FormRadioGroup'
              helperText='labelIcon'
            />
          </FormCol>
          <FormCol>
            <FormRadioGroup name='required' items={items} label='FormRadioGroup' required helperText='required=true' />
          </FormCol>
          <FormCol>
            <FormRadioGroup name='readOnly' items={items} label='FormRadioGroup' readOnly helperText='readOnly=true' />
          </FormCol>
          <FormCol>
            <FormRadioGroup name='disabled' items={items} label='FormRadioGroup' disabled helperText='disabled=true' />
          </FormCol>
        </FormRow>

        <FormRow line>
          <FormCol xs={3}>
            <FormRadioGroup
              name='onLoadItems'
              label='FormRadioGroup'
              helperText='onLoadItems'
              onLoadItems={handleLoadItems}
            />
          </FormCol>
          <FormCol xs={3}>
            <FormRadioGroup
              ref={asyncLoadRadioGroupRef}
              name='asyncLoadItems'
              label='FormRadioGroup'
              helperText='Async Load Items'
            />
          </FormCol>
        </FormRow>

        <FormRow line>
          <FormCol>
            <FormRadioGroup
              name='inline'
              items={items}
              inline={false}
              label='FormRadioGroup'
              helperText='inline=false'
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
  );
};

export default FormItemRadioGroup;
