import { Button, styled } from '@mui/material';

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

export const StyledActionContainer = styled('div')`
  border-top: 1px solid #efefef;
  padding: 10px;
  text-align: right;
  &:empty {
    display: none;
  }
`;

export const StyledActionButton = styled(Button)`
  min-width: 0;
  color: unset;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
  &.disabled {
    color: rgba(0, 0, 0, 0.5);
  }
`;
