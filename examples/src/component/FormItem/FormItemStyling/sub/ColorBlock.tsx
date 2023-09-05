import React from 'react';
import { FormBlock, FormCol, FormRow } from '../../../../../../src';

const ColorBlock: React.FC<{
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
  focused?: boolean;
}> = ({ component: Component, componentProps, focused }) => {
  return (
    <FormBlock label={focused ? 'Focused Color' : 'Color'} line>
      <FormRow>
        <FormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_primary`}
            focused={focused}
            color='primary'
            helperText={`${focused ? 'focused=true / ' : ''}color=primary`}
          />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_secondary`}
            focused={focused}
            color='secondary'
            helperText={`${focused ? 'focused=true / ' : ''}color=secondary`}
          />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_info`}
            focused={focused}
            color='info'
            helperText={`${focused ? 'focused=true / ' : ''}color=info`}
          />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_success`}
            focused={focused}
            color='success'
            helperText={`${focused ? 'focused=true / ' : ''}color=success`}
          />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_warning`}
            focused={focused}
            color='warning'
            helperText={`${focused ? 'focused=true / ' : ''}color=warning`}
          />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_error`}
            focused={focused}
            color='error'
            helperText={`${focused ? 'focused=true / ' : ''}color=error`}
          />
        </FormCol>
      </FormRow>
    </FormBlock>
  );
};

export default ColorBlock;
