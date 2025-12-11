import { styled } from '@mui/material';

export const StyledContainerDiv = styled('div')`
  flex: 1;
  position: relative;
`;

export const StyledContentDiv = styled('div')`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cfcfcf;
    border-radius: 100px;
  }
`;
