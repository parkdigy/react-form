import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { FormImageFileProps as Props, FormImageFileDefaultProps, FormImageFileCommands } from './FormImageFile.types';
import FormFile from '../FormFile';
import { PrivateAlertDialog } from '../../@private';
import { Typography } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';
import './FormImageFile.scss';

const FormImageFile = React.forwardRef<FormImageFileCommands, Props>(
  (
    { className, maxImageSize, preview, previewMaxHeight, value: initValue, onChange, onFile, onLink, ...props },
    ref
  ) => {
    const [value, setValue] = useAutoUpdateState(initValue);
    const [previewNode, setPreviewNode] = useState<ReactNode>();

    const [alertDialogProps, setAlertDialogProps] = useState<{ open: boolean; title?: ReactNode; content?: ReactNode }>(
      {
        open: false,
      }
    );
    const [urlKit] = useState<typeof window.URL | typeof window.webkitURL | undefined>(() => {
      if (window.URL) return window.URL;
      else if (window.webkitURL) return window.webkitURL;
    });

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      setPreviewNode(
        preview && value ? (
          <img className='preview-img' src={value} style={{ maxHeight: previewMaxHeight || undefined }} alt='' />
        ) : undefined
      );
    }, [value, preview, previewMaxHeight]);

    // Function --------------------------------------------------------------------------------------------------------

    const imageSizeCheck = useCallback(
      (file: File | string) => {
        if (maxImageSize && urlKit) {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const width = img.naturalWidth;
              const height = img.naturalHeight;

              urlKit.revokeObjectURL(img.src);

              let sizeOk = false;
              let sizeText = '';
              if (Array.isArray(maxImageSize)) {
                maxImageSize.forEach((a) => {
                  if (width === a.width && height === a.height) {
                    sizeOk = true;
                  }
                  if (sizeText !== '') sizeText += ', ';
                  sizeText += `${a.width}*${a.height}`;
                });
              } else {
                sizeOk = width === maxImageSize.width && height === maxImageSize.height;
                sizeText = `${maxImageSize.width}*${maxImageSize.height}`;
              }

              if (sizeOk) {
                resolve();
              } else {
                setAlertDialogProps({
                  open: true,
                  title: '이미지 사이즈',
                  content: (
                    <>
                      <div>
                        <Typography color='error'>{sizeText} 사이즈의 이미지만 사용 가능합니다.</Typography>
                      </div>
                      <div>
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

            if (typeof file === 'object') img.src = urlKit.createObjectURL(file);
            else img.src = file;
          });
        }
        return Promise.resolve();
      },
      [urlKit, maxImageSize]
    );

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback((value: string) => {
      setValue(value);
      onChange && onChange(value);
    }, []);

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
