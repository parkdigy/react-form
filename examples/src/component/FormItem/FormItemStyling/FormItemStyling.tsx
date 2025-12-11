import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import {
  PForm,
  PFormButton,
  PFormRow,
  PFormCol,
  PFormRadioGroup,
  PFormText,
  PFormPassword,
  PFormNumber,
  PFormUrl,
  PFormEmail,
  PFormTel,
  PFormMobile,
  PFormSearch,
  PFormTag,
  PFormSelect,
  PFormTextarea,
  PFormCheckbox,
  PFormToggleButtonGroup,
  PFormRating,
  PFormSelectItem,
  PFormRadioGroupItem,
  PFormToggleButtonGroupItem,
  PFormAutocomplete,
  PFormDatePicker,
  PFormValueMap,
  PFormProps,
  PFormBody,
  PFormFooter,
  PFormBusinessNo,
  PFormPersonalNo,
  PFormDateRangePicker,
  PFormDateTimePicker,
  PFormFile,
  PFormImageFile,
  PFormMonthPicker,
  PFormMonthRangePicker,
  PFormSwitch,
  PFormTimePicker,
  PFormYearPicker,
  PFormYearRangePicker,
} from '../../../../../src';
import { OutlinedPaper } from '@ccomp';
import { BasicBlock, IconAdornmentBlock, NumberBlock, TextareaBlock, WidthBlock, ColorBlock, RatingBlock } from './sub';
import { contains } from '@pdg/compare';
import { lv } from '@pdg/data';

const _components: React.ForwardRefExoticComponent<any>[] = [
  PFormText,
  PFormEmail,
  PFormPassword,
  PFormNumber,
  PFormTel,
  PFormMobile,
  PFormUrl,
  PFormBusinessNo,
  PFormPersonalNo,
  PFormSearch,
  PFormTag,
  PFormTextarea,
  PFormSelect as React.ForwardRefExoticComponent<any>,
  PFormAutocomplete as React.ForwardRefExoticComponent<any>,
  PFormCheckbox,
  PFormSwitch,
  PFormRadioGroup as React.ForwardRefExoticComponent<any>,
  PFormToggleButtonGroup as React.ForwardRefExoticComponent<any>,
  PFormFile,
  PFormImageFile,
  PFormRating,
  PFormDatePicker,
  PFormDateRangePicker,
  PFormDateTimePicker,
  PFormTimePicker,
  PFormMonthPicker,
  PFormMonthRangePicker,
  PFormYearPicker,
  PFormYearRangePicker,
];

const _componentsItems = _components.map((component) =>
  lv(component.displayName?.substring(5), component.displayName || '')
);

function makeLabelValueItems<T>(count: number, leadText: string): T[] {
  return new Array(count).fill(0).map((v, idx) => ({ label: `${leadText}${idx + 1}`, value: `${idx + 1}` })) as T[];
}

const DefaultSelectItems = makeLabelValueItems<PFormSelectItem<number>>(50, 'Item ');

const DefaultRadioGroupItems = makeLabelValueItems<PFormRadioGroupItem<string>>(5, 'R ');

const DefaultToggleGroupItems = makeLabelValueItems<PFormToggleButtonGroupItem<string>>(3, 'Btn ');

