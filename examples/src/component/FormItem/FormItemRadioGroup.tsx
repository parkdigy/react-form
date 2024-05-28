import React, { useCallback, useEffect, useRef } from 'react';
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
import { lv } from '@pdg/util';

const DEFAULT_ITEMS: FormRadioGroupItem<number>[] = new Array(3)
  .fill(0)
  .map((v, idx) => lv(`Item ${idx + 1}`, idx + 1));

const DEFAULT_ITEMS_2: FormRadioGroupItem<number>[] = new Array(10)
  .fill(0)
  .map((v, idx) => lv(`Item ${idx + 1}`, idx + 1));

const FormItemRadioGroup = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const asyncLoadRadioGroupRef = useRef<FormRadioGroupCommands<number>>(null);

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const loadList = useCallback(() => {
    if (asyncLoadRadioGroupRef.current) {
      const { setLoading, setItems } = asyncLoadRadioGroupRef.current;

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

  const handleLoadItems = useCallback(() => {
    return new Promise<FormRadioGroupItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(DEFAULT_ITEMS);
      }, 2000);
    });
  }, []);

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Form fullHeight onSubmit={handleSubmit}>
      <FormBody>
        <FormRow>
          <FormCol>
            <FormRadioGroup
              name='label'
              items={DEFAULT_ITEMS}
              labelIcon='RadioButtonChecked'
              label='FormRadioGroup'
              helperText='labelIcon'
            />
          </FormCol>
          <FormCol>
            <FormRadioGroup
              name='required'
              items={DEFAULT_ITEMS_2}
              label='FormRadioGroup'
              required
              helperText='required=true'
            />
          </FormCol>
          <FormCol>
            <FormRadioGroup
              name='readOnly'
              items={DEFAULT_ITEMS}
              label='FormRadioGroup'
              readOnly
              helperText='readOnly=true'
            />
          </FormCol>
          <FormCol>
            <FormRadioGroup
              name='disabled'
              items={DEFAULT_ITEMS}
              label='FormRadioGroup'
              disabled
              helperText='disabled=true'
            />
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
              items={DEFAULT_ITEMS}
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
