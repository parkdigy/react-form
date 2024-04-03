import React, { useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Home,
  FormBase,
  FormItemStyling,
  FormItemText,
  FormItemNumber,
  FormItemTag,
  FormItemSelect,
  FormItemTextarea,
  FormItemCheckbox,
  FormItemRadioGroup,
  FormItemToggleButtonGroup,
  FormItemRating,
  FormItemTextEditor,
  FormItemAutocomplete,
  FormItemFile,
  FormItemDate,
  Search,
} from '@comp';

const RootRoutes = () => {
  const rootPath = useMemo(() => (env === 'development' ? '/' : '/react-form/'), []);

  const basicRoutes = useMemo(
    () => (
      <>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormBase />} />
        <Route
          path='/form_item/*'
          element={
            <Routes>
              <Route path='/styling' element={<FormItemStyling />} />
              <Route path='/text' element={<FormItemText />} />
              <Route path='/number' element={<FormItemNumber />} />
              <Route path='/tag' element={<FormItemTag />} />
              <Route path='/select' element={<FormItemSelect />} />
              <Route path='/autocomplete' element={<FormItemAutocomplete />} />
              <Route path='/textarea' element={<FormItemTextarea />} />
              <Route path='/checkbox' element={<FormItemCheckbox />} />
              <Route path='/radio' element={<FormItemRadioGroup />} />
              <Route path='/toggle_button' element={<FormItemToggleButtonGroup />} />
              <Route path='/rating' element={<FormItemRating />} />
              <Route path='/text_editor' element={<FormItemTextEditor />} />
              <Route path='/file' element={<FormItemFile />} />
              <Route path='/date' element={<FormItemDate />} />
              <Route path='*' element={<Navigate to={rootPath} />} />
            </Routes>
          }
        />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Navigate to={rootPath} />} />
      </>
    ),
    [rootPath]
  );

  return (
    <Routes>
      <Route path={`${rootPath}*`} element={<Routes>{basicRoutes}</Routes>} />
      <Route path='*' element={<Navigate to={rootPath} />} />
    </Routes>
  );
};

export default RootRoutes;
