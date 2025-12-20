import React from 'react';
import { CircularProgress } from '@mui/material';
import { PFormBlock, PFormCol, PFormRow } from '../../../../../../src';
import { getName } from '@common';

const IconAdornmentBlock: React.FC<{
  component: React.ForwardRefExoticComponent<any>;
  componentProps?: any;
}> = ({ component: Component, componentProps }) => {
  return (
    <PFormBlock label='Icon / Adornment' line>
      <PFormRow>
        <PFormCol>
          <Component
            {...componentProps}
            name={getName('IconAdornmentBlock')}
            labelIcon='person'
            helperText='labelIcon'
          />
        </PFormCol>
        <PFormCol>
          <Component {...componentProps} name={getName('IconAdornmentBlock')} icon='person' helperText='icon' />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name={getName('IconAdornmentBlock')}
            startAdornment={<CircularProgress size={20} color='inherit' />}
            helperText='startAdornment'
          />
        </PFormCol>
        <PFormCol>
          <Component
            {...componentProps}
            name={getName('IconAdornmentBlock')}
            endAdornment={<CircularProgress size={20} color='inherit' />}
            helperText='endAdornment'
          />
        </PFormCol>
      </PFormRow>
    </PFormBlock>
  );
};

export default IconAdornmentBlock;