const FormItemStyling = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [componentName, setComponentName] = useState(PFormText.displayName);
  const [componentProps, setComponentProps] = useState<any>();
  const [Component, setComponent] = useState<any>();
  const [variant, setVariant] = useState<PFormProps['variant']>('outlined');
  const [size, setSize] = useState<PFormProps['size']>('medium');
  const [color, setColor] = useState<PFormProps['color']>('primary');
  const [spacing, setSpacing] = useState<0|1|2|3|4|5>(2);
  const [labelShrink, setLabelShrink] = useState(false);
  const [focused, setFocused] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setComponent(_components.find((component) => component.displayName === componentName));

    const componentPros: any = {};

    switch (componentName) {
      case PFormSelect.displayName:
      case PFormAutocomplete.displayName:
        componentPros.items = [...DefaultSelectItems];
        break;
      case PFormCheckbox.displayName:
        componentPros.checked = true;
        break;
      case PFormRadioGroup.displayName:
        componentPros.items = [...DefaultRadioGroupItems];
        componentPros.value = 1;
        break;
      case PFormToggleButtonGroup.displayName:
        componentPros.items = [...DefaultToggleGroupItems];
        componentPros.value = 1;
        break;
    }
    switch (componentName) {
      case PFormCheckbox.displayName:
        componentPros.text = componentName;
        componentPros.label = componentName;

        break;
      case PFormDateRangePicker.displayName:
      case PFormMonthRangePicker.displayName:
      case PFormYearRangePicker.displayName:
        componentPros.fromLabel = componentName;
        componentPros.toLabel = componentName;
        break;
      case PFormTimePicker.displayName:
      case PFormDateTimePicker.displayName:
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
              <PFormCol>
                <PFormSelect
                  name='type'
                  label='Component'
                  items={_componentsItems}
                  value={componentName}
                  onChange={(value) => setComponentName(value)}
                  fullWidth={false}
                  width={300}
                />
              </PFormCol>
            </PFormRow>
            <PFormRow>
              <PFormCol>
                <Box sx={{ ml: -1, mt: -1 }}>
                  <PFormToggleButtonGroup
                    name='variant'
                    label='Variant'
                    value={variant}
                    onChange={(value) => setVariant(value)}
                    items={[lv('outlined (Default)', 'outlined'), lv('filled', 'filled'), lv('standard', 'standard')]}
                    fullWidth={false}
                    notAllowEmptyValue
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <PFormToggleButtonGroup
                    name='size'
                    label='size'
                    value={size}
                    onChange={(value) => setSize(value)}
                    items={[lv('medium (Default)', 'medium'), lv('small', 'small')]}
                    fullWidth={false}
                    notAllowEmptyValue
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <PFormToggleButtonGroup
                    name='color'
                    label='color'
                    value={color}
                    onChange={(value) => setColor(value)}
                    items={[
                      lv('primary (Default)', 'primary', { color: 'primary' as const }),
                      lv('secondary', 'secondary', { color: 'secondary' as const }),
                      lv('error', 'error', { color: 'error' as const }),
                      lv('info', 'info', { color: 'info' as const }),
                      lv('success', 'success', { color: 'success' as const }),
                      lv('warning', 'warning', { color: 'warning' as const }),
                    ]}
                    notAllowEmptyValue
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                </Box>
              </PFormCol>
            </PFormRow>
            <PFormRow>
              <PFormCol>
                <Box sx={{ ml: -1, mt: -1 }}>
                  <PFormSelect
                    name='spacing'
                    label='spacing'
                    value={spacing}
                    onChange={(v) => (v === '' ? 1.5 : setSpacing(v))}
                    items={[lv('0', 0), lv('1', 1), lv('2 (Default)', 2), lv('3', 3), lv('4', 4), lv('5', 5)]}
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <PFormCheckbox
                    name='labelShrink'
                    text='labelShrink'
                    checked={labelShrink}
                    onChange={(checked) => setLabelShrink(checked)}
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                  <PFormCheckbox
                    name='focused'
                    text='focused'
                    checked={focused}
                    onChange={(checked) => setFocused(checked)}
                    fullWidth={false}
                    sx={{ ml: 1, mt: 1 }}
                  />
                </Box>
              </PFormCol>
            </PFormRow>
          </PFormBody>
        </PForm>
      </OutlinedPaper>
      <br />
      {Component && (
        <PForm
          ref={formRef}
          variant={variant}
          size={size}
          color={color}
          spacing={spacing}
          labelShrink={labelShrink}
          focused={focused}
          onSubmit={handleSubmit}
        >
          <PFormBody>
            {!contains([PFormCheckbox, PFormRadioGroup, PFormToggleButtonGroup, PFormRating], Component) && (
              <>
                <BasicBlock component={Component} componentProps={componentProps} />
                <IconAdornmentBlock component={Component} componentProps={componentProps} />
              </>
            )}

            <WidthBlock component={Component} componentProps={componentProps} />
            <ColorBlock component={Component} componentProps={componentProps} />
            <ColorBlock component={Component} componentProps={componentProps} focused />

            {Component === PFormNumber && <NumberBlock componentProps={componentProps} />}
            {Component === PFormTextarea && <TextareaBlock componentProps={componentProps} />}
            {Component === PFormRating && <RatingBlock componentProps={componentProps} />}
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

export default FormItemStyling;
