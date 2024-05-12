import { Box, styled } from '@mui/material';
import { FormLabel } from '../../FormCommon';

export const StyledFormLabelContainerDiv = styled('div')`
  position: relative;
  height: 20px;
`;

export const StyledFormLabel = styled(FormLabel)`
  position: absolute;
  left: 5px;
  top: 0;
`;

export const StyledContentContainerBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;
