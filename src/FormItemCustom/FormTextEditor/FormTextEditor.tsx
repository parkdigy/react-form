import React, { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Editor } from '@tinymce/tinymce-react';
import { Skeleton } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, nextTick } from '../../@util';
import {
  FormTextEditorProps as Props,
  FormTextEditorDefaultProps,
  FormTextEditorCommands,
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
      //----------------------------------------------------------------------------------------------------------------
      menubar,
      height,
      onImageUpload,
      //----------------------------------------------------------------------------------------------------------------
      name,
      labelIcon,
      label,
      readOnly,
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
      onAddValueItem,
      onValueChange,
      onRemoveValueItem,
      onValueChangeByUser,
    } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [focused, setFocused] = useAutoUpdateState<Props['focused']>(initFocused || formFocused);

    // Ref -------------------------------------------------------------------------------------------------------------

    const editorRef = useRef<any>(null);
    const keyDownTime = useRef(0);

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateState<Props['value']>(initValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateState<Props['helperText']>(initHelperText);
    const [initialized, setInitialized] = useState(false);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);

    // Function - focus ------------------------------------------------------------------------------------------------

    const focus = useCallback(
      function () {
        const textarea = editorRef.current?.elementRef?.current;
        if (textarea) {
          textarea.style.display = 'block';
          textarea.focus();
          textarea.style.display = 'none';
        }
      },
      [editorRef]
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
          setErrorHelperText(true, '필수 입력 항목입니다.');
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
      [onValidate, initHelperText]
    );

    // Function - setErrorHelperText -----------------------------------------------------------------------------------

    const setErrorHelperText = useCallback(function (error: Props['error'], helperText: Props['helperText']) {
      setError(error);
      setHelperText(helperText);
    }, []);

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastValue = value;
      let lastDisabled = !!disabled;

      const commands: FormTextEditorCommands = {
        getType: () => 'FormTextEditor',
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
      [name, onValueChangeByUser]
    );

    const handleKeyDown = useCallback(() => {
      keyDownTime.current = new Date().getTime();
    }, []);

    const handleImageUpload = useCallback(
      (
        blobInfo: BlobInfo,
        success: (url: string) => void,
        failure: (err: string) => void,
        progress?: (percent: number) => void
      ) => {
        if (onImageUpload) onImageUpload(blobInfo.blob(), success, failure, progress);
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
        helperText={helperText}
        helperTextProps={{ style: { marginLeft: 5 } }}
        style={{ width: '100%' }}
        controlHeight={height}
        control={
          <>
            {!initialized ? <Skeleton variant='rectangular' width='100%' height={height} /> : null}
            <Editor
              ref={editorRef}
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
                  'advlist',
                  'advlist autolink lists link image',
                  'charmap print preview anchor',
                  'searchreplace visualblocks code',
                  'insertdatetime media table paste wordcount',
                ],
                toolbar:
                  'undo redo | \
                   formatselect bullist numlist outdent indent | \
                   bold italic | align | forecolor backcolor | \
                   link image media | advtable | code',
                images_upload_handler: handleImageUpload,
              }}
              onInit={() => {
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
