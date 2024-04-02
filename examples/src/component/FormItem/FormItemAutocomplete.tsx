import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Form,
  FormAutocomplete,
  FormAutocompleteValue,
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
  FormAutocompleteItems,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/util';

const DEFAULT_ITEMS: FormAutocompleteItem<number>[] = [
  lv('Item 1', 1),
  lv('Item 2', 2),
  lv('Item 3', 3, { disabled: true }),
];

const FormItemAutocomplete = () => {
  const asyncLoadAutocompleteRef = useRef<FormAutocompleteCommands<number>>(null);

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
    return new Promise<FormAutocompleteItems<number>>((resolve) => {
      setTimeout(() => {
        if (keyword) {
          resolve(
            DEFAULT_ITEMS.filter(
              (info) =>
                info.label && ['string', 'number'].includes(typeof info.label) && `${info.label}`.includes(keyword)
            )
          );
        } else {
          resolve([]);
        }
      }, 1000);
    });
  }, []);

  const handleAsyncLoadMultipleValueItem = useCallback((value: FormAutocompleteValue<number, true>) => {
    return new Promise<FormAutocompleteComponentValue<number, true>>((resolve) => {
      resolve(DEFAULT_ITEMS.filter((info) => !!value && value.includes(info.value)));
    });
  }, []);

  const handleAsyncLoadValueItem = useCallback((value: FormAutocompleteValue<number, false>) => {
    return new Promise<FormAutocompleteComponentValue<number, false>>((resolve) => {
      resolve(DEFAULT_ITEMS.find((info) => info.value === value) || null);
    });
  }, []);

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

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
                multiple={multiple}
                openOnFocus={openOnFocus}
                name='label'
                items={items}
                value={1}
                labelIcon='RadioButtonChecked'
                label='FormAutocomplete'
                helperText='labelIcon'
                getOptionDisabled={(option) => option.value === 2}
              />
            </FormCol>
            <FormCol>
              <FormAutocomplete
                multiple={multiple}
                openOnFocus={openOnFocus}
                name='required'
                items={items}
                label='FormAutocomplete'
                required
                helperText='required=true'
              />
            </FormCol>
            <FormCol>
              <FormAutocomplete
                multiple={multiple}
                openOnFocus={openOnFocus}
                name='readOnly'
                items={items}
                label='FormAutocomplete'
                readOnly
                value={1}
                helperText='readOnly=true'
              />
            </FormCol>
            <FormCol>
              <FormAutocomplete
                multiple={multiple}
                openOnFocus={openOnFocus}
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
                multiple={multiple}
                openOnFocus={openOnFocus}
                name='onLoadItems'
                label='FormAutocomplete'
                helperText='onLoadItems'
                onLoadItems={handleLoadItems}
              />
            </FormCol>
            <FormCol xs={3}>
              <FormAutocomplete
                multiple={multiple}
                openOnFocus={openOnFocus}
                ref={asyncLoadAutocompleteRef}
                name='asyncLoadItems'
                label='FormAutocomplete'
                helperText='Async Load Items'
              />
            </FormCol>{' '}
            <FormCol xs={3}>
              {multiple ? (
                <FormAutocomplete
                  multiple
                  openOnFocus={openOnFocus}
                  name='onLoadItems'
                  label='FormAutocomplete'
                  helperText='async=true'
                  async
                  onLoadItems={handleLoadItems}
                  onAsyncLoadValueItem={handleAsyncLoadMultipleValueItem}
                />
              ) : (
                <FormAutocomplete
                  openOnFocus={openOnFocus}
                  name='onLoadItems'
                  label='FormAutocomplete'
                  helperText='async=true'
                  async
                  onLoadItems={handleLoadItems}
                  onAsyncLoadValueItem={handleAsyncLoadValueItem}
                />
              )}
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
