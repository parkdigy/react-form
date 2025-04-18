import React, { CSSProperties, useMemo } from 'react';
import { FormBodyProps as Props } from './FormBody.types';
import { useResizeDetector } from 'react-resize-detector';
import { useFormState } from '../../FormContext';
import { Grid } from '@mui/material';
import { StyledContainerDiv, StyledContentDiv } from './FormBody.style.private';
import { ifUndefined } from '@pdg/util';

const FormBody: React.FC<Props> = ({ children, hidden, fullHeight: initFullHeight, style: initStyle }) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const { spacing, fullHeight } = useFormState();

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: containerRef, height: resizedHeight } = useResizeDetector({ handleWidth: false });
  const height = ifUndefined(resizedHeight, 0);

  /********************************************************************************************************************
   * Style
   * ******************************************************************************************************************/

  const style = useMemo(() => {
    const newStyle: CSSProperties = { ...initStyle };
    if (hidden) {
      newStyle.display = 'none';
    }
    return newStyle;
  }, [hidden, initStyle]);

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
    <StyledContainerDiv
      ref={
        fullHeight
          ? (ref) => {
              containerRef.current = ref;
            }
          : undefined
      }
      className='FormBody'
      style={style}
    >
      <StyledContentDiv style={contentStyle}>
        <Grid container spacing={spacing} direction='column' style={initFullHeight ? { height: '100%' } : undefined}>
          {children}
        </Grid>
      </StyledContentDiv>
    </StyledContainerDiv>
  );
};

export default FormBody;
