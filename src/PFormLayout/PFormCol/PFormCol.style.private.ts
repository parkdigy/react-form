import { Box, styled } from '@mui/material';
import { PFormLabel } from '../../PFormCommon';

export const StyledFormLabelContainerDiv = styled('div')`
  position: relative;
  height: 20px;
`;

export const StyledFormLabel = styled(PFormLabel)`
  position: absolute;
  left: 5px;
  top: 0;
`;

export const StyledContentContainerBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;
