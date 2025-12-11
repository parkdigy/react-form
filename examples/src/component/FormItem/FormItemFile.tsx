import React, { useState } from 'react';
import {
  PForm,
  PFormRow,
  PFormCol,
  PFormFile,
  PFormImageFile,
  PFormButton,
  PFormCheckbox,
  PFormBody,
  PFormFooter,
} from '../../../../src';
import { OutlinedPaper } from '@ccomp';

const FormItemFile = () => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [hideUrl, setHideUrl] = useState(false);
  const [hideUpload, setHideUpload] = useState(false);
  const [hideUploadLabel, setHideUploadLabel] = useState(false);
  const [hideLink, setHideLink] = useState(false);
  const [hideLinkLabel, setHideLinkLabel] = useState(false);
  const [hideRemove, setHideRemove] = useState(false);
  const [hideRemoveLabel, setHideRemoveLabel] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [preview, setPreview] = useState(false);
  const [previewMaxHeight, setPreviewMaxHeight] = useState(false);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <OutlinedPaper>
        <PForm size='small' style={{ marginTop: 10 }}>
          <PFormBody>
            <PFormRow label='공통'>
              <PFormCol fullWidth={false}>
                <PFormCheckbox
                  name='hideUrl'
                  text='hideUrl'
                  checked={hideUrl}
                  onChange={(checked) => setHideUrl(checked)}
                />
                <PFormCheckbox
                  name='hideUpload'
                  text='hideUpload'
                  checked={hideUpload}
                  onChange={(checked) => setHideUpload(checked)}
                />
                <PFormCheckbox
                  name='hideUploadLabel'
                  text='hideUploadLabel'
                  checked={hideUploadLabel}
                  onChange={(checked) => setHideUploadLabel(checked)}
                />
                <PFormCheckbox
                  name='hideLink'
                  text='hideLink'
                  checked={hideLink}
                  onChange={(checked) => setHideLink(checked)}
                />
                <PFormCheckbox
                  name='hideLinkLabel'
                  text='hideLinkLabel'
                  checked={hideLinkLabel}
                  onChange={(checked) => setHideLinkLabel(checked)}
                />
                <PFormCheckbox
                  name='hideRemove'
                  text='hideRemove'
                  checked={hideRemove}
                  onChange={(checked) => setHideRemove(checked)}
                />
                <PFormCheckbox
                  name='hideRemoveLabel'
                  text='hideRemoveLabel'
                  checked={hideRemoveLabel}
                  onChange={(checked) => setHideRemoveLabel(checked)}
                />
                <PFormCheckbox
                  name='readOnly'
                  text='readOnly'
                  checked={readOnly}
                  onChange={(checked) => setReadOnly(checked)}
                />
                <PFormCheckbox
                  name='disabled'
                  text='disabled'
                  checked={disabled}
                  onChange={(checked) => setDisabled(checked)}
                />
              </PFormCol>
            </PFormRow>
            <PFormRow label='PFormImageFile'>
              <PFormCol fullWidth={false}>
                <PFormCheckbox
                  name='preview'
                  text='preview'
                  checked={preview}
                  onChange={(checked) => setPreview(checked)}
                />
                <PFormCheckbox
                  name='previewMaxHeight'
                  text='previewMaxHeight (100)'
                  checked={previewMaxHeight}
                  onChange={(checked) => setPreviewMaxHeight(checked)}
                />
              </PFormCol>
            </PFormRow>
          </PFormBody>
        </PForm>
      </OutlinedPaper>
      <br />
      <PForm fullHeight onSubmit={(data) => ll(data)}>
        <PFormBody>
          <PFormRow>
            <PFormCol>
              <PFormFile
                name='PFormFile'
                label='PFormFile'
                readOnly={readOnly}
                hideUrl={hideUrl}
                hideUpload={hideUpload}
                hideUploadLabel={hideUploadLabel}
                hideLink={hideLink}
                hideLinkLabel={hideLinkLabel}
                hideRemove={hideRemove}
                hideRemoveLabel={hideRemoveLabel}
                disabled={disabled}
                onFile={(file: File) => {
                  return new Promise<string>((resolve) => {
                    resolve(`http://test.com/${file.name}`);
                  });
                }}
              />
            </PFormCol>
          </PFormRow>
          <PFormRow>
            <PFormCol>
              <PFormImageFile
                name='PFormImageFile'
                label='PFormImageFile'
                readOnly={readOnly}
                hideUrl={hideUrl}
                hideUpload={hideUpload}
                hideUploadLabel={hideUploadLabel}
                hideLink={hideLink}
                hideLinkLabel={hideLinkLabel}
                hideRemove={hideRemove}
                hideRemoveLabel={hideRemoveLabel}
                disabled={disabled}
                preview={preview}
                previewMaxHeight={previewMaxHeight ? 100 : undefined}
                // imageSize={{ width: 114, height: 114 }}
                // helperText='114*114 사이즈의 이미지만 등록할 수 있습니다.'
                onFile={() => {
                  return new Promise<string>((resolve) => {
                    resolve(
                      `http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTPUiIbEFstepJEbzdzMeuS8lxZ7VrL0PFCbAgVaY_2UJkiYg_e3PoZsbH2EglE3cPHtgRHut8RE_MkpOYZOqs`
                    );
                  });
                }}
              />
            </PFormCol>
          </PFormRow>
        </PFormBody>
        <PFormFooter>
          <PFormRow>
            <PFormCol>
              <PFormButton type='submit'>확인</PFormButton>
            </PFormCol>
          </PFormRow>
        </PFormFooter>
      </PForm>
    </>
  );
};

export default FormItemFile;
