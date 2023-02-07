import React from 'react';
import { FormCol, FormFile, FormImageFile, FormRow } from '../../../../../../src';

const FileUpload = () => {
  return (
    <FormRow>
      <FormCol>
        <FormFile
          name='FormFile'
          label='FormFile'
          helperText={'AAAAAA'}
          onFile={(file: File) => {
            return new Promise<string>((resolve) => {
              resolve(`http://test.com/${file.name}`);
            });
          }}
        />
      </FormCol>
      <FormCol>
        <FormImageFile
          name='FormImageFile'
          label='FormImageFile'
          preview
          previewMaxHeight={100}
          helperText={'AAAAAA'}
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
  );
};

export default FileUpload;
