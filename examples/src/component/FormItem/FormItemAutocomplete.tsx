import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Form,
  FormAutocomplete,
  FormRow,
  FormCol,
  FormButton,
  FormCheckbox,
  FormAutocompleteItem,
  FormAutocompleteCommands,
  FormAutocompleteComponentValue,
  FormValueMap,
  FormBody,
  FormFooter,
} from '@pdg/react-form';
import { OutlinedPaper } from '#ccomp';
import { FormAutocompleteValue } from '../../../../src';

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

  const handleLoadItems = useCallback((keyword?: string) => {
    return new Promise<FormAutocompleteItem[]>((resolve) => {
      setTimeout(() => {
        if (keyword) {
          resolve(DEFAULT_ITEMS.filter((info) => info.label.includes(keyword)));
        } else {
          resolve([]);
        }
      }, 1000);
    });
  }, []);

  const handleAsyncLoadValueItem = useCallback((value: FormAutocompleteValue) => {
    return new Promise<FormAutocompleteComponentValue>((resolve) => {
      if (Array.isArray(value)) {
        resolve(DEFAULT_ITEMS.filter((info) => value.includes(info.value)));
      } else {
        resolve(DEFAULT_ITEMS.find((info) => info.value === value) || null);
      }
    });
  }, []);

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  const additionalProps = { multiple, openOnFocus };

  return (
    <>
      <OutlinedPaper>
        <Form>
          <FormBody>
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
          </FormBody>
        </Form>
      </OutlinedPaper>
      <br />
      <Form fullHeight onSubmit={handleSubmit}>
        <FormBody>
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
          <FormRow>
            <FormCol xs={3}>
              <FormAutocomplete
                {...additionalProps}
                name='onLoadItems'
                label='FormAutocomplete'
                helperText='onLoadItems'
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
            </FormCol>{' '}
            <FormCol xs={3}>
              <FormAutocomplete
                {...additionalProps}
                name='onLoadItems'
                label='FormAutocomplete'
                helperText='async=true'
                async
                onLoadItems={handleLoadItems}
                onAsyncLoadValueItem={handleAsyncLoadValueItem}
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

export default FormItemAutocomplete;
