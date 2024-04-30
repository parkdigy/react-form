import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import {
  Form,
  FormButton,
  FormRow,
  FormCol,
  FormRadioGroup,
  FormText,
  FormPassword,
  FormNumber,
  FormUrl,
  FormEmail,
  FormTel,
  FormMobile,
  FormSearch,
  FormTag,
  FormSelect,
  FormTextarea,
  FormCheckbox,
  FormToggleButtonGroup,
  FormRating,
  FormSelectItem,
  FormRadioGroupItem,
  FormToggleButtonGroupItem,
  FormAutocomplete,
  FormDatePicker,
  FormValueMap,
  FormProps,
  FormBody,
  FormFooter,
  FormCompanyNo,
  FormPersonalNo,
  FormDateRangePicker,
  FormDateTimePicker,
  FormFile,
  FormImageFile,
  FormMonthPicker,
  FormMonthRangePicker,
  FormSwitch,
  FormTimePicker,
  FormYearPicker,
  FormYearRangePicker,
} from '../../../../../src';
import { OutlinedPaper } from '@ccomp';
import { BasicBlock, IconAdornmentBlock, NumberBlock, TextareaBlock, WidthBlock, ColorBlock, RatingBlock } from './sub';
import { lv } from '@pdg/util';

const _components: React.ForwardRefExoticComponent<any>[] = [
  FormText,
  FormEmail,
  FormPassword,
  FormNumber,
  FormTel,
  FormMobile,
  FormUrl,
  FormCompanyNo,
  FormPersonalNo,
  FormSearch,
  FormTag,
  FormTextarea,
  FormSelect as React.ForwardRefExoticComponent<any>,
  FormAutocomplete as React.ForwardRefExoticComponent<any>,
  FormCheckbox,
  FormSwitch,
  FormRadioGroup as React.ForwardRefExoticComponent<any>,
  FormToggleButtonGroup as React.ForwardRefExoticComponent<any>,
  FormFile,
  FormImageFile,
  FormRating,
  FormDatePicker,
  FormDateRangePicker,
  FormDateTimePicker,
  FormTimePicker,
  FormMonthPicker,
  FormMonthRangePicker,
  FormYearPicker,
  FormYearRangePicker,
];

const _componentsItems = _components.map((component) =>
  lv(component.displayName?.substring(4), component.displayName || '')
);

function makeLabelValueItems<T>(count: number, leadText: string): T[] {
  return new Array(count).fill(0).map((v, idx) => ({ label: `${leadText}${idx + 1}`, value: `${idx + 1}` })) as T[];
}

const DefaultSelectItems = makeLabelValueItems<FormSelectItem<number>>(50, 'Item ');

const DefaultRadioGroupItems = makeLabelValueItems<FormRadioGroupItem<string>>(5, 'R ');

const DefaultToggleGroupItems = makeLabelValueItems<FormToggleButtonGroupItem<string>>(3, 'Btn ');

