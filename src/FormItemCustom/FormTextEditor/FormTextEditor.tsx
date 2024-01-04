import React, { useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { Skeleton } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, nextTick } from '../../@util';
import {
  FormTextEditorProps as Props,
  FormTextEditorDefaultProps,
  FormTextEditorCommands,
  FormTextEditorValue,
} from './FormTextEditor.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import './FormTextEditor.scss';

interface BlobInfo {
  id: () => string;
  name: () => string;
  filename: () => string;
  blob: () => Blob;
  base64: () => string;
  blobUri: () => string;
  uri: () => string | undefined;
}

const FormTextEditor = React.forwardRef<FormTextEditorCommands, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      // ---------------------------------------------------------------------------------------------------------------
      apiKey,
      toolbar,
      //----------------------------------------------------------------------------------------------------------------
      menubar,
      height,
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
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      onAddValueItem,
      onValueChange,
      onRemoveValueItem,
      onValueChangeByUser,
    } = useFormState<FormTextEditorValue, false>();

    // Memo - FormState ------------------------------------------------------------------------------------------------

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);

    // State - FormState -----------------------------------------------------------------------------------------------

    const [focused, setFocused] = useAutoUpdateState<Props['focused']>(initFocused == null ? formFocused : initFocused);

    // Ref -------------------------------------------------------------------------------------------------------------

    const editorRef = useRef<TinyMCEEditor | null>();
    const keyDownTime = useRef(0);

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateState<FormTextEditorValue>(initValue || '');

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [initialized, setInitialized] = useState(false);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);
    const [hidden, setHidden] = useAutoUpdateState<Props['hidden']>(initHidden);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(
      function () {
        editorRef.current?.focus();
      },
      [editorRef]
    );

    // Function - setErrorErrorHelperText -----------------------------------------------------------------------------------

    const setErrorErrorHelperText = useCallback(
      function (error: Props['error'], errorHelperText: Props['helperText']) {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    // Function - validate ---------------------------------------------------------------------------------------------

    const validate = useCallback(
      function (value: FormTextEditorValue) {
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

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;
      let lastHidden = !!hidden;

      const commands: FormTextEditorCommands = {
        getType: () => 'FormTextEditor',
        getName: () => name,
        getReset: () => initValue || '',
        reset: () => {
          lastValue = initValue || '';
          setValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value) => {
          lastValue = value;
          setValue(lastValue);
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
        setError: (error: Props['error'], errorText: Props['helperText']) =>
          setErrorErrorHelperText(error, error ? errorText : undefined),
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
      ref,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setValue,
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
      validate,
      hidden,
      setHidden,
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleEditorChange = useCallback(
      (value: string) => {
        setValue(value);
        if (new Date().getTime() - keyDownTime.current < 300) {
          nextTick(() => {
            if (onValueChangeByUser) onValueChangeByUser(name, value);
          });
        }
      },
      [name, onValueChangeByUser, setValue]
    );

    const handleKeyDown = useCallback(() => {
      keyDownTime.current = new Date().getTime();
    }, []);

    const handleImageUpload = useCallback(
      (blobInfo: BlobInfo, progress: (percent: number) => void) => {
        return new Promise<string>((resolve, reject) => {
          if (onImageUpload) {
            onImageUpload(
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

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormItemBase
        variant={variant}
        size={size}
        color={color}
        focused={focused}
        className={classNames(className, 'FormValueItem', 'FormTextEditor', !initialized && 'initializing')}
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
              apiKey={apiKey}
              value={value}
              disabled={readOnly || disabled}
              init={{
                height,
                menubar,
                readonly: true,
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
  }
);

FormTextEditor.displayName = 'FormTextEditor';
FormTextEditor.defaultProps = FormTextEditorDefaultProps;

export default FormTextEditor;
