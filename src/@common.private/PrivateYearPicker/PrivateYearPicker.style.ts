import { IconButton, styled } from '@mui/material';

export const StyledTitleContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 10px;
  font-size: 14px;
`;

export const StyledIconButton = styled(IconButton)`
  margin-top: -8px;
  margin-bottom: -10px;
`;

export const StyledYearMonth = styled('div')`
  flex: 1;
  text-align: center;
`;

export const StyledYearMonthError = styled('div')`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.palette.error.main};
`;
