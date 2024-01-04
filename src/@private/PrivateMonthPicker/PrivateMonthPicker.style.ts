import { IconButton, styled } from '@mui/material';

export const StyledContainer = styled('div')`
  .PrivateYearPickerYearList {
    max-height: 130px;
  }
`;

export const TitleContainer = styled('div')`
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledYearMonthError = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.error.main};
`;
