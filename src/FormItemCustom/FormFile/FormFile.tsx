import React, { ChangeEvent, ReactNode, useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { getFileSizeText } from '../../@util';
import { empty, equal, nextTick, notEmpty } from '@pdg/util';
import { FormFileProps as Props, FormFileDefaultProps, FormFileCommands, FormFileValue } from './FormFile.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import LinkDialog from './LinkDialog/LinkDialog';
import { PrivateAlertDialog, PrivateAlertDialogProps } from '../../@private';
import './FormFile.scss';
import { PdgIcon } from '@pdg/react-component';

const FormFile = React.forwardRef<FormFileCommands, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      labelShrink: initLabelShrink,
      fullWidth: initFullWidth,
      //----------------------------------------------------------------------------------------------------------------
      accept,
      hideUrl,
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
      //----------------------------------------------------------------------------------------------------------------
      name,
      labelIcon,
      label: initLabel,
      required,
      readOnly,
      disabled: initDisabled,
      error: initError,
      helperText,
      value: initValue,
      data: initData,
      exceptValue,
      onChange,
      onValidate,
      //----------------------------------------------------------------------------------------------------------------
      className,
    },
    ref
  ) => {
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
    } = useFormState<FormFileValue, false>();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const focused = useMemo(() => (initFocused == null ? formFocused : initFocused), [initFocused, formFocused]);
    const labelShrink = useMemo(
      () => (initLabelShrink == null ? formLabelShrink : initLabelShrink),
      [initLabelShrink, formLabelShrink]
    );
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const textFieldRef = useRef<HTMLInputElement>(null);
    const fileUploadBtnRef = useRef<HTMLButtonElement>(null);
    const linkBtnRef = useRef<HTMLButtonElement>(null);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );
    const [hidden, setHidden] = useAutoUpdateState<Props['hidden']>(initHidden);
    const [isOpenLinkDialog, setIsOpenLinkDialog] = useState(false);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);
    const [alertDialogProps, setAlertDialogProps] = useState<{
      open: boolean;
      color?: PrivateAlertDialogProps['color'];
      title?: ReactNode;
      content?: ReactNode;
    }>({ open: false });

    /********************************************************************************************************************
     * Function - setErrorErrorHelperText
     * ******************************************************************************************************************/

    const setErrorErrorHelperText = useCallback(
      function (error: Props['error'], errorHelperText: Props['helperText']) {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    /********************************************************************************************************************
     * Function - validate
     * ******************************************************************************************************************/

    const validate = useCallback(
      function (value: FormFileValue) {
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

        if (onValidate) {
          const onValidateResult = onValidate(value);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorErrorHelperText(false, undefined);

        return true;
      },
      [required, onValidate, setErrorErrorHelperText]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const [value, setValue] = useState<FormFileValue>(initValue || '');

    const [fileValue] = useState('');

    const changeValue = useCallback(
      (newValue: FormFileValue) => {
        if (!equal(value, newValue)) {
          setValue(newValue);
          nextTick(() => {
            if (error) validate(newValue);
            if (onChange) onChange(newValue);
            onValueChange(name, newValue);
          });
        }
      },
      [error, name, onChange, onValueChange, validate, value]
    );

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
      changeValue(initValue || '');
    }, [initValue]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const label = useMemo(() => {
      return labelIcon ? (
        <>
          <PdgIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PdgIcon>
          <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
        </>
      ) : (
        initLabel
      );
    }, [initLabel, labelIcon]);

    /********************************************************************************************************************
     * Function - focus
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;
      let lastHidden = !!hidden;

      const commands: FormFileCommands = {
        getType: () => 'FormFile',
        getName: () => name,
        getReset: () => initValue || '',
        reset: () => {
          lastValue = initValue || '';
          changeValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value) => {
          lastValue = value;
          changeValue(lastValue);
        },
        getData: () => lastData,
        setData: (data) => {
          lastData = data;
          setData(data);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled: boolean) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        isHidden: () => lastHidden,
        setHidden: (hidden) => {
          lastHidden = hidden;
          setHidden(hidden);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(value),
        setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
          setErrorErrorHelperText(error, error ? errorHelperText : undefined),
      };

      onAddValueItem(id, commands);

      if (ref) {
        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }

      return () => {
        onRemoveValueItem(id);

        if (ref) {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        }
      };
    }, [
      name,
      initValue,
      value,
      exceptValue,
      disabled,
      focus,
      validate,
      ref,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
      hidden,
      setHidden,
      changeValue,
    ]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

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
     * Event Handler
     * ******************************************************************************************************************/

    const handleFileChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (onFile) {
          const target = e.currentTarget;
          const file = (target.files as FileList)[0];
          fileSizeCheck(file).then(() => {
            onFile(file).then((url) => {
              changeValue(url);
              nextTick(() => {
                if (onValueChangeByUser) onValueChangeByUser(name, url);
              });
            });
          });
        }
      },
      [changeValue, fileSizeCheck, name, onFile, onValueChangeByUser]
    );

    const handleLinkClick = useCallback(() => {
      setIsOpenLinkDialog(true);
    }, []);

    const handleRemoveClick = useCallback(() => {
      changeValue('');
      nextTick(() => {
        if (onValueChangeByUser) onValueChangeByUser(name, '');
      });
    }, [changeValue, name, onValueChangeByUser]);

    const handleLinkDialogConfirm = useCallback(
      (url: string) => {
        if (onLink) {
          onLink(url).then((finalUrl) => {
            changeValue(finalUrl);
            nextTick(() => {
              if (onValueChangeByUser) onValueChangeByUser(name, finalUrl);
            });
          });
        } else {
          changeValue(url);
          nextTick(() => {
            if (onValueChangeByUser) onValueChangeByUser(name, url);
          });
        }
      },
      [changeValue, name, onLink, onValueChangeByUser]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormItemBase
        variant={variant}
        size={size}
        color={color}
        focused={focused}
        className={classNames(
          className,
          'FormValueItem',
          'FormFile',
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
        helperText={
          <div>
            {preview}
            <div>{error ? errorHelperText : helperText}</div>
          </div>
        }
        hideLabel={!hideUrl}
        helperTextProps={{
          style: {
            marginLeft: !hideUrl && variant !== 'standard' ? 14 : undefined,
            marginTop: !hideUrl && variant === 'standard' ? 19 : undefined,
          },
        }}
        style={{ width: fullWidth ? '100%' : undefined }}
        control={
          <div className='control-wrap'>
            {!hideUrl && (
              <div className='file-name-wrap'>
                <TextField
                  inputRef={textFieldRef}
                  className='file-name'
                  variant={variant}
                  label={label}
                  size={size}
                  required={required}
                  value={value || ''}
                  focused={focused}
                  disabled={disabled}
                  fullWidth
                  error={error}
                  InputLabelProps={labelShrink ? { shrink: labelShrink } : undefined}
                  inputProps={{ readOnly: true }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <div className='input-file-wrap'>
                          {!hideUpload && (
                            <>
                              <Button
                                variant='text'
                                tabIndex={uploadTabIndex == null ? -1 : uploadTabIndex}
                                className={classNames(
                                  'input-file-btn form-file-btn',
                                  !!hideUploadLabel && 'hidden-label'
                                )}
                                color={error ? 'error' : color}
                                disabled={readOnly || disabled}
                                ref={fileUploadBtnRef}
                              >
                                <label htmlFor={id}>
                                  <PdgIcon>upload</PdgIcon>
                                  {!hideUploadLabel && (uploadLabel || '파일 업로드')}
                                </label>
                              </Button>
                              <input
                                type='file'
                                accept={accept}
                                id={id}
                                value={fileValue}
                                className='input-file'
                                onChange={handleFileChange}
                              />
                            </>
                          )}
                          {!hideLink && (
                            <Button
                              variant='text'
                              tabIndex={linkTabIndex == null ? -1 : linkTabIndex}
                              className={classNames('link-btn  form-file-btn', !!hideLinkLabel && 'hidden-label')}
                              color={error ? 'error' : color}
                              disabled={readOnly || disabled}
                              ref={linkBtnRef}
                              onClick={handleLinkClick}
                            >
                              <label>
                                <PdgIcon>link</PdgIcon>
                                {!hideLinkLabel && (linkLabel || '링크')}
                              </label>
                            </Button>
                          )}
                          {!hideRemove && notEmpty(value) && (
                            <Button
                              variant='text'
                              tabIndex={removeTabIndex == null ? -1 : removeTabIndex}
                              className={classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label')}
                              color={error ? 'error' : color}
                              disabled={readOnly || disabled}
                              onClick={handleRemoveClick}
                            >
                              <label>
                                <PdgIcon>Close</PdgIcon>
                                {!hideRemoveLabel && (removeLabel || '삭제')}
                              </label>
                            </Button>
                          )}
                        </div>
                      </InputAdornment>
                    ),
                  }}
                  placeholder='파일을 선택하세요'
                />
              </div>
            )}
            {!!hideUrl && (
              <div className='input-file-wrap'>
                {!hideUpload && (
                  <>
                    <Button
                      variant='outlined'
                      tabIndex={uploadTabIndex}
                      className={classNames('input-file-btn form-file-btn', !!hideUploadLabel && 'hidden-label')}
                      color={error ? 'error' : color}
                      ref={fileUploadBtnRef}
                      disabled={disabled}
                    >
                      <label htmlFor={id}>
                        <PdgIcon>upload</PdgIcon>
                        {!hideUploadLabel && (uploadLabel || '파일 업로드')}
                      </label>
                    </Button>
                    <input
                      type='file'
                      accept={accept}
                      id={id}
                      value={fileValue}
                      className='input-file'
                      onChange={handleFileChange}
                    />
                  </>
                )}
                {!hideLink && (
                  <Button
                    variant='outlined'
                    tabIndex={linkTabIndex}
                    className={classNames('link-btn form-file-btn', !!hideLinkLabel && 'hidden-label')}
                    color={error ? 'error' : color}
                    onClick={handleLinkClick}
                    disabled={disabled}
                    ref={linkBtnRef}
                  >
                    <label>
                      <PdgIcon>link</PdgIcon>
                      {!hideLinkLabel && (linkLabel || '링크')}
                    </label>
                  </Button>
                )}
                {!hideRemove && notEmpty(value) && (
                  <Button
                    variant='outlined'
                    tabIndex={removeTabIndex}
                    className={classNames('remove-btn form-file-btn', !!hideRemoveLabel && 'hidden-label')}
                    color={error ? 'error' : color}
                    disabled={disabled}
                    onClick={handleRemoveClick}
                  >
                    <label>
                      <PdgIcon>Close</PdgIcon>
                      {!hideRemoveLabel && (removeLabel || '삭제')}
                    </label>
                  </Button>
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
  }
);

FormFile.displayName = 'FormFile';
FormFile.defaultProps = FormFileDefaultProps;

export default FormFile;
