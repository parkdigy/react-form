import React from 'react';
import { Paper } from '@mui/material';
import { OutlinedPaperProps, OutlinedPaperDefaultProps } from './OutlinedPaper.types';

const OutlinedPaper: React.FC<OutlinedPaperProps> = ({ children }) => {
  return (
    <Paper variant='outlined' sx={{ px: 2, py: 1, backgroundColor: '#fafafa' }}>
      {children}
    </Paper>
  );
};

OutlinedPaper.defaultProps = OutlinedPaperDefaultProps;

export default OutlinedPaper;
