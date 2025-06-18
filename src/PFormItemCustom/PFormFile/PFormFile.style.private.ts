import { styled } from '@mui/material';
import { PButton } from '@pdg/react-component';

export const StyledPButton = styled(PButton)`
  min-width: 0;

  &.input-file-btn {
    padding: 0 !important;
    position: relative;

    .PFlexRowBox {
      height: 100%;
      label {
        cursor: pointer;
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 10px;

        .PIcon {
          margin-right: 0.2em;
        }
      }
    }
  }

  &.hidden-label.input-file-btn .PFlexRowBox label .PIcon {
    margin-left: 0;
    margin-right: 0;
  }

  &.MuiButton-outlined {
    &:first-of-type:not(:last-of-type) {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-of-type:not(:first-of-type) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:first-of-type):not(:last-of-type) {
      border-right: 0;
      border-radius: 0;
    }
  }
`;
