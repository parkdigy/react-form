import React, { ChangeEvent, ReactNode, useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { useAutoUpdateLayoutState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, notEmpty, nextTick, getFileSizeText } from '../../@util';
import { FormFileProps as Props, FormFileDefaultProps, FormFileCommands } from './FormFile.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import { FormIcon } from '../../FormCommon';
import LinkDialog from './LinkDialog/LinkDialog';
import { PrivateAlertDialog, PrivateAlertDialogProps } from '../../@private';
import './FormFile.scss';

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
      hideLink,
      maxFileSize,
      preview,
      onFile,
      onLink,
      //----------------------------------------------------------------------------------------------------------------
      name,
      labelIcon,
      label: initLabel,
      required,
      disabled: initDisabled,
      error: initError,
      helperText: initHelperText,
      value: initValue,
      exceptValue,
      onChange,
      onValidate,
      //----------------------------------------------------------------------------------------------------------------
      className,
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      labelShrink: formLabelShrink,
      fullWidth: formFullWidth,
      onAddValueItem,
      onValueChange,
      onRemoveValueItem,
      onValueChangeByUser,
    } = useFormState();

    // Memo - FormState ------------------------------------------------------------------------------------------------

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

    // Ref -------------------------------------------------------------------------------------------------------------

    const textFieldRef = useRef<HTMLInputElement>(null);
    const fileUploadBtnRef = useRef<HTMLButtonElement>(null);

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateLayoutState<Props['value']>(initValue);
    const [fileValue] = useState('');

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateLayoutState<Props['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateLayoutState<Props['helperText']>(initHelperText);
    const [disabled, setDisabled] = useAutoUpdateLayoutState<Props['disabled']>(initDisabled);
    const [isOpenLinkDialog, setIsOpenLinkDialog] = useState(false);
    const [alertDialogProps, setAlertDialogProps] = useState<{
      open: boolean;
      color?: PrivateAlertDialogProps['color'];
      title?: ReactNode;
      content?: ReactNode;
    }>({ open: false });

    // Memo --------------------------------------------------------------------------------------------------------------

    const label = useMemo(() => {
      return labelIcon ? (
        <>
          <FormIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</FormIcon>
          <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
        </>
      ) : (
        initLabel
      );
    }, [initLabel, labelIcon]);

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(() => {
      if (hideUrl) {
        fileUploadBtnRef.current?.focus();
      } else {
        textFieldRef.current?.focus();
      }
    }, [hideUrl]);

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback(
      function (error: Props['error'], helperText: Props['helperText']) {
        setError(error);
        setHelperText(helperText);
      },
      [setError, setHelperText]
    );

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      function (value: Props['value']) {
        let isEmptyValue = false;
        if (value) {
          const d = document.createElement('div');
          d.innerHTML = value;
          const text = d.textContent || d.innerText;
          isEmptyValue = empty(text.trim());
        }
        if (required && (isEmptyValue || empty(value))) {
          setErrorHelperText(true, '필수 선택 항목입니다.');
          return false;
        }

        if (onValidate) {
          const onValidateResult = onValidate(value);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorHelperText(false, initHelperText);

        return true;
      },
      [required, onValidate, setErrorHelperText, initHelperText]
    );

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastValue = value;
      let lastDisabled = !!disabled;

      const commands: FormFileCommands = {
        getType: () => 'FormFile',
        getName: () => name,
        getReset: () => initValue,
        reset: () => {
          lastValue = initValue;
          setValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value) => {
          lastValue = value;
          setValue(lastValue);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled: boolean) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(value),
        setError: (error: Props['error'], helperText: Props['helperText']) =>
          setErrorHelperText(error, error ? helperText : initHelperText),
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
      initHelperText,
      ref,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setValue,
      setDisabled,
      setErrorHelperText,
    ]);

    // Function --------------------------------------------------------------------------------------------------------

    const fileSizeCheck = useCallback(
      (file: File | string) => {
        if (maxFileSize) {
          return new Promise<void>((resolve, reject) => {
            if (typeof file === 'object') {
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

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleFileChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (onFile) {
          const target = e.currentTarget;
          const file = (target.files as FileList)[0];
          fileSizeCheck(file).then(() => {
            onFile(file).then((url) => {
              setValue(url);
              nextTick(() => {
                if (onValueChangeByUser) onValueChangeByUser(name, url);
              });
            });
          });
        }
      },
      [fileSizeCheck, name, onFile, onValueChangeByUser, setValue]
    );

    const handleLinkClick = useCallback(() => {
      setIsOpenLinkDialog(true);
    }, []);

    const handleRemoveClick = useCallback(() => {
      setValue('');
      nextTick(() => {
        if (onValueChangeByUser) onValueChangeByUser(name, '');
      });
    }, [name, onValueChangeByUser, setValue]);

    const handleLinkDialogConfirm = useCallback(
      (url: string) => {
        if (onLink) {
          onLink(url).then((finalUrl) => {
            setValue(finalUrl);
            nextTick(() => {
              if (onValueChangeByUser) onValueChangeByUser(name, finalUrl);
            });
          });
        } else {
          setValue(url);
          nextTick(() => {
            if (onValueChangeByUser) onValueChangeByUser(name, url);
          });
        }
      },
      [name, onLink, onValueChangeByUser, setValue]
    );

    // Render ----------------------------------------------------------------------------------------------------------

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
          notEmpty(value) && 'with-value'
        )}
        labelIcon={hideUrl ? labelIcon : undefined}
        label={hideUrl ? initLabel : undefined}
        error={error}
        required={required}
        fullWidth={fullWidth}
        helperText={
          <div>
            {preview}
            <div>{helperText}</div>
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
                          <Button
                            variant='text'
                            className='input-file-btn form-file-btn'
                            color={error ? 'error' : color}
                            disabled={disabled}
                            ref={fileUploadBtnRef}
                          >
                            <label htmlFor={id}>
                              <FormIcon>upload</FormIcon>파일 업로드
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
                          {!hideLink && (
                            <Button
                              variant='text'
                              className='link-btn  form-file-btn'
                              color={error ? 'error' : color}
                              disabled={disabled}
                              onClick={handleLinkClick}
                            >
                              <label>
                                <FormIcon>link</FormIcon>링크
                              </label>
                            </Button>
                          )}
                          {notEmpty(value) && (
                            <Button
                              variant='text'
                              className='remove-btn form-file-btn'
                              color={error ? 'error' : color}
                              disabled={disabled}
                              onClick={handleRemoveClick}
                            >
                              <label>
                                <FormIcon>Close</FormIcon>삭제
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
                <Button
                  variant='outlined'
                  className='input-file-btn form-file-btn'
                  color={error ? 'error' : color}
                  ref={fileUploadBtnRef}
                  disabled={disabled}
                >
                  <label htmlFor={id}>
                    <FormIcon>upload</FormIcon>파일 업로드
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
                {!hideLink && (
                  <Button
                    variant='outlined'
                    className='link-btn  form-file-btn'
                    color={error ? 'error' : color}
                    onClick={handleLinkClick}
                    disabled={disabled}
                  >
                    <label>
                      <FormIcon>link</FormIcon>링크
                    </label>
                  </Button>
                )}
                {notEmpty(value) && (
                  <Button
                    variant='outlined'
                    className='remove-btn form-file-btn'
                    color={error ? 'error' : color}
                    disabled={disabled}
                    onClick={handleRemoveClick}
                  >
                    <label>
                      <FormIcon>Close</FormIcon>삭제
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
