import React, { useCallback } from 'react';
import { PrivateAlertDialogProps as Props } from './PrivateAlertDialog.types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const PrivateAlertDialog: React.FC<Props> = ({ color = 'primary', open, title, content, onClose }) => {
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog className={`color-${color}`} open={!!open} onClose={handleClose} aria-labelledby='alert-dialog-title'>
      {title && <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>}
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button variant='text' onClick={handleClose} autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivateAlertDialog;
