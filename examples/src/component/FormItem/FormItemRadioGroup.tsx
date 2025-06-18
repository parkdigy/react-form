import React, { useCallback, useEffect, useRef } from 'react';
import {
  PForm,
  PFormRadioGroup,
  PFormRow,
  PFormCol,
  PFormButton,
  PFormRadioGroupCommands,
  PFormRadioGroupItem,
  PFormValueMap,
  PFormBody,
  PFormFooter,
  PFormRadioGroupItems,
} from '../../../../src';
import { lv } from '@pdg/data';

const DEFAULT_ITEMS: PFormRadioGroupItem<number>[] = new Array(3)
  .fill(0)
  .map((v, idx) => lv(`Item ${idx + 1}`, idx + 1));

const DEFAULT_ITEMS_2: PFormRadioGroupItem<number>[] = new Array(10)
  .fill(0)
  .map((v, idx) => lv(`Item ${idx + 1}`, idx + 1));

const FormItemRadioGroup = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const asyncLoadRadioGroupRef = useRef<PFormRadioGroupCommands<number>>(null);

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
    return new Promise<PFormRadioGroupItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(DEFAULT_ITEMS);
      }, 2000);
    });
  }, []);

  const handleSubmit = useCallback((data: PFormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PForm fullHeight onSubmit={handleSubmit}>
      <PFormBody>
        <PFormRow>
          <PFormCol>
            <PFormRadioGroup
              name='label'
              items={DEFAULT_ITEMS}
              labelIcon='RadioButtonChecked'
              label='PFormRadioGroup'
              helperText='labelIcon'
            />
          </PFormCol>
          <PFormCol>
            <PFormRadioGroup
              name='required'
              items={DEFAULT_ITEMS_2}
              label='PFormRadioGroup'
              required
              helperText='required=true'
            />
          </PFormCol>
          <PFormCol>
            <PFormRadioGroup
              name='readOnly'
              items={DEFAULT_ITEMS}
              label='PFormRadioGroup'
              readOnly
              helperText='readOnly=true'
            />
          </PFormCol>
          <PFormCol>
            <PFormRadioGroup
              name='disabled'
              items={DEFAULT_ITEMS}
              label='PFormRadioGroup'
              disabled
              helperText='disabled=true'
            />
          </PFormCol>
        </PFormRow>

        <PFormRow line>
          <PFormCol xs={3}>
            <PFormRadioGroup
              name='onLoadItems'
              label='PFormRadioGroup'
              helperText='onLoadItems'
              onLoadItems={handleLoadItems}
            />
          </PFormCol>
          <PFormCol xs={3}>
            <PFormRadioGroup
              ref={asyncLoadRadioGroupRef}
              name='asyncLoadItems'
              label='PFormRadioGroup'
              helperText='Async Load Items'
            />
          </PFormCol>
        </PFormRow>

        <PFormRow line>
          <PFormCol>
            <PFormRadioGroup
              name='inline'
              items={DEFAULT_ITEMS}
              inline={false}
              label='PFormRadioGroup'
              helperText='inline=false'
            />
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
  );
};

export default FormItemRadioGroup;
