import React, { useEffect, useRef, useState } from 'react';
import {
  Form,
  FormToggleButtonGroup,
  FormRow,
  FormCol,
  FormButton,
  FormCheckbox,
  FormToggleButtonGroupItem,
  FormToggleButtonGroupCommands,
  FormValueMap,
} from '@pdg/react-form';
import { OutlinedPaper } from '#ccomp';

const DEFAULT_ITEMS: FormToggleButtonGroupItem[] = [lv('Item 1', 1), lv('Item 2', 2), lv('Item 3', 3)];

const FormItemToggleButtonGroup = () => {
  const asyncLoadToggleButtonGroupRef = useRef<FormToggleButtonGroupCommands>(null);

  //--------------------------------------------------------------------------------------------------------------------

  const [items] = useState(DEFAULT_ITEMS);
  const [multiple, setMultiple] = useState(false);
  const [notAllowEmptyValue, setNowAllowEmptyValue] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    loadList();
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  function loadList() {
    if (asyncLoadToggleButtonGroupRef.current) {
      const { setLoading, setItems } = asyncLoadToggleButtonGroupRef.current;

      if (setLoading) setLoading(true);
      setTimeout(() => {
        if (setItems) setItems(DEFAULT_ITEMS);
        if (setLoading) setLoading(false);
      }, 5000);
    }
  }

  //--------------------------------------------------------------------------------------------------------------------

  function handleLoadItems() {
    return new Promise<FormToggleButtonGroupItem[]>((resolve) => {
      setTimeout(() => {
        resolve(DEFAULT_ITEMS);
      }, 2000);
    });
  }

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  const additionalProps = { multiple, notAllowEmptyValue };

  return (
    <>
      <OutlinedPaper>
        <Form>
          <FormRow>
            <FormCol fullWidth={false}>
              <FormCheckbox
                name='multiple'
                text='multiple'
                checked={multiple}
                onChange={(checked) => setMultiple(checked)}
              />
              <FormCheckbox
                name='notAllowEmptyValue'
                text='notAllowEmptyValue'
                checked={notAllowEmptyValue}
                onChange={(checked) => setNowAllowEmptyValue(checked)}
              />
            </FormCol>
          </FormRow>
        </Form>
      </OutlinedPaper>
      <br />
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormCol>
            <FormToggleButtonGroup
              {...additionalProps}
              name='label'
              items={items}
              labelIcon='RadioButtonChecked'
              label='FormToggleButtonGroup'
              helperText='labelIcon'
            />
          </FormCol>
          <FormCol>
            <FormToggleButtonGroup
              {...additionalProps}
              name='required'
              items={items}
              label='FormToggleButtonGroup'
              required
              helperText='required=true'
            />
          </FormCol>
          <FormCol>
            <FormToggleButtonGroup
              {...additionalProps}
              name='readOnly'
              items={items}
              label='FormToggleButtonGroup'
              readOnly
              helperText='readOnly=true'
            />
          </FormCol>
          <FormCol>
            <FormToggleButtonGroup
              {...additionalProps}
              name='disabled'
              items={items}
              label='FormToggleButtonGroup'
              disabled
              helperText='disabled=true'
            />
          </FormCol>
        </FormRow>

        <FormRow line>
          <FormCol xs={3}>
            <FormToggleButtonGroup
              {...additionalProps}
              name='onLoadItems'
              label='FormToggleButtonGroup'
              helperText='onLoadItems'
              onLoadItems={handleLoadItems}
            />
          </FormCol>
          <FormCol xs={3}>
            <FormToggleButtonGroup
              {...additionalProps}
              ref={asyncLoadToggleButtonGroupRef}
              name='asyncLoadItems'
              label='FormToggleButtonGroup'
              helperText='Async Load Items'
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

export default FormItemToggleButtonGroup;
