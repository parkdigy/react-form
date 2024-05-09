import React, { CSSProperties, useMemo, useRef, useState } from 'react';
import { FormBodyProps as Props } from './FormBody.types';
import { useResizeDetector } from 'react-resize-detector';
import { useFormState } from '../../FormContext';
import { Grid } from '@mui/material';
import { StyledContainerDiv, StyledContentDiv } from './FormBody.style.private';

const FormBody: React.FC<Props> = ({ children, hidden }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const containerRef = useRef<HTMLDivElement>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const { spacing, fullHeight } = useFormState();
  const [height, setHeight] = useState(0);

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  useResizeDetector({
    targetRef: containerRef,
    handleWidth: false,
    handleHeight: true,
    onResize() {
      setHeight(containerRef.current?.getBoundingClientRect()?.height || 0);
    },
  });

  /********************************************************************************************************************
   * Style
   * ******************************************************************************************************************/

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
    <StyledContainerDiv ref={fullHeight ? containerRef : undefined} className='FormBody' style={style}>
      <StyledContentDiv style={contentStyle}>
        <Grid container spacing={spacing} direction='column'>
          {children}
        </Grid>
      </StyledContentDiv>
    </StyledContainerDiv>
  );
};

export default FormBody;
