import React from 'react';
import { PFormBlock, PFormCol, PFormRow } from '../../../../../../src';

const ColorBlock: React.FC<{
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
  focused?: boolean;
}> = ({ component: Component, componentProps, focused }) => {
  return (
    <PFormBlock label={focused ? 'Focused Color' : 'Color'} line>
      <PFormRow>
        <PFormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_primary`}
            focused={focused}
            color='primary'
            helperText={`${focused ? 'focused=true / ' : ''}color=primary`}
          />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_secondary`}
            focused={focused}
            color='secondary'
            helperText={`${focused ? 'focused=true / ' : ''}color=secondary`}
          />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_info`}
            focused={focused}
            color='info'
            helperText={`${focused ? 'focused=true / ' : ''}color=info`}
          />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_success`}
            focused={focused}
            color='success'
            helperText={`${focused ? 'focused=true / ' : ''}color=success`}
          />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_warning`}
            focused={focused}
            color='warning'
            helperText={`${focused ? 'focused=true / ' : ''}color=warning`}
          />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name={`ColorBlock${focused ? '_focused' : ''}_error`}
            focused={focused}
            color='error'
            helperText={`${focused ? 'focused=true / ' : ''}color=error`}
          />
        </PFormCol>
      </PFormRow>
    </PFormBlock>
  );
};

export default ColorBlock;
