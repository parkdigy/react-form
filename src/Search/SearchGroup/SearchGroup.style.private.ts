import { Grid, styled } from '@mui/material';

export const StyledItem = styled(Grid)`
  &:has(> [style*='display: none;']) {
    display: none;
  }
`;