const FormItemStyling = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [componentName, setComponentName] = useState(FormText.displayName);
  const [componentProps, setComponentProps] = useState<any>();
  const [Component, setComponent] = useState<React.ForwardRefExoticComponent<any>>();
  const [variant, setVariant] = useState<FormProps['variant']>('outlined');
  const [size, setSize] = useState<FormProps['size']>('medium');
  const [color, setColor] = useState<FormProps['color']>('primary');
  const [spacing, setSpacing] = useState<FormProps['spacing']>(2);
  const [labelShrink, setLabelShrink] = useState(false);
  const [focused, setFocused] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setComponent(_components.find((component) => component.displayName === componentName));

    const componentPros: any = {};

    switch (componentName) {
      case FormSelect.displayName:
      case FormAutocomplete.displayName:
        componentPros.items = [...DefaultSelectItems];
        break;
      case FormCheckbox.displayName:
        componentPros.checked = true;
        break;
      case FormRadioGroup.displayName:
        componentPros.items = [...DefaultRadioGroupItems];
        componentPros.value = 1;
        break;
      case FormToggleButtonGroup.displayName:
        componentPros.items = [...DefaultToggleGroupItems];
        componentPros.value = 1;
        break;
    }
    switch (componentName) {
      case FormCheckbox.displayName:
        componentPros.text = componentName;
        componentPros.label = componentName;

        break;
      case FormDateRangePicker.displayName:
      case FormMonthRangePicker.displayName:
      case FormYearRangePicker.displayName:
        componentPros.fromLabel = componentName;
        componentPros.toLabel = componentName;
        break;
      case FormTimePicker.displayName:
      case FormDateTimePicker.displayName:
        componentPros.time = 'minute';
        break;
      default:
        componentPros.label = componentName;
        break;
    }

    setComponentProps(componentPros);
  }, [componentName, variant, size, color]);

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
          <FormBody>
            <FormRow>
              <FormCol>
                <FormSelect
                  name='type'
                  label='Component'
                  items={_componentsItems}
                  value={componentName}
                  onChange={(value) => setComponentName(value)}
                  fullWidth={false}
                  width={300}
                />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <Box sx={{ ml: -1, mt: -1 }}>
                  <FormToggleButtonGroup
                    name='variant'
                    label='Variant'
                    value={variant}
                    onChange={(value) => setVariant(value)}
                    items={[lv('outlined (Default)', 'outlined'), lv('filled', 'filled'), lv('standard', 'standard')]}
                    fullWidth={false}
                    notAllowEmptyValue
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <FormToggleButtonGroup
                    name='size'
                    label='size'
                    value={size}
                    onChange={(value) => setSize(value)}
                    items={[lv('medium (Default)', 'medium'), lv('small', 'small')]}
                    fullWidth={false}
                    notAllowEmptyValue
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <FormToggleButtonGroup
                    name='color'
                    label='color'
                    value={color}
                    onChange={(value) => setColor(value)}
                    items={[
                      lv('primary (Default)', 'primary', { color: 'primary' }),
                      lv('secondary', 'secondary', { color: 'secondary' }),
                      lv('error', 'error', { color: 'error' }),
                      lv('info', 'info', { color: 'info' }),
                      lv('success', 'success', { color: 'success' }),
                      lv('warning', 'warning', { color: 'warning' }),
                    ]}
                    notAllowEmptyValue
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                </Box>
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <Box sx={{ ml: -1, mt: -1 }}>
                  <FormSelect
                    name='spacing'
                    label='spacing'
                    value={Number(spacing)}
                    onChange={(v) => (v === '' ? 1.5 : setSpacing(v))}
                    items={[lv('0', 0), lv('1', 1), lv('2 (Default)', 2), lv('3', 3), lv('4', 4), lv('5', 5)]}
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <FormCheckbox
                    name='labelShrink'
                    text='labelShrink'
                    checked={labelShrink}
                    onChange={(checked) => setLabelShrink(checked)}
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <FormCheckbox
                    name='focused'
                    text='focused'
                    checked={focused}
                    onChange={(checked) => setFocused(checked)}
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                </Box>
              </FormCol>
            </FormRow>
          </FormBody>
        </Form>
      </OutlinedPaper>
      <br />
      {Component && (
        <Form
          ref={formRef}
          variant={variant}
          size={size}
          color={color}
          spacing={spacing}
          labelShrink={labelShrink}
          focused={focused}
          onSubmit={handleSubmit}
        >
          <FormBody>
            {![FormCheckbox, FormRadioGroup, FormToggleButtonGroup, FormRating].includes(Component) && (
              <>
                <BasicBlock component={Component} componentProps={componentProps} />
                <IconAdornmentBlock component={Component} componentProps={componentProps} />
              </>
            )}

            <WidthBlock component={Component} componentProps={componentProps} />
            <ColorBlock component={Component} componentProps={componentProps} />
            <ColorBlock component={Component} componentProps={componentProps} focused />

            {Component === FormNumber && <NumberBlock componentProps={componentProps} />}
            {Component === FormTextarea && <TextareaBlock componentProps={componentProps} />}
            {Component === FormRating && <RatingBlock componentProps={componentProps} />}
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

export default FormItemStyling;
