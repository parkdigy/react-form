import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Editor } from '@tinymce/tinymce-react';
import { Skeleton } from '@mui/material';
import { useAutoUpdateRefState, useAutoUpdateState, useForwardRef } from '@pdg/react-hook';
import { empty, ifEmpty, ifUndefined } from '@pdg/compare';
import { PFormTextEditorProps as Props, PFormTextEditorCommands, PFormTextEditorValue } from './PFormTextEditor.types';
import PFormItemBase from '../PFormItemBase';
import { useFormState } from '../../PFormContext';
import { getFinalValue } from './PFormTextEditor.function.private';
import type { Editor as TinyMCEEditor } from 'tinymce';
import './PFormTextEditor.scss';

type PFormTextEditorType = typeof PFormTextEditor & {
  apiKey: string;
  onOpenWindow?: () => void;
  onCloseWindow?: () => void;
  onImageUpload?: Props['onImageUpload'];
};

interface BlobInfo {
  id: () => string;
  name: () => string;
  filename: () => string;
  blob: () => Blob;
  base64: () => string;
  blobUri: () => string;
  uri: () => string | undefined;
}

const PFormTextEditor = ({
  ref,
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  // ---------------------------------------------------------------------------------------------------------------
  apiKey,
  toolbar,
  onOpenWindow,
  onCloseWindow,
  //----------------------------------------------------------------------------------------------------------------
  menubar = true,
  height = 500,
  hidden: initHidden,
  onImageUpload,
  //----------------------------------------------------------------------------------------------------------------
  name,
  labelIcon,
  label,
  readOnly,
  required,
  disabled: initDisabled,
  error: initError,
  helperText: helperText,
  value: initValue = '',
  data: initData,
  exceptValue,
  onChange,
  onValidate,
  //----------------------------------------------------------------------------------------------------------------
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
    disabled: formDisabled,
    onAddValueItem,
    onValueChange,
    onRemoveValueItem,
    onValueChangeByUser,
  } = useFormState<PFormTextEditorValue, false>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = ifUndefined(initVariant, formVariant);
  const size = ifUndefined(initSize, formSize);
  const color = ifUndefined(initColor, formColor);

  /********************************************************************************************************************
   * State - FormState
   * ******************************************************************************************************************/

  const [focused, setFocused] = useAutoUpdateState<Props['focused']>(ifUndefined(initFocused, formFocused));

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const editorRef = useRef<TinyMCEEditor>(null);
  const keyDownTime = useRef(0);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [error, setError] = useAutoUpdateState<Props['error']>(initError);
  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [initialized, setInitialized] = useState(false);

  const [dataRef, , setData] = useAutoUpdateRefState(initData);
  const [disabledRef, disabled, setDisabled] = useAutoUpdateRefState(
    useMemo(() => (initDisabled == null ? formDisabled : initDisabled), [initDisabled, formDisabled])
  );
  const [hiddenRef, hidden, setHidden] = useAutoUpdateRefState(initHidden);

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
    function (value: PFormTextEditorValue) {
      if (required && empty(editorRef.current?.getContent())) {
        setErrorErrorHelperText(true, '필수 입력 항목입니다.');
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

  const [valueRef, value, _setValue] = useAutoUpdateRefState(initValue, getFinalValue);

  const updateValue = useCallback(
    (newValue: string) => {
      const finalValue = _setValue(newValue);

      if (error) validate(finalValue);
      if (onChange) onChange(finalValue);
      onValueChange(name, finalValue);

      return finalValue;
    },
    [_setValue, error, name, onChange, onValueChange, validate]
  );

  /********************************************************************************************************************
   * Function - focus
   * ******************************************************************************************************************/

  const focus = useCallback(
    function () {
      editorRef.current?.focus();
    },
    [editorRef]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormTextEditorCommands>(
    () => ({
      getType: () => 'PFormTextEditor',
      getName: () => name,
      getReset: () => getFinalValue(initValue),
      reset: () => updateValue(initValue),
      getValue: () => valueRef.current,
      setValue: updateValue,
      getData: () => dataRef.current,
      setData,
      isExceptValue: () => !!exceptValue,
      isDisabled: () => !!disabledRef.current,
      setDisabled,
      isHidden: () => !!hiddenRef.current,
      setHidden,
      focus,
      focusValidate: focus,
      validate: () => validate(valueRef.current),
      setError: (error: Props['error'], errorText: Props['helperText']) =>
        setErrorErrorHelperText(error, error ? errorText : undefined),
    }),
    [
      dataRef,
      disabledRef,
      exceptValue,
      focus,
      hiddenRef,
      initValue,
      name,
      setData,
      setDisabled,
      setErrorErrorHelperText,
      setHidden,
      updateValue,
      validate,
      valueRef,
    ]
  );

  useForwardRef(
    ref,
    commands,
    useCallback((commands: PFormTextEditorCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleEditorChange = useCallback(
    (value: string) => {
      updateValue(value);
      if (new Date().getTime() - keyDownTime.current < 300) {
        setTimeout(() => {
          if (onValueChangeByUser) onValueChangeByUser(name, value);
        });
      }
    },
    [name, onValueChangeByUser, updateValue]
  );

  const handleKeyDown = useCallback(() => {
    keyDownTime.current = new Date().getTime();
  }, []);

  const handleImageUpload = useCallback(
    (blobInfo: BlobInfo, progress: (percent: number) => void) => {
      return new Promise<string>((resolve, reject) => {
        const onImageUploadFunc = onImageUpload ?? (PFormTextEditor as PFormTextEditorType).onImageUpload;
        if (onImageUploadFunc) {
          onImageUploadFunc(
            blobInfo.blob(),
            (url) => {
              resolve(url);
            },
            (err) => reject(err),
            progress
          );
        } else {
          reject('onImageUpload not implemented.');
        }
      });
    },
    [onImageUpload]
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
      className={classNames(className, 'PFormValueItem', 'PFormTextEditor', !initialized && 'initializing')}
      labelIcon={labelIcon}
      label={label}
      error={error}
      required={required}
      fullWidth={true}
      helperText={error ? errorHelperText : helperText}
      helperTextProps={{ style: { marginLeft: 5 } }}
      style={{ width: '100%' }}
      hidden={hidden}
      controlHeight={height}
      control={
        <>
          {!initialized ? <Skeleton variant='rectangular' width='100%' height={height} /> : null}
          <Editor
            apiKey={ifEmpty(apiKey, (PFormTextEditor as PFormTextEditorType).apiKey)}
            value={value}
            disabled={readOnly || disabled}
            init={{
              height,
              menubar,
              language: 'ko_KR',
              contextmenu: false,
              content_style:
                'body {font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: hsl(0,0%,20%);} p {padding:0; margin:0}',
              plugins: [
                'lists',
                'advlist',
                'image',
                'autolink',
                'link',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'insertdatetime',
                'media',
                'table',
                'wordcount',
              ],
              toolbar:
                toolbar ||
                'undo redo | \
                   formatselect bullist numlist outdent indent | \
                   bold italic | align | forecolor backcolor | \
                   link image media | advtable | code',
              images_upload_handler: handleImageUpload,
            }}
            onInit={(evt, editor) => {
              editorRef.current = editor;

              editor.on('OpenWindow', () => {
                onOpenWindow?.();
                (PFormTextEditor as PFormTextEditorType).onOpenWindow?.();
              });

              editor.on('CloseWindow', () => {
                onCloseWindow?.();
                (PFormTextEditor as PFormTextEditorType).onCloseWindow?.();
              });

              setTimeout(() => setInitialized(true), 10);
            }}
            onEditorChange={handleEditorChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(initFocused || true)}
            onBlur={() => setFocused(initFocused || false)}
          />
        </>
      }
    />
  );
};

(PFormTextEditor as PFormTextEditorType).apiKey = '';

export default PFormTextEditor as PFormTextEditorType;
