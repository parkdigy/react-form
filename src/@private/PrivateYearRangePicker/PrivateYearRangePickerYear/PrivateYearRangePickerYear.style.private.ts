import { Button, Grid, styled } from '@mui/material';

export const StyledContainer = styled(Grid)`
  padding: 4px;
  position: relative;
`;

export const StyledButton = styled(Button)`
  font-size: 12px;
  background-color: transparent;
  color: unset;
  outline: 0;
  font-weight: 400;
  line-height: 1.75;
  border-radius: 18px;
  cursor: pointer;
  width: 100%;
  border: 1px solid transparent;

  &:focus {
    background-color: rgba(0, 0, 0, 0.12);
  }
  &.default {
    background-color: #efefef;
  }
  &.selected,
  &.selected-temp {
    background-color: rgba(66, 165, 245, 0.6);
  }
  &.selected-start,
  &.selected-end {
    color: #fff;
    background-color: #1976d2;
  }
  &.disabled {
    opacity: 0.8;
    border: 1px solid transparent;
  }
  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {
    color: inherit;
    border: 1px solid transparent;
    background-color: rgba(66, 165, 245, 0.3);
  }
`;
