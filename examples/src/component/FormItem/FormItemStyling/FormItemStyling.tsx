import React, { useEffect, useState, useRef } from 'react';
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
} from '@pdg/react-form';
import { OutlinedPaper } from '#ccomp';
import { BasicBlock, IconAdornmentBlock, NumberBlock, TextareaBlock, WidthBlock, ColorBlock, RatingBlock } from './sub';

const _components: React.ForwardRefExoticComponent<any>[] = [
  FormText,
  FormEmail,
  FormPassword,
  FormNumber,
  FormTel,
  FormMobile,
  FormUrl,
  FormSearch,
  FormTag,
  FormTextarea,
  FormSelect,
  FormAutocomplete,
  FormCheckbox,
  FormRadioGroup,
  FormToggleButtonGroup,
  FormRating,
  FormDatePicker,
];

function makeLabelValueItems<T>(count: number, leadText: string): T[] {
  return new Array(count).fill(0).map((v, idx) => ({ label: `${leadText}${idx + 1}`, value: `${idx + 1}` })) as T[];
}

const DefaultSelectItems = makeLabelValueItems<FormSelectItem>(50, 'Item ');

const DefaultRadioGroupItems = makeLabelValueItems<FormRadioGroupItem>(5, 'R ');

const DefaultToggleGroupItems = makeLabelValueItems<FormToggleButtonGroupItem>(3, 'Btn ');

const FormItemStyling = () => {
  const formRef = useRef(null);

  //--------------------------------------------------------------------------------------------------------------------

  const [componentName, setComponentName] = useState(FormText.displayName);
  const [componentProps, setComponentProps] = useState<any>();
  const [Component, setComponent] = useState<React.ForwardRefExoticComponent<any>>();
  const [variant, setVariant] = useState<FormProps['variant']>('outlined');
  const [size, setSize] = useState<FormProps['size']>('medium');
  const [color, setColor] = useState<FormProps['color']>('primary');
  const [spacing, setSpacing] = useState<FormProps['spacing']>(2);
  const [labelShrink, setLabelShrink] = useState(false);
  const [focused, setFocused] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

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
      default:
        componentPros.label = componentName;
        break;
    }

    setComponentProps(componentPros);
  }, [componentName, variant, size, color]);

  //--------------------------------------------------------------------------------------------------------------------

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  getName('FormItemStyling', true);

  return (
    <>
      <OutlinedPaper>
        <Form size='small'>
          <FormRow>
            <FormCol>
              <FormToggleButtonGroup
                name='type'
                label='Component'
                items={_components.map((component) =>
                  lv(component.displayName?.substring(4), component.displayName || '')
                )}
                value={componentName}
                onChange={(value) => setComponentName(value)}
                notAllowEmptyValue
                fullWidth={false}
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
                  onChange={setSpacing}
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

          <FormRow line>
            <FormCol>
              <FormButton>취소</FormButton>
            </FormCol>
            <FormCol>
              <FormButton type='submit'>확인</FormButton>
            </FormCol>
          </FormRow>
        </Form>
      )}
    </>
  );
};

export default FormItemStyling;
