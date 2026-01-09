import React, { type ChangeEvent, type ReactNode, useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { useAutoUpdateRef, useFirstSkipChanged, useForwardRef } from '@pdg/react-hook';
import { getFileSizeText } from '../../@util.private';
import { empty, notEmpty } from '@pdg/compare';
import { type PFormFileProps as Props, type PFormFileCommands, type PFormFileValue } from './PFormFile.types';
import PFormItemBase from '../PFormItemBase';
import { useFormState } from '../../PFormContext';
import LinkDialog from './LinkDialog.private';
import { PrivateAlertDialog, type PrivateAlertDialogProps } from '../../@private';
import { PIcon } from '@pdg/react-component';
import { StyledPButton } from './PFormFile.style.private';
import { useResizeDetector } from 'react-resize-detector';
import { getFinalValue } from './PFormFile.function.private';
import './PFormFile.scss';

const FILE_VALUE = '';

const PFormFile = ({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  labelShrink: initLabelShrink,
  fullWidth: initFullWidth,
  /********************************************************************************************************************/
  accept,
  hideUrl,
  tabIndex,
  uploadLabel,
  uploadTabIndex,
  hideUpload,
  hideUploadLabel,
  linkLabel,
  linkTabIndex,
  hideLink,
  hideLinkLabel,
  removeLabel,
  removeTabIndex,
  hideRemove,
  hideRemoveLabel,
  maxFileSize,
  preview,
  hidden: initHidden,
  onFile,
  onLink,
  /********************************************************************************************************************/
  name,
  labelIcon,
  label: initLabel,
  required,
  readOnly,
  disabled: initDisabled,
  error: initError,
  helperText,
  value: initValue = '',
  data: initData,
  exceptValue,
  onChange,
  onValidate,
  /********************************************************************************************************************/
  className,
}: Props) => {
  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();

  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const {
    variant: formVariant,
    size: formSize,
    color: formColor,
    focused: formFocused,
    labelShrink: formLabelShrink,
    fullWidth: formFullWidth,
    disabled: formDisabled,
    onAddValueItem,
    onValueChange,
    onRemoveValueItem,
    onValueChangeByUser,
  } = useFormState<PFormFileValue, false>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const textFieldRef = useRef<HTMLInputElement>(null);
  const fileUploadBtnRef = useRef<HTMLButtonElement>(null);
  const linkBtnRef = useRef<HTMLButtonElement>(null);
  const initValueRef = useAutoUpdateRef(initValue);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [isOpenLinkDialog, setIsOpenLinkDialog] = useState(false);
  const [alertDialogProps, setAlertDialogProps] = useState<{
    open: boolean;
    color?: PrivateAlertDialogProps['color'];
    title?: ReactNode;
    content?: ReactNode;
  }>({ open: false });

  /** error */
  const [error, _setError] = useState(initError);
  useFirstSkipChanged(() => _setError(initError), [initError]);
  const errorRef = useAutoUpdateRef(error);
  const setError = useCallback(
    (newValue: typeof error) => {
      _setError(newValue);
      errorRef.current = newValue;
    },
    [errorRef]
  );

  /** data */
  const [data, _setData] = useState(initData);
  useFirstSkipChanged(() => _setData(initData), [initData]);
  const dataRef = useAutoUpdateRef(data);
  const setData = useCallback(
    (newValue: typeof data) => {
      _setData(newValue);
      dataRef.current = newValue;
    },
    [dataRef]
  );

  /** disabled */
  const finalInitDisabled = initDisabled ?? formDisabled;
  const [disabled, setDisabled] = useState(finalInitDisabled);
  useFirstSkipChanged(() => setDisabled(finalInitDisabled), [finalInitDisabled]);

  /** hidden */
  const [hidden, setHidden] = useState(initHidden);
  useFirstSkipChanged(() => setHidden(initHidden), [initHidden]);

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: innerRef, height } = useResizeDetector({ handleWidth: false });

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** setErrorErrorHelperText */
  const setErrorErrorHelperText = useCallback(
    function (error: Props['error'], errorHelperText: Props['helperText']) {
      setError(error);
      setErrorHelperText(error ? errorHelperText : undefined);
    },
    [setError]
  );

  /** validate */
  const validate = useCallback(
    function (value: PFormFileValue) {
      let isEmptyValue = false;
      if (value) {
        const d = document.createElement('div');
        d.innerHTML = value;
        const text = d.textContent || d.innerText;
        isEmptyValue = empty(text.trim());
      }
      if (required && (isEmptyValue || empty(value))) {
        setErrorErrorHelperText(true, '필수 선택 항목입니다.');
        return false;
      }

      if (onValidateRef.current) {
        const onValidateResult = onValidateRef.current(value);
        if (onValidateResult != null && onValidateResult !== true) {
          setErrorErrorHelperText(true, onValidateResult);
          return false;
        }
      }

      setErrorErrorHelperText(false, undefined);

      return true;
    },
    [required, onValidateRef, setErrorErrorHelperText]
  );

  /** focus */
  const focus = useCallback(() => {
    if (hideUrl) {
      if (hideUpload) {
        linkBtnRef.current?.focus();
      } else {
        fileUploadBtnRef.current?.focus();
      }
    } else {
      textFieldRef.current?.focus();
    }
  }, [hideUpload, hideUrl]);

  /** fileSizeCheck */
  const fileSizeCheck = useCallback(
    (file: File | string) => {
      if (maxFileSize) {
        return new Promise<void>((resolve, reject) => {
          if (file instanceof File) {
            if (file.size > maxFileSize) {
              setAlertDialogProps({
                open: true,
                color: 'error',
                title: '파일 사이즈',
                content: (
                  <div>
                    <div>
                      <Typography color='error'>
                        {getFileSizeText(maxFileSize)} 이하의 파일만 사용 가능합니다.
                      </Typography>
                    </div>
                    <div style={{ opacity: 0.7 }}>(선택한 파일 사이즈 : {getFileSizeText(file.size)})</div>
                  </div>
                ),
              });
              reject();
            } else {
              resolve();
            }
          } else {
            resolve();
          }
        });
      } else {
        return Promise.resolve();
      }
    },
    [maxFileSize]
  );

  /********************************************************************************************************************
   * value
   * ******************************************************************************************************************/

  const [value, _setValue] = useState(getFinalValue(initValue));
  useFirstSkipChanged(() => _setValue(getFinalValue(initValue)), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (newValue: ReturnType<typeof getFinalValue>) => {
      _setValue(newValue);
      valueRef.current = newValue;
    },
    [valueRef]
  );

  /** value 변경 함수 */
  const updateValue = useCallback(
    (newValue: Props['value']) => {
      const finalValue = getFinalValue(newValue);
      setValue(finalValue);

      if (error) validate(finalValue);
      onChangeRef.current?.(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [error, name, onChangeRef, onValueChange, setValue, validate]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormFileCommands>(
    () => ({
      getType: () => 'PFormFile',
      getName: () => name,
      getReset: () => getFinalValue(initValueRef.current),
      reset: () => updateValue(initValueRef.current),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabled,
      setDisabled,
      isHidden: () => !!hidden,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: setErrorErrorHelperText,
    }),
    [
      dataRef,
      disabled,
      exceptValue,
      focus,
      hidden,
      initValueRef,
      name,
      setData,
      setErrorErrorHelperText,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    useCallback((commands: PFormFileCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleFileChange */
  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (onFile) {
        const target = e.currentTarget;
        const file = (target.files as FileList)[0];
        fileSizeCheck(file).then(() => {
          onFile(file).then((url) => {
            updateValue(url);
            setTimeout(() => {
              if (onValueChangeByUser) onValueChangeByUser(name, url);
            });
          });
        });
      }
    },
    [fileSizeCheck, name, onFile, onValueChangeByUser, updateValue]
  );

  /** handleLinkClick */
  const handleLinkClick = useCallback(() => {
    setIsOpenLinkDialog(true);
  }, []);

  /** handleRemoveClick */
  const handleRemoveClick = useCallback(() => {
    updateValue('');
    setTimeout(() => {
      if (onValueChangeByUser) onValueChangeByUser(name, '');
    });
  }, [name, onValueChangeByUser, updateValue]);

  /** handleLinkDialogConfirm */
  const handleLinkDialogConfirm = useCallback(
    (url: string) => {
      if (onLink) {
        onLink(url).then((finalUrl) => {
          updateValue(finalUrl);
          setTimeout(() => {
            if (onValueChangeByUser) onValueChangeByUser(name, finalUrl);
          });
        });
      } else {
        updateValue(url);
        setTimeout(() => {
          if (onValueChangeByUser) onValueChangeByUser(name, url);
        });
      }
    },
    [name, onLink, onValueChangeByUser, updateValue]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormItemBase
      variant={variant}
      size={size}
      color={color}
      focused={focused}
      className={classNames(
        className,
        'PFormValueItem',
        'PFormFile',
        `variant-${variant}`,
        `size-${size}`,
        !!initLabel && 'with-label',
        !!fullWidth && 'full-width',
        !!hideUrl && 'hide-file-name',
        !!hideLink && 'hide-link',
        !!hideUpload && 'hide-upload',
        !!hideRemove && 'hide-remove',
        notEmpty(value) && 'with-value'
      )}
      labelIcon={hideUrl ? labelIcon : undefined}
      label={hideUrl ? initLabel : undefined}
      error={error}
      required={required}
      fullWidth={fullWidth}
      hidden={hidden}
      controlHeight={height}
      helperText={
        <div>
          {preview}
          <div>{helperText}</div>
        </div>
      }
      errorHelperText={
        <div>
          {preview}
          <div>{errorHelperText}</div>
        </div>
      }
      hideLabel={!hideUrl}
      style={{ width: fullWidth ? '100%' : undefined }}
      control={
        <div className='control-wrap'>
          {!hideUrl && (
            <div className='file-name-wrap'>
              <TextField
                ref={(ref) => {
                  innerRef.current = ref;
                }}
                inputRef={textFieldRef}
                className='file-name'
                variant={variant}
                label={
                  labelIcon ? (
                    <>
                      <PIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PIcon>
                      <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
                    </>
                  ) : (
                    initLabel
                  )
                }
                size={size}
                required={required}
                value={value || ''}
                focused={focused}
                disabled={disabled}
                fullWidth
                tabIndex={tabIndex}
                error={error}
                slotProps={{
                  inputLabel: labelShrink ? { shrink: labelShrink } : undefined,
                  htmlInput: { readOnly: true, tabIndex: tabIndex },
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <div className='input-file-wrap'>
                          {!hideUpload && (
                            <>
                              <StyledPButton
                                variant='text'
                                tabIndex={uploadTabIndex == null ? -1 : uploadTabIndex}
                                className={classNames(
                                  'input-file-btn form-file-btn',
                                  !!hideUploadLabel && 'hidden-label'
                                )}
                                color={error ? 'error' : color}
                                size={size}
                                disabled={readOnly || disabled}
                                ref={fileUploadBtnRef}
                              >
                                <label htmlFor={id}>
                                  <PIcon size={size}>upload</PIcon>
                                  {!hideUploadLabel && (uploadLabel || '파일 업로드')}
                                </label>
                              </StyledPButton>
                              <input
                                type='file'
                                accept={accept}
                                id={id}
                                value={FILE_VALUE}
                                className='input-file'
                                onChange={handleFileChange}
                              />
                            </>
                          )}
                          {!hideLink && (
                            <StyledPButton
                              variant='text'
                              tabIndex={linkTabIndex == null ? -1 : linkTabIndex}
                              className={classNames('link-btn  form-file-btn', !!hideLinkLabel && 'hidden-label')}
                              color={error ? 'error' : color}
                              startIcon='link'
                              size={size}
                              disabled={readOnly || disabled}
                              ref={linkBtnRef}
                              onClick={handleLinkClick}
                            >
                              {!hideLinkLabel && (linkLabel || '링크')}
                            </StyledPButton>
                          )}
                          {!hideRemove && notEmpty(value) && (
                            <StyledPButton
                              variant='text'
                              tabIndex={removeTabIndex == null ? -1 : removeTabIndex}
                              className={classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label')}
                              color={error ? 'error' : color}
                              startIcon='close'
                              size={size}
                              disabled={readOnly || disabled}
                              onClick={handleRemoveClick}
                            >
                              {!hideRemoveLabel && (removeLabel || '삭제')}
                            </StyledPButton>
                          )}
                        </div>
                      </InputAdornment>
                    ),
                  },
                }}
                placeholder='파일을 선택하세요'
              />
            </div>
          )}
          {!!hideUrl && (
            <div className='input-file-wrap'>
              {!hideUpload && (
                <>
                  <StyledPButton
                    variant='outlined'
                    tabIndex={uploadTabIndex}
                    className={classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label')}
                    color={error ? 'error' : color}
                    size={size}
                    ref={fileUploadBtnRef}
                    disabled={disabled}
                  >
                    <label htmlFor={id}>
                      <PIcon size={size} color={error ? 'error' : color}>
                        upload
                      </PIcon>
                      {!hideUploadLabel && (uploadLabel || '파일 업로드')}
                    </label>
                  </StyledPButton>
                  <input
                    type='file'
                    accept={accept}
                    id={id}
                    value={FILE_VALUE}
                    className='input-file'
                    onChange={handleFileChange}
                  />
                </>
              )}
              {!hideLink && (
                <StyledPButton
                  variant='outlined'
                  tabIndex={linkTabIndex}
                  className={classNames('link-btn form-file-btn', !!hideLinkLabel && 'hidden-label')}
                  color={error ? 'error' : color}
                  startIcon='link'
                  size={size}
                  onClick={handleLinkClick}
                  disabled={disabled}
                  ref={linkBtnRef}
                >
                  {!hideLinkLabel && (linkLabel || '링크')}
                </StyledPButton>
              )}
              {!hideRemove && notEmpty(value) && (
                <StyledPButton
                  variant='outlined'
                  tabIndex={removeTabIndex}
                  className={classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label')}
                  color={error ? 'error' : color}
                  startIcon='close'
                  size={size}
                  disabled={disabled}
                  onClick={handleRemoveClick}
                >
                  {!hideRemoveLabel && (removeLabel || '삭제')}
                </StyledPButton>
              )}
            </div>
          )}

          <PrivateAlertDialog {...alertDialogProps} onClose={() => setAlertDialogProps({ open: false })} />
          <LinkDialog
            open={isOpenLinkDialog}
            onConfirm={handleLinkDialogConfirm}
            onClose={() => setIsOpenLinkDialog(false)}
          />
        </div>
      }
    />
  );
};

export default PFormFile;
