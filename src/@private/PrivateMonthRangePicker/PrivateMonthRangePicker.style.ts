import { Button, Grid, styled } from '@mui/material';

export const StyledDiv = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 30px;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  background-color: #fafafa;
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
