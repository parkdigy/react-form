import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  PForm,
  PFormToggleButtonGroup,
  PFormRow,
  PFormCol,
  PFormButton,
  PFormCheckbox,
  PFormToggleButtonGroupItem,
  PFormToggleButtonGroupCommands,
  PFormValueMap,
  PFormBody,
  PFormFooter,
  PFormToggleButtonGroupItems,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/data';

const DEFAULT_ITEMS: PFormToggleButtonGroupItem<number>[] = [
  lv('Item 1', 1),
  lv('Item 2', 2),
  lv('Item 3', 3),
  lv('Item 4', 4),
];

const FormItemToggleButtonGroup = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const asyncLoadToggleButtonGroupRef = useRef<PFormToggleButtonGroupCommands<number>>(null);

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
    return new Promise<PFormToggleButtonGroupItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(DEFAULT_ITEMS);
      }, 2000);
    });
  }, []);

  const handleSubmit = useCallback((data: PFormValueMap) => {
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
        <PForm>
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
                  name='notAllowEmptyValue'
                  text='notAllowEmptyValue'
                  checked={notAllowEmptyValue}
                  onChange={(checked) => setNowAllowEmptyValue(checked)}
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
              <PFormToggleButtonGroup
                {...additionalProps}
                name='label'
                items={items}
                labelIcon='RadioButtonChecked'
                label='PFormToggleButtonGroup'
                helperText='labelIcon'
              />
            </PFormCol>
            <PFormCol>
              <PFormToggleButtonGroup
                {...additionalProps}
                name='required'
                items={items}
                // label='PFormToggleButtonGroup'
                required
                helperText='required=true'
              />
            </PFormCol>
            <PFormCol>
              <PFormToggleButtonGroup
                {...additionalProps}
                name='readOnly'
                items={items}
                label='PFormToggleButtonGroup'
                readOnly
                helperText='readOnly=true'
              />
            </PFormCol>
            <PFormCol>
              <PFormToggleButtonGroup
                {...additionalProps}
                name='disabled'
                items={items}
                label='PFormToggleButtonGroup'
                disabled
                helperText='disabled=true'
              />
            </PFormCol>
          </PFormRow>
          <PFormRow>
            <PFormCol xs={3}>
              <PFormToggleButtonGroup
                {...additionalProps}
                type='checkbox'
                name='checkbox'
                items={items}
                multiple
                label='PFormToggleButtonGroup'
                helperText='type=checkbox, multiple=true'
              />
            </PFormCol>
            <PFormCol xs={3}>
              <PFormToggleButtonGroup
                {...additionalProps}
                type='radio'
                name='radio'
                items={items}
                label='PFormToggleButtonGroup'
                helperText='type=radio'
              />
            </PFormCol>
            <PFormCol xs={3}>
              <PFormToggleButtonGroup
                {...additionalProps}
                type='checkbox'
                name='radio'
                items={items}
                itemWidth={150}
                label='PFormToggleButtonGroup'
                helperText='type=radio, itemWidth=100'
              />
            </PFormCol>
          </PFormRow>

          <PFormRow line>
            <PFormCol xs={3}>
              <PFormToggleButtonGroup
                {...additionalProps}
                name='onLoadItems'
                label='PFormToggleButtonGroup'
                helperText='onLoadItems'
                onLoadItems={handleLoadItems}
              />
            </PFormCol>
            <PFormCol xs={3}>
              <PFormToggleButtonGroup
                {...additionalProps}
                ref={asyncLoadToggleButtonGroupRef}
                name='asyncLoadItems'
                label='PFormToggleButtonGroup'
                helperText='Async Load Items'
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
    </>
  );
};

export default FormItemToggleButtonGroup;
