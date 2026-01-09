import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Editor } from '@tinymce/tinymce-react';
import { Skeleton } from '@mui/material';
import { useAutoUpdateRef, useFirstSkipChanged, useForwardRef } from '@pdg/react-hook';
import { empty, ifEmpty } from '@pdg/compare';
import { type PFormTextEditorProps as Props, type PFormTextEditorCommands, type PFormTextEditorValue } from './PFormTextEditor.types';
import PFormItemBase from '../PFormItemBase';
import { useFormState } from '../../PFormContext';
import { getFinalValue } from './PFormTextEditor.function.private';
import type { Editor as TinyMCEEditor } from 'tinymce';
import './PFormTextEditor.scss';
import { type InitOptions } from '@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor';

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
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  focused: initFocused,
  /********************************************************************************************************************/
  apiKey,
  toolbar,
  onOpenWindow,
  onCloseWindow,
  /********************************************************************************************************************/
  menubar = true,
  height = 500,
  hidden: initHidden,
  onImageUpload,
  /********************************************************************************************************************/
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
    disabled: formDisabled,
    onAddValueItem,
    onValueChange,
    onRemoveValueItem,
    onValueChangeByUser,
  } = useFormState<PFormTextEditorValue, false>();

  /********************************************************************************************************************
   * Memo - FormState
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const editorRef = useRef<TinyMCEEditor>(null);
  const keyDownTime = useRef(0);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
  const [initialized, setInitialized] = useState(false);

  /** focused */
  const finalInitFocused = initFocused ?? formFocused;
  const [focused, setFocused] = useState(finalInitFocused);
  useFirstSkipChanged(() => setFocused(finalInitFocused), [finalInitFocused]);

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
    function (value: PFormTextEditorValue) {
      if (required && empty(editorRef.current?.getContent())) {
        setErrorErrorHelperText(true, '필수 입력 항목입니다.');
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
  const focus = useCallback(
    function () {
      editorRef.current?.focus();
    },
    [editorRef]
  );

  /********************************************************************************************************************
   * State - value
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
    (newValue: string) => {
      const finalValue = newValue;
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

  const commands = useMemo<PFormTextEditorCommands>(
    () => ({
      getType: () => 'PFormTextEditor',
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
    useCallback((commands: PFormTextEditorCommands) => onAddValueItem(id, commands), [id, onAddValueItem]),
    useCallback(() => onRemoveValueItem(id), [id, onRemoveValueItem])
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleEditorChange */
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

  /** handleKeyDown */
  const handleKeyDown = useCallback(() => {
    keyDownTime.current = new Date().getTime();
  }, []);

  /** handleImageUpload */
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

  /** handleEditorInit */
  const handleEditorInit = useCallback(
    (evt: any, editor: TinyMCEEditor) => {
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
    },
    [onCloseWindow, onOpenWindow]
  );

  /********************************************************************************************************************
   * Render - Variable
   * ******************************************************************************************************************/

  const editInit = useMemo(
    (): InitOptions => ({
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
    }),
    [handleImageUpload, height, menubar, toolbar]
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
      helperText={helperText}
      helperTextProps={{ style: { marginLeft: 5 } }}
      errorHelperText={errorHelperText}
      errorHelperTextProps={{ style: { marginLeft: 5 } }}
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
            init={editInit}
            onInit={handleEditorInit}
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
