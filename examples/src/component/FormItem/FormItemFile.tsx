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
} from '@pdg/react-form';
import { OutlinedPaper } from '#ccomp';

const FormItemFile = () => {
  const [hideUrl, setHideUrl] = useState(false);
  const [hideUpload, setHideUpload] = useState(false);
  const [hideLink, setHideLink] = useState(false);
  const [hideRemove, setHideRemove] = useState(false);
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
                  name='hideLink'
                  text='hideLink'
                  checked={hideLink}
                  onChange={(checked) => setHideLink(checked)}
                />
                <FormCheckbox
                  name='hideRemove'
                  text='hideRemove'
                  checked={hideRemove}
                  onChange={(checked) => setHideRemove(checked)}
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
                hideUrl={hideUrl}
                hideUpload={hideUpload}
                hideLink={hideLink}
                hideRemove={hideRemove}
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
                hideUrl={hideUrl}
                hideUpload={hideUpload}
                hideLink={hideLink}
                hideRemove={hideRemove}
                disabled={disabled}
                preview={preview}
                previewMaxHeight={previewMaxHeight ? 100 : undefined}
                imageSize={{ width: 100, height: 100 }}
                helperText='100*100 사이즈의 이미지만 등록할 수 있습니다.'
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
