import { Box, styled } from '@mui/material';

export const StyledLineBox = styled(Box)`
  border-bottom: thin solid #dfdfdf;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
`;

export const StyledErrorLineBox = styled(Box)(({ theme }) => ({
  borderBottom: `thin solid ${theme.palette.error.main}`,
  position: 'absolute',
  left: 0,
  top: '50%',
  width: '100%',
  opacity: 0.4,
}));

export const StyledWarningLineBox = styled(Box)(({ theme }) => ({
  borderBottom: `thin solid ${theme.palette.warning.main}`,
  position: 'absolute',
  left: 0,
  top: '50%',
  width: '100%',
  opacity: 0.4,
}));
