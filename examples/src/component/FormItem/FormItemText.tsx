import React, { useState, useRef, useCallback } from 'react';
import {
  PForm,
  PFormButton,
  PFormRow,
  PFormCol,
  PFormText,
  PFormPassword,
  PFormUrl,
  PFormEmail,
  PFormTel,
  PFormMobile,
  PFormSearch,
  PFormToggleButtonGroup,
  PFormToggleButtonGroupItem,
  PFormValueMap,
  PFormBody,
  PFormFooter,
  PFormBusinessNo,
  PFormPersonalNo,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/data';
import { useChanged } from '@pdg/react-hook';

const _components: React.ElementType[] = [
  PFormText,
  PFormEmail,
  PFormPassword,
  PFormTel,
  PFormMobile,
  PFormUrl,
  PFormSearch,
  PFormBusinessNo,
  PFormPersonalNo,
];

const _componentsItems = _components.map<PFormToggleButtonGroupItem<string>>((component) =>
  lv((component as any).name?.substring(5), (component as any).name || '')
);

const FormItemText = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [componentName, setComponentName] = useState<string | undefined>(PFormText.name);
  const [Component, setComponent] = useState<React.ElementType>();
  const [value, setValue] = useState<string>('asdf');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  if (useChanged(componentName, true)) {
    setComponent(() => _components.find((component) => (component as any).name === componentName));

    switch (componentName) {
      case PFormText.name:
        setValue('텍스트');
        break;
      case PFormEmail.name:
        setValue('test@gmail.com');
        break;
      case PFormTel.name:
        setValue('0200000000');
        break;
      case PFormMobile.name:
        setValue('01000000000');
        break;
      case PFormUrl.name:
        setValue('https://www.google.com');
        break;
      case PFormSearch.name:
        setValue('검색어');
        break;
      case PFormBusinessNo.name:
        setValue('1234567890');
        break;
      case PFormPersonalNo.name:
        setValue('1234567890123');
        break;
      default:
        setValue(componentName || '');
        break;
    }
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

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
          <PFormRow>
            <PFormCol>
              <PFormToggleButtonGroup
                name='type'
                label='Component'
                items={_componentsItems}
                value={componentName}
                onChange={(value) => setComponentName(value)}
                fullWidth={false}
                notAllowEmptyValue
              />
            </PFormCol>
          </PFormRow>
        </PForm>
      </OutlinedPaper>
      <br />
      {Component && (
        <PForm ref={formRef} fullHeight onSubmit={handleSubmit}>
          <PFormBody>
            <PFormRow>
              <PFormCol>
                <Component name='required' label={componentName} required helperText='required=true' />
              </PFormCol>
              <PFormCol>
                <Component name='readOnly' label={componentName} value={value} readOnly helperText='readOnly=true' />
              </PFormCol>
              <PFormCol>
                <Component name='disabled' label={componentName} value={value} disabled helperText='disabled=true' />
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
      )}
    </>
  );
};

export default FormItemText;
