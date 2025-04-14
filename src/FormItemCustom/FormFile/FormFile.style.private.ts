import { styled } from '@mui/material';
import { PdgButton } from '@pdg/react-component';

export const StyledPdgButton = styled(PdgButton)`
  min-width: 0;

  &.input-file-btn {
    padding: 0 !important;
    position: relative;

    .PdgFlexRowBox {
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

        .PdgIcon {
          margin-right: 0.2em;
        }
      }
    }
  }

  &.hidden-label.input-file-btn .PdgFlexRowBox label .PdgIcon {
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
