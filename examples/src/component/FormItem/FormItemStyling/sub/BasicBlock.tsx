import React from 'react';
import { FormBlock, FormCol, FormRow, FormSelect } from '@pdg/react-form';

const BasicBlock: React.FC<{
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
}> = ({ component: Component, componentProps }) => {
  return (
    <FormBlock label='Basic' line>
      <FormRow>
        <FormCol>
          <Component {...componentProps} name='BasicBlock_default' helperText='기본' />
        </FormCol>
        <FormCol>
          <Component {...componentProps} name='BasicBlock_label' helperText='label' />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name='BasicBlock_placeholder'
            placeholder={Component === FormSelect ? '선택하세요' : '입력하세요'}
            helperText='placeholder'
          />
        </FormCol>
        <FormCol>
          <Component {...componentProps} name='BasicBlock_labelShrink' labelShrink helperText='labelShrink=true' />
        </FormCol>
        <FormCol>
          <Component {...componentProps} name='BasicBlock_focused' focused helperText='focused=true' />
        </FormCol>
      </FormRow>
    </FormBlock>
  );
};

export default BasicBlock;
