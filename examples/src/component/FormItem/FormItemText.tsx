import React, { useEffect, useState, useRef, useCallback } from 'react';
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

const _components: React.ForwardRefExoticComponent<any>[] = [
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
  lv(component.displayName?.substring(4), component.displayName || '')
);

const FormItemText = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [componentName, setComponentName] = useState<string | undefined>(PFormText.displayName);
  const [Component, setComponent] = useState<React.ForwardRefExoticComponent<any>>();
  const [value, setValue] = useState<string>('asdf');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setComponent(_components.find((component) => component.displayName === componentName));
    switch (componentName) {
      case PFormText.displayName:
        setValue('텍스트');
        break;
      case PFormEmail.displayName:
        setValue('test@gmail.com');
        break;
      case PFormTel.displayName:
        setValue('0200000000');
        break;
      case PFormMobile.displayName:
        setValue('01000000000');
        break;
      case PFormUrl.displayName:
        setValue('https://www.google.com');
        break;
      case PFormSearch.displayName:
        setValue('검색어');
        break;
      case PFormBusinessNo.displayName:
        setValue('1234567890');
        break;
      case PFormPersonalNo.displayName:
        setValue('1234567890123');
        break;
      default:
        setValue(componentName || '');
        break;
    }
  }, [componentName]);

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
