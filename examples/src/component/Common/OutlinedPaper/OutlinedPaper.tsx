import React from 'react';
import { Paper } from '@mui/material';
import { OutlinedPaperProps } from './OutlinedPaper.types';

const OutlinedPaper = ({ children }: OutlinedPaperProps) => {
  return (
    <Paper variant='outlined' sx={{ px: 2, py: 1, backgroundColor: '#fafafa' }}>
      {children}
    </Paper>
  );
};

export default OutlinedPaper;
