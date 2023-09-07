import React, { useEffect, useState, useRef } from 'react';
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
} from '../../../../src';
import { OutlinedPaper } from '#ccomp';

const _components: React.ForwardRefExoticComponent<any>[] = [
  FormText,
  FormEmail,
  FormPassword,
  FormTel,
  FormMobile,
  FormUrl,
  FormSearch,
];

const FormItemText = () => {
  const formRef = useRef(null);

  //--------------------------------------------------------------------------------------------------------------------

  const [componentName, setComponentName] = useState<string | undefined>(FormText.displayName);
  const [Component, setComponent] = useState<React.ForwardRefExoticComponent<any>>();
  const [value, setValue] = useState<string>('asdf');

  //--------------------------------------------------------------------------------------------------------------------

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
      default:
        setValue(componentName || '');
        break;
    }
  }, [componentName]);

  //--------------------------------------------------------------------------------------------------------------------

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <OutlinedPaper>
        <Form size='small'>
          <FormRow>
            <FormCol>
              <FormToggleButtonGroup<string>
                name='type'
                label='Component'
                items={_components.map<FormToggleButtonGroupItem<string>>((component) =>
                  lv(component.displayName?.substring(4), component.displayName || '')
                )}
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
