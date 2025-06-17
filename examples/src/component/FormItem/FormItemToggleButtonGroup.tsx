import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  FormBody,
  FormFooter,
  FormToggleButtonGroupItems,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/data';

const DEFAULT_ITEMS: FormToggleButtonGroupItem<number>[] = [
  lv('Item 1', 1),
  lv('Item 2', 2),
  lv('Item 3', 3),
  lv('Item 4', 4),
];

const FormItemToggleButtonGroup = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const asyncLoadToggleButtonGroupRef = useRef<FormToggleButtonGroupCommands<number>>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [items] = useState(DEFAULT_ITEMS);
  const [multiple, setMultiple] = useState(false);
  const [notAllowEmptyValue, setNowAllowEmptyValue] = useState(false);

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
    if (asyncLoadToggleButtonGroupRef.current) {
      const { setLoading, setItems } = asyncLoadToggleButtonGroupRef.current;

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
    return new Promise<FormToggleButtonGroupItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(DEFAULT_ITEMS);
      }, 2000);
    });
  }, []);

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const additionalProps = useMemo(() => ({ multiple, notAllowEmptyValue }), [multiple, notAllowEmptyValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

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
                  name='notAllowEmptyValue'
                  text='notAllowEmptyValue'
                  checked={notAllowEmptyValue}
                  onChange={(checked) => setNowAllowEmptyValue(checked)}
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
                // label='FormToggleButtonGroup'
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
          <FormRow>
            <FormCol xs={3}>
              <FormToggleButtonGroup
                {...additionalProps}
                type='checkbox'
                name='checkbox'
                items={items}
                multiple
                label='FormToggleButtonGroup'
                helperText='type=checkbox, multiple=true'
              />
            </FormCol>
            <FormCol xs={3}>
              <FormToggleButtonGroup
                {...additionalProps}
                type='radio'
                name='radio'
                items={items}
                label='FormToggleButtonGroup'
                helperText='type=radio'
              />
            </FormCol>
            <FormCol xs={3}>
              <FormToggleButtonGroup
                {...additionalProps}
                type='checkbox'
                name='radio'
                items={items}
                itemWidth={150}
                label='FormToggleButtonGroup'
                helperText='type=radio, itemWidth=100'
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

export default FormItemToggleButtonGroup;
