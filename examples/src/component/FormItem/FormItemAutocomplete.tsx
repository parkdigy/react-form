import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  PForm,
  PFormAutocomplete,
  PFormAutocompleteValue,
  PFormRow,
  PFormCol,
  PFormButton,
  PFormCheckbox,
  PFormAutocompleteItem,
  PFormAutocompleteCommands,
  PFormAutocompleteComponentValue,
  PFormValueMap,
  PFormBody,
  PFormFooter,
  PFormAutocompleteItems,
  PFormNumber,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/data';

const DEFAULT_ITEMS: PFormAutocompleteItem<number | ''>[] = [
  lv('전체', ''),
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

  const asyncLoadAutocompleteRef = useRef<PFormAutocompleteCommands<number | ''>>(null);

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
    return new Promise<PFormAutocompleteItems<number | ''>>((resolve) => {
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

  const handleAsyncLoadMultipleValueItem = useCallback((value: PFormAutocompleteValue<number | '', true>) => {
    return new Promise<PFormAutocompleteComponentValue<number | '', true>>((resolve) => {
      resolve(DEFAULT_ITEMS.filter((info) => !!value && value.includes(info.value)));
    });
  }, []);

  const handleAsyncLoadValueItem = useCallback((value: PFormAutocompleteValue<number | '', false>) => {
    return new Promise<PFormAutocompleteComponentValue<number | '', false>>((resolve) => {
      resolve(DEFAULT_ITEMS.find((info) => info.value === value) || null);
    });
  }, []);

  const handleSubmit = useCallback((data: PFormValueMap) => {
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
        <PForm size='small'>
          <PFormBody>
            <PFormRow>
              <PFormCol fullWidth={false}>
                <PFormCheckbox
                  name='multiple'
                  text='multiple'
                  checked={multiple}
                  onChange={(checked) => setMultiple(checked)}
                />
                <PFormCheckbox
                  name='openOnFocus'
                  text='openOnFocus'
                  checked={openOnFocus}
                  onChange={(checked) => setOpenOnFocus(checked)}
                />
                <PFormNumber
                  name='limitTags'
                  label='limitTags'
                  helperText='값 표시 개수 지정'
                  width={100}
                  value={limitTags}
                  onChange={setLimitTags}
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
              <PFormAutocomplete
                {...additionalProps}
                name='label'
                items={items}
                value={1}
                labelIcon='RadioButtonChecked'
                label='PFormAutocomplete'
                helperText='labelIcon'
                getOptionDisabled={(option) => option.value === 2}
              />
            </PFormCol>
            <PFormCol>
              <PFormAutocomplete
                {...additionalProps}
                name='required'
                items={items}
                value={''}
                label='PFormAutocomplete'
                required
                helperText='required=true'
              />
            </PFormCol>
            <PFormCol>
              <PFormAutocomplete
                {...additionalProps}
                name='readOnly'
                items={items}
                label='PFormAutocomplete'
                readOnly
                value={1}
                helperText='readOnly=true'
              />
            </PFormCol>
            <PFormCol>
              <PFormAutocomplete
                {...additionalProps}
                name='disabled'
                items={items}
                label='PFormAutocomplete'
                disabled
                helperText='disabled=true'
              />
            </PFormCol>
          </PFormRow>
          <PFormRow>
            <PFormCol xs={3}>
              <PFormAutocomplete
                {...additionalProps}
                name='onLoadItems'
                label='PFormAutocomplete'
                helperText='onLoadItems'
                onLoadItems={handleLoadItems}
              />
            </PFormCol>
            <PFormCol xs={3}>
              <PFormAutocomplete
                {...additionalProps}
                name='asyncLoadItems'
                label='PFormAutocomplete'
                helperText='Async Load Items'
              />
            </PFormCol>{' '}
            <PFormCol xs={3}>
              {multiple ? (
                <PFormAutocomplete
                  {...additionalProps}
                  multiple
                  name='onLoadItems'
                  label='PFormAutocomplete'
                  helperText='async=true'
                  async
                  onLoadItems={handleLoadItems}
                  onAsyncLoadValueItem={handleAsyncLoadMultipleValueItem}
                />
              ) : (
                <PFormAutocomplete
                  {...additionalProps}
                  ref={asyncLoadAutocompleteRef}
                  multiple={false}
                  name='onLoadItems'
                  label='PFormAutocomplete'
                  helperText='async=true'
                  async
                  onLoadItems={handleLoadItems}
                  onAsyncLoadValueItem={handleAsyncLoadValueItem}
                />
              )}
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

export default FormItemAutocomplete;
