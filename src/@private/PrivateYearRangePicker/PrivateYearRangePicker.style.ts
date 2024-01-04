import { styled } from '@mui/material';

export const StyledTitleContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 10px;
  font-size: 14px;
`;

export const StyledYear = styled('span')``;

export const StyledYearError = styled('span')`
  color: ${({ theme }) => theme.palette.error.main};
`;

export const StyledTitleGap = styled('span')`
  padding: 0 7px;
  opacity: 0.5;
`;
