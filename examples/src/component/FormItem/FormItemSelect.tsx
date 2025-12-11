import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  PForm,
  PFormButton,
  PFormRow,
  PFormCol,
  PFormSelect,
  PFormCheckbox,
  PFormValueMap,
  PFormSelectCommands,
  PFormBody,
  PFormFooter,
  PFormSelectItems,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/data';

const FormItemSelect = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const asyncLoadSelectRef = useRef<PFormSelectCommands<number>>(null);
  const selectRef = useRef<PFormSelectCommands<number>>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [items] = useState<PFormSelectItems<number>>(() =>
    new Array(5).fill(0).map((v, idx) => lv(idx === 0 ? 'None' : `Item ${idx}`, idx === 0 ? '' : idx))
  );
  const [isMultiple, setIsMultiple] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);

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
    if (asyncLoadSelectRef.current) {
      const { setLoading, setItems } = asyncLoadSelectRef.current;

      if (setLoading) setLoading(true);
      setTimeout(() => {
        if (setItems) setItems(items);
        if (setLoading) setLoading(false);
      }, 5000);
    }
  }, [items]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleLoadItems = useCallback(() => {
    return new Promise<PFormSelectItems<number>>((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  }, [items]);

  const handleSubmit = useCallback((data: PFormValueMap) => {
    ll(data);
  }, []);

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
                  checked={isMultiple}
                  onChange={(checked) => setIsMultiple(checked)}
                />
                <PFormCheckbox
                  name='checkbox'
                  text='checkbox'
                  checked={isCheckbox}
                  disabled={!isMultiple}
                  onChange={(checked) => setIsCheckbox(checked)}
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
            <PFormCol helperText='aaa bbb ccc ddd eee'>
              <PFormSelect
                ref={selectRef}
                name='required'
                items={items}
                label='PFormSelect'
                required
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </PFormCol>
            <PFormCol>
              <PFormSelect
                name='readOnly'
                items={items}
                label='PFormSelect'
                // value={1}
                readOnly
                helperText='readOnly=true'
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </PFormCol>
            <PFormCol>
              <PFormSelect
                name='disabled'
                items={items}
                label='PFormSelect'
                // value={1}
                disabled
                helperText='disabled=true'
                multiple={isMultiple}
                checkbox={isCheckbox}
              />
            </PFormCol>
          </PFormRow>

          <PFormRow line>
            <PFormCol helperText='하나의 FormCol 에 여러개의 Select' helperTextShift fullWidth={false}>
              <PFormSelect
                name='select1'
                label='PFormSelect'
                placeholder='선택하세요'
                items={items}
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
              <PFormSelect
                name='select2'
                label='PFormSelect'
                placeholder='선택하세요'
                items={items}
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
              <PFormSelect
                name='select3'
                label='PFormSelect'
                placeholder='선택하세요'
                items={items}
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
            </PFormCol>
            <PFormCol>
              <PFormSelect
                name='onLoadItems2'
                label='PFormSelect'
                placeholder='선택하세요'
                helperText='onLoadItems'
                multiple={isMultiple}
                checkbox={isCheckbox}
                onLoadItems={handleLoadItems}
              />
            </PFormCol>
            <PFormCol>
              <PFormSelect
                ref={asyncLoadSelectRef}
                name='AsyncLoadItems'
                label='PFormSelect'
                // value={1}
                helperText='Async Load Items'
                multiple={isMultiple}
                checkbox={isCheckbox}
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

export default FormItemSelect;
