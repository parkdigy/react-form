import React, { useCallback, useEffect, useEffectEvent, useRef, useState } from 'react';
import { LinkDialogProps as Props } from './LinkDialog.types';
import { PFormUrl, PFormUrlCommands } from '../../../PFormItemTextFieldBase';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { empty } from '@pdg/compare';

const LinkDialog = ({ open, onConfirm, onCancel, onClose }: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const inputRef = useRef<PFormUrlCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useState('');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => setValue(''));
    useEffect(() => {
      if (!open) {
        effectEvent();
      }
    }, [open]);
  }

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSubmit = useCallback(() => {
    if (inputRef.current?.validate()) {
      onConfirm && onConfirm(value);
      onClose && onClose();
    } else {
      inputRef.current?.focus();
    }
  }, [value, onConfirm, onClose]);

  const handleCancel = useCallback(() => {
    onCancel && onCancel();
    onClose && onClose();
  }, [onCancel, onClose]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      className='color-primary'
      open={!!open}
      maxWidth={'sm'}
      fullWidth
      onClose={(e, reason) => {
        if (reason === 'backdropClick') {
          if (empty(value)) {
            onClose && onClose();
          }
        }
      }}
    >
      <DialogTitle>파일 링크</DialogTitle>
      <DialogContent>
        <Box>
          <div>파일의 링크 URL을 입력해주세요.</div>
          <PFormUrl
            ref={(ref) => {
              if (inputRef.current == null && ref !== null) {
                ref.focus();
              }
              inputRef.current = ref;
            }}
            name='form-file-link-url'
            label='링크 URL'
            value={value}
            required
            fullWidth
            style={{ marginTop: 15 }}
            onChange={setValue}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant='text' onClick={handleCancel}>
          취소
        </Button>
        <Button variant='text' onClick={handleSubmit}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LinkDialog;
