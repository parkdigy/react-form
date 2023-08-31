import React, { useState } from 'react';
import {
  Form,
  FormRow,
  FormCol,
  FormFile,
  FormImageFile,
  FormButton,
  FormCheckbox,
  FormBody,
  FormFooter,
} from '../../../../src';
import { OutlinedPaper } from '#ccomp';

const FormItemFile = () => {
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

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <OutlinedPaper>
        <Form size='small' style={{ marginTop: 10 }}>
          <FormBody>
            <FormRow label='공통'>
              <FormCol fullWidth={false}>
                <FormCheckbox
                  name='hideUrl'
                  text='hideUrl'
                  checked={hideUrl}
                  onChange={(checked) => setHideUrl(checked)}
                />
                <FormCheckbox
                  name='hideUpload'
                  text='hideUpload'
                  checked={hideUpload}
                  onChange={(checked) => setHideUpload(checked)}
                />
                <FormCheckbox
                  name='hideUploadLabel'
                  text='hideUploadLabel'
                  checked={hideUploadLabel}
                  onChange={(checked) => setHideUploadLabel(checked)}
                />
                <FormCheckbox
                  name='hideLink'
                  text='hideLink'
                  checked={hideLink}
                  onChange={(checked) => setHideLink(checked)}
                />
                <FormCheckbox
                  name='hideLinkLabel'
                  text='hideLinkLabel'
                  checked={hideLinkLabel}
                  onChange={(checked) => setHideLinkLabel(checked)}
                />
                <FormCheckbox
                  name='hideRemove'
                  text='hideRemove'
                  checked={hideRemove}
                  onChange={(checked) => setHideRemove(checked)}
                />
                <FormCheckbox
                  name='hideRemoveLabel'
                  text='hideRemoveLabel'
                  checked={hideRemoveLabel}
                  onChange={(checked) => setHideRemoveLabel(checked)}
                />
                <FormCheckbox
                  name='readOnly'
                  text='readOnly'
                  checked={readOnly}
                  onChange={(checked) => setReadOnly(checked)}
                />
                <FormCheckbox
                  name='disabled'
                  text='disabled'
                  checked={disabled}
                  onChange={(checked) => setDisabled(checked)}
                />
              </FormCol>
            </FormRow>
            <FormRow label='FormImageFile'>
              <FormCol fullWidth={false}>
                <FormCheckbox
                  name='preview'
                  text='preview'
                  checked={preview}
                  onChange={(checked) => setPreview(checked)}
                />
                <FormCheckbox
                  name='previewMaxHeight'
                  text='previewMaxHeight (100)'
                  checked={previewMaxHeight}
                  onChange={(checked) => setPreviewMaxHeight(checked)}
                />
              </FormCol>
            </FormRow>
          </FormBody>
        </Form>
      </OutlinedPaper>
      <br />
      <Form fullHeight onSubmit={(data) => ll(data)}>
        <FormBody>
          <FormRow>
            <FormCol>
              <FormFile
                name='FormFile'
                label='FormFile'
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
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <FormImageFile
                name='FormImageFile'
                label='FormImageFile'
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
            </FormCol>
          </FormRow>
        </FormBody>
        <FormFooter>
          <FormRow>
            <FormCol>
              <FormButton type='submit'>확인</FormButton>
            </FormCol>
          </FormRow>
        </FormFooter>
      </Form>
    </>
  );
};

export default FormItemFile;
