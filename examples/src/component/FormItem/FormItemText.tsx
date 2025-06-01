import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  Form,
  FormButton,
  FormRow,
  FormCol,
  FormText,
  FormPassword,
  FormUrl,
  FormEmail,
  FormTel,
  FormMobile,
  FormSearch,
  FormToggleButtonGroup,
  FormToggleButtonGroupItem,
  FormValueMap,
  FormBody,
  FormFooter,
  FormBusinessNo,
  FormPersonalNo,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';
import { lv } from '@pdg/util';

const _components: React.ForwardRefExoticComponent<any>[] = [
  FormText,
  FormEmail,
  FormPassword,
  FormTel,
  FormMobile,
  FormUrl,
  FormSearch,
  FormBusinessNo,
  FormPersonalNo,
];

const _componentsItems = _components.map<FormToggleButtonGroupItem<string>>((component) =>
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

  const [componentName, setComponentName] = useState<string | undefined>(FormText.displayName);
  const [Component, setComponent] = useState<React.ForwardRefExoticComponent<any>>();
  const [value, setValue] = useState<string>('asdf');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setComponent(_components.find((component) => component.displayName === componentName));
    switch (componentName) {
      case FormText.displayName:
        setValue('텍스트');
        break;
      case FormEmail.displayName:
        setValue('test@gmail.com');
        break;
      case FormTel.displayName:
        setValue('0200000000');
        break;
      case FormMobile.displayName:
        setValue('01000000000');
        break;
      case FormUrl.displayName:
        setValue('https://www.google.com');
        break;
      case FormSearch.displayName:
        setValue('검색어');
        break;
      case FormBusinessNo.displayName:
        setValue('1234567890');
        break;
      case FormPersonalNo.displayName:
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

  const handleSubmit = useCallback((data: FormValueMap) => {
    ll(data);
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <OutlinedPaper>
        <Form size='small'>
          <FormRow>
            <FormCol>
              <FormToggleButtonGroup
                name='type'
                label='Component'
                items={_componentsItems}
                value={componentName}
                onChange={(value) => setComponentName(value)}
                fullWidth={false}
                notAllowEmptyValue
              />
            </FormCol>
          </FormRow>
        </Form>
      </OutlinedPaper>
      <br />
      {Component && (
        <Form ref={formRef} fullHeight onSubmit={handleSubmit}>
          <FormBody>
            <FormRow>
              <FormCol>
                <Component name='required' label={componentName} required helperText='required=true' />
              </FormCol>
              <FormCol>
                <Component name='readOnly' label={componentName} value={value} readOnly helperText='readOnly=true' />
              </FormCol>
              <FormCol>
                <Component name='disabled' label={componentName} value={value} disabled helperText='disabled=true' />
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
      )}
    </>
  );
};

export default FormItemText;
