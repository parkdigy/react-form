import React, { useState, useRef } from 'react';
import { OutlinedPaper } from '#ccomp';
import {
  Form,
  FormProps,
  FormBlock,
  FormRow,
  FormCol,
  FormButton,
  FormText,
  FormSearch,
  FormEmail,
  FormSelect,
  FormCheckbox,
  FormPassword,
  FormTel,
  FormMobile,
  FormNumber,
  FormTextarea,
  FormUrl,
  FormTag,
  FormToggleButtonGroup,
  FormAutocomplete,
  FormValueMap,
  FormCommands,
  FormDatePicker,
  FormDateTimePicker,
  FormTimePicker,
  FormDateRangePicker,
  FormBody,
  FormFooter,
  FormCompanyNo,
  FormPersonalNo,
} from '../../../../../src';
import { ToggleButtonGroup, Checkbox, RadioGroup, Rating, FileUpload } from './sub';
import TextFieldsIcon from '@mui/icons-material/TextFields';

const FormBase = () => {
  const formRef = useRef<FormCommands>(null);
  const formTextRef = useRef(null);

  //--------------------------------------------------------------------------------------------------------------------

  const [variant, setVariant] = useState<FormProps['variant']>('outlined');
  const [size, setSize] = useState<FormProps['size']>('medium');
  const [spacing, setSpacing] = useState<FormProps['spacing']>(2);
  const [formColGap, setFormColGap] = useState<FormProps['formColGap']>(1.5);
  const [color, setColor] = useState<FormProps['color']>('primary');
  const [focused, setFocused] = useState<FormProps['focused']>(false);
  const [labelShrink, setLabelShrink] = useState<FormProps['labelShrink']>(false);
  const [fullWidth, setFullWidth] = useState<FormProps['fullWidth']>(true);
  const [isFormBlock1Hidden, setIsFormBlock1Hidden] = useState(false);
  const [isFormBlock2Hidden, setIsFormBlock2Hidden] = useState(false);
  const [isFormBlock3Hidden, setIsFormBlock3Hidden] = useState(false);
  const [isFormBlock4Hidden, setIsFormBlock4Hidden] = useState(false);
  const [isFormBlock5Hidden, setIsFormBlock5Hidden] = useState(false);

  //--------------------------------------------------------------------------------------------------------------------

  function handleSubmit(data: FormValueMap) {
    ll(data);
  }

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <OutlinedPaper>
        <Form size='small'>
          <FormBody>
            <FormRow>
              <FormCol xs={3}>
                <FormToggleButtonGroup<Exclude<FormProps['variant'], undefined>>
                  name='variant'
                  label='variant'
                  value={variant}
                  onChange={(value) => setVariant(value)}
                  items={[lv('outlined (Default)', 'outlined'), lv('filled', 'filled'), lv('standard', 'standard')]}
                  notAllowEmptyValue
                  fullWidth={false}
                />
              </FormCol>
              <FormCol xs={3}>
                <FormToggleButtonGroup<Exclude<FormProps['size'], undefined>>
                  name='size'
                  label='size'
                  value={size}
                  onChange={(value) => setSize(value)}
                  items={[lv('medium (Default)', 'medium'), lv('small', 'small')]}
                  fullWidth={false}
                  notAllowEmptyValue
                />
              </FormCol>
              <FormCol>
                <FormToggleButtonGroup<Exclude<FormProps['color'], undefined>>
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
                />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <FormSelect<number>
                  name='spacing'
                  label='spacing'
                  value={Number(spacing)}
                  onChange={setSpacing}
                  items={[lv('0', 0), lv('1', 1), lv('2 (Default)', 2), lv('3', 3), lv('4', 4), lv('5', 5)]}
                  fullWidth={false}
                />
                <FormSelect<number>
                  name='formColGap'
                  label='formColGap'
                  value={Number(formColGap)}
                  onChange={setFormColGap}
                  items={[lv('0', 0), lv('1', 1), lv('1.5 (Default)', 1.5), lv('2', 2), lv('3', 3), lv('4', 4)]}
                  fullWidth={false}
                />
                <FormCheckbox
                  name='labelShrink'
                  text='labelShrink'
                  checked={labelShrink}
                  onChange={setLabelShrink}
                  fullWidth={false}
                  sx={{ ml: 2 }}
                />
                <FormCheckbox name='focused' text='focused' checked={focused} onChange={setFocused} fullWidth={false} />
                <FormCheckbox
                  name='fullWidth'
                  text='fullWidth'
                  checked={fullWidth}
                  onChange={setFullWidth}
                  fullWidth={false}
                />
              </FormCol>
            </FormRow>
          </FormBody>
          <FormFooter>
            <FormRow>
              <FormCol>
                <FormButton onClick={() => setIsFormBlock1Hidden((isFormBlock1Hidden) => !isFormBlock1Hidden)}>
                  {isFormBlock1Hidden ? 'Show' : 'Hide'} FormBlock 1
                </FormButton>
              </FormCol>
              <FormCol>
                <FormButton onClick={() => setIsFormBlock2Hidden((isFormBlock2Hidden) => !isFormBlock2Hidden)}>
                  {isFormBlock2Hidden ? 'Show' : 'Hide'} FormBlock 2
                </FormButton>
              </FormCol>
              <FormCol>
                <FormButton onClick={() => setIsFormBlock3Hidden((isFormBlock3Hidden) => !isFormBlock3Hidden)}>
                  {isFormBlock3Hidden ? 'Show' : 'Hide'} FormBlock 3
                </FormButton>
              </FormCol>
              <FormCol>
                <FormButton onClick={() => setIsFormBlock4Hidden((isFormBlock4Hidden) => !isFormBlock4Hidden)}>
                  {isFormBlock4Hidden ? 'Show' : 'Hide'} FormBlock 4
                </FormButton>
              </FormCol>
              <FormCol>
                <FormButton onClick={() => setIsFormBlock5Hidden((isFormBlock5Hidden) => !isFormBlock5Hidden)}>
                  {isFormBlock5Hidden ? 'Show' : 'Hide'} FormBlock 5
                </FormButton>
              </FormCol>
            </FormRow>
          </FormFooter>
        </Form>
      </OutlinedPaper>
      <Form
        ref={formRef}
        spacing={spacing}
        formColGap={formColGap}
        variant={variant}
        size={size}
        color={color}
        focused={focused}
        labelShrink={labelShrink}
        fullWidth={fullWidth}
        style={{ marginTop: 20 }}
        onSubmit={handleSubmit}
      >
        <FormBody>
          <FormBlock icon={TextFieldsIcon} label='FormBlock 1' hidden={isFormBlock1Hidden} collapse collapseIn>
            <FormRow>
              <FormCol>
                <FormText name='FormText' label='FormText' ref={formTextRef} helperText='FormText' />
              </FormCol>
              <FormCol>
                <FormSearch name='FormSearch' label='FormSearch' />
              </FormCol>
              <FormCol>
                <FormEmail name='FormEmail' label='FormEmail' />
              </FormCol>
              <FormCol>
                <FormPassword name='FormPassword' label='FormPassword' />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <FormTel name='FormTel' label='FormTel' />
              </FormCol>
              <FormCol>
                <FormMobile name='FormMobile' label='FormMobile' />
              </FormCol>
              <FormCol>
                <FormNumber name='FormNumber' label='FormNumber' thousandSeparator />
              </FormCol>
              <FormCol>
                <FormUrl name='FormUrl' label='FormUrl' />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol xs={3}>
                <FormCompanyNo name='FormCompanyNo' label='FormCompanyNo' />
              </FormCol>
              <FormCol xs={3}>
                <FormPersonalNo name='FormPersonalNo' label='FormPersonalNo' />
              </FormCol>
            </FormRow>

            <FormRow>
              <FormCol>
                <FormSelect<number>
                  name='FormSelect'
                  label='FormSelect'
                  placeholder='선택하세요.'
                  items={[lv('Item 1', 1), lv('Item 2', 2, { disabled: true }), lv('Item 3', 3)]}
                />
              </FormCol>
              <FormCol>
                <FormAutocomplete<number>
                  name='FormAutocomplete'
                  label='FormAutocomplete'
                  multiple
                  items={[lv('Item', 1), lv('Item', 2, { disabled: true }), lv('Item 3', 3)]}
                />
              </FormCol>
              <FormCol>
                <FormTag name='FormTag' label='FormTag' />
              </FormCol>
            </FormRow>
          </FormBlock>

          <FormBlock icon='CalendarMonth' label='FormBlock 2' hidden={isFormBlock2Hidden} collapse collapseIn>
            <FormRow>
              <FormCol>
                <FormDatePicker name='FormDatepicker' label='FormDatePicker' className='AAA' />
              </FormCol>
              <FormCol>
                <FormDateTimePicker name='FormDateTimePicker' label='FormDateTimePicker' time='minute' />
              </FormCol>
              <FormCol>
                <FormTimePicker name='FormTimePicker' label='FormTimePicker' time='minute' />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol xs={4}>
                <FormDateRangePicker name='FormTimePicker' startLabel='시작일자' endLabel='종료일자' />
              </FormCol>
            </FormRow>
          </FormBlock>

          <FormBlock icon='Architecture' label='FormBlock 3' hidden={isFormBlock3Hidden} collapse collapseIn>
            <ToggleButtonGroup />
            <Checkbox />
            <RadioGroup />
            <Rating />
          </FormBlock>

          <FormBlock icon='Upload' label='FormBlock 4' hidden={isFormBlock4Hidden} collapse collapseIn>
            <FileUpload />
          </FormBlock>

          <FormBlock icon='TextSnippet' label='FormBlock 5' hidden={isFormBlock5Hidden} collapse collapseIn>
            <FormRow>
              <FormCol>
                <FormTextarea name='FormTextArea' label='FormTextArea' />
              </FormCol>
            </FormRow>
          </FormBlock>
        </FormBody>
        <FormFooter>
          <FormRow>
            <FormCol>
              <FormButton type='submit'>확인</FormButton>
            </FormCol>
          </FormRow>
        </FormFooter>
      </Form>
    </div>
  );
};

export default FormBase;
