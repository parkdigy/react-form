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
    background-color: rgba(25, 118, 210, 1);

    &.range:not(.active) {
      background-color: rgba(25, 118, 210, 0.8);
    }
  }
  &.active {
    color: #fff;
    background-color: rgba(25, 118, 210, 1);
    box-shadow: inset 1px 1px 1px 1px #05569f;
  }
  &.disabled {
    opacity: 0.8;
    border: 1px solid transparent;
  }
  &:hover:not(.disabled):not(.selected-start):not(.selected-end) {
    color: inherit;
    background-color: rgba(66, 165, 245, 0.3);
    border: 1px solid transparent;
  }
`;
