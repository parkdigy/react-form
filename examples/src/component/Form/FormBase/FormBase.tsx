import React, { useState, useRef, useCallback } from 'react';
import { OutlinedPaper } from '@ccomp';
import {
  PForm,
  PFormProps,
  PFormBlock,
  PFormRow,
  PFormCol,
  PFormButton,
  PFormText,
  PFormSearch,
  PFormEmail,
  PFormSelect,
  PFormCheckbox,
  PFormPassword,
  PFormTel,
  PFormMobile,
  PFormNumber,
  PFormTextarea,
  PFormUrl,
  PFormTag,
  PFormToggleButtonGroup,
  PFormAutocomplete,
  PFormValueMap,
  PFormCommands,
  PFormDatePicker,
  PFormDateTimePicker,
  PFormTimePicker,
  PFormDateRangePicker,
  PFormBody,
  PFormFooter,
  PFormBusinessNo,
  PFormPersonalNo,
  PFormHidden,
} from '../../../../../src';
import { ToggleButtonGroup, Checkbox, RadioGroup, Rating, FileUpload, Switch } from './sub';
import { lv } from '@pdg/data';
import { Box } from '@mui/material';
import { PIconButton } from '@pdg/react-component';

const FormBase = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<PFormCommands>(null);
  const formTextRef = useRef(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [variant, setVariant] = useState<PFormProps['variant']>('outlined');
  const [size, setSize] = useState<PFormProps['size']>('medium');
  const [spacing, setSpacing] = useState<0 | 1 | 2 | 3 | 4 | 5>(2);
  const [formColGap, setFormColGap] = useState<0 | 1 | 1.5 | 2 | 3 | 4>(1.5);
  const [color, setColor] = useState<PFormProps['color']>('primary');
  const [focused, setFocused] = useState<PFormProps['focused']>(false);
  const [labelShrink, setLabelShrink] = useState<PFormProps['labelShrink']>(false);
  const [fullWidth, setFullWidth] = useState<PFormProps['fullWidth']>(true);
  const [fullHeight, setFullHeight] = useState<PFormProps['fullHeight']>(false);
  const [disabled, setDisabled] = useState<PFormProps['disabled']>(false);
  const [submitWhenReturnKey, setSubmitWhenReturnKey] = useState<PFormProps['submitWhenReturnKey']>(false);
  const [isPFormBlock1Hidden, setIsPFormBlock1Hidden] = useState(false);
  const [isPFormBlock2Hidden, setIsPFormBlock2Hidden] = useState(false);
  const [isPFormBlock3Hidden, setIsPFormBlock3Hidden] = useState(false);
  const [isPFormBlock4Hidden, setIsPFormBlock4Hidden] = useState(false);
  const [isPFormBlock5Hidden, setIsPFormBlock5Hidden] = useState(false);

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
    <Box flex={1} style={{ display: 'flex', flexDirection: 'column' }}>
      <OutlinedPaper>
        <PForm size='small'>
          <PFormBody>
            <PFormRow>
              <PFormCol xs={3}>
                <PFormToggleButtonGroup
                  name='variant'
                  label='variant'
                  value={variant}
                  onChange={(value) => setVariant(value)}
                  items={[lv('outlined (Default)', 'outlined'), lv('filled', 'filled'), lv('standard', 'standard')]}
                  notAllowEmptyValue
                  fullWidth={false}
                />
              </PFormCol>
              <PFormCol xs={3}>
                <PFormToggleButtonGroup
                  name='size'
                  label='size'
                  value={size}
                  onChange={(value) => setSize(value)}
                  items={[lv('medium (Default)', 'medium'), lv('small', 'small')]}
                  fullWidth={false}
                  notAllowEmptyValue
                />
              </PFormCol>
              <PFormCol>
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
                />
              </PFormCol>
            </PFormRow>
            <PFormRow>
              <PFormCol>
                <PFormSelect
                  name='spacing'
                  label='spacing'
                  value={spacing}
                  onChange={(v) => (v === '' ? 1.5 : setSpacing(v))}
                  items={[lv('0', 0), lv('1', 1), lv('2 (Default)', 2), lv('3', 3), lv('4', 4), lv('5', 5)]}
                  fullWidth={false}
                />
                <PFormSelect
                  name='formColGap'
                  label='formColGap'
                  value={formColGap}
                  onChange={(v) => (v === '' ? 1.5 : setFormColGap(v))}
                  items={[lv('0', 0), lv('1', 1), lv('1.5 (Default)', 1.5), lv('2', 2), lv('3', 3), lv('4', 4)]}
                  fullWidth={false}
                />
                <PFormCheckbox
                  name='labelShrink'
                  text='labelShrink'
                  checked={labelShrink}
                  onChange={setLabelShrink}
                  fullWidth={false}
                  sx={{ ml: 2 }}
                />
                <PFormCheckbox
                  name='focused'
                  text='focused'
                  checked={focused}
                  onChange={setFocused}
                  fullWidth={false}
                />
                <PFormCheckbox
                  name='fullWidth'
                  text='fullWidth'
                  checked={fullWidth}
                  onChange={setFullWidth}
                  fullWidth={false}
                />
                <PFormCheckbox
                  name='fullHeight'
                  text='fullHeight'
                  checked={fullHeight}
                  onChange={setFullHeight}
                  fullWidth={false}
                />
                <PFormCheckbox
                  name='disabled'
                  text='disabled'
                  checked={disabled}
                  onChange={setDisabled}
                  fullWidth={false}
                />
                <PFormCheckbox
                  name='submitWhenReturnKey'
                  text='submitWhenReturnKey'
                  checked={submitWhenReturnKey}
                  onChange={setSubmitWhenReturnKey}
                  fullWidth={false}
                />
              </PFormCol>
            </PFormRow>
          </PFormBody>
          <PFormFooter>
            <PFormRow>
              <PFormCol>
                <PFormButton onClick={() => setIsPFormBlock1Hidden((isPFormBlock1Hidden) => !isPFormBlock1Hidden)}>
                  {isPFormBlock1Hidden ? 'Show' : 'Hide'} PFormBlock 1
                </PFormButton>
              </PFormCol>
              <PFormCol>
                <PFormButton onClick={() => setIsPFormBlock2Hidden((isPFormBlock2Hidden) => !isPFormBlock2Hidden)}>
                  {isPFormBlock2Hidden ? 'Show' : 'Hide'} PFormBlock 2
                </PFormButton>
              </PFormCol>
              <PFormCol>
                <PFormButton onClick={() => setIsPFormBlock3Hidden((isPFormBlock3Hidden) => !isPFormBlock3Hidden)}>
                  {isPFormBlock3Hidden ? 'Show' : 'Hide'} PFormBlock 3
                </PFormButton>
              </PFormCol>
              <PFormCol>
                <PFormButton onClick={() => setIsPFormBlock4Hidden((isPFormBlock4Hidden) => !isPFormBlock4Hidden)}>
                  {isPFormBlock4Hidden ? 'Show' : 'Hide'} PFormBlock 4
                </PFormButton>
              </PFormCol>
              <PFormCol>
                <PFormButton onClick={() => setIsPFormBlock5Hidden((isPFormBlock5Hidden) => !isPFormBlock5Hidden)}>
                  {isPFormBlock5Hidden ? 'Show' : 'Hide'} PFormBlock 5
                </PFormButton>
              </PFormCol>
            </PFormRow>
          </PFormFooter>
        </PForm>
      </OutlinedPaper>
      <PForm
        ref={formRef}
        spacing={spacing}
        formColGap={formColGap}
        variant={variant}
        size={size}
        color={color}
        focused={focused}
        labelShrink={labelShrink}
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        disabled={disabled}
        submitWhenReturnKey={submitWhenReturnKey}
        style={{ marginTop: 20 }}
        onSubmit={handleSubmit}
      >
        <PFormBody>
          <PFormBlock
            icon='TextFields'
            label='PFormBlock 1'
            hidden={isPFormBlock1Hidden}
            collapse
            collapseIn
            endAdornment={<PIconButton onClick={() => ll('click')}>Info</PIconButton>}
          >
            <PFormRow>
              <PFormCol>
                <PFormHidden name='asdf' />
                <PFormText name='PFormText' label='PFormText' ref={formTextRef} helperText='PFormText' />
              </PFormCol>
              <PFormCol>
                <PFormSearch name='PFormSearch' label='PFormSearch' />
              </PFormCol>
              <PFormCol>
                <PFormEmail name='PFormEmail' label='PFormEmail' />
              </PFormCol>
              <PFormCol>
                <PFormPassword name='PFormPassword' label='PFormPassword' />
              </PFormCol>
            </PFormRow>
            <PFormRow>
              <PFormCol>
                <PFormTel name='PFormTel' label='PFormTel' />
              </PFormCol>
              <PFormCol>
                <PFormMobile name='PFormMobile' label='PFormMobile' />
              </PFormCol>
              <PFormCol>
                <PFormNumber name='PFormNumber' label='PFormNumber' thousandSeparator />
              </PFormCol>
              <PFormCol>
                <PFormUrl name='PFormUrl' label='PFormUrl' />
              </PFormCol>
            </PFormRow>
            <PFormRow>
              <PFormCol xs={3}>
                <PFormBusinessNo name='PFormBusinessNo' label='PFormBusinessNo' />
              </PFormCol>
              <PFormCol xs={3}>
                <PFormPersonalNo name='FormPersonalNo' label='FormPersonalNo' />
              </PFormCol>
            </PFormRow>

            <PFormRow>
              <PFormCol>
                <PFormSelect
                  name='PFormSelect'
                  label='PFormSelect'
                  placeholder='선택하세요.'
                  items={[lv('Item 1', 1), lv('Item 2', 2, { disabled: true }), lv('Item 3', 3)]}
                />
              </PFormCol>
              <PFormCol>
                <PFormAutocomplete
                  name='PFormAutocomplete'
                  label='PFormAutocomplete'
                  multiple
                  items={[
                    lv('Item', 1),
                    lv('Item', 2, { disabled: true }),
                    lv('Item 3', 3),
                    lv('Item 4', 4),
                    lv('Item 5', 5),
                    lv('Item 6', 6),
                  ]}
                />
              </PFormCol>
              <PFormCol>
                <PFormTag name='PFormTag' label='PFormTag' />
              </PFormCol>
            </PFormRow>
          </PFormBlock>

          <PFormBlock icon='CalendarMonth' label='PFormBlock 2' hidden={isPFormBlock2Hidden} collapse collapseIn>
            <PFormRow>
              <PFormCol>
                <PFormDatePicker name='FormDatepicker' label='PFormDatePicker' className='AAA' />
              </PFormCol>
              <PFormCol>
                <PFormDateTimePicker name='PFormDateTimePicker' label='PFormDateTimePicker' time='minute' />
              </PFormCol>
              <PFormCol>
                <PFormTimePicker name='PFormTimePicker' label='PFormTimePicker' time='minute' />
              </PFormCol>
            </PFormRow>
            <PFormRow>
              <PFormCol xs={4}>
                <PFormDateRangePicker name='PFormTimePicker' fromLabel='시작일자' toLabel='종료일자' />
              </PFormCol>
            </PFormRow>
          </PFormBlock>

          <PFormBlock icon='Architecture' label='PFormBlock 3' hidden={isPFormBlock3Hidden} collapse collapseIn>
            <ToggleButtonGroup />
            <Checkbox />
            <RadioGroup />
            <Rating />
            <Switch />
          </PFormBlock>

          <PFormBlock icon='Upload' label='PFormBlock 4' hidden={isPFormBlock4Hidden} collapse collapseIn>
            <FileUpload />
          </PFormBlock>

          <PFormBlock icon='TextSnippet' label='PFormBlock 5' hidden={isPFormBlock5Hidden} collapse collapseIn>
            <PFormRow>
              <PFormCol>
                <PFormTextarea name='FormTextArea' label='FormTextArea' />
              </PFormCol>
            </PFormRow>
          </PFormBlock>
        </PFormBody>
        <PFormFooter>
          <PFormRow>
            <PFormCol>
              <PFormButton type='submit'>확인</PFormButton>
            </PFormCol>
          </PFormRow>
        </PFormFooter>
      </PForm>
    </Box>
  );
};

export default FormBase;
