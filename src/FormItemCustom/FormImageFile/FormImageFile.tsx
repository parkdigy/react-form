import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { FormImageFileProps as Props, FormImageFileDefaultProps, FormImageFileCommands } from './FormImageFile.types';
import FormFile from '../FormFile';
import { PrivateAlertDialog, PrivateAlertDialogProps } from '../../@private';
import { Tooltip, Typography } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';
import './FormImageFile.scss';

const FormImageFile = React.forwardRef<FormImageFileCommands, Props>(
  ({ className, imageSize, preview, previewMaxHeight, value: initValue, onChange, onFile, onLink, ...props }, ref) => {
    const [value, setValue] = useAutoUpdateState(initValue);

    const [alertDialogProps, setAlertDialogProps] = useState<{
      open: boolean;
      color?: PrivateAlertDialogProps['color'];
      title?: ReactNode;
      content?: ReactNode;
    }>({
      open: false,
    });
    const [urlKit] = useState<typeof window.URL | typeof window.webkitURL | undefined>(() => {
      if (window.URL) return window.URL;
      else if (window.webkitURL) return window.webkitURL;
    });

    // Function --------------------------------------------------------------------------------------------------------

    const imageSizeCheck = useCallback(
      (file: File | string) => {
        if (imageSize && urlKit) {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const width = img.naturalWidth;
              const height = img.naturalHeight;

              urlKit.revokeObjectURL(img.src);

              let sizeOk = false;
              let sizeText = '';
              if (Array.isArray(imageSize)) {
                imageSize.forEach((a) => {
                  if (width === a.width && height === a.height) {
                    sizeOk = true;
                  }
                  if (sizeText !== '') sizeText += ', ';
                  sizeText += `${a.width}*${a.height}`;
                });
              } else {
                sizeOk = width === imageSize.width && height === imageSize.height;
                sizeText = `${imageSize.width}*${imageSize.height}`;
              }

              if (sizeOk) {
                resolve();
              } else {
                setAlertDialogProps({
                  open: true,
                  color: 'error',
                  title: '이미지 사이즈',
                  content: (
                    <>
                      <div>
                        <Typography color='error'>{sizeText} 사이즈의 이미지만 사용 가능합니다.</Typography>
                      </div>
                      <div style={{ opacity: 0.7 }}>
                        (선택한 이미지 사이즈 : {width}*{height})
                      </div>
                    </>
                  ),
                });
                reject();
              }
            };
            img.onerror = () => {
              setAlertDialogProps({ open: true, title: '이미지 사이즈', content: '이미지를 불러올 수 없습니다.' });

              reject();
            };

            if (file instanceof File) {
              img.src = urlKit.createObjectURL(file);
            } else {
              img.src = file;
            }
          });
        }
        return Promise.resolve();
      },
      [urlKit, imageSize]
    );

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback(
      (value: string) => {
        setValue(value);
        onChange && onChange(value);
      },
      [onChange, setValue]
    );

    const handleFile = useCallback(
      (file: File) => {
        return new Promise<string>((resolve, reject) => {
          imageSizeCheck(file)
            .then(() => {
              if (onFile) {
                onFile(file)
                  .then((url: string) => {
                    resolve(url);
                  })
                  .catch(() => reject());
              } else {
                reject();
              }
            })
            .catch(() => {
              reject();
            });
        });
      },
      [onFile, imageSizeCheck]
    );

    const handleLink = useCallback(
      (url: string) => {
        return new Promise<string>((resolve, reject) => {
          imageSizeCheck(url)
            .then(() => {
              if (onLink) {
                onLink(url)
                  .then((finalUrl) => resolve(finalUrl))
                  .catch(() => reject());
              } else {
                resolve(url);
              }
            })
            .catch(() => {
              reject();
            });
        });
      },
      [onLink, imageSizeCheck]
    );

    // Memo --------------------------------------------------------------------------------------------------------------

    const previewNode = useMemo(() => {
      if (preview && value) {
        return (
          <a href={value} target='_blank'>
            <Tooltip
              title={
                <div style={{ paddingTop: 3, paddingBottom: 3 }}>
                  <img src={value} style={{ maxWidth: '100%', verticalAlign: 'middle' }} />
                </div>
              }
            >
              <img className='preview-img' src={value} style={{ maxHeight: previewMaxHeight || undefined }} alt='' />
            </Tooltip>
          </a>
        );
      }
    }, [preview, previewMaxHeight, value]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <>
        <FormFile
          ref={ref}
          className={classNames(className, 'FormImageFile')}
          value={value}
          preview={previewNode}
          onChange={handleChange}
          onFile={handleFile}
          onLink={handleLink}
          {...props}
        />
        <PrivateAlertDialog {...alertDialogProps} onClose={() => setAlertDialogProps({ open: false })} />
      </>
    );
  }
);

FormImageFile.displayName = 'FormImageFile';
FormImageFile.defaultProps = FormImageFileDefaultProps;

export default FormImageFile;
