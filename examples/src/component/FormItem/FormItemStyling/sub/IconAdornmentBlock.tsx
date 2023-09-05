import React from 'react';
import { CircularProgress } from '@mui/material';
import { FormBlock, FormCol, FormRow } from '../../../../../../src';

const IconAdornmentBlock: React.FC<{
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
}> = ({ component: Component, componentProps }) => {
  return (
    <FormBlock label='Icon / Adornment' line>
      <FormRow>
        <FormCol>
          <Component
            {...componentProps}
            name={getName('IconAdornmentBlock')}
            labelIcon='person'
            helperText='labelIcon'
          />
        </FormCol>
        <FormCol>
          <Component {...componentProps} name={getName('IconAdornmentBlock')} icon='person' helperText='icon' />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name={getName('IconAdornmentBlock')}
            startAdornment={<CircularProgress size={20} color='inherit' />}
            helperText='startAdornment'
          />
        </FormCol>
        <FormCol>
          <Component
            {...componentProps}
            name={getName('IconAdornmentBlock')}
            endAdornment={<CircularProgress size={20} color='inherit' />}
            helperText='endAdornment'
          />
        </FormCol>
      </FormRow>
    </FormBlock>
  );
};

export default IconAdornmentBlock;
