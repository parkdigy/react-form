import React from 'react';
import { PFormBlock, PFormCol, PFormRow, PFormSelect } from '../../../../../../src';

const BasicBlock: React.FC<{
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
}> = ({ component: Component, componentProps }) => {
  return (
    <PFormBlock label='Basic' line>
      <PFormRow>
        <PFormCol>
          <Component {...componentProps} name='BasicBlock_default' helperText='기본' />
        </PFormCol>
        <PFormCol>
          <Component {...componentProps} name='BasicBlock_label' helperText='label' />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name='BasicBlock_placeholder'
            placeholder={Component === PFormSelect ? '선택하세요' : '입력하세요'}
            helperText='placeholder'
          />
        </PFormCol>
        <PFormCol>
          <Component {...componentProps} name='BasicBlock_labelShrink' labelShrink helperText='labelShrink=true' />
        </PFormCol>
        <PFormCol>
          <Component {...componentProps} name='BasicBlock_focused' focused helperText='focused=true' />
        </PFormCol>
      </PFormRow>
    </PFormBlock>
  );
};

export default BasicBlock;
