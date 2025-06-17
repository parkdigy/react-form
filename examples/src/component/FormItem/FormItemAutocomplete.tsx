import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  FormNumber,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/data';

const DEFAULT_ITEMS: FormAutocompleteItem<number>[] = [
  lv('Item 1', 1),
  lv('Item 2', 2),
  lv('Item 3', 3, { disabled: true }),
  lv('Item 4', 4),
  lv('Item 5', 5),
  lv('Item 6', 6),
  lv('Item 7', 7),
  lv('Item 8', 8),
];

const FormItemAutocomplete = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const asyncLoadAutocompleteRef = useRef<FormAutocompleteCommands<number>>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [items] = useState(DEFAULT_ITEMS);
  const [multiple, setMultiple] = useState(false);
  const [openOnFocus, setOpenOnFocus] = useState(false);
  const [limitTags, setLimitTags] = useState<number>();

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
    if (asyncLoadAutocompleteRef.current) {
      const { setLoading, setItems } = asyncLoadAutocompleteRef.current;

      if (setLoading) setLoading(true);
      setTimeout(() => {
        if (setItems) setItems(DEFAULT_ITEMS);
        if (setLoading) setLoading(false);
      }, 5000);
    }
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

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

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const additionalProps = useMemo(
    () => ({
      multiple,
      openOnFocus,
      limitTags,
      getLimitTagsText: (more: number) => <span style={{ opacity: 0.5 }}>외 {more}개</span>,
    }),
    [limitTags, multiple, openOnFocus]
  );

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
                  checked={multiple}
                  onChange={(checked) => setMultiple(checked)}
                />
                <FormCheckbox
                  name='openOnFocus'
                  text='openOnFocus'
                  checked={openOnFocus}
                  onChange={(checked) => setOpenOnFocus(checked)}
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
              <FormAutocomplete
                {...additionalProps}
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
                value={1}
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
              {multiple ? (
                <FormAutocomplete
                  {...additionalProps}
                  multiple
                  name='onLoadItems'
                  label='FormAutocomplete'
                  helperText='async=true'
                  async
                  onLoadItems={handleLoadItems}
                  onAsyncLoadValueItem={handleAsyncLoadMultipleValueItem}
                />
              ) : (
                <FormAutocomplete
                  {...additionalProps}
                  multiple={false}
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
