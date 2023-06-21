import React, { CSSProperties, useMemo, useState } from 'react';
import { FormBodyProps as Props, FormBodyDefaultProps } from './FormBody.types';
import { useResizeDetector } from 'react-resize-detector';
import { useFormState } from '../../FormContext';
import { Grid } from '@mui/material';
import { StyledContainerDiv, StyledContentDiv } from './FormBody.style';

const FormBody: React.FC<Props> = ({ children, hidden }) => {
  const { spacing, fullHeight } = useFormState();
  const [height, setHeight] = useState(0);

  // -------------------------------------------------------------------------------------------------------------------

  const { ref: resizeDetectorRef } = useResizeDetector({
    handleHeight: true,
    handleWidth: false,
    onResize() {
      setHeight(resizeDetectorRef.current.getBoundingClientRect().height);
    },
  });

  // -------------------------------------------------------------------------------------------------------------------

  const style = useMemo(() => (hidden ? { display: 'none' } : undefined), [hidden]);

  const contentStyle: CSSProperties | undefined = useMemo(
    () =>
      fullHeight
        ? {
            height,
            paddingTop: 8,
            overflowY: 'auto',
            position: 'absolute',
            width: '100%',
          }
        : undefined,
    [fullHeight, height]
  );

  return (
    <StyledContainerDiv ref={fullHeight ? resizeDetectorRef : undefined} className='FormBody' style={style}>
      <StyledContentDiv style={contentStyle}>
        <Grid container spacing={spacing} direction='column'>
          {children}
        </Grid>
      </StyledContentDiv>
    </StyledContainerDiv>
  );
};

FormBody.displayName = 'FormBody';
FormBody.defaultProps = FormBodyDefaultProps;

export default FormBody;
