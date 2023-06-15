import React, { useEffect, useRef, useState } from 'react';
import {
  Form,
  FormAutocomplete,
  FormRow,
  FormCol,
  FormButton,
  FormCheckbox,
  FormAutocompleteItem,
  FormAutocompleteCommands,
  FormValueMap,
} from '@pdg/react-form';
import { OutlinedPaper } from '#ccomp';

const DEFAULT_ITEMS: FormAutocompleteItem[] = [lv('Item 1', 1), lv('Item 2', 2), lv('Item 3', 3)];

const FormItemAutocomplete = () => {
  const asyncLoadAutocompleteRef = useRef<FormAutocompleteCommands>(null);

  //--------------------------------------------------------------------------------------------------------------------

  const [items] = useState(DEFAULT_ITEMS);
  const [multiple, setMultiple] = useState(false);
  const [openOnFocus, setOpenOnFocus] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    loadList();
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  function loadList() {
    if (asyncLoadAutocompleteRef.current) {
      const { setLoading, setItems } = asyncLoadAutocompleteRef.current;

      if (setLoading) setLoading(true);
      setTimeout(() => {
        if (setItems) setItems(DEFAULT_ITEMS);
        if (setLoading) setLoading(false);
      }, 5000);
    }
  }

  //--------------------------------------------------------------------------------------------------------------------

  function handleLoadItems() {
    return new Promise<FormAutocompleteItem[]>((resolve) => {
      setTimeout(() => {
        resolve(DEFAULT_ITEMS);
      }, 2000);
    });
  }

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  const additionalProps = { multiple, openOnFocus };

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
                name='openOnFocus'
                text='openOnFocus'
                checked={openOnFocus}
                onChange={(checked) => setOpenOnFocus(checked)}
              />
            </FormCol>
          </FormRow>
        </Form>
      </OutlinedPaper>
      <br />
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormCol>
            <FormAutocomplete
              {...additionalProps}
              name='label'
              items={items}
              value={1}
              labelIcon='RadioButtonChecked'
              label='FormAutocomplete'
              helperText='labelIcon'
            />
          </FormCol>
          <FormCol>
            <FormAutocomplete
              {...additionalProps}
              name='required'
              items={items}
              label='FormAutocomplete'
              required
              helperText='required=true'
            />
          </FormCol>
          <FormCol>
            <FormAutocomplete
              {...additionalProps}
              name='readOnly'
              items={items}
              label='FormAutocomplete'
              readOnly
              helperText='readOnly=true'
            />
          </FormCol>
          <FormCol>
            <FormAutocomplete
              {...additionalProps}
              name='disabled'
              items={items}
              label='FormAutocomplete'
              disabled
              helperText='disabled=true'
            />
          </FormCol>
        </FormRow>

        <FormRow line>
          <FormCol xs={3}>
            <FormAutocomplete
              {...additionalProps}
              name='onLoadItems'
              label='FormAutocomplete'
              helperText='onLoadItems'
              async
              onLoadItems={handleLoadItems}
            />
          </FormCol>
          <FormCol xs={3}>
            <FormAutocomplete
              {...additionalProps}
              ref={asyncLoadAutocompleteRef}
              name='asyncLoadItems'
              label='FormAutocomplete'
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

export default FormItemAutocomplete;
