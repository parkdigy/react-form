import React from 'react';
import { styled, Tooltip, tooltipClasses, type TooltipProps } from '@mui/material';

const PrivateStyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    border: '1px solid #dadde9',
    padding: 0,
    borderRadius: 0,
    margin: 0,
    width: 'auto',
    maxWidth: 'inherit !important',
    boxShadow: theme.shadows[8],
  },
}));

export default PrivateStyledTooltip;
