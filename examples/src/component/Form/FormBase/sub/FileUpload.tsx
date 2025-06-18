import React from 'react';
import { PFormCol, PFormFile, PFormImageFile, PFormRow } from '../../../../../../src';

const FileUpload = () => {
  return (
    <PFormRow>
      <PFormCol>
        <PFormFile
          name='PFormFile'
          label='PFormFile'
          helperText={'AAAAAA'}
          onFile={(file: File) => {
            return new Promise<string>((resolve) => {
              resolve(`http://test.com/${file.name}`);
            });
          }}
        />
      </PFormCol>
      <PFormCol>
        <PFormImageFile
          name='PFormImageFile'
          label='PFormImageFile'
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
      </PFormCol>
    </PFormRow>
  );
};

export default FileUpload;
