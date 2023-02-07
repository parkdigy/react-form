import React, { useCallback } from 'react';
import { PrivateAlertDialogProps as Props, PrivateAlertDialogDefaultProps } from './PrivateAlertDialog.types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const PrivateAlertDialog: React.FC<Props> = ({ open, title, content, onClose }) => {
  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  return (
    <Dialog open={!!open} onClose={handleClose} aria-labelledby='alert-dialog-title'>
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

PrivateAlertDialog.displayName = 'PrivateAlertDialog';
PrivateAlertDialog.defaultProps = PrivateAlertDialogDefaultProps;

export default PrivateAlertDialog;
